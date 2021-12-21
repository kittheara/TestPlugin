var exec = require('cordova/exec');
var plugin_helloworld = "HelloWorld"



var HelloWorld={
show: function (arg, success, fail) {
  exec (success, fail,plugin_helloworld,"show", [arg]);
}
}

module.exports = HelloWorld;
