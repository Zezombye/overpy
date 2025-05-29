settings {
    "main": {
        "description": "Overwatch Uno v5.1 | 22FJJ",
        "modeName": "Uno"
    },
    "lobby": {
        "allowPlayersInQueue": true,
        "enableMatchVoiceChat": true,
        "spectatorSlots": 6,
        "returnToLobby": "never"
    },
    "gamemodes": {
        "ffa": {
            "disabledMaps": [
                "castillo",
                "chateauGuillard",
                "chateauGuillardHalloween",
                "kanezaka",
                "malevento",
                "necropolis",
                "route66",
                "workshopExpanse",
                "workshopExpanseNight",
                "workshopGreenScreen"
            ]
        },
        "general": {
            "enableEnemyHealthBars": false,
            "gamemodeStartTrigger": "immediately"
        }
    },
    "heroes": {
        "allTeams": {
            "general": {
                "passiveUltGen%": 0
            }
        }
    }
}

#Global variables

globalvar Players 0
globalvar MapPosition 1
globalvar DeckSymbols 2
globalvar DeckColors 3
globalvar DiscardPileSymbol 4
globalvar DiscardPileColor 5
globalvar DiscardPileColorEffectIDs 6
globalvar DiscardPileSymbolTextID 7
globalvar IsCurrentlyPlayingAnimation 8
globalvar CurrentPenalty 9
globalvar PlayerToClearHand 10
globalvar TurnTimeRemaining 11
globalvar PlayerToDealTo 12
globalvar DirectionOfPlay 13
globalvar DirectionOfPlayTimer 14
globalvar HighlightEffectPulseTimer 15
globalvar HighlightBeamEffectAngle 16
globalvar HighlightBeamEffectTargetAngle 17
globalvar DiscardPileSymbolMovementTimer 18
globalvar DiscardPileColorMovementTimer 19
globalvar DiscardPileLastColor 20
globalvar SwapCardEffectPlayers 21
globalvar ShouldShowSpecialCardEffects 22
globalvar SpecialCardSoundEffectVolume 23
globalvar LastPlayedCardPlayer 24
globalvar LastPlayedCardPosition 25
globalvar TempPlayerIndex 26
globalvar TempNumber 27
globalvar TempString 28
globalvar TempColorIndex 29
globalvar TempSymbolIndex 30
globalvar TempHero 31
globalvar IS_HOLE_MAP 32
globalvar COLORS 33
globalvar WILD_CARD_SYMBOLS 34
globalvar COLORED_CARD_SYMBOLS 35
globalvar PENALTY_CARD_SYMBOLS 36
globalvar SETTING_TURN_TIME_LIMIT 37
globalvar SETTING_JUMP_INS 38
globalvar SETTING_SWAP_CARDS 39
globalvar SETTING_SWAP_ALL_CARD 40
globalvar SETTING_MULTIPLY_CARD 41
globalvar SETTING_COPYCAT_CARD 42
globalvar SETTING_SHUFFLE_CARD 43
globalvar SETTING_AMOUNT_OF_COLORS 44
globalvar SETTING_AMOUNT_OF_NUMBERS 45
globalvar SETTING_DEBUG 46
globalvar SETTING_DEBUG_BOTS 47
globalvar SETTING_COLOR_ORDER 48
globalvar SETTING_ICON_CARDS 49
globalvar LastPenalty 50
globalvar TempMapPosition 53
globalvar BoundaryRadius 58
globalvar CURRENT_ADMIN 60
globalvar DeckSymbolsCopy 62
globalvar DeckColorsCopy 63
globalvar StartingAngle 64
globalvar SETTING_INSTANT_PLAY 65
globalvar SETTING_CHEAT_ENABLED 66
globalvar BoundaryForce 67
globalvar SPECIAL_CARD_SYMBOLS 69
globalvar NUMBER_CARD_SYMBOLS 70
globalvar SETTING_AMOUNT_OF_STARTING_CARDS 71
globalvar PlayersSelectedForDisplacement 72
globalvar WHITE_CARD_SYMBOLS 74
globalvar PlayersSelectedForDisplacementID 75


#Player variables

playervar SelectedCardIndex 0
playervar HandSymbols 1
playervar HandColors 2
playervar HandRenderQueueSymbols 3
playervar HandRenderQueueColors 4
playervar HandHUDTexts 5
playervar HandHUDTextSortOrders 6
playervar HandSortOrderCounter 7
playervar AmountOfRequestedCards 8
playervar IsCreatingHUDTexts 9
playervar MapPosition 10
playervar JumpInCooldown 11
playervar SelectedPlayerQueue 12
playervar SelectedPlayerHighlightPosition 13
playervar IsUsingCamera 14
playervar TempSortedHandSymbols 15
playervar TempSortedHandColors 16
playervar TempSymbols 17
playervar CheatsEnabled 18
playervar Angle 19
playervar IsSpectating 20
playervar IsSpectatorInQueueToEnter 21
playervar TempColor 24
playervar TempNumber 25


#Subroutine names

subroutine AddColoredSymbolsToDeck 0
subroutine AddUncoloredSymbolsToDeck 1
subroutine DrawCardsAndAdvanceTurn 2
subroutine DealRequestedCards 3
subroutine TransferCardToDiscardPile 4
subroutine ChangeActivePlayer 5
subroutine ChangeActivePlayer_Default 6
subroutine ChangeActivePlayer_Skip 7
subroutine ChangeActivePlayer_Reverse 8
subroutine ChangeActivePlayer_Penalty 9
subroutine ChangeActivePlayer_Swap 10
subroutine ChangeActivePlayer_SwapAll 11
subroutine ChangeActivePlayer_Shuffle 12
subroutine UpdateWildCardColor 13
subroutine ClearHandHUDTexts 14
subroutine PlaySwapCardAnimation 15
subroutine ToggleFloatingCamera 16
subroutine DestroyDiscardPileCardEffects 17
subroutine SortHandCards 18
subroutine PlaySpecialCardAnimation 19
subroutine UpdateHighlightBeamPosition 20
subroutine PlayDrawCardsEffects 21
subroutine DiscardCardCheat 22
subroutine TransferToDeckCheat 28
subroutine AddRandomNumberCardCheat 29
subroutine CompletePlayerPositionSwap 30
subroutine SetPlayerSelectionQueueForAll 31
subroutine AddAnotherSetOfCardsToDeck 32
subroutine InitPlayerStartingVariables 33
subroutine UpdateMapPositionForAll 34
subroutine AddNewPlayerToPlayers 35
subroutine InitMapPositionForAll 36
subroutine UpdateColorCheat 37


rule "[Game settings]":
    #The amount of time in seconds a player has to complete their turn. To disable the time limit, set this variable to 0.
    SETTING_TURN_TIME_LIMIT = createWorkshopSettingInt("General settings", "Turn time limit", 30, 0, 120)
    #When set to True, players can play a card with exactly the same symbol and color as the top card of the discard pile even when it is not their turn to play
    SETTING_JUMP_INS = createWorkshopSettingBool("General settings", "Allow jump-ins", true)
    #A single ×2 card is added to the deck when set to True. Multiplies the amount of cards the next player has to draw by 2, acts as a +2 if there is no draw card on the discard pile.
    SETTING_MULTIPLY_CARD = createWorkshopSettingBool("Special cards", "Enable ×2 card", true)
    #A single swap card for every color is added to the deck when set to True. Swap cards allow players to swap their hand with another player
    SETTING_SWAP_CARDS = createWorkshopSettingBool("Special cards", "Enable SWAP cards", true)
    #2 copycat cards are added to the deck when set to True. Copies the last played card when played
    SETTING_COPYCAT_CARD = createWorkshopSettingBool("Special cards", "Enable COPYCAT card", true)
    #A single Swap All card is added to the deck when set to true. When played, all hands are moved in the direction of play
    SETTING_SWAP_ALL_CARD = createWorkshopSettingBool("Special cards", "Enable SWAP ALL card", false)
    #A single Shuffle card is added to the deck when set to true. When played, all hands are shuffled. Each player keeps the same amount of card
    SETTING_SHUFFLE_CARD = createWorkshopSettingBool("Special cards", "Enable SHUFFLE card", false)
    #The amount of card colors. Can support up to 10 colors (not recommended). Greater card variety increases the average amount of cards a player has. This increases the chance of reaching the text limit, meaning no new cards are dealt until some are discarded
    SETTING_AMOUNT_OF_COLORS = createWorkshopSettingInt("Miscellaneous settings", "Amount of colors (A large amount of colors can break the game)", 4, 1, 10)
    #The amount of card numbers (including 0). No technical limit, although the total size of the deck cannot exceed 1000 cards (If you try you'll probably just crash anyways). Larger amounts may make it more difficult to finish a game (see 'amount of colors').
    SETTING_AMOUNT_OF_NUMBERS = createWorkshopSettingInt("Miscellaneous settings", "Amount of card numbers (a large amount of cards can break the game)", 10, 1, 20)
    #The colors used in the deck. Only the first <SETTING_AMOUNT_OF_COLORS> colors are used for cards. To change the default colors of cards, move the desired colors to the top of the list using the arrows. (White is reserved for uncolored cards)
    SETTING_COLOR_ORDER = [l"Red", l"Yellow", l"Green", l"Blue", l"Purple", "Orange", "Aqua", "Lime Green", "Turquoise", "Sky Blue"]
    #Use icons instead of numbers (10 icons are used regardless of the 'amount of numbers' setting)
    SETTING_ICON_CARDS = createWorkshopSettingBool("Miscellaneous settings", "Use icons instead of numbers", false)
    #The amount of cards players start with. This number should be at most (121 - 2 * <amount of players>) / <amount of players>, otherwise some cards may be invisible. (Note: The deck should contain enough cards to deal all players their hands)
    SETTING_AMOUNT_OF_STARTING_CARDS = createWorkshopSettingInt("Miscellaneous settings", "Amount of starting cards (a large amount of cards can cause the game to break)", 7, 1, 20)
    #When set to true, players joining after the game has started are dealt a hand and given permission to join the game. When set to false, only players at the start of the round can play, players joining late are forced to spectate until the next round.
    SETTING_INSTANT_PLAY = createWorkshopSettingBool("General settings", "Allow mid-game joining", true)
    #Enables various debugging features when set to true
    SETTING_DEBUG = false
    #Number of dummy bots to spawn, for debugging purposes
    SETTING_DEBUG_BOTS = 0


rule "- SETUP -":
    @Condition "You guys wanna play UNO real quick and I can record it and make that my upload tonight?" == true
    @Condition "I don't have UNO so go **** off" == true
    @Condition "Everyone has UNO dip****, it came free with your ****ing Xbox" == true
    @Condition "I didn't get it, I have the oldest Xbox known to man" == true
    @Condition "No you don't, I bought mine on day one you ****ing ****" == true
    @Condition "Well, mine didn't have it" == true
    @Condition "YOU HAVE UNOOOO YOU ****ING ****" == true
    @Condition "I don't have it you ****ing ******" == true
    @Condition "YOU HAVE UNOOOOOOO" == true
    @Condition "I DON'T ****ING HAVE UNO MOTHER******" == true
    @Condition "GO TO IT IN THE ARCADE AND YOU'LL BE ABLE TO DOWNLOAD IT FOR FREE, YOU DUMB MOTHER******" == true
    @Condition "I DON'T HAVE TWO, I DON'T HAVE THREE, I DON'T HAVE ****ING FOUR, I DON'T HAVE SEVEN, EIGHT, NINE, TEN, OR ELEVEN" == true
    @Condition "YOU DON'T KNOW A ******* THING, IT'S ****ING UNO, IT'S FREE" == true
    @Condition "I DON'T HAVE UNOOO" == true
    @Condition "Is this going on youtube?" == true
    @Disabled
    @Delimiter



rule "[Setup] init constants & starting variables":
    #Check if icons are used as symbols
    if SETTING_ICON_CARDS:
        #Set the number of cards to 10
        SETTING_AMOUNT_OF_NUMBERS = 10
    #Give the first turn at least one minute to play
    TurnTimeRemaining = max(60, SETTING_TURN_TIME_LIMIT) if SETTING_TURN_TIME_LIMIT else 0
    #Start chasing the turn time remaining variable to 0 when the match starts
    chaseAtRate(TurnTimeRemaining, 0, isGameInProgress())
    #Setup constants
    COLORS = [i for i in [l"Red", "Orange", l"Yellow", "Lime Green", l"Green", "Turquoise", "Aqua", "Sky Blue", l"Blue", l"Purple"] if i in SETTING_COLOR_ORDER.slice(0, SETTING_AMOUNT_OF_COLORS)]
    WILD_CARD_SYMBOLS = ["+4", "Wild"]
    PENALTY_CARD_SYMBOLS = ["+2", "+4"]
    WHITE_CARD_SYMBOLS = ["+4", "×2", "Copycat", "Shuffle", "Swap-All", "Wild"]
    NUMBER_CARD_SYMBOLS = []
    COLORED_CARD_SYMBOLS = []
    #Check if icon cards are enabled
    if not SETTING_ICON_CARDS:
        #Add every possible number
        for TempSymbolIndex in range(SETTING_AMOUNT_OF_NUMBERS):
            NUMBER_CARD_SYMBOLS.append("{0}".format(TempSymbolIndex))
            COLORED_CARD_SYMBOLS.append("{0}".format(TempSymbolIndex))
        SPECIAL_CARD_SYMBOLS = ["+2", "+4", "×2", "Copycat", "Reverse", "Shuffle", "Skip", "Swap", "Swap-All", "Wild"]
    else:
        #Add every possible icon
        COLORED_CARD_SYMBOLS.append([0, iconString(Icon.POISON), iconString(Icon.MOON), iconString(Icon.FIRE), iconString(Icon.DIZZY), iconString(Icon.BOLT), iconString(Icon.HEART), iconString(Icon.DIAMOND), iconString(Icon.SPADE), iconString(Icon.CLUB)])
    #Setup helper variables for reverse card effects
    DirectionOfPlay = -1
    chaseAtRate(DirectionOfPlayTimer, 0, 1.5)
    #Set a variable for copycat messages
    LastPlayedCardPlayer = "the discard pile"
    BoundaryRadius = 0.95
    BoundaryForce = 0.85


rule "[Setup] init gamemode settings":
    #Disable built-in game mode settings
    disableGamemodeCompletion()
    disableMusic()
    disableScoring()
    disableAnnouncer()


