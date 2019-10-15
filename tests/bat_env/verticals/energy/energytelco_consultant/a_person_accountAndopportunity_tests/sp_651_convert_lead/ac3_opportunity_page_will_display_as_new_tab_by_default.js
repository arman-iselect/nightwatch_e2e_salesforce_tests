module.exports = {
    tags: ['bat_sp_651_ac3', 'bat_sp_651' , 'sp_651'],

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
            .url(data.energy.bat.salesConsultant.loginTest);
    },
    
    'GIVEN I have selected a lead record and clicked on the "Convert Lead" button': function(browser) 
    {

    },

    'AND the Convert Lead page is displayed': function (browser) 
    {

    },
    
    'WHEN I select to create a new person account upon conversion of the lead': function (browser) 
    {
    
    },

    'AND select to convert the lead': function(browser) 
    {

    },

    'THEN a new person account is created': function(browser)
    {

    },

    'AND the lead is converted to new opportunity': function (browser) 
    {
        
    },

    'AND the opportunity is linked to the newly created person account': function(browser)
    {
        
    },

    'OTHERWISE I can select to cancel to close the page and the lead is not converted': function(browser)
    {
        
    }
};
