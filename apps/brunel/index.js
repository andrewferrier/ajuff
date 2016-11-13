var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

var app = new alexa.app('Brunel');

app.launch(function(req, res) {
    res.say("Hello from Brunel");
});

app.intent('GetTime', {}, function(req, res) {
    res.say('The time is unpredictable, ephemeral, and ultimately irrelevant.');
});

module.exports = app;
