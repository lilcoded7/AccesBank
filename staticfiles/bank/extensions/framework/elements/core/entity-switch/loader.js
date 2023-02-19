define('text!extensions/framework/elements/core/entity-switch/entity-switch.html', [], function() {
    return '<div class="entity-switch"><!-- ko if : $properties.rootModel.menuNavigationAvailable --><oj-toolbar id="defaultActions" class="pull-right"><!-- ko if:availableViews().length > 0 --><!-- ko if: resetView() --><oj-menu-button class="action-item" id="view-switcher" :aria-label="[[nls.roles.currentView]]"><oj-bind-text value="[[currentView]]"></oj-bind-text><oj-menu id="viewMenu" slot="menu" class="hide" on-oj-action="[[changeView]]"><!-- ko foreach : availableViews  --><oj-option value="{{$data.dashboardClassValue}}"><span data-bind="text:$parent.nls.roles[$data.dashboardClassValue.toLowerCase()] || $data.dashboardClassValue"></span></oj-option><!-- /ko --></oj-menu></oj-menu-button><!-- /ko --><!-- /ko --><div class=""><h4 class="" data-bind="text:nls.help" on-click="[[openWebHelpWindow]] " style="color:#fff;font-weight:400;cursor:pointer"></h4></div><!-- ko if:languageOptions().length > 0 --><oj-menu-button class="action-item" id="language-switcher" :aria-label="[[nls.changeLanguage]]"><oj-bind-text value="{{currentLanguage}}"></oj-bind-text><oj-menu id="languageMenu" slot="menu" class="hide" on-oj-action="[[switchLanguage]]"><!-- ko foreach : languageOptions  --><oj-option value="{{$data.code}}"><span data-bind="text:$data.description"></span></oj-option><!-- /ko --></oj-menu></oj-menu-button><!-- /ko --><!-- ko if: $properties.rootModel.isDashboardSet() && entityListLoaded() --><oj-menu-button class="action-item" id="entity-switcher" :aria-label="[[nls.entity.currentView]]"><oj-bind-text value="[[currentEntity]]"></oj-bind-text><oj-menu id="myMenu" slot="menu" class="hide" on-oj-action="[[menuItemAction]]"><!-- ko foreach : entityList  --><oj-option value="{{$data.value}}"><span data-bind="text:$data.text"></span></oj-option><!-- /ko --></oj-menu></oj-menu-button><!-- /ko --></oj-toolbar><!-- /ko --></div>';
});

define('extensions/framework/elements/core/entity-switch/model', ["baseService"], function(e) {
    "use strict";
    const t = e.getInstance();
    return new function() {
        return {
            fetchUserData: function() {
                return t.fetch({
                    url: "me"
                })
            },
            fetchAvailableLocale: function() {
                return t.fetch({
                    url: "enumerations/locale",
                    showMessage: !1
                })
            },
            fetchEntities: function() {
                return t.fetch({
                    url: "entities",
                    showMessage: !1
                })
            }
        }
    }
});
define('extensions/resources/nls/entity-switch', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                roles: {
                    currentView: "Current View",
                    CORP: "Corporate",
                    CORPADMIN: "Corporate Administrator",
                    ADMIN: "Administrator",
                    maker: "Maker",
                    viewer: "Viewer",
                    checker: "Approver",
                    corporateadminchecker: "Administrator Approver",
                    corporateadminmaker: "Administrator Maker",
                    adminchecker: "Approver",
                    adminmaker: "Maker",
                    authadmin: "System Administrator",
                    custom: "My Dashboard",
                    customer: "Default Dashboard"
                },
                entity: {
                    currentView: "Current Entity",
                    select: "Select Country",
                    country: "Country"
                },
                atmBranch: "ATM/Branch",
                changeLanguage: "Change Language",
                help: "Help"
            },
            ar: !0,
            es: !0,
            pt: !0,
            fr: !0,
            zh_CN: !0,
            cs: !0,
            sv: !0,
            en: !1,
            "en-us": !1,
            el: !0
        }
    }
});

