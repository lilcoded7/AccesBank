! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("preact/hooks"), require("preact")) : "function" == typeof define && define.amd ? define(["exports", "preact/hooks", "preact"], t) : t(n.preactCompat = {}, n.hooks, n.preact)
}(this, function(n, t, e) {
    function r(n, t) {
        for (var e in t) n[e] = t[e];
        return n
    }

    function u(n, t) {
        for (var e in n)
            if ("__source" !== e && !(e in t)) return !0;
        for (var r in t)
            if ("__source" !== r && n[r] !== t[r]) return !0;
        return !1
    }

    function i(n) {
        this.props = n
    }

    function o(n, t) {
        function r(n) {
            var e = this.props.ref,
                r = e == n.ref;
            return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : u(this.props, n)
        }

        function i(t) {
            return this.shouldComponentUpdate = r, e.createElement(n, t)
        }
        return i.displayName = "Memo(" + (n.displayName || n.name) + ")", i.prototype.isReactComponent = !0, i.__f = !0, i
    }(i.prototype = new e.Component).isPureReactComponent = !0, i.prototype.shouldComponentUpdate = function(n, t) {
        return u(this.props, n) || u(this.state, t)
    };
    var l = e.options.__b;
    e.options.__b = function(n) {
        n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), l && l(n)
    };
    var f = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

    function c(n) {
        function t(t, e) {
            var u = r({}, t);
            return delete u.ref, n(u, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null)
        }
        return t.$$typeof = f, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t
    }
    var a = function(n, t) {
            return null == n ? null : e.toChildArray(e.toChildArray(n).map(t))
        },
        s = {
            map: a,
            forEach: a,
            count: function(n) {
                return n ? e.toChildArray(n).length : 0
            },
            only: function(n) {
                var t = e.toChildArray(n);
                if (1 !== t.length) throw "Children.only";
                return t[0]
            },
            toArray: e.toChildArray
        },
        h = e.options.__e;
    e.options.__e = function(n, t, e) {
        if (n.then)
            for (var r, u = t; u = u.__;)
                if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
        h(n, t, e)
    };
    var d = e.options.unmount;

    function v() {
        this.__u = 0, this.t = null, this.__b = null
    }

    function p(n) {
        var t = n.__.__c;
        return t && t.__e && t.__e(n)
    }

    function m(n) {
        var t, r, u;

        function i(i) {
            if (t || (t = n()).then(function(n) {
                    r = n.default || n
                }, function(n) {
                    u = n
                }), u) throw u;
            if (!r) throw t;
            return e.createElement(r, i)
        }
        return i.displayName = "Lazy", i.__f = !0, i
    }

    function y() {
        this.u = null, this.i = null
    }
    e.options.unmount = function(n) {
        var t = n.__c;
        t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), d && d(n)
    }, (v.prototype = new e.Component).__c = function(n, t) {
        var e = t.__c,
            r = this;
        null == r.t && (r.t = []), r.t.push(e);
        var u = p(r.__v),
            i = !1,
            o = function() {
                i || (i = !0, e.__R = null, u ? u(l) : l())
            };
        e.__R = o;
        var l = function() {
                if (!--r.__u) {
                    if (r.state.__e) {
                        var n = r.state.__e;
                        r.__v.__k[0] = function n(t, e, r) {
                            return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(t) {
                                return n(t, e, r)
                            }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                        }(n, n.__c.__P, n.__c.__O)
                    }
                    var t;
                    for (r.setState({
                            __e: r.__b = null
                        }); t = r.t.pop();) t.forceUpdate()
                }
            },
            f = !0 === t.__h;
        r.__u++ || f || r.setState({
            __e: r.__b = r.__v.__k[0]
        }), n.then(o, o)
    }, v.prototype.componentWillUnmount = function() {
        this.t = []
    }, v.prototype.render = function(n, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var u = document.createElement("div"),
                    i = this.__v.__k[0].__c;
                this.__v.__k[0] = function n(t, e, u) {
                    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
                        "function" == typeof n.__c && n.__c()
                    }), t.__c.__H = null), null != (t = r({}, t)).__c && (t.__c.__P === u && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(t) {
                        return n(t, e, u)
                    })), t
                }(this.__b, u, i.__O = i.__P)
            }
            this.__b = null
        }
        var o = t.__e && e.createElement(e.Fragment, null, n.fallback);
        return o && (o.__h = null), [e.createElement(e.Fragment, null, t.__e ? null : n.children), o]
    };
    var b = function(n, t, e) {
        if (++e[1] === e[0] && n.i.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.i.size))
            for (e = n.u; e;) {
                for (; e.length > 3;) e.pop()();
                if (e[1] < e[0]) break;
                n.u = e = e[2]
            }
    };

    function _(n) {
        return this.getChildContext = function() {
            return n.context
        }, n.children
    }

    function S(n) {
        var t = this,
            r = n.o;
        t.componentWillUnmount = function() {
            e.render(null, t.l), t.l = null, t.o = null
        }, t.o && t.o !== r && t.componentWillUnmount(), n.__v ? (t.l || (t.o = r, t.l = {
            nodeType: 1,
            parentNode: r,
            childNodes: [],
            appendChild: function(n) {
                this.childNodes.push(n), t.o.appendChild(n)
            },
            insertBefore: function(n, e) {
                this.childNodes.push(n), t.o.appendChild(n)
            },
            removeChild: function(n) {
                this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.o.removeChild(n)
            }
        }), e.render(e.createElement(_, {
            context: t.context
        }, n.__v), t.l)) : t.l && t.componentWillUnmount()
    }

    function w(n, t) {
        return e.createElement(S, {
            __v: n,
            o: t
        })
    }(y.prototype = new e.Component).__e = function(n) {
        var t = this,
            e = p(t.__v),
            r = t.i.get(n);
        return r[0]++,
            function(u) {
                var i = function() {
                    t.props.revealOrder ? (r.push(u), b(t, n, r)) : u()
                };
                e ? e(i) : i()
            }
    }, y.prototype.render = function(n) {
        this.u = null, this.i = new Map;
        var t = e.toChildArray(n.children);
        n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
        for (var r = t.length; r--;) this.i.set(t[r], this.u = [1, 0, this.u]);
        return n.children
    }, y.prototype.componentDidUpdate = y.prototype.componentDidMount = function() {
        var n = this;
        this.i.forEach(function(t, e) {
            b(n, e, t)
        })
    };
    var C = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        g = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        E = "undefined" != typeof document,
        R = function(n) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n)
        };

    function x(n, t, r) {
        return null == t.__k && (t.textContent = ""), e.render(n, t), "function" == typeof r && r(), n ? n.__c : null
    }

    function N(n, t, r) {
        return e.hydrate(n, t), "function" == typeof r && r(), n ? n.__c : null
    }
    e.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n) {
        Object.defineProperty(e.Component.prototype, n, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + n]
            },
            set: function(t) {
                Object.defineProperty(this, n, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    });
    var k = e.options.event;

    function O() {}

    function A() {
        return this.cancelBubble
    }

    function L() {
        return this.defaultPrevented
    }
    e.options.event = function(n) {
        return k && (n = k(n)), n.persist = O, n.isPropagationStopped = A, n.isDefaultPrevented = L, n.nativeEvent = n
    };
    var U, j = {
            configurable: !0,
            get: function() {
                return this.class
            }
        },
        M = e.options.vnode;
    e.options.vnode = function(n) {
        var t = n.type,
            r = n.props,
            u = r;
        if ("string" == typeof t) {
            var i = -1 === t.indexOf("-");
            for (var o in u = {}, r) {
                var l = r[o];
                E && "children" === o && "noscript" === t || "value" === o && "defaultValue" in r && null == l || ("defaultValue" === o && "value" in r && null == r.value ? o = "value" : "download" === o && !0 === l ? l = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !R(r.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : i && g.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === l && (l = void 0), u[o] = l)
            }
            "select" == t && u.multiple && Array.isArray(u.value) && (u.value = e.toChildArray(r.children).forEach(function(n) {
                n.props.selected = -1 != u.value.indexOf(n.props.value)
            })), "select" == t && null != u.defaultValue && (u.value = e.toChildArray(r.children).forEach(function(n) {
                n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value
            })), n.props = u, r.class != r.className && (j.enumerable = "className" in r, null != r.className && (u.class = r.className), Object.defineProperty(u, "className", j))
        }
        n.$$typeof = C, M && M(n)
    };
    var T = e.options.__r;
    e.options.__r = function(n) {
        T && T(n), U = n.__c
    };
    var D = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(n) {
                    return U.__n[n.__c].props.value
                }
            }
        }
    };

    function F(n) {
        return e.createElement.bind(null, n)
    }

    function I(n) {
        return !!n && n.$$typeof === C
    }

    function W(n) {
        return I(n) ? e.cloneElement.apply(null, arguments) : n
    }

    function P(n) {
        return !!n.__k && (e.render(null, n), !0)
    }

    function V(n) {
        return n && (n.base || 1 === n.nodeType && n) || null
    }
    var z = function(n, t) {
            return n(t)
        },
        B = function(n, t) {
            return n(t)
        },
        $ = e.Fragment,
        q = {
            useState: t.useState,
            useReducer: t.useReducer,
            useEffect: t.useEffect,
            useLayoutEffect: t.useLayoutEffect,
            useRef: t.useRef,
            useImperativeHandle: t.useImperativeHandle,
            useMemo: t.useMemo,
            useCallback: t.useCallback,
            useContext: t.useContext,
            useDebugValue: t.useDebugValue,
            version: "17.0.2",
            Children: s,
            render: x,
            hydrate: N,
            unmountComponentAtNode: P,
            createPortal: w,
            createElement: e.createElement,
            createContext: e.createContext,
            createFactory: F,
            cloneElement: W,
            createRef: e.createRef,
            Fragment: e.Fragment,
            isValidElement: I,
            findDOMNode: V,
            Component: e.Component,
            PureComponent: i,
            memo: o,
            forwardRef: c,
            flushSync: B,
            unstable_batchedUpdates: z,
            StrictMode: $,
            Suspense: v,
            SuspenseList: y,
            lazy: m,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: D
        };
    Object.keys(t).forEach(function(e) {
        n[e] = t[e]
    }), n.createElement = e.createElement, n.createContext = e.createContext, n.createRef = e.createRef, n.Fragment = e.Fragment, n.Component = e.Component, n.version = "17.0.2", n.Children = s, n.render = x, n.hydrate = N, n.unmountComponentAtNode = P, n.createPortal = w, n.createFactory = F, n.cloneElement = W, n.isValidElement = I, n.findDOMNode = V, n.PureComponent = i, n.memo = o, n.forwardRef = c, n.flushSync = B, n.unstable_batchedUpdates = z, n.StrictMode = $, n.Suspense = v, n.SuspenseList = y, n.lazy = m, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, n.default = q
});
//# sourceMappingURL=compat.umd.js.map