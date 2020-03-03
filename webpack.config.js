var path = require('path');

var DIST_DIR = path.resolve(__dirname, "dist");
var SCR_DIR = path.resolve(__dirname, "src");


var config = {
    entry: SCR_DIR + "/app/index.js" 
};

module.exports = config;
