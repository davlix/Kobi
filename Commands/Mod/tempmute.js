const { MessageEmbed } = module.require("discord.js");
const ms = require("ms");
const discord = require("discord.js");

module.exports = {
  name: "tempmute",
  category: "info",
  description: "Mengembalikan latensi dan ping API",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();

    const role = message.guild.roles.cache.find((ro) => ro.name === "Mute");
    if (!role) {
      message.guild.roles.create({
        data: {
          name: "mute",
          color: "GRAY",
        },
      });
    }
    if (!user) {
      return message.channel.send("Anda perlu menentukan pengguna");
    }
    if (user.id === message.owner.id) {
      return message.channel.send(
        "Anda dapat menggunakan Perintah Mod apa pun terhadap Pemilik Server"
      );
    }
    const time = args[0];
    if (!time) {
      return message.channel.send(
        "Berapa banyak Anda akan membisukan orang itu?()"
      );
    }
    const reason = args.slice(1).join(" ");
    if (!reason) {
      return message.channel.send(
        "Dengan alasan apa kamu akan tempmute?:"
      );
    }
    const mtembde = new MessageEmbed()
      .setTitle("Action: Tempmute")
      .setColor("RANDOM")
      .addField("User:", user)
      .addField("Alasan", reason)
      .addField("Moderator:", message.member.displayName)
      .addField("Time", time, true);
    const mtuembde = new MessageEmbed()
      .setTitle("KAMU UDAH DI MUTE CUK!!")
      .setColor("RANDOM")
      .addField("Alasan", reason)
      .addField("Moderator:", message.member.displayName)
      .addField("Time", time, true);
    user.send({ embeds: [mtuembde] });
    message.channel.send({ embeds: [mtembde] });
    user.roles.add(role);
    setTimeout(function () {
      user.roles.remove(role);
      user.send(`Kamu sekarang di bisukan! Kami harap Kamu Mengikuti Aturan lain kali`);
    }, ms(time));
  },
};
