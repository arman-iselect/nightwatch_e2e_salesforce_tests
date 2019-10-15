module.exports = {
    tags: ['bat_sp_650_ac3','bat_sp_650', 'sp_650','bat_energytelco_sp_650_ac3', 'bat_energytelco_sp_650', 'energytelco_sp_650'],

    'Log in as Energy Telco Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energytelcoConsultant.username, data.energy.bat.energytelcoConsultant.password);
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
                        .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac3_display_search_results_page.png')
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
                            .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac3_display_search_results_page.png')
                            .end();
                    }
            })
        
    }

};
