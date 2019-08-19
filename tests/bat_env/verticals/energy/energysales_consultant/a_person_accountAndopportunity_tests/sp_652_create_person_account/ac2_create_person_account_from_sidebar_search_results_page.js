module.exports = {
    tags: ['bat_sp_652_ac1', 'bat_sp_652' , 'sp_652', 'bat_energysales_sp_652_ac2'],

    'Login Bat Credentials': function(browser) 
    {
        console.log('Go to Salesforce Login Test URL and Enter Bat Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.bat.username)
            .setValue('@password', data.salesforce.bat.password)
            .click_loginbtn();
    },

    'Log in as Energy Consultant QA': function(browser) 
    {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.bat.energysalesConsultant.loginTest);
    },
    
    'GIVEN I am viewing the Sidebar search results from': function(browser) 
    {
        browser
            .url('https://iselect--bat.lightning.force.com/lightning/page/home');
        
        browser
            .elements('css selector', 'iframe', function(elements)
            {
                elements.value.forEach(function(element)
                {
                    browser.elementIdAttribute(element.Element, 'name' , function(attribute){
                        console.log(attribute.value)
                        browser
                            .frame(attribute.value)
                            .pause(3000)
                            account
                                .waitForElementPresent('@inputfirstName', 15000, function (result)
                            {
                                if (result.value)
                            {
                                    account
                                        .setValue('@inputfirstName', energy.account_info.first_name)
                                        .setValue('@inputlastName', energy.account_info.last_name)
                                        .setValue('@inputEmail', energy.account_info.email)
                                    browser
                                        .keys(browser.Keys.ENTER)
                            }
                                        else
                                        {
                                        console.log('Refreshing the browser')
                                            browser
                                                .refresh()
                                            account
                                                .waitForElementPresent('@inputfirstName', 15000)
                                                .setValue('@inputfirstName', energy.account_info.first_name)
                                                .setValue('@inputlastName', energy.account_info.last_name)
                                                .setValue('@inputEmail', energy.account_info.email)
                                            browser
                                                .keys(browser.Keys.ENTER)
                                        }             
                            })
                    });
                });
            });
        

    },
    
    'AND I have selected to create a new person account via the "Create New Contact"': function (browser) 
    {
        account
            .waitForElementPresent('@sidebarResults', 15000, function(result)
                {
                    if (result.value)
                    {
                        browser
                            .useXpath().click('/html/body/form/div[2]/div/div[2]/div/table/tbody/tr[10]/td[1]/a[1]/i/b') 
                    }
                        else
                            {
                                console.log('Refreshing the page')
                                browser
                                    .refresh()
                                account
                                    .waitForElementPresent('@sidebarResults', 15000)
                                browser
                                    .useXpath().click('/html/body/form/div[2]/div/div[2]/div/table/tbody/tr[10]/td[1]/a[1]/i/b') 
                            }
                })
    },

    'WHEN I have entered at least the Last Name (optionally First Name, Phone Number, and Email Address) and hit the Save button': function (browser) 
    {
       

    },

    'THEN a new person account is created':function (browser)
    {
        
    },

    'AND I shall be able to view the person account page tab as a default': function(browser)
    {
       
    },

    'AND I can view that the details that I have entered are correctly populated to the person account': function(browser)
    {
        
    },

    'OTHERWISE if there are mandatory fields not populated, an error message shall be displayed AND I shall not be able to proceed any further': function(browser)
    {
        
    }
};