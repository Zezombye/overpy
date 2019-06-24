// When adding new strings:
//   - they must go in their particular category
//   - run the test to ensure nothing broke

// string constants or "predefines" are sorted into different categories that make it easier to parse

// a list of all predefined strings
// @Todo(Elio): fix hero names! its a param not a constant!
let stringPredefs = [ "First Level", "round", "you", "you lose", "loser", "time", "ugh", "up", "Torbjörn", "{}", "yes" ];

// a dynamically generated list of things that break strings (denoting when they end)
let afterStringPredefs = new Set();

let heroPredefs = [ "Torbjörn" ];

// predefs that go between two or more variables
let delimeterPredefs = [ "{0} {1}", "{0}, {1}", "{0} -> {1}", "{0} - {1}", "{0}: {1}", "{0} {1} {2}", "{0} : {1} : {2}", "{0}: {1} and {2}" ];

// predefs that wrap around a variable
let wrapPredefs = [ "({0})" ];

// predefs that go before a variable
let prefixPredefs = [ "#{0}", "round {0}", ];

// predefs that go after a variable
let suffixPredefs = [ "{0} <-",  ];

// I miss C assert :(
function assert(assertion, msg) {
    if(!assertion) throw new Error(msg);
}

// @Todo: remove
function stringifyAstNode(node, depth = 1) {
    let start = ' '.repeat(depth * 2);

    if(node == null) return "\n" + start + "{0}: Null";
    if(typeof node == "string") return "\"" + node + "\"";

    if(!node.hasOwnProperty("one")) return stringifyAstNode(node.zero, depth + 1);
    if(!node.hasOwnProperty("two")) return stringifyAstNode(node.zero, depth + 1) + "\n" + start + "  {0}: "
                                                 + stringifyAstNode(node.one, depth + 1);

    return stringifyAstNode(node.zero, depth + 1) + "\n" + start + "  {0}: " + stringifyAstNode(node.one, depth + 1)
                + "\n" + start + "  {1}: " + stringifyAstNode(node.two, depth + 1);
}

function test() {
    let testCases = [ { str: "213 round", args: [] }, { str: "you 123", args: [] }, { str: "round 123", args: [] }, { str: "you lose", args: [] }, 
            { str: "you lose you", args: [] }, { str: "yes yes", args: [] }, { str: "(12)", args: [] }, { str: "((12 (22 (42))))"}, 
            { str: "69 -> 43", args: [] }, { str: "time ugh, up you loser: you lose", args: [] }, { str: "(12)", args: [] }, 
            { str: "(12)", args: [] }, { str: "First Level - 12 - (69)", args: []}, { str: "(#First Level, 12)"}, 
            { str: "(#First Level, Torbjörn, 123.4, {})", args: ["playersInSlot(0)"] }, 
            { str: "(#First Level : Torbjörn: 123.4, {})", args: ["playersInSlot(0)"] }, 
            { str: "(#First Level: you and lose)", args: [] } ];
    
    for(let i = 0; i < testCases.length; i++) {
        let tc = testCases[i];
        let string = tc.str;
        let args = tc.args;

        console.log("");
        console.log("Parsing \"" + string + "\" with args [" + args + "]");
        
        console.log("Parsed output: \n" + stringifyAstNode(str2ws(string, args)));
    }
}

// a fake expression parser
function parseExpression(expr) {
    return "Fake Parsed(\"" + expr + "\")";
}

// an error function that can be replaced with the proper parser error function
function parseError(chin, err) {
    assert(false, "Failed to parse string: " + err + " at someline:" + chin.pos());
}

class CharInputStream {
    constructor(inputString) {
        this.str = inputString;
        this.nextCharId = 0;
        this.currentChar = null;
    }

    pos() {
        return Math.max(0, this.nextCharId - 1);
    }

    end(amount = 0) {
        return this.nextCharId + amount >= this.str.length
    }

    next() {
        assert(!this.end(), "Next called at end of input");

        return this.currentChar = this.str[this.nextCharId++];
    }

    skip(amount = 1) {
        this.currentChar = null;
        this.nextCharId += amount - 1;
    }
    
    peek() {
        if(this.currentChar == null) return this.next();
    
        return this.currentChar;
    }

