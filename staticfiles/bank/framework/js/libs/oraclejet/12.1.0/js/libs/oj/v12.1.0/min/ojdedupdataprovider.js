/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojdataprovider", "ojs/ojeventtarget", "ojs/ojcachediteratorresultsdataprovider"], function(t, e, a, s) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
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
    class i {
        constructor(a) {
            this.dataProvider = a, this.DedupAsyncIterable = class {
                constructor(t, e, a, s) {
                    this._parent = t, this.params = e, this.dataProviderAsyncIterator = a, this.cache = s, this[Symbol.asyncIterator] = () => new this._parent.DedupAsyncIterator(this._parent, this.params, this.dataProviderAsyncIterator, this.cache)
                }
            }, this.DedupAsyncIterator = class {
                constructor(t, e, a, s) {
                    this._parent = t, this.params = e, this.asyncIterator = a, this.cache = s, this._cachedOffset = 0
                }
                next() {
                    const t = new Set;
                    if (this.params.size > 0) {
                        this._parent.cache.getDataByOffset({
                            offset: 0,
                            size: this._cachedOffset
                        }).results.forEach(e => {
                            t.add(e.metadata.key)
                        })
                    }
                    return this.asyncIterator.next().then(a => {
                        const r = a[i._VALUE],
                            n = r.metadata.map(t => t[i._KEY]);
                        this._cachedOffset = this._cachedOffset + n.length;
                        const h = new Set;
                        n.forEach(t => {
                            h.add(t)
                        });
                        const d = [],
                            c = [],
                            o = [];
                        if (h.forEach((e, a) => {
                                t.has(e) && (d.push(e), c.push(r.data[a]), o.push(r.metadata[a]))
                            }), d.length > 0) {
                            const t = new Set;
                            for (const e of d) t.add(e);
                            const a = new this._parent.DataProviderOperationEventDetail(this._parent, t, o, c, []),
                                s = new this._parent.DataProviderMutationEventDetail(this._parent, null, a, null);
                            this._parent.dispatchEvent(new e.DataProviderMutationEvent(s))
                        }
                        return this._parent.dataProvider instanceof s || this._parent.cache.addListResult(a), a
                    })
                }
            }, this.DataProviderMutationEventDetail = class {
                constructor(t, e, a, s) {
                    this._parent = t, this.add = e, this.remove = a, this.update = s, this[i._ADD] = e, this[i._REMOVE] = a, this[i._UPDATE] = s
                }
            }, this.DataProviderOperationEventDetail = class {
                constructor(t, e, a, s, r) {
                    this._parent = t, this.keys = e, this.metadata = a, this.data = s, this.indexes = r, this[i._KEYS] = e, this[i._METADATA] = a, this[i._DATA] = s, this[i._INDEXES] = r
                }
            }, this.cache = a instanceof s ? a.cache : new t.DataCache, a.createOptimizedKeyMap && (this.createOptimizedKeyMap = t => a.createOptimizedKeyMap(t)), a.createOptimizedKeySet && (this.createOptimizedKeySet = t => a.createOptimizedKeySet(t)), a.addEventListener(i._MUTATE, t => {
                t.detail && t.detail.add && this._processAddMutations(t.detail.add), this.dispatchEvent(t)
            }), a.addEventListener(i._REFRESH, t => {
                this.cache.reset(), this.dispatchEvent(t)
            })
        }
        containsKeys(t) {
            return this.dataProvider.containsKeys(t)
        }
        fetchByKeys(t) {
            return this.dataProvider.fetchByKeys(t)
        }
        fetchByOffset(t) {
            return this.dataProvider.fetchByOffset(t)
        }
        fetchFirst(t) {
            const e = this.dataProvider.fetchFirst(t);
            return new this.DedupAsyncIterable(this, t, e[Symbol.asyncIterator](), this.cache)
        }
        getCapability(t) {
            const e = this.dataProvider.getCapability(t);
            return "dedup" === t ? {
                type: "iterator"
            } : e
        }
        getTotalSize() {
            return this.dataProvider.getTotalSize()
        }
        isEmpty() {
            return this.dataProvider.isEmpty()
        }
        _processAddMutations(t) {
            const a = t[i._KEYS];
            if (a && a.size > 0) {
                const t = new Set,
                    s = [],
                    i = [];
                if (this.cache.getDataByKeys({
                        keys: a
                    }).results.forEach((e, a) => {
                        t.add(a), s.push(e.data), i.push(e.metadata)
                    }), t.size > 0) {
                    const a = new this.DataProviderOperationEventDetail(this, t, i, s, []),
                        r = new this.DataProviderMutationEventDetail(this, null, a, null);
                    this.dispatchEvent(new e.DataProviderMutationEvent(r))
                }
            }
        }
    }
    return i._KEY = "key", i._KEYS = "keys", i._DATA = "data", i._METADATA = "metadata", i._ITEMS = "items", i._FROM = "from", i._OFFSET = "offset", i._REFRESH = "refresh", i._MUTATE = "mutate", i._SIZE = "size", i._FETCHPARAMETERS = "fetchParameters", i._VALUE = "value", i._DONE = "done", i._RESULTS = "results", i._ADD = "add", i._UPDATE = "update", i._REMOVE = "remove", i._INDEXES = "indexes", a.EventTargetMixin.applyMixin(i), t._registerLegacyNamespaceProp("DedupDataProvider", i), i
});
//# sourceMappingURL=ojdedupdataprovider.js.map