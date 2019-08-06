var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['bat_sp_651_ac2', 'bat_sp_651' , 'sp_651'],

    'Login Bat Credentials': function() 
    {
        console.log('Go to Salesforce Login Test URL and Enter Bat Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.spqa.username)
            .setValue('@password', data.salesforce.spqa.password)
            .pause(3000)
            .click_loginbtn()
            .pause(5000);
    },

    'Log in as Energy Consultant QA': function(browser) 
    {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.spqa.salesConsultant.loginTest)
            .pause(3000);
    },
    
    'GIVEN I have selected a lead record and clicked on the "Convert Lead" button': function(browser) 
    {
        
    },

    'AND the Convert Lead page is displayed': function (browser) 
    {

    },
    
    'WHEN I select an existing person account from the displayed list': function (browser) 
    {
       
    },

    'AND select to convert the lead': function(browser) 
    {

    },

    'THEN the lead is converted to new opportunity and linked to the selected person account ': function (browser) 
    {
        
    },

    'OTHERWISE I can select cancel to close the page and the lead is not converted': function(browser)
    {

    }
};
