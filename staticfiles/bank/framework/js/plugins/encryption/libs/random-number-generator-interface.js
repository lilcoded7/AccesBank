define(["./prime-random-number-generator"], function(n) {
    "use strict";
    const t = 256;
    let o, e, r;

    function i() {
        var n;
        n = (new Date).getTime(), e[r++] ^= 255 & n, e[r++] ^= n >> 8 & 255, e[r++] ^= n >> 16 & 255, e[r++] ^= n >> 24 & 255, r >= t && (r -= t)
    }
    if (!e) {
        let n;
        if (e = [], r = 0, window.crypto && window.crypto.getRandomValues) {
            const t = new Uint8Array(32);
            for (window.crypto.getRandomValues(t), n = 0; n < 32; ++n) e[r++] = t[n]
        }
        if ("Netscape" === navigator.appName && navigator.appVersion < "5" && window.crypto) {
            const t = window.crypto.random(32);
            for (n = 0; n < t.length; ++n) e[r++] = 255 & t.charCodeAt(n)
        }
        for (; r < t;) n = Math.floor(65536 * Math.random()), e[r++] = n >>> 8, e[r++] = 255 & n;
        r = 0, i()
    }

    function a() {
        if (!o) {
            for (i(), (o = n).init(e), r = 0; r < e.length; ++r) e[r] = 0;
            r = 0
        }
        return o.next()
    }

    function c() {}
    return c.prototype.nextBytes = function(n) {
        let t;
        for (t = 0; t < n.length; ++t) n[t] = a()
    }, new c
});