var hexcase = 0;
var b64pad = "";
var chrsz = 8;

function hex_sampling(b) {
    return binl2hex(core_md5(str2binl(b), b.length * chrsz))
}

function b64_md5(b) {
    return binl2b64(core_md5(str2binl(b), b.length * chrsz))
}

function str_md5(b) {
    return binl2str(core_md5(str2binl(b), b.length * chrsz))
}

function hex_hmac_md5(d, c) {
    return binl2hex(core_hmac_md5(d, c))
}

function b64_hmac_md5(d, c) {
    return binl2b64(core_hmac_md5(d, c))
}

function str_hmac_md5(d, c) {
    return binl2str(core_hmac_md5(d, c))
}

function md5_vm_test() {
    return hex_sampling("abc") == "900150983cd24fb0d6963f7d28e17f72"
}

function core_md5(a, q) {
    a[q >> 5] |= 128 << ((q) % 32);
    a[(((q + 64) >>> 9) << 4) + 14] = q;
    var b = 1732584193;
    var c = -271733879;
    var d = -1732584194;
    var i = 271733878;
    for (var t = 0; t < a.length; t += 16) {
        var r = b;
        var s = c;
        var u = d;
        var v = i;
        b = md5_ff(b, c, d, i, a[t + 0], 7, -680876936);
        i = md5_ff(i, b, c, d, a[t + 1], 12, -389564586);
        d = md5_ff(d, i, b, c, a[t + 2], 17, 606105819);
        c = md5_ff(c, d, i, b, a[t + 3], 22, -1044525330);
        b = md5_ff(b, c, d, i, a[t + 4], 7, -176418897);
        i = md5_ff(i, b, c, d, a[t + 5], 12, 1200080426);
        d = md5_ff(d, i, b, c, a[t + 6], 17, -1473231341);
        c = md5_ff(c, d, i, b, a[t + 7], 22, -45705983);
        b = md5_ff(b, c, d, i, a[t + 8], 7, 1770035416);
        i = md5_ff(i, b, c, d, a[t + 9], 12, -1958414417);
        d = md5_ff(d, i, b, c, a[t + 10], 17, -42063);
        c = md5_ff(c, d, i, b, a[t + 11], 22, -1990404162);
        b = md5_ff(b, c, d, i, a[t + 12], 7, 1804603682);
        i = md5_ff(i, b, c, d, a[t + 13], 12, -40341101);
        d = md5_ff(d, i, b, c, a[t + 14], 17, -1502002290);
        c = md5_ff(c, d, i, b, a[t + 15], 22, 1236535329);
        b = md5_gg(b, c, d, i, a[t + 1], 5, -165796510);
        i = md5_gg(i, b, c, d, a[t + 6], 9, -1069501632);
        d = md5_gg(d, i, b, c, a[t + 11], 14, 643717713);
        c = md5_gg(c, d, i, b, a[t + 0], 20, -373897302);
        b = md5_gg(b, c, d, i, a[t + 5], 5, -701558691);
        i = md5_gg(i, b, c, d, a[t + 10], 9, 38016083);
        d = md5_gg(d, i, b, c, a[t + 15], 14, -660478335);
        c = md5_gg(c, d, i, b, a[t + 4], 20, -405537848);
        b = md5_gg(b, c, d, i, a[t + 9], 5, 568446438);
        i = md5_gg(i, b, c, d, a[t + 14], 9, -1019803690);
        d = md5_gg(d, i, b, c, a[t + 3], 14, -187363961);
        c = md5_gg(c, d, i, b, a[t + 8], 20, 1163531501);
        b = md5_gg(b, c, d, i, a[t + 13], 5, -1444681467);
        i = md5_gg(i, b, c, d, a[t + 2], 9, -51403784);
        d = md5_gg(d, i, b, c, a[t + 7], 14, 1735328473);
        c = md5_gg(c, d, i, b, a[t + 12], 20, -1926607734);
        b = md5_hh(b, c, d, i, a[t + 5], 4, -378558);
        i = md5_hh(i, b, c, d, a[t + 8], 11, -2022574463);
        d = md5_hh(d, i, b, c, a[t + 11], 16, 1839030562);
        c = md5_hh(c, d, i, b, a[t + 14], 23, -35309556);
        b = md5_hh(b, c, d, i, a[t + 1], 4, -1530992060);
        i = md5_hh(i, b, c, d, a[t + 4], 11, 1272893353);
        d = md5_hh(d, i, b, c, a[t + 7], 16, -155497632);
        c = md5_hh(c, d, i, b, a[t + 10], 23, -1094730640);
        b = md5_hh(b, c, d, i, a[t + 13], 4, 681279174);
        i = md5_hh(i, b, c, d, a[t + 0], 11, -358537222);
        d = md5_hh(d, i, b, c, a[t + 3], 16, -722521979);
        c = md5_hh(c, d, i, b, a[t + 6], 23, 76029189);
        b = md5_hh(b, c, d, i, a[t + 9], 4, -640364487);
        i = md5_hh(i, b, c, d, a[t + 12], 11, -421815835);
        d = md5_hh(d, i, b, c, a[t + 15], 16, 530742520);
        c = md5_hh(c, d, i, b, a[t + 2], 23, -995338651);
        b = md5_ii(b, c, d, i, a[t + 0], 6, -198630844);
        i = md5_ii(i, b, c, d, a[t + 7], 10, 1126891415);
        d = md5_ii(d, i, b, c, a[t + 14], 15, -1416354905);
        c = md5_ii(c, d, i, b, a[t + 5], 21, -57434055);
        b = md5_ii(b, c, d, i, a[t + 12], 6, 1700485571);
        i = md5_ii(i, b, c, d, a[t + 3], 10, -1894986606);
        d = md5_ii(d, i, b, c, a[t + 10], 15, -1051523);
        c = md5_ii(c, d, i, b, a[t + 1], 21, -2054922799);
        b = md5_ii(b, c, d, i, a[t + 8], 6, 1873313359);
        i = md5_ii(i, b, c, d, a[t + 15], 10, -30611744);
        d = md5_ii(d, i, b, c, a[t + 6], 15, -1560198380);
        c = md5_ii(c, d, i, b, a[t + 13], 21, 1309151649);
        b = md5_ii(b, c, d, i, a[t + 4], 6, -145523070);
        i = md5_ii(i, b, c, d, a[t + 11], 10, -1120210379);
        d = md5_ii(d, i, b, c, a[t + 2], 15, 718787259);
        c = md5_ii(c, d, i, b, a[t + 9], 21, -343485551);
        b = safe_add(b, r);
        c = safe_add(c, s);
        d = safe_add(d, u);
        i = safe_add(i, v)
    }
    return Array(b, c, d, i)
}

