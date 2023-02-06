/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["require", "exports", "preact/compat", "preact", "ojs/ojcustomelement-utils", "ojs/ojmetadatautils", "ojs/ojcore-base", "ojs/ojpreact-patch"], function(e, t, s, n, o, i, r, l) {
    "use strict";
    r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
    const a = (e, t) => {
            Object.prototype.hasOwnProperty.call(e, t) && (e[t] = o.toSymbolizedValue(e[t]))
        },
        c = n.options.vnode;
    n.options.vnode = e => {
        const t = e.type;
        if ("string" == typeof t && o.CustomElementUtils.isElementRegistered(t)) {
            const t = e.props;
            a(t, "value"), a(t, "checked")
        }
        null == c || c(e)
    };
    let p, u = 0;
    const d = new Map,
        h = Symbol();

    function _(e, t, s, i, r) {
        const a = function(e) {
                let t = e[h];
                void 0 === t && (t = "@oj_s" + u++, e[h] = t);
                return t
            }(t),
            c = function(e, t, s, n) {
                let i, r = 0;
                const a = () => {
                    0 === r && (i.remove(), n.add(() => {
                        0 === r && s(i)
                    }))
                };
                return s => {
                    if (null != s) {
                        r++, i = s, i[l.OJ_SLOT_REMOVE] = a;
                        const e = s.parentElement;
                        l.patchSlotParent(e), t(s)
                    } else if (r--, r < 0) throw new o.JetElementError(e, "Slot replacer count underflow")
                }
            }(e, i, r, s);
        return n.h(() => (function(e, t) {
            0 === d.size && (p = document.createElement, document.createElement = m);
            d.set(e, t)
        }(a, t), s.add(() => {
            return e = a, d.delete(e), void(0 === d.size && (document.createElement = p));
            var e
        }), n.h(a, {
            ref: c,
            key: a
        })), null)
    }

    function m(e, t) {
        return e.startsWith("@oj_s") ? d.get(e) : p.call(document, e, t)
    }
    class v {
        parkNode(e) {
            this._getLot().appendChild(e), r.Components && r.Components.subtreeHidden(e)
        }
        disposeNodes(e, t) {
            v._iterateSlots(e, e => {
                const s = e.parentElement;
                this._lot === s ? (t(e), this._lot.removeChild(e)) : s || t(e)
            })
        }
        disconnectNodes(e) {
            v._iterateSlots(e, e => {
                this._lot === e.parentElement && this._lot.removeChild(e)
            })
        }
        reconnectNodes(e) {
            v._iterateSlots(e, e => {
                e.parentElement || this._lot.appendChild(e)
            })
        }
        isParked(e) {
            return (null == e ? void 0 : e.parentElement) === this._lot
        }
        _getLot() {
            if (!this._lot) {
                const e = document.createElement("div");
                e.style.display = "none", document.body.appendChild(e), this._lot = e
            }
            return this._lot
        }
        static _iterateSlots(e, t) {
            Object.keys(e).forEach(s => {
                e[s].forEach(e => {
                    t(e)
                })
            })
        }
    }
    const f = new v,
        y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function g(e, t, s) {
        "-" === t[0] ? e.setProperty(t, s) : null == s ? e[t] = "" : "number" != typeof s || y.test(t) ? e[t] = s : e[t] = s + "px"
    }

    function P(e, t, s, n, o) {
        let i;
        e: if ("style" === t)
            if ("string" == typeof s) e.style.cssText = s;
            else {
                if ("string" == typeof n && (e.style.cssText = n = ""), n)
                    for (t in n) s && t in s || g(e.style, t, "");
                if (s)
                    for (t in s) n && s[t] === n[t] || g(e.style, t, s[t])
            }
        else if ("o" === t[0] && "n" === t[1])
            if (i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t + i] = s, s) {
                if (!n) {
                    const s = i ? C : b;
                    e.addEventListener(t, s, i)
                }
            } else {
                const s = i ? C : b;
                e.removeEventListener(t, s, i)
            }
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                e[t] = null == s ? "" : s;
                break e
            } catch (e) {}
            "function" == typeof s || (null != s && (!1 !== s || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, s) : e.removeAttribute(t))
        }
    }

    function b(e) {
        this._listeners[e.type + !1](n.options.event ? n.options.event(e) : e)
    }

    function C(e) {
        this._listeners[e.type + !0](n.options.event ? n.options.event(e) : e)
    }
    class E {
        constructor() {
            this._queue = []
        }
        add(e) {
            this._queue.push(e)
        }
        flush() {
            this._queue.forEach(e => e()), this._queue = []
        }
    }
    const S = Symbol(),
        k = Symbol(),
        w = Symbol(),
        O = new Set,
        A = Symbol(),
        T = Symbol();
    class R {
        constructor(e, t, s, i, r, l) {
            this.ref = n.createRef(), this._isPatching = !1, this._props = {
                ref: this.ref
            }, this._verifyingState = j.Unset, this._earlySets = [], this._eventQueue = [], this._isRenderQueued = !1, this._executeOnCommit = new E, this._state = o.CustomElementUtils.getElementState(e), this._element = e, this._metadata = s, this._component = t, this._controlledProps = (null == r ? void 0 : r.length) > 0 ? new Set(r) : O, this._controlledAttrs = (null == i ? void 0 : i.length) > 0 ? new Set(i) : O, this._defaultProps = l, this._rootPatchCallback = this._patchRootElement.bind(this)
        }
        connectedCallback() {
            this._verifyConnectDisconnect(j.Connect)
        }
        disconnectedCallback() {
            this._verifyConnectDisconnect(j.Disconnect)
        }
        attributeChangedCallback(e, t, s) {
            if (!this._isPatching && this._state.canHandleAttributes()) {
                const n = o.AttributeUtils.attributeToPropertyName(e),
                    i = n.split(".")[0];
                if (this._state.dirtyProps.has(i)) this._state.dirtyProps.delete(i);
                else if (t === s) return;
                null === s && (s = void 0), "knockout" === this._state.getBindingProviderType() && (o.AttributeUtils.isGlobalOrData(n) || this._element.dispatchEvent(new CustomEvent("attribute-changed", {
                    detail: {
                        attribute: e,
                        value: s,
                        previousValue: t
                    }
                })));
                const [r, l, a] = this._getPropValuePair(e, s);
                r && this._updatePropsAndQueueRenderAsNeeded(r, l, a)
            }
        }
        getProperty(e) {
            var t;
            if (i.getPropertyMetadata(e, null === (t = this._metadata) || void 0 === t ? void 0 : t.properties)) {
                let t = o.CustomElementUtils.getPropertyValue(this._props, e);
                return void 0 === t && this._defaultProps && (t = o.CustomElementUtils.getPropertyValue(this._defaultProps, e)), t
            }
            return this._element[e]
        }
        setProperty(e, t) {
            var s;
            if (this._isPatching) return;
            const n = i.getPropertyMetadata(e, null === (s = this._metadata) || void 0 === s ? void 0 : s.properties);
            n ? this._state.allowPropertySets() ? (t = o.transformPreactValue(this._element, n, t), this._updatePropsAndQueueRenderAsNeeded(e, t, n)) : this._earlySets.push({
                property: e,
                value: t
            }) : this._element[e] = t
        }
        setProperties(e) {
            this._isPatching || Object.keys(e).forEach(t => {
                this.setProperty(t, e[t])
            })
        }
        getProps() {
            return this._props
        }
        isInitialized() {
            return !!this._vdom
        }
        appendChildHelper(e, t) {
            return o.CustomElementUtils.canRelocateNode(e, t) ? HTMLElement.prototype.appendChild.call(e, t) : t
        }
        insertBeforeHelper(e, t, s) {
            return o.CustomElementUtils.canRelocateNode(e, t) ? HTMLElement.prototype.insertBefore.call(e, t, s) : t
        }
        _render() {
            var e;
            if (!this._vdom) {
                this._initializePropsFromDom();
                const t = this._metadata.events;
                t && this._initializeActionCallbacks(t);
                const s = null === (e = this._metadata.extension) || void 0 === e ? void 0 : e._WRITEBACK_PROPS;
                s && this._initializeWritebackCallbacks(s), this._playbackEarlyPropertySets()
            }
            this._vdom = n.h(this._component, this._props);
            const t = this._vdom.props;
            t[S] = this._element, t[k] = this._rootPatchCallback, t[w] = this._executeOnCommit, this._isPatching = !0, n.render(this._vdom, this._element), this._isPatching = !1
        }
        _getPropValuePair(e, t) {
            var s, n;
            if ("knockout" !== this._state.getBindingProviderType() || !o.AttributeUtils.getExpressionInfo(t).expr) {
                const r = o.AttributeUtils.attributeToPropertyName(e),
                    l = i.getPropertyMetadata(r, null === (s = this._metadata) || void 0 === s ? void 0 : s.properties);
                if (l) return l.readOnly ? [null, null, null] : [r, o.AttributeUtils.attributeToPropertyValue(this._element, e, t, l), l];
                const a = o.AttributeUtils.getGlobalPropForAttr(e);
                if (this._controlledProps.has(a)) return [a, null !== (n = this[a]) && void 0 !== n ? n : t, null]
            }
            return [null, null, null]
        }
        _updatePropsAndQueueRenderAsNeeded(e, t, s, n = !0) {
            const i = this.getProperty(e);
            if (s && o.ElementUtils.comparePropertyValues(s, t, i)) return;
            const l = e.split("."),
                a = l[0],
                c = l.length > 1;
            let p = this.getProperty(a);
            if (r.CollectionUtils.isPlainObject(p) && (p = r.CollectionUtils.copyInto({}, p, void 0, !0)), n && this._verifyProps(e, t, s), this._updateProps(l, t), !n || this._state.allowPropertyChangedEvents() && !o.AttributeUtils.isGlobalOrData(e)) {
                this._state.dirtyProps.add(a);
                const s = n ? "external" : "internal",
                    o = {
                        value: this.getProperty(a),
                        previousValue: p,
                        updatedFrom: s
                    };
                c && (o.subproperty = {
                    path: e,
                    value: t,
                    previousValue: i
                });
                const r = a + "Changed",
                    l = c ? null : e => {
                        if ("propChange" !== e.kind || e.type !== r || e.detail.subproperty) return null;
                        const t = Object.assign({}, o, {
                            previousValue: e.detail.previousValue
                        });
                        return {
                            type: r,
                            detail: t,
                            collapse: l,
                            kind: "propChange"
                        }
                    };
                this._queueFireEventsTask({
                    type: r,
                    detail: o,
                    collapse: l,
                    kind: "propChange"
                })
            }
            const u = this._oldRootProps;
            u && this._controlledProps.has(e) && (u[e] = t), this._queueRender(this._vdom && !(null == s ? void 0 : s.readOnly))
        }
        _queueRender(e) {
            e && !this._isRenderQueued && (this._isRenderQueued = !0, window.queueMicrotask(() => {
                this._isRenderQueued = !1, this._render()
            }))
        }
        _verifyProps(e, t, s) {
            if (s) {
                if (s.readOnly) throw new o.JetElementError(this._element, `Read-only property '${e}' cannot be set.`);
                try {
                    i.checkEnumValues(this._element, e, t, s)
                } catch (e) {
                    throw new o.JetElementError(this._element, e.message)
                }
            }
        }
        _updateProps(e, t) {
            var s, n;
            const o = e[0];
            let i = this._props;
            if (e.length > 1) {
                const e = null !== (s = this._props[o]) && void 0 !== s ? s : null === (n = this._defaultProps) || void 0 === n ? void 0 : n[o];
                e && r.CollectionUtils.isPlainObject(e) ? i[o] = r.CollectionUtils.copyInto({}, e, void 0, !0) : i[o] = {}
            }
            for (; e.length;) {
                const s = e.shift();
                0 === e.length ? i[s] = t : i[s] || (i[s] = {}), i = i[s]
            }
        }
        _queueFireEventsTask(e) {
            let t = e;
            const s = this._getEventCollapseInfo(e, this._eventQueue);
            if (s) {
                const [e, n] = s;
                this._eventQueue.splice(e, 1), t = n
            }
            return this._eventQueue.push(t), this._queuedEvents || (this._queuedEvents = new Promise(e => {
                window.queueMicrotask(() => {
                    try {
                        for (; this._eventQueue.length;) {
                            const e = this._eventQueue.shift(),
                                t = "propChange" === e.kind ? new CustomEvent(e.type, {
                                    detail: e.detail
                                }) : e.event;
                            this._element.dispatchEvent(t)
                        }
                    } finally {
                        e(), this._queuedEvents = null
                    }
                })
            })), this._queuedEvents
        }
        _getEventCollapseInfo(e, t) {
            var s;
            if ("propChange" !== e.kind) return null;
            for (let n = 0; n < t.length; n++) {
                const o = null === (s = e.collapse) || void 0 === s ? void 0 : s.call(e, t[n]);
                if (o) return [n, o]
            }
            return null
        }
        _verifyConnectDisconnect(e) {
            this._verifyingState === j.Unset && window.queueMicrotask(() => {
                this._verifyingState === e && (this._verifyingState === j.Connect ? this._verifiedConnect() : this._verifiedDisconnect()), this._verifyingState = j.Unset
            }), this._verifyingState = e
        }
        _verifiedConnect() {
            if (this._state.isComplete()) this._reconnectSlots();
            else if (this._state.startCreationCycle(), this._state.isCreating()) {
                const e = () => {
                    this._element[o.CHILD_BINDING_PROVIDER] = "preact";
                    let e = this._state.getSlotMap();
                    if (e) this._reconnectSlots();
                    else {
                        e = this._state.getSlotMap(!0);
                        const t = this._removeAndConvertSlotsToProps(e);
                        Object.assign(this._props, t)
                    }
                    this._render()
                };
                this._state.setCreateCallback(e), this._state.setBindingsDisposedCallback(() => this._handleBindingsDisposed())
            }
        }
        _verifiedDisconnect() {
            this._state.isComplete() ? (this._disconnectSlots(), this._state.resetCreationCycle(), n.render(null, this._element), this._applyRef(this._oldRootRef, null), this._oldRootRef = void 0, this._vdom = null) : this._state.pauseCreationCycle()
        }
        _initializePropsFromDom() {
            const e = this._element.attributes;
            for (let t = 0; t < e.length; t++) {
                const {
                    name: s,
                    value: n
                } = e[t], [o, i, r] = this._getPropValuePair(s, n);
                o && (this._verifyProps(o, i, r), this._updateProps(o.split("."), i))
            }
        }
        _playbackEarlyPropertySets() {
            for (var e; this._earlySets.length;) {
                const t = this._earlySets.shift(),
                    s = i.getPropertyMetadata(t.property, null === (e = this._metadata) || void 0 === e ? void 0 : e.properties),
                    n = o.transformPreactValue(this._element, s, t.value);
                this.setProperty(t.property, n)
            }
        }
        _patchRootElement(e) {
            var t;
            const s = this._oldRootProps || this._getInitialRootProps(),
                n = e.props;
            ! function(e, t, s, n, o, i) {
                let r;
                for (r in s) "children" === r || "key" === r || r in t || i(e, r, null, s[r], n) || P(e, r, null, s[r], n);
                for (r in t) o && "function" != typeof t[r] || "children" === r || "key" === r || "value" === r || "checked" === r || s[r] === t[r] || i(e, r, t[r], s[r], n) || P(e, r, t[r], s[r], n)
            }(this._element, n, s, !1, !1, R._setPropertyOverrides);
            const o = e.ref;
            this._oldRootRef !== o && (this._applyRef(o, this._element), o && (null === (t = this._oldRootRef) || void 0 === t || t.call(this, null))), this._oldRootProps = n, this._oldRootRef = o
        }
        _applyRef(e, t) {
            e && ("function" == typeof e ? e(t) : e.current = t)
        }
        static _setPropertyOverrides(e, t, s, n) {
            if ("style" === t && "string" == typeof s) throw new Error("CSS style must be an object. CSS text is not supported");
            if ("class" === t || "className" === t) {
                const t = null == n ? O : o.CustomElementUtils.getClassSet(n),
                    i = null == s ? O : o.CustomElementUtils.getClassSet(s);
                for (const s of t.values()) i.has(s) || e.classList.remove(s);
                for (const s of i.values()) t.has(s) || e.classList.add(s);
                return !0
            }
            if ("o" === t[0] && "n" === t[1]) {
                const o = t !== (t = t.replace(/Capture$/, "")),
                    i = t.toLowerCase();
                i in e && (t = i), t = t.slice(2), R._getRootListeners(e, o)[t] = s;
                const r = o ? R._eventProxyCapture : R._eventProxy;
                return s ? n || e.addEventListener(t, r, o) : e.removeEventListener(t, r, o), !0
            }
            return "role" === t && (s ? e.setAttribute(t, s) : e.removeAttribute(t), !0)
        }
        static _getRootListeners(e, t) {
            const s = t ? T : A;
            let n = e[s];
            return n || (n = e[s] = {}), n
        }
        _getInitialRootProps() {
            const e = {};
            for (const t of this._controlledProps.values()) t in this._props && (e[t] = this._props[t]);
            return e
        }
        _removeAndConvertSlotsToProps(e) {
            var t, s;
            const n = null === (t = this._metadata.extension) || void 0 === t ? void 0 : t._DYNAMIC_SLOT,
                o = null == n ? void 0 : n.prop,
                r = null === (s = this._metadata) || void 0 === s ? void 0 : s.slots,
                l = Object.keys(e),
                a = {};
            if (l.length > 0 && l.forEach(t => {
                    const s = e[t];
                    s.forEach(e => {
                        f.parkNode(e)
                    });
                    const l = i.getPropertyMetadata(t, r);
                    if (l) {
                        const e = !!(null == l ? void 0 : l.data),
                            n = e || "" !== t ? t : "children";
                        this._assignSlotProperty(a, n, void 0, t, e, s)
                    } else {
                        if (!o) return;
                        a[o] || (a[o] = {});
                        const e = n.isTemplate;
                        this._assignSlotProperty(a, t, o, t, e, s)
                    }
                }), "knockout" === this._state.getBindingProviderType()) {
                let e;
                for (; e = this._element.firstChild;) this._state.getBindingProviderCleanNode()(e), e.remove()
            }
            return a
        }
        _assignSlotProperty(e, t, s, n, i, r) {
            var l, a;
            const c = s ? e[s] : e;
            if (i) {
                if ("TEMPLATE" !== (null === (l = r[0]) || void 0 === l ? void 0 : l.nodeName)) throw new o.JetElementError(this._element, `Slot content for template slot ${n} must be a template element.`); {
                    const e = r[0];
                    c[t] = null !== (a = e.render) && void 0 !== a ? a : this._getSlotRenderer(e, t, s)
                }
            } else {
                const e = r.map((e, t) => _(this._element, e, this._executeOnCommit, this._handleSlotMount.bind(this), this._handleSlotUnmount.bind(this)));
                c[t] = e
            }
        }
        _getSlotRenderer(e, t, s) {
            const n = this._state.getBindingProvider(),
                i = n ? () => {
                    (s ? this._props[s] : this._props)[t] = this._getSlotRenderer(e, t, s), this._queueRender(!0)
                } : null;
            return t => {
                const s = this._state.getTemplateEngine();
                if (!s) throw new o.JetElementError(this._element, "Unexpected call to render a template slot");
                return s.execute(this._element, e, t, n, i)
            }
        }
        _handleBindingsDisposed() {
            f.disposeNodes(this._state.getSlotMap(), this._state.getBindingProviderCleanNode()), this._state.disposeTemplateCache()
        }
        _disconnectSlots() {
            f.disconnectNodes(this._state.getSlotMap())
        }
        _reconnectSlots() {
            f.reconnectNodes(this._state.getSlotMap())
        }
        _handleSlotUnmount(e) {
            this._state.isComplete() && f.parkNode(e)
        }
        _handleSlotMount(e) {
            var t;
            const s = null === (t = r.Components) || void 0 === t ? void 0 : t.subtreeShown;
            s && (e.isConnected ? s(e) : this._executeOnCommit.add(() => s(e)))
        }
        static _eventProxy(e) {
            this[A][e.type](n.options.event ? n.options.event(e) : e)
        }
        static _eventProxyCapture(e) {
            this[T][e.type](n.options.event ? n.options.event(e) : e)
        }
        _initializeActionCallbacks(e) {
            Object.keys(e).forEach(t => {
                const s = e[t],
                    n = o.AttributeUtils.eventTypeToEventListenerProperty(t);
                this._props[n] = e => {
                    const n = Object.assign({}, e),
                        o = !!s.cancelable,
                        i = [];
                    o && (n.accept = e => {
                        i.push(e)
                    });
                    const r = {
                            detail: n,
                            bubbles: !!s.bubbles,
                            cancelable: o
                        },
                        l = new CustomEvent(t, r),
                        a = this._queueFireEventsTask({
                            event: l,
                            kind: "action"
                        });
                    if (o) return a.then(() => l.defaultPrevented ? Promise.reject() : Promise.all(i).then(() => Promise.resolve(), e => Promise.reject(e)))
                }
            })
        }
        _initializeWritebackCallbacks(e) {
            e.forEach(e => {
                var t;
                const s = o.AttributeUtils.propertyNameToChangedCallback(e),
                    n = i.getPropertyMetadata(e, null === (t = this._metadata) || void 0 === t ? void 0 : t.properties);
                this._props[s] = t => {
                    this._updatePropsAndQueueRenderAsNeeded(e, t, n, !1)
                }
            })
        }
    }
    var j;
    ! function(e) {
        e[e.Connect = 0] = "Connect", e[e.Disconnect = 1] = "Disconnect", e[e.Unset = 2] = "Unset"
    }(j || (j = {}));
    const U = new class {
        constructor() {
            this.appendChildHelper = (e, t) => HTMLElement.prototype.appendChild.call(e, t), this.insertBeforeHelper = (e, t, s) => HTMLElement.prototype.insertBefore.call(e, t, s)
        }
        connectedCallback() {}
        disconnectedCallback() {}
        attributeChangedCallback(e, t, s) {}
        getProperty(e) {}
        setProperty(e, t) {}
        setProperties(e) {}
    };
    class M extends HTMLElement {
        static get observedAttributes() {
            let e = [];
            return this.metadata.properties && (e = e.concat(i.getFlattenedAttributes(this.metadata.properties))), this.rootObservedAttributes && (e = e.concat(this.rootObservedAttributes)), e
        }
        connectedCallback() {
            this._getHelper().connectedCallback()
        }
        disconnectedCallback() {
            var e;
            null === (e = this._helper) || void 0 === e || e.disconnectedCallback()
        }
        attributeChangedCallback(e, t, s) {
            var n;
            null === (n = this._helper) || void 0 === n || n.attributeChangedCallback(e, t, s)
        }
        getProperty(e) {
            return this._getHelper().getProperty(e)
        }
        setProperty(e, t) {
            this._getHelper().setProperty(e, t)
        }
        setProperties(e) {
            this._getHelper().setProperties(e)
        }
        appendChild(e) {
            return this._getHelper().appendChildHelper(this, e)
        }
        insertBefore(e, t) {
            return this._getHelper().insertBeforeHelper(this, e, t)
        }
        setAttribute(e, t) {
            if ("class" === e) {
                const e = o.CustomElementUtils.getClassSet(t);
                o.CustomElementUtils.getElementState(this).setOuterClasses(e)
            } else HTMLElement.prototype.setAttribute.call(this, e, t)
        }
        removeAttribute(e) {
            "class" === e ? this.setAttribute("class", "") : HTMLElement.prototype.removeAttribute.call(this, e)
        }
        _getHelper() {
            return this._helper || (this.hasAttribute("data-oj-jsx") ? (this.removeAttribute("data-oj-jsx"), this.classList.add("oj-complete"), this._helper = U) : this._helper = new R(this, this.constructor.component, this.constructor.metadata, this.constructor.rootObservedAttributes, this.constructor.rootObservedProperties, this.constructor.defaultProps)), this._helper
        }
    }
    class N extends o.ElementState {
        getTemplateEngine() {
            return N._cachedTemplateEngine
        }
        getTrackChildrenOption() {
            return "immediate"
        }
        allowPropertyChangedEvents() {
            return super.allowPropertyChangedEvents() && (e => {
                var t;
                const s = e._getHelper();
                return !!(null === (t = s.isInitialized) || void 0 === t ? void 0 : t.call(s))
            })(this.Element)
        }
        disposeTemplateCache() {
            var e;
            const t = this.getSlotMap(),
                s = Object.keys(t),
                n = o.CustomElementUtils.getElementDescriptor(this.Element.tagName).metadata,
                r = null === (e = null == n ? void 0 : n.extension) || void 0 === e ? void 0 : e._DYNAMIC_SLOT,
                l = !!(null == r ? void 0 : r.isTemplate);
            s.filter(e => {
                const t = i.getPropertyMetadata(e, null == n ? void 0 : n.slots);
                if (t) {
                    if (t.data) return !0
                } else if (l) return !0;
                return !1
            }).forEach(e => {
                var s;
                const n = t[e];
                "TEMPLATE" === (null === (s = n[0]) || void 0 === s ? void 0 : s.nodeName) && this.getTemplateEngine().cleanupTemplateCache(n[0])
            })
        }
        GetPreCreatedPromise() {
            const e = super.GetPreCreatedPromise();
            return !N._cachedTemplateEngine && this._hasDirectTemplateChildren() ? e.then(() => this._getTemplateEnginePromise()) : e
        }
        IsTransferAttribute(e) {
            return this.Element.constructor.rootObservedAttrSet.has(e)
        }
        GetDescriptiveTransferAttributeValue(e) {
            return ((e, t) => {
                var s;
                const n = e.getAttribute(t);
                if (n) return n;
                const o = e._getHelper();
                return ((null === (s = o.getProps) || void 0 === s ? void 0 : s.call(o)) || {})[t]
            })(this.Element, e)
        }
        _getTemplateEnginePromise() {
            return new Promise(function(t, s) {
                e(["ojs/ojvcomponent-template"], function(e) {
                    t(function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        return e && Object.keys(e).forEach(function(s) {
                            var n = Object.getOwnPropertyDescriptor(e, s);
                            Object.defineProperty(t, s, n.get ? n : {
                                enumerable: !0,
                                get: function() {
                                    return e[s]
                                }
                            })
                        }), t.default = e, t
                    }(e))
                }, s)
            }).then(e => {
                N._cachedTemplateEngine = e
            })
        }
        _hasDirectTemplateChildren() {
            const e = this.Element.childNodes;
            for (let t = 0; t < e.length; t++) {
                if ("template" === e[t].localName) return !0
            }
            return !1
        }
    }
    const L = () => {
        throw new Error("The Root component should only be used as the top-level return from a VComponent render function.  It will be rewritten by VComponent code so Preact will never actually render it unless it appears in an invalid location.")
    };

    function x(e) {
        return function(t) {
            var s;
            const r = t.metadata,
                l = (null === (s = null == r ? void 0 : r.extension) || void 0 === s ? void 0 : s._OBSERVED_GLOBAL_PROPS) || [],
                a = l.map(e => o.AttributeUtils.getGlobalAttrForProp(e));
            ! function(e, t, s, i) {
                const r = t.prototype.render;
                t.prototype.render = function(t, l, a) {
                    var c;
                    const p = null === (c = null == s ? void 0 : s.extension) || void 0 === c ? void 0 : c._READ_ONLY_PROPS;
                    p && p.forEach(e => delete t[e]);
                    const u = t[S],
                        d = !!u;
                    d && o.CustomElementUtils.getElementState(u).disposeTemplateCache();
                    let h = r.call(this, t, l, a);
                    if (h.type === L && (h = n.cloneElement(h), h.type = e), h.type !== e) {
                        const i = {};
                        return d ? h : (i.ref = function(e) {
                            e && (e[o.CustomElementUtils.VCOMP_INSTANCE] = {
                                props: t
                            })
                        }, i["data-oj-jsx"] = "", Object.keys(t).forEach(e => {
                            H(e, s) && (i[e] = t[e])
                        }), n.h(e, i, h))
                    }
                    if (!d) {
                        const e = h.props;
                        t.style && e.style && (e.style = Object.assign({}, t.style, e.style));
                        const n = t.class;
                        if (n) {
                            const t = e.class || "";
                            e.class = `${n} ${t}`
                        }
                        return e["data-oj-jsx"] = "", Object.keys(t).forEach(n => {
                            n in e || i.has(n) || !H(n, s) || (e[n] = t[n])
                        }), h
                    }
                    return t[k](h), n.h(n.Fragment, {}, h.props.children)
                }
            }(e, t, r, new Set(l)),
            function(e) {
                const t = e.prototype,
                    s = t.componentDidMount,
                    n = t.componentDidUpdate;
                t.componentDidMount = function() {
                    D.call(this), null == s || s.call(this)
                }, t.componentDidUpdate = function(...e) {
                    D.call(this), null == n || n.apply(this, e)
                }
            }(t),
            function(e, t, s, n, r) {
                class l extends M {}
                l.metadata = t || {}, l.component = s, l.rootObservedAttributes = r, l.rootObservedAttrSet = new Set(r), l.rootObservedProperties = n, l.defaultProps = s.defaultProps ? i.deepFreeze(s.defaultProps) : null,
                    function(e, t) {
                        if (!t) return;
                        for (let s in t) Object.defineProperty(e, s, {
                            get() {
                                return this.getProperty(s)
                            },
                            set(e) {
                                this.setProperty(s, e)
                            }
                        })
                    }(l.prototype, null == t ? void 0 : t.properties),
                    function(e, t) {
                        if (!t) return;
                        for (let s in t) e[s] = function() {
                            if (this._helper === U) throw new o.JetElementError(this, "Cannot access element methods when rendered as a value based element.");
                            const e = this._helper.ref.current;
                            if (!e) throw new o.JetElementError(this, "Cannot access methods before element is upgraded.");
                            return e[s].apply(e, arguments)
                        }
                    }(l.prototype, null == t ? void 0 : t.methods), o.CustomElementUtils.registerElement(e, {
                        descriptor: {
                            metadata: t
                        },
                        stateClass: N,
                        vcomp: !0
                    }, l)
            }(e, r, t, l, a)
        }
    }

    function D() {
        const e = this.props[w];
        e && e.flush()
    }

    function H(e, t) {
        return "className" === e || o.AttributeUtils.isGlobalOrData(e) || function(e, t) {
            var s, n;
            if (null === (s = null == t ? void 0 : t.properties) || void 0 === s ? void 0 : s[e]) return !1;
            const o = e.match(I);
            if (o) {
                const e = o[1].toLowerCase() + o[2];
                return !(null === (n = null == t ? void 0 : t.events) || void 0 === n ? void 0 : n[e])
            }
            return !1
        }(e, t)
    }
    const I = /^on(?!.*Changed$)([A-Za-z])([A-Za-z]*)$/;
    "undefined" != typeof window && (HTMLTemplateElement.prototype.hasOwnProperty("render") || Object.defineProperty(HTMLTemplateElement.prototype, "render", {
        value: null,
        writable: !0
    }));
    const V = o.ElementUtils.getUniqueId.bind(null, null);
    t.Root = L, t.customElement = x, t.getUniqueId = V, t.method = function(e, t, s) {}, t.registerCustomElement = function(e, t) {
        class s extends n.Component {
            render() {
                return t(arguments[0])
            }
        }
        return s.displayName = arguments[2], arguments.length >= 4 && (s.metadata = arguments[3], arguments.length >= 5 && (s.defaultProps = arguments[4])), x(e)(s), s
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojvcomponent.js.map