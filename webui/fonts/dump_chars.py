#!/usr/bin/env python

from fontTools.ttLib import TTFont
from fontTools.unicode import Unicode
from fontTools.ttLib.tables._c_m_a_p import CmapSubtable
import json

font = TTFont("blizzard_global_ow2.ttf")
cmap = font['cmap']
glyf = font["glyf"]
t = cmap.getcmap(3,1).cmap
s = font.getGlyphSet()
units_per_em = font['head'].unitsPerEm


alphabet = "abcdefghijklmnopqrstuvwxyz"
#alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
fullwidth = "ａｂｃｄｅｆｇｈіјｋIｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"



result = {}
"""
for c in t:
	width = s[t[c]].width
	if width != 512:
		result[chr(c)] = width


with open("owo.json", "w+", encoding="utf-8") as f:
	f.write(json.dumps(result, ensure_ascii=False))
exit()
"""

for c in alphabet:
	result[c] = {
		"lower": fullwidth[alphabet.index(c)],
		"width": s[t[ord(c)]].width,
		"xmin": s[t[ord(c)]].lsb,
		"lowerWidth": s[t[ord(fullwidth[alphabet.index(c)])]].width,
		"lowerXmin": s[t[ord(fullwidth[alphabet.index(c)])]].lsb,
	}

print(json.dumps(result))
exit()

charsToCheck = [
	" ",
	"\u2006",
	"\u2009",
	"0",
	#"\u202F",
	"\u2005",
	"\u2004",
	"\u0E00",
	"\u2000",
	"\u3164",
	"\u2001",
	"\u2007",
	"\u2008",
]

"""
for c in charsToCheck:
	c = ord(c)
	print(hex(c), "'"+chr(c)+"'")
	try:
		xMin = s[t[c]].lsb
	except AttributeError:
		xMin = "null"
	#print(chr(c))
	width = s[t[c]].width
	print("'"+chr(c)+"' "+hex(c)+", width=", width)
	#print("U+"+hex(c)+" ("+chr(c)+"):", xMin, width-xMax)
"""



def debug(*args):
	#print(*args)
	pass


