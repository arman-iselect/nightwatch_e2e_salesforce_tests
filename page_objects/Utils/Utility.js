let selector = 'resultsItem';
let highlightPanelSelector= 'forceRecordLayout';
let highlightPanelButton ='forceActionsContainer';
let pageLayoutSelector ='forceDetailPanelDesktop';
let relatedListSelector ='forceRelatedListContainer';
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
                                console.log(element.childNodes[5].childNodes[1].childNodes[0].childNodes[0]
                                    .childNodes[1].childNodes[1].childNodes[1].childNodes[0]
                                    .childNodes[0].childNodes[3].childNodes[2]);
                                    console.log(getTabletag.childNodes.length);
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
        console.log('validation_highlightpanel_field');
        console.log(selector);
        let arr = new Array();
        if(divContainerElementArray1.length>0){
            //HighlightPanelView
            let getHighlightPanelFieldSection = divContainerElementArray1[0].childNodes[1];
            
            if(getHighlightPanelFieldSection.childNodes.length>0 ){
                for(let index=0; index<getHighlightPanelFieldSection.childNodes.length; index++){
                        console.log(getHighlightPanelFieldSection.childNodes[index].childNodes[0].classList.contains('uiMenu'));
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
            console.log(result);
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
                console.log(getRelatedListName);
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
                console.log(getRelatedListName);
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

module.exports = {

    url: url,
    elements: elements,
    commands: [commands]

}