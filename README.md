


# PLUGIN: 

phonegap-plugin-iRate



# DESCRIPTION :

PhoneGap plugin for customer/client app rating. [iOS ONLY]


# USAGE :

### BASIC
```javascript
{
    var args = { 
                 debug : "YES",         //set to NO for production app
                 promptAtLaunch : "NO",
                 usesUntilPrompt : 5,
                 eventsUntilPrompt : 10,
                 daysUntilPrompt : "3.0f",
                 remindPeriod : "2.0f",
                 appStoreID : your_app_id
                };

    iRate.launch(args);
}
```

### Advance

```javascript
{

    var args = { 
                 debug   :   "YES",
                 promptAtLaunch  :   "NO",
                 usesUntilPrompt :   10,
                 eventsUntilPrompt   :   10,
                 daysUntilPrompt :   "3.0f",
                 remindPeriod    :   "2.0f",
                 appStoreID  :   11212321,
                 messageTitle : "Enjoy Rate it", //pass null to use Application Name
                 message : "Your message goes here",    //pass null to use default message
                 cancelButtonLabel : "No, Thanks",
                 remindButtonLabel : "Remind Me Later",
                 rateButtonLabel : "Rate It Now"
                };

    iRate.launch(args);

}
```

# DOCS & SUPPORT :

PhoneGap v1.1
http://dev.wizcorp.jp/wiki/