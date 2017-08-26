import Discord from './Discord';
import Twitter from './Twitter';

/* eslint-disable camelcase */
const token = process.env.token;
const consumer_key = process.env.consumer_key;
const consumer_secret = process.env.consumer_secret;
const access_token_key = process.env.access_token_key;
const access_token_secret = process.env.access_token_secret;

const bot = new Discord(token);
bot.start();

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
