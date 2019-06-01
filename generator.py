values = [
                "ACKNOWLEDGE",
                "EMOTE DOWN",
                "EMOTE LEFT",
                "EMOTE RIGHT",
                "EMOTE UP",
                "GROUP UP",
                "HELLO",
                "NEED HEALING",
                "THANKS",
                "ULTIMATE STATUS",
                "VOICE LINE DOWN",
                "VOICE LINE LEFT",
                "VOICE LINE RIGHT",
                "VOICE LINE UP"
]

result = ""
for i in values:
	result += '''[["Comms.{}"], [
    "{}",
]],
'''.format(i.replace(" ", "_").replace(":", ""), i.replace(" ", "").lower())


print(result)