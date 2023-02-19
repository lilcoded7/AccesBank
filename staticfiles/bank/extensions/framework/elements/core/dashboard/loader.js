define('text!extensions/framework/elements/core/dashboard/dashboard.html', [], function() {
    return '<!-- ko let: {$dashboard : getDashboardContext(), $oj: oj, $baseModel: $properties.baseModel, $formatter: $properties.formatter, $root: $properties.rootModel}--><div class="dashboard"><a class="skip-main" href="#maincontent" tabindex="0" data-bind="text:locale.skipToMainContent"></a><div class="oj-offcanvas-outer-wrapper oj-offcanvas-page"><nav class="main-menu oj-offcanvas-start" id="innerDrawer"><!-- ko if: $properties.rootModel.menuNavigationAvailable--><obdx-menu root-model="[[$properties.rootModel]]" base-model="[[$properties.baseModel]]" dashboard="{{$dashboard}}" formatter="[[$properties.formatter]]" compute-context="[[$properties.rootModel.computeContext]]" menu-option-select="[[menuOptionSelect]]" change-menu-state="[[changeMenuState]]" filter-menu="[[filterMenu]]"></obdx-menu><!-- /ko --></nav><div id="endDrawer" class="right-overlay-panel oj-offcanvas-end oj-offcanvas-overlay-shadow"><!-- ko if : rightPanelData.isOpen() --><div class="oj-flex overlayHeader"><h3 class="oj-flex-item oj-sm-10 headerTxt text-normal" data-bind="text: rightPanelData.header"></h3><a class="oj-flex-item oj-sm-2" href="#" data-bind="click: rightPanelData.closeHandler, attr:{alt: locale.overlayDismiss, title: locale.overlayDismissTitle }"><span class="icons icon-cross pull-right small-icon"></span></a></div><div id="rightPanelBody" class="oj-flex overlayBody form-main-container"><oj-bind-if test="[[!rightPanelData.cca]]"><div data-bind="component: {name:rightPanelData.componentName , params:{rootModel:rightPanelData.data, closeHandler : rightPanelData.closeHandler }}"></div></oj-bind-if></div><!-- /ko --></div><div class="main-container"><header><obdx-header root-model="{{$properties.rootModel}}" base-model="[[$properties.baseModel]]" dashboard="{{$dashboard}}" formatter="[[$properties.formatter]]" compute-context="{{$properties.rootModel.computeContext}}" change-menu-state="[[changeMenuState]]" menu-option-select="[[menuOptionSelect]]" filter-menu="[[filterMenu]]"></obdx-header></header><main class="container" id="maincontent" tabindex="-1"><div data-bind="template: {name:\'dashboard-heading\'}"></div><!-- ko if: componentReset() && router.currentValue() && router.currentValue().isDashboard --><dashboard-container id="dbContainer" root-model="[[$properties.rootModel]]" base-model="[[$properties.baseModel]]" dashboard="{{$dashboard}}" formatter="[[$properties.formatter]]" dashboard-name="[[router.currentValue().dashboard]]" warnings-dismissed="[[warningsDismissed]]" dismiss-warnings="[[dismissWarnings]]" data-oj-context></dashboard-container><!-- /ko --><div data-bind="css : {\'main-content\' : !isDashboard()}"><div class="oj-flex"><!-- ko if: componentReset() && router.currentValue() && router.currentValue().component --><!-- ko if: router.currentValue().component() === "manage-accounts"--><manage-accounts class="oj-flex-item oj-sm-12 form-main-container" id="appShellManageAccounts" dashboard="[[$dashboard]]" base-model="[[$properties.baseModel]]" root-model="[[router.currentValue()]]" menu-option-selected="[[isMenuOptionSelected]]" formatter="[[$properties.formatter]]" data-oj-context></manage-accounts><!-- /ko --><!-- ko if: router.currentValue().component() !== "manage-accounts"--><div class="oj-flex-item oj-sm-12 form-main-container" data-bind="childrenComplete: targetLoaded, component: {name:router.currentValue().component, params:{rootModel:router.currentValue()}}"></div><!-- /ko --><!-- /ko --><!-- ko if:$properties.baseModel.onTFAScreen() --><div id="generic-authentication" class="oj-flex-item oj-sm-12" data-bind="descendantsComplete: targetLoaded, component: {name : \'generic-authentication\', params:{rootModel: $properties.baseModel.authViewModel}}"></div><!-- /ko --></div></div></main><offline-notification base-model="[[$properties.baseModel]]" formatter="[[$properties.formatter]]"></offline-notification><div class="cz-rafiki-position"><a href="#" id="" data-bind="click:openRafiki.bind($data,$root)"><img class="cz-rafiki-position" data-bind="loadImage:\'common/rafiki.svg\'" width="90" height="80"></a></div><footer><!-- ko if: fabRequired() && (!$properties.baseModel.large() || $baseModel.cordovaDevice()) && $properties.rootModel.isUserDataSet() && ($dashboard.appData.segment ==="RETAIL" || $dashboard.appData.segment ==="CORP") --><!-- ko if: $properties.rootModel.menuNavigationAvailable && isDashboard() --><docked-menu base-model="[[$properties.baseModel]]" dashboard="[[$dashboard]]" formatter="[[$properties.formatter]]"></docked-menu><!-- /ko --><!-- /ko --><!-- ko ifnot: $properties.baseModel.cordovaDevice() --><!-- ko ifnot:!$properties.baseModel.large() && $properties.rootModel.isUserDataSet() && ($dashboard.appData.segment ==="RETAIL" || $dashboard.appData.segment ==="CORP") --><obdx-footer></obdx-footer><!-- /ko --><!-- /ko --></footer></div><!-- ko if:!isDashboard() && !$properties.baseModel.small() --><div class="back-top"><a href="#" data-bind="click: backTop, attr:{\'alt\':locale.backTop ,\'aria-label\':locale.backTop, \'title\':locale.backTop}"><span class="icons icon-arrow-up"></span></a></div><!-- /ko --></div><!-- ko if: modalComponent() --><div data-bind="descendantsComplete: targetLoaded, component: {name:modalComponent , params:{rootModel: $data}}"></div><!-- /ko --><!-- ko if: oracleLiveComponent() && $properties.baseModel.large() --><div data-bind="component: {name: oracleLiveComponent(), params:{ rootModel: $data }}"></div><!-- /ko --><!-- ko if: isDashboard() && $properties.rootModel.isUserDataSet() && $dashboard.userData.userProfile.rewardsEnabled --> <a href="#" data-bind="click: $dashboard.openRightPanel.bind(null, \'rewards\', {}, locale.rewards, null), attr:{\'alt\':locale.rewardsTitle,\'title\':locale.rewardsTitle}"><div class="floating-button rewards-widget"><span slot="startIcon" class="icons icon-offers"></span></div></a><!-- /ko --></div><modal-window class="oj-flex oj-flex-items-pad message" base-model="[[$properties.baseModel]]" dashboard="[[$dashboard]]" dialog-id="[[\'sessionExpired\']]" header="[[locale.sessionExpiredHeader]]" close-handler="[[sessionExpiredHandler]]"><div><div class="oj-flex-item message-text label scroll" data-bind="text:locale.sessionExpired"></div><div class="message-btn button-container"><oj-button id="sessionExpiredButton" class="action-button-primary" on-click="[[sessionExpiredHandler]]"><span data-bind="text:locale.generic.common.ok"></span></oj-button></div></div></modal-window><modal-window class="oj-flex oj-flex-items-pad message" base-model="[[$properties.baseModel]]" dashboard="[[$dashboard]]" dialog-id="[[\'passwordDialog\']]" header="[[locale.passwordNotification]]"><div><div class="oj-flex oj-flex-items-pad"><div class="oj-flex-item"><span data-bind="text: locale.passCombination"></span></div></div><div class="oj-flex oj-flex-items-pad"><div class="oj-flex-item"><span data-bind="text: locale.passwordExample"></span></div></div></div></modal-window><!-- ko if: $baseModel.cordovaDevice() --><modal-window class="favorite-container" dashboard="[[$dashboard]]" base-model="[[$properties.baseModel]]" dialog-id="[[\'exitModal\']]" header="[[locale.exitApplication]]" close-handler="[[closeModal]]"><div><div class="oj-flex oj-flex-items-pad"><div class="oj-flex-item oj-sm-12" data-bind="text:locale.exitModal"></div></div><div class="button-container"><oj-button class="action-button-primary" on-click="[[exitApplication]]"><span data-bind="text:locale.yes"></span></oj-button><oj-button class="action-button-secondary" on-click="[[closeModal]]"><span data-bind="text:locale.no"></span></oj-button></div></div></modal-window><!-- /ko --><!-- /ko -->';
});

