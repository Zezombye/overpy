#!optimizeForSize

rule "dicts":
    A = {
        Hero.PHARAH: 2,
        Hero.BRIGITTE: 3,
    }[B]

    A = {
        Hero.PHARAH: 2,
        Hero.BRIGITTE: 3,
    }[1] #null

    A = {
        Hero.PHARAH: 2,
        Hero.BRIGITTE: 3,
    }[Hero.PHARAH] #2
