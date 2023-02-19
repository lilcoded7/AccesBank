var message = "Sorry, you can't right click.\nClick 'OK' to Proceed.";

function isBlank(j, s) {
    var u = arguments.length;
    if (j.type == "password") {
        if (j.value == "") {
            return true
        }
    } else {
        if (j.type == "textarea") {
            if (j.value == "") {
                return true
            }
        } else {
            if (j.type == "text") {
                if (u <= 1) {
                    j.value = j.value.replace(/^\s+/g, "").replace(/\s+$/g, "")
                }
                if (j.value == "") {
                    return true
                }
                var o = 0;
                var m = 0;
                var p = 0;
                for (var r = 0; r < j.value.length; r++) {
                    if (j.value.charAt(r) == " ") {
                        o++
                    } else {
                        p = r;
                        break
                    }
                }
                if (o == j.value.length) {
                    return true
                }
            } else {
                if ((j.type == "select-one") || (j.type == "select-multiple")) {
                    var n = j.length;
                    var t = j.options.selectedIndex;
                    if (n == 0) {
                        return true
                    }
                    for (var q = 0; q < n; q++) {
                        if ((j.options[q].selected) && (j.options[q].value == "")) {
                            return true
                        }
                    }
                    if (t < 0) {
                        return true
                    }
                    if (j.options[t].value == "" || j.options[t].value == null) {
                        return true
                    }
                }
            }
        }
    }
    return false
}

function checkBlank(h) {
    var f = h.length;
    var g = false;
    for (var e = 0; e < f; e++) {
        if (h.options[e].value != "") {
            g = true;
            break
        }
    }
    return (g)
}

function fnCBSIsValidEmailAddress(d) {
    var c = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    return c.test(d)
}

function ValidateEmailAddress(e, d, f) {
    if (isBlank(e, "Y") || fnCBSIsValidEmailAddress(e.value)) {
        return true
    } else {
        alert(d + "  Invalid Entry : Correct Format is xxx@xx.xxx ");
        e.focus();
        return false
    }
}

function getSelectedObj() {
    var b;
    if (this.parentobj != null) {
        b = this.parentobj.selectedList;
        if (b.length <= 0) {
            b = this.parentobj.getSelectedObj()
        }
    } else {
        b = this.selectedList
    }
    return b
}

function getDescData(k, m, g, j) {
    for (var l = 0; l < k.length; l++) {
        var h = getSelectedListValue(g);
        if (h == m[l]) {
            j.value = k[l];
            break
        }
    }
    if (0 == g.selectedIndex) {
        j.value = ""
    }
}

function getSelectedListValue(d) {
    var c = d.options[d.selectedIndex].value;
    if (typeof c == "undefined" || c == null || c == "") {
        c = d.options[d.selectedIndex].text
    }
    return c
}

function setLovValues(e, f) {
    var d;
    for (d = 0; d < e.options.length; d++) {
        if (e.options[d].value == f) {
            e.options[d].selected = true
        }
    }
}

function getDescDataFilter(k, m, g, j) {
    for (var l = 0; l < k.length; l++) {
        var h = getSelectedListValueFilter(g);
        if (h == m[l]) {
            j.value = k[l];
            break
        }
    }
    if (0 == g.selectedIndex) {
        j.value = ""
    }
}

function getSelectedListValueFilter(d) {
    var c = d.options[d.selectedIndex].value;
    alert("value" + c);
    if (typeof c == "undefined" || c == null || c == "") {
        return
    } else {
        return c
    }
}

function populateCombo(j, m, n, r, u) {
    var s = 0,
        p = 0;
    var q = new Array();
    var t = new Array();
    var o = new Array();
    comboRemover(u);
    for (i = 0; i < j.length; i++) {
        if (j[i] == r.value) {
            q[s] = m[i];
            t[s] = n[i];
            s++
        } else {
            o[s] = ""
        }
    }
    if (p == 0) {
        Optpopulate1(q, t, u)
    } else {
        Optpopulate(o, u)
    }
}

function Optpopulate(g, f) {
    var e = document.getElementById(f);
    if (g.length != 0) {
        e.options[0] = new Option();
        e.options[0].text = "";
        e.options[0].value = "";
        for (var h = 0; h < g.length; h++) {
            if (g[h] != "") {
                e.options[h + 1] = new Option();
                e.options[h + 1].text = g[h];
                e.options[h + 1].value = g[h]
            }
        }
    } else {
        if (g.length == 0) {
            e.options[0] = new Option()
        }
    }
    return
}

function Optpopulate1(h, j, g) {
    var f = document.getElementById(g);
    if (h.length != 0 && j.length != 0) {
        f.options[0] = new Option();
        f.options[0].text = "";
        f.options[0].value = "";
        for (var k = 0; k < h.length; k++) {
            if (h[k] != "" && j[k] != "") {
                f.options[k + 1] = new Option();
                f.options[k + 1].text = j[k];
                f.options[k + 1].value = h[k]
            }
        }
    } else {
        if (h.length == 0 && j.length == 0) {
            f.options[0] = new Option()
        }
    }
    return
}

function Optpopulate2(k, l, j, n) {
    var h = document.getElementById(j);
    var m = 0;
    if (k.length != 0 && l.length != 0) {
        h.options[0] = new Option();
        h.options[0].text = "";
        h.options[0].value = "";
        for (var o = 0; o < k.length; o++) {
            if (k[o] != "" && l[o] != "" && k[o] != n) {
                h.options[m + 1] = new Option();
                h.options[m + 1].text = l[o];
                h.options[m + 1].value = k[o];
                m = parseInt(m) + 1
            }
        }
    }
    return
}

