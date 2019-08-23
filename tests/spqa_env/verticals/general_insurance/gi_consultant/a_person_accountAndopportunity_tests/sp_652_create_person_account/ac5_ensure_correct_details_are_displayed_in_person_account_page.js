module.exports = {
    tags: ['spqa_sp_652_ac5', 'spqa_sp_652', 'sp_652', 'spqa_giconsultant_sp652_ac5', 'spqa_giconsultant_sp_652', 'giconsultant_sp652'],

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
            .url(data.energy.spqa.gisalesConsultant.loginTest);
    },
    
    'GIVEN I have created a new person': function(browser) 
    {
        account
            .navigate();
    },
    
    'WHEN the person account page is displayed': function (browser) 
    {
        search
            .waitForElementVisible('@searchField', 10000, function (result)
            {
                if (result.value)
                {
                    search
                        .setValue('@searchField', energy.account_info.account_name)
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
                            .setValue('@searchField', energy.account_info.account_name)
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

    'THEN I shall be able to view the following details': function (browser) 
    {
       account
        .waitForElementVisible('@selectedTab', 30000, function (result)
        {
            if (result.value)
            {
                account
                    .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                    .verify.containsText('@selectedTab', energy.account_info.account_name , 'The Created Account is Correctly Displayed in a Default Tab ?')
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
                    .keys(browser.Keys.PAGEDOWN)
                    .getText('div[class="slds-form-element slds-form-element_readonly slds-form-element_edit slds-grow slds-hint-parent override--slds-form-element"]', function (result4){
                        console.log(result4.value)
                    });
                browser
                    .saveScreenshot('reports/spqa_env/verticals/general_insurance/gi_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac5_ensure_correct_details_displayed_account_page.png')
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
                        .verify.containsText('@selectedTab', energy.account_info.account_name , 'The Created Account is Correctly Displayed in a Default Tab ?')
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
                        .keys(browser.Keys.PAGEDOWN)
                        .getText('div[class="slds-form-element slds-form-element_readonly slds-form-element_edit slds-grow slds-hint-parent override--slds-form-element"]', function (result4){
                        console.log(result4.value)
                        });
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/general_insurance/gi_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac5_ensure_correct_details_displayed_account_page.png')
                    account
                        .click_closeTab();
                }
        })

    }
};