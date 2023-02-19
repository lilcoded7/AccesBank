/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore", "ojs/ojjquery-hammer", "ojs/ojcomponentcore", "ojs/ojpopup", "ojs/ojcore-base", "jquery", "hammerjs", "ojs/ojlogger", "ojs/ojcontext", "ojs/ojdomutils"], function(e, t, i, o, s, n, r, l, p, a) {
    "use strict";
    var u;
    s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, p = p && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p, s.__registerWidget("oj.ojLabel", n.oj.baseComponent, {
        version: "1.0.0",
        defaultElement: "<label>",
        widgetEventPrefix: "oj",
        options: {
            for: null,
            help: {
                definition: null,
                source: null
            },
            labelId: null,
            showRequired: !1,
            rootAttributes: null
        },
        _BUNDLE_KEY: {
            _TOOLTIP_HELP: "tooltipHelp",
            _TOOLTIP_REQUIRED: "tooltipRequired"
        },
        widget: function() {
            return this.uiLabel
        },
        refresh: function() {
            this._super(), this._refreshRequired(), this._refreshHelp(), this._addIdsToDom()
        },
        _InitOptions: function(e, t) {
            this._super(e, t), this._isCustomElement = this._IsCustomElement(), this._checkRequiredOption()
        },
        _ComponentCreate: function() {
            this._super(), this._touchEatClickNamespace = this.eventNamespace + "TouchEatClick", this._touchEatContextMenuNamespace = this.eventNamespace + "TouchEatContextMenu", this._helpDefPopupNamespace = this.eventNamespace + "HelpDefPopup", this._bTouchSupported = a.isTouchSupported(), this._drawOnCreate()
        },
        _AfterCreate: function() {
            var e, t, i, o = this,
                s = this.options.for,
                n = this.options.showRequired;
            if (this.OuterWrapper && (e = this.OuterWrapper.getAttribute("data-oj-input-id"), t = this.OuterWrapper.getAttribute("data-oj-set-id")), e ? this.element[0].setAttribute("for", e) : t && (this._targetElement = document.getElementById(t), (i = this._targetElement) && (this._needsHelpIcon() && o._addHelpSpanIdOnTarget(o.helpSpanId, i), o.options.showRequired && o._addRequiredDescribedByOnCustomFormElement(i))), s && this._isCustomElement) {
                var r = p.getContext(this.OuterWrapper).getBusyContext().addBusyState({
                    description: "The oj-label id='" + this.OuterWrapper.id + "' is looking for its form component with id " + s
                });
                Promise.resolve().then(() => {
                    if (o._targetElement = document.getElementById(s), o._targetElement) {
                        i = o._targetElement;
                        var t = document.getElementById(o.helpSpanId);
                        if (o._needsHelpIcon() ? o._addHelpSpanIdOnTarget(o.helpSpanId, i) : t || i.getAttribute("described-by") !== o.helpSpanId || o._removeHelpSpanIdOnTarget(o.helpSpanId, i), n && o._addRequiredDescribedByOnCustomFormElement(i), !e)
                            if (o._isElementCustomElement(i)) {
                                var p = o.OuterWrapper.id;
                                o._addElementAttribute(i, p, "labelled-by")
                            } else o.element[0].setAttribute("for", s)
                    } else l.info("could not find an element with forOption " + s);
                    r()
                })
            } else this._isCustomElement && this.options.labelId && (this._targetElement = this._getTargetElementFromLabelledAttr("aria-labelledby", this.options.labelId), (i = this._targetElement) && this._needsHelpIcon() && this._addHelpSpanIdOnTarget(this.helpSpanId, i))
        },
        _SaveAttributes: function(e) {
            this._IsCustomElement() || (this._savedClasses = e.attr("class"))
        },
        _RestoreAttributes: function() {
            this._IsCustomElement() || (this._savedClasses ? this.element.attr("class", this._savedClasses) : this.element.removeAttr("class"))
        },
        _NotifyDetached: function() {
            this._superApply(arguments), this._handleCloseHelpDefPopup()
        },
        _NotifyHidden: function() {
            this._superApply(arguments), this._handleCloseHelpDefPopup()
        },
        _GetTranslationsSectionName: function() {
            return "oj-ojLabel"
        },
        _WatchedAttributeChanged: function(e, t, i) {
            switch (this._superApply(arguments), e) {
                case "data-oj-input-id":
                    this.element[0].setAttribute("for", i);
                    break;
                case "data-oj-set-id":
                    if (t && !i) {
                        let e = document.getElementById(t);
                        this._removeDescribedByWithPrefix(e, this.OuterWrapper.id)
                    } else {
                        this._targetElement = document.getElementById(i);
                        var o = this._targetElement,
                            s = this._needsHelpIcon(),
                            n = this.options.showRequired;
                        if (s || n) {
                            var r = p.getContext(this.OuterWrapper).getBusyContext(),
                                l = r.addBusyState({
                                    description: "The oj-label is writing described-by on its target."
                                }),
                                a = this;
                            Promise.resolve().then(() => {
                                s && a._addHelpSpanIdOnTarget(a.helpSpanId, o), a.options.showRequired && a._addRequiredDescribedByOnCustomFormElement(o), l()
                            })
                        }
                    }
            }
        },
        _removeDescribedByWithPrefix: function(e, t) {
            var i, o;
            o = (i = e.getAttribute("described-by")) ? i.split(/\s+/) : [], (i = (o = o.filter(function(e) {
                return -1 === e.indexOf(t)
            })).join(" ").trim()) ? e.setAttribute("described-by", i) : e.removeAttribute("described-by")
        },
        _drawOnCreate: function() {
            var e, t = null;
            this.OuterWrapper ? (this.uiLabel = n(this.OuterWrapper).append(this.element.wrap(this._createOjLabelGroupDom()).parent()), this.uiLabel.addClass("oj-label oj-component")) : this.uiLabel = this.element.wrap(this._createRootDomElement()).closest(".oj-component"), this._addIdsToDom(), e = this.element[0].id, this.helpSpanId = e + "_helpIcon", this.requiredSpanId = e + "_requiredIcon", this._isCustomElement || this._moveLabelStyleClassesToRootDom(), this.options.showRequired && this._createRequiredIconSpanDom(), this._needsHelpIcon() && (t = this._createIconSpan(this.helpSpanId, !0), this._createHelp(t))
        },
        _addRequiredDescribedByOnCustomFormElement: function(e) {
            e && this._isElementCustomElementAriaRequiredUnsupported(e) && this._addElementAttribute(e, this.requiredSpanId, "described-by")
        },
        _removeRequiredDescribedByOnCustomFormElement: function(e) {
            e && this._isElementCustomElementAriaRequiredUnsupported(e) && this._removeElementAttribute(e, this.requiredSpanId, "described-by")
        },
        _addHelpSpanIdOnTarget: function(e, t) {
            var i;
            i = this._getAriaAttributeForTarget(t), this._addElementAttribute(t, e, i)
        },
        _removeHelpSpanIdOnTarget: function(e, t) {
            var i;
            i = this._getAriaAttributeForTarget(t), this._removeElementAttribute(t, e, i)
        },
        _getAriaAttributeForTarget: function(e) {
            return this._isElementCustomElement(e) ? "described-by" : "group" === e.getAttribute("role") ? "aria-labelledby" : "aria-describedby"
        },
        _getTargetElementFromLabelledAttr: function(e, t) {
            var i;
            return i = "[" + e + "~='" + t + "']", document.querySelector(i)
        },
        _isElementCustomElement: function(e) {
            return s.Assert.assertDomElement(e), -1 !== e.tagName.indexOf("-")
        },
        _isElementCustomElementAriaRequiredUnsupported: function(e) {
            var t;
            s.Assert.assertDomElement(e);
            var i, o = ["oj-radioset", "oj-checkboxset"],
                n = o.length,
                r = !1;
            i = e.tagName.toLowerCase();
            for (var l = 0; l < n && !r; l++) t = o[l], 0 === i.indexOf(t) && (r = !0);
            return r
        },
        _addElementAttribute: function(e, t, i) {
            var o, s, n = e.getAttribute(i); - 1 === (s = n ? n.split(/\s+/) : []).indexOf(t) && s.push(t), o = s.join(" ").trim(), e.setAttribute(i, o)
        },
        _removeElementAttribute: function(e, t, i) {
            var o, s, n, r = e.getAttribute(i); - 1 !== (s = (n = r ? r.split(/\s+/) : []).indexOf(t)) && n.splice(s, 1), (o = n.join(" ").trim()) ? e.setAttribute(i, o) : e.setAttribute(i, "")
        },
        _createHelp: function(e) {
            var t = this.options.help.definition,
                i = this.options.help.source,
                o = this._createHelpIconAnchorDomElement(t, i);
            n(e).prepend(o), this._attachHelpDefToIconAnchor(), this._focusable({
                element: o,
                applyHighlight: !0
            })
        },
        _createRequiredIconSpanDom: function() {
            this._createIconSpan(this.requiredSpanId, !1).appendChild(this._createRequiredIconDomElement())
        },
        _checkRequiredOption: function() {
            var e = this.options.showRequired;
            if ("boolean" != typeof e) throw new Error("Option 'showRequired' has invalid value set: " + e)
        },
        _addIdsToDom: function() {
            this._isCustomElement && (this.OuterWrapper.id || n(this.OuterWrapper).uniqueId(), this._refreshLabelId()), null == this.element.attr("id") && this.element.uniqueId()
        },
        _moveLabelStyleClassesToRootDom: function() {
            var e, t, i, o = this.element.attr("class");
            if (o) {
                i = (e = o.split(/\s+/)).length;
                for (var s = 0; s < i; s++)(t = e[s]).includes("-label") && (this.uiLabel.addClass(t), this.element.removeClass(t))
            }
        },
        _createIconSpan: function(e, t) {
            var i = document.createElement("span");
            return i.setAttribute("id", e), t ? this.uiLabel.find(".oj-label-group").prepend(i) : this.element.before(i), i
        },
        _createRootDomElement: function() {
            var e, t, i = this.options.rootAttributes,
                o = "oj-label oj-component";
            return i && (e = i.class), e && (o = o + " " + e), (t = document.createElement("div")).className = o, t.appendChild(this._createOjLabelGroupDom()), t
        },
        _createOjLabelGroupDom: function() {
            var e;
            return (e = document.createElement("div")).className = "oj-label-group", e
        },
        _createRequiredIconDomElement: function() {
            var e = this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_REQUIRED),
                t = document.createElement("span");
            return t.className = "oj-label-required-icon oj-component-icon", t.setAttribute("role", "img"), t.setAttribute("title", e), t.setAttribute("aria-label", e), t
        },
        _createHelpIconAnchorDomElement: function(e, t) {
            var i;
            if ((i = document.createElement("a")).setAttribute("tabindex", "0"), i.setAttribute("target", "_blank"), i.className = "oj-label-help-icon-anchor oj-label-help-icon oj-component-icon oj-clickable-icon-nocontext", t) try {
                a.validateURL(t), i.setAttribute("href", t)
            } catch (e) {
                throw new Error(e + ". The source option (" + t + ") is invalid.")
            } else i.setAttribute("role", "img");
            return e ? i.setAttribute("aria-label", e) : i.setAttribute("aria-label", this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_HELP)), i
        },
        _attachHelpDefToIconAnchor: function() {
            var e, t, i, o = this;
            0 !== (t = this.widget().find(".oj-label-help-icon-anchor")).length && (this._bTouchSupported && (this._eatClickOnHelpIconListener && this.widget().off(this._touchEatClickNamespace), this._eatClickOnHelpIconListener = function() {
                return !1
            }, t.on("contextmenu" + this._touchEatContextMenuNamespace, !1)), this._openPopupForHelpDefCallbackListener = function(s) {
                null == e && ((e = o._createHelpDefPopupDiv()).on("mouseleave" + o._helpDefPopupNamespace, o._mouseleaveClosePopupForHelpDefListener), e.on("mouseenter" + o._helpDefPopupNamespace, o._clearTimeoutOnPopupMouseEnterListener), i = {
                    my: "start bottom",
                    at: "end top",
                    collision: "flipcenter",
                    of: t
                }, e.ojPopup({
                    position: i,
                    modality: "modeless",
                    animation: {
                        open: null,
                        close: null
                    }
                })), o._handleOpenHelpDefPopup(s, e, t)
            }, this._mouseleaveClosePopupForHelpDefListener = function(i) {
                if (null != o._helpDefPopupDivId) {
                    const s = i.currentTarget === t[0],
                        n = i.currentTarget === e[0];
                    if (s || n) {
                        const t = p.getContext(o.element[0]).getBusyContext();
                        o.helpDefClosePopupBCResolved = t.addBusyState({
                            description: "The oj-label is closing the help popup.'"
                        }), o.closePopupTimer = setTimeout(function() {
                            e.ojPopup("close"), o._resolveHelpDefClosePopupTimoutBC()
                        }, 200)
                    }
                }
            }, this._clearTimeoutOnPopupMouseEnterListener = function() {
                o.closePopupTimer && (clearTimeout(o.closePopupTimer), o._resolveHelpDefClosePopupTimoutBC())
            }, this._addShowHelpDefinitionEventHandlers(t))
        },
        _createHelpDefPopupDiv: function() {
            var e, t, i, o, s = this.options.help.definition;
            return o = s || this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_HELP), this._helpDefPopupDivId ? (i = n(document.getElementById(this._helpDefPopupDivId))).length && i.find(".oj-label-help-popup-container").first().text(o) : ((t = document.createElement("div")).className = "oj-label-help-popup", t.style.display = "none", (i = n(t)).uniqueId(), this._helpDefPopupDivId = i.prop("id"), (e = document.createElement("div")).className = "oj-label-help-popup-container", t.appendChild(e), n(e).text(o), this.uiLabel.append(i)), i
        },
        _addShowHelpDefinitionEventHandlers: function(e) {
            var t;
            e.on("focusin" + this._helpDefPopupNamespace + " mouseenter" + this._helpDefPopupNamespace, this._openPopupForHelpDefCallbackListener), e.on("mouseleave" + this._helpDefPopupNamespace, this._mouseleaveClosePopupForHelpDefListener), this._bTouchSupported && (this.options.help.source ? (t = {
                recognizers: [
                    [r.Press, {
                        time: a.PRESS_HOLD_THRESHOLD
                    }]
                ]
            }, e.ojHammer(t), this._on(e, {
                press: this._openPopupForHelpDefCallbackListener
            })) : (t = {
                recognizers: [
                    [r.Tap],
                    [r.Press, {
                        time: a.PRESS_HOLD_THRESHOLD
                    }]
                ]
            }, e.ojHammer(t), this._on(e, {
                press: this._openPopupForHelpDefCallbackListener,
                tap: this._openPopupForHelpDefCallbackListener
            })))
        },
        _resolveHelpDefClosePopupTimoutBC: function() {
            this.closePopupTimer = null, this.helpDefClosePopupBCResolved && (this.helpDefClosePopupBCResolved(), delete this.helpDefClosePopupBCResolved)
        },
        _handleOpenHelpDefPopup: function(e, t, i) {
            if (this.closePopupTimer && (clearTimeout(this.closePopupTimer), this._resolveHelpDefClosePopupTimoutBC()), !t.ojPopup("isOpen"))
                if (this._bTouchSupported) {
                    if ("press" === e.type) {
                        var o = this.widget();
                        o.on("click" + this._touchEatClickNamespace, this._eatClickOnHelpIconListener);
                        var s = this;
                        t.on("ojclose", function() {
                            o.off(s._touchEatClickNamespace)
                        })
                    } else t.off("ojclose");
                    "press" !== e.type && "tap" !== e.type && (a.recentTouchStart() || "focusin" !== e.type && "mouseenter" !== e.type) || t.ojPopup("open", i)
                } else t.ojPopup("open", i)
        },
        _handleCloseHelpDefPopup: function() {
            null != this._helpDefPopupDivId && n(document.getElementById(this._helpDefPopupDivId)).ojPopup("close")
        },
        _removeHelpDefIconEventListeners: function(e) {
            this._bTouchSupported && (this.widget().off(this._touchEatClickNamespace), e.off(this._touchEatContextMenuNamespace), this._eatClickOnHelpIconListener = null, this._eatContextMenuOnHelpIconListener = null, e.ojHammer("destroy")), e.off(this._helpDefPopupNamespace), null != this._helpDefPopupDivId && n(document.getElementById(this._helpDefPopupDivId)).off(this._helpDefPopupNamespace), this._openPopupForHelpDefCallbackListener = null, this._mouseleaveClosePopupForHelpDefListener = null
        },
        _removeHelpDefPopup: function() {
            var e;
            null != this._helpDefPopupDivId && ((e = n(document.getElementById(this._helpDefPopupDivId))).length > 0 && (e.ojPopup("destroy"), e.remove()), this._helpDefPopupDivId = null)
        },
        _needsHelpIcon: function() {
            var e, t, i = this.options,
                o = i.help.source;
            return (t = "" !== o && null != o) || (t = "" !== (e = i.help.definition) && null != e), t
        },
        _refreshHelp: function() {
            var e, t, i = this.helpSpanId,
                o = this._targetElement;
            1 === (t = this.uiLabel.find(".oj-label-help-icon")).length && (this._removeHelpDefIconEventListeners(t), this._removeHelpDefPopup(), t.remove()), e = document.getElementById(i), this._needsHelpIcon() ? (null == e && (e = this._createIconSpan(i, !0)), this._createHelp(e), this._isCustomElement && o && this._addHelpSpanIdOnTarget(i, o)) : null !== e && (e.parentNode.removeChild(e), this._isCustomElement && o && this._removeHelpSpanIdOnTarget(i, o))
        },
        _refreshRequired: function() {
            var e, t, i = this.requiredSpanId;
            e = document.getElementById(i), this.options.showRequired ? e ? (t = this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_REQUIRED), this.uiLabel.find(".oj-label-required-icon").attr("title", t)) : (this._createRequiredIconSpanDom(), this._isCustomElement && this._addRequiredDescribedByOnCustomFormElement(this._targetElement)) : (null !== (e = document.getElementById(i)) && e.parentNode.removeChild(e), this._isCustomElement && this._removeRequiredDescribedByOnCustomFormElement(this._targetElement))
        },
        _refreshFor: function(e, t) {
            var i = this.element[0],
                o = this.OuterWrapper.id;
            if (e) {
                i.removeAttribute("for"), this.OuterWrapper.removeAttribute("data-oj-input-id");
                var s = document.getElementById(e);
                if (s) {
                    var n = s.getAttribute("labelled-by");
                    if (n)
                        if (n === o) s.removeAttribute("labelled-by");
                        else {
                            var r = n.split(/\s+/).filter(function(e) {
                                return e !== o
                            }).join(" ");
                            s.setAttribute("labelled-by", r)
                        }
                }
            }
            if (this._targetElement = document.getElementById(this.options.for), this._targetElement) {
                var l = this._targetElement;
                this._isElementCustomElement(l) ? (this._addElementAttribute(l, o, "labelled-by"), this._needsHelpIcon() && this._addHelpSpanIdOnTarget(this.helpSpanId, l), this.options.showRequired && this._addRequiredDescribedByOnCustomFormElement(l)) : i.setAttribute("for", t)
            }
        },
        _refreshLabelId: function() {
            var e, t;
            (e = this.options.labelId) ? this.element.attr("id", e): (t = this.uiLabel.attr("id")) && this.element.attr("id", t + "|label")
        },
        _setOption: function(e, t) {
            var i = this.options[e];
            switch (this._superApply(arguments), e) {
                case "showRequired":
                    this._refreshRequired();
                    break;
                case "help":
                    this._refreshHelp();
                    break;
                case "for":
                    this._isCustomElement && this._refreshFor(i, t);
                    break;
                case "labelId":
                    this._refreshLabelId()
            }
        },
        getNodeBySubId: function(e) {
            var t;
            return (t = this._super(e)) || "oj-label-help-icon" === e.subId && (t = this.widget().find(".oj-label-help-icon")[0]), t || null
        },
        getSubIdByNode: function(e) {
            var t = null;
            return null != e && e === this.widget().find(".oj-label-help-icon")[0] && (t = {
                subId: "oj-label-help-icon"
            }), t || this._superApply(arguments)
        },
        _destroy: function() {
            var e = this.uiLabel.find(".oj-label-help-icon");
            return this._removeHelpDefIconEventListeners(e), this._removeHelpDefPopup(), this.helpSpanId = null, this.requiredSpanId = null, this._isCustomElement = null, a.unwrap(this.element, this.uiLabel), this._super()
        }
    }), (u = {
        properties: {
            for: {
                type: "string"
            },
            help: {
                type: "object",
                value: {
                    definition: null,
                    source: null
                },
                properties: {
                    definition: {
                        type: "string"
                    },
                    source: {
                        type: "string"
                    }
                }
            },
            labelId: {
                type: "string"
            },
            showRequired: {
                type: "boolean",
                value: !1
            },
            translations: {
                type: "object",
                value: {},
                properties: {
                    tooltipHelp: {
                        type: "string"
                    },
                    tooltipRequired: {
                        type: "string"
                    }
                }
            }
        },
        methods: {
            getProperty: {},
            refresh: {},
            setProperties: {},
            setProperty: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        extension: {}
    }).extension._WIDGET_NAME = "ojLabel", u.extension._INNER_ELEM = "label", u.extension._GLOBAL_TRANSFER_ATTRS = ["accesskey"], u.extension._WATCHED_ATTRS = ["data-oj-input-id", "data-oj-set-id"], s.CustomElementBridge.register("oj-label", {
        metadata: u
    })
});
//# sourceMappingURL=ojlabel.js.map