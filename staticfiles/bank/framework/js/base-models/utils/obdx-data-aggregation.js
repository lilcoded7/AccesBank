define(["base-models/utils/background-tasks", "baseService", "framework/js/configurations/config"], function(n, t, e) {
    "use strict";
    const i = [],
        s = t.getInstance(),
        a = e.analytics.obdxAnalytics.eventsThreshold,
        o = e.analytics.obdxAnalytics.inactivityTimeout,
        c = function(n) {
            if (n) {
                const n = s.props("nonceKeys").pop();
                if (n) return {
                    "x-nonce": n
                }
            }
            return {
                "x-nonce": null
            }
        },
        r = function(n, t) {
            return Array.isArray(t) && e.analytics.obdxAnalytics.enabled ? (n = n || !1, s.batch({
                url: "batch",
                showMessage: !1,
                async: !n,
                headers: Object.assign({}, c(n))
            }, null, {
                batchDetailRequestList: t.map(function(t, e) {
                    return {
                        methodType: "POST",
                        payload: JSON.stringify(t),
                        headers: Object.assign({
                            "Content-Type": "application/json",
                            "Content-Id": e
                        }, c(n)),
                        uri: {
                            value: "/analytics"
                        }
                    }
                })
            }).then(function() {
                i.length = 0
            })) : Promise.resolve()
        },
        u = r.bind(null, !1),
        l = r.bind(null, !0);

    function d() {
        window.onunload = function() {
            i.push({
                event: "UNLOAD"
            }), l(i)
        }, setInterval(function() {
            i.length && u(i)
        }, o)
    }
    return d.prototype.addEvent = function(t) {
        i.push(t), i.length >= a && n(function() {
            u(i)
        })
    }, d.prototype.pushAggregatedData = u.bind(null, i), new d
});