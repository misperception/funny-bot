module.exports = {
    name: "ping",
    description: "Returns pong when executed",
    execute(message,args){
        message.channel.send("pong you dummy");
    }
}