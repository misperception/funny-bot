module.exports = {
    name: "bomb",
    description: "Sends a zip bomb when requested",
    execute(message, args){
        const Discord = require("discord.js");
        const attachment = new Discord.MessageAttachment("./pog.zip");
        message.channel.send("here you go retard", attachment);
    }
}