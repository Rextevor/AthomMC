const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log("On IPSOON");
  bot.user.setActivity("Release soon | ;help", {type: "STREAMING"});
});

bot.on("message", async message =>{
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === ";ip"){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Server IP")
    .setColor("#10e82d")
    .addField("IP", ':Server ip is coming soon', true);

    return message.channel.send(botembed);
  }

  if (cmd === ";website"){

    let bicon = bot.user.displayAvatarURL;
    let botembed1 = new Discord.RichEmbed()
    .setDescription("Server Website")
    .setColor("#10e82d")
    .addField("Link", 'Website is comming soon', true);

    return message.channel.send(botembed1);
  }

  if (cmd === ";staffapply"){

    let bicon = bot.user.displayAvatarURL;
    let botembed2 = new Discord.RichEmbed()
    .setDescription("Server Website")
    .setColor("#10e82d")
    .addField("Link", 'Staff applys are comming soon', true);

    return message.channel.send(botembed2);
  }

  if (cmd === ";discord"){

    let bicon = bot.user.displayAvatarURL;
    let botembed3 = new Discord.RichEmbed()
    .setDescription("Server Website")
    .setColor("#10e82d")
    .addField("Link", 'https://discord.gg/VBMTFMs', true);

    return message.channel.send(botembed3);
  }

  if (cmd === ";help"){

    let bicon = bot.user.displayAvatarURL;
    let help = new Discord.RichEmbed()
    .setDescription("**List of all commands**")
    .setColor("#10e82d")
    .addField(";ip", 'Show the IP to the server', true)
    .addField(";website", 'Link to website', true)
    .addField(";staffapply", 'Link of staff apply', true)
    .addField(";discord", 'Link of discord server', true);

    return message.channel.send(help);
}
});

bot.login('NDU2MDYyNDc1MjM0ODM2NDgw.DgFEyw.C9gp61vcqf6qxU2Nwh6ZWnUkDqI');