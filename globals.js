fs = require('fs');
data = JSON.parse(fs.readFileSync("lib/logins/logins.json").toString());
energy = JSON.parse(fs.readFileSync("lib/verticals/energy/info.json".toString()));

const chromedriver = require('chromedriver');

module.exports = {
     
     waitForConditionTimeout: 10000,
 
     abortOnAssertionFailure: false,
 
     'default' : {
         myGlobal : function() {
           return 'I\'m a method';
         }
       },
     
       'test_env' : {
         myGlobal: 'test_global',
         beforeEach : function() {
         }
       },
     
       before(cb, done) {
         chromedriver.start();
         done();
         console.log('Starting test')
         
         
         cb();
       },
     
       beforeEach(browser, cb) {
        //bat
        login = browser.page.logins.login_page()    
        page = browser.page.logins.login_page()
        energy_sales = browser.page.verticals.energy.energy_sales_page()
        search = browser.page.verticals.energy.a_person_accountAndopportunity_page.sp_650_global_search()
        convert = browser.page.verticals.energy.a_person_accountAndopportunity_page.sp_651_convert_lead()
        account =  browser.page.verticals.energy.a_person_accountAndopportunity_page.sp_652_create_person_account_from_sidebar_search_or_accounts_list_view()
        login
            .waitForElementNotPresent('@errorMsg1', 2000 , function(result)
            {
              if (result.value)
              {
             
              }
                else
                {
                  browser
                    .refresh();
                }
              
            })

        login
            .waitForElementNotPresent('@errorMsg2', 2000 , function(result)
            {
              if (result.value)
              {
              
              }
                else
                {
                  browser
                    .refresh();
                }
              
            })

        login
            .waitForElementNotPresent('@errorMsg3', 2000, function(result)
              {
                if(result.value)
                {

                }
                  else
                  {
                    browser
                      .refresh();
                  }
              })
         //console.log('GLOBAL beforeEach')
         cb();
       },
     
       after(cb, done) {
         chromedriver.stop();
         done();
         console.log('Ending test')
         cb();
       },
     
       afterEach(browser, cb) {
           //console.log('GLOBAL afterEach')
           cb();
       },
     
       reporter(results, cb) {
         cb();
       }
     };