/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["require", "exports", "ojs/ojcore", "ojs/ojknockout", "ojs/ojbutton", "ojs/ojjquery-hammer", "ojs/ojcore-base", "jquery", "knockout", "ojs/ojanimation", "ojs/ojdomutils", "ojs/ojcomponentcore", "ojs/ojcomposite", "ojs/ojcontext", "hammerjs", "ojs/ojlogger", "ojs/ojthemeutils", "ojs/ojtranslation"], function(e, t, o, s, i, n, a, r, p, u, c, l, d, m, h, g, _, f) {
    "use strict";
    a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r, m = m && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;

    function y(e) {
        this._composite = e.element, this.containerId = [e.unique, "mc"].join("_"), this._messagesContainerId = this.containerId, this.handleCloseIcon = this._handleCloseIcon.bind(this), this.close = this._closeMessage.bind(this), this.bindingsApplied = this._bindingsApplied.bind(this), this.disconnected = this._disconnected.bind(this), this.connected = this._connected.bind(this), this.propertyChanged = this._propertyChanged.bind(this), this.messageCreatedTime = (new Date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        }), this.handleKeydown = this._handleKeydown.bind(this), this._slotCounts = e.slotCounts, this._properties = e.properties, this._createObservables(), this._updateSeverityStyleClass(null)
    }

    function v(e, t) {
        this._element = e, this._operation = t, this._init()
    }
    y.prototype._connected = function(e) {
        var t = this._operationMediator;
        t && "none" === t.getPendingOperation() && this._isMessageOpen() && this._scheduleAutoClose()
    }, y.prototype._disconnected = function(e) {
        var t = this._operationMediator;
        t && "none" === t.getPendingOperation() && this._clearAutoClose()
    }, y.prototype._bindingsApplied = function(e) {
        this._openMessage()
    }, y.prototype._propertyChanged = function(e) {
        function t(e, t, o) {
            if ("external" === e.updatedFrom && e.property === t) {
                var s = e.subproperty;
                if (s) return [t, o].join(".") === s.path;
                var i = e.previousValue[o];
                return e.value[o] !== i
            }
            return !1
        }
        if (t(e, "message", "autoTimeout") && (this.computedMessageCloseSelectors(this._computeMessageCloseSelectors()), this._clearAutoClose(), this._scheduleAutoClose()), t(e, "message", "closeAffordance") && (this.hasCloseAffordance("defaults" === this._computeCloseAffordance()), this._unregisterSwipeHandler(), this._registerSwipeHandler()), t(e, "message", "icon") && (this.computedIconStyle(this._computeIconStyle()), this.computedIconClass(this._computeIconClass()), this.computedMessageContainerSelectors(this._computeMessageContainerSelectors())), (t(e, "message", "category") || t(e, "displayOptions", "category")) && (this.computedCategory(this._computeCategory()), this.computedMessageContainerSelectors(this._computeMessageContainerSelectors())), t(e, "message", "severity")) {
            const e = this.computedSeverity();
            this.computedSeverity(this._computeSeverity()), this.computedCategory(this._computeCategory()), this.computedIconClass(this._computeIconClass()), this.computedMessageContainerSelectors(this._computeMessageContainerSelectors()), this._updateSeverityStyleClass(e)
        }
        t(e, "message", "timestamp") && this.formattedTimestamp(this._formatTimestamp()), t(e, "message", "summary") && this.computedSummary(this._computeSummary()), t(e, "message", "detail") && (this.computedDetail(this._computeDetail()), this.computedMessageContainerSelectors(this._computeMessageContainerSelectors())), t(e, "translations", "labelCloseIcon") && this.computedLabelCloseIcon(this._computeLabelCloseIcon()), t(e, "translations", "categories") && this.computedCategory(this._computeCategory())
    }, y.prototype._registerSwipeHandler = function() {
        if (c.isTouchSupported() && "defaults" === this._computeCloseAffordance()) {
            var e = r(document.getElementById(this._messagesContainerId)),
                t = {
                    recognizers: [
                        [h.Swipe, {
                            direction: h.DIRECTION_ALL
                        }]
                    ],
                    cssProps: {
                        userSelect: "auto"
                    }
                },
                o = "rtl" === c.getReadingDirection() ? "swipeleft swipeup" : "swiperight swipeup";
            this._hammerSwipe = e.ojHammer(t).on(o, function(e) {
                e.preventDefault(), e.gesture && "mouse" !== e.gesture.pointerType && this._closeMessage()
            }.bind(this))
        }
    }, y.prototype._unregisterSwipeHandler = function() {
        if (c.isTouchSupported() && this._hammerSwipe) {
            var e = "rtl" === c.getReadingDirection() ? "swipeleft swipeup" : "swiperight swipeup";
            this._hammerSwipe.off(e), delete this._hammerSwipe
        }
    }, y.prototype._scheduleAutoClose = function() {
        this._computeAutoTimeout() > -1 && (this._autoCloseTimer = window.setTimeout(this._closeMessage.bind(this), this._computeAutoTimeout()))
    }, y.prototype._clearAutoClose = function() {
        isNaN(this._autoCloseTimer) || (window.clearTimeout(this._autoCloseTimer), delete this._autoCloseTimer)
    }, y.prototype._isMessageOpen = function() {
        var e = document.getElementById(this._messagesContainerId);
        return !(!e || !r(e).is(":visible"))
    }, y.prototype._closeMessage = function(e) {
        var t = document.getElementById(this._messagesContainerId);
        if (t) {
            this._unregisterSwipeHandler(), this._clearAutoClose();
            var o = this._operationMediator;
            if (o) {
                if (o.isOperationPending("close", this._closeMessage.bind(this, e))) return;
                o.destroy()
            }
            this._operationMediator = new v(this._composite, "close");
            var s = this._getAnimateOptionDefaults("close");
            u.startAnimation(t, "close", s, this._composite).then(function() {
                r(t).hide(), l.subtreeHidden(t);
                var o = {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            message: this._properties.message
                        }
                    },
                    s = new CustomEvent("ojClose", o);
                e && Object.defineProperty(s, "_originalEvent", {
                    value: e,
                    writable: !1
                }), this._composite.dispatchEvent(s)
            }.bind(this))
        }
    }, y.prototype._computeSeverity = function() {
        var e = this._properties.message;
        return a.StringUtils.isEmptyOrUndefined(e.severity) ? y._getMessageDefault("severity") : "fatal" === e.severity ? "error" : e.severity
    }, y.prototype._formatTimestamp = function() {
        var e = this._properties.message;
        if (!a.StringUtils.isEmptyOrUndefined(e.timestamp)) {
            var t = m.getContext(this._composite).getBusyContext().addBusyState({
                description: "oj-message is busy loading required libraries and processing timestamp"
            });
            this._getConverterPromise(e.timestamp).then(function(o) {
                try {
                    var s = o.format(e.timestamp);
                    this.formattedTimestamp(s)
                } catch (t) {
                    g.info("JET oj-message: Invalid value for message.timestamp: " + e.timestamp)
                } finally {
                    t()
                }
            }.bind(this))
        }
    }, y.prototype._getConverterPromise = function(t) {
        return new Promise(function(t, o) {
            e(["ojs/ojconverter-datetime"], function(e) {
                t(function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    return e && Object.keys(e).forEach(function(o) {
                        var s = Object.getOwnPropertyDescriptor(e, o);
                        Object.defineProperty(t, o, s.get ? s : {
                            enumerable: !0,
                            get: function() {
                                return e[o]
                            }
                        })
                    }), t.default = e, t
                }(e))
            }, o)
        }).then(function(e) {
            var o = this._isDateToday(t) ? "hh:mm a" : "MM/dd/yy, hh:mm a";
            return new e.IntlDateTimeConverter({
                pattern: o
            })
        }.bind(this))
    }, y.prototype._isDateToday = function(e) {
        var t = new Date,
            o = new Date(e);
        return t.getUTCFullYear() === o.getUTCFullYear() && t.getUTCMonth() === o.getUTCMonth() && t.getUTCDate() === o.getUTCDate()
    }, y.prototype._computeCategory = function() {
        var e = this._properties.displayOptions;
        if (!e || !e.category || "none" !== e.category) {
            var t = this._properties.message;
            if (!a.StringUtils.isEmptyOrUndefined(t.category)) return t.category;
            var o = this._computeSeverity(),
                s = this._properties.translations,
                i = s && s.categories ? s.categories[o] : void 0;
            return a.StringUtils.isEmptyOrUndefined(i) && (i = f.getComponentTranslations("oj-ojMessage").categories[o]), i
        }
    }, y.prototype._computeAutoTimeout = function() {
        var e = this._properties.message;
        return isNaN(e.autoTimeout) ? y._getMessageDefault("autoTimeout") : 0 === e.autoTimeout ? this._getThemedAutoTimeoutDefault() : e.autoTimeout
    }, y.prototype._computeIconStyle = function() {
        var e = this._properties.message;
        if (!a.StringUtils.isEmptyOrUndefined(e.icon)) return ["url('", e.icon, "') no-repeat"].join("")
    }, y.prototype._computeIconClass = function() {
        var e = this._properties.message;
        if (a.StringUtils.isEmptyOrUndefined(e.icon)) {
            var t = this._computeSeverity();
            if ("none" !== t) {
                var o = ["oj-component-icon", "oj-message-status-icon"];
                return o.push(["oj", "message", t, "icon"].join("-")), o.join(" ")
            }
        }
    }, y.prototype._computeCloseAffordance = function() {
        var e = this._properties.message;
        return a.StringUtils.isEmptyOrUndefined(e.closeAffordance) ? y._getMessageDefault("closeAffordance") : e.closeAffordance
    }, y.prototype._computeMessageCloseSelectors = function() {
        return this._computeAutoTimeout() > -1 ? "oj-message-close oj-message-auto-timeout-close" : "oj-message-close"
    }, y.prototype._computeMessageContainerSelectors = function() {
        let e = ["oj-message-container"];
        return this._computeIconStyle() || this._computeIconClass() || e.push("oj-message-no-icon"), this._isDetailShown() || e.push("oj-message-no-detail"), e.join(" ")
    }, y.prototype._computeSound = function() {
        var e = this._properties.message;
        return void 0 === e.sound ? y._getMessageDefault("sound") : e.sound
    }, y.prototype._computeLabelCloseIcon = function() {
        var e = this._properties.translations;
        return a.StringUtils.isEmptyOrUndefined(e.labelCloseIcon) ? f.getTranslatedString("oj-ojMessage.labelCloseIcon") : e.labelCloseIcon
    }, y.prototype._computeSummary = function() {
        var e = this._properties.message;
        if (!a.StringUtils.isEmptyOrUndefined(e.summary)) return e.summary
    }, y.prototype._computeDetail = function() {
        var e = this._properties.message;
        if (!a.StringUtils.isEmptyOrUndefined(e.detail)) return e.detail
    }, y.prototype._handleCloseIcon = function(e) {
        this._closeMessage(e)
    }, y.prototype._openMessage = function() {
        var e = document.getElementById(this._messagesContainerId);
        if (e)
            if (this._isInlinedChildOfOjMessages()) this._prepareMessageAtOpen();
            else {
                this._operationMediator = new v(this._composite, "open");
                var t = {
                    bubbles: !0,
                    cancelable: !1,
                    detail: {
                        message: this._properties.message
                    }
                };
                this._composite.dispatchEvent(new CustomEvent("ojBeforeOpen", t));
                var o = this._getAnimateOptionDefaults("open");
                u.startAnimation(e, "open", o, this._composite).then(function() {
                    t = {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            message: this._properties.message
                        }
                    }, this._prepareMessageAtOpen(), this._composite.dispatchEvent(new CustomEvent("ojOpen", t))
                }.bind(this))
            }
    }, y.prototype._isInlinedChildOfOjMessages = function() {
        var e = this._findMessagesAncestor();
        return e && !e.getProperty("messages")
    }, y.prototype._findMessagesAncestor = function() {
        for (var e = this._composite.parentElement; e; e = e.parentElement)
            if (e.nodeName.startsWith("OJ-")) return "OJ-MESSAGES" === e.nodeName ? e : null;
        return null
    }, y.prototype._isDetailShown = function() {
        return y._SLOT.DETAIL in this._slotCounts || (void 0 !== this._computeDetail() || void 0 !== this._computeCategory() && void 0 !== this._computeSummary())
    }, y.prototype._prepareMessageAtOpen = function() {
        var e = this._computeSound();
        "none" !== e && (this._initAudioContext(), this._playSound(e)), this._registerSwipeHandler(), this._scheduleAutoClose()
    }, y.prototype._handleKeydown = function(e) {
        e.defaultPrevented || "defaults" !== this._computeCloseAffordance() || e.keyCode !== r.ui.keyCode.ESCAPE && "Escape" !== e.key || (e.preventDefault(), this._closeMessage(e))
    }, y.prototype._playSound = function(e) {
        if ("defaults" !== e) {
            var t = document.createElement("AUDIO");
            t.src = e, t.addEventListener("error", function() {
                g.info(`JET oj-message: Failed to load media from URL in message.sound='${e}'.`)
            });
            var o = t.play();
            void 0 !== o && o.then(function() {}).catch(function(t) {
                g.info(`JET oj-message: Failed to play specified sound: '${e}'. Error: ${t}`)
            })
        } else if (void 0 === window.audioContext) g.info("JET oj-message: Failed to play default sound as the browser does not support Web Audio API");
        else {
            var s = window.audioContext.createGain();
            s.connect(window.audioContext.destination);
            var i = window.audioContext.createOscillator();
            i.connect(s), i.start(), i.stop(window.audioContext.currentTime + .01)
        }
    }, y.prototype._initAudioContext = function() {
        if (void 0 === window.audioContext) try {
            window.audioContext = new(window.AudioContext || window.webkitAudioContext)
        } catch (e) {}
    }, y.prototype._createObservables = function() {
        this.hasCloseAffordance = p.observable("defaults" === this._computeCloseAffordance()), this.computedIconStyle = p.observable(this._computeIconStyle()), this.computedIconClass = p.observable(this._computeIconClass()), this.computedSeverity = p.observable(this._computeSeverity()), this.computedCategory = p.observable(this._computeCategory()), this.formattedTimestamp = p.observable(this._formatTimestamp()), this.computedLabelCloseIcon = p.observable(this._computeLabelCloseIcon()), this.computedMessageCloseSelectors = p.observable(this._computeMessageCloseSelectors()), this.computedMessageContainerSelectors = p.observable(this._computeMessageContainerSelectors()), this.computedSummary = p.observable(this._computeSummary()), this.computedDetail = p.observable(this._computeDetail())
    }, y.prototype._updateSeverityStyleClass = function(e) {
        if (null != e) {
            const t = y._getStyleClassForSeverity(e);
            this._composite.classList.remove(t)
        }
        const t = y._getStyleClassForSeverity(this.computedSeverity());
        t && this._composite.classList.add(t)
    }, y._getMessageDefault = function(e) {
        return y._DEFAULTS.message[e]
    }, y._DEFAULTS = {
        autoTimeout: 4e3,
        animation: {
            open: {
                effect: "fadeIn",
                duration: "300ms"
            },
            close: {
                effect: "fadeOut",
                duration: "300ms"
            }
        },
        message: {
            severity: "none",
            autoTimeout: -1,
            closeAffordance: "defaults",
            sound: "none"
        }
    }, y._getStyleClassForSeverity = function(e) {
        return y._SEVERITY_STYLE_CLASS_MAP[e]
    }, y._SEVERITY_STYLE_CLASS_MAP = {
        confirmation: "oj-confirmation",
        error: "oj-error",
        info: "oj-info",
        warning: "oj-warning"
    }, y._SLOT = {
        DETAIL: "detail"
    }, y.prototype._getThemedAutoTimeoutDefault = function() {
        var e = _.parseJSONFromFontFamily("oj-message-option-defaults");
        return e && e.autoTimeout ? e.autoTimeout : y._DEFAULTS.autoTimeout
    }, y.prototype._getAnimateOptionDefaults = function(e) {
        return y._DEFAULTS.animation[e]
    }, v.prototype._init = function() {
        this._resolvedQueue = [], this._callback = this._eventHandler.bind(this);
        var e = this._operation,
            t = ["oj"];
        t.push(e.charAt(0).toUpperCase()), t.push(e.slice(1));
        var o = t.join("");
        this._eventType = o, this._element.addEventListener(o, this._callback);
        var s = m.getContext(this._element).getBusyContext(),
            i = {
                description: this._getBusyStateDescription.bind(this, this._element, this._operation)
            },
            n = s.addBusyState(i);
        this.addPromiseExecutor(function(e) {
            window.setImmediate(function() {
                e()
            })
        }.bind(this, n))
    }, v.prototype._getBusyStateDescription = function(e, t) {
        return `${e.nodeName} is busy animating on the ${t} operation`
    }, v.prototype._deliverResolved = function(e) {
        var t = this._resolvedQueue;
        this._resolvedQueue = [], e = e || this._operation, this._operation = null;
        for (var o = 0; o < t.length; o++) t[o](e)
    }, v.prototype.destroy = function() {
        this._deliverResolved("none"), this._callback = null, this._element = null, this._operation = null, this._eventType = null
    }, v.prototype._eventHandler = function(e) {
        e.target === this._element && (this._element.removeEventListener(e.type, this._callback), this._deliverResolved(), this._callback = null)
    }, v.prototype.getPendingOperation = function() {
        return this._operation ? this._operation : "none"
    }, v.prototype.addPromiseExecutor = function(e, t) {
        this._resolvedQueue.push(e)
    }, v.prototype.isOperationPending = function(e, t) {
        if (!this._element) return !1;
        var o = !1,
            s = this.getPendingOperation();
        return e === s ? (g.info(["JET oj-message: invoked a '", e, "' operation while pending animation of the same type of operation. ", "The second request will be ignored."].join("")), o = !0) : "none" !== s && (g.info(["JET oj-message: invoked a '", e, "' operation while pending animation of a '", s, "' operation. The second request will be invoked after the pending ", "operation completes."].join("")), this.addPromiseExecutor(t), o = !0), o
    };
    d.register("oj-message", {
        view: '<div :id="[[containerId]]" :class="[[computedMessageContainerSelectors]]" on-keydown="[[handleKeydown]]">  <div class="oj-message-header">    <div class="oj-message-leading-header" :title="[[computedCategory]]">      <oj-bind-if test="[[computedIconStyle]]">        <div class="oj-component-icon oj-message-status-icon oj-message-custom-icon"          role="presentation" :title="[[computedCategory]]"          :style.background="[[computedIconStyle]]">        </div>      </oj-bind-if>      <oj-bind-if test="[[computedIconClass]]">        <div role="presentation" :title="[[computedCategory]]" :class="[[computedIconClass]]">        </div>      </oj-bind-if>      <oj-bind-if test="[[computedCategory]]">        <div class="oj-message-category oj-message-title" tabindex="-1">          <h1 :title="[[computedCategory]]">            <oj-bind-text value="[[computedCategory]]"></oj-bind-text>           </h1>        </div>      </oj-bind-if>      <oj-bind-if test="[[!computedCategory() && computedSummary()]]">        <div class="oj-message-summary oj-message-title" tabindex="-1">          <oj-bind-text value="[[computedSummary]]"></oj-bind-text>        </div>      </oj-bind-if>    </div>    <div class="oj-message-trailing-header">      <oj-bind-if test="[[formattedTimestamp]]">        <div class="oj-message-timestamp">          <oj-bind-text value="[[formattedTimestamp]]"></oj-bind-text>         </div>      </oj-bind-if>      <oj-bind-if test="[[hasCloseAffordance]]">        <div :class="[[computedMessageCloseSelectors]]">          <oj-button class="oj-button-sm" display="icons" chroming="borderless" on-click="[[handleCloseIcon]]">            <span slot="startIcon" class="oj-fwk-icon oj-fwk-icon-cross"></span>            <span>              <oj-bind-text value="[[computedLabelCloseIcon]]"></oj-bind-text>            </span>          </oj-button>        </div>      </oj-bind-if>    </div>    </div>  <div class="oj-message-body">    <oj-bind-if test="[[computedCategory]]">      <div class="oj-message-summary">        <oj-bind-text value="[[computedSummary]]"></oj-bind-text>      </div>    </oj-bind-if>    <div class="oj-message-detail">      <oj-bind-slot name="detail">        <oj-bind-text value="[[computedDetail]]"></oj-bind-text>      </oj-bind-slot>    </div>  <div></div>',
        viewModel: y,
        metadata: {
            properties: {
                displayOptions: {
                    type: "object",
                    properties: {
                        category: {
                            type: "string",
                            enumValues: ["auto", "header", "none"],
                            value: "auto"
                        }
                    }
                },
                message: {
                    type: "object",
                    properties: {
                        autoTimeout: {
                            type: "number",
                            value: -1
                        },
                        category: {
                            type: "string",
                            value: ""
                        },
                        closeAffordance: {
                            type: "string",
                            enumValues: ["defaults", "none"],
                            value: "defaults"
                        },
                        detail: {
                            type: "string",
                            value: ""
                        },
                        icon: {
                            type: "string",
                            value: ""
                        },
                        severity: {
                            type: "string",
                            enumValues: ["confirmation", "error", "info", "none", "warning"],
                            value: "none"
                        },
                        sound: {
                            type: "string",
                            value: "none"
                        },
                        summary: {
                            type: "string",
                            value: ""
                        },
                        timestamp: {
                            type: "string",
                            value: ""
                        }
                    }
                },
                translations: {
                    type: "object",
                    value: {},
                    properties: {
                        categories: {
                            type: "object",
                            properties: {
                                confirmation: {
                                    type: "string"
                                },
                                error: {
                                    type: "string"
                                },
                                info: {
                                    type: "string"
                                },
                                warning: {
                                    type: "string"
                                }
                            }
                        },
                        labelCloseIcon: {
                            type: "string"
                        }
                    }
                }
            },
            methods: {
                close: {},
                getProperty: {},
                setProperties: {},
                setProperty: {},
                getNodeBySubId: {},
                getSubIdByNode: {}
            },
            events: {
                ojClose: {}
            },
            extension: {}
        }
    }), t.ojMessage = {}, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojmessage.js.map