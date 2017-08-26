import Discord from './Discord';
import Twitter from './Twitter';

/* eslint-disable camelcase */
let token;
let consumer_key;
let consumer_secret;
let access_token_key;
let access_token_secret;

/* eslint-disable global-require */
try {
  token = require('./keys.js').token;
  consumer_key = require('./keys.js').consumer_key;
  consumer_secret = require('./keys.js').consumer_secret;
  access_token_key = require('./keys.js').access_token_key;
  access_token_secret = require('./keys.js').access_token_secret;
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

const users = {
  pablosz: '75583295',
  rin: '763432741',
  reckful: '492981803',
  polina: '304010264',
  leesul: '718445759100690432',
  rob: '1398904249',
  ryo: '264525188',
  alisa: '876684698633723904',
  jj: '880197946892967937',
};

twitter.follow(users, bot);
