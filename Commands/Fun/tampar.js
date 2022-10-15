const Discord = module.require("discord.js");

module.exports = {
  name: "tampar",
  description: "tampar seseorang",
  run: async (client, message, args) => {
    let member = message.mentions.members.first();
    if (!member) {
      return message.reply("kamu perlu mention seseorang cok");
    }
    const embed = new Discord.EmbedBuilder()
    .setDescription(message.author.username + " tampar :raised_back_of_hand: " + member.user.username + ", " + member.user.username + " masuk rumah sakit! :hospital:")
    .setColor("Random");
    await message.reply({ embeds: [embed] });
  },
};