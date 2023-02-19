define('text!extensions/framework/elements/core/dashboard-container/dashboard-container.html', [], function() {
    return '<!-- ko if: render() --><div class="widget-container"><div data-bind="template: {name : \'dashboard-notification\'}"></div><div class="oj-flex" data-bind="css: !$properties.baseModel.small() ? \'oj-flex-items-pad\' : \'\'"><!-- ko let: {$baseModel: $properties.baseModel, $dashboard: $properties.dashboard, $formatter: $properties.formatter, $root: $properties.rootModel, $oj: oj}--><!-- ko foreach: layout --><section class="oj-flex-item" data-bind="css:$data.style ? style:\'oj-sm-12\',component: {name: componentName, params:{data:$data}}"></section><!-- /ko --><!-- /ko --></div></div><!-- /ko -->';
});

define('extensions/framework/elements/core/dashboard-container/model', ["baseService"], function(e) {
    "use strict";
    return new function() {
        const s = e.getInstance();
        return {
            fetchModules: function(e, c) {
                return s.fetch({
                    url: "dashboards/modules?class={class}&value={classValue}"
                }, {
                    class: e,
                    classValue: c
                })
            }
        }
    }
});

define('resources/nls/dashboard', ["ojL10n!resources/nls/generic"], function(e) {
    "use strict";
    return new function() {
        return {
            root: {
                bankName: "Ecobank",
                backImage: "Go back",
                skipToMainContent: "Skip to main content",
                headers: {
                    approver: "Approver",
                    loans: "Loans",
                    maker: "Maker",
                    "demand-deposits": "Savings & Current",
                    "term-deposits": "Term Deposits",
                    viewer: "Viewer",
                    overview: "Overview",
                    payments: "Payments",
                    creditCard: "Credit Cards",
                    systemDashboard: "Dashboard",
                    dashboard: "Dashboard",
                    dashboardnStatistics: "Dashboard and Statistics",
                    "supply-chain-finance": "Supply Chain Finance",
                    "liquidity-management": "Liquidity Management",
                    "virtual-account-management": "Virtual Account Management",
                    "credit-facility-management": "Credit Facility Management",
                    "cash-management": "Cash Management"
                },
                sessionExpiredHeader: "Session Expired",
                sessionExpired: "Your session has expired. Please try again.",
                passwordWarningMessage: "Your password is about to expire in {pwdExpiryWarningDays} days, please change your password at the earliest.",
                fatcaWarningMessage: "You are required to submit FATCA & CRS related information. Please click the link to open the form.",
                fatcaForm: "FATCA & CRS form",
                fatcaFormTitle: "Click to open FATCA & CRS form",
                changePasswordTitle: "Click to Change Password",
                changePassword: "Change Password.",
                overlayDismissTitle: "Click to dismiss overlay",
                overlayDismiss: "Dismiss Overlay",
                backTop: "Back To Top",
                rewardsTitle: "Please click here to view rewards",
                systemConfigPending: "You cannot do any transaction since System Configuration is not set yet.",
                passwordExample: "Example, if your name is Roopa Lal and date of birth is 23-12-1980, then your password is ROOP2312",
                passwordNotification: "Password Combination",
                rewards: "Rewards",
                passCombination: "The document is password protected, it is a combination of the first 4 letters of your name (in capital letters) followed by your date of birth (in DDMM format).",
                generic: e,
                exitModal: "Are you sure you want to logout?",
                yes: "Yes",
                no: "No",
                exitApplication: "Logout"
            },
            ar: !0,
            fr: !0,
            zh_CN: !0,
            cs: !1,
            sv: !1,
            en: !1,
            "en-us": !1,
            el: !1,
            es: !0
        }
    }
});

