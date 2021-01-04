// SoundBot By ZeroSound#5168
// Coded with Discord.js v12.5.1

const Discord = require("discord.js");
const client = new Discord.Client();
const { meme } = require("memejs");
const cfg = require("./soundbot.json");

client.on("ready", () => { // Bot Ready
    console.log('SoundBot Local Server v2');
    console.log('Library: Discord.js v12.5.1');
    console.log('Developed by ZeroSound#5168');
    console.log('Github: ZeroSoundDev');
    console.log('Twitter: ZeroSoundDev');
    console.log('Iniciating bot...');
    client.user.setActivity(`s/`, {
        type: "STREAMING",
        url: "https://twitch.tv/zerosound"
    });
});

client.on("message", (message) => {
    var prefix = cfg.prefix

if (message.content.startsWith(prefix + 'help')) { // Help Command
    const Embed = new Discord.MessageEmbed()
    .setColor('7289da')
    .setTitle('SoundBot Command List')
    .setImage("https://images-ext-2.discordapp.net/external/r5v6S3wX40iLFujzJtICKG7e4PDou3f4yeRXIdAFgYo/https/images-ext-2.discordapp.net/external/Uh3Nd4bqExpEzP_ExEE_onk1kRdxKJ-FEy1INcUkGJs/https/media.discordapp.net/attachments/792645535554863185/792781225734701076/CommandBoard.png?width=881&height=495")
    message.channel.send(Embed);
}

if (message.content.startsWith(prefix + "fun")) {
    const UI = new Discord.MessageEmbed()
	.setColor('#7289da')
	.setTitle('SoundBot Fun Commands')
	.setThumbnail('https://media.discordapp.net/attachments/794955757354352680/795481231272706048/SoundBot.png')
	.addFields(
		{ name: '8ball', value: 's/8ball <Question>', inline: false },
        { name: 'Meme', value: 's/meme', inline: false },
        { name: 'Coin', value: 's/coin', inline: false },
    )
    
	.setTimestamp()
	.setFooter('ZeroSound Bot');

    message.channel.send(UI)
}

if (message.content.startsWith(prefix + "8ball")) {
        let respuesta = ["Yes", "No", "Maybe", "Of Course", "Idk", "Nah", ":thinking:", "You can rely on it", "Why Not", "Hmmm", "I think that is a bad idea...", "Uh", "NO", "I have no idea"]
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
      const embed = new Discord.MessageEmbed()
      message.channel.send(`${random}`);
}

if (message.content.startsWith(prefix + "meme")) {
    const embed = new Discord.MessageEmbed()
  meme('meme', function(err, data) { 
      if (err) return message.reply(err) 
      const embed = new Discord.MessageEmbed()

      .setColor("#7289da")
      .setImage(data.url)
      .setFooter('SoundBot');
      message.channel.send(embed)
  })
}

if (message.content.startsWith(prefix + "coin")) {
    const coin = new Discord.MessageEmbed()
    .setColor('#dd2de0')
    .setTitle(message.author.username + `'s CoinFlip`)
    .addField('It landed on', `${Math.round(Math.random()) ? 'Heads!' : 'Tails!'}`)
    .setTimestamp()
    .setFooter('SoundBot');
message.channel.send(coin);
}

if (message.content.startsWith(prefix + "mod")) {
    const UI = new Discord.MessageEmbed()
	.setColor('#7289da')
	.setTitle('SoundBot Mod Commands')
	.setThumbnail('https://media.discordapp.net/attachments/794955757354352680/795481231272706048/SoundBot.png')
	.addFields(
		{ name: 'Kick', value: '`s/kick <user>`', inline: false },
        { name: 'Ban', value: '`s/ban <user>`', inline: false},
        { name: 'Blacklist', value: '`s/bl <user>`', inline: false },

    )
    
	.setTimestamp()
	.setFooter('ZeroSound Bot');

message.channel.send(UI);
}

if (message.content.startsWith(prefix + "kick")) {
    if(!message.member.hasPermission('KICK_MEMBERS')) {
        message.channel.send('You need `KICK_MEMBERS` permission to do that!');
        return;
    };
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('None')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}.`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member!');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this server!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }

  if (message.content.startsWith(prefix + "ban")) {
    var args = Array.prototype.slice.call(arguments);
    const user = message.mentions.users.first();
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You need `BAN_MEMBERS` permission to do that!')
let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
if (!User) return message.channel.send("Invalid User.")
if (User.hasPermission("BAN_MEMBERS")) return message.reply("I can't ban a user that has `BAN_MEMBERS` permission!")
let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"
}

User.ban({reason: banReason})
message.channel.send(`Successfully banned ${user.tag}.`)
}

if (message.content.startsWith(prefix + "bl")) {
    message.channel.send("Soon™");
}

if (message.content.startsWith(prefix + "pics")) {
    const UI = new Discord.MessageEmbed()
	.setColor('#7289da')
	.setTitle('SoundBot Picture Commands')
	.setThumbnail('https://media.discordapp.net/attachments/794955757354352680/795481231272706048/SoundBot.png')
	.addFields(
        { name: 'Cat', value: 's/cat', inline: false },
        { name: 'Dog', value: 's/dog', inline: false },
        { name: 'NSFW', value: 's/nsfw', inline: false },
    )
    
	.setTimestamp()
	.setFooter('SoundBot');

    message.channel.send(UI)
}

if (message.content.startsWith(prefix + "cat")) {
    const embed = new Discord.MessageEmbed()
  meme('cat', function(err, data) { 
      if (err) return message.reply(err) 
      const embed = new Discord.MessageEmbed()

      .setColor("#7289da")
      .setImage(data.url)
      .setFooter('SoundBot');
      message.channel.send(embed)
  })
}

if (message.content.startsWith(prefix + "dog")) {
    const embed = new Discord.MessageEmbed()
  meme('dog', function(err, data) { 
      if (err) return message.reply(err) 
      const embed = new Discord.MessageEmbed()

      .setColor("#7289da")
      .setImage(data.url)
      .setFooter('SoundBot');
      message.channel.send(embed)
  })
}

if (message.content.startsWith(prefix + "nsfw")) {
message.channel.send("We don't have that command yet~ :flushed:")
}

if (message.content.startsWith(prefix + "tools")) {
    const UI = new Discord.MessageEmbed()
	.setColor('#7289da')
    .setTitle('SoundBot Tool Commands')
	.setThumbnail('https://media.discordapp.net/attachments/794955757354352680/795481231272706048/SoundBot.png')
	.addFields(
        { name: 'Server Info', value: 's/serverinfo', inline: false },
        { name: 'Bot Info', value: 's/botinfo', inline: false },
    )
    
	.setTimestamp()
	.setFooter('SoundBot');

    message.channel.send(UI)
}

if (message.content.startsWith(prefix + "serverinfo")) {
    let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild}'s information`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
            

        message.channel.send(embed)
}

if (message.content.startsWith(prefix + "botinfo")) {
    const UI = new Discord.MessageEmbed()
	.setColor('#7289da')
	.setTitle('Bot Info')
	.setThumbnail('https://media.discordapp.net/attachments/794955757354352680/795481231272706048/SoundBot.png')
	.addFields(
		{ name: 'Servers', value: `${client.guilds.cache.size}`, inline: false },
        { name: 'Members', value: `${message.guild.memberCount}`, inline: false },
    )
    
	.setTimestamp()
	.setFooter('ZeroSound Bot');

message.channel.send(UI);
}

if (message.content.startsWith(prefix + "others")) {
    message.channel.send("> We are still working on that commands!");
}

if (message.content.startsWith(prefix + "settings")) {
    message.channel.send("> We are still working on that commands!");
}

if (message.content.startsWith(prefix + "economy")) {
    message.channel.send("> We are still working on that commands!");
}

if (message.content.startsWith(prefix + "events")) {
    message.channel.send("Hypevent 2021:tm: Comming Soon...");
}
});
client.login(cfg.token);