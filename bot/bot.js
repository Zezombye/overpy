const Discord = require('discord.js');
const client = new Discord.Client();

var fs = require("fs");

//var token = fs.readFileSync("C:/Users/Zezombye/Desktop/overpy-token.txt", "utf-8");
var token = process.env.BOT_TOKEN;

//import overpy files
overpyFiles = [
	"globalVars.js",
	"keywords.js",
	"stringKw.js",
	"utils.js",
	"overpyDecompiler.js",
];

var overpyCode = "";
for (file of overpyFiles) {
	overpyCode += fs.readFileSync("./"+file).toString()
}

overpyCode += `
module.exports = {
	decompileAllRules: decompileAllRules,
	decompileActions: decompileActions,
	decompileConditions: decompileConditions,
};

`

fs.writeFileSync("./overpy.js", overpyCode);

var overpy = require("./overpy.js");

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	msgContent = msg.content;
	msgContent = msgContent.trim();
	//msgContent = msgContent.replace(/;/g, ";");
	//Check for backticks
	if (msgContent.startsWith("```") && msgContent.endsWith("```")) {
		msgContent = msgContent.substring(msgContent.indexOf("\n"), msgContent.length-3);
		msgContent = msgContent.trim();
	}
	if (msgContent.startsWith("rule(") && msgContent.endsWith("}")) {
		try {
			msg.channel.send("```python\n"+overpy.decompileAllRules(msgContent)+"```");
		} catch (Error) {
			msg.channel.send("```\n"+Error+"```\n<@246994594376450048>");
		}
	} else if (msgContent.startsWith("actions") && msgContent.endsWith("}")) {
		try {
			msg.channel.send("```python\n"+overpy.decompileActions(msgContent)+"```");
		} catch (Error) {
			msg.channel.send("```\n"+Error+"```\n<@246994594376450048>");
		}
	} else if (msgContent.startsWith("conditions") && msgContent.endsWith("}")) {
		try {
			msg.channel.send("```python\n"+overpy.decompileConditions(msgContent)+"```");
		} catch (Error) {
			msg.channel.send("```\n"+Error+"```\n<@246994594376450048>");
		}
	}
});

client.login(token);
