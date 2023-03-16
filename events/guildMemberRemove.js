module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
      const channelId = ''; // Deine Channel Id
      const channel = member.guild.channels.cache.get(channelId);
      if (!channel) return;
      channel.send(`Auf Wiedersehen, ${member.user.tag}! Wir werden dich vermissen.`);
    },
  };  