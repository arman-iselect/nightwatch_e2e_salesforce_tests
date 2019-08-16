module.exports = {
    tags: ['spqa_sp_650_ac3','spqa_sp_650', 'sp_650'],

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

    'Log in as Energy Consultant QA': function(browser) {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.spqa.gisalesConsultant.loginTest);
    },
    
    'GIVEN I have talked to the client': function(browser) 
    {

    },
    
    'WHEN I enter the Last Name in Global Search Bar AND hit enter': function (browser) 
    {
        search
            .waitForElementPresent('@searchField', 10000 , function(result)
            {
                if (result.value)
                {
                    search
                        .setValue('@searchField', energy.search_field.last_name.sample1 );
                    browser
                        .keys(browser.Keys.ENTER)
                        .pause(5000);
                }
                    else
                    {
                        browser
                            .refresh();
                        search
                            .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                            .setValue('@searchField', energy.search_field.last_name.sample1 )
                            .pause(3000);
                        browser
                            .keys(browser.Keys.ENTER);
                    }
            })
    },
   

    'THEN the search result page is displayed and will return matches from any of the primary objects': function (browser) 
    {
        search
            .waitForElementPresent('@primaryObjects', 10000 , function(result)
            {
                if (result.value)
                {
                    search
                        .verify.containsText('@selectedTab', energy.search_field.search_sample.search_sample1 , 'The searched Item is Displayed on a Tab? ')
                        .verify.elementPresent('@primaryObjects', 'Verify Primary Objects are returned');
                    browser 
                        .getText('div[class="resultsItem slds-col slds-no-flex slds-card"]',function(result){
                            //for (var i = 380; i < result.value.length; i++)
                    console.log('Got:',result.value);
                    });
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/general_insurance/gi_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac3_display_search_results_page.png')
                        .end();
                }
                    else
                    {
                        browser
                            .refresh()
                            .pause(3000);
                            search
                            .verify.containsText('@selectedTab', energy.search_field.search_sample.search_sample1 , 'The searched Item is Displayed on a Tab? ')
                            .verify.elementPresent('@primaryObjects', 'Verify Primary Objects are returned');
                        browser 
                            .getText('div[class="resultsItem slds-col slds-no-flex slds-card"]',function(result){
                                //for (var i = 380; i < result.value.length; i++)
                        console.log('Got:',result.value);
                        });
                        browser
                            .saveScreenshot('reports/spqa_env/verticals/general_insurance/gi_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac3_display_search_results_page.png')
                            .end();
                    }
            })
    }

};
