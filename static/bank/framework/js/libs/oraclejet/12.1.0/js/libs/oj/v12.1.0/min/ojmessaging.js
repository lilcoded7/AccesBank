/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "jquery"], function(t, e) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    const E = function(t, e, E) {
        this.Init(t, e, E)
    };
    t._registerLegacyNamespaceProp("Message", E), E.SEVERITY_TYPE = {
        CONFIRMATION: "confirmation",
        INFO: "info",
        WARNING: "warning",
        ERROR: "error",
        FATAL: "fatal"
    }, E.SEVERITY_LEVEL = {
        FATAL: 5,
        ERROR: 4,
        WARNING: 3,
        INFO: 2,
        CONFIRMATION: 1
    }, t.Object.createSubclass(E, t.Object, "Message"), E.prototype.Init = function(t, e, n) {
        E.superclass.Init.call(this), this.summary = t, this.detail = e, this.severity = n || E.SEVERITY_TYPE.ERROR
    }, E.getSeverityLevel = function(t) {
        var e = t;
        if (e)
            if ("string" == typeof t) {
                var n = E._LEVEL_TO_TYPE.indexOf(e, 1);
                e = -1 === n ? E.SEVERITY_LEVEL.ERROR : n
            } else "number" == typeof e && (e < E.SEVERITY_LEVEL.CONFIRMATION || e > E.SEVERITY_LEVEL.FATAL) && (e = E.SEVERITY_LEVEL.ERROR);
        return e || E.SEVERITY_LEVEL.ERROR
    }, E.getSeverityType = function(t) {
        var e = t;
        e && ("string" == typeof e ? -1 === E._LEVEL_TO_TYPE.indexOf(e, 1) && (e = E.SEVERITY_TYPE.ERROR) : "number" == typeof e && (e = e < E.SEVERITY_LEVEL.CONFIRMATION || e > E.SEVERITY_LEVEL.FATAL ? E.SEVERITY_TYPE.ERROR : E._LEVEL_TO_TYPE[t]));
        return e || E.SEVERITY_TYPE.ERROR
    }, E.getMaxSeverity = function(t) {
        var n = -1;
        return t && t.length > 0 && e.each(t, function(t, e) {
            var i = E.getSeverityLevel(e.severity);
            n = n < i ? i : n
        }), n
    }, E.isValid = function(t) {
        return !(E.getMaxSeverity(t) >= E.SEVERITY_LEVEL.ERROR)
    }, E._LEVEL_TO_TYPE = ["none", E.SEVERITY_TYPE.CONFIRMATION, E.SEVERITY_TYPE.INFO, E.SEVERITY_TYPE.WARNING, E.SEVERITY_TYPE.ERROR, E.SEVERITY_TYPE.FATAL];
    const n = function(t, e, E, n) {
        this.Init(t, e, E, n)
    };
    return t.Object.createSubclass(n, E, "ComponentMessage"), n._DEFAULT_OPTIONS = {
        display: (n.DISPLAY = {
            SHOWN: "shown",
            HIDDEN: "hidden"
        }).SHOWN,
        context: ""
    }, n.prototype.Init = function(t, E, i, o) {
        n.superclass.Init.call(this, t, E, i), this._options = e.extend({}, n._DEFAULT_OPTIONS, o)
    }, n.prototype.clone = function() {
        return new n(this.summary, this.detail, this.severity, this._options)
    }, n.prototype.canDisplay = function() {
        return !(this._options && this._options.display && this._options.display === n.DISPLAY.HIDDEN)
    }, n.prototype._forceDisplayToShown = function() {
        return !(!this._options || n.DISPLAY.HIDDEN !== this._options.display) && (this._options.display = n.DISPLAY.SHOWN, !0)
    }, n.prototype._isMessageAddedByComponent = function() {
        return !(!this._options || !this._options.context)
    }, E.ComponentMessage = n, E
});
//# sourceMappingURL=ojmessaging.js.map