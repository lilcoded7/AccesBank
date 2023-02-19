/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojeditablevalue", "ojs/ojpopupcore", "ojs/ojinputtext", "ojs/ojlistview", "ojs/ojhighlighttext", "ojs/ojcore-base", "jquery", "ojs/ojdomutils", "ojs/ojlogger", "ojs/ojconfig", "ojs/ojthemeutils", "ojs/ojfocusutils", "ojs/ojdataprovider", "ojs/ojcontext", "ojs/ojcomponentcore", "ojs/ojkeyset", "ojs/ojcustomelement-utils", "ojs/ojdataproviderfactory", "ojs/ojlistdataproviderview", "ojs/ojtreedataproviderview", "ojs/ojtimerutils"], function(e, t, i, n, o, r, s, a, l, d, u, c, h, p, _, f, v, m, b, y, g, E) {
    "use strict";
    s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, h = h && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h, _ = _ && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _, y = y && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y, g = g && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
    const w = function(e) {
        this._minLength = 0, this._className = e.className, this._dataProvider = e.dataProvider, this._containerElem = e.containerElem, this._fullScreenPopup = e.fullScreenPopup, this._idSuffix = e.idSuffix, this._enabled = e.enabled, this._readonly = e.readOnly, this._value = e.value, this._getTranslatedStringFunc = e.getTranslatedStringFunc, this._addBusyStateFunc = e.addBusyStateFunc, this._lovMainField = e.lovMainField, this._filterInputText = e.filterInputText, this._lovDropdown = e.lovDropdown, this._liveRegion = e.liveRegion, this._showMainFieldFunc = e.showMainFieldFunc, this._setFilterFieldTextFunc = e.setFilterFieldTextFunc, this._setUiLoadingStateFunc = e.setUiLoadingStateFunc, this._isValueForPlaceholderFunc = e.isValueForPlaceholderFunc, this._isShowValueInFilterFieldFunc = e.isShowValueInFilterFieldFunc, this._lastDataProviderPromise = null, this._fetchType = this.hasData() ? "init" : null;
        var t = c.getCachedCSSVarValues(["--oj-private-core-global-dropdown-offset"])[0] || "0";
        this._dropdownVerticalOffset = parseInt(t, 10)
    };
    w.prototype.setValue = function(e) {
        this._value = e
    }, w.prototype.getFetchType = function() {
        return this._fetchType
    }, w.prototype.destroy = function() {
        var e = this._closeDelayTimer;
        isNaN(e) || (delete this._closeDelayTimer, window.clearTimeout(e)), this.closeDropdown()
    }, w.prototype.hasData = function() {
        return null != this._dataProvider
    }, w.prototype.isDropdownOpen = function() {
        return a(this._containerElem).hasClass("oj-listbox-dropdown-open")
    }, w.prototype._usingHandler = function(e, t) {
        if (s.PositionUtils.isAligningPositionClipped(t)) {
            var i = this._addBusyStateFunc("closing popup");
            this._closeDelayTimer = window.setTimeout(function() {
                this.closeDropdown(), i()
            }.bind(this), 1)
        } else {
            var n = a(this._containerElem),
                o = this._lovDropdown.getElement(),
                r = a(o),
                l = s.PositionUtils.calcAvailablePopupSize(e, t),
                d = o.style;
            e.left >= 0 && (d.maxWidth = l.width + "px"), d.maxHeight = l.height + "px";
            var u = this.getDropdownPosition(!0);
            r.position(u), "bottom" === t.vertical ? (n.addClass("oj-listbox-drop-above"), r.addClass("oj-listbox-drop-above")) : (n.removeClass("oj-listbox-drop-above"), r.removeClass("oj-listbox-drop-above"))
        }
    }, w.prototype.getDropdownPosition = function(e) {
        var t, i = "rtl" === l.getReadingDirection();
        if (this._fullScreenPopup) {
            var n = window.scrollX || window.pageXOffset,
                o = window.scrollY || window.pageYOffset;
            t = {
                my: "start top",
                at: "start top",
                of: window,
                offset: {
                    x: n,
                    y: o
                }
            }, t = s.PositionUtils.normalizeHorizontalAlignment(t, i)
        } else {
            var r = {
                my: "start top",
                at: "start bottom",
                of: this._lovMainField.getElement(),
                collision: "flip",
                offset: {
                    x: 0,
                    y: this._dropdownVerticalOffset
                }
            };
            e || (r.using = this._usingHandler.bind(this)), t = s.PositionUtils.normalizeHorizontalAlignment(r, i), t = s.PositionUtils.coerceToJet(t), (t = s.PositionUtils.coerceToJqUi(t)).of = r.of
        }
        return t
    }, w.prototype.sizeDropdown = function() {
        var e = this._lovDropdown.getElement();
        if (this._fullScreenPopup) {
            var t = Math.min(window.innerWidth, window.screen.availWidth),
                i = Math.min(window.innerHeight, window.screen.availHeight);
            if ("phone" === u.getDeviceType() && window.parent && window !== window.parent) {
                var n = Math.min(window.parent.innerHeight, window.parent.screen.availHeight),
                    o = Math.min(i, n);
                if (i > o) {
                    var r = i - o;
                    e.style.paddingBottom = r + "px"
                }
            }
            e.style.width = t + "px", e.style.height = i + "px"
        } else e.style.minWidth = a(this._containerElem).width() + "px"
    }, w.prototype.openDropdown = function(e) {
        if (this.isDropdownOpen() || !1 === this._enabled || !0 === this._readonly) return !1;
        if (this._fullScreenPopup) {
            var t = this._lovMainField.getInputElem(),
                i = this._isShowValueInFilterFieldFunc() ? t.value : "";
            this._setFilterFieldTextFunc(i)
        }
        return a(this._containerElem).addClass("oj-listbox-dropdown-open"), e || this.updateResults(!0, this._fullScreenPopup), !0
    }, w.prototype.closeDropdown = function() {
        if (this.isDropdownOpen()) {
            var e = a(this._containerElem);
            e.removeClass("oj-listbox-dropdown-open"), this._ariaExpanded && (e.removeClass("oj-listbox-drop-above"), a(this._lovDropdown.getElement()).removeClass("oj-listbox-drop-above"), this._lovDropdown.close(), this._ariaExpanded = !1, this._lovMainField.getInputElem().setAttribute("aria-expanded", "false"), this._lastSearchTerm = null)
        }
    }, w.prototype.updateResults = function(e, t) {
        var i;
        i = !0 === e ? "" : this._filterInputText.rawValue || "";
        var n = this._lastSearchTerm;
        if (!0 === e || !n || i !== n) {
            var o = this._lovDropdown.getElement().classList;
            !0 === e ? o.add("oj-listbox-initial-open") : o.remove("oj-listbox-initial-open"), this._lastSearchTerm = i, i.length >= this._minLength ? e && !0 !== e ? this._runQuery(i, t) : this._runQuery(i, t, !0 === e) : this.closeDropdown()
        }
    }, w.prototype._runQuery = function(e, t, i) {
        var n = this._lovDropdown;
        if (this._minLength > e.length) this.closeDropdown();
        else if (this.openDropdown(!0), this.hasData()) {
            this._ariaExpanded || (n.open(), this._ariaExpanded = !0, this._lovMainField.getInputElem().setAttribute("aria-expanded", "true")), t && !this._fullScreenPopup && h.focusFirstTabStop(n.getElement());
            var o = this._fetchFromDataProvider(e, i);
            o.then(function() {
                o === this._lastDataProviderPromise && this._handleQueryResultsFetch(t)
            }.bind(this), function(e) {
                o === this._lastDataProviderPromise && (d.warn("Select: _fetchFromDataProvider promise was rejected: " + e), this._handleQueryResultsFetch(t))
            }.bind(this))
        }
    }, w.prototype._handleQueryResultsFetch = function(e) {
        if (this.isDropdownOpen()) {
            this._lovDropdown.getElement().classList.remove("oj-listbox-initial-open");
            var t, i = this._lovDropdown.getResultsCount(),
                n = i ? i.count : 0,
                o = !i || i.done;
            0 === n ? t = this._getTranslatedStringFunc("noMatchesFound") : (this.sizeDropdown(), t = o ? this._getTranslatedStringFunc("multipleMatchesFound", {
                num: String(n)
            }) : this._getTranslatedStringFunc("nOrMoreMatchesFound", {
                num: String(n)
            })), this.updateLiveRegion(t), e && this._fullScreenPopup && h.focusFirstTabStop(this._lovDropdown.getElement())
        }
    }, w.prototype.updateLiveRegion = function(e) {
        a(this._liveRegion).text(e)
    }, w.prototype.cancel = function() {
        this.closeDropdown()
    }, w.prototype.handleDataProviderEvent = function(e) {
        this._lastSearchTerm = null
    }, w.prototype._fetchFromDataProvider = function(e, t) {
        var i = !1,
            n = this._addBusyStateFunc("fetching data");
        "init" === this._fetchType && (this.isDropdownOpen() || (i = !0, this._setUiLoadingStateFunc("start")), this._fetchType = null);
        var o = null;
        if (e) {
            if (this._dataProvider) {
                var r = this._dataProvider.getCapability("filter");
                r && r.textFilter || d.error("Select: DataProvider does not support text filter.  Filtering results in dropdown may not work correctly.")
            }
            o = s.FilterFactory.getFilter({
                filterDef: {
                    text: e
                }
            })
        }
        var a = new Promise(function(r, s) {
            var l = this._lovDropdown.renderResults(e, o, this._isValueForPlaceholderFunc(this._value) ? null : this._value, t),
                u = function() {
                    i && this._setUiLoadingStateFunc("stop"), n(), a === this._lastDataProviderPromise ? r() : s("AbstractLovBase._fetchFromDataProvider: rejecting earlier promise")
                }.bind(this);
            l.then(function() {
                u()
            }, function(e) {
                a === this._lastDataProviderPromise && d.warn("Select: renderResults promise was rejected: " + e), u()
            })
        }.bind(this));
        return this._lastDataProviderPromise = a, a
    };
    const C = function(e) {
            function t(e, t) {
                var n = new i(e, t);
                this[Symbol.asyncIterator] = function() {
                    return n
                }
            }

            function i(e, t) {
                this.next = function() {
                    var i = e.next();
                    return new Promise(function(e, n) {
                        i.then(function(i) {
                            var n = i.value;
                            n.data && (t.count += n.data.length), t.done = i.done, e(i)
                        }, function(e) {
                            n(e)
                        })
                    })
                }
            }
            this._fetchedDataCount = {
                count: 0,
                done: !0
            }, this.setFilterCriterion = function(e) {
                var t, i, n = this._filterCriterion;
                if (this._filterCriterion = e, t = n, i = this._filterCriterion, !(t === i || !t && !i || t && i && t.text === i.text)) {
                    var o = new p.DataProviderRefreshEvent;
                    Object.defineProperty(o, "filterCriterionChanged", {
                        value: !0
                    }), this.dispatchEvent(o)
                }
            }, this.getFetchedDataCount = function() {
                return this._fetchedDataCount
            }, this.setFetchedDataCount = function(e) {
                this._fetchedDataCount = e
            }, this.fetchFirst = function(i) {
                if (e) return this._filterCriterion && (i.filterCriterion = this._filterCriterion), this._fetchedDataCount.count = 0, this._fetchedDataCount.done = !0, this._fetchedDataCount.childrenCountMap && this._fetchedDataCount.childrenCountMap.clear(), new t(e.fetchFirst(i)[Symbol.asyncIterator](), this._fetchedDataCount);
                var n = {};
                return n[Symbol.asyncIterator] = function() {
                    return {
                        next: function() {
                            return Promise.resolve({
                                value: {
                                    data: [],
                                    fetchParameters: i,
                                    metadata: []
                                },
                                done: !0
                            })
                        }
                    }
                }, n
            }, this.containsKeys = function(t) {
                return e ? e.containsKeys(t) : Promise.resolve({
                    containsParameters: t,
                    results: new Set
                })
            }, this.fetchByKeys = function(t) {
                return e ? e.fetchByKeys(t) : Promise.resolve({
                    fetchParameters: t,
                    results: new Map
                })
            }, this.fetchByOffset = function(t) {
                return e ? (this._filterCriterion && (t.filterCriterion = this._filterCriterion), e.fetchByOffset(t)) : Promise.resolve({
                    done: !0,
                    fetchParameters: t,
                    results: []
                })
            }, this.isEmpty = function() {
                return e ? e.isEmpty() : "yes"
            }, this.getTotalSize = function() {
                return e ? e.getTotalSize() : Promise.resolve(0)
            }, this.addEventListener = function(t, i) {
                e && e.addEventListener(t, i)
            }, this.removeEventListener = function(t, i) {
                e && e.removeEventListener(t, i)
            }, this.dispatchEvent = function(t) {
                return !e || e.dispatchEvent(t)
            }, this.getCapability = function(t) {
                return e ? e.getCapability(t) : null
            }, e && s.DataProviderFeatureChecker.isTreeDataProvider(e) && (this._fetchedDataCount.childrenCountMap = new Map, this.getChildDataProvider = function(t) {
                let i = e.getChildDataProvider.apply(e, arguments);
                if (i) {
                    i = new C(i), this._filterCriterion && i.setFilterCriterion(this._filterCriterion);
                    let e = this._fetchedDataCount.childrenCountMap.get(t);
                    e ? i.setFetchedDataCount(e) : (e = i.getFetchedDataCount(), this._fetchedDataCount.childrenCountMap.set(t, e))
                }
                return i
            }.bind(this))
        },
        F = {
            KEYS: {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46
            },
            _isControlKey: function(e) {
                switch (e.which || e.keyCode) {
                    case F.KEYS.SHIFT:
                    case F.KEYS.CTRL:
                    case F.KEYS.ALT:
                        return !0;
                    default:
                        return e.metaKey || e.ctrlKey
                }
            },
            _isFunctionKey: function(e) {
                var t = e.which || e.keyCode || e;
                return t >= 112 && t <= 123
            },
            isControlOrFunctionKey: function(e) {
                return F._isControlKey(e) || F._isFunctionKey(e)
            },
            nextUid: (P = 1, function() {
                var e = P;
                return P += 1, e
            }),
            killEvent: function(e) {
                e.preventDefault()
            },
            killEventWithAncestorExceptions: function(e, t) {
                const i = a(t.target);
                e.some(e => 0 !== i.closest(e)) || t.preventDefault()
            },
            stopEventPropagation: function(e) {
                e.stopPropagation()
            },
            addBusyState: function(e, t) {
                var i = {
                    description: "The component identified by '" + e.id + "' " + t
                };
                return _.getContext(e).getBusyContext().addBusyState(i)
            },
            createValueItem: function(e, t, i) {
                return {
                    key: e,
                    data: t,
                    metadata: i
                }
            },
            dispatchCustomEvent: function(e, t, i, n) {
                var o = n || {};
                o.subtype = i;
                var r = {
                    bubbles: !1,
                    cancelable: !1,
                    detail: o
                };
                return e.dispatchEvent(new CustomEvent(t, r))
            },
            copyAttribute: function(e, t, i, n) {
                var o = e.getAttribute(t);
                null === o ? F.removeAttribute(i, n) : i.setAttribute(n, o)
            },
            removeAttribute: function(e, t) {
                "style" === t ? F._removeStyles(e) : e.removeAttribute(t)
            },
            _removeStyles: function(e) {
                for (var t, i = e.style, n = i.length - 1; n >= 0; n--) t = i.item(n), i.removeProperty(t)
            },
            isDataProvider: function(e) {
                return !(!e || !f.DataProviderFeatureChecker) && f.DataProviderFeatureChecker.isDataProvider(e)
            },
            isTreeDataProvider: function(e) {
                return !(!e || !f.DataProviderFeatureChecker) && f.DataProviderFeatureChecker.isTreeDataProvider(e)
            }
        };
    var P;
    const S = function() {};
    S.prototype.init = function(e) {
        this._dataProvider = e.dataProvider, this._fullScreenPopup = e.fullScreenPopup, this._bodyElem = a(e.bodyElem), this._itemTemplate = e.itemTemplate, this._collectionTemplate = e.collectionTemplate, this._getTemplateEngineFunc = e.getTemplateEngineFunc, this._templateContextComponentElement = e.templateContextComponentElement, this._addBusyStateFunc = e.addBusyStateFunc, this._itemTextRendererFunc = e.itemTextRendererFunc, this._filterInputText = e.filterInputText, this._getThrottlePromiseFunc = e.getThrottlePromiseFunc, this._isValueForPlaceholderFunc = e.isValueForPlaceholderFunc, this._isValueItemForPlaceholderFunc = e.isValueItemForPlaceholderFunc, this._currentFirstItem = null, this._templateEngine = null, this._resultsCount = null, this._NO_RESULTS_FOUND_CLASSNAME = "oj-listbox-searchselect-no-results";
        var t = this._addBusyStateFunc("LovDropdown initializing");
        this._addDataProviderEventListeners();
        var i, n, o = this._createInnerDom(e);
        this._containerElem = o, this._dropdownPositioningProxyContainer = this._createDropdownPositioningProxyElem(e);
        var r = new Promise(function(e, t) {
            i = e, n = t
        });
        this._collectionContext = {
            parentElement: this._containerElem[0],
            idSuffix: e.idSuffix,
            renderDone: i,
            renderError: n,
            data: this._dataProvider,
            searchText: void 0,
            selected: void 0,
            selectedItem: void 0,
            selectedItemChangedListener: this._HandleCollectionSelectedItemChanged.bind(this),
            currentRow: {
                rowIndex: void 0,
                rowKey: void 0
            },
            currentRowChangedListener: this._handleCollectionCurrentRowChanged.bind(this),
            currentRowKeyChangedListener: this._handleCollectionCurrentRowKeyChanged.bind(this),
            handleRowAction: this._handleRowAction.bind(this)
        }, this._collectionRendererFunc = this._collectionTemplate ? this._templateCollectionRenderer.bind(this) : this._defaultCollectionRenderer.bind(this), this._collectionRendererFunc(this._collectionContext), o.on("change", "." + e.className + "-input", F.stopEventPropagation), o.on("click mouseup mousedown", F.stopEventPropagation);
        var s = function() {
            e.afterDropdownInitFunc && e.afterDropdownInitFunc(this._resultsElem[0]), t()
        }.bind(this);
        if (r.then(s, s), o.on("keydown", this._handleKeyDown.bind(this)), this._updateLabelFunc) {
            var l = this._updateLabelFunc;
            this._updateLabelFunc = null, l()
        }
    }, S.prototype._dispatchEvent = function(e, t) {
        return F.dispatchCustomEvent(this._containerElem[0], "lovDropdownEvent", e, t)
    }, S.prototype.destroy = function() {
        (this._itemTemplate || this._collectionTemplate) && this._containerElem && this._getTemplateEngineFunc().then(function(e) {
            e.clean(this._containerElem[0])
        }.bind(this)), this._removeDataProviderEventListeners()
    }, S.prototype.getElement = function() {
        return this._containerElem ? this._containerElem[0] : null
    }, S.prototype._createInnerDom = function(e) {
        var t = e.idSuffix,
            i = document.createElement("div");
        i.setAttribute("data-oj-containerid", e.parentId), i.setAttribute("data-oj-context", ""), i.setAttribute("id", "lovDropdown_" + t), i.setAttribute("class", "oj-listbox-drop oj-listbox-searchselect oj-listbox-" + e.styleClassComponentName + (this._fullScreenPopup ? " oj-listbox-fullscreen" : "")), i.style.display = "none", i.setAttribute("role", "presentation"), this._fullScreenPopup && i.appendChild(this._filterInputText);
        var n = document.createElement("div");
        return n.setAttribute("class", "oj-searchselect-results-placeholder"), i.appendChild(n), a(i)
    }, S.prototype._createDropdownPositioningProxyElem = function(e) {
        var t = e.idSuffix,
            i = document.createElement("div");
        i.style.visibility = "hidden", i.style.position = "absolute", i.style.overflow = "hidden";
        var n = document.createElement("div");
        n.setAttribute("data-oj-containerid", e.parentId), n.setAttribute("data-oj-context", ""), n.setAttribute("id", "lovDropdownPositioningProxy_" + t), n.setAttribute("class", "oj-listbox-drop oj-listbox-searchselect"), i.appendChild(n);
        var o = document.createElement("div");
        return o.setAttribute("class", "oj-select-results"), n.appendChild(o), a(i)
    }, S.prototype._defaultItemRenderer = function(e) {
        var t, i = e.parentElement,
            n = this._itemTextRendererFunc({
                key: e.key,
                data: e.data,
                metadata: e.metadata
            });
        !1 === e.leaf ? (t = document.createElement("span"), a(t).text(n)) : ((t = document.createElement("oj-highlight-text")).setAttribute("text", n), t.setAttribute("match-text", this._collectionContext.searchText)), i.appendChild(t)
    }, S.prototype._templateItemRenderer = function(e, t) {
        var i = a.extend({}, t);
        i.componentElement = this._templateContextComponentElement, i.searchText = this._collectionContext.searchText;
        var n = i.parentElement;
        if (e)
            for (var o = e.execute(i.componentElement, this._itemTemplate, i), r = 0; r < o.length; r++) n.appendChild(o[r])
    }, S.prototype.renderResults = function(e, t, i, n) {
        var o, r, s = this._addBusyStateFunc("LovDropdown rendering results");
        this._latestFilterCriteria = t, this._ClearSelection(), this._duringListViewInitialization = !0;
        var a = new Promise(function(e, t) {
                o = e, r = t
            }),
            l = new Promise(function(t, o) {
                a.then(function() {
                    _.getContext(this._containerElem[0]).getBusyContext().whenReady().then(function() {
                        l === this._lastRenderResultsPromise ? this._configureResults(e, i, n).then(t, o) : t()
                    }.bind(this), o)
                }.bind(this), o)
            }.bind(this));
        this._lastRenderResultsPromise = l;
        var u = this._collectionContext;
        u.data = this._dataProvider, u.searchText = e, this._getThrottlePromiseFunc().then(function() {
            if (u.renderError) {
                var e = u.renderError;
                this._clearContextRenderPromiseFunctions(u), e("LovDropdown.renderResults: rejecting earlier promise")
            }
            u.renderDone = o, u.renderError = r, this._dataProvider.setFilterCriterion(t), this._collectionRendererFunc(u)
        }.bind(this));
        var c = function() {
            l === this._lastRenderResultsPromise && (this._duringListViewInitialization = !1), s()
        }.bind(this);
        return l.then(function() {
            c()
        }, function(e) {
            l === this._lastRenderResultsPromise && d.warn("Select: LovDropdown.renderResults retPromise rejected: " + e), c()
        }.bind(this))
    }, S.prototype.updateLabel = function(e, t) {
        var i = this._resultsElem;
        if (i) {
            if (!this._collectionTemplate) {
                var n = i[0];
                e ? (n.setAttribute("aria-labelledby", e), n.setAttribute("aria-label", "")) : t && (n.setAttribute("aria-label", t), n.setAttribute("aria-labelledby", ""))
            }
        } else this._updateLabelFunc = this.updateLabel.bind(this, e, t)
    }, S.prototype.updateItemTextRendererFunc = function(e) {
        if (this._itemTextRendererFunc = e, !this._collectionTemplate && !this._itemTemplate && this._resultsElem) {
            var t = this._resultsElem[0],
                i = this._addBusyStateFunc("LovDropdown setting new default item renderer");
            t.setProperty("item.renderer", this._defaultItemRenderer.bind(this)), _.getContext(t).getBusyContext().whenReady().then(i, i)
        }
    }, S.prototype._configureResults = function(e, t, i) {
        var n = _.getContext(this._containerElem[0]).getBusyContext();
        return this._SetCurrentFirstItem(null), this._focusinListener && (this._containerElem[0].removeEventListener("focusin", this._focusinListener), this._focusListener = null), this._resultsCount = this._dataProvider.getFetchedDataCount() || {}, null == this._resultsCount.count || 0 === this._resultsCount.count ? (this._containerElem.addClass(this._NO_RESULTS_FOUND_CLASSNAME), Promise.resolve()) : (this._containerElem.removeClass(this._NO_RESULTS_FOUND_CLASSNAME), i ? this._ConfigureResultsInitial(t, n) : null == e || "" === e ? this._ConfigureResultsNoSearchText(t, n) : this._ConfigureResultsWithSearchText(t, n))
    }, S.prototype._ConfigureResultsInitial = function(e, t) {
        return s.Assert.failedInAbstractFunction(), t.whenReady()
    }, S.prototype._ConfigureResultsNoSearchText = function(e) {
        return s.Assert.failedInAbstractFunction(), e.whenReady()
    }, S.prototype._ConfigureResultsWithSearchText = function(e) {
        return s.Assert.failedInAbstractFunction(), e.whenReady()
    }, S.prototype._FetchFirstResult = function() {
        return s.DataProviderFeatureChecker.isTreeDataProvider(this._dataProvider) ? this._fetchFirstLeafData() : this._fetchFirstFlatData()
    }, S.prototype._fetchFirstFlatData = function() {
        const e = this._dataProvider.fetchByOffset({
            offset: 0,
            size: 1
        });
        let t = null;
        const i = function(e) {
            if (null != e) {
                const i = e.results;
                i.length > 0 && (t = this._createValueItemFromItem(i[0]))
            }
            return Promise.resolve(t)
        }.bind(this);
        return e.then(i)
    }, S.prototype._fetchFirstLeafData = function() {
        const e = this._dataProvider;
        let t = !1;
        const i = function(n, o) {
            let r, s = 0;
            if (null != o) {
                const t = e.getFetchedDataCount().childrenCountMap;
                t && t.has(o) && (r = t.get(o).count)
            }
            if (null == r && (r = n.getFetchedDataCount().count || 0), 0 === r) return Promise.resolve(null);
            const a = function(o) {
                const l = o.results;
                let d, u = 0 === r || r === s + 1;
                if (l.length) {
                    const n = l[0],
                        o = n.metadata,
                        r = e.getChildDataProvider(o.key);
                    if (null != r) d = i(r, o.key);
                    else {
                        const e = this._createValueItemFromItem(n);
                        t = !0, d = Promise.resolve(e)
                    }
                } else d = Promise.resolve(null), u = !0;
                return d.then(function(e) {
                    return u || t ? Promise.resolve(e) : (s += 1, n.fetchByOffset({
                        offset: s,
                        size: 1
                    }).then(a))
                })
            }.bind(this);
            return n.fetchByOffset({
                offset: s,
                size: 1
            }).then(a)
        }.bind(this);
        return i(e, null)
    }, S.prototype._ClearSelection = function() {
        this._SetCollectionCurrentRow({
            rowKey: null
        }), this._SetCollectionSelectedKeySet(new v.KeySetImpl([]))
    }, S.prototype._clearContextRenderPromiseFunctions = function(e) {
        e.renderDone = null, e.renderError = null
    }, S.prototype._GetDefaultCollectionRendererSelectionMode = function() {
        return s.Assert.failedInAbstractFunction(), null
    }, S.prototype._defaultCollectionRenderer = function(e) {
        var t, i = e.renderDone,
            n = e.renderError;
        if (this._resultsElem) t = this._resultsElem[0], _.getContext(t).getBusyContext().whenReady().then(function() {
            t.data = e.data, t.selected = e.selected, t.currentItem = e.currentRow.rowKey, this._clearContextRenderPromiseFunctions(e), i()
        }.bind(this), function(t) {
            d.warn("Select: busyContext promise rejected before setting props on listView: " + t), this._clearContextRenderPromiseFunctions(e), n(t)
        }.bind(this));
        else {
            var o = a(e.parentElement).find(".oj-searchselect-results-placeholder")[0],
                r = e.idSuffix;
            (t = document.createElement("oj-list-view")).setAttribute("data-oj-internal", ""), t.setAttribute("data-oj-binding-provider", "none"), t.setAttribute("id", "oj-searchselect-results-" + r), t.setAttribute("selection-mode", this._GetDefaultCollectionRendererSelectionMode()), t.setAttribute("class", "oj-select-results oj-group-header-sm"), t.setAttribute("drill-mode", "none"), t.setAttribute("gridlines.item", "hidden");
            var l = document.createElement("template");
            l.setAttribute("slot", "noData");
            var u = document.createElement("div");
            u.setAttribute("class", "oj-searchselect-no-results-container"), l.content ? l.content.appendChild(u) : l.appendChild(u), t.appendChild(l), e.parentElement.replaceChild(t, o), this._resultsElem = a(t), this._resultsElem.on("click", F.killEvent), _.getContext(t).getBusyContext().whenReady().then(function() {
                t.addEventListener("ojItemAction", e.handleRowAction), t.addEventListener("currentItemChanged", function(t) {
                    e.currentRowKeyChangedListener(t.detail.value)
                }), e.data && s.DataProviderFeatureChecker && s.DataProviderFeatureChecker.isTreeDataProvider(e.data) && (t.setProperty("item.focusable", e => e.leaf), t.setProperty("item.selectable", e => e.leaf)), this._itemTemplate ? this._getTemplateEngineFunc().then(function(n) {
                    t.setProperty("item.renderer", this._templateItemRenderer.bind(this, n)), this._clearContextRenderPromiseFunctions(e), i()
                }.bind(this), function(t) {
                    d.warn("Select: template item renderer template engine promise rejected: " + t), this._clearContextRenderPromiseFunctions(e), n(t)
                }.bind(this)) : (t.setProperty("item.renderer", this._defaultItemRenderer.bind(this)), this._clearContextRenderPromiseFunctions(e), i())
            }.bind(this), function(t) {
                d.warn("Select: creating default listView busyContext promise rejected: " + t), this._clearContextRenderPromiseFunctions(e), n(t)
            }.bind(this))
        }
    }, S.prototype._templateCollectionRenderer = function(e) {
        var t = e.renderDone,
            i = e.renderError;
        if (this._resultsElem) {
            var n = this._collectionTemplateContext;
            n.data = e.data, n.searchText = e.searchText, n.selected = e.selected, this._clearContextRenderPromiseFunctions(e), t()
        } else {
            var o = a(e.parentElement),
                r = o.find(".oj-searchselect-results-placeholder")[0];
            this._getTemplateEngineFunc().then(function(i) {
                this._templateEngine = i, this._collectionTemplateContext = this._createCollectionTemplateContext(i, e);
                for (var n = i.execute(this._templateContextComponentElement, this._collectionTemplate, this._collectionTemplateContext), s = 0; s < n.length; s++) r.parentNode.insertBefore(n[s], r);
                r.parentNode.removeChild(r), this._resultsElem = o.find(".oj-select-results"), this._resultsElem.on("click", F.killEvent), this._clearContextRenderPromiseFunctions(e), t()
            }.bind(this), function(t) {
                d.warn("Select: template collection renderer template engine promise rejected: " + t), this._clearContextRenderPromiseFunctions(e), i(t)
            }.bind(this))
        }
    }, S.prototype._addDataProviderEventListeners = function() {
        var e = this._dataProvider;
        if (e) {
            var t = this._handleDataProviderEvent.bind(this);
            this._savedDataProviderEH = t, e.addEventListener("mutate", t), e.addEventListener("refresh", t)
        }
    }, S.prototype._removeDataProviderEventListeners = function() {
        var e = this._dataProvider,
            t = this._savedDataProviderEH;
        e && t && (e.removeEventListener("mutate", t), e.removeEventListener("refresh", t)), this._savedDataProviderEH = void 0
    }, S.prototype._handleDataProviderEvent = function(e) {
        var t = this._addBusyStateFunc("LovDropdown handling data provider event");
        _.getContext(this._containerElem[0]).getBusyContext().whenReady().then(function() {
            t()
        }, function(e) {
            d.warn("Select: LovDropdown.handleDataProviderEvent busyContext promise rejected: " + e), t()
        })
    }, S.prototype.close = function() {
        this._lastRenderResultsPromise = null;
        var e = document.activeElement;
        l.isAncestor(this.getElement(), e) && e.blur(), this._ClearSelection(), this._focusinListener && (this._containerElem[0].removeEventListener("focusin", this._focusinListener), this._focusListener = null);
        var t = {};
        t[s.PopupService.OPTION.POPUP] = this._containerElem, s.PopupService.getInstance().close(t), this._containerElem.detach(), this._dispatchEvent("dropdownClosed")
    }, S.prototype.open = function() {
        var e = this._containerElem;
        this._containerElem.removeClass(this._NO_RESULTS_FOUND_CLASSNAME), e[0] !== this._bodyElem.children().last()[0] && e.appendTo(this._bodyElem);
        var t = {};
        t[s.PopupService.EVENT.POPUP_CLOSE] = function() {
            this._dispatchEvent("closeDropdown", {
                trigger: "popupCloseEvent"
            })
        }.bind(this), t[s.PopupService.EVENT.POPUP_REMOVE] = this._surrogateRemoveHandler.bind(this), t[s.PopupService.EVENT.POPUP_AUTODISMISS] = this._clickAwayHandler.bind(this), t[s.PopupService.EVENT.POPUP_REFRESH] = function() {
            this._dispatchEvent("sizeDropdown"), this._bodyElem.append(this._dropdownPositioningProxyContainer), this._dispatchEvent("adjustDropdownPosition", {
                popupElem: e[0],
                positioningProxyElem: this._dropdownPositioningProxyContainer.children()[0]
            }), this._dropdownPositioningProxyContainer.detach()
        }.bind(this), t[s.PopupService.EVENT.POPUP_AFTER_OPEN] = function(e) {
            var t = e.popup[0];
            this._dispatchEvent("sizeDropdown"), this._bodyElem.append(this._dropdownPositioningProxyContainer), this._dispatchEvent("adjustDropdownPosition", {
                popupElem: t,
                positioningProxyElem: this._dropdownPositioningProxyContainer.children()[0]
            }), this._dropdownPositioningProxyContainer.detach(), this._fullScreenPopup && t.scrollIntoView()
        }.bind(this);
        var i = {};
        i[s.PopupService.OPTION.POPUP] = e, i[s.PopupService.OPTION.EVENTS] = t, i[s.PopupService.OPTION.LAYER_SELECTORS] = "oj-listbox-drop-layer", i[s.PopupService.OPTION.CUSTOM_ELEMENT] = !0, this._fullScreenPopup && (i[s.PopupService.OPTION.MODALITY] = s.PopupService.MODALITY.MODAL), this._dispatchEvent("openPopup", {
            psOptions: i
        })
    }, S.prototype._clickAwayHandler = function(e) {
        var t = this._containerElem,
            i = a(e.target);
        if (!i.closest(t).length && !i.closest("#" + a.escapeSelector(t.attr("data-oj-containerid"))).length) {
            var n = t.closest(".oj-listbox-drop-layer");
            n.length > 0 && i.closest(n).length > 0 || t.length > 0 && this._dispatchEvent("closeDropdown", {
                trigger: "clickAway"
            })
        }
    }, S.prototype._surrogateRemoveHandler = function() {
        this._containerElem && this._containerElem.remove()
    }, S.prototype._handleKeyDown = function(e) {
        var t = e.which || e.keyCode;
        t === F.KEYS.TAB ? this._dispatchEvent("tabOut") : t === F.KEYS.ESC && this._dispatchEvent("closeDropdown", {
            trigger: "escKeyDown"
        })
    }, S.prototype._HandleCollectionSelectedItemChanged = function(e, t) {}, S.prototype._handleCollectionCurrentRowChanged = function(e) {
        this._duringListViewInitialization || null == e || this._handlingCollectionFocusinOnce || (this._collectionContext.currentRow = {
            rowIndex: e.rowIndex,
            rowKey: e.rowKey
        }, this._handleCollectionCurrentRowKeyChanged(e.rowKey))
    }, S.prototype._handleCollectionCurrentRowKeyChanged = function(e) {
        this._duringListViewInitialization || null == e || this._handlingCollectionFocusinOnce || (this._collectionContext.currentRow.rowKey = e)
    }, S.prototype._handleRowAction = function(e, t) {
        var i = this._createValueItemFromItem(e.detail.context);
        this._handleSelection(i, e)
    }, S.prototype._handleSelection = function(e, t) {
        e && this._dispatchEvent("handleSelection", {
            valueItem: e,
            event: t
        })
    }, S.prototype._createCollectionTemplateContext = function(e, t) {
        var i = {};
        if (e) {
            i.data = t.data, i.searchText = t.searchText, e.defineTrackableProperty(i, "selected"), e.defineTrackableProperty(i, "selectedItem", void 0, t.selectedItemChangedListener);
            let n = {};
            e.defineTrackableProperty(n, "rowKey", void 0, t.currentRowKeyChangedListener), e.defineTrackableProperty(i, "currentRow", n, t.currentRowChangedListener), i.handleRowAction = t.handleRowAction
        } else d.error("JET Select: template engine not available when creating context for collectionTemplate");
        return i
    }, S.prototype._createValueItemFromItem = function(e) {
        return null == e.data || null == e.metadata ? null : {
            key: e.metadata.key,
            data: e.data,
            metadata: e.metadata
        }
    }, S.prototype._SetCollectionSelectedKeySet = function(e) {
        this._collectionContext.selected = e, null != this._collectionTemplateContext ? this._collectionTemplateContext.selected = e : null == this._collectionTemplate && this._resultsElem && this._resultsElem[0].setProperty("selected", e)
    }, S.prototype._SetCollectionCurrentRow = function(e) {
        this._collectionContext.currentRow = {
            rowIndex: e.rowIndex,
            rowKey: e.rowKey
        }, null != this._collectionTemplateContext ? (this._addListenerForRowKeyProperty(e), this._collectionTemplateContext.currentRow = e) : null == this._collectionTemplate && this._resultsElem && this._resultsElem[0].setProperty("currentItem", e.rowKey)
    }, S.prototype.getValueItemForSelection = function() {
        var e = this._collectionContext.currentRow.rowKey,
            t = this._currentFirstItem,
            i = this._collectionContext.selectedItem;
        if (null != e) {
            let i = {};
            return i.key = e, t && t.key === e && (i.data = t.data, i.metadata = t.metadata), i
        }
        return i
    }, S.prototype.getResultsCount = function() {
        return this._resultsCount
    }, S.prototype._SetCurrentFirstItem = function(e) {
        this._currentFirstItem = e
    }, S.prototype._addListenerForRowKeyProperty = function(e) {
        var t = this._collectionContext,
            i = e.rowKey;
        this._templateEngine && this._templateEngine.defineTrackableProperty(e, "rowKey", i, t.currentRowKeyChangedListener)
    }, S.prototype._FetchFirstResultForKeyboardFocus = function() {
        var e = _.getContext(this._containerElem[0]).getBusyContext();
        return this._FetchFirstResult().then(function(t) {
            return null != t && (this._focusinListener = this._handleCollectionFocusinOnce.bind(this, t), this._containerElem[0].addEventListener("focusin", this._focusinListener)), e.whenReady()
        }.bind(this))
    }, S.prototype._handleCollectionFocusinOnce = function(e) {
        if (this._containerElem[0].removeEventListener("focusin", this._focusinListener), this._focusinListener = null, !l.recentPointer()) {
            var t = this._addBusyStateFunc("LovDropdown setting selected KeySet on focusin");
            this._handlingCollectionFocusinOnce = !0, this._SetCollectionCurrentRow({
                rowKey: e.key
            }), _.getContext(this._containerElem[0]).getBusyContext().whenReady().then(function() {
                this._handlingCollectionFocusinOnce = !1, t()
            }.bind(this))
        }
    };
    const I = function(e) {
        this._addBusyStateFunc = e.addBusyStateFunc, this._forceReadOnly = e.forceReadOnly, this._createOrUpdateReadonlyDivFunc = e.createOrUpdateReadonlyDivFunc, this._containerElem = this._createInnerDom(e);
        var t = a(this._containerElem).find("input." + e.className + "-input");
        this._inputElem = t[0]
    };
    I.prototype.getElement = function() {
        return this._containerElem
    }, I.prototype.getInputElem = function() {
        return this._inputElem
    }, I.prototype.getInputText = function() {
        return this._inputElem.value || ""
    }, I.prototype._createInnerDom = function(e) {
        var t = e.className,
            i = e.componentId,
            n = e.inputType,
            o = e.enabled,
            r = e.readOnly,
            s = e.ariaLabel,
            a = e.ariaControls,
            l = e.cachedMainFieldInputElement,
            d = document.createElement("div");
        d.setAttribute("class", "oj-text-field-container oj-searchselect-main-field oj-text-field-has-end-slot"), d.setAttribute("role", "presentation");
        var u = document.createElement("div");
        u.setAttribute("class", "oj-text-field-middle"), d.appendChild(u);
        var c = l || document.createElement("input");
        return c.setAttribute("id", i + "|input"), c.setAttribute("autocomplete", "off"), c.setAttribute("autocorrect", "off"), c.setAttribute("autocapitalize", "off"), c.setAttribute("spellcheck", "false"), c.setAttribute("class", t + "-input oj-text-field-input"), c.setAttribute("aria-autocomplete", "list"), c.setAttribute("placeholder", e.placeholder), c.disabled = !o && !r, (r || this._forceReadOnly && o) && c.setAttribute("readonly", "true"), r || (c.setAttribute("role", "combobox"), c.setAttribute("aria-expanded", "false")), s && c.setAttribute("aria-label", s), a && c.setAttribute("aria-controls", a), null !== n && "" !== n ? c.setAttribute("type", n) : c.setAttribute("type", "text"), u.appendChild(c), e.endContent && d.appendChild(e.endContent), r && this._createOrUpdateReadonlyDivFunc(c), d
    }, I.prototype.updateLabel = function(e, t) {
        e ? (this._inputElem.setAttribute("aria-labelledby", e), this._inputElem.removeAttribute("aria-label")) : t && (this._inputElem.setAttribute("aria-label", t), this._inputElem.removeAttribute("aria-labelledby"))
    }, s.__registerWidget("oj.ojSelectBase", a.oj.editableValue, {
        defaultElement: "<input>",
        widgetEventPrefix: "oj",
        _ALLOWED_INPUT_TYPES: ["email", "number", "search", "tel", "text", "url"],
        _OPTIONS_REQUIRING_REFRESH: new Set(["disabled", "readOnly", "placeholder", "data"]),
        options: {
            placeholder: "",
            data: null,
            required: !1,
            virtualKeyboard: "search",
            readOnly: !1,
            itemText: "label",
            labelledBy: null
        },
        widget: function() {
            return a(this.OuterWrapper)
        },
        _ComponentCreate: function() {
            this._super(), this._fullScreenPopup = "phone" === u.getDeviceRenderMode()
        },
        _AfterCreate: function() {
            this._super(), this._initInputIdLabelForConnection(this._GetContentElement()[0], this.OuterWrapper.id, this.options.labelledBy)
        },
        _IsTextFieldComponent: function() {
            return !0
        },
        _GetContentWrapper: function() {
            return this._lovMainField.getElement().querySelector(".oj-text-field-middle")
        },
        _HandleAfterFocusToggle: function(e, t) {
            "focusout" === t && this._abstractLovBase.isDropdownOpen() && e.classList.add("oj-focus")
        },
        _IsRequired: function() {
            return this.options.required
        },
        _labelledByUpdatedForInputComp: t.EditableValueUtils._labelledByUpdatedForInputComp,
        _initInputIdLabelForConnection: t.EditableValueUtils._initInputIdLabelForConnection,
        _linkLabelForInputComp: t.EditableValueUtils._linkLabelForInputComp,
        _AfterSetOptionRequired: t.EditableValueUtils._AfterSetOptionRequired,
        _refreshRequired: t.EditableValueUtils._refreshRequired,
        _setTabIndex: t.EditableValueUtils._setTabIndex,
        _AriaRequiredUnsupported: function() {
            return !1
        },
        _VerifyConnectedForSetup: function() {
            return !0
        },
        _SetInputType: t.EditableValueUtils._SetInputType,
        _GetStyleClassComponentName: function() {
            return s.Assert.failedInAbstractFunction(), ""
        },
        _GetTemplateSlot: function(e) {
            var t = m.CustomElementUtils.getSlotMap(this.OuterWrapper)[e];
            return t && t[0] && "TEMPLATE" === t[0].tagName ? t[0] : null
        },
        _SetupSelectResources: function(e) {
            this._loadingIndicatorCount = 0;
            for (var t = this.OuterWrapper, i = t.childNodes, n = [], o = 0; o < i.length; o++) n.push(i[o]);
            var r = this.options;
            this._wrapDataProviderIfNeeded(r.data), this._addDataProviderEventListeners(), this._SetInputType(this._ALLOWED_INPUT_TYPES);
            var s = this,
                l = function() {
                    return s.getTranslatedString.apply(s, arguments)
                },
                d = function(e) {
                    return this._AddBusyState(e)
                }.bind(this),
                u = t.getAttribute("id");
            u || (u = "oj-" + this._GetStyleClassComponentName() + "-" + F.nextUid(), t.setAttribute("id", u));
            var c = u;
            this._idSuffix = u;
            var h = !r.disabled;
            this._lovEnabled = h;
            var p = r.readOnly || !1,
                f = this.element;
            f.prop("disabled", !(h && !p));
            var v = this._cssOptionDefaults.showIndicatorDelay;
            v = parseInt(v, 10), v = isNaN(v) ? 250 : v, this._showIndicatorDelay = v;
            var m = f.attr("type"),
                b = "oj-searchselect";
            this._className = b, this._initContainer(b, c, p);
            var y = new I({
                className: b,
                ariaLabel: t.getAttribute("aria-label"),
                ariaControls: t.getAttribute("aria-controls"),
                componentId: u,
                inputType: m,
                enabled: h,
                readOnly: p,
                placeholder: r.placeholder,
                addBusyStateFunc: d,
                forceReadOnly: this._fullScreenPopup,
                endContent: this._createMainFieldEndContent(h, p),
                cachedMainFieldInputElement: e,
                createOrUpdateReadonlyDivFunc: this._createOrUpdateReadonlyDiv.bind(this)
            });
            this._lovMainField = y, this._initLovMainField(y);
            var g = y.getElement();
            t.appendChild(g);
            var E = this._createFilterInputText(b, c);
            this._fullScreenPopup || (E.style.visibility = "hidden", t.appendChild(E)), this._filterInputText = E;
            var C = this._CreateLovDropdown();
            this._initLovDropdownFunc = function(e) {
                var i = function(t) {
                    this._fullScreenPopup ? (E.setAttribute("aria-controls", t.id), _.getContext(E).getBusyContext().whenReady().then(function() {
                        e && e()
                    })) : e && e()
                }.bind(this);
                this._initLovDropdown(c, m, u, l, d, i);
                var n = C.getElement();
                t.appendChild(n), n.addEventListener("lovDropdownEvent", this._handleLovDropdownEvent.bind(this)), this._fullScreenPopup || n.addEventListener("mousedown", function() {
                    this._mousedownOnDropdown = !0
                }.bind(this)), a(y.getInputElem()).attr("aria-owns", n.id)
            }.bind(this), this._lovDropdown = C;
            var P = new w({
                className: b,
                dataProvider: this._wrappedDataProvider,
                containerElem: t,
                fullScreenPopup: this._fullScreenPopup,
                idSuffix: c,
                lovMainField: y,
                filterInputText: E,
                lovDropdown: C,
                liveRegion: this._liveRegion,
                enabled: h,
                readOnly: p,
                value: r.value,
                getTranslatedStringFunc: l,
                addBusyStateFunc: d,
                showMainFieldFunc: this._showMainField.bind(this),
                setFilterFieldTextFunc: this._SetFilterFieldText.bind(this),
                setUiLoadingStateFunc: this._setUiLoadingState.bind(this),
                isValueForPlaceholderFunc: this._IsValueForPlaceholder.bind(this),
                isShowValueInFilterFieldFunc: this._IsShowValueInFilterField.bind(this)
            });
            if (this._abstractLovBase = P, f.hide().attr("aria-hidden", !0), e) {
                var S = this.options.describedBy;
                S && this._describedByUpdated(null, S)
            }
            if (this._refreshRequired(r.required), this._initInputIdLabelForConnection(this._GetContentElement()[0], t.id, this.options.labelledBy), this._updateLabel(), this._setTabIndex(f[0], y.getInputElem()), p) {
                var D = this._getReadonlyDiv();
                D && this._setTabIndex(f[0], D)
            }
            for (var x = 0; x < n.length; x++) t.appendChild(n[x]);
            this._SetupInitialValue()
        },
        _AddBusyState: function(e, t) {
            var i = t || this.OuterWrapper,
                n = F.addBusyState(i, e);
            if (this._makingInternalValueChange) {
                var o = this._chainInternalValueChangePromise();
                return function() {
                    n(), o()
                }
            }
            return n
        },
        _StartMakingInternalValueChange: function() {
            var e = this._makingInternalValueChangePromise,
                t = this._chainInternalValueChangePromise();
            return this._makingInternalValueChange = !0, e || this._queueValueChangeDeferredCallback(function() {
                this._makingInternalValueChange = !1, this._makingInternalValueChangePromise = null, this._deferredMakingInternalValueChangeQueueCallback = null
            }.bind(this)), t
        },
        _chainInternalValueChangePromise: function() {
            var e = null,
                t = new Promise(function(t) {
                    e = t
                }),
                i = F.addBusyState(this.OuterWrapper, "Processing value change");
            t.then(i, i);
            var n = t;
            this._makingInternalValueChangePromise && (n = Promise.all([this._makingInternalValueChangePromise, t]));
            var o = function() {
                n === this._makingInternalValueChangePromise && this._deferredMakingInternalValueChangeQueueCallback()
            }.bind(this);
            return n.then(o, o), this._makingInternalValueChangePromise = n, e
        },
        _queueValueChangeDeferredCallback: function(e) {
            var t = F.addBusyState(this.OuterWrapper, "queueing deferred callback while making value change"),
                i = this._deferredMakingInternalValueChangeQueueCallback;
            this._deferredMakingInternalValueChangeQueueCallback = function() {
                try {
                    i && i(), e()
                } finally {
                    t()
                }
            }
        },
        _SetupInitialValue: function() {
            s.Assert.failedInAbstractFunction()
        },
        _ReleaseSelectResources: function(e) {
            for (var t = this._loadingIndicatorCount; t >= 0; t--) this._setUiLoadingState("stop");
            this._loadingIndicatorCount = 0, this._savedLoadingIndicator = !1, this._mousedownOnDropdown = !1, this._deferredSetDisplayValue = null, this._bReleasedResources && this._clearMainFieldFocusHandlerTimer(), a(this._filterInputText).remove(), e && (a(this._lovMainField.getInputElem()).detach(), this._cleanUpMainFieldInputElement(), a(this._lovMainField.getInputElem()).off(this._lovMainFieldInputEventListeners)), a(this._lovMainField.getElement()).remove(), a(this._liveRegion).remove(), this._abstractLovBase.destroy(), this._lovDropdown.getElement() && (a(this._lovDropdown.getElement()).remove(), this._lovDropdown.destroy());
            var i = this.OuterWrapper,
                n = i.classList;
            n.remove(this._className), n.remove("oj-form-control"), n.remove("oj-component"), n.remove("oj-read-only"), n.remove("oj-enabled"), n.remove("oj-disabled"), a(i).off("change", "." + this._className + "-input", F.stopEventPropagation).off(this._containerEventListeners), this._containerEventListeners = null, this.element.removeAttr("aria-hidden").show(), this._removeDataProviderEventListeners(), this._wrappedDataProvider = null, this._liveRegion = null, this._abstractLovBase = null, this._lovMainField = null, this._filterInputText = null, this._lovDropdown = null
        },
        _cleanUpMainFieldInputElement: function() {
            var e = this._lovMainField.getInputElem();
            if (s.AgentUtils.getAgentInfo().browser === s.AgentUtils.BROWSER.IE) e.removeAttribute("readonly"), e.removeAttribute("role"), e.removeAttribute("type"), e.removeAttribute("aria-controls"), e.removeAttribute("aria-expanded"), e.removeAttribute("aria-label"), e.removeAttribute("aria-labelledby");
            else if (e.hasAttributes())
                for (var t, i = e.attributes, n = i.length - 1; n >= 0; n--) t = i[n].name, F.removeAttribute(e, t);
            e.value = ""
        },
        _updateLabel: function() {
            var e, t, i = this.options,
                n = this._lovMainField,
                o = this._lovDropdown,
                r = this._filterInputText;
            i.labelledBy && (e = i.labelledBy);
            var s = this.OuterWrapper.getAttribute("aria-label");
            s && (t = s), o.updateLabel(e, t), n.updateLabel(e, t), e ? (r.setAttribute("labelled-by", e), r.setAttribute("aria-label", "")) : t && (r.setAttribute("aria-label", t), r.setAttribute("labelled-by", "")), this._fullScreenPopup && (i.labelHint ? (r.setAttribute("label-hint", i.labelHint), r.setAttribute("label-edge", "inside"), r.setAttribute("labelled-by", "")) : r.setAttribute("label-hint", ""))
        },
        _UpdateItemText: function() {
            this._lovDropdown.updateItemTextRendererFunc(this._ItemTextRenderer.bind(this))
        },
        _initContainer: function(e, t, i) {
            var n = this.OuterWrapper,
                o = a(n),
                r = n.classList;
            r.add(e), r.add("oj-form-control"), r.add("oj-component"), i ? r.add("oj-read-only") : r.add(this._lovEnabled ? "oj-enabled" : "oj-disabled"), this._fullScreenPopup ? r.add("oj-searchselect-mobile") : r.remove("oj-searchselect-mobile"), this._toggleNoValueStyleClass();
            var s = document.createElement("div");
            s.setAttribute("id", "oj-listbox-live-" + t), s.setAttribute("class", "oj-helper-hidden-accessible oj-listbox-liveregion"), s.setAttribute("aria-live", "polite"), n.appendChild(s), o.on("change", "." + e + "-input", F.stopEventPropagation), this._containerEventListeners = {
                click: F.killEventWithAncestorExceptions.bind(null, [".oj-user-assistance-inline-container"]),
                keydown: this._handleContainerKeyDown.bind(this),
                mouseup: function() {
                    o.removeClass("oj-active")
                }
            }, o.on(this._containerEventListeners), this._liveRegion = s
        },
        _toggleNoValueStyleClass: function() {
            var e = this.OuterWrapper.classList;
            this._IsValueForPlaceholder(this.options.value) ? e.add("oj-searchselect-no-value") : e.remove("oj-searchselect-no-value")
        },
        _SetFilterFieldText: function(e) {
            (this._ignoreFilterFieldRawValueChanged = !0, this._filterInputText.value = e, this._fullScreenPopup) && (this._lovDropdown.getElement().parentElement || a(this._filterInputText).find("oj-label").remove());
            this._filterInputText && (_.getContext(this._filterInputText).getBusyContext().isReady() && this._filterInputText.refresh());
            this._ignoreFilterFieldRawValueChanged = !1
        },
        _IsShowValueInFilterField: function() {
            return !1
        },
        _ShowFilterField: function(e) {
            if (!this._fullScreenPopup) {
                var t = this._filterInputText;
                if ("hidden" === t.style.visibility) {
                    var i = this._lovMainField,
                        n = i.getInputElem();
                    if (!e) {
                        var o = this._IsShowValueInFilterField() ? n.value : "";
                        this._SetFilterFieldText(o), F.copyAttribute(n, "aria-describedby", t, "described-by")
                    }
                    var r = this._getFilterInputElem();
                    r && (r.setAttribute("role", "combobox"), e || (F.copyAttribute(n, "aria-required", r, "aria-required"), F.copyAttribute(n, "aria-invalid", r, "aria-invalid"))), i.getInputElem().style.visibility = "hidden", t.style.visibility = "", this.OuterWrapper.appendChild(t)
                }
                if (!e)
                    if (s.AgentUtils.getAgentInfo().browser === s.AgentUtils.BROWSER.IE) {
                        var a = this._AddBusyState("Select transferring focus to filter field");
                        setTimeout(function() {
                            t.focus(), a()
                        }, 0)
                    } else t.focus()
            }
        },
        _showMainField: function() {
            if (!this._fullScreenPopup) {
                var e = this._filterInputText;
                if ("hidden" !== e.style.visibility) {
                    var t = this._lovMainField.getInputElem();
                    t.setSelectionRange(0, 0), t.style.visibility = "", e.style.visibility = "hidden"
                }
            }
        },
        _IsFilterInputTextCleared: function() {
            var e = this._filterInputText.rawValue;
            return null == e || "" === e
        },
        _handleContainerKeyDown: function(e) {
            if (this._lovEnabled && !this.options.readOnly && !F.isControlOrFunctionKey(e)) {
                var t = e.which || e.keyCode;
                if (t !== F.KEYS.PAGE_UP && t !== F.KEYS.PAGE_DOWN) {
                    var i = this._abstractLovBase,
                        n = this._lovDropdown;
                    switch (t) {
                        case F.KEYS.UP:
                        case F.KEYS.DOWN:
                            if (i.isDropdownOpen())
                                if (h.focusFirstTabStop(n.getElement()), this.OuterWrapper.classList.add("oj-focus"), s.AgentUtils.getAgentInfo().browser === s.AgentUtils.BROWSER.IE) {
                                    var o = this._AddBusyState("Select showing filter field while arrowing into dropdown");
                                    setTimeout(function() {
                                        this._ShowFilterField(!0), o()
                                    }.bind(this), 0)
                                } else this._ShowFilterField(!0);
                            else this._openDropdown();
                            e.preventDefault();
                            break;
                        case F.KEYS.ENTER:
                            e.preventDefault(), this._HandleContainerKeyDownEnter(e);
                            break;
                        case F.KEYS.TAB:
                            this._HandleContainerKeyDownTab(e);
                            break;
                        case F.KEYS.ESC:
                            i.isDropdownOpen() && (i.cancel(), e.preventDefault())
                    }
                } else e.preventDefault()
            }
        },
        _HandleContainerKeyDownEnter: function(e) {
            s.Assert.failedInAbstractFunction()
        },
        _HandleContainerKeyDownTab: function(e) {
            s.Assert.failedInAbstractFunction()
        },
        _handleContainerMouseDown: function(e) {
            var t = this._abstractLovBase;
            this._mousedownOnDropdown = !1, this._lovEnabled || e.preventDefault();
            var i = this.OuterWrapper,
                n = a(i),
                o = 0 === e.button,
                r = !1,
                s = this._lovMainField.getInputElem();
            if (o && !this.options.readOnly) {
                if (this._fullScreenPopup) {
                    var d = i.querySelector(".oj-searchselect-clear-value");
                    if (d && l.isAncestorOrSelf(d, e.target)) return
                }
                if (this._lovEnabled)
                    if (t.isDropdownOpen()) {
                        if (!this._fullScreenPopup && t.isDropdownOpen()) {
                            var u = this._filterInputText.querySelector(".oj-searchselect-arrow");
                            l.isAncestorOrSelf(u, e.target) && this._CloseDropdown()
                        }
                    } else {
                        var c = this._lovMainField.getElement().querySelector(".oj-searchselect-arrow"),
                            h = l.isAncestorOrSelf(c, e.target);
                        !this._fullScreenPopup && h && s.setSelectionRange(1e6, 1e6), this._openDropdown(), this._fullScreenPopup && e.preventDefault()
                    }
            }
            if (n.addClass("oj-active"), o) {
                if (!this._fullScreenPopup && this._lovEnabled) {
                    var p = this._getFilterInputElem();
                    "hidden" === this._filterInputText.style.visibility ? (e.target !== p && e.target !== s || (r = !0), s.focus()) : this.options.readOnly || (e.target === p && (r = !0), this._ShowFilterField())
                }
                r || e.preventDefault()
            }
        },
        _handleLovDropdownEvent: function(e) {
            var t = e.detail,
                i = this._abstractLovBase;
            if (i) switch (t.subtype) {
                case "closeDropdown":
                    this._mousedownOnDropdown = !1, "escKeyDown" === t.trigger ? this._filterInputText.focus() : "clickAway" === t.trigger && (this._userHasTypedFilterText = !1, this._showMainField(), this.OuterWrapper.classList.remove("oj-focus")), this._CloseDropdown();
                    break;
                case "tabOut":
                    this._HandleLovDropdownEventTabOut(e);
                    break;
                case "sizeDropdown":
                    i.sizeDropdown();
                    break;
                case "adjustDropdownPosition":
                    var n = i.getDropdownPosition();
                    if (this._fullScreenPopup) a(t.popupElem).position(n);
                    else {
                        var o = t.positioningProxyElem,
                            r = a(o).find(".oj-select-results")[0],
                            l = a(t.popupElem),
                            d = l.find(".oj-select-results");
                        o.style.width = l.outerWidth() + "px", r.style.height = d.css("max-height"), a(o).position(n)
                    }
                    break;
                case "openPopup":
                    var u = t.psOptions;
                    u[s.PopupService.OPTION.LAUNCHER] = this.element, u[s.PopupService.OPTION.POSITION] = i.getDropdownPosition(), s.PopupService.getInstance().open(u);
                    break;
                case "handleSelection":
                    this._HandleLovDropdownEventSelection(e);
                    break;
                case "dropdownClosed":
                    this._HandleLovDropdownClosed(e)
            }
        },
        _HandleLovDropdownClosed: function(e) {
            this._searchTextOnKeyDown = void 0
        },
        _HandleLovDropdownEventTabOut: function(e) {
            s.Assert.failedInAbstractFunction()
        },
        _HandleLovDropdownEventSelection: function(e) {
            s.Assert.failedInAbstractFunction()
        },
        _CloseDropdown: function() {
            this._mousedownOnDropdown = !1;
            var e = this._lovDropdown.getElement();
            if (null != e) {
                var t = document.activeElement;
                t && l.isAncestor(e, t) && t.blur(), this._abstractLovBase.closeDropdown()
            }
        },
        _createMainFieldEndContent: function(e, t) {
            var i = document.createElement("span");
            i.setAttribute("class", "oj-text-field-end");
            var n = this._createDropdownIcon(e, t);
            if (i.appendChild(n), this._fullScreenPopup) {
                var o = this._createClearValueIcon();
                i.appendChild(o)
            }
            return i
        },
        _createDropdownIcon: function(e, t) {
            var i = this._className,
                n = document.createElement("a"),
                o = i + "-arrow " + i + "-open-icon " + i + "-icon oj-component-icon oj-clickable-icon-nocontext";
            return t || e || (o += " oj-disabled"), n.setAttribute("class", o), n.setAttribute("role", "presentation"), n
        },
        _createClearValueIcon: function() {
            var e = this._className,
                t = document.createElement("a"),
                i = e + "-clear-value " + e + "-clear-value-icon " + e + "-icon oj-component-icon oj-clickable-icon-nocontext";
            t.setAttribute("class", i), t.setAttribute("role", "button");
            var n = this.getTranslatedString("labelAccClearValue");
            return t.setAttribute("aria-label", n), t.addEventListener("click", this._HandleClearValueIconClick.bind(this)), t
        },
        _HandleClearValueIconClick: function() {
            s.Assert.failedInAbstractFunction()
        },
        _GetDefaultValueItemForPlaceholder: function() {
            return s.Assert.failedInAbstractFunction(), null
        },
        _initLovMainField: function(e) {
            this._lovMainFieldInputEventListeners = {
                focus: function(e) {
                    if (F.killEvent(e), !this._fullScreenPopup && !this.options.readOnly) {
                        this._clearMainFieldFocusHandlerTimer();
                        var t = this._AddBusyState("Select showing filter field after focusing main field");
                        this._mainFieldFocusHandlerTimer = E.getTimer(0);
                        var i = this._lovMainField.getInputElem(),
                            n = {
                                selectionStart: i.selectionStart,
                                selectionEnd: i.selectionEnd,
                                selectionDirection: i.selectionDirection
                            };
                        this._mainFieldFocusHandlerTimer.getPromise().then(function(e) {
                            if (e) {
                                this._mainFieldFocusHandlerTimer = null, this._ShowFilterField();
                                var o = this._lovMainField.getInputElem();
                                i === o && (n = {
                                    selectionStart: i.selectionStart,
                                    selectionEnd: i.selectionEnd,
                                    selectionDirection: i.selectionDirection
                                });
                                var r = this._getFilterInputElem();
                                r && r.setSelectionRange(n.selectionStart, n.selectionEnd, n.selectionDirection)
                            }
                            t()
                        }.bind(this))
                    }
                }.bind(this)
            }, a(e.getInputElem()).on(this._lovMainFieldInputEventListeners), a(e.getElement()).on({
                mousedown: this._handleContainerMouseDown.bind(this)
            })
        },
        _clearMainFieldFocusHandlerTimer: function() {
            this._mainFieldFocusHandlerTimer && (this._mainFieldFocusHandlerTimer.clear(), this._mainFieldFocusHandlerTimer = null)
        },
        _getFilterInputElem: function() {
            var e = a(this._filterInputText).find("input");
            return e.length > 0 ? e[0] : null
        },
        _createFilterInputText: function(e, t) {
            var i = this.OuterWrapper.getAttribute("aria-label"),
                n = this.OuterWrapper.getAttribute("aria-controls"),
                o = this.options,
                r = document.createElement("oj-input-text");
            if (r.setAttribute("display-options.messages", "none"), r.setAttribute("user-assistance-density", "compact"), r.setAttribute("id", e + "-filter-" + t), r.setAttribute("class", e + "-filter"), r.setAttribute("clear-icon", this._fullScreenPopup ? "conditional" : "never"), r.setAttribute("autocomplete", "off"), r.setAttribute("aria-autocomplete", "list"), r.setAttribute("data-oj-internal", ""), r.setAttribute("data-oj-context", ""), r.setAttribute("data-oj-binding-provider", "none"), o.placeholder && r.setAttribute("placeholder", o.placeholder), r.setAttribute("disabled", o.disabled), i && r.setAttribute("aria-label", i), !this._fullScreenPopup && n && r.setAttribute("aria-controls", n), r.setAttribute("virtual-keyboard", o.virtualKeyboard), this._fullScreenPopup) {
                var s = this.getTranslatedString("cancel"),
                    d = document.createElement("span");
                d.setAttribute("id", "cancelButton_" + this._idSuffix), d.setAttribute("slot", "start"), d.setAttribute("class", e + "-back-button"), d.setAttribute("aria-label", s), d.addEventListener("click", function() {
                    this._lovMainField.getInputElem().focus(), this._abstractLovBase.cancel()
                }.bind(this)), r.appendChild(d);
                var u = document.createElement("span");
                u.setAttribute("class", e + "-back-icon " + e + "-icon oj-component-icon oj-clickable-icon-nocontext"), d.appendChild(u)
            } else {
                var c = document.createElement("a");
                c.setAttribute("class", e + "-arrow " + e + "-open-icon " + e + "-icon oj-component-icon oj-clickable-icon-nocontext"), c.setAttribute("slot", "end"), r.appendChild(c)
            }
            var h = a(this.OuterWrapper);
            return r.addEventListener("rawValueChanged", function(e) {
                this._ignoreFilterFieldRawValueChanged || (this._userHasTypedFilterText = !0, this._updateResults(e))
            }.bind(this)), r.addEventListener("focus", function() {
                h.addClass("oj-focus"), this._mousedownOnDropdown = !1
            }), r.addEventListener("blur", function(e) {
                if (h.removeClass("oj-focus"), !this._fullScreenPopup) {
                    var t = e.relatedTarget && l.isAncestor(this._lovDropdown.getElement(), e.relatedTarget),
                        i = document.activeElement && l.isAncestor(r, document.activeElement);
                    t || this._mousedownOnDropdown || i || this._showMainField()
                }
                this._mousedownOnDropdown = !1
            }.bind(this)), this._fullScreenPopup || r.addEventListener("mousedown", this._handleContainerMouseDown.bind(this)), r
        },
        _CreateLovDropdown: function() {
            return s.Assert.failedInAbstractFunction(), null
        },
        _initLovDropdown: function(e, t, i, n, o, r) {
            this._lovDropdown.init({
                dataProvider: this._wrappedDataProvider,
                className: "oj-select",
                parentId: i,
                idSuffix: e,
                fullScreenPopup: this._fullScreenPopup,
                inputType: t,
                bodyElem: a(this.OuterWrapper).closest("body")[0],
                itemTemplate: this._GetTemplateSlot("itemTemplate"),
                collectionTemplate: this._GetTemplateSlot("collectionTemplate"),
                getTemplateEngineFunc: this._loadTemplateEngine.bind(this),
                templateContextComponentElement: this.OuterWrapper,
                getTranslatedStringFunc: n,
                addBusyStateFunc: o,
                itemTextRendererFunc: this._ItemTextRenderer.bind(this),
                filterInputText: this._filterInputText,
                afterDropdownInitFunc: r,
                getThrottlePromiseFunc: this._GetThrottlePromise.bind(this),
                isValueForPlaceholderFunc: this._IsValueForPlaceholder.bind(this),
                isValueItemForPlaceholderFunc: this._IsValueItemForPlaceholder.bind(this),
                styleClassComponentName: this._GetStyleClassComponentName()
            })
        },
        _openDropdown: function() {
            if (this._mousedownOnDropdown = !1, this._initLovDropdownFunc) {
                var e = this._initLovDropdownFunc;
                this._initLovDropdownFunc = null, e(function() {
                    this._abstractLovBase && this._abstractLovBase.openDropdown()
                }.bind(this))
            } else this._abstractLovBase.openDropdown()
        },
        _updateResults: function(e) {
            if (this._initLovDropdownFunc) {
                var t = this._initLovDropdownFunc;
                this._initLovDropdownFunc = null, t(function() {
                    this._abstractLovBase && this._abstractLovBase.updateResults(e)
                }.bind(this))
            } else this._abstractLovBase.updateResults(e)
        },
        _loadTemplateEngine: function() {
            if (!this._templateEngine) {
                var e = this._AddBusyState("Select loading template engine");
                return new Promise(function(t, i) {
                    u.__getTemplateEngine().then(function(i) {
                        this._templateEngine = i, t(i), e()
                    }.bind(this), function(t) {
                        i(new Error("Error loading template engine: " + t)), e()
                    })
                }.bind(this))
            }
            return Promise.resolve(this._templateEngine)
        },
        refresh: function() {
            if (this._makingInternalValueChange) this._queueValueChangeDeferredCallback(function() {
                this.refresh()
            }.bind(this));
            else {
                var e = this._lovMainField.getInputElem();
                this._bSuperRefreshing = !0, this._super(), this._bSuperRefreshing = !1, this._ReleaseSelectResources(!0), this._SetupSelectResources(e), this._initComponentMessaging(), this._deferredSetDisplayValue && this._deferredSetDisplayValue()
            }
        },
        _SetupResources: function() {
            this._super(), this._bReleasedResources && (this._bReleasedResources = !1, this._SetupSelectResources(), this._initComponentMessaging())
        },
        _ReleaseResources: function() {
            this._super(), this._bReleasedResources = !0, this._ReleaseSelectResources()
        },
        validate: function() {
            if (this._makingInternalValueChange) {
                var e, t, i = new Promise(function(i, n) {
                    e = i, t = n
                });
                return this._queueValueChangeDeferredCallback(function() {
                    this.validate().then(e, t)
                }.bind(this)), i
            }
            return this._ValidateHelper()
        },
        _ValidateHelper: function() {
            s.Assert.failedInAbstractFunction()
        },
        _GetValueItemPropertyName: function() {
            s.Assert.failedInAbstractFunction()
        },
        _SyncValueWithValueItem: function(e, t, i) {
            s.Assert.failedInAbstractFunction()
        },
        _UpdateValueItem: function(e) {
            s.Assert.failedInAbstractFunction()
        },
        _setOptions: function(e, t) {
            if (this._makingInternalValueChange) this._queueValueChangeDeferredCallback(function() {
                var i = Object.assign({}, e);
                i.hasOwnProperty("labelledBy") && i.labelledBy === this.options.labelledBy && (delete i.labelledBy, 0 === Object.entries(i).length) || this._setOptions(i, t)
            }.bind(this));
            else {
                var i;
                this._processSetOptions || (this._processSetOptions = []), this._processSetOptions.push({});
                for (var n = !1, o = e.hasOwnProperty("data"), r = e.hasOwnProperty("value"), s = e.hasOwnProperty(this._GetValueItemPropertyName()), a = !1, l = Object.keys(e), d = 0; d < l.length; d++)
                    if (this._OPTIONS_REQUIRING_REFRESH.has(l[d])) {
                        a = !0;
                        break
                    }
                a && (r ? (this._deferSettingValue = !0, i = this._AddBusyState("Defer setting value")) : o && !s && (n = this._valueItemSetInternally));
                var u = !1;
                !this._fullScreenPopup && this._lovEnabled && "hidden" !== this._filterInputText.style.visibility && (u = !0);
                try {
                    this._super(e, t);
                    var c = this._processSetOptions.pop();
                    if (c.forRefresh && c.forRefresh(), i && (this._deferSettingValue = !1), c.value) c.value();
                    else if (n) {
                        var h = this._StartMakingInternalValueChange();
                        this._setOption("value", this.options.value), h()
                    }
                    if (u && "hidden" === this._filterInputText.style.visibility) _.getContext(this._filterInputText).getBusyContext().whenReady().then(function() {
                        this._ShowFilterField()
                    }.bind(this))
                } finally {
                    i && i()
                }
            }
        },
        _setOption: function(e, t, i) {
            var n, o = this._abstractLovBase;
            if (e === this._GetValueItemPropertyName() && !this._IsValueItemForPlaceholder(t) && null == t.data) throw new Error("Select Single: value-item contains key but no data");
            if (this._super(e, t, i), this._processSetOptions && this._processSetOptions.length > 0 && (n = this._processSetOptions[this._processSetOptions.length - 1]), e === this._GetValueItemPropertyName()) this._valueItemSetInternally = !1, this._SyncValueWithValueItem(t, this.options.value);
            else if ("value" === e) {
                var r = function() {
                    o.setValue(t), this._IsValueForPlaceholder(t) ? this._SetValueItem(this._GetDefaultValueItemForPlaceholder()) : this._UpdateValueItem(t), this._SetDisplayValue()
                }.bind(this);
                n ? n.value = r : r()
            } else if (this._OPTIONS_REQUIRING_REFRESH.has(e)) {
                var s = function() {
                    this.refresh()
                }.bind(this);
                n ? n.forRefresh = s : s()
            } else if ("labelledBy" === e) {
                if (this.options.labelledBy) {
                    var a = this._GetContentElement()[0].id;
                    this._labelledByUpdatedForInputComp(this.options.labelledBy, a)
                }
                this._updateLabel()
            } else "itemText" === e && this._UpdateItemText()
        },
        _AfterSetOption: function(e, t) {
            switch (this._superApply(arguments), e) {
                case "required":
                    this._AfterSetOptionRequired(e);
                    break;
                case "virtualKeyboard":
                    this._SetInputType(this._ALLOWED_INPUT_TYPES), this.refresh();
                    break;
                case "labelHint":
                case "labelEdge":
                    this._updateLabel()
            }
        },
        _AfterSetOptionValue: function(e, t) {
            this._superApply(arguments), "value" === e && this._toggleNoValueStyleClass()
        },
        _NotifyDetached: function() {
            this._superApply(arguments), this._CloseDropdown()
        },
        _NotifyHidden: function() {
            this._superApply(arguments), this._CloseDropdown()
        },
        _NotifyContextMenuGesture: function(e, t, i) {
            var n = this._GetMessagingLauncherElement();
            this._OpenContextMenu(t, i, {
                launcher: n
            })
        },
        _NotifyMessagingStrategyQueueAction: function(e) {
            this._messagingStrategyQueueActionPromise = e, e.then(function() {
                this._messagingStrategyQueueActionPromise = null
            }.bind(this))
        },
        _GetContentElement: function() {
            return this._lovMainField ? a(this._lovMainField.getInputElem()) : this.element
        },
        _wrapDataProviderIfNeeded: function(e) {
            if (F.isDataProvider(e)) {
                var t = e;
                F.isTreeDataProvider(e) ? e instanceof g || (t = new g(e)) : e instanceof y || (t = new y(e)), t = b.getEnhancedDataProvider(t, {
                    fetchFirst: {
                        caching: "visitedByCurrentIterator"
                    },
                    eventFiltering: {
                        type: "iterator"
                    }
                }), t = new C(t), this._wrappedDataProvider = t
            } else this._wrappedDataProvider = new C(null)
        },
        _addDataProviderEventListeners: function() {
            var e = this._wrappedDataProvider;
            if (e) {
                this._removeDataProviderEventListeners();
                var t = this._HandleDataProviderEvent.bind(this);
                this._savedDataProviderEH = t, e.addEventListener("mutate", t), e.addEventListener("refresh", t)
            }
        },
        _removeDataProviderEventListeners: function() {
            var e = this._wrappedDataProvider,
                t = this._savedDataProviderEH;
            e && t && (e.removeEventListener("mutate", t), e.removeEventListener("refresh", t), this._savedDataProviderEH = void 0)
        },
        _HandleDataProviderEvent: function(e) {},
        _ItemTextRenderer: function(e) {
            var t;
            if (e && e.data) {
                var i = this.options.itemText;
                t = "string" == typeof i ? e.data[i] : i(e)
            }
            return t
        },
        _IsValueItemForPlaceholder: function(e) {
            return s.Assert.failedInAbstractFunction(), !1
        },
        _IsValueForPlaceholder: function(e) {
            return s.Assert.failedInAbstractFunction(), !1
        },
        _SetValueItem: function(e) {
            s.Assert.failedInAbstractFunction()
        },
        _FetchByKeysFromDataProvider: function(e) {
            var t;
            if (this._cachedFetchByKeys && this._cachedFetchByKeys.promise && s.Object.compareValues(e, this._cachedFetchByKeys.key)) t = this._cachedFetchByKeys.promise;
            else {
                var i = this._AddBusyState("fetching selected data"),
                    n = !1;
                "init" === this._abstractLovBase.getFetchType() && (this._abstractLovBase.isDropdownOpen() || (n = !0, this._setUiLoadingState("start"))), t = new Promise(function(t, i) {
                    this._wrappedDataProvider.fetchByKeys({
                        keys: new Set(e)
                    }).then(function(e) {
                        var i = [],
                            n = [];
                        e.results.forEach(function(e) {
                            i.push(e.data), n.push(e.metadata)
                        }), t({
                            data: i,
                            metadata: n
                        })
                    }, function(e) {
                        i(e)
                    })
                }.bind(this)), this._cachedFetchByKeys = {
                    key: e,
                    promise: t
                };
                var o = function() {
                    this._bReleasedResources || (this._cachedFetchByKeys = void 0, n && this._setUiLoadingState("stop")), i()
                }.bind(this);
                t.then(function() {
                    o()
                }, function(e) {
                    d.warn("Select: fetchByKeys promise was rejected: " + e), o()
                })
            }
            return t
        },
        _setUiLoadingState: function(e) {
            "start" === e ? (this._loadingIndicatorTimer && this._loadingIndicatorTimer.clear(), this._loadingIndicatorTimer = E.getTimer(this._showIndicatorDelay), this._loadingIndicatorTimer.getPromise().then(function(e) {
                e && this._addLoadingIndicator()
            }.bind(this))) : "stop" === e && (this._loadingIndicatorTimer && (this._loadingIndicatorTimer.clear(), this._loadingIndicatorTimer = null), this._removeLoadingIndicator())
        },
        _addLoadingIndicator: function() {
            this._loadingIndicatorCount += 1, this._savedLoadingIndicator || (this._SetLoading(), this._savedLoadingIndicator = !0)
        },
        _removeLoadingIndicator: function() {
            this._loadingIndicatorCount > 0 && (this._loadingIndicatorCount -= 1), 0 === this._loadingIndicatorCount && this._savedLoadingIndicator && (this._ClearLoading(), this._savedLoadingIndicator = !1)
        }
    }), e.AbstractLovBase = w, e.FilteringDataProviderView = C, e.LovDropdown = S, e.LovMainField = I, e.LovUtils = F, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojselectbase.js.map