rule "[Setup] init map location":
    #Black Forest
    if getCurrentMap() in [Map.BLACK_FOREST, Map.BLACK_FOREST_WINTER]:
        MapPosition = random.choice([vect(-20.9, 12.5, 7.52), vect(15.377, 11.8, -19.31)])
        #Blizzard World
    elif getCurrentMap() == Map.BLIZZ_WORLD or getCurrentMap() == Map.BLIZZ_WORLD_WINTER:
        MapPosition = random.choice([vect(-54.44, -0.2, 110.26), vect(-45.93, -0.2, 78.22), vect(-122.04, 0, 110.5), vect(-49.87, 4.78, 93.18), vect(-9.639, -3.8, -13.73), vect(8.759, -3.59, -28.836)])
        #Dorado
    elif getCurrentMap() == Map.DORADO:
        MapPosition = random.choice([vect(184.13, 14.1, 40.75), vect(131.118, 11.3, 26.112), vect(26.527, 4.2, -15.76), vect(-21.188, 0, -10.738)])
        #Ecopoint: Antarctica
    elif getCurrentMap() == Map.ECOPOINT_ANTARCTICA or getCurrentMap() == Map.ECOPOINT_ANTARCTICA_WINTER:
        MapPosition = random.choice([vect(6.46, 7.1, 35.44), vect(6.905, 7.15, -34.932), vect(12.222, 4.4, 0.173)])
        #Eichenwalde
    elif getCurrentMap() == Map.EICHENWALDE or getCurrentMap() == Map.EICHENWALDE_HALLOWEEN:
        MapPosition = random.choice([vect(86.89, 12.7, -72.41), vect(119.27, 8.77, -42.85), vect(11.72, 5.86, -72.57)])
        #Hanamura
    elif getCurrentMap() == Map.HANAMURA or getCurrentMap() == Map.HANAMURA_WINTER:
        MapPosition = random.choice([vect(62.6, -1.6, 14.48), vect(-11.53, -0.82, -85.4), vect(-40.08, 0.7, -108.303)])
        #Havana
    elif getCurrentMap() == Map.HAVANA:
        MapPosition = random.choice([vect(55.651, 6.28, -83.225), vect(88.873, 4.3, -66.162), vect(140.027, 6.28, -46.503), vect(186.001, 11.4, -46.504), vect(-11.381, 6, -79.2), vect(-35.694, 6.1, -54.354), vect(-60.034, 19.1, -17.452), vect(-72.769, 4.1, -51.278), vect(-118.81, 4.1, -91.384), vect(18.913, 5.25, -29.269)])
        #Hollywood
    elif getCurrentMap() == Map.HOLLYWOOD or getCurrentMap() == Map.HOLLYWOOD_HALLOWEEN:
        MapPosition = random.choice([vect(-12.77, -0.1, 57.88), vect(-15.55, 1.65, 3.1), vect(-33.2, 1.8, -129.01), vect(-4.27, 2.1, -98.28)])
        #Horizon Lunar Colony
    elif getCurrentMap() == Map.HORIZON_LUNAR_COLONY:
        MapPosition = random.choice([vect(94.03, 12.7, -71.21), vect(54.08, 9, -89.53), vect(-24.74, 2.9, -121.35), vect(-3.586, 8.25, -0.908), vect(-52.768, 4.93, -173.594)])
        #Ilios Lighthouse
    elif getCurrentMap() == Map.ILIOS_LIGHTHOUSE:
        MapPosition = random.choice([vect(313.57, -24.62, -75.12), vect(344.49, -24.62, -3.05), vect(336.39, -25.4, 22.87), vect(290.22, -25.4, -88.83), vect(268.898, -23.67, -94.066), vect(324.469, -23.72, 40.321), vect(312.399, -24.69, 63.545), vect(244.193, -24.69, -101.824)])
        #Ilios Ruins
    elif getCurrentMap() == Map.ILIOS_RUINS:
        MapPosition = random.choice([vect(-74.15, 62.75, -161.19), vect(62.03, 60.4, -156.48), vect(28.4, 57.4, -156.55)])
        #Ilios Well
    elif getCurrentMap() == Map.ILIOS_WELL:
        MapPosition = vect(-208.525, 0, -16.525)
        #The area of play is centered on the well. Setting this constant to True lowers the light shaft indicating the color of the discard pile card
        IS_HOLE_MAP = true
        #King's Row
    elif getCurrentMap() == Map.KINGS_ROW or getCurrentMap() == Map.KINGS_ROW_WINTER:
        MapPosition = random.choice([vect(-92.4, 0.91, -9.79), vect(-20.2, -0.11, -32.38), vect(-149, -2.86, 24.26), vect(-179.255, 0.2, 37.547)])
        #Lijiang Control Center
    elif getCurrentMap() == Map.LIJIANG_CONTROL_CENTER or getCurrentMap() == Map.LIJIANG_CONTROL_CENTER_LNY:
        MapPosition = random.choice([vect(48.34, 265, 329.42), vect(-76.674, 264.83, 359.171), vect(-48.464, 265, 329.667), vect(85.037, 264.75, 367.254)])
        #Lijiang Garden
    elif getCurrentMap() == Map.LIJIANG_GARDEN or getCurrentMap() == Map.LIJIANG_GARDEN_LNY:
        MapPosition = random.choice([vect(42.56, 95, 150), vect(-7.214, 94.3, 133.743), vect(-42.661, 95.29, 150.278)])
        #Lijiang Night Market
    elif getCurrentMap() == Map.LIJIANG_NIGHT_MARKET or getCurrentMap() == Map.LIJIANG_NIGHT_MARKET_LNY:
        MapPosition = random.choice([vect(1, -1.1, -31.9), vect(1, -0.5, -61)])
        #Nepal Sanctum
    elif getCurrentMap() == Map.NEPAL_SANCTUM:
        MapPosition = random.choice([vect(83.25, 128.47, 0), vect(81, 129.5, -106), vect(51.208, 130.2, 0), vect(83.091, 130.1, 69.812)])
        #Nepal Shrine
    elif getCurrentMap() == Map.NEPAL_SHRINE:
        MapPosition = random.choice([vect(-43.19, 14.97, 123.42), vect(-43.09, 15.7, 109.962), vect(-63.382, 10.3, 14.262), vect(-41.581, 15.25, -69.886)])
        #Nepal Village
    elif getCurrentMap() == Map.NEPAL_VILLAGE or getCurrentMap() == Map.NEPAL_VILLAGE_WINTER:
        MapPosition = random.choice([vect(-195, -93.9, 0), vect(-172.919, -98.85, 73.714), vect(-192.026, -93.8, 14.091), vect(-192.677, -93.8, -14.382)])
        #Oasis City Center
    elif getCurrentMap() == Map.OASIS_CITY_CENTER:
        MapPosition = random.choice([vect(128, 2.05, 290), vect(89.623, 1.25, 292.299), vect(188.576, 2.2, 230.769)])
        #Oasis Gardens
    elif getCurrentMap() == Map.OASIS_GARDENS:
        MapPosition = random.choice([vect(81.7, 6.5, -308.38), vect(202.33, 6.5, -188.08), vect(90.234, 2.6, -245.388), vect(141.218, 7.64, -247.442), vect(139.37, 2.6, -195.984), vect(180.123, 8.15, -208.561), vect(101.628, 8.15, -287.053)])
        #Oasis University
    elif getCurrentMap() == Map.OASIS_UNIVERSITY:
        MapPosition = vect(-188, 15.1, 0)
        #The area of play is centered around the hole. The light shaft should be lowered
        IS_HOLE_MAP = true
        #Paris
    elif getCurrentMap() == Map.PARIS:
        MapPosition = random.choice([vect(-53.57, 12.13, 12.43), vect(-97.114, 11.15, -36.356)])
        #Petra
    elif getCurrentMap() == Map.PETRA:
        MapPosition = vect(4.44, -12.5, 46.93)
        #Temple of Anubis
    elif getCurrentMap() == Map.TEMPLE_OF_ANUBIS:
        MapPosition = random.choice([vect(-45.46, 2, 43.4), vect(-0.61, -1.5, -11.144)])
        #Volskaya Industries
    elif getCurrentMap() == Map.VOLSKAYA:
        MapPosition = random.choice([vect(-57.79, -4.09, 71.08), vect(-94.3, -1.9, 49.26), vect(-13.68, -3.59, 90.21), vect(-11.175, -6.8, 0.911), vect(-121.529, 6.15, 32.678)])
        #Workshop Maps
    elif getCurrentMap() in [Map.WORKSHOP_CHAMBER, Map.WORKSHOP_EXPANSE, Map.WORKSHOP_EXPANSE_NIGHT, Map.WORKSHOP_ISLAND, Map.WORKSHOP_ISLAND_NIGHT]:
        MapPosition = vect(0, 0, 0)
        #Unsupported maps
    else:
        wait(5)
        destroyAllEffects()
        destroyAllInWorldTexts()
        destroyAllHudTexts()
        hudHeader(getAllPlayers(), "{0}This map is currently not supported (there is not enough space, or this is a new map){0}".format(iconString(Icon.WARNING) if getTotalTimeElapsed() % 1 < 0.5 else l""), HudPosition.TOP, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)


rule "[Setup] create deck":
    #Initialize the arrays
    DeckSymbols = []
    DeckColors = []
    #Loop once for every color
    for TempColorIndex in range(len(COLORS)):
        #Add all cards for the current color
        AddColoredSymbolsToDeck()
        #Set the color of all newly added symbols to the current color in the loop
        while len(DeckColors) < len(DeckSymbols):
            #The current color is added to the deckColors array until all newly added cards have been assigned a color
            DeckColors.append(COLORS[TempColorIndex])
    #Add all uncolored symbols
    AddUncoloredSymbolsToDeck()
    #Set the color of all newly added symbols to be uncolored
    while len(DeckColors) < len(DeckSymbols):
        DeckColors.append(l"White")
    #Select a random index of a card in the deck to use as the starting card
    TempNumber = random.randint(0, len(DeckSymbols) - 1)
    #Set the starting card to the selected card
    DiscardPileSymbol = DeckSymbols[TempNumber]
    DiscardPileColor = DeckColors[TempNumber]
    DiscardPileLastColor = DiscardPileColor
    #Remove the starting card from the deck
    del DeckSymbols[TempNumber]
    del DeckColors[TempNumber]
    #Save a copy of the created deck
    DeckSymbolsCopy = DeckSymbols
    DeckColorsCopy = DeckColors


rule "[Setup] init player status effects & buttons":
    @Event eachPlayer

    #Players are invincible
    eventPlayer.setStatusEffect(null, Status.INVINCIBLE, 9999)
    #Disable various buttons
    eventPlayer.disallowButton(Button.PRIMARY_FIRE)
    eventPlayer.disallowButton(Button.SECONDARY_FIRE)
    eventPlayer.disallowButton(Button.ABILITY_1)
    eventPlayer.disallowButton(Button.ABILITY_2)
    eventPlayer.disallowButton(Button.ULTIMATE)


rule "[Setup] init non-spectating player":
    @Event eachPlayer
    #The array of players has not yet been initialized, players joining late can not join in. This player is not a spectator
    @Condition Players == null

    #Initialize player starting variables
    InitPlayerStartingVariables()
    #Set current player mode to non-spectator since they were present during the start of the round
    eventPlayer.IsSpectating = false
    eventPlayer.IsSpectatorInQueueToEnter = false


rule "[Setup] init spectating player":
    @Event eachPlayer
    #The array of players has already been initialized, this player can no longer join
    @Condition Players != null
    #The event player is a new player
    @Condition eventPlayer in Players == false

    #Spectating players use the floating camera by default
    ToggleFloatingCamera()
    #Spectating players are invisible
    eventPlayer.setInvisibility(Invis.ALL)
    #Spectating players can not interact with other players
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    #Set the player mode to spectator
    eventPlayer.IsSpectating = true
    eventPlayer.IsSpectatorInQueueToEnter = false


rule "[Setup][Instant Play] skip assemble heroes and start match":
    #game is in assemble heroes phase
    @Condition isAssemblingHeroes() == true
    #if instant play is enabled
    @Condition SETTING_INSTANT_PLAY == true

    #skip assemble heroes and begin the match
    setMatchTime(8)


rule "[Setup][Instant Play] add spectating player to queue of people entering the game":
    @Event eachPlayer
    #The array of players has already been initialized, this player can no longer join
    @Condition Players != null
    #The event player is a new player
    @Condition eventPlayer in Players == false
    #current player is a spectator
    @Condition eventPlayer.IsSpectating == true
    #current player is not in queue to join the game
    @Condition eventPlayer.IsSpectatorInQueueToEnter == false
    #jump is being pressed to enter
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true
    #instant play is enabled
    @Condition SETTING_INSTANT_PLAY == true

    #put the player in queue to join the game as soon as possible (after no animations are playing)
    eventPlayer.IsSpectatorInQueueToEnter = true


rule "[Setup][Instant Play] init spectating player entering the game":
    @Event eachPlayer
    #The array of players has already been initialized, this player can no longer join
    @Condition Players != null
    #The event player is a new player
    @Condition eventPlayer in Players == false
    #player is spectator
    @Condition eventPlayer.IsSpectating == true
    #player is in queue to join the game
    @Condition eventPlayer.IsSpectatorInQueueToEnter == true
    #no animation are currently playing
    @Condition IsCurrentlyPlayingAnimation == false
    #instant play is enabled
    @Condition SETTING_INSTANT_PLAY == true

    #Check whether the player is already using the floating camera
    if eventPlayer.IsUsingCamera:
        #stop the floating camera
        ToggleFloatingCamera()
    #add new player to the list of players
    AddNewPlayerToPlayers()
    #initialize their starting variables
    InitPlayerStartingVariables()
    #update map position and selection queue for all players
    SetPlayerSelectionQueueForAll()
    UpdateMapPositionForAll()
    #Move the highlight beam
    UpdateHighlightBeamPosition()
    #player is no longer a spectator and thus no longer invisible and can interact with other players
    eventPlayer.setInvisibility(Invis.NONE)
    eventPlayer.clearStatusEffect(Status.PHASED_OUT)
    #player no longer a spectator or in queue to join
    eventPlayer.IsSpectating = false
    eventPlayer.IsSpectatorInQueueToEnter = false


rule "[Setup] init players when match starts":
    #The game has started
    @Condition isGameInProgress() == true
    #The array of players has not been initialized yet
    @Condition Players == null
    #At least one player is playing
    @Condition len(getAllPlayers()) > 0
    #All players have initialized their hands
    @Condition [player for player in getAllPlayers() if len(player.HandSymbols) == SETTING_AMOUNT_OF_STARTING_CARDS] == getAllPlayers()

    #Initialize the array of players
    Players = random.shuffle(getAllPlayers())
    #Select a random offset for the first player's position
    StartingAngle = random.randint(0, 360)
    #initialize map position and selection queue for all players present during startup
    InitMapPositionForAll()
    SetPlayerSelectionQueueForAll()


rule "[Setup] init non-spectating players facing direction and position after their map position has been initialized":
    @Event eachPlayer
    #The map is valid
    @Condition MapPosition != null
    #The position of this player has been initialized
    @Condition eventPlayer.MapPosition != null
    #The player has spawned
    @Condition eventPlayer.hasSpawned() == true

    #Teleport the player back to their position
    eventPlayer.teleport(eventPlayer.MapPosition)
    #Reset the facing of the player towards the center
    eventPlayer.setFacing(MapPosition - eventPlayer.MapPosition, Relativity.TO_WORLD)


