let selector = 'resultsItem';
let highlightPanelSelector= 'forceRecordLayout';
let highlightPanelButton ='forceActionsContainer';
let pageLayoutSelector ='forceDetailPanelDesktop';
let relatedListSelector ='forceRelatedListContainer';
let uploadFileSelector = 'drag-over-body';
module.exports = {
    tags:['View_Opportunity_Page'],
    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    '(AC-1) GIVEN that the results page is displayed': function(browser) 
    {
        utils.global_search(browser,'Donkey Kong Country');
    },
    '(AC-1) View Opportunity page': function (browser) 
    {
        utils.global_search_select_data(browser,  'Opportunities', 'Donkey Kong Country - (Energy)', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
    '(AC-2)  Displayed opportunity page layout:Page Arrangement': function (browser) 
    {
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_Page_Arrangement.png');
        utils.validation_relatedlist(browser,relatedListSelector,leadConsultantlayout.Salesforce.Opportunity.relatedListNames);
        utils.ribbonStatusValidation(browser,'New;Quoted;Pending;Closed');
        utils.relatedlistChecknumofRecords(browser,'0','Notes','Opportunity');
        utils.relatedlistChecknumofRecords(browser,'0','Notes & Attachments','Opportunity');
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/energy_telco_sales_SC68_AC3.png');
    },
    '(AC-3)  Ensure correct details are displayed in opportunity page': function (browser) 
    {
        utils.validation_highlightpanel_field(browser,'forceRecordLayout',leadConsultantlayout.Salesforce.Opportunity.highlightpanelfield,'Opportunity');
        utils.validation_highlightpanel_button(browser,'forceRecordLayout',leadConsultantlayout.Salesforce.Opportunity.highlightpanelButton,'Opportunity');
        utils.validation_pagelayout(browser,pageLayoutSelector,leadConsultantlayout.Salesforce.Opportunity.pagelayoutfield);
        utils.checkRibbonStatus(browser, 'New');
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/energy_telco_sales_SC68_AC3.png');
    }
}