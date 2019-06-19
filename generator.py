#owo\
rezare

values = [
                "BAD EXPLOSION",
                "BAD PICKUP EFFECT",
                "BUFF EXPLOSION SOUND",
                "BUFF IMPACT SOUND",
                "DEBUFF IMPACT SOUND",
                "EXPLOSION SOUND",
                "GOOD EXPLOSION",
                "GOOD PICKUP EFFECT",
                "RING EXPLOSION",
                "RING EXPLOSION SOUND"
]

result = ""
for i in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':
	result += '''[["{}"], [
    "{}",
]],
'''.format(i.replace(" ", "_").replace(":", ""), i.replace(" ", ""))


print(result)