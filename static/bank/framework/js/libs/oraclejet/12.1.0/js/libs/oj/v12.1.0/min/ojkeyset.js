/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojkeysetimpl"], function(e, t, n) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    var r = function() {};
    t._registerLegacyNamespaceProp("KeySet", r), t.Object.createSubclass(r, t.Object, "KeySet"), r.prototype.SetInternal = function(e) {
        this._keys = e
    }, r.prototype.AddOrDeleteInternal = function(e, t) {
        var n, r;
        return null == (n = e ? this._add(t) : this._remove(t)) ? this : ((r = Object.create(Object.getPrototypeOf(this))).SetInternal(n), r)
    }, r.prototype._add = function(e) {
        var t = this,
            n = null;
        return e.forEach(function(e) {
            e !== t.NOT_A_KEY && t.get(e) === t.NOT_A_KEY && (null == n && (n = t.Clone()), n.add(e))
        }), n
    }, r.prototype._remove = function(e) {
        var t, n = this,
            r = null;
        return 0 === this._keys.size ? null : (e.forEach(function(e) {
            (t = n.get(e)) !== n.NOT_A_KEY && (null == r && (r = n.Clone()), r.delete(t))
        }), r)
    }, r.prototype.GetInternalSize = function() {
        return this._keys.size
    }, r.prototype.Clone = function() {
        return new Set(this._keys)
    }, n.call(r.prototype);
    var o = function(e) {
        this.InitializeWithKeys(e)
    };
    t._registerLegacyNamespaceProp("ExpandedKeySet", o), t.Object.createSubclass(o, r, "ExpandedKeySet"), o.prototype.add = function(e) {
        return this.AddOrDeleteInternal(!0, e)
    }, o.prototype.addAll = function() {
        return new i
    }, o.prototype.isAddAll = function() {
        return !1
    }, o.prototype.delete = function(e) {
        return this.AddOrDeleteInternal(!1, e)
    }, o.prototype.clear = function() {
        return 0 === this.GetInternalSize() ? this : new o
    }, o.prototype.has = function(e) {
        return this.get(e) !== this.NOT_A_KEY
    }, o.prototype.values = function() {
        return this.Clone()
    };
    var i = function() {
        this.InitializeWithKeys(null)
    };
    t._registerLegacyNamespaceProp("ExpandAllKeySet", i), t.Object.createSubclass(i, r, "ExpandAllKeySet"), i.prototype.add = function(e) {
        return this.AddOrDeleteInternal(!1, e)
    }, i.prototype.addAll = function() {
        return 0 === this.GetInternalSize() ? this : new i
    }, i.prototype.isAddAll = function() {
        return !0
    }, i.prototype.delete = function(e) {
        return this.AddOrDeleteInternal(!0, e)
    }, i.prototype.clear = function() {
        return new o
    }, i.prototype.has = function(e) {
        return this.get(e) === this.NOT_A_KEY
    }, i.prototype.deletedValues = function() {
        return this.Clone()
    };
    var l = function(e) {
        this.InitializeWithKeys(e)
    };
    t._registerLegacyNamespaceProp("KeySetImpl", l), t.Object.createSubclass(l, r, "KeySetImpl"), l.prototype.add = function(e) {
        return this.AddOrDeleteInternal(!0, e)
    }, l.prototype.addAll = function() {
        return new u
    }, l.prototype.isAddAll = function() {
        return !1
    }, l.prototype.delete = function(e) {
        return this.AddOrDeleteInternal(!1, e)
    }, l.prototype.clear = function() {
        return 0 === this.GetInternalSize() ? this : new l
    }, l.prototype.has = function(e) {
        return this.get(e) !== this.NOT_A_KEY
    }, l.prototype.values = function() {
        return this.Clone()
    };
    var u = function() {
        this.InitializeWithKeys(null)
    };
    t._registerLegacyNamespaceProp("AllKeySetImpl", u), t.Object.createSubclass(u, r, "AllKeySetImpl"), u.prototype.add = function(e) {
        return this.AddOrDeleteInternal(!1, e)
    }, u.prototype.addAll = function() {
        return 0 === this.GetInternalSize() ? this : new u
    }, u.prototype.isAddAll = function() {
        return !0
    }, u.prototype.delete = function(e) {
        return this.AddOrDeleteInternal(!0, e)
    }, u.prototype.clear = function() {
        return new l
    }, u.prototype.has = function(e) {
        return this.get(e) === this.NOT_A_KEY
    }, u.prototype.deletedValues = function() {
        return this.Clone()
    };
    var a = {
        toArray: function(e) {
            var t, n = e.isAddAll() ? e.deletedValues() : e.values();
            return Array.from ? t = Array.from(n) : (t = [], n.forEach(function(e) {
                t.push(e)
            })), t.inverted = e.isAddAll(), t
        },
        toKeySet: function(e) {
            return e.inverted ? (new u).delete(e) : (new l).add(e)
        }
    };
    e.AllKeySetImpl = u, e.ExpandAllKeySet = i, e.ExpandedKeySet = o, e.KeySet = r, e.KeySetImpl = l, e.KeySetUtils = a, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojkeyset.js.map