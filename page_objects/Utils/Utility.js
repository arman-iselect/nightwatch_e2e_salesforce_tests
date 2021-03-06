let selector = 'resultsItem';
let highlightPanelSelector= 'forceRecordLayout';
let highlightPanelButton ='forceActionsContainer';
let pageLayoutSelector ='forceDetailPanelDesktop';
let relatedListSelector ='forceRelatedListContainer';
let convertleadSelector = 'detailList';
let recordTabSelector = 'tabBar';
const url = function() {
    return 'https://test.salesforce.com/'
}

const commands = {}

commands['global_search_select_data'] = (browser, objName, nameSearch, baseUrl, expectedValue, selector)=>{
    return browser
    .execute(function(objName, nameSearch, baseUrl, expectedValue, selector) {
        let divContainerElementArray = document.getElementsByClassName(selector);
        let returnvalue;
        let isOutsideLooping =true;
        let headerCounter = 0;
    divContainerElementArray.forEach((element)=>{
        
        if(element.childNodes.length>0){
            let objectLabel = element.childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent;
            if(objectLabel == objName ){
                let getTabletag =element.childNodes[5].childNodes[1].childNodes[0].childNodes[0]
                                .childNodes[1].childNodes[1].childNodes[1].childNodes[0]
                                .childNodes[0].childNodes[3].childNodes[2];
                if(getTabletag.childNodes.length > 0){
                    for(var index =0; index <= getTabletag.childNodes.length - 1; index++ ){
                        if(isOutsideLooping){
                            if(getTabletag.childNodes[index].childNodes[1].childNodes[0].textContent == nameSearch){
                                if(getTabletag.childNodes[index].childNodes[1].childNodes[0].childNodes[2].hasAttribute('data-recordid')){
                                    returnvalue = getTabletag.childNodes[index].childNodes[1].childNodes[0].childNodes[2].getAttribute('data-recordid');
                                    isOutsideLooping = false;
                                }
                            }
                        }                                                               
                    }
                }
            }
        }
       });  
       let retVal = {
           exValue:expectedValue,
            actValue:returnvalue,
            baseUrl:baseUrl
       } 
    return retVal;
},
[objName, nameSearch, baseUrl, expectedValue, selector],
function(result) {
            let recordlink =result.value.baseUrl+result.value.actValue;
            
            browser
            .url(recordlink).pause(10000);
            
            utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_afterredirect_global_search.png');
       });
}

commands['validation_highlightpanel_field']=(browser,selector,expectedValue,ObjName)=>{
    
    return browser
    .execute(function(selector,expectedValue,ObjName) {
        let divContainerElementArray1 = document.getElementsByClassName(selector);
        let arr = new Array();
        if(divContainerElementArray1.length>0){
            let getCorrectObject;
            divContainerElementArray1.forEach((element)=>{
                element.classList.forEach((getClass)=>{
                    if(getClass=='slds-page-header_record-home'){
                        
                        let getPanelObjectName = element.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent;
                        if(getPanelObjectName == ObjName){
                            getCorrectObject = element;
                        }
                    }
                })
            });

            //HighlightPanelView
            let getHighlightPanelFieldSection = getCorrectObject.childNodes[1];
            if(getHighlightPanelFieldSection.childNodes.length>0 ){
                for(let index=0; index<getHighlightPanelFieldSection.childNodes.length; index++){
                        let returnvalue={
                            key1: '',
                            key2: ''
                        };
                        if(getHighlightPanelFieldSection.childNodes[index].childNodes[0].classList.contains('uiMenu')){
                           
                                returnvalue.key1 = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].
                                childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute('title');
                                
                                returnvalue.key2 = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].childNodes[0]
                                    .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].textContent;
                                
                                arr.push(returnvalue);
                                                                        
                        }else{
                         
                            returnvalue.key1 = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].textContent;

                            returnvalue.key2 = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[1].textContent;
                            
                            arr.push(returnvalue);
                        }
                        
                        
                }
            }
        }
        let retArrWrapper = {
            dataArrary:arr,
            expectedVal:expectedValue
        }
        return retArrWrapper;
        //return arr;
    },
    [selector,expectedValue,ObjName],
    function(result) {
            //Expected value
            console.log(result);
            let highlightpanelFieldArr = result.value.expectedVal.split(';');
            //Actual value
            let actualValue = result.value.dataArrary;
             for(let index=0; index<=highlightpanelFieldArr.length -1; index++){
                 let isConditionMatch="false";
                for(let i =0; i<=actualValue.length -1; i++){
                    if(isConditionMatch=="false"){
                        if(actualValue[i].key1 == highlightpanelFieldArr[index]){
                            isConditionMatch= "true";
                        }
                    }
                }
                browser.assert.equal(isConditionMatch, "true");
                isConditionMatch="false";
             }
             utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_highlightpanelField.png');
    });

}

