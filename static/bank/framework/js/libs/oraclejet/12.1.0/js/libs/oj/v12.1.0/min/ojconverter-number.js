/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojlogger", "ojs/ojconverterutils-i18n", "ojs/ojlocaledata", "ojs/ojconverter", "ojs/ojtranslation", "ojs/ojconfig", "ojs/ojcore-base", "ojs/ojvalidation-error"], function(e, r, t, n, i, a, o, s, u) {
    "use strict";
    i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
    const l = function() {
            var e, n = /^[+-]?infinity$/i,
                i = /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,
                a = /([^+-.0-9]*)([+-]?\d*\.?\d*(E[+-]?\d+)?).*$/,
                o = /([\^$.*+?|\[\](){}])/g,
                s = /(^0\.0*)([^0].*$)/,
                u = /^0+$/,
                l = {
                    trillion: [1e14, 1e13, 1e12],
                    billion: [1e11, 1e10, 1e9],
                    million: [1e8, 1e7, 1e6],
                    thousand: [1e5, 1e4, 1e3]
                },
                c = {
                    trillion: 1e12,
                    billion: 1e9,
                    million: 1e6,
                    thousand: 1e3
                },
                m = {
                    HALF_UP: "ceil",
                    CEILING: "ceil",
                    UP: "ceil",
                    HALF_DOWN: "floor",
                    FLOOR: "floor",
                    DOWN: "floor",
                    DEFAULT: "round"
                };

            function p(e, r, t) {
                var n;
                for (n = e.length; n < r; n += 1) e = t ? "0" + e : e + "0";
                return e
            }

            function g(e, r, t, n, i) {
                var a = e[r];
                return void 0 !== a ? (a = Number(a), (isNaN(a) || a < t || a > n) && function(e, r, t, n) {
                    var i = new RangeError(e + " is out of range.  Enter a value between " + r + " and " + t + " for " + n),
                        a = {
                            errorCode: "numberOptionOutOfRange",
                            parameterMap: {
                                value: e,
                                minValue: r,
                                maxValue: t,
                                propertyName: n
                            }
                        };
                    throw i.errorInfo = a, i
                }(a, t, n, r), Math.floor(a)) : i
            }

            function v(e) {
                var r = e || "en-US",
                    t = r.indexOf("-u-nu-"),
                    n = "latn";
                return -1 !== t && (n = r.substr(t + 6, 4)), n
            }

            function d(e, n, i, a) {
                var o, s = n,
                    u = t.OraI18nUtils.getLocaleElementsMainNode(e),
                    l = function(e, r) {
                        if (void 0 === r) return "latn";
                        var t = v(r),
                            n = "symbols-numberSystem-" + t;
                        return void 0 === e.numbers[n] && (t = "latn"), t
                    }(u, a);
                s.numberingSystemKey = l, s.numberingSystem = "symbols-numberSystem-" + l;
                var c = i.lenientParse;
                if (s.lenientParse = c || "full", s.style = i.style, void 0 !== i.pattern && i.pattern.length > 0) o = i.pattern;
                else {
                    var m;
                    switch (s.style) {
                        case "decimal":
                            m = "decimalFormats-numberSystem-";
                            break;
                        case "currency":
                            m = "currencyFormats-numberSystem-";
                            break;
                        case "percent":
                            m = "percentFormats-numberSystem-";
                            break;
                        default:
                            m = "decimalFormats-numberSystem-"
                    }
                    m += s.numberingSystemKey, o = u.numbers[m].standard
                }
                var p = i.decimalFormat;
                void 0 === p && (p = i.currencyFormat), void 0 === p || "decimal" !== s.style && "currency" !== s.style || (s.shortDecimalFormat = u.numbers["decimalFormats-numberSystem-latn"][p].decimalFormat);
                var d = u.numbers[s.numberingSystem].decimal,
                    y = u.numbers[s.numberingSystem].group,
                    h = i.separators;
                if (void 0 !== h) {
                    s.separators = h;
                    var b = h.decimal,
                        F = h.group;
                    void 0 !== b && "" !== b && (d = h.decimal), void 0 !== F && (y = h.group)
                }
                var S = t.OraI18nUtils.getLocaleElementsMainNodeKey(e),
                    x = S.split("-")[0];
                if (s.lang = x, s.pat = o, s.minusSign = u.numbers[s.numberingSystem].minusSign, s.decimalSeparator = d, s.exponential = u.numbers[s.numberingSystem].exponential, s.groupingSeparator = y, s.currencyDisplay = i.currencyDisplay, void 0 !== i.currency && (s.currencyCode = i.currency.toUpperCase()), void 0 !== i.unit && (s.unit = i.unit.toLowerCase()), function(e, r, t, n) {
                        for (var i, a = n, o = !1, s = !1, u = 0, l = 0, c = !0, m = 1; m >= 0 && l < r.length; --m) {
                            var p = !1,
                                g = "",
                                v = "",
                                d = -1,
                                y = 1,
                                h = 0,
                                b = 0,
                                F = 0,
                                S = -1,
                                x = -1,
                                D = 0;
                            c = !0;
                            for (var O = l; O < r.length; ++O) {
                                var P = r.charAt(O);
                                switch (D) {
                                    case 0:
                                    case 2:
                                        if (p) {
                                            if ("'" === P) {
                                                O + 1 < r.length && "'" === r.charAt(O + 1) ? (O += 1, c ? g = g.concat("''") : v = v.concat("''")) : p = !1;
                                                continue
                                            }
                                        } else {
                                            if ("#" === P || "0" === P || "," === P || "." === P) {
                                                D = 1, O -= 1;
                                                continue
                                            }
                                            if ("¤" === P) {
                                                void 0 === e.currency && f("style"), a.style = "currency";
                                                var j = O + 1 < r.length && "¤" === r.charAt(O + 1);
                                                j && (O += 1), c ? g = g.concat(j ? "'¤¤" : "'¤") : v = v.concat(j ? "'¤¤" : "'¤");
                                                continue
                                            }
                                            if ("'" === P) {
                                                if ("'" === P) {
                                                    O + 1 < r.length && "'" === r.charAt(O + 1) ? (O += 1, c ? g = g.concat("''") : v = v.concat("''")) : p = !0;
                                                    continue
                                                }
                                            } else {
                                                if (";" === P) {
                                                    0 !== D && 0 !== m || M(r), l = O + 1, O = r.length;
                                                    continue
                                                }
                                                if ("%" === P) {
                                                    a.style = "percent", 1 !== y && M(r), a.isPercent = !0, y = 100, c ? g = g.concat("'%") : v = v.concat("'%");
                                                    continue
                                                }
                                                if ("‰" === P) {
                                                    1 !== y && M(r), a.style = "perMill", a.isPerMill = !0, y = 1e3, c ? g = g.concat("'‰") : v = v.concat("'‰");
                                                    continue
                                                }
                                                if ("-" === P) {
                                                    c ? g = g.concat("'-") : v = v.concat("'-");
                                                    continue
                                                }
                                            }
                                        }
                                        c ? g = g.concat(P) : v = v.concat(P);
                                        break;
                                    case 1:
                                        if (1 !== m) {
                                            0 === (u -= 1) && (D = 2, c = !1);
                                            continue
                                        }
                                        if (u += 1, "#" === P) b > 0 ? F += 1 : h += 1, S >= 0 && d < 0 && (S += 1);
                                        else if ("0" === P) F > 0 && M(r), b += 1, S >= 0 && d < 0 && (S += 1);
                                        else if ("," === P) x = S, S = 0;
                                        else {
                                            if ("." !== P) {
                                                if (A = O, T = "E", $ = void 0, void 0, $ = r.substr(A, T.length), null !== new RegExp(T, "i").exec($)) {
                                                    for (s && M(r), s = !0, i = 0, O += "E".length; O < r.length && "0" === r.charAt(O);) i += 1, u += 1, O += 1;
                                                    (h + b < 1 || i < 1) && M(r), D = 2, c = !1, O -= 1;
                                                    continue
                                                }
                                                D = 2, c = !1, O -= 1, u -= 1;
                                                continue
                                            }
                                            d >= 0 && M(r), d = h + b + F
                                        }
                                }
                            }
                            if (0 === b && h > 0 && d >= 0) {
                                var _ = d;
                                0 === _ && (_ += 1), F = h - _, h = _ - 1, b = 1
                            }
                            if ((d < 0 && F > 0 || d >= 0 && (d < h || d > h + b) || 0 === S || p) && M(r), 1 === m) {
                                U = I = g, E = N = v;
                                var C = h + b + F,
                                    L = d >= 0 ? d : C;
                                a.minimumIntegerDigits = L - h, a.maximumIntegerDigits = s ? h + a.minimumIntegerDigits : 2147483647, a.maximumFractionDigits = d >= 0 ? C - d : 0, a.minimumFractionDigits = d >= 0 ? h + b - d : 0, a.groupingSize = S > 0 ? S : 0, a.groupingSize0 = x
                            } else U = g, E = v, o = !0
                        }
                        var A, T, $;
                        0 === r.length && (I = "", N = "", a.minimumIntegerDigits = 0, a.maximumIntegerDigits = 2147483647, a.minimumFractionDigits = 0, a.maximumFractionDigits = 2147483647);
                        a.useExponentialNotation = s, a.minExponentDigits = i, (!o || 0 === U.localeCompare(I) && 0 === E.localeCompare(N)) && ("currency" === a.style && "ar" === a.lang ? (E = N + "'‏-", U = I) : (E = N, U = "'-" + I));
                        ! function(e, r) {
                            var t = r,
                                n = {};
                            null !== I && (t.positivePrefix = w(I, e, t, n));
                            null !== N && (t.positiveSuffix = w(N, e, t, n));
                            null !== U && (t.negativePrefix = w(U, e, t, n));
                            null !== E && (t.negativeSuffix = w(E, e, t, n));
                            void 0 !== n.name && (t.positiveSuffix = " " + n.name, t.positivePrefix = "", "ar" === t.lang ? (t.negativeSuffix = e.numbers[t.numberingSystem].minusSign + " " + n.name, t.negativePrefix = "") : (t.negativeSuffix = " " + n.name, t.negativePrefix = e.numbers[t.numberingSystem].minusSign))
                        }(t, a)
                    }(i, o, u, s), void 0 === i.pattern && (s.minimumIntegerDigits = g(i, "minimumIntegerDigits", 1, 21, s.minimumIntegerDigits), void 0 !== i.maximumFractionDigits && (s.maximumFractionDigits = g(i, "maximumFractionDigits", 0, 20, s.maximumFractionDigits), s.maximumFractionDigits < s.minimumFractionDigits && (s.minimumFractionDigits = s.maximumFractionDigits)), void 0 !== i.minimumFractionDigits && (s.minimumFractionDigits = g(i, "minimumFractionDigits", 0, 20, s.minimumFractionDigits)), s.maximumFractionDigits < s.minimumFractionDigits && (s.maximumFractionDigits = s.minimumFractionDigits, r.info("maximumFractionDigits is less than minimumFractionDigits, so maximumFractionDigits will be set to minimumFractionDigits")), "currency" === s.style && void 0 === i.minimumFractionDigits && (void 0 === p || "standard" === p))) {
                    var D = e.supplemental.currencyData.fractions[i.currency];
                    if (void 0 !== D) {
                        var O = parseInt(D._digits, 10);
                        s.minimumFractionDigits = O, s.maximumFractionDigits = O
                    }
                }
            }

            function f(e) {
                var r = new TypeError('The property "currency" is required when the property "' + e + '" is "currency". An accepted value is a three-letter ISO 4217 currency code.'),
                    t = {
                        errorCode: "optionTypesMismatch",
                        parameterMap: {
                            propertyName: e,
                            propertyValue: "currency",
                            requiredPropertyName: "currency",
                            requiredPropertyValueValid: "a three-letter ISO 4217 currency code"
                        }
                    };
                throw r.errorInfo = t, r
            }

            function y(e, r) {
                var n = t.OraI18nUtils.getGetOption(e, r),
                    i = n("style", "string", ["currency", "decimal", "percent", "unit", "perMill"], "decimal");
                if ("decimal" === i || "currency" === i) {
                    var a = "decimal" === i ? "decimalFormat" : "currencyFormat";
                    i = n(a, "string", ["standard", "short", "long"]), "OraNumberConverter.parse" === r && void 0 !== i && "standard" !== i && function(e) {
                        var r = new Error("long and short " + e + " are not supported for parsing"),
                            t = {
                                errorCode: "unsupportedParseFormat",
                                parameterMap: {
                                    shortFormats: e
                                }
                            };
                        throw r.errorInfo = t, r
                    }(a)
                }
                var o = n("currency", "string");
                "currency" === i && void 0 === o && f("style"), o = n("unit", "string"), "unit" === i && void 0 === o && function(e) {
                    var r = new TypeError('The property "unit" is required when the property "' + e + '" is "unit". An accepted value is "byte" or "bit".'),
                        t = {
                            errorCode: "optionTypesMismatch",
                            parameterMap: {
                                propertyName: e,
                                propertyValue: "unit",
                                requiredPropertyName: "unit",
                                requiredPropertyValueValid: "byte or bit"
                            }
                        };
                    throw r.errorInfo = t, r
                }("style"), i = n("roundingMode", "string", ["UP", "DOWN", "FLOOR", "CEILING", "HALF_UP", "HALF_DOWN", "HALF_EVEN"])
            }

            function h(e, r, n) {
                var i = n.groupingSize,
                    a = n.groupingSize0,
                    o = n.decimalSeparator,
                    s = e + "",
                    l = s.split(/e/i),
                    c = l.length > 1 ? parseInt(l[1], 10) : 0,
                    m = (l = (s = l[0]).split(".")).length > 1 ? l[1] : "",
                    g = Math.min(n.maximumFractionDigits, m.length - c);
                l.length > 1 && m.length > c && (e = b(e, g, r.roundingMode || "DEFAULT"));
                c = (l = (s = Math.abs(e) + "").split(/e/i)).length > 1 ? parseInt(l[1], 10) : 0, l = (s = l[0]).split("."), s = l[0], m = l.length > 1 ? l[1] : "", c > 0 ? (s += (m = p(m, c, !1)).slice(0, c), m = m.substr(c)) : c < 0 && (m = (s = p(s, (c = -c) + 1, !0)).slice(-c, s.length) + m, s = s.slice(0, -c)), g > 0 && m.length > 0 ? (m = m.length > g ? m.slice(0, g) : p(m, g, !1), !0 === u.test(m) && (m = m.slice(0, n.minimumFractionDigits)), m = o + m) : m = n.minimumFractionDigits > 0 ? o : "", m = p(m = t.OraI18nUtils.trimRightZeros(m), o.length + n.minimumFractionDigits, !1);
                var v = n.groupingSeparator,
                    d = "";
                !1 === r.useGrouping && void 0 === r.pattern && (v = "");
                var f = (s = p(s, n.minimumIntegerDigits, !0)).length - 1;
                for (m = m.length > 1 ? m : ""; f >= 0;) {
                    if (0 === i || i > f) return s.slice(0, f + 1) + (d.length ? v + d + m : m);
                    d = s.slice(f - i + 1, f + 1) + (d.length ? v + d : ""), f -= i, a > 0 && (i = a)
                }
                return s.slice(0, f + 1) + v + d + m
            }

            function b(e, r, t) {
                var n, i = t,
                    a = function(e) {
                        var r = e.toString(),
                            t = !1;
                        "-" === (r = r.replace("E", "e")).charAt(0) && (t = !0, r = r.substring(1));
                        var n = r.split("e"),
                            i = n[0],
                            a = Number(n[1]);
                        if (a > 0)
                            if ((r = i.substr(0, 1) + i.substr(2)).length - 1 < a)
                                for (var o = a + 1 - r.length; o > 0;) r += "0", o -= 1;
                            else r.length - 1 > a && (r = r.substr(0, a + 1) + "." + r.substr(a + 1));
                        else if (a < 0) {
                            var s = i.substr(0, 1) + i.substr(2);
                            r = "0.";
                            for (var u = a; u < -1; u++) r += "0";
                            r += s
                        }
                        return t && (r = "-" + r), r
                    }(e);
                if (void 0 === (a = a.split("."))[1]) return Math.abs(e);
                if ("DEFAULT" !== t) {
                    if ("HALF_UP" === t || "HALF_EVEN" === t || "HALF_DOWN" === t) {
                        if ("5" === a[1][r]) {
                            var o = a[1].substr(r);
                            (o = parseInt(o, 10)) > 5 && (i = "HALF_UP")
                        } else i = "DEFAULT";
                        e = Math.abs(e)
                    }
                    n = function(e, r, t) {
                        if (0 === r) return Math[t](e);
                        var n = e.toString().split("e"),
                            i = n[0],
                            a = n[1],
                            o = i + "e" + (a ? parseInt(a, 10) - r : -r),
                            s = parseFloat(o),
                            u = Math[t](s);
                        return n = u.toString().split("e"), i = n[0], a = n[1], o = i + "e" + (a ? parseInt(a, 10) + r : r), s = parseFloat(o)
                    }(e, -r, i = function(e, r, t, n) {
                        var i = m[r];
                        if ("HALF_EVEN" === r) {
                            var a;
                            if (0 === t) {
                                var o = e[0].length;
                                a = parseInt(e[0][o - 1], 10)
                            } else a = parseInt(e[1][t - 1], 10);
                            i = a % 2 == 0 ? m.HALF_DOWN : m.HALF_UP
                        } else "UP" === r && n < 0 ? i = m.DOWN : "DOWN" === r && n < 0 && (i = m.UP);
                        return i
                    }(a, i, r, e))
                } else {
                    var s = Math.pow(10, r);
                    if (n = Math.round(e * s) / s, !isFinite(n)) return e
                }
                return Math.abs(n)
            }

            function F(e, r, n, i, a) {
                var o = t.OraI18nUtils.getLocaleElementsMainNode(n);
                if (!isFinite(e)) return e === 1 / 0 || e === -1 / 0 ? o.numbers[i.numberingSystem].infinity : "NaN";
                var u = e;
                !0 === i.isPercent || "percent" === i.style ? u *= 100 : !0 === i.isPerMill && (u *= 1e3);
                var m = r.decimalFormat;
                void 0 === m && (m = r.currencyFormat);
                var g = i.style;
                u = "decimal" !== g && "currency" !== g || void 0 === m || "standard" === m ? !0 === i.useExponentialNotation ? function(e, r) {
                    var t = e + "",
                        n = 0,
                        i = t.split(/e/i),
                        a = i[0];
                    s.lastIndex = 0;
                    var o = s.exec(a);
                    null !== o ? (n = o[1].length - 1, a = o[2]) : a = a.replace(".", "");
                    var u = i.length > 1 ? parseInt(i[1], 10) : 0,
                        l = parseInt(a, 10),
                        c = r.minimumIntegerDigits + r.maximumFractionDigits;
                    if (a.length > c) {
                        c -= a.length;
                        var m = Math.pow(10, c);
                        l = Math.round(l * m)
                    }
                    var g = r.minimumIntegerDigits + r.minimumFractionDigits;
                    l = p(l += "", g, !1), -1 !== t.indexOf(".") ? u -= r.minimumIntegerDigits - t.indexOf(".") + n : u -= g - a.length - r.minimumFractionDigits;
                    var v = Math.abs(u);
                    v = p(v + "", r.minExponentDigits, !0), u < 0 && (v = r.minusSign + v);
                    var d = l.slice(0, r.minimumIntegerDigits);
                    return l.slice(r.minimumIntegerDigits).length > 0 ? d += r.decimalSeparator + l.slice(r.minimumIntegerDigits) + r.exponential + v : d += r.exponential + v, d
                }(u, i) : "unit" === g ? function(e, r, n, i) {
                    var a, o, s = Math.abs(e);
                    s >= 1099511627776 ? (a = "digital-tera", o = s / 1099511627776) : s >= 1073741824 ? (a = "digital-giga", o = s / 1073741824) : s >= 1048576 ? (a = "digital-mega", o = s / 1048576) : s >= 1024 ? (a = "digital-kilo", o = s / 1024) : (a = "digital-", o = s), a += n.unit;
                    var u = n.lang,
                        l = new Intl.PluralRules(u).select(o);
                    l = "unitPattern-count-" + l, e < 0 && (o = -o);
                    var c = h(o, r, n),
                        m = i.units.narrow[a][l];
                    return c = t.OraI18nUtils.formatString(m, [c])
                }(u, r, i, o) : h(u, r, i) : function(e, r, t) {
                    var n, i, a, o = Math.abs(e),
                        s = function(e) {
                            for (var r = Object.keys(l), t = 0; t < r.length; t++)
                                for (var n = r[t], i = l[n].length, a = 0; a < i; a++)
                                    if (l[n][a] <= e) return [n, l[n][a]];
                            return [e, null]
                        }(o),
                        u = "";
                    if (null !== s[1]) {
                        var m = t.lang,
                            p = new Intl.PluralRules(m).select(Math.floor(o / c[s[0]]));
                        if (n = s[1] + "-count-" + p, void 0 === (n = t.shortDecimalFormat[n]) && (p = "other", n = s[1] + "-count-" + p, n = t.shortDecimalFormat[n]), a = (i = function(e) {
                                var r = 0,
                                    t = 0,
                                    n = 0,
                                    i = "";
                                if ("0" !== e[0]) {
                                    for (;
                                        "0" !== e[r] && r < e.length;) r += 1;
                                    i = e.substr(0, r), n = r
                                }
                                for (r = n; r < e.length && "0" === e[r]; r++) t += 1;
                                return [i, t]
                            }(n))[1], u = i[0], a < n.length) {
                            var g = 1 * Math.pow(10, a);
                            o /= g = s[1] / g * 10
                        }
                    }
                    var v = "";
                    return void 0 !== n && (v = n.substr(a + i[0].length)), e < 0 && (o = -o), v = u + h(o, r, t) + (v = v.replace(/'\.'/g, "."))
                }(u, r, i);
                var d = "";
                d += e < 0 && u - 0 != 0 ? i.negativePrefix + u + i.negativeSuffix : i.positivePrefix + u + i.positiveSuffix;
                var f = v(a);
                if (void 0 === t.OraI18nUtils.numeringSystems[f] && (f = "latn"), "latn" !== f) {
                    var y, b = [];
                    for (y = 0; y < d.length; y++) d[y] >= "0" && d[y] <= "9" ? b.push(t.OraI18nUtils.numeringSystems[f][d[y]]) : b.push(d[y]);
                    return b.join("")
                }
                return d
            }

            function S(e, r) {
                var n = r.groupingSeparator,
                    i = r.decimalSeparator,
                    o = r.minusSign,
                    s = "",
                    u = "",
                    l = t.OraI18nUtils.toUpper(r.exponential),
                    c = t.OraI18nUtils.toUpper(e),
                    m = n;
                c = (c = c.split(l).join("E")).split(m).join("");
                var p = m.replace(/\u00A0/g, " ");
                m !== p && (c = c.split(p).join("")), "." === (c = c.split(i).join(".")).charAt(0) && (c = c.substr(1), u = "."), c = c.replace(o, "-");
                var g = u + a.exec(c)[2];
                return t.OraI18nUtils.startsWith(g, "-") ? (g = g.substr("-".length), s = "-") : t.OraI18nUtils.startsWith(c, "+") && (g = g.substr("+".length), s = "+"), [s, g]
            }

            function x(e, r, n, i) {
                return isNaN(e) && D(n.style, n, i), !0 === n.isPercent || "percent" === n.style ? e /= 100 : !0 === n.isPerMill && (e /= 1e3), t.OraI18nUtils.getGetOption(r, "OraNumberConverter.parse")("roundDuringParse", "boolean", [!0, !1], !1) && (e = function(e, r, t) {
                    var n = r.maximumFractionDigits,
                        i = e < 0,
                        a = t.roundingMode || "DEFAULT",
                        o = b(e, n, a);
                    return i ? -o : o
                }(e, n, r)), e
            }

            function D(e, r, t) {
                var n, i = "Enter a number in this format:" + r.pat;
                switch (e) {
                    case "decimal":
                        n = "decimalFormatMismatch";
                        break;
                    case "currency":
                        n = "currencyFormatMismatch";
                        break;
                    case "percent":
                        n = "percentFormatMismatch"
                }
                var a = new Error(i),
                    o = {
                        errorCode: n,
                        parameterMap: {
                            value: t,
                            format: r.pat
                        }
                    };
                throw a.errorInfo = o, a
            }

            function O(e, r, a, s) {
                var u = t.OraI18nUtils.getLocaleElementsMainNode(r),
                    l = {},
                    c = function(e, r) {
                        var n, i = v(r);
                        if (void 0 === t.OraI18nUtils.numeringSystems[i]) return e;
                        var a = [];
                        for (n = 0; n < e.length; n++) {
                            var o = t.OraI18nUtils.numeringSystems[i].indexOf(e[n]); - 1 !== o ? a.push(o) : a.push(e[n])
                        }
                        return a.join("")
                    }(e, s);
                d(r, l, a, s);
                var m = NaN,
                    p = c.replace(/ /g, "");
                if (n.test(p)) return m = parseFloat(c);
                var g = function(e, r, n, i) {
                        var a, s = t.OraI18nUtils.trimNumber(e),
                            u = "",
                            l = !1,
                            c = i.numbers[n.numberingSystem].plusSign,
                            m = new RegExp("^" + c.replace(o, "\\$1"));
                        s = s.replace(m, "");
                        var p = t.OraI18nUtils.trimNumber(n.positivePrefix),
                            g = t.OraI18nUtils.trimNumber(n.positiveSuffix),
                            v = t.OraI18nUtils.trimNumber(n.negativePrefix),
                            d = t.OraI18nUtils.trimNumber(n.negativeSuffix),
                            f = new RegExp("^" + (p || "").replace(o, "\\$1")),
                            y = new RegExp((g || "").replace(o, "\\$1") + "$"),
                            h = new RegExp("^" + (v || "").replace(o, "\\$1")),
                            b = new RegExp((d || "").replace(o, "\\$1") + "$");
                        if (!0 === h.test(s) && !0 === b.test(s)) s = (s = s.replace(h, "")).replace(b, ""), u = "-", l = !0;
                        else if (!0 === f.test(s) && !0 === y.test(s)) s = (s = s.replace(f, "")).replace(y, ""), u = "+", l = !0;
                        else if ("currency" === n.style) {
                            var F, x = n.currencyCode,
                                O = x;
                            if (void 0 !== i.numbers.currencies[x] && (O = i.numbers.currencies[x].symbol), void 0 === n.currencyDisplay || "symbol" === n.currencyDisplay ? F = O : "code" === n.currencyDisplay && (F = x), void 0 !== F) {
                                var I = (p || "").replace(F, ""),
                                    N = (g || "").replace(F, ""),
                                    U = (v || "").replace(F, ""),
                                    E = (d || "").replace(F, "");
                                f = new RegExp(("^" + I).replace(o, "\\$1")), y = new RegExp(N.replace(o, "\\$1") + "$"), h = new RegExp(("^" + U).replace(o, "\\$1")), b = new RegExp(E.replace(o, "\\$1") + "$"), !0 === h.test(s) && !0 === b.test(s) ? (s = (s = s.replace(h, "")).replace(b, ""), u = "-", l = !0) : !0 === f.test(s) && !0 === y.test(s) && (s = (s = s.replace(f, "")).replace(y, ""), u = "+", l = !0)
                            }
                        }
                        return l ? a = [u, s] : "full" === n.lenientParse ? (a = S(s, n))[2] = !0 : D(n.style, n, e), a
                    }(c, 0, l, u),
                    f = g[0],
                    y = g[1];
                if (f = f || "+", g[2]) return x(m = parseFloat(f + y), a, l, e);
                var h = function(e, r) {
                        var n, i, a = {},
                            o = r.decimalSeparator,
                            s = r.groupingSeparator,
                            u = e.replace(/ /g, ""),
                            l = r.exponential,
                            c = u.indexOf(l.toLowerCase());
                        c < 0 && (c = u.indexOf(t.OraI18nUtils.toUpper(l))), c < 0 ? (i = u, a.exponent = null) : (i = u.substr(0, c), a.exponent = u.substr(c + l.length));
                        var m = o,
                            p = i.indexOf(m);
                        p < 0 ? (n = i, a.fraction = null) : (n = i.substr(0, p), a.fraction = i.substr(p + m.length)), n = n.split(s).join("");
                        var g = s.replace(/\u00A0/g, " ");
                        return s !== g && (n = n.split(g).join("")), a.integer = n, a
                    }(y, l),
                    b = h.integer,
                    F = h.fraction,
                    O = h.exponent,
                    I = f + b;
                if (null !== F && (I += "." + F), null !== O) {
                    var N = function(e, r) {
                        var n, i = r.minusSign,
                            a = r.plusSign,
                            o = t.OraI18nUtils.trimNumber(e);
                        return i = t.OraI18nUtils.trimNumber(i), a = t.OraI18nUtils.trimNumber(a), t.OraI18nUtils.startsWith(o, i) ? n = ["-", o.substr(i.length)] : t.OraI18nUtils.startsWith(o, t.OraI18nUtils.trimNumber(a)) && (n = ["+", o.substr(a.length)]), n || ["", o]
                    }(O, l);
                    I += "e" + (N[0] || "+") + N[1]
                }
                return i.test(I) ? m = parseFloat(I) : "full" === l.lenientParse ? (I = S(c, l), m = parseFloat(I[0] + I[1])) : D(l.style, l, e), x(m, a, l, e)
            }
            var I, N, U, E;

            function M(e) {
                var r = new SyntaxError('Unexpected character(s) encountered in the pattern "' + e + ' An example of a valid pattern is "#,##0.###".'),
                    t = {
                        errorCode: "optionValueInvalid",
                        parameterMap: {
                            propertyName: "pattern",
                            propertyValue: e,
                            propertyValueHint: "#,##0.###"
                        }
                    };
                throw r.errorInfo = t, r
            }

            function w(e, r, t, n) {
                for (var i = "", a = 0; a < e.length;) {
                    var o = e.charAt(a);
                    if (a += 1, "'" !== o) {
                        switch (o) {
                            case "¤":
                                var s = t.currencyCode,
                                    u = s,
                                    l = s;
                                void 0 !== r.numbers.currencies[s] && (u = r.numbers.currencies[s].displayName, l = r.numbers.currencies[s].symbol), void 0 === t.currencyDisplay || "symbol" === t.currencyDisplay ? o = l : "code" === t.currencyDisplay ? o = s + " " : (o = u, n.name = o);
                                break;
                            case "%":
                                o = r.numbers[t.numberingSystem].percentSign;
                                break;
                            case "‰":
                                o = r.numbers[t.numberingSystem].perMille;
                                break;
                            case "-":
                                o = r.numbers[t.numberingSystem].minusSign
                        }
                        i = i.concat(o)
                    }
                }
                return i
            }

            function P(e, r, n) {
                var i = {};
                return y(r, "OraNumberConverter.resolvedOptions"), d(e, i, r, n), i.numberingSystemKey = v(n), void 0 === t.OraI18nUtils.numeringSystems[i.numberingSystemKey] && (i.numberingSystemKey = "latn"), i
            }

            function j(e, r, t) {
                var n = {
                    locale: t,
                    style: void 0 === e.style ? "decimal" : e.style,
                    useGrouping: void 0 === r.useGrouping || r.useGrouping,
                    numberingSystem: e.numberingSystemKey
                };
                n.minimumIntegerDigits = e.minimumIntegerDigits, n.minimumFractionDigits = e.minimumFractionDigits, n.maximumFractionDigits = e.maximumFractionDigits, "decimal" === e.style && void 0 !== r.decimalFormat && (n.decimalFormat = r.decimalFormat), "currency" === e.style && void 0 !== r.currencyFormat && (n.currencyFormat = r.currencyFormat), "currency" === e.style && (n.currency = r.currency, n.currencyDisplay = void 0 === r.currencyDisplay ? "symbol" : r.currencyDisplay), void 0 !== r.unit && (n.unit = r.unit), void 0 !== r.pattern && (n.pattern = r.pattern);
                var i = r.roundingMode,
                    a = r.roundDuringParse;
                void 0 !== i && (n.roundingMode = i), void 0 !== a && (n.roundDuringParse = a);
                var o = e.lenientParse;
                void 0 !== o && (n.lenientParse = o);
                var s = e.separators;
                return void 0 !== s && (n.separators = s), n.virtualKeyboardHint = function(e, r) {
                    var t = "text";
                    switch (r.style) {
                        case "unit":
                            t = "text";
                            break;
                        case "currency":
                        case "percent":
                            t = void 0 === r.pattern ? "text" : _(e, r);
                            break;
                        default:
                            t = void 0 === r.pattern ? "short" === r.decimalFormat || "long" === r.decimalFormat ? "text" : function(e, r) {
                                if (void 0 === r.useGrouping || r.useGrouping) {
                                    if ("." === e.decimalSeparator && "" === e.groupingSeparator) return "number"
                                } else if ("." === e.decimalSeparator) return "number";
                                return "text"
                            }(e, r) : _(e, r)
                    }
                    return t
                }(e, r), n
            }

            function _(e, r) {
                var t;
                if (t = r.pattern, /[^0-9.#]/i.test(t)) return "text";
                var n = function(e) {
                        if (-1 !== e.indexOf(",")) return !0;
                        return !1
                    }(r.pattern),
                    i = function(e) {
                        if (-1 !== e.indexOf(".")) return !0;
                        return !1
                    }(r.pattern);
                if (n && i) {
                    if ("" !== e.groupingSeparator || "." !== e.decimalSeparator) return "text";
                    if (e.groupingSeparator === e.decimalSeparator) return "text"
                }
                return i && !n && "." !== e.decimalSeparator || !i && n && "" !== e.groupingSeparator ? "text" : "number"
            }
            return {
                getInstance: function() {
                    return e || (e = {
                        format: function(e, r, t, n) {
                            (arguments.length <= 2 || void 0 === t) && (t = {
                                useGrouping: !0,
                                style: "decimal"
                            }), y(t, "OraNumberConverter.format");
                            var i = {};
                            return d(r, i, t, n), F(e, t, r, i, n)
                        },
                        parse: function(e, r, t, n) {
                            return "number" == typeof e ? e : "[object Number]" === Object.prototype.toString.call(e) ? Number(e) : ((arguments.length <= 2 || void 0 === t) && (t = {
                                useGrouping: !0,
                                style: "decimal"
                            }), y(t, "OraNumberConverter.parse"), O(e, r, t, n))
                        },
                        resolvedOptions: function(e, r, n) {
                            (arguments.length < 3 || void 0 === n) && (n = t.OraI18nUtils.getLocaleElementsMainNodeKey(e)), (arguments.length < 2 || void 0 === r) && (r = {
                                useGrouping: !0,
                                style: "decimal"
                            });
                            var i = P(e, r, n);
                            return j(i, r, n)
                        }
                    }), e
                }
            }
        }(),
        c = function() {
            this.Init()
        };
    oj.Object.createSubclass(c, i, "oj.NumberConverter"), c.prototype.Init = function(e) {
        c.superclass.Init.call(this, e)
    }, c.prototype.format = function(e) {
        return c.superclass.format.call(this, e)
    }, c.prototype.parse = function(e) {
        return c.superclass.parse.call(this, e)
    };
    const m = function(e) {
        this.Init(e)
    };
    s.Object.createSubclass(m, c, "oj.IntlNumberConverter"), m.prototype.Init = function(e) {
        m.superclass.Init.call(this, e)
    }, m.prototype._getWrapped = function() {
        return this._wrapped || (this._wrapped = l.getInstance()), this._wrapped
    }, m.prototype.format = function(e) {
        if (null == e || "string" == typeof e && 0 === s.StringUtils.trim("" + e).length || "number" == typeof e && isNaN(e)) return "";
        var t, i = o.getLocale(),
            u = n.__getBundle(),
            l = this.resolvedOptions();
        try {
            t = this._getWrapped().format(e, u, l, i)
        } catch (r) {
            throw this._processConverterError(r, e)
        }
        if ("NaN" === t) {
            var c = a.getTranslatedString("oj-converter.number.invalidNumberFormat.summary", {
                    value: e
                }),
                m = a.getTranslatedString("oj-converter.number.invalidNumberFormat.detail");
            r.error(c + " " + m)
        }
        return t
    }, m.prototype.getHint = function() {
        return null
    }, m.prototype.getOptions = function() {
        return m.superclass.getOptions.call(this)
    }, m.prototype.parse = function(e) {
        var r, t, i;
        if (null == e || "" === e) return null;
        r = o.getLocale(), t = n.__getBundle(), i = this.resolvedOptions();
        try {
            return this._getWrapped().parse(s.StringUtils.trim(e), t, i, r)
        } catch (r) {
            throw this._processConverterError(r, e)
        }
    }, m.prototype.resolvedOptions = function() {
        var e, t = o.getLocale();
        if (t !== this._locale || !this._resolvedOptions) {
            e = n.__getBundle();
            try {
                if (!e) return r.error("locale bundle for the current locale %s is unavailable", t), {};
                this._resolvedOptions = this._getWrapped().resolvedOptions(e, this.getOptions(), t), this._locale = t
            } catch (e) {
                throw this._processConverterError(e)
            }
        }
        return this._resolvedOptions
    }, m.prototype._processConverterError = function(e, r) {
        var n, i, o, l, c = e.errorInfo;
        if (c) {
            var m = c.errorCode,
                p = c.parameterMap;
            switch (s.Assert.assertObject(p), m) {
                case "optionTypesMismatch":
                case "optionTypeInvalid":
                case "optionOutOfRange":
                case "optionValueInvalid":
                    n = t.IntlConverterUtils.__getConverterOptionError(m, p);
                    break;
                case "decimalFormatMismatch":
                    o = "oj-converter.number.decimalFormatMismatch.summary";
                    break;
                case "currencyFormatMismatch":
                    o = "oj-converter.number.currencyFormatMismatch.summary";
                    break;
                case "percentFormatMismatch":
                    o = "oj-converter.number.percentFormatMismatch.summary";
                    break;
                case "unsupportedParseFormat":
                    l = a.getTranslatedString("oj-converter.number.shortLongUnsupportedParse.summary"), i = a.getTranslatedString("oj-converter.number.shortLongUnsupportedParse.detail"), n = new u.ConverterError(l, i)
            }
            o && (l = a.getTranslatedString(o, {
                value: r || p.value,
                format: p.format
            }), i = a.getTranslatedString("oj-converter.hint.detail", {
                exampleValue: this._getHintValue()
            }), n = new u.ConverterError(l, i))
        }
        return n || (l = e.message, i = e.message, n = new u.ConverterError(l, i)), n
    }, m.prototype._getHintValue = function() {
        var e = "";
        try {
            e = this.format(12345.98765)
        } catch (t) {
            t instanceof u.ConverterError && (e = "", r.error("error retrieving hint value in format"))
        }
        return e
    }, e.IntlNumberConverter = m, e.NumberConverter = c, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojconverter-number.js.map