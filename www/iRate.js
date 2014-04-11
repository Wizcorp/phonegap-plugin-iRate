var exec = require('cordova/exec');

var iRate = function () {
        this.options = {};
};

iRate.prototype = {
    
            launch: function(options, success, error) {
            
                    var defaults = {
                                debug: true,
                                promptAtLaunch: false,
                                usesUntilPrompt: 10,
                                eventsUntilPrompt: 10,
                                daysUntilPrompt: 3,
                                remindPeriod: 2,
                                cancelButtonLabel: "No, Thanks",
                                remindButtonLabel: "Remind Me Later",
                                rateButtonLabel: "Rate It Now"
                    };
    
                    if (options) {
                            for (var key in defaults) {
                                if (options[key] != undefined) {
                                    defaults[key] = options[key];
                                }
                            }
                    }

                    cordova.exec(success, error, "iRate", "launch", [defaults]);
            }
};

var iRateInstance = new iRate();

module.exports = iRateInstance;
