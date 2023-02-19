/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojtranslation", "jquery", "ojs/ojconverterutils", "ojs/ojvalidation-error"], function(e, t, r, n, o, a) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
    const i = {
        numeringSystems: {
            latn: "0123456789",
            arab: "٠١٢٣٤٥٦٧٨٩",
            thai: "๐๑๒๓๔๕๖๗๘๙"
        },
        regexTrim: /^\s+|\s+$|\u200f|\u200e/g,
        regexTrimNumber: /\s+|\u200f|\u200e/g,
        regexTrimRightZeros: /0+$/g,
        zeros: ["0", "00", "000"],
        _ISO_DATE_REGEXP: /^[+-]?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}(?::?\d{2})?)?)?$|^T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}(?::?\d{2})?)?$/,
        getLocalTimeZoneOffset: function(e) {
            var t = (e || new Date).getTimezoneOffset();
            return i.getTimeStringFromOffset("Etc/GMT", t, !1, !1)
        },
        dateToLocalIso: function(e) {
            var t = e;
            "number" == typeof t && (t = new Date(t));
            var r = i.padZeros(t.getFullYear(), 4) + "-" + i.padZeros(t.getMonth() + 1, 2) + "-" + i.padZeros(t.getDate(), 2) + "T" + i.padZeros(t.getHours(), 2) + ":" + i.padZeros(t.getMinutes(), 2) + ":" + i.padZeros(t.getSeconds(), 2);
            return t.getMilliseconds() > 0 && (r += "." + i.trimRightZeros(i.padZeros(t.getMilliseconds(), 3))), r
        },
        dateToLocalIsoDateString: function(e) {
            return i.dateToLocalIso(e).split("T")[0]
        },
        partsToIsoString: function(e) {
            var t = i.padZeros(e[0], 4) + "-" + i.padZeros(e[1], 2) + "-" + i.padZeros(e[2], 2) + "T" + i.padZeros(e[3], 2) + ":" + i.padZeros(e[4], 2) + ":" + i.padZeros(e[5], 2);
            return e[6] > 0 && (t += "." + i.trimRightZeros(i.padZeros(e[6], 3))), t
        },
        isoToLocalDate: function(e) {
            return e && "string" == typeof e ? this._isoToLocalDateIgnoreTimezone(e) : null
        },
        _isoToLocalDateIgnoreTimezone: function(e) {
            var t = i._IsoStrParts(e),
                r = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5], t[6]);
            return r.setFullYear(t[0]), r
        },
        _IsoStrParts: function(e) {
            !1 === i._ISO_DATE_REGEXP.test(e) && i._throwInvalidISOStringSyntax(e);
            var t, r = e.split("T"),
                n = e.indexOf("T"),
                o = new Date,
                a = !1,
                s = [o.getFullYear(), o.getMonth() + 1, o.getDate(), 0, 0, 0, 0];
            if ("" !== r[0]) {
                i.startsWith(r[0], "-") && (r[0] = r[0].substr(1), a = !0);
                var u = r[0].split("-");
                for (t = 0; t < u.length; t++) {
                    var l = parseInt(u[t], 10);
                    if (1 === t && (l < 1 || l > 12) && i._throwInvalidISOStringRange(e, "month", l, 1, 12), 2 === t) {
                        var g = i._getDaysInMonth(s[0], s[1] - 1);
                        (l < 1 || l > g) && i._throwInvalidISOStringRange(e, "day", l, 1, g)
                    }
                    s[t] = l
                }
                a && (s[0] = -s[0])
            }
            if (-1 !== n) {
                var d = r[1].split("."),
                    p = d[0].split(":");
                for (t = 0; t < p.length; t++) {
                    var c = parseInt(p[t], 10);
                    0 === t && (c < 0 || c > 24) && i._throwInvalidISOStringRange(e, "hour", c, 0, 24), 1 === t && (c < 0 || c > 59) && i._throwInvalidISOStringRange(e, "minute", c, 0, 59), 2 === t && (c < 0 || c > 59) && i._throwInvalidISOStringRange(e, "second", c, 0, 59), s[3 + t] = c
                }
                2 === d.length && d[1] && (s[6] = parseInt(i.zeroPad(d[1], 3, !1), 10))
            }
            return s
        },
        getISOStrFormatInfo: function(e) {
            var t = {
                    format: null,
                    dateTime: null,
                    timeZone: "",
                    isoStrParts: null
                },
                r = i._ISO_DATE_REGEXP.exec(e);
            if (null === r && i._throwInvalidISOStringSyntax(e), r && void 0 === r[1] && void 0 === r[2]) return t.format = "local", t.dateTime = e, t.isoStrParts = i._IsoStrParts(t.dateTime), t;
            t.timeZone = void 0 !== r[1] ? r[1] : r[2], "Z" === t.timeZone ? t.format = "zulu" : t.format = "offset";
            var n = e.length,
                o = t.timeZone.length;
            return t.dateTime = e.substring(0, n - o), t.isoStrParts = i._IsoStrParts(t.dateTime), t
        },
        getISOStrFormatType: function(e) {
            let t;
            const r = i._ISO_DATE_REGEXP.exec(e);
            if (null === r && i._throwInvalidISOStringSyntax(e), r && void 0 === r[1] && void 0 === r[2]) return t = "local", t;
            return t = "Z" === (void 0 !== r[1] ? r[1] : r[2]) ? "zulu" : "offset", t
        },
        _isLeapYear: function(e) {
            return e % 400 == 0 || e % 100 != 0 && e % 4 == 0
        },
        _getDaysInMonth: function(e, t) {
            switch (t) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 7:
                case 9:
                case 11:
                    return 31;
                case 1:
                    return i._isLeapYear(e) ? 29 : 28;
                default:
                    return 30
            }
        },
        _throwInvalidISOStringRange: function(e, t, r, n, o) {
            var a = new RangeError("The string " + e + " is not a valid ISO 8601 string: " + r + " is out of range.  Enter a value between " + n + " and " + o + " for " + t),
                i = {
                    errorCode: "isoStringOutOfRange",
                    parameterMap: {
                        isoString: e,
                        value: r,
                        minValue: n,
                        maxValue: o,
                        propertyName: t
                    }
                };
            throw a.errorInfo = i, a
        },
        _throwInvalidISOStringSyntax: function(e) {
            var t = new Error("The string " + e + " is not a valid ISO 8601 string syntax."),
                r = {
                    errorCode: "invalidISOString",
                    parameterMap: {
                        isoStr: e
                    }
                };
            throw t.errorInfo = r, t
        },
        trim: function(e) {
            return (e + "").replace(i.regexTrim, "")
        },
        trimRightZeros: function(e) {
            return (e + "").replace(i.regexTrimRightZeros, "")
        },
        trimNumber: function(e) {
            return (e + "").replace(i.regexTrimNumber, "")
        },
        startsWith: function(e, t) {
            return 0 === e.indexOf(t)
        },
        toUpper: function(e) {
            return e.split(" ").join(" ").toUpperCase()
        },
        padZeros: function(e, t) {
            var r = e + "",
                n = !1;
            return e < 0 && (r = r.substr(1), n = !0), t > 1 && r.length < t && (r = (r = i.zeros[t - 2] + r).substr(r.length - t, t)), n && (r = "-" + r), r
        },
        zeroPad: function(e, t, r) {
            for (var n = "" + e, o = n.length; o < t; o += 1) n = r ? "0" + n : n + "0";
            return n
        },
        getTimeStringFromOffset: function(e, t, r, n) {
            var o = r ? t >= 0 : t < 0,
                a = Math.abs(t),
                s = Math.floor(a / 60),
                u = a % 60,
                l = o ? "-" : "+";
            n && (s = i.zeroPad(s, 2, !0));
            var g = e + l + s;
            return (u > 0 || n) && (g += ":" + i.zeroPad(u, 2, !0)), g
        },
        getNumberingSystemKey: function(e, t) {
            if (void 0 === t) return "latn";
            var r = i.getNumberingExtension(t),
                n = "symbols-numberSystem-" + r;
            return void 0 === e.numbers[n] && (r = "latn"), r
        },
        getBCP47Lang: function(e) {
            return e.split("-")[0]
        },
        getBCP47Region: function(e) {
            var t = e.split("-");
            return 3 === t.length ? t[2] : 2 === t.length && 2 === t[1].length ? t[1] : "001"
        },
        getNumberingExtension: function(e) {
            var t = e || "en-US",
                r = t.indexOf("-u-nu-"),
                n = "latn";
            return -1 !== r && (n = t.substr(r + 6, 4)), n
        },
        haveSamePropertiesLength: function(e) {
            return Object.keys(e).length
        },
        getLocaleElementsMainNode: function(e) {
            var t = e.main;
            return t[Object.keys(t)[0]]
        },
        getLocaleElementsMainNodeKey: function(e) {
            var t = e.main;
            return Object.keys(t)[0]
        },
        _toBoolean: function(e) {
            if ("string" == typeof e) switch (e.toLowerCase().trim()) {
                case "true":
                case "1":
                    return !0;
                case "false":
                case "0":
                    return !1;
                default:
                    return e
            }
            return e
        },
        getGetOption: function(e, t) {
            if (void 0 === e) throw new Error("Internal " + t + " error. Default options missing.");
            return function(r, n, o, a) {
                if (void 0 !== e[r]) {
                    var s = e[r];
                    switch (n) {
                        case "boolean":
                            s = i._toBoolean(s);
                            break;
                        case "string":
                            s = String(s);
                            break;
                        case "number":
                            s = Number(s);
                            break;
                        default:
                            throw new Error("Internal error. Wrong value type.")
                    }
                    if (void 0 !== o && -1 === o.indexOf(s)) {
                        for (var u = [], l = 0; l < o.length; l++) u.push(o[l]);
                        var g = "The value '" + e[r] + "' is out of range for '" + t + "' options property '" + r + "'. Valid values: " + u,
                            d = new RangeError(g),
                            p = {
                                errorCode: "optionOutOfRange",
                                parameterMap: {
                                    propertyName: r,
                                    propertyValue: e[r],
                                    propertyValueValid: u,
                                    caller: t
                                }
                            };
                        throw d.errorInfo = p, d
                    }
                    return s
                }
                return a
            }
        },
        matchString: function(e, t, r, n) {
            void 0 === n && (n = {
                sensitivity: "base",
                usage: "sort"
            });
            var o = i.getGetOption(n, "OraI18nUtils.matchString");
            n.usage = o("usage", "string", ["sort", "search"], "sort"), n.sensitivity = o("sensitivity", "string", ["base", "accent", "case", "variant"], "base");
            for (var a = e.length, s = t.length - 1, u = 0; u < a; u++)
                for (var l = 0; l < 3; l++) {
                    var g = a - u;
                    if (g = Math.min(g, s + l), 0 === e.substr(u, g).localeCompare(t, r, n)) return [u, u + (g - 1)]
                }
            return null
        }
    };
    var s = {
        fullYear: {
            pos: 0,
            pad: 4
        },
        month: {
            pos: 1,
            pad: 2
        },
        date: {
            pos: 2,
            pad: 2
        },
        hours: {
            pos: 3,
            pad: 2
        },
        minutes: {
            pos: 4,
            pad: 2
        },
        seconds: {
            pos: 5,
            pad: 2
        },
        milliseconds: {
            pos: 6,
            pad: 3
        },
        timeZone: {
            pos: 7
        }
    };
    i.isoToDate = function(e) {
        return new Date(this._normalizeIsoString(e))
    }, i._copyTimeOver = function(e, t) {
        if (!e || !t) throw new Error("Provided invalid arguments");
        var r = this._normalizeIsoString(t),
            n = e.indexOf("T"),
            o = r.indexOf("T");
        return r.substring(0, o) + (-1 !== n ? e.substring(n) : "T00:00:00.000")
    }, i._clearTime = function(e) {
        return this._dateTime(e, {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        })
    }, i._dateTime = function(e, t, r) {
        if (!e || !t) throw new Error("Invalid argument invocation");
        var o, a, i = null,
            u = s,
            l = this.padZeros,
            g = this._normalizeIsoString(e),
            d = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):?(\d{2})?\.?(\d{3})?(.*)?/.exec(g);
        if (!d) throw new Error("Unable to capture anything");
        if (d = d.slice(1), Array.isArray(t)) {
            i = {};
            for (var p = 0, c = t.length; p < c; p++) {
                var f = t[p];
                if (f in u) {
                    if (a = d[o = u[f].pos], r && "timeZone" === f) throw new Error("Dude you tried to ask timezone to be parsed");
                    if (r) {
                        var m = parseInt(a, 10);
                        i[f] = 1 === o ? m - 1 : m
                    } else i[f] = a
                }
            }
        } else if (n.isPlainObject(t)) {
            for (var v = Object.keys(t), h = 0; h < v.length; h++) {
                var T = v[h],
                    S = u[T];
                o = S.pos, a = t[T], 1 === o && "number" == typeof a && (a += 1), d[o] = S.pad ? l(a, S.pad) : a
            }
            i = d[0] + "-" + d[1] + "-" + d[2] + "T" + d[3] + ":" + d[4] + ":" + d[5] + (d.length > 6 && d[6] ? "." + d[6] + (8 === d.length && d[7] ? d[7] : "") : "")
        }
        return i
    }, i._normalizeIsoString = function(e) {
        if (!e) throw new Error("Provided invalid arguments");
        var t, r = (new Date).toISOString(),
            n = r.substring(0, r.indexOf("T")),
            o = e.indexOf("T"),
            a = -1 === o ? e : e.substring(0, o);
        return (a = a || n) + (-1 !== o ? (t = e.substring(o)).split(":").length > 1 ? t : t + ":00" : "T00:00:00.000")
    }, i.formatString = function(e, t) {
        for (var r = t.length, n = e, o = 0; o < r; o++) {
            var a = "{" + o + "}";
            n = n.replace(a, t[o])
        }
        return n
    }, i.convertISOString = function(e, t) {
        if (e.startsWith("T")) return e;
        var r = e;
        if ("offset" === t) {
            var n = new Date(e).getTimezoneOffset();
            r = e + (n = i.getTimeStringFromOffset("", n, !0, !0))
        } else if ("zulu" === t) {
            var o = i._IsoStrParts(e),
                a = new Date(o[0], o[1] - 1, o[2], o[3], o[4], o[5], o[6]);
            r = i.padZeros(a.getUTCFullYear(), 4) + "-" + i.padZeros(a.getUTCMonth() + 1, 2) + "-" + i.padZeros(a.getUTCDate(), 2) + "T" + i.padZeros(a.getUTCHours(), 2) + ":" + i.padZeros(a.getUTCMinutes(), 2) + ":" + i.padZeros(a.getUTCSeconds(), 2), a.getMilliseconds() > 0 && (r += "." + i.trimRightZeros(i.padZeros(a.getUTCMilliseconds(), 3))), r += "Z"
        }
        return r
    }, i.getInitials = function(e, t) {
        var r, n = 0,
            o = 0;
        if (void 0 !== e && e.length > 0 && (n = e.charCodeAt(0)), n >= 1536 && n <= 1791) return "";
        if (n >= 2304 && n <= 2431) return e.charAt(0);
        if (n >= 3584 && n <= 3711) return e.charAt(0);
        if (n >= 4352 && n <= 4607 || n >= 12592 && n <= 12687 || n >= 43360 && n <= 43391 || n >= 44032 && n <= 55295) return e;
        if (void 0 !== t && t.length > 0 && (n = t.charCodeAt(0)), n >= 11904 && n <= 12255 || n >= 12288 && n <= 12591 || n >= 12688 && n <= 12799 || n >= 13056 && n <= 19903 || n >= 19968 && n <= 40959 || n >= 63744 && n <= 64255) return t;
        if (n >= 55296 && n <= 56319) {
            if (t && t.length < 2) return "";
            if ((o = t.charCodeAt(1)) < 56320 || o > 57343) return "";
            if ((r = 1024 * (n - 55296) + (o - 56320) + 65536) >= 110592 && r <= 110847 || r >= 127488 && r <= 127743 || r >= 131072 && r <= 173791 || r >= 173824 && r <= 177983 || r >= 177984 && r <= 178207 || r >= 178208 && r <= 183983 || r >= 194560 && r <= 195103) return t
        }
        return n = "", o = "", void 0 !== e && e.length > 0 && (n = e.charAt(0).toUpperCase()), void 0 !== t && t.length > 0 && (o = t.charAt(0).toUpperCase()), n + o
    };
    const u = {
        isoToDate: function(e) {
            return i.isoToDate(e)
        },
        isoToLocalDate: function(e) {
            return i.isoToLocalDate(e)
        },
        dateToLocalIso: function(e) {
            return i.dateToLocalIso(e)
        },
        dateToLocalIsoDateString: function(e) {
            return i.dateToLocalIsoDateString(e)
        },
        getLocalTimeZoneOffset: function(e) {
            return i.getLocalTimeZoneOffset(e)
        },
        getConverterInstance: function(e) {
            return o.getConverterInstance(e)
        },
        _minMaxIsoString: function(e, t) {
            if (e) {
                var r = (t = t || this.dateToLocalIso(new Date)).indexOf("T");
                0 === e.indexOf("T") && r > 0 && (e = t.substring(0, r) + e)
            }
            return e
        },
        _getISOStrFormatType: function(e) {
            return i.getISOStrFormatType(e)
        },
        _verifyValueMinMax: function(e, t, r) {
            Object.entries({
                value: e,
                min: t,
                max: r
            }).forEach(([e, t]) => {
                if (t) try {
                    u._getISOStrFormatType(t)
                } catch (t) {
                    throw new Error(`${e} must be an iso string: ${t}`)
                }
            })
        },
        _getTodaysDateIsoStr: function() {
            const e = new Date;
            return i.padZeros(e.getFullYear(), 4) + "-" + i.padZeros(e.getMonth() + 1, 2) + "-" + i.padZeros(e.getDate(), 2)
        },
        _makeIsoDateStringsDateComparable: function(e, t) {
            const r = e.startsWith("T"),
                n = t.startsWith("T"),
                o = !e.includes("T"),
                a = !t.includes("T");
            let i = e,
                s = t;
            if (r || n) {
                const o = u._getTodaysDateIsoStr();
                r && (i = o + e), n && (s = o + t)
            }
            return o && a || (o && (i = e + "T00:00:00"), a && (s = t + "T00:00:00")), [i, s]
        },
        _compareISODates: function(e, t) {
            const r = u._makeIsoDateStringsDateComparable(e, t);
            return new Date(r[0]) - new Date(r[1])
        },
        __getConverterOptionError: function(e, n) {
            t.Assert.assertObject(n);
            var o, i = "",
                s = "",
                l = n.propertyName;
            if ("optionTypesMismatch" === e) {
                var g = n.requiredPropertyName;
                o = n.requiredPropertyValueValid, i = r.getTranslatedString("oj-converter.optionTypesMismatch.summary", {
                    propertyName: l,
                    propertyValue: n.propertyValue,
                    requiredPropertyName: g
                }), s = u._getOptionValueDetailMessage(g, o)
            } else "optionTypeInvalid" === e ? (l = n.propertyName, o = n.propertyValueValid, i = r.getTranslatedString("oj-converter.optionTypeInvalid.summary", {
                propertyName: l
            }), s = u._getOptionValueDetailMessage(l, o)) : "optionOutOfRange" === e ? (i = r.getTranslatedString("oj-converter.optionOutOfRange.summary", {
                propertyName: l,
                propertyValue: n.propertyValue
            }), o = n.propertyValueValid, s = u._getOptionValueDetailMessage(l, o)) : "optionValueInvalid" === e && (i = r.getTranslatedString("oj-converter.optionValueInvalid.summary", {
                propertyName: l,
                propertyValue: n.propertyValue
            }), o = n.propertyValueHint, s = u._getOptionValueDetailMessage(l, o));
            return new a.ConverterError(i, s)
        },
        __getConverterError: function(e, t) {
            return new a.ConverterError(e, t)
        },
        _getOptionValueDetailMessage: function(e, t) {
            var n;
            return t ? ("string" == typeof t ? n = "oj-converter.optionHint.detail" : (n = "oj-converter.optionHint.detail-plural", t = t.join(r.getTranslatedString("oj-converter.plural-separator"))), r.getTranslatedString(n, {
                propertyName: e,
                propertyValueValid: t
            })) : ""
        },
        _copyTimeOver: function(e, t) {
            return i._copyTimeOver(e, t)
        },
        _clearTime: function(e) {
            return i._clearTime(e)
        },
        _dateTime: function(e, t, r) {
            return i._dateTime(e, t, r)
        },
        _normalizeIsoString: function(e) {
            return i._normalizeIsoString(e)
        },
        getInitials: function(e, t) {
            return i.getInitials(e, t)
        }
    };
    e.IntlConverterUtils = u, e.OraI18nUtils = i, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojconverterutils-i18n.js.map