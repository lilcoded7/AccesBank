define(["framework/js/configurations/config"], function(e) {
    "use strict";
    return {
        init: function(e, t) {
            t(e)
        },
        downloadFile: function(e, t, n, o) {
            const a = new XMLHttpRequest;
            let s;
            a.open(e.type || "GET", e.url, !0), a.setRequestHeader("x-nonce", t), a.setRequestHeader("X-Target-Unit", n), a.setRequestHeader("Content-type", "application/json"), e.headers && Object.keys(e.headers).forEach(function(t) {
                a.setRequestHeader([t], e.headers[t])
            }), void 0 === document.createElement("a").download && (s = window.open("", "_blank")), a.onreadystatechange = function() {
                if (4 === a.readyState) {
                    if (200 === a.status) {
                        let t = "";
                        const n = a.getResponseHeader("Content-Disposition");
                        if (n && -1 !== n.indexOf("attachment")) {
                            const e = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(n);
                            e && e[1] && (t = (t = window.decodeURI(e[1].substr(e[1].lastIndexOf("'") + 1, e[1].length))).replace(/['"]/g, ""))
                        }
                        const i = a.response;
                        if (void 0 !== window.navigator.msSaveBlob) window.navigator.msSaveBlob(i, t);
                        else {
                            const e = new Blob([i], {
                                    type: "application/octet-stream"
                                }),
                                n = window.URL || window.webkitURL,
                                o = n.createObjectURL(e);
                            if (t) {
                                const e = document.createElement("a");
                                void 0 === e.download ? (s.location = o, s.onunload = function() {
                                    n.revokeObjectURL(o)
                                }) : (e.href = o, e.download = t, document.body.appendChild(e), e.click(), setTimeout(function() {
                                    n.revokeObjectURL(o), document.body.removeChild(e)
                                }, 100))
                            } else s.location = o, s.onunload = function() {
                                n.revokeObjectURL(o)
                            }
                        }
                        o.apply(e, [a])
                    } else if ("" !== a.responseText) {
                        const t = a;
                        t.responseJSON = JSON.parse(a.responseText), o.apply(e, [t])
                    }
                } else 2 === a.readyState && (200 === a.status ? a.responseType = "blob" : a.responseType = "text")
            }, a.send(e.data)
        },
        getServerURL: function() {
            return e.sharding.apiBaseURL
        },
        getImageBaseURL: function() {
            return e.sharding.imageResourcePath
        }
    }
});