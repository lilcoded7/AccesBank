define('text!extensions/framework/elements/api/manage-accounts/manage-accounts.html', [], function() {
    return '<modal-window :id="[[$unique+ \'_modalWindow\']]" base-model="[[$properties.baseModel]]" dasbhboard="[[$properties.dashboard]]" dialog-id="[[\'manageAccountsAccountNumberDropdown\']]" close-handler="[[modalCloseHandler]]" header="[[locale.popupHeader[parameters.applicationType] || locale.chooseAccount]]" modal-window-ready="[[afterRender]]"><div class="form-main-container"><page-section><div><!-- ko if: $data.parameters.moduleURL --><account-input base-model="[[$properties.baseModel]]" dashboard="[[$properties.dashboard]]" formatter="[[$properties.formatter]]" account="{{$data.accountNumberSelected}}" type="[[\'nodeValue\']]" additional-details="{{$data.additionalDetails}}" accounts-parser="[[$data.accountParser]]" custom-url="{{$data.parameters.moduleURL}}" validator="[[$data.validationTracker]]" label="[[locale.accountLabel[parameters.applicationType]]]"></account-input><!-- /ko --></div></page-section><!-- ko if: !accountNumberSelected() && noAccounts() --><div><p style="text-align:center">Loading...</p></div><!-- /ko  --><div class="oj-flex oj-flex-items-pad button-container"><!-- ko if: accountNumberSelected() --><oj-button class="action-button-primary" on-click="[[selectAccount]]"><span slot="startIcon" class="icons icon-forward-arrow"></span> <span data-bind="text:locale.generic.common.proceed"></span></oj-button><!-- /ko --><oj-button class="action-button-secondary" on-click="[[$properties.dashboard.hideDetails]]"><span slot="startIcon" class="icons icon-cancel"></span> <span data-bind="text:locale.generic.common.cancel"></span></oj-button></div></div></modal-window><!-- ko if: isReady --><!-- ko ifnot: $properties.baseModel.small() || $data.state()==="review"--><nav-bar base-model="[[$properties.baseModel]]" scroll-into-view="[[true]]" menu-options="[[menuOptions]]" nav-bar-description="[[locale.navBarDescription]]" menu-float="[[\'left\']]" full-width="[[false]]" default-option="{{menuSelection}}" on-before-select="[[beforeSelectHandler]]"></nav-bar><!-- /ko --><div :class="[[{\'content-container\': $data.state() !== \'review\'}]]"><!-- ko let: {$baseModel: $properties.baseModel, $dashboard: $properties.dashboard, $formatter: $properties.formatter, $oj: oj}--><!-- ko if: childRouter.currentValue() --><!-- ko if: transactionType() === "conventional"--><div class="menu-option" data-bind="component: {name: childRouter.currentValue().component , params : {rootModel : {params : parameters, previousState: previousState}, options : {metaData : childRouter.currentValue()}, changeView: changeView}}"></div><!-- /ko --><!-- /ko --><!-- ko if: transactionType() === "flow" --><flow params="{ rootModel: { params: { flowName: menuSelection(), flowStageRootModel: { changeView: changeView, params : parameters } } }, baseModel: $baseModel, dashboard: $dashboard, rootRouterInstance: childRouter }"></flow><!-- /ko --><!-- /ko --></div><!-- ko ifnot: $properties.baseModel.small() --><!-- /ko --><!-- /ko -->';
});

