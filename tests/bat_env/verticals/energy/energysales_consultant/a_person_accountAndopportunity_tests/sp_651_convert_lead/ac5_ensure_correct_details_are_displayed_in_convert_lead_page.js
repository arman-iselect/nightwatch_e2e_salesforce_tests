module.exports = {
    tags: ['bat_sp_651_ac5', 'bat_sp_651' , 'sp_651'],

    'Login Bat Credentials': function() 
    {
        console.log('Go to Salesforce Login Test URL and Enter Bat Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.spqa.username)
            .setValue('@password', data.salesforce.spqa.password)
            .click_loginbtn();
    },

    'Log in as Energy Consultant QA': function(browser) 
    {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.spqa.salesConsultant.loginTest);
    },
    
    'GIVEN I have clicked on the convert lead button on the Lead page': function(browser) 
    {

    },
    
    'WHEN the Convert Lead page is displayed': function (browser) 
    {

    },

    'THEN I shall be able to view the following details as per the attached Lead Conversion page screenshot': function (browser) 
    {
 
    }
};