commands['validation_highlightpanel_button'] = (browser,selector,expectedValue,ObjName)=>{
    return browser
    .execute(function(selector,expectedValue,ObjName) {
        let divContainerElementArray1 = document.getElementsByClassName(selector);

        let arr = new Array();
        if(divContainerElementArray1.length>0){
            let getCorrectObject;
            divContainerElementArray1.forEach((element)=>{

                element.classList.forEach((getClass)=>{
                    if(getClass=='slds-page-header_record-home'){
                        
                        let getPanelObjectName = element.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent;
                        if(getPanelObjectName == ObjName){
                            getCorrectObject = element;
                            console.log('**** Yeah *****');
                            console.log(element);
                        }
                        
                    }
                })
               
            });
            //HighlightPanelView
            //let getHighlightPanelButtonSection = divContainerElementArray1[0].childNodes[0].childNodes[1].childNodes[3];
            let getHighlightPanelButtonSection = getCorrectObject.childNodes[0].childNodes[1].childNodes[3];
            //Follow button
        /*   
        if(divContainerElementArray1[0].childNodes[0].childNodes[1].childNodes[1].textContent=='Follow'){
            arr.push(divContainerElementArray1[0].childNodes[0].childNodes[1].childNodes[1].textContent);
        }
        */
         
        if(getCorrectObject.childNodes[0].childNodes[1].childNodes[1].textContent=='Follow'){
            arr.push(getCorrectObject.childNodes[0].childNodes[1].childNodes[1].textContent);
        }
       
            //console.log(getHighlightPanelButtonSection.childNodes);
            for(let index = 0; index<=getHighlightPanelButtonSection.childNodes.length - 1; index++ ){
                //if(getHighlightPanelButtonSection.childNodes[index].tagName =='LI'){
                    //console.log('*********** Test *********');
                    //console.log(getHighlightPanelButtonSection.childNodes[index].textContent);
                    arr.push(getHighlightPanelButtonSection.childNodes[index].textContent);
                //}
            }
        }
        let retArrWrapper = {
            dataArrary:arr,
            expectedVal:expectedValue
        }
        return retArrWrapper;
    },
    [selector,expectedValue,ObjName],
    function(result) {
             console.log(result.value); 
             //Expected value
             //let highlightpanelButton = leadConsultantlayout.Salesforce.Lead.highlightpanelButton.split(';');
             let highlightpanelButton = result.value.expectedVal.split(';');
             //Actual value
            let actualValue = result.value.dataArrary;
            for(let index=0; index<=highlightpanelButton.length -1; index++){
                let isConditionMatch="false";
               for(let i =0; i<=actualValue.length -1; i++){
                   if(isConditionMatch=="false"){
                       if(actualValue[i] == highlightpanelButton[index]){
                           isConditionMatch= "true";
                       }
                   }
               }
               browser.assert.equal(isConditionMatch, "true");
               isConditionMatch="false";
            }
            utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_highlightpanelButton.png');
    });
}

