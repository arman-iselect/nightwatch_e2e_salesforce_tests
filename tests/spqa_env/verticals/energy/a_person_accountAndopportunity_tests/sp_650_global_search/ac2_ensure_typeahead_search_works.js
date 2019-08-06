var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['spqa_sp_650_ac2', 'spqa_sp_650', 'sp_650'],

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
    
    'GIVEN the global search is on the page I am viewing': function(browser) 
    {
        search
            .waitForElementVisible('@searchField', 3000 , function (result)
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
    
    'WHEN I type in several characters (i.e.3) on the global search box': function (browser) 
    {
        search
        .waitForElementVisible('@searchField', 3000 , function(result)
        {
            if (result.value)
            {
                search
                    .setValue('@searchField', energy.search_field.last_name.sample1 )
                    .pause(8000)
                browser
                    .saveScreenshot('reports/spqa_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac2_ensure_typeahead_search_works.png')
                search
                    .verify.containsText('@searchResult', energy.search_field.last_name.sample1 );
            }
                else
                {
                    browser
                        .refresh();
                    search
                        .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                        .click_searchField()
                        browser
                        .saveScreenshot('reports/spqa_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac2_ensure_typeahead_search_works.png')
                        .pause(3000);
                }
        })
    },

    'THEN records in various objects that matches the entered text string is displayed as a dropdown': function (browser) 
    {
        search
            .waitForElementVisible('@searchResult', 3000, function(result)
            {
                if (result.value)
                {
                    search
                        .verify.containsText('@searchResult', energy.search_field.last_name.sample1 , 'Entered text matches search results ?' );
                    browser
                        .end();
                }
                    else
                    {
                        browser
                        .refresh();
                    search
                        .verify.elementPresent('@searchResult', 'Search Results are not showing, Refreshing the page...')
                        .verify.containsText('@searchResult', energy.search_field.last_name.sample1 , 'Entered text matches search result ?' ); 
                    }
            })
    }
};
