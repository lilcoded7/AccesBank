/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["jqueryui-amd/widget", "ojs/ojkoshared", "ojs/ojcore", "ojs/ojlogger", "knockout", "ojs/ojdomutils", "jquery", "ojs/ojcustomelement-utils", "ojs/ojbindpropagation", "ojs/ojkeysetimpl", "ojs/ojcontext", "ojs/ojtemplateengine", "ojs/ojcore-base", "ojs/ojknockouttemplateutils", "ojs/ojresponsiveknockoututils"], function(e, t, n, r, i, o, a, s, u, l, d, c, p, f, h) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l, d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d, c = c && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c, p = p && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
    const m = function(e, t) {
        this.Init(e, t)
    };
    n.Object.createSubclass(m, n.Object, "ComponentBinding.ComponentChangeTracker"), m.prototype.Init = function(e, t) {
        m.superclass.Init.call(this), this._updateCallback = e, this._queue = t, this._changes = {}, this._suspendCountMap = {}
    }, m.prototype.addChange = function(e, t) {
        this._isSuspended(e) || this._disposed || (this._changes[e] = t, this._queue.registerComponentChanges(this))
    }, m.prototype.dispose = function() {
        this._disposed = !0
    }, m.prototype.resume = function(e) {
        var t = this._suspendCountMap[e] || 0;
        (t -= 1) < 0 ? r.error("ComponentChangeTracker suspendCount underflow") : 0 === t ? delete this._suspendCountMap[e] : this._suspendCountMap[e] = t
    }, m.prototype.suspend = function(e) {
        var t = this._suspendCountMap[e] || 0;
        this._suspendCountMap[e] = t + 1
    }, m.prototype.applyChanges = function(e) {
        this._disposed || this._updateCallback(e)
    }, m.prototype.flushChanges = function() {
        var e = this._changes;
        return this._changes = {}, e
    }, m.prototype._isSuspended = function(e) {
        return (this._suspendCountMap[e] || 0) >= 1
    };
    const g = {};
    var v;
    n._registerLegacyNamespaceProp("__ExpressionUtils", g), v = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, g.getPropertyWriterExpression = function(e) {
        if (null == e || ["true", "false", "null", "undefined"].indexOf(e) >= 0) return null;
        var t = (e = e.trim()).match(v);
        return null === t ? null : "{_ko_property_writers: function(v){" + (t[1] ? "Object(" + t[1] + ")" + t[2] : e) + "=v;}}"
    }, g.getWriter = function(e) {
        return e._ko_property_writers
    };
    const y = function(e, t) {
        this.Init(e, t)
    };

    function b(e, t) {
        var n = {};
        return n.value = t.value, n
    }

    function _(e, t, n) {
        var r = {},
            i = n.optionMetadata;
        if (i && "shouldWrite" === i.writeback) {
            var o = n.option;
            r[o] = n.value, i.readOnly && (e.readOnlyProperties[o] = !0)
        }
        return r
    }
    var C, E, D;

    function A(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = r.key,
                o = r.value;
            if (null != i && null != o && t(i.trim(), o.trim())) break
        }
    }

    function x(e, t) {
        return function(n) {
            var r = e.createChildContext(n.context);
            return i.renderTemplate(t, r, {
                afterRender: function(e) {
                    a(e)._ojDetectCleanData()
                }
            }, n.parentElement), null
        }
    }

    function j(e, t) {
        return function(n) {
            var r = e.createChildContext(n.data);
            return i.renderTemplate(t, r, {
                afterRender: function(e) {
                    a(e)._ojDetectCleanData()
                }
            }, n.parentElement), null
        }
    }

    function N(e, t, n) {
        return "tooltip" === e && t.template && (t._renderer = x(n, t.template)), {
            tooltip: t
        }
    }

    function P(e, t, n) {
        return "pieCenter" === e && t.template && (t._renderer = x(n, t.template)), {
            pieCenter: t
        }
    }

    function O(e, t, n) {
        return "optionTemplate" === e && null !== t ? {
            optionRenderer: function(e, t) {
                return function(n) {
                    var r = n.parentElement,
                        o = e.createChildContext(n.data, null, function(e) {
                            e.$optionContext = n
                        });
                    return i.renderTemplate(t, o, null, r), null
                }
            }(n, String(t))
        } : null
    }
    n.Object.createSubclass(y, n.Object, "oj.ComponentBinding"), n._registerLegacyNamespaceProp("ComponentBinding", y), y.create = function(e, t) {
            if (null == e) throw new Error("Binding name is required!");
            for (var n = new y(e, t), r = i.bindingHandlers, o = Array.isArray(e) ? e : [e], a = 0; a < o.length; a++) {
                var s = o[a];
                y._REGISTERED_NAMES.push(s), r[s] = n
            }
            return n
        }, y.getDefaultInstance = function() {
            return y._INSTANCE
        }, y.prototype.setupManagedAttributes = function(e) {
            var t = e.for;
            t = null == t ? "@global" : t;
            var n = this._managedAttrOptions[t] || [];
            n.push(e), this._managedAttrOptions[t] = n
        }, y.deliverChanges = function() {
            t.getGlobalChangeQueue().deliverChanges()
        }, y.prototype.Init = function(e, t) {
            y.superclass.Init.call(this), "string" == typeof t && (t = {
                componentName: t
            }), this._bindingOptions = t || {}, this._bindingNames = Array.isArray(e) ? e : [e], this.init = this._init.bind(this), this.update = this._update.bind(this), this._managedAttrOptions = {}
        }, y.prototype._getBindingOptions = function() {
            return this._bindingOptions
        }, y.prototype._init = function(e, t, n, r, o) {
            return i.applyBindingsToDescendants(o, e), {
                controlsDescendantBindings: !0
            }
        }, y.prototype._update = function(e, n, o, s, u) {
            var l, d, c = [],
                p = 0,
                f = a(e);

            function h(e) {
                c.forEach(function(e) {
                    e.dispose()
                }), c = [], e && l && (l("destroy"), l = null), d && (d.dispose(), d = null), f.off(y._HANDLER_NAMESPACE)
            }

            function g(n, i, a) {
                if (null != n) {
                    var s = f[n];
                    if ("function" == typeof s) {
                        s = s.bind(f);
                        d = new m(function(e) {
                            var t = y.__removeDotNotationOptions(e);
                            s("option", e);
                            for (var n = Object.keys(t), r = 0; r < n.length; r++) {
                                var i = n[r];
                                s("option", i, t[i])
                            }
                        }, t.getGlobalChangeQueue());
                        var p = Object.keys(a).filter(function(e) {
                                return !(null == e || e === i)
                            }),
                            h = {
                                component: s,
                                changeTracker: d,
                                componentName: n,
                                specifiedOptions: p,
                                computeds: c,
                                valueAccessor: function() {
                                    return a
                                },
                                allBindingsAccessor: o,
                                bindingContext: u,
                                destroyCallback: function() {
                                    l = null
                                },
                                readOnlyProperties: {}
                            };
                        l = this._initComponent(e, h)
                    } else r.error("Component %s is not found", n)
                }
            }
            i.ignoreDependencies(function() {
                i.computed(function() {
                    var e = i.utils.unwrapObservable(n());
                    "object" != typeof e && r.error("ojComponent binding should evaluate to an object");
                    var t, o = this._bindingOptions.componentName,
                        a = !1;
                    if (null == o && null != e) {
                        for (var s = [y._COMPONENT_OPTION, "role"], u = 0; !a && u < s.length; u++)(t = s[u]) in e && (a = !0, o = e[t]);
                        a || r.error("component attribute is required for the ojComponent binding"), o = i.utils.unwrapObservable(o)
                    }
                    0 === p ? p = 1 : i.ignoreDependencies(h, this, [!0]), i.ignoreDependencies(g, this, [o, t, e])
                }, this, {
                    disposeWhenNodeIsRemoved: e
                })
            }, this), i.utils.domNodeDisposal.addDisposeCallback(e, h.bind(this, !1))
        }, y.prototype._initComponent = function(e, t) {
            var r = !1,
                o = 0,
                s = {},
                u = a(e),
                l = t.component,
                d = t.componentName,
                c = this,
                p = function(n) {
                    if (n.target && n.target === e) {
                        t.destroyCallback();
                        var i = c._bindingOptions.beforeDestroy;
                        i && i(e, l, t.valueAccessor, t.allBindingsAccessor, t.bindingContext), y._deliverCreateDestroyEventToManagedProps(!1, s, e, l, t.valueAccessor, t.allBindingsAccessor, t.bindingContext), r = !0, t.changeTracker.dispose(), e.removeEventListener("_ojDestroy", p)
                    }
                };
            e.addEventListener("_ojDestroy", p);
            var f = y._resolveManagedAttributes(this._managedAttrOptions, t.specifiedOptions, d),
                h = y.getDefaultInstance();
            if (this !== h) {
                var m = h._getManagedAttributes(t.specifiedOptions, d);
                n.CollectionUtils.copyInto(m, f), f = m
            }
            for (var g = {}, v = function() {
                    var n = this._property,
                        i = y._toJS(t.valueAccessor()[n]);
                    if (0 === o) {
                        var a = f[n];
                        if (null != a) {
                            s[n] = a;
                            var u = a.init;
                            if (null != u)
                                for (var d = u(n, i, e, l, t.valueAccessor, t.allBindingsAccessor, t.bindingContext) || {}, c = Object.keys(d), p = 0; p < c.length; p++) {
                                    var h = c[p];
                                    g[h] = y.__cloneIfArray(d[h])
                                }
                        } else g[n] = y.__cloneIfArray(i)
                    } else if (!r)
                        if (null != f[n]) {
                            var m = f[n].update;
                            if (null != m)
                                for (var v = m(n, i, e, l, t.valueAccessor, t.allBindingsAccessor, t.bindingContext) || {}, b = Object.keys(v), _ = 0; _ < b.length; _++) {
                                    var C = b[_];
                                    t.changeTracker.addChange(C, y.__cloneIfArray(v[C]))
                                }
                        } else t.readOnlyProperties[n] || t.changeTracker.addChange(n, y.__cloneIfArray(i))
                }, b = 0; b < t.specifiedOptions.length; b++) t.computeds.push(i.computed(v, {
                _property: t.specifiedOptions[b]
            }));
            o = 1, y._registerWritebacks(u, t);
            var _ = y.__removeDotNotationOptions(g);
            l(g), Object.keys(_).forEach(function(e) {
                l("option", e, _[e])
            });
            var C = this._bindingOptions.afterCreate;
            return C && C(e, l, t.valueAccessor, t.allBindingsAccessor, t.bindingContext), y._deliverCreateDestroyEventToManagedProps(!0, s, e, l, t.valueAccessor, t.allBindingsAccessor, t.bindingContext), g = null, l
        }, y.prototype._getManagedAttributes = function(e, t) {
            return y._resolveManagedAttributes(this._managedAttrOptions, e, t)
        }, y._resolveManagedAttributes = function(e, t, n) {
            var r = {},
                i = [],
                o = function(t, n) {
                    var r = e[t];
                    if (null != r)
                        for (var a = r.length - 1; a >= 0; a--) {
                            var s = r[a];
                            if (null != s.attributes && i.push(s), n) {
                                var u = s.use;
                                if (null != u) {
                                    u = Array.isArray(u) ? u : [u];
                                    for (var l = 0; l < u.length; l++) o(u[l], !0)
                                }
                            }
                        }
                };
            o(n, !0);
            var s = a.oj[n];
            if (null != s)
                for (var u = Object.getPrototypeOf(s.prototype); null != u && "oj" === u.namespace;) o(u.widgetName, !0), u = Object.getPrototypeOf(u);
            if (o("@global", !1), i.length > 0)
                for (var l = 0; l < t.length; l++)
                    for (var d = t[l], c = 0; c < i.length; c++) {
                        var p = i[c];
                        if (p.attributes.indexOf(d) >= 0) {
                            r[d] = {
                                init: p.init,
                                update: p.update,
                                afterCreate: p.afterCreate,
                                beforeDestroy: p.beforeDestroy
                            };
                            break
                        }
                    }
            return r
        }, y._HANDLER_NAMESPACE = ".oj_ko", y._registerWritebacks = function(e, t) {
            for (var n = {
                    "^slider$": [{
                        event: "slidechange",
                        getter: b
                    }],
                    "^oj*": [{
                        event: "ojoptionchange",
                        getter: _.bind(void 0, t)
                    }]
                }, r = {}, i = Object.keys(n), o = 0; o < i.length; o++) {
                var a = i[o];
                if (t.componentName.match(a)) {
                    for (var s = n[a], u = 0; u < s.length; u++) {
                        var l = s[u];
                        e.on(l.event + y._HANDLER_NAMESPACE, {
                            getter: l.getter
                        }, function(n, i) {
                            if (n.target === e[0])
                                for (var o = n.data.getter(n, i), a = t.valueAccessor(), s = Object.keys(o), u = 0; u < s.length; u++) {
                                    var l = s[u];
                                    t.changeTracker.suspend(l);
                                    try {
                                        if (t.specifiedOptions.indexOf(l) >= 0) {
                                            var d = a[y._OPTION_MAP],
                                                c = null == d ? null : d[l],
                                                p = a[l];
                                            y._writeValueToProperty(l, p, o[l], c, t.bindingContext, r)
                                        }
                                    } finally {
                                        t.changeTracker.resume(l)
                                    }
                                }
                        })
                    }
                    break
                }
            }
        }, y._writeValueToProperty = function(e, n, r, o, a, s) {
            if (null != n && i.isObservable(n)) i.isWriteableObservable(n) && n(y.__cloneIfArray(r));
            else {
                if (!(e in s)) {
                    var u = null,
                        l = g.getPropertyWriterExpression(o);
                    null != l && (u = t.createEvaluator(l, a)), s[e] = u
                }
                var d = s[e];
                if (d) g.getWriter(d(a))(y.__cloneIfArray(r))
            }
        }, y._toJS = function(e) {
            var t = i.utils.unwrapObservable(e);
            return (Array.isArray(t) || n.CollectionUtils.isPlainObject(t)) && t.ojConvertToJS && (t = i.toJS(t)), t
        }, y.__cloneIfArray = function(e) {
            return Array.isArray(e) && (e = e.slice()), e
        }, y.__removeDotNotationOptions = function(e) {
            for (var t = {}, n = Object.keys(e), r = 0; r < n.length; r++) {
                var i = n[r];
                i.indexOf(".") >= 0 && (t[i] = e[i], delete e[i])
            }
            return t
        }, y._deliverCreateDestroyEventToManagedProps = function(e, t, n, r, i, o, a) {
            for (var s = Object.keys(t), u = 0; u < s.length; u++) {
                var l = s[u],
                    d = t[l],
                    c = e ? d.afterCreate : d.beforeDestroy;
                c && c(l, n, r, i, o, a)
            }
        }, y.__getKnockoutVersion = function() {
            return i.version
        }, y._isNameRegistered = function(e) {
            return y._REGISTERED_NAMES.indexOf(e) >= 0
        }, y._REGISTERED_NAMES = [], y._COMPONENT_OPTION = "component", y._OPTION_MAP = "_ojOptions", C = "cleanExternalData", E = i.utils.domNodeDisposal, D = E[C], E[C] = function(e) {
            var t = o ? o.setInKoCleanExternal : null;
            t && t(e);
            try {
                D(e)
            } finally {
                t && t(null)
            }
        }, y._INSTANCE = y.create(["__ojComponentPrivate", "jqueryUI"]), t.addPostprocessor({
            getBindingAccessors: function(e, r, o, a) {
                if (null == o) return null;
                var s = function(e) {
                    for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (y._isNameRegistered(r)) return r
                    }
                    return null
                }(o);
                null != s && (o = function(e, r, o, a, s) {
                    var u = function(e, n, r, o) {
                            var a = null,
                                s = t.getBindingsString(e, r, o),
                                u = i.jsonExpressionRewriting.parseObjectLiteral(s),
                                l = null;
                            A(u, function(e, t) {
                                return e === n && (l = t, !0)
                            }), null != l && 0 === l.indexOf("{") && (a = i.jsonExpressionRewriting.parseObjectLiteral(l));
                            return {
                                attrList: a,
                                bindingExpr: l
                            }
                        }(e, r, o, a),
                        l = u.attrList;
                    if (null == l) return s;
                    var d = {};
                    return A(l, function(e, t) {
                        d[e] = t
                    }), (s = n.CollectionUtils.copyInto({}, s))[r] = function(e, n, r) {
                        var i = function() {
                            var r = {};
                            return Object.keys(n).forEach(function(i) {
                                var o = n[i],
                                    a = t.createEvaluator(o, e).bind(null, e);
                                Object.defineProperty(r, i, {
                                    get: a,
                                    enumerable: !0
                                })
                            }), Object.defineProperty(r, y._OPTION_MAP, {
                                value: n
                            }), r
                        };
                        return i.toString = function() {
                            return r
                        }, i
                    }(a, d, u.bindingExpr), s
                }(e, s, a, r, o));
                return o
            }
        }), t.addPostprocessor({
            nodeHasBindings: function(e, t) {
                return n.BaseCustomElementBridge ? t || 1 === e.nodeType && s.CustomElementUtils.isElementRegistered(e.nodeName) : t
            },
            getBindingAccessors: function(e, t, n) {
                if (1 === e.nodeType) {
                    var r = e.nodeName;
                    s.CustomElementUtils.isElementRegistered(r) && ((n = n || {})._ojCustomElement = function() {
                        const e = s.CustomElementUtils.isComposite(r),
                            t = s.CustomElementUtils.isVComponent(r);
                        return {
                            skipThrottling: e || t
                        }
                    })
                }
                return n
            }
        }), a.widget("oj._ojDetectCleanData", {
            options: {
                cleanParent: !1
            },
            _destroy: function() {
                var e = i.utils.domNodeDisposal,
                    t = e.cleanExternalData;
                e.cleanExternalData = function() {};
                try {
                    this.options.cleanParent && null != this.element[0].parentNode ? i.cleanNode(this.element[0].parentNode) : i.cleanNode(this.element[0])
                } finally {
                    e.cleanExternalData = t
                }
            }
        }), y.getDefaultInstance().setupManagedAttributes({
            attributes: ["tooltip"],
            init: function(e, t, n, r, i, o, a) {
                return N(e, t, a)
            },
            update: function(e, t, n, r, i, o, a) {
                return N(e, t, a)
            },
            for: "tooltipOptionRenderer"
        }),
        function() {
            for (var e = ["ojChart", "ojDiagram", "ojNBox", "ojPictoChart", "ojSunburst", "ojTagCloud", "ojThematicMap", "ojTreemap", "ojDialGauge", "ojLedGauge", "ojRatingGauge", "ojSparkChart", "ojStatusMeterGauge", "ojGantt"], t = 0; t < e.length; t++) y.getDefaultInstance().setupManagedAttributes({
                for: e[t],
                use: "tooltipOptionRenderer"
            })
        }(), y.getDefaultInstance().setupManagedAttributes({
            attributes: ["pieCenter"],
            init: function(e, t, n, r, i, o, a) {
                return P(e, t, a)
            },
            update: function(e, t, n, r, i, o, a) {
                return P(e, t, a)
            },
            for: "ojChart"
        }), y.getDefaultInstance().setupManagedAttributes({
            attributes: ["optionTemplate"],
            init: function(e, t, n, r, i, o, a) {
                var s = O(e, t, a);
                if (null !== s) return s
            },
            update: function(e, t, n, r, i, o, a) {
                return O(e, t, a)
            },
            for: "ComboboxOptionRenderer"
        }), y.getDefaultInstance().setupManagedAttributes({
            for: "ojCombobox",
            use: "ComboboxOptionRenderer"
        }), y.getDefaultInstance().setupManagedAttributes({
            for: "ojSelect",
            use: "ComboboxOptionRenderer"
        }), y.getDefaultInstance().setupManagedAttributes({
            for: "ojInputSearch",
            use: "ComboboxOptionRenderer"
        }), i.bindingHandlers.ojContextMenu = {
            update: function(e, t, r, s, u) {
                var l, d, c = a(e),
                    p = !1,
                    f = !1,
                    h = null;
                c.off(".ojContextMenu").removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click", b, !0), c[0].removeEventListener("touchstart", x, {
                    passive: !1
                }), clearTimeout(l);
                var m = c.data("_ojLastContextMenu");
                m && D(m.selector, m.id).off(".ojContextMenu");
                var g = !1,
                    v = i.utils.unwrapObservable(t()),
                    y = a.isPlainObject(v) ? e.getAttribute("contextmenu") : null;

                function b(e) {
                    if (p) return e.preventDefault(), e.stopPropagation(), p = !1, !1
                }

                function _(e) {
                    121 === e.keyCode && e.shiftKey && E().is(":visible") && e.preventDefault()
                }

                function C() {
                    var e = n.Components.__GetWidgetConstructor(E()[0], "ojMenu"),
                        t = e && e("instance");
                    if (!t) throw new Error('ojContextMenu binding bound to "' + (y || v) + '", which does not reference a valid JET Menu.');
                    return g || (t.widget().on("ojclose.ojContextMenu", function() {
                        document.removeEventListener("keyup", _)
                    }), g = !0), t
                }

                function E() {
                    return D(v, y)
                }

                function D(e, t) {
                    return t ? a(document.getElementById(t)) : a(e).first()
                }

                function A(e, t, n) {
                    p = n;
                    var r = C();
                    if (p && c.one("touchend.ojContextMenu", function() {
                            r.__contextMenuPressHoldJustEnded(!0), setTimeout(function() {
                                r.__contextMenuPressHoldJustEnded(!1)
                            }, 50)
                        }), "touchstart" === h && "contextmenu" === e.type || "contextmenu" === h && "touchstart" === e.type) return h = null, void clearTimeout(d);
                    if (!e.isDefaultPrevented()) {
                        var i = {
                            launcher: c,
                            initialFocus: "menu",
                            position: {
                                mouse: {
                                    my: "start top",
                                    at: "start bottom",
                                    of: e
                                },
                                touch: {
                                    my: "start>40 center",
                                    at: "start bottom",
                                    of: e,
                                    collision: "flipfit"
                                },
                                keyboard: {
                                    my: "start top",
                                    at: "start bottom",
                                    of: "launcher"
                                }
                            }[t]
                        };
                        r.__openingContextMenu = !0, r.open(e, i), r.__openingContextMenu = !1, r.widget().is(":visible") && (e.preventDefault(), document.addEventListener("keyup", _), "touchstart" !== e.type && "contextmenu" !== e.type || (h = e.type, d = setTimeout(function() {
                            h = null
                        }, 300)))
                    }
                }

                function x(e) {
                    if ("touchstart" === e.type && (e = a.Event(e)), "mousedown" !== e.type || !C().__contextMenuPressHoldJustEnded()) return p = !1, "touchstart" === e.type && (f = !0, l = setTimeout(A.bind(void 0, e, "touch", !0), 750)), !0
                }
                c.data("_ojLastContextMenu", {
                    selector: v,
                    id: y
                }), e.addEventListener("click", b, !0), c[0].addEventListener("touchstart", x, {
                    passive: !1
                }), c.on("mousedown.ojContextMenu keydown.ojContextMenu ", x).on("touchend.ojContextMenu touchcancel.ojContextMenu", function() {
                    return f = !1, clearTimeout(l), !0
                }).on("keydown.ojContextMenu contextmenu.ojContextMenu", function(e) {
                    ("contextmenu" === e.type || 121 === e.keyCode && e.shiftKey) && A(e, f ? "touch" : "keydown" === e.type ? "keyboard" : "mouse", !1);
                    return !0
                }).addClass(o.isTouchSupported() ? "oj-menu-context-menu-launcher" : "")
            }
        };
    const w = function(e, n, o) {
            var a = function() {
                    if (o) return null;
                    return new m(function(t) {
                        for (var n = Object.keys(t), r = 0; r < n.length; r++) {
                            h(n[r])
                        }
                        try {
                            e.setProperties(t)
                        } finally {
                            for (var i = 0; i < n.length; i++) {
                                v(n[i])
                            }
                        }
                    }, t.getGlobalChangeQueue())
                }(),
                u = {},
                l = {},
                d = {},
                c = {};

            function p(e) {
                return e.$current || e.$data
            }

            function f(t, n, r) {
                var i = u[n];
                if (i || (i = function(e) {
                        var t, n = p(e),
                            r = function(r) {
                                t && t(r, n, e)
                            };
                        return r.setListener = function(e) {
                            t = e
                        }, r
                    }(t), u[n] = i, e.addEventListener(n, i)), !(null == r || r instanceof Function)) {
                    var o = s.AttributeUtils.eventTypeToEventListenerProperty(n),
                        a = `Invalid type '${typeof r}' found for attribute '${s.AttributeUtils.propertyNameToAttribute(o)}'. Expected value of type 'function'."`;
                    if (s.CustomElementUtils.isElementRegistered(e.tagName)) {
                        s.CustomElementUtils.getElementState(e).rejectBindingProvider(a)
                    }
                    throw new s.JetElementError(e, a)
                }
                i.setListener(r)
            }

            function h(e) {
                var t = c[e] || 0;
                t += 1, c[e] = t
            }

            function v(e) {
                var t = c[e];
                t ? (t -= 1, c[e] = 0 === t ? null : t) : r.error("Property count undefrlow")
            }
            this.setupPropertyBinding = function(o, u, m, b, _) {
                if (!m) return;
                if (! function(e, t) {
                        var n = e.split("."),
                            r = t;
                        n.shift();
                        for (var i = 0; i < n.length && (r = r.properties); i++) r = r[n[i]];
                        return r
                    }(u, m)) return;
                var C = l[u];
                C && (C.dispose(), l[u] = null);
                var E = d[u];
                if (E && (e.removeEventListener(u + "Changed", E), d[u] = null), m._domListener) {
                    var D = s.AttributeUtils.eventListenerPropertyToEventType(u);
                    f(n, D, null)
                }
                let A, x, j;
                if (void 0 === o) {
                    const e = void 0 === _ ? null : (n.$provided || {})[_];
                    e && (A = () => e())
                } else {
                    const e = s.AttributeUtils.getExpressionInfo(o);
                    x = e.expr, x && (A = t.createEvaluator(x, n), j = e.downstreamOnly)
                }
                if (A) {
                    if (!m.readOnly) {
                        var N = !0;
                        i.ignoreDependencies(function() {
                            l[u] = i.computed(function() {
                                var t, r, o, l = A(n),
                                    d = i.utils.unwrapObservable(l);
                                if (m._domListener) {
                                    var c = s.AttributeUtils.eventListenerPropertyToEventType(u);
                                    f(n, c, d)
                                } else Array.isArray(d) && (d = d.slice()), m._eventListener && d && d instanceof Function && (r = d, o = p(t = n), d = function(e) {
                                    r(e, o, t)
                                }), !N && a ? a.addChange(u, d) : function(t, n) {
                                    h(t);
                                    try {
                                        e.setProperty(t, n)
                                    } catch (t) {
                                        throw s.CustomElementUtils.getElementState(e).rejectBindingProvider(t), t
                                    } finally {
                                        v(t)
                                    }
                                }(u, d), N && b && b(d)
                            })
                        }), N = !1
                    }
                    void 0 !== x && m.writeback && !j && (d[u] = function(o, a, s) {
                        var u = o.split("."),
                            l = u[0],
                            d = function(e) {
                                if (! function(e) {
                                        return c[e]
                                    }(l)) {
                                    var d, p = !1;
                                    i.ignoreDependencies(function() {
                                        for (var r = e.detail.value, o = 1; o < u.length; o++) {
                                            r = r[u[o]]
                                        }
                                        var l = s(n);
                                        if (i.isObservable(l)) i.isWriteableObservable(l) ? (l(y.__cloneIfArray(r)), p = !0) : d = "the observable is not writeable";
                                        else {
                                            var c = g.getPropertyWriterExpression(a);
                                            if (null != c) {
                                                var f = t.createEvaluator(c, n);
                                                g.getWriter(f(n))(y.__cloneIfArray(r)), p = !0
                                            } else d = "the expression is not a valid update target"
                                        }
                                    }), p || d && r.info("The expression '%s' for property '%s' was not updated because %s.", a, o, d)
                                }
                            };
                        return e.addEventListener(l + "Changed", d), d
                    }(u, x, A))
                }
            }, this.teardown = function() {
                var t, n = Object.keys(l);
                for (t = 0; t < n.length; t++) {
                    var r = l[n[t]];
                    r && r.dispose()
                }
                for (l = {}, n = Object.keys(d), t = 0; t < n.length; t++) {
                    var i = n[t].split(".")[0];
                    e.removeEventListener(i + "Changed", d[i])
                }
                for (d = {}, n = Object.keys(u), t = 0; t < n.length; t++) {
                    var o = n[t];
                    e.removeEventListener(o, u[o])
                }
                u = {}, a && a.dispose()
            }
        },
        T = function() {
            this._resolveWhenChildrenBindingsApplied = function(e, t) {
                var n = this._getChildrenBindingsAppliedPromises(e);
                if ("none" === t || 0 === n.length) s.CustomElementUtils.getElementState(e).resolveBindingProvider(this);
                else {
                    for (var r = []; n.length > 0;) {
                        var i = n.shift();
                        ("nearestCustomElement" === t || "immediate" === t && !0 === i.immediate) && r.push(i.promiseCallback)
                    }
                    Promise.all(r).then(function() {
                        this._resolveWhenChildrenBindingsApplied(e, t)
                    }.bind(this))
                }
            }, this._getChildrenBindingsAppliedPromises = function(e, t) {
                return !e._whenChildrenBindingsApplied && t && Object.defineProperty(e, "_whenChildrenBindingsApplied", {
                    value: [],
                    enumerable: !1
                }), e._whenChildrenBindingsApplied || []
            }, this.__RegisterBindingAppliedPromiseForChildren = function(e, t) {
                var n = null;
                if (e) {
                    var r = new Promise(function(e) {
                        n = e
                    });
                    this._getChildrenBindingsAppliedPromises(e, !0), e._whenChildrenBindingsApplied.push({
                        immediate: t,
                        promiseCallback: r
                    })
                }
                return n
            }, this.__NotifyBindingsApplied = function(e) {
                var t = s.CustomElementUtils.getElementState(e).getTrackChildrenOption();
                this._resolveWhenChildrenBindingsApplied(e, t)
            }, this.__NotifyBindingsDisposed = function(e) {
                s.CustomElementUtils.getElementState(e).disposeBindingProvider(e)
            }, this.__GetThrottlePromise = function() {
                return t.getGlobalChangeQueue().getThrottlePromise()
            }, this.__ExtendBindingContext = function(e, n, r, i, o) {
                return t.extendBindingContext(e, n, r, i, o)
            }, this.__ContextFor = function(e) {
                return e.__ojBindingContext ? e.__ojBindingContext : i.contextFor(e)
            }, this.__UnwrapObservable = function(e) {
                return i.utils.unwrapObservable(e)
            }, this.__IsObservable = function(e) {
                return i.isObservable(e)
            }, this.__KoComputed = function(e, t, n) {
                return i.computed(e, t, n)
            }, this.__KoIsInitial = function() {
                return i.computedContext.isInitial()
            }, this.__CleanNode = function(e) {
                i.cleanNode(e)
            }
        };

    function I(e, t) {
        var n = {};
        return function(r) {
            var i = r.parentElement,
                o = e.createChildContext(r.data, null, function(e) {
                    e.$key = r.key, e.$metadata = r.metadata, e.$headerContext = r
                });
            return B(r, t, i, o, n), null
        }
    }

    function k(e, t) {
        var n = {};
        return function(r) {
            var i = r.parentElement,
                o = e.createChildContext(r.data, null, function(e) {
                    e.$keys = r.keys, e.$metadata = r.metadata, e.$cellContext = r, e.$cell = r.cell
                });
            return B(r, t, i, o, n), null
        }
    }

    function B(e, t, n, r, o) {
        var s = function(e, t) {
            var n = t[e];
            null == n && (n = i.utils.parseHtmlFragment(document.getElementById(e).innerHTML, document), t[e] = n);
            return n.map(function(e) {
                return e.cloneNode(!0)
            })
        }(function(e, t) {
            if ("function" == typeof e) return e(t);
            return e
        }(t, e), o);
        i.virtualElements.setDomNodeChildren(n, s), i.applyBindingsToDescendants(r, n);
        for (var u = 0; u < n.childNodes.length; u++)
            if (1 === n.childNodes[u].nodeType) {
                a(n.childNodes[u])._ojDetectCleanData({
                    cleanParent: !0
                });
                break
            }
    }

    function L(e, t, n) {
        return "template" === e ? {
            _templateFunction: j(n, t)
        } : null
    }
    T.getInstance = function() {
            return T._instance
        }, T._instance = new T, oj._registerLegacyNamespaceProp("_KnockoutBindingProvider", T),
        function() {
            i.bindingHandlers._ojCustomElement = {
                after: ["attr"],
                init: function(o, a, l, d, c) {
                    var p, f;
                    const h = s.CustomElementUtils.getElementProperties(o),
                        {
                            provide: m,
                            consume: g,
                            cleanup: v
                        } = function(e, i) {
                            const o = Object.create(null),
                                a = Object.create(null),
                                l = Object.create(null),
                                d = u.getPropagationMetadataViaCache(e.localName, i);
                            if (null !== d)
                                for (const [u, [c, p]] of d) {
                                    if (void 0 !== c) {
                                        const a = s.AttributeUtils.propertyNameToAttribute(u),
                                            d = e.hasAttribute(a),
                                            p = [],
                                            f = [];
                                        if (c.forEach(e => {
                                                const t = e.name;
                                                if (void 0 === t) throw new Error("name attribute for the binding/provide metadata is required!");
                                                const r = e.default,
                                                    i = n(e.transform, r);
                                                p.push(i), f.push({
                                                    name: t,
                                                    obs: i
                                                })
                                            }), f.length > 0) {
                                            const n = r(p);
                                            o[u] = {
                                                set: n,
                                                vars: f
                                            };
                                            const c = t(n),
                                                h = u + "Changed";
                                            if (e.addEventListener(h, c), l[h] = c, d) {
                                                const t = e.getAttribute(a);
                                                s.AttributeUtils.getExpressionInfo(t).expr || n(s.AttributeUtils.attributeToPropertyValue(e, a, t, i[u]))
                                            }
                                        }
                                    }
                                    if (void 0 !== p) {
                                        const e = p.name;
                                        if (void 0 === e) throw new Error("'name' property on the binding/consume metadata is required!");
                                        a[u] = e
                                    }
                                }
                            return {
                                provide: o,
                                consume: a,
                                cleanup: function() {
                                    Object.keys(l).forEach(t => e.removeEventListener(t, l[t]))
                                }
                            }
                        }(o, h);

                    function y() {
                        p && (p.teardown(), p = null), f && (o.removeEventListener(e, f), f = null), T.getInstance().__NotifyBindingsDisposed(o)
                    }
                    i.computed(function() {
                        var t = a().skipThrottling;
                        const n = i.computedContext.isInitial();
                        n || y(),
                            function(t, n) {
                                p = new w(o, c, t);
                                var r = {
                                    _domListener: !0
                                };
                                s.CustomElementUtils.getElementState(o).beginApplyingBindings();
                                for (var i = o.attributes, a = 0; a < i.length; a++) {
                                    var u = i[a],
                                        l = s.AttributeUtils.attributeToPropertyName(u.nodeName);
                                    let e, t;
                                    const o = s.AttributeUtils.isEventListenerProperty(l) && !h[l];
                                    if (!o) {
                                        t = l.split(".")[0];
                                        const r = m[t];
                                        e = n && r ? r.set : void 0
                                    }
                                    p.setupPropertyBinding(u.value, l, o ? r : h[t], e)
                                }
                                Object.keys(g).forEach(e => {
                                    if (!o.hasAttribute(s.AttributeUtils.propertyNameToAttribute(e))) {
                                        const t = m[e],
                                            r = n && t ? t.set : void 0;
                                        p.setupPropertyBinding(void 0, e, h[e], r, g[e])
                                    }
                                }), f = function(e) {
                                    var t = e.detail,
                                        n = t.attribute,
                                        i = s.AttributeUtils.attributeToPropertyName(n),
                                        o = s.AttributeUtils.isEventListenerProperty(i) && !h[i] ? r : h[i.split(".")[0]];
                                    p.setupPropertyBinding(t.value, i, o, void 0, g[i])
                                }, o.addEventListener(e, f)
                            }(t, n)
                    }, null, {
                        disposeWhenNodeIsRemoved: o
                    }), i.utils.domNodeDisposal.addDisposeCallback(o, function() {
                        y(), v()
                    });
                    const b = function(e, t) {
                        let n = e;
                        const r = Object.keys(t);
                        if (r.length > 0) {
                            const i = e.$provided,
                                o = void 0 === i ? {} : Object.assign({}, i);
                            r.forEach(e => {
                                t[e].vars.forEach(e => {
                                    o[e.name] = e.obs
                                })
                            }), n = e.extend({
                                $provided: o
                            })
                        }
                        return n
                    }(c, m);
                    return i.applyBindingsToDescendants(b, o), T.getInstance().__NotifyBindingsApplied(o), {
                        controlsDescendantBindings: !0
                    }
                }
            };
            const e = "attribute-changed";

            function t(e) {
                return t => e(t.detail.value)
            }

            function n(e, t) {
                const n = i.observable(t);
                return e ? i.pureComputed({
                    write: t => n(e.hasOwnProperty(t) ? e[t] : t),
                    read: () => n()
                }) : n
            }

            function r(e) {
                return t => e.forEach(e => e(t))
            }
        }(), y.getDefaultInstance().setupManagedAttributes({
            attributes: ["header", "cell"],
            init: function(e, t, n, r, i, o, a) {
                if ("header" === e) {
                    var s = t.row;
                    if (null != s) {
                        var u = s.template;
                        null != u && (s.renderer = I(a, u))
                    }
                    var l = t.column;
                    if (null != l) {
                        var d = l.template;
                        null != d && (l.renderer = I(a, d))
                    }
                    var c = t.rowEnd;
                    if (null != c) {
                        var p = c.template;
                        null != p && (c.renderer = I(a, p))
                    }
                    var f = t.columnEnd;
                    if (null != f) {
                        var h = f.template;
                        null != h && (f.renderer = I(a, h))
                    }
                    return {
                        header: t
                    }
                }
                if ("cell" === e) {
                    var m = t.template;
                    return null != m && (t.renderer = k(a, m)), {
                        cell: t
                    }
                }
            },
            update: function(e, t, n, r, i, o, a) {
                if ("header" === e) {
                    var s = t.row;
                    if (null != s) {
                        var u = s.template;
                        null != u && (s.renderer = I(a, u))
                    }
                    var l = t.column;
                    if (null != l) {
                        var d = l.template;
                        null != d && (l.renderer = I(a, d))
                    }
                    var c = t.rowEnd;
                    if (null != c) {
                        var p = c.template;
                        null != p && (c.renderer = I(a, p))
                    }
                    var f = t.columnEnd;
                    if (null != f) {
                        var h = f.template;
                        null != h && (f.renderer = I(a, h))
                    }
                    return {
                        header: t
                    }
                }
                if ("cell" === e) {
                    var m = t.template;
                    return null != m && (t.renderer = k(a, m)), {
                        cell: t
                    }
                }
                return null
            },
            for: "ojDataGrid"
        }), y.getDefaultInstance().setupManagedAttributes({
            attributes: ["template"],
            init: function(e, t, n, r, i, o, a) {
                return L(e, t, a)
            },
            update: function(e, t, n, r, i, o, a) {
                return L(e, t, a)
            },
            for: "ojDiagram"
        }),
        function() {
            function e(e, t, i, o) {
                var a = r(e.getAttribute(i), o);
                if (a) return n(e, t, "ko " + t + ":" + a)
            }

            function n(e, t, n) {
                for (var r = e.tagName.toLowerCase(), i = r, o = e.attributes, a = 0; a < o.length; a++) {
                    var s = o[a];
                    i += " ", i += s.name, i += "='", i += s.value, i += "'"
                }
                var u = e.parentNode,
                    l = document.createComment(i),
                    d = document.createComment("/" + r);
                u.insertBefore(l, e);
                var c = document.createComment(n),
                    p = document.createComment("/ko");
                u.insertBefore(c, e);
                var f, h = [l, c];
                if ("if" === t)
                    for (; e.childNodes.length > 0;) f = e.childNodes[0], u.insertBefore(f, e), h.push(f);
                else if ("_ojBindForEach_" === t)
                    for (; e.childNodes.length > 0;) f = e.childNodes[0], u.insertBefore(f, e), h.push(f);
                return u.insertBefore(p, e), h.push(p), u.replaceChild(d, e), h.push(d), h
            }

            function r(e, t) {
                if (null != e) {
                    var n = s.AttributeUtils.getExpressionInfo(e).expr;
                    return null == n && (n = t ? "'" + e + "'" : e), n
                }
                return null
            }

            function o(e, n, r, o) {
                var a, u = s.AttributeUtils.getExpressionInfo(r).expr;
                if (null == u) {
                    var l = s.AttributeUtils.coerceValue(n, "class", r, "any");
                    a = function() {
                        return Array.isArray(l) ? l.join(" ") : l
                    }
                } else {
                    var d = t.createEvaluator(u, o).bind(null, o);
                    a = i.pureComputed(function() {
                        var e = i.unwrap(d());
                        return Array.isArray(e) ? e.join(" ") : e
                    })
                }
                e.css = a
            }

            function a(e, n, r, i, o) {
                var a = s.AttributeUtils.getExpressionInfo(r).expr;
                return null == a ? function() {
                    return "object" === o ? s.AttributeUtils.coerceValue(e, n, r, o) : r
                } : t.createEvaluator(a, i).bind(null, i)
            }

            function u(e) {
                return function() {
                    for (var t = {}, n = Object.keys(e), r = 0; r < n.length; r++) {
                        var i = n[r];
                        t[i] = e[i]()
                    }
                    return t
                }
            }

            function l(e) {
                if (1 !== e.nodeType) return {};
                if (!e._ojbindingsobj) {
                    for (var t = {}, n = [], r = [], i = [], o = e.attributes, a = 0; a < o.length; a++) {
                        var u = o[a],
                            l = d(u.name);
                        l && ("style" === l ? t._STYLE_BIND = l : "style." === l.substring(0, 6) ? r.push(l) : n.push(l)), s.CustomElementUtils.isElementRegistered(e.nodeName) || "on-" !== u.name.substring(0, 3) || i.push(u)
                    }
                    if (r.length) {
                        if (t._STYLE_BIND) throw new Error("Cannot have both style and style.* data bound attributes on " + e.tagName + " with id " + e.id);
                        t._STYLE_BIND = r
                    }
                    n.length && (t._ATTR_BIND = n), i.length && (t._EVENT_BIND = i), Object.defineProperty(e, "_ojbindingsobj", {
                        value: t
                    })
                }
                return e._ojbindingsobj
            }

            function d(e) {
                return e && ":" === e.charAt(0) ? e.slice(1) : null
            }

            function c(e) {
                return ":" + e
            }
            t.registerPreprocessor("oj-bind-text", function(t) {
                return e(t, "text", "value", !0)
            }), t.registerPreprocessor("oj-bind-if", function(t) {
                return e(t, "if", "test", !1)
            }), t.registerPreprocessor("oj-bind-for-each", function(e) {
                var t = e.getAttribute("data"),
                    i = s.AttributeUtils.getExpressionInfo(t).expr;
                if (!i) try {
                    var o = JSON.parse(t);
                    if (!Array.isArray(o)) throw new Error("got value " + t);
                    i = t
                } catch (e) {
                    throw new Error("The value on the oj-bind-for-each data attribute should be either a JSON array or an expression : " + e)
                }
                var a = r(e.getAttribute("as"), !0);
                if (!i) return;
                var u = "ko _ojBindForEach_:{data:" + i;
                return n(e, "_ojBindForEach_", u += a ? ",as:" + a + "}" : "}")
            }), t.addPostprocessor({
                nodeHasBindings: function(e, t) {
                    var n = l(e);
                    return t || null != n._ATTR_BIND || null != n._STYLE_BIND || null != n._EVENT_BIND
                },
                getBindingAccessors: function(e, t, n) {
                    if (1 === e.nodeType) {
                        n = n || {};
                        var r, d, p = l(e),
                            f = p._STYLE_BIND;
                        if (f) {
                            if (n.style) throw new Error("Cannot have both style data-bind and JET style binding on " + e.tagName + " with id " + e.id);
                            if ("style" === f) n[f] = a(e, f, e.getAttribute(c(f)), t, "object");
                            else {
                                var h = {};
                                for (r = 0; r < f.length; r++) {
                                    d = f[r], h[s.AttributeUtils.attributeToPropertyName(d.substring(6))] = a(e, d, e.getAttribute(c(d)), t, "string")
                                }
                                n.style = u(h)
                            }
                        }
                        var m = p._ATTR_BIND;
                        if (m) {
                            if (n.attr) throw new Error("Cannot have both attr data-bind and JET attribute binding on " + e.tagName + " with id " + e.id);
                            var g = {};
                            for (r = 0; r < m.length; r++) "class" === (d = m[r]) ? o(n, e, e.getAttribute(c(d)), t) : g[d] = a(e, d, e.getAttribute(c(d)), t, "string");
                            n.attr = u(g)
                        }
                        var v = p._EVENT_BIND;
                        if (v) {
                            var y = new w(e, t, !0);
                            for (r = 0; r < v.length; r++) {
                                var b = v[r],
                                    _ = s.AttributeUtils.attributeToPropertyName(b.nodeName);
                                y.setupPropertyBinding(b.value, _, {
                                    _domListener: !0
                                })
                            }
                            i.utils.domNodeDisposal.addDisposeCallback(e, function() {
                                y && (y.teardown(), y = null)
                            })
                        }
                    }
                    return n
                }
            })
        }(),
        /**
         * @license
         * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
         * Licensed under The Universal Permissive License (UPL), Version 1.0
         * as shown at https://oss.oracle.com/licenses/upl/
         *
         * @license
         * Knockout Fast Foreach v0.6.0 (2016-07-28T11:02:54.197Z)
         * By: Brian M Hunt (C) 2015 | License: MIT
         *
         * Adds `fastForEach` to `ko.bindingHandlers`.
         *
         * Modification notice: The code is obtained from https://github.com/brianmhunt/knockout-fast-foreach
         * and modified by Oracle JET team to be included into Oracle JET project.
         * @ignore
         */
        function() {
            var e = document && "function" == typeof document.createDocumentFragment;

            function t(e, t, n) {
                return {
                    status: "added",
                    value: e,
                    index: t,
                    key: n
                }
            }

            function n(e) {
                return {
                    status: "deleted",
                    value: {},
                    index: e
                }
            }

            function o(e, t) {
                var n;
                if (e) {
                    var r = e.length;
                    n = new Array(r);
                    for (var i = 0; i < r; i++) n[i] = t(e[i], i, e)
                }
                return n
            }
            var a = function(e, t, n) {
                if (Array.isArray(t)) {
                    var r = document.createDocumentFragment();
                    for (let e = 0, n = t.length; e !== n; ++e) r.appendChild(t[e]);
                    if (i.virtualElements.insertAfter(e, r, n), p.Components)
                        for (let e = 0, n = t.length; e !== n; ++e) p.Components.subtreeAttached(t[e])
                } else i.virtualElements.insertAfter(e, t, n), p.Components && p.Components.subtreeAttached(t)
            };

            function u(e, n, r) {
                this.element = n.element || e, i.applyBindingsToDescendants(r, this.element),
                    function(e) {
                        for (var t, n, r = i.virtualElements.childNodes(e), o = 0; o < r.length; o++) {
                            var a = r[o];
                            if (1 === a.nodeType && "template" === a.nodeName.toLowerCase()) {
                                var u = s.CustomElementUtils.getSlotAssignment(a);
                                if (t || u && "" !== u) {
                                    if (n || "noData" !== u) {
                                        var l;
                                        switch (u) {
                                            case "":
                                                l = "Multiple default templates found: oj-bind-for-each requires a single default template element as its direct child";
                                                break;
                                            case "noData":
                                                l = "Multiple noData templates found: oj-bind-for-each requires a single noData template element as its direct child";
                                                break;
                                            default:
                                                l = "Unknown template slot detected - " + u + ": oj-bind-for-each supports a single default template and a single noData template"
                                        }
                                        throw new Error(l)
                                    }
                                    n = a
                                } else t = a
                            }
                        }
                        if (!t) throw new Error("Default template not found: oj-bind-for-each requires a single default template element as its direct child");
                        e._templateNode = t, e._noDataTemplateNode = n
                    }(this.element), this.element._templateNode.__ojBindingContext = i.contextFor(this.element._templateNode), this.data = n.data, this.as = n.as, this.changeQueue = [], this.firstLastNodesList = [], this.indexesToDelete = [], this.rendering_queued = !1, this.pendingDeletes = [], this.headDataPromise = null, this.tailDataPromise = null, i.virtualElements.emptyNode(this.element), this._initChildrenBindingsAppliedPromise();
                var a = i.unwrap(this.data);
                a.fetchFirst ? (this.currentDataProvider = a, this.fetchData()) : this.onArrayChange(o(a, t)), this.addSubscriptions()
            }
            u.PENDING_DELETE_INDEX_KEY = "_ko_ffe_pending_delete_index", u.prototype.addSubscriptions = function() {
                var e = i.isObservable(this.data);
                this.currentDataProvider ? (this.dataMutateHandler = this.handleDataMutateEvent.bind(this), this.dataRefreshHandler = this.handleDataRefreshEvent.bind(this), this.currentDataProvider.addEventListener("mutate", this.dataMutateHandler), this.currentDataProvider.addEventListener("refresh", this.dataRefreshHandler), e && (this.changeSubs = this.data.subscribe(this.onDataChange, this, "change"))) : e && (this.data.indexOf || (this.data = this.data.extend({
                    trackArrayChanges: !0
                })), this.changeArraySubs = this.data.subscribe(this.onArrayDataChange, this, "arrayChange"), this.changeSubs = this.data.subscribe(this.onDataChange, this, "change"))
            }, u.prototype.removeSubscriptions = function() {
                this.changeSubs && this.changeSubs.dispose(), this.changeArraySubs && this.changeArraySubs.dispose(), this.currentDataProvider && (this.currentDataProvider.removeEventListener("mutate", this.dataMutateHandler), this.currentDataProvider.removeEventListener("refresh", this.dataRefreshHandler))
            }, u.prototype.onArrayDataChange = function(e) {
                this.arrayChangeSet = e
            }, u.prototype.onDataChange = function(e) {
                this.arrayChangeSet ? (this.onArrayChange(this.arrayChangeSet), this.arrayChangeSet = null) : (this.setData({
                    data: this.data,
                    dataProvider: e.fetchFirst ? e : null
                }), this.recreateContent(e))
            }, u.prototype.recreateContent = function(e) {
                this.changeQueue = [], this.firstLastNodesList = [], this.indexesToDelete = [], this.rendering_queued = !1, this.pendingDeletes = [], this._noDataNodes = null, i.virtualElements.emptyNode(this.element), e.fetchFirst ? this.fetchData() : this.onArrayChange(o(e, t))
            }, u.prototype.registerBusyState = function() {
                var e = this.element.parentNode;
                return d.getContext(e).getBusyContext().addBusyState({
                    description: "oj-bind-for-each binding on a node with the Id " + e.id + "is loading data."
                })
            }, u.prototype._initChildrenBindingsAppliedPromise = function() {
                var e = this.element._templateNode.__ojBindingContext.$current,
                    t = e ? {
                        _nearestCustomParent: e._nearestCustomParent,
                        _immediate: e._immediate
                    } : null,
                    n = function(e, t) {
                        for (var n = e.parentNode; n && !s.ElementUtils.isValidCustomElementName(n.localName);) n = n.parentNode;
                        return n || (n = t ? t._nearestCustomParent : null), n
                    }(this.element, t),
                    r = function(e, t, n) {
                        var r = !1,
                            i = !!n;
                        return e.parentNode === t ? r = !0 : i && !e.parentNode.parentNode && (r = n._immediate), r
                    }(this.element, n, t);
                this.trackingContext = {
                    _nearestCustomParent: n,
                    _immediate: r
                }, this._childrenBindingsPromiseResolver = T.getInstance().__RegisterBindingAppliedPromiseForChildren(n, r)
            }, u.prototype._resolveChildrenBindingsAppliedPromise = function() {
                this._childrenBindingsPromiseResolver && (this._childrenBindingsPromiseResolver(), this._childrenBindingsPromiseResolver = null)
            }, u.prototype.resetChainIfCompleted = function(e) {
                e === this.tailDataPromise && (this.headDataPromise = null, this.tailDataPromise = null)
            }, u.prototype.promiseRejectHelper = function(e, t, n) {
                if (t(), this.resetChainIfCompleted(n), !e._CAUGHT_PROMISE_REJECTION && "oj-bind-for-each: abandoned promise" !== e.message) {
                    if (e instanceof Error) throw e._CAUGHT_PROMISE_REJECTION = !0, e;
                    throw new Error(e)
                }
                r.info(e)
            }, u.prototype.fetchData = function() {
                var e, n, r, i = this.registerBusyState(),
                    o = this.currentDataProvider.fetchFirst({
                        size: -1
                    })[Symbol.asyncIterator](),
                    a = function(s, u, l) {
                        return function(d) {
                            if (l.headDataPromise === r) {
                                for (var c = d.value, p = s.length, f = 0; f < c.metadata.length && f < c.data.length; f++) s.push(t(c.data[f], p, c.metadata[f].key)), p += 1;
                                d.done ? (u.call(l, s), i(), e(), l.resetChainIfCompleted(r)) : o.next().then(a(s, u, l), function(e) {
                                    i(), n(e), l.resetChainIfCompleted(r)
                                })
                            } else i(), n(new Error("oj-bind-for-each: abandoned promise"))
                        }
                    };
                (r = new Promise(function(t, s) {
                    e = t, n = s, o.next().then(a([], this.onArrayChange, this), function(e) {
                        i(), n(e), this.resetChainIfCompleted(r)
                    }.bind(this))
                }.bind(this))).catch(function(e) {
                    if ("oj-bind-for-each: abandoned promise" !== e.message) {
                        if (e instanceof Error) throw e._CAUGHT_PROMISE_REJECTION = !0, e;
                        throw new Error(e)
                    }
                }), this.headDataPromise = r, this.tailDataPromise = r
            }, u.prototype.getIndexesForEvent = function(e, t) {
                var n, r = [];
                if (Array.isArray(e))
                    for (n = 0; n < e.length; n++) r.push(e[n]);
                else if (t) {
                    var i = Array.isArray(t) ? t.length : t.size,
                        o = new l(t),
                        a = new Map,
                        s = 0;
                    for (n = 0; n < this.firstLastNodesList.length && s < i; n++) {
                        var u = this.firstLastNodesList[n].key,
                            d = o.get(u);
                        d !== o.NOT_A_KEY && (a.set(d, n), s += 1)
                    }
                    t.forEach(function(e) {
                        r.push(a.get(e))
                    })
                }
                return r
            }, u.prototype.handleDataMutateEvent = function(e) {
                var t, n, r = {},
                    i = this;
                this.tailDataPromise ? (t = this.registerBusyState(), (n = this.tailDataPromise.then(function() {
                    return t(), i.getDataMutationHelper(e, r)
                })).catch(function(e) {
                    i.promiseRejectHelper(e, t, n)
                })) : (n = this.getDataMutationHelper(e, r), this.headDataPromise = n), this.tailDataPromise = n, r.head = this.headDataPromise, r.current = n
            }, u.prototype.getDataMutationHelper = function(e, r) {
                var i, o, a = e.detail.add,
                    s = e.detail.remove,
                    u = e.detail.update,
                    l = a && a.data,
                    d = u && u.data,
                    c = () => {
                        if (d) {
                            var e = 0,
                                r = [],
                                i = this.getIndexesForEvent(u.indexes, u.keys);
                            u.keys.forEach(function(o) {
                                if (void 0 !== i[e]) {
                                    var a = d[e];
                                    r.push(n(i[e])), r.push(t(a, i[e], o))
                                }
                                e += 1
                            }), this.onArrayChange(r)
                        }
                    },
                    p = () => {
                        if (s) {
                            var e = this.getIndexesForEvent(s.indexes, s.keys);
                            e = e.filter(function(e) {
                                return void 0 !== e
                            }), this.onArrayChange(e.map(n))
                        }
                    },
                    f = () => {
                        if (l) {
                            var e = this.getIndexesForEvent(a.indexes, a.addBeforeKeys ? a.addBeforeKeys : a.afterKeys),
                                n = [],
                                r = 0;
                            a.keys.forEach(function(i) {
                                var o = l[r];
                                n.push(t(o, function(t) {
                                    var n = e.length > t ? e[t] : this.firstLastNodesList.length + t;
                                    return void 0 === n ? this.firstLastNodesList.length : n
                                }(r), i)), r += 1
                            }, this), this.onArrayChange(n)
                        }
                    };
                if (u && !Array.isArray(d) || a && !Array.isArray(l)) {
                    var h = u && !Array.isArray(d) ? this.currentDataProvider.fetchByKeys({
                            keys: u.keys
                        }) : Promise.resolve(),
                        m = a && !Array.isArray(l) ? this.currentDataProvider.fetchByKeys({
                            keys: a.keys
                        }) : Promise.resolve();
                    i = this.registerBusyState(), (o = Promise.all([h, m]).then(e => {
                        if (r.head !== this.headDataPromise) throw i(), new Error("oj-bind-for-each: abandoned promise");
                        var t = e[0];
                        t && t.results.size > 0 && (d = [...u.keys].map(e => t.results.get(e).data)), c(), p();
                        var n = e[1];
                        n && n.results.size > 0 && (l = [...a.keys].map(e => n.results.get(e).data)), f(), i(), this.resetChainIfCompleted(r.current)
                    })).catch(e => {
                        this.promiseRejectHelper(e, i, r.current)
                    })
                } else c(), p(), f();
                return o
            }, u.prototype.handleDataRefreshEvent = function() {
                this.recreateContent(this.currentDataProvider)
            }, u.prototype._addNoData = function() {
                0 === this.firstLastNodesList.length && this.element._noDataTemplateNode && (this._noDataNodes = c.execute(this.element, this.element._noDataTemplateNode, {}, null), this.insertAllAfter(this._noDataNodes))
            }, u.prototype._removeNoData = function() {
                this._noDataNodes && (this._noDataNodes.forEach(e => {
                    c.clean(e), e.parentNode.removeChild(e)
                }), this._noDataNodes = null)
            }, u.prototype.onArrayChange = function(e) {
                this._removeNoData();
                for (var t = {
                        added: [],
                        deleted: []
                    }, n = 0, r = e.length; n < r; n++)
                    if (t.added.length && "added" === e[n].status) {
                        var i = t.added[t.added.length - 1];
                        (i.isBatch ? i.index + i.values.length - 1 : i.index) + 1 === e[n].index ? (i.isBatch || (i = {
                            isBatch: !0,
                            status: "added",
                            index: i.index,
                            values: [i.value],
                            keys: [i.key]
                        }, t.added.splice(t.added.length - 1, 1, i)), i.values.push(e[n].value), i.keys.push(e[n].key)) : t[e[n].status].push(e[n])
                    } else t[e[n].status].push(e[n]);
                t.deleted.length > 0 && (this.changeQueue.push.apply(this.changeQueue, t.deleted), this.changeQueue.push({
                    status: "clearDeletedIndexes"
                })), this.changeQueue.push.apply(this.changeQueue, t.added), this.changeQueue.length > 0 && !this.rendering_queued && (this.rendering_queued = !0, this.processQueue()), this._addNoData(), this._resolveChildrenBindingsAppliedPromise()
            }, u.prototype.processQueue = function() {
                var e = this,
                    t = 9007199254740991;
                i.utils.arrayForEach(this.changeQueue, function(n) {
                    "number" == typeof n.index && (t = Math.min(t, n.index)), e[n.status](n)
                }), this.flushPendingDeletes(), this.rendering_queued = !1, this.updateIndexes(t), this.changeQueue = []
            }, u.prototype.added = function(e) {
                for (var t = e.index, n = e.isBatch ? e.values : [e.value], r = e.isBatch ? e.keys : [e.key], o = this.getLastNodeBeforeIndex(t), a = [], s = 0, u = n.length; s < u; ++s) {
                    var l, d, p = this.getPendingDeleteFor(n[s]);
                    p && p.nodesets.length ? (l = p.nodesets.pop(), d = p.currentChildContext) : (d = {
                        data: n[s],
                        index: t + s,
                        observableIndex: i.observable()
                    }, Object.defineProperties(d, {
                        _nearestCustomParent: {
                            value: this.trackingContext._nearestCustomParent,
                            enumerable: !1
                        },
                        _immediate: {
                            value: this.trackingContext._immediate,
                            enumerable: !1
                        }
                    }), l = c.execute(this.element, this.element._templateNode, d, this.as)), a.push.apply(a, Array.prototype.slice.call(l)), this.firstLastNodesList.splice(t + s, 0, {
                        first: l[0],
                        last: l[l.length - 1],
                        key: r ? r[s] : null,
                        currentChildContext: d
                    })
                }
                this.insertAllAfter(a, o)
            }, u.prototype.getNodesForIndex = function(e) {
                var t = [],
                    n = this.firstLastNodesList[e].first,
                    r = this.firstLastNodesList[e].last;
                for (t.push(n); n && n !== r;) n = n.nextSibling, t.push(n);
                return t
            }, u.prototype.getLastNodeBeforeIndex = function(e) {
                return e < 1 || e - 1 >= this.firstLastNodesList.length ? null : this.firstLastNodesList[e - 1].last
            }, u.prototype.insertAllAfter = function(t, n) {
                var r, i = this.element;
                if (1 === t.length) a(i, t[0], n);
                else if (e) a(i, t, n);
                else
                    for (r = t.length - 1; r >= 0; --r) {
                        var o = t[r];
                        if (!o) break;
                        a(i, o, n)
                    }
                return t
            }, u.prototype.shouldDelayDeletion = function(e) {
                return e && ("object" == typeof e || "function" == typeof e)
            }, u.prototype.getPendingDeleteFor = function(e) {
                var t = e && e._ko_ffe_pending_delete_index;
                return void 0 === t ? null : this.pendingDeletes[t]
            }, u.prototype.getOrCreatePendingDeleteFor = function(e) {
                var t = this.getPendingDeleteFor(e);
                return t || (t = {
                    data: e,
                    nodesets: []
                }, e._ko_ffe_pending_delete_index = this.pendingDeletes.length, this.pendingDeletes.push(t), t)
            }, u.prototype.deleted = function(e) {
                if (this.shouldDelayDeletion(e.value)) {
                    var t = this.getOrCreatePendingDeleteFor(e.value);
                    t.nodesets.push(this.getNodesForIndex(e.index)), t.currentChildContext = this.firstLastNodesList[e.index].currentChildContext
                } else this.removeNodes(this.getNodesForIndex(e.index));
                this.indexesToDelete.push(e.index)
            }, u.prototype.removeNodes = function(e) {
                if (e.length) {
                    ! function() {
                        for (var t = e[0].parentNode, n = e.length - 1; n >= 0; --n) c.clean(e[n]), t.removeChild(e[n])
                    }()
                }
            }, u.prototype.flushPendingDeletes = function() {
                for (var e = 0, t = this.pendingDeletes.length; e !== t; ++e) {
                    for (var n = this.pendingDeletes[e]; n.nodesets.length;) this.removeNodes(n.nodesets.pop());
                    n.data && void 0 !== n.data._ko_ffe_pending_delete_index && delete n.data._ko_ffe_pending_delete_index
                }
                this.pendingDeletes = []
            }, u.prototype.clearDeletedIndexes = function() {
                for (var e = this.indexesToDelete.length - 1; e >= 0; --e) this.firstLastNodesList.splice(this.indexesToDelete[e], 1);
                this.indexesToDelete = []
            }, u.prototype.updateIndexes = function(e) {
                for (var t = e, n = this.firstLastNodesList.length; t < n; ++t) {
                    var r = this.firstLastNodesList[t].currentChildContext;
                    r && r.observableIndex && r.observableIndex(t)
                }
            }, u.prototype.getData = function() {
                return {
                    data: this.data,
                    dataProvider: this.currentDataProvider
                }
            }, u.prototype.setData = function(e) {
                this.removeSubscriptions(), this.data = e.data, this.currentDataProvider = e.dataProvider, this.addSubscriptions()
            }, i.bindingHandlers._ojBindForEach_ = {
                init: function(e, t, n, r, o) {
                    var a, s;
                    return i.computed(function() {
                        if (s = t(), a) {
                            var e, n, r = s.data,
                                o = a.getData().data;
                            if (i.ignoreDependencies(function() {
                                    e = i.unwrap(o), n = i.unwrap(r)
                                }), a.setData({
                                    data: r,
                                    dataProvider: n.fetchFirst ? n : null
                                }), Array.isArray(e) && Array.isArray(n)) {
                                var u = i.utils.compareArrays(e, n, {
                                    sparse: !0,
                                    dontLimitMoves: !0
                                });
                                a.onArrayChange(u)
                            } else a.recreateContent(n)
                        }
                    }, null, {
                        disposeWhenNodeIsRemoved: e
                    }), a = new u(e, s, o), i.utils.domNodeDisposal.addDisposeCallback(e, function() {
                        a.removeSubscriptions()
                    }), {
                        controlsDescendantBindings: !0
                    }
                }
            }, i.virtualElements.allowedBindings._ojBindForEach_ = !0
        }();
    const M = {};

    function S(e, t, n) {
        if ("item" === e) {
            var r = t.template;
            return null != r && (t.renderer = function(e, t) {
                return function(n) {
                    var r = n.parentElement,
                        o = e.createChildContext(n.data, null, function(e) {
                            e.$itemContext = n
                        });
                    return i.renderTemplate(t, o, {
                        afterRender: function(e) {
                            a(e)._ojDetectCleanData()
                        }
                    }, r, "replaceNode"), null
                }
            }(n, r)), {
                item: t
            }
        }
        return null
    }

    function R(e, t, n) {
        return "center" === e && t.template && (t._renderer = x(n, t.template)), {
            center: t
        }
    }

    function U(e, t, n) {
        return "rootNodeContent" === e && t.template && (t._renderer = x(n, t.template)), {
            rootNodeContent: t
        }
    }
    n._registerLegacyNamespaceProp("koStringTemplateEngine", M), M.install = function() {
        var e = i;
        if (!e.templates) {
            var t = {},
                n = {},
                r = new e.nativeTemplateEngine,
                o = function(e) {
                    this._templateName = e, this.text = function(e) {
                        if (!e) return t[this._templateName];
                        t[this._templateName] = e
                    }, this.data = function(e, t) {
                        if (n[this._templateName] || (n[this._templateName] = {}), 1 === arguments.length) return n[this._templateName][e];
                        n[this._templateName][e] = t
                    }
                };
            r.makeTemplateSource = function(t, n) {
                if ("string" == typeof t) {
                    var r = (n = n || document).getElementById(t);
                    return r ? new e.templateSources.domElement(r) : new o(t)
                }
                if (t && 1 === t.nodeType || 8 === t.nodeType) return new e.templateSources.anonymousTemplate(t)
            }, e.templates = t, e.setTemplateEngine(r)
        }
    }, y.getDefaultInstance().setupManagedAttributes({
        attributes: ["item"],
        init: function(e, t, n, r, i, o, a) {
            var s = S(e, t, a);
            if (null != s) return s
        },
        update: function(e, t, n, r, i, o, a) {
            return S(e, t, a)
        },
        for: "ojListViewRenderer"
    }), y.getDefaultInstance().setupManagedAttributes({
        for: "ojListView",
        use: "ojListViewRenderer"
    }), y.getDefaultInstance().setupManagedAttributes({
        for: "ojNavigationList",
        use: "ojListViewRenderer"
    }), n._registerLegacyNamespaceProp("ResponsiveKnockoutUtils", h), n._registerLegacyNamespaceProp("KnockoutTemplateUtils", f), y.getDefaultInstance().setupManagedAttributes({
        attributes: ["center"],
        init: function(e, t, n, r, i, o, a) {
            return R(e, t, a)
        },
        update: function(e, t, n, r, i, o, a) {
            return R(e, t, a)
        },
        for: "ojStatusMeterGauge"
    }), y.getDefaultInstance().setupManagedAttributes({
        attributes: ["rootNodeContent"],
        init: function(e, t, n, r, i, o, a) {
            return U(e, t, a)
        },
        update: function(e, t, n, r, i, o, a) {
            return U(e, t, a)
        },
        for: "ojSunburst"
    });

    function F(e, t, n) {
        var r, o;
        return r = n, o = t,
            function(t) {
                var n = null,
                    s = null;
                if ("header" === o) n = e.createChildContext(null, null, function(e) {
                    e.$columnIndex = t.columnIndex, e.$headerContext = t.headerContext, e.$data = t.data
                }), s = t.headerContext.parentElement;
                else if ("cell" === o) {
                    var u = t.row;
                    n = e.createChildContext(u, null, function(e) {
                        e.$columnIndex = t.columnIndex, e.$cellContext = t.cellContext
                    }), s = t.cellContext.parentElement
                }
                "footer" === o && (n = e.createChildContext(null, null, function(e) {
                    e.$columnIndex = t.columnIndex, e.$footerContext = t.footerContext
                }), s = t.footerContext.parentElement), i.renderTemplate(r, n, {
                    afterRender: function(e) {
                        a(e)._ojDetectCleanData()
                    }
                }, s, "replaceNode")
            }
    }

    function $(e, t) {
        return function(n) {
            var r = n.row,
                o = e.createChildContext(r, null, function(e) {
                    e.$rowContext = n.rowContext
                });
            i.renderTemplate(t, o, {
                afterRender: function(e) {
                    a(e)._ojDetectCleanData()
                }
            }, n.rowContext.parentElement, "replaceNode")
        }
    }

    function H(e, t, n) {
        var r, i;
        if ("areaLayers" === e) {
            for (r = 0; r < t.length; r++) {
                var o = t[r].areaDataLayer;
                o && null != (i = o.template) && (o._templateRenderer = j(n, i))
            }
            return {
                areaLayers: t
            }
        }
        if ("pointDataLayers" === e) {
            for (r = 0; r < t.length; r++) null != (i = t[r].template) && (t[r]._templateRenderer = j(n, i));
            return {
                pointDataLayers: t
            }
        }
        return null
    }

    function G(e, t, n) {
        return "nodeContent" === e && t.template && (t._renderer = x(n, t.template)), {
            nodeContent: t
        }
    }
    y.getDefaultInstance().setupManagedAttributes({
        attributes: ["columns", "columnsDefault", "rowTemplate"],
        init: function(e, t, n, r, i, o, a) {
            if ("columns" === e || "columnsDefault" === e) {
                for (var s = 0; s < t.length; s++) {
                    var u = t[s],
                        l = u.template,
                        d = u.footerTemplate,
                        c = u.headerTemplate;
                    null != l && (u.renderer = F(a, "cell", l)), null != d && (u.footerRenderer = F(a, "footer", d)), null != c && (u.headerRenderer = F(a, "header", c))
                }
                return "columns" === e ? {
                    columns: t
                } : {
                    columnsDefault: t
                }
            }
            if ("rowTemplate" === e) return {
                rowRenderer: $(a, t)
            }
        },
        update: function(e, t, n, r, i, o, a) {
            if ("columns" === e || "columnsDefault" === e) {
                for (var s = 0; s < t.length; s++) {
                    var u = t[s],
                        l = u.template,
                        d = u.footerTemplate,
                        c = u.headerTemplate;
                    null != l && (u.renderer = F(a, "cell", l)), null != d && (u.footerRenderer = F(a, "footer", d)), null != c && (u.headerRenderer = F(a, "header", c))
                }
                r("columns" === e ? {
                    columns: t
                } : {
                    columnsDefault: t
                })
            } else if ("rowTemplate" === e) return {
                rowRenderer: $(a, t)
            };
            return null
        },
        for: "ojTable"
    }), y.getDefaultInstance().setupManagedAttributes({
        attributes: ["areaLayers", "pointDataLayers"],
        init: function(e, t, n, r, i, o, a) {
            return H(e, t, a)
        },
        update: function(e, t, n, r, i, o, a) {
            return H(e, t, a)
        },
        for: "ojThematicMap"
    }), y.getDefaultInstance().setupManagedAttributes({
        attributes: ["nodeContent"],
        init: function(e, t, n, r, i, o, a) {
            return G(e, t, a)
        },
        update: function(e, t, n, r, i, o, a) {
            return G(e, t, a)
        },
        for: "ojTreemap"
    })
});
//# sourceMappingURL=ojknockout.js.map