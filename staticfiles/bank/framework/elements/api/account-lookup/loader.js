define('text!framework/elements/api/account-lookup/account-lookup.html', [], function() {
    return '<oj-validation-group id="account-lookup-tracker"><oj-form-layout max-columns="2" direction="column" class="lr-padding"><oj-input-text id="accountNumber" label-hint="[[locale.accountSelected]]" value="{{accountNumber}}" :aria-label="[[locale.accountSelected]]"></oj-input-text><oj-combobox-one id="selectedBranch" label-hint="[[locale.branch]]" :aria-label="[[locale.branch]]" placeholder="[[locale.select]]" value="{{branch}}"><oj-bind-for-each data="[[branchList]]"><template><oj-option value="[[$current.data.id]]"><oj-bind-text value="[[$current.data.branchName]]"></oj-bind-text></oj-option></template></oj-bind-for-each></oj-combobox-one><oj-input-text id="accountName" label-hint="[[locale.accountName]]" value="{{accountName}}" validators="[[$properties.baseModel.getValidator(\'NAME\')]]" :aria-label="[[locale.accountName]]"></oj-input-text><oj-combobox-one id="selectedCurrency" label-hint="[[locale.currency]]" :aria-label="[[locale.currency]]" placeholder="[[locale.select]]" value="{{currency}}"><oj-bind-for-each data="[[currencyList]]"><template><oj-option value="[[$current.data.code]]"><oj-bind-text value="[[$current.data.code]]"></oj-bind-text></oj-option></template></oj-bind-for-each></oj-combobox-one></oj-form-layout></oj-validation-group><div class="button-container"><oj-button class="action-button-primary" on-oj-action="[[fetchAccounts.bind($data, false)]]"><oj-bind-text value="[[locale.search]]"></oj-bind-text></oj-button><oj-button class="action-button-tertiary" on-oj-action="[[resetFilters]]"><oj-bind-text value="[[locale.clear]]"></oj-bind-text></oj-button></div><oj-bind-if test="[[tableDataFetched]]"><oj-table class="lr-padding" id="accountsTable" :aria-label="[[locale.accountsTable]]" data="[[dataprovider]]" columns=\'[[[{field: "accNumName", headerText: locale.accountNoAndName, template: "accNumNameTemplate", sortProperty: "displayValue"}, {field: "accBranch", headerText: locale.accountBranch, sortProperty: "branchCode"}, {field: "currency", headerText: locale.currency, sortProperty: "currencyCode"}]]]\'><template slot="cellTemplate" data-oj-as="cell"><oj-bind-text value="[[cell.columnIndex === 1 ? cell.row.branchCode : cell.row.currencyCode]]"></oj-bind-text></template><template slot="accNumNameTemplate" data-oj-as="cell"><a href="#" data-bind="click: selectAccount.bind(null, cell.row), attr:{title: locale.selectAccount }"><oj-bind-text value="[[cell.row.displayValue]]"></oj-bind-text></a><oj-bind-if test="[[cell.row.displayName]]"><div><oj-bind-text value="[[cell.row.displayName]]"></oj-bind-text></div></oj-bind-if></template><oj-paging-control data="[[dataprovider]]" page-size="5" slot="bottom"></oj-paging-control></oj-table></oj-bind-if><div class="button-container"><oj-button class="action-button-secondary" on-oj-action="[[closeHandler]]"><oj-bind-text value="[[locale.cancel]]"></oj-bind-text></oj-button></div>';
});

define('resources/nls/account-lookup', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                accountsTable: "Accounts Table",
                noAccounts: "No Account(s) available",
                noFilter: "No Filter(s) applied",
                accountSelected: "Account Number",
                accountName: "Account Name",
                branch: "Branch",
                currency: "Currency",
                search: "Search",
                select: "Select",
                clear: "Clear",
                accountBranch: "Account Branch",
                accountNoAndName: "Account No & Name",
                cancel: "Cancel",
                dismissLookupPanel: "Close Lookup Panel",
                selectAccount: "Select Account"
            },
            ar: !1,
            fr: !0,
            cs: !1,
            sv: !1,
            en: !1,
            "en-us": !1,
            el: !1,
            es: !0
        }
    }
});