let sections = {
    opportunity: {
      selector: `//*[contains(text(),'Opportunity')]/../../../../../../../../..//div[@class='flexipageBaseRecordHomeTemplateDesktop']`,
      locateStrategy: 'xpath',
      elements: {
        x0: {
          selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Opportunity Owner')]`,
          locateStrategy: 'xpath'
        },
        x1: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Opportunity Name')]`,
            locateStrategy: 'xpath'
        },
        x2: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Stage')]`,
            locateStrategy: 'xpath'
        },
        x3: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'WeSelect Notes')]`,
            locateStrategy: 'xpath'
        },
        x4: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Reason')]`,
            locateStrategy: 'xpath'
        },
        x5: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Probability (%)')]`,
            locateStrategy: 'xpath'
        },
        x6: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'External Reference Number')]`,
            locateStrategy: 'xpath'
        },
        x7: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Prospect ID')]`,
            locateStrategy: 'xpath'
        },
        x8: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Client Services Consultant')]`,
            locateStrategy: 'xpath'
        },
        x9: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Referrer')]`,
            locateStrategy: 'xpath'
        },
        x10: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Cross Sale Type')]`,
            locateStrategy: 'xpath'
        },
        x11: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Transfer Type')]`,
            locateStrategy: 'xpath'
        },
        x12: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Callback Schedule')]`,
            locateStrategy: 'xpath'
        },
        x13: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Opportunity Record Type')]`,
            locateStrategy: 'xpath'
        },
        x14: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Amount')]`,
            locateStrategy: 'xpath'
        },
        x15: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Close Date')]`,
            locateStrategy: 'xpath'
        },
        x16: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'JIRA URL')]`,
            locateStrategy: 'xpath'
        },
        x17: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Lead Source')]`,
            locateStrategy: 'xpath'
        },
        x18: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Media Source')]`,
            locateStrategy: 'xpath'
        },
        x19: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Brand')]`,
            locateStrategy: 'xpath'
        },
        x20: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Related Opportunity')]`,
            locateStrategy: 'xpath'
        },
        x21: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Account Name')]`,
            locateStrategy: 'xpath'
        },
        x22: {
            selector: `//span[@class='test-id__field-label']/..//*[contains(text(), 'Business Vertical')]`,
            locateStrategy: 'xpath'
        }
      }, 
      commands: [commands]
    }
  }
  
  commands['populate_OpportunityName'] = function(objName, fieldName) {
    for(let i=0; i<23; i++){
        this
        .waitForElementVisible(`@x${i}`,100)
        .pause(100)
    }
  }

commands['new_validation_pagelayout_field'] = (browser)=>{
let sss="//*[contains(text(),'Person Account')]/../../../../../../../../../..//div[@class='flexipageBaseRecordHomeTemplateDesktop']//span[@class='test-id__field-label']/..//*[contains(text(), 'Account Name')]";
/*
let practiceYeah = utils.sections.opportunity;
    practiceYeah.populate_OpportunityName();
*/

}


commands['validation_pagelayout'] = (browser,selector,expectedValue)=>{
    return browser
    .execute(function(selector,expectedValue) {
        let arr = new Array();
        let objectNameChecker = expectedValue.split('--')[0];
        let getIndex = 0;
        if(objectNameChecker=='Opportunity'){
            getIndex=1;
        }
        let divContainerElementArray1 = document.getElementsByClassName(selector);
        if(divContainerElementArray1[getIndex].childNodes[1].childNodes[3].childNodes[0].childNodes.length>0){
            for(let indx =0; indx<= divContainerElementArray1[getIndex].childNodes[1].childNodes[3].childNodes[0].childNodes.length -1 ; indx++){
                
                let motherElement =divContainerElementArray1[getIndex].childNodes[1].childNodes[3].childNodes[0].childNodes[indx].childNodes[1].childNodes[0].childNodes;
               
                if(motherElement.length>0){
                    for(let innerindex = 0 ; innerindex<=motherElement.length - 1; innerindex++){
                        for(let dataIndex =0; dataIndex<= motherElement[innerindex].childNodes.length -1; dataIndex++ ){
                            let returnvalue={
                                fieldName: '',
                                fieldValue: ''
                            };
                            let getFieldName = motherElement[innerindex].childNodes[dataIndex].childNodes[0].childNodes[0].childNodes[0].textContent;
                            if(getFieldName!=null && getFieldName!=''){
                                let getFieldValue = motherElement[innerindex].childNodes[dataIndex].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent;
                                returnvalue.fieldName = getFieldName;
                                returnvalue.fieldValue = getFieldValue;
                                returnvalue.isEditable = '';
                                arr.push(returnvalue);
                            }
                            
                        }
                    } 
                }
                
            }

        }
        
        let retArrWrapper = {
            dataArray:arr,
            expectedVal:expectedValue.split('--')[1]
        }
        return retArrWrapper;
    },
    [selector,expectedValue],
    function(result) {
             console.log(result.value);
             //browser.pause(10000000);
             //Expected value
             //let pagelayoutFields = leadConsultantlayout.Salesforce.Lead.pagelayoutfield.split(';');
             let pagelayoutFields = result.value.expectedVal.split(';');
             //Actual value
            let actualValue = result.value.dataArray;
            for(let index=0; index<=pagelayoutFields.length -1; index++){
                let isConditionMatch="false";
               for(let i =0; i<=actualValue.length -1; i++){
                   if(isConditionMatch=="false"){
                       if(actualValue[i].fieldName == pagelayoutFields[index]){
                           isConditionMatch= "true";
                       }
                   }
               }
               browser.assert.equal(isConditionMatch, "true");
               isConditionMatch="false";
            }
            utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_pageLayout.png');
    });
}

