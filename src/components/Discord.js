import DiscordJS from 'discord.js';

export default class Discord {
  constructor(token) {
    this.token = token;
    this.start();
  }

  start() {
    this.client = new DiscordJS.Client();
    this.client
      .login(this.token)
      .then(() => {
        console.log('Connected');
        this.client.guilds.map((value, key) => console.log(`${value}  ${key}`));
      })
      .catch(err => {
        console.error(err);
      });

    this.client.on('guildCreate', () => console.log('new guild'));
  }

  sendMessageMainChannel(message) {
    this.client.guilds.every(value =>
      value.defaultChannel
        .send(message)
        .then(msg => console.log(`Sent message: ${msg.content}`))
        .catch(console.error)
    );
  }
}
