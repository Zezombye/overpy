settings {
    "main": {
        "description": "Change nights through workshop settings (orange card)\nDMG46 / Release 1.0.4 (March 2024) / Alomare#11266",
        "modeName": "Five Nights at Ecopoint"
    },
    "lobby": {
        "allowPlayersInQueue": true,
        "mapRotation": "paused",
        "enableMatchVoiceChat": true,
        "spectatorSlots": 12,
        "team1Slots": 1,
        "team2Slots": 0,
        "returnToLobby": "afterGame"
    },
    "gamemodes": {
        "elimination": {
            "enabled": false,
            "enableTiebreaker": false
        },
        "tdm": {
            "enabledMaps": [
                "ecopointAntarcticaWinter"
            ],
            "enableSelfInitiatedRespawn": false
        },
        "general": {
            "gamemodeStartTrigger": "immediately",
            "heroLimit": "off",
            "enableKillFeed": false,
            "enableRandomHeroes": true,
            "respawnTime%": 0,
            "spawnHealthPacks": "disabled"
        }
    },
    "heroes": {
        "team1": {
            "mei": {
                "enableAbility1": false,
                "enableAbility2": false,
                "enableInfiniteAmmo": true,
                "enablePrimaryFire": false,
                "enableSecondaryFire": false,
                "enableUlt": false
            },
            "reinhardt": {
                "ability1Cooldown%": 0
            }
        },
        "team2": {
            "general": {
                "enableSpawningWithUlt": true
            }
        },
        "allTeams": {
            "enabledHeroes": [
                "mei"
            ]
        }
    }
}

#Global variables

globalvar NightNumber 0
globalvar AutoRestart 1
globalvar NoJumpscares 2
globalvar Cheats 3
globalvar Echo 4
globalvar Orisa 5
globalvar Genji 6
globalvar Bastion 7
globalvar Zen 8
globalvar CamShake 9
globalvar CurrentCam 10
globalvar Player_ 11
globalvar LastCam 12
globalvar InteractCams 13
globalvar CamsJammed 14
globalvar TextChatOn 15
globalvar CurrentTime 16
globalvar Power 17
globalvar NightPhase 18
globalvar ClosedFrontDoor 19
globalvar InteractFrontDoor 20
globalvar ClosedLeftDoor 21
globalvar InteractLeftDoor 22
globalvar ClosedRightDoor 23
globalvar InteractRightDoor 24
globalvar PowerUsage 25
globalvar BastionPhase 26
globalvar EchoPhase 27
globalvar ZenDoorNumber 28
globalvar Blinded 29
globalvar PhoneRings 30
globalvar CamPositions 31
globalvar HeightFrontDoor 32
globalvar HeightRightDoor 33
globalvar HeightLeftDoor 34
globalvar DoorsWalkable 35
globalvar CamLookAts 36
globalvar ZenAI 37
globalvar BastionAI 38
globalvar OrisaAI 39
globalvar EchoAI 40
globalvar GenjiAI 41
globalvar OrisaMeter 42
globalvar OrisaAIPrevious 43
globalvar HeaterPower 44
globalvar WarningIconVisible 45
globalvar ZenPositions 46
globalvar ZenPositions2 47
globalvar ZenPickedCamAndPos 48
globalvar BarValue 49
globalvar BarTextAndColor 50


#Player variables

playervar HasMoved 0


#Subroutine names

subroutine OutlineFix 0
subroutine CameraShake 1
subroutine CamsJammed 2
subroutine PhoneRing 3
subroutine BastionJumpscare 4
subroutine EchoJumpscare 5
subroutine OrisaJumpscare 6
subroutine GenjiJumpscare 7
subroutine ZenSequence 8
subroutine ZenJumpscare 9
subroutine Night6Call 10
subroutine ZenDoor 11
subroutine ZenMove 12


#Activated extensions

#!extension beamEffects
#!extension beamSounds
#!extension buffStatusEffects
#!extension debuffStatusEffects
#!extension buffAndDebuffSounds
#!extension energyExplosionEffects
#!extension explosionSounds
#!extension playMoreEffects


#Only remove the following directive if the gamemode does not use tricks such as A+0, A*0, "am" == "**", etc which would otherwise be optimized out.
#!optimizeStrict


rule "[WS] Settings":
    NightNumber = createWorkshopSettingEnum("GENERAL", "NIGHT NUMBER", 0, ["NIGHT 1", "NIGHT 2", "NIGHT 3", "NIGHT 4", "NIGHT 5", "NIGHT 6", "CUSTOM NIGHT"])
    AutoRestart = createWorkshopSettingBool("GENERAL", "AUTO-RESTART ON DEATH", false, 1)
    NoJumpscares = createWorkshopSettingBool("GENERAL", "NO JUMPSCARES MODE", false, 2)
    #CHEATS
    Cheats[0] = createWorkshopSettingBool("CHEATS", "SHOW ENEMY INFO", false)
    Cheats[1] = createWorkshopSettingBool("CHEATS", "UNLIMITED POWER", false)


def OutlineFix():
    @Name "OutlineFix"
    
    getPlayers(Team.2).teleport(vect(0, -1000, 0))
    kill(getPlayers(Team.2))
    wait()
    getAllPlayers().startForcingOutlineFor(getAllPlayers(), false, null)
    wait()
    getPlayers(Team.2).resurrect()
    Echo.setStatusEffect(null, Status.KNOCKED_DOWN, 99999)
    Orisa.setStatusEffect(null, Status.KNOCKED_DOWN, 99999)
    Genji.setStatusEffect(null, Status.KNOCKED_DOWN, 99999)
    Bastion.teleport(vect(-12.74, 7, -49.92))
    Echo.teleport(vect(28.62, 3, 2.9))
    Orisa.teleport(vect(-10.7, 8.52, -0.37))
    Genji.teleport(vect(-2.6, 7, 54.5))
    Zen.teleport(vect(2, 7.4, 22.4))


def CameraShake():
    @Name "[SR] Camera Shake"
    
    CamShake = vect(random.uniform(-0.1, 0.1), random.uniform(-0.1, 0.1), random.uniform(-0.1, 0.1))
    wait()
    loop()


def CamsJammed():
    @Name "[SR] Cams Jammed"
    
    if CurrentCam:
        Player_.clearStatusEffect(Status.ROOTED)
        Player_.setGravity(100)
        LastCam = CurrentCam
        Player_.stopCamera()
        Player_.setFacing(directionTowards(Player_.getEyePosition(), InteractCams), Relativity.TO_WORLD)
        CurrentCam = 0
    chaseAtRate(CamsJammed, 0, 1, ChaseRateReeval.NONE)
    CamsJammed += 9
    wait(0.05)
    playEffect(getAllPlayers(), DynamicEffect.WIDOWMAKER_VENOM_MINE_EXPLOSION_SOUND, Color.TEAM_1, InteractCams, 55)
    waitUntil(not CamsJammed, 99999)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.ORANGE, InteractCams, 0.25)


rule "[EP] Toggle Text Chat":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    
    if TextChatOn:
        eventPlayer.disableTextChat()
        smallMessage(getAllPlayers(), "TEXT CHAT DISABLED")
        TextChatOn = 0
    else:
        eventPlayer.enableTextChat()
        smallMessage(getAllPlayers(), "TEXT CHAT ENABLED")
        TextChatOn = 1
    wait(0.5)


rule "[G] Defeat":
    @Event playerDied
    @Condition eventPlayer == Player_
    
    enableMusic()
    declareTeamVictory(Team.2)
    if not AutoRestart:
        return
    wait(2)
    restartMatch()


rule "[G] Victory":
    @Condition CurrentTime >= 6
    @Condition NightNumber != 5
    
    enableMusic()
    declareTeamVictory(Team.1)


rule "[G] Power 0":
    @Condition isGameInProgress() == true
    @Condition Power <= 0
    @Condition Player_.isAlive() == true
    @Condition NightPhase >= 3
    
    wait(0.1, Wait.ABORT_WHEN_FALSE)
    playEffect(getAllPlayers(), DynamicEffect.LUCIO_SOUND_BARRIER_CAST_SOUND, Color.TEAM_1, InteractCams, 100)
    if ClosedFrontDoor:
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Color.TEAM_2, InteractFrontDoor, 35)
        chaseOverTime(HeightFrontDoor, 0.01, 0.4, ChaseTimeReeval.NONE)
        ClosedFrontDoor = 0
    if ClosedLeftDoor:
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Color.TEAM_2, InteractLeftDoor, 35)
        chaseOverTime(HeightLeftDoor, 0.01, 0.4, ChaseTimeReeval.NONE)
        ClosedLeftDoor = 0
    if ClosedRightDoor:
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Color.TEAM_2, InteractRightDoor, 35)
        chaseOverTime(HeightRightDoor, 0.01, 0.4, ChaseTimeReeval.NONE)
        ClosedRightDoor = 0
    PowerUsage = 0


rule "[G] Rein Charge":
    @Condition isGameInProgress() == true
    @Condition getPlayersInSlot(1, Team.1).isAlive() == true
    @Condition (any([i >= 3 or i <= -3 for i in [BastionPhase, EchoPhase]]) or ZenDoorNumber) == true
    @Condition getPlayersInSlot(1, Team.1).isUsingAbility1() == false
    
    getPlayersInSlot(1, Team.1).cancelPrimaryAction()
    getPlayersInSlot(1, Team.1).setAbilityCooldown(Button.ABILITY_1, 0)
    getPlayersInSlot(1, Team.1).forceButtonPress(Button.ABILITY_1)
    waitUntil(not getPlayersInSlot(1, Team.1).isUsingAbility1(), 99999)
    if ruleCondition:
        loop()


rule "[G] Main Setup":
    #REIN
    createDummy(Hero.REINHARDT, Team.1, 1, vect(0, 200, 0), vect(-1, 0, 0))
    getPlayersInSlot(1, Team.1).startForcingPosition(vect(0, 200, 0), false)
    getPlayersInSlot(1, Team.1).setInvisibility(Invis.ALL)
    #STUFF
    disableAnnouncer()
    disableGamemodeCompletion()
    disableMusic()
    disableScoring()
    disableInspector()
    NightPhase = 999
    waitUntil(isGameInProgress() and getPlayersInSlot(0, Team.1).hasSpawned(), 99999)
    async(OutlineFix, AsyncBehavior.RESTART)
    pauseMatchTime()
    Player_ = getPlayersInSlot(0, Team.1)
    Power = 100
    PowerUsage = 1
    chaseOverTime(CurrentTime, 6, 512, ChaseTimeReeval.NONE)
    createEffect(Player_ if Blinded else null, Effect.SPHERE, Color.BLACK, Player_, 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    Player_.teleport(vect(-1.06, 7.4, -27.55))
    Player_.setFacing(vect(0.7, 0, 0.7), Relativity.TO_WORLD)
    getAllPlayers().disableScoreboard()
    getAllPlayers().disableGamemodeHud()
    getAllPlayers().disableHeroHud()
    getAllPlayers().startForcingOutlineFor(getAllPlayers(), false, Color.WHITE)
    getAllPlayers().disableNameplatesFor(getAllPlayers())
    getAllPlayers().disableTextChat()
    getAllPlayers().setKnockbackReceived(0)
    Player_.setDamageDealt(0)
    #HUD
    if NightNumber == 5:
        goto lbl_0
    hudText(getAllPlayers(), "{0} AM".format(12 if CurrentTime < 1 else floor(CurrentTime)), "NIGHT {0}".format(NightNumber + 1), "CHEATS ENABLED" if any(Cheats) else l"", HudPosition.RIGHT, 0, Color.WHITE, Color.WHITE, Color.TURQUOISE, HudReeval.VISIBILITY_AND_STRING)
    lbl_0:
    hudHeader(getAllPlayers(), "POWER: {0}%".format(floor(Power)), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(), null, " \r\nUSAGE", "{0}{0}{0}{0}{0}".format("■").substring(0, PowerUsage), HudPosition.LEFT, 1, Color.WHITE, Color.WHITE, Color.GREEN if PowerUsage <= 2 else Color.YELLOW if PowerUsage > 2 and PowerUsage <= 3 else Color.RED, HudReeval.VISIBILITY_STRING_AND_COLOR)
    createInWorldText(localPlayer if PhoneRings else null, "HOLD [{0}] TO ANSWER PHONE OR WAIT TO IGNORE".format(inputBindingString(Button.ABILITY_1)), updateEveryFrame((CamPositions[CurrentCam] if CurrentCam else Player_.getEyePosition()) + ((directionFromAngles(Player_.getHorizontalFacingAngle(), Player_.getVerticalFacingAngle() + 18)) * 1000)), 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 200))
    createInWorldText(Player_ if not CurrentCam else null, "⊙", updateEveryFrame(Player_.getEyePosition() + ((directionFromAngles(Player_.getHorizontalFacingAngle(), Player_.getVerticalFacingAngle() + 3.87)) * 1000)), 2.3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 170))


