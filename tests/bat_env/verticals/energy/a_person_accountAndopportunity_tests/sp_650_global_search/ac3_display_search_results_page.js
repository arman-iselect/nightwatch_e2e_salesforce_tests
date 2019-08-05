var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['bat_sp_650_ac3','bat_sp_650'],

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

    'Log in as Energy Consultant QA': function() {
        console.log('Log in as Energy Consultant QA');
        
        energy_sales
            .navigate()
            .pause(3000);
    },

    /*'Scope 1: Global search shall be available at the top of the screen with a placeholder text of "Search Salesforce"': function(browser) {
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
    
    'GIVEN I have talked to the client': function(browser) 
    {
       /* console.log('Verify youre viewing Global Search');
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
                        } */
    },
    
    'WHEN I enter the Last Name in Global Search Bar AND hit enter': function (browser) 
    {
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
   

    'THEN the search result page is displayed and will return matches from any of the primary objects': function (browser) 
    {
        console.log('Verify search results returns matches from any of the primary objects')
        if(search.verify.elementPresent('@selectedTab'))
        {
            search
                .verify.containsText('@selectedTab', energy.search_field.search_sample.search_sample1 , 'The searched Item is Displayed on a Tab? ')
                .verify.elementPresent('@primaryObjects', 'Verify Primary Objects are returned');
            browser 
            .getText('div[class="resultsItem slds-col slds-no-flex slds-card"]',function(result){
                for (var i = 380; i < result.value.length; i++)
            console.log('Got:',result.value);
            });
            browser
                .saveScreenshot('reports/bat_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac3_display_search_results_page.png')
                .end();
        }

            else if (search.verify.elementNotPresent('@selectedTab')) 
                {
                    browser
                        .refresh()
                        .pause(3000);
                    search
                        .verify.containsText('@selectedTab', energy.search_field.search_sample.search_sample1 , 'Search Item is Displayed on a Tab? ')
                        .verify.elementPresent('@primaryObjects', 'Verify Primary Objects are returned');
                    browser
                        .getText('div[class="resultsItem slds-col slds-no-flex slds-card"]',function(result){
                            for (var i = 380; i < result.value.length; i++)
                        console.log('Got:',result.value);
                        });
                    browser
                        .saveScreenshot('reports/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac3_display_search_results_page.png')
                        .end();
                }
    }

};
