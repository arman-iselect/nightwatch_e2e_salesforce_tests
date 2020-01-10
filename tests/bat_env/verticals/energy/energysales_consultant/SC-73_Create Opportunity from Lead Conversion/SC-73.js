let selector = 'resultsItem';
let highlightPanelSelector= 'forceRecordLayout';
let highlightPanelButton ='forceActionsContainer';
let pageLayoutSelector ='forceDetailPanelDesktop';
let relatedListSelector ='forceRelatedListContainer';
let uploadFileSelector = 'drag-over-body';
module.exports = {
    tags:['SC_73'],
    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    'Close all browser': (browser)=>{
        utils.delete_all_maintabs(browser);
    },
    'Search Lead record 1': function(browser) 
    {
        utils.global_search(browser,'Donkey Kong Country');
    },
    'Search Lead record for creation of account before conversion': function (browser) 
    {
        utils.global_search_select_data(browser,  'Leads', 'Donkey Kong Country', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
    'AC1: Create and load opportunity record upon creation of person account': (browser)=>{
        
        convert
        .click_convertLead();
        browser
        .pause(3000)
        .frame(0).pause(4000).click('[id=\"new\"]', (res)=>{
            console.log('NEW');
            console.log(res);
        }).pause(5000)
        .waitForElementVisible('[value=\"Convert\"]')
        .click('[value=\"Convert\"]', (res)=>{
            console.log(res);
        });
        
    },
    'Close all browser': (browser)=>{
        utils.delete_all_maintabs(browser);
    },
    'Search Lead record 2': function(browser) 
    {
        utils.global_search(browser,'Donkey Kong Country 1');
    },
    'Search Lead record for Selection of account before conversion': function (browser) 
    {
        utils.global_search_select_data(browser,  'Leads', 'Donkey Kong Country 1', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
    'AC2: Create and load opportunity record upon selection of person account': (browser)=>{
        convert
        .click_convertLead();
        browser
        .pause(5000)
        .frame(0).pause(4000).click({
            selector: 'table.detailList tbody td.last table.list tbody tr.odd',
            index: 0,
            suppressNotFoundErrors: true
          }).pause(5000)
        .waitForElementVisible('[value=\"Convert\"]')
        .click('[value=\"Convert\"]', (res)=>{
           // console.log(res);
        }).pause(10000);
    },
    'AC3: Displayed opportunity page layout': (browser)=>{
        // Page arrangement
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_SC_73_Page_Arrangement.png');
        //Related list
        utils.validation_relatedlist(browser,relatedListSelector,leadConsultantlayout.Salesforce.Opportunity.relatedListNames);
        //move over

        //Activity Tab
    },
    'AC4: Ensure correct details are display in opportunity page': (browser)=>{
        //Highlight panel
        utils.validation_highlightpanel_field(browser,'forceRecordLayout',leadConsultantlayout.Salesforce.Opportunity.highlightpanelfield,'Opportunity');
        //Detail tab
        utils.validation_pagelayout(browser,pageLayoutSelector,leadConsultantlayout.Salesforce.Opportunity.pagelayoutfield);
        //Ribbon opportunity = New
        browser.assert.cssClassPresent("ul.slds-path__nav li[data-name=\"New\"]", "slds-is-active");
    },
    'AC5: Ensure the opportunity is linked to the person account': (browser)=>{
        utils.checkOpporunityAccountRelationship(browser,'forceRecordLayout','Donkey Kong Country','Opportunity','Account Name');
    }
}