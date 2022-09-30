const Discord = module.require("discord.js");

module.exports = {
  name: "masukan",
  description: "beri kami masukan",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const avatar = message.author.avatarURL;
    const suggestchannel = client.channels.cache.get("968601687713534034");
    const suggestion = args.join(" ");
    if (!suggestion) {
      return message.channel.send("beri kami masukan");
    }
    message.channel.send(
      "Terimakasih banyak ya udah beri masukan, untuk lebih lanjut sangat kami hargai masukanmu kedepannya!"
    );
    const embed = new Discord.MessageEmbed()
      .setAuthor(`Masukan baru!`, avatar)
      .setDescription(`${suggestion} \n\nDari: ${message.author.tag}`)
      .setFooter(`ID: ${message.author.id}`)
      .setColor("RANDOM");

    suggestchannel.send({ embeds: [embed] });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("970067224612200448");
    message.channel.send(
      "Looks like an error has occured. The error has been reported to the Report Section"
    );
    errorlogs.send(`Error in Suggest Command! \nError: \n` + error);
  },
};