rule "DOORS":
    @Disabled
    @Delimiter
    


rule "[G] Doors FX":
    wait(0.25)
    #Heights
    HeightFrontDoor = 0.01
    HeightRightDoor = 0.01
    HeightLeftDoor = 0.01
    #Interact
    InteractFrontDoor = vect(6.99, 8.92, -22.78)
    InteractRightDoor = vect(-1.8, 8.8, -23.51)
    InteractLeftDoor = vect(0.7, 8.8, -30.66)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED if ClosedFrontDoor else Color.GRAY, InteractFrontDoor, 0.15)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED if ClosedRightDoor else Color.GRAY, InteractRightDoor, 0.15)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.RED if ClosedLeftDoor else Color.GRAY, InteractLeftDoor, 0.15)
    wait(0.05)
    if NightNumber >= 1:
        goto lbl_0
    createInWorldText(getAllPlayers() if CurrentTime < 1 and not CurrentCam else null, "FRONT GATE", InteractFrontDoor, 0.9, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 175))
    createInWorldText(getAllPlayers() if CurrentTime < 1 and not CurrentCam else null, "LEFT GATE", InteractLeftDoor, 0.9, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 175))
    createInWorldText(getAllPlayers() if CurrentTime < 1 and not CurrentCam else null, "RIGHT GATE", InteractRightDoor, 0.9, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 175))
    wait(0.05)
    lbl_0:
    createEffect(getAllPlayers() if distance(Player_.getEyePosition(), InteractFrontDoor) < 2 and angleBetweenVectors(Player_.getFacingDirection(), directionTowards(Player_.getEyePosition(), InteractFrontDoor)) < 30 else null, Effect.SPHERE, Color.WHITE, InteractFrontDoor, 0.065)
    createEffect(getAllPlayers() if distance(Player_.getEyePosition(), InteractRightDoor) < 2 and angleBetweenVectors(Player_.getFacingDirection(), directionTowards(Player_.getEyePosition(), InteractRightDoor)) < 30 else null, Effect.SPHERE, Color.WHITE, InteractRightDoor, 0.065)
    createEffect(getAllPlayers() if distance(Player_.getEyePosition(), InteractLeftDoor) < 2 and angleBetweenVectors(Player_.getFacingDirection(), directionTowards(Player_.getEyePosition(), InteractLeftDoor)) < 30 else null, Effect.SPHERE, Color.WHITE, InteractLeftDoor, 0.065)
    wait(0.05)
    #FRONT BEAMS
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(5.96, 10.88, -20.88), vect(5.96, 10.88 + HeightFrontDoor, -20.88), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(5.64, 10.88, -20.57), vect(5.64, 10.88 + HeightFrontDoor, -20.57), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(5.33, 10.88, -20.26), vect(5.33, 10.88 + HeightFrontDoor, -20.26), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(0.05)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(6.27, 10.88, -21.19), vect(6.27, 10.88 + HeightFrontDoor, -21.19), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(6.57, 10.88, -21.5), vect(6.57, 10.88 + HeightFrontDoor, -21.5), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GRAPPLE, vect(6.81, 10.88 + HeightFrontDoor, -21.74), vect(5.09, 10.88 + HeightFrontDoor, -20.02), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(0.05)
    #LEFT BEAMS
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(2.48, 10.88, -30.14), vect(2.48, 10.88 + HeightLeftDoor, -30.14), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(2.79, 10.88, -29.83), vect(2.79, 10.88 + HeightLeftDoor, -29.83), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(3.1, 10.88, -29.52), vect(3.1, 10.88 + HeightLeftDoor, -29.52), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(0.05)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(2.17, 10.88, -30.45), vect(2.17, 10.88 + HeightLeftDoor, -30.45), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(1.86, 10.88, -30.76), vect(1.86, 10.88 + HeightLeftDoor, -30.76), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GRAPPLE, vect(1.64, 10.88 + HeightLeftDoor, -31), vect(3.33, 10.88 + HeightLeftDoor, -29.29), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(0.05)
    #RIGHT BEAMS
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(-3.3, 10.88, -24.36), vect(-3.3, 10.88 + HeightRightDoor, -24.36), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(-3.61, 10.88, -24.67), vect(-3.61, 10.88 + HeightRightDoor, -24.67), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(-3.92, 10.88, -24.98), vect(-3.92, 10.88 + HeightRightDoor, -24.98), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    wait(0.05)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(-2.99, 10.88, -24.05), vect(-2.99, 10.88 + HeightRightDoor, -24.05), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.SYMMETRA_PROJECTOR, vect(-2.68, 10.88, -23.74), vect(-2.68, 10.88 + HeightRightDoor, -23.74), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GRAPPLE, vect(-2.45, 10.88 + HeightRightDoor, -23.51), vect(-4.15, 10.88 + HeightRightDoor, -25.21), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "[G] Front Door Interact":
    @Condition isGameInProgress() == true
    @Condition distance(Player_.getEyePosition(), InteractFrontDoor) < 2
    @Condition angleBetweenVectors(Player_.getFacingDirection(), directionTowards(Player_.getEyePosition(), InteractFrontDoor)) < 30
    @Condition Player_.isHoldingButton(Button.INTERACT) == true
    @Condition isInLoS(Player_.getEyePosition(), InteractFrontDoor) == true
    
    if Power:
        if ClosedFrontDoor:
            playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Color.TEAM_2, InteractFrontDoor, 35)
            chaseOverTime(HeightFrontDoor, 0.01, 0.4, ChaseTimeReeval.NONE)
            ClosedFrontDoor = 0
            PowerUsage--
            wait(0.4)
        else:
            playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND, Color.TEAM_2, InteractFrontDoor, 50)
            chaseOverTime(HeightFrontDoor, -3.5, 0.4, ChaseTimeReeval.NONE)
            ClosedFrontDoor = 1
            PowerUsage++
            wait(0.4)
            if not Power:
                return
            playEffect(getAllPlayers(), DynamicEffect.WRECKING_BALL_PILEDRIVER_IMPACT_SOUND, Color.TEAM_2, InteractFrontDoor, 8)
    else:
        playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, InteractFrontDoor, 125)


rule "[G] Left Door Interact":
    @Condition isGameInProgress() == true
    @Condition distance(Player_.getEyePosition(), InteractLeftDoor) < 2
    @Condition angleBetweenVectors(Player_.getFacingDirection(), directionTowards(Player_.getEyePosition(), InteractLeftDoor)) < 30
    @Condition Player_.isHoldingButton(Button.INTERACT) == true
    @Condition isInLoS(Player_.getEyePosition(), InteractLeftDoor) == true
    
    if Power:
        if ClosedLeftDoor:
            playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Color.TEAM_2, InteractLeftDoor, 35)
            chaseOverTime(HeightLeftDoor, 0.01, 0.4, ChaseTimeReeval.NONE)
            ClosedLeftDoor = 0
            PowerUsage--
            wait(0.4)
        else:
            playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND, Color.TEAM_2, InteractLeftDoor, 50)
            chaseOverTime(HeightLeftDoor, -3.5, 0.4, ChaseTimeReeval.NONE)
            ClosedLeftDoor = 1
            PowerUsage++
            wait(0.4)
            if not Power:
                return
            playEffect(getAllPlayers(), DynamicEffect.WRECKING_BALL_PILEDRIVER_IMPACT_SOUND, Color.TEAM_2, InteractLeftDoor, 8)
    else:
        playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, InteractLeftDoor, 125)


rule "[G] Right Door Interact":
    @Condition isGameInProgress() == true
    @Condition distance(Player_.getEyePosition(), InteractRightDoor) < 2
    @Condition angleBetweenVectors(Player_.getFacingDirection(), directionTowards(Player_.getEyePosition(), InteractRightDoor)) < 30
    @Condition Player_.isHoldingButton(Button.INTERACT) == true
    @Condition isInLoS(Player_.getEyePosition(), InteractRightDoor) == true
    
    if Power:
        if ClosedRightDoor:
            playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Color.TEAM_2, InteractRightDoor, 35)
            chaseOverTime(HeightRightDoor, 0.01, 0.4, ChaseTimeReeval.NONE)
            ClosedRightDoor = 0
            PowerUsage--
            wait(0.4)
        else:
            playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND, Color.TEAM_2, InteractRightDoor, 50)
            chaseOverTime(HeightRightDoor, -3.5, 0.4, ChaseTimeReeval.NONE)
            ClosedRightDoor = 1
            PowerUsage++
            wait(0.4)
            if not Power:
                return
            playEffect(getAllPlayers(), DynamicEffect.WRECKING_BALL_PILEDRIVER_IMPACT_SOUND, Color.TEAM_2, InteractRightDoor, 8)
    else:
        playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, InteractRightDoor, 125)


