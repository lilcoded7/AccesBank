/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "jquery", "ojs/ojcomponentcore", "ojs/ojlogger", "ojs/ojdomutils", "ojs/ojpreact-patch", "jqueryui-amd/position", "ojs/ojcontext", "preact"], function(t, e, o, i, n, r, s, a, l, p) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
    const c = function(t) {
        this._tapCallback = t, this.Init()
    };
    e._registerLegacyNamespaceProp("SimpleTapRecognizer", c), e.Object.createSubclass(c, e.Object, "oj.SimpleTapRecognizer"), c.prototype.Init = function() {
        c.superclass.Init.call(this);
        var t = this._eventHandler.bind(this);
        this._eventHandlerCallback = t;
        for (var e, o = document.documentElement, i = 0; i < c._TOUCHEVENTS.length; i++) "touchstart" === (e = c._TOUCHEVENTS[i]) || "touchmove" === e ? o.addEventListener(e, t, {
            passive: !1,
            capture: !0
        }) : o.addEventListener(e, t, !0)
    }, c.prototype._eventHandler = function(t) {
        var e = this._tapCallback,
            o = t.type;
        if ("touchstart" === o) this._touchStartEvent = t, this._touchStartEvent._tapStart = (new Date).getTime();
        else if ("touchmove" === o || "touchcancel" === o) this._touchStartEvent = null;
        else if ("touchend" === o) {
            if (this._touchStartEvent) {
                var i = this._touchStartEvent._tapStart;
                if (isNaN(i)) e(this._touchStartEvent);
                else(new Date).getTime() - i < c._PRESSHOLDTHRESSHOLD && e(this._touchStartEvent)
            }
            this._touchStartEvent = null
        }
    }, c.prototype.destroy = function() {
        this._tapCallback = null;
        var t = this._eventHandlerCallback;
        this._eventHandlerCallback = null;
        for (var e, o = document.documentElement, i = 0; i < c._TOUCHEVENTS.length; i++) "touchstart" === (e = c._TOUCHEVENTS[i]) || "touchmove" === e ? o.removeEventListener(e, t, {
            passive: !1,
            capture: !0
        }) : o.removeEventListener(e, t, !0)
    }, c._TOUCHEVENTS = ["touchstart", "touchmove", "touchcancel", "touchend"], c._PRESSHOLDTHRESSHOLD = 700;
    const u = function() {
        this.Init()
    };
    e._registerLegacyNamespaceProp("PopupService", u), e.Object.createSubclass(u, e.Object, "oj.PopupService");
    const h = function() {
            this.Init()
        },
        f = {};
    u.prototype.Init = function() {
        u.superclass.Init.call(this)
    }, u.getInstance = function(t) {
        return u._popupService || (u._popupService = new h), u._popupService
    }, u.prototype.open = function(t) {
        e.Assert.failedInAbstractFunction()
    }, u.prototype.close = function(t) {
        e.Assert.failedInAbstractFunction()
    }, u.prototype.changeOptions = function(t) {
        e.Assert.failedInAbstractFunction()
    }, u.prototype.triggerOnDescendents = function(t, o, i) {
        e.Assert.failedInAbstractFunction()
    }, u.prototype.destroy = function() {
        u._popupService = null
    }, u.MODALITY = {
        NONE: "none",
        MODAL: "modal",
        MODELESS: "modeless"
    }, u.EVENT = {
        POPUP_REMOVE: "ojPopupRemove",
        POPUP_CLOSE: "ojPopupClose",
        POPUP_REFRESH: "ojPopupRefresh",
        POPUP_AUTODISMISS: "ojPopupAutoDismiss",
        POPUP_BEFORE_OPEN: "ojPopupBeforeOpen",
        POPUP_AFTER_OPEN: "ojPopupAfterOpen",
        POPUP_BEFORE_CLOSE: "ojPopupBeforeClose",
        POPUP_AFTER_CLOSE: "ojPopupAfterClose"
    }, u.LAYER_LEVEL = {
        TOP_LEVEL: "topLevel",
        NEAREST_ANCESTOR: "nearestAncestor"
    }, u.OPTION = {
        POPUP: "popup",
        EVENTS: "events",
        MODALITY: "modality",
        LAUNCHER: "launcher",
        POSITION: "position",
        LAYER_SELECTORS: "layerSelectors",
        LAYER_LEVEL: "layerLevel",
        CONTEXT: "context",
        CUSTOM_ELEMENT: "customElement"
    }, e.__registerWidget("oj.ojSurrogate", o.oj.baseComponent, {
        version: "1.0.0",
        widgetEventPrefix: "oj",
        options: {
            beforeDestroy: null
        },
        _ComponentCreate: function() {
            this._super(), this.element.uniqueId()
        },
        _invokeBeforeDestroy: function() {
            var t = this.options.beforeDestroy;
            this.options.beforeDestroy = null, t && t()
        },
        _destroy: function() {
            this._invokeBeforeDestroy(), this.element.removeUniqueId(), this._super()
        },
        _NotifyDetached: function() {
            this._invokeBeforeDestroy(), this._super()
        }
    });
    e.CustomElementBridge.register("oj-surrogate", {
        metadata: {
            properties: {
                beforeDestroy: {
                    type: "function"
                }
            },
            extension: {
                _WIDGET_NAME: "ojSurrogate"
            }
        }
    }), e._registerLegacyNamespaceProp("PopupServiceImpl", h), e.Object.createSubclass(h, u, "oj.PopupServiceImpl"), h.prototype.open = function(t) {
        e.Assert.assertObject(t);
        var s = t[u.OPTION.POPUP];
        e.Assert.assertPrototype(s, o);
        var a = f.getStatus(s);
        if (a === f.STATUS.UNKNOWN || a === f.STATUS.BEFORE_OPEN || a === f.STATUS.CLOSE) {
            var l = t[u.OPTION.LAUNCHER];
            e.Assert.assertPrototype(l, o);
            var p = t[u.OPTION.POSITION];
            e.Assert.assertObjectOrNull(p);
            var c = t[u.OPTION.EVENTS];
            e.Assert.assertObject(c);
            var _ = t[u.OPTION.MODALITY];
            (!_ || u.MODALITY.MODELESS !== _ && u.MODALITY.MODAL !== _) && (_ = u.MODALITY.NONE);
            var d = t[u.OPTION.LAYER_SELECTORS];
            e.Assert.assertString(d);
            var E = t[u.OPTION.CUSTOM_ELEMENT],
                g = t[u.OPTION.LAYER_LEVEL];
            (!g || u.LAYER_LEVEL.TOP_LEVEL !== g && u.LAYER_LEVEL.NEAREST_ANCESTOR !== g) && (g = u.LAYER_LEVEL.NEAREST_ANCESTOR);
            var T = c[u.EVENT.POPUP_BEFORE_OPEN];
            T && o.isFunction(T) || (T = h._defaultBeforeOpenCallback);
            var v = c[u.EVENT.POPUP_AFTER_OPEN];
            f.setStatus(s, f.STATUS.OPENING), r.setLogicalParent(s, l), f.addToAncestorLayer(s, l, _, d, g, E);
            var O, S = function() {
                try {
                    s.removeAttr("aria-hidden"), this._assertEventSink(), i.subtreeShown(s[0])
                } catch (t) {
                    n.error("Error opening popup:\n%o", t)
                } finally {
                    f.setStatus(s, f.STATUS.OPEN), v && v(t);
                    var r = f.getFirstAncestorLayer(s);
                    if (e.Assert.assertPrototype(r, o), f.applyEvents(r, c), !f._getSurrogate(r) && o.isFunction(c[u.EVENT.POPUP_REMOVE]))(0, c[u.EVENT.POPUP_REMOVE])()
                }
            };
            S = S.bind(this);
            try {
                O = T(t)
            } catch (t) {
                n.error("Error before open popup:\n%o", t)
            } finally {
                O && O instanceof Promise ? O.then(S) : S()
            }
        } else this._assertEventSink()
    }, h._defaultBeforeOpenCallback = function(t) {
        var i = t[u.OPTION.POPUP];
        e.Assert.assertPrototype(i, o);
        var n = t[u.OPTION.POSITION];
        i.show(), n && i.position(n)
    }, h.prototype.close = function(t) {
        e.Assert.assertObject(t);
        var s = t[u.OPTION.POPUP];
        e.Assert.assertPrototype(s, o);
        var a = f.getOpenPopupLayer(s);
        e.Assert.assertPrototype(a, o);
        var l = t[u.OPTION.EVENTS];
        l ? l = o.extend(f.getEvents(a), l) : (l = f.getEvents(a), t[u.OPTION.EVENTS] = l);
        var p = f.getStatus(s);
        if (p !== f.STATUS.OPEN && p !== f.STATUS.BEFORE_CLOSE || !l) this._assertEventSink();
        else {
            var c = l[u.EVENT.POPUP_BEFORE_CLOSE];
            c && o.isFunction(c) || (c = h._defaultBeforeCloseCallback);
            var _ = l[u.EVENT.POPUP_AFTER_CLOSE];
            f.setStatus(s, f.STATUS.CLOSING), f.applyEvents(a, {}), s.attr("aria-hidden", "true");
            var d, E = function() {
                try {
                    s.hide(), s.css({
                        top: "auto",
                        bottom: "auto",
                        left: "auto",
                        right: "auto"
                    }), f.removeFromAncestorLayer(s), r.setLogicalParent(s, null), this._assertEventSink(), i.subtreeHidden(s[0])
                } catch (t) {
                    n.error("Error closing popup:\n%o", t)
                } finally {
                    f.setStatus(s, f.STATUS.CLOSE), _ && o.isFunction(_) && _(t)
                }
            };
            E = E.bind(this);
            try {
                d = c(t)
            } catch (t) {
                n.error("Error before close popup:\n%o", t)
            } finally {
                d && d instanceof Promise ? d.then(E) : E()
            }
        }
    }, h._defaultBeforeCloseCallback = function(t) {
        var i = t[u.OPTION.POPUP];
        e.Assert.assertPrototype(i, o), i.hide()
    }, h.prototype.changeOptions = function(t) {
        e.Assert.assertObject(t);
        var i = t[u.OPTION.POPUP];
        if (e.Assert.assertPrototype(i, o), f.getStatus(i) === f.STATUS.OPEN) {
            var n = f.getOpenPopupLayer(i);
            e.Assert.assertPrototype(n, o);
            var r = t[u.OPTION.EVENTS];
            r && f.applyEvents(n, r);
            var s = t[u.OPTION.MODALITY];
            s && f.applyModality(n, s);
            var a = t[u.OPTION.LAYER_SELECTORS];
            e.StringUtils.isEmptyOrUndefined(a) || n.attr("class", a)
        }
    }, h.prototype.triggerOnDescendents = function(t, e, o) {
        if (f.isPopupOpen(t)) {
            var i = {};
            i.event = e, i.argsArray = o;
            var n = f.getFirstAncestorLayer(t);
            f.postOrderVisit(n, this._triggerOnDescendentsVisitCallback, i)
        }
    }, h.prototype._triggerOnDescendentsVisitCallback = function(t, e) {
        var i = e.event,
            n = e.argsArray,
            r = f.getEvents(t);
        return r && o.isFunction(r[i]) && r[i].apply(this, n), f.VISIT_RESULT.ACCEPT
    }, h.prototype._assertEventSink = function() {
        var t, e, o, i = f.hasPopupsOpen(),
            n = this._callbackEventFilter;
        if (!i && n) {
            for (window.removeEventListener("resize", h._refreshCallback, !0), window.removeEventListener("scroll", h._refreshCallback, !0), (e = document.documentElement).removeEventListener("mousewheel", h._refreshCallback, {
                    passive: !0,
                    capture: !0
                }), e.removeEventListener("DOMMouseScroll", h._refreshCallback, !0), this._callbackEventFilter = null, t = 0; t < h._REDISTRIBUTE_EVENTS.length; t++) o = h._REDISTRIBUTE_EVENTS[t], e.removeEventListener(o, n, !0);
            var s = this._simpleTapRecognizer;
            s && (s.destroy(), this._simpleTapRecognizer = null)
        } else if (i && !n) {
            for (window.addEventListener("resize", h._refreshCallback, !0), window.addEventListener("scroll", h._refreshCallback, !0), (e = document.documentElement).addEventListener("mousewheel", h._refreshCallback, {
                    passive: !0,
                    capture: !0
                }), e.addEventListener("DOMMouseScroll", h._refreshCallback, !0), n = this._eventFilterCallback.bind(this), this._callbackEventFilter = n, t = 0; t < h._REDISTRIBUTE_EVENTS.length; t++) o = h._REDISTRIBUTE_EVENTS[t], e.addEventListener(o, n, !0);
            r.isTouchSupported() && (this._simpleTapRecognizer = new c(n))
        }
    }, h.prototype._eventFilterCallback = function(t) {
        var e = o(t.target);
        if (f.hasPopupsOpen()) {
            if (!r.isChromeEvent(t) && ("focus" !== t.type || e.is(":focusable"))) {
                var i = f.getDefaultLayer();
                if ("keydown" !== t.type || !f.hasModalDialogOpen() || r.isAncestor(i[0], e[0])) {
                    var n = f.getFirstAncestorLayer(e),
                        s = i.find("." + h._FOCUS_WITHIN_SELECTOR).first();
                    if (i[0] !== n[0] ? n.hasClass(h._FOCUS_WITHIN_SELECTOR) || (s.length && s.removeClass(h._FOCUS_WITHIN_SELECTOR), n.addClass(h._FOCUS_WITHIN_SELECTOR)) : s.length && s.removeClass(h._FOCUS_WITHIN_SELECTOR), "focus" !== t.type || "-1" !== e.attr("tabindex")) {
                        for (var a = {}, l = h._COPY_SAFE_EVENT_PROPERTIES, p = {}, c = 0; c < l.length; c++) {
                            var u = l[c],
                                _ = t[u];
                            void 0 === _ || o.isFunction(_) || (p[u] = _)
                        }
                        a.event = o.Event(t, p), f.postOrderVisit(i, h._redistributeVisitCallback, a)
                    }
                } else f.eatEvent(t)
            }
        } else this._assertEventSink()
    }, h._redistributeVisitCallback = function(t, e) {
        var i = f.getEvents(t),
            n = e.event;
        return i && o.isFunction(i[u.EVENT.POPUP_AUTODISMISS]) && i[u.EVENT.POPUP_AUTODISMISS](n), f.VISIT_RESULT.ACCEPT
    }, h._refreshCallback = function(t) {
        isNaN(h._refreshTimerId) && (h._refreshTimerId = window.setTimeout(function() {
            h._refreshTimerId = Number.NaN;
            var t = f.getDefaultLayer();
            o.isFunction(window.requestAnimationFrame) ? h._afRequestId = window.requestAnimationFrame(function() {
                h._afRequestId = null, f.postOrderVisit(t, h._refreshVisitCallback)
            }) : f.postOrderVisit(t, h._refreshVisitCallback)
        }, h._REFRESH_DELAY))
    }, h._refreshVisitCallback = function(t, e) {
        if (e.level > 0) return f.VISIT_RESULT.REJECT;
        var i = f.getEvents(t);
        return i && o.isFunction(i[u.EVENT.POPUP_REFRESH]) && i[u.EVENT.POPUP_REFRESH](), f.VISIT_RESULT.ACCEPT
    }, h.prototype.destroy = function() {
        h.superclass.destroy.call(this)
    }, h._FOCUS_WITHIN_SELECTOR = "oj-focus-within", h._REDISTRIBUTE_EVENTS = ["focus", "mousedown", "keydown"], h._COPY_SAFE_EVENT_PROPERTIES = ["altKey", "bubbles", "cancelable", "ctrlKey", "currentTarget", "eventPhase", "metaKey", "relatedTarget", "shiftKey", "target", "timeStamp", "view", "which", "button", "buttons", "clientX", "clientY", "offsetX", "offsetY", "pageX", "pageY", "screenX", "screenY", "toElement", "char", "charCode", "key", "keyCode"], h._REFRESH_DELAY = 10, e._registerLegacyNamespaceProp("ZOrderUtils", f), f.STATUS = {
        UNKNOWN: 0,
        BEFORE_OPEN: .5,
        OPENING: 1,
        OPEN: 2,
        BEFORE_CLOSE: 2.5,
        CLOSING: 3,
        CLOSE: 4
    }, f._STATUS_DATA = "oj-popup-status", f.getStatus = function(t) {
        t instanceof Element && (t = o(t));
        var e = t.data(f._STATUS_DATA);
        return isNaN(e) ? f.STATUS.UNKNOWN : e
    }, f.setStatus = function(t, e) {
        t instanceof Element && (t = o(t)), e > f.STATUS.UNKNOWN && e <= f.STATUS.CLOSE && t.data(f._STATUS_DATA, e)
    }, f.getFirstAncestorLayer = function(t) {
        if (!t) return f.getDefaultLayer();
        for (var e = t; e && e.length > 0 && e.attr(f._SURROGATE_ATTR) !== f._DEFAULT_LAYER_ID;) {
            if (f._hasSurrogate(e[0])) return e;
            e = e.parent()
        }
        return f.getDefaultLayer()
    }, f.getDefaultLayer = function() {
        var t = o(document.getElementById(f._DEFAULT_LAYER_ID));
        return t.length > 0 || ((t = o("<div>")).attr("role", "presentation"), t.attr("id", f._DEFAULT_LAYER_ID), t.prependTo(o(document.body))), t
    }, f.addToAncestorLayer = function(t, n, r, s, a, l) {
        var p = t[0];
        if (f._hasSurrogate(p.parentNode)) throw new Error("JET Popup is already open - id: " + p.getAttribute("id"));
        var c = f.getFirstAncestorLayer(a === u.LAYER_LEVEL.TOP_LEVEL ? null : n),
            h = o("<div>"),
            _ = t.attr("id");
        e.StringUtils.isEmptyOrUndefined(_) ? h.uniqueId() : h.attr("id", [_, "layer"].join("_")), h.attr("role", "presentation"), h.addClass(s), t.after(h);
        const d = f._createSurrogate(h, l);
        i.subtreeDetached(p), t.appendTo(h), t.data(f._LAYER_ID_DATA, h.attr("id")), h.appendTo(c), i.subtreeAttached(p), f._applyVDomPatch(d[0], p), f.applyModality(h, r)
    }, f._applyVDomPatch = function(t, e) {
        t[s.OJ_POPUP] = e, s.patchPopupParent(t.parentElement)
    }, f._getSurrogate = function(t) {
        var e = t.attr(f._SURROGATE_ATTR);
        if (e) return document.getElementById(e)
    }, f.applyEvents = function(t, e, n) {
        n || (n = o(f._getSurrogate(t))), t.data(f._EVENTS_DATA, e), n.length > 0 && e && o.isFunction(e[u.EVENT.POPUP_REMOVE]) && i.setComponentOption(n[0], "beforeDestroy", e[u.EVENT.POPUP_REMOVE])
    }, f.getEvents = function(t) {
        return t.data(f._EVENTS_DATA)
    }, f._createSurrogate = function(t, i) {
        var n = "script";
        i && (n = "oj-surrogate");
        var r = o(document.createElement(n)),
            s = t.attr("id");
        e.StringUtils.isEmptyOrUndefined(s) || r.attr("id", [s, "surrogate"].join("_")), i && r.attr("data-oj-binding-provider", "none"), r.insertBefore(t), i || r.ojSurrogate();
        var a = r.attr("id");
        return t.attr(f._SURROGATE_ATTR, a), r
    }, f._removeSurrogate = function(t) {
        var e = t.attr(f._SURROGATE_ATTR);
        t.removeAttr(f._SURROGATE_ATTR);
        var n = o(document.getElementById(e)),
            r = n.length > 0;
        return r && (t.insertAfter(n), i.setComponentOption(n[0], "beforeDestroy", null), n.remove()), r
    }, f.getOpenPopupLayer = function(t) {
        var e = t.parent();
        if (!e || 0 === e.length) {
            var i = t.data(f._LAYER_ID_DATA);
            e = o(document.getElementById(i))
        }
        return e
    }, f.removeFromAncestorLayer = function(t) {
        var e = f.getOpenPopupLayer(t);
        f.preOrderVisit(e, f._closeDescendantPopupsCallback), f._restoreBodyOverflow(), f._removeOverlayFromAncestorLayer(e), e.removeData(f._EVENTS_DATA), e.removeData(f._MODALITY_DATA), t.removeData(f._LAYER_ID_DATA);
        var o = t[0];
        i.subtreeDetached(o), f._removeSurrogate(e) && o && o.parentElement ? (r.unwrap(t, e), i.subtreeAttached(o)) : e.remove()
    }, f._closeDescendantPopupsCallback = function(t, e) {
        if (e.level > 0) return f.VISIT_RESULT.REJECT;
        var i = t.data(f._EVENTS_DATA);
        return i && o.isFunction(i[u.EVENT.POPUP_CLOSE]) && i[u.EVENT.POPUP_CLOSE](), f.VISIT_RESULT.ACCEPT
    }, f._disableBodyOverflow = function(t) {
        const e = document.body,
            i = t.children()[0];
        o(i).width() <= window.innerWidth && o(i).height() <= window.innerHeight && e.classList.add("oj-component-modal-open")
    }, f._restoreBodyOverflow = function() {
        document.body.classList.remove("oj-component-modal-open")
    }, f.applyModality = function(t, o) {
        var i = t.data(f._MODALITY_DATA);
        t.data(f._MODALITY_DATA, o), e.StringUtils.isEmptyOrUndefined(i) ? u.MODALITY.MODAL === o ? (f._addOverlayToAncestorLayer(t), f._disableBodyOverflow(t)) : f._removeOverlayFromAncestorLayer(t) : i !== o && (o !== i && o === u.MODALITY.MODAL ? (f._addOverlayToAncestorLayer(t), f._disableBodyOverflow(t)) : f._removeOverlayFromAncestorLayer(t)), o === u.MODALITY.MODAL ? t.attr("aria-modal", "true") : t.removeAttr("aria-modal")
    }, f.hasModalDialogOpen = function() {
        for (var t = f.getDefaultLayer().children(), e = t.length - 1; e > -1; e--) {
            if (o(t[e]).hasClass(f._OVERLAY_SELECTOR)) return !0
        }
        return !1
    }, f._addOverlayToAncestorLayer = function(t) {
        var i = o("<div>");
        i.addClass(f._OVERLAY_SELECTOR), i.addClass(t[0].className), i.attr("role", "presentation");
        var n = t.attr("id");
        e.StringUtils.isEmptyOrUndefined(n) ? i.uniqueId() : i.attr("id", [n, "overlay"].join("_")), t.before(i);
        var r = i.attr("id");
        t.attr(f._OVERLAY_ATTR, r)
    }, f._removeOverlayFromAncestorLayer = function(t) {
        var i = t.attr(f._OVERLAY_ATTR);
        e.StringUtils.isEmptyOrUndefined(i) || (t.removeAttr(f._OVERLAY_ATTR), o(document.getElementById(i)).remove())
    }, f.VISIT_RESULT = {
        ACCEPT: 0,
        REJECT: 1,
        COMPLETE: 2
    }, f._VISIT_TRAVERSAL = {
        PRE_ORDER: 0,
        POST_ORDER: 1
    }, f.postOrderVisit = function(t, e, o) {
        var i = o;
        o || (i = {}), i.level = 0, i.type = f._VISIT_TRAVERSAL.POST_ORDER, f._visitTree(t, e, i)
    }, f.preOrderVisit = function(t, e, o) {
        var i = o;
        o || (i = {}), i.level = 0, i.type = f._VISIT_TRAVERSAL.PRE_ORDER, f._visitTree(t, e, i)
    }, f._visitTree = function(t, e, i) {
        for (var n = i.level, r = t.children(), s = r.length - 1; s > -1; s--) {
            var a = o(r[s]);
            if (f._hasSurrogate(a[0])) {
                var l;
                if (i.type === f._VISIT_TRAVERSAL.PRE_ORDER) {
                    if ((l = e(a, i)) === f.VISIT_RESULT.COMPLETE) return l;
                    if (l === f.VISIT_RESULT.REJECT) break
                }
                if (i.level = n + 1, l = f._visitTree(a, e, i), i.level = n, l === f.VISIT_RESULT.COMPLETE) return l;
                if (i.type === f._VISIT_TRAVERSAL.POST_ORDER) {
                    if ((l = e(a, i)) === f.VISIT_RESULT.COMPLETE) return l;
                    if (l === f.VISIT_RESULT.REJECT) break
                }
            }
        }
        return f.VISIT_RESULT.ACCEPT
    }, f._hasSurrogate = function(t) {
        return !(!t || 1 !== t.nodeType || !t.hasAttribute(f._SURROGATE_ATTR))
    }, f.hasPopupsOpen = function() {
        return f.getDefaultLayer().children().length > 0
    }, f.getOpenPopupCount = function() {
        var t = {
                popupCount: 0
            },
            e = f.getDefaultLayer();
        return f.preOrderVisit(e, f._openPopupCountCallback, t), t.popupCount
    }, f._openPopupCountCallback = function(t, e) {
        return e.popupCount += 1, f.VISIT_RESULT.ACCEPT
    }, f.findOpenPopups = function() {
        var t = {},
            e = [];
        t.popups = e;
        var i = f.getDefaultLayer();
        return f.preOrderVisit(i, f._openPopupsCallback, t), e = t.popups, o(e)
    }, f._openPopupsCallback = function(t, e) {
        return e.popups.push(t[0]), f.VISIT_RESULT.ACCEPT
    }, f.isAboveTopModalLayer = function(t) {
        if (!t || !f.hasPopupsOpen()) return !0;
        var e = function() {
            var t = {
                    topLayer: null
                },
                e = f.getDefaultLayer();
            if (f.preOrderVisit(e, function(t, e) {
                    if (e.level > 0) return f.VISIT_RESULT.REJECT;
                    var i = e.topLayer;
                    return i ? f.compareStackingContexts(o(t), o(i)) > 0 && (e.topLayer = t) : e.topLayer = t, f.VISIT_RESULT.ACCEPT
                }, t), t.topLayer) return t.topLayer[0]
        }();
        if (!e) return !0;
        var i = function(t) {
            var e = {
                topModalPopup: null
            };
            if (t.hasAttribute(f._OVERLAY_ATTR) && (e.topModalPopup = o(t)), f.postOrderVisit(o(t), function(t, e) {
                    return t[0].hasAttribute(f._OVERLAY_ATTR) ? (e.topModalPopup = t, f.VISIT_RESULT.COMPLETE) : f.VISIT_RESULT.ACCEPT
                }, e), e.topModalPopup) return e.topModalPopup[0]
        }(e);
        return !i || (r.isAncestorOrSelf(i, t) || f.compareStackingContexts(o(i), o(t)) < 0)
    }, f.compareStackingContexts = function(t, i) {
        function n(t, e) {
            var i, n = ["absolute", "relative", "fixed"],
                s = t.parents(),
                a = [];
            for (i = s.length - 1; i > -1; i--) a.push(o(s[i]));
            (s = a).push(t);
            var l = [],
                p = 0;
            for (i = 0; i < s.length; i++) {
                var c = s[i],
                    u = c.css("position"),
                    h = r.getCSSLengthAsFloat(c.css("opacity")),
                    f = r.getCSSLengthAsInt(c.css("z-index")),
                    _ = o.inArray(c[0], c.parent().children());
                o.inArray(u, n) > -1 && f > 0 ? (l.push({
                    weight: [p, f, _],
                    order: [_]
                }), p += 1) : h < 1 ? (l.push({
                    weight: [p, 1, _],
                    order: [_]
                }), p += 1) : e && l.push({
                    weight: [0, 0, _],
                    order: [_]
                })
            }
            return l
        }

        function s(t, e) {
            for (var o = Math.max(t.length, e.length), i = 0; i < o; i++) {
                var n = i < t.length ? t[i] : 0,
                    r = i < e.length ? e[i] : 0;
                if (n !== r) return n < r ? -1 : 1
            }
            return 0
        }
        e.Assert.assertPrototype(t, o), e.Assert.assertPrototype(i, o);
        var a, l, p = n(t, !1),
            c = n(i, !1),
            u = Math.max(p.length, c.length);
        for (a = 0; a < u; a++)
            if (0 !== (l = s(a < p.length ? p[a].weight : [-1], a < c.length ? c[a].weight : [-1]))) return l;
        for (p = n(t, !0), c = n(i, !0), u = Math.max(p.length, c.length), a = 0; a < u; a++)
            if (0 !== (l = s(a < p.length ? p[a].order : [-1], a < c.length ? c[a].order : [-1]))) return l;
        return 0
    }, f.eatEvent = function(t) {
        t.stopPropagation(), t.preventDefault()
    }, f.isPopupOpen = function(t) {
        var e = t.parent();
        return !(!e || 1 !== e.length || !f._hasSurrogate(e[0]))
    }, f._EVENTS_DATA = "oj-popup-events", f._MODALITY_DATA = "oj-popup-modality", f._DEFAULT_LAYER_ID = "__oj_zorder_container", f._SURROGATE_ATTR = "data-oj-surrogate-id", f._LAYER_ID_DATA = "oj-popup-layer-id", f._OVERLAY_ATTR = "data-oj-overlayid", f._OVERLAY_SELECTOR = "oj-component-overlay";
    const _ = {};
    e._registerLegacyNamespaceProp("PositionUtils", _), _.normalizeHorizontalAlignment = function(t, i) {
            for (var n = o.extend({}, t), r = 0; r < _._ALIGN_RULE_PROPERTIES.length; r++) {
                var s = _._ALIGN_RULE_PROPERTIES[r],
                    a = n[s];
                if (a)
                    if (e.StringUtils.isString(a)) n[s] = a.replace("start", i ? "right" : "left").replace("end", i ? "left" : "right").replace("<", i ? "+" : "-").replace(">", i ? "-" : "+");
                    else
                        for (var l = 0; l < _._SUB_ALIGN_RULE_PROPERTIES.length; l++) {
                            var p = _._SUB_ALIGN_RULE_PROPERTIES[l],
                                c = a[p];
                            e.StringUtils.isString(c) && (a[p] = c.replace("start", i ? "right" : "left").replace("end", i ? "left" : "right").replace("<", i ? "+" : "-").replace(">", i ? "-" : "+"))
                        }
            }
            return n
        }, _.normalizePositionOf = function(t, e, o) {
            return "event" === t ? o : null == t || "launcher" === t ? e : t
        }, _._normalizeEventForPosition = function(t) {
            o.each(["pageX", "pageY"], function(e, o) {
                if (t && void 0 === t[o] && t.originalEvent) {
                    var i, n = t.originalEvent,
                        r = n.type;
                    if (i = "touchstart" === r || "touchmove" === r ? "touches" : "touchend" === r ? "changedTouches" : null) {
                        var s = n[i][0];
                        s && (t[o] = s[o])
                    }
                }
            })
        }, _._ALIGN_RULE_PROPERTIES = ["my", "at"], _._SUB_ALIGN_RULE_PROPERTIES = ["vertical", "horizontal"], _.isAligningPositionClipped = function(t) {
            if (t.target && t.target.height > 0 && t.target.width > 0) {
                var e = t.target.element;
                return !_.isWithinViewport(e)
            }
            return !1
        }, _.isWithinViewport = function(t) {
            function e(t, e) {
                var o;
                if (["hidden", "scroll", "auto"].indexOf(e.overflowY) > -1) {
                    if (t.bottom - e.top < -1) return !1;
                    if (o = "auto" === e.overflowX && e.scrollWidth > e.innerWidth || "scroll" === e.overflowX ? r.getScrollBarWidth() : 0, e.bottom - o - t.top < 1) return !1
                }
                return !(["hidden", "scroll", "auto"].indexOf(e.overflowX) > -1 && (o = "auto" === e.overflowY && e.scrollHeight > e.innerHeight || "scroll" === e.overflowY ? r.getScrollBarWidth() : 0, t.right - (e.left + ("rtl" === r.getReadingDirection() ? o : 0)) < -1 || t.left - (e.right - ("ltr" === r.getReadingDirection() ? o : 0)) > -1))
            }

            function i(t) {
                var e = t[0];
                if (1 === e.nodeType) {
                    var i = o.extend({}, e.getBoundingClientRect());
                    return i.overflowX = t.css("overflow-x"), i.overflowY = t.css("overflow-y"), i.innerHeight = t.innerHeight(), i.innerWidth = t.innerWidth(), i.scrollHeight = e.scrollHeight, i.scrollWidth = e.scrollWidth, i
                }
                return {
                    height: 0,
                    width: 0
                }
            }

            function n(t) {
                return ["fixed", "absolute", "relative", "sticky"].indexOf(t.css("position")) > -1 && (!isNaN(parseInt(t.css("top"), 10)) || !isNaN(parseInt(t.css("bottom"), 10)) || !isNaN(parseInt(t.css("left"), 10)) || !isNaN(parseInt(t.css("right"), 10)))
            }
            if (!t) return !1;
            if (o.isWindow(t[0]) || n(t)) return !0;
            for (var s, a = i(t), l = !0, p = t.parent(); l && p && p.length > 0 && "BODY" !== p[0].nodeName && 1 === p[0].nodeType && !n(p);) {
                if ("visible" !== (s = p).css("overflow-x") || "visible" !== s.css("overflow-y")) {
                    var c = i(p);
                    c.height > 0 && c.width > 0 && (l = e(a, c))
                }
                p = p.parent()
            }
            return l
        }, _._ANIMATION_TRANSFORM_ORIGIN_RULES = {
            "right-top": "right top",
            "right-middle": "right center",
            "right-bottom": "right bottom",
            "left-top": "left top",
            "left-middle": "left center",
            "left-bottom": "left bottom",
            "center-top": "center top",
            "center-middle": "center center",
            "center-bottom": "center bottom"
        }, _._ALIGN_MNEMONIC_DATA = "oj-popup-align-mnemonic", _.captureTransformOriginAnimationEffectsOption = function(t, e) {
            var o = [e.horizontal, e.vertical].join("-");
            t.data(_._ALIGN_MNEMONIC_DATA, o)
        }, _.addTransformOriginAnimationEffectsOption = function(t, o) {
            var i, n;
            e.StringUtils.isString(o) ? (n = !0, i = o) : (n = !1, i = JSON.stringify(o));
            var r = /#myPosition/g;
            if (i.match(r)) {
                var s = t.data(_._ALIGN_MNEMONIC_DATA);
                e.StringUtils.isEmptyOrUndefined(s) && (s = "center-middle");
                var a = _._ANIMATION_TRANSFORM_ORIGIN_RULES[s];
                i = i.replace(r, a), o = n ? i : JSON.parse(i)
            }
            return o
        }, _._JQUI_MNEMONIC_GRP_REGX = /^(\w+)(\+|-)?(\d+)?/, _._VERTICAL_ENUM_TST_REGX = /^top$|^center$|^bottom$/, _._HORIZONTAL_ENUM_TST_REGX = /^start$|^left$|^center$|^end$|^right$/, _._COLLISION_ENUM_TST_REGX = /^none$|^flip$|^flipfit$|^fit$|^flipcenter$/, _._parsePositionNmnemonic = function(t, e) {
            var o = [null, Number.NaN],
                i = _._JQUI_MNEMONIC_GRP_REGX.exec(t);
            if (i[1] && e.test(i[1]) && (o[0] = i[1], i[2])) {
                var n = parseInt(i[3], 10);
                isNaN(n) || (n *= "-" === i[2] ? -1 : 1, o[1] = n)
            }
            return o
        }, _._parseJSON = function(t) {
            if (e.StringUtils.isString(t) && /^{/.test(t) && /}$/.test(t)) try {
                return JSON.parse(t)
            } catch (t) {}
            return null
        }, _._coerceMyAtToJet = function(t, i, n, s) {
            var a = _._parseJSON(i);
            a && (i = a), (a = _._parseJSON(n)) && (n = a), s || (s = {});
            var l, p = o.extend({}, s),
                c = {
                    x: 0,
                    y: 0
                };
            if (n && "x" in n && "y" in n && (c.x = r.getCSSLengthAsInt(n.x), c.y = r.getCSSLengthAsInt(n.y)), e.StringUtils.isString(i)) {
                var u = i.split(/\s/);
                u.length > 0 && !e.StringUtils.isEmpty(u[0]) && (l = _._parsePositionNmnemonic(u[0], _._HORIZONTAL_ENUM_TST_REGX))[0] && (p.horizontal = l[0], isNaN(l[1]) || (c.x = l[1])), u.length > 1 && !e.StringUtils.isEmpty(u[1]) && (l = _._parsePositionNmnemonic(u[1], _._VERTICAL_ENUM_TST_REGX))[0] && (p.vertical = l[0], isNaN(l[1]) || (c.y = l[1]))
            } else i && ("horizontal" in i && (l = _._parsePositionNmnemonic(i.horizontal, _._HORIZONTAL_ENUM_TST_REGX))[0] && (p.horizontal = l[0], isNaN(l[1]) || (c.x = l[1])), "vertical" in i && (l = _._parsePositionNmnemonic(i.vertical, _._VERTICAL_ENUM_TST_REGX))[0] && (p.vertical = l[0], isNaN(l[1]) || (c.y = l[1])));
            var h = {};
            return h[t] = p, h.offset = c, h
        }, _._coerceCollisionToJet = function(t, e) {
            var o = e;
            return _._COLLISION_ENUM_TST_REGX.test(t) && (o = t), {
                collision: o
            }
        }, _._coerceOfToJet = function(t, i) {
            var n = _._parseJSON(t);
            n && (t = n);
            var s = i;
            if (e.StringUtils.isString(t)) s = t;
            else if (o.isWindow(t)) s = "window";
            else if (t instanceof Element || t instanceof o) {
                (t = o(t)).uniqueId(), s = "#" + function(t) {
                    for (var e = [], o = /\w|_|-/, i = 0; i < t.length; i++) {
                        var n = t.substring(i, i + 1);
                        o.test(n) ? e.push(n) : e.push("\\" + n)
                    }
                    return e.join("")
                }(t.attr("id"))
            } else t instanceof Event || t instanceof o.Event ? ("pageX" in t || "pageY" in t) && ((s = {}).x = r.getCSSLengthAsFloat(t.pageX), s.y = r.getCSSLengthAsFloat(t.pageY)) : t && ("x" in t || "y" in t) && ((s = {}).x = r.getCSSLengthAsFloat(t.x), s.y = r.getCSSLengthAsFloat(t.y));
            return { of: s
            }
        }, _.coerceToJet = function(t, e) {
            t || (t = {});
            var i = _._parseJSON(t);
            i && (t = i), e || (e = {});
            var n = e.my,
                r = e.at,
                s = e.collision,
                a = e.of,
                l = _._coerceMyAtToJet("my", t.my, t.offset, n),
                p = _._coerceMyAtToJet("at", t.at, null, r),
                c = {
                    offset: {
                        x: l.offset.x + p.offset.x,
                        y: l.offset.y + p.offset.y
                    }
                };
            return delete l.offset, delete p.offset, o.extend({}, l, p, c, _._coerceCollisionToJet(t.collision, s), _._coerceOfToJet(t.of, a), function(t, e) {
                return {
                    using: o.isFunction(t) ? t : e
                }
            }(t.using, void 0))
        }, _.coerceToJqUi = function(t) {
            function i(e, o) {
                var i = [];
                if (t[e][o] ? i.push(t[e][o]) : i.push("center"), "my" === e && t.offset) {
                    var n = "horizontal" === o ? "x" : "y",
                        r = t.offset[n];
                    isNaN(r) || 0 === r || (i.push(r > 0 ? "+" : ""), i.push(Math.floor(r).toString()))
                }
                return i.join("")
            }
            var n = {};
            ["my", "at"].forEach(function(e) {
                if (t[e]) {
                    var o = [];
                    o.push(i(e, "horizontal")), o.push(" "), o.push(i(e, "vertical")), n[e] = o.join("")
                }
            });
            var r = t.of;
            if (e.StringUtils.isString(r)) n.of = "window" === r ? window : r;
            else if (r && !e.StringUtils.isString(r) && "x" in r && "y" in r) {
                var s = r.x,
                    a = r.y,
                    l = document.createEvent("MouseEvents");
                l.initMouseEvent("click", !0, !0, window, 1, s, a, s, a, !1, !1, !1, !1, 0, null), n.of = o.Event(l, {
                    pageX: s,
                    pageY: a
                })
            } else n.of = r;
            return t.collision && (n.collision = t.collision), t.using && (n.using = t.using), n
        }, _.calcAvailablePopupSize = function(t, e, i) {
            var n, s, a, l, p = o.position.getWithinInfo(i || window),
                c = o.position.getScrollInfo(p),
                u = "rtl" === r.getReadingDirection(),
                h = u ? c.width : 0,
                f = u ? 0 : c.width,
                _ = e.element,
                d = e.target,
                E = p.isWindow ? p.scrollLeft : 0,
                g = p.isWindow ? p.scrollTop : 0,
                T = _.left,
                v = _.left + _.width,
                O = _.top,
                S = _.top + _.height,
                m = d.left,
                P = d.left + d.width,
                y = d.top,
                A = d.top + d.height,
                R = p.offset.left + E + h,
                L = p.offset.left + p.width + E - f,
                I = p.offset.top + g,
                N = p.offset.top + p.height + g - c.height;
            return T < m ? (n = R, s = v <= m ? m : v <= P ? Math.min(P, L) : L) : T === m ? m - R > L - P ? (n = R, s = P) : (n = m, s = L) : T < P ? (n = m, s = v <= P ? P : L) : (n = P, s = L), O < y ? (a = I, l = S <= y ? y : S <= A ? Math.min(A, N) : N) : O === y ? (a = y, l = N) : O < A ? (a = y, l = S <= A ? A : N) : (a = A, l = N), {
                width: s - n,
                height: l - a
            }
        },
        function() {
            var t, i = Math.max,
                n = Math.abs;
            const s = /left|center|right/,
                a = /top|center|bottom/,
                l = /[+-]\d+(\.[\d]+)?%?/,
                p = /^\w+/,
                c = /%$/;
            var u = o.fn.position,
                h = o.position.getWithinInfo;

            function f(t, e, o) {
                return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? o / 100 : 1)]
            }

            function _(t, e) {
                return parseInt(o.css(t, e), 10) || 0
            }

            function d(t) {
                var o, i = t[0];
                if (9 === i.nodeType) return {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                };
                if (null != (o = i) && o === o.window) {
                    var n = e.AgentUtils.getAgentInfo(),
                        r = e.AgentUtils.OS.ANDROID === n.os || e.AgentUtils.OS.IOS === n.os;
                    return {
                        width: t.width(),
                        height: r ? i.innerHeight : t.height(),
                        offset: {
                            top: t.scrollTop(),
                            left: t.scrollLeft()
                        }
                    }
                }
                return i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            o.position = {
                getWithinInfo: h.bind(this),
                scrollbarWidth: function() {
                    if (void 0 !== t) return t;
                    var e, i, n = document.createElement("div");
                    n.style.display = "block", n.style.position = "absolute", n.style.width = "50px", n.style.height = "50px", n.style.overflow = "hidden";
                    var r = document.createElement("div");
                    return r.style.height = "100px", r.style.width = "auto", n.appendChild(r), o("body").append(o(n)), e = r.offsetWidth, n.style.overflow = "scroll", e === (i = r.offsetWidth) && (i = n.clientWidth), o(n).remove(), t = e - i
                },
                getScrollInfo: function(t) {
                    var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        n = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? o.position.scrollbarWidth() : 0,
                        height: n ? o.position.scrollbarWidth() : 0
                    }
                }
            }, o.fn.position = function(t) {
                if (!t || !t.of) return u.apply(this, arguments);
                var e, r, c, h, E, g, T = "string" == typeof(t = o.extend({}, t)).of ? o(document).find(t.of) : o(t.of),
                    v = o.position.getWithinInfo(t.within),
                    O = o.position.getScrollInfo(v),
                    S = (t.collision || "flip").split(" "),
                    m = {};
                return g = d(T), T[0].preventDefault && (t.at = "left top"), r = g.width, c = g.height, h = g.offset, E = o.extend({}, h), o.each(["my", "at"], function() {
                    var e, o, i = (t[this] || "").split(" ");
                    1 === i.length && (i = s.test(i[0]) ? i.concat(["center"]) : a.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = s.test(i[0]) ? i[0] : "center", i[1] = a.test(i[1]) ? i[1] : "center", e = l.exec(i[0]), o = l.exec(i[1]), m[this] = [e ? e[0] : 0, o ? o[0] : 0], t[this] = [p.exec(i[0])[0], p.exec(i[1])[0]]
                }), 1 === S.length && (S[1] = S[0]), "right" === t.at[0] ? E.left += r : "center" === t.at[0] && (E.left += r / 2), "bottom" === t.at[1] ? E.top += c : "center" === t.at[1] && (E.top += c / 2), e = f(m.at, r, c), E.left += e[0], E.top += e[1], this.each(function() {
                    var s, a, l = o(this),
                        p = l.outerWidth(),
                        u = l.outerHeight(),
                        d = _(this, "marginLeft"),
                        g = _(this, "marginTop"),
                        P = p + d + _(this, "marginRight") + O.width,
                        y = u + g + _(this, "marginBottom") + O.height,
                        A = o.extend({}, E),
                        R = f(m.my, l.outerWidth(), l.outerHeight());
                    "right" === t.my[0] ? A.left -= p : "center" === t.my[0] && (A.left -= p / 2), "bottom" === t.my[1] ? A.top -= u : "center" === t.my[1] && (A.top -= u / 2), A.left += R[0], A.top += R[1], s = {
                        marginLeft: d,
                        marginTop: g
                    }, o.each(["left", "top"], function(i, n) {
                        o.ui.position[S[i]] && o.ui.position[S[i]][n](A, {
                            targetWidth: r,
                            targetHeight: c,
                            elemWidth: p,
                            elemHeight: u,
                            collisionPosition: s,
                            collisionWidth: P,
                            collisionHeight: y,
                            offset: [e[0] + R[0], e[1] + R[1]],
                            my: t.my,
                            at: t.at,
                            within: v,
                            elem: l
                        })
                    }), t.using && (a = function(e) {
                        var o = h.left - A.left,
                            s = o + r - p,
                            a = h.top - A.top,
                            f = a + c - u,
                            _ = {
                                target: {
                                    element: T,
                                    left: h.left,
                                    top: h.top,
                                    width: r,
                                    height: c
                                },
                                element: {
                                    element: l,
                                    left: A.left,
                                    top: A.top,
                                    width: p,
                                    height: u
                                },
                                horizontal: s < 0 ? "left" : o > 0 ? "right" : "center",
                                vertical: f < 0 ? "top" : a > 0 ? "bottom" : "middle"
                            };
                        r < p && Math.abs(o + s) < r && (_.horizontal = "center"), c < u && Math.abs(a + f) < c && (_.vertical = "middle"), i(n(o), n(s)) > i(n(a), n(f)) ? _.important = "horizontal" : _.important = "vertical", t.using.call(this, e, _)
                    }), l.offset(o.extend(A, {
                        using: a
                    }))
                })
            };
            var E = o.ui.position.flip.left;
            o.ui.position.flip = {
                left: E.bind(this),
                top: function(t, e) {
                    var o, i, n = e.within,
                        r = n.offset.top + n.scrollTop,
                        s = n.height,
                        a = n.isWindow ? n.scrollTop : n.offset.top,
                        l = t.top - e.collisionPosition.marginTop,
                        p = l - a,
                        c = l + e.collisionHeight - s - a;
                    o = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0;
                    var u, h, f = -2 * e.offset[1];
                    p < 0 ? ((u = t.top + o + i + f + e.collisionHeight - s - r) < 0 || u < Math.abs(p)) && c < 0 && p > c && (t.top += o + i + f) : c > 0 && ((h = t.top - e.collisionPosition.marginTop + o + i + f - a) > 0 || Math.abs(h) < c) && (t.top += o + i + f)
                }
            }, o.ui.position.fit = {
                left: function(t, e) {
                    var o, i = e.within,
                        n = i.isWindow ? i.scrollLeft : i.offset.left,
                        r = i.width,
                        s = t.left - e.collisionPosition.marginLeft,
                        a = n - s,
                        l = s + e.collisionWidth - r - n;
                    e.collisionWidth > r ? a > 0 && l <= 0 ? (o = t.left + a + e.collisionWidth - r - n, t.left += a - o) : t.left = l > 0 && a <= 0 ? n : a > l ? n + r - e.collisionWidth : n : a > 0 ? t.left += a : l > 0 ? t.left -= l : t.left = Math.max(t.left - s, t.left), t.left < 0 && (t.left = 0)
                },
                top: function(t, e) {
                    var o, i = e.within,
                        n = i.isWindow ? i.scrollTop : i.offset.top,
                        r = e.within.height,
                        s = t.top - e.collisionPosition.marginTop,
                        a = n - s,
                        l = s + e.collisionHeight - r - n;
                    e.collisionHeight > r ? a > 0 && l <= 0 ? (o = t.top + a + e.collisionHeight - r - n, t.top += a - o) : t.top = l > 0 && a <= 0 ? n : a > l ? n + r - e.collisionHeight : n : a > 0 ? t.top += a : l > 0 ? t.top -= l : t.top = Math.max(t.top - s, t.top), t.top < 0 && (t.top = 0)
                }
            }, o.ui.position.flipcenter = {
                left: function(t, e) {
                    var i = t.left;
                    o.ui.position.flip.left.call(this, t, e);
                    var n = e.within,
                        s = n.isWindow ? n.scrollLeft : n.offset.left,
                        a = n.width,
                        l = t.left - e.collisionPosition.marginLeft,
                        p = s - l,
                        c = l + e.collisionWidth - a - s;
                    (p > 0 || c > 0) && ("right" === e.at[0] ? i -= e.targetWidth / 2 : "left" === e.at[0] && (i += e.targetWidth / 2), i -= ("rtl" === r.getReadingDirection() ? -1 : 1) * (e.elemWidth / 2), t.left = Math.max(0, i))
                },
                top: function(t, e) {
                    var i = t.top;
                    o.ui.position.flip.top.call(this, t, e);
                    var n = e.within,
                        r = n.isWindow ? n.scrollTop : n.offset.top,
                        s = e.within.height,
                        a = t.top - e.collisionPosition.marginTop,
                        l = r - a,
                        p = a + e.collisionHeight - s - r;
                    (l > 0 || p > 0) && ("top" === e.at[1] ? i += e.targetHeight / 2 : "bottom" === e.at[1] && (i -= e.targetHeight / 2), i += e.elemHeight / 2, t.top = Math.max(0, i))
                }
            }
        }();
    const d = function() {
        this.Init()
    };
    e._registerLegacyNamespaceProp("PopupLiveRegion", d), e.Object.createSubclass(d, e.Object, "oj.PopupLiveRegion"), d.prototype.Init = function() {
        d.superclass.Init.call(this), isNaN(d._refCounter) ? d._refCounter = 1 : d._refCounter += 1
    }, d.prototype.destroy = function() {
        if (!isNaN(d._refCounter) && (d._refCounter -= 1) < 1) {
            var t = o(document.getElementById(d._POPUP_LIVE_REGION_ID));
            t.length > 0 && t.remove()
        }
    }, d.prototype.announce = function(t) {
        if (!e.StringUtils.isEmpty(t)) {
            var i = d._getLiveRegion();
            i.children().remove(), setTimeout(function() {
                o("<div>").text(t).appendTo(i)
            }, 250)
        }
    }, d._getLiveRegion = function() {
        var t = o(document.getElementById(d._POPUP_LIVE_REGION_ID));
        return 0 === t.length && ((t = o("<div>")).attr({
            id: d._POPUP_LIVE_REGION_ID,
            role: "log",
            "aria-live": "polite",
            "aria-relevant": "additions"
        }), t.addClass("oj-helper-hidden-accessible"), t.appendTo(document.body)), t
    }, d._POPUP_LIVE_REGION_ID = "__oj_popup_arialiveregion";
    const E = function(t, i, n, r, s) {
        e.Assert.assertPrototype(t, o), e.Assert.assertString(i), e.Assert.assertFunction(n), e.Assert.assertStringOrNull(r), this._options = {
            insertBefore: !1,
            preventKeyEvents: !0
        }, s && (this._options = Object.assign({}, this._options, s)), this._sibling = t, this._message = i, this._callback = n, this._id = r, this.Init()
    };
    e._registerLegacyNamespaceProp("PopupSkipLink", E), e.Object.createSubclass(E, e.Object, "oj.PopupSkipLink"), E.prototype.Init = function() {
        E.superclass.Init.call(this);
        var t = this._sibling,
            e = this._callback,
            i = this._message,
            n = this._options.insertBefore,
            r = this._options.preventKeyEvents;
        this._message = null;
        var s = this._id;
        this._id = null;
        var a = o(document.getElementById(s));
        a.length < 1 && (a = o("<a>").attr({
            tabindex: "-1",
            href: "#",
            role: "link"
        })), a.attr("id", s), a.addClass("oj-helper-hidden-accessible"), a.text(i), n ? a.insertBefore(t) : a.insertAfter(t), a.on("click", E._activateHandler.bind(this, e)), r && a.on("keydown keyup keypress", E._keyHandler), t.data(E._SKIPLINK_ATTR, a)
    }, E._activateHandler = function(t, e) {
        f.eatEvent(e), window.setImmediate(t)
    }, E._keyHandler = function(t) {
        t.keyCode === o.ui.keyCode.ENTER && f.eatEvent(t)
    }, E.prototype.destroy = function() {
        var t = this._sibling;
        if (delete this._sibling, delete this._callback, t) {
            var e = t.data(E._SKIPLINK_ATTR);
            t.removeData(E._SKIPLINK_ATTR), e && (e.off("click keydown keyup keypress"), e.remove())
        }
    }, E.prototype.getLink = function() {
        var t, e = this._sibling;
        return e && (t = e.data(E._SKIPLINK_ATTR)), t
    }, E._SKIPLINK_ATTR = "oj-skiplink";
    const g = function(t, e, o, i) {
        this._element = t, this._operation = e, this._widgetName = o, this._isCustomElement = !!i, this.Init()
    };
    e._registerLegacyNamespaceProp("PopupWhenReadyMediator", g), e.Object.createSubclass(g, e.Object, "oj.PopupWhenReadyMediator"), g.prototype.Init = function() {
        g.superclass.Init.call(this), this._resolvedQueue = [], this._callback = this._eventHandler.bind(this);
        var t = this._operation,
            e = ["oj"];
        this._isCustomElement ? (e.push(t.charAt(0).toUpperCase()), e.push(t.slice(1))) : e.push(t);
        var o = e.join("");
        this._eventType = o, this._element.on(o, this._callback);
        var i = l.getContext(this._element[0]).getBusyContext(),
            n = {
                description: this._getBusyStateDescription.bind(this, this._element, this._operation, this._widgetName)
            },
            r = i.addBusyState(n);
        this.AddPromiseExecutor(r), this._whenReadyPromise = new Promise(this.AddPromiseExecutor.bind(this))
    }, g.prototype._getBusyStateDescription = function(t, e, o) {
        return o + " identified by '" + t.attr("id") + "' is busy animating on the '" + e + "' operation."
    }, g.prototype._deliverResolved = function(t) {
        var e = this._resolvedQueue;
        this._resolvedQueue = null;
        var o = t || this._operation;
        this._operation = null;
        for (var i = 0; i < e.length; i++) try {
            e[i](o)
        } catch (t) {
            n.error("Error resolving whenReady promises:\n%o", t)
        }
        this._whenReadyPromise = Promise.resolve("none")
    }, g.prototype.destroy = function() {
        if (this._resolvedQueue && this._deliverResolved("none"), this._callback) {
            var t = this._eventType;
            this._element.off(t, this._callback)
        }
        this._callback = null, this._element = null, this._operation = null, this._whenReadyPromise = null, this._widgetName = null, this._eventType = null
    }, g.prototype.getWhenReadyPromise = function() {
        return this._whenReadyPromise
    }, g.prototype._eventHandler = function(t) {
        t.target === this._element[0] && (this._element.off(t.type, this._callback), this._deliverResolved(), this._callback = null)
    }, g.prototype._getPendingOperation = function() {
        return this._operation ? this._operation : "none"
    }, g.prototype.AddPromiseExecutor = function(t, e) {
        this._resolvedQueue && this._resolvedQueue.push(t)
    }, g.prototype.isOperationPending = function(t, e, o, i) {
        var r = !1,
            s = this._widgetName,
            a = this._getPendingOperation();
        if (e === a) n.info("An %s instance invoked a '%s' operation while pending animation of the same type of operation.  The second request will be ignored.", s, e), r = !0;
        else if ("none" !== a) {
            n.info("An %s instance invoked a '%s' operation while pending animation of a '%s' operation. The second request will be invoked after the pending operation completes.", s, e, a), new Promise(this.AddPromiseExecutor.bind(this)).then(function() {
                this[o].apply(this, i)
            }.bind(t)), r = !0
        }
        return r
    };
    class T extends p.Component {
        constructor() {
            super(...arguments), this._setRootRef = t => {
                this._rootRef = t
            }
        }
        render(t) {
            return p.h("div", {
                style: {
                    display: "none"
                },
                ref: this._setRootRef
            }, t.children)
        }
        componentDidMount() {
            this._popup = o(this._rootRef.firstChild);
            const t = {
                [u.OPTION.POPUP]: this._popup,
                [u.OPTION.EVENTS]: {
                    [u.EVENT.POPUP_AUTODISMISS]: this.props.autoDismiss,
                    [u.EVENT.POPUP_REFRESH]: function() {
                        this._popup.position(this._getPosition())
                    }.bind(this)
                },
                [u.OPTION.LAYER_SELECTORS]: this.props.layerSelectors,
                [u.OPTION.CUSTOM_ELEMENT]: !0,
                [u.OPTION.LAUNCHER]: o(this._rootRef),
                [u.OPTION.POSITION]: this._getPosition()
            };
            u.getInstance().open(t)
        }
        componentWillUnmount() {
            u.getInstance().close({
                [u.OPTION.POPUP]: this._popup
            })
        }
        componentDidUpdate() {
            this._popup.position(this._getPosition())
        }
        _getPosition() {
            return _.normalizeHorizontalAlignment(this.props.position, "rtl" === r.getReadingDirection())
        }
    }
    T.defaultProps = {
        autoDismiss: null,
        layerSelectors: "",
        position: {}
    }, t.PopupLiveRegion = d, t.PopupService = u, t.PopupSkipLink = E, t.PopupWhenReadyMediator = g, t.PositionUtils = _, t.VPopup = T, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojpopupcore.js.map