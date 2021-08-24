const { MessageEmbed, Channel } = require("discord.js")
module.exports = {
    name: "ratio",
    description: "0-100 rating of your retardation",
    execute(message,args){
        var retard = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        const avatar = message.author.avatarURL();
        const embed = new MessageEmbed()
            .setTitle("**You are " + retard + "% retarded**");
            if(retard <= 20 ){
                embed.setColor("GREEN");
            }
            else if(retard <= 50){
                embed.setColor("YELLOW");
            }
            else if(retard <= 70){
                embed.setColor("ORANGE");
            }
            else if(retard <= 99){
                embed.setColor("RED");
            }
            else if(retard == 100){
                embed.setColor("DARK_RED")
            }
            if(retard == 0){
                embed.setFooter("gg bro", avatar);
            }
            else if(retard == 100){
                embed.setFooter("kys", avatar);
            }
            else{
                embed.setFooter("This is " + message.author.tag + "'s retard rate.", avatar)
            }
            console.log(avatar);
        message.channel.send(embed);
    }
}   