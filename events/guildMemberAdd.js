module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
      const channelId = ''; // Deine Channel Id
      const channel = member.guild.channels.cache.get(channelId);
      if (!channel) return;
      channel.send(`Willkommen auf dem Server, ${member}!`);
    },
  };  