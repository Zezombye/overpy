
#!define tankPlayer A
#!define tankPos vect(214.339, 27.5, -36.157)
#!define turretPos C
#!define cannonPos B
#!define turretHorizontalAngle D
#!define turretVerticalAngle E

#!define grappleCannon(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, cannonPos+start, cannonPos+end, Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
#!define grappleTurret(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, turretPos+start, turretPos+end, Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)
#!define grapple(start, end) createBeam(getPlayers(Team.ALL), Beam.GRAPPLE, tankPos+start, tankPos+end, Color.PURPLE, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)

#!define tankTurretPlayerPos vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*2.5 + cosDeg(turretHorizontalAngle)*0.25 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*0.13, (0-sinDeg(turretVerticalAngle))*2.5 + cosDeg(turretVerticalAngle)*0.13, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*2.5 + (0-sinDeg(turretHorizontalAngle))*0.25 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*0.13)

#!define tankTurretPlayer2 F
#!define tankTurretPlayer3 G
#!define tankTurretPlayer4 H
#!define tankTurretPlayer5 I
#!define tankTurretPlayer J

@Rule "update angle"
@Event global
do:
    
    turretHorizontalAngle = hostPlayer.getHorizontalFacingAngle()
    turretVerticalAngle = hostPlayer.getVerticalFacingAngle()
    tankTurretPlayer.teleport(cannonPos+tankTurretPlayerPos)
    tankTurretPlayer2.teleport(cannonPos+tankTurretPlayerPos)
    tankTurretPlayer3.teleport(cannonPos+tankTurretPlayerPos)
    tankTurretPlayer4.teleport(cannonPos+tankTurretPlayerPos)
    tankTurretPlayer5.teleport(cannonPos+tankTurretPlayerPos)
    #cannonPos = hostPlayer.getPosition()
    #turretPos = hostPlayer.getPosition()
    wait(0.016)
while true

@Rule "owo"
@Event global
cannonPos = tankPos
turretPos = tankPos

