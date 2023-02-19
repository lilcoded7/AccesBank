/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojlogger"], function(e) {
    "use strict";
    let t = {};
    "undefined" != typeof window ? t = window : "undefined" != typeof self && (t = self);
    var n = t.oj;
    const r = {
        version: "12.1.0",
        revision: "2022-04-09_00-30-04",
        noConflict: function() {
            t.oj = n
        },
        _registerLegacyNamespaceProp: function(e, t) {
            this[e] = t
        }
    };
    t.oj = r;
    const o = {};
    r._registerLegacyNamespaceProp("StringUtils", o), o._TRIM_ALL_RE = /^\s*|\s*$/g, o.isEmpty = function(e) {
        return null === e || 0 === o.trim(e).length
    }, o.isEmptyOrUndefined = function(e) {
        return !(void 0 !== e && !o.isEmpty(e))
    }, o.isString = function(e) {
        return null !== e && ("string" == typeof e || e instanceof String)
    }, o.trim = function(e) {
        return o.isString(e) ? e.replace(o._TRIM_ALL_RE, "") : e
    }, o.hashCode = function(e) {
        var t = 0;
        if (0 === e.length) return t;
        for (var n = 0; n < e.length; n++) {
            t = (t << 5) - t + e.charCodeAt(n), t &= t
        }
        return t
    };
    const i = function() {};
    r._registerLegacyNamespaceProp("AgentUtils", i), i.BROWSER = {
        IE: "ie",
        FIREFOX: "firefox",
        SAFARI: "safari",
        CHROME: "chrome",
        EDGE: "edge",
        EDGE_CHROMIUM: "edge-chromium",
        UNKNOWN: "unknown"
    }, i.ENGINE = {
        TRIDENT: "trident",
        WEBKIT: "webkit",
        GECKO: "gecko",
        BLINK: "blink",
        EDGE_HTML: "edgehtml",
        UNKNOWN: "unknown"
    }, i.OS = {
        WINDOWS: "Windows",
        SOLARIS: "Solaris",
        MAC: "Mac",
        UNKNOWN: "Unknown",
        ANDROID: "Android",
        IOS: "IOS",
        WINDOWSPHONE: "WindowsPhone",
        LINUX: "Linux"
    }, i.DEVICETYPE = {
        PHONE: "phone",
        TABLET: "tablet",
        OTHERS: "others"
    }, i.getAgentInfo = function(e) {
        o.isEmptyOrUndefined(e) && (e = navigator.userAgent), e = e.toLowerCase();
        var t = o.hashCode(e),
            n = i._currAgentInfo;
        if (n && n.hashCode === t) return {
            os: n.os,
            browser: n.browser,
            browserVersion: n.browserVersion,
            deviceType: n.deviceType,
            engine: n.engine,
            engineVersion: n.engineVersion,
            hashCode: n.hashCode
        };
        var r = i.OS.UNKNOWN,
            s = i.BROWSER.UNKNOWN,
            a = 0,
            c = i.DEVICETYPE.OTHERS,
            u = i.ENGINE.UNKNOWN,
            l = 0;
        return e.indexOf("iphone") > -1 || e.indexOf("ipad") > -1 || "MacIntel" === navigator.platform && void 0 !== navigator.standalone ? r = i.OS.IOS : e.indexOf("mac") > -1 ? r = i.OS.MAC : e.indexOf("sunos") > -1 ? r = i.OS.SOLARIS : e.indexOf("android") > -1 ? r = i.OS.ANDROID : e.indexOf("linux") > -1 ? r = i.OS.LINUX : e.indexOf("windows phone") > -1 ? r = i.OS.WINDOWSPHONE : e.indexOf("win") > -1 && (r = i.OS.WINDOWS), r === i.OS.ANDROID ? c = e.indexOf("mobile") > -1 ? i.DEVICETYPE.PHONE : i.DEVICETYPE.TABLET : r === i.OS.IOS && (c = e.indexOf("iphone") > -1 ? i.DEVICETYPE.PHONE : i.DEVICETYPE.TABLET), e.indexOf("msie") > -1 ? (s = i.BROWSER.IE, a = i._parseFloatVersion(e, /msie (\d+[.]\d+)/), e.indexOf("trident") && (u = i.ENGINE.TRIDENT, l = i._parseFloatVersion(e, /trident\/(\d+[.]\d+)/))) : e.indexOf("trident") > -1 ? (s = i.BROWSER.IE, a = i._parseFloatVersion(e, /rv:(\d+[.]\d+)/), e.indexOf("trident") && (u = i.ENGINE.TRIDENT, l = i._parseFloatVersion(e, /trident\/(\d+[.]\d+)/))) : e.indexOf("edge") > -1 ? (s = i.BROWSER.EDGE, a = l = i._parseFloatVersion(e, /edge\/(\d+[.]\d+)/), u = i.ENGINE.EDGE_HTML) : e.indexOf("edg") > -1 ? (s = i.BROWSER.EDGE_CHROMIUM, a = i._parseFloatVersion(e, /edg\/(\d+[.]\d+)/), u = i.ENGINE.BLINK, l = a) : e.indexOf("chrome") > -1 ? (s = i.BROWSER.CHROME, (a = i._parseFloatVersion(e, /chrome\/(\d+[.]\d+)/)) >= 28 ? (u = i.ENGINE.BLINK, l = a) : (u = i.ENGINE.WEBKIT, l = i._parseFloatVersion(e, /applewebkit\/(\d+[.]\d+)/))) : e.indexOf("safari") > -1 ? (s = i.BROWSER.SAFARI, a = i._parseFloatVersion(e, /version\/(\d+[.]\d+)/), u = i.ENGINE.WEBKIT, l = i._parseFloatVersion(e, /applewebkit\/(\d+[.]\d+)/)) : e.indexOf("firefox") > -1 && (s = i.BROWSER.FIREFOX, a = i._parseFloatVersion(e, /rv:(\d+[.]\d+)/), u = i.ENGINE.GECKO, l = i._parseFloatVersion(e, /gecko\/(\d+)/)), i._currAgentInfo = n = {
            hashCode: t,
            os: r,
            browser: s,
            browserVersion: a,
            deviceType: c,
            engine: u,
            engineVersion: l
        }, {
            os: n.os,
            browser: n.browser,
            browserVersion: n.browserVersion,
            deviceType: n.deviceType,
            engine: n.engine,
            engineVersion: n.engineVersion,
            hashCode: n.hashCode
        }
    }, i._parseFloatVersion = function(e, t) {
        var n = e.match(t);
        if (n) {
            var r = n[1];
            if (r) return parseFloat(r)
        }
        return 0
    };
    const s = {};
    r._registerLegacyNamespaceProp("Assert", s);
    var a = "DEBUG";
    const c = "' doesn't match prototype ";
    s.forceDebug = function() {
        s[a] = !0
    }, s.clearDebug = function() {
        s[a] = !1
    }, s.isDebug = function() {
        return !0 === s[a]
    }, s.assert = function(e, t) {
        if (s[a] && !e) {
            var n = t || "";
            if (arguments.length > 2) {
                n += "(";
                for (var r = 2; r < arguments.length; r += 1) n += arguments[r];
                n += ")"
            }
            s.assertionFailed(n, 1)
        }
    }, s.failedInAbstractFunction = function() {
        s[a] && s.assertionFailed("Abstract function called", 1)
    }, s.assertPrototype = function(e, t, n) {
        if (s[a]) {
            var r = t.prototype;
            if (null != e) s.assertType(t, "function", null, 1, !1), Object.prototype.isPrototypeOf.call(r, e) || s.assertionFailed("object '" + e + c + r, 1, n);
            else s.assertionFailed("null object doesn't match prototype " + r, 1, n)
        }
    }, s.assertPrototypeOrNull = function(e, t, n) {
        if (s[a] && null != e) {
            s.assertType(t, "function", null, 1, !1);
            var r = t.prototype;
            Object.prototype.isPrototypeOf.call(r, e) || s.assertionFailed("object '" + e + c + r, 1, n)
        }
    }, s.assertPrototypes = function(e, t, n, r) {
        if (s[a]) {
            var o = t.prototype,
                i = n.prototype,
                u = Object.prototype.isPrototypeOf;
            u.call(o, e) || u.call(i, e) || s.assertionFailed("object '" + e + c + o + " or " + i, 1, r)
        }
    }, s.assertDomNodeOrNull = function(e, t) {
        s[a] && e && void 0 === e.nodeType && s.assertionFailed(e + " is not a DOM Node", t + 1)
    }, s.assertDomNode = function(e, t) {
        s[a] && (e && void 0 !== e.nodeType || s.assertionFailed(e + " is not a DOM Node", t + 1))
    }, s.assertDomElement = function(e, t) {
        s[a] && (s.assertDomNode(e, 1), 1 !== e.nodeType ? s.assertionFailed(e + " is not a DOM Element", 1) : t && e.nodeName !== t && s.assertionFailed(e + " is not a " + t + " Element", 1))
    }, s.assertDomElementOrNull = function(e, t) {
        s[a] && null != e && (s.assertDomNode(e, 1), 1 !== e.nodeType ? s.assertionFailed(e + " is not a DOM Element", 1) : t && e.nodeName !== t && s.assertionFailed(e + " is not a " + t + " Element", 1))
    }, s.assertType = function(e, t, n, r, o) {
        if (s[a] && !(null == e && o || typeof e === t)) {
            var i = e + " is not of type " + t;
            n && (i = n + i), r || (r = 0), s.assertionFailed(i, r + 1)
        }
    }, s.assertObject = function(e, t) {
        s[a] && s.assertType(e, "object", t, 1, !1)
    }, s.assertObjectOrNull = function(e, t) {
        s[a] && s.assertType(e, "object", t, 1, !0)
    }, s.assertNonEmptyString = function(e, t) {
        s[a] && (s.assertType(e, "string", t, 1, !1), s.assert(e.length > 0, "empty string"))
    }, s.assertString = function(e, t) {
        s[a] && s.assertType(e, "string", t, 1, !1)
    }, s.assertStringOrNull = function(e, t) {
        s[a] && s.assertType(e, "string", t, 1, !0)
    }, s.assertFunction = function(e, t) {
        s[a] && s.assertType(e, "function", t, 1, !1)
    }, s.assertFunctionOrNull = function(e, t) {
        s[a] && s.assertType(e, "function", t, 1, !0)
    }, s.assertBoolean = function(e, t) {
        s[a] && s.assertType(e, "boolean", t, 1, !1)
    }, s.assertNumber = function(e, t) {
        s[a] && s.assertType(e, "number", t, 1, !1)
    }, s.assertNumberOrNull = function(e, t) {
        s[a] && s.assertType(e, "number", t, 1, !0)
    }, s.assertArray = function(e, t) {
        s[a] && (Array.isArray(e) || (void 0 === t && (t = e + " is not an array"), s.assertionFailed(t, 1)))
    }, s.assertArrayOrNull = function(e, t) {
        s[a] && null != e && (Array.isArray(e) || (void 0 === t && (t = e + " is not an array"), s.assertionFailed(t, 1)))
    }, s.assertNonNumeric = function(e, t) {
        s[a] && (isNaN(e) || (void 0 === t && (t = e + " is convertible to a number"), s.assertionFailed(t, 1)))
    }, s.assertNumeric = function(e, t) {
        s[a] && isNaN(e) && (void 0 === t && (t = e + " is not convertible to a number"), s.assertionFailed(t, 1))
    }, s.assertInSet = function(e, t, n) {
        if (null == e || void 0 === t[e.toString()]) {
            if (void 0 === n) {
                for (var r = " is not in set: {", o = Object.keys(t), i = 0; i < o.length; i++) {
                    r += o[i], r += ","
                }
                n = e + (r += "}")
            }
            s.assertionFailed(n, 1)
        }
    }, s.assertionFailed = function(e, t, n) {
        t || (t = 0);
        var r = "Assertion";
        throw n && (r += " (" + n + ")"), r += " failed: ", void 0 !== e && (r += e), new Error(r)
    };
    var u = t.__oj_Assert_DEBUG;
    void 0 !== u && (s[a] = u), i.getAgentInfo().browser === i.BROWSER.IE && e.error("Internet Explorer is not supported with this version of JET.");
    const l = {};
    r._registerLegacyNamespaceProp("CollectionUtils", l), l.copyInto = function(e, t, n, r, o) {
            return l._copyIntoImpl(e, t, n, r, o, 0)
        }, l.mergeDeep = function(e, ...t) {
            if (!t.length) return e;
            const n = l.isPlainObject,
                r = l.mergeDeep,
                o = t.shift();
            return n(e) && n(o) && Object.keys(o).forEach(t => {
                n(o[t]) ? (e[t] || Object.assign(e, {
                    [t]: {}
                }), r(e[t], o[t])) : Object.assign(e, {
                    [t]: o[t]
                })
            }), r(e, ...t)
        }, l.isPlainObject = function(e) {
            if (null !== e && "object" == typeof e) try {
                var t = Object.prototype.hasOwnProperty;
                if (e.constructor && t.call(e.constructor.prototype, "isPrototypeOf")) return !0
            } catch (e) {}
            return !1
        }, l._copyIntoImpl = function(e, t, n, r, o, i) {
            var s;
            if (null == o && (o = Number.MAX_VALUE), e && t && e !== t)
                for (var a = Object.keys(t), c = 0; c < a.length; c++) {
                    var u = a[c];
                    s = n ? n(u) : u;
                    var d = t[u],
                        f = !1;
                    if (r && i < o) {
                        var p = e[s];
                        l.isPlainObject(d) && (null == p || l.isPlainObject(p)) && (f = !0, e[s] = p || {}, l._copyIntoImpl(e[s], d, n, !0, o, i + 1))
                    }
                    f || (e[s] = d)
                }
            return e
        }, "undefined" != typeof window && window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
            var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
                r = this;
            do {
                for (t = n.length; --t >= 0 && n.item(t) !== r;);
            } while (t < 0 && (r = r.parentElement));
            return r
        }),
        function() {
            function e(e) {
                return function(t, n, r) {
                    return e.call(this, t, n, function(e) {
                        return "boolean" == typeof e ? e : !!e && e.capture
                    }(r))
                }
            }
            if ("undefined" != typeof window && ! function() {
                    let e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                return e = !0, e
                            }
                        });
                        window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
                    } catch (e) {}
                    return e
                }()) {
                let t;
                window.EventTarget ? t = EventTarget.prototype : window.Node && (t = Node.prototype), t && (t.addEventListener = e(t.addEventListener), t.removeEventListener = e(t.removeEventListener))
            }
        }(),
        /**
         * @license
         * Code taken from
         * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask
         * under "When queueMicrotask() isn't available".
         * @ignore
         */
        "undefined" != typeof window && "function" != typeof window.queueMicrotask && (window.queueMicrotask = function(e) {
            Promise.resolve().then(e).catch(function(e) {
                setTimeout(function() {
                    throw e
                })
            })
        }),
        function() {
            if ("undefined" != typeof window) {
                var e;
                if (!((e = document.createEvent("Event")).initEvent("foo", !0, !0), e.preventDefault(), e.defaultPrevented)) {
                    var t = Event.prototype.preventDefault;
                    Event.prototype.preventDefault = function() {
                        this.cancelable && (t.call(this), Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            },
                            configurable: !0
                        }))
                    }
                }
                "function" != typeof window.CustomEvent && (n.prototype = Object.getPrototypeOf(new n("bogusEvent")), window.CustomEvent = n)
            }

            function n(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }
        }(),
        function() {
            function e(e) {
                var t = document.createEvent("FocusEvent");
                return t.initEvent(e, !1, !1), t
            }
            "undefined" != typeof window && "function" != typeof window.FocusEvent && (e.prototype = Object.getPrototypeOf(new e("focus")), window.FocusEvent = e)
        }(),
        function() {
            var e, t;
            "undefined" != typeof window && !window.setImmediate && window.postMessage && (window.setImmediate = function() {
                var t = arguments[0],
                    o = Array.prototype.slice,
                    i = o.call(arguments, 1);
                s.assertFunction(t);
                var a = n();
                return e || (e = new Map), e.set(a, {
                    callback: t,
                    args: i
                }), 1 === e.size && window.addEventListener("message", r), window.postMessage({
                    id: a,
                    message: "oj-setImmediate"
                }, "*"), a
            }, window.clearImmediate = o);

            function n() {
                return isNaN(t) && (t = 0), t += 1
            }

            function r(t) {
                var n = t.data;
                if (n && "oj-setImmediate" === n.message) {
                    var r = n.id,
                        i = e.get(r);
                    if (o(r), i) {
                        var s = i.callback,
                            a = i.args;
                        s.apply(window, a)
                    }
                }
            }

            function o(t) {
                e && (e.delete(t), e.size < 1 && (window.removeEventListener("message", r), e = null))
            }
        }(), "undefined" != typeof window && (window.Symbol ? (window.Symbol.asyncIterator || (window.Symbol.asyncIterator = "asyncIterator"), window.Symbol.iterator || (window.Symbol.iterator = "iterator")) : (window.Symbol = {}, window.Symbol.asyncIterator = "asyncIterator", window.Symbol.iterator = "iterator")),
        function() {
            if ("undefined" != typeof window && 0 === new window.Set([0]).size) {
                var e = window.Set;

                function t(t) {
                    var n = new e;
                    return t && t.forEach(n.add, n), n
                }
                t.prototype = e.prototype, t.prototype.constructor = t, window.Set = t
            }
        }(), "undefined" != typeof window && (window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), window.DOMTokenList && !DOMTokenList.prototype.forEach && (DOMTokenList.prototype.forEach = Array.prototype.forEach)), "undefined" != typeof window && "undefined" !== window.Node && ("isConnected" in Node.prototype || Object.defineProperty(Node.prototype, "isConnected", {
            get() {
                return !(this.ownerDocument && this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED)
            }
        }));
    const d = function() {
        this.Init()
    };
    r._registerLegacyNamespaceProp("Object", d), d.superclass = null, d._typeName = "oj.Object", d._GET_FUNCTION_NAME_REGEXP = /function\s+([\w$][\w$\d]*)\s*\(/, (d.prototype = {}).constructor = d, d.createSubclass = function(e, t, n) {
        s.assertFunction(e), s.assertFunctionOrNull(t), s.assertStringOrNull(n), void 0 === t && (t = d), s.assert(e !== t, "Class can't extend itself");
        var r = d._tempSubclassConstructor;
        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e, e.superclass = t.prototype, n && (e._typeName = n)
    }, d.copyPropertiesForClass = function(e, t) {
        s.assertFunction(e), s.assert(null != t, "source object cannot be null");
        for (var n = Object.keys(t), r = 0; r < n.length; r++) {
            var o = n[r];
            e.prototype[o] = t[o]
        }
    }, d._tempSubclassConstructor = function() {}, d.prototype.getClass = function(e) {
        if (void 0 === e) e = this;
        else if (null === e) return null;
        return e.constructor
    }, d.prototype.clone = function() {
        var e = new this.constructor;
        return l.copyInto(e, this), e
    }, d.prototype.toString = function() {
        return this.toDebugString()
    }, d.prototype.toDebugString = function() {
        return this.getTypeName() + " Object"
    }, d.getTypeName = function(e) {
        s.assertFunction(e);
        var t = e._typeName;
        if (null == t) {
            var n = e.toString(),
                r = d._GET_FUNCTION_NAME_REGEXP.exec(n);
            t = r ? r[1] : "anonymous", e._typeName = t
        }
        return t
    }, d.prototype.getTypeName = function() {
        return d.getTypeName(this.constructor)
    }, d.prototype.Init = function() {
        s.isDebug() && s.assert(this.getTypeName, "Not an oj.Object");
        var e = this.constructor;
        e._initialized || d._initClasses(e)
    }, d.ensureClassInitialization = function(e) {
        s.assertFunction(e), e._initialized || d._initClasses(e)
    }, d.prototype.equals = function(e) {
        return this === e
    }, d.createCallback = function(e, t) {
        return s.assertFunction(t), t.bind(e)
    }, d._initClasses = function(e) {
        s.isDebug() && (s.assertFunction(e), s.assert(!e._initialized)), e._initialized = !0;
        var t = e.superclass;
        if (t) {
            var n = t.constructor;
            n && !n._initialized && d._initClasses(n)
        }
        var r = e.InitClass;
        r && r.call(e)
    }, d.compareValues = function(e, t) {
        if (e === t) return !0;
        var n = typeof e,
            r = typeof t;
        if (n !== r) return !1;
        if (null === e || null === t) return !1;
        if (e.constructor === t.constructor) {
            if (Array.isArray(e)) return d._compareArrayValues(e, t);
            if (e.constructor === Object) {
                const n = arguments[2] || new Set;
                return d.__innerEquals(e, t, n)
            }
            if (e.valueOf && "function" == typeof e.valueOf) return e.valueOf() === t.valueOf()
        }
        return !1
    }, d._compareArrayValues = function(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0, r = e.length; n < r; n++)
            if (!d.compareValues(e[n], t[n])) return !1;
        return !0
    }, d._compareIdIndexObject = function(e, t) {
        if ("number" == typeof e && "number" == typeof t || "string" == typeof e && "string" == typeof t) return e === t;
        if ("object" == typeof e && "object" == typeof t) {
            if (e.id && t.id) return e.id === t.id && (!e.index || !t.index || e.index === t.index);
            if (e.index && t.index) return e.index === t.index
        }
        return !1
    }, d._compareArrayIdIndexObject = function(e, t) {
        if (!e) return !t || 0 === t.length;
        if (!t) return !e || 0 === e.length;
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            for (var r = !1, o = 0; o < t.length; o++)
                if (d._compareIdIndexObject(e[n], t[o])) {
                    r = !0;
                    break
                }
            if (!r) return !1
        }
        return !0
    }, d.__innerEquals = function(t, n, r = new Set) {
        if (t === n) return !0;
        if (r.has(t) || r.has(n)) return e.warn("cyclic dependency detected", t, n), !1;
        if (r.add(t), r.add(n), !(t instanceof Object && n instanceof Object)) return !1;
        if (t.constructor !== n.constructor) return !1;
        var o, i, s = Object.prototype.hasOwnProperty,
            a = Object.keys(t);
        for (i = 0; i < a.length; i++)
            if (o = a[i], s.call(t, o)) {
                if (!s.call(n, o)) return !1;
                if (t[o] !== n[o]) {
                    if ("object" != typeof t[o]) return !1;
                    if (!d.compareValues(t[o], n[o], r)) return !1
                }
            }
        var c = Object.keys(n);
        for (i = 0; i < c.length; i++)
            if (o = c[i], s.call(n, o) && !s.call(t, o)) return !1;
        return 0 !== a.length || 0 !== c.length || JSON.stringify(t) === JSON.stringify(n)
    }, d.isEmpty = function(e) {
        var t;
        if (null == e) return !0;
        for (t in e)
            if (e.hasOwnProperty(t)) return !1;
        return !0
    };
    const f = function() {
        this.Init()
    };
    d.createSubclass(f, d, "oj.EventSource"), r._registerLegacyNamespaceProp("EventSource", f), f.prototype.Init = function() {
        this._eventHandlers = [], f.superclass.Init.call(this)
    }, f.prototype.on = function(e, t) {
        for (var n = !1, r = 0; r < this._eventHandlers.length; r++)
            if (this._eventHandlers[r].eventType === e && this._eventHandlers[r].eventHandlerFunc === t) {
                n = !0;
                break
            }
        n || this._eventHandlers.push({
            eventType: e,
            eventHandlerFunc: t
        })
    }, f.prototype.off = function(e, t) {
        for (var n = this._eventHandlers.length - 1; n >= 0; n--)
            if (this._eventHandlers[n].eventType === e && this._eventHandlers[n].eventHandlerFunc === t) {
                this._eventHandlers.splice(n, 1);
                break
            }
    }, f.prototype.handleEvent = function(e, t) {
        for (var n = 0; n < this._eventHandlers.length; n++) {
            var r = this._eventHandlers[n];
            if (r.eventType === e && !1 === r.eventHandlerFunc.apply(this, Array.prototype.slice.call(arguments).slice(1))) return !1
        }
        return !0
    };
    const p = {};
    r._registerLegacyNamespaceProp("KeyUtils", p), p.equals = function(e, t) {
        return d.compareValues(e, t)
    };
    var y = t.__ojCheckpointManager;
    const E = {};
    return r._registerLegacyNamespaceProp("CHECKPOINT_MANAGER", E), E.startCheckpoint = function(e, t) {
        y && y.startCheckpoint(e, t)
    }, E.endCheckpoint = function(e) {
        y && y.endCheckpoint(e)
    }, E.getRecord = function(e) {
        return y ? y.getRecord(e) : void 0
    }, E.matchRecords = function(e) {
        return y ? y.matchRecords(e) : []
    }, E.dump = function(t) {
        e.info(function() {
            for (var e = "Checkpoint Records:", n = E.matchRecords(t), r = 0; r < n.length; r++) {
                var o = n[r];
                e = e + "\n" + o.name;
                var i = o.description;
                null != i && (e = e + " (" + i + ")"), e = (e += ":\n") + "start: " + o.start + "\tduration: " + o.duration
            }
            return e
        })
    }, r
});
//# sourceMappingURL=ojcore-base.js.map