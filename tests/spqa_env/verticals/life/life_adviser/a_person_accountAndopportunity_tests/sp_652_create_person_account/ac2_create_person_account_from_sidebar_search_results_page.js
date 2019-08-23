module.exports = {
    tags: ['spqa_sp_652_ac2', 'spqa_sp_652', 'sp_652', 'spqa_lifeadviser_sp652_ac2', 'spqa_lifeadviser_sp_652', 'lifeadviser_sp652'],

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
            .url(data.energy.spqa.lifeAdviser.loginTest)
            .url('https://iselect--bat.lightning.force.com/lightning/page/home');
    },
    
    'GIVEN I am viewing the Sidebar search results from': function(browser) 
    {
        browser
            .waitForElementPresent('.iframe-parent > iframe:nth-child(1)', 30000, function(result)
            {
                if (result.value)
                {
                    browser
                        .pause(3000)
                        .frame(0)
                    account
                        .setValue('@inputfirstName', energy.account_info.first_name)
                        .setValue('@inputEmail', energy.account_info.email)
                    browser
                        .keys(browser.Keys.ENTER)
                }
                        else
                        {
                        console.log('Refreshing the browser')
                        browser
                            .refresh()
                            .waitForElementVisible('.iframe-parent > iframe:nth-child(1)', 30000)
                            .pause(3000)
                            .frame(0)
                        account
                            .setValue('@inputfirstName', energy.account_info.first_name)
                            .setValue('@inputEmail', energy.account_info.email)
                        browser
                            .keys(browser.Keys.ENTER)
                }            
            })
    },
    
    'AND I have selected to create a new person account via the "Create New Contact"': function (browser) 
    {
        account
            .waitForElementPresent('@sidebarResults', 15000, function(result)
                {
                    if (result.value)
                    {
                        browser
                            .useXpath().click('/html/body/form/div[2]/div/div[2]/div/table/tbody/tr[10]/td[1]/a[1]/i/b')
                            .pause(3000)
                        browser
                            .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac2b_create_person_sidebar_result_page.png')
                    }
                        else
                            {
                                console.log('Refreshing the page')
                                browser
                                    .refresh()
                                account
                                    .waitForElementPresent('@sidebarResults', 15000)
                                browser
                                    .useXpath().click('/html/body/form/div[2]/div/div[2]/div/table/tbody/tr[10]/td[1]/a[1]/i/b') 
                                    .pause(3000)
                                browser
                                    .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac2b_create_person_sidebar_result_page.png')
                            }
                })
    },

    'WHEN I have entered at least the Last Name (optionally First Name, Phone Number, and Email Address) and hit the Save button': function (browser) 
    {
       browser
            .useXpath().waitForElementPresent('/html/body/form/div[1]/div[1]/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[2]/input', 15000, function(result)
            {
                if (result.value)
                {
                    browser
                        .useXpath().setValue('/html/body/form/div[1]/div[1]/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[2]/input', energy.account_info.last_name)
                    browser
                        .useXpath().click('/html/body/form/div[2]/div/div[2]/div/table/tbody/tr[10]/td[1]/a[1]/i/b')
                }
                    else
                    {
                        console.log('Refreshing the page')
                        browser
                            .refresh()
                        
                        browser
                            .useXpath().setValue('@/html/body/form/div[1]/div[1]/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[2]/input', energy.account_info.last_name)
                        browser
                            .useXpath().click('/html/body/form/div[2]/div/div[2]/div/table/tbody/tr[10]/td[1]/a[1]/i/b')
                    }
            })

    },

    'THEN a new person account is created':function (browser)
    {
        account
            .waitForElementVisible('@selectedTab', 30000, function(result)
            {
                if (result.value)
                {
                    account
                        .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                        .verify.containsText('@personaccountName',energy.account_info.account_name, 'Person account name is displayed correctly ?')
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac2a_create_person_sidebar_result_page.png')
                }
                    else
                    {
                        console.log
                        browser
                            .refresh()
                        account
                            .waitForElementVisible('@selectedTab', 15000)
                            .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                            .verify.containsText('@personaccountName',energy.account_info.account_name, 'Person account name is displayed correctly ?')
                        browser
                            .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac2a_create_person_sidebar_result_page.png')
                    }
            })
    },

    'AND I shall be able to view the person account page tab as a default': function(browser)
    {
        account
            .waitForElementVisible('@selectedTab', 30000, function(result)
            {
                if (result.value)
                {
                    account
                        .verify.containsText('@selectedTab', energy.account_info.account_name , 'The Created Account is Correctly Displayed in a Default Tab ?')    
                }
                    else
                    {
                        console.log('Refreshing the browser ...')
                        browser
                            .refresh()
                        account
                            .waitForElementVisible('@selectedTab', 30000)
                            .verify.containsText('@selectedTab', energy.account_info.account_name , 'The Created Account is Correctly Displayed in a Default Tab ?');
                    }
            })
    },

    'AND I can view that the details that I have entered are correctly populated to the person account': function(browser)
    {
        account
            .waitForElementVisible('@selectedTab', 30000, function (result)
        {
            if (result.value)
            {
                account
                    .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                    .click_closeTab()

            }
                else
                {
                    console.log('Refreshing the browser ...')
                    browser
                        .refresh()
                    account
                        .waitForElementVisible('@selectedTab', 15000)
                        .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                        .click_closeTab()
                }
        })
    },

    'OTHERWISE if there are mandatory fields not populated, an error message shall be displayed AND I shall not be able to proceed any further': function(browser)
    {
        
    }
};