rule "[Setup][Debug] init debug settings":
    #Check if debug is disabled
    if not SETTING_DEBUG:
        #Disable the inspector
        disableInspector()
    #Loop until all debug bots have spawned
    while SETTING_DEBUG_BOTS:
        #Wait between spawing multiple bots
        wait(2)
        #Spawn a dummy bot
        createDummy(random.choice(getAllHeroes()), Team.ALL, -1, MapPosition, Vector.UP)
        #Decrease the amount of bots that need to be spawned
        SETTING_DEBUG_BOTS--


rule "[Setup][Effects] init match time":
    #Hero selection is over
    @Condition isGameInProgress() == true

    setMatchTime(1800)


rule "[Setup][Effects] init highlight beam effects":
    #Chase the highlight beam position to move towards the active player
    chaseAtRate(HighlightBeamEffectAngle, HighlightBeamEffectTargetAngle, 180)
    #Chase a variable at an increasing rate depending on how much time is left. Used to render the pulsating effects. Is reset everytime a move is made
    chaseAtRate(HighlightEffectPulseTimer, 10000, 1 + (4 * (((SETTING_TURN_TIME_LIMIT - TurnTimeRemaining) / SETTING_TURN_TIME_LIMIT) ** 4)))
    #Create a white light shaft effect at the position of the active player, visible to all players when there is no penalty
    createEffect(getAllPlayers() if CurrentPenalty == 0 else [], Effect.LIGHT_SHAFT, Color.WHITE, vect(0, -3, 0) + MapPosition + 6 * directionFromAngles(HighlightBeamEffectAngle, 0), 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create a white ring intersection effect at the position of the active player visible to all players when there is no penalty
    createEffect(getAllPlayers() if CurrentPenalty == 0 else [], Effect.RING, Color.WHITE, MapPosition + 6 * directionFromAngles(HighlightBeamEffectAngle, 0), 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create a pulsating white ring intersection effect at the position of the active player visible to all players when there is no penalty
    createEffect(getAllPlayers() if CurrentPenalty == 0 else [], Effect.RING, Color.WHITE, MapPosition + 6 * directionFromAngles(HighlightBeamEffectAngle, 0), 2 + 0.5 * (abs(cosDeg(120 * HighlightEffectPulseTimer))), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create a beacon sound effect audible to the active player if there is no penalty
    createEffect(Players[0] if not CurrentPenalty and HighlightBeamEffectTargetAngle == HighlightBeamEffectAngle else [], Effect.BEACON_SOUND, Color.WHITE, Players[0].getPosition(), 50 - ShouldShowSpecialCardEffects * SpecialCardSoundEffectVolume, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Players[0] if not CurrentPenalty and HighlightBeamEffectTargetAngle == HighlightBeamEffectAngle else [], Effect.BEACON_SOUND, Color.WHITE, Players[0].getPosition(), 50 - ShouldShowSpecialCardEffects * SpecialCardSoundEffectVolume, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create an orange light shaft effect at the position of the active player, visible to all players when there is a penalty
    createEffect(getAllPlayers() if CurrentPenalty > 0 else [], Effect.LIGHT_SHAFT, Color.ORANGE, vect(0, -3, 0) + MapPosition + 6 * directionFromAngles(HighlightBeamEffectAngle, 0), 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create an orange ring intersection effect at the position of the active player visible to all players when there is a penalty
    createEffect(getAllPlayers() if CurrentPenalty > 0 else [], Effect.RING, Color.ORANGE, MapPosition + 6 * directionFromAngles(HighlightBeamEffectAngle, 0), 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create a pulsating orange ring intersection effect at the position of the active player visible to all players when there is a penalty
    createEffect(getAllPlayers() if CurrentPenalty > 0 else [], Effect.RING, Color.ORANGE, 0.25 * (directionFromAngles(240 * HighlightEffectPulseTimer, 0)) + MapPosition + 6 * directionFromAngles(HighlightBeamEffectAngle, 0), 2.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create a decal sound effect audible to the active player if there is a penalty
    createEffect(Players[0] if CurrentPenalty and HighlightBeamEffectTargetAngle == HighlightBeamEffectAngle else [], Effect.DECAL_SOUND, Color.WHITE, Players[0].getPosition(), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Players[0] if CurrentPenalty and HighlightBeamEffectTargetAngle == HighlightBeamEffectAngle else [], Effect.DECAL_SOUND, Color.WHITE, Players[0].getPosition(), 100, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "[Setup][Effects] init highlight beam starting angle":
    #The array of players has been initialized
    @Condition Players != null

    #Set the highlight beam angle & target angle to the position of the first player
    HighlightBeamEffectTargetAngle = horizontalAngleOfDirection(Players[0].MapPosition - MapPosition)
    HighlightBeamEffectAngle = HighlightBeamEffectTargetAngle


rule "[Setup][Effects] create special card effects":
    #Chase the sound volume of the swap cards effects to increase continously
    chaseAtRate(SpecialCardSoundEffectVolume, 100, 25, ChaseRateReeval.NONE)
    #Create a beam effect between two swapped players
    createBeam(getAllPlayers() if SwapCardEffectPlayers else [], Beam.BAD, Vector.UP + SwapCardEffectPlayers[0].getPosition(), Vector.UP + SwapCardEffectPlayers.last(), Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create an aura around the swapped players
    createEffect(getAllPlayers() if SwapCardEffectPlayers else [], Effect.GOOD_AURA, Color.PURPLE, Vector.UP * 1 + SwapCardEffectPlayers[0], 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if SwapCardEffectPlayers else [], Effect.GOOD_AURA, Color.PURPLE, Vector.UP * 1 + SwapCardEffectPlayers.last(), 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create some sound effects
    createEffect(getAllPlayers() if SwapCardEffectPlayers or ShouldShowSpecialCardEffects else [], Effect.ENERGY_SOUND, Color.WHITE, MapPosition, SpecialCardSoundEffectVolume, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if SwapCardEffectPlayers or ShouldShowSpecialCardEffects else [], Effect.DECAL_SOUND, Color.WHITE, MapPosition, SpecialCardSoundEffectVolume, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if SwapCardEffectPlayers or ShouldShowSpecialCardEffects else [], Effect.DECAL_SOUND, Color.WHITE, MapPosition, SpecialCardSoundEffectVolume, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if SwapCardEffectPlayers or ShouldShowSpecialCardEffects else [], Effect.DECAL_SOUND, Color.WHITE, MapPosition, SpecialCardSoundEffectVolume, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if SwapCardEffectPlayers or ShouldShowSpecialCardEffects else [], Effect.DECAL_SOUND, Color.WHITE, MapPosition, SpecialCardSoundEffectVolume, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create some sparkles
    createEffect(getAllPlayers() if ShouldShowSpecialCardEffects else [player for player in Players if player.HandSymbols[player.SelectedCardIndex] == "Swap-All" or player.HandSymbols[player.SelectedCardIndex] == "Shuffle"], Effect.SPARKLES, Color.PURPLE, 0.5 * Vector.UP + MapPosition, 15, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if ShouldShowSpecialCardEffects else [player for player in Players if player.HandSymbols[player.SelectedCardIndex] == "Swap-All" or player.HandSymbols[player.SelectedCardIndex] == "Shuffle"], Effect.SPARKLES, Color.PURPLE, 2 * Vector.UP + MapPosition, 15, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if ShouldShowSpecialCardEffects else [player for player in Players if player.HandSymbols[player.SelectedCardIndex] == "Swap-All" or player.HandSymbols[player.SelectedCardIndex] == "Shuffle"], Effect.SPARKLES, Color.PURPLE, 3.5 * Vector.UP + MapPosition, 15, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(getAllPlayers() if ShouldShowSpecialCardEffects else [player for player in Players if player.HandSymbols[player.SelectedCardIndex] == "Swap-All" or player.HandSymbols[player.SelectedCardIndex] == "Shuffle"], Effect.SPARKLES, Color.PURPLE, 5 * Vector.UP + MapPosition, 15, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "[Setup][Effects] information HUD text element":
    TempString = "Uno v4.0 | Latest code: 22FJJ"
    TempString = "{2}\n\nPrimary/Secondary Fire: Cycle cards".format(l"Primary Fire", l"Secondary Fire", TempString)
    TempString = "{0}\n{1}: Play selected card".format(TempString, l"Jump")
    TempString = "{0}\n{1}: Skip turn & draw cards".format(TempString, l"Crouch")
    TempString = "{0}\n{1}: Sort held cards".format(TempString, l"Interact")
    TempString = "{0}\n{1}: Toggle camera".format(TempString, l"Ultimate Ability")
    if SETTING_ICON_CARDS or SETTING_COPYCAT_CARD or SETTING_AMOUNT_OF_COLORS != 4 or SETTING_AMOUNT_OF_NUMBERS != 10 or SETTING_SHUFFLE_CARD or SETTING_SWAP_ALL_CARD or SETTING_SWAP_CARDS or SETTING_MULTIPLY_CARD or SETTING_JUMP_INS or SETTING_TURN_TIME_LIMIT:
        TempString = "{0}\n\nCustom rules:".format(TempString)
        TempString = "{0}\nTurn time limit: {1} seconds".format(TempString, SETTING_TURN_TIME_LIMIT) if SETTING_TURN_TIME_LIMIT else TempString
        TempString = "{0}\nJump-ins enabled".format(TempString) if SETTING_JUMP_INS else TempString
        TempString = "{0}\n×2 card enabled".format(TempString) if SETTING_MULTIPLY_CARD else TempString
        TempString = "{0}\nCopycat cards enabled".format(TempString) if SETTING_COPYCAT_CARD else TempString
        TempString = "{0}\nSwap cards enabled".format(TempString) if SETTING_SWAP_CARDS else TempString
        TempString = "{0}\nSwap all card enabled".format(TempString) if SETTING_SWAP_ALL_CARD else TempString
        TempString = "{0}\nShuffle card enabled".format(TempString) if SETTING_SHUFFLE_CARD else TempString
        TempString = "{0}\nIcons enabled".format(TempString) if SETTING_ICON_CARDS else TempString
        TempString = "{0}\nAmount of colors: {1}".format(TempString, SETTING_AMOUNT_OF_COLORS) if SETTING_AMOUNT_OF_COLORS != 4 else TempString
        TempString = "{0}\nAmount of numbers: {1}".format(TempString, SETTING_AMOUNT_OF_NUMBERS) if SETTING_AMOUNT_OF_NUMBERS != 10 else TempString
    hudSubheader(getAllPlayers(), "{0}\n\n{1}".format(TempString, "{0}\n{1}\n{2}".format(l"{0}: {1}".format(l"Server Load", getServerLoad()), l"{0}: {1}".format(l"Server Load Average", getAverageServerLoad()), l"{0}: {1}".format(l"Server Load Peak", getPeakServerLoad()))) if SETTING_DEBUG else TempString, HudPosition.RIGHT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


rule "[Setup][Effects] init HUD texts & misc effects":
    #Setup the position of the last player that played a card
    LastPlayedCardPosition = MapPosition
    #Chase a variable to 0 for the movement of the discard pile symbol. When greater than 0, the discard pile symbol moves from the last player that played a card to the discard pile
    chaseAtRate(DiscardPileSymbolMovementTimer, 0, 1)
    #Chase a variable for the bouncy effect of the discard pile beam. When this number gets larger, the oscillation of the discard pile beam decays exponentially
    chaseAtRate(DiscardPileColorMovementTimer, 10000, 1)
    #Create a HUD text element to tell players it's their turn
    hudHeader(Players[0], "{0}Your turn!{1}{0}".format(iconString(Icon.WARNING) if (TurnTimeRemaining > 10 or not SETTING_TURN_TIME_LIMIT) and getTotalTimeElapsed() % 1 < 0.5 else l"", " Take the cards or stack another" if CurrentPenalty else l""), HudPosition.TOP, 2, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.NEVER)
    #Create a HUD text element showing the current player
    hudSubtext(getAllPlayers().exclude(Players[0]), "{0}'s turn {1}".format(Players[0], heroIcon(Players[0].getHero())), HudPosition.TOP, 2, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    #Check if there is a turn time limit
    if SETTING_TURN_TIME_LIMIT > 0:
        #Create a HUD text displaying the turn time left
        hudText(getAllPlayers(), null, "Turn time left: {0} seconds".format(ceil(TurnTimeRemaining)) if TurnTimeRemaining > 10 else l"", ("{1}Turn time left: {0} seconds{1}".format(ceil(TurnTimeRemaining), iconString(Icon.WARNING) if TurnTimeRemaining % 1 > 0.5 else l"")) if TurnTimeRemaining <= 10 else l"", HudPosition.TOP, 1, Color.WHITE, Color.WHITE, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.ALWAYS)
    #Create a HUD text for spectating players
    hudHeader(getAllPlayers().exclude(Players), "You are currently spectating. Press space (jump) to join as soon as possible!" if SETTING_INSTANT_PLAY else "You are currently spectating.You will be able to join next match.", HudPosition.TOP, 0.5, Color.WHITE, HudReeval.VISIBILITY_AND_STRING, SpecVisibility.NEVER)


rule "[Setup][Effects] init non-spectating player effects":
    @Event eachPlayer
    #if the player is not a spectator
    @Condition eventPlayer.IsSpectating == false

    #Chase the current position of the selected player highlight effects to smoothly move to the currently selected player
    chaseAtRate(eventPlayer.SelectedPlayerHighlightPosition, eventPlayer.SelectedPlayerQueue[0].MapPosition, 5 * (0.5 + distance(eventPlayer.SelectedPlayerHighlightPosition, eventPlayer.SelectedPlayerQueue[0].MapPosition)))
    #Create effects indicating the selected player when a swap card is held
    createEffect(eventPlayer if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Swap" or DiscardPileSymbol == "Swap" and eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Copycat" else null, Effect.GOOD_AURA, Color.PURPLE, eventPlayer.SelectedPlayerHighlightPosition + Vector.UP, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(eventPlayer if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Swap" or DiscardPileSymbol == "Swap" and eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Copycat" else [], Effect.RING, Color.PURPLE, eventPlayer.SelectedPlayerHighlightPosition, 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Setup a starting position for the highlight effects indicating the selected player
    eventPlayer.SelectedPlayerHighlightPosition = MapPosition
    #Create a text element which displays the amount of cards the player has above their head. Only visible to the player itself when the player is using the floating camera
    createInWorldText(getAllPlayers().exclude(null if eventPlayer.IsUsingCamera else eventPlayer), max(1, len(eventPlayer.HandSymbols)), Vector.UP * 0.5 + eventPlayer.getEyePosition(), 1.2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
    #Create a HUD text element indicating the selected card, with additional information about the selected card
    hudSubheader(eventPlayer, "{1}Selected card: {2}{0}".format(("(use {0} to select a color)".format(l"Ability 2" if abilityIconString(eventPlayer.getHero(), Button.ABILITY_2) == l"" else abilityIconString(eventPlayer.getHero(), Button.ABILITY_2))) if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in WILD_CARD_SYMBOLS else l"", ("Selected player: {0} (use {1} to select the player to swap with)\n".format(eventPlayer.SelectedPlayerQueue[0], l"Ability 2" if abilityIconString(eventPlayer.getHero(), Button.ABILITY_2) == l"" else abilityIconString(eventPlayer.getHero(), Button.ABILITY_2))) if (eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Swap" or DiscardPileSymbol == "Swap" and eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Copycat") and len(eventPlayer.SelectedPlayerQueue) > 0 else l"", "Swaps your hand with the selected player " if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Swap" else "Moves all hands in the direction of play " if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Swap-All" else "Shuffles the cards in all hands " if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Shuffle" else "Copies the last played card " if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Copycat" else "Doubles the cards the next player has to take " if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "×2" else l""), HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex] - 0.5, Color.WHITE, HudReeval.VISIBILITY_SORT_ORDER_AND_STRING, SpecVisibility.NEVER)
    #Create a boundary effect showing where the player is allowed to move
    createEffect(eventPlayer, Effect.RING, Color.WHITE, Vector.UP * (eventPlayer.getPosition().y + (1 * (distance((Vector.LEFT + Vector.FORWARD) * eventPlayer.getPosition(), (Vector.LEFT + Vector.FORWARD) * eventPlayer.MapPosition) - 2))) + ((Vector.LEFT + Vector.FORWARD) * eventPlayer.MapPosition), 2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    #Create a beam effect to the next player for the shuffle/swap all card effect
    createBeam(getAllPlayers() if ShouldShowSpecialCardEffects else [], Beam.BAD, eventPlayer, Players[(1 + Players.index(eventPlayer)) % len(Players)], Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    hudSubtext(eventPlayer, "Wait {0} turn(s)!".format(Players.index(eventPlayer)) if Players[0] != eventPlayer else "Play a card!", HudPosition.TOP, 3, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


def AddColoredSymbolsToDeck():
    @Name "[Subroutine][Setup] add colored symbols to deck"

    #Add a single 0 card for every color
    DeckSymbols.append("0")
    #Check if swap cards are enabled
    if SETTING_SWAP_CARDS:
        #Add a single swap card for every color
        DeckSymbols.append("Swap")
        if not "Swap" in COLORED_CARD_SYMBOLS:
            COLORED_CARD_SYMBOLS = "Swap".concat(COLORED_CARD_SYMBOLS)
    #Add all other colored cards twice
    for TempNumber in range(2):
        if not SETTING_ICON_CARDS:
            #Add every number from 1 through <amount of numbers>
            for TempSymbolIndex in range(1, SETTING_AMOUNT_OF_NUMBERS):
                DeckSymbols.append("{0}".format(TempSymbolIndex))
        else:
            #Add 9 icons instead of numbers
            DeckSymbols.append([iconString(Icon.POISON), iconString(Icon.MOON), iconString(Icon.FIRE), iconString(Icon.DIZZY), iconString(Icon.BOLT), iconString(Icon.HEART), iconString(Icon.DIAMOND), iconString(Icon.SPADE), iconString(Icon.CLUB)])
        #Add special colored cards
        DeckSymbols.append("Reverse")
        DeckSymbols.append("Skip")
        DeckSymbols.append("+2")


def AddUncoloredSymbolsToDeck():
    @Name "[Subroutine][Setup] add uncolored symbols to deck"

    #Loop once for every color
    for TempColorIndex in range(len(COLORS)):
        #Add a wild and +4 card
        DeckSymbols.append("Wild")
        DeckSymbols.append("+4")
    #Check if the swap all card is enabled
    if SETTING_SWAP_ALL_CARD:
        #Add a single swap all card
        DeckSymbols.append("Swap-All")
        WILD_CARD_SYMBOLS.append("Swap-All")
    #Check if the shuffle card is enabled
    if SETTING_SHUFFLE_CARD:
        #Add a single swap all card
        DeckSymbols.append("Shuffle")
        WILD_CARD_SYMBOLS.append("Shuffle")
    #Check if the ×2 card is enabled
    if SETTING_MULTIPLY_CARD:
        #Add a ×2 card
        DeckSymbols.append("×2")
        WILD_CARD_SYMBOLS.append("×2")
        PENALTY_CARD_SYMBOLS.append("×2")
    #Check if copycat cards are enabled
    if SETTING_MULTIPLY_CARD:
        #Add two copycat cards
        DeckSymbols.append("Copycat")
        DeckSymbols.append("Copycat")


def AddNewPlayerToPlayers():
    @Name "[Subroutine][Setup] Add current new player to the list of players"

    Players.append(eventPlayer)


def InitPlayerStartingVariables():
    @Name "[Subroutine][Setup] Initialize player variables"

    eventPlayer.HandSymbols = []
    eventPlayer.HandColors = []
    eventPlayer.HandRenderQueueSymbols = []
    eventPlayer.HandRenderQueueColors = []
    eventPlayer.HandHUDTexts = []
    eventPlayer.HandHUDTextSortOrders = []
    #Request the starting cards
    eventPlayer.AmountOfRequestedCards = SETTING_AMOUNT_OF_STARTING_CARDS
    DealRequestedCards()
    #Sort the player's hand
    SortHandCards()


def InitMapPositionForAll():
    @Name "[Subroutine][Setup] Init player map position for all players for the first time"

    #Loop over every player
    for TempPlayerIndex in range(len(Players)):
        Players[TempPlayerIndex].Angle = 360 / len(Players) * (-1 * DirectionOfPlay * TempPlayerIndex % len(Players)) + StartingAngle
        #The players' positions are placed in a circle centered on the map position, equally spaced from one another
        Players[TempPlayerIndex].MapPosition = directionFromAngles(Players[TempPlayerIndex].Angle, 0) * 6 + MapPosition
        Players[TempPlayerIndex].MapPosition = raycast(Vector.UP * 1.5 + Players[TempPlayerIndex].MapPosition, Vector.UP * -1.5 + Players[TempPlayerIndex].MapPosition, [], [], false).getHitPosition()


def UpdateMapPositionForAll():
    @Name "[Subroutine] Update player map position for all players for the first time"

    if len(Players) > 1:
        #Select a random offset for the first player's position
        StartingAngle = Players[0].Angle
        #Loop over every player
        for TempPlayerIndex in range(len(Players)):
            Players[TempPlayerIndex].Angle = 360 / len(Players) * (-1 * DirectionOfPlay * TempPlayerIndex % len(Players)) + StartingAngle
            #The players' positions are placed in a circle centered on the map position, equally spaced from one another
            Players[TempPlayerIndex].MapPosition = directionFromAngles(Players[TempPlayerIndex].Angle, 0) * 6 + MapPosition
            Players[TempPlayerIndex].MapPosition = raycast(Vector.UP * 1.5 + Players[TempPlayerIndex].MapPosition, Vector.UP * -1.5 + Players[TempPlayerIndex].MapPosition, [], [], false).getHitPosition()


def SetPlayerSelectionQueueForAll():
    @Name "[Subroutine] Set player selection queue for all players"

    #Loop over every player
    for TempPlayerIndex in range(len(Players)):
        #Set the selected player queue for this player to the array of all players without the current player. The first value in this array is the player with which is swapped when a swap card is played by this player
        Players[TempPlayerIndex].SelectedPlayerQueue = Players.exclude(Players[TempPlayerIndex])


rule "- CARD EFFECT STUFF -":
    @Disabled
    @Delimiter



rule "[Effects] update discard pile color (white)":
    #The color of the discard pile card has changed to white
    @Condition DiscardPileColor == l"White"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    #Create the symbol effect
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else "Wild (any color)" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.WHITE, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.WHITE, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.WHITE, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.WHITE, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.WHITE, MapPosition + Vector.UP * 2, 50)
    #Create effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (red)":
    #The color of the discard pile card has changed to red
    @Condition DiscardPileColor == l"Red"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else l"Red" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.RED, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.RED, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.RED, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.RED, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.RED, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.RED, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.RED, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.RED, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.RED, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (orange)":
    #The color of the discard pile card has changed to orange
    @Condition DiscardPileColor == "Orange"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else "Orange" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.ORANGE, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.ORANGE, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.ORANGE, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.ORANGE, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.ORANGE, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.ORANGE, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.ORANGE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.ORANGE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.ORANGE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (yellow)":
    #The color of the discard pile card has changed to yellow
    @Condition DiscardPileColor == l"Yellow"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else l"Yellow" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.YELLOW, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.YELLOW, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.YELLOW, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.YELLOW, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.YELLOW, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.YELLOW, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.YELLOW, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.YELLOW, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.YELLOW, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (lime green)":
    #The color of the discard pile card has changed to lime green
    @Condition DiscardPileColor == "Lime Green"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    #Create the symbol effect
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else "Lime Green" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.LIME_GREEN, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.LIME_GREEN, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.LIME_GREEN, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.LIME_GREEN, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.LIME_GREEN, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.LIME_GREEN, MapPosition + Vector.UP * 2, 50)
    #Create effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.LIME_GREEN, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.LIME_GREEN, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.LIME_GREEN, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (green)":
    #The color of the discard pile card has changed to green
    @Condition DiscardPileColor == l"Green"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else l"Green" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.GREEN, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.GREEN, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.GREEN, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.GREEN, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.GREEN, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.GREEN, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.GREEN, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.GREEN, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.GREEN, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (turquoise)":
    #The color of the discard pile card has changed to turquoise
    @Condition DiscardPileColor == "Turquoise"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else "Turquoise" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.TURQUOISE, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.TURQUOISE, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.TURQUOISE, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.TURQUOISE, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.TURQUOISE, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.TURQUOISE, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.TURQUOISE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.TURQUOISE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.TURQUOISE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (aqua)":
    #The color of the discard pile card has changed to aqua
    @Condition DiscardPileColor == "Aqua"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else "Aqua" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.AQUA, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.AQUA, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.AQUA, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.AQUA, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.AQUA, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.AQUA, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.AQUA, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (sky blue)":
    #The color of the discard pile card has changed to sky blue
    @Condition DiscardPileColor == "Sky Blue"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else "Sky Blue" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.SKY_BLUE, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.SKY_BLUE, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.SKY_BLUE, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.SKY_BLUE, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.SKY_BLUE, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.SKY_BLUE, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.SKY_BLUE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.SKY_BLUE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.SKY_BLUE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (blue)":
    #The color of the discard pile card has changed to blue
    @Condition DiscardPileColor == l"Blue"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else l"Blue" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.BLUE, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.BLUE, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.BLUE, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.BLUE, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.BLUE, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.BLUE, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.BLUE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.BLUE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.BLUE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] update discard pile color (purple)":
    #The color of the discard pile card has changed to purplr
    @Condition DiscardPileColor == l"Purple"

    #Destroy the previous symbol effect
    destroyInWorldText(DiscardPileSymbolTextID)
    createInWorldText(getAllPlayers(), "Copycat" if DiscardPileSymbolMovementTimer and DeckSymbols.last() == "Copycat" else l"{0} {1}".format(DiscardPileSymbol, "(+{0})".format(CurrentPenalty)) if DiscardPileSymbol in PENALTY_CARD_SYMBOLS and not DiscardPileSymbolMovementTimer else l"Purple" if DiscardPileSymbol == "Wild" else DiscardPileSymbol, (1 - DiscardPileSymbolMovementTimer) * MapPosition + DiscardPileSymbolMovementTimer * LastPlayedCardPosition + (Vector.UP * (1.5 + 0.2 * (cosDeg(getTotalTimeElapsed() * 36)) + (3 * (1 - ((abs(2 * DiscardPileSymbolMovementTimer - 1)) ** 2))))), 10, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.PURPLE, SpecVisibility.ALWAYS)
    DiscardPileSymbolTextID = getLastCreatedText()
    #Wait for the animation to finish
    wait(1)
    #Destroy all existing discard pile color effects
    DestroyDiscardPileCardEffects()
    #Create the 'intersection' effect where the light shaft reaches the ground
    createEffect(getAllPlayers(), Effect.RING, Color.PURPLE, MapPosition, 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs = getLastCreatedEntity()
    #Create the bad aura effect at the position of the discard pile symbol
    createEffect(getAllPlayers(), Effect.BAD_AURA, Color.PURPLE, MapPosition + Vector.UP * 2, 1.25, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Create the light shaft effect
    createEffect(getAllPlayers(), Effect.LIGHT_SHAFT, Color.PURPLE, MapPosition + (Vector.DOWN * (15 if IS_HOLE_MAP else 2)), 3.75 + 0.75 * (sinDeg(DiscardPileColorMovementTimer * 360)) * (2.72 ** (-1 * DiscardPileColorMovementTimer)), EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    #Play a transition effect
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.PURPLE, MapPosition + Vector.UP * 2, 5)
    playEffect(getAllPlayers(), DynamicEffect.EXPLOSION_SOUND, Color.PURPLE, MapPosition + Vector.UP * 2, 50)
    #Create the symbol effectCreate effects for reverse cards
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay + 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())
    createBeam(getAllPlayers() if DirectionOfPlayTimer else [], Beam.GOOD, MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay - 120, 0))), MapPosition + (Vector.UP * 2 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2)) + ((-4 * ((1 - abs(DirectionOfPlayTimer / 5)) ** 2) + 4) * (directionFromAngles(abs(DirectionOfPlayTimer) ** 2 * 50 * DirectionOfPlay, 0))), Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DiscardPileColorEffectIDs.append(getLastCreatedEntity())


rule "[Effects] render hand cards in queue":
    @Event eachPlayer
    #New cards have been queued to be rendered for this player
    @Condition len(eventPlayer.HandRenderQueueSymbols) > 0
    #Prevent creating HUD texts when the player is not fully loaded in
    @Condition eventPlayer.hasSpawned() == true

    #Cards are not drawn all at the same time to reduce server load. A player's hand should not be modified when they are creating HUD texts, as this can cause their hand to be in an invalid state
    eventPlayer.IsCreatingHUDTexts = true
    #Loop until the queue is empty
    while len(eventPlayer.HandRenderQueueSymbols) > 0:
        #The next card in queue is uncolored
        if eventPlayer.HandRenderQueueColors[0] == l"White":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.WHITE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is red
        elif eventPlayer.HandRenderQueueColors[0] == l"Red":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.RED, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is orange
        elif eventPlayer.HandRenderQueueColors[0] == "Orange":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.ORANGE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is yellow
        elif eventPlayer.HandRenderQueueColors[0] == l"Yellow":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.YELLOW, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is lime green
        elif eventPlayer.HandRenderQueueColors[0] == "Lime Green":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.LIME_GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is green
        elif eventPlayer.HandRenderQueueColors[0] == l"Green":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is turquoise
        elif eventPlayer.HandRenderQueueColors[0] == "Turquoise":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.TURQUOISE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is aqua
        elif eventPlayer.HandRenderQueueColors[0] == "Aqua":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.AQUA, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is sky blue
        elif eventPlayer.HandRenderQueueColors[0] == "Sky Blue":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.SKY_BLUE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is blue
        elif eventPlayer.HandRenderQueueColors[0] == l"Blue":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.BLUE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
            #The next card in queue is purple
        elif eventPlayer.HandRenderQueueColors[0] == l"Purple":
            hudHeader(eventPlayer, eventPlayer.HandRenderQueueSymbols[0], HudPosition.LEFT, eventPlayer.HandSortOrderCounter, Color.PURPLE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #Keep track of the HUD text ID to delete it when the card is played. The ID's in this array are kept in the same order as the cards of the player
        eventPlayer.HandHUDTexts.append(getLastCreatedText())
        #Keep track of the sort order of the created HUD text element
        eventPlayer.HandHUDTextSortOrders.append(eventPlayer.HandSortOrderCounter)
        #Wait to give the hud text the time to get created, and to reduce server load
        wait(0.048)
        #Remove the card from the queue
        del eventPlayer.HandRenderQueueSymbols[0]
        del eventPlayer.HandRenderQueueColors[0]
        #Increase the sort order counter for hand cards to guarantee the next rendered hand card is displayed below this one
        eventPlayer.HandSortOrderCounter++
    #This player has created all HUD texts
    eventPlayer.IsCreatingHUDTexts = false
    #Restart this action if the conditions become true again next tick
    wait(0.016, Wait.RESTART_WHEN_TRUE)
    if ruleCondition:
        loop()


def DestroyDiscardPileCardEffects():
    @Name "[Subroutine][Effects] destroy discard pile effects"

    #Destroy all existing discard pile color effects
    for TempNumber in range(len(DiscardPileColorEffectIDs)):
        destroyEffect(DiscardPileColorEffectIDs[TempNumber])


def UpdateWildCardColor():
    @Name "[Subroutine][Effects] update selected card color"

    #Destroy the currently selected HUD text
    destroyHudText(eventPlayer.HandHUDTexts[eventPlayer.SelectedCardIndex])
    #The the selected card is red
    if eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Red":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.RED, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is orange
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Orange":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.ORANGE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is yellow
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Yellow":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.YELLOW, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is lime green
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Lime Green":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.LIME_GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is green
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Green":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is turquoise
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Turquoise":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.TURQUOISE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is aqua
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Aqua":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.AQUA, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is sky blue
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Sky Blue":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.SKY_BLUE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is blue
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Blue":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.BLUE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is purple
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Purple":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.PURPLE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
    #Keep track of the HUD text ID to delete it when the card is played
    eventPlayer.HandHUDTexts[eventPlayer.SelectedCardIndex] = getLastCreatedText()


def ClearHandHUDTexts():
    @Name "[Subroutine][Effects] clear hand HUD texts"

    #Loop over the HUD text ID's of the player
    for TempNumber in range(len(PlayerToClearHand.HandHUDTexts)):
        #Destroy all existing cards
        destroyHudText(PlayerToClearHand.HandHUDTexts[TempNumber])
    #Reset the hand HUD text array
    PlayerToClearHand.HandHUDTexts = []
    #Reset the sort order array
    PlayerToClearHand.HandHUDTextSortOrders = []


rule "- MISC -":
    @Disabled
    @Delimiter



rule "[Logic] remove player when left":
    @Event playerLeft
    @Condition Players != []

    if Players[0] == eventPlayer:
        TurnTimeRemaining = SETTING_TURN_TIME_LIMIT
    #Remove the leaving player from the playing players. The cards held by this player can not be added back to the deck, because the player variables of this player no longer exist
    Players = Players.exclude(eventPlayer)
    #Loop over every player that is still playing
    for TempPlayerIndex in range(len(Players)):
        #Remove the leaving player from their selected player queue
        Players[TempPlayerIndex].SelectedPlayerQueue.remove(eventPlayer)
    UpdateMapPositionForAll()
    #Move the highlight beam when needed
    UpdateHighlightBeamPosition()


rule "[Effects] teleport player to position":
    @Event eachPlayer
    #The map is valid
    @Condition MapPosition != null
    #The position of this player has been initialized
    @Condition eventPlayer.MapPosition != null
    #The player has spawned
    @Condition eventPlayer.hasSpawned() == true
    #if the player is way out of position (12 m away)
    @Condition (distance(vect(eventPlayer.getPosition().x, eventPlayer.MapPosition.y, eventPlayer.getPosition().z), eventPlayer.MapPosition) > 12 or eventPlayer.getPosition().y - eventPlayer.MapPosition.y < -5) == true

    #Teleport the player back to their position
    eventPlayer.teleport(eventPlayer.MapPosition)
    #Reset the facing of the player towards the center
    eventPlayer.setFacing(MapPosition - eventPlayer.MapPosition, Relativity.TO_WORLD)


rule "[Effects] keep player in position":
    @Event eachPlayer
    #The map is valid
    @Condition MapPosition != null
    #The position of this player has been initialized
    @Condition eventPlayer.MapPosition != null
    #The player has spawned
    @Condition eventPlayer.hasSpawned() == true
    #if the player is slightly out of position
    @Condition distance(vect(eventPlayer.getPosition().x, eventPlayer.MapPosition.y, eventPlayer.getPosition().z), eventPlayer.MapPosition) > BoundaryRadius
    @Condition distance(vect(eventPlayer.getPosition().x, eventPlayer.MapPosition.y, eventPlayer.getPosition().z), eventPlayer.MapPosition) <= 12

    #cancel their movement and apply a force to push them back into their boundary
    eventPlayer.applyImpulse(directionTowards(eventPlayer.getEyePosition(), eventPlayer.MapPosition) * (Vector.FORWARD + Vector.LEFT), BoundaryForce * (((distance(eventPlayer, eventPlayer.MapPosition) - (BoundaryRadius - sqrt(BoundaryRadius))) / sqrt(BoundaryRadius)) ** 1), Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait(0)
    if ruleCondition:
        loop()


rule "[Effects] update player score":
    @Event eachPlayer
    #The current score of the player is not equal to the number of cards they have
    @Condition eventPlayer.getScore() != -1 * len(eventPlayer.HandSymbols)
    #Check if the game has started
    @Condition isGameInProgress() == true

    #Set the score of the player to the number of cards they have
    eventPlayer.setScore(-1 * len(eventPlayer.HandSymbols))
    #Check for uno
    if len(eventPlayer.HandSymbols) == 1:
        #Show a message
        smallMessage(getAllPlayers(), "Everyone has UNO!" if all([len(player.HandSymbols) == 1 for player in Players]) else "{0} has UNO!".format(eventPlayer))
        #Set the player to be burning
        eventPlayer.setStatusEffect(null, Status.BURNING, 9999)
    else:
        #This player no longer has uno
        eventPlayer.clearStatusEffect(Status.BURNING)


rule "[Effects] notify active player":
    @Event eachPlayer
    @Condition isGameInProgress() == true
    @Condition Players[0] == eventPlayer
    #Wait until the beam has reached the player
    @Condition HighlightBeamEffectAngle == HighlightBeamEffectTargetAngle

    #Notify the new active player
    playEffect(eventPlayer, DynamicEffect.BUFF_IMPACT_SOUND, Color.WHITE, eventPlayer, 50)


rule "[Effects] toggle floating camera":
    @Event eachPlayer
    #The player has pressed their ultimate button
    @Condition eventPlayer.isHoldingButton(Button.ULTIMATE) == true
    #The event player is not holding ability one
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false

    #Toggle the floating camera for this player
    ToggleFloatingCamera()


def ToggleFloatingCamera():
    @Name "[Subroutine][Effects] toggle floating camera"

    #Check whether the player is already using the floating camera
    if eventPlayer.IsUsingCamera:
        #Stop using the camera
        eventPlayer.stopCamera()
        #The player is not using the camera
    else:
        #I don't even know
        eventPlayer.startCamera(raycast(MapPosition + Vector.UP * 2, MapPosition + (vect(9 * (cosDeg(getTotalTimeElapsed() * 4)), 3.5 + 1.5 * (cosDeg(3 * getTotalTimeElapsed())), 9 * (sinDeg(getTotalTimeElapsed() * 4)))), [], [], false).getHitPosition() - ((vect(9 * (cosDeg(getTotalTimeElapsed() * 4)), 3.5 + 1.5 * (cosDeg(3 * getTotalTimeElapsed())), 9 * (sinDeg(getTotalTimeElapsed() * 4)))) * 0.1), MapPosition + Vector.UP * 2, 4)
    #Update the isUsingCamera variable
    eventPlayer.IsUsingCamera = not eventPlayer.IsUsingCamera


rule "[Debug] Spawn Bot":
    #The host is holding interact (without shift)
    @Condition hostPlayer.isHoldingButton(Button.INTERACT) == true
    @Condition hostPlayer.isHoldingButton(Button.ABILITY_1) == true
    #debug mode is enabled
    @Condition SETTING_DEBUG == true

    wait(1, Wait.ABORT_WHEN_FALSE)
    #Spawn a dummy bot
    createDummy(random.choice(getAllHeroes()), Team.ALL, -1, MapPosition, Vector.UP)


rule "[Debug] Destroy Bot":
    #The host is holding interact and shift
    @Condition hostPlayer.isHoldingButton(Button.ABILITY_1) == true
    @Condition hostPlayer.isHoldingButton(Button.INTERACT) == true
    #debug mode is enabled
    @Condition SETTING_DEBUG == true
    #if the closest player to reticle of host player is a bot
    @Condition hostPlayer.getPlayerClosestToReticle(Team.ALL).isDummy() == true

    wait(1, Wait.ABORT_WHEN_FALSE)
    #destroy the closest dummy bot to reticle
    destroyDummy(Team.ALL, hostPlayer.getPlayerClosestToReticle(Team.ALL).getSlot())


rule "- CARD DEALING LOGIC -":
    @Disabled
    @Delimiter



rule "[Debug] force skip player":
    @Event eachPlayer
    #Debug is enabled
    @Condition SETTING_DEBUG == true
    #The host is holding reload
    @Condition hostPlayer.isHoldingButton(Button.RELOAD) == true
    #It is currently the event player's turn. This rule is 'ongoing - each player', because the event player value is used in drawCards. Also, when the host player is holding reload and a player plays a card, the timer resets
    @Condition eventPlayer == Players[0]

    #The host must hold reload for one second
    wait(1, Wait.ABORT_WHEN_FALSE)
    #A players hand cannot be modified when something important is happening
    if IsCurrentlyPlayingAnimation or eventPlayer.IsCreatingHUDTexts:
        return
    #Show a message
    smallMessage(getAllPlayers(), "{0} was skipped by the host".format(eventPlayer))
    #Make the current active player draw a card and pass the turn to the next player (does not work with multi-draw enabled)
    DrawCardsAndAdvanceTurn()


rule "[Logic] take new card(s) manually":
    @Event eachPlayer
    #It is currently the event player's turn
    @Condition Players[0] == eventPlayer
    #The player is crouching
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true
    #The player is not jumping. Prevents the player from drawing a card and playing a card in the same turn
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == false

    #A players hand cannot be modified when something important is happening
    if IsCurrentlyPlayingAnimation or eventPlayer.IsCreatingHUDTexts:
        return
    #Draw the requested card(s), and advance to the next player
    DrawCardsAndAdvanceTurn()


rule "[Logic] take new card(s) when turn timer ends":
    @Event eachPlayer
    #There is a time limit for turns
    @Condition SETTING_TURN_TIME_LIMIT > 0
    #The player did not play in time
    @Condition TurnTimeRemaining == 0
    #It is currently the event player's turn
    @Condition Players[0] == eventPlayer
    #A players hand cannot be modified when something important is happening
    @Condition IsCurrentlyPlayingAnimation == false
    #A players hand cannot be modified while they are creating HUD texts
    @Condition eventPlayer.IsCreatingHUDTexts == false

    #Show a message
    smallMessage(getAllPlayers(), "{0} ran out of time!".format(eventPlayer))
    #Draw the requested card(s), and advance to the next player
    DrawCardsAndAdvanceTurn()


def DrawCardsAndAdvanceTurn():
    @Name "[Subroutine] Draw card(s) and advance turn"

    #Set the requested amount of cards of the player to at least 1, depending on the penalty
    eventPlayer.AmountOfRequestedCards = max(CurrentPenalty, 1)
    #Reset the penalty for the next player
    LastPenalty = CurrentPenalty
    #Reset the penalty for the next player
    CurrentPenalty = 0
    #Count all HUD texts
    TempNumber = len(Players) * 3 + 5 + (SETTING_TURN_TIME_LIMIT > 0)
    for TempPlayerIndex in range(len(Players)):
        TempNumber += len(Players[TempPlayerIndex].HandSymbols)
    #Clamp the amount of requested cards such that it does not exceed the HUD text limit, leave one extra HUD text for cycling wild card colors
    eventPlayer.AmountOfRequestedCards = max(0, min(127 - TempNumber, eventPlayer.AmountOfRequestedCards))
    #Deal the requested card(s)
    DealRequestedCards()
    #Reset the remaining turn time
    TurnTimeRemaining = SETTING_TURN_TIME_LIMIT
    #Advance to the next player
    ChangeActivePlayer_Default()
    #Play some effects
    PlayDrawCardsEffects()


def DealRequestedCards():
    @Name "[Subroutine] Deal requested cards to player"

    #Check if there is a specific player that should be dealt cards
    if not PlayerToDealTo:
        #There is no specific player, deal to the event player
        PlayerToDealTo = eventPlayer
    #Loop until all requested cards have been dealt or there are no more cards in the deck
    while PlayerToDealTo.AmountOfRequestedCards > 0 and true:
        #if the deck isn't empty
        if len(DeckSymbols) > 0:
            #Select a random card in the deck
            TempNumber = random.randint(0, len(DeckSymbols) - 1)
            #Add the card to the player's hand
            PlayerToDealTo.HandSymbols.append(DeckSymbols[TempNumber])
            PlayerToDealTo.HandColors.append(DeckColors[TempNumber])
            #Render the card
            PlayerToDealTo.HandRenderQueueSymbols.append(DeckSymbols[TempNumber])
            PlayerToDealTo.HandRenderQueueColors.append(DeckColors[TempNumber])
            #Remove the card from the deck
            del DeckSymbols[TempNumber]
            del DeckColors[TempNumber]
            #Decrease the amount of requested cards by 1
            PlayerToDealTo.AmountOfRequestedCards--
            #if the deck is empty add another set of cards to the deck
        else:
            AddAnotherSetOfCardsToDeck()
    #Set requested cards to 0 if not all requested cards could be dealt
    PlayerToDealTo.AmountOfRequestedCards = 0
    #Reset the player to deal to
    PlayerToDealTo = null


def PlayDrawCardsEffects():
    @Name "[Subroutine][Effects] Play draw card(s) effects"

    #Play some effects
    playEffect(getAllPlayers(), DynamicEffect.BAD_PICKUP_EFFECT, Color.ORANGE, eventPlayer.getPosition(), 30)
    playEffect(getAllPlayers(), DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, eventPlayer.getPosition(), 30)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.ORANGE, 0.5 * Vector.UP + eventPlayer.MapPosition, 5)
    #Reset the highlight pulse timer
    HighlightEffectPulseTimer = 0
    #Move the highlight beam
    UpdateHighlightBeamPosition()
    #Check if the player had to draw more than 1 card
    if LastPenalty > 1:
        wait(0.032, Wait.RESTART_WHEN_TRUE)
        #Display a message
        smallMessage(getAllPlayers(), "{0} took {1} cards!".format(eventPlayer, LastPenalty))


def AddAnotherSetOfCardsToDeck():
    @Name "[Subroutine] Add another set of cards to deck"

    #add a identical copy of the deck created at start back to the deck
    DeckSymbols.append(DeckSymbolsCopy)
    DeckColors.append(DeckColorsCopy)


rule "- CARD SELECTING LOGIC -":
    @Disabled
    @Delimiter



rule "[Logic] Select color":
    @Event eachPlayer
    #The player is currently using ability 2
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_2) == true
    #A player cannot change the color of cards when they are creating HUD texts
    @Condition eventPlayer.IsCreatingHUDTexts == false
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false

    #Player has wild card selected
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in WILD_CARD_SYMBOLS == true:
        #Cycle the color of the player's selected card
        eventPlayer.HandColors[eventPlayer.SelectedCardIndex] = COLORS[(COLORS.index(eventPlayer.HandColors[eventPlayer.SelectedCardIndex]) + 1) % len(COLORS)]
        #Re-render the currently selected card to update its color
        UpdateWildCardColor()


rule "[Logic] Select swap card player":
    @Event eachPlayer
    #The event player has a swap card selected
    @Condition (eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Swap" or DiscardPileSymbol == "Swap" and eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Copycat") == true
    #The player is using ability 2
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_2) == true
    #There is at least one player to swap with
    @Condition eventPlayer.SelectedPlayerQueue != []
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false

    #Cycle the selected player queue
    eventPlayer.SelectedPlayerQueue.append(eventPlayer.SelectedPlayerQueue[0])
    del eventPlayer.SelectedPlayerQueue[0]


rule "[Logic] Select card (next)":
    @Event eachPlayer
    #The player is holding secondary fire
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == true
    #The player is not holding primary fire
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == false
    #The player is not a spectator
    @Condition eventPlayer in Players == true
    #The event player is not holding ability one
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false

    #Increase the index of the selected card by one, loop back to 0 when needed
    eventPlayer.SelectedCardIndex = (eventPlayer.SelectedCardIndex + 1) % len(eventPlayer.HandSymbols)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    #Fast scrolling
    while true:
        #Increase the index of the selected card by one, loop back to 0 when needed
        eventPlayer.SelectedCardIndex = (eventPlayer.SelectedCardIndex + 1) % len(eventPlayer.HandSymbols)
        wait(0.06, Wait.ABORT_WHEN_FALSE)


rule "[Logic] Select card (previous)":
    @Event eachPlayer
    #The player is holding primary fire
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    #The player is not holding secondary fire
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == false
    #The player is not a specator
    @Condition eventPlayer in Players == true
    #The event player is not holding ability one
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false

    #Decrease the index of the selected car by one, loop back to the highest index when needed
    eventPlayer.SelectedCardIndex = (eventPlayer.SelectedCardIndex + (len(eventPlayer.HandSymbols) - 1)) % len(eventPlayer.HandSymbols)
    wait(0.25, Wait.ABORT_WHEN_FALSE)
    #Fast scrolling
    while true:
        #Decrease the index of the selected car by one, loop back to the highest index when needed
        eventPlayer.SelectedCardIndex = (eventPlayer.SelectedCardIndex + (len(eventPlayer.HandSymbols) - 1)) % len(eventPlayer.HandSymbols)
        wait(0.06, Wait.ABORT_WHEN_FALSE)


rule "[Logic] Sort cards":
    @Event eachPlayer
    #The player pressed interact
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    #The player has at least 2 cards
    @Condition len(eventPlayer.HandSymbols) >= 2
    #Modifying a player's hand while they are rendering cards can create invalid HUD text elements
    @Condition IsCurrentlyPlayingAnimation == false
    @Condition eventPlayer.IsCreatingHUDTexts == false
    #The event player is not holding ability one
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false

    #Sort the cards of the event player
    SortHandCards()
    #Prevent the player from crashing the server
    wait(5)


rule "[Effects] Show wild card error message":
    @Event eachPlayer
    #The player is trying to play a card
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true

    #The event player must be the active player
    if eventPlayer != Players[0]:
        return
    #The card the player is trying to play is uncolored
    if eventPlayer.HandColors[eventPlayer.SelectedCardIndex] != l"White":
        return
    #The card the player is trying to play is not a copycat card
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Copycat":
        return
    #Show an error message with instructions to change the color of the card
    bigMessage(eventPlayer, "Use {0} to select a color".format(l"Ability 2" if abilityIconString(eventPlayer.getHero(), Button.ABILITY_2) == l"" else abilityIconString(eventPlayer.getHero(), Button.ABILITY_2)))
    playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 50)


def SortHandCards():
    @Name "[Subroutine] Sort cards"

    #Reset the selected card index
    eventPlayer.SelectedCardIndex = 0
    #Find all wild symbols
    eventPlayer.TempSymbols = [player for player in eventPlayer.HandSymbols if player in "Copycat".concat(WILD_CARD_SYMBOLS)]
    #Sort the wild symbols, and add them to the temporary sorted symbol array
    eventPlayer.TempSortedHandSymbols = sorted(eventPlayer.TempSymbols, lambda player: "Copycat".concat(WILD_CARD_SYMBOLS).index(player))
    #Reset the sorted hand colors temporary array
    eventPlayer.TempSortedHandColors = []
    #Loop until all newly added cards have been assigned a color
    while len(eventPlayer.TempSortedHandSymbols) > len(eventPlayer.TempSortedHandColors):
        #All cards in the symbol array are reset to white, even if they were colored before
        eventPlayer.TempSortedHandColors.append(l"White")
    #Loop over every color
    for TempColorIndex in range(len(COLORS)):
        #Reset the temporary array
        eventPlayer.TempSymbols = []
        #Loop over all symbols the player has (can't use a filtered array here, since the index is needed to check the color but 'index of' always returns the first matching card)
        for TempSymbolIndex in range(len(eventPlayer.HandSymbols)):
            #Check if the color of the current card being looped over is the current color being looped over, and the card is not a wild card
            if eventPlayer.HandColors[TempSymbolIndex] == COLORS[TempColorIndex] and not eventPlayer.HandSymbols[TempSymbolIndex] in "Copycat".concat(WILD_CARD_SYMBOLS):
                #Append the current symbol being looped over to the temporary symbol array
                eventPlayer.TempSymbols.append(eventPlayer.HandSymbols[TempSymbolIndex])
                #Append the color for this card to the sorted hand colors array
                eventPlayer.TempSortedHandColors.append(COLORS[TempColorIndex])
        #Sort the symbols for this color, and add them to the temporary sorted symbol array
        eventPlayer.TempSortedHandSymbols.append(sorted(eventPlayer.TempSymbols, lambda player: COLORED_CARD_SYMBOLS.index(player)))
        #Loop until all newly added cards have been assigned a color
        while len(eventPlayer.TempSortedHandSymbols) > len(eventPlayer.TempSortedHandColors):
            #All cards in the symbol array are assigned the current color being looped over
            eventPlayer.TempSortedHandColors.append(COLORS[TempColorIndex])
    #Set the player's cards to the sorted arrays
    eventPlayer.HandSymbols = eventPlayer.TempSortedHandSymbols
    eventPlayer.HandColors = eventPlayer.TempSortedHandColors
    #Clear the hand HUD text elements of the event player
    PlayerToClearHand = eventPlayer
    ClearHandHUDTexts()
    #Add the player's cards to the card render queue
    eventPlayer.HandRenderQueueSymbols = eventPlayer.HandSymbols
    eventPlayer.HandRenderQueueColors = eventPlayer.TempSortedHandColors


rule "- CHEAT -":
    @Disabled
    @Delimiter



rule "[Setup][Cheat] setup cheat constants":
    @Disabled

    #When set to true certain cheats and permissions are enabled for the specified player admin.
    SETTING_CHEAT_ENABLED = false
    #Setting admin name
    CURRENT_ADMIN = "NotOnMyWatch"
    #Initialize the array used for displacement cheat
    PlayersSelectedForDisplacement = []


rule "[Setup][Cheat] find and enable cheats for owner, set it to disabled by default for everyone else":
    @Event eachPlayer
    #If cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    @Disabled

    #If the current player is admin, enable cheat for them, if not set it to disabled by default
    if "{0}".format(eventPlayer) == CURRENT_ADMIN:
        eventPlayer.CheatsEnabled = true
    else:
        eventPlayer.CheatsEnabled = false


rule "[Logic][Cheat] toggle cheats on and off for other players as owner (v)":
    @Event eachPlayer
    #Check if the right combination of buttons is pressed
    @Condition eventPlayer.isHoldingButton(Button.MELEE) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == false
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_2) == false
    #Check if the player is admin
    @Condition "{0}".format(eventPlayer) == CURRENT_ADMIN
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    @Disabled

    #if the closest player to reticle has cheats off
    if eventPlayer.getPlayerClosestToReticle(Team.ALL).CheatsEnabled == false:
        #enable cheats for selected player and show a message
        eventPlayer.getPlayerClosestToReticle(Team.ALL).CheatsEnabled = true
        bigMessage(eventPlayer, "cheats enabled for {0}!".format(eventPlayer.getPlayerClosestToReticle(Team.ALL)))
        #if they already have cheats enabled
    else:
        #turn the cheats off for selected player and show a message
        eventPlayer.getPlayerClosestToReticle(Team.ALL).CheatsEnabled = false
        bigMessage(eventPlayer, "cheats disabled for {0}!".format(eventPlayer.getPlayerClosestToReticle(Team.ALL)))


rule "[Logic][Cheat] select closest player to reticle to force displacement as owner (alt + v)":
    @Event eachPlayer
    #Check if the right combination of buttons is pressed
    @Condition eventPlayer.isHoldingButton(Button.MELEE) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_2) == false
    #Check if the player is admin
    @Condition "{0}".format(eventPlayer) == CURRENT_ADMIN
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    @Disabled

    #select closest player to reticle
    PlayersSelectedForDisplacement.append(eventPlayer.getPlayerClosestToReticle(Team.ALL))
    #if it's the first select show a message and do nothing
    if len(PlayersSelectedForDisplacement) == 1:
        bigMessage(eventPlayer, "First player, {0}, selected for displacement.".format(eventPlayer.getPlayerClosestToReticle(Team.ALL)))
        #if there are two players selected show a message and switch their position
    elif len(PlayersSelectedForDisplacement) == 2:
        bigMessage(eventPlayer, "Second player, {0}, selected for displacement. Displacement complete!".format(eventPlayer.getPlayerClosestToReticle(Team.ALL)))
        CompletePlayerPositionSwap()
        #fail safe, if more or none are selected reset the operation
    else:
        bigMessage(eventPlayer, "An error occured please try again.")
        PlayersSelectedForDisplacement = []


rule "[Logic][Cheat] select self to force displacement as owner (alt + shift + v)":
    @Event eachPlayer
    #Check if the right combination of buttons is pressed
    @Condition eventPlayer.isHoldingButton(Button.MELEE) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == true
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == true
    #Check if the player is admin
    @Condition "{0}".format(eventPlayer) == CURRENT_ADMIN
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    @Disabled

    #select self
    PlayersSelectedForDisplacement.append(eventPlayer)
    #if it's the first select show a message and do nothing
    if len(PlayersSelectedForDisplacement) == 1:
        bigMessage(eventPlayer, "First player, {0}, selected for displacement.".format(eventPlayer))
        #if there are two players selected show a message and switch their position
    elif len(PlayersSelectedForDisplacement) == 2:
        bigMessage(eventPlayer, "Second player, {0}, selected for displacement. Displacement complete!".format(eventPlayer))
        CompletePlayerPositionSwap()
        #fail safe, if more or none are selected reset the operation
    else:
        bigMessage(eventPlayer, "An error occured please try again.")
        PlayersSelectedForDisplacement = []


rule "[Logic][Cheat] force change selected card color (r)":
    @Event eachPlayer
    #Check if the right combination of buttons is pressed
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == false
    #A player cannot change the color of cards when they are creating HUD texts
    @Condition eventPlayer.IsCreatingHUDTexts == false
    #Check if the player has host privileges
    @Condition eventPlayer.CheatsEnabled == true
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    @Disabled

    #Cycle the color of the player's selected card
    eventPlayer.HandColors[eventPlayer.SelectedCardIndex] = COLORS[(COLORS.index(eventPlayer.HandColors[eventPlayer.SelectedCardIndex]) + 1) % len(COLORS)]
    #update the hud color
    UpdateColorCheat()


rule "[Logic][Cheat] cycle selected card symbol (special symbols) (shift + r)":
    @Event eachPlayer
    #Check if the right combination of buttons is pressed
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == true
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == true
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == false
    #A player cannot change the color of cards when they are creating HUD texts
    @Condition eventPlayer.IsCreatingHUDTexts == false
    #Check if the player has host privileges
    @Condition eventPlayer.CheatsEnabled == true
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    @Disabled

    #if it's a special card (non number/icon card)
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in SPECIAL_CARD_SYMBOLS:
        #cycle through the list of special cards and select the next one
        eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] = SPECIAL_CARD_SYMBOLS[(SPECIAL_CARD_SYMBOLS.index(eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex]) + 1) % len(SPECIAL_CARD_SYMBOLS)]
    else:
        #if not select the first special card
        eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] = SPECIAL_CARD_SYMBOLS[0]
    #if the card is a white special card
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in WHITE_CARD_SYMBOLS:
        #set the color to white
        eventPlayer.HandColors[eventPlayer.SelectedCardIndex] = "White"
        #if it's not a white special card and it already doesn't have a color
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "White" and not eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in WHITE_CARD_SYMBOLS:
        #set the color to a random color
        eventPlayer.HandColors[eventPlayer.SelectedCardIndex] = COLORS[random.randint(0, len(COLORS) - 1)]
    #render the hud text color
    UpdateColorCheat()


rule "[Logic][Cheat] increase selected card number value (shift + m1)":
    @Event eachPlayer
    #Check if the right combination of buttons is pressed
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == true
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == false
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == false
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_2) == false
    #Check if the player has host privileges
    @Condition eventPlayer.CheatsEnabled == true
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    #A player cannot change the color of cards when they are creating HUD texts
    @Condition eventPlayer.IsCreatingHUDTexts == false
    @Disabled

    #if the card is a number card
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in NUMBER_CARD_SYMBOLS:
        #increment the number
        eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] = NUMBER_CARD_SYMBOLS[(NUMBER_CARD_SYMBOLS.index(eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex]) + 1) % SETTING_AMOUNT_OF_NUMBERS]
    else:
        #if not just set the card to a 0 number card
        eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] = NUMBER_CARD_SYMBOLS[0]
    #if the card is white give it a random color
    if eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "White":
        eventPlayer.HandColors[eventPlayer.SelectedCardIndex] = COLORS[random.randint(0, len(COLORS) - 1)]
    #render the hud text color
    UpdateColorCheat()


rule "[Logic][Cheat] decrease selected card number value (shift + m2)":
    @Event eachPlayer
    #Check if the right combination of buttons is pressed
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == true
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == false
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == true
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == false
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_2) == false
    #Check if the player has host privileges
    @Condition eventPlayer.CheatsEnabled == true
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    #A player cannot change the color of cards when they are creating HUD texts
    @Condition eventPlayer.IsCreatingHUDTexts == false
    @Disabled

    #if the card is a number card
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in NUMBER_CARD_SYMBOLS:
        #decrement the number
        eventPlayer.TempNumber = (NUMBER_CARD_SYMBOLS.index(eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex]) - 1) % SETTING_AMOUNT_OF_NUMBERS
        eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] = NUMBER_CARD_SYMBOLS[eventPlayer.TempNumber if eventPlayer.TempNumber >= 0 else SETTING_AMOUNT_OF_NUMBERS + eventPlayer.TempNumber]
    else:
        #if not just set the card to a 0 number card
        eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] = NUMBER_CARD_SYMBOLS[0]
    #if the card is white give it a random color
    if eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "White":
        eventPlayer.HandColors[eventPlayer.SelectedCardIndex] = COLORS[random.randint(0, len(COLORS) - 1)]
    #render the hud text color
    UpdateColorCheat()


