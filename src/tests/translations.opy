settings {
    "lobby": {
        "allowPlayersInQueue": true,
        "enableMatchVoiceChat": true,
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopChamber"
            ],
        }
    },
}
#!setupTags
#!translations en fr es zh_cn
rule "owo\nuwu":
    A = _("some string")
    debug(t"some string")
    C = _("context\nowo", "some string")
    D = _("context\nowo", "some string")
    E = t"\z\n\nstring with whitespace \z"
    debug(t"line 1 \n line 2   \n line 3  ")
    G = t"line 1 \n    line 2 \n line 3  "
    H = t"a very very long string that will be split dsqljmfk ljkfqsdjlk qjlk lkjfsdq lkqjs mqslkdj fqsmklj qsmlkfj qsklfj qslkfjm qsmljkdf qslkmjdf lkqmjsdf lmkqjsdf lkmjqsfd lkmjqsdlfmkj qlsmjkdf lkmjqsdf lkjmqsldkmfj qslmkjdf lmkjqsfd lkmjqsfldmkj qsjmlkfd lmqkjsdf mljkqsfml dkjqsmlkjfd qsmlkjfd mlkqjsfd jlmkqsfmlkj qslkmjf mljksf"
    Z = 1234
    Y = 5432
    if "{}".format(hostPlayer) == "Zezombye":
        K = 2
    I = t"some formatted string {}".format(Z)
    J = t"formatted string {} on both sidess".format(Z)
    K = tf"translated fstring: {hostPlayer}"
    K = _(f"translated fstring: {hostPlayer}")
    debug(t"multiple formatters {} {} owo".format(Z, Y))
    debug(t"multiple formatters {0} {1} owo".format(Z, Y))
    debug(t"multiple formatters {1} {0} owo".format(Z, Y))
    L = t"653453[]|.<>$= ¤$"
    M = _("$200")
    N = "untranslated string"
    debug(_(A))
    hudHeader(text=_(A), reevaluation=HudReeval.VISIBILITY_AND_STRING)
    hudHeader(text=_(H), reevaluation=HudReeval.VISIBILITY_AND_STRING)
    hudHeader(text=A, reevaluation=HudReeval.VISIBILITY_AND_STRING)
    hudHeader(text=_(N), reevaluation=HudReeval.VISIBILITY_AND_STRING)
    bigMessage(text=_([
        ___("string 1"),
        ___("string 2"),
    ][Z]))

rule "":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    bigMessage(getAllPlayers, "{}{}".format(_(A), buttonString(Button.INTERACT)))
    smallMessage(getAllPlayers, "{}{}".format(_(A), buttonString(Button.INTERACT)))