define('resources/nls/manage-accounts', ["ojL10n!resources/nls/generic"], function(e) {
    "use strict";
    return new function() {
        return {
            root: {
                header: "Manage Accounts",
                navBarDescription: "Navigation Bar to select action",
                selectAccount: "Select Account",
                requestForAccount: "Please select the account for which you want to perform the action for",
                backToDashboard: "Back to Dashboard",
                chooseAccount: "Choose Account",
                txnNotAvailable: "This facility is not available.",
                accountLabel: {
                    creditcard: "Select Credit Card"
                },
                popupHeader: {
                    creditcard: "Choose Credit Card"
                },
                tabs: {
                    "demand-deposits": {
                        "demand-deposit-details": "Account Details",
                        "demand-deposit-transactions": "View Statement",
                        "cheque-book-request": "Cheque Book Request",
                        "cheque-status-inquiry": "Cheque Status Inquiry",
                        "cheque-stop-unblock": "Stop/Unblock Cheque",
                        "debit-card-list": "Debit Cards",
                        "sweep-in-instruction": "Sweep-in",
                        "statement-request": "Request Statement"
                    },
                    "term-deposits": {
                        "td-details": "Term Deposit Details",
                        "term-deposit-transactions": "View Statement",
                        "td-topup": "Top Up",
                        "td-redeem": "Redemption",
                        "term-deposit-statement-request": "Request Statement",
                        "td-amend": "Edit Maturity Instruction",
                        "statement-request": "Request Statement"
                    },
                    "recurring-deposit": {
                        "rd-details": "Deposit Details",
                        "rd-redeem": "Redemption",
                        "recurring-deposit-transactions": "View Statement",
                        "rd-amend": "Edit Maturity Instruction",
                        "statement-request": "Request Statement"
                    },
                    "debit-card": {
                        "debit-card-details": "Debit Card Limits",
                        "debit-card-pin-request": "Request PIN",
                        "debit-card-hotlisting": "Block/Hotlist Card",
                        "upgrade-card": "Upgrade Card",
                        "debit-card-reset-pin": "Reset PIN",
                        "reissue-card": "Reissue Card"
                    },
                    billPayments: {
                        "bill-payments-favorites": "Favorites",
                        "manage-bill-payments": "Bills",
                        "add-biller": "Add Biller",
                        "modify-biller": "Manage Billers",
                        "quick-bill-payment": "Quick Bill Pay",
                        "quick-recharge": "Quick Recharge",
                        "payment-history": "Payment History",
                        "manage-bill-payments": "Manage Airtime Beneficiaries",
                        "paybill-beneficiary": "Manage Paybill Beneficiaries",
                        "air-time": "Buy Airtime",
                        tax: "Tax",
                        "mobile-money": "Mobile Money",
                        "data-bundle": "Buy Data"
                    },
                    payments: {
                        "bill-payments": "Pay Bills",
                        "adhoc-demand-draft": "Adhoc Demand Draft",
                        favorites: "Favorites",
                        "payments-money-transfer": "Other Transfers",
                        "issue-demand-draft": "Issue Demand Drafts",
                        "scheduled-payments": "Upcoming Payment",
                        "payments-payee-list": "Manage Beneficiaries",
                        "adhoc-payments": "One Time Transfer",
                        "adhoc-payments-generic": "One Time Transfer",
                        "transfer-to-ecobank-within-africa": "Ecobank Africa",
                        "transfer-to-ecobank-within-africa2": "Ecobank Africa",
                        "multiple-transfers": "Multiple Transfers",
                        "multiple-payments": "Multiple Transfers",
                        "multiple-bill-payments": "Multiple Bill Payments",
                        "add-money-to-wallet": "Add Money To Wallet",
                        "payment-status-inquiry": "Transaction Status Inquiry",
                        "payment-status-inquiry-corp": "Transaction Status Inquiry",
                        "inward-remittance-inquiry": "Inward Remittance Inquiry",
                        "requested-funds-summary": "Requested Funds Summary"
                    },
                    nominee: {
                        "casa-nominee-list": "Current and Savings",
                        "td-nominee-list": "Term Deposits",
                        "rd-nominee-list": "Recurring Deposits"
                    },
                    "standing-instructions": {
                        "standing-instructions-landing": "View Standing Orders",
                        "set-repeat-transfer": "Set Standing Orders"
                    },
                    debtor: {
                        "debtor-group-list": "Manage Debtors",
                        "debtor-money-request": "Request Money"
                    },
                    payee: {
                        "bank-account-payee": "Bank Account",
                        "demand-draft-payee": "Demand Draft",
                        "peer-to-peer-payee": "Peer to Peer",
                        "remittance-beneficiaries": "Rapid Transfer"
                    },
                    loans: {
                        "loan-details": "Loan and Finance Details",
                        "retail-loan-details": "Loan and Finance Details",
                        "loan-transactions": "View Statement",
                        "loan-repayment": "Repayment",
                        "loan-disbursement": "Disbursement Inquiry",
                        "loan-schedule": "Schedule Inquiry"
                    },
                    creditcard: {
                        "card-details": "Credit Card Details",
                        "card-statement": "View Statement",
                        "card-pay": "Card Payment",
                        "request-pin": "Request PIN",
                        "block-card": "Block/Cancel Card",
                        "auto-pay": "Auto Pay",
                        "creditcard-reset-pin": "Reset PIN",
                        "add-on-card": "Add-On Card"
                    },
                    "loan-calculator": {
                        "loan-calculator": "Installment Calculator",
                        "loan-eligibility-calculator": "Eligibility Calculator"
                    },
                    alerts: {
                        "alerts-profile": "Profile",
                        "alerts-casa": "Saving & Current",
                        "alerts-td": "Term Deposits",
                        "alerts-loans": "Loans",
                        "alerts-payments": "Payments"
                    },
                    "interest-certificates": {
                        "interest-certificate-casa": "Current and Savings",
                        "interest-certificate-td": "Deposits",
                        "interest-certificate-loans": "Loans"
                    },
                    upi: {
                        "manage-vpa": "Manage VPA",
                        "upi-request-money": "Request Money",
                        "upi-pending-request": "Pending Requests"
                    },
                    security: {
                        "security-menu": "security-menu"
                    },
                    eNaira: {
                        "add-link-wallet": "Add Link Wallet",
                        "send-to-other-enaira": "Send to other eNaira",
                        "wallet-login-screen": "Check Balance",
                        "send-to-your-enaira-login": "Send to your eNaira"
                    },
                    fileUpload: {
                        "file-upload": "File Upload",
                        "file-view-fu": "Uploaded Files Inquiry"
                    },
                    casaCorp: {
                        "demand-deposit-transactions": "View Statement",
                        "cheque-status-inquiry": "Cheque Status Inquiry",
                        "cheque-book-request": "Cheque Book Request",
                        "cheque-stop-unblock": "Stop/Unblock Cheque",
                        "statement-request": "Request Statement"
                    },
                    tdCorp: {
                        "term-deposit-transactions": "View Statement",
                        "td-open": "New Deposit",
                        "td-topup": "Top Up",
                        "td-redeem": "Redemption",
                        "td-amend": "Edit Maturity Instruction",
                        "statement-request": "Request Statement"
                    },
                    loanCorp: {
                        loans: "Overview",
                        "loan-transactions": "View Statement",
                        "loan-repayment": "Loan and Finance Repayment",
                        "loan-disbursement": "Disbursement Inquiry",
                        "loan-schedule": "Schedule Inquiry"
                    }
                },
                generic: e
            },
            ar: !0,
            fr: !0,
            pt: !0,
            zh_CN: !0,
            cs: !1,
            sv: !1,
            en: !1,
            es: !0,
            "en-us": !1,
            el: !1
        }
    }
});


