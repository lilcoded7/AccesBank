/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojcontext", "ojs/ojlogger", "ojs/ojthemeutils"], function(e, t, r, i, n) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
    const s = {};
    class o {
        static isValidCustomElementName(e) {
            const t = o._RESERVED_TAGS.has(e),
                r = o._ELEMENT_NAME_REGEXP.test(e);
            return !t && r && !e.startsWith("oj-bind-", 0)
        }
        static getSupportedTypes(e) {
            if (!e) return {};
            let t = s[e];
            if (!t) {
                t = {};
                const r = e.toLowerCase(),
                    i = r.match(/(?=[^|])(?:[^|]*<[^>]+>)*[^|]*/g);
                let n = 0;
                i.forEach(e => {
                    const r = e.trim();
                    "any" === r || "boolean" === r || "number" === r || "string" === r || "array" === r || "object" === r || "null" === r ? t[r] = 1 : 0 === r.indexOf("array<") ? t.array = 1 : 0 === r.indexOf("object<") ? t.object = 1 : t.other = 1, n++
                }), t.typeCount = n, s[r] = t
            }
            return t
        }
        static getUniqueId(e) {
            if (e) return e;
            const t = o._UNIQUE + o._UNIQUE_INCR;
            return o._UNIQUE_INCR += 1, t
        }
        static comparePropertyValues(e, r, i) {
            return e.writeback ? t.Object.compareValues(r, i) : r === i
        }
    }
    o._UNIQUE_INCR = 0, o._UNIQUE = "_oj", o._RESERVED_TAGS = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]), o._ELEMENT_NAME_REGEXP = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/;
    const a = {
        accessKey: "accesskey",
        autocapitalize: "autocapitalize",
        autofocus: "autofocus",
        class: "class",
        contentEditable: "contenteditable",
        dir: "dir",
        draggable: "draggable",
        enterKeyHint: "enterkeyhint",
        hidden: "hidden",
        id: "id",
        inputMode: "inputmode",
        lang: "lang",
        role: "role",
        slot: "slot",
        spellcheck: "spellcheck",
        style: "style",
        tabIndex: "tabindex",
        translate: "translate",
        title: "title"
    };
    class l extends Error {
        constructor(e, t) {
            super(`${e.localName} with id '${e.id||""}': ${t}`), Error.captureStackTrace && Error.captureStackTrace(this, l), this.name = "JetElementError"
        }
    }
    const c = /^\s*\[[^]*\]\s*$/,
        d = /^\s*\{[^]*\}\s*$/,
        u = /^(?:\{\{)([^]+)(?:\}\})$/,
        p = /^(?:\[\[)([^]+)(?:\]\])$/,
        m = {};
    Object.keys(a).forEach(function(e) {
        const t = a[e];
        e !== t && (m[t] = e)
    });
    class g {
        static getExpressionInfo(e) {
            let t, r = !1;
            if (e) {
                const i = e.trim();
                let n = u.exec(i);
                t = null == n ? void 0 : n[1], t || (r = !0, n = p.exec(i), t = null == n ? void 0 : n[1])
            }
            return {
                downstreamOnly: r,
                expr: t
            }
        }
        static attributeToPropertyValue(e, t, r, i) {
            if (null != r) try {
                return g.coerceValue(e, t, r, i.type)
            } catch (r) {
                throw new l(e, `Error while parsing parsing attribute ${t}. ${r.stack||r}`)
            }
        }
        static parseAttributeValue(e, t, r, i, n = null) {
            if (!i) throw new Error(`Unable to parse ${t}='${r}' for ${e} with id '${n}'.         This attribute only supports data bound values. Check the API doc for supported types`);
            const s = o.getSupportedTypes(i),
                a = c.test(r),
                l = d.test(r);
            if (s.array && a || s.object && l || s.any && (a || l)) try {
                return JSON.parse(r)
            } catch (i) {
                throw new Error(`Unable to parse ${t}='${r}' for ${e} with id '${n}'           to a JSON Object. Check the value for correct JSON syntax, e.g. double quoted strings. ${i}`)
            } else {
                if (s.string || s.any) return r;
                if (s.boolean) return g.parseBooleanValue(e, t, r, i, n);
                if (s.number && !isNaN(r)) return Number(r)
            }
            throw new Error(`Unable to parse ${t}='${r}' for ${e} with id '${n}'       to a ${i}.`)
        }
        static parseBooleanValue(e, t, r, i, n) {
            if (null == r || "true" === r || "" === r || r.toLowerCase() === t) return !0;
            if ("false" === r) return !1;
            throw new Error(`Unable to parse ${t}='${r}' for ${e} with id '${n}' to a ${i}.`)
        }
        static coerceValue(e, t, r, i) {
            const n = e.tagName.toLowerCase();
            return g.parseAttributeValue(n, t, r, i, e.id)
        }
        static coerceBooleanValue(e, t, r, i) {
            return g.parseBooleanValue(e.tagName.toLowerCase(), t, r, i, e.id)
        }
        static isGlobalOrData(e) {
            return Object.prototype.hasOwnProperty.call(a, e) || e.startsWith("data-") || e.startsWith("aria-")
        }
        static getGlobalAttrForProp(e) {
            return a[e] || e
        }
        static getGlobalPropForAttr(e) {
            return m[e] || e
        }
    }

    function h(e, t) {
        let r = e.cache;
        return r || (r = new Map, e.cache = r), r.has(t) || r.set(t, e(t)), r.get(t)
    }
    g.attributeToPropertyName = h.bind(null, e => e.toLowerCase().replace(/-(.)/g, (e, t) => t.toUpperCase())), g.propertyNameToAttribute = h.bind(null, e => e.replace(/([A-Z])/g, e => "-" + e.toLowerCase())), g.eventTypeToEventListenerProperty = h.bind(null, e => "on" + e.substr(0, 1).toUpperCase() + e.substr(1)), g.isEventListenerProperty = h.bind(null, e => /^on[A-Z]/.test(e)), g.isEventListenerAttr = h.bind(null, e => /^on-[a-z]/.test(e)), g.eventListenerPropertyToEventType = h.bind(null, e => e.substr(2, 1).toLowerCase() + e.substr(3)), g.propertyNameToChangeEventType = h.bind(null, e => e + "Changed"), g.propertyNameToChangedCallback = h.bind(null, e => `on${e[0].toUpperCase()}${e.substr(1)}Changed`), g.eventTriggerToEventType = h.bind(null, e => `oj${e.substr(0,1).toUpperCase()}${e.substr(1)}`), g.eventAttrToPreactPropertyName = h.bind(null, e => e.toLowerCase().split("-").reduce((e, t, r) => {
        return r > 1 ? e + ((i = t).charAt(0).toUpperCase() + i.substr(1)) : e + t;
        var i
    }, ""));
    const _ = new Set;
    class E {
        static registerElement(e, t, r) {
            const i = e.toUpperCase();
            if (!E._CUSTOM_ELEMENT_REGISTRY[i]) {
                if (!t.descriptor) throw new Error(`Custom element ${e} must be registered with a descriptor.`);
                E._CUSTOM_ELEMENT_REGISTRY[e] = t, E._CUSTOM_ELEMENT_REGISTRY[i] = t, Object.defineProperty(r, "name", {
                    value: E.tagNameToElementClassName(e)
                }), customElements.define(e, r)
            }
        }
        static tagNameToElementClassName(e) {
            return e.toLowerCase().match(/-(?<match>.*)/)[0].replace(/-(.)/g, (e, t) => t.toUpperCase()) + "Element"
        }
        static isComposite(e) {
            var t, r;
            return null !== (r = null === (t = E.getElementRegistration(e)) || void 0 === t ? void 0 : t.composite) && void 0 !== r && r
        }
        static isVComponent(e) {
            var t, r;
            return null !== (r = null === (t = E.getElementRegistration(e)) || void 0 === t ? void 0 : t.vcomp) && void 0 !== r && r
        }
        static isElementRegistered(e) {
            return null != E._CUSTOM_ELEMENT_REGISTRY[e]
        }
        static getElementRegistration(e) {
            var t;
            return null !== (t = E._CUSTOM_ELEMENT_REGISTRY[e]) && void 0 !== t ? t : null
        }
        static getElementDescriptor(e) {
            var t;
            return (null === (t = E.getElementRegistration(e)) || void 0 === t ? void 0 : t.descriptor) || {}
        }
        static getElementProperties(e) {
            return E.getPropertiesForElementTag(e.tagName)
        }
        static getPropertiesForElementTag(e) {
            var t, r;
            const i = E.getElementDescriptor(e);
            return (null === (r = null !== (t = i._metadata) && void 0 !== t ? t : i.metadata) || void 0 === r ? void 0 : r.properties) || {}
        }
        static getElementInfo(e) {
            return e ? `${e.tagName.toLowerCase()} with id '${e.id}'` : ""
        }
        static getElementState(e) {
            let t = e[E._ELEMENT_STATE_KEY];
            if (!t && E.isElementRegistered(e.tagName)) {
                t = new(0, E.getElementRegistration(e.tagName).stateClass)(e), Object.defineProperty(e, E._ELEMENT_STATE_KEY, {
                    value: t
                })
            }
            return null != t ? t : null
        }
        static getElementBridge(e) {
            let t = e[E._ELEMENT_BRIDGE_KEY];
            if (void 0 === t && E.isElementRegistered(e.tagName)) {
                t = null;
                const r = E.getElementRegistration(e.tagName).bridgeProto;
                if (void 0 !== r) {
                    t = Object.create(r);
                    const i = E.getElementDescriptor(e.tagName);
                    t.initializeBridge(e, i)
                }
                Object.defineProperty(e, E._ELEMENT_BRIDGE_KEY, {
                    value: t
                })
            }
            return null != t ? t : null
        }
        static getSlotMap(e) {
            const t = {},
                r = e.childNodes;
            for (let e = 0; e < r.length; e++) {
                const i = r[e];
                if (E.isSlotable(i)) {
                    const e = E.getSlotAssignment(i);
                    t[e] || (t[e] = []), t[e].push(i)
                }
            }
            return t
        }
        static getSlotAssignment(e) {
            const t = null != e.__oj_slots ? e.__oj_slots : e.getAttribute && e.getAttribute("slot");
            return t || ""
        }
        static isSlotable(e) {
            return 1 === e.nodeType || 3 === e.nodeType && !!e.nodeValue.trim()
        }
        static getElementProperty(e, t) {
            if (E.isElementRegistered(e.tagName)) {
                let r = e._vcomp;
                return r && !r.isCustomElementFirst() || (r = e[E.VCOMP_INSTANCE]) ? E.getPropertyValue(r.props, t) : e.getProperty(t)
            }
            return e[t]
        }
        static getPropertyValue(e, t) {
            let r = e;
            const i = t.split(".");
            try {
                i.forEach(e => r = r[e])
            } catch (e) {
                return
            }
            return r
        }
        static allowSlotRelocation(e) {
            E._ALLOW_RELOCATION_COUNT += e ? 1 : -1
        }
        static canRelocateNode(e, t) {
            const r = E.getElementState(e);
            if (!r.getSlotMap() || E._ALLOW_RELOCATION_COUNT > 0) return !0;
            const i = r.getSlotSet();
            if (r.isPostCreateCallbackOrComplete() && i.has(t)) {
                if (e.hasAttribute("data-oj-preact")) throw new l(e, t.localName + " cannot be relocated as a child of this element.");
                if ("preact" === r.getBindingProviderType()) return !1
            }
            return !0
        }
        static getClassSet(e) {
            if (e) {
                const t = e.split(/\s+/).filter(e => e.length > 0);
                if (t.length > 0) return new Set(t)
            }
            return _
        }
    }
    E._CUSTOM_ELEMENT_REGISTRY = {}, E._ELEMENT_STATE_KEY = "_ojElementState", E._ELEMENT_BRIDGE_KEY = "_ojBridge", E._ALLOW_RELOCATION_COUNT = 0, E.VCOMP_INSTANCE = Symbol("vcompInstance");
    const C = Symbol("childBindingProvider"),
        b = Symbol("cachedBindingProvider");
    class v {
        constructor(e) {
            this.dirtyProps = new Set, this._componentState = P.WaitingToCreate, this._outerClasses = new Set, this.Element = e
        }
        startCreationCycle() {
            this._isInErrorState() || (null != this._preCreatedPromise && this._componentState !== P.WaitingToCreate || this._updateComponentState(P.Creating), this._registerBusyState())
        }
        pauseCreationCycle() {
            this._resolveBusyState()
        }
        resetCreationCycle() {
            this._updateComponentState(P.WaitingToCreate), this._bindingProviderPromise = null, this._preCreatedPromise = null, this._createdPromise = null
        }
        isComplete() {
            return this._componentState === P.Complete
        }
        isCreating() {
            return this._componentState === P.Creating
        }
        isPostCreateCallbackOrComplete() {
            return this._componentState === P.PostCreateCallback || this.isComplete()
        }
        canHandleAttributes() {
            return !this._isInErrorState() && this._componentState !== P.WaitingToCreate
        }
        beginApplyingBindings() {
            this.isComplete() || (this._bindingProviderType = "knockout", this._updateComponentState(P.ApplyingBindings))
        }
        allowPropertySets() {
            return this._componentState === P.Creating || this._componentState === P.ApplyingBindings || this._componentState === P.BindingsApplied || this._componentState === P.PostCreateCallback || this._componentState === P.Complete
        }
        allowPropertyChangedEvents() {
            return this._componentState === P.BindingsApplied || this._componentState === P.PostCreateCallback || this._componentState === P.Complete
        }
        getTrackChildrenOption() {
            var e, t;
            const r = E.getElementDescriptor(this.Element.tagName).metadata;
            return null !== (t = null === (e = null == r ? void 0 : r.extension) || void 0 === e ? void 0 : e._TRACK_CHILDREN) && void 0 !== t ? t : "none"
        }
        setCreateCallback(e) {
            this._isInErrorState() || (this._updateComponentState(P.WaitingForBindings), this._preCreatedPromise || (this._preCreatedPromise = this.GetPreCreatedPromise()), this._createdPromise = this._preCreatedPromise.then(() => {
                if (!this._isInErrorState()) {
                    const t = e();
                    return this._updateComponentState(P.PostCreateCallback), t
                }
                return Promise.reject()
            }), this._createdPromise.then(() => {
                this._updateComponentState(P.Complete)
            }, e => {
                if (this._updateComponentState(P.Incomplete), e) throw e
            }))
        }
        setBindingsDisposedCallback(e) {
            this._disposedCallback = e
        }
        resolveBindingProvider(e) {
            this._bpClean = e.__CleanNode, this._resolveBindingProviderCallback && (this._bindingsApplied(), this._resolveBindingProviderCallback(e), this._resolveBindingProviderCallback = null, this._rejectBindingProviderCallback = null), this._bindingProvider = e
        }
        rejectBindingProvider(e) {
            this._rejectBindingProviderCallback && (this._rejectBindingProviderCallback(e), this._resolveBindingProviderCallback = null, this._rejectBindingProviderCallback = null)
        }
        disposeBindingProvider() {
            var e;
            this.isComplete() ? null === (e = this._disposedCallback) || void 0 === e || e.call(this) : (this.rejectBindingProvider(), this._updateComponentState(P.BindingsDisposed))
        }
        setBindingProviderCallback(e) {
            this._bindingProviderCallback = e
        }
        getBindingProviderPromise() {
            const e = this.getBindingProviderType();
            if (!this._bindingProviderPromise)
                if (n.verifyThemeVersion(), "none" === e || "preact" === e) this._bindingsApplied(), this._bindingProviderPromise = Promise.resolve(null);
                else {
                    if ("knockout" !== e) throw new l(this.Element, `Unknown binding provider '${e}'.`);
                    this._bindingProvider ? (this._bindingsApplied(), this._bindingProviderPromise = Promise.resolve(this._bindingProvider)) : this._bindingProviderPromise = new Promise((e, t) => {
                        this._resolveBindingProviderCallback = e, this._rejectBindingProviderCallback = t
                    })
                }
            return this._bindingProviderPromise
        }
        getBindingProvider() {
            return this._bindingProvider
        }
        getBindingProviderType() {
            return this._bindingProviderType || (this._bindingProviderType = v._walkBindingProviders(this.Element)), this._bindingProviderType
        }
        getBindingProviderCleanNode() {
            return this._bpClean || v._NOOP
        }
        getDescriptiveText() {
            let e = this.GetDescriptiveValue("aria-label") || this.GetDescriptiveValue("title") || this.GetDescriptiveLabelByValue("labelled-by") || this.GetDescriptiveValue("label-hint") || this.GetDescriptiveLabelByValue("aria-labelledby");
            return e = e ? e.trim().replace(/\s+/g, " ") : "", e
        }
        getSlotMap(e) {
            return !this._slotMap && e && (this._slotMap = E.getSlotMap(this.Element)), this._slotMap
        }
        getSlotSet() {
            if (!this._slotSet) {
                const e = Object.keys(this._slotMap);
                let t = [];
                e.forEach(e => t = t.concat(this._slotMap[e])), this._slotSet = new Set(t)
            }
            return this._slotSet
        }
        setOuterClasses(e) {
            this.PatchClasses(this._outerClasses, e), this._outerClasses = e
        }
        PatchClasses(e, t) {
            e.forEach(e => {
                t.has(e) || this.Element.classList.remove(e)
            }), t.forEach(t => {
                e.has(t) || this.Element.classList.add(t)
            })
        }
        GetCreatedPromise() {
            return this._createdPromise
        }
        GetPreCreatedPromise() {
            let e = this.getBindingProviderPromise();
            return "none" !== this.getTrackChildrenOption() && (e = e.then(e => this._getTrackedChildrenPromises(e))), e
        }
        IsTransferAttribute(e) {
            return !1
        }
        GetDescriptiveValue(e) {
            const t = g.attributeToPropertyName(e),
                r = E.getElementProperties(this.Element);
            let i;
            return i = r && r[t] ? this.Element[t] : this.IsTransferAttribute(e) ? this.GetDescriptiveTransferAttributeValue(e) : this.Element.getAttribute(e), i
        }
        GetDescriptiveTransferAttributeValue(e) {
            return ""
        }
        GetDescriptiveLabelByValue(e) {
            const t = this.GetDescriptiveValue(e);
            if (t) {
                const e = document.getElementById(t);
                if (e) return e.textContent
            }
            return null
        }
        _updateComponentState(e) {
            if (this._componentState !== P.BindingsDisposed) {
                switch (e) {
                    case P.WaitingToCreate:
                        this.Element.classList.remove("oj-complete"), this._createdPromise = null;
                        break;
                    case P.Complete:
                        this.Element.classList.add("oj-complete"), this._resolveBusyState();
                        break;
                    case P.BindingsDisposed:
                    case P.Incomplete:
                        this.Element.classList.add("oj-incomplete"), this._resolveBusyState()
                }
                this._componentState = e
            }
        }
        _bindingsApplied() {
            var e;
            this._updateComponentState(P.BindingsApplied), null === (e = this._bindingProviderCallback) || void 0 === e || e.call(this)
        }
        _registerBusyState() {
            const e = r.getContext(this.Element).getBusyContext();
            if (this._resolveCreatedBusyState) throw new l(this.Element, "Registering busy state before previous state is resolved.");
            this._resolveCreatedBusyState = e.addBusyState({
                description: E.getElementInfo(this.Element) + " is being upgraded."
            })
        }
        _resolveBusyState() {
            this._resolveCreatedBusyState && (this._resolveCreatedBusyState(), this._resolveCreatedBusyState = null)
        }
        static _walkBindingProviders(e, t = e) {
            var r;
            let i = e[b];
            if (i) return i;
            if (i = e.getAttribute("data-oj-binding-provider"), !i) {
                const n = e.parentElement;
                if (null == n) {
                    if (e !== document.documentElement) throw new l(t, "Cannot determine binding provider for a disconnected subtree.");
                    i = "knockout"
                } else i = null !== (r = n[C]) && void 0 !== r ? r : v._walkBindingProviders(n, t)
            }
            return e[b] = i, i
        }
        _getTrackedChildrenPromises(e) {
            const t = this.getTrackChildrenOption(),
                n = r.getContext(this.Element).getBusyContext(),
                s = this._getChildrenToTrack(this.Element, t, []).map(t => {
                    if (!e) {
                        const e = n.addBusyState({
                                description: `Waiting for element ${t.localName} to be defined.`
                            }),
                            r = setInterval(() => {
                                i.warn(`Waiting for element ${t.localName} to be defined.`)
                            }, 2e4);
                        return customElements.whenDefined(t.localName).then(() => (e(), clearInterval(r), E.isElementRegistered(t.tagName) ? E.getElementState(t).GetCreatedPromise() : null)).catch(i => {
                            throw e(), clearInterval(r), new Error(`Error defining element ${t.localName} : ${i}`)
                        })
                    }
                    return E.isElementRegistered(t.tagName) ? E.getElementState(t).GetCreatedPromise() : null
                });
            return Promise.all(s)
        }
        _getChildrenToTrack(e, t, r) {
            const i = e.childNodes;
            for (let e = 0; e < i.length; e++) {
                const n = i[e];
                o.isValidCustomElementName(n.localName) ? r.push(n) : "nearestCustomElement" === t && this._getChildrenToTrack(n, t, r)
            }
            return r
        }
        _isInErrorState() {
            return this._componentState === P.Incomplete || this._componentState === P.BindingsDisposed
        }
    }
    var P;
    v._NOOP = () => {},
        function(e) {
            e[e.WaitingToCreate = 0] = "WaitingToCreate", e[e.Creating = 1] = "Creating", e[e.WaitingForBindings = 2] = "WaitingForBindings", e[e.ApplyingBindings = 3] = "ApplyingBindings", e[e.BindingsApplied = 4] = "BindingsApplied", e[e.PostCreateCallback = 5] = "PostCreateCallback", e[e.Complete = 6] = "Complete", e[e.Incomplete = 7] = "Incomplete", e[e.BindingsDisposed = 8] = "BindingsDisposed"
        }(P || (P = {}));
    const S = Symbol("custom element null"),
        y = Symbol("custom element empty string");
    e.AttributeUtils = g, e.CACHED_BINDING_PROVIDER = b, e.CHILD_BINDING_PROVIDER = C, e.CustomElementUtils = E, e.ElementState = v, e.ElementUtils = o, e.JetElementError = l, e.toSymbolizedValue = e => null === e ? S : "" === e ? y : e, e.transformPreactValue = (e, t, r) => {
        let i = (e => e === S ? null : e === y ? "" : e)(r);
        return "" === i && r !== y && (i = ((e, t, r) => {
            if (!e || "preact" === E.getElementState(e).getBindingProviderType()) {
                if (!o.getSupportedTypes(t.type).string || t.enumValues) return
            }
            return r
        })(e, t, i)), i
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojcustomelement-utils.js.map