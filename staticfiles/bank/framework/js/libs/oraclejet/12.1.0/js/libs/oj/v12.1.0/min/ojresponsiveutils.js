/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojlogger"], function(e, o, t) {
    "use strict";
    o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
    const r = {};
    o._registerLegacyNamespaceProp("ResponsiveUtils", r), r.SCREEN_RANGE = {
        SM: "sm",
        MD: "md",
        LG: "lg",
        XL: "xl",
        XXL: "xxl"
    }, r.FRAMEWORK_QUERY_KEY = {
        SM_UP: "sm-up",
        MD_UP: "md-up",
        LG_UP: "lg-up",
        XL_UP: "xl-up",
        XXL_UP: "xxl-up",
        SM_ONLY: "sm-only",
        MD_ONLY: "md-only",
        LG_ONLY: "lg-only",
        XL_ONLY: "xl-only",
        MD_DOWN: "md-down",
        LG_DOWN: "lg-down",
        XL_DOWN: "xl-down",
        HIGH_RESOLUTION: "high-resolution"
    }, r._RANGE = {}, r._RANGE[r.SCREEN_RANGE.SM] = 0, r._RANGE[r.SCREEN_RANGE.MD] = 1, r._RANGE[r.SCREEN_RANGE.LG] = 2, r._RANGE[r.SCREEN_RANGE.XL] = 3, r._RANGE[r.SCREEN_RANGE.XXL] = 4, r._getMediaQueryFromClass = function(e) {
        var o = document.getElementsByClassName(e).item(0);
        return null === o && ((o = document.createElement("meta")).className = e, document.head.appendChild(o)), window.getComputedStyle(o).getPropertyValue("font-family").replace(/^[/\\'"]+|(;\s?})+|[/\\'"]+$/g, "")
    }, r.getFrameworkQuery = function(e) {
        var o = "oj-mq-" + e,
            s = r._getMediaQueryFromClass(o);
        return "null" === s ? (t.warn("Framework query not found. Please check that the value of the theming variable$includeResponsiveMediaQueryClasses is set to true, if itis set to false the media queries are not sent down to the browser."), null) : s
    }, r.compare = function(e, o) {
        var t = r._RANGE[e],
            s = r._RANGE[o];
        if (null == t) throw new Error("size1 param " + e + " illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD");
        if (null == s) throw new Error("size2 param " + o + " illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD");
        return t - s
    };
    const s = r.compare,
        l = r.getFrameworkQuery,
        n = r.SCREEN_RANGE,
        a = r.FRAMEWORK_QUERY_KEY;
    e.FRAMEWORK_QUERY_KEY = a, e.SCREEN_RANGE = n, e.compare = s, e.getFrameworkQuery = l, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojresponsiveutils.js.map