function Optpopulate3(l, m, q, j, k) {
    var p = document.getElementById(q);
    var n = 0;
    if (l.length != 0 && m.length != 0) {
        p.options[0] = new Option();
        p.options[0].text = "";
        p.options[0].value = "";
        for (var o = 0; o < l.length; o++) {
            if (l[o] != "" && m[o] != "" && l[o] != j && l[o] != k) {
                p.options[n + 1] = new Option();
                p.options[n + 1].text = m[o];
                p.options[n + 1].value = l[o];
                n = parseInt(n) + 1
            }
        }
    }
    return
}

function Optpopulate0(h, j, g) {
    var f = document.getElementById(g);
    if (h.length != 0 && j.length != 0) {
        for (var k = 0; k < h.length; k++) {
            if (h[k] != "" && j[k] != "") {
                f.options[k] = new Option();
                f.options[k].text = j[k];
                f.options[k].value = h[k]
            }
        }
    }
    return
}

function showtip(d, e, f) {
    if (document.all) {
        thetitle = f.split("<br>");
        if (thetitle.length > 1) {
            thetitles = "";
            for (i = 0; i < thetitle.length - 1; i++) {
                thetitles += thetitle[i] + "\r\n"
            }
            d.title = thetitles
        } else {
            d.title = f
        }
    } else {
        if (document.layers) {
            document.tooltip.document.write('<layer bgColor="#FFFFE7" style="border:1px solid black; font-size:12px;color:#000000;">' + f + "</layer>");
            document.tooltip.document.close();
            document.tooltip.left = e.pageX + 5;
            document.tooltip.top = e.pageY + 5;
            document.tooltip.visibility = "show"
        }
    }
}

function hidetip() {
    if (document.layers) {
        document.tooltip.visibility = "hidden"
    }
}

function checkBlankSpace(b) {
    while (b.substring(0, 1) == " ") {
        b = b.substring(1, b.length)
    }
    while (b.substring(b.length - 1, b.length) == " ") {
        b = b.substring(0, b.length - 1)
    }
    return b
}

function checkSpecialChars(d) {
    var f = d.value;
    var e;
    for (i = 0; i < f.length; i++) {
        if (f.charAt(i) == "#" || f.charAt(i) == "~" || f.charAt(i) == "&" || f.charAt(i) == "^" || f.charAt(i) == "@" || f.charAt(i) == "!" || f.charAt(i) == "`" || f.charAt(i) == "$" || f.charAt(i) == "%" || f.charAt(i) == "*" || f.charAt(i) == "(" || f.charAt(i) == ")" || f.charAt(i) == "?" || f.charAt(i) == "|") {
            return false
        }
    }
    return true
}

function checkspecialCharsBeneficiary(f) {
    var g = "`~!@#$%^&*()+=-[]\\';/{}|\"<>?";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (g.indexOf(h.charAt(e)) != -1) {
            return false
        }
    }
    return true
}

function newcheckspecialChars(f) {
    var g = "`~!@#$%^&*()+=-[]\\';,./{}|\":<>?";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (g.indexOf(h.charAt(e)) != -1) {
            return true
        }
    }
}

function newblankspaceChars(f) {
    var g = "       ";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (g.indexOf(h.charAt(e)) != -1) {
            return true
        }
    }
}

function newpercentagespecialChars(f) {
    var g = "!@#$^&*()+=-[]\\';,./{}|\":<>?";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (g.indexOf(h.charAt(e)) != -1) {
            return true
        }
    }
}

function newspecialChars(f) {
    var g = "!@#$^&*()+=-[]\\';,./{}|\":<>?.";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (g.indexOf(h.charAt(e)) != -1) {
            return true
        }
    }
}

function checkSp(f) {
    var d = f.value;
    for (var e = 0; e < d.length; e++) {
        if (!((d.charAt(e) >= "A" && d.charAt(e) <= "Z") || (d.charAt(e) >= "a" && d.charAt(e) <= "z") || (d.charAt(e) <= "9" && d.charAt(e) >= "0"))) {
            return true
        }
    }
}

function checkAlphaNumeric(m) {
    var o = false;
    var l = false;
    var n = m.value;
    for (var q = 0; q < n.length; q++) {
        var p = q;
        var j = q + 1;
        var k = n.substring(parseInt(p), parseInt(j));
        if (isNaN(k)) {
            l = true
        } else {
            o = true
        }
    }
    if (!o) {
        return true
    } else {
        if (!l) {
            return true
        }
    }
}

function containSameChars(k, g) {
    var f;
    var h;
    var j;
    h = 0;
    f = (k.length > g.length) ? g.length : k.length;
    for (j = 0; j < f; j++) {
        if (k.charAt(j) == g.charAt(j)) {
            h++
        }
    }
    if (h > 2) {
        return true
    }
    return false
}

function checkSMSGreaterDate(o, p) {
    var v = o.value;
    var A = p.value;
    if ((v == "") && (A == "")) {
        return true
    }
    if (((v != "") && (A == "")) || ((v == "") && (A != ""))) {
        return false
    }
    var y = v.indexOf("/");
    var t = v.lastIndexOf("/");
    var q = v.substr(t + 1);
    var u = v.substring(y + 1, t);
    var x = v.substr(0, y);
    v = u + "/" + x + "/" + q;
    var A = p.value;
    y = A.indexOf("/");
    t = A.lastIndexOf("/");
    var s = A.substr(t + 1);
    var w = A.substring(y + 1, t);
    var z = A.substr(0, y);
    A = w + "/" + z + "/" + s;
    firstDate = Date.parse(v);
    secondDate = Date.parse(A);
    var r = true;
    diff = firstDate - secondDate;
    if (diff > 0) {
        return false
    }
    return true
}

