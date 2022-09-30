const discord = require("discord.js");
const translate = require('@iamtraction/google-translate');

module.exports = {
  name: "terjemah",
  description: "Translates the given message.",
  run: async (client, message, args) => {
        const txt = args.slice(1).join(" ")
        const lang = args[0]
        if(!lang) return message.channel.send("Berikan kode bahasa ISO.")
        if(!txt) return message.channel.send("Berikan teks yang kamu terjemahkan.")
        translate(txt, { to: lang }).then(res => {
          const embed = new discord.MessageEmbed()
          .setDescription(res.text)
          .setColor("RANDOM")
          message.channel.send({ embeds: [embed] });
    }).catch(err => {
      message.channel.send("Kamu perlu berikan kode bahasa ISO yang valid <contoh: .terjemah ID Hello World>.")
    });
  },
};
