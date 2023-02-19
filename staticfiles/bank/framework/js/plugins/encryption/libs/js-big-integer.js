define([], function() {
    "use strict";
    var t;

    function i(t, i, o) {
        null != t && ("number" == typeof t ? this.fromNumber(t, i, o) : null == i && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, i))
    }

    function o() {
        return new i(null)
    }
    "Microsoft Internet Explorer" == navigator.appName ? (i.prototype.am = function(t, i, o, s, r, h) {
        for (var e = 32767 & i, n = i >> 15; --h >= 0;) {
            var f = 32767 & this[t],
                p = this[t++] >> 15,
                u = n * f + p * e;
            r = ((f = e * f + ((32767 & u) << 15) + o[s] + (1073741823 & r)) >>> 30) + (u >>> 15) + n * p + (r >>> 30), o[s++] = 1073741823 & f
        }
        return r
    }, t = 30) : "Netscape" != navigator.appName ? (i.prototype.am = function(t, i, o, s, r, h) {
        for (; --h >= 0;) {
            var e = i * this[t++] + o[s] + r;
            r = Math.floor(e / 67108864), o[s++] = 67108863 & e
        }
        return r
    }, t = 26) : (i.prototype.am = function(t, i, o, s, r, h) {
        for (var e = 16383 & i, n = i >> 14; --h >= 0;) {
            var f = 16383 & this[t],
                p = this[t++] >> 14,
                u = n * f + p * e;
            r = ((f = e * f + ((16383 & u) << 14) + o[s] + r) >> 28) + (u >> 14) + n * p, o[s++] = 268435455 & f
        }
        return r
    }, t = 28), i.prototype.DB = t, i.prototype.DM = (1 << t) - 1, i.prototype.DV = 1 << t;
    i.prototype.FV = Math.pow(2, 52), i.prototype.F1 = 52 - t, i.prototype.F2 = 2 * t - 52;
    var s, r, h = "0123456789abcdefghijklmnopqrstuvwxyz",
        e = new Array;
    for (s = "0".charCodeAt(0), r = 0; r <= 9; ++r) e[s++] = r;
    for (s = "a".charCodeAt(0), r = 10; r < 36; ++r) e[s++] = r;
    for (s = "A".charCodeAt(0), r = 10; r < 36; ++r) e[s++] = r;

    function n(t) {
        return h.charAt(t)
    }

    function f(t, i) {
        var o = e[t.charCodeAt(i)];
        return null == o ? -1 : o
    }

    function p(t) {
        var i = o();
        return i.fromInt(t), i
    }

    function u(t) {
        var i, o = 1;
        return 0 != (i = t >>> 16) && (t = i, o += 16), 0 != (i = t >> 8) && (t = i, o += 8), 0 != (i = t >> 4) && (t = i, o += 4), 0 != (i = t >> 2) && (t = i, o += 2), 0 != (i = t >> 1) && (t = i, o += 1), o
    }

    function a(t) {
        this.m = t
    }

    function c(t) {
        this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
    }
    return a.prototype.convert = function(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
    }, a.prototype.revert = function(t) {
        return t
    }, a.prototype.reduce = function(t) {
        t.divRemTo(this.m, null, t)
    }, a.prototype.mulTo = function(t, i, o) {
        t.multiplyTo(i, o), this.reduce(o)
    }, a.prototype.sqrTo = function(t, i) {
        t.squareTo(i), this.reduce(i)
    }, c.prototype.convert = function(t) {
        var s = o();
        return t.abs().dlShiftTo(this.m.t, s), s.divRemTo(this.m, null, s), t.s < 0 && s.compareTo(i.ZERO) > 0 && this.m.subTo(s, s), s
    }, c.prototype.revert = function(t) {
        var i = o();
        return t.copyTo(i), this.reduce(i), i
    }, c.prototype.reduce = function(t) {
        for (; t.t <= this.mt2;) t[t.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
            var o = 32767 & t[i],
                s = o * this.mpl + ((o * this.mph + (t[i] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (t[o = i + this.m.t] += this.m.am(0, s, t, i, 0, this.m.t); t[o] >= t.DV;) t[o] -= t.DV, t[++o]++
        }
        t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
    }, c.prototype.mulTo = function(t, i, o) {
        t.multiplyTo(i, o), this.reduce(o)
    }, c.prototype.sqrTo = function(t, i) {
        t.squareTo(i), this.reduce(i)
    }, i.prototype.copyTo = function(t) {
        for (var i = this.t - 1; i >= 0; --i) t[i] = this[i];
        t.t = this.t, t.s = this.s
    }, i.prototype.fromInt = function(t) {
        this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
    }, i.prototype.fromString = function(t, o) {
        var s;
        if (16 == o) s = 4;
        else if (8 == o) s = 3;
        else if (256 == o) s = 8;
        else if (2 == o) s = 1;
        else if (32 == o) s = 5;
        else {
            if (4 != o) return void this.fromRadix(t, o);
            s = 2
        }
        this.t = 0, this.s = 0;
        for (var r = t.length, h = !1, e = 0; --r >= 0;) {
            var n = 8 == s ? 255 & t[r] : f(t, r);
            n < 0 ? "-" == t.charAt(r) && (h = !0) : (h = !1, 0 == e ? this[this.t++] = n : e + s > this.DB ? (this[this.t - 1] |= (n & (1 << this.DB - e) - 1) << e, this[this.t++] = n >> this.DB - e) : this[this.t - 1] |= n << e, (e += s) >= this.DB && (e -= this.DB))
        }
        8 == s && 0 != (128 & t[0]) && (this.s = -1, e > 0 && (this[this.t - 1] |= (1 << this.DB - e) - 1 << e)), this.clamp(), h && i.ZERO.subTo(this, this)
    }, i.prototype.clamp = function() {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
    }, i.prototype.dlShiftTo = function(t, i) {
        var o;
        for (o = this.t - 1; o >= 0; --o) i[o + t] = this[o];
        for (o = t - 1; o >= 0; --o) i[o] = 0;
        i.t = this.t + t, i.s = this.s
    }, i.prototype.drShiftTo = function(t, i) {
        for (var o = t; o < this.t; ++o) i[o - t] = this[o];
        i.t = Math.max(this.t - t, 0), i.s = this.s
    }, i.prototype.lShiftTo = function(t, i) {
        var o, s = t % this.DB,
            r = this.DB - s,
            h = (1 << r) - 1,
            e = Math.floor(t / this.DB),
            n = this.s << s & this.DM;
        for (o = this.t - 1; o >= 0; --o) i[o + e + 1] = this[o] >> r | n, n = (this[o] & h) << s;
        for (o = e - 1; o >= 0; --o) i[o] = 0;
        i[e] = n, i.t = this.t + e + 1, i.s = this.s, i.clamp()
    }, i.prototype.rShiftTo = function(t, i) {
        i.s = this.s;
        var o = Math.floor(t / this.DB);
        if (o >= this.t) i.t = 0;
        else {
            var s = t % this.DB,
                r = this.DB - s,
                h = (1 << s) - 1;
            i[0] = this[o] >> s;
            for (var e = o + 1; e < this.t; ++e) i[e - o - 1] |= (this[e] & h) << r, i[e - o] = this[e] >> s;
            s > 0 && (i[this.t - o - 1] |= (this.s & h) << r), i.t = this.t - o, i.clamp()
        }
    }, i.prototype.subTo = function(t, i) {
        for (var o = 0, s = 0, r = Math.min(t.t, this.t); o < r;) s += this[o] - t[o], i[o++] = s & this.DM, s >>= this.DB;
        if (t.t < this.t) {
            for (s -= t.s; o < this.t;) s += this[o], i[o++] = s & this.DM, s >>= this.DB;
            s += this.s
        } else {
            for (s += this.s; o < t.t;) s -= t[o], i[o++] = s & this.DM, s >>= this.DB;
            s -= t.s
        }
        i.s = s < 0 ? -1 : 0, s < -1 ? i[o++] = this.DV + s : s > 0 && (i[o++] = s), i.t = o, i.clamp()
    }, i.prototype.multiplyTo = function(t, o) {
        var s = this.abs(),
            r = t.abs(),
            h = s.t;
        for (o.t = h + r.t; --h >= 0;) o[h] = 0;
        for (h = 0; h < r.t; ++h) o[h + s.t] = s.am(0, r[h], o, h, 0, s.t);
        o.s = 0, o.clamp(), this.s != t.s && i.ZERO.subTo(o, o)
    }, i.prototype.squareTo = function(t) {
        for (var i = this.abs(), o = t.t = 2 * i.t; --o >= 0;) t[o] = 0;
        for (o = 0; o < i.t - 1; ++o) {
            var s = i.am(o, i[o], t, 2 * o, 0, 1);
            (t[o + i.t] += i.am(o + 1, 2 * i[o], t, 2 * o + 1, s, i.t - o - 1)) >= i.DV && (t[o + i.t] -= i.DV, t[o + i.t + 1] = 1)
        }
        t.t > 0 && (t[t.t - 1] += i.am(o, i[o], t, 2 * o, 0, 1)), t.s = 0, t.clamp()
    }, i.prototype.divRemTo = function(t, s, r) {
        var h = t.abs();
        if (!(h.t <= 0)) {
            var e = this.abs();
            if (e.t < h.t) return null != s && s.fromInt(0), void(null != r && this.copyTo(r));
            null == r && (r = o());
            var n = o(),
                f = this.s,
                p = t.s,
                a = this.DB - u(h[h.t - 1]);
            a > 0 ? (h.lShiftTo(a, n), e.lShiftTo(a, r)) : (h.copyTo(n), e.copyTo(r));
            var c = n.t,
                m = n[c - 1];
            if (0 != m) {
                var l = m * (1 << this.F1) + (c > 1 ? n[c - 2] >> this.F2 : 0),
                    v = this.FV / l,
                    y = (1 << this.F1) / l,
                    T = 1 << this.F2,
                    D = r.t,
                    d = D - c,
                    b = null == s ? o() : s;
                for (n.dlShiftTo(d, b), r.compareTo(b) >= 0 && (r[r.t++] = 1, r.subTo(b, r)), i.ONE.dlShiftTo(c, b), b.subTo(n, n); n.t < c;) n[n.t++] = 0;
                for (; --d >= 0;) {
                    var B = r[--D] == m ? this.DM : Math.floor(r[D] * v + (r[D - 1] + T) * y);
                    if ((r[D] += n.am(0, B, r, d, 0, c)) < B)
                        for (n.dlShiftTo(d, b), r.subTo(b, r); r[D] < --B;) r.subTo(b, r)
                }
                null != s && (r.drShiftTo(c, s), f != p && i.ZERO.subTo(s, s)), r.t = c, r.clamp(), a > 0 && r.rShiftTo(a, r), f < 0 && i.ZERO.subTo(r, r)
            }
        }
    }, i.prototype.invDigit = function() {
        if (this.t < 1) return 0;
        var t = this[0];
        if (0 == (1 & t)) return 0;
        var i = 3 & t;
        return (i = (i = (i = (i = i * (2 - (15 & t) * i) & 15) * (2 - (255 & t) * i) & 255) * (2 - ((65535 & t) * i & 65535)) & 65535) * (2 - t * i % this.DV) % this.DV) > 0 ? this.DV - i : -i
    }, i.prototype.isEven = function() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }, i.prototype.exp = function(t, s) {
        if (t > 4294967295 || t < 1) return i.ONE;
        var r = o(),
            h = o(),
            e = s.convert(this),
            n = u(t) - 1;
        for (e.copyTo(r); --n >= 0;)
            if (s.sqrTo(r, h), (t & 1 << n) > 0) s.mulTo(h, e, r);
            else {
                var f = r;
                r = h, h = f
            }
        return s.revert(r)
    }, i.prototype.toString = function(t) {
        if (this.s < 0) return "-" + this.negate().toString(t);
        var i;
        if (16 == t) i = 4;
        else if (8 == t) i = 3;
        else if (2 == t) i = 1;
        else if (32 == t) i = 5;
        else {
            if (4 != t) return this.toRadix(t);
            i = 2
        }
        var o, s = (1 << i) - 1,
            r = !1,
            h = "",
            e = this.t,
            f = this.DB - e * this.DB % i;
        if (e-- > 0)
            for (f < this.DB && (o = this[e] >> f) > 0 && (r = !0, h = n(o)); e >= 0;) f < i ? (o = (this[e] & (1 << f) - 1) << i - f, o |= this[--e] >> (f += this.DB - i)) : (o = this[e] >> (f -= i) & s, f <= 0 && (f += this.DB, --e)), o > 0 && (r = !0), r && (h += n(o));
        return r ? h : "0"
    }, i.prototype.negate = function() {
        var t = o();
        return i.ZERO.subTo(this, t), t
    }, i.prototype.abs = function() {
        return this.s < 0 ? this.negate() : this
    }, i.prototype.compareTo = function(t) {
        var i = this.s - t.s;
        if (0 != i) return i;
        var o = this.t;
        if (0 != (i = o - t.t)) return this.s < 0 ? -i : i;
        for (; --o >= 0;)
            if (0 != (i = this[o] - t[o])) return i;
        return 0
    }, i.prototype.bitLength = function() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + u(this[this.t - 1] ^ this.s & this.DM)
    }, i.prototype.mod = function(t) {
        var s = o();
        return this.abs().divRemTo(t, null, s), this.s < 0 && s.compareTo(i.ZERO) > 0 && t.subTo(s, s), s
    }, i.prototype.modPowInt = function(t, i) {
        var o;
        return o = t < 256 || i.isEven() ? new a(i) : new c(i), this.exp(t, o)
    }, i.ZERO = p(0), i.ONE = p(1), i
});