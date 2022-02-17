#!/usr/bin/env python
from itertools import chain
import sys

from fontTools.ttLib import TTFont
from fontTools.unicode import Unicode
from fontTools.ttLib.tables._c_m_a_p import CmapSubtable

font = TTFont(sys.argv[1])
cmap = font['cmap']
t = cmap.getcmap(3,1).cmap
s = font.getGlyphSet()
units_per_em = font['head'].unitsPerEm


charsToCheck = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ |฀           ​‌‍‎‏‪‫‬‭‮ ⁪⁫⁬⁭⁮⁯　ㅤ|"
#for c in t:
for c in charsToCheck:
	c = ord(c)
	print("Width of U+"+hex(c)+" ("+chr(c)+"): "+str(s[t[c]].width))