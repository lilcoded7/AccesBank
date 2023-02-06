/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "knockout", "ojs/ojconfig", "ojs/ojlogger"], function(e, t, n, r) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    const i = function() {
        this.Init()
    };

    function o(e, r) {
        return function(i, o, s, a) {
            var u = n.getExpressionEvaluator();
            return u ? function(e, n, r, i) {
                var o = i[e];
                if (!o) {
                    var s = t.expressionRewriting.preProcessBindings(e, n);
                    o = r.createEvaluator("{" + s + "}").evaluate, i[e] = o
                }
                return o
            }(i, a, u, r)([o.$data || {}, o, {
                $element: s
            }]) : e(i, o, s, a)
        }
    }
    e.Object.createSubclass(i, e.Object, "ComponentBinding.GlobalChangeQueue"), i.prototype.Init = function() {
        i.superclass.Init.call(this), this._trackers = [], this._queue = []
    }, i.prototype.registerComponentChanges = function(t) {
        -1 === this._trackers.indexOf(t) && (this._trackers.push(t), this._delayTimer || (this._delayTimer = setTimeout(e.Object.createCallback(this, this._deliverChangesImpl), 1), this._delayPromise = new Promise(function(e) {
            this._delayPromiseResolver = e
        }.bind(this))))
    }, i.prototype.deliverChanges = function() {
        this._delayTimer && clearTimeout(this._delayTimer), this._deliverChangesImpl()
    }, i.prototype.getThrottlePromise = function() {
        return this._delayPromise || Promise.resolve()
    }, i.prototype._deliverChangesImpl = function() {
        this._delayTimer = null, this._resolveDelayPromise();
        var e = this._trackers;
        this._trackers = [];
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            this._queue.push({
                tracker: n,
                changes: n.flushChanges()
            })
        }
        for (; this._queue.length > 0;) {
            var r = this._queue.shift();
            r.tracker.applyChanges(r.changes)
        }
    }, i.prototype._resolveDelayPromise = function() {
        this._delayPromise && (this._delayPromiseResolver(), this._delayPromiseResolver = null, this._delayPromise = null)
    };
    return (new function() {
        var e = new WeakMap,
            s = {},
            a = {},
            u = {},
            c = new i;

        function l(e) {
            var t, r = n.getExpressionEvaluator();
            if (r) {
                var i = r.createEvaluator(e).evaluate;
                return function(e, t) {
                    return i([e, e.$data || {}, {
                        $element: t
                    }])
                }
            }
            try {
                t = new Function("$context", "$element", "with($context.$data||{}){with($context){return " + e + "}}")
            } catch (t) {
                throw new Error(t.message + ' in expression "' + e + '"')
            }
            return t
        }

        function d(t, n, r) {
            if (!r) return t(n, r);
            var i, o = e,
                s = r._ojCacheScope || r;
            (i = o.get(s)) || (i = {}, o.set(s, i));
            var a = i[n];
            return a || (a = t(n, r), i[n] = a), a
        }

        function p(e, t, n) {
            var r = t.getBindingsString;
            if (r) return r.call(t, e, n);
            switch (e.nodeType) {
                case 1:
                    return e.getAttribute("data-bind");
                case 8:
                    var i = e.nodeValue.match(/^\s*ko(?:\s+([\s\S]+))?\s*$/);
                    return i ? i[1] : null;
                default:
                    return null
            }
        }
        this.install = function() {
            var e = t.bindingProvider,
                n = e.instance;
            if (!n.getBindingAccessors) return r.error("JET's Knockout bindings are not compatible with the current binding provider since it does not implement getBindingAccessors()"), this;
            var i = {
                getWrapped: function() {
                    return n
                }
            };
            e.instance = i;
            var c, h, f, g = [];
            return g.push("getBindingAccessors", "nodeHasBindings", "getBindings"), g.forEach(function(e) {
                    i[e] = function(e, n, r) {
                        var i = "nodeHasBindings" === n;
                        return function(o) {
                            if (i) {
                                var a = o.nodeType;
                                if (1 !== a && 8 !== a) return !1
                            }
                            var u = r(n, e[n]),
                                c = u ? u.apply(e, arguments) : null,
                                l = s[n];
                            if (null != l) {
                                var d = arguments;
                                l.forEach(function(n) {
                                    var r = Array.prototype.slice.call(d);
                                    r.push(c, e), c = t.ignoreDependencies(n, null, r)
                                })
                            }
                            return c
                        }
                    }(n, e, function(e, r) {
                        return "getBindingAccessors" !== e ? r : function(e, n) {
                            return function(r, i) {
                                if (i._ojExtended) {
                                    var o = p(r, n, i),
                                        s = o ? function(e, n) {
                                            return d(function(e) {
                                                return l("{" + t.expressionRewriting.preProcessBindings(e, {
                                                    valueAccessors: !0
                                                }) + "}")
                                            }, e, n)
                                        }(o, i)(i, r) : null;
                                    if (1 === r.nodeType && t.components.isRegistered(r.tagName.toLowerCase())) {
                                        var a = e.call(n, r, i).component;
                                        a && ((s = s || {}).component = a)
                                    }
                                    return s
                                }
                                return e.call(n, r, i)
                            }
                        }(r, n)
                    })
                }), i.preprocessNode = function(e) {
                    var n = e.preprocessNode;
                    return function(r) {
                        var i, o, s = null;
                        return 1 === r.nodeType && (i = a[r.nodeName.toLowerCase()]), i || (i = n, s = e), i && (o = t.ignoreDependencies(i, s, [r])), Array.isArray(o) && (o = function(e, n) {
                            var r = t.bindingProvider.instance,
                                i = n.slice(0),
                                o = n[0],
                                s = 0,
                                a = 0;
                            for (; s >= 0;) {
                                var u = t.virtualElements.nextSibling(o);
                                if (o !== e) {
                                    var c = r.preprocessNode(o);
                                    Array.isArray(c) && (i.splice.apply(i, [a, 1].concat(c)), a += c.length - 1)
                                }
                                a += 1;
                                var l = s + 1;
                                s = (o = u) ? n.indexOf(o, l) : -1, a += s - l
                            }
                            return i
                        }(r, o)), o
                    }
                }(n), c = t.nativeTemplateEngine.prototype, f = c[h = "renderTemplateSource"], c[h] = function(e, t, n, r) {
                    return f.call(this, e, t, n, r || document)
                },
                function() {
                    const e = t.templateSources.domElement.prototype,
                        n = e.nodes;
                    e.nodes = function() {
                        const e = n.apply(this, arguments);
                        return e && 11 === e.nodeType ? document.importNode(e, !0) : e
                    }
                }(), t.components.loaders.unshift({
                    loadTemplate: function(e, n, r) {
                        if ("string" == typeof n) {
                            var i = t.utils.parseHtmlFragment(n, document);
                            t.components.defaultLoader.loadTemplate(e, i, r)
                        } else r(null)
                    }
                }),
                function(e) {
                    var n, i = t.bindingProvider.instance;
                    for (; i && !n;) {
                        var s = i.parseBindingsString;
                        s ? (n = !0, i.parseBindingsString = o(s.bind(i), e)) : i = i.getWrapped ? i.getWrapped() : null
                    }
                    n || r.error("Unable to patch KO expression evaluation implementation. If you have a custom binding provider, make sure it implements the getWrapped() method that returns the default binding provider instance.")
                }(u), this
        }, this.addPostprocessor = function(e) {
            Object.keys(e).forEach(function(t) {
                s[t] = s[t] || [], s[t].push(e[t])
            })
        }, this.registerPreprocessor = function(e, t) {
            a[e] = t
        }, this.getBindingsString = function(e, t, n) {
            return p(e, t, n)
        }, this.extendBindingContext = function(e, t, n, r, i) {
            var o = {
                $current: t,
                $root: void 0,
                $parent: void 0,
                $parents: void 0
            };
            return n && (o[n] = t), r && (o[r] = t), e ? o = e.extend(o) : o.$data = {}, Object.defineProperty(o, "_ojCacheScope", {
                value: i
            }), Object.defineProperty(o, "_ojExtended", {
                value: !0
            }), o
        }, this.createBindingExpressionEvaluator = function(e, t) {
            if (t._ojExtended) return l(e);
            var r, i = n.getExpressionEvaluator();
            if (i) {
                var o = i.createEvaluator(e).evaluate;
                return function(e) {
                    return o([e.$data || {}, e])
                }
            }
            try {
                r = new Function("$context", "with($context){with($data||{}){return " + e + ";}}")
            } catch (t) {
                throw new Error(t.message + ' in expression "' + e + '"')
            }
            return r
        }, this.createEvaluator = function(e, t) {
            return d(this.createBindingExpressionEvaluator, e, t)
        }, this.getGlobalChangeQueue = function() {
            return c
        }
    }).install()
});
//# sourceMappingURL=ojkoshared.js.map