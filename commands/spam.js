module.exports = {
    name: "spam",
    description: "spams a motherfucker",
    execute(message, args){

        if(!message.guild) return;

        const user = message.mentions.users.first();

        if(user){

            const member = message.guild.member(user);

            if(member){
                const last = args.length;
                console.log("the value of last is " + last);
                const times = args.slice(last- 1);
                console.log("the value of times is " + times.toString());
                const text = args.slice(1, last -1).join(" ");
                console.log("the value of text is " + '"' + text + '"');
                if(!text || !times){
                    message.channel.send("check the structure of your message you moron, it should be `oops spam {user} {message} {times}`");
                    return;
                }
                var spam = 0
                    if(text && times){
                        var spam = 0
                        while(spam < times){
                            spam++;
                            console.log(spam);
                            setTimeout(function(){
                                member.send(text).catch(e => {console.log("message not delivered")})
                            }, 250)
                        }
                    }
                message.channel.send("spammed the retard");
            }
        }
    }
}