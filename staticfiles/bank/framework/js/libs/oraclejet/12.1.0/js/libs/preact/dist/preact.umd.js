! function(n, l) {
    "object" == typeof exports && "undefined" != typeof module ? l(exports) : "function" == typeof define && define.amd ? define(["exports"], l) : l(n.preact = {})
}(this, function(n) {
    var l, u, i, t, o, f, r, e, c = {},
        s = [],
        a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function h(n, l) {
        for (var u in l) n[u] = l[u];
        return n
    }

    function v(n) {
        var l = n.parentNode;
        l && l.removeChild(n)
    }

    function y(n, u, i) {
        var t, o, f, r = {};
        for (f in u) "key" == f ? t = u[f] : "ref" == f ? o = u[f] : r[f] = u[f];
        if (arguments.length > 2 && (r.children = arguments.length > 3 ? l.call(arguments, 2) : i), "function" == typeof n && null != n.defaultProps)
            for (f in n.defaultProps) void 0 === r[f] && (r[f] = n.defaultProps[f]);
        return p(n, r, t, o, null)
    }

    function p(n, l, t, o, f) {
        var r = {
            type: n,
            props: l,
            key: t,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == f ? ++i : f
        };
        return null == f && null != u.vnode && u.vnode(r), r
    }

    function d(n) {
        return n.children
    }

    function _(n, l) {
        this.props = n, this.context = l
    }

    function b(n, l) {
        if (null == l) return n.__ ? b(n.__, n.__.__k.indexOf(n) + 1) : null;
        for (var u; l < n.__k.length; l++)
            if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
        return "function" == typeof n.type ? b(n) : null
    }

    function k(n) {
        var l, u;
        if (null != (n = n.__) && null != n.__c) {
            for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
                if (null != (u = n.__k[l]) && null != u.__e) {
                    n.__e = n.__c.base = u.__e;
                    break
                }
            return k(n)
        }
    }

    function m(n) {
        (!n.__d && (n.__d = !0) && o.push(n) && !g.__r++ || r !== u.debounceRendering) && ((r = u.debounceRendering) || f)(g)
    }

    function g() {
        for (var n; g.__r = o.length;) n = o.sort(function(n, l) {
            return n.__v.__b - l.__v.__b
        }), o = [], n.some(function(n) {
            var l, u, i, t, o, f;
            n.__d && (o = (t = (l = n).__v).__e, (f = l.__P) && (u = [], (i = h({}, t)).__v = t.__v + 1, I(f, t, i, l.__n, void 0 !== f.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? b(t) : o, t.__h), T(u, t), t.__e != o && k(t)))
        })
    }

    function w(n, l, u, i, t, o, f, r, e, a) {
        var h, v, y, _, k, m, g, w = i && i.__k || s,
            P = w.length;
        for (u.__k = [], h = 0; h < l.length; h++)
            if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? p(null, _, null, null, _) : Array.isArray(_) ? p(d, {
                    children: _
                }, null, null, null) : _.__b > 0 ? p(_.type, _.props, _.key, null, _.__v) : _)) {
                if (_.__ = u, _.__b = u.__b + 1, null === (y = w[h]) || y && _.key == y.key && _.type === y.type) w[h] = void 0;
                else
                    for (v = 0; v < P; v++) {
                        if ((y = w[v]) && _.key == y.key && _.type === y.type) {
                            w[v] = void 0;
                            break
                        }
                        y = null
                    }
                I(n, _, y = y || c, t, o, f, r, e, a), k = _.__e, (v = _.ref) && y.ref != v && (g || (g = []), y.ref && g.push(y.ref, null, _), g.push(v, _.__c || k, _)), null != k ? (null == m && (m = k), "function" == typeof _.type && _.__k === y.__k ? _.__d = e = x(_, e, n) : e = A(n, _, y, w, k, e), "function" == typeof u.type && (u.__d = e)) : e && y.__e == e && e.parentNode != n && (e = b(y))
            }
        for (u.__e = m, h = P; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = b(i, h + 1)), M(w[h], w[h]));
        if (g)
            for (h = 0; h < g.length; h++) L(g[h], g[++h], g[++h])
    }

    function x(n, l, u) {
        for (var i, t = n.__k, o = 0; t && o < t.length; o++)(i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? x(i, l, u) : A(u, i, i, t, i.__e, l));
        return l
    }

    function A(n, l, u, i, t, o) {
        var f, r, e;
        if (void 0 !== l.__d) f = l.__d, l.__d = void 0;
        else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), f = null;
            else {
                for (r = o, e = 0;
                    (r = r.nextSibling) && e < i.length; e += 2)
                    if (r == t) break n;
                n.insertBefore(t, o), f = o
            }
        return void 0 !== f ? f : t.nextSibling
    }

    function P(n, l, u, i, t) {
        var o;
        for (o in u) "children" === o || "key" === o || o in l || $(n, o, null, u[o], i);
        for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || $(n, o, l[o], u[o], i)
    }

    function C(n, l, u) {
        "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px"
    }

    function $(n, l, u, i, t) {
        var o;
        n: if ("style" === l)
            if ("string" == typeof u) n.style.cssText = u;
            else {
                if ("string" == typeof i && (n.style.cssText = i = ""), i)
                    for (l in i) u && l in u || C(n.style, l, "");
                if (u)
                    for (l in u) i && u[l] === i[l] || C(n.style, l, u[l])
            }
        else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? H : j, o) : n.removeEventListener(l, o ? H : j, o);
        else if ("dangerouslySetInnerHTML" !== l) {
            if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
                n[l] = null == u ? "" : u;
                break n
            } catch (n) {}
            "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l))
        }
    }

    function j(n) {
        this.l[n.type + !1](u.event ? u.event(n) : n)
    }

    function H(n) {
        this.l[n.type + !0](u.event ? u.event(n) : n)
    }

    function I(n, l, i, t, o, f, r, e, c) {
        var s, a, v, y, p, b, k, m, g, x, A, P = l.type;
        if (void 0 !== l.constructor) return null;
        null != i.__h && (c = i.__h, e = l.__e = i.__e, l.__h = null, f = [e]), (s = u.__b) && s(l);
        try {
            n: if ("function" == typeof P) {
                if (m = l.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? k = (a = l.__c = i.__c).__ = a.__E : ("prototype" in P && P.prototype.render ? l.__c = a = new P(m, x) : (l.__c = a = new _(m, x), a.constructor = P, a.render = N), g && g.sub(a), a.props = m, a.state || (a.state = {}), a.context = x, a.__n = t, v = a.__d = !0, a.__h = []), null == a.__s && (a.__s = a.state), null != P.getDerivedStateFromProps && (a.__s == a.state && (a.__s = h({}, a.__s)), h(a.__s, P.getDerivedStateFromProps(m, a.__s))), y = a.props, p = a.state, v) null == P.getDerivedStateFromProps && null != a.componentWillMount && a.componentWillMount(), null != a.componentDidMount && a.__h.push(a.componentDidMount);
                else {
                    if (null == P.getDerivedStateFromProps && m !== y && null != a.componentWillReceiveProps && a.componentWillReceiveProps(m, x), !a.__e && null != a.shouldComponentUpdate && !1 === a.shouldComponentUpdate(m, a.__s, x) || l.__v === i.__v) {
                        a.props = m, a.state = a.__s, l.__v !== i.__v && (a.__d = !1), a.__v = l, l.__e = i.__e, l.__k = i.__k, l.__k.forEach(function(n) {
                            n && (n.__ = l)
                        }), a.__h.length && r.push(a);
                        break n
                    }
                    null != a.componentWillUpdate && a.componentWillUpdate(m, a.__s, x), null != a.componentDidUpdate && a.__h.push(function() {
                        a.componentDidUpdate(y, p, b)
                    })
                }
                a.context = x, a.props = m, a.state = a.__s, (s = u.__r) && s(l), a.__d = !1, a.__v = l, a.__P = n, s = a.render(a.props, a.state, a.context), a.state = a.__s, null != a.getChildContext && (t = h(h({}, t), a.getChildContext())), v || null == a.getSnapshotBeforeUpdate || (b = a.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d && null == s.key ? s.props.children : s, w(n, Array.isArray(A) ? A : [A], l, i, t, o, f, r, e, c), a.base = l.__e, l.__h = null, a.__h.length && r.push(a), k && (a.__E = a.__ = null), a.__e = !1
            } else null == f && l.__v === i.__v ? (l.__k = i.__k, l.__e = i.__e) : l.__e = z(i.__e, l, i, t, o, f, r, c);
            (s = u.diffed) && s(l)
        }
        catch (n) {
            l.__v = null, (c || null != f) && (l.__e = e, l.__h = !!c, f[f.indexOf(e)] = null), u.__e(n, l, i)
        }
    }

    function T(n, l) {
        u.__c && u.__c(l, n), n.some(function(l) {
            try {
                n = l.__h, l.__h = [], n.some(function(n) {
                    n.call(l)
                })
            } catch (n) {
                u.__e(n, l.__v)
            }
        })
    }

    function z(n, u, i, t, o, f, r, e) {
        var s, a, h, y = i.props,
            p = u.props,
            d = u.type,
            _ = 0;
        if ("svg" === d && (o = !0), null != f)
            for (; _ < f.length; _++)
                if ((s = f[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
                    n = s, f[_] = null;
                    break
                }
        if (null == n) {
            if (null === d) return document.createTextNode(p);
            n = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), f = null, e = !1
        }
        if (null === d) y === p || e && n.data === p || (n.data = p);
        else {
            if (f = f && l.call(n.childNodes), a = (y = i.props || c).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !e) {
                if (null != f)
                    for (y = {}, _ = 0; _ < n.attributes.length; _++) y[n.attributes[_].name] = n.attributes[_].value;
                (h || a) && (h && (a && h.__html == a.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""))
            }
            if (P(n, p, y, o, e), h) u.__k = [];
            else if (_ = u.props.children, w(n, Array.isArray(_) ? _ : [_], u, i, t, o && "foreignObject" !== d, f, r, f ? f[0] : i.__k && b(i, 0), e), null != f)
                for (_ = f.length; _--;) null != f[_] && v(f[_]);
            e || ("value" in p && void 0 !== (_ = p.value) && (_ !== y.value || _ !== n.value || "progress" === d && !_) && $(n, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== n.checked && $(n, "checked", _, y.checked, !1))
        }
        return n
    }

    function L(n, l, i) {
        try {
            "function" == typeof n ? n(l) : n.current = l
        } catch (n) {
            u.__e(n, i)
        }
    }

    function M(n, l, i) {
        var t, o;
        if (u.unmount && u.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || L(t, null, l)), null != (t = n.__c)) {
            if (t.componentWillUnmount) try {
                t.componentWillUnmount()
            } catch (n) {
                u.__e(n, l)
            }
            t.base = t.__P = null
        }
        if (t = n.__k)
            for (o = 0; o < t.length; o++) t[o] && M(t[o], l, "function" != typeof n.type);
        i || null == n.__e || v(n.__e), n.__e = n.__d = void 0
    }

    function N(n, l, u) {
        return this.constructor(n, u)
    }

    function O(n, i, t) {
        var o, f, r;
        u.__ && u.__(n, i), f = (o = "function" == typeof t) ? null : t && t.__k || i.__k, r = [], I(i, n = (!o && t || i).__k = y(d, null, [n]), f || c, c, void 0 !== i.ownerSVGElement, !o && t ? [t] : f ? null : i.firstChild ? l.call(i.childNodes) : null, r, !o && t ? t : f ? f.__e : i.firstChild, o), T(r, n)
    }
    l = s.slice, u = {
        __e: function(n, l) {
            for (var u, i, t; l = l.__;)
                if ((u = l.__c) && !u.__) try {
                    if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u
                } catch (l) {
                    n = l
                }
            throw n
        }
    }, i = 0, t = function(n) {
        return null != n && void 0 === n.constructor
    }, _.prototype.setState = function(n, l) {
        var u;
        u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n && (n = n(h({}, u), this.props)), n && h(u, n), null != n && this.__v && (l && this.__h.push(l), m(this))
    }, _.prototype.forceUpdate = function(n) {
        this.__v && (this.__e = !0, n && this.__h.push(n), m(this))
    }, _.prototype.render = d, o = [], f = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, e = 0, n.render = O, n.hydrate = function n(l, u) {
        O(l, u, n)
    }, n.createElement = y, n.h = y, n.Fragment = d, n.createRef = function() {
        return {
            current: null
        }
    }, n.isValidElement = t, n.Component = _, n.cloneElement = function(n, u, i) {
        var t, o, f, r = h({}, n.props);
        for (f in u) "key" == f ? t = u[f] : "ref" == f ? o = u[f] : r[f] = u[f];
        return arguments.length > 2 && (r.children = arguments.length > 3 ? l.call(arguments, 2) : i), p(n.type, r, t || n.key, o || n.ref, null)
    }, n.createContext = function(n, l) {
        var u = {
            __c: l = "__cC" + e++,
            __: n,
            Consumer: function(n, l) {
                return n.children(l)
            },
            Provider: function(n) {
                var u, i;
                return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function() {
                    return i
                }, this.shouldComponentUpdate = function(n) {
                    this.props.value !== n.value && u.some(m)
                }, this.sub = function(n) {
                    u.push(n);
                    var l = n.componentWillUnmount;
                    n.componentWillUnmount = function() {
                        u.splice(u.indexOf(n), 1), l && l.call(n)
                    }
                }), n.children
            }
        };
        return u.Provider.__ = u.Consumer.contextType = u
    }, n.toChildArray = function n(l, u) {
        return u = u || [], null == l || "boolean" == typeof l || (Array.isArray(l) ? l.some(function(l) {
            n(l, u)
        }) : u.push(l)), u
    }, n.options = u
});
//# sourceMappingURL=preact.umd.js.map