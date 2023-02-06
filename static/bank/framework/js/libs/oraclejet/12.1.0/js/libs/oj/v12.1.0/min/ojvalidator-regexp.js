/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore", "ojs/ojtranslation", "ojs/ojvalidator", "ojs/ojvalidation-error"], function(t, o, e, a) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    const i = function(t) {
        this.Init(t)
    };
    return t.Object.createSubclass(i, e, "oj.RegExpValidator"), i._BUNDLE_KEY_DETAIL = "oj-validator.regExp.detail", i._BUNDLE_KEY_SUMMARY = "oj-validator.regExp.summary", i.prototype.Init = function(t) {
        i.superclass.Init.call(this), this._options = t
    }, i.prototype.validate = function(t) {
        var e, i, r, n = this._options && this._options.pattern || "";
        if (null != t && "" !== t) {
            var s = t.toString(),
                l = "^(" + n + ")$",
                p = s.match(l);
            if (null === p || p[0] !== s) {
                this._options && (r = this._options.messageSummary || null, e = this._options.messageDetail || null, i = this._options && this._options.label || "");
                var u = {
                        label: i,
                        pattern: n,
                        value: s
                    },
                    _ = r ? o.applyParameters(r, u) : o.getTranslatedString(this._getSummaryKey(), u),
                    h = e ? o.applyParameters(e, u) : o.getTranslatedString(this._getDetailKey(), u);
                throw new a.ValidatorError(_, h)
            }
        }
    }, i.prototype.getHint = function() {
        var t = null,
            e = {};
        return this._options && this._options.hint && (e = {
            pattern: this._options.pattern
        }, t = o.applyParameters(this._options.hint, e)), t
    }, i.prototype._getSummaryKey = function() {
        return i._BUNDLE_KEY_SUMMARY
    }, i.prototype._getDetailKey = function() {
        return i._BUNDLE_KEY_DETAIL
    }, i
});
//# sourceMappingURL=ojvalidator-regexp.js.map