define("load!extensions/framework/elements/api/manage-accounts/manage-accounts-links.json", function() {
    return {
        "demand-deposits": [{
            "component": "demand-deposit-details",
            "module": "demand-deposits"
        }, {
            "component": "demand-deposit-transactions",
            "module": "demand-deposits"
        }, {
            "component": "cheque-book-request",
            "class": "flow"
        }, {
            "component": "cheque-status-inquiry",
            "module": "demand-deposits"
        }, {
            "component": "cheque-stop-unblock",
            "module": "demand-deposits",
            "class": "flow"
        }],
        "term-deposits": [{
            "component": "td-details",
            "module": "term-deposits"
        }, {
            "component": "term-deposit-transactions",
            "module": "term-deposits"
        }, {
            "component": "td-topup",
            "module": "term-deposits"
        }, {
            "component": "td-redeem",
            "module": "term-deposits",
            "class": "flow"
        }, {
            "component": "td-amend",
            "module": "term-deposits",
            "class": "flow"
        }],
        "recurring-deposit": [{
            "component": "rd-details",
            "module": "recurring-deposit"
        }, {
            "component": "recurring-deposit-transactions",
            "module": "recurring-deposit"
        }, {
            "component": "rd-redeem",
            "module": "recurring-deposit"
        }, {
            "component": "rd-amend",
            "module": "recurring-deposit",
            "class": "flow"
        }],
        "nominee": [{
            "component": "casa-nominee-list",
            "module": "nominee"
        }, {
            "component": "td-nominee-list",
            "module": "nominee"
        }, {
            "component": "rd-nominee-list",
            "module": "nominee"
        }],
        "debit-card": [{
            "component": "debit-card-details",
            "module": "demand-deposits"
        }, {
            "component": "debit-card-pin-request",
            "module": "demand-deposits",
            "class": "flow"
        }, {
            "component": "debit-card-hotlisting",
            "module": "demand-deposits",
            "class": "flow"
        }, {
            "component": "upgrade-card",
            "module": "demand-deposits",
            "class": "flow"
        }, {
            "component": "debit-card-reset-pin",
            "module": "demand-deposits"
        }, {
            "component": "reissue-card",
            "module": "demand-deposits",
            "class": "flow"
        }],
        "payments": [{
            "component": "favorites",
            "module": "payments"
        }, {
            "component": "adhoc-payments-generic",
            "module": "payments",
            "class": "flow"
        }, {
            "component": "transfer-to-ecobank-within-africa2",
            "module": "payments"
        }, {
            "component": "multiple-transfers",
            "module": "payments",
            "class": "flow"
        }, {
            "component": "payment-status-inquiry",
            "module": "payments"
        }, {
            "component": "scheduled-payments",
            "module": "payments"
        }, {
            "component": "payments-payee-list",
            "module": "payee"
        }],
        "billPayments": [{
            "component": "quick-bill-payment",
            "module": "bill-payments",
            "class": "flow"
        }, {
            "component": "tax",
            "module": "bill-payments",
            "class": "flow"
        }, {
            "component": "air-time",
            "module": "bill-payments",
            "class": "flow"
        }, {
            "component": "mobile-money",
            "module": "bill-payments",
            "class": "flow"
        }, {
            "component": "data-bundle",
            "module": "bill-payments",
            "class": "flow"
        }, {
            "component": "payment-history",
            "module": "bill-payments"
        }, {
            "component": "manage-bill-payments",
            "module": "bill-payments"
        }, {
            "component": "paybill-beneficiary",
            "module": "bill-payments"
        }],
        "standing-instructions": [{
            "component": "standing-instructions-landing",
            "module": "payments"
        }, {
            "component": "set-repeat-transfer",
            "class": "flow",
            "module": "payments",
            "data": {
                "isStandingInstruction": true
            }
        }],
        "debtor": [{
            "component": "debtor-money-request",
            "module": "debtor",
            "class": "flow"
        }, {
            "component": "debtor-group-list",
            "module": "debtor"
        }],
        "payee": [{
            "component": "bank-account-payee",
            "module": "payee",
            "class": "flow"
        }, {
            "component": "remittance-beneficiaries",
            "module": "payee"
        }],
        "loans": [{
            "component": "retail-loan-details",
            "module": "retail-loans"
        }, {
            "component": "loan-transactions",
            "module": "loans"
        }, {
            "component": "loan-repayment",
            "module": "loans",
            "class": "flow"
        }, {
            "component": "loan-disbursement",
            "module": "loans"
        }, {
            "component": "loan-schedule",
            "module": "loans"
        }],
        "creditcard": [{
            "component": "card-details",
            "module": "creditcard"
        }, {
            "component": "card-statement",
            "module": "creditcard"
        }, {
            "component": "card-pay",
            "module": "creditcard",
            "class": "flow"
        }, {
            "component": "request-pin",
            "module": "creditcard",
            "class": "flow"
        }, {
            "component": "block-card",
            "module": "creditcard",
            "class": "flow"
        }, {
            "component": "auto-pay",
            "module": "creditcard",
            "class": "flow"
        }, {
            "component": "creditcard-reset-pin",
            "module": "creditcard"
        }, {
            "component": "add-on-card",
            "class": "flow"
        }],
        "loan-calculator": [{
            "component": "loan-eligibility-calculator",
            "module": "widgets/calculators"
        }, {
            "component": "loan-calculator",
            "module": "widgets/calculators"
        }],
        "alerts": [{
            "component": "alerts-profile",
            "module": "alerts"
        }, {
            "component": "alerts-casa",
            "module": "alerts"
        }, {
            "component": "alerts-td",
            "module": "alerts"
        }, {
            "component": "alerts-loans",
            "module": "alerts"
        }, {
            "component": "alerts-payments",
            "module": "alerts"
        }],
        "security": [{
            "component": "security-menu",
            "module": "security"
        }],
        "interest-certificates": [{
            "component": "interest-certificate-casa",
            "module": "interest-certificates"
        }, {
            "component": "interest-certificate-td",
            "module": "interest-certificates"
        }, {
            "component": "interest-certificate-loans",
            "module": "interest-certificates"
        }],
        "upi": [{
            "component": "manage-vpa",
            "module": "upi"
        }, {
            "component": "upi-request-money",
            "module": "upi",
            "class": "transaction"
        }, {
            "component": "upi-pending-request",
            "module": "upi"
        }],
        "eNaira": [{
            "component": "add-link-wallet",
            "module": "payments"
        }, {
            "component": "send-to-other-enaira",
            "module": "payments"
        }, {
            "component": "wallet-login-screen",
            "module": "payments"
        }, {
            "component": "send-to-your-enaira-login",
            "module": "payments"
        }],
        "fileUpload": [{
            "component": "file-upload",
            "module": "file-upload"
        }, {
            "component": "file-view-fu",
            "module": "file-upload"
        }],
        "casaCorp": [{
            "component": "demand-deposit-transactions",
            "module": "demand-deposits"
        }, {
            "component": "cheque-status-inquiry",
            "module": "demand-deposits"
        }, {
            "component": "cheque-book-request",
            "module": "demand-deposits",
            "class": "flow"
        }, {
            "component": "cheque-stop-unblock",
            "module": "demand-deposits",
            "class": "flow"
        }],
        "tdCorp": [{
            "component": "term-deposit-transactions",
            "module": "term-deposits"
        }, {
            "component": "td-open",
            "module": "term-deposits",
            "class": "flow"
        }, {
            "component": "td-topup",
            "module": "term-deposits"
        }, {
            "component": "td-redeem",
            "module": "term-deposits",
            "class": "flow"
        }, {
            "component": "td-amend",
            "module": "term-deposits",
            "class": "flow"
        }],
        "loanCorp": [{
            "component": "loan-transactions",
            "module": "loans"
        }, {
            "component": "loan-repayment",
            "class": "flow"
        }, {
            "component": "loan-disbursement",
            "module": "loans"
        }, {
            "component": "loan-schedule",
            "module": "loans"
        }]
    };
});

