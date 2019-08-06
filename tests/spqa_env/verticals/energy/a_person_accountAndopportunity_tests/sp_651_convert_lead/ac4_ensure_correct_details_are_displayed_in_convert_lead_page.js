var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['spqa_sp_651_ac4', 'spqa_sp_651' , 'sp_651'],

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
    
    'GIVEN I am viewing the Convert Lead page': function(browser) 
    {

    },
    
    'AND have selected an existing person account or to create a new person account ': function (browser) 
    {

    },

    'WHEN I confirm to convert a lead by clicking on the Convert Lead button': function (browser) 
    {

    },
    'THEN upon conversion, I shall be able to view the opportunity page in a new tab by default': function(browser)
    {

    }
};
