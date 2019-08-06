var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['spqa_sp_650_ac6', 'spqa_sp_650', 'sp_650'],

    'Login Bat Credentials': function() 
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
            .url(data.energy.spqa.salesConsultant.loginTest)
            .pause(1000);
    },
    
    'GIVEN that the results page is displayed': function(browser) 
    {
        search
            .waitForElementVisible('@searchField', 3000 , function(result)
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
            .waitForElementVisible('@topResults', 3000, function(result)
            {
                if (result.value)
                {
                    search
                        .verify.elementPresent('@hyperLinktext', 'Records/Hyperlinks are interactable ?')
                        .click_hyperLinktext()
                        .pause(3000)
                        .waitForElementVisible('@profileWrap');
                }
                    else
                        {
                        console.log('Refreshing the Page...')
                            browser
                                .refresh()
                                .pause(2000);
                            search
                                .click_hyperLinktext()
                                .waitForElementVisible('@profileWrap');
                        
                        }
            })
    },
   

    'THEN the selected record page is displayed in a new tab': function (browser) 
    {   
        search
            .waitForElementVisible('@selectedTab', 3000 , function(result)
            {
                if (result.value)
                {
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac6_ensure_each_matched_object_has_a_hyperlink_and_it_works.png')
                        .end();
                }
                    else
                        {
                            browser
                                .refresh()
                            search
                                .verify.containsText('@selectedTab', energy.search_field.last_name.sample1 , 'The hyperlink opens a new tab? ')
                             browser
                                .saveScreenshot('reports/spqa_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac6_ensure_each_matched_object_has_a_hyperlink_and_it_works.png')
                                .end(); 
                        }
            })
    }

};
