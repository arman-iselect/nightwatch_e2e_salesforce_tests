module.exports = {
    url: 'https://iselect--bat.lightning.force.com/lightning/o/Account/list?filterName=Recent',
    elements: {
        navDropdown: '#oneHeader > div.bBottom > div > div.slds-context-bar__primary.navLeft > div.navMenu.slds-context-bar__item--divider-right.oneAppNavMenu > div > button > lightning-primitive-icon > svg',
        leadDropdown: '#navMenuList > div > ul > li:nth-child(2) > div > a',
        selected: 'a.slds-p-left--xx-small',
        newLead: '#split-left > div > div > div > div > div.slds-page-header--object-home.slds-page-header_joined.slds-page-header_bleed.slds-page-header.slds-shrink-none.test-headerRegion.forceListViewManagerHeader > div:nth-child(1) > div.slds-col.slds-no-flex.slds-grid.slds-align-top.slds-p-bottom--xx-small.test-lvmForceActionsContainer > ul > li:nth-child(1) > a',
        next: '.slds-button_brand',

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
        leadsourceDropdown: 'div.slds-gutters_small:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
        leadsourceIselect: 'li.uiMenuItem:nth-child(13) > a:nth-child(1)',
        save: 'button[class=\"slds-button slds-button--neutral uiButton--brand uiButton forceActionButton\"]',
        newAccount: '[title="New"]',
        leadName: 'th[tabindex=\"-1\"]',
        businessVertical: 'td[data-aura-rendered-by=\"3149:0\"]',
        emailhome: 'td[data-aura-rendered-by=\"3175:0\"]',
        contactMethod: '#\32 47\:1214\;a > div > a',
        emailPreferred: 'li.uiMenuItem:nth-child(2)',
    },

    commands: [{

        click_navDropdown() {
            return this
            .click('@navDropdown');
        },

        click_contactMethod() {
            return this
            .click('@contactMethod');
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