define('extensions/framework/elements/api/manage-accounts/parsers', [], function() {
    "use strict";
    return {
        accountParser: {
            creditcard: function(t, a) {
                const r = [];
                return t[0].creditcards.forEach(function(t) {
                    "card-details" === a && r.push(t), "card-statement" === a && "PRIMARY" === t.cardOwnershipType && r.push(t), "card-pay" === a && "PRIMARY" === t.cardOwnershipType && "CLD" !== t.cardStatus && r.push(t), "request-pin" === a && "ACT" === t.cardStatus && r.push(t), "block-card" === a && ("ACT" !== t.cardStatus && "IAT" !== t.cardStatus || r.push(t)), "auto-pay" === a && "PRIMARY" === t.cardOwnershipType && "ACT" === t.cardStatus && r.push(t), "creditcard-reset-pin" === a && "PRIMARY" === t.cardOwnershipType && "ACT" === t.cardStatus && r.push(t), "add-on-card" === a && "PRIMARY" === t.cardOwnershipType && "ACT" === t.cardStatus && r.push(t)
                }), t[0].accounts = r, t[0].accounts.map(function(a) {
                    return a.id = a.creditCard, a.partyId = t[0].associatedParty, a.partyName = a.ownerName, a.accountNickname = a.cardNickname, a.associatedParty = t[0].associatedParty, a
                }), t[0].accounts
            },
            "demand-deposits": function(t, a) {
                return "cheque-book-request" === a || "cheque-status-inquiry" === a || "cheque-stop-unblock" === a ? t.filter(function(t) {
                    return t.accountFacilities.hasChequeBook
                }) : t
            },
            "term-deposits": function(t, a) {
                return "td-topup" === a ? t.filter(function(t) {
                    return t.productDTO.facilityParameter && t.productDTO.facilityParameter.topupAllowed
                }) : t
            }
        },
        transactionParser: {
            creditcard: function(t, a) {
                let r = [];
                return "ADDON" === a.cardOwnershipType && "ACT" === a.cardStatus ? r = r.concat(["card-statement", "card-pay", "auto-pay", "reset-pin", "add-on-card"]) : "PRIMARY" === a.cardOwnershipType && "IAT" === a.cardStatus ? r = r.concat(["request-pin", "auto-pay", "reset-pin", "add-on-card"]) : "ADDON" === a.cardOwnershipType && "IAT" === a.cardStatus ? r = r.concat(["card-statement", "card-pay", "request-pin", "auto-pay", "reset-pin", "add-on-card"]) : "PRIMARY" === a.cardOwnershipType && "HTL" === a.cardStatus ? r = r.concat(["request-pin", "block-card", "auto-pay", "reset-pin", "add-on-card"]) : "ADDON" === a.cardOwnershipType && "HTL" === a.cardStatus ? r = r.concat(["card-statement", "card-pay", "request-pin", "block-card", "auto-pay", "reset-pin", "add-on-card"]) : "PRIMARY" === a.cardOwnershipType && "CLD" === a.cardStatus ? r = r.concat(["card-pay", "request-pin", "block-card", "auto-pay", "reset-pin", "add-on-card"]) : "ADDON" === a.cardOwnershipType && "CLD" === a.cardStatus && (r = r.concat(["card-statement", "card-pay", "request-pin", "block-card", "auto-pay", "reset-pin", "add-on-card"])), t.filter(function(t) {
                    return -1 === r.indexOf(t.component)
                })
            },
            "demand-deposits": function(t, a) {
                if (!a.accountFacilities.hasChequeBook) {
                    const a = ["cheque-book-request", "cheque-status-inquiry", "cheque-stop-unblock"];
                    return t.filter(function(t) {
                        return -1 === a.indexOf(t.component)
                    })
                }
                return t
            },
            "term-deposits": function(t, a) {
                if (!a.productDTO.facilityParameter || !a.productDTO.facilityParameter.topupAllowed) {
                    const a = ["td-topup"];
                    return t.filter(function(t) {
                        return -1 === a.indexOf(t.component)
                    })
                }
                return t
            }
        }
    }
});
define('extensions/framework/elements/api/manage-accounts/manage-accounts', ["ojs/ojcore", "knockout", "jquery", "ojL10n!resources/nls/manage-accounts", "load!./manage-accounts-links.json", "./parsers", "ojs/ojrouter", "framework/js/plugins/navigation", "ojs/ojknockout-validation", "ojs/ojknockout", "framework/elements/api/account-input/loader", "framework/elements/api/nav-bar/loader", "framework/elements/api/page-section/loader"], function(e, t, a, o, r, n, i, s) {
    "use strict";

    function l(l) {
        const p = this;
        p.oj = e, p.parameters = l.properties.rootModel.params, p.currentModules = l.properties.baseModel.filterAuthorisedComponents(r[p.parameters.applicationType], "component"), p.removeEvent = l.properties.baseModel.removeEvent, p.state = t.observable("init"), p.previousState = l.properties.rootModel.previousState, p.locale = o, p.selectedTabData = null, p.isReady = t.observable(!1), p.transactionType = t.observable(null), p.menuOptions = t.observableArray(), p.validationTracker = t.observable(), p.accountNumberSelected = t.observable(), p.noAccounts = t.observable(!0), p.additionalDetails = t.observable(), p.menuSelection = t.observable();
        const c = {},
            u = p.currentModules.filter(function(e) {
                return "flow" === e.class
            }).map(function(e) {
                return e.component
            });

        function d() {
            n.transactionParser[p.parameters.applicationType] && (p.currentModules = n.transactionParser[p.parameters.applicationType](p.currentModules, p.parameters)), p.currentModules.forEach(function(e) {
                p.menuOptions.push({
                    id: e.component,
                    label: p.locale.tabs[p.parameters.applicationType][e.component]
                }), "flow" !== e.class && l.properties.baseModel["transaction" === e.class ? "registerTransaction" : "registerComponent"](e.component, e.module)
            }), l.properties.dashboard.helpComponent.componentName(p.parameters.defaultTab), l.properties.dashboard.headerName(o.tabs[p.parameters.applicationType][p.menuSelection()]), p.isReady(!0), s.beforeNavigation(p.childRouter.getState(p.parameters.applicationType + "~" + p.parameters.defaultTab).value, l.properties.dashboard.userData, l.properties.baseModel.large()).then(function() {
                p.childRouter.go(p.parameters.applicationType + "~" + p.parameters.defaultTab, {
                    historyUpdate: "replace"
                })
            })
        }
        p.childRouter = l.properties.dashboard.rootRouter.getChildRouter(i.rootInstance.currentState().id), p.childRouter || (Object.keys(r).forEach(function(e) {
            r[e].forEach(function(t) {
                c[e + "~" + t.component] = {
                    label: t.component,
                    value: t
                }
            })
        }), p.childRouter = l.properties.dashboard.rootRouter.createChildRouter(i.rootInstance.currentState().id).configure(c), i.sync()), l.properties.baseModel.addEvent("flowStateChanged", {
            element: window,
            eventName: "flowStateChanged",
            eventHandler: function(e) {
                "review" === e.detail.value ? p.state("review") : "init" === e.detail.value && p.state("init")
            }
        }), p.beforeSelectHandler = function(e) {
            if (e.detail.originalEvent) {
                e.preventDefault(), l.properties.dashboard.headerName(null);
                const t = e.detail.item.getAttribute("id");
                if (!p.currentModules.filter(function(e) {
                        return e.component === t
                    }).length) return void l.properties.baseModel.showMessages(null, [o.txnNotAvailable], "ERROR");
                l.properties.baseModel.closeNotificationMessages(), l.properties.dashboard.helpComponent.componentName(t), s.beforeNavigation(p.childRouter.getState(p.parameters.applicationType + "~" + t).value, l.properties.dashboard.userData, l.properties.baseModel.large()).then(function() {
                    p.childRouter.go(p.parameters.applicationType + "~" + t)
                })
            }
        }, p.childRouter.currentState.subscribe(function(e) {
            e && e.id && (p.transactionType(null), t.tasks.runEarly(), p.menuSelection(e.value.component), p.transactionType(u.includes(e.value.component) ? "flow" : "conventional"))
        }), p.changeView = function(e, t) {
            p.parameters = t, s.beforeNavigation(p.childRouter.getState(p.parameters.applicationType + "~" + e).value, l.properties.dashboard.userData, l.properties.baseModel.large()).then(function() {
                p.childRouter.go(p.parameters.applicationType + "~" + e)
            })
        }, p.selectAccount = function() {
            l.properties.baseModel.showComponentValidationErrors(p.validationTracker()) && (t.utils.extend(p.parameters, p.additionalDetails()), d(), a("#manageAccountsAccountNumberDropdown").trigger("closeModal"))
        }, p.afterRender = function() {
            p.parameters.moduleURL ? a("#manageAccountsAccountNumberDropdown").trigger("openModal") : d()
        }, p.modalCloseHandler = function() {
            p.isReady() || l.properties.dashboard.switchModule()
        }, p.accountParser = function(e) {
            return p.noAccounts(!1), n.accountParser[p.parameters.applicationType] ? n.accountParser[p.parameters.applicationType](e, p.parameters.defaultTab || p.menuOptions()[0].id) : e
        }
    }
    return l.prototype.disconnected = function() {
        this.removeEvent("flowStateChanged")
    }, l
});

