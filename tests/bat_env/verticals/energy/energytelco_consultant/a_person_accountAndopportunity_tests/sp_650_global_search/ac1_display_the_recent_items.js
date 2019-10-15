module.exports = {
    tags: ['bat_sp_650_ac1', 'bat_sp_650' , 'sp_650','bat_energytelco_sp_650_ac1', 'bat_energytelco_sp_650', 'energytelco_sp_650'],

    'Log in as Energy Telco Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energytelcoConsultant.username, data.energy.bat.energytelcoConsultant.password);
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
                        .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')
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
                            .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')
                            .end(); 
                    }
            })
    }
};