const discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Tendang user bajingan",
  usage: "kick <@user> <reason>",
  userPerms: ["KICK_MEMBERS"],
  botPerms: ["EMBED_LINKS", "KICK_MEMBERS"],
  run: async (client, message, args) => {


    let target = message.mentions.members.first() || message.guild.users.cache.get(args[0]);

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, kau harus mention seseorang yang kamu kick`
      );
    }
    if (target.id === message.guild.ownerId) {
      return message.channel.send("Pemilik server itu raja, gabisa di kick");
    }
    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, Diri sendiri di kick, bego!`
      );
    }

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "-";

    const embed = new MessageEmbed()
      .setTitle("KICK MEMBER")
      .setColor("RANDOM")
      .setThumbnail(target.user.displayAvatarURL)
      .setDescription(
        `Action : Kick \nAlasan: ${reason} \nUser: ${target} \nModerator: ${message.member}`
      )
      .setTimestamp();

    message.channel.send({embeds: [embed]});

    target.kick(args[0]);
  },
};
