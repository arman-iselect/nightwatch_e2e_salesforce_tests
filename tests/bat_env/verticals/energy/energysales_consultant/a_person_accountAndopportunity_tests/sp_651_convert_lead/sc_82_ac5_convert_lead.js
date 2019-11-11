let convertleadSelector = 'detailList';

module.exports = {

    tags:['sc_82_convertLead_ac5'],
    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    '(AC-1) GIVEN that the results page is displayed': function(browser) 
    {
        utils.global_search(browser,'Ger Ger');
        browser.saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac1_display_the_recent_items.png')        
    },
    '(AC-1) WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
        utils.global_search_select_data(browser,  'Leads', 'Ger Ger Lead', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
    '(AC 4- Press convert lead button)'(browser){
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_beforeClickConvertLead.png');
        convert.click_convertLead();
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_afterClickConvertLead.png');
    },
    '(AC5: Ensure correct details are display in Convert Lead page)'(browser){
        utils.validation_convert_lead_page(browser,leadConsultantlayout.Salesforce.Lead.convertLeadFields);
       
    }
}