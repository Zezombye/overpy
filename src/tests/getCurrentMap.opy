#!optimizeForSize

rule "test current map workaround for colosseo/esperança/samoa":
    A = getCurrentMap()
    B = (A == Map.SAMOA)
