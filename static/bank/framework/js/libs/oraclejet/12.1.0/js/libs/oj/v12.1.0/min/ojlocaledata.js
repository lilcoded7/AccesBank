/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojL10n!ojtranslations/nls/localeElements", "ojs/ojcalendarutils"], function(e, t, n, a) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    var r = n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    const o = {};
    t._registerLegacyNamespaceProp("LocaleData", o), o.setBundle = function(e) {
        o._bundle = e
    }, o.getFirstDayOfWeek = function() {
        return o._getWeekData("firstDay")
    }, o.getWeekendStart = function() {
        return o._getWeekData("weekendStart")
    }, o.getWeekendEnd = function() {
        return o._getWeekData("weekendEnd")
    }, o.getDayNames = function(e) {
        (null == e || "abbreviated" !== e && "narrow" !== e) && (e = "wide");
        var t = o._getCalendarData().days["stand-alone"][e];
        return [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat]
    }, o.getMonthNames = function(e) {
        (null == e || "abbreviated" !== e && "narrow" !== e) && (e = "wide");
        var t = o._getCalendarData().months["stand-alone"][e];
        return [t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12]]
    }, o.isMonthPriorToYear = function() {
        var e = t.Config.getLocale(),
            n = new Date,
            a = new Intl.DateTimeFormat(e, {
                dateStyle: "long"
            }).formatToParts(n);
        return a.findIndex(e => "month" === e.type) < a.findIndex(e => "year" === e.type)
    }, o._getWeekData = function(e) {
        var t = o.__getBundle(),
            n = o._getRegion() || "001",
            a = t.supplemental.weekData[e],
            r = a[n];
        return void 0 === r && (r = a["001"]), r
    }, o._getCalendarData = function() {
        var e = t.Config.getLocale();
        return a.CalendarUtils.getCalendar(e, "gregory")
    }, o._getRegion = function() {
        var e = t.Config.getLocale();
        if (e) {
            var n = e.toUpperCase().split(/-|_/);
            if (n.length >= 2) {
                var a = n[1];
                if (4 !== a.length) return a;
                if (n.length >= 3) return n[2]
            }
        }
        return o.__getBundle().supplemental.defaultRegion[e]
    }, o.__getBundle = function() {
        var e = o._bundle;
        return e || r
    }, o.__updateBundle = function(e) {
        r = e
    };
    const l = o.getDayNames,
        d = o.getFirstDayOfWeek,
        u = o.getMonthNames,
        i = o.getWeekendEnd,
        g = o.getWeekendStart,
        s = o.isMonthPriorToYear,
        f = o.setBundle,
        c = o.__getBundle,
        _ = o._getCalendarData;
    e.__getBundle = c, e._getCalendarData = _, e.getDayNames = l, e.getFirstDayOfWeek = d, e.getMonthNames = u, e.getWeekendEnd = i, e.getWeekendStart = g, e.isMonthPriorToYear = s, e.setBundle = f, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojlocaledata.js.map