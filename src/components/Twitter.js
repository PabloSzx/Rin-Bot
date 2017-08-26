import Twitter from 'twitter';
import getValues from 'object.values';
import _ from 'lodash';

/* eslint-disable camelcase */
export default class Twitt {
  constructor(
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
  ) {
    this.client = new Twitter({
      consumer_key,
      consumer_secret,
      access_token_key,
      access_token_secret,
    });
  }

  follow(users, discordClient) {
    this.client.stream(
      'statuses/filter',
      { follow: getValues(users).join(',') },
      stream => {
        stream.on('data', event => {
          const tweet = event;
          const username = tweet.user.screen_name;
          const id = tweet.id_str;
          const link = `https://twitter.com/${username}/status/${id}`;

          let verify = false;
          _.map(users, value => {
            if (tweet.user.id.toString() === value) {
              verify = true;
            }
          });

          if (verify) {
            discordClient.sendMessageMainChannel(link);
            console.log('mensaje');
          }
        });

        stream.on('error', err => {
          throw err;
        });
      }
    );
  }
}
