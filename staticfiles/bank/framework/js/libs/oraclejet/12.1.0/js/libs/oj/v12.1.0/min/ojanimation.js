/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "jquery", "ojs/ojdomutils", "ojs/ojthemeutils", "ojs/ojlogger"], function(e, t, n, i, a, o) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    const r = {};
    t._registerLegacyNamespaceProp("AnimationUtils", r), r._getName = function(e, t) {
        if (!r._nameMap) {
            r._nameMap = {};
            var n = r._nameMap,
                i = e.style;
            n.backfaceVisibility = void 0 !== i.webkitBackfaceVisibility ? "webkitBackfaceVisibility" : "backfaceVisibility", n.transform = void 0 !== i.webkitTransform ? "webkitTransform" : "transform", n.transformOrigin = void 0 !== i.webkitTransformOrigin ? "webkitTransformOrigin" : "transformOrigin", n.transition = void 0 !== i.webkitTransition ? "webkitTransition" : "transition", n.transitionend = void 0 !== i.webkitTransition ? "webkitTransitionEnd" : "transitionend"
        }
        return r._nameMap[t] || t
    }, r._getElementStyle = function(e, t) {
        return e.style[r._getName(e, t)]
    }, r._setElementStyle = function(e, t, n) {
        e.style[r._getName(e, t)] = n
    }, r._animate = function(e, t, i, a, o, s) {
        var l = [].concat(o),
            f = function(n, f) {
                var c = function(e) {
                        var t = 0 === e.propertyName.indexOf("-webkit-") ? e.propertyName.substr(8) : e.propertyName;
                        t = r._getCamelCasePropName(t);
                        var n = l.indexOf(t);
                        n > -1 && (l.length > 1 ? l.splice(n, 1) : u())
                    },
                    d = 0,
                    m = !1;

                function u() {
                    m || (d && (window.cancelAnimationFrame(d), d = 0), e.removeEventListener(r._getName(e, "transitionend"), c), n && n(!0), m = !0)
                }
                null == i && (i = {}), null == i.css && (i.css = {}), i.css.transition = r._createTransitionValue(e, o, a);
                var p = r._saveStyle(e, t, i, a, s || o);
                r._applyState(e, t, p > 1), e.addEventListener(r._getName(e, "transitionend"), c);
                var g = a.duration,
                    h = a.delay,
                    v = a._skipPromise;

                function _() {
                    d = 0, r._applyState(e, i, p > 1)
                }
                null == t ? _() : (a._noReflow || (r._x = e.offsetWidth), d = window.requestAnimationFrame(_));
                var y = r._getTotalTiming(g, h);
                v || setTimeout(u, y + 100)
            };
        return a._skipPromise ? (f(null), null) : new Promise(f).then(function() {
            t && t.addClass && n(e).removeClass(t.addClass), i && i.addClass && n(e).removeClass(i.addClass), r._restoreStyle(e)
        })
    }, r._saveCssValues = function(e, t, n, i) {
        for (var a = Object.keys(t), o = Object.prototype.hasOwnProperty, s = 0; s < a.length; s++) {
            var l = a[s];
            o.call(n, l) || i && -1 !== i.indexOf(l) || (n[l] = r._getElementStyle(e, l))
        }
    }, r._saveStyle = function(e, t, n, i, a) {
        var o = e._ojSavedStyle || {},
            s = t && t.css ? t.css : {},
            l = n && n.css ? n.css : {},
            f = a;
        i && "all" === i.persist || (f = null), r._saveCssValues(e, s, o, f), r._saveCssValues(e, l, o, f), e._ojSavedStyle = o;
        var c = e._ojEffectCount || 0;
        return c += 1, e._ojEffectCount = c, c
    }, r._restoreStyle = function(e) {
        var t = e,
            n = t._ojEffectCount;
        if (n > 1) t._ojEffectCount = n - 1;
        else {
            var i = t._ojSavedStyle;
            if (i) {
                for (var a = Object.keys(i), o = 0; o < a.length; o++) {
                    var s = a[o];
                    r._setElementStyle(t, s, i[s])
                }
                delete t._ojSavedStyle, delete t._ojEffectCount
            }
        }
    }, r._getCamelCasePropName = function(e) {
        if (e.indexOf("-") >= 0) {
            for (var t = "", n = e.split("-"), i = 0; i < n.length; i++) {
                var a = n[i];
                a && (t ? t += a.charAt(0).toUpperCase() + a.slice(1) : t = a)
            }
            return t
        }
        return e
    }, r._getHyphenatedPropName = function(e) {
        var t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        return 0 === t.indexOf("webkit") && (t = "-" + t), t
    }, r._concatMultiValue = function(e, t, n, i, a) {
        if (t.css[n]) {
            var o = r._getElementStyle(e, n);
            o && 0 !== o.indexOf(i) && (t.css[n] = o + a + t.css[n])
        }
    }, r._splitTransform = function(e) {
        var t = [];
        if (e && "none" !== e)
            for (var n = e, i = n.indexOf(")"); i > 0;) {
                var a = n.substr(0, i + 1);
                t.push(a.trim()), i = (n = n.slice(i + 1)).indexOf(")")
            }
        return t
    }, r._getTransformFuncName = function(e) {
        var t = e.indexOf("(");
        return t >= 1 ? e.substr(0, t) : e
    }, r._applyTransform = function(e, t) {
        for (var n = r._getElementStyle(e, "transform"), i = r._splitTransform(n), a = r._splitTransform(t), o = [], s = 0; s < a.length; s++) {
            var l = r._getTransformFuncName(a[s]),
                f = !1;
            if (l)
                for (var c = 0; c < i.length; c++) 0 === i[c].indexOf(l + "(") && (i[c] = a[s], f = !0);
            f || o.push(a[s])
        }
        return (i = i.concat(o)).join(" ")
    }, r._applyState = function(e, t, i) {
        if (t) {
            if (t.css) {
                i && r._concatMultiValue(e, t, "transition", "all", ", "), t.css.transform && (t.css.transform = r._applyTransform(e, t.css.transform));
                for (var a = t.css, o = Object.keys(a), s = 0; s < o.length; s++) {
                    var l = o[s];
                    r._setElementStyle(e, l, a[l])
                }
            }
            t.addClass && n(e).addClass(t.addClass), t.removeClass && n(e).removeClass(t.removeClass)
        }
    }, r._getTimingValue = function(e) {
        var t = parseFloat(e);
        return isNaN(t) ? 0 : e.indexOf("ms") > -1 ? t : 1e3 * t
    }, r._getTotalTiming = function(e, t) {
        var n = r._getTimingValue(e);
        return n > 0 ? n + (t ? r._getTimingValue(t) : 0) : 0
    }, r._calcCssTime = function(e, t, n) {
        for (var i = e.split(","), a = t.split(","), o = n.split(","), s = i.length, l = a.length, f = o.length, c = 0, d = 0; d < s; d++) {
            var m = o[d % f],
                u = a[d % l],
                p = r._getTotalTiming(m, u);
            c = Math.max(c, p)
        }
        return c
    }, r._calcEffectTime = function(e) {
        var t, n, i, a = window.getComputedStyle(e);
        t = a.animationName || a.webkitAnimationName, n = a.animationDelay || a.webkitAnimationDelay, i = a.animationDuration || a.webkitAnimationDuration;
        var o = r._calcCssTime(t, n, i);
        t = a.transitionProperty || a.webkitTransitionProperty, n = a.transitionDelay || a.webkitTransitionDelay, i = a.transitionDuration || a.webkitTransitionDuration;
        var s = r._calcCssTime(t, n, i);
        return Math.max(o, s)
    }, r._fillEmptyOptions = function(e, t) {
        e.delay = e.delay || t.delay, e.duration = e.duration || t.duration, e.timingFunction = e.timingFunction || t.timingFunction, e.persist = e.persist || t.persist
    }, r._triggerEvent = function(e, t, n, i) {
        var a;
        if (i && i._trigger) a = !i._trigger(t, null, n);
        else {
            var o = "oj" + t.substr(0, 1).toUpperCase() + t.substr(1),
                r = new CustomEvent(o, {
                    detail: n,
                    bubbles: !0,
                    cancelable: !0
                }),
                s = i || e;
            s.dispatchEvent && s.dispatchEvent(r), a = r.defaultPrevented
        }
        return a
    }, r.startAnimation = function(e, t, i, a) {
        return e = n(e)[0], new Promise(function(o, s) {
            var l = n(e),
                f = "oj-animate-" + t,
                c = f + "-active",
                d = !1,
                m = !1,
                u = function() {
                    if (d && m) {
                        l.removeClass(f), l.removeClass(c), r._restoreStyle(e), o(!0);
                        var n = {
                            action: t,
                            element: e
                        };
                        r._triggerEvent(e, "animateEnd", n, a)
                    }
                },
                p = function() {
                    d = !0, u()
                },
                g = function() {
                    m = !0, u()
                };
            r._saveStyle(e, null, null, null, null);
            var h = {
                action: t,
                element: e,
                endCallback: p
            };
            if (!r._triggerEvent(e, "animateStart", h, a)) {
                for (var v = [].concat(i), _ = [], y = {}, x = 0; x < v.length; x++) {
                    var b, C = v[x],
                        O = "";
                    null != C && "none" !== C && ("string" == typeof C ? (O = C, b = {}) : "object" == typeof C && (O = C.effect, b = n.extend({}, C)), r._fillEmptyOptions(b, y), y = n.extend({}, b)), O && r[O] && _.push(r[O](e, b))
                }
                _.length ? Promise.all(_).then(p) : p()
            }
            l.addClass(f);
            var w = window.requestAnimationFrame(function() {
                w = 0, l.addClass(c);
                var t = r._calcEffectTime(e);
                t > 0 ? setTimeout(g, t + 100) : g()
            });
            setTimeout(function() {
                w && (window.cancelAnimationFrame(w), w = 0, g())
            }, 1e3)
        })
    }, r._mergeOptions = function(e, t) {
        return null == r._defaultOptions && (r._defaultOptions = a.parseJSONFromFontFamily("oj-animation-effect-default-options")), n.extend({
            duration: "400ms"
        }, r._defaultOptions ? r._defaultOptions[e] : null, t)
    }, r._createTransitionValue = function(e, t, n) {
        var i = "";
        if (t)
            for (var a = 0; a < t.length; a++) {
                var o = r._getName(e, t[a]);
                i += (a > 0 ? ", " : "") + r._getHyphenatedPropName(o) + " " + n.duration, n.timingFunction && (i += " " + n.timingFunction), n.delay && (i += " " + n.delay)
            }
        return i
    }, r._fade = function(e, t, n, i, a) {
        var o = r._mergeOptions(n, t),
            s = {
                css: {
                    opacity: i
                }
            },
            l = {
                css: {
                    opacity: a
                }
            };
        return o && (o.startOpacity && (s.css.opacity = o.startOpacity), o.endOpacity && (l.css.opacity = o.endOpacity)), r._animate(e, s, l, o, ["opacity"])
    }, r.fadeIn = function(e, t) {
        return r._fade(e, t, "fadeIn", 0, 1)
    }, r.fadeOut = function(e, t) {
        return r._fade(e, t, "fadeOut", 1, 0)
    }, r.expand = function(e, t) {
        return r._expandCollapse(e, t, !0)
    }, r.collapse = function(e, t) {
        return r._expandCollapse(e, t, !1)
    }, r._wrapRowContent = function(e, t) {
        var n, i, a = [],
            o = e.children,
            r = [],
            s = [];
        for (e._ojSavedHeight = e.style.height, i = 0; i < o.length; i++) {
            n = o[i];
            var l = window.getComputedStyle(n);
            r.push(l.padding), s.push(l.textAlign), n._ojSavedPadding = n.style.padding
        }
        for (i = 0; i < o.length; i++) {
            n = o[i];
            var f = document.createElement("div");
            f.style.overflow = "hidden;";
            var c = document.createElement("div");
            for (c.style.display = "table-cell", c.style.verticalAlign = "middle", c.style.boxSizing = "border-box", c.style.height = t, c.style.padding = r[i], c.style.textAlign = s[i], f.appendChild(c); n.firstChild;) c.appendChild(n.firstChild);
            n.appendChild(f), n.style.padding = "0", a.push(f)
        }
        return e.style.height = "0", a
    }, r._unwrapRowContent = function(e) {
        for (var t = e.children, n = 0; n < t.length; n++) {
            var i = t[n],
                a = i.children[0];
            if (a) {
                var o = a.children[0];
                if (o)
                    for (; o.firstChild;) i.appendChild(o.firstChild);
                i.removeChild(a)
            }
            i.style.padding = i._ojSavedPadding, delete i._ojSavedPadding
        }
        e.style.height = e._ojSavedHeight, delete e._ojSavedHeight
    }, r._expandCollapseRow = function(e, t, i) {
        var a = Promise.resolve(),
            o = e.offsetHeight + "px",
            s = r._wrapRowContent(e, o),
            l = n.extend({}, t);
        if (i ? l.endMaxHeight || (l.endMaxHeight = o) : l.startMaxHeight || (l.startMaxHeight = o), l.persist = "all", l._noReflow = !0, s.length)
            for (var f = 0; f < s.length; f++) 0 === f ? (l._skipPromise = !1, a = r._expandCollapse(s[f], l, i)) : (l._skipPromise = !0, r._expandCollapse(s[f], l, i));
        return a.then(function() {
            null != t && "all" === t.persist || r._unwrapRowContent(e)
        })
    }, r._getSizeLimit = function(e, t, n, i, a) {
        var o = n;
        if (!o)
            if (i) o = "0";
            else {
                var r = a ? t.maxWidth : t.maxHeight;
                o = "none" !== r ? r : (a ? e.offsetWidth : e.offsetHeight) + "px"
            }
        return o
    }, r._expandCollapse = function(e, t, n) {
        if (e && "TR" === e.tagName) return r._expandCollapseRow(e, t, n);
        var i = r._mergeOptions(n ? "expand" : "collapse", t),
            a = {
                css: {}
            },
            o = {
                css: {}
            },
            s = i.direction || "height",
            l = a.css,
            f = o.css,
            c = window.getComputedStyle(e),
            d = [];
        if ("both" === s || "height" === s) {
            var m = r._getSizeLimit(e, c, i.startMaxHeight, n, !1),
                u = r._getSizeLimit(e, c, i.endMaxHeight, !n, !1);
            l.maxHeight = m, f.maxHeight = u, d.push("maxHeight")
        }
        if ("both" === s || "width" === s) {
            var p = r._getSizeLimit(e, c, i.startMaxWidth, n, !0),
                g = r._getSizeLimit(e, c, i.endMaxWidth, !n, !0);
            l.maxWidth = p, f.maxWidth = g, d.push("maxWidth")
        }
        l.overflow = i.overflow ? i.overflow : "hidden";
        var h = [].concat(d);
        return h.push("overflow"), r._animate(e, a, o, i, d, h)
    }, r.zoomIn = function(e, t) {
        return r._zoom(e, t, !0)
    }, r.zoomOut = function(e, t) {
        return r._zoom(e, t, !1)
    }, r._zoom = function(e, t, n) {
        var i, a = r._mergeOptions(n ? "zoomIn" : "zoomOut", t),
            o = {
                css: {}
            },
            s = {
                css: {}
            },
            l = a.axis || "both";
        i = "both" === l ? "scale" : "x" === l ? "scaleX" : "scaleY";
        var f = o.css,
            c = s.css;
        return f.transform = i + "(" + (n ? 0 : 1) + ") translateZ(0)", c.transform = i + "(" + (n ? 1 : 0) + ") translateZ(0)", f.transformOrigin = a.transformOrigin || "center", r._animate(e, o, s, a, ["transform"])
    }, r.slideIn = function(e, t) {
        return r._slide(e, t, !0)
    }, r.slideOut = function(e, t) {
        return r._slide(e, t, !1)
    }, r._slide = function(e, t, n) {
        var a = r._mergeOptions(n ? "slideIn" : "slideOut", t),
            o = {
                css: {}
            },
            s = {
                css: {}
            },
            l = a.direction || "start",
            f = "0",
            c = "0",
            d = o.css,
            m = s.css;
        if (a.offsetX || a.offsetY) a.offsetX && (f = a.offsetX), a.offsetY && (c = a.offsetY);
        else {
            var u = "rtl" === i.getReadingDirection();
            switch (l) {
                case "left":
                    f = (n ? e.offsetWidth : -e.offsetWidth) + "px";
                    break;
                case "right":
                    f = (n ? -e.offsetWidth : e.offsetWidth) + "px";
                    break;
                case "top":
                    c = (n ? e.offsetHeight : -e.offsetHeight) + "px";
                    break;
                case "bottom":
                    c = (n ? -e.offsetHeight : e.offsetHeight) + "px";
                    break;
                case "end":
                    f = (n ? -e.offsetWidth : e.offsetWidth) * (u ? -1 : 1) + "px";
                    break;
                default:
                    f = (n ? e.offsetWidth : -e.offsetWidth) * (u ? -1 : 1) + "px"
            }
        }
        return n ? (d.transform = "translate(" + f + "," + c + ") translateZ(0)", m.transform = "translate(0,0) translateZ(0)") : (d.transform = "translate(0,0) translateZ(0)", m.transform = "translate(" + f + "," + c + ") translateZ(0)"), r._animate(e, o, s, a, ["transform"])
    }, r.ripple = function(e, t) {
        var i = r._mergeOptions("ripple", t),
            a = {
                css: {}
            },
            o = {
                css: {}
            },
            s = e.offsetWidth,
            l = e.offsetHeight,
            f = n("<div>").css({
                position: "absolute",
                overflow: "hidden"
            }),
            c = n("<div class='oj-animation-effect-ripple oj-animation-rippler'>"),
            d = "static" === window.getComputedStyle(e).position ? {
                left: e.offsetLeft,
                top: e.offsetTop
            } : {
                left: 0,
                top: 0
            };
        e.insertBefore(f[0], e.firstChild), f.css({
            left: d.left + "px",
            top: d.top + "px",
            width: s + "px",
            height: l + "px"
        }), f.prepend(c);
        var m = a.css,
            u = o.css;
        return r._setRippleOptions(m, c, f, i), m.transform = "scale(0) translateZ(0)", m.opacity = i.startOpacity || c.css("opacity"), u.transform = "scale(1) translateZ(0)", u.opacity = i.endOpacity || 0, i.persist = "all", r._animate(c[0], a, o, i, ["transform", "opacity"]).then(function() {
            f.remove()
        })
    }, r._setRippleOptions = function(e, t, n, i) {
        var a = e,
            o = t.width(),
            s = n.width(),
            l = n.height();
        if (i.diameter) {
            var f = i.diameter,
                c = parseInt(f, 10);
            isNaN(c) || (o = "%" === f.charAt(f.length - 1) ? Math.floor(Math.min(s, l) * (c / 100)) : c, a.width = o + "px", a.height = o + "px")
        }
        var d, m = "static" === n.css("position") ? n.position() : {
            left: 0,
            top: 0
        };
        null != (d = r._calcRippleOffset(i.offsetX, o, s, m.left)) && (a.left = d + "px"), null != (d = r._calcRippleOffset(i.offsetY, o, l, m.top)) && (a.top = d + "px"), i.color && (a.backgroundColor = i.color)
    }, r._calcRippleOffset = function(e, t, n, i) {
        var a, o = e || "50%",
            r = parseInt(o, 10);
        return isNaN(r) || (a = "%" === o.charAt(o.length - 1) ? n * (r / 100) - t / 2 : r - t / 2, a = Math.floor(a + i)), a
    }, r._removeRipple = function(e, t) {
        var i = t || {},
            a = i.removeEffect || "fadeOut",
            s = n(".oj-animation-rippler", e);
        if (0 !== s.length) return a in {
            fadeOut: 1,
            collapse: 1,
            zoomOut: 1,
            slideOut: 1
        } ? r[a](s, i).then(function() {
            s.remove()
        }) : s.remove();
        o.warn("No rippler so returning")
    }, r._calcBackfaceAngle = function(e) {
        var t, n = e.match(/^([+-]?\d*\.?\d*)(.*)$/),
            i = parseFloat(n[1]),
            a = n[2];
        switch (a) {
            case "deg":
                t = i - 180 + a;
                break;
            case "grad":
                t = i - 200 + a;
                break;
            case "rad":
                t = i - 3.1416 + a;
                break;
            case "turn":
                t = i - .5 + a;
                break;
            default:
                o.error("Unknown angle unit in flip animation: " + a)
        }
        return t
    }, r._flip = function(e, t, i, a, o) {
        if (t && "children" === t.flipTarget) {
            var s, l = [],
                f = n(e).children(),
                c = n.extend({}, t);
            delete c.flipTarget;
            var d = n.extend({}, c);
            d.startAngle = r._calcBackfaceAngle(t.startAngle || a), d.endAngle = r._calcBackfaceAngle(t.endAngle || o);
            for (var m = 0; m < f.length; m++) s = n(f[m]).hasClass("oj-animation-backface") ? d : c, l.push(r._flip(f[m], s, i, a, o));
            return Promise.all(l)
        }
        var u, p = {},
            g = {},
            h = {
                css: p
            },
            v = {
                css: g
            },
            _ = "rotateY(",
            y = "2000px",
            x = "hidden",
            b = "center";
        (t = r._mergeOptions(i, t)) && ("x" === t.axis && (_ = "rotateX("), t.startAngle && (a = t.startAngle), t.endAngle && (o = t.endAngle), t.perspective && (y = t.perspective), t.backfaceVisibility && (x = t.backfaceVisibility), t.transformOrigin && (b = t.transformOrigin)), u = "perspective(" + y + ") " + _;
        return p.transform = u + a + ")", p.backfaceVisibility = x, p.transformOrigin = b, g.transform = u + o + ")", r._animate(e, h, v, t, ["transform"], ["transform", "backfaceVisibility", "transformOrigin"])
    }, r.flipIn = function(e, t) {
        return r._flip(e, t, "flipIn", "-180deg", "0deg")
    }, r.flipOut = function(e, t) {
        return r._flip(e, t, "flipOut", "0deg", "180deg")
    }, r.addTransition = function(e, t) {
        var n = r._mergeOptions("addTransition", t);
        return r._animate(e, null, null, n, n.transitionProperties)
    }, r._createHeroParent = function() {
        var e = document.createElement("div"),
            t = document.body;
        t.appendChild(e), e.style.position = "absolute", e.style.height = t.offsetHeight + "px", e.style.width = t.offsetWidth + "px", e.style.left = t.offsetLeft + "px", e.style.top = t.offsetTop + "px", e.style.zIndex = 2e3, e.className = "oj-animation-host-viewport";
        var n = document.createElement("div");
        return n.className = "oj-animation-host", e.appendChild(n), n
    }, r._removeHeroParent = function(e) {
        if (e) {
            var t = e.parentNode;
            t && t.parentNode && t.parentNode.removeChild(t)
        }
    }, r._defaultHeroCreateClonedElement = function(e) {
        return e.fromElement.cloneNode(!0)
    }, r._defaultHeroHideFromAndToElements = function(e) {
        var t = e.fromElement,
            n = e.toElement;
        t.style.visibility = "hidden", n.style.visibility = "hidden"
    }, r._defaultHeroAnimateClonedElement = function(e) {
        return new Promise(function(t) {
            var n = e.clonedElement.style;
            n.transformOrigin = "left top", n.transform = "translate(0, 0) scale(1, 1)", requestAnimationFrame(function() {
                n.transitionDelay = e.delay, n.transitionDuration = e.duration, n.transitionTimingFunction = e.timingFunction, n.transitionProperty = "transform";
                var i = "translate(" + e.translateX + "px," + e.translateY + "px)";
                i += " scale(" + e.scaleX.toFixed(2) + "," + e.scaleY.toFixed(2) + ")", n.transform = i;
                var a = r._getTimingValue(e.delay) + r._getTimingValue(e.duration);
                setTimeout(function() {
                    t()
                }, a)
            })
        })
    }, r._defaultHeroShowToElement = function(e) {
        e.toElement.style.visibility = "visible"
    }, r._doAnimateHero = function(e, t, n, i, a, o) {
        var s = document.querySelector(t);
        if (null != s) {
            var l = e.getBoundingClientRect(),
                f = s.getBoundingClientRect(),
                c = f.left - l.left,
                d = f.top - l.top,
                m = f.width / l.width,
                u = f.height / l.height,
                p = {
                    fromElement: e,
                    toElement: s,
                    clonedElement: null,
                    translateX: c,
                    translateY: d,
                    scaleX: m,
                    scaleY: u,
                    toElementElapsedTime: i,
                    delay: n.delay,
                    duration: n.duration,
                    timingFunction: n.timingFunction
                },
                g = n.createClonedElement(p);
            p.clonedElement = g;
            var h = r._createHeroParent(),
                v = h.getBoundingClientRect();
            h.appendChild(g), g.style.position = "absolute", g.style.left = l.left - v.left + "px", g.style.top = l.top - v.top + "px", n.hideFromAndToElements(p), g.style.visibility = "visible", n.animateClonedElement(p).then(function() {
                _(), a()
            }).catch(function(e) {
                _(), o(e)
            })
        } else {
            i + 100 > n.toElementWaitTime ? o("toElement not found in DOM after toElementWaitTime has expired") : setTimeout(function() {
                r._doAnimateHero(e, t, n, i + 100, a, o)
            }, 100)
        }

        function _() {
            n.showToElement(p), r._removeHeroParent(h)
        }
    }, r.animateHero = function(e, t) {
        var n = e,
            i = {
                toElementWaitTime: 5e3,
                createClonedElement: r._defaultHeroCreateClonedElement,
                hideFromAndToElements: r._defaultHeroHideFromAndToElements,
                animateClonedElement: r._defaultHeroAnimateClonedElement,
                showToElement: r._defaultHeroShowToElement,
                delay: "0s",
                duration: "400ms",
                timingFunction: "ease"
            };
        return Object.assign(i, t), new Promise(function(e, a) {
            n ? t.toElementSelector ? r._doAnimateHero(n, t.toElementSelector, i, 0, e, a) : a("No options.toElementSelector specified") : a("No element specified")
        })
    };
    const s = r.startAnimation,
        l = r.fadeIn,
        f = r.fadeOut,
        c = r.expand,
        d = r.collapse,
        m = r.zoomIn,
        u = r.zoomOut,
        p = r.slideIn,
        g = r.slideOut,
        h = r.ripple,
        v = r.flipIn,
        _ = r.flipOut,
        y = r.addTransition,
        x = r.animateHero;
    e.addTransition = y, e.animateHero = x, e.collapse = d, e.expand = c, e.fadeIn = l, e.fadeOut = f, e.flipIn = v, e.flipOut = _, e.ripple = h, e.slideIn = p, e.slideOut = g, e.startAnimation = s, e.zoomIn = m, e.zoomOut = u, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojanimation.js.map