define([], function() {
    "use strict";

    function t() {
        this.i = 0, this.j = 0, this.S = []
    }
    return t.prototype.init = function(t) {
        let i, s, h;
        for (i = 0; i < 256; ++i) this.S[i] = i;
        for (s = 0, i = 0; i < 256; ++i) s = s + this.S[i] + t[i % t.length] & 255, h = this.S[i], this.S[i] = this.S[s], this.S[s] = h;
        this.i = 0, this.j = 0
    }, t.prototype.next = function() {
        this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255;
        const t = this.S[this.i];
        return this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
    }, new t
});