/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojcustomelement-utils"], function(e, t, r) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    const o = {};
    o.getDefaultValue = function(e, r) {
        let n = e.value;
        if (void 0 === n) {
            const t = e.properties;
            if (t) {
                const r = {},
                    l = Object.keys(t);
                for (let e = 0; e < l.length; e++) {
                    const n = o.getDefaultValue(t[l[e]]);
                    void 0 !== n && (r[l[e]] = n)
                }
                Object.keys(r).length > 0 && (e.value = r, n = r)
            }
        }
        return void 0 !== n && (Array.isArray(n) ? n = r ? o.deepFreeze(n) : n.slice() : null !== n && "object" == typeof n && (n = r ? o.deepFreeze(n) : t.CollectionUtils.copyInto({}, n, void 0, !0))), n
    }, o.getDefaultValues = function(e, t) {
        const r = {},
            n = Object.keys(e);
        let l = !1;
        return n.forEach(function(n) {
            const u = o.getDefaultValue(e[n], t);
            void 0 !== u && (r[n] = u, l = !0)
        }), l ? r : null
    }, o.deepFreeze = function(e) {
        if (Object.isFrozen(e)) return e;
        if (Array.isArray(e)) e = e.map(e => o.deepFreeze(e)), Object.freeze(e);
        else if (null !== e && "object" == typeof e) {
            const r = Object.getPrototypeOf(e);
            null !== r && r !== Object.prototype || (t = e, Object.prototype.hasOwnProperty.call(t, "$$typeof")) || (Object.keys(e).forEach(function(t) {
                e[t] = o.deepFreeze(e[t])
            }), Object.freeze(e))
        }
        var t;
        return e
    }, o.getPropertyMetadata = function(e, t) {
        let r = t;
        if (r && e) {
            const t = e.split(".");
            for (let e = 0; e < t.length && (r = r[t[e]], r && 1 !== t.length && e !== t.length - 1 && r.properties); e++) r = r.properties
        }
        return r
    }, o.checkEnumValues = function(e, t, r, o) {
        if ("string" == typeof r && o) {
            const e = o.enumValues;
            if (e && -1 === e.indexOf(r)) throw new Error(`Invalid value '${r}' found for property '${t}'.Expected one of the following '${e.toString()}'.`)
        }
    }, o.getFlattenedAttributes = function(e) {
        const t = [];
        return o._getAttributesFromProperties("", e, t), t
    }, o._getAttributesFromProperties = function(e, t, n) {
        if (t) {
            Object.keys(t).forEach(l => {
                const u = t[l],
                    s = e + l;
                n.push(r.AttributeUtils.propertyNameToAttribute(s)), u.properties && o._getAttributesFromProperties(s + ".", u.properties, n)
            })
        }
    };
    const n = o.getDefaultValue,
        l = o.getDefaultValues,
        u = o.deepFreeze,
        s = o.getPropertyMetadata,
        i = o.checkEnumValues,
        c = o.getFlattenedAttributes;
    e.checkEnumValues = i, e.deepFreeze = u, e.getDefaultValue = n, e.getDefaultValues = l, e.getFlattenedAttributes = c, e.getPropertyMetadata = s, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojmetadatautils.js.map