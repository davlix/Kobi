const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Invite kobi",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Dapetin invitation link [Klik disini](https://discord.com/oauth2/authorize?client_id=934270895046946879&permissions=8&redirect_uri=https%3A%2F%2Fkobi-disc.herokuapp.com%2Foauth&response_type=code&scope=bot%20guilds%20identify%20applications.commands%20guilds.join%20guilds.members.read%20messages.read)"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
