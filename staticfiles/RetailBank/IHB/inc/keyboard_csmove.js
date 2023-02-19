var myForm = null;
var vertical_position = "bottom";
var horizontal_position = "right";
var visible = false;
var overButton = false;
var field = null;
var myArray = new Array();
var keyboardFlag = "small";
var alertFieldId;
var vkbFillElementSize;
var focusKey;
var moveflag = false;
var vkbName = "largevkb";
var vkbShimName = "largevkbShim";
var curr_LeftPosition;
var curr_HeightPosition;
var initialize = false;
var vkbForm;
var myBrowser;
var ieOnWindows = true;
var largeMap = "largevkb",
    largeMapShim = "largevkbShim";
var smallMap = "vkb",
    smallMapShim = "vkbShim";
var compKBDisabled, keyTrapped;

function BrowserType() {
    var b = navigator.userAgent;
    this.isIE = false;
    this.isNS = false;
    this.version = null;
    if (b.indexOf("MSIE") >= 0) {
        this.isIE = true;
        return
    }
    if (b.indexOf("Netscape6/") >= 0) {
        this.isNS = true;
        return
    }
    if (b.indexOf("Gecko") >= 0) {
        this.isNS = true;
        return
    }
}
myBrowser = new BrowserType();

function done(b) {
    hideVkb(b);
    if ((focusKey == "userId1") || (focusKey == "newid") || (focusKey == "password1")) {
        compKBDisabled = false
    }
}

function keyDown(c) {
    if (compKBDisabled) {
        var d;
        if (myBrowser.isIE) {
            d = event.keyCode
        }
        if ((d == 17) || (d == 8)) {
            keyTrapped = true;
            return false
        }
    }
}

function keyPress(c) {
    if (compKBDisabled) {
        var d;
        if (myBrowser.isIE) {
            d = event.keyCode
        } else {
            if (myBrowser.isNS) {
                d = c.which
            } else {
                if (ns4) {
                    d = c.which;
                    if (d == prevKey) {
                        d = 0;
                        prevKey = -100
                    } else {
                        prevKey = d
                    }
                }
            }
        }
        if (d != 0 && d != 17 && d != 8) {
            keyTrapped = true;
            alert(keypressError);
            return false
        }
    }
}

function showCursor(b) {
    if (b == "hand") {
        overButton = true
    } else {
        overButton = false
    }
    if (navigator.appName != "Netscape") {
        accessLayer(vkbName).cursor = b
    }
}

function add(val) {
    if (keyTrapped) {
        keyTrapped = false;
        return
    }
    var elPtr;
    var i = 0;
    var foundField = false;
    if (foundField == false) {
        elPtr = eval(vkbFillElement);
        if (elPtr) {
            var focusValue = new String(elPtr.value);
            if (focusValue.length < vkbFillElementSize) {
                elPtr.value = focusValue + val
            } else {}
            foundField = true
        }
    }
    if (foundField == false) {
        alert(focusError)
    }
}

function del(val) {
    var elPtr;
    var i = 0;
    var foundField = false;
    if (foundField == false) {
        elPtr = eval(vkbFillElement);
        if (elPtr) {
            var focusValue = new String(elPtr.value);
            if (focusValue.length > 0) {
                focusValue = focusValue.substring(0, focusValue.length - 1);
                elPtr.value = focusValue
            }
            foundField = true
        }
    }
    if (foundField == false) {
        alert(focusError)
    }
}

function clear(val) {
    var elPtr;
    elPtr = eval(vkbFillElement);
    elPtr.value = ""
}
var origMouseX, origMouseY;
var myObj = new Object();

function startdrag(c, d) {
    if (overButton) {
        return false
    }
    if (d) {
        if (document.getElementById) {
            myObj.elNode = document.getElementById(d)
        } else {
            if (document.all) {
                myObj.elNode = document.all[d]
            }
        }
    } else {
        if (myBrowser.isIE) {
            myObj.elNode = window.event.srcElement
        } else {
            if (myBrowser.isNS) {
                myObj.elNode = c.target
            }
        }
    }
    if (myBrowser.isIE) {
        origMouseX = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        origMouseY = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop
    }
    if (myBrowser.isNS) {
        origMouseX = c.clientX + window.scrollX;
        origMouseY = c.clientY + window.scrollY
    }
    myObj.cursorStartX = origMouseX;
    myObj.cursorStartY = origMouseY;
    myObj.elStartLeft = parseInt(myObj.elNode.style.left);
    myObj.elStartTop = parseInt(myObj.elNode.style.top);
    if (myBrowser.isIE) {
        document.attachEvent("onmousemove", dragit);
        document.attachEvent("onmouseup", stopdrag);
        window.event.cancelBubble = true;
        window.event.returnValue = false
    }
    if (myBrowser.isNS) {
        document.addEventListener("mousemove", dragit, true);
        document.addEventListener("mouseup", stopdrag, true);
        c.preventDefault()
    }
}

