
enum GameStatus:
    AA = 1,
    BB,
    CC = 6,
    DD

enum Team:
    HUMANS,
    ZOMBIES = Team.1,

rule "":
    A = GameStatus.AA #1
    A = GameStatus.BB #2
    A = GameStatus.DD #7
    A = Team.ZOMBIES #Team 1
    A = Team.1 #Team 1
