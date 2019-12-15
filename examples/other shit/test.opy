#!define macro1 test
#!define macro2 setSlowMotion(macro1)

@Rule "test"
@Event global
A = 42
debug({
    42: "owo",
    56: "uwu",
    10: "test",
}[A])