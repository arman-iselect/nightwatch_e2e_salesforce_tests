let selector = 'resultsItem';
let highlightPanelSelector= 'forceRecordLayout';
let highlightPanelButton ='forceActionsContainer';
let pageLayoutSelector ='forceDetailPanelDesktop';
let relatedListSelector ='forceRelatedListContainer';
let uploadFileSelector = 'drag-over-body';
module.exports = {
    tags:['SC_86'],
    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    }/*,
    'AC2: View the new Needs Analysis details':(browser)=>{
        
        utils.global_search(browser,'Donkey Kong Country Web Lead');
        utils.global_search_select_data(browser,  'Leads', 'Donkey Kong Country Web Lead', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
        
        convert
        .click_convertLead();
        browser
        .pause(5000)
        .frame(0).pause(4000)
        .click('[id=\"new\"]', (res)=>{
            //console.log('NEW');
            //console.log(res);
        }).pause(5000)
        .waitForElementVisible('[value=\"Convert\"]')
        .click('[value=\"Convert\"]', (res)=>{
            //console.log(res);
        }).pause(5000);
      
       //utils.global_search(browser,'Donkey Kong Country Web Lead');
      // utils.global_search_select_data(browser,  'Opportunities', 'Donkey Kong Country Web Lead - (Energy)', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
       

        utils.click_NeedAnalysisRecord(browser,relatedListSelector,leadConsultantlayout.Salesforce.Opportunity.relatedListNames,'Needs Analysis',1);
       
        
        utils.needsAnalysisCheckLeadSourceIfDisable(browser,true,0); 
        browser.pause(2000);
          
    }*/,
    'Search Lead record 1': function(browser) 
    {
        utils.global_search(browser,'Donkey Kong Country');
    },
    'Search Lead record for creation of account before conversion': function (browser) 
    {
        utils.global_search_select_data(browser,  'Accounts', 'Donkey Kong Country', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
    'AC1: Create New Needs Analysis from Opportunity Page New Button':(browser)=>{
        browser
        .useXpath()
        .click("/html/body/div[5]/div[1]/div[2]/div[2]/div/div/div/section/div/div[2]/div/div/div/div[1]/div/div[2]/div[1]/div/div/section/div/div/div/div[1]/article/div[2]/div/div/ul/li/a")
        .pause(6000);
        utils.navigateToNeedsAnalysisPage(browser);
        utils.needsAnalysisCheckLeadSourceIfDisable(browser,false,1);  
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/energy_sales_SC86_AC1_Leadsource_Enable.png');
    },
    'AC3: Create new needs analysis':(browser)=>{
        browser.frame(null);
        utils.global_search(browser,'Donkey Kong Country Web Lead');
        utils.global_search_select_data(browser,  'Opportunities', 'Donkey Kong Country Web Lead - (Energy)', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
        
        utils.navigateToNeedsAnalysisPage(browser);
        utils.needsAnalysisCheckLeadSourceIfDisable(browser,true,0); 
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/energy_sales_SC86_AC1_Leadsource_Disable.png');
        
    }
}