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

function boolToWs(x) {
	if (x === true) {
		return wsTrue;
	} else if (x === false) {
		return wsFalse;
	} else {
		error("Invalid boolean "+x);
	}
}

function containsRandom(x) {
	return x.includes(wsRandInt) || x.includes(wsRandReal) || x.includes(wsRandShuffle) || x.includes(wsRandChoice);
}

function isWsTrue(x) {
	if (x === wsTrue) {
		return true;
	}
	if (isNumber(x) && parseFloat(x) !== 0) {
		return true;
	}
	return false;
}

function isWsFalse(x) {
	return x === wsFalse || x === wsNull || x === "0";
}

function isWs1(x) {
	return x === "1" || x === wsTrue;
}

function isWs0(x) {
	return x === "0" || x === wsFalse || x === wsNull;
}