function checkspecialCharsSMS(f) {
    var g = "%@#$^&*()+=[]\\';/{}|\"<>?";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (g.indexOf(h.charAt(e)) != -1) {
            return true
        }
    }
}

function checkAlphaChars(f) {
    var g = "0123456789%";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (g.indexOf(h.charAt(e)) == -1) {
            return false
        }
    }
    return true
}

function checkAlphaNumericChars(f) {
    var g = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (g.indexOf(h.charAt(e)) == -1) {
            return false
        }
    }
    return true
}

function Trimspace(k) {
    var h = k.value;
    if (isWhitespace(h)) {
        k.value = "";
        h = k.value
    }
    if (h.length != 0) {
        var j = 0;
        var f = 0;
        for (j = 0; j < h.length; j++) {
            if (h.charAt(j) == " ") {
                f++
            } else {
                break
            }
        }
        h = h.substring(f, h.length);
        var g = 0;
        if (h.charAt(h.length - 1) == " ") {
            for (j = h.length - 1; j >= 0; j--) {
                if (h.charAt(j) == " ") {
                    g++
                } else {
                    break
                }
            }
        }
        h = h.substring(0, h.length - g)
    }
    return h
}

function hidingIcon(b) {
    if (navigator.appName == "Netscape") {
        document.getElementById(b).style.visibility = "hidden"
    } else {
        if (document.all) {
            document.all[b].style.visibility = "hidden"
        }
    }
}

function checkdate_cur(h, g, f, k) {
    var j = f;
    if (j.length == 0) {
        return
    } else {
        return validdate(h, g, f, k)
    }
}

function checkdate_less(h, g, f, k) {
    var j = f;
    if (j.length == 0) {
        return
    } else {
        return validdate1(h, g, f, k)
    }
}

function checkdate_greaterThanToday(h, g, f, k) {
    var j = f;
    if (j.length == 0) {
        return
    } else {
        return validdate3(h, g, f, k)
    }
}

function validdate(J, I, E, M) {
    var F = J;
    var u = F.charAt(0);
    dateTwo = E;
    chkdate = I;
    var C = new Date();
    var L = C.getDate();
    var H = C.getMonth() + 1;
    var K = C.getYear() + 1900;
    var x;
    var G;
    var B;
    var A;
    var v;
    var y;
    var w;
    var z;
    var D;
    if (u == "D" || u == "d") {
        x = F.charAt(2);
        G = parseInt(dateTwo.substring(0, dateTwo.indexOf(x)), 10);
        B = parseInt(dateTwo.substring(dateTwo.indexOf(x) + 1, dateTwo.lastIndexOf(x)), 10);
        A = parseInt(dateTwo.substring(dateTwo.lastIndexOf(x) + 1, dateTwo.length), 10);
        D = (A * 10000) + (B * 100) + G;
        v = parseInt(chkdate.substring(0, chkdate.indexOf(x)), 10);
        y = parseInt(chkdate.substring(chkdate.indexOf(x) + 1, chkdate.lastIndexOf(x)), 10);
        w = parseInt(chkdate.substring(chkdate.lastIndexOf(x) + 1, chkdate.length), 10);
        z = (w * 10000) + (y * 100) + v
    }
    if (parseInt(D) < parseInt(z)) {
        alert(M);
        return false
    }
    return true
}

function validdate1(J, I, E, M) {
    var F = J;
    var u = F.charAt(0);
    dateTwo = E;
    chkdate = I;
    var C = new Date();
    var L = C.getDate();
    var H = C.getMonth() + 1;
    var K = C.getYear() + 1900;
    var x;
    var G;
    var B;
    var A;
    var v;
    var y;
    var w;
    var z;
    var D;
    if (u == "D" || u == "d") {
        x = F.charAt(2);
        G = parseInt(dateTwo.substring(0, dateTwo.indexOf(x)), 10);
        B = parseInt(dateTwo.substring(dateTwo.indexOf(x) + 1, dateTwo.lastIndexOf(x)), 10);
        A = parseInt(dateTwo.substring(dateTwo.lastIndexOf(x) + 1, dateTwo.length), 10);
        D = (A * 10000) + (B * 100) + G;
        v = parseInt(chkdate.substring(0, chkdate.indexOf(x)), 10);
        y = parseInt(chkdate.substring(chkdate.indexOf(x) + 1, chkdate.lastIndexOf(x)), 10);
        w = parseInt(chkdate.substring(chkdate.lastIndexOf(x) + 1, chkdate.length), 10);
        z = (w * 10000) + (y * 100) + v
    }
    if (parseInt(D) > parseInt(z)) {
        alert(M);
        return false
    }
    return true
}

function validdate3(J, I, E, M) {
    var F = J;
    var u = F.charAt(0);
    dateTwo = E;
    chkdate = I;
    var C = new Date();
    var L = C.getDate();
    var H = C.getMonth() + 1;
    var K = C.getYear() + 1900;
    var x;
    var G;
    var B;
    var A;
    var v;
    var y;
    var w;
    var z;
    var D;
    if (u == "D" || u == "d") {
        x = F.charAt(2);
        G = parseInt(dateTwo.substring(0, dateTwo.indexOf(x)), 10);
        B = parseInt(dateTwo.substring(dateTwo.indexOf(x) + 1, dateTwo.lastIndexOf(x)), 10);
        A = parseInt(dateTwo.substring(dateTwo.lastIndexOf(x) + 1, dateTwo.length), 10);
        D = (A * 10000) + (B * 100) + G;
        v = parseInt(chkdate.substring(0, chkdate.indexOf(x)), 10);
        y = parseInt(chkdate.substring(chkdate.indexOf(x) + 1, chkdate.lastIndexOf(x)), 10);
        w = parseInt(chkdate.substring(chkdate.lastIndexOf(x) + 1, chkdate.length), 10);
        z = (w * 10000) + (y * 100) + v
    }
    if (parseInt(D) >= parseInt(z)) {
        alert(M);
        return false
    }
    return true
}

