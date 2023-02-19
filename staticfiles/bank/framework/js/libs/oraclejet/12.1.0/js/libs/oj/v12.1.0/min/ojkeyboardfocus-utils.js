/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "jquery", "ojs/ojcore-base", "ojs/ojpopupcore", "ojs/ojdomutils"], function(t, e, a, r, n) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
    const o = 'input, select, button, a[href], textarea, object, [tabIndex]:not([tabIndex="-1"])',
        l = function(t) {
            return !(0 === t.offsetHeight || 0 === t.offsetWidth)
        },
        i = function(t) {
            var e = [];
            let a = t.querySelectorAll('[data-oj-tabmod], input, select, button, a[href], textarea, object, [tabIndex]:not([tabIndex="-1"])');
            for (var r = 0; r < a.length; r++) {
                var n = a[r];
                n.disabled || "none" === n.style.display || e.push(n)
            }
            return e
        },
        u = function(t, e) {
            var r = [],
                n = a.AgentUtils.getAgentInfo(),
                i = !0;
            if (a.AgentUtils.BROWSER.IE === n.browser && null == t.parentNode && (i = !1), i)
                for (var u = t.querySelectorAll(o), d = u.length, s = 0; s < d; s++) {
                    var b = u[s];
                    if (!b.disabled && (e || l(b))) {
                        var c = parseInt(b.getAttribute("tabIndex"), 10);
                        (isNaN(c) || c >= 0) && r.push(b)
                    }
                }
            return r
        },
        d = function(t) {
            var e = t.getAttribute("aria-readonly");
            t.setAttribute("data-oj-ariareadonlymod", e), t.removeAttribute("aria-readonly")
        },
        s = function(t) {
            var e = parseInt(t.getAttribute("tabIndex"), 10);
            t.setAttribute("data-oj-tabmod", e), t.setAttribute("tabIndex", -1)
        };
    t.checkVisibility = l, t.disableAllFocusableElements = function(t, e, a, r) {
        for (var n = [], o = u(t, e), l = 0; l < o.length; l++) a && o[l] === document.activeElement || (s(o[l]), n.push(o[l])), r && o[l].hasAttribute("aria-readonly") && d(o[l]);
        return n
    }, t.disableElement = s, t.enableAllFocusableElements = function(t) {
        for (var e = t.querySelectorAll("[data-oj-tabmod]"), a = 0; a < e.length; a++) {
            var r = parseInt(e[a].getAttribute("data-oj-tabmod"), 10);
            if (e[a].removeAttribute("data-oj-tabmod"), isNaN(r) ? e[a].removeAttribute("tabIndex") : e[a].setAttribute("tabIndex", r), e[a].hasAttribute("data-oj-ariareadonlymod")) {
                var n = e[a].getAttribute("data-oj-ariareadonlymod");
                e[a].removeAttribute("data-oj-ariareadonlymod"), e[a].setAttribute("aria-readonly", n)
            }
        }
        return e
    }, t.getActionableElementsInNode = i, t.getFocusableElementsInNode = u, t.getLogicalChildPopup = function(t) {
        for (var r = a.ZOrderUtils.findOpenPopups(), o = 0; o < r.length; o++) {
            var l = r[o].firstElementChild,
                i = n.getLogicalParent(e(l));
            if (null != i && e(t).has(i.get(0)).length > 0 && a.ZOrderUtils.getStatus(l) === a.ZOrderUtils.STATUS.OPEN) return l
        }
        return null
    }, t.isActionableElement = function(t) {
        var e = t.parentNode;
        if (null != e)
            for (var a = i(e), r = 0; r < a.length; r++)
                if (a[0] === t) return !0;
        return !1
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojkeyboardfocus-utils.js.map