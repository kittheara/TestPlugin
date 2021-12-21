var exec = require('cordova/exec');

var plugin_ios = "lastChristmas";


var lastChristmas ={
  show: function(arg,success, fail){
    console.log('Call method show');
    exec(success, fail, plugin_ios ,'show', [arg]);
  }
}



module.exports =lastChristmas;
