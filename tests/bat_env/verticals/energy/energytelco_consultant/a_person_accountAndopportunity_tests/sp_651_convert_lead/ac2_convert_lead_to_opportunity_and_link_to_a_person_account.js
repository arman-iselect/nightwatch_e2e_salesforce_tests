module.exports = {
    tags: ['bat_sp_651_ac2', 'bat_sp_651' , 'sp_651'],

    'Log in as Energy Telco Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energytelcoConsultant.username, data.energy.bat.energytelcoConsultant.password);
    },
    
    'GIVEN I have selected a lead record and clicked on the "Convert Lead" button': function(browser) 
    {
        
    },

    'AND the Convert Lead page is displayed': function (browser) 
    {

    },
    
    'WHEN I select an existing person account from the displayed list': function (browser) 
    {
       
    },

    'AND select to convert the lead': function(browser) 
    {

    },

    'THEN the lead is converted to new opportunity and linked to the selected person account ': function (browser) 
    {
        
    },

    'OTHERWISE I can select cancel to close the page and the lead is not converted': function(browser)
    {

    }
};
