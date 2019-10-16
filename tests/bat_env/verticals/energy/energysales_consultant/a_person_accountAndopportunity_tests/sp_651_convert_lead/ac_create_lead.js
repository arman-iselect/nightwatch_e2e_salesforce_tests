module.exports = {
    tags: ['bat_energy_sp_651_ac', 'bat_sp_651' , 'sp_651'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.salesforce.bat.username, data.salesforce.bat.password);
    },
    
    'GIVEN I am Viewing Leads list page': function(browser) 
    {
        browser
            .url('https://iselect--bat.lightning.force.com/lightning/o/Lead/list?filterName=Recent')
    },
    
    'WHEN I have to create a New Lead': function (browser) 
    {
        browser
            .url('https://iselect--bat.lightning.force.com/lightning/o/Lead/new')
            
    },

    'THEN I shall be able to Create a Lead': function (browser) 
    {
       convert
            .waitForElementVisible('@firstName', 5000 , function (result) {

            if(result.value)
            
            {
            convert
               .verify.elementPresent('@firstName', 'First Name Field')
               .setValue('@firstName', lead.testdata.first_name)
               .verify.elementPresent('@lastName', 'Last Name Field')
               .setValue('@lastName', lead.testdata.last_name)
               .verify.elementPresent('@email', 'Email Field')
               .setValue('@email', lead.testdata.email)
            browser
               .keys(browser.Keys.PAGEDOWN)
            convert
               .verify.elementPresent('@leadsourceDropdown', 'Lead Source Dropdown')
               .click_leadsourceDropdown()
               .click_leadsourceIselect()
               .verify.elementPresent('@businessverticalDropdown', 'Business Verical Dropdown is Present?')
               .click_businessverticalDropdown()
               .verify.elementPresent('@energy', 'Energy from the Dropdown is Present?')
               .click_energy()
               .pause(3000)
               .verify.elementPresent('@save', 'Save Button')
               .click_save()
               .pause(3000);
            }
                else
                {

                }

            })
        }
           
};
