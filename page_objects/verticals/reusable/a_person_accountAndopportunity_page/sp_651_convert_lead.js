module.exports = {
    url: 'https://iselect--bat.lightning.force.com/lightning/o/Report/home?queryScope=mru',
    elements: {
        searchField: 'input[placeholder=\"Search Salesforce\"]',
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

        click_changeNav() {
            return this
            .click('@changeNav');
        },
        
        click_viewMore() {
            return this
            .click('@viewMore');
        },

        click_hyperlinkText() {
            return this
            .click('@hyperlinkText');
        },

        click_expandList() {
            return this
            .click('@expandList');
        },

        click_reportsSec() {
            return this
            .click('@reportsSec');
        },

        click_searchResult() {
            return this
            .click('@searchResult');
        },

        click_accountSec() {
            return this
            .click('@accountSec');
        },

        click_leadsSec() {
            return this
            .click('@leadsSec');
        },

        click_opportunitiesSec() {
            return this
            .click('@opportunitiesSec');
        },

        click_searchField() {
            return this
            .click('@searchField');
        },

        click_convertLead() {
            return this
            .click('@convertLead');
        },
        click_profiles() {
            return this
            .click('@profilesDropdown');
        },

        click_tab0() {
            return this
            .click('@tab0');
        },

        click_newAccount() {
            return this
            .click('@newAccount');
        }
    }]
};

