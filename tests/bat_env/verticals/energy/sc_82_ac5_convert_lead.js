let convertleadSelector = 'detailList';

module.exports = {

    tags:['sc_82_convertLead_ac5'],
    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);

            //.userLogin('roger.cabatic@iselect.com.au.bat', 'Hyters123!@#');
    },
    '(AC-1) GIVEN that the results page is displayed': function(browser) 
    {
        utils.global_search(browser,'Howie Newbie');
    },
    '(AC-1) WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
        utils.global_search_select_data(browser,  'Leads', 'Howie Newbie', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
    '(AC 4- Press convert lead button)'(browser){
        convert.click_convertLead();
        
    },
    '(AC5: Ensure correct details are display in Convert Lead page)'(browser){
        utils.validation_convert_lead(browser,leadConsultantlayout.Salesforce.Lead.convertLeadFields);
       
    }
}