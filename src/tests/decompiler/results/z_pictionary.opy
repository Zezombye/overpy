settings {
    "main": {
        "description": "Overwatch Pictionary 1.2 by PMAJellies",
        "modeName": "Overwatch Pictionary"
    },
    "lobby": {
        "allowPlayersInQueue": true,
        "enableMatchVoiceChat": true
    },
    "gamemodes": {
        "ffa": {
            "enabledMaps": [
                "workshopChamber"
            ]
        },
        "general": {
            "gamemodeStartTrigger": "manual",
            "heroLimit": "off",
            "scoreToWin": 50
        }
    },
    "heroes": {
        "allTeams": {
            "general": {
                "enableUlt": false
            }
        }
    }
}

#Global variables

globalvar PlayerArray 0
globalvar StartPictionary 1
globalvar Drawer 2
globalvar Turn 3
globalvar DrawerRadius 4
globalvar DrawerColor 5
globalvar Timer 6
globalvar DrawTool 7
globalvar ForLoop 8
globalvar NumOfEffects 9
globalvar AllWordsArray 10
globalvar ChoosingWord 11
globalvar PictionaryWord 12
globalvar NumGuessed 13
globalvar RoundNum 14
globalvar Winner 15
globalvar ScoreboardArray 16
globalvar WordText 17
globalvar HiddenWord 19
globalvar BannedWords 20


#Player variables

playervar Points 0
playervar BulletEffect 2
playervar Firing 3
playervar WordArray 4
playervar GuessedWord 6


#Subroutine names

subroutine Menu 0
subroutine Pictionary 1
subroutine Keyboard 2
subroutine Scoreboard 3
subroutine NewDrawer 4
subroutine Winner 5


#Activated extensions

#!extension playMoreEffects


#Only remove the following directive if the gamemode does not use type casting tricks such as A+0, A*0, A and true, etc which would otherwise be optimized out.
#!optimizeStrict


rule "Debug Hud":
    @Event eachPlayer
    @Condition eventPlayer.isDummy() == false
    @Disabled
    
    hudSubheader(eventPlayer, eventPlayer.getFacingDirection(), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubheader(eventPlayer, eventPlayer.getPosition(), HudPosition.LEFT, 0, Color.RED, HudReeval.VISIBILITY_AND_STRING)
    hudSubheader(eventPlayer, raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), HudPosition.LEFT, 0, Color.GREEN, HudReeval.VISIBILITY_AND_STRING)


rule "Banned Words":
    BannedWords = []
    BannedWords.append("***")
    BannedWords.append("*****")
    BannedWords.append("******")
    BannedWords.append("*****")
    BannedWords.append("*****H")
    BannedWords.append("******")
    BannedWords.append("*****R")
    BannedWords.append("NIGOR")
    BannedWords.append("****OR")
    BannedWords.append("*****")
    BannedWords.append("****")
    BannedWords.append("***")
    BannedWords.append("******")
    BannedWords.append("TESTTESTTEST")


rule "Pictionary All Words Array 1":
    AllWordsArray = []
    AllWordsArray.append("BANANA")
    AllWordsArray.append("PUMPKIN")
    AllWordsArray.append("APPLE")
    AllWordsArray.append("GRAPES")
    AllWordsArray.append("CARROT")
    AllWordsArray.append("FISH")
    AllWordsArray.append("HOTDOG")
    AllWordsArray.append("PIZZA")
    AllWordsArray.append("PINEAPPLE")
    AllWordsArray.append("CHICKEN")
    AllWordsArray.append("PIG")
    AllWordsArray.append("DOG")
    AllWordsArray.append("CAT")
    AllWordsArray.append("ELEPHANT")
    AllWordsArray.append("SNAKE")
    AllWordsArray.append("SHARK")
    AllWordsArray.append("BUTTERFLY")
    AllWordsArray.append("SPIDER")
    AllWordsArray.append("FLOWER")
    AllWordsArray.append("TREE")
    AllWordsArray.append("VOLCANO")
    AllWordsArray.append("TORNADO")
    AllWordsArray.append("OCEAN")
    AllWordsArray.append("SEAWEED")
    AllWordsArray.append("ISLAND")
    AllWordsArray.append("WATERFALL")
    AllWordsArray.append("EARTH")
    AllWordsArray.append("MOON")
    AllWordsArray.append("SUN")
    AllWordsArray.append("SATURN")
    AllWordsArray.append("HEADPHONES")
    AllWordsArray.append("PHONE")
    AllWordsArray.append("KEYBOARD")
    AllWordsArray.append("MOUSE")
    AllWordsArray.append("MICROPHONE")
    AllWordsArray.append("MONEY")
    AllWordsArray.append("HAT")
    AllWordsArray.append("DESK")
    AllWordsArray.append("BED")
    AllWordsArray.append("TOOTHBRUSH")
    AllWordsArray.append("TOILET")
    AllWordsArray.append("CHAIR")
    AllWordsArray.append("FIRE")
    AllWordsArray.append("WATER")
    AllWordsArray.append("LIGHTNING")
    AllWordsArray.append("NIKE")
    AllWordsArray.append("COKE")
    AllWordsArray.append("PEPSI")
    AllWordsArray.append("OVERWATCH")
    AllWordsArray.append("MINECRAFT")
    AllWordsArray.append("MCDONALDS")
    AllWordsArray.append("BURGER KING")
    AllWordsArray.append("TOYOTA")
    AllWordsArray.append("FACEBOOK")
    AllWordsArray.append("YOUTUBE")
    AllWordsArray.append("TWITTER")
    AllWordsArray.append("REDDIT")
    AllWordsArray.append("WINDOWS")
    AllWordsArray.append("FOOTBALL")
    AllWordsArray.append("BASEBALL")
    AllWordsArray.append("TENNIS")
    AllWordsArray.append("GOLF")
    AllWordsArray.append("BASKETBALL")
    AllWordsArray.append("SOCCER")
    AllWordsArray.append("FOOTBALL")
    AllWordsArray.append("HOCKEY")
    AllWordsArray.append("PLAYSTATION")
    AllWordsArray.append("NINTENDO")
    AllWordsArray.append("STEAM")
    AllWordsArray.append("DISCORD")
    AllWordsArray.append("XBOX")
    AllWordsArray.append("MARIO")
    AllWordsArray.append("SONIC")
    AllWordsArray.append("KIRBY")
    AllWordsArray.append("PIKACHU")
    AllWordsArray.append("PACMAN")
    AllWordsArray.append("LINK")
    AllWordsArray.append("TETRIS")
    AllWordsArray.append("PONG")
    AllWordsArray.append("BATMAN")
    AllWordsArray.append("SUPERMAN")
    AllWordsArray.append("SPIDERMAN")
    AllWordsArray.append("IRON MAN")
    AllWordsArray.append("CAPTAIN AMERICA")
    AllWordsArray.append("THOR")
    AllWordsArray.append("JEFF KAPLAN")
    AllWordsArray.append("TRUMP")
    AllWordsArray.append("OBAMA")
    AllWordsArray.append("KIT KAT")
    AllWordsArray.append("REESES")
    AllWordsArray.append("CANDY CORN")
    AllWordsArray.append("DOCTOR")
    AllWordsArray.append("POLICE")
    AllWordsArray.append("FARMER")
    AllWordsArray.append("BOXING")
    AllWordsArray.append("BOOK")
    AllWordsArray.append("RAINBOW")
    AllWordsArray.append("TRUCK")
    AllWordsArray.append("CAR")


