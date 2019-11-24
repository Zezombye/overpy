
var obfuscationMappings = {};
for (var char of ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~') {
	obfuscationMappings[char] = String.fromCodePoint(char.charCodeAt(0)+0xE0000);
}
