#!optimizeForSize

rule "workshop settings":
    #bools
    A = createWorkshopSetting(bool, "", "boolean", true)

    #ints
    A = createWorkshopSetting(int, "int", "int", 3)
    A = createWorkshopSetting(unsigned int, "int", "unsigned int", 3)
    A = createWorkshopSetting(signed int, "int", "signed int", 3)
    A = createWorkshopSetting(int<2:19>, "int", "int<2;19>", 3)
    A = createWorkshopSetting(int<6:>, "int", "int<6;>", 3)
    A = createWorkshopSetting(int<:6>, "int", "int<;6>", 3)

    #floats
    A = createWorkshopSetting(float, "float", "float", 3.5)
    A = createWorkshopSetting(unsigned float, "float", "unsigned float", 3.5)
    A = createWorkshopSetting(signed float, "float", "signed float", 3.5)
    A = createWorkshopSetting(float<2.5:19>, "float", "float<2.5;19>", 3.5)
    A = createWorkshopSetting(float<6:>, "float", "float<6;>", 3.5)
    A = createWorkshopSetting(float<:6>, "float", "float<;6>", 3.5)

    #heros
    A = createWorkshopSetting(Hero, "hero", "hero", Hero.ANA)
    A = createWorkshopSetting(Hero, "hero", "hero", Hero.HAMMOND, 3)

    #enums
    A = createWorkshopSetting(enum["a", "b\nc\nd"], "enum", "enum", 0)
    A = createWorkshopSetting(enum[p"a", b"b", w"c"], "enum", "enum", 2)
