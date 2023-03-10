/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore-base", "ojs/ojhtmlutils", "ojs/ojlogger", "ojs/ojmetadatautils", "ojs/ojcomposite-knockout", "ojs/ojcustomelement", "ojs/ojcustomelement-utils"], function(e, t, o, r, n, i, s, a) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    const d = {
        getContainingComposite: function(e, o) {
            for (var r = null, n = e; n;)
                if ((n = t.CompositeTemplateRenderer.getEnclosingComposite(n)) && "oj-module" !== n.nodeName.toLowerCase()) {
                    if (o && !(16 & e.compareDocumentPosition(o))) break;
                    r = n
                }
            return r
        }
    };
    class l extends a.ElementState {
        getTrackChildrenOption() {
            return "immediate"
        }
    }
    const u = {};
    u.proto = Object.create(t.BaseCustomElementBridge.proto), u.DESC_KEY_CSS = "css", u.DESC_KEY_PARSE_FUN = "parseFunction", u.DESC_KEY_VIEW = "view", u.DESC_KEY_VIEW_MODEL = "viewModel", u.SUBID_MAP = "data-oj-subid-map", t.CollectionUtils.copyInto(u.proto, {
        beforePropertyChangedEvent: function(e, o, r) {
            var n = {
                property: o
            };
            t.CollectionUtils.copyInto(n, r), t.CompositeTemplateRenderer.invokeViewModelMethod(e, this._VIEW_MODEL, "propertyChanged", [n])
        },
        AddComponentMethods: function(e) {
            var t = function(e, t, o, r, n, i) {
                if (!t.SaveEarlyPropertySet(e, o, r)) {
                    var s = t.SetProperty(e, o, r, n, i);
                    if (s.propertySet)
                        if (s.isSubproperty) u._getPropertyTracker(t, s.property).valueHasMutated()
                }
            };
            e.setProperty = function(e, o) {
                var r = a.CustomElementUtils.getElementBridge(this);
                t(this, r, e, o, this, !0)
            }, e.getProperty = function(e) {
                return a.CustomElementUtils.getElementBridge(this).GetProperty(this, e, this)
            }, e._propsProto.setProperty = function(e, o) {
                t(this._ELEMENT, this._BRIDGE, e, o, this, !1)
            }, e._propsProto.getProperty = function(e) {
                return this._BRIDGE.GetProperty(this._ELEMENT, e, this)
            }, e.getNodeBySubId = function(e) {
                var t = a.CustomElementUtils.getElementBridge(this),
                    o = t._getViewModel();
                return o.getNodeBySubId ? o.getNodeBySubId(e, t._getNodeBySubId.bind(this)) : t._getNodeBySubId.bind(this)(e)
            }, e.getSubIdByNode = function(e) {
                var t = a.CustomElementUtils.getElementBridge(this),
                    o = t._getViewModel();
                return o.getSubIdByNode ? o.getSubIdByNode(e, t._getSubIdByNode.bind(this)) : t._getSubIdByNode.bind(this)(e)
            }
        },
        CreateComponent: function(e) {
            const o = a.CustomElementUtils.getElementState(e).getSlotMap();
            for (var r = {}, n = Object.keys(o), i = 0; i < n.length; i++) {
                var s = n[i];
                r[s] = o[s].length
            }
            var d = a.ElementUtils.getUniqueId(),
                l = {
                    element: e,
                    props: Promise.resolve(this._PROPS),
                    properties: this._PROPS,
                    slotNodeCounts: Promise.resolve(r),
                    slotCounts: r,
                    unique: d
                };
            l.uniqueId = e.id ? e.id : d, this._VM_CONTEXT = l;
            var E = a.CustomElementUtils.getElementDescriptor(e.tagName)[u.DESC_KEY_VIEW_MODEL];
            E = "function" == typeof E ? new E(l) : t.CompositeTemplateRenderer.invokeViewModelMethod(e, E, "initialize", [l]) || E, this._VIEW_MODEL = E;
            var _ = t.CompositeTemplateRenderer.invokeViewModelMethod(e, E, "activated", [l]) || Promise.resolve(!0),
                m = this;
            return _.then(function() {
                var n = {
                    props: m._PROPS,
                    slotMap: o,
                    slotNodeCounts: r,
                    unique: m._VM_CONTEXT.unique,
                    uniqueId: m._VM_CONTEXT.uniqueId,
                    viewModel: m._VIEW_MODEL,
                    viewModelContext: m._VM_CONTEXT
                };
                e[a.CHILD_BINDING_PROVIDER] = "knockout", t.Components && t.Components.unmarkPendingSubtreeHidden(e);
                var i = a.CustomElementUtils.getElementRegistration(e.tagName).cache,
                    s = u._getDomNodes(i.view, e);
                t.CompositeTemplateRenderer.renderTemplate(n, e, s)
            })
        },
        DefineMethodCallback: function(e, t, o) {
            e[t] = function() {
                var e = o.internalName || t,
                    r = a.CustomElementUtils.getElementBridge(this),
                    n = r._getViewModel();
                return n[e].apply(n, arguments)
            }
        },
        DefinePropertyCallback: function(e, o, i) {
            var s = function(e, n) {
                    if (!this._BRIDGE.SaveEarlyPropertySet(this._ELEMENT, o, e)) {
                        n && (e = a.transformPreactValue(this._ELEMENT, i, e));
                        var s = u._getPropertyTracker(this._BRIDGE, o),
                            d = s.peek();
                        if (a.ElementUtils.comparePropertyValues(i, e, d)) r.info(a.CustomElementUtils.getElementInfo(this._ELEMENT) + ": Ignoring property set for property '" + o + "' with same value.");
                        else if (n && (e = this._BRIDGE.ValidatePropertySet(this._ELEMENT, o, e)), i._eventListener && this._BRIDGE.SetEventListenerProperty(this._ELEMENT, o, e), s(e), !i._derived) {
                            var l = n ? "external" : "internal";
                            t.BaseCustomElementBridge.__FirePropertyChangeEvent(this._ELEMENT, o, e, d, l), this._BRIDGE.State.dirtyProps.add(o)
                        }
                    }
                },
                d = function(e) {
                    var t = u._getPropertyTracker(this._BRIDGE, o),
                        r = e ? t.peek() : t();
                    return void 0 === r && t(r = n.getDefaultValue(i)), r
                };
            i._derived || t.BaseCustomElementBridge.__DefineDynamicObjectProperty(e._propsProto, o, function() {
                return d.bind(this, !1)()
            }, function(e) {
                s.bind(this)(e, !1)
            }), t.BaseCustomElementBridge.__DefineDynamicObjectProperty(e, o, function() {
                var e = a.CustomElementUtils.getElementBridge(this);
                return d.bind(e._PROPS, !0)()
            }, function(e) {
                var t = a.CustomElementUtils.getElementBridge(this);
                s.bind(t._PROPS)(e, !0)
            })
        },
        GetMetadata: function(e) {
            return e._metadata || {}
        },
        HandleDetached: function(e) {
            t.BaseCustomElementBridge.proto.HandleDetached.call(this, e), t.CompositeTemplateRenderer.invokeViewModelMethod(e, this._VIEW_MODEL, "detached", [e]), t.CompositeTemplateRenderer.invokeViewModelMethod(e, this._VIEW_MODEL, "disconnected", [e])
        },
        HandleReattached: function(e) {
            t.BaseCustomElementBridge.proto.HandleReattached.call(this, e), t.CompositeTemplateRenderer.invokeViewModelMethod(e, this._VIEW_MODEL, "connected", [this._VM_CONTEXT])
        },
        InitializeElement: function(e) {
            var o;
            t.BaseCustomElementBridge.proto.InitializeElement.call(this, e), t.Components && t.Components.markPendingSubtreeHidden(e);
            var r = a.CustomElementUtils.getElementRegistration(e.tagName).cache;
            if (!r.view) {
                var n = (o = a.CustomElementUtils.getElementDescriptor(e.tagName))[u.DESC_KEY_VIEW];
                r.view || (r.view = "string" == typeof n ? u._getDomNodes(n, e) : n)
            }
            if (!r.css) {
                o || (o = a.CustomElementUtils.getElementDescriptor(e.tagName));
                var i = o[u.DESC_KEY_CSS];
                if (i) {
                    var s = document.createElement("style");
                    s.type = "text/css", s.styleSheet ? s.styleSheet.cssText = i : s.appendChild(document.createTextNode(i)), document.head.appendChild(s), r.css = !0
                }
            }
            t.BaseCustomElementBridge.__InitProperties(e, e)
        },
        InitializePrototype: function(e) {
            t.BaseCustomElementBridge.proto.InitializePrototype.call(this, e), Object.defineProperty(e, "_propsProto", {
                value: {}
            })
        },
        initializeBridge: function(e, o) {
            t.BaseCustomElementBridge.proto.initializeBridge.call(this, e, o), e._propsProto && (this._PROPS = Object.create(e._propsProto), this._PROPS._BRIDGE = this, this._PROPS._ELEMENT = e)
        },
        ShouldRemoveDisabled: function() {
            var e = this.METADATA.extension;
            return !!e && !0 === e._SHOULD_REMOVE_DISABLED
        },
        _getNodeBySubId: function(e) {
            var o = u.__GetSubIdMap(this)[e.subId];
            if (o) {
                if (o.alias) {
                    var r = t.CollectionUtils.copyInto({}, e, void 0, !0);
                    r.subId = o.alias;
                    var n = o.node;
                    return n.getNodeBySubId ? n.getNodeBySubId(r) : t.Components.__GetWidgetConstructor(n)("getNodeBySubId", r)
                }
                return o.node
            }
            return null
        },
        _getSubIdByNode: function(e) {
            if (!this.contains(e)) return null;
            var o, r, n, i = u.__GetNodeMap(this),
                s = d.getContainingComposite(e, this);
            if (null != s) {
                if ((r = i[o = s.node.getAttribute(u.SUBID_MAP)]) && s.getSubIdByNode && (n = s.getSubIdByNode(e))) {
                    var a = r.map[n.subId];
                    return n.subId = a, n
                }
                return null
            }
            for (var l = e; l !== this && !(o = l.getAttribute(u.SUBID_MAP) || l.getAttribute("data-oj-subid"));) l = l.parentNode;
            if (r = i[o]) {
                if (!r.map) return {
                    subId: o
                };
                var E = r.node;
                if (n = E.getSubIdByNode ? E.getSubIdByNode(e) : t.Components.__GetWidgetConstructor(E)("getSubIdByNode", e)) return n.subId = r.map[n.subId], n
            }
            return null
        },
        _getViewModel: function() {
            if (!this._VIEW_MODEL) throw new a.JetElementError(this._ELEMENT, "Cannot access methods before element is upgraded.");
            return this._VIEW_MODEL
        }
    }), u.register = function(e, o) {
        var n = {};
        n[t.BaseCustomElementBridge.DESC_KEY_META] = u._getResource(e, o, t.BaseCustomElementBridge.DESC_KEY_META), n[u.DESC_KEY_VIEW] = u._getResource(e, o, u.DESC_KEY_VIEW), n[u.DESC_KEY_CSS] = u._getResource(e, o, u.DESC_KEY_CSS), n[u.DESC_KEY_VIEW_MODEL] = u._getResource(e, o, u.DESC_KEY_VIEW_MODEL), n[u.DESC_KEY_PARSE_FUN] = o[u.DESC_KEY_PARSE_FUN];
        const i = {
            descriptor: n,
            bridgeProto: u.proto,
            stateClass: l,
            composite: !0,
            cache: {}
        };
        var s = n[t.BaseCustomElementBridge.DESC_KEY_META];
        if (s || (r.warn("Composite registered'" + e.toLowerCase() + "' without Metadata."), s = {}), null == n[u.DESC_KEY_VIEW]) throw new Error("Cannot register composite '" + e.toLowerCase() + "' without a View.");
        n._metadata = t.BaseCustomElementBridge.__ProcessEventListeners(s, !1), a.CustomElementUtils.registerElement(e, i, u.proto.getClass(n))
    }, u._getDomNodes = function(e, t) {
        var r, n;
        if ("string" == typeof e) return o.stringToNodeArray(e);
        if (u._isDocumentFragment(e)) {
            n = e.cloneNode(!0);
            var i = [];
            for (r = 0; r < n.childNodes.length; r++) i.push(n.childNodes[r]);
            return i
        }
        if (Array.isArray(e)) {
            for (n = [], r = 0; r < e.length; r++) n.push(e[r].cloneNode(!0));
            return n
        }
        throw new a.JetElementError(t, "The composite View is not one of the following supported types: string, Array of DOM nodes, DocumentFragment")
    }, u._generateSubIdMap = function(e, t) {
        if (!e._SUBID_MAP) {
            for (var o = {}, r = {}, n = t.children, i = 0; i < n.length; i++) u._walkSubtree(o, r, n[i]);
            e._NODE_MAP = r, e._SUBID_MAP = o
        }
    }, u._walkSubtree = function(e, o, r) {
        if (!r.hasAttribute("slot") && (u._addNodeToSubIdMap(e, o, r), !a.CustomElementUtils.isElementRegistered(r.tagName) && !t.Components.__GetWidgetConstructor(r)))
            for (var n = r.children, i = 0; i < n.length; i++) u._walkSubtree(e, o, n[i])
    }, u._addNodeToSubIdMap = function(e, t, o) {
        var r = o.getAttribute("data-oj-subid"),
            n = o.getAttribute(u.SUBID_MAP);
        if (n) {
            var i = JSON.parse(n);
            if ("object" == typeof i && !(i instanceof Array)) {
                for (var s = i, a = {}, d = Object.keys(s), l = 0; l < d.length; l++) {
                    var E = d[l];
                    e[E] = {
                        alias: s[E],
                        node: o
                    }, a[s[E]] = E
                }
                t[n] = {
                    map: a,
                    node: o
                }
            }
        } else r && (e[r] = {
            node: o
        }, t[r] = {
            node: o
        })
    }, u.__GetSubIdMap = function(e) {
        var t = a.CustomElementUtils.getElementBridge(e);
        return u._generateSubIdMap(t, e), t._SUBID_MAP
    }, u.__GetNodeMap = function(e) {
        var t = a.CustomElementUtils.getElementBridge(e);
        return u._generateSubIdMap(t, e), t._NODE_MAP
    }, u._getPropertyTracker = function(e, o) {
        return e._TRACKERS || (e._TRACKERS = {}), e._TRACKERS[o] || (e._TRACKERS[o] = t.CompositeTemplateRenderer.createTracker()), e._TRACKERS[o]
    }, u._getResource = function(e, t, o) {
        var r = t[o];
        if (null != r) {
            var n = Object.prototype.hasOwnProperty;
            if (n.call(r, "inline")) return r.inline;
            if (n.call(r, "promise")) throw new Error("Error while registering " + e + ". The resource type for descriptor key '" + o + "' is no longer supported. The resource should be passed directly as the value instead.");
            return r
        }
    }, u._isDocumentFragment = function(e) {
        return window.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType
    };
    const E = {};
    t._registerLegacyNamespaceProp("Composite", E), E.getMetadata = function(e) {
        var t = E.getComponentMetadata(e);
        return t ? Promise.resolve(t) : null
    }, E.getComponentMetadata = function(e) {
        return a.CustomElementUtils.isComposite(e) ? a.CustomElementUtils.getElementDescriptor(e)[t.BaseCustomElementBridge.DESC_KEY_META] : null
    }, E.register = function(e, t) {
        u.register(e, t)
    }, E.getContainingComposite = d.getContainingComposite, E.__COMPOSITE_PROP = "__oj_composite";
    const _ = E.register,
        m = E.getMetadata,
        p = E.getComponentMetadata,
        c = E.getContainingComposite,
        g = E.__COMPOSITE_PROP;
    e.__COMPOSITE_PROP = g, e.getComponentMetadata = p, e.getContainingComposite = c, e.getMetadata = m, e.register = _, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojcomposite.js.map