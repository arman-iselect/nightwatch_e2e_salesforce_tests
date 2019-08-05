var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['spqa_sp_650_ac4', 'spqa_sp_650'],

    'Login Bat Credentials': function() 
    {
        console.log('Go to Salesforce Login Test URL and Enter Bat Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.spqa.username)
            .setValue('@password', data.salesforce.spqa.password)
            .pause(3000)
            .click_loginbtn()
            .pause(5000);
    },

    'Log in as Energy Consultant QA': function(browser) 
    {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.spqa.salesConsultant.loginTest)
            .pause(3000);
    },
    
    'GIVEN I have talked to the client': function(browser) 
    {

    },
    
    'WHEN I enter the Last Name in Global Search Bar AND hit enter': function (browser) 
    {
        search
            .waitForElementPresent('@searchField', 3000 , function(result)
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
                            .keys(browser.Keys.ENTER)
                            .pause(5000);
                    }
            })
    },
   

    'THEN an empty result page is displayed': function (browser) 
    {
        search
            .waitForElementPresent('@selectedTab', 3000 , function(result)
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
                        .saveScreenshot('reports/spqa_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac4_display_empty_results_page.png')
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
                            .saveScreenshot('reports/spqa_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac4_display_empty_results_page.png')
                            .end();
                    }
            })
    }

};