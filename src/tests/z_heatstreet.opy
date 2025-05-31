#!suppressWarnings w_9999 w_closest_player

settings {
    "main": {
        "description": "☆ Heat Street: TALENTS Chateau Guillard! by LemonAid#11644\n★ [KFVAY] - Fight for survival against an overwhelming force. Your enemies are numerous and hunting you down. Can you survive all waves? The AI is able to play 25 different heroes, some of which have new abilities. PvE game mode suited for 1 to 5 players. \n☆ Version 3.4.6 from the classic version, featuring new enemies, abilities, and talents for every hero!\n★ Credits to: Shingen and SgtMoody\n☆ Join our Discord! discord.gg/WJr3gFC",
        "modeName": "Heat Street: Talents - Chateau"
    },
    "lobby": {
        "mapRotation": "afterGame",
        "team1Slots": 5,
        "team2Slots": 0,
        "returnToLobby": "never",
        "useExperimentalUpdate": true
    },
    "gamemodes": {
        "tdm": {
            "enabledMaps": [
                "chateauGuillard"
            ]
        },
        "general": {
            "gamemodeStartTrigger": "immediately",
            "heroLimit": "off",
            "enableKillCam": false,
            "enableKillFeed": false,
            "scoreToWin": 1,
            "spawnHealthPacks": "enabled"
        }
    },
    "heroes": {
        "team1": {
            "baptiste": {
                "ultDuration%": 125
            },
            "brigitte": {
                "damageDealt%": 115
            },
            "hanzo": {
                "projectileGravity%": 0
            },
            "junkerQueen": {
                "ultGen%": 60
            },
            "kiriko": {
                "damageDealt%": 115
            },
            "mercy": {
                "damageDealt%": 115,
                "ultGen%": 40
            },
            "moira": {
                "damageDealt%": 115,
                "ultGen%": 40
            },
            "widowmaker": {
                "ultDuration%": 120
            },
            "wreckingBall": {
                "ultGen%": 50
            },
            "zarya": {
                "damageDealt%": 73,
                "ultGen%": 40
            },
            "zenyatta": {
                "damageDealt%": 120,
                "healingDealt%": 150,
                "ultGen%": 60
            },
            "general": {
                "ultGen%": 50,
                "combatUltGen%": 90
            }
        },
        "team2": {
            "ana": {
                "ability2Cooldown%": 10,
                "damageDealt%": 60,
                "healingDealt%": 150,
                "health%": 150,
                "ability1Cooldown%": 10
            },
            "baptiste": {
                "damageDealt%": 46,
                "healingDealt%": 10,
                "ability2Cooldown%": 10,
                "projectileGravity%": 500,
                "projectileSpeed%": 0,
                "ability1Cooldown%": 10
            },
            "bastion": {
                "damageDealt%": 62,
                "damageReceived%": 70,
                "health%": 500,
                "enableInfiniteUlt": true
            },
            "brigitte": {
                "secondaryFireRechargeRate%": 200,
                "damageDealt%": 31,
                "health%": 125,
                "enableAbility3": false,
                "ability1Cooldown%": 10
            },
            "cassidy": {
                "ability1Cooldown%": 10,
                "damageDealt%": 23,
                "ability2Cooldown%": 10,
                "health%": 89
            },
            "dva": {
                "ability1Cooldown%": 10,
                "damageDealt%": 35,
                "secondaryFireRechargeRate%": 200,
                "health%": 60
            },
            "echo": {
                "damageDealt%": 29,
                "ability1Cooldown%": 0,
                "ability2Cooldown%": 10,
                "secondaryFireCooldown%": 10,
                "enableUlt": false
            },
            "genji": {
                "damageDealt%": 91,
                "ability2Cooldown%": 10,
                "health%": 333,
                "enableInfiniteUlt": true,
                "ability1Cooldown%": 10
            },
            "hanzo": {
                "damageDealt%": 75,
                "health%": 333,
                "ability3Cooldown%": 10,
                "ability2Cooldown%": 10,
                "ability2Quantity%": 12
            },
            "kiriko": {
                "damageDealt%": 134,
                "healingDealt%": 150,
                "healingReceived%": 10,
                "health%": 400,
                "ability2Cooldown%": 10,
                "ability1Cooldown%": 10,
                "ability1Distance%": 300
            },
            "lucio": {
                "ability2Cooldown%": 125,
                "damageDealt%": 35,
                "healingDealt%": 167,
                "healingReceived%": 25,
                "health%": 126,
                "movementSpeed%": 110,
                "secondaryFireCooldown%": 125,
                "secondaryFireKb%": 85
            },
            "mei": {
                "ability1Cooldown%": 250,
                "damageDealt%": 35,
                "healingReceived%": 200,
                "health%": 222,
                "enableInfiniteAmmo": true,
                "enableMelee": false,
                "enableSpawningWithUlt": true,
                "primaryFireFreezeDuration%": 120
            },
            "orisa": {
                "damageDealt%": 30,
                "secondaryFireCooldown%": 10,
                "ability1Cooldown%": 0,
                "ability2Cooldown%": 10
            },
            "pharah": {
                "ability2Cooldown%": 40,
                "ability2Kb%": 75,
                "damageDealt%": 25,
                "health%": 111,
                "passiveRechargeRate%": 300,
                "passiveVerticalSpeed%": 81,
                "ability1Acceleration%": 60,
                "ability1Cooldown%": 100
            },
            "reaper": {
                "damageDealt%": 23,
                "ability1Cooldown%": 10
            },
            "reinhardt": {
                "ability1Cooldown%": 10,
                "damageDealt%": 136,
                "damageReceived%": 75,
                "ability2Cooldown%": 10,
                "healingReceived%": 50,
                "health%": 333,
                "projectileSpeed%": 150
            },
            "roadhog": {
                "ability1Cooldown%": 10,
                "damageDealt%": 75,
                "damageReceived%": 90,
                "ultKb%": 150
            },
            "sigma": {
                "ability2Cooldown%": 10,
                "ability2Kb%": 125,
                "damageDealt%": 47,
                "health%": 111,
                "ability1Cooldown%": 10
            },
            "soldier": {
                "ability2Cooldown%": 10,
                "damageDealt%": 84,
                "healingDealt%": 125,
                "health%": 300,
                "secondaryFireCooldown%": 0,
                "secondaryFireKb%": 80,
                "projectileSpeed%": 150,
                "ultDuration%": 125
            },
            "sombra": {
                "damageDealt%": 42,
                "projectileGravity%": 0,
                "ability2Cooldown%": 10,
                "ability1Cooldown%": 10
            },
            "torbjorn": {
                "damageDealt%": 60,
                "damageReceived%": 50,
                "ability1Cooldown%": 0,
                "health%": 500,
                "enableInfiniteUlt": true,
                "enableInfiniteAmmo": true,
                "ability2Cooldown%": 10,
                "ability2Duration%": 500,
                "projectileGravity%": 500,
                "projectileSpeed%": 250,
                "enableSpawningWithUlt": true
            },
            "tracer": {
                "ability1Cooldown%": 150,
                "damageDealt%": 51,
                "health%": 150,
                "projectileGravity%": 500,
                "projectileSpeed%": 0
            },
            "widowmaker": {
                "damageDealt%": 63,
                "ability1Cooldown%": 10,
                "health%": 125,
                "enableUlt": false,
                "ultDuration%": 120,
                "ability2Cooldown%": 10
            },
            "wreckingBall": {
                "damageDealt%": 89,
                "health%": 250,
                "enableInfiniteUlt": true,
                "movementSpeed%": 50,
                "projectileSpeed%": 150,
                "enableRollOnly": true
            },
            "zarya": {
                "damageDealt%": 18,
                "health%": 93,
                "ability1Cooldown%": 10,
                "ability2Cooldown%": 10,
                "projectileGravity%": 40
            },
            "enabledHeroes": [
                "ashe",
                "doomfist",
                "junkrat",
                "mercy",
                "symmetra",
                "winston",
                "zenyatta"
            ],
            "general": {
                "ammoClipSize%": 200
            }
        }
    },
    "workshop": {
        "Difficulty": [
            1
        ]
    }
}

#Global variables

globalvar gamemode 1
globalvar is_hard_mode_enabled 2
globalvar Special_Thanks 3
globalvar wave_number 4
globalvar enable_normal_spawns 5
globalvar special_spawns_count 6
globalvar tier_4_spawns_block_end_t 7
globalvar last_spawn_phase_end_t 8
globalvar upgrade_count 9
globalvar boss_list_1 11
globalvar boss_list_2 12
globalvar objective_phase_number 13
globalvar objective_progress 14
globalvar enable_objective_enemy_spawn 15
globalvar iv_dom_objective_pos 16
globalvar iv_dom_objective_all_pos_list 17
globalvar hvt_dom_objective_killed_count 18
globalvar hvt_call_reinforcements_end_t 19
globalvar dom_point_A_contesters 20
globalvar dom_point_B_contesters 21
globalvar is_infrasight_on 22
globalvar combatants 23
globalvar combatants_count 24
globalvar progress_bar_strings 25
globalvar game_or_mutator_start_huds 26
globalvar is_load_limit_reached 27
globalvar is_waiting_to_remove_bot 28
globalvar temp_1 29
globalvar temp_2 30
globalvar player_spawn_pos 31
globalvar player_spawn_facing 32
globalvar ability_shop_pos 33
globalvar buy_menu_left_up_forward 34
globalvar buy_menu_cam_pos 35
globalvar buy_menu_base_pos 36
globalvar spawn_pos_list 37
globalvar spawn_nearest_node_idx_list 38
globalvar nodes 39
globalvar nodes_count 40
globalvar edges 41
globalvar distance_matrix 42
globalvar elevator_nodes 43
globalvar is_map_cg 44
globalvar char_string 47
globalvar aim_offset 48
globalvar is_victory_declared 49
globalvar is_mutator_activation_disabled 52
globalvar is_mutator_mode_enabled 53
globalvar money_amount 54
globalvar money_mult 55
globalvar diff_health_mult 56
globalvar diff_damage_mult 57
globalvar current_perks 58
globalvar current_perks_huds_list 59
globalvar mutators_list 60
globalvar is_gmut_enabled 61
globalvar gmut_storm_raging 62
globalvar gmut_sympathy_gains 63
globalvar gmut_adaptive_shield 64
globalvar gmut_fortified 65
globalvar mut_amped 66
globalvar mut_hardwired 67
globalvar mut_promotion 68
globalvar mut_advanced_medkit 69
globalvar mut_lock_n_load 71
globalvar mut_emp_rounds 72
globalvar mut_heartburn 73
globalvar mut_deep_wounds 74
globalvar mut_gear_upgrade 75
globalvar mut_reinforcements 76
globalvar mut_mutation 77
globalvar mut_expendable 78
globalvar mut_swan_song 79
globalvar mut_fully_loaded 81
globalvar mut_bulletproof 82
globalvar gmut_list 83
globalvar is_apocalyptic 84
globalvar mut_count 85
globalvar i 86
globalvar mut_artful_dodger 87
globalvar mut_counterstrike 88
globalvar mut_yakuza 89
globalvar gmut_salvation 90
globalvar mut_low_blow 91
globalvar gazed____ 92
globalvar length 93


#Player variables

playervar ab_player 0
playervar ab_var_1 1
playervar ab_var_2 2
playervar ab_var_3 3
playervar ab_wraith_pos 4
playervar sombra_stealth_timer 5
playervar last_damage_taken_t 6
playervar is_combatant 7
playervar is_controller_player 8
playervar mercy_res_button 9
playervar downed_start_t 10
playervar revivers 11
playervar revive_timer 12
playervar is_revive_slow 13
playervar tased_end_t 14
playervar is_flying 15
playervar is_invisible 16
playervar spectated_player 17
playervar death_cam_target 18
playervar is_changing_heroes 19
playervar in_buy_menu_start_t 20
playervar is_showing_active_abilities 21
playervar can_use_drop_in_buy_menu 22
playervar money_spent_amount 23
playervar is_pathfinding_disabled 24
playervar is_using_combat_pathfinding 25
playervar combat_pathfinding_type 26
playervar nav_pos 27
playervar nav_idx 28
playervar best_nav_idx 29
playervar dom_nav_guard_idx 30
playervar is_nav_reachable_node 31
playervar last_nav_update_t 32
playervar last_time_at_node_t 33
playervar real_speed_pos_1 34
playervar real_speed_pos_2 35
playervar last_jump_t 36
playervar real_speed 37
playervar eye_offset 38
playervar facing_override_direction 39
playervar is_wraith 40
playervar is_ranged 41
playervar can_dodge 42
playervar can_stagger 43
playervar can_quick_melee 44
playervar recall_block_end_t 45
playervar is_target_in_los 46
playervar target 47
playervar target_last_seen_pos 48
playervar is_ignoring_other_targets 49
playervar base_tier 50
playervar real_tier 51
playervar is_alive 52
playervar is_living_boss 53
playervar iv_is_portal 54
playervar aggression_health_threshold 55
playervar is_using_boss_aggression 56
playervar is_aggressive 57
playervar is_fortified 58
playervar fear_end_t 59
playervar is_hardwired 60
playervar soldier_espionage 61
playervar is_mutated 62
playervar is_expendable 63
playervar gmut_var 64
playervar gmut_fortified_bypass_end_t 65
playervar last_hit_by_shatter_t 67
playervar active_ab_number 68
playervar active_ab_cooldown 69
playervar active_ab_var 70
playervar active_ab_is_cloaked 71
playervar active_ab_is_frenzied 72
playervar active_ab_is_smoked 73
playervar active_ab_effect_list 74
playervar ab_bought_abilities_string 75
playervar ab_headhunter 76
playervar ab_quick_fix 77
playervar current_quick_fix_speed_bonus 78
playervar ab_charged 79
playervar ab_heavy_impact 80
playervar ab_second_wind 81
playervar ab_triage 82
playervar ab_resilience 83
playervar ab_antigens 84
playervar ab_haste 85
playervar ab_priority 86
playervar ab_health_bonus 87
playervar ab_damage_bonus 88
playervar ab_healing_bonus 89
playervar perk_mystery_swap 90
playervar perk_bulletstorm 91
playervar perk_die_hard 92
playervar perk_brass_knuckles 93
playervar perk_vampiric 94
playervar perk_crash_n_dash 95
playervar perk_golden_hour 96
playervar perk_super_charge 97
playervar perk_nemesis 98
playervar nemesis_killer 99
playervar nemesis_beam_effect 100
playervar perk_special_operator 101
playervar perk_sharpshooter 102
playervar perk_shockproof 103
playervar health_percent 104
playervar Damage_Dealt 105
playervar healing_dealt_percent 106
playervar Move_Speed 107
playervar heal_mod 108
playervar Slowed_until 109
playervar talent_text 110
playervar damage_mod 111
playervar Ability_Countdown 112
playervar Ability_Active 113
playervar Ability_Projectile1 114
playervar Ability_Available 115
playervar Ability_End 116
playervar Effects__ 117
playervar i 118
playervar Smoked_Screen 119
playervar Tut_Active 120
playervar Swapped_Talent_Array 121
playervar Talent2 122
playervar Talent1 123
playervar HP_Pool 124
playervar Chain_Reaction_Immune 125
playervar Chain_Reaction_On 126
playervar Damage_Received 127


#Subroutine names

subroutine update_combatants 0
subroutine declare_victory 1
subroutine play_incoming_sound_twice 2
subroutine teleport_to_free_spawn 3
subroutine nwp_teleport 4
subroutine start_facing 5
subroutine find_chase_target 6
subroutine update_target_nav 7
subroutine find_wp_near_nav 8
subroutine check_drop 9
subroutine upgrade_health_and_healing 10
subroutine start_kill_remaining_phase 11
subroutine set_random_perks 12
subroutine iv_defend_portal 13
subroutine mut_add_mutator 14
subroutine disable_player 15
subroutine enable_player 16
subroutine open_buy_menu 17
subroutine leave_buy_menu 18
subroutine check_if_enough_money 19
subroutine buy_active_ability 20
subroutine remove_active_ability 21
subroutine update_ab_string_and_play_sound 22
subroutine play_purchase_confirmation_sound 23
subroutine set_map_cg 28
subroutine call_reinforcements 32
subroutine Cancel_Momentum 33


#Activated extensions

#!extension buffStatusEffects
#!extension projectiles
#!extension spawnMoreDummyBots

#!suppressWarnings w_ow2_rule_condition_chase

rule "Mod by LemonAid#11644, Original mode by Shingen#21859":
    disableInspector()


rule "Special thanks":
    Special_Thanks = createWorkshopSettingEnum("Special thanks", "Cool people", 0, ["Thank you to", "Shingen", "Developful", "SgtMoody"])


rule "Global (Init): Set Workshop Vars, Game Vars, Disable Game Components, Create Game Entities":
    #Select and initialize Gamemode
    gamemode = []
    if createWorkshopSettingBool("Enabled Game Modes", "Invasion", true):
        gamemode.append(0)
    if createWorkshopSettingBool("Enabled Game Modes", "High Value Target", true, 1):
        gamemode.append(1)
    #Workaround: Need to reduce Slots because of spectator bug
    if createWorkshopSettingBool("Enabled Game Modes", "Domination", true, 2) and getNumberOfSlots(Color.TEAM_1) <= 7:
        gamemode.append(2)
    if len(gamemode):
        gamemode = random.choice(gamemode)
    else:
        #Workaround: Need to reduce Slots because of spectator bug
        gamemode = random.randint(0, 2 if getNumberOfSlots(Team.1) <= 7 else 1)
    if gamemode == 2:
        boss_list_1 = [Hero.BAPTISTE, Hero.CASSIDY, Hero.BAPTISTE, Hero.ECHO, Hero.ZARYA, Hero.LUCIO, Hero.WIDOWMAKER, Hero.ANA, Hero.ORISA, Hero.SIGMA, Hero.TRACER, Hero.ANA, Hero.ORISA, Hero.HANZO, Hero.GENJI, Hero.BRIGITTE, Hero.WIDOWMAKER, Hero.REAPER, Hero.KIRIKO, Hero.DVA, Hero.PHARAH, Hero.REINHARDT]
        boss_list_2 = [Hero.BRIGITTE, Hero.SOMBRA, Hero.REAPER, Hero.PHARAH, Hero.KIRIKO, Hero.TRACER, Hero.ROADHOG, Hero.ZARYA, Hero.LUCIO, Hero.DVA, Hero.KIRIKO, Hero.ROADHOG, Hero.DVA, Hero.GENJI, Hero.REINHARDT, Hero.MEI, Hero.CASSIDY, Hero.SOMBRA, Hero.SIGMA, Hero.ECHO, Hero.BRIGITTE, Hero.MEI]
    else:
        boss_list_1 = [Hero.CASSIDY, Hero.BAPTISTE, Hero.LUCIO, Hero.PHARAH, Hero.WIDOWMAKER, Hero.SOMBRA, Hero.REAPER, Hero.ANA, Hero.ECHO, Hero.MEI, Hero.ZARYA, Hero.TRACER, Hero.ORISA, Hero.KIRIKO, Hero.REINHARDT, Hero.BRIGITTE, Hero.HANZO, Hero.GENJI, Hero.DVA, Hero.ROADHOG, Hero.SIGMA, Hero.REINHARDT]
    #0=Easy, 1=Normal, 2=Hard, 3=Apocalypse
    temp_1 = createWorkshopSettingEnum("Settings", "Difficulty", 0, ["Easy", "Normal", "Hard", "Apocalyptic"])
    #100-500%
    money_mult = createWorkshopSettingInt("Settings", "Money Generation Scalar (in Percent)", 100, 100, 500, 1)
    #0=15w, 1=22w
    length = createWorkshopSettingEnum("Settings", "Game Length", 0, ["15 Waves", "22 Waves"], 2)
    hudSubtext(getAllPlayers(), "{0} Difficulty{1}".format(["Easy", "Normal", "Hard", "Apocalyptic"][temp_1], "" if money_mult == 100 else ", +{0}% money".format(money_mult - 100)), HudPosition.RIGHT, -100, Color.ORANGE, HudReeval.VISIBILITY)
    money_mult /= 100
    if temp_1 == 0:
        diff_health_mult = 0.6
        diff_damage_mult = 0.6
    elif temp_1 == 1:
        diff_health_mult = 0.8
        diff_damage_mult = 0.8
    elif temp_1 == 2:
        is_hard_mode_enabled = true
        diff_health_mult = 1.15
        diff_damage_mult = 1.15
        mut_count = 5
    else:
        is_apocalyptic = 1
        money_mult *= 1.4
        diff_health_mult = 1.5
        diff_damage_mult = 1.25
        mut_count = 5
    gazed____ = 1
    #0=On, 1=Off
    is_mutator_activation_disabled = 0
    if is_mutator_activation_disabled == 0:
        is_mutator_mode_enabled = true
        money_mult *= 2
    disableGamemodeCompletion()
    disableScoring()
    disableAnnouncer()
    progress_bar_strings = ["□□□□□", "▣□□□□", "■□□□□", "■▣□□□", "■■□□□", "■■▣□□", "■■■□□", "■■■▣□", "■■■■□", "■■■■▣", "■■■■■"]
    char_string = "0123456789!?#$%"
    aim_offset = 0.5 * Vector.DOWN
    mutators_list[20] = null
    mutators_list = [i_ for _, i_ in mutators_list]
    gmut_list[4] = null
    gmut_list = [i_ for _, i_ in gmut_list]
    if is_hard_mode_enabled or is_apocalyptic:
        for i in range(-1, 3):
            wait(false)
            mut_add_mutator()
    #Initialize Map Specific Variables
    if getCurrentMap() == Map.CHATEAU_GUILLARD or getCurrentMap() == Map.CHATEAU_GUILLARD_HALLOWEEN:
        set_map_cg()
        is_map_cg = true
    else:
        hudHeader(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\u2001\u2001\u2001\u2001\u2001This Map is not supported! Restart and choose a valid map.\u2001\u2001\u2001\u2001\u2001\n\n\n\n\n\n\n\n\n\n\n\n\n\n", HudPosition.TOP, -1000, Color.YELLOW, HudReeval.VISIBILITY)
    nodes_count = len(nodes)
    buy_menu_left_up_forward[1] = directionFromAngles(horizontalAngleOfDirection(buy_menu_left_up_forward[2]), verticalAngleOfDirection(buy_menu_left_up_forward[2]) - 90)
    buy_menu_left_up_forward[0] = crossProduct(buy_menu_left_up_forward[1], buy_menu_left_up_forward[2])
    buy_menu_base_pos = buy_menu_cam_pos - 9 * buy_menu_left_up_forward[1] + 142 * buy_menu_left_up_forward[2]
    #Workaround: Need to reduce Slots because of spectator bug
    if getNumberOfSlots(Team.1) > 8:
        hudHeader(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\u2001\u2001\u2001\u2001\u2001Too many player slots! Set Max Team 1 Players to 5 or lower and restart.\u2001\u2001\u2001\u2001\u2001\n\n\n\n\n\n\n\n\n\n\n\n\n\n", HudPosition.TOP, -1000, Color.YELLOW, HudReeval.VISIBILITY)
    #Create HUDs
    hudSubtext(getAllPlayers(), "Heat Street: Talents - 3.4.6 | KFVAY - Chateau Guillard)\u200b \u200b-\u200b \u200b{0}{1}".format(["Invasion", "High Value Target", "Domination"][gamemode], ("      {0}{1}{2}".format("0:" if getMatchTime() > 10 else "", floor(ceil(10 * getMatchTime()) / 10), "" if getMatchTime() > 10 else ".{0}".format(ceil(10 * getMatchTime()) % 10))) if getMatchTime() else ""), HudPosition.TOP, -100, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    if length == 0:
        hudHeader(getAllPlayers(), " Wave {0}/15 ".format(wave_number), HudPosition.TOP, -99, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    elif length == 1:
        hudHeader(getAllPlayers(), " Wave {0}/22 ".format(wave_number), HudPosition.TOP, -99, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    if gamemode == 2:
        hudSubheader(getAllPlayers(), " " if objective_phase_number == 1 else " \n\n\n", HudPosition.TOP, -98, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    else:
        hudSubheader(getAllPlayers(), " " if objective_phase_number == 1 or objective_phase_number == 2 else " \n\n\n", HudPosition.TOP, -98, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudHeader([player for player in combatants if distance(player, ability_shop_pos) > 2], " \n{0}\n\n\u2001Press {1} to Start\u2001\n".format(["\u2001\u2001\u2001Invasion", "  High Value Target", "\u2001\u2001  Domination"][gamemode], inputBindingString(Button.INTERACT)), HudPosition.TOP, -92, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    game_or_mutator_start_huds[0] = getLastCreatedText()
    hudSubtext([player for player in combatants if distance(player, ability_shop_pos) > 2], "Change the Objective in the Workshop Settings", HudPosition.TOP, -91, Color.GREEN, HudReeval.VISIBILITY)
    game_or_mutator_start_huds[1] = getLastCreatedText()
    hudHeader([player for player in combatants if not player.downed_start_t and (player.is_changing_heroes or objective_phase_number == 0 and not player.in_buy_menu_start_t)], " \n\n\n\u2001   You can change Heroes now\n\n\u2001Hold {0} to open the Hero menu\u2001\n".format(inputBindingString(Button.RELOAD)), HudPosition.TOP, -90, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext([player for player in combatants if player.downed_start_t], "Waiting for revival. Press {0} to spectate the next player.".format(inputBindingString(Button.JUMP)), HudPosition.TOP, -70, Color.YELLOW, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(localPlayer, " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" if localPlayer.Tut_Active else "Press [{0}] + [{1}] to toggle hud".format(inputBindingString(Button.CROUCH), inputBindingString(Button.RELOAD)), HudPosition.LEFT, 9, Color.ORANGE, HudReeval.VISIBILITY_AND_STRING)
    progressBarHud(localPlayer if (localPlayer.revive_timer if localPlayer.downed_start_t else any([localPlayer in player.revivers for player in combatants])) else [], localPlayer.revive_timer if localPlayer.downed_start_t else ((sorted([player for player in combatants if localPlayer in player.revivers], lambda i_: i_.revive_timer)).last()).revive_timer, "You are being revived" if localPlayer.downed_start_t else "Reviving {0}".format("{0} Teammates".format(len([player for player in combatants if localPlayer in player.revivers])) if len([player for player in combatants if localPlayer in player.revivers]) > 1 else ([player for player in combatants if localPlayer in player.revivers])[0]), HudPosition.TOP, -60, Color.ORANGE if (localPlayer.is_revive_slow if localPlayer.downed_start_t else all([not localPlayer in player.revivers or player.is_revive_slow for player in combatants])) else Color.SKY_BLUE)
    hudHeader(getAllPlayers() if is_infrasight_on else [], "{0} Enemies have improved aim!".format(abilityIconString(Hero.WIDOWMAKER, Button.ULTIMATE)), HudPosition.TOP, -50, Color.VIOLET, HudReeval.VISIBILITY)
    hudHeader(localPlayer if any([player.ab_var_1 and player.target == localPlayer for player in getPlayersOnHero(Hero.SOLDIER, Color.TEAM_2)]) else [], "{0} Locked on!".format(abilityIconString(Hero.SOLDIER, Button.ULTIMATE)), HudPosition.TOP, -49, rgb(245 + 10 * (sin(4 * getTotalTimeElapsed())), 205 + 50 * (sin(4 * getTotalTimeElapsed())), 200 * (sin(4 * getTotalTimeElapsed()))), HudReeval.VISIBILITY_AND_COLOR)
    hudSubtext(getAllPlayers(), " \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", HudPosition.TOP, -1, Color.WHITE, HudReeval.VISIBILITY)
    hudHeader(getPlayers(Team.2), "Server Load: {0}, Average: {1}, Peak: {2}".format(getServerLoad(), getAverageServerLoad(), getPeakServerLoad()), HudPosition.LEFT, -110, Color.YELLOW if is_waiting_to_remove_bot else Color.WHITE, HudReeval.VISIBILITY_STRING_AND_COLOR)
    hudText([], null, "Mod by Lemonaid:\nChateau Guillard: KFVAY\nKanezaka: H4H7K\nDorado: NNNS6\nEichenwalde: MH9DN\nHollywood: K3235\nMalevento: 8GRV8\\Rout", "____\nCredits to:\n Shingen\n SgtMoody\nDevelopful\n", HudPosition.LEFT, -1000, Color.WHITE, Color.LIME_GREEN, Color.GREEN, HudReeval.VISIBILITY, SpecVisibility.ALWAYS)
    #Create Sombra Stealth Timer IWT
    createProgressBarInWorldText(localPlayer if localPlayer.getHero() == Hero.SOMBRA and localPlayer.is_invisible else [], localPlayer.sombra_stealth_timer, "Invisible", updateEveryFrame(localPlayer.getEyePosition() + (100 * (directionFromAngles(localPlayer.getHorizontalFacingAngle(), localPlayer.getVerticalFacingAngle() + 13.5)))), 1.2, Clip.NONE, Color.PURPLE, Color.WHITE, ProgressWorldTextReeval.VISIBILITY_POSITION_AND_VALUES)
    money_amount = 1400
    set_random_perks()
    #Priority A: Players to Bots Damage Increase
    startDamageModification([player for player in getPlayers(Team.2) if player.is_target_in_los and player.target.ab_priority == 1], combatants, 125, DamageReeval.RECEIVERS_AND_DAMAGERS)
    #Priority A: Bots to Players Damage Decrease
    startDamageModification(combatants, [player for player in getPlayers(Team.2) if player.is_target_in_los and player.target.ab_priority == 1], 75, DamageReeval.RECEIVERS_AND_DAMAGERS)
    #Priority C: Players to Players Healing Increase
    startHealingModification([player for player in combatants if player.getNormalizedHealth() <= 0.5 and player.last_damage_taken_t + 2.5 > getTotalTimeElapsed()], [player for player in combatants if player.ab_priority == 3], 140)
    #Nemesis: Your Nemesis IWT
    createInWorldText(localPlayer if localPlayer.nemesis_killer else [], "Your Nemesis", localPlayer.nemesis_killer, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_POSITION, Color.TEAM_2)
    createEffect(getAllPlayers(), Effect.RING, Color.SKY_BLUE, ability_shop_pos, 2, EffectReeval.VISIBILITY)
    createInWorldText(getAllPlayers(), "Ability Shop", ability_shop_pos, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY, Color.SKY_BLUE)
    hudHeader([] if not localPlayer.is_combatant or localPlayer.downed_start_t or localPlayer.in_buy_menu_start_t or localPlayer.is_changing_heroes else localPlayer, ("Press {0} to buy Abilities".format(inputBindingString(Button.INTERACT)) if getMatchTime() else " \n\u2001Press {0} to buy Abilities\u2001\n".format(inputBindingString(Button.INTERACT))) if distance(localPlayer, ability_shop_pos) <= 2 else "Hold {0} to buy Abilities".format(inputBindingString(Button.INTERACT)) if localPlayer.can_use_drop_in_buy_menu or getMatchTime() else "", HudPosition.TOP, -80, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    #Create Buy Menu IWTs, on scale 2.5 1 space is 8.5 pixels
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "┃\n┃\n┃\n┃\n┃\n┃\n┃\n┃\n┃", buy_menu_base_pos - 21 * buy_menu_left_up_forward[1] + 90 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "┃\n┃\n┃\n┃\n┃\n┃\n┃\n┃\n┃", buy_menu_base_pos - 21 * buy_menu_left_up_forward[1] - 90 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Refund", buy_menu_base_pos + 45 * buy_menu_left_up_forward[1] + 90 * buy_menu_left_up_forward[0], 3, Clip.NONE, WorldTextReeval.VISIBILITY, Color.GREEN)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "[{0}] {1}".format(inputBindingString(Button.MELEE), "Show passive Abilities" if localPlayer.is_showing_active_abilities else "Show active Abilities"), buy_menu_base_pos + 45 * buy_menu_left_up_forward[1], 3, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.GREEN)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "[{0}] Leave".format(inputBindingString(Button.INTERACT)), buy_menu_base_pos + 45 * buy_menu_left_up_forward[1] - 90 * buy_menu_left_up_forward[0], 3, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.GREEN)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Priority A\n\u2001 Swap" if localPlayer.ab_priority else "Priority A\n\u20011200$", buy_menu_base_pos + 20 * buy_menu_left_up_forward[1] + 112.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, Color.YELLOW if localPlayer.ab_priority else rgb(0, 134, 171))
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Priority B\n\u2001 Swap" if localPlayer.ab_priority else "Priority B\n\u20011200$", buy_menu_base_pos - 2.5 * buy_menu_left_up_forward[1] + 112.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, Color.YELLOW if localPlayer.ab_priority else rgb(0, 134, 171))
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Priority C\n\u2001 Swap" if localPlayer.ab_priority else "Priority C\n\u20011200$", buy_menu_base_pos - 25 * buy_menu_left_up_forward[1] + 112.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, Color.YELLOW if localPlayer.ab_priority else rgb(0, 134, 171))
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], ("Stim Infusion\n\u2001   Swap" if localPlayer.active_ab_number else "Stim Infusion\n\u2001  1200$") if localPlayer.is_showing_active_abilities else "Headhunter II\n\u2001\u2001800$" if localPlayer.ab_headhunter else "Headhunter I\n\u2001\u2001800$", buy_menu_base_pos + 20 * buy_menu_left_up_forward[1] + 67.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, (Color.YELLOW if localPlayer.active_ab_number else Color.GREEN) if localPlayer.is_showing_active_abilities else Color.GREEN if localPlayer.ab_headhunter < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], ("Smoke Bomb\n\u2001   Swap" if localPlayer.active_ab_number else "Smoke Bomb\n\u2001  1200$") if localPlayer.is_showing_active_abilities else "Antigens II\n\u2001  600$" if localPlayer.ab_antigens else "Antigens I\n\u2001  600$", buy_menu_base_pos - 2.5 * buy_menu_left_up_forward[1] + 67.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, (Color.YELLOW if localPlayer.active_ab_number else Color.GREEN) if localPlayer.is_showing_active_abilities else Color.GREEN if localPlayer.ab_antigens < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "" if localPlayer.is_showing_active_abilities else "Quick Fix II\n\u2001 700$" if localPlayer.ab_quick_fix else "Quick Fix I\n\u2001 700$", buy_menu_base_pos - 25 * buy_menu_left_up_forward[1] + 67.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, Color.GREEN if localPlayer.ab_quick_fix < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], ("Cloak\n Swap" if localPlayer.active_ab_number else "Cloak\n1200$") if localPlayer.is_showing_active_abilities else "Charged II\n\u2001 700$" if localPlayer.ab_charged else "Charged I\n\u2001 700$", buy_menu_base_pos + 20 * buy_menu_left_up_forward[1] + 22.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, (Color.YELLOW if localPlayer.active_ab_number else Color.GREEN) if localPlayer.is_showing_active_abilities else Color.GREEN if localPlayer.ab_charged < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], ("Resurgence\n\u2001  Swap" if localPlayer.active_ab_number else "Resurgence\n\u2001 1200$") if localPlayer.is_showing_active_abilities else "Haste II\n  800$" if localPlayer.ab_haste else "Haste I\n  800$", buy_menu_base_pos - 2.5 * buy_menu_left_up_forward[1] + 22.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, (Color.YELLOW if localPlayer.active_ab_number else Color.GREEN) if localPlayer.is_showing_active_abilities else Color.GREEN if localPlayer.ab_haste < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "" if localPlayer.is_showing_active_abilities else "Heavy Impact II\n\u2001\u20011000$" if localPlayer.ab_heavy_impact else "Heavy Impact I\n\u2001\u20011000$", buy_menu_base_pos - 25 * buy_menu_left_up_forward[1] + 22.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, Color.GREEN if localPlayer.ab_heavy_impact < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], (" Feint\nSwap" if localPlayer.active_ab_number else " Feint\n1200$") if localPlayer.is_showing_active_abilities else "Second Wind II\n\u2001\u2001 1000$" if localPlayer.ab_second_wind else "Second Wind I\n\u2001\u2001 1000$", buy_menu_base_pos + 20 * buy_menu_left_up_forward[1] - 22.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, (Color.YELLOW if localPlayer.active_ab_number else Color.GREEN) if localPlayer.is_showing_active_abilities else Color.GREEN if localPlayer.ab_second_wind < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], ("Tear Gas\n\u2001Swap" if localPlayer.active_ab_number else "Tear Gas\n   1200$") if localPlayer.is_showing_active_abilities else "Triage II\n  700$" if localPlayer.ab_triage else "Triage I\n  700$", buy_menu_base_pos - 2.5 * buy_menu_left_up_forward[1] - 22.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, (Color.YELLOW if localPlayer.active_ab_number else Color.GREEN) if localPlayer.is_showing_active_abilities else Color.GREEN if localPlayer.ab_triage < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "" if localPlayer.is_showing_active_abilities else "Resilience II\n\u2001  800$" if localPlayer.ab_resilience else "Resilience I\n\u2001  800$", buy_menu_base_pos - 25 * buy_menu_left_up_forward[1] - 22.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, Color.GREEN if localPlayer.ab_resilience < 2 else Color.GRAY)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], ("Frenzy\n  Swap" if localPlayer.active_ab_number else "Frenzy\n 1200$") if localPlayer.is_showing_active_abilities else "+5% Health\n\u2001  500$", buy_menu_base_pos + 20 * buy_menu_left_up_forward[1] - 67.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, (Color.YELLOW if localPlayer.active_ab_number else Color.GREEN) if localPlayer.is_showing_active_abilities else Color.GREEN)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], ("Chain Hack\n\u2001  Swap" if localPlayer.active_ab_number else "Chain Hack\n\u2001 1200$") if localPlayer.is_showing_active_abilities else "+5% Damage\n\u2001\u2001500$", buy_menu_base_pos - 2.5 * buy_menu_left_up_forward[1] - 67.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, (Color.YELLOW if localPlayer.active_ab_number else Color.GREEN) if localPlayer.is_showing_active_abilities else Color.GREEN)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "" if localPlayer.is_showing_active_abilities else "+5% Healing\n\u2001\u2001500$", buy_menu_base_pos - 25 * buy_menu_left_up_forward[1] - 67.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.GREEN)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Limited offer!", buy_menu_base_pos + 22.5 * buy_menu_left_up_forward[1] - 112.5 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(localPlayer if localPlayer.in_buy_menu_start_t and localPlayer.is_showing_active_abilities else [], "Hold or double tap {0} to use your active ability\n".format(inputBindingString(Button.MELEE)), buy_menu_base_pos - 25 * buy_menu_left_up_forward[1], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Press {0} to buy\n".format(inputBindingString(Button.PRIMARY_FIRE)), buy_menu_base_pos - 74 * buy_menu_left_up_forward[1] - 55 * buy_menu_left_up_forward[0], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    #Create Ability Entities and Cursor
    createInWorldText(localPlayer if localPlayer.in_buy_menu_start_t else [], "{0}$\n".format(floor(money_mult * money_amount - localPlayer.money_spent_amount)), buy_menu_base_pos - 74 * buy_menu_left_up_forward[1], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    createInWorldText(localPlayer if localPlayer.in_buy_menu_start_t else [], "▲", updateEveryFrame(buy_menu_base_pos - ((4 + localPlayer.getVerticalFacingAngle()) * buy_menu_left_up_forward[1]) + localPlayer.getHorizontalFacingAngle() * buy_menu_left_up_forward[0]), 4, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_COLOR, rgb(245 + 10 * (sin(4 * getTotalTimeElapsed())), 205 + 50 * (sin(4 * getTotalTimeElapsed())), 200 * (sin(4 * getTotalTimeElapsed()))))
    #Use Update Every Frame to avoid showing the String when the cursor is out of bounds, resulting in 0
    createInWorldText(updateEveryFrame(localPlayer if localPlayer.in_buy_menu_start_t and abs(localPlayer.getHorizontalFacingAngle()) < 135 and abs(localPlayer.getVerticalFacingAngle() + 11.25) < 45 else []), updateEveryFrame(((["Leave Buy Menu\n", "Swap to the passive abilities page\n" if localPlayer.is_showing_active_abilities else "Swap to the active abilities page\n", "Refund your money\n"])[floor((localPlayer.getHorizontalFacingAngle() + 135) / 90)]) if localPlayer.getVerticalFacingAngle() < -33.75 else (["The limited offer changes every wave\n" if localPlayer.getVerticalFacingAngle() < -11.25 else ["Mystery Swap: Periodically swap to a random hero with a free ult\n         Health, damage and healing is increased by 20%", "Bulletstorm: Your weapon can hold unlimited ammo\n", "Die Hard: Your health regeneration delay is halved\n", "Brass Knuckles: While using quick melee you are immune to Cloakers' charge attack\n{0}".format("\u2001\u2001   Your quick melee attack knocks enemies down (15 second cooldown)"), "Vampiric: Heal for 30% of all dealt damage\n", "Crash N' Dash: Regenerate health while moving faster than 8 meters per second\n", "Golden Hour: You can be revived twice as fast\n", "Supercharge: Healing allies slowly charges their ultimate\n", "Nemesis: After going down automatically revive yourself when your killer dies\n", "Spec Ops: Gain 50 armour and immunity to grenadier smokes\n", "Sharpshooter: Deal 50% more damage to enemies that are further than 20 meters away\n", "Shockproof: Gain +15% speed and pass through enemies. \nBecome immune and deflect Taser electrocution attempts", "{0}: {1}".format(localPlayer.talent_text[1], localPlayer.talent_text[2]), "{0}: {1}".format(localPlayer.talent_text[3], localPlayer.talent_text[4])][current_perks[localPlayer.getVerticalFacingAngle() >= 11.25]], (["Frenzy: Become invincible and force enemies to target you\n", "\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001\u2001 Chain Hack: Hack and electrocute an enemy\n{0}".format("Can jump to nearby enemies up to 3 times with a shorter duration after each jump"), ""] if localPlayer.is_showing_active_abilities else ["Increase your health by 5%\n", "Increase your damage by 5%\n", "Increase your healing by 5%\n"])[floor((localPlayer.getVerticalFacingAngle() + 33.75) / 22.5)], (["    Feint: Dodge and dash into any direction, creating an explosion from start to finish", "Tear Gas: Launch a grenade that releases lingering noxious gas\n  \u2001\u2001   \u2001\u2001        Enemies in the gas get stunned", ""] if localPlayer.is_showing_active_abilities else ["Second Wind II: Revive yourself when downed. Can only happen once every 60 seconds" if localPlayer.ab_second_wind else "Second Wind I: Revive yourself when downed. Can only happen once every 90 seconds", "Triage II: Heal 50% more to players under 50% health\n" if localPlayer.ab_triage else "Triage I: Heal 25% more to players under 50% health\n", "          Resilience II: Receive 20% less damage\nReceive 60% less knockback and inflict 60% more" if localPlayer.ab_resilience else "          Resilience I: Receive 20% less damage\nReceive 30% less knockback and inflict 30% more"])[floor((localPlayer.getVerticalFacingAngle() + 33.75) / 22.5)], (["Cloak: Become invisible and freeze nearby enemies when you become visible again\n", "\u2001  Resurgence: Heal yourself for 300 health per second\nIf you are at full health, heal a nearby injured ally instead", ""] if localPlayer.is_showing_active_abilities else ["Charged II: Ultimates cost 30% less\n" if localPlayer.ab_charged else "Charged I: Ultimates cost 15% less\n", "  Haste II: Ability cooldown is reduced by 50%\nDoes not affect abilities with multiple charges" if localPlayer.ab_haste else "  Haste I: Ability cooldown is reduced by 25%\nDoes not affect abilities with multiple charges", "Heavy Impact II: Every hit has a chance to stun the enemy for 2 seconds\n" if localPlayer.ab_heavy_impact else "Heavy Impact I: Every hit has a chance to stun the enemy for 1 second\n"])[floor((localPlayer.getVerticalFacingAngle() + 33.75) / 22.5)], (["  Stim Infusion: Instantly start health regeneration\nGain +100% damage, +100% healing and +50% speed", "\u2001\u2001\u2001\u2001\u2001\u2001Smoke Bomb: Create a smoke screen\nEnemies are less accurate when targeting allies in the smoke", ""] if localPlayer.is_showing_active_abilities else ["Headhunter II: Critical hits deal 60% more damage\n" if localPlayer.ab_headhunter else "Headhunter I: Critical hits deal 30% more damage\n", "Antigens II: Receive 40% more healing and a natural overtime heal" if localPlayer.ab_antigens else "Antigens I: Receive 20% more healing and a natural overtime heal", "Quick Fix II: Eliminations restore 100 HP and shortly increase speed by 30%\n" if localPlayer.ab_quick_fix else "Quick Fix I: Eliminations restore 50 HP and shortly increase speed by 15%\n"])[floor((localPlayer.getVerticalFacingAngle() + 33.75) / 22.5)], ["\u2001\u2001\u2001\u2001Priority A: Enemies are more likely to target you\nEnemies targeting you take 25% more and deal 25% less damage", "\u2001\u2001\u2001\u2001\u2001\u2001\u2001  Priority B: Enemies are less likely to target you\n{0}".format("Gain +20% damage and speed if you did not take damage in the last 3 seconds"), "\u2001\u2001Priority C: Enemies are much less likely to target you\n{0}".format("Heal 40% more to allies in combat. Heal for 25% of dealt healing")][floor((localPlayer.getVerticalFacingAngle() + 33.75) / 22.5)]])[floor((localPlayer.getHorizontalFacingAngle() + 135) / 45)]), buy_menu_base_pos - 55 * buy_menu_left_up_forward[1], 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING)
    #Skip Assembling Heroes
    setMatchTime(3)
    waitUntil(isGameInProgress(), 3.5)
    setMatchTime(0)
    #Workaround: Need to reduce Slots because of spectator bug
    if getNumberOfSlots(Team.1) <= 8:
        createDummy(Hero.ANA, Team.2, gamemode, 1000 * Vector.DOWN, Vector.FORWARD)
        if getNumberOfSlots(Team.1) <= 8:
            createDummy(Hero.ROADHOG, Team.2, 3, 1000 * Vector.DOWN, Vector.FORWARD)
        if getNumberOfSlots(Team.1) <= 5:
            createDummy(Hero.CASSIDY, Team.2, 4, 1000 * Vector.DOWN, Vector.FORWARD)
        if getNumberOfSlots(Team.1) <= 6:
            createDummy(Hero.CASSIDY, Team.2, 5, 1000 * Vector.DOWN, Vector.FORWARD)
        createDummy(Hero.SOLDIER, Team.2, 6, 1000 * Vector.DOWN, Vector.FORWARD)
        createDummy(Hero.SOLDIER, Team.2, 7, 1000 * Vector.DOWN, Vector.FORWARD)
        createDummy(Hero.SOLDIER, Team.2, 8, 1000 * Vector.DOWN, Vector.FORWARD)
        createDummy(Hero.SOLDIER, Team.2, 9, 1000 * Vector.DOWN, Vector.FORWARD)
        createDummy(Hero.SOLDIER, Team.2, 10, 1000 * Vector.DOWN, Vector.FORWARD)
    is_gmut_enabled = true
    wait(2)


rule "[Tutorial] Close HUD":
    @Event eachPlayer
    @Condition eventPlayer.Tut_Active == true
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true
    @Condition eventPlayer.isAlive() == true

    wait(0.25)
    eventPlayer.Tut_Active = false
    smallMessage(eventPlayer, "press {0} + {1} to toggle hero changes".format(inputBindingString(Button.CROUCH), inputBindingString(Button.RELOAD)))


rule "[Tutorial] Open HUD":
    @Event eachPlayer
    @Condition eventPlayer.Tut_Active == false
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true
    @Condition eventPlayer.isAlive() == true

    wait(0.25)
    eventPlayer.Tut_Active = true


def set_map_cg():
    @Name "Subroutine (Set Map CG): Set Spawns, Nodes, Edges, Distance Matrix, Ability Buy Location"

    spawn_pos_list = [vect(206.454, 0.001, 70.22), vect(221.427, 8.692, 66.933), vect(193.658, 0.998, 67.449), vect(229.543, 1.999, 85.875), vect(224.599, 5.001, 110.683), vect(199.902, 8.843, 109.823), vect(176.589, 6.999, 66.024), vect(212.836, 9, 81.39), vect(228.988, 12.998, 65.82), vect(186.82, 0.999, 87.814)]
    spawn_nearest_node_idx_list = [0, 24, 2, 40, 42, 35, 10, 25, 21, 7]
    nodes = [vect(206.137, 0.041, 81.572), vect(197.753, 1.002, 81.213), vect(189.242, 0.998, 66.794), vect(188.545, 3, 51.941), vect(193.895, 16.5, 51.891), vect(196.476, 16.501, 68.781), vect(186.703, 0.999, 80.98), vect(187.579, 0.999, 92.388), vect(174.916, 5.001, 92.33), vect(174.294, 5, 80.881), vect(173.301, 6.999, 66.065), vect(173.262, 6.998, 57.01), vect(183.04, 7.999, 56.064), vect(183.491, 7.999, 63.766), vect(191.037, 7.999, 64.119), vect(199.061, 7.998, 49.104), vect(201.742, 7.998, 60.913), vect(209.518, 7.998, 60.774), vect(208.498, 9, 44.68), vect(218.343, 12, 45.13), vect(216.613, 14.001, 61.938), vect(229.231, 13.001, 61.763), vect(229.677, 9.187, 73.895), vect(220.985, 7.998, 81.14), vect(221.33, 9.002, 61.664), vect(206.1, 9, 81.084), vect(206.313, 7.999, 70.046), vect(183.802, 5.998, 74.325), vect(186.933, 6, 80.94), vect(185.025, 6.001, 87.18), vect(194.265, 8.001, 96.067), vect(205.974, 9.025, 95.64), vect(216.192, 7.999, 95.441), vect(180.423, 8.998, 104.206), vect(205.974, 8.027, 103.778), vect(206.172, 7.998, 110.406), vect(193.533, 9, 110.488), vect(219.054, 5.998, 103.97), vect(219.07, 1.998, 90.657), vect(235.431, 1.998, 90.539), vect(229.409, 1.999, 90.044), vect(237.966, 3.998, 104.629), vect(226.962, 4.284, 112.037), vect(219.008, 0.998, 81.327), vect(177.92, 0.002, 51.147), vect(196.386, 16.5, 51.909), vect(196.295, 16.5, 46.848), vect(208.835, 16.5, 47.146)]
    edges = [[1, 43], [0, 2, 6, 43], [1, 3], [2, 4, 44], [45], [14, 45], [1, 7], [6, 8], [7, 9], [8, 10, 27, 29], [9, 11], [10, 12], [3, 11, 13], [12, 14, 16, 27, 29], [1, 3, 13, 15, 16], [14, 16], [13, 14, 15, 17, 18, 24, 26], [16, 18, 24, 26], [16, 17, 19], [18, 20], [17, 19, 21], [20, 22], [21, 23, 40], [22, 24, 25, 38], [16, 17, 23], [6, 23, 26], [16, 17, 25], [9, 13, 28, 29], [1, 27, 29], [9, 13, 27, 28, 30], [29, 31, 33, 34, 36], [30, 32, 34], [31, 38], [9, 30, 34], [30, 31, 33, 35, 37], [34, 36], [30, 35], [34, 38, 41], [37, 39, 40, 43], [38, 40, 41], [38, 39], [37, 39, 42], [35, 41], [0, 1, 38], [3], [3, 5, 15, 16, 46], [45, 47], [17, 19, 46]]
    distance_matrix = ["012346234567877667789!9878767655654563233451456710123512345676655667898767656555654563233451345621012423456765544556787656567666", "76567434456223453210133456765443344567654545656787677545567312345432025665654332233456543434545676676656678531233232303454543212", "23345654343343456556554556733123212346012345656667789!98787454567656643445624567323457101234545656678987676343456556554556735678", "43456821012343454556787656523234544545566674678943445732101232343445676545412123433434566564567854434643210123454556787656523234", "54454567767545675432355432101234344567654543434565565667778534564321244543210123233456543432323454454556667423453232353432321012", "12234543232121234334344555633456212124234343210112234543232232345445443445622345323235345454321012234543232343456556554556733456", "32323534434321110112343212123234544544344563345643434634545432221012343212134345655654344564456743434645545432221101234323234345", "65565545567445675454575665654333221012343434545676676655467556785454574565654333212101232324545676676544356556785565684566765444", "32321012333565667656743324546789445568345676544433432101223565556545632213436789334457234565433322343210112454445434521223425678", "43434634545432221123432102234345654553233453456732345712345543332234432120145455654563233453567843434623445432221123443221034345", "65565434456445673233463321232123233456543430112343343445556345672123462332343234344567654541012343343434456245673233463321232123", "23345654343110123223234554534567434457443234323434456765454221012112123443445678445568554345434545567876565332101212222333436789", "33456845545654565667898767644321032332122342678954556843212343454556787656523212301222344344678944556854323443454556787656533211", "210121233233678955667965434554565667898767644322321012344344789!5455685543454345455678765653321232210345545567893345684543455456", "56678987676443223212301221226789223457345456656767789!9878755433432341011231567833456845656776787889!?!9898665445433421011226789", "33456845656776787889!?!9898665445434521102326789445679565456656767789!9878755433432231212013789!55678!665456656767789!9878755433", "43212232310489!?112346234567767667789!987876654454345212234045674321244567876554455678765656767898788656678403454321214554543221", "12234543232343456556554556742012543232566565433222323454343454567667665667853101544343456565433321212343232454567667654556754210"]
    elevator_nodes = []
    if gamemode == 0:
        iv_dom_objective_all_pos_list = [vect(206.094, 2, 77.597), vect(232.886, 4, 93.877), vect(230.416, 6, 107.918), vect(193.307, 11, 113.551), vect(180.089, 11, 101.823), vect(205.915, 11.043, 93.96), vect(168.798, 7, 81.112), vect(173.483, 9, 57.292), vect(189.454, 5, 56.301), vect(196.295, 18.5, 68.985), vect(206.485, 10, 51.593), vect(206.259, 10.999, 81.079), vect(218.594, 10, 85.339), vect(224.043, 3, 78.247), vect(182.628, 3, 83.08)]
    elif gamemode == 2:
        iv_dom_objective_all_pos_list = [[vect(201.832, 8, 52.598), vect(218.7, 8, 82.857), 47, 23], [vect(188.463, 3, 54.695), vect(173.555, 6.997, 65.855), 14, 10], [vect(192.951, 9, 112.137), vect(168.563, 5, 81.053), 35, 9], [vect(205.608, 0.039, 81.423), vect(232.253, 2, 97.003), 28, 39], [vect(206.304, 9, 81.776), vect(185.063, 1, 82.814), 25, 7]]
    player_spawn_pos = vect(181.974, 9, 96.862)
    player_spawn_facing = Vector.FORWARD
    ability_shop_pos = vect(182.587, 8.998, 105.229)
    buy_menu_left_up_forward[2] = Vector.FORWARD
    buy_menu_cam_pos = 900 * Vector.UP


rule "Team 1: Player Damage Automater (+-)":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.Damage_Dealt[true] != eventPlayer.Damage_Dealt[false]

    eventPlayer.Damage_Dealt[true] = eventPlayer.Damage_Dealt[false]
    eventPlayer.setDamageDealt(eventPlayer.Damage_Dealt[true])


rule "Team 1: Player HP Automater (+-)":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.health_percent[true] != eventPlayer.health_percent[false]

    eventPlayer.health_percent[true] = eventPlayer.health_percent[false]
    eventPlayer.setMaxHealth(eventPlayer.health_percent[true])


rule "Team 1: Player Resistance Automater (+-)":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.Damage_Received[true] != eventPlayer.Damage_Received[false]

    eventPlayer.Damage_Received[true] = eventPlayer.Damage_Received[false]
    eventPlayer.setDamageReceived(eventPlayer.Damage_Received[true])


rule "Team 1: Player Move Speed Automater (+-)":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.Move_Speed[true] != eventPlayer.Move_Speed[false]

    eventPlayer.Move_Speed[true] = eventPlayer.Move_Speed[false]
    eventPlayer.setMoveSpeed(eventPlayer.Move_Speed[true])


rule "Team 1: Player Healing Automater (+-)":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.healing_dealt_percent[true] != eventPlayer.healing_dealt_percent[false]

    eventPlayer.healing_dealt_percent[true] = eventPlayer.healing_dealt_percent[false]
    eventPlayer.setHealingDealt(eventPlayer.healing_dealt_percent[true])


rule "Team 1: Protect from One-shots if health is over 50%":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.getNormalizedHealth() >= 0.5

    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)
    waitUntil(eventPlayer.getNormalizedHealth() < 0.5, 99999)
    wait(0.4, Wait.RESTART_WHEN_TRUE)
    if ruleCondition:
        loop()
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)


rule "Team 2 CG: Improve Air Movement near Jump Pad":
    @Event eachPlayer
    @Team 2
    @Condition is_map_cg == true
    @Condition (eventPlayer.nav_idx == 4 or eventPlayer.nav_idx == 45) == true
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.isInAir() == true
    @Condition eventPlayer.is_using_combat_pathfinding == 0
    @Condition eventPlayer.getHorizontalSpeed() >= 5
    @Condition distance(eventPlayer, vect(eventPlayer.nav_pos.x, eventPlayer.getPosition().y, eventPlayer.nav_pos.z)) <= 0.5

    eventPlayer.applyImpulse(-1 * directionFromAngles(horizontalAngleOfDirection(eventPlayer.getVelocity()), 0), 0.001, Relativity.TO_WORLD)
    wait(0.25)
    if ruleCondition:
        loop()


def update_combatants():
    @Name "Subroutine: Update Combatants"

    combatants = [player for player in getPlayers(Team.1) if player.is_combatant]
    combatants_count = len(combatants)


def declare_victory():
    @Name "Subroutine: Declare Victory"

    wait(2)
    if is_victory_declared:
        return
    is_victory_declared = true
    declareTeamVictory(Team.1)


def play_incoming_sound_twice():
    @Name "Subroutine: Play Incoming Sound Twice"

    addToTeamScore(Team.1, 1)
    wait(0.6)
    addToTeamScore(Team.1, 1)


def Cancel_Momentum():
    @Name "Subroutine: Cancel player momentum"

    eventPlayer.applyImpulse(-1 * directionFromAngles(horizontalAngleOfDirection(eventPlayer.getVelocity()), 0), 0.001, Relativity.TO_WORLD)


rule "Global (First Wave): Create Mutator Start HUD, Scale Values, Set Level":
    @Condition wave_number == false
    @Condition (any([player.isHoldingButton(Button.INTERACT) and distance(player, ability_shop_pos) > 2 for player in combatants])) == true

    destroyHudText(game_or_mutator_start_huds[0])
    destroyHudText(game_or_mutator_start_huds[1])
    enableMusic()
    wave_number = 1
    combatants.setUltCharge(0)
    getPlayers(Team.2).base_tier = 1
    enable_normal_spawns = true
    addToTeamScore(Team.1, 1)
    if gamemode == 2:
        enable_objective_enemy_spawn = 2
        iv_dom_objective_pos = random.choice(iv_dom_objective_all_pos_list)
        objective_progress = [0, 0]
    else:
        enable_objective_enemy_spawn = true
        getPlayersInSlot(gamemode, Team.2).base_tier = -1


rule "Global (Next Wave): Revive Players, Scale Values, Set Level, Set Mutators":
    @Condition objective_phase_number == 3
    @Condition getNumberOfLivingPlayers(Team.2) == 0

    if wave_number >= 15 and length == 0:
        async(declare_victory, AsyncBehavior.NOOP)
    elif wave_number >= 22 and length == 1:
        async(declare_victory, AsyncBehavior.NOOP)
    objective_phase_number = false
    ([player for player in combatants if player.downed_start_t and player.downed_start_t + 0.1 < getTotalTimeElapsed()]).downed_start_t = false
    bigMessage(getAllPlayers(), "Wave cleared!")
    money_amount += (30 if wave_number >= 2 else 45) + 25 * wave_number
    set_random_perks()
    if is_mutator_mode_enabled and wave_number % 2 == 1 or is_apocalyptic:
        if is_hard_mode_enabled or is_apocalyptic:
            goto lbl_0
        mut_count++
        lbl_0:
        mut_add_mutator()
        if not (is_hard_mode_enabled or is_apocalyptic):
            goto lbl_1
        mut_count++
        lbl_1:
    disableMusic()
    setMatchTime(20)
    wait(0.5)
    waitUntil(not getMatchTime(), 99999)
    enableMusic()
    wave_number++
    enable_normal_spawns = true
    addToTeamScore(Team.1, 1)
    if gamemode == 2:
        enable_objective_enemy_spawn = 2
        hvt_dom_objective_killed_count = false
        iv_dom_objective_pos = random.choice(iv_dom_objective_all_pos_list.exclude(iv_dom_objective_pos))
        objective_progress = [0, 0]
    else:
        enable_objective_enemy_spawn = true
    if wave_number == 2:
        getPlayersInSlot(5, Team.2).base_tier = 2
        getPlayersInSlot(6, Team.2).base_tier = 2
    elif wave_number == 3:
        getPlayersInSlot(8, Team.2).base_tier = 2
    elif wave_number == 4:
        getPlayersInSlot(2, Team.2).base_tier = 3
        getPlayersInSlot(3, Team.2).base_tier = 3
    elif wave_number == 5:
        getPlayersInSlot(7, Team.2).base_tier = 2
    elif wave_number == 8:
        getPlayersInSlot(7, Team.2).base_tier = 3
    elif wave_number == 9:
        getPlayersInSlot(4, Team.2).base_tier = 3
    if not mut_expendable:
        return
    ([player for player in getPlayersOnHero(Hero.SOLDIER, Team.2) if player.base_tier <= 2]).is_expendable = true


rule "Global: Enable normal Spawns":
    @Condition (objective_phase_number == 1 or objective_phase_number == 2) == true
    @Condition enable_normal_spawns == false
    @Condition getNumberOfLivingPlayers(Team.2) < getNumberOfPlayers(Team.2)

    temp_1 = [player for player in getLivingPlayers(Team.2) if not player.is_living_boss]
    temp_1 = ((2 * (len([player for player in temp_1 if player.real_tier <= 2]))) + (5 * (len([player for player in temp_1 if player.real_tier == 3])))) + (10 * (len([player for player in temp_1 if player.real_tier == 4])))
    if temp_1 <= max(5, getTotalTimeElapsed() - last_spawn_phase_end_t - 25 - 20 * (len([player for player in combatants if player.downed_start_t]) / combatants_count)):
        wait((11 if gamemode == 1 and objective_phase_number == 1 or gamemode == 2 and any([player.is_living_boss for player in getLivingPlayers(Team.2)]) else 6) - (3 if mut_reinforcements else 0), Wait.ABORT_WHEN_FALSE)
        if not ruleCondition:
            return
        enable_normal_spawns = true
        addToTeamScore(Team.1, 1)
    else:
        wait(1, Wait.ABORT_WHEN_FALSE)
        if ruleCondition:
            loop()


rule "Global: Disable normal Spawns":
    @Condition (objective_phase_number == 1 or objective_phase_number == 2) == true
    @Condition enable_normal_spawns == true
    @Condition getNumberOfLivingPlayers(Team.2) == getNumberOfPlayers(Team.2)

    enable_normal_spawns = false
    last_spawn_phase_end_t = getTotalTimeElapsed()


rule "Global: Defeat":
    @Condition wave_number > 0
    @Condition all([player.downed_start_t for player in combatants]) == true

    wait(2, Wait.ABORT_WHEN_FALSE)
    if is_victory_declared:
        return
    is_victory_declared = true
    declareTeamVictory(Team.2)


rule "Global: Anti-crash":
    @Condition getNumberOfPlayers(Team.2) > 7
    @Condition getAverageServerLoad() >= 255

    is_load_limit_reached = true
    if not is_waiting_to_remove_bot and wave_number:
        waitUntil(getAverageServerLoad() < 255, 4)
        if getAverageServerLoad() >= 255:
            is_waiting_to_remove_bot = true
            waitUntil(getAverageServerLoad() < 255, 99999)
    else:
        waitUntil(getAverageServerLoad() < 255, 99999)
    is_load_limit_reached = false


def mut_add_mutator():
    @Name "MUT Subroutine: Add Mutator"

    temp_2 = -50 - len(mutators_list)
    if mut_count % 5 == 0 and wave_number > 0:
        bigMessage(getAllPlayers(), "Gamechanging Mutator added!")
        is_gmut_enabled = true
        temp_1 = random.choice(gmut_list)
        gmut_list.remove(temp_1)
        if temp_1 == 0:
            gmut_storm_raging = true
            hudSubheader(getAllPlayers(), "Storm Raging: Some enemies are enraged, killing them spreads the rage", HudPosition.RIGHT, temp_2 - 0.5, Color.ORANGE, HudReeval.VISIBILITY)
            startDamageModification(combatants, [player for player in getPlayers(Team.2) if player.gmut_var], 140, DamageReeval.RECEIVERS_AND_DAMAGERS)
        elif temp_1 == 1:
            gmut_sympathy_gains = true
            hudSubheader(getAllPlayers(), "Sympathy Gains: Killing enemies heals other nearby enemies", HudPosition.RIGHT, temp_2 - 0.5, Color.ORANGE, HudReeval.VISIBILITY)
        elif temp_1 == 2:
            gmut_adaptive_shield = true
            hudSubheader(getAllPlayers(), "Adaptive Shield: Enemies below 50% HP gain shields for every nearby player", HudPosition.RIGHT, temp_2 - 0.5, Color.ORANGE, HudReeval.VISIBILITY)
        elif temp_1 == 3:
            gmut_fortified = true
            hudSubheader(getAllPlayers(), "Fortified: Enemies resist stuns, knockbacks, and gain extra armour", HudPosition.RIGHT, temp_2 - 0.5, Color.ORANGE, HudReeval.VISIBILITY)
        elif temp_1 == 4:
            gmut_salvation = true
            hudSubheader(getAllPlayers(), "Salvation: Enemies heal themselves a small amount when they die", HudPosition.RIGHT, temp_2 - 0.5, Color.ORANGE, HudReeval.VISIBILITY)
    elif len(mutators_list):
        bigMessage(getAllPlayers(), "New Mutator added!")
        temp_1 = random.choice(mutators_list)
        mutators_list.remove(temp_1)
        if temp_1 == 0:
            mut_amped = true
            hudSubheader(getAllPlayers(), "Stampede: Enemies move faster", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 1:
            mut_hardwired = true
            hudSubheader(getAllPlayers(), "Hardwired: Mechanical enemies gain shields and resist fear & electrocution", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 2:
            mut_promotion = true
            hudSubheader(getAllPlayers(), "Promotion: Higher tier heroes spawn more frequently", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 3:
            mut_advanced_medkit = true
            hudSubheader(getAllPlayers(), "Advanced Medkit: Medics can revive tier 4 enemies and have less cooldown", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 4:
            hudSubheader(getAllPlayers(), "Berserk: Enemies below 50% health deal 25% more damage", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
            startDamageModification(combatants, [player for player in getPlayers(Team.2) if player.getNormalizedHealth() <= 0.5], 125, DamageReeval.RECEIVERS_AND_DAMAGERS)
        elif temp_1 == 5:
            hudSubheader(getAllPlayers(), "Regeneration: Enemies slowly regenerate health", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
            getPlayers(Team.2).startHealingOverTime(null, 9999, 10)
        elif temp_1 == 6:
            mut_yakuza = true
            hudSubheader(getAllPlayers(), "Yakuza: Shinobis, Bowmasters, and Yokais gain more health and spawn as tier 3 enemies", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 7:
            mut_emp_rounds = true
            hudSubheader(getAllPlayers(), "EMP Rounds: Enemies deal double damage to barriers and objects", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
            startDamageModification(combatants, getPlayers(Team.2), 50, DamageReeval.RECEIVERS_AND_DAMAGERS)
        elif temp_1 == 8:
            mut_heartburn = true
            hudSubheader(getAllPlayers(), "Heartburn: Healing in combat is reduced by 30%", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
            startHealingModification([player for player in combatants if ((player.last_damage_taken_t + ((0.5 if player.perk_die_hard else 1) * (5 if mut_deep_wounds else 2.5))) > getTotalTimeElapsed())], combatants, 70)
        elif temp_1 == 9:
            mut_deep_wounds = true
            hudSubheader(getAllPlayers(), "Deep Wounds: Health regeneration delay is doubled", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 10:
            mut_gear_upgrade = true
            hudSubheader(getAllPlayers(), "Gear Upgrade: All Troopers are replaced with Heavy Troopers", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 11:
            hudSubheader(getAllPlayers(), "Last Men Standing: The final enemies take 25% less damage", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
            startDamageModification(getPlayers(Team.2), combatants, 75 if objective_phase_number == 3 else 100)
        elif temp_1 == 12:
            mut_reinforcements = true
            hudSubheader(getAllPlayers(), "Reinforcements: Enemy spawn rate is increased", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 13:
            mut_mutation = getTotalTimeElapsed()
            hudSubheader(getAllPlayers(), "Mutation: Some enemies spawn with increased strength and size", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 14:
            mut_expendable = true
            hudSubheader(getAllPlayers(), "Expendable: Dead Troopers are replaced almost instantly", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 15:
            mut_counterstrike = true
            hudSubheader(getAllPlayers(), "Counterstrike: Enemies can retreat from ultimates and counter back with their own", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 16:
            mut_swan_song = true
            hudSubheader(getAllPlayers(), "Swan Song: Boss enemies continue fighting for 5 seconds before going down", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 17:
            mut_bulletproof = true
            hudSubheader(getAllPlayers(), "Bulletproof: Tier 2 enemies gain an additional layer of overhealth", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 18:
            mut_fully_loaded = true
            hudSubheader(getAllPlayers(), "Lock N' Load: Enemies can use additional abilities and have a higher clip size", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
        elif temp_1 == 19:
            mut_low_blow = true
            hudSubheader(getAllPlayers(), "Low Blow: Enemy knockback attacks double in damage and knockback", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)
            getPlayers(Team.2).setKnockbackDealt(200)
        elif temp_1 == 20:
            mut_artful_dodger = true
            hudSubheader(getAllPlayers(), "Artful Dodger: Enemies can dodge attacks more often and easily", HudPosition.RIGHT, temp_2, Color.GREEN, HudReeval.VISIBILITY)


def set_random_perks():
    @Name "Subroutine: Set Random Perks"

    if len(current_perks_huds_list):
        destroyInWorldText(current_perks_huds_list[0])
        destroyInWorldText(current_perks_huds_list[1])
    current_perks_huds_list = []
    if wave_number % 4 == 1:
        current_perks = random.shuffle([12, 13].exclude(current_perks)).slice(0, 2)
        for temp_1 in range(2):
            temp_2 = (buy_menu_base_pos - ((25 if temp_1 else 2.5) * buy_menu_left_up_forward[1])) - 112.5 * buy_menu_left_up_forward[0]
            if current_perks[temp_1] == 12:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Hero Talent 1\n      $1600", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, Color.GRAY if localPlayer.Talent1 else Color.PURPLE)
            elif current_perks[temp_1] == 13:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Hero Talent 2\n      $1600", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_STRING_AND_COLOR, Color.GRAY if localPlayer.Talent2 else Color.PURPLE)
            current_perks_huds_list.append(getLastCreatedText())
    else:
        current_perks = random.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].exclude(current_perks)).slice(0, 2)
        for temp_1 in range(2):
            temp_2 = (buy_menu_base_pos - ((25 if temp_1 else 2.5) * buy_menu_left_up_forward[1])) - 112.5 * buy_menu_left_up_forward[0]
            if current_perks[temp_1] == 0:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Mystery Swap\n\u2001    500$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_mystery_swap else Color.LIME_GREEN)
            elif current_perks[temp_1] == 1:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Bulletstorm\n\u2001  1000$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_bulletstorm else Color.LIME_GREEN)
            elif current_perks[temp_1] == 2:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Die Hard\n\u2001700$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_die_hard else Color.LIME_GREEN)
            elif current_perks[temp_1] == 3:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "  Brass Knuckles\n\u2001\u2001   700$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_brass_knuckles else Color.LIME_GREEN)
            elif current_perks[temp_1] == 4:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Vampiric\n   1000$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_vampiric else Color.LIME_GREEN)
            elif current_perks[temp_1] == 5:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Crash N' Dash\n\u2001     700$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_crash_n_dash else Color.LIME_GREEN)
            elif current_perks[temp_1] == 6:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Golden Hour\n  \u2001 1000$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_golden_hour else Color.LIME_GREEN)
            elif current_perks[temp_1] == 7:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Supercharge\n        700$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_super_charge else Color.LIME_GREEN)
            elif current_perks[temp_1] == 8:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Nemesis\n   800$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_nemesis else Color.LIME_GREEN)
            elif current_perks[temp_1] == 9:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Spec Ops\n\u2001600$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_special_operator else Color.LIME_GREEN)
            elif current_perks[temp_1] == 10:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Sharpshooter\n\u2001\u2001 900$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_sharpshooter else Color.LIME_GREEN)
            elif current_perks[temp_1] == 11:
                createInWorldText([player for player in combatants if player.in_buy_menu_start_t], "Shockproof\n        700$", temp_2, 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_COLOR, Color.GRAY if localPlayer.perk_shockproof else Color.LIME_GREEN)
            current_perks_huds_list.append(getLastCreatedText())


def disable_player():
    @Name "Subroutine: Disable Player"

    eventPlayer.startForcingThrottle(false, 0.1, false, 0.1, false, 0.1)
    eventPlayer.setPrimaryFireEnabled(false)
    eventPlayer.setSecondaryFireEnabled(false)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setMeleeEnabled(false)
    eventPlayer.setJumpEnabled(false)
    eventPlayer.setCrouchEnabled(false)
    eventPlayer.disallowButton(Button.ULTIMATE)


def enable_player():
    @Name "Subroutine: Enable Player"

    eventPlayer.stopForcingThrottle()
    eventPlayer.setPrimaryFireEnabled(true)
    eventPlayer.setSecondaryFireEnabled(true)
    eventPlayer.setAbility1Enabled(true)
    eventPlayer.setAbility2Enabled(true)
    eventPlayer.setMeleeEnabled(true)
    eventPlayer.setJumpEnabled(true)
    eventPlayer.setCrouchEnabled(true)
    eventPlayer.allowButton(Button.ULTIMATE)


def open_buy_menu():
    @Name "Subroutine: Open Buy Menu, Last Facing (3)"

    if eventPlayer.downed_start_t or eventPlayer.getNormalizedHealth() < 0.5 or eventPlayer.hasStatus(Status.STUNNED) or eventPlayer.tased_end_t >= getTotalTimeElapsed():
        return
    eventPlayer.applyImpulse(-1 * directionFromAngles(horizontalAngleOfDirection(eventPlayer.getVelocity()), false), 0.001, Relativity.TO_WORLD)
    eventPlayer.ab_var_3 = eventPlayer.getFacingDirection()
    eventPlayer.in_buy_menu_start_t = getTotalTimeElapsed()
    eventPlayer.disableHeroHud()
    eventPlayer.setFacing(Vector.FORWARD, Relativity.TO_WORLD)
    eventPlayer.startCamera(buy_menu_cam_pos, buy_menu_cam_pos + buy_menu_left_up_forward[2])
    disable_player()
    eventPlayer.setAimSpeed(200)


def leave_buy_menu():
    @Name "Subroutine: Leave Buy Menu"

    eventPlayer.in_buy_menu_start_t = false
    eventPlayer.enableHeroHud()
    eventPlayer.setFacing(eventPlayer.ab_var_3, Relativity.TO_WORLD)
    if not eventPlayer.downed_start_t:
        eventPlayer.stopCamera()
        enable_player()
    eventPlayer.setAimSpeed(100)


rule "Team 1 Button: Interact, Open / Leave Buy Menu":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true

    if eventPlayer.in_buy_menu_start_t:
        leave_buy_menu()
    elif distance(eventPlayer, ability_shop_pos) <= 2:
        open_buy_menu()
    elif eventPlayer.can_use_drop_in_buy_menu or getMatchTime():
        wait(0.4, Wait.ABORT_WHEN_FALSE)
        open_buy_menu()
    wait(0.05)


rule "Team 1: Leave Buy Menu when downed, health low, stunned or tased":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.in_buy_menu_start_t == true
    @Condition (eventPlayer.downed_start_t or eventPlayer.getNormalizedHealth() < 0.5 or eventPlayer.hasStatus(Status.STUNNED) or eventPlayer.tased_end_t >= getTotalTimeElapsed()) == true

    leave_buy_menu()
    if eventPlayer.getNormalizedHealth() > 0.4:
        return
    eventPlayer.setHealth(0.4 * eventPlayer.getMaxHealth())


rule "Team 1: Toggle Show active Ability":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.in_buy_menu_start_t == true
    @Condition eventPlayer.isHoldingButton(Button.MELEE) == true

    if eventPlayer.in_buy_menu_start_t + 0.1 >= getTotalTimeElapsed():
        return
    eventPlayer.is_showing_active_abilities = not eventPlayer.is_showing_active_abilities


def check_if_enough_money():
    @Name "Subroutine: Check if enough money"

    if money_mult * money_amount - eventPlayer.money_spent_amount >= temp_2:
        eventPlayer.money_spent_amount += temp_2
        smallMessage(eventPlayer, "Ability unlocked")
        play_purchase_confirmation_sound()
    else:
        temp_2 = false
        smallMessage(eventPlayer, "Not enough money")


def buy_active_ability():
    @Name "Subroutine: Buy Active Ability"

    if not eventPlayer.active_ab_number:
        temp_2 = 1200
        check_if_enough_money()
        if not temp_2:
            return
    elif temp_1 == eventPlayer.active_ab_number:
        return
    else:
        smallMessage(eventPlayer, "Swapped Active Ability")
    remove_active_ability()
    eventPlayer.active_ab_number = temp_1
    if temp_1 == 1:
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.ANA_NANO_BOOSTED, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
    elif temp_1 == 2:
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.REAPER_WRAITH_FORM, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
    elif temp_1 == 4:
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.BAPTISTE_IMMORTALITY_FIELD_PROTECTED, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
    elif temp_1 == 5:
        eventPlayer.active_ab_var = 1000 * Vector.DOWN
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.CLOUD, Color.SKY_BLUE, eventPlayer.active_ab_var + 2 * Vector.UP, 10, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.CLOUD, Color.SKY_BLUE, eventPlayer.active_ab_var + 2 * Vector.DOWN, 10, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.RING, Color.SKY_BLUE, eventPlayer.active_ab_var + Vector.DOWN, 10, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
    elif temp_1 == 6:
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.HEAL_TARGET_ACTIVE, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
    elif temp_1 == 7:
        eventPlayer.active_ab_var = 1000 * Vector.DOWN
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.CLOUD, Color.YELLOW, eventPlayer.active_ab_var + Vector.UP, 8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
        createEffect(getAllPlayers() if eventPlayer.active_ab_cooldown < 0 else [], Effect.CLOUD, Color.YELLOW, eventPlayer.active_ab_var + Vector.DOWN, 8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
    elif temp_1 == 8:
        eventPlayer.active_ab_var = []
        createBeam(getAllPlayers() if len(eventPlayer.active_ab_var) else [], Beam.BAD, eventPlayer, eventPlayer.active_ab_var[0], Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
        createBeam(getAllPlayers() if len(eventPlayer.active_ab_var) > 1 else [], Beam.BAD, eventPlayer.active_ab_var[0], eventPlayer.active_ab_var[1], Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
        createBeam(getAllPlayers() if len(eventPlayer.active_ab_var) > 2 else [], Beam.BAD, eventPlayer.active_ab_var[1], eventPlayer.active_ab_var[2], Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
        createBeam(getAllPlayers() if len(eventPlayer.active_ab_var) > 3 else [], Beam.BAD, eventPlayer.active_ab_var[2], eventPlayer.active_ab_var[3], Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
        eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
    play_purchase_confirmation_sound()


def remove_active_ability():
    @Name "Subroutine: Remove Active Ability"

    if eventPlayer.active_ab_cooldown < 0:
        eventPlayer.active_ab_cooldown = -0.1
    destroyEffect(eventPlayer.active_ab_effect_list)
    eventPlayer.active_ab_effect_list = []
    eventPlayer.active_ab_number = false


def update_ab_string_and_play_sound():
    @Name "Subroutine: Update Ability String and Play Sound"

    eventPlayer.ab_bought_abilities_string = ("{0}{1}{2}".format("{0}{1}{2}".format("{0}{1}{2}".format(["", "\nPriority A", "\nPriority B", "\nPriority C"][eventPlayer.ab_priority], ["", "\nHeadhunter I", "\nHeadhunter II"][eventPlayer.ab_headhunter], ["", "\nAntigens I", "\nAntigens II"][eventPlayer.ab_antigens]), "{0}{1}{2}".format(["", "\nQuick Fix I", "\nQuick Fix II"][eventPlayer.ab_quick_fix], ["", "\nCharged I", "\nCharged II"][eventPlayer.ab_charged], ["", "\nHaste I", "\nHaste II"][eventPlayer.ab_haste]), "{0}{1}{2}".format(["", "\nHeavy Impact I", "\nHeavy Impact II"][eventPlayer.ab_heavy_impact], ["", "\nSecond Wind I", "\nSecond Wind II"][eventPlayer.ab_second_wind], ["", "\nTriage I", "\nTriage II"][eventPlayer.ab_triage])), "{0}{1}{2}".format("{0}{1}{2}".format(["", "\nResilience I", "\nResilience II"][eventPlayer.ab_resilience], "\nMystery Swap" if eventPlayer.perk_mystery_swap else "", "\nBulletstorm" if eventPlayer.perk_bulletstorm else ""), "{0}{1}{2}".format("\nDie Hard" if eventPlayer.perk_die_hard else "", "\nBrass Knuckles" if eventPlayer.perk_brass_knuckles else "", "\nVampiric" if eventPlayer.perk_vampiric else ""), "{0}{1}{2}".format("\nCrash N' Dash" if eventPlayer.perk_crash_n_dash else "", "\nGolden Hour" if eventPlayer.perk_golden_hour else "", "\nSupercharge" if eventPlayer.perk_super_charge else "")), "{0}{1}{2}".format("{0}{1}{2}".format("\nNemesis" if eventPlayer.perk_nemesis else "", "\nSpec Ops" if eventPlayer.perk_special_operator else "", "\nSharpshooter" if eventPlayer.perk_sharpshooter else ""), "{0}{1}{2}".format("\nShockproof" if eventPlayer.perk_shockproof else "", "{0}{1}{2}".format("\n{0} {1}".format(abilityIconString(Hero.PHARAH, Button.JUMP), eventPlayer.talent_text[1]) if eventPlayer.Talent1 else "", "\n{0} {1}".format(abilityIconString(Hero.PHARAH, Button.JUMP), eventPlayer.talent_text[3]) if eventPlayer.Talent2 else "", "\n+{0}% Health".format(eventPlayer.ab_health_bonus) if eventPlayer.ab_health_bonus else ""), "\n+{0}% Damage".format(eventPlayer.ab_damage_bonus) if eventPlayer.ab_damage_bonus else ""), "\n+{0}% Healing".format(eventPlayer.ab_healing_bonus) if eventPlayer.ab_healing_bonus else ""))).substring(1, 511)


def play_purchase_confirmation_sound():
    @Name "Subroutine: Play Purchase Confirmation Sound"

    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, buy_menu_cam_pos, 200)


rule "Team 1: Buy Ability":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.in_buy_menu_start_t == true
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true

    if eventPlayer.in_buy_menu_start_t + 0.1 >= getTotalTimeElapsed() or abs(eventPlayer.getHorizontalFacingAngle()) >= 135 or abs(eventPlayer.getVerticalFacingAngle() + 11.25) >= 45 or eventPlayer.tased_end_t >= getTotalTimeElapsed():
        return
    #Grid coordinates of selected panel
    temp_1 = [floor((eventPlayer.getHorizontalFacingAngle() + 135) / 45), floor((eventPlayer.getVerticalFacingAngle() + 56.25) / 22.5)]
    if temp_1[1] == 0:
        if temp_1[0] <= 1:
            leave_buy_menu()
        elif temp_1[0] <= 3:
            eventPlayer.is_showing_active_abilities = not eventPlayer.is_showing_active_abilities
        else:
            if eventPlayer.money_spent_amount:
                remove_active_ability()
                eventPlayer.money_spent_amount = false
                eventPlayer.ab_headhunter = false
                eventPlayer.ab_quick_fix = false
                eventPlayer.ab_charged = false
                eventPlayer.ab_heavy_impact = false
                eventPlayer.ab_second_wind = false
                eventPlayer.ab_triage = false
                if eventPlayer.ab_resilience:
                    eventPlayer.ab_resilience = false
                    eventPlayer.Damage_Received += 20
                eventPlayer.setKnockbackDealt(100)
                eventPlayer.setKnockbackReceived(100)
                eventPlayer.ab_antigens = false
                stopHealingModification(eventPlayer.heal_mod[1])
                stopHealingOverTime(eventPlayer.heal_mod[2])
                stopDamageModification(eventPlayer.damage_mod[11])
                stopDamageModification(eventPlayer.damage_mod[12])
                eventPlayer.ab_haste = false
                eventPlayer.ab_priority = false
                eventPlayer.health_percent -= eventPlayer.ab_health_bonus
                eventPlayer.ab_health_bonus = false
                eventPlayer.Damage_Dealt -= eventPlayer.ab_damage_bonus
                eventPlayer.ab_damage_bonus = false
                eventPlayer.healing_dealt_percent -= eventPlayer.ab_healing_bonus
                eventPlayer.ab_healing_bonus = false
                eventPlayer.perk_bulletstorm = false
                eventPlayer.perk_die_hard = false
                eventPlayer.perk_brass_knuckles = false
                eventPlayer.perk_vampiric = false
                eventPlayer.perk_crash_n_dash = false
                eventPlayer.perk_golden_hour = false
                eventPlayer.perk_super_charge = false
                if eventPlayer.perk_nemesis:
                    destroyEffect(eventPlayer.nemesis_beam_effect)
                    eventPlayer.perk_nemesis = false
                if eventPlayer.perk_special_operator:
                    removeHealthPool(eventPlayer.HP_Pool[2])
                    eventPlayer.perk_special_operator = false
                eventPlayer.perk_sharpshooter = false
                stopDamageModification(eventPlayer.damage_mod[10])
                eventPlayer.Talent1 = false
                eventPlayer.Talent2 = false
                if eventPlayer.perk_mystery_swap:
                    eventPlayer.health_percent -= 20
                    eventPlayer.Damage_Dealt -= 20
                    eventPlayer.healing_dealt_percent -= 20
                    eventPlayer.stopForcingCurrentHero()
                    eventPlayer.perk_mystery_swap = false
                if eventPlayer.perk_shockproof:
                    eventPlayer.enablePlayerCollision()
                    eventPlayer.Move_Speed -= 15
                    wait()
                    eventPlayer.perk_shockproof = false
                smallMessage(eventPlayer, "Money Refunded")
                update_ab_string_and_play_sound()
                return
    else:
        if temp_1[0] == 0:
            if temp_1[1] >= 2:
                temp_2 = current_perks[temp_1[1] >= 3]
                if temp_2 == 0:
                    if not eventPlayer.perk_mystery_swap:
                        temp_2 = 500
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.health_percent += 20
                            eventPlayer.Damage_Dealt += 20
                            eventPlayer.healing_dealt_percent += 20
                            eventPlayer.perk_mystery_swap = getTotalTimeElapsed() + 90
                            update_ab_string_and_play_sound()
                elif temp_2 == 1:
                    if not eventPlayer.perk_bulletstorm:
                        temp_2 = 1000
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_bulletstorm = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 2:
                    if not eventPlayer.perk_die_hard:
                        temp_2 = 700
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_die_hard = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 3:
                    if not eventPlayer.perk_brass_knuckles:
                        temp_2 = 700
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_brass_knuckles = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 4:
                    if not eventPlayer.perk_vampiric:
                        temp_2 = 1000
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_vampiric = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 5:
                    if not eventPlayer.perk_crash_n_dash:
                        temp_2 = 700
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_crash_n_dash = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 6:
                    if not eventPlayer.perk_golden_hour:
                        temp_2 = 1000
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_golden_hour = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 7:
                    if not eventPlayer.perk_super_charge:
                        temp_2 = 700
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_super_charge = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 8:
                    if not eventPlayer.perk_nemesis:
                        temp_2 = 800
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_nemesis = true
                            createBeam(getAllPlayers() if eventPlayer.nemesis_killer else [], Beam.BAD, eventPlayer.getPosition(), eventPlayer.nemesis_killer, Color.BLACK, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                            eventPlayer.nemesis_beam_effect = getLastCreatedEntity()
                            update_ab_string_and_play_sound()
                elif temp_2 == 9:
                    if not eventPlayer.perk_special_operator:
                        temp_2 = 600
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.addHealthPool(Health.ARMOR, 50, true)
                            eventPlayer.HP_Pool[2] = getLastCreatedHealthPool()
                            eventPlayer.perk_special_operator = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 10:
                    if not eventPlayer.perk_sharpshooter:
                        temp_2 = 900
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.perk_sharpshooter = true
                            startDamageModification([player for player in getPlayers(Team.2) if distance(eventPlayer, player) > 20], eventPlayer, 150)
                            eventPlayer.damage_mod[10] = getLastDamageModification()
                            update_ab_string_and_play_sound()
                elif temp_2 == 11:
                    if not eventPlayer.perk_shockproof:
                        temp_2 = 700
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.disablePlayerCollision()
                            eventPlayer.Move_Speed += 15
                            eventPlayer.perk_shockproof = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 12:
                    if not eventPlayer.Talent1:
                        temp_2 = 1600
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.Talent1 = true
                            update_ab_string_and_play_sound()
                elif temp_2 == 13:
                    if not eventPlayer.Talent2:
                        temp_2 = 1600
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.Talent2 = true
                            update_ab_string_and_play_sound()
        elif temp_1[0] == 1:
            if eventPlayer.is_showing_active_abilities:
                if temp_1[1] == 1:
                    temp_1 = 4
                    buy_active_ability()
                elif temp_1[1] == 2:
                    temp_1 = 8
                    buy_active_ability()
            else:
                temp_2 = 500
                check_if_enough_money()
                if temp_2:
                    if temp_1[1] == 1:
                        eventPlayer.ab_health_bonus += 5
                        eventPlayer.health_percent += 5
                    elif temp_1[1] == 2:
                        eventPlayer.ab_damage_bonus += 5
                        eventPlayer.Damage_Dealt += 5
                        eventPlayer.setDamageDealt(eventPlayer.Damage_Dealt)
                    else:
                        eventPlayer.ab_healing_bonus += 5
                        eventPlayer.healing_dealt_percent += 5
                    update_ab_string_and_play_sound()
        elif temp_1[0] == 2:
            if eventPlayer.is_showing_active_abilities:
                if temp_1[1] == 1:
                    temp_1 = 3
                    buy_active_ability()
                elif temp_1[1] == 2:
                    temp_1 = 7
                    buy_active_ability()
            else:
                if temp_1[1] == 1:
                    if eventPlayer.ab_second_wind < 2:
                        temp_2 = 1000
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.ab_second_wind = 2 if eventPlayer.ab_second_wind else 1
                            update_ab_string_and_play_sound()
                elif temp_1[1] == 2:
                    if eventPlayer.ab_triage < 2:
                        temp_2 = 700
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.ab_triage = 2 if eventPlayer.ab_triage else 1
                            update_ab_string_and_play_sound()
                else:
                    if eventPlayer.ab_resilience < 2:
                        temp_2 = 800
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.ab_resilience = 2 if eventPlayer.ab_resilience else 1
                            eventPlayer.Damage_Received -= 20
                            eventPlayer.setKnockbackDealt(100 + 30 * eventPlayer.ab_resilience)
                            eventPlayer.setKnockbackReceived(100 - 30 * eventPlayer.ab_resilience)
                            update_ab_string_and_play_sound()
        elif temp_1[0] == 3:
            if eventPlayer.is_showing_active_abilities:
                if temp_1[1] == 1:
                    temp_1 = 2
                    buy_active_ability()
                elif temp_1[1] == 2:
                    temp_1 = 6
                    buy_active_ability()
            else:
                if temp_1[1] == 1:
                    if eventPlayer.ab_charged < 2:
                        temp_2 = 700
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.ab_charged = 2 if eventPlayer.ab_charged else 1
                            update_ab_string_and_play_sound()
                elif temp_1[1] == 2:
                    if eventPlayer.ab_haste < 2:
                        temp_2 = 800
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.ab_haste = 2 if eventPlayer.ab_haste else 1
                            update_ab_string_and_play_sound()
                else:
                    if eventPlayer.ab_heavy_impact < 2:
                        temp_2 = 1000
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.ab_heavy_impact = 2 if eventPlayer.ab_heavy_impact else 1
                            update_ab_string_and_play_sound()
        elif temp_1[0] == 4:
            if eventPlayer.is_showing_active_abilities:
                if temp_1[1] == 1:
                    temp_1 = 1
                    buy_active_ability()
                elif temp_1[1] == 2:
                    temp_1 = 5
                    buy_active_ability()
            else:
                if temp_1[1] == 1:
                    if eventPlayer.ab_headhunter < 2:
                        temp_2 = 800
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.ab_headhunter = 2 if eventPlayer.ab_headhunter else 1
                            update_ab_string_and_play_sound()
                elif temp_1[1] == 2:
                    if eventPlayer.ab_antigens < 2:
                        temp_2 = 600
                        check_if_enough_money()
                        if temp_2:
                            stopHealingModification(eventPlayer.heal_mod[1])
                            stopHealingOverTime(eventPlayer.heal_mod[2])
                            eventPlayer.ab_antigens = 2 if eventPlayer.ab_antigens else 1
                            startHealingModification(eventPlayer, getAllPlayers(), 100 + 20 * eventPlayer.ab_antigens)
                            eventPlayer.heal_mod[1] = getLastHealingModification()
                            eventPlayer.startHealingOverTime(null, 9999, eventPlayer.getMaxHealth() * 0.01 * eventPlayer.ab_antigens)
                            eventPlayer.heal_mod[2] = getLastHealingOverTimeId()
                            update_ab_string_and_play_sound()
                else:
                    if eventPlayer.ab_quick_fix < 2:
                        temp_2 = 700
                        check_if_enough_money()
                        if temp_2:
                            eventPlayer.ab_quick_fix = 2 if eventPlayer.ab_quick_fix else 1
                            update_ab_string_and_play_sound()
        else:
            if not eventPlayer.ab_priority:
                temp_2 = 1200
                check_if_enough_money()
                if not temp_2:
                    wait(0.1)
                    return
            elif temp_1[1] == eventPlayer.ab_priority:
                wait(0.1)
                return
            else:
                smallMessage(eventPlayer, "Swapped Priority")
            eventPlayer.ab_priority = temp_1[1]
            update_ab_string_and_play_sound()
    wait(0.1)


rule "All Teams: Player left Match, Scale Damage":
    @Event playerLeft

    update_combatants()
    temp_2 = (((2 if mut_emp_rounds else 1) * (20 + (8.25 * (wave_number - 1 + (max(0, wave_number - 9)))))) * (0.139 + 0.2 * combatants_count)) * (9 / getNumberOfPlayers(Team.2))
    for temp_1 in range(getNumberOfLivingPlayers(Team.2)):
        getLivingPlayers(Team.2)[temp_1].setDamageDealt(getLivingPlayers(Team.2)[temp_1].Damage_Dealt * temp_2)


def nwp_teleport():
    @Name "Subroutine: Nearest Walkable Position Teleport"

    if temp_1 == []:
        eventPlayer.teleport(sorted(nodes, lambda player: distance(eventPlayer, player))[0])
    else:
        eventPlayer.teleport(temp_1)


rule "Team 1 (Spawn): Player Init, Create Effects, Set Is Combatant":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.hasSpawned() == true

    #Fail-Safe if player somehow despawned (Like Echo duplicating D.Va)
    if eventPlayer.is_combatant:
        return
    smallMessage(eventPlayer, "*******\u200b \u200b***********\u200b PvE: Talents\u200b | 3.4.6 \u200b***\u200b LemonAid")
    #Triage: Players to Players Healing Increase
    startHealingModification([player for player in combatants if player.getNormalizedHealth() <= 0.5], eventPlayer, 100 + 25 * eventPlayer.ab_triage)
    eventPlayer.is_combatant = true
    eventPlayer.spectated_player = eventPlayer
    eventPlayer.ab_bought_abilities_string = ""
    eventPlayer.health_percent = 100
    eventPlayer.healing_dealt_percent = 100
    eventPlayer.setHealingReceived(85 + 2.5 * upgrade_count)
    update_combatants()
    createEffect(getAllPlayers() if eventPlayer.downed_start_t else [], Effect.RING, Color.YELLOW, eventPlayer, 3, EffectReeval.VISIBILITY)
    createIcon(getAllPlayers().exclude(eventPlayer) if eventPlayer.downed_start_t else [], eventPlayer, Icon.SKULL, IconReeval.VISIBILITY, Color.YELLOW)
    #Workaround: Normalized Health sometimes doesn't reevaluate, so force with TTE
    hudText(getPlayers(Team.1), "{0}{1}".format(heroIcon(eventPlayer.getHero()), progress_bar_strings[floor(eventPlayer.revive_timer / 10)] if eventPlayer.downed_start_t and eventPlayer.revive_timer else ""), "{0}{1}{2}".format(eventPlayer, [" (A)", " (B)", " (C)"][eventPlayer.ab_priority - 1] if eventPlayer.ab_priority else "", " (In Shop)" if eventPlayer.in_buy_menu_start_t else ""), "{0}{1}".format(("Being Revived" if eventPlayer.revive_timer else "Downed") if eventPlayer.downed_start_t else "Changing Heroes" if eventPlayer.is_changing_heroes else "{0} HP".format(ceil(eventPlayer.getHealth())), ", {0}$".format(floor(money_mult * money_amount - eventPlayer.money_spent_amount))), HudPosition.LEFT, -1 if localPlayer == eventPlayer else eventPlayer.getSlot(), Color.RED if eventPlayer.downed_start_t else (Color.GREEN if localPlayer == eventPlayer else Color.SKY_BLUE) if eventPlayer.is_changing_heroes or eventPlayer.getNormalizedHealth() >= 0.5 else Color.ORANGE, Color.RED if eventPlayer.downed_start_t else (Color.GREEN if localPlayer == eventPlayer else Color.SKY_BLUE) if eventPlayer.is_changing_heroes or eventPlayer.getNormalizedHealth() >= 0.5 else Color.ORANGE, Color.RED if eventPlayer.downed_start_t else (Color.GREEN if localPlayer == eventPlayer else Color.SKY_BLUE) if eventPlayer.is_changing_heroes or eventPlayer.getNormalizedHealth() >= 0.5 else Color.ORANGE)
    #Stats
    eventPlayer.Damage_Received = 100
    eventPlayer.Damage_Dealt = 100
    eventPlayer.Move_Speed = 100
    #Ability lists
    hudSubheader(eventPlayer if eventPlayer.is_combatant else [], eventPlayer.spectated_player.ab_bought_abilities_string, HudPosition.LEFT, 10, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)
    hudText(eventPlayer if eventPlayer.spectated_player.Talent1 else [], " ", eventPlayer.spectated_player.talent_text[2], "{0}\n━━━━".format(eventPlayer.spectated_player.talent_text[1]), HudPosition.LEFT, 11, Color.BLUE, Color.WHITE, Color.SKY_BLUE, HudReeval.VISIBILITY_AND_STRING)
    hudText(eventPlayer if eventPlayer.spectated_player.Talent2 else [], " ", eventPlayer.spectated_player.talent_text[4], "{0}\n━━━━".format(eventPlayer.spectated_player.talent_text[3]), HudPosition.LEFT, 12, Color.BLUE, Color.WHITE, Color.SKY_BLUE, HudReeval.VISIBILITY_AND_STRING)
    hudText(eventPlayer if eventPlayer.spectated_player.active_ab_number else [], abilityIconString([Hero.ANA, Hero.SOMBRA, Hero.SOLDIER, Hero.REAPER, Hero.CASSIDY, Hero.BAPTISTE, Hero.SIGMA, Hero.SOMBRA][eventPlayer.spectated_player.active_ab_number - 1], [Button.ULTIMATE, Button.ABILITY_1, Button.ABILITY_1, Button.ABILITY_1, Button.ABILITY_2, Button.ABILITY_1, Button.ULTIMATE, Button.SECONDARY_FIRE][eventPlayer.spectated_player.active_ab_number - 1]), "Hold or double tap {0}".format(inputBindingString(Button.MELEE)), "{0}: {1}".format(["Stim Infusion", "Cloak", "Feint", "Frenzy", "Smoke Bomb", "Resurgence", "Tear Gas", "Chain Hack"][eventPlayer.spectated_player.active_ab_number - 1], ceil(magnitude(eventPlayer.spectated_player.active_ab_cooldown)) if eventPlayer.spectated_player.active_ab_cooldown else "Ready"), HudPosition.LEFT, 13, Color.GREEN if eventPlayer.spectated_player.active_ab_cooldown < 0 else Color.RED if eventPlayer.spectated_player.hasStatus(Status.HACKED) or eventPlayer.spectated_player.hasStatus(Status.STUNNED) else Color.GRAY if eventPlayer.spectated_player.active_ab_cooldown else Color.GREEN, Color.ORANGE, Color.GREEN if eventPlayer.spectated_player.active_ab_cooldown < 0 else Color.RED if eventPlayer.spectated_player.hasStatus(Status.HACKED) or eventPlayer.spectated_player.hasStatus(Status.STUNNED) else Color.GRAY if eventPlayer.spectated_player.active_ab_cooldown else Color.GREEN, HudReeval.VISIBILITY_STRING_AND_COLOR)
    createEffect(eventPlayer if eventPlayer.Smoked_Screen and not eventPlayer.perk_special_operator else [], Effect.SPHERE, Color.WHITE, eventPlayer, 5, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if eventPlayer.hasStatus(Status.INVINCIBLE) else [], Effect.BAPTISTE_IMMORTALITY_FIELD_PROTECTED, Team.2, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    if wave_number:
        [player for player in getPlayers(Team.2) if player.is_living_boss].startForcingOutlineFor(eventPlayer, true, Color.YELLOW, OutlineVisibility.ALWAYS)
        eventPlayer.can_use_drop_in_buy_menu = true
        waitUntil(not not eventPlayer.in_buy_menu_start_t, 15)
        eventPlayer.can_use_drop_in_buy_menu = false
        if eventPlayer.in_buy_menu_start_t:
            eventPlayer.active_ab_is_cloaked = true
            eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 30)
            waitUntil(not eventPlayer.in_buy_menu_start_t, 30)
            eventPlayer.active_ab_is_cloaked = false
            eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    else:
        eventPlayer.teleport(player_spawn_pos)
        wait(0.2)
        eventPlayer.setFacing(player_spawn_facing, Relativity.TO_WORLD)


rule "Team 1: Detect Input Device":
    @Event eachPlayer
    @Team 1

    waitUntil(magnitude(eventPlayer.getThrottle()) > 0, 99999)
    temp_1 = [-1, false, 1]
    eventPlayer.is_controller_player = not (eventPlayer.getThrottle().x in temp_1 and eventPlayer.getThrottle().z in temp_1)
    eventPlayer.mercy_res_button = Button.SECONDARY_FIRE if eventPlayer.is_controller_player else Button.ABILITY_2


rule "Team 1: Add Health Pool":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.is_combatant == true
    @Condition upgrade_count > 0

    eventPlayer.addHealthPool(Health.NORMAL, eventPlayer.health_percent * 0.25 * upgrade_count, true)


rule "Team 1 Button: Hold Reload, Change Hero, Set Last Position (1), Last Eye Position (2), Last Facing (3)":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true

    wait(0.4, Wait.ABORT_WHEN_FALSE)
    if objective_phase_number > 0 or eventPlayer.downed_start_t or eventPlayer.in_buy_menu_start_t:
        return
    if eventPlayer.perk_mystery_swap:
        smallMessage(eventPlayer, "Mystery Swap prevents you from changing heroes")
        return
    eventPlayer.is_changing_heroes = true
    eventPlayer.ab_var_1 = eventPlayer.getPosition()
    eventPlayer.ab_var_2 = eventPlayer.getEyePosition()
    eventPlayer.ab_var_3 = eventPlayer.getFacingDirection()
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.YELLOW, eventPlayer.ab_var_1, 1)
    eventPlayer.startCamera(raycast(eventPlayer.ab_var_2, eventPlayer.ab_var_2 - 8.25 * directionFromAngles(horizontalAngleOfDirection(eventPlayer.ab_var_3), 20), null, null, false).getHitPosition() + 0.25 * directionFromAngles(horizontalAngleOfDirection(eventPlayer.ab_var_3), 20), eventPlayer.ab_var_2)
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    kill(eventPlayer)
    #Lower values might cause the player to fall through the map when respawning
    eventPlayer.teleport(100 * Vector.DOWN)
    wait(0.1)
    eventPlayer.is_invisible = 2
    waitUntil(eventPlayer.isAlive(), 99999)
    eventPlayer.stopCamera()
    eventPlayer.teleport(eventPlayer.ab_var_1)
    eventPlayer.setFacing(eventPlayer.ab_var_3, Relativity.TO_WORLD)
    eventPlayer.is_changing_heroes = false
    eventPlayer.is_invisible = false
    wait(0.5)
    update_ab_string_and_play_sound()


rule "Team 1: Took Damage, Set Last Damage Taken":
    @Event playerTookDamage
    @Team 1

    eventPlayer.last_damage_taken_t = getTotalTimeElapsed()


rule "Team 1 (Death): Start Camera, Play Sounds, Set is Downed, Revive Timer, Knocked down, Phased out, Death Cam Target":
    @Event playerDied
    @Team 1
    @Condition eventPlayer.is_changing_heroes == false

    if not eventPlayer.downed_start_t:
        eventPlayer.disableMessages()
        smallMessage(getAllPlayers(), "{0} was downed!".format(eventPlayer))
        eventPlayer.death_cam_target = eventPlayer.getEyePosition() + 1000 * directionFromAngles(eventPlayer.getHorizontalFacingAngle(), 0)
        eventPlayer.startCamera((raycast(eventPlayer.spectated_player.getEyePosition(), eventPlayer.spectated_player.getEyePosition() - (6.25 * directionTowards(eventPlayer.spectated_player.getEyePosition(), eventPlayer.death_cam_target) if eventPlayer.death_cam_target else 8.25 * directionFromAngles(eventPlayer.spectated_player.getHorizontalFacingAngle(), 20)), null, null, false).getHitPosition()) + (0.25 * (directionTowards(eventPlayer.spectated_player.getEyePosition(), eventPlayer.death_cam_target) if eventPlayer.death_cam_target else directionFromAngles(eventPlayer.spectated_player.getHorizontalFacingAngle(), 20))), eventPlayer.spectated_player.getEyePosition(), 10 if eventPlayer.death_cam_target else 20)
        for temp_1 in range(combatants_count):
            playEffect(combatants[temp_1], DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, combatants[temp_1], 200)
            playEffect(combatants[temp_1], DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, combatants[temp_1], 200)
        eventPlayer.downed_start_t = getTotalTimeElapsed()
        eventPlayer.revive_timer = false
        if eventPlayer.perk_nemesis and attacker.is_alive and attacker.getTeam() == Team.2 and not attacker.iv_is_portal and attacker.getSlot() != 1:
            eventPlayer.nemesis_killer = attacker
        else:
            eventPlayer.nemesis_killer = null
        disable_player()
    if eventWasEnvironment:
        temp_1 = nearestWalkablePosition(eventPlayer)
        nwp_teleport()
    eventPlayer.resurrect()
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 9999)
    #eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 9999)
    wait(0.05, Wait.RESTART_WHEN_TRUE)
    eventPlayer.setHealth(1)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    if attacker != eventPlayer:
        eventPlayer.death_cam_target = attacker
        wait(5, Wait.RESTART_WHEN_TRUE)
    eventPlayer.death_cam_target = null


rule "Team 1: Player downed fallback":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.downed_start_t == true
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false

    wait(0.25, Wait.ABORT_WHEN_FALSE)
    if not ruleCondition:
        return
    eventPlayer.startScalingSize(0.5, false)
    disable_player()
    while eventPlayer.downed_start_t and not eventPlayer.hasStatus(Status.HACKED):
        eventPlayer.clearStatusEffect(Status.PHASED_OUT)
        eventPlayer.cancelPrimaryAction()
        eventPlayer.setStatusEffect(null, Status.HACKED, 9999)
        wait(0.25)
    if eventPlayer.downed_start_t:
        eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    if ruleCondition:
        loop()


rule "Team 1: Select Next Spectated Player":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.downed_start_t == true
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true

    if eventPlayer.downed_start_t + 0.5 >= getTotalTimeElapsed():
        return
    eventPlayer.death_cam_target = null
    if eventPlayer.nemesis_killer:
        if eventPlayer.spectated_player == eventPlayer:
            eventPlayer.spectated_player = eventPlayer.nemesis_killer
        else:
            eventPlayer.spectated_player = eventPlayer
    else:
        eventPlayer.spectated_player = combatants[(combatants.index(eventPlayer.spectated_player) + 1) % combatants_count]
    wait(0.25)


rule "Team 1: Spectated Player does not exist anymore":
    @Event eachPlayer
    @Team 1
    @Condition entityExists(eventPlayer.spectated_player) == false

    eventPlayer.spectated_player = eventPlayer


rule "Team 1: Revive, Check Player in Radius, Unset Is Downed":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.downed_start_t == true
    @Condition eventPlayer.downed_start_t + 1 < getTotalTimeElapsed()

    eventPlayer.revivers = [player for player in combatants if not player.downed_start_t and not player.is_invisible % 3 and distance(eventPlayer, vect(player.getPosition().x, eventPlayer.getPosition().y, player.getPosition().z)) <= 3 and abs(eventPlayer.getPosition().y - player.getPosition().y) <= 3 and (player.getHero() == Hero.MEI and player.isUsingAbility1() or isInLoS(eventPlayer, player))]
    if len(eventPlayer.revivers):
        eventPlayer.is_revive_slow = all([player.active_ab_is_cloaked or player.hasStatus(Status.INVINCIBLE) or player.hasStatus(Status.PHASED_OUT) for player in eventPlayer.revivers])
        eventPlayer.revive_timer += ((0.667 if is_hard_mode_enabled or is_apocalyptic else 1) * (2 if eventPlayer.perk_golden_hour else 1)) * (2.5 if eventPlayer.is_revive_slow else 5)
        if eventPlayer.revive_timer >= 100:
            smallMessage(getAllPlayers(), "{0} has been revived!".format(eventPlayer))
            eventPlayer.downed_start_t = false
    else:
        eventPlayer.revive_timer = false
    wait(0.2)
    if ruleCondition:
        loop()


rule "Team 1: Teleport if Player died on Jumppad":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.downed_start_t == true
    @Condition eventPlayer.downed_start_t + 5 < getTotalTimeElapsed()
    @Condition eventPlayer.is_flying == true

    temp_1 = nearestWalkablePosition(eventPlayer.getPosition() + 5 * directionFromAngles(random.randint(-179, 180), false))
    nwp_teleport()


rule "Team 1: Player gets up":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.downed_start_t == false

    if not eventPlayer.is_combatant:
        return
    eventPlayer.enableMessages()
    eventPlayer.stopCamera()
    enable_player()
    playEffect(getAllPlayers(), DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 200)
    eventPlayer.setHealth(100000)
    eventPlayer.spectated_player = eventPlayer
    eventPlayer.revivers = []
    eventPlayer.nemesis_killer = null
    eventPlayer.clearStatusEffect(Status.HACKED)
    eventPlayer.clearStatusEffect(Status.INVINCIBLE)
    enable_player()
    eventPlayer.stopScalingSize()
    wait(2, Wait.ABORT_WHEN_FALSE)
    if not ruleCondition:
        return
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)


rule "Team 1: Heal after few sec":
    @Event eachPlayer
    @Team 1
    @Condition (eventPlayer.last_damage_taken_t + ((0.5 if eventPlayer.perk_die_hard else 1) * (5 if mut_deep_wounds else 2.5))) < getTotalTimeElapsed()
    @Condition eventPlayer.getNormalizedHealth() != 1
    @Condition eventPlayer.getHealth() != false

    heal(eventPlayer, null, eventPlayer.getMaxHealth() * 0.333)
    playEffect(eventPlayer, DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 50)
    while true:
        wait(0.2, Wait.ABORT_WHEN_FALSE)
        if not ruleCondition:
            return
        heal(eventPlayer, null, 40)


rule "Team 1: Set / Unset Is Flying":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isOnGround() == false

    wait(1.5, Wait.ABORT_WHEN_FALSE)
    eventPlayer.is_flying = true
    waitUntil(eventPlayer.isOnGround(), 99999)
    eventPlayer.is_flying = false


rule "Team 1: Calculate Eye Offset":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.is_combatant == true

    if eventPlayer.getHero() == Hero.MEI and eventPlayer.isUsingAbility1():
        eventPlayer.eye_offset = 1.2 * Vector.UP
    elif eventPlayer.hasStatus(Status.KNOCKED_DOWN) or eventPlayer.hasStatus(Status.ASLEEP) or eventPlayer.isCommunicatingEmote():
        eventPlayer.eye_offset = eventPlayer.getPosition() + 0.25 * Vector.UP - eventPlayer.getEyePosition()
    else:
        eventPlayer.eye_offset = aim_offset
    if eventPlayer.active_ab_is_smoked:
        eventPlayer.active_ab_is_smoked = false
        eventPlayer.eye_offset += random.uniform(0.5, 2) * directionFromAngles(random.randint(-179, 180), random.randint(0, 45))
    wait(1)
    if ruleCondition:
        loop()


rule "Team 1 Button: Hold or double tap Melee, Use active Ability":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.isHoldingButton(Button.MELEE) == true

    waitUntil(not eventPlayer.isHoldingButton(Button.MELEE), 0.4)
    if not eventPlayer.isHoldingButton(Button.MELEE):
        waitUntil(eventPlayer.isHoldingButton(Button.MELEE), 0.3)
        if not eventPlayer.isHoldingButton(Button.MELEE):
            return
    if eventPlayer.isDead() or eventPlayer.downed_start_t or eventPlayer.hasStatus(Status.HACKED) or eventPlayer.hasStatus(Status.STUNNED) or not eventPlayer.active_ab_number or eventPlayer.in_buy_menu_start_t:
        return
    playEffect(eventPlayer, DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 200)
    if eventPlayer.active_ab_number == 1:
        eventPlayer.last_damage_taken_t = false
        eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 0.1)
        eventPlayer.Damage_Dealt += 100
        eventPlayer.healing_dealt_percent += 100
        eventPlayer.Move_Speed += 50
        for eventPlayer.active_ab_cooldown in range(-6, 0):
            wait(1)
        eventPlayer.Damage_Dealt -= 100
        eventPlayer.healing_dealt_percent -= 100
        eventPlayer.Move_Speed -= 50
        eventPlayer.active_ab_cooldown = 30
    elif eventPlayer.active_ab_number == 2:
        eventPlayer.active_ab_is_cloaked = true
        for eventPlayer.active_ab_cooldown in range(-8, 0):
            wait(1)
        eventPlayer.active_ab_is_cloaked = false
        damage(getPlayersInRadius(eventPlayer.getEyePosition(), 10, Team.2, LosCheck.SURFACES), eventPlayer, 99)
        getPlayersInRadius(eventPlayer.getEyePosition(), 10, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.FROZEN, 4)
        playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.AQUA, eventPlayer.getEyePosition(), 10)
        playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.active_ab_cooldown = 20
    elif eventPlayer.active_ab_number == 3:
        eventPlayer.active_ab_cooldown = -1
        temp_1 = getPlayersInRadius(eventPlayer.getEyePosition(), 6, Team.2, LosCheck.SURFACES)
        damage(temp_1, eventPlayer, 100)
        eventPlayer.applyImpulse(eventPlayer.getThrottle() if eventPlayer.getThrottle() != vect(0, 0, 0) else Vector.FORWARD, 25, Relativity.TO_PLAYER, Impulse.CANCEL_CONTRARY_MOTION)
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.BLACK, eventPlayer.getEyePosition(), 6)
        playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.setGravity(0)
        eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 0.7)
        wait(0.6)
        eventPlayer.setGravity(100)
        temp_1 = getPlayersInRadius(eventPlayer.getEyePosition(), 6, Team.2, LosCheck.SURFACES)
        damage(temp_1, eventPlayer, 100)
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.BLACK, eventPlayer.getEyePosition(), 6)
        playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
        eventPlayer.active_ab_cooldown = 10
        wait(1)
    elif eventPlayer.active_ab_number == 4:
        eventPlayer.active_ab_is_frenzied = true
        eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 5)
        for eventPlayer.active_ab_cooldown in range(-5, 0):
            eventPlayer.last_damage_taken_t = getTotalTimeElapsed()
            wait(1)
        eventPlayer.active_ab_is_frenzied = false
        eventPlayer.active_ab_cooldown = 30
    elif eventPlayer.active_ab_number == 5:
        eventPlayer.active_ab_var = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + 2 * Vector.DOWN, null, null, false).getHitPosition() + 2 * Vector.UP
        for eventPlayer.active_ab_cooldown in range(-10, 0, 0.5):
            ([player for player in combatants if distance(player.getEyePosition(), vect(eventPlayer.active_ab_var.x, player.getEyePosition().y, eventPlayer.active_ab_var.z)) <= 10 and abs(player.getEyePosition().y - eventPlayer.active_ab_var.y) <= 5]).active_ab_is_smoked = true
            wait(0.5)
        eventPlayer.active_ab_cooldown = 20
    elif eventPlayer.active_ab_number == 6:
        for eventPlayer.active_ab_cooldown in range(-5, 0, 0.25):
            if eventPlayer.getNormalizedHealth() != 1:
                heal(eventPlayer, null, 75)
            if eventPlayer.getNormalizedHealth() == 1:
                heal((sorted([player for player in getPlayersInRadius(eventPlayer, 15, Team.1) if player.is_combatant and not player.downed_start_t and player.getNormalizedHealth() != 1], lambda i_: i_.getNormalizedHealth()))[0], null, 75)
            wait(0.25)
        eventPlayer.active_ab_cooldown = 25
    elif eventPlayer.active_ab_number == 7:
        eventPlayer.active_ab_var = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + 100 * eventPlayer.getFacingDirection(), getPlayers(Team.2), null, true).getHitPosition()
        playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.WHITE, eventPlayer.active_ab_var, 8)
        playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer.active_ab_var, 200)
        for eventPlayer.active_ab_cooldown in range(-6, 0):
            temp_1 = [player for player in getLivingPlayers(Team.2) if not player.hasStatus(Status.PHASED_OUT) and not player.hasStatus(Status.STUNNED) and distance(eventPlayer.active_ab_var, player.getEyePosition()) <= 8]
            temp_1.startDamageOverTime(eventPlayer, 2, 40)
            for temp_2 in range(len(temp_1)):
                temp_1[temp_2].gmut_fortified_bypass_end_t = max(getTotalTimeElapsed(), temp_1[temp_2].gmut_fortified_bypass_end_t)
                temp_1[temp_2].setStatusEffect(eventPlayer, Status.STUNNED, 0.5 if temp_1[temp_2].is_fortified else 1)
            wait(2)
        eventPlayer.active_ab_cooldown = 35
    elif eventPlayer.active_ab_number == 8:
        temp_1 = (sorted([player for player in getLivingPlayers(Team.2) if not player.hasStatus(Status.PHASED_OUT) and not player.iv_is_portal and eventPlayer.isInViewAngle(player, 45) and isInLoS(eventPlayer.getEyePosition(), player.getEyePosition())], lambda i_: dotProduct(eventPlayer.getFacingDirection(), directionTowards(eventPlayer.getEyePosition(), i_)))).last()
        if temp_1:
            temp_1.setStatusEffect(eventPlayer, Status.HACKED, 5)
            eventPlayer.active_ab_var.append(temp_1)
            for temp_2 in range(4, 1, -1):
                temp_1 = (sorted([i_ for i_ in getLivingPlayers(Team.2).exclude(eventPlayer.active_ab_var) if not i_.hasStatus(Status.PHASED_OUT) and not i_.iv_is_portal and isInLoS(temp_1, i_)], lambda i_: distance(temp_1, i_)))[0]
                if temp_1:
                    temp_1.setStatusEffect(eventPlayer, Status.HACKED, temp_2)
                    eventPlayer.active_ab_var.append(temp_1)
                else:
                    break
            damage(eventPlayer.active_ab_var, eventPlayer, 5)
            eventPlayer.active_ab_cooldown = -0.8
            wait(0.8)
            eventPlayer.active_ab_var = []
            eventPlayer.active_ab_cooldown = 25
        else:
            eventPlayer.active_ab_cooldown = 1
    for eventPlayer.active_ab_cooldown in range(eventPlayer.active_ab_cooldown, 0, -1):
        wait(1)


rule "Team 1 (Ability): Priority C":
    @Event playerDealtHealing
    @Team 1

    if (not eventPlayer.ab_priority) == 3:
        return
    if healee == eventPlayer:
        return
    if not eventHealing:
        return
    eventPlayer.setHealth(eventPlayer.getHealth() + 0.4 * eventHealing)


rule "Team 1 (Ability): Charged":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_charged == true
    @Condition eventPlayer.getUltCharge() < eventPlayer.ab_charged * 15

    eventPlayer.setUltCharge(eventPlayer.ab_charged * 15)
    #Workaround: Sets Ultimate Charge to a higher value for duplicating Echo
    if eventPlayer.isDuplicatingAHero():
        wait()
        eventPlayer.setUltCharge(eventPlayer.ab_charged * 15)


rule "Team 1 (Ability): Haste Primary Fire":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_haste == true
    @Condition eventPlayer.getAbilityCooldown(Button.PRIMARY_FIRE) > 0.1

    eventPlayer.setAbilityCooldown(Button.PRIMARY_FIRE, (1 - 0.25 * eventPlayer.ab_haste) * eventPlayer.getAbilityCooldown(Button.PRIMARY_FIRE))


rule "Team 1 (Ability): Haste Secondary Fire":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_haste == true
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) > 0.1

    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, (1 - 0.25 * eventPlayer.ab_haste) * eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE))


rule "Team 1 (Ability): Haste Ability 1":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_haste == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_1) > 0.1

    eventPlayer.setAbilityCooldown(Button.ABILITY_1, (1 - 0.25 * eventPlayer.ab_haste) * eventPlayer.getAbilityCooldown(Button.ABILITY_1))


rule "Team 1 (Ability): Haste Ability 2":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_haste == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) > 0.1

    eventPlayer.setAbilityCooldown(Button.ABILITY_2, (1 - 0.25 * eventPlayer.ab_haste) * eventPlayer.getAbilityCooldown(Button.ABILITY_2))


rule "Team 1 (Ability): Haste Jump":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_haste == true
    @Condition eventPlayer.getAbilityCooldown(Button.JUMP) > 0.1

    eventPlayer.setAbilityCooldown(Button.JUMP, (1 - 0.25 * eventPlayer.ab_haste) * eventPlayer.getAbilityCooldown(Button.JUMP))


rule "Team 1 (Ability): Haste Crouch":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_haste == true
    @Condition eventPlayer.getAbilityCooldown(Button.CROUCH) > 0.1

    eventPlayer.setAbilityCooldown(Button.CROUCH, (1 - 0.25 * eventPlayer.ab_haste) * eventPlayer.getAbilityCooldown(Button.CROUCH))


rule "Team 1 (Ability): Headhunter":
    @Event playerDealtDamage
    @Team 1

    if not eventPlayer.ab_headhunter:
        return
    if not eventWasCriticalHit:
        return
    damage(victim, eventPlayer, eventPlayer.ab_headhunter * 30 / eventPlayer.Damage_Dealt * eventDamage)


rule "Team 1 (Ability): Priority B":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_priority == 2
    @Condition eventPlayer.last_damage_taken_t + 3 < getTotalTimeElapsed()

    eventPlayer.Damage_Dealt += 20
    eventPlayer.Move_Speed += 20
    waitUntil(eventPlayer.last_damage_taken_t + 3 >= getTotalTimeElapsed() or eventPlayer.perk_mystery_swap == getTotalTimeElapsed() + 90, 99999)
    eventPlayer.Damage_Dealt -= 20
    eventPlayer.Move_Speed -= 20


rule "Team 1 (Ability): Quick Fix":
    @Event playerEarnedElimination
    @Team 1
    @Condition eventPlayer.ab_quick_fix == true

    heal(eventPlayer, null, eventPlayer.ab_quick_fix * 50)
    if not eventPlayer.current_quick_fix_speed_bonus:
        eventPlayer.current_quick_fix_speed_bonus = eventPlayer.ab_quick_fix * 15
        eventPlayer.Move_Speed += eventPlayer.current_quick_fix_speed_bonus
    wait(5, Wait.RESTART_WHEN_TRUE)
    eventPlayer.Move_Speed -= eventPlayer.current_quick_fix_speed_bonus
    eventPlayer.current_quick_fix_speed_bonus = false


rule "Team 1 (Ability): Second Wind":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.ab_second_wind == true
    @Condition eventPlayer.downed_start_t == true
    @Condition eventPlayer.downed_start_t + 0.9 < getTotalTimeElapsed()

    smallMessage(getAllPlayers(), "{0} received a second wind!".format(eventPlayer))
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.GREEN, eventPlayer, 1)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 3.5)
    eventPlayer.downed_start_t = false
    wait(120 - 30 * eventPlayer.ab_second_wind)


rule "Team 1 (Perk): Mystery Swap":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.perk_mystery_swap != false
    @Condition eventPlayer.perk_mystery_swap < getTotalTimeElapsed()
    @Condition eventPlayer.downed_start_t == false

    wait(1, Wait.ABORT_WHEN_FALSE)
    if not ruleCondition:
        return
    if eventPlayer.Talent1:
        eventPlayer.Swapped_Talent_Array[1] = true
        eventPlayer.Talent1 = false
    if eventPlayer.Talent2:
        eventPlayer.Swapped_Talent_Array[2] = true
        eventPlayer.Talent2 = false
    eventPlayer.perk_mystery_swap = getTotalTimeElapsed() + 90
    wait(0.2)
    eventPlayer.startForcingHero(random.choice(getAllHeroes().exclude(eventPlayer.getHero())))
    eventPlayer.is_invisible = false
    eventPlayer.last_damage_taken_t = 0
    wait(0.1)
    if eventPlayer.Swapped_Talent_Array[1]:
        eventPlayer.Swapped_Talent_Array[1] = false
        eventPlayer.Talent1 = true
    if eventPlayer.Swapped_Talent_Array[2]:
        eventPlayer.Swapped_Talent_Array[2] = false
        eventPlayer.Talent2 = true
    eventPlayer.setUltCharge(100)
    update_ab_string_and_play_sound()


rule "Team 1 (Perk): Bulletstorm":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.perk_bulletstorm == true
    @Condition (eventPlayer.getAmmo(false) < eventPlayer.getMaxAmmo(false) or eventPlayer.getAmmo(1) < eventPlayer.getMaxAmmo(1)) == true

    eventPlayer.setAmmo(false, 1000)
    eventPlayer.setAmmo(1, 1000)


rule "Team 1 (Perk): Nemesis":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.nemesis_killer.isDead() == true

    wait(0.2, Wait.ABORT_WHEN_FALSE)
    if not eventPlayer.downed_start_t:
        return
    smallMessage(getAllPlayers(), "{0}'s Nemesis was killed!".format(eventPlayer))
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.GREEN, eventPlayer, 1)
    eventPlayer.downed_start_t = false


rule "Team 1 (Perk): Brass Knuckles":
    @Event playerDealtKnockback
    @Team 1

    if not eventPlayer.perk_brass_knuckles:
        return
    if eventAbility != Button.MELEE:
        return
    if victim.iv_is_portal:
        return
    if victim.isDead():
        return
    victim.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 1.75, victim.gmut_fortified_bypass_end_t)
    victim.setStatusEffect(eventPlayer, Status.KNOCKED_DOWN, 1.75 if victim.is_fortified else 2.5)
    if not victim.hasStatus(Status.STUNNED):
        return
    wait(0.25, Wait.RESTART_WHEN_TRUE)
    wait(15)
    smallMessage(eventPlayer, "Brass Knuckles Ready")


rule "Team 1 (Perk): Crash N' Dash":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.perk_crash_n_dash == true
    @Condition eventPlayer.getSpeed() >= 8

    heal(eventPlayer, null, 10)
    wait(0.2)
    if ruleCondition:
        loop()


rule "Team 1 (Perk): Vampiric Heal":
    @Event playerDealtDamage
    @Team 1

    if not eventPlayer.perk_vampiric:
        return
    heal(eventPlayer, null, eventDamage * 0.3)


rule "Team 1 (Perk): Supercharge":
    @Event playerDealtHealing
    @Team 1

    if not eventPlayer.perk_super_charge:
        return
    if healee == eventPlayer:
        return
    if not eventHealing:
        return
    healee.setUltCharge(healee.getUltCharge() + 1 + eventHealing * 0.03)
    wait(0.75)


rule "Team 2 (Mutator): Artful Dodger":
    @Event eachPlayer
    @Team 2
    @Condition mut_artful_dodger == true
    @Condition eventPlayer.can_dodge == false
    @Condition eventPlayer.isAlive() == true

    eventPlayer.can_dodge = true


rule "MUT Team 2 (Mutator): Swan Song":
    @Event eachPlayer
    @Team 2
    @Condition mut_swan_song == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.is_living_boss == true

    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)
    waitUntil(eventPlayer.getHealth() <= 1, 99999)
    createEffect(getAllPlayers(), Effect.ECHO_CLONING, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.VIOLET, eventPlayer, 1)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 1)
    waitUntil(eventPlayer.isDead(), 5)
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    kill(eventPlayer)
    destroyEffect(eventPlayer.Effects__[1])


rule "MUT Team 2: Counterstrike":
    @Event eachPlayer
    @Team 2
    @Condition mut_counterstrike == true
    @Condition eventPlayer.is_using_boss_aggression == false
    @Condition eventPlayer.target.isUsingUltimate() == true

    eventPlayer.is_aggressive = not eventPlayer.is_aggressive
    wait(4)
    if ruleCondition:
        loop()
    eventPlayer.is_aggressive = true
    if random.randint(1, 100) > 75 and eventPlayer.getHero() != Hero.SOLDIER:
        wait(random.uniform(3, 7))
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(random.uniform(1, 2))
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    if ruleCondition:
        loop()


rule "MUT Team 2 (Mutator): Low Blow":
    @Event playerDealtKnockback
    @Team 2

    if not mut_low_blow:
        return
    damage(victim, eventPlayer, 0.5 * eventDamage)


rule "MUT Team 2 (Mutator) Cassidy: Fully Loaded, Magnade":
    @Event eachPlayer
    @Team 2
    @Hero cassidy
    @Condition (eventPlayer.is_living_boss or mut_fully_loaded) == true
    @Condition wave_number >= 4
    @Condition eventPlayer.is_target_in_los >= 4

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 40:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 8:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(10)
    if ruleCondition:
        loop()


rule "MUT Team 2 Echo (Mutator): Fully Loaded, Focusing Beam":
    @Event eachPlayer
    @Team 2
    @Hero echo
    @Condition mut_fully_loaded == true
    @Condition eventPlayer.is_target_in_los >= 4

    wait(2)
    if not ruleCondition:
        return
    if eventPlayer.target.getNormalizedHealth() > 0.5:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 15:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(10)
    if ruleCondition:
        loop()


rule "MUT Team 2 (Mutator) Team 2 Ana: Fully Loaded, Sleep Dart":
    @Event eachPlayer
    @Team 2
    @Hero ana
    @Condition mut_fully_loaded == true
    @Condition eventPlayer.is_target_in_los >= 4

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 40:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 10:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(13)
    if ruleCondition:
        loop()


rule "MUT Team 2 Pharah (Mutator): Fully Loaded, Concussive Blast":
    @Event eachPlayer
    @Team 2
    @Hero pharah
    @Condition mut_fully_loaded == true
    @Condition eventPlayer.is_target_in_los == true
    @Condition eventPlayer.isUsingAbility1() == false

    wait(1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.forceButtonPress(Button.ABILITY_2)


rule "Team 1 Doomfist: Meteor Strike (Invisibility 2, not detectable)":
    @Event eachPlayer
    @Team 1
    @Hero doomfist
    @Condition eventPlayer.isUsingUltimate() == true

    eventPlayer.is_invisible = 2
    waitUntil(not eventPlayer.isUsingUltimate(), 99999)
    eventPlayer.is_invisible = false


rule "Team 1 D.Va: Fill Ultimate Charge when downed":
    @Event eachPlayer
    @Team 1
    @Hero dva
    @Condition eventPlayer.downed_start_t == true
    @Condition eventPlayer.getUltCharge() != 100

    wait(0.05, Wait.ABORT_WHEN_FALSE)
    eventPlayer.setUltCharge(100)


rule "Team 1 Echo: Stealth (Invisibility 1, detectable)":
    @Event eachPlayer
    @Team 1
    @Hero echo
    @Condition eventPlayer.getHeroOfDuplication() == Hero.SOMBRA
    @Condition eventPlayer.isUsingAbility1() == true

    wait(0.8, Wait.ABORT_WHEN_FALSE)
    eventPlayer.is_invisible = 1
    waitUntil(not eventPlayer.isUsingAbility1(), 99999)
    eventPlayer.is_invisible = false


rule "Team 1 Echo: Remove Stealth when Duplicate ends":
    @Event eachPlayer
    @Team 1
    @Hero echo
    @Condition eventPlayer.is_invisible == 1
    @Condition eventPlayer.isDuplicatingAHero() == false

    eventPlayer.is_invisible = false


rule "Team 1 Echo: Cancel Charge on Boss Enemies":
    @Event playerDealtKnockback
    @Team 1
    @Hero echo

    if eventPlayer.getHeroOfDuplication() != Hero.REINHARDT:
        return
    if eventAbility != null:
        return
    if not victim.is_living_boss:
        return
    damage(victim, eventPlayer, 150)
    eventPlayer.cancelPrimaryAction()
    victim.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 1.2, victim.gmut_fortified_bypass_end_t)
    victim.setStatusEffect(eventPlayer, Status.STUNNED, 1.2)


rule "Team 1 Echo: Cancel Chain Hook on Boss Enemies":
    @Event playerDealtDamage
    @Team 1
    @Hero echo

    if eventPlayer.getHeroOfDuplication() != Hero.ROADHOG:
        return
    if eventAbility != Button.ABILITY_1:
        return
    if not victim.is_living_boss:
        return
    if not eventPlayer.isUsingAbility1():
        return
    eventPlayer.cancelPrimaryAction()
    wait()
    victim.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 1, victim.gmut_fortified_bypass_end_t)
    victim.setStatusEffect(eventPlayer, Status.STUNNED, 1)


rule "Team 1 Mercy: Revive Ability (Player)":
    @Event eachPlayer
    @Team 1
    @Hero mercy
    @Condition eventPlayer.isHoldingButton(eventPlayer.mercy_res_button) == true
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) == false
    #Workaround: Check Cooldown for Controller Players
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) == false
    @Condition eventPlayer.downed_start_t == false
    @Condition eventPlayer.hasStatus(Status.HACKED) == false
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false

    eventPlayer.ab_player = (sorted([player for player in getPlayersInRadius(eventPlayer, 10, Team.1) if player.is_combatant and player.downed_start_t and player.downed_start_t + 0.1 < getTotalTimeElapsed() and eventPlayer.isInViewAngle(player, 45)], lambda i_: dotProduct(eventPlayer.getFacingDirection(), directionTowards(eventPlayer.getEyePosition(), i_)))).last()
    if eventPlayer.ab_player:
        smallMessage(getAllPlayers(), "{0} has been resurrected by {1}!".format(eventPlayer.ab_player, eventPlayer))
        eventPlayer.ab_player.downed_start_t = false
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.SKY_BLUE, eventPlayer.ab_player, 1)
        temp_1 = (1.5 if is_hard_mode_enabled or is_apocalyptic else 1) * [30, 33.333, 40][eventPlayer.ab_haste]
        eventPlayer.setAbilityCooldown(Button.ABILITY_2, temp_1)
        #Workaround: Set Cooldown for Controller Players
        eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, temp_1)
    wait(0.05)


rule "IV Team 1 Moira: Biotic Grasp on Portal Simulation":
    @Event eachPlayer
    @Team 1
    @Hero moira
    @Condition gamemode == false
    @Condition objective_phase_number == 1
    @Condition eventPlayer.isFiringSecondaryFire() == true

    if distance(eventPlayer.getEyePosition(), iv_dom_objective_pos + 1.11 * Vector.UP) <= 20 and isInLoS(eventPlayer.getEyePosition(), iv_dom_objective_pos + 1.11 * Vector.UP):
        #If Facing ray intersects sphere
        if distance(iv_dom_objective_pos + 1.11 * Vector.UP, eventPlayer.getEyePosition() + ((max(0, dotProduct(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer.getEyePosition(), iv_dom_objective_pos + 1.11 * Vector.UP)))) * eventPlayer.getFacingDirection())) <= 0.85:
            damage(getPlayersInSlot(0, Team.2), eventPlayer, 9.6)
    wait(0.192)
    if ruleCondition:
        loop()


rule "Team 1 Sombra: Stealth (Invisibility 1, detectable), end after 20 seconds":
    @Event eachPlayer
    @Team 1
    @Hero sombra
    @Condition eventPlayer.isUsingAbility1() == true

    wait(0.8, Wait.ABORT_WHEN_FALSE)
    eventPlayer.is_invisible = 1
    for eventPlayer.sombra_stealth_timer in range(100, 0, -0.48):
        waitUntil(not eventPlayer.isUsingAbility1(), 0.096)
        if not eventPlayer.isUsingAbility1():
            break
    if eventPlayer.isUsingAbility1():
        eventPlayer.forceButtonPress(Button.ABILITY_1)
    eventPlayer.is_invisible = false


rule "Team 1 Reinhardt: Cancel Charge on Boss Enemies":
    @Event playerDealtKnockback
    @Team 1
    @Hero reinhardt

    if eventAbility != null:
        return
    if not victim.is_living_boss:
        return
    damage(victim, eventPlayer, 250)
    eventPlayer.cancelPrimaryAction()
    victim.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 1.2, victim.gmut_fortified_bypass_end_t)
    victim.setStatusEffect(eventPlayer, Status.STUNNED, 1.2)


rule "Team 1 Roadhog: Cancel Chain Hook on Boss Enemies":
    @Event playerDealtDamage
    @Team 1
    @Hero roadhog

    if eventAbility != Button.ABILITY_1:
        return
    if not victim.is_living_boss:
        return
    if not eventPlayer.isUsingAbility1():
        return
    eventPlayer.cancelPrimaryAction()
    wait()
    victim.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 1, victim.gmut_fortified_bypass_end_t)
    victim.setStatusEffect(eventPlayer, Status.STUNNED, 1)


rule "Team 1 Tracer: Start Health Regeneration after Recall":
    @Event eachPlayer
    @Team 1
    @Hero tracer
    @Condition eventPlayer.isUsingAbility2() == true

    wait(0.85)
    eventPlayer.last_damage_taken_t = false


rule "Team 1 Zenyatta: Harmony target is harder to hit":
    @Event playerDealtHealing
    @Team 1
    @Hero zenyatta

    if eventAbility != Button.ABILITY_1:
        return
    healee.active_ab_is_smoked = true
    wait(1)


def call_reinforcements():
    @Name "Subroutine: Spawn Reinforcements"

    special_spawns_count += is_apocalyptic + (2 if wave_number >= 5 else 1)


def teleport_to_free_spawn():
    @Name "Subroutine: Teleport to free Spawn"

    if (gamemode == 0 and (eventPlayer.base_tier == -1 or special_spawns_count > 0)) and not eventPlayer.is_alive:
        eventPlayer.is_nav_reachable_node = false
        if eventPlayer.base_tier == -1 and objective_phase_number == 0:
            eventPlayer.teleport(100 * Vector.UP)
        else:
            eventPlayer.teleport(iv_dom_objective_pos + Vector.UP)
    elif gamemode == 1 and hvt_call_reinforcements_end_t >= getTotalTimeElapsed() and special_spawns_count > 0 and not eventPlayer.is_alive:
        eventPlayer.is_nav_reachable_node = false
        eventPlayer.teleport(getPlayersInSlot(1, Team.2))
    elif gamemode == 2 and objective_phase_number == 0:
        eventPlayer.nav_idx = iv_dom_objective_pos[2 if eventPlayer.getSlot() == 2 else 3]
        eventPlayer.dom_nav_guard_idx = eventPlayer.nav_idx
        eventPlayer.nav_pos = nodes[eventPlayer.nav_idx]
        eventPlayer.is_nav_reachable_node = true
        eventPlayer.teleport(eventPlayer.nav_pos + (0.1 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(iv_dom_objective_pos[0 if eventPlayer.getSlot() == 2 else 1], eventPlayer.nav_pos)), false))))
    else:
        temp_2 = [false for player in spawn_pos_list]
        for temp_1 in range(len(spawn_pos_list)):
            if any([isInLoS(spawn_pos_list[temp_1] + Vector.UP, player.getEyePosition()) for player in combatants]):
                temp_2[temp_1] = 2
            elif any([distance(spawn_pos_list[temp_1], player) <= 10 for player in combatants]):
                temp_2[temp_1] = 1
        temp_1 = (sorted(spawn_pos_list, lambda _, i_: temp_2[i_] + random.uniform(0, 0.5)))[0]
        eventPlayer.nav_idx = spawn_nearest_node_idx_list[spawn_pos_list.index(temp_1)]
        eventPlayer.nav_pos = nodes[eventPlayer.nav_idx]
        eventPlayer.is_nav_reachable_node = true
        eventPlayer.teleport(temp_1)


def find_wp_near_nav():
    @Name "Subroutine: Find WP near Nav (find a walkable position near the Nav and check if it's reachable)"

    temp_1 = nearestWalkablePosition(eventPlayer.nav_pos)
    #If NWP is valid and not too far from the original destination
    if temp_1 != [] and distance(eventPlayer.nav_pos, temp_1) < 3:
        eventPlayer.nav_pos = temp_1
    else:
        #If original destination is not walkable
        if distance(eventPlayer.nav_pos + Vector.UP, raycast(eventPlayer.nav_pos + Vector.UP, eventPlayer.nav_pos + 2 * Vector.DOWN, null, null, false).getHitPosition()) >= 3:
            #Ranged bots stand still
            if is_load_limit_reached or eventPlayer.is_ranged or distance(eventPlayer, eventPlayer.target) < 2:
                eventPlayer.nav_pos = eventPlayer.getPosition()
                return
            else:
                eventPlayer.nav_pos = eventPlayer.getPosition() + ((min(3.5, distance(eventPlayer, eventPlayer.target) - 2)) * directionTowards(eventPlayer, eventPlayer.target))
                if eventPlayer.isOnGround():
                    #Check if destination is not walkable
                    if distance(eventPlayer.nav_pos + Vector.UP, raycast(eventPlayer.nav_pos + Vector.UP, eventPlayer.nav_pos + 2 * Vector.DOWN, null, null, false).getHitPosition()) >= 3:
                        eventPlayer.nav_pos = eventPlayer.getPosition()
                        eventPlayer.is_using_combat_pathfinding--
                        return
    #Check if the destination is reachable
    if eventPlayer.isOnGround():
        temp_1 = eventPlayer.getPosition() + 1.75 * directionTowards(eventPlayer, eventPlayer.nav_pos) + Vector.UP
        #If bot is near a ledge
        if distance(temp_1, raycast(temp_1, temp_1 + 3 * Vector.DOWN, null, null, false).getHitPosition()) >= 3:
            eventPlayer.nav_pos = eventPlayer.getPosition()
            if not eventPlayer.is_ranged:
                eventPlayer.is_using_combat_pathfinding--
                return
    eventPlayer.is_using_combat_pathfinding = 3


def check_drop():
    @Name "Subroutine: Check Drop (Avoid dropping too low)"

    if is_load_limit_reached:
        eventPlayer.nav_pos = eventPlayer.getPosition()
        return
    temp_1 = eventPlayer.getPosition() + 1.75 * directionTowards(eventPlayer, vect(eventPlayer.nav_pos.x, eventPlayer.getPosition().y, eventPlayer.nav_pos.z)) + Vector.UP
    if distance(temp_1, raycast(temp_1, temp_1 + 30 * Vector.DOWN, null, null, false).getHitPosition()) >= temp_1.y - eventPlayer.target.getPosition().y + 5:
        eventPlayer.nav_pos = eventPlayer.getPosition()
        eventPlayer.is_using_combat_pathfinding--
        return
    temp_1 = eventPlayer.getPosition() + 3.5 * directionTowards(eventPlayer, vect(eventPlayer.nav_pos.x, eventPlayer.getPosition().y, eventPlayer.nav_pos.z)) + Vector.UP
    if distance(temp_1, raycast(temp_1, temp_1 + 30 * Vector.DOWN, null, null, false).getHitPosition()) >= temp_1.y - eventPlayer.target.getPosition().y + 5:
        eventPlayer.nav_pos = eventPlayer.getPosition()
        eventPlayer.is_using_combat_pathfinding--
        return
    eventPlayer.is_using_combat_pathfinding = 3


def start_facing():
    @Name "Subroutine: Start Facing"

    if eventPlayer.getHero() == Hero.SOLDIER:
        if eventPlayer.real_tier == 4:
            eventPlayer.startFacing((vect(false, false, false) if eventPlayer.is_target_in_los and (not eventPlayer.ab_var_1 or eventPlayer.is_using_combat_pathfinding) else 1.5 * directionTowards(eventPlayer, eventPlayer.nav_pos)) + (directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + eventPlayer.target.eye_offset) if eventPlayer.target.is_combatant else vect(false, false, false)), 0 if eventPlayer.hasStatus(Status.STUNNED) else 1000 if eventPlayer.ab_var_1 else 300)
        else:
            eventPlayer.startFacing((vect(false, false, false) if eventPlayer.is_target_in_los else 1.5 * directionTowards(eventPlayer, eventPlayer.nav_pos)) + (directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + eventPlayer.target.eye_offset) if eventPlayer.target.is_combatant else vect(false, false, false)), 0 if eventPlayer.hasStatus(Status.STUNNED) else 50 if eventPlayer.Slowed_until >= getTotalTimeElapsed() else 300)
    else:
        if eventPlayer.getHero() == Hero.WIDOWMAKER or eventPlayer.getHero() == Hero.HANZO:
            eventPlayer.startFacing(eventPlayer.facing_override_direction if eventPlayer.facing_override_direction else (vect(false, false, false) if eventPlayer.is_target_in_los else 1.5 * directionTowards(eventPlayer, eventPlayer.nav_pos)) + (directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + eventPlayer.target.eye_offset) if eventPlayer.target.is_combatant else vect(false, false, false)), 0 if eventPlayer.hasStatus(Status.STUNNED) else 300)
            eventPlayer.facing_override_direction = false
        elif not eventPlayer.iv_is_portal:
            eventPlayer.startFacing((vect(false, false, false) if eventPlayer.is_target_in_los else 1.5 * directionTowards(eventPlayer, eventPlayer.nav_pos)) + (directionTowards(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + eventPlayer.target.eye_offset) if eventPlayer.target.is_combatant else vect(false, false, false)), 0 if eventPlayer.hasStatus(Status.STUNNED) else 50 if eventPlayer.Slowed_until >= getTotalTimeElapsed() else 300)


def find_chase_target():
    @Name "Subroutine: Find Chase Target"

    if eventPlayer.is_ignoring_other_targets:
        return
    eventPlayer.target = (sorted([player for player in combatants if not player.downed_start_t and not player.active_ab_is_cloaked and (not (player.is_invisible and distance(eventPlayer, player) > 2.4))], lambda i_: distance(eventPlayer, i_)))[0]


def update_target_nav():
    @Name "Subroutine: Update Target Nav"

    eventPlayer.target.last_nav_update_t = getTotalTimeElapsed()
    temp_1 = eventPlayer.target.getEyePosition() + eventPlayer.target.eye_offset
    eventPlayer.target.best_nav_idx = nodes.index((sorted([i_ for i_ in nodes.exclude(elevator_nodes) if isInLoS(i_ + vect(0, 1.5, 0), temp_1)], lambda i_: distance(eventPlayer.target, i_) + (abs(eventPlayer.target.getPosition().y - i_.y))))[0])
    if eventPlayer.target.best_nav_idx == -1:
        eventPlayer.target.best_nav_idx = nodes.index(sorted(nodes.exclude(elevator_nodes), lambda i_: distance(eventPlayer.target, i_))[0])


rule "Team 2: Bot Init":
    @Event eachPlayer
    @Team 2

    eventPlayer.setRespawnTime(9999)
    eventPlayer.ab_bought_abilities_string = ""
    #Workaround: Create Boss Health Bars
    if eventPlayer.getSlot() == 0 or gamemode == 2 and eventPlayer.getSlot() <= 3:
        createProgressBarInWorldText(getAllPlayers() if not eventPlayer.iv_is_portal and eventPlayer.is_living_boss else [], 100 * eventPlayer.getNormalizedHealth() + 0 * getTotalTimeElapsed(), l"", eventPlayer, 0.5, Clip.SURFACES, Color.RED, Color.BLUE, ProgressWorldTextReeval.VISIBILITY_AND_VALUES)


rule "Team 2 (Death): Field Resurrection":
    @Event playerDied
    @Team 2

    if not wave_number:
        return
    eventPlayer.fear_end_t = false
    eventPlayer.clearStatusEffect(Status.HACKED)
    if eventPlayer.getSlot() == 1 and (objective_phase_number == 1 or objective_phase_number == 2):
        if objective_phase_number == 1:
            if hvt_dom_objective_killed_count:
                bigMessage(getAllPlayers(), "HVT subdued!")
            else:
                bigMessage(getAllPlayers(), "HVT subdued! Gained bonus health")
            hvt_dom_objective_killed_count++
            objective_phase_number = 2
            eventPlayer.revive_timer = false
            eventPlayer.downed_start_t = 2
            eventPlayer.gmut_fortified_bypass_end_t = 100000
        if eventWasEnvironment:
            temp_1 = nearestWalkablePosition(eventPlayer)
            nwp_teleport()
        eventPlayer.resurrect()
        eventPlayer.clearStatusEffect(Status.PHASED_OUT)
        eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 9999)
        eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 9999)
        wait(0.05, Wait.RESTART_WHEN_TRUE)
        eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
        return
    if not eventWasEnvironment and eventPlayer.getHero() != Hero.BAPTISTE and not eventPlayer.is_living_boss and not eventPlayer.is_mutated and (mut_advanced_medkit or eventPlayer.real_tier < 4):
        temp_1 = random.choice([player for player in getPlayersOnHero(Hero.BAPTISTE, Team.2) if ((((player.isAlive() and (not (player.hasStatus(Status.HACKED) or player.hasStatus(Status.STUNNED) or player.fear_end_t >= getTotalTimeElapsed()))) and ((player.ab_var_2 + (1 if mut_advanced_medkit else 3)) < getTotalTimeElapsed())) and distance(eventPlayer, player) <= 10) and isInLoS(eventPlayer, player))])
        if temp_1:
            temp_1.communicate(Comms.YOURE_WELCOME)
            temp_1.ab_var_2 = getTotalTimeElapsed()
            temp_1.forceButtonPress(Button.ABILITY_1)
            eventPlayer.resurrect()
            playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.GREEN, eventPlayer, 1)
            if eventPlayer.getHero() == Hero.ORISA:
                #Disable Fortify so that Orisa can be knocked down
                eventPlayer.setAbilityCooldown(Button.ABILITY_1, 0.5)
            #Knocked Down Status is not applied when the bot is killed while stunned without a wait
            wait(0.016, Wait.RESTART_WHEN_TRUE)
            eventPlayer.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 1.75, eventPlayer.gmut_fortified_bypass_end_t)
            eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 1.75)
            return
    if gmut_storm_raging and eventPlayer.gmut_var:
        temp_1 = (sorted([player for player in getPlayersInRadius(eventPlayer.getEyePosition(), 8, Team.2, LosCheck.SURFACES) if player.is_alive and not player.gmut_var and not player.iv_is_portal], lambda i_: distance(eventPlayer, i_))).slice(0, 2)
        temp_1.gmut_var = true
        for temp_2 in range(len(temp_1)):
            playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.RED, temp_1[temp_2], 1)
        eventPlayer.gmut_var = false
    if gamemode == 2 and eventPlayer.is_living_boss:
        money_amount += 40
        if hvt_dom_objective_killed_count:
            bigMessage(getAllPlayers(), "Killed both guards! Gained bonus health")
            enable_normal_spawns = true
            call_reinforcements()
            async(play_incoming_sound_twice, AsyncBehavior.NOOP)
            upgrade_health_and_healing()
        else:
            bigMessage(getAllPlayers(), "Killed a guard!")
        hvt_dom_objective_killed_count++
    eventPlayer.stopForcingOutlineFor(getAllPlayers())
    eventPlayer.stopFacing()
    eventPlayer.stopThrottleInDirection()
    eventPlayer.is_living_boss = false
    eventPlayer.is_using_boss_aggression = false
    eventPlayer.is_target_in_los = 0
    eventPlayer.is_alive = false


rule "Team 2 (Respawn): Reset Dummy, Change Hero":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_alive == false
    @Condition (enable_objective_enemy_spawn if eventPlayer.base_tier == -1 else special_spawns_count > 0 or enable_normal_spawns or eventPlayer.is_expendable) == true

    if not (eventPlayer.base_tier == -1 or gamemode == 2 and objective_phase_number == 0 and eventPlayer.getSlot() <= 3):
        wait(0.5 + (0.1 * (max(0, eventPlayer.getSlot() - 2))), Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopAllDamageOverTime()
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.clearStatusEffect(Status.ROOTED)
    if not ruleCondition:
        return
    if eventPlayer.is_mutated:
        eventPlayer.stopScalingSize()
        eventPlayer.stopModifyingVoicelinePitch()
        eventPlayer.is_mutated = false
        mut_mutation = getTotalTimeElapsed() + 30
    if is_waiting_to_remove_bot and eventPlayer.getSlot() >= 9:
        is_waiting_to_remove_bot = false
        destroyDummy(Team.2, eventPlayer.getSlot())
        return
    destroyEffect(eventPlayer.active_ab_effect_list)
    eventPlayer.active_ab_effect_list = []
    if eventPlayer.is_hardwired:
        removeHealthPool(eventPlayer.HP_Pool[4])
    if mut_bulletproof:
        removeHealthPool(eventPlayer.HP_Pool[5])
    if mut_yakuza:
        removeHealthPool(eventPlayer.HP_Pool[7])
    teleport_to_free_spawn()
    if eventPlayer.getHero() == Hero.SOLDIER:
        #Select Soldier Variant
        if special_spawns_count > 0:
            special_spawns_count--
            if tier_4_spawns_block_end_t >= getTotalTimeElapsed() or wave_number < 5:
                eventPlayer.real_tier = 3
            else:
                tier_4_spawns_block_end_t = getTotalTimeElapsed() + 10
                eventPlayer.real_tier = 4
        else:
            temp_1 = eventPlayer.base_tier + (mut_promotion and random.randint(1, 100) <= 20)
            if temp_1 == 1:
                eventPlayer.real_tier = 2 if mut_gear_upgrade else 1
            elif temp_1 == 2:
                eventPlayer.real_tier = 2
            else:
                eventPlayer.real_tier = 3 if any([not player.is_living_boss and player.real_tier == 4 for player in getLivingPlayers(Team.2)]) or random.randint(1, 100) <= 80 else 4
        eventPlayer.resurrect()
        if eventPlayer.real_tier == 1:
            eventPlayer.startForcingName("Trooper")
            eventPlayer.combat_pathfinding_type = 0
            eventPlayer.ab_var_3 = true
            eventPlayer.is_ranged = true
            eventPlayer.can_dodge = false
            eventPlayer.Damage_Dealt = 0.5
            eventPlayer.health_percent = 0.333
        elif eventPlayer.real_tier == 2:
            eventPlayer.startForcingName("Heavy Trooper")
            eventPlayer.combat_pathfinding_type = 8
            eventPlayer.ab_var_3 = false
            eventPlayer.is_ranged = false
            eventPlayer.can_dodge = false
            eventPlayer.Damage_Dealt = 0.45
            eventPlayer.health_percent = 0.417
        elif eventPlayer.real_tier == 3:
            eventPlayer.startForcingName("Grenadier")
            eventPlayer.combat_pathfinding_type = 4
            eventPlayer.ab_var_3 = false
            eventPlayer.is_ranged = true
            eventPlayer.can_dodge = true
            eventPlayer.Damage_Dealt = 0.55
            eventPlayer.health_percent = 0.5
        else:
            eventPlayer.startForcingName("Cloaker")
            createEffect(getAllPlayers(), Effect.ECHO_CLONING, Color.TEAM_1 if evalOnce(getTotalTimeElapsed() + 0.5) >= getTotalTimeElapsed() or eventPlayer.ab_var_1 or eventPlayer.ab_var_2 else Color.TEAM_2, eventPlayer, 1, EffectReeval.VISIBILITY_AND_COLOR)
            eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
            eventPlayer.combat_pathfinding_type = 9
            eventPlayer.ab_var_3 = true
            eventPlayer.is_ranged = false
            eventPlayer.can_dodge = false
            eventPlayer.Damage_Dealt = 1
            eventPlayer.health_percent = 1.1
            eventPlayer.real_tier = 4
        if not mut_lock_n_load:
            temp_1 = [30, 40, 1, 60][eventPlayer.real_tier - 1]
            eventPlayer.setMaxAmmo(false, temp_1)
            eventPlayer.setAmmo(false, temp_1)
        eventPlayer.is_fortified = gmut_fortified
        eventPlayer.can_stagger = not eventPlayer.is_fortified and eventPlayer.real_tier != 4
        eventPlayer.can_quick_melee = eventPlayer.real_tier != 4
    else:
        #Select Hero
        if eventPlayer.base_tier == -1:
            eventPlayer.is_living_boss = true
            enable_objective_enemy_spawn = false
            if gamemode == 0:
                if objective_phase_number:
                    eventPlayer.startForcingHero(boss_list_1[wave_number - 1])
                    eventPlayer.iv_is_portal = false
                    eventPlayer.is_pathfinding_disabled = false
                else:
                    eventPlayer.startForcingHero(Hero.TORBJORN)
                    eventPlayer.iv_is_portal = true
                    eventPlayer.is_pathfinding_disabled = true
                    objective_phase_number = 1
                    bigMessage(getAllPlayers(), "Portal Opened!")
            else:
                eventPlayer.startForcingHero(boss_list_1[wave_number - 1])
                objective_phase_number = 1
                hvt_dom_objective_killed_count = false
                eventPlayer.is_using_boss_aggression = true
                eventPlayer.gmut_fortified_bypass_end_t = false
                bigMessage(getAllPlayers(), "High Value Target located!")
        elif gamemode == 2 and objective_phase_number == 0:
            eventPlayer.is_living_boss = true
            eventPlayer.is_using_boss_aggression = true
            enable_objective_enemy_spawn--
            if eventPlayer.getSlot() == 2:
                eventPlayer.startForcingHero(boss_list_1[wave_number - 1])
            else:
                eventPlayer.startForcingHero(boss_list_2[wave_number - 1])
            if enable_objective_enemy_spawn <= 0:
                objective_phase_number = 1
                bigMessage(getAllPlayers(), "Control Points located!")
        elif special_spawns_count > 0:
            special_spawns_count--
            if tier_4_spawns_block_end_t >= getTotalTimeElapsed() or wave_number < 5:
                eventPlayer.startForcingHero((sorted([i_ for i_ in ([Hero.ROADHOG, Hero.HANZO if mut_yakuza else false, Hero.GENJI if mut_yakuza else false, Hero.KIRIKO if mut_yakuza else false, Hero.SIGMA if wave_number >= 2 else false, Hero.ORISA if wave_number >= 2 else false, Hero.DVA if wave_number >= 3 else false, Hero.TRACER if wave_number >= 3 else false, Hero.ANA if wave_number >= 4 else false, Hero.MEI if wave_number >= 4 else false, Hero.WRECKING_BALL if wave_number >= 6 else false]) if i_], lambda i_: random.uniform(0, 0.5) + isHeroBeingPlayed(i_, Team.2)))[0])
            else:
                tier_4_spawns_block_end_t = getTotalTimeElapsed() + 10
                eventPlayer.startForcingHero((sorted([i_ for i_ in ([Hero.HANZO, Hero.GENJI, Hero.KIRIKO, Hero.REINHARDT if wave_number >= 10 else false]) if i_], lambda i_: random.uniform(0, 0.5) + getNumberOfHeroes(i_, Team.2)))[0])
        else:
            temp_1 = eventPlayer.base_tier + (mut_promotion and random.randint(1, 100) <= 20)
            if temp_1 == 1:
                eventPlayer.startForcingHero((sorted([i_ for i_ in ([Hero.CASSIDY, Hero.BRIGITTE if wave_number >= 3 else false]) if i_], lambda i_: random.uniform(0, 0.5) + isHeroBeingPlayed(i_, Team.2)))[0])
            elif temp_1 == 2:
                eventPlayer.startForcingHero((sorted([i_ for i_ in ([Hero.WIDOWMAKER, Hero.BAPTISTE, Hero.ZARYA, Hero.PHARAH, Hero.ECHO if wave_number >= 5 else false, Hero.SOMBRA if wave_number >= 7 else false, Hero.REAPER if wave_number >= 11 else false, Hero.LUCIO if wave_number >= 8 else false]) if i_], lambda i_: random.uniform(0, 0.5) + isHeroBeingPlayed(i_, Team.2)))[0])
            else:
                eventPlayer.startForcingHero((sorted([i_ for i_ in ([Hero.ROADHOG, Hero.WRECKING_BALL, Hero.MEI, Hero.ORISA if wave_number >= 6 else false, Hero.SIGMA if wave_number >= 4 else false, Hero.TRACER if wave_number >= 8 else false, Hero.ANA if wave_number >= 9 else false, Hero.DVA if wave_number >= 9 else false]) if i_], lambda i_: random.uniform(0, 0.5) + isHeroBeingPlayed(i_, Team.2)))[0])
        #Selected Hero is the same as current Hero
        if eventPlayer.isDead():
            eventPlayer.resurrect()
            eventPlayer.setAmmo(false, eventPlayer.getMaxAmmo(false))
            #D.Va is resurrected without mech, so remech
            if eventPlayer.getHero() == Hero.DVA:
                eventPlayer.setUltCharge(100)
                eventPlayer.forceButtonPress(Button.ULTIMATE)
        if eventPlayer.getHero() == Hero.CASSIDY or eventPlayer.getHero() == Hero.BAPTISTE:
            eventPlayer.combat_pathfinding_type = 0
            eventPlayer.is_ranged = true
            eventPlayer.can_dodge = false
        elif eventPlayer.getHero() == Hero.BRIGITTE or eventPlayer.getHero() == Hero.REINHARDT or eventPlayer.getHero() == Hero.WRECKING_BALL:
            eventPlayer.combat_pathfinding_type = 1
            eventPlayer.is_ranged = false
            eventPlayer.can_dodge = false
        elif eventPlayer.getHero() == Hero.ORISA:
            eventPlayer.combat_pathfinding_type = 2
            eventPlayer.is_ranged = true
            eventPlayer.can_dodge = false
        elif eventPlayer.getHero() == Hero.SOMBRA or eventPlayer.getHero() == Hero.DVA or eventPlayer.getHero() == Hero.KIRIKO:
            eventPlayer.combat_pathfinding_type = 3
            eventPlayer.is_ranged = false
            eventPlayer.can_dodge = false
            if eventPlayer.getHero() == Hero.SOMBRA:
                createBeam(getAllPlayers() if eventPlayer.ab_player else [], Beam.BAD, eventPlayer, eventPlayer.ab_player, Color.RED, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
            if eventPlayer.getHero() == Hero.KIRIKO:
                eventPlayer.is_ranged = true
                createEffect(getAllPlayers() if eventPlayer.ab_var_1 else [], Effect.SPHERE, Color.TURQUOISE, eventPlayer, eventPlayer.ab_var_1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
                eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
        elif eventPlayer.getHero() == Hero.WIDOWMAKER or eventPlayer.getHero() == Hero.ANA or eventPlayer.getHero() == Hero.PHARAH:
            eventPlayer.combat_pathfinding_type = 4
            eventPlayer.is_ranged = true
            eventPlayer.can_dodge = true
        elif eventPlayer.getHero() == Hero.ROADHOG or eventPlayer.getHero() == Hero.REAPER or eventPlayer.getHero() == Hero.SIGMA or eventPlayer.getHero() == Hero.MEI or eventPlayer.getHero() == Hero.ZARYA:
            eventPlayer.combat_pathfinding_type = 5
            eventPlayer.is_ranged = false
            eventPlayer.can_dodge = true
        elif eventPlayer.getHero() == Hero.TRACER or eventPlayer.getHero() == Hero.GENJI or eventPlayer.getHero() == Hero.LUCIO:
            eventPlayer.combat_pathfinding_type = 6
            eventPlayer.is_ranged = false
            eventPlayer.can_dodge = false
            if eventPlayer.getHero() == Hero.TRACER:
                eventPlayer.recall_block_end_t = getTotalTimeElapsed() + 4
        elif eventPlayer.getHero() == Hero.ECHO or eventPlayer.getHero() == Hero.HANZO:
            eventPlayer.combat_pathfinding_type = 7
            eventPlayer.is_ranged = true
            eventPlayer.can_dodge = false
        elif eventPlayer.iv_is_portal:
            eventPlayer.can_dodge = false
        if eventPlayer.getHero() == Hero.BRIGITTE or eventPlayer.getHero() == Hero.CASSIDY:
            eventPlayer.real_tier = 1
        elif eventPlayer.getHero() == Hero.ECHO or eventPlayer.getHero() == Hero.BAPTISTE or eventPlayer.getHero() == Hero.REAPER or eventPlayer.getHero() == Hero.SOMBRA or eventPlayer.getHero() == Hero.WIDOWMAKER or eventPlayer.getHero() == Hero.PHARAH or eventPlayer.getHero() == Hero.LUCIO or eventPlayer.getHero() == Hero.ZARYA:
            eventPlayer.real_tier = 2
            if mut_bulletproof == true:
                eventPlayer.addHealthPool(Health.NORMAL, 0.9 * eventPlayer.health_percent, false, false)
                eventPlayer.HP_Pool[5] = getLastCreatedHealthPool()
        elif eventPlayer.getHero() == Hero.DVA or eventPlayer.getHero() == Hero.ORISA or eventPlayer.getHero() == Hero.ROADHOG or eventPlayer.getHero() == Hero.ANA or eventPlayer.getHero() == Hero.TRACER or eventPlayer.getHero() == Hero.MEI or eventPlayer.getHero() == Hero.WRECKING_BALL or eventPlayer.getHero() == Hero.SIGMA:
            eventPlayer.real_tier = 3
        else:
            eventPlayer.real_tier = 4
        eventPlayer.is_fortified = gmut_fortified or eventPlayer.is_living_boss
        eventPlayer.can_stagger = not eventPlayer.is_fortified and (eventPlayer.getHero() == Hero.CASSIDY or eventPlayer.getHero() == Hero.BAPTISTE or eventPlayer.getHero() == Hero.PHARAH or eventPlayer.getHero() == Hero.WIDOWMAKER)
        eventPlayer.can_quick_melee = eventPlayer.getHero() != Hero.BRIGITTE and eventPlayer.getHero() != Hero.ROADHOG and eventPlayer.getHero() != Hero.WRECKING_BALL and eventPlayer.getHero() != Hero.REINHARDT and not eventPlayer.iv_is_portal
        if eventPlayer.is_living_boss:
            eventPlayer.health_percent = ((1.2 if is_mutator_mode_enabled else 1) * (1.25 if length == 0 else 1.5)) * ([4, 2.25, 2.25, 1][eventPlayer.real_tier - 1])
            eventPlayer.Damage_Dealt = ((1.2 if is_mutator_mode_enabled else 1) * ((1.5 if gamemode == 0 else 1.3) + wave_number / 35)) * ([3.5, 2.25, 1.7, 1.05][eventPlayer.real_tier - 1])
        else:
            if mut_mutation and mut_mutation < getTotalTimeElapsed() and random.randint(1, 100) <= 15 and eventPlayer.real_tier < 4:
                eventPlayer.startScalingSize(1.3, false)
                eventPlayer.startModifyingVoicelinePitch(0.5, false)
                mut_mutation = 100000
                eventPlayer.is_mutated = true
                eventPlayer.health_percent = 2.5
                eventPlayer.Damage_Dealt = 1.3
                createEffect(getAllPlayers(), Effect.WINSTON_PRIMAL_RAGE, Color.TEAM_2, eventPlayer, 1, EffectReeval.VISIBILITY)
                eventPlayer.active_ab_effect_list.append(getLastCreatedEntity())
            else:
                eventPlayer.health_percent = 1
                eventPlayer.Damage_Dealt = 1
        if mut_hardwired:
            if eventPlayer.getHero() == Hero.ECHO or eventPlayer.getHero() == Hero.ORISA or eventPlayer.getHero() == Hero.DVA or eventPlayer.getHero() == Hero.GENJI or eventPlayer.getHero() == Hero.WRECKING_BALL:
                eventPlayer.is_hardwired = true
                if eventPlayer.getHero() == Hero.DVA:
                    eventPlayer.addHealthPool(Health.SHIELDS, 0 if eventPlayer.isInAlternateForm() else 0.75 * eventPlayer.health_percent, true)
                else:
                    eventPlayer.addHealthPool(Health.SHIELDS, 0.75 * eventPlayer.health_percent, true)
                eventPlayer.HP_Pool[4] = getLastCreatedHealthPool()
            else:
                eventPlayer.is_hardwired = false
        if mut_yakuza:
            if eventPlayer.getHero() == Hero.KIRIKO or eventPlayer.getHero() == Hero.HANZO or eventPlayer.getHero() == Hero.GENJI:
                eventPlayer.addHealthPool(Health.ARMOR, 0.75 * eventPlayer.health_percent, true)
                eventPlayer.HP_Pool[7] = getLastCreatedHealthPool()
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        eventPlayer.setDamageReceived(50 if eventPlayer.is_living_boss else 100)
        if eventPlayer.getHero() == Hero.DVA and eventPlayer.is_living_boss:
            eventPlayer.setDamageReceived(100)
    start_facing()
    if eventPlayer.getSlot() == 1:
        eventPlayer.startThrottleInDirection(vectorTowards(eventPlayer, eventPlayer.nav_pos), (0.3 if eventPlayer.Slowed_until >= getTotalTimeElapsed() else 1) * ((1 if eventPlayer.is_aggressive else 0.9) if distance(eventPlayer, vect(eventPlayer.nav_pos.x, eventPlayer.getPosition().y, eventPlayer.nav_pos.z)) >= 0.5 else 0), Relativity.TO_WORLD)
    elif not eventPlayer.iv_is_portal:
        eventPlayer.startThrottleInDirection(vectorTowards(eventPlayer, eventPlayer.nav_pos), (0.3 if eventPlayer.Slowed_until >= getTotalTimeElapsed() else 1) * (distance(eventPlayer, vect(eventPlayer.nav_pos.x, eventPlayer.getPosition().y, eventPlayer.nav_pos.z)) >= 0.5), Relativity.TO_WORLD)
    #health_percent value in percent, health does not scale during a bot's live
    eventPlayer.health_percent *= ((diff_health_mult * (1.1 if is_mutator_mode_enabled else 1)) * (100 + (5 * (wave_number - 1 + (max(0, wave_number - 9)))))) * (0.111 + 0.222 * combatants_count)
    eventPlayer.setMaxHealth(eventPlayer.health_percent)
    #Damage_Dealt value as a factor, damage can scale during a bot's live
    eventPlayer.Damage_Dealt *= diff_damage_mult
    eventPlayer.setDamageDealt((((eventPlayer.Damage_Dealt * (2 if mut_emp_rounds else 1)) * (20 + (9.25 * (wave_number - 1 + (max(0, wave_number - 9)))))) * (0.111 + 0.222 * combatants_count)) * (9 / getNumberOfPlayers(Team.2)))
    eventPlayer.setHealingReceived(0 if eventPlayer.iv_is_portal else (((diff_health_mult * (0.5 if eventPlayer.is_living_boss else 1)) * (1.1 if is_mutator_mode_enabled else 1)) * (100 + (4 * (wave_number - 1 + (max(0, wave_number - 9)))))) * (0.111 + 0.222 * combatants_count))
    eventPlayer.setKnockbackReceived(60 if eventPlayer.is_fortified else 100)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 1)
    if eventPlayer.combat_pathfinding_type == 9:
        eventPlayer.setMoveSpeed(161 if mut_amped else 140)
    else:
        eventPlayer.setMoveSpeed(115 if mut_amped else 100)
    if mut_lock_n_load:
        eventPlayer.setMaxAmmo(false, 600)
        eventPlayer.setAmmo(false, 600)
    find_chase_target()
    eventPlayer.ab_player = null
    eventPlayer.ab_var_1 = false
    eventPlayer.ab_var_2 = false
    eventPlayer.fear_end_t = 100000 if eventPlayer.iv_is_portal else getTotalTimeElapsed() + 3 if gamemode == 2 and eventPlayer.is_living_boss else 0
    eventPlayer.is_aggressive = not eventPlayer.is_using_boss_aggression
    if gmut_storm_raging:
        eventPlayer.gmut_var = not eventPlayer.is_living_boss and eventPlayer.real_tier < 3 and random.randint(1, 3) > len([player for player in getLivingPlayers(Team.2) if player.gmut_var])
    elif gmut_adaptive_shield:
        eventPlayer.gmut_var = false
    if not eventPlayer.iv_is_portal:
        eventPlayer.setHealth(100000)
    eventPlayer.is_alive = true
    if not eventPlayer.is_living_boss:
        return
    eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.YELLOW, OutlineVisibility.ALWAYS)
    wait(0.5)
    if eventPlayer.is_alive:
        #Workaround: Sometimes outlines don't appear when set too early
        eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.YELLOW, OutlineVisibility.ALWAYS)
    if ruleCondition:
        loop()


rule "Team 2: Enable Combat Pathfinding":
    @Event eachPlayer
    @Team 2
    @Condition is_load_limit_reached == false
    @Condition eventPlayer.is_pathfinding_disabled == false
    @Condition eventPlayer.is_using_combat_pathfinding == 0
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.is_aggressive == true
    @Condition eventPlayer.isOnGround() == true
    @Condition (eventPlayer.target.getPosition().y - eventPlayer.getPosition().y <= 2 or nodes[eventPlayer.target.best_nav_idx].y - eventPlayer.getPosition().y <= 1) == true
    @Condition (eventPlayer.is_ranged or distance(eventPlayer, eventPlayer.target) <= 1 + distance(eventPlayer.target, nodes[eventPlayer.target.best_nav_idx])) == true

    if eventPlayer.target.last_nav_update_t + combatants_count * 0.4 < getTotalTimeElapsed():
        update_target_nav()
        if not ruleCondition:
            return
    if any([distance(eventPlayer, vect(player.x, eventPlayer.getPosition().y, player.z)) < 1.5 for player in elevator_nodes]):
        wait(1)
        if not ruleCondition:
            return
    eventPlayer.is_using_combat_pathfinding = 3
    eventPlayer.target_last_seen_pos = eventPlayer.target.getPosition()
    eventPlayer.is_nav_reachable_node = false
    wait()
    if ruleCondition:
        loop()


rule "Team 2: Disable Combat Pathfinding":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_using_combat_pathfinding == true
    @Condition (eventPlayer.is_aggressive and eventPlayer.is_target_in_los) == 0

    eventPlayer.is_using_combat_pathfinding = 0


rule "Team 2: Set Nav (Not in Combat), Get Back to Node, Set Nav is Node":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.is_using_combat_pathfinding == 0
    @Condition eventPlayer.is_nav_reachable_node == false

    if not (is_load_limit_reached or eventPlayer.is_pathfinding_disabled):
        if eventPlayer.combat_pathfinding_type == 0:
            eventPlayer.setMoveSpeed(115 if mut_amped else 100)
        eventPlayer.nav_pos = sorted([player for player in nodes if isInLoS(eventPlayer, player)], lambda i_: distance(eventPlayer, i_))[0]
        if eventPlayer.nav_pos == false:
            eventPlayer.nav_pos = sorted(nodes, lambda player: distance(eventPlayer, player))[0]
        eventPlayer.nav_idx = nodes.index(eventPlayer.nav_pos)
        eventPlayer.is_nav_reachable_node = true
    wait(0.5)
    if ruleCondition:
        loop()


rule "Team 2: Set Nav (Not in Combat), Select Next Node, Set Last Time at Node":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.is_using_combat_pathfinding == 0
    @Condition eventPlayer.is_nav_reachable_node == true
    @Condition distance(eventPlayer, eventPlayer.nav_pos) <= 1

    eventPlayer.last_time_at_node_t = getTotalTimeElapsed()
    if not (is_load_limit_reached or eventPlayer.is_pathfinding_disabled):
        if gamemode == 2 and eventPlayer.is_living_boss and not eventPlayer.is_aggressive:
            if eventPlayer.nav_idx == eventPlayer.dom_nav_guard_idx:
                wait(0.5)
                if ruleCondition:
                    loop()
            else:
                eventPlayer.nav_idx = (sorted(edges[eventPlayer.nav_idx], lambda i_: random.uniform(0, 0.5) + (char_string.strIndex((distance_matrix[floor((i_ * nodes_count + eventPlayer.dom_nav_guard_idx) / 128)]).charAt((i_ * nodes_count + eventPlayer.dom_nav_guard_idx) % 128)))))[0]
                eventPlayer.nav_pos = nodes[eventPlayer.nav_idx]
        elif eventPlayer.target.is_combatant:
            if eventPlayer.target.last_nav_update_t + combatants_count * 0.4 < getTotalTimeElapsed():
                update_target_nav()
            if eventPlayer.nav_idx == eventPlayer.target.best_nav_idx and eventPlayer.is_aggressive and eventPlayer.fear_end_t < getTotalTimeElapsed():
                eventPlayer.is_target_in_los = 5
                eventPlayer.is_using_combat_pathfinding = 3
                eventPlayer.target_last_seen_pos = eventPlayer.target.getPosition()
                eventPlayer.is_nav_reachable_node = false
            else:
                eventPlayer.nav_idx = (sorted(edges[eventPlayer.nav_idx], lambda i_: (1 if eventPlayer.is_aggressive and eventPlayer.fear_end_t < getTotalTimeElapsed() else -1) * (random.uniform(0, 0.5) + (char_string.strIndex((distance_matrix[floor((i_ * nodes_count + eventPlayer.target.best_nav_idx) / 128)]).charAt((i_ * nodes_count + eventPlayer.target.best_nav_idx) % 128))))))[0]
                eventPlayer.nav_pos = nodes[eventPlayer.nav_idx]
        else:
            eventPlayer.nav_idx = random.choice(edges[eventPlayer.nav_idx])
            eventPlayer.nav_pos = nodes[eventPlayer.nav_idx]
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Team 2: Set Nav (in Combat)":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_using_combat_pathfinding == true

    if not (is_load_limit_reached or eventPlayer.is_pathfinding_disabled or eventPlayer.hasStatus(Status.ROOTED) or eventPlayer.hasStatus(Status.STUNNED)):
        if isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + eventPlayer.target.eye_offset):
            eventPlayer.target_last_seen_pos = eventPlayer.target.getPosition()
            if eventPlayer.is_flying:
                eventPlayer.nav_pos = raycast(eventPlayer.target.getEyePosition(), eventPlayer.target.getEyePosition() + (12 * (directionFromAngles(eventPlayer.target.getHorizontalFacingAngle() + (-45 if random.randint(0, 1) else 45), -60))), null, null, false).getHitPosition()
                wait(0.5)
            elif eventPlayer.target.is_flying and eventPlayer.combat_pathfinding_type != 4:
                #Roam
                eventPlayer.nav_pos = eventPlayer.getPosition() + 3.5 * directionFromAngles(random.randint(-179, 180), 0)
                find_wp_near_nav()
            else:
                #Long Range, roam randomly, slow
                if eventPlayer.combat_pathfinding_type == 0:
                    if distance(eventPlayer, eventPlayer.target) <= (20 if eventPlayer.getHero() == Hero.BAPTISTE else 15):
                        eventPlayer.nav_pos = eventPlayer.getPosition() + 2.5 * directionFromAngles(random.randint(-179, 180), 0)
                    else:
                        eventPlayer.nav_pos = eventPlayer.getPosition() + (2.5 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(eventPlayer, eventPlayer.target)) + random.choice([-45, 0, 45]), 0)))
                    find_wp_near_nav()
                elif eventPlayer.combat_pathfinding_type == 1:
                    if eventPlayer.target.getPosition().y - eventPlayer.getPosition().y > -2:
                        eventPlayer.nav_pos = eventPlayer.getPosition() + ((min(3.5, distance(eventPlayer, eventPlayer.target) - 2)) * directionTowards(eventPlayer, eventPlayer.target))
                        find_wp_near_nav()
                    else:
                        eventPlayer.nav_pos = eventPlayer.target.getPosition() + 2 * directionTowards(eventPlayer.target, eventPlayer)
                        check_drop()
                elif eventPlayer.combat_pathfinding_type == 2:
                    eventPlayer.nav_pos = eventPlayer.getPosition() + ((min(1.5, distance(eventPlayer, eventPlayer.target) - 2)) * directionTowards(eventPlayer, eventPlayer.target))
                    find_wp_near_nav()
                elif eventPlayer.combat_pathfinding_type == 3:
                    eventPlayer.nav_pos = eventPlayer.target.getPosition() + (5 * (directionFromAngles(eventPlayer.target.getHorizontalFacingAngle() + random.choice([-45, 45]), 0)))
                    if eventPlayer.target.getPosition().y - eventPlayer.getPosition().y > -2:
                        eventPlayer.nav_pos = eventPlayer.getPosition() + min(3.5, distance(eventPlayer, eventPlayer.nav_pos)) * directionTowards(eventPlayer, eventPlayer.nav_pos)
                        find_wp_near_nav()
                    else:
                        check_drop()
                elif eventPlayer.combat_pathfinding_type == 4:
                    if distance(eventPlayer, eventPlayer.target) <= 12:
                        eventPlayer.nav_pos = eventPlayer.getPosition() + (3.5 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(eventPlayer.target, eventPlayer)) + (random.choice([-135, 135]) if distance(eventPlayer, eventPlayer.target) <= 8 and eventPlayer.real_speed <= 1 else 0), 0)))
                        find_wp_near_nav()
                    else:
                        eventPlayer.nav_pos = eventPlayer.getPosition()
                elif eventPlayer.combat_pathfinding_type == 5:
                    eventPlayer.nav_pos = eventPlayer.target.getPosition() + 3 * directionFromAngles(eventPlayer.target.getHorizontalFacingAngle(), 0)
                    if eventPlayer.target.getPosition().y - eventPlayer.getPosition().y > -2:
                        eventPlayer.nav_pos = eventPlayer.getPosition() + min(3.5, distance(eventPlayer, eventPlayer.nav_pos)) * directionTowards(eventPlayer, eventPlayer.nav_pos)
                        find_wp_near_nav()
                    else:
                        check_drop()
                elif eventPlayer.combat_pathfinding_type == 6:
                    eventPlayer.nav_pos = eventPlayer.target.getPosition() + (1.5 * (directionFromAngles(eventPlayer.target.getHorizontalFacingAngle() + (90 if horizontalAngleTowards(eventPlayer.target, eventPlayer) > 0 else -90), 0)))
                    if eventPlayer.target.getPosition().y - eventPlayer.getPosition().y > -2:
                        eventPlayer.nav_pos = eventPlayer.getPosition() + min(3.5, distance(eventPlayer, eventPlayer.nav_pos)) * directionTowards(eventPlayer, eventPlayer.nav_pos)
                        find_wp_near_nav()
                    else:
                        check_drop()
                elif eventPlayer.combat_pathfinding_type == 7:
                    if distance(eventPlayer, eventPlayer.target) <= 17:
                        eventPlayer.nav_pos = eventPlayer.getPosition() + 3.5 * directionFromAngles(random.randint(-179, 180), 0)
                    else:
                        eventPlayer.nav_pos = eventPlayer.getPosition() + (3.5 * (directionFromAngles(horizontalAngleOfDirection(directionTowards(eventPlayer, eventPlayer.target)) + random.choice([-45, 0, 45]), 0)))
                    find_wp_near_nav()
                elif eventPlayer.combat_pathfinding_type == 8:
                    temp_1 = [player for player in getPlayersInRadius(eventPlayer, 3, Team.2) if player.is_alive].exclude(eventPlayer)
                    if len(temp_1):
                        eventPlayer.nav_pos = eventPlayer.getPosition() + 3.5 * directionTowards(sorted(temp_1, lambda player: distance(eventPlayer, player))[0], eventPlayer)
                        find_wp_near_nav()
                    else:
                        eventPlayer.nav_pos = eventPlayer.getPosition()
                elif eventPlayer.combat_pathfinding_type == 9:
                    if eventPlayer.ab_var_1:
                        if eventPlayer.target.getPosition().y - eventPlayer.getPosition().y > -2:
                            eventPlayer.nav_pos = eventPlayer.getPosition() + 6 * directionTowards(eventPlayer, eventPlayer.target)
                            find_wp_near_nav()
                        else:
                            eventPlayer.nav_pos = eventPlayer.target.getPosition()
                            check_drop()
                    else:
                        if eventPlayer.ab_var_2:
                            eventPlayer.nav_pos = eventPlayer.target.getPosition() + 3 * directionFromAngles(eventPlayer.target.getHorizontalFacingAngle(), 0)
                        else:
                            eventPlayer.nav_pos = eventPlayer.target.getPosition() + (5 * (directionFromAngles(eventPlayer.target.getHorizontalFacingAngle() + random.choice([-45, 45]), 0)))
                        if eventPlayer.target.getPosition().y - eventPlayer.getPosition().y > -2:
                            eventPlayer.nav_pos = eventPlayer.getPosition() + min(4, distance(eventPlayer, eventPlayer.nav_pos)) * directionTowards(eventPlayer, eventPlayer.nav_pos)
                            find_wp_near_nav()
                        else:
                            check_drop()
            if eventPlayer.combat_pathfinding_type == 0:
                eventPlayer.setMoveSpeed(75.5 if mut_amped else 65)
        else:
            if distance(eventPlayer, vect(eventPlayer.target_last_seen_pos.x, eventPlayer.getPosition().y, eventPlayer.target_last_seen_pos.z)) < 0.5:
                eventPlayer.target_last_seen_pos = eventPlayer.target.getPosition()
            if eventPlayer.is_flying:
                eventPlayer.nav_pos = eventPlayer.target_last_seen_pos
            else:
                eventPlayer.nav_pos = eventPlayer.getPosition() + min(3.5, distance(eventPlayer, eventPlayer.target_last_seen_pos)) * directionTowards(eventPlayer, eventPlayer.target_last_seen_pos)
                find_wp_near_nav()
            if eventPlayer.combat_pathfinding_type == 0:
                eventPlayer.setMoveSpeed(115 if mut_amped else 100)
    wait(1 if is_load_limit_reached else 0.5)
    if ruleCondition:
        loop()


rule "Team 2: Find Target":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_alive == true

    if not (eventPlayer.fear_end_t >= getTotalTimeElapsed() or eventPlayer.is_wraith or eventPlayer.getHero() == Hero.SOMBRA and eventPlayer.ab_player):
        if eventPlayer.is_ignoring_other_targets:
            temp_1 = eventPlayer.target if eventPlayer.target.is_combatant and not eventPlayer.target.downed_start_t and not eventPlayer.target.active_ab_is_cloaked and (not (eventPlayer.target.is_invisible and distance(eventPlayer, eventPlayer.target) > 2.4)) and isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition() + eventPlayer.target.eye_offset) else null
        else:
            temp_1 = (sorted([player for player in combatants if not player.downed_start_t and not player.active_ab_is_cloaked and (not (player.is_invisible and distance(eventPlayer, player) > 2.4)) and isInLoS(eventPlayer.getEyePosition(), player.getEyePosition() + player.eye_offset)], lambda i_: ((((([1, 0.25, 2, 4][i_.ab_priority] * (0.25 if i_ == eventPlayer.target else 1)) * distance(eventPlayer, i_)) + (500 if not eventPlayer.is_ranged and i_.is_flying else 0)) + (1000 if i_.hasStatus(Status.ASLEEP) else 0)) + (2000 if i_.hasStatus(Status.INVINCIBLE) or i_.hasStatus(Status.PHASED_OUT) else 0)) + (-5000 if i_.active_ab_is_frenzied else 0)))[0]
        if temp_1:
            eventPlayer.is_target_in_los = 5
            eventPlayer.target = temp_1
            eventPlayer.target_last_seen_pos = eventPlayer.target.getPosition()
        else:
            if eventPlayer.target.downed_start_t or not eventPlayer.target.is_combatant or eventPlayer.target.active_ab_is_cloaked or not (eventPlayer.target.is_invisible and distance(eventPlayer, eventPlayer.target) > 2.4):
                find_chase_target()
                eventPlayer.is_target_in_los = 0
            elif eventPlayer.is_target_in_los:
                if not eventPlayer.is_flying and eventPlayer.target.getPosition().y - eventPlayer.getPosition().y > 2:
                    eventPlayer.is_using_combat_pathfinding = 0
                eventPlayer.is_target_in_los--
            if not eventPlayer.is_target_in_los and eventPlayer.getAmmo() < 0.5 * eventPlayer.getMaxAmmo():
                eventPlayer.forceButtonPress(Button.RELOAD)
    wait(1 if is_load_limit_reached else 0.5)
    if ruleCondition:
        loop()


rule "Team 2: Calculate Real Speed":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_alive == true

    if is_load_limit_reached or eventPlayer.is_pathfinding_disabled:
        #Larger than 1.5 to not trigger stuck rules
        eventPlayer.real_speed = 1.6
        wait(0.5, Wait.ABORT_WHEN_FALSE)
    else:
        eventPlayer.real_speed_pos_1 = eventPlayer.getPosition()
        if eventPlayer.isJumping():
            eventPlayer.last_jump_t = getTotalTimeElapsed()
        if eventPlayer.last_jump_t + 0.15 >= getTotalTimeElapsed():
            eventPlayer.real_speed = distance(vect(eventPlayer.real_speed_pos_1.x, eventPlayer.real_speed_pos_2.y, eventPlayer.real_speed_pos_1.z), eventPlayer.real_speed_pos_2) / 0.112
        else:
            eventPlayer.real_speed = distance(eventPlayer.real_speed_pos_1, eventPlayer.real_speed_pos_2) / 0.112
        wait(0.112, Wait.ABORT_WHEN_FALSE)
        eventPlayer.real_speed_pos_2 = eventPlayer.getPosition()
        if eventPlayer.isJumping():
            eventPlayer.last_jump_t = getTotalTimeElapsed()
        if eventPlayer.last_jump_t + 0.15 >= getTotalTimeElapsed():
            eventPlayer.real_speed = distance(vect(eventPlayer.real_speed_pos_1.x, eventPlayer.real_speed_pos_2.y, eventPlayer.real_speed_pos_1.z), eventPlayer.real_speed_pos_2) / 0.112
        else:
            eventPlayer.real_speed = distance(eventPlayer.real_speed_pos_1, eventPlayer.real_speed_pos_2) / 0.112
        wait(0.112, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Team 2: Bot is stuck":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.real_speed <= 1.5
    @Condition eventPlayer.is_flying == false
    @Condition eventPlayer.Slowed_until < getTotalTimeElapsed()
    @Condition eventPlayer.hasStatus(Status.ROOTED) == false
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false
    @Condition (distance(eventPlayer, vect(eventPlayer.nav_pos.x, (eventPlayer.getPosition() if eventPlayer.is_using_combat_pathfinding else eventPlayer.nav_pos).y, eventPlayer.nav_pos.z))) >= 0.5

    wait(0.5, Wait.ABORT_WHEN_FALSE)
    if eventPlayer.getHero() == Hero.REINHARDT and eventPlayer.isUsingUltimate():
        loop()
    if any([distance(eventPlayer, vect(player.x, eventPlayer.getPosition().y, player.z)) < 1.5 for player in elevator_nodes]):
        wait(1.5, Wait.ABORT_WHEN_FALSE)
    if not ruleCondition:
        return
    if eventPlayer.is_using_combat_pathfinding:
        if abs(horizontalAngleOfDirection(eventPlayer.getThrottle())) <= 45:
            eventPlayer.forceButtonPress(Button.JUMP)
    else:
        eventPlayer.forceButtonPress(Button.JUMP)
        if not (eventPlayer.is_target_in_los or eventPlayer.fear_end_t >= getTotalTimeElapsed()):
            eventPlayer.disablePlayerCollision()
            wait(0.5)
            eventPlayer.enablePlayerCollision()
        wait(0.5, Wait.ABORT_WHEN_FALSE)
        eventPlayer.is_nav_reachable_node = false
    wait(0.5)
    if ruleCondition:
        loop()


rule "Team 2: Teleport if Target not in LOS and hasn't reached Node for 8 seconds":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.hasStatus(Status.ROOTED) == false
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false
    @Condition eventPlayer.is_pathfinding_disabled == false
    @Condition eventPlayer.is_target_in_los == 0
    @Condition eventPlayer.fear_end_t < getTotalTimeElapsed()
    @Condition eventPlayer.last_time_at_node_t < getTotalTimeElapsed()

    wait(8, Wait.ABORT_WHEN_FALSE)
    if is_load_limit_reached:
        loop()
    teleport_to_free_spawn()


rule "Team 2: Bot took damage, Dodge":
    @Event playerTookDamage
    @Team 2

    if is_load_limit_reached:
        return
    if eventPlayer.is_pathfinding_disabled:
        return
    if not eventPlayer.can_dodge:
        return
    if not eventPlayer.is_using_combat_pathfinding:
        return
    if not (is_load_limit_reached or eventPlayer.hasStatus(Status.ROOTED) or eventPlayer.hasStatus(Status.STUNNED)):
        if eventPlayer.combat_pathfinding_type == 4:
            eventPlayer.nav_pos = 7 if eventPlayer.getPosition() - mut_artful_dodger else 3.5 * (directionFromAngles(horizontalAngleOfDirection(vectorTowards(eventPlayer, eventPlayer.target)) + random.randint(-90, 90), false))
        else:
            eventPlayer.nav_pos = 7 if eventPlayer.getPosition() + mut_artful_dodger else 3.5 * (directionFromAngles(horizontalAngleOfDirection(vectorTowards(eventPlayer, eventPlayer.target)) + random.randint(-90, 90), false))
        find_wp_near_nav()
    wait(0.6 if mut_artful_dodger else 1.2)


rule "Team 2: Is Hacked, Tase Bot":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.hasStatus(Status.HACKED) == true

    if eventPlayer.is_living_boss:
        return
    if eventPlayer.is_hardwired:
        return
    eventPlayer.soldier_espionage = true
    eventPlayer.setReloadEnabled(false)
    eventPlayer.setStatusEffect(null, Status.BURNING, 9999)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 9999)
    eventPlayer.startFacing(directionFromAngles(evalOnce(eventPlayer.getHorizontalFacingAngle()) + random.randint(-75, -15), random.randint(35, 55) + (max(-90, (evalOnce(getTotalTimeElapsed()) - getTotalTimeElapsed()) * 18))), 0 if eventPlayer.hasStatus(Status.STUNNED) else 1000 if evalOnce(getTotalTimeElapsed()) - getTotalTimeElapsed() > -0.2 else 100)
    waitUntil(not eventPlayer.hasStatus(Status.HACKED), 3.5)
    eventPlayer.setReloadEnabled(true)
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.clearStatusEffect(Status.ROOTED)
    wait(0.1)
    if not eventPlayer.is_alive:
        return
    start_facing()


rule "Team 2: Is Hacked, effect":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.hasStatus(Status.HACKED) == true

    eventPlayer.soldier_espionage = true
    waitUntil(not eventPlayer.hasStatus(Status.HACKED), 99999)
    wait(0.1)
    eventPlayer.soldier_espionage = false
    if ruleCondition:
        loop()


rule "Team 2: Quick Melee":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.can_quick_melee == true
    @Condition eventPlayer.is_target_in_los == true

    wait(2)
    if not ruleCondition:
        return
    if eventPlayer.isReloading():
        loop()
    if eventPlayer.hasStatus(Status.HACKED):
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 3:
        loop()
    eventPlayer.forceButtonPress(Button.MELEE)
    wait(10)
    if ruleCondition:
        loop()


rule "Team 2: Bot is feared":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.fear_end_t >= getTotalTimeElapsed()

    eventPlayer.is_target_in_los = 0
    if eventPlayer.is_living_boss:
        eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.VIOLET, OutlineVisibility.ALWAYS)
    else:
        eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.VIOLET)
    waitUntil(eventPlayer.fear_end_t < getTotalTimeElapsed(), 99999)
    if eventPlayer.is_living_boss:
        eventPlayer.startForcingOutlineFor(getAllPlayers(), true, Color.YELLOW, OutlineVisibility.ALWAYS)
    else:
        eventPlayer.stopForcingOutlineFor(getAllPlayers())


rule "MUT Team 2 (Gamechanging Mutator): Gamechanging Mutator was enabled":
    @Event eachPlayer
    @Team 2
    @Condition is_gmut_enabled == true

    wait(0.5)
    if gmut_storm_raging:
        createEffect(getAllPlayers() if eventPlayer.gmut_var else [], Effect.ANA_NANO_BOOSTED, Color.TEAM_2, eventPlayer, 1, EffectReeval.VISIBILITY)
    if gmut_adaptive_shield:
        createEffect(getAllPlayers() if eventPlayer.gmut_var == 1 else [], Effect.WRECKING_BALL_ADAPTIVE_SHIELD_TARGET, Color.TEAM_2, eventPlayer, 1, EffectReeval.VISIBILITY)
    if gmut_fortified:
        eventPlayer.addHealthPool(Health.ARMOR, 0.4 * eventPlayer.health_percent, true)
    is_gmut_enabled = false


rule "MUT Team 2 (Gamechanging Mutator): Adaptive Shield":
    @Event eachPlayer
    @Team 2
    @Condition gmut_adaptive_shield == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.gmut_var == false
    @Condition eventPlayer.getNormalizedHealth() <= 0.5

    if eventPlayer.iv_is_portal:
        return
    if eventPlayer.getSlot() == 1:
        #Set Player Health converts the shield into regular HP, so wait until after
        wait(0.016, Wait.ABORT_WHEN_FALSE)
        if not ruleCondition:
            return
    temp_1 = len([player for player in combatants if distance(eventPlayer, player) <= 8 and isInLoS(eventPlayer, player, BarrierLos.BLOCKED_BY_ENEMY_BARRIERS)])
    if temp_1:
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.BLUE, eventPlayer, 1)
        eventPlayer.addHealthPool(Health.SHIELDS, 0.75 * (temp_1 / combatants_count) * eventPlayer.getMaxHealth(), false, false)
        eventPlayer.HP_Pool[3] = getLastCreatedHealthPool()
        eventPlayer.gmut_var = 1
        waitUntil(not eventPlayer.getHealthOfType(Health.SHIELDS), 7)
        removeHealthPool(eventPlayer.HP_Pool[3])
        eventPlayer.gmut_var = 2
    else:
        eventPlayer.gmut_var = 2


rule "MUT Team 2 (Gamechanging Mutator): Sympathy Gains":
    @Event playerDied
    @Team 2
    @Condition gmut_sympathy_gains == true
    @Condition eventPlayer.iv_is_portal == false

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.BLACK, eventPlayer, 1)
    wait(0.15, Wait.ABORT_WHEN_FALSE)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer.getPosition(), 1)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.YELLOW, eventPlayer.getPosition(), eventPlayer.real_tier * 8 + 6)
    heal(getPlayersInRadius(eventPlayer, eventPlayer.real_tier * 4 + 3, Team.2), null, min(eventPlayer.getMaxHealth() * 0.3, 500))


rule "MUT Team 2 (Gamechanging Mutator): Fortified":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_fortified == true
    @Condition eventPlayer.hasStatus(Status.STUNNED) == true
    @Condition eventPlayer.gmut_fortified_bypass_end_t < getTotalTimeElapsed()

    if eventPlayer.hasStatus(Status.KNOCKED_DOWN):
        eventPlayer.clearStatusEffect(Status.KNOCKED_DOWN)
        wait(1)
    elif eventPlayer.hasStatus(Status.ASLEEP):
        waitUntil(not eventPlayer.hasStatus(Status.ASLEEP), 3)
        if eventPlayer.hasStatus(Status.ASLEEP):
            eventPlayer.clearStatusEffect(Status.ASLEEP)
            wait(0.5)
    elif eventPlayer.hasStatus(Status.FROZEN):
        waitUntil(not eventPlayer.hasStatus(Status.FROZEN), 1)
        eventPlayer.clearStatusEffect(Status.FROZEN)
    else:
        waitUntil(not eventPlayer.hasStatus(Status.STUNNED), 0.5)
        eventPlayer.clearStatusEffect(Status.STUNNED)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "MUT Team 2 (Gamechanging Mutator): Salvation":
    @Event eachPlayer
    @Team 2
    @Condition gmut_salvation == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.is_living_boss == false

    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)
    waitUntil(eventPlayer.getHealth() <= 1, 99999)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, eventPlayer.getPosition(), 1)
    eventPlayer.setStatusEffect(null, Status.STUNNED, 1.333)
    eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 0.1)
    heal(eventPlayer, null, eventPlayer.getMaxHealth() * 0.05)
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)


rule "Team 2 (Ability): Heavy Impact / Damage Stagger":
    @Event playerTookDamage
    @Team 2

    if not (eventPlayer.can_stagger or attacker.ab_heavy_impact):
        return
    #the lower the minimum, the higher the chance
    if random.uniform(0.003, 0.75) > eventDamage / eventPlayer.getMaxHealth():
        return
    eventPlayer.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 0.5 * max(0.8, attacker.ab_heavy_impact), eventPlayer.gmut_fortified_bypass_end_t)
    eventPlayer.setStatusEffect(attacker, Status.STUNNED, (0.5 if eventPlayer.is_fortified else 1) * max(0.8, attacker.ab_heavy_impact))
    wait(5.5)


rule "Team 2 Brigitte: Hold / Drop Shield if Target and Distance to Target >= 6m":
    @Event eachPlayer
    @Team 2
    @Hero brigitte
    @Condition eventPlayer.is_target_in_los == true
    @Condition distance(eventPlayer, eventPlayer.target) >= 6

    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    waitUntil(not (eventPlayer.is_target_in_los and distance(eventPlayer, eventPlayer.target) >= 6), 99999)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)


rule "Team 2 Brigitte: Start / Stop Attacking if Distance to Target < 6m":
    @Event eachPlayer
    @Team 2
    @Hero brigitte
    @Condition eventPlayer.is_target_in_los == true
    @Condition distance(eventPlayer, eventPlayer.target) < 6

    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    waitUntil(not (eventPlayer.is_target_in_los and distance(eventPlayer, eventPlayer.target) < 6), 99999)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)


rule "Team 2 Brigitte: Increase / Normalize Move Speed while holding Shield":
    @Event eachPlayer
    @Team 2
    @Hero brigitte
    @Condition eventPlayer.isFiringSecondaryFire() == true

    eventPlayer.setMoveSpeed(164.286 if mut_amped else 142.857)
    waitUntil(not eventPlayer.isFiringSecondaryFire(), 99999)
    eventPlayer.setMoveSpeed(115 if mut_amped else 100)


rule "Team 2 Brigitte: Whip Shot":
    @Event eachPlayer
    @Team 2
    @Hero brigitte
    @Condition eventPlayer.is_target_in_los >= 4

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > (100 if eventPlayer.target.is_flying else 50):
        loop()
    if distance(eventPlayer, eventPlayer.target) <= 6 or distance(eventPlayer, eventPlayer.target) >= 20:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(3)
    if ruleCondition:
        loop()


rule "Team 2 Zarya: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero zarya
    @Condition eventPlayer.is_target_in_los >= 4

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    if distance(eventPlayer, eventPlayer.target) > 10:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        wait(1.5)
    else:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        wait(3)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        wait(0.5)
    if ruleCondition:
        loop()


rule "Team 2 Zarya: Self Bubble":
    @Event eachPlayer
    @Team 2
    @Hero zarya
    @Condition eventPlayer.is_target_in_los >= 4

    wait(10)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    if ruleCondition:
        loop()


rule "Team 2 Zarya: Team Bubble":
    @Event eachPlayer
    @Team 2
    @Hero zarya
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) <= 0

    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(10)
    if ruleCondition:
        loop()


rule "Team 2 Zarya: Grav":
    @Event eachPlayer
    @Team 2
    @Hero zarya
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition (wave_number >= 12 or eventPlayer.is_living_boss) == true

    wait(2)
    if not ruleCondition:
        return
    eventPlayer.setProjectileSpeed(30)
    eventPlayer.setProjectileGravity(60)
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.1)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.setProjectileGravity(100)
    wait(random.uniform(60, 80))
    if ruleCondition:
        loop()


rule "Team 2 Lucio: Swap to heal and shoot":
    @Event eachPlayer
    @Team 2
    @Hero lucio
    @Condition eventPlayer.is_target_in_los >= 4

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    if distance(eventPlayer, sorted([player for player in getLivingPlayers(Team.1) if eventPlayer.isInViewAngle(player, 45)])[0]) <= 4:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        wait(0.7)
    else:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        wait(2)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    if ruleCondition:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_1)


rule "Team 2 Lucio: Ultimate":
    @Event eachPlayer
    @Team 2
    @Hero lucio
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition (wave_number >= 12 or eventPlayer.is_living_boss) == true

    if not ruleCondition:
        return
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(random.uniform(40, 60))
    if ruleCondition:
        loop()


rule "Team 2 Kiriko: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero kiriko
    @Condition eventPlayer.is_target_in_los >= 4

    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    wait(0.6)
    if ruleCondition:
        loop()


rule "Team 2 Kiriko: Swift Step":
    @Event eachPlayer
    @Team 2
    @Hero kiriko
    @Condition (eventPlayer.is_alive and eventPlayer.getNormalizedHealth() <= 0.5) == eventPlayer.is_aggressive
    @SuppressWarnings w_wait_until

    eventPlayer.is_aggressive = not eventPlayer.is_aggressive
    eventPlayer.ab_var_1 = 1
    chaseOverTime(eventPlayer.ab_var_1, 0, 3)
    wait(3)
    stopChasingVariable(eventPlayer.ab_var_1)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.TURQUOISE, eventPlayer.getPosition(), 1)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.WHITE, eventPlayer.getPosition(), 200)
    wait()
    if eventPlayer.hasStatus(Status.STUNNED):
        goto lbl_0
    teleport_to_free_spawn()
    lbl_0:
    eventPlayer.is_aggressive = true
    waitUntil(eventPlayer.is_target_in_los, 15)
    wait(random.randint(16, 22))


rule "Team 2 Kiriko: Jump":
    @Event eachPlayer
    @Team 2
    @Hero kiriko
    @Condition eventPlayer.is_using_combat_pathfinding == true
    @Condition eventPlayer.target.is_flying == false
    @Condition eventPlayer.isOnGround() == true

    eventPlayer.startForcingButton(Button.JUMP)
    wait(1)
    eventPlayer.stopForcingButton(Button.JUMP)
    wait(random.uniform(0.8, 1.2))
    if ruleCondition:
        loop()


rule "Team 2 Kiriko: Suzu":
    @Event eachPlayer
    @Team 2
    @Hero kiriko
    @Condition distance(eventPlayer, eventPlayer.target) <= 40
    @Condition eventPlayer.is_target_in_los >= 3

    wait(random.randint(7, 15))
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    if ruleCondition:
        loop()


rule "Team 2 Kiriko: Ult":
    @Event eachPlayer
    @Team 2
    @Hero kiriko
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition distance(eventPlayer, eventPlayer.target) <= 20
    @Condition (wave_number >= 6 or eventPlayer.is_living_boss) == true

    if not ruleCondition:
        return
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(random.uniform(18, 30))
    if ruleCondition:
        loop()


rule "Team 2 Wrecking Ball: Explode":
    @Event eachPlayer
    @Team 2
    @Hero wreckingBall
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition distance(eventPlayer, eventPlayer.target) <= 2.4

    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer, 1)
    eventPlayer.setUltCharge(100)
    wait(0.5)
    eventPlayer.startDamageOverTime(null, 9999, eventPlayer.getMaxHealth() * 0.05)
    while eventPlayer.isAlive():
        eventPlayer.setUltCharge(100)
        wait()
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(0.25)
        eventPlayer.setStatusEffect(null, Status.STUNNED, 0.1)
        wait(5)
    kill(eventPlayer)


rule "Team 2 Cassidy: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero cassidy
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isUsingUltimate() == false

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    if mut_lock_n_load or distance(eventPlayer, eventPlayer.target) > 5:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        wait(0.6)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    else:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    wait(random.uniform(0.8, 1.2))
    if ruleCondition:
        loop()


rule "Team 2 Cassidy: Combat Roll":
    @Event playerTookDamage
    @Team 2
    @Hero cassidy

    if is_load_limit_reached:
        return
    if not eventPlayer.is_using_combat_pathfinding:
        return
    if random.randint(1, 100) > 30:
        return
    temp_1 = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + (6 * (worldVector(Vector.FORWARD if eventPlayer.getThrottle() == vect(false, false, false) else eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION))), null, null, false).getHitPosition()
    if distance(temp_1, raycast(temp_1, temp_1 + 5 * Vector.DOWN, null, null, false).getHitPosition()) < 5:
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        wait(10)
    else:
        wait(2)


rule "Team 2 Soldier: Shoot, Is Charging (1), Protecting Charge Target (2), Has Used Ability (3)":
    @Event eachPlayer
    @Team 2
    @Hero soldier
    @Condition eventPlayer.ab_var_1 == false
    @Condition eventPlayer.is_target_in_los >= 4

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    if eventPlayer.real_tier == 3:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        if mut_lock_n_load:
            wait(0.5)
            eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
            wait(1)
        else:
            if eventPlayer.isFiringSecondaryFire():
                wait(0.5)
                eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
                eventPlayer.setAmmo(0, false)
            else:
                wait(0.5)
                eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
                if eventPlayer.isFiringSecondaryFire():
                    eventPlayer.setAmmo(0, false)
            wait(2)
    elif eventPlayer.real_tier == 4:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        wait(1.6)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        if eventPlayer.getAmmo(false) <= 4:
            eventPlayer.forceButtonPress(Button.RELOAD)
        wait(0.2 if eventPlayer.ab_var_2 else random.uniform(1.2, 1.6))
    else:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        wait(0.5)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        if eventPlayer.getAmmo(false) <= 2:
            eventPlayer.forceButtonPress(Button.RELOAD)
        wait(random.uniform(1.2, 1.8) if eventPlayer.real_tier == 1 else random.uniform(0.5, 0.9))
    if ruleCondition:
        loop()


rule "Team 2 Soldier: Biotic Field (Heavy Trooper), Emit Smoke (Grenadier)":
    @Event eachPlayer
    @Team 2
    @Hero soldier
    @Condition eventPlayer.ab_var_3 == false
    @Condition eventPlayer.getNormalizedHealth() <= 0.5

    eventPlayer.ab_var_3 = true
    if eventPlayer.real_tier == 3:
        for eventPlayer.i in range(5, 0, -1):
            playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.WHITE, eventPlayer, 0.1)
            if eventPlayer.isDead():
                eventPlayer.i = 0
                break
            wait(0.2)
        getPlayersInRadius(eventPlayer.getEyePosition(), 7, Team.1, LosCheck.SURFACES).Smoked_Screen = true
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.WHITE, eventPlayer, 7)
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.GRAY, eventPlayer, 7)
        playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
    else:
        eventPlayer.forceButtonPress(Button.ABILITY_2)


rule "Team 1: Smoke Screen":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.Smoked_Screen == true
    @Condition eventPlayer.downed_start_t == false

    getAllPlayers().startForcingOutlineFor(eventPlayer, false, Color.WHITE)
    waitUntil(eventPlayer.isDead(), 4)
    getAllPlayers().stopForcingOutlineFor(eventPlayer)
    eventPlayer.Smoked_Screen = false
    [player for player in getPlayers(Team.2) if player.is_living_boss].startForcingOutlineFor(eventPlayer, true, Color.YELLOW, OutlineVisibility.ALWAYS)


rule "Team 2 Soldier (Cloaker): Tactical Visor":
    @Event eachPlayer
    @Team 2
    @Hero soldier
    @Condition eventPlayer.real_tier == 4
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.target.is_flying == false
    @Condition distance(eventPlayer, eventPlayer.target) <= 40

    wait(0.5)
    if (len([player for player in combatants if player.downed_start_t]) <= (1 if combatants_count >= 4 else 0)) and random.randint(1, 100) > 50:
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        if eventPlayer.isUsingUltimate():
            eventPlayer.disablePlayerCollision()
            temp_1 = 2 if distance(eventPlayer, eventPlayer.target) <= 10 else 1.5
            eventPlayer.setStatusEffect(null, Status.ROOTED, temp_1)
            eventPlayer.is_ignoring_other_targets = true
            eventPlayer.ab_var_1 = 1
            waitUntil(not (not (eventPlayer.target.downed_start_t or not eventPlayer.target.is_combatant or eventPlayer.target.active_ab_is_cloaked or not (eventPlayer.target.is_invisible and distance(eventPlayer, eventPlayer.target) > 2.4) or not eventPlayer.ab_var_1 or not eventPlayer.isUsingUltimate() or eventPlayer.hasStatus(Status.STUNNED) or eventPlayer.fear_end_t >= getTotalTimeElapsed())), temp_1 + 0.05)
            eventPlayer.ab_var_1 = 2
            waitUntil(not (not (eventPlayer.target.downed_start_t or not eventPlayer.target.is_combatant or eventPlayer.target.active_ab_is_cloaked or not (eventPlayer.target.is_invisible and distance(eventPlayer, eventPlayer.target) > 2.4) or not eventPlayer.ab_var_1 or not eventPlayer.isUsingUltimate() or eventPlayer.hasStatus(Status.STUNNED) or eventPlayer.fear_end_t >= getTotalTimeElapsed())), 99999)
            eventPlayer.is_ignoring_other_targets = false
            eventPlayer.ab_var_1 = false
            eventPlayer.enablePlayerCollision()
            waitUntil(not eventPlayer.isUsingUltimate(), 99999)
            wait(12)
    else:
        wait(4)
    if ruleCondition:
        loop()


rule "Team 2 Soldier (Cloaker): Stuck while charging":
    @Event eachPlayer
    @Team 2
    @Hero soldier
    @Condition eventPlayer.ab_var_1 == 2
    @Condition (eventPlayer.real_speed <= 1.5 or eventPlayer.target.is_flying) == true

    wait(2, Wait.ABORT_WHEN_FALSE)
    eventPlayer.ab_var_1 = false


rule "Team 2 Soldier (Cloaker): Sprint":
    @Event eachPlayer
    @Team 2
    @Hero soldier
    @Condition eventPlayer.ab_var_1 == 2
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition magnitude(eventPlayer.getThrottle()) > 0
    @Condition abs(horizontalAngleOfDirection(eventPlayer.getThrottle())) <= 60

    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(0.5, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Team 2 Soldier (Cloaker): Quick Melee":
    @Event eachPlayer
    @Team 2
    @Hero soldier
    @Condition eventPlayer.ab_var_1 == 2
    @Condition distance(eventPlayer, eventPlayer.target) <= 3

    eventPlayer.nav_pos = eventPlayer.target.getPosition() + 2.5 * directionTowards(eventPlayer, eventPlayer.target)
    eventPlayer.ab_var_1 = false
    eventPlayer.forceButtonPress(Button.MELEE)


rule "Team 2 Soldier (Cloaker): Quick Melee, apply Stun":
    @Event playerDealtKnockback
    @Team 2
    @Hero soldier

    if eventAbility != Button.MELEE:
        return
    if eventPlayer.real_tier != 4:
        return
    if eventPlayer.target != victim:
        return
    if victim.perk_brass_knuckles and victim.isMeleeing():
        wait(2)
    elif victim.getHero() == Hero.REINHARDT and victim.isUsingAbility1() and abs(horizontalAngleTowards(victim, eventPlayer)) <= 60:
        eventPlayer.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 2, eventPlayer.gmut_fortified_bypass_end_t)
        eventPlayer.setStatusEffect(victim, Status.KNOCKED_DOWN, 2)
        victim.setStatusEffect(eventPlayer, Status.KNOCKED_DOWN, 2)
        wait(1)
    else:
        damage(victim, eventPlayer, 150)
        #Stun Sound
        victim.setStatusEffect(eventPlayer, Status.STUNNED, 3.5)
        wait(0.05)
        victim.setStatusEffect(eventPlayer, Status.KNOCKED_DOWN, 3.5)
        eventPlayer.ab_var_2 = true
        eventPlayer.startForcingButton(Button.CROUCH)
        wait(1)
        waitUntil(not (eventPlayer.is_target_in_los and eventPlayer.target == victim and victim.hasStatus(Status.KNOCKED_DOWN)), 2)
        eventPlayer.ab_var_2 = false
        eventPlayer.stopForcingButton(Button.CROUCH)


rule "Team 2 Baptiste: Shoot, Has Used Immortality Field (1), Revive last time used (2)":
    @Event eachPlayer
    @Team 2
    @Hero baptiste
    @Condition eventPlayer.is_target_in_los >= 4

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(random.uniform(0.7, 1.1))
    if ruleCondition:
        loop()


rule "Team 2 Baptiste: Immortality Field":
    @Event eachPlayer
    @Team 2
    @Hero baptiste
    @Condition eventPlayer.is_target_in_los == true
    @Condition eventPlayer.ab_var_1 == false
    @Condition eventPlayer.getNormalizedHealth() <= 0.25
    @Condition (wave_number >= 10 or eventPlayer.is_living_boss) == true
    @Condition eventPlayer.hasStatus(Status.HACKED) == false
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false

    eventPlayer.ab_var_1 = true
    if not eventPlayer.is_living_boss and random.randint(1, 100) > 40:
        return
    eventPlayer.forceButtonPress(Button.ABILITY_2)


rule "Team 2 Echo: Shoot, Is Landing (1)":
    @Event eachPlayer
    @Team 2
    @Hero echo
    @Condition eventPlayer.is_target_in_los >= 4

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    wait(1.1)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    wait(random.uniform(0.4, 0.6))
    if ruleCondition:
        loop()


rule "Team 2 Echo: Sticky Bombs":
    @Event eachPlayer
    @Team 2
    @Hero echo
    @Condition eventPlayer.is_target_in_los >= 4

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 50:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 20:
        loop()
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    wait(6)
    if ruleCondition:
        loop()


rule "Team 2 Echo: Flight":
    @Event eachPlayer
    @Team 2
    @Hero echo
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.is_aggressive == true
    @Condition distance(eventPlayer, eventPlayer.target) <= 40

    eventPlayer.is_using_combat_pathfinding = 3
    eventPlayer.is_nav_reachable_node = false
    eventPlayer.forceButtonPress(Button.JUMP)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    if eventPlayer.isUsingAbility1():
        eventPlayer.is_flying = true
        waitUntil(not eventPlayer.isUsingAbility1(), 99999)
        if eventPlayer.is_living_boss:
            #Without a wait the second flight is silent
            wait()
            eventPlayer.forceButtonPress(Button.JUMP)
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            waitUntil(not eventPlayer.isUsingAbility1(), 99999)
        eventPlayer.nav_pos = (sorted([player for player in nodes if isInLoS(eventPlayer, player)], lambda i_: 2 * distance(eventPlayer, i_) - verticalAngleTowards(eventPlayer, i_)))[0]
        if eventPlayer.nav_pos == false:
            eventPlayer.nav_pos = sorted(nodes, lambda player: distance(eventPlayer, player))[0]
        eventPlayer.is_flying = false
        eventPlayer.ab_var_1 = true
        eventPlayer.is_pathfinding_disabled = true
        waitUntil(eventPlayer.isOnGround() or not eventPlayer.is_alive, 99999)
        eventPlayer.ab_var_1 = false
        eventPlayer.is_pathfinding_disabled = false
        wait(4)
    else:
        wait(2)
    if ruleCondition:
        loop()


rule "Team 2 Echo: Ascend / Descend":
    @Event eachPlayer
    @Team 2
    @Hero echo
    @Condition eventPlayer.is_flying == true
    @Condition abs(eventPlayer.getPosition().y - eventPlayer.nav_pos.y) >= 1

    if eventPlayer.getPosition().y < eventPlayer.nav_pos.y:
        eventPlayer.startForcingButton(Button.JUMP)
        waitUntil(not (eventPlayer.is_flying and eventPlayer.nav_pos.y - eventPlayer.getPosition().y >= 1), 99999)
        eventPlayer.stopForcingButton(Button.JUMP)
    else:
        eventPlayer.startForcingButton(Button.CROUCH)
        waitUntil(not (eventPlayer.is_flying and eventPlayer.getPosition().y - eventPlayer.nav_pos.y >= 1), 99999)
        eventPlayer.stopForcingButton(Button.CROUCH)


rule "Team 2 Echo: Glide":
    @Event eachPlayer
    @Team 2
    @Hero echo
    @Condition eventPlayer.ab_var_1 == true

    wait(0.25, Wait.ABORT_WHEN_FALSE)
    eventPlayer.startForcingButton(Button.JUMP)
    waitUntil(not eventPlayer.ab_var_1, 2.5)
    eventPlayer.stopForcingButton(Button.JUMP)


rule "Team 2 Mei: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero mei
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isUsingAbility1() == false

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    if distance(eventPlayer, eventPlayer.target) > 8:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        wait(1.5)
    else:
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        wait(2.468)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        wait(0.5)
    if ruleCondition:
        loop()


rule "Team 2 Mei: Ice Block + Wall":
    @Event eachPlayer
    @Team 2
    @Hero mei
    @Condition eventPlayer.getNormalizedHealth() <= 0.499
    @Condition eventPlayer.isUsingAbility1() == false

    eventPlayer.forceButtonPress(Button.ABILITY_2 if random.randint(1, 4) <= 3 else Button.ABILITY_1)
    if eventPlayer.isUsingAbility2():
        wait(0.05)
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(0.5)
    if eventPlayer.isUsingAbility1():
        heal(eventPlayer, null, eventPlayer.getMaxHealth() * 0.25)
    wait(7)
    if ruleCondition:
        loop()


rule "Team 2 Mei: Ult":
    @Event eachPlayer
    @Team 2
    @Hero mei
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition distance(eventPlayer, eventPlayer.target) <= 25
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition (wave_number >= 12 or eventPlayer.is_living_boss) == true

    if not ruleCondition:
        return
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(random.uniform(18, 40))
    if ruleCondition:
        loop()


rule "Team 2 Sombra: Shoot, Tase Target (Player), Just used Translocater (1), Took Damage (2), Tase / EMP Start Health (3)":
    @Event eachPlayer
    @Team 2
    @Hero sombra
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.ab_player == null

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    wait(0.7)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    if eventPlayer.getAmmo(false) <= 7:
        eventPlayer.forceButtonPress(Button.RELOAD)
    wait(random.uniform(0.8, 1.2))
    if ruleCondition:
        loop()


rule "Team 2 Sombra: Translocator":
    @Event eachPlayer
    @Team 2
    @Hero sombra
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.is_aggressive == true
    @Condition eventPlayer.target.is_flying == false
    @Condition distance(eventPlayer, eventPlayer.target) >= 7.5
    @Condition distance(eventPlayer, eventPlayer.target) <= 25
    @Condition eventPlayer.target.getPosition().y - eventPlayer.getPosition().y >= 3
    @Condition eventPlayer.isInViewAngle(eventPlayer.target, 5) == true

    if eventPlayer.isUsingAbility2():
        eventPlayer.forceButtonPress(Button.INTERACT)
        wait(0.05)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.2 + distance(eventPlayer, eventPlayer.target) / 25)
    if not eventPlayer.isUsingAbility2():
        return
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.1)
    if not eventPlayer.hasStatus(Status.PHASED_OUT):
        return
    eventPlayer.ab_var_1 = true
    eventPlayer.is_nav_reachable_node = false
    wait(2)
    eventPlayer.ab_var_1 = false
    wait(8)


rule "Team 2 Sombra: EMP":
    @Event eachPlayer
    @Team 2
    @Hero sombra
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition (wave_number >= 13 or eventPlayer.is_living_boss) == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > (60 if eventPlayer.ab_var_1 else 30):
        loop()
    if eventPlayer.hasStatus(Status.HACKED) or eventPlayer.hasStatus(Status.STUNNED):
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 12:
        loop()
    if not isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition()):
        loop()
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, eventPlayer, 1)
    wait(0.5)
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.ab_var_2 = false
    eventPlayer.ab_var_3 = eventPlayer.getHealth()
    waitUntil(eventPlayer.getUltCharge() != 100 and (eventPlayer.ab_var_2 or eventPlayer.getHealth() < eventPlayer.ab_var_3), 0.3)
    if eventPlayer.getUltCharge() != 100 and (eventPlayer.ab_var_2 or eventPlayer.getHealth() < eventPlayer.ab_var_3):
        eventPlayer.gmut_fortified_bypass_end_t = max(getTotalTimeElapsed() + 0.5, eventPlayer.gmut_fortified_bypass_end_t)
        eventPlayer.setStatusEffect(null, Status.STUNNED, 0.5)
        wait(8)
    else:
        wait(14)
    if ruleCondition:
        loop()


rule "Team 2 Sombra: Tase":
    @Event eachPlayer
    @Team 2
    @Hero sombra
    @Condition eventPlayer.is_target_in_los == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > (80 if eventPlayer.target.is_flying else 40):
        loop()
    if eventPlayer.hasStatus(Status.HACKED) or eventPlayer.hasStatus(Status.STUNNED):
        loop()
    if eventPlayer.isDead():
        loop()
    if eventPlayer.target.tased_end_t >= getTotalTimeElapsed():
        loop()
    if eventPlayer.target.hasStatus(Status.INVINCIBLE) or eventPlayer.target.hasStatus(Status.PHASED_OUT) or eventPlayer.target.isUsingUltimate():
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 12:
        loop()
    if not isInLoS(eventPlayer.getEyePosition(), eventPlayer.target.getEyePosition(), BarrierLos.BLOCKED_BY_ALL_BARRIERS):
        loop()
    eventPlayer.ab_player = eventPlayer.target
    eventPlayer.ab_var_2 = false
    eventPlayer.ab_var_3 = eventPlayer.getHealth()
    eventPlayer.ab_player.tased_end_t = getTotalTimeElapsed() + 6
    eventPlayer.setStatusEffect(null, Status.ROOTED, 6)
    if not eventPlayer.ab_player.perk_shockproof:
        smallMessage(eventPlayer.ab_player, "A Taser is stunning you! Shoot her to break free!")
    wait(10)
    if ruleCondition:
        loop()


rule "Team 2 Sombra: Tase times out / Lost Health / Target is downed / Target left / Is CCd / Distance too High / LOS lost":
    @Event eachPlayer
    @Team 2
    @Hero sombra
    @Condition eventPlayer.ab_player != null
    @Condition (eventPlayer.ab_player.tased_end_t < getTotalTimeElapsed() or eventPlayer.ab_var_2 or eventPlayer.getHealth() < eventPlayer.ab_var_3 or eventPlayer.ab_player.downed_start_t or not eventPlayer.ab_player.is_combatant or eventPlayer.hasStatus(Status.HACKED) or eventPlayer.hasStatus(Status.STUNNED) or distance(eventPlayer, eventPlayer.ab_player) >= 11 or not isInLoS(eventPlayer.getEyePosition(), eventPlayer.ab_player.getEyePosition(), BarrierLos.BLOCKED_BY_ALL_BARRIERS)) == true

    if eventPlayer.ab_player.perk_shockproof:
        damage(eventPlayer, eventPlayer.ab_player, 50)
        ([player for player in getPlayersInRadius(eventPlayer.getEyePosition(), 10, Team.2, LosCheck.SURFACES) if not player.hasStatus(Status.PHASED_OUT)]).setStatusEffect(null, Status.HACKED, 2)
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.PURPLE, eventPlayer, 10)
        playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
    eventPlayer.ab_player.tased_end_t = false
    eventPlayer.ab_player = null
    if eventPlayer.hasStatus(Status.HACKED):
        return
    eventPlayer.clearStatusEffect(Status.ROOTED)


rule "Team 2 Sombra: Took Damage":
    @Event playerTookDamage
    @Team 2
    @Hero sombra

    eventPlayer.ab_var_2 = true


rule "Team 1: Is Tased, Disable Abilities, Movement, Shake Facing, Set Aimspeed, Shoot":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.tased_end_t >= getTotalTimeElapsed()

    if eventPlayer.perk_shockproof:
        return
    eventPlayer.setStatusEffect(null, Status.BURNING, 10)
    eventPlayer.setStatusEffect(null, Status.HACKED, 10)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 10)
    eventPlayer.startFacing(directionFromAngles(eventPlayer.getHorizontalFacingAngle() + random.randint(-100, 20), eventPlayer.getVerticalFacingAngle() + random.randint(-100, 80)), 100)
    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE if eventPlayer.getHero() == Hero.MOIRA else Button.PRIMARY_FIRE)
    wait(0.3)
    eventPlayer.stopFacing()
    while eventPlayer.tased_end_t >= getTotalTimeElapsed():
        eventPlayer.setAimSpeed(50)
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE if eventPlayer.getHero() == Hero.MOIRA else Button.PRIMARY_FIRE)
        waitUntil(eventPlayer.tased_end_t < getTotalTimeElapsed(), random.uniform(0.1, 0.3))
        eventPlayer.setAimSpeed(200)
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE if eventPlayer.getHero() == Hero.MOIRA else Button.PRIMARY_FIRE)
        waitUntil(eventPlayer.tased_end_t < getTotalTimeElapsed(), random.uniform(0.1, 0.3))
    eventPlayer.setAimSpeed(100)
    eventPlayer.clearStatusEffect(Status.BURNING)
    eventPlayer.clearStatusEffect(Status.HACKED)
    eventPlayer.clearStatusEffect(Status.ROOTED)


rule "Team 2 Widowmaker: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero widowmaker
    @Condition eventPlayer.is_target_in_los >= 4

    if distance(eventPlayer, eventPlayer.target) < 8 or not eventPlayer.is_living_boss and eventPlayer.hasStatus(Status.HACKED):
        wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
        if not ruleCondition:
            return
        eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
        wait(0.25)
        eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
        if eventPlayer.getAmmo(false) <= 1:
            eventPlayer.forceButtonPress(Button.RELOAD)
    else:
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
        eventPlayer.is_ignoring_other_targets = true
        waitUntil(not (eventPlayer.isFiringSecondaryFire() and eventPlayer.is_target_in_los), 1.3)
        eventPlayer.is_ignoring_other_targets = false
        if eventPlayer.isFiringSecondaryFire() and eventPlayer.is_target_in_los >= 4:
            eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
            wait()
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    wait(1)
    if ruleCondition:
        loop()


rule "Team 2 Widowmaker: Grappling Hook":
    @Event eachPlayer
    @Team 2
    @Hero widowmaker
    @Condition eventPlayer.is_using_combat_pathfinding == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > (100 if eventPlayer.real_speed <= 1 else 25):
        loop()
    if eventPlayer.isFiringSecondaryFire():
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 8:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    if eventPlayer.isUsingAbility1():
        eventPlayer.facing_override_direction = directionFromAngles(eventPlayer.getHorizontalFacingAngle() + (-45 if random.randint(0, 1) else 45), -5)
        wait(0.16)
        eventPlayer.facing_override_direction = false
        waitUntil(not eventPlayer.isUsingAbility1(), 99999)
        eventPlayer.nav_pos = eventPlayer.getPosition()
        wait(8)
    if ruleCondition:
        loop()


rule "Team 2 Widowmaker: Infra-Sight":
    @Event eachPlayer
    @Team 2
    @Hero widowmaker
    @Condition eventPlayer.is_target_in_los == true
    @Condition is_infrasight_on == false
    @Condition (wave_number >= 1 or eventPlayer.is_living_boss) == true
    @Disabled

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 20:
        loop()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(38)
    if ruleCondition:
        loop()


rule "Team 2 Widowmaker: Infra-Sight if Sombra is stealthed":
    @Event eachPlayer
    @Team 2
    @Hero widowmaker
    @Condition eventPlayer.target == 0
    @Condition is_infrasight_on == false
    @Condition any([player.is_invisible == 1 for player in combatants]) == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 40:
        loop()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "Global: Set / Unset Is Infrasight on (Bots)":
    @Condition is_infrasight_on != any([player.isUsingUltimate() for player in getPlayersOnHero(Hero.WIDOWMAKER, Team.2)])

    is_infrasight_on = not is_infrasight_on
    aim_offset = (0 if is_infrasight_on else 0.5) * Vector.DOWN
    wait()
    if ruleCondition:
        loop()


rule "Team 2 Pharah: Flight":
    @Event eachPlayer
    @Team 2
    @Hero pharah
    @Condition eventPlayer.is_target_in_los >= 4

    eventPlayer.forceButtonPress(Button.ABILITY_1)
    eventPlayer.startForcingButton(Button.JUMP)
    wait(random.uniform(0.777, 1.111), Wait.ABORT_WHEN_FALSE)
    eventPlayer.stopForcingButton(Button.JUMP)
    wait(random.uniform(0.222, 0.555), Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Team 2 Pharah: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero pharah
    @Condition eventPlayer.is_target_in_los >= 4

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(random.uniform(0.6, 1.3))
    if ruleCondition:
        loop()


rule "Team 2 Reaper: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isUsingAbility1() == false

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(0.6)
    if ruleCondition:
        loop()


rule "Team 2 Reaper: Wraith Form, Force Position":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.is_aggressive == true
    @Condition eventPlayer.fear_end_t < getTotalTimeElapsed()
    @Condition eventPlayer.hasStatus(Status.HACKED) == false
    @Condition eventPlayer.hasStatus(Status.ROOTED) == false
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false
    @Condition distance(eventPlayer, eventPlayer.target) >= 10
    @Condition distance(eventPlayer, eventPlayer.target) <= 40

    eventPlayer.forceButtonPress(Button.ABILITY_1)
    if eventPlayer.isUsingAbility1():
        eventPlayer.ab_wraith_pos = eventPlayer.getPosition()
        chaseAtRate(eventPlayer.ab_wraith_pos, eventPlayer.target.getPosition() + 0.5 * Vector.UP, 15)
        eventPlayer.startForcingPosition(eventPlayer.ab_wraith_pos)
        eventPlayer.disableEnvironmentCollision(true)
        eventPlayer.is_wraith = true
        eventPlayer.is_pathfinding_disabled = true
        eventPlayer.is_target_in_los = 5
        wait(8)
    else:
        wait(1)
    if ruleCondition:
        loop()


rule "Team 2 Reaper: Cancel Wraith Form, Stop Forcing Position":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.is_wraith == true
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition distance(eventPlayer, eventPlayer.target) <= 3
    @Condition isInLoS(eventPlayer.target, eventPlayer.getPosition()) == true

    if distance(eventPlayer, raycast(eventPlayer, eventPlayer + 5 * Vector.DOWN, null, null, false).getHitPosition()) >= 5:
        wait(0.15)
        if not eventPlayer.is_wraith:
            return
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    stopChasingVariable(eventPlayer.ab_wraith_pos)
    eventPlayer.stopForcingPosition()
    eventPlayer.enableEnvironmentCollision()
    eventPlayer.is_wraith = false
    eventPlayer.is_pathfinding_disabled = false
    eventPlayer.nav_pos = eventPlayer.target.getPosition()
    eventPlayer.is_nav_reachable_node = false


rule "Team 2 Reaper: Wraith Form Timed out / Target left / Target is invisible, Stop Forcing Position":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.is_wraith == true
    @Condition (not eventPlayer.isUsingAbility1() or not eventPlayer.target.is_combatant or eventPlayer.target.active_ab_is_cloaked) == true

    stopChasingVariable(eventPlayer.ab_wraith_pos)
    eventPlayer.stopForcingPosition()
    eventPlayer.enableEnvironmentCollision()
    eventPlayer.is_wraith = false
    eventPlayer.is_pathfinding_disabled = false
    eventPlayer.is_nav_reachable_node = false


rule "Team 2 Reaper: Death Blossom":
    @Event eachPlayer
    @Team 2
    @Hero reaper
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition (wave_number >= 12 or eventPlayer.is_living_boss) == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 20:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 7:
        loop()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(28)
    if ruleCondition:
        loop()


rule "Team 2 Ana: Shoot, Has Used Nano Boost (1)":
    @Event eachPlayer
    @Team 2
    @Hero ana
    @Condition eventPlayer.is_target_in_los >= 4

    if distance(eventPlayer, eventPlayer.target) < 8 or not eventPlayer.is_living_boss and eventPlayer.hasStatus(Status.HACKED):
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
        wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
        if not ruleCondition:
            return
    else:
        if not eventPlayer.isFiringSecondaryFire():
            eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
            wait(0.5)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(1)
    if ruleCondition:
        loop()
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)


rule "Team 2 Ana: Biotic Grenade":
    @Event eachPlayer
    @Team 2
    @Hero ana
    @Condition eventPlayer.is_target_in_los >= 4

    wait(1.75)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 40:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 15:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(9)
    if ruleCondition:
        loop()


rule "Team 2 Ana: Nano Boost":
    @Event eachPlayer
    @Team 2
    @Hero ana
    @Condition eventPlayer.is_target_in_los == true
    @Condition eventPlayer.ab_var_1 == false
    @Condition eventPlayer.getNormalizedHealth() <= 0.75
    @Condition (wave_number >= 13 or eventPlayer.is_living_boss) == true
    @Condition eventPlayer.hasStatus(Status.HACKED) == false
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false

    eventPlayer.ab_var_1 = true
    if not eventPlayer.is_living_boss and random.randint(1, 100) > 50:
        return
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)


rule "Team 2 D.Va: Start / Stop Shooting, Has Used Self-Destruct (1), Can remech (2)":
    @Event eachPlayer
    @Team 2
    @Hero dva
    @Condition eventPlayer.is_target_in_los >= 3
    @Condition (distance(eventPlayer, eventPlayer.target) <= 10 or eventPlayer.isUsingAbility1() or eventPlayer.isStanding() or eventPlayer.isInAlternateForm()) == true

    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    waitUntil(not (eventPlayer.is_target_in_los >= 3 and (distance(eventPlayer, eventPlayer.target) <= 15 or eventPlayer.isUsingAbility1() or eventPlayer.isStanding() or eventPlayer.isInAlternateForm())), random.randint(4, 8))
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    waitUntil(eventPlayer.getAbilityResource(Button.SECONDARY_FIRE) <= 30, 2)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    if ruleCondition:
        loop()


rule "Team 2 D.Va: Boosters":
    @Event eachPlayer
    @Team 2
    @Hero dva
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.is_aggressive == true
    @Condition eventPlayer.isInAlternateForm() == false
    @Condition distance(eventPlayer, eventPlayer.target) >= 7.5
    @Condition distance(eventPlayer, eventPlayer.target) <= 25
    @Condition eventPlayer.isInViewAngle(eventPlayer.target, 5) == true

    eventPlayer.forceButtonPress(Button.ABILITY_1)
    eventPlayer.is_pathfinding_disabled = true
    waitUntil(not eventPlayer.isUsingAbility1() or distance(eventPlayer, eventPlayer.target) < 1, 3)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    eventPlayer.is_pathfinding_disabled = false
    eventPlayer.is_nav_reachable_node = false
    wait(5)
    if ruleCondition:
        loop()


rule "Team 2 D.Va: Self-Destruct":
    @Event eachPlayer
    @Team 2
    @Hero dva
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.ab_var_1 == false
    @Condition wave_number >= 15
    @Condition eventPlayer.isInAlternateForm() == false
    @Condition eventPlayer.getNormalizedHealth() <= 0.8
    @Condition eventPlayer.getHealth() > 1

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 30:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 15:
        loop()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    if eventPlayer.isUsingUltimate():
        eventPlayer.ab_var_1 = true
        wait(3.5)
        eventPlayer.ab_var_2 = true
    else:
        loop()


rule "Team 2 D.Va: Boss Self-Destruct":
    @Event eachPlayer
    @Team 2
    @Hero dva
    @Condition eventPlayer.is_living_boss == true
    @Condition eventPlayer.ab_var_1 == false
    @Condition eventPlayer.isInAlternateForm() == false
    @Condition eventPlayer.getHealth() < 1

    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    if not eventPlayer.isUsingUltimate():
        return
    eventPlayer.ab_var_1 = true
    wait(3.5)
    eventPlayer.ab_var_2 = true


rule "Team 2 D.Va: Allow Call Mech":
    @Event eachPlayer
    @Team 2
    @Hero dva
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.isInAlternateForm() == true
    @Condition eventPlayer.ab_var_2 == false

    wait(25 if eventPlayer.is_living_boss else 10, Wait.ABORT_WHEN_FALSE)
    if not ruleCondition:
        return
    eventPlayer.ab_var_2 = true


rule "Team 2 D.Va: Call Mech":
    @Event eachPlayer
    @Team 2
    @Hero dva
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.isInAlternateForm() == true
    @Condition eventPlayer.ab_var_2 == true
    @Condition eventPlayer.hasStatus(Status.HACKED) == false
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false
    @Condition eventPlayer.isOnGround() == true

    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.ab_var_2 = false


rule "Team 2 D.Va: Set / Unset Is aggressive":
    @Event eachPlayer
    @Team 2
    @Hero dva
    @Condition eventPlayer.is_using_boss_aggression == false
    @Condition (eventPlayer.is_alive and eventPlayer.isInAlternateForm()) == eventPlayer.is_aggressive

    eventPlayer.is_aggressive = not eventPlayer.is_aggressive
    wait()
    if ruleCondition:
        loop()


rule "Team 2 Orisa: Start / Stop Shooting":
    @Event eachPlayer
    @Team 2
    @Hero orisa
    @Condition eventPlayer.is_target_in_los >= 3

    if random.randint(1, 100) > 60:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
        wait(0.5)
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    waitUntil(eventPlayer.is_target_in_los < 3, 99999)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)


rule "Team 2 Orisa: Decrease / Normalize Move Speed while shooting on ground":
    @Event eachPlayer
    @Team 2
    @Hero orisa
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition eventPlayer.isOnGround() == true

    eventPlayer.setMoveSpeed(57.5 if mut_amped else 50)
    waitUntil(not (eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) and eventPlayer.isOnGround()), 99999)
    eventPlayer.setMoveSpeed(115 if mut_amped else 100)


rule "Team 2 Orisa: Javelin":
    @Event eachPlayer
    @Team 2
    @Hero orisa
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition distance(eventPlayer, eventPlayer.target) <= 15
    @Condition eventPlayer.isInViewAngle(eventPlayer.target, 5) == true

    eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    wait(15)
    if ruleCondition:
        loop()


rule "Team 2 Orisa: Fortify":
    @Event eachPlayer
    @Team 2
    @Hero orisa
    @Condition (eventPlayer.getSlot() != 1 or objective_phase_number == 1) == true
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.getNormalizedHealth() <= (0.6 if gmut_fortified else 0.4)

    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(15)
    if ruleCondition:
        loop()


rule "Team 2 Orisa: Javelin Spin":
    @Event eachPlayer
    @Team 2
    @Hero orisa
    @Condition eventPlayer.is_target_in_los == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 20:
        loop()
    if distance(eventPlayer, eventPlayer.target) > 20:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(12)
    if ruleCondition:
        loop()


rule "Team 2 Orisa: Terra-Surge":
    @Event eachPlayer
    @Team 2
    @Hero orisa
    @Condition eventPlayer.is_target_in_los == true
    @Condition (wave_number >= 10 or eventPlayer.is_living_boss) == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 20:
        loop()
    if distance(eventPlayer, eventPlayer.target) > 20:
        loop()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(20)
    if ruleCondition:
        loop()


rule "Team 2 Roadhog: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero roadhog
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isUsingAbility1() == false

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    if distance(eventPlayer, eventPlayer.target) > 9:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    else:
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    waitUntil(eventPlayer.isUsingAbility1(), random.uniform(2, 2.4))
    if ruleCondition:
        loop()


rule "Team 2 Roadhog: Chain Hook":
    @Event eachPlayer
    @Team 2
    @Hero roadhog
    @Condition eventPlayer.is_target_in_los >= 4

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > (80 if eventPlayer.target.is_flying else 40):
        loop()
    if not eventPlayer.getAmmo(false):
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 20:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(8)
    if ruleCondition:
        loop()


rule "Team 2 Roadhog: Whole Hog":
    @Event eachPlayer
    @Team 2
    @Hero roadhog
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition (wave_number >= 11 or eventPlayer.is_living_boss) == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 20:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 5:
        loop()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(28)
    if ruleCondition:
        loop()


rule "Team 2 Roadhog: Whole Hog Shoot":
    @Event eachPlayer
    @Team 2
    @Hero roadhog
    @Condition eventPlayer.isUsingUltimate() == true

    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    wait(random.uniform(0.7, 1.1))
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    if ruleCondition:
        loop()


rule "Team 2 Tracer: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero tracer
    @Condition eventPlayer.is_target_in_los >= 4

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    wait(0.45)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    if eventPlayer.getAmmo(false) <= 5:
        eventPlayer.forceButtonPress(Button.RELOAD)
    wait(random.uniform(0.4, 0.6))
    if ruleCondition:
        loop()


rule "Team 2 Tracer: Blink":
    @Event eachPlayer
    @Team 2
    @Hero tracer
    @Condition eventPlayer.is_aggressive == true
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition distance(eventPlayer, eventPlayer.target) <= 5
    @Condition abs(horizontalAngleTowards(eventPlayer.target, eventPlayer)) <= 45

    if not is_load_limit_reached and eventPlayer.getAbilityCharge(Button.ABILITY_1):
        temp_1 = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + (7.5 * (worldVector(Vector.FORWARD if eventPlayer.getThrottle() == vect(false, false, false) else eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION))), null, null, false).getHitPosition()
        if distance(temp_1, raycast(temp_1, temp_1 + 5 * Vector.DOWN, null, null, false).getHitPosition()) < 5:
            eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(1)
    if ruleCondition:
        loop()


rule "Team 2 Tracer: Recall to enemy on high ground":
    @Event eachPlayer
    @Team 2
    @Hero tracer
    @Condition eventPlayer.is_target_in_los == true
    @Condition eventPlayer.is_aggressive == true
    @Condition eventPlayer.recall_block_end_t < getTotalTimeElapsed()
    @Condition eventPlayer.target.is_flying == false
    @Condition distance(eventPlayer, eventPlayer.target) <= 20
    @Condition eventPlayer.target.getPosition().y - eventPlayer.getPosition().y >= 3

    eventPlayer.setAbilityCooldown(Button.ABILITY_2, false)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.8)
    if eventPlayer.isUsingAbility2() and eventPlayer.is_target_in_los:
        eventPlayer.teleport(raycast(eventPlayer.target.getEyePosition(), eventPlayer.target.getPosition() - 2.5 * directionFromAngles(eventPlayer.target.getHorizontalFacingAngle(), false), null, null, false).getHitPosition() + 0.5 * directionFromAngles(eventPlayer.target.getHorizontalFacingAngle(), false))
        eventPlayer.is_nav_reachable_node = false
        wait(15)
    wait(5)


rule "Team 2 Tracer: Pulse Bomb, Has Used Pulse Bomb (1)":
    @Event eachPlayer
    @Team 2
    @Hero tracer
    @Condition eventPlayer.is_target_in_los == true
    @Condition eventPlayer.is_aggressive == true
    @Condition eventPlayer.ab_var_1 == false
    @Condition eventPlayer.getNormalizedHealth() <= 0.4
    @Condition eventPlayer.hasStatus(Status.HACKED) == false
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false

    eventPlayer.ab_var_1 = true
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.16)
    eventPlayer.cancelPrimaryAction()
    if eventPlayer.is_living_boss:
        eventPlayer.setAbilityCharge(Button.ABILITY_1, 3)
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(0.192)
        eventPlayer.cancelPrimaryAction()
        eventPlayer.forceButtonPress(Button.ABILITY_1)
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
        wait(0.16)
        eventPlayer.cancelPrimaryAction()
    if eventPlayer.recall_block_end_t >= getTotalTimeElapsed():
        return
    eventPlayer.setAbilityCooldown(Button.ABILITY_2, false)
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.8)
    if not (eventPlayer.isUsingAbility2() and eventPlayer.is_target_in_los):
        return
    eventPlayer.teleport(raycast(eventPlayer.target.getEyePosition(), eventPlayer.target.getPosition() - 2.5 * directionFromAngles(eventPlayer.target.getHorizontalFacingAngle(), false), null, null, false).getHitPosition() + 0.5 * directionFromAngles(eventPlayer.target.getHorizontalFacingAngle(), false))
    eventPlayer.is_nav_reachable_node = false
    wait(2.8)


rule "Team 2 Genji: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero genji
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition (eventPlayer.isUsingUltimate() and distance(eventPlayer, eventPlayer.target) > 5) == false

    if distance(eventPlayer, eventPlayer.target) > 4 or eventPlayer.isUsingUltimate():
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    else:
        eventPlayer.forceButtonPress(Button.SECONDARY_FIRE)
    wait(1)
    if ruleCondition:
        loop()


rule "Team 2 Genji: Jump":
    @Event eachPlayer
    @Team 2
    @Hero genji
    @Condition eventPlayer.is_using_combat_pathfinding == true
    @Condition eventPlayer.target.is_flying == false
    @Condition eventPlayer.isOnGround() == true

    eventPlayer.forceButtonPress(Button.JUMP)
    wait(0.5)
    eventPlayer.forceButtonPress(Button.JUMP)
    wait(random.uniform(0.8, 1.2))
    if ruleCondition:
        loop()


rule "Team 2 Genji: Swift Strike":
    @Event eachPlayer
    @Team 2
    @Hero genji
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.is_aggressive == true
    @Condition distance(eventPlayer, eventPlayer.target) <= 15
    @Condition abs(horizontalAngleTowards(eventPlayer, eventPlayer.target)) <= 5
    @Condition eventPlayer.isUsingAbility2() == false

    if not is_load_limit_reached:
        temp_1 = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + 15 * eventPlayer.getFacingDirection(), null, null, false).getHitPosition()
        if distance(temp_1, raycast(temp_1, temp_1 + 20 * Vector.DOWN, null, null, false).getHitPosition()) < 20:
            eventPlayer.forceButtonPress(Button.ABILITY_1)
            wait(2)
    wait(2)
    if ruleCondition:
        loop()


rule "Team 2 Genji: Deflect":
    @Event playerTookDamage
    @Team 2
    @Hero genji

    if eventPlayer.isUsingUltimate():
        return
    if random.randint(1, 100) > 30:
        return
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(8)


rule "Team 2 Genji: Dragonblade":
    @Event eachPlayer
    @Team 2
    @Hero genji
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.getNormalizedHealth() <= 0.5
    @Condition eventPlayer.isUsingUltimate() == false

    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(0.5)
    if ruleCondition:
        loop()


rule "Team 2 Hanzo: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero hanzo
    @Condition eventPlayer.is_target_in_los >= 4

    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    wait(0.8)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)
    wait(0.3)
    if ruleCondition:
        loop()


rule "Team 2 Hanzo: Lunge":
    @Event playerTookDamage
    @Team 2
    @Hero hanzo

    if is_load_limit_reached:
        return
    if not eventPlayer.is_using_combat_pathfinding:
        return
    if random.randint(1, 100) > 50:
        return
    eventPlayer.forceButtonPress(Button.JUMP)
    wait(0.4)
    temp_1 = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + (7.85 * (worldVector(Vector.FORWARD if eventPlayer.getThrottle() == vect(false, false, false) else eventPlayer.getThrottle(), eventPlayer, Transform.ROTATION))), null, null, false).getHitPosition()
    if distance(temp_1, raycast(temp_1, temp_1 + 5 * Vector.DOWN, null, null, false).getHitPosition()) < 5:
        eventPlayer.forceButtonPress(Button.JUMP)
        wait(5.5)
    else:
        wait(2)


rule "Team 2 Hanzo: Storm Arrows":
    @Event eachPlayer
    @Team 2
    @Hero hanzo
    @Condition eventPlayer.is_target_in_los == true
    @Condition eventPlayer.getNormalizedHealth() <= 0.5
    @Condition eventPlayer.isUsingAbility2() == false

    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(0.5)
    if ruleCondition:
        loop()


rule "Team 2 Hanzo: Dragonstrike":
    @Event eachPlayer
    @Team 2
    @Hero hanzo
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.is_target_in_los == 0
    @Condition eventPlayer.fear_end_t < getTotalTimeElapsed()
    @Condition distance(eventPlayer, eventPlayer.target) >= 15

    wait(1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    eventPlayer.facing_override_direction = vectorTowards(eventPlayer, eventPlayer.target)
    wait(0.6)
    eventPlayer.facing_override_direction = vectorTowards(eventPlayer, eventPlayer.target)
    wait(0.4)
    eventPlayer.facing_override_direction = false
    wait(35)
    if ruleCondition:
        loop()


rule "Team 2 Reinhardt: Disable Barrier Field after breaking":
    @Event eachPlayer
    @Team 2
    @Hero reinhardt
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) > 0

    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, 1000)


rule "Team 2 Reinhardt: Hold / Drop Shield if Target and Distance to Target >= 5m":
    @Event eachPlayer
    @Team 2
    @Hero reinhardt
    @Condition eventPlayer.is_target_in_los == true
    @Condition distance(eventPlayer, eventPlayer.target) >= 5
    #Reinhardt won't automatically raise his shield again after charging or being hacked
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.hasStatus(Status.HACKED) == false

    eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
    waitUntil(not (eventPlayer.is_target_in_los and distance(eventPlayer, eventPlayer.target) >= 5 and not eventPlayer.isUsingAbility1() and not eventPlayer.hasStatus(Status.HACKED)), 99999)
    eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)


rule "Team 2 Reinhardt: Start / Stop Attacking if Distance to Target < 5m":
    @Event eachPlayer
    @Team 2
    @Hero reinhardt
    @Condition eventPlayer.is_target_in_los == true
    @Condition distance(eventPlayer, eventPlayer.target) < 5

    eventPlayer.startForcingButton(Button.PRIMARY_FIRE)
    waitUntil(not (eventPlayer.is_target_in_los and distance(eventPlayer, eventPlayer.target) < 5), 99999)
    eventPlayer.stopForcingButton(Button.PRIMARY_FIRE)


rule "Team 2 Reinhardt: Fire Strike":
    @Event eachPlayer
    @Team 2
    @Hero reinhardt
    @Condition eventPlayer.is_target_in_los >= 4

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 75:
        loop()
    if distance(eventPlayer, eventPlayer.target) <= 5 or distance(eventPlayer, eventPlayer.target) >= 25:
        loop()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(5)
    if ruleCondition:
        loop()


rule "Team 2 Reinhardt: Charge":
    @Event eachPlayer
    @Team 2
    @Hero reinhardt
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.is_aggressive == true
    @Condition eventPlayer.target.last_hit_by_shatter_t + 1 >= getTotalTimeElapsed()
    @Condition eventPlayer.target.last_hit_by_shatter_t + 0.4 < getTotalTimeElapsed()
    @Condition abs(horizontalAngleTowards(eventPlayer, eventPlayer.target)) <= 5

    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(6)
    if ruleCondition:
        loop()


rule "Team 2 Reinhardt: Charge into battle (Mut: Lock 'n Load)":
    @Event eachPlayer
    @Team 2
    @Hero reinhardt
    @Condition mut_lock_n_load == true
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.is_aggressive == true
    @Condition distance(eventPlayer, eventPlayer.target) > 25

    wait(2)
    if not ruleCondition:
        return
    eventPlayer.forceButtonPress(Button.ABILITY_1)


rule "Team 2 Reinhardt: Earthshatter":
    @Event eachPlayer
    @Team 2
    @Hero reinhardt
    @Condition eventPlayer.is_target_in_los >= 5
    @Condition eventPlayer.target.is_flying == false
    @Condition eventPlayer.isFiringSecondaryFire() == false

    wait(1, Wait.ABORT_WHEN_FALSE)
    if random.randint(1, 100) <= 100 * eventPlayer.getNormalizedHealth():
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 18 or abs(horizontalAngleTowards(eventPlayer, eventPlayer.target)) >= 30:
        loop()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(random.randint(7, 20))
    if ruleCondition:
        loop()


rule "Team 1: Is Shattered, Start Accelerating":
    @Event playerTookDamage
    @Team 1

    if not eventPlayer.hasStatus(Status.STUNNED):
        return
    if attacker.getHero() != Hero.REINHARDT:
        return
    if eventAbility != Button.ULTIMATE:
        return
    eventPlayer.setStatusEffect(attacker, Status.STUNNED, 5)
    eventPlayer.last_hit_by_shatter_t = getTotalTimeElapsed()
    eventPlayer.applyImpulse(directionFromAngles(horizontalAngleOfDirection(eventDirection), 30), 15, Relativity.TO_WORLD)
    eventPlayer.startAcceleration(directionFromAngles(horizontalAngleOfDirection(eventDirection), 30), 100 if eventPlayer.isInAir() else (1 - (getTotalTimeElapsed() - eventPlayer.last_hit_by_shatter_t)) * 500, 15, Relativity.TO_WORLD)
    wait(1)
    eventPlayer.clearStatusEffect(Status.STUNNED)
    eventPlayer.stopAcceleration()


rule "Team 2 Sigma: Flux":
    @Event eachPlayer
    @Team 2
    @Hero sigma
    @Condition eventPlayer.is_target_in_los == true
    @Condition (eventPlayer.is_living_boss or wave_number >= 10) == true

    wait(2)
    if not ruleCondition:
        return
    if random.randint(1, 100) > 30:
        loop()
    if distance(eventPlayer, eventPlayer.target) >= 25:
        loop()
    eventPlayer.setUltCharge(100)
    eventPlayer.forceButtonPress(Button.ULTIMATE)
    wait(1.75, Wait.ABORT_WHEN_FALSE)
    while eventPlayer.isUsingUltimate():
        wait(0.5, Wait.ABORT_WHEN_FALSE)
        eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(28)
    if ruleCondition:
        loop()


rule "Team 2 Sigma: Shoot":
    @Event eachPlayer
    @Team 2
    @Hero sigma
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.isUsingUltimate() == false

    wait(angleBetweenVectors(eventPlayer.getFacingDirection(), vectorTowards(eventPlayer, eventPlayer.target)) / 300)
    if not ruleCondition:
        return
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(random.uniform(0.9, 1.5))
    if ruleCondition:
        loop()


rule "Team 2 Sigma: Barrier":
    @Event eachPlayer
    @Team 2
    @Hero sigma
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isUsingAbility1() == false
    @Condition eventPlayer.isUsingAbility2() == false
    @Condition eventPlayer.isUsingUltimate() == false

    if distance(eventPlayer.target, eventPlayer) <= 30:
        eventPlayer.startForcingButton(Button.SECONDARY_FIRE)
        wait(random.uniform(0.2, 2))
        eventPlayer.stopForcingButton(Button.SECONDARY_FIRE)
    wait(4, Wait.ABORT_WHEN_FALSE)
    if ruleCondition:
        loop()


rule "Team 2 Sigma: Grasp":
    @Event eachPlayer
    @Team 2
    @Hero sigma
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.isUsingAbility2() == false

    wait(10)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    if ruleCondition:
        loop()


rule "Team 2 Sigma: Rock":
    @Event eachPlayer
    @Team 2
    @Hero sigma
    @Condition mut_lock_n_load == true
    @Condition eventPlayer.is_target_in_los >= 4
    @Condition eventPlayer.isFiringSecondaryFire() == false
    @Condition eventPlayer.isUsingAbility1() == false

    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(10)
    if ruleCondition:
        loop()


def upgrade_health_and_healing():
    @Name "Subroutine: Upgrade Health and Healing"

    upgrade_count++
    getPlayers(Team.1).setHealingReceived(85 + 2.5 * upgrade_count)
    getPlayers(Team.1).startHealingOverTime(null, 1, 100000)


def start_kill_remaining_phase():
    @Name "Subroutine: Start Kill remaining Phase"

    bigMessage(getAllPlayers(), "Kill the remaining enemies!")
    enable_normal_spawns = false
    getPlayers(Team.2).is_expendable = false
    special_spawns_count = false
    objective_phase_number = 3
    random.choice(combatants).communicate(Comms.PRESS_THE_ATTACK)


rule "Team 2 Boss Aggro: Set / Unset Is aggressive":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_using_boss_aggression == true
    @Condition eventPlayer.is_aggressive != (eventPlayer.is_target_in_los == 5)

    wait(3, Wait.ABORT_WHEN_FALSE)
    if not ruleCondition:
        return
    eventPlayer.is_aggressive = not eventPlayer.is_aggressive
    wait()
    if ruleCondition:
        loop()


rule "Team 2 Boss Aggro: Set Is aggressive after losing 20% health since Boss last time aggressive":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.is_using_boss_aggression == true
    @Condition eventPlayer.is_alive == true
    @Condition eventPlayer.is_aggressive == false

    eventPlayer.aggression_health_threshold = eventPlayer.getNormalizedHealth() - 0.2
    waitUntil(eventPlayer.getNormalizedHealth() < eventPlayer.aggression_health_threshold or eventPlayer.is_aggressive or not eventPlayer.is_living_boss, 99999)
    if eventPlayer.is_aggressive or not eventPlayer.is_living_boss:
        return
    eventPlayer.is_using_boss_aggression = false
    eventPlayer.is_aggressive = true
    waitUntil(eventPlayer.is_target_in_los or not eventPlayer.is_living_boss, 99999)
    if not eventPlayer.is_living_boss:
        return
    eventPlayer.is_using_boss_aggression = true


rule "Team 2 Boss Aggro: Disengage after killing Player":
    @Event playerEarnedElimination
    @Team 2

    if not eventPlayer.is_using_boss_aggression:
        return
    eventPlayer.is_aggressive = false


rule "IV Team 2 Slot 0: Create Portal Entities":
    @Event eachPlayer
    @Team 2
    @Slot 0

    progressBarHud(getAllPlayers() if objective_phase_number == 1 or objective_phase_number == 2 else [], 200 * eventPlayer.getNormalizedHealth() if objective_phase_number == 1 else objective_progress, "Destroy the Portal" if objective_phase_number == 1 else "Portal closing", HudPosition.TOP, -97, (Color.BLUE if special_spawns_count > 0 else rgb(max(200, 255 - ((getTotalTimeElapsed() - eventPlayer.ab_var_2) * 165)), max(0, 255 - ((getTotalTimeElapsed() - eventPlayer.ab_var_2) * 765)), max(19, 255 - ((getTotalTimeElapsed() - eventPlayer.ab_var_2) * 708)))) if objective_phase_number == 1 else Color.YELLOW)
    createIcon(getAllPlayers() if objective_phase_number == 1 or objective_phase_number == 2 else [], iv_dom_objective_pos + 2 * Vector.UP, Icon.EXCLAMATION_MARK, IconReeval.VISIBILITY_AND_POSITION, Color.YELLOW)
    createInWorldText(getAllPlayers() if objective_phase_number == 1 or objective_phase_number == 2 else [], "Destroy the Portal" if objective_phase_number == 1 else "Portal closing", iv_dom_objective_pos + 1.7 * Vector.UP, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW)
    createEffect(getAllPlayers() if objective_phase_number == 1 or objective_phase_number == 2 else [], Effect.SPHERE, Color.RED if objective_phase_number == 1 else Color.YELLOW, iv_dom_objective_pos + 1.11 * Vector.UP, 0.85 + (0 if objective_phase_number == 1 else 0.3 * (sin(6 * getTotalTimeElapsed()))))
    createEffect(getAllPlayers() if objective_phase_number == 1 or objective_phase_number == 2 else [], Effect.BAD_AURA, Color.RED, iv_dom_objective_pos + 1.11 * Vector.UP, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if objective_phase_number == 1 and (eventPlayer.ab_var_2 >= getTotalTimeElapsed() or special_spawns_count > 0) else [], Effect.LIGHT_SHAFT, Color.WHITE, iv_dom_objective_pos - 2 * Vector.UP, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "IV Team 2 Torbjörn: Start Portal Mode, Open (Phase 1), Breakpoint End Time (2), Set Health to half to remove armour":
    @Event eachPlayer
    @Team 2
    @Hero torbjorn

    iv_dom_objective_pos = random.choice(iv_dom_objective_all_pos_list.exclude(iv_dom_objective_pos))
    eventPlayer.startForcingPosition(iv_dom_objective_pos, false)
    eventPlayer.disableEnvironmentCollision(true)
    eventPlayer.setInvisibility(Invis.ALL)
    eventPlayer.setStatusEffect(null, Status.UNKILLABLE, 9999)
    eventPlayer.setHealth(0.5 * eventPlayer.getMaxHealth())


rule "IV Team 2: Force portal to shoot lava":
    @Event eachPlayer
    @Team 2
    @Hero torbjorn
    @Condition eventPlayer.isUsingUltimate() == true

    eventPlayer.setFacing(directionTowards(eventPlayer.getEyePosition(), vect(random.randint(-500, 500), random.randint(-500, 500), random.randint(-500, 500))), Relativity.TO_WORLD)
    eventPlayer.forceButtonPress(Button.PRIMARY_FIRE)
    wait(0.25)
    if ruleCondition:
        loop()


def iv_defend_portal():
    @Name "IV Subroutine: Defend Portal"

    money_amount += 95
    if objective_phase_number == 1:
        enable_normal_spawns = true
        call_reinforcements()
        async(play_incoming_sound_twice, AsyncBehavior.NOOP)
        eventPlayer.ab_var_2 = getTotalTimeElapsed() + 10
    temp_2 = [player for player in getPlayersInRadius(iv_dom_objective_pos, 15, Team.1, LosCheck.SURFACES) if player.is_combatant and not player.hasStatus(Status.PHASED_OUT) and isInLoS(eventPlayer, player, BarrierLos.BLOCKED_BY_ENEMY_BARRIERS)]
    for temp_1 in range(len(temp_2)):
        temp_2[temp_1].applyImpulse(directionFromAngles(horizontalAngleOfDirection(vectorTowards(iv_dom_objective_pos, temp_2[temp_1])), -20), 25, Relativity.TO_WORLD)
    temp_1 = random.randint(0, 5)
    if temp_1 == 5 and wave_number >= 7:
        temp_2.tased_end_t = getTotalTimeElapsed() + 3
    elif temp_1 <= 1 and wave_number >= 4:
        eventPlayer.setUltCharge(100)
        eventPlayer.forceButtonPress(Button.ULTIMATE)
    elif temp_1 == 3 and wave_number >= 4:
        eventPlayer.forceButtonPress(Button.ABILITY_1)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.PURPLE if temp_1 == 5 and wave_number >= 7 else Color.RED, iv_dom_objective_pos + 1.11 * Vector.UP, 10)


rule "IV Team 2 Torbjörn: Health reaches Breakpoint, Is Dead -> Portal Closing (Phase 2)":
    @Event eachPlayer
    @Team 2
    @Hero torbjorn
    @Condition eventPlayer.getNormalizedHealth() <= 0.333

    eventPlayer.setHealth(0.333 * eventPlayer.getMaxHealth())
    iv_defend_portal()
    waitUntil(eventPlayer.getNormalizedHealth() <= 0.166, 99999)
    eventPlayer.setHealth(0.166 * eventPlayer.getMaxHealth())
    iv_defend_portal()
    eventPlayer.clearStatusEffect(Status.UNKILLABLE)
    waitUntil(eventPlayer.isDead(), 99999)
    objective_phase_number = 2
    iv_defend_portal()
    upgrade_health_and_healing()
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, iv_dom_objective_pos + 1.11 * Vector.UP, 10)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 200)
    bigMessage(getAllPlayers(), "Portal is closing! Gained bonus health")
    eventPlayer.stopForcingPosition()
    eventPlayer.enableEnvironmentCollision()
    wait(0.25)
    eventPlayer.teleport(1000 * Vector.DOWN)
    eventPlayer.setInvisibility(Invis.NONE)


rule "IV Team 2 Slot 0: Portal Closing (Phase 2) -> Kill remaining (Phase 3)":
    @Event eachPlayer
    @Team 2
    @Slot 0
    @Condition objective_phase_number == 2

    for objective_progress in range(100, 25, -1):
        wait(0.096)
    enable_normal_spawns = true
    async(play_incoming_sound_twice, AsyncBehavior.NOOP)
    for objective_progress in range(25, 10, -1):
        wait(0.096)
    enable_objective_enemy_spawn = true
    for objective_progress in range(10, 0, -1):
        wait(0.096)
    start_kill_remaining_phase()


rule "IV Team 2 Torbjörn: Set Breakpoint Damage Reduction":
    @Event eachPlayer
    @Team 2
    @Hero torbjorn
    @Condition objective_phase_number == 1
    @Condition (eventPlayer.ab_var_2 >= getTotalTimeElapsed() or special_spawns_count > 0) == true

    eventPlayer.setDamageReceived(5)
    waitUntil(not (objective_phase_number == 1 and (eventPlayer.ab_var_2 >= getTotalTimeElapsed() or special_spawns_count > 0)), 99999)
    eventPlayer.setDamageReceived(50)


rule "HVT Team 2 Slot 1: Create HVT Entities":
    @Event eachPlayer
    @Team 2
    @Slot 1

    progressBarHud(getAllPlayers() if objective_phase_number == 1 or objective_phase_number == 2 else [], 100 * eventPlayer.getNormalizedHealth() if objective_phase_number == 1 else (objective_progress if eventPlayer.downed_start_t else eventPlayer.revive_timer) / 1.5, "Subdue the High Value Target" if objective_phase_number == 1 else ("Capturing..." if localPlayer in eventPlayer.revivers else "Capture the High Value Target") if eventPlayer.downed_start_t else "High Value Target is being revived", HudPosition.TOP, -97, rgb(max(200, 255 - ((getTotalTimeElapsed() - hvt_call_reinforcements_end_t) * 165)), max(0, 255 - ((getTotalTimeElapsed() - hvt_call_reinforcements_end_t) * 765)), max(19, 255 - ((getTotalTimeElapsed() - hvt_call_reinforcements_end_t) * 708))) if objective_phase_number == 1 else (Color.GREEN if eventPlayer.downed_start_t == 2 else Color.BLUE) if eventPlayer.downed_start_t else Color.RED, Color.BLUE if objective_phase_number == 1 else Color.BLUE if eventPlayer.downed_start_t else Color.YELLOW)
    createIcon(getAllPlayers() if objective_phase_number == 1 or objective_phase_number == 2 else [], eventPlayer, Icon.EXCLAMATION_MARK, IconReeval.VISIBILITY, Color.YELLOW)
    createInWorldText(getAllPlayers() if objective_phase_number == 1 or objective_phase_number == 2 else [], "Calling Reinforcements" if hvt_call_reinforcements_end_t >= getTotalTimeElapsed() else "Subdue Target" if objective_phase_number == 1 else "Capture Target", eventPlayer, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_AND_STRING, Color.YELLOW)
    createEffect(getAllPlayers() if objective_phase_number == 2 else [], Effect.RING, (Color.GREEN if eventPlayer.downed_start_t == 2 else Color.WHITE) if eventPlayer.downed_start_t else Color.RED, eventPlayer.getPosition() + 0.65 * Vector.UP, 10)
    createEffect(getAllPlayers() if objective_phase_number == 2 else [], Effect.RING, (Color.GREEN if eventPlayer.downed_start_t == 2 else Color.WHITE) if eventPlayer.downed_start_t else Color.RED, eventPlayer.getPosition() + 0.65 * Vector.DOWN, 10)
    createEffect(getAllPlayers() if objective_phase_number == 2 else [], Effect.RING, (Color.GREEN if eventPlayer.downed_start_t == 2 else Color.WHITE) if eventPlayer.downed_start_t else Color.RED, eventPlayer.getPosition(), (getTotalTimeElapsed() % 1.333 < 0.666) * (15 * getTotalTimeElapsed() % 10))
    createEffect(getAllPlayers() if hvt_call_reinforcements_end_t >= getTotalTimeElapsed() else [], Effect.LIGHT_SHAFT, Color.WHITE, updateEveryFrame(eventPlayer.getPosition()), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "HVT Team 2 Slot 1: HVT subdued fallback":
    @Event eachPlayer
    @Team 2
    @Slot 1
    @Condition objective_phase_number == 2
    @Condition eventPlayer.hasStatus(Status.STUNNED) == false

    wait(0.25, Wait.ABORT_WHEN_FALSE)
    if not ruleCondition:
        return
    while objective_phase_number == 2 and not eventPlayer.hasStatus(Status.STUNNED):
        eventPlayer.clearStatusEffect(Status.PHASED_OUT)
        eventPlayer.cancelPrimaryAction()
        eventPlayer.setStatusEffect(null, Status.KNOCKED_DOWN, 9999)
        wait(0.25)
    if objective_phase_number == 2:
        eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    if ruleCondition:
        loop()


rule "HVT Team 2 Slot 1: Subdued, check Player in Radius":
    @Event eachPlayer
    @Team 2
    @Slot 1
    @Condition objective_phase_number == 2

    eventPlayer.revivers = [player for player in combatants if not player.downed_start_t and not player.is_invisible % 3 and distance(eventPlayer, vect(player.getPosition().x, eventPlayer.getPosition().y, player.getPosition().z)) <= 10 and abs(eventPlayer.getPosition().y - player.getPosition().y) <= 5 and isInLoS(eventPlayer, player)]
    if len(eventPlayer.revivers):
        eventPlayer.downed_start_t = 2
        objective_progress += 1.5
    elif hvt_dom_objective_killed_count >= 3:
        eventPlayer.downed_start_t = 1
        objective_progress += 0.6
    elif eventPlayer.downed_start_t > 0:
        eventPlayer.downed_start_t -= 0.2
    else:
        eventPlayer.revive_timer += 3 if hvt_dom_objective_killed_count == 1 else 2
    if objective_progress >= 150:
        eventPlayer.clearStatusEffect(Status.KNOCKED_DOWN)
        eventPlayer.clearStatusEffect(Status.PHASED_OUT)
        eventPlayer.clearStatusEffect(Status.INVINCIBLE)
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.YELLOW, eventPlayer.getPosition(), 1)
        playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer.getPosition(), 200)
        eventPlayer.teleport(1000 * Vector.DOWN)
        start_kill_remaining_phase()
        objective_progress = false
    elif eventPlayer.revive_timer >= 150:
        objective_phase_number = 1
        objective_progress = false
        eventPlayer.gmut_fortified_bypass_end_t = false
        bigMessage(getAllPlayers(), "The HVT has been revived!")
        eventPlayer.setHealth(0.6 * eventPlayer.getMaxHealth())
        eventPlayer.clearStatusEffect(Status.KNOCKED_DOWN)
        eventPlayer.clearStatusEffect(Status.PHASED_OUT)
        eventPlayer.clearStatusEffect(Status.INVINCIBLE)
    wait(0.2)
    if ruleCondition:
        loop()


rule "HVT Team 2 Slot 1: Call Reinforcements":
    @Event eachPlayer
    @Team 2
    @Slot 1
    @Condition objective_phase_number == 1
    @Condition eventPlayer.getNormalizedHealth() > 0.5

    waitUntil(eventPlayer.getNormalizedHealth() <= 0.5 or objective_phase_number == 2, 99999)
    if objective_phase_number == 2:
        enable_normal_spawns = true
        call_reinforcements()
        async(play_incoming_sound_twice, AsyncBehavior.NOOP)
    else:
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.RED, eventPlayer, 1)
        hvt_call_reinforcements_end_t = getTotalTimeElapsed() + 10
        eventPlayer.setDamageReceived(5)
        eventPlayer.setHealth(0.5 * eventPlayer.getMaxHealth())
        wait(1)
        enable_normal_spawns = true
        call_reinforcements()
        async(play_incoming_sound_twice, AsyncBehavior.NOOP)
        wait(4)
        eventPlayer.setDamageReceived(50)
    waitUntil(objective_phase_number == 3, 99999)


rule "HVT Team 2 Slot 1: Capture Breakpoints":
    @Event eachPlayer
    @Team 2
    @Slot 1
    @Condition objective_phase_number == 2

    upgrade_health_and_healing()
    money_amount += 105
    waitUntil(objective_progress >= 140, 99999)
    enable_normal_spawns = true
    call_reinforcements()
    async(play_incoming_sound_twice, AsyncBehavior.NOOP)
    waitUntil(objective_phase_number == 3, 99999)
    money_amount += 105


rule "DOM Team 2 Slot 2: Create Guard and Control Point Entities":
    @Event eachPlayer
    @Team 2
    @Slot 2

    progressBarHud(getAllPlayers() if objective_phase_number == 1 else [], objective_progress[0] if localPlayer in dom_point_A_contesters else objective_progress[1] if localPlayer in dom_point_B_contesters else 0.25 * (((100 * ((1 - getPlayersInSlot(2, Team.2).getNormalizedHealth() if getPlayersInSlot(2, Color.TEAM_2).is_living_boss else 1) + (1 - getPlayersInSlot(3, Team.2).getNormalizedHealth() if getPlayersInSlot(3, Team.2).is_living_boss else 1))) + objective_progress[0]) + objective_progress[1]), ("Kill the Guard to unlock this point" if getPlayersInSlot(2, Color.TEAM_2).is_living_boss else "Capturing...") if localPlayer in dom_point_A_contesters else ("Kill the Guard to unlock the point" if getPlayersInSlot(3, Team.2).is_living_boss else "Capturing...") if localPlayer in dom_point_B_contesters else "Kill the guards and capture the points" if any([player.is_living_boss for player in getPlayers(Team.2)]) else "Capture the points", HudPosition.TOP, -97, Color.GREEN if localPlayer in dom_point_A_contesters or localPlayer in dom_point_B_contesters else Color.BLUE, Color.YELLOW if localPlayer in dom_point_A_contesters and getPlayersInSlot(2, Team.2).is_living_boss or localPlayer in dom_point_B_contesters and getPlayersInSlot(3, Team.2).is_living_boss else Color.BLUE)
    createEffect(getAllPlayers() if objective_phase_number == 1 and objective_progress[0] < 100 else [], Effect.RING, Color.RED if getPlayersInSlot(2, Team.2).is_living_boss else Color.GREEN if len(dom_point_A_contesters) else Color.WHITE, iv_dom_objective_pos[0], 3)
    createEffect(getAllPlayers() if objective_phase_number == 1 and objective_progress[1] < 100 else [], Effect.RING, Color.RED if getPlayersInSlot(3, Team.2).is_living_boss else Color.GREEN if len(dom_point_B_contesters) else Color.WHITE, iv_dom_objective_pos[1], 3)
    createIcon(getAllPlayers() if objective_phase_number == 1 and objective_progress[0] < 100 else [], iv_dom_objective_pos[0] + 2 * Vector.UP, Icon.EXCLAMATION_MARK, IconReeval.VISIBILITY_POSITION_AND_COLOR, Color.ORANGE if getPlayersInSlot(2, Color.TEAM_2).is_living_boss else Color.YELLOW)
    createIcon(getAllPlayers() if objective_phase_number == 1 and objective_progress[1] < 100 else [], iv_dom_objective_pos[1] + 2 * Vector.UP, Icon.EXCLAMATION_MARK, IconReeval.VISIBILITY_POSITION_AND_COLOR, Color.ORANGE if getPlayersInSlot(3, Team.2).is_living_boss else Color.YELLOW)
    createInWorldText(getAllPlayers() if objective_phase_number == 1 and objective_progress[0] < 100 else [], "Kill Guard" if getPlayersInSlot(2, Team.2).is_living_boss else "Capture point", getPlayersInSlot(2, Team.2) if getPlayersInSlot(2, Team.2).is_living_boss else iv_dom_objective_pos[0] + 1.7 * Vector.UP, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW)
    createInWorldText(getAllPlayers() if objective_phase_number == 1 and objective_progress[1] < 100 else [], "Kill Guard" if getPlayersInSlot(3, Team.2).is_living_boss else "Capture point", getPlayersInSlot(3, Team.2) if getPlayersInSlot(3, Team.2).is_living_boss else iv_dom_objective_pos[1] + 1.7 * Vector.UP, 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW)


rule "DOM Team 2 Slot 2: Contest Control Point A":
    @Event eachPlayer
    @Team 2
    @Slot 2
    @Condition objective_phase_number == 1
    @Condition objective_progress[0] < 100

    dom_point_A_contesters = [player for player in combatants if not player.downed_start_t and not player.is_invisible % 3 and distance(iv_dom_objective_pos[0], vect(player.getPosition().x, iv_dom_objective_pos[0].y, player.getPosition().z)) <= 3 and abs(iv_dom_objective_pos[0].getPosition().y - player.getPosition().y) <= 3 and isInLoS(iv_dom_objective_pos[0] + Vector.UP, player)]
    if not getPlayersInSlot(2, Team.2).is_living_boss and len(dom_point_A_contesters):
        objective_progress[0] += 2
        wait(0.25)
        objective_progress[0] += 2
        if objective_progress[0] >= 100:
            playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.YELLOW, iv_dom_objective_pos[0], 3)
            playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, iv_dom_objective_pos[0], 200)
            dom_point_A_contesters = []
            money_amount += 70
            if objective_progress[1] >= 100:
                objective_phase_number = 2
                enable_normal_spawns = true
                call_reinforcements()
                async(play_incoming_sound_twice, AsyncBehavior.NOOP)
                wait(2)
                start_kill_remaining_phase()
        wait(0.25)
    else:
        wait(0.5)
    if ruleCondition:
        loop()


rule "DOM Team 2 Slot 2: Contest Control Point B":
    @Event eachPlayer
    @Team 2
    @Slot 2
    @Condition objective_phase_number == 1
    @Condition objective_progress[1] < 100

    dom_point_B_contesters = [player for player in combatants if not player.downed_start_t and not player.is_invisible % 3 and distance(iv_dom_objective_pos[1], vect(player.getPosition().x, iv_dom_objective_pos[1].y, player.getPosition().z)) <= 3 and abs(iv_dom_objective_pos[1].getPosition().y - player.getPosition().y) <= 3 and isInLoS(iv_dom_objective_pos[1] + Vector.UP, player)]
    if not getPlayersInSlot(3, Team.2).is_living_boss and len(dom_point_B_contesters):
        objective_progress[1] += 2
        wait(0.25)
        objective_progress[1] += 2
        if objective_progress[1] >= 100:
            playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.YELLOW, iv_dom_objective_pos[1], 3)
            playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, iv_dom_objective_pos[1], 200)
            dom_point_B_contesters = []
            money_amount += 70
            if objective_progress[0] >= 100:
                objective_phase_number = 2
                enable_normal_spawns = true
                call_reinforcements()
                async(play_incoming_sound_twice, AsyncBehavior.NOOP)
                wait(2)
                start_kill_remaining_phase()
        wait(0.25)
    else:
        wait(0.5)
    if ruleCondition:
        loop()


rule "[Info] Ana":
    @Event eachPlayer
    @Hero ana

    #T1
    eventPlayer.talent_text[1] = "multinade"
    eventPlayer.talent_text[2] = "throw 3 biotic grenades instead of 1"
    #T2
    eventPlayer.talent_text[3] = "sleep paralysis"
    eventPlayer.talent_text[4] = "enemies slept by sleep dart receive large damage when they wake up"
    eventPlayer.startForcingName("Shrike")


rule "[Info] Ashe":
    @Event eachPlayer
    @Hero ashe

    #T1
    eventPlayer.talent_text[1] = "black gunpowder"
    eventPlayer.talent_text[2] = "coach gun stuns and sets enemies on fire"
    #T2
    eventPlayer.talent_text[3] = "dancing flames"
    eventPlayer.talent_text[4] = "eliminated enemies exlpode and burn others nearby"


rule "[Info] Baptiste":
    @Event eachPlayer
    @Hero baptiste

    #T1
    eventPlayer.talent_text[1] = "corrode"
    eventPlayer.talent_text[2] = "regenerative burst inflicts poison damage to enemies"
    #T2
    eventPlayer.talent_text[3] = "aerial ace"
    eventPlayer.talent_text[4] = "exo-boots allow for gliding and deal bonus damage while gliding"
    eventPlayer.startForcingName("Medic")


rule "[Info] Bastion":
    @Event eachPlayer
    @Hero bastion

    #T1
    eventPlayer.talent_text[1] = "fusillade"
    eventPlayer.talent_text[2] = "start firing barrages of rockets when shooting in assault form"
    #T2
    eventPlayer.talent_text[3] = "trickshot"
    eventPlayer.talent_text[4] = "landing tactical grenade on an enemy deals more damage and heals health"


rule "[Info] Brigitte":
    @Event eachPlayer
    @Hero brigitte

    #T1
    eventPlayer.talent_text[1] = "endeavor"
    eventPlayer.talent_text[2] = "gain a boost in damage, armour and speed when your barrier breaks"
    #T2
    eventPlayer.talent_text[3] = "whiplash"
    eventPlayer.talent_text[4] = "endpoint of whip shot generates a stunning shockwave"
    eventPlayer.startForcingName("Shield")


rule "[Info] DVa":
    @Event eachPlayer
    @Hero dva

    #T1
    eventPlayer.talent_text[1] = "voltage grid"
    eventPlayer.talent_text[2] = "defense matrix damages and roots enemies"
    #T2
    eventPlayer.talent_text[3] = "shooting star"
    eventPlayer.talent_text[4] = "boosters set enemies on fire"
    eventPlayer.startForcingName("Aeronaut")
    wait(0.5)
    eventPlayer.setHealth(100000)


rule "[Info] Doomfist":
    @Event eachPlayer
    @Hero doomfist

    #T1
    eventPlayer.talent_text[1] = "punch card"
    eventPlayer.talent_text[2] = "rocket punch deals triple damage at full charge"
    #T2
    eventPlayer.talent_text[3] = "fire quake"
    eventPlayer.talent_text[4] = "seismic slam sends out two massive wave of flames"


rule "[Info] Echo":
    @Event eachPlayer
    @Hero echo

    #T1
    eventPlayer.talent_text[1] = "bomblet jacket"
    eventPlayer.talent_text[2] = "send out mini-bombs to enemies while flight is active"
    #T2
    eventPlayer.talent_text[3] = "focusing optics"
    eventPlayer.talent_text[4] = "focusing beam boost starts at 90% hp instead of 50%"
    eventPlayer.startForcingName("Hoverbird")


rule "[Info] Genji":
    @Event eachPlayer
    @Hero genji

    #T1
    eventPlayer.talent_text[1] = "venomous strike"
    eventPlayer.talent_text[2] = "swift strike deals bleed damage; heal for bleed damage"
    #T2
    eventPlayer.talent_text[3] = "sharpened storm"
    eventPlayer.talent_text[4] = "double the amount of shurikens fired"
    eventPlayer.startForcingName("Shinobi")


rule "[Info] Hanzo":
    @Event eachPlayer
    @Hero hanzo

    #T1
    eventPlayer.talent_text[1] = "Arrow Rain"
    eventPlayer.talent_text[2] = "fire more arrows per shot during Storm Arrows"
    #T2
    eventPlayer.talent_text[3] = "stormbreak"
    eventPlayer.talent_text[4] = "storm arrows have no cooldown for a short duration when earning a kill"
    eventPlayer.startForcingName("Bowmaster")


rule "[Info] Junkrat":
    @Event eachPlayer
    @Hero junkrat

    #T1
    eventPlayer.talent_text[1] = "pyromania"
    eventPlayer.talent_text[2] = "All explosive attacks deal fire damage"
    #T2
    eventPlayer.talent_text[3] = "trigger happy"
    eventPlayer.talent_text[4] = "Gain +1 Concussion Mine every 4s, up to 5 max"


rule "[Info] Junker Queen":
    @Event eachPlayer
    @Hero junkerQueen

    #T1
    eventPlayer.talent_text[1] = "Shout Louder"
    eventPlayer.talent_text[2] = "commanding shout wounds enemies in the area"
    #T2
    eventPlayer.talent_text[3] = "Grace Period"
    eventPlayer.talent_text[4] = "gracie deals can pull multiple enemies back at once"


rule "[Info] Lifeweaver":
    @Event eachPlayer
    @Hero lifeweaver

    #T1
    eventPlayer.talent_text[1] = "Autumn Blossoms"
    eventPlayer.talent_text[2] = "Deal more damage and eliminations cause enemies to drop heal orbs"
    #T2
    eventPlayer.talent_text[3] = "Pressure Therapy"
    eventPlayer.talent_text[4] = "Deal 50% more damage to enemies you're above and behind"


rule "[Info] Kiriko":
    @Event eachPlayer
    @Hero kiriko

    #T1
    eventPlayer.talent_text[1] = "Shinobi Tactics"
    eventPlayer.talent_text[2] = "healing health with abilities create energy explosions around the target"
    #T2
    eventPlayer.talent_text[3] = "recession"
    eventPlayer.talent_text[4] = "protection suzu damages for 20% of health and freezes enemies"
    eventPlayer.startForcingName("Yokai")


rule "[Info] Lucio":
    @Event eachPlayer
    @Hero lucio

    #T1
    eventPlayer.talent_text[1] = "Chord Cadence"
    eventPlayer.talent_text[2] = "amp it up triggers twice and adds more shots to your attack"
    #T2
    eventPlayer.talent_text[3] = "reverse amp"
    eventPlayer.talent_text[4] = "amp it up inflicts the opposite song effect to enemies"
    eventPlayer.startForcingName("Gunrunner")


rule "[Info] Cassidy":
    @Event eachPlayer
    @Hero cassidy

    #T1
    eventPlayer.talent_text[1] = "standoff"
    eventPlayer.talent_text[2] = "enemies cannot move once their skull is locked during deadeye"
    #T2
    eventPlayer.talent_text[3] = "flashpoint"
    eventPlayer.talent_text[4] = "magnetic grenade will heavily stun enemies if it sticks"
    eventPlayer.startForcingName("Gunslinger")


rule "[Info] Mei":
    @Event eachPlayer
    @Hero mei

    #T1
    eventPlayer.talent_text[1] = "cold snap"
    eventPlayer.talent_text[2] = "instantly freeze nearby enemies once cryo-freeze breaks"
    #T2
    eventPlayer.talent_text[3] = "fractical strike"
    eventPlayer.talent_text[4] = "shoot more icicles at once but at slightly less damage"
    eventPlayer.startForcingName("Subzero")


rule "[Info] Mercy":
    @Event eachPlayer
    @Hero mercy

    #T1
    eventPlayer.talent_text[1] = "wings of grand"
    eventPlayer.talent_text[2] = "guardian angel damages and knocks enemies down in its path"
    #T2
    eventPlayer.talent_text[3] = "holy light missiles"
    eventPlayer.talent_text[4] = "launch powerful light charges during valkyrie"


rule "[Info] Moira":
    @Event eachPlayer
    @Hero moira

    #T1
    eventPlayer.talent_text[1] = "flourish"
    eventPlayer.talent_text[2] = "fading through allies heals and through enemies damages them"
    #T2
    eventPlayer.talent_text[3] = "catalyst"
    eventPlayer.talent_text[4] = "holding primary during coalescence costs energy and speed, but boosts effectiveness"


rule "[Info] Orisa":
    @Event eachPlayer
    @Hero orisa

    #T1
    eventPlayer.talent_text[1] = "spinning shreddies"
    eventPlayer.talent_text[2] = "javelin spin sends projectile shards that knock back enemies"
    #T2
    eventPlayer.talent_text[3] = "metalhead"
    eventPlayer.talent_text[4] = "energy javelin also affects enemies around the stuck target and stuns longer"
    eventPlayer.startForcingName("Bulldozer")


rule "[Info] Pharah":
    @Event eachPlayer
    @Hero pharah

    #T1
    eventPlayer.talent_text[1] = "head trauma"
    eventPlayer.talent_text[2] = "concussive blast deals damage and tazes enemies below half health"
    #T2
    eventPlayer.talent_text[3] = "weaponized storm"
    eventPlayer.talent_text[4] = "every 6th rocket flies faster and detonates several clusters"
    eventPlayer.startForcingName("Skirmisher")


rule "[Info] Ramattra":
    @Event eachPlayer
    @Hero ramattra

    #T1
    eventPlayer.talent_text[1] = "vile dominance"
    eventPlayer.talent_text[2] = "move faster and root enemies with every punch in nemesis form"
    #T2
    eventPlayer.talent_text[3] = "nether sector"
    eventPlayer.talent_text[4] = "heal health and gain bonus ultimate charge for every grounded enemy with vortex"
    eventPlayer.startForcingName("tyrant")


rule "[Info] Reaper":
    @Event eachPlayer
    @Hero reaper

    #T1
    eventPlayer.talent_text[1] = "wrathful wraith"
    eventPlayer.talent_text[2] = "allow shooting during wraith form"
    #T2
    eventPlayer.talent_text[3] = "paranoia"
    eventPlayer.talent_text[4] = "tase and damage enemies in sight during wraith form"
    eventPlayer.startForcingName("Spook")


rule "[Info] Reinhardt":
    @Event eachPlayer
    @Hero reinhardt

    #T1
    eventPlayer.talent_text[1] = "fire blast"
    eventPlayer.talent_text[2] = "fire strike explodes as it deals damage, igniting enemies"
    #T2
    eventPlayer.talent_text[3] = "epicenter"
    eventPlayer.talent_text[4] = "earthshatter travels in all directions"
    eventPlayer.startForcingName("Crusader")


rule "[Info] Roadhog":
    @Event eachPlayer
    @Hero roadhog

    #T1
    eventPlayer.talent_text[1] = "stench"
    eventPlayer.talent_text[2] = "constantly inflict toxic damage to nearby enemeis"
    #T2
    eventPlayer.talent_text[3] = "chainsnap"
    eventPlayer.talent_text[4] = "chain hook deals 4x more damage; resets upon eliminations"
    eventPlayer.startForcingName("Juggernaut")


rule "[Info] Sigma":
    @Event eachPlayer
    @Hero sigma

    #T1
    eventPlayer.talent_text[1] = "accretion disk"
    eventPlayer.talent_text[2] = "accretion flies straight and has increased damage and stun"
    #T2
    eventPlayer.talent_text[3] = "string theory"
    eventPlayer.talent_text[4] = "when kinetic grasp ends, fire a blast that scales based on the amount of damage collected"
    eventPlayer.startForcingName("Graviton")


rule "[Info] Sojourn":
    @Event eachPlayer
    @Hero sojourn

    #T1
    eventPlayer.talent_text[1] = "Thunderous kicks"
    eventPlayer.talent_text[2] = "kickslide jump initiates a powerful energy blast"
    #T2
    eventPlayer.talent_text[3] = "Matter Splatter"
    eventPlayer.talent_text[4] = "critical railgun hits are explosive"


rule "[Info] Soldier: 76":
    @Event eachPlayer
    @Hero soldier

    #T1
    eventPlayer.talent_text[1] = "triple threat"
    eventPlayer.talent_text[2] = "helix rockets fires two adjacent mini rockets"
    #T2
    eventPlayer.talent_text[3] = "Espionage"
    eventPlayer.talent_text[4] = "allies in biotic field revive faster and become harder to hit"


rule "[Info] Sombra":
    @Event eachPlayer
    @Hero sombra

    #T1
    eventPlayer.talent_text[1] = "stack overflow"
    eventPlayer.talent_text[2] = "cancelling stealth will temporarily boost damage and cause melees to stun"
    #T2
    eventPlayer.talent_text[3] = "cyberattack"
    eventPlayer.talent_text[4] = "using translocator will damage and hack nearby enemies"
    eventPlayer.startForcingName("Taser")


rule "[Info] Symmetra":
    @Event eachPlayer
    @Hero symmetra

    #T1
    eventPlayer.talent_text[1] = "sentry paragon"
    eventPlayer.talent_text[2] = "each sentry turret deals 50% more damage"
    #T2
    eventPlayer.talent_text[3] = "shield generator"
    eventPlayer.talent_text[4] = "gain increased damage and speed, and grant all players shields with kills"


rule "[Info] Torbjorn":
    @Event eachPlayer
    @Hero torbjorn

    #T1
    eventPlayer.talent_text[1] = "heatwaves"
    eventPlayer.talent_text[2] = "unleash waves of fire when overload or molten core is active"
    #T2
    eventPlayer.talent_text[3] = "foundry"
    eventPlayer.talent_text[4] = "run 40% faster and deal 40% damage with forge hammer equipped"
    eventPlayer.startForcingName("Portal")


rule "[Info] Tracer":
    @Event eachPlayer
    @Hero tracer

    #T1
    eventPlayer.talent_text[1] = "vortex"
    eventPlayer.talent_text[2] = "recall drags and roots nearby enemies to its activation point"
    #T2
    eventPlayer.talent_text[3] = "chain reaction"
    eventPlayer.talent_text[4] = "pulse bomb explosions can chain onto other enemies"
    eventPlayer.startForcingName("Playmaker")


rule "[Info] Widowmaker":
    @Event eachPlayer
    @Hero widowmaker

    #T1
    eventPlayer.talent_text[1] = "baiser de soie"
    eventPlayer.talent_text[2] = "scoped critical hits instantly kill enemies below 30% hp"
    #T2
    eventPlayer.talent_text[3] = "parting gift"
    eventPlayer.talent_text[4] = "leave a line of grenades while using grappling hook"
    eventPlayer.startForcingName("Sniper")


rule "[Info] Winston":
    @Event eachPlayer
    @Hero winston

    #T1
    eventPlayer.talent_text[1] = "next generation"
    eventPlayer.talent_text[2] = "primal rage damage is doubled and recharges 5% ult per hit"
    #T2
    eventPlayer.talent_text[3] = "quake"
    eventPlayer.talent_text[4] = "jump pack landing force is much more powerful and stuns enemies"


rule "[Info] Wrecking Ball":
    @Event eachPlayer
    @Hero wreckingBall

    #T1
    eventPlayer.talent_text[1] = "orbital strike"
    eventPlayer.talent_text[2] = "piledriver deals more damage the higher you drop"
    #T2
    eventPlayer.talent_text[3] = "distortion"
    eventPlayer.talent_text[4] = "adaptive shields triggers explosions and tazes nearby enemies"
    eventPlayer.startForcingName("Detonator")


rule "[Info] Zarya":
    @Event eachPlayer
    @Hero zarya

    #T1
    eventPlayer.talent_text[1] = "combusta-bubble"
    eventPlayer.talent_text[2] = "barriers explode when they expire"
    #T2
    eventPlayer.talent_text[3] = "power surge"
    eventPlayer.talent_text[4] = "personal barrier grants energy upon activation"
    eventPlayer.startForcingName("Amazon")


rule "[Info] Zenyatta":
    @Event eachPlayer
    @Hero zenyatta

    #T1
    eventPlayer.talent_text[1] = "stress relief"
    eventPlayer.talent_text[2] = "fully charged orb volleys deal 50% more damage"
    #T2
    eventPlayer.talent_text[3] = "perfect balance"
    eventPlayer.talent_text[4] = "transcendence damages enemies in the area of effect"


rule "Ana: Multinade":
    @Event eachPlayer
    @Team 1
    @Hero ana
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility2() == true

    for eventPlayer.i in range(4):
        wait(0.03)
        eventPlayer.setAbilityCooldown(Button.ABILITY_2, false)
        eventPlayer.cancelPrimaryAction()
        wait(0.05)
        eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(2)


rule "Ana: Sleep Paralysis":
    @Event playerDealtDamage
    @Team 1
    @Hero ana

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.ABILITY_1:
        return
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.BLACK, victim, 2)
    wait(0.5)
    waitUntil(not victim.hasStatus(Status.ASLEEP), 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.BLACK, victim.getEyePosition(), 150)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.BLACK, victim, 6)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.BLACK, victim, 12)
    damage(getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES), eventPlayer, 150)
    getPlayersInRadius(victim.getEyePosition(), 6, Team.2, LosCheck.SURFACES).setStatusEffect(null, Status.HACKED, 1.5)


rule "Zenyatta: Stress Relief":
    @Event eachPlayer
    @Team 1
    @Hero zenyatta
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    wait(2, Wait.ABORT_WHEN_FALSE)
    playEffect(eventPlayer, DynamicEffect.EXPLOSION_SOUND, Color.BLACK, eventPlayer, 150)
    eventPlayer.Damage_Dealt += 50
    wait(0.75)
    eventPlayer.Damage_Dealt -= 50


rule "Zenyatta: Perfect Balance":
    @Event eachPlayer
    @Team 1
    @Hero zenyatta
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition eventPlayer.Talent2 == true

    getPlayersInRadius(eventPlayer, 12, Team.2, LosCheck.SURFACES).startDamageOverTime(eventPlayer, 1, 100)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer, 24)
    wait(1)
    if ruleCondition:
        loop()


rule "Orisa- Spinning Shreddies":
    @Event eachPlayer
    @Team 1
    @Hero orisa
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility2() == true

    while eventPlayer.isUsingAbility2():
        createProjectile(Projectile.ORISA_FUSION_DRIVER, eventPlayer, eventPlayer.getEyePosition() + worldVector(vect(random.uniform(-0.8, 0.8), random.uniform(-0.8, -0.8), 0), eventPlayer, Transform.ROTATION), null, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 25, 2, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 60, 2, 10, 1)
        wait(0.02)
    createProjectile(Projectile.ORISA_FUSION_DRIVER, eventPlayer, null, null, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 80, 2, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0.15, 60, 2, 20, 1)


rule "Orisa: metalhead":
    @Event playerDealtKnockback
    @Team 1
    @Hero orisa
    @Condition eventAbility == Button.SECONDARY_FIRE
    @Condition eventPlayer.Talent2 == true

    damage(getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES), eventPlayer, 50)
    getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES).exclude(victim).applyImpulse(directionTowards(victim, eventPlayer), -15, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES).exclude(victim).applyImpulse(Vector.UP, 2, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES).setStatusEffect(null, Status.STUNNED, 1.2)


rule "Sigma: Accretion Disk":
    @Event eachPlayer
    @Team 1
    @Hero sigma
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility2() == true

    eventPlayer.setProjectileSpeed(150)
    eventPlayer.setProjectileGravity(0)
    waitUntil(not eventPlayer.Talent1 or not eventPlayer.isUsingAbility2(), 5)
    eventPlayer.setProjectileSpeed(100)
    eventPlayer.setProjectileGravity(100)


rule "Sigma: Accretion Disk":
    @Event playerDealtKnockback
    @Team 1
    @Hero sigma

    if not eventPlayer.Talent1:
        return
    if eventAbility != Button.ABILITY_2:
        return
    if victim == eventPlayer:
        return
    victim.setStatusEffect(eventPlayer, Status.KNOCKED_DOWN, 1.5)
    damage(victim, eventPlayer, eventDamage * 0.75)


rule "Sigma: String Theory":
    @Event eachPlayer
    @Team 1
    @Hero sigma
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility1() == true

    wait(1.8, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Ability_Projectile1 = eventPlayer.getEyePosition()
    eventPlayer.Ability_End = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 50, getPlayers(Team.2), eventPlayer, true).getHitPosition()
    chaseAtRate(eventPlayer.Ability_Projectile1, eventPlayer.Ability_End, 40)
    createEffect(getAllPlayers(), Effect.SPHERE, Color.VIOLET, eventPlayer.Ability_Projectile1, 0.6, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    createEffect(getAllPlayers(), Effect.GOOD_AURA, Color.VIOLET, eventPlayer.Ability_Projectile1, 0.6, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[2] = getLastCreatedEntity()
    wait(0.25)
    eventPlayer.Ability_Countdown = eventPlayer.getHealthOfType(Health.SHIELDS)
    waitUntil(not eventPlayer.Talent2 or eventPlayer.Ability_Projectile1 == eventPlayer.Ability_End, 5)
    stopChasingVariable(eventPlayer.Ability_Projectile1)
    destroyEffect(eventPlayer.Effects__[1])
    destroyEffect(eventPlayer.Effects__[2])
    damage(getPlayersInRadius(eventPlayer.Ability_Projectile1, min(10, 1.5 + eventPlayer.Ability_Countdown * 0.017), Team.2), eventPlayer, min(200, 100 + eventPlayer.Ability_Countdown / 5))
    playEffect(getAllPlayers(), DynamicEffect.DEBUFF_IMPACT_SOUND, Color.VIOLET, eventPlayer.Ability_Projectile1, 150)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.VIOLET, eventPlayer.Ability_Projectile1, min(10, 1.5 + eventPlayer.Ability_Countdown * 0.017))
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.PURPLE, eventPlayer.Ability_Projectile1, min(10, 1.5 + eventPlayer.Ability_Countdown * 0.017))
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.VIOLET, eventPlayer.Ability_Projectile1, min(20, 3 + eventPlayer.Ability_Countdown * 0.017))


rule "Ashe: Black Gunpowder":
    @Event playerDealtKnockback
    @Team 1
    @Hero ashe
    @Condition eventPlayer.Talent1 == true
    @Condition eventAbility == Button.ABILITY_1
    @Condition victim != eventPlayer

    victim.startDamageOverTime(eventPlayer, 3, eventDamage * 2.5)
    victim.setStatusEffect(null, Status.BURNING, 3)


rule "Ashe: Dancing Flames":
    @Event playerEarnedElimination
    @Team 1
    @Hero ashe
    @Condition eventPlayer.Talent2 == true

    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.ORANGE, victim.getEyePosition(), 120)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.ORANGE, victim, 5)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.YELLOW, victim, 5)
    getPlayersInRadius(victim, 5, Team.2, LosCheck.SURFACES).startDamageOverTime(eventPlayer, 3, 15)
    getPlayersInRadius(victim, 5, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.BURNING, 3)
    damage(getPlayersInRadius(victim, 5, Team.2, LosCheck.SURFACES), eventPlayer, 30)


rule "Widowmaker: Widowmaker Ult":
    @Event eachPlayer
    @Team 1
    @Hero widowmaker
    @Condition eventPlayer.isUsingUltimate() == true

    getPlayers(Team.2).Slowed_until = 9999 + getTotalTimeElapsed()
    waitUntil(not eventPlayer.isUsingUltimate(), 99999)
    getPlayers(Team.2).Slowed_until = getTotalTimeElapsed()


rule "Widowmaker: Baiser De Soie":
    @Event playerDealtDamage
    @Team 1
    @Hero widowmaker

    if not eventPlayer.Talent1:
        return
    if eventAbility != Button.PRIMARY_FIRE:
        return
    if not eventPlayer.isFiringSecondaryFire():
        return
    if not eventWasCriticalHit:
        return
    if victim.getNormalizedHealth() > 0.3:
        return
    if victim.is_living_boss:
        return
    if victim.iv_is_portal:
        return
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.VIOLET, victim, 3)
    damage(victim, eventPlayer, 10000)
    damage(getPlayersInRadius(victim, 3, Team.2, LosCheck.SURFACES), eventPlayer, eventDamage)


rule "Widowmaker: Parting Gift":
    @Event eachPlayer
    @Team 1
    @Hero widowmaker
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.getSpeed() >= 20

    while eventPlayer.isUsingAbility1():
        createProjectile(Projectile.RAMATTRA_RAVENOUS_VORTEX_SPHERE, eventPlayer, null, Vector.UP, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 50, 2, 4, DynamicEffect.RING_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0.05, 15, 3, 8, 1, 100)
        wait(0.15)
    for eventPlayer.i in range(4):
        wait(0.15)
        createProjectile(Projectile.RAMATTRA_RAVENOUS_VORTEX_SPHERE, eventPlayer, null, Vector.UP, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 50, 2, 4, DynamicEffect.RING_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0.05, 15, 3, 8, 1, 100)


rule "Torbjorn: Heatwave":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.Talent1 == true
    @Condition (eventPlayer.isUsingAbility2() or eventPlayer.isUsingUltimate()) == true

    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer.getPosition(), 11)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer.getPosition(), 12)
    getPlayersInRadius(eventPlayer, 6, Team.2, LosCheck.SURFACES).exclude(eventPlayer).startDamageOverTime(eventPlayer, 3, 20)
    getPlayersInRadius(eventPlayer, 6, Team.2, LosCheck.SURFACES).exclude(eventPlayer).setStatusEffect(eventPlayer, Status.BURNING, 3)
    damage(getPlayersInRadius(eventPlayer, 6, Team.2, LosCheck.SURFACES), eventPlayer, 15)
    wait(0.75)
    if ruleCondition:
        loop()


rule "[Torbjorn] Foundry":
    @Event playerDealtDamage
    @Team 1
    @Hero torbjorn

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.PRIMARY_FIRE:
        return
    if eventPlayer.getCurrentWeapon() != 2:
        return
    if distance(eventPlayer, victim) > 2.5:
        return
    damage(victim, eventPlayer, eventDamage * 0.4)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.ORANGE, victim, 0.25)


rule "[Torbjorn] Foundry - Bonus Speed":
    @Event eachPlayer
    @Team 1
    @Hero torbjorn
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.getCurrentWeapon() == 2

    eventPlayer.Move_Speed += 40
    waitUntil(eventPlayer.getCurrentWeapon() != 2 or eventPlayer.isDead() or not eventPlayer.Talent2, 99999)
    eventPlayer.Move_Speed -= 40


rule "Reinhardt: Fire Blast":
    @Event playerDealtDamage
    @Team 1
    @Hero reinhardt

    if not eventPlayer.Talent1:
        return
    if eventAbility != Button.ABILITY_2:
        return
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.ORANGE, victim, 5)
    getPlayersInRadius(victim, 5, Team.2, LosCheck.SURFACES).startDamageOverTime(eventPlayer, 5, 20)
    getPlayersInRadius(victim, 5, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.BURNING, 5)


rule "Reinhardt: Epicenter":
    @Event eachPlayer
    @Team 1
    @Hero reinhardt
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition eventPlayer.isOnGround() == true

    getPlayersInRadius(eventPlayer, 20, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.KNOCKED_DOWN, 2.5)
    for eventPlayer.i in range(3):
        wait(0.032)
        damage(getPlayersInRadius(eventPlayer, eventPlayer.i * 10, Team.2, LosCheck.SURFACES), eventPlayer, 50)
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer.getPosition(), eventPlayer.i * 20)
    wait(5)


rule "Brigitte: Endeavor":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.Ability_Available == true

    createEffect(getAllPlayers(), Effect.ECHO_CLONING, Team.1, eventPlayer, 0.4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer.getEyePosition(), 15)
    heal(getPlayersInRadius(eventPlayer, 15, Team.1), eventPlayer, 200)
    eventPlayer.Damage_Dealt += 150
    eventPlayer.Move_Speed += 75
    eventPlayer.addHealthPool(Health.ARMOR, eventPlayer.getMaxHealth() / 3, false)
    eventPlayer.HP_Pool[1] = getLastCreatedHealthPool()
    wait(1)
    waitUntil(not eventPlayer.Talent1 or eventPlayer.isDead() or eventPlayer.Ability_Available, 6)
    eventPlayer.Damage_Dealt -= 150
    eventPlayer.Move_Speed -= 75
    removeHealthPool(eventPlayer.HP_Pool[1])
    destroyEffect(eventPlayer.Effects__[1])
    wait(0.1)
    if ruleCondition:
        loop()


rule "Brigitte: Endeavor":
    @Event eachPlayer
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) >= 0.1

    eventPlayer.Ability_Available = true
    wait(0.25)
    eventPlayer.Ability_Available = false


rule "Brigitte: Whiplash":
    @Event playerDealtKnockback
    @Team 1
    @Hero brigitte
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility1() == true

    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.GREEN, victim, 100)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.ORANGE, victim, 2.5)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, victim, 2.5)
    damage(getPlayersInRadius(victim, 2.5, Team.2, LosCheck.SURFACES), eventPlayer, 100)
    getPlayersInRadius(victim, 2.5, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.STUNNED, 1.5)


rule "Genji: Venomous Strike":
    @Event playerDealtDamage
    @Team 1
    @Hero genji

    if not eventPlayer.Talent1:
        return
    if eventAbility != Button.ABILITY_1:
        return
    eventPlayer.startHealingOverTime(eventPlayer, 3, 15)
    victim.startDamageOverTime(eventPlayer, 3, 15)
    heal(eventPlayer, eventPlayer, 5)
    wait(0.25, Wait.RESTART_WHEN_TRUE)
    wait(2)


rule "Genji: Sharpened Storm - Primary":
    @Event eachPlayer
    @Team 1
    @Hero genji
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isFiringPrimaryFire() == true
    @Condition eventPlayer.isUsingUltimate() == false

    wait(0.25)
    createProjectile(Projectile.GENJI_SHURIKEN, eventPlayer, null, null, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 27, 2, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 60, 4)
    wait(0.1)
    createProjectile(Projectile.GENJI_SHURIKEN, eventPlayer, null, null, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 27, 2, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 60, 4)
    wait(0.1)
    createProjectile(Projectile.GENJI_SHURIKEN, eventPlayer, null, null, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 27, 2, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 60, 4)


rule "Genji: Sharpened Storm - Secondary":
    @Event eachPlayer
    @Team 1
    @Hero genji
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    wait()
    createProjectile(Projectile.GENJI_SHURIKEN, eventPlayer, null, directionFromAngles(eventPlayer.getHorizontalFacingAngle() + 4.5, eventPlayer.getVerticalFacingAngle()), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 27, 2, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 60, 4)
    createProjectile(Projectile.GENJI_SHURIKEN, eventPlayer, null, directionFromAngles(eventPlayer.getHorizontalFacingAngle() - 4.5, eventPlayer.getVerticalFacingAngle()), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 27, 2, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 60, 4)
    createProjectile(Projectile.GENJI_SHURIKEN, eventPlayer, null, null, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 27, 2, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 60, 4)


rule "Mercy: Wings of Grand":
    @Event eachPlayer
    @Team 1
    @Hero mercy
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.isUsingAbility1() == true

    if eventPlayer.getSpeed() > 10:
        damage([player for player in getPlayersInRadius(eventPlayer, 4, Team.2, LosCheck.SURFACES) if not player.hasStatus(Status.KNOCKED_DOWN)], eventPlayer, 35)
        getPlayersInRadius(eventPlayer, 4, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.KNOCKED_DOWN, 0.8)
        getPlayersInRadius(eventPlayer, 4, Team.2, LosCheck.SURFACES).applyImpulse(normalize(eventPlayer.getVelocity()) + directionTowards(eventPlayer, eventPlayer.getThrottle()) + Vector.UP * 1.1, 7.5, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.YELLOW, eventPlayer.getPosition(), 0.15)
    wait(0.25)
    if ruleCondition:
        loop()


rule "Mercy: Holy Light Missiles":
    @Event eachPlayer
    @Team 1
    @Hero mercy
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingUltimate() == true

    createEffect(getAllPlayers(), Effect.ORB, Color.YELLOW, eventPlayer.Ability_Projectile1, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    eventPlayer.Ability_Projectile1 = eventPlayer.getEyePosition()
    chaseAtRate(eventPlayer.Ability_Projectile1, eventPlayer.Ability_End, 100)
    eventPlayer.Ability_End = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 60, getLivingPlayers(Team.2), getPlayers(Team.1), true).getHitPosition()
    waitUntil(not eventPlayer.Talent2 or eventPlayer.Ability_End == eventPlayer.Ability_Projectile1, 1)
    destroyEffect(eventPlayer.Effects__[1])
    stopChasingVariable(eventPlayer.Ability_Countdown)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.GREEN, eventPlayer.Ability_Projectile1, 100)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.YELLOW, eventPlayer.Ability_Projectile1, 6)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.WHITE, eventPlayer.Ability_Projectile1, 6)
    damage(getPlayersInRadius(eventPlayer.Ability_Projectile1, 6, Team.2, LosCheck.SURFACES), eventPlayer, 150)
    heal(getPlayersInRadius(eventPlayer.Ability_Projectile1, 6, Team.1, LosCheck.SURFACES), eventPlayer, 150)
    wait(1.5)
    if ruleCondition:
        loop()


rule "Tracer: Vortex":
    @Event eachPlayer
    @Team 1
    @Hero tracer
    @Condition eventPlayer.isUsingAbility2() == true
    @Condition eventPlayer.Talent1 == true

    heal(getPlayersInRadius(eventPlayer, 10, Team.2, LosCheck.SURFACES), eventPlayer, 1)
    damage(getPlayersInRadius(eventPlayer, 10, Team.2, LosCheck.SURFACES), eventPlayer, 25)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.RED, eventPlayer.getPosition(), 20)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.YELLOW, eventPlayer.getPosition(), 18)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.GREEN, eventPlayer.getPosition(), 16)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.AQUA, eventPlayer.getPosition(), 14)
    getPlayersInRadius(eventPlayer, 10, Team.2, LosCheck.SURFACES).setEnvironmentalKillCreditor(eventPlayer)


rule "Tracer: Vortex 2":
    @Event playerReceivedHealing
    @Team 2

    if not healer.Talent1:
        return
    if eventPlayer.is_living_boss:
        return
    if not healer.isUsingAbility2():
        return
    eventPlayer.disablePlayerCollision()
    eventPlayer.applyImpulse(Vector.UP, 3, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setGravity(false)
    wait(0.05)
    eventPlayer.applyImpulse(directionTowards(eventPlayer, healer), distance(eventPlayer, healer) * 3.4, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    eventPlayer.setStatusEffect(null, Status.ROOTED, 1)
    wait(0.23)
    eventPlayer.setGravity(100)
    eventPlayer.enablePlayerCollision()
    Cancel_Momentum()


rule "Tracer: Chain Reaction":
    @Event eachPlayer
    @Team 2
    @Condition any([distance(eventPlayer, i_) <= 7 for i_ in [player for player in getLivingPlayers(Team.2) if player.Chain_Reaction_On]]) == true
    @Condition eventPlayer.Chain_Reaction_Immune == false
    @Condition eventPlayer.Chain_Reaction_On == false
    @Condition eventPlayer.isAlive() == true

    wait(0.25)
    eventPlayer.Chain_Reaction_On = true


rule "Tracer: Chain Reaction 2":
    @Event eachPlayer
    @Team 2
    @Condition eventPlayer.Chain_Reaction_On == true

    wait(0.1)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.AQUA, eventPlayer, 3)
    damage(eventPlayer, getPlayersOnHero(Hero.TRACER, Team.1), 200)
    wait(0.5)
    eventPlayer.Chain_Reaction_Immune = true
    eventPlayer.Chain_Reaction_On = false
    wait(2)
    eventPlayer.Chain_Reaction_Immune = false


rule "Tracer: Chain Reaction 3":
    @Event playerDealtDamage
    @Team 1
    @Hero tracer

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.ULTIMATE:
        return
    if eventDamage <= 20:
        return
    victim.Chain_Reaction_On = true


rule "Symmetra: Sentry Paragon":
    @Event eachPlayer
    @Team 1
    @Hero symmetra
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isAlive() == true

    wait(0.5, Wait.ABORT_WHEN_FALSE)
    startDamageModification(getPlayers(Team.2), eventPlayer, 66.667)
    eventPlayer.damage_mod[1] = getLastDamageModification()
    eventPlayer.Damage_Dealt += 50
    waitUntil(not eventPlayer.Talent1 or eventPlayer.isDead(), 99999)
    eventPlayer.Damage_Dealt -= 50
    stopDamageModification(eventPlayer.damage_mod[1])
    wait(0.1)
    if ruleCondition:
        loop()


rule "Symmetra: Shield Generator":
    @Event playerDealtFinalBlow
    @Team 1
    @Hero symmetra
    @Condition eventPlayer.Talent2 == true

    eventPlayer.Damage_Dealt += 30
    eventPlayer.Move_Speed += 30
    getPlayers(Team.1).addHealthPool(Health.SHIELDS, min(200, eventPlayer.getMaxHealth() * 0.25), false, false)
    eventPlayer.HP_Pool[6] = getLastCreatedHealthPool()
    createEffect(getAllPlayers(), Effect.ANA_NANO_BOOSTED, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    waitUntil(not eventPlayer.Talent2 or eventPlayer.isDead(), 10)
    destroyEffect(eventPlayer.Effects__[1])
    removeHealthPool(eventPlayer.HP_Pool[6])
    eventPlayer.Damage_Dealt -= 30
    eventPlayer.Move_Speed -= 30


rule "[Hanzo] Arrow Rain ":
    @Event eachPlayer
    @Team 1
    @Hero hanzo
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isFiringPrimaryFire() == true
    @Condition eventPlayer.isUsingAbility2() == true

    for eventPlayer.i in range(2):
        createProjectile(Projectile.MEI_ICICLE, eventPlayer, eventPlayer.getEyePosition() + Vector.DOWN * 0.5, directionFromAngles(eventPlayer.getHorizontalFacingAngle() + random.uniform(-2, 2), eventPlayer.getVerticalFacingAngle() + random.uniform(-2, 2)), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 70, 2, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 110, 5, 0, 1, 5)
        createProjectile(Projectile.MEI_ICICLE, eventPlayer, eventPlayer.getEyePosition() + Vector.DOWN * 0.5, directionFromAngles(eventPlayer.getHorizontalFacingAngle() + random.uniform(-2, 2), eventPlayer.getVerticalFacingAngle() + random.uniform(-2, 2)), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 70, 2, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 110, 5, 0, 1, 5)


rule "Hanzo: Stormbreak":
    @Event playerDealtFinalBlow
    @Team 1
    @Hero hanzo
    @Condition eventPlayer.Talent2 == true

    eventPlayer.Ability_Countdown = 4
    chaseAtRate(eventPlayer.Ability_Countdown, 0, 1)


rule "Hanzo: Stormbreak - Boost":
    @Event eachPlayer
    @Team 1
    @Hero hanzo
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.Ability_Countdown > 0

    createEffect(getAllPlayers(), Effect.WINSTON_PRIMAL_RAGE, Color.TEAM_1, eventPlayer, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    waitUntil(eventPlayer.isDead() or not eventPlayer.Ability_Countdown or not eventPlayer.Talent2, 99999)
    eventPlayer.Ability_Countdown = false
    destroyEffect(eventPlayer.Effects__[1])
    stopChasingVariable(eventPlayer.Ability_Countdown)


rule "Hanzo: Stormbreak - Reset Cooldowns For Storm Arrows":
    @Event eachPlayer
    @Team 1
    @Hero hanzo
    @Condition eventPlayer.Ability_Countdown > 0
    @Condition eventPlayer.getAbilityCooldown(Button.ABILITY_2) > 0

    eventPlayer.setAbilityCooldown(Button.ABILITY_2, false)


rule "Echo: Bomber Jacket":
    @Event eachPlayer
    @Team 1
    @Hero echo
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility1() == true

    createHomingProjectile(Projectile.ECHO_STICKY_BOMB, eventPlayer, eventPlayer.getEyePosition() + worldVector(vect(-0.5, false, false), eventPlayer, Transform.ROTATION), Vector.DOWN, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 30, 1, 1.5, DynamicEffect.RING_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 20, 5, 0, (sorted([player for player in getPlayers(Team.2) if isInLoS(eventPlayer, player) and player.is_alive], lambda i_: distance(eventPlayer, i_)))[0])
    createHomingProjectile(Projectile.ECHO_STICKY_BOMB, eventPlayer, eventPlayer.getEyePosition() + worldVector(vect(0.5, false, false), eventPlayer, Transform.ROTATION), Vector.DOWN, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 30, 1, 1.5, DynamicEffect.RING_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 20, 5, 0, (sorted([player for player in getPlayers(Team.2) if isInLoS(eventPlayer, player) and player.is_alive], lambda i_: distance(eventPlayer, i_)))[0])
    wait(0.25)
    if ruleCondition:
        loop()


rule "Echo: Focusing Optics":
    @Event playerDealtDamage
    @Team 1
    @Hero echo

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.ABILITY_2:
        return
    if eventPlayer.isDuplicatingAHero():
        return
    if victim.getNormalizedHealth() <= 0.5:
        return
    if victim.getNormalizedHealth() > 0.9:
        return
    damage(victim, eventPlayer, eventDamage * 3)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.VIOLET, victim, 0.5)


rule "[Lucio] Chord Cadence":
    @Event eachPlayer
    @Team 1
    @Hero lucio
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility2() == true

    waitUntil(not eventPlayer.isUsingAbility2(), 4)
    eventPlayer.setAbilityCooldown(Button.ABILITY_2, 0)
    if eventPlayer.isDead():
        return
    eventPlayer.cancelPrimaryAction()
    eventPlayer.forceButtonPress(Button.ABILITY_2)
    wait(4)


rule "[Lucio] Chord Cadence burstfire":
    @Event eachPlayer
    @Team 1
    @Hero lucio
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isFiringPrimaryFire() == true
    @Condition eventPlayer.isUsingAbility2() == true

    for eventPlayer.i in range(4):
        createProjectile(Projectile.LUCIO_SONIC_AMPLIFIER, eventPlayer, eventPlayer.getEyePosition() + Vector.DOWN * 0.5, directionFromAngles(eventPlayer.getHorizontalFacingAngle() + random.uniform(-1, 1), eventPlayer.getVerticalFacingAngle() + random.uniform(-1, 1)), Relativity.TO_WORLD, ModifyHealth.DAMAGE, getOppositeTeam(eventPlayer.getTeam()), 20, 2, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 50, 5)
        createProjectile(Projectile.LUCIO_SONIC_AMPLIFIER, eventPlayer, eventPlayer.getEyePosition() + Vector.DOWN * 0.5, directionFromAngles(eventPlayer.getHorizontalFacingAngle() + random.uniform(-1, 1), eventPlayer.getVerticalFacingAngle() + random.uniform(-1, 1)), Relativity.TO_WORLD, ModifyHealth.DAMAGE, getOppositeTeam(eventPlayer.getTeam()), 20, 2, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 50, 5)
        if not eventPlayer.isFiringPrimaryFire():
            break
        wait(0.04)
    wait(0.05)
    if ruleCondition:
        loop()


rule "Lucio: Reverse Amp":
    @Event eachPlayer
    @Team 1
    @Hero lucio
    @Condition eventPlayer.isUsingAbility2() == true
    @Condition eventPlayer.Talent2 == true

    if eventPlayer.isUsingAbility1():
        getPlayersInRadius(eventPlayer, 12, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.ROOTED, 0.75)
    else:
        damage(getPlayersInRadius(eventPlayer, 12, Team.2, LosCheck.SURFACES), eventPlayer, 30)
        wait(0.5)
        if ruleCondition:
            loop()


rule "D.Va: Voltage Grid":
    @Event eachPlayer
    @Team 1
    @Hero dva
    @Condition eventPlayer.isFiringSecondaryFire() == true
    @Condition eventPlayer.Talent1 == true

    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.TURQUOISE, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 2, 0.15)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.TURQUOISE, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 5, 0.15)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.TURQUOISE, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 8, 0.15)
    wait(0.3)
    damage(getPlayersInRadius(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 2, 2.5, Team.2), eventPlayer, 20)
    damage(getPlayersInRadius(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 5, 2.5, Team.2), eventPlayer, 20)
    damage(getPlayersInRadius(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 8, 2.5, Team.2), eventPlayer, 20)
    (getPlayersInRadius(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 2, 2.5, Team.2)).setStatusEffect(eventPlayer, Status.ROOTED, 0.4)
    (getPlayersInRadius(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 5, 2.5, Team.2)).setStatusEffect(eventPlayer, Status.ROOTED, 0.4)
    (getPlayersInRadius(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 8, 2.5, Team.2)).setStatusEffect(eventPlayer, Status.ROOTED, 0.4)
    if ruleCondition:
        loop()


rule "D.Va: Shooting Star":
    @Event playerDealtKnockback
    @Team 1
    @Hero dva
    @Condition eventAbility == Button.ABILITY_1
    @Condition eventPlayer.Talent2 == true

    damage(victim, eventPlayer, 30)
    victim.setStatusEffect(null, Status.BURNING, 3)
    victim.startDamageOverTime(eventPlayer, 3, 35)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, victim, 1)


rule "Zarya- Combusta-bubble - Detect Barrier Target":
    @Event eachPlayer
    @Team 1
    @Hero zarya
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility2() == true

    wait(0.025)
    eventPlayer.Ability_End = ([player for player in getPlayersInRadius(eventPlayer, 30, Team.1, LosCheck.SURFACES) if player.hasStatus(Status.INVINCIBLE) and player.isAlive() and eventPlayer.isInViewAngle(player, 103)])[0]
    waitUntil(not eventPlayer.isUsingAbility2(), 2)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.ORANGE, eventPlayer.Ability_End, 120)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.ORANGE, eventPlayer.Ability_End.getEyePosition(), 6)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.YELLOW, eventPlayer.Ability_End.getEyePosition(), 6)
    damage(getPlayersInRadius(eventPlayer.Ability_End.getEyePosition(), 6, Team.2, LosCheck.SURFACES), eventPlayer.Ability_End, 100)


rule "Zarya- Combusta-Bubble - Self bubble":
    @Event eachPlayer
    @Team 1
    @Hero zarya
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility1() == true

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    waitUntil(not eventPlayer.isUsingAbility1(), 2)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.ORANGE, eventPlayer, 120)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.ORANGE, eventPlayer.getEyePosition(), 6)
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.YELLOW, eventPlayer.getEyePosition(), 6)
    damage(getPlayersInRadius(eventPlayer, 6, Team.2, LosCheck.SURFACES), eventPlayer, 100)


rule "Zarya- Power Surge":
    @Event eachPlayer
    @Team 1
    @Hero zarya
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility1() == true

    if not eventPlayer.hasStatus(Status.INVINCIBLE):
        return
    damage(eventPlayer, null, 10000)
    wait(0.1)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, false)
    eventPlayer.forceButtonPress(Button.ABILITY_1)
    wait(3)


rule "Pharah: Head Trauma":
    @Event playerDealtKnockback
    @Team 1
    @Hero pharah
    @Condition eventPlayer.Talent1 == true
    @Condition eventAbility == Button.ABILITY_2
    @Condition victim.iv_is_portal == false
    @Condition victim != eventPlayer

    damage(victim, eventPlayer, 60)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.GRAY, victim, 1)
    if victim.getNormalizedHealth() > 0.5:
        return
    victim.setStatusEffect(null, Status.HACKED, 1)


rule "[Pharah] Weaponized Storm":
    @Event eachPlayer
    @Team 1
    @Hero pharah
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isFiringPrimaryFire() == true
    @Condition eventPlayer.getAmmo(false) % 6 == false

    eventPlayer.setProjectileSpeed(125)
    eventPlayer.Ability_End = raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 100, getLivingPlayers(Team.ALL), eventPlayer, true).getHitPosition()
    eventPlayer.Ability_Projectile1 = eventPlayer.getEyePosition()
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.ORANGE, eventPlayer.Ability_Projectile1, 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[7] = getLastCreatedEntity()
    chaseAtRate(eventPlayer.Ability_Projectile1, eventPlayer.Ability_End, 35)
    waitUntil(not eventPlayer.Talent2 or eventPlayer.Ability_Projectile1 == eventPlayer.Ability_End, 99999)
    destroyEffect(eventPlayer.Effects__[7])
    for eventPlayer.i in range(6):
        playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, eventPlayer.Ability_Projectile1 + vect(random.uniform(-1.5, 1.5), random.uniform(-0.5, 0.5), random.uniform(-1.5, 1.5)), 1)
        playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.TEAM_1, eventPlayer.Ability_Projectile1, 25)
        damage(getPlayersInRadius(eventPlayer.Ability_Projectile1, 4, Team.2, LosCheck.SURFACES), eventPlayer, 20)
        wait(0.1)
    eventPlayer.setProjectileSpeed(100)
    stopChasingVariable(eventPlayer.Ability_Projectile1)


rule "Junkrat: Pyromania":
    @Event playerDealtKnockback
    @Team 1
    @Hero junkrat

    if not eventPlayer.Talent1:
        return
    if eventAbility == Button.MELEE:
        return
    if victim == eventPlayer:
        return
    victim.startDamageOverTime(eventPlayer, 2, 20)
    victim.setStatusEffect(null, Status.BURNING, 2)


rule "Junkrat: Trigger Happy":
    @Event eachPlayer
    @Team 1
    @Hero junkrat
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.getAbilityCharge(Button.ABILITY_1) < 5

    wait(4, Wait.ABORT_WHEN_FALSE)
    eventPlayer.setAbilityCharge(Button.ABILITY_1, eventPlayer.getAbilityCharge(Button.ABILITY_1) + 1)
    if ruleCondition:
        loop()


rule "Roadhog: Stench":
    @Event eachPlayer
    @Team 1
    @Hero roadhog
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isAlive() == true

    createEffect(getAllPlayers(), Effect.RING, Color.VIOLET, eventPlayer, 8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    waitUntil(not eventPlayer.Talent1 or eventPlayer.isDead(), 99999)
    destroyEffect(eventPlayer.Effects__[1])
    wait(0.1)
    if ruleCondition:
        loop()


rule "Roadhog: Stench effect":
    @Event eachPlayer
    @Team 1
    @Hero roadhog
    @Condition distance(eventPlayer, getClosestPlayer(eventPlayer, Team.2)) <= 8
    @Condition eventPlayer.Talent1 == true

    damage(getPlayersInRadius(eventPlayer, 8, Team.2, LosCheck.SURFACES), eventPlayer, 9)
    wait(0.4)
    if ruleCondition:
        loop()


rule "Roadhog: Chainsnap":
    @Event eachPlayer
    @Team 1
    @Hero roadhog
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility1() == true

    eventPlayer.Damage_Dealt += 400
    waitUntil(not eventPlayer.Talent2 or not eventPlayer.isUsingAbility1(), 99999)
    eventPlayer.Damage_Dealt -= 400
    wait(0.1)
    if ruleCondition:
        loop()


rule "Roadhog: Chainsnap - Reset cooldown":
    @Event playerEarnedElimination
    @Team 1
    @Hero roadhog
    @Condition eventPlayer.Talent2 == true

    waitUntil(not eventPlayer.isUsingAbility1(), 3)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, false)


rule "Moira: Flourish":
    @Event eachPlayer
    @Team 1
    @Hero moira
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.Talent1 == true

    getPlayersInRadius(eventPlayer, 3, Team.2, LosCheck.SURFACES).startDamageOverTime(eventPlayer, 2, 25)
    getPlayersInRadius(eventPlayer, 3, Team.1, LosCheck.SURFACES).startHealingOverTime(eventPlayer, 2, 40)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.BLACK, eventPlayer.getPosition(), 6)
    wait(0.2)
    if ruleCondition:
        loop()


rule "[Moira] Catalyst - ":
    @Event eachPlayer
    @Team 1
    @Hero moira
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition eventPlayer.getAbilityResource(Button.PRIMARY_FIRE) > 8

    eventPlayer.Damage_Dealt += 300
    eventPlayer.healing_dealt_percent += 300
    eventPlayer.Move_Speed -= 40
    waitUntil(not eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) or not eventPlayer.Talent2 or not eventPlayer.isUsingUltimate(), 8)
    eventPlayer.Damage_Dealt -= 300
    eventPlayer.Move_Speed += 40
    eventPlayer.healing_dealt_percent -= 300
    wait(0.25)


rule "[Moira] Catalyst - ":
    @Event eachPlayer
    @Team 1
    @Hero moira
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition eventPlayer.getAbilityResource(Button.PRIMARY_FIRE) > 8

    eventPlayer.setAbilityResource(Button.PRIMARY_FIRE, eventPlayer.getAbilityResource(Button.PRIMARY_FIRE) - 15)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getEyePosition(), 10)
    damage(getPlayersInRadius(eventPlayer.getEyePosition(), 5, Team.2, LosCheck.SURFACES), eventPlayer, 35)
    wait(0.5)
    if ruleCondition:
        loop()


rule "Mei: Cold Snap":
    @Event eachPlayer
    @Team 1
    @Hero mei
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility1() == true

    wait(0.5, Wait.ABORT_WHEN_FALSE)
    waitUntil(not eventPlayer.isUsingAbility1(), 99999)
    damage(getPlayersInRadius(eventPlayer.getEyePosition(), 10, Team.2, LosCheck.SURFACES), eventPlayer, 35)
    getPlayersInRadius(eventPlayer.getEyePosition(), 10, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.FROZEN, 2)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.SKY_BLUE, eventPlayer.getPosition(), 20)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.AQUA, eventPlayer.getPosition() + vect(0, 1, false), 20)


rule "[Mei] Fractical Strike ":
    @Event eachPlayer
    @Team 1
    @Hero mei
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    eventPlayer.Damage_Dealt -= 60
    wait(0.3)
    eventPlayer.Damage_Dealt += 60
    if not ruleCondition:
        return
    for eventPlayer.i in range(5):
        createProjectile(Projectile.MEI_ICICLE, eventPlayer, eventPlayer.getEyePosition() + worldVector(vect(false, -0.25, false), eventPlayer, Transform.ROTATION), directionFromAngles(eventPlayer.getHorizontalFacingAngle() + random.uniform(-8, 8), eventPlayer.getVerticalFacingAngle() + random.uniform(-8, 8)), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 75, 2, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 115, 5, 0, 0, 5)
        createProjectile(Projectile.MEI_ICICLE, eventPlayer, eventPlayer.getEyePosition() + worldVector(vect(false, -0.25, false), eventPlayer, Transform.ROTATION), directionFromAngles(eventPlayer.getHorizontalFacingAngle() + random.uniform(-8, 8), eventPlayer.getVerticalFacingAngle() + random.uniform(-8, 8)), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 75, 2, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 115, 5, 0, 0, 5)


rule "[Winston] Next Generation":
    @Event playerDealtKnockback
    @Team 1
    @Hero winston
    @Condition eventPlayer.Talent1 == true
    @Condition eventAbility == Button.ULTIMATE

    eventPlayer.setUltCharge(eventPlayer.getUltCharge() + 5)
    damage(victim, eventPlayer, eventDamage)


rule "[Winston] Quake":
    @Event eachPlayer
    @Team 1
    @Hero winston
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility1() == true

    wait(0.25)
    waitUntil(eventPlayer.isOnGround(), 99999)
    if eventPlayer.isDead():
        return
    damage(getPlayersInRadius(eventPlayer, 7.5, Team.2, LosCheck.SURFACES_AND_ALL_BARRIERS), eventPlayer, 30)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.WHITE, eventPlayer.getPosition(), 15)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.GRAY, eventPlayer.getPosition(), 14)
    getPlayersInRadius(eventPlayer, 7.5, Team.2, LosCheck.SURFACES_AND_ALL_BARRIERS).setStatusEffect(eventPlayer, Status.STUNNED, 1)


rule "Reaper: Wraith Wrath":
    @Event eachPlayer
    @Team 1
    @Hero reaper
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.Talent1 == true

    wait(0.1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.cancelPrimaryAction()
    createEffect(getAllPlayers(), Effect.REAPER_WRAITH_FORM, Color.TEAM_1, eventPlayer, true, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    eventPlayer.Damage_Dealt += 30
    eventPlayer.Move_Speed += 50
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 3)
    waitUntil(eventPlayer.isDead() or not eventPlayer.Talent1, 3)
    eventPlayer.allowButton(Button.ABILITY_1)
    eventPlayer.setAbilityCooldown(Button.ABILITY_1, 8)
    eventPlayer.Damage_Dealt -= 30
    eventPlayer.Move_Speed -= 50
    destroyEffect(eventPlayer.Effects__[1])


rule "Reaper: Loom":
    @Event eachPlayer
    @Team 1
    @Hero reaper
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.Talent2 == true

    [player for player in eventPlayer.getPlayersInViewAngle(Team.2, 45) if isInLoS(eventPlayer, player)].setStatusEffect(eventPlayer, Status.HACKED, 2)
    damage([player for player in eventPlayer.getPlayersInViewAngle(Team.2, 45) if isInLoS(player, eventPlayer)], eventPlayer, 35)


rule "[Sojourn] Thunderout Kicks":
    @Event eachPlayer
    @Team 1
    @Hero sojourn
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility1() == true

    eventPlayer.Ability_Active = 1 + getTotalTimeElapsed()
    waitUntil(eventPlayer.getAbilityCooldown(Button.ABILITY_1) > 1 or eventPlayer.isHoldingButton(Button.JUMP), 1)
    if eventPlayer.Ability_Active < getTotalTimeElapsed():
        return
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.TURQUOISE, eventPlayer.getPosition(), 12)
    damage(getPlayersInRadius(eventPlayer, 6, Team.2, LosCheck.SURFACES), eventPlayer, 75)


rule "Sojourn: Matter Splatter":
    @Event playerDealtDamage
    @Team 1
    @Hero sojourn

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.SECONDARY_FIRE:
        return
    if not eventWasCriticalHit:
        return
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.TURQUOISE, victim.getEyePosition(), 4)
    damage(getPlayersInRadius(victim, 4, Team.2, LosCheck.SURFACES), eventPlayer, eventDamage)


rule "Soldier76: Triple Threat":
    @Event eachPlayer
    @Team 1
    @Hero soldier
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    createProjectile(Projectile.PHARAH_ROCKET, eventPlayer, null, directionFromAngles(eventPlayer.getHorizontalFacingAngle() + 4.5, eventPlayer.getVerticalFacingAngle()), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 60, 1, 2.5, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.RING_EXPLOSION_SOUND, 0, 60, 4)
    createProjectile(Projectile.PHARAH_ROCKET, eventPlayer, null, directionFromAngles(eventPlayer.getHorizontalFacingAngle() - 4.5, eventPlayer.getVerticalFacingAngle()), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 60, 1, 2.5, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.RING_EXPLOSION_SOUND, 0, 60, 4)


rule "Soldier76: Triple Threat - Init rocket":
    @Event eachPlayer
    @Team 1
    @Hero soldier
    @Condition eventPlayer.Talent1 == true

    eventPlayer.Ability_Projectile1 = eventPlayer.Ability_Available
    eventPlayer.Ability_Countdown = eventPlayer.Ability_End


rule "Soldier76: Espionage":
    @Event playerDealtHealing
    @Team 1
    @Hero soldier

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.ABILITY_2:
        return
    if not healee.soldier_espionage:
        healee.soldier_espionage = true


rule "Soldier76: Espionage - Allies effect":
    @Event eachPlayer
    @Team 1
    @Condition eventPlayer.soldier_espionage == true

    eventPlayer.soldier_espionage = false
    if eventPlayer.downed_start_t and len(eventPlayer.revivers) > 0:
        eventPlayer.revive_timer += 20
    eventPlayer.active_ab_is_smoked = true
    wait(0.4)


rule "Baptiste: Corrode":
    @Event eachPlayer
    @Team 1
    @Hero baptiste
    @Condition eventPlayer.isUsingAbility1() == true
    @Condition eventPlayer.Talent1 == true

    for eventPlayer.i in range(3):
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getPosition(), 20)
        damage(getPlayersInRadius(eventPlayer, 10, Team.2, LosCheck.SURFACES), eventPlayer, 25)
        getPlayersInRadius(eventPlayer, 10, Team.2, LosCheck.SURFACES).startDamageOverTime(eventPlayer, 5, 30)
        wait(0.2)


rule "[Baptiste] Aerial Ace - Jump":
    @Event eachPlayer
    @Team 1
    @Hero baptiste
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isCrouching() == true
    @Condition eventPlayer.hasStatus(Status.HACKED) == false

    waitUntil(not eventPlayer.isCrouching(), 99999)
    waitUntil(eventPlayer.isJumping(), 1)
    eventPlayer.Ability_Available = true
    wait(0.25)
    eventPlayer.Damage_Dealt += 50
    waitUntil(eventPlayer.isOnGround(), 99999)
    eventPlayer.Ability_Available = false
    eventPlayer.Damage_Dealt -= 50


rule "[Baptiste] Aerial Ace - Slower fall":
    @Event eachPlayer
    @Team 1
    @Hero baptiste
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.Ability_Available == true
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true
    @Condition (eventPlayer.hasStatus(Status.STUNNED) and eventPlayer.hasStatus(Status.HACKED)) == false
    @Condition eventPlayer.getAltitude() >= 1
    @Condition eventPlayer.getVerticalSpeed() < 0

    eventPlayer.setGravity(7.5)
    wait(0.333)
    playEffect(getPlayers(eventPlayer.getTeam()), DynamicEffect.RING_EXPLOSION, Color.ORANGE, eventPlayer.getPosition(), 2)
    if ruleCondition:
        loop()
    eventPlayer.setGravity(100)


rule "[Bastion]- Fusillade":
    @Event eachPlayer
    @Team 1
    @Hero bastion
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isInAlternateForm() == true
    @Condition eventPlayer.isFiringPrimaryFire() == true

    wait(0.5, Wait.ABORT_WHEN_FALSE)
    while eventPlayer.isFiringPrimaryFire() and eventPlayer.isInAlternateForm():
        createProjectile(Projectile.PHARAH_ROCKET, eventPlayer, eventPlayer.getEyePosition() + worldVector(vect(random.uniform(-0.4, 0.4), random.uniform(-0.4, -0.4), 0), eventPlayer, Transform.ROTATION), null, Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 25, 1, 1.5, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 35, 2)
        wait(0.25)


rule "[Bastion]: Trickshot":
    @Event playerDealtDamage
    @Team 1
    @Hero bastion

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.SECONDARY_FIRE:
        return
    if eventDamage > 30:
        return
    wait(0.5)
    eventPlayer.setAbilityCooldown(Button.SECONDARY_FIRE, eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) - 3)
    damage(getPlayersInRadius(victim, 5, Team.2, LosCheck.SURFACES), eventPlayer, 30)
    heal(eventPlayer, eventPlayer, 50)


rule "[Sombra] Stack Overflow":
    @Event eachPlayer
    @Team 1
    @Hero sombra
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility1() == true

    wait(0.8, Wait.ABORT_WHEN_FALSE)
    waitUntil(eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) or eventPlayer.isHoldingButton(Button.ABILITY_1) or eventPlayer.isHoldingButton(Button.ULTIMATE) or eventPlayer.isHoldingButton(Button.MELEE) or eventPlayer.isCommunicatingEmote(), 99999)
    eventPlayer.cancelPrimaryAction()
    createEffect(eventPlayer, Effect.MERCY_DAMAGE_BOOSTED, Color.TEAM_1, eventPlayer, 1)
    eventPlayer.Damage_Dealt += 50
    eventPlayer.Effects__[1] = getLastCreatedEntity()
    eventPlayer.Ability_Active = true
    waitUntil(eventPlayer.isDead() or not eventPlayer.Talent1, 3)
    eventPlayer.Damage_Dealt -= 50
    destroyEffect(eventPlayer.Effects__[1])
    eventPlayer.Ability_Active = false


rule "[Sombra] Stack Overflow - melee":
    @Event playerDealtKnockback
    @Team 1
    @Hero sombra
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.Ability_Active == true
    @Condition eventAbility == Button.MELEE

    victim.setStatusEffect(eventPlayer, Status.STUNNED, 1)
    damage(victim, eventPlayer, 40)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.PURPLE, victim, 0.25)


rule "[Sombra] Cyberattack":
    @Event eachPlayer
    @Team 1
    @Hero sombra
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility2() == true

    waitUntil(not eventPlayer.isUsingAbility2(), 99999)
    if eventPlayer.isHoldingButton(Button.INTERACT):
        return
    if eventPlayer.isDead():
        return
    wait(0.25)
    damage(getPlayersInRadius(eventPlayer, 8, Team.2, LosCheck.SURFACES), eventPlayer, 50)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer.getEyePosition(), 20000)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.PURPLE, eventPlayer.getEyePosition(), 8)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.VIOLET, eventPlayer.getEyePosition(), 16)
    getPlayersInRadius(eventPlayer.getEyePosition(), 8, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.HACKED, 2)


rule "Doomfist: Punch Card":
    @Event eachPlayer
    @Team 1
    @Hero doomfist
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isFiringSecondaryFire() == true

    wait(1, Wait.ABORT_WHEN_FALSE)
    eventPlayer.Damage_Dealt += 200
    waitUntil(eventPlayer.getAbilityCooldown(Button.SECONDARY_FIRE) > 0.1, 1)
    eventPlayer.Damage_Dealt -= 200


rule "[Doomfist] Fire Quake - Use seismic slam":
    @Event eachPlayer
    @Team 1
    @Hero doomfist
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility1() == true

    wait(0.5)
    waitUntil(eventPlayer.isOnGround() or not eventPlayer.isUsingAbility1(), 1000)
    if not eventPlayer.isUsingAbility1():
        return
    for eventPlayer.i in range(-5, 5):
        createProjectile(Projectile.REINHARDT_FIRE_STRIKE, eventPlayer, null, directionFromAngles(eventPlayer.getHorizontalFacingAngle() + eventPlayer.i * 5, eventPlayer.getVerticalFacingAngle()), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 50, 1, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 40, 4)
        wait(0.025)
    for eventPlayer.i in range(5, -5, -1):
        createProjectile(Projectile.REINHARDT_FIRE_STRIKE, eventPlayer, null, directionFromAngles(eventPlayer.getHorizontalFacingAngle() + eventPlayer.i * 5, eventPlayer.getVerticalFacingAngle()), Relativity.TO_WORLD, ModifyHealth.DAMAGE, Team.2, 50, 1, 0, DynamicEffect.GOOD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0, 40, 4)
        wait(0.025)


rule "Cassidy: Standoff":
    @Event eachPlayer
    @Team 1
    @Hero cassidy
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition eventPlayer.Talent1 == true

    wait(0.2)
    eventPlayer.Ability_Countdown = false
    chaseAtRate(eventPlayer.Ability_Countdown, 99999, 100)
    wait(0.5)
    chaseAtRate(eventPlayer.Ability_Countdown, 99999, 275)
    wait(0.5)
    chaseAtRate(eventPlayer.Ability_Countdown, 99999, 550)


rule "Cassidy: Standoff - Set root":
    @Event eachPlayer
    @Team 1
    @Hero cassidy
    @Condition eventPlayer.isUsingUltimate() == true
    @Condition eventPlayer.Talent1 == true

    wait(0.2)
    for eventPlayer.i in range(5):
        wait(1, Wait.ABORT_WHEN_FALSE)
        playEffect(eventPlayer, DynamicEffect.EXPLOSION_SOUND, Color.WHITE, eventPlayer, 15)
        ([player for player in eventPlayer.getPlayersInViewAngle(Team.2, 103) if player.getHealth() <= eventPlayer.Ability_Countdown and isInLoS(eventPlayer, player)]).setStatusEffect(eventPlayer, Status.ROOTED, 2)
    stopChasingVariable(eventPlayer.Ability_Countdown)


rule "Cassidy: Flashpoint":
    @Event playerDealtDamage
    @Team 1
    @Hero cassidy

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.ABILITY_2:
        return
    if eventDamage <= 25:
        wait(1.25)
        damage(getPlayersInRadius(victim, 8, Team.2, LosCheck.SURFACES), eventPlayer, 35)
        getPlayersInRadius(victim, 8, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.STUNNED, 2)


rule "Wrecking Ball: Orbital Strike":
    @Event eachPlayer
    @Team 1
    @Hero wreckingBall
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.getAbilityCooldown(Button.CROUCH) >= 0.1

    eventPlayer.Ability_Countdown = eventPlayer.getAltitude() * 10
    eventPlayer.Damage_Dealt += eventPlayer.Ability_Countdown
    waitUntil(eventPlayer.isOnGround() or eventPlayer.isDead(), 99999)
    wait(1)
    eventPlayer.Damage_Dealt -= eventPlayer.Ability_Countdown


rule "[Wrecking Ball] Orbital Strike":
    @Event playerDealtKnockback
    @Team 1
    @Hero wreckingBall

    if not eventPlayer.Talent1:
        return
    if eventAbility != Button.CROUCH:
        return
    victim.setStatusEffect(null, Status.STUNNED, 1.1)


rule "Wrecking Ball: Distort":
    @Event eachPlayer
    @Team 1
    @Hero wreckingBall
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isUsingAbility2() == true

    for eventPlayer.i in range(false, 4):
        playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, eventPlayer.getPosition(), 20)
        damage(getPlayersInRadius(eventPlayer, 10, Team.2, LosCheck.SURFACES), eventPlayer, 25)
        getPlayersInRadius(eventPlayer, 10, Team.2, LosCheck.SURFACES).setStatusEffect(eventPlayer, Status.HACKED, 2)
        wait(0.1)


rule "[Queen] Shout Very Loudly":
    @Event eachPlayer
    @Team 1
    @Hero junkerQueen
    @Condition eventPlayer.Talent1 == true
    @Condition eventPlayer.isUsingAbility1() == true

    getPlayersInRadius(eventPlayer, 15, Team.2, LosCheck.SURFACES).exclude(eventPlayer).startDamageOverTime(eventPlayer, 5, 8)
    eventPlayer.startHealingOverTime(eventPlayer, 5, 8 * len(getPlayersInRadius(eventPlayer, 15, Team.2, LosCheck.SURFACES)))


rule "[Queen] Grace Period":
    @Event playerDealtKnockback
    @Team 1
    @Hero junkerQueen

    if not eventPlayer.Talent2:
        return
    if eventAbility != Button.SECONDARY_FIRE:
        return
    if eventPlayer.isMeleeing():
        return
    damage(getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES), eventPlayer, 50)
    heal(eventPlayer, eventPlayer, 50)
    getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES).startDamageOverTime(eventPlayer, 3, 25)
    eventPlayer.startHealingOverTime(eventPlayer, 3, 25)
    getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES).exclude(victim).applyImpulse(directionTowards(victim, eventPlayer), 20, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES).exclude(victim).applyImpulse(Vector.UP, 6, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    getPlayersInRadius(victim, 6, Team.2, LosCheck.SURFACES).setStatusEffect(null, Status.ROOTED, 0.8)


rule "Kiriko: Shinobi Tactics":
    @Event playerDealtHealing
    @Team 1
    @Hero kiriko

    if not eventPlayer.Talent1:
        return
    damage(getPlayersInRadius(healee, 6, Team.2, LosCheck.SURFACES), eventPlayer, eventHealing * 2)


rule "Kiriko: Recession":
    @Event playerDealtKnockback
    @Team 1
    @Hero kiriko
    @Condition eventPlayer.Talent2 == true
    @Condition eventAbility == Button.ABILITY_2

    damage(victim, eventPlayer, 75)
    victim.setStatusEffect(eventPlayer, Status.FROZEN, 1.5)
    playEffect(getAllPlayers(), DynamicEffect.GOOD_EXPLOSION, Color.GRAY, victim, 1)


rule "Ramattra: Vile Dominance":
    @Event eachPlayer
    @Team 1
    @Hero ramattra
    @Condition eventPlayer.Talent1 == true
    @Condition (eventPlayer.isUsingAbility1() or eventPlayer.isUsingUltimate()) == true

    eventPlayer.Move_Speed += 30
    eventPlayer.Ability_Active = true
    waitUntil(not eventPlayer.isUsingAbility1() and not eventPlayer.isUsingUltimate() or not eventPlayer.Talent1, 99999)
    eventPlayer.Move_Speed -= 30
    eventPlayer.Ability_Active = false


rule "Ramattra: Vile Dominance":
    @Event playerDealtDamage
    @Team 1
    @Hero ramattra

    if not eventPlayer.Ability_Active:
        return
    if eventAbility == null:
        return
    if eventAbility == Button.ABILITY_2:
        return
    if eventAbility == Button.ULTIMATE:
        return
    victim.setStatusEffect(eventPlayer, Status.ROOTED, 0.75)


rule "Ramattra: Nether Sector":
    @Event playerDealtDamage
    @Team 1
    @Hero ramattra

    if not eventPlayer.Talent2:
        return
    if not eventPlayer.isOnGround():
        return
    if eventAbility != Button.ABILITY_2:
        return
    heal(eventPlayer, eventPlayer, 20)
    eventPlayer.setUltCharge(eventPlayer.getUltCharge() + 1)
    wait(0.1)


rule "Lifeweaver: Autumn Blossoms":
    @Event playerEarnedElimination
    @Team 1
    @Hero lifeweaver
    @Condition eventPlayer.Talent1 == true

    createProjectile(Projectile.ZARYA_PARTICLE_CANNON, null, victim.getPosition() + vect(0, 0.5, 0), Vector.UP, Relativity.TO_WORLD, ModifyHealth.HEAL, Team.1, victim.getMaxHealth(), 1, 0, DynamicEffect.BAD_EXPLOSION, DynamicEffect.EXPLOSION_SOUND, 0.025, 0, 8)


rule "Team 1 Lifeweaver: Increased damage":
    @Event eachPlayer
    @Team 1
    @Hero lifeweaver

    eventPlayer.Damage_Dealt += 30
    waitUntil(eventPlayer.perk_mystery_swap >= getTotalTimeElapsed() + 90 or not eventPlayer.Talent1, 99999)
    eventPlayer.Damage_Dealt -= 30


rule "Lifeweaver: Pressure Therapy":
    @Event eachPlayer
    @Team 1
    @Hero lifeweaver
    @Condition eventPlayer.Talent2 == true
    @Condition eventPlayer.isAlive() == true

    wait(0.5, Wait.ABORT_WHEN_FALSE)
    startDamageModification([player for player in getPlayers(Team.2) if eventPlayer.getPosition().y - player.getPosition().y >= 3 or dotProduct(player.getFacingDirection(), vectorTowards(player, eventPlayer)) < 0], eventPlayer, 150)
    eventPlayer.damage_mod[1] = getLastDamageModification()
    waitUntil(not eventPlayer.Talent2 or eventPlayer.isDead(), 99999)
    stopDamageModification(eventPlayer.damage_mod[1])
    wait(0.1)
    if ruleCondition:
        loop()
