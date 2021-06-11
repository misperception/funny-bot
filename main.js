const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "oops ";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}


client.on("message", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        client.commands.get("ping").execute(message, args);
    }

    else if(command === "bomb" || command === "zip"){
        client.commands.get("bomb").execute(message, args);
    }

    else if(command === "crash"){
        client.commands.get("crash").execute(message, args);
    }
    
    else if(command === "daniloncha" || command === "maricon"){
        client.commands.get("daniloncha").execute(message, args);
    }

    else if(command === "spam"){
        client.commands.get("spam").execute(message, args);
    }

    else if(command === "help" || command === "commands"){
        client.commands.get("help").execute(message,args);
    }
});

client.once("ready", () => {
    console.log("Systems activated");
});






































client.login("ODQ4MTg4ODE0ODM2ODkxNjg4.YLI_ZA.Ih0KOIGAfiKY1G-D0EVoAt1My40");

