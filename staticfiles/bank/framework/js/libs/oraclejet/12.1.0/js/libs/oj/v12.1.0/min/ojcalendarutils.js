/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports"], function(t) {
    "use strict";
    class a {
        static _getDayPeriods(t, e) {
            var n = new Date(2019, 0, 1, 0, 0, 0);

            function o(t) {
                const a = t.formatToParts(n).find(t => "dayPeriod" === t.type);
                if (a) return a.value
            }
            var r = a.getFormatterLocale(t, e),
                s = new Intl.DateTimeFormat(r, {
                    hour: "numeric",
                    hour12: !0
                });
            const l = o(s);
            n.setHours(20);
            return {
                format: {
                    wide: {
                        am: l,
                        pm: o(s)
                    }
                }
            }
        }
        static getFormatterLocale(t, a) {
            return t + "-u-ca-" + a
        }
        static _getEras(t, e) {
            const n = [{
                era: "0",
                start: "2000-02-11T00:00:00"
            }];
            var o = {
                eraNarrow: {
                    0: "",
                    1: ""
                },
                eraAbbr: {
                    0: "",
                    1: ""
                },
                eraName: {
                    0: "",
                    1: ""
                }
            };

            function r(t, a) {
                const e = t.formatToParts(a).find(t => "era" === t.type);
                if (e) return e.value
            }
            const s = ["narrow", "short", "long"],
                l = a.getFormatterLocale(t, e),
                d = {
                    narrow: "eraNarrow",
                    short: "eraAbbr",
                    long: "eraName"
                };
            for (let t = 0; t < n.length; t++) {
                let a = new Date(n[t].start);
                for (let t = 0; t < s.length; t++) {
                    const e = s[t],
                        n = {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            era: e
                        };
                    const m = r(new Intl.DateTimeFormat(l, n), a),
                        c = {
                            0: m,
                            1: m
                        };
                    o[d[e]] = c
                }
            }
            return o
        }
        static _fillMonthAndDays(t, e, n, o, r) {
            const s = [
                [2020, 0, 5],
                [2020, 1, 3],
                [2020, 2, 3],
                [2020, 3, 1],
                [2020, 4, 7],
                [2020, 5, 5],
                [2020, 6, 4],
                [2020, 7, 1],
                [2020, 8, 1],
                [2020, 9, 1],
                [2020, 10, 1],
                [2020, 11, 1]
            ];

            function l(t) {
                const a = t.find(t => "month" === t.type);
                return a ? a.value : null
            }

            function d(t) {
                const a = t.find(t => "weekday" === t.type);
                return a ? a.value : null
            }
            const m = a.getFormatterLocale(t, e),
                c = new Intl.DateTimeFormat(m, o),
                i = {},
                h = {};
            for (let t = 0; t < s.length; t++) {
                const e = t + 1,
                    o = a._weekdaysFormatMap[e],
                    m = new Date(s[t][0], s[t][1], s[t][2]),
                    f = c.formatToParts(m);
                let u, y;
                r ? (u = c.format(m), y = c.format(m)) : (u = l(f), y = d(f)), void 0 === i[n] && (i[n] = {}), i[n][e] = u, e <= 7 && (void 0 === h[n] && (h[n] = {}), h[n][o] = y)
            }
            return {
                monthFormat: i,
                dayFormat: h
            }
        }
        static _getFormatMonthAndDays(t, e) {
            const n = [],
                o = [],
                r = ["short", "narrow", "long"];
            for (let s = 0; s < r.length; s++) {
                const l = {
                        month: r[s],
                        weekday: r[s],
                        year: "numeric",
                        day: "numeric"
                    },
                    d = a._monthNamesFormatMap[r[s]];
                let m = a._fillMonthAndDays(t, e, d, l, !1);
                n[s] = m.monthFormat, o[s] = m.dayFormat
            }
            const s = Object.assign({}, ...n),
                l = Object.assign({}, ...o);
            let d = {
                format: {}
            };
            d.format = s;
            let m = {
                format: {}
            };
            return m.format = l, d["stand-alone"] = d.format, m["stand-alone"] = m.format, {
                monthsNode: d,
                daysNode: m
            }
        }
        static _getStandAloneDays(t, e) {
            const n = [],
                o = ["short", "narrow", "long"];
            for (let s = 0; s < o.length; s++) {
                var r = {
                    weekday: o[s]
                };
                const l = a._monthNamesFormatMap[o[s]];
                let d = a._fillMonthAndDays(t, e, l, r, !0);
                n[s] = d.dayFormat
            }
            let s = Object.assign({}, ...n),
                l = {
                    "stand-alone": {}
                };
            return l["stand-alone"] = s, {
                daysNode: l
            }
        }
        static _getStandAloneMonths(t, e) {
            const n = [],
                o = ["short", "narrow", "long"];
            for (let s = 0; s < o.length; s++) {
                var r = {
                    month: o[s]
                };
                const l = a._monthNamesFormatMap[o[s]];
                let d = a._fillMonthAndDays(t, e, l, r, !0);
                n[s] = d.monthFormat
            }
            let s = Object.assign({}, ...n),
                l = {
                    "stand-alone": {}
                };
            return l["stand-alone"] = s, {
                monthsNode: l
            }
        }
        static getCalendar(t, e) {
            var n, o;
            if (a.calendars = null !== (n = a.calendars) && void 0 !== n ? n : {}, a.calendars[t] = null !== (o = a.calendars[t]) && void 0 !== o ? o : {}, void 0 === a.calendars[t][e]) {
                const n = a._getDayPeriods(t, e),
                    o = a._getEras(t, e);
                let r, s;
                const l = a._getStandAloneMonths(t, e),
                    d = a._getStandAloneDays(t, e);
                if (a.exceptionLocales.includes(t)) r = l.monthsNode["stand-alone"], s = d.daysNode["stand-alone"];
                else {
                    const n = a._getFormatMonthAndDays(t, e);
                    r = n.monthsNode.format, s = n.daysNode.format
                }
                const m = {
                        format: r,
                        "stand-alone": l.monthsNode["stand-alone"]
                    },
                    c = {
                        format: s,
                        "stand-alone": d.daysNode["stand-alone"]
                    };
                a.calendars[t][e] = {
                    dayPeriods: n,
                    months: m,
                    days: c,
                    eras: o,
                    locale: t
                }
            }
            return a.calendars[t][e]
        }
    }
    a._monthNamesFormatMap = {
        short: "abbreviated",
        narrow: "narrow",
        long: "wide"
    }, a._weekdaysFormatMap = {
        1: "sun",
        2: "mon",
        3: "tue",
        4: "wed",
        5: "thu",
        6: "fri",
        7: "sat"
    }, a.exceptionLocales = ["ja", "ja-JP", "zh", "zh-Hans", "zh-Hans-CN", "zh-Hans-HK", "zh-Hans-MO", "zh-Hans-SG", "zh-Hant", "zh-Hant-HK", "zh-Hant-MO", "zh-Hant-TW"], t.CalendarUtils = a, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojcalendarutils.js.map