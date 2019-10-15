module.exports = {
    tags: ['bat_sp_650_ac6', 'bat_sp_650', 'sp_650','bat_energysales_sp_650_ac6', 'bat_energysales_sp_650', 'energysales_sp_650'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    
    'GIVEN that the results page is displayed': function(browser) 
    {
        search
            .waitForElementVisible('@searchField', 10000 , function(result)
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
                            .keys(browser.Keys.ENTER)
                            .pause(8000);
                        }
            })
    },
    
    'WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
        search
            .waitForElementVisible('@hyperlinkText', 20000, function(result)
            {
                if (result.value)
                {
                    search
                        .verify.elementPresent('@hyperlinkText', 'Records/Hyperlinks are interactable ?')
                        .click_hyperlinkText();
                }
                    else
                        {
                        console.log('Refreshing the Page...')
                            browser
                                .refresh()
                            search
                                .waitForElementVisible('@hyperlinkText', 10000)
                                .click_hyperlinkText();
                        }
            })
    },
   

    'THEN the selected record page is displayed in a new tab': function (browser) 
    {   //Verify top results page is displayed
        search
            .waitForElementVisible('@profileWrap', 25000 , function(result)
            {
                if (result.value)
                {
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac6_ensure_each_matched_object_has_a_hyperlink.png')
                        .end();
                }
                    else
                        {
                            browser
                                .refresh()
                            search
                                .waitForElementVisible('@selectedTab', 15000)
                                .verify.containsText('@selectedTab', energy.search_field.last_name.sample1 , 'The hyperlink opens a new tab? ')
                             browser
                                .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac6_ensure_each_matched_object_has_a_hyperlink.png')
                                .end(); 
                        }
            })
    }
};
