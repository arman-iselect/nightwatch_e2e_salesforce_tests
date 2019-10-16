module.exports = {
    url: 'https://iselect--bat.lightning.force.com/lightning/o/Lead/list?filterName=Recent',
    elements: {
        //Lead Creation
        newLead: '[title="New"]',
        newleadNext: 'button[class="slds-button slds-button--neutral slds-button slds-button_brand uiButton"]',
        businessverticalDropdown: 'div.slds-gutters_small:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
            broadband: '[title=\"Broadband\"]',
            life: '[title=\"Life\"]',
            generalinsurance: '[title=\"General Insurance\"]',
            telco: '[title=\"Telco\"]',
            energy: '[title=\"Energy\"]',
            health: '[title=\"Health\"]',
            hc: '[title=\"Home & Contents\"]',
        salutationDropdown: '.salutation',
        salutationMr: 'li.uiMenuItem:nth-child(4) > a:nth-child(1)',
        firstName: 'input[class=\"firstName compoundBorderBottom form-element__row input\"]',
        lastName: 'input[class=\"lastName compoundBorderBottom form-element__row input\"]',
        email: 'input[type=\"email\"]',
        leadsourceDropdown: 'div.slds-gutters_small:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
        leadsourceIselect: 'li.uiMenuItem:nth-child(13) > a:nth-child(1)',
        save: 'button[class=\"slds-button slds-button--neutral uiButton--brand uiButton forceActionButton\"]',
        leadName: 'th[tabindex=\"-1\"]',
        businessVertical: 'td[data-aura-rendered-by=\"3149:0\"]',
        emailhome: 'td[data-aura-rendered-by=\"3175:0\"]',

        //Lead List View
        leadlistSearch: 'input[placeholder=\"Search this list...\"]',
        matchedLead: lead.testdata.lead_selector,
        leadsearchResult: 'table:nth-child(4) > th.slds-cell-edit:nth-child(2)',
        recentLead: 'a:contains("Test Lead Conversion")',

        searchField: 'input[placeholder=\"Search Leads and more\"]',
        convertLead: '[title=\"Convert Lead\"]',
        searchResult: 'ul[class=\"lookup__list  visible\"]',
        recentItems: '[role=\"option\"]',
        pageDescription: '[class=\"Energy Automated Test1\"]',
        primaryObjects: 'div[class="resultsItem slds-col slds-no-flex slds-card"]',
        selectedTab: 'span[class="title slds-truncate"]',
        newAccount: 'input[id=\"New\"]',
        convertleadBtn: 'input',
        objectA: '[class=\"slds-page-header__title slds-text-color--default slds-show--inline-block uiOutputURL\"]',
        tab0: '[data-tabid=\"ctab0\"]',
        topResults: '[title="Top Results"]',
        changeNav: '[class=\"slds-context-bar__icon-action\"]',
        reportsSec: '[title="Reports"]',
        accountSec: '[title="Accounts"]',
        leadsSec: '[title="Leads"]',
        pageResult: 'a[class="slds-truncate outputLookupLink slds-truncate forceOutputLookup"]',
        viewMore: 'div[class="viewMore"]',
        hyperlinkText: '[title="Test001"]',
        profileWrap: 'div[class="profilePicWrapper slds-media slds-no-space"]',
        opportunitiesSec: '[title="Opportunities"]',
        expandList: '[class="slds-button navExpandToggle slds-text-link slds-size_1-of-1 slds-text-align_left slds-p-vertical_xx-small slds-m-left_xx-small"]',
        energySales: 'div[id=\"00e28000002Rqzb_ProfileName\"]',
        viewUsers: 'div[title=\"View Users\"]',
        dontgiveUp: 'div[class=\"slds-text-heading--large noResultsTitle slds-p-bottom--large\"]',
        weSearched: 'div[class=\"slds-p-bottom--large\"]',
        tips: 'div[class=\"tips\"]',
        errorMsg: 'div[class="error strength_3 pOne uiMessage forceMessage"]',
        
    },

    commands: [{

        //Lead Creation
        click_newLead() {
            return this
            .click('newLead');
        },

        //Lead list search
        click_leadlistSearch() {
            return this
            .click('leadlistSearch');
        },

        click_recentLead() {
            return this
            .click('recentLead');
        },

        click_searchField() {
            return this
            .click('@searchField');
        },

        click_leadsearchResult() {
            return this
            .click('leadsearchResult');
        },

        click_matchedSearch() {
            return this
            .click('matchedSearch')
        },

        click_convertLead() {
            return this
            .click('@convertLead');
        },

        click_navDropdown() {
            return this
            .click('@navDropdown');
        },

        click_leadDropdown() {
            return this
            .click('@leadDropdown');
        },

        click_newLead() {
            return this
            .click('@newLead');
        },
        
        click_next(){
            return this
            .click('@next');
        },

        click_salutationDropdown() {
            return this
            .click('@salutationDropdown');
        },

        click_salutationMr() {
            return this
            .click('@salutationMr');
        },

        click_leadsourceDropdown() {
            return this
            .click('@leadsourceDropdown');
        },

        click_leadsourceIselect() {
            return this
            .click('@leadsourceIselect');
        },

        click_save() {
            return this
            .click('@save');
        },

        click_businessverticalDropdown() {
            return this
            .click('@businessverticalDropdown');
        },

        click_energy() {
            return this
            .click('@energy');
        }
    }]
};

