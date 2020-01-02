module.exports = {
    tags:['View_Opportunity_Page'],
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
        utils.global_search(browser,'Test Ger Ger - (Energy)');
    },
    '(AC-1) View Opportunity page': function (browser) 
    {
        utils.global_search_select_data(browser,  'Opportunities', 'Test Ger Ger - (Energy)', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
    '(AC-2)  Displayed opportunity page layout:Page Arrangement': function (browser) 
    {
        utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_Page_Arrangement.png');
    },
    '(AC-2)  Displayed opportunity page layout:Highlight Panel': function (browser) 
    {
        utils.validation_highlightpanel_field(browser,'forceRecordLayout',leadConsultantlayout.Salesforce.Opportunity.highlightpanelfield,'Opportunity');
        
        utils.validation_highlightpanel_button(browser,'forceRecordLayout',leadConsultantlayout.Salesforce.Opportunity.highlightpanelButton,'Opportunity');
          //Main menu Navigation to Opportunity
          var navMenu = browser.page.Utils.Utility()
          //Navigage in Opportunity component
          let test = navMenu.section.opportunity
          test.populate_OpportunityName('Opportunity','Business1221 Vertical')
        //utils.new_validation_pagelayout_field(browser,'Person Account', leadConsultantlayout.Salesforce.Opportunity.pagelayoutfield);
    }
}