var cordova = require('cordova'),
    exec = require('cordova/exec');

var iRatePlugin = function() {
        this.options = {};
};

iRatePlugin.prototype = {
    /*
        Add your plugin methods here
    */
    launch: function( options, success, error ) {
        var defaults = {
            debug   :   "NO",
            promptAtLaunch  :   "NO",
            usesUntilPrompt :   10,
            eventsUntilPrompt   :   10,
            daysUntilPrompt :   "3.0f",
            remindPeriod    :   "2.0f",
            appStoreID  :   731897674
        };
        
        if(options){
            for (var key in defaults) {
                defaults[key]=options[key];
            }
        }
        cordova.exec( success, error, "iRatePlugin", "launch", [options] );
    }
};

var iRatePluginInstance = new iRatePlugin();

module.exports = iRatePluginInstance;
