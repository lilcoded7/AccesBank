/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["jquery", "ojs/ojcore-base", "ojs/ojdomutils"], function(t, e, n) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    const r = {
        _TABBABLE: ":tabbable,iframe",
        containsFocus: function(t) {
            var e = document.activeElement;
            return !(!t || !e) && n.isAncestorOrSelf(t, e)
        },
        focusElement: function(t) {
            t.focus()
        },
        focusFirstTabStop: function(t) {
            var e = r.getFirstTabStop(t);
            return e && r.focusElement(e), e
        },
        isFirstActiveElement: function(e) {
            var n = t(e).find(r._TABBABLE);
            if (null == n || 0 === n.length) return !1;
            var i = n[0];
            return document.activeElement === i || i.name === document.activeElement.name && "radio" === i.type && "radio" === document.activeElement.type
        },
        isLastActiveElement: function(e) {
            var n = t(e).find(r._TABBABLE);
            if (null == n || 0 === n.length) return !1;
            var i = n[n.length - 1];
            return document.activeElement === i || i.name === document.activeElement.name && "radio" === i.type && "radio" === document.activeElement.type
        },
        getFirstTabStop: function(e) {
            var n = t(e);
            if (n.is(r._TABBABLE)) return e;
            var i = n.find(r._TABBABLE);
            if (i && i.length > 0) {
                if (i[0].classList.contains("oj-radio")) {
                    var o = i.filter(".oj-selected.oj-radio");
                    return o && o.length ? o[0] : i[0]
                }
                return i[0]
            }
            return null
        },
        getLastTabStop: function(e) {
            var n = t(e).find(r._TABBABLE);
            if (n && n.length > 0) {
                if (n[n.length - 1].classList.contains("oj-radio")) {
                    var i = n.filter(".oj-selected.oj-radio");
                    return i && i.length ? i[i.length - 1] : n[n.length - 1]
                }
                return n[n.length - 1]
            }
            return null
        },
        isFocusable: function(n) {
            return !!t(n).is(":focusable") && !("A" === n.nodeName && !n.hasAttribute("tabindex") && e.AgentUtils.getAgentInfo().browser === e.AgentUtils.BROWSER.SAFARI)
        }
    };
    return r
});
//# sourceMappingURL=ojfocusutils.js.map