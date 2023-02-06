define('text!framework/elements/api/account-input/account-input.html', [], function() {
    return '<div class="oj-flex oj-flex-items-pad account-input"><!-- ko if: accountFetched() --><div class="oj-flex-item oj-sm-12 label"><oj-label :for="[[id]]"><span data-bind="text:label"></span></oj-label></div><div class="oj-flex-item oj-sm-12"><oj-bind-if test="[[!$properties.accountLookup]]"><oj-select-one minimum-results-for-search="1" required :id="[[id]]" :data-id="[[\'selectedAccount\']]" :disabled="[[readOnly]]" :class="[[$properties.classString]]" value="{{account}}" options="[[displayAccountList]]"></oj-select-one></oj-bind-if><oj-bind-if test="[[$properties.accountLookup]]"><oj-input-text :id="[[$unique+\'lookUpAccount\']]" :data-id="[[\'selectedAccount\']]" class="accountDisplayName" value="[[accountDisplayName]]" required translations=\'[[{\n          "required": {\n            "messageSummary": locale.accountRequiredSummary,  \n            "messageDetail": locale.accountRequiredDetail}}]]\' readonly="[[!!lookUpAccountDetails()]]" on-raw-value-changed="[[rawValueChanged]]"></oj-input-text><a href="#" data-bind="click: openLookupPanel, attr:{title: locale.openLookup }"><oj-bind-text value="[[locale.lookupAccout]]"></oj-bind-text></a></oj-bind-if><!-- ko if:type === \'address\' && adtnlFetched() && account() !== "all"--><div><div data-bind="text:customerName"></div><div data-bind="text:additionalDetails().address.branchName"></div><div data-bind="text:additionalDetails().address.branchAddress.postalAddress.line1"></div><div data-bind="text:additionalDetails().address.branchAddress.postalAddress.line2"></div><div data-bind="text:additionalDetails().address.branchAddress.postalAddress.city"></div><div data-bind="text:additionalDetails().address.branchAddress.postalAddress.country"></div></div><!-- /ko --><!-- ko if:type === \'balance\' && adtnlFetched() && additionalDetails().account.availableBalance && account() !== "all"--><div class="account-input__info-text-small"><span data-bind="text:$properties.baseModel.format(locale.balanceNholding , {\'balance\' : $properties.formatter.formatCurrency(additionalDetails().account.availableBalance.amount,additionalDetails().account.availableBalance.currency)})"></span></div><!-- /ko --></div><!-- /ko --></div>';
});


define('resources/nls/account-input', ["ojL10n!resources/nls/generic"], function(c) {
    "use strict";
    return new function() {
        return {
            root: {
                balanceNholding: "Balance : {balance}",
                noAccounts: "No Account(s) available",
                selectAccount: "Select Account",
                accountSelected: "Account Number",
                accountLabel: "Source Account",
                displayContent: "{displayValue} - {nickname}",
                optGroup: "{id} - {name}",
                CON: "Conventional Account",
                ISL: "Islamic Account",
                RD: "Recurring Deposit",
                txnNotAvailable: "This facility is not available for the selected account.",
                holdingPatternType: {
                    SINGLE: "Single",
                    JOINT: "Joint"
                },
                lookupAccout: "Look up Account",
                searchAccount: "Search Account",
                openLookup: "Open Lookup",
                accountRequiredSummary: "Select Account",
                accountRequiredDetail: "Select an Account",
                generic: c
            },
            ar: !0,
            fr: !0,
            es: !0,
            zh_CN: !0,
            cs: !0,
            sv: !0,
            en: !1,
            "en-us": !1,
            el: !0
        }
    }
});

