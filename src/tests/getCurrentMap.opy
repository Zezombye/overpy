#!optimizeForSize

rule "test current map workaround for colosseo/esperança/samoa":
    A = getCurrentMap()
    B = (A == Map.SAMOA)
    C = (getCurrentMap() == Map.KINGS_ROW)
    C = (Map.KINGS_ROW == getCurrentMap())
    C = (getCurrentMap() == Map.COLOSSEO)
