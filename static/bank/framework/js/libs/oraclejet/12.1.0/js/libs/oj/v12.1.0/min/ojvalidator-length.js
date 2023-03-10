/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore", "ojs/ojtranslation", "ojs/ojvalidator", "ojs/ojvalidation-error"], function(t, a, e, n) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    const o = function(t) {
        this.Init(t)
    };
    return o.defaults = {
        countBy: "codeUnit"
    }, t.Object.createSubclass(o, e, "oj.LengthValidator"), o.prototype.Init = function(t) {
        var a = t.countBy;
        if (o.superclass.Init.call(this), this._min = void 0 !== t.min ? parseInt(t.min, 10) : null, this._max = void 0 !== t.max ? parseInt(t.max, 10) : null, isNaN(this._min)) throw new Error("length validator's min option is not a number. min option is " + t.min);
        if (isNaN(this._max)) throw new Error("length validator's max option is not a number. max option is " + t.min);
        if (null !== this._min && this._min < 0) throw new Error("length validator's min option cannot be less than 0. min option is " + t.min);
        if (null !== this._max && this._max < 1) throw new Error("length validator's max option cannot be less than 1. max option is " + t.max);
        this._countBy = void 0 === a ? o.defaults.countBy : a, t && (this._hint = t.hint || {}, this._customMessageSummary = t.messageSummary || {}, this._customMessageDetail = t.messageDetail || {})
    }, o.prototype.getHint = function() {
        var t, e = null,
            n = this._hint,
            o = n.exact,
            i = n.inRange,
            r = n.max,
            s = n.min,
            l = this._max,
            m = this._min,
            h = a;
        return null !== m && null !== l ? m !== l ? (t = {
            min: m,
            max: l
        }, e = i ? h.applyParameters(i, t) : h.getTranslatedString("oj-validator.length.hint.inRange", t)) : (t = {
            length: m
        }, e = o ? h.applyParameters(o, t) : h.getTranslatedString("oj-validator.length.hint.exact", t)) : null !== m ? (t = {
            min: m
        }, e = s ? h.applyParameters(s, t) : h.getTranslatedString("oj-validator.length.hint.min", t)) : null !== l && (t = {
            max: l
        }, e = r ? h.applyParameters(r, t) : h.getTranslatedString("oj-validator.length.hint.max", t)), e
    }, o.prototype.validate = function(t) {
        var e, o = this._customMessageDetail,
            i = this._customMessageSummary,
            r = "",
            s = this._max,
            l = i.tooLong,
            m = i.tooShort,
            h = o.tooLong,
            g = o.tooShort,
            u = this._min,
            p = "",
            d = a,
            c = "" + t,
            v = this._getLength(c);
        if (!(null === u || v >= this._min) || !(null === s || v <= this._max)) throw v < this._min ? (e = {
            value: t,
            min: u
        }, p = m ? d.applyParameters(m, e) : d.getTranslatedString("oj-validator.length.messageSummary.tooShort"), r = g ? d.applyParameters(g, e) : d.getTranslatedString("oj-validator.length.messageDetail.tooShort", e)) : (e = {
            value: t,
            max: s
        }, p = l ? d.applyParameters(l, e) : d.getTranslatedString("oj-validator.length.messageSummary.tooLong"), r = h ? d.applyParameters(h, e) : d.getTranslatedString("oj-validator.length.messageDetail.tooLong", e)), new n.ValidatorError(p, r)
    }, o.prototype._getLength = function(a) {
        var e, n = this._countBy.toLowerCase(),
            o = a.length,
            i = 0;
        switch (n) {
            case "codepoint":
                for (var r = 0; r < o; r++) 55296 == (63488 & a.charCodeAt(r)) && (i += 1);
                t.Assert.assert(i % 2 == 0, "the number of surrogate chars must be an even number."), e = o - i / 2;
                break;
            case "codeunit":
            default:
                e = o
        }
        return e
    }, o
});
//# sourceMappingURL=ojvalidator-length.js.map