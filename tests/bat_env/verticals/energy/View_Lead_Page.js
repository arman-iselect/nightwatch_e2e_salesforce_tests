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
    '(AC2- Check the highlight panel fields)'(browser){
        utils.validation_highlightpanel_field(browser,'forceRecordLayout',leadConsultantlayout.Salesforce.Lead.highlightpanelfield);
        
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
        //.setValue('input[placeholder="Middle Name"]','sample')
        .pause(5000)
        .click('button[title="Save"]')
        .pause(10000);
     },
     '(AC 3- Attach Notes and Attachments)'(browser){
        //utils.yeah_yeah(browser, 'C:/Users/Roger Cabatic/Desktop/yeah.txt', leadConsultantlayout.Salesforce.Lead.inputFileXpath,leadConsultantlayout.Salesforce.Lead.donebtnXpath);
         
        browser.jqueryElement('.'+uploadFileSelector,(element)=>{
            console.log('Test Test Test');
            console.log(element);
        });
        browser.pause(10000000);
        /*
        browser
    .execute(function(uploadFileSelector) {

        //dislaimer field
        let getInputfileId = document.getElementsByClassName(uploadFileSelector)[0].childNodes[0];
        console.log(getInputfileId);
        let arr = new Array();
       return arr;
    },
    [uploadFileSelector],
    function(result) {
            console.log(result);
            
    });
    */
   /*
        let file='C:/Users/Roger Cabatic/Desktop/yeah.txt';
        browser.useXpath()
        .setValue('/html/body/div[5]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div[1]/div/div[2]/div[1]/div/div[1]/div/div/div[1]/article/div[3]/div/div/div/div/div/div[2]/lightning-input/div/div/lightning-primitive-file-droppable-zone/slot/input', file)
        .pause(5000).useXpath().click('/html/body/div[5]/div[2]/div/div[2]/div/div[3]/div/span/div/button').
        pause(10000000);
        */
     },
    '(AC 4- Press convert lead button)'(browser){
        browser.pause(10000);
        convert.click_convertLead();
        browser.pause(10000000);
    }
    
}