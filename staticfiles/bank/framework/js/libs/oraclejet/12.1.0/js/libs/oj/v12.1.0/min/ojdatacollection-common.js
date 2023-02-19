/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojdomutils", "ojs/ojlogger", "ojs/ojkeyboardfocus-utils"], function(e, t, n, l, i) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    const r = function() {};
    r._TAB_INDEX = "tabIndex", r._DATA_OJ_TABMOD = "data-oj-tabmod", r._FOCUSABLE_ELEMENTS_TAG = ["input", "select", "button", "a", "textarea", "object"], r.CHECKVIEWPORT_THRESHOLD = 3, r.getFocusableElementsInNode = function(e, t) {
        return i.getFocusableElementsInNode(e, t)
    }, r.checkVisibility = function(e) {
        return i.checkVisibility(e)
    }, r.disableElement = function(e) {
        i.disableElement(e)
    }, r.disableAllFocusableElements = function(e, t, n, l) {
        return i.disableAllFocusableElements(e, t, n, l)
    }, r.enableAllFocusableElements = function(e) {
        return i.enableAllFocusableElements(e)
    }, r.isFromDefaultSelector = function(e) {
        return e.target.classList.contains("oj-selectorbox")
    }, r.getActionableElementsInNode = function(e) {
        return i.getActionableElementsInNode(e)
    }, r.isElementOrAncestorFocusable = function(e, t) {
        return !(null == e || t && t(e)) && (!!e.hasAttribute(r._DATA_OJ_TABMOD) || (parseInt(e.getAttribute(r._TAB_INDEX), 10) >= 0 || (r._FOCUSABLE_ELEMENTS_TAG.indexOf(e.tagName.toLowerCase()) > -1 || r.isElementOrAncestorFocusable(e.parentElement, t))))
    }, r.handleActionableTab = function(e, t) {
        var n = r.getFocusableElementsInNode(t);
        return n.length > 0 && e.target === n[n.length - 1] && (n[0].focus(), !0)
    }, r.handleActionablePrevTab = function(e, t) {
        var n = r.getFocusableElementsInNode(t);
        return n.length > 0 && e.target === n[0] && (n[n.length - 1].focus(), !0)
    }, r.isEventClickthroughDisabled = function(e, t) {
        for (var n = e.target; null != n && n !== t;) {
            if (r.isClickthroughDisabled(n)) return !0;
            n = n.parentNode
        }
        return !1
    }, r.isClickthroughDisabled = function(e) {
        return "disabled" === e.dataset.ojClickthrough
    }, r.getDefaultScrollBarWidth = function(e) {
        var t;
        if (e && e.style) {
            var n = e.style.visibility,
                l = e.style.position,
                i = e.style.overflowY,
                r = e.style.height,
                o = e.style.width;
            e.style.visibility = "hidden", e.style.position = "absolute", e.style.overflowY = "hidden", e.style.height = "50px", e.style.width = "50px";
            var s = e.offsetWidth - e.clientWidth;
            e.style.overflowY = "scroll", t = e.offsetWidth - e.clientWidth - s, e.style.width = o, e.style.height = r, e.style.overflowY = i, e.style.position = l, e.style.visibility = n
        }
        return t
    }, r.disableDefaultBrowserStyling = function(e) {
        e.setAttribute("x-ms-format-detection", "none")
    }, r.applyMergedInlineStyles = function(e, t, n) {
        var l = r.convertStringToStyleObj(n),
            i = r.convertStringToStyleObj(t),
            o = Object.assign({}, l, i);
        r.applyStyleObj(e, o)
    }, r.convertStringToStyleObj = function(e) {
        var t = {};
        if (e.split)
            for (var n = e.split(";"), l = 0; l < n.length; l++) {
                var i = n[l];
                if ("" !== i) {
                    var r = i.split(":");
                    2 === r.length && (t[r[0].trim()] = r[1].trim())
                }
            }
        return t
    }, r.applyStyleObj = function(e, t) {
        for (var n = Object.keys(t), l = Object.values(t), i = 0; i < n.length; i++) e.style[n[i]] = l[i]
    }, r.isMobileTouchDevice = function() {
        var e = t.AgentUtils.getAgentInfo();
        return e.os === t.AgentUtils.OS.IOS || e.os === t.AgentUtils.OS.ANDROID || e.os === t.AgentUtils.OS.WINDOWSPHONE
    }, r.getNoJQFocusHandlers = function(e, t) {
        return n.getNoJQFocusHandlers(e, t)
    }, r.areKeySetsEqual = function(e, n) {
        if (e === n) return !0;
        var l, i, r = e.isAddAll();
        if (r !== n.isAddAll()) return !1;
        if (r ? (l = e.deletedValues(), i = n.deletedValues()) : (l = e.values(), i = n.values()), l.size !== i.size) return !1;
        for (var o = l.values(), s = i.values(), E = o.next(), a = s.next(); !E.done;) {
            if (!t.KeyUtils.equals(E.value, a.value)) return !1;
            E = o.next(), a = s.next()
        }
        return !0
    }, r.KEYBOARD_KEYS = {
        _SPACEBAR: " ",
        _SPACEBAR_IE: "SpaceBar",
        _SPACEBAR_CODE: 32,
        _ENTER: "Enter",
        _ENTER_CODE: 13,
        _UP: "ArrowUp",
        _UP_IE: "Up",
        _UP_CODE: 38,
        _DOWN: "ArrowDown",
        _DOWN_IE: "Down",
        _DOWN_CODE: 40,
        _LEFT: "ArrowLeft",
        _LEFT_IE: "Left",
        _LEFT_CODE: 37,
        _RIGHT: "ArrowRight",
        _RIGHT_IE: "Right",
        _RIGHT_CODE: 39,
        _HOME: "Home",
        _HOME_CODE: 36,
        _END: "End",
        _END_CODE: 35,
        _TAB: "Tab",
        _TAB_CODE: 9,
        _ESCAPE: "Escape",
        _ESCAPE_IE: "Esc",
        _ESCAPE_CODE: 27,
        _F2: "F2",
        _F2_CODE: 113,
        _NUM5_KEY: "5",
        _NUM5_KEY_CODE: 53,
        _LETTER_A: "a",
        _LETTER_A_UPPERCASE: "A",
        _LETTER_A_CODE: 65
    }, r.isEnterKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._ENTER || e === r.KEYBOARD_KEYS._ENTER_CODE
    }, r.isSpaceBarKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._SPACEBAR || e === r.KEYBOARD_KEYS._SPACEBAR_IE || e === r.KEYBOARD_KEYS._SPACEBAR_CODE
    }, r.isEscapeKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._ESCAPE || e === r.KEYBOARD_KEYS._ESCAPE_IE || e === r.KEYBOARD_KEYS._ESCAPE_CODE
    }, r.isTabKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._TAB || e === r.KEYBOARD_KEYS._TAB_CODE
    }, r.isF2KeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._F2 || e === r.KEYBOARD_KEYS._F2_CODE
    }, r.isHomeKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._HOME || e === r.KEYBOARD_KEYS._HOME_CODE
    }, r.isEndKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._END || e === r.KEYBOARD_KEYS._END_CODE
    }, r.isArrowUpKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._UP || e === r.KEYBOARD_KEYS._UP_IE || e === r.KEYBOARD_KEYS._UP_CODE
    }, r.isArrowDownKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._DOWN || e === r.KEYBOARD_KEYS._DOWN_IE || e === r.KEYBOARD_KEYS._DOWN_CODE
    }, r.isArrowLeftKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._LEFT || e === r.KEYBOARD_KEYS._LEFT_IE || e === r.KEYBOARD_KEYS._LEFT_CODE
    }, r.isArrowRightKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._RIGHT || e === r.KEYBOARD_KEYS._RIGHT_IE || e === r.KEYBOARD_KEYS._RIGHT_CODE
    }, r.isNumberFiveKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._NUM5_KEY || e === r.KEYBOARD_KEYS._NUM5_KEY_CODE
    }, r.isLetterAKeyEvent = function(e) {
        return e === r.KEYBOARD_KEYS._LETTER_A || e === r.KEYBOARD_KEYS._LETTER_A_UPPERCASE || e === r.KEYBOARD_KEYS._LETTER_A_CODE
    }, r.getAddEventKeysResult = function(e, t, n) {
        var l, i, o, s, E;

        function a(e, t) {
            return {
                key: e,
                index: t
            }
        }
        var u = [...e],
            c = [];
        t.keys.forEach(function(e) {
            c.push(e)
        });
        var _ = [],
            A = t.addBeforeKeys ? t.addBeforeKeys : t.afterKeys;
        null != A && A.forEach(function(e) {
            _.push(e)
        });
        var d = t.indexes;
        if (_.length === c.length)
            for (var K = 0; c.length !== K;)
                for (K = c.length, l = c.length - 1; l >= 0; l--) o = c[l], r.containsKey(u, o) || (null != (i = _[l]) ? -1 !== (E = r._indexOfKey(u, i)) && (u.splice(E, 0, o), _.splice(l, 1), c.splice(l, 1)) : n && (u.push(o), _.splice(l, 1), c.splice(l, 1)));
        else if (null != d && d.length === c.length) {
            var f = [];
            for (l = 0; l < c.length; l++)
                if (o = c[l], !r.containsKey(u, o))
                    if (null != (s = d[l])) {
                        for (var y = !1, O = 0; O < f.length; O++)
                            if (f[O].index > s) {
                                f.splice(O, 0, a(o, s)), y = !0;
                                break
                            }
                        y || f.push(a(o, s))
                    } else n && u.push(o);
            for (l = 0; l < f.length; l++) {
                var D = f[l];
                D.index < u.length ? u.splice(D.index, 0, D.key) : D.index === u.length && n && u.push(D.key)
            }
        } else n && c.forEach(function(e) {
            u.push(e)
        });
        return u
    }, r.containsKey = function(e, n) {
        for (var l = 0; l < e.length; l++)
            if (t.KeyUtils.equals(e[l], n)) return !0;
        return !1
    }, r._indexOfKey = function(e, n) {
        for (var l = 0; l < e.length; l++)
            if (t.KeyUtils.equals(e[l], n)) return l;
        return -1
    }, r.calculateOffsetTop = function(e, t) {
        for (var n = 0, l = t; l && l !== e && e.contains(l);) n += l.offsetTop, l = l.offsetParent;
        return n
    }, r.getLogicalChildPopup = function(e) {
        return i.getLogicalChildPopup(e)
    }, r.isElementInScrollerBounds = function(e, t) {
        var n, l;
        if (t === document.documentElement) n = 0, l = document.documentElement.clientHeight;
        else {
            var i = t.getBoundingClientRect();
            n = i.top, l = i.bottom
        }
        var r = e.getBoundingClientRect();
        return r.top >= n && r.bottom <= l
    }, r.getEventDetail = function(e, t) {
        return new Promise(n => {
            if (t.data && t.metadata) n(t);
            else {
                const i = e.getCapability("fetchByKeys");
                i && "lookup" === i.implementation ? e.fetchByKeys({
                    keys: new Set(t.keys),
                    scope: "global"
                }).then(e => {
                    t.data = [], t.metadata = [], t.keys.forEach(n => {
                        const l = e.results.get(n);
                        t.data.push(l.data), t.metadata.push(l.metadata)
                    }), n(t)
                }, e => {
                    l.error("Error fetching event detail due to fetchByKeys: " + e), n(null)
                }) : (l.error("Error fetching event detail due to fetchByKeys: capability"), n(null))
            }
        })
    };
    const o = r.applyMergedInlineStyles,
        s = r.applyStyleObj,
        E = r.areKeySetsEqual,
        a = r.containsKey,
        u = r.convertStringToStyleObj,
        c = r.disableElement,
        _ = r.disableAllFocusableElements,
        A = r.disableDefaultBrowserStyling,
        d = r.enableAllFocusableElements,
        K = r.getActionableElementsInNode,
        f = r.getAddEventKeysResult,
        y = r.getDefaultScrollBarWidth,
        O = r.isElementOrAncestorFocusable,
        D = r.isIterateAfterDoneNotAllowed = function(e) {
            if (e && e.getCapability) {
                var t = e.getCapability("fetchFirst");
                if (t && "notAllowed" === t.iterateAfterDone) return !0
            }
            return !1
        },
        b = r.getFocusableElementsInNode,
        v = r.getLogicalChildPopup,
        g = r.getNoJQFocusHandlers,
        S = r.handleActionablePrevTab,
        h = r.handleActionableTab,
        p = r.isArrowDownKeyEvent,
        Y = r.isArrowLeftKeyEvent,
        R = r.isArrowRightKeyEvent,
        B = r.isArrowUpKeyEvent,
        C = r.isClickthroughDisabled,
        T = r.isEndKeyEvent,
        m = r.isEnterKeyEvent,
        I = r.isEscapeKeyEvent,
        N = r.isEventClickthroughDisabled,
        F = r.isFromDefaultSelector,
        w = r.isF2KeyEvent,
        P = r.isHomeKeyEvent,
        L = r.isMobileTouchDevice,
        H = r.isSpaceBarKeyEvent,
        j = r.isTabKeyEvent,
        U = r.isNumberFiveKeyEvent,
        k = r.isLetterAKeyEvent,
        x = r.KEYBOARD_KEYS,
        M = r.CHECKVIEWPORT_THRESHOLD,
        W = r.calculateOffsetTop,
        q = r.isElementInScrollerBounds,
        G = r.getEventDetail,
        V = r.isRequestIdleCallbackSupported = function() {
            return null != window.requestIdleCallback && null != window.cancelIdleCallback && null != window.IdleDeadline
        };
    e.CHECKVIEWPORT_THRESHOLD = M, e.KEYBOARD_KEYS = x, e.applyMergedInlineStyles = o, e.applyStyleObj = s, e.areKeySetsEqual = E, e.calculateOffsetTop = W, e.containsKey = a, e.convertStringToStyleObj = u, e.disableAllFocusableElements = _, e.disableDefaultBrowserStyling = A, e.disableElement = c, e.enableAllFocusableElements = d, e.getActionableElementsInNode = K, e.getAddEventKeysResult = f, e.getDefaultScrollBarWidth = y, e.getEventDetail = G, e.getFocusableElementsInNode = b, e.getLogicalChildPopup = v, e.getNoJQFocusHandlers = g, e.handleActionablePrevTab = S, e.handleActionableTab = h, e.isArrowDownKeyEvent = p, e.isArrowLeftKeyEvent = Y, e.isArrowRightKeyEvent = R, e.isArrowUpKeyEvent = B, e.isClickthroughDisabled = C, e.isElementInScrollerBounds = q, e.isElementOrAncestorFocusable = O, e.isEndKeyEvent = T, e.isEnterKeyEvent = m, e.isEscapeKeyEvent = I, e.isEventClickthroughDisabled = N, e.isF2KeyEvent = w, e.isFromDefaultSelector = F, e.isHomeKeyEvent = P, e.isIterateAfterDoneNotAllowed = D, e.isLetterAKeyEvent = k, e.isMobileTouchDevice = L, e.isNumberFiveKeyEvent = U, e.isRequestIdleCallbackSupported = V, e.isSpaceBarKeyEvent = H, e.isTabKeyEvent = j, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojdatacollection-common.js.map