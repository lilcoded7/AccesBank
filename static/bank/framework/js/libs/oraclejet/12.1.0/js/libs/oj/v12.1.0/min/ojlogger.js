/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports"], function(o) {
    "use strict";
    const n = {
        LEVEL_NONE: 0,
        LEVEL_ERROR: 1,
        LEVEL_WARN: 2,
        LEVEL_INFO: 3,
        LEVEL_LOG: 4,
        _METHOD_ERROR: "error",
        _METHOD_WARN: "warn",
        _METHOD_INFO: "info",
        _METHOD_LOG: "log"
    };
    n._defaultOptions = {
        level: n.LEVEL_ERROR,
        writer: null
    }, n._options = n._defaultOptions, n.error = function(o, t) {
        n._write(n.LEVEL_ERROR, n._METHOD_ERROR, arguments)
    }, n.info = function(o, t) {
        n._write(n.LEVEL_INFO, n._METHOD_INFO, arguments)
    }, n.warn = function(o, t) {
        n._write(n.LEVEL_WARN, n._METHOD_WARN, arguments)
    }, n.log = function(o, t) {
        n._write(n.LEVEL_LOG, n._METHOD_LOG, arguments)
    }, n.option = function(o, t) {
        var i, E, e = {};
        if (0 === arguments.length) {
            for (E = Object.keys(n._options), i = 0; i < E.length; i++) e[E[i]] = n._options[E[i]];
            return e
        }
        if ("string" == typeof o && void 0 === t) return void 0 === n._options[o] ? null : n._options[o];
        if ("string" == typeof o) n._options[o] = t;
        else {
            var _ = o;
            for (E = Object.keys(_), i = 0; i < E.length; i++) n.option(E[i], _[E[i]])
        }
    }, n._write = function(o, t, i) {
        if (!(n.option("level") < o)) {
            var E = n._getWriter();
            if (null != E) {
                if (1 === i.length && i[0] instanceof Function) {
                    var e = i[0]();
                    i = [e]
                }
                E[t] && E[t].apply ? E[t].apply(E, i) : E[t] && (E[t] = Function.prototype.bind.call(E[t], E), n._write(o, t, i))
            }
        }
    }, n._getWriter = function() {
        var o = null;
        return n.option("writer") ? o = n.option("writer") : "undefined" != typeof window && void 0 !== window.console && (o = window.console), o
    };
    const t = n.info,
        i = n.error,
        E = n.warn,
        e = n.log,
        _ = n.option,
        r = n.LEVEL_ERROR,
        L = n.LEVEL_INFO,
        O = n.LEVEL_LOG,
        l = n.LEVEL_NONE,
        f = n.LEVEL_WARN;
    o.LEVEL_ERROR = r, o.LEVEL_INFO = L, o.LEVEL_LOG = O, o.LEVEL_NONE = l, o.LEVEL_WARN = f, o.error = i, o.info = t, o.log = e, o.option = _, o.warn = E, Object.defineProperty(o, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojlogger.js.map