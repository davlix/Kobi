const antiwordsData = require('../../database/guildData/antiwords')
  module.exports = async (message) => {
    const antiwords = await antiwordsData.findOne({
      GuildID: message.guild.id,
    })
    if (antiwords) {
      if (message.content.match("kontol") || message.content.match("memek") || message.content.match("banci") || message.content.match("fuck") || message.content.match("asshole") || message.content.match("dick") || message.content.match("idiot") || message.content.match("shit") || message.content.match("fuck")) {
        message.delete();
        message.reply("**Gada kata buruk yang di perbolehkan cok. toxic!!**").then(msg => {
          let time = '4s'
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        })
      } else {
        return;
      }
    } else if (!antiwords) {
      return;
    }
  }
