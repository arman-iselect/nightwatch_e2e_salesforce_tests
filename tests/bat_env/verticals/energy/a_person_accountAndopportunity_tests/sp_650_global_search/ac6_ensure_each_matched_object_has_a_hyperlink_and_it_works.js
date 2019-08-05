var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['bat_sp_650_ac6', 'bat_sp_650'],

    'Login Bat Credentials': function() 
    {
        console.log('Go to Salesforce Login Test URL and Enter Bat Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.bat.username)
            .setValue('@password', data.salesforce.bat.password)
            .click_loginbtn();
    },

    'Log in as Energy Consultant QA': function(browser) {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.bat.salesConsultant.loginTest)
            .pause(1000);

    },
    
    'GIVEN that the results page is displayed': function(browser) 
    {
        search
        
        console.log('Enter the Last Name in Global Search Bar')
        if (search.verify.elementPresent('@searchField', 'Search Box is Present?'))
            {
                search
                    .setValue('@searchField', energy.search_field.last_name.sample1 );
                browser
                    .keys(browser.Keys.ENTER)
                    .pause(5000);
            }
            else if (search.verify.elementNotPresent('@searchField', 'search Field is not visible, Refreshing the page...'))
                {
                    browser
                        .refresh();
                    search
                        .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                        .setValue('@searchField', energy.search_field.last_name.sample1 )
                        .pause(3000);
                    browser
                        .Keys.ENTER()
                        ,pause(8000);                      
                }
                else {
                     }
    },
    
    'WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
        console.log('Verifying results page with hyperlinks')
        if (search.verify.elementPresent('@topResults', 'Top Results Page is displayed?'))
        {
            search
                .verify.elementPresent('@hyperLinktext', 'Records/Hyperlinks are interactable ?')
                .click_hyperLinktext()
                .pause(3000)
                .waitForElementVisible('@profileWrap');
            
        }
            else if (search.verify.elementNotPresent('@topResults', 'Top Results Page is not displayed?'))
                {
                    console.log('Refreshing the Page...')
                    browser
                        .refresh()
                        .pause(2000);
                    search
                        .click_hyperLinktext()
                        .waitForElementVisible('@profileWrap');
                }
                    else 
                    {
                        console.log('Unable to find the top results page!')
                    }
    },
   

    'THEN the selected record page is displayed in a new tab': function (browser) 
    {   //Verify top results page is displayed
        if (search.verify.containsText('@selectedTab', energy.search_field.last_name.sample1 , 'The hyperlink opens a new tab? '))
        {   
            browser
                .saveScreenshot('reports/bat_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac6_ensure_each_matched_object_has_a_hyperlink_and_it_works.png')
                .end();
        }
            else if (search.verify.elementNotPresent('@topResults', 'Top Results is not Displayed?'))
            {
                browser
                    .refresh()
                search
                    .verify.containsText('@selectedTab', energy.search_field.last_name.sample1 , 'The hyperlink opens a new tab? ')
                browser
                    .saveScreenshot('reports/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac6_ensure_each_matched_object_has_a_hyperlink_and_it_works.png')
                    .end();
            }
                else
                    {
                        console.log('Unable to Locate Elements, Ending Test')
                    }
        
    }

};
