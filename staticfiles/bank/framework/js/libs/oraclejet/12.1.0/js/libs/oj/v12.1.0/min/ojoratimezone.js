/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports"], function(t) {
    "use strict";
    /**
     * @license
     * This is a forked version of moment-timezone.js
     * The MIT License (MIT)
     * Copyright (c) 2014 Tim Wood
     * https://github.com/moment/moment-timezone/blob/develop/LICENSE
     * @ignore
     */
    const e = function() {
        var t, e = {},
            r = /^Etc\/GMT/i,
            n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX";

        function o(t, e) {
            for (var r = "", o = Math.abs(t), i = Math.floor(o), a = function(t, e) {
                    for (var r = ".", o = ""; e > 0;) {
                        e -= 1, t *= 60;
                        var i = Math.floor(t + 1e-6);
                        r += n[i], t -= i, i && (o += r, r = "")
                    }
                    return o
                }(o - i, Math.min(e, 10)); i > 0;) r = n[i % 60] + r, i = Math.floor(i / 60);
            return t < 0 && (r = "-" + r), r && a ? r + a : (a || "-" !== r) && (r || a) || "0"
        }

        function i(t) {
            return t > 96 ? t - 87 : t > 64 ? t - 29 : t - 48
        }

        function a(t) {
            var e = 0,
                r = t.split("."),
                n = r[0],
                o = r[1] || "",
                a = 1,
                s = 0,
                f = 1;
            for (45 === t.charCodeAt(0) && (e = 1, f = -1); e < n.length; e++) s = 60 * s + i(n.charCodeAt(e));
            for (e = 0; e < o.length; e++) a /= 60, s += i(o.charCodeAt(e)) * a;
            return s * f
        }

        function s(t) {
            for (var e = 0; e < t.length; e++) t[e] = a(t[e])
        }

        function f(t, e) {
            for (var r = [], n = 0; n < e.length; n++) r[n] = t[e[n]];
            return r
        }

        function u(t, e) {
            var r = e.split("|"),
                n = r[1].split(" "),
                o = r[2].split(""),
                i = r[3].split(" ");
            return s(n), s(o), s(i),
                function(t, e) {
                    for (var r = 0; r < e; r++) t[r] = Math.round((t[r - 1] || 0) + 6e4 * t[r]);
                    t[e - 1] = 1 / 0
                }(i, o.length), {
                    name: t,
                    abbrs: f(r[0].split(" "), o),
                    offsets: f(n, o),
                    untils: i
                }
        }

        function l() {
            var t = new Error("The input time does not exist because it falls during the transition to daylight saving time.");
            throw t.errorInfo = {
                errorCode: "nonExistingTime"
            }, t
        }

        function c(t, e) {
            var n = e.zones[t];
            if (r.test(t)) {
                var i = t.replace(r, "").split(":"),
                    a = 60 * parseInt(i[0], 10),
                    s = 0;
                if (isNaN(a)) return;
                if (2 === i.length && (s = parseInt(i[1], 10), isNaN(s))) return;
                if ((a += a >= 0 ? s : -s) < -840 || a > 720) return;
                a = o(a, 1), n = t.replace("/etc//i", "").toUpperCase() + "|" + a + "|0|"
            }
            void 0 !== n && this._set(u(t, n))
        }

        function h(t) {
            return (t || "").toLowerCase().replace(/\//g, "_")
        }

        function v(t, r) {
            var n = h(t);
            return void 0 === e[n] && function(t, r) {
                var n = new c(t, r),
                    o = h(n.name);
                e[o] = n
            }(t, r), e[h(t)] || null
        }

        function p() {
            return {
                getZone: function(t, e) {
                    var r = e.supplemental.timeZoneData;
                    void 0 === r && function() {
                        var t = new Error("TimeZone data is missing. Please call require 'ojs/ojtimezonedata' in order to load the TimeZone data.");
                        throw t.errorInfo = {
                            errorCode: "missingTimeZoneData"
                        }, t
                    }();
                    var n = v(t, r);
                    if (!n) {
                        var o = r.links[t];
                        o && (n = v(o, r))
                    }
                    return n || function(t) {
                        var e = new Error("invalid timeZone ID: " + t),
                            r = {
                                errorCode: "invalidTimeZoneID",
                                parameterMap: {
                                    timeZoneID: t
                                }
                            };
                        throw e.errorInfo = r, e
                    }(t), n
                }
            }
        }
        return c.prototype = {
            _set: function(t) {
                this.name = t.name, this.abbrs = t.abbrs, this.untils = t.untils, this.offsets = t.offsets
            },
            parse: function(t, e, r, n) {
                for (var o = this.offsets, i = this.untils, a = i.length - 1, s = 0; s < a; s++) {
                    var f = o[s],
                        u = o[s + 1],
                        c = i[s],
                        h = c - 6e4 * f,
                        v = h - 36e5;
                    if (t >= h && t < h + 36e5 && f > u) {
                        if (!0 !== n) return s + 1;
                        l()
                    }
                    if (t >= v && t < h && f < u) return e ? s : s + 1;
                    if (t < c - 6e4 * f) return !1 === r ? e ? f < u ? s : s + 1 : f < u ? s + 1 : s : s
                }
                return a
            },
            abbr: function(t) {
                return this.abbrs[t]
            },
            ofset: function(t) {
                var e = this.offsets.length;
                return 0 === e ? 0 : t >= 0 && t < e ? parseInt(this.offsets[t], 10) : parseInt(this.offsets[e - 1], 10)
            },
            len: function() {
                return this.offsets.length
            }
        }, {
            getInstance: function() {
                return t || (t = p()), t
            }
        }
    }();
    t.OraTimeZone = e, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojoratimezone.js.map