rule "Pictionary All Words Array 2":
    AllWordsArray.append("BIKINI")
    AllWordsArray.append("BEARD")
    AllWordsArray.append("EYE")
    AllWordsArray.append("LADYBUG")
    AllWordsArray.append("NOSE")
    AllWordsArray.append("BEE")
    AllWordsArray.append("MAILBOX")
    AllWordsArray.append("STARFISH")
    AllWordsArray.append("CRAB")
    AllWordsArray.append("LOBSTER")
    AllWordsArray.append("ANGRY")
    AllWordsArray.append("SAD")
    AllWordsArray.append("HAPPY")
    AllWordsArray.append("DRAGON")
    AllWordsArray.append("LIPSTICK")
    AllWordsArray.append("FLAG")
    AllWordsArray.append("ROBOT")
    AllWordsArray.append("MAGNET")
    AllWordsArray.append("TELESCOPE")
    AllWordsArray.append("TENT")
    AllWordsArray.append("MUSIC")
    AllWordsArray.append("PIANO")
    AllWordsArray.append("BIRD")
    AllWordsArray.append("TACO")
    AllWordsArray.append("CLOCK")
    AllWordsArray.append("WATCH")
    AllWordsArray.append("PIRATE")
    AllWordsArray.append("BOAT")
    AllWordsArray.append("MOM")
    AllWordsArray.append("DAD")
    AllWordsArray.append("CAKE")
    AllWordsArray.append("PIE")
    AllWordsArray.append("CAMERA")
    AllWordsArray.append("TWITCH")
    AllWordsArray.append("PHOTOSHOP")
    AllWordsArray.append("SPOTIFY")
    AllWordsArray.append("INSTAGRAM")
    AllWordsArray.append("FIREFOX")
    AllWordsArray.append("CALCULATOR")
    AllWordsArray.append("ANDROID")
    AllWordsArray.append("POPCORN")
    AllWordsArray.append("DICE")
    AllWordsArray.append("PENCIL")
    AllWordsArray.append("SHAVE")
    AllWordsArray.append("BALLOON")
    AllWordsArray.append("DIAMOND")
    AllWordsArray.append("OCTOPUS")
    AllWordsArray.append("FLORIDA")
    AllWordsArray.append("CUPCAKE")
    AllWordsArray.append("SCISSORS")
    AllWordsArray.append("FORK")
    AllWordsArray.append("SPOON")
    AllWordsArray.append("KNIFE")
    AllWordsArray.append("SANDWICH")
    AllWordsArray.append("GLASSES")
    AllWordsArray.append("BUBBLEGUM")
    AllWordsArray.append("JELLYFISH")
    AllWordsArray.append("STRAWBERRY")
    AllWordsArray.append("LIGHTSABER")
    AllWordsArray.append("FLASHLIGHT")
    AllWordsArray.append("SPONGEBOB")
    AllWordsArray.append("SQUIDWARD")
    AllWordsArray.append("HOMER")
    AllWordsArray.append("MICKEY MOUSE")
    AllWordsArray.append("SHAGGY")
    AllWordsArray.append("DONALD DUCK")
    AllWordsArray.append("PATRICK")
    AllWordsArray.append("TOM AND JERRY")
    AllWordsArray.append("SAMURAI JACK")
    AllWordsArray.append("DEXTER")
    AllWordsArray.append("AVATAR")
    AllWordsArray.append("DUCKTALES")
    AllWordsArray.append("PHINEAS AND FERB")
    AllWordsArray.append("HEART")
    AllWordsArray.append("PICKLE RICK")
    AllWordsArray.append("JAWS")
    AllWordsArray.append("JURASSIC PARK")
    AllWordsArray.append("STAR WARS")
    AllWordsArray.append("ET")
    AllWordsArray.append("LION KING")
    AllWordsArray.append("TOY STORY")
    AllWordsArray.append("PINOCCHIO")
    AllWordsArray.append("GENIE")
    AllWordsArray.append("NEMO")
    AllWordsArray.append("UP")
    AllWordsArray.append("MONSTERS INC")
    AllWordsArray.append("DORY")
    AllWordsArray.append("GRENADE")
    AllWordsArray.append("YODA")
    AllWordsArray.append("ICE")
    AllWordsArray.append("SKITTLES")
    AllWordsArray.append("DEATH")
    AllWordsArray.append("LADDER")
    AllWordsArray.append("COFFIN")
    AllWordsArray.append("ELMO")
    AllWordsArray.append("HARRY POTTER")
    AllWordsArray.append("TEAR")
    AllWordsArray.append("BEACH")
    AllWordsArray.append("MUSTACHE")


