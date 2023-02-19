! function() {
    "use strict";
    const t = function(t) {
            return t.match(/^((?!(digx|\/\?module\=|index\.html|home\.html|build\.fingerprint|extension\.json|manifest\.json)).)*$/)
        },
        e = [],
        n = {
            default: function(e) {
                e.respondWith(caches.match(e.request).then(function(n) {
                    if (n) return n;
                    const c = e.request.clone();
                    return fetch(c).then(function(n) {
                        if (!n || "basic" === n.type && 200 !== n.status) return n;
                        if (t(e.request.url)) {
                            const t = n.clone();
                            caches.open("obdx-cache").then(function(n) {
                                n.put(e.request, t)
                            })
                        }
                        return n
                    })
                }))
            },
            staleWhileRevalidate: function(e) {
                e.respondWith(caches.open("obdx-cache").then(function(n) {
                    return n.match(e.request).then(function(c) {
                        const i = fetch(e.request).then(function(c) {
                            return !c || "basic" === c.type && 200 !== c.status ? c : (t(e.request.url) && n.put(e.request, c.clone()), c)
                        });
                        return c || i
                    })
                }))
            }
        };
    self.addEventListener("install", function(t) {
        t.waitUntil(caches.open("obdx-cache").then(function(t) {
            return t.addAll(e)
        }))
    }), self.addEventListener("fetch", n.staleWhileRevalidate), self.addEventListener("push", function(t) {
        t.data && c(t.data.text().split("~")[0], t.data.text().split("~")[1], self.registration)
    });
    const c = (t, e, n) => {
        const c = {
            icon: "notif/logo_192x192.png",
            body: e
        };
        n.showNotification(t, c)
    };
    self.addEventListener("activate", function(t) {
        t.waitUntil(caches.keys().then(function(t) {
            return Promise.all(t.map(function(t) {
                return caches.delete(t)
            }))
        }))
    })
}();