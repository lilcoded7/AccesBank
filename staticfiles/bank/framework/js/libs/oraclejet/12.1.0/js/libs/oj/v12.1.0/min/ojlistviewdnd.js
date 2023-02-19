/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojcore", "jquery", "ojs/ojlogger", "ojdnd", "ojs/ojlistview"], function(t, e, i, r, s, a) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    const n = function(t) {
        this.listview = t
    };
    e._registerLegacyNamespaceProp("ListViewDndContext", n), e.Object.createSubclass(n, e.Object, "oj.ListViewDndContext"), n.C_KEY = 67, n.V_KEY = 86, n.X_KEY = 88, n.CUT_COMMAND = "cut", n.COPY_COMMAND = "copy", n.PASTE_COMMAND = "paste", n.PASTE_BEFORE_COMMAND = "pasteBefore", n.PASTE_AFTER_COMMAND = "pasteAfter", n.prototype.reset = function() {
        this._unsetSelectionDraggable(), this.m_itemsDragged = null, this.m_dragImage = null, this.m_currentDragItem = null, this.m_dragItems = null, this.m_contextMenuItem = null, this.m_cachedOffset = null, this.m_dropTarget = null, this.m_firstDropTarget = null
    }, n.prototype._getDndOptions = function(t) {
        var e = this.listview.GetOption("dnd");
        return null != e && e[t] ? e[t].items : null
    }, n.prototype._getDragOptions = function() {
        return this._getDndOptions("drag")
    }, n.prototype._getDropOptions = function() {
        return this._getDndOptions("drop")
    }, n.prototype.IsItemReOrdering = function() {
        return "enabled" === this._getDndOptions("reorder")
    }, n.prototype.GetDragAffordanceClass = function() {
        return "oj-listview-drag-handle"
    }, n.prototype.GetDragImageClass = function() {
        return "oj-listview-drag-image"
    }, n.prototype.GetDragItemClass = function() {
        return "oj-listview-drag-item"
    }, n.prototype.GetCutStyleClass = function() {
        return "oj-listview-cut"
    }, n.prototype.GetCommandPrefix = function() {
        return "oj-listview-"
    }, n.prototype._findItem = function(t) {
        return i(t).get(0).classList.contains("oj-listview-first-drop-target") ? i(this.m_dropTargetElem) : this.listview.FindItem(t)
    }, n.prototype._getSelectedItems = function(t) {
        var e = [];
        if (this.listview._isSelectionEnabled())
            for (var r = this.listview.GetOption("selection"), s = 0; s < r.length; s++) {
                var a = this.listview.FindElementByKey(r[s]);
                null == a || this.listview.SkipFocus(i(a)) || e.push(a)
            } else {
                var n = this._getActiveItem();
                null != n && e.push(n)
            }
        return !t && null != this.m_contextMenuItem && this.m_contextMenuItem.length > 0 && (this.listview.element.get(0).contains(this.m_contextMenuItem.get(0)) ? -1 === e.indexOf(this.m_contextMenuItem.get(0)) && (e = [this.m_contextMenuItem.get(0)]) : this.m_contextMenuItem = null), e
    }, n.prototype._getActiveItem = function() {
        return null == this.listview.m_active ? null : this.listview.m_active.elem[0]
    }, n.prototype.itemRenderComplete = function(t, e) {
        i(t).hasClass(this.listview.getItemStyleClass()) || (t = t.firstElementChild);
        var r = i(t).find("." + this.GetDragAffordanceClass());
        null != r && r.length > 0 && this.listview._isTouchSupport() && r.attr("draggable", "true")
    }, n.prototype._unsetSelectionDraggable = function() {
        this.m_draggableSelection && i.each(this.m_draggableSelection, function(t, e) {
            i(e).removeClass("oj-draggable"), this.listview._isTouchSupport() && i(e).removeAttr("draggable")
        }.bind(this))
    }, n.prototype.setSelectionDraggable = function() {
        var t = [];
        this._unsetSelectionDraggable();
        for (var e = this.listview.GetOption("selection"), r = 0; r < e.length; r++) {
            var s = this.listview.FindElementByKey(e[r]);
            null == s || this.listview.SkipFocus(i(s)) || (t.push(s), i(s).addClass("oj-draggable"), this.listview._isTouchSupport() && i(s).attr("draggable", "true"))
        }
        this.m_draggableSelection = t
    }, n.prototype._setItemDraggable = function(t) {
        var e = this.GetDragAffordanceClass(),
            i = t.find("." + e);
        return null != i && i.length > 0 || (t.addClass("oj-draggable"), !1)
    }, n.prototype._unsetItemDraggable = function(t) {
        t.removeClass("oj-draggable")
    }, n.prototype._setDraggable = function(t) {
        if (null != this._getDragOptions() || this.IsItemReOrdering()) {
            var e, r = this.GetDragAffordanceClass();
            if (t.hasClass(r)) e = i(t);
            else {
                var s = this._findItem(t);
                if (this.shouldDragCurrentItem()) e = s;
                else {
                    if (null != s)
                        if (this._setItemDraggable(s)) return;
                    var a = this._getSelectedItems(!0);
                    a.length > 0 && (null != s && a.indexOf(s[0]) > -1 ? e = s : i(a[0]).removeClass("oj-draggable"))
                }
            }
            null != e && e.attr("draggable", !0)
        }
    }, n.prototype._unsetDraggable = function(t) {
        if (null != this._getDragOptions() || this.IsItemReOrdering()) {
            var e, r = this.GetDragAffordanceClass();
            null != (e = t.hasClass(r) ? i(t) : this._findItem(t)) && (e.removeAttr("draggable"), this._unsetItemDraggable(e))
        }
    }, n.prototype.isDndInProgress = function() {
        return null != this.m_dragImage
    }, n.prototype._invokeDndCallback = function(t, e, i, s) {
        var a, n = "drag" === t ? this._getDragOptions() : this._getDropOptions();
        if (n) {
            var o = n[e];
            if (o && "function" == typeof o) try {
                this.listview.ojContext._IsCustomElement() ? (o(i.originalEvent, s), i.originalEvent.defaultPrevented && i.preventDefault()) : (i.dataTransfer = i.originalEvent.dataTransfer, a = o(i, s))
            } catch (t) {
                r.error("Error: " + t)
            } else a = -1
        } else a = -1;
        return a
    }, n.prototype._setDragItemDataTransfer = function(t, e, i) {
        for (var r = [], s = 0; s < i.length; s++) {
            var a = this.listview._getDataForItem(i[s]);
            a && (a.innerHTML && a.tagName && "LI" === a.tagName ? r.push(a.innerHTML) : r.push(a))
        }
        return r.length > 0 ? (this._setDragItemData(t.originalEvent, e, r), this.SetDragItemImage(t.originalEvent, i), {
            items: r
        }) : null
    }, n.prototype._setDragItemData = function(t, e, i) {
        var r = t.dataTransfer,
            s = JSON.stringify(i);
        if ("string" == typeof e) r.setData(e, s);
        else if (e)
            for (var a = 0; a < e.length; a++) r.setData(e[a], s);
        r.setData(this.GetDragSourceType(), this.listview.element.get(0).id)
    }, n.prototype._createDragImage = function() {
        var t = document.createElement("ul");
        if (t.className = this.listview.element.get(0).className, t.classList.add(this.GetDragImageClass()), this.listview.ojContext._IsCustomElement()) {
            var e = ["oj-component", "oj-complete"].concat(this.listview.GetContainerStyleClass().split(" "));
            this.listview.GetRootElement().get(0).classList.forEach(function(i) {
                -1 === e.indexOf(i) && t.classList.add(i)
            })
        }
        return t
    }, n.prototype._calculateOffset = function(t) {
        var e = window.getComputedStyle(t);
        return parseFloat(e.marginLeft) + parseFloat(e.marginRight) + parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) + parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth)
    }, n.prototype._calculateAffordanceOffset = function(t, e) {
        if (null == this.m_cachedOffset) {
            this.m_cachedOffset = Math.max(0, e.offsetLeft - t.offsetLeft) + e.offsetWidth / 2;
            var i = this._calculateOffset(t),
                r = this._calculateOffset(this.listview.getListContainer().get(0));
            this.m_cachedOffset += Math.max(r, i - r)
        }
        return this.m_cachedOffset
    }, n.prototype.SetDragItemImage = function(t, e) {
        var r, s, a, n = 0,
            o = 0,
            l = t.target,
            h = this.listview.isCardLayout();
        if (e.length > 1) {
            var d;
            (r = i(this._createDragImage())).css({
                width: this.listview.element.css("width"),
                height: this.listview.element.css("height")
            });
            var m = Number.MAX_VALUE;
            for (d = 0; d < e.length; d++) m = Math.min(m, e[d].offsetTop);
            for (d = 0; d < e.length; d++) {
                s = e[d].offsetTop - m;
                var p = e[d].offsetWidth;
                (a = i(e[d].cloneNode(!0))).removeClass("oj-selected oj-focus oj-hover").css({
                    position: "absolute",
                    top: s,
                    width: p
                }), h || a.addClass("oj-listview-item-drag-image"), r.append(a)
            }
        } else i(l).hasClass(this.GetDragAffordanceClass()) ? (s = 0, i.contains(e[0], l.offsetParent) && (s = l.offsetTop), n = this._calculateAffordanceOffset(e[0], l), o = s + l.offsetHeight / 2) : (n = Math.max(0, t.offsetX), o = Math.max(0, t.offsetY)), (a = i(e[0].cloneNode(!0))).removeClass("oj-selected oj-focus oj-hover").addClass("oj-drag"), h || a.addClass("oj-listview-item-drag-image"), (r = i(this._createDragImage())).css({
            width: this.GetDragImageWidth(e[0]),
            height: 2 * e[0].offsetHeight
        }).append(a);
        h && r.addClass("oj-listview-card-layout"), i("body").append(r), this.m_dragImage = r, t.dataTransfer.setDragImage(r.get(0), n, o)
    }, n.prototype.GetDragImageWidth = function() {
        return this.listview.element.css("width")
    }, n.prototype.GetDefaultDataType = function() {
        return "text/ojlistview-items-data"
    }, n.prototype._handleDragStart = function(t) {
        var e, r, s = this._getDragOptions();
        if ((null != s || this.IsItemReOrdering()) && (e = null != s ? s.dataTypes : this.GetDefaultDataType(), i(t.target).hasClass(this.GetDragAffordanceClass()) || this.shouldDragCurrentItem() ? (r = []).push(this._findItem(t.target)[0]) : r = this._getSelectedItems(!0), r.length > 0)) {
            this.m_dragItems = r, this.m_currentDragItem = i(r[0]);
            var a = this._setDragItemDataTransfer(t, e, r);
            if (a) {
                var n = this._invokeDndCallback("drag", "dragStart", t, a);
                if (-1 === n) return;
                return n
            }
            return !1
        }
    }, n.prototype._handleDrag = function(t) {
        return this._invokeDndCallback("drag", "drag", t)
    }, n.prototype._destroyDragImage = function() {
        null != this.m_dragImage && (this.m_dragImage.remove(), this.m_dragImage = null)
    }, n.prototype._handleDragEnd = function(t) {
        if (this.m_dragEndCallCheck && (window.cancelAnimationFrame(this.m_dragEndCallCheck), this.m_dragEndCallCheck = null), null != this.m_currentDragItem && null != this.m_dragItems) {
            this.m_currentDragItem.find("." + this.GetDragAffordanceClass()).removeAttr("draggable"), this.m_currentDragItem.removeClass("oj-drag oj-draggable").removeAttr("draggable");
            for (var e = 0; e < this.m_dragItems.length; e++) {
                var r = this.m_dragItems[e];
                r.classList.remove("oj-listview-drag-source"), r.classList.remove(this.GetDragItemClass()), i(r).css("display", "")
            }
        }
        this._cleanupDropTarget(), this._destroyDragImage(), this._unsetSelectionDraggable(), this._invokeDndCallback("drag", "dragEnd", t), this.m_itemsDragged = this.m_dragItems, this.m_dragImage = null, this.m_currentDragItem = null, this.m_dragItems = null, this.listview.restoreFocusAfterDrag()
    }, n.prototype._matchDragDataType = function(t) {
        var e = this._getDropOptions();
        if (e && e.dataTypes)
            for (var i = e.dataTypes, r = "string" == typeof i ? [i] : i, s = t.originalEvent.dataTransfer.types, a = 0; a < s.length; a++)
                if (r.indexOf(s[a]) >= 0) return !0;
        return !1
    }, n.prototype._invokeDropCallback = function(t, e, i) {
        var r = this._invokeDndCallback("drop", t, e, i);
        return void 0 !== r && -1 !== r || this._matchDragDataType(e) && e.preventDefault(), r
    }, n.prototype._getDropIndicator = function() {
        return null != this.m_dragItems ? "space" : "line"
    }, n.prototype._createDropTarget = function(t) {
        var e, r = this._getDropIndicator();
        null == this.m_dropTarget && ("space" === r ? (e = i(t.get(0).cloneNode(!1))).addClass("oj-drop").removeClass("oj-drag oj-draggable oj-hover oj-focus").css({
            display: "block",
            height: t.outerHeight(),
            width: t.outerWidth()
        }) : "line" === r && (e = document.createElement("li")).classList.add("oj-listview-drop-target"), this.m_dropTarget = i(e));
        var s = t.get(0);
        if ("line" === r) {
            s.classList.add("oj-drop"), null != this.m_dropTargetElem && this.m_dropTargetElem.classList.remove("oj-drop"), this.m_dropTargetElem = s;
            var a = s.offsetTop + s.offsetHeight - this._getDropIndicatorHeight();
            null == s.nextElementSibling && this.listview._isGridlinesVisible() && (a -= 1), this.m_dropTarget.get(0).style.top = a + "px"
        } else "space" === r && (this.m_dropTarget.get(0).key = s.key);
        return this.m_dropTarget
    }, n.prototype._getDropIndicatorHeight = function() {
        if (!isNaN(this.m_dropIndicatorHeight)) return this.m_dropIndicatorHeight;
        if (this.m_dropTarget) {
            var t = this.m_dropTarget.get(0);
            return this.listview.element.get(0).appendChild(t), this.m_dropIndicatorHeight = t.offsetHeight, this.listview._isGridlinesVisible() && (this.m_dropIndicatorHeight -= 1), this.m_dropIndicatorHeight
        }
        return 0
    }, n.prototype._cleanupGroupItem = function() {
        null != this.m_currentDropItem && -1 === this.m_dropTargetIndex && this.m_currentDropItem.children("." + this.listview.getGroupItemStyleClass()).removeClass("oj-drop")
    }, n.prototype._cleanupEmptyList = function() {
        null != this.m_currentDropItem && this.m_currentDropItem.hasClass(this.listview.getEmptyTextStyleClass()) && (this.m_currentDropItem.removeClass("oj-drop"), this.m_currentDropItem.get(0).textContent = this.listview._getEmptyText())
    }, n.prototype._cleanupDropTarget = function() {
        null != this.m_dropTarget && (this.m_dropTarget.css("height", "0"), this.m_dropTarget.remove(), this.m_dropTarget = null), null != this.m_dropTargetElem && this.m_dropTargetElem.classList.remove("oj-drop"), null != this.m_firstDropTarget && (this.m_firstDropTarget.parentNode && this.m_firstDropTarget.parentNode.removeChild(this.m_firstDropTarget), this.m_firstDropTarget = null), this._cleanupEmptyList(), this._cleanupGroupItem()
    }, n.prototype._handleDragEnter = function(t) {
        var e = this._findItem(t.target);
        if (null != e && e.length > 0) {
            var i = this._invokeDropCallback("dragEnter", t, {
                item: e.get(0)
            });
            if (-1 !== i) return i
        }
    }, n.prototype._setCurrentDropItem = function(t) {
        null != this.m_currentDropItem && this.m_currentDropItem.removeClass("oj-valid-drop oj-invalid-drop"), this.m_currentDropItem = t, this.m_currentDropItem.addClass("oj-valid-drop")
    }, n.prototype._setAccInfo = function(t, e) {
        var i = t.attr("aria-label");
        null == i && (i = t.text());
        var r = "accessibleReorder" + e.charAt(0).toUpperCase() + e.substr(1) + "Item",
            s = this.listview.ojContext.getTranslatedString(r, {
                item: i
            });
        this.listview._setAccInfoText(s)
    }, n.prototype._adjustGroupItemStyle = function() {
        null == this.m_maxHeightAdjusted && this.listview._isTouchSupport() && (this.listview.element.find("ul." + this.listview.getGroupStyleClass()).each(function() {
            i(this).attr("oldMaxHeight", i(this).css("maxHeight").toString()), i(this).css("maxHeight", 1e4)
        }), this.m_maxHeightAdjusted = "adjusted")
    }, n.prototype._restoreGroupItemStyle = function() {
        this.listview._isTouchSupport() && this.listview.element.find("ul." + this.listview.getGroupStyleClass()).each(function() {
            i(this).css("maxHeight", parseInt(i(this).attr("oldMaxHeight"), 10)), i(this).removeAttr("oldMaxHeight")
        }), this.m_maxHeightAdjusted = null
    }, n.prototype._setDropPosition = function(t, e) {
        if ("line" === this._getDropIndicator()) return e.insertAfter(t), "after";
        var i = t.index();
        return null == this.m_dropTargetIndex || this.m_dropTargetIndex < i ? (e.insertAfter(t), "after") : (e.insertBefore(t), "before")
    }, n.prototype._checkFirstItemDropTarget = function(t, e, i) {
        if (i.classList.contains("oj-listview-first-drop-target")) return this.m_dropPosition = "before", void(e.style.top = "0px");
        if ("line" === this._getDropIndicator())
            if (null === t.previousElementSibling)
                if (null == this.m_firstDropTarget) {
                    var r = document.createElement("li");
                    r.classList.add("oj-listview-first-drop-target"), r.style.top = "0px", t.parentNode.appendChild(r), this.m_firstDropTarget = r
                } else this.m_dropPosition = "after", e.style.top = t.offsetTop + t.offsetHeight - this._getDropIndicatorHeight() + "px";
        else this.m_firstDropTarget && (this.m_firstDropTarget.parentNode && this.m_firstDropTarget.parentNode.removeChild(this.m_firstDropTarget), this.m_firstDropTarget = null)
    }, n.prototype._isDropOnDragItem = function(t, e) {
        return this._matchDragDataType(t) && null != this.m_dragItems && this.m_dragItems.length >= 0 && this.m_dragItems[0].key === e.get(0).key
    }, n.prototype._handleDragOver = function(t) {
        var e, r, s;
        if (this._adjustGroupItemStyle(), null != this.m_dragItems && "none" !== i(this.m_dragItems[0]).css("display"))
            if (e = i(this.m_dragItems[0]), -1 === (s = this._invokeDropCallback("dragOver", t, {
                    item: e.get(0)
                })) && this.IsItemReOrdering() && this.isDndInProgress() || !1 === s || t.isDefaultPrevented()) {
                r = this._createDropTarget(e);
                for (var a = 0; a < this.m_dragItems.length; a++) i(this.m_dragItems[a]).addClass(this.GetDragItemClass()).css("display", "none");
                r.insertBefore(e), this.m_dropTargetIndex = r.index()
            } else e.get(0).classList.remove("oj-hover"), e.get(0).classList.add("oj-listview-drag-source");
        else if (null != (e = this._findItem(t.target)) && e.length > 0) {
            if (this._isDropOnDragItem(t, e)) {
                if (s = this._invokeDndCallback("drop", "dragOver", t, {
                        item: e.get(0)
                    }), !t.isDefaultPrevented()) return -1
            } else s = this._invokeDropCallback("dragOver", t, {
                item: e.get(0)
            }); - 1 === s && this.IsItemReOrdering() && this.isDndInProgress() || !1 === s || t.isDefaultPrevented() ? (e.hasClass(this.listview.getItemStyleClass()) ? (this._cleanupGroupItem(), e.hasClass("oj-drop") ? r = this.m_dropTarget : (r = this._createDropTarget(e), this.m_dropPosition = this._setDropPosition(e, r), this._setAccInfo(e, this.m_dropPosition), this._setCurrentDropItem(e), this.m_dropTargetIndex = r.index()), this._checkFirstItemDropTarget(e.get(0), r.get(0), t.target)) : (this._cleanupDropTarget(), e.children("." + this.listview.getGroupItemStyleClass()).addClass("oj-drop"), this._setCurrentDropItem(e), this.m_dropTargetIndex = -1, this.m_dropPosition = "inside", this._setAccInfo(e, this.m_dropPosition)), t.preventDefault()) : i(t.target).hasClass(this.listview.getGroupStyleClass()) || (e.addClass("oj-invalid-drop"), this._cleanupDropTarget())
        } else {
            var n = this._getAndUpdateEmptyItem();
            null != n && n.length > 0 && (this._setCurrentDropItem(n), t.preventDefault())
        }
        return s
    }, n.prototype._getAndUpdateEmptyItem = function() {
        var t = this.listview.element.children("." + this.listview.getEmptyTextStyleClass());
        return 0 === t.length ? t = i(this.listview.element[0].querySelector(".oj-listview-no-data-item")) : t.get(0).textContent = "", t.addClass("oj-drop"), t
    }, n.prototype._isDndEventInElement = function(t, e) {
        var i = e.getBoundingClientRect(),
            r = t.originalEvent;
        return r.clientX >= i.left && r.clientX < i.right && r.clientY >= i.top && r.clientY < i.bottom
    }, n.prototype._handleDragLeave = function(t) {
        var e;
        if (null != this.m_currentDropItem) {
            var i = this._findItem(t.target);
            return null != i && i.length > 0 ? (i.removeClass("oj-valid-drop oj-invalid-drop"), e = this._invokeDropCallback("dragLeave", t, {
                item: i.get(0)
            }), !this._isDndEventInElement(t, t.currentTarget) && i.hasClass("oj-drop") && (this._cleanupDropTarget(), this._restoreGroupItemStyle())) : this._isDndEventInElement(t, t.currentTarget) || this._cleanupEmptyList(), -1 !== e ? e : void 0
        }
    }, n.prototype._isEmptyItem = function(t) {
        return t.hasClass(this.listview.getEmptyTextStyleClass()) || t.hasClass("oj-listview-no-data-item")
    }, n.prototype._handleDrop = function(t) {
        if (null != this.m_currentDropItem) {
            var e, i = t.originalEvent.dataTransfer.getData(this.GetDragSourceType());
            e = this._isEmptyItem(this.m_currentDropItem) ? {} : {
                item: this.m_currentDropItem.get(0),
                position: this.m_dropPosition
            }, this.IsItemReOrdering() && i === this.listview.element.get(0).id ? e.reorder = !0 : e.reorder = !1, null != this.m_currentDropItem && this.m_currentDropItem.removeClass("oj-valid-drop"), this._cleanupDropTarget(), this._restoreGroupItemStyle(), this._destroyDragImage();
            var r = this._invokeDropCallback("drop", t, e);
            if (e.reorder && (e.items = null == this.m_dragItems ? this.m_itemsDragged : this.m_dragItems, this.listview.Trigger("reorder", t, this.CreateReorderPayload(e.items, e.position, e.item)), t.preventDefault(), this.m_dragEndCallCheck = window.requestAnimationFrame(() => {
                    this.m_currentDragItem && this._handleDragEnd(t)
                })), this.m_currentDropItem = null, this.m_dropTargetIndex = -1, this.m_dropPosition = null, this.m_itemsDragged = null, -1 !== r) return r
        }
    }, n.prototype.CreateReorderPayload = function(t, e, i) {
        return {
            items: t,
            position: e,
            reference: i
        }
    }, n.prototype.prepareContextMenu = function(t) {
        var e = this,
            r = i(t);
        this.m_contextMenu !== t && (this.m_contextMenu = t, "OJ-MENU" === t.tagName ? (t.addEventListener("ojBeforeOpen", this._handleContextMenuBeforeOpen.bind(this)), t.addEventListener("ojAction", this._handleContextMenuSelect.bind(this))) : (r.on("ojbeforeopen", this._handleContextMenuBeforeOpen.bind(this)), r.on("ojselect", this._handleContextMenuSelect.bind(this))));
        var s = this._getCommands(t, function(t, r) {
            var s = e._buildContextMenuItem(r, t.tagName);
            "OJ-OPTION" === t.tagName ? (t.innerHTML = s.get(0).innerHTML, i(t).attr("data-oj-command", s.attr("data-oj-command"))) : (s.get(0).className = i(t).get(0).className, i(t).replaceWith(s))
        });
        this.m_menuItemsSet = s, s.length > 0 && r.data("oj-ojMenu") && ("OJ-MENU" === t.tagName ? t.refresh() : i(t).ojMenu("refresh"))
    }, n.prototype._getDndContextMenuItemSelector = function() {
        var t = this,
            e = "",
            i = ["cut", "copy", "paste", "paste-before", "paste-after", "pasteBefore", "pasteAfter"];
        return this.m_dndMenuItemSelector || (i.forEach(function(r, s) {
            e += "[data-oj-command=" + t.GetCommandPrefix() + r + "],", e += "[data-oj-command=" + r + "]", s < i.length - 1 && (e += ",")
        }), this.m_dndMenuItemSelector = e), this.m_dndMenuItemSelector
    }, n.prototype._getCommands = function(t, e) {
        var r = this,
            s = [];
        return i(t).find(this._getDndContextMenuItemSelector()).each(function() {
            var t;
            0 === i(this).children("a").length ? 0 === i(this).attr("data-oj-command").indexOf(r.GetCommandPrefix()) && (t = i(this).attr("data-oj-command").substring(r.GetCommandPrefix().length), e && e(this, t)) : (t = i(this).attr("data-oj-command")) === n.PASTE_BEFORE_COMMAND ? t = "paste-before" : t === n.PASTE_AFTER_COMMAND && (t = "paste-after"), t && s.push(t)
        }), s
    }, n.prototype._buildContextMenuItem = function(t, e) {
        return "paste-before" === t ? this._buildContextMenuListItem(n.PASTE_BEFORE_COMMAND, e) : "paste-after" === t ? this._buildContextMenuListItem(n.PASTE_AFTER_COMMAND, e) : this._buildContextMenuListItem(t, e)
    }, n.prototype._buildContextMenuListItem = function(t, e) {
        var r = i(document.createElement(e));
        return r.attr("data-oj-command", t), r.append(this._buildContextMenuLabel(t, "OJ-OPTION" === e)), r
    }, n.prototype._buildContextMenuLabel = function(t, e) {
        var r = "label" + t.charAt(0).toUpperCase() + t.slice(1),
            s = document.createTextNode(this.listview.ojContext.getTranslatedString(r));
        return e ? s : i('<a href="#"></a>').append(s)
    }, n.prototype._handleCut = function(t) {
        null != this.m_clipboard && i(this.m_clipboard).removeClass(this.GetCutStyleClass());
        var e = this.GetCutItems(t);
        this.listview.ojContext.element.focus(), i(e).addClass(this.GetCutStyleClass()), this.m_clipboard = e, this.listview.Trigger("cut", t, {
            items: e
        })
    }, n.prototype.GetCutItems = function(t) {
        return this._getSelectedItems()
    }, n.prototype._handleCopy = function(t) {
        null != this.m_clipboard && i(this.m_clipboard).removeClass(this.GetCutStyleClass());
        var e = this._getSelectedItems();
        this.m_clipboard = e, this.listview.Trigger("copy", t, {
            items: e
        })
    }, n.prototype._handlePaste = function(t, e, r) {
        this.listview.Trigger("paste", t, {
            item: e.get(0)
        }), i(this.m_clipboard).removeClass(this.GetCutStyleClass()), this.listview.Trigger("reorder", t, this.CreateReorderPayload(this.m_clipboard, r, e.get(0))), this.m_clipboard = null
    }, n.prototype._handleContextMenuSelect = function(t, e) {
        if (null != this.m_contextMenuItem) switch ((e ? e.item : i(t.target)).attr("data-oj-command")) {
            case n.CUT_COMMAND:
                this._handleCut(t);
                break;
            case n.COPY_COMMAND:
                this._handleCopy(t);
                break;
            case n.PASTE_COMMAND:
                this._handlePaste(t, this.m_contextMenuItem, "inside"), this.m_contextMenuItem = null;
                break;
            case n.PASTE_BEFORE_COMMAND:
                this._handlePaste(t, this.m_contextMenuItem, "before"), this.m_contextMenuItem = null;
                break;
            case n.PASTE_AFTER_COMMAND:
                this._handlePaste(t, this.m_contextMenuItem, "after"), this.m_contextMenuItem = null
        }
    }, n.prototype._appendToMenuContainer = function(t, e) {
        null != this.m_menuItemsSet && ("paste-before" === e ? e = n.PASTE_BEFORE_COMMAND : "paste-after" === e && (e = n.PASTE_AFTER_COMMAND), t.find("[data-oj-command='" + e + "']").removeClass("oj-disabled"))
    }, n.prototype._handleContextMenuBeforeOpen = function(t, e) {
        var r = e ? e.openOptions.launcher : t.detail.openOptions.launcher;
        if (this.IsItemReOrdering()) {
            var s = i(t.target);
            s.find(this._getDndContextMenuItemSelector()).addClass("oj-disabled"), null != r && null != this.m_menuItemsSet && 0 !== this.m_menuItemsSet.length ? (r.children().first().hasClass(this.listview.getGroupItemStyleClass()) ? null != this.m_clipboard && this._appendToMenuContainer(s, "paste") : (this._appendToMenuContainer(s, "cut"), this._appendToMenuContainer(s, "copy"), null != this.m_clipboard && (this._appendToMenuContainer(s, "paste-before"), this._appendToMenuContainer(s, "paste-after"))), "OJ-MENU" !== s.get(0).tagName && s.ojMenu("refresh"), this.m_contextMenuItem = r) : "OJ-MENU" !== s.get(0).tagName && s.ojMenu("refresh")
        } else this.m_contextMenuItem = r
    }, n.prototype.HandleKeyDown = function(t) {
        if (t.ctrlKey || t.metaKey) {
            var e = t.keyCode;
            if (e === n.X_KEY || e === n.C_KEY || e === n.V_KEY) {
                var r = this.listview.ojContext._GetContextMenu();
                if (null == r) return !1;
                var s = this._getCommands(r);
                if (0 === s.length) return !1;
                if (e === n.X_KEY && s.indexOf("cut") > -1) return this._handleCut(t), !0;
                if (e === n.C_KEY && s.indexOf("copy") > -1) return this._handleCopy(t), !0;
                if (e === n.V_KEY) {
                    var a, o = i(this._getActiveItem());
                    if (null != this.m_clipboard) {
                        if (o.children().first().hasClass(this.listview.getGroupItemStyleClass()) ? s.indexOf("paste") > -1 && (a = "inside") : s.indexOf("paste-before") > -1 ? a = "before" : s.indexOf("paste-after") > -1 && (a = "after"), null != a) return this._handlePaste(t, o, a), !0
                    } else this.listview.Trigger("paste", t, {
                        item: o.get(0)
                    })
                }
            }
        }
        return !1
    }, n.prototype.shouldDragCurrentItem = function() {
        return !1
    }, n.prototype.GetDragSourceType = function() {
        return "text/ojlistview-dragsource-id"
    }, t.ListViewDndContext = n, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojlistviewdnd.js.map