#!/usr/bin/env python

from fontTools.ttLib import TTFont
from fontTools.unicode import Unicode
from fontTools.ttLib.tables._c_m_a_p import CmapSubtable

font = TTFont("blizzard_global.ttf")
cmap = font['cmap']
glyf = font["glyf"]
t = cmap.getcmap(3,1).cmap
s = font.getGlyphSet()
units_per_em = font['head'].unitsPerEm
def generate(text):



	spaces = {
		1: " ",
		2: " ",
		71: " ",
		128: " ",
		142: " ",
		171: " ",
		223: "฀",
		256: " ",
		284: "  ",
		426: "   ",
		461: "ㅤ",
		512: " ",
	}

	tolerance = 0
	letterInterval = 0

	alphabet = "abcdefghijklmnopqrstuvwxyz"
	#alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	fullwidth = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"
	#fullwidth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	def getWidth(c):
		global s
		return s[t[ord(c)]].width
		
	def getXMin(c):
		global s
		return s[t[ord(c)]]._glyph.xMin
		
	def getXMax(c):
		global s
		return s[t[ord(c)]]._glyph.xMax


	"""for c in t:
	#for c in charsToCheck:
	#	c = ord(c)
		try:
			xMin = s[t[c]]._glyph.xMin
		except AttributeError:
			xMin = "null"
		try:
			xMax = s[t[c]]._glyph.xMax
		except AttributeError:
			xMax = "null"
		#print(chr(c))
		width = s[t[c]].width
		if xMin == "null":
			print("'"+chr(c)+"' "+hex(c)+", width=", width)
			#print("U+"+hex(c)+" ("+chr(c)+"):", xMin, width-xMax)"""
		
	textWidth = -letterInterval

	nbTexts = 4

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
		#print("Handling letter "+letter)
		#print("text so far: '"+text[0:i]+"' width", textWidth)
		#for j in range(len(texts)):
			#print("Text "+str(j)+": '"+texts[j]["content"]+"' width ", texts[j]["width"])


		if letter in alphabet:
			textIdx += 1
			textIdx %= nbTexts
			#print("Text index: ",textIdx)
			widthToGet = max(0, textWidth - texts[textIdx]["width"] - getXMin(fullwidth[alphabet.index(letter)]) + getXMin(letter))
			#print("diff:",textWidth - texts[textIdx]["width"])
			#print("normal xmin:", getXMin(letter))
			#print("fullwidth xmin:",getXMin(fullwidth[alphabet.index(letter)]))
			#print("Adding closest to",widthToGet,"(+/- "+str(tolerance)+")")
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
				#print("diff:",textWidth - texts[textIdx]["width"])
				#print("Adding closest to",widthToGet,"(+/- "+str(tolerance)+")")
				spacesToAdd = "".join([spaces[j] for j in getBestSpaces(spaces.keys(), widthToGet)])
				texts[textIdx]["content"] += spacesToAdd#"<"+str(widthToGet)+">"
				texts[textIdx]["width"] += widthToGet
			texts[textIdx]["content"] += letter
			texts[textIdx]["width"] += getWidth(letter)+letterInterval
				
		textWidth += getWidth(letter)+letterInterval

	#print("Adding spaces to even out")
	maxTextWidth = max(t["width"] for t in texts)
	#print("max width",maxTextWidth)
	for i in range(len(texts)):
		widthToGet = maxTextWidth - texts[i]["width"]
		spacesToAdd = "".join([spaces[j] for j in getBestSpaces(spaces.keys(), widthToGet)])
		texts[i]["content"] += spacesToAdd#"<"+str(widthToGet)+">"
		texts[i]["width"] += widthToGet


				
	#print("Text result:")
	result = ""
	for i in range(len(texts)):
		result += ("b'"+texts[i]["content"].replace("'", "\\'")+"',\n")
		#print("b'Text "+str(i)+":",texts[i]["content"]+"| width="+str(texts[i]["width"])+"',")
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

owo = owo.strip().split("\n")[::-1]
for line in owo:
	print(generate(line))