define('extensions/framework/elements/core/dashboard/model', ["baseService"], function(e) {
    "use strict";
    return new function() {
        const t = e.getInstance();
        return {
            fetchPartyDetails: function() {
                return t.fetch({
                    url: "me/party",
                    showMessage: !1
                })
            },
            getTaxonomyDefinition: function(e, n) {
                return t.fetch({
                    url: "taxonomy?dtoName={dtoName}&serviceName={serviceName}"
                }, {
                    dtoName: e,
                    serviceName: n
                })
            }
        }
    }
});

define("load!extensions/override/path-config.json", function() {
    return {};
});


define('text!extensions/extension.json', [], function() {
    return '{\n\t"components": [\n\t\t"payments/add-link-wallet",\n\t\t"payments/review-e-wallet",\n\t\t"payments/wallet-login-screen",\n\t\t"payments/send-to-your-enaira",\n\t\t"payments/send-to-your-enaira-login",\n\t\t"payments/review-send-to-your-enaira",\n\t\t"payments/send-to-other-enaira",\n\t\t"payments/review-send-to-other-enaira",\n\t\t"payments/check-wallet-balance",\n\t\t"payments/send-from-enaira-login",\n\t\t"user-management/users-create",\n\t\t"user-management/user-type",\n\t\t"user-management/user-read",\n\t\t"user-management/users-search",\n\t\t"user-management/users-update",\n\t\t"user-management/accessible-entity",\n\t\t"admin-approvals/admin-user-group-view",\n\t\t"admin-approvals/admin-user-group-list",\n\t\t"admin-approvals/admin-user-group",\n\t\t"admin-approvals/rules-admin-create",\n\t\t"admin-approvals/rules-admin",\n\t\t"common/user-input",\n\t\t"role-transaction-mapping/transaction-mapping-search",\n\t\t"approvals/transactions-log",\n\t\t"approvals/user-group-type",\n\t\t"approvals/workflow-type",\n\t\t"approvals/pending-approvals",\n\t\t"approvals/rule-type",\n\t\t"approvals/approvals-nav-bar",\n\t\t"payments/hard-token-synchronization-and-unlock",\n\t\t"base-components/cz-otp-verification",\n\t\t"2fa/generic-authentication",\n\t\t"2fa/hard-token-screen",\n\t\t"registration/user-credentials",\n\t\t"payments/rapid-transfer-send",\n\t\t"payments/domestic-transfer-nigeria",\n\t\t"payments/domestic-transfer-ghana",\n\t\t"payments/transfer-to-ecobank-within-africa",\n\t\t"payments/transfer-to-ecobank-within-africa2",\n\t\t"payments/transfer-to-ecobank-within-africa-review",\n\t\t"bill-payments/air-time",\n\t\t"bill-payments/data-bundle",\n\t\t"bill-payments/quick-bill-payment",\n\t\t"bill-payments/manage-bill-payments",\n\t\t"bill-payments/manage-bill-payments-list",\n\t\t"bill-payments/paybill-beneficiary",\n\t\t"bill-payments/paybill-biller",\n\t\t"bill-payments/register-biller",\n\t\t"bill-payments/pay-bill",\n\t\t"bill-payments/review-bill-payment",\n\t\t"bill-payments/review-register-biller",\n\t\t"loans/loan-disbursement",\n\t\t"payments/standing-instructions-landing",\n\t\t"payments/standing-instructions-list",\n\t\t"bill-payments/payment-history",\n\t\t"payments/adhoc-generic-domestic",\n\t\t"biller-maintenance/manage-category",\n\t\t"biller-maintenance/biller-create",\n\t\t"biller-maintenance/biller-search",\n\t\t"biller-maintenance/review-biller",\n\t\t"payee/domestic-network-payee",\n\t\t"payments/adhoc-international-transfer",\n\t\t"payments/international-transfer",\n\t\t"remittance/rt-receivemoney",\n\t\t"payments/generic-domestic-transfer",\n\t\t"payments/generic-international-transfer",\n\t\t"payee/remittance-beneficiaries",\n\t\t"payee/payments-payee-list",\n\t\t"payments/payee-view-edit",\n\t\t"user-management/hard-token-mapping",\n\t\t"user-management/hard-token-mapping-create",\n\t\t"user-management/hard-token-mapping-search",\n\t\t"user-management/hard-token-mapping-search-list",\n\t\t"user-management/hard-token-mapping-type",\n\t\t"user-management/hard-token-mapping-read",\n\t\t"user-management/hard-token-mapping-update",\n\t\t"recovery/reset-password",\n\t\t"recovery/user-information",\n\t\t"recovery/user-recovery-info",\n\t\t"widgets/cz-entity-switch-list",\n\t\t"base-components/profile",\n\t\t"security/side-menu",\n\t\t"security/security-menu",\n\t\t"base-components/switch-otp",\n\t\t"accounts/account-transactions",\n\t\t"personal-finance-management/transaction-list",\n\t\t"widgets/personal-finance-management/spend-summary",\n\t\t"widgets/dashboard/net-worth-graph",\n\t\t"login/login-form-web",\n\t\t"login/login-form-mobile",\n\t\t"widgets/pre-login/login-form",\n\t\t"widgets/pre-login/logincorporate",\n\t\t"widgets/pre-login/loginretail",\n\t\t"term-deposits/td-payout",\n\t\t"home/mobile-landing",\n\t\t"widgets/calculators/td-calculator",\n\t\t"payments/scheduled-payments",\n\t\t"accounts/flip-account",\n\t\t"payee/payee-list",\n\t\t"term-deposits/td-corporate-details",\n\t\t"widgets/dashboard/dashboard-quick-links",\n\t\t"payee/payee-list",\n\t\t"payments/payment-status-inquiry-corp",\n\t\t"widgets/accounts/financial-summary",\n\t\t"widgets/accounts/recent-account-transactions",\n\t\t"widgets/accounts/account-transactions-corp",\n\t\t"payee/international-payee",\n\t\t"payments/generic-internal-transfer",\n\t\t"user-management/review-user-create",\n\t\t"payee/payee-email",\n\t\t"widgets/corporateDashboard/account-quick-links",\n\t\t"file-upload/file-upload",\n\t\t"limits-enquiry/my-limits",\n\t\t"limits-enquiry/my-limit",\n\t\t"business-components/payments/search-box-payments",\n\t\t"payments/payment-status-inquiry",\n\t\t"widgets/corporateDashboard/account-financial-summary",\n\t\t"widgets/corporateDashboard/work-snapshot",\n\t\t"widgets/corporateDashboard/work-box-maker",\n\t\t"widgets/corporateDashboard/work-box-corporate",\n\t\t"widgets/corporateDashboard/work-box-viewer",\n\t\t"widgets/corporateDashboard/financial-overview",\n\t\t"payments/payment-landing",\n\t\t"change-password/change-password",\n\t\t"common/party-name-search",\n\t\t"widgets/corporateDashboard/my-approved-list",\n\t\t"widgets/corporateDashboard/latest-pending-approvals",\n\t\t"usergroup-subject-map/mapping-search",\n\t\t"usergroup-subject-map/mapping-base",\n\t\t"widgets/personal-finance-management",\n\t\t"approvals/payment-transactions",\n\t\t"approvals/accounts-financial",\n\t\t"approvals/amount-financial",\n\t\t"approvals/bulk",\n\t\t"approvals/bulk-record",\n\t\t"approvals/electronic-bill-payments",\n\t\t"approvals/non-account-bulk-record",\n\t\t"approvals/transaction-detail",\n\t\t"term-deposits/td-maturity-details",\n\t\t"payments/single-transfer",\n\t\t"approvals/transaction-detail",\n\t\t"account-access-management/linked-party-access-exclusion",\n\t\t"payments/rt-history",\n\t\t"business-components/payments/payments-generic",\n\t\t"sms-banking/sms-primary-account",\n\t\t"business-components/payments/payment-status-inquiry-list",\n\t\t"payments/filter-screen",\n\t\t"widgets/dashboard/dashboard-admin-action-card",\n\t\t"widgets/corporateDashboard/recent-payments",\n\t\t"widgets/demand-deposits/account-summary",\n\t\t"widgets/term-deposits/td-summary",\n\t\t"widgets/loans/loan-summary",\n\t\t"force-change-password/force-change-password",\n\t\t"service-requests/service-requests-form-builder",\n\t\t"accounts/account-overview",\n\t\t"widgets/dashboard/offers",\n\t\t"demand-deposits/account-details",\n\t\t"service-requests/service-requests-verify",\n\t\t"transaction-group/transaction-group-read",\n\t\t"customer-preference/preference-search",\n\t\t"core/header",\n\t\t"core/entity-switch",\n\t\t"core/offline-notification",\n\t\t"core/message-box",\n\t\t"core/error",\n\t\t"core/docked-menu",\n\t\t"core/access-denied",\n\t\t"core/about",\n\t\t"core/dashboard-container",\n\t\t"core/dashboard",\n\t\t"core/menu",\n\t\t"core/footer",\n\t\t"2fa/time-based-otp-screen",\n\t\t"2fa/security-questions",\n\t\t"2fa/otp-screen",\n\t\t"2fa/hotp-screen",\n\t\t"widgets/dashboard/quick-links",\n\t\t"api/manage-accounts",\n\t\t"retail-loans/retail-loan-details",\n\t\t"payments/favorites",\n\t\t"admin-approvals/workflow-admin-view",\n\t\t"widgets/corporateDashboard/financial-position-currency",\n\t\t"widgets/calculators/forex-calculator",\n\t\t"party-linkage/linkage-base",\n\t\t"login/terms-conditions",\n\t\t"login/terms-conditions-fr",\n\t\t"login/terms-conditions-pt",\n\t\t"login/terms-conditions-es",\n\t\t"login/privacy-policy",\n\t\t"widgets/dashboard/admin-activities",\n\t\t"payments/standing-instruction-detail",\n\t\t"mailbox/mailbox-base"\n\t],\n\t"partials": [\n\t\t"review-screen/review-banner-template",\n\t\t"confirm-screen/e-naira-wallet",\n\t\t"admin/create-panel",\n\t\t"admin/update-panel",\n\t\t"bill-payments/review-biller-details",\n\t\t"login/login-form",\n\t\t"login/login-form-corporate",\n\t\t"login/login-form-retail",\n\t\t"files/privacy-policy",\n\t\t"files/terms-conditions",\n\t\t"files/pt/terms-conditions",\n\t\t"dashboard-heading",\n\t\t"payments/payments-money-transfer",\n\t\t"confirm-screen/enaira-confirm-template",\n\t\t"confirm-screen/rapid-transfer-confirm-template",\n\t\t"review-adhoc-international-generic",\n\t\t"review-generic-domestic-payee",\n\t\t"review-adhoc-domestic-generic",\n\t\t"review-internal-generic",\n\t\t"pending-for-approvals/account-financial",\n\t\t"pending-for-approvals/amount-financial",\n\t\t"pending-for-approvals/bulk-file",\n\t\t"pending-for-approvals/bulk-record",\n\t\t"pending-for-approvals/electronic-bill-payments",\n\t\t"pending-for-approvals/non-financial-bulk-record",\n\t\t"pending-for-approvals/payments",\n\t\t"pending-for-approvals/trade-finance-maintenance",\n\t\t"pending-for-approvals/trade-finance",\n\t\t"pending-for-approvals/payee-biller",\n\t\t"pending-for-approvals/party-maintenance",\n\t\t"pending-for-approvals/other-transaction",\n\t\t"pending-for-approvals/non-financial-bulk-file",\n\t\t"pending-for-approvals/liquidity-management",\n\t\t"pending-for-approvals/forex-deal",\n\t\t"pending-for-approvals/bulk-record-admin",\n\t\t"pending-for-approvals/bulk-file-admin",\n\t\t"pending-for-approvals/biller-maintenance",\n\t\t"pending-for-approvals/amt-financial-bulk-record",\n\t\t"pending-for-approvals/admin-maintenance",\n\t\t"pending-for-approvals/account-non-financial",\n\t\t"payments/review-partials/review-multiple-domestic-transfer",\n\t\t"payments/review-partials/review-domestic-transfer",\n\t\t"payee/payee-view-edit",\n\t\t"review-international-payee",\n\t\t"admin/add",\n\t\t"admin/address",\n\t\t"help/add-biller-main",\n\t\t"help/add-link-wallet",\n\t\t"help/adhoc-payments-helper",\n\t\t"help/adhoc-payments",\n\t\t"help/alerts",\n\t\t"help/auto-pay",\n\t\t"help/bank-account-payee-help",\n\t\t"help/bank-account-payee",\n\t\t"help/bill-payment",\n\t\t"help/bill-payments",\n\t\t"help/block-card",\n\t\t"help/check-balance",\n\t\t"help/cheque-book-request",\n\t\t"help/cheque-status-inquiry",\n\t\t"help/cheque-stop-unblock",\n\t\t"help/domestic-transfer-ghana",\n\t\t"help/domestic-transfer-nigeria",\n\t\t"help/favorite-help-note",\n\t\t"help/file-upload",\n\t\t"help/forgot-password",\n\t\t"help/hard-token-mapping",\n\t\t"help/hard-token-synchronization-and-unlock",\n\t\t"help/login-form",\n\t\t"help/manage-bill-payments",\n\t\t"help/manage-payees",\n\t\t"help/manage-spend-categories",\n\t\t"help/modify-biller",\n\t\t"help/multiple-bill-payments",\n\t\t"help/multiple-transfers-help",\n\t\t"help/payment-history-help",\n\t\t"help/quick-bill-pay",\n\t\t"help/rapid-transfer-send",\n\t\t"help/register-biller",\n\t\t"help/remittance-beneficiaries",\n\t\t"help/rt-receivemoney",\n\t\t"help/send-to-other-enaira",\n\t\t"help/send-to-your-enaira",\n\t\t"help/set-repeat-transfer-help",\n\t\t"help/td-open",\n\t\t"help/transfer-to-ecobank-within-africa",\n\t\t"help/view-user-security-help",\n\t\t"help/view-user-security-question",\n\t\t"help/td-redeem",\n\t\t"help/td-topup",\n\t\t"help/td-amend",\n\t\t"help/generic-transfer-money-help",\n\t\t"help/manage-bill-payments",\n\t\t"help/manage-bill-payments-help",\n\t\t"help/fr/add-biller-main",\n\t\t"help/fr/add-link-wallet",\n\t\t"help/fr/adhoc-payments-helper",\n\t\t"help/fr/adhoc-payments",\n\t\t"help/fr/alerts",\n\t\t"help/fr/auto-pay",\n\t\t"help/fr/bank-account-payee-help",\n\t\t"help/fr/bank-account-payee",\n\t\t"help/fr/bill-payment",\n\t\t"help/fr/bill-payments",\n\t\t"help/fr/block-card",\n\t\t"help/fr/check-balance",\n\t\t"help/fr/cheque-book-request",\n\t\t"help/fr/cheque-status-inquiry",\n\t\t"help/fr/cheque-stop-unblock",\n\t\t"help/fr/domestic-transfer-ghana",\n\t\t"help/fr/domestic-transfer-nigeria",\n\t\t"help/fr/forgot-password",\n\t\t"help/fr/hard-token-synchronization-and-unlock",\n\t\t"help/fr/login-form",\n\t\t"help/fr/manage-bill-payments",\n\t\t"help/fr/manage-payees",\n\t\t"help/fr/manage-spend-categories",\n\t\t"help/fr/modify-biller",\n\t\t"help/fr/multiple-bill-payments",\n\t\t"help/fr/multiple-transfers-help",\n\t\t"help/fr/password-policy",\n\t\t"help/fr/payment-history-help",\n\t\t"help/fr/quick-bill-pay",\n\t\t"help/fr/send-to-other-enaira",\n\t\t"help/fr/send-to-your-enaira",\n\t\t"help/fr/service-requests",\n\t\t"help/fr/set-repeat-transfer-help",\n\t\t"help/fr/td-open",\n\t\t"help/fr/terms-and-conditions",\n\t\t"help/fr/transfer-to-ecobank-within-africa",\n\t\t"help/fr/view-user-security-help",\n\t\t"help/fr/view-user-security-question",\n\t\t"help/fr/rapid-transfer-send",\n\t\t"help/fr/td-redeem",\n\t\t"help/fr/td-topup",\n\t\t"help/fr/td-amend",\n\t\t"help/fr/remittance-beneficiaries",\n\t\t"help/fr/generic-transfer-money-help",\n\t\t"help/fr/register-biller",\n\t\t"confirm-screen/payments-template",\n\t\t"help/fr/users",\n\t\t"help/pt/users",\n\t\t"help/es/users",\n\t\t"help/pt/terms-and-conditions"\n\t],\n\t"flows": [\n\t\t"bank-account-payee",\n\t\t"adhoc-payments-generic",\n\t\t"air-time",\n\t\t"data-bundle",\n\t\t"quick-bill-payment",\n\t\t"add-biller",\n\t\t"mobile-money",\n\t\t"set-repeat-transfer",\n\t\t"tax",\n\t\t"generic-money-transfer",\n\t\t"td-redeem",\n\t\t"multiple-transfers",\n\t\t"cheque-stop-unblock",\n\t\t"adhoc-demand-draft",\n\t\t"edit-user-security-question",\n\t\t"cheque-book-request",\n\t\t"loan-repayment",\n\t\t"td-open"\n\t],\n\t"framework": [\n\t\t"core/header",\n\t\t"core/entity-switch",\n\t\t"core/offline-notification",\n\t\t"core/message-box",\n\t\t"core/error",\n\t\t"core/docked-menu",\n\t\t"core/access-denied",\n\t\t"core/about",\n\t\t"core/dashboard-container",\n\t\t"core/dashboard",\n\t\t"core/menu",\n\t\t"core/footer",\n\t\t"2fa/time-based-otp-screen",\n\t\t"2fa/security-questions",\n\t\t"2fa/otp-screen",\n\t\t"api/manage-accounts",\n\t\t"api/address",\n\t\t"api/bank-look-up",\n\t\t"api/flow",\n\t\t"api/confirm-screen"\n\t]\n}';
});


