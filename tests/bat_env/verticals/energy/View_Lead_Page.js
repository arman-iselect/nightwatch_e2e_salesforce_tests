let selector = 'resultsItem';
let highlightPanelSelector= 'forceRecordLayout';
let highlightPanelButton ='forceActionsContainer';
let pageLayoutSelector ='forceDetailPanelDesktop';
let relatedListSelector ='forceRelatedListContainer';
let uploadFileSelector = 'drag-over-body';
module.exports = {
    tags:['View_Lead_Page'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    'Close all browser': (browser)=>{
        utils.delete_all_maintabs(browser);
    }
    ,
    '(AC-1) GIVEN that the results page is displayed': function(browser) 
    {
        utils.global_search(browser,'Ger Ger');
    },
    
    '(AC-1) WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
        utils.global_search_select_data(browser,  'Leads', 'Ger Ger Lead', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
    '(AC2- Check the highlight panel fields)'(browser){
        utils.validation_highlightpanel_field(browser,'forceRecordLayout',leadConsultantlayout.Salesforce.Lead.highlightpanelfield,'Lead');
    },
    '(AC2- Check the highlight panel button)'(browser){
        utils.validation_highlightpanel_button(browser,highlightPanelSelector,leadConsultantlayout.Salesforce.Lead.highlightpanelButton);
        
    },
    '(AC2- Check the page layout)'(browser){
       utils.validation_pagelayout(browser,pageLayoutSelector,leadConsultantlayout.Salesforce.Lead.pagelayoutfield);
      
    },
    '(AC2- Check the related list)'(browser){
        utils.validation_relatedlist(browser,relatedListSelector,leadConsultantlayout.Salesforce.Lead.relatedListNames);
        
    },
    '(AC5- update lead information)'(browser){
        browser
        .click('button[title="Edit Name"]')
        .pause(2000)
        .setValue('textarea[placeholder="Street"]', 'Newbie') //Lead Name 
        .pause(5000)
        .click('button[title="Save"]')
        .pause(1000);
     },
    '(AC 4- Press convert lead button)'(browser){
        convert.click_convertLead();
        browser.end();
    }
    
}