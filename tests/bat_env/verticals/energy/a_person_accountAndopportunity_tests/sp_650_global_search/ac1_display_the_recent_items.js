var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['bat_sp_650_ac1', 'bat_sp_650' , 'sp_650'],

    'Login Bat Credentials': function() 
    {
        console.log('Go to Salesforce Login Test URL and Enter Bat Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.bat.username)
            .setValue('@password', data.salesforce.bat.password)
            .pause(3000)
            .click_loginbtn()
            .pause(5000);
    },

    'Log in as Energy Consultant QA': function(browser) 
    {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.bat.salesConsultant.loginTest)
            .pause(3000);
    },
    
    'GIVEN I already have the First Name ': function(browser) 
    {
        search
            .waitForElementPresent('@searchField', 10000, function(result)
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
            .waitForElementPresent('searchField', 10000 , function(result)
            {
                if (result.value)
                {
                    search
                        .click_searchField()
                }
                    else
                    {
                        browser
                            .refresh();
                        search
                            .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                            .click_searchField()
                            .pause(3000);
                    }
            })
    },

    'THEN the list of recent items will auto filter in the global search box': function (browser) 
    {
        search
            .waitForElementPresent('@recentItems', 10000 , function (result)
            {
                if (result.value)
                {
                    search
                        .click_searchField()
                        .waitForElementPresent('@recentItems', 10000)
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')
                        .end();   
                }
                    else
                    {
                        console.log('Recent Items not found, refreshing the page')
                        browser
                            .refresh();
                        search
                            .waitForElementPresent('@searchField', 10000)
                            .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                            .waitForElementPresent('@recentItems', 10000)
                            .verify.elementPresent('@recentItems', 'Recent Items are Present?');
                        browser
                            .end();
                    }
            })
    }
};
