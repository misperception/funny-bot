module.exports = {
    name: "ratio",
    description: "0-100 rating of your retardation",
    execute(message,args){
        var retard = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        const embed = new MessageEmbed()
            .setTitle("**You are " + retard + "% retarded**");
    }
}