rule "Pictionary All Words Array 3":
    AllWordsArray.append("ZENYATTA")
    AllWordsArray.append("ANA")
    AllWordsArray.append("LUCIO")
    AllWordsArray.append("ZARYA")
    AllWordsArray.append("REINHARDT")
    AllWordsArray.append("WRECKING BALL")
    AllWordsArray.append("MCCREE")
    AllWordsArray.append("ASHE")
    AllWordsArray.append("DOOMFIST")
    AllWordsArray.append("MOIRA")
    AllWordsArray.append("SOLDIER")
    AllWordsArray.append("DVA")
    AllWordsArray.append("ORISA")
    AllWordsArray.append("WIDOWMAKER")
    AllWordsArray.append("GENJI")
    AllWordsArray.append("HANZO")
    AllWordsArray.append("BASTION")
    AllWordsArray.append("TORBJORN")
    AllWordsArray.append("SIGMA")
    AllWordsArray.append("NOTHING")
    AllWordsArray.append("DRUGS")
    AllWordsArray.append("WEED")
    AllWordsArray.append("SHADOW")
    AllWordsArray.append("HAIR")
    AllWordsArray.append("WINSTON")
    AllWordsArray.append("JOYSTICK")
    AllWordsArray.append("BLENDER")
    AllWordsArray.append("SPRING")
    AllWordsArray.append("WINTER")
    AllWordsArray.append("SUMMER")
    AllWordsArray.append("WHEEL")
    AllWordsArray.append("PLANE")
    AllWordsArray.append("HELICOPTER")
    AllWordsArray.append("ZOMBIE")
    AllWordsArray.append("HORSE")
    AllWordsArray.append("SQUID")
    AllWordsArray.append("BOWSER")
    AllWordsArray.append("LEAF")
    AllWordsArray.append("JAZZ")
    AllWordsArray.append("FOX")