rule "[G] Front Door Barrier":
    @Condition isGameInProgress() == true
    @Condition distance(Player_.getPosition(), vect(8.21, 7.38, -18.62)) < 4
    @Condition (not DoorsWalkable or ClosedFrontDoor) == true
    
    Player_.applyImpulse(directionTowards(vect(8.43, 7.38, -18.4), Player_.getPosition()), 4, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(0.02)
    if ruleCondition:
        loop()


rule "[G] Left Door Barrier":
    @Condition isGameInProgress() == true
    @Condition distance(Player_.getPosition(), vect(4.81, 7.38, -32.44)) < 4
    @Condition (not DoorsWalkable or ClosedLeftDoor) == true
    
    Player_.applyImpulse(directionTowards(vect(5.02, 7.38, -32.66), Player_.getPosition()), 4, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(0.02)
    if ruleCondition:
        loop()


rule "[G] Right Door Barrier":
    @Condition isGameInProgress() == true
    @Condition distance(Player_.getPosition(), vect(-5.65, 7.38, -22.06)) < 4
    @Condition (not DoorsWalkable or ClosedRightDoor) == true
    
    Player_.applyImpulse(directionTowards(vect(-5.87, 7.38, -21.84), Player_.getPosition()), 4, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(0.02)
    if ruleCondition:
        loop()


rule "CAMERAS":
    @Disabled
    @Delimiter
    


rule "[G] Cams Setup":
    CamPositions = [null, vect(1.367, 9.276, -54.926), vect(-5.5, 10, -27), vect(-10.08, 9.75, -8.96), vect(20.45, 3.38, 1.08), vect(18, 7.1, -6.6), vect(21.7, 11.51, -8.91), vect(-3.8, 10.4, 52.8)]
    CamLookAts = [null, vect(-0.97, -0.1, 0.2), vect(-0.7, -0.25, -0.7), vect(-0.4, -0.3, 0.87), vect(1, 0, 0), vect(0, -0.3, -1), vect(0.6, -0.15, 0.79), vect(-0.18, -0.78, 0.6)]
    InteractCams = vect(0.55, 8.4, -22.2)
    CurrentCam = 0
    LastCam = 1
    if NightNumber >= 1:
        goto lbl_0
    createInWorldText(localPlayer if CurrentTime < 1 and not CurrentCam else null, "[{0}] TO ENTER/LEAVE CAMERAS".format(inputBindingString(Button.INTERACT)), InteractCams, 1, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 200))
    lbl_0:
    hudHeader(getAllPlayers() if CurrentCam else null, "CAM {0}".format(CurrentCam), HudPosition.TOP, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubheader(localPlayer if CurrentCam else null, "<  {0}  |  {1}  >".format(inputBindingString(Button.SECONDARY_FIRE), inputBindingString(Button.PRIMARY_FIRE)), HudPosition.TOP, 1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    createEffect(getAllPlayers() if distance(Player_.getEyePosition(), InteractCams) < 2 and angleBetweenVectors(Player_.getFacingDirection(), directionTowards(Player_.getEyePosition(), InteractCams)) < 30 else null, Effect.SPHERE, Color.WHITE, InteractCams, 0.065)
    createEffect(getAllPlayers() if CamsJammed else null, Effect.WINSTON_PRIMAL_RAGE, Color.TEAM_1, InteractCams, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.RING, Color.ORANGE if CamsJammed else Color.GRAY, InteractCams, 0.1)
    wait(0.1)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLACK, CamPositions[1], 0.25, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLACK, CamPositions[2], 0.25, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLACK, CamPositions[3], 0.25, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLACK, CamPositions[4], 0.25, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLACK, CamPositions[5], 0.25, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLACK, CamPositions[6], 0.25, EffectReeval.VISIBILITY)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.BLACK, CamPositions[7], 0.25, EffectReeval.VISIBILITY)


rule "[EP] Cams Interact":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition distance(eventPlayer.getEyePosition(), InteractCams) < 2
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition eventPlayer.isMoving() == false
    @Condition eventPlayer.isDummy() == false
    
    if not CamsJammed and Power:
        if CurrentCam == 0:
            if angleBetweenVectors(eventPlayer.getFacingDirection(), directionTowards(eventPlayer.getEyePosition(), InteractCams)) >= 30:
                return
            CurrentCam = LastCam
            PowerUsage++
            eventPlayer.setStatusEffect(null, Status.ROOTED, 9999)
            eventPlayer.setGravity(0)
            eventPlayer.setMeleeEnabled(false)
            eventPlayer.startCamera(CamPositions[CurrentCam], updateEveryFrame(CamPositions[CurrentCam] + eventPlayer.getFacingDirection()))
            eventPlayer.setFacing(CamLookAts[CurrentCam], Relativity.TO_WORLD)
            wait(0.05)
            playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATING_SOUND, Color.TEAM_2, CamPositions[CurrentCam], 45)
        else:
            CurrentCam = 0
            PowerUsage--
            eventPlayer.clearStatusEffect(Status.ROOTED)
            eventPlayer.setGravity(100)
            eventPlayer.setMeleeEnabled(true)
            eventPlayer.stopCamera()
            eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), InteractCams), Relativity.TO_WORLD)
        wait(0.05)
        playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_2, eventPlayer.getPosition(), 200)
    else:
        playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, InteractCams, 125)


rule "[EP] Cycle Cams":
    @Event eachPlayer
    @Condition (eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) or eventPlayer.isHoldingButton(Button.SECONDARY_FIRE)) == true
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == false
    @Condition CurrentCam != 0
    #@Condition Power > 0
    @Condition eventPlayer.isDummy() == false
    
    if eventPlayer.isHoldingButton(Button.PRIMARY_FIRE):
        if CurrentCam >= len(CamPositions) - 1:
            CurrentCam = 1
        else:
            CurrentCam++
    elif eventPlayer.isHoldingButton(Button.SECONDARY_FIRE):
        if CurrentCam <= 1:
            CurrentCam = len(CamPositions) - 1
        else:
            CurrentCam--
    eventPlayer.setFacing(CamLookAts[CurrentCam], Relativity.TO_WORLD)
    wait(0.05)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATING_SOUND, Color.TEAM_1, CamPositions[CurrentCam], 45)


rule "[G] Update Last Cam / Zen Chance":
    @Condition isGameInProgress() == true
    @Condition CurrentCam != 0
    @Condition LastCam != CurrentCam
    
    LastCam = CurrentCam
    if random.randint(1, 100) > ZenAI or NightNumber == 5:
        return
    async(ZenSequence, AsyncBehavior.NOOP)


rule "NIGHTS":
    @Disabled
    @Delimiter
    


def PhoneRing():
    @Name "[SR] Phone Ring"
    
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)
    waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 0.08)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, null, InteractCams, 8)


rule "[G] Night 1":
    @Condition NightNumber == 0
    @Condition isGameInProgress() == true
    
    if Cheats[1]:
        goto lbl_0
    chaseAtRate(Power, 0, 0.083 * PowerUsage)
    lbl_0:
    bigMessage(getAllPlayers(), "SURVIVE UNTIL 6 AM")
    waitUntil(CurrentTime >= 2, 99999)
    BastionAI += 3
    waitUntil(CurrentTime >= 3, 99999)
    if random.randint(1, 100) > 10:
        goto lbl_1
    smallMessage(getAllPlayers(), "[?] IT SHOULD HAVE BEEN YOU.")
    lbl_1:
    BastionAI++
    OrisaAI += 3


rule "[G] Night 1 Call":
    @Condition NightNumber == 0
    @Condition isGameInProgress() == true
    @Condition Player_.isAlive() == true
    
    wait(0.5)
    PhoneRings = 4
    while PhoneRings and not Player_.isHoldingButton(Button.ABILITY_1):
        PhoneRing()
        PhoneRings--
        waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 2)
    if not Player_.isHoldingButton(Button.ABILITY_1):
        return
    PhoneRings = 0
    wait(0.5)
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 200)
    wait(0.5)
    smallMessage(getAllPlayers(), "[MAX] UHM... HELLO? MEI?")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AH, THANK GOD COMMS ARE BACK.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] YOU SHOULD RECEIVE THIS BY TOMORROW NIGHT...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] WHAT A TRAGEDY. I'M REALLY SORRY ABOUT YOUR FRIENDS.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THESE NINE YEARS HAVE BEEN ROUGH, BUT IT'S GOOD TO HAVE YOU BACK.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] ANYWAY, THERE'S NO TIME TO WASTE.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THE NEW CREW IS GETTING READY...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] BUT THE STORM HAS SEVERELY DAMAGED")
    wait(1.5)
    smallMessage(getAllPlayers(), "MOST OF THE EQUIPMENT IN THERE...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] INCLUDING SECURITY SYSTEMS.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] SO WE'VE ASSIGNED YOU TO GET FAMILIAR")
    wait(1.5)
    smallMessage(getAllPlayers(), "WITH OUR - VERY EXPENSIVE - ROBOTS...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AND MAKE SURE THEY'RE IN GOOD CONDITIONS.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] SO... YEAH. JUST KEEP THEM SAFE AND WORKING.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AND REPORT ME ANYTHING STRANGE YOU FIND.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] WE'LL TALK MORE TOMORROW. GOOD LUCK!")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX HANGS UP]")
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 130)


rule "[G] Night 2":
    @Condition NightNumber == 1
    @Condition isGameInProgress() == true
    
    if Cheats[1]:
        goto lbl_0
    chaseAtRate(Power, 0, 0.1 * PowerUsage)
    lbl_0:
    bigMessage(getAllPlayers(), "SURVIVE UNTIL 6 AM")
    ZenAI++
    BastionAI += 2
    waitUntil(CurrentTime >= 1, 99999)
    BastionAI += 2
    OrisaAI += 3
    waitUntil(CurrentTime >= 2, 99999)
    if random.randint(1, 100) > 10:
        goto lbl_1
    smallMessage(getAllPlayers(), "[?] IT'S ALL YOUR FAULT.")
    lbl_1:
    EchoAI += 2
    waitUntil(CurrentTime >= 3, 99999)
    BastionAI += 2
    waitUntil(CurrentTime >= 4, 99999)
    EchoAI++


rule "[G] Night 2 Call":
    @Condition NightNumber == 1
    @Condition isGameInProgress() == true
    @Condition Player_.isAlive() == true
    
    wait(0.5)
    PhoneRings = 4
    while PhoneRings and not Player_.isHoldingButton(Button.ABILITY_1):
        PhoneRing()
        PhoneRings--
        waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 2)
    if not Player_.isHoldingButton(Button.ABILITY_1):
        return
    PhoneRings = 0
    wait(0.5)
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 200)
    wait(0.5)
    smallMessage(getAllPlayers(), "[MAX] MEI! WHAT'S UP?")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] HOPE YOU'RE DOING FINE OUT THERE.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] I HAVE SOME NEW INFO BASED ON YOUR REPORTS...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AND I GOTTA FILL YOU UP RIGHT NOW.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] SO... THERE'S SOMETHING ABOUT ECHO.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] YOU MUST HAVE SEEN HER SOMEWHERE ALREADY.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] SHE IS... SMARTER THAN THE OTHER ONES...")
    wait(0.5)
    smallMessage(getAllPlayers(), "IN A CERTAIN WAY.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] SHE HAS REMOTE ACCESS TO THE POWER NETWORK...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AND SHE IS MALFUNCTIONING RIGHT NOW.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] BUT NO WORRIES!")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] IF SHE TRIES TO PLAY ANY TRICKS ON YOU...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] JUST CLOSE THE GATE AND HIDE FROM HER VIEW FOR A BIT.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THAT UH... SHOULD MAKE HER GO AWAY FOR A WHILE.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] I THINK THAT'S IT. GOOD LUCK AGAIN!")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AND KEEP SENDING THESE REPORTS.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THEY'RE VERY HELPFUL.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] PEACE!")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX HANGS UP]")
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 130)


rule "[G] Night 3":
    @Condition NightNumber == 2
    @Condition isGameInProgress() == true
    
    NightPhase = 999
    if Cheats[1]:
        goto lbl_0
    chaseAtRate(Power, 0, 0.116 * PowerUsage)
    lbl_0:
    bigMessage(getAllPlayers(), "SURVIVE UNTIL 6 AM")
    ZenAI++
    GenjiAI += 2
    BastionAI += 3
    OrisaAI += 3
    waitUntil(CurrentTime >= 1, 99999)
    EchoAI += 4
    waitUntil(CurrentTime >= 2, 99999)
    BastionAI += 2
    OrisaAI++
    waitUntil(CurrentTime >= 3, 99999)
    EchoAI += 3
    waitUntil(CurrentTime >= 4, 99999)
    if random.randint(1, 100) > 10:
        goto lbl_1
    smallMessage(getAllPlayers(), "[?] IT'S YOUR TURN TO FREEZE.")
    lbl_1:
    OrisaAI += 2


