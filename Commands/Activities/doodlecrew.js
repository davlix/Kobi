const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: "doodlecrew",
    description: "Main DoodleCrew.io di Discord",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('Kamu perlu join voice channel dulu cok!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'doodlecrew').then(async(invite) => {
            
            let embed = new EmbedBuilder()
            .setTitle("Doodle Crew.io")
            .setDescription(`[Klik disini](${invite.code}) Untuk akses Doodle Crew.io!\n\`\`\`\nNote: Fitur ini tidak tersedia untuk pengguna ponsel!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Permintaan Dari: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}