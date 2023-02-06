/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojpopupcore", "ojs/ojcore-base", "jquery", "ojs/ojcontext", "ojs/ojdomutils", "ojs/ojthemeutils", "ojs/ojcomponentcore", "ojs/ojanimation", "ojs/ojfocusutils", "ojs/ojcustomelement-utils"], function(e, t, i, s, o, n, r, a, l, u) {
    "use strict";
    var c;
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l,
        function() {
            var c = ["oj-left", "oj-center", "oj-right", "oj-top", "oj-middle", "oj-bottom"],
                h = {
                    "right-top": "oj-right oj-top",
                    "right-middle": "oj-right oj-middle",
                    "right-bottom": "oj-right oj-bottom",
                    "left-top": "oj-left oj-top",
                    "left-middle": "oj-left oj-middle",
                    "left-bottom": "oj-left oj-bottom",
                    "center-top": "oj-center oj-top",
                    "center-middle": "oj-left oj-middle",
                    "center-bottom": "oj-center oj-bottom"
                };
            t.__registerWidget("oj.ojPopup", i.oj.baseComponent, {
                widgetEventPrefix: "oj",
                options: {
                    animation: null,
                    autoDismiss: "focusLoss",
                    chrome: "default",
                    initialFocus: "auto",
                    position: {
                        my: {
                            horizontal: "start",
                            vertical: "top"
                        },
                        offset: {
                            x: 0,
                            y: 0
                        },
                        at: {
                            horizontal: "start",
                            vertical: "bottom"
                        },
                        of: void 0,
                        collision: "flip"
                    },
                    tail: "none",
                    modality: "modeless",
                    role: "tooltip",
                    beforeOpen: null,
                    open: null,
                    beforeClose: null,
                    close: null,
                    focus: null,
                    animateStart: null,
                    animateEnd: null
                },
                _ComponentCreate: function() {
                    this._super();
                    var e = this._getRootStyle(),
                        s = this.element;
                    s.hide().addClass(e).attr("aria-hidden", "true"), s.addClass("oj-component");
                    var o = i("<div>");
                    o.addClass([e, "content"].join("-")), o.attr("role", "presentation"), o.append(s[0].childNodes), o.appendTo(s), this._content = o, this._setChrome(), this._setupFocus(s);
                    var n = this.options;
                    n.position = t.PositionUtils.coerceToJet(n.position)
                },
                _AfterCreate: function() {
                    this._super(), this.element.uniqueId(), this._createTail()
                },
                _destroy: function() {
                    t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN && this._closeImplicitly(), this._setWhenReady("none"), this._destroyTail(), delete this._popupServiceEvents;
                    var e = this.element;
                    e.hide().attr("aria-hidden", "true").removeUniqueId();
                    var i = this._content;
                    delete this._content, e.append(i[0].childNodes), i.remove();
                    var s = this._closeDelayTimer;
                    s && (delete this._closeDelayTimer, s()), this._super()
                },
                open: function(e, i) {
                    if (!this._isOperationPending("open", [e, i])) {
                        t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN && this._closeImplicitly();
                        var s = this.element,
                            o = t.ZOrderUtils.getStatus(s);
                        if (o === t.ZOrderUtils.STATUS.CLOSE || o === t.ZOrderUtils.STATUS.UNKNOWN)
                            if (t.ZOrderUtils.setStatus(s, t.ZOrderUtils.STATUS.BEFORE_OPEN), !1 !== this._trigger("beforeOpen")) {
                                this._setWhenReady("open"), this._setLauncher(e);
                                var n = this._launcher,
                                    r = this.options;
                                (i = i || r.position).of || (this._hasPositionOfLauncherOverride = !0, i.of = n), this._setPosition(i), this._setAutoDismiss(r.autoDismiss), this._addDescribedBy(), this._IsCustomElement() && s[0].hasAttribute("role") || s.attr("role", r.role);
                                var a = this._getPositionAsJqUi(),
                                    l = this._getRootStyle(),
                                    u = [l, "layer"].join("-"),
                                    c = r.tail;
                                "none" !== c && (u += " " + [l, "tail", c].join("-"));
                                var h = {};
                                h[t.PopupService.OPTION.POPUP] = s, h[t.PopupService.OPTION.LAUNCHER] = n, h[t.PopupService.OPTION.POSITION] = a, h[t.PopupService.OPTION.EVENTS] = this._getPopupServiceEvents(), h[t.PopupService.OPTION.LAYER_SELECTORS] = u, h[t.PopupService.OPTION.MODALITY] = r.modality, h[t.PopupService.OPTION.CUSTOM_ELEMENT] = this._IsCustomElement(), t.PopupService.getInstance().open(h)
                            } else t.ZOrderUtils.setStatus(this.element, o)
                    }
                },
                _beforeOpenHandler: function(e) {
                    var i = e[t.PopupService.OPTION.POPUP],
                        s = e[t.PopupService.OPTION.POSITION];
                    i.show(), i.position(s), this.initialWidth = i.width(), this.initialHeight = i.height();
                    var o = this.options.animation;
                    if (o && o.open) {
                        var n = o.actionPrefix,
                            r = n ? [n, "open"].join("-") : "open";
                        return a.startAnimation(i[0], r, t.PositionUtils.addTransformOriginAnimationEffectsOption(i, o.open), this)
                    }
                },
                _afterOpenHandler: function(e) {
                    var i = e[t.PopupService.OPTION.POPUP],
                        s = e[t.PopupService.OPTION.LAUNCHER];
                    this.initialWidth === i.width() && this.initialHeight === i.height() || this._reposition(), delete this.initialWidth, delete this.initialHeight, this._registerResizeListener(i[0]), this._initVoiceOverAssist(), this._trigger("open"), this._intialFocus(), this._on(i, {
                        keydown: this._keyHandler
                    }), s && s.length > 0 && this._on(s, {
                        keydown: this._keyHandler
                    })
                },
                _GetContextMenu: function() {
                    if (!this._IsCustomElement()) return this._super();
                    var e = u.CustomElementUtils.getSlotMap(this._content[0]).contextMenu;
                    return e && e.length > 0 ? e[0] : void 0
                },
                close: function() {
                    if (!this._isOperationPending("close", [])) {
                        var e = this.element,
                            i = t.ZOrderUtils.getStatus(e);
                        if (i === t.ZOrderUtils.STATUS.OPEN)
                            if (t.ZOrderUtils.setStatus(e, t.ZOrderUtils.STATUS.BEFORE_CLOSE), !1 !== this._trigger("beforeClose") || this._ignoreBeforeCloseResultant) {
                                this._setWhenReady("close");
                                var s = this._launcher;
                                this._off(e, "keydown"), s && s.length > 0 && this._off(s, "keydown"), this._restoreFocus(), this._destroyVoiceOverAssist();
                                var o = {};
                                o[t.PopupService.OPTION.POPUP] = e, t.PopupService.getInstance().close(o)
                            } else t.ZOrderUtils.setStatus(e, i)
                    }
                },
                _beforeCloseHandler: function(e) {
                    var i = e[t.PopupService.OPTION.POPUP];
                    this._unregisterResizeListener(i[0]);
                    var s = this.options.animation;
                    if (!this._ignoreBeforeCloseResultant && s && s.close) {
                        var o = s.actionPrefix,
                            n = o ? [o, "close"].join("-") : "close";
                        return a.startAnimation(i[0], n, t.PositionUtils.addTransformOriginAnimationEffectsOption(i, s.close), this).then(function() {
                            i.hide()
                        })
                    }
                    i.hide()
                },
                _afterCloseHandler: function(e) {
                    (this._removeDescribedBy(), this._setAutoDismiss(), delete this._launcher, this._trigger("close"), this._hasPositionOfLauncherOverride) && (this.options.position.of = null, delete this._hasPositionOfLauncherOverride)
                },
                isOpen: function() {
                    var e = t.ZOrderUtils.getStatus(this.element);
                    return e === t.ZOrderUtils.STATUS.OPENING || e === t.ZOrderUtils.STATUS.OPEN || e === t.ZOrderUtils.STATUS.BEFORE_CLOSE || e === t.ZOrderUtils.STATUS.CLOSING
                },
                refresh: function() {
                    if (this._super(), t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN && this._reposition()) {
                        var e = this.element;
                        t.PopupService.getInstance().triggerOnDescendents(e, t.PopupService.EVENT.POPUP_REFRESH)
                    }
                },
                _setOption: function(e, i) {
                    var s = this.options;
                    switch (e) {
                        case "tail":
                            i !== s.tail && this._setTail(i);
                            break;
                        case "chrome":
                            i !== s.chrome && this._setChrome(i);
                            break;
                        case "position":
                            return this._setPosition(i), void this.refresh();
                        case "autoDismiss":
                            t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN && i !== s.autoDismiss && this._setAutoDismiss(i);
                            break;
                        case "modality":
                            if (t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN) {
                                var o = this.element,
                                    n = {};
                                n[t.PopupService.OPTION.POPUP] = o, n[t.PopupService.OPTION.MODALITY] = i, t.PopupService.getInstance().changeOptions(n)
                            }
                    }
                    this._superApply(arguments)
                },
                _getRootStyle: function() {
                    return "oj-popup"
                },
                _setTail: function(e) {
                    this._destroyTail(), this._createTail(e), this._reposition()
                },
                _createTail: function(e) {
                    var s = e || this.options.tail;
                    if ("none" !== s) {
                        var o = this._getRootStyle(),
                            n = [o, "tail"].join("-"),
                            r = [n, s].join("-"),
                            a = i("<div>").hide();
                        a.addClass(n).addClass(r), a.attr("role", "presentation"), this._tailId = a.attr("id", this._getSubId("tail")).attr("id");
                        var l = this.element;
                        if (a.appendTo(l), l.addClass(r), t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN) {
                            var u = [o, "layer"].join("-");
                            u += " " + r;
                            var c = {};
                            c[t.PopupService.OPTION.POPUP] = l, c[t.PopupService.OPTION.LAYER_SELECTORS] = u, t.PopupService.getInstance().changeOptions(c)
                        }
                    }
                },
                _getTail: function() {
                    var e = this._tailId;
                    return e ? i(document.getElementById(e)) : null
                },
                _destroyTail: function() {
                    var e = this._getTail();
                    e && e.remove(), delete this._tailId;
                    var i = this.options.tail,
                        s = this._getRootStyle(),
                        o = [s, "tail", i].join("-"),
                        n = this.element;
                    if (n.removeClass(o), t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN) {
                        var r = [s, "layer"].join("-"),
                            a = {};
                        a[t.PopupService.OPTION.POPUP] = n, a[t.PopupService.OPTION.LAYER_SELECTORS] = r, t.PopupService.getInstance().changeOptions(a)
                    }
                },
                _setChrome: function(e) {
                    var t = e || this.options.chrome,
                        i = [this._getRootStyle(), "no-chrome"].join("-"),
                        s = this.element;
                    "default" === t && s.hasClass(i) ? s.removeClass(i) : "none" !== t || s.hasClass(i) || s.addClass(i)
                },
                _setLauncher: function(e) {
                    var t = e;
                    if (t ? ("string" === i.type(t) || 1 === t.nodeType) && (t = i(t)) : t = i(document.activeElement), t instanceof i && t.length > 1)
                        for (var s = this.element, n = 0; n < t.length; n++) {
                            var r = t[0];
                            if (!o.isAncestorOrSelf(s[0], r)) {
                                t = i(r);
                                break
                            }
                        } else t instanceof i && !(t instanceof i && 0 === t.length) || (t = i(document.activeElement));
                    this._launcher = t
                },
                _setPosition: function(e) {
                    var i = this.options;
                    e && (i.position = t.PositionUtils.coerceToJet(e, i.position))
                },
                _getPositionAsJqUi: function() {
                    var e = this.options,
                        s = t.PositionUtils.coerceToJqUi(e.position),
                        o = "rtl" === this._GetReadingDirection(),
                        n = (s = t.PositionUtils.normalizeHorizontalAlignment(s, o)).using;
                    return n = i.isFunction(n) ? n : null, s.using = this._usingHandler.bind(this, n), s
                },
                _resolveBusyStateAndCloseImplicitly: function(e) {
                    e(), delete this._closeDelayTimer, this._closeImplicitly()
                },
                _resolveBusyStateAndCancelDelayedClosure: function(e, t) {
                    window.clearTimeout(e), t()
                },
                _usingHandler: function(e, i, n) {
                    var r = n.element.element;
                    if (i.top !== r.css("top") || i.left !== r.css("left")) {
                        var a = this._getTail();
                        if (a) {
                            a.hide();
                            for (var l = 0; l < c.length; l++) a.removeClass(c[l]), r.removeClass(c[l]);
                            if (a.removeAttr("style"), n.target && 0 === n.target.height && 0 === n.target.width) {
                                var u = "rtl" === this._GetReadingDirection(),
                                    p = t.PositionUtils.normalizeHorizontalAlignment(this.options.position, u).my;
                                if (!t.StringUtils.isEmptyOrUndefined(p)) {
                                    var d = "center" === p.horizontal ? p.horizontal : n.horizontal,
                                        f = "center" === p.vertical ? "middle" : p.vertical;
                                    n.horizontal = d, n.vertical = f
                                }
                            }
                            var _ = [n.horizontal, n.vertical].join("-"),
                                v = h[_];
                            a.addClass(v), r.addClass(v), a.show();
                            var m, g;
                            if ("left" === n.horizontal ? (m = a.outerWidth(), m -= m + o.getCSSLengthAsInt(a.css("left")), i.left += m - 2) : "right" === n.horizontal && (m = a.outerWidth(), m -= m + o.getCSSLengthAsInt(a.css("right")), i.left -= m - 2), "top" === n.vertical ? (g = a.outerHeight(), g -= g + o.getCSSLengthAsInt(a.css(n.vertical)), i.top += g - 2) : "bottom" === n.vertical && (g = a.outerHeight(), g -= g + o.getCSSLengthAsInt(a.css(n.vertical)), i.top -= g - 2), r.css(i), "center" === n.horizontal && "middle" !== n.vertical) {
                                var O = r.width(),
                                    S = Math.round((O / 2 - a.outerWidth() / 2) / O * 100);
                                a.css({
                                    left: S + "%"
                                })
                            } else if ("middle" === n.vertical) {
                                var P = r.height(),
                                    y = Math.round((P / 2 - a.outerHeight() / 2) / P * 100);
                                a.css({
                                    top: y + "%"
                                })
                            }
                        } else r.css(i);
                        if (t.PositionUtils.captureTransformOriginAnimationEffectsOption(r, n), e && e(i, n), "focusLoss" === this.options.autoDismiss && t.PositionUtils.isAligningPositionClipped(n)) {
                            this._ignoreRestoreFocus = !0;
                            var T = s.getContext(this.element[0]).getBusyContext(),
                                E = {
                                    description: ["ojPopup identified by '", this.element.attr("id"), "' is pending implicit closure."].join("")
                                },
                                U = T.addBusyState(E),
                                b = window.setTimeout(this._resolveBusyStateAndCloseImplicitly.bind(this, U), 0);
                            this._closeDelayTimer = this._resolveBusyStateAndCancelDelayedClosure.bind(this, b, U)
                        }
                    }
                },
                _reposition: function() {
                    var e = this.element,
                        s = this._getPositionAsJqUi();
                    if (t.StringUtils.isString(s.of)) {
                        var o = i(s.of);
                        if (0 === o.length) return !1;
                        s.of = o
                    }
                    return !(this.element.width() > window.innerWidth || this.element.height() > window.innerHeight) && (e.position(s), !0)
                },
                _unregisterResizeListener: function(e) {
                    e && this._resizeHandler && (o.removeResizeListener(e, this._resizeHandler), this._resizeHandler = null)
                },
                _registerResizeListener: function(e) {
                    e && (null == this._resizeHandler && (this._resizeHandler = this._handleResize.bind(this)), o.addResizeListener(e, this._resizeHandler, 30, !0))
                },
                _handleResize: function() {
                    t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN && this._reposition()
                },
                _intialFocus: function(e) {
                    var t = this._deriveInitialFocus();
                    (e || "none" !== t) && (this.GetFocusElement().focus(), this._trigger("focus"))
                },
                GetFocusElement: function() {
                    var e = document.activeElement;
                    if (e && this._isFocusInPopup(e)) return e;
                    var t, s = this._deriveInitialFocus();
                    if ("none" === s && (s = "popup"), "firstFocusable" === s) {
                        for (var o = this._content.find(":focusable"), n = 0; n < o.length; n++)
                            if (l.isFocusable(o[n])) {
                                t = i(o[n]);
                                break
                            }
                        t || (s = "popup")
                    }
                    if ("popup" === s) {
                        var r = this._closeSkipLink;
                        r ? t = r.getLink() : (t = this.element).attr("tabindex", "-1")
                    }
                    return t[0]
                },
                _deriveInitialFocus: function() {
                    var e = this.options,
                        t = e.initialFocus;
                    "auto" === t && (t = "modal" === e.modality ? o.isTouchSupported() ? "popup" : "firstFocusable" : "none");
                    return t
                },
                _isFocusInPopup: function(e, t) {
                    if (e || (e = document.activeElement), !e) return !1;
                    var i = this.element;
                    return t && (i = i.parent()), o.isAncestorOrSelf(i[0], e)
                },
                _isFocusInLauncher: function(e) {
                    e || (e = document.activeElement);
                    var t = this._launcher;
                    return o.isAncestorOrSelf(t[0], e)
                },
                _restoreFocus: function() {
                    this._ignoreRestoreFocus ? delete this._ignoreRestoreFocus : this._isFocusInPopup(null, !0) && this._launcher.focus()
                },
                _keyHandler: function(e) {
                    if (!e.isDefaultPrevented()) {
                        var t = this._content,
                            s = e.target;
                        if (e.keyCode === i.ui.keyCode.ESCAPE && (this._isFocusInPopup(s) || this._isFocusInLauncher(s))) e.preventDefault(), this.close();
                        else if (117 === e.keyCode || "F6" === e.key) this._isFocusInPopup(s) ? "modeless" === this.options.modality ? (e.preventDefault(), this._launcher.focus()) : this.close() : this._isFocusInLauncher(s) && (e.preventDefault(), this._intialFocus(!0));
                        else if (e.keyCode === i.ui.keyCode.TAB && this._isFocusInPopup(s)) {
                            var o = t.find(":tabbable");
                            if (o.length > 0) {
                                var n = o[0],
                                    r = o[o.length - 1],
                                    a = this.element;
                                n !== s && a[0] !== s || !e.shiftKey ? r !== s || e.shiftKey || (e.preventDefault(), r === n ? (a.attr("tabindex", "-1"), a.focus()) : i(n).focus()) : (e.preventDefault(), n === r && n === s ? (a.attr("tabindex", "-1"), a.focus()) : i(r).focus())
                            } else e.preventDefault(), "modeless" === this.options.modality ? this._launcher.focus() : this.close()
                        }
                    }
                },
                _setAutoDismiss: function(e) {
                    var i = this._focusLossCallback,
                        s = this._getPopupServiceEvents();
                    if (i && (delete s[t.PopupService.EVENT.POPUP_AUTODISMISS], delete this._focusLossCallback), "focusLoss" === e && (i = this._dismissalHandler.bind(this), this._focusLossCallback = i, s[t.PopupService.EVENT.POPUP_AUTODISMISS] = i), t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN) {
                        var o = this.element,
                            n = {};
                        n[t.PopupService.OPTION.POPUP] = o, n[t.PopupService.OPTION.EVENTS] = s, t.PopupService.getInstance().changeOptions(n)
                    }
                },
                _dismissalHandler: function(e) {
                    if (t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN) {
                        var i = this._launcher,
                            s = this.element.parent(),
                            n = e.target,
                            r = this._focusSkipLink;
                        if (r) {
                            var a = r.getLink();
                            if (a && o.isAncestorOrSelf(a[0], n)) return
                        }
                        if (!o.isAncestorOrSelf(i[0], n) && !o.isAncestorOrSelf(s[0], n)) {
                            var u = n.getAttribute("tabindex");
                            if (l.isFocusable(n) && "-1" !== u) {
                                if ("mousedown" === e.type || "touchstart" === e.type) return;
                                this._ignoreRestoreFocus = !0
                            }
                            this.close()
                        }
                    }
                },
                _addDescribedBy: function() {
                    var e = this._launcher,
                        t = this.element.attr("id"),
                        s = e.attr("aria-describedby"),
                        o = s ? s.split(/\s+/) : [];
                    o.push(t), s = i.trim(o.join(" ")), e.attr("aria-describedby", s)
                },
                _removeDescribedBy: function() {
                    var e = this._launcher,
                        t = this.element;
                    if (e && 0 !== e.length) {
                        var s = t.attr("id"),
                            o = e.attr("aria-describedby"),
                            n = o ? o.split(/\s+/) : [],
                            r = i.inArray(s, n); - 1 !== r && n.splice(r, 1), (o = i.trim(n.join(" "))) ? e.attr("aria-describedby", o) : e.removeAttr("aria-describedby")
                    }
                },
                _initVoiceOverAssist: function() {
                    var i, s = t.AgentUtils.getAgentInfo().os === t.AgentUtils.OS.IOS || t.AgentUtils.getAgentInfo().os === t.AgentUtils.OS.ANDROID,
                        o = this._liveRegion;
                    o || (o = new e.PopupLiveRegion, this._liveRegion = o);
                    var n = this._deriveInitialFocus();
                    if (i = s ? this.getTranslatedString("none" === n ? "ariaLiveRegionInitialFocusNoneTouch" : "ariaLiveRegionInitialFocusFirstFocusableTouch") : this.getTranslatedString("none" === n ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable"), o.announce(i), s) {
                        var r = this._getSubId("focusSkipLink"),
                            a = this._launcher,
                            l = this._intialFocus.bind(this, !0);
                        i = this.getTranslatedString("ariaFocusSkipLink"), this._focusSkipLink = new e.PopupSkipLink(a, i, l, r);
                        var u = this._content,
                            c = this._getSubId("closeSkipLink");
                        l = this._closeImplicitly.bind(this), i = this.getTranslatedString("ariaCloseSkipLink"), this._closeSkipLink = new e.PopupSkipLink(u, i, l, c)
                    }
                },
                _destroyVoiceOverAssist: function() {
                    this._liveRegion.destroy(), delete this._liveRegion;
                    var e = this._focusSkipLink;
                    e && (e.destroy(), delete this._focusSkipLink);
                    var t = this._closeSkipLink;
                    t && (t.destroy(), delete this._closeSkipLink)
                },
                _getSubId: function(e) {
                    var i = this.element.attr("id");
                    return t.StringUtils.isEmptyOrUndefined(i) && (i = this.uuid), [i, e].join("_")
                },
                _surrogateRemoveHandler: function() {
                    var e = this.element;
                    t.ZOrderUtils.getStatus(e) === t.ZOrderUtils.STATUS.OPEN && e.remove()
                },
                _getPopupServiceEvents: function() {
                    if (!this._popupServiceEvents) {
                        var e = {};
                        this._popupServiceEvents = e, e[t.PopupService.EVENT.POPUP_CLOSE] = this._closeImplicitly.bind(this), e[t.PopupService.EVENT.POPUP_REMOVE] = this._surrogateRemoveHandler.bind(this), e[t.PopupService.EVENT.POPUP_REFRESH] = this.refresh.bind(this), e[t.PopupService.EVENT.POPUP_BEFORE_OPEN] = this._beforeOpenHandler.bind(this), e[t.PopupService.EVENT.POPUP_AFTER_OPEN] = this._afterOpenHandler.bind(this), e[t.PopupService.EVENT.POPUP_BEFORE_CLOSE] = this._beforeCloseHandler.bind(this), e[t.PopupService.EVENT.POPUP_AFTER_CLOSE] = this._afterCloseHandler.bind(this)
                    }
                    return this._popupServiceEvents
                },
                _closeImplicitly: function() {
                    this._ignoreBeforeCloseResultant = !0, this.close(), delete this._ignoreBeforeCloseResultant
                },
                _setWhenReady: function(t) {
                    var i = this._whenReadyMediator;
                    i && (i.destroy(), delete this._whenReadyMediator), ["open", "close"].indexOf(t) < 0 || (this._whenReadyMediator = new e.PopupWhenReadyMediator(this.element, t, "ojPopup", this._IsCustomElement()))
                },
                _isOperationPending: function(e, t) {
                    var i = this._whenReadyMediator;
                    return !!i && i.isOperationPending(this, e, e, t)
                },
                _setupFocus: function(e) {
                    var t = this;
                    this._focusable({
                        applyHighlight: !0,
                        setupHandlers: function(s, o) {
                            t._on(e, {
                                focus: function(e) {
                                    s(i(e.currentTarget))
                                },
                                blur: function(e) {
                                    o(i(e.currentTarget))
                                }
                            })
                        }
                    })
                },
                _NotifyDetached: function() {
                    t.ZOrderUtils.getStatus(this.element) === t.ZOrderUtils.STATUS.OPEN && this._closeImplicitly(), this._super()
                }
            });
            const p = {
                open: "--oj-private-popup-global-open-animation-default",
                close: "--oj-private-popup-global-close-animation-default"
            };
            r.setDefaultOptions({
                ojPopup: {
                    modality: r.createDynamicPropertyGetter(function() {
                        return n.getCachedCSSVarValues(["--oj-private-popup-global-modality-default"])[0]
                    }),
                    animation: r.createDynamicPropertyGetter(function() {
                        const e = {},
                            t = Object.keys(p),
                            i = t.map(e => p[e]),
                            s = n.getCachedCSSVarValues(i);
                        return t.forEach((t, i) => {
                            e[t] = JSON.parse(s[i])
                        }), e
                    })
                }
            })
        }(), (c = {
            properties: {
                autoDismiss: {
                    type: "string",
                    enumValues: ["focusLoss", "none"],
                    value: "focusLoss"
                },
                chrome: {
                    type: "string",
                    enumValues: ["default", "none"],
                    value: "default"
                },
                initialFocus: {
                    type: "string",
                    enumValues: ["auto", "firstFocusable", "none", "popup"],
                    value: "auto"
                },
                modality: {
                    type: "string",
                    enumValues: ["modal", "modeless"],
                    value: "modeless"
                },
                position: {
                    type: "object",
                    properties: {
                        at: {
                            type: "object",
                            properties: {
                                horizontal: {
                                    type: "string",
                                    enumValues: ["center", "end", "left", "right", "start"],
                                    value: "start"
                                },
                                vertical: {
                                    type: "string",
                                    enumValues: ["bottom", "center", "top"],
                                    value: "bottom"
                                }
                            }
                        },
                        collision: {
                            type: "string",
                            enumValues: ["fit", "flip", "flipcenter", "flipfit", "none"],
                            value: "flip"
                        },
                        my: {
                            type: "object",
                            properties: {
                                horizontal: {
                                    type: "string",
                                    enumValues: ["center", "end", "left", "right", "start"],
                                    value: "start"
                                },
                                vertical: {
                                    type: "string",
                                    enumValues: ["bottom", "center", "top"],
                                    value: "top"
                                }
                            }
                        },
                        of: {
                            type: "string|object"
                        },
                        offset: {
                            type: "object",
                            properties: {
                                x: {
                                    type: "number",
                                    value: 0
                                },
                                y: {
                                    type: "number",
                                    value: 0
                                }
                            }
                        }
                    }
                },
                tail: {
                    type: "string",
                    enumValues: ["none", "simple"],
                    value: "none"
                },
                translations: {
                    type: "object",
                    value: {},
                    properties: {
                        ariaCloseSkipLink: {
                            type: "string"
                        },
                        ariaFocusSkipLink: {
                            type: "string"
                        },
                        ariaLiveRegionInitialFocusFirstFocusable: {
                            type: "string"
                        },
                        ariaLiveRegionInitialFocusFirstFocusableTouch: {
                            type: "string"
                        },
                        ariaLiveRegionInitialFocusNone: {
                            type: "string"
                        },
                        ariaLiveRegionInitialFocusNoneTouch: {
                            type: "string"
                        }
                    }
                }
            },
            methods: {
                close: {},
                getProperty: {},
                isOpen: {},
                open: {},
                refresh: {},
                setProperties: {},
                setProperty: {},
                getNodeBySubId: {},
                getSubIdByNode: {}
            },
            events: {
                ojAnimateEnd: {},
                ojAnimateStart: {},
                ojBeforeClose: {},
                ojBeforeOpen: {},
                ojClose: {},
                ojFocus: {},
                ojOpen: {}
            },
            extension: {}
        }).extension._WIDGET_NAME = "ojPopup", c.extension._CONTROLS_SUBTREE_HIDDEN = !0, t.CustomElementBridge.register("oj-popup", {
            metadata: c
        })
});
//# sourceMappingURL=ojpopup.js.map