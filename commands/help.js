const { MessageEmbed, Channel } = require("discord.js")

module.exports = {
    name: "help",
    description: "displays a list of commands",
    execute(message, args){
        const embed = new MessageEmbed()
            .setTitle("List of commands")
            .setDescription("Here are the commands available")
            .setColor(0xffa12e)
            .addFields(
                {name: "`help`", value: "Returns this list", inline: true},
                {name: "`ping`", value: "Returns a message", inline: true},
                {name: "`bomb`", value: "Returns a zip bomb", inline: true},
                {name: "`crash`", value: "Mention someone and the bot sends them a crash gif", inline: true},
                {name: "`spam`", value: "Mention someone, and set a message and a number, then the bot will spam the one mentioned"},
            )
            .setFooter("Created by a bored skid during class lmao");
        message.channel.send(embed)
    }
}