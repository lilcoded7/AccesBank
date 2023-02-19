/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore", "ojs/ojtranslation", "ojs/ojvalidator", "ojs/ojvalidation-error", "ojs/ojconverter-datetime", "ojs/ojconverterutils-i18n", "ojs/ojconverterutils"], function(t, e, a, r, n, o, i) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    const s = function(t) {
        this.Init(t)
    };
    return t.Object.createSubclass(s, a, "oj.DateTimeRangeValidator"), s.prototype.Init = function(t) {
        if (s.superclass.Init.call(this), this._converter = i.getConverterInstance(t.converter), this._converter || (this._converter = new n.IntlDateTimeConverter), !this._converter) throw new Error("oj.DateTimeRangeValidator missing a converter option");
        this._min = t.min || null, this._max = t.max || null, this._translationKey = t.translationKey || "datetime", t && (this._hint = t.hint || {}, this._customMessageSummary = t.messageSummary || {}, this._customMessageDetail = t.messageDetail || {}), e.getTranslatedString("oj-validator.range." + this._translationKey + ".messageSummary.rangeOverflow") || (this._translationKey = "datetime")
    }, s.prototype.validate = function(t) {
        var a, n, i = this,
            s = this._customMessageSummary,
            l = this._customMessageDetail,
            m = l.rangeOverflow,
            g = l.rangeUnderflow,
            u = s.rangeOverflow,
            c = s.rangeUnderflow,
            h = o.IntlConverterUtils,
            v = this._min,
            _ = this._max,
            d = "",
            f = "",
            p = e,
            y = null;
        if (null !== t) {
            try {
                ! function(e) {
                    if (v && (v = h._minMaxIsoString(v, t), a = e ? e.format(v) : v), _ && (_ = h._minMaxIsoString(_, t), n = e ? e.format(_) : _), null !== v && null !== _) {
                        if (h._compareISODates(t, v) >= 0 && h._compareISODates(t, _) <= 0 || h._compareISODates(v, _) > 0) return t
                    } else if (null !== v) {
                        if (h._compareISODates(t, v) >= 0) return t
                    } else if (null === _ || h._compareISODates(t, _) <= 0) return t;
                    throw new Error
                }(this._converter)
            } catch (e) {
                var j = function(e) {
                    return null !== _ && o.IntlConverterUtils._compareISODates(t, _) > 0 ? (y = {
                        value: e,
                        max: n
                    }, d = u || p.getTranslatedString("oj-validator.range." + i._translationKey + ".messageSummary.rangeOverflow"), f = m ? p.applyParameters(m, y) : p.getTranslatedString("oj-validator.range." + i._translationKey + ".messageDetail.rangeOverflow", y)) : null !== v && o.IntlConverterUtils._compareISODates(t, v) < 0 && (y = {
                        value: e,
                        min: a
                    }, d = c || p.getTranslatedString("oj-validator.range." + i._translationKey + ".messageSummary.rangeUnderflow"), f = g ? p.applyParameters(g, y) : p.getTranslatedString("oj-validator.range." + i._translationKey + ".messageDetail.rangeUnderflow", y)), [d, f]
                }(t ? this._converter.format(t) : t);
                throw new r.ValidatorError(j[0], j[1])
            }
        }
    }, s.prototype.getHint = function() {
        var t = null,
            a = this._hint,
            r = a.inRange,
            n = a.min,
            o = a.max,
            i = this._min,
            s = this._max,
            l = i && this._converter ? this._converter.format(i) : i,
            m = s && this._converter ? this._converter.format(s) : s,
            g = null,
            u = e;
        return null !== i && null !== s ? (g = {
            min: l,
            max: m
        }, t = r ? u.applyParameters(r, g) : u.getTranslatedString("oj-validator.range." + this._translationKey + ".hint.inRange", g)) : null !== i ? (g = {
            min: l
        }, t = n ? u.applyParameters(n, g) : u.getTranslatedString("oj-validator.range." + this._translationKey + ".hint.min", g)) : null !== s && (g = {
            max: m
        }, t = o ? u.applyParameters(o, g) : u.getTranslatedString("oj-validator.range." + this._translationKey + ".hint.max", g)), t
    }, s
});
//# sourceMappingURL=ojvalidator-datetimerange.js.map