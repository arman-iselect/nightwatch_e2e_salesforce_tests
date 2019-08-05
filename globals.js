module.exports = {

    /* generation: ('exit', function(exitCode){
       console.log('Generation is finished with code:', exitCode)
     }), */
     
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
     
       before(cb) {
         console.log('Starting test')
         
         cb();
       },
     
       beforeEach(browser, cb) {
        //bat
        login = browser.page.logins.login_page()    
        energy_sales = browser.page.verticals.energy.energy_sales_page()
        search = browser.page.verticals.energy.a_person_accountAndopportunity_page.sp_650_global_search()
          /*if (search.verify.elementPresent('@errorMsg','Browser encounters error?'))
          {
            browser
              .refresh();
          }
            else 
            {

            }*/

         //console.log('GLOBAL beforeEach')
         cb();
       },
     
       after(cb) {
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