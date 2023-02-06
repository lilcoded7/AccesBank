/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "jquery", "ojs/ojcontext", "ojs/ojconfig", "ojs/ojanimation", "ojs/ojlogger", "ojs/ojdatacollection-common", "ojs/ojdomscroller", "ojs/ojset", "ojs/ojmap"], function(t, e, i, n, o, r, s, l, a, d, h) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d, h = h && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
    var m = function(t, e, i) {
        this.m_root = e, this.m_widget = t, this.m_fetching = !1, this.setDataProvider(i), this.Init()
    };
    e.Object.createSubclass(m, e.Object, "DataProviderContentHandler"), m.prototype.Init = function() {
        m.superclass.Init.call(this)
    }, m.prototype.notifyShown = function() {}, m.prototype.notifyAttached = function() {}, m.prototype.cleanItems = function(t, e) {
        if (void 0 === t && (t = this.getTemplateEngine()), void 0 === e && (e = this.m_root), t && e)
            for (var i = e.childNodes, n = 0; n < i.length; n++) t.clean(i[n])
    }, m.prototype.Destroy = function(t) {
        null != this.m_superRoot && (this.m_root = this.m_superRoot), this.cleanItems(), t && i(this.m_root).empty(), this.m_widget = null, this.m_root = null, this.m_superRoot = null
    }, m.prototype.IsReady = function() {
        return !this.m_fetching
    }, m.prototype.setRootAriaProperties = function() {
        this.shouldUseGridRole() ? this.m_root.setAttribute("role", "grid") : this.IsHierarchical() ? this.m_root.setAttribute("role", "tree") : this.m_root.setAttribute("role", "listbox")
    }, m.prototype.RenderContent = function() {
        this.signalTaskStart("rendering content"), this.setRootAriaProperties(), this.fetchRows(!1), this.signalTaskEnd()
    }, m.prototype.GetKey = function(t) {
        return t.key
    }, m.prototype.FindElementByKey = function(t) {
        for (var i = this.m_root.querySelectorAll("." + this.m_widget.getItemElementStyleClass() + ", .oj-listview-temp-item.oj-listview-card-animated"), n = 0; n < i.length; n++) {
            var o = i[n];
            if ((t == this.GetKey(o) || e.Object.compareValues(t, this.GetKey(o))) && !o.classList.contains("oj-listview-item-remove") && !o.classList.contains("oj-drop")) return o
        }
        return null
    }, m.prototype.getDataProvider = function() {
        return this.m_dataProvider
    }, m.prototype.setDataProvider = function(t) {
        this._removeDataSourceEventListeners(), null != t && (this.m_handleModelMutateEventListener = this.handleModelMutateEvent.bind(this), this.m_handleModelRefreshEventListener = this.handleModelRefreshEvent.bind(this), t.addEventListener("mutate", this.m_handleModelMutateEventListener), t.addEventListener("refresh", this.m_handleModelRefreshEventListener)), this.m_dataProvider = t
    }, m.prototype._removeDataSourceEventListeners = function() {
        var t = this.getDataProvider();
        null != t && (t.removeEventListener("mutate", this.m_handleModelMutateEventListener), t.removeEventListener("refresh", this.m_handleModelRefreshEventListener), e.TableDataSourceAdapter && t instanceof e.TableDataSourceAdapter && t.destroy())
    }, m.prototype.loadTemplateEngine = function() {
        var t = this;
        return null != this.m_widget.getItemTemplate() && null == this.m_widget._getItemRenderer() ? new Promise(function(e) {
            o.__getTemplateEngine().then(function(i) {
                t.m_engine = i, e(i)
            }, function(t) {
                throw new Error("Error loading template engine: " + t)
            })
        }) : Promise.resolve(null)
    }, m.prototype.getTemplateEngine = function() {
        return this.m_engine
    }, m.prototype.fetchRows = function(t) {
        this.m_widget.showStatusText()
    }, m.prototype.GetChildElementTagName = function() {
        return "LI"
    }, m.prototype.GetReferenceNode = function(t, e) {
        if (-1 === e) return null;
        var n = i(t).children("." + this.m_widget.getItemElementStyleClass() + ", ." + this.m_widget.getEmptyTextStyleClass() + ", .oj-listview-temp-item");
        return e === n.length ? null : n[e]
    }, m.prototype.addItem = function(t, e, n, o, r, s, l) {
        var a = document.createElement(this.GetChildElementTagName());
        i(a).uniqueId();
        var d = this.GetReferenceNode(t, e);
        this.m_widget.BeforeInsertItem && this.m_widget.BeforeInsertItem(), t.insertBefore(a, d);
        var h = i(t).children().index(a);
        return this._addOrReplaceItem(a, h, t, e, n, o, r, s, !1, l)
    }, m.prototype.replaceItem = function(t, e, n, o, r, s, l) {
        this.signalTaskStart("replace item");
        var a = t.parentNode,
            d = i(a).children().index(t),
            h = document.createElement(this.GetChildElementTagName());
        return r && r.clean(t), i(t).replaceWith(h), this._addOrReplaceItem(h, d, a, e, n, o, r, s, l)
    }, m.prototype._addOrReplaceItem = function(t, e, n, o, r, s, l, a, d, h, m) {
        null == a && (a = this.afterRenderItem.bind(this));
        var c, u = this.createContext(e, r, s, t, h),
            p = this.m_widget._getItemRenderer(),
            g = this.m_widget.getItemTemplate(),
            _ = !1;
        if (null != p) {
            var f = p.call(this, u);
            null != f && (null === f.parentNode || f.parentNode instanceof DocumentFragment ? t.appendChild(f) : null != f.parentNode || f.toString && ((c = document.createElement("span")).appendChild(document.createTextNode(f.toString())), t.appendChild(c)))
        } else if (null != g && null != l) {
            var v = this.m_widget.GetRootElement()[0],
                y = this.GetBindingContext(u),
                w = this.m_widget.getAs ? this.m_widget.getAs() : null,
                S = l.execute(v, g, y, w);
            if (m) _ = m(S);
            else
                for (var E = this.GetChildElementTagName(), I = 0; I < S.length; I++) {
                    if (S[I].tagName === E) {
                        n.replaceChild(S[I], t), _ = !0;
                        break
                    }
                    t.appendChild(S[I])
                }
        } else(c = document.createElement("span")).appendChild(document.createTextNode(null == r ? "" : r.toString())), t.appendChild(c);
        var k = n.children ? n.children[e] : this._getItemFromDocumentFragment(n, e);
        return u.parentElement = k, i.data(k, "data", r), i.data(k, "metadata", h), a(k, u, _, d)
    }, m.prototype._getItemFromDocumentFragment = function(t, e) {
        for (var i = 0, n = t.childNodes, o = 0; o < n.length; o++) {
            var r = n[o];
            if (!r) break;
            if (1 === r.nodeType) {
                if (i === e) return r;
                i += 1
            }
        }
        return null
    }, m.prototype.GetBindingContext = function(t) {
        var e = {};
        return e.data = t.data, e.index = t.index, e.key = t.key, e.componentElement = t.componentElement, e.item = {
            data: t.data,
            metadata: t.metadata
        }, e
    }, m.prototype.afterRenderItem = function(t, e) {
        t.key = e.key;
        var n = i(t);
        n.uniqueId();
        var o, r = this.m_widget.getGroupItemStyleClass();
        if (o = t.firstElementChild && t.firstElementChild.classList.contains(r) ? this.m_widget.getSingleFocusableElement(i(t.firstElementChild)) : this.m_widget.getSingleFocusableElement(n), this.shouldUseGridRole())
            if (null == e.leaf || e.leaf)
                if (this.isCardLayout()) o.attr("role", "gridcell");
                else if (n.attr("role", "row"), o !== n) o.attr("role", "gridcell");
        else {
            if (0 === o.children().length) o.get(0).innerHTML = "<div role='gridcell' class='oj-listview-cell-element'></div>";
            else {
                var s = document.createElement("div");
                for (s.setAttribute("role", "gridcell"), s.className = "oj-listview-cell-element"; o[0].firstChild;) s.appendChild(o[0].firstChild);
                o[0].appendChild(s)
            }
        } else n.attr("role", "presentation");
        else o.attr("role", this.IsHierarchical() ? "treeitem" : "option"), o !== n && n.attr("role", "presentation");
        return o.addClass(this.m_widget.getFocusedElementStyleClass()), this.isFocusable(e) || n.addClass("oj-skipfocus"), n.addClass(this.m_widget.getItemElementStyleClass()), Promise.resolve(!0)
    }, m.prototype.getMetadata = function(t, e, i, n) {
        var o = i.context;
        return null == o && (o = {}), null == o.index && (o.index = t), null == o.key && (o.key = e), o
    }, m.prototype.handleModelMutateEvent = function(t) {
        null != this.m_root && this.m_widget.isAvailable() && (null != t.detail.remove && this.handleModelRemoveEvent(t), null != t.detail.add && this.handleModelAddEvent(t), null != t.detail.update && this.handleModelChangeEvent(t))
    }, m.prototype.handleModelRefreshEvent = function(t) {}, m.prototype._pushToEventQueue = function(t) {
        null == this.m_eventQueue && (this.m_eventQueue = []), this.m_eventQueue.push(t)
    }, m.prototype._processEventQueue = function() {
        var t;
        if (null != this.m_eventQueue && this.m_eventQueue.length > 0) {
            for (var e = 0; e < this.m_eventQueue.length; e++)
                if ("refresh" === (t = this.m_eventQueue[e].event).type && (null == t.detail || null == t.detail.keys)) return void this.handleModelRefreshEvent(t);
            "mutate" === (t = this.m_eventQueue.shift().event).type ? this.handleModelMutateEvent(t) : "refresh" === t.type && t.detail && t.detail.keys && this.handleModelRefreshEvent(t)
        }
    }, m.prototype._clearEventQueue = function() {
        null != this.m_eventQueue && (this.m_eventQueue.length = 0)
    }, m.prototype.addItemsForModelInsert = function(t, e, i, n, o) {}, m.prototype.getIndex = function(t, e) {
        if (null == t || 0 === t.length || e >= t.length) return -1;
        var n = t[e],
            o = this.FindElementByKey(n);
        return null != o ? i(o.parentNode).children().index(o) : -1
    }, m.prototype.handleModelAddEvent = function(t) {
        if (this.IsReady()) {
            this.signalTaskStart("handling model add event"), this.m_superRoot && 0 === this.m_root.childNodes.length && this.m_superRoot.appendChild(this.m_root.parentNode);
            var e, i, n = t.detail.add,
                o = n.data,
                r = [];
            n.keys.forEach(function(t) {
                r.push(t)
            });
            var s = !0;
            void 0 !== n.addBeforeKeys ? i = n.addBeforeKeys : void 0 !== n.afterKeys && (i = n.afterKeys, s = !1), i && (e = [], i.forEach(function(t) {
                e.push(t)
            }));
            var l = n.parentKeys,
                a = n.indexes,
                d = n.metadata;
            null != o && null != r && r.length > 0 && o.length > 0 && r.length === o.length && (null == a || a.length === o.length) && this.addItemsForModelInsert(o, a, r, l, s, e, d), this.signalTaskEnd()
        } else this._pushToEventQueue({
            type: t.type,
            event: t
        })
    }, m.prototype.afterRenderItemForInsertEvent = function(t, e, o) {
        this.signalTaskStart("after render item from model insert event"), t.setAttribute("data-oj-context", ""), this.afterRenderItem(t, e, o);
        var r = i(t),
            s = t.className;
        t._className = s, t.className = "oj-listview-temp-item oj-listview-item-add-remove-transition";
        var l = this.isCardLayout();
        l && (t.className = t.className + " oj-listview-card-animated " + this.m_widget.getItemStyleClass()), this.shouldUseGridRole() || r.children().wrapAll("<div></div>");
        var a = r.children().first();
        if (l || (a[0].className = s), a[0].key = t.key, this.shouldUseGridRole()) {
            if (!l) {
                var d = a[0].firstElementChild;
                d && d.classList.add("oj-listview-cell-element")
            }
        } else a.attr("role", t.getAttribute("role")), r[0].hasAttribute("aria-selected") && a.attr("aria-selected", t.getAttribute("aria-selected"));
        var h = this;
        return t.style.opacity = 0, new Promise(function(i) {
            n.getContext(t).getBusyContext().whenReady().then(function() {
                if (null != h.m_widget) {
                    h.signalTaskStart("kick off animation for insert item");
                    var n = t.className;
                    t.style.opacity = "", h.m_widget.StartAnimation(t, "add").then(function() {
                        t.removeAttribute("data-oj-context"), h._handleAddTransitionEnd(e, t, n), i(!0)
                    }), h.signalTaskEnd()
                } else i(!0)
            })
        })
    }, m.prototype._handleAddTransitionEnd = function(t, e, n) {
        if (null != this.m_widget && null != e.parentNode) {
            var o = n.split(" "),
                r = e.className.split(" "),
                s = e.classList.contains("oj-focus") && e.classList.contains("oj-focus-highlight"),
                l = e.classList.contains("oj-listview-card-animated");
            if (e.className = e._className, s && (e.classList.add("oj-focus"), e.classList.add("oj-focus-highlight")), l && e.classList.add("oj-listview-card-animated"), r.forEach(function(t) {
                    -1 === o.indexOf(t) && e.classList.add(t)
                }), this.shouldUseGridRole()) {
                if (!this.isCardLayout()) {
                    var a = e.firstElementChild;
                    if (a) {
                        e._className.split(" ").forEach(function(t) {
                            a.classList.remove(t)
                        }), a.classList.add("oj-listview-cell-element");
                        var d = a.firstElementChild;
                        d && d.classList.remove("oj-listview-cell-element")
                    }
                }
            } else i(e).children().children().unwrap();
            this.m_widget.itemInsertComplete(e, t), this.signalTaskEnd()
        } else this.signalTaskEnd()
    }, m.prototype.handleModelRemoveEvent = function(t) {
        var e = this,
            i = t.detail.remove.keys;
        if (null == i || 0 === i.size) return !1;
        if (!this.IsReady()) return this._pushToEventQueue({
            type: t.type,
            event: t
        }), !1;
        this.signalTaskStart("handling model remove event");
        var n = null != t.detail.add ? t.detail.add.keys : new Set,
            o = [],
            r = [];
        if (i.forEach(function(t) {
                var i = n.has(t);
                i || o.push(t);
                var l = e.FindElementByKey(t);
                null != l ? (e.signalTaskStart("handling model remove event for item: " + t), l.classList.add("oj-listview-item-remove"), l.parentNode.classList.contains("oj-listview-temp-item") && (l = l.parentNode), r.push(e.removeItem(l, i)), e.signalTaskEnd()) : s.log("handleModelRemoveEvent: cannot find item with key " + t)
            }), this.isSelectionEnabled()) {
            if (o.length > 0) {
                var l = this.m_widget.options.selected,
                    a = l.delete(o);
                if (l !== a) {
                    var d = [];
                    a.values && a.values().forEach(function(t) {
                        d.push(e.FindElementByKey(t))
                    }), this.m_widget._setSelectionOption(a, null, d)
                }
            }
            n.size > 0 && this.m_widget.resetInitialSelectionStateValidated()
        }
        return this.m_widget.ClearCache(), this.handleRemoveItemsPromises(r), this.signalTaskEnd(), !0
    }, m.prototype.handleRemoveItemsPromises = function(t) {}, m.prototype.removeItem = function(t, e) {
        var n = this;
        this.signalTaskStart("removing an item");
        var o = document.activeElement,
            r = t.contains(o),
            s = i(t).get(0),
            l = s.className;
        i(s).children().wrapAll("<div class='" + l + "'></div>"), s.className = "oj-listview-item-add-remove-transition oj-listview-item-remove", s.children[0].key = t.key, this.signalTaskStart("kick off animation to remove an item"), this.m_widget.disableResizeListener();
        var a = this.m_widget.StartAnimation(s, "remove");
        return a.then(function() {
            n.handleRemoveTransitionEnd(t, r, e), n.m_widget && n.m_widget.enableResizeListener()
        }, function() {
            n.m_widget && n.m_widget.enableResizeListener()
        }), this.signalTaskEnd(), a
    }, m.prototype.handleRemoveTransitionEnd = function(t, e, n) {
        if (null != this.m_widget) {
            var o = i(t),
                r = o.parent();
            if (0 !== r.length) {
                var s = this.m_widget.itemRemoveComplete(o.get(0), e, n),
                    l = this.getTemplateEngine();
                l && l.clean(o.get(0)), o.remove(), 0 === r.get(0).childElementCount && this.m_widget.renderComplete(!0), this.isSelectionEnabled() && this.m_widget.enforceSelectionRequired(), s && e && !this.m_root.contains(document.activeElement) && this.m_root.focus(), this.signalTaskEnd()
            } else this.signalTaskEnd()
        } else this.signalTaskEnd()
    }, m.prototype.handleModelChangeEvent = function(t) {
        this.signalTaskStart("handling model update event");
        var e = t.detail.update,
            i = e.data,
            n = [];
        e.keys.forEach(function(t) {
            n.push(t)
        });
        for (var o, r = this.getTemplateEngine(), s = e.indexes, l = 0; l < n.length; l++) {
            this.m_widget.updateSelectedKeyData(n[l], i[l]);
            var a = this.FindElementByKey(n[l]);
            if (null != a) {
                void 0 === o && a.contains(document.activeElement) && (o = a), this.signalTaskStart("handling model update event for item: " + n[l]);
                var d = null == s ? -1 : s[l];
                this.replaceItem(a, d, i[l], this.getMetadata(d, n[l], i[l], a.parentNode), r, this.afterRenderItemForChangeEvent.bind(this), null != o), this.signalTaskEnd(), null != o && (o = null)
            }
        }
        this.m_widget.ClearCache(), this.signalTaskEnd()
    }, m.prototype.afterRenderItemForChangeEvent = function(t, e, i, n) {
        var o = this;
        this.signalTaskStart("after render item for model change event"), this.afterRenderItem(t, e, i), this.m_widget.StartAnimation(t, "update").then(function() {
            o._handleReplaceTransitionEnd(t, n)
        }), this.signalTaskEnd()
    }, m.prototype._handleReplaceTransitionEnd = function(t, e) {
        null != this.m_widget ? (i(t).removeClass("oj-listview-item-add-remove-transition"), e && this.m_widget.restoreCurrentItemFocus(t), this.signalTaskEnd()) : this.signalTaskEnd()
    }, m.prototype.createContext = function(t, e, i, n, o) {
        var r = {};
        r.parentElement = n, r.index = t, r.data = e, r.component = this.m_widget.getWidgetConstructor(), r.datasource = this.getDataProvider(), (r = this.m_widget._FixRendererContext(r)).metadata = o;
        for (var s = Object.keys(i), l = 0; l < s.length; l++) {
            var a = s[l];
            r[a] = i[a]
        }
        return r
    }, m.prototype.isSelectionEnabled = function() {
        return this.m_widget._isSelectionEnabled()
    }, m.prototype.isFocusable = function(t) {
        return this.m_widget.getItemFocusable(t)
    }, m.prototype.isSelectable = function(t) {
        return this.m_widget.getItemSelectable(t)
    }, m.prototype.isCardLayout = function() {
        return this.m_widget.isCardLayout()
    }, m.prototype.shouldUseGridRole = function() {
        return this.m_widget.ShouldUseGridRole()
    }, m.prototype.isAsyncRendering = function() {
        return !1
    }, m.prototype.signalTaskStart = function(t) {
        this.m_widget && this.m_widget.signalTaskStart("DataSource ContentHandler " + t)
    }, m.prototype.signalTaskEnd = function() {
        this.m_widget && this.m_widget.signalTaskEnd()
    }, m.prototype.isSkeletonSupport = function() {
        return this.m_widget.isSkeletonSupport()
    }, m.prototype.getRootElementHeight = function() {
        return isNaN(this.m_height) && (this.m_height = this.m_widget.GetRootElement()[0].offsetHeight), this.m_height
    }, m.prototype.getDefaultSkeletonDimension = function() {
        if (null == this.m_defaultSkeletonDim) {
            var t = this.m_widget.GetRootElement()[0],
                e = this.createSkeleton(!0);
            e.style.display = "block", e.style.visibility = "hidden", t.appendChild(e);
            var i = {
                width: e.offsetWidth,
                height: e.offsetHeight
            };
            return t.removeChild(e), i.height > 0 && i.width > 0 && (this.m_defaultSkeletonDim = i), i
        }
        return this.m_defaultSkeletonDim
    }, m.prototype.createSkeleton = function(t) {
        return this.createSkeletonItem()
    }, m.prototype.createSkeletonItem = function() {
        var t = document.createElement("li");
        t.setAttribute("role", "presentation");
        var e = document.createElement("div");
        return t.className = "oj-listview-item oj-listview-item-layout", this.m_widget._isGridlinesVisible() || t.classList.add("gridline-hidden"), e.className = "oj-listview-cell-element oj-listview-skeleton oj-listview-skeleton-line-height oj-animation-skeleton", t.appendChild(e), t
    }, m.prototype.animateShowContent = function(t, e, o) {
        return new Promise(function(s, l) {
            var a = null != this.m_superRoot ? this.m_superRoot : this.m_root,
                d = a.querySelector(".oj-listview-skeleton-container");
            if (null != d) {
                t.appendChild(e);
                var h = Array.from(t.children),
                    m = [];
                h.forEach(function(t) {
                    if (t !== d.parentNode) {
                        t.style.opacity = 0, t.setAttribute("data-oj-context", "");
                        var e = n.getContext(t).getBusyContext().whenReady();
                        m.push(e)
                    }
                }), Promise.all(m).then(function() {
                    null != this.m_widget ? r.fadeOut(d, {
                        duration: "100ms"
                    }).then(function() {
                        if (null != this.m_widget) {
                            var e = d.parentNode;
                            e.classList.contains("oj-listview-initial-skeletons") ? a.removeChild(e) : d.querySelectorAll(".oj-listview-skeleton").forEach(function(t) {
                                var e = t.parentNode;
                                e && d === e.parentNode && d.removeChild(e)
                            }), t.style.opacity = 0, h.forEach(function(t) {
                                t !== d.parentNode && (t.style.opacity = 1, t.removeAttribute("data-oj-context"))
                            }), window.requestAnimationFrame(function() {
                                r.fadeIn(t, {
                                    duration: "150ms",
                                    persist: "all"
                                })
                            }), s(!1)
                        } else s(!1)
                    }.bind(this)) : s(!1)
                }.bind(this))
            } else o && i(t).empty(), t.appendChild(e), s(!1)
        }.bind(this))
    };
    var c = function(t, e, i) {
        c.superclass.constructor.call(this, t, e, i)
    };
    e.Object.createSubclass(c, m, "IteratingDataProviderContentHandler"), c.prototype.Init = function() {
        c.superclass.Init.call(this), this.m_currentEvents = []
    }, c.prototype.IsHierarchical = function() {
        return !1
    }, c.prototype.IsReady = function() {
        return !this.m_fetching && null == this.m_idleCallback
    }, c.prototype._hasPendingInsertKeys = function() {
        return null != this.m_insertOutOfRangeKeys && this.m_insertOutOfRangeKeys.size > 0
    }, c.prototype._destroyDomScroller = function() {
        null != this.m_domScroller && (this.m_domScroller.destroy(), this.m_domScroller = null), this._removeLoadingIndicator(), this.m_widget && this.m_widget.unmergeScrollListener()
    }, c.prototype.Destroy = function(t) {
        c.superclass.Destroy.call(this, t), this._removeDataSourceEventListeners(), this._destroyDomScroller(), this._cancelIdleCallback(), this.m_loadingIndicator = null, this.m_viewportCheckPromise = null, this.m_checkViewportPromise = null
    }, c.prototype._cancelIdleCallback = function() {
        null != this.m_idleCallback && (l.isRequestIdleCallbackSupported() ? (window.cancelIdleCallback(this.m_idleCallback), window.cancelAnimationFrame(this.m_idleCallback)) : window.cancelAnimationFrame(this.m_idleCallback), this.m_idleCallback = null)
    }, c.prototype.shouldHandleResize = function() {
        return this._isLoadMoreOnScroll()
    }, c.prototype.HandleResize = function(t, e) {
        if (this._isLoadMoreOnScroll() && null == this.m_animationPromise) {
            var i = this.m_width,
                n = this.m_height;
            this.m_height = e, this.m_width = t, this.m_colCount = void 0;
            var o = this.isCardLayout();
            if (o && this.isSkeletonSupport() && i !== t)
                if (null != this.m_loadingIndicator) this._adjustLoadMoreSkeletons(this._getRootElementWidth(!0));
                else null != this.m_root.querySelector(".oj-listview-skeleton-container") && this.renderInitialSkeletons();
            (e > n || o && t > i) && this.checkViewport()
        }
    }, c.prototype.notifyShown = function() {
        this._isLoadMoreOnScroll() && this.checkViewport()
    }, c.prototype.notifyAttached = function() {
        if (null != this.m_domScroller) {
            var t = this._getFetchTrigger();
            if (null != t) {
                var e = this._getFetchTrigger();
                t !== e && this.m_domScroller.setFetchTrigger(e), this.checkViewport()
            }
        }
    }, c.prototype.setRootAriaProperties = function() {
        c.superclass.setRootAriaProperties.call(this);
        var t = this;
        this.shouldUseGridRole() && this._isLoadMoreOnScroll() && this.getDataProvider().getTotalSize().then(function(e) {
            t.m_root && t.m_root.setAttribute("aria-rowcount", -1 === e ? t._getMaxCount() : e)
        })
    }, c.prototype.unsetRootAriaProperties = function() {
        c.superclass.unsetRootAriaProperties.call(this), this.m_root.removeAttribute("aria-rowcount")
    }, c.prototype._isLoadMoreOnScroll = function() {
        return this.m_widget.isLoadMoreOnScroll()
    }, c.prototype._getFetchSize = function() {
        return Math.max(0, this.m_widget.options.scrollPolicyOptions.fetchSize)
    }, c.prototype._getScroller = function() {
        return this.m_widget._getScroller()
    }, c.prototype._getScrollerOffsetTop = function() {
        if (void 0 === this._scrollerOffsetTop) {
            var t = this._getScroller();
            t === this.m_widget.GetRootElement()[0] ? this._scrollerOffsetTop = 0 : this._scrollerOffsetTop = l.calculateOffsetTop(t, this.m_root)
        }
        return this._scrollerOffsetTop
    }, c.prototype._getFetchTrigger = function() {
        return void 0 === this._fetchTrigger && (this._fetchTrigger = this._getLoadingIndicatorHeight()), this._fetchTrigger
    }, c.prototype._getLoadingIndicatorHeight = function() {
        var t;
        if (this.isSkeletonSupport()) {
            var e = this.getDefaultSkeletonDimension().height;
            if (this.isCardLayout()) {
                var n = this._getCardDimension();
                t = null != n ? n.height : e
            } else t = c.LOAD_MORE_SKELETONS_ROW_COUNT * e
        } else {
            var o = i(document.createElement("div"));
            o.addClass(this.m_widget.getItemStyleClass()).css({
                visibility: "hidden",
                overflow: "hidden",
                position: "absolute"
            });
            var r = i(document.createElement("div"));
            r.addClass("oj-icon oj-listview-loading-icon"), o.append(r), i(this.m_widget.GetRootElement()).append(o), t = o.get(0).offsetHeight, o.remove()
        }
        return t
    }, c.prototype._getMaxCount = function() {
        return this.m_widget.options.scrollPolicyOptions.maxCount
    }, c.prototype._adjustSkeletonCardContent = function(t, e, i) {
        t.style.width = e + "px", t.style.height = i + "px"
    }, c.prototype._createSkeletonCard = function() {
        var t = document.createElement("li");
        t.setAttribute("role", "presentation");
        var e = document.createElement("div");
        return t.className = "oj-listview-skeleton-card", e.className = "oj-listview-skeleton oj-listview-skeleton-card-content oj-animation-skeleton", t.appendChild(e), t
    }, c.prototype.createSkeleton = function(t) {
        var e;
        if (this.isCardLayout())
            if (t) void 0 === this.m_defaultItemSkeleton && (this.m_defaultItemSkeleton = this._createSkeletonCard()), e = this.m_defaultItemSkeleton;
            else {
                if (void 0 === this.m_defaultLoadMoreSkeleton) {
                    var i = this._createSkeletonCard(),
                        n = this._getCardDimension();
                    n && this._adjustSkeletonCardContent(i, n.width, n.height), this.m_defaultLoadMoreSkeleton = i
                }
                e = this.m_defaultLoadMoreSkeleton
            }
        else void 0 === this.m_defaultItemSkeleton && (this.m_defaultItemSkeleton = this.createSkeletonItem()), e = this.m_defaultItemSkeleton;
        return e.cloneNode(!0)
    }, c.prototype._getScrollbarWidth = function() {
        if (isNaN(this.m_scrollbarWidth)) {
            var t = this.m_widget.GetRootElement()[0],
                e = document.createElement("div");
            t.appendChild(e), this.m_scrollbarWidth = Math.max(0, l.getDefaultScrollBarWidth(e)), t.removeChild(e)
        }
        return this.m_scrollbarWidth
    }, c.prototype._getRootElementWidth = function(t) {
        return isNaN(this.m_width) && (this.m_width = this.m_widget.GetRootElement()[0].offsetWidth), t ? this.m_width - this._getScrollbarWidth() : this.m_width
    }, c.prototype.renderInitialSkeletons = function() {
        this.m_superRoot && (this.m_root = this.m_superRoot, this.m_superRoot = null), i(this.m_root).empty();
        var t = this.getRootElementHeight(),
            e = 0,
            n = this.getDefaultSkeletonDimension();
        if (n.width > 0 && n.height > 0)
            if (this.isCardLayout()) {
                var o = this.getMargin(),
                    r = this._getRootElementWidth(),
                    s = Math.max(1, Math.floor(r / (n.width + o)));
                e = Math.max(1, Math.floor(t / (n.height + o))) * s
            } else e = Math.max(1, Math.floor(t / n.height));
        var l = document.createElement("li");
        l.setAttribute("role", "presentation"), l.classList.add("oj-listview-initial-skeletons");
        var a = document.createElement("ul");
        a.setAttribute("role", "presentation"), a.className = this.m_widget.getGroupStyleClass() + " oj-listview-skeleton-container";
        for (var d = 0; d < e; d++) a.appendChild(this.createSkeleton(!0));
        l.appendChild(a), this.m_root.appendChild(l)
    }, c.LOAD_MORE_SKELETONS_ROW_COUNT = 3, c.prototype._adjustLoadMoreSkeletons = function(t, e) {
        var i = this._getCardDimension();
        if (null != i && 0 !== i.width) {
            if (!e) {
                var n = this.getMargin();
                if (0 === Math.floor(t / (i.width + n)) - this.m_loadingIndicator.get(0).firstElementChild.childElementCount) return
            }
            this.m_loadingIndicator.get(0).parentNode.removeChild(this.m_loadingIndicator.get(0)), null != this.m_fillerSkeletons && this.m_fillerSkeletons.parentNode.removeChild(this.m_fillerSkeletons), this.m_loadingIndicator = null, this.m_fillerSkeletons = null, this.m_defaultLoadMoreSkeleton = void 0, this._appendLoadingIndicator()
        }
    }, c.prototype.getMargin = function() {
        if (void 0 === this.m_margin) {
            var t = document.createElement("li");
            t.className = this.m_widget.getItemStyleClass(), this.m_root.appendChild(t);
            var e = window.getComputedStyle(t);
            this.m_margin = parseInt(e.marginRight, 10), this.m_root.removeChild(t)
        }
        return this.m_margin
    }, c.prototype._getCardDimension = function() {
        if (void 0 === this.m_cardDim) {
            var t = this.m_root.querySelector("." + this.m_widget.getItemElementStyleClass());
            if (t) {
                var e = {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                };
                return e.width > 0 && e.height > 0 && (this.m_cardDim = e), e
            }
        }
        return this.m_cardDim
    }, c.prototype._renderSkeletons = function(t) {
        var e = this.createLoadingIndicator();
        e.setAttribute("role", "presentation"), e.classList.add("oj-listview-skeleton-container");
        var i = document.createElement("ul");
        i.setAttribute("role", "presentation"), i.className = this.isCardLayout() ? "oj-listview-skeleton-card-group" : "oj-listview-group", e.appendChild(i);
        for (var n = 0; n < t; n++) i.appendChild(this.createSkeleton(!1));
        return e
    }, c.prototype._fillEmptySpaceWithSkeletons = function() {
        var t = this._getCardDimension();
        if (null != t && 0 !== t.width) {
            var e = this.m_root.lastElementChild,
                i = t.width + this.getMargin(),
                n = this._getRootElementWidth(!0),
                o = Math.floor((n - e.offsetLeft - i) / i);
            if (o > 0) {
                var r = this._renderSkeletons(o);
                r.style.visibility = "hidden", this.m_root.appendChild(r), this.m_fillerSkeletons = r
            }
        }
    }, c.prototype._createLoadMoreSkeletons = function() {
        var t;
        if (this.isCardLayout()) {
            var e = this._getRootElementWidth(!0),
                i = this._getCardDimension(),
                n = void 0 === i ? this.getDefaultSkeletonDimension().width : i.width;
            t = 0 === n ? 0 : Math.floor(e / (n + this.getMargin()))
        } else t = c.LOAD_MORE_SKELETONS_ROW_COUNT;
        return this._renderSkeletons(t)
    }, c.prototype._createLoadMoreIcon = function() {
        var t = i(this.createLoadingIndicator());
        t.uniqueId().attr("role", "presentation").addClass(this.m_widget.getItemStyleClass()).addClass("oj-listview-loading-icon-container");
        var e = i(document.createElement("div"));
        return e.addClass("oj-icon oj-listview-loading-icon"), t.append(e), t.get(0)
    }, c.prototype.createLoadingIndicator = function() {
        return document.createElement("li")
    }, c.prototype._appendLoadingIndicator = function() {
        if (null == this.m_loadingIndicator)
            if (this.m_appendLoadingindicator = !0, this.isSkeletonSupport() && this.isCardLayout() && null != this._getCardDimension() && 0 === this._getCardDimension().width) {
                var t = this;
                n.getContext(this.m_root).getBusyContext().whenReady().then(function() {
                    t.m_appendLoadingindicator && t._doAppendLoadingIndicator()
                })
            } else this._doAppendLoadingIndicator()
    }, c.prototype._doAppendLoadingIndicator = function() {
        this.isSkeletonSupport() && this.isCardLayout() && this._fillEmptySpaceWithSkeletons();
        var t = this.isSkeletonSupport() ? this._createLoadMoreSkeletons() : this._createLoadMoreIcon();
        t.style.visibility = "hidden", this.m_root.appendChild(t), this.m_loadingIndicator = i(t), this.m_appendLoadingindicator = !1
    }, c.prototype._removeLoadingIndicator = function() {
        null != this.m_loadingIndicator && this.m_loadingIndicator.remove(), this.m_loadingIndicator = null, null != this.m_fillerSkeletons && this.m_fillerSkeletons.remove(), this.m_fillerSkeletons = null, this.m_appendLoadingindicator = !1
    }, c.prototype.hasMoreToFetch = function() {
        return null != this.m_loadingIndicator
    }, c.prototype.getLoadingIndicator = function() {
        return null != this.m_loadingIndicator ? this.m_loadingIndicator.get(0) : null
    }, c.prototype.afterRenderItem = function(t, e, n) {
        c.superclass.afterRenderItem.call(this, t, e, n), i(t).addClass(this.m_widget.getItemStyleClass()), !n && this.m_widget.getItemLayoutStyleClass && t.classList.add(this.m_widget.getItemLayoutStyleClass()), this.isSelectionEnabled() && this.isSelectable(e) && this.m_widget.getFocusItem(i(t)).attr("aria-selected", !1), this._isLoadMoreOnScroll() && !this.isCardLayout() && i(t).attr("aria-rowindex", e.index + 1), this.m_widget.itemRenderComplete(t, e)
    }, c.prototype._handleScrollerMaxRowCount = function() {
        s.info("ScrollPolicyOptions max count has been reached.")
    }, c.prototype._prepareRootElement = function() {
        this.m_superRoot ? (i(this.m_superRoot).empty(), this.m_root = this.m_superRoot, this.m_superRoot = null) : null == this.m_root.querySelector(".oj-listview-skeleton-container") && i(this.m_root).empty();
        if (this.shouldUseGridRole() && this.isCardLayout()) {
            var t = document.createElement("li");
            t.classList.add("oj-listview-group-container");
            var e = document.createElement("ul");
            t.appendChild(e), i(t).attr("role", "presentation").css("width", "100%"), i(e).attr("role", "row").addClass(this.m_widget.getGroupStyleClass()), this.m_root.appendChild(t), this.m_superRoot = this.m_root, this.m_root = e
        }
    }, c.prototype._setFetching = function(t) {
        this.shouldUseGridRole() && (null == this.m_superRoot ? this.m_root : this.m_superRoot).setAttribute("aria-busy", t);
        this.m_fetching = t
    }, c.prototype._containsKey = function(t, i) {
        for (var n = 0; n < i.length; n++)
            if (e.KeyUtils.equals(i[n].key, t)) return !0;
        return !1
    }, c.prototype.fetchRows = function(t) {
        var i = 0;
        if (this.signalTaskStart("fetching rows"), this.IsReady()) {
            var n = this;
            this._setFetching(!0), c.superclass.fetchRows.call(this, t);
            var o = this.m_widget.getScrollToKey(),
                r = this.loadTemplateEngine();
            this.signalTaskStart("first fetch"), this._clientId = this._clientId || Symbol();
            var s = {
                clientId: this._clientId
            };
            s.size = this._isLoadMoreOnScroll() ? this._getFetchSize() : -1, this.m_dataProviderAsyncIterator = this.getDataProvider().fetchFirst(s)[Symbol.asyncIterator]();
            var l = this.m_dataProviderAsyncIterator.next();
            n.fetchSize = s.size;
            var a = function(t, e, i) {
                var o = i;
                return (null == i || n._containsKey(i, e)) && (o = null), t[0].done || null == o && (-1 !== n.fetchSize || "function" == typeof n.getDataProvider().getPageCount) ? t : n.m_dataProviderAsyncIterator.next().then(function(e) {
                    return t[0].done = e.done, t[0].value.data = t[0].value.data.concat(e.value.data), t[0].value.metadata = t[0].value.metadata.concat(e.value.metadata), a(t, e.value.metadata, o)
                }, function(t) {
                    n._handleFetchError(t), n.signalTaskEnd()
                })
            };
            return Promise.all([l, r, o]).then(function(t) {
                return a(t, t[0].value.metadata, t[2])
            }, function(t) {
                return n._handleFetchError(t), n.signalTaskEnd(), Promise.reject(t)
            }).then(function(t) {
                if (t) {
                    if (null == n.m_widget) return;
                    var o = t[0],
                        r = t[1],
                        s = n.getDataProvider();
                    e.TableDataSourceAdapter && s instanceof e.TableDataSourceAdapter && (i = s.offset), 0 === i && (r && n.cleanItems(r), n.isSkeletonSupport() && n.m_widget.hideStatusText(), n._prepareRootElement()), n._handleFetchedData(o, r, 0 === i)
                }
            }, function() {}), void this.signalTaskEnd()
        }
        this.signalTaskEnd()
    }, c.prototype._handleFetchError = function(t) {
        if (s.error(t), this._setFetching(!1), null != this.m_widget) {
            var e = this.m_root.querySelector(".oj-listview-initial-skeletons");
            null != e && e.parentNode.removeChild(e), this._isLoadMoreOnScroll() && this._removeLoadingIndicator(), this.m_widget.renderComplete(!0)
        } else s.info("handleFetchError: widget has already been destroyed")
    }, c.prototype._renderItemsWhenIdle = function(t, i, n, o, r, s) {
        var a, d = this;
        0 !== t.length && 0 !== i.length ? l.isRequestIdleCallbackSupported() ? (r && e.AgentUtils.getAgentInfo().engine === e.AgentUtils.ENGINE.BLINK && (a = {
            timeout: 100
        }), this.m_idleCallback = window.requestIdleCallback(function(e) {
            for (var r = e.timeRemaining(), l = 0, a = document.createDocumentFragment();
                (r > l || e.didTimeout) && 0 !== t.length && 0 !== i.length;) {
                var m = t.shift(),
                    c = null != s ? s.shift() : null,
                    u = i.shift();
                d.addItem(a, -1, m, d.getMetadata(n, u, m), o, null, c), n += 1, l = r - e.timeRemaining(), r = e.timeRemaining()
            }
            h(a)
        }, a)) : this.m_idleCallback = window.requestAnimationFrame(function() {
            var e = document.createDocumentFragment(),
                r = t.shift(),
                l = null != s ? s.shift() : null,
                a = i.shift();
            d.addItem(e, -1, r, d.getMetadata(n, a, r), o, null, l), n += 1, h(e)
        }) : window.requestAnimationFrame(function() {
            d.m_idleCallback && (d._appendLoadingIndicator(), d.afterItemsInserted(!1, !0), d.signalTaskEnd()), d.m_idleCallback = null
        });

        function h(e) {
            window.requestAnimationFrame(function() {
                null != d.m_widget && (d.m_root.appendChild(e), d._renderItemsWhenIdle(t, i, n, o, r, s))
            })
        }
    }, c.prototype._isOverflow = function() {
        return this._getScroller() !== this.m_widget.getListContainer()[0] ? this._isOverflowCheckForCustomScroller() : this._isOverflowCheckForDefaultScroller()
    }, c.prototype._isOverflowCheckForDefaultScroller = function() {
        if (this._isLoadMoreOnScroll()) {
            var t = this._getScroller(),
                i = null == this.m_loadingIndicator ? 0 : this._getLoadingIndicatorHeight(),
                n = t.scrollHeight - (t.clientHeight + i);
            return 1 === n && e.AgentUtils.getAgentInfo().browser === e.AgentUtils.BROWSER.EDGE && (n = 0), n > 0
        }
        return !1
    }, c.prototype._isOverflowCheckForCustomScroller = function() {
        var t = this._getScroller();
        if (t !== document.documentElement) {
            var e = null == this.m_loadingIndicator ? 0 : this._getLoadingIndicatorHeight();
            return this.m_root.clientHeight + this._getScrollerOffsetTop() - e > t.clientHeight
        }
        return this._isLastItemNotInViewport()
    }, c.prototype._isLastItemNotInViewport = function() {
        for (var t, e = this.m_root.children, i = this.m_widget.getItemElementStyleClass(), n = e.length - 1; n >= 0; n--)
            if (e[n].classList.contains(i)) {
                t = e[n];
                break
            }
        return !!t && !l.isElementInScrollerBounds(t, this._getScroller())
    }, c.prototype._removeDuplicateItems = function(t) {
        if (this._hasPendingInsertKeys()) {
            var e = this,
                i = new Map;
            this.m_root.querySelectorAll("." + this.m_widget.getItemElementStyleClass()).forEach(function(t) {
                "LI" !== t.tagName && (t = t.parentNode);
                var n = e.GetKey(t);
                null != n && i.set(n, t)
            });
            var n = new h(i);
            t.forEach(function(t) {
                var e = n.get(t);
                e && e.parentNode && e.parentNode.removeChild(e)
            })
        }
    }, c.prototype._handleFetchSuccess = function(t, e, i, n, o, r, s) {
        if (null == this.m_widget) return Promise.resolve(!0);
        this._removeDuplicateItems(e);
        var l = this.m_root.querySelectorAll("." + this.m_widget.getItemElementStyleClass()).length;
        if (l > 0 && !i && this._isLastItemNotInViewport() && null == this.m_widget.m_scrollPosition) {
            this.signalTaskStart("render items during idle time");
            var a = null != r ? r.slice(0) : null;
            return this._renderItemsWhenIdle(t.slice(0), e.slice(0), l, n, o, a), Promise.resolve(!0)
        }
        for (var d = document.createDocumentFragment(), h = 0; h < t.length; h++) {
            var m = t[h],
                c = e[h],
                u = this._isFetchFromInsert(c) ? this.afterRenderItemForInsertEvent.bind(this) : null;
            this.addItem(d, -1, m, this.getMetadata(l, c, m), n, u, null != r ? r[h] : null), l += 1
        }
        return this.animateShowContent(this.m_root, d, s)
    }, c.prototype.handleDomScrollerFetchedData = function(t) {
        null != t ? (this.signalTaskStart("handle results from DomScroller"), this._removeLoadingIndicator(), this.IsReady() && this.signalTaskStart("dummy task"), this.isCardLayout() && this.m_superRoot && 0 === this.m_root.childNodes.length && this.m_root.parentNode && this.m_superRoot.appendChild(this.m_root.parentNode), this._handleFetchedData(t, this.getTemplateEngine(), !1), t.value && t.value.data ? this.m_widget.updateStatusFetchEnd(t.value.data.length) : t.maxCountLimit && (this._handleScrollerMaxRowCount(), this.signalTaskEnd()), this.m_widget.m_scrollHeight = null, this.signalTaskEnd()) : this._removeLoadingIndicator()
    }, c.prototype._registerDomScroller = function() {
        var t = this,
            e = {
                fetchSize: this._getFetchSize(),
                fetchTrigger: this._getFetchTrigger(),
                maxCount: this._getMaxCount(),
                asyncIterator: this.m_dataProviderAsyncIterator,
                initialRowCount: this.m_root.childElementCount,
                success: function(e) {
                    t.signalTaskEnd(), t.handleDomScrollerFetchedData(e), null != t.m_root && null != e.value || (t.signalTaskEnd(), null != t.m_root && t.m_widget.renderComplete(!0))
                },
                error: function() {
                    t.signalTaskEnd(), t.signalTaskEnd()
                },
                localKeyValidator: function(e) {
                    return !!t.m_widget && null != t.m_widget.FindElementByKey(e)
                },
                beforeFetch: function(e, i) {
                    return t.handleBeforeFetch(), t.m_viewportCheckPromise = null, null == t.m_idleCallback && (t.m_widget.updateStatusFetchStart(), i || t.signalTaskStart("starts high-water mark scrolling"), !0)
                },
                beforeScroll: this.m_widget.mergeScrollListener()
            },
            i = this._getScroller();
        i !== this.m_widget.getListContainer()[0] && (e.contentElement = this.m_root, i === document.documentElement && (e.isOverflow = this._isLastItemNotInViewport.bind(this))), this.m_domScroller = new a(i, this.getDataProvider(), e)
    }, c.prototype.handleBeforeFetch = function() {
        this.m_loadingIndicator && (this.m_loadingIndicator.get(0).style.visibility = "visible"), this.m_fillerSkeletons && (this.m_fillerSkeletons.style.visibility = "visible")
    }, c.prototype._clearEventQueue = function() {
        null != this.m_eventQueue && (this.m_eventQueue.length = 0)
    }, c.prototype.handleModelMutateEvent = function(t) {
        void 0 !== this.m_dataProviderAsyncIterator && c.superclass.handleModelMutateEvent.call(this, t)
    }, c.prototype.handleModelAddEvent = function(t) {
        this.m_currentEvents.push(t);
        var e = c.superclass.handleModelAddEvent.call(this, t);
        return e || this.m_currentEvents.pop(), e
    }, c.prototype.GetReferenceNode = function(t, e) {
        var i = c.superclass.GetReferenceNode.call(this, t, e);
        return null == i && null != this.m_loadingIndicator ? this.m_loadingIndicator.get(0) : i
    }, c.prototype._getMaxIndexForInsert = function() {
        var t = Number.MAX_VALUE;
        if (l.isIterateAfterDoneNotAllowed(this.getDataProvider()) && !this.hasMoreToFetch()) return t;
        if (this._isLoadMoreOnScroll()) {
            t = i(this.m_root).children("li." + this.m_widget.getItemElementStyleClass()).length;
            var e = this.m_root.querySelectorAll(".oj-listview-temp-item"),
                n = this.m_root.querySelectorAll(".oj-listview-temp-item.oj-listview-item-remove");
            t = Math.max(0, t + e.length - n.length)
        }
        return t
    }, c.prototype.addItemsForModelInsert = function(t, e, i, n, o, r, s) {
        for (var a = this._getMaxIndexForInsert(), h = this.getTemplateEngine(), m = [], c = 0; c < t.length; c++)
            if (null == this.FindElementByKey(i[c])) {
                var u;
                if (this.signalTaskStart("handling model add event for item: " + i[c]), null != e ? u = e[c] : (u = this.getIndex(r, c)) > -1 ? u = o ? u : u + 1 : this._isLoadMoreOnScroll() && (l.isIterateAfterDoneNotAllowed(this.getDataProvider()) && !this.hasMoreToFetch() || (u = a)), u < a) {
                    var p = this.addItem(this.m_root, u, t[c], this.getMetadata(u, i[c], t[c]), h, this.afterRenderItemForInsertEvent.bind(this), null != s ? s[c] : null);
                    p && m.push(p), a += 1
                } else null == this.m_insertOutOfRangeKeys && (this.m_dataProvider.createOptimizedKeySet ? this.m_insertOutOfRangeKeys = this.m_dataProvider.createOptimizedKeySet() : this.m_insertOutOfRangeKeys = new d), this.m_insertOutOfRangeKeys.add(i[c]);
                this.signalTaskEnd()
            }
        if (m.length < t.length && (null == this.m_domScroller ? this._registerDomScroller() : this.m_domScroller.setAsyncIterator(this.m_dataProviderAsyncIterator)), 0 === m.length) this.m_currentEvents.pop(), 0 === this.m_currentEvents.length && this.afterItemsInserted(!0, !0);
        else {
            var g = this;
            Promise.all(m).then(function() {
                g.m_widget && (g.m_currentEvents.pop(), 0 === g.m_currentEvents.length && g.afterItemsInserted(!0, !0))
            })
        }
    }, c.prototype._isFetchFromInsert = function(t) {
        return null != this.m_insertOutOfRangeKeys && this.m_insertOutOfRangeKeys.has(t)
    }, c.prototype.handleModelRemoveEvent = function(t) {
        this.m_currentEvents.push(t);
        var e = c.superclass.handleModelRemoveEvent.call(this, t);
        e ? null == this.m_root.querySelector("li." + this.m_widget.getItemElementStyleClass()) && this.m_loadingIndicator && (this.m_loadingIndicator.get(0).style.display = "none") : this.m_currentEvents.pop();
        return e
    }, c.prototype.handleRemoveItemsPromises = function(t) {
        if (0 === t.length) this.m_currentEvents.pop();
        else {
            var e = this;
            Promise.all(t).then(function() {
                e.m_widget && (e.m_currentEvents.pop(), 0 === e.m_currentEvents.length && e.checkViewport())
            })
        }
    }, c.prototype.handleModelRefreshEvent = function(t) {
        null != this.m_root && (this._cancelIdleCallback(), this.IsReady() ? (this.signalTaskStart("handling model reset event"), this._clearEventQueue(), this.m_widget.ClearCache(!0), this._destroyDomScroller(), this.m_widget.adjustScrollPositionValueOnFetch(), this.m_widget.resetFocusBeforeRefresh(), this.fetchRows(!0), this.signalTaskEnd()) : this._pushToEventQueue({
            type: t.type,
            event: t
        }))
    }, c.prototype._handleFetchedData = function(t, e, i) {
        if (null != this.m_root && null != t.value) {
            var n = t.value.data,
                o = t.value.metadata.map(function(t) {
                    return t.key
                }),
                r = t.value.metadata;
            n.length === o.length && this._handleFetchSuccess(n, o, t.done || t.maxCountLimit, e, t.isMouseWheel, r, i).then(function(e) {
                if (null != this.m_widget) {
                    var n = null != o && 0 === o.length;
                    this._isLoadMoreOnScroll() && (t.done ? this.m_domScroller && this._destroyDomScroller() : (n && s.info("handleFetchedData: zero data returned while done flag is false"), e || t.maxCountLimit || (null == this.m_domScroller && (this._registerDomScroller(), this.getRootElementHeight()), n && !this.m_domScroller.isOverflow() || this._appendLoadingIndicator()))), t.maxCountLimit && this._handleScrollerMaxRowCount(), this.fetchEnd(e, !n || !t.done, i), n || this.disableAllTabbableElements()
                }
            }.bind(this))
        }
    }, c.prototype.disableAllTabbableElements = function() {
        var t = this.m_root.childElementCount;
        this.m_root.lastElementChild && "presentation" === this.m_root.lastElementChild.getAttribute("role") && (t -= 1);
        var e = this;
        n.getContext(this.m_root).getBusyContext().whenReady().then(function() {
            if (null != e.m_root)
                for (var i = e.m_root.children, n = 0; n < t; n++) i[n] && e.m_widget.disableAllTabbableElements(i[n])
        })
    }, c.prototype.afterItemsInserted = function(t, e) {
        if (this.m_widget) {
            var i = this,
                o = this.m_widget.renderComplete(e);
            if (o && o.then(function() {
                    i.m_animationPromise = null
                }), this.m_animationPromise = o, this._processEventQueue(), t)
                if (this.m_widget.ojContext._IsCustomElement()) {
                    var r = n.getContext(i.m_root).getBusyContext().whenReady();
                    r.then(function() {
                        null != i.m_widget && (i.isCardLayout() && void 0 === i.m_cardDim && null != i.m_loadingIndicator && i._adjustLoadMoreSkeletons(i._getRootElementWidth(!0), !0), null != i.m_viewportCheckPromise && null == i.checkViewport(o) && i._clearInsertOutOfRangeKeys())
                    }), i.m_viewportCheckPromise = r
                } else null == this.checkViewport() && this._clearInsertOutOfRangeKeys()
        }
    }, c.prototype.fetchEnd = function(t, e, i) {
        this._setFetching(!1), t || this.afterItemsInserted(e, !i), this.signalTaskEnd()
    }, c.prototype._checkHorizontalViewport = function() {
        if (this.isCardLayout()) {
            for (var t, e = this.m_root.children, i = this.m_widget.getItemElementStyleClass(), n = e.length - 1; n >= 0; n--)
                if (e[n].classList.contains(i)) {
                    t = e[n];
                    break
                }
            if (t) {
                var o = this._getScroller(),
                    r = o === this.m_root ? this.getRootElementHeight() : o.clientHeight;
                if (o === document.documentElement) {
                    var s = t.getBoundingClientRect();
                    if (s.top <= r && s.top + s.height >= 0) return this.handleBeforeFetch(), this.m_domScroller._fetchMoreRows()
                } else {
                    var l = o.scrollTop,
                        a = t.offsetTop,
                        d = o === this.m_root ? 0 : this._getScrollerOffsetTop();
                    if (a > l && a < l + r - d) return this.handleBeforeFetch(), this.m_domScroller._fetchMoreRows()
                }
            }
        }
        return null
    }, c.prototype._clearInsertOutOfRangeKeys = function() {
        null != this.m_insertOutOfRangeKeys && this.m_insertOutOfRangeKeys.clear()
    }, c.prototype.checkViewport = function(t) {
        var e, i = this;
        return this.m_checkViewportPromise ? null : (this.signalTaskStart("checking viewport"), null != this.m_domScroller && this.IsReady() && (null != (e = this.m_domScroller.checkViewport()) ? (this.signalTaskStart("got promise from checking viewport"), e.then(function(n) {
            if (null != i.m_widget) {
                if (null != n) i.m_checkViewportPromise = null, i.handleDomScrollerFetchedData(n);
                else {
                    var o = function() {
                        null != (e = i._checkHorizontalViewport()) ? (i.signalTaskStart("got promise from checking horizontal viewport"), e.then(function(t) {
                            i.m_checkViewportPromise = null, null != i.m_widget && null != t && i.handleDomScrollerFetchedData(t), i.signalTaskEnd()
                        }, null)) : i.m_checkViewportPromise = null
                    };
                    t ? (i.signalTaskStart("wait for animation to complete"), t.then(function() {
                        i.signalTaskEnd(), null != i.m_widget && null != i.m_domScroller && o()
                    })) : o()
                }
                i.signalTaskEnd()
            }
            i._clearInsertOutOfRangeKeys()
        }, null)) : this._clearInsertOutOfRangeKeys(), this.m_checkViewportPromise = e), this.signalTaskEnd(), e)
    }, t.DataProviderContentHandler = m, t.IteratingDataProviderContentHandler = c, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojdataproviderscroller.js.map