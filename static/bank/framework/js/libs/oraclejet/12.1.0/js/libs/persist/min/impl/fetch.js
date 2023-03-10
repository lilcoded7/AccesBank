/**
 * Copyright (c) 2014-2016 GitHub, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.prototype
 */
! function(t) {
    "use strict";
    if (!t.fetch) {
        var e = "URLSearchParams" in t,
            r = "Symbol" in t && "iterator" in Symbol,
            o = "FileReader" in t && "Blob" in t && function() {
                try {
                    return new Blob, !0
                } catch (t) {
                    return !1
                }
            }(),
            n = "FormData" in t,
            i = "ArrayBuffer" in t;
        if (i) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            a = function(t) {
                return t && DataView.prototype.isPrototypeOf(t)
            },
            h = ArrayBuffer.isView || function(t) {
                return t && s.indexOf(Object.prototype.toString.call(t)) > -1
            };
        l.prototype.append = function(t, e) {
            t = d(t), e = y(e);
            var r = this.map[t];
            this.map[t] = r ? r + "," + e : e
        }, l.prototype.delete = function(t) {
            delete this.map[d(t)]
        }, l.prototype.get = function(t) {
            return t = d(t), this.has(t) ? this.map[t] : null
        }, l.prototype.has = function(t) {
            return this.map.hasOwnProperty(d(t))
        }, l.prototype.set = function(t, e) {
            this.map[d(t)] = y(e)
        }, l.prototype.forEach = function(t, e) {
            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
        }, l.prototype.keys = function() {
            var t = [];
            return this.forEach((function(e, r) {
                t.push(r)
            })), p(t)
        }, l.prototype.values = function() {
            var t = [];
            return this.forEach((function(e) {
                t.push(e)
            })), p(t)
        }, l.prototype.entries = function() {
            var t = [];
            return this.forEach((function(e, r) {
                t.push([r, e])
            })), p(t)
        }, r && (l.prototype[Symbol.iterator] = l.prototype.entries);
        // HTTP methods whose capitalization should be normalized
        var u = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        v.prototype.clone = function() {
            return new v(this, {
                body: this._bodyInit
            })
        }, _.call(v.prototype), _.call(B.prototype), B.prototype.clone = function() {
            return new B(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new l(this.headers),
                url: this.url
            })
        }, B.error = function() {
            var t = new B(null, {
                status: 0,
                statusText: ""
            });
            return t.type = "error", t
        };
        var f = [301, 302, 303, 307, 308];
        B.redirect = function(t, e) {
            if (-1 === f.indexOf(e)) throw new RangeError("Invalid status code");
            return new B(null, {
                status: e,
                headers: {
                    location: t
                }
            })
        }, t.Headers = l, t.Request = v, t.Response = B, t.fetch = function(t, e) {
            return new Promise((function(r, n) {
                var i = new v(t, e),
                    s = new XMLHttpRequest; // @HTMLUpdateOK
                s.onload = function() {
                    var t, e, o = {
                        status: s.status,
                        statusText: s.statusText,
                        headers: (t = s.getAllResponseHeaders() || "", e = new l, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                            var r = t.split(":"),
                                o = r.shift().trim();
                            if (o) {
                                var n = r.join(":").trim();
                                e.append(o, n)
                            }
                        })), e)
                    };
                    o.url = "responseURL" in s ? s.responseURL : o.headers.get("X-Request-URL");
                    var n = "response" in s ? s.response : s.responseText;
                    r(new B(n, o))
                }, s.onerror = function() {
                    n(new TypeError("Network request failed"))
                }, s.ontimeout = function() {
                    n(new TypeError("Network request failed"))
                }, s.open(i.method, i.url, !0), "include" === i.credentials && (s.withCredentials = !0), "responseType" in s && o && (s.responseType = "blob"), i.headers.forEach((function(t, e) {
                    s.setRequestHeader(e, t)
                })), s.send(void 0 === i._bodyInit ? null : i._bodyInit)
            }))
        }, t.fetch.polyfill = !0
    }

    function d(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function y(t) {
        return "string" != typeof t && (t = String(t)), t
    }
    // Build a destructive iterator for the value list
    function p(t) {
        var e = {
            next: function() {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        };
        return r && (e[Symbol.iterator] = function() {
            return e
        }), e
    }

    function l(t) {
        this.map = {}, t instanceof l ? t.forEach((function(t, e) {
            this.append(e, t); // @XSSFalsePositive
        }), this) : Array.isArray(t) ? t.forEach((function(t) {
            this.append(t[0], t[1]); // @XSSFalsePositive
        }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
            this.append(e, t[e]); // @XSSFalsePositive
        }), this)
    }

    function c(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function b(t) {
        return new Promise((function(e, r) {
            t.onload = function() {
                e(t.result)
            }, t.onerror = function() {
                r(t.error)
            }
        }))
    }

    function m(t) {
        var e = new FileReader,
            r = b(e);
        return e.readAsArrayBuffer(t), r
    }

    function w(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function _() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            if (this._bodyInit = t, t)
                if ("string" == typeof t) this._bodyText = t;
                else if (o && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
            else if (n && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
            else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
            else if (i && o && a(t)) this._bodyArrayBuffer = w(t.buffer),
                // IE 10-11 can't handle a DataView body.
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
            else {
                if (!i || !ArrayBuffer.prototype.isPrototypeOf(t) && !h(t)) throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = w(t)
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, o && (this.blob = function() {
            var t = c(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(m)
        }), this.text = function() {
            var t, e, r, o = c(this);
            if (o) return o;
            if (this._bodyBlob) return t = this._bodyBlob, r = b(e = new FileReader), e.readAsText(t), r;
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++) r[o] = String.fromCharCode(e[o]);
                return r.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, n && (this.formData = function() {
            return this._bodyFormData ? Promise.resolve(this._bodyFormData) : this.text().then(A)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }

    function v(t, e) {
        var r, o, n = (e = e || {}).body;
        if (t instanceof v) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new l(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new l(e.headers)), this.method = (o = (r = e.method || this.method || "GET").toUpperCase(), u.indexOf(o) > -1 ? o : r), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n)
    }

    function A(t) {
        var e = new FormData;
        return t.trim().split("&").forEach((function(t) {
            if (t) {
                var r = t.split("="),
                    o = r.shift().replace(/\+/g, " "),
                    n = r.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(o), decodeURIComponent(n))
            }
        })), e
    }

    function B(t, e) {
        e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new l(e.headers), this.url = e.url || "", this._initBody(t)
    }
}("undefined" != typeof self ? self : this);