/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore", "jquery", "ojs/ojcontext", "ojs/ojmessaging", "ojs/ojknockout", "knockout"], function(e, t, i, a, n, o) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
    const _ = function() {
        this.Init()
    };
    e._registerLegacyNamespaceProp("InvalidComponentTracker", _), e.Object.createSubclass(_, e.Object, "oj.InvalidComponentTracker"), _._OPTION_MESSAGES_SHOWN = "messagesShown", _._OPTION_MESSAGES_HIDDEN = "messagesHidden", _._OPTION_DISABLED = "disabled", _._OPTION_READONLY = "readOnly", _.prototype.Init = function() {
        _.superclass.Init.call(this), this._tracked = [], this._invalid = [], this._invalidHidden = [], this.invalidShown = !1, this.invalidHidden = !1
    }, _.prototype.focusOnFirstInvalid = function() {
        var e = null,
            t = this,
            a = this._updateCounter,
            n = i.getPageContext().getBusyContext().addBusyState({
                description: "Setting Focus to first invalid component."
            });
        return this.invalidShown && (e = this._getFirstInvalidComponent()), setTimeout(function() {
            (e = a === t._updateCounter && e || t._getFirstInvalidComponent()) && e("instance").GetFocusElement().focus(), n()
        }, 1), !!e
    }, _.prototype.showMessages = function() {
        var e;
        if (this.invalidHidden)
            for (var t = this._invalidHidden.length, i = 0; i < t; i++) this._invalidHidden[i] && (e = this._tracked[i].component.call(e, "showMessages"))
    }, _.prototype._getFirstInvalidComponent = function() {
        var e = 0,
            t = [],
            i = this._invalid.length;
        for (e = 0; e < i; e++) {
            this._invalid[e] && t.push(this._tracked[e])
        }
        return 0 === t.length ? null : (t.sort(function(e, t) {
            var i = e.element,
                a = t.element;
            return i.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
        }), t[0].component)
    }, _.prototype._remove = function(e) {
        var i = -1,
            a = !1;
        return t.each(this._tracked, function(t, a) {
            i < 0 && a.component === e && (i = t)
        }), i >= 0 && (this._tracked.splice(i, 1), this._invalid.splice(i, 1), this._invalidHidden.splice(i, 1), this._updateInvalidProperties(), a = !0), a
    }, _.prototype._update = function(e, i, a, n) {
        var o, r = e.call(e, "isValid"),
            s = !0,
            d = -1;
        switch (t.each(this._tracked, function(t, i) {
            d < 0 && i.component === e && (d = t)
        }), a) {
            case _._OPTION_MESSAGES_SHOWN:
            case _._OPTION_MESSAGES_HIDDEN:
                if (o = !1, n) {
                    if (d < 0 && (d = this._tracked.push({
                            component: e,
                            element: i
                        }) - 1, this._initializeInvalidTrackers(d, o)), !r && _._hasInvalidMessages(n) && (o = !0, a === _._OPTION_MESSAGES_SHOWN)) {
                        var l = e.call(e, "option", _._OPTION_DISABLED),
                            O = e.call(e, "option", _._OPTION_READONLY);
                        o = !(l || O)
                    }
                    s = this._updateInvalidTracker(a, d || 0, o), this._updateInvalidProperties(), s && (void 0 === this._updateCounter && (this._updateCounter = 0), this._updateCounter += 1)
                }
                break;
            case _._OPTION_DISABLED:
            case _._OPTION_READONLY:
                s = !1, n && (s = this._updateInvalidTracker(_._OPTION_MESSAGES_SHOWN, d || 0, !1), s = this._updateInvalidTracker(_._OPTION_MESSAGES_HIDDEN, d || 0, !1) || s, this._updateInvalidProperties())
        }
        return s
    }, _.prototype._initializeInvalidTrackers = function(e, t) {
        void 0 === this._invalid[e] && this._updateInvalidTracker(_._OPTION_MESSAGES_SHOWN, e, t), void 0 === this._invalidHidden[e] && this._updateInvalidTracker(_._OPTION_MESSAGES_HIDDEN, e, t)
    }, _.prototype._updateInvalidProperties = function() {
        this.invalidShown = this._invalid.indexOf(!0) >= 0, this.invalidHidden = this._invalidHidden.indexOf(!0) >= 0
    }, _.prototype._updateInvalidTracker = function(e, t, i) {
        var a, n = !1;
        return a = e === _._OPTION_MESSAGES_SHOWN ? this._invalid : e === _._OPTION_MESSAGES_HIDDEN ? this._invalidHidden : [], t >= 0 && void 0 !== a[t] ? (n = a[t] !== i) && (a[t] = i) : (a.push(i), n = !0), n
    }, _._hasInvalidMessages = function(e) {
        return !a.isValid(e)
    };
    const r = function() {};
    e._registerLegacyNamespaceProp("ValueBinding", r), r._ATTRIBUTE_INVALID_COMPONENT_TRACKER = "invalidComponentTracker", r._EVENT_OPTIONCHANGE = "ojoptionchange", r._OPTION_MESSAGES_SHOWN = "messagesShown", r._OPTION_MESSAGES_HIDDEN = "messagesHidden", r._OPTION_DISABLED = "disabled", r._OPTION_READONLY = "readOnly", r._update = function(e, t, i, a, n) {
        var _ = {},
            s = n.call()[r._ATTRIBUTE_INVALID_COMPONENT_TRACKER];
        if (e === r._OPTION_DISABLED || e === r._OPTION_READONLY) {
            var d = s && s.peek() || null;
            return null !== d && o.isWriteableObservable(s) && d._update.call(d, a, i, e, t) && s.valueHasMutated(), _[e] = t, _
        }
    }, r._init = function(e, t) {
        var i = {};
        return i[e] = t, i
    }, r._afterCreate = function(e, t, i, a) {
        var n = a.call();
        return e === r._ATTRIBUTE_INVALID_COMPONENT_TRACKER && !!n[e] && r._registerInvalidComponentTrackerWriteback(e, n, t, i), {}
    }, r._beforeDestroy = function(e, i, a, n) {
        var _, s = t(i),
            d = n.call()[e];
        e === r._ATTRIBUTE_INVALID_COMPONENT_TRACKER && (s.off(r._EVENT_OPTIONCHANGE, r._updateInvalidComponentTracker), d && o.isWriteableObservable(d) && (_ = d.peek())._remove.call(_, a) && d.valueHasMutated())
    }, r._updateInvalidComponentTracker = function(e) {
        var t, i = e.data.tracker,
            a = e.data.component,
            n = e.data.element,
            _ = arguments[1],
            s = _.option,
            d = _.value;
        s !== r._OPTION_MESSAGES_SHOWN && s !== r._OPTION_MESSAGES_HIDDEN || i && o.isWriteableObservable(i) && (t = i.peek()) && t._update.call(t, a, n, s, d) && i.valueHasMutated()
    }, r._registerInvalidComponentTrackerWriteback = function(e, i, a, n) {
        var s, d = i[e],
            l = t(a);
        if (!o.isObservable(d)) throw new Error("Binding attribute " + r._ATTRIBUTE_INVALID_COMPONENT_TRACKER + " should be bound to a ko observable.");
        if (null == (s = d.peek()) && d(s = new _), o.isWriteableObservable(d)) {
            var O = n.call(n, "option", r._OPTION_MESSAGES_SHOWN),
                c = n.call(n, "option", r._OPTION_MESSAGES_HIDDEN);
            s._update.call(s, n, a, r._OPTION_MESSAGES_SHOWN, O), s._update.call(s, n, a, r._OPTION_MESSAGES_HIDDEN, c), d.valueHasMutated()
        }
        var u = {
            tracker: d,
            component: n,
            element: a
        };
        l.on(r._EVENT_OPTIONCHANGE, u, r._updateInvalidComponentTracker)
    }, e.ComponentBinding.getDefaultInstance().setupManagedAttributes({
        for: "editableValue",
        attributes: [r._ATTRIBUTE_INVALID_COMPONENT_TRACKER, r._OPTION_DISABLED, r._OPTION_READONLY],
        init: r._init,
        update: r._update,
        afterCreate: r._afterCreate,
        beforeDestroy: r._beforeDestroy
    })
});
//# sourceMappingURL=ojknockout-validation.js.map