define(["baseService", "framework/js/plugins/encrypt", "baseModel", "framework/js/configurations/config"], function(e, t, n, o) {
    "use strict";
    const r = e.getInstance(),
        s = n.getInstance(),
        a = {
            channelAccess: !0,
            policyAvailable: !0,
            externalAuthenticator: !1
        };
    return {
        init: function(e, t) {
            t(e)
        },
        login: function(e, n) {
            return new Promise(function(r, a) {
                t(n).then(function(t) {
                    const n = "j_username=" + e + "&j_password=" + encodeURIComponent(t[0]);
                    let r = s.format(o.sharding.apiBaseURL + "/{contextRoot}/j_security_check", {
                        contextRoot: o.apiCatalogue.base.contextRoot
                    });
                    return r = s.QueryParams.add(r, {
                        locale: s.getLocale()
                    }, !0), fetch(r, {
                        method: "POST",
                        credentials: "same-origin",
                        body: n,
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                        }
                    })
                }).then(function(e) {
                    if (404 === e.status || "SUCCESSFUL" === e.status.result) r();
                    else {
                        const t = JSON.parse(e.headers.get("X-AUTH-FAILURE-RESPONSE"));
                        t && t.type && a({
                            type: t.type,
                            enterpriseRole: t.enterpriseRole,
                            message: t.errorMessage
                        })
                    }
                }).catch(function(e) {
                    a({
                        error: e
                    })
                })
            })
        },
        logout: function() {
            return r.remove({
                url: "session"
            })
        },
        getAnonSession: function() {
            return r.add({
                url: "session"
            })
        },
        behaviour: function(e) {
            return !!a[e] && a[e]
        }
    }
});