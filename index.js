const Discord = require('discord.js');
const settings = require('./settings/config');
const { question, issue } = require('./js/messages');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag}`);
});

client.on('message', (message) => {
  const messages = [
    { 
      request: question, 
      response: `${message.author} have a question of JavaScript!`,
      rules: message.content === question
    },
    {
      request: issue,
      response: `${message.author} has open a issue called "${message.content.split(issue)}"`,
      rules: message.content.includes(issue)
    }
  ];
  messages.forEach(command => {
    if(command.rules) {
      message.channel.send(command.response);
    }
  });
});


client.login(settings.token);