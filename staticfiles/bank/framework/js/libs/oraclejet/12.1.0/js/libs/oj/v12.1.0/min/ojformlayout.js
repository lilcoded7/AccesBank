/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore", "ojs/ojcomponentcore", "ojs/ojlabel", "ojs/ojcore-base", "ojs/ojdomutils", "ojs/ojcontext", "ojs/ojlogger", "ojs/ojthemeutils"], function(e, t, n, o, i, a, l, s) {
    "use strict";
    o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
    var r = {
        properties: {
            colspanWrap: {
                type: "string",
                enumValues: ["nowrap", "wrap"]
            },
            columns: {
                type: "number",
                value: 0
            },
            direction: {
                type: "string",
                enumValues: ["column", "row"]
            },
            labelEdge: {
                type: "string",
                enumValues: ["inside", "start", "top"]
            },
            labelWidth: {
                type: "string",
                value: "33%"
            },
            labelWrapping: {
                type: "string",
                enumValues: ["truncate", "wrap"],
                value: "wrap"
            },
            maxColumns: {
                type: "number",
                value: 1
            },
            readonly: {
                type: "boolean",
                value: !1
            },
            userAssistanceDensity: {
                type: "string",
                enumValues: ["compact", "efficient", "reflow"],
                value: "efficient"
            }
        },
        methods: {
            getProperty: {},
            refresh: {},
            setProperties: {},
            setProperty: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        extension: {}
    };
    Object.freeze(r);
    var d = 0;
    const c = "oj-form-layout-option-defaults";

    function u(e) {
        var t = this,
            n = e.element,
            r = "data-oj-formlayout-bonus-dom";
        const u = "oj-formlayout-labels-nowrap";
        var f, m, p, y, h, b = !0,
            v = !1;

        function g(e) {
            n.columns < 1 && "row" === n.direction && i.addResizeListener(e, t._resizeHandler, 25)
        }

        function j() {
            m && (m(), m = null)
        }

        function x() {
            f && (f(), f = null)
        }

        function C(e) {
            return "inside" === n.labelEdge || "inside" === e.labelEdge || "none" === e.labelEdge
        }

        function L(e) {
            var t = null;
            return C(e) || e instanceof Element && "labelHint" in e && "" !== e.labelHint && (V(e), t = function(e) {
                let t = e.labelledBy;
                if (t) {
                    document.getElementById(t) && l.error("The oj-form-layout descendent component with id " + e.id + ' has both label-hint and labelled-by. Remove labelled-by="' + t + '" since no matching element was found in the document, and a label will be created using the label-hint.')
                }
                var n = document.createElement("oj-label");
                n.setAttribute(r, ""), n.setAttribute("data-oj-internal", ""), n.setAttribute("data-oj-binding-provider", "none"), n.setAttribute("data-oj-context", "");
                var o = document.createElement("span");
                o.id = e.id + "|hint", o.textContent = e.labelHint, G(e) && B(e, n);
                return n.appendChild(o),
                    function(e, t) {
                        var n = e,
                            o = t;
                        n.id = o.id + "-labelled-by", n.setAttribute("for", o.id)
                    }(n, e), n
            }(e), e.parentElement.insertBefore(t, e), function(e) {
                e.addEventListener("labelHintChanged", w), e.addEventListener("helpHintsChanged", E), e.addEventListener("requiredChanged", O), e.addEventListener("userAssistanceDensityChanged", A)
            }(e)), t
        }

        function w(e) {
            var t = e.target,
                n = document.getElementById(t.id + "|hint");
            n && (n.textContent = e.detail.value)
        }

        function E(e) {
            var t = e.target,
                n = S(t);
            let o = e.detail.value;
            if (n) {
                N(t) && (n.help = o)
            }
        }

        function O(e) {
            var t = e.target,
                n = S(t);
            if (n) {
                let o;
                o = !!e.detail.value && N(t), n.showRequired = o
            }
        }

        function A(e) {
            let t = e.target,
                n = e.detail.value,
                o = e.detail.previousValue;
            if ("compact" !== n && "compact" !== o) return;
            let i = S(t);
            if (G(t)) B(t, i);
            else {
                t.required && (i.showRequired = !1);
                const e = t.helpHints;
                e && (e.definition || e.source) && (i.help = {
                    definition: null,
                    source: null
                })
            }
        }

        function N(e) {
            let t = "use" === s.parseJSONFromFontFamily("oj-form-control-option-defaults").useUserAssistanceOptionDefault ? e.userAssistanceDensity : "displayOptions";
            return "compact" === t || "displayOptions" === t
        }

        function S(e) {
            return "labelledBy" in e ? document.getElementById(e.labelledBy) : n.querySelector('oj-label[for="' + e.id + '"]')
        }

        function B(e, t) {
            var n = t,
                o = e.helpHints;
            let i;
            o && (o.definition || o.source) && (n.help = o), i = !!e.required && N(e), n.showRequired = i
        }

        function W() {
            return "column" === n.direction || 1 === h
        }

        function F(e, t) {
            if (!W()) {
                for (var n, o = t.previousSibling; o && 1 !== o.nodeType;) n = o, o = o.previousSibling;
                for (; n && n !== t;) o = n.nextSibling, e.appendChild(n), n = o
            }
        }

        function D(e) {
            if (!W())
                for (; e.nextSibling;) {
                    var t = e.nextSibling;
                    if (1 === t.nodeType) break;
                    if (8 === t.nodeType && 0 === t.textContent.trim().indexOf("oj-bind-")) break;
                    e.appendChild(t)
                }
        }

        function R(e, t) {
            e && D(e);
            var n = _("oj-flex");
            return t.parentElement.insertBefore(n, t), F(n, n), n
        }

        function M() {
            let e = n.maxColumns;
            const t = n.columns;
            if (t > 0) e = t, n.classList.add("oj-form-layout-no-min-column-width");
            else if (n.classList.remove("oj-form-layout-no-min-column-width"), "row" === n.direction && !z()) {
                let t = parseFloat(window.getComputedStyle(p).columnWidth);
                if (!isNaN(t)) {
                    let o = parseFloat(window.getComputedStyle(n.parentElement).width),
                        i = Math.max(Math.floor(o / t), 1);
                    i < e && (e = i)
                }
            }
            return e
        }

        function H(e, t) {
            var o = 1;
            if ("column" === n.direction) return "100%";
            e && "colspan" in e && e.colspan && (o = Math.min(Math.floor(e.colspan), t));
            let i = s.parseJSONFromFontFamily(c).columnGap,
                a = "calc(((100% / " + h + ") - ((" + i + " * (" + (h - 1) + ") / " + h + "))" + (z() ? " - 0.1px" : "") + ")";
            return o > 1 && (a += " * " + o + " + (" + i + " * " + (o - 1) + ")"), a += ")", a
        }

        function T(e, t) {
            var n = _("oj-flex-item");
            return n.style.flexGrow = "0", n.style.flexShrink = "1", n.style.flexBasis = t, n.style.width = t, n.style.maxWidth = t, e.appendChild(n), n
        }

        function k(e, t) {
            var o = t % h,
                i = H();
            if ("column" !== n.direction && e && o > 0)
                for (var a = o; a < h; a++) a !== o && J(e), T(e, i)
        }

        function J(e) {
            var t = _("oj-formlayout-column-gutter");
            e.appendChild(t)
        }

        function U(e, t, o, i) {
            var a = H(e, i);
            F(o, e);
            var l = _("oj-flex-item");
            if (o.appendChild(l), l.appendChild(e), t)
                if (l.style.flexGrow = "1", l.style.flexShrink = "1", l.style.flexBasis = a, l.style.width = a, l.style.maxWidth = a, "OJ-FORM-LAYOUT" === t.tagName && l.classList.add("oj-formlayout-nested-formlayout"), "start" === n.labelEdge) {
                    l.style.display = "flex";
                    let o = _("oj-formlayout-inline-label"),
                        i = _("oj-formlayout-inline-value");
                    o.style.flexGrow = "0", o.style.flexShrink = "0", o.style.flexBasis = n.labelWidth, o.style.width = n.labelWidth, o.style.maxWidth = n.labelWidth, o.appendChild(e), l.appendChild(o), i.style.flexGrow = "1", i.style.flexShrink = "1", i.style.flexBasis = "calc(100% - " + n.labelWidth + ")", i.style.width = i.style.flexBasis, i.style.maxWidth = i.style.flexBasis, i.appendChild(t), l.appendChild(i)
                } else l.appendChild(t);
            else if ("labelHint" in e && C(e)) l.style.flexGrow = "1", l.style.flexShrink = "1", l.style.flexBasis = a, l.style.width = a, l.style.maxWidth = a, l.appendChild(e);
            else if (l.appendChild(e), l.style.flexGrow = "1", l.style.flexShrink = "1", l.style.flexBasis = a, l.style.width = a, l.style.maxWidth = a, l.classList.add("oj-formlayout-no-label-flex-item"), "OJ-LABEL-VALUE" === e.tagName) {
                let t = s.parseJSONFromFontFamily(c).columnGap;
                l.classList.add("oj-formlayout-nested-labelvalue"), e.setAttribute("data-oj-colspan", i), e.setAttribute("data-oj-column-gap", t), e.refresh()
            } else "OJ-FORM-LAYOUT" === e.tagName && l.classList.add("oj-formlayout-nested-formlayout");
            D(o)
        }

        function _(e) {
            var t = document.createElement("div");
            return t.setAttribute(r, ""), t.setAttribute("data-oj-internal", ""), t.classList.add(e), t
        }

        function I(e) {
            for (var t = e, o = !0; t !== n;) {
                if ("OJ-FORM-LAYOUT" === t.tagName) {
                    o = !1;
                    break
                }
                if (null == (t = t.parentElement)) {
                    o = !1;
                    break
                }
            }
            return o
        }

        function q(e) {
            for (; e.firstChild;) {
                var t = e.firstChild;
                e.parentNode.insertBefore(t, e)
            }
            e.parentNode.removeChild(e)
        }

        function V(e) {
            var t = e;
            t.id || (t.id = "oflId_" + d, d += 1)
        }

        function z() {
            var e = o.AgentUtils.getAgentInfo();
            return "ie" === e.browser && 11 === e.browserVersion
        }

        function G(e) {
            let t = s.parseJSONFromFontFamily("oj-form-control-option-defaults"),
                n = "displayOptions";
            if (t) {
                n = "use" === t.useUserAssistanceOptionDefault ? e.userAssistanceDensity : "displayOptions"
            }
            return "compact" === n || "displayOptions" === n
        }

        function P(e) {
            var t = s.parseJSONFromFontFamily(c) || {};
            e ? (e.props.labelEdge || (n.labelEdge = t.labelEdge), e.props.colspanWrap || (n.colspanWrap = t.colspanWrap), e.props.direction || (n.direction = t.direction)) : (n.labelEdge || (n.labelEdge = t.labelEdge), n.colspanWrap || (n.colspanWrap = t.colspanWrap), n.direction || (n.direction = t.direction))
        }
        P(e), t._rootElementMutationObserver = new MutationObserver(function(e) {
            document.body.contains(n) ? (! function(e) {
                for (var t = e.length, o = 0; o < t; o++) {
                    var i = e[o];
                    if ("childList" === i.type)
                        for (var a = i.addedNodes.length, l = 0; l < a; l++) {
                            var s = i.addedNodes[l];
                            s.parentNode === n && p.appendChild(s)
                        }
                }
            }(e), function(e) {
                for (var t = !0, o = e.length, i = ["colspan", "label-hint"], a = 0; a < o; a++) {
                    var l = e[a];
                    if ("childList" === l.type && ((s = l.target) === n || s && "DIV" === s.tagName && s.hasAttribute(r)) && I(l.target)) {
                        t = !1;
                        break
                    }
                    if ("attributes" === l.type && i.includes(l.attributeName)) {
                        t = !1;
                        break
                    }
                }
                var s;
                return t
            }(e) || (! function(e) {
                for (var t = e.length, n = 0; n < t; n++) {
                    var o = e[n];
                    if ("childList" === o.type)
                        for (var i = o.removedNodes.length, a = 0; a < i; a++) {
                            var l = o.removedNodes[a];
                            1 === l.nodeType && (l.removeEventListener("labelHintChanged", w), l.removeEventListener("helpHintsChanged", E), l.removeEventListener("requiredChanged", O), l.removeEventListener("userAssistanceDensityChanged", A))
                        }
                }
            }(e), n.refresh())) : this.disconnect()
        }), t._resizeHandler = function(e, t) {
            M() !== h && n.refresh()
        }, this.createDOM = function() {
            n.classList.add("oj-form-layout"), (p = document.createElement("div")).classList.add("oj-form"), p.setAttribute("data-oj-context", ""), p.setAttribute("data-oj-internal", ""), p.setAttribute(r, ""), n.readonly ? p.classList.remove("oj-enabled") : p.classList.add("oj-enabled");
            for ("efficient" === n.userAssistanceDensity ? p.classList.add("oj-efficient") : p.classList.remove("oj-efficient"); n.firstChild;) p.appendChild(n.firstChild);
            n.appendChild(p)
        }, t.handlePropertyChanged = function(e, t) {
            switch (e) {
                case "readonly":
                    return n.readonly ? p.classList.remove("oj-enabled") : p.classList.add("oj-enabled"), !0;
                case "userAssistanceDensity":
                    {
                        const e = "oj-efficient";
                        return "efficient" === n.userAssistanceDensity ? p.classList.add(e) : p.classList.remove(e),
                        !0
                    }
                case "labelWrapping":
                    return "truncate" === n.labelWrapping ? p.classList.add(u) : p.classList.remove(u), !0;
                default:
                    return !1
            }
        }, this.updateDOM = function() {
            function e() {
                ! function() {
                    if (!m) {
                        var e = a.getContext(n).getBusyContext(),
                            t = {
                                description: "The oj-form-layout component with id = '" + n.id + "' is being rendered."
                            };
                        m = e.addBusyState(t)
                    }
                }(), P(), y = [], a.getContext(p).getBusyContext().whenReady().then(function() {
                    var e, s = document.activeElement,
                        r = !1;
                    ! function() {
                        if (!f) {
                            var e = a.getContext(p).getBusyContext(),
                                t = {
                                    description: "The oj-form div for oj-form-layout component with id = '" + n.id + "' is being rendered."
                                };
                            f = e.addBusyState(t)
                        }
                    }(), t._rootElementMutationObserver.disconnect(), (e = p) && t._resizeHandler && i.removeResizeListener(e, t._resizeHandler),
                        function() {
                            var e;
                            if ("start" === n.labelEdge) {
                                var t = parseInt(n.labelWidth, 10);
                                (isNaN(t) || t > 0) && p.classList.add("oj-form-cols-labels-inline"), n.classList.add("oj-formlayout-labels-inline"), p.classList.remove("oj-form-cols")
                            } else p.classList.add("oj-form-cols"), p.classList.remove("oj-form-cols-labels-inline"), n.classList.remove("oj-formlayout-labels-inline");
                            "truncate" === n.labelWrapping ? p.classList.add(u) : p.classList.remove(u);
                            let o = h;
                            if ((h = M()) !== o) {
                                var i = "oj-formlayout-max-cols-" + h,
                                    a = n.className; - 1 !== a.indexOf("oj-formlayout-max-cols-") ? n.className = a.replace(/oj-formlayout-max-cols-[\d+]/, i) : n.classList.add(i)
                            }
                            "row" === n.direction ? (e = 1, p.classList.add("oj-formlayout-form-across")) : (e = h, p.classList.remove("oj-formlayout-form-across"));
                            p.style.columnCount = e, p.style.webkitColumnCount = e, p.style.MozColumnCount = e
                        }(), b || function() {
                            for (var e = p.querySelectorAll("[data-oj-formlayout-bonus-dom]"), t = e.length, n = 0; n < t; ++n) {
                                var o = e[n];
                                I(o) && ("OJ-LABEL" === o.tagName ? (o.for = "", o.parentElement.removeChild(o)) : q(o))
                            }
                        }(),
                        function() {
                            var e = p.firstElementChild,
                                t = 0,
                                o = "column" === n.direction;
                            for (; e;) {
                                var i = e.tagName.toLowerCase();
                                if (-1 !== i.indexOf("-"))
                                    if ("oj-label" === i) {
                                        var a = e;
                                        if (!(e = e.nextElementSibling)) throw V(n), V(a), x(), j(), new Error("oj-form-layout component with id='" + n.id + "' has an oj-label child element with id='" + a.id + "' but has no next sibling element that it is associated with.")
                                    } else "oj-label-value" === i ? b || e.refresh() : e.classList.contains("oj-complete") ? L(e) : ((o || t % h == 0) && e.setAttribute("data-oj-needs-oj-flex-div", ""), y.push(e));
                                t += 1, e = e.nextElementSibling
                            }
                        }(),
                        function() {
                            var e, t = [],
                                o = p.children.length,
                                i = "column" === n.direction,
                                a = 0,
                                s = 0;
                            ! function(e, t) {
                                for (var n = t, o = e.length - 1; o >= 0; o--) n[o] = e[o]
                            }(p.children, t);
                            var r, d = 0,
                                c = !1,
                                u = !1;
                            for (; a < o;) {
                                var f = t[a];
                                if (r = 1, (i || s % h == 0) && (e = R(e, f)), -1 === y.indexOf(f))
                                    if ("oj-label" === f.tagName.toLowerCase()) U(f, t[a += 1], e);
                                    else if ("labelHint" in f && C(f)) U(f, null, e);
                                else {
                                    if ("colspan" in f && f.colspan > 1)
                                        if (i) c || (l.error('Colspan attribute is ignored unless direction is set to "row"'), c = !0);
                                        else {
                                            var m = h - d;
                                            r = Math.floor(f.colspan), "wrap" === n.colspanWrap && m < r && d > 0 ? (k(e, s), s += m, r = Math.min(r, h), e = R(e, f)) : r = Math.min(r, m), !u && h > 1 && (u = !0)
                                        }
                                    U(f, null, e, r)
                                }
                                s += r, i || s % h == 0 || J(e), d = s % h, a += 1
                            }
                            u && !i ? p.classList.add("oj-form-control-full-width") : p.classList.remove("oj-form-control-full-width");
                            k(e, s)
                        }(), o.Components && o.Components.subtreeAttached(p), s && (r = i.isAncestorOrSelf(n, s)), r && setTimeout(function() {
                            s.focus()
                        }, 0), g(p), t._rootElementMutationObserver.observe(n, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }), b && (b = !1), x(), j()
                })
            }
            var s;
            v || (!(b || !n.hasAttribute("data-oj-context")) && !(s = a.getContext(n).getBusyContext()).isReady() ? (v = !0, s.whenReady().then(function() {
                v = !1, e()
            })) : e())
        }
    }
    u.getDynamicDefaults = function() {
        var e = s.parseJSONFromFontFamily(c) || {};
        return {
            labelEdge: e.labelEdge,
            direction: e.direction
        }
    }, r.extension._CONSTRUCTOR = u, r.extension._TRACK_CHILDREN = "nearestCustomElement", o.CustomElementBridge.register("oj-form-layout", {
        metadata: o.CollectionUtils.mergeDeep(r, {
            properties: {
                readonly: {
                    binding: {
                        provide: [{
                            name: "containerReadonly"
                        }, {
                            name: "readonly"
                        }],
                        consume: {
                            name: "containerReadonly"
                        }
                    }
                },
                userAssistanceDensity: {
                    binding: {
                        provide: [{
                            name: "containerUserAssistanceDensity",
                            default: "efficient"
                        }, {
                            name: "userAssistanceDensity",
                            default: "efficient"
                        }],
                        consume: {
                            name: "containerUserAssistanceDensity"
                        }
                    }
                },
                labelEdge: {
                    binding: {
                        provide: [{
                            name: "containerLabelEdge"
                        }, {
                            name: "labelEdge",
                            transform: {
                                top: "provided",
                                start: "provided"
                            }
                        }],
                        consume: {
                            name: "containerLabelEdge"
                        }
                    }
                }
            }
        })
    })
});
//# sourceMappingURL=ojformlayout.js.map