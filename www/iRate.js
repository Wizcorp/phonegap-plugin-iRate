cordova.define("me.rahul.plugins.iRate.iRate", function(require, exports, module) { var cordova = require('cordova'),
    exec = require('cordova/exec');

var iRate = function() {
        this.options = {};
};

iRate.prototype = {
    
            launch: function( options, success, error ) {
            
                    var defaults = {
                                debug   :   "YES",
                                promptAtLaunch  :   "NO",
                                usesUntilPrompt :   10,
                                eventsUntilPrompt   :   10,
                                daysUntilPrompt :   "3.0f",
                                remindPeriod    :   "2.0f",
                                appStoreID  :   11212321,
                                messageTitle : null,
                                message : null,
                                cancelButtonLabel : "No, Thanks",
                                remindButtonLabel : "Remind Me Later",
                                rateButtonLabel : "Rate It Now"
                    };
    
                    if(options){
                            for (var key in defaults) {
                                if(options[key] != undefined) {
                                    defaults[key]=options[key];
                                }
                            }
                    }
               
                    cordova.exec(success, error, "iRate", "launch", [defaults] );
}

};

var iRateInstance = new iRate();

module.exports = iRateInstance;

});