    peekAmount(amount) {
        if(this.currentChar == null) this.next();

        assert(this.nextCharId + amount - 1 < this.str.length, "Tried to peek past end of input");
    
        return this.str[this.nextCharId + amount - 1];
    }

    trimEnd(amount) {
        assert(this.str.length - amount > nextCharId, "Tried to trim past the current character position");

        this.str = this.str.substring(0, this.str.length - amount);
    }
}

function isDigit(chr) {
    return !isNaN(parseInt(chr, 10));
}

function tryParseNumber(chin) {
    let match = "";

    let i = 0;
    do { match += chin.peekAmount(i); i++; } while(!chin.end(i - 1) && (isDigit(chin.peekAmount(i)) || chin.peekAmount(i) == '.'));

    chin.skip(match.length);

    return match;
}

function tryParsePrefixPredef(chin) {
    let match = null;
    let matchLen = 0;

    for(let i = 0; i < prefixPredefs.length; i++) {
        let predef = prefixPredefs[i];

        let varIndex = predef.indexOf("{0}");
        let prefix = predef.substring(0, varIndex);

        let preid = 0;
        while(!chin.end(preid) && prefix[preid] == chin.peekAmount(preid) && preid < prefix.length) { preid++; }

        // only match if it's a longer match than the last
        if((match == null || match.length < prefix.length) && preid >= prefix.length) {
            match = { zero: predef };
            matchLen = prefix.length;
        }
    }

    if(match == null) return null;
    
    // move the input stream past our match to continue matching
    chin.skip(matchLen);

    // get the expression after the prefix
    let one = parsePredefExpression(chin);

    // @Todo: what about suffixes? they don't need an expression!
    if(one == null) parseError(chin, "Expected expression after matched prefix predef '" + match.zero + "'");

    match.one = one;

    return match;
}

function tryParseWrappedPredef(chin) {
    let match = null;
    let matchLen = 0;

    for(let i = 0; i < wrapPredefs.length; i++) {
        let predef = wrapPredefs[i];

        let varIndex = predef.indexOf("{0}");
        let prefix = predef.substring(0, varIndex);
        let suffix = predef.substring(varIndex + 3);

        let preid = 0;
        while(!chin.end(preid) && prefix[preid] == chin.peekAmount(preid) && preid < prefix.length) { preid++; }

        // only match if it's a longer match than the last
        if((match == null || match.zero.length < prefix.length) && preid >= prefix.length) {
            // find the suffix
            let suffixIndex = null;
            let prefixes = 1;

            for(let i = 1; !chin.end(i - 1); i++) {
                if(chin.peekAmount(i) == prefix) {
                    prefixes++;
                }

                if(chin.peekAmount(i) == suffix) {
                    if(--prefixes <= 0) suffixIndex = chin.pos() + i;
                }
            }

            if(suffixIndex != null) {
                let bodyStr = chin.str.substring(chin.pos() + preid, suffixIndex);
                let bodyChin = new CharInputStream(bodyStr);

                let bodyParsed = parsePredefExpression(bodyChin);
                match = { zero: predef, one: bodyParsed };
                matchLen = prefix.length + bodyStr.length + suffix.length;
            }
        }
    }
    
    // move the input stream past our match to continue matching
    chin.skip(matchLen);

    return match;
}

function tryParseBinaryOrTernaryPredef(chin, prev) {
    let matches = [];

    for(let i = 0; i < delimeterPredefs.length; i++) {
        let predef = delimeterPredefs[i];

        let var0Index = predef.indexOf("{0}");
        let var1Index = predef.indexOf("{1}");
        let delimiter = predef.substring(var0Index + 3, var1Index);

        let preid = 0;
        while(!chin.end(preid) && delimiter[preid] == chin.peekAmount(preid) && preid < delimiter.length) { preid++; }

        if(preid >= delimiter.length) {
            matches.push({ content: { zero: predef, one: prev }, length: delimiter.length });
        }
    }

    let finalMatches = [];

    matches.forEach(match => {
        let tempChin = new CharInputStream(chin.str);
        tempChin.skip(chin.pos() + match.length + 1);

        // get the second part of the binary
        let two = parsePredefExpression(tempChin, true);

        if(two == null) return;

        match.content.two = two;

        // attempt to parse the third part
        if(match.content.zero.includes("{2}")) {
            
        } else {
            match.length = tempChin.pos() - chin.pos() + 1;
            finalMatches.push(match);
        }
    });

    let bestMatch = null;

    finalMatches.forEach(match => {
        if(bestMatch == null || match.length > bestMatch.length) bestMatch = match;
    });

    if(bestMatch == null) return null;

    chin.skip(bestMatch.length);

    return bestMatch.content;
}