define('framework/elements/api/account-lookup/model', ["baseService"], function(c) {
    "use strict";
    return new function() {
        const n = c.getInstance();
        return {
            fetchAccountsData: function(c, t, e, u, r, a) {
                let o = "";
                return c.forEach(function(c) {
                    o += "accountType=" + c + "&"
                }), o = o.substring(0, o.length - 1), n.fetch({
                    url: "accounts?account={account}&accountName={accountName}&branchCode={branchCode}&accountCurrency={accountCurrency}&taskCode={taskCode}&" + o
                }, {
                    account: "" !== t ? t : null,
                    accountName: "" !== e ? e : null,
                    branchCode: u || null,
                    accountCurrency: r || null,
                    taskCode: a || null
                })
            },
            fetchCurrency: function() {
                return n.fetch({
                    url: "currency"
                })
            },
            fetchBranches: function() {
                return n.fetch({
                    url: "locations/country/all/city/all/branchCode/"
                })
            }
        }
    }
});
define('framework/elements/api/account-lookup/account-lookup', ["knockout", "ojL10n!resources/nls/account-lookup", "./model", "ojs/ojarraydataprovider", "ojs/ojpagingdataproviderview", "ojs/ojpagingcontrol", "ojs/ojformlayout", "ojs/ojtable", "ojs/ojselectsingle", "ojs/ojselectcombobox", "ojs/ojlabel"], function(e, c, t, n, o) {
    "use strict";
    return function(a) {
        const r = this,
            s = a.properties;
        if (!s.accountType || !s.accountType.length) throw new Error("Account type required");
        r.locale = c, r.accountNumber = e.observable(""), r.accountName = e.observable(""), r.currency = e.observable(null), r.branch = e.observable(null), r.tableDataFetched = e.observable(!0), r.currencyList = e.observableArray([]), r.branchList = e.observableArray([]);
        let u = [];
        const l = e.observableArray([]);
        r.dataprovider = new o(new n([], {
            idAttribute: "accountID"
        })), t.fetchCurrency().then(function(c) {
            r.currencyList(c.currencyList), e.tasks.runEarly(), document.getElementById("selectedCurrency").refresh()
        }), t.fetchBranches().then(function(c) {
            c.branchAddressDTO.length && (r.branchList(c.branchAddressDTO), e.tasks.runEarly(), document.getElementById("selectedBranch").refresh())
        }), r.fetchAccounts = function() {
            const c = document.getElementById("account-lookup-tracker");
            if ("valid" !== c.valid) return c.showMessages(), void c.focusOn("@firstInvalidShown");
            r.accountNumber() || r.accountName() || r.currency() || r.branch() ? (l.removeAll(), t.fetchAccountsData(s.accountType, r.accountNumber(), r.accountName(), r.branch(), r.currency(), s.taskCode).then(function(c) {
                r.tableDataFetched(!1), e.tasks.runEarly(), (u = c.accounts).length || s.baseModel.showMessages(null, [r.locale.noAccounts], "ERROR"), c.accounts.forEach(function(e) {
                    l.push({
                        accountID: e.id.value,
                        currencyCode: e.currencyCode,
                        branchCode: e.branchCode,
                        displayValue: e.id.displayValue,
                        displayName: e.displayName
                    })
                }), r.dataprovider = new o(new n(l, {
                    idAttribute: "accountID"
                })), r.tableDataFetched(!0)
            })) : s.baseModel.showMessages(null, [r.locale.noFilter], "ERROR")
        }, r.closeHandler = function() {
            document.dispatchEvent(new CustomEvent("closeRightPanel"))
        }, r.selectAccount = function(e) {
            e && (s.account = e.accountID, s.accountDetails = u.filter(function(c) {
                return c.id.value === e.accountID
            })[0], r.closeHandler())
        }, r.resetFilters = function() {
            r.accountNumber(""), r.accountName(""), r.currency(null), r.branch(null), l.removeAll(), document.getElementById("accountNumber").reset(), document.getElementById("accountName").reset(), document.getElementById("selectedCurrency").reset(), document.getElementById("selectedBranch").reset(), document.getElementById("accountsTable").refresh(), a.properties.baseModel.closeNotificationMessages()
        }
    }
});

define('text!framework/elements/api/account-lookup/component.json', [], function() {
    return '{\r\n  "name": "account-lookup",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "account": {\r\n      "description": "Selected account",\r\n      "type": "function",\r\n      "writeback": true,\r\n      "required": true\r\n    },\r\n    "accountType": {\r\n      "description": "Account Type",\r\n      "type": "array",\r\n      "required": true\r\n    },\r\n    "accountDetails": {\r\n      "description": "Account Details",\r\n      "type": "object",\r\n      "writeback": true\r\n    },\r\n    "baseModel": {\r\n      "description": "Base Model Context",\r\n      "type": "object",\r\n      "required": true\r\n    },\r\n    "taskCode": {\r\n      "description": "Task Code",\r\n      "type": "string",\r\n      "writeback": true,\r\n      "translatable": false\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});


define('text!framework/elements/api/account-lookup/account-lookup.css', [], function() {
    return '.account-lookup-container account-lookup:not(.oj-complete){visibility:hidden}.account-lookup-container .lr-padding{padding:0 10px}';
});

define('framework/elements/api/account-lookup/loader', ["ojs/ojcomposite", "module", "text!./account-lookup.html", "./account-lookup", "text!./component.json", "text!./account-lookup.css", "base-models/css"], function(o, e, t, c, s, n, a) {
    "use strict";
    o.register("account-lookup", {
        viewModel: c,
        view: a.transformTemplate(t, n, a.getComponentName(e)),
        metadata: JSON.parse(s)
    })
});