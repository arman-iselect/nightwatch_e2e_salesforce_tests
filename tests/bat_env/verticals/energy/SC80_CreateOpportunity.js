/*
 *
 *
 * 
 * 
*/
module.exports = {
    tags:['sc80_Test'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },

    '(AC-1) Creates opportunity record from Opportunity list view': function(browser) 
    {
        //Main menu Navigation to Opportunity
        var navMenu = browser.page.navigationMenu()
        //Navigage in Opportunity component
        let test = navMenu.section.opportunity
        
        navMenu
            .navigate()
            .click_navMenu()
            .click_navMenuOppo()
            .click_newOppoBtn()
            .pause(5000)
    
        console.log(Object.keys(test))
        test
            .populate_OpportunityName()
            .pause(1000)
            .provide_OpportunityAmount()
            .pause(1000)
            .provide_OpportunityAccount()
            .pause(1000)
            .provide_OpportunityAccountRecord()
            .pause(1000)
            .click_OpportunityCloseDate()
            .pause(1000)
            .click_OpportunityDatePicker()
            .pause(1000)
            .select_OpportunityCloseDate()
            .pause(5000)
            .select_OpportunityStage()
            .pause(100000)
        
        browser.end()
    }
}