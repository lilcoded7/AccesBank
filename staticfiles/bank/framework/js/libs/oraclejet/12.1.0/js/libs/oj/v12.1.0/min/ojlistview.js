/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["require", "ojs/ojcore-base", "jquery", "ojs/ojcustomelement", "ojs/ojdataproviderscroller", "ojs/ojcontext", "ojs/ojconfig", "ojs/ojthemeutils", "ojs/ojcomponentcore", "ojs/ojdatacollection-common", "ojs/ojanimation", "ojs/ojlogger", "ojs/ojkeyset", "ojs/ojmap", "ojs/ojdomutils", "ojs/ojdataprovideradapter", "ojs/ojcustomelement-utils", "ojs/ojkeyboardfocus-utils", "ojs/ojindexer"], function(t, e, i, s, n, l, o, r, a, h, c, u, d, m, p, g, f, _, v) {
    "use strict";
    var y;
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l, m = m && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m, (y = {
        properties: {
            as: {
                type: "string",
                value: ""
            },
            currentItem: {
                type: "any",
                writeback: !0
            },
            data: {
                type: "object",
                extension: {
                    webelement: {
                        exceptionStatus: [{
                            type: "deprecated",
                            since: "11.0.0",
                            description: "Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."
                        }]
                    }
                }
            },
            display: {
                type: "string",
                enumValues: ["card", "list"],
                value: "list"
            },
            dnd: {
                type: "object",
                properties: {
                    drag: {
                        type: "object",
                        properties: {
                            items: {
                                type: "object",
                                properties: {
                                    dataTypes: {
                                        type: "string|Array<string>"
                                    },
                                    drag: {
                                        type: "function"
                                    },
                                    dragEnd: {
                                        type: "function"
                                    },
                                    dragStart: {
                                        type: "function"
                                    }
                                }
                            }
                        }
                    },
                    drop: {
                        type: "object",
                        properties: {
                            items: {
                                type: "object",
                                properties: {
                                    dataTypes: {
                                        type: "string|Array<string>"
                                    },
                                    dragEnter: {
                                        type: "function"
                                    },
                                    dragLeave: {
                                        type: "function"
                                    },
                                    dragOver: {
                                        type: "function"
                                    },
                                    drop: {
                                        type: "function"
                                    }
                                }
                            }
                        }
                    },
                    reorder: {
                        type: "object",
                        properties: {
                            items: {
                                type: "string",
                                enumValues: ["disabled", "enabled"],
                                value: "disabled"
                            }
                        }
                    }
                }
            },
            drillMode: {
                type: "string",
                enumValues: ["collapsible", "none"],
                value: "collapsible"
            },
            expanded: {
                type: "KeySet",
                writeback: !0
            },
            firstSelectedItem: {
                type: "object",
                writeback: !0,
                readOnly: !0,
                value: {
                    key: null,
                    data: null
                }
            },
            gridlines: {
                type: "object",
                properties: {
                    item: {
                        type: "string",
                        enumValues: ["hidden", "visible", "visibleExceptLast"],
                        value: "visible"
                    }
                }
            },
            groupHeaderPosition: {
                type: "string",
                enumValues: ["static", "sticky"],
                value: "sticky"
            },
            item: {
                type: "object",
                properties: {
                    focusable: {
                        type: "boolean|function",
                        value: !0
                    },
                    renderer: {
                        type: "function"
                    },
                    selectable: {
                        type: "boolean|function",
                        value: !0
                    }
                }
            },
            scrollPolicy: {
                type: "string",
                enumValues: ["auto", "loadAll", "loadMoreOnScroll"],
                value: "auto"
            },
            scrollPolicyOptions: {
                type: "Object<string, number>",
                properties: {
                    fetchSize: {
                        type: "number",
                        value: 25
                    },
                    maxCount: {
                        type: "number",
                        value: 500
                    },
                    scroller: {
                        type: "Element|string"
                    }
                }
            },
            scrollPosition: {
                type: "object",
                writeback: !0,
                value: {
                    x: 0,
                    y: 0
                },
                properties: {
                    index: {
                        type: "number"
                    },
                    key: {
                        type: "any"
                    },
                    offsetX: {
                        type: "number"
                    },
                    offsetY: {
                        type: "number"
                    },
                    parent: {
                        type: "any"
                    },
                    x: {
                        type: "number"
                    },
                    y: {
                        type: "number"
                    }
                }
            },
            scrollToKey: {
                type: "string",
                enumValues: ["always", "auto", "capability", "never"],
                value: "auto"
            },
            selected: {
                type: "KeySet",
                writeback: !0
            },
            selection: {
                type: "Array<any>",
                writeback: !0,
                value: []
            },
            selectionMode: {
                type: "string",
                enumValues: ["multiple", "none", "single"],
                value: "none"
            },
            selectionRequired: {
                type: "boolean",
                value: !1
            },
            translations: {
                type: "object",
                value: {},
                properties: {
                    accessibleNavigateSkipItems: {
                        type: "string"
                    },
                    accessibleReorderAfterItem: {
                        type: "string"
                    },
                    accessibleReorderBeforeItem: {
                        type: "string"
                    },
                    accessibleReorderInsideItem: {
                        type: "string"
                    },
                    accessibleReorderTouchInstructionText: {
                        type: "string"
                    },
                    indexerCharacters: {
                        type: "string"
                    },
                    labelCopy: {
                        type: "string"
                    },
                    labelCut: {
                        type: "string"
                    },
                    labelPaste: {
                        type: "string"
                    },
                    labelPasteAfter: {
                        type: "string"
                    },
                    labelPasteBefore: {
                        type: "string"
                    },
                    msgFetchCompleted: {
                        type: "string"
                    },
                    msgFetchingData: {
                        type: "string"
                    },
                    msgItemsAppended: {
                        type: "string"
                    },
                    msgNoData: {
                        type: "string"
                    }
                }
            }
        },
        methods: {
            getContextByNode: {},
            getDataForVisibleItem: {},
            getIndexerModel: {},
            getProperty: {},
            refresh: {},
            scrollToItem: {},
            setProperties: {},
            setProperty: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        events: {
            ojAnimateEnd: {},
            ojAnimateStart: {},
            ojBeforeCollapse: {},
            ojBeforeCurrentItem: {},
            ojBeforeExpand: {},
            ojCollapse: {},
            ojCopy: {},
            ojCut: {},
            ojExpand: {},
            ojItemAction: {},
            ojPaste: {},
            ojReorder: {}
        },
        extension: {}
    }).extension._WIDGET_NAME = "ojListView", y.extension._INNER_ELEM = "ul", y.extension._GLOBAL_TRANSFER_ATTRS = ["aria-label", "aria-labelledby"], e.CustomElementBridge.register("oj-list-view", {
        metadata: y
    });
    const S = function(t, e) {
        this.m_widget = t, this.m_root = e
    };
    e._registerLegacyNamespaceProp("StaticContentHandler", S), e.Object.createSubclass(S, e.Object, "oj.StaticContentHandler"), S.prototype.Init = function() {
        S.superclass.Init.call(this)
    }, S.prototype.Destroy = function() {
        this.m_root.hasAttribute("role") && (this.restoreContent(this.m_root, 0), this.unsetRootAriaProperties())
    }, S.prototype.IsReady = function() {
        return !0
    }, S.prototype.notifyShown = function() {}, S.prototype.notifyAttached = function() {}, S.prototype.RenderContent = function() {
        var t = this.m_root;
        if (this.shouldUseGridRole() && this.isCardLayout() && !this.IsHierarchical() && i(t).children("li").length > 0) {
            i(this.m_root).children().wrapAll("<li role='presentation'><ul role='row' class='" + this.m_widget.getGroupStyleClass() + "'></ul></li>");
            var e = i(this.m_root).children("li").first().get(0);
            e.style.width = "100%", e.classList.add("oj-listview-group-container"), t = e.firstElementChild
        }
        this.modifyContent(t, 0), this.setRootAriaProperties(), this.m_widget.renderComplete(!1);
        var s = this;
        l.getContext(t).getBusyContext().whenReady().then(function() {
            if (null != t)
                for (var e = i(t).find("li." + s.m_widget.getItemElementStyleClass()), n = 0; n < e.length; n++) s.m_widget.disableAllTabbableElements(e[n])
        })
    }, S.prototype.Expand = function(t, e) {
        var s = "." + this.m_widget.getGroupStyleClass(),
            n = i(t).children(s)[0];
        i(n).css("display", ""), e.call(null, n)
    }, S.prototype.Collapse = function(t) {
        t.get(0).style.display = "none"
    }, S.prototype.IsHierarchical = function() {
        return null == this.m_hier && (this.m_hier = i(this.m_root).children("li").children("ul").length > 0), this.m_hier
    }, S.prototype.restoreContent = function(t, e) {
        var s = this.m_widget.getGroupStyleClass(),
            n = this.m_widget.getGroupCollapseStyleClass(),
            l = this.m_widget.getGroupExpandStyleClass(),
            o = this.m_widget.getGroupItemStyleClass(),
            r = this.m_widget.getItemStyleClass(),
            a = this.m_widget.getItemElementStyleClass(),
            h = null;
        this.m_widget.getItemLayoutStyleClass && (h = this.m_widget.getItemLayoutStyleClass());
        var c = t.firstElementChild;
        c && c.classList.contains("oj-listview-group-container") && i(c).children().unwrap().children().unwrap();
        for (var u = t.children, d = 0; d < u.length; d++) {
            var m = i(u[d]);
            if (m.hasClass(a)) {
                this.unsetAriaProperties(m.get(0)), m.hasClass("oj-listview-card") && (m.removeClass("oj-listview-card").removeClass("oj-listview-card-animated"), m[0].style.opacity = "unset", m[0].style.transform = "unset"), m.removeClass(a).removeClass(r).removeClass(h).removeClass(this.m_widget.getDepthStyleClass(e)).removeClass("gridline-hidden").removeClass("oj-listview-item").removeClass("oj-listview-item-element").removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected");
                var p = m.children("ul");
                if (p.length > 0) {
                    m.children("." + o).children().unwrap(), this.shouldUseGridRole() && this.unsetGroupAriaProperties(m), m.children(".oj-component-icon").remove();
                    var g = i(p[0]);
                    g.removeClass(s).removeClass(l).removeClass(n).removeAttr("role"), this.restoreContent(g[0], e + 1)
                }
            }
        }
    }, S.prototype.modifyContent = function(t, e) {
        for (var s = this.m_widget.getItemStyleClass(), n = this.m_widget.getItemElementStyleClass(), l = this.m_widget.getGroupStyleClass(), o = this.m_widget.getGroupItemStyleClass(!0), r = this.m_widget.getGroupCollapseStyleClass(), a = this.m_widget.getCollapseIconStyleClass(), h = this.m_widget.getFocusedElementStyleClass(), c = t.children, u = this.m_widget.isExpandable(), d = 0; d < c.length; d++) {
            var m = i(c[d]),
                p = this.createContext(m);
            this.setAriaProperties(m, p), m.uniqueId().addClass(n), e > 0 && m.addClass(this.m_widget.getDepthStyleClass(e)), this.isFocusable(p) || m.addClass("oj-skipfocus");
            var g = m.children("ul");
            if (g.length > 0) {
                this.m_hier = !0, m.children(":not(ul)").wrapAll("<div></div>");
                var f = m.children().first();
                f.addClass(o);
                var _ = this.getItemsCount(g[0]);
                if (_ > 0) {
                    if (m.hasClass(h) ? (m.removeClass(h), f.addClass(h).attr("aria-expanded", "false")) : (f.attr("role", "presentation"), f.find("." + h).attr("aria-expanded", "false")), u) {
                        m.addClass("oj-collapsed"), f.uniqueId();
                        var v = document.createElement("a");
                        i(v).attr("href", "#").attr("role", "button").attr("aria-labelledby", f.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(a), f.prepend(v)
                    }
                } else f.addClass("oj-empty");
                this.shouldUseGridRole() && this.setGroupAriaProperties(f, _);
                var y, S = i(g[0]);
                y = this.shouldUseGridRole() ? this.isCardLayout() ? "row" : "presentation" : "group", S.addClass(l).addClass(r).attr("role", y).css("display", "none"), this.modifyContent(S[0], e + 1)
            } else m.addClass(s);
            this.m_widget._isSelectionEnabled() && this.isSelectable(p) && this.m_widget.getFocusItem(m).attr("aria-selected", !1), this.m_widget.itemRenderComplete(m[0], p)
        }
    }, S.prototype.setRootAriaProperties = function() {
        this.shouldUseGridRole() ? this.m_root.setAttribute("role", "grid") : this.IsHierarchical() ? this.m_root.setAttribute("role", "tree") : this.m_root.setAttribute("role", "listbox")
    }, S.prototype.unsetRootAriaProperties = function() {
        this.m_root.removeAttribute("role")
    }, S.prototype.getItemsCount = function(t) {
        return i(t).children("li").length
    }, S.prototype.createContext = function(t) {
        var e = {};
        if (e.key = t.attr("id"), e.parentElement = t.children().first()[0], e.index = t.index(), e.data = t[0], e.component = this.m_widget.getWidgetConstructor(), e = this.m_widget._FixRendererContext(e), this.IsHierarchical()) {
            e.leaf = 0 === t.children("ul").length;
            var i = t.parents("li." + this.m_widget.getItemElementStyleClass());
            e.depth = i.length, 0 === i.length ? e.parentKey = null : e.parentKey = i.first().attr("id")
        }
        return e
    }, S.prototype.setAriaProperties = function(t, e) {
        var i = this.m_widget.getSingleFocusableElement(t);
        this.shouldUseGridRole() ? null == e.leaf || e.leaf ? this.isCardLayout() ? i.attr("role", "gridcell") : (t.attr("role", "row"), i !== t ? i.attr("role", "gridcell") : i.children().wrapAll("<div role='gridcell' class='oj-listview-cell-element'></div>")) : (t.attr("role", "presentation"), i !== t && i.attr("role", "gridcell")) : (i.attr("role", this.IsHierarchical() ? "treeitem" : "option"), i !== t && t.attr("role", "presentation")), i.addClass(this.m_widget.getFocusedElementStyleClass())
    }, S.prototype.setGroupAriaProperties = function(t, e) {
        var i = this.m_widget.getFocusedElementStyleClass();
        t.get(0).removeAttribute("aria-expanded"), t.removeClass(i), t.attr("role", "row"), t.children().wrapAll("<div role='gridcell' aria-expanded='false' class='oj-listview-cell-element " + i + "'></div>"), this.isCardLayout() && e > 1 && t.children().first().attr("aria-colspan", e)
    }, S.prototype.unsetGroupAriaProperties = function(t) {
        t.children("div").first().children().unwrap()
    }, S.prototype.unsetAriaProperties = function(t) {
        h.enableAllFocusableElements(t);
        var e, s = this.m_widget.getGroupItemStyleClass(!0),
            n = this.m_widget.getFocusedElementStyleClass(),
            l = t.firstElementChild;
        if (l && i(l).hasClass(s)) {
            if (0 === (e = i(l).children("." + n).first()).length) return
        } else e = this.m_widget.getSingleFocusableElement(i(t));
        e.removeAttr("role"), e.removeAttr("aria-selected"), e.removeAttr("aria-expanded"), e.removeClass(this.m_widget.getFocusedElementStyleClass()), this.shouldUseGridRole() && !this.isCardLayout() && (e !== t ? (i(t).removeAttr("role"), e.children().first().children().unwrap()) : e.children().first().children().unwrap().children().unwrap())
    }, S.prototype.GetKey = function(t) {
        return i(t).attr("id")
    }, S.prototype.FindElementByKey = function(t) {
        return document.getElementById(t)
    }, S.prototype.isFocusable = function(t) {
        return this.m_widget.getItemFocusable(t)
    }, S.prototype.isSelectable = function(t) {
        return this.m_widget.getItemSelectable(t)
    }, S.prototype.isCardLayout = function() {
        return this.m_widget.isCardLayout()
    }, S.prototype.shouldUseGridRole = function() {
        return this.m_widget.ShouldUseGridRole()
    }, S.prototype.createKeyMap = function(t) {
        var e = new m;
        return t ? (t.forEach(function(t, i) {
            e.set(i, t)
        }), e) : e
    }, S.prototype.createKeySet = function(t) {
        return new d.KeySet(t)
    };
    const C = function(t, e, i) {
        C.superclass.constructor.call(this, t, e, i)
    };
    e._registerLegacyNamespaceProp("TreeDataProviderContentHandler", C), e.Object.createSubclass(C, n.DataProviderContentHandler, "oj.TreeDataProviderContentHandler"), C.NUM_CHILD_SKELETONS = 3, C.prototype.Init = function() {
        C.superclass.Init.call(this), this.m_childDataProviders = new m, this.m_fetchCalls = new Set
    }, C.prototype.IsHierarchical = function() {
        return !0
    }, C.prototype._getChildDataProvider = function(t) {
        if (null === t) return this.getDataProvider();
        var e = this.m_childDataProviders.get(t);
        return null == e && (e = this.getDataProvider().getChildDataProvider(t)) && this.m_childDataProviders.set(t, e), e
    }, C.prototype.fetchRows = function(t) {
        this.signalTaskStart("fetching rows"), C.superclass.fetchRows.call(this, t), this.m_fetchCalls.clear(), this._fetchChildren(null, this.m_root, null), this.signalTaskEnd()
    }, C.prototype._fetchChildren = function(t, e, s, n) {
        var l = this;
        this.signalTaskStart("fetching children from parent: " + t);
        var o = this.loadTemplateEngine();
        if (null != t) {
            var r = e.parentNode.firstElementChild.firstElementChild.firstElementChild;
            if (r) {
                r = i(r);
                var a = this.m_widget.getCollapseIconStyleClass();
                if (r.hasClass(a)) {
                    var h = this.isSkeletonSupport() ? this.m_widget.getExpandIconStyleClass() : this.m_widget.getExpandingIconStyleClass();
                    r.removeClass(a).addClass(h)
                }
            }
        }
        this.m_fetching = !0, null != t && this.m_fetchCalls.add(t), this._clientId = this._clientId || Symbol();
        var c = {
            clientId: this._clientId,
            size: -1
        };
        this.signalTaskStart("first fetch");
        var u = this._getChildDataProvider(t).fetchFirst(c)[Symbol.asyncIterator](),
            d = u.next(),
            m = function(i) {
                return i[0].done ? i : u.next().then(function(t) {
                    return i[0].done = t.done, i[0].value.data = i[0].value.data.concat(t.value.data), i[0].value.metadata = i[0].value.metadata.concat(t.value.metadata), m(i)
                }, function(i) {
                    null != t && l.m_fetchCalls.delete(t), n && n(i), l._handleFetchError(i, e), l.signalTaskEnd()
                })
            };
        Promise.all([d, o]).then(function(t) {
            return m(t)
        }, function(i) {
            null != t && l.m_fetchCalls.delete(t), l._handleFetchError(i, e), l.signalTaskEnd()
        }).then(function(i) {
            if (i) {
                if (null == l.m_widget) return void l.signalTaskEnd();
                var n = i[0],
                    o = i[1];
                o && l.cleanItems(o, e), l._handleFetchSuccess(n, t, e, s, o), l.signalTaskEnd()
            }
        }), this.signalTaskEnd()
    }, C.prototype._getAtomicFetchChildPromise = function() {
        var t = this;
        return new Promise(function(e, i) {
            t.m_fetchResolve = e
        })
    }, C.prototype._handleFetchSuccess = function(t, e, s, n, l) {
        var o = this;
        if (null != this.m_widget && null != t.value) {
            this.signalTaskStart("handling successful fetch"), this.m_fetching = !1, null != e && this.m_fetchCalls.delete(e);
            var r = t.value.data,
                a = t.value.metadata.map(function(t) {
                    return t.key
                }),
                h = t.value.metadata;
            if (r.length === a.length) {
                for (var c = 0, u = document.createDocumentFragment(), d = 0; d < r.length; d++) {
                    var m = r[d];
                    this.addItem(u, -1, m, this.getMetadata(c, a[d], m, s), l, null, h[d]), c += 1
                }
                if (null == this.m_fetchResolve && this.shouldUseGridRole() ? this.m_fetchCalls.size > 0 ? (this.m_widget.signalTaskStart("Animating in content"), this._getAtomicFetchChildPromise().then(function() {
                        this.animateShowContent(s, u, !0).then(function() {
                            this.m_widget && this.m_widget.signalTaskEnd(), g()
                        }.bind(this))
                    }.bind(this))) : (this.m_widget.signalTaskStart("Animating in content"), this.animateShowContent(s, u, !0).then(function() {
                        this.m_widget && this.m_widget.signalTaskEnd(), g()
                    }.bind(this))) : (i(s).empty(), s.appendChild(u), this.shouldUseGridRole() ? null != n && n.call(null, s) : g()), this.shouldUseGridRole() && this.isCardLayout() && null != e && c > 0) {
                    var p = s.parentNode.firstElementChild.firstElementChild;
                    i(p).attr("aria-colspan", c + 1)
                }
            }
            0 === this.m_fetchCalls.size && null != this.m_fetchResolve && (this.m_fetchResolve(), this.m_fetchResolve = null), this.m_initialized = !0, this.signalTaskEnd()
        }

        function g() {
            o.m_widget && (null != n && n.call(null, s), o.m_widget.renderComplete(!1), o._processEventQueue())
        }
    }, C.prototype.getMetadata = function(t, e, i, s) {
        var n = C.superclass.getMetadata.call(this, t, e, i, s),
            l = this._getChildDataProvider(e);
        n.leaf = null === l, n.parentKey = null, s && s !== this.m_root && s.parentElement && (n.parentKey = this.GetKey(s.parentElement));
        for (var o = 0, r = s; r && r !== this.m_root;) r = r.parentElement.parentElement, o += 1;
        return n.depth = o, n
    }, C.prototype.GetBindingContext = function(t) {
        var e = C.superclass.GetBindingContext.call(this, t);
        return e.depth = t.depth, e.leaf = t.leaf, e.parentKey = t.parentKey, e
    }, C.prototype.afterRenderItem = function(t, e, s) {
        this.signalTaskStart("after rendering an item"), C.superclass.afterRenderItem.call(this, t, e, s);
        var n = this.m_widget.getGroupStyleClass(),
            l = this.m_widget.getItemStyleClass(),
            o = this.m_widget.getGroupItemStyleClass(!0),
            r = this.m_widget.getGroupCollapseStyleClass(),
            a = this.m_widget.getCollapseIconStyleClass(),
            h = this.m_widget.getFocusedElementStyleClass();
        if (t = i(t), !1 === e.leaf) {
            null == t.get(0).querySelector("." + o) && t.children().wrapAll("<div></div>"), t.hasClass(h) ? t.removeClass(h).children().first().addClass(h).attr("aria-expanded", "false") : t.children().first().attr("role", "presentation").find("." + h).attr("aria-expanded", "false");
            var c = t.children().first();
            if (c.uniqueId().addClass(o), this.m_widget.isExpandable() && !t.hasClass("oj-expanded") && !t.hasClass("oj-collapsed")) {
                t.addClass("oj-collapsed");
                var u = document.createElement("a");
                i(u).attr("aria-labelledby", c.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(a), c.prepend(u)
            }
            if (this.shouldUseGridRole() && (c.get(0).removeAttribute("aria-expanded"), c.removeClass(h), c.attr("role", "row"), c.children().wrapAll("<div role='gridcell' aria-expanded='false' class='oj-listview-cell-element " + h + "'></div>")), null == t.get(0).querySelector("." + n)) {
                var d, m = document.createElement("ul");
                d = this.shouldUseGridRole() ? this.isCardLayout() ? "row" : "presentation" : "group", i(m).addClass(n).addClass(r).attr("role", d), t.append(m)
            }
        } else !0 === e.leaf && (t.addClass(l), !s && this.m_widget.getItemLayoutStyleClass && t.addClass(this.m_widget.getItemLayoutStyleClass()));
        this.m_widget._isSelectionEnabled() && this.isSelectable(e) && this.m_widget.getFocusItem(t).attr("aria-selected", !1), e.depth > 0 && t.addClass(this.m_widget.getDepthStyleClass(e.depth)), this.m_widget.itemRenderComplete(t[0], e), this.signalTaskEnd()
    }, C.prototype._handleFetchError = function(t, e) {
        if (null != this.m_widget) {
            u.error(t), this.m_fetching = !1, e && this._destroySkeletons(e);
            var i = this.m_root.querySelector(".oj-listview-initial-skeletons");
            null != i && i.parentNode.removeChild(i), 0 === this.m_fetchCalls.size && null != this.m_fetchResolve && (this.m_fetchResolve(), this.m_fetchResolve = null), this.m_widget.renderComplete(!0)
        } else u.info("handleFetchError: widget has already been destroyed")
    }, C.prototype.Expand = function(t, e) {
        this.signalTaskStart("expanding an item");
        var i, s = this.GetKey(t[0]),
            n = t.children("ul")[0];
        this.isSkeletonSupport() && (i = setTimeout(function() {
            this._renderExpandSkeletons(n)
        }.bind(this), this.m_widget._getShowStatusDelay())), this._fetchChildren(s, n, function(t) {
            i && clearTimeout(i), e(t), n.classList.remove("oj-listview-skeleton-container")
        }, function() {
            this._handleFetchError()
        }.bind(this)), this.signalTaskEnd()
    }, C.prototype.Collapse = function(t) {
        var e = this.getTemplateEngine();
        e && e.clean(t.get(0)), t.empty()
    }, C.prototype.addItemsForModelInsert = function(t, e, i, s, n, l, o) {
        for (var r = this.getTemplateEngine(), a = 0; a < t.length; a++) {
            this.signalTaskStart("handling model add event for item: " + i[a]);
            var h, c = this.m_root;
            void 0 !== s && (c = null == s[a] ? this.m_root : this.FindElementByKey(s[a])) && c !== this.m_root && (c = c.lastElementChild), null != e ? h = e[a] : (h = this.getIndex(l, a)) > -1 && (h = n ? h : h + 1), this.addItem(c, h, t[a], this.getMetadata(h, i[a], t[a], c), r, this.afterRenderItemForInsertEvent.bind(this), null != o ? o[a] : null), this.signalTaskEnd()
        }
        this.m_widget.renderComplete(!0)
    }, C.prototype.afterRenderItemForInsertEvent = function(t, e, i) {
        !1 === e.leaf ? this.afterRenderItem(t, e, i) : C.superclass.afterRenderItemForInsertEvent.call(this, t, e, i)
    }, C.prototype.removeItem = function(t, e) {
        var i = t.key;
        i && this.m_childDataProviders.delete(i), C.superclass.removeItem.call(this, t, e)
    }, C.prototype._isExpandedGroupItem = function(t) {
        return "none" === this.m_widget.GetOption("drillMode") || t.classList.contains("oj-expanded")
    }, C.prototype._replaceGroupItemCallback = function(t, e, i, s) {
        this.shouldUseGridRole() ? this.m_widget.itemRenderComplete(t, e) : this.afterRenderItem(t, e, i, s)
    }, C.prototype._replaceGroupItem = function(t, e, s, n, l, o) {
        var r = this.m_widget.getGroupItemStyleClass(!1),
            a = t.querySelector("." + r),
            h = this.shouldUseGridRole();
        if (a) {
            var c = h ? a.firstElementChild : a,
                u = c.lastElementChild;
            if (u) {
                l && l.clean(a), c.removeChild(u);
                var d = t.parentNode,
                    m = i(d).children().index(t),
                    p = this.GetChildElementTagName();
                this._addOrReplaceItem(t, m, d, e, s, n, l, this._replaceGroupItemCallback.bind(this), o, null, function(t) {
                    for (var e = 0; e < t.length; e++) {
                        if (t[e].tagName === p && !h) return a.innerHTML = t[e].innerHTML, !0;
                        c.appendChild(t[e])
                    }
                    return !1
                })
            }
        }
    }, C.prototype.replaceItem = function(t, e, i, s, n, l, o) {
        var r = t.key;
        r && this.m_childDataProviders.delete(r), !s.leaf && this._isExpandedGroupItem(t) ? this._replaceGroupItem(t, e, i, s, n, o) : C.superclass.replaceItem.call(this, t, e, i, s, n, l, o)
    }, C.prototype._handleChildRefresh = function(t) {
        var e = this.getTemplateEngine(),
            i = this.m_widget.getGroupStyleClass(),
            s = this.m_widget.getGroupItemStyleClass();
        t.forEach(function(t) {
            var n = this.FindElementByKey(t);
            if (null != n && this._isExpandedGroupItem(n)) {
                var l = n.querySelector("." + i),
                    o = n.querySelector("." + s);
                if (null != l && null != o) {
                    null != e && e.clean(l), l.innerHTML = "", this.m_childDataProviders.delete(t);
                    var r = o.querySelector("[aria-expanded]");
                    r && r.setAttribute("aria-expanded", "false"), this.m_widget.itemRenderComplete(n, {
                        key: t,
                        data: null
                    })
                }
            }
        }.bind(this))
    }, C.prototype.handleModelRefreshEvent = function(t) {
        null != this.m_root && (this.IsReady() ? t.detail && t.detail.keys ? this._handleChildRefresh(t.detail.keys) : (this.signalTaskStart("handling model refresh event"), this._clearEventQueue(), this.m_widget.ClearCache(!0), this.m_childDataProviders.clear(), this.m_widget.resetFocusBeforeRefresh(), this.fetchRows(!0), this.signalTaskEnd()) : this._pushToEventQueue({
            type: t.type,
            event: t
        }))
    }, C.prototype.renderInitialSkeletons = function() {
        this.m_superRoot && (this.m_root = this.m_superRoot, this.m_superRoot = null), i(this.m_root).empty();
        var t = this.getRootElementHeight(),
            e = this.getDefaultSkeletonDimension(),
            s = 0;
        if (e.width > 0 && e.height > 0) {
            var n = e.height * (1 + C.NUM_CHILD_SKELETONS);
            s = Math.ceil(t / n)
        }
        var l = document.createElement("li");
        l.setAttribute("role", "presentation"), l.classList.add("oj-listview-initial-skeletons");
        var o = document.createElement("ul");
        o.setAttribute("role", "presentation"), o.classList.add(this.m_widget.getGroupStyleClass()), o.classList.add("oj-listview-skeleton-container");
        for (var r = 0; r < s; r++) {
            o.appendChild(this.createSkeletonItem());
            var a = document.createElement("li");
            a.setAttribute("role", "presentation");
            var h = document.createElement("ul");
            h.setAttribute("role", "presentation"), h.classList.add("oj-listview-child-skeleton"), a.appendChild(h), h.appendChild(this.createSkeletonItem()), h.appendChild(this.createSkeletonItem()), h.appendChild(this.createSkeletonItem()), o.appendChild(a)
        }
        l.appendChild(o), this.m_root.appendChild(l)
    }, C.prototype._renderExpandSkeletons = function(t) {
        t.style.maxHeight = "none";
        for (var e = 0; e < C.NUM_CHILD_SKELETONS; e++) t.appendChild(this.createSkeletonItem());
        t.classList.add("oj-listview-skeleton-container"), t.setAttribute("data-oj-initial-height", this._getExpandSkeletonHeight(t))
    }, C.prototype._destroySkeletons = function(t) {
        i(t).empty(), t.classList.remove("oj-listview-skeleton-container")
    }, C.prototype._getExpandSkeletonHeight = function(t) {
        return null != this.m_expandSkeletonHeight && 0 !== this.m_expandSkeletonHeight || (this.m_expandSkeletonHeight = t.offsetHeight), this.m_expandSkeletonHeight
    };
    var E = function() {
        this.createKeyMap = function(t) {
            var e = new m;
            return t ? (t.forEach(function(t, i) {
                e.set(i, t)
            }), e) : e
        }, this.createKeySet = function(t) {
            return new d.KeySet(t)
        }
    };
    E.call(S.prototype), E.call(C.prototype), E.call(n.IteratingDataProviderContentHandler.prototype);
    const I = function() {
        I.superclass.constructor.call(this)
    };
    e._registerLegacyNamespaceProp("_ojListViewExpandedKeySet", I), e.Object.createSubclass(I, e.ExpandedKeySet, "ListViewExpandedKeySet");
    const b = function(t, s) {
        var n = function() {};
        return e.Object.createSubclass(n, t, ""), n.prototype = i.extend(n.prototype, s), n
    }(Object, {
        LEFT_KEY: 37,
        RIGHT_KEY: 39,
        DOWN_KEY: 40,
        UP_KEY: 38,
        TAB_KEY: 9,
        ENTER_KEY: 13,
        ESC_KEY: 27,
        F2_KEY: 113,
        SPACE_KEY: 32,
        STATE_EXPANDED: 0,
        STATE_COLLAPSED: 1,
        STATE_NONE: 2,
        MINIMUM_ITEM_HEIGHT: 20,
        init: function(t) {
            var s = this;
            this.readinessStack = [], this.element = t.element, this.ojContext = t.ojContext, this.OuterWrapper = t.OuterWrapper, this.options = t, this.element.uniqueId().addClass(this.GetStyleClass() + " oj-component-initnode"), this.OuterWrapper && this.element[0].setAttribute("data-oj-context", ""), this.signalTaskStart("Initializing"), this._rootTabIndexSet = !1, this.SetRootElementTabIndex();
            var n = this.GetDnDContext();
            n && (this.m_dndContext = n, this.ojContext._on(this.element, {
                dragstart: function(t) {
                    return n._handleDragStart(t)
                },
                dragenter: function(t) {
                    return n._handleDragEnter(t)
                },
                dragover: function(t) {
                    return n._handleDragOver(t)
                },
                dragleave: function(t) {
                    return n._handleDragLeave(t)
                },
                dragend: function(t) {
                    return s.m_preActive = !1, n._handleDragEnd(t)
                },
                drag: function(t) {
                    return n._handleDrag(t)
                },
                drop: function(t) {
                    return s.m_preActive = !1, n._handleDrop(t)
                }
            })), this._touchStartListener = function(t) {
                t.originalEvent || (t = i.Event(t)), s.touchStartEvent = t, s.HandleMouseDownOrTouchStart(t)
            }, this.ojContext._IsCustomElement() ? this.element[0].addEventListener("touchstart", this._touchStartListener, {
                passive: !0
            }) : this.ojContext._on(this.element, {
                touchstart: this._touchStartListener
            }), this.ojContext._on(this.element, {
                click: function(t) {
                    s.HandleMouseClick(t), s.touchStartEvent = null
                },
                touchend: function(t) {
                    s.touchStartEvent && t.changedTouches.length && (document.elementFromPoint(t.changedTouches[0].clientX, t.changedTouches[0].clientY) !== s.touchStartEvent.target && (s.touchStartEvent = null));
                    s.HandleTouchEndOrCancel(t)
                },
                touchcancel: function(t) {
                    s.touchStartEvent = null, s.HandleTouchEndOrCancel(t)
                },
                mousedown: function(t) {
                    0 === t.button ? s._recentTouch() || s.HandleMouseDownOrTouchStart(t) : s.m_preActive = !0
                },
                mouseup: function(t) {
                    s._handleMouseUpOrPanMove(t), s.m_preActive = !1
                },
                mouseout: function(t) {
                    s._handleMouseOut(t)
                },
                mouseover: function(t) {
                    s._handleMouseOver(t)
                },
                keydown: function(t) {
                    s.HandleKeyDown(t)
                },
                keyup: function(t) {
                    s.HandleKeyUp(t)
                },
                ojpanmove: function(t) {
                    s._handleMouseUpOrPanMove(t)
                }
            }), this.ojContext._on(this.ojContext.element, {
                focus: function(t) {
                    s.HandleFocus(t)
                },
                blur: function(t) {
                    s.HandleBlur(t)
                }
            }), e.AgentUtils.getAgentInfo().browser === e.AgentUtils.BROWSER.FIREFOX && this._isComponentFocusable() && (this._rootTabIndexSet = !0, this.getListContainer().attr("tabIndex", -1)), this.ojContext._on(this.ojContext.element, {
                focusin: function(t) {
                    s.HandleFocus(t)
                },
                focusout: function(t) {
                    s.HandleFocusOut(t)
                }
            }), this.ojContext._focusable({
                applyHighlight: s.ShouldApplyHighlight(),
                recentPointer: s.RecentPointerCallback(),
                setupHandlers: function(t, e) {
                    s._focusInHandler = t, s._focusOutHandler = e
                }
            })
        },
        isAvailable: function() {
            return null != this.m_contentHandler
        },
        _initContentHandler: function() {
            this.signalTaskStart("Initialize ContentHandler");
            var t = this,
                e = function(e) {
                    t.m_contentHandler = e, e.RenderContent(), t.signalTaskEnd(), t._registerResizeListener(t.getListContainer()[0]), t._registerScrollHandler()
                },
                i = this.GetOption("data");
            null != i ? this.CreateDataContentHandler(i).then(e, function() {
                t.signalTaskEnd()
            }) : (this._removeNoData(), e(new S(this, this.element[0])))
        },
        setupResources: function() {
            this.ojContext.document.bind("touchend.ojlistview touchcancel.ojlistview", this.HandleTouchEndOrCancel.bind(this)), this._syncSelectionWithKeySet(), this._initContentHandler(), this._updateGridlines()
        },
        releaseResources: function() {
            this.ojContext.document.off(".ojlistview"), this.DestroyContentHandler(!0), this._unregisterResizeListener(this.getListContainer()), this._unregisterScrollHandler(), this.SetRootElementTabIndex(), this._resetState()
        },
        _isSelectedOptionExposed: function() {
            return this.ShouldUseGridRole()
        },
        _syncSelectionWithKeySet: function() {
            var t = this.GetOption("selection"),
                e = this.GetOption("selected");
            if (this._isSelectedOptionExposed() && e && (e.isAddAll() || e.values && e.values().size > 0)) return t = [], e.isAddAll() ? (t.inverted = !0, e.deletedValues().forEach(function(e) {
                t.push(e)
            })) : e.values().forEach(function(e) {
                t.push(e)
            }), void this.SetOption("selection", t, {
                _context: {
                    internalSet: !0
                },
                changed: !0
            });
            var i = !1;
            null == e && (e = new d.KeySetImpl, i = !0), t.length > 0 && e.values && 0 === e.values().size && (e = e.add(t), i = !0), i && this.SetOption("selected", e, {
                _context: {
                    internalSet: !0
                },
                changed: !0
            })
        },
        afterCreate: function() {
            this._buildList(), this.signalTaskEnd()
        },
        _isAnimateCards: function() {
            return this.isCardDisplayMode() && this.m_contentHandler && !this.m_contentHandler.IsHierarchical()
        },
        refresh: function() {
            var t = this.element[0].querySelectorAll(".oj-listview-card");
            if (t.length > 0) {
                var e = this;
                this.signalTaskStart("Exit animation"), this._applyExitAnimation(t).then(function() {
                    e._refresh(), e.signalTaskEnd()
                })
            } else this._refresh()
        },
        _applyExitAnimation(t) {
            var e, i = this;
            return t.forEach(function(t) {
                e = i.StartAnimation(t, "cardExit")
            }), e
        },
        _refresh: function() {
            this._resetInternal(), this.signalTaskStart("Refresh"), this.SetAriaProperties(), this._initContentHandler(), this._updateGridlines(), this.resetFocusBeforeRefresh(), this.signalTaskEnd()
        },
        resetFocusBeforeRefresh: function() {
            this.m_active = null, this.SetRootElementTabIndex(), this.element[0].contains(document.activeElement) && this.element[0].focus()
        },
        whenReady: function() {
            return this.readyPromise
        },
        destroy: function() {
            this.element.removeClass(this.GetStyleClass() + " oj-component-initnode"), this._unregisterResizeListener(this.getListContainer()), this._resetInternal(), p.unwrap(this.element, this.getListContainer())
        },
        _isScrollToKey: function() {
            var t = this.GetOption("scrollToKey");
            if ("never" === t) return !1;
            if ("always" === t) return !0;
            var i = this.GetOption("data");
            if (null == i || !e.DataProviderFeatureChecker.isDataProvider(i)) return !0;
            if (i.getCapability) {
                var s = i.getCapability("fetchFirst");
                if (s && "immediate" === s.iterationSpeed) return !0
            }
            return !1
        },
        adjustScrollPositionValueOnFetch: function() {
            var t = null == this.GetOption("scrollPosition") ? {} : this.GetOption("scrollPosition"),
                e = this.GetOption("selection");
            this._isSelectionEnabled() && e.length > 0 && this._isScrollToKey() ? null != this.m_selectionFrontier && this.m_selectionFrontier.length > 0 ? t.key = this.GetKey(this.m_selectionFrontier[0]) : t.key = e[0] : (t.y = 0, t.key = null, t.index = 0), t.x = 0, t.offsetX = 0, t.offsetY = 0, this.SetOption("scrollPosition", t, {
                _context: {
                    internalSet: !0
                },
                changed: !1
            })
        },
        _clearBusyState: function() {
            if (this.readinessStack && this.readinessStack.length > 0)
                for (u.warn("ListView did not end with a clean state, this could happen if ListView is detached before fetch is complete.  State: " + this.readinessStack); this.readinessStack.length > 0;) this.signalTaskEnd()
        },
        _resetInternal: function() {
            this.UnsetAriaProperties(), this._cleanupTabbableElementProperties(this.element), this.DestroyContentHandler(), this._resetState()
        },
        _resetState: function() {
            this.m_active = null, this.m_isExpandAll = null, this.m_disclosing = null, this.m_itemHeight = null, this.m_keyElemMap = null, this.m_clientHeight = null, this.m_scrollHeight = null, this.m_clientWidth = null, this.m_scrollWidth = null, this.m_closestParent = null, this.m_gridlinesVisible = null, this.m_gridlinePlaceholder = null, this.m_scroller = null, this.m_initialSelectionStateValidated = null, this.m_validatedSelectedKeyData = null, this.ClearCache(), this._clearFocusoutTimeout(), this._clearFocusoutBusyState(), this._clearScrollPosBusyState(), null != this.m_dndContext && this.m_dndContext.reset()
        },
        notifyAttached: function() {
            null != this.m_contentHandler && this.m_contentHandler.IsReady() && (this.syncScrollPosition(), this.m_contentHandler.notifyAttached())
        },
        notifyDetached: function() {
            this.getListContainer().removeClass("oj-focus-ancestor"), null != this.m_active && i(this.m_active.elem).removeClass("oj-focus oj-focus-highlight"), null != this.m_hoverItem && this._unhighlightElem(this.m_hoverItem, "oj-hover")
        },
        notifyShown: function() {
            null != this.m_contentHandler && this.m_contentHandler.IsReady() && (this.syncScrollPosition(), this.m_contentHandler.notifyShown())
        },
        getNodeBySubId: function(t) {
            var e;
            if (null == t) return this.element[0];
            var s = t.subId;
            if ("oj-listview-disclosure" === s || "oj-listview-icon" === s) {
                if (null != (e = t.key)) {
                    var n = this.FindElementByKey(e);
                    if (null != n) {
                        var l = i(n).find(".oj-clickable-icon-nocontext").first();
                        if (this._isExpandCollapseIcon(l)) return l.get(0)
                    }
                }
            } else if ("oj-listview-item" === s && null != (e = t.key)) return this.FindElementByKey(e);
            return null
        },
        getSubIdByNode: function(t) {
            if (null != t && this._isExpandCollapseIcon(t)) {
                var e = this.FindItem(t);
                if (null != e && e.length > 0) {
                    var i = this.GetKey(e[0]);
                    if (null != i) return {
                        subId: "oj-listview-disclosure",
                        key: i
                    }
                }
            }
            return null
        },
        getContextByNode: function(t) {
            var e = this.FindItem(t);
            if (null != e && e.length > 0) {
                var i = this.GetKey(e[0]);
                if (null != i) {
                    var s = e.parent(),
                        n = {
                            subId: "oj-listview-item",
                            key: i,
                            index: s.children("." + this.getItemElementStyleClass()).index(e)
                        };
                    return s.get(0) !== this.element.get(0) && (n.parent = s.parent().get(0)), e.children().first().hasClass(this.getGroupItemStyleClass()) ? n.group = !0 : n.group = !1, n
                }
            }
            return null
        },
        getDataForVisibleItem: function(t) {
            var e, s = t.key;
            if (null != s && (e = this.FindElementByKey(s)), null == e) {
                var n = t.index,
                    l = t.parent;
                l = null == l ? this.element.get(0) : i(l).children("ul." + this.getGroupStyleClass()).first(), e = i(l).children("li").get(n)
            }
            return null != e && i(e).hasClass(this.getItemStyleClass()) ? this._getDataForItem(e) : null
        },
        _getDataForItem: function(t) {
            return null == this.GetOption("data") ? t : i.data(t, "data")
        },
        _getMetadataForItem: function(t) {
            return i.data(t, "metadata")
        },
        ShouldRegisterResizeListener: function(t) {
            return t && this.m_contentHandler && this.m_contentHandler.HandleResize && this.m_contentHandler.shouldHandleResize && this.m_contentHandler.shouldHandleResize()
        },
        _unregisterResizeListener: function(t) {
            t && this._resizeHandler && p.removeResizeListener(t, this._resizeHandler)
        },
        _registerResizeListener: function(t) {
            this._unregisterResizeListener(t), this.ShouldRegisterResizeListener(t) && (null == this._resizeHandler && (this._resizeHandler = this.HandleResize.bind(this)), p.addResizeListener(t, this._resizeHandler))
        },
        disableResizeListener: function() {
            var t = this.getListContainer()[0];
            this._unregisterResizeListener(t)
        },
        enableResizeListener: function() {
            var t = this.getListContainer()[0];
            this._registerResizeListener(t)
        },
        GetDnDContext: function() {
            var t = this.GetOption("dnd");
            if (!(null === t || null === t.drag && null === t.drop && t.reorder && "disabled" === t.reorder.items)) return void 0 !== e.ListViewDndContext ? new e.ListViewDndContext(this) : void 0
        },
        HandleResize: function(t, e) {
            t > 0 && e > 0 && null != this.m_contentHandler && this.m_contentHandler.HandleResize && this.m_contentHandler.HandleResize(t, e), this.m_clientHeight = null, this.m_scrollHeight = null, this.m_clientWidth = null, this.m_scrollWidth = null
        },
        ShouldApplyHighlight: function() {
            return !0
        },
        RecentPointerCallback: function() {
            return function() {
                return !1
            }
        },
        ShouldRefresh: function(t) {
            return null != t.data || null != t.drillMode || null != t.groupHeaderPosition || null != t.item || null != t.scrollPolicy || null != t.scrollPolicyOptions || null != t.gridlines || null != t.display
        },
        _isKeySet: function(t) {
            return void 0 !== t.isAddAll && (void 0 !== t.values || void 0 !== t.deletedValues)
        },
        _shouldExpand: function(t, e) {
            return this._isKeySet(e) ? e.has(t) : !this.ojContext._IsCustomElement() && "all" === e || !!Array.isArray(e) && e.indexOf(t) > -1
        },
        setOptions: function(t, e) {
            if (this.ShouldRefresh(t)) return !0;
            if (null != t.expanded && this.m_contentHandler.IsHierarchical()) {
                this._collapsedKeys = void 0;
                var s = t.expanded;
                this.signalTaskStart("Set expanded option"), this._ignoreExpanded = !0;
                try {
                    for (var n = "." + this.getGroupItemStyleClass(), l = this.element.find(n), o = 0; o < l.length; o++) {
                        var r = l[o],
                            a = this.GetKey(r.parentNode);
                        this._shouldExpand(a, s) ? this.expandKey(a, !0, !0, !0, !1) : this.collapseKey(a, !0, !0, !1)
                    }
                } finally {
                    this._ignoreExpanded = void 0, this.signalTaskEnd()
                }
            }
            if (null != t.currentItem) {
                var h = this.FindElementByKey(t.currentItem);
                if (null != h && (h = i(h), !this.SkipFocus(h))) {
                    var c = document.activeElement;
                    c && this.element.get(0).contains(c) ? this.ActiveAndFocus(h, null) : this._setActive(h, null, !0)
                }
            } else null === t.currentItem && (this.UnhighlightActive(), this.m_active && this.m_active.elem && this.m_active.elem.get(0).classList.remove("oj-listview-current-item"), this.m_active = null, this.SetRootElementTabIndex());
            if (this.HandleSelectionOption(t), null != t.selectionMode && (this.SetAriaProperties(), this.UpdateItemAriaProperties(t.selectionMode)), null != t.scrollTop) {
                var u = this._getScroller(),
                    d = t.scrollTop;
                null == d || isNaN(d) || (u.scrollTop = d)
            }
            return null != t.scrollPosition && (this.syncScrollPosition(t.scrollPosition), delete t.scrollPosition), this._shouldDragSelectedItems() && null != this.m_active && null != t.dnd && null != t.dnd.reorder && ("enabled" === t.dnd.reorder.items ? this.m_dndContext._setItemDraggable(this.m_active.elem) : "disabled" === t.dnd.reorder.items && this.m_dndContext._unsetItemDraggable(this.m_active.elem)), !1
        },
        _isFirstSelectedItem: function(t) {
            var i = this.GetOption("firstSelectedItem");
            return i && e.KeyUtils.equals(i.key, t)
        },
        _setFirstSelectedItem: function(t, e) {
            var i = {
                key: t,
                data: e
            };
            this.SetOption("firstSelectedItem", i, {
                _context: {
                    originalEvent: null,
                    internalSet: !0
                },
                changed: !0
            })
        },
        _updateFirstSelectedItem: function(t) {
            var e;
            if (t.isAddAll())
                for (var i = this._getItemsCache(), s = 0; s < i.length; s++) {
                    var n = this.m_contentHandler.GetKey(i[s]);
                    if (t.has(n)) {
                        e = n;
                        break
                    }
                } else e = t.values().values().next().value;
            if (null != e) {
                var l = this._getLocalData(e);
                this._setFirstSelectedItem(e, l)
            }
        },
        updateSelectedKeyData: function(t, e) {
            this._isFirstSelectedItem(t) && this._setFirstSelectedItem(t, e), this.m_validatedSelectedKeyData && this.m_validatedSelectedKeyData.has(t) && this.m_validatedSelectedKeyData.set(t, e)
        },
        HandleSelectionOption: function(t) {
            if (null != t.selection || null != t.selected) {
                var e = t.selected;
                if (null != e && e.isAddAll()) {
                    for (var i = this._getItemsCache(), s = 0; s < i.length; s++) {
                        var n = this.m_contentHandler.GetKey(i[s]);
                        e.has(n) ? this._applySelection(i[s], n) : this._unhighlightElem(i[s], "oj-selected")
                    }
                    t.selection = d.KeySetUtils.toArray(e)
                } else {
                    var l, o = null != e ? e.values() : t.selection,
                        r = this._cloneSelection(o);
                    if (this._validateAndUpdateSelection(r), t.selection = r, e = (e = (e = this.GetOption("selected")).clear()).add(r), t.selected = e, this.m_selectionFrontier) {
                        var a = this.GetKey(this.m_selectionFrontier.get(0));
                        l = e.has(a) ? this.m_selectionFrontier : void 0
                    }
                    this._clearSelection(!1, l);
                    for (var h = 0; h < r.length; h++) {
                        var c = this.FindElementByKey(r[h]);
                        null != c && this._applySelection(c, r[h])
                    }
                }
                null != e && this._updateFirstSelectedItem(e)
            }
        },
        Trigger: function(t, e, i) {
            return this.ojContext._trigger(t, e, i)
        },
        SetOption: function(t, e, i) {
            this.ojContext.option(t, e, i)
        },
        GetOption: function(t) {
            return this.ojContext.option(t)
        },
        _getBusyDescription: function(t) {
            return "The component identified by '" + (this.ojContext._IsCustomElement() ? this.GetRootElement().attr("id") : this.element.attr("id")) + "', " + t
        },
        signalTaskStart: function(t) {
            var e = this;
            if (this.readinessStack) {
                if (0 === this.readinessStack.length) {
                    this.readyPromise = new Promise(function(t) {
                        e.readyResolve = t
                    });
                    var i = l.getContext(this.element[0]).getBusyContext(),
                        s = null != t ? {
                            description: this._getBusyDescription(t)
                        } : {};
                    e.busyStateResolve = i.addBusyState(s)
                }
                this.readinessStack.push(null != t ? t : "unknown task")
            }
        },
        signalTaskEnd: function() {
            this.readinessStack && this.readinessStack.length > 0 && (this.readinessStack.pop(), 0 === this.readinessStack.length && (this.readyResolve(null), this.busyStateResolve(null), this.busyStateResolve = null))
        },
        isReady: function() {
            return null == this.busyStateResolve
        },
        throwError: function(t) {
            if (this.readinessStack)
                for (; this.readinessStack.length > 0;) this.signalTaskEnd();
            throw t
        },
        getItems: function(t) {
            var e = this,
                s = [];
            return i.each(t, function(t, i) {
                var n = e.FindElementByKey(i);
                null != n && s.push(n)
            }), s
        },
        isCardDisplayMode: function() {
            return "card" === this.GetOption("display")
        },
        isCardLayout: function() {
            return !!(this.ojContext._IsCustomElement() ? this.GetRootElement() : this.element).hasClass("oj-listview-card-layout") || this.isCardDisplayMode()
        },
        ShouldUseGridRole: function() {
            return !0
        },
        ShouldUpdateScrollPosition: function() {
            return this.ShouldUseGridRole() && this.ojContext._IsCustomElement()
        },
        DestroyContentHandler: function(t) {
            null != this.m_contentHandler && (this.m_contentHandler.Destroy(t), delete this.m_contentHandler, this.m_contentHandler = null), this._clearBusyState()
        },
        CreateDataContentHandler: function(i) {
            var s;
            if (this.showStatusText(), void 0 !== e.TableDataSource && i instanceof e.TableDataSource) s = new n.IteratingDataProviderContentHandler(this, this.element[0], new e.TableDataSourceAdapter(i));
            else {
                if (void 0 !== e.TreeDataSource && i instanceof e.TreeDataSource) {
                    var l = new Promise(function(e, i) {
                        t(["ojs/ojtreedataprovideradapter"], function(t) {
                            e(function(t) {
                                if (t && t.__esModule) return t;
                                var e = {};
                                return t && Object.keys(t).forEach(function(i) {
                                    var s = Object.getOwnPropertyDescriptor(t, i);
                                    Object.defineProperty(e, i, s.get ? s : {
                                        enumerable: !0,
                                        get: function() {
                                            return t[i]
                                        }
                                    })
                                }), e.default = t, e
                            }(t))
                        }, i)
                    });
                    if (!l) throw new Error("Error adapting a TreeDataSource");
                    return l.then(t => new C(this, this.element[0], new t.default(i)))
                }
                e.DataProviderFeatureChecker.isTreeDataProvider(i) ? s = new C(this, this.element[0], i) : e.DataProviderFeatureChecker.isDataProvider(i) ? s = new n.IteratingDataProviderContentHandler(this, this.element[0], i) : this.throwError("Invalid data or missing module")
            }
            return Promise.resolve(s)
        },
        UpdateActiveDescendant: function(t) {
            this.element.attr("aria-activedescendant", t.attr("id"))
        },
        SetAriaProperties: function() {
            this._isMultipleSelection() ? this.element.attr("aria-multiselectable", !0) : this._isSelectionEnabled() && this.element.attr("aria-multiselectable", !1)
        },
        UnsetAriaProperties: function() {
            this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable")
        },
        UpdateItemAriaProperties: function(t) {
            var e, s = this;
            "none" === t ? (this.element.removeAttr("aria-multiselectable"), e = function(t) {
                s.getFocusItem(t).removeAttr("aria-selected")
            }) : ("single" === t ? this.element.attr("aria-multiselectable", !1) : this.element.attr("aria-multiselectable", !0), e = function(t) {
                var e = s.getFocusItem(t),
                    i = e.parent();
                e.attr("aria-selected", i.hasClass("oj-selected"))
            });
            for (var n = this._getItemsCache(), l = 0; l < n.length; l++) e(i(n[l]))
        },
        _buildList: function(t) {
            var e = this.getListContainer();
            this.SetAriaProperties(), this.m_elementOffset = this.element.get(0).offsetTop;
            var i = this._buildStatus();
            e.append(i), this.m_status = i;
            var s = this._buildAccInfo();
            e.append(s), this.m_accInfo = s, this._buildFocusCaptureDiv(e[0])
        },
        _buildStatus: function() {
            var t = i(document.createElement("div"));
            t.addClass("oj-icon").addClass(this.getLoadingStatusIconStyleClass());
            var e = i(document.createElement("div"));
            return e.addClass(this.getStatusMessageStyleClass()).addClass(this.getStatusStyleClass()).attr({
                id: this._createSubId("status"),
                role: "status"
            }), e.append(t), e
        },
        _buildAccInfo: function() {
            var t = i(document.createElement("div"));
            return t.addClass("oj-helper-hidden-accessible").attr({
                id: this._createSubId("info"),
                role: "status"
            }), t
        },
        _buildFocusCaptureDiv: function(t) {
            if (!h.isMobileTouchDevice()) {
                var e = document.createElement("div");
                e.setAttribute("tabindex", "-1"), e.classList.add("oj-helper-hidden-accessible"), e.innerHTML = "&nbsp", t.insertBefore(e, this.element[0]), e.addEventListener("focus", () => {
                    this.element[0].focus()
                })
            }
        },
        _setAccInfoText: function(t) {
            "" !== t && this.m_accInfo.text() !== t && this.m_accInfo.text(t)
        },
        updateStatusFetchStart: function() {
            var t = this.ojContext.getTranslatedString("msgFetchingData");
            this._setAccInfoText(t)
        },
        updateStatusFetchEnd: function(t) {
            var e;
            e = 0 === t ? this.ojContext.getTranslatedString("msgFetchCompleted") : this.ojContext.getTranslatedString("msgItemsAppended", {
                count: t
            }), this._setAccInfoText(e)
        },
        isSkeletonSupport: function() {
            return !(!this.ShouldUseGridRole() || !this.m_contentHandler.renderInitialSkeletons) && "skeleton" === this._getOptionDefaults().loadIndicator
        },
        _showLoadingIcon: function() {
            var t = this.ojContext.getTranslatedString("msgFetchingData"),
                e = this.getListContainer();
            this.m_status.attr("aria-label", t).css("left", Math.max(0, e.outerWidth() / 2 - this.m_status.outerWidth() / 2)).css("top", Math.max(0, e.outerHeight() / 2 - this.m_status.outerHeight() / 2)).show();
            var i = this.m_status.get(0).offsetHeight,
                s = e.get(0).offsetHeight,
                n = e.get(0).style.minHeight,
                l = parseInt(n, 10);
            isNaN(l) && (l = 0), s < i && l < i && (e.css("minHeight", Math.max(s, i + this.getListContainerBorderWidth())), isNaN(l) || e.get(0).setAttribute("data-oj-min-height", n))
        },
        _showLoadingSkeleton: function() {
            this.m_contentHandler.renderInitialSkeletons()
        },
        showStatusText: function() {
            var t = this;
            this.m_showStatusTimeout || (this.m_showStatusTimeout = setTimeout(function() {
                i(document.getElementById(t._createSubId("empty"))).remove(), null != t.m_contentHandler && (t.isSkeletonSupport() ? t._showLoadingSkeleton() : t._showLoadingIcon()), t.m_showStatusTimeout = null
            }, this._getShowStatusDelay()))
        },
        _getShowStatusDelay: function() {
            var t = this._getOptionDefaults(),
                e = p.getCSSTimeUnitAsMillis(t.showIndicatorDelay);
            return isNaN(e) ? 0 : e
        },
        hideStatusText: function() {
            this.m_showStatusTimeout && (clearTimeout(this.m_showStatusTimeout), this.m_showStatusTimeout = null), this.m_status.hide();
            var t = this.getListContainer().get(0);
            t.hasAttribute("data-oj-min-height") && (t.style.minHeight = t.getAttribute("data-oj-min-height"), t.removeAttribute("data-oj-min-height"))
        },
        GetRootElement: function() {
            return this.getListContainer()
        },
        getListContainer: function() {
            return null == this.m_container && (this.m_container = this._createListContainer()), this.m_container
        },
        _createListContainer: function() {
            var t;
            return this.OuterWrapper ? t = i(this.OuterWrapper) : (t = i(document.createElement("div")), this.element.parent()[0].replaceChild(t[0], this.element[0])), t.addClass(this.GetContainerStyleClass()).addClass("oj-component"), t.prepend(this.element), t
        },
        _getEmptyText: function() {
            return this.ojContext.getTranslatedString("msgNoData")
        },
        _buildEmptyText: function() {
            var t = this._getEmptyText(),
                e = document.createElement("li");
            e.setAttribute("role", "row"), e.id = this._createSubId("empty"), e.className = this.getEmptyTextStyleClass() + " " + this.getEmptyTextMarkerClass();
            var i = document.createElement("span");
            return i.setAttribute("role", "gridcell"), i.textContent = t, e.appendChild(i), e
        },
        GetState: function(t) {
            var e = this.getFocusItem(t).attr("aria-expanded");
            return "true" === e ? this.STATE_EXPANDED : "false" === e ? this.STATE_COLLAPSED : this.STATE_NONE
        },
        SetState: function(t, e) {
            var i = this.isExpandable();
            e === this.STATE_EXPANDED ? (this.getFocusItem(t).attr("aria-expanded", "true"), i && t.removeClass("oj-collapsed").addClass("oj-expanded")) : e === this.STATE_COLLAPSED && (this.getFocusItem(t).attr("aria-expanded", "false"), i && t.removeClass("oj-expanded").addClass("oj-collapsed"))
        },
        _getItemOption: function(t, e, i) {
            var s = this.GetOption("item")[t];
            return "function" == typeof s && i ? s.call(this, e) : s
        },
        getItemFocusable: function(t) {
            return this._getItemOption("focusable", t, !0)
        },
        getItemSelectable: function(t) {
            return this.getItemFocusable(t) && this._getItemOption("selectable", t, !0)
        },
        _getItemRenderer: function() {
            var t = this._getItemOption("renderer", null, !1);
            return "function" != typeof t ? null : this._WrapCustomElementRenderer(t)
        },
        getItemTemplate: function() {
            if (void 0 === this.m_template && (this.m_template = null, this.ojContext._IsCustomElement())) {
                var t = this.GetSlotMap().itemTemplate;
                t && t.length > 0 && "template" === t[0].tagName.toLowerCase() && (this.m_template = t[0])
            }
            return this.m_template
        },
        getAs: function() {
            return this.GetOption("as")
        },
        GetSlotMap: function() {
            return f.CustomElementUtils.getSlotMap(this.GetRootElement()[0])
        },
        itemInsertComplete: function(t, e) {
            this.m_clientHeight = null, this.m_scrollHeight = null
        },
        BeforeInsertItem: function() {},
        itemRemoveComplete: function(t, s, n) {
            var l = !1;
            if (null != this.m_active && e.Object.compareValues(this.m_active.key, this.GetKey(t)) && (this._setActionableMode(!1, !0), !n)) {
                let e = null,
                    n = this._getItemsCache().toArray();
                n = n.filter(t => !t.classList.contains("oj-skipfocus"));
                const o = n.findIndex(e => t.contains(e));
                if (-1 === o) this.SetOption("currentItem", null);
                else {
                    const s = t.closest("ul.oj-listview-group"),
                        l = n[o + 1],
                        r = n[o - 1];
                    s && l && r && l.closest("ul") !== s && r.closest("ul") === s ? e = r : (e = l, null != e && i(e).hasClass(this.getItemElementStyleClass()) || (e = r, null != e && i(e).hasClass(this.getItemElementStyleClass()) || this.SetOption("currentItem", null)))
                }
                null != e && i(e).hasClass(this.getItemElementStyleClass()) && (this.SetCurrentItem(i(e), null, !s), l = !0)
            }
            return null != t && t.id && null != this.m_keyElemMap && this.m_keyElemMap.delete(t.id), this.m_clientHeight = null, this.m_scrollHeight = null, l
        },
        itemRenderComplete: function(t, e) {
            null != this.m_dndContext && this.m_dndContext.itemRenderComplete(t);
            var s = e.key;
            if (this._isSelectionEnabled()) {
                var n, l = this.GetOption("selected"),
                    o = l.has(s);
                this.IsSelectable(t) ? (o && (this._applySelection(t, s), this._isMultipleSelection() || l.values().size > 1 && (n = this.FindElementByKey(s), l = l.clear().add([s]), this._setSelectionOption(l, null, n, e.data))), l.values && 0 === l.values().size && this._isSelectionRequired() && (this._applySelection(t, s), l = l.clear().add([s]), this._setSelectionOption(l, null, [t], e.data))) : o && !l.isAddAll() && (n = [], (l = l.delete([s])).values().forEach(function(t) {
                    n.push(this.FindElementByKey(t))
                }, this), this._setSelectionOption(l, null, n))
            }
            var r = this;
            if (this.m_contentHandler.IsHierarchical() && null == this._ignoreExpanded && this.GetState(i(t)) === this.STATE_COLLAPSED) {
                var a = this.GetOption("expanded");
                this._isExpandAll(s) ? (this.ojContext._IsCustomElement() || null == this._collapsedKeys) && this.ExpandItem(i(t), null, !1, null, !1, !1, !1) : !this.ojContext._IsCustomElement() && Array.isArray(a) ? i.each(a, function(e, n) {
                    n !== s || null != r._collapsedKeys && -1 !== r._collapsedKeys.indexOf(n) || r.ExpandItem(i(t), null, !1, null, !1, !1, !1)
                }) : a.has && a.has(s) && this.ExpandItem(i(t), null, !1, null, !1, !1, !1)
            }
            null != this.m_active && s === this.m_active.key && null != this.m_active.elem && t !== this.m_active.elem.get(0) && (this.m_active.elem = i(t))
        },
        _addNoData: function() {
            if (this.ojContext._IsCustomElement()) {
                var t = this.GetSlotMap().noData;
                if (t && t.length > 0 && "template" === t[0].tagName.toLowerCase()) {
                    var e = document.createElement("li");
                    e.setAttribute("role", "row"), e.id = this._createSubId("empty"), e.classList.add("oj-listview-no-data-container"), e.classList.add("oj-listview-no-data-item");
                    var i = document.createElement("div");
                    i.setAttribute("role", "gridcell"), i.classList.add("oj-listview-no-data-container"), e.appendChild(i);
                    var s = this.element;
                    s.addClass("oj-listview-no-data-container"), s.append(e);
                    var n = this;
                    return this.signalTaskStart("run no data template"), void o.__getTemplateEngine().then(function(e) {
                        e.execute(n.GetRootElement(), t[0], {}, null).forEach(function(t) {
                            i.appendChild(t)
                        }), n.m_engine = e, n.signalTaskEnd()
                    }, function(t) {
                        throw n.signalTaskEnd(), new Error("Error loading template engine: " + t)
                    })
                }
            }
            this.element.append(this._buildEmptyText())
        },
        _removeNoData: function() {
            this.element.removeClass("oj-listview-no-data-container");
            var t = document.getElementById(this._createSubId("empty"));
            t && (this.m_engine && this.m_engine.clean(t), t.parentNode.removeChild(t))
        },
        resetInitialSelectionStateValidated: function() {
            this.m_initialSelectionStateValidated = !1
        },
        renderComplete: function(t) {
            var e = this;
            if (this.hideStatusText(), this._removeNoData(), this.m_items = null, this.m_groupItems = null, this.m_scrollHeight = null, this._isEmptyGrid() && this.element[0].removeChild(this.element[0].children[0]), this._isEmpty()) return this._addNoData(), this.Trigger("ready", null, {}), null;
            var s = this.GetOption("currentItem");
            if (null != s) {
                var n = this.FindElementByKey(s);
                if (null == n) this.SetOption("currentItem", null);
                else if (null == this.m_active && !this.SkipFocus(i(n))) {
                    var l = document.activeElement;
                    l && this.element.get(0).contains(l) ? this.ActiveAndFocus(i(n), null) : this._setActive(i(n), null, !0)
                }
            }
            if (this.getListContainer().hasClass("oj-focus-ancestor") && null == this.m_active && null == s && !this._isTouchSupport() && this._initFocus(), this.m_scrollAndFetch = void 0, null == this.m_scrollPosition && (t || this.m_ticking) || this.syncScrollPosition(), !this.m_initialSelectionStateValidated && this._isSelectionEnabled() && this._isSelectionRequired()) {
                var o = this.GetOption("selection").slice(0);
                this._validateAndUpdateSelection(o), this.m_initialSelectionStateValidated = !0
            }
            if (this._isSelectionEnabled()) {
                var r = this.GetOption("firstSelectedItem");
                if (null == r || null == r.key) {
                    var a = this.GetOption("selected");
                    null != a && this._updateFirstSelectedItem(a)
                }
            }
            if (null != this.m_gridlinePlaceholder && null != this.m_gridlinePlaceholder.parentNode && this.m_gridlinePlaceholder.parentNode.removeChild(this.m_gridlinePlaceholder), (void 0 === this.m_contentHandler.hasMoreToFetch || this.m_contentHandler.hasMoreToFetch && !this.m_contentHandler.hasMoreToFetch()) && this._shouldRenderGridlineForLastItem()) {
                var h = document.createElement("li");
                h.setAttribute("role", "presentation"), h.className = "oj-listview-gridline-placeholder", this.element[0].appendChild(h), this.m_gridlinePlaceholder = h
            }
            var u = null;
            if (this._isAnimateCards()) {
                var d = null == this.element[0].querySelector(".oj-listview-card-animated"),
                    m = 0,
                    p = this._getCardEntranceAnimationDelay();
                d && this.element[0].classList.add("oj-animation-host-viewport"), this.element[0].querySelectorAll(".oj-listview-card:not(.oj-listview-card-animated)").forEach(function(t) {
                    if (t.classList.add("oj-listview-card-animated"), d) {
                        var i = e.getAnimationEffect("cardEntrance");
                        i && i.forEach(function(t) {
                            t.delay = m + "ms"
                        }), u = e.StartAnimation(t, "cardEntrance", i), m = Math.min(1e3, m + p)
                    } else c.fadeIn(t, {
                        duration: "150ms"
                    });
                    u && u.then(function() {
                        e.element[0].classList.remove("oj-animation-host-viewport")
                    })
                })
            }
            return this.Trigger("ready", null, {}), u
        },
        _getCardEntranceAnimationDelay: function() {
            var t = this._getOptionDefaults(),
                e = parseInt(t.cardAnimationDelay, 10);
            return isNaN(e) ? 0 : e
        },
        _getLocalKeys: function() {
            for (var t = [], e = this._getItemsCache(), i = 0; i < e.length; i++) t.push(this.GetKey(e[i]));
            return t
        },
        _validateAndUpdateSelection: function(t) {
            if (this._isSelectionRequired() && t.length > 0) {
                var e = t.length,
                    i = this._validateSelection(t);
                if (i) this.signalTaskStart("validating selection-required keys"), i.then(function(t) {
                    var e = this.GetOption("selected").clear().add(t);
                    this._setSelectionOption(e, null, null, null), this.enforceSelectionRequired(), this.signalTaskEnd()
                }.bind(this));
                else if (e !== t.length) {
                    var s = this.GetOption("selected").clear().add(t);
                    this._setSelectionOption(s, null, null, null), this.enforceSelectionRequired()
                }
            }
        },
        _validateSelection: function(t) {
            this.m_validatedSelectedKeyData = null;
            var e = t,
                i = this._getLocalKeys(),
                s = [];
            if (t.forEach(function(t) {
                    -1 === i.indexOf(t) && s.push(t)
                }), s.length > 0) {
                var n = this._fetchValidRowKeyData(s);
                if (n) return n.then(function(t) {
                    this.m_validatedSelectedKeyData = t.validKeyData, t.validKeys.forEach(function(t) {
                        s.splice(s.indexOf(t), 1)
                    });
                    for (var i = e.length - 1; i >= 0; i--) s.indexOf(e[i]) > -1 && e.splice(i, 1);
                    return e
                }.bind(this));
                for (var l = e.length - 1; l >= 0; l--) s.indexOf(e[l]) > -1 && e.splice(l, 1)
            }
            return null
        },
        _fetchValidRowKeyData: function(t) {
            var e = this.m_contentHandler.getDataProvider();
            if (e && e.getCapability) {
                var i = e.getCapability("fetchByKeys");
                if (i && "lookup" === i.implementation) return new Promise(function(i) {
                    e.fetchByKeys({
                        keys: new Set(t),
                        scope: "global"
                    }).then(function(t) {
                        var e = [],
                            s = new m;
                        t.results.forEach(function(t, i) {
                            e.push(i), s.set(i, t.data)
                        }), i({
                            validKeys: e,
                            validKeyData: s
                        })
                    }, function() {
                        i({
                            validKeys: [],
                            validData: new Map
                        })
                    })
                })
            }
            return null
        },
        _isEmptyGrid: function() {
            return this.ShouldUseGridRole() && this.isCardLayout() && !this.m_contentHandler.IsHierarchical() && this.element[0].children[0] && 0 === this.element[0].children[0].children[0].childElementCount
        },
        _setScrollY: function(t, e) {
            var i = t.scrollTop;
            return u.info("Setting scroll y: " + e + " initial scrollTop: " + i), this._skipScrollUpdate || this._setScrollPosBusyState(), this._skipScrollUpdate = !0, t.scrollTop = e, this._handlePinGroupHeader(), u.info("scrollTop after updating: " + t.scrollTop), i !== t.scrollTop || (u.info("scrollPosBusyState getting clear"), this._clearScrollPosBusyState(), !1)
        },
        _setScrollX: function(t, e) {
            this._skipScrollUpdate = !0, p.setScrollLeft(t, e)
        },
        _getScrollX: function(t) {
            return Math.abs(t.scrollLeft)
        },
        getScrollToKey: function() {
            var t = this.GetOption("scrollPosition");
            if (t) {
                var e = t.key;
                if (e) {
                    var i = this;
                    return new Promise(function(t) {
                        var s = i._validateKeyForScroll(e, !0);
                        null == s ? t(null) : s.then(function(i) {
                            t(i ? e : null)
                        })
                    })
                }
            }
            return Promise.resolve(null)
        },
        _validateKeyForScroll: function(t, e) {
            var i = this;
            if (!this._isScrollToKey()) return null;
            if (!e && null != this.FindElementByKey(t)) return Promise.resolve(!0);
            if (this.m_contentHandler instanceof n.IteratingDataProviderContentHandler) {
                var s = this.m_contentHandler.getDataProvider();
                if (s.containsKeys) return new Promise(function(e) {
                    var n = new Set;
                    n.add(t), i.signalTaskStart("Checking for keys"), s.containsKeys({
                        keys: n
                    }).then(function(t) {
                        e(t.results.size > 0), i.signalTaskEnd()
                    }, function() {
                        i.signalTaskEnd(), e(!1)
                    })
                })
            }
            return null
        },
        _getScrollHeight: function() {
            return null == this.m_scrollHeight && (this.m_scrollHeight = this._getScroller().scrollHeight), this.m_scrollHeight
        },
        _getClientHeight: function() {
            return null == this.m_clientHeight && (this.m_clientHeight = this._getScroller().clientHeight), this.m_clientHeight
        },
        _getScrollWidth: function() {
            return null == this.m_scrollWidth && (this.m_scrollWidth = this._getScroller().scrollWidth), this.m_scrollWidth
        },
        _getClientWidth: function() {
            return null == this.m_clientWidth && (this.m_clientWidth = this._getScroller().clientWidth), this.m_clientWidth
        },
        _isScrollable: function() {
            return this._isScrollableY() || this._isScrollableX()
        },
        _isScrollableX: function() {
            return Math.abs(this._getScrollWidth() - this._getClientWidth()) > 1
        },
        _isScrollableY: function() {
            var t = 0;
            if (this.m_contentHandler.getLoadingIndicator) {
                var e = this.m_contentHandler.getLoadingIndicator();
                null != e && (t = e.offsetHeight)
            }
            var i = this._getScroller(),
                s = i.scrollHeight,
                n = i.clientHeight;
            return Math.abs(s - n) - t > 1
        },
        syncScrollPosition: function(t, e) {
            var i, s, n, l, o = this;
            if (this.ShouldUseGridRole() && (e = void 0 === e || e, this._isScrollable())) {
                if (this.ShouldUpdateScrollPosition()) {
                    if (null != this.m_scrollPosition ? t = this.m_scrollPosition : void 0 === t && (t = this.GetOption("scrollPosition")), e && null != t.key) {
                        var r = this._validateKeyForScroll(t.key, !1);
                        return void(r && r.then(function(e) {
                            null != o.m_contentHandler && (e || delete t.key, o.syncScrollPosition(t, !1))
                        }))
                    }
                    if (s = (i = this._getScrollCoordinates(t)).x, n = i.y, isNaN(s) && isNaN(n)) return void(null != this.m_scrollPosition && (this.SetOption("scrollPosition", this._getCurrentScrollPosition(l), {
                        _context: {
                            originalEvent: null,
                            internalSet: !0
                        }
                    }), this.signalTaskEnd(), this.m_scrollPosition = null))
                }
                void 0 === i && (n = this.GetOption("scrollTop"));
                var a = this._getScroller();
                if (l = a.scrollTop, !isNaN(s) && isNaN(n) || !isNaN(s) && n === l && s !== this._getScrollX(a, s)) {
                    if (!this._isScrollableX()) return void this._clearOutstandingScrollPosition();
                    this._setScrollX(a, s);
                    var h = this.GetOption("scrollPosition"),
                        c = {
                            x: s = this._getScrollX(a),
                            y: h.y,
                            index: h.index,
                            key: h.key,
                            offsetX: s,
                            offsetY: h.offsetY
                        };
                    h.parent && (c.parent = h.parent), this.SetOption("scrollPosition", c, {
                        _context: {
                            originalEvent: null,
                            internalSet: !0
                        }
                    })
                } else if (Math.abs(l - n) >= 1) {
                    var u = !1;
                    if (this._isScrollableY() && (u = this._setScrollY(a, n)), !isNaN(s) && s !== this._getScrollX(a, s) && this._isScrollableX() && (this._setScrollX(a, s), u = !0), !u) return this.m_scrollPosition && this.SetOption("scrollPosition", this._getCurrentScrollPosition(l), {
                        _context: {
                            originalEvent: null,
                            internalSet: !0
                        }
                    }), void this._clearOutstandingScrollPosition();
                    if (l = a.scrollTop, Math.abs(l - n) >= 1 && this.m_contentHandler.hasMoreToFetch && this.m_contentHandler.hasMoreToFetch()) return null == this.m_scrollPosition && this.signalTaskStart("Scroll position needs to resolve further"), this.m_scrollAndFetch = !0, void(this.m_scrollPosition = t);
                    this.SetOption("scrollPosition", this._getCurrentScrollPosition(l), {
                        _context: {
                            originalEvent: null,
                            internalSet: !0
                        }
                    })
                } else t && (null == t.key || isNaN(t.index)) && this.SetOption("scrollPosition", this._getCurrentScrollPosition(l), {
                    _context: {
                        originalEvent: null,
                        internalSet: !0
                    }
                });
                this._clearOutstandingScrollPosition()
            }
        },
        _clearOutstandingScrollPosition: function() {
            null != this.m_scrollPosition && (this.signalTaskEnd(), this.m_scrollPosition = null)
        },
        restoreCurrentItemFocus: function(t) {
            this._isInViewport(t) && this._setActive(i(t), null, !0)
        },
        ClearCache: function(t) {
            this.m_items = null, this.m_groupItems = null, t && null != this.m_keyElemMap && this.m_keyElemMap.clear()
        },
        getMinimumCountForViewport: function() {
            var t = this._getItemHeight(),
                e = this._getClientHeight();
            return !isNaN(t) && t > 0 ? Math.ceil(e / t) : 1
        },
        _isInViewport: function(t) {
            return h.isElementInScrollerBounds(t, this._getScroller())
        },
        _getAnimatedActions: function() {
            return ["add", "remove", "update", "expand", "collapse"]
        },
        StartAnimation: function(t, e, i) {
            if (this._getAnimatedActions().indexOf(e) > -1 && !this._isInViewport(t)) return Promise.resolve(null);
            var s, n;
            if (null == i && (i = this.getAnimationEffect(e)), "expand" === e) {
                var l = t.getAttribute("data-oj-initial-height");
                if (null != l && !isNaN(l)) {
                    (i = Object.assign({}, i)).startMaxHeight = l + "px";
                    var o = t.offsetHeight;
                    o < l && (n = t.style.maxHeight, s = t.style.height, t.style.maxHeight = "none", t.style.height = l + "px", i.effect = "collapse", i.endMaxHeight = o + "px"), t.removeAttribute("data-oj-initial-height")
                }
            }
            var r = c.startAnimation(t, e, i, this.ojContext);
            return void 0 !== s && r.then(function() {
                t.style.height = s, t.style.maxHeight = n
            }), r
        },
        notifyContextMenuGesture: function(t, e, s) {
            if (null == this.element[0].querySelector(".oj-listview-no-data-item") && this.IsNodeEditableOrClickable(i(e.target))) return !1;
            var n, o = i(e.target).closest("." + this.getItemElementStyleClass());
            o.length > 0 && !this.SkipFocus(i(o[0])) && this.SetCurrentItem(i(o[0]), null), 2 === e.button ? n = this.FindItem(i(e.target)) : null != this.m_active && (n = this.m_active.elem), null == n && (n = this.element);
            var r = {
                launcher: n,
                initialFocus: "menu"
            };
            "keyboard" === s && (r.position = {
                my: "start top",
                at: "start bottom",
                of: n
            }), null == this.ojContext._GetContextMenu() ? l.getContext(t).getBusyContext().whenReady().then(function() {
                this.PrepareContextMenu(o), this.ojContext._OpenContextMenu(e, s, r)
            }.bind(this)) : (this.PrepareContextMenu(o), this.ojContext._OpenContextMenu(e, s, r))
        },
        PrepareContextMenu: function(t) {
            var e = this.ojContext._GetContextMenu();
            null != this.m_dndContext && e && this.m_dndContext.prepareContextMenu(e)
        },
        IsElementEditableOrClickable: function(t) {
            return null != t.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/)
        },
        IsNodeEditableOrClickable: function(t) {
            for (; null != t && t[0] !== this.element[0] && "LI" !== t.prop("nodeName");)
                if (3 === t[0].nodeType) t = t.parent();
                else {
                    var e = t.attr("tabIndex"),
                        i = t.attr("data-oj-tabindex");
                    if (null != e && e >= 0 && !t.hasClass(this.getFocusedElementStyleClass()) && !t.hasClass("oj-listview-cell-element")) return !0;
                    if (this.IsElementEditableOrClickable(t) && (-1 !== e || -1 !== i)) return !0;
                    t = t.parent()
                }
            return !1
        },
        disableAllTabbableElements: function(t, e) {
            var s = i(t);
            (s.hasClass(this.getItemStyleClass()) || (s = i(s.get(0).firstElementChild)), s.children().first().hasClass("oj-listview-cell-element") && (s = i(s.get(0).firstElementChild)), s[0]) && i(h.disableAllFocusableElements(s[0], !0, e)).each(function() {
                i(this).removeAttr("data-first").removeAttr("data-last")
            })
        },
        _disableAllTabbableElementsBeforeItem: function(t) {
            for (var e = this._getItemsCache(), i = e.index(t), s = 0; s <= i; s++) this.disableAllTabbableElements(e[s], !0)
        },
        _disableAllTabbableElementsAfterItem: function(t) {
            var e = this._getItemsCache(),
                i = e.index(t);
            if (-1 !== i)
                for (var s = i; s <= e.length - 1; s++) this.disableAllTabbableElements(e[s], !0)
        },
        _enableAllTabbableElements: function(t) {
            var e = i(h.enableAllFocusableElements(t[0]));
            (e = e.filter(":visible")).first().attr("data-first", "true"), e.last().attr("data-last", "true")
        },
        _cleanupTabbableElementProperties: function(t) {
            h.enableAllFocusableElements(t[0]).forEach(function(t) {
                t.removeAttribute("data-first"), t.removeAttribute("data-last")
            })
        },
        SkipFocus: function(t) {
            return t.hasClass("oj-skipfocus")
        },
        GetFocusElement: function() {
            if (this.getListContainer().hasClass("oj-focus-ancestor")) {
                if (this.m_active) return this.getFocusItem(this.m_active.elem)[0];
                var t = this.element.children("." + this.getEmptyTextStyleClass()).first();
                if (t.length > 0 && 0 === t.attr("tabIndex")) return t[0]
            }
            return this.element[0]
        },
        _isFocusBlurTriggeredByDescendent: function(t) {
            return void 0 === t.relatedTarget || !(null == t.relatedTarget || !i.contains(this.ojContext.element.get(0), t.relatedTarget))
        },
        HandleFocus: function(t) {
            if (this._clearFocusoutTimeout(), this._clearFocusoutBusyState(), this.getListContainer().addClass("oj-focus-ancestor"), null == this.m_active) {
                var e = this.FindItem(i(t.target));
                this.m_preActive || this._isFocusBlurTriggeredByDescendent(t) || null != e && 0 !== e.length && !this.SkipFocus(e) || this._initFocus(t)
            } else this.m_preActive || t.target !== this.ojContext.element[0] || this._isFocusBlurTriggeredByDescendent(t) || (this.HighlightActive(), this._focusItem(this.m_active.elem)), this.RemoveRootElementTabIndex(), this._setTabIndex(this.m_active.elem)
        },
        restoreFocusAfterDrag: function() {
            null == this.m_active ? this._initFocus(null) : (this._makeFocusable(this.m_active.elem), this.HighlightActive(), this._focusItem(this.m_active.elem), this.RemoveRootElementTabIndex()), this.m_active && this.m_active.elem.removeClass("oj-focus-highlight")
        },
        _initFocus: function(t) {
            for (var e = this._getItemsCache(), s = 0; s < e.length; s++) {
                var n = i(e[s]);
                if (!this.SkipFocus(n)) {
                    this.SetCurrentItem(n, t);
                    break
                }
            }
            if (0 === e.length) {
                var l = this.element.children("." + this.getEmptyTextStyleClass()).first();
                l.length > 0 && (l.attr("tabIndex", 0), l.focus(), this.RemoveRootElementTabIndex())
            }
        },
        HandleFocusOut: function(t) {
            this.HandleBlur(t)
        },
        _supportRelatedTargetOnBlur: function() {
            var t = e.AgentUtils.getAgentInfo();
            return !(t.browser === e.AgentUtils.BROWSER.FIREFOX && parseInt(t.browserVersion, 10) < 48)
        },
        _isExtraBlurEvent: function(t) {
            var i = e.AgentUtils.getAgentInfo();
            return null == t.relatedTarget && i.browser === e.AgentUtils.BROWSER.IE && t.target === this.ojContext.element.get(0)
        },
        _clearFocusoutTimeout: function() {
            this._focusoutTimeout && (clearTimeout(this._focusoutTimeout), this._focusoutTimeout = null)
        },
        _setFocusoutBusyState: function() {
            this._focusoutResolveFunc || (this._focusoutResolveFunc = this._addComponentBusyState("is handling focusout."))
        },
        _setScrollPosBusyState: function() {
            this.ojContext._IsCustomElement() ? this._scrollPosResolveFunc || (this._scrollPosResolveFunc = this._addComponentBusyState("is waiting for scroll handler.")) : this.signalTaskStart("waiting for scroll handler")
        },
        _addComponentBusyState: function(t) {
            var e = l.getContext(this.element[0]).getBusyContext(),
                i = {
                    description: "The component identified by '" + this.element[0].id + "' " + t
                };
            return e.addBusyState(i)
        },
        _clearFocusoutBusyState: function() {
            this._focusoutResolveFunc && (this._focusoutResolveFunc(), this._focusoutResolveFunc = null)
        },
        _clearScrollPosBusyState: function() {
            this.ojContext._IsCustomElement() ? this._scrollPosResolveFunc && (this._scrollPosResolveFunc(), this._scrollPosResolveFunc = null) : this.signalTaskEnd()
        },
        HandleBlur: function(t) {
            if (this._clearFocusoutTimeout(), this._isExpandCollapseIcon(t.target) && this._focusOutHandler(i(t.target)), this._isActionableMode()) {
                if (null != _.getLogicalChildPopup(this.getListContainer())) return;
                this._setFocusoutBusyState(), this._focusoutTimeout = setTimeout(function() {
                    null != this.m_active && this.m_active.elem.get(0).contains(document.activeElement) || this._doBlur(), this._clearFocusoutBusyState()
                }.bind(this), 100)
            } else this._isFocusBlurTriggeredByDescendent(t) || this.m_preActive || null != this.m_active && this.m_active.elem.get(0).contains(document.activeElement) || this._doBlur()
        },
        _doBlur: function() {
            if (this._isActionableMode() && this._exitActionableMode(), this.getListContainer().removeClass("oj-focus-ancestor"), this.UnhighlightActive(), null != this.m_active) this._resetTabIndex(this.m_active.elem), this._removeSkipItemAriaLabel(this.m_active.elem);
            else {
                var t = this.element.children("." + this.getEmptyTextStyleClass()).first();
                t.length > 0 && t.removeAttr("tabIndex")
            }
            this.SetRootElementTabIndex()
        },
        _handleMouseOut: function(t) {
            var e = this.FindItem(t.target);
            null != e && (this.m_hoverItem = null, this._unhighlightElem(e, "oj-hover"))
        },
        _handleMouseOver: function(t) {
            if (!(!this._isShowHover() || this._recentTouch() || this.m_dndContext && this.m_dndContext.isDndInProgress())) {
                var e = this.FindItem(t.target);
                null == e || this.SkipFocus(e) || (this.m_hoverItem = e, this._highlightElem(e, "oj-hover"))
            }
        },
        _isShowHover: function() {
            return this._isSelectionEnabled()
        },
        _recentTouch: function() {
            return Date.now() - this._lastTouch < 500
        },
        HandleKeyDown: function(t) {
            if (this.isExpandable()) {
                var e = t.key || t.keyCode;
                if ("ArrowLeft" === e || "Left" === e || e === this.LEFT_KEY || "ArrowRight" === e || "Right" === e || e === this.RIGHT_KEY) {
                    var i = this.m_active.elem;
                    if ("ArrowLeft" === e || "Left" === e || e === this.LEFT_KEY) {
                        if (this.GetState(i) === this.STATE_EXPANDED) return void this.CollapseItem(i, t, !0, this.m_active.key, !0, !0)
                    } else if (this.GetState(i) === this.STATE_COLLAPSED) return void this.ExpandItem(i, t, !0, this.m_active.key, !0, !0, !0)
                }
            }
            var s = this.HandleSelectionOrActiveKeyDown(t);
            null != this.m_dndContext && (s = s || this.m_dndContext.HandleKeyDown(t)), !0 === s && t.preventDefault(), this.m_keyProcessed = s
        },
        HandleKeyUp: function(t) {
            var e = t.key || t.keyCode;
            "Escape" !== e && "Esc" !== e && e !== this.ESC_KEY || !this.m_keyProcessed || t.stopPropagation(), this.m_keyProcessed = void 0
        },
        _handleMouseUpOrPanMove: function(t) {
            this.m_preActiveItem && this._unhighlightElem(this.m_preActiveItem, "oj-focus"), null != this.m_dndContext && this.m_dragger && this.m_dragger.get(0) !== t.target && (this.m_dndContext._unsetDraggable(this.m_dragger), this.m_dragger = null)
        },
        _isNodeFocusable: function(t) {
            var e = this.getItemElementStyleClass();
            return h.isElementOrAncestorFocusable(t, function(t) {
                return t.classList.contains(e) || t.classList.contains("oj-listview-cell-element")
            })
        },
        HandleMouseDownOrTouchStart: function(t) {
            var e = i(t.target);
            null != this.m_dndContext && (this.m_dndContext._setDraggable(e), this.m_dragger = e);
            var s = this.FindItem(e);
            null != s && s.length > 0 && this._isLegacyClickthroughDisabled(t, s.get(0)) && (this.m_preActive = !0, s = null), null == s || 0 === s.length || this.SkipFocus(s) || e.hasClass("oj-listview-drag-handle") || (this.m_preActive = !0, this.getListContainer().hasClass("oj-focus-ancestor") || this.getListContainer().addClass("oj-focus-ancestor"), this.m_preActiveItem = s, this._highlightElem(s, "oj-focus"), this._makeFocusable(s), !this.element[0].contains(document.activeElement) || s.get(0).contains(document.activeElement) || this._isNodeFocusable(e[0]) || this._focusItem(s), this.RemoveRootElementTabIndex(), null != this.m_active && this.m_active.elem.get(0) !== s.get(0) && this._resetTabIndex(this.m_active.elem), t.originalEvent.touches && t.originalEvent.touches.length > 0 && (this.m_touchPos = {
                x: t.originalEvent.changedTouches[0].pageX,
                y: t.originalEvent.changedTouches[0].pageY
            }), this._isInputElement(e.get(0)) && this._enterActionableMode(s))
        },
        HandleTouchEndOrCancel: function(t) {
            if (null != this.m_preActiveItem && (this._unhighlightElem(this.m_preActiveItem, "oj-focus"), null != this.m_touchPos)) {
                var e = this.m_preActiveItem.offset(),
                    i = this.getAnimationEffect("pointerUp");
                i.offsetX = this.m_touchPos.x - e.left + "px", i.offsetY = this.m_touchPos.y - e.top + "px";
                var s, n = this.m_preActiveItem.children("." + this.getGroupItemStyleClass());
                s = n.length > 0 ? n.get(0) : this.getFocusItem(this.m_preActiveItem).get(0);
                for (var l = t.target, o = s.querySelectorAll("input, select, button, a, textarea, object, [tabIndex]:not([tabIndex='-1']), [data-oj-tabmod]"), r = 0; r < o.length; r++)
                    if (o[r].contains(l)) {
                        s = null;
                        break
                    }
                null != s && this.StartAnimation(s, "pointerUp", i), this.m_touchPos = null
            }
            this._lastTouch = Date.now(), this._handleMouseOut(t)
        },
        _enterActionableMode: function(t) {
            var e = void 0 === t ? this.m_active.elem : t;
            e && (this.disableAllTabbableElements(e), this._enableAllTabbableElements(e), e.find("[data-first]").length > 0 && this._setActionableMode(!0))
        },
        _exitActionableMode: function() {
            this._setActionableMode(!1), this.m_active && this.disableAllTabbableElements(this.m_active.elem)
        },
        HandleMouseClick: function(t) {
            if (0 === t.button) {
                var e = this.getCollapseIconStyleClass(),
                    s = this.getExpandIconStyleClass(),
                    n = i(t.target);
                if (n.hasClass(s)) this._collapse(t), t.preventDefault();
                else if (n.hasClass(e)) this._expand(t), t.preventDefault();
                else {
                    var l = this.FindItem(n);
                    if (null == l || 0 === l.length) return;
                    if (this._isLegacyClickthroughDisabled(t, l[0])) return;
                    if (this.SkipFocus(l)) return void this._handleHeaderClick(t, n, l);
                    this._isActionableMode() && null != this.m_active && this.m_active.elem.get(0) !== l.get(0) && !this._isInputElement(n.get(0)) && this._exitActionableMode(), this.getListContainer().hasClass("oj-focus-ancestor") || this.getListContainer().addClass("oj-focus-ancestor");
                    var o = this._isClickthroughDisabled(t, l);
                    if (!o && this._isSelectionEnabled() && this.IsSelectable(l[0])) {
                        var r = t.originalEvent.sourceCapabilities && t.originalEvent.sourceCapabilities.firesTouchEvents;
                        (this._isTouchSupport() && (r || null != this.touchStartEvent && this.touchStartEvent.target === t.target) ? this._handleTouchSelection(l, t) : this.HandleClickSelection(l, t)) || this.HandleClickActive(l, t), this.ShouldUseGridRole() && t.target === l.get(0) && this._focusItem(l), this._shouldDragSelectedItems() && this.m_dndContext.setSelectionDraggable()
                    } else this.HandleClickActive(l, t);
                    o || this._fireActionEvent(l.get(0), t), this._handleHeaderClick(t, n, l)
                }
            }
        },
        _handleHeaderClick: function(t, e, i) {
            var s = this.getGroupItemStyleClass();
            this.isExpandable() && e.closest("." + s) && (this.GetState(i) === this.STATE_COLLAPSED ? this._expand(t) : this.GetState(i) === this.STATE_EXPANDED && this._collapse(t))
        },
        _fireActionEvent: function(t, e) {
            if (!this._isActionableMode()) {
                var i = {
                    context: {
                        key: this.GetKey(t),
                        data: this._getDataForItem(t),
                        metadata: this._getMetadataForItem(t)
                    }
                };
                this.Trigger("itemAction", e, i)
            }
        },
        _shouldDragSelectedItems: function() {
            return null != this.m_dndContext && !this.m_dndContext.shouldDragCurrentItem()
        },
        _isTouchSupport: function() {
            return p.isTouchSupported()
        },
        _isNonWindowTouch: function() {
            return this._isTouchSupport() && e.AgentUtils.getAgentInfo().os !== e.AgentUtils.OS.WINDOWS
        },
        _ctrlEquivalent: function(t) {
            return p.isMetaKeyPressed(t)
        },
        _createSubId: function(t) {
            return [this.element.attr("id"), t].join(":")
        },
        FindItem: function(t) {
            return i(t).hasClass(this.getGroupStyleClass()) ? null : i(t).closest("." + this.getItemElementStyleClass())
        },
        _isLegacyClickthroughDisabled: function(t, e) {
            for (var i = t.target; null != i && i !== e;) {
                if (i.classList.contains("oj-clickthrough-disabled")) return !0;
                i = i.parentNode
            }
            return !1
        },
        _isClickthroughDisabled: function(t, e) {
            return e.length > 0 && h.isEventClickthroughDisabled(t, e.get(0))
        },
        getListContainerBorderWidth: function() {
            return null == this.m_borderWidth && (this.m_borderWidth = parseInt(this.getListContainer().css("border-top-width"), 10) + parseInt(this.getListContainer().css("border-bottom-width"), 10)), this.m_borderWidth
        },
        scrollToItem: function(t) {
            var e = t.key;
            if (null != e) {
                var s = this.FindElementByKey(e);
                if (null != s)
                    if (i(s).hasClass(this.getItemStyleClass())) this._scrollToVisible(s);
                    else {
                        var n = i(s).children("." + this.getGroupItemStyleClass()).first();
                        this._scrollToGroupHeader(n.get(0))
                    }
            }
        },
        _scrollToVisible: function(t) {
            var e, s, n = 0,
                l = this.getListContainer()[0],
                o = l.scrollTop,
                r = l.offsetHeight;
            if (t.classList.contains(this.getItemStyleClass())) e = t.offsetTop, s = t.offsetHeight;
            else if (t.children.length > 0) {
                var a = t.children[0];
                a.classList.contains(this.getGroupItemStyleClass()) && (e = a.offsetTop, s = a.offsetHeight)
            }
            if (!isNaN(e) && !isNaN(s)) {
                if (null != this.m_groupItemToPin) {
                    var h = parseInt(this.m_groupItemToPin.style.top, 10),
                        c = i(this.m_groupItemToPin).outerHeight();
                    e <= h && h < e + s ? n = (s + e - h) / 2 : e >= h && e < h + c && (n = (h + c - e) / 2)
                } else if (null != this.m_closestParent) {
                    var u = this.m_closestParent.firstElementChild;
                    u.classList.contains("oj-sticky") && (n = u.offsetTop + u.offsetHeight - e)
                }
                if (e >= o && e + s <= o + r) n > 0 && (l.scrollTop = o - n);
                else {
                    var d = Math.max(0, Math.min(e - n, Math.abs(e + s - r)));
                    d > o && (d += this.getListContainerBorderWidth()), l.scrollTop = d
                }
            }
        },
        GetKey: function(t) {
            return this.m_contentHandler.GetKey(t)
        },
        FindElementByKey: function(t) {
            if (null != this.m_keyElemMap) {
                var e = this.m_keyElemMap.get(t);
                if (null != e) return document.getElementById(e)
            }
            return this.m_contentHandler ? this.m_contentHandler.FindElementByKey(t) : null
        },
        GetIndexOf: function(t, i) {
            for (var s = 0; s < t.length; s++)
                if (i === t[s] || e.Object.compareValues(i, t[s])) return s;
            return -1
        },
        _isExpandCollapseIcon: function(t) {
            return i(t).hasClass(this.getExpandIconStyleClass()) || i(t).hasClass(this.getCollapseIconStyleClass())
        },
        _isGridlinesVisible: function() {
            if (null == this.m_gridlinesVisible) {
                var t = this.GetOption("gridlines");
                if (null == t) return !0;
                this.m_gridlinesVisible = "hidden" !== t.item
            }
            return this.m_gridlinesVisible
        },
        _isTopBottomGridlinesVisible: function() {
            var t = this._getOptionDefaults().gridlines;
            return t ? {
                top: t.top,
                bottom: t.bottom
            } : {
                top: !0,
                bottom: !0
            }
        },
        _updateGridlines: function() {
            var t = this.GetRootElement()[0];
            this._isGridlinesVisible() ? t.classList.remove("oj-listview-gridlines-hidden") : t.classList.add("oj-listview-gridlines-hidden");
            var e = this._isTopBottomGridlinesVisible();
            t.classList.remove("gridline-top-hidden"), t.classList.remove("gridline-bottom-hidden"), "hidden" === e.top && t.classList.add("gridline-top-hidden"), "hidden" === e.bottom && t.classList.add("gridline-bottom-hidden")
        },
        _shouldRenderGridlineForLastItem: function() {
            if (this.isCardLayout()) return !1;
            var t = this.GetOption("gridlines");
            if (null != t) {
                var e = this._isTopBottomGridlinesVisible();
                if ("visible" === t.item && "hidden" === e.bottom) return !0
            }
            return !1
        },
        IsArrowKey: function(t) {
            return this.isCardLayout() ? "ArrowUp" === t || "Up" === t || t === this.UP_KEY || "ArrowDown" === t || "Down" === t || t === this.DOWN_KEY || "ArrowLeft" === t || "Left" === t || t === this.LEFT_KEY || "ArrowRight" === t || "Right" === t || t === this.RIGHT_KEY : "ArrowUp" === t || "Up" === t || t === this.UP_KEY || "ArrowDown" === t || "Down" === t || t === this.DOWN_KEY
        },
        _getItemsCache: function() {
            if (null == this.m_items) {
                var t = this.getGroupCollapseStyleClass(),
                    e = "." + this.getItemElementStyleClass() + ":visible";
                this.m_items = this.element.find(e).filter(function() {
                    if (i(this).parent().hasClass(t)) return !i(this).parent().parent().hasClass("oj-collapsed");
                    if ("LI" !== this.tagName) {
                        var e = this.parentElement;
                        if (e && e.classList.contains("oj-animate-remove")) return !1
                    }
                    return !0
                }).map(function(t, e) {
                    var i = e.parentElement;
                    return i && (i.classList.contains("oj-animate-add") || i.classList.contains("oj-listview-temp-item")) ? i : e
                })
            }
            return this.m_items
        },
        _handleLastItemKeyboardFocus: function(t) {
            var e = t.get(0).nextElementSibling;
            if (null == e || !i(e).hasClass(this.getItemElementStyleClass())) {
                if (this.m_contentHandler.IsHierarchical() && t.parent().hasClass(this.getGroupStyleClass()) && null != t.parent().parent().get(0).nextElementSibling) return;
                var s = this._getScroller(),
                    n = this._getScrollHeight();
                s.scrollTop < n && (s.scrollTop = n)
            }
        },
        HandleArrowKeys: function(t, e, s) {
            if (!this.m_contentHandler.IsReady()) return !0;
            var n;
            n = !e || this.m_isNavigate ? this.m_active.elem : this.m_selectionFrontier;
            var l = !1;
            switch (t) {
                case this.UP_KEY:
                case "Up":
                case "ArrowUp":
                    this.isCardLayout() && i(n).hasClass(this.getItemStyleClass()) ? this._gotoItemAbove(n, e, s) : this._gotoPrevItem(n, e, s), l = !0;
                    break;
                case this.DOWN_KEY:
                case "Down":
                case "ArrowDown":
                    this.isCardLayout() && i(n).hasClass(this.getItemStyleClass()) ? this._gotoItemBelow(n, e, s) : this._gotoNextItem(n, e, s), l = !0;
                    break;
                case this.LEFT_KEY:
                case "Left":
                case "ArrowLeft":
                case this.RIGHT_KEY:
                case "Right":
                case "ArrowRight":
                    this.isCardLayout() && ("rtl" === this.ojContext._GetReadingDirection() && (t = "ArrowLeft" === t || "Left" === t || t === this.LEFT_KEY ? "ArrowRight" : "ArrowLeft"), "ArrowLeft" === t || "Left" === t || t === this.LEFT_KEY ? this._gotoPrevItem(n, e, s) : this._gotoNextItem(n, e, s), l = !0)
            }
            return l
        },
        _gotoNextItem: function(t, e, s) {
            var n = this._getItemsCache(),
                l = n.index(t) + 1;
            if (l < n.length) {
                for (var o = i(n[l]); this.SkipFocus(o);) {
                    if ((l += 1) === n.length) return;
                    o = i(n[l])
                }
                e ? (this._extendSelection(o, s), this.m_isNavigate = !1) : (this.SetCurrentItem(o, s), this.m_isNavigate = !0), this._handleLastItemKeyboardFocus(o)
            }
        },
        _gotoPrevItem: function(t, e, s) {
            var n = this._getItemsCache(),
                l = n.index(t) - 1;
            if (l >= 0) {
                for (var o = i(n[l]); this.SkipFocus(o);) {
                    if ((l -= 1) < 0) return;
                    o = i(n[l])
                }
                e ? (this._extendSelection(o, s), this.m_isNavigate = !1) : (this.SetCurrentItem(o, s), this.m_isNavigate = !0)
            }
        },
        _getColumnCount: function(t) {
            var e, i;
            return t.each(function(t) {
                var s = this.offsetTop;
                if (void 0 === i) i = s;
                else if (i !== s) return !1;
                e = t
            }), e + 1
        },
        _updateSkipItemAriaLabel: function(t, e) {
            var s = this._createSubId("extra_info");
            if (null == this.m_skipAriaLabelText) {
                var n = i(document.createElement("div"));
                n.addClass("oj-helper-hidden-accessible").attr("id", s), this.getListContainer().append(n), this.m_skipAriaLabelText = n
            }
            this.m_skipAriaLabelText.text(this.ojContext.getTranslatedString("accessibleNavigateSkipItems", {
                numSkip: e
            }));
            var l = this.getFocusItem(t);
            l.uniqueId().attr("aria-labelledby", s + " " + l.prop("id"))
        },
        _removeSkipItemAriaLabel: function(t) {
            var e = this.getFocusItem(t);
            e.length > 0 && e.get(0).removeAttribute("aria-labelledby")
        },
        _gotoItemAbove: function(t, e, s) {
            var n, l;
            if (t.hasClass(this.getItemElementStyleClass())) {
                var o = t.parent(),
                    r = o.children("li." + this.getItemElementStyleClass()),
                    a = this._getColumnCount(r),
                    h = r.index(t),
                    c = h - a;
                if (c < 0 ? o.hasClass(this.getGroupStyleClass()) && o.parent().hasClass(this.getItemElementStyleClass()) && (n = o.parent(), l = h) : (n = i(r.get(c)), l = a - 1), n && n.length > 0) {
                    if (this.SkipFocus(n)) return;
                    e ? (this._extendSelection(n, s), this.m_isNavigate = !1) : (null != l && l > 0 && this._updateSkipItemAriaLabel(n, l), this.SetCurrentItem(n, s), this.m_isNavigate = !0)
                }
            } else this._gotoPrevItem(t)
        },
        _gotoItemBelow: function(t, e, s) {
            var n, l;
            if (t.hasClass(this.getItemElementStyleClass())) {
                var o = t.parent(),
                    r = o.children("li." + this.getItemElementStyleClass()),
                    a = this._getColumnCount(r),
                    h = r.index(t),
                    c = h + a;
                if (c >= r.length) {
                    var u = Math.ceil(r.length / a);
                    l = r.length - 1 - h, h < Math.max(0, (u - 1) * a) ? (n = r.last(), l -= 1) : o.hasClass(this.getGroupStyleClass()) && (n = o.parent().next("li." + this.getItemElementStyleClass()))
                } else n = i(r.get(c)), l = a - 1;
                if (n.length > 0) {
                    if (this.SkipFocus(n)) return;
                    e ? (this._extendSelection(n, s), this.m_isNavigate = !1) : (null != l && l > 0 && this._updateSkipItemAriaLabel(n, l), this.SetCurrentItem(n, s), this.m_isNavigate = !0), this._handleLastItemKeyboardFocus(n)
                }
            } else this._gotoNextItem(t)
        },
        _isActionableMode: function() {
            return "actionable" === this.m_keyMode
        },
        _setActionableMode: function(t, e) {
            this.m_keyMode = t ? "actionable" : "navigation", t || e || this.element[0].focus()
        },
        getFocusItem: function(t) {
            if (!t.hasClass(this.getFocusedElementStyleClass())) return i(t.find("." + this.getFocusedElementStyleClass()).first());
            if (this.ShouldUseGridRole() && "row" === t.attr("role")) {
                var e = t.children(".oj-listview-cell-element").first();
                return 0 === e.length ? t.children().first() : e
            }
            return t
        },
        SetRootElementTabIndex: function() {
            this._isComponentFocusable() && this.element.attr("tabIndex", 0)
        },
        RemoveRootElementTabIndex: function() {
            this.element.removeAttr("tabIndex")
        },
        _isComponentFocusable: function() {
            var t = this.ojContext._IsCustomElement() ? this.GetRootElement() : this.element;
            return this._rootTabIndexSet || -1 !== parseInt(t.attr("tabIndex"), 10)
        },
        _setTabIndex: function(t) {
            this._isComponentFocusable() && this.getFocusItem(t).attr("tabIndex", 0)
        },
        _resetTabIndex: function(t) {
            var e = !0;
            "presentation" === t.attr("role") && (e = !1);
            var i = this.getFocusItem(t);
            e ? i.removeAttr("tabIndex") : i.attr("tabIndex", -1)
        },
        _makeFocusable: function(t) {
            this._setTabIndex(t)
        },
        getSingleFocusableElement: function(t) {
            return t
        },
        _setCurrentItemOption: function(t, e, s) {
            var n = {
                item: this.ojContext._IsCustomElement() ? s : i(s)
            };
            this.SetOption("currentItem", t, {
                _context: {
                    originalEvent: e,
                    internalSet: !0,
                    extraData: n
                },
                changed: !0
            })
        },
        _setActive: function(t, e, i) {
            var s;
            if (null != t) {
                var n = t[0],
                    l = this.GetKey(n);
                if (null == this.m_active || l !== this.m_active.key) {
                    var o = {
                        key: l,
                        item: t
                    };
                    return null != this.m_active && (o.previousKey = this.m_active.key, o.previousItem = this.m_active.elem, this._shouldDragSelectedItems() && this._isTouchSupport() && this.m_dndContext._unsetDraggable(o.previousItem), this._removeSkipItemAriaLabel(o.previousItem)), !!this.Trigger("beforeCurrentItem", e, o) && (null != this.m_active && this.m_active.elem && this.m_active.elem.get(0).classList.remove("oj-listview-current-item"), s = {
                        key: l,
                        elem: t
                    }, this.m_active = s, this._shouldDragSelectedItems() && this._isTouchSupport() && this.m_dndContext._setDraggable(t), t.get(0).classList.add("oj-listview-current-item"), void 0 !== i && i || (this._makeFocusable(t), this.HighlightActive(), (null == e || e.originalEvent && "click" !== e.originalEvent.type) && this._focusItem(t), this.RemoveRootElementTabIndex(), o.previousItem && this._resetTabIndex(o.previousItem)), !0)
                }
                l === this.m_active.key && (s = {
                    key: l,
                    elem: t
                }, this.m_active = s, void 0 !== i && i || (this._makeFocusable(t), this.RemoveRootElementTabIndex()))
            } else this.m_active = null;
            return !1
        },
        _focusItem: function(t) {
            var e = this.getFocusItem(t).get(0);
            e && e.focus()
        },
        HighlightActive: function() {
            if (null != this.m_active && this.getListContainer().hasClass("oj-focus-ancestor")) {
                var t = this.m_active.elem;
                this._highlightElem(t, "oj-focus")
            }
        },
        UnhighlightActive: function() {
            null != this.m_active && this._unhighlightElem(this.m_active.elem, "oj-focus")
        },
        HandleClickActive: function(t, e) {
            var s = null != this.m_active ? this.m_active.elem.get(0) : null;
            null == s || i(s).hasClass(this.getItemStyleClass()) || (s = s.firstElementChild), null != e && null != s && s !== e.target && s.contains(e.target) || this.SetCurrentItem(t, e, !this.ShouldUseGridRole() || e.target !== t.get(0))
        },
        SetCurrentItem: function(t, e, i) {
            this.ActiveAndFocus(t, e, i) && this._setCurrentItemOption(this.GetKey(t[0]), e, t.get(0))
        },
        ActiveAndFocus: function(t, e, i) {
            this._scrollToVisible(t[0]), this.UnhighlightActive();
            var s = this._setActive(t, e, i);
            return this.HighlightActive(), s
        },
        enforceSelectionRequired: function() {
            if (this._isSelectionEnabled() && this._isSelectionRequired()) {
                var t = this.GetOption("selection");
                (null == t || 0 === t.length && !0 !== t.inverted) && this._selectFirstSelectableItem()
            }
        },
        _getFirstSelectableItem: function() {
            var t = this.element[0].querySelector(".oj-listview-cell-element[aria-selected]");
            return null == t ? null : t.parentNode
        },
        _selectFirstSelectableItem: function() {
            var t = this._getFirstSelectableItem();
            if (t) {
                var e = this.m_contentHandler.GetKey(t);
                if (null != e) {
                    this._applySelection(t, e);
                    var i = this.GetOption("selected");
                    this._setSelectionOption(i.clear().add([e]), null, [t])
                }
            }
        },
        _isSelectionEnabled: function() {
            return "none" !== this.GetOption("selectionMode")
        },
        _isSelectionRequired: function() {
            return this.GetOption("selectionRequired")
        },
        _isMultipleSelection: function() {
            return "multiple" === this.GetOption("selectionMode")
        },
        IsSelectable: function(t) {
            return this.getFocusItem(i(t)).get(0).hasAttribute("aria-selected")
        },
        _cloneSelection: function(t) {
            var e = [];
            return t.forEach(function(t) {
                e.push(t)
            }), e
        },
        _getLocalData: function(t) {
            var e = this.getDataForVisibleItem({
                key: t
            });
            return null == e && this.m_validatedSelectedKeyData && (e = this.m_validatedSelectedKeyData.get(t)), e
        },
        _setSelectionOption: function(t, s, n, l) {
            var o = {
                    key: null,
                    data: null
                },
                r = d.KeySetUtils.toArray(t),
                a = this.GetOption("firstSelectedItem");
            null != a && (0 === r.length && null != a.key || r[0] !== a.key && !e.Object.compareValues(r[0], a.key) ? (r.length > 0 && (o = {
                key: r[0],
                data: null != l ? l : this._getLocalData(r[0])
            }), this.SetOption("firstSelectedItem", o, {
                _context: {
                    originalEvent: s,
                    internalSet: !0
                },
                changed: !0
            })) : void 0 === a.data && (null == l && (l = this._getLocalData(r[0])), o = {
                key: a.key,
                data: l
            }, this.SetOption("firstSelectedItem", o, {
                _context: {
                    originalEvent: null,
                    internalSet: !0
                },
                changed: !0
            })));
            var h = {
                items: this.ojContext._IsCustomElement() ? n : i(null == n ? {} : n)
            };
            this.SetOption("selected", t, {
                _context: {
                    originalEvent: s,
                    internalSet: !0,
                    extraData: h
                },
                changed: !0
            }), this.SetOption("selection", r, {
                _context: {
                    originalEvent: s,
                    internalSet: !0,
                    extraData: h
                },
                changed: !0
            })
        },
        _unhighlightSelection: function() {
            if (null != this.m_keyElemMap) {
                var t = this,
                    e = this.GetOption("selected");
                if (e.isAddAll())
                    for (var i = this._getItemsCache(), s = 0; s < i.length; s++) t._unhighlightElem(i[s], "oj-selected");
                else e.values().forEach(function(e) {
                    var i = t.FindElementByKey(e);
                    null != i && t._unhighlightElem(i, "oj-selected")
                })
            }
        },
        _highlightElem: function(t, e) {
            this.HighlightUnhighlightElem(t, e, !0)
        },
        _unhighlightElem: function(t, e) {
            this.HighlightUnhighlightElem(t, e, !1)
        },
        HighlightUnhighlightElem: function(t, e, s) {
            var n = i(t);
            "oj-selected" === e && this.getFocusItem(n).attr("aria-selected", s ? "true" : "false");
            var l = n.children("." + this.getGroupItemStyleClass());
            l.length > 0 && (n = i(l[0])), "oj-focus" === e ? s ? "actionable" !== this.m_keyMode && this._focusInHandler(n) : this._focusOutHandler(n) : s ? n.addClass(e) : n.removeClass(e)
        },
        HandleClickSelection: function(t, e) {
            this._scrollToVisible(t[0]);
            var i = this._ctrlEquivalent(e),
                s = e.shiftKey,
                n = !0;
            return this._isMultipleSelection() ? i || s ? !i && s ? n = this._extendSelection(t, e) : this._augmentSelectionAndFocus(t, e) : n = this.SelectAndFocus(t, e) : n = this.SelectAndFocus(t, e, i), n
        },
        _handleTouchSelection: function(t, e) {
            var i = !0;
            return this._isMultipleSelection() ? e.shiftKey ? i = this._extendSelection(t, e) : this._augmentSelectionAndFocus(t, e) : i = this.SelectAndFocus(t, e, !0), i
        },
        _clearSelection: function(t, e) {
            if (this._unhighlightSelection(), t)
                if (this._isSelectionRequired()) this._selectFirstSelectableItem();
                else {
                    var i = this.GetOption("selected");
                    i = i.clear(), this._setSelectionOption(i, null, null)
                }
            this.m_selectionFrontier = void 0 === e ? null : e
        },
        SelectAndFocus: function(t, e, i) {
            var s = this.GetKey(t[0]),
                n = this.GetOption("selected"),
                l = n.has(s);
            if (l && n.values && 1 === n.values().size && this._isSelectionRequired()) return !1;
            var o = "redwood" === r.parseJSONFromFontFamily("oj-theme-json").behavior;
            return !l || !i && o ? (this._clearSelection(!1), this._augmentSelectionAndFocus(t, e, n.clear())) : this._clearSelection(!0), !0
        },
        _extendSelection: function(t, e) {
            return null != this.m_active && (this.m_selectionFrontier !== t && (this._unhighlightElem(t, "oj-focus"), this._extendSelectionRange(this.m_active.elem, t, e), !0))
        },
        _extendSelectionRange: function(t, e, i, s) {
            !0 === s ? this._clearSelection(!1, this.m_selectionFrontier) : this._clearSelection(!1, e), this._highlightRange(t, e, i), this.HighlightActive(), this._scrollToVisible(e[0])
        },
        _highlightRange: function(t, e, i) {
            var s, n, l = this.GetOption("selected").clear(),
                o = [],
                r = this._getItemsCache(),
                a = r.index(t),
                h = r.index(e);
            a > h ? (s = h, n = a) : (s = a, n = h);
            for (var c = s; c <= n; c++) {
                var u = r[c];
                if (this.IsSelectable(u)) {
                    var d = this.m_contentHandler.GetKey(u);
                    this._applySelection(u, d), l = l.add([d]), o.push(u)
                }
            }
            this._setSelectionOption(l, i, o)
        },
        _applySelection: function(t, e) {
            null == this.m_keyElemMap && (this.m_keyElemMap = this.m_contentHandler.createKeyMap()), this.m_keyElemMap.set(e, i(t).attr("id")), this._highlightElem(t, "oj-selected")
        },
        _augmentSelectionAndFocus: function(t, e, s) {
            var n = t,
                l = this.GetKey(t[0]);
            null == s && (s = this.GetOption("selected"));
            var o = null != this.m_active ? this.m_active.elem.get(0) : null;
            (null == o || i(o).hasClass(this.getItemStyleClass()) || (o = o.firstElementChild), null == e || null != o && o !== e.target && o.contains(e.target)) || (this.UnhighlightActive(), this._setActive(n, e) && this._setCurrentItemOption(l, e, n.get(0)), this.HighlightActive());
            if (null != (o = null != this.m_active ? this.m_active.elem.get(0) : null) && o === n.get(0)) {
                if (s.has(l)) {
                    if (s.values && 1 === s.values().size && this._isSelectionRequired()) return;
                    this._unhighlightElem(t, "oj-selected"), s = s.delete([l])
                } else this.m_selectionFrontier = t, this._applySelection(t, l), s = s.add([l]);
                var r = [];
                s.values && s.values().forEach(function(t) {
                    r.push(this.FindElementByKey(t))
                }, this), this._setSelectionOption(s, e, r)
            } else null != s && 0 === s.values().size && this._setSelectionOption(s, e, [])
        },
        ToggleSelection: function(t, e, i) {
            var s = this.GetOption("selected"),
                n = this.m_active.elem,
                l = this.m_active.key;
            if (s.has(l)) {
                if (i || 1 === s.values().size && this._isSelectionRequired()) return;
                this._unhighlightElem(n, "oj-selected"), 0 === (s = s.delete([l])).values().size && (this.m_selectionFrontier = null)
            } else this.IsSelectable(n[0]) && (e || (this._clearSelection(!1), s = s.clear()), this.m_selectionFrontier = n, this._applySelection(n, l), s = s.add([l]));
            var o = [];
            s.values().forEach(function(t) {
                o.push(this.FindElementByKey(t))
            }, this), this._setSelectionOption(s, t, o)
        },
        _isInputElement: function(t) {
            return null != t.nodeName.match(/^INPUT|SELECT|OPTION|TEXTAREA/) && !t.readOnly
        },
        HandleSelectionOrActiveKeyDown: function(t) {
            var e, s, n, l = !1;
            if (null == this.m_active || t.isDefaultPrevented()) return !1;
            var o = t.key || t.keyCode,
                r = this.m_active.elem;
            if (this._isActionableMode()) {
                if ("Escape" === o || "Esc" === o || o === this.ESC_KEY) this._exitActionableMode(), this.HighlightActive(), this._focusItem(r), this._setTabIndex(r), l = !0;
                else if ("Tab" === o || o === this.TAB_KEY) {
                    var a = this.getFocusItem(r).get(0);
                    if (l = t.shiftKey ? h.handleActionablePrevTab(t, a) : h.handleActionableTab(t, a), !t.shiftKey && l || t.shiftKey && !l) {
                        var c = h.getFocusableElementsInNode(a)[0];
                        c && this._isExpandCollapseIcon(c) && this._focusInHandler(i(c))
                    }
                }
            } else "F2" === o || o === this.F2_KEY ? (this._enterActionableMode(), (n = r.find("[data-first]")).length > 0 && (n[0].focus(), this._isExpandCollapseIcon(n) && this._focusInHandler(n), r.hasClass(this.getItemStyleClass()) || (r = r.children("." + this.getGroupItemStyleClass()).first()), r.removeClass("oj-focus-highlight"))) : " " !== o && "Spacebar" !== o && o !== this.SPACE_KEY || !this._isSelectionEnabled() || this._isInputElement(t.target) ? "Enter" === o || o === this.ENTER_KEY ? (this._isSelectionEnabled() && this.ToggleSelection(t, !1, !0), this._fireActionEvent(r.get(0), t)) : this.IsArrowKey(o) ? (e = this._ctrlEquivalent(t), s = t.shiftKey, e || (l = this.HandleArrowKeys(o, s && this._isSelectionEnabled() && this._isMultipleSelection(), t))) : "Tab" !== o && o !== this.TAB_KEY || (t.shiftKey ? this._disableAllTabbableElementsBeforeItem(r) : this._disableAllTabbableElementsAfterItem(r)) : (e = this._ctrlEquivalent(t), (s = t.shiftKey) && !e && null != this.m_selectionFrontier && this._isMultipleSelection() ? this._extendSelectionRange(this.m_selectionFrontier, this.m_active.elem, t, !0) : this.ToggleSelection(t, e && !s && this._isMultipleSelection(), !1), l = !0);
            return l
        },
        _isDisclosing: function(t) {
            return !(!t || !this.m_disclosing) && this.m_disclosing.indexOf(t) > -1
        },
        _setDisclosing: function(t, e) {
            if (null != t)
                if (null == this.m_disclosing && (this.m_disclosing = []), e) this.m_disclosing.push(t);
                else
                    for (var i = this.m_disclosing.indexOf(t); i > -1;) this.m_disclosing.splice(i, 1), i = this.m_disclosing.indexOf(t)
        },
        _getOptionDefaults: function() {
            return null == this.defaultOptions && (this.defaultOptions = this.getStyleValues()), null == this.defaultOptions ? (u.error("Cannot find oj-list-view option defaults, which might be caused by missing JET css file"), {}) : this.defaultOptions
        },
        getAnimationEffect: function(t) {
            var e = this._getOptionDefaults().animation;
            return null == e ? null : e[t]
        },
        isExpandable: function() {
            return "none" !== this.GetOption("drillMode")
        },
        _isExpandAll: function(t) {
            var e = this.GetOption("expanded");
            if ("auto" === e) {
                if (!this.isExpandable()) return !0
            } else if ("all" === e) return !0;
            return !!e.isAddAll && (!this.isExpandable() && e instanceof I || e.isAddAll() && e.has(t))
        },
        expandKey: function(t, e, s, n, l) {
            var o = this.FindElementByKey(t);
            null != o && this.ExpandItem(i(o), null, l, t, e, n, s)
        },
        _expand: function(t) {
            var e = this.FindItem(t.target);
            null != e && e.length > 0 && (this.SetCurrentItem(e, t), this.ExpandItem(e, t, !0, null, !0, !0, !0))
        },
        ExpandItem: function(t, e, i, s, n, l, o) {
            if (this.GetState(t) === this.STATE_COLLAPSED && (null == s && (s = this.GetKey(t[0])), !i || !this._isDisclosing(s))) {
                var r = {
                    item: t,
                    key: s
                };
                if (o)
                    if (!this.Trigger("beforeExpand", e, r) && n) return;
                if (this.signalTaskStart("Expand item: " + s), i && this._setDisclosing(s, !0), this.m_contentHandler.Expand(t, function(t) {
                        this._expandSuccess(t, i, e, r, l)
                    }.bind(this)), this.m_items = null, null != e && e.stopPropagation(), !this.ojContext._IsCustomElement() && null != this._collapsedKeys) {
                    var a = this._collapsedKeys.indexOf(s); - 1 !== a && this._collapsedKeys.splice(a, 1)
                }
                this.signalTaskEnd()
            }
        },
        _expandSuccess: function(t, e, s, n, l) {
            var o = this;
            this.signalTaskStart("Handle results from successful expand"), t.key = n.key;
            var r = this.AnimateExpand(i(t), e, s),
                a = t.parentNode;
            a = i(a), this.SetState(a, this.STATE_EXPANDED);
            var h = this.getCollapseIconStyleClass(),
                c = this.getExpandIconStyleClass(),
                u = this.getExpandingIconStyleClass(),
                d = this.getGroupItemStyleClass();
            a.children("." + d).find("." + h + ", ." + u).removeClass(h).removeClass(u).addClass(c), l && r.then(function() {
                if (o.ojContext._IsCustomElement()) {
                    var e = o.GetOption("expanded");
                    if (o._isKeySet(e) && !e.has(t.key)) {
                        var i = e.add([t.key]);
                        o.SetOption("expanded", i, {
                            _context: {
                                originalEvent: s,
                                internalSet: !0
                            },
                            changed: !0
                        })
                    }
                }
                o.Trigger("expand", s, n)
            }), r.then(function() {
                o.m_clientHeight = null, o.m_scrollHeight = null, o.signalTaskEnd()
            })
        },
        _adjustAncestorsMaxHeight: function(t, e) {
            t.parentsUntil("ul.oj-component-initnode", "ul." + this.getGroupStyleClass()).each(function() {
                var t = parseInt(i(this).css("maxHeight"), 10);
                t > 0 && i(this).css("maxHeight", t + e + "px")
            })
        },
        AnimateExpand: function(t, e, s) {
            var n, o = 0,
                r = this,
                a = new Promise(function(t) {
                    n = t
                });
            if (e) {
                var h = t.get(0);
                h.setAttribute("data-oj-context", ""), l.getContext(h).getBusyContext().whenReady().then(function() {
                    r.isAvailable() && (h.removeAttribute("data-oj-context"), r.signalTaskStart("Animate expand of group item"), t.css("maxHeight", "100%"), t.children().each(function() {
                        o += i(this).outerHeight(!0)
                    }), r._isNonWindowTouch() && r._adjustAncestorsMaxHeight(t, o), t.css("maxHeight", o + "px"), r.signalTaskStart("Kick off expand animation"), r.StartAnimation(h, "expand").then(function() {
                        r._handleExpandTransitionEnd(t, n)
                    }), r.signalTaskEnd())
                })
            } else t.css("maxHeight", ""), this.AnimateExpandComplete(t), n(null);
            return a
        },
        _handleExpandTransitionEnd: function(t, e) {
            this._isNonWindowTouch() || t.css("maxHeight", ""), this.AnimateExpandComplete(t), e(null), this.signalTaskEnd()
        },
        AnimateExpandComplete: function(t) {
            t.removeClass(this.getGroupCollapseStyleClass()).addClass(this.getGroupExpandStyleClass()), this._setDisclosing(t[0].key, !1)
        },
        collapseKey: function(t, e, s, n) {
            var l = this.FindElementByKey(t);
            null != l && this.CollapseItem(i(l), null, n, t, e, s)
        },
        _collapse: function(t) {
            var e = this.FindItem(t.target);
            null != e && e.length > 0 && (this.SetCurrentItem(e, t), this.CollapseItem(e, t, !0, null, !0, !0))
        },
        CollapseItem: function(t, e, i, s, n, l) {
            var o = this;
            if (this.GetState(t) === this.STATE_EXPANDED && (null == s && (s = this.GetKey(t[0])), !i || !this._isDisclosing(s))) {
                var r = {
                    item: t,
                    key: s
                };
                if (!!this.Trigger("beforeCollapse", e, r) || !n) {
                    this.signalTaskStart("Collapse item: " + s), i && this._setDisclosing(s, !0);
                    var a = this.AnimateCollapse(t, s, i, e);
                    this.SetState(t, this.STATE_COLLAPSED);
                    var h = this.getCollapseIconStyleClass(),
                        c = this.getExpandIconStyleClass();
                    t.find("." + c).first().removeClass(c).addClass(h), this.m_items = null, null != e && e.stopPropagation(), l && a.then(function() {
                        if (null != e && o.ojContext._IsCustomElement()) {
                            var t = o.GetOption("expanded");
                            if (o._isKeySet(t)) {
                                var i = t.delete([s]);
                                o.SetOption("expanded", i, {
                                    _context: {
                                        originalEvent: e,
                                        internalSet: !0
                                    },
                                    changed: !0
                                })
                            }
                        }
                        o.Trigger("collapse", e, r)
                    }), this.ojContext._IsCustomElement() || (null == this._collapsedKeys && (this._collapsedKeys = []), -1 === this._collapsedKeys.indexOf(s) && this._collapsedKeys.push(s)), a.then(function() {
                        o.m_clientHeight = null, o.m_scrollHeight = null, o.signalTaskEnd()
                    })
                }
            }
        },
        AnimateCollapse: function(t, e, s, n) {
            var l, o = 0,
                r = this,
                a = new Promise(function(t) {
                    l = t
                }),
                h = t.children("ul").first();
            if (h[0].key = e, s) {
                this.signalTaskStart("Animate collapse"), h.children().each(function() {
                    o += i(this).outerHeight()
                }), h.css("maxHeight", o + "px");
                var c = this.getAnimationEffect("collapse");
                c.persist = "all", this.signalTaskStart("Kick off collapse animation");
                var u = h.get(0);
                this.StartAnimation(u, "collapse", c).then(function() {
                    r._handleCollapseTransitionEnd(h, l)
                }), this.signalTaskEnd()
            } else h.css("maxHeight", "0px"), this.AnimateCollapseComplete(h), l(null);
            return a
        },
        _handleCollapseTransitionEnd: function(t, e) {
            this.AnimateCollapseComplete(t), e(null), this.signalTaskEnd()
        },
        AnimateCollapseComplete: function(t) {
            t.removeClass(this.getGroupExpandStyleClass()).addClass(this.getGroupCollapseStyleClass()), null != this.m_contentHandler && this.m_contentHandler.Collapse(t), this._setDisclosing(t[0].key, !1)
        },
        getExpanded: function() {
            var t = [],
                e = this;
            return this._getItemsCache().each(function() {
                var s = i(this);
                e.GetState(s) === e.STATE_EXPANDED && t.push(e.GetKey(s[0]))
            }), t
        },
        getWidgetConstructor: function() {
            return a.__GetWidgetConstructor(this.element)
        },
        GetContainerStyleClass: function() {
            return this._isNonWindowTouch() ? "oj-listview oj-listview-container-touch" : "oj-listview oj-listview-container"
        },
        GetStyleClass: function() {
            return "oj-listview-element"
        },
        getItemStyleClass: function() {
            return this.isCardDisplayMode() ? "oj-listview-card" : "oj-listview-item"
        },
        getItemLayoutStyleClass: function() {
            return this.isCardLayout() ? null : "oj-listview-item-layout"
        },
        getFocusedElementStyleClass: function() {
            return "oj-listview-focused-element"
        },
        getItemElementStyleClass: function() {
            return "oj-listview-item-element"
        },
        getGroupItemStyleClass: function(t) {
            return t && this._isPinGroupHeader() && this._isPositionStickySupported() ? "oj-listview-group-item oj-sticky" : "oj-listview-group-item"
        },
        getGroupStyleClass: function() {
            return this.isCardDisplayMode() ? "oj-listview-card-group" : "oj-listview-group"
        },
        getGroupExpandStyleClass: function() {
            return ""
        },
        getGroupCollapseStyleClass: function() {
            return this.getGroupExpandStyleClass()
        },
        getCollapseIconStyleClass: function() {
            return "oj-listview-collapse-icon"
        },
        getExpandIconStyleClass: function() {
            return "oj-listview-expand-icon"
        },
        getExpandingIconStyleClass: function() {
            return "oj-listview-expanding-icon"
        },
        getEmptyTextStyleClass: function() {
            return "oj-listview-no-data-message"
        },
        getEmptyTextMarkerClass: function() {
            return "oj-listview-empty-text"
        },
        getDepthStyleClass: function(t) {
            return ""
        },
        getStyleValues: function() {
            const t = {};
            return Object.entries(b._CSS_Vars).forEach(([e, i]) => {
                t[e] = "animation" === e || "gridlines" === e ? b.getComplexCSSVariable(i) : r.getCachedCSSVarValues([i])[0]
            }), t
        },
        getLoadingStatusIconStyleClass: function() {
            return "oj-listview-loading-icon"
        },
        getStatusMessageStyleClass: function() {
            return "oj-listview-status-message"
        },
        getStatusStyleClass: function() {
            return "oj-listview-status"
        },
        _isPositionStickySupported: function() {
            var t = e.AgentUtils.getAgentInfo().browser;
            return t !== e.AgentUtils.BROWSER.IE && t !== e.AgentUtils.BROWSER.EDGE
        },
        _preventMouseWheelOverscroll: function(t, e) {
            var i = e.originalEvent.deltaY;
            if (!isNaN(i) && void 0 !== this.m_contentHandler.hasMoreToFetch) {
                var s = t.scrollTop;
                if (i > 0) {
                    var n = this._getScrollHeight();
                    this.m_contentHandler.hasMoreToFetch() && s + this._getClientHeight() + Math.abs(i) >= n && (t.scrollTop = n, e.preventDefault())
                } else s > 0 && s + i <= 0 && (t.scrollTop = 0, e.preventDefault())
            }
        },
        _getScrollEventElement: function() {
            var t = this._getScroller();
            return t === document.body || t === document.documentElement ? window : t
        },
        _findClosestElementToTop: function(t, e, s) {
            var n, l = e ? this._getItemsCache() : i(this._getRootNodeForItems()).children("li." + this.getItemElementStyleClass());
            if (null == l || 0 === l.length) return null;
            var o = this.GetOption("scrollPosition");
            if (Math.abs(o.y - t) < this.MINIMUM_ITEM_HEIGHT && null != o.key && !isNaN(o.index))
                if (e) {
                    var r = this.FindElementByKey(o.key);
                    null != r && (n = l.index(r))
                } else n = o.index;
            isNaN(n) && (n = Math.floor(t / s)), n = Math.min(Math.max(n, 0), l.length - 1);
            var a, h = Math.max(t, 0),
                c = l[n],
                u = h - (a = 0 === n ? 0 : c.offsetTop),
                d = {
                    index: n,
                    elem: c,
                    offsetTop: a,
                    offset: u
                };
            if (Math.abs(u) < 1) return d;
            var m = u > 0;
            m ? n += 1 : n -= 1;
            for (var p = !1; !p && n >= 0 && n < l.length;) {
                if (a = (c = l[n]).offsetTop, p = (u = Math.abs(h - a)) < 1 || (m ? h <= a : h >= a)) {
                    (u < 1 || !m) && (d = {
                        index: n,
                        elem: c,
                        offsetTop: a,
                        offset: u
                    });
                    break
                }
                m && d.offsetTop === a || (d = {
                    index: n,
                    elem: c,
                    offsetTop: a,
                    offset: u
                }), m ? n += 1 : n -= 1
            }
            return p || (n = m ? l.length - 1 : 0, d.index = n, d.elem = l[n]), d
        },
        _getRootNodeForItems: function() {
            return this.isCardLayout() ? this.element.get(0).firstElementChild.firstElementChild : this.element.get(0)
        },
        _getItemHeight: function() {
            var t;
            null == this.m_itemHeight && (this.m_contentHandler.IsHierarchical() ? (t = this.element.children("li." + this.getItemElementStyleClass()).first()).length > 0 && (this.m_itemHeight = t.get(0).firstElementChild.offsetHeight) : (t = i(this._getRootNodeForItems()).children("li." + this.getItemElementStyleClass()).first()).length > 0 && (this.m_itemHeight = t.get(0).offsetHeight));
            return this.m_itemHeight
        },
        _getCurrentScrollPosition: function(t) {
            var e = {},
                s = this._getScroller();
            void 0 === t && (t = s.scrollTop), e.x = this._getScrollX(s), e.y = t;
            var n = this.m_contentHandler.IsHierarchical(),
                l = this._getItemHeight();
            if (!isNaN(l) && l > 0) {
                var o = this._findClosestElementToTop(t, n, l);
                if (null != o) {
                    var r = o.elem;
                    if (n) {
                        var a, h = r.parentNode;
                        h !== this.element.get(0) ? (this.m_closestParent = h.parentNode, e.parent = this.GetKey(this.m_closestParent), a = this.m_closestParent.firstElementChild) : a = o.elem.firstElementChild, e.key = this.GetKey(o.elem), e.index = i(h).children().index(r), a && a.classList.contains("oj-sticky") && (this.m_stuckHeader && this.m_stuckHeader !== a && this.m_stuckHeader.classList.remove("oj-stuck"), a.classList.add("oj-stuck"), this.m_stuckHeader = a)
                    } else e.index = o.index, e.key = this.GetKey(o.elem);
                    e.offsetY = o.offset, e.offsetX = e.x
                }
            }
            return e
        },
        _getOffsetTop: function(t) {
            var e = t.offsetTop;
            if (this.isCardLayout() && this.m_contentHandler.getMargin) {
                var i = this.m_contentHandler.getMargin();
                isNaN(i) || (e = Math.max(0, e - i))
            }
            var s = this.element.get(0).offsetTop;
            return isNaN(this.m_elementOffset) || this.m_elementOffset === s ? e : Math.max(0, e - s)
        },
        _getScrollTopByIndex: function(t, e) {
            var s;
            if (null != e) null != (s = this.FindElementByKey(e)) && (s = i(s).children("ul").first());
            else {
                if (0 === t) return 0;
                s = this.element.get(0), this.isCardLayout() && (s = s.firstElementChild.firstElementChild)
            }
            if (null != s) {
                var n = i(s).children("." + this.getItemElementStyleClass())[t];
                if (null != n) return this._getOffsetTop(n)
            }
            if (this.m_contentHandler.hasMoreToFetch && this.m_contentHandler.hasMoreToFetch()) return this._getScrollHeight()
        },
        _getScrollTopByKey: function(t) {
            var e = this.FindElementByKey(t);
            return null != e ? this._getOffsetTop(e) : this.m_contentHandler.hasMoreToFetch && this.m_contentHandler.hasMoreToFetch() ? this._getScrollHeight() : void 0
        },
        _getScrollCoordinates: function(t) {
            var e, i = t.x,
                s = t.offsetX;
            isNaN(i) || isNaN(s) || (i += s);
            var n = t.key;
            isNaN(e) && null != n && (e = this._getScrollTopByKey(n));
            var l = t.parent,
                o = t.index;
            isNaN(e) && !isNaN(o) && (e = this._getScrollTopByIndex(o, l));
            var r = t.offsetY;
            return isNaN(e) || isNaN(r) || (e += r), isNaN(e) && !isNaN(t.y) && (e = t.y), {
                x: i,
                y: e
            }
        },
        _isEmpty: function() {
            var t = this.element[0],
                e = t.querySelector("li." + this.getItemElementStyleClass()),
                i = t.querySelector("li.oj-listview-temp-item");
            return null == e && null == i
        },
        _handleScroll: function(t) {
            if (null != this.m_contentHandler && this.ShouldUseGridRole() && !this._isEmpty()) {
                var e = this._getScroller().scrollTop;
                this.ojContext._IsCustomElement() || this.SetOption("scrollTop", e, {
                    _context: {
                        originalEvent: t,
                        internalSet: !0
                    }
                }), this.ShouldUpdateScrollPosition() && this.SetOption("scrollPosition", this._getCurrentScrollPosition(e), {
                    _context: {
                        originalEvent: t,
                        internalSet: !0
                    }
                }), this._handlePinGroupHeader()
            }
        },
        isLoadMoreOnScroll: function() {
            var t = this.GetOption("scrollPolicy");
            if ("auto" === t) {
                var i = this.GetOption("data");
                if (null != i && (void 0 !== e.TableDataSource && i instanceof e.TableDataSource || void 0 !== e.TreeDataSource && i instanceof e.TreeDataSource)) return !1
            }
            return "loadAll" !== t
        },
        _unregisterScrollHandler: function() {
            var t = i(this._getScrollEventElement());
            return this._scrollListener && t[0].removeEventListener("scroll", this._scrollListener), this.ojContext._IsCustomElement() ? (t[0].removeEventListener("wheel", this._wheelListener, {
                passive: !1
            }), delete this._wheelListener) : this.ojContext._off(t, "wheel"), t
        },
        _registerScrollHandler: function() {
            var t = this,
                e = this._unregisterScrollHandler();
            this._scrollListener = function(e) {
                t._skipScrollUpdate || t.m_ticking || (window.requestAnimationFrame(function() {
                    t._handleScroll(e), t.m_ticking = !1
                }), t.m_ticking = !0), u.info("scroll listener: " + t._skipScrollUpdate), t._skipScrollUpdate && (u.info("clearing scrollPosBusyState"), t._clearScrollPosBusyState()), t._skipScrollUpdate = !1
            }, e[0].addEventListener("scroll", this._scrollListener), this.isLoadMoreOnScroll() && (this._wheelListener = function(e) {
                e.originalEvent || (e.originalEvent = e), t._preventMouseWheelOverscroll(t._getScroller(), e)
            }, this._scrollElem = e, this.ojContext._IsCustomElement() ? this._scrollElem[0].addEventListener("wheel", this._wheelListener, {
                passive: !1
            }) : this.ojContext._on(this._scrollElem, {
                wheel: this._wheelListener
            }))
        },
        mergeScrollListener: function() {
            this._scrollListener && this._getScrollEventElement().removeEventListener("scroll", this._scrollListener);
            return this._scrollListener
        },
        unmergeScrollListener: function() {
            if (this._scrollListener) {
                var t = this._getScrollEventElement();
                t.removeEventListener("scroll", this._scrollListener), t.addEventListener("scroll", this._scrollListener)
            }
        },
        _isPinGroupHeader: function() {
            return "static" !== this.GetOption("groupHeaderPosition") && this.m_contentHandler.IsHierarchical()
        },
        _getGroupItemsCache: function() {
            if (null == this.m_groupItems) {
                var t = "." + this.getGroupItemStyleClass() + ":visible";
                this.m_groupItems = this.element.find(t).filter(function() {
                    return !i(this).parent().hasClass("oj-collapsed") && i(this).next().children().length > 0
                })
            }
            return this.m_groupItems
        },
        _unpinGroupItem: function(t) {
            i(t).removeClass("oj-pinned"), t.style.top = "auto", t.style.width = "auto"
        },
        _getNextGroupItem: function(t) {
            var e = this._getGroupItemsCache(),
                i = e.index(t);
            return i > -1 && i < e.length - 1 ? e[i + 1] : null
        },
        _pinGroupItem: function(t, e) {
            var s = t.offsetWidth,
                n = t.offsetHeight,
                l = this._getNextGroupItem(t);
            null != l && l.offsetTop <= e + n + 5 && (e -= n), i(t).addClass("oj-pinned"), t.style.top = e + "px", t.style.width = s + "px"
        },
        _handlePinGroupHeader: function() {
            var t;
            if (this._isPinGroupHeader() && !this._isPositionStickySupported()) {
                var e = this._getScroller().scrollTop;
                if (null != this.m_groupItemToPin && 0 === e) return this._unpinGroupItem(this.m_groupItemToPin), void(this.m_groupItemToPin = null);
                var i = this._getGroupItemsCache(),
                    s = 0;
                null != this.m_groupItemToPin && (s = this.m_groupItemToPin.offsetHeight);
                for (var n = 0; n < i.length; n++) {
                    var l = i[n];
                    if (this.m_groupItemToPin !== l) {
                        var o = i[n].offsetTop,
                            r = o + l.parentNode.offsetHeight;
                        if (o < e && r > e + s) {
                            t = l;
                            break
                        }
                    }
                }
                if (null != t && t !== this.m_groupItemToPin) null != this.m_groupItemToPin && this._unpinGroupItem(this.m_groupItemToPin), this._pinGroupItem(t, e), this.m_groupItemToPin = t;
                else if (null != this.m_groupItemToPin) {
                    var a = this._getNextGroupItem(this.m_groupItemToPin);
                    if (null != a && a.offsetTop <= e + s) return void(this.m_groupItemToPin.style.top = a.offsetTop - s + "px");
                    this.m_groupItemToPin.style.top = e + "px"
                }
            }
        },
        _getScroller: function() {
            if (null != this.m_scroller) return this.m_scroller;
            var t, e = this.GetOption("scrollPolicyOptions");
            return null != e && null != (t = e.scroller) && ("string" == typeof t && null == (t = document.querySelector(t)) && u.error("the css selector string specified in scroller attribute does not resolve to any element"), null == t || t.contains(this.getListContainer()[0]) || (u.error("the specified scroller must be an ancestor of the component"), t = null)), this.m_scroller = null != t ? t : this.getListContainer().get(0), this.m_scroller
        },
        _scrollToGroupHeader: function(t) {
            var e = this._getScroller(),
                i = e.scrollTop;
            null != this.m_groupItemToPin && (this._unpinGroupItem(this.m_groupItemToPin), this.m_groupItemToPin = null);
            var s = t.offsetTop;
            this._isPinGroupHeader() && this._isPositionStickySupported() && s < i && (s = Math.max(0, s - t.parentNode.offsetHeight + t.offsetHeight)), e.scrollTop = s, i === e.scrollTop && this._handlePinGroupHeader(), this._setFirstFocusableItemInGroupCurrent(t)
        },
        _setFirstFocusableItemInGroupCurrent: function(t) {
            var e = this;
            i(t).next().children().each(function() {
                var t = i(this);
                if (!e.SkipFocus(t)) return e.SetOption("currentItem", this.key), !1
            })
        }
    });
    b._CSS_Vars = {
        animation: {
            add: "--oj-private-list-view-global-add-animation-default",
            remove: "--oj-private-list-view-global-remove-animation-default",
            update: "--oj-private-list-view-global-update-animation-default",
            expand: "--oj-private-list-view-global-expand-animation-default",
            collapse: "--oj-private-list-view-global-collapse-animation-default",
            pointerUp: "--oj-private-list-view-global-pointerUp-animation-default",
            cardEntrance: "--oj-private-list-view-global-card-entrance-animation-default",
            cardExit: "--oj-private-list-view-global-card-exit-animation-default"
        },
        gridlines: {
            item: "--oj-private-list-view-global-gridlines-item-default",
            top: "--oj-private-list-view-global-gridlines-top-default",
            bottom: "--oj-private-list-view-global-gridlines-bottom-default"
        },
        loadIndicator: "--oj-private-list-view-global-load-indicator-default",
        showIndicatorDelay: "--oj-private-core-global-loading-indicator-delay-duration",
        cardAnimationDelay: "--oj-private-animation-global-card-entrance-delay-increment"
    }, b.getComplexCSSVariable = function(t) {
        const e = {},
            i = Object.keys(t),
            s = i.map(e => t[e]),
            n = r.getCachedCSSVarValues(s);
        return i.forEach((t, i) => {
            const s = /^(\[|{)/.test(n[i]) ? JSON.parse(n[i]) : n[i];
            e[t] = s
        }), e
    }, e._registerLegacyNamespaceProp("_ojListView", b), e.__registerWidget("oj.ojListView", i.oj.baseComponent, {
        widgetEventPrefix: "oj",
        options: {
            as: "",
            currentItem: null,
            data: null,
            display: "list",
            dnd: {
                drag: null,
                drop: null,
                reorder: {
                    items: "disabled"
                }
            },
            drillMode: "collapsible",
            expanded: new I,
            firstSelectedItem: {
                key: null,
                data: null
            },
            gridlines: {
                item: "visible"
            },
            groupHeaderPosition: "sticky",
            item: {
                focusable: !0,
                renderer: null,
                selectable: !0
            },
            scrollToKey: "auto",
            scrollPolicy: "auto",
            scrollPolicyOptions: {
                fetchSize: 25,
                maxCount: 500
            },
            scrollPosition: {
                x: 0,
                y: 0
            },
            scrollTop: 0,
            selected: new d.KeySetImpl,
            selection: [],
            selectionMode: "none",
            selectionRequired: !1,
            animateStart: null,
            animateEnd: null,
            beforeCurrentItem: null,
            beforeExpand: null,
            beforeCollapse: null,
            collapse: null,
            copy: null,
            cut: null,
            expand: null,
            itemAction: null,
            paste: null,
            ready: null,
            reorder: null
        },
        _ComponentCreate: function() {
            this._super(), this._setup()
        },
        _setup: function() {
            var t = {};
            (t.element = this.element, t.OuterWrapper = this.OuterWrapper, t.ojContext = this, this._IsCustomElement()) || this.options.expanded instanceof I && (this.options.expanded = "auto");
            t = i.extend(this.options, t), this.listview = new b, this.listview.init(t), h.disableDefaultBrowserStyling(this.element[0])
        },
        _AfterCreate: function() {
            this._super();
            var t = this;
            this.listview._FixRendererContext = function(e) {
                return t._FixRendererContext(e)
            }, this.listview._WrapCustomElementRenderer = function(e) {
                return t._WrapCustomElementRenderer(e)
            }, this.listview.afterCreate()
        },
        _SetupResources: function() {
            this._super(), this.listview.setupResources()
        },
        _ReleaseResources: function() {
            this._super(), this.listview.releaseResources()
        },
        GetFocusElement: function() {
            return null != this.listview ? this.listview.GetFocusElement() : this._super()
        },
        _destroy: function() {
            this.listview.destroy(), this._super()
        },
        _NotifyContextMenuGesture: function(t, e, i) {
            this.listview.notifyContextMenuGesture(t, e, i)
        },
        _setOptions: function(t, e) {
            if (this.listview.isAvailable()) {
                var i = this.listview.setOptions(t, e);
                this._super(t, e), i ? (t.data && this.listview.adjustScrollPositionValueOnFetch(), this.listview.refresh()) : (t.selectionRequired || t.selection || t.selectionMode) && this.listview.enforceSelectionRequired()
            } else this._super(t, e)
        },
        _setOption: function(t, e, s) {
            var n, l = !0;
            if ("selectionMode" === t ? l = "none" === e || "single" === e || "multiple" === e : "drillMode" === t ? l = "collapsible" === e || "none" === e : "scrollPolicy" === t ? l = "auto" === e || "loadMoreOnScroll" === e || "loadAll" === e : "groupHeaderPosition" === t ? l = "static" === e || "sticky" === e : "firstSelectedItem" === t && (l = !1), !l) throw new Error("Invalid value: " + e + " for key: " + t);
            this.listview.isAvailable() && ("selection" === t ? (n = this.listview.getItems(e), s = {
                _context: {
                    extraData: {
                        items: this._IsCustomElement() ? n : i(n)
                    }
                }
            }) : "currentItem" === t && (n = this.listview.getItems([e])[0], s = {
                _context: {
                    extraData: {
                        items: this._IsCustomElement() ? n : i(n)
                    }
                }
            })), this._super(t, e, s)
        },
        _NotifyAttached: function() {
            this.listview.notifyAttached()
        },
        _NotifyDetached: function() {
            this.listview.notifyDetached()
        },
        _NotifyShown: function() {
            this.listview.notifyShown()
        },
        _VerifyConnectedForSetup: function() {
            return !0
        },
        widget: function() {
            return this.listview.GetRootElement()
        },
        refresh: function() {
            this._super(), this.listview.refresh()
        },
        whenReady: function() {
            return this.listview.whenReady()
        },
        getNodeBySubId: function(t) {
            return this.listview.getNodeBySubId(t)
        },
        getSubIdByNode: function(t) {
            return this.listview.getSubIdByNode(t)
        },
        getContextByNode: function(t) {
            return this.listview.getContextByNode(t)
        },
        getDataForVisibleItem: function(t) {
            return this.listview.getDataForVisibleItem(t)
        },
        expand: function(t, e) {
            this.listview.expandKey(t, e, !0, !0)
        },
        collapse: function(t, e) {
            this.listview.collapseKey(t, e, !0)
        },
        getExpanded: function() {
            return this.listview.getExpanded()
        },
        getIndexerModel: function() {
            return null == this.indexerModel && v.ListViewIndexerModel && (this.indexerModel = new v.ListViewIndexerModel(this.listview)), this.indexerModel
        },
        scrollToItem: function(t) {
            this.listview.scrollToItem(t)
        },
        _CompareOptionValues: function(t, i, s) {
            switch (t) {
                case "currentItem":
                case "scrollPolicyOptions":
                    return e.Object.compareValues(i, s);
                case "selection":
                    return i && void 0 === i.inverted && (i.inverted = !1), s && void 0 === s.inverted && (s.inverted = !1), (!i || !s || i.inverted === s.inverted) && e.Object.compareValues(i, s);
                default:
                    return this._super(t, i, s)
            }
        }
    }), a.setDefaultOptions({
        ojListView: {
            gridlines: a.createDynamicPropertyGetter(function() {
                const t = b._CSS_Vars.gridlines,
                    e = {
                        gridlines: b.getComplexCSSVariable(t)
                    };
                return null == e ? (u.error("Cannot find oj-list-view option defaults, which might be caused by missing JET css file"), e = {
                    gridlines: {}
                }) : null == e.gridlines && (u.error("Cannot find gridlines default option, which might be caused by a mismatch between JET js and css files"), e = {
                    gridlines: {}
                }), {
                    item: e.gridlines.item
                }
            })
        }
    })
});
//# sourceMappingURL=ojlistview.js.map