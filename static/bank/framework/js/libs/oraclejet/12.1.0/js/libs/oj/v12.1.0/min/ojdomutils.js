/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojthemeutils", "ojs/ojcore-base", "jquery"], function(e, t, n, o) {
    "use strict";
    n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
    const i = {
        _HTML_START_TAG: "<html>",
        _HTML_END_TAG: "</html>",
        _LEGAL_ELEMENTS: {
            SPAN: 1,
            B: 1,
            I: 1,
            EM: 1,
            BR: 1,
            HR: 1,
            LI: 1,
            OL: 1,
            UL: 1,
            P: 1,
            TT: 1,
            BIG: 1,
            SMALL: 1,
            PRE: 1
        },
        _LEGAL_ATTRIBUTES: {
            class: 1,
            style: 1
        }
    };
    var r, a, s, l, c, u, f;
    i.isHTMLContent = function(e) {
        return 0 === e.indexOf(i._HTML_START_TAG) && e.lastIndexOf(i._HTML_END_TAG) === e.length - 7
    }, i.cleanHtml = function(e) {
        var t = o(document.createElement("span")).get(0);
        return t.innerHTML = e, e && e.indexOf("<") >= 0 && i._cleanElementHtml(t), t
    }, i._cleanElementHtml = function(e) {
        for (var t = e.childNodes, n = t.length - 1; n >= 0; n--) {
            var r = t.item(n);
            if (r && 1 === r.nodeType)
                if (i._LEGAL_ELEMENTS[r.nodeName]) {
                    for (var a = r.attributes, s = a.length - 1; s >= 0; s--) {
                        var l = a[s];
                        void 0 !== o(r).attr(l.name) && (i._LEGAL_ATTRIBUTES[l.name] || r.removeAttribute(l.nodeName))
                    }
                    i._cleanElementHtml(r)
                } else r && e.removeChild(r)
        }
    }, i.isAncestor = function(e, t) {
        for (var n = t.parentNode; n;) {
            if (n === e) return !0;
            n = n.parentNode
        }
        return !1
    }, i.isAncestorOrSelf = function(e, t) {
        return t === e || i.isAncestor(e, t)
    }, i.addResizeListener = function(e, t, n, o) {
        let r = i._RSZ_TRKR;
        o && (r = i._RSZ_TRKR_OBS, i._OBS_BASED.set(t, !0));
        let a = r.get(e);
        null == a && (a = new i._ResizeTracker(e, o), r.set(e, a), a.start()), a.addListener(t, n)
    }, i.removeResizeListener = function(e, t) {
        const n = i._OBS_BASED.get(t) ? i._RSZ_TRKR_OBS : i._RSZ_TRKR,
            o = n.get(e);
        null != o && (o.removeListener(t), o.isEmpty() && (o.stop(), n.delete(e)))
    }, i.fixResizeListeners = function(e) {
        o(e).find(".oj-helper-detect-expansion").parent().each(function(e, t) {
            var n = i._RSZ_TRKR.get(t);
            null != n && n.init(!0)
        })
    }, i.isMetaKeyPressed = function(e) {
        var t = n.AgentUtils.getAgentInfo();
        return n.AgentUtils.OS.MAC === t.os ? e.metaKey : e.ctrlKey
    }, i.dispatchEvent = function(e, t) {
        var n = "disabled",
            o = e[n];
        try {
            e[n] = !1, e.dispatchEvent(t)
        } finally {
            e[n] = o
        }
    }, i._invokeAfterPaint = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
        return window.setTimeout(e, 0)
    }).bind(window), i._cancelInvokeAfterPaint = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function(e) {
        return window.clearTimeout(e)
    }).bind(window), i._ResizeTracker = function(e, t) {
        e instanceof o && (e = e[0]);
        var n = e.hasAttribute("data-oj-resize-notify"),
            r = o.Callbacks(),
            a = [],
            s = [],
            l = 0,
            c = null,
            u = null,
            f = null,
            d = null,
            g = null,
            h = null,
            v = null;

        function m(e) {
            var t = !1;
            if (null != d.offsetParent) {
                var n = d.offsetWidth,
                    o = d.offsetHeight;
                u === n && f === o || (l = 2, S(n, o), t = !0, e && p(!0))
            }
            return t
        }

        function L(t) {
            const n = t[0].borderBoxSize;
            p(!1, [n ? (n[0] || n).inlineSize : e.offsetWidth, n ? (n[0] || n).blockSize : e.offsetHeight])
        }

        function p(t, o) {
            var s = o ? o[0] : e.offsetWidth,
                l = o ? o[1] : e.offsetHeight,
                u = (t, o) => {
                    r.fire(t, o), n && e.dispatchEvent(new Event("oj-resize"))
                };
            r.has() && (t ? (null !== c && i._cancelInvokeAfterPaint(c), c = i._invokeAfterPaint(function() {
                c = null, u(s, l)
            })) : u(s, l));
            for (var f = 0; f < a.length; f++) a[f].getCallback()(s, l)
        }

        function E(e) {
            e.stopPropagation(), m(!0) || l > 0 && null != d.offsetParent && (0 === d.scrollLeft || 0 === d.scrollTop) && (l -= 1, S(u, f))
        }

        function S(e, t) {
            u = e, f = t;
            var n = d.firstChild.style,
                o = 1;
            do {
                n.width = e + o + "px", n.height = t + o + "px", d.scrollLeft = o, d.scrollTop = o, o += 1
            } while ((0 === d.scrollTop || 0 === d.scrollLeft) && o <= 5);
            g.scrollLeft = e, g.scrollTop = t
        }
        this.addListener = function(t, o) {
            if (void 0 === o || isNaN(o) || 0 === o) r.add(t);
            else {
                var l = () => {
                    t.apply(null, arguments), e.dispatchEvent(new Event("oj-resize"))
                };
                a.push(new i._collapsingListenerManager(n ? l : t, o)), s.push(t)
            }
        }, this.removeListener = function(e) {
            var t = s.indexOf(e);
            t >= 0 ? (s.splice(t, 1), a.splice(t, 1)[0].stop()) : r.remove(e)
        }, this.isEmpty = function() {
            return !r.has() && 0 === s.length
        }, this.start = function() {
            if (t && window.ResizeObserver instanceof Function)(v = new ResizeObserver(L)).observe(e, {
                box: "border-box"
            });
            else {
                h = E;
                var n = e.childNodes[0];
                (d = document.createElement("div")).className = "oj-helper-detect-expansion";
                var o = document.createElement("div");
                d.appendChild(o), null != n ? e.insertBefore(d, n) : e.appendChild(d), d.addEventListener("scroll", h, !1), (g = document.createElement("div")).className = "oj-helper-detect-contraction";
                var i = document.createElement("div");
                i.style.width = "200%", i.style.height = "200%", g.appendChild(i), e.insertBefore(g, d), g.addEventListener("scroll", h, !1), this.init(!1)
            }
        }, this.stop = function() {
            null != c && (i._cancelInvokeAfterPaint(c), c = null), null != v ? (v.disconnect(), v = null) : null != d && (d.removeEventListener("scroll", h), g.removeEventListener("scroll", h), d.parentNode && e.removeChild(d), g.parentNode && e.removeChild(g))
        }, this.init = function(e) {
            if (d) {
                var t = m(e);
                e && !t && null != d.offsetParent && S(u, f)
            }
        }
    }, i._RSZ_TRKR = new WeakMap, i._RSZ_TRKR_OBS = new WeakMap, i._OBS_BASED = new WeakMap, i.isValidIdentifier = function(e) {
        return /^[A-Za-z][0-9A-Z_a-z-]*$/.test(e)
    }, i._collapsingListenerManager = function(e, t) {
        var n = null,
            o = null,
            i = function() {
                e.apply(null, n), o = null
            },
            r = function() {
                n = Array.prototype.slice.call(arguments), null == o && (o = window.setTimeout(i, t))
            };
        this.getCallback = function() {
            return r
        }, this.stop = function() {
            null != o && (window.clearTimeout(o), o = null)
        }
    }, i.isTouchSupported = function() {
        return "ontouchstart" in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints > 0
    }, i.setInKoCleanExternal = function(e) {
        i._koCleanNode = e
    }, i.unwrap = function(e, t) {
        var n = i._koCleanNode;
        n && e.get(0) === n || (t ? t.replaceWith(e) : e.unwrap())
    }, i.isChromeEvent = function(e) {
        if (!("clientX" in e) || !("clientY" in e)) return !1;
        var t = n.AgentUtils.getAgentInfo();
        if (n.AgentUtils.OS.ANDROID === t.os || n.AgentUtils.OS.IOS === t.os) return !1;
        if (t.engine !== n.AgentUtils.ENGINE.GECKO && t.engine !== n.AgentUtils.ENGINE.WEBKIT && t.engine !== n.AgentUtils.ENGINE.BLINK && t.browser !== n.AgentUtils.BROWSER.IE) return !1;
        var r = "ltr" === i.getReadingDirection(),
            a = !r && t.browser === n.AgentUtils.BROWSER.SAFARI,
            s = e.target,
            l = o(s),
            c = s.getBoundingClientRect(),
            u = i.getScrollBarWidth();
        return !(!r || "HTML" !== s.nodeName && "visible" === l.css("overflow-x") || !(e.clientX > c.right - u)) || (!r && !a && "HTML" === s.nodeName && e.clientX > c.right - u || (!r && "visible" !== l.css("overflow-x") && e.clientX < c.left + u || ("HTML" === s.nodeName || "visible" !== l.css("overflow-y")) && e.clientY > c.bottom - u))
    }, i.getScrollBarWidth = function() {
        return o.position.scrollbarWidth()
    }, i.getReadingDirection = function() {
        var e = document.documentElement.getAttribute("dir");
        return e && (e = e.toLowerCase()), "rtl" === e ? "rtl" : "ltr"
    }, i.setScrollLeft = function(e, t) {
        e.scrollLeft = i.calculateScrollLeft(t)
    }, i.calculateScrollLeft = function(e) {
        var t = e;
        if ("rtl" === i.getReadingDirection()) {
            var o = n.AgentUtils.getAgentInfo().browser;
            o !== n.AgentUtils.BROWSER.IE && o !== n.AgentUtils.BROWSER.EDGE && (t = -e)
        }
        return t
    }, i.getCSSLengthAsInt = function(e) {
        if (!isNaN(e)) return parseInt(e, 10);
        if (e && e.length > 0 && "auto" !== e) {
            var t = parseInt(e, 10);
            return isNaN(t) && (t = 0), t
        }
        return 0
    }, i.getCSSLengthAsFloat = function(e) {
        if (!isNaN(e)) return parseFloat(e);
        if (e && e.length > 0) {
            var t = parseFloat(e);
            return isNaN(t) && (t = 0), t
        }
        return 0
    }, i.getCSSTimeUnitAsMillis = function(e) {
        if (!isNaN(e)) return parseInt(e, 10);
        if (e && e.length > 0) {
            var t = parseFloat(e);
            if (isNaN(t)) t = 0;
            else {
                var n, o = e + "";
                o.length > 2 && o.endsWith("ms") ? n = o.slice(-3, -2) : o.length > 1 && o.endsWith("s") && (n = o.slice(-2, -1)), isNaN(n) ? t = 0 : !o.endsWith("ms") && o.endsWith("s") && (t *= 1e3)
            }
            return t
        }
        return 0
    }, i._LOGICAL_PARENT_DATA = "oj-logical-parent", i.getLogicalParent = function(e) {
        if (e) return e.data(i._LOGICAL_PARENT_DATA)
    }, i.setLogicalParent = function(e, t) {
        e && (null === t ? e.removeData(i._LOGICAL_PARENT_DATA) : e.data(i._LOGICAL_PARENT_DATA, t))
    }, i.isLogicalAncestorOrSelf = function(e, t) {
        n.Assert.assertDomElement(e), n.Assert.assertDomElement(t);
        for (var r = t; r;) {
            if (r === e) return !0;
            var a = i.getLogicalParent(o(r));
            r = a ? a[0] : r.parentNode
        }
        return !1
    }, i.validateURL = function(e, t) {
        var n = t || ["http:", "https:"],
            o = document.createElement("a");
        o.href = e;
        var i = o.protocol;
        if (null != i && (i = i.toLowerCase()), n.indexOf(i) < 0 && "" !== i) throw new Error(i + " is not a valid URL protocol")
    }, i._suppressNativeContextMenu = function() {
        o(document.body).hasClass("oj-hybrid") && !o(document.body).hasClass("oj-hybrid-show-context-menu") && document.body.addEventListener("contextmenu", function(e) {
            "INPUT" !== e.target.nodeName && "TEXTAREA" !== e.target.nodeName && e.preventDefault()
        }, !0)
    }, i._suppressNativeContextMenu(), i.PRESS_HOLD_THRESHOLD = 750, i.recentTouchEnd = function() {
        var e = 0;

        function t() {
            e = Date.now()
        }
        return document.addEventListener("touchend", t, !0), document.addEventListener("touchcancel", t, !0),
            function() {
                return Date.now() - e < 500
            }
    }(), i.recentTouchStart = (r = 0, a = i.PRESS_HOLD_THRESHOLD + 50, document.addEventListener("touchstart", function() {
        r = Date.now()
    }, {
        passive: !0,
        capture: !0
    }), function() {
        return Date.now() - r < a
    }), i.recentPointer = (l = 0, c = i.PRESS_HOLD_THRESHOLD + 600, document.addEventListener("mousedown", function() {
        var e = Date.now();
        (!s || e > l + i.PRESS_HOLD_THRESHOLD) && (l = e, s = !1)
    }, !0), document.addEventListener("touchstart", function() {
        l = Date.now(), s = !0
    }, {
        passive: !0,
        capture: !0
    }), document.addEventListener("mouseup", function() {
        l = Date.now(), s = !1
    }, !0), document.addEventListener("touchend", function() {
        l = Date.now(), s = !1
    }, !0), function() {
        return Date.now() - l < (s ? c : 600)
    }), i.makeFocusable = (u = 0, f = (t.parseJSONFromFontFamily("oj-focus-config") || {}).focusHighlightPolicy, function(e) {
        var t = e.element,
            n = "ojFocusable";
        if (e.remove) {
            t.removeClass("oj-focus oj-focus-highlight");
            var r = t.data(n);
            if (null == r) return;
            var a = ".ojFocusable" + ("" + r).split(",").join(" .ojFocusable");
            t.off(a).removeData(n)
        } else {
            var s = e.afterToggle || o.noop,
                l = e.applyHighlight ? function(t) {
                    t.addClass("oj-focus"),
                        function(e, t) {
                            switch (e ? e() : f) {
                                case "all":
                                    return !0;
                                case "none":
                                    return !1;
                                default:
                                    return !(i.recentPointer() || t && t())
                            }
                        }(e.getFocusHighlightPolicy, e.recentPointer) && t.addClass("oj-focus-highlight"), s("focusin")
                } : function(e) {
                    e.addClass("oj-focus"), s("focusin")
                },
                c = !1;
            (e.setupHandlers || function(i, r) {
                var a = e.component,
                    s = function(e) {
                        i(o(e.currentTarget)), c = !0
                    },
                    l = function(e) {
                        c && (r(o(e.currentTarget)), c = !1)
                    };
                if (a) a._on(t, {
                    focusin: s,
                    focusout: l
                });
                else {
                    var f = u;
                    u += 1;
                    var d = t.data(n);
                    t.data(n, null == d ? f : d + "," + f);
                    var g = {},
                        h = ".ojFocusable" + f;
                    g["focusin" + h] = s, g["focusout" + h] = l, t.on(g)
                }
            })(l, function(e) {
                e.removeClass("oj-focus oj-focus-highlight"), s("focusout")
            })
        }
    }), i.getNoJQFocusHandlers = function(e, t) {
        return {
            focusIn: function(t) {
                return e(o(t))
            },
            focusOut: function(e) {
                return t(o(e))
            }
        }
    };
    const d = i.isHTMLContent,
        g = i.cleanHtml,
        h = i.isAncestor,
        v = i.isAncestorOrSelf,
        m = i.addResizeListener,
        L = i.removeResizeListener,
        p = i.fixResizeListeners,
        E = i.isMetaKeyPressed,
        S = i.dispatchEvent,
        A = i.isValidIdentifier,
        _ = i.isTouchSupported,
        T = i.setInKoCleanExternal,
        R = i.unwrap,
        w = i.isChromeEvent,
        N = i.getScrollBarWidth,
        O = i.getReadingDirection,
        C = i.setScrollLeft,
        H = i.calculateScrollLeft,
        P = i.getCSSLengthAsInt,
        b = i.getCSSLengthAsFloat,
        D = i.getCSSTimeUnitAsMillis,
        I = i.getLogicalParent,
        y = i.setLogicalParent,
        M = i.isLogicalAncestorOrSelf,
        j = i.validateURL,
        B = i.PRESS_HOLD_THRESHOLD,
        F = i.recentTouchEnd,
        x = i.recentTouchStart,
        U = i.recentPointer,
        z = i.getNoJQFocusHandlers,
        k = i.makeFocusable;
    e.PRESS_HOLD_THRESHOLD = B, e.addResizeListener = m, e.calculateScrollLeft = H, e.cleanHtml = g, e.dispatchEvent = S, e.fixResizeListeners = p, e.getCSSLengthAsFloat = b, e.getCSSLengthAsInt = P, e.getCSSTimeUnitAsMillis = D, e.getLogicalParent = I, e.getNoJQFocusHandlers = z, e.getReadingDirection = O, e.getScrollBarWidth = N, e.isAncestor = h, e.isAncestorOrSelf = v, e.isChromeEvent = w, e.isHTMLContent = d, e.isLogicalAncestorOrSelf = M, e.isMetaKeyPressed = E, e.isTouchSupported = _, e.isValidIdentifier = A, e.makeFocusable = k, e.recentPointer = U, e.recentTouchEnd = F, e.recentTouchStart = x, e.removeResizeListener = L, e.setInKoCleanExternal = T, e.setLogicalParent = y, e.setScrollLeft = C, e.unwrap = R, e.validateURL = j, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojdomutils.js.map