rule "Pictionary All Words Array 4":
    AllWordsArray.append("PEOPLE")
    AllWordsArray.append("HISTORY")
    AllWordsArray.append("ART")
    AllWordsArray.append("WORLD")
    AllWordsArray.append("MAP")
    AllWordsArray.append("TWO")
    AllWordsArray.append("FAMILY")
    AllWordsArray.append("HEALTH")
    AllWordsArray.append("COMPUTER")
    AllWordsArray.append("MEAT")
    AllWordsArray.append("YEAR")
    AllWordsArray.append("THANKS")
    AllWordsArray.append("MUSIC")
    AllWordsArray.append("PERSON")
    AllWordsArray.append("FOOD")
    AllWordsArray.append("LAW")
    AllWordsArray.append("BIRD")
    AllWordsArray.append("ABILITY")
    AllWordsArray.append("LOVE")
    AllWordsArray.append("TELEVISION")
    AllWordsArray.append("SCIENCE")
    AllWordsArray.append("TEMPERATURE")
    AllWordsArray.append("STORY")
    AllWordsArray.append("OVEN")
    AllWordsArray.append("LANGUAGE")
    AllWordsArray.append("PLAYER")
    AllWordsArray.append("VIDEO")
    AllWordsArray.append("WEEK")
    AllWordsArray.append("COUNTRY")
    AllWordsArray.append("EXAM")
    AllWordsArray.append("MOVIE")
    AllWordsArray.append("ARMY")
    AllWordsArray.append("CAMERA")
    AllWordsArray.append("PAPER")
    AllWordsArray.append("CHILD")
    AllWordsArray.append("MONTH")
    AllWordsArray.append("GOAL")
    AllWordsArray.append("AUDIENCE")
    AllWordsArray.append("FISHING")
    AllWordsArray.append("MARRIAGE")
    AllWordsArray.append("MEDICINE")
    AllWordsArray.append("TEACHER")
    AllWordsArray.append("NIGHT")
    AllWordsArray.append("CHEMISTRY")
    AllWordsArray.append("DISEASE")
    AllWordsArray.append("DISK")
    AllWordsArray.append("ROAD")
    AllWordsArray.append("SOUP")
    AllWordsArray.append("ADDITION")
    AllWordsArray.append("MATH")
    AllWordsArray.append("PAINTING")
    AllWordsArray.append("STUDENT")
    AllWordsArray.append("WOOD")
    AllWordsArray.append("OFFICE")
    AllWordsArray.append("PRESIDENT")
    AllWordsArray.append("CIGARETTE")
    AllWordsArray.append("DRIVER")
    AllWordsArray.append("FLIGHT")
    AllWordsArray.append("LENGTH")
    AllWordsArray.append("MAGAZINE")
    AllWordsArray.append("NEWSPAPER")
    AllWordsArray.append("TEACHING")
    AllWordsArray.append("CELL")
    AllWordsArray.append("DEALER")
    AllWordsArray.append("LAKE")
    AllWordsArray.append("PHONE")
    AllWordsArray.append("DEATH")
    AllWordsArray.append("WOMAN")
    AllWordsArray.append("BLOOD")
    AllWordsArray.append("WEALTH")
    AllWordsArray.append("CITY")
    AllWordsArray.append("DEPTH")
    AllWordsArray.append("GRANDMOTHER")
    AllWordsArray.append("HEART")
    AllWordsArray.append("PHOTO")
    AllWordsArray.append("RECIPE")
    AllWordsArray.append("PERCENTAGE")
    AllWordsArray.append("AD")
    AllWordsArray.append("COLLEGE")
    AllWordsArray.append("MEMORY")
    AllWordsArray.append("STORAGE")
    AllWordsArray.append("VERSION")
    AllWordsArray.append("ALCOHOL")
    AllWordsArray.append("ARGUMENT")
    AllWordsArray.append("HIGHWAY")
    AllWordsArray.append("LOSS")
    AllWordsArray.append("STEAK")
    AllWordsArray.append("CANCER")
    AllWordsArray.append("CURRENCY")
    AllWordsArray.append("ENTRY")
    AllWordsArray.append("MIXTURE")
    AllWordsArray.append("VIRUS")
    AllWordsArray.append("ACTOR")
    AllWordsArray.append("CLASSROOM")
    AllWordsArray.append("DELIVERY")
    AllWordsArray.append("DIFFICULTY")
    AllWordsArray.append("DRAMA")
    AllWordsArray.append("ELECTION")
    AllWordsArray.append("ENGINE")
    AllWordsArray.append("FOOTBALL")
    AllWordsArray.append("HOTEL")
    AllWordsArray.append("OWNER")
    AllWordsArray.append("BATH")
    AllWordsArray.append("BREAD")
    AllWordsArray.append("CANDIDATE")
    AllWordsArray.append("CLIMATE")
    AllWordsArray.append("ELEVATOR")
    AllWordsArray.append("EMOTION")
    AllWordsArray.append("GUEST")
    AllWordsArray.append("HEIGHT")
    AllWordsArray.append("MALL")
    AllWordsArray.append("MANAGER")
    AllWordsArray.append("RECORDING")
    AllWordsArray.append("CHARITY")
    AllWordsArray.append("COUSIN")
    AllWordsArray.append("EDITOR")
    AllWordsArray.append("GUITAR")
    AllWordsArray.append("MOM")
    AllWordsArray.append("REFLECTION")
    AllWordsArray.append("REFRIGERATOR")
    AllWordsArray.append("SINGER")
    AllWordsArray.append("TENNIS")
    AllWordsArray.append("BASKET")
    AllWordsArray.append("BONUS")
    AllWordsArray.append("CABINET")
    AllWordsArray.append("CHURCH")
    AllWordsArray.append("CLOTHES")
    AllWordsArray.append("COFFEE")
    AllWordsArray.append("DINNER")
    AllWordsArray.append("DRAWING")
    AllWordsArray.append("HAIR")
    AllWordsArray.append("LAB")
    AllWordsArray.append("MEASUREMENT")
    AllWordsArray.append("MUD")
    AllWordsArray.append("ORANGE")
    AllWordsArray.append("POETRY")
    AllWordsArray.append("POLICE")
    AllWordsArray.append("QUEEN")
    AllWordsArray.append("RATIO")
    AllWordsArray.append("RESTAURANT")
    AllWordsArray.append("SONG")
    AllWordsArray.append("TOOTH")
    AllWordsArray.append("TOWN")
    AllWordsArray.append("VEHICLE")
    AllWordsArray.append("VOLUME")
    AllWordsArray.append("WIFE")
    AllWordsArray.append("AIRPORT")
    AllWordsArray.append("BASEBALL")
    AllWordsArray.append("CHAPTER")
    AllWordsArray.append("ERROR")
    AllWordsArray.append("FARMER")
    AllWordsArray.append("GATE")
    AllWordsArray.append("GIRL")
    AllWordsArray.append("HALL")
    AllWordsArray.append("HISTORIAN")
    AllWordsArray.append("HOSPITAL")
    AllWordsArray.append("INJURY")
    AllWordsArray.append("MEAL")
    AllWordsArray.append("PIE")
    AllWordsArray.append("POEM")
    AllWordsArray.append("PROPOSAL")
    AllWordsArray.append("RIVER")
    AllWordsArray.append("SON")
    AllWordsArray.append("TEA")
    AllWordsArray.append("VILLAGE")
    AllWordsArray.append("WARNING")
    AllWordsArray.append("WINNER")
    AllWordsArray.append("WRITER")
    AllWordsArray.append("BREATH")
    AllWordsArray.append("BUYER")
    AllWordsArray.append("CHEST")
    AllWordsArray.append("CHOCOLATE")
    AllWordsArray.append("COOKIE")
    AllWordsArray.append("DAD")
    AllWordsArray.append("DESK")
    AllWordsArray.append("GARBAGE")
    AllWordsArray.append("GROCERY")
    AllWordsArray.append("HONEY")
    AllWordsArray.append("INSECT")
    AllWordsArray.append("KING")
    AllWordsArray.append("LADDER")
    AllWordsArray.append("MENU")
    AllWordsArray.append("PENALTY")
    AllWordsArray.append("PIANO")
    AllWordsArray.append("POTATO")
    AllWordsArray.append("PROFESSOR")
    AllWordsArray.append("SALAD")
    AllWordsArray.append("SISTER")
    AllWordsArray.append("TONGUE")
    AllWordsArray.append("WEAKNESS")
    AllWordsArray.append("WEDDING")
    AllWordsArray.append("AFFAIR")
    AllWordsArray.append("APPLE")
    AllWordsArray.append("BATHROOM")
    AllWordsArray.append("BEDROOM")
    AllWordsArray.append("BEER")
    AllWordsArray.append("BIRTHDAY")
    AllWordsArray.append("CHEEK")
    AllWordsArray.append("DIAMOND")
    AllWordsArray.append("DIRT")
    AllWordsArray.append("EAR")
    AllWordsArray.append("FUNERAL")
    AllWordsArray.append("GENE")
    AllWordsArray.append("GIRLFRIEND")
    AllWordsArray.append("HAT")
    AllWordsArray.append("LADY")
    AllWordsArray.append("MIDNIGHT")
    AllWordsArray.append("PIZZA")
    AllWordsArray.append("POET")
    AllWordsArray.append("POLLUTION")
    AllWordsArray.append("SHIRT")
    AllWordsArray.append("SIR")
    AllWordsArray.append("TALE")
    AllWordsArray.append("THROAT")
    AllWordsArray.append("UNCLE")
    AllWordsArray.append("YOUTH")
    AllWordsArray.append("TIME")
    AllWordsArray.append("WORK")
    AllWordsArray.append("FILM")
    AllWordsArray.append("WATER")
    AllWordsArray.append("MONEY")
    AllWordsArray.append("STUDY")
    AllWordsArray.append("GAME")
    AllWordsArray.append("LIFE")
    AllWordsArray.append("FORM")
    AllWordsArray.append("AIR")
    AllWordsArray.append("DAY")
    AllWordsArray.append("NUMBER")
    AllWordsArray.append("FISH")
    AllWordsArray.append("HAND")
    AllWordsArray.append("BOOK")
    AllWordsArray.append("TYPE")
    AllWordsArray.append("HOME")
    AllWordsArray.append("BODY")
    AllWordsArray.append("STATE")
    AllWordsArray.append("RADIO")
    AllWordsArray.append("PRICE")
    AllWordsArray.append("CARD")


