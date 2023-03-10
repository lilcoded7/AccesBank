/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["require", "exports", "ojs/ojcore-base", "ojL10n!ojtranslations/nls/ojtranslations"], function(e, n, t, o) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var n = {};
        return e && Object.keys(e).forEach(function(t) {
            var o = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(n, t, o.get ? o : {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            })
        }), n.default = e, n
    }
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
    const i = {};
    let a = o;
    i.getDeviceRenderMode = function() {
        return document.body.getAttribute("data-oj-device-render-mode") || i.getDeviceType()
    }, i.getDeviceType = function() {
        return t.AgentUtils.getAgentInfo().deviceType
    }, i.getLocale = function() {
        const e = a._ojLocale_;
        return "root" === e ? "en" : e
    }, i.setLocale = function(n, o) {
        var i = "ojL10n!ojtranslations/nls/",
            s = i + n + "/ojtranslations";
        var u = [new Promise(function(n, t) {
            e([s], function(e) {
                n(r(e))
            }, t)
        }).then(e => {
            a = e
        })];
        if (t.LocaleData) {
            var l = i + n + "/localeElements";
            const o = new Promise(function(n, t) {
                e([l], function(e) {
                    n(r(e))
                }, t)
            }).then(e => {
                e && t.LocaleData.__updateBundle(Object.assign({}, e.default))
            });
            if (u.push(o), t.TimezoneData) {
                var c = t.TimezoneData.__getBundleNames().map(t => new Promise(function(o, a) {
                    e([`${i}${n}${t}`], function(e) {
                        o(r(e))
                    }, a)
                }));
                u.push(Promise.all(c).then(e => {
                    e.forEach(t.TimezoneData.__mergeIntoLocaleElements)
                }))
            }
        }
        Promise.all(u).then(() => {
            o && o()
        })
    }, i.getResourceUrl = function(e) {
        if (null == e || /^\/|:/.test(e)) return e;
        var n = i._resourceBaseUrl;
        null == n && (n = i._getOjBaseUrl() || "");
        var t = n.length;
        return n + (0 === t || "/" === n.charAt(t - 1) ? "" : "/") + e
    }, i.setResourceBaseUrl = function(e) {
        i._resourceBaseUrl = e
    }, i.setAutomationMode = function(e) {
        i._automationMode = e
    }, i.getAutomationMode = function() {
        return i._automationMode
    }, i.getVersionInfo = function() {
        var e = "Oracle JET Version: " + t.version + "\n";
        e += "Oracle JET Revision: " + t.revision + "\n";
        var n = "undefined" != typeof window;
        return n && window.navigator && (e += "Browser: " + window.navigator.userAgent + "\n", e += "Browser Platform: " + window.navigator.platform + "\n"), $ && ($.fn && (e += "jQuery Version: " + $.fn.jquery + "\n"), $.ui && $.ui.version && (e += "jQuery UI Version: " + $.ui.version + "\n")), t.ComponentBinding && (e += "Knockout Version: " + t.ComponentBinding.__getKnockoutVersion() + "\n"), n && window.require && (e += "Require Version: " + window.require.version + "\n"), e
    }, i.logVersionInfo = function() {}, i._getOjBaseUrl = function() {
        var n = null;
        void 0 !== e && e.toUrl && (n = e.toUrl("ojs/_foo_").replace(/[^/]*$/, "../"));
        return n
    }, i.__getTemplateEngine = function() {
        return i._templateEnginePromise || (i._templateEnginePromise = new Promise(function(n, t) {
            e(["ojs/ojtemplateengine"], function(e) {
                n(r(e))
            }, t)
        }).then(e => e.default)), i._templateEnginePromise
    }, i.getConfigBundle = function() {
        return a
    }, i.getExpressionEvaluator = function() {
        return i._expressionEvaluator
    }, i.setExpressionEvaluator = function(e) {
        if (i._expressionEvaluator) throw new Error("JET Expression evaluator can't be set more than once.");
        i._expressionEvaluator = e
    };
    const s = i.getDeviceRenderMode,
        u = i.getDeviceType,
        l = i.getLocale,
        c = i.setLocale,
        f = i.getResourceUrl,
        g = i.setResourceBaseUrl,
        d = i.setAutomationMode,
        p = i.getAutomationMode,
        v = i.getVersionInfo,
        m = i.logVersionInfo,
        _ = i.setExpressionEvaluator,
        E = i.getExpressionEvaluator,
        j = i.getConfigBundle,
        w = i.__getTemplateEngine;
    n.__getTemplateEngine = w, n.getAutomationMode = p, n.getConfigBundle = j, n.getDeviceRenderMode = s, n.getDeviceType = u, n.getExpressionEvaluator = E, n.getLocale = l, n.getResourceUrl = f, n.getVersionInfo = v, n.logVersionInfo = m, n.setAutomationMode = d, n.setExpressionEvaluator = _, n.setLocale = c, n.setResourceBaseUrl = g, Object.defineProperty(n, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojconfig.js.map