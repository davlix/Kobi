const Discord = module.require("discord.js");

module.exports = {
  name: "report",
  description: "Report  bug",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const reportchannel = client.channels.cache.get("968601581861892096");
    const report = args.join(" ");
    if (!report) {
      return message.channel.send(
        "Masukkan deskripsi tentang bug yang kamu temuin!"
      );
    }
    message.channel.send(
      `${message.author}, report mu sukses di ajukan. mod kami akan bales chat kamu ya jika terdapat bug beneran.`
    );
    const embed = new Discord.MessageEmbed()
      .setTitle("Bug Report")
      .setDescription(`${report} \n\nBy: ${message.author.tag}`)
      .setFooter(`User ID: ${message.author.id}`)
      .setColor("RANDOM");

    reportchannel.send({embeds: [embed]});
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("970067224612200448");
    message.channel.send(
      "Looks Like an Error has Ocurred. The Error has been reported to the Report Section!"
    );
    errorlogs.send("Error on Report Command \nError: \n" + error);
  },
};
