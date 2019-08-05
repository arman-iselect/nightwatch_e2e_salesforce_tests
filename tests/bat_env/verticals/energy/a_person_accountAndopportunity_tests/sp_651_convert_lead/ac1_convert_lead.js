var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['bat_sp_651_ac1', 'bat_sp_651'],

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

    'GIVEN I have the potential lead in the Lead Page': function(browser) 
    {
        console.log('Consultant has the Customers First Name');
            if (search.verify.elementPresent('@searchField', 'Search Field is Present?'))
            {
                
            }
                else if (search.verify.elementNotPresent('@searchField', 'Search Field is Not Present'))
                {
                    console.log('Refreshing the Page')
                    browser
                        .refresh();
                }
                    else 
                        {
                        console.log('Test has Stopped unable to locate Search Field')
                        }
    },
    
    'WHEN I click on the Convert Lead button': function (browser) 
    {
        console.log('Click on the Global Search Box')
        if (search.verify.elementPresent('@searchField', 'Search Box Clickable?'))
            {
                search
                    .click_searchField()
               
            }
            else if (search.verify.elementNotPresent('@searchField', 'search Field is not visible, Refreshing the page...'))
                {
                    browser
                        .refresh();
                    search
                        .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                        .click_searchField()
                        .pause(3000);                        
                }
                else {
                     }
    },

    'THEN I shall be able to view the Convert Lead page in a new tab': function (browser) 
    {
        console.log('Verify the Recent Items are Visible')
        if (search.verify.elementPresent('@recentItems', 'Recent Items are Present?'))
            {
                search
                    .click_searchField()
                    .pause(3000);
                browser
                    .saveScreenshot('reports/bat_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')
                    .end();   
            }
            else if (search.verify.elementNotPresent('@recentItems', 'Recent Items are not visible, Refreshing the page...'))
                {
                    browser
                        .refresh();
                    search
                        .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                        .click_recentItems()
                        .pause(3000)
                        .verify.elementPresent('@recentItems', 'Recent Items are Present?');
                }
                else {
                    browser
                        .refresh()
                    search
                        .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                        .click_recentItems()
                        .pause(3000)
                        .verify.elementPresent('@recentItems', 'Recent Items are Present?');
                     }
    }

};
