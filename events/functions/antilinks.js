const antilinkData = require("../../database/guildData/antilink");
const ms = require('ms')

module.exports = async (message) => {
  const antilink = await antilinkData.findOne({
    GuildID: message.guild.id,
  });
  if (antilink) {
    if (
      message.content.match("https://") ||
      message.content.match("discord.gg") ||
      message.content.match("www.")
    ) {
      message.delete();
      let msg = message.channel.send("Tidak ada tautan yang diizinkan saat anti-tautan aktif!").then((msg) => {
          let time = "2s";
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        });
    }
  }
};
