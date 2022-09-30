const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'mute',
    description: 'Mutes yang bikin ganggu.',
    usage: 'Mute @user [time] [alasan]',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, Discord) => {

        const member = message.mentions.members.first();
        let time = args[1];
        const reason = args.slice(2).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        if (!member) return message.reply('Mention user!');
        if (!time) return message.reply('sampai waktu kapan!');
        if (!reason) return message.reply('alasan mu kapan');

        if (member.id === message.author.id) return message.reply('Diri sendiri di mute, belajar bisu?!')
        if (member.id === client.id) return message.reply('Kau gabisa mu gw lol!')

        if (!role) {
            try {
                message.channel.send('Ga ada muted role.. Buat satu role dulu.!')
                let muterole = await message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: [],
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send(
                    new MessageEmbed()
                    .setDescription('Muted role suksed di buat')
                    .setColor("GREEN")
                )
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (member.roles.cache.has(role2)) return message.reply('Pengguna udah di bisukan! ')

        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply('kamu bisa mute mereka')


        await member.roles.add(role2)
        message.channel.send(`${member.user.username} Di bisukan ${ms(ms(time))}, Alasan: ${reason}`)

        setTimeout(() => {
            member.roles.remove(role2)
        }, ms(time))

    }



}
