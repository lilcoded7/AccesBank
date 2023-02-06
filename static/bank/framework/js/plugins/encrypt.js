define(["framework/js/plugins/encryption/rsa-encrypt", "baseService"], function(e, n) {
    "use strict";
    const t = n.getInstance(),
        r = new e;
    return function(e, n) {
        return Array.isArray(e) || (e = [e]), t.fetch({
            url: "publicKey",
            throttle: !1,
            apiType: n
        }).then(function(u) {
            return u.publicKeyDTO.publicKey ? t.add({
                url: "salt",
                apiType: n
            }).then(function(n) {
                return r.setPublic(u.publicKeyDTO.modulus, u.publicKeyDTO.publicExponent), e.map(function(e) {
                    return e = `${e} ${decodeURIComponent(n.saltDTO.id)}`, r.encryptb64(e)
                })
            }) : e
        })
    }
});