define('text!extensions/framework/elements/api/manage-accounts/component.json', [], function() {
    return '{\r\n    "name": "manage-accounts",\r\n    "version": "1.0.0",\r\n    "jetVersion": "^8.1.0",\r\n    "displayName": "Framework Composite Component",\r\n    "description": "Framework Composite Component",\r\n    "properties": {\r\n        "baseModel": {\r\n            "description": "BaseModel Object",\r\n            "type": "object",\r\n            "required": true\r\n        },\r\n        "dashboard": {\r\n            "description": "Dashboard Object",\r\n            "type": "object",\r\n            "required": true\r\n        },\r\n        "rootModel": {\r\n            "description": " Params",\r\n            "type": "object",\r\n            "required": true\r\n        },\r\n        "formatter": {\r\n            "description": "Formatter Object",\r\n            "type": "object",\r\n            "required": true\r\n        }\r\n    },\r\n    "methods": {},\r\n    "events": {},\r\n    "slots": {}\r\n}';
});


define('text!extensions/framework/elements/api/manage-accounts/manage-accounts.css', [], function() {
    return '@media only screen and (min-width:1024px){.manage-accounts-container .content-container{padding-top:1.2rem}}';
});

define('extensions/framework/elements/api/manage-accounts/loader', ["ojs/ojcomposite", "text!./manage-accounts.html", "./manage-accounts", "text!./component.json", "text!./manage-accounts.css", "base-models/css", "module"], function(e, t, a, o, s, n, c) {
    "use strict";
    e.register("manage-accounts", {
        view: n.transformTemplate(t, s, n.getComponentName(c)),
        viewModel: a,
        metadata: JSON.parse(o)
    })
});