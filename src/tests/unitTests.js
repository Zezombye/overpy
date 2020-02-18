var compilerUnitTests = [
{
    name: "perfectly normal rule",
    input: `
@Rule "test"
@Event global
A = 2
    `

}, {
    name: "rules with a condition",
    input: `
@Rule "test"
@Event global
if A == 2:
    B = 3

@Rule "test2"
@Event global
if A == 2:
    B = 3
    C = 4
    `
}, {
    name: "non-rule conditions",
    input: `
@Rule "test"
@Event global
if A == 2:
    if B == 3:
        C = 4

@Rule "test2"
@Event global
if A == 2:
    if B == 3:
        C = 4
        D = 5
        
@Rule "test3"
@Event global
if A == 2:
    if B == 3:
        C = 4
    D = 5
    
@Rule "test4"
@Event global
if B == 3:
    C = 4
D = 5
    `
},{
    name: "skip if",
    input: `
@Rule "test"
@Event global
if A == 2:
    if B == 3:
        goto lbl_1
    lbl_1:

@Rule "test2"
@Event global
if A == 2:
    B = 4
    if B == 3:
        goto lbl_1
    C = 5
    lbl_1:
    
@Rule "test3"
@Event global
if B == 3:
    goto lbl_1
lbl_1:
    `
},{
    name: "label not found",
    input: `
@Rule "test"
@Event global
if A == 2:
    B = 4
    if B == 3:
        goto lbl_1
    C = 5
    `,
    expectError: true,
},{
    name: "unreachable code",
    input: `
@Rule "test"
@Event global
if A == 2:
    if B == 3:
        goto lbl_1
        C = 4
    lbl_1:
    
@Rule "test2"
@Event global
if A == 2:
    if B == 3:
        return
        C = 4

@Rule "test3"
@Event global
if A == 2:
    if B == 3:
        continue
        C = 4
    lbl_1:
    `,
    expectError = true
},{
    name: "abort if",
    input: `

@Rule "test"
@Event global
if A == 2:
    if B == 3:
        return


@Rule "test2"
@Event global
if A == 2:
    if B == 3:
        return
    C = 4


@Rule "test3"
@Event global
if B == 3:
    return
    
@Rule "test4"
@Event global
if B == 3:
    return
C = 2
    `
},{
    name: "if elif else",
    input: `
@Rule "test"
@Event global
if A == 2:
    if B == 3:
        C = 4
    elif B == 2:
        D = 4
    else:
        E = 5

@Rule "test2"
@Event global
if A == 2:
    if B == 3:
        C = 4
        D = 5
    elif B == 2:
        D = 4
        C = 5
    else:
        E = 5

@Rule "test3"
@Event global
if A == 2:
    if B == 3:
        C = 4
    elif B == 2:
        D = 4
    else:
        E = 5
    D = 4


@Rule "test4"
@Event global
if A == 2:
    if B == 3:
        C = 4
    else:
        E = 5
        
@Rule "test5"
@Event global
if B == 3:
    C = 4
elif B == 2:
    D = 4
else:
    E = 5


@Rule "test6"
@Event global
if A == 2:
    B = 1
    if A == 3:
        C = 2
    else:
        if A == 2:
            C = 3
        else:
            D = 3
    
@Rule "test7"
@Event global
if B == 3:
    C = 4
elif B == 2:
    D = 4
A = 2

@Rule "test8"
@Event global
if B == 3:
    C = 4
elif B == 2:
    D = 4

@Rule "test9"
@Event global
if B == 3:
    C = 4
elif B == 2:
    D = 4
if C == 2:
    X = 3
    
@Rule "test10"
@Event global
if B == 3:
    C = 4
elif B == 2:
    D = 4
elif B == 5:
    D = 2
else:
    E = 5
    `
},{
    name: "inverted condition testing",
    input: `
@Rule "test"
@Event global
if B == 3:
    if A == 2:
        C = 4
        
@Rule "test2"
@Event global
if B == 3:
    if A == 2 and B == 6:
        C = 4
        
@Rule "test3"
@Event global
if B == 3:
    if A:
        C = 4

@Rule "test4"
@Event global
if B == 3:
    if not A:
        C = 4

@Rule "test5"
@Event global
if B == 3:
    if true:
        C = 4
        
@Rule "test6"
@Event global
if B == 3:
    if false:
        C = 4
    `
},{
    name: "if/elif/else with gotos",
    input: `

@Rule "test"
@Event global
if B == 3:
    goto lbl_1
elif B == 2:
    goto lbl_2
else:
    goto lbl_3
lbl_1:
lbl_2:
lbl_3:
    `
},{
    name: "if/elif/else with returns",
    input: `
@Rule "test"
@Event global
if B == 3:
    return
elif B == 2:
    return
else:
    return
A = 2
    `
},{
    name: "if/elif/else with continues",
    input: `
@Rule "test"
@Event global
if B == 3:
    continue
elif B == 2:
    continue
else:
    continue
A = 2
    `
}

/**
 * TODO:
 * - "for x in y" loop, with multiple instructions
 * - do/while tests
 * - lone continue/return tests
 * - various tests with nested current array elements
 * - varying metadata, including no actions
 * - rule with only a if and a goto/return/continue just after
 */

]