function datedifference_valid(I, H, D) {
    var E = I;
    var t = E.charAt(0);
    dateTwo = D;
    chkdate = H;
    var B = new Date();
    var K = B.getDate();
    var G = B.getMonth() + 1;
    var J = B.getYear() + 1900;
    var w;
    var F;
    var A;
    var z;
    var u;
    var x;
    var v;
    var y;
    var C;
    if (t == "D" || t == "d") {
        w = E.charAt(2);
        F = parseInt(dateTwo.substring(0, dateTwo.indexOf(w)), 10);
        A = parseInt(dateTwo.substring(dateTwo.indexOf(w) + 1, dateTwo.lastIndexOf(w)), 10);
        z = parseInt(dateTwo.substring(dateTwo.lastIndexOf(w) + 1, dateTwo.length), 10);
        C = (z * 10000) + (A * 100) + F;
        u = parseInt(chkdate.substring(0, chkdate.indexOf(w)), 10);
        x = parseInt(chkdate.substring(chkdate.indexOf(w) + 1, chkdate.lastIndexOf(w)), 10) - 1;
        v = parseInt(chkdate.substring(chkdate.lastIndexOf(w) + 1, chkdate.length), 10);
        y = (v * 10000) + (x * 100) + u
    }
    if (parseInt(v) > parseInt(z)) {
        if (parseInt(C) > parseInt(y) || (parseInt(A) - parseInt(x)) != 12 || parseInt(F) <= parseInt(u)) {
            return false
        }
        return true
    } else {
        if (parseInt(C) < parseInt(y)) {
            return false
        }
        return true
    }
}

function checkIfDateValid(A, z) {
    var y = z;
    if (y.length == 0) {
        return false
    }
    var y = z;
    var x = A;
    var B = new Array(12);
    B[1] = 31;
    B[2] = 29;
    B[3] = 31;
    B[4] = 30;
    B[5] = 31;
    B[6] = 30;
    B[7] = 31;
    B[8] = 31;
    B[9] = 30;
    B[10] = 31;
    B[11] = 30;
    B[12] = 31;
    var r = "";
    var p = "";
    var u = "";
    var s = "";
    var q = "/";
    var t = "";
    var w = "00";
    var v = "0";
    var C = 0;
    if (y.indexOf("-") > 0) {
        q = "-"
    }
    if (y.indexOf(".") > 0) {
        q = "."
    }
    if (x.substring(0, 2) == "dd") {
        s = x.substring(2, 3);
        r = y.substring(0, y.indexOf(q));
        p = y.substring(y.indexOf(q) + 1, y.lastIndexOf(q));
        u = y.substring(y.lastIndexOf(q) + 1, y.length)
    }
    C = 0;
    if (r.length > 0 && r.length <= 2) {
        r = parseInt(r, 10)
    } else {
        C = 1
    }
    if (p.length > 0 && p.length <= 2) {
        p = parseInt(p, 10)
    } else {
        C = 1
    }
    if (u.length < 1 || u.length > 4 || u.length == 3) {
        C = 1
    } else {
        u = parseInt(u, 10)
    }
    if (C == 0) {
        if (u < 100 && u > 40) {
            u += 1900
        }
        if (u < 100 && u <= 40) {
            u += 2000
        }
    }
    if (p < 1 || p > 12) {
        C = 1
    }
    if ((r < 1) || (r > B[p])) {
        C = 1
    }
    if ((p == 2) && (r > (((u % 4 == 0) && (!(u % 100 == 0) || (u % 400 == 0))) ? 29 : 28))) {
        C = 1
    }
    if (C == 1 || isNaN(r) || isNaN(p) || isNaN(u)) {
        return false
    } else {
        r = v + r;
        p = v + p;
        if (x.substring(0, 2) == "dd") {
            t = r.substring(r.length - 2, r.length) + s + p.substring(p.length - 2, p.length) + s + u
        } else {
            if (x.substring(0, 2) == "MM") {
                t = p.substring(p.length - 2, p.length) + s + r.substring(r.length - 2, r.length) + s + u
            } else {
                t = u + s + p.substring(p.length - 2, p.length) + s + r.substring(r.length - 2, r.length)
            }
        }
    }
    return true
}

function emailCheck(N) {
    var y = 1;
    var v = /^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
    var z = /^(.+)@(.+)$/;
    var B = '\\(\\)><@,;:\\\\\\"\\.\\[\\]';
    var G = "[^\\s" + B + "]";
    var L = '("[^"]*")';
    var A = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
    var O = G + "+";
    var C = "(" + O + "|" + L + ")";
    var F = new RegExp("^" + C + "(\\." + C + ")*$");
    var J = new RegExp("^" + O + "(\\." + O + ")*$");
    var M = N.match(z);
    if (M == null) {
        return false
    }
    var x = M[1];
    var w = M[2];
    for (E = 0; E < x.length; E++) {
        if (x.charCodeAt(E) > 127) {
            return false
        }
    }
    for (E = 0; E < w.length; E++) {
        if (w.charCodeAt(E) > 127) {
            return false
        }
    }
    if (x.match(F) == null) {
        return false
    }
    var H = w.match(A);
    if (H != null) {
        for (var E = 1; E <= 4; E++) {
            if (H[E] > 255) {
                return false
            }
        }
        return true
    }
    var I = new RegExp("^" + O + "$");
    var K = w.split(".");
    var D = K.length;
    for (E = 0; E < D; E++) {
        if (K[E].search(I) == -1) {
            return false
        }
    }
    if (y && K[K.length - 1].length != 2 && K[K.length - 1].search(v) == -1) {
        return false
    }
    if (D < 2) {
        return false
    }
    return true
}
var dtCh = "/";
var minYear = 1900;
var maxYear = 2100;