commands['validation_relatedlist'] = (browser,selector,expectedValue)=>{
    
   return  browser
    .execute(function(selector,expectedValue) {
        let divContainerElementArray1 = document.getElementsByClassName('forceRelatedListContainer');
        let objectNameChecker = expectedValue.split('--')[0];
        let arr = new Array();
        let relatedlistsection;
        let getIndex = 0;
        if(objectNameChecker=='Opportunity'){
            getIndex=1;
        }
        relatedlistsection = divContainerElementArray1[getIndex].childNodes[0].childNodes;
        let nextNode=0;
        for(let i = 0; i<= relatedlistsection.length - 1; i++){
            if(i == nextNode){
                console.log(relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0]);
                let getRelatedListName = relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].textContent;
                
                arr.push(getRelatedListName);
                nextNode = nextNode + 4;
            }
        }
        let retArrWrapper = {
            dataArray:arr,
            expectedVal:expectedValue.split('--')[1]
        }
        return retArrWrapper;
    },
    [selector,expectedValue],
    function(result) {
            console.log(result);
             //Expected value
             //let pagelayoutFields = leadConsultantlayout.Salesforce.Lead.pagelayoutfield.split(';');
             let pagelayoutFields = result.value.expectedVal.split(';');
           
             //Actual value
            let actualValue = result.value.dataArray;
            for(let index=0; index<=pagelayoutFields.length - 1; index++){
                let isConditionMatch="false";
               for(let i =0; i<=actualValue.length -1; i++){
                   if(isConditionMatch=="false"){
                       if(actualValue[i] == pagelayoutFields[index]){
                           isConditionMatch= "true";
                       }
                   }
               }
               browser.assert.equal(isConditionMatch, "true");
               isConditionMatch="false";
            }
            utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_relatedList.png');
    });
    
}

commands['global_search'] = (browser,searchString)=>{
    return search
    .waitForElementVisible('@searchField', 10000 , function(result)
    {
        console.log(result.value);
        if (result.value)
        {   
            utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_beforeGlobalSearchInputValue.png');
            search.pause(10000)
            .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                .setValue('@searchField', searchString);
            browser
                .keys(browser.Keys.ENTER)
                .pause(5000);
            utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_afterGlobalSearchInputValue.png');
        }
            else
                {
                browser
                    .refresh().pause(50000);
                utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_beforeGlobalSearchInputValue.png');
                search
                    .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                    .setValue('@searchField', searchString)
                    .pause(10000);
                browser
                    .keys(browser.Keys.ENTER)
                    .pause(8000);
                utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_afterGlobalSearchInputValue.png');
                }
    })
};