rule "[G] Night 3 Call":
    @Condition NightNumber == 2
    @Condition isGameInProgress() == true
    @Condition Player_.isAlive() == true
    
    wait(0.5)
    PhoneRings = 4
    while PhoneRings and not Player_.isHoldingButton(Button.ABILITY_1):
        PhoneRing()
        PhoneRings--
        waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 2)
    if not Player_.isHoldingButton(Button.ABILITY_1):
        return
    PhoneRings = 0
    wait(0.5)
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 200)
    wait(0.5)
    smallMessage(getAllPlayers(), "[MAX] HELLO HELLO! READY FOR YOUR THIRD NIGHT?")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] WE HAVE BEEN REEEALLY BUSY WITH")
    wait(0.5)
    smallMessage(getAllPlayers(), "ALL THE READINGS YOU PROVIDED ME.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THERE'S ANOTHER DETAIL YOU MUST KNOW.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THE OLD HUNTER BOT PROTOTYPE...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THAT WAS BEING KEPT IN ECOPOINT FOR REASONS")
    wait(0.5)
    smallMessage(getAllPlayers(), "EVEN I DON'T KNOW...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] HAS BOOTED UP SOMEHOW.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] HE USES THERMAL SENSORS TO FIND AND NEUTRALIZE...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] ANYTHING THAT'S DOING SOMETHING IT IS")
    wait(0.5)
    smallMessage(getAllPlayers(), "PROGRAMMED TO PREVENT.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AND SINCE THE FACILITY IS IN LOCKDOWN...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AND THE ONLY HEAT SIGNATURE AROUND IS YOU...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] WELL, I THINK YOU KNOW WHAT I MEAN.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] BUT DON'T PANIC. WE'VE PLAYED AROUND")
    wait(0.5)
    smallMessage(getAllPlayers(), "WITH THE HEAT SYSTEM FOR A BIT...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] TO MESS WITH HIS SENSORS...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AND LOCK HIM IN THE CORRIDOR NEXT TO")
    wait(0.5)
    smallMessage(getAllPlayers(), "THE CREW QUARTERS.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] SO YOU SHOULD BE SAFE...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] AS LONG AS YOU KEEP THAT HEATER POWERED.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] I'M REALLY SORRY ABOUT THIS MEI.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] WE'RE WORKING HARD TO FIX EVERYTHING.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THIS DAMN STORM...")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] BUT YOU'LL BE FINE. I PROMISE.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THANK YOU FOR DOING THIS FOR US.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX HANGS UP]")
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 130)


rule "[G] Night 4":
    @Condition NightNumber == 3
    @Condition isGameInProgress() == true
    
    if Cheats[1]:
        goto lbl_0
    chaseAtRate(Power, 0, 0.12 * PowerUsage)
    lbl_0:
    bigMessage(getAllPlayers(), "SURVIVE UNTIL 6 AM")
    ZenAI++
    GenjiAI += 3
    OrisaAI += 3
    BastionAI += 4
    EchoAI += 4
    waitUntil(CurrentTime >= 2, 99999)
    BastionAI += 4
    EchoAI += 4
    waitUntil(CurrentTime >= 4, 99999)
    OrisaAI += 3
    waitUntil(CurrentTime >= 5, 99999)
    GenjiAI += 9


rule "[G] Night 4 Call":
    @Condition NightNumber == 3
    @Condition isGameInProgress() == true
    @Condition Player_.isAlive() == true
    
    wait(0.5)
    PhoneRings = 4
    while PhoneRings and not Player_.isHoldingButton(Button.ABILITY_1):
        PhoneRing()
        PhoneRings--
        waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 2)
    if not Player_.isHoldingButton(Button.ABILITY_1):
        return
    PhoneRings = 0
    wait(0.5)
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 200)
    wait(0.5)
    smallMessage(getAllPlayers(), "...")
    wait(3)
    smallMessage(getAllPlayers(), "...")
    wait(3)
    smallMessage(getAllPlayers(), "...")
    wait(3)
    smallMessage(getAllPlayers(), "[STATIC]")
    wait(3)
    smallMessage(getAllPlayers(), "[?] YOU SHOULD HAVE DIED WITH US.")
    wait(2.5)
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 130)


rule "[G] Night 5":
    @Condition NightNumber == 4
    @Condition isGameInProgress() == true
    
    if Cheats[1]:
        goto lbl_0
    chaseAtRate(Power, 0, 0.125 * PowerUsage)
    lbl_0:
    bigMessage(getAllPlayers(), "SURVIVE UNTIL 6 AM")
    ZenAI += 15
    GenjiAI += 7
    OrisaAI += 6
    BastionAI += 6
    EchoAI += 5
    waitUntil(CurrentTime >= 2, 99999)
    OrisaAI += 3
    BastionAI += 2
    EchoAI += 3
    waitUntil(CurrentTime >= 4, 99999)
    if random.randint(1, 100) > 10:
        goto lbl_1
    smallMessage(getAllPlayers(), "[?] YOU LEFT US BEHIND.")
    lbl_1:
    GenjiAI += 3
    OrisaAI += 3
    BastionAI += 3
    EchoAI += 3


rule "[G] Night 5 Call":
    @Condition NightNumber == 4
    @Condition isGameInProgress() == true
    @Condition Player_.isAlive() == true
    
    wait(0.5)
    PhoneRings = 4
    while PhoneRings and not Player_.isHoldingButton(Button.ABILITY_1):
        PhoneRing()
        PhoneRings--
        waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 2)
    if not Player_.isHoldingButton(Button.ABILITY_1):
        return
    PhoneRings = 0
    wait(0.5)
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 200)
    wait(0.5)
    smallMessage(getAllPlayers(), "[MAX] MEI? I HOPE THIS MESSAGE REACHES YOU.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] YOUR SIGNAL WENT DOWN YESTERDAY.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] IF YOU'RE LISTENING TO ME, PLEASE PAY ATTENTION.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] WE'VE UNCOVERED PROJECTS FOR A FIFTH SECURITY BOT.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] WE DO NOT KNOW WHERE IT IS AND HOW IT WORKS.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] THE NEW CREW WON'T MOVE TO ECOPOINT UNTIL")
    wait(0.5)
    smallMessage(getAllPlayers(), "THIS IS ALL SORTED OUT AND CLARIFIED.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] GOD KNOWS WHY THE HELL YOU AND YOUR")
    wait(0.5)
    smallMessage(getAllPlayers(), "COLLEAGUES WERE LIVING NEXT TO THESE THINGS.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX] PLEASE BE CAREFUL. HELP IS ON THE WAY.")
    wait(3)
    smallMessage(getAllPlayers(), "[MAX HANGS UP]")
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 130)


rule "[G] Night 7 (Custom)":
    @Condition NightNumber == 6
    @Condition isGameInProgress() == true
    
    if Cheats[1]:
        goto lbl_0
    chaseAtRate(Power, 0, 0.131 * PowerUsage)
    lbl_0:
    bigMessage(getPlayers(Team.1), "SURVIVE UNTIL 6 AM")
    GenjiAI = createWorkshopSettingInt("CUSTOM NIGHT SETTINGS", "GENJI A.I LEVEL", 0, 0, 20)
    EchoAI = createWorkshopSettingInt("CUSTOM NIGHT SETTINGS", "ECHO A.I LEVEL", 0, 0, 20)
    OrisaAI = createWorkshopSettingInt("CUSTOM NIGHT SETTINGS", "ORISA A.I LEVEL", 0, 0, 20)
    BastionAI = createWorkshopSettingInt("CUSTOM NIGHT SETTINGS", "BASTION A.I LEVEL", 0, 0, 20)
    ZenAI = createWorkshopSettingInt("CUSTOM NIGHT SETTINGS", "ZENYATTA A.I LEVEL", 0, 0, 20)


rule "BASTION":
    @Disabled
    @Delimiter
    


rule "[G] Bastion Setup":
    @Condition NightNumber != 5
    
    createDummy(Hero.BASTION, Team.2, 0, vect(-12.74, 7, -49.92), vect(1, 0, 0))
    Bastion = getPlayersInSlot(0, Team.2)
    Bastion.startScalingSize(1.3, false)
    Bastion.startModifyingVoicelinePitch(1.5)
    waitUntil(isGameInProgress(), 99999)
    if not Cheats[0]:
        goto lbl_0
    createInWorldText(getAllPlayers(), "{0} {1} / {2} A.I".format(heroIcon(Hero.BASTION), BastionPhase, BastionAI), Bastion, 1.2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 175))
    lbl_0:


def BastionJumpscare():
    @Name "[SR] Bastion Jumpscare"
    
    destroyAllInWorldTexts()
    if not NoJumpscares:
        Player_.setInvisibility(Invis.ALL)
        CurrentCam = 0
        getPlayersInSlot(1, Team.1).startForcingPosition(Bastion, false)
        wait(0.04)
        Bastion.setStatusEffect(null, Status.PHASED_OUT, 3)
        getPlayersInSlot(1, Team.1).setStatusEffect(null, Status.PHASED_OUT, 3)
        wait(0.12)
        getPlayersInSlot(1, Team.1).startForcingPosition(vect(0, 200, 0), false)
        playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENAGE_NO_HEALING_SOUND, Color.TEAM_1, Player_, 200)
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_LOGO_SOUND, Color.TEAM_1, Player_, 200)
        Player_.startModifyingVoicelinePitch(0.5, false)
        Player_.addHealthPool(Health.SHIELDS, 100, true)
        damage(Player_, null, 300)
        Bastion.teleport(Player_.getPosition())
        wait(0.025)
        Player_.startCamera(updateEveryFrame(Bastion.getEyePosition() + Bastion.getFacingDirection() * 0.7), updateEveryFrame(Bastion.getEyePosition()) + CamShake)
        async(CameraShake, AsyncBehavior.RESTART)
        wait(1.5)
        kill(Player_, Bastion)
    else:
        CurrentCam = 0
        Player_.startCamera(updateEveryFrame(Bastion.getEyePosition() + Bastion.getFacingDirection() * 1.5), updateEveryFrame(Bastion.getEyePosition()))
        smallMessage(getAllPlayers(), "DEAD!")
        wait(1.5)
        kill(Player_, Bastion)


rule "[G] Bastion Progression":
    @Condition isGameInProgress() == true
    @Condition Bastion.HasMoved == true
    @Condition BastionAI != 0
    @Condition BastionPhase != -3
    @Condition BastionPhase != 3
    
    wait(5.5 + BastionAI / 6, Wait.ABORT_WHEN_FALSE)
    if random.randint(1, 20) <= BastionAI:
        Bastion.HasMoved = false
        if BastionPhase == 0:
            BastionPhase = random.choice([1, -1])
        else:
            BastionPhase += 1 if BastionPhase > 0 else -1
    loop()


rule "[G] Bastion Phase 0":
    @Condition isGameInProgress() == true
    @Condition BastionAI != 0
    @Condition BastionPhase == 0
    
    waitUntil(CurrentCam != 1, 99999)
    if BastionPhase != 0:
        return
    Bastion.teleport(vect(-12.74, 7, -49.92))
    Bastion.setFacing(vect(1, 0, 0), Relativity.TO_WORLD)
    Bastion.HasMoved = true


rule "[G] Bastion Phase 1":
    @Condition isGameInProgress() == true
    @Condition BastionAI != 0
    @Condition BastionPhase == 1
    
    waitUntil(CurrentCam != 1, 99999)
    if BastionPhase != 1:
        return
    Bastion.teleport(vect(6.46, 8.1, -50.77))
    Bastion.setFacing(vect(0.07, 0, 1), Relativity.TO_WORLD)
    Bastion.HasMoved = true