function isInteger(c) {
    var e;
    for (e = 0; e < c.length; e++) {
        var f = c.charAt(e);
        if (((f < "0") || (f > "9"))) {
            return false
        }
    }
    return true
}

function stripCharsInBag(k, j) {
    var c;
    var g = "";
    for (c = 0; c < k.length; c++) {
        var h = k.charAt(c);
        if (j.indexOf(h) == -1) {
            g += h
        }
    }
    return g
}

function daysInFebruary(b) {
    return (((b % 4 == 0) && ((!(b % 100 == 0)) || (b % 400 == 0))) ? 29 : 28)
}

function DaysArray(c) {
    for (var d = 1; d <= c; d++) {
        this[d] = 31;
        if (d == 4 || d == 6 || d == 9 || d == 11) {
            this[d] = 30
        }
        if (d == 2) {
            this[d] = 29
        }
    }
    return this
}

function isDate(p) {
    var k = DaysArray(12);
    var o = p.indexOf(dtCh);
    var q = p.indexOf(dtCh, o + 1);
    var m = p.substring(0, o);
    var l = p.substring(o + 1, q);
    var n = p.substring(q + 1);
    strYr = n;
    if (m.charAt(0) == "0" && m.length > 1) {
        m = m.substring(1)
    }
    if (l.charAt(0) == "0" && l.length > 1) {
        l = l.substring(1)
    }
    for (var j = 1; j <= 3; j++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) {
            strYr = strYr.substring(1)
        }
    }
    month = parseInt(l);
    day = parseInt(m);
    year = parseInt(strYr);
    if (o == -1 || q == -1) {
        alert("Please enter a valid date");
        return false
    }
    if (l.length < 1 || month < 1 || month > 12) {
        alert("Please enter a valid month");
        return false
    }
    if (m.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > k[month]) {
        alert("Please enter a valid day");
        return false
    }
    if (n.length != 4 || year == 0 || year < minYear || year > maxYear) {
        alert("Please enter a valid 4 digit year between " + minYear + " and " + maxYear);
        return false
    }
    if (p.indexOf(dtCh, q + 1) != -1 || isInteger(stripCharsInBag(p, dtCh)) == false) {
        alert("Please enter a valid date");
        return false
    }
    return true
}

function isWhitespace(c) {
    var d = /^[ ]+$/;
    return (d.test(c))
}
var vWinCal = null;

function closeWin() {
    if (vWinCal != null) {
        if (!vWinCal.closed) {
            vWinCal.self.close()
        }
    }
}

function checkGreaterDate(p, q, r) {
    var x = p.value;
    var C = q.value;
    if ((x == "") && (C == "")) {
        return true
    }
    if (((x != "") && (C == "")) || ((x == "") && (C != ""))) {
        alert('Invalid Entry: either enter both "From" and "To" dates or leave both dates blank.');
        if (x == "") {
            p.focus()
        } else {
            q.focus()
        }
        return false
    }
    var A = x.indexOf("/");
    var v = x.lastIndexOf("/");
    var s = x.substr(v + 1);
    var w = x.substring(A + 1, v);
    var z = x.substr(0, A);
    x = w + "/" + z + "/" + s;
    var C = q.value;
    A = C.indexOf("/");
    v = C.lastIndexOf("/");
    var u = C.substr(v + 1);
    var y = C.substring(A + 1, v);
    var B = C.substr(0, A);
    C = y + "/" + B + "/" + u;
    firstDate = Date.parse(x);
    secondDate = Date.parse(C);
    var t = true;
    diff = firstDate - secondDate;
    if (diff > 0) {
        alert("Invalid Entry: 'To' date cannot be earlier than 'From' date.");
        p.focus();
        return false
    }
    return true
}

function checkGreaterDateUserProfile(p, q, r) {
    var x = p.value;
    var C = q.value;
    if ((x == "") && (C == "")) {
        return true
    }
    if (((x != "") && (C == "")) || ((x == "") && (C != ""))) {
        alert('Invalid Entry: either enter both "From" and "To" dates or leave both dates blank.');
        if (x == "") {
            p.focus()
        } else {
            q.focus()
        }
        return false
    }
    var A = x.indexOf("/");
    var v = x.lastIndexOf("/");
    var s = x.substr(v + 1);
    var w = x.substring(A + 1, v);
    var z = x.substr(0, A);
    x = w + "/" + z + "/" + s;
    var C = q.value;
    A = C.indexOf("/");
    v = C.lastIndexOf("/");
    var u = C.substr(v + 1);
    var y = C.substring(A + 1, v);
    var B = C.substr(0, A);
    C = y + "/" + B + "/" + u;
    firstDate = Date.parse(x);
    secondDate = Date.parse(C);
    var t = true;
    diff = firstDate - secondDate;
    if (diff > 0) {
        alert("Validity End Date cannot be earlier than Validity Start Date.");
        p.focus();
        return false
    }
    return true
}

