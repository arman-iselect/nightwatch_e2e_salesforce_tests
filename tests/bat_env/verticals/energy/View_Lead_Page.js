let selector = 'resultsItem';
let highlightPanelSelector= 'forceRecordLayout';
let highlightPanelButton ='forceActionsContainer';
let pageLayoutSelector ='forceDetailPanelDesktop';
module.exports = {
    tags:['View_Lead_Page'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);

            //.userLogin('roger.cabatic@iselect.com.au.bat', 'Hyters123!@#');
    },
    '(AC-1) GIVEN that the results page is displayed': function(browser) 
    {
        search
            .waitForElementVisible('@searchField', 10000 , function(result)
            {
                console.log(result.value);
                if (result.value)
                {
                    search.pause(10000)
                    .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                        .setValue('@searchField', 'Howie Newbie');
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
                            .setValue('@searchField', 'Howie Newbie')
                            .pause(10000);
                        browser
                            .keys(browser.Keys.ENTER)
                            .pause(8000);
                        }
            })
    },
    
    '(AC-1) WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
        
        utils.global_search_select_data(browser,  'Leads', 'Howie Newbie', 'https://iselect--bat.lightning.force.com/', null, 'resultsItem');
        /*
        browser
        .execute(function(selector) {
            let obj = 'Leads', object_value = 'Howie Newbie';
            let divContainerElementArray = document.getElementsByClassName(selector);
            let returnvalue;
            let isOutsideLooping =true;
            let headerCounter = 0;
        divContainerElementArray.forEach((element)=>{
            
            if(element.childNodes.length>0){
                let objectLabel = element.childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent;
                console.log(objectLabel);
                if(objectLabel == obj ){
                    let getTabletag =element.childNodes[5].childNodes[1].childNodes[0].childNodes[0]
                                    .childNodes[1].childNodes[1].childNodes[1].childNodes[0]
                                    .childNodes[0].childNodes[3].childNodes[2];
                                    console.log(element.childNodes[5].childNodes[1].childNodes[0].childNodes[0]
                                        .childNodes[1].childNodes[1].childNodes[1].childNodes[0]
                                        .childNodes[0].childNodes[3].childNodes[2]);
                                        console.log(getTabletag.childNodes.length);
                    if(getTabletag.childNodes.length > 0){
                        console.log('Yeah 1');
                        for(var index =0; index < getTabletag.childNodes.length - 1; index++ ){
                            if(isOutsideLooping){
                                if(getTabletag.childNodes[index].childNodes[1].childNodes[0].textContent == object_value){
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
        return returnvalue;
    },
    [selector],
    function(result) {
                let recordlink ='https://iselect--bat.lightning.force.com/'+result.value;
                browser
                .url(recordlink).pause(10000);

           });
    */
    },
    '(AC2- Check the highlight panel fields)'(browser){

        //let sss = leadConsultantlayout.Salesforce.highlightpanel;
        //console.log(sss);
        utils.validation_highlightpanel_field(browser,'forceRecordLayout',leadConsultantlayout.Salesforce.Lead.highlightpanelfield);
        /*
        browser
        .execute(function(highlightPanelSelector) {
            let divContainerElementArray1 = document.getElementsByClassName(highlightPanelSelector);
            
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
            
            return arr;
        },
        [highlightPanelSelector],
        function(result) {
                console.log(result);
                //Expected value
                let highlightpanelFieldArr = leadConsultantlayout.Salesforce.Lead.highlightpanelfield.split(';');
                 
                //Actual value
                let actualValue = result.value;
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
        */
    },
    '(AC2- Check the highlight panel button)'(browser){
        utils.validation_highlightpanel_button(browser,highlightPanelSelector,leadConsultantlayout.Salesforce.Lead.highlightpanelButton);
        /*
        browser
        .execute(function(highlightPanelSelector) {
            let divContainerElementArray1 = document.getElementsByClassName(highlightPanelSelector);

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
            
            return arr;
        },
        [highlightPanelSelector],
        function(result) {
                 console.log(result.value); 
                 //Expected value
                 let highlightpanelButton = leadConsultantlayout.Salesforce.Lead.highlightpanelButton.split(';');
                 //Actual value
                let actualValue = result.value;
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
                 console.log(highlightpanelButton);
        });
        */
    },
    '(AC2- Check the page layout)'(browser){
       utils.validation_pagelayout(browser,pageLayoutSelector,leadConsultantlayout.Salesforce.Lead.pagelayoutfield);
       /* 
        browser
        .execute(function(pageLayoutSelector) {
            let divContainerElementArray1 = document.getElementsByClassName(pageLayoutSelector);
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
                                console.log(motherElement[innerindex].childNodes[dataIndex]);
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
            return arr;
        },
        [pageLayoutSelector],
        function(result) {
                 console.log(result.value);
                 //Expected value
                 let pagelayoutFields = leadConsultantlayout.Salesforce.Lead.pagelayoutfield.split(';');
                 //Actual value
                let actualValue = result.value;
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
                 browser.pause(100000000);  
        });
        */
    },
    '(AC2- Check the related list)'(browser){

    },
    '(AC 4- Press convert lead button)'(browser){
        
    }
    
}