rule "[Logic][Cheat] replace selected card with a random number card (shift + e)":
    @Event eachPlayer
    #Check if the right combination of buttons is pressed
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == true
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == false
    @Condition eventPlayer.isHoldingButton(Button.SECONDARY_FIRE) == false
    @Condition eventPlayer.isHoldingButton(Button.RELOAD) == false
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_2) == true
    #Check if the player has host privileges
    @Condition eventPlayer.CheatsEnabled == true
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    @Disabled

    #add the current card from hand to deck
    TransferToDeckCheat()
    #remove the card from hand
    DiscardCardCheat()
    #add a random number card to hand
    AddRandomNumberCardCheat()


rule "[Logic][Cheat] force play jump in (shift + space)":
    @Event eachPlayer
    #The player is jumping
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true
    #The player is not crouching
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == false
    #Is using shift
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == true
    #Has host favor
    @Condition eventPlayer.CheatsEnabled == true
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    #check if player can't normally play the card
    @Condition Players[0] != eventPlayer
    @Condition (eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"White" or DiscardPileSymbol != eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] or not eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in WILD_CARD_SYMBOLS and eventPlayer.HandColors[eventPlayer.SelectedCardIndex] != DiscardPileColor) == true
    @Disabled

    #Modifying a players hand while something important is happening can cause invalid HUD text elements
    if IsCurrentlyPlayingAnimation or eventPlayer.IsCreatingHUDTexts:
        return
    #The player has not recently played a card
    if eventPlayer.JumpInCooldown:
        return
    #add current card from hand to deck
    TransferToDeckCheat()
    #copy the card color and symbol from discard pile
    eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] = DiscardPileSymbol
    eventPlayer.HandColors[eventPlayer.SelectedCardIndex] = DiscardPileColor
    #render the card color and symbol change
    UpdateColorCheat()
    #Set the highlight beam to the position of the event player
    HighlightBeamEffectAngle = horizontalAngleOfDirection(eventPlayer.MapPosition - MapPosition)
    HighlightBeamEffectTargetAngle = HighlightBeamEffectAngle
    #Set hacked effect to the player whose turn was taken
    Players[0].setStatusEffect(eventPlayer, Status.HACKED, 5)
    #Update the player queue to put the jumping player in front
    Players = Players.exclude(Players.slice(0, Players.index(eventPlayer))).concat(Players.slice(0, Players.index(eventPlayer)))
    #Show a message
    smallMessage(getAllPlayers(), "{0} jumped in!".format(eventPlayer))
    #Play some effects at the location of the player
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, eventPlayer.getPosition(), 30)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 50)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, 0.5 * Vector.UP + eventPlayer.MapPosition, 5)
    #Transfer the card to the discard pile
    TransferCardToDiscardPile()


