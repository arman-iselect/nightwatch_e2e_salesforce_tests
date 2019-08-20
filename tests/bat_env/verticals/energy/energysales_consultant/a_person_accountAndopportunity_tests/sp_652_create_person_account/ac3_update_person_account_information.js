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
        search
            .waitForElementVisible('@searchField', 10000, function (result)
            {
                if (result.value)
                {
                    search
                        .setValue('@searchField', energy.account_info.first_name)
                    browser
                        .keys(browser.Keys.ENTER)
                        .pause(3000);
                    search
                        .waitForElementVisible('@hyperlinkText1', 20000, function (result)
                        {
                            if (result.value)
                            {
                                search
                                    .click_hyperlinkText1()
                                    .pause(3000);
                            }
                                else
                                {
                                    console.log('Refreshing the Page...')
                                    browser
                                        .refresh()
                                    search
                                        .waitForElementVisible('@hyperlinkText', 30000)
                                        .click_hyperlinkText1()
                                        .pause(3000);
                                }
                        })
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        search
                            .waitForElementVisible('@searchField', 15000)
                            .setValue('@searchField', energy.account_info.first_name)
                        browser
                            .keys(browser.Keys.ENTER)
                        search
                            .waitForElementVisible('@hyperlinkText1', 20000, function(result)
                            {
                                if (result.value)
                                {
                                    search
                                        .click_hyperlinkText1()
                                        .pause(3000);
                                }
                                    else
                                    {
                                        console.log('Refreshing the page...')
                                        browser
                                            .refresh()
                                        search
                                            .waitForElementVisible('@hyperlinkText', 30000)
                                            .click_hyperlinkText1()
                                            .pause(3000);
                                    }
                            })
                    }
            })
    },
    
    'WHEN I change details on the Details tab and save': function (browser) 
    {
       // browser
          //  .keys(browser.Keys.PAGEDOWN)
        account
            .waitForElementVisible('@detailsTab', 20000, function (result)
            {
                if (result.value)
                {
                    
                    account
                        .click_detailsTab()
                        .click_detailspreferredContact()
                        .pause(5000)
                        .waitForElementVisible('@detailspreferredEmail', 5000)
                        .click_detailspreferredEmail()
                        .verify.elementPresent('@detailsEmail', 'Email Field is Present ?')
                        .clearValue('@detailsEmail')
                        .setValue('@detailsEmail', energy.account_info.email )
                        .pause(1000)
                    browser
                        .keys(browser.Keys.PAGEUP)
                        .pause(1000)
                    account
                        .verify.elementPresent('@detailsfirstName', 'First Name Details Field is Present ?')
                        .clearValue('@detailsfirstName')
                        .setValue('@detailsfirstName', energy.account_info.first_name )
                        .verify.elementPresent('@detailslastName', 'Last Name Details Field is Present ?')
                        .clearValue('@detailslastName')
                        .setValue('@detailslastName', energy.account_info.last_name )
                        .pause(2000)
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac3a_update_person_account_information.png')
                    account
                        .click_detailsSave()
                        .pause(5000);
                }
                    else
                    {
                        console.log('Refreshing the page...')
                        browser
                            .refresh()
                           // .keys(browser.Keys.PAGEDOWN)
                           account
                           .click_detailsTab()
                           .click_detailspreferredContact()
                           .click_detailspreferredEmail()
                           .clearValue('@detailsEmail')
                           .setValue('@detailsEmail', energy.account_info.email )
                           .pause(1000)
                       browser
                           .keys(browser.Keys.PAGEUP)
                           .pause(1000)
                       account
                           .verify.elementPresent('@detailsfirstName', 'First Name Details Field is Present ?')
                           .clearValue('@detailsfirstName')
                           .setValue('@detailsfirstName', energy.account_info.first_name )
                           .verify.elementPresent('@detailslastName', 'Last Name Details Field is Present ?')
                           .clearValue('@detailslastName')
                           .setValue('@detailslastName', energy.account_info.last_name )
                           .pause(2000)
                       browser
                           .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac3a_update_person_account_information.png')
                       account
                           .click_detailsSave()
                           .pause(5000);
                    }
            })
    },

    'THEN I shall be able to ensure that any required fields are populated and/or updated correctly': function (browser) 
    {
        account
            .waitForElementVisible('@detailsTab', 15000, function(result)
            {
                if (result.value)
                {
                    account
                        .verify.containsText('@detailsInfo', energy.account_info.account_name , 'The Details Contains Correct Account Name ?')
                        //.verify.containsText('@detailsinfoEmail', energy.account_info.email , ' The Details Contains Correct Email ?')
                        .verify.containsText('@detailsInfo', energy.account_info.email_label , 'The Details Contains Correct Preferred Contact Method ?')
                    browser
                        .getText('div[class="slds-col slds-grid slds-has-flexi-truncate  full forcePageBlockItem forcePageBlockItemView"]', function(result1)
                        {
                            for (var i = 0; i < result.value.length; i++ )
                        account
                            .verify.containsText(result1.value, energy.account_info.email , ' The Details Contains Correct Email ?')
                        });
                }
                    else
                    {
                        console.log('Refreshing the browser...')
                        browser
                            .refresh
                        account
                            .waitForElementVisible('@detailsTab', 20000)
                            .verify.containsText('@detailsInfo', energy.account_info.account_name , 'The Details Contains Correct Account Name ?')
                            //.verify.containsText('@detailsinfoEmail', energy.account_info.email , ' The Details Contains Correct Email ?')
                            .verify.containsText('@detailsInfo', energy.account_info.emailLabel , 'The Details Contains Correct Preferred Contact Method ?')
                        browser
                            .getText('div[class="slds-col slds-grid slds-has-flexi-truncate  full forcePageBlockItem forcePageBlockItemView"]', function(result1)
                            {
                                for (var i = 0; i < result.value.length; i++ )
                            account
                                .verify.containsText(result1.value, energy.account_info.email , ' The Details Contains Correct Email ?')
                            });
                    }

            })

    },

    'OTHERWISE an appropriate and descriptive error message shall be displayed':function (browser)
    {
        
    }
};