function dragit(f) {
    var d, e;
    if (myBrowser.isIE) {
        d = window.event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        e = window.event.clientY + document.documentElement.scrollTop + document.body.scrollTop
    }
    if (myBrowser.isNS) {
        d = f.clientX + window.scrollX;
        e = f.clientY + window.scrollY
    }
    curr_LeftPosition = (myObj.elStartLeft + d - myObj.cursorStartX);
    curr_HeightPosition = (myObj.elStartTop + e - myObj.cursorStartY);
    curr_LeftPosition = curr_LeftPosition < 0 ? 0 : curr_LeftPosition;
    curr_HeightPosition = curr_HeightPosition < 0 ? 0 : curr_HeightPosition;
    if (ieOnWindows) {
        accessLayer(vkbShimName).left = curr_LeftPosition;
        accessLayer(vkbShimName).top = curr_HeightPosition
    }
    myObj.elNode.style.left = curr_LeftPosition;
    myObj.elNode.style.top = curr_HeightPosition;
    moveflag = true;
    if (myBrowser.isIE) {
        window.event.cancelBubble = true;
        window.event.returnValue = false
    } else {
        if (myBrowser.isNS) {
            f.preventDefault()
        }
    }
}

function stopdrag(b) {
    if (myBrowser.isIE) {
        document.detachEvent("onmousemove", dragit);
        document.detachEvent("onmouseup", stopdrag)
    }
    if (myBrowser.isNS) {
        document.removeEventListener("mousemove", dragit, true);
        document.removeEventListener("mouseup", stopdrag, true)
    }
}

function check_cookies(d) {
    var c = getCookie(d);
    if ((c != "large") && (c != "small")) {
        c = "small"
    }
    keyboardFlag = c;
    if (c = "large") {
        vkbName = largeMap;
        vkbShimName = largeMapShim
    } else {
        vkbName = smallMap;
        vkbShimName = smallMapShim
    }
}

function getexpirydate(c) {
    var d;
    Today = new Date();
    nomilli = Date.parse(Today);
    Today.setTime(nomilli + c * 24 * 60 * 60 * 1000);
    d = Today.toUTCString();
    return d
}

function set_cookie(e, d, f) {
    cookiestring = e + "=" + escape(d) + ";EXPIRES=" + getexpirydate(f);
    document.cookie = cookiestring;
    if (!getCookie(e)) {
        return false
    } else {
        return true
    }
}
var global_availWidth;
var global_availHeight;
var global_LeftPosition;
var global_HeightPosition;

