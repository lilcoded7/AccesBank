/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "jquery", "ojs/ojdomutils"], function(e, t, n) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    const o = {
            _EVENT_NAMESPACE: ".contextMenu",
            stopDetectContextMenuGesture: function(e) {
                e._clickListener && (t(e).off(o._EVENT_NAMESPACE).removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click", e._clickListener, !0), clearTimeout(e._contextMenuPressHoldTimer), delete e._clickListener, delete e._contextMenuPressHoldTimer), e._touchStartAndMouseDownListener && (e.removeEventListener("touchstart", e._touchStartAndMouseDownListener, {
                    passive: !1
                }), delete e._touchStartAndMouseDownListener), e._touchMoveListener && (e.removeEventListener("touchmove", e._touchMoveListener, {
                    passive: !0
                }), delete e._touchMoveListener)
            },
            startDetectContextMenuGesture: function(e, u) {
                var r, s, c, i, a = n.PRESS_HOLD_THRESHOLD,
                    d = !1,
                    l = !1,
                    v = null,
                    p = o._EVENT_NAMESPACE,
                    h = !1;

                function m(n, o, r) {
                    if ((d = r) && t(e).one("touchend" + p, function() {
                            h = !0, setTimeout(function() {
                                h = !1
                            }, 50)
                        }), "touchstart" === v && "contextmenu" === n.type || "contextmenu" === v && "touchstart" === n.type || "keydown" === v && "contextmenu" === n.type) return "keydown" === v && "contextmenu" === n.type && n.preventDefault(), v = null, void clearTimeout(i);
                    n.isDefaultPrevented && n.isDefaultPrevented() || n.originalEvent && n.originalEvent.defaultPrevented || n.defaultPrevented || ("touchstart" !== n.type && "touchmove" !== n.type || (n.originalEvent = n), u(n, o), (n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && ("touchstart" !== n.type && "contextmenu" !== n.type && "keydown" !== n.type || (v = n.type, i = setTimeout(function() {
                        v = null
                    }, 300))))
                }
                var f = function(e) {
                    d && (e.preventDefault(), e.stopPropagation(), d = !1)
                };
                e._clickListener = f, e.addEventListener("click", f, !0);
                var y = function(t) {
                    if ("mousedown" !== t.type || !h) {
                        if (d = !1, "touchstart" === t.type && 1 === t.touches.length) {
                            var n = t.touches[0];
                            s = n.pageX, c = n.pageY, l = !0, r = setTimeout(m.bind(void 0, t, "touch", !0), a), e._contextMenuPressHoldTimer = r
                        }
                        return !0
                    }
                };
                e._touchStartAndMouseDownListener = y, e.addEventListener("touchstart", y, {
                    passive: !1
                });
                var _ = function(e) {
                    var t = e.touches[0];
                    return (Math.abs(s - t.pageX) > 5 || Math.abs(c - t.pageY) > 5) && (l = !1, clearTimeout(r)), !0
                };
                e._touchMoveListener = _, e.addEventListener("touchmove", _, {
                    passive: !0
                }), t(e).on("mousedown" + p, y).on("touchend" + p + " touchcancel" + p, function() {
                    return l = !1, clearTimeout(r), !0
                }).on("keydown" + p + " contextmenu" + p, function(e) {
                    ("contextmenu" === e.type || 121 === e.keyCode && e.shiftKey) && m(e, l ? "touch" : "keydown" === e.type ? "keyboard" : "mouse", !1);
                    return !0
                }), n.isTouchSupported() && t(e).addClass("oj-menu-context-menu-launcher")
            }
        },
        u = o.startDetectContextMenuGesture,
        r = o.stopDetectContextMenuGesture;
    e.startDetectContextMenuGesture = u, e.stopDetectContextMenuGesture = r, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojgestureutils.js.map