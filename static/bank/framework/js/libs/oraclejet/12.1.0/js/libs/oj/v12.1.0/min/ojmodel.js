/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojlogger", "jquery", "ojs/ojconfig"], function(t, e, r, n, o) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    const i = {
        on: function(t, e, r) {
            return this.OnInternal(t, e, r, !1, !1)
        },
        off: function(t, e, r) {
            return this._offInternal(t, e, r, !1)
        },
        trigger: function(t) {
            var e = Array.prototype.slice.call(arguments);
            return e.unshift(!1), i.TriggerInternal.apply(this, e)
        },
        once: function(t, e, r) {
            return this._onceInternal(t, e, r, !1, null)
        },
        listenTo: function(t, e, r) {
            var n, o, s, a, l, u, c, h = {};
            for (c in e.constructor === String ? h[e] = r : h = e, h)
                if (h.hasOwnProperty(c))
                    for (n = i._getEvents(c), o = 0; o < n.length; o += 1) u = {
                        event: s = n[o].event,
                        attribute: a = n[o].attribute,
                        object: t,
                        callback: h[c]
                    }, l = a ? s + ":" + a : s, void 0 === this._listeningTo && (this._listeningTo = []), this._listeningTo.push(u), t.OnInternal(l, h[c], null, !0, !1);
            return this
        },
        listenToOnce: function(t, e, r) {
            var n, o, s, a, l, u, c, h = {};
            for (c in e.constructor === String ? h[e] = r : h = e, h)
                if (h.hasOwnProperty(c))
                    for (n = i._getEvents(c), o = 0; o < n.length; o += 1) u = {
                        event: s = n[o].event,
                        attribute: a = n[o].attribute,
                        object: t,
                        callback: h[c]
                    }, l = a ? s + ":" + a : s, void 0 === this._listeningTo && (this._listeningTo = []), this._listeningTo.push(u), t._onceInternal(l, h[c], null, !0, this);
            return this
        },
        stopListening: function(t, e, r) {
            var n, o, s, a, l, u, c, h, p, f, d, _, g, y = {};
            if (null == arguments || arguments.length <= 1) {
                for (_ = this._listeningTo ? this._listeningTo.length : 0, d = 0; d < _; d++) u = this._listeningTo[d], (c = !t || t === u.object) && u.object._offInternal.apply(u.object, [u.event, u.callback, u.context, !0]);
                return this._listeningTo = [], this
            }
            for (g in o = e, t && t.constructor === String && (o = t), o.constructor === String ? y[o] = r : y = o, y)
                if (y.hasOwnProperty(g))
                    for (n = i._getEvents(g), s = 0; s < n.length; s += 1)
                        for (a = n[s].event, l = n[s].attribute, d = (_ = this._listeningTo ? this._listeningTo.length : 0) - 1; d >= 0; d -= 1) u = this._listeningTo[d], c = !t || t === u.object, h = !a || a === u.event, p = !r || y[g] === u.callback, f = !l || l === u.attribute, c && h && p && f && (this._listeningTo[d].object._offInternal.apply(this._listeningTo[d].object, [this._listeningTo[d].event, this._listeningTo[d].callback, this._listeningTo[d].context, !0]), this._listeningTo.splice(d, 1));
            return this
        },
        EventType: {
            ADD: "add",
            ALLADDED: "alladded",
            REMOVE: "remove",
            RESET: "reset",
            REFRESH: "refresh",
            SORT: "sort",
            CHANGE: "change",
            DESTROY: "destroy",
            ALLREMOVED: "allremoved",
            REQUEST: "request",
            SYNC: "sync",
            ERROR: "error",
            INVALID: "invalid",
            READY: "ready",
            ALL: "all"
        }
    };
    i.bind = i.on, i.unbind = i.off, i.Mixin = function(t, e) {
        var r, n = e || this;
        for (r in n) "function" == typeof n[r] && (t[r] = n[r]);
        t.eventHandlers = {}, t._listeningTo = []
    }, i._onceInternal = function(t, e, r, n, o) {
        var i, s, a, l, u, c, h;
        c = this._getEventMap(t, e, r), u = c.map, h = c.context;
        var p = this;
        return Object.keys(u || {}).forEach(function(t) {
            if (Object.prototype.hasOwnProperty.call(u, t))
                for (i = p._getEvents(t), s = 0; s < i.length; s += 1) a = i[s].event, l = i[s].attribute, void 0 === p.eventHandlers && (p.eventHandlers = []), void 0 === p.eventHandlers[a] && (p.eventHandlers[a] = []), p.eventHandlers[a].push({
                    callback: u[t],
                    context: h,
                    attribute: l,
                    once: !0,
                    fired: !1,
                    listen: n,
                    otherObj: o
                })
        }), this
    }, i._shouldFire = function(t) {
        return !t.once || !t.fired && (t.fired = !0, !0)
    }, i._getContext = function(t, e) {
        return e.context || e.otherObj || t
    }, i.TriggerInternal = function(t, e) {
        var r, n, o, s, a, l, u, c, h, p = this._getEvents(e);
        for (s = [], r = 0; r < p.length; r += 1) n = p[r].event, o = p[r].attribute, s.push({
            event: n,
            attribute: o
        });
        for (r = 0; r < s.length; r += 1) {
            for (c = this._getHandlers(this.eventHandlers, i.EventType.ALL), a = i._getHandlers(this.eventHandlers, s[r].event, !1), l = 0; l < (a ? a.length : 0); l += 1) a[l].attribute === s[r].attribute && a[l].callback && (u = Array.prototype.slice.call(arguments), a && a[l] && a[l].once && (this._removeHandler(i._getHandlers(this.eventHandlers, s[r].event, !0), a[l]), a[l].otherObj && a[l].otherObj.stopListening(this, e, a[l].callback)), a && a[l] && this._shouldFire(a[l]) && (h = a[l].callback, t && !a[l].ignoreSilent || h.apply(i._getContext(this, a[l]), u.slice(2))));
            for (l = 0; l < (c ? c.length : 0); l += 1)(u = Array.prototype.slice.call(arguments)).length > 0 && (s[r].attribute ? u[1] = s[r].event + ":" + s[r].attribute : u[1] = s[r].event), c && c[l] && c[l].callback && this._shouldFire(c[l]) && (h = c[l].callback, t && !c[l].ignoreSilent || h.apply(i._getContext(this, c[l]), u.slice(1))), c && c[l] && c[l].once && (this._removeHandler(this._getHandlers(this.eventHandlers, i.EventType.ALL, !0), c[l]), c[l].otherObj && c[l].otherObj.stopListening(this, i.EventType.ALL, c[l].callback))
        }
        return this
    }, i.OnInternal = function(t, e, r, n, o) {
        var s, a, l, u, c, h, p, f, d = this._getEventMap(t, e, r);
        for (f in s = d.map, p = d.context, s)
            if (s.hasOwnProperty(f))
                for (a = this._getEvents(f), l = 0; l < a.length; l += 1) u = a[l].event, c = a[l].attribute, void 0 === this.eventHandlers && (this.eventHandlers = []), void 0 === this.eventHandlers[u] && (this.eventHandlers[u] = []), h = {
                    callback: s[f],
                    context: p,
                    attribute: c,
                    listen: n,
                    ignoreSilent: o
                }, -1 === this._checkForHandler(this.eventHandlers[u], h, i._handlersIdentical) && this.eventHandlers[u].push(h);
        return this
    }, i._offInternal = function(t, e, r, n) {
        var o, i, s, a;
        if (null == arguments || 0 === arguments.length) return this.eventHandlers = {}, this;
        if (null == t) return this._removeEvent(t, e, r, n), this;
        for (a in o = (i = this._getEventMap(t, e, r)).map, s = i.context, o) o.hasOwnProperty(a) && this._removeEvent(a, o[a], s, n);
        return this
    }, i._getEventMap = function(t, e, r) {
        var n = {};
        return t.constructor !== String ? {
            map: n = t,
            context: e
        } : (n[t] = e, {
            map: n,
            context: r
        })
    }, i._removeEvent = function(t, e, r, n) {
        var o, s, a, l, u, c, h, p, f, d = [];
        if (t) d = i._getEvents(t);
        else if (void 0 !== this.eventHandlers) {
            var _ = this;
            Object.keys(this.eventHandlers || {}).forEach(function(t) {
                Object.prototype.hasOwnProperty.call(_.eventHandlers, t) && d.push({
                    event: t
                })
            })
        }
        for (o = 0; o < d.length; o += 1)
            if (s = d[o].event, l = d[o].attribute, void 0 !== this.eventHandlers && this.eventHandlers[s] instanceof Array) {
                for (a = (u = this.eventHandlers[s]).length - 1; a >= 0; a -= 1) c = null == e || u[a].callback === e, h = null == r || u[a].context === r, p = null == l || u[a].attribute === l, f = null == n || u[a].listen === n, c && h && p && f && u.splice(a, 1);
                0 === u.length && delete this.eventHandlers[s]
            }
    }, i._removeHandler = function(t, e) {
        var r, n, o, i, s, a;
        if (t)
            for (r = t.length - 1; r >= 0; r -= 1) n = void 0 === e.callback || null === e.callback || t[r].callback === e.callback, o = void 0 === e.context || null === e.context || t[r].context === e.context, i = void 0 === e.attribute || null === e.attribute || t[r].attribute === e.attribute, s = void 0 === e.listen || null === e.listen || t[r].listen === e.listen, a = void 0 === e.once || null === e.once || t[r].once === e.once, n && o && i && s && a && t.splice(r, 1)
    }, i._getEvents = function(t) {
        var e, r, n, o, i = t ? t.split(" ") : [],
            s = [];
        for (e = 0; e < i.length; e += 1) n = (r = i[e].split(":"))[0], o = r.length > 1 ? r[1] : null, s.push({
            event: n,
            attribute: o
        });
        return s
    }, i._handlersIdentical = function(t, e) {
        return t.callback === e.callback && t.attribute === e.attribute && t.context === e.context && t.listen === e.listen && t.once === e.once
    }, i._listenersIdentical = function(t, e) {
        return t.event === e.event && t.attribute === e.attribute && t.context === e.context && t.object === e.object
    }, i._checkForHandler = function(t, e, r) {
        var n;
        if (void 0 === t) return -1;
        for (n = 0; n < t.length; n += 1)
            if (r(t[n], e)) return n;
        return -1
    }, i._getHandlers = function(t, e, r) {
        if (t && t[e] instanceof Array) {
            if (r) return t[e];
            var n, o = [];
            for (n = 0; n < t[e].length; n++) o.push(t[e][n]);
            return o
        }
        return null
    }, e._registerLegacyNamespaceProp("Events", i);
    const s = function() {
        this.name = "URLError", this.message = "No URL defined"
    };
    e._registerLegacyNamespaceProp("URLError", s), s.prototype = new Error, s.constructor = s;
    const a = function(t, e) {
        this.rootURL = t, this.model = e, this.customURL = e.customURL, n.support.cors = !0
    };
    e._registerLegacyNamespaceProp("RestImpl", a), a._HEADER_PROP = "headers", a.addOptions = function(t, e, r) {
        var o = n.extend(!0, t, r),
            i = e || {};
        return Object.keys(i).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(i, t) && "oauthHeader" !== t && (Object.prototype.hasOwnProperty.call(o, t) || (o[t] = i[t]), t === a._HEADER_PROP && (o[t] = n.extend(!0, o[t], i[t])))
        }), e && e.oauthHeader && (o[a._HEADER_PROP] || (o[a._HEADER_PROP] = {}), Object.keys(e.oauthHeader || {}).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(e.oauthHeader, t) && (Object.prototype.hasOwnProperty.call(o[a._HEADER_PROP], t) || (o[a._HEADER_PROP][t] = e.oauthHeader[t]))
        })), o
    }, a.prototype.getRecords = function(t, e, r, n) {
        var o = r || {},
            i = "jsonp" === o.dataType,
            s = this._getURL("read", this.rootURL, this.customURL, null, n, o),
            l = {
                crossDomain: o.crossDomain || !i,
                dataType: this._getDataType(o),
                jsonpCallback: o.jsonpCallback,
                context: null !== n ? n : this,
                success: t,
                error: e
            };
        return l = this._addHeaderProp(l), l = a.addOptions(l, o, s), o.xhr = this.ajax(l, n), o.xhr
    }, a.prototype._addHeaderProp = function(t) {
        var e = t || {};
        return this.model && this.model.omitLanguageHeader || (e[a._HEADER_PROP] = {
            "Accept-Language": this.getLocale()
        }), e
    }, a.prototype.getRecord = function(t, e, r, n, o) {
        var i = n || {},
            s = "jsonp" === i.dataType,
            l = this._getURL("read", this.rootURL, this.customURL, r, o, i),
            u = {
                crossDomain: i.crossDomain || !s,
                dataType: this._getDataType(i),
                jsonpCallback: i.jsonpCallback,
                context: null !== o ? o : this,
                success: t,
                error: e
            };
        return u = this._addHeaderProp(u), u = a.addOptions(u, i, l), i.xhr = this.ajax(u, o), i.xhr
    }, a.prototype.updateRecord = function(t, e, r, n, o, i, s) {
        var l = o || {},
            u = "jsonp" === l.dataType,
            c = this._getURL(s ? "patch" : "update", this.rootURL, this.customURL, e, i, l),
            h = a._emulateHTTP(l),
            p = {
                crossDomain: l.crossDomain || !u,
                contentType: this._getContentType(l),
                dataType: this._getDataType(l),
                jsonpCallback: l.jsonpCallback,
                data: this._getData(JSON.stringify(r), l, c),
                emulateHTTP: h,
                emulateJSON: a._emulateJSON(l),
                success: t,
                error: n,
                context: null !== i ? i : this
            };
        return p = this._addHeaderProp(p), p = a.addOptions(p, l, c), p = a._beforeSendMod(h, p), l.xhr = this.ajax(p, i), l.xhr
    }, a._beforeSendMod = function(t, e) {
        var r = e || {};
        if (t) {
            var n = r.beforeSend;
            r.beforeSend = function(t) {
                return t.setRequestHeader("X-HTTP-Method-Override", r._method), n ? n.apply(this, arguments) : null
            }
        }
        return r
    }, a.prototype._getData = function(t, e, r) {
        if (a._emulateJSON(e)) {
            var n = {
                _method: r._method ? r._method : r.type
            };
            return t && (n.model = t), n
        }
        return t
    }, a.prototype._getHTTPMethod = function(t, e) {
        if (e.type) return {
            method: e.type
        };
        var r = null;
        return "create" === t && (r = "POST"), "delete" === t && (r = "DELETE"), "patch" === t && (r = "PATCH"), "update" === t && (r = "PUT"), a._emulateHTTP(e) ? {
            method: "POST",
            _method: r
        } : (null === r && (r = "GET"), {
            method: r
        })
    }, a._emulateHTTP = function(t) {
        return t.emulateHTTP || e.emulateHTTP
    }, a._emulateJSON = function(t) {
        return t.emulateJSON || e.emulateJSON
    }, a.prototype._getURL = function(t, r, o, i, s, l) {
        var u = this._getHTTPMethod(t, l);
        if (n.isFunction(o)) {
            var c = o.call(this, t, s, a.SetCustomURLOptions(i, s, l));
            if (e.StringUtils.isString(c)) {
                var h = {
                    url: c,
                    type: u.method
                };
                return u._method && (h._method = u._method), h
            }
            if (c) return c.url = Object.prototype.hasOwnProperty.call(c, "url") ? c.url : r, Object.prototype.hasOwnProperty.call(c, "type") || (c.type = u.method), Object.prototype.hasOwnProperty.call(c, "data") || u._method && (c._method = u._method), c
        }
        var p = {
            url: a.GetPropValue(null, r),
            type: u.method
        };
        return u._method && (p._method = u._method), p
    }, a.prototype.deleteRecord = function(t, e, r, n) {
        var o = r || {},
            i = "jsonp" === o.dataType,
            s = this._getURL("delete", this.rootURL, this.customURL, t, n, o),
            l = a._emulateHTTP(o),
            u = a._emulateJSON(o),
            c = {
                crossDomain: o.crossDomain || !i,
                success: o.success,
                error: e,
                context: null !== n ? n : this,
                emulateHTTP: l,
                emulateJSON: u
            },
            h = this._getData(null, o, s);
        return h && (c.data = h), c = a.addOptions(c, o, s), c = a._beforeSendMod(l, c), o.xhr = this.ajax(c, n), o.xhr
    }, a.prototype.addRecord = function(t, e, r, n) {
        var o = r || {},
            i = JSON.stringify(t),
            s = "jsonp" === o.dataType,
            l = this._getURL("create", this.rootURL, this.customURL, null, n, o),
            u = a._emulateHTTP(o),
            c = {
                crossDomain: o.crossDomain || !s,
                contentType: o.contentType || "application/json",
                dataType: this._getDataType(o),
                jsonpCallback: o.jsonpCallback,
                data: this._getData(i, o, l),
                success: o.success,
                error: e,
                emulateHTTP: u,
                emulateJSON: a._emulateJSON(o),
                context: null !== n ? n : this
            };
        return c = this._addHeaderProp(c), c = a.addOptions(c, o, l), o.xhr = this.ajax(c, n), o.xhr
    }, a.prototype._getDataType = function(t) {
        return a._emulateJSON(t) && !a._emulateHTTP(t) ? "application/x-www-form-urlencoded" : t.dataType || "json"
    }, a.prototype._getContentType = function(t) {
        return a._emulateJSON(t) && !a._emulateHTTP(t) ? "application/x-www-form-urlencoded" : t.contentType || "application/json"
    }, a.prototype.getLocale = function() {
        return o.getLocale()
    }, a.prototype.ajax = function(t, r) {
        if (null === t.url || void 0 === t.url) throw new s;
        var n = e.ajax(t);
        return r._addxhr && r._addxhr(n), n
    }, a.SetCustomURLOptions = function(t, r, n) {
        var o = r instanceof e.Collection ? r.ModifyOptionsForCustomURL(n) : {};
        return t && (o.recordID = t), o
    }, a.GetPropValue = function(t, e) {
        return t ? n.isFunction(t[e]) ? t[e]() : t[e] : n.isFunction(e) ? e() : e
    };
    const l = function(t, e) {
        l._init(this, t, e, null)
    };
    e._registerLegacyNamespaceProp("Model", l), e.Object.createSubclass(l, e.Object, "oj.Model"), l.prototype.Init = function() {
        l.superclass.Init.call(this)
    }, l.prototype.attributes = {}, l.prototype.defaults = {}, l.prototype.id = null, l.prototype.idAttribute = "id", l.prototype.urlRoot = null, l.prototype.customURL = null, l.prototype.validate = null, l.prototype.validationError = null, l.prototype.omitLanguageHeader = !1, l._idCount = 0, l._init = function(t, e, r, o) {
        var s, a, u;
        if (!l._justExtending) {
            t.Init(), i.Mixin(t), t._clearChanged(), t.previousAttrs = {}, t.nestedSet = !1, t.index = -1;
            var c = r || {};
            for (u in t.attributes = {}, t.defaults && !c.ignoreDefaults && (t.attributes = l._cloneAttributes(n.isFunction(t.defaults) ? t.defaults() : t.defaults, null)), o) Object.prototype.hasOwnProperty.call(o, u) && (t[u] = o[u]);
            if (e)
                if (s = c.parse, n.isFunction(s) && (t.parse = s), a = l._cloneAttributes(e, t.attributes), t.attributes = a, null == (a = s ? t.parse(a) : a) || void 0 === a) t.attributes = {};
                else
                    for (u in a) Object.prototype.hasOwnProperty.call(a, u) && t._setProp(u, a[u], !1, !1, c, !0);
            t.SetCid(), t.SetCollection(c.collection), c.customURL && (t.customURL = c.customURL), c.url && (t.url = c.url), c.urlRoot && (t.urlRoot = c.urlRoot), t.initialize && t.initialize(e, c), t.SetupId()
        }
    }, l.extend = function(t, e) {
        var r;
        l._justExtending = !0, r = new l, l._justExtending = !1, n.extend(r, this.prototype);
        var o, s = t || {};
        return Object.keys(s).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(s, t) && (r[t] = s[t])
        }), o = s && s.constructor && Object.prototype.hasOwnProperty.call(s, "constructor") ? s.constructor : function(t, e) {
            l._init(this, t, e, s)
        }, n.extend(o, this), o.prototype = r, o.extend = l.extend, o.prototype.constructor = o, i.Mixin(o, this), e && Object.keys(e).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t])
        }), o
    }, l.prototype.TriggerInternal = function(t, e, r, n, o) {}, l.prototype.SetCid = function() {
        this.GetCid() || (this.cid = "id" + l._idCount, l._idCount += 1)
    }, l.prototype.GetCid = function() {
        return this.cid
    }, l.prototype.SetIndex = function(t) {
        this.index = t
    }, l.prototype.GetIndex = function() {
        return this.index
    }, l.prototype.SetNext = function(t) {
        var e = this.nextModel;
        return this.nextModel = t, e
    }, l.prototype.GetNext = function() {
        return this.nextModel
    }, l.prototype.SetPrevious = function(t) {
        var e = this.previousModel;
        return this.previousModel = t, e
    }, l.prototype.GetPrevious = function() {
        return this.previousModel
    }, l.prototype.Merge = function(t, r, n) {
        var o, i = !1,
            s = e.StringUtils.isString(r),
            a = !1,
            l = this;
        return Object.keys(t.attributes || {}).forEach(function(e) {
            Object.prototype.hasOwnProperty.call(t.attributes, e) && (o = l.attributes[e] !== t.attributes[e], s ? e === r && o && (i = !0) : o && (i = !0), o && (a = !0, l.attributes[e] = t.attributes[e], l._addChange(e, t.attributes[e]), l._fireAttrChange(e, l.attributes[e], null, n)))
        }), this.SetupId(), a && this._fireChange(null, n), i
    }, l._hasProperties = function(t) {
        var e;
        if (t && t instanceof Object)
            for (e in t)
                if (Object.prototype.hasOwnProperty.call(t, e)) return !0;
        return !1
    }, l.prototype.SetCollection = function(t) {
        null != t ? (this.collection = t, this.SetupId()) : delete this.collection
    }, l.prototype.GetCollection = function() {
        return this.collection
    }, l.prototype._fireAttrChange = function(t, e, r, n) {
        null != t && this.TriggerInternal(n, i.EventType.CHANGE + ":" + t, this, e, r)
    }, l.prototype._fireChange = function(t, e) {
        this.TriggerInternal(e, i.EventType.CHANGE, this, t, null)
    }, l.prototype.SetupId = function() {
        var t = null;
        if (this.collection && this.collection.modelId) {
            var e = this.collection.modelId;
            t = n.isFunction(e) ? e.call(this.collection, this.attributes) : e
        }
        if (!t) {
            var r = this._getIdAttr();
            t = null != this.attributes ? this.attributes[r] : null
        }
        this.id = t
    }, l.prototype._setPropInternal = function(t, r, n) {
        var o = e.Object.__innerEquals(this.attributes[t], r);
        return !(!n && o) && (this.attributes[t] = r, this.SetupId(), !o)
    }, l.prototype._clearChanged = function() {
        this.changed = {}
    }, l.prototype._addChange = function(t, e) {
        this.changed[t] = e
    }, l.prototype._setProp = function(t, e, r, n, o, i) {
        if (null == t) return !0;
        var s, a = {},
            u = this.nestedSet;
        if (n ? Object.keys(t).forEach(function(e) {
                Object.prototype.hasOwnProperty.call(t, e) && (a[e] = t[e])
            }) : a[t] = e, s = o || {}, !this._checkValid(a, {
                validate: s.validate
            }, !1)) return !1;
        u || (this._clearChanged(), this.changes = []), this.nestedSet || i || (this.previousAttrs = l._cloneAttributes(this.attributes, null)), this.nestedSet = !0;
        var c = this;
        Object.keys(a).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(a, t) && (c._setPropInternal(t, a[t], r) ? (c._addChange(t, a[t]), c.changes.push(t)) : delete a[t])
        });
        var h = s.silent;
        if (Object.keys(a).forEach(function(t) {
                Object.prototype.hasOwnProperty.call(a, t) && (!h && (c.changes.length > 0 || u && -1 === c.changes.indexOf(t)) && (c.pendingChanges = !0, c.pendingOpts = s), c._fireAttrChange(t, a[t], s, h))
            }), u) return !0;
        if (!h && !u)
            for (; this.pendingChanges;) this.pendingChanges = !1, this._fireChange(this.pendingOpts, h);
        return this.nestedSet = !1, !0
    }, l.prototype.clear = function(t) {
        var e, r, n = {
                silent: !0
            },
            o = t || {};
        e = o.silent, n.validate = o.validate, this._clearChanged();
        for (r in this.attributes)
            if (Object.prototype.hasOwnProperty.call(this.attributes, r)) {
                if (!this._unsetInternal(r, n, !0)) return !1;
                this.TriggerInternal(e, i.EventType.CHANGE + ":" + r, this, void 0, null)
            }
        return this.attributes = {}, this.SetupId(), this._fireAttrChange(null, null, null, e), this._fireChange(null, e), this
    }, l._cloneAttributes = function(t, r) {
        var o, i, s = r || {},
            a = !0;
        if (("object" == typeof s ? Object.keys(s) : []).length > 0) {
            for (o in s) Object.prototype.hasOwnProperty.call(s, o) && Object.prototype.hasOwnProperty.call(t, o) && void 0 === t[o] && delete t[o];
            return e.CollectionUtils.copyInto(s, t, void 0, !0, 1e4), s
        }
        for (o in t)
            if ("function" === (i = n.type(t[o])) || "undefined" === i || "date" === i || "array" === i || "object" === i) {
                a = !1;
                break
            }
        return a ? s = JSON.parse(JSON.stringify(t)) : "object" == typeof t && e.CollectionUtils.copyInto(s, t, void 0, !0, 1e4), s
    }, l.prototype.clone = function() {
        var t, e = new this.constructor;
        for (t in this) Object.prototype.hasOwnProperty.call(this, t) && this[t] !== this.attributes && (e[t] = this[t]);
        return e.attributes = l._cloneAttributes(this.attributes, null), delete e.cid, e.SetCid(), e.SetupId(), e
    }, l.prototype.Match = function(t, e) {
        var r, n = this.GetId();
        return void 0 !== n && n == t || void 0 !== (r = this.cid) && r == e
    }, l.prototype.set = function(t, r, n) {
        var o, i = n || {},
            s = !0;
        if (arguments && arguments.length > 0)
            if (e.StringUtils.isString(t)) i.unset ? this._unsetInternal(t, null, !1) : this._setProp(t, r, !1, !1, i, !1) || (s = !1);
            else if ((i = r || {}).unset)
            for (o in t) Object.prototype.hasOwnProperty.call(t, o) && this._unsetInternal(o, null, !1);
        else this._setProp(t, null, !0, !0, i, !1) || (s = !1);
        return !!s && this
    }, l.prototype.unset = function(t, e) {
        return this._unsetInternal(t, e, !1)
    }, l.prototype._unsetInternal = function(t, e, r) {
        var n = e || {},
            o = n.silent;
        if (this.has(t)) {
            if (!this._checkValid({}, n, !1)) return !1;
            r || this._clearChanged(), delete this.attributes[t], this._addChange(t, void 0), this._fireAttrChange(t, null, null, o), this._fireChange(null, o)
        }
        return this.SetupId(), !0
    }, l.prototype.get = function(t) {
        return this.attributes[t]
    }, l.prototype.has = function(t) {
        return e.Collection._defined(this.attributes[t])
    }, l.prototype.fetch = function(t) {
        var e, r = t || {},
            o = r.success,
            i = r.error,
            s = this;
        return (e = l._copyOptions(r)).error = function(e, n, o) {
            l._triggerError(s, !1, r, n, o, e), i && i.apply(s, [s, o, t, e, n])
        }, e.success = function(t) {
            e.xhr && (r.xhr = e.xhr), l._fireSyncEvent(s, t, e, !1), n.isFunction(s.parse) && s.set(s.parse(t), e), o && o.call(l.GetContext(e, s), s, t, r)
        }, l._internalSync("read", this, e)
    }, l.prototype._parseImpl = function(t) {
        return t
    }, l.prototype.parse = l.prototype._parseImpl, l.prototype.url = function() {
        var t, e, r = this._getUrlRoot(),
            n = this.GetId();
        if (r) return n ? r + "/" + encodeURIComponent(n) : r;
        if (t = this.collection) return e = a.GetPropValue(t, "url"), n && e ? e + ("/" === l._getLastChar(e) ? "" : "/") + encodeURIComponent(this.GetId()) : e;
        throw new s
    }, l.prototype.keys = function() {
        var t = [],
            e = this;
        return Object.keys(e.attributes || {}).forEach(function(r) {
            Object.prototype.hasOwnProperty.call(e.attributes, r) && t.push(r)
        }), t
    }, l.prototype.values = function() {
        var t = [],
            e = this;
        return Object.keys(e.attributes || {}).forEach(function(r) {
            Object.prototype.hasOwnProperty.call(e.attributes, r) && t.push(e.get(r))
        }), t
    }, l.prototype.pairs = function() {
        var t, e = [],
            r = this;
        return Object.keys(r.attributes || {}).forEach(function(n) {
            Object.prototype.hasOwnProperty.call(r.attributes, n) && ((t = []).push(n), t.push(r.get(n)), e.push(t))
        }), e
    }, l.prototype.omit = function(t) {
        var e, r = [],
            n = {};
        if (t instanceof Array) r = t;
        else
            for (e = 0; e < arguments.length; e++) r.push(arguments[e]);
        var o = this;
        return Object.keys(o.attributes || {}).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(o.attributes, t) && -1 === r.indexOf(t) && (n[t] = o.get(t))
        }), n
    }, l.prototype.pick = function(t) {
        var e, r = [],
            n = {};
        if (t instanceof Array) r = t;
        else
            for (e = 0; e < arguments.length; e++) r.push(arguments[e]);
        for (e = 0; e < r.length; e++) Object.prototype.hasOwnProperty.call(this.attributes, r[e]) && (n[r[e]] = this.get(r[e]));
        return n
    }, l.prototype.invert = function() {
        var t, e = {},
            r = this;
        return Object.keys(r.attributes || {}).forEach(function(n) {
            Object.prototype.hasOwnProperty.call(r.attributes, n) && (t = r.get(n), e[t] = n)
        }), e
    }, l._getLastChar = function(t) {
        return t.charAt(t.length - 1)
    }, l.prototype._saveUrl = function() {
        var t = this._getUrlRoot();
        return t || (this.GetCollection() ? this.GetCollection().url : null)
    }, l.prototype._getUrlRoot = function() {
        return a.GetPropValue(this, "urlRoot")
    }, l.prototype._parseSaveImpl = function(t) {
        return t
    }, l.prototype.parseSave = l.prototype._parseSaveImpl, l.prototype.isValid = function() {
        var t = {
            validate: this.validate
        };
        return this._checkValid(this.attributes, t, !1)
    }, l._isValidateSet = function(t, e) {
        var r = t || {};
        return void 0 !== r.validate && null !== r.validate ? r.validate : e
    }, l.prototype._checkValid = function(t, e, r) {
        var n = e || {},
            o = this.validate;
        return !(o && l._isValidateSet(n, r) && (this.validationError = o.call(this, t, n), this.validationError)) || (this.TriggerInternal(!1, i.EventType.INVALID, this, this.validationError, n), !1)
    }, l._processArgs = function(t) {
        var r, n = !1,
            o = {},
            i = {};
        if (t && t.length > 0) {
            if (t.length > 1 && t[t.length - 1] && l._hasProperties(t[t.length - 1]) && (n = !0, o = t[t.length - 1] || {}), null == t[0]) return {
                attributes: null,
                options: o
            };
            if (l._hasProperties(t[0]) || e.Object.isEmpty(t[0])) Object.keys(t[0]).forEach(function(e) {
                Object.prototype.hasOwnProperty.call(t[0], e) && (i[e] = t[0][e])
            });
            else
                for (r = 0; r < t.length; r += 2)(void 0 !== t[r] || r < t.length - 1 || !n && r === t.length - 1) && (i[t[r]] = t[r + 1])
        }
        return {
            attributes: i,
            options: o
        }
    }, l._copyOptions = function(t) {
        var e = {},
            r = t || {};
        return Object.keys(r).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }), e
    }, l._triggerError = function(t, e, r, n, o, s) {
        var a = r || {};
        a.textStatus = n, a.errorThrown = o, t.TriggerInternal(e, i.EventType.ERROR, t, s, a)
    }, l.prototype.save = function(t, r) {
        var o, i, s, a, u, c, h, p, f, d = l._processArgs(arguments);
        f = void 0 === t ? void 0 : d.attributes;
        var _ = r || {};
        h = l._copyOptions(d.options);
        var g = n.extend(!0, {}, this.attributes, f);
        return !!this._checkValid(g, h, !0) && (h.wait || this.set(f), o = void 0 !== h.forceNew && h.forceNew, a = this, u = h.error, c = h.patch, h.error = function(t, e, n) {
            l._triggerError(a, !1, _, e, n, t), u && u.apply(a, [a, n, r, t, e])
        }, h.saveAttrs = h.wait ? this._attrUnion(f) : this.attributes, p = this.attributes, this.attributes = h.saveAttrs, h.saveAttrs = this.toJSON(), this.attributes = p, o || this.isNew() ? (s = l._getSuccess(h), h.success = function(t) {
            var r;
            if (h.xhr && (_.xhr = h.xhr), t && !e.Object.isEmpty(t)) {
                if (r = n.isFunction(a.parse) ? a.parse(t) : t, !a._checkValid(r, h, !0)) return;
                a.attributes = n.extend(!0, a.attributes, r), h.wait && Object.keys(f || {}).forEach(function(t) {
                    Object.prototype.hasOwnProperty.call(r, t) && (f[t] = r[t])
                }), a.SetupId()
            }
            l._fireSyncEvent(a, t, h, !1), h.wait && a.set(f), s && s.call(l.GetContext(h, a), a, t, _), a._clearChanged()
        }, h.attrs || (h.attrs = h.saveAttrs), h.parse = !0, c && (h.saveAttrs = h.attrs), l._internalSync("create", this, h)) : (i = h.success, h.success = function(t) {
            var r;
            h.xhr && (_.xhr = h.xhr), t && !e.Object.isEmpty(t) && (r = n.isFunction(a.parse) ? a.parse(t) : t, a.attributes = n.extend(!0, a.attributes, r), h.wait && Object.keys(f || {}).forEach(function(t) {
                Object.prototype.hasOwnProperty.call(r, t) && (f[t] = r[t])
            }), a.SetupId()), l._fireSyncEvent(a, t, h, !1), h.wait && a.set(f), i && i.call(l.GetContext(h, a), a, t, _), a._clearChanged()
        }, h.attrs || (h.attrs = void 0 === f ? void 0 : c ? f : h.saveAttrs), l._internalSync(c ? "patch" : "update", this, h)))
    }, l.prototype._attrUnion = function(t) {
        var e = {},
            r = this;
        return Object.keys(r.attributes || {}).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(r.attributes, t) && (e[t] = r.attributes[t])
        }), Object.keys(t || {}).forEach(function(r) {
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }), e
    }, l.IsComplexValue = function(t) {
        return t && Object.prototype.hasOwnProperty.call(t, "value") && Object.prototype.hasOwnProperty.call(t, "comparator")
    }, l.prototype._hasAttrs = function(t) {
        var r;
        for (r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                if (!Object.prototype.hasOwnProperty.call(this.attributes, r)) return !1;
                for (var n = Array.isArray(t[r]) ? t[r] : [t[r]], o = 0; o < n.length; o++)
                    if (l.IsComplexValue(n[o])) {
                        var i = n[o].comparator,
                            s = n[o].value;
                        if (e.StringUtils.isString(i)) throw new Error("String comparator invalid for local where/findWhere");
                        if (!i(this, r, s)) return !1
                    } else if (t[r] !== this.attributes[r]) return !1
            }
        return !0
    }, l.prototype.matches = function(t) {
        return function(e) {
            for (var r in t)
                if (e.get(r) !== t[r]) return !1;
            return !0
        }(this)
    }, l.prototype.Contains = function(t) {
        var e, r = t.constructor === Array ? t : [t];
        for (e = 0; e < r.length; e++)
            if (this._hasAttrs(r[e])) return !0;
        return !1
    }, l._getSuccess = function(t) {
        return null != t && t.success ? t.success : null
    }, l.GetContext = function(t, e) {
        return void 0 !== t && void 0 !== t.context ? t.context : e
    }, l.prototype.isNew = function() {
        return void 0 === this.GetId()
    }, l.prototype._getIdAttr = function() {
        return this.idAttribute || "id"
    }, l.prototype.GetId = function() {
        return this.id
    }, l.prototype.changedAttributes = function(t) {
        if (t) {
            var r = {},
                n = this;
            return Object.keys(t).forEach(function(o) {
                Object.prototype.hasOwnProperty.call(t, o) && (e.Object.__innerEquals(t[o], n.attributes[o]) || (r[o] = t[o]))
            }), !e.Object.isEmpty(r) && r
        }
        return !e.Object.isEmpty(this.changed) && this.changed
    }, l.prototype.hasChanged = function(t) {
        return void 0 !== t ? l._hasProperties(this.changed) && Object.prototype.hasOwnProperty.call(this.changed, t) : l._hasProperties(this.changed)
    }, l.prototype.destroy = function(t) {
        var r, n, o, s = t || {},
            a = s.wait,
            u = s.error,
            c = this;
        o = l._copyOptions(s), r = l._getSuccess(o);
        var h = this.GetCollection();
        return o.success = function(t) {
            if (o.xhr && (s.xhr = o.xhr), h) {
                var n = e.StringUtils.isString(t) && !e.StringUtils.isEmpty(t) ? JSON.parse(t) : t;
                h._setPagingReturnValues(n, null, t, !0)
            }
            a && c._fireDestroy(!1), l._fireSyncEvent(c, t, o, !1), r && r.call(l.GetContext(o, c), c, t, s)
        }, o.error = function(e, r, n) {
            c.TriggerInternal(!1, i.EventType.ERROR, c, e, s), u && u.apply(c, [c, n, t, e, r])
        }, this.isNew() ? (a || this._fireDestroy(!1), r && r.call(l.GetContext(o, c), c, null, s), !1) : (n = l._internalSync("delete", this, o), a || this._fireDestroy(!1), n)
    }, l.prototype._fireRequest = function(t, e, r, n) {
        this.TriggerInternal(n, i.EventType.REQUEST, t, e, r)
    }, l.prototype._fireDestroy = function(t) {
        this.TriggerInternal(t, i.EventType.DESTROY, this, this.collection, null)
    }, l._fireSyncEvent = function(t, e, r, n) {
        t.TriggerInternal(n, i.EventType.SYNC, t, e, r)
    }, l.prototype.toJSON = function() {
        var t = {},
            e = this;
        return Object.keys(e.attributes || {}).forEach(function(r) {
            Object.prototype.hasOwnProperty.call(e.attributes, r) && (Array.isArray(e.attributes[r]) ? t[r] = e.attributes[r].slice(0) : t[r] = e.attributes[r])
        }), t
    }, l.prototype.previous = function(t) {
        return this.previousAttrs[t]
    }, l.prototype.previousAttributes = function() {
        return this.previousAttrs
    }, l.prototype.sync = function(t, r, n) {
        return e.sync(t, r, n)
    }, l._internalSync = function(t, e, r) {
        var n = r || {};
        e.oauth && (n.oauthHeader = e.oauth.getHeader()), !n.dataType && e.dataType && (n.dataType = e.dataType), !n.jsonpCallback && e.jsonpCallback && (n.jsonpCallback = e.jsonpCallback), "create" !== t && "patch" !== t && "update" !== t || (n.parsedData = e.parseSave.call(e, "patch" === t ? n.attrs : n.saveAttrs));
        var o = null;
        e instanceof l && (o = e.GetId());
        var i = {};
        Object.keys(n).forEach(function(t) {
            i[t] = n[t]
        });
        var s = a.SetCustomURLOptions(o, e, n);
        return Object.keys(s || {}).forEach(function(t) {
            i[t] = s[t]
        }), n.xhr = e.sync(t, e, i), i.xhr && (n.xhr = i.xhr), n.xhr
    };
    const u = function(t, e, r) {
        var n, o = r || {};

        function i(t) {
            return e._fireRequest(e, t, o, o.silent), t
        }
        var s, u = o.success,
            c = o.error;
        if ("create" === t.valueOf()) return s = (s = e._saveUrl()) || a.GetPropValue(e, "url"), i((n = new a(s, e)).addRecord(o.parsedData, c, o, e));
        if ("read" === t.valueOf()) return e instanceof l ? (s = o.url ? o.url : a.GetPropValue(e, "url"), i((n = new a(s, e)).getRecord(u, c, e.GetId(), o, l.GetContext(o, e)))) : (s = e.GetCollectionFetchUrl(o), i((n = new a(s, e)).getRecords(u, c, o, e)));
        n = new a(a.GetPropValue(e, "url"), e);
        var h = null;
        return e instanceof l && (h = e.GetId()), "update" === t.valueOf() ? i(n.updateRecord(u, h, o.parsedData, c, o, e, !1)) : "patch" === t.valueOf() ? i(n.updateRecord(u, h, o.parsedData, c, o, e, !0)) : "delete" === t.valueOf() ? i(n.deleteRecord(h, c, o, e)) : null
    };
    e._registerLegacyNamespaceProp("sync", u), l._urlError = function(t) {
        if (!t.url) throw new Error("The url property or function must be specified")
    };
    const c = function(t) {
        return arguments && arguments.length > 0 && l._urlError(arguments[0]), n.ajax.apply(e, arguments)
    };
    e._registerLegacyNamespaceProp("ajax", c);
    const h = function(t, e) {
        h._justExtending || h._init(this, t, e, null)
    };
    e._registerLegacyNamespaceProp("Collection", h), e.Object.createSubclass(h, e.Object, "oj.Collection"), h.prototype.model = null, h.prototype.modelId = function(t) {
        var e = this.model;
        return e && t ? t[e.idAttribute || e.prototype.idAttribute || "id"] : null
    }, h.prototype.length = null, h.prototype.models = null, h.prototype._modelIndices = [], h.prototype.url = null, h.prototype.changes = [], h.prototype.customURL = null, h.prototype.customPagingOptions = null, h.prototype.lastFetchSize = null, h.prototype.hasMore = !1, h.prototype.totalResults = null, h.prototype.lastFetchCount = null, h.prototype.modelLimit = -1, h.prototype.offset = null, h.prototype.fetchSize = -1, h.prototype.sortDirection = 1, h.prototype.comparator = null, h.prototype.omitLanguageHeader = !1, h.prototype.Init = function() {
        h.superclass.Init.call(this)
    }, h.extend = function(t, e) {
        var r, o = null;
        return h._justExtending = !0, o = new h, h._justExtending = !1, n.extend(o, this.prototype), r = t && t.constructor && Object.prototype.hasOwnProperty.call(t, "constructor") ? t.constructor : function(e, r) {
            h._init(this, e, r, t)
        }, e && Object.keys(e).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
        }), t && Object.keys(t).forEach(function(e) {
            Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e])
        }), n.extend(r, this), r.prototype = o, r.extend = h.extend, r.prototype.constructor = r, r
    }, h._init = function(t, e, r, n) {
        var o, s, a, l;
        if (t.Init(), i.Mixin(t), n)
            for (l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
        var u = r || {};
        for (s = ["comparator", "customPagingOptions", "customURL", h._FETCH_SIZE_PROP, "model", "modelLimit", "sortDirection", "url"], o = 0; o < s.length; o++) Object.prototype.hasOwnProperty.call(u, s[o]) && void 0 !== u[s[o]] && (t[s[o]] = u[s[o]]);
        void 0 === t._getFetchSize(null) && t.setFetchSize(-1), void 0 === t.modelLimit && t.setModelLimit(-1), t.hasMore = !1, t.lruCount = 0, t._setModels([], !0);
        var c = e;
        u.parse && (c = t.parse(e)), null != c && (u.noparse = !0, a = c instanceof Array ? c : [c], t._addInternal(a, u, !0, !1)), t._setLength(), c || (t.totalResults = void 0), n && n.initialize && n.initialize.call(t, c, u)
    }, h.prototype.on = function(t, e) {}, h.prototype.OnInternal = function(t, e, r, n, o) {}, h.prototype.TriggerInternal = function(t, e, r, n, o) {}, h.prototype._fireRequest = function(t, e, r, n) {
        this.TriggerInternal(n, i.EventType.REQUEST, t, e, r)
    }, h.prototype._resetChanges = function() {
        this.changes = []
    }, h.prototype._setChangeAt = function(t, e) {
        for (var r = t; r < t + e; r++) - 1 === this.changes.indexOf(r) && this.changes.push(r)
    }, h.prototype._setModels = function(t, e) {
        if (this.models = t, e) this._modelIndices = [], this._resetChanges();
        else
            for (var r = 0; r < t.length; r++) t[r] && this._modelIndices.push(r)
    }, h.prototype._getModels = function() {
        return this.models
    }, h.prototype._getModelsLength = function() {
        return this._getModels().length
    }, h.prototype._overUpperLimit = function(t) {
        return !(t < this._getModelsLength()) && !(this.IsVirtual() && (!this._hasTotalResults() || 0 === this._getModelsLength()))
    }, h.prototype._hasTotalResults = function() {
        return h._defined(this.totalResults)
    }, h._defined = function(t) {
        return null != t
    }, h.prototype._pushModel = function(t) {
        this._getModels().push(t), this._modelIndices.push(this._getModelsLength() - 1), this._setChangeAt(this._getModelsLength() - 1, 1)
    }, h.prototype._pushModels = function(t) {
        this._makeModelHead(t), this._pushModel(t), this.lruCount += 1, t.SetIndex(this._getModelsLength() - 1)
    }, h.prototype._reduceLRU = function(t) {
        if (t)
            for (var e = 0; e < t.length; e++) t[e] && (this.lruCount -= 1)
    }, h.prototype._spliceModels = function(t, e, r) {
        for (var n = t; n < t + e; n++) this._removePrevNext(this._getModel(n));
        void 0 === r ? (this._reduceLRU(this._getModels().splice(t, e)), this._spliceModelIndices(t, t + e - 1)) : (this._reduceLRU(this._getModels().splice(t, e, r)), this._spliceModelIndices(t, t + e - 1), this._insertModelIndex(t), this._makeModelHead(r)), this._setChangeAt(t, e), this.lruCount < 0 && (this.lruCount = 0), this._realignModelIndices(t)
    }, h.prototype._getModel = function(t) {
        return this._getModels()[t]
    }, h.prototype._realignModelIndices = function(t) {
        for (var e, r = 0; r < this._modelIndices.length; r++)(e = this._modelIndices[r]) >= t && this._getModel(e) && this._getModel(e).SetIndex(e)
    }, h.prototype._removePrevNext = function(t) {
        if (t) {
            var e = t.GetPrevious(),
                r = t.GetNext();
            e ? e.SetNext(r) : this.head = r, r ? r.SetPrevious(e) : this.tail = e
        }
    }, h.prototype._makeModelHead = function(t) {
        t.SetNext(this.head), this.head ? this.head.SetPrevious(t) : this.tail = t, t.SetPrevious(null), this.head = t
    }, h.prototype._setModelIndex = function(t) {
        -1 === this._modelIndices.indexOf(t) && this._modelIndices.push(t)
    }, h.prototype._insertModelIndex = function(t) {
        for (var e = 0; e < this._modelIndices.length; e++) this._modelIndices[e] >= t && (this._modelIndices[e] += 1);
        this._modelIndices.push(t)
    }, h.prototype._spliceModelIndices = function(t, e) {
        var r = void 0 === e ? t : e;
        this._clearModelIndices(t, r);
        for (var n = r - t + 1, o = 0; o < this._modelIndices.length; o++) this._modelIndices[o] > r && (this._modelIndices[o] -= n)
    }, h.prototype._clearModelIndices = function(t, e) {
        for (var r = void 0 === e ? t : e, n = t; n <= r; n++) {
            var o = this._modelIndices.indexOf(t);
            o > -1 && this._modelIndices.splice(o, 1)
        }
    }, h.prototype._setModel = function(t, e) {
        var r = this._getModel(t);
        this._removePrevNext(r), r || (this.lruCount += 1), this._setChangeAt(t, 1), this._getModels()[t] = e, e && (this._setModelIndex(t), e.SetIndex(t), this._makeModelHead(e))
    }, h.prototype._clearOutModels = function(t) {
        var e, r, n = this.tail,
            o = 0;
        for (this.tail = null; n && o < t;) e = n.GetIndex(), (r = this._getModel(e)) && r.hasChanged() ? (this.tail || (this.tail = n), n = n.GetPrevious()) : (this.lruCount -= 1, e > -1 && (this._setModel(e, void 0), this._clearModelIndices(e, e)), n.SetNext(null), n = n.SetPrevious(null), o += 1);
        this.tail || (this.tail = n), this.lruCount < 0 && (this.lruCount = 0), 0 === this.lruCount && (this.head = null, this.tail = null)
    }, h.prototype._resetLRU = function() {
        this.lruCount = 0, this.head = null, this.tail = null
    }, h.prototype._manageLRU = function(t) {
        if (this.IsVirtual()) {
            var e = this._getModelLimit();
            e > -1 && this.lruCount + t > e && this._clearOutModels(this.lruCount + t - e)
        }
    }, h.prototype.clone = function() {
        return this._cloneInternal(!0)
    }, h.prototype._cloneInternal = function(t) {
        var e, r, n = new this.constructor;
        if (this.IsVirtual() && (n = this._copyFetchProperties(n))._resetModelsToFullLength(this.totalResults), n = this._copyProperties(n), t) {
            var o, i = [];
            for (e = 0; e < this._modelIndices.length; e++) i.push(this._modelIndices[e]);
            for (i.sort(function(t, e) {
                    return t - e
                }), e = 0; e < i.length; e++) o = i[e], (r = this._atInternal(o, null, !0, !1)) && n._addInternal(r.clone(), {
                at: o
            }, !0, !1)
        }
        return n
    }, h.prototype._copyProperties = function(t) {
        var e, r, n = ["comparator", "model", "modelId"];
        for (r = 0; r < n.length; r++) t[e = n[r]] = this[e];
        return t
    }, h.prototype._copyFetchProperties = function(t) {
        var e, r, n = ["totalResults", "hasMore", h._FETCH_SIZE_PROP];
        for (r = 0; r < n.length; r++) t[e = n[r]] = this[e];
        return t
    }, h.prototype._getLength = function() {
        return this.length
    }, h.prototype._setLength = function() {
        var t = this._getModelsLength();
        this.length = t, this.IsVirtual() || (this.totalResults = t)
    }, h._createModel = function(t, e, r) {
        return t.model ? n.isFunction(t.model) ? new t.model(e, r) : new t.model.constructor(e, r) : null
    }, h.prototype._newModel = function(t, e, r, n) {
        var o, s = null,
            a = r || {};
        return a.ignoreDefaults = n, t instanceof l ? s = t : this.model ? s = h._createModel(this, t, a) : (a.collection = this, s = new l(t, a)), a.validate && s.validate && (o = s.validate(s.attributes)) ? (a.validationError = o, this.TriggerInternal(!1, i.EventType.INVALID, s, o, a), null) : s
    }, h.prototype.add = function(t, e) {
        this._manageLRU(1);
        var r = e || {};
        return this._handlePromise(this._addInternal(t, e, !1, r.deferred))
    }, h.prototype._addInternal = function(t, n, o, s) {
        var a, u, c, p = n || {},
            f = [],
            d = p.at,
            _ = p.silent,
            g = p.force,
            y = p.merge || !1,
            v = p.sort,
            m = !0,
            I = !1,
            O = [],
            b = [];

        function E(t, n, s, a, l) {
            var h, f = null;
            return !g && y && s ? (m = s.Merge(n, t.comparator, _), f = s) : (g || (h = o && a.isNew() ? void 0 : t._getLocal(a)) && o && d !== h.index && r.warn("Duplicate ID fetched or added without merging, the id = " + h.GetId()), void 0 === h ? (! function(t, e) {
                    void 0 === d ? (t._pushModels(e), u = t._getModelsLength() - 1, t._getModel(u).SetCid()) : (u = d, t.IsVirtual() && o ? t._setModel(u, e) : t._spliceModels(u, 0, e), t._getModel(u).SetCid(), d += 1), void 0 === e.GetCollection() && e.SetCollection(t), t._setLength(), t._listenToModel(e), I = !0
                }(t, a), f = a) : f = h),
                function(t, r, n, s, a) {
                    var l = p || {};
                    o && (l.fillIn = !0);
                    var h = l.comparator || t._hasComparator();
                    if ((!o || o && h) && m && void 0 === r && !v && void 0 === d && t._getLength() > 1) {
                        u > -1 && (c = t._getModel(u).cid);
                        var f = {};
                        e.CollectionUtils.copyInto(f, l), f.add = !0, t.sort(f), u > -1 && (u = t.IsVirtual() ? -1 : t.indexOf(t.getByCid(c), a))
                    }
                    I && (l.at && (l.index = u), s ? (s.TriggerInternal(_, i.EventType.ADD, s, t, l), O.push(s)) : (n.TriggerInternal(_, i.EventType.ADD, n, t, l), O.push(n)))
                }(t, h, s, a, l), f
        }

        function P(t, e, r) {
            I = !1;
            var n = t._newModel(e, !0, p, !1),
                i = null,
                s = null;
            if (null != n) {
                if (u = -1, n.SetupId(), i = e instanceof l ? e : n, r) return g ? new Promise(function(e) {
                    var o = E(t, i, void 0, n, r);
                    b.push(o), e(o)
                }) : t._getInternal(i, {
                    silent: !0
                }, r, !0).then(function(e) {
                    s = e.m;
                    var o = E(t, i, s, n, r);
                    b.push(o)
                });
                !g && y && (s = o ? t._getLocal(i) : t.get(i));
                var a = E(t, i, s, n, r);
                a && b.push(a)
            } else b.push(!1);
            return Promise.resolve()
        }

        function T(t, e) {
            return t.parse && p.parse && !p.noparse ? t.parse(e) : e
        }
        if (void 0 !== d && d < 0 && (d += this._getLength() + 1), t instanceof Array ? f = t : f.push(t), !o && (this.IsVirtual() || s)) {
            var R = this;
            return new Promise(function(t, e) {
                var r = function(t) {
                        return new Promise(function(e, r) {
                            P(R, f[t], !0).then(function() {
                                e(t + 1)
                            }, r)
                        })
                    },
                    n = Promise.resolve(0);
                for (f = T(R, f), a = 0; a < f.length; a++) n = n.then(r);
                n.then(function() {
                    O.length > 0 && R.TriggerInternal(p.silent, i.EventType.ALLADDED, R, O, p), t(h._returnModels(b))
                }, e)
            })
        }
        for (f = T(this, f), a = 0; a < f.length; a++) P(this, f[a], !1);
        return O.length > 0 && this.TriggerInternal(p.silent, i.EventType.ALLADDED, this, O, p), h._returnModels(b)
    }, h._returnModels = function(t) {
        return 1 === t.length ? t[0] : t
    }, h.prototype._hasComparator = function() {
        return h._defined(this.comparator)
    }, h.prototype.sort = function(t) {
        var e, r, n = t || {},
            o = n.silent,
            s = this.comparator;
        if (!this._hasComparator()) return null;
        if (this.IsVirtual()) {
            var a = this.totalResults;
            this._hasTotalResults() ? this._setModels(new Array(a), !0) : (this._setModels([], !0), this._resetLRU(), this._setLength()), r = n.add ? {
                add: !0
            } : null, this.TriggerInternal(o, i.EventType.SORT, this, r, null);
            var l = n.startIndex;
            return null != l ? this.setRangeLocal(l, this._getFetchSize(n)) : null
        }
        return e = this, this._getModels().sort(function(t, r) {
            return h.SortFunc(t, r, s, e, e)
        }), this._realignModelIndices(0), r = n.add ? {
            add: !0
        } : null, this.TriggerInternal(o, i.EventType.SORT, this, r, null), null
    }, h._getKey = function(t, e) {
        return t instanceof l ? t.get(e) : a.GetPropValue(t, e)
    }, h.SortFunc = function(t, r, o, i, s) {
        var a, l, u, c;
        if (n.isFunction(o)) {
            if (1 === o.length) {
                a = o.call(s, t), l = o.call(s, r);
                var p = e.StringUtils.isString(a) ? a.split(",") : [a],
                    f = e.StringUtils.isString(l) ? l.split(",") : [l];
                for (u = 0; u < p.length; u++)
                    if (0 !== (c = h._compareKeys(p[u], f[u], i.sortDirection))) return c
            }
            return o.call(s, t, r)
        }
        if (e.StringUtils.isString(o)) {
            var d = o.split(",");
            for (u = 0; u < d.length; u++)
                if (a = h._getKey(t, d[u]), l = h._getKey(r, d[u]), 0 !== (c = h._compareKeys(a, l, i.sortDirection))) return c
        }
        return 0
    }, h.prototype.sortedIndex = function(t, r) {
        var o, i, s = r || this.comparator;
        return s ? (this._throwErrIfVirtual("sortedIndex"), o = this, i = function(t, r) {
            var i, a;
            if (n.isFunction(s)) {
                if (1 === s.length) {
                    i = s.call(o, t), a = s.call(o, r);
                    var l, u, c = e.StringUtils.isString(i) ? i.split(",") : [i],
                        p = e.StringUtils.isString(a) ? a.split(",") : [a];
                    for (u = 0; u < c.length; u++)
                        if (0 !== (l = h._compareKeys(c[u], p[u], o.sortDirection))) return l
                }
                return s.call(o, t, r)
            }
            return e.StringUtils.isString(s) ? (i = t.get(s), a = r.get(s), h._compareKeys(i, a, o.sortDirection)) : 0
        }, h._find(this._getModels(), t, i)) : -1
    }, h._find = function(t, e, r) {
        return function n(o, i) {
            var s, a, l;
            return o > i ? -1 : (s = e.GetCid(), a = e.GetId(), t[o].Match(a, s) ? o : t[i].Match(a, s) ? i : (l = Math.floor((i + o) / 2), -1 === r(t[l], e) ? n(o + 1, l) : 1 === r(t[l], e) ? n(l, i - 1) : l))
        }(0, t.length - 1)
    }, h._compareKeys = function(t, e, r) {
        if (-1 === r) {
            if (t < e) return 1;
            if (e < t) return -1
        } else {
            if (t > e) return 1;
            if (e > t) return -1
        }
        return 0
    }, h.prototype.unshift = function(t, r) {
        var n = {};
        return e.CollectionUtils.copyInto(n, r || {}), n.at || (n.at = 0), this._manageLRU(1), this._handlePromise(this._addInternal(t, n, !1, n.deferred))
    }, h.prototype._handlePromise = function(t) {
        return n.isFunction(t.then) ? this._addPromise(function() {
            return t
        }) : t
    }, h.prototype.shift = function(t) {
        var e, r = t || {},
            n = this._getDeferred(r);
        if (this.IsVirtual() || n) {
            var o = this;
            return this._atInternal(0, r, !1, !0).then(function(t) {
                return e = o._removeInternal(t, 0, r), o.TriggerInternal(r.silent, i.EventType.ALLREMOVED, o, [e], r), e
            })
        }
        return e = this._removeInternal(this.at(0), 0, r), this.TriggerInternal(r.silent, i.EventType.ALLREMOVED, this, [e], r), e
    }, h.prototype.initial = function(t) {
        var e = void 0 === t ? 1 : t;
        this._throwErrIfVirtual("initial");
        var r, n = [];
        for (r = 0; r < this._getLength() - e; r += 1) n.push(this.at(r));
        return n
    }, h.prototype._getDeferred = function(t) {
        return (t || {}).deferred
    }, h.prototype.last = function(t, e) {
        var r, n = this._getDeferred(e),
            o = void 0 === t ? 1 : t;
        if (1 === o) return 0 === (r = this._getModelsLength()) && (r = o), r > 0 ? this._atInternal(r - 1, e, !1, n) : null;
        var i, s = [];
        if (r = this._getLength(), n || this.IsVirtual()) {
            var a = r - t;
            a < 0 && (a = 0), 0 === r && (r = t);
            var l = this;
            return this._addPromise(function() {
                return l.IterativeAt(a, r)
            })
        }
        for (i = r - t; i < r; i += 1) s.push(this.at(i));
        return s
    }, h.prototype.IterativeAt = function(t, e) {
        var r, n = [],
            o = this;
        return new Promise(function(i, s) {
            var a = function(t) {
                    return o.IsVirtual() && o._hasTotalResults() && t >= o.totalResults ? Promise.resolve(t + 1) : new Promise(function(e, r) {
                        o._deferredAt(t, null).then(function(r) {
                            n.push(r), e(t + 1)
                        }, r)
                    })
                },
                l = Promise.resolve(t);
            for (r = t; r < e; r++) l = l.then(a);
            l.then(function() {
                i(n)
            }, s)
        })
    }, h.prototype._getDefaultFetchSize = function(t) {
        return null == t ? this[h._FETCH_SIZE_PROP] : t
    }, h.prototype._calculateNextStart = function() {
        var t = this.lastFetchCount;
        return null == t && (t = this[h._FETCH_SIZE_PROP]), void 0 === this.offset || null === this.offset ? t : this.offset + t
    }, h.prototype.next = function(t, e) {
        var r = e || {};
        r[h._FETCH_SIZE_PROP] = this._getDefaultFetchSize(t);
        var n = this._calculateNextStart(),
            o = this._getLength();
        if (0 === o && r[h._FETCH_SIZE_PROP] > 0) n = 0;
        else if (n >= o) {
            return r.success && r.success.call(l.GetContext(r, this), this, null, r), null
        }
        return r.startIndex = n, this.fetch(r)
    }, h.prototype._calculatePrevStart = function(t) {
        return void 0 === this.offset || null === this.offset ? 0 : this.offset - t
    }, h.prototype.previous = function(t, e) {
        var r = e || {};
        if (0 === this.offset) {
            return r.success && this.lastFetchCount && r.success.call(l.GetContext(r, this), this, null, r), null
        }
        r[h._FETCH_SIZE_PROP] = this._getDefaultFetchSize(t);
        var n = this._calculatePrevStart(r[h._FETCH_SIZE_PROP]);
        return n < 0 && (r[h._FETCH_SIZE_PROP] = this.offset, n = 0), r.startIndex = n, this.fetch(r)
    }, h.prototype.setModelLimit = function(t) {
        this.modelLimit = t, this._manageLRU(0)
    }, h.prototype._getModelLimit = function() {
        return this.modelLimit
    }, h.prototype.setFetchSize = function(t) {
        this[h._FETCH_SIZE_PROP] = t
    }, h.prototype.rest = function(t, e) {
        var r, n = this._getDeferred(e),
            o = void 0 === t ? 1 : t,
            i = [];
        if (this.IsVirtual() || n) {
            var s = this;
            return this._addPromise(function() {
                return s.IterativeAt(o, s._getLength())
            })
        }
        for (r = o; r < this._getLength(); r += 1) i.push(this.at(r));
        return i
    }, h.prototype.remove = function(t, e) {
        var r, n = e || {},
            o = [];
        t instanceof Array ? o = t : o.push(t);
        var s = [];
        for (r = o.length - 1; r >= 0; r -= 1) s.unshift(this._removeInternal(o[r], -1, n));
        return this.TriggerInternal(n.silent, i.EventType.ALLREMOVED, this, o, n), h._returnModels(s)
    }, h.prototype._removeInternal = function(t, r, n) {
        var o = n || {},
            s = -1 === r ? this._getInternal(t) : h._getModinfo(r, t),
            a = o.silent,
            l = s.index;
        if (l > -1) {
            var u = s.m;
            void 0 !== u && u.GetCollection() === this && u.SetCollection(null), this._spliceModels(l, 1), this._setLength();
            var c = {};
            e.CollectionUtils.copyInto(c, o), c.index = l, void 0 !== u && u.TriggerInternal(a, i.EventType.REMOVE, u, this, c), this._unlistenToModel(u)
        }
        return s.m
    }, h.prototype._unlistenToModel = function(t) {
        void 0 !== t && t.off(null, null, this)
    }, h.prototype._listenToModel = function(t) {
        t.OnInternal(i.EventType.ALL, this._modelEvent, this, !1, !0)
    }, h.prototype._modelEvent = function(t, e, r, n) {
        if (t === i.EventType.DESTROY && this.remove(e), !(void 0 !== r && r instanceof h && r !== this)) {
            var o = n && n.silent;
            this.TriggerInternal(o, t, e, r, n)
        }
    }, h.prototype.refresh = function(t) {
        var e, r = t || {},
            n = this;
        return this._addPromise(function() {
            return new Promise(function(t, o) {
                if (!n.IsVirtual()) {
                    e = void 0 !== r.silent && r.silent;
                    try {
                        n.reset(null, {
                            silent: !0
                        });
                        var a = {};
                        return Object.keys(r).forEach(function(t) {
                            Object.prototype.hasOwnProperty.call(r, t) && (a[t] = r[t])
                        }), a.success = function(r, o, s) {
                            n.TriggerInternal(e, i.EventType.REFRESH, n, s, null), t({
                                collection: r,
                                response: o,
                                options: s
                            })
                        }, a.error = function(t, e, i, s, a) {
                            o(h._createRejectionError(i, a, e, n, r, !1))
                        }, void n._fetchInternal(a, -1, !1)
                    } catch (o) {
                        if (o instanceof s) return n.TriggerInternal(e, i.EventType.REFRESH, n, r, null), void t({
                            collection: n,
                            options: r
                        });
                        throw o
                    }
                }
                var l = r.startIndex;
                n._setModels([], !0), n._resetLRU(), n.totalResults = void 0, n._setLength(), e = void 0 !== r.silent && r.silent, n.TriggerInternal(e, i.EventType.REFRESH, n, r, null), null == l && (l = 0), null != l ? n._setRangeLocalInternal(l, n._getFetchSize(r)).then(function(e) {
                    t(e)
                }, function(t) {
                    o(t)
                }) : t(void 0)
            })
        })
    }, h.prototype.reset = function(t, r) {
        var n, o, s = {};
        e.CollectionUtils.copyInto(s, r || {}), s.previousModels = this._getModels();
        for (var a = 0; a < this._modelIndices.length; a++) n = this._modelIndices[a], (o = this._getModel(n)) && (this._unlistenToModel(o), o.SetCollection(null));
        this._setModels([], !0), this._resetLRU();
        var l = void 0 !== s.silent && s.silent;
        if (!t) return this._setLength(), this.totalResults = void 0, this.TriggerInternal(l, i.EventType.RESET, this, s, null), null;
        var u, c = t;
        return s.parse && (c = this.parse(t)), this._manageLRU(c instanceof Array ? c.length : 1), s.noparse = !0, u = this._addInternal(c, s, !0, !1), this._setLength(), this.TriggerInternal(l, i.EventType.RESET, this, s, null), this._handlePromise(u)
    }, h.prototype.at = function(t, e) {
        var r = this._getDeferred(e);
        return this._atInternal(t, e, !1, r)
    }, h.prototype._atInternal = function(t, e, r, n) {
        var o = t;
        if (o < 0 && (o += this._getLength()), o < 0 || this._overUpperLimit(o)) return r || !this.IsVirtual() && !n ? null : this._addPromise(function() {
            return Promise.resolve(null)
        });
        var i = this;
        return r || !this.IsVirtual() && !n ? this._getModel(o) : this._addPromise(function() {
            return i._deferredAt(o, e)
        })
    }, h.prototype.whenReady = function() {
        return this._promises ? this._promises : Promise.resolve()
    }, h.prototype._addPromise = function(t) {
        var e = this;
        return void 0 === this._promises && (this._promiseCount = 0, this._promises = Promise.resolve()), this._promiseCount += 1, this._promises = this._promises.then(t.bind(e)).then(function(t) {
            return e._promiseCount -= 1, 0 === e._promiseCount && (e._promises = void 0, e.TriggerInternal(!1, i.EventType.READY, e, null, null)), t
        }, function(t) {
            return e._promiseCount -= 1, 0 === e._promiseCount && (e._promises = void 0), Promise.reject(t)
        }), this._promises
    }, h.prototype._addxhr = function(t) {
        if (t && t.abort) {
            void 0 === this._xhrs && (this._xhrs = []);
            var e = this;
            this._xhrs.push(t), t.done(function() {
                var r = e._xhrs ? e._xhrs.indexOf(t) : -1;
                r > -1 && e._xhrs.splice(r, 1)
            })
        }
    }, h.prototype.abort = function() {
        var t = this;

        function e(e, r) {
            t._xhrs[e].then(function(n, o) {
                "abort" === o && (t._xhrs.splice(e, 1), 0 === t._xhrs.length && t.whenReady().then(function() {
                    r(null)
                }, function() {
                    r(null)
                }))
            }, function() {
                t._xhrs.splice(e, 1), 0 === t._xhrs.length && t.whenReady().then(function() {
                    r(null)
                }, function() {
                    r(null)
                })
            })
        }
        return this._xhrs && this._xhrs.length > 0 ? new Promise(function(r) {
            for (var n = t._xhrs.length - 1; n >= 0; n--) e(n, r), t._xhrs[n].abort()
        }) : Promise.resolve()
    }, h.prototype._deferredAt = function(t, r) {
        var n = this,
            o = n._getModel(t);
        return new Promise(void 0 === o ? function(o, i) {
            var s = {};
            e.CollectionUtils.copyInto(s, r || {}), s.context = n, s.startIndex = t, s.error = function(t, e, o, s, a) {
                i(h._createRejectionError(s, a, e, n, r, !1))
            }, s.success = function() {
                o(n._getModel(t))
            }, n._fetchInternal(s, -1, !1)
        } : function(t) {
            t(o)
        })
    }, h.prototype.getByCid = function(t) {
        for (var e, r = this._getModels(), n = null, o = 0; o < this._modelIndices.length; o++)
            if (r[e = this._modelIndices[o]] && t === r[e].cid) {
                n = r[e];
                break
            }
        if (n) return n;
        if (this.IsVirtual()) throw new Error("Not found locally and not supported by server for virtual collections");
        return null
    }, h.prototype.get = function(t, e) {
        var r = this._getDeferred(e),
            o = this._getInternal(t, e, r);
        if (o) {
            if (n.isFunction(o.then)) return this._addPromise(function() {
                return new Promise(function(t, e) {
                    o.then(function(e) {
                        t(e.m)
                    }, function(t) {
                        e(t)
                    })
                })
            });
            if (this.IsVirtual()) return this._addPromise(function() {
                return new Promise(function(t) {
                    t(o.m)
                })
            });
            if (Object.prototype.hasOwnProperty.call(o, "m")) return o.m
        }
        return null
    }, h.prototype._getLocal = function(t) {
        var e = this._getLocalInternal(t);
        return e ? e.m : null
    }, h.prototype._getLocalInternal = function(t) {
        var e = t,
            r = t;
        t instanceof l ? (e = t.GetCid(), r = t.GetId()) : h._defined(t) && void 0 !== t.id && (r = t.id);
        for (var n, o, i = null, s = this._modelIndices.length, a = this._getModels(), u = 0; u < s; u++)
            if (void 0 !== (n = a[o = this._modelIndices[u]]) && n.Match(r, e)) {
                i = h._getModinfo(o, n);
                break
            }
        return i || h._getModinfo(-1, void 0)
    }, h.prototype._getInternal = function(t, r, n, o) {
        var i = t,
            s = t,
            a = void 0 !== o && o;
        t instanceof l ? (i = t.GetCid(), s = t.GetId()) : h._defined(t) && void 0 !== t.id && (s = t.id);
        for (var u, c = null, p = this._getModels(), f = 0; f < this._modelIndices.length; f++)
            if (p[u = this._modelIndices[f]] && p[u].Match(s, i)) {
                var d = h._getModinfo(u, p[u]);
                c = d;
                break
            }
        if (c) return n ? new Promise(function(t) {
            t(c)
        }) : c;
        if (this.IsVirtual()) {
            if (void 0 === s && void 0 !== i) return new Promise(function(t) {
                t(h._getModinfo(-1, void 0))
            });
            var _ = this;
            return new Promise(function(t, n) {
                var o = {};
                e.CollectionUtils.copyInto(o, r || {}), o.context = _, o.startID = s, o.error = function(t, e, o, i, s) {
                    n(h._createRejectionError(i, s, e, _, r, !1))
                }, o.success = function(e, r) {
                    ! function(e) {
                        if (null != e) {
                            var r = _._getOffset(),
                                n = _._getModel(r);
                            void 0 !== n && n.Match(s, i) ? t(h._getModinfo(r, n)) : t(h._getModinfo(-1, void 0))
                        } else t(h._getModinfo(-1, void 0))
                    }(r)
                }, _._fetchInternal(o, -1, a)
            })
        }
        var g = h._getModinfo(-1, void 0);
        return n ? new Promise(function(t) {
            t(g)
        }) : g
    }, h._getModinfo = function(t, e) {
        return {
            index: t,
            m: e
        }
    }, h.prototype._parseImpl = function(t) {
        if (t instanceof Array) return t;
        if (!t) return t;
        var e;
        for (e in t)
            if (Object.prototype.hasOwnProperty.call(t, e) && t[e] instanceof Array) return t[e];
        return t
    }, h.prototype.parse = h.prototype._parseImpl, h.prototype._checkActual = function(t, e, r) {
        return !!(this._hasTotalResults() && r.start + r.count >= this.totalResults) || r.start === t && r.count === e
    }, h.prototype.setRangeLocal = function(t, e, r) {
        var n = this;
        return this._addPromise(function() {
            return n._setRangeLocalInternal(t, e, r)
        })
    }, h.prototype._setRangeLocalInternal = function(t, e, r) {
        this.IsVirtual() && this._resetModelsToFullLength(this.totalResults);
        var n = this._getLocalRange(t, e),
            o = this;
        if (this._checkActual(t, e, n)) return new Promise(function(t) {
            t(n)
        });
        var i = this._getModelLimit();
        return i > -1 && i < e && (this.modelLimit = e), new Promise(function(n, i) {
            o._setRangeLocalFetch(t, e, -1, {
                start: t,
                count: e
            }, n, i, !0, r)
        })
    }, h.prototype._setRangeLocalFetch = function(t, e, r, n, o, i, a, l) {
        var u = this,
            c = t,
            p = c + e;
        this[h._FETCH_SIZE_PROP] && this[h._FETCH_SIZE_PROP] > e && (p = this[h._FETCH_SIZE_PROP] + c);
        var f = null;
        if (this.IsVirtual()) {
            var d = this._getFirstMissingModel(c, p);
            d > c && (p = (c = d) + e, this[h._FETCH_SIZE_PROP] && this[h._FETCH_SIZE_PROP] > e && (p = this[h._FETCH_SIZE_PROP] + c)), f = {
                context: this,
                startIndex: c,
                fetchSize: p - c
            }
        } else f = {
            context: this
        };
        f.error = function(t, e, r, n, o) {
            i(h._createRejectionError(n, o, e, u, null, !1))
        }, f.success = function() {
            ! function() {
                var t = u._getLocalRange(n.start, n.count);
                if (a && u._hasTotalResults() && t.count < n.count) {
                    var r = t.start + t.count,
                        s = c + (u.lastFetchCount ? u.lastFetchCount : e);
                    s < u.totalResults ? u._setRangeLocalFetch(s, e, r, n, o, i, a, l) : o(t)
                } else o(t)
            }()
        }, l && l.silent && (f.silent = l.silent);
        try {
            this._fetchInternal(f, r, r > -1)
        } catch (t) {
            if (t instanceof s) {
                var _ = u._getLocalRange(c, e);
                o(_)
            }
        }
    }, h._createRejectionError = function(t, e, r, n, o, i) {
        var s = !1;
        o && o.silent && (s = o.silent), i && l._triggerError(n, s, o, e, r, t);
        var a = new Error(e);
        return a.xhr = t, a.error = r, a.collection = n, a.status = e, a
    }, h.prototype._getMaxLength = function(t, e) {
        var r = this._getModelsLength();
        return 0 === r ? t + e : t + e > r ? r : t + e
    }, h.prototype.isRangeLocal = function(t, e) {
        var r = this._getLocalRange(t, e);
        return 0 === this._getModelsLength() ? 0 === e : t === r.start && (e === r.count || t + e > this._getModelsLength())
    }, h.prototype._getModelArray = function(t, e) {
        for (var r = [], n = this._getModels(), o = t + e, i = t; i < o; i++) r.push(n[i]);
        return r
    }, h.prototype._getLocalRange = function(t, e) {
        if (!this.IsVirtual()) {
            if (this._getModelsLength() > 0) {
                if (t + e > this._getModelsLength()) {
                    var r = this._getModelsLength() - t;
                    return {
                        start: t,
                        count: r,
                        models: this._getModelArray(t, r)
                    }
                }
                return {
                    start: t,
                    count: e,
                    models: this._getModelArray(t, e)
                }
            }
            return {
                start: t,
                count: 0,
                models: []
            }
        }
        var n = this._getMaxLength(t, e);
        if (!this._hasTotalResults() && n < t + e) return {
            start: t,
            count: n - t,
            models: this._getModelArray(t, n - t)
        };
        if (0 === n) return {
            start: t,
            count: 0,
            models: []
        };
        var o = this._getFirstMissingModel(t, n);
        if (o > -1) return {
            start: t,
            count: o - t,
            models: this._getModelArray(t, o - t)
        };
        var i = e;
        return t > n ? i = 0 : t + i > n && (i = n - t), {
            start: t,
            count: i,
            models: this._getModelArray(t, i)
        }
    }, h.prototype._getFirstMissingModel = function(t, e) {
        for (var r = t; r < e; r++)
            if (void 0 === this._getModel(r)) return r;
        return -1
    }, h.prototype.fetch = function(t) {
        var e = this._fetchInternal(t, -1, !1);
        return this._addPromise(function() {
            return Promise.resolve(e)
        }), e
    }, h.prototype._fetchInternal = function(t, e, r) {
        function n(t, e, r, n) {
            t.IsVirtual() ? r || t._resetModelsToFullLength(n) : e.add || e.useset || t.reset(null, {
                silent: !0
            })
        }
        var o, s = t || {},
            a = s.success,
            u = s.error;
        return s.set && (s.useset = !!s.set), void 0 === s.parse && (s.parse = !0), o = this, s.error = function(e, r, n) {
            l._triggerError(o, !1, t, r, n, e), u && u.call(l.GetContext(t, o), o, n, t, e, r)
        }, s.success = function(u) {
            var c, p;
            try {
                c = o.parse(u, t)
            } catch (e) {
                return void h._reportError(o, e, s.error, t)
            }
            o._setPagingReturnValues(u, t, c, r) || (p = o.totalResults);
            var f = null,
                d = !1,
                _ = e;
            if (s.add || o.model) {
                n(o, s, r, p);
                try {
                    -1 === e && (d = !0, _ = o._getOffset()), f = o._fillInCollectionWithParsedData(c, _, d, s)
                } catch (e) {
                    return void h._reportError(o, e, s.error, t)
                }
            } else r || (o.IsVirtual() ? (n(o, s, r, p), -1 === e && (d = !0, _ = o._getOffset()), f = o._putDataIntoCollection(c, _, d)) : s.useset ? o._setInternal(c, !1, s, !1) : o.reset(c, {
                silent: !0
            }));
            o.IsVirtual() && f && (o.lastFetchCount = f.length);
            var g = !!s.silent;
            o.TriggerInternal(g, i.EventType.SYNC, o, u, s), a && a.call(l.GetContext(t, o), o, u, s)
        }, this._fetchCall(s)
    }, h.prototype._putDataIntoCollection = function(t, e, r) {
        var n;
        if (t) {
            n = t instanceof Array ? t : [t];
            var o = {};
            r && this._manageLRU(n.length);
            for (var i = e, s = this.IsVirtual(), a = null, l = 0; l < n.length; l += 1) s && (o = {
                at: i
            }, a = this._atInternal(i, null, !0, !1)), o.silent = !0, this._addInternal(n[l], o, !0, !1), this._atInternal(i, null, !0, !1) !== a && (i += 1)
        }
        return n
    }, h.prototype._fillInCollectionWithParsedData = function(t, e, r, n) {
        var o = n || {},
            i = o.parse,
            s = h._createModel(this),
            a = null;
        if (t) {
            a = t instanceof Array ? t : [t];
            var l, u = {};
            r && this._manageLRU(a.length);
            var c, p = this.IsVirtual();
            if (o.useset && !p) {
                for (c = 0; c < a.length; c += 1) l = s && i ? s.parse(a[c]) : a[c], a[c] = l;
                this._setInternal(a, !1, o, !1)
            } else {
                var f = null,
                    d = e;
                for (c = 0; c < a.length; c += 1) l = s && i ? s.parse(a[c]) : a[c], p && (u = {
                    at: d
                }, f = this._atInternal(d, u, !0, !1)), u.silent = !0, this._addInternal(l, u, !0, !1), this._atInternal(d, null, !0, !1) !== f && (d += 1)
            }
        }
        return a
    }, h._reportError = function(t, e, n, o) {
        r.error(e.toString()), n && n.call(l.GetContext(o, t), t, e, o)
    }, h.prototype._fetchOnly = function(t) {
        var e, r, n = t || {},
            o = n.success;
        return void 0 === n.parse && (n.parse = !0), r = this, n.success = function(s) {
            var a, u, c, p = null,
                f = [];
            try {
                c = r.parse(s, t)
            } catch (e) {
                return void h._reportError(r, e, n.error, t)
            }
            if (n.add || r.model) {
                if (u = h._createModel(r), c)
                    for (p = c instanceof Array ? c : [c], a = 0; a < p.length; a += 1) {
                        if (u && n.parse) try {
                            e = u.parse(p[a])
                        } catch (e) {
                            return void h._reportError(r, e, n.error, t)
                        } else e = p[a];
                        f.push(r._newModel(e))
                    }
            } else p = c instanceof Array ? c : [c];
            r.TriggerInternal(!1, i.EventType.SYNC, r, s, n), o && o.call(l.GetContext(t, r), r, f, n)
        }, this._fetchCall(n)
    }, h.prototype._fetchCall = function(t) {
        try {
            return l._internalSync("read", this, t)
        } catch (e) {
            throw l._triggerError(this, !1, t, null, e, null), e
        }
    }, h.prototype._resetModelsToFullLength = function(t) {
        return void 0 !== t && this._getModelsLength() !== t && (this._setModels(new Array(t), !0), this._resetLRU(), this._setLength(), !0)
    }, h.prototype._getFetchSize = function(t) {
        return (t || {})[h._FETCH_SIZE_PROP] || this[h._FETCH_SIZE_PROP]
    }, h.prototype.IsVirtual = function() {
        return this._getFetchSize(null) > -1
    }, h.prototype._getReturnProperty = function(t, e, r, n, o) {
        var i = parseInt(h._getProp(t, e, r), 10);
        return null == i || isNaN(i) ? n || o : i
    }, h.prototype._cleanTotalResults = function(t) {
        if (-1 !== t) return t
    }, h.prototype._setPagingReturnValues = function(t, e, r, n) {
        var o = {};
        this.customPagingOptions && ((o = this.customPagingOptions.call(this, t)) || (o = {}));
        var i = e || {};
        this.lastFetchSize = this._getReturnProperty(o, t, "limit", i.fetchSize, this.fetchSize), this.offset = this._getReturnProperty(o, t, "offset", i.startIndex, 0), this.lastFetchCount = this._getReturnProperty(o, t, "count", this.lastFetchCount, this.lastFetchCount), this.totalResults = this._cleanTotalResults(this._getReturnProperty(o, t, "totalResults", this.totalResults, this.totalResults)), this.hasMore = this._getHasMore(h._getProp(o, t, "hasMore"), this.offset, this.lastFetchSize, this.totalResults);
        var s = !1;
        if (!n) {
            var a = this._cleanTotalResults(parseInt(h._getProp(o, t, "totalResults"), 10)),
                l = parseInt(h._getProp(o, t, "count"), 10);
            this.totalResults = this._adjustTotalResults(a, this.hasMore, this.offset, l, r && Array.isArray(r) ? r.length : 0), s = void 0 === a || isNaN(a) || null === a
        }
        return !this.IsVirtual() && this.totalResults && this.totalResults !== this.lastFetchCount && this.lastFetchSize && this.setFetchSize(this.lastFetchSize), s
    }, h.prototype._adjustTotalResults = function(t, e, r, n, o) {
        if (!e && isNaN(t)) return (isNaN(n) ? o : n) + r;
        return this.totalResults
    }, h.prototype._getHasMore = function(t, e, r, n) {
        return h._defined(t) ? t : null == n || !(e + r > n)
    }, h._getProp = function(t, e, r) {
        return Object.prototype.hasOwnProperty.call(t, r) ? t[r] : e ? e[r] : void 0
    }, h.prototype._getOffset = function() {
        return h._defined(this.offset) ? this.offset : 0
    }, h.prototype.create = function(t, e) {
        var r = this,
            n = e || {},
            o = this._getDeferred(n);

        function i(e, r, n, o) {
            return r.save(t instanceof l ? null : t, o), r
        }

        function s(t, e) {
            return n.wait ? r.IsVirtual() || o ? r._addPromise(function() {
                return Promise.resolve(void 0)
            }) : null : r.add(t, e)
        }
        var a = this._newModel(t, !0, n, !1),
            u = n.success,
            c = n.context;
        n.validate;
        if (n.context = this, n.success = function(t, e, o) {
                o.xhr && (n.xhr = o.xhr), n.wait && r.add(a, n), u && u.call(null != c ? c : r, t, e, n)
            }, null == a) return !1;
        n.forceNew = null != a.GetId();
        var h = l._copyOptions(n);
        return a.SetCollection(this), o || this.IsVirtual() ? new Promise(function(t) {
            h.merge = !0, h.deferred = !0, s(a, h).then(function() {
                n.success = function(e, o, i) {
                    i.xhr && (n.xhr = i.xhr), n.wait ? (r.IsVirtual() && (h.force = !0), r.add(a, h).then(function() {
                        u && u.call(null != c ? c : r, e, o, n), t(e)
                    })) : (u && u.call(null != c ? c : r, e, o, n), t(e))
                };
                var e = i(0, a, 0, n);
                e || t(e)
            })
        }) : (h.merge = !0, s(a, h), i(0, a, 0, n))
    }, h.prototype.pluck = function(t) {
        var e, r = [];
        for (this._throwErrIfVirtual("pluck"), e = 0; e < this._getLength(); e += 1) r.push(this.at(e).get(t));
        return r
    }, h.prototype.where = function(t, e) {
        return this._handlePromise(this._whereInternal(t, e))
    }, h.prototype._whereInternal = function(t, e) {
        var r = e || {},
            n = this._getDeferred(r),
            o = this;
        if (this.IsVirtual()) return new Promise(function(e, n) {
            var i = {
                query: t,
                all: !0,
                success: function(t, r) {
                    e(r)
                },
                error: function(t, e, i) {
                    n(h._createRejectionError(t, e, i, o, r, !0))
                }
            };
            o._fetchOnly(i)
        });
        var i, s, a = [];
        for (i = 0; i < this._getLength(); i += 1)(s = this.at(i)).Contains(t) && a.push(s);
        return n ? new Promise(function(t) {
            t(a)
        }) : a
    }, h.prototype.whereToCollection = function(t, e) {
        var r = e || {},
            n = this._getDeferred(r),
            o = this;
        if (this.IsVirtual() || n) return o._addPromise(function() {
            return new Promise(function(e, n) {
                return o._whereInternal(t, r).then(function(t) {
                    var r = o._makeNewCollection(t);
                    e(r)
                }, function(t) {
                    n(t)
                })
            })
        });
        var i = this._whereInternal(t, r),
            s = this._makeNewCollection(i);
        return s[h._FETCH_SIZE_PROP] = -1, s._setLength(), s
    }, h.prototype._makeNewCollection = function(t) {
        var e = this._cloneInternal(!1);
        return e._setModels(t, !1), e._resetLRU(), e._setLength(), e
    }, h.prototype._throwErrIfVirtual = function(t) {
        if (this.IsVirtual()) throw new Error(t + " not valid on a virtual Collection")
    }, h.prototype.map = function(t, e) {
        var r, n = [];
        return this._throwErrIfVirtual("map"), this._getModels().forEach(function(o) {
            r = t.call(e || this, o), n.push(r)
        }), n
    }, h.prototype.each = function(t, e) {
        this._throwErrIfVirtual("each"), this._getModels().forEach(t, e)
    }, h.prototype.size = function() {
        return this._getLength()
    }, h.prototype.sortBy = function(t, e) {
        var r, o = [];
        return this._throwErrIfVirtual("sortBy"), this._getModels().forEach(function(t) {
            o.push(t)
        }), r = this, o.sort(function(o, i) {
            var s, a;
            return n.isFunction(t) ? (s = t.call(e || r, o), a = t.call(e || r, i), h._compareKeys(s, a, r.sortDirection)) : (s = o.get(t), a = i.get(t), h._compareKeys(s, a, r.sortDirection))
        }), o
    }, h.prototype.groupBy = function(t, e) {
        var r, o = {};
        return this._throwErrIfVirtual("groupBy"), this._getModels().forEach(function(i) {
            r = n.isFunction(t) ? t.call(e || this, i) : i.get(t), void 0 === o[r] && (o[r] = []), o[r].push(i)
        }, this), o
    }, h.prototype.indexBy = function(t, e) {
        var r, o = {};
        return this._throwErrIfVirtual("indexBy"), this._getModels().forEach(function(i) {
            r = n.isFunction(t) ? t.call(e || this, i) : i.get(t), o[r] = i
        }, this), o
    }, h.prototype.min = function(t, e) {
        var r, n, o = {};
        return this._throwErrIfVirtual("min"), 0 === this._getModelsLength() ? null : (o = this._getModel(0), r = t.call(e || this, this._getModel(0)), this._getModels().forEach(function(i, s) {
            s >= 1 && (n = t.call(e || this, i)) < r && (o = i, r = n)
        }, this), o)
    }, h.prototype.max = function(t, e) {
        var r, n, o = {};
        return this._throwErrIfVirtual("max"), 0 === this._getModelsLength() ? null : (o = this._getModel(0), r = t.call(e, this._getModel(0)), this._getModels().forEach(function(i, s) {
            s >= 1 && (n = t.call(e || this, i)) > r && (o = i, r = n)
        }, this), o)
    }, h.prototype.filter = function(t, e) {
        var r = [];
        return this._throwErrIfVirtual("filter"), this._getModels().forEach(function(n) {
            t.call(e || this, n) && r.push(n)
        }), r
    }, h.prototype.without = function(t) {
        var e, r, n, o, i, s = [];
        this._throwErrIfVirtual("without");
        for (var a = 0; a < this._getModels().length; a++) {
            for (o = !0, i = this._getModel(a), e = 0; e < arguments.length; e += 1)
                if (n = arguments[e].GetCid(), r = arguments[e].GetId(), i.Match(r, n)) {
                    o = !1;
                    break
                }
            o && s.push(i)
        }
        return s
    }, h.prototype.difference = function(t) {
        var e, r, n, o, i, s, a = [];
        this._throwErrIfVirtual("difference");
        for (var l = 0; l < this._getModels().length; l++) {
            for (i = !0, s = this._getModel(l), e = 0; e < arguments.length; e += 1) {
                for (r = 0; r < arguments[e].length; r++)
                    if (o = arguments[e][r].GetCid(), n = arguments[e][r].GetId(), s.Match(n, o)) {
                        i = !1;
                        break
                    }
                if (!i) break
            }
            i && a.push(s)
        }
        return a
    }, h.prototype.isEmpty = function() {
        return 0 === this._getLength()
    }, h.prototype.any = function(t, e) {
        var r;
        this._throwErrIfVirtual("any");
        for (var n = 0; n < this._getModelsLength(); n += 1)
            if (r = this._getModel(n), t.call(e || this, r)) return !0;
        return !1
    }, h.prototype.findWhere = function(t, e) {
        var r = this._getDeferred(e),
            n = this;
        if (this.IsVirtual() || r) return this._addPromise(function() {
            return new Promise(function(r) {
                n._whereInternal(t, e).then(function(t) {
                    t && t.length > 0 && r(t[0]), r(null)
                })
            })
        });
        var o = this._whereInternal(t, e);
        return o.length > 0 ? o[0] : null
    }, h.prototype.slice = function(t, e, r) {
        var n, o = this._getDeferred(r),
            i = [],
            s = e;
        if (void 0 === s) {
            if (this.IsVirtual() && !this._hasTotalResults()) throw new Error("End must be set for virtual collections with no totalResults");
            s = this._getModelsLength()
        }
        if (o || this.IsVirtual()) {
            var a = this;
            return this._addPromise(function() {
                return a.IterativeAt(t, s)
            })
        }
        for (n = t; n < s; n += 1) i.push(this._getModel(n));
        return i
    }, h.prototype.set = function(t, e) {
        var r = this._getDeferred(e);
        return this._setInternal(t, !0, e, r || this.IsVirtual())
    }, h._removeAfterSet = function(t, e, r, n, o) {
        if (r)
            for (var i = e.length - 1; i >= 0; i -= 1) - 1 === n.indexOf(i) && t._removeInternal(e[i], i, o)
    }, h.prototype._swapModels = function(t, e, r, n) {
        if (this._hasComparator() || !r || !n) return {
            index: t,
            swapped: !1
        };
        var o = this._getModelsLength();
        if (t >= o || e >= o) return {
            index: t,
            swapped: !1
        };
        var i = this._getModel(t),
            s = this._getModel(e);
        return this._setModel(t, s), s.SetIndex(t), this._setModel(e, i), i.SetIndex(e), {
            index: e,
            swapped: e !== t
        }
    }, h.prototype._setInternal = function(t, e, r, n) {
        var o, s, a = r || {},
            l = void 0 === a.add || a.add,
            u = void 0 === a.remove || a.remove,
            c = void 0 === a.merge || a.merge,
            p = [],
            f = null,
            d = e ? this.parse(t) : t;
        if (s = Array.isArray(d) ? d : [d], n) {
            var _ = this;
            return this._addPromise(function() {
                return _._deferredSet(s, _._getModels(), a, u, l, c, e)
            })
        }
        var g = !1;
        for (o = 0; o < s.length; o += 1)
            if (-1 !== (f = this._updateModel(this._newModel(s[o], e, a, !0), l, c, n))) {
                var y = this._swapModels(f, o, u, l),
                    v = y.index;
                y.swapped && (g = !0), -1 === p.indexOf(v) && p.push(v)
            }
        if (g) {
            var m = a.add ? {
                add: !0
            } : null;
            this.TriggerInternal(a.silent, i.EventType.SORT, this, m, null)
        }
        return h._removeAfterSet(this, this._getModels(), u, p, a), null
    }, h.prototype._deferredSet = function(t, e, r, n, o, i, s) {
        var a, l = [],
            u = this;
        return new Promise(function(c, p) {
            var f = function(e) {
                    return new Promise(function(n, a) {
                        u._updateModel(u._newModel(t[e], s, r, !0), o, i, !0).then(function(t) {
                            -1 !== t && l.push(t), n(e + 1)
                        }, a)
                    })
                },
                d = Promise.resolve(0);
            for (a = 0; a < t.length; a += 1) d = d.then(f);
            d.then(function() {
                h._removeAfterSet(u, e, n, l, r), c(void 0)
            }, p)
        })
    }, h.prototype._updateModel = function(t, e, r, n) {
        function o(n, o, i) {
            var s = o ? o.index : -1,
                a = o ? o.m : null,
                l = {};
            if (a) {
                if (r) {
                    if (l = {
                            merge: r
                        }, i) return new Promise(function(e) {
                        n._addInternal(t, l, !1, !0).then(function() {
                            e(s)
                        })
                    });
                    n.add(t, l)
                }
            } else if (e) {
                if (i) return new Promise(function(e) {
                    n._addInternal(t, l, !1, !0).then(function() {
                        e(n._getLength() - 1)
                    })
                });
                n.add(t), s = n._getLength() - 1
            }
            return s
        }
        if (n || this.IsVirtual()) {
            var i = this;
            return new Promise(function(e) {
                i._getInternal(t, {
                    silent: !0
                }, n).then(function(t) {
                    o(i, t, !0).then(function(t) {
                        e(t)
                    })
                })
            })
        }
        return o(this, this._getInternal(t), !1)
    }, h.prototype.toJSON = function() {
        var t = [];
        return this._throwErrIfVirtual("toJSON"), this._getModels().forEach(function(e) {
            t.push(e.toJSON())
        }), t
    }, h.prototype.first = function(t, e) {
        var r, n = this._getDeferred(e),
            o = this._getLength(),
            i = [],
            s = this,
            a = t;
        a ? o = a : a = 1;
        var l = this.IsVirtual() || n;
        if (1 === a) return l ? this._addPromise(function() {
            return s._deferredAt(0, null)
        }) : this._getModelsLength() > 0 ? this._getModel(0) : null;
        if (o > this._getModelsLength() && (this.IsVirtual() && !this._hasTotalResults() || (o = this._getModelsLength())), l) return this._addPromise(function() {
            return s.IterativeAt(0, o)
        });
        for (r = 0; r < o; r += 1) i.push(this._getModel(r));
        return i
    }, h.prototype.indexOf = function(t, e) {
        var r = this._getDeferred(e);
        if (this.IsVirtual() || r) {
            var n = this;
            return this._addPromise(function() {
                return n._getInternal(t, null, !0).then(function(t) {
                    return t.index
                })
            })
        }
        return this._getInternal(t).index
    }, h.prototype.contains = function(t, e) {
        var r = this._getDeferred(e);
        if (this.IsVirtual() || r) {
            var n = this;
            return this._addPromise(function() {
                return n._getInternal(t, null, !0).then(function(t) {
                    return t.index > -1
                })
            })
        }
        return this._getInternal(t).index > -1
    }, h.prototype.include = h.prototype.contains, h.prototype._localIndexOf = function(t) {
        var e = this._getLocalInternal(t);
        return void 0 !== e ? e.index : -1
    }, h.prototype.pop = function(t) {
        var e = this._getDeferred(t);
        if (this.IsVirtual() || e) {
            var r = this;
            return this._atInternal(this._getLength() - 1, t, !1, !0).then(function(e) {
                return r.remove(e, t), e
            })
        }
        var n = this.at(this._getLength() - 1);
        return this.remove(n, t), n
    }, h.prototype.push = function(t, e) {
        var r = this._getDeferred(e);
        return this._manageLRU(1), this._handlePromise(this._addInternal(t, e, !1, r))
    }, h.prototype.lastIndexOf = function(t, r) {
        var n, o = r;
        for (this._throwErrIfVirtual("lastIndexOf"), void 0 === o && (o = 0), n = this._getLength() - 1; n >= o; n -= 1)
            if (e.Object.__innerEquals(t, this.at(n))) return n;
        return -1
    }, h.prototype._getSortAttrs = function(t) {
        return void 0 === t ? [] : t.split(",")
    }, h._getQueryString = function(t) {
        function e(t, e, r) {
            return t + r + e
        }

        function r(t, r) {
            var o, i = r;
            return Object.keys(t || {}).forEach(function(r) {
                if (Object.prototype.hasOwnProperty.call(t, r))
                    for (var s = Array.isArray(t[r]) ? t[r] : [t[r]], a = 0; a < s.length; a++) {
                        if (l.IsComplexValue(s[a])) {
                            var u = s[a].value,
                                c = null,
                                h = s[a].comparator;
                            c = n.isFunction(h) ? h(null, r, u) : h, o = e(r, u, c)
                        } else o = e(r, t[r], "=");
                        i += o + "+"
                    }
            }), i = i.substring(0, i.length - 1) + ","
        }
        var o, i = Array.isArray(t) ? t : [t],
            s = "";
        for (o = 0; o < i.length; o++) s = r(i[o], s);
        return "," === s.substring(s.length - 1) ? s.substring(0, s.length - 1) : s
    }, h.prototype.ModifyOptionsForCustomURL = function(t) {
        var r = {};
        Object.keys(t || {}).forEach(function(e) {
            Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
        });
        var n = this.comparator;
        if (n && e.StringUtils.isString(n)) {
            for (var o = this._getSortAttrs(n), i = 0; i < o.length; i++) 0 === i ? r.sort = o[i] : r.sort += "," + o[i];
            r.sortDir = this._getSortDirStr()
        }
        return this.IsVirtual() && (r[h._FETCH_SIZE_PROP] = this._getFetchSize(r)), r
    }, h.prototype.IsUrlBased = function(t) {
        var e = this.customURL;
        if (n.isFunction(e)) return !0;
        var r = this.GetCollectionFetchUrl(t);
        return h._defined(r)
    }, h.prototype.GetCollectionFetchUrl = function(t) {
        var r = a.GetPropValue(this, "url");
        if (this.IsVirtual()) {
            var n = t || {},
                o = n.all,
                i = null;
            if (o) i = this.totalResults || this._getFetchSize(n);
            else i = this._getFetchSize(n);
            if (r && r.indexOf("?") > -1 ? r += "&" : r += "?", r += "limit=" + i, o || (h._defined(n.startIndex) && (r += "&offset=" + n.startIndex), n.startID && (r += "&fromID=" + n.startID), n.since && (r += "&since=" + n.since), n.until && (r += "&until=" + n.until)), n.query) {
                var s = h._getQueryString(n.query);
                s && s.length > 0 && (r += "&q=" + s)
            }
            var l = this.comparator;
            if (l && e.StringUtils.isString(l)) {
                var u, c = this._getSortAttrs(l),
                    p = this._getSortDirStr();
                for (u = 0; u < c.length; u++) r += 0 === u ? "&orderBy=" + c[u] + ":" + p : "," + c[u] + ":" + p
            }
            r += "&totalResults=true"
        }
        return r
    }, h.prototype._getSortDirStr = function() {
        return -1 === this.sortDirection ? "desc" : "asc"
    }, h.prototype.sync = function(t, r, n) {
        return e.sync(t, r, n)
    }, h._FETCH_SIZE_PROP = "fetchSize";
    const p = function(t, e) {
        p._init(this, e || {}, t || "Authorization")
    };
    e._registerLegacyNamespaceProp("OAuth", p), e.Object.createSubclass(p, e.Object, "oj.OAuth"), p.prototype.Init = function() {
        p.superclass.Init.call(this)
    }, p.prototype.getHeader = function() {
        var t = {};
        return this.accessTokenResponse.access_token || this.clientCredentialGrant(), t[this.accessTokenRequest.auth_header] = "Bearer " + this.accessTokenResponse.access_token, t
    }, p.prototype.isInitialized = function() {
        return !(!this.accessTokenResponse || !this.accessTokenResponse.access_token)
    }, p.prototype.clientCredentialGrant = function() {
        var t = {},
            e = this;
        t[e.accessTokenRequest.auth_header] = "Basic " + p._base64_encode(e.accessTokenRequest.client_id + ":" + e.accessTokenRequest.client_secret), n.ajax({
            type: "POST",
            async: !1,
            url: this.accessTokenRequest.bearer_url,
            data: "grant_type=client_credentials",
            headers: t,
            success: function(t) {
                e.accessTokenResponse = p._initAccessToken(e.accessTokenResponse, t)
            },
            error: function(t) {
                throw new Error(t.responseText)
            }
        })
    }, p.prototype.setAccessTokenResponse = function(t) {
        this.accessTokenResopnse = p._initAccessToken(this.accessTokenResponse, t)
    }, p.prototype.getAccessTokenResponse = function() {
        return this.accessTokenResponse
    }, p.prototype.cleanAccessTokenResponse = function() {
        p._cleanAccessToken(this.accessTokenResponse)
    }, p.prototype.setAccessTokenRequest = function(t) {
        this.accessTokenRequest = p._initAccessToken(this.accessTokenRequest, t)
    }, p.prototype.getAccessTokenRequest = function() {
        return this.accessTokenRequest
    }, p.prototype.cleanAccessTokenRequest = function() {
        p._cleanAccessToken(this.accessTokenRequest)
    }, p._init = function(t, e, r) {
        var n = t;
        n.Init(), n.accessTokenRequest = {}, n.accessTokenResponse = {}, e.access_token ? n.accessTokenResponse = p._initAccessToken(n.accessTokenResponse, e) : e.client_id && e.client_secret && e.bearer_url && (n.accessTokenResponse = p._initAccessToken(n.accessTokenRequest, e)), n.accessTokenRequest.auth_header = r
    }, p._initAccessToken = function(t, e) {
        var r = e || {},
            n = t || {};
        return Object.keys(r).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t])
        }), n
    }, p._cleanAccessToken = function(t) {
        var e = t || {};
        Object.keys(e).forEach(function(t) {
            Object.prototype.hasOwnProperty.call(e, t) && "auth_header" !== t && (e[t] = null, delete e[t])
        })
    }, p._base64_encode = function(t) {
        var e, r, n, o, i = 0,
            s = 0,
            a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            l = [];
        do {
            e = t.charCodeAt(i), i += 1, r = t.charCodeAt(i), i += 1, n = t.charCodeAt(i), i += 1, e = (o = e << 16 | r << 8 | n) >> 18 & 63, r = o >> 12 & 63, n = o >> 6 & 63, o &= 63, l[s] = a.charAt(e) + a.charAt(r) + a.charAt(n) + a.charAt(o), s += 1
        } while (i < t.length);
        return l = l.join(""), ((e = t.length % 3) ? l.slice(0, e - 3) : l) + "===".slice(e || 3)
    }, t.Collection = h, t.Events = i, t.Model = l, t.OAuth = p, t.URLError = s, t.ajax = c, t.sync = u, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojmodel.js.map