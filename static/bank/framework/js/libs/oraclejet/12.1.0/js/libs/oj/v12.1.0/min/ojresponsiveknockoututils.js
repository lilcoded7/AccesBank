/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "knockout", "jquery", "ojs/ojresponsiveutils"], function(e, r, t, a, n) {
    "use strict";
    r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
    const l = {};
    r._registerLegacyNamespaceProp("ResponsiveKnockoutUtils", l), l.createMediaQueryObservable = function(e) {
        if (null == e) throw new Error("ResponsiveKnockoutUtils.createMediaQueryObservable: aborting, queryString is null");
        var r = window.matchMedia(e),
            n = t.observable(r.matches);
        return r.addListener(function(e) {
            n(e.matches)
        }), -1 !== navigator.userAgent.indexOf("WebKit") && -1 === navigator.userAgent.indexOf("Chrome") && a(window).resize(function() {
            var e = "oj-webkit-bug-123293";
            0 === a("body").has("." + e).length && a("body").append('<div aria-hidden="true" class="oj-helper-hidden-accessible ' + e + '">'), a("." + e).text((new Date).getMilliseconds().toString())
        }), n
    }, l.createScreenRangeObservable = function() {
        var e = n.getFrameworkQuery(n.FRAMEWORK_QUERY_KEY.XXL_UP),
            r = n.getFrameworkQuery(n.FRAMEWORK_QUERY_KEY.XL_UP),
            a = n.getFrameworkQuery(n.FRAMEWORK_QUERY_KEY.LG_UP),
            o = n.getFrameworkQuery(n.FRAMEWORK_QUERY_KEY.MD_UP),
            u = n.getFrameworkQuery(n.FRAMEWORK_QUERY_KEY.SM_UP),
            i = null == e ? null : l.createMediaQueryObservable(e),
            s = null == r ? null : l.createMediaQueryObservable(r),
            c = null == a ? null : l.createMediaQueryObservable(a),
            b = null == o ? null : l.createMediaQueryObservable(o),
            d = null == u ? null : l.createMediaQueryObservable(u);
        return t.computed(function() {
            if (i && i()) return n.SCREEN_RANGE.XXL;
            if (s && s()) return n.SCREEN_RANGE.XL;
            if (c && c()) return n.SCREEN_RANGE.LG;
            if (b && b()) return n.SCREEN_RANGE.MD;
            if (d && d()) return n.SCREEN_RANGE.SM;
            throw new Error(" NO MATCH in ResponsiveKnockoutUtils.createScreenRangeObservable")
        })
    };
    const o = l.createScreenRangeObservable,
        u = l.createMediaQueryObservable;
    e.createMediaQueryObservable = u, e.createScreenRangeObservable = o, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojresponsiveknockoututils.js.map