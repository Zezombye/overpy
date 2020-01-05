var result = "";
for (var i = 1; i <= 6; i++) {
    result +=
`@Rule "barricade ${i}"
@Event eachPlayer
@Team 2
if distance(eventPlayer.getPosition(), barricade${i}) < 5:
    do:
        eventPlayer.applyImpulse(Vector.UP, 1, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        eventPlayer.applyImpulse(directionTowards(vect(barricade${i}.x, 0, barricade${i}.z), vect(eventPlayer.getPosition().x, 0, eventPlayer.getPosition().z)), 10, Relativity.TO_WORLD, Impulse.CANCEL_CONTRARY_MOTION)
        barricade${i}hp--
        wait()
    while RULE_CONDITION

@Rule "barricade ${i} destroyed"
@Event global
if barricade${i}hp <= 0:
    barricade${i} = vect(0,-1000,0)
`
}
result;