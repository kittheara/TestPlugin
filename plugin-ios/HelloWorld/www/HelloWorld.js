var exec = require('cordova/exec');
var PLUGIN_NAME = "HelloWorld";

var HelloWorld={
show: function (arg, success, fail) {
  exec (success, fail,PLUGIN_NAME,"show", [arg]);
}
}

module.exports = HelloWorld;
