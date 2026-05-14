playervar HeroSpecificShopInfo
playervar HeroToolTip
playervar customHeroAbilitys

#!optimizeForSize

globalvar separator

##!define setHeroSpecificShopInfo(array) __script__("setHeroSpecificShopInfo.js")

macro setHeroSpecificShopInfo(array):
    eventPlayer.HeroSpecificShopInfo = "{}|{}|{}|{}|{}|{}|{}|{}|{}".format(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8]).split(separator).concat(array[9])

def UpdateHeroVariables():
    @Name "Update Hero Variables"

    eventPlayer.HeroToolTip = [0, 0, 0]
    eventPlayer.customHeroAbilitys = [true, true, true]
    
    if eventPlayer.getHero() == Hero.ANA:
        setHeroSpecificShopInfo([abilityIconString(Hero.ANA, Button.SECONDARY_FIRE), "Glare of Bastet", "Aiming in marks low health enemies;\nKilling them grants you Ultimate Charge, Invisibility,\nand sleeps minor enemies.", abilityIconString(Hero.ANA, Button.ABILITY_1), "Amari’s Lullaby", "Hitting and enemy with a sleep dart\nwill release bursts that then sleeps\nminor enemies in range until awoken.", abilityIconString(Hero.ANA, Button.ULTIMATE), "Pharaoh’s Chill", "Using Nano boost will fire a\nray of frost where you are looking,\nfreezing minor enemies hit by it.", rgb(110, 137, 177)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, true, false]
    elif eventPlayer.getHero() == Hero.ANRAN:
        setHeroSpecificShopInfo([abilityIconString(Hero.ANRAN, Button.SECONDARY_FIRE), "Wreath of Flames", "Damaging burning enemies with\nFan the Flames grants you Overhealth\nup to your Max HP.", abilityIconString(Hero.ANRAN, Button.ABILITY_1), "Phoenix's Grace", "While using Inferno Rush,\nyou are invulnerable to damage.\n", abilityIconString(Hero.ANRAN, Button.ABILITY_2), "Firework Finale", "Killing an enemy with Dancing\nBlaze makes them explode\ndamaging other nearby enemies.", rgb(232, 26, 5)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [false, true, false]
    elif eventPlayer.getHero() == Hero.ASHE:
        setHeroSpecificShopInfo([abilityIconString(Hero.ASHE, Button.SECONDARY_FIRE), "Combustion Rounds", "Scoped shots with The Viper\nexplode upon collision.\n\n", abilityIconString(Hero.ASHE, Button.ABILITY_1), "Get Back", "Coach gun bullets explode upon\nimpact to a close-by enemy.\n", iconString(Icon.FIRE), "Kindling Shots", "When shooting an enemy below half health,\nignite them for a second. In addition, retain\nammo fired at burning targets.", rgb(105, 105, 104)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.BASTION:
        setHeroSpecificShopInfo([abilityIconString(Hero.BASTION, Button.ABILITY_1), "Overclocked Engine", "Holding Secondary Fire while in\nAssault mode accelerates you forward,\nleaving bombs behind you.", abilityIconString(Hero.BASTION, Button.SECONDARY_FIRE), "Algorithmic Incentive", "Killing an enemy with your gun in\nrecon mode negates the cooldown\nof your next tactical grenade.", abilityIconString(Hero.BASTION, Button.ULTIMATE), "Explosive Volley", "While in Artillery mode, continuously\nfire grenades at the closest enemy.\n", rgb(124, 143, 122)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [false, true, false]
    elif eventPlayer.getHero() == Hero.BRIGITTE:
        setHeroSpecificShopInfo(["{0} {1}".format(abilityIconString(Hero.BRIGITTE, Button.SECONDARY_FIRE), abilityIconString(Hero.BRIGITTE, Button.ABILITY_1)), "Resourceful Adaptation", "Using Shield Bash Grants Horizontal\nMobility. In addition, using Whip\nShot grants Vertical Mobility.", abilityIconString(Hero.BRIGITTE, Button.ABILITY_2), "Ironclad Smithing", "Using Repair packs on allies grants\nthem armor equal to half your max health.\n", abilityIconString(Hero.BRIGITTE, Button.ULTIMATE), "A Crusader's Squire", "When using Rally, you grow in size,\ntake less damage, deal more, and enemies\nare most likely to target you.", rgb(139, 98, 94)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [false, false, true]
    elif eventPlayer.getHero() == Hero.CASSIDY:
        setHeroSpecificShopInfo([abilityIconString(Hero.CASSIDY, Button.PRIMARY_FIRE), "A Dualist's Prerogative", "Low Health Enemies are marked to you,\nyou deal double damage to them, and killing\nthem with a headshot stuns other enemies.", abilityIconString(Hero.CASSIDY, Button.ABILITY_2), "Shiver and Quiff", "Minor Enemies hit with\nflashbang are frozen instead\n", "{0} {1}".format(abilityIconString(Hero.CASSIDY, Button.ULTIMATE), abilityIconString(Hero.CASSIDY, Button.ABILITY_2)), "How do you wanna do this?", "After casting deadeye, your next Flashbang\nfires two additional flashbangs for each\nenemy you hit with deadeye.", rgb(173, 90, 95)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.DVA:
        setHeroSpecificShopInfo([abilityIconString(Hero.DVA, Button.SECONDARY_FIRE), "Rabbit's Retaliation", "After casting defence matrix for 1.5 seconds,\nyou fire homing micro missles in front of you\nthat scale with the damage absorbed.", abilityIconString(Hero.DVA, Button.ULTIMATE), "Brace for Impact", "Using Call Mech makes Tokki cause an\nexplosion upon landing, equal to that\nof a Self-Destruct.", abilityIconString(Hero.DVA, Button.ABILITY_2), "Nano-Cola Warrior", "While Ejected, every other shot from\nyour light gun also fires a micro missile.\n", rgb(237, 147, 199)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, false, true]
    elif eventPlayer.getHero() == Hero.DOOMFIST:
        setHeroSpecificShopInfo([abilityIconString(Hero.DOOMFIST, Button.PRIMARY_FIRE), "Sythetic Evolution", "Every Burst from Hand Cannon reduces\nall your cooldowns by 0.75 seconds.\n", abilityIconString(Hero.DOOMFIST, Button.ABILITY_1), "Groundbreaker", "Minor Enemies hit with Siesmic Slam\nare stunned and pulled toward you\n", abilityIconString(Hero.DOOMFIST, Button.ABILITY_2), "...Try Me", "While using Power Block, you regain\n10% of your Max Health per second and\nenemies are more likely to target you.", rgb(131, 83, 76)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, false, true]
    elif eventPlayer.getHero() == Hero.ECHO:
        setHeroSpecificShopInfo([abilityIconString(Hero.ECHO, Button.SECONDARY_FIRE), "Empathy Drive", "Minor Enemies hit with Sticky\nBombs are briefly frozen.\n", abilityIconString(Hero.ECHO, Button.ABILITY_2), "Curiosity Drive", "Enemies killed with Focusing Beam\ngrant ultimate charge, and reduce\nsticky bomb cooldown.", abilityIconString(Hero.ECHO, Button.ULTIMATE), "Assimilative Drive", "While Duplicating another Hero, enemies\nare more likely to target you, take half\ndamage, and gain an ultimate on a kill.", rgb(154, 202, 243)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, false, true]
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        eventPlayer.HeroToolTip = [100, 100, 0]
        
    elif eventPlayer.getHero() == Hero.GENJI:
        setHeroSpecificShopInfo([abilityIconString(Hero.GENJI, Button.ABILITY_1), "Shimada Lessons: Be Relentless", "Killing an enemy with Swift Strike\nmakes you immediately dash to the next\nlowest enemy within range.", abilityIconString(Hero.GENJI, Button.ABILITY_1), "Blackwatch Lessons: Exploit Vulnerabilities", "Enemies Hit with Swift Strike are\ninflicted with *Exposed\nfor Two seconds", abilityIconString(Hero.GENJI, Button.ULTIMATE), "Shambali Lessons: Sustain Balance", "Damage dealt with Dragon blade\ngrants additional armor, up to your\nmax health, for the Ultimate's Duration.", rgb(149, 239, 66)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        eventPlayer.HeroToolTip = [0, 100, 0]
        eventPlayer.customHeroAbilitys = [true, true, false]
    elif eventPlayer.getHero() == Hero.HANZO:
        setHeroSpecificShopInfo([abilityIconString(Hero.HANZO, Button.PRIMARY_FIRE), "Aim Twice, Fire Once", "You can charge your bow twice\nas long. Doing so increases its\n Projectile Speed and Damage by 250%.", abilityIconString(Hero.HANZO, Button.ABILITY_1), "Can't Run, Can't Hide", "Hitting an enemy with Sonic Arrow\ninflicts *Exposed onto all\n Enemies around them", abilityIconString(Hero.HANZO, Button.ULTIMATE), "Grieve via Vengence", "After Casting Dragon Strike,\nit begins casting again\n", rgb(185, 180, 137)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, false, true]
    elif eventPlayer.getHero() == Hero.JUNKER_QUEEN:
        setHeroSpecificShopInfo([abilityIconString(Hero.JUNKER_QUEEN, Button.SECONDARY_FIRE), "Viva La Gracie", "You are launched in the direction\nyou throw your jagged blade.\n", abilityIconString(Hero.JUNKER_QUEEN, Button.ABILITY_1), "A Queen's Wrath", "Enemies within your shout\nradius are ignited for the duration\n", abilityIconString(Hero.JUNKER_QUEEN, Button.ULTIMATE), "Carve the Wasteland", "Your Rampage Covers the entire\narena, forming a star shape and returning\nyou back to your inital position.", rgb(142, 181, 215)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.JUNO:
        setHeroSpecificShopInfo([abilityIconString(Hero.JUNO, Button.MELEE), "Martian Arts", "Hitting Enemies with Quick Melee\nKnocks both of you away\nCredit: Lilianastar for laughing\ntoo much at her kick animation.", abilityIconString(Hero.JUNO, Button.ABILITY_2), "Wormhole Enthusiast", "Where ever you place your hyper\nring, Allies are healed 50/s, and Enemies\nare damaged 50/s and are dragged away.", abilityIconString(Hero.JUNO, Button.ULTIMATE), "Vacuum of Space", "Minor Enemies caught in your Oribital\nRay's path are frozen for 6 seconds.\n", rgb(114, 31, 163)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.KIRIKO:
        setHeroSpecificShopInfo([abilityIconString(Hero.KIRIKO, Button.SECONDARY_FIRE), "Kanezaka's Protector", "Kunai Critical Hits Explode on\ncontact, and slightly increases projectile\nspeed.", abilityIconString(Hero.KIRIKO, Button.ABILITY_1), "Kitsune Displacement", "Swift Step can be cast without\ntargetting an ally. Additionally,\nenemies are teleported away after casting.", abilityIconString(Hero.KIRIKO, Button.ABILITY_2), "That's Fox Power!", "After healing an ally with Suzu,\nincrease their Damage, Speed, and Projectile\nSpeed by 40% of their total percentage.", rgb(212, 135, 143)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.LIFEWEAVER:
        setHeroSpecificShopInfo([abilityIconString(Hero.LIFEWEAVER, Button.PRIMARY_FIRE), "Roses Have Thorns", "Healing an Ally with Healing Blossom\nwill release additional healing and\ndamage in an area.", abilityIconString(Hero.LIFEWEAVER, Button.ABILITY_1), "Made for the Canopy", "While on your petal platform, gain\nincrease healing, damage, and\nprojectile speed.", abilityIconString(Hero.LIFEWEAVER, Button.ULTIMATE), "Spores of Protection", "Your Tree of Life pulses also\ndamage, knock away, and root\nminor enemies near it.", rgb(224, 182, 198)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, false, false]
    elif eventPlayer.getHero() == Hero.LUCIO:
        setHeroSpecificShopInfo([abilityIconString(Hero.LUCIO, Button.PRIMARY_FIRE), "Add Some Reverb", "Damage dealt with sonic amplifier\nwill release a crossfade burst to\nallies within its radius.", abilityIconString(Hero.LUCIO, Button.ABILITY_1), "In the Groove", "Allies within your speed boost\ncrossfade have recover cooldowns faster.\n", abilityIconString(Hero.LUCIO, Button.ULTIMATE), "Noise Complaint", "Using Sound Barrier knocks back\nall enemies within range\n", rgb(132, 201, 81)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, true, false]
    elif eventPlayer.getHero() == Hero.MEI:
        setHeroSpecificShopInfo([abilityIconString(Hero.MEI, Button.PRIMARY_FIRE), "Deep Freeze", "Damage dealt to enemies below\n30% life causes them to freeze.\n", abilityIconString(Hero.MEI, Button.ABILITY_2), "Icicle Sentience", "Your Ice Wall will\ndamage nearby enemies.\n", abilityIconString(Hero.MEI, Button.SECONDARY_FIRE), "Shatter", "Killing Frozen Enemies with a\nHeadshot causes them to explode\ninto icicles.", rgb(109, 171, 235)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.MERCY:
        setHeroSpecificShopInfo([abilityIconString(Hero.PHARAH, Button.ABILITY_1), "Spite of Hermes", "Every four bullets releases a rocket\nfrom your pistol. Using your\nultimate shoots it more often.", abilityIconString(Hero.MERCY, Button.ABILITY_1), "First Responder", "Using Guardian Angel makes you\nfly through enemies, flinging them\nbehind you.", abilityIconString(Hero.MERCY, Button.ULTIMATE), "Angel of Hope", "Using Valkarie resets ressurect\ncooldown and decreases\nits cooldown by 90%.", rgb(236, 233, 189)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.MIZUKI:
        setHeroSpecificShopInfo([abilityIconString(Hero.MIZUKI, Button.PRIMARY_FIRE), "Chained Karma", "Your Spirit Glaive Projectiles\nbounce to two additional enemies.\n", abilityIconString(Hero.MIZUKI, Button.ABILITY_1), "Extradimensional", "Using Katashiro Return makes\nenemies vanish around you, and\nreappear when it expires.", abilityIconString(Hero.MIZUKI, Button.ABILITY_2), "Dead Weight", "Binding Chain also chains\nadditional enemies around them.\n", rgb(154, 255, 199)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [false, false, true]
    elif eventPlayer.getHero() == Hero.MOIRA:
        setHeroSpecificShopInfo([abilityIconString(Hero.MOIRA, Button.PRIMARY_FIRE), "Coagulation", "Every consecutive 20% healing\nresource spent fires a free\nhealing orb.", abilityIconString(Hero.MOIRA, Button.SECONDARY_FIRE), "Entropy", "Killing an enemy with Biotic Grasp\ngrants extra ultimate charge,\nhealing resource and healing.", abilityIconString(Hero.MOIRA, Button.ABILITY_2), "Magnetization", "Enemies that take damage from\ndamage orb are dragged away with it.\n", rgb(151, 113, 228)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.ORISA:
        setHeroSpecificShopInfo([abilityIconString(Hero.ORISA, Button.ABILITY_1), "Reflective Coating", "Damage you take while in Fortify,\nis reflected back to the attacker three\nfold.", abilityIconString(Hero.ORISA, Button.ABILITY_2), "Spear Barage", "While Using Javalin Spin, Launch\na barage of spears in front\nof you.", abilityIconString(Hero.ORISA, Button.ULTIMATE), "Tornado Caller", "Using Terra Surge\nDrags all enemies in.\n", rgb(69, 139, 66)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [false, true, true]
    elif eventPlayer.getHero() == Hero.PHARAH:
        setHeroSpecificShopInfo([abilityIconString(Hero.PHARAH, Button.PRIMARY_FIRE), "Explosive Recoil", "Firing your rocket Launcher while\nairborne, you are pushed back slightly.\n", abilityIconString(Hero.PHARAH, Button.ABILITY_2), "Brain Freeze", "Minor enemies within your concusive\nblast are frozen briefly.\n", abilityIconString(Hero.PHARAH, Button.ULTIMATE), "Airstrike", "Rocket Barrage also fires\nlarge rockets.\n", rgb(60, 126, 204)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.RAMATTRA:
        setHeroSpecificShopInfo([abilityIconString(Hero.RAMATTRA, Button.PRIMARY_FIRE), "Void Stream", "Damaging enemies with Void Accelerator\npushes them back.\n", abilityIconString(Hero.RAMATTRA, Button.ABILITY_2), "Burrowing Vortex", "Minor Enemies within your Ravenous\nVortex are dragged underground.\n", abilityIconString(Hero.RAMATTRA, Button.ULTIMATE), "Mind Matrix", "Minor Enemies within your\nannihilation are frozen and\nsuspended in the air.", rgb(157, 140, 208)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, true, false]
    elif eventPlayer.getHero() == Hero.REAPER:
        setHeroSpecificShopInfo([abilityIconString(Hero.REAPER, Button.SECONDARY_FIRE), "Fangs of Undeath", "Eliminating Enemies with Dire Triggers\nwill stun and damage all other\nenemies around them.", abilityIconString(Hero.REAPER, Button.ABILITY_2), "Clinging Shadows", "Casting Shadow Step Stuns and\ndrags enemies with you.\n", abilityIconString(Hero.REAPER, Button.ULTIMATE), "No One Escapes Death", "Casting Death Blossom will\nroot enemies around you.\n", rgb(124, 62, 82)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, true, false]
    elif eventPlayer.getHero() == Hero.REINHARDT:
        setHeroSpecificShopInfo([abilityIconString(Hero.REINHARDT, Button.ABILITY_1), "Brute Force", "Damage Dealt with Charge\nknocks down minor enemies.\n", abilityIconString(Hero.REINHARDT, Button.ABILITY_2), "Arsonist", "Damage Dealt with Fire Strike\nignites enemies.\n", abilityIconString(Hero.REINHARDT, Button.ULTIMATE), "Epicenter", "Earth Shatter is now a circle\ncentering on you.\n", rgb(148, 161, 165)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.SIERRA:
        setHeroSpecificShopInfo([abilityIconString(Hero.SIERRA, Button.SECONDARY_FIRE), "Gotcha", "Headshotting an enemy with Tracking\ndart increases damage dealt to them\nby 250%.", abilityIconString(Hero.SIERRA, Button.ABILITY_1), "You're up doR.O.T.H.y", "While airborne, gain increased\nProjectile Speed and Damage.", abilityIconString(Hero.SIERRA, Button.ABILITY_2), "Disorienting Tremor", "Damage dealt with Tremor Charge\nstuns Minor Enemies.", rgb(115, 29, 36)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    elif eventPlayer.getHero() == Hero.SIGMA:
        setHeroSpecificShopInfo([abilityIconString(Hero.SIGMA, Button.ABILITY_1), "Negative Mass", "Kinetic Grasp drags enemies toward\nyou and releases a burst of damage\nthat scales with damage absorbed.", abilityIconString(Hero.SIGMA, Button.ABILITY_2), "Meteor Shower", "While Casting Accretion,\nSummon Meteors toward\nyou reticle.", abilityIconString(Hero.SIGMA, Button.ULTIMATE), "Constellations", "Damage dealt with Gravitic Flux\nreleases Homing Hyperspheres toward\nthe target.", rgb(148, 160, 165)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, false, true]
    elif eventPlayer.getHero() == Hero.SOJOURN:
        setHeroSpecificShopInfo([abilityIconString(Hero.SOJOURN, Button.SECONDARY_FIRE), "Negative Charge", "When Firing Charged Shot, release\nbursts of damage from where it ends to\nwhere it was fired from.", abilityIconString(Hero.SOJOURN, Button.ABILITY_1), "Coming Through!", "Power slide disables collision from\nenemies and flings them behind you.\n", abilityIconString(Hero.SOJOURN, Button.ABILITY_2), "Energizing Disruption", "Eliminations with Disruptor Shot\nreduces its cooldown by 4 seconds.\n", rgb(198, 28, 65)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, true, false]
    elif eventPlayer.getHero() == Hero.SOMBRA:
        setHeroSpecificShopInfo([abilityIconString(Hero.SOMBRA, Button.PRIMARY_FIRE), "Backstabber", "You deal extra damage to\nenemies not facing you.\n", abilityIconString(Hero.SOMBRA, Button.SECONDARY_FIRE), "Target Aquired", "Killing a Hacked target increases\ndamage dealt, speed, and ultimate\ncharge for six seconds.", abilityIconString(Hero.SOMBRA, Button.ULTIMATE), "Disabling the Firewalls", "Enemies hit with EMP\nare stunned and *Cursed.\n", rgb(118, 93, 189)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        eventPlayer.HeroToolTip = [0, 0, 10]
        
    elif eventPlayer.getHero() == Hero.TRACER:
        setHeroSpecificShopInfo([abilityIconString(Hero.TRACER, Button.PRIMARY_FIRE), "Divide and Conquer", "If three or more Minor enemies are\npresent, gain a target. Killing them grants ultimate\ncharge and resets ammo and blink charges.", abilityIconString(Hero.TRACER, Button.ABILITY_2), "Slipstream", "Casting Recall with enemies around\nyou will freeze and drag them with you.\n", abilityIconString(Hero.TRACER, Button.ULTIMATE), "Butterfly Effect", "Pulse Bomb's explosion chains\ntwice to enemies nearby.\n", rgb(214, 145, 65)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, true, false]
    elif eventPlayer.getHero() == Hero.VENDETTA:
        setHeroSpecificShopInfo([abilityIconString(Hero.VENDETTA, Button.PRIMARY_FIRE), "Daughter of Vengeance", "Performing an Overhead Swing\nreleases a wave of damage in front\nof you.", abilityIconString(Hero.VENDETTA, Button.ABILITY_1), "Whirlwind Warrior", "Whirlwind dash makes enemeis\nbe dragged into you.\n", abilityIconString(Hero.VENDETTA, Button.ABILITY_2), "Overseer", "You gain increased damage based\non how high you were within the\npast few seconds.", rgb(131, 25, 30)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, false, true]
    elif eventPlayer.getHero() == Hero.VENTURE:
        setHeroSpecificShopInfo([abilityIconString(Hero.VENTURE, Button.SECONDARY_FIRE), "Drill Master", "Drill dash allows you to drill\nthrough walls. You can also\ndrill enemies into walls.", abilityIconString(Hero.VENTURE, Button.ABILITY_1), "Sinkhole", "Emerging from Burrow drags\nenemies toward you.\n", abilityIconString(Hero.VENTURE, Button.MELEE), "Consecutive Concussions", "Dealing damage to minor\nenemies within 1m of you\nstuns them.", rgb(121, 97, 78)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [true, false, true]
    elif eventPlayer.getHero() == Hero.WIDOWMAKER:
        setHeroSpecificShopInfo([abilityIconString(Hero.WIDOWMAKER, Button.SECONDARY_FIRE), "Weapon of War", "Killing an enemy with a scoped\nheadshot damages and stuns enemies\nnear them.", abilityIconString(Hero.WIDOWMAKER, Button.ABILITY_1), "Ange de la Mort", "Using Grapple on a wall\nattachs you to that\nwall for 10 seconds.", abilityIconString(Hero.WIDOWMAKER, Button.ULTIMATE), "One Shot...", "Using Infra-Sight causes all\nenemies to become *Exposed.\n", rgb(157, 105, 166)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        eventPlayer.HeroToolTip = [0, 0, 100]
        
    elif eventPlayer.getHero() == Hero.WUYANG:
        setHeroSpecificShopInfo([abilityIconString(Hero.WUYANG, Button.PRIMARY_FIRE), "Against the Current", "Hitting close enemies with\nXuanwu Staff pushes them\nslightly away.", "{0} {1}".format(abilityIconString(Hero.WUYANG, Button.ABILITY_1), abilityIconString(Hero.WUYANG, Button.MELEE)), "Ice Dancer", "Using Melee while under\nRushing Torrent releases a beam that\ndamages and freezes Minor Enemies.", abilityIconString(Hero.WUYANG, Button.ABILITY_2), "Avalanche", "Minor Enemies hit with\nGuardian Wave are frozen.\n", rgb(67, 111, 210)])
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        
    else:
        eventPlayer.HeroSpecificShopInfo[9] = Color.ROSE
        #([Upgrade1]Exposed, Cursed, Blind), ([Upgrade2]Exposed, Cursed, Blind), ([Upgrade3]Exposed, Cursed, Blind)
        
        eventPlayer.customHeroAbilitys = [false, false, false]