function tryParseStringPredef(chin) {
    let match = null;
    let matchLen = 0;

    for(let i = 0; i < stringPredefs.length; i++) {
        let predef = stringPredefs[i];

        let preid = 0;
        while(!chin.end(preid) && predef[preid] == chin.peekAmount(preid) && preid < predef.length) { preid++; }

        // only match if there's no current match or it's a longer match than the last
        if(match == null || matchLen < predef.length) {
            // check the whole predef was found in the string and that it ends with a character that can be after a string (space, comma, EOF, etc)
            // if you don't check this, "you loser" will match "you lose" "r" instead of "{0} {1}" "you" "loser"
            if(preid + 1 >= predef.length && (chin.end(preid) || afterStringPredefs.has(chin.peekAmount(preid)))) {
                match = { zero: predef };
                matchLen = predef.length;
            }
        }
    }

    // move the input stream past our match to continue matching
    chin.skip(matchLen);

    return match;
}

// strings can start with string const, hero name, number, wrapped predef or prefix predef
function parseFirstPredefAtom(chin, canFail = false) {
    if(chin.end()) parseError(chin, "Empty string is not supported")

    let match = null;

    // try number
    if(isDigit(chin.peek())) match = tryParseNumber(chin);

    // try prefix predef
    if(match == null) match = tryParsePrefixPredef(chin);

    // try wrapped predef
    if(match == null) match = tryParseWrappedPredef(chin);

    // finally try to parse a regular string predef
    if(match == null) match = tryParseStringPredef(chin);

    if(match == null && !canFail) parseError(chin, "Cannot find string constant to match pattern '" + chin.str.substring(chin.pos()) + "', must start with string const, hero name, number, wrapped predef or prefix predef");

    return match;
}

// the first atom can only be followed by a binary, ternary or suffix predef
function parseNextPredefAtom(chin, prev, canFail = false) {
    if(chin.end()) return null;

    let match = null;

    // try binary or ternary predef
    if(match == null) match = tryParseBinaryOrTernaryPredef(chin, prev);

    // try suffix predef
    // if(match == null) match = tryParseSuffixPredef(chin);

    if(match == null && !canFail) parseError(chin, "Start atom '" + chin.str.substring(0, chin.pos()) + "' can only be followed by binary, ternary"
                        + " or suffix strings from the predefined list (instead found '" + chin.str.substring(chin.pos()) + "')");

    return match;
}

function parsePredefExpression(chin, canFail = false) {
    let first = parseFirstPredefAtom(chin, canFail);

    let next = parseNextPredefAtom(chin, first, canFail);

    if(next != null) return next;

    return first;
}

function generateAfterStringPredefs() {
    function generateAfterStringPredef(arr) {
        for(let i = 0; i < arr.length; i++) {
            let predef = arr[i];
            let var0Index = predef.indexOf("{0}");
            let var1Index = predef.indexOf("{1}");
            let var2Index = predef.indexOf("{2}");

            let afterVar0 = predef[var0Index + 3];
            let afterVar1 = predef[var1Index + 3];
            let afterVar2 = predef[var2Index + 3];

            if(var0Index >= 0 && afterVar0 != null) afterStringPredefs.add(afterVar0);
            if(var1Index >= 0 && afterVar1 != null) afterStringPredefs.add(afterVar1);
            if(var2Index >= 0 && afterVar2 != null) afterStringPredefs.add(afterVar2);
        }
    }

    generateAfterStringPredef(suffixPredefs);
    generateAfterStringPredef(delimeterPredefs);
}

function str2ws(string, args) {
    // @Speed(Elio): if this needs to be faster, we could statically generate this list, it's just more stuff to update though
    if(afterStringPredefs.size == 0) generateAfterStringPredefs();

    let chin = new CharInputStream(string);

    return parsePredefExpression(chin);
}

test();