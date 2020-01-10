/*
 *
 *
 * 
 * 
*/

//List of commands to perform Opportunity record creation
let commands = {};

//This command is to click Main Navigation Menu
commands['click_navMenu'] = function(){
  return this
  .waitForElementVisible('@navMenu',5000)
  .pause(5000)
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_navMenu.png')
  .click('@navMenu')
}
//Command to click Lead from the Navigation Menu
commands['click_navMenuLead'] = function(){
  return this
  .waitForElementVisible('@navLeadMenu',5000)
  .pause(5000)
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_navMenuLead.png')
  .click('@navLeadMenu')
}
//Command to click Lead from the Navigation Menu
commands['click_navMenuLeadListView'] = function(){
    return this
    .waitForElementVisible('@navLeadMenuListView',5000)
    .pause(5000)
    .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_navMenuLeadListView.png')
    .click('@navLeadMenuListView')
}
//Command to click Lead from the Navigation Menu
commands['click_navMenuLeadListViewEnergyLeadRecords'] = function(){
    return this
    .waitForElementVisible('@navLeadMenuListViewEnergyLeadRecords',5000)
    .pause(5000)
    .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_navMenuLeadListView.png')
    .click('@navLeadMenuListViewEnergyLeadRecords')
}
//Command to click Lead from the Navigation Menu
commands['click_navMenuLeadListViewLeadRecord'] = function(){
    return this
    .waitForElementVisible('@navLeadMenuListViewLeadRecord',5000)
    .pause(5000)
    .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_navMenuLeadListViewLeadRecord.png')
    .click('@navLeadMenuListViewLeadRecord')
}

commands['click_convertLead'] = function(){
    return this
    .waitForElementVisible('@navConvertLeadBtn',5000)
    .pause(5000)
    .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_convertLead.png')
    .click('@navConvertLeadBtn')
}

commands['click_CreateNewAcct'] = function(){
    return this
    .waitForElementVisible('@navConvertLeadCreateNewAcct',10000)
    .pause(5000)
    .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_CreateNewAcct.png')
    .click('@navConvertLeadCreateNewAcct')
}


let sections = {
        lead: {
          selector: `//h2[contains(text(), 'New Opportunity:')]/..`,
          locateStrategy: 'xpath',
          elements: {
            provideOppName: {
              selector: `//span[contains(text(), 'Opportunity Name')]/../../input`,
              locateStrategy: 'xpath'
            },
            provideOppoAmount:{
              selector: `//span[contains(text(), 'Amount')]/../../input`,
              locateStrategy: 'xpath'
            },
            provideAccountName:{
              selector: `//input[@title='Search Accounts']`,
              locateStrategy: 'xpath'
            },
            itemAccountRecordSelect:{
              selector: `//input[@title='Search Accounts']/..//ul//li[1]`,
              locateStrategy: 'xpath'
            },
            provideCloseDate:{
              selector: `//span[contains(text(), 'Close Date')]/../..//input`,
              locateStrategy: 'xpath'
            },
            itemCloseDateRecordSelect:{
              selector: `//span[contains(text(), 'Close Date')]/../..//*[contains(text(), 'Date Picker')]/..`,
              locateStrategy: 'xpath'
            },
            // selectClodeDateYear:{
            //   selector: `//div[@class='uiDatePickerGrid--default uiDatePickerGrid']//td[@aria-selected='true']`,
            //   locateStrategy: 'xpath'
            // },
            selectCloseDate:{
              selector: `//div[@class='uiDatePickerGrid--default uiDatePickerGrid']//td[@aria-selected='true']`,
              locateStrategy: 'xpath'
            },
            clickStage:{
              selector: `//span[contains(text(),'Stage')]/../..//a[contains(text(),'--None--')]`,
              locateStrategy: 'xpath'
            },
            clickStageNew:{
              //selector: `//li[@role='presentation']//a[@title='New']`,
              selector: `//li[@role='presentation']//a[@title='New']`,
              locateStrategy: 'xpath'
            }
          },
          
          commands: [commands]
        }
      }


module.exports = {
    url: 'https://iselect--bat.lightning.force.com/lightning/page/home',
    elements: {
        navMenu:'button[class=\"slds-button slds-button_icon slds-p-horizontal__xxx-small slds-button_icon-small slds-button_icon-container\"]',
        navLeadMenu: 'a[href="/lightning/o/Lead/home"]',
        navLeadMenuListView: {
            selector: '//h1[@class=\'slds-truncate slds-page-header__title slds-text-color--default\']',
            locateStrategy: 'xpath'
        },
        navLeadMenuListViewEnergyLeadRecords: {
            selector: '//li/a/span[contains(text(),\'Energy Lead Records\')]',
            locateStrategy: 'xpath'
        },
        navLeadMenuListViewLeadRecord: {
            selector: '//tbody/tr[1]/th/span/a',
            locateStrategy: 'xpath'
        },
        navConvertLeadBtn: {
            selector: '//ul/li/a/div[@title=\'Convert Lead\']',
            locateStrategy: 'xpath'
        },
        navConvertLeadCreateNewAcct: {
            //selector: '//span/input[@id=\'new\']',
            selector: '//div/div/table/tbody/tr/td/table/tbody/tr/td/span/input[@id=\'new\']',
            locateStrategy: 'xpath'
        }
    },

    sections: sections,

    commands: [commands]

};