define('extensions/framework/elements/core/dashboard-container/dashboard-container', ["ojs/ojcore", "knockout", "jquery", "./model", "framework/js/configurations/config", "ojL10n!resources/nls/dashboard"], function(e, o, t, n, a, r) {
    "use strict";

    function l(l) {
        const s = this;
        let i;
        s.oj = e, s.baseModel = l.properties.baseModel, s.layout = o.observableArray(), s.render = o.observable(), s.locale = r;
        let d = [];
        const c = l.properties.baseModel.getAuthorisedComponentList();

        function u(e, o) {
            i.find(function(t) {
                return e[o].componentName === t.componentName
            }) && (c.has(e[o].componentName) || !a.system.componentAccessControlEnabled) ? (l.properties.baseModel.registerComponent(e[o].componentName, "widgets/" + e[o].module), e[o].data && "string" == typeof e[o].data && (e[o].data = JSON.parse(e[o].data.replace(/'/g, '"')))) : e[o].ignore = !0
        }
        let p = !0;

        function m(e) {
            const o = s.layout().length;
            for (let t = 0; t < e; t++) d[o + t] ? s.layout.push(d[o + t]) : l.properties.baseModel.removeEvent("lazyLoadWidgets");
            p = !0
        }

        function f() {
            window.innerHeight + window.scrollY >= document.body.scrollHeight - 25 && p && (p = !1, m(2))
        }

        function h(e) {
            const t = "xl" === l.properties.baseModel.getDeviceSize() ? "large" : l.properties.baseModel.getDeviceSize();
            d = e.layout[t] && e.layout[t].length ? e.layout[t] : e.layout.defaultLayout,
                function() {
                    if (d.length)
                        for (let e = 0; e < d.length; e++)
                            if (d[e].componentName && (u(d, e), "login-form" === d[e].componentName && l.properties.dashboard.loadComponent("login-form")), d[e].childPanel)
                                for (let o = 0; o < d[e].childPanel.length; o++) u(d[e].childPanel, o)
                }(), d = d.filter(function(e) {
                    return e.childPanel.length ? (e.childPanel = e.childPanel.filter(function(e) {
                        return !e.ignore
                    }), !0) : !e.ignore
                }), s.layout.removeAll(), "small" === l.properties.baseModel.getDeviceSize() ? m(5) : o.utils.arrayPushAll(s.layout, d)
        }

        function b() {
            l.properties.rootModel.userInfoPromise.then(function(e) {
                s.render(!0);
                const o = (t = e.dashboards, (a = l.properties.dashboardName) ? t.filter(function(e) {
                    return e.moduleName === a
                })[0] : t[0]);
                var t, a;
                let i = "MODULE";
                e.userData.userProfile && o && (i = o.dashboardClass === e.userData.dashboardResponse.resolutionLevel ? e.userData.dashboardResponse.resolutionLevel : o.dashboardClass), n.fetchModules(i, l.properties.dashboardName || o.moduleName).then(function(e) {
                    var o;
                    h((o = e.dashboardDTO).layout), l.properties.dashboard.headerName(r.headers[o.titleName]), l.properties.dashboard.headerCaption(r.headers[o.titleCaption])
                }), l.properties.baseModel.addEvent("lazyLoadWidgets", {
                    element: window,
                    eventName: "scroll",
                    eventHandler: f
                })
            })
        }
        l.properties.baseModel.addEvent("back-to-top-visibility", {
            element: window,
            eventName: "scroll",
            eventHandler: function() {
                t(this).scrollTop() > 100 ? t(".back-top").fadeIn() : t(".back-top").fadeOut()
            }
        }), require(["load!framework/json/moduleComponents.json"], function(e) {
            i = e.components, b()
        })
    }
    return l.prototype.disconnected = function() {
        this.baseModel.removeEvent("lazyLoadWidgets")
    }, l
});

define('text!extensions/framework/elements/core/dashboard-container/component.json', [], function() {
    return '{\r\n  "name": "dashboard-container",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "rootModel": {\r\n      "description": "Root Model Object",\r\n      "type": "object"\r\n    },\r\n    "dashboard": {\r\n      "description": "Dashboard Object",\r\n      "type": "object",\r\n      "writeback": true\r\n    },\r\n    "baseModel": {\r\n      "description": "BaseModel Object",\r\n      "type": "object"\r\n    },\r\n    "formatter": {\r\n      "description": "Formatter",\r\n      "type": "object"\r\n    },\r\n    "dashboardName": {\r\n      "description": "Router Current Value ",\r\n      "type": "string"\r\n    },\r\n    "warningsDismissed": {\r\n      "type": "boolean"\r\n    },\r\n    "dismissWarnings": {\r\n      "type": "function"\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});

define('extensions/framework/elements/core/dashboard-container/loader', ["ojs/ojcomposite", "text!./dashboard-container.html", "./dashboard-container", "text!./component.json"], function(e, t, o, a) {
    "use strict";
    e.register("dashboard-container", {
        view: t,
        viewModel: o,
        metadata: JSON.parse(a)
    })
});