rule "[Logic][Cheat] force play (shift + space)":
    @Event eachPlayer
    #The player is jumping
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true
    #The player is not crouching
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == false
    #Is using shift
    @Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == true
    #Has host favor
    @Condition eventPlayer.CheatsEnabled == true
    #if cheats are enabled
    @Condition SETTING_CHEAT_ENABLED == true
    #make sure player can't normally play the card
    @Condition Players[0] == eventPlayer
    @Condition (eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] != "Copycat" and eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"White" or CurrentPenalty != 0 and eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] != "Copycat" and not eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in PENALTY_CARD_SYMBOLS or (not (eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == DiscardPileSymbol or eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in "Copycat".concat(WILD_CARD_SYMBOLS) or DiscardPileColor == l"White" or eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == DiscardPileColor))) == true
    @Disabled

    #Modifying a players hand while something important is happening can cause invalid HUD text elements
    if IsCurrentlyPlayingAnimation or eventPlayer.IsCreatingHUDTexts:
        return
    #add current selected card from hand to the deck
    TransferToDeckCheat()
    #copy the card from discard pile
    eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] = DiscardPileSymbol
    eventPlayer.HandColors[eventPlayer.SelectedCardIndex] = DiscardPileColor
    UpdateColorCheat()
    #Transfer the card to the discard pile
    TransferCardToDiscardPile()


