const discord = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],
    category: "Utility",
    usage: "ping",
    description: "Dapetin Ping dari kobi!",
    ownerOnly: false,
    nsfwOnly: false,
    run: async (client, message, args) => {

     let start = Date.now();

     let pingEmbed = new discord.MessageEmbed()
     .setDescription("payah si kobi ngambek sampe lemot cuk.")
     .setColor("RANDOM")
  
  message.channel.send({ embeds: [pingEmbed] }).then(m => {
    
    let end = Date.now();
    
    let embed = new discord.MessageEmbed()
    .setAuthor("Ping!", message.author.avatarURL())
    .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
    .addField("Message Latency", end - start + "ms", true)
    .setColor("RANDOM");
    m.edit({ embeds: [embed] }).catch(e => message.channel.send(e))
    
  })

    }
};