function checkOtherGreaterDate(p, q, r) {
    var x = p.value;
    var C = q.value;
    if (C == "") {
        return true
    }
    var A = x.indexOf("/");
    var v = x.lastIndexOf("/");
    var s = x.substr(v + 1);
    var w = x.substring(A + 1, v);
    var z = x.substr(0, A);
    x = w + "/" + z + "/" + s;
    var C = q.value;
    A = C.indexOf("/");
    v = C.lastIndexOf("/");
    var u = C.substr(v + 1);
    var y = C.substring(A + 1, v);
    var B = C.substr(0, A);
    C = y + "/" + B + "/" + u;
    firstDate = Date.parse(x);
    secondDate = Date.parse(C);
    var t = true;
    diff = secondDate - firstDate;
    if (diff >= 0) {
        return true
    } else {
        alert("Invalid Entry: " + r);
        q.focus();
        return false
    }
}

function checkGreaterDatewithoutdependency(p, q, r) {
    var x = p.value;
    var C = q.value;
    var A = x.indexOf("/");
    var v = x.lastIndexOf("/");
    var s = x.substr(v + 1);
    var w = x.substring(A + 1, v);
    var z = x.substr(0, A);
    x = w + "/" + z + "/" + s;
    var C = q.value;
    A = C.indexOf("/");
    v = C.lastIndexOf("/");
    var u = C.substr(v + 1);
    var y = C.substring(A + 1, v);
    var B = C.substr(0, A);
    C = y + "/" + B + "/" + u;
    firstDate = Date.parse(x);
    secondDate = Date.parse(C);
    var t = true;
    diff = firstDate - secondDate;
    if (diff > 0) {
        alert('"From Date" cannot be greater than "To Date"');
        p.focus();
        return false
    }
    return true
}

function confirmPassword(l, n, m, k, o, h, j) {
    if (l.authpassword.value == "") {
        alert(n);
        l.authpassword.focus();
        l.authpassword.value = "";
        return false
    }
    if ((newcheckspecialChars(l.authpassword))) {
        alert(m);
        l.authpassword.focus();
        l.authpassword.value = "";
        return false
    }
    if ((checkAlphaNumericChars(l.authpassword))) {
        alert(k);
        l.authpassword.focus();
        l.authpassword.value = "";
        return false
    }
    if ((newblankspaceChars(l.authpassword))) {
        alert(o);
        l.authpassword.focus();
        l.authpassword.value = "";
        return false
    }
    if (l.authpassword.value.length > 9) {
        alert(h);
        l.authpassword.focus();
        return false
    }
    if (l.authpassword.value.length < 6) {
        alert(j);
        l.authpassword.focus();
        return false
    }
    return true
}

function checkBoxSelectAll(f, g, h) {
    if (f != null) {
        var j = false;
        var k = f.elements.length;
        for (i = 0; i < k; i++) {
            if (f.elements[i].type == "checkbox") {
                if (f.elements[i].name == g && f.elements[i].checked == true) {
                    j = true;
                    continue
                }
                if (f.elements[i].type == "checkbox" && f.elements[i].name == h && j) {
                    f.elements[i].checked = true
                } else {
                    f.elements[i].checked = false
                }
            }
        }
    }
}

function checkBoxUnSelectAll(d, c) {
    if (c.checked == false && d.checked == true) {
        d.checked = false
    }
}

function ltrim(b) {
    return b.replace(/^\s*/, "")
}

function rtrim(b) {
    return b.replace(/\s*$/, "")
}

function trim(b) {
    return rtrim(ltrim(b))
}

function checkdate_LesserThanToday(h, g, f, k) {
    var j = f;
    if (j.length == 0) {
        return
    } else {
        return validdatelesser(h, g, f, k)
    }
}

function validdatelesser(J, I, E, M) {
    var F = J;
    var u = F.charAt(0);
    dateTwo = E;
    chkdate = I;
    var C = new Date();
    var L = C.getDate();
    var H = C.getMonth() + 1;
    var K = C.getYear() + 1900;
    var x;
    var G;
    var B;
    var A;
    var v;
    var y;
    var w;
    var z;
    var D;
    if (u == "D" || u == "d") {
        x = F.charAt(2);
        G = parseInt(dateTwo.substring(0, dateTwo.indexOf(x)), 10);
        B = parseInt(dateTwo.substring(dateTwo.indexOf(x) + 1, dateTwo.lastIndexOf(x)), 10);
        A = parseInt(dateTwo.substring(dateTwo.lastIndexOf(x) + 1, dateTwo.length), 10);
        D = (A * 10000) + (B * 100) + G;
        v = parseInt(chkdate.substring(0, chkdate.indexOf(x)), 10);
        y = parseInt(chkdate.substring(chkdate.indexOf(x) + 1, chkdate.lastIndexOf(x)), 10);
        w = parseInt(chkdate.substring(chkdate.lastIndexOf(x) + 1, chkdate.length), 10);
        z = (w * 10000) + (y * 100) + v
    }
    if (parseInt(D) < parseInt(z)) {
        alert(M);
        return false
    }
    return true
}