def AddRandomNumberCardCheat():
    @Name "[Subroutine][Cheat] add random number card"
    @Disabled

    #pick a random color and number
    eventPlayer.TempColor = COLORS[random.randint(0, len(COLORS) - 1)]
    eventPlayer.TempNumber = random.randint(0, SETTING_AMOUNT_OF_NUMBERS - 1)
    #Add the card to the player's hand
    eventPlayer.HandSymbols.append("{0}".format(eventPlayer.TempNumber))
    eventPlayer.HandColors.append("{0}".format(eventPlayer.TempColor))
    #Render the card
    eventPlayer.HandRenderQueueSymbols.append("{0}".format(eventPlayer.TempNumber))
    eventPlayer.HandRenderQueueColors.append("{0}".format(eventPlayer.TempColor))


def TransferToDeckCheat():
    @Name "[Subroutine][Cheat] add selected card to deck"
    @Disabled

    #Put the selected card back in the deck
    DeckSymbols.append(eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex])
    #Check whether the selected card is a wild card
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in WHITE_CARD_SYMBOLS:
        #Add a wild card back to the deck
        DeckColors.append(l"White")
    else:
        #Add a regular card back to the deck
        DeckColors.append(eventPlayer.HandColors[eventPlayer.SelectedCardIndex])


