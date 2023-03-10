/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "jquery", "ojs/ojthemeutils", "ojs/ojcomponentcore", "ojs/ojlogger"], function(t, e, s, o, n) {
    "use strict";
    var i;
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t.__registerWidget("oj.ojToolbar", e.oj.baseComponent, {
        widgetEventPrefix: "oj",
        options: {
            chroming: "borderless"
        },
        _InitOptions: function(t, e) {
            this._super(t, e), "disabled" in e && n.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.")
        },
        _ComponentCreate: function() {
            this._super();
            var t = this.element[0];
            t.setAttribute(o._OJ_CONTAINER_ATTR, this.widgetName), t.classList.add("oj-toolbar"), t.classList.add("oj-component"), t.setAttribute("role", "toolbar"), this._hasInitialFocusHandler = !1, this._setup()
        },
        _NotifyContextMenuGesture: function(t, e, s) {
            var o = this.element.find(":oj-button[tabindex=0]");
            this._OpenContextMenu(e, s, {
                launcher: o,
                position: { of: "keyboard" === s ? o.ojButton("widget") : e
                }
            })
        },
        _setOption: function(t, e) {
            "disabled" !== t ? (this._superApply(arguments), "chroming" === t && this._refreshChildren()) : n.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.  Ignoring the call.")
        },
        refresh: function() {
            this._super(), this._setup(), this._refreshTabindex()
        },
        _setup: function() {
            var t = this,
                s = this.element[0];
            if (this.isRtl = "rtl" === this._GetReadingDirection(), this.$enabledButtons = e(), this._IsCustomElement()) this._hasInitialFocusHandler || (this._focusinListener = function(e) {
                t._handleInitialFocus(e.target)
            }, s.addEventListener("focusin", this._focusinListener, !0), this._hasInitialFocusHandler = !0), this.topLevelChildren = s.querySelectorAll("oj-button, oj-menu-button, oj-buttonset-one, oj-buttonset-many"), this._refreshChildren();
            else {
                const s = ":oj-button";
                this.$buttons = this.element.find(s).off("keydown" + this.eventNamespace).on("keydown" + this.eventNamespace, function(s) {
                    t._handleKeyDown(s, e(this))
                }).off("click" + this.eventNamespace).on("click" + this.eventNamespace, function(s) {
                    e(this).ojButton("option", "disabled") || t._setTabStop(e(this))
                }).off("focus" + this.eventNamespace).on("focus" + this.eventNamespace, function(s) {
                    t._handleFocus(e(this))
                }), this.$buttonsets = this.element.find(":oj-buttonset").ojButtonset("refresh"), this.$topLevelButtons = this.$buttons.not(this.$buttonsets.find(s)).ojButton("refresh")
            }
        },
        _handleFocus: function(t) {
            this._IsCustomElement() || 0 !== this.$enabledButtons.length ? this._setTabStop(t) : (this.$enabledButtons = this.$buttons.filter(function() {
                return !e(this).ojButton("option", "disabled") && e(this).is(":visible")
            }), this._initTabindexes(null == this._lastTabStop), this.$enabledButtons[0].focus())
        },
        _isButtonDisabled: function(t) {
            var e;
            if ("OJ-BUTTON" === t.tagName || "OJ-MENU-BUTTON" === t.tagName) e = t.disabled;
            else if (!(e = t.parentNode.disabled)) {
                var s = t.querySelector("oj-option");
                e = s && s.disabled
            }
            return e
        },
        _handleInitialFocus: function(t) {
            var s = this,
                o = this.element[0];
            if (o.removeEventListener("focusin", this._focusinListener, !0), this._hasInitialFocusHandler = !1, this.topLevelChildren = o.querySelectorAll("oj-button, oj-menu-button, oj-buttonset-one, oj-buttonset-many"), !this._mutationObserver) {
                var n = ["OJ-BUTTON", "OJ-MENU-BUTTON", "OJ-BUTTONSET-ONE", "OJ-BUTTONSET-MANY", "OJ-OPTION"];
                this._disabledChangedListener = this.refresh.bind(this), this._mutationObserver = new MutationObserver(function(t) {
                    t.forEach(function(t) {
                        if ("childList" === t.type) {
                            var e;
                            if (t.addedNodes)
                                for (e = 0; e < t.addedNodes.length; e++) n.indexOf(t.addedNodes[e].nodeName) >= 0 && t.addedNodes[e].addEventListener("disabledChanged", s._disabledChangedListener);
                            if (t.removedNodes)
                                for (e = 0; e < t.removedNodes.length; e++) n.indexOf(t.removedNodes[e].nodeName) >= 0 && t.removedNodes[e].removeEventListener("disabledChanged", s._disabledChangedListener)
                        }
                    })
                }), this._mutationObserver.observe(o, {
                    childList: !0,
                    subtree: !0
                })
            }
            o.querySelectorAll("oj-button, oj-menu-button, oj-buttonset-one, oj-buttonset-many, oj-option").forEach(function(t) {
                t.removeEventListener("disabledChanged", s._disabledChangedListener), t.addEventListener("disabledChanged", s._disabledChangedListener)
            });
            var i = o.querySelectorAll("oj-button, oj-menu-button, oj-buttonset-one .oj-button, oj-buttonset-many .oj-button");
            if (this.$buttons = e(i).off("keydown" + this.eventNamespace).on("keydown" + this.eventNamespace, function(t) {
                    var o = e(this);
                    s._handleKeyDown(t, o)
                }).off("click" + this.eventNamespace).on("click" + this.eventNamespace, function(t) {
                    var o = e(this);
                    o.hasClass("oj-disabled") || s._setTabStop(o)
                }).off("focusin" + this.eventNamespace).on("focusin" + this.eventNamespace, function(t) {
                    var o = e(this);
                    s._handleFocus(o)
                }), this._IsCustomElement() ? this.$enabledButtons = this.$buttons.filter(function() {
                    return !s._isButtonDisabled(this) && e(this).is(":visible")
                }) : this.$enabledButtons = this.$buttons.filter(function() {
                    return !e(this).ojButton("option", "disabled") && e(this).is(":visible")
                }), this._initTabindexes(null == this._lastTabStop), this.$enabledButtons && this.$enabledButtons.length > 0)
                if (t)("INPUT" === t.nodeName ? t.parentElement : t).focus();
                else {
                    let t = this._getButtonFocusElem(this.$enabledButtons[0]);
                    t && t.focus()
                }
        },
        _refreshTabindex: function() {
            var t = this;
            this._IsCustomElement() ? this.$buttons = e(this.element[0].querySelectorAll("oj-button, oj-menu-button, oj-buttonset-one .oj-button, oj-buttonset-many .oj-button")) : this.$buttons = this.element.find(":oj-button"), void 0 !== this.$buttons && (this._IsCustomElement() ? this.$enabledButtons = this.$buttons.filter(function() {
                return !t._isButtonDisabled(this) && e(this).is(":visible")
            }) : this.$enabledButtons = this.$buttons.filter(function() {
                return !e(this).ojButton("option", "disabled") && e(this).is(":visible")
            }), this._initTabindexes(null == this._lastTabStop))
        },
        _getButtonFocusElem: function(t) {
            var e = t;
            if (void 0 !== t && this._IsCustomElement()) {
                var s = "button";
                t.classList.contains("oj-button-toggle") && (s = "input");
                for (var o = t.children, n = 0; n < o.length; n++) {
                    var i = o[n];
                    if (i.tagName.toLowerCase() === s) {
                        e = i;
                        break
                    }
                }
            }
            return e
        },
        _initTabindexes: function(t) {
            var s, o = e(this._lastTabStop);
            if (this._lastTabStop = void 0, this._IsCustomElement())
                for (var n = 0; n < this.$buttons.length; n++) this._getButtonFocusElem(this.$buttons[n]).setAttribute("tabindex", "-1");
            else this.$buttons.attr("tabindex", "-1");
            s = t || !o.is(this.$enabledButtons) ? this.$enabledButtons.first() : o, this._setTabStop(s)
        },
        _mapToTabbable: function(t) {
            for (var s = [], o = 0; o < this.$enabledButtons.length; o++) s.push(this._getButtonFocusElem(this.$enabledButtons[o]));
            var n = e(s);
            return t.map(function(t, e) {
                if ("radio" !== e.type || e.checked || "" === e.name) return e;
                var s = function(t, e) {
                    var s, o = t.name;
                    if (o) {
                        var n = ":radio[name='" + (o = o.replace(/'/g, "\\'")) + "']:oj-button";
                        s = e.filter(n)
                    } else s = e.filter(t).filter(":oj-button");
                    return s
                }(e, n).filter(":checked");
                return s.length ? s[0] : e
            })
        },
        _setTabStop: function(t) {
            var s = t,
                o = (s = this._IsCustomElement() ? this._mapToTabbable(e(this._getButtonFocusElem(s[0]))) : this._mapToTabbable(s))[0],
                n = this._lastTabStop;
            o !== n && (e(n).attr("tabindex", "-1"), s.attr("tabindex", "0"), this._lastTabStop = o)
        },
        _handleKeyDown: function(t, s) {
            switch (t.which) {
                case e.ui.keyCode.UP:
                case e.ui.keyCode.DOWN:
                    if ("radio" !== s.attr("type")) break;
                case e.ui.keyCode.LEFT:
                case e.ui.keyCode.RIGHT:
                    t.preventDefault(), this._IsCustomElement() ? this.$enabledButtons = this.$buttons.filter(function() {
                        return !e(this).hasClass("oj-disabled") && e(this).is(":visible")
                    }) : this.$enabledButtons = this.$buttons.filter(function() {
                        return !e(this).ojButton("option", "disabled") && e(this).is(":visible")
                    });
                    var o = this.$enabledButtons.length;
                    if (o < 2) break;
                    var n = (this.$enabledButtons.index(s) + (t.which === e.ui.keyCode.DOWN || t.which === e.ui.keyCode.RIGHT ^ this.isRtl ? 1 : -1) + o) % o;
                    this._getButtonFocusElem(this.$enabledButtons.eq(n)[0]).focus()
            }
        },
        _destroy: function() {
            var t = this.element[0];
            t.classList.remove("oj-toolbar"), t.classList.remove("oj-component"), t.removeAttribute(o._OJ_CONTAINER_ATTR), t.removeAttribute("role"), this.$buttons.attr("tabindex", "0"), this._refreshChildren()
        },
        _refreshChildren: function() {
            if (this._IsCustomElement())
                for (var t = 0; t < this.topLevelChildren.length; t++) {
                    var e = this.topLevelChildren[t];
                    "OJ-BUTTON" === e.tagName || "OJ-MENU-BUTTON" === e.tagName ? o.__GetWidgetConstructor(this._getButtonFocusElem(e), "ojButton") && e.refresh() : "OJ-BUTTONSET-ONE" !== e.tagName && "OJ-BUTTONSET-MANY" !== e.tagName || o.__GetWidgetConstructor(e, "ojButtonset") && e.refresh()
                } else this.$buttonsets.ojButtonset("refresh"), this.$topLevelButtons.ojButton("refresh")
        }
    }), o.setDefaultOptions({
        ojToolbar: {
            chroming: o.createDynamicPropertyGetter(function() {
                return s.getCachedCSSVarValues(["--oj-private-toolbar-global-chroming-default"])[0]
            })
        }
    }), (i = {
        properties: {
            chroming: {
                type: "string",
                enumValues: ["borderless", "full", "half", "outlined", "solid"]
            },
            translations: {
                type: "object",
                value: {}
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
    }).extension._WIDGET_NAME = "ojToolbar", t.CustomElementBridge.register("oj-toolbar", {
        metadata: t.CollectionUtils.mergeDeep(i, {
            properties: {
                chroming: {
                    binding: {
                        provide: [{
                            name: "containerChroming",
                            default: t.ThemeUtils.getCachedCSSVarValues(["--oj-private-toolbar-global-chroming-default"])[0]
                        }]
                    }
                }
            }
        })
    })
});
//# sourceMappingURL=ojtoolbar.js.map