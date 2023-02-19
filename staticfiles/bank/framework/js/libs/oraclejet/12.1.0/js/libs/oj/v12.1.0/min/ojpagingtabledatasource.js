/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "jquery", "ojs/ojdatasource-common", "ojs/ojpagingmodel"], function(e, t, n, a) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    /**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    const r = function(t, n) {
        if (!(t instanceof e.TableDataSource)) {
            var a = e.TableDataSource._LOGGER_MSG._ERR_DATA_INVALID_TYPE_SUMMARY,
                r = e.TableDataSource._LOGGER_MSG._ERR_DATA_INVALID_TYPE_DETAIL;
            throw new Error(a + "\n" + r)
        }
        this.dataSource = t, this._startIndex = 0, this._endIndex = -1, this._dataSourceWrappedEventHandlers = [], this.Init(), Object.defineProperty(this, "sortCriteria", {
            configurable: !1,
            enumerable: !0,
            get: function() {
                return this.dataSource.sortCriteria
            },
            set: function(e) {
                this.dataSource.sortCriteria = e
            }
        })
    };
    return e._registerLegacyNamespaceProp("PagingTableDataSource", r), e.Object.createSubclass(r, e.TableDataSource, "oj.PagingTableDataSource"), r.prototype.Init = function() {
        r.superclass.Init.call(this)
    }, r.prototype.getWrappedDataSource = function() {
        return this.dataSource
    }, r.prototype.getPage = function() {
        return "loadMore" === this._fetchType ? 0 : this._getPageFromStartIndex()
    }, r.prototype.setPage = function(t, n) {
        n = n || {}, t = parseInt(t, 10);
        try {
            r.superclass.handleEvent.call(this, e.PagingModel.EventType.BEFOREPAGE, {
                page: t,
                previousPage: this._getPageFromStartIndex()
            })
        } catch (e) {
            return Promise.reject(e)
        }
        var a = this._getPageFromStartIndex();
        this._pageSize = null != n.pageSize ? n.pageSize : this._pageSize, n.pageSize = this._pageSize, n.startIndex = t * this._pageSize, this._startIndex = null == n.startIndex ? this._startIndex : n.startIndex, this._fetchType = "page";
        var o = this;
        return new Promise(function(t, i) {
            o._pageSize > 0 ? o.dataSource.fetch(n).then(function(n) {
                n.startIndex = 0, n.data.length > 0 ? o._updateEndIndex(o._startIndex + n.data.length - 1, !0) : o._updateEndIndex(-1, !0), r.superclass.handleEvent.call(o, e.PagingModel.EventType.PAGE, {
                    page: o._getPageFromStartIndex(),
                    previousPage: a
                }), t(null)
            }, function(e) {
                o._startIndex = a * o._pageSize, i(e)
            }) : t(null)
        })
    }, r.prototype.getStartItemIndex = function() {
        return "loadMore" === this._fetchType ? 0 : this._startIndex
    }, r.prototype.getEndItemIndex = function() {
        return this._endIndex
    }, r.prototype.getPageCount = function() {
        var e = this.totalSize();
        return -1 === e ? -1 : Math.ceil(e / this._pageSize)
    }, r.prototype.at = function(e, t) {
        return this.dataSource.at(e, t)
    }, r.prototype.fetch = function(e) {
        if (null == (e = e || {}).startIndex) return this.setPage(this.getPage());
        this._fetchType = "loadMore", this._startIndex = null == e.startIndex ? this._startIndex : e.startIndex;
        var t = null == e.pageSize ? this._pageSize : e.pageSize;
        null == this._pageSize && (this._pageSize = t), e.pageSize = t, e.startIndex = this._startIndex;
        var n = this;
        return new Promise(function(a, r) {
            t > 0 ? n.dataSource.fetch(e).then(function(e) {
                e.data.length > 0 ? n._updateEndIndex(n._startIndex + e.data.length - 1, !0) : n._updateEndIndex(-1, !0), a(e)
            }, function(e) {
                r(e)
            }) : a(null)
        })
    }, r.prototype.get = function(e, t) {
        return this.dataSource.get(e, t)
    }, r.prototype.getCapability = function(e) {
        return this.dataSource.getCapability(e)
    }, r.prototype.on = function(t, n) {
        var a, o = this,
            i = this.dataSource;
        t === e.TableDataSource.EventType.SYNC ? (a = function(e) {
            o._handleSyncEvent(e, n)
        }, this._dataSourceWrappedEventHandlers.push({
            eventType: t,
            eventHandler: n,
            wrappedEventHandler: a
        }), i.on(t, a)) : t === e.TableDataSource.EventType.ADD || t === e.TableDataSource.EventType.REMOVE || t === e.TableDataSource.EventType.CHANGE ? (a = function(e) {
            o._handleRowEvent(e, n)
        }, this._dataSourceWrappedEventHandlers.push({
            eventType: t,
            eventHandler: n,
            wrappedEventHandler: a
        }), i.on(t, a)) : t === e.TableDataSource.EventType.REFRESH || t === e.TableDataSource.EventType.RESET ? (a = function(e) {
            o._startIndex = 0, n(e)
        }, this._dataSourceWrappedEventHandlers.push({
            eventType: t,
            eventHandler: n,
            wrappedEventHandler: a
        }), i.on(t, a)) : t === e.PagingModel.EventType.PAGE || t === e.PagingModel.EventType.BEFOREPAGE || t === e.PagingModel.EventType.PAGECOUNT ? r.superclass.on.call(this, t, n) : i.on(t, n)
    }, r.prototype.off = function(t, n) {
        t !== e.PagingModel.EventType.PAGE && t !== e.PagingModel.EventType.PAGECOUNT || r.superclass.off.call(this, t, n);
        var a = this.dataSource;
        if (null != this._dataSourceWrappedEventHandlers) {
            var o, i = this._dataSourceWrappedEventHandlers.length;
            for (o = 0; o < i; o++)
                if (this._dataSourceWrappedEventHandlers[o].eventType === t && this._dataSourceWrappedEventHandlers[o].eventHandler === n) {
                    a.off(t, this._dataSourceWrappedEventHandlers[o].wrappedEventHandler), this._dataSourceWrappedEventHandlers.splice(o, 1);
                    break
                }
        }
        a.off(t, n)
    }, r.prototype.sort = function(e) {
        return this.dataSource.sort(e)
    }, r.prototype.totalSize = function() {
        return this.dataSource.totalSize()
    }, r.prototype.totalSizeConfidence = function() {
        return this.dataSource.totalSizeConfidence()
    }, r.prototype._getPageFromStartIndex = function() {
        return this._pageSize > 0 ? Math.floor(this._startIndex / this._pageSize) : 0
    }, r.prototype._handleRowEvent = function(e, t) {
        var n, a = [];
        for (n = 0; n < e.indexes.length; n++) {
            var r = e.indexes[n];
            void 0 !== r && ("page" === this._fetchType && (r -= this._startIndex), (r < 0 || r >= this._startIndex + this._pageSize) && a.push(n))
        }
        if (a.length > 0)
            for (a.sort(function(e, t) {
                    return e - t
                }), n = a.length - 1; n >= 0; n--) e.data.splice(a[n], 1), e.indexes.splice(a[n], 1), e.keys.splice(a[n], 1);
        e.indexes.length > 0 && this._updateEndIndex(e.indexes[e.indexes.length - 1], !1), e.startIndex = this._startIndex, t(e)
    }, r.prototype._handleSyncEvent = function(t, n) {
        if (t.startIndex !== this._startIndex && (this._startIndex = t.startIndex), t.data.length > 0 ? this._updateEndIndex(t.startIndex + t.data.length - 1, !0) : this._updateEndIndex(-1, !0), "page" === this._fetchType) {
            var a = {};
            e.CollectionUtils.copyInto(a, t), a.startIndex = 0, n(a)
        } else n(t)
    }, r.prototype._updateEndIndex = function(e, t) {
        this._endIndex = t || e > this._endIndex ? e : this._endIndex;
        var n = this.totalSize();
        n > 0 && (this._endIndex = this._endIndex > n - 1 ? n - 1 : this._endIndex)
    }, r.EventType = {
        ADD: "add",
        REMOVE: "remove",
        RESET: "reset",
        SYNC: "sync",
        REFRESH: "refresh",
        SORT: "sort",
        CHANGE: "change",
        REQUEST: "request",
        ERROR: "error"
    }, r
});
//# sourceMappingURL=ojpagingtabledatasource.js.map