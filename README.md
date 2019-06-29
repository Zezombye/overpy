# overpy
High-level language for the Overwatch Workshop with support for compilation and decompilation.

#Demo page

![owo](https://i.imgur.com/zCP6TYF.png)

The demo page is accessible at <url> and is divided in 3 parts.

The first part is the input for decompilation; this is where you paste your workshop code. Click on the "decompile" button to convert it to OverPy. Alternatively, click on the "add example text" button to input my Zombie Escape code.

The second part is the input for compilation (and the output for decompilation); it is OverPy code (don't hesitate to copy-paste it into another window, as my front-end skills aren't that great and I didn't manage to make it so you can resize horizontally the textarea). Click on the "compile" button to convert it back into the Workshop script.

The third part is the output for compilation. It has a "compare" button you can use to check if the decompilation+compilation outputs the same code as the original. However, there can be false positives:
- Strings will most likely be parsed in different ways and will be differently organized, although they should result in the same output. (eg for the string "#Up!" you can put #{0} and {0}! in any order you want)
- Likely, operations can be parsed in different ways, eg add(add(a,b),c) is the same as add(a,add(b,c)).
- If you have a "skip if 9999", the number will be converted to however much instructions you need to get to the end of the rule (so a smaller number).
- Various optimizations (as there are several ways to represent the same code). In the end, just check the differences, and determine if it's a compilation error or just a reorganization :p

If you get "An error has occurred", you must open the developer console (F12 on Firefox, Ctrl+Shift+J in Chrome) to check the error. Please report to me any error you find! Note: your browser may freeze for a few seconds on decompilation/compilation (due to the amount of debug messages printed to the console).

#OverPy Syntax

//todo
