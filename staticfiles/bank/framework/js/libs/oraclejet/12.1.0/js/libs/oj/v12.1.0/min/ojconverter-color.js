/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojtranslation", "ojs/ojconverter", "ojs/ojvalidation-error"], function(t, r, o, n) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
    const a = function(t) {
        this.Init(t)
    };
    return t.Object.createSubclass(a, o, "oj.ColorConverter"), a.prototype.Init = function(t) {
        (t = t || {}).format = t.format || "rgb", a.superclass.Init.call(this, t)
    }, a.prototype.format = function(t) {
        var r = this._getFormat(),
            o = null;
        return "rgb" === r ? o = t.toString() : "hsl" === r ? o = a._toHslString(t) : "hex" === r ? o = a._toHexString(t) : "hex3" === r ? o = a._toHexString(t, !0) : "hsv" === r ? o = a._toHsvString(t) : a._throwInvalidColorFormatOption(), o || a.superclass.format.call(this, t)
    }, a.prototype.parse = function(r) {
        try {
            return new t.Color(r)
        } catch (t) {
            throw a._throwInvalidColorSyntax()
        }
    }, a.prototype.getHint = function() {
        return this._getFormat()
    }, a.prototype.resolvedOptions = function() {
        return {
            format: this._getFormat()
        }
    }, a.prototype.getOptions = function() {
        return a.superclass.getOptions.call(this)
    }, a.prototype._getFormat = function() {
        return a.superclass.getOptions.call(this).format
    }, a._toHexString = function(t, r) {
        return "#" + a._toHex(t, r)
    }, a._toHslString = function(t) {
        var r = a._rgbToHsl(t._r, t._g, t._b),
            o = Math.round(360 * r.h),
            n = Math.round(100 * r.s),
            e = Math.round(100 * r.l);
        return 1 === t._a ? "hsl(" + o + ", " + n + "%, " + e + "%)" : "hsla(" + o + ", " + n + "%, " + e + "%, " + t._a + ")"
    }, a._toHex = function(t, r) {
        return a._rgbToHex(t._r, t._g, t._b, r)
    }, a._toHsvString = function(t) {
        var r = a._rgbToHsv(t._r, t._g, t._b),
            o = Math.round(360 * r.h),
            n = Math.round(100 * r.s),
            e = Math.round(100 * r.v);
        return 1 === t._a ? "hsv(" + o + ", " + n + "%, " + e + "%)" : "hsva(" + o + ", " + n + "%, " + e + "%, " + t._a + ")"
    }, a._rgbToHex = function(t, r, o, n) {
        var e = [a._pad2(Math.round(t).toString(16)), a._pad2(Math.round(r).toString(16)), a._pad2(Math.round(o).toString(16))];
        return n && e[0].charAt(0) === e[0].charAt(1) && e[1].charAt(0) === e[1].charAt(1) && e[2].charAt(0) === e[2].charAt(1) ? e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0) : e.join("")
    }, a._rgbToHsl = function(t, r, o) {
        t = a._bound01(t, 255), r = a._bound01(r, 255), o = a._bound01(o, 255);
        var n, e, i = Math.max(t, r, o),
            s = Math.min(t, r, o),
            c = (i + s) / 2;
        if (i === s) n = 0, e = 0;
        else {
            var u = i - s;
            switch (e = c > .5 ? u / (2 - i - s) : u / (i + s), i) {
                case t:
                    n = (r - o) / u + (r < o ? 6 : 0);
                    break;
                case r:
                    n = (o - t) / u + 2;
                    break;
                case o:
                    n = (t - r) / u + 4
            }
            n /= 6
        }
        return {
            h: n,
            s: e,
            l: c
        }
    }, a._rgbToHsv = function(t, r, o) {
        t = a._bound01(t, 255), r = a._bound01(r, 255), o = a._bound01(o, 255);
        var n, e = Math.max(t, r, o),
            i = Math.min(t, r, o),
            s = e,
            c = e - i,
            u = 0 === e ? 0 : c / e;
        if (e === i) n = 0;
        else {
            switch (e) {
                case t:
                    n = (r - o) / c + (r < o ? 6 : 0);
                    break;
                case r:
                    n = (o - t) / c + 2;
                    break;
                case o:
                    n = (t - r) / c + 4
            }
            n /= 6
        }
        return {
            h: n,
            s: u,
            v: s
        }
    }, a._bound01 = function(t, r) {
        a._isOnePointZero(t) && (t = "100%");
        var o = a._isPercentage(t);
        return t = Math.min(r, Math.max(0, parseFloat(t))), o && (t = parseInt(t * r, 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : t % r / parseFloat(r)
    }, a._isOnePointZero = function(t) {
        return "string" == typeof t && -1 !== t.indexOf(".") && 1 === parseFloat(t)
    }, a._isPercentage = function(t) {
        return "string" == typeof t && -1 !== t.indexOf("%")
    }, a._pad2 = function(t) {
        return 1 === t.length ? "0" + t : "" + t
    }, a._throwInvalidColorSyntax = function() {
        var t = r.getTranslatedString("oj-converter.color.invalidSyntax.summary"),
            o = r.getTranslatedString("oj-converter.color.invalidSyntax.detail");
        throw new n.ConverterError(t, o)
    }, a._throwInvalidColorFormatOption = function() {
        var t = r.getTranslatedString("oj-converter.color.invalidFormat.summary"),
            o = r.getTranslatedString("oj-converter.color.invalidFormat.detail");
        throw new n.ConverterError(t, o)
    }, a
});
//# sourceMappingURL=ojconverter-color.js.map