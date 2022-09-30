const Discord = module.require("discord.js");

module.exports = {
  name: "nickname",
  description: "Ganti nickname pengguna lain",
  userPerms: ["MANAGE_NICKNAMES"],
  botPerms: ["MANAGE_NICKNAMES"],
  run: async (client, message, args) => {
    let mentionMember = message.mentions.members.first();
    let newNickname = args.slice(1).join(" ");
    if (!mentionMember) {
      return message.reply("Mention user yang mau kau ganti nickname");
    }
    if (!newNickname) {
      return message.reply("Masukkan nickname baru untuk user yang kamu mentioned");
    }
    try {
      mentionMember.setNickname(newNickname);
    } catch (error) {
      message.reply(
        "Tidak dapat mengubah nama panggilan pengguna ini, apakah dia memiliki peran yang lebih tinggi? Apakah pembuat server? Apakah saya mendapat izin untuk mengubah nama panggilannya?"
      );
    }
    message.channel.send(
      `Nickname di ganti dari ${mentionMember} ke **${newNickname}**`
    );
  },
};
