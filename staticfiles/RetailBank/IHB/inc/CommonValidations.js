function IsZero(b) {
    if (parseFloat(b) <= 0) {
        return false
    } else {
        return true
    }
}

function ValidateNumerical(c) {
    if ((c == "") || isNaN(parseFloat(c))) {
        return false
    } else {
        return true
    }
    var d = c.length;
    for (i = 0; i < d; i++) {
        if (c.substring(i, i + 1) != ".") {
            TNum = parseInt(c.substring(i, i + 1), 10);
            if (isNaN(TNum)) {
                break
            }
        }
    }
    if (i < d) {
        return false
    } else {
        return true
    }
}

function IsNumeric(c) {
    var f;
    var r;
    var p;
    var e;
    var b;
    var q;
    var a = 0;
    var s;
    f = ".0123456789";
    p = c;
    for (s = 1; s <= p.length; ++s) {
        e = isNaN(p);
        if (e) {
            b = "Not Ok";
            break
        } else {
            b = "ok";
            for (s = 1; s <= p.length; ++s) {
                r = p.substring(s - 1, s);
                if (r == ".") {
                    a = a + 1
                }
            }
            if (a > 1) {
                b = "Not Ok"
            }
        }
    }
    if (b == "Not Ok") {
        return false
    } else {
        return true
    }
}

function CLTCheckSpecifiedval(b) {
    if (b == "") {
        return false
    } else {
        return true
    }
}

