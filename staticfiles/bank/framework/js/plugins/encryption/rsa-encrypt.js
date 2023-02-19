define(["./libs/js-big-integer", "./libs/random-number-generator-interface"], function(t, n) {
    "use strict";
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        e = "=";

    function i() {
        this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
    }
    return i.prototype.doPublic = function(t) {
        return t.modPowInt(this.e, this.n)
    }, i.prototype.setPublic = function(n, r) {
        if (!(n && r && n.length > 0 && r.length > 0)) return new Error("Invalid RSA public key");
        this.n = new t(n, 16), this.e = parseInt(r, 16)
    }, i.prototype.encrypt = function(r) {
        const e = function(r, e) {
            if (e < r.length + 11) return null;
            const i = [];
            let l = r.length - 1;
            for (; l >= 0 && e > 0;) {
                const t = r.charCodeAt(l--);
                t < 128 ? i[--e] = t : t > 127 && t < 2048 ? (i[--e] = 63 & t | 128, i[--e] = t >> 6 | 192) : (i[--e] = 63 & t | 128, i[--e] = t >> 6 & 63 | 128, i[--e] = t >> 12 | 224)
            }
            i[--e] = 0;
            const s = n,
                o = [];
            for (; e > 2;) {
                for (o[0] = 0; 0 === o[0];) s.nextBytes(o);
                i[--e] = o[0]
            }
            return i[--e] = 2, i[--e] = 0, new t(i)
        }(r, this.n.bitLength() + 7 >> 3);
        if (!e) return null;
        const i = this.doPublic(e);
        if (!i) return null;
        const l = i.toString(16);
        return 0 == (1 & l.length) ? l : "0" + l
    }, i.prototype.encryptb64 = function(t) {
        const n = this.encrypt(t);
        return n ? function(t) {
            let n, i, l = "";
            for (n = 0; n + 3 <= t.length; n += 3) i = parseInt(t.substring(n, n + 3), 16), l += r.charAt(i >> 6) + r.charAt(63 & i);
            for (n + 1 === t.length ? (i = parseInt(t.substring(n, n + 1), 16), l += r.charAt(i << 2)) : n + 2 === t.length && (i = parseInt(t.substring(n, n + 2), 16), l += r.charAt(i >> 2) + r.charAt((3 & i) << 4));
                (3 & l.length) > 0;) l += e;
            return l
        }(n) : null
    }, i
});