function fixinit_size() {
    var i;
    var h;
    var g;
    var j;
    var k = "false";
    var l = "false";
    global_availWidth = document.body.clientWidth;
    global_availHeight = document.body.clientHeight;
    if (keyboardFlag == "small") {
        if (screen.width <= 800) {
            if (myBrowser.isIE) {
                g = global_availWidth - (490);
                j = global_availWidth - (470);
                i = global_availHeight / 4;
                h = global_availHeight / 3
            } else {
                g = global_availWidth - (150);
                j = global_availWidth - (140);
                i = global_availHeight - 200;
                h = global_availHeight - 150
            }
            global_LeftPosition = Math.floor(Math.random() * (1 + j - g) + g);
            global_HeightPosition = Math.floor(Math.random() * (1 + h - i) + i)
        } else {
            if (myBrowser.isIE) {
                g = global_availWidth - (500);
                j = global_availWidth - (450);
                i = global_availHeight / 4;
                h = global_availHeight / 3
            } else {
                g = global_availWidth - (250);
                j = global_availWidth - (200);
                i = global_availHeight / 2;
                h = global_availHeight / 1.8
            }
            global_LeftPosition = Math.floor(Math.random() * (1 + j - g) + g);
            global_HeightPosition = Math.floor(Math.random() * (1 + h - i) + i)
        }
    } else {
        if (screen.width <= 800) {
            if (myBrowser.isIE) {
                g = global_availWidth - (490);
                j = global_availWidth - (470);
                i = global_availHeight / 4;
                h = global_availHeight / 3
            } else {
                g = global_availWidth - (150);
                j = global_availWidth - (140);
                i = global_availHeight - 200;
                h = global_availHeight - 150
            }
            global_LeftPosition = Math.floor(Math.random() * (1 + j - g) + g);
            global_HeightPosition = Math.floor(Math.random() * (1 + h - i) + i)
        } else {
            if (myBrowser.isIE) {
                g = global_availWidth - (500);
                j = global_availWidth - (450);
                i = global_availHeight / 4;
                h = global_availHeight / 3
            } else {
                g = global_availWidth - (250);
                j = global_availWidth - (200);
                i = global_availHeight / 2;
                h = global_availHeight / 1.8
            }
            global_LeftPosition = Math.floor(Math.random() * (1 + j - g) + g);
            global_HeightPosition = Math.floor(Math.random() * (1 + h - i) + i)
        }
    }
    if ((global_LeftPosition >= g) && (global_LeftPosition <= j)) {
        global_availWidth = global_LeftPosition;
        l = "true"
    } else {
        l = "false"
    }
    if ((global_HeightPosition >= i) && (global_HeightPosition <= h)) {
        global_availHeight = global_HeightPosition;
        k = "true"
    } else {
        k = "false"
    }
    if (keyboardFlag == "small") {
        if (screen.width <= 800) {
            if (l == "false") {
                if (myBrowser.isIE) {
                    global_availWidth = global_availWidth - (470)
                } else {
                    global_availWidth = global_availWidth - (150)
                }
            }
            if (k == "false") {
                if (myBrowser.isIE) {
                    global_availHeight = global_availHeight / 4
                } else {
                    global_availHeight = global_availHeight - 200
                }
            }
        } else {
            if (l == "false") {
                if (myBrowser.isIE) {
                    global_availWidth = global_availWidth - (450)
                } else {
                    global_availWidth = global_availWidth - (450)
                }
            }
            if (k == "false") {
                if (myBrowser.isIE) {
                    global_availHeight = global_availHeight / 3
                } else {
                    global_availHeight = global_availHeight / 1.8
                }
            }
        }
    } else {
        if (screen.width <= 800) {
            if (l == "false") {
                if (myBrowser.isIE) {
                    global_availWidth = global_availWidth - (450)
                } else {
                    global_availWidth = global_availWidth - (140)
                }
            }
            if (k == "false") {
                if (myBrowser.isIE) {
                    global_availHeight = global_availHeight / 2
                } else {
                    global_availHeight = global_availHeight - 150
                }
            }
        } else {
            if (l == "false") {
                if (myBrowser.isIE) {
                    global_availWidth = global_availWidth - (500)
                } else {
                    global_availWidth = global_availWidth - (200)
                }
            }
            if (k == "false") {
                if (myBrowser.isIE) {
                    global_availHeight = global_availHeight / 4
                } else {
                    global_availHeight = global_availHeight / 1.8
                }
            }
        }
    }
    initialize = true
}

function showVkb(c) {
    var d = document.getElementById("btn_container");
    d.style.display = "block";
    if ((focusKey == "userId1") || (focusKey == "newid") || (focusKey == "password1")) {
        compKBDisabled = false
    } else {
        compKBDisabled = true
    }
    fixinit_size();
    if (compKBDisabled) {
        c.onkeypress = keyPress;
        c.onkeydown = keyDown
    }
    if (keyboardFlag == "large") {
        showVkbLarge(c)
    } else {
        vkbName = smallMap;
        vkbShimName = smallMapShim;
        showVkbSmall(c)
    }
}