function OptionValidation() {
    var d = 0;
    if (document.forms.standingorderform != null) {
        var c = document.forms.standingorderform.elements.length;
        for (i = 0; i < c; i++) {
            if (document.forms.standingorderform.elements[i].type == "radio" && document.forms.standingorderform.elements[i].name == "radiorefno") {
                if (document.forms.standingorderform.elements[i].checked == true) {
                    d++
                }
            }
        }
        if (d == 0) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

function specialCharctersVal_SI(g) {
    var h = "%@#$^&*()+=[]\\';/{}|\"<> : - ? , !";
    var e = document.forms.standingorderform.txtnarration.value;
    for (var f = 0; f < e.length; f++) {
        if (h.indexOf(e.charAt(f)) != -1) {
            return false
        }
    }
    return true
}

function onClickSaveVal() {
    var d = 0;
    if (document.forms.frmMessageCenter != null) {
        var c = document.forms.frmMessageCenter.elements.length;
        for (i = 0; i < c; i++) {
            if (document.forms.frmMessageCenter.elements[i].type == "checkbox" && document.forms.frmMessageCenter.elements[i].name == "sequenceno") {
                if (document.forms.frmMessageCenter.elements[i].checked == true) {
                    d++
                }
            }
        }
        if (d == 0) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

function validateFrmdate_SI() {
    var k, l, m, g, h, j;
    dt = document.forms.standingorderform.currentdate.value.split("/");
    k = new Date(dt[2], dt[1] - 1, dt[0]);
    dt = document.forms.standingorderform.txtfirstpaydate.value.split("/");
    l = new Date(dt[2], dt[1] - 1, dt[0]);
    if ((l - k) < 0) {
        return false
    } else {
        return true
    }
    j = l - k
}

function validateTodate_SI() {
    var k, l, m, g, h, j;
    dt = document.forms.standingorderform.currentdate.value.split("/");
    k = new Date(dt[2], dt[1] - 1, dt[0]);
    dt = document.forms.standingorderform.txtlastpaydate.value.split("/");
    l = new Date(dt[2], dt[1] - 1, dt[0]);
    if ((l - k) < 0) {
        return false
    } else {
        return true
    }
    j = l - k
}

function GetPay_DD(b) {
    if (b.value == "Now") {
        document.getElementById("div_later").style.display = "none";
        document.forms.ddrequestform.txtLaterDate.value = document.forms.ddrequestform.currentdate.value
    } else {
        if (b.value == "Later") {
            document.getElementById("div_later").style.display = "block";
            document.forms.ddrequestform.txtLaterDate.value = ""
        }
    }
}

function pagesubmit(e, f, d) {
    document.forms[f].action = e;
    document.forms[f].method = "post";
    document.getElementById(d).disabled = true;
    document.getElementById(d).style.color = "#999999";
    document.forms[f].submit()
}

function replaceAll(g, h, k) {
    var j = 0;
    var f = "";
    while (g.indexOf(h, j) != -1) {
        f += g.substring(j, g.indexOf(h, j));
        f += k;
        j = (g.indexOf(h, j) + h.length)
    }
    f += g.substring(j, g.length);
    return f
}

function getDateFormat(f) {
    var d, e;
    e = f.split("/");
    d = new String(e[2] + e[1] + e[0]);
    return d
}

function LTrim(c) {
    var d = /\s*((\S+\s*)*)/;
    return c.replace(d, "$1")
}

function RTrim(c) {
    var d = /((\s*\S+)*)\s*/;
    return c.replace(d, "$1")
}

function trim(b) {
    return LTrim(RTrim(b))
}

function FormatDateField(k) {
    var f = "";
    var g = "";
    var j = "";
    var h = "";
    if (k == "" && k.length < 8) {
        h = ""
    } else {
        f = k.substring(0, 4);
        g = k.substring(4, 6);
        j = k.substring(6, 8);
        h = j + "/" + g + "/" + f
    }
    return h
}

function submitbreadcum(d, c) {
    document.forms[c].action = d;
    document.forms[c].method = "post";
    document.forms[c].submit()
}

function openpopupwindow(d, e, f) {
    window.open(d, e, f)
}

function clearSelectbox(d) {
    var c;
    for (c = d.options.length - 1; c >= 0; c--) {
        d.remove(c)
    }
}

function breadcumsub(d, c) {
    document.forms[c].action = d;
    document.forms[c].method = "post";
    document.forms[c].submit()
}

function checkNumber() {
    if (event.keyCode == 46) {
        return true
    } else {
        if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
            event.keyCode = 0;
            return false
        }
    }
}

function checkTextSpecialCharacter(b) {
    if (!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 48 && event.keyCode <= 57)) && event.keyCode != 32 && event.keyCode != 34 && event.keyCode != 36 && event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 40 && event.keyCode != 41 && event.keyCode != 42 && event.keyCode != 43 && event.keyCode != 44 && event.keyCode != 45 && event.keyCode != 46 && event.keyCode != 47 && event.keyCode != 58 && event.keyCode != 59 && event.keyCode != 63 && event.keyCode != 64 && event.keyCode != 123 && event.keyCode != 125) {
        event.keyCode = 0;
        return false
    }
}

function checkSpecialCharacter(b) {
    if ((event.keyCode > 32 && event.keyCode < 48) || (event.keyCode > 57 && event.keyCode < 65) || (event.keyCode > 90 && event.keyCode < 97)) {
        event.returnValue = false;
        return false
    }
}

function checkenglish(b) {
    if (b.value == "") {
        return
    }
    if (!validateValue(b.value)) {
        alert("Only English Characters are Allowed");
        b.value = "";
        b.focus()
    } else {
        return
    }
}

function checkarabic(b) {
    if (b.value == "") {
        return
    }
    if (validateValue(b.value)) {
        alert("Only Arabic Characters are Allowed");
        b.value = "";
        b.focus()
    } else {
        return
    }
}

function validateValue(c) {
    var d = new RegExp("^[a-zA-Z0-9]");
    return d.test(c)
}

function checkDecimal() {
    if (!(event.keyCode >= 46 && event.keyCode <= 57)) {
        event.keyCode = 0;
        return false
    }
}

function checkDecimals() {
    if (!(event.keyCode >= 45 && event.keyCode <= 57)) {
        event.keyCode = 0;
        return false
    }
}

function checkTextArea(f, d) {
    var e = f.value;
    if (e != "") {
        if (e.length > d) {
            alert("Please Enter the number of Characters less than " + d);
            f.focus()
        }
    }
}

function consecutive_N(k) {
    var h = 1;
    var j = 2;
    var m = 0;
    var l = 0;
    var n = 0;
    for (var o = 0; o < k.length; o++) {
        if (validateNumeric(k.charAt(o))) {
            m = k.charAt(o);
            l = k.charAt(h);
            n = k.charAt(j);
            if (parseInt(m) + 1 == parseInt(l)) {
                if (parseInt(l) + 1 == parseInt(n)) {
                    return false
                }
            }
            h++;
            j++
        } else {
            h++;
            j++
        }
    }
    return true
}

function validateNumeric(c) {
    var d = /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
    return d.test(c)
}

function convert2lower(d) {
    var c = d.value;
    d.value = c.toLowerCase()
}
var msg_box = "This Activity is Disabled";

function dis_rightclickIE() {
    if (navigator.appName == "Microsoft Internet Explorer" && (event.button == 2 || event.button == 3)) {
        return false
    }
}

function dis_rightclickNS(b) {
    if ((document.layers || document.getElementById && !document.all) && (b.which == 2 || b.which == 3)) {
        return false
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = dis_rightclickNS
} else {
    if (document.all && !document.getElementById) {
        document.onmousedown = dis_rightclickIE
    }
}
document.oncontextmenu = new Function("return false");

function exchgFormat(d, c) {
    d = formatNumber(d, c);
    return d
}

function formatNumber(e, h) {
    var f = 1;
    for (i = 1; i <= h; i++) {
        f = f * 10
    }
    var g = (Math.round(e * f) / f).toFixed(h);
    return (g)
}

function limitlength(f, d) {
    var e = d;
    if (f.value.length > e && f.value.indexOf(".") == -1) {
        f.value = f.value.substring(0, e)
    }
}

function AmtfmtNo(h, k) {
    clearDots(h);
    clearCommas(h);
    var f = k;
    var j = h.value;
    var g = formatNumber(j, f);
    h.value = g
}

function extractNumber(r, s, q) {
    var o = r.value;
    var z = "[0-9]*";
    if (s > 0) {
        z += "\\.?[0-9]{0," + s + "}"
    } else {
        if (s < 0) {
            z += "\\.?[0-9]*"
        }
    }
    z = q ? "^-?" + z : "^" + z;
    z = z + "$";
    var v = new RegExp(z);
    if (v.test(o)) {
        return true
    }
    var p = "[^0-9" + (s != 0 ? "." : "") + (q ? "-" : "") + "]";
    var w = new RegExp(p, "g");
    o = o.replace(w, "");
    if (q) {
        var t = o.length > 0 && o.charAt(0) == "-";
        var x = /-/g;
        o = o.replace(x, "");
        if (t) {
            o = "-" + o
        }
    }
    if (s != 0) {
        var y = /\./g;
        var A = y.exec(o);
        if (A != null) {
            var u = o.substring(A.index + A[0].length);
            u = u.replace(y, "");
            u = s > 0 ? u.substring(0, s) : u;
            o = o.substring(0, A.index) + "." + u
        }
    }
    r.value = o
}

function CommaFormatted(o) {
    var q = ",";
    var a = o.split(".", 2);
    var m = a[1];
    var p = parseInt(a[0]);
    if (isNaN(p)) {
        return ""
    }
    var n = "";
    if (p < 0) {
        n = "-"
    }
    p = Math.abs(p);
    var d = new String(p);
    var a = [];
    while (d.length > 3) {
        var l = d.substr(d.length - 3);
        a.unshift(l);
        d = d.substr(0, d.length - 3)
    }
    if (d.length > 0) {
        a.unshift(d)
    }
    d = a.join(q);
    if (m.length < 1) {
        o = d
    } else {
        o = d + "." + m
    }
    o = n + o;
    return o
}

function checkGreaterDatevalidation(k, n) {
    var h = k;
    var l = n;
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
    if ((j[2] == o[2]) && (j[1] < o[1])) {
        return false
    }
    if ((j[2] == o[2]) && (j[1] == o[1]) && (j[0] <= o[0])) {
        return false
    }
    return true
}

function checkfromtodatevalidation(k, n) {
    var h = k;
    var l = n;
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
    if ((j[2] == o[2]) && (j[1] < o[1])) {
        return false
    }
    if ((j[2] == o[2]) && (j[1] == o[1]) && (j[0] < o[0])) {
        return false
    }
    return true
}

function validateOneSpl(b) {}

function checkSpaces(b) {
    if (event.keyCode == 32) {
        event.returnValue = false;
        return false
    }
}

function unicodeEscape(k) {
    if (k.value == "") {
        return ""
    }
    var h = 0;
    var j = "";
    var f;
    var g = escape(k.value);
    while (h < g.length) {
        f = g.substr(h, 1);
        if (f == "%") {
            strNextChar = g.substr(h + 1, 1);
            if (strNextChar == "u") {
                j += g.substr(h, 6);
                h += 6
            } else {
                j += "%u00" + g.substr(h + 1, 2);
                h += 3
            }
        } else {
            j += f;
            h++
        }
    }
    j = j.replace(/%u/g, "\\");
    return j
}

function checkBlankSpace(b) {
    while (b.substring(0, 1) == " ") {
        b = b.substring(1, b.length)
    }
    while (b.substring(b.length - 1, b.length) == " ") {
        b = b.substring(0, b.length - 1)
    }
    return trim(b)
}

function clearDots(h) {
    var j = ".";
    var k = h.value;
    var f = 0;
    for (var g = 0; g < k.length; g++) {
        if (k.charAt(g) == j) {
            f = parseInt(f) + 1
        }
    }
    if (f > 1) {
        h.value = ""
    }
    return h.value
}

function clearCommas(g) {
    var h = ",";
    var e = g.value;
    for (var f = 0; f < e.length; f++) {
        if (e.charAt(f) == h) {
            g.value = ""
        }
    }
    return g.value
}

function padZeros1(j, l) {
    var g = j.toString();
    var m = g.indexOf(".");
    if (m == -1) {
        decimalLen = 0;
        g += l > 0 ? "." : ""
    } else {
        decimalLen = g.length - m - 1
    }
    var k = l - decimalLen;
    if (k > 0) {
        for (var h = 1; h <= k; h++) {
            g += "0"
        }
    }
    return g
}
document.onkeydown = function() {
    if (window.event) {
        if (window.event.keyCode == 8) {
            var n = window.event.srcElement;
            var k = n.tagName ? n.tagName.toUpperCase() : "";
            var p = (k == "INPUT") ? n.type.toUpperCase() : "";
            var o = (k == "TEXTAREA");
            var q = ((k == "INPUT") || (p == "TEXT") || (p == "PASSWORD"));
            var l = q || o;
            var j = l ? n.disabled : false;
            var m = l ? n.readOnly : false;
            if (!l || j || m) {
                window.event.cancelBubble = true;
                window.event.returnValue = false;
                return false
            }
        }
    }
};

function checkNumberMoi() {
    if ((event.keyCode >= 48 && event.keyCode <= 57)) {
        return true
    } else {
        event.keyCode = 0;
        return false
    }
}

function checkAlbhabet() {
    if ((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 65 && event.keyCode <= 90)) {
        return true
    } else {
        event.keyCode = 0;
        return true
    }
}

function removeSpecialCharacters(d) {
    var c = d.value;
    d.value = c.replace(/[^a-zA-Z 0-9]+/g, "")
}

function checkGreaterDatevalidate(x, y) {
    var r = x;
    var s = y;
    if (r != "" && s != "") {
        var u = parseInt(r.substring(0, 2), 10);
        var t = parseInt(r.substring(3, 5), 10);
        var p = parseInt(r.substring(6, 10), 10);
        var w = parseInt(s.substring(0, 2), 10);
        var v = parseInt(s.substring(3, 5), 10);
        var q = parseInt(s.substring(6, 10), 10);
        var n = new Date(p, t, u);
        var o = new Date(q, v, w);
        if (o < n) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}

function checkNotLessDatevalidation(x, y) {
    var r = x;
    var s = y;
    if (r != "" && s != "") {
        var u = parseInt(r.substring(0, 2), 10);
        var t = parseInt(r.substring(3, 5), 10);
        var p = parseInt(r.substring(6, 10), 10);
        var w = parseInt(s.substring(0, 2), 10);
        var v = parseInt(s.substring(3, 5), 10);
        var q = parseInt(s.substring(6, 10), 10);
        var n = new Date(p, t, u);
        var o = new Date(q, v, w);
        if (o < n) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}

function accountnumberdropdown(s, o, l, m) {
    var q = "";
    var r = "";
    var k;
    var p;
    for (p = 1; p <= s.length; p++) {
        if ((p % 2) == 0) {
            q = s.substring(k, p);
            k = p;
            if (r != "") {
                r = r + q
            } else {
                r = q
            }
        }
    }
    var n = "";
    if (m == "en_US") {
        if (o != null || o != "") {
            n = s + "-" + o
        } else {
            n = r
        }
        return n
    } else {
        if (o != null || o != "") {
            n = o + "-" + s
        } else {
            n = s
        }
        return n
    }
}

function padZeros(g, h) {
    var f = "";
    var e = f.indexOf(".");
    if (e == -1) {
        f = g.toFixed(h)
    } else {
        f = g.toPrecision(h)
    }
    return f
}

function creditcardnodropdown(m, p, l, n) {
    var r = "";
    var s = "";
    var k;
    var q;
    for (q = 1; q <= m.length; q++) {
        if ((q % 4) == 0) {
            r = m.substring(k, q);
            k = q;
            if (s != "") {
                s = s + "-" + r
            } else {
                s = r
            }
        }
    }
    var o = "";
    if (n == "en_US") {
        if (p != null || p != "") {
            o = s + "-" + p
        } else {
            o = s
        }
        return o
    } else {
        if (p != null || p != "") {
            o = p + "-" + s
        } else {
            o = s
        }
        return o
    }
}

function chkEnterKey(b) {
    if (window.event) {
        b = window.event
    }
    if (b.keyCode == 13) {
        return false
    }
}

function check_password_st(n, r, t) {
    var q = t.value;
    document.getElementById(r).innerHTML = "Very Weak";
    document.getElementById(n).style.width = "50px";
    document.getElementById(n).style.background = "#F52887";
    var p = /^[a-z]+$/;
    var u = /^[A-Z]+$/;
    var v = /^[0-9]+$/;
    var x = /^[a-zA-Z]+$/;
    var y = /^[a-z0-9]+$/;
    var o = /^[A-Z0-9]+$/;
    var w = /^[a-zA-Z0-9]+$/;
    if (q.length >= 7) {
        document.getElementById(n).style.width = "100px";
        document.getElementById(n).style.background = "#CA226B";
        document.getElementById(r).innerHTML = "Weak";
        if (!q.match(p) && !q.match(u) && !q.match(v)) {
            document.getElementById(n).style.width = "150px";
            document.getElementById(n).style.background = "#1589FF";
            document.getElementById(r).innerHTML = "Fair";
            if (!q.match(x) && !q.match(y) && !q.match(o)) {
                document.getElementById(n).style.width = "210px";
                document.getElementById(n).style.background = "#347C17";
                document.getElementById(r).innerHTML = "Strong"
            }
        }
    }
    var s = q.indexOf(1)
}

function decimalformat(g, h) {
    var f = "";
    g = parseFloat(g);
    var e = f.indexOf(".");
    if (e == -1) {
        f = g.toFixed(h)
    } else {
        f = g.toPrecision(h)
    }
    return f
}

function allowMaxLength(c, d) {
    return (c.value.length <= d)
};