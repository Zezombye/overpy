#!suppressWarnings w_ow2_rule_condition_chase w_wait_until

settings {
    "main": {
        "description": "What if you could play Junkenstein's Revenge from the villains' POV?\r\n\r\nPlay as the mad Dr.​ Junkenstein, his fearsome Monster, the grim Reaper and the wicked Witch as you slaughter your way into the castle of Adlersbrunn to kill the ***** once and for all!\r\n\r\nA unique PvE experience with custom dialogue, cutscenes, enemies, upgrades and more! Get your revenge and claim your victory!\r\n\r\nV1.5.19 - Check out my YouTube & Discord! >>bit.ly/therister<<",
        "modeName": "Junkenstein's Victory V1.5.19"
    },
    "lobby": {
        "mapRotation": "paused",
        "team1Slots": 0,
        "team2Slots": 4,
        "returnToLobby": "afterGame",
        "swapTeamsAfterMatch": false
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "eichenwaldeHalloween"
            ]
        },
        "general": {
            "gamemodeStartTrigger": "immediately",
            "respawnTime%": 20
        }
    },
    "heroes": {
        "team1": {
            "ashe": {
                "ability2FuseTime%": 20
            },
            "brigitte": {
                "secondaryFireCooldown%": 200,
                "secondaryFireRechargeRate%": 500,
                "health%": 360,
                "shieldBashKb%": 300
            },
            "cassidy": {
                "health%": 500
            },
            "genji": {
                "health%": 500,
                "enableInfiniteUlt": true,
                "enableSpawningWithUlt": true
            },
            "lucio": {
                "passiveUltGen%": 150
            },
            "torbjorn": {
                "health%": 80,
                "enableInfiniteUlt": true
            },
            "general": {
                "abilityCooldown%": 0,
                "enableInfiniteAmmo": true
            }
        },
        "team2": {
            "torbjorn": {
                "health%": 80
            },
            "enabledHeroes": [
                "junkrat",
                "mercy",
                "reaper",
                "roadhog"
            ],
            "general": {
                "ultGen%": 50
            }
        }
    }
}

#Global variables

globalvar _objectVariable_0 0
globalvar _objectVariable_1 1
globalvar _objectVariable_2 2
globalvar _classIndexes 3
globalvar _extendedGlobalCollection 4
globalvar _tempNodes 5
globalvar _tempSegments 6
globalvar _tempAttributes 7
globalvar map 8
globalvar compressBakeMatcher 9
globalvar compressedNodes 10
globalvar compressBakeResult 11
globalvar compressCurrentNodeArray 12
globalvar compressBakeNodeLoop 13
globalvar compressBakeStringLoop 14
globalvar compressMapper 15
globalvar bake 16
globalvar newline 17
globalvar main_dialogue 18
globalvar main_speaker 19
globalvar i_vocal 20
globalvar i2_vocal 21
globalvar euros_total 22
globalvar is_dialoguing 23
globalvar ana_start_nana 24
globalvar active_dialogue_list 26
globalvar line_number 27
globalvar letter_scroll 28
globalvar dialogue_bot 29
globalvar t2_heroes_array 30
globalvar t2_names_array 31
globalvar t2_hero_colours 32
globalvar vocalisation 33
globalvar respawn_enemy 34
globalvar difficulty 35
globalvar spawn_corners 36
globalvar spawn_line 37
globalvar phase 38
globalvar objective 39
globalvar obj_color_r 40
globalvar obj_color_g 41
globalvar obj_color_b 42
globalvar skip_cutscene_pos 43
globalvar dialogue_priority 44
globalvar spawn_doors 45
globalvar i3 46
globalvar enemy_spawn 47
globalvar scripted_spawns 48
globalvar objective_pos 49
globalvar first_kill 50
globalvar boundary_corners 51
globalvar boundary_line 52
globalvar boundary_effects 53
globalvar objective_value 54
globalvar boundary_corners_2 56
globalvar boundary_line_2 57
globalvar return_cam 58
globalvar boss 59
globalvar objective_complete 60
globalvar defeat 61
globalvar last_player_to_die 62
globalvar merchant 64
globalvar shop_open 65
globalvar shop_campos 66
globalvar shop_left 67
globalvar enemy_ID_sequence 69
globalvar subtitle_speed 70
globalvar potions_price 71
globalvar i4 72
globalvar no_hud 73
globalvar fullwidth_spaces 74
globalvar dragon_blood_qty 75
globalvar enemy_spawn_2 76
globalvar dragon_blood_spawn 77
globalvar dragon_blood_hint_icon 78
globalvar zomnic_spawns 79
globalvar dragon_blood_actual_spawn 80
globalvar dragon_blood_effects 81
globalvar mercy_drop 82
globalvar dragon_blood_cache 83
globalvar last_collected_blood 84
globalvar numbers 85
globalvar cowboy_tp_array 86
globalvar boundary_effects_2 87
globalvar i5 88
globalvar pentagram_pos 89
globalvar pentagram_radius 90
globalvar pentagram_angle 91
globalvar pentagram_effects 92
globalvar summoner 93
globalvar door 94
globalvar summoner_effects 95
globalvar summoner_chars 96
globalvar hint 97
globalvar door_health 98
globalvar summoner_power 99
globalvar door_color 100
globalvar summoner_color 101
globalvar door_explosion 102
globalvar obj_cache 103
globalvar spawn_door_effects 104
globalvar shop_angle 105
globalvar i6 106
globalvar ana_spawn_fix 107
globalvar i7 108
globalvar water_you_doin 109
globalvar door_explosion_victims 110
globalvar real_total 111
globalvar mercy 112
globalvar roar 113
globalvar junkrat 114
globalvar reaper 115
globalvar faq_bot 116
globalvar cowboy_name 117
globalvar name_colors_2 118
globalvar sombra_egg 119
globalvar skull_effect 120
globalvar wait 121
globalvar pathmapReference 122
globalvar all_nodes 123
globalvar lol2 124
globalvar lol3 125
globalvar lol4 126
globalvar mystery_door 127


#Player variables

playervar pathfinderCurrent 1
playervar parentArray 3
playervar destination 4
playervar egg 6
playervar target 7
playervar start_pathfind 8
playervar enemy_ID 9
playervar strafe 10
playervar is_downed 11
playervar immune_effect 12
playervar took_knockback 13
playervar rein_throttle_mag 14
playervar bot_jump 15
playervar grillager_activate 16
playervar grillager_victims 17
playervar damage_dealt 18
playervar damage_received 19
playervar i 20
playervar euros 21
playervar i2 22
playervar in_boundary 23
playervar boss_ID 24
playervar cutscene_cam_pos 25
playervar cutscene_cam_lookat 26
playervar cutscene_cam_speedup 27
playervar pre_init 28
playervar zomnic 29
playervar avoid_enviro 30
playervar attack 31
playervar boss_target_location 32
playervar turn_rate 33
playervar has_status 34
playervar no_jump 35
playervar boss_target_location_2 36
playervar throttle_mag 37
playervar boss_pet 38
playervar death_timer 39
playervar revive_timer 40
playervar shop 41
playervar potions 42
playervar killer 43
playervar effects 45
playervar max_health 46
playervar max_ammo 47
playervar random 48
playervar burner 49
playervar no_dialogue 50
playervar is_shopping_text_ID 51
playervar shop_selection 52
playervar safeguard_fix 53
playervar in_spawn 54
playervar blood_collected 55
playervar blood_cache 56
playervar mine_cache 57
playervar potions_max 58
playervar pos_cache 59
playervar tping 60
playervar trail 61
playervar trail_cache 62
playervar late_join_check 63
playervar exploding 64
playervar zomnic_top 65
playervar zomnic_dest 66
playervar dead_summoner 67
playervar extra_lives_used 68
playervar ana_target_friends 69
playervar boss_effects 70
playervar gas_radius 71
playervar gas_pos 72
playervar poisoned 73
playervar speed_boosted 74
playervar speed 75
playervar speed_effect 76
playervar blind 77
playervar nano 78
playervar nano_effect 79
playervar blind_radius 80
playervar poison_effect 81
playervar bright 82
playervar scrolls_equip 83
playervar scrolls_random 84
playervar real 85
playervar heal_target 86
playervar electrify 87
playervar electrify_effect 88
playervar roar_effect 89
playervar ammo_cache 90
playervar create_scroll 91
playervar faraday_effect 92
playervar death_mark 93
playervar scythe_swing 95
playervar damage_target 96
playervar ubercharge_target 97
playervar ubercharge_effect 98
playervar hex 100
playervar grasp_effect 101
playervar is_grasping 102
playervar scythe_angle 103
playervar scythe_length 104
playervar broomsticked 105
playervar piss_ending 106
playervar sombra_sound 107
playervar falloff_pos 108
playervar falloff 109
playervar falloff_effect 110
playervar rezzing_players 111
playervar button_damageboost 112
playervar button_rez 113
playervar boss_phase 114
playervar no_pickup 115


#Subroutine names

subroutine InitialGlobal_2 0
subroutine InitialGlobal_3 1
subroutine InitialGlobal_4 2
subroutine main_dialogue 3
subroutine pathfind_init 4
subroutine pond 5
subroutine obj_color 6
subroutine egg 7
subroutine cowboy_tp 8
subroutine mercy_drop_blood 9
subroutine shop_ui_setup 12
subroutine genji_pet_strike 13
subroutine spawn_enemies 14
subroutine delete_bound_effects 15
subroutine boss_zoomin 16
subroutine phase_11_spawn 17


#Activated extensions

#!extension beamEffects
#!extension buffAndDebuffSounds
#!extension buffStatusEffects
#!extension debuffStatusEffects
#!extension kineticExplosionEffects
#!extension explosionSounds
#!extension spawnMoreDummyBots


rule "global init":
    disableInspector()
    subtitle_speed = createWorkshopSettingFloat("General", "Subtitle speed", 4, 1, 10, 1)
    difficulty = createWorkshopSettingEnum("General", "Difficulty", 0, ["Cinematic\u2028", "Dead Easy\u2028", "Para-Normal\u2028", "Terrifying!\u2028", "JUNKTASTICALLY NIGHTMARISH!!!"]) - 1
    newline = "\n"
    hudSubtext(getAllPlayers(), " {0}{0}{1}{2}".format("{0}{0}{0}{0}{0}{0}{0}{0}{0}".format(newline), newline, "{0}{0}{0}{0}".format(newline) if objective_complete or no_hud else " "), HudPosition.TOP, true, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    wait(false)
    t2_names_array = ["The Witch", "Dr.\u200b Junkenstein", "Junkenstein's Monster", "The Reaper", null, "The Swordsman", "The Merchant", "The Gunslinger", "The Summoner", "The Alchemist", null]
    t2_heroes_array = [Hero.MERCY, Hero.JUNKRAT, Hero.ROADHOG, Hero.REAPER, Hero.REINHARDT, Hero.GENJI, Hero.MOIRA, Hero.CASSIDY, Hero.SYMMETRA, Hero.ANA, Hero.SOMBRA]
    t2_hero_colours = [rgb(246, 231, 100), rgb(false, 255, 255), rgb(62, 219, 54), rgb(173, false, false), Color.WHITE, rgb(100, 255, 100), rgb(130, 40, 255), rgb(255, 50, 50), rgb(255, 119, false), rgb(54, 114, 255), rgb(169, 135, 255)]
    name_colors_2 = [rgb(255, 250, 204), rgb(156, 255, 255), rgb(162, 207, 159), rgb(196, 84, 84)]
    wait(false)
    for i5 in range(0, 3, true):
        createEffect(getAllPlayers(), Effect.CLOUD, Color.WHITE, vect(73.565, 11.5, -78.868), 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        createEffect(getAllPlayers(), Effect.CLOUD, Color.WHITE, vect(71.114, 11.5, -85.222), 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        createEffect(getAllPlayers(), Effect.CLOUD, Color.WHITE, vect(91.835, 9, -88.522), 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        createEffect(getAllPlayers(), Effect.CLOUD, Color.WHITE, vect(96.558, 9, -83.995), 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        spawn_corners = [vect(false, false, -5.25), vect(-24.09, false, -8.49)]
        wait(false)
    spawn_line = vectorTowards(spawn_corners[0], spawn_corners.last())
    pauseMatchTime()
    hudHeader([player for player in getAllPlayers() if not objective_complete and not no_hud and not player.shop], " {0}   OBJECTIVE: {1}   {0}".format(newline, objective), HudPosition.TOP, false, rgb(obj_color_r, obj_color_g, obj_color_b), HudReeval.VISIBILITY_STRING_AND_COLOR)
    objective = "Wait for players to assemble."
    async(obj_color, AsyncBehavior.RESTART)
    createEffect(getAllPlayers(), Effect.RING, Color.AQUA, skip_cutscene_pos, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createInWorldText(getAllPlayers() if skip_cutscene_pos.y < 900 else [], "Group up here to skip the dialogue!", skip_cutscene_pos, 1.2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.AQUA)
    createEffect(getAllPlayers(), Effect.RING, Color.GREEN, objective_pos, 4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createIcon([player for player in getAllPlayers() if objective_pos.y < 900 and not player.shop], objective_pos, Icon.ARROW_DOWN, IconReeval.VISIBILITY_AND_POSITION, Color.GREEN)
    hudSubtext(getAllPlayers(), " \n\n\n\n", HudPosition.LEFT, false, Color.WHITE, HudReeval.VISIBILITY)
    boundary_corners = [vect(12.6, 6, -118.814), vect(42.805, 6, -44.411)]
    boundary_line = vectorTowards(boundary_corners[0], boundary_corners.last())
    hudText(getPlayers(Team.2), "  Money:\u2028€{0}{1}  ".format(localPlayer.euros, " + R${0}".format(localPlayer.real) if localPlayer.real > false else ""), " ", " ", HudPosition.RIGHT, -0.49, rgb(150, 255, 175), Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_STRING_AND_COLOR)
    shop_campos = [vect(-23.327, 7.679, -91.651), vect(-21.86, 7.679, -94.904)]
    shop_left = normalize(crossProduct(directionTowards(shop_campos[0], shop_campos.last()), Vector.DOWN))
    wait(false)
    hudHeader([player for player in getAllPlayers() if player.shop], " {0}   {1}   {0}".format(newline, "Move - WASD, Select - {0}, Back - {1}, Exit - {2}".format(inputBindingString(Button.PRIMARY_FIRE), inputBindingString(Button.SECONDARY_FIRE), inputBindingString(Button.JUMP))), HudPosition.TOP, false, rgb(obj_color_g, obj_color_r, obj_color_b), HudReeval.VISIBILITY_STRING_AND_COLOR)
    potions_price = [50, 50, 40, 30, 50, 150, 100, 100, 150, 5]
    hudSubtext(getAllPlayers() if no_hud else [], " {0}{0}{0}{0}{0}{0}{0}".format("{0}{0}{0}{0}{0}{0}{0}".format(newline)), HudPosition.LEFT, -10, Color.WHITE, HudReeval.VISIBILITY)
    hudSubtext(getAllPlayers() if no_hud else [], " {0}{0}{0}{0}{0}{0}{0}".format("{0}{0}{0}{0}{0}{0}{0}".format(newline)), HudPosition.RIGHT, -10, Color.WHITE, HudReeval.VISIBILITY)
    fullwidth_spaces = " \u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002"
    hudSubtext(getAllPlayers(), ("{0}{1}{2}".format("\u200b" if main_speaker in [Hero.REINHARDT, Hero.SOMBRA] else "{0} {1}: ".format(heroIcon(main_speaker), t2_names_array[t2_heroes_array.index(main_speaker)]), main_dialogue.replace("Jersey McGee", cowboy_name).substring(0, letter_scroll), fullwidth_spaces.substring(0, strLen(main_dialogue) - letter_scroll + true))) if main_dialogue else " ", HudPosition.TOP, 2, t2_hero_colours[t2_heroes_array.index(main_speaker)], HudReeval.VISIBILITY_STRING_AND_COLOR)
    hudSubtext([player for player in getAllPlayers() if player.potions != null], " {0}{1} Potion effects:".format(newline, iconString(Icon.POISON_2)), HudPosition.LEFT, 20, rgb(213, 184, 255), HudReeval.VISIBILITY_AND_STRING)
    wait(false)
    hudSubtext([player for player in getAllPlayers() if player.potions[0] > false], "+{0}% damage dealt".format(localPlayer.potions[0] * 5), HudPosition.LEFT, 21, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in getAllPlayers() if player.potions[true] > false], "+{0}% healing dealt".format(localPlayer.potions[true] * 5), HudPosition.LEFT, 22, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in getAllPlayers() if player.potions[2] > false], "+{0} max HP".format(localPlayer.potions[2] * 20), HudPosition.LEFT, 23, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in getAllPlayers() if player.potions[3] > false], "+{0}% movement speed".format(localPlayer.potions[3] * 5), HudPosition.LEFT, 24, Color.AQUA, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in getAllPlayers() if player.potions[4] > false], "+{0}% max ammo".format(localPlayer.potions[4] * 20), HudPosition.LEFT, 25, Color.BLUE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in getAllPlayers() if player.potions[5] > false], "-{0} {1} on cooldowns".format(localPlayer.potions[5], "seconds" if localPlayer.potions[5] > true else "second"), HudPosition.LEFT, 26, Color.PURPLE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in getAllPlayers() if player.potions[6] > false], "{0}% healing from damage".format(localPlayer.potions[6] * 5), HudPosition.LEFT, 27, Color.ROSE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in getAllPlayers() if player.potions[7] > false], "{0}% chance to inflict burning".format(localPlayer.potions[7] * 5), HudPosition.LEFT, 28, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    hudSubtext([player for player in getAllPlayers() if player.potions[8] - player.extra_lives_used > false], "{0} extra {1}".format(localPlayer.potions[8] - localPlayer.extra_lives_used, "lives" if localPlayer.potions[8] - localPlayer.extra_lives_used > true else "life"), HudPosition.LEFT, 29, rgb(112, 179, 134), HudReeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(), "  JUNKENSTEIN'S VICTORY V1.5.19  ", null, " \n\n", HudPosition.RIGHT, -1, Color.AQUA, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "A Gamemode by Therister#1251", HudPosition.RIGHT, -0.9, rgb(148, 255, 248), HudReeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(), null, "Check out my YouTube and Discord!", "\u2003\u2003{0} bit.ly/therister".format(iconString(Icon.HEART)), HudPosition.RIGHT, -0.8, Color.WHITE, rgb(174, 158, 255), rgb(196, 102, 255), HudReeval.VISIBILITY_AND_STRING)
    hudText(getAllPlayers(), null, "With support from Grandeur Hammers", " {0} bit.ly/grandeurhammers\n".format(abilityIconString(Hero.TORBJORN, Button.ABILITY_2)), HudPosition.RIGHT, -0.7, Color.WHITE, rgb(255, 183, 120), Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    hudText(getPlayers(Team.2), "  Difficulty:{0}  ".format("\u2028Cinematic:\u2028Dead Easy:\u2028Para-Normal:\u2028Terrifying!: JUNKTASTICALLY NIGHTMARISH!!!".split(":")[difficulty + 1]), " ", " ", HudPosition.RIGHT, -0.5, [Color.GREEN, Color.WHITE, Color.YELLOW, Color.ORANGE, Color.RED][difficulty + 1], Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_STRING_AND_COLOR)
    wait(false)
    hudSubtext([player for player in getAllPlayers() if player.scrolls_equip != []], " {0}{1} Scroll effects:".format(newline, iconString(Icon.SPIRAL)), HudPosition.LEFT, 11, rgb(255, 248, 176), HudReeval.VISIBILITY_AND_STRING)
    hudText([player for player in getAllPlayers() if null in player.scrolls_equip], null, "• Chaos Magic:• Junkenstein's Revenge:• Evil Stitched To Evil:• Reap What You Sow".split(":")[t2_heroes_array.index(localPlayer.getHero())], ["Heal yourself for 50% damage your heal target takes and 50%\ndamage they deal. Your health regen is drastically reduced.", "When downed, repeatedly release Total Mayhem\nbombs at your corpse every second.", "Every killing blow grants you +100 unrecoverable HP.", "Every killing blow refreshes\none of your cooldowns."][t2_heroes_array.index(localPlayer.getHero())], HudPosition.LEFT, 12, Color.WHITE, name_colors_2[t2_heroes_array.index(localPlayer.getHero())], t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())], HudReeval.VISIBILITY_AND_STRING)
    hudText([player for player in getAllPlayers() if 1 in player.scrolls_equip], null, "• Mystic Transfusion:• Superconductive:• It's Alive!:• Marked For Death".split(":")[t2_heroes_array.index(localPlayer.getHero())], ["Press ''{0}'' while healing a player to instantly heal\nthem for 100HP, sacrificing 60HP of your own.".format(inputBindingString(Button.RELOAD)), "When under 66.6% health, nearby enemies\ntake electric damage over time.", "Become nanoboosted for 10 seconds whenever\nyou revive. Allies revive you twice as quickly.", "Shoot an enemy to mark them, making them\nvisible through walls and take 1.25× damage.\n{0}".format("You can only mark one enemy at a time.")][t2_heroes_array.index(localPlayer.getHero())], HudPosition.LEFT, 13, Color.WHITE, name_colors_2[t2_heroes_array.index(localPlayer.getHero())], t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())], HudReeval.VISIBILITY_AND_STRING)
    hudText([player for player in getAllPlayers() if 2 in player.scrolls_equip], null, "• Bewitching Grasp/• Discharged/• Recycling/• The Reaper's Scythe".split("/")[t2_heroes_array.index(localPlayer.getHero())], ["Replaces Damage Boost with a beam that locks\nonto enemies and drains their health.", "Every killing blow causes the victim to discharge\nelectricity, damaging nearby enemies and stunning them.", "When crouching, deal 2× damage,\nbut every shot takes 100HP from you.", "Gain 2× melee range and 2.5× melee damage."][t2_heroes_array.index(localPlayer.getHero())], HudPosition.LEFT, 14, Color.WHITE, name_colors_2[t2_heroes_array.index(localPlayer.getHero())], t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())], HudReeval.VISIBILITY_AND_STRING)
    hudText([player for player in getAllPlayers() if 3 in player.scrolls_equip], null, "• Flying Broomstick/• Shocking Surprise/• Chain Reaction/• Vengeful Ghost".split("/")[t2_heroes_array.index(localPlayer.getHero())], ["Guardian Angel now damages and\nknocks back enemies in your path.", "Concussion Mine and Riptire now also\nelectrify enemies, stunning them.", "Successfully landing a hook sets its cooldown to 1 second,\nhowever missing a hook sets its cooldown to 12 seconds.", "While in Wraith Form, nearby enemies\ntake damage over time."][t2_heroes_array.index(localPlayer.getHero())], HudPosition.LEFT, 15, Color.WHITE, name_colors_2[t2_heroes_array.index(localPlayer.getHero())], t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())], HudReeval.VISIBILITY_AND_STRING)
    hudText([player for player in getAllPlayers() if 4 in player.scrolls_equip], null, "• Undying Servitude/• Faraday Trap/• Monstrous Roar/• Jumpscare".split("/")[t2_heroes_array.index(localPlayer.getHero())], ["Replaces Resurrect. Casts a spell on a living teammate that\nmakes them invulnerable to all damage for 8 seconds.", "When an enemy is caught in your Steel Trap, they start\nelectrifying nearby enemies, damaging and rooting them.", "Replaces Take A Breather with a roar that heals you and\ngrants 60% damage reduction for 5 seconds. All enemies\n{0}".format("immediately target you."), "Upon exiting Shadow Step, all nearby\nenemies become frozen in fear."][t2_heroes_array.index(localPlayer.getHero())], HudPosition.LEFT, 16, Color.WHITE, name_colors_2[t2_heroes_array.index(localPlayer.getHero())], t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())], HudReeval.VISIBILITY_AND_STRING)
    hudText([player for player in getAllPlayers() if 5 in player.scrolls_equip], null, "• Hex Mania/• Zombardier/• Beware; For I Am Fearless/• Dance With The Reaper".split("/")[t2_heroes_array.index(localPlayer.getHero())], ["Upon activating Valkyrie, all enemies in a 30 meter radius go\ninsane for 8 seconds, becoming hacked and confused.", "Upon activating Riptire, a zombardier is summoned\nthat fights for you for 20 seconds.", "Whole Hog now deals zero knockback.\n2× movement speed while Whole Hog is active.", "While using Death Blossom, you become\ninvincible and move 3× as fast."][t2_heroes_array.index(localPlayer.getHero())], HudPosition.LEFT, 17, Color.WHITE, name_colors_2[t2_heroes_array.index(localPlayer.getHero())], t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())], HudReeval.VISIBILITY_AND_STRING)
    chaseAtRate(pentagram_angle, 9999800320, 120, ChaseRateReeval.NONE)
    wait(0.1)
    createDummy(Hero.ZENYATTA, Team.2, 5, vect(-12.94, true, -0.41), vect(-0.16, false, 0.99))
    faq_bot = getLastCreatedEntity()


rule "Initial Global":
    _classIndexes[1000] = null
    _extendedGlobalCollection[false] = _classIndexes.index(null)
    _classIndexes[_extendedGlobalCollection[0]] = 1
    _tempNodes = [vect(-0.609, 0.022, -9.436), vect(-10.551, 0.35, -16.669), vect(-29.31, -1.904, -14.72), vect(-31.848, 1.96, -34.418), vect(-8.674, 1.828, -27.266), vect(-22.122, 1.967, -35.729), vect(7.999, 0.889, -7.298), vect(17.132, 4, -12.994), vect(23.922, 6, -15.107), vect(20.188, 9, -24.031), vect(-0.408, 0.988, -19.034), vect(9.218, 4, -19.923), vect(15.074, 4.025, -21.503), vect(27.784, 0.949, -10.904), vect(11.849, 3.81, -27.775), vect(-6.378, 1.999, -37.315), vect(27.288, 5, -40.787), vect(24.877, 3.915, -27.189), vect(27.952, 4.015, -33.484), vect(14.116, 3.887, -34.279), vect(13.03, 4.26, -41.419), vect(18.342, 4.838, -49.171), vect(37.366, 9.498, -50.984), vect(11.176, 4.597, -47.015), vect(-1.813, 6, -48.089), vect(-3.411, 7, -42.193), vect(10.103, 9.734, -40.578), vect(10.431, 5.989, -59.539), vect(-0.615, 5.985, -57.289), vect(-4.028, 6, -66.51), vect(-9.485, 5, -54.366), vect(-4.803, 3.564, -85.748), vect(3.479, 5.742, -80.25), vect(6.188, 5.829, -69.444), vect(-10.286, 3, -69.473), vect(-1.713, 6.521, -72.592), vect(9.809, 5.875, -79.092), vect(17.965, 5.853, -75.657), vect(20.615, 4.845, -62.592), vect(30.824, 5, -54.271), vect(11.92, 6.012, -89.04), vect(5.028, 4.997, -97.245), vect(16.875, 6.01, -90.384), vect(19.37, 9.011, -97.901), vect(13.078, 11.012, -100.262), vect(10.818, 11.012, -91.137), vect(10.44, 11.012, -84.287), vect(23.06, 11, -72.472), vect(31.32, 11.5, -67.877), vect(32.867, 4.812, -61.992), vect(28.691, 6.026, -71.291), vect(22.957, 6.026, -71.348), vect(34.755, 5.25, -56.882), vect(38.693, 5.25, -48.497), vect(42.926, 5.237, -50.158), vect(40.538, 5.221, -59.015), vect(54.749, 6.722, -68.118), vect(49.066, 5.802, -57.309), vect(46.72, 5.571, -67.477), vect(37.028, 6.03, -73.86), vect(29.199, 8, -84.306), vect(41.63, 7.455, -81.919), vect(16.804, 11.012, -88.675), vect(24.846, 9.666, -88.719), vect(58.825, 11.702, -58.78), vect(55.907, 11.723, -75.984), vect(55.228, 11.513, -86.312), vect(60.019, 11.135, -90.557), vect(40.038, 10.723, -98.802), vect(51.724, 10.067, -96.519), vect(33.495, 10.128, -94.131), vect(47.144, 11.619, -85.141), vect(49.76, 11.493, -75.664), vect(67.743, 12.723, -71.416), vect(59.608, 6.358, -80.405), vect(53.775, 6.723, -104.848), vect(33.307, 13.595, -85.17), vect(36.085, 12.725, -106.026), vect(53.384, 17.725, -110.047), vect(58.54, 17.723, -104.745), vect(60.436, 18.723, -93.517), vect(61.074, 17.702, -85.58), vect(54.028, 18.046, -80.398), vect(67.591, 17.834, -69.342), vect(54.788, 21.003, -65.417), vect(66.343, 15.897, -62.078), vect(72.707, 12.695, -97.361), vect(76.681, 10.687, -109.548), vect(65.341, 7.65, -107.85), vect(81.989, 12.683, -95.181), vect(86.402, 12.674, -75.978), vect(104.413, 12.729, -79.171), vect(102.662, 9.576, -90.767), vect(100.534, 12.723, -70.163), vect(76.35, 12.66, -67.602), vect(58.434, 4.725, -88.426), vect(97.474, 18.415, -71.162), vect(98.156, 16.815, -74.479), vect(81.581, 21.153, -65.114), vect(89.31, 20.795, -62.73), vect(97.641, 12.723, -57.31), vect(79.167, 12.723, -55.265), vect(80.711, 15.723, -38.875), vect(86.096, 12.723, -43.476), vect(86.601, 12.723, -34.959), vect(90.735, 12.723, -56.135), vect(93.139, 11.723, -48.714), vect(85.101, 12.723, -46.704), vect(97.6, 10.723, -43.19), vect(90.301, 15.725, -19.041), vect(99.121, 15.725, -20.901), vect(109.951, 12.723, -23.933), vect(106.003, 10.723, -40.486), vect(105.162, 12.723, -49.333), vect(107.246, 12.723, -56.811), vect(124.513, 10.723, -62.288), vect(129.244, 8.723, -44.727), vect(118.793, 8.719, -43.726), vect(136.184, 11.723, -62.483), vect(137.808, 11.723, -55.827), vect(130.946, 11.723, -54.117), vect(139.673, 11.723, -48.365), vect(143.569, 11.723, -40.443), vect(131.252, 14.736, -40.05), vect(122.68, 8.72, -28.736), vect(113.247, 14.723, -29.727), vect(130.988, 8.723, -36.809), vect(113.591, 8.723, -31.002), vect(130.415, 8.722, -26.045), vect(118.527, 8.722, -22.631), vect(131.959, 10.723, -17.417), vect(112.951, 10.723, -19.4), vect(133.553, 12.723, -9.748), vect(128.497, 13.723, -7.765), vect(126.15, 14.764, -16.688), vect(139.638, 10.723, -25.083), vect(114.91, 10.723, -14.259), vect(120.263, 10.723, -14.159), vect(122.493, 12.723, -7.061), vect(110.431, 10.738, -5.908), vect(120.173, 10.723, 1.409), vect(138.444, 10.723, -18.647), vect(145.609, 10.738, -14.167), vect(139.898, 10.723, -4.215), vect(97.004, 10.723, -28.868), vect(100.974, 10.732, -20.133), vect(93.077, 12.723, -115.487), vect(89.818, 12.723, -102.53), vect(96.843, 12.723, -102.135), vect(-12.691, 1.063, -6.665), vect(-6.232, true, -1.271), vect(-19.238, 1.042, -3.466), vect(2.176, 5, -14.219), vect(2.132, 6, 0.496), vect(-2.941, 6, 0.202), vect(-13.227, true, 4.966), vect(-5.045, 3, 19.022), vect(-14.967, true, 17.276), vect(-22.746, true, 5.945), vect(-26.512, 0.264, -4.156), vect(-25.421, -2, -9.633), vect(78.278, 13.116, -85.915), vect(70.674, 13.313, -78.048), vect(68.98, 13.072, -91.088), vect(93.785, 8.993, -86.232), vect(88.032, 12.649, -67.89)]
    InitialGlobal_2()


def InitialGlobal_2():
    @Name "Initial Global 2"

    _tempSegments = [Vector.UP, vect(true, 2, []), vect(2, 3, []), vect(3, 5, []), vect(5, 4, []), vect(4, true, []), vect([], 6, []), vect(6, 7, []), vect(7, 8, []), vect(8, 9, []), vect(7, 12, []), vect(12, 11, []), vect(11, 10, []), vect(10, [], []), vect(6, 13, []), vect(14, 12, []), vect(14, 4, []), vect(15, 4, []), vect(13, 17, []), vect(17, 18, []), vect(18, 16, []), vect(19, 17, []), vect(19, 14, []), vect(19, 15, []), vect(19, 18, []), vect(14, 17, []), vect(13, 8, []), vect(9, 17, []), vect(20, 19, []), vect(20, 16, []), vect(21, 23, []), vect(21, 20, []), vect(21, 16, []), vect(21, 22, []), vect(20, 23, []), vect(23, 24, []), vect(24, 25, []), vect(25, 26, []), vect(26, 19, []), vect(26, 23, []), vect(28, 27, []), vect(28, 23, []), vect(28, 24, []), vect(28, 30, []), vect(28, 29, []), vect(28, 33, []), vect(30, 34, []), vect(34, 31, []), vect(31, 32, []), vect(34, 29, []), vect(29, 35, []), vect(35, 32, []), vect(32, 33, []), vect(33, 27, []), vect(21, 38, []), vect(38, 27, []), vect(27, 37, []), vect(37, 36, []), vect(36, 33, []), vect(36, 32, []), vect(38, 37, []), vect(39, 21, []), vect(39, 38, []), vect(31, 41, []), vect(41, 40, []), vect(40, 36, []), vect(40, 37, []), vect(40, 42, []), vect(42, 43, []), vect(43, 44, []), vect(44, 45, []), vect(45, 46, []), vect(46, 36, []), vect(22, 48, []), vect(48, 47, []), vect(47, 37, []), vect(38, 49, []), vect(49, 50, []), vect(50, 51, []), vect(51, 37, []), vect(49, 52, []), vect(52, 53, []), vect(53, 54, []), vect(54, 55, []), vect(55, 58, []), vect(58, 57, []), vect(52, 55, []), vect(55, 57, []), vect(58, 56, []), vect(50, 59, []), vect(59, 60, []), vect(60, 61, []), vect(61, 58, []), vect(58, 59, []), vect(59, 61, []), vect(45, 62, []), vect(62, 63, []), vect(63, 60, []), vect(60, 54, []), vect(54, 64, []), vect(64, 65, []), vect(65, 66, []), vect(61, 70, []), vect(70, 68, []), vect(68, 69, []), vect(69, 67, []), vect(67, 66, []), vect(61, 69, []), vect(69, 66, []), vect(65, 72, []), vect(72, 71, []), vect(71, 66, []), vect(71, 61, []), vect(72, 58, []), vect(65, 73, []), vect(73, 56, []), vect(74, 56, []), vect(68, 75, []), vect(76, 61, []), vect(68, 77, []), vect(77, 78, []), vect(78, 79, []), vect(79, 80, []), vect(80, 81, []), vect(81, 73, []), vect(80, 69, []), vect(81, 82, []), vect(82, 72, []), vect(82, 83, []), vect(83, 84, []), vect(84, 58, []), vect(83, 85, []), vect(85, 64, []), vect(75, 88, []), vect(88, 87, []), vect(87, 86, []), vect(86, 67, []), vect(86, 69, []), vect(86, 80, []), vect(86, 89, []), vect(89, 90, []), vect(90, 93, []), vect(93, 91, []), vect(91, 92, []), vect(91, 90, []), vect(94, 73, []), vect(94, 85, []), vect(94, 90, []), vect(74, 95, []), vect(95, 75, []), vect(97, 96, []), vect(96, 90, []), vect(97, 90, []), vect(98, 94, []), vect(99, 90, []), vect(94, 101, []), vect(100, 93, []), vect(102, 101, []), vect(105, 100, []), vect(105, 101, []), vect(105, 106, []), vect(105, 99, []), vect(106, 107, []), vect(106, 108, []), vect(107, 104, []), vect(104, 108, []), vect(102, 104, []), vect(108, 112, []), vect(112, 111, []), vect(111, 110, []), vect(110, 109, []), vect(109, 104, []), vect(108, 113, []), vect(113, 114, []), vect(114, 115, []), vect(115, 116, []), vect(116, 117, []), vect(117, 112, []), vect(113, 117, []), vect(120, 119, []), vect(119, 118, []), vect(118, 115, []), vect(116, 121, []), vect(121, 119, []), vect(121, 122, []), vect(122, 123, []), vect(124, 123, []), vect(117, 124, []), vect(125, 124, []), vect(116, 126, []), vect(126, 124, []), vect(124, 127, []), vect(127, 117, []), vect(127, 131, []), vect(130, 128, []), vect(128, 124, []), vect(124, 129, []), vect(133, 132, []), vect(132, 130, []), vect(133, 134, []), vect(134, 124, []), vect(135, 122, []), vect(135, 130, []), vect(135, 128, []), vect(137, 129, []), vect(137, 136, []), vect(137, 130, []), vect(137, 138, []), vect(138, 133, []), vect(136, 131, []), vect(140, 139, []), vect(139, 136, []), vect(143, 142, []), vect(142, 141, []), vect(141, 130, []), vect(144, 108, []), vect(144, 145, []), vect(148, 147, []), vect(147, 89, []), vect(146, 87, []), vect([], 153, []), vect(153, 154, []), vect(154, 156, []), vect(156, 157, []), vect(157, 155, []), vect(155, 151, []), vect(151, 149, []), vect(149, true, []), vect(149, 150, []), vect(150, 155, []), vect([], 152, []), vect(153, 155, []), vect(155, 158, []), vect(158, 159, []), vect(159, 160, []), vect(160, 2, []), vect(67, 163, []), vect(163, 86, []), vect(161, 89, []), vect(161, 90, []), vect(161, 162, []), vect(161, 163, []), vect(94, 162, []), vect(162, 163, []), vect(164, 92, []), vect(164, 89, []), vect(90, 165, []), vect(165, 94, [])]
    InitialGlobal_3()


def InitialGlobal_3():
    @Name "Initial Global 3"

    _tempAttributes = [vect(13, 8, true), vect(17, 9, true), vect(23, 26, true), vect(19, 26, true), vect(34, 29, true), vect(36, 46, true), vect(37, 47, true), vect(69, 66, true), vect(61, 71, true), vect(58, 72, true), vect(61, 76, true), vect(69, 80, true), vect(72, 82, true), vect(58, 84, true), vect(64, 85, true), vect(86, 80, true), vect(90, 97, true), vect(90, 96, true), vect(94, 98, true), vect(90, 99, true), vect(105, 99, true), vect(104, 102, true), vect(117, 113, true), vect(124, 123, true), vect(124, 125, true), vect(127, 131, true), vect(124, 134, true), vect(128, 135, true), vect([], 152, true), vect([], 153, true), vect(164, 89, true)]
    _objectVariable_0[_extendedGlobalCollection[0]] = _tempNodes
    _objectVariable_1[_extendedGlobalCollection[0]] = _tempSegments
    _objectVariable_2[_extendedGlobalCollection[0]] = _tempAttributes
    map = _extendedGlobalCollection[0]
    compressBakeMatcher = "\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000b\u000c\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz|}~\u007f\u0080\u0081\u0082\u0083\u0084\u0085"
    InitialGlobal_4()


def InitialGlobal_4():
    @Name "Initial Global 4"

    compressedNodes = [["\u0001\u0002\u0003\u0007\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0010\u0006\u0016\u0011\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u0003\u0001\u0003\u0007\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u0003\u0004\u0001\u0004\u0003\u0005\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 ¥¤¢¦§\u0004ªdHbd"], ["\u0003\u0006\u0005\u0001\u0007\u0005\u0002\u0010\u0009\u0015\u0002\u0010\u0012\u0015\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 ¥¤¢¦§\u0004ªdHbd"], ["\u0003\u0006\u0003\u0007\u0001\u0006\u0002\u0010\u0009\u0015\u0002\u0010\u0012\u0015\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u0003\u0006\u0005\u0007\u0007\u0001\u0002\u0010\u0009\u0015\u0002\u0010\u0012\u0015\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¦§\u0004ªdHbd"], ["\u0008\u0002\u0003\u0007\u0003\u0006\u0001\u0008\u0009\u000b\u0002\u0010\u0009\u0008\u0010\u0006\u0016\u0011\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u0008\u0002\u0003\u0007\u0012\u0006\u0009\u0001\u0009\u000b\u000f\u0010\u0009\u0008\u0010\u0017\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u0008\u0002\u0003\u0007\u0012\u0006\u0009\u000b\u0001\u000b\u000f\u0010\u0009\u0008\u0010\u0017\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u0008\u0002\u0003\u0007\u0012\u0006\u0009\u000b\u000c\u0001\u000f\u0010\u0009\u0008\u0010\u0017\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u000e\u0002\u0003\u0007\u0003\u0006\u0002\u0010\u0009\u000b\u0001\u000e\u000f\u0008\u0010\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u000e\u0002\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u000b\u000f\u0001\u000f\u0015\u0010\u0017\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u000e\u0002\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u000b\u000f\u0010\u0001\u0015\u0010\u0017\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u0008\u0002\u0003\u0007\u0012\u0006\u0011\u000b\u0011\u000b\u0002\u0010\u0009\u0001\u0015\u0017\u0016\u0011\u0015\u0015\u0017\u0014\u0019\u0018\u001b\u001e\u0017+\u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002  ¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0001\u0017\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u0003\u0006\u0003\u0007\u0013\u0006\u0002\u0010\u0009\u0015\u0002\u0010\u0012\u0015\u0017\u0001\u0016\u0017\u0017\u0013\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u0008\u0006\u0003\u0007\u0012\u0006\u0009\u000b\u000c\u0015\u000f\u0010\u0012\u0015\u0015\u0017\u0001\u0016\u0014\u0016\u0014\u0014\u0019\u0019\u001b\u001c\u001b+\u001b  %)\u001f#!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u0008\u0006\u0003\u0007\u0012\u0006\u0009\u000b\u000c\u0015\u000f\u0010\u0012\u0015\u0015\u0017\u0016\u0001\u0015\u0015\u0017\u0014\u0019\u0018\u001b\u001e\u0017+\u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u0008\u0006\u0003\u0007\u0012\u0006\u0009\u000b\u000c\u0015\u000f\u0010\u0012\u0015\u0015\u0017\u0016\u0016\u0001\u0016\u0017\u0014\u0019\u0018\u001b\u001e\u0017+\u001b  %)\u001f#!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0016\u0017\u0017\u0001\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0018\u0017\u0017\u0018\u0001\u0018\u0019\u0018\u001b\u001c\u001b \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019\u0001\u0019\u0019\u001b\u001c\u001b+\u001b  %)\u001f#!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019\u001a\u0001\u0019\u001b\u001c\u001b+\u001b  %)\u001f#!*+\u0019\u0019*--/23)5\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019\u0001\u001b\u001c\u001b \u001b  %& #!&+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2C;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019\u001c\u0001\u001c\u001d \u001c  %& #!&\u001f\u001f\u0019)--/23)*4+8*69:9?<<7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019\u001c\u001d\u0001\u001d \u001c  %& #!&\u001f\u001f\u0019)--/23)*4+8*69:9?<<7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019\u001c\u001d\u001e\u0001 \u001c  %& #!&\u001f\u001f\u0019)--/23)*4+8*69:9?<<7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u001b+\u0019  \u001c\u001b\u0001\u001f  %&\u001f#!&\u001f\u001f+)--/23)*4+8*69:9?<<7@@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019  \u001c\u001b \u0001  %& #!&\u001f\u001f+)--/23)*4+8*69:9?<<7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019  \u001c\u001b !\u0001 %( #!%)\u001f+)$-/23)*4+8*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019  \u001c\u001b # \u0001'& #!&\u001f\u001f+)$-/23)*4+8*69:9?<<7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0014\u0018\u001b+5  \u001c\u001b&!''\u0001$%$%%)*+.$-/23)*478*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0014\u0018\u001b+5  \u001c\u001b&&( %\u0001%$%%)*+)$-/23)*478*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0014\u0018\u001b+5  \u001c\u001b&&  %&\u0001$%&)\u001f+)--/23)*4+8*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019  \u001c\u001b !'''( \u0001!%)\u001f+)$-/23)*4+8*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u0009\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0017\u0017\u0018\u001b\u001b\u0019  \u001c\u001b !( %(%$\u0001%)*+)$-/23)*478*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5  \u001c\u001b&&( %))$%\u0001)*+)--/23)*478*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*\u0001*+*--/23)*478*69:9?<@7@@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f  %)\u001f#%*+\u0001+*--/23)*4+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019,\u0019\u0019\u001b\u001c\u001b+\u001f  %)\u001f#%*+,\u0001*--/23)*4+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b&&( .))$%--*+\u0001--/03)*478*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b&&''.$)$%--*+.\u0001-/03)*478*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b&&( .))$%--*+/-\u0001/01)*478*69:9?<@7D@2C;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b&&( .))$%--*+/-0\u0001012*478*69:9?<@7DA2C;MLGKBBBL==IBITUJWMY?EH[P[¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b&&( .))$%--*+/-01\u000112*478*6;A???@ADA2CFMLGKBBBL==IBITUJWMY?EH[P[¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b&&( .))$%--*+/-012\u00012*47@76;A???@ADA2CFMLGKBBBL==IBITUJWMY?EH[P[¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b&&( .))$%--*+/-0123\u0001*47@76;A???@ADA2CFMLGKBBBL==IBITUJWMY?EH[P[¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019\u001a5\u0019\u001b\u001c\u001b+\u001b  %)\u001f#!*+\u0019\u0019*--/23)\u00014+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019\u001a5\u0019\u001b\u001c\u001b+\u001b  %)\u001f#!*+\u0019\u0019*--/23)5\u0001+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f  %)\u001f#%*86+*--/23)*4\u00016769:9?<<7@@DA;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--/23)*47\u0001769:9?<@7@@DA;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*8*+*--/23)*478\u000169:9?<@7@@2A;MLGKBBB?==IBITUJWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f  %)\u001f#%*86+*--/23)*4967\u00019:9?<<7@?DA;MFGKBBM?==eBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f  %)\u001f#%*86+*--/23)*4967:\u0001:;?<<7;?DA;MFGKBBM?==eBITUVWMZ?EH[P`d`a`ZO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©dHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f  %)\u001f#%*86+*--/2C)*4967:;\u0001;?<<?;?DA;MFGKBBM?==eBITUVWMZ?EH[P`d`a`ZO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©dHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f  %)\u001f#%*86+*--/2C)*4967<;<\u0001?<<?@?DA;MFGKBBM?==eBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?\u0001?=?@?DAFMFGKBBM?==eBITUVNMY?dH^P`d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f  %)\u001f#%*86+*--/2C)*4967<;<>?\u0001>?@?DA;MFGKBBM?==eBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<???\u0001?@?DAFMFGKBBM?==eBITUVWMY?XH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--/2C)*47@769<???@\u0001@@DAFMLGKBBB?==IBITUJWMY?XH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*-012C2*47@76;A???@A\u0001ADAFMLGKBBBL==IBITUJWMY?EH[P[¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;<???BBB\u0001DAFMLGKBBBLF=IBITUJWMW?EH[P[¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*&( .))$%-86+/-012C2*47@76;A???@ADA\u0001CFMLGKBBBL==IBITUJWMY?EH[P[¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+/-012C2*47@76;A???@ADAD\u0001FMLGKBBBL==IBITUJWMY?EH[P[¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f  %)\u001f#%*86+*--/2C)*4967:;E;N<<?;?DA\u0001EFGJHIMFF=IBITUVWMZXEH[]`d`a`ZO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©dHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--12C)*49@7:;E;N?=?BJDAF\u0001FGJHIMFF=IBITUVWMWXEH[][d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7:;E;N?=BBJDAFG\u0001GJHIGFF=IBITUJWMWXEH[][¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?N?BBBJDAFGH\u0001JHIGFF=IBITUJUMW?EH[][¨`a`©P``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHb`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;<???BBBKDAFGJJ\u0001IIBFFeIBIRSJUVW?EJ^P[¨`a`NP``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHb`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;<???BBBJDAFGJJJ\u0001IGFFeIBITUJUVW?EJ[P[¨`a`NP``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHb`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;<???BBBKDAFMLJKI\u0001BLFeIBIRSJUMW?EJ^P[¨`a`NP``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHb`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7:;E;N?=BBJDAFMLGJHI\u0001LF=IBITUVWMWXEH[][¨`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--12C)*49@7:;E;N?=?BJDAFMFGJHIM\u0001F=IBITUVWMWXEH[][d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFGJHBMF\u0001=eBITUVNVZ?dª[P`d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?O?=?@?DAFMFGPIIM?=\u0001eBIRUVNMY?d]^P`d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;<?O?=BBKDAFGJJPIIBF=e\u0001BIRSJUVW?d]^P[_`a`NP``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªª[b`"], ["\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001", "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;<???BBBKDAFGJJRIIBFFeIB\u0001RSJUVW?EJ^P[¨`a`NP``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªªHb`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;<?N?BBBKDAFNJJRIIBFVeIBS\u0001STUVWXXJ^P[d`a`NP``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b+\u001f( %))$%*86+*--12C2*49@7<;<?N?=BBKDAFNJJRIIMFV=IBST\u0001TUVWXXJ^P[d`a`NP``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©dHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFGRIIMFV=IBSTU\u0001UVWXXª[P`d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFGRHIMFV=IBSTUV\u0001VWXXª[P`d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFGRHIMFV=IBSTUVW\u0001WXXª[P`d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBSTUVWX\u0001XXª[]`d`a`ZO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBSTUVWXY\u0001Xª[]`d`a`ZO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVWXZX\u0001ª[]`d`a`ZO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?N?BBBJDAFGH[J[IGFVe^BITU[UVWXd\u0001[][_`a`©P``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªª[b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?O?BBBJDAFGH[P[IGFVe^BITU[UVWXd]\u0001][_`a`©P``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªª[b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;<?O?=BBKDAFGH[PIIGFVe^BIRU[UVW?d]^\u0001[_`a`©P``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªª[b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?N?BBBJDAFGH[J[IGFd=^BITU[UVZXd_[]\u0001_`a``P``d`cdk\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004_¨[b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNHªJHIGFd=^BITU[NVZXd_[]`\u0001`a``O``d`cdk\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004`¨¨b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNHªJHIGFd=^BITU[NVZXd_[]«a\u0001aa`O``d`cok\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004`¨¨b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b+\u001f( %))$%*86+*--12C2*49@7<;<?N?=BBJDAFNH[J[IGFd=^BITU[UVZXd_[]«ab\u0001a`P``d`cok\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004_¨[b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNHªJHIGFd=^BITU[NVZXd_[]`cca\u0001`O``docok\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004`¨¨b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`d`a`\u0001O``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?O?=?@?DAFMJJPIIM?=eeBIRSJNMY?d]^P[d`a`N\u0001``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d[bd"], ["\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001f\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001", "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"], ["\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001g\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001", "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"], ["\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001", "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"], ["\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001", "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHIMFd=eBITUVNVZXd_[]`ccajkO``do\u0001ok\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004`d¨b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`dcajkO``doo\u0001k\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`dcajkO``dool\u0001\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001", "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`dcajkO``dooln\u0001\u0001pqnnnstrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``doook\u0001q\u0001oppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001qp\u0001ppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001qpq\u0001pnsvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprp\u0001nuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`dcajkO``dooln\u0001spqnn\u0001sturwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`dcajkO``dooln\u0001sprnvt\u0001turwz|v~\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001sprpvtu\u0001urwz|v~\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv\u0001rwz|v~\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpwnuvr\u0001wx|vy}~~\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpwnuvrx\u0001xyvy}~~\u0080\u0081|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0081\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpwnuv|xy\u0001yzy}~~\u0080\u0081\u0085\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0081\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0001z~\u0080~z\u0080\u0081\u0085\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0081\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz|\u0001~\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpwnuv|xy}\u0080z\u0001}~~\u0080\u0081\u0085\u0083z|", "\u0083\u0083\u008e\u0086\u0089\u008b\u0083\u0081\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv|xy}\u0080z~\u0001~~\u0080\u0081\u0085\u0083z|", "\u0083\u0083\u008e\u0086\u0089\u008b\u0083\u0081\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv|xy}\u0080z~\u007f\u0001~\u0080\u0081\u0085\u0083z|", "\u0083\u0083\u008e\u0086\u0089\u008b\u0083\u0081\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||y}\u0080z~\u0080~\u0001\u0080\u0081\u0085\u0083z|", "\u0083\u0083\u008e\u0086\u0089\u008b\u0083\u0081\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||y}\u0080z~\u0080~\u0081\u0001\u0081\u0085\u0083z|", "\u0089\u0083\u008e\u008f\u0089\u008b\u008c\u0081\u0090\u0089\u008c\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||y}\u0080z~\u0080~\u0081\u0082\u0001\u0085\u0083z|", "\u0089\u0083\u008e\u008f\u0089\u008b\u008c\u0081\u0090\u0089\u008c\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~z\u0082\u0083\u0001\u0083\u0083\u0083", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001", "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085z~\u0080~z\u0080\u0083\u0085\u0083\u0001\u0083", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz|\u0086~\u0080~z\u0082\u0083\u0086\u0083\u0083\u0001", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u008f\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~\u0081\u008e\u0083\u0087\u0083\u0083\u0083", "\u0001\u0083\u0087\u0086\u0089\u008b\u0083\u0087\u0090\u0089\u008c\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~z\u0082\u0083\u0088\u0083\u0083\u0083", "\u0083\u0001\u0090\u008f\u008c\u0091\u0083\u0087\u0090\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~\u0081\u008e\u0083\u0087\u0083\u0083\u0083", "\u0089\u0090\u0001\u008f\u0089\u008b\u008c\u0089\u0090\u0089\u008c\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~z\u008e\u0083\u0088\u0083\u0083\u0083", "\u0089\u0090\u0090\u0001\u008c\u0091\u008c\u0089\u008a\u008f\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~\u0081\u008e\u0083\u0087\u0083\u0083\u0083", "\u0089\u0090\u008b\u008f\u0001\u008b\u008c\u0089\u0090\u0091\u008c\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~\u0081\u008e\u0083\u0088\u0083\u0083\u0083", "\u0089\u0090\u008b\u008f\u008c\u0001\u008c\u0089\u0090\u0091\u008c\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~\u0081\u008e\u0083\u0088\u0083\u0083\u0083", "\u0089\u0090\u008b\u008f\u008c\u008d\u0001\u0089\u0090\u0091\u008c\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||w}\u0080\u0083~\u0080~\u0081\u008e\u0081\u0087\u0083\u0083\u0083", "\u0089\u0090\u008e\u008f\u0089\u008b\u008c\u0001\u0090\u0089\u008c\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~z\u008e\u0083\u0088\u0083\u0083\u0083", "\u0089\u0090\u0090\u008f\u008c\u0091\u008c\u0089\u0001\u008f\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~z\u008e\u0083\u0088\u0083\u0083\u0083", "\u0089\u0090\u0090\u008f\u008c\u0091\u008c\u0089\u0090\u0001\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~z\u008e\u0083\u0088\u0083\u0083\u0083", "\u0089\u0090\u008b\u008f\u008c\u0091\u008c\u0089\u0090\u0091\u0001\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~z\u008e\u0083\u0088\u0083\u0083\u0083", "\u0089\u0090\u0090\u008f\u008c\u0091\u008c\u0089\u0092\u008f\u0090\u0001\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~z\u008e\u0083\u0088\u0083\u0083\u0083", "\u0089\u0090\u0090\u008f\u008c\u0091\u008c\u0089\u0092\u008f\u0090\u0093\u0001\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~\u0081\u008e\u0083\u0087\u0083\u0083\u0083", "\u0089\u0090\u0094\u008f\u0089\u008b\u008c\u0089\u0090\u0089\u008c\u008f\u0092\u0001\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~\u0081\u008e\u0083\u0087\u0083\u0083\u0083", "\u0089\u0090\u0094\u008f\u0089\u008b\u008c\u0089\u0090\u0089\u008c\u008f\u0092\u0095\u0001\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprpvtuv||wz\u0085\u0083~\u0080~\u0081\u008e\u0083\u0087\u0083\u0083\u0083", "\u0089\u0090\u0094\u008f\u0089\u008b\u008c\u0089\u0090\u0089\u008c\u008f\u0092\u0095\u0096\u0001r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprp\u0097nuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095\u0001\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHBMFd=eBITUVNVZXdª[]`ccajkO``dooon\u0001rprp\u0097nuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095\u0098\u0001]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©d©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?O?BBBJDAFGH[P[IGFVe^BITU[UVWXd]\u0099][_`a`©P``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097\u0001_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªª[b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?N?BBBJDAFGH[J[IGFd=^BITU[UVZXd_[]\u009a_`a``P``d`cdk\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]\u0001\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004_¨[b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?N?BBBJDAFGH[J[IGFd=^BITU[UVZXd_[]\u009a_`a``P``d`cdk\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]\u009b\u0001\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004_¨[b`"], ["\u0003\u009c\u0003\u0007\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0001\u009c\u009c\u0002¢ \u009e¤¢¢¥\u0004ªdHbd"], ["\u0003\u009c\u0003\u0007\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009d\u0001\u009c\u0002¢ \u009d¤¢¢¥¦ªdHbd"], ["\u0003\u009c\u0003\u0007\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009e\u009c\u0001\u0002¢ \u009e¤¢¢¥¦ªdHbd"], ["\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001", "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"], ["\u0003\u009c§\u0004\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009e¢¢\u0002\u0001  ¡¢¢¥¦ªdHbd"], ["\u0003\u009c§\u0004\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009e¢¢\u0002¡\u0001 ¡£¢¥¦ªdHbd"], ["\u0003\u009c§\u0004\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009e¢¢\u0002¢ \u0001¤¢¢¥¦ªdHbd"], ["\u0003\u009c§\u0004\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009e¢¢\u0002¡£¤\u0001£¢¥¦ªdHbd"], ["\u0003\u009c§\u0004\u0003\u0006\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009e¢¢\u0002¢£¤¤\u0001¢¥¦ªdHbd"], ["\u0003\u009c§\u0004\u0003\u0005\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009e¢¢\u0002¢ ¥¤¢\u0001¥¦ªdHbd"], ["\u0003\u0004§\u0004\u0003\u0005\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u009e¢¢\u0002¢ ¥¤¢¦\u0001¦ªdHbd"], ["\u0003\u0004§\u0004\u0003\u0005\u0002\u0008\u0009\u000b\u0002\u000e\u000f\u0008\u0006\u0006\u0016\u0012\u0015\u0012\u0017\u0018\u0019\u0018\u001b\u001e\u0017 \u001b  %& #!*+\u0019\u0019*--/23)*\u001a+6*69:9?<<7@@2A;MLGKBBB?==IBITUVWMY?EH[P[d`a`NO``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003¢¢\u0002¢ ¥¤¢¦§\u0001ªdHbd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?N?=BBJDAFGHªJHIGFd=^BITU[UVZXdª[]¨¨`a`©O``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004\u0001¨¨b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--12C2*49@7<;<?N?=?BJDAFNHªJHIGFd=^BITU[NVZXdª[]¨¨`a`©O``d`odk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004©\u0001©bd"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?N?BBBJDAFGHªJHIGFd=^BITU[UVZXdª[][¨`a`©P``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004ªª\u0001b`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+5\u0019 \u001c\u001b*\u001f( %))$%*86+*--12C2*47@7<;E?N?BBBJDAFGH[J[IGFd=^BITU[UVZXd_[]«_b«a`P``d`cdk\u0001qjoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004_¨[\u0001`"], ["\u000e\u0006\u0003\u0007\u0012\u0006\u0009\u0010\u000c\u0015\u000f\u0010\u0012\u0015\u0017\u0017\u0019\u0016\u0014\u0018\u0019+\u0019\u0019 \u001c\u001b+\u001f( %))$%*86+*--/2C)*49@7<;<?N?=?@?DAFNFªJHIMFd=^BITUVNVZXd_[]`¬`a`¬O``d`cdk\u0001qkoppnuvrrwx|vy\u0080~z\u0080\u0083|\u0083z|", "\u0083\u0083\u0087\u0086\u0089\u008d\u0083\u0087\u008a\u0088\u0090\u008f\u0092\u0089\u0094\u0095r\u0097]_\u009a\u0003\u009c\u009c\u0002\u0002 \u009e¡¢¢§\u0004`d¨b\u0001"]]
    compressBakeResult = []
    for compressBakeNodeLoop in range(0, len(compressedNodes), true):
        compressCurrentNodeArray = []
        for compressBakeStringLoop in range(0, len(compressedNodes[compressBakeNodeLoop]), true):
            compressMapper = []
            compressMapper[strLen(compressedNodes[compressBakeNodeLoop][compressBakeStringLoop]) - true] = null
            compressCurrentNodeArray.append([compressBakeMatcher.strIndex(compressedNodes[compressBakeNodeLoop][compressBakeStringLoop].substring(i, 1)) for _, i in compressMapper])
            wait(false)
        compressBakeResult[compressBakeNodeLoop] = compressCurrentNodeArray
    _extendedGlobalCollection[true] = _classIndexes.index(null)
    _classIndexes[_extendedGlobalCollection[true]] = 2
    _objectVariable_1[_extendedGlobalCollection[true]] = map
    _objectVariable_0[_extendedGlobalCollection[true]] = compressBakeResult
    bake = _extendedGlobalCollection[true]
    pathmapReference = _objectVariable_1[bake]
    all_nodes = _objectVariable_0[_objectVariable_1[bake]]
    lol2 = _objectVariable_0[bake]
    lol3 = _objectVariable_0[pathmapReference]
    lol4 = _objectVariable_2[pathmapReference]
    wait(0.1)
    _classIndexes = []
    _extendedGlobalCollection = vect(9999, 9999, false)
    _tempNodes = null
    _tempSegments = null
    _tempAttributes = null
    map = null
    compressBakeMatcher = vect(9999, -9999, false)
    compressedNodes = null
    compressBakeResult = null
    compressCurrentNodeArray = null
    compressBakeNodeLoop = null
    compressBakeStringLoop = null
    compressMapper = null
    _objectVariable_0 = null
    _objectVariable_1 = null
    _objectVariable_2 = null
    objective_pos = _extendedGlobalCollection
    skip_cutscene_pos = _extendedGlobalCollection


rule "Pathfinder: Resolve Next":
    @Event eachPlayer
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.start_pathfind == true

    eventPlayer.destination = eventPlayer.zomnic_dest if eventPlayer.zomnic == 1 else vect(111, 11.15, -5.36) if eventPlayer.piss_ending else eventPlayer.target.getPosition()
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer.getPosition(), eventPlayer.destination if eventPlayer.pathfinderCurrent == -1 else lol3[eventPlayer.pathfinderCurrent]), 1, Relativity.TO_WORLD)
    eventPlayer.parentArray = lol2[all_nodes.index((sorted(all_nodes, lambda player: (distance(player, eventPlayer.destination) + (1000 * (verticalAngleOfDirection(directionTowards(player, eventPlayer.destination)) < -50))) + (1000 * (not isInLoS(player, eventPlayer.destination + Vector.UP)))))[0])]
    eventPlayer.pathfinderCurrent = lol3.index((sorted(lol3, lambda player: (distance(eventPlayer.getPosition(), player) + distance(eventPlayer.target.getPosition(), player) + (1000 * (verticalAngleOfDirection(directionTowards(eventPlayer.getPosition(), player)) < -50))) + (1000 * (not isInLoS(eventPlayer.getEyePosition(), player + Vector.UP)))))[0])
    while eventPlayer.isAlive() and eventPlayer.start_pathfind:
        if distance(eventPlayer.getPosition(), lol3[eventPlayer.pathfinderCurrent]) <= 0.4:
            wait(wait)
            if not eventPlayer.zomnic:
                eventPlayer.destination = eventPlayer.zomnic_dest if eventPlayer.zomnic == 1 else vect(111, 11.15, -5.36) if eventPlayer.piss_ending else eventPlayer.target.getPosition()
                eventPlayer.parentArray = lol2[all_nodes.index((sorted(all_nodes, lambda player: (distance(player, eventPlayer.destination) + (1000 * (verticalAngleOfDirection(directionTowards(player, eventPlayer.destination)) < -50))) + (1000 * (not isInLoS(player, eventPlayer.destination + Vector.UP)))))[0])]
            eventPlayer.pathfinderCurrent = eventPlayer.parentArray[eventPlayer.pathfinderCurrent] - true
        wait(wait)


rule "bot target":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.ana_target_friends == false
    @Condition roar == false
    @Condition eventPlayer.hex == false

    eventPlayer.target = (sorted([player for player in getPlayers(Team.2) if (not player.isDummy() or player.zomnic and not eventPlayer.boss_ID and eventPlayer.enemy_ID != 10) and not player.is_downed], lambda i: (distance(eventPlayer, i) + (1000 * (not isInLoS(eventPlayer.getEyePosition(), i.getEyePosition())))) + (1000 * (verticalAngleOfDirection(directionTowards(eventPlayer, i)) < -50))))[0]
    wait(5, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "bot pathfind too high/out of los":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.pre_init == false
    @Condition eventPlayer.avoid_enviro == false

    if not eventPlayer.start_pathfind:
        if not isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()) or verticalAngleOfDirection(directionTowards(eventPlayer, eventPlayer.target)) < -50:
            eventPlayer.start_pathfind = true
    if eventPlayer.start_pathfind:
        if verticalAngleOfDirection(directionTowards(eventPlayer, eventPlayer.target)) > -30:
            if distance(eventPlayer, eventPlayer.target) < 25:
                if isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()):
                    eventPlayer.start_pathfind = false
    wait(2)
    if ruleCondition:
        loop()
    eventPlayer.start_pathfind = false


rule "narrator vocalisation":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.isDummy() == false
    @Condition vocalisation == true
    @Condition main_speaker in [Hero.REINHARDT, Hero.SOMBRA] == true

    if main_speaker == Hero.REINHARDT:
        while vocalisation:
            playEffect(eventPlayer, DynamicEffect.DVA_MICRO_MISSILES_EXPLOSION_SOUND, Color.WHITE, worldVector(vect(false, true, 2), last_player_to_die, Transform.ROTATION_AND_TRANSLATION) if defeat else eventPlayer.getEyePosition() + eventPlayer.getFacingDirection(), 200 if defeat else 75)
            wait(0.05 if defeat else 0.1)
    else:
        createEffect(eventPlayer, Effect.SOMBRA_HACKING_SOUND, Team.1, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection(), 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.sombra_sound = getLastCreatedEntity()
        waitUntil(not vocalisation, 99999)
        destroyEffect(eventPlayer.sombra_sound)


def main_dialogue():
    @Name "main dialogue subr"

    line_number = null
    for i_vocal in range(0, len(active_dialogue_list), true):
        main_speaker = active_dialogue_list[line_number][0]
        if not phase in [20]:
            dialogue_bot.startForcingHero(Hero.ANA if ana_spawn_fix else main_speaker)
        vocalisation = true
        main_dialogue = active_dialogue_list[line_number][true]
        letter_scroll = null
        for i2_vocal in range(0, strLen(main_dialogue), true):
            waitUntil(is_dialoguing, 0.018 if defeat else 0.035)
            letter_scroll++
            if main_dialogue.substring(letter_scroll - true, 2) in [", ", ". ", "? ", "! ", "- "]:
                vocalisation = false
                waitUntil(is_dialoguing, (0.25 if main_dialogue.charAt(letter_scroll - true) in [",", "-"] else 0.5) * (0.5 if defeat else 1))
                vocalisation = true
            if not letter_scroll % 3:
                if main_speaker != Hero.REINHARDT:
                    if phase == 20 and main_speaker == Hero.JUNKRAT:
                        playEffect(getAllPlayers(), DynamicEffect.JUNKRAT_FRAG_LAUNCHER_EXPLOSION_SOUND, Team.2, junkrat.getEyePosition(), 75)
                    elif getNumberOfHeroes(main_speaker, Team.ALL) > true:
                        dialogue_bot.setStatusEffect(null, Status.HACKED, 0.001)
            if is_dialoguing:
                break
        vocalisation = false
        waitUntil(is_dialoguing, active_dialogue_list[line_number][2] * 0.5 * subtitle_speed)
        if is_dialoguing:
            break
        line_number++
    main_dialogue = null


rule "has status":
    @Event eachPlayer
    @Condition (eventPlayer.hasStatus(Status.STUNNED) or eventPlayer.hasStatus(Status.KNOCKED_DOWN) or eventPlayer.hasStatus(Status.ASLEEP) or eventPlayer.hasStatus(Status.FROZEN) and (not eventPlayer.boss_ID) == 1) == true

    eventPlayer.has_status = true
    while eventPlayer.hasStatus(Status.STUNNED) or eventPlayer.hasStatus(Status.KNOCKED_DOWN) or eventPlayer.hasStatus(Status.ASLEEP) or eventPlayer.hasStatus(Status.FROZEN):
        wait(0.1)
    eventPlayer.has_status = false


rule "healthpack clear status":
    @Event playerReceivedHealing
    @Condition eventWasHealthPack == true

    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.poisoned = false


rule "phased out/immort clear status":
    @Event eachPlayer
    @Team 2
    @Condition (eventPlayer.hasStatus(Status.PHASED_OUT) or eventPlayer.hasStatus(Status.INVINCIBLE)) == true
    @Condition (eventPlayer.hasStatus(Status.BURNING) or eventPlayer.poisoned) == true

    if eventPlayer.isDummy():
        return
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.poisoned = false


rule "took knockback":
    @Event playerReceivedKnockback

    eventPlayer.took_knockback = 1
    chaseAtRate(eventPlayer.took_knockback, false, true, ChaseRateReeval.NONE)


def pond():
    @Name "pond"

    eventPlayer.applyImpulse(Vector.UP, 7 if eventPlayer.getHero() == Hero.ZENYATTA else 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    if eventPlayer.getThrottle() == vect(false, false, false) and eventPlayer.getSpeed() > 0.5 and not eventPlayer.took_knockback:
        eventPlayer.applyImpulse(Vector.FORWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(Vector.BACKWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(Vector.LEFT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(Vector.RIGHT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    elif eventPlayer.getThrottle() != vect(false, false, false) and not eventPlayer.took_knockback:
        eventPlayer.applyImpulse(crossProduct(worldVector(eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION), Vector.UP), 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(crossProduct(worldVector(eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION), Vector.DOWN), 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(worldVector(eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION), 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(false)
    if eventPlayer.isHoldingButton(Button.JUMP) or eventPlayer.bot_jump:
        eventPlayer.applyImpulse(Vector.UP, 6, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    if ruleCondition:
        loop()
    if eventPlayer.zomnic == 1:
        pathfind_init()


rule "pond bounds 1":
    @Event eachPlayer
    @Condition phase > 8
    @Condition eventPlayer.getPosition().x > 63
    @Condition eventPlayer.getPosition().x < 84
    @Condition eventPlayer.getPosition().y < 11.7
    @Condition eventPlayer.getPosition().y > 10
    @Condition eventPlayer.getPosition().z > -94
    @Condition eventPlayer.getPosition().z < -74

    pond()


rule "pond bounds 2":
    @Event eachPlayer
    @Condition phase > 8
    @Condition eventPlayer.getPosition().x > 83
    @Condition eventPlayer.getPosition().x < 104
    @Condition eventPlayer.getPosition().y < 9.2
    @Condition eventPlayer.getPosition().y > 8
    @Condition eventPlayer.getPosition().z > -100
    @Condition eventPlayer.getPosition().z < -78.5

    pond()


rule "bot stuck":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.getThrottle() != vect(false, false, false)
    @Condition eventPlayer.getSpeedInDirection(worldVector(eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION)) < 3

    if eventPlayer.no_jump:
        return
    wait(0.25)
    eventPlayer.forceButtonPress(Button.JUMP)
    eventPlayer.applyImpulse(Vector.UP, 7, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.bot_jump = true
    wait(1.5)
    if ruleCondition:
        loop()
    eventPlayer.bot_jump = false


rule "bot stuck too long":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isDummy() == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.getThrottle() != vect(false, false, false)
    @Condition eventPlayer.getSpeedInDirection(worldVector(eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION)) < 3

    wait(1.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.start_pathfind = false
    wait(wait * 3)
    eventPlayer.start_pathfind = true


rule "spawn doors":
    spawn_doors = [vect(-12.054, 2.313, -6.509), vect(-25.135, 2.279, -0.134), vect(-0.763, 7.237, 0.767)]
    for i_vocal in range(0, len(spawn_doors), true):
        createInWorldText([player for player in getAllPlayers() if not phase or player.egg], "Ø", spawn_doors[evalOnce(i_vocal)] + Vector.DOWN * 0.7, 4, Clip.SURFACES, WorldTextReeval.VISIBILITY, Color.RED)
        spawn_door_effects.append(getLastCreatedText())


rule "player downed":
    @Event playerDied
    @Team 2
    @Condition eventPlayer.is_downed == false
    @Condition eventPlayer.isDead() == true
    @Condition eventPlayer.isDummy() == false

    if phase > 13:
        if phase < 23:
            if eventPlayer.getPosition().y < 8:
                eventPlayer.teleport(vect(77.842, 13.935, -98.146))
                wait(false)
    eventPlayer.killer = attacker
    if eventPlayer.potions[8] - eventPlayer.extra_lives_used > false:
        if eventWasEnvironment:
            eventPlayer.teleport(nearestWalkablePosition(eventPlayer) + directionFromAngles(horizontalAngleOfDirection(directionTowards(eventPlayer, nearestWalkablePosition(eventPlayer))), -10) * 2)
            wait(false)
        eventPlayer.resurrect()
        eventPlayer.setStatusEffect(null, Status.PHASED_OUT, true)
        playEffect(getAllPlayers(), DynamicEffect.PHARAH_CONCUSSIVE_BLAST, Team.2, eventPlayer.getEyePosition(), 1)
        playEffect(getAllPlayers(), DynamicEffect.MOIRA_FADE_DISAPPEAR_SOUND, Team.1, eventPlayer.getEyePosition(), 200)
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATING_MATERIAL, Team.2, eventPlayer, 1)
        playEffect(getAllPlayers(), DynamicEffect.SIGMA_ACCRETION_IMPACT_SOUND, Team.1, eventPlayer.getEyePosition(), 200)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.VIOLET, eventPlayer.getEyePosition(), 30)
        if eventPlayer.getHero() == Hero.ROADHOG:
            if 1 in eventPlayer.scrolls_equip:
                eventPlayer.nano = 10
        eventPlayer.extra_lives_used++
        _tempAttributes = eventPlayer
    else:
        if (len([player for player in getLivingPlayers(Team.2) if not player.isDummy() and not player.is_downed])) > false:
            eventPlayer.pos_cache = nearestWalkablePosition(eventPlayer) + directionFromAngles(horizontalAngleOfDirection(directionTowards(eventPlayer, nearestWalkablePosition(eventPlayer))), -10) * 2
            if eventWasEnvironment:
                eventPlayer.resurrect()
                eventPlayer.teleport(eventPlayer.pos_cache)
                wait(0.1)
                kill(eventPlayer)
            eventPlayer.is_downed = true
            eventPlayer.death_timer = 40
            chaseAtRate(eventPlayer.death_timer, false, true)
            eventPlayer.revive_timer = 8
            stopChasingVariable(eventPlayer.revive_timer)
            playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
            _tempNodes = eventPlayer
        else:
            playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
            last_player_to_die = eventPlayer


rule "player reviving":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_downed == true

    waitUntil(eventPlayer.rezzing_players != [], 99999)
    chaseAtRate(eventPlayer.revive_timer, false, (0.666 + 0.333 * len(eventPlayer.rezzing_players)) * (2 if eventPlayer.getHero() == Hero.ROADHOG and 1 in eventPlayer.scrolls_equip else 1))
    wait(0.1)
    waitUntil(eventPlayer.rezzing_players == [] or eventPlayer.revive_timer == 8, 99999)
    chaseAtRate(eventPlayer.revive_timer, 8, true)
    wait(false)
    if ruleCondition:
        loop()


rule "player reviving 2":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_downed == true

    eventPlayer.rezzing_players = [player for player in getLivingPlayers(Team.2) if not player.isDummy() and not player.is_downed and isInLoS(eventPlayer.getEyePosition(), player.getEyePosition()) and distance(eventPlayer, player) < 5]
    wait(wait)
    if ruleCondition:
        loop()


rule "player pause death timer":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.zomnic == false
    @Condition eventPlayer.revive_timer < 8

    stopChasingVariable(eventPlayer.death_timer)
    waitUntil(eventPlayer.revive_timer == 8 or not eventPlayer.is_downed, 100)
    chaseAtRate(eventPlayer.death_timer, false, true)


rule "player revive success":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_downed == true
    @Condition eventPlayer.revive_timer == false

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.resurrect()


rule "player alive again":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_downed == true
    @Condition eventPlayer.isAlive() == true

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.is_downed = false
    playEffect(getAllPlayers(), DynamicEffect.DEBUFF_IMPACT_SOUND, Team.2, eventPlayer, 200)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.YELLOW, eventPlayer, 1)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, true)
    stopChasingVariable(eventPlayer.death_timer)
    stopChasingVariable(eventPlayer.revive_timer)
    if difficulty == -1:
        eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 99999)
    if eventPlayer.getHero() == Hero.ROADHOG:
        if 1 in eventPlayer.scrolls_equip:
            eventPlayer.nano = 10
    _tempSegments = eventPlayer


rule "do\ufeffwned dialogue":
    @Condition _tempNodes != null

    if not _tempNodes in getPlayers(Team.2):
        return
    if dialogue_priority > false:
        return
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    if phase == 5 and _tempNodes.killer.boss_ID > false:
        if _tempNodes.getHero() == Hero.MERCY:
            active_dialogue_list = [[Hero.REINHARDT, "The Swordsman dispatched the Witch, and in doing so, his mind became clearer.", 1.5]]
        elif _tempNodes.getHero() == Hero.JUNKRAT:
            active_dialogue_list = [[Hero.REINHARDT, "The Swordsman cut Dr.\u200b Junkenstein to the ground, silencing him for the moment.", 1.5]]
        elif _tempNodes.getHero() == Hero.ROADHOG:
            active_dialogue_list = [[Hero.REINHARDT, "The Swordsman dispatched the hulking behemoth with ease, his attention turning to the next target.", 1.5]]
        elif _tempNodes.getHero() == Hero.REAPER:
            active_dialogue_list = [[Hero.REINHARDT, "The Swordsman banished the Reaper, who disappeared into the night.", 1.5]]
    elif phase == 14 and _tempNodes.killer.boss_ID > false:
        if _tempNodes.getHero() == Hero.MERCY:
            active_dialogue_list = [[Hero.REINHARDT, "The Gunslinger felt no joy in killing a woman, even one as twisted as the Witch of the Wilds.", 1.5]]
        elif _tempNodes.getHero() == Hero.JUNKRAT:
            active_dialogue_list = [[Hero.REINHARDT, "With a well-aimed shot, the Gunslinger felled Dr.\u200b Junkenstein. But the battle still raged…", 1.5]]
        elif _tempNodes.getHero() == Hero.ROADHOG:
            active_dialogue_list = [[Hero.REINHARDT, "With a shot from his revolver, the Gunslinger dropped the monster, who fell to the ground with an earth-shaking thud.", 1.5]]
        elif _tempNodes.getHero() == Hero.REAPER:
            active_dialogue_list = [[Hero.REINHARDT, "The Gunslinger's shot found its mark, and the Reaper was destroyed.", 1.5]]
    elif phase == 20 and _tempNodes.killer.boss_ID > false:
        if _tempNodes.getHero() == Hero.MERCY:
            active_dialogue_list = [[Hero.REINHARDT, "The Alchemist proved stronger than the Witch, a victory to which she derived no small bit of satisfaction.", 1.5]]
        elif _tempNodes.getHero() == Hero.JUNKRAT:
            active_dialogue_list = [[Hero.REINHARDT, "The Alchemist killed Dr.\u200b Junkenstein, breathing a sigh of relief.", 1.5]]
        elif _tempNodes.getHero() == Hero.ROADHOG:
            active_dialogue_list = [[Hero.REINHARDT, "The Alchemist's concoctions coursed through the monster, and its body was destroyed from within.", 1.5]]
        elif _tempNodes.getHero() == Hero.REAPER:
            active_dialogue_list = [[Hero.REINHARDT, "The Alchemist slew the Reaper, feeling a moment of sadness for the man she had once known.", 1.5]]
    elif phase == 26 and _tempNodes.killer.boss_ID > false:
        if _tempNodes.getHero() == Hero.MERCY:
            active_dialogue_list = [[Hero.REINHARDT, "The Witch's magic was no match for the Lord's hammer, and she was struck down.", 1.5]]
        elif _tempNodes.getHero() == Hero.JUNKRAT:
            active_dialogue_list = [[Hero.REINHARDT, "With a mighty swing, the Lord bested his adversary, the Mad Doctor, denying him his revenge… for now.", 1.5]]
        elif _tempNodes.getHero() == Hero.ROADHOG:
            active_dialogue_list = [[Hero.REINHARDT, "Large as the monster was, the Lord's conviction was larger, and the frightening creature was bested.", 1.5]]
        elif _tempNodes.getHero() == Hero.REAPER:
            active_dialogue_list = [[Hero.REINHARDT, "The Lord made quick work of the Reaper, driving the cursed apparition back into the shadows.", 1.5]]
    else:
        if _tempNodes.getHero() == Hero.MERCY:
            active_dialogue_list = [[Hero.REINHARDT, random.choice(["The Witch was thusly defeated. But her magic was known to defy death itself.", "The magical essence in the air faded away, as the Witch crumpled to the ground, motionless.", "The Witch's power over life and death was not enough, and she suc***bed to her wounds."]), 2]]
        elif _tempNodes.getHero() == Hero.JUNKRAT:
            active_dialogue_list = [[Hero.REINHARDT, random.choice(["The mad Dr.\u200b Junkenstein had been slain. But the Witch of the Wilds was not done with him. Not in the least.", "With one last laugh, Dr.\u200b Junkenstein was silenced. But such evil has a way of returning to the world.", "Dr.\u200b Junkenstein fell, but the Lord knew that the danger had not passed."]), 2]]
        elif _tempNodes.getHero() == Hero.ROADHOG:
            active_dialogue_list = [[Hero.REINHARDT, random.choice(["With a thunderous crash, the monster fell to the ground, all semblance of life, extinguished.", "Dr.\u200b Junkenstein's creation had been slain, its eyes as lifeless as pale stone.", "The spark of life within the monster was gone, and its fearsome body became inanimate once more."]), 2]]
        elif _tempNodes.getHero() == Hero.REAPER:
            active_dialogue_list = [[Hero.REINHARDT, random.choice(["The Reaper's body faded into the darkness of the night.", "The Reaper had been felled. But the Lord felt sure that he'd return.", "Accursed smoke dissipated into harmless mist as the Reaper was dispatched."]), 2]]
    async(main_dialogue, AsyncBehavior.RESTART)
    _tempNodes = null


rule "revive dialogue":
    @Condition _tempSegments != null

    if not _tempSegments in getPlayers(Team.2):
        return
    if dialogue_priority > false:
        return
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    if _tempSegments.getHero() == Hero.MERCY:
        active_dialogue_list = [[Hero.REINHARDT, random.choice(["The Witch emerged from the night, brought back to the battle by some darker power.", "The Witch was not to be undone, and she emerged from the shadows once again.", "Not even her own death could overcome the potent magic of the Witch of the Wilds!"]), 2]]
    elif _tempSegments.getHero() == Hero.JUNKRAT:
        active_dialogue_list = [[Hero.REINHARDT, random.choice(["What was that sound on the wind? The Doctor had returned!", "Dr.\u200b Junkenstein emerged again, for his night of terror was yet to reach its conclusion.", "Alas, Dr.\u200b Junkenstein could not yet rest without his vengeance fulfilled!"]), 2]]
    elif _tempSegments.getHero() == Hero.ROADHOG:
        active_dialogue_list = [[Hero.REINHARDT, random.choice(["The ground shook and shuddered once again; the monster had returned.", "Dr.\u200b Junkenstein was not yet finished - his monster rose again!", "A looming shadow reappeared - Junkenstein's monster was alive once more!"]), 2]]
    elif _tempSegments.getHero() == Hero.REAPER:
        active_dialogue_list = [[Hero.REINHARDT, random.choice(["To the heroes' dismay, the Reaper was not so easily defeated.", "The shadows took shape, and coalesced back into the form of the Reaper.", "Out of the night, the Reaper returned."]), 2]]
    async(main_dialogue, AsyncBehavior.RESTART)
    _tempSegments = null


rule "extra life dialogue":
    @Condition _tempAttributes != null

    if not _tempAttributes in getPlayers(Team.2):
        return
    if dialogue_priority > false:
        return
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "The Merchant's concoction did not disappoint, and {0} cheated the icy grip of death.".format(t2_names_array[t2_heroes_array.index(_tempAttributes.getHero())]), 2]]
    async(main_dialogue, AsyncBehavior.RESTART)
    _tempAttributes = null


rule "final death dialogue":
    @Condition last_player_to_die != null

    getPlayers(Team.2).is_downed = false
    no_hud = true
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    defeat = true
    last_player_to_die.startFacing(last_player_to_die.getFacingDirection(), false)
    getPlayers(Team.2).startCamera(raycast(last_player_to_die.getEyePosition(), evalOnce(worldVector(vect(false, 2, 4), last_player_to_die, Transform.ROTATION_AND_TRANSLATION)), null, last_player_to_die, true).getHitPosition(), last_player_to_die.getPosition(), 30)
    setSlowMotion(20)
    dialogue_priority = 3
    wait(0.7)
    if last_player_to_die.getHero() == Hero.MERCY:
        active_dialogue_list = [[Hero.REINHARDT, "And as the Witch fell, her magic had no more power.", 0.3], [Hero.REINHARDT, "Her loyal servants remained lifeless on the ground. And as morning dawned, the castle was safe.", 0.6]]
    elif last_player_to_die.getHero() == Hero.JUNKRAT:
        active_dialogue_list = [[Hero.REINHARDT, "With one last laugh, Dr.\u200b Junkenstein's body collapsed onto the flagstones,", 0.3], [Hero.REINHARDT, "and as the last of his laughter echoed from the walls of the castle, the battle was over, and the castle had been saved.", 0.6]]
    elif last_player_to_die.getHero() == Hero.ROADHOG:
        active_dialogue_list = [[Hero.REINHARDT, "And the monster fell, just as its creator.", 0.3], [Hero.REINHARDT, "Exhausted, battered, bruised, the denizens of Adlersbrunn celebrated their victory, for tonight they were safe.", 0.6]]
    elif last_player_to_die.getHero() == Hero.REAPER:
        active_dialogue_list = [[Hero.REINHARDT, "The Reaper fell. The enchanted pumpkin where his head ought to have been, smashed against the flagstones.", 0.3], [Hero.REINHARDT, "The night was quiet, and the castle was safe.", 0.6]]
    elif last_player_to_die.getHero() == Hero.SYMMETRA:
        active_dialogue_list = [[Hero.REINHARDT, "A chill spread through the air as the Summoner's body turned to ash.", 0.3], [Hero.REINHARDT, "The first signs of the dawn crept over the horizon, and the castle was safe.", 0.6]]
    elif last_player_to_die.getHero() == Hero.REINHARDT and last_player_to_die == boss:
        active_dialogue_list = [[Hero.REINHARDT, "But alas, this story was not one of triumph. This was a story of tragedy.", 0.3], [Hero.REINHARDT, "As the once-mighty Lord of Adlersbrunn toppled over, exhaling his last breath on this mortal coil,", 0.3], [Hero.REINHARDT, "A single tear rolled down his cheek, for he knew that Brazil was inevitable." if sombra_egg == 69 else "A single tear rolled down his cheek, for he knew that Adlersbrunn was doomed.", 0.3], [Hero.REINHARDT, "Dr.\u200b Junkenstein had his revenge, and the vuvuzelas sounded throughout the night." if sombra_egg == 69 else "Tonight, Dr.\u200b Junkenstein had his revenge, and the indomitable villains celebrated.", 0.3], [Hero.REINHARDT, "Olé. Olé. Olé. Eu sou brasileiro." if sombra_egg == 69 else "This was their terrible, bitter victory.", 0.6]]
    setSlowMotion(40)
    async(main_dialogue, AsyncBehavior.RESTART)
    wait(0.1)
    waitUntil(not main_dialogue, 99999)
    if last_player_to_die.getHero() == Hero.REINHARDT and last_player_to_die == boss:
        setSlowMotion(100)
        getPlayers(Team.2).stopCamera()
        wait(true)
        is_dialoguing = true
        waitUntil(not main_dialogue, 99999)
        is_dialoguing = false
        active_dialogue_list = [[Hero.SOMBRA, "Parabéns. You've unlocked the brazil ending. Obrigado por jogar." if sombra_egg == 69 else "Congratulations. You've unlocked the {0} ending. Thank you for playing.".format("Cinematic/Dead Easy/Para-Normal/Terrifying/JUNKTASTICALLY NIGHTMARISH".split("/")[difficulty + 1]), 1], [Hero.SOMBRA, "You can check out the creator's YouTube and Discord at ''bit.ly/therister''.", 1.5], [Hero.SOMBRA, "Try replaying this gamemode to test out the other scrolls, or tackle other difficulties.", 1], [Hero.SOMBRA, "rsrsrsrsrsrsrs kkkkkkkkkkkkkkk kspoakpskopaksopaksopka" if sombra_egg == 69 else "Who knows, perhaps you might even discover some secrets...", 1.5]]
        main_dialogue()
        declareTeamVictory(Team.2)
    else:
        declareTeamVictory(Team.1)


rule "player death timer end":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_downed == true
    @Condition eventPlayer.death_timer == false

    eventPlayer.is_downed = false
    last_player_to_die = eventPlayer


rule "no hud":
    @Event eachPlayer
    @Team 2
    @Condition no_hud == true

    eventPlayer.disableHeroHud()
    waitUntil(not no_hud, 99999)
    eventPlayer.enableHeroHud()


rule "burn status":
    @Event eachPlayer
    @Condition eventPlayer.hasStatus(Status.BURNING) == true
    @Condition eventPlayer.burner != []

    damage(eventPlayer, eventPlayer.burner if eventPlayer.getTeam() == Team.1 else null, 4 if eventPlayer.getTeam() == Team.1 else 1 + difficulty)
    wait(0.2)
    if ruleCondition:
        loop()
    eventPlayer.burner = []


rule "teammate bot say hi":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.isCommunicating(Comms.HELLO) == true

    wait(0.5)
    [player for player in getPlayers(Team.2) if player.isDummy()].communicate(Comms.HELLO)


rule "late joiner":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.late_join_check == false
    @Condition phase > 0.5
    @Condition eventPlayer.isDummy() == false
    @Condition eventPlayer.hasSpawned() == true

    eventPlayer.teleport(random.choice([i for i in getPlayers(Team.2).exclude(eventPlayer) if not i.isDummy()]))
    wait(true)
    if eventPlayer.isInSpawnRoom():
        loop()
    eventPlayer.late_join_check = true
    eventPlayer.euros = euros_total
    eventPlayer.real = real_total
    eventPlayer.stopCamera()


rule "player dealt damage":
    @Event playerDealtDamage
    @Team 2

    if eventPlayer.potions[6]:
        heal(eventPlayer, null, eventDamage * eventPlayer.potions[6] * 0.05)
    if eventPlayer.potions[7]:
        eventPlayer.random = random.uniform(0, 20)
        if eventPlayer.random < eventPlayer.potions[7] and eventAbility != null:
            victim.burner.append(eventPlayer)
            victim.setStatusEffect(eventPlayer, Status.BURNING, 3)


def delete_bound_effects():
    @Name "destroy bound effects subr"

    while boundary_effects != []:
        destroyEffect(boundary_effects[0])
        del boundary_effects[false]
        wait(false)
    if phase < 10:
        for i5 in range(0, 3, true):
            createBeam(getAllPlayers(), Beam.GOOD, boundary_corners[0] + Vector.UP * 1.5 * evalOnce(i5), boundary_corners.last() + Vector.UP * 1.5 * evalOnce(i5), Color.GRAY, EffectReeval.VISIBILITY)
            wait(0.1)
        createBeam(getAllPlayers(), Beam.GOOD, vect(90.319, 20.596, -62.974), vect(88.386, 23.292, -62.407), Color.GRAY, EffectReeval.VISIBILITY)
        createBeam(getAllPlayers(), Beam.GOOD, vect(90.337, 23.292, -62.964), vect(88.386, 20.596, -62.407), Color.GRAY, EffectReeval.VISIBILITY)


rule "enter shop":
    @Event eachPlayer
    @Team 2
    @Condition shop_open == true
    @Condition eventPlayer.shop == false
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition distance(eventPlayer, merchant) <= 3

    eventPlayer.shop = 1
    eventPlayer.shop_selection = false
    createInWorldText(getAllPlayers(), "Shopping...", eventPlayer, true, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.PURPLE)
    eventPlayer.is_shopping_text_ID = getLastCreatedText()
    eventPlayer.startCamera(shop_campos[0], shop_campos.last())
    eventPlayer.disableHeroHud()
    eventPlayer.setMoveSpeed(0.001)
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.disallowButton(Button.ABILITY_2)
    eventPlayer.disallowButton(Button.ULTIMATE)
    eventPlayer.disallowButton(Button.JUMP)
    eventPlayer.disallowButton(Button.CROUCH)
    eventPlayer.disallowButton(Button.MELEE)
    eventPlayer.disallowButton(Button.RELOAD)
    if not eventPlayer.max_health:
        eventPlayer.max_health = eventPlayer.getMaxHealth()
    wait(0.1)
    eventPlayer.shop_selection = false


rule "shop select":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.shop != false
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true

    if eventPlayer.shop_selection == 69:
        if eventPlayer.shop == 1:
            eventPlayer.shop = false
        else:
            eventPlayer.shop = 1
        eventPlayer.shop_selection = null
    elif eventPlayer.shop == 1:
        if eventPlayer.shop_selection == null:
            eventPlayer.shop = 2
            eventPlayer.shop_selection = null
        elif eventPlayer.shop_selection == 1:
            eventPlayer.shop = 3
            eventPlayer.shop_selection = null
    elif eventPlayer.shop == 2:
        if eventPlayer.potions[eventPlayer.shop_selection] >= eventPlayer.potions_max[eventPlayer.shop_selection]:
            smallMessage(eventPlayer, "Out of stock!")
            playEffect(eventPlayer, DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND, Color.WHITE, shop_campos[0], 200)
        else:
            if eventPlayer.euros < potions_price[eventPlayer.shop_selection]:
                smallMessage(eventPlayer, "You cannot afford this item.")
                playEffect(eventPlayer, DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND, Color.WHITE, shop_campos[0], 200)
            else:
                eventPlayer.potions[eventPlayer.shop_selection]++
                playEffect(eventPlayer, DynamicEffect.BRIGITTE_REPAIR_PACK_IMPACT_SOUND, Color.WHITE, shop_campos[0], 200)
                playEffect(eventPlayer, DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, merchant.attack, 1)
                eventPlayer.euros -= potions_price[eventPlayer.shop_selection]
                merchant.attack.communicate(Comms.THANKS)
    elif eventPlayer.shop == 3:
        if eventPlayer.scrolls_random[eventPlayer.shop_selection] in eventPlayer.scrolls_equip:
            smallMessage(eventPlayer, "Already unlocked!")
            playEffect(eventPlayer, DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND, Color.WHITE, shop_campos[0], 200)
        else:
            if eventPlayer.real < 100:
                smallMessage(eventPlayer, "You cannot afford this scroll.")
                playEffect(eventPlayer, DynamicEffect.SOMBRA_TRANSLOCATOR_REAPPEAR_SOUND, Color.WHITE, shop_campos[0], 200)
            else:
                eventPlayer.scrolls_equip.append(eventPlayer.scrolls_random[eventPlayer.shop_selection])
                playEffect(eventPlayer, DynamicEffect.SOMBRA_LOGO_SOUND, Color.WHITE, shop_campos[0], 200)
                playEffect(eventPlayer, DynamicEffect.GOOD_PICKUP_EFFECT, Color.YELLOW, merchant.attack, 1)
                eventPlayer.real -= 100
                merchant.attack.communicate(Comms.THANKS)


rule "shop 1 selection left right":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.shop == 1
    @Condition abs(eventPlayer.getThrottle().x) > 0.5

    if eventPlayer.getThrottle().x > false:
        eventPlayer.shop_selection = (1 if eventPlayer.shop_selection == 69 else null) if eventPlayer.shop_selection else 69
    else:
        eventPlayer.shop_selection = (null if eventPlayer.shop_selection == 69 else 69) if eventPlayer.shop_selection else 1
    wait(0.2, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "shop 1 selection up do\ufeffwn":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.shop == 1
    @Condition abs(eventPlayer.getThrottle().z) > 0.5

    eventPlayer.shop_selection = 1 if eventPlayer.shop_selection == 69 else 69
    wait(0.2, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "shop 2/3 selection left right":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.shop in [2, 3] == true
    @Condition abs(eventPlayer.getThrottle().x) > 0.5

    if eventPlayer.shop == 2:
        if eventPlayer.shop_selection == 69:
            eventPlayer.shop_selection = null if eventPlayer.getThrottle().x < false else 9
        elif eventPlayer.shop_selection == 9 and eventPlayer.getThrottle().x < false or eventPlayer.shop_selection == null and eventPlayer.getThrottle().x > false:
            eventPlayer.shop_selection = 69
        else:
            if eventPlayer.getThrottle().x > false:
                eventPlayer.shop_selection += 4 if eventPlayer.shop_selection < 5 else -5
            else:
                eventPlayer.shop_selection += 5 if eventPlayer.shop_selection < 5 else -4
    else:
        if eventPlayer.shop_selection == 69:
            eventPlayer.shop_selection = null if eventPlayer.getThrottle().x < false else 5
        elif eventPlayer.shop_selection == 5 and eventPlayer.getThrottle().x < false or eventPlayer.shop_selection == null and eventPlayer.getThrottle().x > false:
            eventPlayer.shop_selection = 69
        else:
            if eventPlayer.getThrottle().x > false:
                eventPlayer.shop_selection += 2 if eventPlayer.shop_selection < 3 else -3
            else:
                eventPlayer.shop_selection += 3 if eventPlayer.shop_selection < 3 else -2
    wait(0.2, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "shop 2/3 selection up do\ufeffwn":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.shop in [2, 3] == true
    @Condition abs(eventPlayer.getThrottle().z) > 0.5

    eventPlayer.shop_selection += -1 if eventPlayer.getThrottle().z > false else 1
    if (eventPlayer.shop_selection == (10 if eventPlayer.shop == 2 else 6)) or eventPlayer.shop_selection == -1:
        eventPlayer.shop_selection = 69
    elif eventPlayer.shop_selection == 70:
        eventPlayer.shop_selection = null
    elif eventPlayer.shop_selection == 68:
        eventPlayer.shop_selection = 9 if eventPlayer.shop == 2 else 5
    wait(0.2, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "shop go back":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.shop != false
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == true

    eventPlayer.shop = null if eventPlayer.shop == 1 else 1
    eventPlayer.shop_selection = null


rule "shop quick leave":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.shop != false
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true

    eventPlayer.shop = false


rule "shop leave":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.shop == false

    eventPlayer.stopCamera()
    eventPlayer.enableHeroHud()
    eventPlayer.allowButton(Button.PRIMARY_FIRE)
    eventPlayer.allowButton(Button.SECONDARY_FIRE)
    eventPlayer.allowButton(Button.ABILITY_1)
    eventPlayer.allowButton(Button.ABILITY_2)
    eventPlayer.allowButton(Button.ULTIMATE)
    eventPlayer.allowButton(Button.JUMP)
    eventPlayer.allowButton(Button.CROUCH)
    eventPlayer.allowButton(Button.MELEE)
    eventPlayer.allowButton(Button.RELOAD)
    destroyInWorldText(eventPlayer.is_shopping_text_ID)
    eventPlayer.damage_dealt = 100 + eventPlayer.potions[0] * 5
    eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
    eventPlayer.setHealingDealt(100 + eventPlayer.potions[true] * 5)
    eventPlayer.setMaxHealth(100 + 2000 * eventPlayer.potions[2] / eventPlayer.max_health)
    eventPlayer.speed = 100 + eventPlayer.potions[3] * 5
    eventPlayer.setMoveSpeed(eventPlayer.speed)
    if eventPlayer.getHero() == Hero.MERCY:
        if 2 in eventPlayer.scrolls_equip:
            eventPlayer.disallowButton(eventPlayer.button_damageboost)
        if 4 in eventPlayer.scrolls_equip:
            eventPlayer.setAbility2Enabled(false)
    if not eventPlayer.max_ammo:
        eventPlayer.max_ammo = eventPlayer.getMaxAmmo(false)
    eventPlayer.setMaxAmmo(false, eventPlayer.max_ammo + eventPlayer.potions[4] * eventPlayer.max_ammo / 5)
    wait(false)
    eventPlayer.setHealth(99999)
    eventPlayer.setAmmo(false, eventPlayer.getMaxAmmo(false))
    if not eventPlayer.create_scroll[0]:
        if eventPlayer.getHero() == Hero.ROADHOG:
            if 2 in eventPlayer.scrolls_equip:
                createEffect(getAllPlayers() if eventPlayer.isCrouching() and eventPlayer.getHealth() > 100 else [], Effect.MERCY_DAMAGE_BOOSTED, Team.2, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                eventPlayer.create_scroll = true
        elif eventPlayer.getHero() == Hero.JUNKRAT:
            if 1 in eventPlayer.scrolls_equip:
                createEffect(getAllPlayers() if eventPlayer.getNormalizedHealth() < 0.666 and eventPlayer.isAlive() else [], Effect.WINSTON_TESLA_CANNON_TARGET, Team.2, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                createEffect(getAllPlayers() if eventPlayer.getNormalizedHealth() < 0.666 and eventPlayer.isAlive() else [], Effect.WINSTON_TESLA_CANNON_TARGET_SOUND, Team.2, eventPlayer, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                createEffect(getAllPlayers() if eventPlayer.getNormalizedHealth() < 0.666 and eventPlayer.isAlive() else [], Effect.RING, Color.WHITE, eventPlayer, 8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                createBeam(getAllPlayers() if eventPlayer.getNormalizedHealth() < 0.666 and eventPlayer.isAlive() else [], Beam.WINSTON_TESLA_CANNON, eventPlayer, (eventPlayer if getPlayersInRadius(eventPlayer, 8, Team.1, LosCheck.SURFACES) == [] else getPlayersInRadius(eventPlayer, 8, Team.1, LosCheck.SURFACES).concat(eventPlayer))[getTotalTimeElapsed() * 3 % len(getPlayersInRadius(eventPlayer, 8, Team.1, LosCheck.SURFACES))], Team.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                eventPlayer.create_scroll = true
        elif eventPlayer.getHero() == Hero.REAPER:
            if 1 in eventPlayer.scrolls_equip:
                createEffect(getAllPlayers(), Effect.ZENYATTA_ORB_OF_DISCORD_TARGET, Team.2, eventPlayer.death_mark, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                createEffect(getAllPlayers(), Effect.ZENYATTA_ORB_OF_DISCORD_TARGET_SOUND, Team.2, eventPlayer.death_mark, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                createIcon(getAllPlayers() if eventPlayer.death_mark != null else [], eventPlayer.death_mark, Icon.SKULL, IconReeval.VISIBILITY_AND_POSITION, Color.VIOLET, false)
                eventPlayer.create_scroll[false] = true
        elif eventPlayer.getHero() == Hero.MERCY:
            if 2 in eventPlayer.scrolls_equip:
                createBeam(getAllPlayers(), Beam.MOIRA_GRASP_CONNECTED, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() + worldVector(Vector.RIGHT, eventPlayer, Transform.ROTATION) * 0.1 + normalize(crossProduct(eventPlayer.getFacingDirection(), worldVector(Vector.RIGHT, eventPlayer, Transform.ROTATION))) * 0.1 if eventPlayer.is_grasping else _extendedGlobalCollection, (eventPlayer.damage_target if eventPlayer.damage_target != null else eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() + worldVector(Vector.RIGHT, eventPlayer, Transform.ROTATION) * 0.1 + normalize(crossProduct(eventPlayer.getFacingDirection(), worldVector(Vector.RIGHT, eventPlayer, Transform.ROTATION))) * 0.1) if eventPlayer.is_grasping else _extendedGlobalCollection, Team.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                createEffect(getAllPlayers(), Effect.MERCY_DAMAGE_BOOSTED_SOUND, Team.2, eventPlayer.getEyePosition() if eventPlayer.is_grasping else _extendedGlobalCollection, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                eventPlayer.create_scroll[false] = true
    if not eventPlayer.create_scroll[true]:
        if eventPlayer.getHero() == Hero.REAPER:
            if 3 in eventPlayer.scrolls_equip:
                createEffect(getAllPlayers() if eventPlayer.isUsingAbility1() else [], Effect.RING, Color.VIOLET, eventPlayer, 7, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                eventPlayer.create_scroll[true] = true
        elif eventPlayer.getHero() == Hero.MERCY:
            if null in eventPlayer.scrolls_equip:
                startHealingModification(eventPlayer, eventPlayer, 25, HealingReeval.NONE)
                eventPlayer.create_scroll[true] = true
    if not eventPlayer.create_scroll[2]:
        if eventPlayer.getHero() == Hero.REAPER:
            if 2 in eventPlayer.scrolls_equip:
                eventPlayer.scythe_swing = -1
                createBeam(getAllPlayers() if eventPlayer.isMeleeing() else [], Beam.GRAPPLE, worldVector(Vector.UP * 1.2, eventPlayer, Transform.ROTATION_AND_TRANSLATION), worldVector(Vector.UP * 1.2, eventPlayer, Transform.ROTATION_AND_TRANSLATION) + ((sinDeg(eventPlayer.scythe_angle) * eventPlayer.getFacingDirection() + cosDeg(eventPlayer.scythe_angle) * (worldVector(vect(-1, 0.3 * eventPlayer.scythe_swing, false), eventPlayer, Transform.ROTATION))) * eventPlayer.scythe_length), Team.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                createBeam(getAllPlayers() if eventPlayer.isMeleeing() else [], Beam.OMNIC_SLICER, worldVector(Vector.UP * 1.2, eventPlayer, Transform.ROTATION_AND_TRANSLATION) + ((sinDeg(eventPlayer.scythe_angle) * eventPlayer.getFacingDirection() + cosDeg(eventPlayer.scythe_angle) * (worldVector(vect(-1, 0.3 * eventPlayer.scythe_swing, false), eventPlayer, Transform.ROTATION))) * eventPlayer.scythe_length), worldVector(Vector.UP * 1.2, eventPlayer, Transform.ROTATION_AND_TRANSLATION) + (((sinDeg(eventPlayer.scythe_angle + 55)) * eventPlayer.getFacingDirection() + ((cosDeg(eventPlayer.scythe_angle + 55)) * (worldVector(vect(-1, 0.3 * eventPlayer.scythe_swing, false), eventPlayer, Transform.ROTATION)))) * eventPlayer.scythe_length), Team.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                eventPlayer.create_scroll[2] = true


rule "potion of proficiency 1":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) > false

    if eventPlayer.getHero() == Hero.ROADHOG:
        if 3 in eventPlayer.scrolls_equip:
            eventPlayer.setAbilityCooldown(Button.ABILITY_1, 12)
            wait(false)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, eventPlayer.getAbilityCooldown(Button.ABILITY_1) - eventPlayer.potions[5])


rule "potion of proficiency 2":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) > false

    eventPlayer.setAbilityCooldown(Button.ABILITY_2, eventPlayer.getAbilityCooldown(Button.ABILITY_2) - eventPlayer.potions[5])


def spawn_enemies():
    @Name "spawn enemies subr"

    wait(0.25)
    for i4 in range(0, len(enemy_ID_sequence), true):
        respawn_enemy = [player for player in getDeadPlayers(Team.1) if player.enemy_ID][0]
        if respawn_enemy.enemy_ID == 5 and enemy_ID_sequence[i4] < 20:
            respawn_enemy.safeguard_fix = true
            respawn_enemy.teleport(_extendedGlobalCollection)
            respawn_enemy.startForcingHero(Hero.BRIGITTE)
            wait(false)
            respawn_enemy.startForcingHero(Hero.TORBJORN)
            wait(false)
        respawn_enemy.respawn()
        respawn_enemy.enemy_ID = enemy_ID_sequence[i4]
        respawn_enemy.teleport(random.choice(enemy_spawn))
        respawn_enemy.safeguard_fix = false
        wait(0.3)


rule "enemy died":
    @Event playerDied
    @Team 1
    @Condition eventPlayer.boss_ID == false

    if eventPlayer == dialogue_bot or eventPlayer.boss_ID == 4.4:
        eventPlayer.resurrect()
        wait(true)
        if eventPlayer.isDead():
            loop()
    else:
        eventPlayer.nano = false
        eventPlayer.speed_boosted = false
        if attacker.getHero() == Hero.JUNKRAT:
            if 2 in attacker.scrolls_equip:
                playEffect(getAllPlayers(), DynamicEffect.SIGMA_ACCRETION_IMPACT, Team.2, eventPlayer.getEyePosition(), 1)
                damage(getPlayersInRadius(eventPlayer, 6, Team.1, LosCheck.SURFACES), attacker, 50)
                ([player for player in getPlayersInRadius(eventPlayer, 6, Team.1, LosCheck.SURFACES) if not player.hasStatus(Status.PHASED_OUT)]).electrify = 2
        if attacker in getPlayers(Team.2):
            if not first_kill:
                first_kill = true
            if not phase in [5, 6, 7, 14, 15, 16, 26]:
                if eventPlayer.enemy_ID == 8:
                    getPlayers(Team.2).euros += 100
                    euros_total += 100
                elif eventPlayer.enemy_ID == 9:
                    getPlayers(Team.2).euros += 150
                    euros_total += 150
                else:
                    getPlayers(Team.2).euros += 10
                    euros_total += 10
        if eventPlayer.enemy_ID == 10:
            eventPlayer.clearStatusEffect(Status.UNKILLABLE)
            getPlayers(Team.2).euros += 50
            euros_total += 50
        destroyEffect(eventPlayer.trail[0])
        destroyInWorldText(eventPlayer.trail[true])
        destroyEffect(eventPlayer.trail[2])
        destroyIcon(eventPlayer.trail[3])
        wait(0.03)
        if reaper.death_mark == eventPlayer:
            eventPlayer.damage_received = 130 - 15 * difficulty
            eventPlayer.setDamageReceived(eventPlayer.damage_received * (1.5 if eventPlayer.nano else 1))
            reaper.death_mark = null


rule "bot strafe":
    @Event eachPlayer
    @Team 1

    eventPlayer.strafe = true
    while true:
        eventPlayer.strafe *= -1
        wait(random.uniform(0.25, 1 if eventPlayer.boss_ID == 2 or eventPlayer.speed_boosted else 1.5))


rule "bot pause":
    @Event eachPlayer
    @Team 1

    eventPlayer.throttle_mag = true if eventPlayer.speed_boosted else not eventPlayer.throttle_mag
    wait(random.uniform(1, 3))
    loop()


rule "enemy throttle":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.enemy_ID != false
    @Condition eventPlayer.start_pathfind == false
    @Condition eventPlayer.isAlive() == true

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    if eventPlayer.enemy_ID in [2, 3, 5] or eventPlayer.enemy_ID in [21, 23, 24, 25] and eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) <= false:
        if eventPlayer.enemy_ID in [3, 23]:
            eventPlayer.startThrottleInDirection((directionTowards(eventPlayer, eventPlayer.target) * (1 if distance(eventPlayer, eventPlayer.target) > 16 else -1 if distance(eventPlayer, eventPlayer.target) < 14 else null)) + worldVector(Vector.LEFT, eventPlayer, Transform.ROTATION) * eventPlayer.strafe, eventPlayer.throttle_mag, Relativity.TO_WORLD)
        elif eventPlayer.enemy_ID in [24]:
            eventPlayer.startThrottleInDirection((directionTowards(eventPlayer, eventPlayer.target) * (1 if distance(eventPlayer, eventPlayer.target) > 8 else -1 if distance(eventPlayer, eventPlayer.target) < 6 else null)) + worldVector(Vector.LEFT, eventPlayer, Transform.ROTATION) * eventPlayer.strafe, eventPlayer.throttle_mag, Relativity.TO_WORLD)
        else:
            eventPlayer.startThrottleInDirection((directionTowards(eventPlayer, eventPlayer.target) * (1 if distance(eventPlayer, eventPlayer.target) > 10 else -1 if distance(eventPlayer, eventPlayer.target) < 8 else null)) + worldVector(Vector.LEFT, eventPlayer, Transform.ROTATION) * eventPlayer.strafe, eventPlayer.throttle_mag, Relativity.TO_WORLD)
    else:
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer, eventPlayer.target) + worldVector(Vector.LEFT, eventPlayer, Transform.ROTATION) * eventPlayer.strafe * 0.4, distance(eventPlayer, eventPlayer.target) > 2, Relativity.TO_WORLD)


rule "instant target switch":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.target.isDead() == true
    @Condition eventPlayer.isAlive() == true

    if eventPlayer.hex:
        return
    eventPlayer.target = (sorted([player for player in getPlayers(Team.2) if (not player.isDummy() or player.zomnic) and not player.is_downed], lambda i: (distance(eventPlayer, i) + (1000 * (not isInLoS(eventPlayer.getEyePosition(), i.getEyePosition())))) + (1000 * (verticalAngleOfDirection(directionTowards(eventPlayer, i)) < -50))))[0]


rule "v/instakillager start hammering":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID in [1, 7] == true
    @Condition eventPlayer.isAlive() == true

    if distance(eventPlayer, eventPlayer.target) < 2.5:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        while distance(eventPlayer, eventPlayer.target) < 3:
            wait(wait)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    wait(wait)
    if ruleCondition:
        loop()


rule "k/sp/sk/over/overoverkillager attack":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID in [2, 3, 5, 8, 9] == true
    @Condition eventPlayer.isAlive() == true

    if isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()):
        if eventPlayer.enemy_ID == 3:
            eventPlayer.real = 1.7
            chaseAtRate(eventPlayer.real, false, true, ChaseRateReeval.NONE)
            wait(1.7)
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE if eventPlayer.enemy_ID in [8] or eventPlayer.enemy_ID == 9 and distance(eventPlayer, eventPlayer.target) < 7 else Button.PRIMARY_FIRE)
        wait(random.uniform(1, 2) if eventPlayer.enemy_ID == 5 else random.uniform(1.1 if eventPlayer.enemy_ID in [8, 9] else 0.6, 1.5))
    wait(wait)
    if ruleCondition:
        loop()


rule "over/overoverkillager dead":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID in [8, 9] == true
    @Condition eventPlayer.isDead() == true

    eventPlayer.forceButtonPress(Button.INTERACT)
    wait(true)
    if ruleCondition:
        loop()


rule "grillager attack":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID == 4
    @Condition eventPlayer.grillager_activate == false
    @Condition eventPlayer.isAlive() == true

    if distance(eventPlayer, eventPlayer.target) < 10:
        if isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()):
            while not eventPlayer.isUsingAbility2():
                eventPlayer.forceButtonPress(Button.ABILITY_2)
                wait(0.25)
            eventPlayer.grillager_activate = true
    wait(wait)
    if ruleCondition:
        loop()


rule "gri/chi/chernobyllager explode":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID in [4, 6, 10] == true
    @Condition eventPlayer.grillager_activate == true
    @Condition (eventPlayer.isDead() or not eventPlayer.isUsingAbility2()) == true

    eventPlayer.grillager_victims = [player for player in (getPlayersInRadius(eventPlayer, 12 if eventPlayer.enemy_ID == 10 else 5, Team.2, LosCheck.SURFACES)) if player.isAlive() and not player.hasStatus(Status.PHASED_OUT)]
    if eventPlayer.enemy_ID == 4:
        playEffect(getAllPlayers(), DynamicEffect.ASHE_DYNAMITE_EXPLOSION, Color.ORANGE, eventPlayer.getEyePosition(), 5)
        playEffect(getAllPlayers(), DynamicEffect.ASHE_DYNAMITE_EXPLOSION_SOUND, Color.WHITE, eventPlayer.getEyePosition(), 200)
        eventPlayer.grillager_victims.burner = true
    elif eventPlayer.enemy_ID == 6:
        playEffect(getAllPlayers(), DynamicEffect.PHARAH_CONCUSSIVE_BLAST, Team.2, eventPlayer.getEyePosition(), 5)
        playEffect(getAllPlayers(), DynamicEffect.WINSTON_JUMP_PACK_LANDING, Team.2, eventPlayer.getEyePosition(), 5)
        playEffect(getAllPlayers(), DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION_SOUND, Color.WHITE, eventPlayer.getEyePosition(), 200)
    else:
        playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, Color.WHITE, eventPlayer.getEyePosition(), 200)
        playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, Color.WHITE, eventPlayer.getEyePosition(), 200)
        wait(0.1)
        playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_METEOR_STRIKE_IMPACT, Team.1, eventPlayer.getEyePosition(), 1)
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.GREEN, eventPlayer.getEyePosition(), 10)
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.GREEN, eventPlayer.getEyePosition(), 15)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.GREEN, eventPlayer.getEyePosition(), 20)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.GREEN, eventPlayer.getEyePosition(), 25)
        eventPlayer.falloff_pos = eventPlayer.getEyePosition()
        eventPlayer.falloff = 10
        createEffect(getAllPlayers(), Effect.RING, Color.GREEN, eventPlayer.falloff_pos, eventPlayer.falloff, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.falloff_effect.append(getLastCreatedEntity())
        createEffect(getAllPlayers(), Effect.BAD_AURA, Color.GREEN, eventPlayer.falloff_pos, eventPlayer.falloff, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.falloff_effect.append(getLastCreatedEntity())
    for eventPlayer.i in range(0, len(eventPlayer.grillager_victims), true):
        damage(eventPlayer.grillager_victims[evalOnce(eventPlayer.i)], null, 125 * (16 - distance(eventPlayer, eventPlayer.grillager_victims[evalOnce(eventPlayer.i)])) if eventPlayer.enemy_ID == 10 else ((40 + 15 * difficulty) / 5) * (6 - distance(eventPlayer, eventPlayer.grillager_victims[evalOnce(eventPlayer.i)])))
        if eventPlayer.enemy_ID == 4:
            eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].setStatusEffect(null, Status.BURNING, 3.5)
        elif eventPlayer.enemy_ID == 6:
            eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].setStatusEffect(null, Status.FROZEN, 3)
        eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].applyImpulse(directionTowards(eventPlayer, eventPlayer.grillager_victims[evalOnce(eventPlayer.i)]) + Vector.UP * 0.7, 20 if eventPlayer.enemy_ID == 10 else 14, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].took_knockback = 1
        chaseAtRate(eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].took_knockback, false, true)
    wait(0.05 * eventPlayer.isDead())
    eventPlayer.teleport(compressBakeMatcher)
    eventPlayer.grillager_activate = false


rule "chi/chernobyllager explode":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID in [6, 10] == true
    @Condition eventPlayer.grillager_activate == false

    if (eventPlayer.getHealth() <= true and eventPlayer.isAlive() if eventPlayer.enemy_ID == 10 else eventPlayer.isDead()) or distance(eventPlayer, eventPlayer.target) < 3 and not eventPlayer.has_status:
        if eventPlayer.enemy_ID == 10:
            eventPlayer.forceButtonPress(Button.ULTIMATE)
            eventPlayer.stopThrottleInDirection()
            wait(1.5)
        eventPlayer.grillager_activate = true
    wait(wait)
    if ruleCondition:
        loop()


rule "chernobyllager falloff":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.falloff >= 10

    for eventPlayer.i2 in range(0, 40, true):
        getPlayersInRadius(eventPlayer.falloff_pos, eventPlayer.falloff, Team.2, LosCheck.SURFACES).poisoned = 5
        wait(0.2)
    chaseAtRate(eventPlayer.falloff, false, 10, ChaseRateReeval.NONE)
    wait(true)
    stopChasingVariable(eventPlayer.falloff)
    while eventPlayer.falloff_effect != []:
        destroyEffect(eventPlayer.falloff_effect[0])
        del eventPlayer.falloff_effect[false]


rule "instakillager hello":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID == 7

    eventPlayer.communicate(Comms.HELLO)
    wait(true)
    if ruleCondition:
        loop()


rule "spillager always ult":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID == 5
    @Condition eventPlayer.isUsingUltimate() == false
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.safeguard_fix == false

    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.1, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "overkillager turret deploy":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID in [8, 9] == true

    wait(random.uniform(4, 8))
    if not ruleCondition:
        return
    if eventPlayer.enemy_ID == 9:
        eventPlayer.random = random.randint(not eventPlayer.random, 2)
        if eventPlayer.random:
            eventPlayer.setProjectileGravity(1000000)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(true)
        else:
            eventPlayer.setProjectileGravity(15)
            while not eventPlayer.isUsingUltimate():
                eventPlayer.setUltCharge(100)
                eventPlayer.forceButtonPress(Button.ULTIMATE)
                wait(false)
        while eventPlayer.isUsingUltimate():
            eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
            wait(0.2)
    else:
        eventPlayer.setProjectileGravity(1000000)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        wait(true)
    eventPlayer.setProjectileGravity(100)
    if ruleCondition:
        loop()


rule "overkillager no hooking":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.enemy_ID in [8, 9] == true
    @Condition eventPlayer.has_status == true

    eventPlayer.startForcingPosition(eventPlayer.getPosition(), false)
    waitUntil(not eventPlayer.has_status, 99999)
    eventPlayer.stopForcingPosition()


rule "(royal/life) guard attack (shielded)":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.enemy_ID in [21, 23, 25] == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    if isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()):
        eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(random.uniform(3, 6) if eventPlayer.enemy_ID in [23] else random.uniform(1.5, 2.5))
    if ruleCondition:
        loop()


rule "brig shield":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.enemy_ID in [21, 23, 25] == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) == false

    if isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()):
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
        while isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()):
            wait(wait)
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    wait(wait)
    if ruleCondition:
        loop()


rule "brig no shield":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.enemy_ID in [24] == false
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) > false

    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 10 if eventPlayer.enemy_ID == 25 else 10000)
    if eventPlayer.enemy_ID in [21, 23, 25]:
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer, eventPlayer.target), distance(eventPlayer, eventPlayer.target) > 2, Relativity.TO_WORLD)


rule "guard attack unshielded":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.isAlive() == true
    @Condition (eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) or eventPlayer.enemy_ID in [22, 26]) == true

    if distance(eventPlayer, eventPlayer.target) < 5:
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(0.6)
    if ruleCondition:
        loop()


rule "van/safeguard dash":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.enemy_ID in [22, 24, 26] == true
    @Condition eventPlayer.start_pathfind == false

    wait(random.uniform(2.5, 4))
    __skipIf__(eventPlayer.enemy_ID == 24, true)
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    __skipIf__(eventPlayer.enemy_ID == 24 and not eventPlayer.isFiringSecondaryFire(), true)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    __loopIfConditionIsTrue__()


rule "dashed":
    @Event playerTookDamage
    @Team 2
    @Condition attacker.enemy_ID in [22, 24, 25] == true
    @Condition attacker.isFiringSecondaryFire() == true

    damage(eventPlayer, null, 0.8 * attacker.damage_dealt * (1.5 if attacker.nano else 1))


rule "overoverkillager damage buff":
    @Event playerTookDamage
    @Team 2
    @Condition attacker.enemy_ID == 9
    @Condition eventAbility == Button.SECONDARY_FIRE

    damage(eventPlayer, attacker, eventDamage * 0.5)


rule "lifeguard heal":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.enemy_ID == 23

    wait(random.uniform(1, 2))
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), sorted([i for i in getLivingPlayers(Team.1).exclude([eventPlayer, dialogue_bot]) if isInLoS(eventPlayer.getEyePosition(), i.getEyePosition())], lambda i: i.getNormalizedHealth()).concat(eventPlayer.target)[0].getEyePosition()), 1000)
    wait(0.1)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.1)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), 1000)
    if ruleCondition:
        loop()


rule "safeguard respawn shield":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.enemy_ID == 24
    @Condition eventPlayer.has_status == false
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.isFiringSecondaryFire() == false

    wait(true, Wait.ABORT_WHEN_FALSE)
    eventPlayer.safeguard_fix = true
    eventPlayer.max_health = eventPlayer.getHealth()
    eventPlayer.boss_target_location = eventPlayer.getPosition()
    wait(false)
    eventPlayer.startForcingHero(Hero.TORBJORN)
    wait(false)
    eventPlayer.startForcingHero(Hero.BRIGITTE)
    wait(false)
    eventPlayer.setHealth(eventPlayer.max_health)
    eventPlayer.teleport(eventPlayer.boss_target_location)
    wait(true)
    eventPlayer.safeguard_fix = false


rule "royal guard rally":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.enemy_ID == 25
    @Condition eventPlayer.isUsingUltimate() == false

    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.1)
    if ruleCondition:
        loop()


rule "royal guard dash":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.enemy_ID == 25
    @Condition eventPlayer.isFiringSecondaryFire() == true
    @Condition eventPlayer.isAlive() == true

    if distance(eventPlayer, eventPlayer.target) < 5:
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(random.uniform(2, 3))
    if ruleCondition:
        loop()


rule "bitter guard aura":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.enemy_ID == 26
    @Condition eventPlayer.isAlive() == true

    getPlayersInRadius(eventPlayer, 8, Team.2, LosCheck.SURFACES).poisoned = 2
    wait(0.2)
    if ruleCondition:
        loop()


rule "boss pet status mimic":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer != boss
    @Condition eventPlayer.boss_ID > false
    @Condition boss.has_status == true

    if boss.attack == 4.1:
        return
    eventPlayer.setStatusEffect(null, Status.HACKED, 10)
    waitUntil(not boss.has_status, 10)
    eventPlayer.clearStatusEffect(Status.HACKED)


rule "boss pet destroy":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer in boss.boss_pet == true
    @Condition boss.isDead() == true

    destroyDummy(Team.1, eventPlayer.getSlot())


rule "boss zoom in":
    @Event eachPlayer
    @Team 2
    @Condition boss.pre_init == true
    @Condition eventPlayer.isDummy() == false
    @Condition boss.boss_ID in [0.1, 1, 2, 3, 4] == true

    if boss.boss_ID == 4:
        wait(0.6)
    boss_zoomin()


rule "boss throttle":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.boss_ID in [1, 4] == true
    @Condition eventPlayer.pre_init == false
    @Condition eventPlayer.start_pathfind == false
    @Condition eventPlayer.avoid_enviro == false
    @Condition eventPlayer.attack == false

    if eventPlayer.boss_ID == 1:
        eventPlayer.startThrottleInDirection((directionTowards(eventPlayer, eventPlayer.target) * (1 if distance(eventPlayer, eventPlayer.target) > 10 else -1 if distance(eventPlayer, eventPlayer.target) < 8 else null)) + worldVector(Vector.LEFT, eventPlayer, Transform.ROTATION) * eventPlayer.strafe, 1, Relativity.TO_WORLD)
    elif eventPlayer.boss_ID == 4:
        eventPlayer.startThrottleInDirection(directionTowards(eventPlayer, eventPlayer.target), (distance(eventPlayer, eventPlayer.target) > 2) * eventPlayer.rein_throttle_mag, Relativity.TO_WORLD)


rule "genji init":
    @Event eachPlayer
    @Team 1
    @Hero genji
    @Condition phase == 5
    @Condition eventPlayer.boss_ID == 1

    eventPlayer.pre_init = false
    eventPlayer.turn_rate = 1000
    eventPlayer.setMoveSpeed(70)
    eventPlayer.damage_dealt = 30 + 10 * difficulty
    eventPlayer.damage_received = 130 - 15 * difficulty
    eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
    eventPlayer.setDamageReceived(eventPlayer.damage_received)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), eventPlayer.turn_rate)
    createDummy(Hero.REINHARDT, Team.1, -1, eventPlayer.getPosition(), eventPlayer.getFacingDirection())
    getLastCreatedEntity().boss_ID = 1.2
    eventPlayer.boss_pet = getLastCreatedEntity()
    createDummy(Hero.GENJI, Team.1, -1, _extendedGlobalCollection, null)
    getLastCreatedEntity().boss_ID = 1.1
    eventPlayer.boss_pet.append(getLastCreatedEntity())
    wait(true)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    destroyEffect(eventPlayer.effects)


rule "genji normal attack":
    @Event eachPlayer
    @Team 1
    @Hero genji
    @Condition phase == 5
    @Condition eventPlayer.boss_ID == 1

    wait(0.9)
    if any([distance(eventPlayer, i) < 5 and eventPlayer.isInViewAngle(i, 60) for i in [player for player in getPlayers(Team.2) if not player.isDummy()]]):
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    if ruleCondition:
        loop()


rule "genji no enviro death":
    @Event eachPlayer
    @Team 1
    @Hero genji
    @Condition eventPlayer.getPosition().y <= 2.5

    eventPlayer.start_pathfind = false
    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(14, 80, -64.7)), Relativity.TO_WORLD)
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer, vect(14, 20, -64.7)), 1, Relativity.TO_WORLD)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), vect(13.991, 80, -64.698)), 1000)
    eventPlayer.startForcingButton(Button.JUMP)
    eventPlayer.avoid_enviro = true
    while eventPlayer.isInAir():
        while eventPlayer.getPosition().y < 3:
            wait(0.1)
            eventPlayer.applyImpulse(Vector.UP, 3, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
        wait(false)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), eventPlayer.turn_rate)
    eventPlayer.stopForcingButton(Button.JUMP)
    eventPlayer.avoid_enviro = false


rule "genji random deflect":
    @Event eachPlayer
    @Team 1
    @Hero genji
    @Condition phase == 5

    wait(random.uniform(2, 4))
    waitUntil(not eventPlayer.attack, 99999)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(random.uniform(0.5, 2))
    if eventPlayer.isUsingAbility2():
        eventPlayer.forceButtonPress(Button.ABILITY_2)
    if ruleCondition:
        loop()


rule "genji special attack":
    @Event eachPlayer
    @Team 1
    @Hero genji
    @Condition phase == 5

    wait(random.uniform(3, 5))
    while eventPlayer.isUsingAbility2() or not isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()):
        wait(wait)
    if not eventPlayer.boss_phase and eventPlayer.getNormalizedHealth() < 0.5:
        eventPlayer.attack = 4
        eventPlayer.boss_phase = true
    else:
        eventPlayer.attack = random.randint(1 if distance(eventPlayer, eventPlayer.target) < 11 else 3, 4 if eventPlayer.boss_phase else 3)
    waitUntil(not eventPlayer.attack, 99999)
    if ruleCondition:
        loop()


def genji_pet_strike():
    @Name "genji pet strike subr"

    eventPlayer.boss_pet[true].setInvisibility(Invis.NONE)
    playEffect(getAllPlayers(), DynamicEffect.WIDOWMAKER_VENOM_MINE_EXPLOSION, Team.1, worldVector(Vector.UP, eventPlayer.boss_pet[true], Transform.ROTATION_AND_TRANSLATION), 1)
    wait(false)
    eventPlayer.boss_target_location_2 = raycast(eventPlayer.boss_target_location, eventPlayer.boss_target_location + directionFromAngles(random.uniform(0, 360), 0) * 7.5, null, eventPlayer, true).getHitPosition()
    eventPlayer.boss_pet[true].teleport(eventPlayer.boss_target_location_2)
    wait(false)
    eventPlayer.boss_pet[true].setFacing(directionTowards(eventPlayer.boss_target_location_2, eventPlayer.boss_target_location), Relativity.TO_WORLD)
    while not eventPlayer.boss_pet[true].isUsingAbility1():
        eventPlayer.boss_pet[true].forceButtonPress(Button.ABILITY_1)
        wait(false)


rule "genji spawn dragonstriker":
    @Event eachPlayer
    @Team 1
    @Hero genji
    @Condition phase == 5
    @Condition eventPlayer.boss_ID == 1
    @Condition eventPlayer.getNormalizedHealth() < 0.5

    if eventPlayer.getHealth() <= false:
        return
    createDummy(Hero.HANZO, Team.1, -1, eventPlayer.getPosition(), eventPlayer.getFacingDirection())
    getLastCreatedEntity().boss_ID = 1.3
    eventPlayer.boss_pet.append(getLastCreatedEntity())


rule "genji attack 4 dragonstrike":
    @Event eachPlayer
    @Team 1
    @Hero hanzo
    @Condition boss.attack == 4.1

    while not eventPlayer.isUsingUltimate():
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(false)


rule "boss death":
    @Event playerDied
    @Team 1
    @Condition eventPlayer.boss_ID in [1, 5] == true

    if eventPlayer.boss_ID == 5:
        getPlayers(Team.2).euros = 6969
        euros_total = 6969
        getPlayers(Team.2).real = 1337
        real_total = 1337
        sombra_egg = 69
        wait(2)
        getPlayers(Team.2).teleport(map)
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Team.1, map, 200)
        smallMessage(getPlayers(Team.2), "Some new dialogue has been unlocked.")
        wait(3)
        smallMessage(getPlayers(Team.2), "Avoid skipping cutscenes to see them!")
        wait(true)
        destroyDummy(Team.1, eventPlayer.getSlot())
    else:
        phase = 6
        eventPlayer.attack = 5
        objective_complete = true
        getPlayers(Team.2).euros += 300
        euros_total += 300
        getPlayers(Team.2).real += 100
        real_total += 100


def obj_color():
    @Name "objective colour subr"

    obj_color_r = 255
    obj_color_g = 255
    obj_color_b = 255
    stopChasingVariable(obj_color_r)
    stopChasingVariable(obj_color_g)
    stopChasingVariable(obj_color_b)
    wait(0.03)
    for i3 in range(0, 3, true):
        wait(0.1)
        obj_color_g = null
        obj_color_b = null
        wait(0.1)
        obj_color_g = 255
        obj_color_b = 255
    wait(0.4)
    while true:
        chaseOverTime(obj_color_r, 255, 1.3)
        chaseOverTime(obj_color_g, 120, 1.3)
        chaseOverTime(obj_color_b, 255, 1.3)
        wait(1.3)
        chaseOverTime(obj_color_r, 150, 1.3)
        chaseOverTime(obj_color_g, 30, 1.3)
        chaseOverTime(obj_color_b, 255, 1.3)
        wait(1.3)


rule "objective updated ding":
    @Condition obj_cache != objective

    obj_cache = objective
    smallMessage(getPlayers(Team.2), "Objective updated!")
    for i6 in range(0, 4, true):
        playEffect(getPlayersInSlot(evalOnce(i6), Team.2), DynamicEffect.SOMBRA_LOGO_SOUND, Color.WHITE, getPlayersInSlot(evalOnce(i6), Team.2), 200)


rule "objective completed ding":
    @Condition objective_complete == true
    @Condition phase > 0.5

    bigMessage(getPlayers(Team.2), random.choice(["Bewitching success!", "Junktastic success!", "Monstrous success!", "Reapalicious success!"].concat("Sucesso incrível!" if sombra_egg == 69 else [])))
    for i6 in range(0, 4, true):
        playEffect(getPlayersInSlot(evalOnce(i6), Team.2), DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, getPlayersInSlot(evalOnce(i6), Team.2), 200)


rule "skip cutscene":
    @Condition main_dialogue != null
    @Condition skip_cutscene_pos.y < 100
    @Condition (all([distance(i, skip_cutscene_pos) < 2.3 for i in [player for player in getPlayers(Team.2) if not player.isDummy()]])) == true

    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false


rule "return cam":
    @Event eachPlayer
    @Condition return_cam == true

    chaseOverTime(eventPlayer.cutscene_cam_pos, eventPlayer.getEyePosition(), true)
    chaseOverTime(eventPlayer.cutscene_cam_lookat, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection(), true)
    wait(true)
    eventPlayer.stopCamera()
    stopChasingVariable(eventPlayer.cutscene_cam_pos)
    stopChasingVariable(eventPlayer.cutscene_cam_lookat)
    stopChasingVariable(eventPlayer.cutscene_cam_speedup)


rule "in spawn check":
    @Event eachPlayer
    @Team 2
    @Condition phase < 11
    @Condition dotProduct(vectorTowards(spawn_corners[0], vect(eventPlayer.getPosition().x, false, eventPlayer.getPosition().z)), spawn_line) > false
    @Condition dotProduct(vectorTowards(spawn_corners[0], vect(eventPlayer.getPosition().x, false, eventPlayer.getPosition().z)), spawn_line) < magnitude(spawn_line) ** 2
    @Condition dotProduct(vectorTowards(spawn_corners[0], vect(eventPlayer.getPosition().x, false, eventPlayer.getPosition().z)), normalize(crossProduct(spawn_line, Vector.DOWN))) * 50 > false
    @Condition dotProduct(vectorTowards(spawn_corners[0], vect(eventPlayer.getPosition().x, false, eventPlayer.getPosition().z)), normalize(crossProduct(spawn_line, Vector.DOWN))) * 50 < 2500

    eventPlayer.in_spawn = true
    wait(false)
    if ruleCondition:
        loop()
    eventPlayer.in_spawn = false
    if eventPlayer.isDummy():
        _objectVariable_0 = true
        is_dialoguing = true
        waitUntil(not main_dialogue, 99999)
        is_dialoguing = false


rule "stuck in spawn phase 0":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.in_spawn == false
    @Condition phase < true
    @Condition eventPlayer.isDummy() == false

    eventPlayer.applyImpulse(directionFromAngles(horizontalAngleOfDirection(directionTowards(eventPlayer, vect(-12.838, 7.257, -0.748))), -30), 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.respawn()
    playEffect(getAllPlayers(), DynamicEffect.TRACER_RECALL_REAPPEAR_SOUND, Color.WHITE, eventPlayer, 100)
    smallMessage(eventPlayer, "You cannot yet leave spawn.")


rule "phase 1+ cannot re-enter spawn":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.in_spawn == true
    @Condition phase > 0.5

    if eventPlayer.egg:
        wait(false)
        if distance(eventPlayer, vect(0.952, 6.1, 1.055)) < 7:
            eventPlayer.teleport(vect(0.952, 6.1, 1.055))
        elif distance(eventPlayer, vect(-26.711, 1.1, -0.393)) < 7:
            eventPlayer.teleport(vect(-26.711, 1.1, -0.393))
        else:
            eventPlayer.teleport(vect(-12.008, 0.44, -8.068))
        playEffect(getAllPlayers(), DynamicEffect.TRACER_RECALL_REAPPEAR_SOUND, Color.WHITE, eventPlayer, 100)
    wait(0.25)
    if ruleCondition:
        loop()
    if eventPlayer.egg == 1:
        smallMessage(eventPlayer, "This is not where you are looking for." if phase == 9 else "You can no longer return to the spawn room.")
    elif eventPlayer.egg == 31:
        smallMessage(eventPlayer, "Ahem. I said this is not where you are looking for." if phase == 9 else "Ahem. I said you cannot return to the spawn room.")
    elif eventPlayer.egg == 61:
        smallMessage(eventPlayer, "What are you trying to achieve here?")
    elif eventPlayer.egg == 91:
        smallMessage(eventPlayer, "Is this fun for you? Do you find this fun? What is wrong with you?")
    elif eventPlayer.egg == 121:
        smallMessage(eventPlayer, "You must really like that warping sound.")
    elif eventPlayer.egg == 161:
        async(egg, AsyncBehavior.NOOP)
    eventPlayer.egg++


rule "first cutscene":
    @Condition phase == false
    @Condition (_objectVariable_0 == 1 or all([i.hasSpawned() for i in [player for player in getPlayers(Team.2) if not player.isDummy()]])) == true
    @Condition ([player for player in getPlayers(Team.2) if not player.isDummy()]) != []

    wait(true, Wait.ABORT_WHEN_FALSE)
    phase = 0.1
    objective_complete = true
    skip_cutscene_pos = vect(-12.386, 2.259, -4.887)
    if not _objectVariable_0:
        active_dialogue_list = [[Hero.REINHARDT, "Our tale begins in Adlersbrunn, where the lord of the castle has called for heroes to come to his aid,", 0.5], [Hero.REINHARDT, "to defend him against the mad Dr.\u200b Junkenstein and his minions.", 1], [Hero.MERCY, "Excuse me, minion? Tch, don't be absurd. If anything, the mad doctor is my minion.", 1], [Hero.JUNKRAT, "Oh, stick a sock in it, you old hag. I'll have ya know the great Dr.\u200b Junkenstein doesn't take kindly to such remarks.", 1], [Hero.MERCY, "Old- old hag!? Why, I never!", 1], [Hero.ROADHOG, "To be fair, you're somewhere between three to six centuries old.", 1], [Hero.MERCY, "Yet with the complexion of a rose! It's no easy feat staying so youthful.", 1], [Hero.MERCY, "Do you know how much I spend on vitamin C serums alone?", 1], [Hero.REAPER, "My wife left me.", 1.5]]
        main_dialogue()
    wait(0.1)
    if _objectVariable_0:
        active_dialogue_list = [[Hero.REINHARDT, ".........", 1], [Hero.REINHARDT, "...What are you doing with Zommy. Put her back.", 1], [Hero.REINHARDT, "She's sensitive to the moonlight.", 1]]
        main_dialogue()
        wait(1)
        kill(faq_bot)
        wait(2)
        active_dialogue_list = [[Hero.REINHARDT, "...Okay, nevermind. Let's just move on.", 1], [Hero.REAPER, "I miss my wife.", 1.5]]
        main_dialogue()
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 1
    objective = "Reach the Village of Adlersbrunn."
    async(obj_color, AsyncBehavior.RESTART)
    objective_pos = vect(8.302, 6, -68.151)
    objective_complete = false
    getPlayers(Team.2).late_join_check = true
    destroyDummy(Team.2, 5)


rule "first kill":
    @Condition first_kill == true

    wait(true)
    if dialogue_priority > true:
        return
    dialogue_priority = 1
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.JUNKRAT, "Crikey! I just found meself some evil dollars!", 1], [Hero.REAPER, "Those are euros.", 1], [Hero.JUNKRAT, "Don't know what that is, but this one's got an 'E' on it for 'Evil'!", 1.5]]
    main_dialogue()
    dialogue_priority = false


rule "phase 1 spawning event 1":
    @Condition phase == true
    @Condition any([player.egg for player in getPlayers(Team.2)]) == true

    for i4 in range(0, 2, true):
        enemy_spawn = ([vect(-2.644, 3.451, -34.464), vect(-25.77, 3.221, -34.308)])[i4]
        createDummy(Hero.TORBJORN, Team.1, i4 + true, enemy_spawn, Vector.UP)
        getLastCreatedEntity().enemy_ID = 1
        wait(0.1)


rule "phase 1 spawning event 2":
    @Condition phase == 1
    @Condition scripted_spawns[0] == false
    @Condition (any([isInLoS(i.getEyePosition(), vect(21.683, 5.254, -28.292)) for i in [player for player in getPlayers(Team.2) if not player.isDummy() and player.hasSpawned()]])) == true

    scripted_spawns[false] = true
    for i4 in range(0, 3, true):
        enemy_spawn = ([vect(24.164, 5.273, -30.816), vect(24.164, 5.273, -30.816), vect(19.751, 6.248, -39.815)])[i4]
        createDummy(Hero.TORBJORN, Team.1, i4 + 3, enemy_spawn, Vector.UP)
        getLastCreatedEntity().enemy_ID = ([1, 2, 3 if difficulty == 3 else 2])[i4]
        wait(0.1)


rule "phase 1 spawning event 3":
    @Condition phase == 1
    @Condition scripted_spawns[true] == false
    @Condition (any([isInLoS(i.getEyePosition(), vect(13.6, 6.002, -50.9)) for i in [player for player in getPlayers(Team.2) if not player.isDummy() and player.hasSpawned()]])) == true

    scripted_spawns[true] = true
    for i4 in range(0, 3, true):
        enemy_spawn = ([vect(35.123, 12.754, -58.077), vect(18.279, 6.653, -64.255), vect(11.154, 7.254, -58.814)])[i4]
        createDummy(Hero.TORBJORN, Team.1, i4 + 6, enemy_spawn, Vector.UP)
        getLastCreatedEntity().enemy_ID = ([6 if difficulty == 3 else 4, 2, 7 if difficulty == 3 else 1])[i4]
        wait(0.1)


rule "second cutscene":
    @Condition phase == 1
    @Condition dialogue_priority < 3
    @Condition objective_pos.y < 100
    @Condition all([distance(player, objective_pos) < 4 for player in getPlayers(Team.2)]) == true

    objective_complete = true
    phase = 2
    wait(false)
    objective_pos = _extendedGlobalCollection
    skip_cutscene_pos = vect(16.597, 7.058, -68.525)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.JUNKRAT, "Well well, take a gander at these miserable little village-dwellers.", 1], [Hero.ROADHOG, "I say we hold 'em hostage, force a bargain with the Lord for his life.", 1], [Hero.ROADHOG, "He'll have no choice but abandon the safety of the castle to spare his loyal subjects.", 1], [Hero.JUNKRAT, "Lovely proposal, monster dearest. But I have a better plan.", 1], [Hero.JUNKRAT, "We kill them all and take their money!", 1], [Hero.ROADHOG, "...Why?", 2], [Hero.MERCY, "A splendid suggestion! You certainly do not disappoint, good Doctor.", 1], [Hero.ROADHOG, "Seriously, why?", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 3
    objective = "Kill everyone in the village."
    async(obj_color, AsyncBehavior.RESTART)
    enemy_spawn = [vect(-1.299, 8.147, -71.937), vect(-8.77, 4.938, -76.42), vect(4.709, 6.497, -92.627), vect(15.987, 7.642, -87.65), vect(23.792, 11.636, -87.842), vect(28.715, 7.662, -73.329), vect(35.771, 6.875, -53.8), vect(13.89, 7.639, -61.233), vect(1.177, 7.623, -49.463), vect(6.328, 11.639, -41.476), vect(18.923, 5.715, -36.519), vect(26.77, 6.626, -43.5), vect(34.607, 12.418, -54.705), vect(29.591, 13.128, -66.596)]
    objective_complete = false


rule "within bounds":
    @Event eachPlayer
    @Team 2
    @Condition phase < 23
    @Condition eventPlayer.isDummy() == false
    @Condition (eventPlayer.getPosition().x > 73 or phase < 9) == true
    @Condition crossProduct(directionTowards(boundary_corners[0], vect(eventPlayer.getPosition().x, false, eventPlayer.getPosition().z)), boundary_line).y < null

    eventPlayer.in_boundary = true
    wait(0.1)
    if ruleCondition:
        loop()
    eventPlayer.in_boundary = false


rule "out of bounds visuals 1":
    @Condition phase == true

    wait(true)
    for i3 in range(0, 11, true):
        createBeam(getAllPlayers(), Beam.GOOD, boundary_corners[0] + Vector.UP * 1.5 * evalOnce(i3), boundary_corners.last() + Vector.UP * 1.5 * evalOnce(i3), Color.BLACK, EffectReeval.VISIBILITY)
        boundary_effects.append(getLastCreatedEntity())
        wait(false)


rule "out of bounds phase <?":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.in_boundary == true
    @Condition eventPlayer.isDummy() == false

    eventPlayer.applyImpulse(normalize(crossProduct(boundary_line, Vector.UP)) + Vector.UP * 0.3, 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(false)
    if ruleCondition:
        loop()


rule "out of bounds phase <? tp":
    @Event eachPlayer
    @Team 2
    @Condition phase < 23
    @Condition eventPlayer.in_boundary == true
    @Condition eventPlayer.isDummy() == false

    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.teleport(vect(32.211, 6.064, -62.332) if phase < 9 else vect(88.095, 13.279, -67.749))
    smallMessage(eventPlayer, "Tsk tsk. Spoiler alert.")
    playEffect(getAllPlayers(), DynamicEffect.TRACER_RECALL_REAPPEAR_SOUND, Color.WHITE, eventPlayer, 100)


def egg():
    @Name "egg"

    smallMessage(eventPlayer, "Okay, that's it. Enough of this nonsense.")
    wait(3)
    smallMessage(eventPlayer, "You want the spawn room back that badly?")
    wait(3)
    smallMessage(eventPlayer, "Be careful what you wish for.")
    wait(3.5)
    restartMatch()


rule "boundaries 2":
    @Condition phase in [2, 10, 13] == true

    boundary_corners_2 = [vect(40.846, 5, -38.417), vect(-12.812, 5, -38.358)] if phase == 2 else [vect(42.805, 6, -44.411), vect(21.056, 6, -97.984)] if phase == 10 else [vect(67.648, 8, -57.147), vect(53.494, 8, -112.111)]
    boundary_line_2 = vectorTowards(boundary_corners_2[0], boundary_corners_2.last())
    for i3 in range(0, 12 if phase == 13 else 10, true):
        createBeam(getAllPlayers(), Beam.GOOD, boundary_corners_2[0] + Vector.UP * 1.5 * evalOnce(i3), boundary_corners_2.last() + Vector.UP * 1.5 * evalOnce(i3), Color.BLACK, EffectReeval.VISIBILITY)
        if phase == 13:
            boundary_effects_2.append(getLastCreatedEntity())
        else:
            boundary_effects.append(getLastCreatedEntity())
        wait(false)


rule "out of bounds phase x != 9":
    @Event eachPlayer
    @Team 2
    @Condition phase != 9
    @Condition phase >= 2
    @Condition eventPlayer.isDummy() == false
    @Condition crossProduct(directionTowards(boundary_corners_2[0], vect(eventPlayer.getPosition().x, false, eventPlayer.getPosition().z)), boundary_line_2).y < false

    eventPlayer.applyImpulse(normalize(crossProduct(boundary_line_2, Vector.UP)) + Vector.UP * 0.3, 5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(false)
    if ruleCondition:
        loop()


rule "out of bounds phase x != 9 tp":
    @Event eachPlayer
    @Team 2
    @Condition phase != 9
    @Condition phase >= 2
    @Condition eventPlayer.isDummy() == false
    @Condition crossProduct(directionTowards(boundary_corners_2[0], vect(eventPlayer.getPosition().x, false, eventPlayer.getPosition().z)), boundary_line_2).y < false

    wait(0.25, Wait.ABORT_WHEN_FALSE)
    smallMessage(eventPlayer, "Get back in here, you coward.")
    playEffect(getAllPlayers(), DynamicEffect.TRACER_RECALL_REAPPEAR_SOUND, Color.WHITE, eventPlayer, 100)
    eventPlayer.teleport(vect(12.858, 5.656, -45.527) if phase < 9 else vect(37.539, 5.672, -64.417) if phase < 13 else vect(60.491, 11.989, -94.11) if phase < 23 else vect(90.593, 14.31, -60.16))


rule "phase 3 spawning event":
    @Condition phase == 3
    @Condition objective_value == false
    @Condition getNumberOfLivingPlayers(Team.1) <= 3

    objective_value = 0.5
    enemy_ID_sequence = [1, 1, 2, 2]
    spawn_enemies()
    waitUntil(getNumberOfLivingPlayers(Team.1) <= 3, 99999)
    enemy_ID_sequence = [1, 2, 2]
    spawn_enemies()
    waitUntil(getNumberOfLivingPlayers(Team.1) <= 3, 99999)
    enemy_ID_sequence = [3 if difficulty == 3 else 1, 2, 1, 4]
    spawn_enemies()
    waitUntil(getNumberOfLivingPlayers(Team.1) <= 3, 99999)
    enemy_ID_sequence = [1, 6 if difficulty == 3 else 4, 2, 3, 4]
    spawn_enemies()
    waitUntil(getNumberOfLivingPlayers(Team.1) <= 2, 99999)
    enemy_ID_sequence = [7 if difficulty == 3 else 1, 2, 2, 3, 4, 8]
    spawn_enemies()
    objective_value = 9


rule "end of slaughter + genji intro cutscene":
    @Condition phase == 3
    @Condition objective_value == 9
    @Condition dialogue_priority < 3
    @Condition getNumberOfLivingPlayers(Team.1) == 1

    phase = 4
    objective_complete = true
    wait(true)
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(16.597, 7.058, -68.525)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.MERCY, "My, my, I haven't felt such fun since the genocide of the Western Shelf sixty moons ago!", 1], [Hero.REAPER, "I haven't felt happy since 2016.", 1], [Hero.JUNKRAT, "Ahahahahaha! Oh, this bloodshed's got me mighty stoked. What a blast. ", 1], [Hero.JUNKRAT, "What were we doing again?", 1], [Hero.REINHARDT, "As the dust settled from the massacre, one hero emerged from the darkness.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    destroyDummy(Team.1, 5)
    destroyDummy(Team.1, 6)
    destroyDummy(Team.1, 7)
    destroyDummy(Team.1, 8)
    setSlowMotion(20)
    no_hud = true
    createDummy(Hero.GENJI, Team.1, -1, vect(-2.233, 24.45, -72.894), vect(2.611, 0.5, 1.146))
    boss = getLastCreatedEntity()
    getLastCreatedEntity().pre_init = true
    getLastCreatedEntity().boss_ID = 1
    wait(1.8)
    setSlowMotion(100)
    return_cam = true
    boss.startFacing(directionTowards(boss.getEyePosition(), boss.target.getEyePosition()), 1000)
    wait(false)
    return_cam = false
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(6.276, 7.05, -69.451)
    dialogue_priority = 2
    no_hud = false
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "His blade shimmered in the moonlight, hungry for avengement.", 1], [Hero.JUNKRAT, "...Who the blazes is this spiffy bloke?", 1], [Hero.GENJI, "You took everything from me.", 1], [Hero.MERCY, "I don't even know who you are. ", 1], [Hero.GENJI, "I will avenge my village and bring honour to my Lord.", 1], [Hero.GENJI, "You are all already dead.", 1], [Hero.ROADHOG, "Technically that's true for me.", 1], [Hero.REAPER, "I'm dead on the inside.", 1], [Hero.GENJI, "…Smoky fiend, you have issues.", 1], [Hero.MERCY, "Cease this banter! Minions, waste this fool!", 1], [Hero.JUNKRAT, "Not your minion.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 5
    objective = "Kill the Swordsman."
    async(obj_color, AsyncBehavior.RESTART)
    objective_complete = false
    dialogue_bot.startForcingHero(Hero.GENJI)


rule "phase 5 spawning event":
    @Condition phase == 5
    @Condition len([player for player in getPlayersOnHero(Hero.TORBJORN, Team.1) if player.isAlive()]) <= true

    wait(random.uniform(3, 6), Wait.ABORT_WHEN_FALSE)
    enemy_ID_sequence = [1, 2, random.choice([1, 2, 4].concat(6 if difficulty == 3 else []))]
    spawn_enemies()
    if ruleCondition:
        loop()


rule "genji dead cutscene":
    @Condition phase == 6

    wait(true)
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(16.597, 7.058, -68.525)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "A lone katana clattered across the floor, as the Swordsman's lifeless body slumped to the ground, ashamed and dishonoured.", 1], [Hero.MERCY, "Goodness me, what a nuisance that was.", 1], [Hero.JUNKRAT, "But really though, Reaps, you have issues.", 1], [Hero.REAPER, "She took the kids, James.", 1], [Hero.ROADHOG, "Let's keep moving. News of our attack must've reached the Lord's ears by now.", 1], [Hero.ROADHOG, "Security will be tightened, methinks.", 1], [Hero.JUNKRAT, "Hold that thought, my sweet summer child. Look at this cool dollar I found!", 1], [Hero.JUNKRAT, "It's got an ''R'' on it. That must mean it's a REAL dollar!", 1], [Hero.REAPER, "That's... actually what it's called in Brazil, yeah.", 1]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    objective = "Reach the castle."
    async(obj_color, AsyncBehavior.RESTART)
    objective_complete = false
    phase = 7
    destroyDummy(Team.1, boss.getSlot())


rule "sixth cutscene (merchant)":
    @Condition phase == 7
    @Condition dialogue_priority < 3

    createDummy(Hero.MOIRA, Team.2, 9, _extendedGlobalCollection, vect(0.91, false, 0.42))
    merchant = getLastCreatedEntity()
    wait(5)
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(7.65, 7.08, -72.89)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.MOIRA, "Come hither, evil ones, and browse my arcane wares.", 1], [Hero.JUNKRAT, "Ooh, a merchant! I hope she accepts evil dollars.", 1], [Hero.MERCY, "Oh, be still, my accursed heart! Arcane wares? You certainly know how to treat a lady.", 1], [Hero.MOIRA, "Wicked Witch, I'm afraid this is no treat. I'm here to run a business, you see.", 1], [Hero.MERCY, "How you enchant me with your sinister voice! Your spell of seduction is strong, fellow witch.", 1], [Hero.MOIRA, "I am no witch. I am merely a merchant of darkness.", 1], [Hero.MERCY, "Tut, tut! No need for humility, my love. Pray tell, are you free later at break of dawn?", 1], [Hero.MERCY, "I just have an errand to run. Kill the Lord and all that, you know how it is.", 1], [Hero.MOIRA, "Wicked witch, I plead of you. I am only here to sell my wares. Please buy something.", 1], [Hero.MERCY, "Oh, you can tell me all about your wares at supper later, you charming devil.", 1], [Hero.MOIRA, "Please. Buy something.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 8
    objective_pos = vect(28.598, 6.067, -60.781)


rule "regrouped after merchant":
    @Condition phase == 8
    @Condition objective_pos.y < 100
    @Condition (all([distance(i, objective_pos) < 4 for i in [player for player in getPlayers(Team.2) if not player.isDummy()]])) == true

    enemy_spawn_2 = enemy_spawn
    phase = 9
    boundary_corners = [vect(103.485, 13.9, -66.421), vect(74.555, 13.9, -59.152)]
    objective_pos = vect(77.842, 13.935, -98.146)
    boundary_line = vectorTowards(boundary_corners[0], boundary_corners.last())
    async(delete_bound_effects, AsyncBehavior.RESTART)
    merchant.forceButtonPress(Button.ABILITY_1)
    destroyDummy(Team.1, merchant.attack.getSlot())
    shop_open = false
    wait(0.4)
    destroyDummy(Team.2, 9)
    stopChasingVariable(shop_angle)


rule "phase 9 spawning event 1":
    @Condition phase == 9
    @Condition scripted_spawns[2] == false
    @Condition (any([isInLoS(i.getEyePosition(), vect(44.274, 6.973, -71.715)) for i in [player for player in getPlayers(Team.2) if not player.isDummy() and player.hasSpawned()]])) == true

    scripted_spawns[2] = true
    for i4 in range(0, 4, true):
        enemy_spawn = ([vect(54.223, 7.977, -74.398), vect(54.646, 12.977, -73.179), vect(40.486, 11.923, -97.597), vect(50.089, 9.807, -85.586)])[i4]
        createDummy(Hero.TORBJORN if i4 % 2 else Hero.BRIGITTE, Team.1, i4 + 5, enemy_spawn, Vector.UP)
        getLastCreatedEntity().enemy_ID = ([21, 2, 23 if difficulty == 3 else 21, 3 if difficulty == 3 else 2])[i4]
        wait(0.1)


rule "phase 9 spawning event 2":
    @Condition phase == 9
    @Condition scripted_spawns[3] == false
    @Condition (any([isInLoS(i.getEyePosition(), vect(70.683, 14.273, -89.002)) for i in [player for player in getPlayers(Team.2) if not player.isDummy() and player.hasSpawned()]])) == true

    scripted_spawns[3] = true
    enemy_spawn = [vect(73.4, 11.002, -109.24), vect(96.938, 13.189, -106.7), vect(92.205, 13.193, -114.037)]
    enemy_ID_sequence = [6, 22, 26 if difficulty == 3 else 22]
    spawn_enemies()


rule "seventh cutscene":
    @Condition phase == 9
    @Condition dialogue_priority < 3
    @Condition objective_pos.y < 100
    @Condition (all([distance(i, objective_pos) < 4 for i in [player for player in getPlayers(Team.2) if not player.isDummy()]])) == true

    createIcon(getAllPlayers() if hint >= 60 else [], ([player for player in dragon_blood_actual_spawn if player.y < 100])[0], Icon.EYE, IconReeval.VISIBILITY_AND_POSITION, Color.ORANGE)
    dragon_blood_hint_icon = getLastCreatedEntity()
    dragon_blood_spawn = [vect(67.048, 5.341, -83.57), vect(55.7, 21.801, -68.705), vect(51.195, 18.501, -104.655), vect(60.065, 12.973, -75.713), vect(53.161, 7.33, -60.78), vect(105.71, 13.284, -73.852), vect(101.553, 10.602, -93.124), vect(86.02, 13.85, -107.137), vect(41.65, 11.321, -96.409), vect(57.872, 18.146, -112.741), vect(50.761, 18.65, -83.244), vect(76.753, 13.49, -74.067), vect(53.264, 7.082, -107.511), vect(60.86, 7.243, -72.185), vect(52.091, 12.922, -79.863), vect(50.205, 9.2, -85.327), vect(46.037, 5.631, -49.559), vect(35.516, 6.977, -70.508), vect(31.337, 9.455, -86.835)]
    getPlayers(Team.2).blood_cache = 5
    dragon_blood_effects = []
    dragon_blood_qty = 5
    objective_complete = true
    phase = 10
    async(delete_bound_effects, AsyncBehavior.RESTART)
    wait(false)
    destroyEffect(skull_effect[0])
    objective_pos = _extendedGlobalCollection
    skip_cutscene_pos = vect(70.511, 14.07, -98.653)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.JUNKRAT, "Nossa Senhora, that is one big door." if sombra_egg == 69 else "Hooley dooley, that is one big door.", 1], [Hero.ROADHOG, "We're gonna need more firepower. Lots n' lots more.", 1], [Hero.MERCY, "Doctor, couldn't you conjure up some of those metal zombies of yours?", 1], [Hero.JUNKRAT, "Well I could, but not nearly enough to take that mighty hunk of wood down.", 1], [Hero.MERCY, "Well, it seems we are out of options. Reaper!", 1], [Hero.REAPER, "No. Absolutely not. Nuh-uh.", 1], [Hero.MERCY, "Oh, get over yourself. She's our best bet right now.", 1], [Hero.REAPER, "You'd be making a mistake. She is evil incarnate.", 1], [Hero.ROADHOG, "I think she's really sweet. She summoned a Cerberus meatloaf on my first birthday.", 1], [Hero.JUNKRAT, "Come onnnn, Reaps! Pretty please? Please please please please please please please please pleeeeaaaase?", 1], [Hero.REAPER, "Fine! Whatever. We'll need to perform a ritual first.", 1], [Hero.REAPER, "Get me five bottles of dragon's blood. And don't say I didn't warn you.", 1], [Hero.REINHARDT, "And so the villains began their hunt for the bottles, hidden throughout Adlersbrunn.", 1], [Hero.REINHARDT, "Who knows if they can find them all...", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    objective = "Collect {0} bottles of dragon's blood.".format(dragon_blood_qty)
    async(obj_color, AsyncBehavior.RESTART)
    objective_complete = false
    enemy_spawn = [vect(58.274, 21.751, -71.81), vect(54.145, 7.089, -75.357), vect(30.489, 15.015, -76.676), vect(33.676, 9.065, -79.304), vect(57.437, 12.678, -64.421), vect(52.025, 12.356, -81.899), vect(67.905, 14.28, -74.618), vect(41.302, 11.422, -96.339), vect(58.101, 7.812, -105.398), vect(45.303, 15.651, -106.795), vect(62.496, 5.856, -81.776), vect(53.88, 18.975, -106.78), vect(51.306, 19.218, -83.228), vect(77.969, 13.38, -58.986), vect(97.55, 12.73, -66.2), vect(101.811, 11.2, -93.285)]
    enemy_spawn_2 = enemy_spawn
    wait(false)
    dragon_blood_actual_spawn = random.shuffle(dragon_blood_spawn).slice(false, 6)
    for i3 in range(0, 6, true):
        createEffect(getAllPlayers(), Effect.SPHERE, Color.RED, dragon_blood_actual_spawn[evalOnce(i3)], 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        dragon_blood_effects.append(getLastCreatedEntity())
        createBeam(getAllPlayers(), Beam.MOIRA_COALESCENCE, dragon_blood_actual_spawn[evalOnce(i3)], dragon_blood_actual_spawn[evalOnce(i3)] + Vector.UP * 0.001, Team.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        dragon_blood_effects.append(getLastCreatedEntity())
        wait(false)
    wait(false)
    phase = 11
    chaseAtRate(hint, 60, true)
    while spawn_door_effects != []:
        destroyInWorldText(spawn_door_effects[0])
        del spawn_door_effects[false]


rule "phase 11 spawning event":
    @Condition phase >= 11
    @Condition phase < 13
    @Condition dragon_blood_cache != dragon_blood_qty

    wait(false)
    dragon_blood_cache = dragon_blood_qty
    async(phase_11_spawn, AsyncBehavior.RESTART)


rule "collect blood":
    @Event eachPlayer
    @Team 2
    @Condition phase == 11

    if hint > true:
        if distance(eventPlayer, sorted(dragon_blood_actual_spawn, lambda player: distance(eventPlayer, player))[0]) < 1.5:
            if mercy_drop in [1, 1.9]:
                if not eventPlayer.no_pickup:
                    smallMessage(eventPlayer, "You cannot pick this up during a cutscene.")
                    eventPlayer.no_pickup = true
            else:
                hint = null
                chaseAtRate(hint, 60, true)
                last_collected_blood = eventPlayer
                eventPlayer.blood_collected = dragon_blood_actual_spawn.index(sorted(dragon_blood_actual_spawn, lambda player: distance(eventPlayer, player))[0])
                playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.RED, dragon_blood_actual_spawn[eventPlayer.blood_collected], 1)
                wait(false)
                dragon_blood_actual_spawn[eventPlayer.blood_collected] = _extendedGlobalCollection
                dragon_blood_qty--
                wait(false)
                smallMessage(getAllPlayers().exclude(eventPlayer), "{0} collected a bottle of dragon's blood.".format(eventPlayer))
                smallMessage(eventPlayer, "You collected a bottle of dragon's blood.")
                if not dragon_blood_qty:
                    objective_complete = true
                    wait(true)
                    if dialogue_priority >= 3:
                        return
                    dialogue_priority = 2
                    is_dialoguing = true
                    waitUntil(not main_dialogue, 99999)
                    is_dialoguing = false
                    active_dialogue_list = [[Hero.REAPER, "Now let's head back to the bridge. We'll perform the ritual there.", 1.5]]
                    main_dialogue()
                    dialogue_priority = false
                    phase = 12
                    async(obj_color, AsyncBehavior.RESTART)
                    objective_complete = false
                    objective = "Perform the ritual at the bridge."
                    destroyIcon(dragon_blood_hint_icon)
                    while dragon_blood_effects != []:
                        destroyEffect(dragon_blood_effects[0])
                        del dragon_blood_effects[false]
                        wait(false)
                else:
                    async(obj_color, AsyncBehavior.RESTART)
                    objective = "Collect {0} {1} of dragon's blood.".format(dragon_blood_qty, "bottles" if dragon_blood_qty > true else "bottle")
                if not mercy_drop:
                    async(mercy_drop_blood, AsyncBehavior.NOOP)
    wait(wait)
    if ruleCondition:
        loop()


def mercy_drop_blood():
    @Name "mercy drop blood subr"

    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(70.511, 14.07, -98.653)
    mercy_drop = 1
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.MERCY, "Ah, dragon's blood. A remarkably priceless substance. And painfully hard to wash off fabrics, mind you.", 1], [Hero.MERCY, "I'll hold on to it. One must have a tender, trained touch to handle such a precious item.", 1], [Hero.REINHARDT, "The Witch, upon receiving the bottle, immediately dropped it, spilling it all over her robe.", 1], [Hero.MERCY, "\u2028MONTE DE MERDA! SON OF A GODFORSAKEN, CURSED MOTHERFU-" if sombra_egg == 69 else "\u2028VERDAMMTE SCHEIßE! SON OF A GODFORSAKEN, CURSED MOTHERFU-", 0.2], [Hero.JUNKRAT, "Woah, woah! Watch the language, swiss cheese! My Monster here is literally a minor!", 1], [Hero.ROADHOG, "I'm also neurodivergent.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    mercy_drop = 2
    skip_cutscene_pos = _extendedGlobalCollection


rule "brig mace no knockback":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.isUsingAbility1() == true

    eventPlayer.setKnockbackDealt(0)
    waitUntil(not eventPlayer.isUsingAbility1(), 1)
    eventPlayer.setKnockbackDealt(200)


rule "drop blood 1":
    @Condition mercy_drop == 1
    @Condition line_number == 2
    @Condition phase == 11
    @Condition letter_scroll >= 50

    playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION_SOUND, Team.1, (getPlayersOnHero(Hero.MERCY, Team.2)[0] if getPlayersOnHero(Hero.MERCY, Team.2) != [] else random.choice(getPlayers(Team.2))).getEyePosition(), 200)
    smallMessage([player for player in getAllPlayers() if player.getHero() != Hero.MERCY], "{0} dropped a bottle of dragon's blood.".format(getPlayersOnHero(Hero.MERCY, Team.2)[0] if isHeroBeingPlayed(Hero.MERCY, Team.2) else "The Witch"))
    smallMessage(getPlayersOnHero(Hero.MERCY, Team.2), "You dropped a bottle of dragon's blood.")
    waitUntil(line_number == 3, 20)
    if mercy_drop == 2:
        return
    mercy_drop = 1.9


rule "drop blood 2":
    @Condition mercy_drop > true

    dragon_blood_qty++
    wait(false)
    objective = "Collect {0} bottles of dragon's blood.".format(dragon_blood_qty)
    async(obj_color, AsyncBehavior.RESTART)


rule "junkrat faster mines":
    @Event eachPlayer
    @Team 2
    @Hero junkrat
    @Condition eventPlayer.getAbilityCharge(Button.ABILITY_1) < 2
    @Condition eventPlayer.potions[5] > false

    wait(8 - eventPlayer.potions[5], Wait.ABORT_WHEN_FALSE)
    eventPlayer.mine_cache = eventPlayer.getAbilityCharge(Button.ABILITY_1)
    eventPlayer.setAbilityCharge(Button.ABILITY_1, 2)
    wait(false)
    eventPlayer.setAbilityCharge(Button.ABILITY_1, eventPlayer.mine_cache + true)
    if ruleCondition:
        loop()


rule "junkrat cap mines at 2":
    @Event eachPlayer
    @Team 2
    @Hero junkrat
    @Condition eventPlayer.getAbilityCharge(Button.ABILITY_1) > 2

    eventPlayer.setAbilityCharge(Button.ABILITY_1, 2)


rule "cowboy intro cutscene":
    @Condition phase == 12
    @Condition objective_pos.y < 100
    @Condition (all([distance(i, objective_pos) < 4 for i in [player for player in getPlayers(Team.2) if not player.isDummy()]])) == true

    stopChasingVariable(hint)
    async(delete_bound_effects, AsyncBehavior.RESTART)
    enemy_spawn = [vect(62.041, 7.129, -109.873), vect(59.642, 18.42, -108.625), vect(83.877, 11.406, -112.18), vect(96.234, 13.366, -105.924), vect(67.331, 18.722, -74.665), vect(57.966, 12.388, -83.679), vect(61.097, 10.048, -68.022), vect(81.906, 13.167, -56.006), vect(96.078, 13.167, -58.029)]
    phase = 13
    objective_pos = _extendedGlobalCollection
    if dialogue_priority >= 3:
        return
    dialogue_priority = 2
    skip_cutscene_pos = vect(70.511, 14.07, -98.653)
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "But before the villains could begin their malicious ritual, one hero bravely stepped forth into the light!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    ([player for player in getLivingPlayers(Team.1) if player.enemy_ID > false]).teleport(compressBakeMatcher)
    destroyDummy(Team.1, 7)
    destroyDummy(Team.1, 8)
    wait(0.1)
    setSlowMotion(20)
    no_hud = true
    createDummy(Hero.CASSIDY, Team.1, 7, vect(61.155, 19.165, -94.355), vect(0.86, -0.44, -0.24))
    boss = getLastCreatedEntity()
    getLastCreatedEntity().pre_init = true
    getLastCreatedEntity().boss_ID = 2
    wait(1.5)
    setSlowMotion(100)
    return_cam = true
    boss.startFacing(directionTowards(boss.getEyePosition(), boss.target.getEyePosition()), 1000)
    wait(false)
    return_cam = false
    boss.forceButtonPress(Button.SECONDARY_FIRE)
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(86.109, 13.219, -101.193)
    dialogue_priority = 2
    no_hud = false
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    if sombra_egg == 69:
        active_dialogue_list = [[Hero.REINHARDT, "The Gunslinger arrived not for riches nor virtue, but merely because his trusty revolver craved a good fight.", 1], [Hero.CASSIDY, "The name's Jersey McGee, and I'm boutta' tear all y'all spooky boo-boo voodoo commies a new one.", 1], [Hero.JUNKRAT, "Puta merda! If it ain't the infamous John McAfee in the flesh. I'm a big fan!", 1], [Hero.CASSIDY, "Hold up now. Ain't that... Portuguese?", 1], [Hero.JUNKRAT, "No, it's Brazilian.", 1], [Hero.CASSIDY, "...Brazilian ain't a language, Junky.", 1], [Hero.JUNKRAT, "That's cool, Jeff McBezos, but I didn't ask for your opinion.", 1], [Hero.MERCY, "Step aside, Gunslinger. We have no time for this. I've got shopping to do!~", 1], [Hero.CASSIDY, "Shopping? What are you on about, missy? How much moolah do ya got?", 1], [Hero.MERCY, "Oh, just a measly €{0}.".format(euros_total), 1], [Hero.CASSIDY, "...Sweet virgin mother Mary, what in the gosh heckin' rootin' tootin' tarnation!?", 1], [Hero.CASSIDY, "Alright, to hell with this whole ''protect the lord'' hogwash. I'm going for the gold!", 1], [Hero.CASSIDY, "Those evil dollars are mine, y'hear!? Mine!", 1], [Hero.REINHARDT, "I stand corrected. The Gunslinger did, in fact, arrive for riches.", 1.5]]
    else:
        active_dialogue_list = [[Hero.REINHARDT, "The Gunslinger arrived not for riches nor virtue, but merely because his trusty revolver craved a good fight.", 1], [Hero.CASSIDY, "The name's Jersey McGee, and I'm boutta' tear all y'all spooky boo-boo voodoo commies a new one.", 1], [Hero.JUNKRAT, "Crikey! If it ain't the infamous Jonald McDonald in the flesh. I'm a big fan!", 1], [Hero.ROADHOG, "Boss, I think you got his name wrong.", 1], [Hero.CASSIDY, "Thank you kindly.", 1], [Hero.JUNKRAT, "Jooge McDuck?", 1], [Hero.CASSIDY, "Not it.", 1], [Hero.JUNKRAT, "Joseph McJoestar?", 1], [Hero.CASSIDY, "Gettin' colder.", 1], [Hero.JUNKRAT, "Cold Casserole?", 1], [Hero.CASSIDY, "What in tarnation- Actually I kinda like that. S'got a ring to it.", 1], [Hero.REAPER, "Oh noooo, an adversaryyyy. I guess we should give up and not do the ritual anymoreeee.", 1], [Hero.CASSIDY, "Foggy fella's right. Y'ain't've cm'ere if y'all'd've known better.", 1], [Hero.MERCY, "Gesundheit. Is that even English?", 1], [Hero.ROADHOG, "Probably not. Let's tear him to pieces!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 14
    objective = "Kill the Gunslinger."
    async(obj_color, AsyncBehavior.RESTART)
    objective_complete = false
    dialogue_bot.startForcingHero(Hero.CASSIDY)


rule "phase 14 spawning event":
    @Condition phase == 14
    @Condition getNumberOfLivingPlayers(Team.1) <= 4

    wait(random.uniform(3, 6), Wait.ABORT_WHEN_FALSE)
    enemy_ID_sequence = [random.choice([2, 3, 7 if difficulty == 3 else 4, 6]), random.choice([2, 3, 4, 6])]
    spawn_enemies()
    if ruleCondition:
        loop()


rule "shop stocks randomize":
    @Event eachPlayer
    @Team 2
    @Condition shop_open == true
    @Condition eventPlayer.isDummy() == false

    eventPlayer.random = sorted(random.shuffle(numbers).slice(false, 3)).concat(10)
    for eventPlayer.i in range(0, len(eventPlayer.random), true):
        eventPlayer.potions_max[eventPlayer.i] += eventPlayer.random[eventPlayer.i] - (eventPlayer.random[eventPlayer.i - true])
    eventPlayer.potions_max[4] += random.randint(2, 5)
    eventPlayer.potions_max[5] += random.randint(true, min(3, 4 - eventPlayer.potions_max[5]))
    eventPlayer.random = random.randint(false, 5)
    eventPlayer.potions_max[6] += eventPlayer.random
    eventPlayer.potions_max[7] += 5 - eventPlayer.random
    eventPlayer.potions_max[8]++


rule "cowboy init":
    @Event eachPlayer
    @Team 1
    @Hero cassidy
    @Condition phase == 14
    @Condition eventPlayer.boss_ID == 2

    createBeam(getAllPlayers() if eventPlayer.trail > false else [], Beam.ZARYA_PARTICLE, worldVector(Vector.UP, eventPlayer, Transform.ROTATION_AND_TRANSLATION), worldVector(Vector.UP, eventPlayer, Transform.ROTATION_AND_TRANSLATION) + vectorTowards(worldVector(Vector.UP, eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer.trail_cache) * eventPlayer.trail, Team.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer, eventPlayer.pos_cache[0]) * (1 if distance(eventPlayer, eventPlayer.pos_cache[0]) > true else eventPlayer.strafe), 1, Relativity.TO_WORLD)
    eventPlayer.avoid_enviro = true
    cowboy_tp_array = [vect(56.67, 22.931, -104.653), vect(82.514, 21.407, -64.821), vect(96.779, 17.066, -74.286), vect(62.23, 18.978, -92.354), vect(83.269, 13.141, -102.456), vect(70.765, 13.565, -76.652)]
    eventPlayer.pos_cache = eventPlayer.getPosition()
    eventPlayer.pre_init = false
    eventPlayer.setProjectileGravity(200)
    eventPlayer.setProjectileSpeed(false)
    eventPlayer.setMoveSpeed(100)
    eventPlayer.damage_dealt = 30 + 10 * difficulty
    eventPlayer.damage_received = 130 - 15 * difficulty
    eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
    eventPlayer.setDamageReceived(eventPlayer.damage_received)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + Vector.DOWN * 0.5 + vect(random.uniform(-0.8, 0.8), false, random.uniform(-0.8, 0.8))), 1000)
    createDummy(Hero.ASHE, Team.1, -1, eventPlayer.getPosition(), eventPlayer.getFacingDirection())
    getLastCreatedEntity().boss_ID = 2.1
    eventPlayer.boss_pet = getLastCreatedEntity()
    wait(true)
    eventPlayer.pos_cache[true] = random.choice(cowboy_tp_array.exclude(eventPlayer.pos_cache))
    cowboy_tp()
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)


rule "cowboy normal attack":
    @Event eachPlayer
    @Team 1
    @Hero cassidy
    @Condition phase == 14
    @Condition eventPlayer.attack < 3

    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(random.uniform(0.6, 1.5))
    if ruleCondition:
        loop()


rule "cowboy tp":
    @Event eachPlayer
    @Team 1
    @Hero cassidy
    @Condition phase == 14

    wait(random.uniform(4, 8))
    waitUntil(not eventPlayer.attack, 15)
    eventPlayer.pos_cache[true] = random.choice(cowboy_tp_array.exclude(eventPlayer.pos_cache))
    cowboy_tp()
    if ruleCondition:
        loop()


rule "cowboy too far from pos cache":
    @Event eachPlayer
    @Team 1
    @Hero cassidy
    @Condition phase == 14

    if distance(eventPlayer, eventPlayer.pos_cache[0]) > 5 or eventPlayer.getEyePosition().y < eventPlayer.pos_cache[0].y:
        wait(0.25)
        if distance(eventPlayer, eventPlayer.pos_cache[0]) > 5 or eventPlayer.getEyePosition().y < eventPlayer.pos_cache[0].y:
            eventPlayer.startThrottleInDirection((directionTowards(eventPlayer, eventPlayer.target) * (1 if distance(eventPlayer, eventPlayer.target) > 16 else -1 if distance(eventPlayer, eventPlayer.target) < 14 else null)) + worldVector(Vector.LEFT, eventPlayer, Transform.ROTATION) * eventPlayer.strafe, 1, Relativity.TO_WORLD)
            while distance(eventPlayer, eventPlayer.pos_cache[0]) > 2.5:
                wait(wait)
    wait(wait)
    if ruleCondition:
        loop()


rule "cowboy tp no envirokill/in spawn":
    @Event eachPlayer
    @Team 1
    @Hero cassidy
    @Condition phase == 14
    @Condition (eventPlayer.getPosition().y < 8 or eventPlayer.isInSpawnRoom()) == true

    eventPlayer.pos_cache[true] = random.choice(cowboy_tp_array.exclude(eventPlayer.pos_cache))
    cowboy_tp()


def cowboy_tp():
    @Name "cowboy tp subr"

    while eventPlayer.has_status:
        wait(wait)
    while eventPlayer.took_knockback:
        wait(wait)
    while eventPlayer.tping:
        wait(wait)
    eventPlayer.tping = true
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    eventPlayer.trail_cache = worldVector(Vector.UP, eventPlayer, Transform.ROTATION_AND_TRANSLATION)
    wait(0.25)
    eventPlayer.pos_cache[false] = eventPlayer.pos_cache[true]
    eventPlayer.teleport(eventPlayer.pos_cache[0])
    eventPlayer.trail = 1
    chaseAtRate(eventPlayer.trail, false, 2)
    wait(false)
    if eventPlayer.isDead():
        return
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer, eventPlayer.pos_cache[0]) * (1 if distance(eventPlayer, eventPlayer.pos_cache[0]) > true else eventPlayer.strafe), 1, Relativity.TO_WORLD)
    playEffect(getAllPlayers(), DynamicEffect.CASSIDY_FLASHBANG_EXPLOSION, Team.1, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.CASSIDY_FLASHBANG_EXPLOSION_SOUND, Team.1, eventPlayer.getEyePosition(), 200)
    eventPlayer.tping = false


rule "cowboy special attack":
    @Event eachPlayer
    @Team 1
    @Hero cassidy
    @Condition phase == 14

    wait(random.uniform(5, 7))
    waitUntil(not eventPlayer.tping, 1)
    if not eventPlayer.boss_phase and eventPlayer.getNormalizedHealth() < 0.5:
        eventPlayer.attack = 3
        eventPlayer.boss_phase = true
    else:
        eventPlayer.attack = random.randint(true, 3 if eventPlayer.boss_phase else 2)
    waitUntil(not eventPlayer.attack, 15)
    if ruleCondition:
        loop()


rule "cowboy dead cutscene":
    @Condition phase == 14
    @Condition boss.getHealth() == false

    boss.attack = 5
    objective_complete = true
    getPlayers(Team.2).euros += 300
    euros_total += 300
    getPlayers(Team.2).real += 100
    real_total += 100
    phase = 15
    wait(true)
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(70.511, 14.07, -98.653)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "Bullets proved futile against the dark entities, and the once-zestful Gunslinger was vanquished from his glorious life.", 1], [Hero.JUNKRAT, "Poor Jason McDerulo. I'm gonna miss that bucko.", 1], [Hero.MERCY, "Save the squalling for another night, Doctor. We must make haste! Reaper?", 1], [Hero.REAPER, "Do I have to.", 1], [Hero.MERCY, "Come on, out with it. Or I'll revoke your immortality privileges. ", 1], [Hero.REAPER, "*long, heavy sigh*", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    objective = "Perform the ritual at the bridge."
    async(obj_color, AsyncBehavior.RESTART)
    objective_complete = false
    phase = 16
    destroyDummy(Team.1, boss.getSlot())
    createDummy(Hero.MOIRA, Team.2, 5, _extendedGlobalCollection, vect(0.22, false, 0.95))
    merchant = getLastCreatedEntity()
    wait(5)
    objective_pos = vect(84.923, 14.448, -100.295)
    pentagram_pos = raycast(vect(77.842, 13.935, -98.146), vect(77.842, 13.935, -98.146) + Vector.DOWN, null, null, true).getHitPosition() + Vector.DOWN * 0.1


rule "tp dead body":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_downed == true
    @Condition abs(eventPlayer.getPosition().y - eventPlayer.pos_cache.y) > 5

    eventPlayer.teleport(eventPlayer.pos_cache)
    wait(0.25)
    if ruleCondition:
        loop()


rule "summoner intro cutscene":
    @Condition phase == 16
    @Condition objective_pos.y < 100
    @Condition (all([distance(i, objective_pos) < 4 for i in [player for player in getPlayers(Team.2) if not player.isDummy()]])) == true

    stopChasingVariable(shop_angle)
    door_color = Color.WHITE
    summoner_color = Color.ORANGE
    door_health = 100
    summoner_power = 100
    zomnic_spawns = [vect(56.839, 17.72, -110.326), vect(74.472, 10.7, -110.592), vect(101.742, 9.58, -92.779)]
    door = vect(89.089, 14.071, -63.589)
    summoner_chars = "ηπραγματικότητασκύβειστηθέλησήμουΗΠΡΑΓΜΑΤΙΚΟΤΗΤΑΕΠΙΤΥΧΕΙΣΤΗ ΘΕΛΗΣΗΜΟΥ"
    merchant.forceButtonPress(Button.ABILITY_1)
    objective_pos = _extendedGlobalCollection
    destroyDummy(Team.1, merchant.attack.getSlot())
    shop_open = false
    wait(0.4)
    destroyDummy(Team.2, 5)
    chaseAtRate(pentagram_radius, 3, 0.316)
    createEffect(getAllPlayers(), Effect.SIGMA_GRAVITIC_FLUX_TARGET_SOUND, Team.1, pentagram_pos, pentagram_radius * 66.666, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    pentagram_effects = getLastCreatedEntity()
    createEffect(getAllPlayers(), Effect.RING, Color.RED, pentagram_pos + Vector.UP * 0.001, pentagram_radius + 0.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    pentagram_effects.append(getLastCreatedEntity())
    for i4 in range(0, 5, true):
        wait(1.5)
        createBeam(getAllPlayers(), Beam.MOIRA_ORB_DAMAGE, pentagram_pos + ((directionFromAngles(pentagram_angle + 216 * evalOnce(i4), 0)) * pentagram_radius), pentagram_pos + ((directionFromAngles(pentagram_angle + 216 * evalOnce(i4), 0)) * pentagram_radius) + ((vectorTowards(pentagram_pos + ((directionFromAngles(pentagram_angle + 216 * evalOnce(i4), 0)) * pentagram_radius), pentagram_pos + ((directionFromAngles(pentagram_angle + (216 * (evalOnce(i4 + true))), 0)) * pentagram_radius))) * (min(true, max(false, getTotalTimeElapsed() - evalOnce(getTotalTimeElapsed()) + 0.2)))), Team.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        _classIndexes[i4] = getLastCreatedEntity()
    wait(2)
    objective_complete = true
    if dialogue_priority >= 3:
        return
    dialogue_priority = 2
    skip_cutscene_pos = vect(70.511, 14.07, -98.653)
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "The air became charged with the arcane, as the Summoner appeared in their midst!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    destroyEffect(pentagram_effects[0])
    for i4 in range(0, 5, true):
        destroyEffect(_classIndexes[i4])
        createBeam(getAllPlayers(), Beam.MOIRA_ORB_DAMAGE, pentagram_pos + ((directionFromAngles(5 + pentagram_angle + 216 * evalOnce(i4), 0)) * pentagram_radius), pentagram_pos + ((directionFromAngles(5 + pentagram_angle + (216 * (evalOnce(i4 + true))), 0)) * pentagram_radius), Team.1, EffectReeval.VISIBILITY)
        pentagram_effects.append(getLastCreatedEntity())
    skip_cutscene_pos = _extendedGlobalCollection
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_EMP_EXPLOSION_SOUND, Color.ORANGE, pentagram_pos, 200)
    wait(0.2)
    setSlowMotion(20)
    no_hud = true
    createDummy(Hero.SYMMETRA, Team.2, 6, pentagram_pos, vect(0.24, false, 0.97))
    summoner = getLastCreatedEntity()
    boss = getLastCreatedEntity()
    getLastCreatedEntity().boss_ID = 0.1
    wait(1.5)
    setSlowMotion(100)
    return_cam = true
    wait(false)
    return_cam = false
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(86.109, 13.219, -101.193)
    dialogue_priority = 2
    no_hud = false
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.SYMMETRA, "I have been summoned!", 1], [Hero.JUNKRAT, "Satya! Jolly good to see your draconic mug again!", 1], [Hero.SYMMETRA, "As with you all, old comrades.", 1], [Hero.SYMMETRA, "My, my, Monster, how you've grown since I last saw you!", 1], [Hero.ROADHOG, "Thanks. I've been stitching random people to my body.", 1], [Hero.SYMMETRA, "...Grim Reaper.", 1], [Hero.REAPER, "Summoner.", 1], [Hero.SYMMETRA, "Not even going to ask how Vritra and Kāliya are doing?", 1], [Hero.REAPER, "I'm sure they're doing just fine under your care.", 1], [Hero.SYMMETRA, "…", 1], [Hero.SYMMETRA, "Gabriel, listen. I'm not happy about what happened either.", 1], [Hero.SYMMETRA, "But you need to understand-", 0.2], [Hero.MERCY, "Boo-hoo, sob story, marital issues and emotional trauma, nobody cares.", 1], [Hero.MERCY, "Great Summoner, we evoke your power to aid us in our siege!", 1], [Hero.SYMMETRA, "You haven't changed one bit, Wicked Witch.", 1], [Hero.JUNKRAT, "Righty tighty, so here's the sitch. We wanna blow up that big flippin' door over yonder.", 1], [Hero.JUNKRAT, "Think you can summon us a few extra hands?", 1], [Hero.SYMMETRA, "Am I to follow that ridiculous ''Zomnic'' schematic of yours again?", 1], [Hero.JUNKRAT, "Just like old times, Dragon Breath.", 1], [Hero.SYMMETRA, "Just like old times, Mad Doctor.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    objective = "Protect The Zomnics."
    async(obj_color, AsyncBehavior.RESTART)
    objective_complete = false
    wait(true)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_EMP_EXPLOSION_SOUND, Color.ORANGE, pentagram_pos, 200)
    wait(0.2)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, pentagram_pos, 2)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.RED, pentagram_pos + Vector.UP, 14)
    createBeam(getAllPlayers(), Beam.MOIRA_COALESCENCE, pentagram_pos, pentagram_pos + Vector.UP * 70, Team.1, EffectReeval.VISIBILITY)
    summoner_effects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.WRECKING_BALL_PILEDRIVER_FIRE_SOUND, Team.1, pentagram_pos, 100, EffectReeval.VISIBILITY)
    summoner_effects.append(getLastCreatedEntity())
    createProgressBarInWorldText(getAllPlayers(), door_health, "{0} Castle Door's Health".format(abilityIconString(Hero.BRIGITTE, Button.SECONDARY_FIRE)), door + Vector.UP * 8, 1, Clip.NONE, Color.WHITE, Color.WHITE, ProgressWorldTextReeval.VISIBILITY_AND_VALUES)
    summoner_effects.append(getLastCreatedText())
    createProgressBarInWorldText(getAllPlayers(), summoner_power, "{0} Summoner's Power".format(abilityIconString(Hero.MOIRA, Button.ULTIMATE)), pentagram_pos + Vector.UP * 4, 1, Clip.NONE, Color.ORANGE, Color.ORANGE, ProgressWorldTextReeval.VISIBILITY_AND_VALUES)
    summoner_effects.append(getLastCreatedText())
    destroyDummy(Team.2, 6)
    for i5 in range(1, 6, true):
        createInWorldText(getAllPlayers(), summoner_chars.charAt(floor((getTotalTimeElapsed() * 10 + evalOnce(i5)) % strLen(summoner_chars))), pentagram_pos + Vector.UP * 0.6 * evalOnce(i5) + ((directionFromAngles(((1 if evalOnce(i5) % 2 == null else -1) * (getTotalTimeElapsed() - evalOnce(getTotalTimeElapsed()))) * evalOnce(random.uniform(180, 500)), 0)) * evalOnce(random.uniform(2, 4))), evalOnce(random.uniform(1.5, 2)), Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.ORANGE)
        summoner_effects.append(getLastCreatedText())
        wait(0.1)
    phase = 17
    for i5 in range(7, 10, true):
        wait(5)
        createDummy(Hero.ZENYATTA, Team.2, i5, zomnic_spawns[i5 - 7], vect(0.24, false, 0.97))
        getLastCreatedEntity().zomnic = 1


def boss_zoomin():
    @Name "zoom in subr"

    eventPlayer.cutscene_cam_speedup = false
    eventPlayer.cutscene_cam_pos = eventPlayer.getEyePosition()
    eventPlayer.cutscene_cam_lookat = eventPlayer.getEyePosition() + eventPlayer.getFacingDirection()
    eventPlayer.startCamera(eventPlayer.cutscene_cam_pos, eventPlayer.cutscene_cam_lookat, 50)
    wait(false)
    chaseAtRate(eventPlayer.cutscene_cam_pos, worldVector(([vect(false, 1.5, 3), vect(false, -1, 3), vect(false, false, 3.5), vect(false, -1, 3), vect(false, 0.5, 3)])[boss.boss_ID], boss, Transform.ROTATION_AND_TRANSLATION), eventPlayer.cutscene_cam_speedup)
    chaseAtRate(eventPlayer.cutscene_cam_lookat, boss.getEyePosition(), eventPlayer.cutscene_cam_speedup)
    chaseAtRate(eventPlayer.cutscene_cam_speedup, 150, 150)


rule "dragon blood hint":
    @Condition phase == 11
    @Condition hint >= 60

    wait(3)
    hint = null
    chaseAtRate(hint, 60, true)
    if ruleCondition:
        loop()


rule "summoner vocalisation":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.isDummy() == false
    @Condition main_speaker == Hero.SYMMETRA
    @Condition vocalisation == true
    @Condition entityExists(summoner) == false

    playEffect(eventPlayer, DynamicEffect.SYMMETRA_TELEPORTER_REAPPEAR_SOUND, Team.1, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection(), 100)
    wait(0.1)
    if ruleCondition:
        loop()


rule "zomnic explode":
    @Event eachPlayer
    @Team 2
    @Hero zenyatta
    @Condition eventPlayer.zomnic == 1
    @Condition eventPlayer.isAlive() == true

    while distance(eventPlayer, door) > 2:
        wait(wait)
    eventPlayer.exploding = null
    eventPlayer.stopFacing()
    eventPlayer.setStatusEffect(null, Status.ROOTED, 9999)
    chaseAtRate(eventPlayer.exploding, 6, 6)
    eventPlayer.startScalingSize(true + eventPlayer.exploding * 0.1)
    createEffect(getAllPlayers() if ceil(eventPlayer.exploding) % 2 else [], Effect.ECHO_CLONING, Team.1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.trail = getLastCreatedEntity()
    wait(true, Wait.ABORT_WHEN_FALSE)
    playEffect(getAllPlayers(), DynamicEffect.JUNKRAT_RIP_TIRE_EXPLOSION, Team.2, eventPlayer.getPosition() + Vector.UP, 1.5)
    playEffect(getAllPlayers(), DynamicEffect.SIGMA_ACCRETION_IMPACT, Team.1, eventPlayer.getPosition() + Vector.UP, 1.5)
    playEffect(getAllPlayers(), DynamicEffect.JUNKRAT_RIP_TIRE_EXPLOSION_SOUND, Team.1, eventPlayer.getEyePosition(), 200)
    door_health -= 10 if difficulty == -1 else 5
    eventPlayer.grillager_victims = [player for player in getPlayersInRadius(eventPlayer, 5, Team.1, LosCheck.SURFACES) if player.enemy_ID]
    for eventPlayer.i in range(0, len(eventPlayer.grillager_victims), true):
        damage(eventPlayer.grillager_victims[evalOnce(eventPlayer.i)], eventPlayer, 40 * (6 - distance(eventPlayer, eventPlayer.grillager_victims[evalOnce(eventPlayer.i)])))
        eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].applyImpulse(directionTowards(eventPlayer, eventPlayer.grillager_victims[evalOnce(eventPlayer.i)]) + Vector.UP * 0.7, 20, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].took_knockback = 1
        chaseAtRate(eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].took_knockback, false, true)
    wait(0.03)
    eventPlayer.teleport(compressBakeMatcher)


rule "phase 18/20 spawning event":
    @Condition phase in [18, 20] == true

    while not getNumberOfDeadPlayers(Team.1):
        wait(wait)
    wait(random.uniform(0.5, 1.5))
    if phase in [18, 20] and getNumberOfDeadPlayers(Team.1):
        enemy_ID_sequence = [10 if (random.uniform(0, 100) < (7 if difficulty == 3 else -1)) else random.choice((5 if random.uniform(0, 100) < 35 else random.randint(true, 7)).concat([] if len([player for player in getPlayersOnHero(Hero.BRIGITTE, Team.1) if player.isAlive()]) >= 2 else 26 if (random.uniform(0, 100) < (20 if difficulty == 3 else -1)) else random.randint(21, 24)))]
        spawn_enemies()
    if ruleCondition:
        loop()


rule "no more enemies phase 12":
    @Condition phase == 12
    @Condition getNumberOfLivingPlayers(Team.1) <= true

    wait(true)
    if not ruleCondition:
        loop()
    objective_pos = vect(77.842, 13.935, -98.146)


rule "zomnic dead":
    @Event playerDied
    @Team 2
    @Hero zenyatta

    eventPlayer.start_pathfind = false
    playEffect(getAllPlayers(), DynamicEffect.SIGMA_ACCRETION_IMPACT, Team.2, worldVector(Vector.UP, eventPlayer, Transform.ROTATION_AND_TRANSLATION), 1)
    playEffect(getAllPlayers(), DynamicEffect.JUNKRAT_CONCUSSION_MINE_EXPLOSION_SOUND, Team.2, eventPlayer.getEyePosition(), 200)
    playEffect(getAllPlayers(), DynamicEffect.WRECKING_BALL_PILEDRIVER_IMPACT, Team.2, worldVector(Vector.UP, eventPlayer, Transform.ROTATION_AND_TRANSLATION), 1)
    wait(true)
    if eventPlayer.zomnic == 2:
        destroyDummy(Team.2, eventPlayer.getSlot())
    else:
        eventPlayer.teleport(compressBakeMatcher)
        wait(random.uniform(4, 6))
        waitUntil(phase != 19, 99999)
        if phase == 21:
            destroyDummy(Team.2, eventPlayer.getSlot())
        elif eventPlayer.zomnic:
            if eventPlayer.isAlive():
                return
            eventPlayer.resurrect()
            eventPlayer.teleport(random.choice(zomnic_spawns))
            eventPlayer.clearStatusEffect(Status.ROOTED)
            eventPlayer.stopScalingSize()
            destroyEffect(eventPlayer.trail)
            stopChasingVariable(eventPlayer.exploding)


rule "first zomnic rises":
    @Condition phase == 17
    @Condition len([player for player in getPlayersOnHero(Hero.ZENYATTA, Team.ALL) if player.zomnic == 1]) > false

    wait(true)
    destroyDummy(Team.1, 6)
    if dialogue_priority > 2:
        return
    skip_cutscene_pos = vect(84.326, 13.76, -81.319)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "Dr.\u200b Junkenstein laughed as his minions arose, for tonight was the night of Junkenstein's revenge.", 1], [Hero.JUNKRAT, "Have at it, Summoner! I wanna see blood, gore and exploooosions!", 1], [Hero.REAPER, "I want to go to Brazil." if sombra_egg == 69 else "I want to go home.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 18
    enemy_ID_sequence = [random.randint(true, 4), random.randint(true, 4), random.randint(true, 4), random.randint(21, 23), random.randint(21, 23)]
    spawn_enemies()


rule "first zomnic explodes":
    @Condition phase == 18
    @Condition door_health < 100

    if dialogue_priority > true:
        return
    dialogue_priority = 1
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "Boom! Boom! The Zomnics crashed against the door,", 1], [Hero.REINHARDT, "Their bodies exploding as the old wood splintered and shuddered.", 1.5]]
    main_dialogue()
    dialogue_priority = false


rule "zomnic path correct":
    @Event eachPlayer
    @Team 2
    @Hero zenyatta
    @Condition eventPlayer.zomnic_top == true

    while distance(eventPlayer, eventPlayer.zomnic_dest) > 2:
        wait(wait)
    eventPlayer.zomnic_dest = door
    eventPlayer.zomnic_top = false
    eventPlayer.start_pathfind = false
    wait(wait * 3)
    eventPlayer.start_pathfind = true


rule "zomnic stuck too long":
    @Event eachPlayer
    @Team 2
    @Hero zenyatta
    @Condition eventPlayer.zomnic == 1
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.getThrottle() != vect(false, false, false)
    @Condition eventPlayer.getSpeedInDirection(worldVector(eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION)) < 1

    wait(1.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.start_pathfind = false
    wait(wait * 3)
    eventPlayer.start_pathfind = true


rule "summoner 33% power":
    @Condition phase in [18, 20] == true
    @Condition summoner_power <= 33

    if dialogue_priority > true:
        return
    dialogue_priority = 1
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.SYMMETRA, "My power… is running out! Stop letting… those mortals… destroy my zomnics!", 1], [Hero.JUNKRAT, "Our zomnics, ahem. I designed those puppies, thank you very much.", 1], [Hero.SYMMETRA, "…Focus, Mad Doctor!", 1.5]]
    main_dialogue()
    dialogue_priority = false


rule "summoner out of power":
    @Condition phase in [18, 20] == true
    @Condition summoner_power <= null

    kill(getPlayersOnHero(Hero.ZENYATTA, Team.2))
    phase = 18.1
    if dialogue_priority > 2:
        return
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.SYMMETRA, "This… is the end for me… My apologies, comrades.", 1.5]]
    main_dialogue()
    destroyDummy(Team.2, 7)
    destroyDummy(Team.2, 8)
    destroyDummy(Team.2, 9)
    dialogue_priority = false
    destroyAllProgressBarHuds()
    destroyDummy(Team.1, 7)
    dialogue_bot.startForcingHero(Hero.SYMMETRA)
    while summoner_effects != []:
        destroyEffect(summoner_effects[0])
        destroyInWorldText(summoner_effects[0])
        del summoner_effects[false]
    wait(false)
    createDummy(Hero.SYMMETRA, Team.2, 6, pentagram_pos, vect(0.24, false, 0.97))
    getLastCreatedEntity().dead_summoner = true


rule "door 66% health - alchemist intro cutscene":
    @Condition phase == 18
    @Condition door_health <= 66

    dialogue_bot.startForcingHero(Hero.ANA)
    ana_spawn_fix = true
    if dialogue_priority > 2:
        return
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "The door held for now, but the attacks continued.", 1], [Hero.REINHARDT, "In the midst of the battle, the Lord's most powerful ally appeared!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    phase = 19
    wait(0.2)
    destroyDummy(Team.1, true)
    destroyDummy(Team.1, 2)
    destroyDummy(Team.1, 3)
    destroyDummy(Team.1, 4)
    destroyDummy(Team.1, 5)
    destroyDummy(Team.1, 6)
    setSlowMotion(20)
    no_hud = true
    getPlayersOnHero(Hero.ZENYATTA, Team.2).setStatusEffect(null, Status.ASLEEP, 9999)
    getPlayersOnHero(Hero.ZENYATTA, Team.2).setStatusEffect(null, Status.PHASED_OUT, 9999)
    createDummy(Hero.ANA, Team.1, 7, vect(89.347, 20.914, -62.717), vect(-0.21, -0.44, -0.91))
    boss = getLastCreatedEntity()
    getLastCreatedEntity().pre_init = true
    getLastCreatedEntity().boss_ID = 3
    wait(1.5)
    setSlowMotion(100)
    return_cam = true
    ana_spawn_fix = false
    boss.startFacing(directionTowards(boss.getEyePosition(), boss.target.getEyePosition()), 1000)
    wait(false)
    return_cam = false
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(84.326, 13.76, -81.319)
    dialogue_priority = 2
    no_hud = false
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    if sombra_egg == 69:
        active_dialogue_list = [[Hero.REINHARDT, "The mighty alchemist, too, had conquered death through her own noble means.", 1], [Hero.REINHARDT, "She vowed to protect the Lord with this newfound power and her trusty arsenal of potions.", 1], [Hero.ANA, "Junkenstein, your 'science' has driven you into stark madness and malice.", 1], [Hero.ANA, "You are no doctor at all.", 1], [Hero.JUNKRAT, "Pára de dizer merda! I didn't endure six years of student loans just to be mocked by some cranky granny!", 1], [Hero.JUNKRAT, "I'll have ya know I own an actual PhD, a sério!", 1], [Hero.ANA, "Wait. Was that Portuguese just now?", 1], [Hero.JUNKRAT, "Brazilian! Christ's sake, it's Brazilian! You people have no respect for foreign cultures!", 1], [Hero.ANA, "If someone like you is speaking Portuguese, that can only mean one thing...", 1], [Hero.ANA, "...Oh sweet Jesus, I'm so screwed, aren't I.", 1], [Hero.REAPER, "All of us are, actually. The economy's completely ruined after our splurging.", 1], [Hero.REAPER, "Just imagine how inflated the currency is gonna be in a week. Literal shivers.", 1], [Hero.MERCY, "Nerd.", 1], [Hero.JUNKRAT, "Do not patronize me, dear Alchemist. I'll show you. I'll show all of you!", 1], [Hero.JUNKRAT, "You will all regret the day you hue'd at Dr.\u200b Jamison Junkenstein!", 1.5]]
    else:
        active_dialogue_list = [[Hero.REINHARDT, "The mighty alchemist, too, had conquered death through her own noble means.", 1], [Hero.REINHARDT, "She vowed to protect the Lord with this newfound power and her trusty arsenal of potions.", 1], [Hero.ANA, "Junkenstein, your 'science' has driven you into stark madness and malice.", 1], [Hero.ANA, "You are no doctor at all.", 1], [Hero.JUNKRAT, "Baloney! I didn't endure six years of student loans just to be mocked by some cranky granny!", 1], [Hero.JUNKRAT, "I'll have ya know I own an actual PhD, fair dinkum!", 1], [Hero.MERCY, "Peh, who needs an actual degree when you've got witchcraft?", 1], [Hero.ROADHOG, "For the record, I have a degree in gothic literature.", 1], [Hero.REAPER, "I have a degree in finance and accounting.", 1], [Hero.MERCY, "Mein gott, accounting? No wonder why you're so miserable all the time.", 1], [Hero.ANA, "Enough with this chatter! With my unique alchemical concoction, I am impervious to your attacks.", 1], [Hero.ANA, "This is the end of your story, Junkenstein.", 1], [Hero.JUNKRAT, "I don't think so, dear Alchemist. I'll show you. I'll show all of you!", 1], [Hero.JUNKRAT, "You will all regret the day you laughed at Dr.\u200b Jamison Junkenstein!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 20
    dialogue_bot.startForcingHero(Hero.ANA)
    getPlayersOnHero(Hero.ZENYATTA, Team.2).clearStatusEffect(Status.ASLEEP)
    getPlayersOnHero(Hero.ZENYATTA, Team.2).clearStatusEffect(Status.PHASED_OUT)
    wait(0.5)
    for i7 in range(0, 4, true):
        createDummy(Hero.BRIGITTE if i7 % 2 else Hero.TORBJORN, Team.1, i7 + true, random.choice(enemy_spawn), Vector.UP)
        getLastCreatedEntity().enemy_ID = [3, 22, 5, 24][i7]
        wait(0.2)


rule "ana init":
    @Event eachPlayer
    @Team 1
    @Hero ana
    @Condition phase == 20
    @Condition eventPlayer.boss_ID == 3

    eventPlayer.ana_target_friends = true
    eventPlayer.avoid_enviro = true
    eventPlayer.pre_init = false
    eventPlayer.setProjectileGravity(30)
    eventPlayer.damage_dealt = 30 + 10 * difficulty
    eventPlayer.damage_received = 130 - 15 * difficulty
    eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
    eventPlayer.setDamageReceived(eventPlayer.damage_received)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 9999)
    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    createEffect(getAllPlayers(), Effect.CLOUD, Color.VIOLET, eventPlayer.gas_pos, eventPlayer.gas_radius, EffectReeval.POSITION_AND_RADIUS)
    createEffect(getAllPlayers(), Effect.RING, Color.VIOLET, eventPlayer.gas_pos, eventPlayer.gas_radius, EffectReeval.POSITION_AND_RADIUS)
    eventPlayer.startForcingPosition(vect(89.137, 20, -63.627), false)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), raycast(eventPlayer.target.getEyePosition(), eventPlayer.target.getEyePosition() + Vector.DOWN * 10, null, null, true).getHitPosition() if eventPlayer.attack > false else eventPlayer.target.getEyePosition()), 1000)


rule "ana normal attack":
    @Event eachPlayer
    @Team 1
    @Hero ana
    @Condition phase == 20
    @Condition eventPlayer.boss_ID == 3

    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(random.uniform(0.8, 1.5))
    if ruleCondition:
        loop()


rule "ana special attack":
    @Event eachPlayer
    @Team 1
    @Hero ana
    @Condition phase == 20
    @Condition eventPlayer.boss_ID == 3

    wait(random.uniform(3, 5))
    waitUntil(not eventPlayer.attack, 99999)
    if door_health <= false:
        return
    eventPlayer.attack = random.randint(2 if eventPlayer.gas_radius else 1, 4 if door_health < 33.333 else 3)
    waitUntil(not eventPlayer.attack, 99999)
    if ruleCondition:
        loop()


rule "ana gas destroy":
    @Event eachPlayer
    @Team 1
    @Hero ana
    @Condition eventPlayer.gas_radius >= 6

    wait(6)
    chaseAtRate(eventPlayer.gas_radius, false, 6)
    wait(1.1)
    eventPlayer.gas_pos = _extendedGlobalCollection
    stopChasingVariable(eventPlayer.gas_radius)


rule "player poisoned":
    @Event eachPlayer
    @Team 2
    @Condition phase == 20
    @Condition boss.gas_radius > false
    @Condition eventPlayer.hasStatus(Status.PHASED_OUT) == false

    if distance(eventPlayer, boss.gas_pos) < boss.gas_radius:
        eventPlayer.poisoned = 5
    wait(wait)
    if ruleCondition:
        loop()


rule "poison damage":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.poisoned > false

    chaseAtRate(eventPlayer.poisoned, false, true, ChaseRateReeval.NONE)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.VIOLET, eventPlayer, true, EffectReeval.POSITION_AND_RADIUS)
    eventPlayer.poison_effect.append(getLastCreatedEntity())
    createEffect(eventPlayer, Effect.WIDOWMAKER_VENOM_MINE_TARGET, Team.2, eventPlayer, true, EffectReeval.POSITION_AND_RADIUS)
    eventPlayer.poison_effect.append(getLastCreatedEntity())
    while eventPlayer.poisoned:
        damage(eventPlayer, boss, 2 + difficulty * 1.25)
        wait(0.2)
    while eventPlayer.poison_effect != []:
        destroyEffect(eventPlayer.poison_effect[0])
        del eventPlayer.poison_effect[false]


rule "speed boost":
    @Event eachPlayer
    @Condition eventPlayer.speed_boosted > false
    @Condition eventPlayer.zomnic == false

    eventPlayer.throttle_mag = true
    if eventPlayer.getTeam() == Team.1:
        createEffect(getAllPlayers(), Effect.SIGMA_GRAVITIC_FLUX_TARGET, Team.1, eventPlayer, true, EffectReeval.POSITION_AND_RADIUS)
    else:
        createEffect(getAllPlayers(), Effect.ANA_SLEEPING, Team.2, eventPlayer, true, EffectReeval.POSITION_AND_RADIUS)
    eventPlayer.speed_effect = getLastCreatedEntity()
    chaseAtRate(eventPlayer.speed_boosted, false, true)
    eventPlayer.setMoveSpeed(eventPlayer.speed * 1.5 if eventPlayer.getTeam() == Team.1 else eventPlayer.speed * 0.5)
    waitUntil(not eventPlayer.speed_boosted, 99999)
    eventPlayer.setMoveSpeed(eventPlayer.speed)
    destroyEffect(eventPlayer.speed_effect)
    stopChasingVariable(eventPlayer.speed_boosted)


rule "blinded":
    @Event eachPlayer
    @Team 2
    @Condition phase == 20
    @Condition defeat == false
    @Condition eventPlayer.blind > false
    @Condition eventPlayer.isDummy() == false

    chaseAtRate(eventPlayer.blind, false, true)
    eventPlayer.blind_radius = 200
    eventPlayer.disableHeroHud()
    getAllPlayers().startForcingOutlineFor(eventPlayer, false, Color.BLACK)
    getAllPlayers().disableNameplatesFor(eventPlayer)
    createEffect(eventPlayer, Effect.SPHERE, Color.BLACK, eventPlayer, eventPlayer.blind_radius, EffectReeval.POSITION_AND_RADIUS)
    eventPlayer.boss_effects.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.CASSIDY_FLASHBANG_STUNNED, Team.2, eventPlayer, true, EffectReeval.POSITION_AND_RADIUS)
    eventPlayer.boss_effects.append(getLastCreatedEntity())
    waitUntil(not eventPlayer.blind, 99999)
    chaseAtRate(eventPlayer.blind_radius, false, 400)
    waitUntil(not eventPlayer.blind_radius, 99999)
    getAllPlayers().stopForcingOutlineFor(eventPlayer)
    getAllPlayers().enableNameplatesFor(eventPlayer)
    eventPlayer.enableHeroHud()
    while eventPlayer.boss_effects != []:
        destroyEffect(eventPlayer.boss_effects[0])
        del eventPlayer.boss_effects[false]
    stopChasingVariable(eventPlayer.blind)
    stopChasingVariable(eventPlayer.blind_radius)


rule "door <36% health":
    @Condition phase > 18
    @Condition door_health <= 36

    if dialogue_priority > true:
        return
    dialogue_priority = 1
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "The doors shuddered under the relentless assault!", 1], [Hero.ANA, "It cannot be… my concoction's effects are fading!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    ana_start_nana = true
    waitUntil(door_health <= 22, 99999)
    createDummy(Hero.TORBJORN, Team.1, true, random.choice(enemy_spawn), Vector.UP)
    getLastCreatedEntity().enemy_ID = 8
    if difficulty > true:
        waitUntil(door_health <= 11, 99999)
        createDummy(Hero.TORBJORN, Team.1, 2, random.choice(enemy_spawn), Vector.UP)
        getLastCreatedEntity().enemy_ID = 9 if difficulty == 3 else 8


rule "nano effect":
    @Event eachPlayer
    @Condition eventPlayer.nano > false

    if eventPlayer.getHero() == Hero.ANA:
        return
    createEffect(getAllPlayers(), Effect.ANA_NANO_BOOSTED, eventPlayer.getTeam(), eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.nano_effect.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.ANA_NANO_BOOSTED_SOUND, eventPlayer.getTeam(), eventPlayer, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.nano_effect.append(getLastCreatedEntity())
    chaseAtRate(eventPlayer.nano, false, true, ChaseRateReeval.NONE)
    eventPlayer.setDamageDealt(eventPlayer.damage_dealt * 1.5)
    eventPlayer.setDamageReceived(eventPlayer.damage_received * 0.5)
    waitUntil(not eventPlayer.nano, 99999)
    eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
    eventPlayer.setDamageReceived(eventPlayer.damage_received)
    stopChasingVariable(eventPlayer.nano)
    while eventPlayer.nano_effect != []:
        destroyEffect(eventPlayer.nano_effect[0])
        del eventPlayer.nano_effect[false]


rule "door 0 health - ana dies cutscene":
    @Condition phase == 20
    @Condition door_health <= null

    objective_complete = true
    destroyEffect(boss.trail[0])
    destroyEffect(boss.trail[true])
    boss.clearStatusEffect(Status.INVINCIBLE)
    boss.setStatusEffect(null, Status.STUNNED, 9999)
    if dialogue_priority > 2:
        return
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.ANA, "My Lord… I have failed you… I pray for your safety…", 1.5]]
    main_dialogue()
    dialogue_priority = false
    phase = 21
    playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, Team.1, door, 200)
    playEffect(getAllPlayers(), DynamicEffect.DVA_SELF_DESTRUCT_EXPLOSION_SOUND, Team.1, door, 200)
    boss.stopForcingPosition()
    wait(0.2)
    door_explosion_victims = getPlayersInRadius(door, 20, Team.ALL)
    for i3 in range(0, len(door_explosion_victims), true):
        door_explosion_victims[evalOnce(i3)].applyImpulse(directionFromAngles(horizontalAngleOfDirection(directionTowards(door, door_explosion_victims[evalOnce(i3)])), -30), 20, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(false)
    getPlayers(Team.2).euros += 300
    euros_total += 300
    getPlayers(Team.2).real += 100
    real_total += 100
    playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_METEOR_STRIKE_IMPACT_SOUND, Team.1, door, 200)
    playEffect(getAllPlayers(), DynamicEffect.SIGMA_ACCRETION_IMPACT_SOUND, Team.1, door, 200)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, door + Vector.UP * 4, 30)
    playEffect(getAllPlayers(), DynamicEffect.JUNKRAT_RIP_TIRE_EXPLOSION, Team.1, door + Vector.UP * 4, 1)
    playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_METEOR_STRIKE_IMPACT, Team.1, door, 1)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.ORANGE, door + Vector.UP * 4, 20)
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.GRAY, door + Vector.UP * 4, 8, EffectReeval.NONE)
    kill(getPlayers(Team.1).exclude(dialogue_bot))
    destroyAllProgressBarInWorldTexts()
    kill([player for player in getPlayersOnHero(Hero.ZENYATTA, Team.2) if player.zomnic == 1])
    wait(2)
    destroyDummy(Team.1, 7)
    destroyDummy(Team.2, 7)
    destroyDummy(Team.2, 8)
    destroyDummy(Team.2, 9)
    dialogue_bot.startForcingHero(Hero.SYMMETRA)
    wait(0.1)
    while summoner_effects != []:
        destroyEffect(summoner_effects[0])
        destroyInWorldText(summoner_effects[0])
        del summoner_effects[false]
    createDummy(Hero.SYMMETRA, Team.2, 6, pentagram_pos, vect(0.24, false, 0.97))
    summoner = getLastCreatedEntity()
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(84.326, 13.76, -81.319)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "The Alchemist fought valiantly, but she could not stop Dr.\u200b Junkenstein and his creations.", 1], [Hero.REINHARDT, "As the potency of her alchemy wore off, so too did the vigour of her life,", 1], [Hero.REINHARDT, "as she collapsed along with the battered castle doors.", 1], [Hero.JUNKRAT, "That'll teach you to disrespect the Portuguese!" if sombra_egg == 69 else "That'll teach you to disrespect an academic!", 1], [Hero.SYMMETRA, "Huff… huff… I believe my job here is done, Mad Doctor.", 1], [Hero.MERCY, "Indeed, thank you kindly, great Summoner.", 1], [Hero.MERCY, "Now scram back to your demonic hole from whence you crawled.", 1], [Hero.SYMMETRA, "A pleasure as always, Wicked Witch.", 1], [Hero.SYMMETRA, "With that, I take my leave.", 1], [Hero.REAPER, "...Satya.", 1], [Hero.SYMMETRA, "Yes, Grim Reaper?", 1], [Hero.REAPER, "Tell the kids that I'm going to Brazil." if sombra_egg == 69 else "Tell the kids that I miss them.", 1], [Hero.SYMMETRA, "…", 1], [Hero.SYMMETRA, "...Um. Okay." if sombra_egg == 69 else "…They miss you too.", 1.5]]
    main_dialogue()
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_EMP_EXPLOSION_SOUND, Color.ORANGE, pentagram_pos, 200)
    wait(0.2)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, pentagram_pos, 2)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.RED, pentagram_pos + Vector.UP, 14)
    destroyDummy(Team.2, 6)
    while pentagram_effects != []:
        destroyEffect(pentagram_effects[0])
        del pentagram_effects[false]
    wait(2)
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.ROADHOG, "The castle all's open for our taking now.", 1], [Hero.ROADHOG, "It's time we end this, boss!", 1], [Hero.JUNKRAT, "Sapoaskapspaoks, I'm so excited! I can already taste the sweet nectar of revenge!" if sombra_egg == 69 else "Ohohoho, I'm so excited! I can already taste the sweet nectar of revenge!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 22
    objective = "Storm the castle."
    async(obj_color, AsyncBehavior.RESTART)
    objective_complete = false
    createDummy(Hero.MOIRA, Team.2, 5, _extendedGlobalCollection, vect(0.22, false, 0.95))
    merchant = getLastCreatedEntity()
    wait(5)
    objective_pos = door


rule "door exploding":
    @Condition phase == 20
    @Condition door_health <= null

    door_explosion = door + Vector.UP * random.uniform(0, 8) + vect(0.975, false, -0.221) * random.uniform(-2, 2)
    playEffect(getAllPlayers(), DynamicEffect.BASTION_TANK_CANNON_EXPLOSION_SOUND, Team.1, door_explosion, 100)
    playEffect(getAllPlayers(), DynamicEffect.JUNKRAT_CONCUSSION_MINE_EXPLOSION, Team.1, door_explosion, 1)
    wait(0.5)
    if ruleCondition:
        loop()


rule "ana friend target":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ana_target_friends == true

    eventPlayer.target = ((sorted([player for player in getLivingPlayers(Team.1) if isInLoS(eventPlayer.getEyePosition(), player.getEyePosition()) and player.enemy_ID], lambda i: i.getNormalizedHealth())).concat(eventPlayer.target))[0]
    wait(5, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


def shop_ui_setup():
    @Name "shop ui setup"

    chaseAtRate(shop_angle, 9999800320, 250, ChaseRateReeval.NONE)
    createInWorldText([player for player in getAllPlayers() if player.shop > false], "{0}{1}".format("▶ " if localPlayer.shop_selection == 69 else "", "[Exit Shop]" if localPlayer.shop == 1 else "[Back]"), ((shop_campos.last() + (shop_left * (-3.1 if localPlayer.shop_selection == 69 else -3))) + Vector.DOWN) + ((shop_left * (0.1 if localPlayer.shop_selection == 69 else false)) * sinDeg(shop_angle)), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #page 1
    createInWorldText([player for player in getAllPlayers() if player.shop == 1], "{0}Potions {1}".format("" if localPlayer.shop_selection else "▶ ", iconString(Icon.POISON_2)), shop_campos.last() + shop_left * 1.5 + (Vector.UP * sinDeg(shop_angle) * (false if localPlayer.shop_selection else 0.1)), 3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.PURPLE)
    createInWorldText([player for player in getAllPlayers() if player.shop == 1], "{0}Scrolls {1}".format("▶ " if localPlayer.shop_selection == 1 else "", iconString(Icon.SPIRAL)), shop_campos.last() + shop_left * -1.5 + ((Vector.UP * (0.1 if localPlayer.shop_selection == 1 else false)) * sinDeg(shop_angle)), 3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW)
    createInWorldText([player for player in getAllPlayers() if player.shop == 1], "Come forth and browse my alchemical goods,\u2028{0}Or gaze upon my collection of forbidden academia.".format(newline), shop_campos.last() + Vector.DOWN * 1.5, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, t2_hero_colours[6])
    #page 2
    for eventPlayer.i in range(0, 5, true):
        createInWorldText([player for player in getAllPlayers() if player.shop == 2], "{0}Potion of {1}".format("▶ " if localPlayer.shop_selection == evalOnce(eventPlayer.i) else "", ["Vengeance {0}".format(iconString(Icon.SKULL)), "Salvation {0}".format(abilityIconString(Hero.MERCY, Button.ABILITY_2)), "Endurance {0}".format(abilityIconString(Hero.BAPTISTE, Button.ABILITY_1)), "Frenzy {0}".format(abilityIconString(Hero.MOIRA, Button.ABILITY_1)), "More Gun {0}".format(abilityIconString(Hero.CASSIDY, Button.PRIMARY_FIRE))][evalOnce(eventPlayer.i)]), (shop_campos.last() + (Vector.UP * (true - 0.3 * evalOnce(eventPlayer.i))) + (shop_left * (1.4 if localPlayer.shop_selection == evalOnce(eventPlayer.i) else 1.5))) + (shop_left * sinDeg(shop_angle) * (0.1 if localPlayer.shop_selection == evalOnce(eventPlayer.i) and localPlayer.potions[evalOnce(eventPlayer.i)] < localPlayer.potions_max[evalOnce(eventPlayer.i)] and localPlayer.euros > potions_price[evalOnce(eventPlayer.i)] else false)), 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, [Color.RED, Color.YELLOW, Color.GREEN, Color.AQUA, Color.BLUE][evalOnce(eventPlayer.i)] if localPlayer.potions[evalOnce(eventPlayer.i)] < localPlayer.potions_max[evalOnce(eventPlayer.i)] and localPlayer.euros >= potions_price[evalOnce(eventPlayer.i)] else Color.GRAY)
        wait(false)
        eventPlayer.i += 5
        createInWorldText([player for player in getAllPlayers() if player.shop == 2], "{0}Potion of {1}".format("▶ " if localPlayer.shop_selection == evalOnce(eventPlayer.i) else "", ["Proficiency {0}".format(iconString(Icon.EYE)), "Vampirism {0}".format(abilityIconString(Hero.MOIRA, Button.ABILITY_2)), "Pyromancy {0}".format(iconString(Icon.FIRE)), "Necromancy {0}".format(abilityIconString(Hero.BAPTISTE, Button.ABILITY_2)), "Water {0}".format(abilityIconString(Hero.ROADHOG, Button.ABILITY_2))][evalOnce(eventPlayer.i) - 5]), (shop_campos.last() + (Vector.UP * (true - (0.3 * (evalOnce(eventPlayer.i) - 5)))) - (shop_left * (1.6 if localPlayer.shop_selection == evalOnce(eventPlayer.i) else 1.5))) + (shop_left * sinDeg(shop_angle) * (0.1 if localPlayer.shop_selection == evalOnce(eventPlayer.i) and localPlayer.potions[evalOnce(eventPlayer.i)] < localPlayer.potions_max[evalOnce(eventPlayer.i)] and localPlayer.euros > potions_price[evalOnce(eventPlayer.i)] else false)), 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, [Color.PURPLE, Color.ROSE, Color.ORANGE, rgb(112, 179, 134), Color.WHITE][evalOnce(eventPlayer.i) - 5] if localPlayer.potions[evalOnce(eventPlayer.i)] < localPlayer.potions_max[evalOnce(eventPlayer.i)] and localPlayer.euros >= potions_price[evalOnce(eventPlayer.i)] else Color.GRAY)
        wait(false)
        eventPlayer.i -= 5
    createInWorldText([player for player in getAllPlayers() if player.shop == 2 and player.shop_selection != 69], "{0}\u2028- STOCK: {1} - PRICE: €{2}".format("{0}{1}{2}".format(["Indulge in your destructive lust for revenge.", "Not the holy kind. More akin to dumpster-diving salvation.", "Pain is but an illusion. Free your soul from it.", "Let the hysteria take over your feeble limbs.", "It’s just a glass bottle full of bullets.", "Expand your mind. Unlock your repressed potential.", "Brewed with the fangs of a powerful ancient deity.", "The dragon’s fire consumes all.", "Death is merely a temporary illness.", " "][localPlayer.shop_selection], newline, ["Increases damage dealt by 5%.", "Increases healing dealt by 5%.", "Increases maximum health by 20HP.", "Increases movement speed by 5%.", "Increases ammo clip by 20%.", "Decreases ability cooldowns by 1 second.", "Converts 5% of damage to health (Does not stack with Salvation).", "Adds a 5% chance to light enemies on fire per attack.", "On your next death, you will immediately revive.", "A refreshing, hydrating drink."][localPlayer.shop_selection]), localPlayer.potions_max[localPlayer.shop_selection] - localPlayer.potions[localPlayer.shop_selection], potions_price[localPlayer.shop_selection]), shop_campos.last() + Vector.DOWN * 1.5, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, [Color.RED, Color.YELLOW, Color.GREEN, Color.AQUA, Color.BLUE, Color.PURPLE, Color.ROSE, Color.ORANGE, rgb(112, 179, 134), Color.WHITE][localPlayer.shop_selection] if localPlayer.potions_max[localPlayer.shop_selection] - localPlayer.potions[localPlayer.shop_selection] > false and localPlayer.euros >= potions_price[localPlayer.shop_selection] else Color.GRAY)
    for eventPlayer.i in range(0, 3, true):
        createInWorldText([player for player in getAllPlayers() if player.shop == 3], "{0}{1}".format("▶ " if localPlayer.shop_selection == evalOnce(eventPlayer.i) else "", ["Chaos Magic/Mystic Transfusion/Bewitching Grasp/Flying Broomstick/Undying Servitude/Hex Mania".split("/"), "Junkenstein's Revenge/Superconductive/Discharged/Shocking Surprise/Faraday Trap/Zombardier".split("/"), "Evil Stitched To Evil/It's Alive!/Recycling/Chain Reaction/Monstrous Roar/Beware; For I Am Fearless".split("/"), "Reap What You Sow/Marked For Death/The Reaper's Scythe/Vengeful Ghost/Jumpscare/Dance With The Reaper".split("/")][t2_heroes_array.index(localPlayer.getHero())][localPlayer.scrolls_random[evalOnce(eventPlayer.i)]] if localPlayer.scrolls_random[evalOnce(eventPlayer.i)] in localPlayer.scrolls_equip else "Mysterious Scroll"), (shop_campos.last() + (Vector.UP * (0.4 - 0.3 * evalOnce(eventPlayer.i))) + (shop_left * (1.4 if localPlayer.shop_selection == evalOnce(eventPlayer.i) else 1.5))) + (shop_left * sinDeg(shop_angle) * (0.1 if localPlayer.shop_selection == evalOnce(eventPlayer.i) and not localPlayer.scrolls_random[evalOnce(eventPlayer.i)] in localPlayer.scrolls_equip and localPlayer.real > 99 else false)), 1.8, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())] if localPlayer.scrolls_random[evalOnce(eventPlayer.i)] in localPlayer.scrolls_equip else Color.WHITE if localPlayer.real > 99 else Color.GRAY)
        wait(false)
        eventPlayer.i += 3
        createInWorldText([player for player in getAllPlayers() if player.shop == 3], "{0}{1}".format("▶ " if localPlayer.shop_selection == evalOnce(eventPlayer.i) else "", ["Chaos Magic/Mystic Transfusion/Bewitching Grasp/Flying Broomstick/Undying Servitude/Hex Mania".split("/"), "Junkenstein's Revenge/Superconductive/Discharged/Shocking Surprise/Faraday Trap/Zombardier".split("/"), "Evil Stitched To Evil/It's Alive!/Recycling/Chain Reaction/Monstrous Roar/Beware; For I Am Fearless".split("/"), "Reap What You Sow/Marked For Death/The Reaper's Scythe/Vengeful Ghost/Jumpscare/Dance With The Reaper".split("/")][t2_heroes_array.index(localPlayer.getHero())][localPlayer.scrolls_random[evalOnce(eventPlayer.i)]] if localPlayer.scrolls_random[evalOnce(eventPlayer.i)] in localPlayer.scrolls_equip else "Mysterious Scroll"), (shop_campos.last() + (Vector.UP * (0.4 - (0.3 * (evalOnce(eventPlayer.i) - 3)))) - (shop_left * (1.6 if localPlayer.shop_selection == evalOnce(eventPlayer.i) else 1.5))) + (shop_left * sinDeg(shop_angle) * (0.1 if localPlayer.shop_selection == evalOnce(eventPlayer.i) and not localPlayer.scrolls_random[evalOnce(eventPlayer.i)] in localPlayer.scrolls_equip and localPlayer.real > 99 else false)), 1.8, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())] if localPlayer.scrolls_random[evalOnce(eventPlayer.i)] in localPlayer.scrolls_equip else Color.WHITE if localPlayer.real > 99 else Color.GRAY)
        wait(false)
        eventPlayer.i -= 3
    createInWorldText([player for player in getAllPlayers() if player.shop == 3 and player.shop_selection != 69], [["Heal\u2028yourself for 50% damage your heal target takes and 50%\ndamage they deal. Your health regen is drastically reduced.", "Press ''{0}'' while healing a player to instantly heal\nthem for\u2028100HP, sacrificing 60HP of your own.".format(inputBindingString(Button.RELOAD)), "Replaces Damage Boost with a beam\u2028that locks\nonto enemies and drains their health.", "Guardian Angel now damages and\nknocks back\u2028enemies in your path.", "Replaces Resurrect.\u2028Casts a spell on a living teammate that\nmakes them invulnerable to all damage for 8 seconds.", "Upon activating Valkyrie,\u2028all enemies in a 30 meter radius go\ninsane for 8 seconds, becoming hacked and confused."], ["When downed, repeatedly\u2028release Total Mayhem\nbombs at your corpse every second.", "When under 66.6%\u2028health, nearby enemies\ntake electric damage over time.", "Every\u2028killing blow causes the victim to discharge\nelectricity, damaging nearby enemies and stunning them.", "Concussion\u2028Mine and Riptire\nnow also electrify enemies, stunning them.", "When\u2028an enemy is caught in your Steel Trap, they start\nelectrifying nearby enemies, damaging and rooting them.", "Upon\u2028activating Riptire, a zombardier is summoned\nthat fights for you for 20 seconds."], ["Every\u2028killing blow grants you +100 unrecoverable HP.", "Become\u2028nanoboosted for 10 seconds whenever\nyou revive. Allies revive you twice as quickly.", "When crouching,\u2028deal 2× damage,\nbut every shot takes 100HP from you.", "Successfully\u2028landing a hook sets its cooldown to 1 second,\nhowever missing a hook sets its cooldown to 12 seconds.", "Replaces\u2028Take A Breather with a roar that heals you and\ngrants 60% damage reduction for 5 seconds. All enemies\n{0}".format("immediately target you."), "Whole\u2028Hog now deals zero knockback.\n2× movement speed while Whole Hog is active."], ["Every\u2028killing blow refreshes\none of your cooldowns.", "Shoot an enemy to mark them, making them\nvisible through walls and take 1.25× damage.\n{0}".format("You can only mark one enemy at a time."), "Gain 2× melee\u2028range and 2.5× melee damage.", "While\u2028in Wraith Form, nearby enemies\ntake damage over time.", "Upon\u2028exiting Shadow Step, all nearby\nenemies become frozen in fear.", "While\u2028using Death Blossom, you become\ninvincible and move 3× as fast."]][t2_heroes_array.index(localPlayer.getHero())][localPlayer.scrolls_random[localPlayer.shop_selection]] if localPlayer.scrolls_random[localPlayer.shop_selection] in localPlayer.scrolls_equip else "Unlock this scroll to attain unique, mysterious powers. -\u2028PRICE: R$100", shop_campos.last() + Vector.DOWN * 1.5, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_STRING_AND_COLOR, t2_hero_colours[t2_heroes_array.index(localPlayer.getHero())] if localPlayer.scrolls_random[localPlayer.shop_selection] in localPlayer.scrolls_equip else Color.WHITE if localPlayer.real > 99 else Color.GRAY)


rule "zomnic init":
    @Event eachPlayer
    @Team 2
    @Hero zenyatta
    @Condition eventPlayer.zomnic == 1
    @Condition eventPlayer.isAlive() == true

    eventPlayer.startFacing(worldVector(eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION), 100)
    wait(false)
    if distance(eventPlayer, zomnic_spawns[0]) < 4:
        eventPlayer.zomnic_top = true
    else:
        eventPlayer.zomnic_top = false
    eventPlayer.zomnic_dest = vect(67.27, 12.72, -70.64) if eventPlayer.zomnic_top else door
    eventPlayer.throttle_mag = true
    eventPlayer.start_pathfind = true
    eventPlayer.boss_target_location = pentagram_pos + Vector.UP * 20
    eventPlayer.boss_target_location_2 = eventPlayer.getPosition()
    chaseOverTime(eventPlayer.boss_target_location, eventPlayer.boss_target_location_2, 1.3, ChaseTimeReeval.NONE)
    createBeam(getAllPlayers(), Beam.WINSTON_TESLA_CANNON, eventPlayer.boss_target_location_2, eventPlayer.boss_target_location, Team.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.trail_cache = getLastCreatedEntity()
    wait(false)
    playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_METEOR_STRIKE_IMPACT_SOUND, Team.1, eventPlayer.getPosition(), 200)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, eventPlayer, 1)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.RED, eventPlayer, 8)
    summoner_power -= 1.5
    wait(1.3)
    destroyEffect(eventPlayer.trail_cache)


def phase_11_spawn():
    @Name "phase 11 spawn subr"

    if dragon_blood_qty == 4 and mercy_drop == 1:
        return
    waitUntil(getNumberOfLivingPlayers(Team.1) <= 3, 99999)
    enemy_spawn = [player for player in enemy_spawn_2 if distance(player, last_collected_blood) < 40 and not isInLoS(player, last_collected_blood.getEyePosition())]
    if enemy_spawn == []:
        enemy_spawn = [player for player in enemy_spawn_2 if distance(player, last_collected_blood) < 60]
    if dragon_blood_qty > 3:
        enemy_ID_sequence = [random.randint(true, 4), random.randint(6, 7), random.randint(true, 4), random.randint(21, 23)].concat(7 if difficulty == 3 else [])
    elif dragon_blood_qty > true:
        enemy_ID_sequence = [random.randint(true, 4), random.randint(true, 4), random.randint(true, 4), random.randint(21, 23), random.randint(6, 7)].concat((10 if dragon_blood_qty > 2 else 7) if difficulty == 3 else [])
    elif dragon_blood_qty > false:
        enemy_ID_sequence = [random.randint(true, 4), random.randint(true, 4), 10 if difficulty == 3 else random.randint(true, 4), random.randint(21, 23), random.randint(6, 7), 26 if difficulty == 3 else random.randint(21, 23)]
    else:
        enemy_ID_sequence = [random.randint(true, 4), 7 if difficulty == 3 else random.randint(true, 4), random.randint(6, 7), random.randint(21, 23), 26 if difficulty == 3 else random.randint(21, 23), 9 if difficulty == 3 else 8]
    spawn_enemies()


rule "ana nana":
    @Event eachPlayer
    @Team 1
    @Hero ana
    @Condition eventPlayer.boss_ID == 3
    @Condition ana_start_nana == true
    @Condition eventPlayer.isUsingUltimate() == false

    wait(random.uniform(6, 8))
    waitUntil(not eventPlayer.attack, 99999)
    eventPlayer.attack = 5
    while not eventPlayer.isUsingUltimate():
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(false)
    eventPlayer.boss_target_location = eventPlayer.getEyePosition()
    eventPlayer.boss_target_location_2 = vect(84.326, 12.76, -81.319)
    chaseAtRate(eventPlayer.boss_target_location, eventPlayer.boss_target_location_2, 20)
    createBeam(getAllPlayers(), Beam.ZARYA_PARTICLE, eventPlayer.boss_target_location_2, eventPlayer.boss_target_location, Team.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.boss_effects.append(getLastCreatedEntity())
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer.boss_target_location_2, 20)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer.boss_target_location_2, 35)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer.boss_target_location_2, 50)
    for eventPlayer.i2 in range(1, 5):
        getPlayersInSlot(eventPlayer.i2, Team.1).nano = 8
        heal(getPlayersInSlot(eventPlayer.i2, Team.1), boss, 200)
        wait(0.3)
    waitUntil(eventPlayer.boss_target_location == eventPlayer.boss_target_location_2, 99999)
    while eventPlayer.boss_effects != []:
        destroyEffect(eventPlayer.boss_effects[0])
        del eventPlayer.boss_effects[false]
    wait(false)
    eventPlayer.attack = false


rule "enter castle":
    @Condition phase == 22
    @Condition objective_pos.y < 100
    @Condition (all([distance(i, objective_pos) < 4 for i in [player for player in getPlayers(Team.2) if not player.isDummy()]])) == true

    getPlayers(Team.2).exclude(merchant).teleport(vect(89.583, 13.378, -61.666))
    boundary_corners_2 = [boundary_corners.last(), boundary_corners[0]]
    boundary_line_2 = vectorTowards(boundary_corners_2[0], boundary_corners_2.last())
    async(delete_bound_effects, AsyncBehavior.RESTART)
    phase = 23
    objective_pos = _extendedGlobalCollection
    destroyDummy(Team.1, merchant.attack.getSlot())
    shop_open = false
    wait(0.4)
    destroyDummy(Team.2, 5)
    for i4 in range(0, 4, true):
        enemy_spawn = ([vect(94.924, 11.112, -29.514), vect(90.221, 16.257, -21.267), vect(106.134, 11.113, -33.421), vect(100.805, 12.688, -46.994)])[i4]
        createDummy(Hero.BRIGITTE, Team.1, i4 + true, enemy_spawn, Vector.UP)
        getLastCreatedEntity().enemy_ID = ([21, 22, 25 if difficulty == 3 else 22, 25])[i4]
        wait(0.1)


rule "rein double earthshatter":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition eventPlayer.boss_ID == 4.1
    @Condition boss.attack == 5

    wait(1.25)
    for eventPlayer.i in range(0, 3, 0.1):
        eventPlayer.setUltCharge(100)
        wait(0.1)
        eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "bot stuck too long tp":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.enemy_ID > false
    @Condition eventPlayer.isAlive() == true

    wait(60, Wait.ABORT_WHEN_FALSE)
    if eventPlayer.target.isAlive():
        if not eventPlayer.target.zomnic:
            if not isInLoS(eventPlayer, eventPlayer.target):
                eventPlayer.teleport(nearestWalkablePosition(worldVector(Vector.BACKWARD * 10, eventPlayer.target, Transform.ROTATION_AND_TRANSLATION)))
    if ruleCondition:
        loop()


rule "enemy init":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.enemy_ID >= true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.safeguard_fix == false

    eventPlayer.startForcingHero(Hero.TORBJORN if eventPlayer.enemy_ID < 20 else Hero.BRIGITTE)
    eventPlayer.stopFacing()
    eventPlayer.stopScalingBarriers()
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    eventPlayer.stopScalingSize()
    eventPlayer.setKnockbackReceived(100)
    eventPlayer.stopModifyingVoicelinePitch()
    eventPlayer.setProjectileGravity(100)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.grillager_activate = false
    eventPlayer.forceButtonPress(Button.INTERACT)
    if eventPlayer.getHero() == Hero.TORBJORN:
        eventPlayer.startForcingName(["Villager", "Killager", "Skillager", "Grillager", "Spillager", "Chillager", "Instakillager", "Overkillager", "Overoverkillager", "Chernobyllager"][eventPlayer.enemy_ID - true])
        eventPlayer.setMaxHealth(100)
        eventPlayer.setKnockbackDealt(100)
        eventPlayer.speed = 80
        eventPlayer.setMoveSpeed(80)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), 1000)
        eventPlayer.setWeapon(2 if eventPlayer.enemy_ID in [1, 4, 6, 7] else 1)
        eventPlayer.damage_dealt = 25 + 15 * difficulty
        if eventPlayer.enemy_ID == 2:
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + Vector.DOWN * 0.5) + vect(random.uniform(-0.1, 0.1), false, random.uniform(-0.1, 0.1)), 1000)
            eventPlayer.damage_dealt = 10 + 8 * difficulty
        elif eventPlayer.enemy_ID == 3:
            eventPlayer.speed = 60
            eventPlayer.setMoveSpeed(60)
            eventPlayer.damage_dealt = 50 + 20 * difficulty
            eventPlayer.setProjectileGravity(300)
            eventPlayer.setProjectileSpeed(500)
            createBeam(getAllPlayers() if eventPlayer.real else [], Beam.TORBJORN_TURRET_SIGHT, eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition(), Team.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.trail[false] = getLastCreatedEntity()
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + vect(eventPlayer.target.getVelocity().x, false, eventPlayer.target.getVelocity().z) * (distance(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()) / 350)), 1000)
        elif eventPlayer.enemy_ID == 5:
            eventPlayer.damage_dealt = 10 + 8 * difficulty
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getPosition()), 1000)
            eventPlayer.setProjectileGravity(5)
            eventPlayer.setMaxHealth(200)
            eventPlayer.setHealth(99999)
        elif eventPlayer.enemy_ID == 6:
            createEffect(getAllPlayers(), Effect.MEI_FROZEN, Team.1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.trail[false] = getLastCreatedEntity()
            createEffect(getAllPlayers(), Effect.MEI_FROZEN_SOUND, Team.1, eventPlayer, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.trail[2] = getLastCreatedEntity()
            eventPlayer.setMaxHealth(150)
        elif eventPlayer.enemy_ID == 7:
            createInWorldText(getAllPlayers(), ":D", eventPlayer, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.RED)
            eventPlayer.trail[true] = getLastCreatedText()
            eventPlayer.damage_dealt = 300 + 100 * difficulty
            eventPlayer.startScalingSize(0.7, false)
            eventPlayer.setMaxHealth(37.5)
            eventPlayer.speed = 110
            eventPlayer.setMoveSpeed(120)
            eventPlayer.startModifyingVoicelinePitch(1.25)
        elif eventPlayer.enemy_ID == 8:
            eventPlayer.speed = 70
            eventPlayer.setMoveSpeed(70)
            eventPlayer.damage_dealt = 40 + 15 * difficulty
            eventPlayer.startScalingSize(1.7, false)
            eventPlayer.setMaxHealth(abs(1500))
            eventPlayer.setKnockbackReceived(50)
            eventPlayer.setHealth(99999)
            eventPlayer.startModifyingVoicelinePitch(0.75)
        elif eventPlayer.enemy_ID == 9:
            eventPlayer.speed = 70
            eventPlayer.setMoveSpeed(70)
            eventPlayer.damage_dealt = 40 + 15 * difficulty
            eventPlayer.startScalingSize(2.2, false)
            eventPlayer.setMaxHealth(abs(3000))
            eventPlayer.setKnockbackReceived(30)
            eventPlayer.setHealth(99999)
            eventPlayer.startModifyingVoicelinePitch(0.5)
        elif eventPlayer.enemy_ID == 10:
            eventPlayer.speed = 70
            eventPlayer.setMoveSpeed(70)
            eventPlayer.startScalingSize(1.3, false)
            eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 99999)
            eventPlayer.setKnockbackReceived(50)
            eventPlayer.setMaxHealth(800)
            eventPlayer.startModifyingVoicelinePitch(0.5)
            wait(0.1)
            createEffect([] if ceil(getTotalTimeElapsed() * 2) % 2 else getAllPlayers(), Effect.ECHO_CLONING, Team.1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.trail[false] = getLastCreatedEntity()
            createIcon(getAllPlayers(), eventPlayer, Icon.RADIOACTIVE, IconReeval.VISIBILITY_AND_POSITION, Color.GREEN, false)
            eventPlayer.trail[3] = getLastCreatedEntity()
            eventPlayer.setHealth(99999)
            eventPlayer.setUltCharge(100)
        eventPlayer.damage_received = 130 - 15 * difficulty
        eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
        eventPlayer.setDamageReceived(eventPlayer.damage_received)
    elif eventPlayer.getHero() == Hero.BRIGITTE:
        eventPlayer.startForcingName(["Guard", "Vanguard", "Lifeguard", "Safeguard", "Royal Guard", "Bitter Guard"][eventPlayer.enemy_ID - 21])
        eventPlayer.setProjectileSpeed(60)
        eventPlayer.speed = 80
        eventPlayer.setMoveSpeed(80)
        eventPlayer.damage_dealt = 25 + 10 * difficulty
        eventPlayer.setMaxHealth(41.667)
        eventPlayer.setKnockbackDealt(140)
        eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, false)
        eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), 1000)
        eventPlayer.damage_received = 130 - 15 * difficulty
        eventPlayer.setDamageReceived(eventPlayer.damage_received)
        if eventPlayer.enemy_ID == 23:
            createEffect(getAllPlayers(), Effect.HEAL_TARGET_ACTIVE, Team.1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.trail[false] = getLastCreatedEntity()
            createInWorldText(getAllPlayers(), "+", eventPlayer, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW)
            eventPlayer.trail[true] = getLastCreatedText()
            eventPlayer.setHealingDealt(100)
        else:
            eventPlayer.setHealingDealt(0)
        if eventPlayer.enemy_ID == 24:
            eventPlayer.startScalingBarriers(5)
            eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
            eventPlayer.setMaxHealth(27.778)
            eventPlayer.damage_dealt = 50 + 25 * difficulty
        if eventPlayer.enemy_ID == 25:
            createEffect(getAllPlayers(), Effect.WRECKING_BALL_ADAPTIVE_SHIELD_TARGET, Team.1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.trail[false] = getLastCreatedEntity()
            createInWorldText(getAllPlayers(), "Ω", eventPlayer, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.ORANGE)
            eventPlayer.trail[true] = getLastCreatedText()
            eventPlayer.setMaxHealth(55.556)
            eventPlayer.setMoveSpeed(69)
            eventPlayer.damage_dealt = 37.5 + 15 * difficulty
        if eventPlayer.enemy_ID == 26:
            createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.PURPLE, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.trail[false] = getLastCreatedEntity()
            createInWorldText(getAllPlayers(), "–", eventPlayer, 2, Clip.SURFACES, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.PURPLE)
            eventPlayer.trail[true] = getLastCreatedText()
            createEffect(getAllPlayers(), Effect.RING, Color.PURPLE, eventPlayer, 8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.trail[2] = getLastCreatedEntity()
            eventPlayer.setMaxHealth(55.556)
        eventPlayer.setDamageDealt(eventPlayer.damage_dealt)


rule "phase 23 waves":
    @Condition phase == 23
    @Condition scripted_spawns[4] == false
    @Condition (any([i.getPosition().x > 113 for i in [player for player in getPlayers(Team.2) if not player.isDummy() and player.hasSpawned()]])) == true

    scripted_spawns[4] = true
    for i4 in range(0, 4, true):
        enemy_spawn = ([vect(137.337, 12.131, -52.051), vect(133.965, 11.367, -30.112), vect(126.38, 11.267, -57.126), vect(126.059, 11.191, -16.955)])[i4]
        createDummy(Hero.BRIGITTE, Team.1, i4 + 5, enemy_spawn, Vector.UP)
        getLastCreatedEntity().enemy_ID = ([25, 21, 22, 26 if difficulty == 3 else 21])[i4]
        wait(0.1)
    waitUntil(getNumberOfLivingPlayers(Team.1) <= true, 99999)
    objective_complete = true
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(120.415, 9.368, -39.921)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.JUNKRAT, "Come out, come out, Lord Wilhelm! The Doctor's got an appointment with ya!", 1], [Hero.JUNKRAT, "Aren'tcha happy to see this familiar mug?", 1], [Hero.REINHARDT, "The Lord was, in fact, not happy to see that familiar mug.", 1], [Hero.MERCY, "My, my, what a reception you've prepared for us, good Lord!", 1], [Hero.ROADHOG, "Weakling guards. My favourite! You nobles sure know how to treat a guest!", 1], [Hero.REAPER, "I need to know where my passport is." if sombra_egg == 69 else "I need to know where the bathroom is.", 1], [Hero.REINHARDT, "Despite the constant mockery, the Lord himself was nowhere to be seen,", 1], [Hero.REINHARDT, "for his loyal soldiers wanted to keep him safe from the invading terror.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    objective = "Await the arrival of the Lord."
    objective_complete = false
    async(obj_color, AsyncBehavior.RESTART)
    phase = 24
    enemy_spawn = [vect(97.971, 13.452, -62.684), vect(79.364, 13.451, -59.84), vect(93.31, 11.086, -28.6), vect(97.314, 16.182, -20.648), vect(111.103, 13.061, -55.326), vect(130.767, 12.611, -58.283), vect(137.603, 15.285, -35.069), vect(110.655, 15.243, -33.718), vect(125.91, 11.275, -17.257), vect(113.1, 11.379, -3.929), vect(143.906, 11.377, -11.433)]
    for i7 in range(0, 4, true):
        enemy_ID_sequence = ([[1, 2, 2, 3, 4, 21, 22, 25], [26 if difficulty == 3 else 1, 2, 3, 6, 5, 21], [2, 5 if difficulty == 3 else 2, 3, 5, 21, 23], [6, 7, 5, 22, 8, 25]])[i7]
        spawn_enemies()
        waitUntil(getNumberOfLivingPlayers(Team.1) <= 3, 99999)
    waitUntil(getNumberOfLivingPlayers(Team.1) <= true, 99999)
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(120.415, 9.368, -39.921)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.JUNKRAT, "Keeping me waiting, Lord Wilhelm? Now that's no way to treat an old friend!", 1], [Hero.MERCY, "You'd think a man of royal blood would know some basic manners!", 1], [Hero.JUNKRAT, "Huehuehuehue! Good one, Wicked Witch! Up top!" if sombra_egg == 69 else "Ehehehehe! Good one, Wicked Witch! Up top!", 1], [Hero.MERCY, "Ew, no. Get your hand away from me.", 2]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    for i7 in range(0, 5, true):
        enemy_ID_sequence = ([[22, 22, 22, 22, 22, 22, 26 if difficulty == 3 else 22, 25], [4, 6, 4, 6, 4, 6].concat(10 if difficulty == 3 else []), [5, 5, 5, 5, 5, 5].concat(25 if difficulty == 3 else []), [7, 7, 7, 7, 7, 25].concat(7 if difficulty == 3 else []), [3, 3, 3, 3, 3, 9].concat(10 if difficulty == 3 else [])])[i7]
        spawn_enemies()
        waitUntil(getNumberOfLivingPlayers(Team.1) <= (2 if difficulty == 3 else 3), 99999)
    waitUntil(getNumberOfLivingPlayers(Team.1) <= true, 99999)
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(120.415, 9.368, -39.921)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "Fear mixed with guilt slowly crept into the heart of the old Lord,", 1], [Hero.REINHARDT, "as he witnessed guard after guard falling victim to the Mad Doctor and his minions.", 1], [Hero.MERCY, "We can hear you, you aged cretin! I am no minion of this one-legged buffoon!", 1], [Hero.JUNKRAT, "Half the legs but twice the brains, you high school drop-out.", 1], [Hero.ROADHOG, "This is getting boring. On with it, foolish Lord!", 1], [Hero.REAPER, "Please hurry. I really need to go to brazil." if sombra_egg == 69 else "Please hurry. I really need to pee.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    enemy_ID_sequence = [25, 25, 26 if difficulty == 3 else 22, 26 if difficulty == 3 else 22, 8 if difficulty > 0 else 21, 8 if difficulty > 1 else 3, 8, 9]
    spawn_enemies()
    waitUntil(getNumberOfLivingPlayers(Team.1) <= true, 99999)
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(120.415, 9.368, -39.921)
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "The heartbroken Lord could take the ghastly onslaught no further.", 1], [Hero.REINHARDT, "With a heavy sigh, he donned his battle gear and drew his weapon.", 1], [Hero.REINHARDT, "All hope may have seemed lost, but alas, there is one hero left to face the terrible villains!", 1], [Hero.REINHARDT, "This is the story of that hero, that knight in shining armour!", 1], [Hero.REINHARDT, "And that hero has arrived in all his brazen glory!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    phase = 25
    destroyDummy(Team.1, 5)
    destroyDummy(Team.1, 6)
    destroyDummy(Team.1, 7)
    destroyDummy(Team.1, 8)
    wait(false)
    createDummy(Hero.REINHARDT, Team.1, 5, vect(126.55, 14.75, -15.48), vect(-0.26, -0.1, -0.93))
    boss = getLastCreatedEntity()
    getLastCreatedEntity().pre_init = true
    getLastCreatedEntity().boss_ID = 4
    wait(0.6)
    no_hud = true
    setSlowMotion(20)
    wait(1.5)
    setSlowMotion(100)
    return_cam = true
    boss.startFacing(directionTowards(boss.getEyePosition(), boss.target.getEyePosition()), 1000)
    wait(false)
    return_cam = false
    if dialogue_priority >= 3:
        return
    skip_cutscene_pos = vect(121.927, 9.586, -48.771)
    dialogue_priority = 2
    no_hud = false
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    water_you_doin = getPlayersInSlot(false, Team.2).potions[9] + getPlayersInSlot(true, Team.2).potions[9] + getPlayersInSlot(2, Team.2).potions[9] + getPlayersInSlot(3, Team.2).potions[9]
    if sombra_egg == 69:
        active_dialogue_list = [[Hero.JUNKRAT, "Huehuehuehuehue! How nice to see you again, velho amigo!", 1], [Hero.JUNKRAT, "Oh, how I've missed your pompous eyes and well-defined features!", 1], [Hero.REINHARDT, "The Lord, upon hearing the Doctor's peculiar laugh, froze in horror,", 1], [Hero.REINHARDT, "For he knew that the enigma of Adlersbrunn had fallen, and he was thusly doomed.", 1], [Hero.MERCY, "What's wrong, Lord Wilhelm? Jaguar got your tongue?", 1], [Hero.REINHARDT, "The Lord had no response.", 1], [Hero.JUNKRAT, "Those big ravishing muscles of yours won’t protect you for long, Lord Wilhelm.", 1], [Hero.JUNKRAT, "Mark my words, tonight, you are going to Brazil!", 1.5]]
    elif water_you_doin >= 500:
        active_dialogue_list = [[Hero.JUNKRAT, "Ahahahahaha! How nice to see you again, old friend!", 1], [Hero.JUNKRAT, "Oh, how I've missed your pompous eyes and well-defined features!", 1], [Hero.REINHARDT, "The Lord questioned the Mad Doctor's choice of words, although he admitted in his heart to feeling rather flattered.", 1], [Hero.MERCY, "We can hear you, y'know. Who are you even talking to?", 1], [Hero.REINHARDT, "The Lord refused to elaborate.", 1], [Hero.JUNKRAT, "Those big ravishing muscles of yours won’t protect you for long, Lord Wilhelm.", 1], [Hero.JUNKRAT, "Mark my words, tonight-", 0.2], [Hero.REINHARDT, "Actually, hold that thought. Are those... {0} bottles of water?".format(water_you_doin), 1], [Hero.ROADHOG, "{0}, actually. I just drank one while you guys were talking.".format(water_you_doin - true), 1], [Hero.REAPER, "Why did we even buy so much water in the first place?", 1], [Hero.MERCY, "Good hydration is the backbone of youthful skin, darling.", 1], [Hero.REINHARDT, "Do excuse me if I am encroaching, but might you spare some for this old man?", 1], [Hero.REINHARDT, "My throat has been terribly parched from all this narrating.", 1], [Hero.JUNKRAT, "Sure! Why not.", 1]]
        main_dialogue()
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, boss, 1)
        playEffect(getAllPlayers(), DynamicEffect.BRIGITTE_REPAIR_PACK_IMPACT_SOUND, Team.2, boss, 200)
        wait(0.5)
        boss.communicate(Comms.THANKS)
        wait(1.5)
        is_dialoguing = true
        waitUntil(not main_dialogue, 99999)
        is_dialoguing = false
        active_dialogue_list = [[Hero.REINHARDT, "Ahhhh, many thanks. That feels so much better.", 1], [Hero.REINHARDT, "Why, I'm not sure how to thank you kind folks.", 1], [Hero.JUNKRAT, "Hmm. Howzabout you roll over and die for us?", 1], [Hero.REINHARDT, "I'll pass.", 1], [Hero.REINHARDT, "Tell you what, though. Instead, perhaps I could repay you all with a riddle?", 1], [Hero.REAPER, "I don't think you understand how the economy works.", 1], [Hero.MERCY, "Shut it, accounting kid. Lord Wilhelm, you've piqued my interest! Do tell.", 1], [Hero.REINHARDT, "Very well. Listen closely, fellow villains...", 1], [Hero.REINHARDT, "When the Merchant of darkness first takes her leave, return from whence you came.", 1], [Hero.REINHARDT, "Look around, and you will see that something awaits you.", 1], [Hero.REINHARDT, "But beware, it only speaks to those that it deems as worthy.", 1], [Hero.REINHARDT, "Only those who are truly... Nightmarish...", 1], [Hero.REINHARDT, "Do you understand, villains?", 1], [Hero.ROADHOG, "Sorry, what? I spaced out.", 1], [Hero.REINHARDT, "...Nevermind. That is all I have to say.", 1]]
        main_dialogue()
        boss.piss_ending = true
        boss.start_pathfind = true
        is_dialoguing = true
        waitUntil(not main_dialogue, 99999)
        is_dialoguing = false
        active_dialogue_list = [[Hero.REINHARDT, "Now if you'll excuse me, I have been called. I must answer.", 1], [Hero.REINHARDT, "Called by nature, I mean. I am literally about to piss myself. That water just passes right through, you know?", 1], [Hero.REAPER, "Me too. Do you know where the bathroom is?", 1.5]]
    elif water_you_doin > 10:
        active_dialogue_list = [[Hero.JUNKRAT, "Ahahahahaha! How nice to see you again, old friend!", 1], [Hero.JUNKRAT, "Oh, how I've missed your pompous eyes and well-defined features!", 1], [Hero.REINHARDT, "The Lord questioned the Mad Doctor's choice of words, although he admitted in his heart to feeling rather flattered.", 1], [Hero.MERCY, "We can hear you, y'know. Who are you even talking to?", 1], [Hero.REINHARDT, "The Lord refused to elaborate.", 1], [Hero.JUNKRAT, "Those big ravishing muscles of yours won’t protect you for long, Lord Wilhelm.", 1], [Hero.JUNKRAT, "Mark my words, tonight-", 0.2], [Hero.REINHARDT, "Actually, hold that thought. Are those... {0} bottles of water?".format(water_you_doin), 1], [Hero.ROADHOG, "{0}, actually. I just drank one while you guys were talking.".format(water_you_doin - true), 1], [Hero.REAPER, "Why did we even buy so much water in the first place?", 1], [Hero.MERCY, "Good hydration is the backbone of youthful skin, darling.", 1], [Hero.REINHARDT, "Do excuse me if I am encroaching, but might you spare some for this old man?", 1], [Hero.REINHARDT, "My throat has been terribly parched from all this narrating.", 1], [Hero.JUNKRAT, "Sure! Why not.", 1]]
        main_dialogue()
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, boss, 1)
        playEffect(getAllPlayers(), DynamicEffect.BRIGITTE_REPAIR_PACK_IMPACT_SOUND, Team.2, boss, 200)
        wait(0.5)
        boss.communicate(Comms.THANKS)
        wait(1.5)
        active_dialogue_list = [[Hero.REINHARDT, "Ahhhh, many thanks. Though frankly, I could do with a little more water.", 1], [Hero.REAPER, "You just finished our entire stock.", 1], [Hero.REINHARDT, "Oh.", 2], [Hero.REINHARDT, "Well that's a shame. If only you had {0} more bottles of water on you.".format(500 - water_you_doin), 1], [Hero.JUNKRAT, "Yeah if only lmfao. Anyways, back to what I was saying.", 1], [Hero.JUNKRAT, "Mark my words, tonight, I shall have my revenge!", 1.5]]
    else:
        active_dialogue_list = [[Hero.JUNKRAT, "Ahahahahaha! How nice to see you again, old friend!", 1], [Hero.JUNKRAT, "Oh, how I've missed your pompous eyes and well-defined features!", 1], [Hero.REINHARDT, "The Lord questioned the Mad Doctor's choice of words, although he admitted in his heart to feeling rather flattered.", 1], [Hero.MERCY, "We can hear you, y'know. Who are you even talking to?", 1], [Hero.REINHARDT, "The Lord refused to elaborate.", 1], [Hero.JUNKRAT, "Those big ravishing muscles of yours won’t protect you for long, Lord Wilhelm.", 1], [Hero.JUNKRAT, "Mark my words, tonight, I shall have my revenge!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    skip_cutscene_pos = _extendedGlobalCollection
    if water_you_doin >= 500 and sombra_egg < 69:
        wait(true)
        if dialogue_priority > 2:
            return
        dialogue_priority = 2
        no_hud = true
        is_dialoguing = true
        waitUntil(not main_dialogue, 99999)
        is_dialoguing = false
        active_dialogue_list = [[Hero.SOMBRA, "Congratulations. You've unlocked the piss ending. Thank you for playing.", 1], [Hero.SOMBRA, "You can check out the creator's YouTube and Discord at ''bit.ly/therister''.", 1.5], [Hero.SOMBRA, "Try replaying this gamemode to test out the other scrolls, or tackle other difficulties.", 1], [Hero.SOMBRA, "Who knows, perhaps you might even solve the Lord's enigmatic riddle...", 1.5]]
        main_dialogue()
        dialogue_priority = false
        declareTeamVictory(Team.2)
    else:
        phase = 26
        objective = "Take the Lord to Brazil." if sombra_egg == 69 else "Attain Junkenstein's revenge."
        async(obj_color, AsyncBehavior.RESTART)
        objective_complete = false


rule "rein init":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID == 4

    createProgressBarInWorldText(getAllPlayers(), eventPlayer.getNormalizedHealth() * 100, "The Lord Of Adlersbrunn", eventPlayer, 0.5, Clip.SURFACES, Color.RED, Color.RED, ProgressWorldTextReeval.VISIBILITY_POSITION_AND_VALUES)
    eventPlayer.effects[false] = getLastCreatedText()
    eventPlayer.setMoveSpeed(150)
    eventPlayer.speed = 80
    eventPlayer.setMoveSpeed(80)
    eventPlayer.rein_throttle_mag = 1
    eventPlayer.pre_init = false
    eventPlayer.turn_rate = 1000
    eventPlayer.damage_dealt = 60 + 20 * difficulty
    eventPlayer.damage_received = 130 - 15 * difficulty
    eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
    eventPlayer.setDamageReceived(eventPlayer.damage_received)
    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), eventPlayer.turn_rate)
    wait(true)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    destroyEffect(eventPlayer.immune_effect)
    wait(true)
    if dialogue_priority >= 3:
        return
    dialogue_priority = 2
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "Despite The Doctor’s taunting, the old Lord’s spirit did not falter.", 1], [Hero.REINHARDT, "He mustered every ounce of his courage, such that he would never be shaken by his terrifying adversaries!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    createEffect(getAllPlayers(), Effect.LUCIO_SOUND_BARRIER_PROTECTED, Team.1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.effects[true] = getLastCreatedEntity()
    createDummy(Hero.REINHARDT, Team.1, 6, eventPlayer.getPosition(), eventPlayer.getFacingDirection())
    getLastCreatedEntity().boss_ID = 4.1
    eventPlayer.boss_pet[false] = getLastCreatedEntity()
    smallMessage(getPlayers(Team.2), "The Lord is now immune to stuns and knockback.")


rule "rein pee":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition eventPlayer.piss_ending == true

    while distance(eventPlayer, vect(111, 11.15, -5.36)) > 0.5:
        wait(0.5)
    eventPlayer.start_pathfind = false
    eventPlayer.startThrottleInDirection(directionTowards(eventPlayer, vect(127.3, 11, 9.5)), 1, Relativity.TO_WORLD, Throttle.REPLACE_EXISTING, ThrottleReeval.NONE)
    wait(3)
    eventPlayer.stopThrottleInDirection()


rule "rein damage transfer":
    @Event playerTookDamage
    @Team 1
    @Hero reinhardt
    @Condition eventPlayer.boss_ID == 4.1
    @Condition attacker.getTeam() == Team.2

    boss.setHealth(boss.getHealth() - eventDamage)
    eventPlayer.setHealth(99999)


rule "rein burn transfer":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition eventPlayer.boss_ID == 4.1
    @Condition eventPlayer.hasStatus(Status.BURNING) == true

    boss.setStatusEffect(null, Status.BURNING, 99999)
    waitUntil(not eventPlayer.hasStatus(Status.BURNING), 99999)
    boss.clearStatusEffect(Status.BURNING)


rule "rein start hammering":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID == 4
    @Condition eventPlayer.attack == false

    if distance(eventPlayer, eventPlayer.target) < 4.5:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        while distance(eventPlayer, eventPlayer.target) < 5:
            wait(0.2)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    wait(wait)
    if ruleCondition:
        loop()


rule "rein firestrike":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID == 4

    wait(random.uniform(2, 4))
    waitUntil(not eventPlayer.attack, 99999)
    __skipIf__(eventPlayer.hasStatus(Status.ROOTED), true)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    __loopIfConditionIsTrue__()


rule "rein special attack":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID == 4

    wait(random.uniform(5, 7))
    waitUntil(isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()) and not eventPlayer.hasStatus(Status.ROOTED), 99999)
    eventPlayer.attack = random.randint(true, (5 if eventPlayer.getNormalizedHealth() < 0.25 else 4) if eventPlayer.getNormalizedHealth() < 0.5 else 3)
    waitUntil(not eventPlayer.attack, 15)
    if ruleCondition:
        loop()


rule "dont get stuck on chandelier":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition eventPlayer.boss_ID == 4
    @Condition eventPlayer.getPosition().y > 18
    @Condition eventPlayer.isOnGround() == true

    if distance(vect(118.855, 18.777, -44.782), eventPlayer) < 4:
        eventPlayer.disableEnvironmentCollision(true)
        waitUntil(distance(vect(118.855, 18.777, -44.782), eventPlayer) > 4.5, 99999)
        eventPlayer.enableEnvironmentCollision()
    wait(wait)
    if ruleCondition:
        loop()


rule "rein spawn plot armour":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID == 4
    @Condition eventPlayer.bright == false
    @Condition eventPlayer.getNormalizedHealth() < 0.75

    eventPlayer.bright = 1
    if eventPlayer.getHealth() <= false:
        return
    if dialogue_priority > true:
        return
    eventPlayer.setStatusEffect(null, Status.ROOTED, 99999)
    eventPlayer.boss_pet[0].setStatusEffect(null, Status.PHASED_OUT, 99999)
    createEffect(getAllPlayers(), Effect.BAPTISTE_IMMORTALITY_FIELD_PROTECTED, eventPlayer.getTeam(), eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.immune_effect = getLastCreatedEntity()
    dialogue_priority = 1
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "In spite of the villains' merciless attacks, still the Lord smiled.", 1], [Hero.REINHARDT, "For he knew, every hero of a story has their plot armour!", 1.5]]
    main_dialogue()
    createDummy(Hero.REINHARDT, Team.1, 7, eventPlayer.getPosition(), eventPlayer.getFacingDirection())
    getLastCreatedEntity().boss_ID = 4.2
    eventPlayer.boss_pet[true] = getLastCreatedEntity()
    createDummy(Hero.REINHARDT, Team.1, 8, eventPlayer.getPosition(), eventPlayer.getFacingDirection())
    getLastCreatedEntity().boss_ID = 4.3
    eventPlayer.boss_pet[2] = getLastCreatedEntity()
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.ROADHOG, "Okay, that's just unfair.", 1.5]]
    main_dialogue()
    dialogue_priority = false
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.boss_pet[0].clearStatusEffect(Status.PHASED_OUT)
    destroyEffect(eventPlayer.immune_effect)


rule "plot armour shield br0ke":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID in [4.2, 4.3] == true
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) > false

    wait(0.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 8)
    eventPlayer.setInvisibility(Invis.ALL)
    wait(8)
    eventPlayer.setInvisibility(Invis.NONE)


rule "rein nana":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID == 4
    @Condition eventPlayer.bright == 2
    @Condition eventPlayer.getNormalizedHealth() < 0.25

    if eventPlayer.getHealth() <= false:
        return
    if dialogue_priority > true:
        return
    eventPlayer.setStatusEffect(null, Status.ROOTED, 99999)
    eventPlayer.boss_pet[0].setStatusEffect(null, Status.PHASED_OUT, 99999)
    createEffect(getAllPlayers(), Effect.BAPTISTE_IMMORTALITY_FIELD_PROTECTED, eventPlayer.getTeam(), eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.immune_effect = getLastCreatedEntity()
    dialogue_priority = 1
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "The tide of the battle was not in the Lord's favour.", 1], [Hero.REINHARDT, "With a silent prayer, he called upon the spirit of his fallen ally, the Alchemist,", 1], [Hero.REINHARDT, "to grant him one last burst of magnificent strength!", 1.5]]
    main_dialogue()
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer, 10)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer, 15)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer, 20)
    eventPlayer.bright = 3
    eventPlayer.nano = 9999800320
    eventPlayer.speed = 120
    eventPlayer.setMoveSpeed(eventPlayer.speed)
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.MERCY, "Was zur Hölle, that doesn't even make sense! Talk about a deus ex machina.", 1], [Hero.JUNKRAT, "Enough theatrics, Lord Wilhelm! Submit to your fate!", 1], [Hero.JUNKRAT, "You're no ''hero'' of any ''story''. You're just ''going'' to ''Brazil''!" if sombra_egg == 69 else "You're no ''hero'' of any ''story''. This is my story! The great Dr.\u200b Junkenstein!", 1], [Hero.JUNKRAT, "This here's the story of Lord Reinhardt Wilhelm's express one-way ticket to São Paulo!" if sombra_egg == 69 else "This here's the story of Dr.\u200b Jamison Junkenstein's fothermuckin' victory!", 1.5]]
    main_dialogue()
    dialogue_priority = false
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.boss_pet[0].clearStatusEffect(Status.PHASED_OUT)
    destroyEffect(eventPlayer.immune_effect)


rule "rein dead":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID == 4
    @Condition eventPlayer.getHealth() <= true

    phase = 27
    destroyDummy(Team.1, 6)
    destroyDummy(Team.1, 7)
    destroyDummy(Team.1, 8)
    destroyDummy(Team.1, 9)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.stopFacing()
    eventPlayer.nano = null
    destroyAllProgressBarInWorldTexts()
    while eventPlayer.effects != []:
        destroyEffect(eventPlayer.effects[0])
        del eventPlayer.effects[false]
    wait(false)
    destroyDummy(Team.1, true)
    destroyDummy(Team.1, 2)
    destroyDummy(Team.1, 3)
    destroyDummy(Team.1, 4)
    kill(eventPlayer)
    last_player_to_die = eventPlayer


rule "phase 26 spawning event 1":
    @Condition phase == 26
    @Condition len([player for player in getPlayersOnHero(Hero.BRIGITTE, Team.1) if player.isAlive()]) <= true

    wait(random.uniform(3, 6), Wait.ABORT_WHEN_FALSE)
    waitUntil(not boss.hasStatus(Status.ROOTED), 99999)
    enemy_ID_sequence = [random.randint(21, 22), random.randint(21, 22), random.choice([21, 22, 26]) if difficulty == 3 else random.randint(21, 22)]
    spawn_enemies()
    if ruleCondition:
        loop()


rule "rein spawn stand":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition phase == 26
    @Condition eventPlayer.boss_ID == 4
    @Condition eventPlayer.bright == 1
    @Condition eventPlayer.getNormalizedHealth() < 0.5

    eventPlayer.bright = 2
    if eventPlayer.getHealth() <= false:
        return
    if dialogue_priority > true:
        return
    eventPlayer.setStatusEffect(null, Status.ROOTED, 99999)
    eventPlayer.boss_pet[0].setStatusEffect(null, Status.PHASED_OUT, 99999)
    createEffect(getAllPlayers(), Effect.BAPTISTE_IMMORTALITY_FIELD_PROTECTED, eventPlayer.getTeam(), eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.immune_effect = getLastCreatedEntity()
    dialogue_priority = 1
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REINHARDT, "The more battered the Lord was, the stronger his spirit and valour shined.", 1], [Hero.REINHARDT, "His heroic spirit burned so bright, it could manifest and fight on its own!", 1.5]]
    main_dialogue()
    createDummy(Hero.REINHARDT, Team.1, 9, eventPlayer.getPosition(), eventPlayer.getFacingDirection())
    getLastCreatedEntity().boss_ID = 4.4
    eventPlayer.boss_pet[3] = getLastCreatedEntity()
    is_dialoguing = true
    waitUntil(not main_dialogue, 99999)
    is_dialoguing = false
    active_dialogue_list = [[Hero.REAPER, "...Is that a JoJo reference?", 1], [Hero.JUNKRAT, "What's a JoJo?", 1.5]]
    main_dialogue()
    dialogue_priority = false
    eventPlayer.clearStatusEffect(Status.ROOTED)
    eventPlayer.boss_pet[0].clearStatusEffect(Status.PHASED_OUT)
    destroyEffect(eventPlayer.immune_effect)


rule "boss special attack followup":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.attack > false

    if eventPlayer.boss_ID == 1:
        if eventPlayer.attack == 1:
            eventPlayer.setDamageDealt(eventPlayer.damage_dealt * 2)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(0.2)
            eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
        elif eventPlayer.attack == 2:
            eventPlayer.no_jump = true
            eventPlayer.boss_pet[true].respawn()
            wait(0.25)
            waitUntil(eventPlayer.isOnGround(), 5)
            eventPlayer.stopFacing()
            eventPlayer.setMoveSpeed(false)
            eventPlayer.startForcingButton(Button.CROUCH)
            eventPlayer.boss_target_location = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 8, null, eventPlayer, true).getHitPosition()
            wait(true)
            waitUntil(not eventPlayer.has_status, 10)
            eventPlayer.stopForcingButton(Button.CROUCH)
            eventPlayer.setStatusEffect(null, Status.PHASED_OUT, true)
            for eventPlayer.i in range(0, 2, true):
                playEffect(getAllPlayers(), DynamicEffect.WIDOWMAKER_VENOM_MINE_EXPLOSION, Team.1, worldVector(Vector.UP, eventPlayer, Transform.ROTATION_AND_TRANSLATION), 1)
                wait(false)
                eventPlayer.boss_target_location_2 = raycast(eventPlayer.boss_target_location, eventPlayer.boss_target_location + directionFromAngles(random.uniform(0, 360), 0) * 7.5, null, eventPlayer, true).getHitPosition()
                eventPlayer.teleport(eventPlayer.boss_target_location_2)
                wait(false)
                eventPlayer.setFacing(directionTowards(eventPlayer.boss_target_location_2, eventPlayer.boss_target_location), Relativity.TO_WORLD)
                while not eventPlayer.isUsingAbility1():
                    wait(false)
                    eventPlayer.forceButtonPress(Button.ABILITY_1)
                if eventPlayer.i < 2:
                    wait(0.2)
                    async(genji_pet_strike, AsyncBehavior.RESTART)
                waitUntil(not eventPlayer.isUsingAbility1(), 1)
            wait(0.2)
            eventPlayer.boss_pet[true].setInvisibility(Invis.ALL)
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), eventPlayer.turn_rate)
            eventPlayer.setMoveSpeed(70)
            eventPlayer.no_jump = false
            playEffect(getAllPlayers(), DynamicEffect.WIDOWMAKER_VENOM_MINE_EXPLOSION, Team.1, worldVector(Vector.UP, eventPlayer.boss_pet[true], Transform.ROTATION_AND_TRANSLATION), 1)
            wait(false)
            eventPlayer.boss_pet[true].teleport(_extendedGlobalCollection)
        elif eventPlayer.attack == 3:
            for eventPlayer.i in range(0, 3, true):
                eventPlayer.boss_pet[0].cancelPrimaryAction()
                eventPlayer.boss_pet[0].setAbilityCooldown(Button.ABILITY_2, false)
                eventPlayer.boss_pet[0].forceButtonPress(Button.ABILITY_2)
                wait(0.2, Wait.ABORT_WHEN_FALSE)
                eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
                wait(0.8, Wait.ABORT_WHEN_FALSE)
            eventPlayer.attack = false
        elif eventPlayer.attack == 4:
            eventPlayer.no_jump = true
            wait(0.25)
            waitUntil(eventPlayer.isOnGround(), 5)
            eventPlayer.applyImpulse(Vector.UP, 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
            wait(0.5)
            eventPlayer.forceButtonPress(Button.JUMP)
            eventPlayer.applyImpulse(worldVector(vect(false, true, -3), eventPlayer, Transform.ROTATION), 15, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
            wait(0.05, Wait.ABORT_WHEN_FALSE)
            eventPlayer.setStatusEffect(null, Status.FROZEN, 2)
            eventPlayer.attack = 4.1
            wait(0.1)
            eventPlayer.attack = 4.2
            wait(2)
            eventPlayer.no_jump = false
    elif eventPlayer.boss_ID == 2:
        if eventPlayer.attack == 1:
            eventPlayer.pos_cache[true] = nearestWalkablePosition(raycast(eventPlayer.target.getEyePosition(), eventPlayer.target.getEyePosition() + directionFromAngles(random.uniform(0, 360), 0) * 10, null, eventPlayer, true).getHitPosition())
            cowboy_tp()
            wait(0.7)
            while not eventPlayer.isFiringSecondaryFire():
                wait(false)
                eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
            wait(2)
            eventPlayer.cancelPrimaryAction()
            eventPlayer.pos_cache[true] = random.choice(cowboy_tp_array.exclude(eventPlayer.pos_cache))
            cowboy_tp()
        elif eventPlayer.attack == 2:
            wait(0.1)
            for eventPlayer.i in range(0, random.randint(3, 5), true):
                eventPlayer.boss_pet.forceButtonPress(Button.ABILITY_2)
                wait(0.7)
        elif eventPlayer.attack == 3:
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), 1000)
            eventPlayer.setDamageDealt(eventPlayer.damage_dealt * (0.6 if difficulty <= 0 else 1))
            for eventPlayer.i in range(0, random.randint(true, 3), true):
                if any([isInLoS(player + Vector.UP, eventPlayer.target.getEyePosition()) for player in cowboy_tp_array]):
                    eventPlayer.pos_cache[true] = random.choice(([player for player in cowboy_tp_array if isInLoS(eventPlayer.target.getEyePosition(), player + Vector.UP)]).exclude(eventPlayer.pos_cache))
                else:
                    eventPlayer.pos_cache[true] = nearestWalkablePosition(raycast(eventPlayer.target.getEyePosition(), eventPlayer.target.getEyePosition() + directionFromAngles(random.uniform(0, 360), 0) * 10, null, eventPlayer, true).getHitPosition())
                cowboy_tp()
                eventPlayer.stopThrottleInDirection()
                while not eventPlayer.isUsingUltimate():
                    eventPlayer.setUltCharge(100)
                    eventPlayer.forceButtonPress(Button.ULTIMATE)
                    wait(false)
                wait(random.uniform(2.5, 3))
                eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
                wait(false)
                eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
                waitUntil(not eventPlayer.isUsingUltimate(), 2)
            eventPlayer.setDamageDealt(eventPlayer.damage_dealt)
            eventPlayer.attack = false
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + Vector.DOWN * 0.5 + vect(random.uniform(-0.8, 0.8), false, random.uniform(-0.8, 0.8))), 1000)
            eventPlayer.pos_cache[true] = random.choice(cowboy_tp_array.exclude(eventPlayer.pos_cache))
            cowboy_tp()
    elif eventPlayer.boss_ID == 3:
        if eventPlayer.attack == 1:
            eventPlayer.ana_target_friends = false
            wait(0.5)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(0.2)
            eventPlayer.cancelPrimaryAction()
            eventPlayer.boss_target_location = eventPlayer.getEyePosition()
            eventPlayer.boss_target_location_2 = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 100, null, null, true).getHitPosition()
            chaseAtRate(eventPlayer.boss_target_location, eventPlayer.boss_target_location_2, 40)
            createEffect(getAllPlayers(), Effect.ORB, Color.VIOLET, updateEveryFrame(eventPlayer.boss_target_location), 0.2, EffectReeval.POSITION_AND_RADIUS)
            eventPlayer.boss_effects.append(getLastCreatedEntity())
            createBeam(getAllPlayers(), Beam.ZARYA_PARTICLE, updateEveryFrame(eventPlayer.boss_target_location), eventPlayer.boss_target_location + directionTowards(eventPlayer.boss_target_location_2, eventPlayer.getEyePosition()) * 2, Team.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.boss_effects.append(getLastCreatedEntity())
            waitUntil(eventPlayer.boss_target_location == eventPlayer.boss_target_location_2, 99999)
            while eventPlayer.boss_effects != []:
                destroyEffect(eventPlayer.boss_effects[0])
                del eventPlayer.boss_effects[false]
            playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.VIOLET, eventPlayer.boss_target_location_2, 5)
            eventPlayer.gas_pos = eventPlayer.boss_target_location_2
            eventPlayer.gas_radius = null
            chaseAtRate(eventPlayer.gas_radius, 6, 4)
            playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION_SOUND, Team.1, eventPlayer.boss_target_location_2, 200)
            playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION, Team.1, eventPlayer.boss_target_location_2, 1)
            damage(getPlayersInRadius(eventPlayer.boss_target_location_2, 4, Team.2, LosCheck.SURFACES), eventPlayer, 60)
            heal(getPlayersInRadius(eventPlayer.boss_target_location_2, 4, Team.1, LosCheck.SURFACES), eventPlayer, 100)
            wait(0.25)
            eventPlayer.ana_target_friends = true
        elif eventPlayer.attack == 2:
            eventPlayer.ana_target_friends = false
            wait(0.5)
            eventPlayer.forceButtonPress(Button.ABILITY_2)
            wait(true)
            eventPlayer.ana_target_friends = true
        elif eventPlayer.attack == 3:
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(0.2)
            eventPlayer.cancelPrimaryAction()
            eventPlayer.boss_target_location = eventPlayer.getEyePosition()
            eventPlayer.boss_target_location_2 = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 100, null, null, true).getHitPosition()
            chaseAtRate(eventPlayer.boss_target_location, eventPlayer.boss_target_location_2, 40)
            createEffect(getAllPlayers(), Effect.ORB, Color.AQUA, updateEveryFrame(eventPlayer.boss_target_location), 0.2, EffectReeval.POSITION_AND_RADIUS)
            eventPlayer.boss_effects.append(getLastCreatedEntity())
            createBeam(getAllPlayers(), Beam.ECHO_FOCUSING, updateEveryFrame(eventPlayer.boss_target_location), eventPlayer.boss_target_location + directionTowards(eventPlayer.boss_target_location_2, eventPlayer.getEyePosition()) * 2, Team.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.boss_effects.append(getLastCreatedEntity())
            waitUntil(eventPlayer.boss_target_location == eventPlayer.boss_target_location_2, 99999)
            while eventPlayer.boss_effects != []:
                destroyEffect(eventPlayer.boss_effects[0])
                del eventPlayer.boss_effects[false]
            playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.AQUA, eventPlayer.boss_target_location_2, 5)
            getPlayersInRadius(eventPlayer.boss_target_location_2, 5, Team.1).speed_boosted = 8
            getPlayersInRadius(eventPlayer.boss_target_location_2, 5, Team.2).speed_boosted = 4
            damage(getPlayersInRadius(eventPlayer.boss_target_location_2, 4, Team.2, LosCheck.SURFACES), eventPlayer, 60)
            heal(getPlayersInRadius(eventPlayer.boss_target_location_2, 4, Team.1, LosCheck.SURFACES), eventPlayer, 100)
            wait(0.25)
            playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION_SOUND, Team.1, eventPlayer.boss_target_location_2, 200)
            playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION, Team.1, eventPlayer.boss_target_location_2, 1)
            wait(0.25)
        elif eventPlayer.attack == 4:
            eventPlayer.ana_target_friends = false
            wait(0.5)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(0.2)
            eventPlayer.cancelPrimaryAction()
            eventPlayer.boss_target_location = eventPlayer.getEyePosition()
            eventPlayer.boss_target_location_2 = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 100, null, null, true).getHitPosition()
            chaseAtRate(eventPlayer.boss_target_location, eventPlayer.boss_target_location_2, 40)
            createEffect(getAllPlayers(), Effect.ORB, Color.BLACK, updateEveryFrame(eventPlayer.boss_target_location), 0.2, EffectReeval.POSITION_AND_RADIUS)
            eventPlayer.boss_effects.append(getLastCreatedEntity())
            createBeam(getAllPlayers(), Beam.MOIRA_COALESCENCE, updateEveryFrame(eventPlayer.boss_target_location), eventPlayer.boss_target_location + directionTowards(eventPlayer.boss_target_location_2, eventPlayer.getEyePosition()) * 2, Team.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            eventPlayer.boss_effects.append(getLastCreatedEntity())
            waitUntil(eventPlayer.boss_target_location == eventPlayer.boss_target_location_2, 99999)
            while eventPlayer.boss_effects != []:
                destroyEffect(eventPlayer.boss_effects[0])
                del eventPlayer.boss_effects[false]
            playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.BLACK, eventPlayer.boss_target_location_2, 5)
            getPlayersInRadius(eventPlayer.boss_target_location_2, 5, Team.2, LosCheck.SURFACES).blind = 4
            playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION_SOUND, Team.1, eventPlayer.boss_target_location_2, 200)
            playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION, Team.1, eventPlayer.boss_target_location_2, 1)
            damage(getPlayersInRadius(eventPlayer.boss_target_location_2, 4, Team.2, LosCheck.SURFACES), eventPlayer, 60)
            heal(getPlayersInRadius(eventPlayer.boss_target_location_2, 4, Team.1, LosCheck.SURFACES), eventPlayer, 100)
            wait(0.25)
            eventPlayer.ana_target_friends = true
    elif eventPlayer.boss_ID == 4:
        if eventPlayer.attack == 1:
            eventPlayer.setMoveSpeed(eventPlayer.speed * 2)
            while not eventPlayer.isUsingAbility1():
                eventPlayer.forceButtonPress(Button.ABILITY_1)
                wait(false)
            wait(true)
            waitUntil(not eventPlayer.isUsingAbility1(), 4)
            eventPlayer.setMoveSpeed(eventPlayer.speed)
        elif eventPlayer.attack == 2:
            eventPlayer.rein_throttle_mag = false
            eventPlayer.no_jump = true
            eventPlayer.startForcingButton(Button.CROUCH)
            eventPlayer.setProjectileSpeed(150)
            wait(true)
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()) + vect(random.uniform(-0.5, 0.5), false, random.uniform(-0.5, 0.5)), 1000)
            for eventPlayer.i in range(0, 5, true):
                eventPlayer.cancelPrimaryAction()
                eventPlayer.forceButtonPress(Button.ABILITY_2)
                wait(0.25)
                eventPlayer.boss_pet[0].cancelPrimaryAction()
                eventPlayer.boss_pet[0].forceButtonPress(Button.ABILITY_2)
                wait(0.25)
                if eventPlayer.hasStatus(Status.ROOTED):
                    break
            eventPlayer.stopForcingButton(Button.CROUCH)
            eventPlayer.rein_throttle_mag = true
            eventPlayer.no_jump = false
            eventPlayer.setProjectileSpeed(100)
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), eventPlayer.turn_rate)
        elif eventPlayer.attack == 3:
            eventPlayer.turn_rate = false
            eventPlayer.cancelPrimaryAction()
            eventPlayer.setUltCharge(100)
            wait(false)
            eventPlayer.forceButtonPress(Button.ULTIMATE)
            eventPlayer.applyImpulse(Vector.UP, 7, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
            wait(0.5)
            waitUntil(eventPlayer.isOnGround(), 10)
            wait(true)
            eventPlayer.turn_rate = 1000
        elif eventPlayer.attack == 4:
            eventPlayer.rein_throttle_mag = false
            for eventPlayer.i2 in range(0, 5, true):
                eventPlayer.turn_rate = false
                eventPlayer.setMoveSpeed(5 * distance(eventPlayer, eventPlayer.target))
                eventPlayer.setGravity(max(50, 200 - 5 * distance(eventPlayer, eventPlayer.target)))
                while not eventPlayer.isUsingAbility1():
                    eventPlayer.forceButtonPress(Button.ABILITY_1)
                    wait(false)
                playEffect(getAllPlayers(), DynamicEffect.WINSTON_JUMP_PACK_LANDING, Team.1, eventPlayer.getPosition(), 1)
                eventPlayer.applyImpulse(Vector.UP, 20, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
                wait(0.5)
                waitUntil(eventPlayer.isOnGround(), 10)
                eventPlayer.cancelPrimaryAction()
                playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_METEOR_STRIKE_IMPACT, Team.1, eventPlayer.getPosition(), 1)
                playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_METEOR_STRIKE_IMPACT_SOUND, Team.1, eventPlayer.getPosition(), 200)
                eventPlayer.grillager_victims = [player for player in getPlayersInRadius(eventPlayer, 8, Team.2, LosCheck.SURFACES_AND_ENEMY_BARRIERS) if player.isAlive() and (not (player.getHero() == Hero.REAPER and player.isUsingAbility1()))]
                for eventPlayer.i in range(0, len(eventPlayer.grillager_victims), true):
                    damage(eventPlayer.grillager_victims[evalOnce(eventPlayer.i)], eventPlayer, 37.5 * (9 - distance(eventPlayer, eventPlayer.grillager_victims[evalOnce(eventPlayer.i)])))
                    eventPlayer.grillager_victims[evalOnce(eventPlayer.i)].applyImpulse(directionFromAngles(horizontalAngleOfDirection(directionTowards(eventPlayer, eventPlayer.grillager_victims[evalOnce(eventPlayer.i)])), -37), 18, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
                eventPlayer.turn_rate = 1000
                wait(true)
                if eventPlayer.hasStatus(Status.ROOTED):
                    break
            eventPlayer.setMoveSpeed(eventPlayer.speed)
            eventPlayer.setGravity(100)
            eventPlayer.rein_throttle_mag = true
        elif eventPlayer.attack == 5:
            eventPlayer.rein_throttle_mag = false
            eventPlayer.no_jump = true
            eventPlayer.startForcingButton(Button.CROUCH)
            wait(true)
            eventPlayer.startFacing(eventPlayer.boss_target_location, 1000)
            eventPlayer.boss_pet[0].startFacing(eventPlayer.boss_target_location * -1, 1000)
            for eventPlayer.i in range(0, 3, 0.1):
                eventPlayer.boss_target_location = directionFromAngles(random.uniform(0, 360), 0)
                eventPlayer.setUltCharge(100)
                wait(0.1)
                eventPlayer.forceButtonPress(Button.ULTIMATE)
                if eventPlayer.hasStatus(Status.ROOTED):
                    break
            wait(0.25)
            eventPlayer.stopForcingButton(Button.CROUCH)
            eventPlayer.rein_throttle_mag = true
            eventPlayer.no_jump = false
            eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()), eventPlayer.turn_rate)
            eventPlayer.boss_pet[0].startFacing(eventPlayer.getFacingDirection(), 1000)
    eventPlayer.attack = false


rule "all player init":
    @Event eachPlayer

    eventPlayer.disableRespawn()
    eventPlayer.burner = []
    wait(0.05)
    if eventPlayer.getTeam() == Team.1:
        if dialogue_bot == eventPlayer:
            eventPlayer.no_dialogue = true
            eventPlayer.setInvisibility(Invis.ALL)
            eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
            eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 9999)
            eventPlayer.setGravity(false)
            eventPlayer.startForcingName("Dialogue-chan")
            eventPlayer.startForcingPosition(([player for player in getPlayersOnHero(main_speaker, Team.ALL) if not player.no_dialogue and player.getHero() != Hero.REINHARDT])[0] if vocalisation else vect(9999, 9999, 9999))
            eventPlayer.pre_init = true
            eventPlayer.disablePlayerCollision()
        elif eventPlayer.boss_ID > 0.9:
            if eventPlayer.boss_ID in [1, 2, 3, 4]:
                eventPlayer.setMaxHealth([null, 500, 500, 500, 12500][eventPlayer.boss_ID] * (0.777 if difficulty == -1 else 1))
                eventPlayer.startForcingName([null, "The Swordsman", "The Gunslinger", "The Alchemist", "The Lord of Adlersbrunn"][eventPlayer.boss_ID])
                eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
                if eventPlayer.boss_ID == 1:
                    while not eventPlayer.isUsingAbility1():
                        eventPlayer.forceButtonPress(Button.ABILITY_1)
                        wait(false)
                    wait(0.1)
                    eventPlayer.setFacing(worldVector(vect(false, -1, 3), eventPlayer, Transform.ROTATION), Relativity.TO_WORLD)
                    while not eventPlayer.isUsingUltimate():
                        eventPlayer.setUltCharge(100)
                        eventPlayer.forceButtonPress(Button.ULTIMATE)
                        wait(false)
                    bigMessage(getAllPlayers(), "The Swordsman")
                elif eventPlayer.boss_ID == 2:
                    eventPlayer.startThrottleInDirection(worldVector(Vector.RIGHT, eventPlayer, Transform.ROTATION), 1, Relativity.TO_WORLD)
                    wait(0.1)
                    while not eventPlayer.isUsingAbility1():
                        eventPlayer.forceButtonPress(Button.ABILITY_1)
                        wait(false)
                    while not eventPlayer.isUsingUltimate():
                        eventPlayer.setUltCharge(100)
                        eventPlayer.forceButtonPress(Button.ULTIMATE)
                        wait(false)
                    eventPlayer.stopThrottleInDirection()
                    bigMessage(getAllPlayers(), "The Gunslinger")
                elif eventPlayer.boss_ID == 3:
                    playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION, Team.1, eventPlayer.getPosition(), 1)
                    playEffect(getAllPlayers(), DynamicEffect.ANA_BIOTIC_GRENADE_EXPLOSION_SOUND, Team.1, eventPlayer.getPosition(), 200)
                    while not eventPlayer.isUsingUltimate():
                        eventPlayer.setUltCharge(100)
                        eventPlayer.forceButtonPress(Button.ULTIMATE)
                        wait(false)
                    createEffect(getAllPlayers(), Effect.ANA_NANO_BOOSTED, Team.1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                    eventPlayer.trail[false] = getLastCreatedEntity()
                    createEffect(getAllPlayers(), Effect.ANA_NANO_BOOSTED_SOUND, Team.1, eventPlayer, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                    eventPlayer.trail[true] = getLastCreatedEntity()
                    bigMessage(getAllPlayers(), "The Alchemist")
                elif eventPlayer.boss_ID == 4:
                    while not eventPlayer.isUsingAbility1():
                        eventPlayer.forceButtonPress(Button.ABILITY_1)
                        wait(false)
                    wait(1.2)
                    eventPlayer.cancelPrimaryAction()
                    eventPlayer.setFacing(worldVector(vect(false, -0.5, 3), eventPlayer, Transform.ROTATION), Relativity.TO_WORLD)
                    bigMessage(getAllPlayers(), "The Lord Of Adlersbrunn")
                    while not eventPlayer.isUsingUltimate():
                        eventPlayer.setUltCharge(100)
                        eventPlayer.forceButtonPress(Button.ULTIMATE)
                        wait(false)
                wait(0.1)
                eventPlayer.setHealth(999999)
            elif eventPlayer.boss_ID == 5:
                eventPlayer.startForcingName("Brazillager")
                eventPlayer.setMoveSpeed(200)
                eventPlayer.setMaxHealth(abs(2000))
                eventPlayer.setDamageDealt(100)
                eventPlayer.setKnockbackDealt(300)
                eventPlayer.setDamageReceived(70)
                eventPlayer.pre_init = true
                eventPlayer.avoid_enviro = true
                eventPlayer.random = eventPlayer.getFacingDirection()
                eventPlayer.startThrottleInDirection(eventPlayer.random, 1, Relativity.TO_WORLD)
                eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + Vector.DOWN * 0.5) + vect(random.uniform(-0.1, 0.1), false, random.uniform(-0.1, 0.1)), 1000)
                chaseAtRate(eventPlayer.real, eventPlayer.getUltCharge(), 1000)
                createProgressBarInWorldText(getAllPlayers(), eventPlayer.real, "{0} Ultimate Charge".format(abilityIconString(Hero.LUCIO, Button.ULTIMATE)), eventPlayer, 0.4, Clip.NONE, rgb(110, 255, 84), rgb(110, 255, 84), ProgressWorldTextReeval.VISIBILITY_AND_VALUES)
                wait(false)
                eventPlayer.setHealth(999999)
            else:
                eventPlayer.setDamageDealt(boss.damage_dealt)
                eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
                eventPlayer.setInvisibility(Invis.ALL)
                eventPlayer.pre_init = true
                if eventPlayer.boss_ID == 1.1:
                    eventPlayer.startForcingName("The Swordsman")
                elif eventPlayer.boss_ID == 1.2:
                    eventPlayer.startForcingName("Dragon's Breath")
                    eventPlayer.attachTo(boss, vect(false, -1.15, false))
                    eventPlayer.startFacing(boss.getFacingDirection(), 1000)
                    eventPlayer.disableEnvironmentCollision(true)
                    eventPlayer.startModifyingVoicelinePitch(1.2)
                elif eventPlayer.boss_ID == 1.3:
                    eventPlayer.startForcingName("Dragonstrike")
                    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), boss.target.getEyePosition() + vect(boss.target.getVelocity().x, false, boss.target.getVelocity().z) * (distance(eventPlayer.getEyePosition(), boss.target.getEyePosition()) / 20)), 1000)
                    eventPlayer.attachTo(boss, vect(false, false, false))
                    eventPlayer.disableEnvironmentCollision(true)
                    eventPlayer.startModifyingVoicelinePitch(1.2)
                    eventPlayer.setDamageDealt(boss.damage_dealt * 1.5)
                elif eventPlayer.boss_ID == 2.1:
                    eventPlayer.startForcingName("Dynamite")
                    eventPlayer.attachTo(boss, vect(false, false, false))
                    eventPlayer.setProjectileGravity(30)
                    eventPlayer.disableEnvironmentCollision(true)
                    eventPlayer.startModifyingVoicelinePitch(0.6)
                    eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), boss.target.getPosition() + Vector.DOWN * 0.1), 1000)
                elif eventPlayer.boss_ID == 4.1:
                    eventPlayer.startForcingName("The Lord of Adlersbrunn")
                    eventPlayer.setMaxHealth(abs(2500))
                    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
                    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)
                    eventPlayer.attachTo(boss, vect(false, false, false))
                    eventPlayer.startFacing(boss.getFacingDirection(), 1000)
                    eventPlayer.setDamageReceived(boss.damage_received)
                    wait(false)
                    eventPlayer.setHealth(99999)
                elif eventPlayer.boss_ID in [4.2, 4.3]:
                    eventPlayer.startForcingName("Plot Armour")
                    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.RED, eventPlayer, 2)
                    eventPlayer.setInvisibility(Invis.NONE)
                    eventPlayer.startScalingSize(false, false)
                    eventPlayer.startScalingBarriers(7.5, false)
                    eventPlayer.startForcingPosition(boss.getPosition() + Vector.UP + (directionFromAngles(pentagram_angle, 0) * (3 if eventPlayer.boss_ID == 4.2 else -3)))
                    eventPlayer.startFacing(directionTowards(boss.getPosition() + Vector.UP, eventPlayer.getPosition()), 1000)
                    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
                elif eventPlayer.boss_ID == 4.4:
                    eventPlayer.startForcingName("Rammstein")
                    eventPlayer.setMoveSpeed(400)
                    eventPlayer.setInvisibility(Invis.NONE)
                    eventPlayer.startForcingPosition(worldVector(vect(0.5, 0.5 + 0.3 * sinDeg(pentagram_angle), -1), boss, Transform.ROTATION_AND_TRANSLATION))
                    eventPlayer.startFacing(boss.getFacingDirection(), 1000)
                    eventPlayer.setDamageDealt(boss.damage_dealt * 1.5)
                    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.RED, eventPlayer, 2)
                    wait(0.1)
                    createEffect(getAllPlayers(), Effect.ECHO_CLONING, Team.1, eventPlayer, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    else:
        if eventPlayer.isDummy():
            if eventPlayer == merchant[0]:
                eventPlayer.disableNameplatesFor(getAllPlayers())
                eventPlayer.startForcingName("The Merchant")
                eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
                wait(2)
                while not eventPlayer.isUsingAbility1():
                    eventPlayer.setAbilityCooldown(Button.ABILITY_1, false)
                    eventPlayer.forceButtonPress(Button.ABILITY_1)
                    wait(false)
                wait(0.4)
                eventPlayer.teleport(vect(3.272, 6.277, -70.538) if phase == 7 else vect(74.474, 11.19, -110.302) if phase >= 16 else null)
                getAllPlayers().startCamera(worldVector(vect(false, 2, 4), eventPlayer, Transform.ROTATION_AND_TRANSLATION), eventPlayer.getEyePosition())
                waitUntil(not eventPlayer.isUsingAbility1(), 1)
                eventPlayer.communicate(Comms.HELLO)
                eventPlayer.enableNameplatesFor(getAllPlayers())
                wait(2)
                eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), ((sorted([player for player in getPlayers(Team.2) if player.getSlot() < 4], lambda i: distance(eventPlayer, i)))[0]).getEyePosition()), 500)
                shop_open = true
                getAllPlayers().stopCamera()
                waitUntil(shop_open, 99999)
                createEffect(getAllPlayers(), Effect.RING, Color.PURPLE, worldVector(Vector.UP, eventPlayer, Transform.ROTATION_AND_TRANSLATION) + evalOnce(eventPlayer.getFacingDirection()) * 0.2, 3, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                createInWorldText([player for player in getPlayersInRadius(eventPlayer, 3, Team.ALL, LosCheck.SURFACES) if not player.is_downed and not player.shop], "Press ''{0}'' to shop".format(inputBindingString(Button.INTERACT)), worldVector(Vector.UP * 1.5, eventPlayer, Transform.ROTATION_AND_TRANSLATION), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.PURPLE)
                createDummy(Hero.MOIRA, Team.1, -1, shop_campos.last() + Vector.DOWN, directionTowards(shop_campos.last(), shop_campos[0]))
                eventPlayer.attack = getLastCreatedEntity()
                eventPlayer.attack.startForcingName("The Merchant")
                eventPlayer.attack.no_dialogue = true
                eventPlayer.attack.pre_init = true
                eventPlayer.attack.disableNameplatesFor(getAllPlayers())
                while not eventPlayer.attack.isUsingAbility2():
                    eventPlayer.attack.forceButtonPress(Button.ABILITY_2)
                    wait(0.25)
                eventPlayer.attack.startForcingOutlineFor(getAllPlayers(), true, Color.PURPLE)
                shop_ui_setup()
            elif eventPlayer == summoner:
                eventPlayer.pre_init = true
                eventPlayer.startForcingName("The Summoner")
                eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
                eventPlayer.setStatusEffect(null, Status.BURNING, 9999)
                playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.RED, eventPlayer, 14)
                playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, eventPlayer.getPosition(), 2)
                wait(0.2)
                playEffect(getAllPlayers(), DynamicEffect.SOMBRA_EMP_EXPLOSION_SOUND, Color.ORANGE, eventPlayer.getEyePosition(), 200)
                wait(0.2)
                eventPlayer.communicate(Comms.HELLO)
                __skipIf__(phase > 18, true)
                bigMessage(getAllPlayers(), "The Summoner")
                wait(1.1)
                eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), ((sorted([player for player in getPlayers(Team.2) if player.getSlot() < 4], lambda i: distance(eventPlayer, i)))[0]).getEyePosition()), 500)
            elif eventPlayer.dead_summoner:
                eventPlayer.setStatusEffect(null, Status.BURNING, 9999)
                playEffect(getAllPlayers(), DynamicEffect.SOMBRA_EMP_EXPLOSION_SOUND, Color.ORANGE, eventPlayer.getEyePosition(), 200)
                eventPlayer.startForcingName("The Summoner")
                playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.RED, eventPlayer, 14)
                playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, eventPlayer.getPosition(), 2)
                kill(eventPlayer)
                getPlayers(Team.2).setStatusEffect(null, Status.INVINCIBLE, 9999)
                last_player_to_die = eventPlayer
            elif eventPlayer.zomnic == 1:
                eventPlayer.setHealingReceived(10)
                eventPlayer.no_jump = true
                eventPlayer.startForcingName("Zomnic")
                eventPlayer.setMoveSpeed(35)
                eventPlayer.setMaxHealth(1)
                eventPlayer.addHealthPool(Health.NORMAL, 150, true)
            elif eventPlayer.zomnic == 2:
                eventPlayer.startForcingName("Zombardier")
                eventPlayer.setAmmo(false, 9999)
                eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), worldVector(Vector.UP, eventPlayer.target, Transform.ROTATION_AND_TRANSLATION)) if eventPlayer.target else junkrat.getFacingDirection(), 1000)
                eventPlayer.startScalingSize(1.4, false)
                eventPlayer.startForcingPosition(junkrat.getPosition() + (vect(2, 0.3 + 0.3 * sinDeg(pentagram_angle), 2)))
                eventPlayer.setDamageDealt(100)
                eventPlayer.setMaxHealth(600)
                eventPlayer.startModifyingVoicelinePitch(0.75, false)
                wait(0.1)
                playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_METEOR_STRIKE_IMPACT_SOUND, Team.1, eventPlayer.getPosition(), 200)
                playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, eventPlayer, 1)
                playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.RED, eventPlayer, 8)
                eventPlayer.setHealth(99999)
                eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
            elif eventPlayer == faq_bot:
                eventPlayer.startForcingName("Zommy, the FAQ Zomnic")
                createInWorldText(getPlayersInRadius(eventPlayer, 3.5, Team.ALL), "Check the WORKSHOP SETTINGS page to change the difficulty or subtitle speed!{0}{1}{0}{0}{2}".format(newline, "(Go to ''Show Lobby'', then ''Settings'' in the top right, then ''Workshop Settings'' in the bottom left!)", "If the gamemode keeps crashing, try changing the ''Data Center Preference'' to ''Singapore 2''.{0}{1}".format(newline, "(Go to ''Show Lobby'', then ''Settings'' in the top right, then ''Lobby'' in the top middle and check under ''Match''!)")), eventPlayer, true, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(145, 227, 153))
                wait(true)
                eventPlayer.teleport(vect(-12.94, true, -0.41))
                eventPlayer.startFacing(directionTowards(eventPlayer.getEyePosition(), ((sorted([player for player in getPlayers(Team.2) if player.getSlot() < 4], lambda i: distance(eventPlayer, i)))[0]).getEyePosition()), 500)
        else:
            eventPlayer.disableGamemodeHud()
            eventPlayer.scrolls_equip = []
            eventPlayer.damage_received = 100
            eventPlayer.damage_dealt = 100
            eventPlayer.speed = 100
            eventPlayer.scrolls_random = random.shuffle([null, 1, 2, 3, 4, 5])
            if difficulty == -1:
                eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 99999)
            createEffect(getAllPlayers() if eventPlayer.is_downed else [], Effect.WINSTON_PRIMAL_RAGE, Team.1, eventPlayer.getEyePosition(), true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            createEffect(getAllPlayers() if eventPlayer.is_downed else [], Effect.RING, Color.RED if eventPlayer.revive_timer >= 8 else Color.YELLOW, eventPlayer.getEyePosition(), 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
            progressBarHud(getPlayers(Team.2) if eventPlayer.is_downed else [], eventPlayer.death_timer * 2.5 if eventPlayer.revive_timer >= 8 else (8 - eventPlayer.revive_timer) * 12.5, "{0} {1} needs to be revived!".format(heroIcon(eventPlayer.getHero()), eventPlayer) if eventPlayer.revive_timer >= 8 else "Reviving {0} {1}...".format(heroIcon(eventPlayer.getHero()), eventPlayer), HudPosition.RIGHT, -0.01, Color.RED if eventPlayer.revive_timer >= 8 else Color.YELLOW, Color.RED if eventPlayer.revive_timer >= 8 else Color.YELLOW)
            createIcon([player for player in getPlayers(Team.2) if not player.shop] if eventPlayer.is_downed else [], eventPlayer.getEyePosition(), Icon.SKULL, IconReeval.VISIBILITY_AND_POSITION, Color.YELLOW)
            eventPlayer.potions_max[9] = 200
    if eventPlayer.getHero() == Hero.TORBJORN and not eventPlayer.enemy_ID:
        eventPlayer.teleport(compressBakeMatcher)
    __abortIf__(eventPlayer.enemy_ID or eventPlayer.boss_ID == 4.4 or eventPlayer.isDummy() and eventPlayer.getTeam() == Team.2)
    waitUntil(phase > 0.5, 99999)
    createEffect(getAllPlayers() if ((eventPlayer.hasStatus(Status.PHASED_OUT) or eventPlayer.hasStatus(Status.INVINCIBLE)) and (not (eventPlayer.getHero() == Hero.REAPER and eventPlayer.isUsingAbility1()))) and not eventPlayer.isInSpawnRoom() else [], Effect.BAPTISTE_IMMORTALITY_FIELD_PROTECTED, eventPlayer.getTeam(), eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.immune_effect = getLastCreatedEntity()


rule "rein stand charge":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition eventPlayer.boss_ID == 4.4

    wait(random.uniform(1, 2) if eventPlayer.bright >= 3 else random.uniform(3, 5))
    waitUntil(not boss.hasStatus(Status.ROOTED), 99999)
    eventPlayer.target = random.choice([player for player in getLivingPlayers(Team.2) if not player.isDummy()])
    eventPlayer.boss_target_location = raycast(worldVector(Vector.UP, eventPlayer.target, Transform.ROTATION_AND_TRANSLATION), worldVector(Vector.UP, eventPlayer.target, Transform.ROTATION_AND_TRANSLATION) + directionFromAngles(random.uniform(0, 360), 0) * 10, null, eventPlayer, true).getHitPosition()
    eventPlayer.boss_target_location_2 = raycast(worldVector(Vector.UP, eventPlayer.target, Transform.ROTATION_AND_TRANSLATION), worldVector(Vector.UP, eventPlayer.target, Transform.ROTATION_AND_TRANSLATION) + directionTowards(eventPlayer.boss_target_location, worldVector(Vector.UP, eventPlayer.target, Transform.ROTATION_AND_TRANSLATION)) * 100, null, eventPlayer, true).getHitPosition()
    createBeam(getAllPlayers(), Beam.ECHO_FOCUSING, eventPlayer.boss_target_location, eventPlayer.boss_target_location_2, Team.1, EffectReeval.VISIBILITY)
    eventPlayer.boss_effects[false] = getLastCreatedEntity()
    eventPlayer.startFacing(directionTowards(eventPlayer.boss_target_location, eventPlayer.boss_target_location_2), 1000)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.RED, eventPlayer.getPosition(), 2)
    eventPlayer.stopForcingPosition()
    wait(0.05)
    eventPlayer.teleport(_extendedGlobalCollection)
    playEffect(getAllPlayers(), DynamicEffect.WRECKING_BALL_PILEDRIVER_IMPACT_SOUND, Color.RED, eventPlayer.boss_target_location, 200)
    wait(0.5)
    while not eventPlayer.isUsingAbility1():
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        wait(false)
    wait(0.5)
    eventPlayer.teleport(eventPlayer.boss_target_location)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.RED, eventPlayer, 2)
    playEffect(getAllPlayers(), DynamicEffect.TRACER_RECALL_REAPPEAR_SOUND, Color.RED, eventPlayer.boss_target_location, 200)
    destroyEffect(eventPlayer.boss_effects[0])
    destroyEffect(eventPlayer.boss_effects[true])
    waitUntil(not eventPlayer.isUsingAbility1(), 5)
    wait(true)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.RED, eventPlayer.getPosition(), 2)
    wait(false)
    eventPlayer.startForcingPosition(worldVector(vect(0.5, true, -2), boss, Transform.ROTATION_AND_TRANSLATION) + Vector.UP * sinDeg(pentagram_angle) * 0.5)
    wait(false)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.RED, eventPlayer, 2)
    eventPlayer.startFacing(boss.getFacingDirection(), 1000)
    if boss.isAlive():
        loop()


rule "mercy save":
    @Event eachPlayer
    @Team 2
    @Hero mercy
    @Condition eventPlayer.isDummy() == false

    mercy = eventPlayer


rule "junkrat save":
    @Event eachPlayer
    @Team 2
    @Hero junkrat
    @Condition eventPlayer.isDummy() == false

    junkrat = eventPlayer


rule "reaper save":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.isDummy() == false

    reaper = eventPlayer


rule "mercy heal target":
    @Event playerDealtHealing
    @Team 2
    @Hero mercy
    @Condition healee != eventPlayer

    eventPlayer.heal_target = healee


rule "mercy heal target off":
    @Event eachPlayer
    @Team 2
    @Hero mercy
    @Condition mercy.getCurrentWeapon() == 1
    @Condition eventPlayer.isFiringPrimaryFire() == false

    eventPlayer.heal_target = null


rule "killing b\ufefflow":
    @Event playerDealtFinalBlow
    @Team 2

    if eventPlayer.getHero() == Hero.ROADHOG:
        if null in eventPlayer.scrolls_equip:
            eventPlayer.addHealthPool(Health.NORMAL, 100, false, false)
    if eventPlayer.getHero() == Hero.REAPER:
        if null in eventPlayer.scrolls_equip:
            eventPlayer.setAbilityCooldown(random.choice([i for i in [Button.ABILITY_1, Button.ABILITY_2] if eventPlayer.getAbilityCooldown(i)]), false)


rule "electrify effect":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.electrify > false

    createEffect(getAllPlayers(), Effect.WINSTON_TESLA_CANNON_TARGET, Team.1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.electrify_effect.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.WINSTON_TESLA_CANNON_TARGET_SOUND, Team.1, eventPlayer, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.electrify_effect.append(getLastCreatedEntity())
    chaseAtRate(eventPlayer.electrify, false, true, ChaseRateReeval.NONE)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 99999)
    waitUntil(not eventPlayer.electrify, 99999)
    eventPlayer.clearStatusEffect(Status.STUNNED)
    stopChasingVariable(eventPlayer.electrify)
    while eventPlayer.electrify_effect != []:
        destroyEffect(eventPlayer.electrify_effect[0])
        del eventPlayer.electrify_effect[false]


rule "mercy chaos magic":
    @Event playerTookDamage
    @Team 2
    @Condition (mercy.heal_target == eventPlayer or mercy.isUsingUltimate()) == true
    @Condition null in mercy.scrolls_equip == true

    heal(mercy, null, 0.5 * eventDamage * (true + mercy.potions[true] * 0.05))


rule "mercy chaos magic 2":
    @Event playerDealtDamage
    @Team 2
    @Condition (mercy.heal_target == eventPlayer or mercy.isUsingUltimate()) == true
    @Condition null in mercy.scrolls_equip == true

    heal(mercy, null, 0.5 * eventDamage * (true + mercy.potions[true] * 0.05))


rule "mercy mystic transfusion":
    @Event eachPlayer
    @Team 2
    @Hero mercy
    @Condition eventPlayer.getCurrentWeapon() == 1
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true
    @Condition 1 in eventPlayer.scrolls_equip == true

    if eventPlayer.getHealth() < 60:
        return
    if eventPlayer.isFiringPrimaryFire():
        heal(eventPlayer.heal_target, eventPlayer, 100)
        damage(eventPlayer, null, 60)
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.YELLOW, eventPlayer.heal_target, 1)
        playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.PURPLE, eventPlayer, 1)
        playEffect(getAllPlayers(), DynamicEffect.BRIGITTE_REPAIR_PACK_IMPACT_SOUND, Team.2, eventPlayer.heal_target, 200)


rule "mercy bewitching grasp":
    @Event eachPlayer
    @Team 2
    @Hero mercy
    @Condition eventPlayer.getCurrentWeapon() == 1
    @Condition eventPlayer.isHoldingButton(eventPlayer.button_damageboost) == true
    @Condition eventPlayer.has_status == false
    @Condition 2 in eventPlayer.scrolls_equip == true

    if eventPlayer.isFiringPrimaryFire():
        eventPlayer.cancelPrimaryAction()
    eventPlayer.is_grasping = true
    while eventPlayer.isHoldingButton(eventPlayer.button_damageboost) and eventPlayer.getCurrentWeapon() == 1 and not eventPlayer.isFiringPrimaryFire() and not eventPlayer.has_status:
        eventPlayer.damage_target = (sorted([player for player in getLivingPlayers(Team.1) if (isInLoS(eventPlayer.getEyePosition(), player.getEyePosition(), BarrierLos.BLOCKED_BY_ALL_BARRIERS) and angleBetweenVectors(eventPlayer.getFacingDirection(), directionTowards(eventPlayer.getEyePosition() - eventPlayer.getFacingDirection(), player)) < 30 and not player.hasStatus(Status.PHASED_OUT) and (distance(eventPlayer, player) < (30 if eventPlayer.isUsingUltimate() else 15)))], lambda i: angleBetweenVectors(eventPlayer.getFacingDirection(), directionTowards(eventPlayer.getEyePosition(), i.getEyePosition()))))[0]
        damage(eventPlayer.damage_target, eventPlayer, 15)
        wait(0.2)
        damage(eventPlayer.damage_target, eventPlayer, 15)
        if not eventPlayer.isHoldingButton(eventPlayer.button_damageboost) or eventPlayer.getCurrentWeapon() == 2:
            break
        wait(0.2)
    eventPlayer.is_grasping = false
    eventPlayer.damage_target = null


rule "mercy bewitching grasp chain":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.hasStatus(Status.PHASED_OUT) == false
    @Condition mercy.isUsingUltimate() == true
    @Condition mercy.damage_target != null
    @Condition eventPlayer != mercy.damage_target
    @Condition 2 in mercy.scrolls_equip == true

    createBeam(getAllPlayers() if distance(eventPlayer, mercy.damage_target) <= 10 and mercy.damage_target.isAlive() and isInLoS(eventPlayer.getEyePosition(), mercy.damage_target.getEyePosition(), BarrierLos.BLOCKED_BY_ALL_BARRIERS) else [], Beam.MOIRA_GRASP_CONNECTED, mercy.damage_target, eventPlayer, Team.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.grasp_effect = getLastCreatedEntity()
    while mercy.isUsingUltimate() and eventPlayer.isAlive() and mercy.damage_target != null:
        if distance(eventPlayer, mercy.damage_target) <= 10 and isInLoS(eventPlayer.getEyePosition(), mercy.damage_target.getEyePosition(), BarrierLos.BLOCKED_BY_ALL_BARRIERS):
            damage(eventPlayer, mercy, 15)
        wait(0.2)
    destroyEffect(eventPlayer.grasp_effect)


rule "mercy flying broomstick":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isAlive() == true
    @Condition mercy.isUsingAbility1() == true
    @Condition eventPlayer.broomsticked == false
    @Condition 3 in mercy.scrolls_equip == true

    if mercy.getSpeed() > 10 * (true + mercy.potions[3] * 0.05):
        if distance(eventPlayer, mercy) < 5:
            if eventPlayer.hasStatus(Status.PHASED_OUT):
                return
            damage(eventPlayer, mercy, 40)
            eventPlayer.applyImpulse(normalize(mercy.getVelocity()) + directionTowards(mercy, eventPlayer) + Vector.UP * 1.2, 20, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
            playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_RISING_UPPERCUT_IMPACT_SOUND, Team.1, eventPlayer, 200)
            playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_RISING_UPPERCUT_IMPACT, Team.1, eventPlayer, 1)
            eventPlayer.broomsticked = true
            wait(2)
            eventPlayer.broomsticked = false
    wait(wait)
    if ruleCondition:
        loop()


rule "mercy undying servitude":
    @Event eachPlayer
    @Team 2
    @Hero mercy
    @Condition 4 in eventPlayer.scrolls_equip == true
    @Condition eventPlayer.getAbilityCooldown(eventPlayer.button_rez) == false
    @Condition eventPlayer.isHoldingButton(eventPlayer.button_rez) == true

    eventPlayer.ubercharge_target = (sorted([player for player in getLivingPlayers(Team.2) if isInLoS(eventPlayer.getEyePosition(), player.getEyePosition()) and eventPlayer.isInViewAngle(player.getEyePosition(), 45) and not player.isDummy() and distance(eventPlayer, player) <= 15], lambda i: angleBetweenVectors(eventPlayer.getFacingDirection(), directionTowards(eventPlayer.getEyePosition(), i.getEyePosition()))))[0]
    if eventPlayer.ubercharge_target != null:
        eventPlayer.ubercharge_target.setStatusEffect(eventPlayer, Status.INVINCIBLE, 8)
        heal(eventPlayer.ubercharge_target, eventPlayer, 99999)
        playEffect(getAllPlayers(), DynamicEffect.DOOMFIST_METEOR_STRIKE_IMPACT, Team.2, eventPlayer.ubercharge_target.getPosition(), 1)
        playEffect(getAllPlayers(), DynamicEffect.LUCIO_SOUND_BARRIER_CAST_SOUND, Team.1, eventPlayer.ubercharge_target.getPosition(), 200)
        eventPlayer.setAbilityCooldown(eventPlayer.button_rez, 20)
        createEffect(getAllPlayers(), Effect.ANA_NANO_BOOSTED_SOUND, Team.1, eventPlayer.ubercharge_target, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.ubercharge_effect[false] = getLastCreatedEntity()
        createEffect(getAllPlayers(), Effect.BAPTISTE_IMMORTALITY_FIELD_PROTECTED_SOUND, Team.1, eventPlayer.ubercharge_target, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.ubercharge_effect[true] = getLastCreatedEntity()
        wait(1.5)
        destroyEffect(eventPlayer.ubercharge_effect[0])
        wait(6.5)
        destroyEffect(eventPlayer.ubercharge_effect[true])


rule "mercy hex mania":
    @Event eachPlayer
    @Team 2
    @Hero mercy
    @Condition 5 in eventPlayer.scrolls_equip == true
    @Condition eventPlayer.isUsingUltimate() == true

    getPlayersInRadius(eventPlayer, 30, Team.1, LosCheck.SURFACES).hex = 8
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.PURPLE, eventPlayer.getEyePosition(), 30)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getEyePosition(), 30)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getEyePosition(), 40)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getEyePosition(), 50)
    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_EMP_EXPLOSION_SOUND, Team.1, eventPlayer.getEyePosition(), 200)


rule "hex effect":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.hex > false

    eventPlayer.forceButtonPress(Button.INTERACT)
    eventPlayer.setStatusEffect(null, Status.HACKED, 99999)
    chaseAtRate(eventPlayer.hex, false, true, ChaseRateReeval.NONE)
    eventPlayer.target = random.choice(getPlayers(Team.1).exclude(dialogue_bot))
    waitUntil(not eventPlayer.hex, 99999)
    stopChasingVariable(eventPlayer.hex)
    eventPlayer.clearStatusEffect(Status.HACKED)
    if eventPlayer.boss_ID in [4.2, 4.3] or eventPlayer.enemy_ID == 24:
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        wait(false)
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)


rule "junkrat junkensteins revenge":
    @Event eachPlayer
    @Team 2
    @Hero junkrat
    @Condition eventPlayer.isDead() == true
    @Condition null in eventPlayer.scrolls_equip == true
    @Condition mercy.isUsingAbility2() == false

    wait(true, Wait.ABORT_WHEN_FALSE)
    eventPlayer.resurrect()
    wait(false)
    kill(eventPlayer)
    if ruleCondition:
        loop()


rule "junkrat superconductive":
    @Event eachPlayer
    @Team 1
    @Condition junkrat.isAlive() == true
    @Condition junkrat.getNormalizedHealth() < 0.666

    if 1 in junkrat.scrolls_equip:
        if distance(eventPlayer, junkrat) < 8:
            damage(eventPlayer, junkrat, 12)
    wait(0.2)
    if ruleCondition:
        loop()


rule "junkrat shocking surprise":
    @Event playerDealtDamage
    @Team 2
    @Hero junkrat
    @Condition eventAbility in [Button.ABILITY_1, Button.ULTIMATE] == true
    @Condition 3 in eventPlayer.scrolls_equip == true

    victim.electrify = 2


rule "junkrat faraday trap":
    @Event playerTookDamage
    @Team 1
    @Condition eventAbility == Button.ABILITY_2
    @Condition 4 in junkrat.scrolls_equip == true

    createEffect(getAllPlayers(), Effect.WINSTON_TESLA_CANNON_TARGET, Team.2, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.faraday_effect.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.WINSTON_TESLA_CANNON_TARGET_SOUND, Team.2, eventPlayer, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.faraday_effect.append(getLastCreatedEntity())
    createEffect(getAllPlayers(), Effect.RING, Color.WHITE, eventPlayer, 8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.faraday_effect.append(getLastCreatedEntity())
    createBeam(getAllPlayers(), Beam.WINSTON_TESLA_CANNON, eventPlayer, getPlayersInRadius(eventPlayer, 8, Team.1, LosCheck.SURFACES)[getTotalTimeElapsed() * 3 % (len(getPlayersInRadius(eventPlayer, 8, Team.1, LosCheck.SURFACES)) - true)], Team.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.faraday_effect.append(getLastCreatedEntity())
    while eventPlayer.hasStatus(Status.ROOTED):
        damage([player for player in getPlayersInRadius(eventPlayer, 8, Team.1, LosCheck.SURFACES) if not player.hasStatus(Status.ROOTED)], junkrat, 50)
        getPlayersInRadius(eventPlayer, 8, Team.1, LosCheck.SURFACES).exclude(eventPlayer).setStatusEffect(junkrat, Status.ROOTED, 0.3)
        wait(0.2)
    while eventPlayer.faraday_effect != []:
        destroyEffect(eventPlayer.faraday_effect[0])
        del eventPlayer.faraday_effect[false]


rule "junkrat zombardier":
    @Event eachPlayer
    @Team 2
    @Hero junkrat
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition 5 in eventPlayer.scrolls_equip == true

    createDummy(Hero.ZENYATTA, Team.2, 10, eventPlayer, Vector.UP)
    getLastCreatedEntity().zomnic = 2


rule "zombardier target":
    @Event eachPlayer
    @Team 2
    @Hero zenyatta
    @Condition eventPlayer.zomnic == 2

    eventPlayer.target = (sorted([player for player in getPlayers(Team.1) if player.isAlive() and not player.hasStatus(Status.PHASED_OUT) and not player.hasStatus(Status.INVINCIBLE)], lambda i: distance(eventPlayer, i) + (1000 * (not isInLoS(eventPlayer.getEyePosition(), i.getEyePosition())))))[0]
    wait(2)
    if ruleCondition:
        loop()


rule "zombardier delete":
    @Event eachPlayer
    @Team 2
    @Hero zenyatta
    @Condition eventPlayer.zomnic == 2

    wait(20)
    kill(eventPlayer)


rule "roadhog recycling":
    @Event eachPlayer
    @Team 2
    @Hero roadhog
    @Condition eventPlayer.isCrouching() == true
    @Condition eventPlayer.getHealth() > 100
    @Condition 2 in eventPlayer.scrolls_equip == true

    eventPlayer.setDamageDealt((eventPlayer.damage_dealt * (1.5 if eventPlayer.nano else 1)) * 2)
    waitUntil(not eventPlayer.isCrouching() or eventPlayer.getHealth() <= 100, 99999)
    eventPlayer.setDamageDealt(eventPlayer.damage_dealt * (1.5 if eventPlayer.nano else 1))


rule "roadhog recycling 2":
    @Event eachPlayer
    @Team 2
    @Hero roadhog
    @Condition 2 in eventPlayer.scrolls_equip == true
    @Condition eventPlayer.ammo_cache != eventPlayer.getAmmo(false)

    if eventPlayer.ammo_cache > eventPlayer.getAmmo(false) and eventPlayer.isCrouching() and eventPlayer.getHealth() > 100:
        eventPlayer.setHealth(eventPlayer.getHealth() - 100)
    eventPlayer.ammo_cache = eventPlayer.getAmmo(false)


rule "roadhog chain reaction 1":
    @Event playerDealtDamage
    @Team 2
    @Hero roadhog
    @Condition 3 in eventPlayer.scrolls_equip == true
    @Condition eventAbility == Button.ABILITY_1

    wait(1.3)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, false)


rule "roadhog roar":
    @Event eachPlayer
    @Team 2
    @Hero roadhog
    @Condition 4 in eventPlayer.scrolls_equip == true
    @Condition eventPlayer.isUsingAbility2() == true

    wait(false)
    eventPlayer.cancelPrimaryAction()
    eventPlayer.setAbilityCooldown(Button.ABILITY_2, 10)
    heal(eventPlayer, eventPlayer, 300)
    if not roar:
        createEffect(getAllPlayers(), Effect.WINSTON_PRIMAL_RAGE, Team.2, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.roar_effect.append(getLastCreatedEntity())
        createEffect(getAllPlayers(), Effect.WINSTON_PRIMAL_RAGE_SOUND, Team.1, eventPlayer, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.roar_effect.append(getLastCreatedEntity())
        createEffect(getAllPlayers(), Effect.WINSTON_PRIMAL_RAGE_SOUND, Team.1, eventPlayer, 200, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.roar_effect.append(getLastCreatedEntity())
    roar = 5
    chaseAtRate(roar, false, true, ChaseRateReeval.NONE)
    eventPlayer.damage_received = 40
    eventPlayer.setDamageReceived(eventPlayer.damage_received * (1.5 if eventPlayer.nano else 1))
    getPlayers(Team.1).target = eventPlayer
    waitUntil(not roar, 99999)
    stopChasingVariable(roar)
    eventPlayer.damage_received = 100
    eventPlayer.setDamageReceived(eventPlayer.damage_received * (1.5 if eventPlayer.nano else 1))
    while eventPlayer.roar_effect != []:
        destroyEffect(eventPlayer.roar_effect[0])
        del eventPlayer.roar_effect[false]


rule "roadhog beware":
    @Event eachPlayer
    @Team 2
    @Hero roadhog
    @Condition 5 in eventPlayer.scrolls_equip == true
    @Condition eventPlayer.isUsingUltimate() == true

    eventPlayer.setKnockbackDealt(0)
    eventPlayer.speed = 200 + eventPlayer.potions[3] * 10
    eventPlayer.setMoveSpeed(eventPlayer.speed * (true - (0.5 * (eventPlayer.speed_boosted > false))))
    waitUntil(not eventPlayer.isUsingUltimate(), 6)
    eventPlayer.setKnockbackDealt(100)
    eventPlayer.speed = 100 + eventPlayer.potions[3] * 5
    eventPlayer.setMoveSpeed(eventPlayer.speed * (true - (0.5 * (eventPlayer.speed_boosted > false))))


rule "reaper marked for death":
    @Event playerDealtDamage
    @Team 2
    @Hero reaper
    @Condition eventAbility == Button.PRIMARY_FIRE
    @Condition 1 in eventPlayer.scrolls_equip == true

    eventPlayer.death_mark.damage_received = 130 - 15 * difficulty
    eventPlayer.death_mark.setDamageReceived(eventPlayer.death_mark.damage_received * (1.5 if eventPlayer.death_mark.nano else 1))
    wait(false)
    eventPlayer.death_mark = victim
    victim.damage_received = (130 - 15 * difficulty) * 1.25
    victim.setDamageReceived(victim.damage_received * (1.5 if victim.nano else 1))


rule "reaper marked for death bug fix":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition entityExists(eventPlayer.death_mark) == false

    eventPlayer.death_mark = null


rule "reaper the reapers scythe":
    @Event eachPlayer
    @Team 1
    @Condition reaper.isMeleeing() == true
    @Condition 2 in reaper.scrolls_equip == true

    while distance(eventPlayer, reaper) > 5:
        wait(wait)
    if not reaper.isMeleeing():
        return
    if distance(eventPlayer, reaper) <= 5:
        damage(eventPlayer, reaper, 45 if distance(eventPlayer, reaper) <= 2.5 else 75)


rule "reaper the reapers scythe visual":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.isMeleeing() == true
    @Condition 2 in eventPlayer.scrolls_equip == true

    playEffect(getAllPlayers(), DynamicEffect.MOIRA_FADE_REAPPEAR_SOUND, Team.1, eventPlayer.getEyePosition(), 150)
    eventPlayer.scythe_swing *= -1
    eventPlayer.scythe_length = null
    eventPlayer.scythe_angle = -10
    chaseOverTime(eventPlayer.scythe_angle, 130, 0.3, ChaseTimeReeval.NONE)
    chaseOverTime(eventPlayer.scythe_length, 5, 0.05, ChaseTimeReeval.NONE)
    wait(0.4)
    chaseOverTime(eventPlayer.scythe_length, false, 0.1, ChaseTimeReeval.NONE)
    wait(0.1)
    stopChasingVariable(eventPlayer.scythe_angle)
    stopChasingVariable(eventPlayer.scythe_length)


rule "reaper vengeful ghost":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition 3 in eventPlayer.scrolls_equip == true

    damage(getPlayersInRadius(eventPlayer, 7, Team.1, LosCheck.SURFACES), eventPlayer, 12)
    wait(0.2)
    if eventPlayer.isUsingAbility1():
        loop()


rule "reaper jumpscare":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.isUsingAbility2() == true
    @Condition 4 in eventPlayer.scrolls_equip == true

    wait(1.7, Wait.ABORT_WHEN_FALSE)
    ([player for player in getPlayersInRadius(eventPlayer, 7, Team.1, LosCheck.SURFACES) if not player.hasStatus(Status.PHASED_OUT)]).setStatusEffect(eventPlayer, Status.FROZEN, 3)
    playEffect(getAllPlayers(), DynamicEffect.PHARAH_CONCUSSIVE_BLAST, Team.2, eventPlayer.getEyePosition(), 5)
    playEffect(getAllPlayers(), DynamicEffect.WINSTON_JUMP_PACK_LANDING, Team.2, eventPlayer.getEyePosition(), 5)
    playEffect(getAllPlayers(), DynamicEffect.SIGMA_HYPERSPHERE_IMPLOSION_SOUND, Color.WHITE, eventPlayer.getEyePosition(), 200)


rule "reaper dance with the reaper":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition 5 in eventPlayer.scrolls_equip == true

    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 3)
    eventPlayer.speed = 300 + eventPlayer.potions[3] * 15
    eventPlayer.setMoveSpeed(eventPlayer.speed * (0.5 if eventPlayer.speed_boosted else 1))
    wait(3)
    eventPlayer.speed = 100 + eventPlayer.potions[3] * 5
    eventPlayer.setMoveSpeed(eventPlayer.speed * (0.5 if eventPlayer.speed_boosted else 1))


rule "cowboy name":
    @Condition phase == 13
    @Condition line_number == 1

    cowboy_name = "J{0} Mc{1}".format("qwertyuiopasdfghjklzxcvbnm".substring(random.randint(false, 21), 4), "qwertyuiopasdfghjklzxcvbnm".substring(random.randint(false, 21), 4))
    wait(false)
    if ruleCondition:
        loop()


rule "mystery skull visual":
    @Condition phase == 9
    @Condition sombra_egg < 2

    playEffect(getAllPlayers(), DynamicEffect.SOMBRA_HACKED_STARTING, Team.1, vect(-5.36, 4, -40.78), 1)
    wait(true)
    if ruleCondition:
        loop()


rule "mystery skull":
    @Condition phase == 9
    @Condition sombra_egg == false
    @Condition any([distance(player, vect(-5.36, 2, -40.78)) < 3.5 for player in getPlayers(Team.2)]) == true

    sombra_egg = 1
    if difficulty == 3:
        if dialogue_priority > true:
            return
        dialogue_priority = 1
        is_dialoguing = true
        waitUntil(not main_dialogue, 99999)
        is_dialoguing = false
        active_dialogue_list = [[Hero.SOMBRA, "...........................", 1], [Hero.SOMBRA, "...You are worthy.", 1], [Hero.SOMBRA, "Witness me bequeath to thee this mystery key.", 1], [Hero.SOMBRA, "Ask no more ''Which door is it for?'', for I forgor.", 1.5]]
        main_dialogue()
        dialogue_priority = false
        sombra_egg = 2
        smallMessage(getPlayers(Team.2), "Obtained mystery key!")
        playEffect(getAllPlayers(), DynamicEffect.SOMBRA_TRANSLOCATOR_DISAPPEAR_SOUND, Team.1, vect(-5.36, 4, -40.78), 200)
        map = vect(54.45, 11.53, -100.12)
    else:
        if dialogue_priority > true:
            return
        dialogue_priority = 1
        is_dialoguing = true
        waitUntil(not main_dialogue, 99999)
        is_dialoguing = false
        active_dialogue_list = [[Hero.SOMBRA, "...........................", 1], [Hero.SOMBRA, "...I only care for those who dare to bear the despair of a nightmare.", 1], [Hero.SOMBRA, "You are all not worthy.", 1.5]]
        main_dialogue()
        dialogue_priority = false
        sombra_egg = 4


rule "mystery door":
    @Condition sombra_egg == 2
    @Condition phase >= 9
    @Condition phase <= 12

    mystery_door += 0.1
    if mystery_door >= 15:
        playEffect(getAllPlayers(), DynamicEffect.HANZO_SONIC_ARROW_INITIAL_PULSE_SOUND, Team.1, map, 200)
        mystery_door = false
    if any([distance(player, map) < 2.3 for player in getPlayers(Team.2)]):
        sombra_egg = 3
        smallMessage(getPlayers(Team.2), "A clicking sound was heard...")
        playEffect(getAllPlayers(), DynamicEffect.BRIGITTE_REPAIR_PACK_ARMOR_SOUND, Team.2, map, 200)
        createEffect(getAllPlayers(), Effect.RING, Color.WHITE, map, 2.4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        skull_effect[true] = getLastCreatedEntity()
    wait(0.1)
    if ruleCondition:
        loop()


rule "enter mystery door":
    @Condition sombra_egg == 3
    @Condition (all([distance(i, map) < 2.3 for i in [player for player in getPlayers(Team.2) if not player.isDummy()]])) == true

    sombra_egg = 4
    ([player for player in getPlayers(Team.1) if player.enemy_ID > false]).teleport(compressBakeMatcher)
    getPlayers(Team.2).teleport(vect(54.93, 11.21, -102.17))
    createDummy(Hero.LUCIO, Team.1, -1, vect(54.44, 11.21, -122.39), Vector.UP)
    getLastCreatedEntity().boss_ID = 5
    destroyEffect(skull_effect[true])
    bigMessage(getAllPlayers(), "The Brazillager")


rule "b\ufeffrazillager throttle":
    @Event eachPlayer
    @Team 1
    @Hero lucio

    eventPlayer.random = directionFromAngles(horizontalAngleOfDirection(directionTowards(eventPlayer.getPosition(), vect(55, 11.21, -118))) + random.uniform(-90, 90), 0) if isInLoS(vect(54.44, 11.21, -122.39), eventPlayer.getEyePosition()) else directionTowards(eventPlayer.getPosition(), vect(55, 11.21, -118))
    wait(random.uniform(0.2, 1))
    loop()


rule "b\ufeffrazillager jump":
    @Event eachPlayer
    @Team 1
    @Hero lucio

    eventPlayer.communicate(Comms.HELLO)
    eventPlayer.forceButtonPress(Button.JUMP)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(random.uniform(1, 3))
    loop()


rule "b\ufeffrazillager boop":
    @Event eachPlayer
    @Team 1
    @Hero lucio
    @Condition distance(eventPlayer, eventPlayer.target) < 4

    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)


rule "b\ufeffrazillager ult":
    @Event eachPlayer
    @Team 1
    @Hero lucio
    @Condition eventPlayer.getUltCharge() >= 100

    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 99999)
    eventPlayer.applyImpulse(Vector.UP, 15, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    waitUntil(eventPlayer.getHealthOfType(Health.SHIELDS), 10)
    restartMatch()


rule "dialogue chan":
    @Condition phase > null
    @Condition (not entityExists(dialogue_bot) or not dialogue_bot) == true

    createDummy(Hero.REINHARDT, Team.1, false, _extendedGlobalCollection, Vector.UP)
    dialogue_bot = getLastCreatedEntity()


rule "wait time":
    @Condition wait != 0.03 * getNumberOfLivingPlayers(Team.1)

    wait = 0.03 * getNumberOfLivingPlayers(Team.1)


rule "console check":
    @Event eachPlayer
    @Team 2
    @Hero mercy
    @Condition eventPlayer.button_rez == false
    @Condition magnitude(eventPlayer.getThrottle()) > 0

    if all([not i % 1 for i in [eventPlayer.getThrottle().x, eventPlayer.getThrottle().z]]):
        eventPlayer.button_damageboost = Button.SECONDARY_FIRE
        eventPlayer.button_rez = Button.ABILITY_2
    else:
        eventPlayer.button_damageboost = Button.ABILITY_2
        eventPlayer.button_rez = Button.SECONDARY_FIRE


rule "restart no players":
    @Event playerLeft

    wait(true)
    if ([player for player in getPlayers(Team.2) if not player.isDummy()]) == []:
        restartMatch()
