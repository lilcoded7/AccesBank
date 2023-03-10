/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojcustomelement-utils", "ojs/ojcontext", "ojs/ojlogger", "ojs/ojcomponentcore"], function(e, n, t, o, i) {
    "use strict";

    function r(e) {
        var r, a = this,
            d = e.element,
            l = [];

        function s() {
            l = [],
                function e(n) {
                    var t, o = [],
                        i = n.childNodes,
                        r = i.length;
                    for (t = 0; t < r; t++) {
                        var a = i[t];
                        g(a) ? l.push(a) : o.push(a)
                    }
                    for (r = o.length, t = 0; t < r; t++) e(o[t])
                }(d), e.props.valid = h();
            for (var n = l.length, t = 0; t < n; t++) u(l[t])
        }

        function u(e) {
            e.addEventListener("validChanged", f.bind(this)), e.addEventListener("disabledChanged", c.bind(this)), e.addEventListener("readonlyChanged", c.bind(this))
        }

        function v(e) {
            e.removeEventListener("validChanged", f), e.removeEventListener("disabledChanged", c), e.removeEventListener("readonlyChanged", c)
        }

        function f() {
            e.props.valid = h()
        }

        function c(n) {
            var t = n.target,
                o = t.valid,
                i = !(t.readonly || t.disabled);
            "valid" === o || (e.props.valid = i && "invalidShown" === o ? "invalidShown" : h())
        }

        function h() {
            for (var e = "valid", n = l.length, t = 0; t < n && "invalidShown" !== e; t++) {
                var o = l[t];
                if (O(o)) {
                    var i = o.valid,
                        r = o.disabled,
                        a = o.readonly;
                    r || a || ("invalidShown" === i ? e = "invalidShown" : "invalidHidden" === i ? e = "invalidHidden" : "pending" === i && "valid" === e && (e = "pending"))
                }
            }
            return e
        }

        function g(e) {
            if (1 === e.nodeType && -1 !== e.tagName.indexOf("-") && "valid" in e && (O(e) && void 0 !== e.valid)) return !0;
            return !1
        }

        function p(e, n) {
            var t = n.length;
            if (g(e)) return !0;
            for (var o = 0; o < t; o++)
                if (g(n[o])) return !0;
            return !1
        }

        function y(e) {
            var n = l.length;
            if (1 !== e.nodeType) return !1;
            for (var t = 0; t < n; t++) {
                if (l[t].contains(e)) return !0
            }
            return !1
        }

        function m(e) {
            for (var n = l.length, t = 0; t < e.length; t++) {
                var o = e[t];
                if (1 === o.nodeType) {
                    if (-1 !== l.indexOf(o)) return !0;
                    for (var i = 0; i < n; i++)
                        if (o.contains(l[i])) return !0
                }
            }
            return !1
        }

        function O(e) {
            var t, o = n.CustomElementUtils.getElementBridge(e);
            if (!o) return !0;
            var r = o._WIDGET_ELEM;
            return void 0 !== r && (t = i.__GetWidgetConstructor(r)), !(void 0 !== r && !t)
        }
        a._rootElementMutationObserver = new MutationObserver(function(e) {
            if (document.body.contains(d)) {
                for (var n = e.length, t = !1, o = 0; o < n && !t; o++) {
                    var i = e[o],
                        r = i.target,
                        a = i.removedNodes,
                        l = i.addedNodes;
                    if (!(t = m(a)) && l.length > 0) !y(r) && p(r, l) && (t = !0)
                }
                t && (! function(e) {
                    for (var n = e.length, t = 0; t < n; t++)
                        for (var o = e[t], i = o.removedNodes.length, r = 0; r < i; r++) {
                            var a = o.removedNodes[r];
                            1 === a.nodeType && v(a)
                        }
                }(e), s())
            } else this.disconnect()
        }), a.createDOM = function() {
            for (d.classList.add("oj-validation-group"), (r = document.createElement("div")).setAttribute("data-oj-context", ""); d.firstChild;) r.appendChild(d.firstChild);
            d.appendChild(r)
        }, a.updateDOM = function() {
            var e = t.getContext(r).getBusyContext();
            let n = t.getContext(d).getBusyContext().addBusyState({
                description: `oj-validation-group#${d.id} initial valid state`
            });
            e.whenReady().then(function() {
                for (var e = l.length, n = 0; n < e; n++) v(l[n]);
                s(), a._rootElementMutationObserver.observe(d, {
                    childList: !0,
                    subtree: !0
                })
            }).finally(n)
        }, a.handlePropertyChanged = function(e, n) {
            return !0
        }, a.showMessages = function() {
            for (var e = 0; e < l.length; e++) {
                var n = l[e];
                n.disabled || n.readonly || "showMessages" in n && n.showMessages()
            }
        }, a.focusOn = function(e) {
            var n = null,
                t = null;
            "@firstInvalidShown" === e ? (t = function() {
                var e = [];
                if ("invalidShown" !== d.valid) return null;
                for (var n = l.length, t = 0; t < n; t++) {
                    var o = l[t];
                    o.disabled || o.readonly || "invalidShown" === o.valid && e.push(o)
                }
                if (0 === e.length) return null;
                return e.sort(function(e, n) {
                    return e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
                }), e[0]
            }()) && ("focusOn" in t ? t.focusOn("@firstInvalidShown") : t.focus()) : void 0 === e ? (n = function() {
                for (var e = null, n = l.length, t = 0; t < n; t++)
                    if (!(e = l[t]).readonly && !e.disabled) return e;
                return null
            }()) && ("focusOn" in n ? n.focusOn() : n.focus()) : o.info("focusOn's parameter value is not '@firstInvalidShown' or empty, so it's a no-op.")
        }
    }
    var a;
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, (a = {
        properties: {
            valid: {
                type: "string",
                writeback: !0,
                enumValues: ["invalidHidden", "invalidShown", "pending", "valid"],
                readOnly: !0
            }
        },
        methods: {
            focusOn: {},
            getProperty: {},
            setProperties: {},
            setProperty: {},
            showMessages: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        extension: {}
    }).extension._CONSTRUCTOR = r, Object.freeze(a), e.CustomElementBridge.register("oj-validation-group", {
        metadata: a
    })
});
//# sourceMappingURL=ojvalidationgroup.js.map