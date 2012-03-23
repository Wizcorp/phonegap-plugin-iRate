var iRate = {
    
    
    launch : function (options) {
        
        return PhoneGap.exec(null, null, "iRatePlugin", "launch", [options]);
    }
    
};