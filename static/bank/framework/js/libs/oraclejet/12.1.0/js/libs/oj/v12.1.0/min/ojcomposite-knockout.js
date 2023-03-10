/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "knockout", "ojs/ojcustomelement", "ojs/ojcustomelement-utils", "ojs/ojkoshared", "ojs/ojlogger", "ojs/ojtemplateengine"], function(e, o, t, n, l, r, i) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    const s = {};
    e._registerLegacyNamespaceProp("CompositeTemplateRenderer", s), s.renderTemplate = function(t, n, l) {
            var r = s._storeNodes(n, l);
            o.virtualElements.setDomNodeChildren(n, l), s.invokeViewModelMethod(n, t.viewModel, "attached", [t.viewModelContext]), s.invokeViewModelMethod(n, t.viewModel, "connected", [t.viewModelContext]);
            var i = s._getKoBindingContext().createChildContext(t.viewModel, void 0, function(o) {
                o[e.Composite.__COMPOSITE_PROP] = n, o.__oj_slots = t.slotMap, o.__oj_nodestorage = r, o.$slotNodeCounts = t.slotNodeCounts, o.$slotCounts = t.slotNodeCounts, o.$props = t.props, o.$properties = t.props, o.$unique = t.unique, o.$uniqueId = t.uniqueId, o.$parent = null, o.$parentContext = null, o.$parents = null, o.$provided = null
            });
            o.applyBindingsToDescendants(i, n), s.invokeViewModelMethod(n, t.viewModel, "bindingsApplied", [t.viewModelContext])
        }, s.getEnclosingComposite = function(t) {
            for (var n = null, l = o.contextFor(t); l && !n; l = l.$parentContext) n = l[e.Composite.__COMPOSITE_PROP];
            return n
        }, s.createTracker = function() {
            return o.observable()
        }, s.invokeViewModelMethod = function(e, t, n, l) {
            if (null != t) {
                var r = t[n];
                if ("function" == typeof r) try {
                    return o.ignoreDependencies(r, t, l)
                } catch (o) {
                    throw new Error("Error while invoking " + n + " callback for " + e.tagName.toLowerCase() + " with id '" + e.id + "'.")
                }
            }
        }, s._storeNodes = function(o, t) {
            var l, r = o.childNodes;
            if (r) {
                (l = document.createElement("div")).setAttribute("data-bind", "_ojNodeStorage_"), l.style.display = "none", t.push(l);
                for (var i = [], s = 0; s < r.length; s++) {
                    var a = r[s];
                    n.CustomElementUtils.isSlotable(a) && i.push(a)
                }
                i.forEach(function(e) {
                    l.appendChild(e)
                }), e.Components && e.Components.subtreeHidden(l)
            }
            return l
        }, s._getKoBindingContext = function() {
            if (!s._BINDING_CONTEXT) {
                var e = document.createElement("div");
                o.applyBindings(null, e), s._BINDING_CONTEXT = o.contextFor(e), o.cleanNode(e)
            }
            return s._BINDING_CONTEXT
        }, s._BINDING_CONTEXT = null,
        function() {
            function e(e, t) {
                var n, l, r = ["name", "slot"];
                t ? (r.push("data"), r.push("as"), l = "ko _ojBindTemplateSlot_:{") : (r.push("index"), l = "ko _ojBindSlot_:{");
                for (var i = [], s = 0; s < r.length; s++) {
                    var a = r[s],
                        d = o(e.getAttribute(a));
                    d && i.push(a + ":" + d)
                }
                l += i.join(","), l += "}";
                var u = document.createComment(l),
                    p = document.createComment("/ko");
                n = [u];
                var c = e.parentNode;
                for (c.insertBefore(u, e); e.childNodes.length > 0;) {
                    var m = e.childNodes[0];
                    c.insertBefore(m, e), n.push(m)
                }
                return n.push(p), c.replaceChild(p, e), n
            }

            function o(e) {
                if (null != e) {
                    var o = n.AttributeUtils.getExpressionInfo(e).expr;
                    return null == o && (o = "'" + e + "'"), o
                }
                return null
            }
            l.registerPreprocessor("oj-bind-slot", e), l.registerPreprocessor("oj-slot", e), l.registerPreprocessor("oj-bind-template-slot", function(o) {
                return e(o, !0)
            })
        }(), o.bindingHandlers._ojNodeStorage_ = {
            init: function() {
                return {
                    controlsDescendantBindings: !0
                }
            }
        };
    const a = {};
    e._registerLegacyNamespaceProp("SlotUtils", a), a.cleanup = function(t, n) {
        var l = n.__oj_nodestorage;
        if (l)
            for (var r = o.virtualElements.firstChild(t); r;) {
                var i = o.virtualElements.nextSibling(r);
                null != r.__oj_slots && (l.appendChild(r), e.Components && 1 === r.nodeType && e.Components.subtreeHidden(r)), r = i
            }
    }, o.bindingHandlers._ojBindSlot_ = {
        init: function(t, l, r, i, s) {
            o.utils.domNodeDisposal.addDisposeCallback(t, a.cleanup.bind(null, t, s));
            var d = s.__oj_slots,
                u = l(),
                p = o.utils.unwrapObservable,
                c = p(u.name) || "",
                m = p(u.slot) || "",
                _ = p(u.index),
                f = null != _ ? [d[c][_]] : d[c];
            if (f) {
                var v;
                for (v = 0; v < f.length; v++) {
                    f[v].__oj_slots = m
                }
                n.CustomElementUtils.allowSlotRelocation(!0);
                try {
                    o.virtualElements.setDomNodeChildren(t, f)
                } finally {
                    n.CustomElementUtils.allowSlotRelocation(!1)
                }
                if (e.Components)
                    for (v = 0; v < f.length; v++) {
                        var C = f[v];
                        1 === C.nodeType && e.Components.subtreeShown(C)
                    }
                return {
                    controlsDescendantBindings: !0
                }
            }
            o.virtualElements.childNodes(t).forEach(function(e) {
                (function(e) {
                    return 1 === e.nodeType || 3 === e.nodeType && e.nodeValue.trim()
                })(e) && (e.__oj_slots = m)
            })
        }
    }, o.virtualElements.allowedBindings._ojBindSlot_ = !0, o.bindingHandlers._ojBindTemplateSlot_ = {
        init: function(t, n, l, s, d) {
            o.utils.domNodeDisposal.addDisposeCallback(t, a.cleanup.bind(null, t, d));
            var u = d.__oj_slots,
                p = n(),
                c = o.utils.unwrapObservable,
                m = c(p.name) || "",
                _ = u[m],
                f = _ && _[_.length - 1],
                v = !1;
            if (!f)
                for (var C = o.virtualElements.childNodes(t), g = 0; g < C.length; g++)
                    if ("TEMPLATE" === C[g].tagName) {
                        v = !0, f = C[g];
                        break
                    }
            if (f) {
                var h = d[e.Composite.__COMPOSITE_PROP];
                "TEMPLATE" !== f.tagName && r.error("Slot content for slot '" + m + "' under " + h.tagName.toLowerCase() + " with id '" + h.id + "' should be wrapped inside a <template> node."), f.__oj_slots = c(p.slot) || "", o.computed(function() {
                    var e = c(p.data),
                        n = c(p.as),
                        l = i.execute(v ? t : h, f, e, v ? n : null);
                    o.virtualElements.setDomNodeChildren(t, l)
                })
            } else o.virtualElements.setDomNodeChildren(t, []);
            return {
                controlsDescendantBindings: !0
            }
        }
    }, o.virtualElements.allowedBindings._ojBindTemplateSlot_ = !0
});
//# sourceMappingURL=ojcomposite-knockout.js.map