function newcheckspecialPwdChars(f) {
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var h = f.value;
    for (var e = 0; e < h.length; e++) {
        if (!(g.indexOf(h.charAt(e)) != -1)) {
            return true
        }
    }
    return false
}
var message1 = "Sorry, Refresh Function is disabled.\nClick 'OK' to Proceed.";
var message2 = "Sorry, New Window Function is disabled.\nClick 'OK' to Proceed.";
var message3 = "Sorry, BackSpace Function is disabled.\nClick 'OK' to Proceed.";
var message4 = "Sorry, Escape Function is disabled.\nClick 'OK' to Proceed.";
var message5 = "Sorry, Copy Function is disabled.\nClick 'OK' to Proceed.";
var message6 = "Sorry, Paste Function is disabled.\nClick 'OK' to Proceed.";
var message7 = "Sorry, Cut Function is disabled.\nClick 'OK' to Proceed.";
var message8 = "Sorry, Undo Function is disabled.\nClick 'OK' to Proceed.";
var message9 = "Sorry, Save Function is disabled.\nClick 'OK' to Proceed.";
var asciiF5 = 116;
var ctrlR = 114;
var ctrlN = 110;
if (document.all) {
    document.onkeydown = disableF5Key
} else {
    if (document.layers || document.getElementById) {
        document.onkeypress = onKeyPress
    }
}

function onKeyPress(o) {
    var n = (window.event) ? window.event : o;
    var p = n.keyCode ? n.keyCode : n.which ? n.which : void 0;
    var t = n.ctrlKey ? n.ctrlKey : n.which ? n.which : void 0;
    var m = false;
    if (p == asciiF5) {
        m = asciiF5
    }
    if (t == true && p == ctrlR) {
        m = ctrlR
    }
    if (t == true && p == ctrlN) {
        m = ctrlN
    }
    var s = String.fromCharCode(p).toUpperCase();
    var u = (n.target) ? n.target : n.srcElement;
    var w = u.tagName.toLowerCase();
    var q = u.getAttribute("type");
    var v = true;
    if (q != null) {
        q = q.toLowerCase()
    }
    if (m && p != t) {
        v = false
    }
    if (!v) {
        try {
            n.returnValue = false;
            n.cancelBubble = true;
            if (!document.all) {
                n.preventDefault();
                n.stopPropagation()
            }
            if ((p == t) || ((t == true) && (p == 116))) {
                return v
            } else {
                if (p == ctrlN) {
                    alert(message2)
                }
                if ((p == asciiF5 && p != t) || p == ctrlR) {
                    alert(message1)
                }
            }
        } catch (r) {}
    }
    return v
}

function disableF5Key() {
    if (window.event.keyCode == 116) {
        window.event.keyCode = 0;
        event.returnValue = false;
        alert(message1);
        return false
    } else {
        if (window.event.ctrlKey && window.event.keyCode == 82) {
            window.event.keyCode = 0;
            event.returnValue = false;
            alert(message1);
            return false
        } else {
            if (window.event.ctrlKey && window.event.keyCode == 78) {
                window.event.keyCode = 0;
                event.returnValue = false;
                alert(message2);
                return false
            } else {
                if (window.event && window.event.keyCode == 27) {
                    window.event.keyCode = 0;
                    event.returnValue = false;
                    return false
                }
            }
        }
    }
}

function onConfirmAuth() {
    document.onkeypress = onConfirmKeyPress
}

function onConfirmKeyPress(e) {
    var d = (window.event) ? window.event : e;
    var f = d.keyCode ? d.keyCode : d.which ? d.which : void 0;
    if (f == 13) {
        return false
    }
    return true
}

function compareDate(k, n) {
    var h = k.value;
    var l = n.value;
    var m = "/";
    var o = new Array();
    var j = new Array();
    o = h.split(m);
    j = l.split(m);
    if (j[1].length == 1) {
        j[1] = "0" + j[1]
    }
    if (o[1].length == 1) {
        o[1] = "0" + o[1]
    }
    if (j[0].length == 1) {
        j[0] = "0" + j[0]
    }
    if (o[0].length == 1) {
        o[0] = "0" + o[0]
    }
    if (j[2] < o[2]) {
        return false
    }
    if ((j[2] == o[2]) && (j[1] > o[1])) {
        return false
    }
    if ((j[2] == o[2]) && (j[1] == o[1]) && (j[0] > o[0])) {
        return false
    }
    return true
}

function checkGreaterDatewithoutdependencyBillPayments(p, q, r) {
    var x = p.value;
    var C = q.value;
    var A = x.indexOf("/");
    var v = x.lastIndexOf("/");
    var s = x.substr(v + 1);
    var w = x.substring(A + 1, v);
    var z = x.substr(0, A);
    x = w + "/" + z + "/" + s;
    var C = q.value;
    A = C.indexOf("/");
    v = C.lastIndexOf("/");
    var u = C.substr(v + 1);
    var y = C.substring(A + 1, v);
    var B = C.substr(0, A);
    C = y + "/" + B + "/" + u;
    firstDate = Date.parse(x);
    secondDate = Date.parse(C);
    var t = true;
    diff = firstDate - secondDate;
    if ((diff != 0)) {
        if (diff < 0) {
            return false
        }
    }
    return true
}

function is_Date(u, y, D, G, I, v, s) {
    var C = "/";
    var t = 1900;
    var A = 2100;
    var H = DaysArray(12);
    var w = u.indexOf(C);
    var x = u.indexOf(C, w + 1);
    var E = u.substring(0, w);
    var z = u.substring(w + 1, x);
    var F = u.substring(x + 1);
    if (E.length < 2) {
        alert(s);
        return false
    }
    if (z.length < 2) {
        alert(s);
        return false
    }
    if (z.length > 2) {
        alert(s);
        return false
    }
    strYr = F;
    if (E.charAt(0) == "0" && E.length > 1) {
        E = E.substring(1)
    }
    if (z.charAt(0) == "0" && z.length > 1) {
        z = z.substring(1)
    }
    for (var B = 1; B <= 3; B++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) {
            strYr = strYr.substring(1)
        }
    }
    month = parseInt(z);
    day = parseInt(E);
    year = parseInt(strYr);
    if (w == -1 || x == -1) {
        alert(y);
        return false
    }
    if (z.length < 1 || month < 1 || month > 12) {
        alert(D);
        return false
    }
    if (E.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > H[month]) {
        alert(G);
        return false
    }
    if (F.length != 4 || year == 0 || year < t || year > A) {
        alert(I + " " + t + " and " + A);
        return false
    }
    if (u.indexOf(C, x + 1) != -1 || isInteger(stripCharsInBag(u, C)) == false) {
        alert(y);
        return false
    }
    return true
}

