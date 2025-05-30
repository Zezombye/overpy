#!optimizeForSize

enum GameStatus:
    AA = 1,
    BB,
    CC = 6,
    DD,
    EE = "psqdoj\"fidqs",
    FF = A,

enum Team:
    HUMANS,
    ZOMBIES = Team.1,

enum Color:
    KB_WHITE = rgb(255, 250, 250),

enum Effect:
    BOSS = Effect.BAD_AURA

rule "":
    A = GameStatus.AA #1
    A = GameStatus.BB #2
    A = GameStatus.DD #7
    A = Team.ZOMBIES #Team 1
    A = Team.1 #Team 1
    L = len(GameStatus) # 6
    E = GameStatus.toArray() # [1, 2, 6, 7, "psqdoj\"fidqs", Global.A]
    F = Color.KB_WHITE
    G = Color.LIGHT_RED
    createEffect(getAllPlayers(), Effect.BOSS, Color.RED, null, 2)
