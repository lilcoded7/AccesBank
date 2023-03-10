/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore", "knockout", "signals", "ojs/ojlogger"], function(t, e, r, n) {
    "use strict";
    ! function() {
        var o, i, a, u, s, l = "/",
            c = {
                hasChanged: !1
            },
            f = !1,
            h = [],
            d = window.location;

        function p(t) {
            return t ? t.split("/") : []
        }

        function v(t) {
            return N(p(t)[0])
        }

        function _(e, r) {
            var n = document.createElement("a");
            return n.href = d.href, void 0 !== e.search && (n.search = e.search), void 0 !== e.pathname && (n.pathname = e.pathname), n.search = function(e, r) {
                var n, o, i = "",
                    a = e.indexOf("oj_Router");
                if (-1 !== a) {
                    var u = e.indexOf("&", a); - 1 === u && (u = e.length), n = e.substring(0, a), o = e.substr(u)
                } else n = e + (-1 === e.indexOf("?") ? "?" : "&"), o = "";
                r && Object.getOwnPropertyNames(r).length > 0 ? i = function(e) {
                    var r = JSON.stringify(e),
                        n = encodeURIComponent(r),
                        o = t.LZString.compressToEncodedURIComponent(r),
                        i = !1,
                        a = "oj_Router=";
                    o.length <= n.length && (i = !0);
                    a += i ? "1" + o : "0" + n;
                    if (a.length > 1024) throw new Error("Size of bookmarkable data is too big.");
                    return a
                }(r) : n = n.substring(0, n.length - 1);
                return n + i + o
            }(n.search, r), n.href.replace(/\?$/, "")
        }

        function g(t) {
            return t._parentRouter ? g(t._parentRouter) + "." + t._name : t._name
        }

        function m(t, e) {
            var r;
            return t._childRouters.every(function(t) {
                if (t._parentState) {
                    if (t._parentState === e) return r = t, !1
                } else r = t;
                return !0
            }), r
        }

        function b(t) {
            var e = t.filter(function(t) {
                return t.value !== t.router._stateId()
            });
            return n.option("level") === n.LEVEL_INFO && (n.info("Potential changes are: "), e.forEach(function(t) {
                n.info("   { router: %s, value: %s }", t.router && g(t.router), t.value)
            })), e
        }

        function R(t) {
            var e = this[t.router._name];
            void 0 !== e && (t.router._extra = e)
        }

        function S() {
            return h[0] && h[0].cancel
        }

        function w(e) {
            var r, o = e.charAt(0),
                i = e.slice(1);
            if ("0" === o) i = decodeURIComponent(i);
            else {
                if ("1" !== o) throw new Error("Error retrieving bookmarkable data. Format is invalid");
                i = t.LZString.decompressFromEncodedURIComponent(i)
            }
            if (r = JSON.parse(i), n.option("level") === n.LEVEL_INFO) {
                n.info("Bookmarkable data: ");
                for (var a = Object.keys(r), u = 0; u < a.length; u++) {
                    var s = a[u];
                    n.info("   { router: %s, value: %s }", s, r[s])
                }
            }
            return r
        }

        function y(t, e, r) {
            var n;
            return t._childRouters.every(function(t) {
                return !((!t._parentState || t._parentState === r) && t._getStateFromId(e)) || (n = t, !1)
            }), n
        }

        function I(e) {
            t.Router._transitionedToState.dispatch(e)
        }

        function E(t, e) {
            this.router = t, this.value = e
        }

        function C(t) {
            var e, r, n = t[t.length - 1];
            for (n ? (e = n.router, r = v(n.value)) : (e = s, (r = s._defaultStateId) && t.push(new E(e, r))), e = m(e, r); e;)(r = e._defaultStateId) && t.push(new E(e, r)), e = m(e, r);
            var o = function t(e) {
                    var r = [];
                    return e._currentState() && (r.push(new E(e)), e._childRouters.forEach(function(e) {
                        r = r.concat(t(e))
                    })), r
                }(s),
                i = [];
            return o.forEach(function(e, r) {
                var n = t[r];
                n && e.router === n.router || i.unshift(e)
            }), i.concat(t)
        }

        function x(t, e, r) {
            var o = t();
            return o || n.info("%s is false for state: %s", e, r), o
        }

        function P(t, e, r, n) {
            return "function" == typeof t && (e = e ? e.then(function(e) {
                return e && (e = x(t, r, n)), e
            }) : new Promise(function(e) {
                e(x(t, r, n))
            })), e
        }

        function O(t) {
            var e;
            return S() ? Promise.resolve(!1) : (n.info("Start _canExit."), e = t ? null === (e = function t(e, r) {
                var n = e._currentState();
                if (n) {
                    for (var o = 0; o < e._childRouters.length; o++) r = t(e._childRouters[o], r);
                    r = P(n.viewModel && n.viewModel.canExit ? n.viewModel.canExit : n._canExit, r, "canExit", n._id)
                }
                return r
            }(t, null)) ? Promise.resolve(!0) : e.then(function(t) {
                return t && !S()
            }) : Promise.resolve(!0))
        }

        function j(t, e) {
            if (S()) return Promise.resolve();
            n.info("Start _canEnter.");
            var r = null;
            return t.forEach(function(t) {
                var e = t.getState();
                e && (r = P(e._canEnter, r, "canEnter", e._id))
            }), r = null === r ? Promise.resolve({
                allChanges: t,
                origin: e
            }) : r.then(function(r) {
                var n;
                return r && !S() && (n = {
                    allChanges: t,
                    origin: e
                }), n
            })
        }

        function k(e) {
            if (!e) return Promise.resolve(c);
            var r, o = Promise.resolve().then(function() {
                    n.info("Entering _updateAll."), t.Router._updating = !0
                }),
                i = e.allChanges;
            return i.forEach(function(t) {
                r = t.router.currentState.peek(), o = o.then(function() {
                    if (!S()) return function(t, e) {
                        var r = t.router._getStateFromId(v(t.router._stateId())),
                            o = t.getState();
                        return Promise.resolve().then(function() {
                            n.option("level") === n.LEVEL_INFO && n.info("Updating state of %s to %s.", g(t.router), t.value)
                        }).then(r ? r._exit : void 0).then(function() {
                            var r = t.router,
                                n = !1;
                            if ("popState" === e) {
                                var i, a = r._navHistory.length;
                                for (i = a - 1; i >= 0; i--)
                                    if (r._navHistory[i] === t.value) {
                                        n = !0, r._navHistory.splice(i, a - i);
                                        break
                                    }
                                a - i == 1 && (r._navigationType = "back")
                            }
                            if (n || (delete r._navigationType, r._navHistory.push(v(r._stateId()))), t.value && o) {
                                var u = p(t.value);
                                o._paramOrder.forEach(function(t, e) {
                                    var r = N(u[e + 1]);
                                    r !== o.parameters[t] && (o.parameters[t] = r)
                                })
                            }
                            r._stateId(t.value)
                        }).then(o ? o._enter : void 0)
                    }(t, e.origin)
                })
            }), o.then(function() {
                var e, o, a = !1;
                if (i.length) {
                    a = !S();
                    var u = i[i.length - 1];
                    e = u.router, o = u.state
                }
                return t.Router._updating = !1, n.info("_updateAll returns %s.", String(a)), {
                    hasChanged: a,
                    router: e,
                    oldState: r,
                    newState: o
                }
            }, function(e) {
                return t.Router._updating = !1, Promise.reject(e)
            })
        }

        function A(t) {
            var e;
            try {
                e = b(e = i.parse())
            } catch (t) {
                return Promise.reject(t)
            }
            return j(e, t).then(k)
        }

        function U(t, e) {
            if (n.option("level") === n.LEVEL_INFO) {
                var r = e.path ? "path=" + e.path : "",
                    o = e.deferredHandling ? "deferredHandling=true" : "",
                    i = e.router ? g(e.router) : "null";
                n.info(">> %s: origin=%s router=%s %s %s", t, e.origin, i, r, o)
            }
        }

        function F() {
            var t, e = h[0];
            return U("Resolving", e), e.cancel ? (U("Cancelled", e), t = Promise.resolve(c)) : t = function(t) {
                if (U("Executing", t), !t.deferredHandling) {
                    if ("sync" === t.origin) return A();
                    if ("popState" === t.origin) return O(t.router).then(function(e) {
                        return e ? A(t.origin) : Promise.resolve(c)
                    })
                }
                return t.router._go(t)
            }(e), t.then(function(t) {
                if (U("Done with", h.shift()), !0 === t.hasChanged) {
                    var e, r = function t(e) {
                        if (!e) return {
                            title: "",
                            segment: ""
                        };
                        var r = t(m(e, e._stateId()));
                        if ("" === r.title) {
                            var n = e._currentState();
                            if (n) {
                                var o = n._title;
                                void 0 !== o ? ("function" == typeof o && (o = o()), r.title = String(o)) : void 0 !== (o = n._label) && (o = String(o), "" !== r.segment && (o += " | " + r.segment), r.segment = o)
                            }
                        }
                        return r
                    }(s);
                    "" !== r.title ? e = r.title : o && o.length > 0 ? (e = o, "" !== r.segment && (e += " | " + r.segment)) : e = r.segment, e !== window.document.title && (window.document.title = e)
                }
                return I(t), t
            }, function(t) {
                return h = [], n.error("Error when executing transition: %o", t), I(c), Promise.reject(t)
            })
        }

        function L(t) {
            U("Queuing  ", t);
            var e = h.push(t);
            if (1 === e) u = F();
            else {
                var r = h[e - 2];
                r.deferredHandling || (U("Cancelling", r), r.cancel = !0), u = u.then(F)
            }
            return u
        }

        function M() {
            var t = v(s._stateId()),
                e = null;
            if (n.info("Handling popState event with URL: %s", d.href), t)
                for (var r = 0; r < s._childRouters.length; r++) {
                    var o = s._childRouters[r];
                    if (t === o.parent.stateId()) {
                        e = o;
                        break
                    }
                }
            L({
                router: e,
                origin: "popState"
            })
        }

        function T() {
            f || (i || (i = new t.Router.urlPathAdapter), i.init(l), o = window.document.title, window.addEventListener("popstate", M, !1), n.info("Initializing rootInstance."), n.info("Base URL is %s", l), n.info("Current URL is %s", d.href), f = !0)
        }

        function H(t) {
            var e = t;
            return e && e.replace && (e = (e = e.replace(/~/g, "~0")).replace(/\//g, "~1")), e
        }

        function N(t) {
            var e = t;
            return e && e.replace && (e = (e = e.replace(/~1/g, "/")).replace(/~0/g, "~")), e
        }
        E.prototype.getState = function() {
            return this.state || this.value && (this.state = this.router._getStateFromId(v(this.value))), this.state
        }, E.prototype.addParameter = function(t) {
            t && (this.value += "/" + t)
        }, t.Router = function(t, r, n) {
            var o = this;

            function i(t, e) {
                var r = {
                    name: u(t),
                    params: {
                        ojRouter: {
                            parentRouter: e,
                            get direction() {
                                return e._navigationType
                            }
                        }
                    }
                };
                return r.params.ojRouter.parameters = {}, t && (a(t, r), r.lifecycleListener = {
                    attached: e.moduleConfig.lifecycleListener.attached
                }), r
            }

            function a(t, r) {
                var n = r.params.ojRouter.parameters,
                    o = t.parameters;
                Object.keys(o).forEach(function(t) {
                    var r = o[t],
                        i = n[t];
                    i || (i = e.observable(), n[t] = i), i(r)
                })
            }

            function u(t) {
                var e;
                return t && ((e = t.value) && "string" == typeof e || (e = t._id)), e
            }
            this._name = t, this._parentState = n || (r ? v(r._stateId()) : void 0), this._parentRouter = r, this._childRouters = [], this._extra = void 0, this._stateId = e.observable(), this._stateIdComp = e.pureComputed({
                read: function() {
                    return v(this._stateId())
                },
                write: function(t) {
                    this.go(t).then(null, function(t) {
                        throw t
                    })
                },
                owner: o
            }), this._states = null, this._defaultStateId = void 0, this._currentState = e.pureComputed(function() {
                var t = v(o._stateId());
                return e.ignoreDependencies(o._getStateFromId, o, [t])
            }), this._currentValue = e.pureComputed(function() {
                var t, r = v(o._stateId()),
                    n = e.ignoreDependencies(o._getStateFromId, o, [r]);
                return n && (t = n.value), t
            }), this._navigationType = void 0, this._navHistory = [], this._moduleConfig = Object.create(null, {
                name: {
                    value: e.pureComputed(function() {
                        var t, e = v(this._stateId()) || this._defaultStateId || this._states[0].name,
                            r = this._getStateFromId(e);
                        return r && ((t = r.value) && "string" == typeof t || (t = r._id)), t
                    }, o),
                    enumerable: !0
                },
                params: {
                    value: Object.create(null, {
                        ojRouter: {
                            value: new function() {
                                Object.defineProperties(this, {
                                    parentRouter: {
                                        value: o,
                                        enumerable: !0
                                    },
                                    direction: {
                                        get: function() {
                                            return o._navigationType
                                        },
                                        enumerable: !0
                                    }
                                })
                            },
                            enumerable: !0
                        }
                    }),
                    enumerable: !0
                },
                lifecycleListener: {
                    value: {
                        attached: function(t) {
                            var e = o.currentState();
                            e && (e.viewModel = t.viewModel)
                        },
                        enumerable: !0
                    },
                    enumerabl: !0
                }
            }), this._getObservableModuleConfig = function() {
                if (!this._observableModuleConfig) {
                    var t = o.currentState,
                        r = t.peek(),
                        n = e.observable(i(r, o));
                    t.subscribe(function(t) {
                        var e = n.peek();
                        e.name !== u(t) ? n(i(t, o)) : a(t, e)
                    }), this._observableModuleConfig = n
                }
                return this._observableModuleConfig
            }, Object.defineProperties(this, {
                parent: {
                    value: this._parentRouter,
                    enumerable: !0
                }
            })
        }, Object.defineProperties(t.Router.prototype, {
            name: {
                get: function() {
                    return this._name
                },
                enumerable: !0
            },
            states: {
                get: function() {
                    return this._states
                },
                enumerable: !0
            },
            stateId: {
                get: function() {
                    return this._stateIdComp
                },
                enumerable: !0
            },
            currentState: {
                get: function() {
                    return this._currentState
                },
                enumerable: !0
            },
            currentValue: {
                get: function() {
                    return this._currentValue
                },
                enumerable: !0
            },
            direction: {
                get: function() {
                    return this._navigationType
                },
                enumerable: !0
            },
            defaultStateId: {
                get: function() {
                    return this._defaultStateId
                },
                set: function(t) {
                    this._defaultStateId = t
                },
                enumerable: !0
            },
            moduleConfig: {
                get: function() {
                    return this._moduleConfig
                },
                enumerable: !0
            },
            observableModuleConfig: {
                get: function() {
                    return this._getObservableModuleConfig()
                },
                enumerable: !0
            }
        }), s = new t.Router("root", void 0, void 0), t.Router.prototype.getChildRouter = function(t) {
            var e;
            if (t && "string" == typeof t) {
                var r = t.trim();
                r.length > 0 && this._childRouters.every(function(t) {
                    return t._name !== r || (e = t, !1)
                })
            }
            return e
        }, t.Router.prototype.getCurrentChildRouter = function() {
            return m(this, v(this._stateId() || this._defaultStateId))
        }, t.Router.prototype.createChildRouter = function(e, r) {
            var n;
            t.Assert.assertString(e);
            for (var o = r || v(this._stateId()), i = encodeURIComponent(e.trim()), a = 0; a < this._childRouters.length; a++) {
                var u = this._childRouters[a];
                if (u._name === i) throw new Error('Invalid router name "' + i + '", it already exists.');
                if (u._parentState === o) throw new Error('Cannot create more than one child router for parent state id "' + u._parentState + '".')
            }
            return n = new t.Router(i, this, o), this._childRouters.push(n), n
        }, t.Router.prototype._getStateFromId = function(e) {
            var r;
            return this._stateFromIdCallback ? !(r = this._stateFromIdCallback(e)) || r instanceof t.RouterState || (r = new t.RouterState(e, r, this)) : r = function(e, r) {
                var n;
                return r && e._states && (t.Assert.assertString(r), e._states.every(function(t) {
                    return t._id !== r || (n = t, !1)
                })), n
            }(this, e), r
        }, t.Router.prototype.configure = function(e) {
            return this._stateId(void 0), delete this._defaultStateId, this._navigationType = void 0, this._navHistory = [], "function" == typeof e ? (this._states = null, this._stateFromIdCallback = e) : (this._states = [], this._stateFromIdCallback = void 0, Object.keys(e).forEach(function(r) {
                var n = e[r];
                this._states.push(new t.RouterState(r, n, this)), "boolean" == typeof n.isDefault && n.isDefault && (this._defaultStateId = v(r))
            }, this)), this
        }, t.Router.prototype.getState = function(t) {
            return this._getStateFromId(t)
        }, t.Router.prototype.go = function(t, e) {
            T();
            var r = e || {};
            return Array.isArray(t) && (t = t.map(H).join("/")), L({
                router: this,
                path: t,
                origin: "go",
                historyUpdate: r.historyUpdate
            })
        }, t.Router.prototype._go = function(t) {
            var e, r, o = !0,
                u = t.path,
                s = !1,
                l = !1;
            switch (t.historyUpdate) {
                case "skip":
                    l = !0;
                    break;
                case "replace":
                    s = !0
            }
            if (u) {
                if ("string" != typeof u) return Promise.reject(new Error("Invalid object type for state id."));
                o = !1
            }
            if (o && !(u = this._defaultStateId)) return n.info(function() {
                return "Undefined state id with no default id on router " + g(this)
            }), Promise.resolve(c);
            if ("/" === u.charAt(0)) r = u;
            else {
                if (!(r = function t(e) {
                        var r;
                        if (e) {
                            if (r = t(e._parentRouter)) {
                                var n = e._stateId();
                                n ? r += n + "/" : r = void 0
                            }
                        } else r = "/";
                        return r
                    }(this._parentRouter))) return Promise.reject(new Error('Invalid path "' + u + '". The parent router does not have a current state.'));
                r += u
            }
            n.info("Destination path: %s", r);
            try {
                e = C(e = function(t, e) {
                    var r, n, o, i, u = [],
                        s = [],
                        l = t,
                        c = p(e),
                        f = 0;
                    for (c.splice(0, 1); l;) s.unshift(l), l = l._parentRouter;
                    for (var h = c.shift(); h; h = c.shift()) {
                        if (o) o._paramOrder[f] ? (i.addParameter(h), f += 1) : f = 0;
                        if (!o || 0 === f) {
                            if (!(l = s.shift()) && !(l = y(r, h, n))) return a = e, u;
                            if (!(o = (i = new E(l, h)).getState())) throw new Error('Invalid path "' + e + '". State id "' + h + '" does not exist on router "' + l._name + '".');
                            u.push(i), r = l, n = h
                        }
                    }
                    return u
                }(this, r))
            } catch (t) {
                return Promise.reject(t)
            }
            var f = b(e);
            return s || f.length > 0 ? (n.info("Deferred mode or new state is different."), O(this).then(function(t) {
                return t ? j(f).then(k).then(function(t) {
                    if (t.hasChanged)
                        if (l) n.info("Skip history update.");
                        else {
                            var r = i.buildUrlFromStates(e);
                            n.info("%s URL to %s", s ? "Replacing" : "Pushing", r), window.history[s ? "replaceState" : "pushState"](null, "", r)
                        }
                    return t
                }) : Promise.resolve(c)
            })) : Promise.resolve(c)
        }, t.Router.prototype.store = function(t) {
            this._extra = t;
            for (var e, r = {}, n = this; n;) void 0 !== n._extra && (r[n._name] = n._extra), n = n._parentRouter;
            for (n = this; n;) {
                for (var o = 0; o < n._childRouters.length; o++) {
                    var i = n._childRouters[o],
                        a = v(n._stateId());
                    if (a && a === i._parentState) {
                        void 0 !== i._extra && (r[i._name] = i._extra), e = i;
                        break
                    }
                }
                n = e, e = void 0
            }
            window.history.replaceState(null, "", _({}, r))
        }, t.Router.prototype.retrieve = function() {
            return this._extra
        }, t.Router.prototype.dispose = function() {
            for (; this._childRouters.length > 0;) this._childRouters[0].dispose();
            if (this._parentRouter) {
                for (var e = this._parentRouter._childRouters, r = 0; r < e.length; r++)
                    if (e[r]._name === this._name) {
                        e.splice(r, 1);
                        break
                    }
                delete this._parentState
            } else l = "/", i = null, this._name = "root", window.document.title = o, window.removeEventListener("popstate", M), t.Router._transitionedToState.removeAll(), f = !1;
            delete this._navigationType, this._navHistory = [], this._states = null, delete this._defaultStateId, delete this._extra
        }, t.Router._transitionedToState = new r.Signal, t.Router._updating = !1, Object.defineProperties(t.Router, {
            rootInstance: {
                value: s,
                enumerable: !0
            },
            transitionedToState: {
                value: t.Router._transitionedToState,
                enumerable: !0
            }
        }), t.Router.defaults = {}, Object.defineProperties(t.Router.defaults, {
            urlAdapter: {
                get: function() {
                    return i || (i = new t.Router.urlPathAdapter), i
                },
                set: function(t) {
                    if (f) throw new Error("Incorrect operation. Cannot change URL adapter after calling sync() or go().");
                    i = t
                },
                enumerable: !0,
                readonly: !1
            },
            baseUrl: {
                get: function() {
                    return l
                },
                set: function(t) {
                    if (f) throw new Error("Incorrect operation. Cannot change base URL after calling sync() or go().");
                    l = t ? t.match(/[^?#]+/)[0] : "/"
                },
                enumerable: !0,
                readonly: !1
            },
            rootInstanceName: {
                get: function() {
                    return s._name
                },
                set: function(e) {
                    if (f) throw new Error("Incorrect operation. Cannot change the name of the root instance after calling sync() or go().");
                    t.Assert.assertString(e), s._name = encodeURIComponent(e.trim())
                },
                enumerable: !0,
                readonly: !1
            }
        }), t.Router.sync = function() {
            var e = {
                router: s,
                origin: "sync"
            };
            return T(), n.info("Entering sync with URL: %s", d.href), a ? (e.path = a, e.deferredHandling = !0, e.historyUpdate = "replace", a = void 0, L(e)) : t.Router._updating ? (n.info("Sync called while updating, waiting for updates to end."), new Promise(function(e) {
                t.Router._transitionedToState.addOnce(function(t) {
                    n.info("Sync updates done."), e(t)
                })
            })) : L(e)
        }, t.Router.urlPathAdapter = function() {
            var t = "";
            this.init = function(e) {
                var r = document.createElement("a");
                r.href = e;
                var n = r.pathname;
                "/" !== (n = n.replace(/^([^/])/, "/$1")).slice(-1) && (n += "/"), t = n
            }, this.parse = function() {
                var e = s,
                    r = d.pathname.replace(t, ""),
                    o = p(decodeURIComponent(r)).map(N),
                    i = [];
                for (n.info("Parsing: %s", r); e;) {
                    var a = o.shift();
                    if (!a) break;
                    var u = new E(e, a),
                        l = u.getState();
                    l && l._paramOrder.forEach(function() {
                        u.addParameter(o.shift())
                    }), i.push(u), e = m(e, a)
                }
                i = C(i);
                var c = d.search.split("oj_Router=")[1];
                return c && (c = c.split("&")[0]) && i.forEach(R, w(c)), i
            }, this.buildUrlFromStates = function(e) {
                for (var r = !1, n = "", o = {}, i = e.pop(); i; i = e.pop()) i.value && (r || i.value !== i.router._defaultStateId) && (n = n ? i.value + "/" + n : i.value, r = !0), void 0 !== i.router._extra && (o[i.router._name] = i.router._extra);
                return _({
                    pathname: t + n
                }, o)
            }
        }, t.Router.urlParamAdapter = function() {
            this.init = function() {}, this.parse = function() {
                var t = d.search,
                    e = function(t) {
                        var e = {},
                            r = t.split("?")[1];
                        return r && r.split("&").forEach(function(t) {
                            var r = t.split(/=(.+)?/),
                                n = r[0];
                            if (n.length) {
                                var o = r[1] && decodeURIComponent(r[1]);
                                e[n] = o
                            }
                        }), e
                    }(t),
                    r = s,
                    o = [];
                for (n.info("Parsing: %s", t); r;) {
                    var i = e[r._name] || r._defaultStateId,
                        a = p(i),
                        u = new E(r, i = a.shift());
                    if (i) {
                        var l = u.getState();
                        l && l._paramOrder.forEach(function() {
                            u.addParameter(a.shift())
                        }), o.push(u)
                    }
                    r = m(r, i)
                }
                o = C(o);
                var c = e.oj_Router;
                return c && o.forEach(R, w(c)), o
            }, this.buildUrlFromStates = function(t) {
                for (var e = !1, r = "", n = {}, o = t.pop(); o; o = t.pop()) {
                    if (o.value && (e || o.value !== o.router._defaultStateId)) {
                        var i = "&" + o.router._name + "=",
                            a = o.value;
                        r = i + encodeURIComponent(a) + r, e = !0
                    }
                    void 0 !== o.router._extra && (n[o.router._name] = o.router._extra)
                }
                return r && (r = "?" + r.substr(1)), _({
                    search: r
                }, n)
            }
        }
    }();
    var o, i, a, u, s = t.Router;
    return i = String.fromCharCode, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", t.LZString = {
        compressToEncodedURIComponent: function(t) {
            return null === t ? "" : function(t, e, r) {
                if (null === t) return "";
                for (var n, o, i = {}, a = {}, u = "", s = 2, l = 3, c = 2, f = "", h = 0, d = 0, p = t.length, v = 0; v < p; v++) {
                    var _ = t[v];
                    Object.prototype.hasOwnProperty.call(i, _) || (i[_] = l, l += 1, a[_] = !0);
                    var g = u + _;
                    if (Object.prototype.hasOwnProperty.call(i, g)) u = g;
                    else {
                        if (Object.prototype.hasOwnProperty.call(a, u)) {
                            if (u.charCodeAt(0) < 256) {
                                for (n = c; n--;) h <<= 1, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1;
                                for (o = u.charCodeAt(0), n = 8; n--;) h = h << 1 | 1 & o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o >>= 1
                            } else {
                                for (o = 1, n = c; n--;) h = h << 1 | o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o = 0;
                                for (o = u.charCodeAt(0), n = 16; n--;) h = h << 1 | 1 & o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o >>= 1
                            }
                            0 == (s -= 1) && (s = Math.pow(2, c), c += 1), delete a[u]
                        } else
                            for (o = i[u], n = c; n--;) h = h << 1 | 1 & o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o >>= 1;
                        0 == (s -= 1) && (s = Math.pow(2, c), c += 1), i[g] = l, l += 1, u = String(_)
                    }
                }
                if ("" !== u) {
                    if (Object.prototype.hasOwnProperty.call(a, u)) {
                        if (u.charCodeAt(0) < 256) {
                            for (n = c; n--;) h <<= 1, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1;
                            for (o = u.charCodeAt(0), n = 8; n--;) h = h << 1 | 1 & o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o >>= 1
                        } else {
                            for (o = 1, n = c; n--;) h = h << 1 | o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o = 0;
                            for (o = u.charCodeAt(0), n = 16; n--;) h = h << 1 | 1 & o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o >>= 1
                        }
                        0 == (s -= 1) && (s = Math.pow(2, c), c += 1), delete a[u]
                    } else
                        for (o = i[u], n = c; n--;) h = h << 1 | 1 & o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o >>= 1;
                    0 == (s -= 1) && (c += 1)
                }
                for (o = 2, n = c; n--;) h = h << 1 | 1 & o, d === e - 1 ? (d = 0, f += r(h), h = 0) : d += 1, o >>= 1;
                for (;;) {
                    if (h <<= 1, d === e - 1) {
                        f += r(h);
                        break
                    }
                    d += 1
                }
                return f
            }(t, 6, function(t) {
                return a.charAt(t)
            })
        },
        decompressFromEncodedURIComponent: function(t) {
            return null === t ? "" : "" === t ? null : function(t, e, r) {
                for (var n, o, a = [], u = 4, s = 4, l = 3, c = "", f = "", h = {
                        val: r(0),
                        position: e,
                        index: 1
                    }, d = 0; d < 3; d += 1) a[d] = d;
                for (var p = 0, v = Math.pow(2, 2), _ = 1; _ !== v;) n = h.val & h.position, h.position >>= 1, 0 === h.position && (h.position = e, h.val = r(h.index), h.index += 1), p |= (n > 0 ? 1 : 0) * _, _ <<= 1;
                switch (p) {
                    case 0:
                        for (p = 0, v = Math.pow(2, 8), _ = 1; _ !== v;) n = h.val & h.position, h.position >>= 1, 0 === h.position && (h.position = e, h.val = r(h.index), h.index += 1), p |= (n > 0 ? 1 : 0) * _, _ <<= 1;
                        o = i(p);
                        break;
                    case 1:
                        for (p = 0, v = Math.pow(2, 16), _ = 1; _ !== v;) n = h.val & h.position, h.position >>= 1, 0 === h.position && (h.position = e, h.val = r(h.index), h.index += 1), p |= (n > 0 ? 1 : 0) * _, _ <<= 1;
                        o = i(p);
                        break;
                    case 2:
                        return ""
                }
                a[3] = o;
                var g = o;
                for (f = o;;) {
                    if (h.index > t) return "";
                    for (p = 0, v = Math.pow(2, l), _ = 1; _ !== v;) n = h.val & h.position, h.position >>= 1, 0 === h.position && (h.position = e, h.val = r(h.index), h.index += 1), p |= (n > 0 ? 1 : 0) * _, _ <<= 1;
                    switch (o = p) {
                        case 0:
                            for (p = 0, v = Math.pow(2, 8), _ = 1; _ !== v;) n = h.val & h.position, h.position >>= 1, 0 === h.position && (h.position = e, h.val = r(h.index), h.index += 1), p |= (n > 0 ? 1 : 0) * _, _ <<= 1;
                            a[s] = i(p), o = (s += 1) - 1, u -= 1;
                            break;
                        case 1:
                            for (p = 0, v = Math.pow(2, 16), _ = 1; _ !== v;) n = h.val & h.position, h.position >>= 1, 0 === h.position && (h.position = e, h.val = r(h.index), h.index += 1), p |= (n > 0 ? 1 : 0) * _, _ <<= 1;
                            a[s] = i(p), o = (s += 1) - 1, u -= 1;
                            break;
                        case 2:
                            return f
                    }
                    if (0 === u && (u = Math.pow(2, l), l += 1), a[o]) c = a[o];
                    else {
                        if (o !== s) return null;
                        c = g + (g.length ? g[0] : "")
                    }
                    f += c, a[s] = g + c[0], s += 1, g = c, 0 == (u -= 1) && (u = Math.pow(2, l), l += 1)
                }
            }(t.length, 32, function(e) {
                return function(t, e) {
                    var r;
                    if (o || (o = {}), !o[t])
                        for (o[t] = {}, r = 0; r < t.length; r++) o[t][t[r]] = r;
                    return o[t][e]
                }(a, t.charAt(e))
            })
        }
    }, u = /^{(\w+)}$/, t.RouterState = function(e, r, n) {
        r = r || {}, t.Assert.assertString(e);
        var o = (e = e.trim()).split("/");
        this._id = o.shift(), this._parameters = {}, this._paramOrder = [], o.forEach(function(t, e) {
            var r = t.match(u);
            if (r) {
                var n = r[1];
                this._parameters[n] = null, this._paramOrder[e] = n
            }
        }, this), this._canEnter = r.canEnter, this._canEnter && t.Assert.assertFunctionOrNull(this._canEnter), this._enter = r.enter, this._enter && t.Assert.assertFunctionOrNull(this._enter), this._canExit = r.canExit, this._canExit && t.Assert.assertFunctionOrNull(this._canExit), this._exit = r.exit, this._exit && t.Assert.assertFunctionOrNull(this._exit), this._value = r.value, this._label = r.label, this._title = r.title, this._router = n, this.viewModel = void 0, Object.defineProperties(this, {
            id: {
                value: this._id,
                enumerable: !0
            },
            value: {
                get: function() {
                    return this._value
                },
                set: function(t) {
                    this._value = t
                },
                enumerable: !0
            },
            label: {
                get: function() {
                    return this._label
                },
                set: function(t) {
                    this._label = t
                },
                enumerable: !0
            },
            title: {
                get: function() {
                    return this._title
                },
                set: function(t) {
                    this._title = t
                },
                enumerable: !0
            },
            canEnter: {
                get: function() {
                    return this._canEnter
                },
                set: function(t) {
                    this._canEnter = t
                },
                enumerable: !0
            },
            enter: {
                get: function() {
                    return this._enter
                },
                set: function(t) {
                    this._enter = t
                },
                enumerable: !0
            },
            canExit: {
                get: function() {
                    return this._canExit
                },
                set: function(t) {
                    this._canExit = t
                },
                enumerable: !0
            },
            exit: {
                get: function() {
                    return this._exit
                },
                set: function(t) {
                    this._exit = t
                },
                enumerable: !0
            },
            parameters: {
                get: function() {
                    return this._parameters
                },
                enumerable: !0
            }
        })
    }, t.RouterState.prototype.go = function() {
        return this._router ? this._router.go(this._id) : (t.Router._transitionedToState.dispatch({
            hasChanged: !1
        }), Promise.reject(new Error("Router is not defined for this RouterState object.")))
    }, t.RouterState.prototype.isCurrent = function() {
        if (!this._router) throw new Error("Router is not defined for this RouterState object.");
        return this._router._stateId() === this._id
    }, s
});
//# sourceMappingURL=ojrouter.js.map