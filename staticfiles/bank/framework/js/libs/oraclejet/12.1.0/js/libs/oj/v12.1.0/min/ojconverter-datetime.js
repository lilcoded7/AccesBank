/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojconverterutils-i18n", "ojs/ojconverter", "ojs/ojlocaledata", "ojs/ojconverter-nativedatetime", "ojs/ojconfig", "ojs/ojcore-base", "ojs/ojavailabletimezones"], function(t, e, n, o, r, i, a, s) {
    "use strict";
    n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
    const u = function(t) {
        this.Init(t)
    };
    oj.Object.createSubclass(u, n, "oj.DateTimeConverter"), u.prototype.Init = function(t) {
        u.superclass.Init.call(this, t)
    }, u.prototype.format = function(t) {
        return u.superclass.format.call(this, t)
    }, u.prototype.isHourInDaySet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.isHourInAMPMSet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.isMinuteSet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.isSecondSet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.isMilliSecondSet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.isYearSet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.isMonthSet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.isDaySet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.isDayNameSet = function() {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.calculateWeek = function(t) {
        oj.Assert.failedInAbstractFunction()
    }, u.prototype.parse = function(t) {
        return u.superclass.parse.call(this, t)
    }, u.prototype.compareISODates = function(t, e) {
        return u.superclass.compareISODates.call(this, t, e)
    }, u.prototype.getAvailableTimeZones = function() {
        return u.superclass.getAvailableTimeZones.call(this)
    };
    const l = function() {
            var t, n = 46,
                a = 46,
                s = 23,
                u = 7,
                l = 4,
                c = 12;

            function p(t, e) {
                return t.getFullYear() === e.getFullYear()
            }

            function m(t, e) {
                return e.getFullYear() - t.getFullYear() == 1
            }

            function d(t, e) {
                return p(t, e) && t.getMonth() === e.getMonth()
            }

            function f(t, e) {
                return p(t, e) ? e.getMonth() - t.getMonth() == 1 : !!m(t, e) && (11 === t.getMonth() && 0 === e.getMonth())
            }

            function y(t, n) {
                var o = t.getDate(),
                    r = n.getDate();
                return f(t, n) && (r += e.OraI18nUtils._getDaysInMonth(t.getFullYear, t.getMonth())), r - o
            }

            function h(t, n) {
                var o = t._ojLocale_,
                    r = e.OraI18nUtils.getBCP47Region(o),
                    i = t.supplemental.weekData.firstDay,
                    a = i[r];
                void 0 === a && (a = i["001"]);
                var s = n - a;
                return s < 0 && (s += 7), s
            }

            function O(t, e, n) {
                if (!d(e, n) && !f(e, n)) return !1;
                var o = y(e, n) + h(t, e.getDay());
                return o >= 7 && o <= 13
            }

            function v(t, e) {
                return p(t, e) && d(t, e) && t.getDate() === e.getDate()
            }

            function g(t, e) {
                return !(!d(t, e) && !f(t, e)) && 1 === y(t, e)
            }

            function I(t, e) {
                return g(e, t)
            }

            function D(t) {
                var e = function(t) {
                        return 4800 * t / 146097
                    }(t / 864e5),
                    n = e / 12;
                return {
                    year: Math.round(n),
                    month: Math.round(e),
                    week: Math.round(t / 6048e5),
                    day: Math.round(t / 864e5),
                    hour: Math.round(t / 36e5),
                    minute: Math.round(t / 6e4),
                    second: Math.round(t / 1e3),
                    millisecond: t
                }
            }

            function S(t, n, o) {
                var r = e.OraI18nUtils._IsoStrParts(t),
                    i = e.OraI18nUtils._IsoStrParts(n);
                return o ? (r = Date.UTC(r[0], r[1] - 1, r[2], 0, 0, 0, 0), i = Date.UTC(i[0], i[1] - 1, i[2], 0, 0, 0, 0)) : (r = Date.UTC(r[0], r[1] - 1, r[2], r[3], r[4], r[5], r[6]), i = Date.UTC(i[0], i[1] - 1, i[2], i[3], i[4], i[5], i[6])), r - i
            }

            function T(t, e) {
                return new Intl.DateTimeFormat(i.getLocale(), e).format(t)
            }

            function w(t, n, o) {
                var i = n.timeZone,
                    a = e.OraI18nUtils.getISOStrFormatInfo(t).format;
                if ("offset" === a || "zulu" === a) {
                    var s = new Date(t);
                    return e.OraI18nUtils.dateToLocalIso(s)
                }
                return "local" === a && !i ? t : function(t, n, o) {
                    var i = {
                            isoStrFormat: "zulu",
                            timeZone: n.timeZone
                        },
                        a = r.NativeParserImpl.parseImpl(t, null, i, o),
                        s = new Date(a.value);
                    return e.OraI18nUtils.dateToLocalIso(s)
                }(t, n, o)
            }

            function _(t, n, o) {
                var r, a, s, u, l = [],
                    c = e.OraI18nUtils.isoToLocalDate(n),
                    p = e.OraI18nUtils.isoToLocalDate(t),
                    m = i.getLocale();
                if (v(p, c)) l = [0, "day", "auto"], r = new Intl.RelativeTimeFormat(m, {
                    numeric: l[2]
                }).format(l[0], l[1]);
                else if (g(p, c)) l = [1, "day", "auto"], r = new Intl.RelativeTimeFormat(m, {
                    numeric: l[2]
                }).format(l[0], l[1]);
                else if (I(p, c)) l = [-1, "day", "auto"], r = new Intl.RelativeTimeFormat(m, {
                    numeric: l[2]
                }).format(l[0], l[1]);
                else {
                    var d = S(n, t, !0);
                    if (!((d /= 864e5) > 1 && d < 7)) return T(c, {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric"
                    });
                    r = T(c, {
                        weekday: "long"
                    })
                }
                return o ? r : (a = T(c, {
                    hour: "numeric",
                    minute: "numeric"
                }), r + (s = new Intl.DateTimeFormat(i.getLocale(), {
                    dateStyle: "long",
                    timeStyle: "short"
                }).formatToParts(new Date), u = s.findIndex(t => "hour" === t.type) - 1, s[u] ? s[u].value : " ") + a)
            }

            function F(t, n, o, r) {
                var a = e.OraI18nUtils.getGetOption(o, "OraDateTimeConverter.formatRelative")("dateField", "string", ["day", "week", "month", "year", "hour", "minute", "second"]),
                    s = e.OraI18nUtils.isoToLocalDate(t),
                    u = e.OraI18nUtils.isoToLocalDate(n),
                    l = S(n, t, !1),
                    c = D(Math.abs(l)),
                    T = [];
                switch (a) {
                    case "day":
                        T = v(s, u) ? [0, "day", "auto"] : g(s, u) ? [1, "day", "auto"] : I(s, u) ? [-1, "day", "auto"] : [l > 0 ? c.day : -c.day, "day", "always"];
                        break;
                    case "week":
                        T = function(t, e, n) {
                            if (e > n) {
                                var o = e;
                                e = n, n = o
                            }
                            if (!d(e, n) && !f(e, n)) return !1;
                            var r = y(e, n) + h(t, e.getDay());
                            return r >= 0 && r <= 6
                        }(r, s, u) ? [0, "week", "auto"] : O(r, s, u) ? [1, "week", "auto"] : function(t, e, n) {
                            return O(t, n, e)
                        }(r, s, u) ? [-1, "week", "auto"] : [l > 0 ? c.week : -c.week, "week", "always"];
                        break;
                    case "month":
                        d(s, u) ? T = [0, "month", "auto"] : f(s, u) ? T = [1, "month", "auto"] : T = f(u, s) ? [-1, "month", "auto"] : [l > 0 ? c.month : -c.month, "month", "always"];
                        break;
                    case "year":
                        T = p(s, u) ? [0, "year", "auto"] : m(s, u) ? [1, "year", "auto"] : function(t, e) {
                            return m(e, t)
                        }(s, u) ? [-1, "year", "auto"] : [l > 0 ? c.year : -c.year, "year", "always"];
                        break;
                    case "hour":
                        T = [l > 0 ? c.hour : -c.hour, "hour", "auto"];
                        break;
                    case "minute":
                        T = [l > 0 ? c.minute : -c.minute, "minute", "auto"];
                        break;
                    case "second":
                        T = [l > 0 ? c.second : -c.second, "second", "auto"]
                }
                return new Intl.RelativeTimeFormat(i.getLocale(), {
                    numeric: T[2]
                }).format(T[0], T[1])
            }

            function b(t, o, r) {
                var p = e.OraI18nUtils.dateToLocalIso(new Date);
                if ("number" == typeof t) t = e.OraI18nUtils.dateToLocalIso(new Date(t));
                else {
                    if ("string" != typeof t) return null;
                    if ("" === e.OraI18nUtils.trim(t)) return null
                }
                void 0 === r && (r = {
                    formatUsing: "displayName"
                });
                var m = e.OraI18nUtils.getGetOption(r, "OraDateTimeConverter.formatRelative"),
                    d = m("relativeTime", "string", ["fromNow", "toNow"], "fromNow"),
                    f = m("dateField", "string", ["day", "week", "month", "year", "hour", "minute", "second"]);
                if (t = w(t, r, o), "toNow" === d) {
                    var y = p;
                    p = t, t = y
                }
                return "calendar" === m("formatUsing", "string", ["displayName", "calendar"], "displayName") ? _(p, t, m("dateOnly", "boolean", [!0, !1], !1)) : void 0 !== f ? F(p, t, r, o) : function(t, e, o, r) {
                    var p = S(e, t, !1),
                        m = D(Math.abs(p));
                    null === o && (o = (m.second < n ? "second" : m.minute < a && "minute") || m.hour < s && "hour" || m.day < u && "day" || m.week < l && "week" || m.month < c && "month" || "year");
                    var d = new Intl.RelativeTimeFormat(i.getLocale(), {
                            numeric: r
                        }),
                        f = p >= 0 ? m[o] : -m[o];
                    return d.format(f, o)
                }(p, t, null, "auto")
            }
            return {
                getInstance: function() {
                    return t || (t = {
                        formatRelative: function(t, e) {
                            return b(t, o.__getBundle(), e)
                        }
                    }), t
                }
            }
        }(),
        c = function(t) {
            let e = t ? c.mapOptions(t) : null;
            const n = r.DateTimePreferencesUtils.getPreferencesMergedWithConverterOptions(e),
                o = 0 === Object.keys(n).length ? {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric"
                } : n;
            this.Init(o)
        };
    a.Object.createSubclass(c, u, "oj.IntlDateTimeConverter"), c._DEFAULT_DATE = new Date(1998, 10, 29, 15, 45, 31), c.prototype.Init = function(t) {
        c.superclass.Init.call(this, t), this._initConverter()
    }, c.prototype._getWrapped = function() {
        return this._wrapped
    }, c.prototype._initConverter = function() {
        var t = this.getOptions();
        t.numberingSystem = "latn", t.calendar = "gregory", t.pattern ? this._wrapped = new r.NativeDateTimePatternConverter(t) : this._wrapped = new r.NativeDateTimeConverter(t), t.timeZone || delete this._wrapped.resOptions.timeZone
    }, c.prototype.format = function(t) {
        if (null == t || "string" == typeof t && 0 === a.StringUtils.trim("" + t).length) return "";
        let n = t;
        if ("number" == typeof t) n = e.OraI18nUtils.dateToLocalIso(new Date(t));
        else {
            if ("string" != typeof t) return null;
            n = e.OraI18nUtils.trim(t)
        }
        return this._getWrapped().format(n)
    }, c.prototype.formatRelative = function(t, e) {
        return l.getInstance().formatRelative(t, e)
    }, c.prototype.getHint = function() {
        return null
    }, c.prototype.getOptions = function() {
        return c.superclass.getOptions.call(this)
    }, c.prototype.resolvedOptions = function() {
        if (!this._resolvedOptions) {
            const t = this._getWrapped().resolvedOptions();
            this._resolvedOptions = {};
            const e = Object.keys(t);
            let n = 0;
            for (n = 0; n < e.length; n++) {
                const o = e[n];
                "timeStyle" === o ? this._resolvedOptions.timeFormat = t[o] : "dateStyle" === o ? this._resolvedOptions.dateFormat = t[o] : "fractionalSecondDigits" === o ? this._resolvedOptions.millisecond = "numeric" : "twoDigitYearStart" === o ? this._resolvedOptions["two-digit-year-start"] = t[o] : this._resolvedOptions[o] = t[o]
            }
            this._resolvedOptions.dateFormat && this._resolvedOptions.timeFormat ? this._resolvedOptions.formatType = "datetime" : this._resolvedOptions.dateFormat ? this._resolvedOptions.formatType = "date" : this._resolvedOptions.timeFormat && (this._resolvedOptions.formatType = "time");
            const o = ["hour", "minute", "second", "millisecond", "day", "month", "year", "weekday", "timeZoneName", "dayPeriod"];
            if (this._resolvedOptions.dateFormat || this._resolvedOptions.timeFormat) {
                const t = Object.keys(this._resolvedOptions);
                o.forEach(e => {
                    t.includes(e) && delete this._resolvedOptions[e]
                })
            }
        }
        return this._resolvedOptions
    }, c.prototype.isHourInDaySet = function() {
        var t = this.resolvedOptions(),
            e = t.hour,
            n = t.hour12;
        return !(!e || n)
    }, c.prototype.isHourInAMPMSet = function() {
        var t = this.resolvedOptions(),
            e = t.hour,
            n = t.hour12;
        return !(!e || !n)
    }, c.prototype.isMinuteSet = function() {
        return this._isOptionSet("minute")
    }, c.prototype.isSecondSet = function() {
        return this._isOptionSet("second")
    }, c.prototype.isMilliSecondSet = function() {
        return this._isOptionSet("millisecond")
    }, c.prototype.isYearSet = function() {
        return this._isOptionSet("year")
    }, c.prototype.isMonthSet = function() {
        return this._isOptionSet("month")
    }, c.prototype.isDaySet = function() {
        return this._isOptionSet("day")
    }, c.prototype.isDayNameSet = function() {
        return this._isOptionSet("weekday")
    }, c.prototype.calculateWeek = function(t) {
        var n, o = e.OraI18nUtils._IsoStrParts(t),
            r = new Date(Date.UTC(o[0], o[1] - 1, o[2]));
        return r.setUTCDate(r.getUTCDate() + 4 - (r.getUTCDay() || 7)), n = r.getTime(), r.setUTCMonth(0), r.setUTCDate(1), Math.floor(Math.round((n - r) / 864e5) / 7) + 1
    }, c.prototype.parse = function(t) {
        if (null === t || "" === t || void 0 === t) return null;
        var n = this._wrapped.resOptions.isoStrFormat,
            o = this._wrapped.resOptions.timeZone,
            r = "";
        if (e.OraI18nUtils._ISO_DATE_REGEXP.test(t) && (-1 !== (r = t.substring(t.indexOf("T"))).indexOf("Z") && !o)) return t;
        var i = this._getWrapped().parse(t),
            a = -1 === (r = i.substring(i.indexOf("T"))).indexOf("Z") && -1 === r.indexOf("+") && -1 === r.indexOf("-");
        return !o && n && a && (i = e.OraI18nUtils.convertISOString(i, n)), i
    }, c.prototype.compareISODates = function(t, n) {
        const o = new Date,
            r = o.getMonth() + 1;
        let i = e.OraI18nUtils.zeroPad(r.toString(), 2, !0);
        const a = o.getDate();
        let s = e.OraI18nUtils.zeroPad(a.toString(), 2, !0);
        const u = o.getFullYear() + "-" + i + "-" + s;
        let l = t,
            c = n;
        const p = 0 === l.indexOf("T"),
            m = 0 === c.indexOf("T"),
            d = -1 === l.indexOf("T"),
            f = -1 === c.indexOf("T");
        p ? l = u + l : d && (l += "T00:00:00"), m ? c = u + c : f && (c += "T00:00:00");
        const y = new Date(l),
            h = new Date(c);
        return y.getTime() - h.getTime()
    }, c.prototype._isOptionSet = function(t) {
        return !!this.resolvedOptions()[t]
    }, c.prototype.getAvailableTimeZones = function() {
        return s.AvailableTimeZones.getAvailableTimeZonesImpl()
    }, c.isECMAOptionSet = function(t) {
        return t.year || t.month || t.day || t.weekday || t.hour || t.minute || t.second || t.millisecond || t.dayPeriod || t.timeZoneName
    }, c.mapOptions = function(t) {
        let e = {};
        const n = Object.keys(t);
        let o = 0;
        var r = c.isECMAOptionSet(t);
        for (n.includes("formatType") || !t.dateFormat && !t.timeFormat || r || (e.dateStyle = t.dateFormat || "short"), o = 0; o < n.length; o++) {
            const i = n[o];
            "formatType" !== i || r ? "millisecond" === i ? e.fractionalSecondDigits = 3 : "two-digit-year-start" === i ? e.twoDigitYearStart = t[i] : e[i] = t[i] : ("datetime" !== t[i] && "date" !== t[i] || (e.dateStyle = t.dateFormat || "short"), "datetime" !== t[i] && "time" !== t[i] || (e.timeStyle = t.timeFormat || "short"))
        }
        return e
    }, t.DateTimeConverter = u, t.IntlDateTimeConverter = c, t.RelativeDateTimeFormatter = l, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojconverter-datetime.js.map