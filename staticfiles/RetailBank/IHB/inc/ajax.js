function xmlRequest(h, i, l) {
    var e = false;
    try {
        e = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (j) {
        try {
            e = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (k) {
            e = false
        }
    }
    if (!e && typeof XMLHttpRequest != "undefined") {
        e = new XMLHttpRequest()
    }
    e.open("POST", h, true);
    e.onreadystatechange = function() {
        try {
            alert("xmlhttp.status" + e.status);
            if (e.readyState == 4 || e.readyState == "complete") {
                if (e.status == 200) {
                    alert("xmlhttp.status" + e.status);
                    l(e.responseText, e.responseXML)
                }
            }
        } catch (a) {}
    };
    e.send(i)
}

function xmlRequest(e, j, m, i) {
    var n = false;
    try {
        n = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (k) {
        try {
            n = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (l) {
            n = false
        }
    }
    if (!n && typeof XMLHttpRequest != "undefined") {
        n = new XMLHttpRequest()
    }
    n.open("POST", e, true);
    n.onreadystatechange = function() {
        try {
            if (n.readyState == 4 || n.readyState == "complete") {
                if (n.status == 200) {
                    m(n.responseText, n.responseXML, i)
                }
            }
        } catch (a) {}
    };
    n.send(j)
}

function GetTagValues_Ajax(b, g) {
    var h = null;
    h = b.getElementsByTagName(g);
    var i = new Array();
    if (h != null) {
        for (var j = 0; j < h.length; j++) {
            if ((h.item(j).childNodes.length) <= 0) {
                i[j] = ""
            } else {
                i[j] = h.item(j).firstChild.nodeValue
            }
        }
    }
    return i
}

function GetTagSingleValue_Ajax(b, g) {
    var h = null;
    h = b.getElementsByTagName(g);
    var f = "";
    if (h != null) {
        if (h.length > 0) {
            if ((h.item(0).childNodes.length) <= 0) {
                f = ""
            } else {
                f = h.item(0).firstChild.nodeValue
            }
        } else {
            f = ""
        }
    }
    return f
}

function xmlRequestSynchronous(a, g, c) {
    var b = false;
    try {
        b = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (f) {
        try {
            b = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (d) {
            b = false
        }
    }
    if (!b && typeof XMLHttpRequest != "undefined") {
        b = new XMLHttpRequest()
    }
    b.open("POST", a, false);
    b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    b.send(g);
    c(b.responseText, b.responseXML)
};