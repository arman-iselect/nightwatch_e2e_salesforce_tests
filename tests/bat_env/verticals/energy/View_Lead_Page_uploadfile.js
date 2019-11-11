module.exports = {
    tags:['View_Lead_uploadFile'],
    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    '(AC-1) GIVEN that the results page is displayed': function(browser) 
    {
        utils.global_search(browser,'Howie Newbie');
    },
    '(AC-1) WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
        utils.global_search_select_data(browser,  'Leads', 'Howie Newbie', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
    },
     '(AC 3- Attach Notes and Attachments)'(browser){
        utils.upload_files(browser, leadConsultantlayout.Salesforce.Lead.filepathtoUpload, leadConsultantlayout.Salesforce.Lead.inputFileXpath,leadConsultantlayout.Salesforce.Lead.donebtnXpath);
        browser.pause(100000000).end();
    }
}