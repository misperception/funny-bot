module.exports = {
    name: "crash",
    description: "Sends a crash gif to the mentioned user",
    execute(message, args){
        const crashgif = ("https://gfycat.com/greatmadeupbarasinga");
        if (!message.guild) return;
        const user = message.mentions.users.first();
        if (user){
            const member = message.guild.member(user);
            if (member){
                member.send(crashgif).catch(e => {console.log("couldn't deliver message")});
                message.channel.send("crashed the retard");
            }
        }
    
}}