rule "[G] Bastion Phase 2":
    @Condition isGameInProgress() == true
    @Condition BastionAI != 0
    @Condition BastionPhase == 2
    
    waitUntil(CurrentCam != 1 and (not isInLoS(Player_.getEyePosition(), vect(6.08, 8.1, -40.48)) or not Player_.isInViewAngle(vect(6.08, 8.1, -40.48), 75)), 99999)
    if BastionPhase != 2:
        return
    Bastion.teleport(vect(6.59, 8.01, -45.94))
    Bastion.setFacing(vect(-0.6, 0, 0.8), Relativity.TO_WORLD)
    Bastion.HasMoved = true


rule "[G] Bastion Phase 3":
    @Condition isGameInProgress() == true
    @Condition BastionAI != 0
    @Condition BastionPhase == 3
    
    waitUntil(not isInLoS(Player_.getEyePosition(), vect(1.93, 8.43, -30.57)) or not Player_.isInViewAngle(vect(1.93, 8.43, -30.57), 75), 99999)
    if BastionPhase != 3:
        return
    Bastion.teleport(vect(3.39, 7.06, -31.06))
    Bastion.setFacing(vect(-0.71, 0, 0.71), Relativity.TO_WORLD)
    wait(6 - BastionAI / 10)
    waitUntil(not CurrentCam, 8)
    if ClosedLeftDoor:
        waitUntil(CurrentCam != 1 and (not isInLoS(Player_.getEyePosition(), Bastion.getEyePosition()) or not Player_.isInViewAngle(Bastion.getEyePosition(), 75)), 99999)
        if ClosedLeftDoor:
            BastionPhase = random.choice([-1, 1]) if random.randint(1, 100) <= BastionAI else 0
        else:
            BastionJumpscare()
    else:
        BastionJumpscare()
    Bastion.HasMoved = true


rule "[G] Bastion Phase -1":
    @Condition isGameInProgress() == true
    @Condition BastionAI != 0
    @Condition BastionPhase == -1
    
    waitUntil(CurrentCam != 1, 99999)
    if BastionPhase != -1:
        return
    Bastion.teleport(vect(-10.88, 7, -47))
    Bastion.setFacing(vect(0.02, 0, 1), Relativity.TO_WORLD)
    Bastion.HasMoved = true


rule "[G] Bastion Phase -2":
    @Condition isGameInProgress() == true
    @Condition BastionAI != 0
    @Condition BastionPhase == -2
    
    waitUntil(CurrentCam != 1 and CurrentCam != 2, 99999)
    if BastionPhase != -2:
        return
    Bastion.teleport(vect(-8.8, 7.34, -33.58))
    Bastion.setFacing(vect(0.02, 0, 1), Relativity.TO_WORLD)
    Bastion.HasMoved = true


rule "[G] Bastion Phase -3":
    @Condition isGameInProgress() == true
    @Condition BastionAI != 0
    @Condition BastionPhase == -3
    
    waitUntil(CurrentCam != 2 and OrisaMeter and (not isInLoS(Player_.getEyePosition(), vect(-4.38, 9, -23.22)) or not Player_.isInViewAngle(vect(-4.38, 9, -23.22), 75)), 99999)
    if BastionPhase != -3:
        return
    Bastion.teleport(vect(-4.38, 7.04, -23.22))
    Bastion.setFacing(vect(0.71, 0, -0.71), Relativity.TO_WORLD)
    wait(6 - BastionAI / 10)
    waitUntil(not CurrentCam, 8)
    if ClosedRightDoor:
        waitUntil(CurrentCam != 1 and (not isInLoS(Player_.getEyePosition(), Bastion.getEyePosition()) or not Player_.isInViewAngle(Bastion.getEyePosition(), 75)), 99999)
        if ClosedRightDoor:
            BastionPhase = random.choice([-1, 1]) if random.randint(1, 100) <= BastionAI else 0
        else:
            BastionJumpscare()
    else:
        BastionJumpscare()
    Bastion.HasMoved = true


rule "ECHO":
    @Disabled
    @Delimiter
    


rule "[G] Echo Setup":
    @Condition NightNumber != 5
    
    wait(0.25)
    createDummy(Hero.ECHO, Team.2, 2, vect(28.62, 3, 2.9), vect(0, 0, 1))
    Echo = getPlayersInSlot(2, Team.2)
    Echo.startScalingSize(1.2, false)
    waitUntil(isGameInProgress(), 99999)
    getPlayersOnHero(Hero.ECHO, Team.ALL).setStatusEffect(null, Status.KNOCKED_DOWN, 9999)
    if not Cheats[0]:
        goto lbl_0
    createInWorldText(getAllPlayers(), "{0} {1} / {2} A.I".format(heroIcon(Hero.ECHO), EchoPhase, EchoAI), Echo, 1.2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 175))
    lbl_0:


def EchoJumpscare():
    @Name "[SR] Echo Jumpscare"
    
    destroyAllInWorldTexts()
    if not NoJumpscares:
        Player_.setInvisibility(Invis.ALL)
        CurrentCam = 0
        getPlayersInSlot(1, Team.1).startForcingPosition(Echo, false)
        wait(0.04)
        Echo.setStatusEffect(null, Status.PHASED_OUT, 3)
        getPlayersInSlot(1, Team.1).setStatusEffect(null, Status.PHASED_OUT, 3)
        wait(0.12)
        getPlayersInSlot(1, Team.1).startForcingPosition(vect(0, 200, 0), false)
        playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENAGE_NO_HEALING_SOUND, Color.TEAM_1, Player_, 200)
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_LOGO_SOUND, Color.TEAM_1, Player_, 200)
        Player_.startModifyingVoicelinePitch(0.5, false)
        Player_.addHealthPool(Health.SHIELDS, 100, true)
        damage(Player_, null, 300)
        Echo.teleport(Player_.getPosition())
        wait()
        Player_.startCamera(updateEveryFrame(Echo.getEyePosition() + Echo.getFacingDirection() * 0.6), updateEveryFrame(Echo.getEyePosition()) + CamShake)
        Echo.forceButtonPress(Button.ABILITY_2)
        async(CameraShake, AsyncBehavior.RESTART)
        wait(1.5)
        kill(Player_, Echo)
    else:
        CurrentCam = 0
        Player_.startCamera(updateEveryFrame(Echo.getEyePosition() + Echo.getFacingDirection() * 1.5), updateEveryFrame(Echo.getEyePosition()))
        smallMessage(getAllPlayers(), "DEAD!")
        wait(1.5)
        kill(Player_, Echo)


rule "[G] Echo Progression":
    @Condition isGameInProgress() == true
    @Condition Echo.HasMoved == true
    @Condition EchoAI != 0
    @Condition EchoPhase != 4
    @Condition EchoPhase != -4
    
    wait(5 + EchoAI / 6, Wait.ABORT_WHEN_FALSE)
    if random.randint(1, 20) <= EchoAI:
        Echo.HasMoved = false
        if EchoPhase == 0:
            Echo.clearStatusEffect(Status.KNOCKED_DOWN)
            EchoPhase = random.choice([1, -1])
        else:
            EchoPhase += 1 if EchoPhase > 0 else -1
    loop()


rule "[G] Echo Phase 0":
    @Condition isGameInProgress() == true
    @Condition EchoAI != 0
    @Condition EchoPhase == 0
    
    waitUntil(CurrentCam != 4, 99999)
    if EchoPhase != 0:
        return
    Echo.teleport(vect(28.62, 3, 2.9))
    Echo.setFacing(vect(0, 0, 1), Relativity.TO_WORLD)
    Echo.HasMoved = true


rule "[G] Echo Phase 1":
    @Condition isGameInProgress() == true
    @Condition EchoAI != 0
    @Condition EchoPhase == 1
    
    waitUntil(CurrentCam != 4, 99999)
    if EchoPhase != 1:
        return
    Echo.teleport(vect(22.4, 3, 2.57))
    Echo.setFacing(vect(-1, 0, 0), Relativity.TO_WORLD)
    Echo.HasMoved = true


rule "[G] Echo Phase 2":
    @Condition isGameInProgress() == true
    @Condition EchoAI != 0
    @Condition EchoPhase == 2
    
    waitUntil(CurrentCam != 4 and CurrentCam != 5, 99999)
    if EchoPhase != 2:
        return
    Echo.teleport(vect(18.33, 4, -6.3))
    Echo.setFacing(vect(-0.22, 0.25, -0.94), Relativity.TO_WORLD)
    Echo.HasMoved = true


rule "[G] Echo Phase 3":
    @Condition isGameInProgress() == true
    @Condition EchoAI != 0
    @Condition EchoPhase == 3
    
    waitUntil(CurrentCam != 5 and (not isInLoS(Player_.getEyePosition(), vect(16.39, 7.02, -14.72)) or not Player_.isInViewAngle(vect(16.39, 7.02, -14.72), 75)), 99999)
    if EchoPhase != 3:
        return
    Echo.teleport(vect(17.18, 6.02, -13.96))
    Echo.setFacing(vect(-0.86, 0.1, -0.5), Relativity.TO_WORLD)
    Echo.HasMoved = true


rule "[G] Echo Phase -1":
    @Condition isGameInProgress() == true
    @Condition EchoAI != 0
    @Condition EchoPhase == -1
    
    waitUntil(CurrentCam != 4 and CurrentCam != 6, 99999)
    if EchoPhase != -1:
        return
    Echo.teleport(vect(27.3, 8.96, 2.53))
    Echo.setFacing(vect(-0.45, 0, -0.89), Relativity.TO_WORLD)
    Echo.HasMoved = true


rule "[G] Echo Phase -2":
    @Condition isGameInProgress() == true
    @Condition EchoAI != 0
    @Condition EchoPhase == -2
    
    waitUntil(CurrentCam != 6, 99999)
    if EchoPhase != -2:
        return
    Echo.teleport(vect(22.8, 7.25, -11.8))
    Echo.setFacing(directionTowards(Echo.getEyePosition(), CamPositions[6]), Relativity.TO_WORLD)
    Echo.HasMoved = true


rule "[G] Echo Phase -3":
    @Condition isGameInProgress() == true
    @Condition EchoAI != 0
    @Condition EchoPhase == -3
    
    waitUntil(CurrentCam != 6 and (not isInLoS(Player_.getEyePosition(), vect(14.55, 13.1, -20.3)) or not Player_.isInViewAngle(vect(14.55, 13.1, -20.3), 75)), 99999)
    if EchoPhase != -3:
        return
    Echo.teleport(vect(15.5, 11.81, -21))
    Echo.setFacing(vect(-0.9, -0.5, -0.05), Relativity.TO_WORLD)
    Echo.HasMoved = true


rule "[G] Echo Phase 4 and -4":
    @Condition isGameInProgress() == true
    @Condition EchoAI != 0
    @Condition (EchoPhase == 4 or EchoPhase == -4) == true
    
    waitUntil(CurrentCam != 4 and CurrentCam != 6 and (not isInLoS(Player_.getEyePosition(), vect(6.74, 9.02, -19.94)) or not Player_.isInViewAngle(vect(6.74, 9.02, -19.94), 75)), 99999)
    if EchoPhase != 4 and EchoPhase != -4:
        return
    Echo.teleport(vect(6.74, 7.02, -19.94))
    Echo.setFacing(vect(-0.71, 0.1, -0.71), Relativity.TO_WORLD)
    wait(6 - EchoAI / 10)
    waitUntil(not CurrentCam, 5)
    if ClosedFrontDoor:
        waitUntil(not isInLoS(Player_.getEyePosition(), Echo.getEyePosition()) or not Player_.isInViewAngle(Echo.getEyePosition(), 75), 99999)
        if not isInLoS(Player_.getEyePosition(), Echo.getEyePosition()):
            wait(random.uniform(1, 3))
            if isInLoS(Player_.getEyePosition(), Echo.getEyePosition()):
                loop()
        elif not Player_.isInViewAngle(Echo.getEyePosition(), 75):
            async(CamsJammed, AsyncBehavior.RESTART)
            Power = max(0, Power - 3)
        EchoPhase = random.choice([-1, 1]) if random.randint(1, 100) <= EchoAI else 0
    else:
        EchoJumpscare()
    Echo.HasMoved = true