commands['validation_convert_lead_page'] = (browser, expectedValue)=>{
    return browser
    .pause(10000)
    .frame(0)
    .execute(function(convertleadSelector,expectedValue) {

        //dislaimer field
        let getDisclaimerText = document.getElementsByClassName('bPageTitle')[0].parentElement;
        let arrDisclaimerText = new Array();
        
        arrDisclaimerText.push(getDisclaimerText.childNodes[26].data);
        arrDisclaimerText.push(getDisclaimerText.childNodes[28].data);
        arrDisclaimerText.push(getDisclaimerText.childNodes[30].data);

        let divContainerElementArray1 = document.getElementsByClassName(convertleadSelector);
        let arr = new Array();
        //Convert Lead
        let rowFieldName  = divContainerElementArray1[0].childNodes[0].childNodes[0].childNodes[0].textContent;
        let rowFieldValue  = divContainerElementArray1[0].childNodes[0].childNodes[0].childNodes[1].textContent;

        arr.push(rowFieldName);
        //Lead Details
        let rowFieldName1  = divContainerElementArray1[1].childNodes[0].childNodes[0].childNodes[0].textContent;
        let rowFieldValue1  = divContainerElementArray1[1].childNodes[0].childNodes[0].childNodes[1].textContent;

        let rowFieldName2  = divContainerElementArray1[1].childNodes[0].childNodes[0].childNodes[2].textContent;
        let rowFieldValue2  = divContainerElementArray1[1].childNodes[0].childNodes[0].childNodes[3].textContent;

        let rowFieldName3  = divContainerElementArray1[1].childNodes[0].childNodes[1].childNodes[0].textContent;
        let rowFieldValue3  = divContainerElementArray1[1].childNodes[0].childNodes[1].childNodes[1].textContent;
        

        let rowFieldName4  = divContainerElementArray1[1].childNodes[0].childNodes[1].childNodes[2].textContent;
        let rowFieldValue4  = divContainerElementArray1[1].childNodes[0].childNodes[1].childNodes[3].textContent;

       
        let rowFieldName5  = divContainerElementArray1[1].childNodes[0].childNodes[2].childNodes[0].textContent;
        let rowFieldValue5  = divContainerElementArray1[1].childNodes[0].childNodes[2].childNodes[1].textContent;
        

        let rowFieldName6  = divContainerElementArray1[1].childNodes[0].childNodes[2].childNodes[2].textContent;
        let rowFieldValue6  = divContainerElementArray1[1].childNodes[0].childNodes[2].childNodes[3].textContent;


        let rowFieldName7  = divContainerElementArray1[1].childNodes[0].childNodes[3].childNodes[0].textContent;
        let rowFieldValue7  = divContainerElementArray1[1].childNodes[0].childNodes[3].childNodes[1].textContent;

        let rowFieldName8  = divContainerElementArray1[1].childNodes[0].childNodes[4].childNodes[0].textContent;
        let rowFieldValue8  = divContainerElementArray1[1].childNodes[0].childNodes[4].childNodes[1].textContent;
        
       arr.push(rowFieldName1);
       arr.push(rowFieldName2);
       arr.push(rowFieldName3);
       arr.push(rowFieldName4);
       arr.push(rowFieldName5);
       arr.push(rowFieldName6);
       arr.push(rowFieldName7);
       arr.push(rowFieldName8);

        //Account result

        let divContainerElementArray2 = document.getElementsByClassName('list');
        let accountResultTableRow = divContainerElementArray2[0].childNodes[2].childNodes.length;
        
        let datawrapper = {
            disclamerTextArr:arrDisclaimerText,
            fieldNamesArr :arr,
            searchAccountRowCount: accountResultTableRow
        }
        
        let retArrWrapper = {
            dataArrary:datawrapper,
            expectedVal:expectedValue
        }
        return retArrWrapper;
        
       //return arr;
    },
    [convertleadSelector,expectedValue],
    function(result) {
            console.log(result);
            //Expected value
            let highlightpanelFieldArr = result.value.expectedVal.split(';');
            //Actual value
            let actualValue = result.value.dataArrary.fieldNamesArr;
             for(let index=0; index<=highlightpanelFieldArr.length -1; index++){
                 let isConditionMatch="false";
                for(let i =0; i<=actualValue.length -1; i++){
                    if(isConditionMatch=="false"){
                        if(actualValue[i] == highlightpanelFieldArr[index]){
                            isConditionMatch= "true";
                        }
                    }
                }
                browser.assert.equal(isConditionMatch, "true");
                isConditionMatch="false";
             }
             let actualValue1 = result.value.dataArrary.searchAccountRowCount;
            browser.assert.notEqual(actualValue1, 0);

           //check if convertbutton is visible
             browser.isVisible('input[value="Convert"]', results=>{
                if (results.value) {  }

                else {  }
             });
           //check if cancel button is visible
           browser.isVisible('input[value="Cancel"]', results=>{
            if (results.value) { }

            else { }
            });

            //Disclaimer Text checker
            let disclaimerTextArray = result.value.dataArrary.disclamerTextArr;
            
            browser.assert.equal('Leads can be converted to accounts, contacts, opportunities, and follow up tasks.',disclaimerTextArray[0].replace(/[\n\r]/g,'').replace('    ',''));
            browser.assert.equal('You should only convert a lead once you have identified it as qualified.',disclaimerTextArray[1].replace(/[\n\r]/g,'').replace('    ',''));
            browser.assert.equal('After this lead has been converted, it can no longer be viewed or edited as a lead, but can be viewed in lead reports.',disclaimerTextArray[2].replace(/[\n\r]/g,'').replace('    ',''));
            utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_ConvertLeadPage.png');
    });

}

commands['upload_files'] = (browser, fileloc, inputfilepath,donebtnclickpath)=>{
    utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_beforeFileUpload.png');
    browser.useXpath()
    .setValue(inputfilepath, fileloc)
    .pause(5000).useXpath().click(donebtnclickpath);
    utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_afterFileUpload.png');
}

