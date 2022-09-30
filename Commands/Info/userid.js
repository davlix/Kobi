const Discord = module.require("discord.js");

module.exports = {
  name: "userid",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var mention = message.guild.member(message.mentions.users.first());
    if (!mention) return message.channel.send("Mention seseorang buat dapetin ID nya cuk");
    const lolicon = mention.user.avatarURL;
    const lolid = new Discord.MessageEmbed()
      .setThumbnail(mention.user.avatarURL)
      .setColor("RANDOM")
      .setTitle("nih id nya cukk " + `${mention.user.username}\'simpan baik2 okey.`)
      .setDescription(`${mention.id}`)
      .setThumbnail(lolicon);
    message.channel.send({ embeds: [lolid] });
  },
};