rule "Global Variables":
    disableGamemodeCompletion()
    disableScoring()
    PlayerArray = []
    StartPictionary = false
    Timer = -1
    RoundNum = 1
    HiddenWord = ""


rule "Player Variables":
    @Event eachPlayer
    
    eventPlayer.Points = 0
    eventPlayer.WordArray = []


def Menu():
    @Name "Menu"
    
    createInWorldText(getAllPlayers(), "Overwatch   Pictionary", vect(19.5, 19, 0), 3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.ORANGE)
    createInWorldText(getAllPlayers(), "By PMAJellies", vect(19.5, 17, 0), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "START", vect(19.5, 5, 0), 3, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    #createEffect(getAllPlayers(), Effect.SPHERE, Color.WHITE, vect(20, 12.5, 0), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


rule "StartLobby":
    Menu()


rule "Loop Time":
    @Condition getMatchTime() < 3500
    
    setMatchTime(3599)


rule "Player Joins":
    @Event eachPlayer
    @Condition eventPlayer.isAlive() == true
    @Condition eventPlayer.hasSpawned() == true
    
    eventPlayer.teleport(vect(-8, 0, random.uniform(-8, 8)))
    eventPlayer.setFacing(vect(0.95, 0.3, 0), Relativity.TO_WORLD)
    eventPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    eventPlayer.setPrimaryFireEnabled(false)
    PlayerArray = PlayerArray.concat(eventPlayer)
    eventPlayer.setAbility1Enabled(false)
    eventPlayer.setAbility2Enabled(false)
    eventPlayer.setSecondaryFireEnabled(false)


rule "Player Leaves":
    @Event playerLeft
    
    PlayerArray = PlayerArray.exclude(eventPlayer)
    if eventPlayer.GuessedWord == true:
        NumGuessed--
    if Drawer == eventPlayer:
        Timer = 0


rule "Primary Fire":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition Drawer != eventPlayer
    @Condition eventPlayer.GuessedWord == false
    
    eventPlayer.Firing = true
    #createEffect(eventPlayer, Effect.SPHERE, Color.RED, raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 100, null, eventPlayer, true).getHitPosition(), 0.2, EffectReeval.NONE)
    #eventPlayer.BulletEffect = getLastCreatedEntity()
    playEffect(eventPlayer, DynamicEffect.RING_EXPLOSION_SOUND, Color.WHITE, eventPlayer, 100)
    wait()
    eventPlayer.Firing = false
    wait(0.1)
    #destroyEffect(eventPlayer.BulletEffect)


rule "Start Pictionary":
    @Event eachPlayer
    @Condition distance(vect(20, 5.75, 0), raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * distance(eventPlayer.getEyePosition(), vect(20, 5.75, 0)), null, getAllPlayers(), false).getHitPosition()) <= 1
    @Condition eventPlayer.Firing == true
    @Condition StartPictionary == false
    
    getAllPlayers().setStatusEffect(null, Status.ROOTED, 2)
    destroyAllInWorldTexts()
    wait()
    StartPictionary = true
    #Pictionary()
    #Keyboard()
    #Scoreboard()
    PlayerArray = random.shuffle(PlayerArray)
    Turn = -1
    NewDrawer()
    bigMessage(getAllPlayers(), "Round {0}".format(RoundNum))


rule "Setup Pictionary Players":
    @Event eachPlayer
    @Condition StartPictionary == true
    
    createInWorldText(eventPlayer, eventPlayer.WordArray, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection(), 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    eventPlayer.Points = 0


def Pictionary():
    @Name "PictionarySub"
    
    createBeam(getAllPlayers(), Beam.GOOD, vect(19.5, 8, -8), vect(19.5, 8, 8), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GOOD, vect(19.5, 24, -8), vect(19.5, 24, 8), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GOOD, vect(19.5, 24, 8), vect(19.5, 8, 8), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GOOD, vect(19.5, 24, -8), vect(19.5, 8, -8), Color.WHITE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.WHITE, vect(20, 22, -10), 1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.WHITE, vect(20, 19, -10), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.WHITE, vect(20, 16, -10), 0.6, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.WHITE, vect(20, 13, -10), 0.4, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.WHITE, vect(20, 10, -10), 0.2, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.WHITE, vect(20, 20, 10), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.RED, vect(20, 18, 10), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.ORANGE, vect(20, 16, 10), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.YELLOW, vect(20, 14, 10), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.LIME_GREEN, vect(20, 12, 10), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.GREEN, vect(20, 18, 12), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.SKY_BLUE, vect(20, 16, 12), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.BLUE, vect(20, 14, 12), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.PURPLE, vect(20, 12, 12), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createBeam(getAllPlayers(), Beam.GOOD, vect(-4, 0, 20), vect(-4, 0, -20), Color.RED, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createIcon(Drawer, vect(20, 7.5, 11), Icon.TRASHCAN, IconReeval.VISIBILITY_AND_POSITION, Color.RED, false)
    createEffect(Drawer, Effect.SPHERE, Color.BLACK, vect(20, 20, 12), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.GRAY, vect(20, 22, 10), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    createEffect(Drawer, Effect.SPHERE, Color.ROSE, vect(20, 22, 12), 0.8, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)


def Keyboard():
    @Name "KeyboardSub"
    
    #createInWorldText(getAllPlayers(), "Q  W  E  R  T  Y  U  I  O  P", vect(20, 4.5, 0), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "Q", vect(20, 6, -9), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "W", vect(20, 6, -7), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "E", vect(20, 6, -5), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "R", vect(20, 6, -3), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "T", vect(20, 6, -1), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "Y", vect(20, 6, 1), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "U", vect(20, 6, 3), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "I", vect(20, 6, 5), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "O", vect(20, 6, 7), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "P", vect(20, 6, 9), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "DEL", vect(20, 6, 11), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "A", vect(20, 4, -8), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "S", vect(20, 4, -6), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "D", vect(20, 4, -4), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "F", vect(20, 4, -2), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "G", vect(20, 4, 0), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "H", vect(20, 4, 2), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "J", vect(20, 4, 4), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "K", vect(20, 4, 6), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "L", vect(20, 4, 8), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "Z", vect(20, 2, -6), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "X", vect(20, 2, -4), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "C", vect(20, 2, -2), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "V", vect(20, 2, 0), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "B", vect(20, 2, 2), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "N", vect(20, 2, 4), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "M", vect(20, 2, 6), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "SUBMIT", vect(20, 2, 10), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    createInWorldText(getAllPlayers(), "| SPACE |", vect(20, 0, 0), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)


def Scoreboard():
    @Name "ScoreboardSub"
    
    ScoreboardArray = sorted(PlayerArray, lambda player: player.Points)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[0], ScoreboardArray[0].Points), HudPosition.LEFT, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[1], ScoreboardArray[1].Points), HudPosition.LEFT, 1, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[2], ScoreboardArray[2].Points), HudPosition.LEFT, 2, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[3], ScoreboardArray[3].Points), HudPosition.LEFT, 3, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[4], ScoreboardArray[4].Points), HudPosition.LEFT, 4, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[5], ScoreboardArray[5].Points), HudPosition.LEFT, 5, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[6], ScoreboardArray[6].Points), HudPosition.LEFT, 6, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[7], ScoreboardArray[7].Points), HudPosition.LEFT, 7, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[8], ScoreboardArray[8].Points), HudPosition.LEFT, 8, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[9], ScoreboardArray[9].Points), HudPosition.LEFT, 9, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[10], ScoreboardArray[10].Points), HudPosition.LEFT, 10, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "{0}: Points {1}".format(ScoreboardArray[11], ScoreboardArray[11].Points), HudPosition.LEFT, 11, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)