commands['delete_all_maintabs']=(browser)=>{
    return browser.pause(10000)
    .execute(function(recordTabSelector) {
        let getAppName = document.getElementsByClassName('appName')[0].textContent;
        let divContainerElementArray1 = document.getElementsByClassName(recordTabSelector);
        let ariaLabel = 'Workspace tabs for '+getAppName;
        let arr = new Array();
        let navBarNode ;
        if(divContainerElementArray1.length>0){
            for(let index=0; index<=divContainerElementArray1.length - 1; index++){
                console.log(divContainerElementArray1[index]);
                console.log(divContainerElementArray1[index].ariaLabel);
                let getariaLabel = divContainerElementArray1[index].ariaLabel
                if(getariaLabel==ariaLabel){
                    let latestNode = divContainerElementArray1[index].childNodes;
                    navBarNode = latestNode;
                    
                    
                }
            }

            let tabBarNode;
            for(let index = 0; index<=navBarNode.length -1;index++){
                let currNode =navBarNode[index];
                if(currNode.tagName=="UL"){
                    currNode.classList.forEach((classStr)=>{
                        if(classStr=='tabBarItems'){
                            tabBarNode = currNode;
                        }
                    });
                    
                }
            }
            
            
            tabBarNode.childNodes.forEach((currNode)=>{
                if(currNode.classList!=undefined){
                    currNode.classList.forEach((classStr)=>{
                        if(classStr=='tabItem'){
                            currNode.childNodes.forEach((eachItem)=>{
                                if(eachItem.tagName == 'A'){
                                    let getTitle = 'button[title="Close '+eachItem.title+'"]';
                                    arr.push(getTitle);
                                }
                            })
                        }
                    })
                }
            })
        }
        let retArrWrapper = {
            dataArray:arr
        }
        return retArrWrapper;
    },
    [recordTabSelector],
    function(result) {
            let dataArr = result.value.dataArray;
            if(dataArr!=undefined){
                for(let i=0; i<=dataArr.length -1 ; i++){
                    browser.click(dataArr[i]).pause(1000);
                }
            }
    });

}

commands['save_ScreenShot']=(browser, path)=>{
    return browser
    .saveScreenshot(path);
}

commands['checkisRibbonActive']=(browse, status)=>{
    browser.assert.cssClassPresent("ul.slds-path__nav li[data-name=\""+status+"\"]", "slds-is-active");
}

commands['convertLeadNewPersonAccount']=(browser)=>{

}

commands['convertLeadExistingPersonAccount']=(browser)=>{

}

commands['checkOpporunityAccountRelationship']= (browser,selector,expectedValue,ObjName,fieldName)=>{
    
    return browser
    .execute(function(selector,expectedValue,ObjName,fieldName) {
        let divContainerElementArray1 = document.getElementsByClassName(selector);
        let arr = new Array();
        let returnvalue='';
        if(divContainerElementArray1.length>0){
            let getCorrectObject;
            divContainerElementArray1.forEach((element)=>{
                element.classList.forEach((getClass)=>{
                    if(getClass=='slds-page-header_record-home'){
                        
                        let getPanelObjectName = element.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent;
                        if(getPanelObjectName == ObjName){
                            getCorrectObject = element;
                        }
                    }
                })
            });

            //HighlightPanelView
            let getHighlightPanelFieldSection = getCorrectObject.childNodes[1];
            if(getHighlightPanelFieldSection.childNodes.length>0 ){
                for(let index=0; index<getHighlightPanelFieldSection.childNodes.length; index++){
                        if(getHighlightPanelFieldSection.childNodes[index].childNodes[0].classList.contains('uiMenu')){
                           
                                let actualfieldName = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].
                                childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute('title');
                                
                                let actualfieldValue = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].childNodes[0]
                                    .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].textContent;
                                

                                console.log(getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].childNodes[0]
                                    .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0]);                                    
                                if(fieldName == actualfieldName){
                                    returnvalue= actualfieldValue;
                                }                                        
                        }else{
                         
                            let actualfieldName = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].textContent;

                            let actualfieldValue = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[1].textContent;
                            

                            console.log(getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[1]);
                            if(fieldName == actualfieldName){
                                returnvalue= actualfieldValue;
                            }         
                        }
                        
                        
                }
            }
        }
        let retArrWrapper = {
            dataArrary:returnvalue,
            expectedVal:expectedValue
        }
        return retArrWrapper;
        //return arr;
    },
    [selector,expectedValue,ObjName,fieldName],
    function(result) {
            console.log(result);
            let actualValue = result.value.dataArrary;
            let expectedValue = result.value.expectedVal;
            browser.assert.equal(actualValue, expectedValue);
            utils.save_ScreenShot(browser,'reports/bat_env/verticals/energy/ss_highlightpanelField.png');
    });

}

