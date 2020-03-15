#!mainFile "../ZombieEscape.opy"


@Rule "ana healing"
@Event playerDealtDamage
@Hero ana
if victim.team == TEAM_HUMANS and not victim.isHealedByAna:
    victim.startHoT(attacker, 0.85, 30)
    victim.isHealedByAna = true
    wait(0.85)
    victim.isHealedByAna = false
