
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