/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojtranslation", "jquery", "hammerjs", "ojs/ojcontext", "ojs/ojjquery-hammer", "ojs/ojcomponentcore", "ojs/ojdomutils"], function(e, t, n, r, i, s, a, o, l) {
    "use strict";
    var u;
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s, (u = {
        properties: {
            data: {
                type: "object"
            },
            translations: {
                type: "object",
                value: {},
                properties: {
                    ariaDisabledLabel: {
                        type: "string"
                    },
                    ariaInBetweenText: {
                        type: "string"
                    },
                    ariaKeyboardInstructionText: {
                        type: "string"
                    },
                    ariaOthersLabel: {
                        type: "string"
                    },
                    ariaTouchInstructionText: {
                        type: "string"
                    },
                    indexerCharacters: {
                        type: "string"
                    },
                    indexerOthers: {
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
    }).extension._WIDGET_NAME = "ojIndexer", u.extension._INNER_ELEM = "ul", u.extension._GLOBAL_TRANSFER_ATTRS = ["aria-label", "aria-labelledby"], t.CustomElementBridge.register("oj-indexer", {
        metadata: u
    });
    const d = function() {};
    t._registerLegacyNamespaceProp("IndexerModel", d), d.SECTION_OTHERS = {
        id: "__others__",
        label: n.getTranslatedString("oj-ojIndexer.indexerOthers")
    }, t.__registerWidget("oj.ojIndexer", r.oj.baseComponent, {
        defaultElement: "<ul>",
        version: "1.2",
        widgetEventPrefix: "oj",
        options: {
            data: null
        },
        _ComponentCreate: function() {
            this._super(), this._setup()
        },
        _AfterCreate: function() {
            this._super(), this._createIndexerContent(), this._setAriaProperties(), this._createInstructionText()
        },
        _destroy: function() {
            this._super();
            var e = this._getIndexerContainer();
            this._unregisterResizeListener(e), this._unregisterTouchHandler(e), this._unsetAriaProperties(), this.element.removeClass("oj-component-initnode"), l.unwrap(this.element, e)
        },
        _setOption: function(e, t) {
            this._superApply(arguments), "data" === e && this.refresh()
        },
        _SetupResources: function() {
            this._super();
            var e = this._getIndexerContainer()[0];
            this._registerResizeListener(e), this._registerTouchHandler(e)
        },
        _ReleaseResources: function() {
            this._super();
            var e = this._getIndexerContainer()[0];
            this._unregisterResizeListener(e), this._unregisterTouchHandler(e), this._resolveBusyState()
        },
        _resolveBusyState: function() {
            this.busyStateResolve && (this.busyStateResolve(null), this.busyStateResolve = null)
        },
        widget: function() {
            return this._getIndexerContainer()
        },
        refresh: function() {
            this._super(), this.element.empty(), this._createIndexerContent(), this._setAriaProperties(), this.m_current = null
        },
        getNodeBySubId: function(e) {
            if (null == e) return this.element ? this.element[0] : null;
            if ("oj-indexer-section" === e.subId)
                for (var t = e.section, n = this.element.children("li"), i = 0; i < n.length; i++) {
                    var s = n.get(i);
                    if (r(s).data("data-range") === t) return s;
                    var a = r(s).data("data-includes");
                    if (null != a)
                        for (var o = 0; o < a.length; o++)
                            if (a[o] === t) return s
                }
            return null
        },
        getSubIdByNode: function(e) {
            if (null != e) {
                var t = r(e).data("data-range");
                if (null != t) return {
                    subId: "oj-indexer-section",
                    section: t
                }
            }
            return null
        },
        _setAriaProperties: function() {
            this.element.attr("role", "slider").attr("aria-orientation", "vertical").attr("aria-describedby", this.element.prop("id") + ":desc").attr("aria-valuemin", 0).attr("aria-valuemax", Math.max(0, this.element.children().length - 1))
        },
        _unsetAriaProperties: function() {
            this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext")
        },
        _createInstructionText: function() {
            var e;
            e = l.isTouchSupported() ? "ariaTouchInstructionText" : "ariaKeyboardInstructionText";
            var t = r(document.createElement("div"));
            t.prop("id", this.element.prop("id") + ":desc"), t.addClass("oj-helper-hidden-accessible").text(this.getTranslatedString(e)), this._getIndexerContainer().append(t)
        },
        _getIndexerContainer: function() {
            return null == this.m_container && (this.m_container = this._createIndexerContainer()), this.m_container
        },
        _createIndexerContainer: function() {
            var e;
            return this.OuterWrapper ? e = r(this.OuterWrapper) : (e = r(document.createElement("div")), this.element.parent()[0].replaceChild(e[0], this.element[0])), e.addClass("oj-indexer oj-component"), e.prepend(this.element), e
        },
        _createIndexerContent: function() {
            var e = this._getIndexerModel();
            if (null != e) {
                var t, n = this.element,
                    r = e.getIndexableSections();
                e.getMissingSections && (t = e.getMissingSections());
                var i = this.getTranslatedString("indexerOthers"),
                    s = this.widget().outerHeight(),
                    a = this._createItem(r[0], t);
                n.append(a), this._getIndexerContainer().removeClass("oj-indexer-abbr"), null == this.m_itemHeight && (this.m_itemHeight = a.outerHeight());
                var o = Math.max(1, this.m_itemHeight),
                    l = Math.floor(s / o),
                    u = Math.floor((r.length + 1) / l) + 1;
                u > 1 && this._getIndexerContainer().addClass("oj-indexer-abbr");
                for (var d = 1 + u; d < r.length; d = d + u + 1) {
                    if (u > 1) {
                        var h = this._createSeparator(r, d - u, d - 1);
                        n.append(h)
                    } else d -= 1;
                    var c = r[d],
                        _ = this._createItem(c, t);
                    n.append(_)
                }
                var g = this._createItem(r[r.length - 1], t);
                n.append(g);
                var p = this._createItem(i);
                p.attr("data-others", "true"), n.append(p), null == this.m_height && (this.m_height = s)
            }
        },
        _createItem: function(e, t) {
            var n = e.label ? e.label : e,
                i = r(document.createElement("li"));
            return i.data("data-range", e).text(n), null != t && t.indexOf(e) > -1 && i.addClass("oj-disabled"), i
        },
        _createSeparator: function(e, t, n) {
            var i = [],
                s = r(document.createElement("li"));
            s.addClass("oj-indexer-ellipsis").data("data-range", e[t + Math.round((n - t) / 2)]);
            for (var a = t; a <= n; a++) i.push(e[a]);
            return s.data("data-includes", i), s
        },
        _setup: function() {
            var e = this;
            this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex", 0), this._on(this.element, {
                click: function(t) {
                    e._handleClick(t)
                },
                keydown: function(t) {
                    e._handleKeyDown(t)
                },
                focus: function(t) {
                    e._handleFocus(t)
                },
                blur: function(t) {
                    e._handleBlur(t)
                }
            }), this._focusable({
                applyHighlight: !0,
                setupHandlers: function(t, n) {
                    e._focusInHandler = t, e._focusOutHandler = n
                }
            })
        },
        _handleClick: function(e) {
            var t;
            0 === e.button && (t = r(e.target), this._setCurrent(t))
        },
        _handleFocus: function(e) {
            this._getIndexerContainer().addClass("oj-focus-ancestor"), null == this.m_current ? this._setFocus(this.element.children("li").first()) : this._setFocus(this.m_current)
        },
        _handleBlur: function(e) {
            this._getIndexerContainer().removeClass("oj-focus-ancestor")
        },
        _handleKeyDown: function(e) {
            var t, n = !1;
            switch (e.keyCode) {
                case 38:
                    t = this.m_current.prev();
                    break;
                case 40:
                    t = this.m_current.next();
                    break;
                case 13:
                    this._setCurrent(this.m_current), n = !0
            }
            null != t && t.length > 0 && (n = !0, this._setFocus(t)), n && e.preventDefault()
        },
        _setFocus: function(e) {
            null != this.m_current && this._focusOutHandler(this.m_current), this._focusInHandler(e), this._updateAriaProperties(e), this.m_current = e
        },
        _getIndexerModel: function() {
            var e = this.option("data");
            if (null != e && (void 0 === e.setSection || void 0 === e.getIndexableSections)) throw new Error("Invalid IndexerModel");
            return e
        },
        _setCurrent: function(e) {
            var t = e.data("data-range");
            e.attr("data-others") && (t = d.SECTION_OTHERS), this._setCurrentSection(t)
        },
        _setCurrentSection: function(e) {
            var t = this,
                n = s.getContext(this.element[0]).getBusyContext();
            this.busyStateResolve = n.addBusyState({
                description: "setCurrentSection"
            }), this._getIndexerModel().setSection(e).then(function(e) {
                if (null != e) {
                    var n = t._findItem(e);
                    null != n && t._setFocus(n)
                }
                t._resolveBusyState()
            }, function() {
                t._resolveBusyState()
            })
        },
        _updateAriaProperties: function(e) {
            var t = e.data("data-includes"),
                n = "";
            if (null != t) {
                if (t.length > 0) {
                    var r = t[0].label ? t[0].label : t[0],
                        i = t[t.length - 1].label ? t[t.length - 1].label : t[t.length - 1];
                    n = this.getTranslatedString("ariaInBetweenText", {
                        first: r,
                        second: i
                    })
                }
            } else {
                var s = e.data("data-range");
                n = s === d.SECTION_OTHERS ? this.getTranslatedString("ariaOthersLabel") : s
            }
            e.hasClass("oj-disabled") && (n = n + ". " + this.getTranslatedString("ariaDisabledLabel")), this.element.attr("aria-valuetext", n), this.element.attr("aria-valuenow", e.index())
        },
        _findItem: function(e) {
            for (var t = this.element.children(), n = 0; n < t.length; n++) {
                var i = t.get(n),
                    s = r(i).data("data-range"),
                    a = r(i).data("data-includes");
                if (null != s && s === e || null != a && a.indexOf(e) > -1) return r(i)
            }
            return null
        },
        _unregisterResizeListener: function(e) {
            e && this._resizeHandler && l.removeResizeListener(e, this._resizeHandler)
        },
        _registerResizeListener: function(e) {
            e && (null == this._resizeHandler && (this._resizeHandler = this._handleResize.bind(this)), l.addResizeListener(e, this._resizeHandler))
        },
        _unregisterTouchHandler: function(e) {
            this.hammer && (this.hammer.off("panstart panmove panend"), r(e).ojHammer("destroy")), this.hammer = null
        },
        _registerTouchHandler: function(e) {
            var t, n, s, a, o, l = this,
                u = {
                    recognizers: [
                        [i.Pan, {
                            direction: i.DIRECTION_VERTICAL
                        }]
                    ]
                };
            this.hammer = r(e).ojHammer(u).on("panstart", function(e) {
                var i = e.gesture.target;
                t = l.element[0].getBoundingClientRect().left + 5, n = i.getBoundingClientRect().top, l._setCurrent(r(i)), s = i, a = r(i).data("data-range"), o = n
            }).on("panmove", function(e) {
                var i = o;
                o = n + e.gesture.deltaY;
                var u = document.elementFromPoint(t, o);
                if (null != u) {
                    var d, h, c = o - i;
                    if (s === u) {
                        if (null != (d = r(u).data("data-includes"))) {
                            var _ = d.indexOf(a);
                            h = null, c > 0 && _ < d.length - 1 ? h = d[_ + 1] : c < 0 && _ > 0 && (h = d[_ - 1]), null != h && (a = h, l._setCurrentSection(h))
                        }
                    } else r(u).data("data-range") && (h = null, null != (d = r(u).data("data-includes")) && (c > 0 && u === s.nextElementSibling ? h = d[0] : c < 0 && u === s.previousElementSibling && (h = d[d.length - 1])), null == h && (h = r(u).data("data-range")), s = u, a = h, l._setCurrentSection(a))
                }
            }).on("panend", function() {
                s = null, a = null, o = null
            })
        },
        _handleResize: function(e, t) {
            t > 0 && t !== this.m_height && (this.refresh(), this.m_height = t)
        }
    });
    const h = function(e) {
        this.listview = e, this.Init()
    };
    t._registerLegacyNamespaceProp("ListViewIndexerModel", h), t.Object.createSubclass(h, t.EventSource, "oj.ListViewIndexerModel"), h.prototype.getIndexableSections = function() {
        return this.listview.ojContext.getTranslatedString("indexerCharacters").split("|")
    }, h.prototype.getMissingSections = function() {
        return null == this.missingSections && (this.missingSections = this._getMissingSections()), this.missingSections
    }, h.prototype._getMissingSections = function() {
        var e, t = [],
            n = this.listview._getGroupItemsCache(),
            i = this.getIndexableSections();
        for (e = 0; e < i.length; e++) {
            var s = i[e],
                a = !1;
            n.each(function() {
                var e = r(this).text();
                return !(e.length > 0 && e.charAt(0) === s) || (a = !0, !1)
            }), a || t.push(s)
        }
        return t
    }, h.prototype.setSection = function(e) {
        return e === d.SECTION_OTHERS ? this._setOtherSection() : this._setSection(e)
    }, h.prototype._setOtherSection = function() {
        var e = this.getIndexableSections(),
            t = this;
        return new Promise(function(n) {
            var i = null;
            t.listview._getGroupItemsCache().each(function() {
                for (var t = r(this).text(), n = 0; n < e.length; n++) {
                    var s = e[n];
                    if (0 === t.indexOf(s)) return !0
                }
                return i = this, !1
            }), i ? (t.listview._scrollToGroupHeader(i), n(d.SECTION_OTHERS)) : n(null)
        })
    }, h.prototype._setSection = function(e) {
        var t = this.getIndexableSections(),
            n = t.indexOf(e),
            r = this;
        return new Promise(function(e) {
            if (-1 === n) e(null);
            else {
                for (var i = null; n < t.length; n++) {
                    var s = t[n],
                        a = r._findGroupHeader(s);
                    if (null != a) {
                        r.listview._scrollToGroupHeader(a), i = s;
                        break
                    }
                }
                e(i)
            }
        })
    }, h.prototype._findGroupHeader = function(e) {
        var t;
        return this.listview._getGroupItemsCache().each(function() {
            return 0 !== r(this).text().indexOf(e) || (t = this, !1)
        }), t
    }, e.ListViewIndexerModel = h, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojindexer.js.map