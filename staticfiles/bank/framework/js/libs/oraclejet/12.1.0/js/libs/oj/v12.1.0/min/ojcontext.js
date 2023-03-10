/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojlogger"], function(e, t) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    const s = function(e) {
        this._description = e, this._addedWaitTs = s._getTs(), this._id = this._addedWaitTs.toString(36) + "_" + Math.random().toString(36)
    };
    e._registerLegacyNamespaceProp("BusyState", s), Object.defineProperties(s.prototype, {
        id: {
            get: function() {
                return this._id
            },
            enumerable: !0
        },
        description: {
            get: function() {
                if (this._description) return this._description instanceof Function ? this._description() : this._description.toString()
            },
            enumerable: !0
        }
    }), s.prototype.toString = function() {
        var e = "Busy state: [description=",
            t = this.description;
        return null !== t && (e += t), e += ", elapsed=" + (s._getTs() - this._addedWaitTs) + "]"
    }, s._getTs = function() {
        return window.performance ? window.performance.now() : (new Date).getTime()
    };
    const o = function(e, t) {
        this.Init(e, t)
    };
    let n;

    function i() {
        return n || (n = new Promise(function(e) {
            window.setImmediate(function() {
                n = null, e(!0)
            })
        })), n
    }
    e.Object.createSubclass(o, e.Object, "oj.BusyContext"), e._registerLegacyNamespaceProp("BusyContext", o), o._defaultTimeout = Number.NaN, o.setDefaultTimeout = function(e) {
        isNaN(e) || (o._defaultTimeout = e)
    }, o.prototype.Init = function(e, t) {
        o.superclass.Init.call(this), this._hostNode = e, this._context = t, this._statesMap = new Map, this._mediator = {
            getMasterWhenReadyPromise: function() {
                return this._masterWhenReadyPromise || (this._masterWhenReadyPromise = new Promise(this._captureWhenReadyPromiseResolver.bind(this))), this._masterWhenReadyPromise
            },
            resolveMasterWhenReadyPromise: function() {
                this._masterWhenReadyPromiseResolver && this._masterWhenReadyPromiseResolver(!0), this._masterWhenReadyPromise = null, this._masterWhenReadyPromiseResolver = null, this._masterWhenReadyPromiseRejecter = null
            },
            rejectMasterWhenReadyPromise: function(e) {
                this._masterWhenReadyPromiseRejecter && this._masterWhenReadyPromiseRejecter(e), this._masterWhenReadyPromise = null, this._masterWhenReadyPromiseRejecter = null, this._masterWhenReadyPromiseResolver = null
            },
            getSlaveTimeoutPromise: function(e, t, s) {
                var o, n = new Promise(function(e, n) {
                    o = window.setTimeout(function() {
                        n(t())
                    }, s)
                });
                return this._slaveTimeoutPromiseTimers.push(o), Promise.race([e, n]).finally(this._clearAllSlaveTimeouts.bind(this))
            },
            _clearAllSlaveTimeouts: function() {
                var e = this._slaveTimeoutPromiseTimers;
                this._slaveTimeoutPromiseTimers = [];
                for (var t = 0; t < e.length; t++) window.clearTimeout(e[t]);
                return !0
            },
            _captureWhenReadyPromiseResolver: function(e, t) {
                this._masterWhenReadyPromiseResolver = e, this._masterWhenReadyPromiseRejecter = t
            },
            _slaveTimeoutPromiseTimers: []
        }
    }, o._log = function(e) {
        if (t.option("level") === t.LEVEL_LOG) {
            t.log(">> Busy states: %d", e.size);
            var s = o._values(e);
            s.length > 0 && t.log(s.join("\n"))
        }
    }, o._values = function(e) {
        var t = [];
        return e.forEach(function(e) {
            t.push(e)
        }), t
    }, o.prototype.addBusyState = function(e) {
        t.log("BusyContext.addBusyState: start scope='%s'", this._getDebugScope());
        var n = this._statesMap,
            i = new s(e[o._DESCRIPTION]);
        return t.log(">> " + i), n.set(i.id, i), this._addBusyStateToParent(), t.log("BusyContext.addBusyState: end scope='%s'", this._getDebugScope()), this._removeBusyState.bind(this, i)
    }, o.prototype.dump = function(e) {
        t.info("BusyContext.dump: start scope='%s' %s", this._getDebugScope(), e || "");
        var s = this._statesMap;
        t.info(">> Busy states: %d", s.size);
        var n = o._values(s);
        n.length > 0 && t.info(n.join("\n")), t.info("BusyContext.dump: start scope='%s' %s", this._getDebugScope(), e || "")
    }, o.prototype.getBusyStates = function() {
        var e = this._statesMap;
        return o._values(e)
    }, o.prototype.clear = function() {
        t.log("BusyContext.clear: start scope='%s'", this._getDebugScope());
        for (var e = this._statesMap, s = o._values(e), n = 0; n < s.length; n++) {
            var i = s[n];
            try {
                this._removeBusyState(i)
            } catch (e) {
                t.log("BusyContext.clear: %o", e)
            }
            Object.defineProperty(i, o._OJ_RIP, {
                value: !0,
                enumerable: !1
            })
        }
        t.log("BusyContext.clear: end scope='%s'", this._getDebugScope())
    }, o.prototype.whenReady = function(e) {
        var s = this._getDebugScope();
        t.log("BusyContext.whenReady: start, scope='%s', timeout=%d", s, e);
        var n = this._statesMap,
            r = this._mediator,
            a = i(),
            u = o._BOOTSTRAP_MEDIATOR.whenReady();
        const l = r.getMasterWhenReadyPromise();
        var c = Promise.all([a, u]).then(function() {
            t.log("BusyContext.whenReady: bootstrap mediator ready scope=%s", s);
            try {
                o._deliverThrottledUpdates()
            } catch (e) {
                throw t.error("Fatal exception delivering binding updates: %o", e), e
            }
            return 0 !== n.size || this._waitingOnNextTickBusynessEval || (t.log("BusyContext.whenReady: resolved no busy states scope=%s", s), r.resolveMasterWhenReadyPromise()), t.log("BusyContext.whenReady: busy states returning master scope=%s", s), l
        }.bind(this));
        if (isNaN(e) && !isNaN(o._defaultTimeout) && (e = o._defaultTimeout), !isNaN(e)) {
            c = r.getSlaveTimeoutPromise(c, function() {
                var i, r = "whenReady timeout of " + e + "ms expired ";
                o._log(n);
                var a = o._values(n);
                return (i = o._BOOTSTRAP_MEDIATOR.isReady() ? new Error(r + "with the following busy states: " + a.join(", ")) : new Error(r + 'while the application is loading. Busy state enabled by setting the "window.oj_whenReady = true;" global variable. Application bootstrap busy state is released by calling "oj.Context.getPageContext().getBusyContext().applicationBootstrapComplete();".')).busyStates = a, t.log("BusyContext.whenReady: rejected scope='%s'\n%s", s, i.message), i
            }, e)
        }
        return t.log("BusyContext.whenReady: end scope='%s'", this._getDebugScope()), c
    }, o.prototype.isReady = function() {
        t.log("BusyContext.isReady: start scope='%s'", this._getDebugScope());
        var e = !1;
        if (o._BOOTSTRAP_MEDIATOR.isReady() && !this._waitingOnNextTickBusynessEval) {
            var s = this._statesMap;
            e = 0 === s.size, o._log(s)
        }
        return t.log("BusyContext.isReady: end scope='%s'", this._getDebugScope()), e
    }, o.prototype._removeBusyState = function(e) {
        var s = this._getDebugScope();
        t.log("BusyContext._removeBusyState: start scope='%s'", s);
        var n = this._statesMap;
        if (e[o._OJ_RIP]) t.log("Busy state has been forcefully resolved via clear:\n" + e);
        else {
            if (!n.delete(e.id)) throw new Error("Busy state has already been resolved:\n" + e);
            t.log("BusyContext._removeBusyState: resolving busy state:\n" + e), 0 !== n.size || this._waitingOnNextTickBusynessEval || (this._waitingOnNextTickBusynessEval = !0, i().then(this._evalBusyness.bind(this))), t.log("BusyContext._removeBusyState: end scope='%s'", s)
        }
    }, o.prototype._evalBusyness = function() {
        var e = this._getDebugScope();
        t.log("BusyContext._evalBusyness: begin scope='%s'", e);
        try {
            o._deliverThrottledUpdates()
        } catch (e) {
            return t.error("Fatal exception delivering binding updates: %o", e), this._waitingOnNextTickBusynessEval = !1, void this._rejectWhenReadyPromises(e)
        }
        var s = this._statesMap,
            n = this._mediator;
        this._waitingOnNextTickBusynessEval = !1, 0 === s.size ? (t.log("BusyContext._evalBusyness: resolving whenReady promises"), n.resolveMasterWhenReadyPromise(), this._resolveBusyStateForParent()) : o._log(s), t.log("BusyContext._evalBusyness: end scope='%s'", e)
    }, o.prototype.applicationBootstrapComplete = function() {
        var e = this._getDebugScope();
        t.log("BusyContext.applicationBootstrapComplete: begin scope='%s'", e), o._BOOTSTRAP_MEDIATOR.notifyComplete(), t.log("BusyContext.applicationBootstrapComplete: end scope='%s'", e)
    }, o.prototype._getParentBusyContext = function() {
        var e = this._context.getParentContext();
        return e ? e.getBusyContext() : null
    }, o.prototype._addBusyStateToParent = function() {
        if (!this._parentNotified) {
            this._parentNotified = !0;
            var e = this._getParentBusyContext();
            if (e) {
                var t = {};
                t[o._DESCRIPTION] = this.toString.bind(this), this._parentResolveCallback = e.addBusyState(t)
            }
        }
    }, o.prototype._resolveBusyStateForParent = function() {
        this._parentNotified = !1, this._parentResolveCallback && (this._parentResolveCallback(), this._parentResolveCallback = null)
    }, o.prototype._rejectWhenReadyPromises = function(e) {
        this._mediator.rejectMasterWhenReadyPromise(e);
        const t = this._getParentBusyContext();
        t && (t._rejectWhenReadyPromises(e), this._resolveBusyStateForParent())
    }, o.prototype._getCompoundDescription = function() {
        return "[" + o._values(this._statesMap).join(", ") + "]"
    }, o.prototype._getDebugScope = function() {
        function e(e) {
            var t = "undefined";
            if (e)
                if (e.id && e.id.length > 0) t = "#" + e.id;
                else {
                    t = e.nodeName, e.hasAttribute("data-oj-context") && (t += "[data-oj-context]");
                    var s = e.getAttribute("class");
                    s && (t += "." + s.split(" ").join("."))
                }
            return t
        }
        return this._debugScope || (this._hostNode ? this._debugScope = e(this._hostNode.parentElement) + " > " + e(this._hostNode) : this._debugScope = "page"), this._debugScope
    }, o.prototype.toString = function() {
        var e = "Busy Context: [scope=";
        return e += this._getDebugScope(), e += " states=" + this._getCompoundDescription() + "]"
    }, o._deliverThrottledUpdates = function() {
        e.ComponentBinding && e.ComponentBinding.deliverChanges()
    }, o._DESCRIPTION = "description", o._OJ_RIP = "__ojRip", o._BOOTSTRAP_MEDIATOR = new function() {
        var e, t, s;
        "undefined" != typeof window && (e = window.oj_whenReady), this.whenReady = function() {
            return t || (t = e ? new Promise(function(e) {
                s = e
            }) : Promise.resolve(!0))
        }, this.isReady = function() {
            return !e
        }, this.notifyComplete = function() {
            s ? i().then(function() {
                e = !1, "function" == typeof s && s(!0), s = null
            }) : e = !1
        }
    };
    const r = function(e) {
        this.Init(e)
    };
    return e.Object.createSubclass(r, e.Object, "oj.Context"), r.prototype.Init = function(e) {
        r.superclass.Init.call(this), this._node = e
    }, r.prototype.getParentContext = function() {
        return this._node ? r.getContext(r.getParentElement(this._node)) : null
    }, r.getContext = function(e) {
        for (; e;) {
            var t = e[r._OJ_CONTEXT_INSTANCE];
            if (t) return t;
            if (e.hasAttribute(r._OJ_CONTEXT_ATTRIBUTE)) return t = new r(e), Object.defineProperty(e, r._OJ_CONTEXT_INSTANCE, {
                value: t
            }), t;
            e = r.getParentElement(e)
        }
        return r.getPageContext()
    }, r.getPageContext = function() {
        return r._pageContext || (r._pageContext = new r), r._pageContext
    }, r.prototype.getBusyContext = function() {
        return this._busyContext || (this._busyContext = new o(this._node, this)), this._busyContext
    }, r.setBusyContextDefaultTimeout = function(e) {
        o.setDefaultTimeout(e)
    }, r._OJ_CONTEXT_ATTRIBUTE = "data-oj-context", r._OJ_CONTEXT_INSTANCE = "__ojContextInstance", r._OJ_SURROGATE_ATTR = "data-oj-surrogate-id", r.getParentElement = function(e) {
        if (e && e.hasAttribute(r._OJ_SURROGATE_ATTR)) {
            var t = document.getElementById(e.getAttribute(r._OJ_SURROGATE_ATTR));
            if (t) return t.parentElement
        }
        return e._ojReportBusy || e.parentElement
    }, r
});
//# sourceMappingURL=ojcontext.js.map