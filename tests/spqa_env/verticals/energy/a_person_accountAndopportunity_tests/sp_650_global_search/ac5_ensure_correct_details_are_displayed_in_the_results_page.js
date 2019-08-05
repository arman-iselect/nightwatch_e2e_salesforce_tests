var fs = require('fs');
var data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
var energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

module.exports = {
    tags: ['spqa_sp_650_ac5', 'spqa_sp_650'],

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
    
    'GIVEN I have searched for the Last Name': function(browser) 
    {
        console.log('Enter the Last Name in Global Search Bar')
        if (search.verify.elementPresent('@searchField', 'Search Box is Present?'))
            {
                search
                    .setValue('@searchField', energy.search_field.last_name.sample1 );
                browser
                    .keys(browser.Keys.ENTER)
                    .pause(10000);
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
                        .pause(8000);                      
                }
                else {
                     }
    },
    
    'WHEN the result page is displayed': function (browser) 
    {
        console.log('Verify Top results Page is Activated/Displayed')
        if (search.verify.elementPresent('@topResults', 'Top Results Page is displayed?'))
        {
            console.log('Top Results Page is Activated!')
        }
            else if (search.verify.elementNotPresent('@topResults', 'Top Results Page is not displayed?'))
                {
                    console.log('Refreshing the Page...')
                    browser
                        .refresh()
                        .pause(2000);
                    search
                        .verify.elementPresent('@topResults', 'Top Results page is displayed after refresh ?')

                }
                    else 
                    {
                        console.log('Unable to find the top results page!')
                    }
    },
   

    'THEN I should be able to view the page': function (browser) 
    {   //Verify top results page is displayed
        if (search.verify.elementPresent('@topResults', 'Top Results'))
        {   //Verify Leads Section is Present
            console.log('Verify if Leads section is present')
            browser
                .saveScreenshot('reports/spqa_env/verticals/energy/a_person_accountAndopportunity_tests/sp_650_global_search/ac5_ensure_correct_details_are_displayed_in_the_results_page.png')
            search
                .verify.containsText('@topResults', 'Top Results', 'Top Results Page is Labeled Correctly? ')
                .verify.elementPresent('@leadsSec')
                .verify.containsText('@leadsSec', 'Leads' , 'Leads Section is Present?');
            //Verify Opportunities section is Present
            console.log('Verify if Opportunities Page is present')
            search
                .verify.elementPresent('@opportunitiesSec')
                .verify.containsText('@opportunitiesSec', 'Opportunities', 'Opportunities Section is Present');
            //Verify Account Section is Present
            console.log('Verify if Account section is present')
            search
                .verify.elementPresent('@accountSec')
                .verify.containsText('@accountSec', 'Accounts', 'Account Section is Present?');
            //Get the Matched Results is each Section
            console.log('Get the number of Matched Results in each section')
            browser
                .getText('[class="navContainer slds-is-relative slds-scrollable--y slds-p-vertical--x-small"]', function(result1){
                    //for (var i = 250; i < result.value.length; i++)
                console.log(result1.value);
                });
            //Navigate to Leads
            console.log('Navigate to Leads Section')
            search
                .pause(1000)
                .click_leadsSec()
                .pause(1000)
                .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
            
            //Navigate to Accounts
            console.log('Navigate to Accounts Section')
            search
                .click_expandList()
                .click_accountSec()
                .pause(1000)
                .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');

            console.log('Navigate to Opportunities Section')
            search
                .click_expandList()
                .click_opportunitiesSec()
                .pause(1000)
                .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
            browser
                .end();
        }
            else if (search.verify.elementNotPresent('@topResults', 'Top Results is not Displayed?'))
            {
                console.log('Refreshing the Page')
                browser
                    .refresh()
                    .pause(2000);
                //Verify Leads Section is Present
                console.log('Verify if Leads section is present')
                search
                    .verify.containsText('@topResults', 'Top Results', 'Top Results Page is Labeled Correctly? ')
                    .verify.elementPresent('@leadsSec')
                    .verify.containsText('@leadsSec', 'Leads' , 'Leads Section is Present?');
                //Verify Opportunities section is Present
                console.log('Verify if Opportunities Page is present')
                search
                    .verify.elementPresent('@opportunitiesSec')
                    .verify.containsText('@opportunitiesSec', 'Opportunities', 'Opportunities Section is Present');
                //Verify Account Section is Present
                console.log('Verify if Account section is present')
                search
                    .verify.elementPresent('@accountSec')
                    .verify.containsText('@accountSec', 'Accounts', 'Account Section is Present?');
                //Get the Matched Results is each Section
                console.log('Get the number of Matched Results in each section')
                browser
                    .getText('[class="navContainer slds-is-relative slds-scrollable--y slds-p-vertical--x-small"]', function(result1){
                    //for (var i = 250; i < result.value.length; i++)
                console.log(result1.value);
                });
                //Navigate to Leads
                console.log('Navigate to Leads Section')
                search
                    .pause(1000)
                    .click_leadsSec()
                    .pause(1000)
                    .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
            
                //Navigate to Accounts
                console.log('Navigate to Accounts Section')
                search
                    .click_expandList()
                    .click_accountSec()
                    .pause(1000)
                    .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');

                console.log('Navigate to Opportunities Section')
                search
                    .click_expandList()
                    .click_opportunitiesSec()
                    .pause(1000)
                    .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
                browser
                    .end();
            }
                else
                    {
                        console.log('Unable to Locate Elements, Ending Test')
                    }
        
    }

};
