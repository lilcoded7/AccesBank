/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojeventtarget", "ojs/ojcachediteratorresultsdataprovider", "ojs/ojdedupdataprovider", "ojs/ojmutateeventfilteringdataprovider"], function(e, t, i, a, r) {
    "use strict";

    function n(e, t) {
        const n = null == t ? void 0 : t.fetchFirst,
            d = null == t ? void 0 : t.dedup,
            l = null == t ? void 0 : t.eventFiltering,
            s = e.getCapability("fetchFirst") || e.getCapability("fetchCapability"),
            c = e.getCapability("dedup"),
            h = e.getCapability("eventFiltering");
        let p = !1,
            u = !1,
            y = !1,
            v = !1;
        const f = null == s ? void 0 : s.caching;
        "visitedByCurrentIterator" === (null == n ? void 0 : n.caching) && "all" !== f && "visitedByCurrentIterator" !== f && (p = !0);
        const C = null == s ? void 0 : s.totalFilteredRowCount;
        "exact" === (null == n ? void 0 : n.totalFilteredRowCount) && "exact" !== C && (u = !0);
        const g = null == c ? void 0 : c.type;
        "iterator" === (null == d ? void 0 : d.type) && "global" !== g && "iterator" !== g && (y = !0);
        const P = null == h ? void 0 : h.type;
        "iterator" === (null == l ? void 0 : l.type) && "global" !== P && "iterator" !== P && (v = !0);
        let E = e;
        return (p || u) && (E = new i(E, u ? {
            includeFilteredRowCount: "enabled"
        } : void 0)), y && (E = new a(E)), v && (E = new r(E)), e.getChildDataProvider && (E = new o(e, E, t)), E
    }
    i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
    class o {
        constructor(e, t, i) {
            this.treeDataProvider = e, this.enhancedDataProvider = t, this.capabilityConfigurations = i, t.addEventListener(o._MUTATE, e => {
                this.updateCache(e), this.dispatchEvent(e)
            }), t.addEventListener(o._REFRESH, e => {
                this.flushCache(), this.dispatchEvent(e)
            }), t.createOptimizedKeyMap && (this.createOptimizedKeyMap = e => t.createOptimizedKeyMap(e)), t.createOptimizedKeySet && (this.createOptimizedKeySet = e => t.createOptimizedKeySet(e)), this._mapKeyToChild = new Map
        }
        getChildDataProvider(e) {
            const t = this._mapKeyToChild.get(e);
            return t || this.cacheEnhancedDataProvider(e)
        }
        containsKeys(e) {
            return this.enhancedDataProvider.containsKeys(e)
        }
        fetchByKeys(e) {
            return this.enhancedDataProvider.fetchByKeys(e)
        }
        fetchByOffset(e) {
            return this.enhancedDataProvider.fetchByOffset(e)
        }
        fetchFirst(e) {
            return this.enhancedDataProvider.fetchFirst(e)
        }
        getCapability(e) {
            return this.enhancedDataProvider.getCapability(e)
        }
        getTotalSize() {
            return this.enhancedDataProvider.getTotalSize()
        }
        isEmpty() {
            return this.enhancedDataProvider.isEmpty()
        }
        cacheEnhancedDataProvider(e) {
            const t = this.treeDataProvider.getChildDataProvider(e);
            if (t) {
                const i = n(t, this.capabilityConfigurations);
                return this._mapKeyToChild.set(e, i), i
            }
            return null
        }
        updateCache(e) {
            const t = e.detail.remove,
                i = e.detail.update;
            let a;
            t && (a = t.keys, a && a.forEach(e => {
                this._mapKeyToChild.delete(e)
            })), i && (a = i.keys, a && a.forEach(e => {
                this._mapKeyToChild.delete(e)
            }))
        }
        flushCache() {
            this._mapKeyToChild.clear()
        }
    }
    o._REFRESH = "refresh", o._MUTATE = "mutate", t.EventTargetMixin.applyMixin(o), e.getEnhancedDataProvider = n, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojdataproviderfactory.js.map