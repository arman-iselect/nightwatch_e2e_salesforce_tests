module.exports = {
    tags:['SC_73'],
    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    'Close all browser': (browser)=>{
        utils.delete_all_maintabs(browser);
    },
    'AC1: Create and load opportunity record upon creation of person account': (browser)=>{
        
    },
    'AC2: Create and load opportunity record upon selection of person account': (browser)=>{
        
    },
    'AC3: Displayed opportunity page layout': (browser)=>{
        
    },
    'AC4: Ensure correct details are display in opportunity page': (browser)=>{
        
    },
    'AC5: Ensure the opportunity is linked to the person account': (browser)=>{
        
    }
}