function md5_cmn(a, j, k, l, b, i) {
    return safe_add(bit_rol(safe_add(safe_add(j, a), safe_add(l, i)), b), k)
}

function md5_ff(l, m, a, b, n, c, d) {
    return md5_cmn((m & a) | ((~m) & b), l, m, n, c, d)
}

function md5_gg(l, m, a, b, n, c, d) {
    return md5_cmn((m & b) | (a & (~b)), l, m, n, c, d)
}

function md5_hh(l, m, a, b, n, c, d) {
    return md5_cmn(m ^ a ^ b, l, m, n, c, d)
}

function md5_ii(l, m, a, b, n, c, d) {
    return md5_cmn(a ^ (m | (~b)), l, m, n, c, d)
}

function core_hmac_md5(n, k) {
    var l = str2binl(n);
    if (l.length > 16) {
        l = core_md5(l, n.length * chrsz)
    }
    var i = Array(16),
        m = Array(16);
    for (var h = 0; h < 16; h++) {
        i[h] = l[h] ^ 909522486;
        m[h] = l[h] ^ 1549556828
    }
    var j = core_md5(i.concat(str2binl(k)), 512 + k.length * chrsz);
    return core_md5(m.concat(j), 512 + 128)
}

function safe_add(f, g) {
    var h = (f & 65535) + (g & 65535);
    var e = (f >> 16) + (g >> 16) + (h >> 16);
    return (e << 16) | (h & 65535)
}

function bit_rol(d, c) {
    return (d << c) | (d >>> (32 - c))
}

function str2binl(g) {
    var h = Array();
    var f = (1 << chrsz) - 1;
    for (var e = 0; e < g.length * chrsz; e += chrsz) {
        h[e >> 5] |= (g.charCodeAt(e / chrsz) & f) << (e % 32)
    }
    return h
}

