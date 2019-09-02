module.exports = {
    url: 'https://iselect--bat.lightning.force.com/lightning/o/Account/list?filterName=Recent',
    elements: {
        waffle: 'div[class="slds-icon-waffle"]',
        navDropdown: '#oneHeader > div.bBottom > div > div.slds-context-bar__primary.navLeft > div.navMenu.slds-context-bar__item--divider-right.oneAppNavMenu > div > button > lightning-primitive-icon > svg',
        leadDropdown: '#navMenuList > div > ul > li:nth-child(2) > div > a',
        selected: 'a.slds-p-left--xx-small',
        newLead: '#split-left > div > div > div > div > div.slds-page-header--object-home.slds-page-header_joined.slds-page-header_bleed.slds-page-header.slds-shrink-none.test-headerRegion.forceListViewManagerHeader > div:nth-child(1) > div.slds-col.slds-no-flex.slds-grid.slds-align-top.slds-p-bottom--xx-small.test-lvmForceActionsContainer > ul > li:nth-child(1) > a',
        next: '.slds-button_brand',
        inputlastName: 'input[name="j_id0:contactDetails:j_id32:j_id36:j_id38"]',
        searched: 'div[id="container"]',
        businessverticalDropdown: 'div.slds-gutters_small:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
            broadband: '[title=\"Broadband\"]',
            life: '[title=\"Life\"]',
            generalinsurance: '[title=\"General Insurance\"]',
            telco: '[title=\"Telco\"]',
            energy: '[title=\"Energy\"]',
            health: '[title=\"Health\"]',
            hc: '[title=\"Home & Contents\"]',
        searchthisList: 'input[placeholder=\"Search this list...\"]',
        salutationDropdown: '.salutation',
        salutationMr: 'li.uiMenuItem:nth-child(4) > a:nth-child(1)',
        tabDefault: '[title=\"Energy Telco Automated Test0\"]',
        closeTab: '[title="Close Energy Automated Test0"]',
        telcocloseTab: '[title="Close Energy Telco Automated Test0"]',
        closenewTab: '[title="Close New Account: Person Account"]',
        firstName: 'input[class=\"firstName compoundBorderBottom form-element__row input\"]',
        lastName: 'input[class=\"lastName compoundBorderBottom form-element__row input\"]',
        email: 'input[type=\"email\"]',
        leadsourceDropdown: 'div.slds-gutters_small:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
        leadsourceIselect: 'li.uiMenuItem:nth-child(13) > a:nth-child(1)',
        save: 'button[class=\"slds-button slds-button--neutral uiButton--brand uiButton forceActionButton\"]',
        newAccount: '[title="New"]',
        leadName: 'th[tabindex=\"-1\"]',
        businessVertical: 'td[data-aura-rendered-by=\"3149:0\"]',
        emailhome: 'td[data-aura-rendered-by=\"3175:0\"]',
        contactMethod: '.pageBlockItemEditWithTooltip > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)',
        homePhone: 'input[type="tel"]',
        emailPreferred: '[title="Email"]',
        detailsInfo: 'div[class="slds-form-element__control slds-grid itemBody"]',
        personaccountTitle: '[title=\"Energy Automated Test0\"]',
        telcopersonaccountTitle: '[title=\"Energy Automated Test0\"]',
        tabTitle: '[title=\"Energy Telco Automated Test0\"]',
        selectedTab: 'span[class="title slds-truncate"]',
        tabPresent: 'li[class="tabItem slds-context-bar__item slds-context-bar__item_tab slds-is-active active hasActions hideAnimation  oneConsoleTabItem"]',
        emailPresent: '[class="emailuiFormattedEmail"]',
        edit: 'div[title="Edit"]',
        oppoName: '[class="uiInput uiInputText uiInput--default uiInput--input"]',
        inputfirstName: '#first',
        inputlastName: '#last',
        inputEmail: '#email',
        sidebarResults: 'div[class="bPageBlock brandSecondaryBrd apexDefaultPageBlock secondaryPalette"]',
        iframe: '.iframe-parent > iframe:nth-child(1)',
        sidebarresultsLastname: 'td.first:nth-child(4)',
        personaccountName: 'div[class="slds-page-header__title slds-m-right--small slds-align-middle fade-text"]',
        relatedlistTab: '[data-tab-name="relatedListsTab"]',
        sidebarSearch: '[title="Sidebar Search"]',
        detailstabRight: '[data-tab-name="detailTab"]',
        relatedOpportunities: '[title="Opportunities"]',
        relatedQuotes: '[title="Quotes"]',
        relatedOrders: '[title="Orders"]',
        relatedProducts: '[title="Products"]',
        relatedDevices: '[title="Devices"]',
        relatedEnquiries: '[title="Enquiries"]',
        relatedNotes: '[title="Notes"]',
        relatednotesAttachments: '[title="Notes & Attachments"]',
        activityTab: '[title="Activity"]',
        activitynewEvent: '[title="New Event"]',
        activitylogaCall: '[title="Log a Call"]',
        detailsTab: '[title="Edit Preferred Contact Method"]',
        detailsfirstName: '[class="firstName compoundBorderBottom form-element__row input"]',
        detailslastName: '[class="lastName compoundBorderBottom form-element__row input"]',
        detailsEmail: 'input[type=\"email\"]',
        detailspreferredContact: '.pageBlockItemEditWithTooltip',
        detailspreferredEmail: 'li.uiMenuItem:nth-child(2) > a:nth-child(1)',
        detailsSave: '[title="Save"]',
        detailsInfo: 'div[class="slds-col slds-grid slds-has-flexi-truncate  full forcePageBlockItem forcePageBlockItemView"]',
        detailsinfoEmail: '[class="emailuiFormattedEmail"]',


    },

    commands: [{

        click_navDropdown() {
            return this
            .click('@navDropdown');
        },
        click_closeTab() {
            return this
            .click('@closeTab');
        },

        click_telcocloseTab() {
            return this
            .click('@telcocloseTab');
        },

        click_closenewTab() {
            return this
            .click('@closenewTab');
        },
        
        click_activityTab() {
            return this
            .click('@activityTab');
        },
        click_detailsSave() {
            return this
            .click('@detailsSave')
        },

        click_detailspreferredContact() {
            return this
            .click('@detailspreferredContact');
        },

        click_detailspreferredEmail () {
            return this
            .click('@detailspreferredEmail');
        },

        click_contactMethod() {
            return this
            .click('@contactMethod');
        },
        click_detailsTab() {
            return this
            .click('@detailsTab');
        },
        click_emailPreferred() {
            return this
            .click('@emailPreferred');
        },

        click_newAccount() {
            return this
            .click('@newAccount');
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