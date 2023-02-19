/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojdataprovider", "ojs/ojeventtarget"], function(t, e, s) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    /**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    class i {
        constructor(t, e) {
            this.dataProvider = t, this.options = e, this._noFilterSupport = !1, this.AsyncIterable = class {
                constructor(t, e) {
                    this._parent = t, this._asyncIterator = e, this[Symbol.asyncIterator] = () => this._asyncIterator
                }
            }, this.AsyncIterator = class {
                constructor(t, e, s) {
                    this._parent = t, this._nextFunc = e, this._params = s
                }
                next() {
                    const t = this._nextFunc(this._params);
                    return Promise.resolve(t)
                }
            }, this.AsyncIteratorYieldResult = class {
                constructor(t, e) {
                    this._parent = t, this.value = e, this[i._VALUE] = e, this[i._DONE] = !1
                }
            }, this.AsyncIteratorReturnResult = class {
                constructor(t, e) {
                    this._parent = t, this.value = e, this[i._VALUE] = e, this[i._DONE] = !0
                }
            }, this.FetchListResult = class {
                constructor(t, e, s, r, n) {
                    this._parent = t, this.fetchParameters = e, this.data = s, this.metadata = r, this.totalFilteredRowCount = n, this[i._FETCHPARAMETERS] = e, this[i._DATA] = s, this[i._METADATA] = r, n >= -1 && (this.totalFilteredRowCount = n)
                }
            }, this.Item = class {
                constructor(t, e, s) {
                    this._parent = t, this.metadata = e, this.data = s, this[i._METADATA] = e, this[i._DATA] = s
                }
            }, this.ItemMetadata = class {
                constructor(t, e) {
                    this._parent = t, this.key = e, this[i._KEY] = e
                }
            }, this.FetchListParameters = class {
                constructor(t, e, s, r, n, h) {
                    this._parent = t, this.params = e, this.size = s, this.sortCriteria = r, this.filterCriterion = n, this.attributes = h, e && Object.keys(e).forEach(t => {
                        this[t] = e[t]
                    }), this[i._SIZE] = s, r && (this[i._SORTCRITERIA] = r), n && (this[i._FILTERCRITERION] = n), h && (this[i._FETCHATTRIBUTES] = h)
                }
            }, this.FetchByKeysParameters = class {
                constructor(t, e, s, r) {
                    this._parent = t, this.keys = e, this.params = s, this.attributes = r, s && Object.keys(s).forEach(t => {
                        this[t] = s[t]
                    }), e && (this[i._KEYS] = e), r && (this[i._FETCHATTRIBUTES] = r)
                }
            }, this.FetchByOffsetParameters = class {
                constructor(t, e, s, r, n, h, l) {
                    this._parent = t, this.offset = e, this.params = s, this.size = r, this.sortCriteria = n, this.filterCriterion = h, this.attributes = l, s && Object.keys(s).forEach(t => {
                        this[t] = s[t]
                    }), r && (this[i._SIZE] = r), n && (this[i._SORTCRITERIA] = n), e && (this[i._OFFSET] = e), h && (this[i._FILTERCRITERION] = h), l && (this[i._FETCHATTRIBUTES] = l)
                }
            }, this.FetchByKeysResults = class {
                constructor(t, e, s) {
                    this._parent = t, this.fetchParameters = e, this.results = s, this[i._FETCHPARAMETERS] = e, this[i._RESULTS] = s
                }
            }, this.ContainsKeysResults = class {
                constructor(t, e, s) {
                    this._parent = t, this.containsParameters = e, this.results = s, this[i._CONTAINSPARAMETERS] = e, this[i._RESULTS] = s
                }
            }, this.FetchByOffsetResults = class {
                constructor(t, e, s, r) {
                    this._parent = t, this.fetchParameters = e, this.results = s, this.done = r, this[i._FETCHPARAMETERS] = e, this[i._RESULTS] = s, this[i._DONE] = r
                }
            }, this[i._FROM] = null == this.options ? null : this.options[i._FROM], this[i._OFFSET] = null == this.options ? 0 : this.options[i._OFFSET] > 0 ? this.options[i._OFFSET] : 0, this[i._SORTCRITERIA] = null == this.options ? null : this.options[i._SORTCRITERIA], this[i._DATAMAPPING] = null == this.options ? null : this.options[i._DATAMAPPING], this[i._FETCHATTRIBUTES] = null == this.options ? null : this.options[i._FETCHATTRIBUTES], this[i._FILTERCRITERION] = null == this.options ? null : this.options[i._FILTERCRITERION], this._addEventListeners(t), t.getCapability && !t.getCapability("filter") && (this._noFilterSupport = !0)
        }
        containsKeys(t) {
            return this.dataProvider[i._CONTAINSKEYS] ? this.dataProvider[i._CONTAINSKEYS](t) : this.fetchByKeys(t).then(e => {
                const s = new Set;
                return t[i._KEYS].forEach(t => {
                    null != e[i._RESULTS].get(t) && s.add(t)
                }), Promise.resolve(new this.ContainsKeysResults(this, t, s))
            })
        }
        fetchByKeys(t) {
            const e = null != t ? t[i._KEYS] : null;
            let s = null != t ? t[i._FETCHATTRIBUTES] : null;
            null == s && (s = this[i._FETCHATTRIBUTES]);
            const r = new this.FetchByKeysParameters(this, e, t, s);
            if (this.dataProvider[i._FETCHBYKEYS]) return this.dataProvider[i._FETCHBYKEYS](r).then(t => {
                const e = t[i._RESULTS],
                    s = new Map;
                return e.forEach((t, e) => {
                    const i = this._getMappedItems([t]);
                    s.set(e, i[0])
                }), new this.FetchByKeysResults(this, r, s)
            }); {
                const e = new this.FetchListParameters(this, null, i._DEFAULT_SIZE, null, null, s),
                    n = new Map,
                    h = this.dataProvider[i._FETCHFIRST](e)[Symbol.asyncIterator]();
                return this._fetchNextSet(t, h, n).then(t => {
                    const e = new Map;
                    return t.forEach((t, s) => {
                        const i = this._getMappedItems([t]);
                        e.set(s, i[0])
                    }), new this.FetchByKeysResults(this, r, e)
                })
            }
        }
        fetchByOffset(t) {
            const e = null != t ? t[i._OFFSET] : null,
                s = null != t ? t[i._SIZE] : null;
            let r = null != t ? t[i._FETCHATTRIBUTES] : null;
            null == r && (r = this[i._FETCHATTRIBUTES]);
            let n = null != t ? t[i._SORTCRITERIA] : null;
            null == n && (n = this[i._SORTCRITERIA]);
            const h = this._getMappedSortCriteria(n),
                l = this._combineFilters(t),
                a = this._getMappedFilterCriterion(l),
                _ = new this.FetchByOffsetParameters(this, e, t, s, h, a, r);
            return this.dataProvider[i._FETCHBYOFFSET](_).then(t => {
                const e = t[i._RESULTS],
                    s = t[i._DONE],
                    r = new Array;
                return e.forEach(t => {
                    const e = this._getMappedItems([t]);
                    r.push(e[0])
                }), new this.FetchByOffsetResults(this, _, r, s)
            })
        }
        fetchFirst(t) {
            const e = {};
            e[i._ITEMS] = [], e[i._DONE] = !1, e[i._STARTINDEX] = 0, e[i._LASTDONEHASDATA] = !1;
            const s = null != t ? t[i._SIZE] : null;
            let r = null != t ? t[i._SORTCRITERIA] : null;
            null == r && (r = this[i._SORTCRITERIA]);
            const n = this._getMappedSortCriteria(r),
                h = this._combineFilters(t),
                l = this._getMappedFilterCriterion(h);
            let a = null != t ? t[i._FETCHATTRIBUTES] : null;
            if (null == a && (a = this[i._FETCHATTRIBUTES]), null == this[i._FROM] && this[i._OFFSET] > 0) {
                let r = this[i._OFFSET];
                return new this.AsyncIterable(this, new this.AsyncIterator(this, (t => () => {
                    const e = new this.FetchByOffsetParameters(this, r, null, s, n, l, a);
                    return this.dataProvider[i._FETCHBYOFFSET](e).then(e => {
                        const n = e.results;
                        r += n.length;
                        const h = this._getMappedItems(n);
                        this._cacheResult(t, h), t[i._DONE] = e[i._DONE];
                        const l = h.map(t => t[i._DATA]),
                            a = h.map(t => t[i._METADATA]),
                            _ = e[i._FETCHPARAMETERS],
                            T = null != _ ? _[i._SORTCRITERIA] : null,
                            E = null != _ ? _[i._FILTERCRITERION] : null,
                            o = this._getUnmappedSortCriteria(T),
                            A = this._getUnmappedFilterCriterion(E),
                            u = new this.FetchByOffsetParameters(this, this[i._OFFSET], null, s, o, A);
                        return t[i._DONE] ? Promise.resolve(new this.AsyncIteratorReturnResult(this, new this.FetchListResult(this, u, l, a))) : Promise.resolve(new this.AsyncIteratorYieldResult(this, new this.FetchListResult(this, u, l, a)))
                    })
                })(e), t))
            } {
                const r = new this.FetchListParameters(this, t, s, n, l, a),
                    h = this.dataProvider[i._FETCHFIRST](r)[Symbol.asyncIterator]();
                return new this.AsyncIterable(this, new this.AsyncIterator(this, ((e, s) => () => e[i._LASTDONEHASDATA] ? (e[i._LASTDONEHASDATA] = !1, Promise.resolve(new this.AsyncIteratorReturnResult(this, new this.FetchListResult(this, t, [], [], 0)))) : s.next().then(r => {
                    let n = r[i._VALUE];
                    n || (n = {
                        data: [],
                        metadata: [],
                        fetchParameters: null
                    });
                    const h = n[i._DATA],
                        a = n.totalFilteredRowCount,
                        _ = n[i._METADATA],
                        T = h.map((t, e) => new this.Item(this, _[e], h[e]));
                    this._noFilterSupport && this._filterResult(l, T);
                    const E = this._getMappedItems(T);
                    this._cacheResult(e, E), e[i._DONE] = r[i._DONE];
                    const o = null != t ? t[i._SIZE] : null,
                        A = (null != t && t[i._OFFSET], n[i._FETCHPARAMETERS]),
                        u = null != A ? A[i._SORTCRITERIA] : null,
                        c = null != A ? A[i._FILTERCRITERION] : null,
                        R = this._getUnmappedSortCriteria(u),
                        I = this._getUnmappedFilterCriterion(c),
                        S = new this.FetchListParameters(this, t, o, R, I);
                    return this._fetchUntilKey(S, this[i._FROM], e, s).then(() => this._fetchUntilOffset(S, this[i._OFFSET] + e[i._STARTINDEX], h.length, e, s, a))
                }))(e, h), t))
            }
        }
        getCapability(t) {
            return this.dataProvider.getCapability(t)
        }
        getTotalSize() {
            return this.dataProvider.getTotalSize()
        }
        isEmpty() {
            return this.dataProvider.isEmpty()
        }
        _fetchNextSet(e, s, r) {
            return s.next().then(n => {
                let h = n[i._VALUE];
                h || (h = {
                    data: [],
                    metadata: [],
                    fetchParameters: null
                });
                const l = h[i._DATA],
                    a = h[i._METADATA],
                    _ = a.map(t => t[i._KEY]);
                let T = !0;
                return e[i._KEYS].forEach(e => {
                    r.has(e) || _.map((s, i) => {
                        t.Object.compareValues(s, e) && r.set(e, new this.Item(this, a[i], l[i]))
                    }), r.has(e) || (T = !1)
                }), T || n[i._DONE] ? r : this._fetchNextSet(e, s, r)
            })
        }
        _fetchUntilKey(e, s, r, n) {
            if (null != s) {
                const e = r[i._ITEMS].filter(e => {
                    if (t.KeyUtils.equals(e[i._METADATA][i._KEY], s)) return !0
                });
                if (e.length > 0) {
                    const t = r[i._ITEMS].indexOf(e[0]);
                    r[i._ITEMS] = r[i._ITEMS].slice(t, r[i._ITEMS].length)
                } else {
                    if (!r[i._DONE]) return n.next().then(t => {
                        let e = t[i._VALUE];
                        e || (e = {
                            data: [],
                            metadata: [],
                            fetchParameters: null
                        });
                        const s = e[i._DATA],
                            h = e[i._METADATA],
                            l = s.map((t, e) => new this.Item(this, h[e], s[e])),
                            a = this._getMappedItems(l);
                        return this._cacheResult(r, a), r[i._DONE] = t[i._DONE], this._fetchUntilKey(t[i._FETCHPARAMETERS], a[i._KEYS], r, n)
                    });
                    r[i._ITEMS] = []
                }
            }
            return Promise.resolve(null)
        }
        _fetchUntilOffset(t, e, s, r, n, h) {
            const l = null != t && t[i._SIZE] > 0 ? t[i._SIZE] : s;
            e = e > 0 ? e : 0;
            const a = r[i._ITEMS].slice(e, e + l);
            if (this._noFilterSupport) {
                const e = this._getMappedFilterCriterion(t[i._FILTERCRITERION]);
                this._filterResult(e, a)
            }
            return t && t[i._SIZE] > 0 && a.length < l && !r[i._DONE] ? n.next().then(s => {
                let l = s[i._VALUE];
                l || (l = {
                    data: [],
                    metadata: [],
                    fetchParameters: null
                });
                const a = l[i._DATA],
                    _ = l[i._METADATA],
                    T = a.map((t, e) => new this.Item(this, _[e], a[e]));
                if (this._noFilterSupport) {
                    const e = this._getMappedFilterCriterion(t[i._FILTERCRITERION]);
                    this._filterResult(e, T)
                }
                const E = this._getMappedItems(T);
                return this._cacheResult(r, E), r[i._DONE] = s[i._DONE], this._fetchUntilOffset(t, e, a.length, r, n, h)
            }) : this._createResultPromise(t, r, a, h)
        }
        _createResultPromise(t, e, s, r) {
            e[i._STARTINDEX] = e[i._STARTINDEX] + s.length;
            const n = s.map(t => t[i._DATA]),
                h = s.map(t => t[i._METADATA]);
            let l = !1;
            return e[i._DONE] && (0 === n.length ? l = !0 : e[i._LASTDONEHASDATA] = !0), l ? Promise.resolve(new this.AsyncIteratorReturnResult(this, new this.FetchListResult(this, t, n, h, r))) : Promise.resolve(new this.AsyncIteratorYieldResult(this, new this.FetchListResult(this, t, n, h, r)))
        }
        _cacheResult(t, e) {
            e.forEach(e => {
                t[i._ITEMS].push(e)
            })
        }
        _filterResult(t, s) {
            if (t) {
                t.filter || (t = e.FilterFactory.getFilter({
                    filterDef: t
                }));
                let r = s.length - 1;
                for (; r >= 0;) t.filter(s[r][i._DATA]) || s.splice(r, 1), r--
            }
        }
        _getMappedItems(t) {
            if (null != this[i._DATAMAPPING]) {
                const e = this[i._DATAMAPPING][i._MAPFIELDS];
                if (null != e && null != t && t.length > 0) {
                    return t.map(t => e.bind(this)(t))
                }
            }
            return t
        }
        _combineFilters(t) {
            const s = [];
            let r, n = 0;
            return null != t && null != t[i._FILTERCRITERION] && (s[n] = t[i._FILTERCRITERION], n++), null != this[i._FILTERCRITERION] && (s[n] = this[i._FILTERCRITERION]), r = 0 == s.length ? null : 1 == s.length ? s[0] : e.FilterFactory.getFilter({
                filterDef: {
                    op: "$and",
                    criteria: s
                }
            }), r
        }
        _getMappedFilterCriterion(t) {
            if (null != this[i._DATAMAPPING]) {
                const e = this[i._DATAMAPPING][i._MAPFILTERCRITERION];
                if (null != e && null != t) return e(t)
            }
            return t
        }
        _getMappedSortCriteria(t) {
            if (null != this[i._DATAMAPPING]) {
                const e = this[i._DATAMAPPING][i._MAPSORTCRITERIA];
                if (null != e && null != t && t.length > 0) return e(t)
            }
            return t
        }
        _getUnmappedSortCriteria(t) {
            if (null != this[i._DATAMAPPING]) {
                const e = this[i._DATAMAPPING][i._UNMAPSORTCRITERIA];
                if (null != e && null != t && t.length > 0) return e(t)
            }
            return t
        }
        _getUnmappedFilterCriterion(t) {
            if (null != this[i._DATAMAPPING]) {
                const e = this[i._DATAMAPPING][i._UNMAPFILTERCRITERION];
                if (null != e && null != t) return e(t)
            }
            return t
        }
        _addEventListeners(t) {
            t[i._ADDEVENTLISTENER](i._REFRESH, t => {
                this.dispatchEvent(t)
            }), t[i._ADDEVENTLISTENER](i._MUTATE, t => {
                this.dispatchEvent(t)
            })
        }
    }
    return i._KEY = "key", i._KEYS = "keys", i._DATA = "data", i._STARTINDEX = "startIndex", i._SORT = "sort", i._SORTCRITERIA = "sortCriteria", i._FILTERCRITERION = "filterCriterion", i._METADATA = "metadata", i._ITEMS = "items", i._FROM = "from", i._OFFSET = "offset", i._REFRESH = "refresh", i._MUTATE = "mutate", i._SIZE = "size", i._FETCHPARAMETERS = "fetchParameters", i._VALUE = "value", i._DONE = "done", i._LASTDONEHASDATA = "lastDoneHasData", i._DATAMAPPING = "dataMapping", i._MAPFIELDS = "mapFields", i._MAPSORTCRITERIA = "mapSortCriteria", i._MAPFILTERCRITERION = "mapFilterCriterion", i._UNMAPSORTCRITERIA = "unmapSortCriteria", i._UNMAPFILTERCRITERION = "unmapFilterCriterion", i._RESULTS = "results", i._CONTAINSPARAMETERS = "containsParameters", i._DEFAULT_SIZE = 25, i._CONTAINSKEYS = "containsKeys", i._FETCHBYKEYS = "fetchByKeys", i._FETCHBYOFFSET = "fetchByOffset", i._FETCHFIRST = "fetchFirst", i._ADDEVENTLISTENER = "addEventListener", i._FETCHATTRIBUTES = "attributes", s.EventTargetMixin.applyMixin(i), t._registerLegacyNamespaceProp("ListDataProviderView", i), i
});
//# sourceMappingURL=ojlistdataproviderview.js.map