function binl2str(h) {
    var g = "";
    var f = (1 << chrsz) - 1;
    for (var e = 0; e < h.length * 32; e += chrsz) {
        g += String.fromCharCode((h[e >> 5] >>> (e % 32)) & f)
    }
    return g
}

function binl2hex(h) {
    var e = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var g = "";
    for (var f = 0; f < h.length * 4; f++) {
        g += e.charAt((h[f >> 2] >> ((f % 4) * 8 + 4)) & 15) + e.charAt((h[f >> 2] >> ((f % 4) * 8)) & 15)
    }
    return g
}

function binl2b64(k) {
    var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var i = "";
    for (var g = 0; g < k.length * 4; g += 3) {
        var j = (((k[g >> 2] >> 8 * (g % 4)) & 255) << 16) | (((k[g + 1 >> 2] >> 8 * ((g + 1) % 4)) & 255) << 8) | ((k[g + 2 >> 2] >> 8 * ((g + 2) % 4)) & 255);
        for (var h = 0; h < 4; h++) {
            if (g * 8 + h * 6 > k.length * 32) {
                i += b64pad
            } else {
                i += l.charAt((j >> 6 * (3 - h)) & 63)
            }
        }
    }
    return i
}

function AC_AddExtension(c, d) {
    if (c.indexOf("?") != -1) {
        return c.replace(/\?/, d + "?")
    } else {
        return c + d
    }
}

function AC_Generateobj(h, i, g) {
    var j = "<object ";
    for (var f in h) {
        j += f + '="' + h[f] + '" '
    }
    j += ">";
    for (var f in i) {
        j += '<param name="' + f + '" value="' + i[f] + '" /> '
    }
    j += "<embed ";
    for (var f in g) {
        j += f + '="' + g[f] + '" '
    }
    j += " ></embed></object>";
    document.write(j)
}

function AC_FL_RunContent() {
    var b = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    AC_Generateobj(b.objAttrs, b.params, b.embedAttrs)
}

function AC_SW_RunContent() {
    var b = AC_GetArgs(arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000", null);
    AC_Generateobj(b.objAttrs, b.params, b.embedAttrs)
}

function AC_GetArgs(i, n, l, o, k) {
    var j = new Object();
    j.embedAttrs = new Object();
    j.params = new Object();
    j.objAttrs = new Object();
    for (var p = 0; p < i.length; p = p + 2) {
        var m = i[p].toLowerCase();
        switch (m) {
            case "classid":
                break;
            case "pluginspage":
                j.embedAttrs[i[p]] = i[p + 1];
                break;
            case "src":
            case "movie":
                i[p + 1] = AC_AddExtension(i[p + 1], n);
                j.embedAttrs.src = i[p + 1];
                j.params[l] = i[p + 1];
                break;
            case "onafterupdate":
            case "onbeforeupdate":
            case "onblur":
            case "oncellchange":
            case "onclick":
            case "ondblClick":
            case "ondrag":
            case "ondragend":
            case "ondragenter":
            case "ondragleave":
            case "ondragover":
            case "ondrop":
            case "onfinish":
            case "onfocus":
            case "onhelp":
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmousemove":
            case "onmouseout":
            case "onkeypress":
            case "onkeydown":
            case "onkeyup":
            case "onload":
            case "onlosecapture":
            case "onpropertychange":
            case "onreadystatechange":
            case "onrowsdelete":
            case "onrowenter":
            case "onrowexit":
            case "onrowsinserted":
            case "onstart":
            case "onscroll":
            case "onbeforeeditfocus":
            case "onactivate":
            case "onbeforedeactivate":
            case "ondeactivate":
            case "type":
            case "codebase":
                j.objAttrs[i[p]] = i[p + 1];
                break;
            case "width":
            case "height":
            case "align":
            case "vspace":
            case "hspace":
            case "class":
            case "title":
            case "accesskey":
            case "name":
            case "id":
            case "tabindex":
                j.embedAttrs[i[p]] = j.objAttrs[i[p]] = i[p + 1];
                break;
            default:
                j.embedAttrs[i[p]] = j.params[i[p]] = i[p + 1]
        }
    }
    j.objAttrs.classid = o;
    if (k) {
        j.embedAttrs.type = k
    }
    return j
};