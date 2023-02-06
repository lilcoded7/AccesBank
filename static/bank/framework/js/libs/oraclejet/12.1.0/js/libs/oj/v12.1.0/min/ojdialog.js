/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojpopupcore", "ojs/ojbutton", "jqueryui-amd/widgets/mouse", "jqueryui-amd/widgets/draggable", "jquery", "ojs/ojcore-base", "ojs/ojdomutils", "ojs/ojthemeutils", "ojs/ojcomponentcore", "ojs/ojanimation", "ojs/ojfocusutils", "ojs/ojcustomelement-utils", "ojs/ojconfig"], function(e, t, i, s, o, n, l, r, a, h, d, u, c) {
    "use strict";
    var p, g, f, m;
    o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d, o.widget("oj.ojResizable", {
        version: "1.0.0",
        widgetEventPrefix: "oj",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(e) {
            return parseInt(e, 10) || 0
        },
        _isNumber: function(e) {
            return !isNaN(parseInt(e, 10))
        },
        _hasScroll: function(e, t) {
            var i = e;
            if ("hidden" === o(i).css("overflow")) return !1;
            var s, n = t && "left" === t ? "scrollLeft" : "scrollTop";
            return i[n] > 0 || (i[n] = 1, s = i[n] > 0, i[n] = 0, s)
        },
        _create: function() {
            var e, t, i, s;
            this._super();
            var n = this,
                l = this.options,
                r = this.element.mouse.bind(this.element);
            if (r(), this.mouse = r("instance"), this.mouse._mouseCapture = function(e) {
                    return n._mouseCapture(e)
                }, this.mouse._mouseStart = function(e) {
                    return n._mouseStart(e)
                }, this.mouse._mouseDrag = function(e) {
                    return n._mouseDrag(e)
                }, this.mouse._mouseStop = function(e) {
                    return this.element && this.element.focus(), n._mouseStop(e)
                }, this.element.addClass("oj-resizable"), o.extend(this, {
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: null
                }), this._initialResize = !0, this.handles = l.handles || (o(".oj-resizable-handle", this.element).length ? {
                    n: ".oj-resizable-n",
                    e: ".oj-resizable-e",
                    s: ".oj-resizable-s",
                    w: ".oj-resizable-w",
                    se: ".oj-resizable-se",
                    sw: ".oj-resizable-sw",
                    ne: ".oj-resizable-ne",
                    nw: ".oj-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, t = 0; t < e.length; t++) i = o.trim(e[t]), s = o("<div class='oj-resizable-handle oj-resizable-" + i + "'></div>"), this.handles[i] = ".oj-resizable-" + i, this.element.append(s);
            var a = Object.keys(this.handles);
            for (t = 0; t < a.length; t++) {
                var h = a[t];
                this.handles[h].constructor === String && (this.handles[h] = this.element.children(this.handles[h]).first().show())
            }
            this._handles = o(".oj-resizable-handle", this.element), this._handles.mouseover(function() {
                n.resizing || (this.className && (s = this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)), n.axis = s && s[1] ? s[1] : "se")
            }), this.mouse._mouseInit()
        },
        _destroy: function() {
            this.mouse && this.mouse._mouseDestroy();
            try {
                this.mouse.destroy(), this.mouse = null
            } catch (e) {}
            var e;
            return e = this.originalElement, o(e).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove(), this
        },
        _mouseCapture: function(e) {
            for (var t = !1, i = Object.keys(this.handles), s = 0; s < i.length; s++) {
                var n = o(this.handles[i[s]])[0];
                (n === e.target || o.contains(n, e.target)) && (t = !0)
            }
            return !this.options.disabled && t
        },
        _mouseStart: function(e) {
            var t, i, s, n = this.options,
                l = this.element.position(),
                r = this.element;
            return this.resizing = !0, /absolute/.test(r.css("position")) ? r.css({
                position: "absolute",
                top: r.css("top"),
                left: r.css("left")
            }) : r.is(".oj-draggable") && r.css({
                position: "absolute",
                top: l.top,
                left: l.left
            }), this._renderProxy(), t = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), n.containment && (t += o(n.containment).scrollLeft() || 0, i += o(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: t,
                top: i
            }, this.size = {
                width: r.width(),
                height: r.height()
            }, this.originalSize = {
                width: r.width(),
                height: r.height()
            }, this.originalPosition = {
                left: t,
                top: i
            }, this.sizeDiff = {
                width: r.outerWidth() - r.width(),
                height: r.outerHeight() - r.height()
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = this.originalSize.width / this.originalSize.height || 1, s = o(".oj-resizable-" + this.axis).css("cursor"), o("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), r.addClass("oj-resizable-resizing"), this._propagate("start", e), this._alsoresize_start(e), this._containment_start(e), !0
        },
        _mouseDrag: function(e) {
            var t, i = this.helper,
                s = {},
                n = this.originalMousePosition,
                l = this.axis,
                r = e.pageX - n.left || 0,
                a = e.pageY - n.top || 0,
                h = this._change[l];
            return this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }, !!h && (t = h.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), e.shiftKey && (t = this._updateRatio(t, e)), t = this._respectSize(t, e), this._updateCache(t), this._propagate("resize", e), this._alsoresize_resize(e, this.ui()), this._containment_resize(e, this.ui()), this.position.top !== this.prevPosition.top && (s.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (s.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (s.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (s.height = this.size.height + "px"), i.css(s), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), o.isEmptyObject(s) || this._trigger("resize", e, this.ui()), !1)
        },
        _mouseStop: function(e) {
            return this.resizing = !1, o("body").css("cursor", "auto"), this.element.removeClass("oj-resizable-resizing"), this._propagate("stop", e), this._alsoresize_stop(e), this._containment_stop(e), !1
        },
        _updateVirtualBoundaries: function(e) {
            var t, i, s, o, n, l = this.options;
            n = {
                minWidth: this._isNumber(l.minWidth) ? l.minWidth : 0,
                maxWidth: this._isNumber(l.maxWidth) ? l.maxWidth : 1 / 0,
                minHeight: this._isNumber(l.minHeight) ? l.minHeight : 0,
                maxHeight: this._isNumber(l.maxHeight) ? l.maxHeight : 1 / 0
            }, e && (t = n.minHeight * this.aspectRatio, s = n.minWidth / this.aspectRatio, i = n.maxHeight * this.aspectRatio, o = n.maxWidth / this.aspectRatio, t > n.minWidth && (n.minWidth = t), s > n.minHeight && (n.minHeight = s), i < n.maxWidth && (n.maxWidth = i), o < n.maxHeight && (n.maxHeight = o)), this._vBoundaries = n
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = e,
                i = this.position,
                s = this.size,
                o = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === o && (t.left = i.left + (s.width - t.width), t.top = null), "nw" === o && (t.top = i.top + (s.height - t.height), t.left = i.left + (s.width - t.width)), t
        },
        _respectSize: function(e) {
            var t = e,
                i = this._vBoundaries,
                s = this.axis,
                o = this._isNumber(t.width) && i.maxWidth && i.maxWidth < t.width,
                n = this._isNumber(t.height) && i.maxHeight && i.maxHeight < t.height,
                l = this._isNumber(t.width) && i.minWidth && i.minWidth > t.width,
                r = this._isNumber(t.height) && i.minHeight && i.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                d = /sw|nw|w/.test(s),
                u = /nw|ne|n/.test(s);
            return l && (t.width = i.minWidth), r && (t.height = i.minHeight), o && (t.width = i.maxWidth), n && (t.height = i.maxHeight), l && d && (t.left = a - i.minWidth), o && d && (t.left = a - i.maxWidth), r && u && (t.top = h - i.minHeight), n && u && (t.top = h - i.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, o, n = this.helper || this.element;
                for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                    if (o = this._proportionallyResizeElements[e], !this.borderDif)
                        for (this.borderDif = [], i = [o.css("borderTopWidth"), o.css("borderRightWidth"), o.css("borderBottomWidth"), o.css("borderLeftWidth")], s = [o.css("paddingTop"), o.css("paddingRight"), o.css("paddingBottom"), o.css("paddingLeft")], t = 0; t < i.length; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                    o.css({
                        height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element;
            this.elementOffset = e.offset(), this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + t,
                    width: i.width - t
                }
            },
            n: function(e, t, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, t, i) {
                return o.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
            },
            sw: function(e, t, i) {
                return o.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
            },
            ne: function(e, t, i) {
                return o.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
            },
            nw: function(e, t, i) {
                return o.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
            }
        },
        _propagate: function(e, t) {
            "resize" !== e && this._trigger(e, t, this.ui())
        },
        _alsoresize_start: function() {
            var e = this.options,
                t = function(e) {
                    o(e).each(function() {
                        var e = o(this);
                        e.data("oj-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof e.alsoResize || e.alsoResize.parentNode ? t(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], t(e.alsoResize)) : o.each(e.alsoResize, function(e) {
                t(e)
            })
        },
        _alsoresize_resize: function(e, t) {
            var i = this.options,
                s = this.originalSize,
                n = this.originalPosition,
                l = {
                    height: this.size.height - s.height || 0,
                    width: this.size.width - s.width || 0,
                    top: this.position.top - n.top || 0,
                    left: this.position.left - n.left || 0
                },
                r = function(e, i) {
                    o(e).each(function() {
                        var e, s = o(this),
                            n = o(this).data("oj-resizable-alsoresize"),
                            r = {};
                        e = i && i.length ? i : s.parents(t.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"], o.each(e, function(e, t) {
                            var i = (n[t] || 0) + (l[t] || 0);
                            i && i >= 0 && (r[t] = i)
                        }), s.css(r)
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.nodeType ? r(i.alsoResize, null) : o.each(i.alsoResize, function(e, t) {
                r(e, t)
            })
        },
        _alsoresize_stop: function() {
            o(this).removeData("oj-resizable-alsoresize")
        },
        _containment_start: function() {
            var e, t, i, s, n, l, r, a, h = this,
                d = h.options,
                u = h.element,
                c = d.containment;
            (a = c instanceof o ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c) && (h.containerElement = o(a), /document/.test(c) || c === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {
                left: 0,
                top: 0
            }, h.parentData = {
                element: o(document),
                left: 0,
                top: 0,
                width: o(document).width(),
                height: o(document).height() || document.body.parentNode.scrollHeight
            }) : (e = o(a), t = [], o(["Top", "Right", "Left", "Bottom"]).each(function(i, s) {
                t[i] = h._num(e.css("padding" + s))
            }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
                height: e.innerHeight() - t[3],
                width: e.innerWidth() - t[1]
            }, i = h.containerOffset, s = h.containerSize.height, n = h.containerSize.width, l = h._hasScroll(a, "left") ? a.scrollWidth : n, r = h._hasScroll(a) ? a.scrollHeight : s, h.parentData = {
                element: a,
                left: i.left,
                top: i.top,
                width: l,
                height: r
            }))
        },
        _containment_resize: function(e, t) {
            var i, s, o, n, l = this.options,
                r = this.containerOffset,
                a = this.position,
                h = e.shiftKey,
                d = {
                    top: 0,
                    left: 0
                },
                u = this.containerElement,
                c = !0;
            u[0] !== document && /static/.test(u.css("position")) && (d = r), a.left < (this._helper ? r.left : 0) && (this.size.width += this._helper ? this.position.left - r.left : this.position.left - d.left, h && (this.size.height = this.size.width / this.aspectRatio, c = !1), this.position.left = l.helper ? r.left : 0), a.top < (this._helper ? r.top : 0) && (this.size.height += this._helper ? this.position.top - r.top : this.position.top, h && (this.size.width = this.size.height * this.aspectRatio, c = !1), this.position.top = this._helper ? r.top : 0), this.offset.left = this.parentData.left + this.position.left, this.offset.top = this.parentData.top + this.position.top, i = Math.abs((this._helper ? this.offset.left - d.left : this.offset.left - r.left) + this.sizeDiff.width), s = Math.abs((this._helper ? this.offset.top - d.top : this.offset.top - r.top) + this.sizeDiff.height), o = this.containerElement.get(0) === this.element.parent().get(0), n = /relative|absolute/.test(this.containerElement.css("position")), o && n && (i -= Math.abs(this.parentData.left)), i + this.size.width >= this.parentData.width && (this.size.width = this.parentData.width - i, h && (this.size.height = this.size.width / this.aspectRatio, c = !1)), s + this.size.height >= this.parentData.height && (this.size.height = this.parentData.height - s, h && (this.size.width = this.size.height * this.aspectRatio, c = !1)), c || (this.position.left = t.prevPosition.left, this.position.top = t.prevPosition.top, this.size.width = t.prevSize.width, this.size.height = t.prevSize.height)
        },
        _containment_stop: function() {
            var e = this.options,
                t = this.containerOffset,
                i = this.containerPosition,
                s = this.containerElement,
                n = o(this.helper),
                l = n.offset(),
                r = n.outerWidth() - this.sizeDiff.width,
                a = n.outerHeight() - this.sizeDiff.height;
            this._helper && !e.animate && /relative/.test(s.css("position")) && o(this).css({
                left: l.left - i.left - t.left,
                width: r,
                height: a
            }), this._helper && !e.animate && /static/.test(s.css("position")) && o(this).css({
                left: l.left - i.left - t.left,
                width: r,
                height: a
            })
        },
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition,
                prevSize: this.prevSize,
                prevPosition: this.prevPosition
            }
        }
    }), p = "oj-dialog-body", g = "oj-dialog-footer", f = "oj-dialog-header", n.__registerWidget("oj.ojDialog", o.oj.baseComponent, {
        version: "1.0.0",
        widgetEventPrefix: "oj",
        options: {
            cancelBehavior: "icon",
            dragAffordance: "title-bar",
            initialVisibility: "hide",
            modality: "modal",
            position: {
                my: {
                    horizontal: "center",
                    vertical: "center"
                },
                offset: {
                    x: 0,
                    y: 0
                },
                at: {
                    horizontal: "center",
                    vertical: "center"
                },
                of: "window",
                collision: "fit",
                using: function(e) {
                    var t = o(this).css(e).offset().top;
                    t < 0 && o(this).css("top", e.top - t)
                }
            },
            resizeBehavior: "resizable",
            role: "dialog",
            dialogTitle: null,
            title: null,
            beforeClose: null,
            beforeOpen: null,
            close: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null,
            animateStart: null,
            animateEnd: null
        },
        _ComponentCreate: function() {
            this._super();
            var e = this;
            if (this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this._IsCustomElement() || (this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this.element.removeAttr("title")), this.element.hide(), this.element.uniqueId(), this.element.addClass("oj-dialog oj-component"), this.element.attr({
                    tabIndex: -1
                }), this._IsCustomElement() && this.element[0].hasAttribute("role") || this.element.attr("role", this.options.role), this._on(this.element, {
                    keydown: this._keydownHandler.bind(this)
                }), this.userDefinedDialogHeader = !1, this._createContainer(), !this._IsCustomElement())
                for (var t = this.element.children(), i = 0; i < t.length; i++) {
                    var s = o(t[i]);
                    s.is(".oj-dialog-header") ? (this.userDefinedDialogHeader = !0, this._userDefinedHeader = s, this._userDefinedHeaderDiv = t[i], this._dialogContainer.appendChild(this._userDefinedHeader[0]), a.subtreeAttached(this._userDefinedHeader)) : s.is(".oj-dialog-body") ? (this._createContentDiv(), this._uiDialogContent = o(this._contentDiv), this._contentDiv.appendChild(t[i]), a.subtreeAttached(t[i]), this._dialogContainer.appendChild(this._contentDiv), a.subtreeAttached(this._contentDiv), this._uiDialogBody = s, this._uiDialogBodyDiv = t[i]) : s.is(".oj-dialog-footer") && (this._uiDialogFooter = s, this._uiDialogFooterDiv = t[i], this._dialogContainer.appendChild(this._uiDialogFooter[0]), a.subtreeAttached(this._uiDialogFooter))
                }
            this._IsCustomElement() && this._processSlottedChildren(), this.element[0].appendChild(this._dialogContainer), a.subtreeAttached(this._dialogContainer), this.userDefinedDialogHeader ? (this._userDefinedTitleDiv = this._userDefinedHeaderDiv.querySelector(".oj-dialog-title"), this._userDefinedTitle = o(this._userDefinedTitleDiv), null !== this._userDefinedTitleDiv && void 0 !== this._userDefinedTitleDiv && (this._userDefinedTitle.uniqueId(), this.element.attr({
                "aria-labelledby": this._userDefinedTitle.attr("id")
            }))) : this._createTitlebar(), this._uiDialogContent || (this._createContentDiv(), this._uiDialogContent = o(this._contentDiv), this._userDefinedHeader ? this._dialogContainer.insertBefore(this._contentDiv, this._userDefinedHeaderDiv.nextSibling) : this._dialogContainer.insertBefore(this._contentDiv, this._uiDialogTitlebarDiv.nextSibling), a.subtreeAttached(this._contentDiv)), this._setupFocus(this.element);
            var l = this.options;
            l.position = n.PositionUtils.coerceToJet(l.position), this._IsCustomElement() && (this._titleMutationObserver = new MutationObserver(function(t) {
                t.forEach(function(t) {
                    "attributes" === t.type && "title" === t.attributeName && (e._uiDialogTitleDiv.textContent = t.target.getAttribute(t.attributeName))
                })
            }), this._titleMutationObserver.observe(this.element[0], {
                attributes: !0,
                attributeFilter: ["title"]
            }))
        },
        _createContainer: function() {
            this._dialogContainer = document.createElement("div"), this._dialogContainer.classList.add("oj-dialog-container")
        },
        _createHeaderSlot: function() {
            this._headerSlot = document.createElement("div"), this._headerSlot.classList.add(f), this._dialogContainer.appendChild(this._headerSlot), a.subtreeAttached(this._headerSlot), this.userDefinedDialogHeader = !0, this._userDefinedHeaderDiv = this._headerSlot, this._userDefinedHeader = o(this._headerSlot)
        },
        _createFooterSlot: function() {
            this._footerSlot = document.createElement("div"), this._dialogContainer.appendChild(this._footerSlot), a.subtreeAttached(this._footerSlot), this._uiDialogFooterDiv = this._footerSlot, this._uiDialogFooter = o(this._footerSlot)
        },
        _createContentDiv: function() {
            this._contentDiv = document.createElement("div"), this._contentDiv.classList.add("oj-dialog-content", "oj-dialog-default-content")
        },
        _createBodySlot: function() {
            this._createContentDiv(), this._dialogContainer.appendChild(this._contentDiv), a.subtreeAttached(this._contentDiv), this._bodySlot = document.createElement("div"), this._bodySlot.classList.add("oj-dialog-body-wrapper"), this._contentDiv.appendChild(this._bodySlot), this._uiDialogContent = o(this._contentDiv), this._uiDialogBodyDiv = this._bodySlot, this._uiDialogBody = o(this._bodySlot)
        },
        _GetContextMenu: function() {
            return this._IsCustomElement() ? this._contextmenuSlot && this._contextmenuSlot.length > 0 ? this._contextmenuSlot[0] : this._super() : null
        },
        _processSlottedChildren: function() {
            null != this._footerSlot && this.element[0].removeChild(this._footerSlot), null != this._headerSlot && this.element[0].removeChild(this._headerSlot), null != this._bodySlot && this.element[0].removeChild(this._bodySlot), null != this._contextmenuSlot && this.element[0].removeChild(this._contextmenuSlot);
            var e, t, i = u.CustomElementUtils.getSlotMap(this.element[0]),
                s = Object.keys(i);
            for (t = 0; t < s.length; t++) "header" !== (e = s[t]) && "footer" !== e && "body" !== e && "" !== e && "contextMenu" !== e && i[e].parentNode.removeChild(i[e]);
            var o = Object.prototype.hasOwnProperty;
            o.call(i, "header") && this._createHeaderSlot(), (o.call(i, "body") || o.call(i, "")) && this._createBodySlot(), o.call(i, "footer") && this._createFooterSlot(), o.call(i, "contextMenu") && (this._contextmenuSlot = i.contextMenu);
            var n = this._bodySlot;
            for (t = 0; t < s.length; t++) {
                switch (e = s[t]) {
                    case "header":
                        n = this._headerSlot;
                        break;
                    case "footer":
                        n = this._footerSlot;
                        break;
                    case "body":
                    case "":
                        n = this._bodySlot
                }
                var l = i[e];
                if (null != l)
                    for (var r = 0; r < l.length; r++) switch (n.appendChild(l[r]), e) {
                        case "header":
                            break;
                        case "footer":
                            n = this._footerSlot, i[e][r].classList.add(g);
                            break;
                        case "body":
                        case "":
                            n = this._bodySlot, i[e][r].classList.add(p)
                    }
            }
        },
        _AfterCreateEvent: function() {
            "show" === this.options.initialVisibility && this.open()
        },
        _destroy: function() {
            this._off(this.element, "keydown"), n.ZOrderUtils.getStatus(this.element) === n.ZOrderUtils.STATUS.OPEN && this._closeImplicitly(), this._setWhenReady("none"), this._destroyResizable(), this.element.hasClass("oj-draggable") && (this.element.draggable("destroy"), this.element.removeClass("oj-draggable")), this._destroyCloseButton(), this.userDefinedDialogHeader && this._userDefinedTitle.removeUniqueId(), this._uiDialogBody && this._uiDialogBody.insertAfter(this._uiDialogContent), this._uiDialogContent.remove(), this._uiDialogBody = null, this._uiDialogContent = null, this.element.removeUniqueId().removeClass("oj-dialog oj-component").css(this.originalCss), this.element.stop(!0, !0), this._IsCustomElement() || this.originalTitle && this.element.attr("title", this.originalTitle), this._uiDialogTitlebar && (this._uiDialogTitlebar.remove(), this._uiDialogTitlebar = null), delete this._popupServiceEvents, this._super()
        },
        disable: o.noop,
        enable: o.noop,
        close: function(e) {
            if (!this._isOperationPending("close", [e])) {
                var t = n.ZOrderUtils.getStatus(this.element);
                if (t === n.ZOrderUtils.STATUS.OPEN)
                    if (n.ZOrderUtils.setStatus(this.element, n.ZOrderUtils.STATUS.BEFORE_CLOSE), !1 !== this._trigger("beforeClose", e) || this._ignoreBeforeCloseResultant) {
                        if (this._setWhenReady("close"), this._focusedElement = null, !this.opener.filter(":focusable").focus().length) {
                            var i = this.opener.parents().filter(":focusable");
                            i.length > 0 ? i[0].focus() : o(this.document[0].activeElement).blur()
                        }
                        if ("modal" === this.options.modality) {
                            var s = Array.prototype.forEach,
                                l = this.element[0].querySelectorAll(".oj-helper-element-in-dialog-with-accesskey");
                            s.call(l, function(e) {
                                e.classList.remove("oj-helper-element-in-dialog-with-accesskey")
                            });
                            var r = document.querySelectorAll(".oj-helper-element-with-accesskey");
                            s.call(r, function(e) {
                                e.setAttribute("accesskey", e.getAttribute("data-ojAccessKey")), e.removeAttribute("data-ojAccessKey"), e.classList.remove("oj-helper-element-with-accesskey")
                            })
                        }
                        var a = {};
                        a[n.PopupService.OPTION.POPUP] = this.element, a[n.PopupService.OPTION.CONTEXT] = {
                            closeEvent: e
                        }, n.PopupService.getInstance().close(a)
                    } else n.ZOrderUtils.setStatus(this.element, t)
            }
        },
        _beforeCloseHandler: function(e) {
            var t = e[n.PopupService.OPTION.POPUP],
                i = this._isFullDisplay(),
                s = this._isSheetDisplay();
            this._unregisterResizeListener(t[0]), this._destroyResizable(), s && this._disableBodyOverflow();
            var o, l = (r.parseJSONFromFontFamily("oj-dialog-option-defaults") || {}).animation;
            if (l && (s && !i && l.sheet ? o = l.sheet.close : l.normal ? o = l.normal.close : l.close && (o = l.close)), !this._ignoreBeforeCloseResultant && o) return h.startAnimation(t[0], "close", o, this).then(function() {
                t.hide()
            });
            t.hide()
        },
        _afterCloseHandler: function(e) {
            var t, i = e[n.PopupService.OPTION.CONTEXT];
            this._restoreBodyOverflow(), i && (t = i.closeEvent), this._trigger("close", t)
        },
        isOpen: function() {
            var e = n.ZOrderUtils.getStatus(this.element);
            return e === n.ZOrderUtils.STATUS.OPENING || e === n.ZOrderUtils.STATUS.OPEN || e === n.ZOrderUtils.STATUS.BEFORE_CLOSE || e === n.ZOrderUtils.STATUS.CLOSING
        },
        open: function(e) {
            if (!this._isOperationPending("open", [e])) {
                var t = n.ZOrderUtils.getStatus(this.element);
                if (t === n.ZOrderUtils.STATUS.OPEN || t === n.ZOrderUtils.STATUS.UNKNOWN || t === n.ZOrderUtils.STATUS.CLOSE)
                    if (this._isDefaultPosition = !this._hasPositionAttribute(), n.ZOrderUtils.setStatus(this.element, n.ZOrderUtils.STATUS.BEFORE_OPEN), !1 !== this._trigger("beforeOpen", e)) {
                        if (t === n.ZOrderUtils.STATUS.OPEN) return n.ZOrderUtils.setStatus(this.element, t), void this._focusTabbable();
                        this._setWhenReady("open"), this.userDefinedDialogHeader ? void 0 !== this.closeButton && null !== this.closeButton || "icon" !== this.options.cancelBehavior || this._createCloseButton(this._userDefinedHeaderDiv) : this._createTitlebarCloseButton(), this.opener = o(this.document[0].activeElement);
                        var i = this._isSheetDisplay();
                        i && this.element[0].classList.add("oj-dialog-sheet"), !i && "title-bar" === this.options.dragAffordance && o.fn.draggable && this._makeDraggable();
                        var s = "rtl" === this._GetReadingDirection(),
                            l = this.options.position;
                        if (i && (l = this._setSheetPosition(this.options.position)), l = n.PositionUtils.coerceToJqUi(l), l = n.PositionUtils.normalizeHorizontalAlignment(l, s), "modal" === this.options.modality) {
                            var r = Array.prototype.forEach,
                                a = this.element[0].querySelectorAll("[accesskey]");
                            r.call(a, function(e) {
                                e.classList.add("oj-helper-element-in-dialog-with-accesskey")
                            });
                            var h = document.querySelectorAll("[accesskey]");
                            r.call(h, function(e) {
                                e.classList.contains("oj-helper-element-in-dialog-with-accesskey") || (e.classList.add("oj-helper-element-with-accesskey"), e.setAttribute("data-ojAccessKey", e.getAttribute("accesskey")), e.removeAttribute("accesskey"))
                            })
                        }
                        var d = {};
                        d[n.PopupService.OPTION.POPUP] = this.element, d[n.PopupService.OPTION.LAUNCHER] = this.opener, d[n.PopupService.OPTION.POSITION] = l, d[n.PopupService.OPTION.MODALITY] = this.options.modality, d[n.PopupService.OPTION.EVENTS] = this._getPopupServiceEvents(), d[n.PopupService.OPTION.LAYER_SELECTORS] = "oj-dialog-layer", d[n.PopupService.OPTION.LAYER_LEVEL] = n.PopupService.LAYER_LEVEL.TOP_LEVEL, d[n.PopupService.OPTION.CUSTOM_ELEMENT] = this._IsCustomElement(), n.PopupService.getInstance().open(d)
                    } else n.ZOrderUtils.setStatus(this.element, t)
            }
        },
        _beforeOpenHandler: function(e) {
            var t = e[n.PopupService.OPTION.POPUP],
                i = e[n.PopupService.OPTION.POSITION],
                s = this._isSheetDisplay();
            s && this._disableBodyOverflow(), t.show();
            var o = this._isFullDisplay();
            o && this.element[0].classList.add("oj-dialog-full"), t.position(i), this._registerResizeListener(this.element[0]), t.parent().addClass("oj-animate-open");
            var l, a = (r.parseJSONFromFontFamily("oj-dialog-option-defaults") || {}).animation;
            if (a && (s && !o && a.sheet ? l = a.sheet.open : a.normal ? l = a.normal.open : a.open && (l = a.open)), l) return h.startAnimation(t[0], "open", l, this)
        },
        _afterOpenHandler: function(e) {
            e[n.PopupService.OPTION.POPUP].parent().removeClass("oj-animate-open"), this._restoreBodyOverflow(), this._makeResizable(), this._trigger("open"), this._focusTabbable()
        },
        refresh: function() {
            this._super()
        },
        _unregisterResizeListener: function(e) {
            e && this._resizeHandler && (l.removeResizeListener(e, this._resizeHandler), this._resizeHandler = null)
        },
        _registerResizeListener: function(e) {
            e && (null == this._resizeHandler && (this._resizeHandler = this._handleResize.bind(this)), l.addResizeListener(e, this._resizeHandler, 100, !0))
        },
        _handleResize: function() {
            n.ZOrderUtils.getStatus(this.element) === n.ZOrderUtils.STATUS.OPEN && this._adjustPosition()
        },
        _focusTabbable: function() {
            this.GetFocusElement().focus(), this._trigger("focus")
        },
        GetFocusElement: function() {
            var e = null;
            return !0 === this._titleBarMousedown ? this.element[0] : (null != (e = this.element.find("[autofocus]")) && e.length || null == (e = d.getFirstTabStop(this._contentDiv))) && (null != e && e.length || !this._uiDialogFooter || !this._uiDialogFooter.length || null == (e = d.getFirstTabStop(this._uiDialogFooterDiv))) ? (null != e && e.length || this.closeButton && (e = this.closeButton), null != e && e.length || (e = this.element), e[0]) : e
        },
        _keydownHandler: function(e) {
            if ("none" !== this.options.cancelBehavior && !e.isDefaultPrevented() && e.keyCode && e.keyCode === o.ui.keyCode.ESCAPE) return e.preventDefault(), e.stopImmediatePropagation(), void this.close(e);
            var t;
            e.keyCode === o.ui.keyCode.TAB && (e.shiftKey ? (d.isFirstActiveElement(this.element) || document.activeElement === this.element[0]) && null != (t = d.getLastTabStop(this.element)) && (t.focus(), e.preventDefault()) : (d.isLastActiveElement(this.element) || document.activeElement === this.element[0]) && null != (t = d.getFirstTabStop(this.element)) && (t.focus(), e.preventDefault()))
        },
        _setupFocus: function(e) {
            var t = this;
            this._focusable({
                applyHighlight: !0,
                setupHandlers: function(i, s) {
                    t._on(e, {
                        focus: function(e) {
                            i(o(e.currentTarget))
                        },
                        blur: function(e) {
                            s(o(e.currentTarget))
                        }
                    })
                }
            })
        },
        _disableBodyOverflow: function() {
            document.body.classList.add("oj-dialog-sheet-animating")
        },
        _restoreBodyOverflow: function() {
            document.body.classList.remove("oj-dialog-sheet-animating")
        },
        _destroyCloseButton: function() {
            null !== this.closeButtonDiv && void 0 !== this.closeButtonDiv && (this.closeButtonDiv.parentElement && (a.subtreeDetached(this.closeButtonDiv), this.closeButtonDiv.parentElement.removeChild(this.closeButtonDiv)), this.closeButton = null), this._headerSlot && this._headerSlot.classList.remove("oj-dialog-header-close"), this._uiDialogTitlebarDiv && this._uiDialogTitlebarDiv.classList.remove("oj-dialog-header-close")
        },
        _createCloseButton: function(e) {
            if (this._IsCustomElement()) {
                this.closeButtonDiv = document.createElement("oj-button"), this.closeButtonDiv.classList.add("oj-dialog-header-close-wrapper"), this.closeButtonDiv.setAttribute("data-oj-binding-provider", "none"), this.closeButtonDiv.setAttribute("display", "icons"), this.closeButtonDiv.setAttribute("chroming", "half");
                var t = document.createElement("span");
                t.textContent = this.getTranslatedString("labelCloseIcon");
                var i = document.createElement("span");
                i.className = "oj-fwk-icon oj-fwk-icon-cross", i.setAttribute("slot", "startIcon"), this.closeButtonDiv.appendChild(i), this.closeButtonDiv.appendChild(t), e.appendChild(this.closeButtonDiv), a.subtreeAttached(this.closeButtonDiv), this.closeButton = o(this.closeButtonDiv)
            }
            this._IsCustomElement() || (this.closeButton = o("<button><\button>").addClass("oj-dialog-header-close-wrapper"), this.closeButton.ojButton({
                display: "icons",
                chroming: "half",
                label: this.getTranslatedString("labelCloseIcon"),
                icons: {
                    start: "oj-component-icon oj-fwk-icon-cross"
                }
            }).appendTo(e), this.closeButtonDiv = this.closeButton[0]), this._on(this.closeButton, {
                click: function(e) {
                    e.preventDefault(), e.stopImmediatePropagation(), this.close(e)
                }
            }), this._headerSlot && this._headerSlot.classList.add("oj-dialog-header-close"), this._uiDialogTitlebarDiv && this._uiDialogTitlebarDiv.classList.add("oj-dialog-header-close")
        },
        _createTitlebarCloseButton: function() {
            void 0 !== this.closeButton && null !== this.closeButton || "icon" !== this.options.cancelBehavior || this._createCloseButton(this._uiDialogTitlebarDiv), this._on(this._uiDialogTitlebar, {
                mousedown: function(e) {
                    var t = l.isAncestorOrSelf(this.closeButtonDiv, e.target);
                    this._titleBarMousedown = !0, t || this.element.focus()
                },
                mouseup: function() {
                    this._titleBarMousedown = null
                }
            })
        },
        _createTitlebar: function() {
            this._uiDialogTitlebarDiv = document.createElement("div"), this._uiDialogTitlebarDiv.classList.add(f), this._dialogContainer.insertBefore(this._uiDialogTitlebarDiv, this._dialogContainer.firstChild), a.subtreeAttached(this._uiDialogTitlebarDiv), this._uiDialogTitlebar = o(this._uiDialogTitlebarDiv), this._uiDialogTitleDiv = document.createElement("h1"), this._uiDialogTitleDiv.classList.add("oj-dialog-title"), o(this._uiDialogTitleDiv).uniqueId(), this._uiDialogTitlebarDiv.appendChild(this._uiDialogTitleDiv), a.subtreeAttached(this._uiDialogTitleDiv), this._title(this._uiDialogTitleDiv), this.element.attr({
                "aria-labelledby": this._uiDialogTitleDiv.id
            })
        },
        _title: function(e) {
            var t = e;
            this._IsCustomElement() ? this._IsCustomElement() && (this.options.dialogTitle ? t.textContent = this.options.dialogTitle : this.element.attr("title") ? t.textContent = this.element.attr("title") : t.innerHTML = "&#160;") : (this.options.title || (t.innerHTML = "&#160;"), t.textContent = this.options.title)
        },
        _makeDraggable: function() {
            var e = this,
                t = this.options;

            function i(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            this.element.draggable({
                addClasses: !1,
                handle: ".oj-dialog-header",
                containment: "document",
                start: function(t, s) {
                    o(this).addClass("oj-dialog-dragging"), e._positionDescendents(), e._trigger("dragStart", t, i(s))
                },
                drag: function(t, s) {
                    e._positionDescendents(), e._trigger("drag", t, i(s))
                },
                stop: function(s, n) {
                    var l = n.offset.left - e.document.scrollLeft(),
                        r = n.offset.top - e.document.scrollTop();
                    t.position = {
                        my: {
                            horizontal: "left",
                            vertical: "top"
                        },
                        at: {
                            horizontal: "left",
                            vertical: "top"
                        },
                        offset: {
                            x: l >= 0 ? l : 0,
                            y: r >= 0 ? r : 0
                        },
                        of: window
                    }, o(this).removeClass("oj-dialog-dragging"), e._positionDescendents(), e._trigger("dragStop", s, i(n))
                }
            }), this.element.addClass("oj-draggable")
        },
        _destroyResizable: function() {
            this._resizableComponent && this._resizableComponent("instance") && (this._resizableComponent("destroy"), delete this._resizableComponent)
        },
        _makeResizable: function() {
            if (this._destroyResizable(), "resizable" === this.options.resizeBehavior) {
                var e = this;
                this._resizableComponent = this.element.ojResizable.bind(this.element);
                var t = Math.max(l.getCSSLengthAsFloat(this.element.css("min-width")), 10),
                    i = Math.max(l.getCSSLengthAsFloat(this.element.css("min-height")), 10),
                    s = l.getCSSLengthAsFloat(this.element.css("max-width")),
                    n = l.getCSSLengthAsFloat(this.element.css("max-height"));
                s = 0 === s ? null : s, n = 0 === n ? null : n, this._resizableComponent({
                    minWidth: t,
                    minHeight: i,
                    maxWidth: s,
                    maxHeight: n,
                    cancel: ".oj-dialog-content",
                    containment: "document",
                    handles: "n,e,s,w,se,sw,ne,nw",
                    start: function(t, i) {
                        e._isResizing = !0, o(this).addClass("oj-dialog-resizing"), e._trigger("resizeStart", t, r(i))
                    },
                    resize: function(t, i) {
                        e._trigger("resize", t, r(i))
                    },
                    stop: function(t, i) {
                        e._isResizing = !1, o(this).removeClass("oj-dialog-resizing"), e._trigger("resizeStop", t, r(i))
                    }
                })
            }

            function r(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
        },
        _position: function() {
            var e = "rtl" === this._GetReadingDirection(),
                t = this.options.position;
            this._isSheetDisplay() && (t = this._setSheetPosition(t)), t = n.PositionUtils.coerceToJqUi(t), t = n.PositionUtils.normalizeHorizontalAlignment(t, e), this.element.position(t), this._positionDescendents()
        },
        _positionDescendents: function() {
            n.PopupService.getInstance().triggerOnDescendents(this.element, n.PopupService.EVENT.POPUP_REFRESH)
        },
        _adjustPosition: function() {
            var e = this.element.hasClass("oj-draggable"),
                t = this.element.hasClass("oj-resizable");
            e || t || this.element.width() > window.innerWidth || this.element.height() > window.innerHeight ? this._positionDescendents() : this._position()
        },
        _isSheetDisplay: function() {
            if (this._isDefaultPosition) {
                var e = r.parseJSONFromFontFamily("oj-theme-json").behavior,
                    t = "phone" === c.getDeviceRenderMode();
                if (e.includes("redwood") && t) return !0
            }
            return !1
        },
        _isFullDisplay: function() {
            if (!this._isSheetDisplay()) return !1;
            var e = window.innerHeight,
                t = window.innerWidth,
                i = this.element[0].offsetHeight,
                s = this.element[0].offsetWidth;
            return i >= .95 * e && s >= .95 * t
        },
        _hasPositionAttribute: function() {
            for (var e = this.element[0].attributes, t = 0; t < e.length; t++)
                if (e[t].name.startsWith("position")) return !0;
            return !1
        },
        _setSheetPosition: function(e) {
            var t = o.extend({}, e);
            return t.my.vertical = "bottom", t.at.vertical = "bottom", t.of = window, t
        },
        _setOption: function(e, t, i) {
            var s;
            if ("disabled" !== e) switch (this._super(e, t, i), e) {
                case "dragAffordance":
                    (s = this.element.hasClass("oj-draggable")) && "none" === t && (this.element.draggable("destroy"), this.element.removeClass("oj-draggable")), this._isSheetDisplay() || s || "title-bar" !== t || this._makeDraggable();
                    break;
                case "position":
                    this._isDefaultPosition = !1;
                    var l = this.options;
                    return l.position = n.PositionUtils.coerceToJet(t, l.position), void this._position();
                case "resizeBehavior":
                    n.ZOrderUtils.getStatus(this.element) === n.ZOrderUtils.STATUS.OPEN && this._makeResizable();
                    break;
                case "title":
                case "dialogTitle":
                    this.userDefinedDialogHeader ? this._title(this._userDefinedHeaderDiv.querySelector(".oj-dialog-title")) : this._title(this._uiDialogTitlebarDiv.querySelector(".oj-dialog-title"));
                    break;
                case "role":
                    this.element.attr("role", t);
                    break;
                case "modality":
                    if (n.ZOrderUtils.getStatus(this.element) === n.ZOrderUtils.STATUS.OPEN) {
                        var r = {};
                        r[n.PopupService.OPTION.POPUP] = this.element, r[n.PopupService.OPTION.MODALITY] = t, n.PopupService.getInstance().changeOptions(r)
                    }
                    break;
                case "cancelBehavior":
                    "none" === t || "escape" === t ? this._destroyCloseButton() : "icon" === t && (this.userDefinedDialogHeader ? (this._destroyCloseButton(), this._createCloseButton(this._userDefinedHeaderDiv), this._userDefinedTitleDiv = this._userDefinedHeaderDiv.querySelector(".oj-dialog-title"), this._userDefinedTitle = o(this._userDefinedTitleDiv)) : (this._destroyCloseButton(), this._createCloseButton(this._uiDialogTitlebarDiv), this.standardTitleDiv = this._uiDialogTitlebarDiv.querySelector(".oj-dialog-title"), this.standardTitle = o(this.standardTitleDiv)))
            }
        },
        getNodeBySubId: function(e) {
            if (null === e) return this.element ? this.element[0] : null;

            function t(e) {
                for (var t = [], i = /\w|_|-/, s = 0; s < e.length; s++) {
                    var o = e.substring(s, s + 1);
                    i.test(o) ? t.push(o) : t.push("\\" + o)
                }
                return t.join("")
            }
            var i = e.subId;
            if (!this._IsCustomElement() || i !== g && i !== p) {
                var s, o;
                switch (i) {
                    case f:
                    case "oj-dialog-content":
                    case g:
                        return s = this.element[0].nodeName + '[id="' + t(this.element.attr("id")) + '"] > .oj-dialog-container > ', s += "." + i, (o = this.element.parent().find(s)) && 0 !== o.length ? o[0] : null;
                    case "oj-resizable-n":
                    case "oj-resizable-e":
                    case "oj-resizable-s":
                    case "oj-resizable-w":
                    case "oj-resizable-se":
                    case "oj-resizable-sw":
                    case "oj-resizable-ne":
                    case "oj-resizable-nw":
                        return s = this.element[0].nodeName + '[id="' + t(this.element.attr("id")) + '"] > ', s += "." + i, (o = this.element.parent().find(s)) && 0 !== o.length ? o[0] : null;
                    case "oj-dialog-close-icon":
                    case "oj-dialog-close":
                        return null;
                    case p:
                        return s = this.element[0].nodeName + '[id="' + t(this.element.attr("id")) + '"] > ', s += ".oj-dialog-container > .oj-dialog-content > ", s += "." + i, (o = this.element.parent().find(s)) && 0 !== o.length ? o[0] : null;
                    case "oj-dialog-header-close-wrapper":
                        return s = this.element[0].nodeName + '[id="' + t(this.element.attr("id")) + '"] > ', s += ".oj-dialog-container > .oj-dialog-header > ", s += "." + i, (o = this.element.parent().find(s)) && 0 !== o.length ? o[0] : null
                }
            } else {
                if (i === p) return this._uiDialogBodyDiv.querySelector(".oj-dialog-body");
                if (i === g) return this._uiDialogFooterDiv.querySelector(".oj-dialog-footer")
            }
            return null
        },
        getSubIdByNode: function(e) {
            if (null != e) {
                var t = o(e);
                if (t.hasClass(f)) return {
                    subId: f
                };
                if (t.hasClass(g)) return {
                    subId: g
                };
                if (t.hasClass("oj-dialog-content")) return {
                    subId: "oj-dialog-content"
                };
                if (t.hasClass("oj-dialog-header-close-wrapper")) return {
                    subId: "oj-dialog-header-close-wrapper"
                };
                if (t.hasClass("oj-resizable-n")) return {
                    subId: "oj-resizable-n"
                };
                if (t.hasClass("oj-resizable-e")) return {
                    subId: "oj-resizable-e"
                };
                if (t.hasClass("oj-resizable-s")) return {
                    subId: "oj-resizable-s"
                };
                if (t.hasClass("oj-resizable-w")) return {
                    subId: "oj-resizable-w"
                };
                if (t.hasClass("oj-resizable-se")) return {
                    subId: "oj-resizable-se"
                };
                if (t.hasClass("oj-resizable-sw")) return {
                    subId: "oj-resizable-sw"
                };
                if (t.hasClass("oj-resizable-ne")) return {
                    subId: "oj-resizable-ne"
                };
                if (t.hasClass("oj-resizable-nw")) return {
                    subId: "oj-resizable-nw"
                }
            }
            return null
        },
        _surrogateRemoveHandler: function() {
            var e = this.element;
            n.ZOrderUtils.getStatus(e) === n.ZOrderUtils.STATUS.OPEN && e.remove()
        },
        _getPopupServiceEvents: function() {
            if (!this._popupServiceEvents) {
                var e = {};
                e[n.PopupService.EVENT.POPUP_CLOSE] = this._closeImplicitly.bind(this), e[n.PopupService.EVENT.POPUP_REMOVE] = this._surrogateRemoveHandler.bind(this), e[n.PopupService.EVENT.POPUP_REFRESH] = this._adjustPosition.bind(this), e[n.PopupService.EVENT.POPUP_BEFORE_OPEN] = this._beforeOpenHandler.bind(this), e[n.PopupService.EVENT.POPUP_AFTER_OPEN] = this._afterOpenHandler.bind(this), e[n.PopupService.EVENT.POPUP_BEFORE_CLOSE] = this._beforeCloseHandler.bind(this), e[n.PopupService.EVENT.POPUP_AFTER_CLOSE] = this._afterCloseHandler.bind(this), this._popupServiceEvents = e
            }
            return this._popupServiceEvents
        },
        _closeImplicitly: function() {
            this._ignoreBeforeCloseResultant = !0, this.close(), delete this._ignoreBeforeCloseResultant
        },
        _setWhenReady: function(t) {
            var i = this._whenReadyMediator;
            i && (i.destroy(), delete this._whenReadyMediator), ["open", "close"].indexOf(t) < 0 || (this._whenReadyMediator = new e.PopupWhenReadyMediator(this.element, t, "ojDialog", this._IsCustomElement()))
        },
        _isOperationPending: function(e, t) {
            var i = this._whenReadyMediator;
            return !!i && i.isOperationPending(this, e, e, t)
        },
        _NotifyDetached: function() {
            n.ZOrderUtils.getStatus(this.element) === n.ZOrderUtils.STATUS.OPEN && this._closeImplicitly(), this._super()
        }
    }), a.setDefaultOptions({
        ojDialog: {
            resizeBehavior: a.createDynamicPropertyGetter(function() {
                return (r.parseJSONFromFontFamily("oj-dialog-option-defaults") || {}).resizeBehavior
            }),
            cancelBehavior: a.createDynamicPropertyGetter(function() {
                return (r.parseJSONFromFontFamily("oj-dialog-option-defaults") || {}).cancelBehavior
            }),
            dragAffordance: a.createDynamicPropertyGetter(function() {
                return (r.parseJSONFromFontFamily("oj-dialog-option-defaults") || {}).dragAffordance
            })
        }
    }), (m = {
        properties: {
            cancelBehavior: {
                type: "string",
                enumValues: ["escape", "icon", "none"]
            },
            dialogTitle: {
                type: "string"
            },
            dragAffordance: {
                type: "string",
                enumValues: ["none", "title-bar"]
            },
            initialVisibility: {
                type: "string",
                enumValues: ["hide", "show"],
                value: "hide"
            },
            modality: {
                type: "string",
                enumValues: ["modal", "modeless"],
                value: "modal"
            },
            position: {
                type: "object",
                properties: {
                    at: {
                        type: "object",
                        properties: {
                            horizontal: {
                                type: "string",
                                enumValues: ["center", "end", "left", "right", "start"],
                                value: "center"
                            },
                            vertical: {
                                type: "string",
                                enumValues: ["bottom", "center", "top"],
                                value: "center"
                            }
                        }
                    },
                    collision: {
                        type: "string",
                        enumValues: ["fit", "flip", "flipfit", "none"],
                        value: "fit"
                    },
                    my: {
                        type: "object",
                        properties: {
                            horizontal: {
                                type: "string",
                                enumValues: ["center", "end", "left", "right", "start"],
                                value: "center"
                            },
                            vertical: {
                                type: "string",
                                enumValues: ["bottom", "center", "top"],
                                value: "center"
                            }
                        }
                    },
                    of: {
                        type: "string|object",
                        value: "window"
                    },
                    offset: {
                        type: "object",
                        properties: {
                            x: {
                                type: "number",
                                value: 0
                            },
                            y: {
                                type: "number",
                                value: 0
                            }
                        }
                    }
                }
            },
            resizeBehavior: {
                type: "string",
                enumValues: ["none", "resizable"]
            },
            translations: {
                type: "object",
                value: {},
                properties: {
                    labelCloseIcon: {
                        type: "string"
                    }
                }
            }
        },
        methods: {
            close: {},
            getProperty: {},
            isOpen: {},
            open: {},
            refresh: {},
            setProperties: {},
            setProperty: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        events: {
            ojAnimateEnd: {},
            ojAnimateStart: {},
            ojBeforeClose: {},
            ojBeforeOpen: {},
            ojClose: {},
            ojFocus: {},
            ojOpen: {},
            ojResize: {},
            ojResizeStart: {},
            ojResizeStop: {}
        },
        extension: {}
    }).extension._WIDGET_NAME = "ojDialog", m.extension._CONTROLS_SUBTREE_HIDDEN = !0, n.CustomElementBridge.register("oj-dialog", {
        metadata: m
    })
});
//# sourceMappingURL=ojdialog.js.map