def DiscardCardCheat():
    @Name "[Subroutine][Cheat] remove selected card from hand"
    @Disabled

    #Remove the card from the player's hand
    del eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex]
    del eventPlayer.HandColors[eventPlayer.SelectedCardIndex]
    del eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex]
    #Destroy the HUD text associated with the player's card
    destroyHudText(eventPlayer.HandHUDTexts[eventPlayer.SelectedCardIndex])
    del eventPlayer.HandHUDTexts[eventPlayer.SelectedCardIndex]


def UpdateColorCheat():
    @Name "[Subroutine][Cheat] update selected card color"
    @Disabled

    #Destroy the currently selected HUD text
    destroyHudText(eventPlayer.HandHUDTexts[eventPlayer.SelectedCardIndex])
    #The the selected card is red
    if eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Red":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.RED, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is orange
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Orange":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.ORANGE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is yellow
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Yellow":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.YELLOW, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is lime green
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Lime Green":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.LIME_GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is green
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Green":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.GREEN, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is turquoise
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Turquoise":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.TURQUOISE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is aqua
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Aqua":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.AQUA, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is sky blue
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == "Sky Blue":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.SKY_BLUE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is blue
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Blue":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.BLUE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is purple
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"Purple":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.PURPLE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
        #The next card in queue is purple
    elif eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"White":
        #Create a new HUD text with the correct color with the same sort order value
        hudHeader(eventPlayer, eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex], HudPosition.LEFT, eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex], Color.WHITE, HudReeval.VISIBILITY, SpecVisibility.NEVER)
    #Keep track of the HUD text ID to delete it when the card is played
    eventPlayer.HandHUDTexts[eventPlayer.SelectedCardIndex] = getLastCreatedText()


def CompletePlayerPositionSwap():
    @Name "[Subroutine][Cheat] complete displacement operation"
    @Disabled

    #switch the map position of selected players
    TempMapPosition = PlayersSelectedForDisplacement[0].MapPosition
    PlayersSelectedForDisplacement[0].MapPosition = PlayersSelectedForDisplacement[1].MapPosition
    PlayersSelectedForDisplacement[1].MapPosition = TempMapPosition
    #teleport them to their new map position values
    PlayersSelectedForDisplacement[0].teleport(PlayersSelectedForDisplacement[0].MapPosition)
    PlayersSelectedForDisplacement[1].teleport(PlayersSelectedForDisplacement[1].MapPosition)
    #Reset the facing of the player towards the center
    PlayersSelectedForDisplacement[0].setFacing(MapPosition - PlayersSelectedForDisplacement[0].MapPosition, Relativity.TO_WORLD)
    PlayersSelectedForDisplacement[1].setFacing(MapPosition - PlayersSelectedForDisplacement[1].MapPosition, Relativity.TO_WORLD)
    #swap the array element associated with selected players in the players array
    PlayersSelectedForDisplacementID[0] = Players.index(PlayersSelectedForDisplacement[0])
    PlayersSelectedForDisplacementID[1] = Players.index(PlayersSelectedForDisplacement[1])
    Players[PlayersSelectedForDisplacementID[0]] = PlayersSelectedForDisplacement[1]
    Players[PlayersSelectedForDisplacementID[1]] = PlayersSelectedForDisplacement[0]
    #swap is complete, these values are no longer necessary
    PlayersSelectedForDisplacement = []
    PlayersSelectedForDisplacementID = []
    #update player selection queue for all
    SetPlayerSelectionQueueForAll()


rule "- CARD PLAYING LOGIC -":
    @Disabled
    @Delimiter



rule "[Logic] Play selected card":
    @Event eachPlayer
    #This rule is checked every time a player jumps, to prevent them from simply holding the jump button
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true
    #Player is not crouching, prevents players from playing a card and drawing a card at the same time
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == false
    #@Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false

    #Modifying a players hand while something important is happening can cause invalid HUD text elements
    if IsCurrentlyPlayingAnimation or eventPlayer.IsCreatingHUDTexts:
        return
    #The event player must be the active player
    if Players[0] != eventPlayer:
        return
    #The selected card is properly colored
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] != "Copycat" and eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"White":
        return
    #There is currently no penalty or the player is trying to increase the penalty
    if CurrentPenalty != 0 and eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] != "Copycat" and not eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in PENALTY_CARD_SYMBOLS:
        return
    #The player's card has the same symbol as the discard pile card or the player has a wild card selected or the discard pile card is an uncolored wild card or the player's card has the same color as the discard pile card
    if not (eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == DiscardPileSymbol or eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in "Copycat".concat(WILD_CARD_SYMBOLS) or DiscardPileColor == l"White" or eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == DiscardPileColor):
        return
    #Transfer the card to the discard pile
    TransferCardToDiscardPile()


rule "[Logic] Play selected card (jump in)":
    @Event eachPlayer
    #The player is jumping
    @Condition eventPlayer.isHoldingButton(Button.JUMP) == true
    #The player is not crouching
    @Condition eventPlayer.isHoldingButton(Button.CROUCH) == false
    #@Condition eventPlayer.isHoldingButton(Button.ABILITY_1) == false

    #Modifying a players hand while something important is happening can cause invalid HUD text elements
    if IsCurrentlyPlayingAnimation or eventPlayer.IsCreatingHUDTexts:
        return
    #Jump-ins are enabled
    if not SETTING_JUMP_INS:
        return
    #The event player is currently not the active player
    if Players[0] == eventPlayer:
        return
    #The player has not recently played a card
    if eventPlayer.JumpInCooldown:
        return
    #The selected card is properly colored
    if eventPlayer.HandColors[eventPlayer.SelectedCardIndex] == l"White":
        return
    #The discard pile card has the same symbol as the player's card
    if DiscardPileSymbol != eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex]:
        return
    #The player's card is a wild card or the color of the player's card matches the color of the discard pile card
    if not eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] in WILD_CARD_SYMBOLS and eventPlayer.HandColors[eventPlayer.SelectedCardIndex] != DiscardPileColor:
        return
    #Set the highlight beam to the position of the event player
    HighlightBeamEffectAngle = horizontalAngleOfDirection(eventPlayer.MapPosition - MapPosition)
    HighlightBeamEffectTargetAngle = HighlightBeamEffectAngle
    #Set hacked effect to the player whose turn was taken
    Players[0].setStatusEffect(eventPlayer, Status.HACKED, 5)
    #Update the player queue to put the jumping player in front
    Players = Players.exclude(Players.slice(0, Players.index(eventPlayer))).concat(Players.slice(0, Players.index(eventPlayer)))
    #Show a message
    smallMessage(getAllPlayers(), "{0} jumped in!".format(eventPlayer))
    #Play some effects at the location of the player
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, eventPlayer.getPosition(), 30)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 50)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, 0.5 * Vector.UP + eventPlayer.MapPosition, 5)
    #Transfer the card to the discard pile
    TransferCardToDiscardPile()


