/* eslint-env node */

"use strict";

const cfenv = require("cfenv");
const appEnv = cfenv.getAppEnv();
const AlexaAppServer = require("alexa-app-server");

AlexaAppServer.start({
    "server_root": __dirname,
    "public_html": "public",
    "app_dir": "apps",
    "app_root": "/alexa/",
    "port": appEnv.port,
    "post": (appServer) => {
        console.log(`Server starting on ${appEnv.url}`);
    }
});
