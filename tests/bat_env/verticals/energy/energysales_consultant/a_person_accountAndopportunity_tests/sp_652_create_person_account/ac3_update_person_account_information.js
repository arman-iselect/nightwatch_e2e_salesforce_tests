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
        account
            .waitForElementVisible('@detailsTab', 20000, function (result)
            {
                if (result.value)
                {
                    account
                        .click_detailsTab()
                        .pause(15000);
                }
                    else
                    {
                        console.log('Refreshing the page...')
                        browser
                            .refresh()
                        account
                            .waitForElementVisible('@detailsTab', 20000)
                            .click_detailsTab()
                            .pause(15000);
                    }
            })
    },

    'THEN I shall be able to ensure that any required fields are populated and/or updated correctly': function (browser) 
    {
       

    },

    'OTHERWISE an appropriate and descriptive error message shall be displayed':function (browser)
    {
        
    }
};