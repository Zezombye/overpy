
values = [
                "ADD",
                "APPEND TO ARRAY",
                "DIVIDE",
                "MAX",
                "MIN",
                "MODULO",
                "MULTIPLY",
                "RAISE TO POWER",
                "REMOVE FROM ARRAY BY INDEX",
                "REMOVE FROM ARRAY BY VALUE",
                "SUBTRACT"
]

result = ""
for i in values:
	result += '''[["{}"], [
    "{}",
]],
'''.format("_"+i.lower().replace(" ", "_").replace(":", ""), i.lower().replace(" ", ""))


print(result)