/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "jquery", "ojs/ojcore-base", "ojs/ojlistviewdnd"], function(t, e, o, a) {
    "use strict";
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
    const r = function(t) {
        r.superclass.constructor.call(this, t)
    };
    o._registerLegacyNamespaceProp("NavigationListDndContext", r), o.Object.createSubclass(r, o.ListViewDndContext, "oj.NavigationListDndContext"), r.prototype.GetDragAffordanceClass = function() {
        return "oj-tabbar-drag-handle"
    }, r.prototype.GetDragImageClass = function() {
        return "oj-tabbar-drag-image"
    }, r.prototype.GetDragItemClass = function() {
        return "oj-tabbar-drag-item"
    }, r.prototype.GetCutStyleClass = function() {
        return "oj-tabbar-cut"
    }, r.prototype.GetCommandPrefix = function() {
        return "oj-tabbar-"
    }, r.prototype.shouldDragCurrentItem = function() {
        return !0
    }, r.prototype.GetDragImageWidth = function(t) {
        var e = this.listview.GetOption("edge");
        return "top" === e || "bottom" === e ? t.offsetWidth : o.NavigationListDndContext.superclass.GetDragImageWidth.call(this, t)
    }, r.prototype.GetDragSourceType = function() {
        return "text/ojnavigationlist-dragsource-id"
    }, r.prototype.CreateReorderPayload = function(t, e, o) {
        return {
            item: t[0],
            position: e,
            reference: o
        }
    }, r.prototype.IsItemReOrdering = function() {
        return "enabled" === this.listview.GetOption("reorderable")
    }, r.prototype.GetDefaultDataType = function() {
        return "text/ojnavigationlist-items-data"
    }, r.prototype.SetDragItemImage = function(t, o) {
        var a = Math.max(0, t.offsetX),
            r = Math.max(0, t.offsetY),
            n = e(o[0].cloneNode(!0));
        n.removeClass("oj-selected oj-focus oj-focus-highlight  oj-hover").addClass("oj-drag");
        var s = e(document.createElement("div"));
        s.get(0).className = this.listview.ojContext.element.get(0).className, s.addClass(this.GetDragImageClass()).css({
            width: this.GetDragImageWidth(o[0]),
            height: o[0].offsetHeight
        }).append(n), e("body").append(s), this.m_dragImage = s, t.dataTransfer.setDragImage(s.get(0), a, r)
    }, r.prototype.GetCutItems = function(t) {
        var e = [];
        return e.push(this.m_contextMenuItem && this.m_contextMenuItem.length > 0 ? this.m_contextMenuItem[0] : this._getActiveItem()), e
    }, t.NavigationListDndContext = r, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojnavigationlistdnd.js.map