module.exports = {
    tags: ['spqa_sp_650_ac7', 'spqa_sp_650', 'sp_650'],

    'Login SPQA Credentials': function() 
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
            .url(data.energy.spqa.lifeAdviser.loginTest);
    },
    
    'GIVEN that the results page is displayed': function(browser) 
    {
        console.log('Enter the Last Name in Global Search Bar')
        search
            .waitForElementPresent('@searchField', 10000, function(result) 
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
                        .Keys.ENTER()
                        .pause(5000); 
                }

        })
    },
    
    'WHEN I select the "View More" button on any of the displayed section ': function (browser) 
    {
        search
            .waitForElementPresent('@viewMore', 15000, function (result)
            {
                if (result.value)
                {
                    search
                        .verify.elementPresent('@viewMore', '"View more" hyperlink is Visible')
                        .click_viewMore();
                }
                    else
                    {
                        console.log('Refreshing the Page...')
                        browser
                            .refresh()
                            .pause(2000);
                        search
                            .verify.elementPresent('@viewMore', '"View more" hyperlink is Visible')
                            .click_viewMore();   
                    }
            })
    },
   

    'THEN the list of matched record of the selected object is displayed': function (browser) 
    {   
        search
        .waitForElementPresent('@pageResult', 30000, function (result)
        {
            if (result.value)
            {
                search
                    .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
                browser
                    .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_650_global_search/ac7_ability to display_all_matched_records.png')            
                    .end(); 
            }
                else
                {
                    console.log('Refreshing the Page')
                    browser
                        .refresh()
                        .pause(2000)
                    search
                        .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?')
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_650_global_search/ac7_ability to display_all_matched_records.png')
                        .end(); 
                }
        }) 
    }
};
