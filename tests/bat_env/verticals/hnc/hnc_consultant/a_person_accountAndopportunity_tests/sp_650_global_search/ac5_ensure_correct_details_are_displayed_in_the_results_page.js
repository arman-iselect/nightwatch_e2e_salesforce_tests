module.exports = {
    tags: ['bat_sp_650_ac5', 'bat_sp_650', 'sp_650','bat_hncconsultant_sp_650_ac1', 'bat_hncconsultant_sp_650', 'hncconsultant_sp_650'],

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
            .url(data.energy.bat.hncsalesConsultant.loginTest);
    },
    
    'GIVEN I have searched for the Last Name': function(browser) 
    {
        search
            .waitForElementPresent('@searchField', 10000 , function(result)
            {
                if (result.value)
                {
                    search
                        .setValue('@searchField', energy.search_field.last_name.sample1 );
                    browser
                        .keys(browser.Keys.ENTER);
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
                            .keys(browser.Keys.ENTER);
                    }
            })
    },
    
    'WHEN the result page is displayed': function (browser) 
    {
        search
            .waitForElementPresent('@topResults', 10000 , function(result)
            {
                if (result.value)
                {
                    console.log('Top Results Page is Activated!')
                }
                    else
                    {
                        console.log('Refreshing the Page...')
                        browser
                            .refresh()
                        search
                            .verify.elementPresent('@topResults', 'Top Results page is displayed after refresh ?')
                    }
            })
    },
   

    'THEN I should be able to view the page': function (browser) 
    {   //Verify top results page is displayed
        search
            .waitForElementVisible('@topResults', 10000 , function(result)
            {
                if (result.value)
                {
                    console.log('Verify if Leads section is present')
                    browser
                        .pause(10000);
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
                    browser
                        .saveScreenshot('reports/bat_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac5_ensure_correct_details_are_displayed_in_the_results_page.png');
                    //Navigate to Leads
                    console.log('Navigate to Leads Section')
                    search
                        .waitForElementVisible('@leadsSec', 10000)
                        .click_leadsSec()
                        .waitForElementVisible('@pageResult', 25000)
                        .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
                    
                    /*//Navigate to Accounts
                    console.log('Navigate to Accounts Section')
                    search
                        .click_expandList()
                        .waitForElementPresent('@accountSec', 10000)
                        .click_accountSec()
                        .waitForElementPresent('@pageResult', 25000)
                        .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
        
                    console.log('Navigate to Opportunities Section')
                    search
                        .click_expandList()
                        .waitForElementPresent('@opportunitiesSec', 15000)
                        .click_opportunitiesSec()
                        .waitForElementPresent('@pageResult', 25000)
                        .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');*/
                    browser
                        .end();
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh()
                        //Verify Leads Section is Present
                        console.log('Verify if Leads section is present')
                        browser
                            .pause(10000);
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
                        browser
                            .saveScreenshot('reports/bat_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac5_ensure_correct_details_are_displayed_in_the_results_page.png');
                        //Navigate to Leads
                        console.log('Navigate to Leads Section')
                        search
                            .waitForElementPresent('@leadsSec', 10000)
                            .click_leadsSec()
                            .waitForElementPresent('@pageResult', 25000)
                            .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
                        
                        /*//Navigate to Accounts
                        console.log('Navigate to Accounts Section')
                        search
                            .click_expandList()
                            .waitForElementPresent('@accountSec', 10000)
                            .click_accountSec()
                            .waitForElementPresent('@pageResult', 25000)
                            .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
            
                        console.log('Navigate to Opportunities Section')
                        search
                            .click_expandList()
                            .waitForElementPresent('@opportunitiesSec', 15000)
                            .click_opportunitiesSec()
                            .waitForElementPresent('@pageResult', 25000)
                            .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');*/
                        browser
                            .end();
                    }
            })     
    }
};
