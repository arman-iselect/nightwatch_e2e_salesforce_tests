module.exports = {
    tags: ['bat_energy_sp_651_ac1', 'bat_sp_651' , 'sp_651'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    
    'GIVEN I have the potential lead in the Lead Page': function(browser) 
    {
        search
            .waitForElementPresent('@searchField', 3000, function (result)
            {
                if (result.value)
                {
                    browser
                        .url(lead.lead_list.url)
                        .pause(1000);
                    convert
                        .useXpath().click('/html/body/div[5]/div[1]/div[2]/div[1]/div/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/div/table/tbody/tr[1]/th')
                        .pause(2000)
                        .click_convertLead();
                }
                    else
                    {
                        browser
                            .url(lead.lead_list.url)
                            .pause(1000);
                        convert
                            .useXpath().click('/html/body/div[5]/div[1]/div[2]/div[1]/div/div/div/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/div/table/tbody/tr[1]/th')
                            .pause(2000)
                            .click_convertLead();
                    }

            })  
    },
    
    'WHEN I click on the Convert Lead button': function (browser) 
    {
        /*convert
            .waitForElementPresent('.iframe-parent > iframe:nth-child(1)', 5000, function(result)
            {
                if (result.value)
                {
                    browser
                        .pause(2000)
                        .frame(0)
                    convert
                        .click_convertLead()
                        .pause(4000)
                }
            })*/
        convert
            .waitForElementPresent('@convertLead', 3000, function (result)
            {
                if (result.value)
                {
                    convert
                        .click_convertLead()
                }
                    else
                    {
                        browser
                            .refresh()
                        convert
                            .click_convertLead()
                    }
            })
    },

    'THEN I shall be able to view the Convert Lead page in a new tab': function (browser) 
    {
       convert
        .waitForElementPresent('.iframe-parent > iframe:nth-child(1)', 5000, function(result)
        {
            if (result.value)
            {
                browser
                    .pause(3000)
                    .frame(0)
                convert
                    .verify.elementPresent('@convertleadTab',9000 , 'Convert Lead is displayed in a New Tab ?')
                    .verify.containsText('@pageConversion', 'Test Lead Conversion', 'Convert Lead Page Loaded ?')
            }
        })
    }
};
