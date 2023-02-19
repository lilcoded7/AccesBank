/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojconfig"], function(e, t, n) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    const r = {
            setBundle: function(e) {
                r._bundle = e
            },
            getResource: function(e) {
                return r._getResourceString(e)
            },
            applyParameters: function(e, t) {
                return null == e ? null : r._format(e, t)
            },
            getTranslatedString: function(e, t) {
                var n = r._getResourceString(e);
                if (null == n) return e;
                var a = {};
                return arguments.length > 2 ? a = Array.prototype.slice.call(arguments, 1) : 2 === arguments.length && ("object" == typeof(a = arguments[1]) || a instanceof Array || (a = [a])), r.applyParameters(n, a)
            },
            getComponentTranslations: function(e) {
                var t = r._getBundle()[e];
                if (null == t) return {};
                for (var n = {}, a = Object.keys(t), l = 0; l < a.length; l++) {
                    var o = a[l];
                    n[o] = t[o]
                }
                return n
            },
            _getResourceString: function(e) {
                var n = e ? e.split(".") : [],
                    a = r._getBundle();
                t.Assert.assertObject(a);
                for (var l = 0; l < n.length && null != a; l++) {
                    a = a[n[l]]
                }
                return null != a ? a : null
            },
            _format: function(e, t) {
                var n, r, a = e.length,
                    l = [],
                    o = null,
                    u = !1,
                    s = !1,
                    c = !1,
                    i = !1;
                for (r = 0; r < a; r++) {
                    var g = e.charAt(r),
                        f = !1;
                    if (u) f = !0, u = !1;
                    else switch (g) {
                        case "$":
                            u = !0;
                            break;
                        case "{":
                            i || (s || (n = !1, o = []), s = !0);
                            break;
                        case "}":
                            if (s && o.length > 0) {
                                var p = t[o.join("")];
                                l.push(void 0 === p ? "null" : p)
                            }
                            s = !1;
                            break;
                        case "[":
                            s || (c ? i = !0 : c = !0);
                            break;
                        case "]":
                            i ? i = !1 : c = !1;
                            break;
                        default:
                            f = !0
                    }
                    f && (s ? "," === g || " " === g ? n = !0 : n || o.push(g) : i || l.push(g))
                }
                return l.join("")
            },
            _getBundle: function() {
                var e = r._bundle;
                return e || n.getConfigBundle()
            }
        },
        a = r.setBundle,
        l = r.getResource,
        o = r.applyParameters,
        u = r.getTranslatedString,
        s = r.getComponentTranslations;
    e.applyParameters = o, e.getComponentTranslations = s, e.getResource = l, e.getTranslatedString = u, e.setBundle = a, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojtranslation.js.map