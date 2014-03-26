


# PLUGIN: 

phonegap-plugin-iRate



# DESCRIPTION :

PhoneGap plugin for customer/client app rating. [iOS ONLY]


# Basic USAGE:
```javascript
{
    var args = { debug : "YES",
                 promptAtLaunch : "NO",
                 usesUntilPrompt : 5,
                 eventsUntilPrompt : 10,
                 daysUntilPrompt : "3.0f",
                 remindPeriod : "2.0f",
                 appStoreID : your_app_id
                 };

    iRate.launch(args);
}
```javascript

# Advance Usage:
```javascript
{

    var args = { debug   :   "YES",
                 promptAtLaunch  :   "NO",
                 usesUntilPrompt :   10,
                 eventsUntilPrompt   :   10,
                 daysUntilPrompt :   "3.0f",
                 remindPeriod    :   "2.0f",
                 appStoreID  :   11212321,
                 messageTitle : null, //pass null to use Application Name
                 message : null,    //pass null to use default message
                 cancelButtonLabel : "No, Thanks",
                 remindButtonLabel : "Remind Me Later",
                 rateButtonLabel : "Rate It Now"
                 };

    iRate.launch(args);

}
```javascript
# DOCS & SUPPORT :

PhoneGap v1.1
http://dev.wizcorp.jp/wiki/