def NewDrawer():
    @Name "NewDrawer Setup"
    
    getAllPlayers().startForcingThrottle(0, 0, 0, 0, 0, 0)
    NumGuessed = 0
    getAllPlayers().GuessedWord = false
    ChoosingWord = false
    #getAllPlayers().clearStatusEffect(Status.ROOTED)
    destroyAllEffects()
    destroyAllInWorldTexts()
    destroyAllHudTexts()
    if Turn >= len(PlayerArray) - 1:
        Turn = 0
        RoundNum++
        if RoundNum == 5:
            bigMessage(getAllPlayers(), "Final Round")
        else:
            bigMessage(getAllPlayers(), "Round {0}".format(RoundNum))
    else:
        Turn++
    Drawer = PlayerArray[Turn]
    ChoosingWord = false
    Drawer.teleport(vect(2, 0, 0))
    Drawer.setStatusEffect(null, Status.ROOTED, 9999)
    Drawer.setGravity(0)
    wait(0.7)
    Drawer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    Drawer.setFacing(vect(1, 0.07, 0), Relativity.TO_WORLD)
    Drawer.teleport(vect(2, 12, 0))
    Scoreboard()
    Keyboard()
    Pictionary()
    Timer = 60
    hudSubtext(getAllPlayers(), "Drawing: {0}".format(Drawer), HudPosition.TOP, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    hudSubtext(getAllPlayers(), "Time: {0}".format(Timer), HudPosition.TOP, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    #chaseAtRate(Timer, 0, 1)
    DrawerColor = "White"
    DrawerRadius = 0.6
    NumOfEffects = 0
    hudSubtext(getAllPlayers(), "Effect Limit: {0} / 230".format(NumOfEffects), HudPosition.TOP, 0, Color.WHITE, HudReeval.VISIBILITY_AND_STRING)
    AllWordsArray = random.shuffle(AllWordsArray)
    createInWorldText(Drawer, AllWordsArray[0], vect(20, 18, 0), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.NEVER)
    createInWorldText(Drawer, AllWordsArray[1], vect(20, 15, 0), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.NEVER)
    createInWorldText(Drawer, AllWordsArray[2], vect(20, 12, 0), 2, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, Color.WHITE, SpecVisibility.NEVER)
    getAllPlayers().clearStatusEffect(Status.ROOTED)
    wait(0.1)
    Drawer.setStatusEffect(null, Status.ROOTED, 9999)
    getAllPlayers().stopForcingThrottle()
    eventPlayer.WordArray = ""
    HiddenWord = ""


rule "QWERTYUIOP":
    @Event eachPlayer
    @Condition StartPictionary == true
    @Condition Drawer != eventPlayer
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).x == 20
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 5.5
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 7.5
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > -10
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 10
    @Condition eventPlayer.Firing == true
    
    if (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -8:
        eventPlayer.WordArray = "{0}Q".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -6:
        eventPlayer.WordArray = "{0}W".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -4:
        eventPlayer.WordArray = "{0}E".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -2:
        eventPlayer.WordArray = "{0}R".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 0:
        eventPlayer.WordArray = "{0}T".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 2:
        eventPlayer.WordArray = "{0}Y".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 4:
        eventPlayer.WordArray = "{0}U".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 6:
        eventPlayer.WordArray = "{0}I".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 8:
        eventPlayer.WordArray = "{0}O".format(eventPlayer.WordArray)
    else:
        eventPlayer.WordArray = "{0}P".format(eventPlayer.WordArray)


rule "ASDFGHJKL":
    @Event eachPlayer
    @Condition StartPictionary == true
    @Condition Drawer != eventPlayer
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).x == 20
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 3.5
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 5.5
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > -9
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 9
    @Condition eventPlayer.Firing == true
    
    if (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -7:
        eventPlayer.WordArray = "{0}A".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -5:
        eventPlayer.WordArray = "{0}S".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -3:
        eventPlayer.WordArray = "{0}D".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -1:
        eventPlayer.WordArray = "{0}F".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 1:
        eventPlayer.WordArray = "{0}G".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 3:
        eventPlayer.WordArray = "{0}H".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 5:
        eventPlayer.WordArray = "{0}J".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 7:
        eventPlayer.WordArray = "{0}K".format(eventPlayer.WordArray)
    else:
        eventPlayer.WordArray = "{0}L".format(eventPlayer.WordArray)


rule "ZXCVBNM":
    @Event eachPlayer
    @Condition StartPictionary == true
    @Condition Drawer != eventPlayer
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).x == 20
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 1.5
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 3.5
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > -7
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 7
    @Condition eventPlayer.Firing == true
    
    if (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -5:
        eventPlayer.WordArray = "{0}Z".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -3:
        eventPlayer.WordArray = "{0}X".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -1:
        eventPlayer.WordArray = "{0}C".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 1:
        eventPlayer.WordArray = "{0}V".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 3:
        eventPlayer.WordArray = "{0}B".format(eventPlayer.WordArray)
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 5:
        eventPlayer.WordArray = "{0}N".format(eventPlayer.WordArray)
    else:
        eventPlayer.WordArray = "{0}M".format(eventPlayer.WordArray)


rule "SPACE":
    @Event eachPlayer
    @Condition distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), vect(20, 0.5, 0)) <= 1
    @Condition StartPictionary == true
    @Condition Drawer != eventPlayer
    @Condition eventPlayer.Firing == true
    
    eventPlayer.WordArray = "{0} ".format(eventPlayer.WordArray)