commands['navigateToNeedsAnalysisPage']=(browser)=>{
    let expectedValue,selector;
    return browser
    .execute(function(selector,expectedValue) {
        let divContainerElementArray1 = document.getElementsByClassName('tabBar');

        let noOfelement = divContainerElementArray1.length;
        let selectedsubtab, tabBarItems=null, tabCount =0;;
        if(noOfelement>0){
            for(let index=0; index < noOfelement; index++){
                let element = divContainerElementArray1[index].classList;
                for(let classIndex =0; classIndex<element.length; classIndex++){
                    if(element[classIndex]=='slds-sub-tabs'){
                        selectedsubtab = divContainerElementArray1[index];
                    }
                }
            }

            for(let index=0; index < selectedsubtab.childNodes.length; index++){
                let element = selectedsubtab.childNodes[index].classList;
                if(element!=undefined){
                    if(tabBarItems==null){
                        for(let classIndex =0; classIndex<element.length; classIndex++){
                            if(element[classIndex]=='tabBarItems'){
                                tabBarItems = selectedsubtab.childNodes[index];
                            }
                        }
                    }
                }
            }

            for(let index=0; index < tabBarItems.childNodes.length; index++){
                let element = tabBarItems.childNodes[index].classList;
                if(element!=undefined){
                    let istabItem=false;
                    for(let classIndex =0; classIndex<element.length; classIndex++){
                        if(element[classIndex]=='tabItem'){
                            //tabCount = tabCount + 1;
                            istabItem=true;
                        }
                    }
                    if(istabItem){
                        let elementTabName = tabBarItems.childNodes[index].childNodes[0].getAttribute('title');
                        console.log(elementTabName);
                        if(!elementTabName.includes('Needs_Analysis__c')){
                            tabCount = tabCount + 1;
                        }
                    }
                }
            }
            let retArrWrapper = {
                dataArray:tabCount
            }
            return retArrWrapper;

        }
    },
    [selector,expectedValue],
    function(result) {
            console.log(result);
            browser
            .useXpath()
            .click("/html/body/div[5]/div[1]/div[2]/div[2]/div/div/div/section["+result.value.dataArray+"]/div/div[2]/div/div/div/div[1]/div/div[3]/div[1]/div/div/div/div[1]/article/div[2]/div/div/ul/li/a")
            .pause(4000);
             
    });
}

commands['needsAnalysisCheckLeadSourceIfDisable'] =(browser, expectedValue,frameNumber)=>{
return browser.frame(frameNumber)
.execute(function(selector,expectedValue) {
    //let divContainerElementArray1 = document.getElementById('needAnalysisPageId:needAnalysisformId:yourUsageId');
    let divContainerElementArray1 = document.getElementsByName('needAnalysisPageId:needAnalysisformId:j_id44');
    
    console.log('Testasdsadsad:');
    console.log(divContainerElementArray1);

    
        let retArrWrapper = {
            actualValue:divContainerElementArray1[0].disabled,
            expectedVal:expectedValue
        }
        return retArrWrapper;
        
    
},
[selector,expectedValue],
function(result) {
        console.log(result);
        let actual = result.value.actualValue;
        let expectedValue = result.value.expectedVal;
        browser.assert.equal(actual, expectedValue).pause(2000);
         
});
}
commands['click_NeedAnalysisRecord'] = (browser,selector,expectedValue,relatedListName,needsSelectedRow)=>{ 
    return  browser
    .execute(function(selector,expectedValue,relatedListName,needsSelectedRow) {
        let divContainerElementArray1 = document.getElementsByClassName('forceRelatedListContainer');
        let objectNameChecker = expectedValue.split('--')[0];
        let arr ;
        let relatedlistsection;
        let getIndex = 0;
        if(objectNameChecker=='Opportunity'){
            getIndex=1;
        }
        relatedlistsection = divContainerElementArray1[getIndex].childNodes[0].childNodes;
        let nextNode=0;
        let relatedListSection;
        for(let i = 0; i<= relatedlistsection.length - 1; i++){
            if(i == nextNode){
                console.log(relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0]);
                let getRelatedListName = relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].textContent;
                
                //arr.push(getRelatedListName);
                if(relatedListName== getRelatedListName){
                    relatedListSection = relatedlistsection[i].childNodes[1].childNodes[3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[2];
                }
                nextNode = nextNode + 4;
            }
        }
        for(let tbodyIndex =0; tbodyIndex<=relatedListSection.childNodes.length - 1; tbodyIndex++){
            let selectedRow = tbodyIndex+1;
            if(needsSelectedRow ==selectedRow){
                arr = relatedListSection.childNodes[tbodyIndex].childNodes[0].childNodes[0].childNodes[2].getAttribute('data-recordid');
            }
        }
        let retArrWrapper = {
            dataArray:arr,
            expectedVal:expectedValue.split('--')[1]
        }
        return retArrWrapper;
    },
    [selector,expectedValue,relatedListName,needsSelectedRow],
    function(result) {
            console.log(result);
            browser.click('a[data-recordid="'+result.value.dataArray+'"]').pause(5000);

    });
}

