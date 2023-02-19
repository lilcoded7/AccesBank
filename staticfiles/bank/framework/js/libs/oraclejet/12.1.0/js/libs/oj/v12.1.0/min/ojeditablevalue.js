/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojcomponentcore", "jquery", "ojs/ojlabel", "ojs/ojthemeutils", "ojs/ojfocusutils", "ojs/ojcontext", "ojs/ojlogger", "ojs/ojvalidator-required", "ojs/ojlabelledbyutils", "ojs/ojtranslation", "ojs/ojmessaging", "ojs/ojconverterutils", "ojs/ojvalidation-error", "ojs/ojpopup", "hammerjs", "ojs/ojjquery-hammer", "ojs/ojdomutils", "ojs/ojanimation"], function(e, t, i, n, s, o, a, r, l, d, h, u, c, _, p, g, m, f, v, C) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r, d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d, h = h && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h, c = c && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c, _ = _ && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
    const y = function(e) {
        this.Init(e)
    };
    t.Object.createSubclass(y, t.MessagingStrategy, "BaseInsideLabelStrategy"), y.prototype._GetFormControlLabelStyleClass = function() {
        return "oj-form-control-label-inside"
    }, y.prototype._CreateLabel = function() {
        var e = this.GetComponent(),
            t = this._GetContainer(e);
        if (!t) return;
        var i = e.options,
            n = e._getRootElement(),
            s = this._GetFormControlLabelStyleClass();
        n.classList.add(s), this.GenerateIdIfNeeded(n), this._showUserAssistanceNotInline = e._showUserAssistanceNotInline();
        let o = i.required && this._showUserAssistanceNotInline;
        this._createOjLabelElement(n, e, t, i.labelHint, o, i.helpHints, this._showUserAssistanceNotInline)
    }, y.prototype._createOjLabelElement = function(e, t, i, n, s, o, a) {
        var r = document.createElement("oj-label");
        r.id = y._getLabelId(e), r.setAttribute("data-oj-binding-provider", "none"), r.setAttribute("data-oj-internal", ""), r.setAttribute("for", e.id);
        var l = [t._GetDefaultStyleClass(), "label"].join("-");
        r.classList.add(l), s && r.setAttribute("show-required", s), a && o && (r.help = o);
        var d = document.createElement("span");
        d.id = [e.id, "|hint"].join(""), d.textContent = n, r.appendChild(d), this._InsertOjLabel(r, i, t), this._CreateEventHandlers(d, e, r, t)
    }, y.prototype._GetContainer = function(e) {
        return e._GetFormControlContainer()
    }, y.prototype._CreateEventHandlers = function(e, t, i, n) {
        this._labelHintChangedCallback = y._labelHintChangedHandler.bind(this, e), t.addEventListener("labelHintChanged", this._labelHintChangedCallback), this._requiredChangedCallback = y._requiredChangedHandler.bind(this, i, n), t.addEventListener("requiredChanged", this._requiredChangedCallback), this._helpHintsChangedCallback = y._helpHintsChangedHandler.bind(this, i, n), t.addEventListener("helpHintsChanged", this._helpHintsChangedCallback)
    }, y.prototype._DestroyLabel = function() {
        var e = this.GetComponent(),
            t = e.options,
            i = e._getRootElement(),
            n = this._GetFormControlLabelStyleClass();
        i.classList.remove(n);
        var s = y._getLabelId(i);
        const o = i.querySelector(`[id='${s}']`);
        o && (o.for = "", o.parentElement.removeChild(o)), t.labelledBy = void 0, this._DeleteEventHandlers(i)
    }, y.prototype._DeleteEventHandlers = function(e) {
        e.removeEventListener("labelHintChanged", this._labelHintChangedCallback), e.removeEventListener("requiredChanged", this._requiredChangedCallback), e.removeEventListener("helpHintsChanged", this._helpHintsChangedCallback), delete this._helpHintsChangedCallback, delete this._labelHintChangedCallback, delete this._requiredChangedCallback
    }, y._getLabelId = function(e) {
        return [e.id, "-labelled-by"].join("")
    }, y._labelHintChangedHandler = function(e, t) {
        e.textContent = t.detail.value
    }, y._requiredChangedHandler = function(e, t, i) {
        null == this._showUserAssistanceNotInline && (this._showUserAssistanceNotInline = t._showUserAssistanceNotInline()), e.showRequired = i.detail.value && this._showUserAssistanceNotInline
    }, y._helpHintsChangedHandler = function(e, t, i) {
        this._showUserAssistanceNotInline = t._showUserAssistanceNotInline(), this._showUserAssistanceNotInline && (e.help = i.detail.value)
    };
    const E = {
        validationContext: {
            COMPONENT_CREATE: 1,
            CONVERTER_OPTION_CHANGE: 2,
            DISABLED_OPTION_CHANGE: 3,
            READONLY_OPTION_CHANGE: 4,
            REFRESH_METHOD: 5,
            REQUIRED_OPTION_CHANGE: 6,
            RESET_METHOD: 7,
            USER_ACTION: 8,
            VALIDATE_METHOD: 9,
            VALIDATORS_OPTION_CHANGE: 10,
            VALUE_OPTION_CHANGE: 11
        }
    };
    E.validateMethodOptions = {
        doValueChangeCheck: !1,
        validationContext: E.validationContext.VALIDATE_METHOD
    }, E.converterOptionOptions = {
        doValueChangeCheck: !1,
        doNotClearMessages: !0,
        validationContext: E.validationContext.CONVERTER_OPTION_CHANGE
    }, E.disabledOptionOptions = {
        doValueChangeCheck: !1,
        doNotClearMessages: !0,
        validationContext: E.validationContext.DISABLED_OPTION_CHANGE
    }, E.requiredOptionOptions = {
        doValueChangeCheck: !1,
        doNotClearMessages: !0,
        validationContext: E.validationContext.REQUIRED_OPTION_CHANGE
    }, E.readOnlyOptionOptions = {
        doValueChangeCheck: !1,
        doNotClearMessages: !0,
        validationContext: E.validationContext.READONLY_OPTION_CHANGE
    }, E.refreshMethodOptions = {
        doValueChangeCheck: !1,
        doNotClearMessages: !0,
        validationContext: E.validationContext.REFRESH_METHOD
    }, E.validatorsOptionOptions = {
        doValueChangeCheck: !1,
        doNotClearMessages: !0,
        validationContext: E.validationContext.VALIDATORS_OPTION_CHANGE
    };
    E.VALIDATE_VALUES = {
        VALID: "valid",
        INVALID: "invalid"
    }, E.getAttributeValue = function(e, t) {
        var i, n = {};
        if (e && t) {
            var s = e[0];
            switch (t) {
                case "disabled":
                    i = s.hasAttribute("disabled") ? !!s.disabled : void 0;
                    break;
                case "pattern":
                    i = s.pattern || void 0;
                    break;
                case "placeholder":
                    i = s.placeholder || void 0;
                    break;
                case "readonly":
                    i = s.hasAttribute("readonly") ? !!s.readOnly : void 0;
                    break;
                case "required":
                    if (s.hasAttribute("required")) {
                        var o = s.required;
                        i = void 0 === o || !!o
                    } else i = void 0;
                    break;
                case "title":
                    i = s.hasAttribute("title") ? s.title : void 0;
                    break;
                case "value":
                    i = e.val() || void 0;
                    break;
                case "min":
                case "max":
                default:
                    i = s.getAttribute(t) || void 0
            }
        }
        return void 0 !== i ? (n.fromDom = !0, n.value = i) : n.fromDom = !1, n
    }, E.initializeOptionsFromDom = function(e, t, i, n) {
        for (var s = {}, o = 0; o < e.length; o++) {
            var a, r, l = e[o],
                d = l.attribute,
                h = l.option || d,
                u = l.coerceDomValue,
                c = l.validateOption,
                _ = i.element,
                p = i.options[h];
            void 0 === t[h] && (p = i.options[h], (r = E.getAttributeValue(_, d)).fromDom && (a = r.value, u && ("boolean" == typeof u ? a = E.coerceDomValueForOption(h, a) : "function" == typeof u && (a = u.call(i, a))), s[h] = a));
            var g = h in s ? s[h] : p;
            c && "boolean" == typeof c && E.validateValueForOption(h, g)
        }
        null != n && n(s), i.option(s, {
            _context: {
                writeback: !0,
                internalSet: !0
            }
        })
    }, E.validateValueForOption = function(e, t) {
        var i = !1;
        switch (e) {
            case "required":
                null !== t && "boolean" != typeof t && (i = !0);
                break;
            case "readOnly":
            case "disabled":
                null !== t && "boolean" != typeof t && (i = !0)
        }
        if (i) throw new Error("Option '" + e + "' has invalid value set: " + t)
    }, E.coerceDomValueForOption = function(e, t) {
        var i = t;
        switch (e) {
            case "required":
                i = !!t
        }
        return i
    }, E.setPickerAttributes = function(e, t) {
        if (e && t) {
            var i = t.class;
            if (i)
                for (var n = i.split(" "), s = 0, o = n.length; s < o; ++s) e[0].classList.add(n[s]);
            t.style && l.error("picker-attributes.style attribute violates the recommended\n        Content Security Policy which disallows inline styles and is therefore ignored.\n        Use the picker-attributes.class attribute instead.")
        }
    }, E.hasNoLabelFlag = function(e) {
        return e[0].hasAttribute("data-oj-no-labelledby")
    }, E._getOjLabelAriaLabelledBy = function(e, t) {
        var i, n = E._getCustomOjLabelElements(e);
        if (n) {
            i = "";
            for (var s = 0; s < n.length; s++) {
                var o = n[s],
                    a = o.getAttribute("label-id");
                if (!a) {
                    var r = o.querySelector("label");
                    r ? a = r.getAttribute("id") : (o.setAttribute("label-id", t), a = t)
                }
                i += a, s + 1 < n.length && (i += " ")
            }
        }
        return i
    }, E._getCustomOjLabelElements = function(e) {
        var t = [];
        if (e)
            for (var i = e.split(/\s+/), n = 0; n < i.length; n++) {
                var s = i[n],
                    o = document.getElementById(s);
                o ? t.push(o) : l.info("Cannot find oj-label with id " + o)
            }
        return t
    }, E._initInputIdLabelForConnection = function(e, t, i) {
        t && (e.setAttribute("id", t + "|input"), i && this._linkLabelForInputComp(i, e.id)), i && this._setReadonlyDivLabelledBy(i)
    }, E._labelledByUpdatedForInputComp = function(e, t) {
        e && (t && this._linkLabelForInputComp(e, t), this._setReadonlyDivLabelledBy(e)), this._IsRequired() && this.options.translations.required && (this._implicitReqValidator = null, this._getImplicitRequiredValidator())
    }, E._linkLabelForInputComp = function(e, t) {
        var i = E._getCustomOjLabelElements(e);
        i && E._setDataOjInputIdAttrOnLabel(t, i)
    }, E._setReadonlyDivLabelledBy = function(e) {
        t.Assert.assert(e);
        let i = this._getReadonlyDiv();
        i && i.setAttribute("aria-labelledby", e + "|label")
    }, E._createOrUpdateReadonlyDiv = function(e, t = !0) {
        let i = this._getReadonlyDiv();
        if (!i && t) {
            if (i = this._createReadonlyDiv(e), !i) return;
            this.options.labelledBy && this._setReadonlyDivLabelledBy(this.options.labelledBy), this._setAriaLabelFromLabelHint()
        }
        i && (i.textContent = this._GetDisplayValue(), E._setTabIndex(e, i))
    }, E._setTabIndex = function(e, t) {
        let i = e.tabIndex;
        null !== i && (t.tabIndex = i)
    }, E._setDataOjInputIdAttrOnLabel = function(e, t) {
        if (t)
            for (var i = 0; i < t.length; i++) {
                t[i].setAttribute("data-oj-input-id", e)
            }
    }, E.validate = function() {
        var e;
        if (e = this._SetValue(this._GetDisplayValue(), null, this._VALIDATE_METHOD_OPTIONS), this._IsCustomElement()) {
            if (e instanceof Promise) return e.then(function(e) {
                return Promise.resolve(e ? "valid" : "invalid")
            });
            e = Promise.resolve(e ? "valid" : "invalid")
        } else if (e instanceof Promise) return e.then(function(e) {
            return Promise.resolve(e ? "valid" : "invalid")
        });
        return e
    }, E._refreshRequired = function(e) {
        var t, i, n, s = this._AriaRequiredUnsupported();
        if (this._refreshTheming("required", e), s || (i = this._GetContentElement(), (n = e) && i ? i[0].setAttribute("aria-required", n) : i[0].removeAttribute("aria-required")), !this._IsCustomElement() && (this.$label || this._createOjLabel(), this.$label && (this.$label.ojLabel("option", "showRequired", e), s))) {
            var o = this._getAriaLabelledByElement(this.element);
            if (null !== o && 0 !== o.length && (t = o[0].getAttribute("id")), t) {
                let i = t + "_requiredIcon";
                e ? this._describedByUpdated(null, i) : this._describedByUpdated(i, null)
            }
        }
    }, E._AfterSetOptionRequired = function(e) {
        this._refreshRequired(this._IsRequired()), this._runMixedValidationAfterSetOption(E.requiredOptionOptions)
    }, E._AfterSetOptionValidators = function() {
        var e;
        this._ResetAllValidators(), this._hasInvalidMessagesShowing() && (this._clearComponentMessages(), e = this._GetDisplayValue(), this._SetValue(e, null, E.validatorsOptionOptions))
    }, E._AfterSetOptionAsyncValidators = function() {
        this._AfterSetOptionValidators()
    }, E._AfterSetOptionConverter = function() {
        this._converter = null, this._converterChangedCounter += 1;
        var e = this._GetConverter();
        if (e instanceof Promise) {
            var t = this;
            this._setBusyStateAsyncConverterLoading();
            var i = this._converterChangedCounter;
            this._loadingConverter(e).then(function() {
                i === t._converterChangedCounter && t._ResetConverter(), t._clearBusyStateAsyncConverterLoading()
            })
        } else this._ResetConverter()
    }, E._AfterCreateConverterCached = function() {
        this._HasPlaceholderSet() && (this._SetPlaceholder(this.options.placeholder), this._customPlaceholderSet = !0), this._initComponentMessaging(this._MESSAGING_CONTENT_UPDATE_TYPE.ALL), this._Refresh("value", this.options.value, !1), this.options.messagesShown.length > 0 && this._setMessagesOption("messagesShown", this.options.messagesShown, null, !0)
    }, E._ResetConverter = function() {
        var e;
        this._getComponentMessaging().update(this._getMessagingContent(this._MESSAGING_CONTENT_UPDATE_TYPE.CONVERTER_HINT)), this._hasInvalidMessagesShowing() ? (this._clearComponentMessages(), e = this._GetDisplayValue(), this._SetValue(e, null, E.converterOptionOptions)) : this._Refresh("converter", this.options.converter, !0)
    }, E._GetNormalizedValidatorsFromOption = function() {
        var e, i, n, s, o, a, r = !0,
            d = [];
        if (n = this.options.validators)
            for (e = 0; e < n.length; e++) "object" == typeof(i = n[e]) ? (i.validate && "function" == typeof i.validate || (r = !1), r || (a = i.type) && "string" == typeof a && (t.Validation && t.Validation.validatorFactory ? o = t.Validation.validatorFactory(a) : l.error('oj.Validation.validatorFactory is not available and it is needed to support the deprecated json format for validators property. Please include the backward compatibility "ojvalidation-base" module.'), o && ((s = t.CollectionUtils.copyInto({}, i.options) || {}).converter = s.converter || this._GetConverter(), s.label = s.label || this._getLabelText(), i = o.createValidator(s))), d.push(i)) : l.error("Unable to parse the validator provided:" + i);
        return d
    }, E._GetNormalizedAsyncValidatorsFromOption = function() {
        var e, t, i, n = [];
        for (i = this.options.asyncValidators, e = 0; e < i.length; e++) "object" == typeof(t = i[e]) ? t.validate && "function" == typeof t.validate && n.push(t) : l.error("Unable to parse the validator provided:" + t);
        return n
    }, E._GetConverter = function() {
        var e, t, i, n = this;
        if (!this._converter) {
            if ((e = this.options.converter) instanceof Promise ? i = e : t = _.getConverterInstance(e), i) return i.then(function(e) {
                return n._converter = e, n._converter || null
            });
            this._converter = t
        }
        return this._converter || null
    }, E._SetBusyState = function(e) {
        void 0 === this._resolveBusyStateAsyncMap && (this._resolveBusyStateAsyncMap = new Map);
        var t = this._resolveBusyStateAsyncMap.get(e);
        if (!t) {
            var i = this.element[0],
                n = r.getContext(i).getBusyContext(),
                s = "The page is waiting for async validators for displayValue " + e;
            i && i.id && (s += ' for "' + i.id + '" '), s += "to finish.", t = n.addBusyState({
                description: s
            }), this._resolveBusyStateAsyncMap.set(e, t)
        }
    }, E._ClearBusyState = function(e) {
        var t;
        void 0 !== this._resolveBusyStateAsyncMap && (t = this._resolveBusyStateAsyncMap.get(e)) && (t(), this._resolveBusyStateAsyncMap.delete(e))
    }, E._SetBusyStateAsyncValidatorHint = function(e) {
        void 0 === this._resolveBusyStateAsyncValidatorHintMap && (this._resolveBusyStateAsyncValidatorHintMap = new Map);
        var t = this._resolveBusyStateAsyncValidatorHintMap.get(e);
        if (!t) {
            var i = this.element[0],
                n = r.getContext(i).getBusyContext(),
                s = "The page is waiting for async validator hint for counter " + e;
            i && i.id && (s += ' for "' + i.id + '" '), s += "to finish.", t = n.addBusyState({
                description: s
            }), this._resolveBusyStateAsyncValidatorHintMap.set(e, t)
        }
    }, E._ClearBusyStateAsyncValidatorHint = function(e) {
        var t;
        void 0 !== this._resolveBusyStateAsyncValidatorHintMap && (t = this._resolveBusyStateAsyncValidatorHintMap.get(e)) && (t(), this._resolveBusyStateAsyncValidatorHintMap.delete(e))
    }, E._SetBusyStateAsyncConverterLoading = function() {
        if (!this._resolveBusyStateAsyncConverterLoading) {
            var e = this.element[0],
                t = r.getContext(e).getBusyContext(),
                i = "The page is waiting for async converter loading ";
            e && e.id && (i += 'for "' + e.id + '" '), i += "to finish.", this._resolveBusyStateAsyncConverterLoading = t.addBusyState({
                description: i
            })
        }
    }, E._ClearBusyStateAsyncConverterLoading = function() {
        void 0 !== this._resolveBusyStateAsyncConverterLoading && (this._resolveBusyStateAsyncConverterLoading(), delete this._resolveBusyStateAsyncConverterLoading)
    }, E._getShowLoadingDelay = function() {
        null == this._defaultOptions && (this._defaultOptions = o.parseJSONFromFontFamily("oj-form-control-option-defaults"));
        var e = parseInt(this._defaultOptions.showIndicatorDelay, 10);
        return isNaN(e) ? 0 : e
    }, E._SetInputType = function(e) {
        var i = "text",
            n = t.AgentUtils.getAgentInfo();
        if (n.os === t.AgentUtils.OS.ANDROID || n.os === t.AgentUtils.OS.IOS || n.os === t.AgentUtils.OS.WINDOWSPHONE)
            if (e.indexOf(this.options.virtualKeyboard) >= 0) i = this.options.virtualKeyboard;
            else {
                var s = this._GetConverter();
                if (s && s.resolvedOptions) {
                    var o = s.resolvedOptions();
                    e.indexOf(o.virtualKeyboardHint) >= 0 && (i = o.virtualKeyboardHint)
                }
            }
        null == i ? this.element[0].removeAttribute("type") : this.element[0].setAttribute("type", i)
    }, E._createReadonlyDiv = function(e) {
        if (this._UseReadonlyDiv()) {
            var t = document.createElement("div");
            t.classList.add("oj-text-field-readonly-div");
            var i = document.createElement("div");
            return i.classList.add("oj-text-field-readonly"), i.setAttribute("role", "textbox"), i.setAttribute("aria-readonly", !0), t.appendChild(i), e.parentNode.insertBefore(t, e), i
        }
        return null
    }, E._getReadonlyDiv = function() {
        return this.widget()[0].querySelector(".oj-text-field-readonly")
    };
    var S = {
            MESSAGES: "display",
            VALIDATOR_HINT: "display",
            CONVERTER_HINT: "display"
        },
        O = {
            MESSAGES: ["inline"],
            VALIDATOR_HINT: ["notewindow"],
            CONVERTER_HINT: ["placeholder", "notewindow"]
        };
    t.__registerWidget("oj.editableValue", n.oj.baseComponent, {
        widgetEventPrefix: "oj",
        options: {
            describedBy: null,
            disabled: !1,
            displayOptions: {},
            help: void 0,
            helpHints: {
                definition: "",
                source: ""
            },
            labelHint: "",
            labelEdge: void 0,
            messagesCustom: [],
            messagesHidden: void 0,
            messagesShown: void 0,
            title: "",
            userAssistanceDensity: "reflow",
            valid: void 0,
            value: void 0,
            animateStart: null,
            animateEnd: null
        },
        getNodeBySubId: function(e) {
            var t;
            if (!(t = this._super(e)) && !this._IsCustomElement() && "oj-label-help-icon" === e.subId) {
                var i = this._GetLabelElement();
                i && (t = i.parent().find(".oj-label-help-icon"))
            }
            return t || null
        },
        getSubIdByNode: function(e) {
            var t, i, s, o = null;
            return null != e && null != (t = n(e).closest("a.oj-label-help-icon")) && null != (i = t.closest(".oj-label")) && (s = i.find("label")[0]) && s === this._GetLabelElement()[0] && (o = {
                subId: "oj-label-help-icon"
            }), o
        },
        isValid: function() {
            return void 0 === this._valid && (this._valid = !this._hasInvalidMessages()), this._valid
        },
        refresh: function() {
            this._super(), this._doRefresh()
        },
        reset: function() {
            this._clearAllMessages(), this._runDeferredValidation(this._VALIDATION_CONTEXT.RESET_METHOD), this._refreshComponentDisplayValue(this.options.value, !0)
        },
        showMessages: function() {
            var e, t, i, n = [],
                s = this.options.messagesHidden,
                o = s.length > 0;
            for (e = 0; e < s.length; e++)(t = s[e]) instanceof c.ComponentMessage ? (t._forceDisplayToShown(), i = t.clone()) : i = new c(t.summary, t.detail, t.severity), n.push(i);
            o && (this._clearMessages("messagesHidden"), this._updateMessagesOption("messagesShown", n), this._setValidOption("invalidShown", null))
        },
        _VALIDATION_MODE: {
            FULL: 1,
            VALIDATORS_ONLY: 2,
            REQUIRED_VALIDATOR_ONLY: 3
        },
        _VALIDATION_CONTEXT: E.validationContext,
        _VALIDATE_METHOD_OPTIONS: E.validateMethodOptions,
        _InitOptions: function(e, t) {
            this._super(e, t)
        },
        _ComponentCreate: function() {
            var e = this.element,
                t = this._GetSavedAttributes(e);
            if (this._super(), this.options.messagesCustom = this.options.messagesCustom || [], this.options.messagesHidden = [], this.options.messagesShown = this.options.messagesCustom.length > 0 ? this._cloneMessagesBeforeSet(this.options.messagesCustom) : [], this._SetDisabledDom(e), t && !this._IsCustomElement()) {
                var i = e[0].tagName.toLowerCase();
                "input" !== i && "textarea" !== i || ["required", "title", "pattern"].forEach(function(i) {
                    i in t && e.removeAttr(i)
                })
            }
        },
        _AfterCreate: function() {
            var e, t = this;
            this._super(), this._refreshTheming("disabled", this.options.disabled), this.widget()[0].classList.add("oj-form-control"), this._IsTextFieldComponent() && (this._IsCustomElement() ? this._getRootElement().classList.add("oj-text-field") : this.widget()[0].classList.add("oj-text-field")), this._toggleOjHasNoValueClass(this.options.value), this.widget().uniqueId(), this._IsCustomElement() ? this.options.labelledBy ? this._labelledByUpdated(this.options.labelledBy) : this._setAriaLabelFromLabelHint() : this._createOjLabel(), (e = this.options.describedBy) && this._describedByUpdated(null, e), this._runDeferredValidation(this._VALIDATION_CONTEXT.COMPONENT_CREATE);
            var i = this._GetConverter();
            this._converterChangedCounter = 0, i instanceof Promise ? (this._setBusyStateAsyncConverterLoading(), this._ResolveLabelEdgeStrategyType(), this._loadingConverter(i).then(function() {
                t._AfterCreateConverterCached(), t._clearBusyStateAsyncConverterLoading()
            })) : (this._AfterCreateConverterCached(), this._setValidOption(this._determineValidFromMessagesOptions(), null))
        },
        _SaveAttributes: function(e) {
            this._IsCustomElement() || this._SaveAllAttributes(e)
        },
        _RestoreAttributes: function(e) {
            this._IsCustomElement() || this._RestoreAllAttributes(e)
        },
        _AfterSetOption: function(e, t) {
            switch (e) {
                case "disabled":
                    this._AfterSetOptionDisabledReadOnly(e, E.disabledOptionOptions);
                    break;
                case "displayOptions":
                    this._initComponentMessaging();
                    break;
                case "labelEdge":
                    this._initComponentMessaging(), this._setAriaLabelFromLabelHint();
                    break;
                case "labelHint":
                    this._setAriaLabelFromLabelHint();
                    break;
                case "help":
                    this._IsCustomElement() ? this._getComponentMessaging().update(this._getMessagingContent(this._MESSAGING_CONTENT_UPDATE_TYPE.TITLE)) : this._Refresh(e, this.options[e]);
                    break;
                case "messagesCustom":
                    this._messagesCustomOptionChanged(t), this._setValidOption(this._determineValidFromMessagesOptions(), null);
                    break;
                case "placeholder":
                    this._SetPlaceholder(this.options.placeholder), this._placeholderOptionChanged(t);
                    break;
                case "readOnly":
                    this._retainFocusOnReadonlyChange && setTimeout(() => {
                        this.GetFocusElement().focus(), this._resolveBusyStateFocusRestore && (this._resolveBusyStateFocusRestore(), delete this._resolveBusyStateFocusRestore)
                    }, 0);
                    break;
                case "title":
                    this._IsCustomElement() || this._getComponentMessaging().update(this._getMessagingContent(this._MESSAGING_CONTENT_UPDATE_TYPE.TITLE));
                    break;
                case "translations":
                    this.refresh();
                    break;
                case "userAssistanceDensity":
                    this._initComponentMessaging();
                    break;
                case "value":
                    this._AfterSetOptionValue(e, t)
            }
        },
        _AfterSetOptionDisabledReadOnly: function(e, t) {
            var i = !this.options[e];
            this._Refresh(e, this.options[e]), i && this._runMixedValidationAfterSetOption(t)
        },
        _AfterSetOptionValue: function(e, t) {
            var i, n = t ? t._context : null,
                s = !1;
            n && (s = !!n.originalEvent, i = n.doNotClearMessages || !1), s || (i || this._clearAllMessages(null), this._runDeferredValidation(this._VALIDATION_CONTEXT.VALUE_OPTION_CHANGE)), this._Refresh(e, this.options[e], !0)
        },
        _CanSetValue: function() {
            return !(this.options.disabled || !1)
        },
        _destroy: function() {
            var e, t, s = this._super();
            if (this._clearAllMessages(null, !0), this.widget().removeUniqueId(), this._getComponentMessaging()._isActive() && this._getComponentMessaging().deactivate(), this.$label)
                for (t = this.$label.length, e = 0; e < t; e++) this.$label[e] && null != i.__GetWidgetConstructor(this.$label[e]) && n(this.$label[e]).ojLabel("destroy");
            return s
        },
        GetFocusElement: function() {
            return !0 === this.options.readOnly && this._GetReadonlyFocusElement() || this._GetContentElement()[0]
        },
        _GetReadonlyFocusElement: function() {
            return this._getReadonlyDiv()
        },
        _setOption: function(e, t, i) {
            var n, s, d, h = !1;
            switch (e) {
                case "messagesHidden":
                case "messagesShown":
                case "rawValue":
                    h = !0;
                    break;
                case "describedBy":
                    s = this.options.describedBy, d = t, this._describedByUpdated(s, d);
                    break;
                case "labelledBy":
                    t && this._labelledByUpdated(t);
                    break;
                case "readOnly":
                    if (this._retainFocusOnReadonlyChange = a.containsFocus(this.widget()[0]), this._retainFocusOnReadonlyChange && !this._resolveBusyStateFocusRestore) {
                        var u = this.element[0],
                            c = r.getContext(u).getBusyContext(),
                            _ = "Waiting for focus on the component ";
                        u && u.id && (_ += `with id="${u.id}" `), _ += "to be restored.", this._resolveBusyStateFocusRestore = c.addBusyState({
                            description: _
                        })
                    }
                    this._addRemoveOjReadOnlyClassOnLabel(document.getElementById(this.options.labelledBy), t);
                    break;
                case "displayOptions":
                    var p = t,
                        g = null !== t && (void 0 === t.validatorHint || void 0 === t.converterHint || void 0 === t.messages);
                    if (g) {
                        const e = "use" === (o.parseJSONFromFontFamily("oj-form-control-option-defaults") || {}).useUserAssistanceOptionDefault ? S : O;
                        void 0 === t.validatorHint && (p.validatorHint = e.VALIDATOR_HINT), void 0 === t.converterHint && (p.converterHint = e.CONVERTER_HINT), void 0 === t.messages && (p.messages = e.MESSAGES)
                    }
            }
            return h ? (l.error(e + " option cannot be set"), this) : (n = this._superApply(arguments), this._AfterSetOption(e, i), n)
        },
        _GetContentElement: function() {
            return this.element
        },
        _GetLabelElement: function() {
            if (this._IsCustomElement()) return null;
            var e;
            if (this.$label) return this.$label;
            if (E.hasNoLabelFlag(this.widget())) return null;
            var t = this._getAriaLabelledByElement(this.element);
            if (null !== t && 0 !== t.length) return t;
            var i = this.element[0].id;
            return void 0 !== i && 0 !== (t = n("label[for='" + i + "']")).length || 0 !== (e = this.element.closest("[aria-labelledby]")).length && null !== (t = this._getAriaLabelledByElement(e)) && 0 !== t.length ? t : null
        },
        _GetElementValue: function() {
            return this.element.val()
        },
        _GetMessagingLauncherElement: function() {
            return this._GetContentElement()
        },
        _GetMessagingPositionElement: function() {
            let e = this._GetFormControlContainer();
            return e || this._GetMessagingLauncherElement()[0]
        },
        _GetConverter: function() {
            return null
        },
        _GetImplicitValidators: function() {
            return this._implicitSyncValidators || (this._implicitSyncValidators = {}), this._implicitSyncValidators
        },
        _GetDisplayValue: function(e) {
            return this._GetContentElement().val()
        },
        _GetNormalizedValidatorsFromOption: function() {
            return []
        },
        _GetNormalizedAsyncValidatorsFromOption: function() {
            return []
        },
        _GetAllValidatorsFromValidatorsOptionAndImplicit: function() {
            var e, t, i, n, s = [];
            if (!this._allValidators) {
                t = this._GetImplicitValidators(), i = [];
                var o, a = Object.keys(t),
                    r = a.length;
                if (r > 0) {
                    for (e = 0; e < r; e++) o = a[e], i.push(t[o]);
                    s = s.concat(i)
                }(n = this._GetNormalizedValidatorsFromOption()).length > 0 && n.forEach(function(e) {
                    s.push(e)
                }), this._allValidators = s
            }
            return this._allValidators
        },
        _ResetAllValidators: function() {
            this._allValidators && (this._allValidators.length = 0), this._allValidators = null, this._IsCustomElement() ? this._updateValidatorMessagingHint() : this._getComponentMessaging().update(this._getValidatorHintsMC())
        },
        _GetAriaLabelElement: function() {
            return this._getRootElement()
        },
        _addRemoveOjReadOnlyClassOnLabel: function(e, t) {
            if (e && void 0 !== t) {
                const i = "oj-read-only";
                t ? e.classList.add(i) : e.classList.remove(i)
            }
        },
        _setAriaLabelFromLabelHint: function() {
            if (this._IsCustomElement()) {
                var e = this._GetAriaLabelElement(),
                    t = e.getAttribute("aria-label");
                let i = this._getReadonlyDiv();
                this.options.labelledBy || !this.options.labelHint || "none" !== this.options.labelEdge || t && t !== this._ariaLabelFromHint || this._getRootElement().getAttribute("aria-labelledby") ? this._ariaLabelFromHint && this._ariaLabelFromHint === t ? (e.removeAttribute("aria-label"), i && i.removeAttribute("aria-label")) : t ? i && i.setAttribute("aria-label", t) : i && i.removeAttribute("aria-label") : (e.setAttribute("aria-label", this.options.labelHint), i && i.setAttribute("aria-label", this.options.labelHint), this._ariaLabelFromHint = this.options.labelHint)
            }
        },
        _getAllAsyncValidatorsWithHint: function() {
            var e, t, i = this._GetNormalizedAsyncValidatorsFromOption(),
                n = [];
            if (this._IsRequired() && "hint" in (t = this._getImplicitRequiredValidator()) && n.push(t), i.length > 0)
                for (e = 0; e < i.length; e++) "hint" in (t = i[e]) && n.push(t);
            var s = this._GetAllValidatorsFromValidatorsOptionAndImplicit();
            if (s.length > 0)
                for (e = 0; e < s.length; e++) "hint" in (t = s[e]) && n.push(t);
            return n
        },
        _initAsyncValidatorMessagingHint: function() {
            var e, t, i = this._getAllAsyncValidatorsWithHint(),
                n = this;
            this._asyncValidatorHintCounter = 0, i.length > 0 && (t = this._getValidatorHintsMC(), e = this._asyncValidatorHintCounter, this._setBusyStateAsyncValidatorHint(e), this._addAsyncValidatorsHintsMessagingContent(i, t).then(function() {
                n._clearBusyStateAsyncValidatorHint(e)
            }))
        },
        _getValidatorHintsMC: function() {
            return this._getMessagingContent(this._MESSAGING_CONTENT_UPDATE_TYPE.VALIDATOR_HINTS)
        },
        _updateValidatorMessagingHint: function() {
            var e, t = this._getAllAsyncValidatorsWithHint(),
                i = this._getComponentMessaging(),
                n = this,
                s = this._getValidatorHintsMC();
            t.length > 0 ? (this._asyncValidatorHintCounter += 1, e = this._asyncValidatorHintCounter, this._setBusyStateAsyncValidatorHint(e), this._addAsyncValidatorsHintsMessagingContent(t, s).then(function() {
                n._clearBusyStateAsyncValidatorHint(e)
            })) : i.update(s)
        },
        _addAsyncValidatorsHintsMessagingContent: function(e, t) {
            var i, n = this._asyncValidatorHintCounter,
                s = this._getComponentMessaging(),
                o = [],
                a = this,
                r = [];
            for (i = 0; i < e.length; i++) r.push(e[i].hint);

            function l(e) {
                return e.then(function(e) {
                    var i, r = {};
                    return a._asyncValidatorHintCounter === n ? (null !== e && (o.push(e), r.validatorHint = t.validatorHint.concat(o), s.update(r)), i = "resolved") : i = "ignore", {
                        v: e,
                        status: i
                    }
                }, function(e) {
                    return {
                        e: e,
                        status: "rejected"
                    }
                })
            }
            return new Promise(function(e) {
                Promise.all(r.map(l)).then(function() {
                    e(o)
                })
            })
        },
        _IsRequired: function() {
            return !1
        },
        _HandleChangeEvent: function(e) {
            var t = this._GetDisplayValue();
            this._SetValue(t, e)
        },
        _SetRawValue: function(e, t) {
            var i = {};
            i._context = {
                originalEvent: t,
                writeback: !0,
                internalSet: !0,
                readOnly: !0
            }, this._CompareOptionValues("rawValue", this.options.rawValue, e) || this.option("rawValue", e, i)
        },
        _IsValueEmpty: function(e) {
            return null == e || ("string" == typeof e ? t.StringUtils.isEmptyOrUndefined(e) : "number" == typeof e ? isNaN(e) : !!Array.isArray(e) && (0 === e.length || 1 === e.length && (null === e[0] || void 0 === e[0])))
        },
        _toggleOjHasNoValueClass: function(e) {
            let t = this._getRootElement();
            const i = t.classList.contains("oj-has-no-value"),
                n = this._IsValueEmpty(e),
                s = n && !i,
                o = !n && i;
            s ? t.classList.add("oj-has-no-value") : o && t.classList.remove("oj-has-no-value"), this.options.required && (s || o) && this._getComponentMessaging().update({
                hasNoValueToggled: !0
            })
        },
        _Refresh: function(e, t, i) {
            var n, s;
            switch (e) {
                case "converter":
                    var o = this.options.value;
                    this._refreshComponentDisplayValue(o, i);
                    break;
                case "disabled":
                    this._refreshTheming("disabled", this.options.disabled);
                    break;
                case "help":
                    if (!this._IsCustomElement() && this.$label) {
                        n = this.options.help.definition, s = this.options.help.source, this.$label.ojLabel("option", "help", {
                            definition: n,
                            source: s
                        });
                        var a = this.$label[0];
                        if (a) {
                            let e = a.id;
                            if (e) {
                                let t = e + "_helpIcon";
                                null != s || null != n ? this._describedByUpdated(null, t) : this._describedByUpdated(t, null)
                            }
                        }
                    }
                    break;
                case "value":
                    this._refreshComponentDisplayValue(t, i)
            }
        },
        _NotifyHidden: function() {
            this._superApply(arguments), this._getComponentMessaging().close()
        },
        _NotifyDetached: function() {
            this._superApply(arguments), this._getComponentMessaging().close()
        },
        _ResetComponentState: function() {
            this.$label && this.$label.ojLabel("refresh"), this._implicitReqValidator = null, this._converter = null, this._ResetAllValidators()
        },
        _SetDisplayValue: function(e) {
            var t = this._GetContentElement();
            t.val() !== e && t.val(e)
        },
        _SetDisabledDom: function(e) {
            "boolean" == typeof this.options.disabled && (e[0].disabled = this.options.disabled)
        },
        _SetPlaceholder: function(e) {
            var t = this._GetContentElement()[0];
            t && (null == e ? t.removeAttribute("placeholder") : t.setAttribute("placeholder", e))
        },
        _SetPlaceholderOption: function(e) {
            this.options.placeholder = e
        },
        _HasPlaceholderSet: function() {
            return this.options.placeholder
        },
        _ClearPlaceholder: function() {
            this._SetPlaceholderOption(""), this._SetPlaceholder("")
        },
        _SetValue: function(e, t, i) {
            var n, s, o, a = !i || "boolean" != typeof i.doValueChangeCheck || i.doValueChangeCheck,
                r = this,
                d = !1;
            return this._toggleOjHasNoValueClass(e), void 0 === e ? (l.warn("Attempt to set a value of undefined"), !1) : (a && e === r._getLastDisplayValue() || (n = e + "_" + (this._asyncValidatorValidateCounter + 1), (s = this._AsyncValidate(e, t, i, n)) instanceof Promise ? d = s.then(function(e) {
                return o = e, r._afterAsyncValidateUpdateValue(e, t, i)
            }).then(function() {
                return r._clearBusyState(n), void 0 !== o
            }) : (this._afterAsyncValidateUpdateValue(s, t, i), d = void 0 !== s)), d)
        },
        _ParseValueShowErrors: function(e, t) {
            var i;
            this._clearAllMessages(t);
            try {
                return this._parseValue(e, t)
            } catch (e) {
                i = this._processValidationErrors(e), this._updateMessagesOption("messagesShown", i, t), this._setValidOption("invalidShown", t)
            }
        },
        _AsyncValidate: function(e, t, i, n) {
            var s, o, a, r = i && i.validationMode ? i.validationMode : this._VALIDATION_MODE.FULL,
                d = i && i.validationContext ? i.validationContext : this._VALIDATION_CONTEXT.USER_ACTION,
                h = i && i.doNotClearMessages || !1;
            if (void 0 !== e) {
                if (this._CanSetValue()) {
                    h || this._clearAllMessages(t);
                    try {
                        return this._asyncValidatorValidateCounter += 1, r === this._VALIDATION_MODE.FULL ? (this._setLastDisplayValue(e), o = this._parseValue(e, t, !0)) : o = e, (a = this._asyncValidateValue(o, t, d)) instanceof Promise ? (this._setBusyState(n), a.then(function(e) {
                            if ("valid" === e) return o
                        })) : a
                    } catch (e) {
                        s = this._processValidationErrors(e, d), this._updateMessagesOption("messagesShown", s, t), this._setValidOption("invalidShown", t)
                    }
                }
                return a
            }
            l.warn("Attempt to set a value of undefined")
        },
        _afterAsyncValidateUpdateValue: function(e, t, i) {
            var n, s = !1;
            return void 0 !== e && (i && !0 === i.doNotClearMessages ? this.isValid() || !this._hasInvalidComponentMessagesShowing() : this.isValid()) && (i && i._context && (n = i._context), this._updateValueOption(e, t, i && i.validationContext, n, i), s = !0), s
        },
        _CompareOptionValues: function(e, i, n) {
            return "value" === e || "rawValue" === e ? t.Object.compareValues(i, n) : 0 === e.indexOf("messages") ? this._messagesEquals(i, n) : this._superApply(arguments)
        },
        _GetDefaultStyleClass: function() {
            return t.Assert.failedInAbstractFunction(), ""
        },
        _MESSAGING_CONTENT_UPDATE_TYPE: {
            INIT: 1,
            VALIDITY_STATE: 2,
            CONVERTER_HINT: 3,
            VALIDATOR_HINTS: 4,
            TITLE: 5
        },
        _OPTION_TO_CSS_MAPPING: {
            disabled: "oj-disabled",
            required: "oj-required"
        },
        _clearAllMessages: function(e, t) {
            t ? (this.options.messagesHidden = [], this.options.messagesShown = [], this.options.messagesCustom = []) : (this._clearMessages("messagesHidden", e), this._clearMessages("messagesShown", e), this._clearMessages("messagesCustom", e))
        },
        _clearComponentMessages: function() {
            var e, t = this.options.messagesShown;
            e = t.length, this._clearMessages("messagesHidden");
            for (var i = e - 1; i >= 0; i--) t[i] instanceof c.ComponentMessage && t.splice(i, 1);
            t.length !== e && this._setMessagesOption("messagesShown", t, null, !0)
        },
        _setMessagesOption: function(e, t, i, n) {
            var s = {},
                o = 0 === t.length && 0 === this.options[e].length;
            !n && o || (s._context = {
                originalEvent: i,
                writeback: !0,
                internalSet: !0
            }, "messagesCustom" !== e && (s._context.readOnly = !0), s.changed = n || !o, this._resetValid(), this.option(e, t, s), this._updateMessagingContent())
        },
        _setValidOption: function(e, t) {
            var i = {};
            "pending" === e && "valid" !== this._determineValidFromMessagesOptions() || e !== this.options.valid && (i._context = {
                originalEvent: t,
                writeback: !0,
                internalSet: !0,
                readOnly: !0
            }, this.option("valid", e, i))
        },
        _clearMessages: function(e, t) {
            this._setMessagesOption(e, [], t)
        },
        _cloneMessagesBeforeSet: function(e) {
            var t, i, n, s = [];
            if (e && e.length > 0)
                for (t = 0; t < e.length; t++) n = e[t], i = new c(n.summary, n.detail, n.severity), i = Object.freeze ? Object.freeze(i) : i, s.push(i);
            return s
        },
        _createOjLabel: function() {
            var e, t;
            this._IsCustomElement() || (this.$label = this._GetLabelElement(), this.$label && (e = this.options.help.definition, t = this.options.help.source, this.$label.ojLabel({
                rootAttributes: {
                    class: this._GetDefaultStyleClass() + "-label"
                },
                help: {
                    definition: e,
                    source: t
                }
            }), this._createDescribedByForLabel()))
        },
        _createDescribedByForLabel: function() {
            var e, t = this.options.help.definition;
            if (null != this.options.help.source || null != t) {
                var i = this.$label[0];
                i && (e = i.id), e && this._describedByUpdated(null, e + "_helpIcon")
            }
        },
        _doRefresh: function() {
            var e, t = !1;
            this._ResetComponentState(), this._initComponentMessaging(), this._Refresh("disabled", this.options.disabled), this._hasInvalidMessagesShowing() && (t = !0), this._clearComponentMessages(), t ? (e = this._GetDisplayValue(), this._SetValue(e, null, E.refreshMethodOptions)) : (this._IsRequired() && this._runDeferredValidation(E.refreshMethodOptions.validationContext), this._Refresh("value", this.options.value, !0))
        },
        _getLastModelValue: function() {
            return this._oj_lastModelValue
        },
        _getLastDisplayValue: function() {
            return void 0 === this._oj_lastElementValue && (this._oj_lastElementValue = ""), this._oj_lastElementValue
        },
        _getAriaLabelledByElement: function(e) {
            if (this._IsCustomElement()) return null;
            var t = e[0].getAttribute("aria-labelledby");
            return void 0 !== t ? n("label[id='" + t + "']") : null
        },
        _getMessages: function() {
            var e = [];
            return this.options.messagesShown && (e = e.concat(this.options.messagesShown)), this.options.messagesHidden && (e = e.concat(this.options.messagesHidden)), e
        },
        _getLabelText: function() {
            if (this.$label) return this.$label[0].textContent;
            var e = E._getCustomOjLabelElements(this.options.labelledBy),
                t = null;
            if (e)
                for (var i = 0; i < e.length; i++) {
                    i > 0 && (t += " "), t = e[i].textContent
                }
            return t
        },
        _getValidityState: function() {
            return this._validityState || (this._validityState = new t.ComponentValidity(this.isValid(), this._getMessages())), this._validityState
        },
        _hasValidityState: function() {
            return !!this._validityState
        },
        _hasInvalidMessages: function() {
            return !c.isValid(this._getMessages())
        },
        _hasInvalidMessagesShowing: function() {
            return !this.isValid() && this.options.messagesShown.length > 0
        },
        _hasInvalidComponentMessagesShowing: function() {
            for (var e, t, i = this.options.messagesShown, n = 0; n < i.length; n++)(t = i[n]) instanceof c.ComponentMessage && t._isMessageAddedByComponent() && (e = e || []).push(t);
            return void 0 !== e && !c.isValid(e)
        },
        _initComponentMessaging: function() {
            var e = this._getComponentMessaging(),
                t = this._GetMessagingLauncherElement(),
                i = this._GetContentElement(),
                n = this._getMessagingContent(this._MESSAGING_CONTENT_UPDATE_TYPE.INIT);
            this._customPlaceholderSet || this._ClearPlaceholder(), e.activate(t, i, n), this._asyncValidatorValidateCounter = 0
        },
        _messagesCustomOptionChanged: function(e) {
            var t, i, n = e ? e._context : null,
                s = this.options.messagesCustom,
                o = this.options.messagesShown,
                a = [];
            for (t = 0; t < o.length; t++)(i = o[t]) instanceof c.ComponentMessage && i._isMessageAddedByComponent() && a.push(i);
            for (t = 0; t < s.length; t++) a.push(s[t]);
            this._setMessagesOption("messagesShown", a, n ? n.originalEvent : null, e && e.changed)
        },
        _placeholderOptionChanged: function(e) {
            "displayOptions" === this._getResolvedUserAssistance() && (!(e && e._context || {}).internalMessagingSet ? (this._customPlaceholderSet = !0, this._GetConverter() && this._initComponentMessaging()) : this._customPlaceholderSet = !1)
        },
        _setLastModelValue: function(e) {
            this._oj_lastModelValue = e
        },
        _setLastDisplayValue: function(e) {
            this._oj_lastElementValue = e
        },
        _updateMessagesOption: function(e, t, i) {
            var n, s, o;
            if ("object" == typeof t && Array.isArray(t))
                for (o = this.options[e], s = t.length, n = 0; n < s; n++) o.push(t[n]);
            this._setMessagesOption(e, o, i, !0)
        },
        _updateMessagingContent: function() {
            this._getComponentMessaging().update(this._getMessagingContent(this._MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE))
        },
        _updateValueOption: function(e, t, i, n, s) {
            var o, a, r = n || {};
            switch (t && (r.originalEvent = t), i) {
                case this._VALIDATION_CONTEXT.CONVERTER_OPTION_CHANGE:
                case this._VALIDATION_CONTEXT.DISABLED_OPTION_CHANGE:
                case this._VALIDATION_CONTEXT.READONLY_OPTION_CHANGE:
                case this._VALIDATION_CONTEXT.REFRESH_METHOD:
                case this._VALIDATION_CONTEXT.REQUIRED_OPTION_CHANGE:
                case this._VALIDATION_CONTEXT.VALIDATE_METHOD:
                case this._VALIDATION_CONTEXT.VALIDATORS_OPTION_CHANGE:
                    r.writeback = !0, r.doNotClearMessages = !0
            }
            if (r.internalSet = !0, s && s.targetOptions) {
                o = {}, a = !1;
                for (var l = 0; l < s.targetOptions.length; l++) o[s.targetOptions[l]] = e, a = a || "value" === s.targetOptions[l]
            } else o = {
                value: e
            }, a = !0;
            this.option(o, {
                _context: r
            }), a && this._AfterSetOptionValue("value", {
                _context: r
            })
        },
        _resetValid: function() {
            this._valid = void 0
        },
        _determineValidFromMessagesOptions: function() {
            var e = this.options.messagesHidden,
                t = this.options.messagesShown,
                i = "valid";
            return t && 0 !== t.length && !c.isValid(t) ? i = "invalidShown" : e && 0 !== e.length && !c.isValid(e) && (i = "invalidHidden"), i
        },
        _formatValue: function(e) {
            var t = e,
                i = this._GetConverter();
            return i && "object" == typeof i && i.format && "function" == typeof i.format && (t = i.format(e)), t
        },
        _getComponentMessaging: function() {
            return this._componentMessaging || (this._componentMessaging = new t.ComponentMessaging(this)), this._componentMessaging
        },
        _getHintsFromAllValidatorsWithGetHintFunction: function(e) {
            var t, i, n = [],
                s = "";
            for (this._IsRequired() && (i = this._getImplicitRequiredValidator()).getHint && "function" == typeof i.getHint && (s = i.getHint()) && n.push(s), t = 0; t < e.length; t++) s = "", "object" == typeof(i = e[t]) && i.getHint && "function" == typeof i.getHint && (s = i.getHint()) && n.push(s);
            return n
        },
        _getImplicitRequiredValidator: function() {
            var e, t = {};
            return null == this._implicitReqValidator && (e = {
                hint: (t = this.options.translations && this.options.translations.required || {}).hint || null,
                label: this._getLabelText(),
                messageSummary: t.messageSummary || null,
                messageDetail: t.messageDetail || null
            }, this._implicitReqValidator = new d(e)), this._implicitReqValidator
        },
        _getResolvedUserAssistance: function() {
            let e = o.parseJSONFromFontFamily("oj-form-control-option-defaults");
            if (e) {
                return "use" === e.useUserAssistanceOptionDefault ? this.options.userAssistanceDensity : "displayOptions"
            }
            return "displayOptions"
        },
        _showUserAssistanceNotInline: function() {
            let e = this._getResolvedUserAssistance();
            return "compact" === e || "displayOptions" === e
        },
        _getMessagingContent: function(e) {
            var t, i, n = {},
                s = "";
            if ((e = e || this._MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE) !== this._MESSAGING_CONTENT_UPDATE_TYPE.INIT && e !== this._MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE || (n.validityState = this._getMessagingContentValidityState()), e !== this._MESSAGING_CONTENT_UPDATE_TYPE.INIT && e !== this._MESSAGING_CONTENT_UPDATE_TYPE.CONVERTER_HINT || ((i = this._GetConverter()) && "object" == typeof i && i.getHint && "function" == typeof i.getHint && (s = i.getHint() || ""), n.converterHint = s), e === this._MESSAGING_CONTENT_UPDATE_TYPE.VALIDATOR_HINTS) {
                t = this._GetAllValidatorsFromValidatorsOptionAndImplicit();
                let e = this._getHintsFromAllValidatorsWithGetHintFunction(t) || [];
                n.validatorHint = e
            }
            if (e === this._MESSAGING_CONTENT_UPDATE_TYPE.INIT || e === this._MESSAGING_CONTENT_UPDATE_TYPE.TITLE) {
                var o;
                if (this._IsCustomElement()) {
                    var a = this.options.help;
                    null != a && (o = a.instruction)
                } else o = this.options.title;
                n.title = o || ""
            }
            return n
        },
        _getMessagingContentValidityState: function() {
            let e;
            return this._hasValidityState() ? (e = this._getValidityState(), e.update(this.isValid(), this._getMessages())) : e = this._getValidityState(), e
        },
        _messagesEquals: function(e, t) {
            var i, s = -1,
                o = !0,
                a = n.extend([], e),
                r = n.extend([], t);
            return a.length === r.length && (a.forEach(function(e) {
                e instanceof c ? i = e : (i = new c(e.summary, e.detail, e.severity), i = Object.freeze ? Object.freeze(i) : i), s = -1, r.forEach(function(e, t) {
                    c.getSeverityLevel(i.severity) === c.getSeverityLevel(e.severity) && i.summary === e.summary && i.detail === e.detail && (s = t)
                }), s > -1 ? r.splice(s, 1) : o = !1
            }), o)
        },
        _parseValue: function(e, t, i) {
            var n = this._GetConverter(),
                s = e;
            if (n && "object" == typeof n && n.parse && "function" == typeof n.parse) try {
                i && this._setValidOption("pending", t), s = n.parse(e)
            } catch (e) {
                throw e
            }
            return s
        },
        _addValidationError: function(e, t) {
            var i, n, s, o;
            e instanceof p.ConverterError || e instanceof p.ValidatorError ? (n = (s = e.getMessage()).severity || c.SEVERITY_LEVEL.ERROR, o = s.summary || u.getTranslatedString("oj-message.error"), i = s.detail || u.getTranslatedString("oj-converter.detail")) : e.summary || e.detail ? (n = c.SEVERITY_LEVEL.ERROR, o = e.summary || u.getTranslatedString("oj-message.error"), i = e.detail || u.getTranslatedString("oj-converter.detail")) : (n = c.SEVERITY_LEVEL.ERROR, o = u.getTranslatedString("oj-message.error"), i = e.message || u.getTranslatedString("oj-converter.detail")), t.push({
                summary: o,
                detail: i,
                severity: n
            })
        },
        _processValidationErrors: function(e, t, i) {
            var n, s = [],
                o = e._messages || [],
                a = {};
            a.context = t || 0, a.display = i || c.ComponentMessage.DISPLAY.SHOWN, 0 === o.length && this._addValidationError(e, o);
            for (var r = 0; r < o.length; r++) n = o[r], s.push(this._createComponentMessage(n.summary, n.detail, n.severity, a));
            return s || null
        },
        _createComponentMessage: function(e, t, i, n) {
            var s;
            return s = new c.ComponentMessage(e, t, i, n), s = Object.seal ? Object.seal(s) : s
        },
        _refreshComponentDisplayValue: function(e, t) {
            var i;
            return this._toggleOjHasNoValueClass(e), (t || e !== this._getLastModelValue()) && (i = this._UpdateElementDisplayValue(e)), i
        },
        _refreshTheming: function(e, t) {
            -1 !== Object.keys(this._OPTION_TO_CSS_MAPPING).indexOf(e) && (t ? this.widget()[0].classList.add(this._OPTION_TO_CSS_MAPPING[e]) : this.widget()[0].classList.remove(this._OPTION_TO_CSS_MAPPING[e]))
        },
        _runDeferredValidation: function(e) {
            var t = this;
            if (this._CanSetValue()) {
                if (!this._resolveBusyStateDeferredValidation) {
                    var i = this.element[0],
                        n = r.getContext(i).getBusyContext(),
                        s = "The page is waiting for async deferred validation ";
                    i && i.id && (s += 'for "' + i.id + '" '), s += "to finish.", this._resolveBusyStateDeferredValidation = n.addBusyState({
                        description: s
                    })
                }
                var o = this._validateValueForRequiredOnly(this.options.value, e);
                if (!(o instanceof Promise)) return this._setValidOption(this._determineValidFromMessagesOptions(), null), void(this._resolveBusyStateDeferredValidation && (this._resolveBusyStateDeferredValidation(), delete this._resolveBusyStateDeferredValidation));
                o.then(function() {
                    t._resolveBusyStateDeferredValidation && (t._resolveBusyStateDeferredValidation(), delete t._resolveBusyStateDeferredValidation), t._setValidOption(t._determineValidFromMessagesOptions(), null)
                })
            }
            this._setValidOption(this._determineValidFromMessagesOptions(), null)
        },
        _runMixedValidationAfterSetOption: function(e) {
            var t, i = !1;
            this._hasInvalidMessagesShowing() && (i = !0), this._clearComponentMessages(), i && (t = this._GetDisplayValue(), this._SetValue(t, null, e)), !i && this._IsRequired() ? this._runDeferredValidation(e.validationContext) : this._setValidOption(this._determineValidFromMessagesOptions(), null)
        },
        _UpdateElementDisplayValue: function(e, t) {
            var i, n;
            i = e;
            try {
                i = this._formatValue(e);
                try {
                    this._setLastModelValue(e), this._afterConverterFormat(i)
                } catch (e) {
                    throw e
                }
                n = i
            } catch (s) {
                t || this._afterConverterFormatFailure(s), this._setLastModelValue(e), this._afterConverterFormat(i), n = void 0
            }
            return n
        },
        _SetLoading: function() {
            var e = this.widget()[0],
                t = this.GetFocusElement();
            e.classList.add("oj-loading"), this._saveAriaLabel = t.getAttribute("aria-label");
            var i = u.getTranslatedString("oj-ojEditableValue.loading");
            t.setAttribute("aria-label", i)
        },
        _ClearLoading: function() {
            var e = this.widget()[0],
                t = this.GetFocusElement();
            e.classList.remove("oj-loading"), this._saveAriaLabel ? t.setAttribute("aria-label", this._saveAriaLabel) : t.removeAttribute("aria-label")
        },
        _UseReadonlyDiv: function() {
            return "div" === o.parseJSONFromFontFamily("oj-form-control-option-defaults").readonlyElem
        },
        _ShowHelpHints: function() {
            return this._IsTextFieldComponent() ? "focus" : "always"
        },
        _ShowHelpHintsLocation: function() {
            return "inline"
        },
        _afterConverterFormat: function(e) {
            var t;
            this._SetDisplayValue(e), t = this._GetDisplayValue(), this._setLastDisplayValue(t), this._SetRawValue(t, null)
        },
        _afterConverterFormatFailure: function(e) {
            var t;
            t = this._processValidationErrors(e), this._updateMessagesOption("messagesShown", t), this._setValidOption("invalidShown", null)
        },
        _loadingConverter: function(e) {
            var t = this,
                i = E._getShowLoadingDelay(),
                n = this._converterChangedCounter,
                s = setTimeout(function() {
                    n === t._converterChangedCounter && t._SetLoading()
                }, i);
            return e.then(function(e) {
                return t._ClearLoading(), clearTimeout(s), e
            })
        },
        _validateValueForRequiredOnly: function(e, i) {
            var n, s, o = this;
            if (this._IsRequired()) {
                s = this._getImplicitRequiredValidator();
                try {
                    this._setValidOption("pending", null);
                    var a = s.validate(t.StringUtils.trim(e));
                    if (a instanceof Promise) return a.then(function() {}, function(e) {
                        (n = o._processValidationErrors(e, i, c.ComponentMessage.DISPLAY.HIDDEN)) && o._updateMessagesOption("messagesHidden", n)
                    })
                } catch (e) {
                    (n = this._processValidationErrors(e, i, c.ComponentMessage.DISPLAY.HIDDEN)) && this._updateMessagesOption("messagesHidden", n)
                }
            }
            return null
        },
        _asyncValidateValue: function(e, i, n) {
            var s, o, a, r, l, d = this._GetNormalizedAsyncValidatorsFromOption(),
                h = this._GetAllValidatorsFromValidatorsOptionAndImplicit(),
                u = !1,
                c = this,
                _ = [],
                p = this._asyncValidatorValidateCounter,
                g = [],
                m = this._IsRequired();
            if (m && (r = this._getImplicitRequiredValidator()), (m || d.length > 0 || h.length > 0) && this._setValidOption("pending", i), r) try {
                var f = r.validate(t.StringUtils.trim(e));
                f && g.push(f)
            } catch (e) {
                this._addValidationError(e, _), this._setValidOption("invalidShown", i), u = !0
            }
            for (s = 0; s < d.length; s++) {
                try {
                    l = d[s].validate(e)
                } catch (e) {
                    l = Promise.reject(e)
                }
                l instanceof Promise || (l = Promise.resolve(l)), g.push(l)
            }
            for (s = 0; s < h.length; s++) try {
                (l = h[s].validate(e)) instanceof Promise && g.push(l)
            } catch (e) {
                this._addValidationError(e, _), this._setValidOption("invalidShown", i), u = !0
            }
            if (_.length > 0) {
                let e = new Error;
                e._messages = _, a = this._processValidationErrors(e, n), this._updateMessagesOption("messagesShown", a, i)
            }

            function v(e) {
                return e.then(function(e) {
                    return {
                        v: e,
                        status: c._asyncValidatorValidateCounter === p ? "resolved" : "ignore"
                    }
                }, function(e) {
                    var t;
                    return c._asyncValidatorValidateCounter === p ? (a = c._processValidationErrors(e, n), c._updateMessagesOption("messagesShown", a, i), u || (c._setValidOption("invalidShown", i), u = !0), t = "rejected") : t = "ignore", {
                        e: e,
                        status: t
                    }
                })
            }
            return g.length > 0 ? new Promise(function(e) {
                Promise.all(g.map(v)).then(function(t) {
                    t.filter(function(e) {
                        return "ignore" === e.status
                    }).length > 0 ? o = "ignoreValidation" : (o = u ? "invalidShown" : "valid", c._setValidOption(c._determineValidFromMessagesOptions(), i)), e(o)
                })
            }) : (0 === _.length && this._setValidOption(c._determineValidFromMessagesOptions(), i), 0 === _.length ? e : void 0)
        },
        _labelledByUpdated: function(e) {
            var t = E._getCustomOjLabelElements(e);
            if (t)
                for (let e = 0; e < t.length; e++) {
                    var i = t[e];
                    i.classList.add(this._GetDefaultStyleClass() + "-label"), void 0 === this.widget().attr("data-oj-internal") && void 0 !== this.options.readOnly && this._addRemoveOjReadOnlyClassOnLabel(i, this.options.readOnly)
                }
        },
        _describedByUpdated: h._describedByUpdated,
        _setBusyState: E._SetBusyState,
        _clearBusyState: E._ClearBusyState,
        _setBusyStateAsyncValidatorHint: E._SetBusyStateAsyncValidatorHint,
        _clearBusyStateAsyncValidatorHint: E._ClearBusyStateAsyncValidatorHint,
        _setBusyStateAsyncConverterLoading: E._SetBusyStateAsyncConverterLoading,
        _clearBusyStateAsyncConverterLoading: E._ClearBusyStateAsyncConverterLoading,
        _AfterCreateConverterCached: E._AfterCreateConverterCached,
        _getReadonlyDiv: E._getReadonlyDiv,
        _createOrUpdateReadonlyDiv: E._createOrUpdateReadonlyDiv,
        _createReadonlyDiv: E._createReadonlyDiv,
        _setReadonlyDivLabelledBy: E._setReadonlyDivLabelledBy,
        _GetFormControlContainer: function() {
            if (this._IsCustomElement()) {
                var e = "." + [this._GetComponentManagedBaseLabelStyleClass(), "container"].join("-");
                return this._getRootElement().querySelector(e)
            }
        },
        _IsTextFieldComponent: function() {
            return !1
        },
        _GetComponentManagedBaseLabelStyleClass: function() {
            return this._IsTextFieldComponent() ? "oj-text-field" : "oj-form-control"
        },
        _CreateMiddleWrapper: function() {
            var e = document.createElement("div");
            return e.className = "oj-text-field-middle", e
        },
        _ResolveLabelEdgeStrategyType: function() {
            var e = this.options.labelEdge;
            return this._IsCustomElement() && "inside" === e && (this._IsTextFieldComponent() || (e = t.ComponentMessaging._STRATEGY_TYPE.LABEL_EDGE_INSIDE_FORM_CNTRL)), e
        }
    }, !0), i.setDefaultOptions({
        editableValue: {
            displayOptions: i.createDynamicPropertyGetter(function(e) {
                var t;
                return (t = "use" === (o.parseJSONFromFontFamily("oj-form-control-option-defaults") || {}).useUserAssistanceOptionDefault ? {
                    messages: S.MESSAGES,
                    converterHint: S.CONVERTER_HINT,
                    validatorHint: S.VALIDATOR_HINT
                } : {
                    messages: e.containers.indexOf("ojDataGrid") >= 0 || e.containers.indexOf("ojTable") >= 0 ? ["notewindow"] : O.MESSAGES,
                    converterHint: O.CONVERTER_HINT,
                    validatorHint: O.VALIDATOR_HINT
                })[e.isCustomElement ? "helpInstruction" : "title"] = ["notewindow"], t
            }),
            help: i.createDynamicPropertyGetter(function(e) {
                return e.isCustomElement ? {
                    instruction: ""
                } : {
                    definition: null,
                    source: null
                }
            }),
            labelEdge: i.createDynamicPropertyGetter(function(e) {
                if (e.isCustomElement) return (o.parseJSONFromFontFamily("oj-form-control-option-defaults") || {}).labelEdge
            }),
            userAssistanceDensity: i.createDynamicPropertyGetter(function(e) {
                return e.containers.indexOf("ojDataGrid") >= 0 || e.containers.indexOf("ojTable") >= 0 ? "compact" : "reflow"
            })
        }
    });
    const b = function(e) {
            this.Init(e)
        },
        A = {},
        R = {};
    t.ComponentMessaging.registerMessagingStrategy(t.ComponentMessaging._STRATEGY_TYPE.NOTEWINDOW, b), t.Object.createSubclass(b, t.MessagingStrategy, "oj.PopupMessagingStrategy"), b._DEFAULTS_BY_COMPONENT = {
        ojRadioset: {
            position: "launcher",
            events: {
                open: "focusin mouseenter press",
                close: "mouseleave"
            }
        },
        ojCheckboxset: {
            position: "launcher",
            events: {
                open: "focusin mouseenter press",
                close: "mouseleave"
            }
        },
        ojInputText: {
            position: "launcher",
            events: {
                open: "focusin"
            }
        },
        ojTextArea: {
            position: "launcher",
            events: {
                open: "focusin"
            }
        },
        ojInputPassword: {
            position: "launcher",
            events: {
                open: "focusin"
            }
        },
        ojSwitch: {
            position: "launcher",
            events: {
                open: "focusin mouseenter",
                close: "mouseleave"
            }
        },
        ojSlider: {
            position: "launcher",
            events: {
                open: "focusin mouseenter",
                close: "mouseleave"
            }
        },
        ojColorSpectrum: {
            position: "launcher",
            events: {
                open: "focusin mouseenter",
                close: "mouseleave"
            }
        },
        ojColorPalette: {
            position: "launcher",
            events: {
                open: "focusin mouseenter",
                close: "mouseleave"
            }
        },
        default: {
            position: "launcher-wrapper",
            events: {
                open: "focusin"
            }
        }
    }, b._SELECTOR_FORMCONTROL_HINT = "oj-form-control-hint", b._SELECTOR_FORMCONTROL_HINT_CONVERTER = "oj-form-control-hint-converter", b._SELECTOR_FORMCONTROL_HINT_VALIDATOR = "oj-form-control-hint-validator", b._SELECTOR_FORMCONTROL_HINT_TITLE = "oj-form-control-hint-title", b._OPEN_NAMESPACE = ".ojPopupMessagingOpen", b._CLOSE_NAMESPACE = ".ojPopupMessagingClose", b.prototype.activate = function(e) {
        b.superclass.activate.call(this, e), this._initMessagingPopup()
    }, b.prototype.reactivate = function(e) {
        b.superclass.reactivate.call(this, e), this._updatePopupIfOpenOrComponentHasFocus()
    }, b.prototype.update = function() {
        b.superclass.update.call(this), this._updatePopupIfOpenOrComponentHasFocus()
    }, b.prototype.deactivate = function() {
        this._unregisterLauncherEvents(), this._destroyTooltip(), b.superclass.deactivate.call(this)
    }, b.prototype.close = function() {
        this._closePopup()
    }, b.prototype._closePopup = function() {
        this._queueAction(function(e) {
            if (this._isPopupInitialized()) return e && this._setActionResolver(this.$messagingContentRoot, "close", e), void this.$messagingContentRoot.ojPopup("close");
            e && e(!0)
        }.bind(this))
    }, b.prototype._initMessagingPopup = function() {
        this._openPopupCallback || this._registerLauncherEvents()
    }, b.prototype._addAnimateEventListeners = function(e) {
        var t = function(e, t, i) {
            var n = this.GetComponent();
            n && n._trigger && (t.stopPropagation(), n._trigger(e, null, i) || t.preventDefault())
        };
        e.on("ojanimatestart.notewindow", t.bind(this, "animateStart")), e.on("ojanimateend.notewindow", t.bind(this, "animateEnd"))
    }, b.prototype._removeAnimateEventListeners = function(e) {
        e.off("ojanimatestart.notewindow"), e.off("ojanimateend.notewindow")
    }, b.prototype._setBusyState = function(e) {
        var t = this.GetComponent(),
            i = t ? t.element : null,
            n = i ? i[0] : null,
            s = r.getContext(n).getBusyContext(),
            o = "The page is waiting for note window ";
        return n && n.id && (o += 'for "' + n.id + '" '), o += "to " + e, s.addBusyState({
            description: o
        })
    }, b.prototype._setActionResolver = function(e, t, i) {
        var n;
        this._actionCount > 1 && (n = e.ojPopup("option", "animation"), e.ojPopup("option", "animation", null));
        var s = this._setBusyState(t);
        e.one("oj" + t, function() {
            n && e.ojPopup("option", "animation", n), s(), i(!0)
        })
    }, b.prototype._queueAction = function(e) {
        if (this.GetComponent()._IsCustomElement()) {
            var t = this,
                i = function(e) {
                    var i = new Promise(e);
                    return i.then(function() {
                        t._actionCount -= 1
                    }), i
                };
            this._actionCount ? (this._actionCount += 1, this._actionPromise = this._actionPromise.then(function() {
                return i(e)
            })) : (this._actionCount = 1, this._actionPromise = i(e))
        } else e(null)
    }, b.prototype._openPopup = function(e) {
        this._queueAction(function(i) {
            var s, o, a;
            if (this._canOpenPopup() && (o = this._buildPopupHtml(), !t.StringUtils.isEmptyOrUndefined(o))) {
                var r = this._getPopupElement(),
                    l = r.ojPopup("isOpen");
                if ((s = A.getPopupContentNode(r)).innerHTML = "", s.innerHTML = o, !l) {
                    a = this.GetLauncher();
                    const t = n(this.GetComponent()._GetMessagingPositionElement());
                    return e && "press" === e.type && this._openPopupOnPressEvent(a), i && this._setActionResolver(r, "open", i), void r.ojPopup("open", a, { of: t
                    })
                }
                l && r.ojPopup("refresh")
            }
            i && i(!0)
        }.bind(this))
    }, b.prototype._openPopupOnPressEvent = function(e) {
        this._inPressEvent = !0, e[0].addEventListener("click", this._eatChangeAndClickOnPress, !0), e[0].addEventListener("change", this._eatChangeAndClickOnPress, !0), e.one("touchend", function() {
            setTimeout(function() {
                this._inPressEvent = !1
            }, 50)
        })
    }, b.prototype._eatChangeAndClickOnPress = function(e) {
        this._inPressEvent && (e.preventDefault(), e.stopPropagation(), "click" === e.type && (this._inPressEvent = !1))
    }, b.prototype._canOpenPopup = function() {
        var e = this.GetComponent().options,
            t = e.disabled || !1,
            i = e.readOnly || !1;
        return !(t || i)
    }, b.prototype._updatePopupIfOpenOrComponentHasFocus = function() {
        var e, t, i, n;
        null != this.GetLauncher() && (i = this.GetLauncher()[0].contains(document.activeElement), this._isPopupInitialized() ? (n = this._getPopupElement()).ojPopup("isOpen") && ((e = this._buildPopupHtml()) ? ((t = A.getPopupContentNode(n)).innerHTML = "", t.innerHTML = e, n.ojPopup("refresh")) : n.ojPopup("close")) : i && (e = this._buildPopupHtml()) && this._openPopup(void 0))
    }, b.prototype._unregisterLauncherEvents = function() {
        var e = this.GetLauncher();
        e.off(b._OPEN_NAMESPACE), e.off(b._CLOSE_NAMESPACE), e[0].removeEventListener("click", this._eatChangeAndClickOnPress, !0), e[0].removeEventListener("change", this._eatChangeAndClickOnPress, !0), v.isTouchSupported() && (e.ojHammer().off("press"), e.ojHammer("destroy"), e.off("contextmenu", this._eatContextMenuOnOpenPopupListener), this._eatContextMenuOnOpenPopupListener = null, this._inPressEvent = null), this._openPopupCallback = null, this._closePopupCallback = null
    }, b.prototype._registerLauncherEvents = function() {
        var e, t, i, n, s, o, a, r, l = this.GetLauncher();
        (n = (i = b._DEFAULTS_BY_COMPONENT[this.GetComponent().widgetName]) ? i.events : b._DEFAULTS_BY_COMPONENT.default.events).open && ((a = this._openPopupCallback) || (a = this._openPopup.bind(this), this._openPopupCallback = a), r = n.open.indexOf("press"), o = this._getNamespacedEvents(n.open.replace("press", ""), b._OPEN_NAMESPACE), l.on(o, a), v.isTouchSupported() && -1 !== r && (this._eatContextMenuOnOpenPopupListener = function() {
            return !1
        }, l.on("contextmenu", this._eatContextMenuOnOpenPopupListener), s = {
            recognizers: [
                [m.Press, {
                    time: 750
                }]
            ]
        }, l.ojHammer(s).on("press", a))), n.close && ((t = this._closePopupCallback) || (t = this._closePopup.bind(this), this._closePopupCallback = t), e = this._getNamespacedEvents(n.close, b._CLOSE_NAMESPACE), l.on(e, t))
    }, b.prototype._getNamespacedEvents = function(e, t) {
        var i, n, s;
        if ("" === e || "" === t) return e;
        s = (i = e.split(" ")).length, n = [];
        for (var o = 0; o < s; o++) i[o] && n.push(i[o] + t);
        return n.join(" ")
    }, b.prototype._getPopupPosition = function() {
        var e, t, i;
        return (e = (t = b._DEFAULTS_BY_COMPONENT[this.GetComponent().widgetName]) ? t.position : b._DEFAULTS_BY_COMPONENT.default.position) && ("launcher" === e ? i = this.GetLauncher() : "launcher-wrapper" === e && (i = this.GetLauncher().parent())), i || (i = this.GetComponent().widget()), {
            my: "start bottom",
            at: "end top",
            collision: "flipcenter",
            of: i
        }
    }, b.prototype._getPopupElement = function() {
        var e, t;
        if (this.$messagingContentRoot) return this.$messagingContentRoot;
        if (e = A.getNextFreePopup(), t = this._getPopupPosition(), e.ojPopup("option", "position", t), e.ojPopup("option", "beforeClose", this._popupBeforeCloseCallback.bind(this)), e.ojPopup("option", "close", this._popupCloseCallback.bind(this)), e.ojPopup("option", "open", this._popupOpenCallback.bind(this)), this.GetComponent()._IsCustomElement()) {
            var i = (o.parseJSONFromFontFamily("oj-messaging-popup-option-defaults") || {}).animation;
            i.actionPrefix = "notewindow", e.ojPopup("option", "animation", i), this._addAnimateEventListeners(e)
        } else e.ojPopup("option", "animation", null);
        return this.$messagingContentRoot = e, this.$messagingContentRoot
    }, b.prototype._popupOpenCallback = function(e) {
        var t = n(e.target),
            s = this;
        window.setTimeout(function() {
            i.isComponentInitialized(t, "ojPopup") ? t.ojPopup("option", "autoDismiss", "focusLoss") : delete s.$messagingContentRoot
        }, 10)
    }, b.prototype._popupBeforeCloseCallback = function() {
        this._resolveBusyState = this._setBusyState("close")
    }, b.prototype._popupCloseCallback = function(e) {
        var t = this.GetLauncher(),
            s = n(e.target);
        this._removeAnimateEventListeners(s), i.isComponentInitialized(s, "ojPopup") && (s.ojPopup("option", "autoDismiss", "none"), s.ojPopup("option", "open", null), s.ojPopup("option", "close", null), s.ojPopup("option", "beforeClose", null)), t && t[0] && (t[0].removeEventListener("click", this._eatChangeAndClickOnPress, !0), t[0].removeEventListener("change", this._eatChangeAndClickOnPress, !0)), this.$messagingContentRoot = null, this._inPressEvent = null, A.getPopupContentNode(s).innerHTML = "", this._resolveBusyState && (this._resolveBusyState(), this._resolveBusyState = null)
    }, b.prototype._destroyTooltip = function() {
        this._closePopup(), A.destroyFreePopup()
    }, b.prototype._buildPopupHtml = function() {
        var e = !1,
            t = this.GetComponent().document[0],
            i = [],
            n = "";
        return this.ShowMessages() && i.push(this._buildMessagesHtml(t)), (this.ShowConverterHint() || this.ShowValidatorHint() || this.ShowTitle()) && i.push(this._buildHintsHtml(t)), i.forEach(function(i) {
            i && (e ? n = n.concat(R.getSeparatorHtml(t)) : e = !0, n = n.concat(i))
        }), n
    }, b.prototype._buildMessagesHtml = function(e) {
        var t, i = "",
            n = this.GetMaxSeverity();
        return this.HasMessages() && (t = this.GetMessages(), i = R.buildMessagesHtml(e, t, n, !1)), i
    }, b.prototype._buildHintsHtml = function(e) {
        var t, i, n = [],
            s = "";
        if (this.ShowConverterHint() && (t = (n = this.GetConverterHint()).length ? n[0] : "", s += R.buildHintHtml(e, b._SELECTOR_FORMCONTROL_HINT_CONVERTER, t, !1, b._SELECTOR_FORMCONTROL_HINT)), this.ShowValidatorHint())
            for (n = this.GetValidatorHints(), i = 0; i < n.length; i++) s += R.buildHintHtml(e, b._SELECTOR_FORMCONTROL_HINT_VALIDATOR, n[i], !1, b._SELECTOR_FORMCONTROL_HINT);
        return this.ShowTitle() && (s += R.buildHintHtml(e, b._SELECTOR_FORMCONTROL_HINT_TITLE, this.GetTitle(), !0, b._SELECTOR_FORMCONTROL_HINT)), s ? "<div class='oj-form-control-hints'>" + s + "</div>" : ""
    }, b.prototype._isPopupInitialized = function() {
        return !!this.$messagingContentRoot && i.isComponentInitialized(this.$messagingContentRoot, "ojPopup")
    }, R.buildHintHtml = function(e, t, i, n, s) {
        var o;
        if (i) {
            o = e.createElement("div");
            for (var a = s.split(" "), r = 0, l = a.length; r < l; ++r) o.classList.add(a[r]);
            o.classList.add(t), R._appendTextDom(o, R.GetTextDom(e, i, n))
        }
        return o ? o.outerHTML : ""
    }, R.getSeverityTranslatedString = function(e) {
        var t;
        switch (e) {
            case c.SEVERITY_LEVEL.FATAL:
                t = u.getTranslatedString("oj-message.fatal");
                break;
            case c.SEVERITY_LEVEL.ERROR:
                t = u.getTranslatedString("oj-message.error");
                break;
            case c.SEVERITY_LEVEL.WARNING:
                t = u.getTranslatedString("oj-message.warning");
                break;
            case c.SEVERITY_LEVEL.INFO:
                t = u.getTranslatedString("oj-message.info");
                break;
            case c.SEVERITY_LEVEL.CONFIRMATION:
                t = u.getTranslatedString("oj-message.confirmation")
        }
        return t
    }, R.getSeparatorHtml = function(e) {
        var t;
        return (t = n(e.createElement("hr"))) ? t.get(0).outerHTML : ""
    }, R.buildMessagesHtml = function(e, t, i, n) {
        var s, o, a, r, l, d, h, u, _ = "",
            p = [],
            g = {};
        for (o = 0; o < t.length; o++) l = (r = t[o]) instanceof c ? r : new c(r.summary, r.detail, r.severity), g[d = c.getSeverityLevel(l.severity)] || (g[d] = []), g[d].push(l);
        for (o = i; o >= c.SEVERITY_LEVEL.CONFIRMATION; o--)
            for (p = g[o] || [], a = 0; a < p.length; a++) r = p[a], d = c.getSeverityLevel(r.severity), h = R.getSeverityTranslatedString(d), u = r.summary || h, s = r.detail || "", _ = _.concat(R.buildMessageHtml(e, u, s, d, n));
        return _
    }, R.buildMessageHtml = function(e, t, i, n, s) {
        var a, r, l, d, h, u = R.getSeverityTranslatedString(n);
        if ((l = e.createElement("div")).classList.add(R._SELECTOR_MESSAGE), s)
            for (var c = R._getSeveritySelector(n).split(" "), _ = 0, p = c.length; _ < p; ++_) l.classList.add(c[_]);
        d = e.createElement("span");
        for (var g = R._getSeverityIconSelector(n).split(" "), m = 0, f = g.length; m < f; ++m) d.classList.add(g[m]);
        if (null == u ? d.removeAttribute("title") : d.setAttribute("title", u), d.setAttribute("role", "img"), l.appendChild(d), (a = e.createElement("span")).classList.add(R._SELECTOR_MESSAGE_CONTENT), "header" === (o.parseJSONFromFontFamily("oj-messaging-popup-option-defaults") || {}).messageSummaryOptionDefault && ((h = e.createElement("div")).classList.add(R._SELECTOR_MESSAGE_SUMMARY), h.textContent = t, a.appendChild(h)), i) {
            var v = R.GetTextDom(e, i, !0);
            (r = e.createElement("div")).classList.add(R._SELECTOR_MESSAGE_DETAIL), R._appendTextDom(r, v), a.appendChild(r)
        }
        return l.appendChild(a), l.outerHTML
    }, R._getSeverityIconSelector = function(e) {
        var t;
        switch (e) {
            case c.SEVERITY_LEVEL.FATAL:
            case c.SEVERITY_LEVEL.ERROR:
                t = R._SELECTOR_MESSAGE_ERROR_ICON;
                break;
            case c.SEVERITY_LEVEL.WARNING:
                t = R._SELECTOR_MESSAGE_WARNING_ICON;
                break;
            case c.SEVERITY_LEVEL.INFO:
                t = R._SELECTOR_MESSAGE_INFO_ICON;
                break;
            case c.SEVERITY_LEVEL.CONFIRMATION:
                t = R._SELECTOR_MESSAGE_CONFIRMATION_ICON
        }
        return R._DEFAULT_STATUS_ICON_SELECTORS + t
    }, R._getSeveritySelector = function(e) {
        var t;
        switch (e) {
            case c.SEVERITY_LEVEL.FATAL:
            case c.SEVERITY_LEVEL.ERROR:
                t = R._SELECTOR_MESSAGE_ERROR;
                break;
            case c.SEVERITY_LEVEL.WARNING:
                t = R._SELECTOR_MESSAGE_WARNING;
                break;
            case c.SEVERITY_LEVEL.INFO:
                t = R._SELECTOR_MESSAGE_INFO;
                break;
            case c.SEVERITY_LEVEL.CONFIRMATION:
            default:
                t = R._SELECTOR_MESSAGE_CONFIRMATION
        }
        return t
    }, R.GetTextDom = function(e, i, n) {
        var s = null;
        return t.StringUtils.isString(i) && (n && v.isHTMLContent(i) ? s = v.cleanHtml(i.substring(6, i.length - 7)) : (s = e.createElement("span")).textContent = i), s
    }, R._appendTextDom = function(e, i) {
        t.StringUtils.isString(i) ? e.innerHTML = i : e.appendChild(i)
    }, R._DEFAULT_STATUS_ICON_SELECTORS = "oj-component-icon oj-message-status-icon ", R._SELECTOR_MESSAGE = "oj-message", R._SELECTOR_MESSAGE_SUMMARY = "oj-message-summary", R._SELECTOR_MESSAGE_DETAIL = "oj-message-detail", R._SELECTOR_MESSAGE_CONTENT = "oj-message-content", R._SELECTOR_MESSAGE_ERROR_ICON = "oj-message-error-icon", R._SELECTOR_MESSAGE_WARNING_ICON = "oj-message-warning-icon", R._SELECTOR_MESSAGE_INFO_ICON = "oj-message-info-icon", R._SELECTOR_MESSAGE_CONFIRMATION_ICON = "oj-message-confirmation-icon", R._SELECTOR_MESSAGE_ERROR = "oj-message-error", R._SELECTOR_MESSAGE_WARNING = "oj-message-warning", R._SELECTOR_MESSAGE_INFO = "oj-message-info", R._SELECTOR_MESSAGE_CONFIRMATION = "oj-message-confirmation", A.getNextFreePopup = function() {
        var e, t = A._getPool(),
            i = t.find("." + A._SELECTOR_MESSAGING);
        if (0 === i.length) {
            (e = n(A._getPopupContentHtml()))[0].style.display = "none", e.appendTo(t);
            e.ojPopup({
                initialFocus: "none",
                tail: "simple",
                autoDismiss: "none",
                modality: "modeless",
                animation: {
                    open: null,
                    close: null
                }
            })
        } else e = n(i[0]);
        return e
    }, A.getPopupContentNode = function(e) {
        return e.find("." + A._SELECTOR_MESSAGING_CONTAINER)[0]
    }, A.destroyFreePopup = function() {
        var e;
        if (A._getFreePoolCount() > 0) {
            var t = (e = A.getNextFreePopup())[0];
            e.ojPopup("destroy"), t.parentNode.removeChild(t)
        }
    }, A._getPool = function() {
        var e = n("#" + A._MESSAGING_POPUP_POOL_ID);
        if (e.length > 0) return e;
        var t = (e = n("<div>"))[0];
        return t.setAttribute("id", A._MESSAGING_POPUP_POOL_ID), t.setAttribute("role", "presentation"), document.body.appendChild(t), e
    }, A._getFreePoolCount = function() {
        return A._getPool().find("." + A._SELECTOR_MESSAGING).length
    }, A._getPopupContentHtml = function() {
        return '<div class="' + A._SELECTOR_MESSAGING + '"><div class="' + A._SELECTOR_MESSAGING_CONTAINER + '"></div></div>'
    }, A._SELECTOR_MESSAGING_CONTAINER = "oj-messaging-popup-container", A._SELECTOR_MESSAGING = "oj-messaging-popup", A._MESSAGING_POPUP_POOL_ID = "__oj_messaging_popup_pool";
    const T = function(e, t) {
        this.Init(e), this._userAssistanceDivElement = t
    };
    t.Object.createSubclass(T, t.MessagingStrategy, "InlineHelpHintsStrategy"), T.prototype.activate = function(e) {
        T.superclass.activate.call(this, e), this._createInlineHelpHints()
    }, T.prototype.reactivate = function(e, t) {
        T.superclass.reactivate.call(this, e), this._userAssistanceDivElement = t, this._isContainerRootDomInDocument() || this._createInlineHelpHints()
    }, T.prototype.shouldUpdate = function(e) {
        let t = !(!e || void 0 === e.title),
            i = !(!e || void 0 === e.validatorHint),
            n = !(!e || void 0 === e.converterHint);
        return t || i || n
    }, T.prototype.update = function() {
        T.superclass.update.call(this), this._updateInlineHelpHints()
    }, T.prototype.deactivate = function() {
        var e = this.GetComponent()._getRootElement();
        this._removeHelpHintsContainerAndContent(), this._focusinCallback && this._deleteFocusEventHandlers(e), this._deleteHelpHintsAttributeEventHandlers(e), T.superclass.deactivate.call(this)
    }, T.prototype._createInlineHelpHints = function() {
        var e = this.GetComponent();
        let t = e._ShowHelpHints();
        "always" === t && this._addHelpHintsContent(e), "focus" === t && this._createFocusEventHandlers(e), this._createHelpHintsAttributeEventHandlers(e)
    }, T.prototype._createFocusEventHandlers = function(e) {
        var t = e._getRootElement();
        this._focusinCallback = T._focusinHandler.bind(this, e), t.addEventListener("focusin", this._focusinCallback), this._focusoutCallback = T._focusoutHandler.bind(this), t.addEventListener("focusout", this._focusoutCallback)
    }, T.prototype._deleteFocusEventHandlers = function(e) {
        e.removeEventListener("focusin", this._focusinCallback), delete this._focusinCallback, e.removeEventListener("focusout", this._focusoutCallback), delete this._focusoutCallback
    }, T.prototype._createHelpHintsAttributeEventHandlers = function(e) {
        var t = e._getRootElement();
        this._helpHintsChangedCallback = T._helpHintsChangedHandler.bind(this), t.addEventListener("helpHintsChanged", this._helpHintsChangedCallback)
    }, T.prototype._deleteHelpHintsAttributeEventHandlers = function(e) {
        e.removeEventListener("helpHintsChanged", this._helpHintsChangedCallback), delete this._helpHintsChangedCallback
    }, T.prototype._getHelpHintsInlineContainer = function(e) {
        return e.querySelector(".oj-helphints-inline-container")
    }, T.prototype._isContainerRootDomInDocument = function() {
        let e = !1;
        if (this.containerRoot) {
            let t = this.containerRoot.id;
            e = document.getElementById(t)
        }
        return null !== e
    }, T._helpHintsChangedHandler = function(e) {
        this._updateInlineHelpHints()
    }, T.prototype._removeHelpHintsContainerAndContent = function() {
        var e = this.GetComponent()._getRootElement(),
            t = this._getHelpHintsInlineContainer(e);
        t && (this.RemoveAriaDescribedByForInlineMessaging(t), t.parentElement.removeChild(t), this._userAssistanceDivElement && (this._userAssistanceDivElement.classList.remove("oj-has-helphints"), this.containerRoot = null))
    }, T.prototype._addHelpHintsContent = function(e) {
        let t, i = e.options.help,
            s = i ? i.instruction : null,
            o = e.options.helpHints;
        if (s) {
            let e = R.GetTextDom(document, s, !0);
            t = e ? e.outerHTML : ""
        }
        if (!t && this.ShowValidatorHint()) {
            let e = this.GetValidatorHints();
            e.length > 0 && (t = e.join("<br/>"))
        }
        if (!t) {
            let e = o ? o.definition : null;
            e && (t = e)
        }
        if (!t && this.ShowConverterHint()) {
            let e = this.GetConverterHint();
            e.length > 0 && (t = e.join("<br/>"))
        }
        let a, r = o ? o.source : null;
        if (r && (a = this._getHelpSourceDom(r)), (t || a) && !this.containerRoot) {
            if (this.containerRoot = document.createElement("div"), this.containerRoot.classList.add("oj-helphints-inline-container"), n(this.containerRoot).uniqueId(), this.AddAriaDescribedByForInlineMessaging(this.containerRoot), "inline" === e._ShowHelpHintsLocation()) this._userAssistanceDivElement.appendChild(this.containerRoot);
            else {
                let t = e._GetFormControlContainer();
                t.parentElement.insertBefore(this.containerRoot, t)
            }
        }
        this.containerRoot && (t && (t = "<div>" + t + "</div>", this.containerRoot.innerHTML = t), a && this.containerRoot.appendChild(a), t || a || (this.containerRoot.innerHTML = ""));
        const l = "inline" === e._ShowHelpHintsLocation();
        return this._userAssistanceDivElement && l && (t || a ? this._userAssistanceDivElement.classList.add("oj-has-helphints") : this._userAssistanceDivElement.classList.remove("oj-has-helphints")), t || a
    }, T.prototype._getHelpSourceDom = function(e) {
        t.Assert.assertString(e);
        let i = document.createElement("div"),
            n = document.createElement("a");
        n.classList.add("oj-helphints-anchor"), n.setAttribute("tabindex", "0"), n.setAttribute("target", "_blank");
        try {
            v.validateURL(e), n.setAttribute("href", e)
        } catch (t) {
            throw new Error(t + ". The source option (" + e + ") is invalid.")
        }
        let s = u.getTranslatedString("oj-ojEditableValue.helpSourceText");
        return n.textContent = s, i.appendChild(n), v.makeFocusable({
            element: n,
            applyHighlight: !0,
            component: this.GetComponent()
        }), i
    }, T.prototype._updateInlineHelpHints = function() {
        const e = this.GetComponent();
        if (this.containerRoot && (this.containerRoot.innerHTML = ""), "always" === e._ShowHelpHints() || this._focusIn) {
            this._addHelpHintsContent(e) || this._removeHelpHintsContainerAndContent()
        }
    }, T._focusinHandler = function(e, t) {
        let i = t.currentTarget,
            n = t.relatedTarget;
        n && i.contains(n) || (this.containerRoot && (this.containerRoot.innerHTML = ""), this._focusIn = !0, this._addHelpHintsContent(e) ? this._animateOpen() : this._removeHelpHintsContainerAndContent())
    }, T._focusoutHandler = function(e) {
        let t = e.currentTarget,
            i = e.relatedTarget;
        if ((!i || !t.contains(i)) && (this._focusIn = !1, this.containerRoot && this.containerRoot.hasChildNodes())) {
            let e = "close",
                t = this._getDefaultAnimation().close;
            this._setBusyState();
            let i = this;
            C.startAnimation(this.containerRoot, "inline-hints-" + e, t, this.GetComponent()).then(() => {
                this._removeHelpHintsContainerAndContent(), i._clearBusyState()
            })
        }
    }, T.prototype._getDefaultAnimation = function() {
        return T._defaultAnimation || (T._defaultAnimation = {
            open: {
                effect: "fadeIn",
                duration: "200ms",
                timingFunction: "cubic-bezier(0.4,0,0.2,1)"
            },
            close: {
                effect: "fadeOut",
                duration: "200ms",
                timingFunction: "cubic-bezier(0.4,0,0.2,1)"
            }
        }), T._defaultAnimation
    }, T.prototype._animateOpen = function() {
        if (this.containerRoot && this.containerRoot.hasChildNodes()) {
            let e = this._getDefaultAnimation().open,
                t = "open";
            C.startAnimation(this.containerRoot, "inline-hints-" + t, e, this.GetComponent())
        }
    }, T.prototype._setBusyState = function() {
        if (!this._resolveBusyState) {
            let e = this.GetComponent()._getRootElement(),
                t = r.getContext(e).getBusyContext(),
                i = "The page is waiting for inline help hints ";
            e && e.id && (i += 'for "' + e.id + '" '), i += "to open/close", this._resolveBusyState = t.addBusyState({
                description: i
            })
        }
    }, T.prototype._clearBusyState = function() {
        this._resolveBusyState && (this._resolveBusyState(), this._resolveBusyState = null)
    };
    const I = function(e, t) {
        this.Init(e), this._parentElement = t
    };
    t.ComponentMessaging.registerMessagingStrategy(t.ComponentMessaging._STRATEGY_TYPE.INLINE, I), t.Object.createSubclass(I, t.MessagingStrategy, "oj.InlineMessagingStrategy"), I.prototype.activate = function(e) {
        I.superclass.activate.call(this, e)
    }, I.prototype.reactivate = function(e, t) {
        I.superclass.reactivate.call(this, e), this._parentElement = t, this._updateInlineMessage()
    }, I.prototype.shouldUpdate = function(e) {
        return !(!e || void 0 === e.validityState)
    }, I.prototype.update = function() {
        I.superclass.update.call(this), this._updateInlineMessage()
    }, I.prototype.deactivate = function() {
        this._removeMessagingContentRootDom(), I.superclass.deactivate.call(this)
    }, I.prototype._getDefaultAnimation = function() {
        if (!I._defaultAnimation) {
            var e = (o.parseJSONFromFontFamily("oj-messaging-inline-option-defaults") || {}).animation;
            I._defaultAnimation = e = e || {}
        }
        return I._defaultAnimation
    }, I.prototype._replaceAnimationOptions = function(e, i) {
        var n, s;
        t.StringUtils.isString(e) ? (s = !0, n = e + "") : (s = !1, n = JSON.stringify(e));
        for (var o = Object.keys(i), a = 0; a < o.length; a++) {
            var r = o[a];
            n = n.replace(new RegExp(r, "g"), i[r])
        }
        return s ? n : JSON.parse(n)
    }, I.prototype._determineAnimation = function(e, t) {
        var i, n, s, o = this._getDefaultAnimation();
        if (o) {
            var a, r = e[0],
                l = r.innerHTML,
                d = r.offsetHeight;
            r.innerHTML = t, a = r.offsetHeight, r.innerHTML = l, "noanimation" !== (i = a > d ? "open" : a < d ? "close" : "noanimation") && (n = o[i]) && (s = this._replaceAnimationOptions(n, {
                "#oldHeight": d + "px",
                "#newHeight": a + "px"
            }))
        }
        return {
            action: i,
            effect: s
        }
    }, I.prototype._setBusyState = function() {
        if (!this._resolveBusyState) {
            var e = this.GetComponent(),
                t = e ? e.element : null,
                i = t ? t[0] : null,
                n = r.getContext(i).getBusyContext(),
                s = "The page is waiting for inline message ";
            i && i.id && (s += 'for "' + i.id + '" '), s += "to open/close", this._resolveBusyState = n.addBusyState({
                description: s
            })
        }
    }, I.prototype._clearBusyState = function() {
        this._resolveBusyState && (this._resolveBusyState(), this._resolveBusyState = null)
    }, I.prototype._queueAction = function(e) {
        var t = this,
            i = this.$messagingContentRoot;
        if (t._inInlineMessagingAnimation) this._currentContentToShow = e;
        else {
            this._currentContentToShow = null, this._setBusyState(), "" !== e && this._addRemoveOjHasMessagesClass(e), this._timeoutId && clearTimeout(this._timeoutId);
            var n = this.GetComponent();
            if (n && n._NotifyMessagingStrategyQueueAction) {
                var s;
                if (!this._notifyQueueActionPromise) this._notifyQueueActionPromise = new Promise(function(e) {
                    s = e
                }), this._notifyQueueActionPromiseResolve = function() {
                    this._notifyQueueActionPromise = null, this._notifyQueueActionPromiseResolve = null, s()
                }.bind(this);
                n._NotifyMessagingStrategyQueueAction(this._notifyQueueActionPromise)
            }
            this._timeoutId = setTimeout(function() {
                if (t._timeoutId = null, i && i[0]) {
                    var n = t._determineAnimation(i, e),
                        s = n.action,
                        o = n.effect;
                    "noanimation" === s ? (i[0].innerHTML = e, t._addRemoveOjHasMessagesClass(e), t._clearBusyState(), t._notifyQueueActionPromiseResolve && t._notifyQueueActionPromiseResolve()) : ("close" === s ? i[0].setAttribute("aria-live", "off") : i[0].setAttribute("aria-live", "polite"), "open" === s && (i[0].innerHTML = e), t._inInlineMessagingAnimation = !0, C.startAnimation(i[0], "inline-" + s, o, t.GetComponent()).then(function() {
                        var n;
                        t._inInlineMessagingAnimation = !1, "close" === s && (i[0].setAttribute("aria-live", "polite"), i[0].innerHTML = e), null !== t._currentContentToShow ? (n = t._currentContentToShow, t._currentContentToShow = null, t._queueAction(n)) : ("" === e && t._addRemoveOjHasMessagesClass(e), t._clearBusyState(), t._notifyQueueActionPromiseResolve && t._notifyQueueActionPromiseResolve())
                    }))
                } else t._addRemoveOjHasMessagesClass(""), t._clearBusyState(), t._notifyQueueActionPromiseResolve && t._notifyQueueActionPromiseResolve()
            }, 0)
        }
    }, I.prototype._addRemoveOjHasMessagesClass = function(e) {
        this._parentElement && (e ? this._parentElement.classList.add("oj-has-messages") : (this._parentElement.classList.remove("oj-has-messages"), this._removeMessagingContentRootDom()))
    }, I.prototype._updateInlineMessage = function() {
        var e;
        e = this._buildInlineHtml();
        var t = this._isMessagingContentRootDomInDocument();
        e && !t && this._createInlineMessage(), this.$messagingContentRoot && this.$messagingContentRoot[0] && (this.GetComponent()._IsCustomElement() ? this._queueAction(e) : this.$messagingContentRoot[0].innerHTML = e)
    }, I.prototype._createInlineMessage = function() {
        this.$messagingContentRoot = n(this._getInlineContentHtml()), this.AddAriaDescribedByForInlineMessaging(this.$messagingContentRoot[0]), this._addAriaLive(this.$messagingContentRoot), this._parentElement ? this._parentElement.appendChild(this.$messagingContentRoot[0]) : this.GetComponent().widget()[0].appendChild(this.$messagingContentRoot[0])
    }, I.prototype._getInlineContentHtml = function() {
        return "<div class='oj-messaging-inline-container'></div>"
    }, I.prototype._removeMessagingContentRootDom = function() {
        if (this._isMessagingContentRootDomInDocument()) {
            this.RemoveAriaDescribedByForInlineMessaging(this.$messagingContentRoot[0]);
            let e = this.$messagingContentRoot[0].parentNode;
            e && e.removeChild(this.$messagingContentRoot[0])
        }
        this.$messagingContentRoot = null
    }, I.prototype._addAriaLive = function(e) {
        t.Assert.assertPrototype(e, n), e[0].setAttribute("aria-live", "polite")
    }, I.prototype._buildInlineHtml = function() {
        var e;
        return this.ShowMessages() ? (e = this.GetComponent().document[0], this._buildMessagesHtml(e)) : ""
    }, I.prototype._buildMessagesHtml = function(e) {
        var t, i, n = "";
        return this.HasMessages() && (i = this.GetMessages(), t = this.GetMaxSeverity(), n = R.buildMessagesHtml(e, i, t, !0)), n
    }, I.prototype._isMessagingContentRootDomInDocument = function() {
        var e = !1;
        if (!this.$messagingContentRoot) return !1; {
            let t = this.$messagingContentRoot[0].id;
            e = document.getElementById(t)
        }
        return null !== e
    };
    const L = function(e, t) {
        this.Init(e), this._parentElement = t
    };
    t.Object.createSubclass(L, t.MessagingStrategy, "InlineRequiredStrategy"), L.prototype.activate = function(e) {
        L.superclass.activate.call(this, e), null == this.containerRoot && this._createOrUpdateInlineRequired()
    }, L.prototype.reactivate = function(e, t) {
        L.superclass.reactivate.call(this, e), this._parentElement = t, this._isContainerRootDomInDocument() || this._createOrUpdateInlineRequired()
    }, L.prototype.shouldUpdate = function(e) {
        return !(!e || !("hasNoValueToggled" in e))
    }, L.prototype.update = function() {
        this._createOrUpdateInlineRequired(), L.superclass.update.call(this)
    }, L.prototype.deactivate = function() {
        this._removeInlineRequired();
        var e = this.GetComponent()._getRootElement();
        e.removeEventListener("requiredChanged", this._requiredChangedCallback), delete this._requiredChangedCallback, e.removeEventListener("focusout", this._focusoutCallback), delete this._focusoutCallback, this._parentElement = null, L.superclass.deactivate.call(this)
    }, L.prototype._createOrUpdateInlineRequired = function() {
        var e = this.GetComponent();
        const t = e.options,
            i = e._getRootElement(),
            s = i.classList.contains("oj-has-no-value"),
            o = this._getRequiredInlineContainer();
        if (t.required && s && !o) {
            this.containerRoot = document.createElement("div"), this.containerRoot.classList.add("oj-required-inline-container");
            let t = u.getTranslatedString("oj-ojEditableValue.requiredText");
            this.containerRoot.textContent = t, n(this.containerRoot).uniqueId(), this._parentElement.appendChild(this.containerRoot), e._AriaRequiredUnsupported() && this.AddDescribedByToElement(i, this.containerRoot.id), this._focusoutCallback = this._focusoutHandler.bind(this, e), i.addEventListener("focusout", this._focusoutCallback)
        }
        t.required && !s && o && this._removeInlineRequired(), this._requiredChangedCallback || (this._requiredChangedCallback = this._requiredChangedHandler.bind(this, e), i.addEventListener("requiredChanged", this._requiredChangedCallback))
    }, L.prototype._removeInlineRequired = function() {
        const e = this.GetComponent();
        let t = this._getRequiredInlineContainer();
        t && e._AriaRequiredUnsupported() && this.RemoveDescribedByFromElement(e._getRootElement(), t.id), t && this._parentElement && (this._parentElement.removeChild(t), this.containerRoot = null)
    }, L.prototype._getRequiredInlineContainer = function() {
        return this._parentElement.querySelector(".oj-required-inline-container")
    }, L.prototype._requiredChangedHandler = function(e, t) {
        let i = t.detail.value,
            n = this._getRequiredInlineContainer();
        const s = e._getRootElement().classList.contains("oj-has-no-value");
        i && s && null === n ? this._createOrUpdateInlineRequired() : i || null === n || this._removeInlineRequired()
    }, L.prototype._focusoutHandler = function(e) {
        const t = this._getRequiredInlineContainer(),
            i = e._getRootElement(),
            n = e.options.required,
            s = i.classList.contains("oj-has-no-value");
        if (n && !s && null !== t) {
            let e = "close",
                t = this._getDefaultAnimation().close;
            this._setBusyState();
            let i = this;
            C.startAnimation(this.containerRoot, "inline-required-" + e, t, this.GetComponent()).then(() => {
                this._removeInlineRequired(), i._clearBusyState()
            })
        }
    }, L.prototype._isContainerRootDomInDocument = function() {
        let e = !1;
        if (this.containerRoot) {
            let t = this.containerRoot.id;
            e = document.getElementById(t)
        }
        return null !== e
    }, L.prototype._getDefaultAnimation = function() {
        return L._defaultAnimation || (L._defaultAnimation = {
            open: {
                effect: "fadeIn",
                duration: "200ms",
                timingFunction: "cubic-bezier(0.4,0,0.2,1)"
            },
            close: {
                effect: "fadeOut",
                duration: "200ms",
                timingFunction: "cubic-bezier(0.4,0,0.2,1)"
            }
        }), L._defaultAnimation
    }, L.prototype._setBusyState = function() {
        if (!this._resolveBusyState) {
            let e = this.GetComponent()._getRootElement(),
                t = r.getContext(e).getBusyContext(),
                i = "The page is waiting for inline required ";
            e && e.id && (i += 'for "' + e.id + '" '), i += "to open/close", this._resolveBusyState = t.addBusyState({
                description: i
            })
        }
    }, L.prototype._clearBusyState = function() {
        this._resolveBusyState && (this._resolveBusyState(), this._resolveBusyState = null)
    };
    var H = function(e) {
        this.Init(e), this._displayOptions = e
    };
    t.ComponentMessaging.registerMessagingStrategy(t.ComponentMessaging._STRATEGY_TYPE.USER_ASSISTANCE_INLINE, H), t.Object.createSubclass(H, t.MessagingStrategy, "InlineUserAssistanceStrategy"), H.prototype.activate = function(e) {
        H.superclass.activate.call(this, e), this._componentMessaging = e;
        const t = this.GetComponent(),
            i = t.options,
            n = t._getRootElement();
        this._readonlyChangedCallback = this._readonlyChangedHandler.bind(this, t), n.addEventListener("readonlyChanged", this._readonlyChangedCallback), this._disabledChangedCallback = this._disabledChangedHandler.bind(this, t), n.addEventListener("disabledChanged", this._disabledChangedCallback), this._userAssistanceDensityChangedCallback = this._userAssistanceDensityChangedHandler.bind(this, t), n.addEventListener("userAssistanceDensityChanged", this._userAssistanceDensityChangedCallback), null == this.containerRoot && this._createInlineContainer(), this._isDisabledOrReadonly() || this._activateContainerStrategies(e, i)
    }, H.prototype.reactivate = function(e) {
        H.superclass.reactivate.call(this, e);
        const t = this.GetComponent().options;
        this._isDisabledOrReadonly(t) || (this._isContainerRootDomInDocument() || this._createInlineContainer(), this._inlineMessagingStrategy ? (this._inlineMessagingStrategy.reactivate(e, this.containerRoot), this._inlineRequiredStrategy && this._inlineRequiredStrategy.reactivate(e, this.containerRoot), this._inlineHelpHintsStrategy && this._inlineHelpHintsStrategy.reactivate(e, this.containerRoot)) : this._activateContainerStrategies(this._componentMessaging, t))
    }, H.prototype.shouldUpdate = function(e) {
        return !this._isDisabledOrReadonly() && (this._shouldUpdateContent = e, !0)
    }, H.prototype.update = function() {
        H.superclass.update.call(this), this._inlineMessagingStrategy && (this._isDisabledOrReadonly() || (this._inlineMessagingStrategy.shouldUpdate(this._shouldUpdateContent) && this._inlineMessagingStrategy.update(), this._inlineRequiredStrategy && this._inlineRequiredStrategy.shouldUpdate(this._shouldUpdateContent) && this._inlineRequiredStrategy.update(), this._inlineHelpHintsStrategy && this._inlineHelpHintsStrategy.shouldUpdate(this._shouldUpdateContent) && this._inlineHelpHintsStrategy.update()))
    }, H.prototype.deactivate = function() {
        this._inlineMessagingStrategy.deactivate(), this._inlineRequiredStrategy && this._inlineRequiredStrategy.deactivate(), this._inlineHelpHintsStrategy && this._inlineHelpHintsStrategy.deactivate(), this._removeContainerRootDom(), delete this._inlineMessagingStrategy, delete this._inlineRequiredStrategy, delete this._inlineHelpHintsStrategy;
        const e = this.GetComponent()._getRootElement();
        e.removeEventListener("readonlyChanged", this._readonlyChangedCallback), delete this._readonlyChangedCallback, e.removeEventListener("disabledChanged", this._disabledChangedCallback), delete this._disabledChangedCallback, e.removeEventListener("userAssistanceDensityChanged", this._userAssistanceDensityChangedCallback), delete this._userAssistanceDensityChangedCallback, H.superclass.deactivate.call(this)
    }, H.prototype._createInlineContainer = function() {
        this.containerRoot = document.createElement("div"), this.containerRoot.classList.add("oj-user-assistance-inline-container");
        const e = this.GetComponent(),
            t = e.options.userAssistanceDensity;
        "efficient" === t ? this.containerRoot.classList.add("oj-efficient") : "reflow" === t && this.containerRoot.classList.add("oj-reflow"), n(this.containerRoot).uniqueId(), e.widget()[0].appendChild(this.containerRoot)
    }, H.prototype._removeContainerRootDom = function() {
        if (this._isContainerRootDomInDocument()) {
            let e = this.containerRoot.parentNode;
            e && e.removeChild(this.containerRoot)
        }
        this.containerRoot = null
    }, H.prototype._isContainerRootDomInDocument = function() {
        var e = !1;
        if (this.containerRoot) {
            let t = this.containerRoot.id;
            e = document.getElementById(t)
        }
        return null !== e
    }, H.prototype._activateContainerStrategies = function(e, t) {
        void 0 === this._inlineMessagingStrategy && (this._inlineMessagingStrategy = new I(this._displayOptions, this.containerRoot), this._inlineMessagingStrategy.activate(e)), void 0 !== t.required && void 0 === this._inlineRequiredStrategy && (this._inlineRequiredStrategy = new L(this._displayOptions, this.containerRoot), this._inlineRequiredStrategy.activate(e)), void 0 === this._inlineHelpHintsStrategy && (this._inlineHelpHintsStrategy = new T(this._displayOptions, this.containerRoot), this._inlineHelpHintsStrategy.activate(e))
    }, H.prototype._userAssistanceDensityChangedHandler = function(e, t) {
        let i = t.detail.value;
        "efficient" === i ? (this.containerRoot.classList.add("oj-efficient"), this.containerRoot.classList.remove("oj-reflow")) : "reflow" === i ? (this.containerRoot.classList.add("oj-reflow"), this.containerRoot.classList.remove("oj-efficient")) : (this.containerRoot.classList.remove("oj-efficient"), this.containerRoot.classList.remove("oj-reflow"))
    }, H.prototype._readonlyChangedHandler = function(e, t) {
        if (t.detail.value) this._deactivateContainerStrategies();
        else {
            const t = e.options;
            this._activateContainerStrategies(this._componentMessaging, t)
        }
    }, H.prototype._disabledChangedHandler = function(e, t) {
        if (t.detail.value) this._deactivateContainerStrategies();
        else {
            const t = e.options;
            this._activateContainerStrategies(this._componentMessaging, t)
        }
    }, H.prototype._deactivateContainerStrategies = function() {
        this._inlineMessagingStrategy && this._inlineMessagingStrategy.deactivate(), this._inlineRequiredStrategy && this._inlineRequiredStrategy.deactivate(), this._inlineHelpHintsStrategy && this._inlineHelpHintsStrategy.deactivate(), delete this._inlineMessagingStrategy, delete this._inlineRequiredStrategy, delete this._inlineHelpHintsStrategy
    }, H.prototype._isDisabledOrReadonly = function(e = this.GetComponent().options) {
        var t = e.disabled || !1,
            i = e.readOnly || !1;
        return t || i
    };
    const M = function(e) {
        this.Init(e)
    };
    t.ComponentMessaging.registerMessagingStrategy(t.ComponentMessaging._STRATEGY_TYPE.LABEL_EDGE_INSIDE_FORM_CNTRL, M), t.Object.createSubclass(M, y, "InsideFormControlLabelStrategy"), M.prototype.activate = function(e) {
        M.superclass.activate.call(this, e), this._CreateLabel()
    }, M.prototype.reactivate = function(e) {
        M.superclass.reactivate.call(this, e), this._DestroyLabel(), this._CreateLabel()
    }, M.prototype.shouldUpdate = function() {
        return !1
    }, M.prototype.update = function() {
        M.superclass.update.call(this)
    }, M.prototype.deactivate = function() {
        this._DestroyLabel(), M.superclass.deactivate.call(this)
    }, M.prototype._GetFormControlLabelStyleClass = function() {
        return "oj-form-control-label-inside"
    }, M.prototype._InsertOjLabel = function(e, t, i) {
        let n = i._getRootElement();
        n.insertBefore(e, n.firstElementChild)
    }, M.prototype._CreateEventHandlers = function(e, t, i, n) {
        M.superclass._CreateEventHandlers.call(this, e, t, i, n)
    }, M._labelHintChangedHandler = function(e, t) {
        e.textContent = t.detail.value
    };
    const V = function(e) {
        this.Init(e)
    };
    t.Object.createSubclass(V, t.MessagingStrategy, "oj.InsideLabelPlaceholderStrategy"), V.prototype.activate = function(e) {
        V.superclass.activate.call(this, e), this._createPlaceholderToggle()
    }, V.prototype.reactivate = function(e) {
        V.superclass.reactivate.call(this, e), this._destroyPlaceholderToggle(), this._createPlaceholderToggle()
    }, V.prototype.deactivate = function() {
        this._destroyPlaceholderToggle(), V.superclass.deactivate.call(this)
    }, V.prototype.shouldUpdate = function(e) {
        return e && void 0 !== e.converterHint || this.GetComponent().options.placeholder
    }, V.prototype.update = function() {
        V.superclass.update.call(this), this._placeholderChanged()
    }, V.prototype._destroyPlaceholderToggle = function() {
        var e = this.GetComponent(),
            t = e._GetContentElement()[0],
            i = e._getRootElement();
        this._blurCallback(), t.removeEventListener("focusout", this._blurCallback, !1), delete this._blurCallback, t.removeEventListener("focusin", this._focusCallback, !1), delete this._focusCallback, i.removeEventListener("placeholderChanged", this._placeholderChangedCallback, !1), delete this._placeholderChangedCallback, e._HasPlaceholderSet() && (e._SetPlaceholder(e.options.placeholder), e._customPlaceholderSet = !0)
    }, V.prototype._createPlaceholderToggle = function() {
        var e = this.GetComponent(),
            t = e._GetContentElement()[0],
            i = e._getRootElement();
        e._customPlaceholderSet = !0, this._blurCallback = V._blurHandler.bind(this, t), t.addEventListener("focusout", this._blurCallback, !1), this._focusCallback = V._focusHandler.bind(this), t.addEventListener("focusin", this._focusCallback, !1), this._placeholderChangedCallback = this._placeholderChanged.bind(this), i.addEventListener("placeholderChanged", this._placeholderChangedCallback, !1), this._placeholderChanged()
    }, V.prototype._placeholderChanged = function() {
        var e, t = this.GetComponent()._GetContentElement()[0];
        e = a.containsFocus(t) ? this._focusCallback : this._blurCallback, Promise.resolve(!0).then(function() {
            e()
        })
    }, V.ShowConverterHintAsPlaceholder = function(e) {
        var t = e.options.displayOptions;
        if (!t || "displayOptions" !== e._getResolvedUserAssistance()) return !1;
        var i = t.converterHint;
        return i instanceof Array ? "placeholder" === i[0] : "placeholder" === i
    }, V._focusHandler = function() {
        var e, t = this.GetComponent();
        if (V.ShowConverterHintAsPlaceholder(t)) {
            var i = this.GetConverterHint();
            e = i.length > 0 ? i[0] : null
        }
        e || (e = t.options.placeholder), t._SetPlaceholder(e)
    }, V._blurHandler = function(e) {
        if (e.hasAttribute("aria-haspopup")) {
            var t = e.getAttribute("aria-owns"),
                i = document.getElementById(t);
            if (a.containsFocus(i)) return
        }
        var n, s = this.GetComponent();
        if (V.ShowConverterHintAsPlaceholder(s)) {
            var o = this.GetConverterHint();
            n = o.length > 0 ? o[0] : null
        }
        n || (n = s.options.placeholder), null == n ? s._SetPlaceholder(null) : s._SetPlaceholder("")
    };
    const N = function(e) {
        this.Init(e), this._displayOptions = e
    };
    t.ComponentMessaging.registerMessagingStrategy(t.ComponentMessaging._STRATEGY_TYPE.LABEL_EDGE_INSIDE, N), t.Object.createSubclass(N, y, "oj.InsideLabelStrategy"), N.prototype.activate = function(e) {
        N.superclass.activate.call(this, e), this._componentMessaging = e;
        const t = this.GetComponent()._getRootElement();
        this._placeholderChangedCallback = this._placeholderChangedHandler.bind(this), t.addEventListener("placeholderChanged", this._placeholderChangedCallback), this._activatePlaceholderStrategyIfNeeded(e), this._CreateLabel()
    }, N.prototype.reactivate = function(e) {
        N.superclass.reactivate.call(this, e), this._DestroyLabel(), this._CreateLabel(), this._placeholderStrategy ? this._placeholderStrategy.reactivate(e) : this._activatePlaceholderStrategyIfNeeded(this._componentMessaging)
    }, N.prototype.shouldUpdate = function(e) {
        return !!this._placeholderStrategy && this._placeholderStrategy.shouldUpdate(e)
    }, N.prototype.update = function() {
        this._placeholderStrategy && this._placeholderStrategy.update()
    }, N.prototype.deactivate = function() {
        this._placeholderStrategy && (this._placeholderStrategy.deactivate(), delete this._placeholderStrategy);
        this.GetComponent()._getRootElement().removeEventListener("placeholderChanged", this._placeholderChangedCallback), delete this._placeholderChangedCallback, this._DestroyLabel(), N.superclass.deactivate.call(this)
    }, N.prototype._activatePlaceholderStrategyIfNeeded = function(e) {
        if (void 0 === this._placeholderStrategy) {
            let t = () => {
                let t = V;
                this._placeholderStrategy = new t(this._displayOptions), this._placeholderStrategy.activate(e)
            };
            const i = this.GetComponent();
            (i.options.placeholder || "displayOptions" === i._getResolvedUserAssistance() && V.ShowConverterHintAsPlaceholder(i)) && t()
        }
    }, N.prototype._placeholderChangedHandler = function() {
        this._activatePlaceholderStrategyIfNeeded(this._componentMessaging)
    }, N.prototype._GetContainer = function(e) {
        let t = e._GetFormControlContainer();
        if (!t) return null;
        let i = "_GetContentWrapper";
        return e[i] && (t = e[i]()), t
    }, N.prototype._GetFormControlLabelStyleClass = function() {
        return [N._BASE_STYLE_CLASS, "label", "inside".toLowerCase()].join("-")
    }, N.prototype._InsertOjLabel = function(e, t) {
        t.insertBefore(e, t.firstElementChild)
    }, N._BASE_STYLE_CLASS = "oj-text-field", e.EditableValueUtils = E, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojeditablevalue.js.map