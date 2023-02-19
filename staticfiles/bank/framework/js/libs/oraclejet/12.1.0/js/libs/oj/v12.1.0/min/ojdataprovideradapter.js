/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojdataprovider", "ojs/ojmodel", "ojs/ojdataprovideradapter-base", "ojs/ojeventtarget"], function(e, t, a, n, r) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    class s extends n {
        constructor(e) {
            super(e), this.tableDataSource = e, this.FetchByKeysResults = class {
                constructor(e, t, a) {
                    this._parent = e, this.fetchParameters = t, this.results = a, this[s._FETCHPARAMETERS] = t, this[s._RESULTS] = a
                }
            }, this.ContainsKeysResults = class {
                constructor(e, t, a) {
                    this._parent = e, this.containsParameters = t, this.results = a, this[s._CONTAINSPARAMETERS] = t, this[s._RESULTS] = a
                }
            }, this.Item = class {
                constructor(e, t, a) {
                    this._parent = e, this.metadata = t, this.data = a, this[s._METADATA] = t, this[s._DATA] = a
                }
            }, this.FetchByOffsetResults = class {
                constructor(e, t, a, n) {
                    this._parent = e, this.fetchParameters = t, this.results = a, this.done = n, this[s._FETCHPARAMETERS] = t, this[s._RESULTS] = a, this[s._DONE] = n
                }
            }, this.FetchListParameters = class {
                constructor(e, t, a) {
                    this._parent = e, this.size = t, this.sortCriteria = a, this[s._SIZE] = t, this[s._SORTCRITERIA] = a
                }
            }, this._addTableDataSourceEventListeners(), this[s._OFFSET] = 0, this._ignoreDataSourceEvents = new Array
        }
        destroy() {
            this._removeTableDataSourceEventListeners()
        }
        containsKeys(e) {
            const t = this,
                a = [];
            return e[s._KEYS].forEach(function(e) {
                a.push(t.tableDataSource.get(e))
            }), Promise.all(a).then(function(a) {
                const n = new Set;
                return a.forEach(e => {
                    null != e && n.add(e[s._KEY])
                }), Promise.resolve(new t.ContainsKeysResults(t, e, n))
            })
        }
        fetchByKeys(e) {
            const t = this,
                a = [];
            return e[s._KEYS].forEach(function(e) {
                a.push(t.tableDataSource.get(e))
            }), Promise.all(a).then(function(a) {
                const n = new Map;
                for (let e = 0; e < a.length; e++) {
                    const r = a[e];
                    if (null != r) {
                        const e = r[s._KEY],
                            a = r[s._DATA],
                            i = new t.ItemMetadata(t, e),
                            o = r[s._INDEX];
                        t._extractMetaData(t.dataSource, o, i), n.set(e, new t.Item(t, i, a))
                    }
                }
                return Promise.resolve(new t.FetchByKeysResults(t, e, n))
            })
        }
        fetchByOffset(e) {
            const t = this,
                a = null != e ? e[s._SIZE] : -1,
                n = null != e ? e[s._SORTCRITERIA] : null,
                r = null != e && e[s._OFFSET] > 0 ? e[s._OFFSET] : 0,
                i = new this.FetchListParameters(this, a, n);
            return this._startIndex = 0, this._getFetchFunc(i, r)(i, !0).then(function(a) {
                const n = a[s._VALUE],
                    i = a[s._DONE],
                    o = n[s._DATA],
                    l = n[s._METADATA].map(function(e) {
                        return e[s._KEY]
                    }),
                    c = new Array;
                o.map(function(e, a) {
                    c.push(new t.Item(t, new t.ItemMetadata(t, l[a]), o[a]))
                });
                for (let e = 0; e < c.length; e++) t._extractMetaData(t.dataSource, e + r, c[e][s._METADATA]);
                return new t.FetchByOffsetResults(t, e, c, i)
            })
        }
        fetchFirst(e) {
            return this._isPagingModelTableDataSource() || (this._startIndex = 0), new this.AsyncIterable(new this.AsyncIterator(this._getFetchFunc(e), e))
        }
        getCapability(e) {
            return e == s._SORT && "full" == this.tableDataSource.getCapability(e) ? {
                attributes: "multiple"
            } : "fetchByKeys" == e || "fetchByOffset" == e ? {
                implementation: "lookup"
            } : null
        }
        getTotalSize() {
            return Promise.resolve(this.tableDataSource.totalSize())
        }
        isEmpty() {
            return this.tableDataSource.totalSize() > 0 ? "no" : "yes"
        }
        getPage() {
            return this._isPagingModelTableDataSource() ? this.tableDataSource.getPage() : -1
        }
        setPage(e, t) {
            return this._isPagingModelTableDataSource() ? this.tableDataSource.setPage(e, t) : Promise.reject(null)
        }
        getStartItemIndex() {
            return this._isPagingModelTableDataSource() ? this.tableDataSource.getStartItemIndex() : -1
        }
        getEndItemIndex() {
            return this._isPagingModelTableDataSource() ? this.tableDataSource.getEndItemIndex() : -1
        }
        getPageCount() {
            return this._isPagingModelTableDataSource() ? this.tableDataSource.getPageCount() : -1
        }
        totalSize() {
            return this._isPagingModelTableDataSource() ? this.tableDataSource.totalSize() : -1
        }
        totalSizeConfidence() {
            return this._isPagingModelTableDataSource() ? this.tableDataSource.totalSizeConfidence() : null
        }
        _getFetchFunc(e, t) {
            const a = this;
            if (null != e && null != e[s._SORTCRITERIA]) {
                const n = e[s._SORTCRITERIA][0][s._ATTRIBUTE],
                    r = e[s._SORTCRITERIA][0][s._DIRECTION];
                return this._ignoreSortEvent = !0, this._isPagingModelTableDataSource() || (this._startIndex = 0),
                    function(e, n) {
                        return function(r, i) {
                            if (i) {
                                const i = {};
                                return i[s._KEY] = e, i[s._DIRECTION] = n, a[s._OFFSET] = 0, a.tableDataSource.sort(i).then(function() {
                                    return a._ignoreSortEvent = !1, a._getTableDataSourceFetch(r, t)(r)
                                })
                            }
                            return a._getTableDataSourceFetch(r, t)(r)
                        }
                    }(n, r)
            }
            return this._getTableDataSourceFetch(e, t)
        }
        _extractMetaData(e, t, a) {
            let n = e;
            if (this._isPagingModelTableDataSource() && (n = n.getWrappedDataSource()), n._getMetadata) {
                const e = n._getMetadata(t);
                e && Object.keys(e).forEach(function(t) {
                    a[t] = e[t]
                })
            }
        }
        _getTableDataSourceFetch(e, t) {
            const a = this;
            return function(e, n) {
                const r = {};
                if (t = t > 0 ? t : 0, null != a._startIndex && (r[s._STARTINDEX] = a._startIndex + t), r[s._PAGESIZE] = null != e && e[s._SIZE] > 0 ? e[s._SIZE] : null, !a._isPagingModelTableDataSource() && e[s._SILENT] && (r[s._SILENT] = e[s._SILENT]), null != a.tableDataSource[s._SORTCRITERIA] && null == e[s._SORTCRITERIA]) {
                    e[s._SORTCRITERIA] = [];
                    const t = new a.SortCriterion(a, a.tableDataSource[s._SORTCRITERIA][s._KEY], a.tableDataSource[s._SORTCRITERIA][s._DIRECTION]);
                    e[s._SORTCRITERIA].push(t)
                }
                return r[s._FETCHTYPE] = e[s._FETCHTYPE], a._isFetching = !0, new Promise(function(t, n) {
                    a._fetchResolveFunc = t, a._fetchRejectFunc = n, a._fetchParams = e, a._requestEventTriggered || (a._isPagingModelTableDataSource() || r[s._SILENT] || a._ignoreDataSourceEvents.push(!0), a.tableDataSource.fetch(r).then(function(n) {
                        if (a._isPagingModelTableDataSource() || r[s._SILENT] || a._ignoreDataSourceEvents.pop(), null !== n) {
                            a._isFetching = !1, void 0 === n && ((n = {})[s._KEYS] = [], n[s._DATA] = []);
                            let i = [];
                            null != n[s._KEYS] && (i = n[s._KEYS].map(function(e) {
                                return new a.ItemMetadata(a, e)
                            })), null == a._startIndex && (a._startIndex = 0);
                            for (let e = 0; e < i.length; e++) a._extractMetaData(a.dataSource, a._startIndex + e, i[e]);
                            let o = !1;
                            a._startIndex = a._startIndex + n[s._DATA].length, ("actual" == a.tableDataSource.totalSizeConfidence() && a.tableDataSource.totalSize() > 0 && n.startIndex + n[s._DATA].length >= a.tableDataSource.totalSize() || r[s._PAGESIZE] > 0 && n[s._DATA].length < r[s._PAGESIZE] || 0 === n[s._DATA].length) && (o = !0), a._fetchResolveFunc = null, a._fetchParams = null, t(o ? new a.AsyncIteratorReturnResult(a, new a.FetchListResult(a, e, n[s._DATA], i)) : new a.AsyncIteratorYieldResult(a, new a.FetchListResult(a, e, n[s._DATA], i)))
                        }
                    }, function(e) {
                        a._isPagingModelTableDataSource() || r[s._SILENT] || a._ignoreDataSourceEvents.pop(), n(e)
                    }))
                })
            }
        }
        _adjustIteratorOffset(e, t) {
            let a = this._startIndex,
                n = 0;
            e && e.forEach(function(e) {
                e < a && ++n
            }), a -= n, t && t.forEach(function(e) {
                e < a && ++a
            }), this._startIndex = a
        }
        _handleSync(e) {
            const a = this;
            if (!(a._ignoreDataSourceEvents.length > 0)) {
                if (a._startIndex = null, e[s._STARTINDEX] > 0 && (a._startIndex = e[s._STARTINDEX], a[s._OFFSET] = a._startIndex), a._fetchResolveFunc && null != e[s._KEYS]) {
                    a._isFetching = !1;
                    const t = e[s._KEYS].map(function(e) {
                        return new a.ItemMetadata(a, e)
                    });
                    for (let e = 0; e < t.length; e++) {
                        let n = null != a._startIndex ? a._startIndex + e : e;
                        a._extractMetaData(a.dataSource, n, t[e])
                    }
                    let n = !1;
                    "actual" == a.tableDataSource.totalSizeConfidence() && a.tableDataSource.totalSize() > 0 && a._startIndex + e[s._DATA].length >= a.tableDataSource.totalSize() && (n = !0), n ? a._fetchResolveFunc(new a.AsyncIteratorReturnResult(a, new a.FetchListResult(a, a._fetchParams, e[s._DATA], t))) : a._fetchResolveFunc(new a.AsyncIteratorYieldResult(a, new a.FetchListResult(a, a._fetchParams, e[s._DATA], t))), a._fetchResolveFunc = null, a._fetchParams = null
                } else a._requestEventTriggered || a.dispatchEvent(new t.DataProviderRefreshEvent);
                a._requestEventTriggered = !1
            }
        }
        _handleAdd(e) {
            var a;
            const n = this,
                r = e[s._KEYS].map(function(e) {
                    return new n.ItemMetadata(n, e)
                }),
                i = new Set;
            e[s._KEYS].map(function(e) {
                i.add(e)
            });
            const o = new n.DataProviderAddOperationEventDetail(n, i, null, null, null, r, e[s._DATA], e[s._INDEXES]),
                l = new n.DataProviderMutationEventDetail(n, o, null, null);
            n.dispatchEvent(new t.DataProviderMutationEvent(l)), this._adjustIteratorOffset(null, null === (a = l.add) || void 0 === a ? void 0 : a.indexes)
        }
        _handleRemove(e) {
            var a;
            const n = this,
                r = e[s._KEYS].map(function(e) {
                    return new n.ItemMetadata(n, e)
                }),
                i = new Set;
            e[s._KEYS].map(function(e) {
                i.add(e)
            });
            const o = new n.DataProviderOperationEventDetail(n, i, r, e[s._DATA], e[s._INDEXES]),
                l = new n.DataProviderMutationEventDetail(n, null, o, null);
            n.dispatchEvent(new t.DataProviderMutationEvent(l)), this._adjustIteratorOffset(null === (a = l.remove) || void 0 === a ? void 0 : a.indexes, null)
        }
        _handleReset(e) {
            const a = this;
            a._requestEventTriggered || a._isPagingModelTableDataSource() || (a._startIndex = 0, a.dispatchEvent(new t.DataProviderRefreshEvent))
        }
        _handleSort(e) {
            const a = this;
            a._ignoreSortEvent || (a._startIndex = null, a.dispatchEvent(new t.DataProviderRefreshEvent))
        }
        _handleChange(e) {
            const a = this,
                n = e[s._KEYS].map(function(e) {
                    return new a.ItemMetadata(a, e)
                }),
                r = new Set;
            e[s._KEYS].map(function(e) {
                r.add(e)
            });
            const i = new a.DataProviderOperationEventDetail(a, r, n, e[s._DATA], e[s._INDEXES]),
                o = new a.DataProviderMutationEventDetail(a, null, null, i);
            a.dispatchEvent(new t.DataProviderMutationEvent(o))
        }
        _handleRefresh(e) {
            const a = this;
            a._isFetching || a._requestEventTriggered || (null != e[s._OFFSET] ? (a._startIndex = e[s._OFFSET], "loadMore" === a.tableDataSource._fetchType && (a.offset = e[s._OFFSET])) : a._startIndex = null, a.dispatchEvent(new t.DataProviderRefreshEvent)), a._requestEventTriggered = !1
        }
        _handleRequest(e) {
            const n = this;
            n._ignoreDataSourceEvents.length > 0 || void 0 !== a.Model && e instanceof a.Model || n._isFetching || (e[s._STARTINDEX] > 0 && 0 === n.getStartItemIndex() && (n._startIndex = e[s._STARTINDEX]), n._requestEventTriggered = !0, n.dispatchEvent(new t.DataProviderRefreshEvent))
        }
        _handleError(e) {
            const t = this;
            t._fetchRejectFunc && t._fetchRejectFunc(e), t._isFetching = !1, t._requestEventTriggered = !1
        }
        _handlePage(t) {
            this._isFetching = !1, this._requestEventTriggered = !1;
            const a = {};
            a.detail = t, this.dispatchEvent(new r.GenericEvent(e.PagingModel.EventType.PAGE, a))
        }
        _addTableDataSourceEventListeners() {
            this.removeAllListeners(), this.addListener("sync", this._handleSync), this.addListener("add", this._handleAdd), this.addListener("remove", this._handleRemove), this.addListener("reset", this._handleReset), this.addListener("sort", this._handleSort), this.addListener("change", this._handleChange), this.addListener("refresh", this._handleRefresh), this.addListener("request", this._handleRequest), this.addListener("error", this._handleError), this.addListener("page", this._handlePage)
        }
        _removeTableDataSourceEventListeners() {
            this.removeListener("sync"), this.removeListener("add"), this.removeListener("remove"), this.removeListener("reset"), this.removeListener("sort"), this.removeListener("change"), this.removeListener("refresh"), this.removeListener("request"), this.removeListener("error"), this.removeListener("page")
        }
        _isPagingModelTableDataSource() {
            return null != this.tableDataSource.getStartItemIndex
        }
    }
    return s._STARTINDEX = "startIndex", s._SILENT = "silent", s._SORTCRITERIA = "sortCriteria", s._PAGESIZE = "pageSize", s._OFFSET = "offset", s._SIZE = "size", s._CONTAINSPARAMETERS = "containsParameters", s._RESULTS = "results", s._FETCHTYPE = "fetchType", s._INDEX = "index", r.EventTargetMixin.applyMixin(s), e._registerLegacyNamespaceProp("TableDataSourceAdapter", s), s
});
//# sourceMappingURL=ojdataprovideradapter.js.map