function showVkbSmall(j) {
    vkbFillElement = j;
    var h;
    var g;
    var f = accessLayer(vkbName);
    if (f.visibility == "visible") {
        return
    }
    if (!moveflag) {
        h = global_availWidth;
        g = global_availHeight;
        if (myBrowser.isIE && f) {
            if (screen.width <= 800) {
                if (horizontal_position == "middle") {
                    f.left = h / 3
                } else {
                    if (horizontal_position == "left") {
                        f.left = 0
                    } else {
                        f.left = h
                    }
                }
            } else {
                f.left = h
            }
            if (screen.height <= 600 || g <= 500) {
                f.top = g
            } else {
                f.top = g
            }
        } else {
            if (myBrowser.isNS && f) {
                if (screen.width <= 800) {
                    if (horizontal_position == "middle") {
                        f.left = h / 3
                    } else {
                        if (horizontal_position == "left") {
                            f.left = 0
                        } else {
                            f.left = h - 255
                        }
                    }
                } else {
                    f.left = h - 255
                }
                if (screen.height <= 600 || g <= 500) {
                    f.top = g - 140
                } else {
                    f.top = g / 2
                }
            }
        }
    } else {
        f.left = curr_LeftPosition;
        f.top = curr_HeightPosition
    }
    if (f) {
        if (ieOnWindows) {
            var i = accessLayer(vkbShimName);
            if (i) {
                i.top = f.top;
                i.left = f.left;
                i.visibility = "visible";
                i.zIndex = 99
            }
        }
        f.visibility = "visible";
        f.zIndex = 100
    }
}

function showVkbLarge(j) {
    vkbFillElement = j;
    var h;
    var g;
    var f = accessLayer(vkbName);
    if (f.visibility == "visible") {
        return
    }
    if (!moveflag) {
        h = global_availWidth;
        g = global_availHeight;
        if (myBrowser.isIE && f) {
            if (screen.width <= 800) {
                if (horizontal_position == "middle") {
                    f.left = h / 3
                } else {
                    if (horizontal_position == "left") {
                        f.left = 0
                    } else {
                        f.left = h
                    }
                }
            } else {
                f.left = h
            }
            if (screen.height <= 600 || g <= 500) {
                f.top = g
            } else {
                f.top = g
            }
        } else {
            if (myBrowser.isNS && f) {
                if (screen.width <= 800) {
                    if (horizontal_position == "middle") {
                        f.left = h / 3
                    } else {
                        if (horizontal_position == "left") {
                            f.left = 0
                        } else {
                            f.left = h - 255
                        }
                    }
                } else {
                    f.left = h - 255
                }
                if (screen.height <= 600 || g <= 500) {
                    f.top = g - 140
                } else {
                    f.top = g / 2
                }
            }
        }
    } else {
        f.left = curr_LeftPosition;
        f.top = curr_HeightPosition
    }
    if (f) {
        if (ieOnWindows) {
            var i = accessLayer(vkbShimName);
            if (i) {
                i.top = f.top;
                i.left = f.left;
                i.visibility = "visible";
                i.zIndex = 100
            }
        }
        f.visibility = "visible";
        f.zIndex = 100
    }
}

function hideVkb(c) {
    var d = document.getElementById("btn_container");
    d.style.display = "none";
    if (keyboardFlag == "large") {
        hideVkbLarge(c)
    } else {
        vkbName = smallMap;
        vkbShimName = smallMapShim;
        hideVkbSmall(c)
    }
    c.value = ""
}

function hideVkbSmall(d) {
    delete d;
    vkbFillElement = "";
    var e = accessLayer(vkbName);
    if (ieOnWindows) {
        var f = accessLayer(vkbShimName);
        if (f) {
            f.visibility = "hidden";
            f.zIndex = -1
        }
    }
    if (e) {
        e.visibility = "hidden";
        e.zIndex = -1
    }
    delete e
}

function hideVkbLarge(d) {
    vkbFillElement = "";
    var e = accessLayer(vkbName);
    if (ieOnWindows) {
        var f = accessLayer(vkbShimName);
        if (f) {
            f.visibility = "hidden";
            f.zIndex = -1
        }
    }
    if (e) {
        e.visibility = "hidden";
        e.zIndex = -1
    }
}

