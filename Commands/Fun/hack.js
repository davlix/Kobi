const ms = module.require("ms");

module.exports = {
  name: "hack",
  description: "Hack seseorang",
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        "kalem boss!! siapa yang akan kita hack..??"
      );
    }
    const tohack = message.mentions.members.first();
    let msg = await message.channel.send(`Hacking ${tohack.displayName}....`);

    let time = "1s";
    setTimeout(function () {
      msg.edit(`Finding ${tohack.displayName}'s Email and Password.....`);
    }, ms(time));

    let time1 = "6s";
    setTimeout(function () {
      msg.edit(`E-Mail: ${tohack.displayName}@gmail.com \nPassword: ********`);
    }, ms(time1));

    let time2 = "9s";
    setTimeout(function () {
      msg.edit("Finding Twitter Accounts.....");
    }, ms(time2));

    let time3 = "15s";
    setTimeout(function () {
      msg.edit("Finding Instagram Account.....");
    }, ms(time3));

    let time4 = "21s";
    setTimeout(function () {
      msg.edit("Hacking Instagram Account......");
    }, ms(time4));

    let time5 = "28s";
    setTimeout(function () {
      msg.edit("Cracking Instagram Password!!");
    }, ms(time5));

    let time6 = "31s";
    setTimeout(function () {
      msg.edit("Collecting Info.....");
    }, ms(time6));

    let time7 = "38s";
    setTimeout(function () {
      msg.edit("Selling data to FBI....");
    }, ms(time7));

    let time8 = "41s";
    setTimeout(function () {
      msg.edit(`Finished Hacking ${tohack.displayName}`);
    }, ms(time8));
  },
};