rule "ORISA":
    @Disabled
    @Delimiter
    


rule "[G] Orisa Setup":
    @Condition NightNumber != 5
    
    wait(0.5)
    createDummy(Hero.ORISA, Team.2, 1, vect(-10.7, 8.52, -0.37), vect(-1, 0, 0))
    Orisa = getPlayersInSlot(1, Team.2)
    Orisa.startScalingSize(1.35, false)
    waitUntil(isGameInProgress(), 99999)
    getPlayersOnHero(Hero.ORISA, Team.ALL).setStatusEffect(null, Status.KNOCKED_DOWN, 9999)
    OrisaMeter = 100
    if not Cheats[0]:
        goto lbl_0
    createInWorldText(getAllPlayers(), "{0} {1} / {2} A.I".format(heroIcon(Hero.ORISA), OrisaMeter, OrisaAI), Orisa, 1.2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 175))
    lbl_0:


def OrisaJumpscare():
    @Name "[SR] Orisa Jumpscare"
    
    destroyAllInWorldTexts()
    if not NoJumpscares:
        Player_.setInvisibility(Invis.ALL)
        CurrentCam = 0
        playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENAGE_NO_HEALING_SOUND, Color.TEAM_1, Player_, 200)
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_LOGO_SOUND, Color.TEAM_1, Player_, 200)
        Player_.startModifyingVoicelinePitch(0.5, false)
        Player_.addHealthPool(Health.SHIELDS, 100, true)
        damage(Player_, null, 300)
        wait()
        Player_.startCamera(updateEveryFrame(Orisa.getEyePosition() + Orisa.getFacingDirection() * 1.2), updateEveryFrame(Orisa.getEyePosition()) + CamShake)
        damage(Orisa, null, 390)
        async(CameraShake, AsyncBehavior.RESTART)
        wait(1.5)
        kill(Player_, Orisa)
    else:
        CurrentCam = 0
        Player_.startCamera(updateEveryFrame(Orisa.getEyePosition() + Orisa.getFacingDirection() * 1.5), updateEveryFrame(Orisa.getEyePosition()))
        smallMessage(getAllPlayers(), "DEAD!")
        wait(1.5)
        kill(Player_, Orisa)


rule "[G] Orisa Progression":
    @Condition isGameInProgress() == true
    @Condition OrisaAI != 0
    
    chaseAtRate(OrisaMeter, 0, 0.45 + OrisaAI / 15)
    waitUntil(CurrentCam != 3 and OrisaMeter <= 66, 99999)
    Orisa.clearStatusEffect(Status.KNOCKED_DOWN)
    Orisa.setFacing(directionTowards(Orisa.getEyePosition(), CamPositions[3]), Relativity.TO_WORLD)
    waitUntil(CurrentCam != 3 and OrisaMeter <= 23, 99999)
    Orisa.teleport(vect(-10.36, 7, -8.25))
    Orisa.setFacing(vect(-1, 0, 0), Relativity.TO_WORLD)
    waitUntil(CurrentCam != 3 and OrisaMeter <= 0 and BastionPhase != 3 and (not isInLoS(Player_.getEyePosition(), vect(-15.57, 7.42, -11.65)) or not Player_.isInViewAngle(vect(-15.57, 7.42, -11.65), 75)), 99999)
    Orisa.teleport(vect(-15.57, 6.42, -11.65))
    Orisa.setFacing(vect(0.68, 0, -0.73), Relativity.TO_WORLD)
    waitUntil(not CurrentCam, 5)
    Orisa.startThrottleInDirection(directionTowards(Orisa.getPosition(), vect(-4.2, 7.07, -23.51)), 1, Relativity.TO_WORLD)
    waitUntil(distance(Orisa.getPosition(), vect(-4.2, 7.07, -23.51)) <= 0.3, 99999)
    if ClosedRightDoor:
        Orisa.setStatusEffect(Player_, Status.STUNNED, 1)
        Orisa.stopThrottleInDirection()
        waitUntil(CurrentCam != 3 and (not isInLoS(Player_.getEyePosition(), Orisa.getEyePosition()) or not Player_.isInViewAngle(Orisa.getEyePosition(), 75)), 99999)
        if ClosedRightDoor:
            Orisa.teleport(vect(-10.7, 8.52, -0.37))
            Orisa.setFacing(directionTowards(Orisa.getEyePosition(), CamPositions[3]), Relativity.TO_WORLD)
            OrisaMeter = 100
            if ruleCondition:
                loop()
        else:
            OrisaJumpscare()
    else:
        OrisaJumpscare()


rule "[G] Update Orisa Speed":
    @Condition isGameInProgress() == true
    @Condition OrisaAI != 0
    @Condition OrisaAIPrevious != OrisaAI
    
    OrisaAIPrevious = OrisaAI
    Orisa.setMoveSpeed(165 + OrisaAI * 1.5)


rule "[G] Orisa Stall Start":
    @Condition isGameInProgress() == true
    @Condition CurrentCam == 3
    @Condition OrisaAI != 0
    @Condition OrisaMeter > 0
    
    stopChasingVariable(OrisaMeter)
    wait(random.uniform(1.4, 2.2), Wait.ABORT_WHEN_FALSE)
    OrisaMeter = min(100, OrisaMeter + 0.9)
    if ruleCondition:
        loop()


rule "[G] Orisa Stall Stop":
    @Condition isGameInProgress() == true
    @Condition CurrentCam != 3
    @Condition OrisaAI != 0
    
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    chaseAtRate(OrisaMeter, 0, 0.45 + OrisaAI / 15)


rule "GENJI":
    @Disabled
    @Delimiter
    


rule "[G] Genji Setup":
    @Condition NightNumber != 5
    @Condition NightNumber > 1
    
    wait(0.75)
    createDummy(Hero.GENJI, Team.2, 3, vect(-2.6, 7, 54.5), vect(-0.7, 0, -0.71))
    Genji = getPlayersInSlot(3, Team.2)
    Genji.startScalingSize(1.6, false)
    waitUntil(isGameInProgress(), 99999)
    getPlayersOnHero(Hero.GENJI, Team.ALL).setStatusEffect(null, Status.KNOCKED_DOWN, 9999)
    HeaterPower = 100
    if not Cheats[0]:
        goto lbl_0
    createInWorldText(getAllPlayers(), "{0} {1} / {2} A.I".format(heroIcon(Hero.GENJI), HeaterPower, GenjiAI), Genji, 1.2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 175))
    lbl_0:
    createEffect(getAllPlayers(), Effect.ZARYA_PARTICLE_BEAM_SOUND, Color.TEAM_2, CamPositions[7], HeaterPower / 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createInWorldText(Player_ if CurrentCam == 7 else null, "■■■■■■■■■■■■■■■■".substring(0, HeaterPower / 6.25), updateEveryFrame((directionFromAngles(Player_.getHorizontalFacingAngle(), Player_.getVerticalFacingAngle() + 22)) * 1000 + CamPositions[7]), 2.7, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(255, HeaterPower * 2.55, HeaterPower, 215 if HeaterPower / 6.25 > 15.5 else 160))
    createInWorldText(localPlayer if CurrentCam == 7 else null, "HOLD [{0}] TO WIND UP HEATER".format(inputBindingString(Button.RELOAD)), updateEveryFrame((directionFromAngles(localPlayer.getHorizontalFacingAngle(), localPlayer.getVerticalFacingAngle() + 24.5)) * 1000 + CamPositions[7]), 1.7, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, rgb(255, 255, 255, 255 if localPlayer.isHoldingButton(Button.RELOAD) else 140))
    createIcon(WarningIconVisible if not CurrentCam else null, InteractCams, Icon.FIRE, IconReeval.VISIBILITY_AND_POSITION, rgb(255, 80, 0))
    hudSubtext(WarningIconVisible if CurrentCam else null, "CAM 7", HudPosition.TOP, 2, rgb(255, 80, 0), HudReeval.VISIBILITY)


def GenjiJumpscare():
    @Name "[SR] Genji Jumpscare"
    
    destroyAllInWorldTexts()
    if not NoJumpscares:
        Genji.teleport(raycast(Player_.getEyePosition(), Player_.getEyePosition() + Player_.getFacingDirection() * vect(-3, 0, -3), null, Player_, false).getHitPosition())
        Genji.startFacing(directionTowards(Genji.getEyePosition(), Player_.getEyePosition()), 360)
        waitUntil(not CurrentCam, random.uniform(4, 8))
        waitUntil(Player_.isInViewAngle(Genji.getEyePosition(), 50), random.uniform(4, 8))
        wait(0.5)
        playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENAGE_NO_HEALING_SOUND, Color.TEAM_1, Player_, 200)
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_LOGO_SOUND, Color.TEAM_1, Player_, 200)
        Player_.startModifyingVoicelinePitch(0.5, false)
        Player_.addHealthPool(Health.SHIELDS, 100, true)
        damage(Player_, null, 300)
        wait()
        Player_.startCamera(updateEveryFrame(Genji.getEyePosition() + Genji.getFacingDirection() * 1.2), updateEveryFrame(Genji.getEyePosition()) + CamShake)
        async(CameraShake, AsyncBehavior.RESTART)
        Genji.forceButtonPress(Button.ULTIMATE)
        wait(1.5)
        kill(Player_, Genji)
    else:
        Genji.teleport(raycast(Player_.getEyePosition(), Player_.getEyePosition() + Player_.getFacingDirection() * vect(-3, 0, -3), null, Player_, false).getHitPosition())
        Genji.startFacing(directionTowards(Genji.getEyePosition(), Player_.getEyePosition()), 360)
        waitUntil(not CurrentCam, random.uniform(4, 8))
        waitUntil(Player_.isInViewAngle(Genji.getEyePosition(), 50), random.uniform(4, 8))
        wait(0.5)
        CurrentCam = 0
        Player_.startCamera(updateEveryFrame(Genji.getEyePosition() + Genji.getFacingDirection() * 1.5), updateEveryFrame(Genji.getEyePosition()))
        smallMessage(getAllPlayers(), "DEAD!")
        wait(1.5)
        kill(Player_, Genji)


rule "[G] Genji Progression":
    @Condition isGameInProgress() == true
    @Condition GenjiAI != 0
    @Condition HeaterPower <= 0
    
    waitUntil(CurrentCam != 7 and HeaterPower <= 0, 99999)
    Genji.clearStatusEffect(Status.KNOCKED_DOWN)
    Genji.setFacing(directionTowards(Genji.getEyePosition(), CamPositions[7]), Relativity.TO_WORLD)
    wait(random.uniform(2.2, 4.4 - GenjiAI / 10))
    waitUntil(CurrentCam != 7 and HeaterPower <= 0, 99999)
    Genji.teleport(vect(-12.56, 7, 45.08))
    Genji.setFacing(vect(0.71, 0, -0.71), Relativity.TO_WORLD)
    wait(random.uniform(1.8, 4 - GenjiAI / 10))
    waitUntil(CurrentCam != 7 and HeaterPower <= 0, 99999)
    GenjiJumpscare()