function smallkeyboard(c) {
    hideVkb(c);
    keyboardFlag = "small";
    vkbName = smallMap;
    vkbShimName = smallMapShim;
    set_cookie("capp_keyboard", keyboardFlag, 2);
    var d = null;
    if (focusKey == "password") {
        d = vkbForm.password
    } else {
        if (focusKey == "pwd") {
            d = vkbForm.pwd
        } else {
            if (focusKey == "passwordConfirm") {
                d = vkbForm.passwordConfirm
            } else {
                if (focusKey == "currentPassword") {
                    d = vkbForm.currentPassword
                } else {
                    if (focusKey == "pin") {
                        d = vkbForm.pin
                    } else {
                        if (focusKey == "secretAnswer1") {
                            d = vkbForm.secretAnswer1
                        } else {
                            if (focusKey == "secretAnswer2") {
                                d = vkbForm.secretAnswer2
                            } else {
                                if (focusKey == "oldPin") {
                                    d = vkbForm.oldPin
                                } else {
                                    if (focusKey == "newPin") {
                                        d = vkbForm.newPin
                                    } else {
                                        if (focusKey == "renewPin") {
                                            d = vkbForm.renewPin
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    alertFieldId = d;
    showVkb(d);
    focusId = "1"
}

function largekeyboard(c) {
    hideVkb(c);
    keyboardFlag = "large";
    vkbName = largeMap;
    vkbShimName = largeMapShim;
    set_cookie("capp_keyboard", keyboardFlag, 2);
    var d = null;
    if (focusKey == "password") {
        d = vkbForm.password
    } else {
        if (focusKey == "pwd") {
            d = vkbForm.pwd
        } else {
            if (focusKey == "passwordConfirm") {
                d = vkbForm.passwordConfirm
            } else {
                if (focusKey == "currentPassword") {
                    d = vkbForm.currentPassword
                } else {
                    if (focusKey == "pin") {
                        d = vkbForm.pin
                    } else {
                        if (focusKey == "secretAnswer1") {
                            d = vkbForm.secretAnswer1
                        } else {
                            if (focusKey == "secretAnswer2") {
                                d = vkbForm.secretAnswer2
                            } else {
                                if (focusKey == "oldPin") {
                                    d = vkbForm.oldPin
                                } else {
                                    if (focusKey == "newPin") {
                                        d = vkbForm.newPin
                                    } else {
                                        if (focusKey == "renewPin") {
                                            d = vkbForm.renewPin
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    alertFieldId = d;
    showVkb(d);
    focusId = "1"
}

function accessLayer(b) {
    if (document.getElementById && document.getElementById(b)) {
        return document.getElementById(b).style
    } else {
        if (document.all && document.all[b]) {
            return document.all[b].style
        } else {
            if (document.layers && document.layers[b]) {
                return document.layers[b]
            }
        }
    }
}

function space(val) {
    var elPtr;
    var i = 0;
    var foundField = false;
    if (foundField == false) {
        elPtr = eval(vkbFillElement);
        if (elPtr) {
            var focusValue = new String(elPtr.value);
            focusValue = focusValue + " ";
            elPtr.value = focusValue;
            foundField = true
        }
    }
    if (foundField == false) {
        alert(focusError)
    }
}

function changeGif(b) {
    document.gif.src = b
}

function changeGif1(b) {
    document.gif1.src = b
}

function changeGif2(b) {
    document.gif2.src = b
}

function changeGif3(b) {
    document.gif3.src = b
}

function changeGif4(b) {
    document.gif4.src = b
}
var b_timer = null;
var b_on = true;
var blnkrs = new Array();
var b_count = 0;
var blink_x = 0;
var blink_y = 0;

function blink(f, e) {
    blink_x = 0;
    blink_y = 0;
    var d = document.getElementById(e).className;
    if (d == "alp_btn") {
        document.getElementById(e).className = "blink";
        blnkrs[b_count] = d;
        ++b_count
    }
    ticToc(f, e)
}

function ticToc(f, e) {
    if (blink_x == 0) {
        blink_x = 1;
        blink_y++;
        document.getElementById(e).style.visibility = "visible"
    } else {
        blink_x = 0;
        blink_y++;
        document.getElementById(e).style.visibility = "hidden"
    }
    if (blink_y <= 10) {
        var d = function() {
            ticToc(f, e)
        };
        setTimeout(d, 500);
        return
    }
    document.getElementById(e).style.visibility = "visible";
    if (overButton && blink_y == 11) {
        document.getElementById(e).style.visibility = "visible";
        add(f)
    }
    doShowblinkKeys()
};