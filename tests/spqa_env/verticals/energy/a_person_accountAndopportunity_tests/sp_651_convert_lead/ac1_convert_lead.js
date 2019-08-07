module.exports = {
    tags: ['spqa_sp_651_ac1', 'spqa_sp_651' , 'sp_651'],

    'Login SPQA Credentials': function() 
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
    
    'GIVEN I have the potential lead in the Lead Page': function(browser) 
    {
        
    },
    
    'WHEN I click on the Convert Lead button': function (browser) 
    {
        
    },

    'THEN I shall be able to view the Convert Lead page in a new tab': function (browser) 
    {
       
    }
};
