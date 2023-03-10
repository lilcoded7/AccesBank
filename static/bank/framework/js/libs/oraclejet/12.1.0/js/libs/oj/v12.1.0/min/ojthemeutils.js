/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojlogger"], function(e, t, a) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    const r = {
        getThemeName: function() {
            return (r.parseJSONFromFontFamily("oj-theme-json") || {}).name
        },
        getThemeTargetPlatform: function() {
            return (r.parseJSONFromFontFamily("oj-theme-json") || {}).targetPlatform
        },
        clearCache: function() {
            r._cache = null, r._cssVarCache = null
        },
        parseJSONFromFontFamily: function(e) {
            null == r._cache && (r._cache = {}, r._null_cache_value = {}, r._headfontstring = window.getComputedStyle(document.head).getPropertyValue("font-family"));
            var t = r._cache[e];
            if (t === r._null_cache_value) return null;
            if (null != t) return t;
            if ("undefined" == typeof document) return null;
            var o = document.createElement("meta");
            o.className = e, document.head.appendChild(o);
            var n = window.getComputedStyle(o).getPropertyValue("font-family");
            if (null != n)
                if (n === r._headfontstring) a.warn("parseJSONFromFontFamily: When the selector ", e, " is applied the font-family read off the dom element is ", n, ". The parent dom elment has the same font-family value.", " This is interpreted to mean that no value was sent down for selector ", e, ". Null will be returned.");
                else {
                    var l = n.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, "");
                    if (l) try {
                        t = JSON.parse(l)
                    } catch (r) {
                        var s = l.indexOf(","),
                            c = !1;
                        if (s > -1) {
                            l = l.substring(s + 2);
                            try {
                                t = JSON.parse(l), c = !0
                            } catch (e) {}
                        }
                        if (!1 === c) throw a.error("Error parsing json for selector " + e + ".\nString being parsed is " + l + ". Error is:\n", r), document.head.removeChild(o), r
                    }
                }
            return document.head.removeChild(o), r._cache[e] = null == t ? r._null_cache_value : t, t
        }
    };
    var o = e => (r._cssVarCache || (r._cssVarCache = new Map), r._cssVarCache.has(e) || r._cssVarCache.set(e, (e => (r._rootCSSStyles || (r._rootCSSStyles = window.getComputedStyle(document.documentElement)), r._rootCSSStyles.getPropertyValue(e).replace(/^['"\s]+|\s+|\\|(;\s?})+|['"\s]$/g, "")))(e)), r._cssVarCache.get(e));
    r.getCachedCSSVarValues = e => e.map(e => o(e)), r.verifyThemeVersion = () => {};
    const n = r.clearCache,
        l = r.getThemeName,
        s = r.getThemeTargetPlatform,
        c = r.parseJSONFromFontFamily,
        m = r.verifyThemeVersion,
        i = r.getCachedCSSVarValues;
    e.clearCache = n, e.getCachedCSSVarValues = i, e.getThemeName = l, e.getThemeTargetPlatform = s, e.parseJSONFromFontFamily = c, e.verifyThemeVersion = m, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojthemeutils.js.map