rule "SUBMIT":
    @Event eachPlayer
    @Condition distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), vect(20, 2.5, 10)) <= 1
    @Condition StartPictionary == true
    @Condition Drawer != eventPlayer
    @Condition eventPlayer.Firing == true
    @Condition eventPlayer.WordArray != ""
    @Condition eventPlayer.WordArray != "******"
    
    if eventPlayer.WordArray == PictionaryWord:
        hudSubtext(getAllPlayers(), "{0} guessed correctly!".format(eventPlayer), HudPosition.RIGHT, 0, Color.GREEN, HudReeval.NONE)
        wait(0.02)
        eventPlayer.GuessedWord = true
        eventPlayer.WordArray = ""
        NumGuessed++
        eventPlayer.Points += 100 / NumGuessed
        Drawer.Points += 20
    elif eventPlayer.WordArray in BannedWords:
        hudSubtext(getAllPlayers(), "{0} kicked for racism!".format(eventPlayer), HudPosition.RIGHT, 0, Color.RED, HudReeval.NONE)
        eventPlayer.removeFromGame()
    else:
        hudSubtext(getAllPlayers(), "{0}: {1}".format(eventPlayer, eventPlayer.WordArray), HudPosition.RIGHT, 0, Color.WHITE, HudReeval.NONE)
        wait(0.02)
        eventPlayer.WordArray = ""


rule "DEL":
    @Event eachPlayer
    @Condition distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), vect(20, 6.5, 11)) <= 1
    @Condition StartPictionary == true
    @Condition Drawer != eventPlayer
    @Condition eventPlayer.Firing == true
    
    eventPlayer.WordArray = ""


rule "DrawTool":
    @Event eachPlayer
    @Condition Drawer == eventPlayer
    @Condition StartPictionary == true
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).x == 20
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 8
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 24
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > -8
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 8
    @Condition ChoosingWord == true
    
    createEffect(eventPlayer, Effect.SPHERE, DrawerColor, updateEveryFrame(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()), DrawerRadius, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
    DrawTool = getLastCreatedEntity()


rule "DrawTool Destroy":
    @Event eachPlayer
    @Condition Drawer == eventPlayer
    @Condition StartPictionary == true
    @Condition ((raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 24 or (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 8 or (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -8 or (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > 8) == true
    @Condition ChoosingWord == true
    
    destroyEffect(DrawTool)


rule "Drawer Draw":
    @Event eachPlayer
    @Condition Drawer == eventPlayer
    @Condition StartPictionary == true
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).x == 20
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 8
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 24
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > -8
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 8
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition ChoosingWord == true
    
    createEffect(getAllPlayers(), Effect.SPHERE, DrawerColor, raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), DrawerRadius, EffectReeval.NONE)
    NumOfEffects++
    wait(0.1)
    if NumOfEffects >= 230:
        smallMessage(Drawer, "Effect Limit Reached")
    if ruleCondition:
        loop()


rule "Drawer Select Size":
    @Event eachPlayer
    @Condition StartPictionary == true
    @Condition Drawer == eventPlayer
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).x == 20
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 8
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 24
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > -12
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < -8
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition ChoosingWord == true
    
    if (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 11.5:
        DrawerRadius = 0.2
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 14.5:
        DrawerRadius = 0.4
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 17.5:
        DrawerRadius = 0.6
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 20.5:
        DrawerRadius = 0.8
    else:
        DrawerRadius = 1


rule "Drawer Select Color 1":
    @Event eachPlayer
    @Condition StartPictionary == true
    @Condition Drawer == eventPlayer
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).x == 20
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 11
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 24
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > 9
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 11
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition ChoosingWord == true
    
    if (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 13:
        DrawerColor = Color.LIME_GREEN
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 15:
        DrawerColor = Color.YELLOW
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 17:
        DrawerColor = Color.ORANGE
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 19:
        DrawerColor = Color.RED
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 21:
        DrawerColor = Color.WHITE
    else:
        DrawerColor = Color.GRAY


rule "Drawer Select Color 2":
    @Event eachPlayer
    @Condition StartPictionary == true
    @Condition Drawer == eventPlayer
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).x == 20
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y > 11
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 24
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z > 11
    @Condition (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).z < 13
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition ChoosingWord == true
    
    if (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 13:
        DrawerColor = Color.PURPLE
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 15:
        DrawerColor = Color.BLUE
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 17:
        DrawerColor = Color.SKY_BLUE
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 19:
        DrawerColor = Color.GREEN
    elif (raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition()).y < 21:
        DrawerColor = Color.BLACK
    else:
        DrawerColor = Color.ROSE


rule "Trash":
    @Event eachPlayer
    @Condition distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), vect(20, 9.5, 11)) <= 1
    @Condition StartPictionary == true
    @Condition Drawer == eventPlayer
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    
    destroyAllIcons()
    destroyInWorldText(WordText)
    destroyAllEffects()
    wait(0.02)
    Pictionary()
    NumOfEffects = 0
    createInWorldText(eventPlayer, PictionaryWord, vect(20, 24, 0), 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255))
    WordText = getLastCreatedEntity()


