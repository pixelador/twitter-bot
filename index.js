var env = require('node-env-file');
var Twitter = require('twitter');

env(__dirname + '/.env');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = client.stream('statuses/filter', {track: 'Game of Thrones'});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});