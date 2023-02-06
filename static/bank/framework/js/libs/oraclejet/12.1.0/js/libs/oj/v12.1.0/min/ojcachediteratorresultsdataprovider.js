/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojeventtarget", "ojs/ojcomponentcore"], function(t, e, a) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    /**
     * @license
     * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
     * Licensed under The Universal Permissive License (UPL), Version 1.0
     * @ignore
     */
    /**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    class s {
        constructor(e, a) {
            this.dataProvider = e, this.options = a, this.CacheAsyncIterable = class {
                constructor(t, e, a, s) {
                    this._parent = t, this.dataProviderAsyncIterator = e, this.params = a, this.cache = s, this[Symbol.asyncIterator] = () => new this._parent.CacheAsyncIterator(this._parent, this.dataProviderAsyncIterator, this.params, this.cache)
                }
            }, this.CacheAsyncIterator = class {
                constructor(t, e, a, s) {
                    var r, i;
                    this._parent = t, this.asyncIterator = e, this.params = a, this.cache = s, this._cachedOffset = 0, this._needLocalRowCount = "enabled" === (null === (r = t.options) || void 0 === r ? void 0 : r.includeFilteredRowCount) && "enabled" === (null == a ? void 0 : a.includeFilteredRowCount) && "exact" !== (null === (i = t._baseFetchFirstCapability) || void 0 === i ? void 0 : i.totalFilteredRowCount)
                }
                next() {
                    const t = this.params,
                        e = (null == t ? void 0 : t.size) ? t.size : -1;
                    return this._needLocalRowCount && 0 === this._cachedOffset ? this._checkCachedParamsAndIterate(t, -1).then(a => this._getResult(t, e, this._parent.cache.getSize())) : this._getResult(t, e, this._needLocalRowCount ? this._parent.cache.getSize() : void 0)
                }
                _getResult(t, e, a) {
                    let s;
                    if (-1 === e) {
                        if (this.cache.isDone()) return s = this.cache.getDataList(t, this._cachedOffset), this._cachedOffset = this._cachedOffset + s.data.length, Promise.resolve(new this._parent.CacheAsyncIteratorReturnResult(s, a))
                    } else {
                        if (this.cache.getSize() >= this._cachedOffset + e || this.cache.isDone()) return s = this.cache.getDataList(t, this._cachedOffset), this._cachedOffset = this._cachedOffset + s.data.length, this._cachedOffset < this.cache.getSize() || !this.cache.isDone() ? Promise.resolve(new this._parent.CacheAsyncIteratorYieldResult(s, a)) : Promise.resolve(new this._parent.CacheAsyncIteratorReturnResult(s, a));
                        if (this._cachedOffset > 0) return new Promise((a, s) => {
                            if (this._parent._getSharedIteratorState().fetchOffset < this._cachedOffset) {
                                const s = () => this._checkCachedParamsAndIterate(t, e).then(t => {
                                    if (!(this._parent._getSharedIteratorState().fetchOffset >= this._cachedOffset || t.done)) return s();
                                    a()
                                });
                                return s()
                            }
                            a()
                        }).then(() => this._checkCachedParamsAndIterate(t, e).then(t => (this._cachedOffset = this._parent._getSharedIteratorState().fetchOffset, t.done ? new this._parent.CacheAsyncIteratorReturnResult(t.value, a) : new this._parent.CacheAsyncIteratorYieldResult(t.value, a))))
                    }
                    return this._checkCachedParamsAndIterate(t, e).then(t => (this._cachedOffset = this._parent._getSharedIteratorState().fetchOffset, t.done ? new this._parent.CacheAsyncIteratorReturnResult(t.value, a) : new this._parent.CacheAsyncIteratorYieldResult(t.value, a)))
                }
                _checkCachedParamsAndIterate(t, e) {
                    let a, r = this._parent._getSharedIteratorState().cachedFetchParams,
                        i = this._parent._getSharedIteratorState().fetchOffset,
                        h = this._parent._getSharedIteratorState().fetchPromise;
                    return h && this._cachedOffset === i && s._compareCachedFetchParameters(t, r) ? a = h : (this._parent._getSharedIteratorState().cachedFetchParams = s._createCachedFetchParams(t), this._parent._getSharedIteratorState().fetchPromise = this.asyncIterator.next().then(t => (this._parent._getSharedIteratorState().fetchOffset = this._parent._getSharedIteratorState().fetchOffset + t.value.data.length, this._parent._getSharedIteratorState().fetchPromise = null, this.cache.addListResult(t), -1 === e && !this.cache.isDone() || e > 0 && !this.cache.isDone() && t.value.data.length < e ? this.asyncIterator.next().then(e => (this.cache.addListResult(e), t)) : t)), a = this._parent._getSharedIteratorState().fetchPromise), a
                }
            }, this.CacheAsyncIteratorYieldResult = class {
                constructor(t, e) {
                    this.value = t, this[s._VALUE] = void 0 !== e ? Object.assign({
                        totalFilteredRowCount: e
                    }, t) : t, this[s._DONE] = !1
                }
            }, this.CacheAsyncIteratorReturnResult = class {
                constructor(t, e) {
                    this.value = t, this[s._VALUE] = void 0 !== e ? Object.assign({
                        totalFilteredRowCount: e
                    }, t) : t, this[s._DONE] = !0
                }
            }, this.cache = new t.DataCache, this._lastFetchParams = null, e.createOptimizedKeyMap && (this.createOptimizedKeyMap = t => e.createOptimizedKeyMap(t)), e.createOptimizedKeySet && (this.createOptimizedKeySet = t => e.createOptimizedKeySet(t)), e.addEventListener(s._MUTATE, t => {
                this.cache.processMutations(t.detail), this.dispatchEvent(t)
            }), e.addEventListener(s._REFRESH, t => {
                this.cache.reset(), this._lastFetchParams = null, this.dispatchEvent(t)
            }), this._baseFetchFirstCapability = e.getCapability("fetchFirst")
        }
        containsKeys(t) {
            const e = new Set,
                a = new Set,
                s = this.cache.getDataByKeys(t);
            if (t.keys.forEach(t => {
                    s.results.get(t) ? e.add(t) : a.add(t)
                }), 0 === a.size) return Promise.resolve({
                containsParameters: t,
                results: e
            }); {
                const s = {
                    attributes: t.attributes,
                    keys: a,
                    scope: t.scope
                };
                return this.dataProvider.containsKeys(s).then(a => (a.results.forEach(t => {
                    e.add(t)
                }), {
                    containsParameters: t,
                    results: e
                }))
            }
        }
        fetchByKeys(t) {
            const e = new Map,
                a = new Set,
                s = this.cache.getDataByKeys(t);
            if (t.keys.forEach(t => {
                    const r = s.results.get(t);
                    r ? e.set(t, r) : a.add(t)
                }), 0 === a.size) return Promise.resolve({
                fetchParameters: t,
                results: e
            }); {
                const s = {
                    attributes: t.attributes,
                    keys: a,
                    scope: t.scope
                };
                return this.dataProvider.fetchByKeys(s).then(a => (a.results.forEach((t, a) => {
                    e.set(a, t)
                }), {
                    fetchParameters: t,
                    results: e
                }))
            }
        }
        fetchByOffset(t) {
            const e = t.size ? t.size : s._DEFAULT_SIZE;
            if (s._compareCachedFetchParameters(t, this._lastFetchParams) && t.offset + e <= this.cache.getSize()) {
                const a = JSON.parse(JSON.stringify(t, (t, e) => {
                    if (!t.startsWith("_")) return e
                }));
                a.size = e;
                const s = this.cache.getDataByOffset(a);
                if (s) return Promise.resolve(s)
            }
            return this.dataProvider.fetchByOffset(t)
        }
        fetchFirst(t) {
            if (!s._compareCachedFetchParameters(t, this._lastFetchParams)) {
                this.cache.reset(), this._lastFetchParams = s._createCachedFetchParams(t);
                const e = this.dataProvider.fetchFirst(t)[Symbol.asyncIterator]();
                this._firstIteratorState = {
                    cachedFetchParams: this._lastFetchParams,
                    fetchOffset: 0,
                    fetchPromise: null,
                    asyncIterator: e
                }
            }
            return new this.CacheAsyncIterable(this, this._getSharedIteratorState().asyncIterator, t, this.cache)
        }
        getCapability(t) {
            const e = this.dataProvider.getCapability(t);
            return "fetchCapability" === t ? {
                attributeFilter: null == e ? void 0 : e.attributeFilter,
                caching: "visitedByCurrentIterator"
            } : e
        }
        getTotalSize() {
            return null != this._lastFetchParams && !this._lastFetchParams.filterDef && this.cache.isDone() ? Promise.resolve(this.cache.getSize()) : this.dataProvider.getTotalSize()
        }
        isEmpty() {
            return null != this._lastFetchParams && !this._lastFetchParams.filterDef && this.cache.isDone() ? 0 === this.cache.getSize() ? "yes" : "no" : this.dataProvider.isEmpty()
        }
        _getSharedIteratorState() {
            return this._firstIteratorState
        }
        static _compareCachedFetchParameters(e, a) {
            return e = e || {}, null != a && t.Object.compareValues(a.attributes, e.attributes || null) && t.Object.compareValues(a.filterDef, s._getFilterDef(e.filterCriterion)) && t.Object.compareValues(a.sortCriteria, e.sortCriteria || null)
        }
        static _createCachedFetchParams(t) {
            t = t || {};
            const e = {};
            return e.size = t.size, e.attributes = t.attributes ? JSON.parse(JSON.stringify(t.attributes)) : null, e.filterDef = s._getFilterDef(t.filterCriterion), e.sortCriteria = t.sortCriteria ? JSON.parse(JSON.stringify(t.sortCriteria)) : null, e
        }
        static _getFilterDef(t) {
            if (!t) return null;
            const e = {};
            return Object.keys(t).forEach(a => {
                "filter" !== a && (e[a] = t[a])
            }), e
        }
    }
    return s._KEY = "key", s._KEYS = "keys", s._DATA = "data", s._STARTINDEX = "startIndex", s._SORT = "sort", s._SORTCRITERIA = "sortCriteria", s._FILTERCRITERION = "filterCriterion", s._METADATA = "metadata", s._ITEMS = "items", s._FROM = "from", s._OFFSET = "offset", s._REFRESH = "refresh", s._MUTATE = "mutate", s._SIZE = "size", s._FETCHPARAMETERS = "fetchParameters", s._VALUE = "value", s._DONE = "done", s._RESULTS = "results", s._CONTAINSPARAMETERS = "containsParameters", s._DEFAULT_SIZE = 25, s._CONTAINSKEYS = "containsKeys", s._FETCHBYKEYS = "fetchByKeys", s._FETCHBYOFFSET = "fetchByOffset", s._FETCHFIRST = "fetchFirst", s._ADDEVENTLISTENER = "addEventListener", s._FETCHATTRIBUTES = "attributes", e.EventTargetMixin.applyMixin(s), t._registerLegacyNamespaceProp("CachedIteratorResultsDataProvider", s), s
});
//# sourceMappingURL=ojcachediteratorresultsdataprovider.js.map