@Rule "make dummy"
@Event eachPlayer
if eventPlayer == hostPlayer and eventPlayer.hasSpawned():
    wait(1)
    createDummy(Hero.PHARAH, Team.1, 1, hostPlayer.getPosition(), vect(0, 0, 1))
    tankTurretPlayer = getLastCreatedEntity()
    tankTurretPlayer.startFacing(hostPlayer.getFacingDirection(), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    tankTurretPlayer.setStatusEffect(null, Status.PHASED_OUT, 9999)
    tankTurretPlayer.setInvisibility(Invis.ALL)
    #wait(0.25)
    #tankTurretPlayer.setUltCharge(100)
    #tankTurretPlayer.forceButtonPress(Button.ULTIMATE)

    
    createDummy(Hero.PHARAH, Team.1, 2, hostPlayer.getPosition(), vect(0, 0, 1))
    tankTurretPlayer2 = getLastCreatedEntity()
    tankTurretPlayer2.startFacing(hostPlayer.getFacingDirection(), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    tankTurretPlayer2.setStatusEffect(null, Status.PHASED_OUT, 9999)
    tankTurretPlayer2.setInvisibility(Invis.ALL)

    
    createDummy(Hero.PHARAH, Team.1, 3, hostPlayer.getPosition(), vect(0, 0, 1))
    tankTurretPlayer3 = getLastCreatedEntity()
    tankTurretPlayer3.startFacing(hostPlayer.getFacingDirection(), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    tankTurretPlayer3.setStatusEffect(null, Status.PHASED_OUT, 9999)
    tankTurretPlayer3.setInvisibility(Invis.ALL)

    
    createDummy(Hero.PHARAH, Team.1, 4, hostPlayer.getPosition(), vect(0, 0, 1))
    tankTurretPlayer4 = getLastCreatedEntity()
    tankTurretPlayer4.startFacing(hostPlayer.getFacingDirection(), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    tankTurretPlayer4.setStatusEffect(null, Status.PHASED_OUT, 9999)
    tankTurretPlayer4.setInvisibility(Invis.ALL)

    
    createDummy(Hero.PHARAH, Team.1, 5, hostPlayer.getPosition(), vect(0, 0, 1))
    tankTurretPlayer5 = getLastCreatedEntity()
    tankTurretPlayer5.startFacing(hostPlayer.getFacingDirection(), 9999, Relativity.TO_WORLD, FacingReeval.DIRECTION_AND_TURN_RATE)
    tankTurretPlayer5.setStatusEffect(null, Status.PHASED_OUT, 9999)
    tankTurretPlayer5.setInvisibility(Invis.ALL)

    eventPlayer.setPrimaryFireEnabled(false)

@Rule "fire"
@Event eachPlayer
if eventPlayer == hostPlayer and eventPlayer.isHoldingButton(Button.PRIMARY_FIRE):
    do:
        tankTurretPlayer.forceButtonPress(Button.PRIMARY_FIRE)
        wait(0.15)
        tankTurretPlayer2.forceButtonPress(Button.PRIMARY_FIRE)
        wait(0.15)
        tankTurretPlayer3.forceButtonPress(Button.PRIMARY_FIRE)
        wait(0.15)
        tankTurretPlayer4.forceButtonPress(Button.PRIMARY_FIRE)
        wait(0.15)
        tankTurretPlayer5.forceButtonPress(Button.PRIMARY_FIRE)
        wait(0.15)
    while RULE_CONDITION

@Rule "make beams"
@Event global
grapple(vect(2.016*cosDeg((60.254999999999995)-turretHorizontalAngle), 1, 2.016*sinDeg((60.254999999999995)-turretHorizontalAngle)), vect(2.016*cosDeg((-60.254999999999995)-turretHorizontalAngle), 1, 2.016*sinDeg((-60.254999999999995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((119.745)-turretHorizontalAngle), 1, 2.016*sinDeg((119.745)-turretHorizontalAngle)), vect(2.016*cosDeg((240.255)-turretHorizontalAngle), 1, 2.016*sinDeg((240.255)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((240.255)-turretHorizontalAngle), 1, 2.016*sinDeg((240.255)-turretHorizontalAngle)), vect(2.016*cosDeg((-60.254999999999995)-turretHorizontalAngle), 1, 2.016*sinDeg((-60.254999999999995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((119.745)-turretHorizontalAngle), 1, 2.016*sinDeg((119.745)-turretHorizontalAngle)), vect(2.016*cosDeg((60.254999999999995)-turretHorizontalAngle), 1, 2.016*sinDeg((60.254999999999995)-turretHorizontalAngle)))
grapple(vect(2.358*cosDeg((57.995)-turretHorizontalAngle), 0.5, 2.358*sinDeg((57.995)-turretHorizontalAngle)), vect(2.358*cosDeg((-57.995000000000005)-turretHorizontalAngle), 0.5, 2.358*sinDeg((-57.995000000000005)-turretHorizontalAngle)))
grapple(vect(2.358*cosDeg((122.005)-turretHorizontalAngle), 0.5, 2.358*sinDeg((122.005)-turretHorizontalAngle)), vect(2.358*cosDeg((237.995)-turretHorizontalAngle), 0.5, 2.358*sinDeg((237.995)-turretHorizontalAngle)))
grapple(vect(2.358*cosDeg((237.995)-turretHorizontalAngle), 0.5, 2.358*sinDeg((237.995)-turretHorizontalAngle)), vect(2.358*cosDeg((-57.995000000000005)-turretHorizontalAngle), 0.5, 2.358*sinDeg((-57.995000000000005)-turretHorizontalAngle)))
grapple(vect(2.358*cosDeg((122.005)-turretHorizontalAngle), 0.5, 2.358*sinDeg((122.005)-turretHorizontalAngle)), vect(2.358*cosDeg((57.995)-turretHorizontalAngle), 0.5, 2.358*sinDeg((57.995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((60.254999999999995)-turretHorizontalAngle), 0, 2.016*sinDeg((60.254999999999995)-turretHorizontalAngle)), vect(2.016*cosDeg((-60.254999999999995)-turretHorizontalAngle), 0, 2.016*sinDeg((-60.254999999999995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((119.745)-turretHorizontalAngle), 0, 2.016*sinDeg((119.745)-turretHorizontalAngle)), vect(2.016*cosDeg((240.255)-turretHorizontalAngle), 0, 2.016*sinDeg((240.255)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((240.255)-turretHorizontalAngle), 0, 2.016*sinDeg((240.255)-turretHorizontalAngle)), vect(2.016*cosDeg((-60.254999999999995)-turretHorizontalAngle), 0, 2.016*sinDeg((-60.254999999999995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((119.745)-turretHorizontalAngle), 0, 2.016*sinDeg((119.745)-turretHorizontalAngle)), vect(2.016*cosDeg((60.254999999999995)-turretHorizontalAngle), 0, 2.016*sinDeg((60.254999999999995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((240.255)-turretHorizontalAngle), 1, 2.016*sinDeg((240.255)-turretHorizontalAngle)), vect(2.358*cosDeg((237.995)-turretHorizontalAngle), 0.5, 2.358*sinDeg((237.995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((119.745)-turretHorizontalAngle), 1, 2.016*sinDeg((119.745)-turretHorizontalAngle)), vect(2.358*cosDeg((122.005)-turretHorizontalAngle), 0.5, 2.358*sinDeg((122.005)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((-60.254999999999995)-turretHorizontalAngle), 1, 2.016*sinDeg((-60.254999999999995)-turretHorizontalAngle)), vect(2.358*cosDeg((-57.995000000000005)-turretHorizontalAngle), 0.5, 2.358*sinDeg((-57.995000000000005)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((60.254999999999995)-turretHorizontalAngle), 1, 2.016*sinDeg((60.254999999999995)-turretHorizontalAngle)), vect(2.358*cosDeg((57.995)-turretHorizontalAngle), 0.5, 2.358*sinDeg((57.995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((240.255)-turretHorizontalAngle), 0, 2.016*sinDeg((240.255)-turretHorizontalAngle)), vect(2.358*cosDeg((237.995)-turretHorizontalAngle), 0.5, 2.358*sinDeg((237.995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((119.745)-turretHorizontalAngle), 0, 2.016*sinDeg((119.745)-turretHorizontalAngle)), vect(2.358*cosDeg((122.005)-turretHorizontalAngle), 0.5, 2.358*sinDeg((122.005)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((-60.254999999999995)-turretHorizontalAngle), 0, 2.016*sinDeg((-60.254999999999995)-turretHorizontalAngle)), vect(2.358*cosDeg((-57.995000000000005)-turretHorizontalAngle), 0.5, 2.358*sinDeg((-57.995000000000005)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((60.254999999999995)-turretHorizontalAngle), 0, 2.016*sinDeg((60.254999999999995)-turretHorizontalAngle)), vect(2.358*cosDeg((57.995)-turretHorizontalAngle), 0.5, 2.358*sinDeg((57.995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((119.745)-turretHorizontalAngle), 1, 2.016*sinDeg((119.745)-turretHorizontalAngle)), vect(2.016*cosDeg((-60.254999999999995)-turretHorizontalAngle), 1, 2.016*sinDeg((-60.254999999999995)-turretHorizontalAngle)))
grapple(vect(2.016*cosDeg((60.254999999999995)-turretHorizontalAngle), 1, 2.016*sinDeg((60.254999999999995)-turretHorizontalAngle)), vect(2.016*cosDeg((240.255)-turretHorizontalAngle), 1, 2.016*sinDeg((240.255)-turretHorizontalAngle)))

#turret
"""
grappleTurret(vect(0.653*cosDeg((112.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((112.5)-turretHorizontalAngle)), vect(0.653*cosDeg((67.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.653*cosDeg((67.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((67.5)-turretHorizontalAngle)), vect(0.653*cosDeg((22.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.653*cosDeg((22.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((22.5)-turretHorizontalAngle)), vect(0.653*cosDeg((-22.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((-22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.653*cosDeg((-22.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((-22.5)-turretHorizontalAngle)), vect(0.653*cosDeg((-67.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((-67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.653*cosDeg((-67.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((-67.5)-turretHorizontalAngle)), vect(0.653*cosDeg((247.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((247.5)-turretHorizontalAngle)))
grappleTurret(vect(0.653*cosDeg((247.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((247.5)-turretHorizontalAngle)), vect(0.653*cosDeg((202.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((202.5)-turretHorizontalAngle)))
grappleTurret(vect(0.653*cosDeg((202.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((202.5)-turretHorizontalAngle)), vect(0.653*cosDeg((157.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((157.5)-turretHorizontalAngle)))
grappleTurret(vect(0.653*cosDeg((157.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((157.5)-turretHorizontalAngle)), vect(0.653*cosDeg((112.5)-turretHorizontalAngle), 1.056, 0.653*sinDeg((112.5)-turretHorizontalAngle)))
grappleTurret(vect(0.611*cosDeg((112.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((112.5)-turretHorizontalAngle)), vect(0.611*cosDeg((67.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.611*cosDeg((67.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((67.5)-turretHorizontalAngle)), vect(0.611*cosDeg((22.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.611*cosDeg((22.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((22.5)-turretHorizontalAngle)), vect(0.611*cosDeg((-22.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((-22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.611*cosDeg((-22.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((-22.5)-turretHorizontalAngle)), vect(0.611*cosDeg((-67.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((-67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.611*cosDeg((-67.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((-67.5)-turretHorizontalAngle)), vect(0.611*cosDeg((247.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((247.5)-turretHorizontalAngle)))
grappleTurret(vect(0.611*cosDeg((247.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((247.5)-turretHorizontalAngle)), vect(0.611*cosDeg((202.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((202.5)-turretHorizontalAngle)))
grappleTurret(vect(0.611*cosDeg((202.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((202.5)-turretHorizontalAngle)), vect(0.611*cosDeg((157.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((157.5)-turretHorizontalAngle)))
grappleTurret(vect(0.611*cosDeg((157.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((157.5)-turretHorizontalAngle)), vect(0.611*cosDeg((112.5)-turretHorizontalAngle), 1.113, 0.611*sinDeg((112.5)-turretHorizontalAngle)))
grappleTurret(vect(0.568*cosDeg((112.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((112.5)-turretHorizontalAngle)), vect(0.568*cosDeg((67.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.568*cosDeg((67.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((67.5)-turretHorizontalAngle)), vect(0.568*cosDeg((22.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.568*cosDeg((22.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((22.5)-turretHorizontalAngle)), vect(0.568*cosDeg((-22.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((-22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.568*cosDeg((-22.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((-22.5)-turretHorizontalAngle)), vect(0.568*cosDeg((-67.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((-67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.568*cosDeg((-67.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((-67.5)-turretHorizontalAngle)), vect(0.568*cosDeg((247.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((247.5)-turretHorizontalAngle)))
grappleTurret(vect(0.568*cosDeg((247.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((247.5)-turretHorizontalAngle)), vect(0.568*cosDeg((202.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((202.5)-turretHorizontalAngle)))
grappleTurret(vect(0.568*cosDeg((202.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((202.5)-turretHorizontalAngle)), vect(0.568*cosDeg((157.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((157.5)-turretHorizontalAngle)))
grappleTurret(vect(0.568*cosDeg((157.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((157.5)-turretHorizontalAngle)), vect(0.568*cosDeg((112.5)-turretHorizontalAngle), 1.169, 0.568*sinDeg((112.5)-turretHorizontalAngle)))
grappleTurret(vect(0.526*cosDeg((112.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((112.5)-turretHorizontalAngle)), vect(0.526*cosDeg((67.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.526*cosDeg((67.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((67.5)-turretHorizontalAngle)), vect(0.526*cosDeg((22.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.526*cosDeg((22.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((22.5)-turretHorizontalAngle)), vect(0.526*cosDeg((-22.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((-22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.526*cosDeg((-22.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((-22.5)-turretHorizontalAngle)), vect(0.526*cosDeg((-67.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((-67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.526*cosDeg((-67.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((-67.5)-turretHorizontalAngle)), vect(0.526*cosDeg((247.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((247.5)-turretHorizontalAngle)))
grappleTurret(vect(0.526*cosDeg((247.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((247.5)-turretHorizontalAngle)), vect(0.526*cosDeg((202.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((202.5)-turretHorizontalAngle)))
grappleTurret(vect(0.526*cosDeg((202.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((202.5)-turretHorizontalAngle)), vect(0.526*cosDeg((157.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((157.5)-turretHorizontalAngle)))
grappleTurret(vect(0.526*cosDeg((157.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((157.5)-turretHorizontalAngle)), vect(0.526*cosDeg((112.5)-turretHorizontalAngle), 1.225, 0.526*sinDeg((112.5)-turretHorizontalAngle)))
grappleTurret(vect(0.483*cosDeg((112.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((112.5)-turretHorizontalAngle)), vect(0.483*cosDeg((67.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.483*cosDeg((67.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((67.5)-turretHorizontalAngle)), vect(0.483*cosDeg((22.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.483*cosDeg((22.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((22.5)-turretHorizontalAngle)), vect(0.483*cosDeg((-22.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((-22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.483*cosDeg((-22.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((-22.5)-turretHorizontalAngle)), vect(0.483*cosDeg((-67.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((-67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.483*cosDeg((-67.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((-67.5)-turretHorizontalAngle)), vect(0.483*cosDeg((247.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((247.5)-turretHorizontalAngle)))
grappleTurret(vect(0.483*cosDeg((247.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((247.5)-turretHorizontalAngle)), vect(0.483*cosDeg((202.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((202.5)-turretHorizontalAngle)))
grappleTurret(vect(0.483*cosDeg((202.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((202.5)-turretHorizontalAngle)), vect(0.483*cosDeg((157.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((157.5)-turretHorizontalAngle)))
grappleTurret(vect(0.483*cosDeg((157.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((157.5)-turretHorizontalAngle)), vect(0.483*cosDeg((112.5)-turretHorizontalAngle), 1.281, 0.483*sinDeg((112.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((112.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((112.5)-turretHorizontalAngle)), vect(0.441*cosDeg((67.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((67.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((67.5)-turretHorizontalAngle)), vect(0.441*cosDeg((22.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((22.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((22.5)-turretHorizontalAngle)), vect(0.441*cosDeg((-22.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((-22.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((-22.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((-22.5)-turretHorizontalAngle)), vect(0.441*cosDeg((-67.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((-67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((-67.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((-67.5)-turretHorizontalAngle)), vect(0.441*cosDeg((247.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((247.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((247.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((247.5)-turretHorizontalAngle)), vect(0.441*cosDeg((202.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((202.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((202.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((202.5)-turretHorizontalAngle)), vect(0.441*cosDeg((157.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((157.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((157.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((157.5)-turretHorizontalAngle)), vect(0.441*cosDeg((112.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((112.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((112.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((112.5)-turretHorizontalAngle)), vect(0.441*cosDeg((-67.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((-67.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((67.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((67.5)-turretHorizontalAngle)), vect(0.441*cosDeg((247.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((247.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((22.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((22.5)-turretHorizontalAngle)), vect(0.441*cosDeg((202.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((202.5)-turretHorizontalAngle)))
grappleTurret(vect(0.441*cosDeg((-22.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((-22.5)-turretHorizontalAngle)), vect(0.441*cosDeg((157.5)-turretHorizontalAngle), 1.338, 0.441*sinDeg((157.5)-turretHorizontalAngle)))
"""
#cannon

grappleCannon(vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + cosDeg(turretHorizontalAngle)*-0.0325 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2784619407771256, (0-sinDeg(turretVerticalAngle))*0 + cosDeg(turretVerticalAngle)*1.2784619407771256, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + (0-sinDeg(turretHorizontalAngle))*-0.0325 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2784619407771256), vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + cosDeg(turretHorizontalAngle)*-0.0325 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2784619407771256, (0-sinDeg(turretVerticalAngle))*3 + cosDeg(turretVerticalAngle)*1.2784619407771256, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + (0-sinDeg(turretHorizontalAngle))*-0.0325 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2784619407771256))
grappleCannon(vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + cosDeg(turretHorizontalAngle)*0.0325 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2784619407771256, (0-sinDeg(turretVerticalAngle))*0 + cosDeg(turretVerticalAngle)*1.2784619407771256, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + (0-sinDeg(turretHorizontalAngle))*0.0325 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2784619407771256), vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + cosDeg(turretHorizontalAngle)*0.0325 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2784619407771256, (0-sinDeg(turretVerticalAngle))*3 + cosDeg(turretVerticalAngle)*1.2784619407771256, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + (0-sinDeg(turretHorizontalAngle))*0.0325 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2784619407771256))
grappleCannon(vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + cosDeg(turretHorizontalAngle)*-0.0325 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1215380592228743, (0-sinDeg(turretVerticalAngle))*0 + cosDeg(turretVerticalAngle)*1.1215380592228743, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + (0-sinDeg(turretHorizontalAngle))*-0.0325 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1215380592228743), vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + cosDeg(turretHorizontalAngle)*-0.0325 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1215380592228743, (0-sinDeg(turretVerticalAngle))*3 + cosDeg(turretVerticalAngle)*1.1215380592228743, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + (0-sinDeg(turretHorizontalAngle))*-0.0325 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1215380592228743))
grappleCannon(vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + cosDeg(turretHorizontalAngle)*0.0325 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1215380592228743, (0-sinDeg(turretVerticalAngle))*0 + cosDeg(turretVerticalAngle)*1.1215380592228743, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + (0-sinDeg(turretHorizontalAngle))*0.0325 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1215380592228743), vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + cosDeg(turretHorizontalAngle)*0.0325 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1215380592228743, (0-sinDeg(turretVerticalAngle))*3 + cosDeg(turretVerticalAngle)*1.1215380592228743, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + (0-sinDeg(turretHorizontalAngle))*0.0325 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1215380592228743))
grappleCannon(vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + cosDeg(turretHorizontalAngle)*-0.0784619407771256 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2325, (0-sinDeg(turretVerticalAngle))*0 + cosDeg(turretVerticalAngle)*1.2325, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + (0-sinDeg(turretHorizontalAngle))*-0.0784619407771256 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2325), vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + cosDeg(turretHorizontalAngle)*-0.0784619407771256 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2325, (0-sinDeg(turretVerticalAngle))*3 + cosDeg(turretVerticalAngle)*1.2325, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + (0-sinDeg(turretHorizontalAngle))*-0.0784619407771256 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2325))
grappleCannon(vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + cosDeg(turretHorizontalAngle)*-0.0784619407771256 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1675, (0-sinDeg(turretVerticalAngle))*0 + cosDeg(turretVerticalAngle)*1.1675, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + (0-sinDeg(turretHorizontalAngle))*-0.0784619407771256 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1675), vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + cosDeg(turretHorizontalAngle)*-0.0784619407771256 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1675, (0-sinDeg(turretVerticalAngle))*3 + cosDeg(turretVerticalAngle)*1.1675, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + (0-sinDeg(turretHorizontalAngle))*-0.0784619407771256 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1675))
grappleCannon(vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + cosDeg(turretHorizontalAngle)*0.0784619407771256 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2325, (0-sinDeg(turretVerticalAngle))*0 + cosDeg(turretVerticalAngle)*1.2325, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + (0-sinDeg(turretHorizontalAngle))*0.0784619407771256 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2325), vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + cosDeg(turretHorizontalAngle)*0.0784619407771256 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2325, (0-sinDeg(turretVerticalAngle))*3 + cosDeg(turretVerticalAngle)*1.2325, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + (0-sinDeg(turretHorizontalAngle))*0.0784619407771256 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.2325))
grappleCannon(vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + cosDeg(turretHorizontalAngle)*0.0784619407771256 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1675, (0-sinDeg(turretVerticalAngle))*0 + cosDeg(turretVerticalAngle)*1.1675, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*0 + (0-sinDeg(turretHorizontalAngle))*0.0784619407771256 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1675), vect(sinDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + cosDeg(turretHorizontalAngle)*0.0784619407771256 + sinDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1675, (0-sinDeg(turretVerticalAngle))*3 + cosDeg(turretVerticalAngle)*1.1675, cosDeg(turretHorizontalAngle)*cosDeg(turretVerticalAngle)*3 + (0-sinDeg(turretHorizontalAngle))*0.0784619407771256 + cosDeg(turretHorizontalAngle)*sinDeg(turretVerticalAngle)*1.1675))

@Rule "tp to arena"
@Event eachPlayer
if eventPlayer.hasSpawned() and eventPlayer.isAlive():
    wait(0.01)
    eventPlayer.teleport(vect(214.339, 27.5, -36.157))