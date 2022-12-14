const prefixModel = require("../../database/guildData/leavemessage");

module.exports = {
  name: "leavemessage",
  description: "Atur leave message per server!",
  userPerms: ["ManageChannels"],
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!args[0]) {
      return message.channel.send(`\`Gunakan: .leavemessage <Text|off>\``);
    }
    if (text !== "off") {
      const data = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });
        let newData = new prefixModel({
          ByeMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`Leave Message atur ke \n${newData.ByeMsg}`);
      } else if (!data) {
        let newData = new prefixModel({
          ByeMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`Leave Message atur ke \n${newData.ByeMsg}`);
      }
    } else if (text === "off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`Leave Message udah mode off!`);
      } else if (!data2) {
        return message.channel.send(`Leave Message belum di atur!`);
      }
    }
  },
};
