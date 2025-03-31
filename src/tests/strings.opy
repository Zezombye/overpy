#!optimizeForSize
#!setupTx

rule "strings":
    print("custom 'string'")
    print("new\nline")
    print("qu\"o\"tes")
    print("zero width space: |\z|")
    print("")
    print(l"")
    print('single \'"quotes"')
    print(w"fullwidth string")
    print(b"big letters string")
    print(l"{0} {1}".format("localized", "string"))
    print(l"{0}, {1}, and {2}".format(0,1,2))
    print("Multiple fields {} {} {} {} {} {} {} {}".format(A,B,C,D,E,F,G,H))
    print("Numbered fields {0} {1} {2} {1} {3}".format(A,B,C,D))
    print("Numbered fields 2 {1}{0}{2}{1}".format(A,B,C))
    print("Missing field: {0} {2}".format(A,B,C))
    print("Missing field 2: {1} {2}".format(A,B,C))
    print("Null fields: {0} {1} {2}".format(null, null, null))
    print(w"Very long string that will need to be splitted along several strings, as it is fullwidth and takes more than 128 characters which is the limit")
    print("String with entities: a\&black_square;b\&fullwidth_space;c")
    print("String with \x01 hex escape and \u2000 unicode escape")
    print(c"Case-sensitive string")
    print("multiline
string")
    print("{} <fgFF00FFFF>texture test</fg> {} <txC0000000002DD21> {}".format(A,B,C))
    print("{1} <fgFF00FFFF>texture test</fg> {2} <txC0000000002DD21> {0}".format(A,B,C))
    print("<txC0000000002DD21>")
    print("<txc12345> <tx{}>".format(3))
    print("<tx{}>".format(A))
    print("Optimized strings: {1} {0}{2} {3}".format(123, 123.455, "|string|", A))
    print("Optimized strings 2: {} {} {}{} {} {}".format(A, 0.125, 0.1, Texture.MOUSE_CURSOR, B, "other string {0}{0}".format(C)))
    print("Optimized strings 3: {}".format("|str1|{}|str2|".format(A)))


    A = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a",]

    A = "a,b,c".split(",")
    A = "abc".strIndex("b")
    A = "a,b,c".replace(",",";")
    A = "abc".charAt(1)
