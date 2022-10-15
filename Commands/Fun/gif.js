const Discord = module.require("discord.js");
const giphy = require("giphy-api")("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

module.exports = {
  name: "gif",
  description: "Cari Gambar Gif",
  botPerms: ["EmbedLinks", "ManageMessages"],
  run: async (client, message, args) => {
    if (args.length === 0) {
      message.channel.send("Belom ada pencarian!");
      return;
    }
    if (args.length === 1) {
      term = args.toString();
    } else {
      term = args.join(" ");
    }
    giphy.search(term).then(function (res) {
      // Res contains gif data!
      let id = res.data[0].id;
      let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`;

      const embed = new Discord.EmbedBuilder()
        .setTitle(`Hasil pencarian dari \`${term}\` di GIPHY`)
        .setImage(msgurl)
        .setColor("Random");
      message.channel.send({ embeds: [embed] });
    });

    message.delete();
  },
};