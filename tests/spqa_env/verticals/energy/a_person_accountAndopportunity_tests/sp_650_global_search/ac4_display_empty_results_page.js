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

    'Log in as Energy Consultant QA': function() 
    {
        console.log('Log in as Energy Consultant QA');
        
        energy_sales
            .navigate()
            .pause(3000);
    },
    
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
                console.log('Type a random keys to the search field')
                search
                    .setValue('@searchField', energy.search_field.random.a );
                console.log('Hit Enter')
                browser
                    .keys(browser.Keys.ENTER)
                    .pause(5000);
            }
            else if (search.verify.elementNotPresent('@searchField', 'search Field is not visible, Refreshing the page...'))
                {
                    console.log('Refreshing the Page')
                    browser
                        .refresh();
                    search
                        .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                        .setValue('@searchField', energy.search_field.random.a )
                        .pause(3000);
                    browser
                        .Keys.ENTER()
                        ,pause(8000);                      
                }
                else {
                     }
    },
   

    'THEN an empty result page is displayed': function (browser) 
    {
        console.log('Verify search results returns matches from any of the primary objects')
        if (search.verify.containsText('@selectedTab', energy.search_field.random.a , 'The searched Item is Displayed on a Tab? '))
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

            else if (search.verify.elementNotPresent('@selectedTab')) 
                {
                    browser
                        .refresh()
                        .pause(3000);
                    search
                        .verify.containsText('@selectedTab', energy.search_field.random_a , 'Search Item is Displayed on a Tab? ');
                    browser
                        .getText('div[class="slds-text-heading--large noResultsTitle slds-p-bottom--large"]',function (result) {
                        console.log('', result);
                         })
                        .getText('div[class="slds-text-heading--small noResultsMessage"]',function (result) {
                        console.log('', result);
                        });
                    browser
                        .end();
                }
    }

};
