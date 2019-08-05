var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['bat_sp_650_ac1', 'bat_sp_650'],

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

    'Log in as Energy Consultant QA': function() 
    {
        console.log('Log in as Energy Consultant QA');
        
        energy_sales
            .navigate()
            .pause(3000);
    },
    /*
    'Scope 1: Global search shall be available at the top of the screen with a placeholder text of "Search Salesforce"': function(browser) {
        console.log('Verify Search Field Placeholder contains "Search Salesforce"');
        if (search.verify.elementPresent('@searchField'))
        {
            search
                .getText('@searchField');
        }
            else if (search.verify.elementNotPresent('@searchField'))
            {
                browser
                    .refresh();
                search
                    .verify.elementPresent('@searchField', 'Search Field Present after Refresh?')
                    .getText('@searchField');

            }
    },*/
    
    'GIVEN I already have the First Name ': function(browser) 
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
    
    'WHEN I click on the global search box': function (browser) 
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

    'THEN the list of recent items will auto filter in the global search box': function (browser) 
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
