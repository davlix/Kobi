const Discord = module.require("discord.js");

module.exports = {
  name: "tampar",
  description: "Tampar keras seseorang",
  run: async (client, message, args) => {
    let member = message.mentions.members.first();
    if (!member) {
      return message.reply("kamu perlu mention seseorang");
    }
  const embed = new Discord.MessageEmbed()
    .setTitle(message.author.name + " tampar keras :raised_back_of_hand: " +
          member.displayName +
          ", " +
          member.displayName +
          " masuk rumah sakit:")
      .setColor("RANDOM");
    await message.reply({ embeds: [embed] });
  },
};
