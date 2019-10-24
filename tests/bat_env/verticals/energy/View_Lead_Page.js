let selector = 'resultsItem';
let highlightPanelSelector= 'forceRecordLayout';
let highlightPanelButton ='forceActionsContainer';
let pageLayoutSelector ='forceDetailPanelDesktop';
module.exports = {
    tags:['View_Lead_Page'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login
            .userLogin('roger.cabatic@iselect.com.au.bat', 'Hyters123!@#');
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
                        .setValue('@searchField', 'Test1');
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
                            .setValue('@searchField', 'Test1')
                            .pause(10000);
                        browser
                            .keys(browser.Keys.ENTER)
                            .pause(8000);
                        }
            })
    },
    
    '(AC-1) WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
     
        browser
        .execute(function(selector) {
            let obj = 'Leads', object_value = 'weSelect test';
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
                            
                           /*
                            console.log('***** TR Start  ******');
                            console.log(getTabletag.childNodes[index].childNodes[1].childNodes[0].childNodes[2].hasAttribute('data-recordid'));
                            console.log('***** TR End  ******');
                            console.log(getTabletag.childNodes[index].childNodes[1].childNodes[0].childNodes[2].getAttribute('data-recordid'));
                            console.log('********************************************************************************************');    
                            console.log('***** get Span text Start  ******');
                            console.log(getTabletag.childNodes[index].childNodes[1].childNodes[0].textContent);
                            console.log('***** get Span text End  ******');
                            */
                            if(isOutsideLooping){
                                if(getTabletag.childNodes[index].childNodes[1].childNodes[0].textContent == object_value){
                                    if(getTabletag.childNodes[index].childNodes[1].childNodes[0].childNodes[2].hasAttribute('data-recordid')){
                                        returnvalue = getTabletag.childNodes[index].childNodes[1].childNodes[0].childNodes[2].getAttribute('data-recordid');
                                        isOutsideLooping = false;
                                        //break;
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
    },
    '(AC2- Check the highlight panel fields)'(browser){

        //let sss = leadConsultantlayout.Salesforce.highlightpanel;
        //console.log(sss);
       
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
                                /*
                                console.log('********************* No Plain *********************');
                                console.log(getHighlightPanelFieldSection.childNodes[index]);
                                console.log(getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].
                                    childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute('title'));
                                
                                    console.log(getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].childNodes[0]
                                    .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].textContent);
                                    
                                    console.log(getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].childNodes[0]
                                        .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0]);
                                */
                                    returnvalue.key1 = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].
                                    childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute('title');
                                    
                                    returnvalue.key2 = getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].childNodes[0]
                                        .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].textContent;
                                    
                                    arr.push(returnvalue);
                                                                            
                            }else{
                                /*
                                console.log('********************* Plain *********************');
                                console.log(getHighlightPanelFieldSection.childNodes[index]);
                                console.log(getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[0].textContent);
                                console.log(getHighlightPanelFieldSection.childNodes[index].childNodes[0].childNodes[1].textContent);
                                */

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
        });

    },
    '(AC2- Check the highlight panel button)'(browser){

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
        });
        
    },
    '(AC2- Check the page layout)'(browser){
        browser
        .execute(function(pageLayoutSelector) {
            let divContainerElementArray1 = document.getElementsByClassName(pageLayoutSelector);
            if(divContainerElementArray1[0].childNodes[1].childNodes[3].childNodes[0].childNodes.length>0){
                for(let indx =0; indx<= divContainerElementArray1[0].childNodes[1].childNodes[3].childNodes[0].childNodes.length -1 ; indx++){
                    
                    let dddd =divContainerElementArray1[0].childNodes[1].childNodes[3].childNodes[0].childNodes[indx].childNodes[1].childNodes[0].childNodes;
                    
                    if(dddd.length>0){
                        for(let innerindex = 0 ; innerindex<=dddd.length; innerindex++){
                            console.log(dddd[innerindex]);
                        } 
                    }
                    
                }

            }
        },
        [pageLayoutSelector],
        function(result) {
                 console.log(result.value);
                 browser.pause(100000000);  
        });
    }
}