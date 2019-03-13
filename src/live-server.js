var liveServer = require("live-server");

var params = {
    port: 8181, // Set the server port. Defaults to 8080.
    ignore: '**/node_modules/**,**/.git/**,**/node_modules,**/.git,/node_modules,/.git', // comma-separated string for paths to ignore
};
liveServer.start(params);
