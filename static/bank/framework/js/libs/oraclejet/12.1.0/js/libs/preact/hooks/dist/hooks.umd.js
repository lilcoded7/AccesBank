! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("preact")) : "function" == typeof define && define.amd ? define(["exports", "preact"], t) : t(n.preactHooks = {}, n.preact)
}(this, function(n, t) {
    var u, r, o, i = 0,
        c = [],
        f = t.options.__b,
        e = t.options.__r,
        a = t.options.diffed,
        v = t.options.__c,
        p = t.options.unmount;

    function l(n, u) {
        t.options.__h && t.options.__h(r, n, i || u), i = 0;
        var o = r.__H || (r.__H = {
            __: [],
            __h: []
        });
        return n >= o.__.length && o.__.push({}), o.__[n]
    }

    function m(n) {
        return i = 1, y(F, n)
    }

    function y(n, t, o) {
        var i = l(u++, 2);
        return i.t = n, i.__c || (i.__ = [o ? o(t) : F(void 0, t), function(n) {
            var t = i.t(i.__[0], n);
            i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}))
        }], i.__c = r), i.__
    }

    function d(n, o) {
        var i = l(u++, 4);
        !t.options.__s && A(i.__H, o) && (i.__ = n, i.__H = o, r.__h.push(i))
    }

    function s(n, t) {
        var r = l(u++, 7);
        return A(r.__H, t) && (r.__ = n(), r.__H = t, r.__h = n), r.__
    }

    function h() {
        var n;
        for (c.sort(function(n, t) {
                return n.__v.__b - t.__v.__b
            }); n = c.pop();)
            if (n.__P) try {
                n.__H.__h.forEach(q), n.__H.__h.forEach(x), n.__H.__h = []
            } catch (u) {
                n.__H.__h = [], t.options.__e(u, n.__v)
            }
    }
    t.options.__b = function(n) {
        r = null, f && f(n)
    }, t.options.__r = function(n) {
        e && e(n), u = 0;
        var t = (r = n.__c).__H;
        t && (t.__h.forEach(q), t.__h.forEach(x), t.__h = [])
    }, t.options.diffed = function(n) {
        a && a(n);
        var u = n.__c;
        u && u.__H && u.__H.__h.length && (1 !== c.push(u) && o === t.options.requestAnimationFrame || ((o = t.options.requestAnimationFrame) || function(n) {
            var t, u = function() {
                    clearTimeout(r), _ && cancelAnimationFrame(t), setTimeout(n)
                },
                r = setTimeout(u, 100);
            _ && (t = requestAnimationFrame(u))
        })(h)), r = null
    }, t.options.__c = function(n, u) {
        u.some(function(n) {
            try {
                n.__h.forEach(q), n.__h = n.__h.filter(function(n) {
                    return !n.__ || x(n)
                })
            } catch (r) {
                u.some(function(n) {
                    n.__h && (n.__h = [])
                }), u = [], t.options.__e(r, n.__v)
            }
        }), v && v(n, u)
    }, t.options.unmount = function(n) {
        p && p(n);
        var u, r = n.__c;
        r && r.__H && (r.__H.__.forEach(function(n) {
            try {
                q(n)
            } catch (n) {
                u = n
            }
        }), u && t.options.__e(u, r.__v))
    };
    var _ = "function" == typeof requestAnimationFrame;

    function q(n) {
        var t = r,
            u = n.__c;
        "function" == typeof u && (n.__c = void 0, u()), r = t
    }

    function x(n) {
        var t = r;
        n.__c = n.__(), r = t
    }

    function A(n, t) {
        return !n || n.length !== t.length || t.some(function(t, u) {
            return t !== n[u]
        })
    }

    function F(n, t) {
        return "function" == typeof t ? t(n) : t
    }
    n.useState = m, n.useReducer = y, n.useEffect = function(n, o) {
        var i = l(u++, 3);
        !t.options.__s && A(i.__H, o) && (i.__ = n, i.__H = o, r.__H.__h.push(i))
    }, n.useLayoutEffect = d, n.useRef = function(n) {
        return i = 5, s(function() {
            return {
                current: n
            }
        }, [])
    }, n.useImperativeHandle = function(n, t, u) {
        i = 6, d(function() {
            "function" == typeof n ? n(t()) : n && (n.current = t())
        }, null == u ? u : u.concat(n))
    }, n.useMemo = s, n.useCallback = function(n, t) {
        return i = 8, s(function() {
            return n
        }, t)
    }, n.useContext = function(n) {
        var t = r.context[n.__c],
            o = l(u++, 9);
        return o.c = n, t ? (null == o.__ && (o.__ = !0, t.sub(r)), t.props.value) : n.__
    }, n.useDebugValue = function(n, u) {
        t.options.useDebugValue && t.options.useDebugValue(u ? u(n) : n)
    }, n.useErrorBoundary = function(n) {
        var t = l(u++, 10),
            o = m();
        return t.__ = n, r.componentDidCatch || (r.componentDidCatch = function(n) {
            t.__ && t.__(n), o[1](n)
        }), [o[0], function() {
            o[1](void 0)
        }]
    }
});
//# sourceMappingURL=hooks.umd.js.map