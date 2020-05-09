
/*
multi
line
comment
*/

rule "comments":
    @Condition A #A
    #B
    @Condition B
    #C++
    C++
    D++ #D++
    #nothing
    #some array
    A = [1,2/*,2.5*//**/,3]

    