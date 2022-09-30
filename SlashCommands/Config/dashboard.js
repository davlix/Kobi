const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: "dashboard",
    description: "Lihat dasbor untuk kategori yang diperlukan.",
    options: [
        {
            name: "admin",
            description: "Tunjukkan admin menu",
            type: 'SUB_COMMAND',
        },
        {
            name: "welcomer",
            description: "Tunjukkan welcomer menu",
            type: 'SUB_COMMAND',
        },
        {
            name: "logging",
            description: "Tunjukkan logging menu",
            type: 'SUB_COMMAND',
        }
    ],
    run: async(client, interaction, args)=>{
        
        if (interaction.options.getSubcommand() === "admin") {
            if (!client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id).permissions.has("ADMINISTRATOR")) {
                return interaction.reply("Missing Permissions")
            }
            const adminMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("adminMenu")
                .setPlaceholder("Admin Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Antilink",
                        description: "Hidup atau Matikan Antilink Sistem",
                        value: "antilink",
                    },
                    {
                        label: "AutoRole",
                        description: "Hidup atau Matikan AutoRole Sistem",
                        value: "autorole",
                    },
                    {
                        label: "AutoMod",
                        description: "Hidup atau Matikan AutoMod Sistem",
                        value: "automod",
                    },
                    {
                        label: "Prefix",
                        description: "Ganti prefix Kobi !",
                        value: "prefix"
                    },
                    {
                        label: "Rep System",
                        description: "Hidup atau MatikanRep Sistem",
                        value: "rep",
                    }
                ])
            )

            return interaction.reply({ content: "Pesan ini akan diedit, setiap kali Anda mengubah pengaturan!\n", components: [adminMenu]})

        } else if (interaction.options.getSubcommand() === "welcomer") {
            if (!client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id).permissions.has("MANAGE_GUILD")) {
                return interaction.reply("Missing Permissions")
            }
            const welcomerMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("welcomerMenu")
                .setPlaceholder("Welcomer Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Welcome Channel",
                        description: "Atur welcome channel Untuk the server!",
                        value: "welcome_channel",
                    },
                    {
                        label: "Leave Channel",
                        description: "Atur leave channel Untuk the server!",
                        value: "leave_channel",
                    },
                    {
                        label: "Welcome Message",
                        description: "Atur welcome message Untuk the server!",
                        value: "welcome_message",
                    },
                    {
                        label: "Leave Message",
                        description: "Atur leave message Untuk the server!",
                        value: "leave_message",
                    },
                    {
                        label: "Variable Untuk Welcomer",
                        description: "Shows all the available variables Untuk use in custom messages",
                        value: "variables",
                    }
                ])
            )

            return interaction.reply({ content: "Pesan ini akan diedit, setiap kali Anda mengubah pengaturan!\n" ,components: [welcomerMenu]})

        } else if (interaction.options.getSubcommand() === "logging") {
            if (!client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id).permissions.has("MANAGE_GUILD")) {
                return interaction.reply("Missing Permissions")
            }
            const loggingMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("loggingMenu")
                .setPlaceholder("Logging Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Channel Updates",
                        description: "Atur channel Untuk logging channel update",
                        value: "channel_logs",
                    },
                    {
                        label: "Member Updates",
                        description: "Atur channel Untuk logging member update",
                        value: "member_updates",
                    },
                    {
                        label: "Message Logs",
                        description: "Atur channel Untuk message logs",
                        value: "message_logs",
                    },
                    {
                        label: "Role Updates",
                        description: "Atur channel Untuk logging role update",
                        value: "role_updates",
                    },
                    {
                        label: "Server Updates",
                        description: "Atur channel Untuk logging server update",
                        value: "server_updates",
                    },
                    {
                        label: "Voice State Updates",
                        description: "Atur channel Untuk logging voice state update",
                        value: "voice_state_updates",
                    }
                ])
            )

            return interaction.reply({ content: "Pesan ini akan diedit, setiap kali Anda mengubah pengaturan!\n" ,components: [loggingMenu]})
        }
    }
}