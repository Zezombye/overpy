
rule "rule 1":
    A = 1

#!rulePrefix "test prefix 1"

rule "rule 2":
    A = 2

rule "":
    A = 3

#!rulePrefix "test prefix 2"

rule "rule 4":
    A = 4

##!rulePrefixTemplate f"prefix:[{$prefixTitle}] file:[{$fileUpper}] path:[{$pathLower}] | {$rule or '<empty>'}" if $prefix and $isDelimiter != true else $rule
#!rulePrefixTemplate 

#!include "test include/test prefix.opy"

rule "rule 7":
    A = 7

#!include "test include/include4.opy"

rule "rule 8":
    A = 8

rule "---- DELIMITER ----":
    @Delimiter
