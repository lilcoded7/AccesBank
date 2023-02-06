/*!
 * Knockout Mapping plugin v2.6.0
 * (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
! function(e) {
    "use strict";
    if ("function" == typeof require && "object" == typeof exports && "object" == typeof module) e(require("knockout"), exports);
    else if ("function" == typeof define && define.amd) define(["knockout", "exports"], e);
    else {
        if ("undefined" == typeof ko) throw new Error("Knockout is required, please ensure it is loaded before loading this mapping plug-in");
        e(ko, ko.mapping = {})
    }
}(function(e, r) {
    "use strict";

    function t() {
        for (var e, r, t, n = arguments, a = n.length, i = {}, o = []; a--;)
            for (t = n[a], e = t.length; e--;) r = t[e], i[r] || (i[r] = 1, o.push(r));
        return o
    }

    function n(e, a) {
        var i;
        for (var o in a)
            if (a.hasOwnProperty(o) && a[o])
                if (i = r.getType(e[o]), o && e[o] && "array" !== i && "string" !== i) n(e[o], a[o]);
                else {
                    var u = "array" === r.getType(e[o]) && "array" === r.getType(a[o]);
                    u ? e[o] = t(e[o], a[o]) : e[o] = a[o]
                }
    }

    function a(e, r) {
        var t = {};
        return n(t, e), n(t, r), t
    }

    function i(e, r) {
        for (var t = a({}, e), n = x.length - 1; n >= 0; n--) {
            var i = x[n];
            t[i] && (t[""] instanceof Object || (t[""] = {}), t[""][i] = t[i], delete t[i])
        }
        return r && (t.ignore = o(r.ignore, t.ignore), t.include = o(r.include, t.include), t.copy = o(r.copy, t.copy), t.observe = o(r.observe, t.observe)), t.ignore = o(t.ignore, E.ignore), t.include = o(t.include, E.include), t.copy = o(t.copy, E.copy), t.observe = o(t.observe, E.observe), t.mappedProperties = t.mappedProperties || {}, t.copiedProperties = t.copiedProperties || {}, t
    }

    function o(t, n) {
        return void 0 === t ? t = [] : "array" !== r.getType(t) && (t = [t]), void 0 === n ? n = [] : "array" !== r.getType(n) && (n = [n]), e.utils.arrayGetDistinctValues(t.concat(n))
    }

    function u(r, t) {
        var n = e.dependentObservable;
        e.dependentObservable = function(t, n, a) {
            a = a || {}, t && "object" == typeof t && (a = t);
            var i = a.deferEvaluation,
                o = a.pure,
                u = !1,
                s = function(t) {
                    var n = e.dependentObservable;
                    e.dependentObservable = k;
                    var a = e.isWriteableObservable(t);
                    e.dependentObservable = n;
                    var i = k({
                        read: function() {
                            return u || (e.utils.arrayRemoveItem(r, t), u = !0), t.apply(t, arguments)
                        },
                        write: a && function(e) {
                            return t(e)
                        },
                        deferEvaluation: !0
                    });
                    return i.__DO = t, i
                };
            a.deferEvaluation = !0;
            var p = k(t, n, a);
            return i || o || (p = s(p), r.push(p)), p
        }, e.dependentObservable.fn = k.fn, e.computed = e.dependentObservable;
        var a = t();
        return e.dependentObservable = n, e.computed = e.dependentObservable, a
    }

    function s(t, n, i, o, l, b, g) {
        var O = "array" === r.getType(e.utils.unwrapObservable(n));
        if (b = b || "", r.isMapped(t)) {
            var k = e.utils.unwrapObservable(t)[m];
            i = a(k, i)
        }
        var T = {
                data: n,
                parent: g || l
            },
            x = function() {
                return i[o] && i[o].create instanceof Function
            },
            I = function(r) {
                return u(h, function() {
                    return e.utils.unwrapObservable(l) instanceof Array ? i[o].create({
                        data: r || T.data,
                        parent: T.parent,
                        skip: j
                    }) : i[o].create({
                        data: r || T.data,
                        parent: T.parent
                    })
                })
            },
            E = function() {
                return i[o] && i[o].update instanceof Function
            },
            P = function(r, t) {
                var n = {
                    data: t || T.data,
                    parent: T.parent,
                    target: e.utils.unwrapObservable(r)
                };
                return e.isWriteableObservable(r) && (n.observable = r), i[o].update(n)
            },
            J = w.get(n);
        if (J) return J;
        if (o = o || "", O) {
            var _ = [],
                W = !1,
                D = function(e) {
                    return e
                };
            i[o] && i[o].key && (D = i[o].key, W = !0), e.isObservable(t) || (t = e.observableArray([]), t.mappedRemove = function(e) {
                var r = "function" == typeof e ? e : function(r) {
                    return r === D(e)
                };
                return t.remove(function(e) {
                    return r(D(e))
                })
            }, t.mappedRemoveAll = function(r) {
                var n = c(r, D);
                return t.remove(function(r) {
                    return -1 !== e.utils.arrayIndexOf(n, D(r))
                })
            }, t.mappedDestroy = function(e) {
                var r = "function" == typeof e ? e : function(r) {
                    return r === D(e)
                };
                return t.destroy(function(e) {
                    return r(D(e))
                })
            }, t.mappedDestroyAll = function(r) {
                var n = c(r, D);
                return t.destroy(function(r) {
                    return -1 !== e.utils.arrayIndexOf(n, D(r))
                })
            }, t.mappedIndexOf = function(r) {
                var n = c(t(), D),
                    a = D(r);
                return e.utils.arrayIndexOf(n, a)
            }, t.mappedGet = function(e) {
                return t()[t.mappedIndexOf(e)]
            }, t.mappedCreate = function(r) {
                if (-1 !== t.mappedIndexOf(r)) throw new Error("There already is an object with the key that you specified.");
                var n = x() ? I(r) : r;
                if (E()) {
                    var a = P(n, r);
                    e.isWriteableObservable(n) ? n(a) : n = a
                }
                return t.push(n), n
            });
            var S = c(e.utils.unwrapObservable(t), D).sort(),
                A = c(n, D);
            W && A.sort();
            var N, M, C, q = e.utils.compareArrays(S, A),
                F = {},
                R = e.utils.unwrapObservable(n),
                $ = {},
                G = !0;
            for (N = 0, M = R.length; M > N; N++) {
                if (C = D(R[N]), void 0 === C || C instanceof Object) {
                    G = !1;
                    break
                }
                $[C] = R[N]
            }
            var K, V, z = [],
                B = 0;
            for (N = 0, M = q.length; M > N; N++) {
                C = q[N];
                var H, L = b + "[" + y(N) + "]";
                switch (C.status) {
                    case "added":
                        K = G ? $[C.value] : f(e.utils.unwrapObservable(n), C.value, D), H = s(void 0, K, i, o, t, L, l), x() || (H = e.utils.unwrapObservable(H)), V = p(e.utils.unwrapObservable(n), K, F), H === j ? B++ : z[V - B] = H, F[V] = !0;
                        break;
                    case "retained":
                        K = G ? $[C.value] : f(e.utils.unwrapObservable(n), C.value, D), H = f(t, C.value, D), s(H, K, i, o, t, L, l), V = p(e.utils.unwrapObservable(n), K, F), z[V] = H, F[V] = !0;
                        break;
                    case "deleted":
                        H = f(t, C.value, D)
                }
                _.push({
                    event: C.status,
                    item: H
                })
            }
            t(z), i[o] && i[o].arrayChanged && e.utils.arrayForEach(_, function(e) {
                i[o].arrayChanged(e.event, e.item)
            })
        } else if (d(n)) {
            if (t = e.utils.unwrapObservable(t), !t) {
                if (x()) {
                    var Q = I();
                    return E() && (Q = P(Q)), Q
                }
                if (E()) return P();
                t = {}
            }
            if (E() && (t = P(t)), w.save(n, t), E()) return t;
            v(n, function(a) {
                var o = b.length ? b + "." + y(a) : y(a);
                if (-1 === e.utils.arrayIndexOf(i.ignore, o)) {
                    if (-1 !== e.utils.arrayIndexOf(i.copy, o)) return void(t[a] = n[a]);
                    if ("object" != typeof n[a] && "array" !== r.getType(n[a]) && i.observe.length > 0 && -1 === e.utils.arrayIndexOf(i.observe, o)) return t[a] = n[a], void(i.copiedProperties[o] = !0);
                    var u = w.get(n[a]),
                        p = s(t[a], n[a], i, a, t, o, t),
                        l = u || p;
                    if (i.observe.length > 0 && -1 === e.utils.arrayIndexOf(i.observe, o)) return t[a] = e.utils.unwrapObservable(l), void(i.copiedProperties[o] = !0);
                    e.isWriteableObservable(t[a]) ? (l = e.utils.unwrapObservable(l), t[a]() !== l && t[a](l)) : (l = void 0 === t[a] ? l : e.utils.unwrapObservable(l), t[a] = l), i.mappedProperties[o] = !0
                }
            })
        } else switch (r.getType(n)) {
            case "function":
                E() ? e.isWriteableObservable(n) ? (n(P(n)), t = n) : t = P(n) : t = n;
                break;
            default:
                if (e.isWriteableObservable(t)) {
                    var U;
                    return E() ? (U = P(t), t(U), U) : (U = e.utils.unwrapObservable(n), t(U), U)
                }
                var X = x() || E();
                if (t = x() ? I() : e.observable(e.utils.unwrapObservable(n)), E() && t(P(t)), X) return t
        }
        return t
    }

    function p(e, r, t) {
        for (var n = 0, a = e.length; a > n; n++)
            if (t[n] !== !0 && e[n] === r) return n;
        return null
    }

    function l(t, n) {
        var a;
        return n && (a = n(t)), "undefined" === r.getType(a) && (a = t), e.utils.unwrapObservable(a)
    }

    function f(r, t, n) {
        r = e.utils.unwrapObservable(r);
        for (var a = 0, i = r.length; i > a; a++) {
            var o = r[a];
            if (l(o, n) === t) return o
        }
        throw new Error("When calling ko.update*, the key '" + t + "' was not found!")
    }

    function c(r, t) {
        return e.utils.arrayMap(e.utils.unwrapObservable(r), function(e) {
            return t ? l(e, t) : e
        })
    }

    function v(e, t) {
        if ("array" === r.getType(e))
            for (var n = 0; n < e.length; n++) t(n);
        else
            for (var a in e) e.hasOwnProperty(a) && t(a)
    }

    function d(e) {
        if (null === e) return !1;
        var t = r.getType(e);
        return "object" === t || "array" === t
    }

    function b(e, t, n) {
        var a = e || "";
        return "array" === r.getType(t) ? e && (a += "[" + y(n) + "]") : (e && (a += "."), a += y(n)), a
    }

    function y(e) {
        var r = ("" + e).replace(/~/g, "~~").replace(/\[/g, "~[").replace(/]/g, "~]").replace(/\./g, "~.");
        return r
    }

    function g() {
        var r = [],
            t = [];
        this.save = function(n, a) {
            var i = e.utils.arrayIndexOf(r, n);
            i >= 0 ? t[i] = a : (r.push(n), t.push(a))
        }, this.get = function(n) {
            var a = e.utils.arrayIndexOf(r, n),
                i = a >= 0 ? t[a] : void 0;
            return i
        }
    }

    function O() {
        var e = {},
            r = function(r) {
                var t;
                try {
                    t = r
                } catch (n) {
                    t = "$$$"
                }
                var a = e[t];
                return e.hasOwnProperty(t) || (a = new g, e[t] = a), a
            };
        this.save = function(e, t) {
            r(e).save(e, t)
        }, this.get = function(e) {
            return r(e).get(e)
        }
    }
    e.mapping = r;
    var h, w, m = "__ko_mapping__",
        k = e.dependentObservable,
        T = 0,
        x = ["create", "update", "key", "arrayChanged"],
        j = {},
        I = {
            include: ["_destroy"],
            ignore: [],
            copy: [],
            observe: []
        },
        E = I;
    r.isMapped = function(r) {
        var t = e.utils.unwrapObservable(r);
        return t && t[m]
    }, r.fromJS = function(e) {
        if (0 === arguments.length) throw new Error("When calling ko.fromJS, pass the object you want to convert.");
        try {
            T || (h = [], w = new O), T++;
            var r, t;
            2 === arguments.length && (arguments[1][m] ? t = arguments[1] : r = arguments[1]), 3 === arguments.length && (r = arguments[1], t = arguments[2]), t && (r = a(r, t[m])), r = i(r);
            var n = s(t, e, r);
            if (t && (n = t), !--T)
                for (; h.length;) {
                    var o = h.pop();
                    o && (o(), o.__DO.throttleEvaluation = o.throttleEvaluation)
                }
            return n[m] = a(n[m], r), n
        } catch (u) {
            throw T = 0, u
        }
    }, r.fromJSON = function(t) {
        var n = Array.prototype.slice.call(arguments, 0);
        return n[0] = e.utils.parseJson(t), r.fromJS.apply(this, n)
    }, r.toJS = function(t, n) {
        if (E || r.resetDefaultOptions(), 0 === arguments.length) throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
        if ("array" !== r.getType(E.ignore)) throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
        if ("array" !== r.getType(E.include)) throw new Error("ko.mapping.defaultOptions().include should be an array.");
        if ("array" !== r.getType(E.copy)) throw new Error("ko.mapping.defaultOptions().copy should be an array.");
        return n = i(n, t[m]), r.visitModel(t, function(r) {
            return e.utils.unwrapObservable(r)
        }, n)
    }, r.toJSON = function(t, n, a, i) {
        var o = r.toJS(t, n);
        return e.utils.stringifyJson(o, a, i)
    }, r.defaultOptions = function() {
        return arguments.length > 0 ? void(E = arguments[0]) : E
    }, r.resetDefaultOptions = function() {
        E = {
            include: I.include.slice(0),
            ignore: I.ignore.slice(0),
            copy: I.copy.slice(0),
            observe: I.observe.slice(0)
        }
    }, r.getType = function(e) {
        if (e && "object" == typeof e) {
            if (e.constructor === Date) return "date";
            if (e.constructor === Array) return "array"
        }
        return typeof e
    }, r.visitModel = function(t, n, a) {
        a = a || {}, a.visitedObjects = a.visitedObjects || new O;
        var o, u = e.utils.unwrapObservable(t);
        if (!d(u)) return n(t, a.parentName);
        a = i(a, u[m]), n(t, a.parentName), o = "array" === r.getType(u) ? [] : {}, a.visitedObjects.save(t, o);
        var s = a.parentName;
        return v(u, function(t) {
            var i = y(t);
            if (!a.ignore || -1 === e.utils.arrayIndexOf(a.ignore, i)) {
                var p = u[t];
                if (a.parentName = b(s, u, t), -1 === e.utils.arrayIndexOf(a.copy, i) && -1 === e.utils.arrayIndexOf(a.include, i)) {
                    var l = u[m];
                    if (l) {
                        var f = l.mappedProperties;
                        if (f && !f[i]) {
                            var c = l.copiedProperties;
                            if (c && !c[i] && "array" !== r.getType(u)) return
                        }
                    }
                }
                switch (r.getType(e.utils.unwrapObservable(p))) {
                    case "object":
                    case "array":
                    case "undefined":
                        var v = a.visitedObjects.get(p);
                        o[t] = "undefined" !== r.getType(v) ? v : r.visitModel(p, n, a);
                        break;
                    default:
                        o[t] = n(p, a.parentName)
                }
            }
        }), o
    }
});
//# sourceMappingURL=knockout.mapping.min.js.map