commands['checkRibbonStatus']=(browser, status)=>{
    browser.assert.cssClassPresent('ul.slds-path__nav li[data-name="'+status+'"]', "slds-is-active");
}

commands['ribbonStatusValidation']= (browser,expectedValue)=>{
    return  browser
    .execute(function(selector,expectedValue) {
        let divContainerElementArray1 = document.getElementsByClassName('slds-path__nav');
        let arr= new Array();
        for(let index =0; index<= divContainerElementArray1[0].childNodes.length -1 ; index++){
            let ribbonStatusName= divContainerElementArray1[0].childNodes[index].textContent;
            if(ribbonStatusName!=null&& ribbonStatusName!='' && ribbonStatusName!=undefined){
                arr.push(ribbonStatusName);
            }
            
        }


        let retArrWrapper = {
            dataArray:arr,
            expectedVal:expectedValue
        }
        return retArrWrapper;
    },
    [selector,expectedValue],
    function(result) {
            console.log(result);
            
            let expected = result.value.expectedVal.split(';');
           
             //Actual value
            let actualValue = result.value.dataArray;
            for(let index=0; index<=expected.length - 1; index++){
                let isConditionMatch="false";
               for(let i =0; i<=actualValue.length -1; i++){
                   if(isConditionMatch=="false"){
                       if(actualValue[i] == expected[index]){
                           isConditionMatch= "true";
                       }
                   }
               }
               browser.assert.equal(isConditionMatch, "true");
               isConditionMatch="false";
            }

    });
}

commands['relatedlistChecknumofRecords']=(browser, expectedValue, relatedListName, objectName)=>{
    return  browser
    .execute(function(selector,expectedValue,relatedListName,objectName) {
        let divContainerElementArray1 = document.getElementsByClassName('forceRelatedListContainer');
        console.log(divContainerElementArray1); 
        let arr ;
        let relatedlistsection;
        let getIndex = 0;
        if(objectName=='Opportunity'){
            getIndex=1;
        }
        relatedlistsection = divContainerElementArray1[getIndex].childNodes[0].childNodes;
        let nextNode=0;
        let relatedListSection;
        for(let i = 0; i<= relatedlistsection.length - 1; i++){
            if(i == nextNode){
                console.log(relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0]);
                let getRelatedListName = relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].textContent;
                
                //arr.push(getRelatedListName);
                if(relatedListName== getRelatedListName){
                    let numberofRecords = relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].textContent.replace('(','').replace(')','');
                    arr =numberofRecords ;
                }
                nextNode = nextNode + 4;
            }
        }
        let retArrWrapper = {
            dataArray:arr,
            expectedVal:expectedValue
        }
        return retArrWrapper;
    },
    [selector,expectedValue,relatedListName,objectName],
    function(result) {
            console.log(result);
            let isMorethenzero = "false";
            if(result.value.dataArray>result.value.expectedVal){
                isMorethenzero="true";
            }else{
                isMorethenzero="false";
            }
            browser.assert.equal(isMorethenzero, "true");
    });
}
module.exports = {

    url: url,
    elements: {
        navMenu:'button[class=\"slds-button slds-button_icon slds-p-horizontal__xxx-small slds-button_icon-small slds-button_icon-container\"]',
        navLeadMenu:'a[href="/lightning/o/Lead/home"]',
        secNeedsAnalysis: {
        selector:`//h2//a//span[@title='Needs Analysis']`,
        locateStrategy:'xpath'
                },
        pathRecNeedsAnalysis:{
        selector:`//tbody//tr[1]//th//span//a`,
        locateStrategy:'xpath'
                },
        pathViewRecommendation: {
        selector:`//table//tbody//tr[1]//td//a[contains(text(),'View Recommendation')]`,
        locateStrategy:'xpath'
                },
        pathBpidRequest:{
        selector:`//tbody//tr[1]//td[6]//button[5]`,
        locateStrategy:'xpath'
                }
            },
    sections: sections,
    commands: [commands]



}