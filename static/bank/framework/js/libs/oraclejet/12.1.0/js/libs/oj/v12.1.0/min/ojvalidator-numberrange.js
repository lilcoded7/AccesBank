/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore", "ojs/ojtranslation", "ojs/ojvalidator", "ojs/ojvalidation-error", "ojs/ojconverterutils"], function(e, a, t, r, n) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    const l = function(e) {
        this.Init(e)
    };
    return e.Object.createSubclass(l, t, "oj.NumberRangeValidator"), l.prototype.Init = function(e) {
        l.superclass.Init.call(this), e && (this._min = e.min, this._max = e.max, this._converter = n.getConverterInstance(e.converter), this._hint = e.hint || {}, this._customMessageSummary = e.messageSummary || {}, this._customMessageDetail = e.messageDetail || {})
    }, l.prototype.validate = function(e) {
        var t = e ? e.toString() : e,
            n = parseFloat(t),
            l = this._customMessageSummary,
            i = this._customMessageDetail,
            o = i.rangeOverflow,
            s = i.rangeUnderflow,
            m = i.exact,
            u = l.rangeOverflow,
            g = l.rangeUnderflow,
            d = void 0 !== this._min ? parseFloat(this._min) : null,
            v = void 0 !== this._max ? parseFloat(this._max) : null,
            c = "",
            h = "",
            p = null,
            f = a;
        if (null !== e) {
            if (null !== d && null !== v) {
                if (n >= d && n <= v || d > v) return
            } else if (null !== d) {
                if (n >= d) return
            } else if (null === v || n <= v) return;
            var j = function(a, t) {
                return null !== v && null !== d && d === v ? (p = {
                    value: e,
                    num: t
                }, h = m ? f.applyParameters(m, p) : f.getTranslatedString("oj-validator.range.number.messageDetail.exact", p), n > v ? c = u || f.getTranslatedString("oj-validator.range.number.messageSummary.rangeOverflow") : n < d && (c = u ? g : f.getTranslatedString("oj-validator.range.number.messageSummary.rangeUnderflow"))) : null !== v && n > v ? (p = {
                    value: e,
                    max: t
                }, c = u || f.getTranslatedString("oj-validator.range.number.messageSummary.rangeOverflow"), h = o ? f.applyParameters(o, p) : f.getTranslatedString("oj-validator.range.number.messageDetail.rangeOverflow", p)) : (p = {
                    value: e,
                    min: a
                }, c = g || f.getTranslatedString("oj-validator.range.number.messageSummary.rangeUnderflow"), h = s ? f.applyParameters(s, p) : f.getTranslatedString("oj-validator.range.number.messageDetail.rangeUnderflow", p)), [c, h]
            }(d && this._converter ? this._converter.format(d) : d, v && this._converter ? this._converter.format(v) : v);
            throw new r.ValidatorError(j[0], j[1])
        }
    }, l.prototype.getHint = function() {
        var e = this._hint,
            t = e.inRange,
            r = e.exact,
            n = e.min,
            l = e.max,
            i = a,
            o = void 0 !== this._min ? parseFloat(this._min) : null,
            s = void 0 !== this._max ? parseFloat(this._max) : null;
        return function(e, a) {
            var m = null;
            return null !== o && null !== s ? m = o !== s ? t ? i.applyParameters(t, {
                min: e,
                max: a
            }) : i.getTranslatedString("oj-validator.range.number.hint.inRange", {
                min: e,
                max: a
            }) : r ? i.applyParameters(r, {
                num: e
            }) : i.getTranslatedString("oj-validator.range.number.hint.exact", {
                num: e
            }) : null !== o ? m = n ? i.applyParameters(n, {
                min: e
            }) : i.getTranslatedString("oj-validator.range.number.hint.min", {
                min: e
            }) : null !== s && (m = l ? i.applyParameters(l, {
                max: a
            }) : i.getTranslatedString("oj-validator.range.number.hint.max", {
                max: a
            })), m
        }(o && this._converter ? this._converter.format(o) : o, s && this._converter ? this._converter.format(s) : s)
    }, l
});
//# sourceMappingURL=ojvalidator-numberrange.js.map