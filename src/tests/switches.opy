
rule "switches":
    switch A:
        case 1:
            B++
            break
        case 2:
            C++
            break

    switch B:
        case 1:
            B++
        case 2:
        case 3:
            C++
        default:
        case Hero.BRIGITTE:
            D++

rule "nested switches":
    if A:
        switch B:
            case 1:
                C++
                break
            case 2:
                D++
                break
            case 3:
                switch C:
                    case 1:
                        A++
                        B++
                        break
                    case 2:
                        C++
                    default:
                        D++
    else:
        E++