define('framework/elements/api/account-input/model', ["baseService", "baseModel"], function(t, e) {
    "use strict";
    return new function() {
        const c = t.getInstance(),
            n = e.getInstance();
        return {
            fetchAccountData: function(t, e) {
                let a = [];
                const r = [];
                Array.isArray(t) ? a = t : a.push(t);
                let o = 0;
                return a.forEach(function(t) {
                    const c = Object.assign({}, n.QueryParams.get(null, t), {
                        taskCode: e
                    });
                    t = n.QueryParams.remove(t), r.push({
                        headers: {
                            "Content-Id": o,
                            "Content-Type": "application/json"
                        },
                        uri: {
                            value: n.format(n.QueryParams.add("/accounts/{urlType}", c), {
                                urlType: t
                            })
                        },
                        methodType: "GET"
                    }), o++
                }), c.fetchWidget({
                    url: "batch",
                    mockedUrl: "framework/json/design-dashboard/accounts/batch-account.json"
                }, {}, {
                    batchDetailRequestList: r
                })
            },
            fetchLookupAccountData: function(t, e) {
                let n = "";
                return t.forEach(function(t) {
                    n += "accountType=" + t + "&"
                }), n = n.substring(0, n.length - 1), c.fetch({
                    url: "accounts?accountComplex={accountComplex}&" + n
                }, {
                    accountComplex: e || null
                })
            },
            fetchBankAddress: function(t) {
                return c.fetch({
                    url: "locations/branches?branchCode={bankCode}"
                }, {
                    bankCode: t
                })
            },
            fetVirtualAccountBalance: function(t, e) {
                return c.fetch({
                    url: n.format("accounts/virtual/{accID}/balances;currency={currency}", {
                        accID: t,
                        currency: e
                    })
                })
            }
        }
    }
});
define('framework/elements/api/account-input/account-input', ["knockout", "ojL10n!resources/nls/account-input", "./model", "ojs/ojselectcombobox", "framework/elements/api/account-lookup/loader"], function(e, t, o) {
    "use strict";

    function a(a) {
        if (a.properties.accountLookup && (!a.properties.accountType || !a.properties.accountType.length)) throw new Error("Account type required");
        const c = this;
        c.locale = t, c.accountsParser = a.properties.accountsParser, c.accountList = e.observableArray(), c.displayAccountList = e.observableArray(), c.customerName = e.observable(), c.accountFetched = e.observable(), c.adtnlFetched = e.observable(!1), c.bankCode = e.observable(), c.type = a.properties.type, c.account = e.observable(a.properties.account), c.id = a.properties.baseModel.incrementIdCount(), c.readOnly = !!a.properties.readOnly && a.properties.readOnly, c.label = c.readOnly ? c.locale.accountSelected : a.properties.label || c.locale.selectAccount, c.additionalDetails = a.properties.additionalDetails ? e.observable(a.properties.additionalDetails) : e.observable(), c.lookUpAccountDetails = e.observable(null), c.lookUpDisplayElement = null, c.rawValueChanged = function() {
            !c.lookUpAccountDetails() && c.lookUpDisplayElement && c.lookUpDisplayElement.reset()
        }, c.accountDisplayName = e.computed(function() {
            return c.lookUpAccountDetails() ? c.getDisplayText(c.lookUpAccountDetails().id.displayValue, c.lookUpAccountDetails().accountNickname) : ""
        }), c.additionalDetails.subscribe(function(e) {
            a.properties.additionalDetails = e
        });
        const n = new Set;

        function l(e) {
            if (c.adtnlFetched(!1), e) {
                let t = null;
                t = a.properties.accountLookup ? c.lookUpAccountDetails() : c.accountList().filter(function(t) {
                    return e === t.id.value
                })[0], c.account(e), c.customerName(t.partyName), "address" === c.type ? (c.bankCode(t.branchCode), o.fetchBankAddress(c.bankCode()).then(function(e) {
                    c.additionalDetails({
                        address: e.addressDTO[0],
                        account: t
                    }), c.adtnlFetched(!0)
                })) : "balance" === c.type ? "VRA" === t.type || "VER" === t.type ? o.fetVirtualAccountBalance(t.id.value, t.currencyCode).then(function(e) {
                    e.virtualAccountDTO.balance.forEach(function(e) {
                        "availableBal" === e.type && (t.availableBalance = e.amount[0])
                    }), c.additionalDetails({
                        account: t
                    }), c.adtnlFetched(!0)
                }) : (c.additionalDetails({
                    account: t
                }), c.adtnlFetched(!0)) : "nodeValue" === c.type ? (c.additionalDetails(t), c.adtnlFetched(!0)) : c.module && "loans" === c.module && (c.additionalDetails({
                    account: t
                }), c.adtnlFetched(!0))
            } else c.lookUpAccountDetails(null)
        }
        c.getDisplayText = function(e, t) {
            return t ? a.properties.baseModel.format(c.locale.displayContent, {
                displayValue: e,
                nickname: t
            }) : e
        }, c.fetchList = function() {
            o.fetchAccountData(e.utils.unwrapObservable(a.properties.customUrl || "demandDeposit"), e.utils.unwrapObservable(a.properties.taskCode)).then(function(t) {
                c.accountList.removeAll(), c.displayAccountList.removeAll();
                let o = [];
                if (t.batchDetailResponseDTOList.forEach(function(e) {
                        200 === e.status && (e.responseObj.accounts ? o = o.concat(e.responseObj.accounts) : Array.isArray(e.responseObj) ? o = o.concat(e.responseObj) : (e.responseObj.id || e.responseObj.creditcards) && (o = o.concat(e.responseObj)))
                    }), c.accountsParser && (o = c.accountsParser(o)), !o.length) return a.properties.baseModel.showMessages(null, [a.properties.no_data_message || c.locale.noAccounts], "ERROR"), void c.accountFetched(!0);
                if (c.account()) {
                    if (!o.filter(function(e) {
                            return e.id.value === c.account()
                        })[0]) return a.properties.baseModel.showMessages(null, [c.locale.txnNotAvailable], "ERROR"), void c.accountFetched(!0)
                }
                e.utils.arrayPushAll(c.accountList, o), (o = a.properties.baseModel.sortLib(o, ["partyName", "accountNickname"])).forEach(function(e) {
                    e.label = c.getDisplayText(e.id.displayValue, e.accountNickname), e.value = e.id.value, n.add(e.module), e.defaultAccount && !c.account() && c.account(e.id.value)
                });
                let s = a.properties.baseModel.groupBy(o, n.size > 1 ? ["partyId.value", "module"] : ["partyId.value"], function(e) {
                    return [e.partyName, n.size > 1 ? c.locale[e.module] : e.partyName]
                });
                1 === s.length && (s = s[0].children), e.utils.arrayPushAll(c.displayAccountList, s), a.properties.showAll && c.displayAccountList.unshift({
                    value: "all",
                    label: "All"
                }), l(c.account()), c.accountFetched(!0)
            })
        }, a.properties.accountLookup ? a.properties.account ? o.fetchLookupAccountData(a.properties.accountType, a.properties.account).then(function(e) {
            if (e.accounts.length) {
                const t = e.accounts[0];
                c.lookUpAccountDetails(t), l(t.id.value), c.accountFetched(!0)
            } else a.properties.baseModel.showMessages(null, [a.properties.no_data_message || c.locale.noAccounts], "ERROR")
        }) : c.accountFetched(!0) : c.fetchList();
        const s = c.account.subscribe(function(e) {
            a.properties.account = e, "all" !== e && (l(e), l(e))
        });
        c.openLookupPanel = function() {
            document.dispatchEvent(new CustomEvent("openRightPanel", {
                detail: {
                    props: {
                        account: c.account,
                        accountType: a.properties.accountType,
                        accountDetails: c.lookUpAccountDetails,
                        baseModel: a.properties.baseModel,
                        taskCode: a.properties.taskCode
                    },
                    component: "account-lookup",
                    header: c.locale.searchAccount,
                    isCCA: !0
                }
            }))
        }, c.dispose = function() {
            s.dispose()
        }
    }
    return a.prototype.bindingsApplied = function(e) {
        e.properties.accountLookup && (this.lookUpDisplayElement = document.getElementById(e.unique + "lookUpAccount"))
    }, a.prototype.propertyChanged = function(e) {
        "external" === e.updatedFrom && ("taskCode" === e.property || "customUrl" === e.property ? (this.account(null), this.fetchList()) : "account" === e.property && this.account(null))
    }, a
});

