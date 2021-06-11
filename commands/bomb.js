module.exports = {
    name: "bomb",
    description: "Sends a zip bomb when requested",
    execute(message, args){
        const Discord = require("discord.js");
        const attachment = new Discord.MessageAttachment("./trabajo.zip");
        message.channel.send("here you go retard", attachment);
    }
}