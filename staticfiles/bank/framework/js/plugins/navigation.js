define(["knockout", "webAnalytics", "base-models/utils/obdx-data-aggregation", "framework/js/configurations/config", "baseLogger"], function(e, n, o, t, i) {
    "use strict";
    let a = null;
    const r = function() {
        return t.development.checkAccessibility ? new Promise(function(e) {
            (a ? Promise.resolve(a) : new Promise(function(e, n) {
                require([t.development.axeUrl], function() {
                    a = window.axe, e(a)
                }, function(e) {
                    n(e)
                })
            })).then(function(n) {
                n.run(document, {
                    rules: {
                        "aria-allowed-attr": {
                            enabled: !1
                        },
                        "aria-required-children": {
                            enabled: !1
                        },
                        "aria-valid-attr-value": {
                            enabled: !1
                        },
                        "aria-roles": {
                            enabled: !1
                        },
                        radiogroup: {
                            enabled: !1
                        },
                        checkboxgroup: {
                            enabled: !1
                        }
                    }
                }).then(function(n) {
                    (function(e) {
                        i.warn(e), console.groupCollapsed("Accessibility Report");
                        let n = !1;
                        return e.forEach(function(e) {
                            console.groupCollapsed(e.description), console.table && console.table(e.nodes.map(function(e) {
                                return "critical" !== e.impact && "serious" !== e.impact || (n = !0), {
                                    Summary: e.failureSummary,
                                    Element: e.html,
                                    Impact: e.impact.toUpperCase()
                                }
                            })), console.groupEnd()
                        }), console.groupEnd(), n
                    })(n.violations) && i.warn("accessibility_issues_found_see_the_console_for_details"), e()
                })
            })
        }) : Promise.resolve()
    };
    return {
        beforeNavigation: function(i, a, s) {
            return function(n) {
                    t.analytics.obdxAnalytics.enabled ? new Promise(function(t) {
                        n.component ? e.components.defaultLoader.getConfig(e.utils.unwrapObservable(n.component), function(i) {
                            o.addEvent({
                                event: "COMPONENT",
                                attributes: {
                                    module: i.module,
                                    component: e.utils.unwrapObservable(n.component)
                                }
                            }), t()
                        }) : (o.addEvent({
                            event: "MODULE",
                            attributes: {
                                module: n.dashboard || "home"
                            }
                        }), t())
                    }) : Promise.resolve()
                }(i),
                function(e) {
                    t.analytics.thirdPartyAnalytics.enabled ? new Promise(function(o) {
                        n.getInstance().then(function(n) {
                            n("trackPageView", {
                                userId: e.userProfile ? e.userProfile.userName : ""
                            }), o()
                        })
                    }) : Promise.resolve()
                }(a), s ? r() : Promise.resolve()
        },
        afterNavigation: function() {
            window.dispatchEvent(new CustomEvent("pageChanged")), window.dispatchEvent(new CustomEvent("showTopHeader"))
        }
    }
});