rule "[G] Start Wind Down":
    @Condition GenjiAI != 0
    @Condition isGameInProgress() == true
    
    chaseAtRate(HeaterPower, 0, 2.3 + GenjiAI / 6.2)


rule "[G] Wind Up":
    @Condition CurrentCam == 7
    @Condition Player_.isHoldingButton(Button.RELOAD) == true
    @Condition GenjiAI != 0
    
    playEffect(getAllPlayers(), DynamicEffect.BRIGITTE_WHIP_SHOT_HEAL_AREA_SOUND, Color.TEAM_2, CamPositions[7], 25)
    chaseAtRate(HeaterPower, 100, 35, ChaseRateReeval.NONE)
    waitUntil(not Player_.isHoldingButton(Button.RELOAD) or CurrentCam != 7, 99999)
    chaseAtRate(HeaterPower, 0, 2.3 + GenjiAI / 6.2)


rule "[G] Warning":
    @Condition isGameInProgress() == true
    @Condition GenjiAI != 0
    @Condition HeaterPower < 28
    
    WarningIconVisible = getAllPlayers()
    wait(0.2)
    WarningIconVisible = null
    wait(0.2)
    if ruleCondition:
        loop()


rule "ZEN":
    @Disabled
    @Delimiter
    


rule "[G] Zen Setup":
    @Condition NightNumber >= 1
    
    wait(1)
    createDummy(Hero.ZENYATTA, Team.2, 4, vect(2, 7.4, 22.4), vect(1, 0, 0))
    Zen = getPlayersInSlot(4, Team.2)
    Zen.startScalingSize(1.35, false)
    ZenPositions = [vect(-1.92, 7, -54.26), vect(-9.09, 7.23, -30.7), vect(-10.11, 8.51, -1.69), vect(28.2, 3, 1.2), vect(18, 4.9, -9.52), vect(23.9, 9, -5.63), vect(-4.23, 7, 54.36)]
    ZenPositions2 = [null, [vect(-8.69, 7, -49.87), vect(16.82, 8.96, -48.44)], [vect(-12.25, 7.24, -33.65), vect(-2.2, 7.34, -31.7)], [vect(-20.72, 7, 6.54), vect(-19.22, 12, 8.7), vect(-10.91, 7, 8.71)], [vect(23.93, 3.15, -5.11), vect(29.37, 3.15, 3.7)], [vect(18, 5.96, -11.64)], [vect(23.62, 9, 5.63), vect(23.1, 6.86, -12.56)], [vect(3.34, 8, 53.94), vect(-13.06, 7, 44.26)]]
    Zen.setInvisibility(Invis.ALL)
    Zen.setHealingReceived(0)
    Zen.disablePlayerCollision()
    Zen.startFacing(directionTowards(Zen.getEyePosition(), Player_.getEyePosition()), 1000)
    Zen.disableRespawn()


def ZenSequence():
    @Name "[SR] Zen Jumpscare Nights 1-5"
    
    Zen.setInvisibility(Invis.NONE)
    Zen.startFacing(directionTowards(Zen.getEyePosition(), CamPositions[CurrentCam]), 1000)
    Zen.teleport(sorted(ZenPositions, lambda player: distance(player, CamPositions[CurrentCam]))[0])
    waitUntil(Player_.isHoldingButton(Button.PRIMARY_FIRE) or Player_.isHoldingButton(Button.SECONDARY_FIRE) or Player_.isHoldingButton(Button.INTERACT), 1.5 - ZenAI / 30)
    if Player_.isHoldingButton(Button.PRIMARY_FIRE) or Player_.isHoldingButton(Button.SECONDARY_FIRE) or Player_.isHoldingButton(Button.INTERACT):
        Zen.setInvisibility(Invis.ALL)
        wait(4)
        return
    else:
        waitUntil(CurrentCam != LastCam, 9999)
        Zen.teleport(vect(3.9, 7.4, -25.5))
        waitUntil(not CurrentCam, 9999)
        wait(0.1)
        Zen.startFacing(directionTowards(Zen.getEyePosition(), Player_.getEyePosition()), 1000)
        Player_.setFacing(directionTowards(Player_.getEyePosition(), Zen.getEyePosition()), Relativity.TO_WORLD)
        waitUntil(CurrentCam, 1.7 - ZenAI / 30)
        if CurrentCam:
            Zen.setInvisibility(Invis.ALL)
            Zen.teleport(sorted(ZenPositions, lambda player: distance(player, CamPositions[CurrentCam]))[0])
            wait(4)
            return
        else:
            destroyAllInWorldTexts()
            if not NoJumpscares:
                playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENAGE_NO_HEALING_SOUND, Color.TEAM_1, Player_, 200)
                playEffect(getAllPlayers(), DynamicEffect.SOMBRA_LOGO_SOUND, Color.TEAM_1, Player_, 200)
                Player_.startModifyingVoicelinePitch(0.5, false)
                Player_.addHealthPool(Health.SHIELDS, 100, true)
                damage(Player_, null, 300)
                wait()
                Player_.startCamera(updateEveryFrame(Zen.getEyePosition() + Zen.getFacingDirection()), updateEveryFrame(Zen.getEyePosition()) + CamShake)
                async(CameraShake, AsyncBehavior.RESTART)
                Zen.forceButtonPress(Button.ULTIMATE)
                wait(1.5)
                kill(Player_, Zen)
            else:
                CurrentCam = 0
                Player_.startCamera(updateEveryFrame(Zen.getEyePosition() + Zen.getFacingDirection()), updateEveryFrame(Zen.getEyePosition()))
                smallMessage(getAllPlayers(), "DEAD!")
                wait(1.5)
                kill(Player_, Zen)


rule "NIGHT 6":
    @Disabled
    @Delimiter
    


rule "[G] Zen Progression":
    @Condition isGameInProgress() == true
    @Condition NightNumber == 5
    @Condition NightPhase == 6
    @Condition Zen.isAlive() == true
    @Condition ZenDoorNumber == 0
    @Condition CurrentCam != ZenPickedCamAndPos[0]
    @Condition ZenAI > 0
    
    Zen.startFacing(directionTowards(Zen.getEyePosition(), sorted(CamPositions.exclude(null), lambda i: distance(Zen.getEyePosition(), i))[0]), 1000)
    wait(6.5 - ZenAI / 15, Wait.ABORT_WHEN_FALSE)
    if random.randint(1, 20) > ZenAI:
        ZenMove()
    else:
        Zen.startFacing(directionTowards(Zen.getEyePosition(), Player_.getEyePosition()), 1000)
        ZenDoor()
    if ruleCondition:
        loop()


def ZenJumpscare():
    @Name "[SR] Zen Jumpscare Night 6"
    
    Zen.enablePlayerCollision()
    Zen.setInvisibility(Invis.NONE)
    destroyAllInWorldTexts()
    Zen.stopFacing()
    if not NoJumpscares:
        Player_.setInvisibility(Invis.ALL)
        CurrentCam = 0
        getPlayersInSlot(1, Team.1).startForcingPosition(Zen, false)
        wait(0.04)
        Zen.setStatusEffect(null, Status.PHASED_OUT, 3)
        getPlayersInSlot(1, Team.1).setStatusEffect(null, Status.PHASED_OUT, 3)
        wait(0.12)
        getPlayersInSlot(1, Team.1).startForcingPosition(vect(0, 200, 0), false)
        playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENAGE_NO_HEALING_SOUND, Color.TEAM_1, Player_, 200)
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_LOGO_SOUND, Color.TEAM_1, Player_, 200)
        Player_.startModifyingVoicelinePitch(0.5, false)
        Player_.addHealthPool(Health.SHIELDS, 100, true)
        damage(Player_, null, 300)
        Zen.teleport(Player_.getPosition())
        wait(0.025)
        Player_.startCamera(updateEveryFrame(Zen.getEyePosition() + Zen.getFacingDirection() * 0.7), updateEveryFrame(Zen.getEyePosition()) + CamShake)
        async(CameraShake, AsyncBehavior.RESTART)
        wait(1.5)
        kill(Player_, Zen)
    else:
        CurrentCam = 0
        Player_.startCamera(updateEveryFrame(Zen.getEyePosition() + Zen.getFacingDirection() * 1.5), updateEveryFrame(Zen.getEyePosition()))
        smallMessage(getAllPlayers(), "DEAD!")
        wait(1.5)
        kill(Player_, Zen)


def Night6Call():
    @Name "[SR] Night 6 Call"
    
    wait(0.5)
    PhoneRings = 3
    while PhoneRings and not Player_.isHoldingButton(Button.ABILITY_1):
        PhoneRing()
        PhoneRings--
        waitUntil(Player_.isHoldingButton(Button.ABILITY_1), 2)
    if not Player_.isHoldingButton(Button.ABILITY_1):
        return
    PhoneRings = 0
    wait(0.5)
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 200)
    wait(0.5)
    smallMessage(getAllPlayers(), "[?] TESTING... TESTING... 1... 2... 3...")
    wait(3)
    smallMessage(getAllPlayers(), "[?] THIS IS VOICE LOG NUMBER NINETEEN...")
    wait(3)
    smallMessage(getAllPlayers(), "[?] FROM HEAD OF A.I RESEARCH BOHAI LIAO.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] OUR WORK HAS BEEN SHOWING VERY")
    wait(0.5)
    smallMessage(getAllPlayers(), "PROMISING RESULTS.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] SPECIALLY WITH THE FRAGMENT THAT OVERWATCH")
    wait(0.5)
    smallMessage(getAllPlayers(), "HAS RETRIEVED IN THEIR ANUBIS SIEGE.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] TO HAVE A PIECE OF A GOD PROGRAM IN MY HANDS?")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] IT IS A PRIVILEGE. AND A RESPONSIBILITY.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] WE CAN ACHIEVE GREATNESS WITH THIS.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] I'LL MAKE SURE WE DO.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] I'VE UPLOADED A PROTOTYPE CODE INTO AN OLD SECURITY ROBOT...")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] WHICH MUST BE KEPT IN ECOPOINT NOT TO RAISE ANY SUSPICION.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] AT LEAST IN THE NEAR FUTURE.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] A \"FRIEND\" OF MINE WITH CLOSE RELATIONS")
    wait(0.5)
    smallMessage(getAllPlayers(), "TO THE SHAMBALI...")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] STRONGLY ADVISED AGAINST THIS...")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] STATING I'M MESSING WITH SOMETHING I DON'T UNDERSTAND.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] AND SOMETHING ABOUT ASCENDED PROGRAMS...")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] BEING ABLE TO INTERACT WITH THE REALM OF THE DEAD.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] I'VE NEVER HEARD ANYTHING MORE ABSURD THAN THIS.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] THEY WILL NEVER UNDERSTAND.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] BUT IT DOESN'T MATTER.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] MY WORK IS ALMOST COMPLETE.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO] THEY WILL SEE.")
    wait(3)
    smallMessage(getAllPlayers(), "[LIAO ENDS THE LOG]")
    playEffect(getAllPlayers(), DynamicEffect.SOLDIER_SPRINT_START_SOUND, Color.TEAM_1, Player_.getEyePosition(), 130)
    wait(3)


