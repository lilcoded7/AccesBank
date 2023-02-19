/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojmap", "ojs/ojset", "ojs/ojdataprovider", "ojs/ojeventtarget", "ojs/ojlogger"], function(t, e, s, i, n, r) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
    /**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    class a {
        constructor(t, e) {
            this.data = t, this.options = e, this.Item = class {
                constructor(t, e) {
                    this.metadata = t, this.data = e, this[a._METADATA] = t, this[a._DATA] = e
                }
            }, this.ItemMetadata = class {
                constructor(t) {
                    this.key = t, this[a._KEY] = t
                }
            }, this.FetchByKeysResults = class {
                constructor(t, e) {
                    this.fetchParameters = t, this.results = e, this[a._FETCHPARAMETERS] = t, this[a._RESULTS] = e
                }
            }, this.ContainsKeysResults = class {
                constructor(t, e) {
                    this.containsParameters = t, this.results = e, this[a._CONTAINSPARAMETERS] = t, this[a._RESULTS] = e
                }
            }, this.FetchByOffsetResults = class {
                constructor(t, e, s) {
                    this.fetchParameters = t, this.results = e, this.done = s, this[a._FETCHPARAMETERS] = t, this[a._RESULTS] = e, this[a._DONE] = s
                }
            }, this.FetchListParameters = class {
                constructor(t, e, s, i) {
                    this.size = t, this.sortCriteria = e, this.filterCriterion = s, this.attributes = i, this[a._SIZE] = t, this[a._SORTCRITERIA] = e, this[a._FILTERCRITERION] = s, this[a._ATTRIBUTES] = i
                }
            }, this.FetchListResult = class {
                constructor(t, e, s) {
                    this.fetchParameters = t, this.data = e, this.metadata = s, this[a._FETCHPARAMETERS] = t, this[a._DATA] = e, this[a._METADATA] = s
                }
            }, this.AsyncIterable = class {
                constructor(t) {
                    this._asyncIterator = t, this[Symbol.asyncIterator] = () => this._asyncIterator
                }
            }, this.AsyncIterator = class {
                constructor(t, e, s, i) {
                    this._parent = t, this._nextFunc = e, this._params = s, this._offset = i, this._clientId = s && s.clientId || Symbol(), t._mapClientIdToOffset.set(this._clientId, i), this._cacheObj = {}, this._cacheObj[a._MUTATIONSEQUENCENUM] = t._mutationSequenceNum
                }
                next() {
                    const t = this._parent._mapClientIdToOffset.get(this._clientId),
                        e = this._nextFunc(this._params, t, !1, this._cacheObj);
                    return Object.defineProperty(e.result.value, "totalFilteredRowCount", {
                        get: () => this._getTotalFilteredRowCount(),
                        enumerable: !0
                    }), this._parent._mapClientIdToOffset.set(this._clientId, e.offset), Promise.resolve(e.result)
                }
                _getTotalFilteredRowCount() {
                    if (void 0 === this._totalFilteredRowCount) {
                        const t = this._parent._getRowData(),
                            e = this._params ? this._params[a._FILTERCRITERION] : null;
                        if (e) {
                            this._totalFilteredRowCount = 0;
                            let s = i.FilterFactory.getFilter({
                                filterDef: e,
                                filterOptions: this._parent.options
                            });
                            for (let e = 0; e < t.length; e++) s.filter(t[e]) && ++this._totalFilteredRowCount
                        } else this._totalFilteredRowCount = t.length
                    }
                    return this._totalFilteredRowCount
                }
            }, this.AsyncIteratorYieldResult = class {
                constructor(t) {
                    this.value = t, this[a._VALUE] = t, this[a._DONE] = !1
                }
            }, this.AsyncIteratorReturnResult = class {
                constructor(t) {
                    this.value = t, this[a._VALUE] = t, this[a._DONE] = !0
                }
            }, this.DataProviderMutationEventDetail = class {
                constructor(t, e, s, i) {
                    this._parent = t, this.add = e, this.remove = s, this.update = i, this[a._ADD] = e, this[a._REMOVE] = s, this[a._UPDATE] = i, Object.defineProperty(this, a._PARENT, {
                        value: t,
                        enumerable: !1
                    })
                }
            }, this.DataProviderOperationEventDetail = class {
                constructor(t, e, s, i, n) {
                    this._parent = t, this.keys = e, this.metadata = s, this.data = i, this.indexes = n, this[a._KEYS] = e, this[a._METADATA] = s, this[a._DATA] = i, this[a._INDEXES] = n, Object.defineProperty(this, a._PARENT, {
                        value: t,
                        enumerable: !1
                    })
                }
            }, this.DataProviderAddOperationEventDetail = class {
                constructor(t, e, s, i, n, r, l) {
                    this._parent = t, this.keys = e, this.afterKeys = s, this.addBeforeKeys = i, this.metadata = n, this.data = r, this.indexes = l, this[a._KEYS] = e, this[a._AFTERKEYS] = s, this[a._ADDBEFOREKEYS] = i, this[a._METADATA] = n, this[a._DATA] = r, this[a._INDEXES] = l, Object.defineProperty(this, a._PARENT, {
                        value: t,
                        enumerable: !1
                    })
                }
            }, this._sequenceNum = 0, this._mutationSequenceNum = 0, this._mapClientIdToOffset = new Map, this._subscribeObservableArray(t), null != e && null != e[a._KEYS] && (this._keysSpecified = !0, this._keys = e[a._KEYS])
        }
        containsKeys(t) {
            return this.fetchByKeys(t).then(e => {
                const i = new s;
                return t[a._KEYS].forEach(t => {
                    null != e[a._RESULTS].get(t) && i.add(t)
                }), Promise.resolve(new this.ContainsKeysResults(t, i))
            })
        }
        fetchByKeys(s) {
            this._generateKeysIfNeeded();
            const i = new e,
                n = this._getKeys(),
                r = null != s ? s[a._ATTRIBUTES] : null;
            let l, o = 0;
            if (s) {
                const e = this._getRowData();
                return s[a._KEYS].forEach(s => {
                    for (l = null, o = 0; o < n.length; o++)
                        if (t.Object.compareValues(n[o], s)) {
                            l = o;
                            break
                        }
                    if (null != l && l >= 0) {
                        let t = e[l];
                        if (r && r.length > 0) {
                            const e = {};
                            this._filterRowAttributes(r, t, e), t = e
                        }
                        i.set(s, new this.Item(new this.ItemMetadata(s), t))
                    }
                }), Promise.resolve(new this.FetchByKeysResults(s, i))
            }
            return Promise.reject("Keys are a required parameter")
        }
        fetchByOffset(t) {
            const e = null != t ? t[a._SIZE] : -1,
                s = null != t ? t[a._SORTCRITERIA] : null,
                i = null != t && t[a._OFFSET] > 0 ? t[a._OFFSET] : 0,
                n = null != t ? t[a._ATTRIBUTES] : null,
                r = null != t ? t[a._FILTERCRITERION] : null;
            this._generateKeysIfNeeded();
            let l = [],
                o = !0;
            if (t) {
                const h = new this.FetchListParameters(e, s, r, n),
                    u = this._fetchFrom(h, i, !0).result;
                h[a._SORTCRITERIA] && (t[a._SORTCRITERIA] = h[a._SORTCRITERIA]);
                const _ = u[a._VALUE];
                o = u[a._DONE];
                const c = _[a._DATA],
                    d = _[a._METADATA].map(t => t[a._KEY]);
                return l = c.map((t, e) => new this.Item(new this.ItemMetadata(d[e]), t)), Promise.resolve(new this.FetchByOffsetResults(t, l, o))
            }
            return Promise.reject("Offset is a required parameter")
        }
        fetchFirst(t) {
            return new this.AsyncIterable(new this.AsyncIterator(this, this._fetchFrom.bind(this), t, 0))
        }
        getCapability(t) {
            return a.getCapability(t)
        }
        static _getFetchCapability() {
            const t = new Set;
            return t.add("exclusion"), {
                caching: "all",
                attributeFilter: {
                    expansion: {},
                    ordering: {},
                    defaultShape: {
                        features: t
                    }
                }
            }
        }
        static getCapability(t) {
            return "sort" === t ? {
                attributes: "multiple"
            } : "fetchByKeys" === t ? Object.assign({
                implementation: "lookup"
            }, a._getFetchCapability()) : "fetchByOffset" === t ? Object.assign({
                implementation: "randomAccess"
            }, a._getFetchCapability()) : "fetchFirst" === t ? Object.assign({
                iterationSpeed: "immediate",
                totalFilteredRowCount: "exact"
            }, a._getFetchCapability()) : "fetchCapability" === t ? a._getFetchCapability() : "filter" === t ? {
                operators: ["$co", "$eq", "$ew", "$pr", "$gt", "$ge", "$lt", "$le", "$ne", "$regex", "$sw"],
                attributeExpression: ["*"],
                textFilter: {},
                collationOptions: {
                    sensitivity: ["base", "accent", "case", "variant"]
                }
            } : null
        }
        getTotalSize() {
            return Promise.resolve(this._getRowData().length)
        }
        isEmpty() {
            return this._getRowData().length > 0 ? "no" : "yes"
        }
        createOptimizedKeySet(t) {
            return new s(t)
        }
        createOptimizedKeyMap(t) {
            if (t) {
                const s = new e;
                return t.forEach((t, e) => {
                    s.set(e, t)
                }), s
            }
            return new e
        }
        _getRowData() {
            return this[a._DATA] instanceof Array ? this[a._DATA] : this[a._DATA]()
        }
        _getKeys() {
            return null == this._keys || this._keys instanceof Array ? this._keys : this._keys()
        }
        _indexOfKey(e) {
            const s = this._getKeys();
            let i, n = -1;
            for (i = 0; i < s.length; i++)
                if (t.Object.compareValues(s[i], e)) {
                    n = i;
                    break
                }
            return n
        }
        _adjustIteratorOffset(t, e) {
            this._mapClientIdToOffset.forEach((s, i) => {
                let n = 0;
                t && t.forEach(t => {
                    t < s && ++n
                }), s -= n, e && e.forEach(t => {
                    t < s && ++s
                }), this._mapClientIdToOffset.set(i, s)
            })
        }
        _subscribeObservableArray(e) {
            if (!(e instanceof Array)) {
                if (!this._isObservableArray(e)) throw new Error("Invalid data type. ArrayDataProvider only supports Array or observableArray.");
                e.subscribe(e => {
                    let i, n, a, l, o, h = [],
                        u = [],
                        _ = [],
                        c = [];
                    const d = [];
                    this._mutationSequenceNum++;
                    let f = !0,
                        E = !0;
                    e.forEach(t => {
                        "deleted" === t.status ? (f = !1) : "added" === t.status && (E = !1)
                    });
                    const T = [],
                        p = [];
                    let A = null,
                        R = null,
                        m = null;
                    const y = this._generateKeysIfNeeded();
                    if (!f && !E) {
                        for (i = 0; i < e.length; i++) {
                            l = e[i].index, o = e[i].status;
                            const s = this._getId(e[i].value);
                            for (n = 0; n < e.length; n++) n !== i && l === e[n].index && o !== e[n].status && T.indexOf(i) < 0 && p.indexOf(i) < 0 && (null == s || t.Object.compareValues(s, this._getId(e[n].value))) && ("deleted" === o ? (p.push(i), T.push(n)) : (p.push(n), T.push(i)))
                        }
                        for (i = 0; i < e.length; i++)
                            if (T.indexOf(i) >= 0) {
                                const t = this._getKeys()[e[i].index];
                                u.push(t), h.push(e[i].value), _.push(e[i].index)
                            }
                        if (u.length > 0) {
                            c = u.map(t => new this.ItemMetadata(t));
                            const t = new s;
                            u.forEach(e => {
                                t.add(e)
                            }), A = new this.DataProviderOperationEventDetail(this, t, c, h, _)
                        }
                    }
                    if (h = [], u = [], _ = [], !f) {
                        for (i = 0; i < e.length; i++) "deleted" === e[i].status && T.indexOf(i) < 0 && p.indexOf(i) < 0 && (a = this._getId(e[i].value), null == a && (a = y ? e[i].index : this._getKeys()[e[i].index]), u.push(a), h.push(e[i].value), _.push(e[i].index));
                        if (u.length > 0 && u.forEach(t => {
                                const e = this._indexOfKey(t);
                                e >= 0 && this._keys.splice(e, 1)
                            }), u.length > 0) {
                            c = u.map(t => new this.ItemMetadata(t));
                            const t = new s;
                            u.forEach(e => {
                                t.add(e)
                            }), m = new this.DataProviderOperationEventDetail(this, t, c, h, _)
                        }
                    }
                    if (h = [], u = [], _ = [], !E) {
                        const t = null == this._getKeys() || !(this._getKeys().length > 0);
                        for (i = 0; i < e.length; i++) "added" === e[i].status && T.indexOf(i) < 0 && p.indexOf(i) < 0 && (a = this._getId(e[i].value), null == a && (y || this._keysSpecified) && (a = this._getKeys()[e[i].index]), null == a ? (a = this._sequenceNum, this._sequenceNum++, this._keys.splice(e[i].index, 0, a)) : t || -1 === this._indexOfKey(a) ? this._keys.splice(e[i].index, 0, a) : y || this._keysSpecified || (r.warn("added row has duplicate key " + a), this._keys.splice(e[i].index, 0, a)), u.push(a), h.push(e[i].value), _.push(e[i].index));
                        for (i = 0; i < e.length; i++)
                            if ("added" === e[i].status && T.indexOf(i) < 0 && p.indexOf(i) < 0) {
                                let t = this._getKeys()[e[i].index + 1];
                                t = null == t ? null : t, d.push(t)
                            }
                        if (u.length > 0) {
                            c = u.map(t => new this.ItemMetadata(t));
                            const t = new s;
                            u.forEach(e => {
                                t.add(e)
                            });
                            const e = new s;
                            d.forEach(t => {
                                e.add(t)
                            }), R = new this.DataProviderAddOperationEventDetail(this, t, e, d, c, h, _)
                        }
                    }
                    this._fireMutationEvent(R, m, A)
                }, null, "arrayChange"), e.subscribe(t => {
                    var e, s, n, r;
                    if (this._mutationEvent) {
                        const t = this._mutationEvent.detail;
                        this._adjustIteratorOffset(null === (e = t.remove) || void 0 === e ? void 0 : e.indexes, null === (s = t.add) || void 0 === s ? void 0 : s.indexes), this.dispatchEvent(this._mutationEvent)
                    } else if (this._mutationRemoveEvent || this._mutationAddEvent || this._mutationUpdateEvent) {
                        if (this._mutationRemoveEvent) {
                            const t = this._mutationRemoveEvent.detail;
                            this._adjustIteratorOffset(null === (n = t.remove) || void 0 === n ? void 0 : n.indexes, null), this.dispatchEvent(this._mutationRemoveEvent)
                        }
                        if (this._mutationAddEvent) {
                            const t = this._mutationAddEvent.detail;
                            this._adjustIteratorOffset(null, null === (r = t.add) || void 0 === r ? void 0 : r.indexes), this.dispatchEvent(this._mutationAddEvent)
                        }
                        this._mutationUpdateEvent && this.dispatchEvent(this._mutationUpdateEvent)
                    } else this.dispatchEvent(new i.DataProviderRefreshEvent);
                    this._mutationEvent = null, this._mutationRemoveEvent = null, this._mutationAddEvent = null, this._mutationUpdateEvent = null
                }, null, "change")
            }
        }
        _fireMutationEvent(t, e, s) {
            const n = new this.DataProviderMutationEventDetail(this, t, e, s);
            this._mutationEvent = new i.DataProviderMutationEvent(n)
        }
        _hasSamePropValue(e, s, i) {
            const n = "_hasSamePropValue is true";
            try {
                e && e[i] && e[i].forEach(e => {
                    s && s[i] && s[i].forEach(s => {
                        if (t.Object.compareValues(e, s)) throw n
                    })
                })
            } catch (t) {
                if (t === n) return !0;
                throw t
            }
            return !1
        }
        _isObservableArray(t) {
            return "function" == typeof t && t.subscribe && !(void 0 === t.destroyAll)
        }
        _generateKeysIfNeeded() {
            if (null == this._keys) {
                const t = null != this.options ? this.options[a._KEYATTRIBUTES] || this.options[a._IDATTRIBUTE] : null;
                this._keys = [];
                const e = this._getRowData();
                let s, i = 0;
                for (i = 0; i < e.length; i++) s = this._getId(e[i]), null != s && "@index" !== t || (s = this._sequenceNum, this._sequenceNum++), this._keys[i] = s;
                return !0
            }
            return !1
        }
        _getId(t) {
            let e, s = null;
            if (null != this.options && (null != this.options[a._KEYATTRIBUTES] ? s = this.options[a._KEYATTRIBUTES] : null != this.options[a._IDATTRIBUTE] && (s = this.options[a._IDATTRIBUTE])), null != s) {
                if (Array.isArray(s)) {
                    let i;
                    for (e = [], i = 0; i < s.length; i++) e[i] = this._getVal(t, s[i])
                } else e = "@value" === s ? this._getAllVals(t) : this._getVal(t, s);
                return e
            }
            return null
        }
        _getVal(t, e) {
            if ("string" == typeof e) {
                const s = e.indexOf(".");
                if (s > 0) {
                    const i = e.substring(0, s),
                        n = e.substring(s + 1),
                        r = t[i];
                    if (r) return this._getVal(r, n)
                }
            }
            return "function" == typeof t[e] ? t[e]() : t[e]
        }
        _getAllVals(t) {
            return "string" == typeof t || "number" == typeof t || "boolean" == typeof t ? t : Object.keys(t).map(e => this._getVal(t, e))
        }
        _fetchFrom(t, e, s, n) {
            const r = null != t ? t[a._ATTRIBUTES] : null;
            this._generateKeysIfNeeded();
            const l = null != t ? t[a._SORTCRITERIA] : null,
                o = this._getCachedIndexMap(l, n),
                h = this._getRowData(),
                u = o.map(t => h[t]),
                _ = o.map(t => this._getKeys()[t]),
                c = null != t ? t[a._SIZE] > 0 ? t[a._SIZE] : t[a._SIZE] < 0 ? this._getKeys().length : 25 : 25;
            let d = e + c < u.length;
            const f = this._mergeSortCriteria(l);
            null != f && ((t = t || {})[a._SORTCRITERIA] = f);
            let E, T = [],
                p = [],
                A = 0;
            if (null != t && t[a._FILTERCRITERION]) {
                let s = null;
                s = i.FilterFactory.getFilter({
                    filterDef: t[a._FILTERCRITERION],
                    filterOptions: this.options
                });
                let n = 0;
                for (; T.length < c && n < u.length;) s.filter(u[n]) && (A >= e && (T.push(u[n]), p.push(_[n])), A++), n++;
                d = n < u.length
            } else T = u.slice(e, e + c), p = _.slice(e, e + c);
            A = e + T.length, E = T.map(t => {
                if (r && r.length > 0) {
                    const e = {};
                    this._filterRowAttributes(r, t, e), t = e
                }
                return t
            });
            let R = p.map(t => new this.ItemMetadata(t)),
                m = new this.FetchListResult(t, E, R);
            return (s ? d : m.data.length > 0) ? {
                result: new this.AsyncIteratorYieldResult(m),
                offset: A
            } : {
                result: new this.AsyncIteratorReturnResult(m),
                offset: A
            }
        }
        _getCachedIndexMap(t, e) {
            if (e && e.indexMap && e[a._MUTATIONSEQUENCENUM] === this._mutationSequenceNum) return e.indexMap;
            const s = this._getRowData().map((t, e) => e),
                i = this._sortData(s, t);
            return e && (e.indexMap = i, e[a._MUTATIONSEQUENCENUM] = this._mutationSequenceNum), i
        }
        _sortData(t, e) {
            const s = this._getRowData(),
                i = t.map(t => ({
                    index: t,
                    value: s[t]
                }));
            return null != e && i.sort(this._getSortComparator(e)), i.map(t => t.index)
        }
        _getSortComparator(t) {
            return (e, s) => {
                const i = null != this.options ? this.options[a._SORTCOMPARATORS] : null;
                let n, r, l, o, h, u;
                for (n = 0; n < t.length; n++)
                    if (r = t[n][a._DIRECTION], l = t[n][a._ATTRIBUTE], o = null, null != i && (o = i[a._COMPARATORS].get(l)), h = this._getVal(e.value, l), u = this._getVal(s.value, l), null != o) {
                        const t = "descending" === r ? -1 : 1,
                            e = o(h, u) * t;
                        if (0 !== e) return e
                    } else {
                        let t = 0;
                        const e = "string" == typeof h ? h : new String(h).toString(),
                            s = "string" == typeof u ? u : new String(u).toString();
                        if ("ascending" === r) {
                            if ("null" === e || "undefined" === e) return 1;
                            if ("null" === s || "undefined" === s) return -1;
                            t = e.localeCompare(s, void 0, {
                                numeric: !0,
                                sensitivity: "base"
                            })
                        } else {
                            if ("null" === e || "undefined" === e) return -1;
                            if ("null" === s || "undefined" === s) return 1;
                            t = s.localeCompare(e, void 0, {
                                numeric: !0,
                                sensitivity: "base"
                            })
                        }
                        if (0 !== t) return t
                    }
                return 0
            }
        }
        _mergeSortCriteria(t) {
            const e = null != this.options ? this.options[a._IMPLICITSORT] : null;
            if (null != e) {
                if (null == t) return e;
                const s = t.slice(0);
                let i, n, r;
                for (i = 0; i < e.length; i++) {
                    for (r = !1, n = 0; n < s.length; n++) s[n][a._ATTRIBUTE] === e[i][a._ATTRIBUTE] && (r = !0);
                    r || s.push(e[i])
                }
                return s
            }
            return t
        }
        _filterRowAttributes(t, e, s) {
            if (Array.isArray(t)) {
                let i, n = !1;
                t.forEach(t => {
                    t !== a._ATDEFAULT && t.name !== a._ATDEFAULT || (n = !0)
                }), Object.keys(e).forEach(r => {
                    if (n) {
                        let n, a = !1,
                            l = r;
                        for (i = 0; i < t.length; i++)
                            if (n = t[i] instanceof Object ? t[i].name : t[i], n.startsWith("!")) {
                                if (n = n.substr(1, n.length - 1), n === r) {
                                    a = !0;
                                    break
                                }
                            } else if (n === r) {
                            l = t[i];
                            break
                        }
                        a || this._filterRowAttributes(l, e, s)
                    } else t.forEach(t => {
                        let i;
                        i = t instanceof Object ? t.name : t, i.startsWith("!") || i !== r || this._filterRowAttributes(t, e, s)
                    })
                })
            } else if (t instanceof Object) {
                const i = t.name,
                    n = t.attributes;
                if (i && !i.startsWith("!"))
                    if (e[i] instanceof Object && !Array.isArray(e[i]) && n) {
                        const t = {};
                        this._filterRowAttributes(n, e[i], t), s[i] = t
                    } else if (Array.isArray(e[i]) && n) {
                    let t;
                    s[i] = [], e[i].forEach((e, r) => {
                        t = {}, this._filterRowAttributes(n, e, t), s[i][r] = t
                    })
                } else this._proxyAttribute(s, e, i)
            } else this._proxyAttribute(s, e, t)
        }
        _proxyAttribute(t, e, s) {
            t && e && Object.defineProperty(t, s, {
                get: () => e[s],
                set(t) {
                    e[s] = t
                },
                enumerable: !0
            })
        }
    }
    return a._KEY = "key", a._KEYS = "keys", a._AFTERKEYS = "afterKeys", a._ADDBEFOREKEYS = "addBeforeKeys", a._DIRECTION = "direction", a._ATTRIBUTE = "attribute", a._ATTRIBUTES = "attributes", a._SORT = "sort", a._SORTCRITERIA = "sortCriteria", a._FILTERCRITERION = "filterCriterion", a._DATA = "data", a._METADATA = "metadata", a._INDEXES = "indexes", a._OFFSET = "offset", a._SIZE = "size", a._IDATTRIBUTE = "idAttribute", a._IMPLICITSORT = "implicitSort", a._KEYATTRIBUTES = "keyAttributes", a._SORTCOMPARATORS = "sortComparators", a._COMPARATORS = "comparators", a._COMPARATOR = "comparator", a._RESULTS = "results", a._CONTAINS = "contains", a._FETCHPARAMETERS = "fetchParameters", a._CONTAINSPARAMETERS = "containsParameters", a._VALUE = "value", a._DONE = "done", a._ADD = "add", a._REMOVE = "remove", a._UPDATE = "update", a._DETAIL = "detail", a._FETCHLISTRESULT = "fetchListResult", a._ATDEFAULT = "@default", a._MUTATIONSEQUENCENUM = "mutationSequenceNum", a._PARENT = "_parent", n.EventTargetMixin.applyMixin(a), t._registerLegacyNamespaceProp("ArrayDataProvider", a), a
});
//# sourceMappingURL=ojarraydataprovider.js.map