rule "Drawer Select Word 0":
    @Event eachPlayer
    @Condition distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), vect(20, 18.4, 0)) <= 0.8
    @Condition StartPictionary == true
    @Condition Drawer == eventPlayer
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition ChoosingWord == false
    
    PictionaryWord = AllWordsArray[0]
    chaseAtRate(Timer, 0, 1)
    destroyAllInWorldTexts()
    destroyAllEffects()
    wait(0.05)
    Keyboard()
    Pictionary()
    createInWorldText(eventPlayer, PictionaryWord, vect(20, 24, 0), 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING, rgb(255, 255, 255))
    WordText = getLastCreatedEntity()
    wait(0.25)
    ChoosingWord = true
    DrawerColor = "White"
    DrawerRadius = 0.6
    NumOfEffects = 0


rule "Drawer Select Word 1":
    @Event eachPlayer
    @Condition distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), vect(20, 15.35, 0)) <= 0.8
    @Condition StartPictionary == true
    @Condition Drawer == eventPlayer
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition ChoosingWord == false
    
    PictionaryWord = AllWordsArray[1]
    chaseAtRate(Timer, 0, 1)
    destroyAllInWorldTexts()
    destroyAllEffects()
    wait(0.05)
    Keyboard()
    Pictionary()
    createInWorldText(eventPlayer, PictionaryWord, vect(20, 24, 0), 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    wait(0.25)
    ChoosingWord = true
    DrawerColor = "White"
    DrawerRadius = 0.6
    NumOfEffects = 0


rule "Drawer Select Word 2":
    @Event eachPlayer
    @Condition distance(raycast(eventPlayer.getEyePosition(), eventPlayer.getEyePosition() + eventPlayer.getFacingDirection() * 1000, null, eventPlayer, true).getHitPosition(), vect(20, 12.35, 0)) <= 0.8
    @Condition StartPictionary == true
    @Condition Drawer == eventPlayer
    @Condition eventPlayer.isHoldingButton(Button.PRIMARY_FIRE) == true
    @Condition ChoosingWord == false
    
    PictionaryWord = AllWordsArray[2]
    chaseAtRate(Timer, 0, 1)
    destroyAllInWorldTexts()
    destroyAllEffects()
    wait(0.05)
    Keyboard()
    Pictionary()
    createInWorldText(eventPlayer, PictionaryWord, vect(20, 24, 0), 2.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)
    wait(0.25)
    ChoosingWord = true
    DrawerColor = "White"
    DrawerRadius = 0.6
    NumOfEffects = 0


rule "Times Up or Everyone Guesses":
    @Condition (Timer == 0 or NumGuessed == len(PlayerArray) - 1) == true
    @Condition StartPictionary == true
    
    Drawer = null
    stopChasingVariable(Timer)
    Timer = -1
    playEffect(getAllPlayers(), DynamicEffect.DEBUFF_IMPACT_SOUND, Color.WHITE, vect(0, 0, 0), 200)
    getAllPlayers().clearStatusEffect(Status.PHASED_OUT)
    getAllPlayers().setStatusEffect(null, Status.ROOTED, 8)
    wait(0.5)
    bigMessage(getAllPlayers(), "The Word Was: {0}".format(PictionaryWord))
    wait(5)
    getAllPlayers().teleport(vect(-8, 0, random.uniform(-8, 8)))
    getAllPlayers().setGravity(100)
    getAllPlayers().setStatusEffect(null, Status.PHASED_OUT, 9999)
    NewDrawer()


rule "Create Typing Text":
    @Event eachPlayer
    @Condition Drawer != eventPlayer
    @Condition ChoosingWord == true
    
    createInWorldText(eventPlayer, eventPlayer.WordArray, eventPlayer.getEyePosition() + eventPlayer.getFacingDirection(), 1.5, Clip.NONE, WorldTextReeval.VISIBILITY_POSITION_AND_STRING)


rule "End Game":
    @Condition Turn >= len(PlayerArray) - 1
    @Condition RoundNum == 5
    
    Winner()
    bigMessage(getAllPlayers(), "{0} Wins!!!".format(Winner))
    wait(5)
    PlayerArray = []
    StartPictionary = false
    Timer = -1
    RoundNum = 1
    destroyAllEffects()
    destroyAllHudTexts()
    destroyAllInWorldTexts()
    wait(0.2)


def Winner():
    @Name "Winner Subroutine"
    
    if PlayerArray[0].Points > PlayerArray[1].Points:
        Winner = PlayerArray[0]
    else:
        Winner = PlayerArray[1]
    ForLoop = 0
    for ForLoop in range(len(PlayerArray)):
        if PlayerArray[ForLoop].Points > Winner.Points:
            Winner = PlayerArray[ForLoop]


rule "Crossing Red Line":
    @Event eachPlayer
    @Condition eventPlayer.getPosition().x > -4
    @Condition StartPictionary == true
    @Condition Drawer != eventPlayer
    
    eventPlayer.applyImpulse(vect(-1, 0, 0), 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
    wait()
    if ruleCondition:
        loop()


rule "Drawer Flies Away":
    @Event eachPlayer
    @Condition distance(Drawer.getPosition(), vect(2, 13.425, 0)) >= 2
    @Condition Drawer == eventPlayer
    
    eventPlayer.setGravity(100)
    eventPlayer.teleport(vect(2, 0, 0))
    wait(0.25)
    eventPlayer.setGravity(0)
    wait(0.25)
    Drawer.setFacing(vect(1, 0.07, 0), Relativity.TO_WORLD)
    Drawer.teleport(vect(2, 12, 0))


rule "Create Bot [testing]":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT) == true
    @Disabled
    
    createDummy(Hero.ANA, Team.ALL, -1, eventPlayer.getPosition())