define('text!extensions/override/path-mapping.json', [], function() {
    return '{\r\n    "components": {\r\n       \r\n    },\r\n    "partials": {\r\n        \r\n    },\r\n    "flows": {\r\n       \r\n    }\r\n}';
});

define('extensions/override/extensions', ["load!./path-config.json", "text!extensions/extension.json", "text!extensions/override/path-mapping.json"], function(n, e, t) {
    "use strict";
    const o = JSON.parse(e),
        r = JSON.parse(t);
    return {
        evaluateSegment: function(n, e) {
            return null
        },
        evaluateContext: function(n, e) {
            return null
        },
        init: function() {
            const e = {};
            if (o.framework && o.framework.length && o.framework.forEach(n => {
                    e["framework/elements/" + n + "/loader"] = "extensions/framework/elements/" + n + "/loader"
                }), Object.keys(n).length || Object.keys(e)) {
                const t = Object.assign({}, n, e);
                require.config({
                    map: {
                        "*": t
                    }
                })
            }
            return null
        },
        getCurrencyFormattingOptions: function(n) {
            return null
        },
        getCurrencyFractionalDigit: function(n) {
            return null
        },
        getMappedComponentPath: function(n, e) {
            let t = -1 !== o[n].indexOf(r[n][e]);
            if ("flows" !== n || t || (t = -1 !== o.components.indexOf(r.flows[e])), r[n][e] && t) {
                const t = r[n][e].split("/");
                return {
                    component: t[t.length - 1],
                    module: t.slice(0, t.length - 1).join("/")
                }
            }
            return null
        }
    }
});
define('extensions/framework/elements/core/dashboard/dashboard', ["ojs/ojcore", "knockout", "jquery", "./model", "platform", "base-models/utils/obdx-data-aggregation", "framework/js/configurations/config", "ojL10n!resources/nls/dashboard", "ojs/ojrouter", "framework/js/navigation/dashboard-context", "framework/js/plugins/navigation", "ojs/ojoffcanvas", "ojs/ojcontext", "extensions/override/extensions", "framework/js/constants/constants", "framework/elements/core/header/loader", "framework/elements/core/menu/loader", "framework/elements/core/dashboard-container/loader", "framework/elements/core/offline-notification/loader", "framework/elements/core/docked-menu/loader", "framework/elements/core/footer/loader", "framework/elements/api/modal-window/loader"], function(e, o, t, n, a, r, s, i, l, d, c, u, p, m, f) {
    "use strict";
    require(["framework/elements/api/manage-accounts/loader", "framework/elements/api/page-section/loader", "framework/elements/api/row/loader", "ojs/ojarraytabledatasource", "ojs/ojpagingtabledatasource"]), l.defaults.baseUrl = window.location.pathname, l.defaults.urlAdapter = new l.urlParamAdapter, l.defaults.rootInstanceName = "page";
    const h = l.rootInstance,
        g = {},
        b = {
            "manage-accounts": function(e) {
                return e.defaultTab
            },
            flow: function(e) {
                return e.flowName
            }
        };

    function w(e) {
        -1 !== ["start", "stop"].indexOf(e) && ("start" !== e || t("body").hasClass("page-is-changing") ? "stop" === e && t("body").hasClass("page-is-changing") && t("body").removeClass("page-is-changing") : t("body").addClass("page-is-changing"))
    }

    function M(e, o) {
        return b[e] ? "~" + b[e](o) : ""
    }

    function C(f) {
        const b = this,
            C = f.properties.rootModel;
        b.oj = e, b.userData = {}, b.locale = i, b.router = h, b.refreshMenu = o.observable(!0);
        let y, v, D = f.properties.baseModel.getDeviceSize();
        const S = {};
        b.isDashboard = o.observable(!0), b.isHelpAvailable = o.observable(!1), b.modalComponent = o.observable(), b.oracleLiveComponent = o.observable(), b.fabRequired = o.observable(!0), b.componentReset = o.observable(!1), b.headerName = o.observable(), b.headerCaption = o.observable(), b.warningsDismissed = !1, b.isMenuOptionSelected = o.observable();
        const k = function(e) {
            const o = document.getElementById("headingCustomSpace");
            if (o) return e ? (v = b.router.currentState().id, void o.appendChild(e)) : void(o.innerHTML = "")
        };
        var N;

        function R() {
            t(document).off(), t(window).off(), f.properties.baseModel.processAllEvents("addEventListener")
        }

        function E(e) {
            if (-1 !== ["close", "open"].indexOf(e)) return u[e]({
                selector: "#endDrawer",
                content: ".main-container",
                displayMode: "overlay",
                edge: "end",
                modality: "modal",
                autoDismiss: "none"
            })
        }

        function P() {
            E("close"), f.properties.baseModel.isDashboardBuilderContext(!1), d.getDashboardContext().helpComponent.componentName(null), o.tasks.runEarly(), b.headerName(null), b.headerCaption(null), k(null), w("start"), window.scrollTo(0, 0)
        }

        function A() {
            return p.getContext(document.querySelector("#appShellManageAccounts")).getBusyContext().whenReady()
        }

        function q(e, n, a, r, s) {
            if (b.rightPanelData.componentName = e, b.rightPanelData.data = n, b.rightPanelData.header = a, b.rightPanelData.cca = "boolean" == typeof s && s, b.rightPanelData.closeHandler = function() {
                    t("body").removeClass("overflow-hidden"), r && "function" == typeof r && r(), E("close").then(function() {
                        document.getElementById("rightPanelBody").innerHTML = "", b.rightPanelData.isOpen(!1)
                    })
                }, t("body").addClass("overflow-hidden"), b.rightPanelData.isOpen(!0), o.tasks.runEarly(), s && "boolean" == typeof s) {
                const t = document.createElement(e);
                Object.keys(n).forEach(function(e) {
                    t.setAttribute(function(e) {
                        if (e) {
                            const o = e.match(/[A-Z]/g);
                            return o && o.forEach(function(o) {
                                e = e.replace(o, "-" + o.toLowerCase())
                            }), e
                        }
                    }(e), "{{" + e + "}}")
                }), document.getElementById("rightPanelBody").appendChild(t), o.cleanNode(t), o.applyBindings(n, t)
            }
            E("open")
        }
        b.fatcaCheckRequired = o.observable(!1), b.rightPanelData = {
            isOpen: o.observable(),
            componentName: null,
            data: null,
            closeHandler: null,
            header: null
        }, h.configure(function(e) {
            let o;
            if (e) {
                const t = g[e];
                t && (o = {
                    value: t,
                    canEnter: t.canEnter,
                    label: t.label,
                    canExit: "confirm-screen" !== e
                })
            }
            return o
        }), (N = f.properties.baseModel.registerElement)(["responsive-img", "flow", "confirm-screen"]), N("error", "core"), N("banner", "core"), N("confirm-dialog", "core"), f.properties.baseModel.registerComponent("oracle-live", "login"), f.properties.baseModel.registerComponent("change-password", "change-password"), f.properties.baseModel.registerComponent("compliance-base", "compliance"), f.properties.baseModel.registerComponent("rewards", "widgets/dashboard"), b.headerName.subscribe(function(e) {
            e ? (b.router.currentState().label = e, document.title = f.properties.baseModel.format("{txn_name} - {bankName}", {
                txn_name: e,
                bankName: b.locale.bankName
            }), Promise.resolve().then(function() {
                document.getElementsByTagName("H1") && document.getElementsByTagName("H1")[0].focus()
            })) : document.title = b.locale.bankName
        }), b.loadComponent = function(e, t) {
            if (R(), f.properties.baseModel.onTFAScreen(!1), b.componentReset(!1), "flow" === e) {
                const o = m.getMappedComponentPath("flows", t.flowName);
                o && (f.properties.baseModel.registerComponent(o.component, o.module), e = o.component)
            }
            "segment-container" === e && t && "addSubFacility" === t.menuId && o.utils.extend(t, {
                    ifSubFacility: !0
                }),
                function(e, t) {
                    t = t || {}, P();
                    const n = e + M(e, t);
                    g[n] = {
                        component: o.observable(e),
                        params: t
                    }, g[h.stateId()].previousState = t, Promise.all([f.properties.baseModel.closeNotificationMessages("error"), c.beforeNavigation(g[n], b.userData, f.properties.baseModel.large())]).then(function() {
                        h.go(n).finally(function() {
                            b.componentReset(!0), o.tasks.runEarly(), A().then(function() {
                                b.targetLoaded()
                            })
                        })
                    }), d.getDashboardContext().helpComponent.componentName(e), b.fabRequired(!0), b.isDashboard(!1)
                }(e, t)
        }, b.switchModule = function(e, t) {
            return "boolean" == typeof e && e ? b.modalComponent("confirm-dialog") : (e ? t && (y.dashboard = e) : e = y.dashboard || "home", h.stateId() === e ? (b.componentReset(!1), o.tasks.runEarly(), b.componentReset(!0), void b.targetLoaded()) : (f.properties.baseModel.onTFAScreen(!1), R(), g[e] || (g[e] = {
                dashboard: e,
                isDashboard: !0
            }), b.componentReset(!1), void Promise.all([f.properties.baseModel.closeNotificationMessages(), c.beforeNavigation(g[e], b.userData, f.properties.baseModel.large())]).then(function() {
                P(), b.fabRequired(!0), b.isDashboard(!0), f.properties.baseModel.dispatchCustomEvent(window, "menuChanged"), o.tasks.runEarly(), h.go(e).then(function(e) {
                    e.hasChanged && b.componentReset(!0)
                })
            })))
        }, b.hideDetails = function() {
            b.headerName(null), f.properties.baseModel.closeNotificationMessages(), f.properties.baseModel.onTFAScreen(!1), d.getDashboardContext().helpComponent.componentName(null), o.tasks.runEarly(), history.back()
        }, window.onpopstate = function() {
            f.properties.baseModel.onTFAScreen(!1), t(".button-container").show()
        }, b.targetLoaded = function() {
            w("stop"), b.isMenuOptionSelected() && b.isMenuOptionSelected(!1)
        }, document.addEventListener("openRightPanel", function(e) {
            const o = e.detail;
            o.component && q(o.component, o.props, o.header, o.closeHandler, o.isCCA)
        }), document.addEventListener("closeRightPanel", function() {
            b.rightPanelData.closeHandler && b.rightPanelData.closeHandler()
        });
        const x = function() {
                return b.changeMenuState("close")
            },
            L = o.computed(function() {
                return D !== f.properties.baseModel.getDeviceSize() && (D = f.properties.baseModel.getDeviceSize(), b.changeMenuState("close")), f.properties.baseModel.large() ^ f.properties.baseModel.medium() ^ f.properties.baseModel.small()
            }, b);
        let O;
        b.getDashboardContext = function() {
            return Object.seal({
                isDashboard: b.isDashboard,
                isHelpAvailable: b.isHelpAvailable,
                headerName: b.headerName,
                headerCaption: b.headerCaption,
                headerActions: k,
                helpComponent: d.getDashboardContext().helpComponent,
                loadComponent: b.loadComponent,
                switchModule: b.switchModule,
                hideDetails: b.hideDetails,
                userData: b.userData,
                modalComponent: b.modalComponent,
                resetModalComponent: b.resetModalComponent,
                appData: S,
                openRightPanel: q,
                getTaxonomyDefinition: n.getTaxonomyDefinition,
                onDockedMenuSelect: x,
                fabRequired: b.fabRequired,
                rootRouter: h,
                fatcaCheckRequired: b.fatcaCheckRequired,
                showFatcaForm: b.showFatcaForm
            })
        }, b.menuOptionSelect = function(e, o) {
            w("start"), b.isMenuOptionSelected(!0);
            const t = "flow" === e.class ? "flow" : e.name,
                n = t + M(t, {
                    flowName: "flow" === t ? e.name : null,
                    jsonData: e
                });
            g[n] && (g[h.stateId()].previousState = null, n === h.stateId() && (h.currentValue().params = "flow" === t ? {
                flowName: e.name,
                flowStageRootModel: e.stageRootModel
            } : {})), (o || Promise.resolve()).then(function() {
                return "DASHBOARD" === e.name ? b.switchModule() : e.type && "MODULE" === e.type ? b.switchModule(e.name) : e.type && "PAGE" === e.type ? (f.properties.baseModel.switchPage(e.location.args, e.location.isSecure), !1) : void(e.type && "FUNCTION" === e.type ? (f.properties.baseModel[e.functionName](e.params), w("stop")) : e.type && "MODAL" === e.type ? (f.properties.baseModel.registerComponent(e.name, e.module), b.modalComponent(e.name)) : e.applicationType ? b.loadComponent("manage-accounts", {
                    applicationType: e.applicationType,
                    defaultTab: e.name,
                    moduleURL: e.moduleURL,
                    jsonData: e
                }) : "flow" === e.class ? b.isMenuOptionSelected() && (h.currentValue().params && (h.currentValue().params.flowStageRootModel = {}), b.loadComponent("flow", {
                    flowName: e.name,
                    flowStageRootModel: e.stageRootModel
                })) : ("transaction" === e.class ? f.properties.baseModel.registerTransaction(e.name, e.module) : f.properties.baseModel.registerComponent(e.name, e.module), b.loadComponent(e.name, {
                    type: e.type,
                    jsonData: e
                })))
            })
        }, b.changeMenuState = function(e) {
            if (C.menuNavigationAvailable && -1 !== ["close", "open", "toggle"].indexOf(e)) return u[e]({
                selector: "#innerDrawer",
                content: ".main-container",
                displayMode: "push",
                edge: "start",
                modality: "none"
            }).then(function() {
                "close" !== e && window.document.documentMode && t("#innerDrawer").css("transform", "none")
            })
        }, t("#innerDrawer").on("ojclose", function() {
            t("span.hamburger-icon").removeClass("hide")
        }), t("#innerDrawer").on("ojopen", function() {
            t("span.hamburger-icon").addClass("hide")
        }), l.transitionedToState.add(function(e) {
            if (e.newState && "dashboard-create" !== e.newState.id && f.properties.baseModel.isDashboardBuilderContext(!1), e.hasChanged && !e.router.parent) {
                if (e.newState.id !== v && k(null), "home" !== e.newState.id && h.currentState.subscribe(function(e) {
                        e && !0 !== e.value.isDashboard && (b.componentReset(!1), o.tasks.runEarly(), b.componentReset(!0))
                    }), c.afterNavigation(), e.newState.value.isDashboard) {
                    b.isDashboard(!0);
                    const e = document.querySelector("#dbContainer");
                    p.getContext(e).getBusyContext().whenReady().then(function() {
                        b.targetLoaded()
                    })
                }
                "confirm-screen" === e.newState.id && (g[e.newState.id].canEnter = g[e.oldState.id].canEnter = function() {
                    return "back" !== e.router.direction
                })
            } else !e.hasChanged && h.currentValue() && (h.currentValue().previousState = null)
        }), l.sync().finally(function() {
            Promise.all([C.userInfoPromise, a.getInstance("authentication")]).then(function(e) {
                b.headerName(null);
                const r = e[0];
                e[1];
                y = r.currentModule, t.extend(S, r.appData), t.extend(b.userData, r.userData), f.properties.baseModel.dispatchCustomEvent(window, "menuChanged"), f.properties.baseModel.dispatchCustomEvent(window, "headerMenuChanged"), b.loadcorporatehtml = o.observable(!1), b.loadretailhtml = o.observable(!1), b.loaddefaulthtml = o.observable(!1), b.module = o.observable();
                let i = window.location.href;
                null === r.userData.userProfile && (i.match(/logincorporate/g) ? (b.loadcorporatehtml(!0), b.module("CORP")) : i.match(/loginretail/g) && (b.loadretailhtml(!0), b.module("RETAIL")), f.properties.baseModel.medium() && (b.loadcorporatehtml(!0), b.module("CORP"), window.location.search = "?page=logincorporate"), window.location.pathname.match(s.authentication.pages.securePage) && (b.loaddefaulthtml() ? (y.homeComponent = "login-form", y.moduleName = "widgets/pre-login") : b.loadretailhtml() ? (y.homeComponent = "loginretail", y.moduleName = "widgets/pre-login") : b.loadcorporatehtml() && (y.homeComponent = "logincorporate", y.moduleName = "widgets/pre-login")));
                let l = null;
                if (b.userData.userProfile) {
                    C.isUserDataSet(!0);
                    b.userData;
                    a.getInstance("device").then(function(e) {
                        e("postLogin", b.userData.userProfile), window.plugins.appPreferences.fetch(function(o) {
                            e("getPersonalOffers", o)
                        }, null, "ALLOW_BEACON")
                    })
                }
                y.homeComponent ? (y.moduleName && f.properties.baseModel.registerComponent(y.homeComponent, y.moduleName), g[y.homeComponent] = {
                    component: o.observable(y.homeComponent),
                    params: C.queryMap && C.queryMap.params ? JSON.parse(C.queryMap.params) : null,
                    previousState: null
                }, C.queryMap && C.queryMap.homeComponent === y.homeComponent && (C.queryMap.homeComponent = null, C.queryMap.homeModule = null, C.queryMap.params = null), l = y.homeComponent, b.isDashboard(!1)) : (b.isDashboard(!0), y.dashboard = l = "home"), c.beforeNavigation(g[l], b.userData, f.properties.baseModel.large()).then(function() {
                    h.go(l).then(function() {
                        b.componentReset(!0), A().then(function() {
                            b.targetLoaded()
                        })
                    })
                }), C.menuNavigationAvailable && b.userData.userProfile && b.userData.userProfile.partyId && b.userData.userProfile.partyId.value && n.fetchPartyDetails().then(function(e) {
                    e.party.fatcaCheckRequired && (O = e.party, b.fatcaCheckRequired(!0))
                }), f.properties.baseModel.enqueueTask(function() {
                    b.oracleLiveComponent("oracle-live")
                })
            })
        }), b.filterMenu = function(e) {
            return e.filter(function(e) {
                return !(s.system.componentAccessControlEnabled && !e.default) || (e.submenus ? (e.submenus = b.filterMenu(e.submenus), !(!e.submenus || !e.submenus.length)) : e.type && "MODULE" === e.type ? f.properties.baseModel.getAuthorisedComponentList("DASHBOARD").has(e.name) : f.properties.baseModel.getAuthorisedComponentList().has(e.name))
            })
        }, b.showFatcaForm = function() {
            b.loadComponent("compliance-base", O)
        }, b.resetModalComponent = function() {
            b.modalComponent(null)
        }, b.sessionExpiredHandler = function() {
            if (f.properties.baseModel.cordovaDevice())
                if ("corp" === window.status) {
                    const e = "?page=logincorporate";
                    window.open(e, "_self")
                } else C.resetLayout();
            else if ("corp" === window.status) {
                const e = "?page=logincorporate";
                window.open(e, "_self")
            } else C.resetLayout()
        }, b.backTop = function() {
            t("body,html").animate({
                scrollTop: 0
            }, 1e3)
        }, b.dismissWarnings = function() {
            f.properties.baseModel.displayInteraction("fadeOut", "#warning-container", "slow"), b.warningsDismissed = !0
        }, b.dispose = function() {
            L.dispose()
        }, "ANDROID" === f.properties.baseModel.cordovaDevice() && document.addEventListener("backbutton", function(e) {
            e.preventDefault(), "home" === b.router.currentState().id && t("#exitModal").trigger("openModal")
        }, !1), b.closeModal = function() {
            t("#exitModal").hide().trigger("closeModal")
        }, b.openRafiki = function() {
            window.open("https://ice.ecobank.com/chatbotui", "newwindow", "width=370,height=550")
        }, b.exitApplication = function() {
            b.logout()
        }, b.logout = function(e) {
            window.onbeforeunload = null, r.addEvent({
                event: "LOGOUT"
            }), r.pushAggregatedData().then(function() {
                return navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("logout"), a.getInstance("authentication")
            }).then(function(e) {
                f.properties.rootModel.queryMap = null, e("logout").then(function() {
                    f.properties.rootModel.resetLayout()
                })
            })
        }, s.system.mandatorySignRequired && function e() {
            document.querySelectorAll("oj-label:not(.show-required-added)").forEach(function(e) {
                e.for && document.querySelector("#" + e.for) && document.querySelector("#" + e.for).required && (e.showRequired = !0), e.classList.add("show-required-added")
            }), setTimeout(e, 700)
        }()
    }
    return g.home = {
        dashboard: null,
        isDashboard: !0
    }, a.getInstance("device").then(function(e) {
        const o = document.createElement("link");
        o.type = "image/x-icon", o.rel = "shortcut icon", o.href = e("getImageBaseURL") + "/favicon.ico", document.getElementsByTagName("head")[0].appendChild(o)
    }), C.prototype.disconnected = function() {
        this.isMenuOptionSelected(!1)
    }, C
});

define('text!extensions/framework/elements/core/dashboard/component.json', [], function() {
    return '{\r\n    "name": "obdx-dashboard",\r\n    "version": "1.0.0",\r\n    "jetVersion": "^8.1.0",\r\n    "displayName": "Framework Composite Component",\r\n    "description": "Framework Composite Component",\r\n    "properties": {\r\n        "rootModel": {\r\n            "type": "object",\r\n            "writeback": true\r\n        },\r\n        "baseModel": {\r\n            "type": "object"\r\n        },\r\n        "formatter": {\r\n            "type": "object"\r\n        }\r\n    },\r\n    "methods": {},\r\n    "events": {},\r\n    "slots": {}\r\n}';
});

define('extensions/framework/elements/core/dashboard/loader', ["ojs/ojcomposite", "text!./dashboard.html", "./dashboard", "text!./component.json"], function(e, o, t, a) {
    "use strict";
    e.register("obdx-dashboard", {
        view: o,
        viewModel: t,
        metadata: JSON.parse(a)
    })
});