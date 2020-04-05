/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

var compileTest = `
globalvar owo
globalvar uwu

subroutine sub

rule "rule 1":
 if A == 2:
  B = 3
  if B == 4:
   C = 5
  D = 6

@Condition A == 3
@Event eachPlayer
rule "rule 2":
 if owo == uwu:
  A = 3.5

def sub():
  D = -3*5
`