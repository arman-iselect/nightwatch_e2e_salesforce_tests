module.exports = {
    tags: ['bat_sp_652_ac1', 'bat_sp_652' , 'sp_652'],

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
            .url(data.energy.bat.salesConsultant.loginTest);
    },
    
    'GIVEN I am viewing the Accounts list view': function(browser) 
    {
        account
            .navigate();
    },
    
    'AND I have selected the "New" Button and directed me to the New Person Account page': function (browser) 
    {
        account
            .click_newAccount();
    },

    'WHEN I enter all the required fields and hit the Save button': function (browser) 
    {
        account
            .click_salutationDropdown()
            .click_salutationMr()
            .verify.elementPresent('@firstName', 'First Name Field is Present?')
            .setValue('@firstName', energy.account_info.first_name )
            .verify.elementPresent('@lastName', 'Last NAme Field is Present?')
            .setValue('@lastName', energy.account_info.last_name)
            .verify.elementPresent('@email', 'Email Field is Present?')
            .setValue('@email', energy.account_info.email)
            .click_contactMethod()
            .click_emailPreferred()
            .click_save()
            .pause(30000);


    },

    'THEN a new person account is created':function (browser)
    {

    },

    'AND I shall be able to view the person account page tab as a default': function(browser)
    {

    },

    'AND I can view that the details that I have entered are correctly populated to the person account': function(browser)
    {

    },

    'OTHERWISE if there are mandatory fields not populated, an error message shall be displayed AND I shall not be able to proceed any further': function(browser)
    {

    }
};