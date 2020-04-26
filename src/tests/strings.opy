
rule "strings":
    print("custom string")
    print("new\nline")
    print("qu\"o\"tes")
    print('single quotes')
    print(w"fullwidth string")
    print(b"big letters string")
    print(l"{0} {1}".format("localized", "string"))
    print(l"{0}, {1}, and {2}".format(0,1,2))