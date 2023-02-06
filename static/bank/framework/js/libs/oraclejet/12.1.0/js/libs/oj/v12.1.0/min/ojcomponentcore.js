/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "jqueryui-amd/widget", "jqueryui-amd/unique-id", "jqueryui-amd/keycode", "jqueryui-amd/focusable", "jqueryui-amd/tabbable", "ojs/ojcore", "jquery", "ojs/ojmessaging", "ojs/ojmetadatautils", "ojs/ojcore-base", "ojs/ojdomutils", "ojs/ojcustomelement", "ojs/ojcustomelement-utils", "ojs/ojlogger", "ojs/ojdefaultsutils", "ojs/ojtranslation", "ojs/ojfocusutils", "ojs/ojgestureutils"], function(t, e, n, i, o, s, r, a, l, u, c, _, h, p, d, E, f, g, m) {
    "use strict";
    r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l, c = c && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
    /**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    const v = function(t) {
        this.Init(t)
    };
    r.Object.createSubclass(v, r.Object, "oj.ComponentMessaging"), r._registerLegacyNamespaceProp("ComponentMessaging", v), v._STRATEGY_TYPE = {
        NONE: "none",
        NOTEWINDOW: "notewindow",
        PLACEHOLDER: "placeholder",
        INLINE: "inline",
        LABEL_EDGE_INSIDE: "inside",
        LABEL_EDGE_INSIDE_FORM_CNTRL: "insideformcontrol",
        USER_ASSISTANCE_INLINE: "userassistanceinline"
    }, v._STRATEGY_TYPE_TO_CALLBACK = {};
    const y = "aria-describedby";
    v.registerMessagingStrategy = function(t, e) {
        t && "function" == typeof e && (v._STRATEGY_TYPE_TO_CALLBACK[t] = e)
    }, v.prototype.Init = function(t) {
        v.superclass.Init.call(this), this._component = t, this._activated = !1, this._initializeMessagingStrategies()
    }, v.prototype.activate = function(t, e, n) {
        var i = this;
        r.Assert.assertObject(n), this._launcher = t, this._contentElement = e, this._messagingContent = r.CollectionUtils.copyInto(this._messagingContent || {}, n), this._isActive() ? this._reactivate() : (a.each(this._strategies, function(t, e) {
            e.activate(i)
        }), this._activated = !0)
    }, v.prototype.update = function(t) {
        r.Assert.assertObject(t), r.Assert.assertBoolean(this._activated), this._messagingContent = r.CollectionUtils.copyInto(this._messagingContent || {}, t), this._activated && a.each(this._strategies, function(e, n) {
            n.shouldUpdate(t) && n.update()
        })
    }, v.prototype.deactivate = function() {
        a.each(this._strategies, function(t, e) {
            e.deactivate()
        }), this._activated = !1, this._component = null, this._launcher = null, this._contentElement = null, this._strategies = {}
    }, v.prototype.close = function() {
        this._activated && a.each(this._strategies, function(t, e) {
            e.close()
        })
    }, v.prototype._createMessagingStrategy = function(t, e) {
        return new(v._STRATEGY_TYPE_TO_CALLBACK[t] || v._STRATEGY_TYPE_TO_CALLBACK[v._STRATEGY_TYPE.NONE])(e)
    }, v.prototype._getComponent = function() {
        return this._component || null
    }, v.prototype._getLauncher = function() {
        return this._launcher || null
    }, v.prototype._getContentElement = function() {
        return this._contentElement || null
    }, v.prototype._getMessagingContent = function() {
        return this._messagingContent || {}
    }, v.prototype._setMessagingContent = function(t) {
        r.Assert.assertObject(t), this._messagingContent = r.CollectionUtils.copyInto(this._messagingContent || {}, t)
    }, v.prototype._isActive = function() {
        return this._activated
    }, v.prototype._getResolvedMessagingDisplayOptions = function(t) {
        for (var e = {}, n = !1, i = this._component.options, o = {}, s = Object.keys(t), r = 0; r < s.length; r++) {
            var l = s[r],
                u = t[l];
            n = !1;
            var c = l + "";
            if (Array.isArray(u))
                for (var _ = 0; _ < u.length; _++) {
                    var h = u[_];
                    n || (n = this._resolveStrategyTypeForArtifact(c, h, i, o))
                } else "string" == typeof u && (n || (n = this._resolveStrategyTypeForArtifact(c, u, i, o)));
            n || (o[c] = v._STRATEGY_TYPE.NONE)
        }
        return this._addLabelStrategy(o), a.each(v._STRATEGY_TYPE, function(t, n) {
            e[n] = []
        }), a.each(o, function(t, n) {
            e[n].push(t)
        }), e
    }, v.prototype._getUserAssistanceStrategyToArtifactsObj = function() {
        var t = {},
            e = this._component.options.displayOptions || {},
            n = {},
            i = Object.keys(e);
        for (let t = 0; t < i.length; t++) {
            let o = i[t],
                s = e[o],
                r = o + "";
            n[r] = "string" == typeof s && "none" === s ? v._STRATEGY_TYPE.NONE : v._STRATEGY_TYPE.USER_ASSISTANCE_INLINE
        }
        return this._addLabelStrategy(n), Object.keys(v._STRATEGY_TYPE).forEach(function(e) {
            let n = v._STRATEGY_TYPE[e];
            t[n] = []
        }), Object.keys(n).forEach(function(e) {
            let i = n[e];
            t[i].push(e)
        }), t
    }, v.prototype._addLabelStrategy = function(t) {
        var e = this._component._ResolveLabelEdgeStrategyType();
        this._resolveStrategyTypeForArtifact("labelEdge", e, this._component.options, t) || (t.labelEdge = v._STRATEGY_TYPE.NONE)
    }, v.prototype._resolveStrategyTypeForArtifact = function(t, e, n, i) {
        var o = !1,
            s = n.placeholder;
        switch (e) {
            case v._STRATEGY_TYPE.PLACEHOLDER:
                "converterHint" === t && (o || s || (i[t] = e, o = !0));
                break;
            case v._STRATEGY_TYPE.INLINE:
                "messages" === t && (o || (i[t] = e, o = !0));
                break;
            case v._STRATEGY_TYPE.LABEL_EDGE_INSIDE:
            case v._STRATEGY_TYPE.LABEL_EDGE_INSIDE_FORM_CNTRL:
                "labelEdge" !== t || o || r.StringUtils.isEmptyOrUndefined(n.labelHint) || (i[t] = e, o = !0);
                break;
            default:
                o || "labelEdge" === t || (i[t] = e, o = !0)
        }
        return o
    }, v.prototype._initializeMessagingStrategies = function() {
        var t = this._strategyToArtifacts(),
            e = t[v._STRATEGY_TYPE.NOTEWINDOW],
            n = t[v._STRATEGY_TYPE.NONE],
            i = t[v._STRATEGY_TYPE.PLACEHOLDER],
            o = t[v._STRATEGY_TYPE.INLINE],
            s = t[v._STRATEGY_TYPE.LABEL_EDGE_INSIDE],
            r = t[v._STRATEGY_TYPE.LABEL_EDGE_INSIDE_FORM_CNTRL],
            a = t[v._STRATEGY_TYPE.USER_ASSISTANCE_INLINE],
            l = {};
        e.length > 0 && (l[v._STRATEGY_TYPE.NOTEWINDOW] = this._createMessagingStrategy(v._STRATEGY_TYPE.NOTEWINDOW, e)), i.length > 0 && 0 === s.length && (l[v._STRATEGY_TYPE.PLACEHOLDER] = this._createMessagingStrategy(v._STRATEGY_TYPE.PLACEHOLDER, i)), o.length > 0 && (l[v._STRATEGY_TYPE.INLINE] = this._createMessagingStrategy(v._STRATEGY_TYPE.INLINE, o)), a.length > 0 && (l[v._STRATEGY_TYPE.USER_ASSISTANCE_INLINE] = this._createMessagingStrategy(v._STRATEGY_TYPE.USER_ASSISTANCE_INLINE, a)), s.length > 0 ? l[v._STRATEGY_TYPE.LABEL_EDGE_INSIDE] = this._createMessagingStrategy(v._STRATEGY_TYPE.LABEL_EDGE_INSIDE, s) : r.length > 0 && (l[v._STRATEGY_TYPE.LABEL_EDGE_INSIDE_FORM_CNTRL] = this._createMessagingStrategy(v._STRATEGY_TYPE.LABEL_EDGE_INSIDE_FORM_CNTRL, r)), l[v._STRATEGY_TYPE.NONE] = this._createMessagingStrategy(v._STRATEGY_TYPE.NONE, n), this._strategies = l
    }, v.prototype._reactivate = function() {
        var t, e = this._strategyToArtifacts(),
            n = this;
        a.each(e, function(e, i) {
            e += "", t = n._strategies[e], i && i.length > 0 ? t ? t && t.reactivate(i) : (t = n._createMessagingStrategy(e, i), n._strategies[e] = t, t.activate(n)) : t && v._STRATEGY_TYPE.NONE !== e && (t.deactivate(), delete n._strategies[e])
        })
    }, v.prototype._strategyToArtifacts = function() {
        let t, e = this._component._getResolvedUserAssistance();
        if ("compact" !== e && "displayOptions" !== e) t = this._getUserAssistanceStrategyToArtifactsObj();
        else {
            let n = this._component.options.displayOptions || {};
            "compact" === e ? (n.messages = "notewindow", n.validatorHint = "notewindow", n.converterHint = "notewindow", t = this._getResolvedMessagingDisplayOptions(n)) : t = this._getResolvedMessagingDisplayOptions(n)
        }
        return t
    };
    const T = function(t) {
        this.Init(t)
    };
    r.Object.createSubclass(T, r.Object, "oj.MessagingStrategy"), r._registerLegacyNamespaceProp("MessagingStrategy", T), T.prototype.Init = function(t) {
        r.Assert.assertArray(t), T.superclass.Init.call(this), this._displayOptions = t
    }, T.prototype.activate = function(t) {
        this._componentMessaging = t
    }, T.prototype.deactivate = function() {}, T.prototype.close = function() {}, T.prototype.reactivate = function(t) {
        this.Init(t)
    }, T.prototype.shouldUpdate = function(t) {
        return !0
    }, T.prototype.update = function() {}, T.prototype.GetLauncher = function() {
        return this._componentMessaging._getLauncher()
    }, T.prototype.GetContentElement = function() {
        return this._componentMessaging._getContentElement()
    }, T.prototype.GetComponent = function() {
        return this._componentMessaging._getComponent()
    }, T.prototype.setHasValidatorHints = function(t) {
        this._hasValidatorHints = t
    }, T.prototype.getHasValidatorHints = function() {
        return !0 === this._hasValidatorHints
    }, T.prototype.GenerateIdIfNeeded = function(t) {
        isNaN(T._uidCounter) && (T._uidCounter = 0);
        var e = t;
        e.id || (e.id = "ojms_" + T._uidCounter, T._uidCounter += 1)
    }, T.prototype.GetMessages = function() {
        return this.GetValidityState().getMessages()
    }, T.prototype.GetMaxSeverity = function() {
        return this.GetValidityState().getMaxSeverity()
    }, T.prototype.GetConverterHint = function() {
        var t = [],
            e = this._getMessagingContent(),
            n = e && e.converterHint;
        return n && t.push(n), t
    }, T.prototype.GetValidatorHints = function() {
        if (!this.getHasValidatorHints()) {
            this.setHasValidatorHints(!0);
            let t = this.GetComponent();
            this._setMessagingContent(t._getValidatorHintsMC()), t._initAsyncValidatorMessagingHint()
        }
        var t = this._getMessagingContent();
        return t && t.validatorHint || []
    }, T.prototype.GetTitle = function() {
        var t = this._getMessagingContent();
        return t && t.title || ""
    }, T.prototype.GetValidityState = function() {
        var t = this._getMessagingContent();
        return t && t.validityState || null
    }, T.prototype.HasMessages = function() {
        var t = this.GetMessages();
        return !!(t && t.length > 0)
    }, T.prototype.ShowMessages = function() {
        return -1 !== this._displayOptions.indexOf("messages")
    }, T.prototype.ShowConverterHint = function() {
        return -1 !== this._displayOptions.indexOf("converterHint")
    }, T.prototype.ShowValidatorHint = function() {
        return -1 !== this._displayOptions.indexOf("validatorHint")
    }, T.prototype.ShowTitle = function() {
        return -1 !== this._displayOptions.indexOf("title") || -1 !== this._displayOptions.indexOf("helpInstruction")
    }, T.prototype.IsInvalid = function() {
        return this.GetValidityState().isInvalid()
    }, T.prototype.AddAriaDescribedByForInlineMessaging = function(t) {
        let e = this.GetContentElement();
        r.Assert.assertPrototype(e, a);
        let n = a(t).uniqueId()[0].getAttribute("id");
        e.each(function() {
            let t = this.getAttribute(y),
                e = t ? t.split(/\s+/) : []; - 1 === e.indexOf(n) && e.push(n);
            let i = e.join(" ").trim();
            this.setAttribute(y, i)
        })
    }, T.prototype.AddDescribedByToElement = function(t, e) {
        const n = t.getAttribute("described-by");
        let i, o = n ? n.split(/\s+/) : []; - 1 === o.indexOf(e) && o.push(e), i = o.join(" ").trim(), t.setAttribute("described-by", i)
    }, T.prototype.RemoveDescribedByFromElement = function(t, e) {
        const n = "described-by",
            i = t.getAttribute(n);
        let o = (i ? i.split(/\s+/) : []).filter(t => t !== e).join(" ").trim();
        o ? t.setAttribute(n, o) : t.removeAttribute(n)
    }, T.prototype.RemoveAriaDescribedByForInlineMessaging = function(t) {
        let e = this.GetContentElement();
        r.Assert.assertPrototype(e, a);
        let n = t.getAttribute("id");
        e.each(function() {
            let t = this.getAttribute(y),
                e = t ? t.split(/\s+/) : [],
                i = e.indexOf(n); - 1 !== i && e.splice(i, 1);
            let o = e.join(" ").trim();
            o ? this.setAttribute(y, o) : this.removeAttribute(y)
        })
    }, T.prototype._getMessagingContent = function() {
        return this._componentMessaging ? this._componentMessaging._getMessagingContent() : {}
    }, T.prototype._setMessagingContent = function(t) {
        return this._componentMessaging ? this._componentMessaging._setMessagingContent(t) : {}
    };
    const C = function(t) {
        this.Init(t)
    };
    v.registerMessagingStrategy(v._STRATEGY_TYPE.NONE, C), C._SELECTOR_STATE_INVALID = "oj-invalid", C._SELECTOR_STATE_WARNING = "oj-warning", r.Object.createSubclass(C, T, "oj.DefaultMessagingStrategy"), r._registerLegacyNamespaceProp("DefaultMessagingStrategy", C), C.prototype.update = function() {
        C.superclass.update.call(this);
        var t = this.GetLauncher(),
            e = this.GetMaxSeverity(),
            n = [],
            i = [],
            o = !1,
            s = this.GetComponent().widget();
        t && (this.IsInvalid() ? (n.push(C._SELECTOR_STATE_WARNING), i.push(C._SELECTOR_STATE_INVALID), o = !0) : this.HasMessages() && e === l.SEVERITY_LEVEL.WARNING ? (n.push(C._SELECTOR_STATE_INVALID), i.push(C._SELECTOR_STATE_WARNING)) : (n.push(C._SELECTOR_STATE_INVALID), n.push(C._SELECTOR_STATE_WARNING)), s.removeClass(n.join(" ")).addClass(i.join(" ")), this.GetContentElement().attr({
            "aria-invalid": o
        }))
    }, C.prototype.deactivate = function() {
        this.GetComponent().widget().removeClass(C._SELECTOR_STATE_INVALID).removeClass(C._SELECTOR_STATE_WARNING), this.GetContentElement().removeAttr("aria-invalid"), C.superclass.deactivate.call(this)
    };
    const S = function(t) {
        this.Init(t)
    };
    v.registerMessagingStrategy(v._STRATEGY_TYPE.PLACEHOLDER, S), r.Object.createSubclass(S, T, "oj.PlaceholderMessagingStrategy"), r._registerLegacyNamespaceProp("PlaceholderMessagingStrategy", S), S.prototype.Init = function(t) {
        S.superclass.Init.call(this, t)
    }, S.prototype.activate = function(t) {
        S.superclass.activate.call(this, t), this._refreshPlaceholder()
    }, S.prototype.reactivate = function(t) {
        S.superclass.reactivate.call(this, t), this._refreshPlaceholder()
    }, S.prototype.shouldUpdate = function(t) {
        return !(!t || void 0 === t.converterHint)
    }, S.prototype.update = function() {
        S.superclass.update.call(this), this._refreshPlaceholder()
    }, S.prototype._refreshPlaceholder = function() {
        var t = this.GetLauncher();
        if (this.ShowPlaceholderContent() && t) {
            var e = this.GetConverterHint(),
                n = e.length ? e[0] : "";
            if (r.StringUtils.isEmptyOrUndefined(n)) return;
            this.GetComponent().option({
                placeholder: n
            }, {
                _context: {
                    internalMessagingSet: !0
                }
            })
        }
    }, S.prototype.ShowPlaceholderContent = function() {
        return this.ShowConverterHint()
    };
    const A = function(t, e) {
        this.Init(t, e)
    };
    A.isInvalid = function(t) {
        return l.getMaxSeverity(t) >= l.SEVERITY_LEVEL.ERROR
    }, r.Object.createSubclass(A, r.Object, "oj.ComponentValidity"), r._registerLegacyNamespaceProp("ComponentValidity", A), A.prototype.Init = function(t, e) {
        A.superclass.Init.call(this), this._initialize(t, e)
    }, A.prototype.isInvalid = function() {
        return this._invalid
    }, A.prototype.getMessages = function() {
        return this._messages
    }, A.prototype.getMaxSeverity = function() {
        return this._maxSeverity
    }, A.prototype.update = function(t, e) {
        this._initialize(t, e)
    }, A.prototype._initialize = function(t, e) {
        this._compValid = t, this._compMessages = e, this._messages = this._getImmediateMessages(), this._maxSeverity = l.getMaxSeverity(this._messages), this._invalid = A.isInvalid(this._messages)
    }, A.prototype._getImmediateMessages = function() {
        for (var t = this._compMessages || [], e = [], n = 0; n < t.length; n++) {
            var i = t[n];
            i instanceof l.ComponentMessage && !i.canDisplay() || e.push(i)
        }
        return e
    };
    const N = {};
    c._registerLegacyNamespaceProp("Components", N), N._OJ_CONTAINER_ATTR = "data-oj-container";
    const b = "node is not a component element";

    function O(t, e) {
        if (null == t) return null;
        var n = 1 === t.nodeType,
            i = c.Composite && !e ? c.Composite.getContainingComposite(t) : null;
        if (i) return i;
        if (n && t.hasAttribute("data-oj-internal")) return t.parentNode instanceof Element && t.parentNode.hasAttribute("data-oj-surrogate-id") ? O(t = document.querySelector("[data-oj-popup-" + t.id + "-parent]"), e) : O(t.parentNode, e);
        if (L(t)) return t;
        if (n && t.classList.contains("oj-component")) {
            if (G(t = t.querySelector(".oj-component-initnode:not([data-oj-internal])") || t)) return t
        } else if (n && t.hasAttribute("data-oj-containerid")) return O(t = document.getElementById(t.getAttribute("data-oj-containerid")), e);
        return O(t.parentNode, e)
    }

    function P(t, e) {
        var n = function() {
                var t = a(this),
                    n = t.data("oj-component-names");
                if (null != n)
                    for (var i = 0; i < n.length; i++) {
                        var o = t.data("oj-" + n[i]);
                        null != o && e(o)
                    }
            },
            i = a(t);
        i.hasClass("oj-component-initnode") && n.call(t), i.find(".oj-component-initnode").each(n)
    }

    function I(t, e, n) {
        function i(t) {
            if (e && t.classList.contains("oj-component-initnode")) {
                var i = a(t),
                    o = i.data("oj-component-names");
                if (null != o)
                    for (var s = 0; s < o.length; s++) {
                        var r = i.data("oj-" + o[s]);
                        null != r && e(r)
                    }
            }
            if (n && "oj-defer" === t.tagName.toLowerCase()) {
                if (!t._activate) throw new Error("subtreeShown called before module ojs/ojdefer was loaded");
                t._activate()
            }
        }
        if (! function(t) {
                for (var e = t; e;) {
                    if (e.nodeType === Node.DOCUMENT_NODE) return !1;
                    if (e.nodeType === Node.ELEMENT_NODE && e.classList.contains("oj-subtree-hidden")) return !0;
                    e = e.parentNode
                }
                return !0
            }(t)) {
            i(t);
            var o = [".oj-component-initnode"];
            n && o.push("oj-defer");
            var s = [];
            o.forEach(function(t) {
                s.push(".oj-subtree-hidden " + t), s.push(".oj-pending-subtree-hidden " + t)
            });
            for (var r = o.join(","), l = s.join(","), u = function(t, e) {
                    for (var n = [], i = 0, o = 0; o < e.length; o++) {
                        for (var s = e[o]; i < t.length && t[i] !== s;) n.push(t[i]), i += 1;
                        i += 1
                    }
                    for (; i < t.length;) n.push(t[i]), i += 1;
                    return n
                }(t.querySelectorAll(r), t.querySelectorAll(l)), c = 0; c < u.length; c++) i(u[c])
        }
    }

    function R(t) {
        this.getCallback = function() {
            return t
        }
    }

    function D(t, e, n) {
        return Object.keys(e).forEach(function(i) {
            var o = t[i] || [],
                s = e[i];
            n ? o = o.concat(s) : o.push(s), t[i] = o
        }), t
    }

    function M(t) {
        return p.CustomElementUtils.isElementRegistered(t.tagName)
    }

    function G(t) {
        return !!N.__GetWidgetConstructor(t)
    }

    function L(t) {
        return M(t) || G(t)
    }
    N.setDefaultOptions = function(t) {
        var e = N._defaultProperties || {};
        Object.keys(t).forEach(function(n) {
            var i = t[n];
            if (!c.CollectionUtils.isPlainObject(i)) throw new Error("Invalid default options");
            e[n] = D(e[n] || {}, i, !1)
        }), N._defaultProperties = e
    }, N.getDefaultOptions = function() {
        return N._defaultProperties || {}
    }, N.createDynamicPropertyGetter = function(t) {
        return new R(t)
    }, N.getWidgetConstructor = function(t, e) {
        return t && !p.CustomElementUtils.isElementRegistered(t.tagName) ? N.__GetWidgetConstructor(t, e) : null
    }, N.__GetWidgetConstructor = function(t, e) {
        var n = a(t),
            i = n.data("oj-component-names");
        if (i && (null == e ? e = i[0] : i.indexOf(e) < 0 && (e = void 0), null != e)) {
            var o = n[e];
            if ("function" == typeof o) return o.bind(n)
        }
        return null
    }, N.subtreeAttached = function(t) {
        _.fixResizeListeners(t), P(t, function(t) {
            t.__handleSubtreeAttached()
        })
    }, N.subtreeDetached = function(t) {
        P(t, function(t) {
            t.__handleSubtreeDetached()
        })
    }, N.subtreeShown = function(t, e) {
        var n = a(t)[0];
        if (n.nodeType === Node.ELEMENT_NODE) {
            var i = (e || {}).initialRender;
            i || _.fixResizeListeners(n), n.classList.remove("oj-subtree-hidden"), I(n, function(t) {
                p.CustomElementUtils.allowSlotRelocation(!0);
                try {
                    i ? t._NotifyInitShown() : t._NotifyShown()
                } finally {
                    p.CustomElementUtils.allowSlotRelocation(!1)
                }
            }, !0)
        }
    }, N.subtreeHidden = function(t) {
        var e = a(t)[0];
        e.nodeType === Node.ELEMENT_NODE && (I(e, function(t) {
            p.CustomElementUtils.allowSlotRelocation(!0);
            try {
                t._NotifyHidden()
            } finally {
                p.CustomElementUtils.allowSlotRelocation(!1)
            }
        }, !1), e.classList.add("oj-subtree-hidden"))
    }, N.markPendingSubtreeHidden = function(t) {
        t.classList.add("oj-pending-subtree-hidden")
    }, N.unmarkPendingSubtreeHidden = function(t) {
        t.classList.remove("oj-pending-subtree-hidden")
    }, N.isComponentInitialized = function(t, e) {
        var n = t.data("oj-component-names");
        return !!(a.isArray(n) && n.indexOf(e) > -1 && t.is(".oj-component-initnode"))
    }, N.__getDefaultOptions = function(t) {
        for (var e = {}, n = N.getDefaultOptions(), i = t.length - 1; i >= 0; i--) {
            var o = n[t[i]];
            void 0 !== o && (e = D(e, o, !0))
        }
        return e
    }, N.getComponentElementByNode = function(t) {
        var e = !!(arguments.length > 1 && arguments[1]);
        return O(t, e)
    }, N.getSubIdByNode = function(t, e) {
        return N.callComponentMethod(t, "getSubIdByNode", e)
    }, N.getNodeBySubId = function(t, e) {
        return N.callComponentMethod(t, "getNodeBySubId", e)
    }, N.getComponentOption = function(t, e) {
        if (!L(t)) throw new Error(b);
        return M(t) ? t.getProperty ? t.getProperty.call(t, e) : void 0 : N.__GetWidgetConstructor(t)("option", e)
    }, N.setComponentOption = function(t, e, n) {
        if (!L(t)) throw new Error(b);
        M(t) ? t.setProperty && t.setProperty.call(t, e, n) : N.__GetWidgetConstructor(t)("option", e, n)
    }, N.callComponentMethod = function(t, e, n) {
        if (!L(t)) throw new Error(b);
        return M(t) ? t[e] ? t[e].apply(t, [].slice.call(arguments, 2)) : void 0 : N.__GetWidgetConstructor(t).apply(a(t), [].slice.call(arguments, 1))
    };
    const j = {};
    j.proto = Object.create(r.BaseCustomElementBridge.proto), r.CollectionUtils.copyInto(j.proto, {
        beforePropertyChangedEvent: function(t, e, n) {
            var i = e,
                o = n.value;
            n.subproperty && (i = n.subproperty.path, o = n.subproperty.value), this._partialRender(t, i, o)
        },
        AddComponentMethods: function(t) {
            t.refresh = function() {
                p.CustomElementUtils.getElementBridge(this)._fullRender(this)
            }, t.setProperty = function(t, e) {
                var n = p.CustomElementUtils.getElementBridge(this);
                n.SaveEarlyPropertySet(this, t, e) || n.SetProperty(this, t, e, this, !0)
            }, t.getProperty = function(t) {
                return p.CustomElementUtils.getElementBridge(this).GetProperty(this, t, this)
            }, t._propsProto.setProperty = function(t, e) {
                this._BRIDGE.SetProperty(this._ELEMENT, t, e, this, !1)
            }, t._propsProto.getProperty = function(t) {
                return this._BRIDGE.GetProperty(this, t, this)
            }
        },
        CreateComponent: function(t) {
            if (N.unmarkPendingSubtreeHidden(t), !this._INSTANCE && this._EXTENSION._CONSTRUCTOR) {
                var e = p.ElementUtils.getUniqueId();
                if (this._CONTEXT = {
                        element: t,
                        props: this._PROPS_PROXY,
                        unique: e
                    }, this._CONTEXT.uniqueId = t.id ? t.id : e, this._INSTANCE = new this._EXTENSION._CONSTRUCTOR(this._CONTEXT), this._INSTANCE.createDOM && this._INSTANCE.createDOM(), this._INSTANCE.updateDOM) {
                    p.CustomElementUtils.allowSlotRelocation(!0);
                    try {
                        this._INSTANCE.updateDOM()
                    } finally {
                        p.CustomElementUtils.allowSlotRelocation(!1)
                    }
                }
            }
        },
        DefineMethodCallback: function(t, e, n) {
            t[e] = function() {
                var t = p.CustomElementUtils.getElementBridge(this);
                if (t._INSTANCE) {
                    var i = n.internalName || e;
                    return t._INSTANCE[i].apply(t._INSTANCE, arguments)
                }
            }
        },
        DefinePropertyCallback: function(t, e, n) {
            function i(t, i) {
                if (!this._BRIDGE.SaveEarlyPropertySet(this._ELEMENT, e, t)) {
                    i && (t = p.transformPreactValue(this._ELEMENT, n, t));
                    var o = this._BRIDGE._PROPS[e];
                    p.ElementUtils.comparePropertyValues(n, t, o) ? d.info(p.CustomElementUtils.getElementInfo(this._ELEMENT) + ": Ignoring property set for property '" + e + "' with same value.") : (i && (t = this._BRIDGE.ValidatePropertySet(this._ELEMENT, e, t)), n._eventListener ? (this._BRIDGE.SetEventListenerProperty(this._ELEMENT, e, t), this._BRIDGE._PROPS[e] = t) : (this._BRIDGE._PROPS[e] = t, r.BaseCustomElementBridge.__FirePropertyChangeEvent(this._ELEMENT, e, t, o, i ? "external" : "internal"), this._BRIDGE.State.dirtyProps.add(e)))
                }
            }

            function o() {
                var t = this._BRIDGE._PROPS[e];
                return void 0 === t && (t = this._BRIDGE._getDefaultValue(e, n), this._BRIDGE._PROPS[e] = t), t
            }
            n._derived || r.BaseCustomElementBridge.__DefineDynamicObjectProperty(t._propsProto, e, function() {
                return o.bind(this)()
            }, function(t) {
                i.bind(this)(t, !1)
            }), r.BaseCustomElementBridge.__DefineDynamicObjectProperty(t, e, function() {
                var t = p.CustomElementUtils.getElementBridge(this);
                return o.bind(t._PROPS_PROXY)()
            }, function(t) {
                var e = p.CustomElementUtils.getElementBridge(this);
                i.bind(e._PROPS_PROXY)(t, !0)
            })
        },
        InitializeElement: function(t) {
            r.BaseCustomElementBridge.proto.InitializeElement.call(this, t), this._EXTENSION._CONTROLS_SUBTREE_HIDDEN && N.markPendingSubtreeHidden(t), r.BaseCustomElementBridge.__InitProperties(t, t)
        },
        InitializePrototype: function(t) {
            r.BaseCustomElementBridge.proto.InitializePrototype.call(this, t), Object.defineProperty(t, "_propsProto", {
                value: {}
            })
        },
        initializeBridge: function(t, e) {
            r.BaseCustomElementBridge.proto.initializeBridge.call(this, t, e), this._EXTENSION = this.METADATA.extension || {}, this._PROPS = {}, t._propsProto && (this._PROPS_PROXY = Object.create(t._propsProto), this._PROPS_PROXY._BRIDGE = this, this._PROPS_PROXY._ELEMENT = t)
        },
        ShouldRemoveDisabled: function() {
            return !0 === this._EXTENSION._SHOULD_REMOVE_DISABLED
        },
        _fullRender: function(t) {
            if (this._INSTANCE && this._INSTANCE.updateDOM) {
                p.CustomElementUtils.allowSlotRelocation(!0);
                try {
                    this._INSTANCE.updateDOM()
                } finally {
                    p.CustomElementUtils.allowSlotRelocation(!1)
                }
            }
        },
        _partialRender: function(t, e, n) {
            if (this._INSTANCE) {
                var i = this._INSTANCE.handlePropertyChanged;
                if ((!i || !i(e, n)) && this._INSTANCE.updateDOM) {
                    p.CustomElementUtils.allowSlotRelocation(!0);
                    try {
                        this._INSTANCE.updateDOM()
                    } finally {
                        p.CustomElementUtils.allowSlotRelocation(!1)
                    }
                }
            }
        },
        _getDefaultValue: function(t, e) {
            return this._EXTENSION._CONSTRUCTOR ? E.DefaultsUtils.getDefaults(this._EXTENSION._CONSTRUCTOR, this.METADATA, !1)[t] : u.getDefaultValue(e)
        }
    }), r._registerLegacyNamespaceProp("DefinitionElementBridge", j);
    class B extends p.ElementState {
        IsTransferAttribute(t) {
            const e = p.CustomElementUtils.getElementBridge(this.Element),
                n = e._EXTENSION._GLOBAL_TRANSFER_ATTRS;
            return e._WIDGET_ELEM && n && n.includes(t)
        }
        GetDescriptiveTransferAttributeValue(t) {
            return p.CustomElementUtils.getElementBridge(this.Element)._WIDGET_ELEM.getAttribute(t)
        }
    }
    const w = {};
    w.proto = Object.create(r.BaseCustomElementBridge.proto), r._registerLegacyNamespaceProp("CustomElementBridge", w), r.CollectionUtils.copyInto(w.proto, {
        getThrottlePromise: function() {
            var t = this.State.getBindingProviderPromise();
            return t = t.then(function(t) {
                return t ? t.__GetThrottlePromise() : null
            })
        },
        AddComponentMethods: function(t) {
            t.setProperty = function(t, e) {
                var n = p.CustomElementUtils.getElementBridge(this);
                if (!n.SaveEarlyPropertySet(this, t, e) && !n._setEventProperty(this, t, e) && !n._validateAndSetCopyProperty(this, t, e, null)) {
                    var i = u.getPropertyMetadata(t, p.CustomElementUtils.getElementProperties(this));
                    i ? (n._setOption(t, e, i, this), n.State.dirtyProps.add(t.split(".")[0])) : this[t] = e
                }
            }, t.getProperty = function(t) {
                var e = p.CustomElementUtils.getElementBridge(this),
                    n = u.getPropertyMetadata(t, p.CustomElementUtils.getElementProperties(this));
                if (p.AttributeUtils.isEventListenerProperty(t) || !n) return this[t];
                var i = n ? n.extension : null;
                return i && i._COPY_TO_INNER_ELEM ? e._getCopyProperty(this, t, n) : w._getPropertyAccessor(this, t)()
            }, t.focus = function() {
                var t = p.CustomElementUtils.getElementBridge(this);
                if (t._WIDGET_INSTANCE) {
                    var e = t._WIDGET_INSTANCE.__getFocusElement();
                    e && (e !== this ? e.focus() : HTMLElement.prototype.focus.call(this))
                } else HTMLElement.prototype.focus.call(this)
            }, t.blur = function() {
                var t = p.CustomElementUtils.getElementBridge(this);
                if (t._WIDGET_INSTANCE) {
                    var e = t._WIDGET_INSTANCE.__getFocusElement();
                    e && (e !== this ? e.blur() : HTMLElement.prototype.blur.call(this))
                } else HTMLElement.prototype.blur.call(this)
            }
        },
        BatchedPropertySet: function(t, e) {
            var n, i = Object.keys(e),
                o = {};
            for (n = 0; n < i.length; n++) {
                var s = i[n],
                    r = e[s];
                this._setEventProperty(t, s, r) || this._validateAndSetCopyProperty(t, s, r, null) || (r = this.ValidatePropertySet(t, s, r), o[s = this.GetAliasForProperty(s)] = r)
            }
            var a = N.__GetWidgetConstructor(this._WIDGET_ELEM);
            if (a) a("option", o);
            else
                for (n = 0; n < i.length; n++) {
                    var l = i[n];
                    t.setProperty(l, e[l])
                }
        },
        CreateComponent: function(t) {
            var e = this._INNER_DOM_FUNCTION;
            if (this._WIDGET_ELEM = w._getWidgetElement(t, e ? e(t) : this._EXTENSION._INNER_ELEM), this._WIDGET_ELEM !== t) {
                for (var n = this._EXTENSION._GLOBAL_TRANSFER_ATTRS || [], i = 0; i < n.length; i++) {
                    var o = n[i];
                    t.hasAttribute(o) && (this._WIDGET_ELEM.setAttribute(o, t.getAttribute(o)), this._removingTransfer = !0, t.removeAttribute(o))
                }
                this._copyProperties()
            }
            N.unmarkPendingSubtreeHidden(t);
            var s = a(this._WIDGET_ELEM),
                r = a(this._WIDGET_ELEM)[this._EXTENSION._WIDGET_NAME].bind(s);
            r(this._PROPS), this._WIDGET = r, this._WIDGET_INSTANCE = r("instance"), this._WRITEBACK_PROPS && this._WIDGET_INSTANCE.__saveWritebackOptions(this._WRITEBACK_PROPS);
            var l = function(e) {
                    return function(n) {
                        t.dispatchEvent(new FocusEvent(e, {
                            relatedTarget: n.relatedTarget
                        }))
                    }
                },
                u = this._WIDGET_INSTANCE.__getFocusElement();
            u && u !== t && (u.addEventListener("focus", l("focus")), u.addEventListener("blur", l("blur")))
        },
        DefineMethodCallback: function(t, e, n) {
            t[e] = function() {
                var t = p.CustomElementUtils.getElementBridge(this),
                    i = n.internalName || e;
                p.CustomElementUtils.allowSlotRelocation(!0);
                try {
                    return t._WIDGET.apply(null, [i].concat([].slice.call(arguments)))
                } finally {
                    p.CustomElementUtils.allowSlotRelocation(!1)
                }
            }
        },
        DefinePropertyCallback: function(t, e, n) {
            var i = n.extension;
            Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    var t = p.CustomElementUtils.getElementBridge(this);
                    return n._eventListener ? t.GetEventListenerProperty(e) : i && i._COPY_TO_INNER_ELEM ? t._getCopyProperty(this, e, n) : w._getPropertyAccessor(this, e)()
                },
                set: function(t) {
                    var i = p.CustomElementUtils.getElementBridge(this);
                    i.SaveEarlyPropertySet(this, e, t) || (t = p.transformPreactValue(this, n, t), n._eventListener ? i.SetEventListenerProperty(this, e, t) : i._validateAndSetCopyProperty(this, e, t, n) || (i._setOption(e, t, n, this), i.State.dirtyProps.add(e)))
                }
            })
        },
        GetAttributes: function(t) {
            var e = u.getFlattenedAttributes(t.properties);
            return t.extension._GLOBAL_TRANSFER_ATTRS && (e = e.concat(t.extension._GLOBAL_TRANSFER_ATTRS)), t.extension._WATCHED_ATTRS && (e = e.concat(t.extension._WATCHED_ATTRS)), e
        },
        GetAliasForProperty: function(t) {
            var e = this._EXTENSION._ALIASED_PROPS;
            return e && e[t] ? e[t] : t
        },
        InitializeElement: function(t) {
            r.BaseCustomElementBridge.proto.InitializeElement.call(this, t), this._EXTENSION._CONTROLS_SUBTREE_HIDDEN && N.markPendingSubtreeHidden(t), r.BaseCustomElementBridge.__InitProperties(t, this._PROPS)
        },
        HandleAttributeChanged: function(t, e, n, i) {
            var o = this._EXTENSION._GLOBAL_TRANSFER_ATTRS,
                s = o && -1 !== o.indexOf(e),
                r = this._EXTENSION._WATCHED_ATTRS,
                a = r && -1 !== r.indexOf(e);
            s && this._WIDGET_ELEM ? this._removingTransfer ? this._removingTransfer && (this._removingTransfer = !1) : (this._WIDGET_ELEM.setAttribute(e, i), this._removingTransfer = !0, t.removeAttribute(e)) : a && n !== i && this._WIDGET_INSTANCE && this._WIDGET_INSTANCE.__handleWatchedAttribute(e, n, i)
        },
        HandleDetached: function(t) {
            r.BaseCustomElementBridge.proto.HandleDetached.call(this, t), N.__GetWidgetConstructor(this._WIDGET_ELEM) && this._WIDGET_INSTANCE && this._WIDGET_INSTANCE.__handleDisconnected()
        },
        HandleReattached: function(t) {
            r.BaseCustomElementBridge.proto.HandleReattached.call(this, t), this._WIDGET_INSTANCE && this._WIDGET_INSTANCE.__handleConnected()
        },
        initializeBridge: function(t, e) {
            r.BaseCustomElementBridge.proto.initializeBridge.call(this, t, e), this._INNER_DOM_FUNCTION = e.innerDomFunction, this._EXTENSION = this.METADATA.extension || {}, this._PROPS = this._EXTENSION._INNER_ELEM || this._INNER_DOM_FUNCTION ? {
                _wrapper: t
            } : {}, this._setupPropertyAccumulator(t, this._PROPS), this._processProperties(t)
        },
        _setOption: function(t, e, n, i) {
            let o = {};
            if (void 0 === e && -1 === t.indexOf(".") && (o = {
                    _context: {
                        skipEvent: !0
                    }
                }, e = u.getDefaultValue(n), this.State.isComplete())) {
                const e = i[t];
                r.BaseCustomElementBridge.__FirePropertyChangeEvent(i, t, void 0, e, "external")
            }
            w._getPropertyAccessor(i, t, o)(e)
        },
        _copyProperties: function() {
            if (this._COPY_ATTRS)
                for (var t = 0; t < this._COPY_ATTRS.length; t++) {
                    var e = this._COPY_ATTRS[t],
                        n = p.AttributeUtils.attributeToPropertyName(e);
                    if (Object.prototype.hasOwnProperty.call(this._PROPS, n)) {
                        var i = this._PROPS[n];
                        this._setCopyProperty(e, i), delete this._PROPS[n]
                    }
                }
        },
        _getCopyProperty: function(t, e, n) {
            var i = p.AttributeUtils.propertyNameToAttribute(e);
            if (n.extension._ATTRIBUTE_ONLY) {
                if (this._WIDGET_ELEM.hasAttribute(i)) {
                    var o = this._WIDGET_ELEM.getAttribute(i);
                    return p.AttributeUtils.attributeToPropertyValue(t, i, o, n)
                }
                return null
            }
            return this._WIDGET_ELEM[e]
        },
        _processProperties: function(t) {
            var e = p.CustomElementUtils.getElementProperties(t);
            if (e)
                for (var n = Object.keys(e), i = 0; i < n.length; i++) {
                    var o = n[i],
                        s = e[o];
                    s.writeback && (this._WRITEBACK_PROPS || (this._WRITEBACK_PROPS = {}), this._WRITEBACK_PROPS[o] = !0);
                    var r = s.extension;
                    r && r._COPY_TO_INNER_ELEM && (this._COPY_ATTRS || (this._COPY_ATTRS = []), this._COPY_ATTRS.push(o))
                }
        },
        _setCopyProperty: function(t, e) {
            null == e || !1 === e ? this._WIDGET_ELEM.removeAttribute(t) : !0 === e ? this._WIDGET_ELEM.setAttribute(t, "") : this._WIDGET_ELEM.setAttribute(t, e)
        },
        _setupPropertyAccumulator: function(t, e) {
            this._WIDGET = function(n, i, o) {
                if ("option" === n) return r.BaseCustomElementBridge.__SetProperty(this.GetAliasForProperty.bind(this), e, i, o), e[i];
                throw new p.JetElementError(t, "Cannot access methods before element is upgraded.")
            }
        },
        _validateAndSetCopyProperty: function(t, e, n, i) {
            var o = p.AttributeUtils.propertyNameToAttribute(e),
                s = this._COPY_ATTRS && -1 !== this._COPY_ATTRS.indexOf(o);
            if (s)
                if (n = this.ValidatePropertySet(t, e, n), this._WIDGET_ELEM) {
                    i || (i = u.getPropertyMetadata(e, p.CustomElementUtils.getElementProperties(t)));
                    var a = this._getCopyProperty(t, e, i);
                    this._setCopyProperty(o, n), r.BaseCustomElementBridge.__FirePropertyChangeEvent(t, e, this._getCopyProperty(t, e, i), a, "external")
                } else this._PROPS[o] = n;
            return s
        },
        _setEventProperty: function(t, e, n) {
            var i = p.AttributeUtils.isEventListenerProperty(e);
            return i && (t[e] = n), i
        }
    }), w.getMetadata = function(t) {
        return w._METADATA_MAP[t.toLowerCase()]
    }, w.isKnownEvent = function(t, e) {
        var n = p.CustomElementUtils.getElementBridge(t);
        return null != (n.METADATA.events && n.METADATA.events[e])
    }, w.isKnownProperty = function(t, e) {
        var n = p.CustomElementUtils.getElementBridge(t);
        return null != (n.METADATA.properties && n.METADATA.properties[e])
    }, w.getPropertyForAlias = function(t, e) {
        var n = p.CustomElementUtils.getElementBridge(t)._EXTENSION._COMPONENT_TO_ELEMENT_ALIASES;
        return n && n[e] ? n[e] : e
    }, w.register = function(t, e) {
        var n = e[r.BaseCustomElementBridge.DESC_KEY_META];
        n = r.BaseCustomElementBridge.__ProcessEventListeners(n), e[r.BaseCustomElementBridge.DESC_KEY_META] = n, w._METADATA_MAP[t.toLowerCase()] = n;
        var i = n.extension,
            o = i && i._WIDGET_NAME ? w.proto : j.proto;
        const s = i && i._WIDGET_NAME ? B : p.ElementState;
        var a = i._ALIASED_PROPS;
        a && (i._COMPONENT_TO_ELEMENT_ALIASES = {}, Object.keys(a).forEach(function(t) {
            i._COMPONENT_TO_ELEMENT_ALIASES[a[t]] = t
        }));
        const l = {
            descriptor: e,
            bridgeProto: o,
            stateClass: s
        };
        p.CustomElementUtils.registerElement(t, l, o.getClass(e))
    }, w._getPropertyAccessor = function(t, e, n) {
        return function(i) {
            var o = p.CustomElementUtils.getElementBridge(t);
            return 1 === arguments.length ? (i = o.ValidatePropertySet(t, e, i), e = o.GetAliasForProperty(e), void o._WIDGET("option", e, i, n)) : (e = o.GetAliasForProperty(e), o._WIDGET("option", e))
        }.bind(t)
    }, w._getWidgetElement = function(t, e) {
        var n = t;
        if (e) {
            var i = t.firstElementChild;
            if (i && i.tagName.toLowerCase() === e) n = i;
            else {
                n = document.createElement(e);
                for (var o = [], s = t.childNodes, r = 0; r < s.length; r++) o.push(s[r]);
                for (t.appendChild(n); o.length;) {
                    var a = o.shift();
                    p.CustomElementUtils.getSlotAssignment(a) || n.appendChild(a)
                }
            }
            n.setAttribute("data-oj-internal", "")
        }
        return n
    }, w._METADATA_MAP = {};
    class x {
        static isDataProvider(t) {
            return !!t.fetchFirst
        }
        static isTreeDataProvider(t) {
            return !!t.getChildDataProvider
        }
    }
    c._registerLegacyNamespaceProp("DataProviderFeatureChecker", x);
    var U, Y, W = {
        isDefaultPrevented: function() {
            return !1
        },
        preventDefault: function() {
            this.isDefaultPrevented = X
        },
        stopPropagation: function() {
            this.isPropagationStopped = X
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = X
        }
    };

    function H(t, e, n, i, o, s, r) {
        var a = n,
            l = !1,
            u = {};
        delete i[o], Object.defineProperty(i, o, {
            get: function() {
                if (l) return a;
                if (null != t._settingNestedKey) return a;
                var n = s(r ? r() : o);
                return F([e, n, a], u)
            },
            set: function(e) {
                a = e, null != t._settingNestedKey ? u[t._settingNestedKey] = !0 : l = !0
            },
            enumerable: !0
        })
    }

    function k(t) {
        if (1 === t.length) {
            var e = t[0];
            return e instanceof R ? e.getCallback() : null
        }
        for (var n = !1, i = 0; i < t.length && !n; i++) {
            var o = t[i];
            null != o && o instanceof R && (n = !0)
        }
        return n ? function(e) {
            var n = [];
            return t.forEach(function(t) {
                null != t && t instanceof R ? n.push(t.getCallback()(e)) : n.push(t)
            }), F(n)
        } : null
    }

    function F(t, e) {
        for (var n, i = 0; i < t.length; i++) {
            var o = t[i];
            if (void 0 !== o)
                if (a.isPlainObject(o)) n = V({}, a.isPlainObject(n) ? [n, o] : [o], i === t.length - 1 ? null : e, null);
                else n = o
        }
        return n
    }

    function V(t, e, n, i) {
        for (var o = e.length, s = 0; s < o; s++)
            for (var r = e[s], l = Object.keys(r), u = 0; u < l.length; u++) {
                var c, _ = l[u];
                if (c = null == n ? null : null == i ? _ : i + "." + _, null == n || !n[c]) {
                    var h = r[_];
                    if (void 0 !== h)
                        if (a.isPlainObject(h)) {
                            var p = a.isPlainObject(t[_]) ? [t[_], h] : [h];
                            t[_] = V({}, p, n, c)
                        } else t[_] = h
                }
            }
        return t
    }

    function X() {
        return !0
    }

    function K(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    a.widget("oj.baseComponent", {
        options: {
            contextMenu: null,
            rootAttributes: null,
            optionChange: void 0,
            destroy: void 0
        },
        refresh: function() {
            this._propertyContext = null, this._SetupContextMenu()
        },
        _createWidget: function(t, e) {
            t && (this.OuterWrapper = t._wrapper), this._originalDefaults = this.options || {}, this._constructorOptions = t || {}, this._super(t, e), this._AfterCreateEvent()
        },
        _SetRootAttributes: function() {
            var t = this.options.rootAttributes;
            if (t) {
                var e = this.widget();
                if (null == e) return;
                var n = t.class;
                n && e.addClass(n), t.style && d.error("The rootAttributes.style option violates the recommended\n          Content Security Policy which disallows inline styles and is therefore ignored.\n          Use the rootAttributes.class option instead."), delete(t = a.extend({}, t)).class, delete t.style, e.attr(t), delete t.id;
                var i = Object.keys(t);
                if (i.length) throw new Error("Unsupported values passed to rootAttributes option: " + i.toString())
            }
        },
        _create: function() {
            this._SaveAttributes(this.element), this._InitOptions(this._originalDefaults, this._constructorOptions), delete this._originalDefaults, delete this._constructorOptions, this._ComponentCreate(), this._AfterCreate(), this._SetupResources(), this.element.addClass("oj-component-initnode")
        },
        _InitOptions: function(t, e) {
            this._setupDefaultOptions(t, e), this._initContextMenuOption(e)
        },
        _ComponentCreate: function() {
            var t, e, n;
            t = this.element, e = this.widgetName, (n = t.data("oj-component-names")) || (n = [], t.data("oj-component-names", n)), n.indexOf(e) < 0 && n.push(e), this.activeableEventNamespace = this.eventNamespace + "activeable", this.hoverableEventNamespace = this.eventNamespace + "hoverable"
        },
        _AfterCreate: function() {
            this._SetRootAttributes(), this.contextMenuEventNamespace = this.eventNamespace + "contextMenu", this.activeableEventNamespace = this.eventNamespace + "activeable", this.hoverableEventNamespace = this.eventNamespace + "hoverable"
        },
        _AfterCreateEvent: a.noop,
        _setOptionClasses: function() {},
        _setOptionDisabled: function() {},
        _classes: function() {
            return ""
        },
        _removeClass: function() {
            return this
        },
        _addClass: function() {
            return this
        },
        _toggleClass: function() {
            return this
        },
        _SaveAttributes: function(t) {},
        _SaveAllAttributes: function(t) {
            var e = this;
            this._savedAttributes = [], a.each(t, function(t, n) {
                var i = {},
                    o = {
                        element: n,
                        attributes: i
                    },
                    s = n.attributes;
                e._savedAttributes.push(o), a.each(s, function(t, e) {
                    var n = e.name;
                    i[n] = {
                        attr: e.value
                    }
                })
            })
        },
        _GetSavedAttributes: function(t) {
            var e = this._savedAttributes;
            if (void 0 === e) return null;
            for (var n = t[0], i = 0, o = e.length; i < o; i++) {
                var s = e[i];
                if (s.element === n) return s.attributes
            }
            return {}
        },
        _RestoreAttributes: function() {},
        _RestoreAllAttributes: function() {
            a.each(this._savedAttributes, function(t, e) {
                var n = a(e.element),
                    i = e.attributes;
                if (1 === n.length) {
                    var o, s, r = e.element.attributes,
                        l = [];
                    for (o = 0, s = r.length; o < s; o++) r[o].name in i || l.push(r[o].name);
                    for (o = 0, s = l.length; o < s; o++) "style" === l[o] ? n[0].style = null : n.removeAttr(l[o]);
                    var u = Object.keys(i);
                    for (o = 0; o < u.length; o++) {
                        var c = u[o];
                        "style" === c && "" === i[c].attr ? n[0].style = null : n.attr(c, i[c].attr)
                    }
                }
            })
        },
        _GetTranslationsSectionName: function() {
            return this.widgetFullName
        },
        _CompareOptionValues: function(t, e, n) {
            return this._IsCustomElement() && this._getWritebackOption(t) ? r.Object.compareValues(e, n) : e === n
        },
        getTranslatedString: function(t, e) {
            var n = {};
            arguments.length > 2 ? n = Array.prototype.slice.call(arguments, 1) : 2 === arguments.length && ("object" == typeof(n = arguments[1]) || n instanceof Array || (n = [n]));
            var i = this.option("translations." + t);
            return null == i ? t : f.applyParameters(i.toString(), n)
        },
        getNodeBySubId: function(t) {
            return null != t && null != t.subId || !this.element ? null : this.element[0]
        },
        getSubIdByNode: function(t) {
            return null
        },
        destroy: function() {
            if (this._IsCustomElement()) throw new Error("destroy cannot be called on a custom element");
            this._trigger("destroy"), _.dispatchEvent(this.element[0], new CustomEvent("_ojDestroy")), this._ReleaseResources(), this._super(), this.element.removeClass("oj-component-initnode"), this.widget().removeClass("oj-disabled"), this._removeStateClasses(this.element),
                function(t, e) {
                    var n = t.data("oj-component-names");
                    if (n) {
                        var i = n.indexOf(e);
                        i >= 0 && (n.splice(i, 1), 0 === n.length && t.removeData("oj-component-names"))
                    }
                }(this.element, this.widgetName), this._RestoreAttributes(), this._initialCmDomAttr ? this.element.attr("contextmenu", this._initialCmDomAttr) : this.element.removeAttr("contextmenu"), this._propertyContext = null
        },
        option: function(t, e) {
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            var n, i = arguments[0],
                o = i,
                s = null,
                r = {};
            if ("string" == typeof i) {
                o = {};
                var l = i.split(".");
                if (i = l.shift(), l.length) {
                    var u;
                    s = l.join(".");
                    try {
                        arguments.length > 1 && (this._settingNestedKey = s), u = a.widget.extend({}, this.options[i]), o[i] = u
                    } finally {
                        this._settingNestedKey = null
                    }
                    for (n = 0; n < l.length - 1; n++) u[l[n]] = u[l[n]] || {}, u = u[l[n]];
                    if (i = l.pop(), 1 === arguments.length) return void 0 === u[i] ? null : u[i];
                    u[i] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[i] ? null : this.options[i];
                    o[i] = e
                }
                r = arguments[2] || r
            } else r = arguments[1] || r;
            if (null != s) {
                var c = {
                    path: t,
                    value: e
                };
                r = a.widget.extend({}, r, {
                    subkey: s,
                    subproperty: c
                })
            }
            var _ = r ? r._context : null,
                h = !!_ && _.internalSet,
                E = {},
                f = Object.keys(o);
            for (n = 0; n < f.length; n++) {
                var g = f[n],
                    m = o[g],
                    v = this.options[g],
                    y = r && r.changed;
                y || !this._CompareOptionValues(g, v, m) ? E[g] = m : this._IsCustomElement() && d.info(p.CustomElementUtils.getElementInfo(this.element[0]) + ": Ignoring property set for property '" + g + "' with same value.")
            }
            if (Object.keys(E).length > 0) {
                p.CustomElementUtils.allowSlotRelocation(!0);
                try {
                    h ? this._internalSetOptions(E, r) : this._setOptions(E, r)
                } finally {
                    p.CustomElementUtils.allowSlotRelocation(!1)
                }
            }
            return this
        },
        _internalSetOptions: function(t, e) {
            for (var n = Object.keys(t), i = 0; i < n.length; i++) {
                var o = n[i],
                    s = t[o],
                    r = this.options[o];
                this.options[o] = s, this._optionChanged(o, s, r, e)
            }
        },
        _setOptions: function(t, e) {
            p.CustomElementUtils.allowSlotRelocation(!0);
            try {
                for (var n = Object.keys(t), i = 0; i < n.length; i++) {
                    var o = n[i],
                        s = t[o];
                    this._setOption(o, s, e)
                }
            } finally {
                p.CustomElementUtils.allowSlotRelocation(!1)
            }
            return this
        },
        _setOption: function(t, e, n) {
            var i = this.options[t];
            if ("disabled" === t) this.options[t] = e, this.widget().toggleClass("oj-disabled", !!e).attr("aria-disabled", e), e && this._removeStateClasses(this.widget());
            else {
                try {
                    var o = null == n ? null : n.subkey;
                    null != o && (this._settingNestedKey = o), this._super(t, e)
                } finally {
                    this._settingNestedKey = null
                }
                "contextMenu" === t && this._SetupContextMenu()
            }
            return this._optionChanged(t, e, i, n), this
        },
        _optionChanged: function(t, e, n, i) {
            var o, s = null,
                r = !1,
                l = !1,
                u = null,
                c = "external",
                _ = null;
            if (i && (s = i._context)) {
                if (s.skipEvent) return;
                u = s.originalEvent, r = void 0 === s.writeback ? null != u : s.writeback, l = s.readOnly, _ = s.optionMetadata, o = s.extraData, s.internalSet && (c = "internal")
            }(_ = _ || {}).writeback = r ? "shouldWrite" : "shouldNotWrite", l && (_.readOnly = !0);
            var h = {
                    option: t,
                    previousValue: n,
                    value: e,
                    optionMetadata: _,
                    updatedFrom: c
                },
                p = null == i ? null : i.subkey;
            if (p) {
                var d = p.split("."),
                    E = n;
                d.forEach(function(t) {
                    E && (E = E[t])
                });
                var f = i.subproperty;
                f.previousValue = E, h.subproperty = f
            }
            null != o && (h = a.extend({}, o, h)), this._trigger("optionChange", u, h)
        },
        _SetupResources: function() {
            this._SetupContextMenu()
        },
        _ReleaseResources: function() {
            this._ReleaseContextMenu()
        },
        _trigger: function(t, e, n) {
            return this._trigger2(t, e, n).proceed
        },
        _trigger2: function(t, e, n) {
            var i = n || {};
            if (this._IsCustomElement()) return this._triggerCustomEvent(t, e, i);
            var o = this.options[t],
                s = a.Event(e, W);
            return s.type = (this.widgetEventPrefix + t).toLowerCase(), s.target = this.element[0], this.element.trigger(s, i), {
                proceed: !(a.isFunction(o) && !1 === o.apply(this.element[0], [s].concat(i)) || s.isDefaultPrevented()),
                event: s
            }
        },
        _triggerCustomEvent: function(t, e, n) {
            var i, o, s, r = {},
                l = this._getRootElement();
            if ("optionChange" === t) {
                var u = w.getPropertyForAlias(l, n.option);
                if (!w.isKnownProperty(l, u)) return {
                    proceed: !0,
                    event: null
                };
                i = p.AttributeUtils.propertyNameToChangeEventType(u);
                for (var c = Object.keys(n), _ = 0; _ < c.length; _++) {
                    var h = c[_];
                    if ("option" !== h)
                        if ("optionMetadata" === h)
                            for (var d = Object.keys(n[h]), E = 0; E < d.length; E++) {
                                var f = d[E];
                                "writeback" !== f && "component" !== f && (r[f] = n[h][f])
                            } else r[h] = n[h]
                }
            } else {
                if (i = p.AttributeUtils.eventTriggerToEventType(t), !w.isKnownEvent(l, i)) return {
                    proceed: !0,
                    event: null
                };
                o = !0, s = !0, r = this._resolveJQueryObjects(n)
            }
            e && (r.originalEvent = e instanceof a.Event ? e.originalEvent : e);
            var g = {
                detail: r
            };
            o && (g.bubbles = !0), s && (g.cancelable = !0);
            var m = new CustomEvent(i, g);
            return l.dispatchEvent(m), {
                proceed: !m.defaultPrevented,
                event: m
            }
        },
        _resolveJQueryObjects: function(t) {
            for (var e = r.CollectionUtils.copyInto({}, t), n = Object.keys(e), i = 0; i < n.length; i++) {
                var o = n[i],
                    s = e[o];
                s && s instanceof a && (0 === s.length ? e[o] = null : 1 === s.length ? e[o] = s[0] : e = s.toArray())
            }
            return e
        },
        _initContextMenuOption: function(t) {
            var e = this.element.attr("contextmenu");
            this._initialCmDomAttr = e, e && !("contextMenu" in t) && this.option("contextMenu", document.getElementById(e), {
                _context: {
                    internalSet: !0
                }
            })
        },
        _handleContextMenuGesture: function(t, e, n) {
            if (!this._IsEffectivelyDisabled()) {
                var i;
                if ("OJ-MENU" === t.tagName) i = t;
                else {
                    var o = N.__GetWidgetConstructor(t, "ojMenu");
                    if (!(i = o && o("instance"))) throw new Error("Invalid JET Menu.")
                }
                this._NotifyContextMenuGesture(i, e, n), a(t).is(":visible") && e.preventDefault()
            }
        },
        _SetupContextMenu: function() {
            var t = this._GetContextMenu();
            if (t || (t = this._GetDefaultContextMenu()), t && void 0 === this._contextMenuGestureInit) {
                this._contextMenuGestureInit = t;
                var e = this;
                m.startDetectContextMenuGesture(this.widget()[0], function(n, i) {
                    e._handleContextMenuGesture(t, n, i)
                })
            }
        },
        _ReleaseContextMenu: function() {
            this._contextMenuGestureInit = void 0, m.stopDetectContextMenuGesture(this.widget()[0])
        },
        _GetContextMenu: function() {
            if (this._IsCustomElement()) {
                var t = p.CustomElementUtils.getSlotMap(this._getRootElement()).contextMenu;
                if (t && t.length > 0) return t[0]
            } else if (this.options.contextMenu) return a(this.options.contextMenu).first()[0];
            return null
        },
        _NotifyContextMenuGesture: function(t, e, n) {
            this._OpenContextMenu(e, n)
        },
        _OpenContextMenu: function(t, e, n, i, o) {
            var s = this._GetContextMenu();
            if (s || (s = this._contextMenuGestureInit && a(this._contextMenuGestureInit).is(":visible") ? this._contextMenuGestureInit : this._GetDefaultContextMenu()), s) {
                var r = {
                        mouse: {
                            my: "start top",
                            at: "start bottom",
                            of: t,
                            collision: "flipfit"
                        },
                        touch: {
                            my: "start>40 center",
                            at: "start bottom",
                            of: t,
                            collision: "flipfit"
                        },
                        keyboard: {
                            my: "start top",
                            at: "start bottom",
                            of: "launcher",
                            collision: "flipfit"
                        }
                    },
                    l = {
                        launcher: this.element,
                        position: r[e]
                    },
                    u = {
                        initialFocus: "menu"
                    },
                    c = o ? a.extend(l, n, u) : a.extend(!0, l, n, u);
                if (s.__openingContextMenu = !0, "OJ-MENU" === s.tagName) s.open(t, c, i);
                else {
                    var _ = N.__GetWidgetConstructor(s, "ojMenu");
                    (_ && _("instance")).open(t, c, i);
                    var h = function(t) {
                        t.preventDefault()
                    };
                    s.addEventListener("contextmenu", h), window.setTimeout(function() {
                        s.removeEventListener("contextmenu", h)
                    }, 50)
                }
                s.__openingContextMenu = !1
            }
        },
        _GetDefaultContextMenu: function() {
            return null
        },
        _removeStateClasses: function(t) {
            t.removeClass("oj-hover oj-focus oj-focus-highlight oj-active"), t.find(".oj-hover").removeClass("oj-hover"), t.find(".oj-focus").removeClass("oj-focus"), t.find(".oj-focus-highlight").removeClass("oj-focus-highlight"), t.find(".oj-active").removeClass("oj-active")
        },
        _isRealMouseEvent: function() {
            return !_.recentTouchEnd()
        },
        _AddHoverable: function(t) {
            var e;
            a.isPlainObject(t) ? e = t.element : (e = t, t = {});
            var n = t.afterToggle || a.noop;
            e.on("mouseenter" + this.hoverableEventNamespace, this._hoverStartHandler.bind(this, n)).on("mouseleave" + this.hoverableEventNamespace, this._hoverAndActiveEndHandler.bind(this, "oj-hover", n))
        },
        _RemoveHoverable: function(t) {
            t && t.off(this.hoverableEventNamespace)
        },
        _AddActiveable: function(t) {
            var e;
            a.isPlainObject(t) ? e = t.element : (e = t, t = {});
            var n = t.afterToggle || a.noop;
            _.isTouchSupported() && (e[0] && (this._touchstartListener = this._activeStartHandler.bind(this, n), e[0].addEventListener("touchstart", this._touchstartListener, {
                passive: !0
            })), e.on("touchend" + this.activeableEventNamespace + " touchcancel" + this.activeableEventNamespace, this._hoverAndActiveEndHandler.bind(this, "oj-active", n))), e.on("mousedown" + this.activeableEventNamespace, this._activeStartHandler.bind(this, n)).on("mouseup" + this.activeableEventNamespace, this._hoverAndActiveEndHandler.bind(this, "oj-active", n)).on("mouseenter" + this.activeableEventNamespace, this._activeStartHandler.bind(this, n)).on("mouseleave" + this.activeableEventNamespace, this._hoverAndActiveEndHandler.bind(this, "oj-active", n))
        },
        _RemoveActiveable: function(t) {
            t && (t[0] && (t[0].removeEventListener("touchstart", this._touchstartListener, {
                passive: !0
            }), delete this._touchstartListener), t.off(this.activeableEventNamespace), U = null)
        },
        _activeStartHandler: function(t, e) {
            var n = a(e.currentTarget);
            ("mouseenter" !== e.type || this._isTargetInActiveElement(e.currentTarget)) && (n.hasClass("oj-disabled") || "touchstart" !== e.type && !this._isRealMouseEvent(e) || (n.addClass("oj-active"), t(e.type), "mousedown" === e.type && (U = e.currentTarget, this.document.one("mouseup", function() {
                U = null
            }))))
        },
        _hoverStartHandler: function(t, e) {
            var n = a(e.currentTarget);
            !n.hasClass("oj-disabled") && this._isRealMouseEvent(e) && (n.addClass("oj-hover"), t(e.type))
        },
        _hoverAndActiveEndHandler: function(t, e, n) {
            ("oj-active" !== t || "mouseleave" !== n.type || this._isTargetInActiveElement(n.currentTarget)) && (a(n.currentTarget).removeClass(t), e(n.type))
        },
        _isTargetInActiveElement: function(t) {
            return U === t || null != U && a.contains(U, t)
        },
        _hoverable: function() {},
        _focusable: function(t) {
            a.isPlainObject(t) || (t = {
                element: t
            }), t.component = this, _.makeFocusable(t)
        },
        _UnregisterChildNode: function(t) {
            if (t) {
                a(t).off(this.eventNamespace);
                var e = this.bindings;
                e && (this.bindings = a(e.not(t)))
            }
        },
        _GetReadingDirection: function() {
            return _.getReadingDirection()
        },
        _NotifyAttached: function() {
            this._propertyContext = null
        },
        _NotifyDetached: function() {
            this._propertyContext = null, this._removeStateClasses(this.widget())
        },
        _NotifyInitShown: function() {},
        _NotifyShown: function() {},
        _NotifyHidden: function() {},
        _IsEffectivelyDisabled: function() {
            return !(!this.options.disabled && !this._ancestorDisabled)
        },
        __setAncestorComponentDisabled: function(t) {
            this._ancestorDisabled = t
        },
        _getTranslationSectionLoader: function() {
            var t = [],
                e = this,
                n = 0;
            this._traverseWidgetHierarchy(function(i) {
                var o = 0 === n ? e._GetTranslationsSectionName() : i.widgetFullName;
                n += 1;
                var s = f.getComponentTranslations(o);
                null == s || a.isEmptyObject(s) || t.push(o)
            });
            var i = t.length;
            return i > 0 ? function() {
                if (1 === i) return f.getComponentTranslations(t[0]);
                for (var e = {}, n = i - 1; n >= 0; n--) a.widget.extend(e, f.getComponentTranslations(t[n]));
                return e
            } : null
        },
        _getDynamicPropertyContext: function() {
            if (!this._propertyContext) {
                var t = {};
                this._propertyContext = t;
                var e = this.element[0];
                t.containers = function(t) {
                    for (var e = t, n = []; e;) {
                        var i = e.getAttribute,
                            o = i ? i.call(e, N._OJ_CONTAINER_ATTR) : null;
                        null != o && n.push(o), e = e.parentNode
                    }
                    return n
                }(e), t.element = e, t.isCustomElement = this._IsCustomElement(), t.isCustomElement && (t.customElement = this._getRootElement())
            }
            return this._propertyContext
        },
        _setupDefaultOptions: function(t, e) {
            var n = this.options,
                i = this._getTranslationSectionLoader(),
                o = e.translations;
            null == i || void 0 !== o && !a.isPlainObject(o) || H(this, void 0, e.translations, n, "translations", i), this._loadGlobalDefaultOptions(t, e)
        },
        _loadGlobalDefaultOptions: function(t, e) {
            var n = this.options,
                i = [];
            this._traverseWidgetHierarchy(function(t) {
                i.push(t.widgetName)
            }), i.push("default");
            var o = N.__getDefaultOptions(i);
            if (!a.isEmptyObject(o))
                for (var s = this, r = function() {
                        return s._getDynamicPropertyContext()
                    }, l = Object.keys(o), u = 0; u < l.length; u++) {
                    var c = l[u],
                        _ = e[c];
                    if (void 0 === _ || a.isPlainObject(_)) {
                        var h = o[c];
                        if (h) {
                            var p = k(h);
                            if (p) H(this, t[c], _, n, c, p, r);
                            else {
                                var d = [t[c]].concat(h);
                                d.push(_), n[c] = F(d)
                            }
                        }
                    }
                }
        },
        _traverseWidgetHierarchy: function(t) {
            for (var e = this.constructor.prototype; null != e && "oj" === e.namespace;) t(e), e = Object.getPrototypeOf(e)
        },
        _getRootElement: function() {
            return this.OuterWrapper || this.element[0]
        },
        _IsCustomElement: function() {
            return p.CustomElementUtils.isElementRegistered(this._getRootElement().tagName)
        },
        _GetThrottlePromise: function() {
            if (this._IsCustomElement()) {
                var t = this._getRootElement();
                return p.CustomElementUtils.getElementBridge(t).getThrottlePromise()
            }
            return Promise.resolve(null)
        },
        _FixRendererContext: function(t) {
            if (this._IsCustomElement()) {
                var e = r.CollectionUtils.copyInto({}, t);
                return delete e.component, e.componentElement = this._getRootElement(), e
            }
            return t
        },
        _WrapCustomElementRenderer: function(t) {
            return this._IsCustomElement() && "function" == typeof t ? function(e) {
                var n = t(e);
                return n && n.insert ? n.insert : null
            } : t
        },
        __saveWritebackOptions: function(t) {
            this._writebackOptions = t
        },
        _getWritebackOption: function(t) {
            return !(!this._writebackOptions || !this._writebackOptions[t])
        },
        __handleSubtreeAttached: function() {
            this._IsCustomElement() || this._NotifyAttached()
        },
        __handleSubtreeDetached: function() {
            this._IsCustomElement() || this._NotifyDetached()
        },
        _VerifyConnectedForSetup: function() {
            return !1
        },
        __handleConnected: function() {
            this._NotifyAttached(), this.__delayConnectDisconnect(0) || this._SetupResources()
        },
        __handleDisconnected: function() {
            this.__delayConnectDisconnect(1) || this._ReleaseResources(), this._NotifyDetached()
        },
        __delayConnectDisconnect: function(t) {
            return !!this._VerifyConnectedForSetup() && (void 0 === this.connectedState && window.queueMicrotask(function() {
                this.connectedState === t && (0 === t ? this._SetupResources() : this._ReleaseResources()), this.connectedState = void 0
            }.bind(this)), this.connectedState = t, !0)
        },
        __handleWatchedAttribute: function(t, e, n) {
            this._WatchedAttributeChanged(t, e, n)
        },
        _WatchedAttributeChanged: function(t, e, n) {},
        __getFocusElement: function() {
            return this.GetFocusElement()
        },
        GetFocusElement: function() {
            return this.element[0]
        }
    }), delete a.fn.baseComponent, r.__registerWidget = function(t, e, n, i) {
        if (a.widget(t, e, n), i) {
            var o = t.split(".")[1];
            delete a.fn[o]
        }
        if ("oj.oj" === t.substring(0, 5) || "oj._oj" === t.substring(0, 6)) {
            var s, r = t.split("."),
                l = r[0],
                u = r[1],
                c = l + "-" + u;
            s = "_" === u.substring(0, 1) ? "_" + l + "-" + u.substring(3) : l + "-" + u.substring(2), a.expr.pseudos[s.toLowerCase()] = function(t) {
                return !!a.data(t, c)
            }
        }
    }, a.cleanData = (Y = a.cleanData, function(t) {
        for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n];
            if (null == i) break;
            var o = !1,
                s = N.__GetWidgetConstructor(i);
            if (s && !(o = s("instance")._IsCustomElement())) {
                var r = N.getComponentElementByNode(i);
                o = r && p.CustomElementUtils.isElementRegistered(r.tagName)
            }
            o || e.push(i)
        }
        e.length > 0 && Y(e)
    }), a.fn.addClass = function(t) {
        if ("function" == typeof t) return this.each(function(e) {
            a(this).addClass(t.call(this, e, K(this)))
        });
        const e = Array.isArray(t) ? t : p.CustomElementUtils.getClassSet(t);
        return this.each(function() {
            1 === this.nodeType && this.classList.add(...e)
        }), this
    }, a.fn.removeClass = function(t) {
        if ("function" == typeof t) return this.each(function(e) {
            a(this).removeClass(t.call(this, e, K(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        const e = Array.isArray(t) ? t : p.CustomElementUtils.getClassSet(t);
        return this.each(function() {
            1 === this.nodeType && this.classList.remove(...e)
        }), this
    };
    const z = {};
    r._registerLegacyNamespaceProp("Test", z), z.ready = !1, z.domNodeForLocator = function(t) {
        var e = t;
        if (r.StringUtils.isString(t)) {
            var n = t;
            try {
                e = JSON.parse(n)
            } catch (t) {
                return null
            }
        }
        if (e && e.element) {
            var i = a(e.element);
            if (i && i.length > 0) {
                delete e.element;
                var o = e;
                return N.getNodeBySubId(i[0], o)
            }
        }
        return null
    }, z.getOpenPopupCount = function() {
        return r.ZOrderUtils.getOpenPopupCount()
    }, z.findOpenPopups = function() {
        return r.ZOrderUtils.findOpenPopups()
    }, z.compareStackingContexts = function(t, e) {
        return r.ZOrderUtils.compareStackingContexts(t, e)
    };
    const q = N.subtreeAttached,
        J = N.subtreeDetached,
        Z = N.subtreeHidden,
        Q = N.subtreeShown,
        $ = N.createDynamicPropertyGetter,
        tt = N.setDefaultOptions,
        et = N.getDefaultOptions,
        nt = N.__GetWidgetConstructor,
        it = N.setComponentOption,
        ot = N.getComponentOption,
        st = N.getWidgetConstructor,
        rt = N.isComponentInitialized,
        at = N.markPendingSubtreeHidden,
        lt = N.unmarkPendingSubtreeHidden,
        ut = N.__getDefaultOptions,
        ct = N.getComponentElementByNode,
        _t = N.getSubIdByNode,
        ht = N.getNodeBySubId,
        pt = N.callComponentMethod,
        dt = N._OJ_CONTAINER_ATTR;
    t.DataProviderFeatureChecker = x, t._OJ_CONTAINER_ATTR = dt, t.__GetWidgetConstructor = nt, t.__getDefaultOptions = ut, t.callComponentMethod = pt, t.createDynamicPropertyGetter = $, t.getComponentElementByNode = ct, t.getComponentOption = ot, t.getDefaultOptions = et, t.getNodeBySubId = ht, t.getSubIdByNode = _t, t.getWidgetConstructor = st, t.isComponentInitialized = rt, t.markPendingSubtreeHidden = at, t.setComponentOption = it, t.setDefaultOptions = tt, t.subtreeAttached = q, t.subtreeDetached = J, t.subtreeHidden = Z, t.subtreeShown = Q, t.unmarkPendingSubtreeHidden = lt, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojcomponentcore.js.map