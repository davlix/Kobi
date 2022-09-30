const Discord = module.require("discord.js");

module.exports = {
  name: "emojiid",
  description: "Dapetin ID emoji",
  run: async (client, message, args) => {
    const name = args.join(" ");
    const emoji = message.guild.emojis.cache.find((r) => r.name === name);
    if (!name) {
      return message.channel.send("masukin nama emoji");
    }
    if (!emoji) {
      return message.channel.send(
        "kayaknya ada yang salah. coba koreksi nama emojimu!!!"
      );
    }
    new message.channel.send(`\`\`\`${emoji}\`\`\``);
  },
};
