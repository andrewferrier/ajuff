/*eslint-env node*/

var cfenv = require('cfenv');

var appEnv = cfenv.getAppEnv();

var AlexaAppServer = require('alexa-app-server');
AlexaAppServer.start({
    server_root: __dirname,
    public_html: "public",
    app_dir: "apps",
    app_root: "/alexa/",
    port: appEnv.port,
    post: (appServer) => {
        console.log("server starting on " + appEnv.url);
    }
});
