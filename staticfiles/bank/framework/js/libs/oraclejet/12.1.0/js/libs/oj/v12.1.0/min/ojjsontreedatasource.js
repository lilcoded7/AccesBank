/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojdatasource-common", "ojs/ojlogger"], function(t, e, r) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    const n = function(e, r, n, i, l) {
        t.Assert.assertNumber(e, null), t.Assert.assertNumber(r, null), this.m_depth = l, this.m_key = i, this.m_startNode = e, this.m_endNode = r, this.m_nodes = n
    };
    t._registerLegacyNamespaceProp("JsonNodeSet", n), n.prototype.getParent = function() {
        return this.m_key
    }, n.prototype.getStart = function() {
        return this.m_startNode
    }, n.prototype.getCount = function() {
        return Math.max(0, this.m_endNode - this.m_startNode)
    }, n.prototype.getData = function(e) {
        t.Assert.assert(e <= this.m_endNode && e >= this.m_startNode);
        var r = e - this.m_startNode;
        return this.m_nodes[r] ? this.m_nodes[r].attr : null
    }, n.prototype.getMetadata = function(e) {
        var r = {
            leaf: !1,
            depth: -1
        };
        t.Assert.assert(e <= this.m_endNode && e >= this.m_startNode);
        var n = e - this.m_startNode;
        return r.key = this.m_nodes[n].id ? this.m_nodes[n].id : this.m_nodes[n].attr.id, r.leaf = this.m_nodes[n].leaf, r.depth = this.m_nodes[n].depth, null == r.leaf && (this.m_nodes[n].children && this.m_nodes[n].children.length > 0 ? r.leaf = !1 : r.leaf = !0), r
    }, n.prototype._updateDepth = function(t, e) {
        var r;
        if (e += 1, t.depth = e, t.children && 0 !== t.children.length)
            for (r = 0; r < t.children.length; r++) this._updateDepth(t.children[r], e)
    }, n.prototype.getChildNodeSet = function(e) {
        t.Assert.assert(e <= this.m_endNode && e >= this.m_startNode);
        var r = e - this.m_startNode,
            i = this.m_nodes[r].depth,
            l = this.m_nodes[r].children;
        if (null == l || 0 === l.length) return null;
        for (var d = this.m_nodes[r].id ? this.m_nodes[r].id : this.m_nodes[r].attr.id, h = 0; h < l.length; h++) this._updateDepth(l[h], i);
        return new n(0, l.length, l, d, 0)
    };
    var i = function() {
        this.id = null, this.depth = 0, this.parent = null, this.children = null, this.title = null, this.attr = null, this.leaf = null
    };
    i.prototype._ascending = function(t) {
        return function(e, r) {
            return null != e.attr && null != r.attr && null != e.attr[t] && null != r.attr[t] ? e.attr[t] < r.attr[t] ? -1 : e.attr[t] === r.attr[t] ? 0 : 1 : e[t] < r[t] ? -1 : e[t] === r[t] ? 0 : 1
        }
    }, i.prototype._descending = function(t) {
        return function(e, r) {
            return null != e.attr && null != r.attr && null != e.attr[t] && null != r.attr[t] ? e.attr[t] < r.attr[t] ? 1 : e.attr[t] === r.attr[t] ? 0 : -1 : e[t] < r[t] ? 1 : e[t] === r[t] ? 0 : -1
        }
    }, i.prototype._sortRecursive = function(t) {
        var e = t.key;
        if (null == this.children) return this;
        "ascending" === t.direction ? this.children.sort(this._ascending(e)) : "descending" === t.direction && this.children.sort(this._descending(e));
        for (var r = 0, n = this.children.length; r < n; r++) this.children[r]._sortRecursive(t);
        return this
    };
    const l = function(t) {
        var e = new i;
        null == t.id && (e.id = "root"), this.data = this._createTreeDataSource({
            count: 0
        }, e, t, 0), l.superclass.constructor.call(this, e)
    };
    return t._registerLegacyNamespaceProp("JsonTreeDataSource", l), t.Object.createSubclass(l, t.TreeDataSource, "oj.JsonTreeDataSource"), l.prototype.Init = function() {
        l.superclass.Init.call(this)
    }, l.prototype._createTreeDataSource = function(t, e, r, n) {
        for (var l in r)
            if ("children" === l || 0 === n && r instanceof Array) {
                var d;
                d = 0 === n && r instanceof Array ? r : r[l], e.children = [], n += 1;
                for (var h = 0; h < d.length; h++) {
                    var s, a = d[h],
                        o = new i;
                    for (var c in null == a.id && (t.count += 1, null == a.attr ? o.id = "rid_" + t.count : null == a.attr.id && (a.attr.id = "rid_" + t.count)), a)
                        for (s in o) c === s && "children" !== c && (o[s] = a[c]), "depth" === s && (o[s] = n);
                    for (s in e.children.push(o), a) "children" === s && this._createTreeDataSource(t, e.children[h], a, n)
                }
            }
        return e
    }, l.prototype.getChildCount = function(t) {
        var e;
        return null == t && (t = this.data.id), (e = this._searchTreeById(this.data, t)).children ? e.children.length : 0
    }, l.prototype.fetchChildren = function(e, r, n, l) {
        var d, h, s = [];
        null == e && (e = this.data.id);
        var a = this._searchTreeById(this.data, e),
            o = null != a.children ? a.children.length : 0;
        r || ((r = []).start = 0, r.count = o), r.count || (r.count = o), r.start || (r.start = 0), d = r.start, h = Math.min(o, d + r.count);
        for (var c = d; c < h; c += 1) {
            var u = new i;
            null != a.children[c].attr && (u.attr = a.children[c].attr), null != a.children[c].id && (u.id = a.children[c].id), null != a.children[c].depth && (u.depth = a.children[c].depth), null != a.children[c].title && (u.title = a.children[c].title), null != a.children[c].parent && (u.parent = a.children[c].parent), null != a.children[c].children ? u.leaf = !1 : u.leaf = !0, s.push(u)
        }
        var p = new t.JsonNodeSet(d, h, s, e, a.depth);
        null != n && null != n.success && n.success.call(null, p)
    }, l.prototype.fetchDescendants = function(e, r, n) {
        var i, l, d = [];
        null == e && (e = this.data.id);
        var h = this._searchTreeById(this.data, e),
            s = null != h.children ? h.children.length : 0,
            a = [];
        a.start = 0, a.count = s, i = a.start, l = Math.min(s, i + a.count);
        for (var o = i; o < l; o += 1) null != h.children[o].children ? h.children[o].leaf = !1 : h.children[o].leaf = !0, d.push(h.children[o]);
        var c = new t.JsonNodeSet(0, d.length, d, e, h.depth);
        null != r && null != r.success && r.success.call(null, c)
    }, l.prototype.moveOK = function(t, e, r) {
        return "valid"
    }, l.prototype.move = function(t, e, n, i) {
        var l = n,
            d = t,
            h = e;
        if (null == h || h === this.data.id) {
            if ("inside" !== l) return void r.error("Error: root can not be the reference node if position equals to " + l);
            h || (h = this.data.id)
        }
        var s = this._searchTreeById(null, d);
        if (this._searchTreeById(s, h)) r.error("Error: the node to move contains the reference node as its sub-tree.");
        else {
            var a, o = this._searchTreeById(null, h),
                c = this._getParentById(h);
            this._removeFromTree(s), "inside" === l ? (this._updateDepth(s, s.depth - (o.depth + 1)), null == o.children && (o.children = []), o.children.push(s)) : "before" === l ? (this._updateDepth(s, s.depth - o.depth), (a = c.children.indexOf(o)) > -1 && (0 !== a ? c.children.splice(a, 0, s) : c.children.unshift(s))) : "after" === l ? (this._updateDepth(s, s.depth - o.depth), (a = c.children.indexOf(o)) > -1 && c.children.splice(a + 1, 0, s)) : "first" === l ? (this._updateDepth(s, s.depth - o.depth), c.children.unshift(s)) : "last" === l && (this._updateDepth(s, s.depth - o.depth), c.children.push(s)), null != i && null != i.success && i.success.call(null, this.data)
        }
    }, l.prototype.sort = function(t, e) {
        var r = this.data.id,
            n = this._searchTreeById(this.data, r);
        n._sortRecursive(t), null != e && null != e.success && e.success.call(null, n)
    }, l.prototype.getSortCriteria = function() {
        return {
            key: null,
            direction: "none"
        }
    }, l.prototype._getParentById = function(t, e) {
        var r, n = null;
        if (t === this.data.id) return null;
        if (null == e && (e = this.data), e.children && e.children.length > 0) {
            for (r = 0; r < e.children.length; r++)
                if (e.children[r].id && e.children[r].id === t || e.children[r].attr && e.children[r].attr.id === t) return e;
            for (r = 0; r < e.children.length; r++)
                if (n = this._getParentById(t, e.children[r])) return n
        }
        return n
    }, l.prototype._searchTreeById = function(t, e) {
        var r = null;
        if (null == t && (t = this.data), t.id && t.id === e || t.attr && t.attr.id === e) return t;
        if (null != t.children) {
            for (var n = 0; n < t.children.length; n++) {
                if (r) return r;
                r = t.children[n].id && t.children[n].id === e || t.children[n].attr && t.children[n].attr.id === e ? t.children[n] : this._searchTreeById(t.children[n], e)
            }
            return r
        }
        return r
    }, l.prototype._updateDepth = function(t, e) {
        if (t.depth -= e, t.children && 0 !== t.children.length)
            for (var r = 0; r < t.children.length; r++) this._updateDepth(t.children[r], e)
    }, l.prototype._removeFromTree = function(t) {
        var e;
        null != t.id ? e = t.id : null != t.attr && (e = t.attr.id);
        var r = this._getParentById(e);
        r || (r = this.data);
        var n = r.children.indexOf(t);
        n > -1 && r.children.splice(n, 1)
    }, l.prototype.getCapability = function(t) {
        return "fetchDescendants" === t ? "enable" : "sort" === t ? "default" : "batchFetch" === t ? "disable" : "move" === t ? "full" : null
    }, l
});
//# sourceMappingURL=ojjsontreedatasource.js.map