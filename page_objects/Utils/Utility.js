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
const elements = {
    username: '#username',
    password: '#password',
    refresh: 'dasdasdasd',
    loginbtn: '#Login',
    errorMsg1: 'div[class="modal-header slds-modal__header slds-theme--info slds-theme--alert-texture"]',
    errorMsg2: 'div[class="auraErrorBox"]',
    errorMsg3: '[class="summary"]',
    errorMsg4: '',
    errorMsg4: 'div[class="modal-header slds-modal__header"]',
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
                    for(var index =0; index < getTabletag.childNodes.length - 1; index++ ){
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

       });
}

commands['validation_highlightpanel_field']=(browser,selector,expectedValue)=>{
    
    return browser
    .execute(function(selector,expectedValue) {
        let divContainerElementArray1 = document.getElementsByClassName(selector);
        let arr = new Array();
        if(divContainerElementArray1.length>0){
            //HighlightPanelView
            let getHighlightPanelFieldSection = divContainerElementArray1[0].childNodes[1];
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
    [selector,expectedValue],
    function(result) {
            //Expected value
            //let highlightpanelFieldArr = leadConsultantlayout.Salesforce.Lead.highlightpanelfield.split(';');
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
             
             console.log(highlightpanelFieldArr);
    });

}

commands['validation_highlightpanel_button'] = (browser,selector,expectedValue)=>{
    return browser
    .execute(function(selector,expectedValue) {
        let divContainerElementArray1 = document.getElementsByClassName(selector);

        let arr = new Array();
        if(divContainerElementArray1.length>0){
            //HighlightPanelView
            let getHighlightPanelButtonSection = divContainerElementArray1[0].childNodes[0].childNodes[1].childNodes[3];
            //Follow button
            
        if(divContainerElementArray1[0].childNodes[0].childNodes[1].childNodes[1].textContent=='Follow'){
            arr.push(divContainerElementArray1[0].childNodes[0].childNodes[1].childNodes[1].textContent);
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
    [selector,expectedValue],
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
    });
}

commands['validation_pagelayout'] = (browser,selector,expectedValue)=>{
    return browser
    .execute(function(selector,expectedValue) {
        let divContainerElementArray1 = document.getElementsByClassName(selector);
        let arr = new Array();
        if(divContainerElementArray1[0].childNodes[1].childNodes[3].childNodes[0].childNodes.length>0){
            for(let indx =0; indx<= divContainerElementArray1[0].childNodes[1].childNodes[3].childNodes[0].childNodes.length -1 ; indx++){
                
                let motherElement =divContainerElementArray1[0].childNodes[1].childNodes[3].childNodes[0].childNodes[indx].childNodes[1].childNodes[0].childNodes;
               
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
            expectedVal:expectedValue
        }
        return retArrWrapper;
    },
    [selector,expectedValue],
    function(result) {
             console.log(result.value);
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
             console.log(pagelayoutFields);
    });
}

commands['validation_relatedlist'] = (browser,selector,expectedValue)=>{
    
   return  browser
    .execute(function(selector,expectedValue) {
        let divContainerElementArray1 = document.getElementsByClassName(selector);
       
        let arr = new Array();
        let relatedlistsection = divContainerElementArray1[0].childNodes[0].childNodes;
        let nextNode=0;
        for(let i = 0; i<= relatedlistsection.length - 1; i++){
            if(i == nextNode){
                let getRelatedListName = relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].textContent;
                
                arr.push(getRelatedListName);
                nextNode = nextNode + 4;
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
    });
    
}

commands['global_search'] = (browser,searchString)=>{
    return search
    .waitForElementVisible('@searchField', 10000 , function(result)
    {
        console.log(result.value);
        if (result.value)
        {
            search.pause(10000)
            .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                .setValue('@searchField', searchString);
            browser
                .keys(browser.Keys.ENTER)
                .pause(5000);
        }
            else
                {
                browser
                    .refresh().pause(50000);
                search
                    .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                    .setValue('@searchField', searchString)
                    .pause(10000);
                browser
                    .keys(browser.Keys.ENTER)
                    .pause(8000);
                }
    })
};

commands['validation_convert_Lead_page'] = (browser)=>{
    return  browser
    .execute(function(selector,expectedValue) {
        let divContainerElementArray1 = document.getElementsByClassName('');
       
        let arr = new Array();
        let relatedlistsection = divContainerElementArray1[0].childNodes[0].childNodes;
        let nextNode=0;
        for(let i = 0; i<= relatedlistsection.length - 1; i++){
            if(i == nextNode){
                let getRelatedListName = relatedlistsection[i].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].textContent;
                
                arr.push(getRelatedListName);
                nextNode = nextNode + 4;
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
             //Expected value
             //let pagelayoutFields = leadConsultantlayout.Salesforce.Lead.pagelayoutfield.split(';');
             let pagelayoutFields = result.value.expectedVal.split(';');
           
             //Actual value
            let actualValue = result.value.dataArray;
            for(let index=0; index<=pagelayoutFields.length - 1; index++){
                let isConditionMatch="false";
                console.log('isConditionMatch:'+isConditionMatch);
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
    });
}

commands['validation_convert_lead'] = (browser, expectedValue)=>{
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
            
    });

}

commands['upload_files'] = (browser, fileloc, inputfilepath,donebtnclickpath)=>{
    browser.useXpath()
    .setValue(inputfilepath, fileloc)
    .pause(5000).useXpath().click(donebtnclickpath);
}
module.exports = {

    url: url,
    elements: elements,
    commands: [commands]

}