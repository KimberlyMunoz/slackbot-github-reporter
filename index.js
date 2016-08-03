var Botkit = require('botkit');
var controller = Botkit.slackbot();
var SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;

var bot = controller.spawn({
  token: SLACK_BOT_TOKEN
});

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});
