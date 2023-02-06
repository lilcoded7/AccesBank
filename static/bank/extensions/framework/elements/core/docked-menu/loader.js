define('text!extensions/framework/elements/core/docked-menu/docked-menu.html', [], function() {
    return '<div class="docked-menu oj-applayout-fixed-bottom"><div id="navbar" role="navigation" class="oj-hybrid-applayout-navbar-app"><oj-conveyor-belt><oj-navigation-list class="oj-navigationlist-stack-icon-label navigation-list docked-menu-nav-list" data="[[dataSource]]" item.renderer="[[oj.KnockoutTemplateUtils.getRenderer(\'docked_template\', true)]]" edge="top"></oj-navigation-list></oj-conveyor-belt><script type="text/html" id="docked_template"><li data-bind="attr:{id:\'dockedMenu\'+$data.id}"><a href="#" data-bind="click:$parent.changePage, attr:{alt:$properties.baseModel.format($parent.resource.clickHere,{details:$parent.resource.labels[$data[\'name\']]}),title:$parent.resource.labels[$data[\'name\']]}"><div data-bind="css:\'center icons \' + $data[\'iconClass\']"></div><div data-bind="text: $parent.resource.labels[$data[\'name\']]"></div></a></li></script></div></div>';
});

define('extensions/resources/nls/docked-menu', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                labels: {
                    dashboard: "Home",
                    trends: "Personal Finance",
                    "dashboard-quick-links": "Quick Access",
                    "payment-landing": "Transfers",
                    "demand-deposits": "Accounts",
                    "term-deposits": "Term Deposit",
                    loans: "Loans"
                },
                clickHere: "Click here to go to {details}",
                navBarDescription: "Docked Menu Navigation Bar",
                expandDockedButton: "Click to View Options"
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


define("load!extensions/framework/elements/core/docked-menu/corporate.json", function() {
    return {
        "menuItems": [{
            "iconClass": "icon-home",
            "name": "dashboard",
            "module": "home",
            "id": 0,
            "isModule": true
        }, {
            "iconClass": "icon-accounts",
            "name": "demand-deposits",
            "id": 1,
            "module": "demand-deposits",
            "isModule": true
        }, {
            "iconClass": "icon-funds",
            "name": "term-deposits",
            "id": 2,
            "module": "term-deposits",
            "isModule": true
        }, {
            "iconClass": "icon-loans",
            "name": "loans",
            "id": 3,
            "module": "loans",
            "isModule": true
        }]
    };
});


define("load!extensions/framework/elements/core/docked-menu/retail.json", function() {
    return {
        "menuItems": [{
            "iconClass": "icon-home",
            "name": "dashboard",
            "id": 0,
            "module": "home",
            "isModule": true
        }, {
            "iconClass": "icon-trends",
            "name": "trends",
            "id": 1,
            "module": "trends",
            "isModule": true
        }, {
            "iconClass": "icon-quick-access",
            "name": "dashboard-quick-links",
            "id": 2,
            "module": "quick-access",
            "isModule": false,
            "showDetailsParams": {
                "id": "dashboard-quick-links",
                "module": "widgets/dashboard",
                "params": {
                    "type": "quick-access",
                    "isHeader": true
                }
            }
        }, {
            "iconClass": "icon-payments",
            "name": "payment-landing",
            "id": 3,
            "module": "payments",
            "isModule": false,
            "showDetailsParams": {
                "id": "payment-landing",
                "module": "payments",
                "params": {}
            }
        }]
    };
});

define('extensions/framework/elements/core/docked-menu/docked-menu', ["ojs/ojcore", "knockout", "ojL10n!extensions/resources/nls/docked-menu", "load!./corporate.json", "load!./retail.json", "ojs/ojnavigationlist", "ojs/ojconveyorbelt", "ojs/ojarraytabledatasource"], function(e, o, a, s, t) {
    "use strict";
    return function(r) {
        this.oj = e, this.resource = a;
        const n = o.observableArray();
        let i;
        this.dataSource = new e.ArrayTableDataSource(n, {
            idAttribute: "id"
        }), o.utils.arrayPushAll(n, ("CORP" === r.properties.dashboard.appData.segment ? s : t).menuItems), r.properties.baseModel.addEvent("pageChanged", {
            element: window,
            eventName: "pageChanged",
            eventHandler: function() {
                if (!i) {
                    const e = document.querySelector(".docked-menu-nav-list");
                    e && e.setProperty("selection", null)
                }
                i = !1
            }
        }), this.changePage = function(e) {
            i = !0, e.isModule ? r.properties.dashboard.switchModule(e.module) : (r.properties.baseModel.registerComponent(e.showDetailsParams.id, e.showDetailsParams.module), r.properties.dashboard.loadComponent(e.showDetailsParams.id, e.showDetailsParams.params))
        }
    }
});

define('text!extensions/framework/elements/core/docked-menu/component.json', [], function() {
    return '{\r\n  "name": "docked-menu",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "dashboard": {\r\n      "description": "Dashboard Object",\r\n      "type": "object"\r\n    },\r\n    "baseModel": {\r\n      "description": "BaseModel Object",\r\n      "type": "object"\r\n    },\r\n    "formatter": {\r\n      "description": "Formatter",\r\n      "type": "object"\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});


define('text!extensions/framework/elements/core/docked-menu/docked-menu.css', [], function() {
    return '.docked-menu-container .docked-menu .oj-hybrid-applayout-navbar-app{background:var(--base-background-primary)}.docked-menu-container .docked-menu a{padding:0!important}.docked-menu-container .docked-menu a .oj-navigationlist-item-label{color:var(--base-text-secondary)!important;font-size:var(--base-font-size-default)}.docked-menu-container .docked-menu a .oj-navigationlist-item-label .icons{color:var(--link-base);font-size:calc(var(--base-font-size-larger) + .2rem)}.docked-menu-container .docked-menu a .oj-navigationlist-item-label :hover{color:var(--link-hover)}';
});

define('extensions/framework/elements/core/docked-menu/loader', ["ojs/ojcomposite", "module", "text!./docked-menu.html", "./docked-menu", "text!./component.json", "text!./docked-menu.css", "base-models/css"], function(e, t, o, m, s, d, n) {
    "use strict";
    e.register("docked-menu", {
        viewModel: m,
        view: n.transformTemplate(o, d, n.getComponentName(t)),
        metadata: JSON.parse(s)
    })
});