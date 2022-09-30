const { MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");

module.exports = {
  name: "help",
  description: "dapetin bantuan command list kobi",
  aliases: ["commands", "cmd", "h"],
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    if (args[0]) {
      let command = args[0];
      let cmd = client.commands.get(command);

      if (!cmd) {
        return message.channel.send("Couldn't find that command!")
      } else if (cmd) {
        let description = cmd.description ? cmd.description : "No description available.";
        let aliases = cmd.aliases ? cmd.aliases.join(", ") : "No aliases available.";
        let botPerms = cmd.botPerms ? cmd.botPerms.join(", ") : "No permissions required.";
        let userPerms = cmd.userPerms ? cmd.userPerms.join(", ") : "No permissions required.";
        let ownerOnly = cmd.ownerOnly ? "Yes" : "No";
        let nsfwOnly = cmd.nsfwOnly ? "Yes" : "No";
        let cooldown = cmd.cooldown ? cmd.cooldown : "No cooldown.";
        let isDisabled = cmd.isDisabled ? "Yes" : "No";

        let helpEmbed = new MessageEmbed()
        .setTitle(`Help for **${cmd.name}**`)
        .addField("Name", `${cmd.name}`, true)
        .addField("Description", `${description}`, true)
        .addField("Aliases", `${aliases}`, true)
        .addField("Owner Only", `${ownerOnly}`, true)
        .addField("NSFW Only", `${nsfwOnly}`, true)
        .addField("Cooldown", `${cooldown}`, true)
        .addField("Disabled", `${isDisabled}`, true)
        .addField("Required Bot Permissions", `${botPerms}`, true)
        .addField("Required User Permissions", `${userPerms}`, true)
        .setColor("GREEN")

        return message.channel.send({ embeds: [helpEmbed] })
      }

    } else if (!args[0]) {

    let helpMenu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("help_menu")
      .setPlaceholder('Help Menu')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "Setting",
          description: "Ganti settingan",
          value: "settings",
          emoji: "🛠"
        },
        {
          label: "Aktifitas",
          description: "Akses fitur aktifitas discord",
          value: "activities",
          emoji: "🎮"
        },
        {
          label: "Fun",
          description: "Fun command semua disini",
          value: "fun",
          emoji: "🎲"
        },
        {
          label: "Gambar",
          description: "semua command gambar ada disini",
          value: "image",
          emoji: "🖼"
        },
        {
          label: "Informasi",
          description: "semua command indormasi ada disini",
          value: "info",
          emoji: "📢"
        },
        {
          label: "Moderasi",
          description: "semua command moderasi ada disini",
          value: "moderation",
          emoji: "🔒"
        },
        {
          label: "Musik",
          description: "Nyetel lagu suka-suka!",
          value: "music",
          emoji: "🎵"
        },
        {
          label: "NSFW",
          description: "Pascol kumpul sini",
          value: "nsfw",
          emoji: "🔞"
        },
        {
          label: "Utilitas",
          description: "semua command ultilitas ada disini",
          value: "utility",
          emoji: "🔧"
        },
        {
          label: "Game",
          description: "mau mabar? kumpul dimari",
          value: "game",
          emoji: "🎮"
        }
      ])
    )

    let editEmbed = new MessageEmbed()
    .setTitle('Menu Bantuan')
    .setDescription('Pilih opsi dari menu di bawah cuk!')
    .setColor("GREEN")

      message.channel.send({ embeds: [editEmbed], components: [helpMenu]}).then(msg=>{
        setTimeout(async function () {
          await msg.delete();
        }, 180000)
      })
    }
  }
};
