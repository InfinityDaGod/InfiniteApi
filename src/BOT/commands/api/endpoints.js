const Discord = require('discord.js')
module.exports = {
  name: 'endpoints',
  category: 'api',
  run: async (client, message, args) => {
    const enpoints = new Discord.MessageEmbed()
    .setTitle('Enpoints')
    .setDescription(`GET/ ${client.endpoints.filter(x => !x.path).map(x => x.name).join('\nGET/ ')}`)
    .setColor('RANDOM')
   message.channel.send(enpoints)
  }
}