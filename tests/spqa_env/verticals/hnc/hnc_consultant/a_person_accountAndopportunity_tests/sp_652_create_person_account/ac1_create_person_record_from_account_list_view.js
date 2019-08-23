module.exports = {
    tags: ['spqa_sp_652_ac1', 'spqa_sp_652', 'sp_652', 'spqa_hncconsultant_sp652_ac1', 'spqa_hncconsultant_sp_652', 'hncconsultant_sp652'],

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
            .url(data.energy.spqa.hncsalesConsultant.loginTest);
    },
    
    'GIVEN I am viewing the Accounts list view': function(browser) 
    {
        account
            .navigate();
    },
    
    'AND I have selected the "New" Button and directed me to the New Person Account page': function (browser) 
    {
        account
            .waitForElementVisible('@newAccount', 20000, function(result)
            {
                if (result.value)
                {
                    account
                        .click_newAccount();
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        account
                            .waitForElementVisible('@newAccount', 20000)
                            .click_newAccount();
                    }
            })            
    },

    'WHEN I enter all the required fields and hit the Save button': function (browser) 
    {
        account
            .waitForElementVisible('@salutationDropdown', 20000, function(result)
            {
                if (result.value)
                {
                    account
                        .click_salutationDropdown()
                        .click_salutationMr()
                        .verify.elementPresent('@firstName', 'First Name Field is Present?')
                        .setValue('@firstName', energy.account_info.first_name )
                        .verify.elementPresent('@lastName', 'Last Name Field is Present?')
                        .setValue('@lastName', energy.account_info.last_name)
                        .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
                        .click_contactMethod()
                        .pause(1000)
                        .click_emailPreferred()
                        .setValue('@homePhone', energy.account_info.home_phone )
                        .verify.elementPresent('@email', 'Email Field is Present?')
                        .setValue('@email', energy.account_info.email)
                        .click_save()
                        .pause(5000);
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh()
                        account
                            .click_salutationDropdown()
                            .click_salutationMr()
                            .verify.elementPresent('@firstName', 'First Name Field is Present?')
                            .setValue('@firstName', energy.account_info.first_name )
                            .verify.elementPresent('@lastName', 'Last Name Field is Present?')
                            .setValue('@lastName', energy.account_info.last_name)
                            .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
                            .click_contactMethod()
                            .pause(1000)
                            .click_emailPreferred()
                            .setValue('@homePhone', energy.account_info.home_phone )
                            .verify.elementPresent('@email', 'Email Field is Present?')
                            .setValue('@email', energy.account_info.email)
                            .click_save()
                            .pause(5000);
                    }
            })
    },

    'THEN a new person account is created':function (browser)
    {
        account
            .waitForElementVisible('@personaccountTitle', 20000, function(result)
            {
                if (result.value)
            {
                console.log('Person account is created')
                account
                    .verify.containsText('@tabTitle', energy.account_info.account_name, 'The account is Opened in a new tab ?')
            }
                else
                {
                    console.log('Refreshing the page')
                    browser
                        .refresh()
                    account
                        .waitForElementVisible('@personaccountTitle', 2000)
                        .verify.containsText('@tabTitle', energy.account_info.account_name , 'The account is displayed after refresh ?')
                }
            })
            

    },

    'AND I shall be able to view the person account page tab as a default': function(browser)
    {
        account
            .waitForElementVisible('@tabPresent', 15000, function(result)
            {
                if (result.value)
                {
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac1a_create_person_record.png')
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh()
                        account
                            .waitForElementVisible('@tabPresent', 30000)
                        browser
                            .saveScreenshot('reports/spqa_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac1a_create_person_record.png')
                    }
            })
    },

    'AND I can view that the details that I have entered are correctly populated to the person account': function(browser)
    {
        account
            .waitForElementVisible('@personaccountTitle', 20000, function(result)
            {
                if (result.value)
                {
                    account
                        .verify.containsText('@emailPresent', energy.account_info.email , 'The Email field is populated correctly to the Person account?')
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac1b_create_person_record.png')
                    account
                        .click_closeTab();
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh()
                        account
                            .verify.containsText('@emailPresent', energy.account_info.email , 'The Email field is populated correctly to the Person account?')
                        browser
                            .saveScreenshot('reports/spqa_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac1b_create_person_record.png')
                        account
                            .click_closeTab();
                    }
            })
    },

    'OTHERWISE if there are mandatory fields not populated, an error message shall be displayed AND I shall not be able to proceed any further': function(browser)
    {
        browser
            .url('https://iselect--bat.lightning.force.com/lightning/o/Account/new?')
        account
            .click_salutationDropdown()
            .click_salutationMr()
            .verify.elementPresent('@firstName', 'First Name Field is Present?')
            .setValue('@firstName', energy.account_info.first_name )
            .verify.elementPresent('@lastName', 'Last NAme Field is Present?')
            .setValue('@lastName', energy.account_info.last_name)
            .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
            .verify.elementPresent('@email', 'Email Field is Present?')
            .setValue('@email', energy.account_info.email)
            .click_save()
            .pause(5000)
        browser
            .saveScreenshot('reports/spqa_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac1c_create_person_record.png')
        account
            .click_closenewTab();
    }
};