module.exports = {
    tags: ['bat_sp_652_ac1', 'bat_sp_652' , 'sp_652','bat_energytelco_sp_652_ac3', 'bat_energytelco_sp_652', 'energytelco_sp_652'],

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
            .url(data.energy.bat.energytelcosalesConsultant.loginTest);
    },
    
    'GIVEN I have navigated to view the person account page': function(browser) 
    {
        search
            .waitForElementVisible('@searchField', 10000, function (result)
            {
                if (result.value)
                {
                    search
                        .setValue('@searchField', energy.energytelco.account_info.first_name)
                    browser
                        .keys(browser.Keys.ENTER)
                    search
                        .waitForElementVisible('@telcohyperlinkText1', 20000, function (result)
                        {
                            if (result.value)
                            {
                                search
                                    .click_telcohyperlinkText1()
                                    .pause(3000);
                            }
                                else
                                {
                                    console.log('Refreshing the Page...')
                                    browser
                                        .refresh()
                                    search
                                        .waitForElementVisible('@telcohyperlinkText1', 30000)
                                        .click_telcohyperlinkText1()
                                        .pause(3000);
                                }
                        })
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        search
                            .waitForElementVisible('@searchField', 15000)
                            .setValue('@searchField', energy.energytelco.account_info.first_name)
                        browser
                            .keys(browser.Keys.ENTER)
                        search
                            .waitForElementVisible('@telcohyperlinkText1', 20000, function(result)
                            {
                                if (result.value)
                                {
                                    search
                                        .click_telcohyperlinkText1()
                                        .pause(3000);
                                }
                                    else
                                    {
                                        console.log('Refreshing the page...')
                                        browser
                                            .refresh()
                                        search
                                            .waitForElementVisible('@telcohyperlinkText1', 30000)
                                            .click_telcohyperlinkText1()
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
                        .setValue('@detailsEmail', energy.energytelco.account_info.email )
                        .pause(1000)
                    browser
                        .keys(browser.Keys.PAGEUP)
                        .pause(1000)
                    account
                        .verify.elementPresent('@detailsfirstName', 'First Name Details Field is Present ?')
                        .clearValue('@detailsfirstName')
                        .setValue('@detailsfirstName', energy.energytelco.account_info.first_name )
                        .verify.elementPresent('@detailslastName', 'Last Name Details Field is Present ?')
                        .clearValue('@detailslastName')
                        .setValue('@detailslastName', energy.energytelco.account_info.last_name )
                        .pause(2000)
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac3a_update_person_account_information.png')
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
                           .setValue('@detailsEmail', energy.energytelco.account_info.email )
                           .pause(1000)
                       browser
                           .keys(browser.Keys.PAGEUP)
                           .pause(1000)
                       account
                           .verify.elementPresent('@detailsfirstName', 'First Name Details Field is Present ?')
                           .clearValue('@detailsfirstName')
                           .setValue('@detailsfirstName', energy.energytelco.account_info.first_name )
                           .verify.elementPresent('@detailslastName', 'Last Name Details Field is Present ?')
                           .clearValue('@detailslastName')
                           .setValue('@detailslastName', energy.energytelco.account_info.last_name )
                           .pause(2000)
                       browser
                           .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac3a_update_person_account_information.png')
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
                        .verify.containsText('@detailsInfo', energy.energytelco.account_info.account_name , 'The Details Contains Correct Account Name ?')
                        .verify.containsText('@detailsinfoEmail', energy.energytelco.account_info.email , ' The Details Contains Correct Email ?')
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac3b_update_person_account_information.png')
                }
                    else
                    {
                        console.log('Refreshing the browser...')
                        browser
                            .refresh
                        account
                            .waitForElementVisible('@detailsTab', 20000)
                            .verify.containsText('@detailsInfo', energy.energytelco.account_info.account_name , 'The Details Contains Correct Account Name ?')
                            .verify.containsText('@detailsinfoEmail', energy.energytelco.account_info.email , ' The Details Contains Correct Email ?')
                        browser
                            .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac3b_update_person_account_information.png')
                    }

            })

    },

    'OTHERWISE an appropriate and descriptive error message shall be displayed':function (browser)
    {
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
                    .setValue('@detailsEmail', energy.energytelco.account_info.email )
                    .pause(1000)
                browser
                    .keys(browser.Keys.PAGEUP)
                    .pause(1000)
                account
                    .verify.elementPresent('@detailsfirstName', 'First Name Details Field is Present ?')
                    .clearValue('@detailsfirstName')
                    .setValue('@detailsfirstName', energy.energytelco.account_info.first_name )
                    .verify.elementPresent('@detailslastName', 'Last Name Details Field is Present ?')
                    .clearValue('@detailslastName')
                    //.setValue('@detailslastName', energy.energytelco.account_info.last_name )
                    .click_detailsSave()
                    .pause(5000);
                browser
                    .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac3c_update_person_account_information.png')
                account
                    .click_telcocloseTab()
                
            }
                else
                {
                    console.log('Refreshing the page...')
                    browser
                        .refresh()
                       account
                       .click_detailsTab()
                       .click_detailspreferredContact()
                       .click_detailspreferredEmail()
                       .clearValue('@detailsEmail')
                       .setValue('@detailsEmail', energy.energytelco.account_info.email )
                       .pause(1000)
                   browser
                       .keys(browser.Keys.PAGEUP)
                       .pause(1000)
                   account
                       .verify.elementPresent('@detailsfirstName', 'First Name Details Field is Present ?')
                       .clearValue('@detailsfirstName')
                       .setValue('@detailsfirstName', energy.energytelco.account_info.first_name )
                       .verify.elementPresent('@detailslastName', 'Last Name Details Field is Present ?')
                       .clearValue('@detailslastName')
                       //.setValue('@detailslastName', energy.energytelco.account_info.last_name )
                       .click_detailsSave()
                        .pause(5000);
                    browser
                       .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac3c_update_person_account_information.png')
                    account
                       .click_telcocloseTab()
                }
        })
    }
};