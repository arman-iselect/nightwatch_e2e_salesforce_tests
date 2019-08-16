module.exports = {
    tags: ['spqa_sp_650_ac1', 'spqa_sp_650', 'sp_650'],

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

    'Log in as Energy Consultant QA': function(browser) 
    {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.spqa.energysalesConsultant.loginTest);
    },
    
    'GIVEN I already have the First Name ': function(browser) 
    {
        search
            .waitForElementPresent('@searchField', 30000, function(result)
            {
                if (result.value)
                {
                    
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh(); 
                    }
            })
    },
    
    'WHEN I click on the global search box': function (browser) 
    {
        search
            .click_searchField();
    },

    'THEN the list of recent items will auto filter in the global search box': function (browser) 
    {
        search
            .waitForElementPresent('@recentItems', 30000 , function (result)
            {
                if (result.value)
                {
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')
                        .end();   
                }
                    else
                    {
                        console.log('Recent Items not found, refreshing the page')
                        browser
                            .refresh();
                        search
                            .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                            .click_searchField()
                            .verify.elementPresent('@recentItems', 'Recent Items are Present?');
                        browser
                            .saveScreenshot('reports/spqa_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')
                            .end(); 
                    }
            })
    }
};

