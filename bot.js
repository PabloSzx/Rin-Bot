import { Discord, Twitter } from './src/components';
import { users } from './src/data';

/* eslint-disable camelcase */
let token;
let consumer_key;
let consumer_secret;
let access_token_key;
let access_token_secret;

/* eslint-disable global-require */
try {
  token = require('./src/data/keys.js').token;
  consumer_key = require('./src/data/keys.js').consumer_key;
  consumer_secret = require('./src/data/keys.js').consumer_secret;
  access_token_key = require('./src/data/keys.js').access_token_key;
  access_token_secret = require('./src/data/keys.js').access_token_secret;
} catch (err) {
  token = process.env.token;
  consumer_key = process.env.consumer_key;
  consumer_secret = process.env.consumer_secret;
  access_token_key = process.env.access_token_key;
  access_token_secret = process.env.access_token_secret;
}

const bot = new Discord(token);

const twitter = new Twitter(
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
);
twitter.follow(users, bot);
