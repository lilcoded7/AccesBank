/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojeventtarget"], function(t, e, i) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e,
        /**
         * @preserve Copyright 2013 jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        oj.DataProvider = function() {},
        function(t) {
            let e;
            ! function(t) {
                t.$co = "$co", t.$eq = "$eq", t.$ew = "$ew", t.$pr = "$pr", t.$gt = "$gt", t.$ge = "$ge", t.$lt = "$lt", t.$le = "$le", t.$ne = "$ne", t.$regex = "$regex", t.$sw = "$sw"
            }(e = t.AttributeOperator || (t.AttributeOperator = {}))
        }(t.AttributeFilterOperator || (t.AttributeFilterOperator = {})), e._registerLegacyNamespaceProp("AttributeFilterOperator", t.AttributeFilterOperator),
        function(t) {
            let e;
            ! function(t) {
                t.$and = "$and", t.$or = "$or"
            }(e = t.CompoundOperator || (t.CompoundOperator = {}))
        }(t.CompoundFilterOperator || (t.CompoundFilterOperator = {})), e._registerLegacyNamespaceProp("CompoundFilterOperator", t.CompoundFilterOperator);
    class r {
        constructor() {
            this._handleMutationAdd = function(t) {
                var i;
                const s = t[r._BEFOREKEYS],
                    o = t[r._KEYS],
                    n = [];
                o.forEach(t => {
                    n.push(t)
                });
                const a = t[r._DATA],
                    c = t[r._METADATA],
                    l = t[r._INDEXES];
                if (n && n.length > 0)
                    if (l) n.forEach((t, e) => {
                        this._items.splice(l[e], 0, new this.Item(c[e], a[e]))
                    });
                    else if (s) {
                    const o = Object.assign([], s),
                        l = Object.assign(new Set, t[r._KEYS]),
                        f = Object.assign([], t[r._DATA]),
                        u = Object.assign([], t[r._METADATA]),
                        h = [];
                    let p, _, m;
                    for (const t of s) {
                        if (p = t, m = !0, null != p) {
                            for (const t of n)
                                if (e.Object.compareValues(t, p)) {
                                    m = !1;
                                    break
                                }
                            if (m)
                                for (const t of this._items)
                                    if (e.Object.compareValues(null === (i = null == t ? void 0 : t.metadata) || void 0 === i ? void 0 : i.key, p)) {
                                        m = !1;
                                        break
                                    }
                        } else m = !1;
                        m && h.push(p)
                    }
                    let y = s.length;
                    for (; y > 0;) {
                        for (const t of s)
                            if (_ = t, h.indexOf(_) >= 0) {
                                h.push(_);
                                break
                            }
                        y--
                    }
                    for (let t = o.length - 1; t >= 0; t--) h.indexOf(o[t]) >= 0 && (delete o[t], l.delete(o[t]), delete f[t], delete u[t]);
                    o.forEach((t, i) => {
                        var r, s;
                        if (null === t) this._items.push(new this.Item(c[i], a[i]));
                        else
                            for (let o = 0; o < this._items.length; o++)
                                if (e.Object.compareValues(null === (s = null === (r = this._items[o]) || void 0 === r ? void 0 : r.metadata) || void 0 === s ? void 0 : s.key, t)) {
                                    this._items.splice(o, 0, new this.Item(c[i], a[i]));
                                    break
                                }
                    })
                } else if (this._fetchParams && null != this._fetchParams.sortCriteria) {
                    const t = this._fetchParams.sortCriteria;
                    if (t) {
                        const e = this._getSortComparator(t);
                        let i, r, s;
                        const o = [];
                        a.forEach((t, n) => {
                            for (i = 0; i < this._items.length; i++)
                                if (r = this._items[i].data, s = e(t, r), s < 0) {
                                    this._items.splice(i, 0, new this.Item(c[n], a[n])), o.push(n);
                                    break
                                }
                        }), a.forEach((t, e) => {
                            o.indexOf(e) < 0 && this._items.push(new this.Item(c[e], a[e]))
                        })
                    }
                } else a.forEach((t, e) => {
                    this._items.push(new this.Item(c[e], a[e]))
                })
            }, this._handleMutationRemove = function(t) {
                const i = t[r._KEYS];
                if (i && i.size > 0) {
                    let t;
                    i.forEach(i => {
                        for (t = this._items.length - 1; t >= 0; t--)
                            if (e.Object.compareValues(this._items[t].metadata.key, i)) {
                                this._items.splice(t, 1);
                                break
                            }
                    })
                }
            }, this._handleMutationUpdate = function(t) {
                const i = t[r._KEYS],
                    s = t[r._DATA],
                    o = t[r._METADATA];
                if (s && s.length > 0) {
                    let t, r = 0;
                    i.forEach(i => {
                        for (t = this._items.length - 1; t >= 0; t--)
                            if (e.Object.compareValues(this._items[t].metadata.key, i)) {
                                this._items.splice(t, 1, new this.Item(o[r], s[r]));
                                break
                            }
                        r++
                    })
                }
            }, this.Item = class {
                constructor(t, e) {
                    this.metadata = t, this.data = e, this[r._METADATA] = t, this[r._DATA] = e
                }
            }, this.FetchByKeysResults = class {
                constructor(t, e) {
                    this.fetchParameters = t, this.results = e, this[r._FETCHPARAMETERS] = t, this[r._RESULTS] = e
                }
            }, this.FetchByOffsetResults = class {
                constructor(t, e, i) {
                    this.fetchParameters = t, this.results = e, this.done = i, this[r._FETCHPARAMETERS] = t, this[r._RESULTS] = e, this[r._DONE] = i
                }
            }, this._items = []
        }
        addListResult(t) {
            const e = [];
            t.value.data.forEach((i, r) => {
                e.push(new this.Item(t.value.metadata[r], i))
            }), this._items = this._items.concat(e), this._done = t.done
        }
        getDataList(t, e) {
            this._fetchParams = t;
            let i = 25;
            null != t.size && (i = -1 === t.size ? this.getSize() : t.size);
            const r = this._items.slice(e, e + i),
                s = [],
                o = [];
            return r.forEach(t => {
                s.push(t.data), o.push(t.metadata)
            }), {
                fetchParameters: t,
                data: s,
                metadata: o
            }
        }
        getDataByKeys(t) {
            const e = new Map;
            return t && t.keys && t.keys.forEach(t => {
                for (const i of this._items)
                    if (i.metadata.key === t) {
                        e.set(t, i);
                        break
                    }
            }), new this.FetchByKeysResults(t, e)
        }
        getDataByOffset(t) {
            let e = [];
            return t && (e = this._items.slice(t.offset, t.offset + t.size)), new this.FetchByOffsetResults(t, e, !0)
        }
        processMutations(t) {
            null != t.remove && this._handleMutationRemove(t.remove), null != t.add && this._handleMutationAdd(t.add), null != t.update && this._handleMutationUpdate(t.update)
        }
        reset() {
            this._items = [], this._done = !1
        }
        getSize() {
            return this._items.length
        }
        isDone() {
            return this._done
        }
        _getSortComparator(t) {
            return (e, i) => {
                let s, o, n, a;
                for (const c of t) {
                    s = c[r._DIRECTION], o = c[r._ATTRIBUTE], n = this._getVal(e, o), a = this._getVal(i, o);
                    let t = 0;
                    const l = "string" == typeof n ? n : String(n).toString(),
                        f = "string" == typeof a ? a : String(a).toString();
                    if (t = "ascending" === s ? l.localeCompare(f, void 0, {
                            numeric: !0,
                            sensitivity: "base"
                        }) : f.localeCompare(l, void 0, {
                            numeric: !0,
                            sensitivity: "base"
                        }), 0 !== t) return t
                }
                return 0
            }
        }
        _getVal(t, e) {
            if ("string" == typeof e) {
                const i = e.indexOf(".");
                if (i > 0) {
                    const r = e.substring(0, i),
                        s = e.substring(i + 1),
                        o = t[r];
                    if (o) return this._getVal(o, s)
                }
            }
            return "function" == typeof t[e] ? t[e]() : t[e]
        }
    }
    r._DATA = "data", r._METADATA = "metadata", r._ITEMS = "items", r._BEFOREKEYS = "addBeforeKeys", r._KEYS = "keys", r._INDEXES = "indexes", r._FROM = "from", r._OFFSET = "offset", r._REFRESH = "refresh", r._MUTATE = "mutate", r._SIZE = "size", r._FETCHPARAMETERS = "fetchParameters", r._SORTCRITERIA = "sortCriteria", r._DIRECTION = "direction", r._ATTRIBUTE = "attribute", r._VALUE = "value", r._DONE = "done", r._RESULTS = "results", r._CONTAINSPARAMETERS = "containsParameters", r._DEFAULT_SIZE = 25, r._CONTAINSKEYS = "containsKeys", r._FETCHBYKEYS = "fetchByKeys", r._FETCHBYOFFSET = "fetchByOffset", r._FETCHFIRST = "fetchFirst", r._FETCHATTRIBUTES = "attributes", e._registerLegacyNamespaceProp("DataCache", r);
    class s extends i.GenericEvent {
        constructor(t) {
            const e = {};
            e[s._DETAIL] = t, super("mutate", e)
        }
    }
    s._DETAIL = "detail", e._registerLegacyNamespaceProp("DataProviderMutationEvent", s);
    class o extends i.GenericEvent {
        constructor(t) {
            const e = {};
            e.detail = t, super("refresh", e)
        }
    }
    e._registerLegacyNamespaceProp("DataProviderRefreshEvent", o);
    class n {
        fetchByKeys(t) {
            let e = 0;
            const i = this.getIterationLimit ? this.getIterationLimit() : -1,
                r = {
                    size: 25
                },
                s = new Map,
                o = this.fetchFirst(r)[Symbol.asyncIterator]();
            return function t(r, s, o) {
                return s.next().then(function(n) {
                    const a = n.value,
                        c = a.data,
                        l = a.metadata,
                        f = l.map(function(t) {
                            return t.key
                        });
                    let u = !0;
                    return r.keys.forEach(function(t) {
                        o.has(t) || f.map(function(e, i) {
                            e === t && o.set(e, {
                                metadata: l[i],
                                data: c[i]
                            })
                        }), o.has(t) || (u = !1)
                    }), e += c.length, u || n.done || -1 != i && e >= i ? o : t(r, s, o)
                })
            }(t, o, s).then(function(e) {
                const i = new Map;
                return e.forEach(function(t, e) {
                    const r = [t];
                    i.set(e, r[0])
                }), {
                    fetchParameters: t,
                    results: i
                }
            })
        }
        containsKeys(t) {
            return this.fetchByKeys(t).then(function(e) {
                const i = new Set;
                return t.keys.forEach(function(t) {
                    null != e.results.get(t) && i.add(t)
                }), Promise.resolve({
                    containsParameters: t,
                    results: i
                })
            })
        }
        getCapability(t) {
            if ("fetchByKeys" === t) return {
                implementation: "iteration"
            };
            let e = null;
            if (!0 !== this._ojSkipLastCapability) {
                this._ojSkipLastCapability = !0;
                let i = 1;
                for (; this["_ojLastGetCapability" + i];) ++i;
                for (--i; i > 0 && (e = this["_ojLastGetCapability" + i](t), !e); i--);
                delete this._ojSkipLastCapability
            }
            return e
        }
        static applyMixin(t) {
            const e = t.prototype.getCapability;
            if ([n].forEach(e => {
                    Object.getOwnPropertyNames(e.prototype).forEach(i => {
                        "constructor" !== i && (t.prototype[i] = e.prototype[i])
                    })
                }), e) {
                let i = 1;
                for (; t.prototype["_ojLastGetCapability" + i];) ++i;
                t.prototype["_ojLastGetCapability" + i] = e
            }
        }
    }
    e._registerLegacyNamespaceProp("FetchByKeysMixin", n);
    class a {
        fetchByOffset(t) {
            const e = t && t.size > 0 ? t.size : 25,
                i = t ? t.sortCriteria : null,
                r = t && t.offset > 0 ? t.offset : 0;
            let s = 0;
            const o = this.getIterationLimit ? this.getIterationLimit() : -1;
            let n = !1;
            const a = {};
            a.size = e, a.sortCriteria = i;
            const c = new Array,
                l = this.fetchFirst(a)[Symbol.asyncIterator]();
            return function t(i, a, c) {
                return a.next().then(function(l) {
                    n = l.done;
                    const f = l.value,
                        u = f.data,
                        h = f.metadata,
                        p = u.length;
                    if (r < s + p) {
                        for (let t = r <= s ? 0 : r - s; t < p && c.length !== e; t++) c.push({
                            metadata: h[t],
                            data: u[t]
                        })
                    }
                    return s += p, c.length < e && !n ? -1 !== o && s >= o ? c : t(i, a, c) : c
                })
            }(t, l, c).then(function(e) {
                return {
                    fetchParameters: t,
                    results: e,
                    done: n
                }
            })
        }
        getCapability(t) {
            if ("fetchByOffset" === t) return {
                implementation: "iteration"
            };
            let e = null;
            if (!0 !== this._ojSkipLastCapability) {
                this._ojSkipLastCapability = !0;
                let i = 1;
                for (; this["_ojLastGetCapability" + i];) ++i;
                for (--i; i > 0 && (e = this["_ojLastGetCapability" + i](t), !e); i--);
                delete this._ojSkipLastCapability
            }
            return e
        }
        static applyMixin(t) {
            const e = t.prototype.getCapability;
            if ([a].forEach(e => {
                    Object.getOwnPropertyNames(e.prototype).forEach(i => {
                        "constructor" !== i && (t.prototype[i] = e.prototype[i])
                    })
                }), e) {
                let i = 1;
                for (; t.prototype["_ojLastGetCapability" + i];) ++i;
                t.prototype["_ojLastGetCapability" + i] = e
            }
        }
    }
    var c;
    e._registerLegacyNamespaceProp("FetchByOffsetMixin", a),
        function(t) {
            function e(t, e) {
                let i = !1;
                for (const r in e)
                    if (e.hasOwnProperty(r)) {
                        const o = e[r];
                        if (i || !s(r)) throw new Error("parsing error " + e);
                        t.operator = r, t.right = o, i = !0
                    }
            }

            function i(t, e, i, r) {
                if (r && ["base", "accent", "case", "variant"].indexOf(r.sensitivity) < 0) throw new Error("not a valid sensitivity! " + r.sensitivity);
                let s;
                if (r && ("string" == typeof e || e instanceof String) && ("string" == typeof i || i instanceof String) && ["base", "accent", "case", "variant"].indexOf(r.sensitivity) >= 0 && (s = new Intl.Collator(void 0, r)), "$lt" === t) {
                    const t = n(i, e);
                    return i = t[0], e = t[1], s ? s.compare(i, e) < 0 : i < e
                }
                if ("$gt" === t) {
                    const t = n(i, e);
                    return i = t[0], e = t[1], s ? s.compare(i, e) > 0 : i > e
                }
                if ("$lte" === t) {
                    const t = n(i, e);
                    return i = t[0], e = t[1], s ? s.compare(i, e) <= 0 : i <= e
                }
                if ("$gte" === t) {
                    const t = n(i, e);
                    return i = t[0], e = t[1], s ? s.compare(i, e) >= 0 : i >= e
                }
                if ("$eq" === t) return s ? 0 === s.compare(i, e) : i === e;
                if ("$ne" === t) return s ? 0 !== s.compare(i, e) : i !== e;
                if ("$regex" === t) {
                    if (i) {
                        if ("string" != typeof i && !(i instanceof String))
                            if (i instanceof Object) {
                                if ("[object Object]" == (i = i.toString())) return !1
                            } else i = new String(i);
                        const t = null == r ? void 0 : r.sensitivity;
                        "base" !== t && "case" !== t || (i = i.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), e = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")), "base" !== t && "accent" !== t || (i = i.toLowerCase(), e = e.toLowerCase());
                        return null !== i.match(e)
                    }
                    return !1
                }
                if ("$exists" === t) return e ? null != i : null == i;
                throw new Error("not a valid operator! " + t)
            }

            function r(t) {
                return "$and" === t || "$or" === t
            }

            function s(t) {
                return "$lt" === t || "$gt" === t || "$lte" === t || "$gte" === t || "$eq" === t || "$ne" === t || "$regex" === t || "$exists" === t
            }

            function o(t) {
                return null != t && (t instanceof String || "string" == typeof t)
            }

            function n(t, e) {
                return o(t) && null == e ? e = "" : o(e) && null == t && (t = ""), [t, e]
            }

            function a(t, e) {
                const i = t.split(".");
                let r = e;
                for (const t of i) r = r[t];
                return r
            }
            t.satisfy = function(t, o) {
                if (t) {
                    return function t(e, o) {
                        const n = e.operator,
                            {
                                collationOptions: c
                            } = e;
                        if (r(n)) {
                            if (!e.left && e.array instanceof Array) {
                                let i;
                                const r = e.array;
                                for (const e of r) {
                                    const r = t(e, o);
                                    if ("$or" === n && !0 === r) return !0;
                                    if ("$and" === n && !1 === r) return !1;
                                    i = r
                                }
                                return i
                            }
                            throw new Error("invalid expression tree!" + e)
                        }
                        if (s(n)) {
                            const t = e.right;
                            let r;
                            if ("*" != e.left) return r = a(e.left, o), i(n, t, r, c); {
                                const e = Object.keys(o);
                                for (const s of e)
                                    if (r = a(s, o), i(n, t, r, c)) return !0;
                                return !1
                            }
                        }
                        throw new Error("not a valid expression!" + e)
                    }(function t(i, o) {
                        let n;
                        const a = [];
                        for (const c in i)
                            if ("collationOptions" !== c && i.hasOwnProperty(c)) {
                                const l = i[c];
                                if (0 === c.indexOf("$")) {
                                    if (r(c)) {
                                        if (!(l instanceof Array)) throw new Error("not a valid expression: " + i);
                                        n = {
                                            operator: c,
                                            array: []
                                        };
                                        for (const e of l) {
                                            const r = t(e, i.collationOptions);
                                            n.array.push(r)
                                        }
                                    } else if (s(c)) throw new Error("not a valid expression: " + i)
                                } else if ("object" != typeof l) a.push({
                                    left: c,
                                    right: l,
                                    operator: "$eq",
                                    collationOptions: o
                                });
                                else {
                                    const t = {
                                        left: c,
                                        collationOptions: o
                                    };
                                    e(t, l), a.push(t)
                                }
                            }
                        a.length > 1 ? n = {
                            operator: "$and",
                            array: a
                        } : 1 === a.length && (n = a[0]);
                        return n
                    }(t), o)
                }
                return !0
            }
        }(c || (c = {}));
    class l {
        constructor(t) {
            t = t || {}, this._textFilterAttributes = t.filterOptions ? t.filterOptions.textFilterAttributes : null;
            const e = t.filterDef;
            e && (e.op ? (this.op = e.op, void 0 !== e.value ? (this.value = e.value, e.attribute && (this.attribute = e.attribute)) : e.criteria && (this.criteria = e.criteria), e.collationOptions && (this.collationOptions = e.collationOptions)) : e.text && (this.text = e.text))
        }
        filter(t, e, i) {
            return c.satisfy(l._transformFilter(this), t)
        }
        static _transformFilter(t) {
            let e;
            if (t) {
                let i, r = t.op;
                const s = t.collationOptions;
                if (t.text ? r = "$regex" : "$le" === r ? r = "$lte" : "$ge" === r ? r = "$gte" : "$pr" === r && (r = "$exists"), "$and" !== r && "$or" !== r) {
                    i = t.text ? new RegExp(t.text.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), "i") : t.value, e = {};
                    const s = t.attribute;
                    if (s) {
                        const t = {};
                        "$sw" !== r && "$ew" !== r && "$co" !== r || (r = "$regex", i = l._fixStringExpr(r, i)), t[r] = i, e[s] = t
                    } else if (t.text) {
                        const s = {};
                        if (s[r] = i, t._textFilterAttributes && t._textFilterAttributes.length > 0) {
                            const i = [];
                            t._textFilterAttributes.forEach(function(t) {
                                const e = {};
                                e[t] = s, i.push(e)
                            }), e.$or = i
                        } else e["*"] = s
                    } else {
                        const t = [];
                        l._transformObjectExpr(i, r, null, t), e.$and = t
                    }
                } else {
                    const i = [];
                    t.criteria.forEach(function(e) {
                        e && e.text && t._textFilterAttributes && (e._textFilterAttributes = t._textFilterAttributes), i.push(l._transformFilter(e))
                    }), e = {}, e[r] = i
                }
                e.collationOptions = s
            }
            return e
        }
        static _transformObjectExpr(t, e, i, r) {
            if (Object.keys(t).length > 0) Object.keys(t).forEach(function(s) {
                let o = t[s];
                const n = i ? i + "." + s : s;
                if (o instanceof Object) l._transformObjectExpr(o, e, n, r);
                else {
                    const t = {};
                    "$sw" !== e && "$ew" !== e && "$co" !== e || (e = "$regex", o = l._fixStringExpr(e, o)), t[e] = o;
                    const i = {};
                    i[n] = t, r.push(i)
                }
            });
            else {
                const s = {};
                s[e] = t;
                const o = {};
                o[i] = s, r.push(o)
            }
        }
        static _fixStringExpr(t, e) {
            return ("string" == typeof e || e instanceof String) && ("$sw" === t ? e = "^" + e : "$ew" === t && (e += "$")), e
        }
    }
    class f {
        static getFilter(t) {
            return new l(t)
        }
    }
    e._registerLegacyNamespaceProp("FilterFactory", f), t.DataCache = r, t.DataProviderMutationEvent = s, t.DataProviderRefreshEvent = o, t.FetchByKeysMixin = n, t.FetchByOffsetMixin = a, t.FilterFactory = f, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojdataprovider.js.map