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
//Command to click Oppotunity from the Navigation Menu
commands['click_navMenuOppo'] = function(){
  return this
  .waitForElementVisible('@navOppoMenu',5000)
  .pause(5000)
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_navMenuOppo.png')
  .click('@navOppoMenu')
}
//Command to click Oppotunity from the Navigation Menu
commands['click_navMenuLead'] = function(){
  return this
  .waitForElementVisible('@navLeadMenu',5000)
  .pause(5000)
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_navMenuLead.png')
  .click('@navLeadMenu')
}
//Command to click New Button of Opportunity to navigate to New Opportunity Record
commands['click_newOppoBtn'] = function(){
  return this
  .waitForElementVisible('@navOppoNewBtn',5000)
  .pause(5000)
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_newOppoBtn.png')
  .click('@navOppoNewBtn')
}

//Command to populate Opportunity Name in Opportunity Record
commands['populate_OpportunityName'] = function() {
  return this
  .waitForElementVisible('@provideOppName',5000)
  .setValue('@provideOppName', 'Eu Rey Cadag')
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/populate_OpportunityName.png')
  .pause(1000)
}

//Command to populate Opportunity Amount in Opportunity Record
commands['provide_OpportunityAmount'] = function(){
  return this
  .waitForElementVisible('@provideOppoAmount',5000)
  .setValue('@provideOppoAmount', 5000)
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/provide_OpportunityAmount.png')
  .pause(1000)
}
//Command to populate Opportunity Account Lookup in Opportunity Record
commands['provide_OpportunityAccount'] = function(){
  return this
  .waitForElementVisible('@provideAccountName',5000)
  .click('@provideAccountName')
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/provide_OpportunityAccount.png')
  .pause(1000)
}

//Command to populate Opportunity Account Lookup in Opportunity Record
commands['provide_OpportunityAccountRecord'] = function(){
  return this
  .waitForElementVisible('@itemAccountRecordSelect',5000)
  .click('@itemAccountRecordSelect')
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/provide_OpportunityAccountRecord.png')
  .pause(1000)
}
//Command to populate Opportunity Close Date in Opportunity Record
commands['click_OpportunityCloseDate'] = function(){
  return this
  .waitForElementVisible('@provideCloseDate',5000)
  .click('@provideCloseDate')
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_OpportunityCloseDate.png')
  .pause(1000)
}

//Command to populate Opportunity Close Date in Opportunity Record
commands['click_OpportunityDatePicker'] = function(){
  return this
  .waitForElementVisible('@itemCloseDateRecordSelect',5000)
  .click('@itemCloseDateRecordSelect')
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/click_OpportunityDatePicker.png')
  .pause(1000)
}

//Command to select Close Date in Opportunity Record
commands['select_OpportunityCloseDate'] = function(){
  return this
  .waitForElementVisible('@selectCloseDate',5000)
  .click('@selectCloseDate')
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/selectCloseDate.png')
  .pause(1000)
}

//Command to select Stage in Opportunity Record
commands['select_OpportunityStage'] = function(){
  return this
  .waitForElementVisible('@clickStage',5000)
  .click('@clickStage')
  
  //.setValue('a','New')
  .saveScreenshot('reports/bat_env/verticals/Opportunity Component/clickStage.png')
  .pause(1000)

  Browser.Keys.DOWN
}

//Command to select Stage New in Opportunity Record
commands['select_OpportunityStageNew'] = function(){
  return this
  .waitForElementVisible('@clickStageNew',5000)
  .pause(5000)
  //.click('@clickStageNew')
  //.setValue('aria-checked', 'true')
  .setValue('class', 'selected')
  //.saveScreenshot('reports/bat_env/verticals/Opportunity Component/clickStageNew.png')
  .pause(1000)
}

let sections = {
        opportunity: {
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
        navOppoMenu: 'a[href="/lightning/o/Opportunity/home"]',
        navLeadMenu: 'a[href="/lightning/o/Lead/home"]',
        navOppoNewBtn: {
            selector: '//*[@id="split-left"]/div/div/div/div/div[1]/div[1]/div[2]/ul/li/a',
            locateStrategy: 'xpath'
        },
        inputOpportunityName:{
          selector: "//h2[contains(text(), 'New Opportunity: Energy')]/..",
          locateStratery: 'xpath'
        }
    },

    sections: sections,

    commands: [commands]

};