rule "[G] Night 6 Part 1":
    @Condition isGameInProgress() == true
    @Condition NightNumber == 5
    
    if Cheats[1]:
        goto lbl_0
    chaseAtRate(Power, 0, 0.131 * PowerUsage)
    lbl_0:
    Night6Call()
    NightPhase = 4
    smallMessage(getAllPlayers(), "[MEI] MAX SAID HE UNCOVERED PROJECTS FOR A FIFTH ROBOT...")
    wait(3)
    smallMessage(getAllPlayers(), "[MEI] IF I RETRIEVE THEM I MAY BE ABLE TO FIND A WEAKNESS.")
    wait(3)
    smallMessage(getAllPlayers(), "[MEI] I SHOULD BE ABLE TO DOWNLOAD THEM FROM THE MONITOR STATION...")
    waitUntil(CurrentCam != 0, 99999)
    smallMessage(getAllPlayers(), "[MEI] THERE IT IS!")
    createEffect(getAllPlayers() if BarValue != 100 else null, Effect.ECHO_CLONING_SOUND, Color.TEAM_1, CamPositions[CurrentCam] if CurrentCam else InteractCams, BarValue, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    progressBarHud(localPlayer if CurrentCam and (NightPhase == 4 or NightPhase == 5) else null, BarValue, "SIGNAL LOCATED. PRESS [{0}] TO BEGIN TRANSMISSION.".format(inputBindingString(Button.ABILITY_2)) if NightPhase == 4 else BarTextAndColor[0], HudPosition.TOP, 2, BarTextAndColor[1], Color.WHITE, ProgressHudReeval.VISIBILITY_VALUES_AND_COLOR, SpecVisibility.ALWAYS)
    BarTextAndColor[1] = Color.YELLOW
    BarValue = 100
    waitUntil(CurrentCam and Player_.isHoldingButton(Button.ABILITY_2), 99999)
    playEffect(getAllPlayers(), DynamicEffect.BRIGITTE_REPAIR_PACK_IMPACT_SOUND, Color.TEAM_1, CamPositions[CurrentCam], 60)
    NightPhase = 5
    BarValue = 0
    BarTextAndColor[0] = "FETCHING DATA..."
    BarTextAndColor[1] = Color.WHITE
    chaseAtRate(BarValue, 100, max(100 - BarValue, 3))
    waitUntil(BarValue >= 100, 99999)
    BarTextAndColor[0] = "DOWNLOADING SCHEMATICS..."
    BarValue = 0
    chaseAtRate(BarValue, 100, 20, ChaseRateReeval.NONE)
    waitUntil(BarValue >= 100, 99999)
    BarTextAndColor[0] = "UPDATING TRANSMITTERS..."
    BarValue = 0
    chaseAtRate(BarValue, 100, 25, ChaseRateReeval.NONE)
    waitUntil(BarValue >= 100, 99999)
    BarTextAndColor[0] = "COMPLETE"
    BarTextAndColor[1] = Color.GREEN
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, Color.TEAM_2, CamPositions[CurrentCam] if CurrentCam else InteractCams, 35)
    wait(2)
    smallMessage(getAllPlayers(), "[MEI] WITH THIS I CAN REMOTELY INDUCE AN OVERLOAD...")
    wait(3)
    smallMessage(getAllPlayers(), "[MEI] BUT IT DRAINS POWER, SO I NEED TO BE CAREFUL.")
    wait(3)
    smallMessage(getAllPlayers(), "[MEI] NOW I JUST NEED TO FIND IT...")
    wait(3)
    smallMessage(getAllPlayers(), "[MEI] BEFORE IT FINDS ME.")
    wait(3)
    bigMessage(getAllPlayers(), "SHUT THE FIFTH ROBOT DOWN")
    chaseOverTime(BarValue, 0, 4, ChaseTimeReeval.NONE)
    BarValue = 0
    createProgressBarInWorldText(localPlayer if CurrentCam and NightPhase == 6 else null, BarValue, "RECHARGING..." if BarValue else "[{0}] TO FIRE OVERLOAD\r\n(MUST BE AIMING DIRECTLY AT TARGET)".format(inputBindingString(Button.RELOAD)), updateEveryFrame(CamPositions[CurrentCam] + ((directionFromAngles(localPlayer.getHorizontalFacingAngle(), localPlayer.getVerticalFacingAngle() + 15)) * 1000)), 1, Clip.NONE, Color.ORANGE, Color.GRAY)
    NightPhase = 6
    ZenAI += 2
    ZenMove()
    Zen.setInvisibility(Invis.NONE)
    if not Cheats[0]:
        goto lbl_1
    createInWorldText(getAllPlayers(), "{0} {2} / {1} A.I".format(heroIcon(Hero.ZENYATTA), ZenAI, "OFFICE GATE" if ZenDoorNumber else "CAM {0}".format(ZenPickedCamAndPos[0])), Zen, 1.2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255, 175))
    lbl_1:
    createInWorldText(Player_ if CurrentCam else null, "⊙", updateEveryFrame(CamPositions[CurrentCam] + ((directionFromAngles(Player_.getHorizontalFacingAngle(), Player_.getVerticalFacingAngle() + 3.87)) * 1000)), 2.3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.GRAY if BarValue else Color.ORANGE)


rule "[G] Night 6 Part 2":
    @Condition isGameInProgress() == true
    @Condition Zen.isDead() == true
    @Condition NightNumber == 5
    @Condition NightPhase == 6
    
    destroyAllInWorldTexts()
    Zen.setInvisibility(Invis.ALL)
    NightPhase = 7
    wait(3)
    smallMessage(getAllPlayers(), "[?] THIS IS NOT OVER YET...")
    wait(3)
    bigMessage(getAllPlayers(), "ESCAPE")
    DoorsWalkable = 1
    createEffect(getAllPlayers(), Effect.RING, Color.WHITE, vect(-7.83, 7.02, -2.91), 1.5, EffectReeval.VISIBILITY)
    createIcon(getAllPlayers(), vect(-7.83, 7.02, -2.91), Icon.FLAG, IconReeval.VISIBILITY, Color.WHITE)
    waitUntil(distance(Player_.getPosition(), vect(-7.83, 7.02, -2.91)) <= 1.5, 20)
    if distance(Player_.getPosition(), vect(-7.83, 7.02, -2.91)) <= 1.55:
        Player_.setInvisibility(Invis.ALL)
        Player_.startCamera(evalOnce(Player_.getEyePosition() + Vector.UP * 2), vect(-7.83, 7.02, -2.91))
        destroyAllEffects()
        enableMusic()
        declareTeamVictory(Team.1)
    else:
        Zen.resurrect()
        Zen.teleport(Player_.getPosition())
        ZenJumpscare()


rule "[G] Fire Overload":
    @Condition isGameInProgress() == true
    @Condition NightNumber == 5
    @Condition NightPhase == 6
    @Condition CurrentCam != 0
    @Condition BarValue <= 0
    @Condition Player_.isHoldingButton(Button.RELOAD) == true
    
    BarValue = 100
    Power = max(0, Power - 5)
    PowerUsage--
    playEffect(getAllPlayers(), DynamicEffect.BAPTISTE_BIOTIC_LAUNCHER_EXPLOSION_SOUND, Color.TEAM_1, CamPositions[CurrentCam], 50)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_LOGO_SOUND, Color.TEAM_1, CamPositions[CurrentCam], 50)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_LOGO, Color.TEAM_2, raycast(CamPositions[CurrentCam], CamPositions[CurrentCam] + Player_.getFacingDirection() * 100, getAllPlayers(), null, false).getHitPosition(), 1)
    if raycast(CamPositions[CurrentCam], CamPositions[CurrentCam] + Player_.getFacingDirection() * 100, getPlayers(Team.2), null, false).getPlayerHit() == Zen:
        Player_.setDamageDealt(100)
        if ZenAI > 2:
            goto lbl_0
        smallMessage(getAllPlayers(), "[MEI] THAT'S IT! JUST A FEW MORE HITS...")
        lbl_0:
        damage(Zen, Player_, 41)
        async(CamsJammed, AsyncBehavior.NOOP)
        ZenMove()
        wait(0.2)
        CamsJammed = 4.8
        ZenAI += 2
        Player_.setDamageDealt(0)


rule "[G] Stalling in Cam":
    @Condition isGameInProgress() == true
    @Condition NightNumber == 5
    @Condition NightPhase == 6
    @Condition Zen.hasStatus(Status.STUNNED) == false
    @Condition CurrentCam == ZenPickedCamAndPos[0]
    @Condition angleBetweenVectors(Player_.getFacingDirection(), directionTowards(CamPositions[CurrentCam], Zen.getEyePosition())) < 20
    
    wait(2.5)
    if CurrentCam != ZenPickedCamAndPos[0]:
        return
    ZenJumpscare()


def ZenDoor():
    @Name "[SR] Zen at Doors"
    
    ZenDoorNumber = random.randint(1, 3)
    if ZenDoorNumber == 1:
        waitUntil(not isInLoS(Player_.getEyePosition(), vect(1.93, 8.43, -30.57)) or not Player_.isInViewAngle(vect(1.93, 8.43, -30.57), 75), 99999)
        Zen.teleport(vect(3.39, 7.06, -31.06))
        wait(6 - ZenAI / 10)
        waitUntil(not CurrentCam, 4)
        if ClosedLeftDoor:
            waitUntil(not CurrentCam and (not isInLoS(Player_.getEyePosition(), Bastion.getEyePosition()) or not Player_.isInViewAngle(Bastion.getEyePosition(), 75)), 99999)
            if ClosedLeftDoor:
                ZenDoorNumber = 0
            else:
                ZenJumpscare()
        else:
            ZenJumpscare()
    elif ZenDoorNumber == 2:
        waitUntil(not CurrentCam and (not isInLoS(Player_.getEyePosition(), vect(-4.38, 9, -23.22)) or not Player_.isInViewAngle(vect(-4.38, 9, -23.22), 75)), 99999)
        Zen.teleport(vect(-4.38, 7.04, -23.22))
        wait(6 - ZenAI / 10)
        waitUntil(not CurrentCam, 4)
        if ClosedRightDoor:
            waitUntil(not CurrentCam and (not isInLoS(Player_.getEyePosition(), Zen.getEyePosition()) or not Player_.isInViewAngle(Zen.getEyePosition(), 75)), 99999)
            if ClosedRightDoor:
                ZenDoorNumber = 0
            else:
                ZenJumpscare()
        else:
            ZenJumpscare()
    elif ZenDoorNumber == 3:
        waitUntil(not CurrentCam and (not isInLoS(Player_.getEyePosition(), vect(6.74, 9.02, -19.94)) or not Player_.isInViewAngle(vect(6.74, 9.02, -19.94), 75)), 99999)
        Zen.teleport(vect(6.74, 7.02, -19.94))
        wait(6 - ZenAI / 10)
        waitUntil(not CurrentCam, 4)
        if ClosedFrontDoor:
            waitUntil(not CurrentCam and (not isInLoS(Player_.getEyePosition(), Zen.getEyePosition()) or not Player_.isInViewAngle(Zen.getEyePosition(), 75)), 99999)
            if ClosedFrontDoor:
                ZenDoorNumber = 0
            else:
                ZenJumpscare()
        else:
            ZenJumpscare()
        ZenMove()


def ZenMove():
    @Name "[SR] Zen Move"
    
    ZenPickedCamAndPos[0] = random.choice([1, 2, 3, 4, 5, 6, 7].exclude(ZenPickedCamAndPos[0]))
    ZenPickedCamAndPos[1] = random.choice(ZenPositions2[ZenPickedCamAndPos[0]])
    waitUntil(CurrentCam != ZenPickedCamAndPos[0], 99999)
    Zen.teleport(ZenPickedCamAndPos[1])


