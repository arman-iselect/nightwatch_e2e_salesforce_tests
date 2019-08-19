module.exports = {
    tags: ['bat_sp_652_ac1', 'bat_sp_652' , 'sp_652', 'bat_energysales_sp_652_ac3'],

    'Login Bat Credentials': function(browser) 
    {
        console.log('Go to Salesforce Login Test URL and Enter Bat Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.bat.username)
            .setValue('@password', data.salesforce.bat.password)
            .click_loginbtn();
    },

    'Log in as Energy Consultant QA': function(browser) 
    {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.bat.energysalesConsultant.loginTest);
    },
    
    'GIVEN I have navigated to view the person account page': function(browser) 
    {
        browser
            .url('https://iselect--bat.lightning.force.com/lightning/page/home');
    },
    
    'WHEN I change details on the Details tab and save': function (browser) 
    {
        
    },

    'THEN I shall be able to ensure that any required fields are populated and/or updated correctly': function (browser) 
    {
       

    },

    'OTHERWISE an appropriate and descriptive error message shall be displayed':function (browser)
    {
        
    }
};