def TransferCardToDiscardPile():
    @Name "[Subroutine] Transfer selected card to the discard pile"

    #A copycat card was played
    if eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex] == "Copycat":
        #Show a message
        smallMessage(getAllPlayers(), "{0} copied {1}'s card!".format(eventPlayer, LastPlayedCardPlayer))
        #Add the card back to the deck
        DeckSymbols.append("Copycat")
        DeckColors.append(l"White")
        #A non-copycat card has been played
    else:
        #Set the variable for copycat messages to this player
        LastPlayedCardPlayer = eventPlayer
        #Put the discard pile card back in the deck
        DeckSymbols.append(DiscardPileSymbol)
        #Check whether the discard pile card is a wild card
        if DiscardPileSymbol in WILD_CARD_SYMBOLS:
            #Add a wild card back to the deck
            DeckColors.append(l"White")
        else:
            #Add a regular card back to the deck
            DeckColors.append(DiscardPileColor)
        #Transfer the card to the discard pile
        DiscardPileSymbol = eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex]
        DiscardPileColor = eventPlayer.HandColors[eventPlayer.SelectedCardIndex]
    #Remove the card from the player's hand
    del eventPlayer.HandSymbols[eventPlayer.SelectedCardIndex]
    del eventPlayer.HandColors[eventPlayer.SelectedCardIndex]
    del eventPlayer.HandHUDTextSortOrders[eventPlayer.SelectedCardIndex]
    #Destroy the HUD text associated with the player's card
    destroyHudText(eventPlayer.HandHUDTexts[eventPlayer.SelectedCardIndex])
    del eventPlayer.HandHUDTexts[eventPlayer.SelectedCardIndex]
    #Clamp the selected card index
    eventPlayer.SelectedCardIndex = min(eventPlayer.SelectedCardIndex, len(eventPlayer.HandSymbols) - 1)
    #Prevent the player from jumping in too fast
    eventPlayer.JumpInCooldown = 2
    chaseAtRate(eventPlayer.JumpInCooldown, 0, 1)
    #Play the an animation moving the played card to the discard pile
    DiscardPileSymbolMovementTimer = 1
    LastPlayedCardPosition = eventPlayer.getPosition()
    #Player should not play cards while the animation is happening
    IsCurrentlyPlayingAnimation++
    #Wait for the animation to finish
    wait(1)
    IsCurrentlyPlayingAnimation--
    #Play some effects
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.WHITE, MapPosition, 11)
    playEffect(getAllPlayers(), DynamicEffect.BUFF_EXPLOSION_SOUND, Color.WHITE, MapPosition, 30)
    DiscardPileColorMovementTimer = 0 - (DiscardPileColor != DiscardPileLastColor)
    DiscardPileLastColor = DiscardPileColor
    #Check whether the player has won
    if len(eventPlayer.HandSymbols) == 0:
        #End the game
        declarePlayerVictory(eventPlayer)
    else:
        #Pass the turn to the next player
        ChangeActivePlayer()


def ChangeActivePlayer():
    @Name "[Subroutine] Change active player"

    #A skip has been played or there are 2 players and a reverse has been played
    if DiscardPileSymbol == "Skip" or len(Players) == 2 and DiscardPileSymbol == "Reverse":
        ChangeActivePlayer_Skip()
        #A reverse has been played
    elif DiscardPileSymbol == "Reverse":
        ChangeActivePlayer_Reverse()
        #A penalty card has been played
    elif DiscardPileSymbol in PENALTY_CARD_SYMBOLS:
        ChangeActivePlayer_Penalty()
        #A swap has been played and there is a player to be swapped with
    elif DiscardPileSymbol == "Swap" and len(eventPlayer.SelectedPlayerQueue) > 0:
        ChangeActivePlayer_Swap()
        #A swap all card has been played
    elif DiscardPileSymbol == "Swap-All":
        ChangeActivePlayer_SwapAll()
        #A shuffle card has been played
    elif DiscardPileSymbol == "Shuffle":
        ChangeActivePlayer_Shuffle()
        #A card has been played with no special behaviour
    else:
        ChangeActivePlayer_Default()
    #Reset the remaining turn time
    TurnTimeRemaining = SETTING_TURN_TIME_LIMIT
    #Reset the highlight pulse timer
    HighlightEffectPulseTimer = 0
    #Move the highlight beam
    UpdateHighlightBeamPosition()


def ChangeActivePlayer_Default():
    @Name "[Subroutine] Change active player (default)"

    #The current active player is placed at the back of the queue
    Players.append(Players[0])
    del Players[0]


def ChangeActivePlayer_Skip():
    @Name "[Subroutine] Change active player (skip)"

    #Show a message
    smallMessage(getAllPlayers(), "{0} skipped {1}!".format(eventPlayer, Players[(1 + Players.index(eventPlayer)) % len(Players)]))
    #Advance to the player which should be skipped
    ChangeActivePlayer_Default()
    #Freeze the skipped player
    Players[0].setStatusEffect(Players.last(), Status.FROZEN, 4)
    #Advance to the next player
    ChangeActivePlayer_Default()


def ChangeActivePlayer_Reverse():
    @Name "[Subroutine] Change active player (reverse)"

    #Reverse the queue
    Players = sorted(Players, lambda player: 0 - Players.index(player))
    DirectionOfPlayTimer = -5 * DirectionOfPlay
    DirectionOfPlay *= -1


def ChangeActivePlayer_Penalty():
    @Name "[Subroutine] Change active player (penalty)"

    #Check whether a +2 was played
    if DiscardPileSymbol == "+2" or CurrentPenalty == 0 and DiscardPileSymbol == "×2":
        CurrentPenalty += 2
        #Check whether a +4 was played
    elif DiscardPileSymbol == "+4":
        CurrentPenalty += 4
        #Check whether a ×2 was played
    elif DiscardPileSymbol == "×2":
        CurrentPenalty *= 2
    #Advance to the next player
    ChangeActivePlayer_Default()


def ChangeActivePlayer_Swap():
    @Name "[Subroutine] Change active player (swap)"

    #Preload the heroes
    #eventPlayer.preloadHero(eventPlayer.SelectedPlayerQueue[0].getHero())
    #eventPlayer.SelectedPlayerQueue[0].preloadHero(eventPlayer.getHero())
    #Play the animation
    PlaySwapCardAnimation()
    #Clear the hand HUD text elements of the event player
    PlayerToClearHand = eventPlayer
    ClearHandHUDTexts()
    #Clear the hand HUD text elements of the event player
    PlayerToClearHand = eventPlayer.SelectedPlayerQueue[0]
    ClearHandHUDTexts()
    #Swap the symbols of the players and set the render queues
    eventPlayer.HandRenderQueueSymbols = eventPlayer.SelectedPlayerQueue[0].HandSymbols
    eventPlayer.SelectedPlayerQueue[0].HandRenderQueueSymbols = eventPlayer.HandSymbols
    eventPlayer.HandSymbols = eventPlayer.HandRenderQueueSymbols
    eventPlayer.SelectedPlayerQueue[0].HandSymbols = eventPlayer.SelectedPlayerQueue[0].HandRenderQueueSymbols
    #Swap the colors of the players and set the render queues
    eventPlayer.HandRenderQueueColors = eventPlayer.SelectedPlayerQueue[0].HandColors
    eventPlayer.SelectedPlayerQueue[0].HandRenderQueueColors = eventPlayer.HandColors
    eventPlayer.HandColors = eventPlayer.HandRenderQueueColors
    eventPlayer.SelectedPlayerQueue[0].HandColors = eventPlayer.SelectedPlayerQueue[0].HandRenderQueueColors
    #Reset the selected card index
    eventPlayer.SelectedCardIndex = 0
    eventPlayer.SelectedPlayerQueue[0].SelectedCardIndex = 0
    #Swap the heroes of the swapped players
    #TempHero = eventPlayer.getHero()
    #eventPlayer.startForcingHero(eventPlayer.SelectedPlayerQueue[0].getHero())
    #eventPlayer.SelectedPlayerQueue[0].startForcingHero(TempHero)
    #Advance to the next player
    ChangeActivePlayer_Default()


def ChangeActivePlayer_SwapAll():
    @Name "[Subroutine] Change active player (swap all)"

    #Loop over every player once before the animation
    #for TempPlayerIndex in range(len(Players)):
    #Preload every hero
    #(Players[(TempPlayerIndex + 1) % len(Players)]).preloadHero(Players[TempPlayerIndex].getHero())
    #__end__()
    #Play the animation
    PlaySpecialCardAnimation()
    #Save the hero of the last player
    #TempHero = Players.last().getHero()
    #Loop over every player once
    for TempPlayerIndex in range(len(Players)):
        #Set the hero of the next player
        #(Players[(TempPlayerIndex + 1) % len(Players)]).startForcingHero(Players[TempPlayerIndex].getHero())
        #Clear the hand HUD text elements of the current player
        PlayerToClearHand = Players[TempPlayerIndex]
        ClearHandHUDTexts()
        #Store the hand of the current player in the hand render queue of the next player
        (Players[(TempPlayerIndex + 1) % len(Players)]).HandRenderQueueSymbols = Players[TempPlayerIndex].HandSymbols
        (Players[(TempPlayerIndex + 1) % len(Players)]).HandRenderQueueColors = Players[TempPlayerIndex].HandColors
        #Reset the selected card index of the current player
        Players[TempPlayerIndex].SelectedCardIndex = 0
        #Play an effect at the current player
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, Players[TempPlayerIndex].getPosition(), 40)
    #Set the hero of the first player
    #Players[0].startForcingHero(TempHero)
    #Loop over every player a second time to set the hand variables
    for TempPlayerIndex in range(len(Players)):
        #Set the hand of the current player to the hand stored in it's render queue, leave the render queue such that the hand can be rendered
        Players[TempPlayerIndex].HandSymbols = Players[TempPlayerIndex].HandRenderQueueSymbols
        Players[TempPlayerIndex].HandColors = Players[TempPlayerIndex].HandRenderQueueColors
    #Advance to the next player
    ChangeActivePlayer_Default()
    #Show a message
    smallMessage(getAllPlayers(), "All hands swapped!")


def ChangeActivePlayer_Shuffle():
    @Name "[Subroutine] Change active player (shuffle)"

    PlaySpecialCardAnimation()
    #Store the deck
    TempSymbolIndex = DeckSymbols
    TempColorIndex = DeckColors
    #Empty the deck
    DeckSymbols = []
    DeckColors = []
    #Loop over every player once
    for TempPlayerIndex in range(len(Players)):
        #Set the requested cards for the current player
        Players[TempPlayerIndex].AmountOfRequestedCards = len(Players[TempPlayerIndex].HandSymbols)
        #Add the player's cards to the deck
        DeckSymbols.append(Players[TempPlayerIndex].HandSymbols)
        DeckColors.append(Players[TempPlayerIndex].HandColors)
        #Clear the hand HUD text elements of the current player
        PlayerToClearHand = Players[TempPlayerIndex]
        ClearHandHUDTexts()
        #Clear the player's cards
        Players[TempPlayerIndex].HandSymbols = []
        Players[TempPlayerIndex].HandColors = []
        #Reset the selected card index of the current player
        Players[TempPlayerIndex].SelectedCardIndex = 0
        #Play an effect at the current player
        playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, Players[TempPlayerIndex].getPosition(), 40)
    #Loop over every player a second time, the deck now contains all player hands
    for TempPlayerIndex in range(len(Players)):
        #Set the player to deal to and request the cards
        PlayerToDealTo = Players[TempPlayerIndex]
        DealRequestedCards()
    #Restore the deck
    DeckSymbols = TempSymbolIndex
    DeckColors = TempColorIndex
    #Advance to the next player
    ChangeActivePlayer_Default()
    #Show a message
    smallMessage(getAllPlayers(), "All hands shuffled!")


def PlaySwapCardAnimation():
    @Name "[Subroutine][Effects] Play swap card animation"

    #Set the volume of the sound effects to 0 so it can slowly be chased back to maximum volume
    SpecialCardSoundEffectVolume = 0
    #Loop over both players
    for TempPlayerIndex in range(len(SwapCardEffectPlayers)):
        #Stop any motion
        SwapCardEffectPlayers[TempPlayerIndex].applyImpulse(Vector.DOWN, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        SwapCardEffectPlayers[TempPlayerIndex].applyImpulse(Vector.BACKWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        SwapCardEffectPlayers[TempPlayerIndex].applyImpulse(Vector.FORWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        SwapCardEffectPlayers[TempPlayerIndex].applyImpulse(Vector.RIGHT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        SwapCardEffectPlayers[TempPlayerIndex].applyImpulse(Vector.LEFT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #Start an effect between the active and swapped player
    SwapCardEffectPlayers = [Players[0], Players[0].SelectedPlayerQueue[0]]
    #Add status effect
    SwapCardEffectPlayers.setStatusEffect(null, Status.ROOTED, 5)
    #Start raising players upwards
    SwapCardEffectPlayers.startAcceleration(Vector.UP, 1000, 4.1, Relativity.TO_WORLD)
    #Players should not play cards while the animation is happening
    IsCurrentlyPlayingAnimation++
    wait(5)
    IsCurrentlyPlayingAnimation--
    #Stop acceleration effect
    getAllPlayers().stopAcceleration()
    #Stop the effect between the active and swapped player
    SwapCardEffectPlayers = null
    #Play an effect at the active player
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, Players[0].getPosition(), 40)
    #Play an effect at the swapped player
    playEffect(getAllPlayers(), DynamicEffect.GOOD_PICKUP_EFFECT, Color.PURPLE, Players[0].SelectedPlayerQueue[0].getPosition(), 20)
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, MapPosition, 100)
    #Show a message
    smallMessage(getAllPlayers(), "{0} swapped with {1}!".format(eventPlayer, eventPlayer.SelectedPlayerQueue[0]))


def PlaySpecialCardAnimation():
    @Name "[Subroutine][Effects] Play special card animation"

    #Set the volume of the sound effects to 0 so it can slowly be chased back to maximum volume
    SpecialCardSoundEffectVolume = 0
    #Loop over all players
    for TempPlayerIndex in range(len(Players)):
        #Stop any motion
        Players[TempPlayerIndex].applyImpulse(Vector.DOWN, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        Players[TempPlayerIndex].applyImpulse(Vector.BACKWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        Players[TempPlayerIndex].applyImpulse(Vector.FORWARD, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        Players[TempPlayerIndex].applyImpulse(Vector.RIGHT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        Players[TempPlayerIndex].applyImpulse(Vector.LEFT, 0.001, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    #Add status effects
    Players.setStatusEffect(null, Status.ROOTED, 5)
    #Start raising players upwards
    Players.startAcceleration(Vector.UP, 1000, 4.1, Relativity.TO_WORLD)
    #Show the effects for all players
    ShouldShowSpecialCardEffects = true
    #Players should not play cards while the animation is happening
    IsCurrentlyPlayingAnimation++
    wait(5)
    IsCurrentlyPlayingAnimation--
    #Stop showing the effects
    ShouldShowSpecialCardEffects = false
    #Stop acceleration effect
    getAllPlayers().stopAcceleration()
    #Play some effects
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION, Color.PURPLE, MapPosition, 20)
    playEffect(getAllPlayers(), DynamicEffect.BAD_EXPLOSION, Color.PURPLE, MapPosition, 40)
    #Play a sound effect
    playEffect(getAllPlayers(), DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, MapPosition, 50)


def UpdateHighlightBeamPosition():
    @Name "[Subroutine][Effects] Set highlight beam target angle"

    HighlightBeamEffectTargetAngle = horizontalAngleOfDirection(Players[0].MapPosition - MapPosition)
    while DirectionOfPlay * HighlightBeamEffectAngle < DirectionOfPlay * HighlightBeamEffectTargetAngle:
        HighlightBeamEffectTargetAngle += -360 * DirectionOfPlay
    while DirectionOfPlay * HighlightBeamEffectAngle - 360 > DirectionOfPlay * HighlightBeamEffectTargetAngle:
        HighlightBeamEffectTargetAngle += 360 * DirectionOfPlay
