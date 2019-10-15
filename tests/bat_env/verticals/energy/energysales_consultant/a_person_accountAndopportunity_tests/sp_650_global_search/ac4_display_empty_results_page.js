module.exports = {
    tags: ['bat_sp_650_ac4', 'bat_sp_650', 'sp_650','bat_energysales_sp_650_ac4', 'bat_energysales_sp_650', 'energysales_sp_650'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
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
                    console.log('Type a random keys to the search field')
                    search
                        .setValue('@searchField', energy.search_field.random.a );
                    console.log('Hit Enter')
                    browser
                        .keys(browser.Keys.ENTER)
                        .pause(5000);
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh();
                        console.log('Type a random keys to the search field')
                        search
                            .setValue('@searchField', energy.search_field.random.a );
                        console.log('Hit Enter')
                        browser
                            .keys(browser.Keys.ENTER);
                    }
            })
    },
   

    'THEN an empty result page is displayed': function (browser) 
    {
        search
            .waitForElementPresent('@selectedTab', 10000 , function(result)
            {
                if (result.value)
                {
                    browser
                        .getText('div[class="slds-text-heading--large noResultsTitle slds-p-bottom--large"]',function (result) {
                    console.log('', result);
                    })
                        .getText('div[class="slds-text-heading--small noResultsMessage"]',function (result) {
                    console.log('', result);
                    });
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac4_display_empty_results_page.png')
                        .end();
                }
                    else
                    {
                        console.log('Refreshing the Browser')
                        browser
                            .refresh();
                            browser
                            .getText('div[class="slds-text-heading--large noResultsTitle slds-p-bottom--large"]',function (result) {
                        console.log('', result);
                        })
                            .getText('div[class="slds-text-heading--small noResultsMessage"]',function (result) {
                        console.log('', result);
                        });
                        browser
                            .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac4_display_empty_results_page.png')
                            .end();
                    }
            })
        
    }

};
