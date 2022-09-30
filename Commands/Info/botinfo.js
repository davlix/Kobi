const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "nformasi tentang bot",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setAuthor("informasi kobi", client.user.avatarURL())
      .setColor("RANDOM")
      .setDescription(
        `**Nama Bot: **Kobi \n**Owner: **[Davlix#4935] \n**Total Kategori: **8 \n**Total Commands: **${client.commands.size} \n**User:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        }`
      )
      .addField(
        "Tentang Kobi",
        "Kobi adalah bot indonesia yang menyediakan berbagai fitur moderation, music, logging, welcomer dan masih banyak!"
      )
      .setFooter("Salam manis, Kobi Development Team");
    message.channel.send({ embeds: [embed] });
  },
};
