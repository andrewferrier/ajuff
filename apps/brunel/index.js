/* eslint-env node */

"use strict";

const alexa = require("alexa-app");

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

const app = new alexa.app("Brunel");

app.launch((req, res) => {
    res.say("Brunel app launched successfully.");
});

app.intent("GetTime", {}, (req, res) => {
    res.say("The time is unpredictable, ephemeral, and ultimately irrelevant.");
});

module.exports = app;
