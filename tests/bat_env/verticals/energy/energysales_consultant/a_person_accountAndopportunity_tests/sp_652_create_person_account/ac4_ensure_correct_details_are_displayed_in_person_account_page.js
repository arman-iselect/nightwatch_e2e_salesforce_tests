module.exports = {
    tags: ['bat_sp_652_ac4', 'bat_sp_652' , 'sp_652', 'bat_energysales_sp_652_ac4', 'bat_energysales_sp_652'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    
    'GIVEN I have created a new person': function(browser) 
    {
        account
            .navigate()
            .click_newAccount()
            .waitForElementVisible('@salutationDropdown', 20000, function(result)
            {
                if (result.value)
                {
                    account
                        .click_salutationDropdown()
                        .click_salutationMr()
                        .verify.elementPresent('@firstName', 'First Name Field is Present?')
                        .setValue('@firstName', energy.energysales.account_info.first_name )
                        .verify.elementPresent('@lastName', 'Last Name Field is Present?')
                        .setValue('@lastName', energy.energysales.account_info.last_name)
                        .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
                        .click_contactMethod()
                        .waitForElementVisible('@emailPreferred', 15000)
                        .click_emailPreferred()
                        .setValue('@homePhone', energy.energysales.account_info.home_phone )
                        .verify.elementPresent('@email', 'Email Field is Present?')
                        .setValue('@email', energy.energysales.account_info.email)
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
                            .setValue('@firstName', energy.energysales.account_info.first_name )
                            .verify.elementPresent('@lastName', 'Last Name Field is Present?')
                            .setValue('@lastName', energy.energysales.account_info.last_name)
                            .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
                            .click_contactMethod()
                            .waitForElementVisible('@emailPreferred', 15000)
                            .click_emailPreferred()
                            .setValue('@homePhone', energy.energysales.account_info.home_phone )
                            .verify.elementPresent('@email', 'Email Field is Present?')
                            .setValue('@email', energy.energysales.account_info.email)
                            .click_save()
                            .pause(5000);
                    }
            })
    },
    
    'WHEN the person account page is displayed': function (browser) 
    {
        account
            .waitForElementVisible('@tabPresent', 15000, function(result)
            {
                if (result.value)
                {

                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh()
                        account
                            .waitForElementVisible('@tabPresent', 30000)
                    }
            })
    },

    'THEN I shall be able to view the following details': function (browser) 
    {
       account
        .waitForElementVisible('@selectedTab', 30000, function (result)
        {
            if (result.value)
            {
                account
                    .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                    .verify.containsText('@selectedTab', energy.energysales.account_info.account_name , 'The Created Account is Correctly Displayed in a Default Tab ?')
                browser
                    .getText('[class="slds-page-header__detail-block forceHighlightsDesktopListRecordItem"]', function (result0){
                        console.log(result0.value)
                    });
                browser
                    .getText('[title=\"Energy Automated Test0\"]', function(result1){
                    console.log(result1.value)
                    });
                browser
                    .getText('[class="emailuiFormattedEmail"]', function(result2){
                        console.log(result2.value)
                    })
                browser
                    .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac4_ensure_correct_details_displayed_account_page.png')
                account
                    .click_closeTab();
            }
                else
                {
                    console.log('Refreshing the browser ...')
                    browser
                        .refresh()
                    account
                        .waitForElementVisible('@selectedTab', 30000)
                        .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                        .verify.containsText('@selectedTab', energy.energysales.account_info.account_name , 'The Created Account is Correctly Displayed in a Default Tab ?')
                    browser
                        .getText('[class="slds-page-header__detail-block forceHighlightsDesktopListRecordItem"]', function (result0){
                            console.log(result0.value)
                        });
                    browser
                        .getText('[title=\"Energy Automated Test0\"]', function(result1){
                        console.log(result1.value)
                        });
                    browser
                        .getText('[class="emailuiFormattedEmail"]', function(result2){
                        console.log(result2.value)
                        });
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac4_ensure_correct_details_displayed_account_page.png')
                    account
                        .click_closeTab();
                }
        })

    }
};