def generate(text):


	spaces = {
		1: "\\u2006",
		2: "\\u2009",
		71: "\\u202F",
		128: "\\u2005",
		#142: "\\u0020",
		#171: "\\u2004",
		#223: "\\u0E00",
		#256: "\\u2000",
		#284: "\\u0020\\u0020",
		#426: "\\u0020\\u0020\\u0020",
		#461: "\\u3164",
		#512: "\\u2001",
	}

	tolerance = 0
	letterInterval = 0

	alphabet = "abcdefghijklmnopqrstuvwxyz"
	#alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	fullwidth = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"
	fullwidth = "ａｂｃｄｅｆｇｈіјｋIｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"
	#fullwidth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	def getWidth(c):
		global s
		if c == "\u202F":
			return 71
		return s[t[ord(c)]].width

	def getXMin(c):
		global s
		return s[t[ord(c)]].lsb

	def getXMax(c):
		global s
		return s[t[ord(c)]].xMax



	textWidth = -letterInterval
	if len(text) > 0 and text[0] in alphabet:
		#We cannot get rid of the "space" of the first fullwidth letter, so take it into account
		textWidth += getXMin(fullwidth[alphabet.index(text[0])])

	nbTexts = 2

	texts = [{
		"content": "",
		"width": -letterInterval,
	} for t in range(nbTexts)]

	def getBestSpaces(coins, target):
		costs = [0]
		coins_used = [None]
		for i in range(1,target + 1):
			bestCost = 999999999999999
			bestCoin = -1
			for coin in coins:
				if coin <= i:
					cost = 1 + costs[i - coin]
					if cost < bestCost:
						bestCost = cost
						bestCoin = coin
			costs.append(bestCost)
			coins_used.append(bestCoin)
		ret = []
		while target > 0:
			ret.append(coins_used[target])
			target -= coins_used[target]
		return ret


	textIdx = 0
	for i in range(len(text)):
		letter = text[i]
		debug("Handling letter "+letter)
		debug("text so far: '"+text[0:i]+"' width", textWidth)
		for j in range(len(texts)):
			debug("Text "+str(j)+": '"+texts[j]["content"]+"' width ", texts[j]["width"])


		if letter in alphabet:
			textIdx += 1
			textIdx %= nbTexts
			debug("Text index: ",textIdx)
			widthToGet = max(0, textWidth - texts[textIdx]["width"] - getXMin(fullwidth[alphabet.index(letter)]) + getXMin(letter))
			debug("diff:",textWidth - texts[textIdx]["width"])
			debug("normal xmin:", getXMin(letter))
			debug("fullwidth xmin:",getXMin(fullwidth[alphabet.index(letter)]))
			debug("Adding closest to",widthToGet,"(+/- "+str(tolerance)+")")
			spacesToAdd = "".join([spaces[j] for j in getBestSpaces(spaces.keys(), widthToGet)])
			texts[textIdx]["content"] += spacesToAdd#"<"+str(widthToGet)+">"
			texts[textIdx]["width"] += widthToGet
			texts[textIdx]["content"] += fullwidth[alphabet.index(letter)]
			texts[textIdx]["width"] += getWidth(fullwidth[alphabet.index(letter)])+letterInterval
		elif letter != " ":
			if len(texts[textIdx]["content"]) == 0 or text[i-1] in alphabet or text[i-1] == " ":
				textIdx += 1
				textIdx %= nbTexts
				widthToGet = textWidth - texts[textIdx]["width"]
				debug("diff:",textWidth - texts[textIdx]["width"])
				debug("Adding closest to",widthToGet,"(+/- "+str(tolerance)+")")
				spacesToAdd = "".join([spaces[j] for j in getBestSpaces(spaces.keys(), widthToGet)])
				texts[textIdx]["content"] += spacesToAdd#"<"+str(widthToGet)+">"
				texts[textIdx]["width"] += widthToGet
			texts[textIdx]["content"] += letter
			texts[textIdx]["width"] += getWidth(letter)+letterInterval

		textWidth += getWidth(letter)+letterInterval

	#debug("Adding spaces to even out")
	maxTextWidth = max(t["width"] for t in texts)
	#debug("max width",maxTextWidth)
	for i in range(len(texts)):
		widthToGet = maxTextWidth - texts[i]["width"]
		spacesToAdd = "".join([spaces[j] for j in getBestSpaces(spaces.keys(), widthToGet)])
		texts[i]["content"] += spacesToAdd#"<"+str(widthToGet)+">"
		texts[i]["width"] += widthToGet

	#for i in range(len(texts)):
	#	debug("Text "+str(i)+": '"+texts[i]["content"]+"' width ", texts[i]["width"])
	#	calculatedWidth = 0
	#	for j in texts[i]["content"]:
	#		#debug(j)
	#		calculatedWidth += getWidth(j)
	#	debug(calculatedWidth)



	#debug("Text result:")
	result = ""
	for i in range(len(texts)):
		result += ("'|"+texts[i]["content"].replace("'", "\\'")+"\\z|',\n")
		#result += ("rule '':\n\tstrs["+str(i)+"] = '"+texts[i]["content"].replace("'", "\\'")+"\\z',\n")
		#debug("b'Text "+str(i)+":",texts[i]["content"]+"| width="+str(texts[i]["width"])+"',")
	return result

owo = """
When devils will the blackest sins put on,
They do suggest at first with heavenly shows,
As I do now: for whiles this honest fool
Plies Desdemona to repair his fortunes
And she for him pleads strongly to the Moor,
I'll pour this pestilence into his ear,
That she repeals him for her body's lust;
And by how much she strives to do him good,
She shall undo her credit with the Moor."""

owo = """
Lorem ipsum dolor sit amet,
consectetur adipiscing... elit.
Sed do eiusmod tempo'r incididunt' ut; labore `et` dolore <magna> aliqua.
Ut enim ad minim^veniam, quis nostrud:
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit
in ~voluptate "velit" esse & cillum @dolore eu (fugiat) [nulla] {pariatur}.
Excepteur si-nt _occaecat_ cupidatat *non* proident $10?
sunt in culpa #qui officia| deserunt\\\\ mollit/ anim id % est laborum!!

"""

owo = """
yes, i'll do pills. array rrrrr
"""


owo = owo.strip().split("\n")[::-1]
for line in owo:
	print(generate(line))