define('extensions/framework/elements/core/entity-switch/entity-switch', ["knockout", "./model", "ojL10n!extensions/resources/nls/entity-switch", "framework/js/constants/constants", "framework/js/configurations/config", "platform", "ojs/ojselectcombobox", "ojs/ojtoolbar"], function(e, t, n, s, o, a) {
    "use strict";
    return function(o) {
        const r = this;
        r.nls = n, r.entityList = e.observableArray(), r.entityListLoaded = e.observable(!1), r.currentEntity = e.observable(), r.currentLanguage = e.observable(), r.availableViews = e.observableArray(), r.currentView = e.observable(), r.resetView = e.observable(!0);
        const i = [];
        let l = null;
        r.languageOptions = e.observableArray(), o.properties.rootModel.userInfoPromise.then(function(o) {
            if ((l = o.userData.userProfile) && l.accessibleEntityDTOs && l.accessibleEntityDTOs.length) {
                if (l.accessibleEntityDTOs.length > 1) {
                    for (let e = 0; e < l.accessibleEntityDTOs.length; e++) r.entityList.push({
                        text: l.accessibleEntityDTOs[e].entityName,
                        value: l.accessibleEntityDTOs[e].entityId
                    });
                    r.currentEntity(r.entityList().find(function(e) {
                        return e.value === s.currentEntity
                    }).text), r.entityListLoaded(!0)
                }
            } else t.fetchEntities().then(function(t) {
                s.currentEntity || (s.currentEntity = t.businessUnitDTOs[0].businessUnitCode), t.businessUnitDTOs = t.businessUnitDTOs.sort(function(e, t) {
                    return e.businessUnitName.localeCompare(t.businessUnitName)
                }), e.utils.arrayPushAll(r.entityList, t.businessUnitDTOs.map(function(e) {
                    return {
                        text: e.businessUnitName,
                        value: e.businessUnitCode
                    }
                })), r.currentEntity("Benin"), r.entityListLoaded(!0)
            });
            o.dashboards.length > 1 && (r.availableViews(o.dashboards.filter(function(e) {
                return ("APPLICATION_ROLE" !== e.dashboardClass || !i.includes(e.dashboardClassValue.toLowerCase())) && (i.push(e.dashboardClassValue.toLowerCase()), "APPLICATION_ROLE" === e.dashboardClass || "CUSTOM" === e.dashboardClass)
            })), r.currentView(n.roles[r.availableViews()[0].dashboardClassValue.toLowerCase()] || r.availableViews()[0].dashboardClassValue))
        }), t.fetchAvailableLocale().then(function(e) {
            e.enumRepresentations[0].data = e.enumRepresentations[0].data.sort(function(e, t) {
                return e.description.localeCompare(t.description)
            }), r.languageOptions(e.enumRepresentations[0].data), r.currentLanguage(e.enumRepresentations[0].data.find(function(e) {
                return e.code === o.properties.baseModel.getLocale()
            }).description)
        }), r.menuItemAction = function(e) {
            e.target.value !== s.currentEntity && o.properties.changeMenuState("close").then(function() {
                o.properties.rootModel.resetLayout(e.target.value)
            })
        }, r.switchLanguage = function(e) {
            o.properties.baseModel.getLocale() !== e.target.value && (sessionStorage.setItem("user-locale", e.target.value), window.location.reload())
        }, r.openWebHelpWindow = function() {
            if ("corp" === window.status) {
                const e = "https://ecobank.com/ng/commercial-banking/omni-lite";
                r.resolveBrowser(e)
            } else {
                const e = "https://ecobank.com/ng/personal-banking/ways-to-bank/internet-banking";
                r.resolveBrowser(e)
            }
        }, r.resolveBrowser = function(e, t) {
            a.getInstance("device").then(function(n) {
                if (n("getServerType")) return "IOS" === r.cordovaDevice() ? window.cordova.InAppBrowser.open(e, t) : window.open(e);
                const s = window.open("");
                return window.oldOpen = window.open, window.open = function(e) {
                    s.location = e, window.open = window.oldOpen, s.focus()
                }, window.open(e)
            })
        }, r.openATMBranch = function() {
            o.properties.dashboard.loadComponent("locator", {})
        }, r.changeView = function(t) {
            if (o.properties.rootModel.isUserDataSet() && t.target.value) {
                r.resetView(!1), e.tasks.runEarly();
                const a = t.target.value,
                    i = o.properties.rootModel.getRoleBasedSegment(t.target.value);
                i && s.userSegment !== i && (o.properties.rootModel.changeSegment(i, o.properties.dashboard.userData.userProfile.roles), o.properties.dashboard.appData.segment = i, o.properties.baseModel.dispatchCustomEvent(window, "menuChanged"), o.properties.baseModel.dispatchCustomEvent(window, "headerMenuChanged")), o.properties.baseModel.dispatchCustomEvent(window, "roleChanged", {
                    value: a
                }), r.currentView(n.roles[t.target.value.toLowerCase()] || t.target.value), o.properties.changeMenuState("close").then(function() {
                    o.properties.dashboard.switchModule(a, !0)
                }), r.resetView(!0)
            }
        }
    }
});

define('text!extensions/framework/elements/core/entity-switch/component.json', [], function() {
    return '{\r\n  "name": "entity-switch",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "rootModel": {\r\n      "description": "Root Model Context",\r\n      "type": "object"\r\n    },\r\n    "baseModel": {\r\n      "description": "Base Model Context",\r\n      "type": "object"\r\n    },\r\n    "dashboard": {\r\n      "type": "object"\r\n    },\r\n    "changeMenuState": {\r\n      "type": "function"\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});


define('text!extensions/framework/elements/core/entity-switch/entity-switch.css', [], function() {
    return '.entity-switch-container .entity-switch{width:100%;height:var(--top-header-height)}.entity-switch-container .entity-switch .action-item .oj-button-button{background-color:var(--top-header-gradient-direction);border:none}.entity-switch-container .entity-switch .action-item .oj-button-button .oj-button-label .oj-button-icon,.entity-switch-container .entity-switch .action-item .oj-button-button .oj-button-label .oj-button-text{color:var(--top-header-foreground-color)}@media only screen and (max-width:767px){.entity-switch-container .entity-switch{width:90%}}';
});

define('extensions/framework/elements/core/entity-switch/loader', ["ojs/ojcomposite", "module", "text!./entity-switch.html", "./entity-switch", "text!./component.json", "text!./entity-switch.css", "base-models/css"], function(t, e, s, i, o, n, c) {
    "use strict";
    t.register("entity-switch", {
        viewModel: i,
        view: c.transformTemplate(s, n, c.getComponentName(e)),
        metadata: JSON.parse(o)
    })
});