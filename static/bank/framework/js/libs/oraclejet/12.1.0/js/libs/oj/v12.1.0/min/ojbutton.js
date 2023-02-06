/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojoption", "ojs/ojcore-base", "jquery", "ojs/ojdomutils", "ojs/ojthemeutils", "ojs/ojcomponentcore", "ojs/ojchildmutationobserver", "ojs/ojlabelledbyutils", "ojs/ojcustomelement-utils", "ojs/ojbutton2"], function(t, e, n, o, s, i, l, a, r, u) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
    var c = {
        properties: {
            chroming: {
                type: "string",
                enumValues: ["borderless", "full", "half", "outlined", "solid"]
            },
            disabled: {
                type: "boolean",
                value: !1
            },
            display: {
                type: "string",
                enumValues: ["all", "icons", "label"],
                value: "all"
            },
            label: {
                type: "string"
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
        events: {
            ojAction: {}
        },
        extension: {}
    };
    c.extension._WIDGET_NAME = "ojButton", c.extension._TRACK_CHILDREN = "nearestCustomElement", c.extension._GLOBAL_TRANSFER_ATTRS = ["href", "aria-label", "aria-labelledby", "aria-describedby"], e.CustomElementBridge.register("oj-menu-button", {
        metadata: c,
        innerDomFunction: function(t) {
            return t.getAttribute("href") ? "a" : "button"
        }
    });
    var h = {
        properties: {
            chroming: {
                type: "string",
                enumValues: ["borderless", "full", "half", "outlined", "solid"]
            },
            describedBy: {
                type: "string"
            },
            disabled: {
                type: "boolean",
                value: !1
            },
            display: {
                type: "string",
                enumValues: ["all", "icons", "label"],
                value: "all"
            },
            focusManagement: {
                type: "string",
                enumValues: ["none", "oneTabstop"],
                value: "oneTabstop"
            },
            labelledBy: {
                type: "string"
            },
            translations: {
                type: "object",
                value: {}
            },
            value: {
                type: "any",
                writeback: !0
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
    };
    h.extension._WIDGET_NAME = "ojButtonset", h.extension._ALIASED_PROPS = {
        value: "checked"
    }, e.CustomElementBridge.register("oj-buttonset-one", {
        metadata: h
    });
    var d = {
        properties: {
            chroming: {
                type: "string",
                enumValues: ["borderless", "full", "half", "outlined", "solid"]
            },
            describedBy: {
                type: "string"
            },
            disabled: {
                type: "boolean",
                value: !1
            },
            display: {
                type: "string",
                enumValues: ["all", "icons", "label"],
                value: "all"
            },
            focusManagement: {
                type: "string",
                enumValues: ["none", "oneTabstop"],
                value: "oneTabstop"
            },
            labelledBy: {
                type: "string"
            },
            translations: {
                type: "object",
                value: {}
            },
            value: {
                type: "Array<any>",
                writeback: !0
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
    };
    if (d.extension._WIDGET_NAME = "ojButtonset", d.extension._ALIASED_PROPS = {
            value: "checked"
        }, e.CustomElementBridge.register("oj-buttonset-many", {
            metadata: d
        }), e.ButtonLegacy) {
        var m = {
            properties: {
                chroming: {
                    type: "string",
                    enumValues: ["borderless", "callToAction", "danger", "full", "half", "outlined", "solid"]
                },
                disabled: {
                    type: "boolean",
                    value: !1
                },
                display: {
                    type: "string",
                    enumValues: ["all", "icons", "label"],
                    value: "all"
                },
                translations: {
                    type: "object",
                    value: {}
                }
            },
            methods: {
                refresh: {},
                setProperty: {},
                getProperty: {},
                setProperties: {},
                getNodeBySubId: {},
                getSubIdByNode: {}
            },
            events: {
                ojAction: {}
            },
            extension: {}
        };
        m.extension._WIDGET_NAME = "ojButton", m.extension._TRACK_CHILDREN = "nearestCustomElement", m.extension._GLOBAL_TRANSFER_ATTRS = ["href", "aria-label", "aria-labelledby", "aria-describedby"], e.CustomElementBridge.register("oj-button", {
            metadata: m,
            innerDomFunction: function(t) {
                return t.getAttribute("href") ? "a" : "button"
            }
        })
    }! function() {
        var t, u, c = "oj-button oj-component oj-enabled oj-default",
            h = "oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only",
            d = "oj-button-full-chrome oj-button-half-chrome oj-button-outlined-chrome oj-button-cta-chrome oj-button-danger-chrome",
            m = {
                solid: "oj-button-full-chrome",
                outlined: "oj-button-outlined-chrome",
                borderless: "oj-button-half-chrome",
                full: "oj-button-full-chrome",
                half: "oj-button-half-chrome",
                callToAction: "oj-button-cta-chrome",
                danger: "oj-button-danger-chrome oj-button-full-chrome"
            },
            b = {
                button: ["ojButtonset", "ojToolbar"],
                buttonset: ["ojToolbar"]
            };

        function p(t, e) {
            y(t, d), t.classList.add(m[e])
        }

        function f(t, e) {
            var o, s = t.name,
                i = t.form;
            if (s) {
                var l = ":radio[name='" + (s = s.replace(/'/g, "\\'")) + "']:oj-button";
                o = e ? e.filter(l) : i ? n(i).find(l) : n(l, t.ownerDocument).filter(function() {
                    return !this.form
                })
            } else o = (e ? e.filter(t) : n(t)).filter(":oj-button");
            return o
        }

        function _(t, e, n) {
            var o = function(t, e, n) {
                for (var o = 0; o < n.length; ++o) {
                    var s = n[o];
                    if (e.indexOf(s) >= 0)
                        for (;; t = t.parentNode) {
                            var l = i.__GetWidgetConstructor(t, s);
                            if (l) return l
                        }
                }
                return null
            }(e, n, b[t]);
            return o ? o("option", "chroming") : s.getCachedCSSVarValues(["--oj-private-" + t + "-global-chroming-default"])[0]
        }

        function v(t, e) {
            var n = t.className;
            if (n) {
                for (var o = n.split(" "), s = e.split(" "), i = s.length; i >= 0; i--) o.indexOf(s[i]) >= 0 && s.splice(i, 1);
                s.length > 0 && (t.className = n + " " + s.join(" "))
            } else t.className = e
        }

        function y(t, e) {
            var n = t.className;
            if (n) {
                for (var o = n.split(" "), s = e.split(" "), i = !1, l = 0; l < s.length; l++) {
                    var a = o.indexOf(s[l]);
                    a >= 0 && (o.splice(a, 1), i = !0)
                }
                i && (t.className = o.join(" "))
            }
        }
        e.__registerWidget("oj.ojButton", n.oj.baseComponent, {
            defaultElement: "<button>",
            widgetEventPrefix: "oj",
            options: {
                chroming: "solid",
                disabled: !1,
                display: "all",
                label: null,
                icons: {
                    start: null,
                    end: null
                },
                menu: null,
                action: null
            },
            _InitOptions: function(t, e) {
                this._super(t, e), this._IsCustomElement() && this._processSlots(), this._initButtonTypes(), this._IsCustomElement() || "disabled" in e || this.option("disabled", !!this.element[0].disabled, {
                    _context: {
                        internalSet: !0
                    }
                }), "label" in e || (this.keepDomLabel = !0, this.option("label", "inputPush" === this.type ? this.buttonElement.val() : this.buttonElement[0].innerHTML, {
                    _context: {
                        internalSet: !0
                    }
                })), this._IsCustomElement() || !this.options.menu || e.icons && void 0 !== e.icons.end || this.option("icons.end", "oj-component-icon oj-button-menu-dropdown-icon", {
                    _context: {
                        writeback: !0,
                        internalSet: !0
                    }
                })
            },
            _ComponentCreate: function() {
                this._super(), this.menuEventNamespace = this.eventNamespace + "menu", this._initButtonTypes2(), this.hasTitle = !!this.rootElement.getAttribute("title");
                var e = this,
                    s = this._isToggle;
                v(this.rootElement, c), p(this.rootElement, this.options.chroming);
                var i = function() {
                    e.rootElement.classList.remove("oj-active"), e.rootElement.classList.remove("oj-hover"), e._toggleDefaultClasses()
                };
                if (this._touchStartHandler = function() {
                        e._IsEffectivelyDisabled() || (e.rootElement.classList.add("oj-active"), e._toggleDefaultClasses(), e.document.one("touchend", i))
                    }, o.isTouchSupported() && (this.buttonElement[0].addEventListener("touchstart", this._touchStartHandler, {
                        passive: !0
                    }), this.buttonElement.bind("touchend" + this.eventNamespace + " touchcancel" + this.eventNamespace, i)), this.buttonElement.bind("mouseenter" + this.eventNamespace, function() {
                        e._IsEffectivelyDisabled() || e._isSelectedInButtonsetOne() || (e.rootElement.classList.add("oj-hover"), o.recentTouchEnd() || this === t && e.rootElement.classList.add("oj-active"), e.rootElement.classList.remove("oj-default"), e.rootElement.classList.remove("oj-focus-only"))
                    }).bind("mouseleave" + this.eventNamespace, function() {
                        e.rootElement.classList.remove("oj-hover"), e._IsEffectivelyDisabled() || (e.rootElement.classList.remove("oj-active"), e._toggleDefaultClasses())
                    }), this._disabledClickHandler = function(t) {
                        e._IsEffectivelyDisabled() && (t.preventDefault(), t.stopImmediatePropagation())
                    }, this._ojActionClickHandler = function(t) {
                        e._trigger("action", t, {})
                    }, this._IsCustomElement() ? (this.rootElement.addEventListener("click", this._disabledClickHandler, !0), this.rootElement.addEventListener("click", this._ojActionClickHandler, !1)) : this.buttonElement[0].addEventListener("click", this._disabledClickHandler, !0), this._focusable({
                        element: n(this.rootElement),
                        applyHighlight: !0,
                        afterToggle: function() {
                            e._toggleDefaultClasses()
                        }
                    }), s && (this.element.bind("change" + this.eventNamespace, function(t) {
                        e._applyCheckedStateFromDom(!0);
                        var n = e._getEnclosingContainerComponent("buttonset"),
                            o = n && n._getCheckedFromDom(n.$buttons);
                        n && void 0 !== o && n.option("checked", o, {
                            _context: {
                                writeback: !0,
                                originalEvent: t,
                                internalSet: !0
                            }
                        })
                    }), this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        e._IsEffectivelyDisabled() || (u = this, e._isSelectedInButtonsetOne() || e.rootElement.classList.add("oj-active"), e.document.one("mouseup", function() {
                            u = null, e.rootElement.classList.remove("oj-active")
                        }))
                    }).bind("mouseup" + this.eventNamespace, function() {
                        e._IsEffectivelyDisabled() || (e.rootElement.classList.remove("oj-active"), this === u && e.element.focus())
                    })), "checkbox" === this.type) this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (e._IsEffectivelyDisabled()) return !1
                }), this.element.bind("keyup" + this.eventNamespace, function(t) {
                    t.keyCode === n.ui.keyCode.ENTER && (e._IsEffectivelyDisabled() || e.element.click())
                });
                else if ("radio" === this.type) this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (e._IsEffectivelyDisabled()) return !1
                }), this.element.bind("keyup" + this.eventNamespace, function(t) {
                    t.keyCode === n.ui.keyCode.ENTER && (e.element[0].checked || e._IsEffectivelyDisabled() || (e.element[0].checked = !0, e.element.change(), e.element.click()))
                });
                else if (this.buttonElement.bind("mousedown" + this.eventNamespace, function(n) {
                        if (e._IsEffectivelyDisabled()) return !1;
                        1 !== n.which || o.recentTouchEnd() || (e._isSelectedInButtonsetOne() || e.rootElement.classList.add("oj-active"), e.rootElement.classList.remove("oj-default"), e.rootElement.classList.remove("oj-focus-only"), t = this, e.document.one("mouseup", function() {
                            t = null
                        }))
                    }).bind("mouseup" + this.eventNamespace, function() {
                        if (e._IsEffectivelyDisabled()) return !1;
                        e.rootElement.classList.remove("oj-active"), e._toggleDefaultClasses()
                    }).bind("keydown" + this.eventNamespace, function(t) {
                        if (e._IsEffectivelyDisabled()) return t.keyCode === n.ui.keyCode.TAB || t.keyCode === n.ui.keyCode.LEFT || t.keyCode === n.ui.keyCode.RIGHT;
                        var o = t.keyCode === n.ui.keyCode.SPACE,
                            s = "anchor" === e.type;
                        s && o && t.preventDefault(), (o && !s || t.keyCode === n.ui.keyCode.ENTER) && (e._isSelectedInButtonsetOne() || e.rootElement.classList.add("oj-active"), e.rootElement.classList.remove("oj-default"), e.rootElement.classList.remove("oj-focus-only"))
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        e.rootElement.classList.remove("oj-active"), e._toggleDefaultClasses()
                    }), "anchor" === this.type) {
                    var l = this.buttonElement[0].getAttribute("tabindex");
                    (null === l || isNaN(l)) && this.buttonElement[0].setAttribute("tabindex", "0")
                }
                this.options.disabled && this._manageAnchorTabIndex(!1, !0), this._updateEffectivelyDisabled();
                var a = e._getEnclosingContainerComponent("buttonset");
                this._IsCustomElement() || a && a._IsCustomElement() ? this._setDisplayOptionOnDom() : this._handleLabelAndIconsAtCreateTime(), this._setupMenuButton(null), this._toggleDefaultClasses(), this._childMutationObserver && this._childMutationObserver.observe()
            },
            _NotifyContextMenuGesture: function(t, e, o) {
                this._OpenContextMenu(e, o, {
                    position: { of: "keyboard" === o ? n(this.rootElement) : e
                    }
                })
            },
            _addMutationObserver: function() {
                if (!this._childMutationObserver && this._IsCustomElement()) {
                    var t = this;
                    this._childMutationObserver = new l(this.rootElement, function(e) {
                        e.forEach(function(e) {
                            var n;
                            if ("childList" === e.type) {
                                var o = e.addedNodes && e.addedNodes[0],
                                    s = e.target;
                                if (o && 3 === o.nodeType && s && 1 === s.nodeType && s.classList.contains("oj-button-label")) {
                                    t._childMutationObserver.disconnect(), n = !0;
                                    var i = t.buttonElement[0].querySelector(".oj-button-text");
                                    i && (i.textContent = o.textContent), o.parentNode.removeChild(o)
                                }
                            } else "characterData" === e.type && (t._childMutationObserver.disconnect(), n = !0);
                            n && (t._setDisplayOptionOnDom(), t._childMutationObserver.observe())
                        })
                    })
                }
            },
            _removeMutationObserver: function() {
                this._childMutationObserver && (this._childMutationObserver.disconnect(), this._childMutationObserver = null)
            },
            _processSlots: function() {
                var t, e = this,
                    o = this.element[0],
                    s = o.parentNode,
                    i = "OJ-MENU-BUTTON" === s.tagName,
                    l = r.CustomElementUtils.getSlotMap(s);
                t = i ? ["startIcon", "", "endIcon", "menu"] : ["startIcon", "", "endIcon"], n.each(t, function(t, e) {
                    l[e] && "" !== e && n.each(l[e], function(t, e) {
                        o.appendChild(e)
                    })
                });
                for (var a = s.children, u = a.length - 1; u >= 0; u--) {
                    var c = a[u];
                    c !== o && "contextMenu" !== c.getAttribute("slot") && s.removeChild(c)
                }
                var h = r.CustomElementUtils.getSlotMap(o);
                n.each(t, function(t, s) {
                    h[s] && n.each(h[s], function(t, i) {
                        if (o.appendChild(i), "" === s) {
                            var l = i,
                                a = l;
                            3 === l.nodeType && (a = document.createElement("span"), l.parentNode.insertBefore(a, l), a.appendChild(l)), a.classList.add("oj-button-text"), e._setTextSpanIdAndLabelledBy(a)
                        } else if ("startIcon" === s) i.classList.add("oj-button-icon"), i.classList.add("oj-start");
                        else if ("endIcon" === s) i.classList.add("oj-button-icon"), i.classList.add("oj-end");
                        else if ("menu" === s && (n(i).uniqueId(), e.menuSlot = "#" + i.id, void 0 === h.endIcon)) {
                            var r = document.createElement("span"),
                                u = "oj-button-menu-dropdown-icon";
                            void 0 === h.startIcon && "icons" === e.options.display && (u = "oj-button-menu-icon-only-dropdown-icon"), r.className = "oj-button-icon oj-end oj-component-icon " + u, r.setAttribute("slot", "endIcon"), o.insertBefore(r, i)
                        }
                    })
                });
                var d = document.createElement("div");
                for (d.className = "oj-button-label"; o.hasChildNodes();) d.appendChild(o.firstChild);
                o.appendChild(d)
            },
            _getMenuNode: function() {
                return this._IsCustomElement() ? this.menuSlot : this.options.menu
            },
            _initButtonTypes: function() {
                var t = this.element[0];
                if ("INPUT" === t.tagName && "checkbox" === t.type) this.type = "checkbox", this._isToggle = !0;
                else if ("INPUT" === t.tagName && "radio" === t.type) this.type = "radio", this._isToggle = !0;
                else if ("INPUT" !== t.tagName || "button" !== t.type && "submit" !== t.type && "reset" !== t.type)
                    if ("BUTTON" === t.tagName) this.type = "button";
                    else {
                        if ("A" !== t.tagName) throw new Error("JET Button not supported on this element type");
                        this.type = "anchor"
                    }
                else this.type = "inputPush";
                if (this._isToggle) {
                    var e = "label[for='" + this.element[0].getAttribute("id") + "']";
                    this.buttonElement = this.element.siblings().filter(e)
                } else this.buttonElement = this.element
            },
            _initButtonTypes2: function() {
                var t = this.element[0];
                if (this._isToggle) {
                    this.buttonElement[0].classList.add("oj-button-label"), t.classList.add("oj-button-input"), t.classList.add("oj-helper-hidden-accessible"), t.setAttribute("data-oj-internal", "");
                    var e = document.createElement("span");
                    this.element[0].parentNode.insertBefore(e, this.buttonElement[0]), e.appendChild(this.buttonElement[0]), e.appendChild(this.element[0]), this.rootElement = this.element[0].parentNode, this.rootElement.classList.add("oj-button-toggle"), t.checked && (this.rootElement.classList.add("oj-selected"), this.rootElement.classList.remove("oj-default"), this.rootElement.classList.remove("oj-focus-only"))
                } else this._IsCustomElement() ? (this.rootElement = this.element[0].parentNode, t.classList.add("oj-button-button")) : (this.rootElement = this.element[0], this._IsCustomElement() || t.classList.add("oj-button-toggle"))
            },
            widget: function() {
                return n(this.rootElement)
            },
            _destroy: function() {
                this._removeMenuBehavior(this._getMenuNode()), this.buttonElement[0].removeEventListener("click", this._disabledClickHandler, !0), this.buttonElement[0].removeEventListener("click", this._ojActionClickHandler, !1), this.buttonElement[0].removeEventListener("touchstart", this._touchStartHandler, {
                    passive: !0
                }), delete this._touchStartHandler;
                var t = this.element[0];
                t.classList.remove("oj-helper-hidden-accessible"), t.removeAttribute("aria-labelledby"), t.removeAttribute("aria-describedby"), this.element.removeUniqueId(), this.options.disabled && this._manageAnchorTabIndex(!0, !1);
                var e = this._isToggle;
                e || y(this.rootElement, c + " oj-button-toggle oj-hover oj-active oj-selected " + h + " " + d);
                var n = this.buttonElement[0].querySelector(".oj-button-text");
                n && (this.buttonElement[0].innerHTML = n.innerHTML), e ? (this.buttonElement[0].classList.remove("oj-button-label"), o.unwrap(this.element)) : this.hasTitle || this.rootElement.removeAttribute("title"), u === this.buttonElement[0] && (u = null), this.buttonElement.off("blur"), this._removeMutationObserver()
            },
            _NotifyDetached: function() {
                this._super(), this._toggleDefaultClasses()
            },
            __setAncestorComponentDisabled: function(t) {
                this._super(t), this._updateEffectivelyDisabled()
            },
            _updateEffectivelyDisabled: function() {
                var e = this.element[0],
                    n = this._IsEffectivelyDisabled();
                if (n ? (this.rootElement.classList.add("oj-disabled"), this.rootElement.classList.remove("oj-enabled")) : (this.rootElement.classList.remove("oj-disabled"), this.rootElement.classList.add("oj-enabled")), "anchor" !== this.type ? (e.disabled = n, this.rootElement.removeAttribute("aria-disabled")) : (e.setAttribute("aria-disabled", n), this._IsCustomElement() && this.rootElement.removeAttribute("aria-disabled")), n) {
                    var o = this.widget()[0].classList;
                    o.remove("oj-active"), o.remove("oj-default"), o.remove("oj-focus-only"), o.remove("oj-hover"), o.remove("oj-focus"), o.remove("oj-focus-highlight"), t = null, this._dismissMenu(this._getMenuNode())
                } else this._toggleDefaultClasses()
            },
            _setOption: function(t, e, n) {
                var o = this.options[t];
                switch (this._super(t, e, n), t) {
                    case "chroming":
                        p(this.rootElement, e);
                        break;
                    case "disabled":
                        if (this._manageAnchorTabIndex(o, e), this._updateEffectivelyDisabled(), !this._IsCustomElement()) {
                            var s = this._getEnclosingContainerElement("toolbar");
                            s.length && s.ojToolbar("refresh")
                        }
                        break;
                    case "label":
                        this._setLabelOption();
                        break;
                    case "display":
                        "inputPush" !== this.type && this._setDisplayOptionOnDom();
                        break;
                    case "icons":
                        this._setIconsOption(!0);
                        break;
                    case "menu":
                        this._setupMenuButton(o)
                }
            },
            refresh: function() {
                this._super(), this._ancestorDisabled && !this._getEnclosingContainerElement("buttonset").length && this.__setAncestorComponentDisabled(!1), p(this.rootElement, this.options.chroming)
            },
            _applyCheckedStateFromDom: function(t) {
                "radio" === this.type ? (t ? f(this.element[0]) : this.element).each(function() {
                    var t = n(this).data("oj-ojButton");
                    this.checked ? (t.rootElement.classList.add("oj-selected"), t.rootElement.classList.remove("oj-default"), t.rootElement.classList.remove("oj-focus-only")) : (t.rootElement.classList.remove("oj-selected"), t._toggleDefaultClasses())
                }) : "checkbox" === this.type && (this.element[0].checked ? (this.rootElement.classList.add("oj-selected"), this.rootElement.classList.remove("oj-default"), this.rootElement.classList.remove("oj-focus-only")) : (this.rootElement.classList.remove("oj-selected"), this._toggleDefaultClasses()))
            },
            _handleLabelAndIconsAtCreateTime: function() {
                if ("inputPush" === this.type) this._setLabelOnDomOfSpanlessButton();
                else {
                    var t = this._setLabelOnDomAtCreateTime(),
                        e = this._setIconOnDom(!0),
                        n = this._setIconOnDom(!1);
                    this._setDisplayOptionOnDom(t, e, n)
                }
            },
            _setLabelOnDomAtCreateTime: function() {
                var t = this.buttonElement[0],
                    e = document.createElement("span");
                if (e.className = "oj-button-text", this.keepDomLabel)
                    for (; t.hasChildNodes();) e.appendChild(t.firstChild);
                else t.innerHTML = "", e.textContent = this.options.label;
                if ("button" === this.type) {
                    var o = document.createElement("div");
                    o.className = "oj-button-label", o.appendChild(e), this.element[0].appendChild(o)
                } else t.appendChild(e);
                return "button" !== this.type && "anchor" !== this.type || this.element[0].hasAttribute("aria-label") || this.element[0].hasAttribute("aria-labelledby") || this._setTextSpanIdAndLabelledBy(e), n(e)
            },
            _setTextSpanIdAndLabelledBy: function(t) {
                n(t).uniqueId(), this.element[0].hasAttribute("aria-label") || this.element[0].hasAttribute("aria-labelledby") || this.element[0].setAttribute("aria-labelledby", t.getAttribute("id"))
            },
            _setLabelOption: function() {
                if ("inputPush" === this.type) this._setLabelOnDomOfSpanlessButton();
                else {
                    var t = this.buttonElement[0].querySelector(".oj-button-text");
                    t.textContent = this.options.label, this._setDisplayOptionOnDom(n(t))
                }
            },
            _setLabelOnDomOfSpanlessButton: function() {
                this.options.label && this.element.val(this.options.label)
            },
            _setIconsOption: function() {
                if ("inputPush" !== this.type) {
                    var t = this._setIconOnDom(!0),
                        e = this._setIconOnDom(!1);
                    this._setDisplayOptionOnDom(void 0, t, e)
                }
            },
            _setIconOnDom: function(t) {
                var e, n, o, s, i = this.buttonElement[0];
                "button" === this.type && (i = this.element.children("div.oj-button-label")[0]), t ? (e = ".oj-button-icon.oj-start", n = "oj-button-icon oj-start", o = this.options.icons.start, s = "_lastStartIcon") : (e = ".oj-button-icon.oj-end", n = "oj-button-icon oj-end", o = this.options.icons.end, s = "_lastEndIcon");
                var l, a, r = i.querySelectorAll(e);
                if (o)
                    if (r.length) {
                        var u = this[s];
                        for (l = 0; l < r.length; l++) y(a = r[l], u), v(a, o)
                    } else {
                        var c = document.createElement("span");
                        c.className = n + " " + o, t ? i.insertBefore(c, i.firstChild) : i.appendChild(c)
                    }
                else
                    for (l = 0; l < r.length; l++)(a = r[l]).parentNode.removeChild(a);
                return this[s] = o, !!o
            },
            _setDisplayOptionOnDom: function(t, e, o) {
                var s = this.buttonElement.children(".oj-button-label");
                if (!s.length) {
                    var i = this._getEnclosingContainerComponent("buttonset");
                    s = this._IsCustomElement() || i && i._IsCustomElement() ? this.buttonElement.children("oj-option") : this.buttonElement
                }
                void 0 === t && (t = s.children(".oj-button-text")), void 0 === e && (e = !!this.options.icons.start || s.children("[slot='startIcon']").length), void 0 === o && (o = !!this.options.icons.end || s.children("[slot='endIcon']").length);
                var l, a = e && o,
                    r = e || o,
                    u = "icons" === this.options.display,
                    c = "label" === this.options.display;
                if (c) s.children("[slot='startIcon']") && s.children("[slot='startIcon']")[0].classList.add("oj-helper-hidden"), s.children("[slot='endIcon']") && s.children("[slot='endIcon']")[0].classList.add("oj-helper-hidden");
                else if (r && u) {
                    if (t[0] && t[0].classList.add("oj-helper-hidden-accessible"), !this.hasTitle) {
                        var d = t[0] ? t[0].textContent : "";
                        this.rootElement.setAttribute("title", n.trim(d))
                    }
                    this._addMutationObserver()
                } else t[0] && t[0].classList.remove("oj-helper-hidden-accessible"), this.hasTitle || this.rootElement.removeAttribute("title"), this._removeMutationObserver();
                c && (l = "oj-button-text-only"), l = r ? u ? a ? "oj-button-icons-only" : "oj-button-icon-only" : a ? "oj-button-text-icons" : e ? "oj-button-text-icon-start" : "oj-button-text-icon-end" : "oj-button-text-only", y(this.rootElement, h), this.rootElement.classList.add(l)
            },
            _manageAnchorTabIndex: function(t, e) {
                if (!t != !e && "anchor" === this.type && !this._getEnclosingContainerElement("buttonset").length && !this._getEnclosingContainerElement("toolbar").length) {
                    var n = this.element[0];
                    if (e) {
                        var o = n.getAttribute("tabindex");
                        this._oldAnchorTabIndex = this._isInteger(Number(o)) ? o : null, n.setAttribute("tabindex", -1)
                    } else null == this._oldAnchorTabIndex ? n.removeAttribute("tabindex") : n.setAttribute("tabindex", this._oldAnchorTabIndex)
                }
            },
            _isInteger: function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            },
            _selectorMap: {
                buttonset: ".oj-buttonset",
                toolbar: ".oj-toolbar",
                buttonsetone: "oj-buttonset-one"
            },
            _constructorMap: {
                buttonset: "ojButtonset",
                toolbar: "ojToolbar"
            },
            _isSelectedInButtonsetOne: function() {
                return 1 === this._getEnclosingContainerElement("buttonsetone").length && this.rootElement.classList.contains("oj-selected")
            },
            _getEnclosingContainerElement: function(t) {
                return n(this.rootElement).closest(this._selectorMap[t])
            },
            _getEnclosingContainerComponent: function(t) {
                var e = this._getEnclosingContainerElement(t)[0],
                    n = i.__GetWidgetConstructor(e, this._constructorMap[t]);
                return n && n("instance")
            },
            _setupMenuButton: function(t) {
                if (this._getMenuNode() && "INPUT" === this.element[0].tagName) throw new Error("Menu Button functionality is not supported on input elements.");
                if (this._removeMenuBehavior(t), this._getMenuNode()) {
                    var e = this;
                    this.element.attr("aria-haspopup", !0).attr("role", "button").on("keydown" + this.menuEventNamespace, function(t) {
                        if (t.which === n.ui.keyCode.DOWN || t.which === n.ui.keyCode.ENTER || t.which === n.ui.keyCode.SPACE) return e._toggleMenu(t, "firstItem"), t.preventDefault(), !0;
                        if (t.which === n.ui.keyCode.ESCAPE) {
                            var o = !e.rootElement.classList.contains("oj-selected");
                            return e._dismissMenu(e._getMenuNode(), t), o
                        }
                        return !0
                    }).on("click" + this.menuEventNamespace, function(t) {
                        var n = e._getMenu();
                        return n.__spaceEnterDownInMenu || e._toggleMenu(t, "menu"), n.__spaceEnterDownInMenu = !1, t.preventDefault(), !0
                    })
                }
            },
            _removeMenuBehavior: function(t) {
                this.element.removeAttr("aria-haspopup").removeAttr("role").off(this.menuEventNamespace), this._dismissMenu(t), n(t).off(this.menuEventNamespace), this._menuListenerSet = !1
            },
            _getMenu: function() {
                var t = this._getMenuOnly(this._getMenuNode());
                if (!t) throw new Error('JET Button: "menu" option specified, but does not reference a valid JET Menu.');
                if (!this._menuListenerSet) {
                    var e, n = this;
                    e = t._IsCustomElement() ? "ojClose" : "ojclose", t.widget().on(e + this.menuEventNamespace, function(t) {
                        n._menuDismissHandler(t)
                    }), this._menuListenerSet = !0
                }
                return t
            },
            _getMenuOnly: function(t) {
                var e = i.__GetWidgetConstructor(n(t)[0], "ojMenu");
                return e && e("instance")
            },
            _toggleMenu: function(t, e) {
                if (!this._IsEffectivelyDisabled()) {
                    var n = this._getMenu(),
                        o = n.widget();
                    this._menuVisible ? this._dismissMenu(this._getMenuNode(), t) : (n.open(t, {
                        launcher: this.element,
                        initialFocus: e
                    }), o.is(":visible") && (this._menuVisible = !0, o[0].getAttribute("aria-label") || o[0].getAttribute("aria-labelledby") || (this.element.uniqueId(), this._setAriaLabelledBy = !0, o[0].setAttribute("aria-labelledby", this.element[0].getAttribute("id"))), this.rootElement.classList.add("oj-selected"), this.rootElement.classList.remove("oj-default"), this.rootElement.classList.remove("oj-focus-only")))
                }
            },
            _dismissMenu: function(t, e) {
                if (this._menuVisible) {
                    var n = this._getMenuOnly(t);
                    n && (n.__collapseAll(e, !0), n.__dismiss(e))
                }
            },
            _menuDismissHandler: function() {
                this._setAriaLabelledBy && (n(this._getMenuNode()).removeAttr("aria-labelledby"), this._setAriaLabelledBy = !1), this.rootElement.classList.remove("oj-selected"), this._toggleDefaultClasses(), this._menuVisible = !1
            },
            _toggleDefaultClasses: function() {
                var t, e;
                if (n(this.rootElement).is(".oj-hover, .oj-active, .oj-selected, .oj-disabled")) t = !1, e = !1;
                else {
                    var o = n(this.rootElement).is(".oj-focus");
                    t = !o, e = o
                }
                t ? this.rootElement.classList.add("oj-default") : this.rootElement.classList.remove("oj-default"), e ? this.rootElement.classList.add("oj-focus-only") : this.rootElement.classList.remove("oj-focus-only")
            }
        }), e.__registerWidget("oj.ojButtonset", n.oj.baseComponent, {
            _items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a",
            widgetEventPrefix: "oj",
            options: {
                checked: null,
                chroming: "solid",
                display: "all",
                focusManagement: "oneTabstop",
                labelledBy: null,
                describedBy: null
            },
            _setCheckedOnDom: function(t, e) {
                var o, s = n.type(t),
                    i = this.element[0];
                if ((o = "OJ-BUTTONSET-MANY" === i.tagName || e.length > 0 && e.filter("input[type=checkbox]").length === e.length) && "array" !== s) throw new Error("Invalid 'checked' value set on JET Buttonset: " + t);
                if (!(this._setCheckedOnButtons(t, e, s, o) || null == t || this._IsCustomElement() && e.length !== i.children.length)) throw new Error("Invalid 'checked' value set on JET Buttonset: " + t)
            },
            _setCheckedOnButtons: function(t, e, n, o) {
                var s = this._shallowCompare(t, e, o);
                return this._shouldDeepCompare(t, o, s) && (s = this._deepCompare(t, e, o, s)), o ? s === t.length : 1 === s
            },
            _shallowCompare: function(t, e, n) {
                var o = this,
                    s = 0;
                return e.each(function() {
                    var e = o._getInputValue(this);
                    (n ? t.indexOf(e) > -1 : e === t) ? (this.checked = !0, s += 1) : this.checked = !1
                }), s
            },
            _shouldDeepCompare: function(t, e, n) {
                return e ? n !== t.length : !n
            },
            _deepCompare: function(t, e, n, o) {
                var s = o,
                    i = this;
                return e.each(function() {
                    var e = i._getInputValue(this);
                    if (n)
                        for (var o = 0; o < t.length; o++) i._deepCompareValues(e, t[o]) && (this.checked = !0, s += 1);
                    else i._deepCompareValues(e, t) && (this.checked = !0, s += 1)
                }), s
            },
            _deepCompareValues: function(t, o) {
                return "object" === n.type(t) && t.ojCompareValues ? 0 === t.ojCompareValues(t, o) : e.Object.compareValues(t, o)
            },
            _getInputValue: function(t) {
                return this._IsCustomElement() ? this._getOjOptionFromInput(t).value : t.value
            },
            _getOjOptionFromInput: function(t) {
                return t.previousElementSibling.children[0]
            },
            _getCheckedFromDom: function(t) {
                var e, n = null,
                    o = null,
                    s = this;
                return t.each(function() {
                    if ("input" !== this.tagName.toLowerCase()) return e = void 0, !1;
                    var t, i, l = this.type.toLowerCase();
                    if ("radio" === l) t = !0, i = this.name.toLowerCase();
                    else {
                        if ("checkbox" !== l) return e = void 0, !1;
                        t = !1, i = null
                    }
                    if (void 0 !== e && (t !== n || i !== o || n && !o)) return e = void 0, !1;
                    var a = s._getInputValue(this);
                    void 0 === e ? (e = t ? this.checked ? a : null : this.checked ? [a] : [], n = t, o = i) : this.checked && (n ? e = a : e.push(a))
                }), e
            },
            _CompareOptionValues: function(t, e, o) {
                return "checked" === t ? e === o || "array" === n.type(e) && "array" === n.type(o) && this._compareArraysAsSets(e, o) : this._superApply(arguments)
            },
            _compareArraysAsSets: function(t, e) {
                return !t.some(function(t) {
                    return e.indexOf(t) < 0
                }) && !e.some(function(e) {
                    return t.indexOf(e) < 0
                })
            },
            _removeNonOjOptions: function() {
                this.element.children(":not(oj-option)").remove()
            },
            _processOjOptions: function() {
                var t = this,
                    e = this.element[0].querySelectorAll("oj-option");
                n.each(e, function(e, n) {
                    n.customOptionRenderer = t._customOptionRenderer.bind(t)
                })
            },
            _customOptionRenderer: function(t) {
                this._removeOptionDecoration(t), this._addOptionDecoration(t)
            },
            _addOptionDecoration: function(t) {
                this._addOptionClasses(t);
                var e = "OJ-BUTTONSET-ONE" === this.element[0].tagName,
                    o = e ? "radio" : "checkbox",
                    s = t.value,
                    i = t.disabled,
                    l = document.createElement("input"),
                    a = document.createElement("label");
                n(l).uniqueId(), l.value = s, l.type = o, l.disabled = i;
                var r = l.id;
                a.htmlFor = r, e && (this._name || (this._name = "_n_" + r), l.name = this._name), t.parentNode.insertBefore(a, t), a.appendChild(t), a.parentNode.insertBefore(l, a.nextElementSibling), this._setup(!1), this._setCheckedOnDom(this.options.checked, this.$buttons), this.$buttons.each(function() {
                    n(this).data("oj-ojButton")._applyCheckedStateFromDom(!1)
                })
            },
            _removeOptionDecoration: function(t) {
                var e = t.parentNode;
                if ("LABEL" === e.tagName) {
                    this._removeOptionClasses(t);
                    var o = n(e).siblings(".oj-button-input");
                    o.ojButton("destroy"), o.removeUniqueId(), o.remove(), e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e)
                }
            },
            _addOptionClasses: function(t) {
                var e = r.CustomElementUtils.getSlotMap(t),
                    n = e[""] ? e[""] : null,
                    o = e.startIcon ? e.startIcon[0] : null,
                    s = e.endIcon ? e.endIcon[0] : null;
                if (o && (o.classList.add("oj-button-icon"), o.classList.add("oj-start")), n)
                    for (var i = 0; i < n.length; i++) {
                        var l = n[i],
                            a = l;
                        3 === l.nodeType && (a = document.createElement("span"), l.parentNode.insertBefore(a, l), a.appendChild(l)), a.classList.add("oj-button-text")
                    }
                s && (s.classList.add("oj-button-icon"), s.classList.add("oj-end"))
            },
            _removeOptionClasses: function(t) {
                var e = r.CustomElementUtils.getSlotMap(t),
                    n = e[""] ? e[""] : null,
                    o = e.startIcon ? e.startIcon[0] : null,
                    s = e.endIcon ? e.endIcon[0] : null;
                if (o && (o.classList.remove("oj-button-icon"), o.classList.remove("oj-start")), n)
                    for (var i = 0; i < n.length; i++) n[i].classList.remove("oj-button-text");
                s && (s.classList.remove("oj-button-icon"), s.classList.remove("oj-end"))
            },
            _InitOptions: function(t, e) {
                if (this._super(t, e), this.$buttons = this.element.find(this._items), !("checked" in e)) {
                    this.initCheckedFromDom = !0;
                    var o = this._getCheckedFromDom(this.$buttons);
                    "array" !== n.type(o) && "OJ-BUTTONSET-MANY" !== this.element[0].tagName || (this.options.checked = []), void 0 !== o && this.option("checked", o, {
                        _context: {
                            internalSet: !0
                        }
                    })
                }
            },
            _ComponentCreate: function() {
                this._super();
                var t = this.element[0];
                t.setAttribute(i._OJ_CONTAINER_ATTR, this.widgetName), t.classList.add("oj-buttonset"), t.classList.add("oj-component"), this._setRole(this.options.focusManagement), this._IsCustomElement() && (this._removeNonOjOptions(), this._processOjOptions()), this._setup(!0)
            },
            _NotifyContextMenuGesture: function(t, e, n) {
                var o = this.element.find(":oj-button[tabindex=0]");
                this._OpenContextMenu(e, n, {
                    launcher: o,
                    position: { of: "keyboard" === n ? o.ojButton("widget") : e
                    }
                })
            },
            _propagateDisabled: function(t) {
                var e = !!t;
                this.$buttons.each(function() {
                    n(this).data("oj-ojButton").__setAncestorComponentDisabled(e)
                })
            },
            _setRole: function(t) {
                var e = this.element[0];
                "oneTabstop" === t ? e.setAttribute("role", "toolbar") : e.removeAttribute("role")
            },
            _setOption: function(t, e, o) {
                var s = this.options[t];
                if (this._superApply(arguments), "disabled" === t) {
                    if (this._propagateDisabled(e), this._refreshTabStop(), !this._IsCustomElement()) {
                        var i = n(this.element).closest(".oj-toolbar");
                        i.length && i.ojToolbar("refresh")
                    }
                } else if ("checked" === t) this._setCheckedOnDom(e, this.$buttons), this.$buttons.each(function() {
                    n(this).data("oj-ojButton")._applyCheckedStateFromDom(!1)
                });
                else if ("focusManagement" === t) this._setRole(e);
                else if ("chroming" === t) p(this.element[0], e), this.$buttons.ojButton("refresh");
                else if ("display" === t) this.$buttons.ojButton("option", t, e);
                else if ("labelledBy" === t) {
                    var l = this.element;
                    this._labelledByUpdatedForSet(l[0].id, s, e, l)
                } else "describedBy" === t && this._describedByUpdated(s, e)
            },
            refresh: function() {
                this._super(), this._IsCustomElement() && this._processOjOptions(), this._setup(!1)
            },
            _setup: function(t) {
                var e = this,
                    o = this.element[0];
                this.isRtl = "rtl" === this._GetReadingDirection(), p(o, this.options.chroming), !t || this.initCheckedFromDom || this._IsCustomElement() || this._setCheckedOnDom(this.options.checked, this.$buttons), t || (this.$buttons = this.element.find(this._items)), this.$buttons.length > 1 ? o.classList.add("oj-buttonset-multi") : o.classList.remove("oj-buttonset-multi"), this.$buttons.filter(":oj-button").ojButton("refresh").each(function() {
                    n(this).data("oj-ojButton")._applyCheckedStateFromDom(!1)
                }).end().not(":oj-button").ojButton({
                    display: this.options.display
                }).end();
                for (var s = 0, i = this.$buttons.length; s < i; s++) {
                    var l = this.$buttons.eq(s).ojButton("widget")[0];
                    l.classList.remove("oj-buttonset-first"), l.classList.remove("oj-buttonset-last"), 0 === s ? l.classList.add("oj-buttonset-first") : s === i - 1 && l.classList.add("oj-buttonset-last")
                }
                this._propagateDisabled(this.options.disabled), "oneTabstop" === this.options.focusManagement && (this.$buttons.unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function(t) {
                    e._handleKeyDown(t, n(this))
                }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
                    n(this).data("oj-ojButton")._IsEffectivelyDisabled() || e._setTabStop(n(this))
                }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
                    e._setTabStop(n(this))
                }), this.$enabledButtons = this.$buttons.filter(function() {
                    return !n(this).data("oj-ojButton")._IsEffectivelyDisabled()
                }), this._initTabindexes(t)), this.element.uniqueId(), this._labelledByUpdatedForSet(o.id, null, this.options.labelledBy, this.element);
                var a = this.options.describedBy;
                a && this._describedByUpdated(a)
            },
            _labelledByUpdatedForSet: a._labelledByUpdatedForSet,
            _describedByUpdated: a._describedByUpdated,
            _GetContentElement: function() {
                return null != this.$buttons || (this.$buttons = this.element.find(this._items)), this.$buttons
            },
            _refreshTabStop: function() {
                "oneTabstop" === this.options.focusManagement && (this.$enabledButtons = this.$buttons.filter(function() {
                    return !n(this).data("oj-ojButton")._IsEffectivelyDisabled()
                }), this._initTabindexes(!1))
            },
            _initTabindexes: function(t) {
                var e, o = n(this._lastTabStop);
                this._lastTabStop = void 0, this.$buttons.attr("tabindex", "-1"), e = t || !o.is(this.$enabledButtons) ? this.$enabledButtons.first() : o, this._setTabStop(e)
            },
            _mapToTabbable: function(t) {
                var e = this.$enabledButtons;
                return t.map(function(t, n) {
                    if ("radio" !== n.type || n.checked || "" === n.name) return n;
                    var o = f(n, e).filter(":checked");
                    return o.length ? o[0] : n
                })
            },
            _setTabStop: function(t) {
                var e = (t = this._mapToTabbable(t))[0],
                    n = this._lastTabStop;
                e !== n && (n && n.setAttribute("tabindex", "-1"), t[0] && t[0].setAttribute("tabindex", "0"), this._lastTabStop = e)
            },
            _handleKeyDown: function(t, e) {
                switch (t.which) {
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.DOWN:
                        if ("radio" !== e[0].getAttribute("type")) break;
                    case n.ui.keyCode.LEFT:
                    case n.ui.keyCode.RIGHT:
                        t.preventDefault();
                        var o = this.$enabledButtons,
                            s = o.length;
                        if (s < 2) break;
                        var i = (o.index(e) + (t.which === n.ui.keyCode.DOWN || t.which === n.ui.keyCode.RIGHT !== this.isRtl ? 1 : -1) + s) % s;
                        o.eq(i).focus()
                }
            },
            _destroy: function() {
                var t = this.element[0];
                y(t, "oj-buttonset oj-component " + d), t.removeAttribute(i._OJ_CONTAINER_ATTR), t.removeAttribute("role"), "oneTabstop" === this.options.focusManagement && this.$buttons.attr("tabindex", "0"), this.$buttons.map(function() {
                    return n(this).ojButton("widget")[0]
                }).removeClass("oj-buttonset-first oj-buttonset-last").end().ojButton("destroy")
            }
        }), i.setDefaultOptions({
            ojButton: {
                chroming: i.createDynamicPropertyGetter(function(t) {
                    return _("button", t.element, t.containers)
                })
            },
            ojButtonset: {
                chroming: i.createDynamicPropertyGetter(function(t) {
                    return _("buttonset", t.element, t.containers)
                })
            }
        })
    }()
});
//# sourceMappingURL=ojbutton.js.map