
rule "1":
    A = 1

#!include "test include/"
#!include "include5.opy"
#!define script(a,b) __script__("test include/script.js")

rule "6":
    A = script(2, 4)
