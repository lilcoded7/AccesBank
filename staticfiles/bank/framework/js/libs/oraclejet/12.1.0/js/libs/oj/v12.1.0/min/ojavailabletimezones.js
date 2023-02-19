/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojlocaledata", "ojs/ojoratimezone", "ojs/ojconverterutils-i18n"], function(e, t, n, o) {
    "use strict";
    const i = o.OraI18nUtils;
    class a {
        static getAvailableTimeZonesImpl() {
            return a._availableTimeZonesImpl(t.__getBundle())
        }
        static _getBCP47Lang(e) {
            return e.split("-")[0]
        }
        static _availableTimeZonesImpl(e) {
            const t = n.OraTimeZone.getInstance(),
                o = {
                    sensitivity: "variant"
                },
                l = i.getLocaleElementsMainNodeKey(e),
                s = i.getLocaleElementsMainNode(e),
                c = i.getLocaleElementsMainNodeKey(e),
                r = a._getBCP47Lang(c),
                m = s.dates.timeZoneNames.metazone,
                d = s.dates.timeZoneNames.zone,
                u = [],
                f = {},
                v = e.supplemental.timeZoneData,
                g = new Date,
                p = [g.getFullYear(), g.getMonth() + 1, g.getDate(), g.getHours(), g.getMinutes(), g.getSeconds()];

            function _(e, t) {
                const n = function(e, t, n, o, i) {
                        const a = Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
                        return e.parse(a, n, o, i)
                    }(e, t, !1, !0, !1),
                    o = e.ofset(n),
                    i = e.ofset(n + 1);
                return Math.max(o, i)
            }

            function h(e) {
                const t = e.split(" ");
                let n = t[0].split("-");
                const o = new Date(n[0], n[1] - 1, n[2]);
                return t.length > 1 && (n = t[1].split(":"), o.setHours(n[0]), o.setMinutes(n[1])), o.getTime()
            }

            function N(t, n, o, a) {
                const l = t.split("/"),
                    s = l[0],
                    c = l[1];
                let m, d;
                const u = {
                        offsetLocName: null,
                        locName: null
                    },
                    f = a[s];
                "en" === r ? void 0 !== l[1] && (m = " " + l[1], m = m.replace(/_/g, " "), m = m.replace("Saigon", "Ho Chi Minh City")) : void 0 !== f && (m = f[c], void 0 !== m && (m = m.exemplarCity, void 0 !== m && (m = " " + m)));
                const v = s + "/" + c,
                    g = e.supplemental.metazones;
                let _ = function(e, t, n) {
                    const o = new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5]).getTime(),
                        i = t.split("/"),
                        a = i[0],
                        l = i[1];
                    let s = n[a];
                    if (void 0 === s) return null;
                    if (s = s[l], void 0 === s) return null;
                    const c = s.length;
                    let r, m;
                    for (var d = 0; d < c; d++) {
                        const e = s[d].usesMetazone._from,
                            t = s[d].usesMetazone._to,
                            n = s[d].usesMetazone._mzone;
                        if (void 0 === e && void 0 === t) return n;
                        if (void 0 === e && void 0 !== t && (m = h(t), o <= m)) return n;
                        if (void 0 !== e && void 0 === t && (r = h(e), o >= r)) return n;
                        if (void 0 !== e && void 0 !== t && (r = h(e), m = h(t), o >= r && o < m)) return n
                    }
                }(p, v, g);
                if (void 0 !== o && (_ = o[_]), null != _ && void 0 !== _.long && (d = _.long.generic, void 0 === d && (d = _.long.standard)), void 0 === m) return null;
                let N = "(UTC)";
                return 0 !== n && (N = i.getTimeStringFromOffset("UTC", n, !0, !0), N = `(${N})`), void 0 === d && (d = ""), "" !== d && (d = " - " + d), u.offsetLocName = N + m + d, u.locName = m + d, u
            }

            function Z(e, t) {
                return e.find(({
                    displayName: e
                }) => e.offsetLocName === t.offsetLocName)
            }

            function C(n, o) {
                let i, a;
                const l = Object.keys(n);
                for (let n = 0; n < l.length; n++) {
                    let s = l[n];
                    if (-1 === s.indexOf("Etc/") && -1 === s.indexOf("Ho_Chi_Minh")) {
                        i = t.getZone(s, e), a = _(i, p);
                        const n = N(s, a, m, d);
                        if (null !== n) Z(o, n) || ("Asia/Saigon" === s && (s = "Asia/Ho_Chi_Minh"), o.push({
                            id: s,
                            displayName: n
                        }));
                        f[s] = a
                    }
                }
            }
            const M = i.getLocaleElementsMainNodeKey(e);
            if (void 0 !== a._timeZoneDataCache && void 0 !== a._timeZoneDataCache[M]) {
                const e = a._timeZoneDataCache[M].availableTimeZones;
                if (void 0 !== e) return e
            }
            C(v.zones, u), C(v.links, u), u.sort(function(e, t) {
                return f[t.id] - f[e.id] + e.displayName.locName.localeCompare(t.displayName.locName, l, o)
            });
            const y = u.length;
            for (let e = 0; e < y; e++) u[e].displayName = u[e].displayName.offsetLocName;
            return void 0 !== a._timeZoneDataCache && void 0 === a._timeZoneDataCache[M] && (a._timeZoneDataCache[M] = {
                availableTimeZones: null
            }, a._timeZoneDataCache[M].availableTimeZones = u), u
        }
    }
    a._timeZoneDataCache = {}, e.AvailableTimeZones = a, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojavailabletimezones.js.map