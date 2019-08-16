module.exports = {
    tags: ['bat_sp_650_ac1', 'bat_sp_650' , 'sp_650','bat_giconsultant_sp_650_ac1', 'bat_giconsultant_sp_650', 'giconsultant_sp650'],

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
            .url(data.energy.bat.gisalesConsultant.loginTest);
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
            .waitForElementVisible('@recentItems', 30000 , function (result)
            {
                if (result.value)
                {
                    browser
                        .saveScreenshot('reports/bat_env/verticals/general_insurance/gi_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')
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
                            .saveScreenshot('reports/bat_env/verticals/general_insurance/gi_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')
                            .end(); 
                    }
            })
    }
};