function checkGreaterDateTransfer(p, q, r) {
    var x = p.value;
    var C = q.value;
    var A = x.indexOf("/");
    var v = x.lastIndexOf("/");
    var s = x.substr(v + 1);
    var w = x.substring(A + 1, v);
    var z = x.substr(0, A);
    x = w + "/" + z + "/" + s;
    var C = q.value;
    A = C.indexOf("/");
    v = C.lastIndexOf("/");
    var u = C.substr(v + 1);
    var y = C.substring(A + 1, v);
    var B = C.substr(0, A);
    C = y + "/" + B + "/" + u;
    firstDate = Date.parse(x);
    secondDate = Date.parse(C);
    var t = true;
    diff = firstDate - secondDate;
    if ((diff != 0)) {
        if (diff < 0) {
            return false
        }
    }
    return true
}

function getDescDataPreSet(k, m, g, j) {
    for (var l = 0; l < k.length; l++) {
        var h = getSelectedListValue(g);
        if (h == m[l]) {
            j.value = k[l];
            break
        }
    }
    if (0 == g.selectedIndex) {
        j.value = ""
    }
}

function isDateValid(p) {
    var k = DaysArray(12);
    var o = p.indexOf(dtCh);
    var q = p.indexOf(dtCh, o + 1);
    var m = p.substring(0, o);
    var l = p.substring(o + 1, q);
    var n = p.substring(q + 1);
    strYr = n;
    if (m.charAt(0) == "0" && m.length > 1) {
        m = m.substring(1)
    }
    if (l.charAt(0) == "0" && l.length > 1) {
        l = l.substring(1)
    }
    for (var j = 1; j <= 3; j++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) {
            strYr = strYr.substring(1)
        }
    }
    month = parseInt(l);
    day = parseInt(m);
    year = parseInt(strYr);
    if (o == -1 || q == -1) {
        return false
    }
    if (l.length < 1 || month < 1 || month > 12) {
        return false
    }
    if (m.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > k[month]) {
        return false
    }
    if (n.length != 4 || year == 0 || year < minYear || year > maxYear) {
        return false
    }
    if (p.indexOf(dtCh, q + 1) != -1 || isInteger(stripCharsInBag(p, dtCh)) == false) {
        return false
    }
    return true
}
window.onerror = null;
var bName = navigator.appName;
var bVer = parseInt(navigator.appVersion);
var NS4 = (bName == "Netscape" && bVer >= 4);
var IE4 = (bName == "Microsoft Internet Explorer" && bVer >= 4);
var NS3 = (bName == "Netscape" && bVer < 4);
var IE3 = (bName == "Microsoft Internet Explorer" && bVer < 4);
var blink_speed = 500;
var i = 0;
if (NS4 || IE4) {
    if (navigator.appName == "Netscape") {
        layerStyleRef = "layer.";
        layerRef = "document.layers";
        styleSwitch = ""
    } else {
        layerStyleRef = "layer.style.";
        layerRef = "document.all";
        styleSwitch = ".style"
    }
}
window.onerror = null;
var bName = navigator.appName;
var bVer = parseInt(navigator.appVersion);
var NS4 = (bName == "Netscape" && bVer >= 4);
var IE4 = (bName == "Microsoft Internet Explorer" && bVer >= 4);
var NS3 = (bName == "Netscape" && bVer < 4);
var IE3 = (bName == "Microsoft Internet Explorer" && bVer < 4);
var i = 0;
var blink_speed = 500;
if (NS4 || IE4) {
    if (navigator.appName == "Netscape") {
        layerStyleRef = "layer.";
        layerRef = "";
        styleSwitch = ""
    } else {
        layerStyleRef = "layer.style.";
        layerRef = "document.all";
        styleSwitch = ".style"
    }
}

function callBlink(b) {
    i = 0;
    Blink(b)
}

function Blink(layerName) {
    if (IE4) {
        if (i % 2 == 0) {
            eval(layerRef + '["' + layerName + '"]' + styleSwitch + '.visibility="visible"')
        } else {
            eval(layerRef + '["' + layerName + '"]' + styleSwitch + '.visibility="hidden"')
        }
    } else {
        if (NS4) {
            if (i % 2 == 0) {
                document.getElementById(layerName).style.visibility = "hidden"
            } else {
                document.getElementById(layerName).style.visibility = "visible"
            }
        }
    }
    if (NS4) {
        if (i <= 2) {
            setTimeout("Blink('" + layerName + "')", blink_speed);
            i++
        } else {
            setTimeout("Blink('" + layerName + "')", blink_speed)
        }
    } else {
        if (IE4) {
            if (i <= 3) {
                setTimeout("Blink('" + layerName + "')", blink_speed);
                i++
            } else {
                setTimeout("Blink('" + layerName + "')", blink_speed)
            }
        }
    }
}

function comboRemover(e) {
    var d = document.getElementById(e);
    for (var f = (d.length - 1); f >= 0; f--) {
        d.remove(f)
    }
    d.options[0] = new Option();
    d.options[0].text = "";
    d.options[0].value = "";
    return
};