define('text!framework/elements/api/account-input/component.json', [], function() {
    return '{\r\n  "name": "account-input",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "accountsParser": {\r\n      "description": "Account Parser Function",\r\n      "type": "function"\r\n    },\r\n    "taskCode": {\r\n      "description": "Task Code",\r\n      "type": "string",\r\n      "writeback": true,\r\n      "translatable": false\r\n    },\r\n    "type": {\r\n      "description": "Additional Detail Type",\r\n      "type": "string",\r\n      "required": true,\r\n      "translatable": false\r\n    },\r\n    "accountType": {\r\n      "description": "Account Type",\r\n      "type": "array",\r\n      "required": true\r\n    },\r\n    "customUrl": {\r\n      "description": "Custom Url",\r\n      "type": "function",\r\n      "writeback": true,\r\n      "required": true,\r\n      "translatable": false\r\n    },\r\n    "account": {\r\n      "description": "Selected account number",\r\n      "type": "function",\r\n      "writeback": true,\r\n      "required": true\r\n    },\r\n    "baseModel": {\r\n      "description": "Base Model Object",\r\n      "type": "object",\r\n      "required": true\r\n    },\r\n    "formatter": {\r\n      "description": "Formatter Object",\r\n      "type": "object",\r\n      "required": true\r\n    },\r\n    "classString": {\r\n      "description": "Class name to be binded to Oj Select",\r\n      "type": "string",\r\n      "translatable": false\r\n    },\r\n    "readOnly": {\r\n      "description": "True to set Oj Select read only",\r\n      "type": "boolean"\r\n    },\r\n    "additionalDetails": {\r\n      "description": "Additional Details Object",\r\n      "type": "function",\r\n      "writeback": true\r\n    },\r\n    "label": {\r\n      "description": "Label Name",\r\n      "type": "string",\r\n      "translatable": true\r\n    },\r\n    "accountLookup": {\r\n      "description": "Flag to enable lookup",\r\n      "type": "boolean"\r\n    },\r\n    "showAll": {\r\n      "description": "Select All Account",\r\n      "type": "boolean"\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});


define('text!framework/elements/api/account-input/account-input.css', [], function() {
    return '.account-input-container .account-input__info-text-small{font-size:var(--base-font-size-medium);color:var(--base-text-secondary);padding-bottom:.55rem}.account-input-container .account-input .accountDisplayName,.account-input-container .account-input .oj-select{min-width:10rem;max-width:13rem}.account-input-container .account-input .accountDisplayName.oj-disabled,.account-input-container .account-input .oj-select.oj-disabled{max-width:100%;height:auto}.account-input-container .account-input .accountDisplayName.oj-disabled .oj-select-choice .oj-select-chosen,.account-input-container .account-input .oj-select.oj-disabled .oj-select-choice .oj-select-chosen{white-space:normal}.account-input-container .account-input .accountDisplayName.oj-disabled .oj-text-field-container,.account-input-container .account-input .oj-select.oj-disabled .oj-text-field-container{height:auto}';
});

define('framework/elements/api/account-input/loader', ["ojs/ojcomposite", "module", "text!./account-input.html", "./account-input", "text!./component.json", "text!./account-input.css", "base-models/css"], function(t, e, o, n, c, s, a) {
    "use strict";
    t.register("account-input", {
        viewModel: n,
        view: a.transformTemplate(o, s, a.getComponentName(e)),
        metadata: JSON.parse(c)
    })
});