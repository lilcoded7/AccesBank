/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base", "ojs/ojcomponentcore", "ojs/ojthemeutils", "jquery", "ojs/ojdomutils", "ojs/ojnavigationlistdnd", "ojs/ojlistview", "ojs/ojdatacollection-common", "ojs/ojmenu", "ojs/ojbutton"], function(t, e, i, s, n, o, a, l, r, h) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
    var d = {
        properties: {
            as: {
                type: "string",
                value: ""
            },
            currentItem: {
                type: "any",
                writeback: !0
            },
            data: {
                type: "object",
                extension: {
                    webelement: {
                        exceptionStatus: [{
                            type: "deprecated",
                            since: "11.0.0",
                            description: "Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."
                        }]
                    }
                }
            },
            display: {
                type: "string",
                enumValues: ["all", "icons"],
                value: "all"
            },
            drillMode: {
                type: "string",
                enumValues: ["collapsible", "none", "sliding"],
                value: "none"
            },
            edge: {
                type: "string",
                enumValues: ["bottom", "start", "top"],
                value: "start"
            },
            expanded: {
                type: "KeySet",
                writeback: !0
            },
            hierarchyMenuThreshold: {
                type: "number",
                value: 0
            },
            item: {
                type: "object",
                properties: {
                    renderer: {
                        type: "function"
                    },
                    selectable: {
                        type: "function|boolean",
                        value: !0
                    }
                }
            },
            overflow: {
                type: "string",
                enumValues: ["hidden", "popup"],
                value: "hidden"
            },
            rootLabel: {
                type: "string",
                value: "Navigation List"
            },
            selection: {
                type: "any",
                writeback: !0
            },
            translations: {
                type: "object",
                value: {},
                properties: {
                    defaultRootLabel: {
                        type: "string"
                    },
                    hierMenuBtnLabel: {
                        type: "string"
                    },
                    msgFetchingData: {
                        type: "string"
                    },
                    msgNoData: {
                        type: "string"
                    },
                    overflowItemLabel: {
                        type: "string"
                    },
                    previousIcon: {
                        type: "string"
                    },
                    selectedLabel: {
                        type: "string"
                    }
                }
            }
        },
        methods: {
            getContextByNode: {},
            getProperty: {},
            refresh: {},
            setProperties: {},
            setProperty: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        events: {
            ojAnimateEnd: {},
            ojAnimateStart: {},
            ojBeforeCollapse: {},
            ojBeforeCurrentItem: {},
            ojBeforeExpand: {},
            ojBeforeSelect: {},
            ojCollapse: {},
            ojExpand: {}
        },
        extension: {}
    };
    ! function() {
        d.extension._WIDGET_NAME = "ojNavigationList", d.extension._ALIASED_PROPS = {
            hierarchyMenuThreshold: "hierarchyMenuDisplayThresholdLevel"
        }, oj.CustomElementBridge.register("oj-navigation-list", {
            metadata: d
        });
        var t = {
            properties: {
                as: {
                    type: "string",
                    value: ""
                },
                currentItem: {
                    type: "any",
                    writeback: !0
                },
                data: {
                    type: "object"
                },
                display: {
                    type: "string",
                    enumValues: ["all", "icons", "stacked"],
                    value: "all"
                },
                edge: {
                    type: "string",
                    enumValues: ["bottom", "end", "start", "top"],
                    value: "start"
                },
                item: {
                    type: "object",
                    properties: {
                        renderer: {
                            type: "function"
                        },
                        selectable: {
                            type: "function|boolean",
                            value: !0
                        }
                    }
                },
                layout: {
                    type: "string",
                    enumValues: ["condense", "stretch"],
                    value: "stretch"
                },
                overflow: {
                    type: "string",
                    enumValues: ["hidden", "popup"],
                    value: "hidden"
                },
                reorderable: {
                    type: "string",
                    enumValues: ["disabled", "enabled"],
                    value: "disabled"
                },
                selection: {
                    type: "any",
                    writeback: !0
                },
                translations: {
                    type: "object",
                    value: {},
                    properties: {
                        accessibleReorderAfterItem: {
                            type: "string"
                        },
                        accessibleReorderBeforeItem: {
                            type: "string"
                        },
                        accessibleReorderTouchInstructionText: {
                            type: "string"
                        },
                        labelCut: {
                            type: "string"
                        },
                        labelPasteAfter: {
                            type: "string"
                        },
                        labelPasteBefore: {
                            type: "string"
                        },
                        labelRemove: {
                            type: "string"
                        },
                        msgFetchingData: {
                            type: "string"
                        },
                        msgNoData: {
                            type: "string"
                        },
                        overflowItemLabel: {
                            type: "string"
                        },
                        removeCueText: {
                            type: "string"
                        },
                        selectedLabel: {
                            type: "string"
                        }
                    }
                },
                truncation: {
                    type: "string",
                    enumValues: ["none", "progressive"],
                    value: "none"
                }
            },
            methods: {
                getContextByNode: {},
                getProperty: {},
                refresh: {},
                setProperties: {},
                setProperty: {},
                getNodeBySubId: {},
                getSubIdByNode: {}
            },
            events: {
                ojAnimateEnd: {},
                ojAnimateStart: {},
                ojBeforeCurrentItem: {},
                ojBeforeDeselect: {},
                ojBeforeRemove: {},
                ojBeforeSelect: {},
                ojDeselect: {},
                ojRemove: {},
                ojReorder: {}
            },
            extension: {}
        };
        t.extension._WIDGET_NAME = "ojNavigationList", oj.CustomElementBridge.register("oj-tab-bar", {
            metadata: t
        })
    }();
    const _ = function(e, i) {
        var n = function() {};
        return t.Object.createSubclass(n, e, ""), s.extend(n.prototype, i), n
    }(t._ojListView, {
        OPTION_DRILL_MODE: "drillMode",
        OPTION_DRILL_MODE_NONE: "none",
        OPTION_DRILL_MODE_COLLAPSIBLE: "collapsible",
        OPTION_DRILL_MODE_SLIDING: "sliding",
        OPTION_DISPLAY: "display",
        OPTION_DISPLAY_ICONS: "icons",
        OPTION_DISPLAY_ALL: "all",
        OPTION_DISPLAY_STACKED: "stacked",
        OPTION_LAYOUT_STRETCH: "stretch",
        OPTION_LAYOUT_CONDENSE: "condense",
        OPTION_EDGE: "edge",
        OPTION_EDGE_TOP: "top",
        OPTION_EDGE_END: "end",
        OPTION_EDGE_START: "start",
        OPTION_EDGE_BOTTOM: "bottom",
        OPTION_SELECTION: "selection",
        OPTION_CURRENT_ITEM: "currentItem",
        OPTION_ITEM: "item",
        TAG_NAME_TAB_BAR: "oj-tab-bar",
        NAVLIST_ITEM_SUBID_KEY: {
            navlist: "oj-navigationlist-item",
            tabbar: "oj-tabbar-item"
        },
        NAVLIST_EXPANDED_STYLE_CLASS: {
            navlist: "oj-navigationlist-expanded",
            tabbar: "oj-tabbar-expanded"
        },
        NAVLIST_COLLAPSIBLE_STYLE_CLASS: {
            navlist: "oj-navigationlist-collapsible",
            tabbar: "oj-tabbar-collapsible"
        },
        NAVLIST_VERTICAL_STYLE_CLASS: {
            navlist: "oj-navigationlist-vertical",
            tabbar: "oj-tabbar-vertical"
        },
        ITEM_CONTENT_STYLE_CLASS: {
            navlist: "oj-navigationlist-item-content",
            tabbar: "oj-tabbar-item-content"
        },
        NAVLIST_DIVIDERS_STYLE_CLASS: {
            navlist: "oj-navigationlist-item-dividers",
            tabbar: "oj-tabbar-item-dividers"
        },
        LAST_ITEM_STYLE_CLASS: {
            navlist: "oj-navigationlist-item-last-child",
            tabbar: "oj-tabbar-item-last-child"
        },
        EXPANDED_STYLE_CLASS: "oj-expanded",
        COLLAPSED_STYLE_CLASS: "oj-collapsed",
        CONDENSE_STYLE_CLASS: "oj-condense",
        SLIDING_NAVLIST_CURRENT_STYLE_CLASS: "oj-navigationlist-current",
        DIVIDER_STYLE_CLASS: {
            navlist: "oj-navigationlist-divider",
            tabbar: "oj-tabbar-divider"
        },
        NAVLIST_OVERFLOW_MENU_ITEM: {
            navlist: "oj-navigationlist-overflow-menu-item",
            tabbar: "oj-tabbar-overflow-menu-item"
        },
        NAVLIST_OVERFLOW_MENU: {
            navlist: "oj-navigationlist-overflow-menu",
            tabbar: "oj-tabbar-overflow-menu"
        },
        NAVLIST_OVERFLOW_ITEM_ICON: {
            navlist: "oj-navigationlist-overflow-item-icon",
            tabbar: "oj-tabbar-overflow-item-icon"
        },
        _CATEGORY_DIVIDER_STYLE_CLASS: {
            navlist: "oj-navigationlist-category-divider",
            tabbar: "oj-tabbar-category-divider"
        },
        _ITEM_LABEL_STYLE_CLASS: {
            navlist: "oj-navigationlist-item-label",
            tabbar: "oj-tabbar-item-label"
        },
        _ICON_ONLY_STYLE_CLASS: {
            navlist: "oj-navigationlist-icon-only",
            tabbar: "oj-tabbar-icon-only"
        },
        _STACK_ICON_STYLE_CLASS: {
            navlist: "oj-navigationlist-stack-icon-label",
            tabbar: "oj-tabbar-stack-icon-label"
        },
        _ITEM_ICON_STYLE_CLASS: {
            navlist: "oj-navigationlist-item-icon",
            tabbar: "oj-tabbar-item-icon"
        },
        _ITEM_BADGE_STYLE_CLASS: {
            navlist: "oj-navigationlist-item-end",
            tabbar: "oj-tabbar-item-end"
        },
        _HORIZONTAL_NAVLIST_STYLE_CLASS: {
            navlist: "oj-navigationlist-horizontal",
            tabbar: "oj-tabbar-horizontal"
        },
        _NAVLIST_END_EDGE_STYLE_CLASS: {
            navlist: "oj-navigationlist-vertical-end",
            tabbar: "oj-tabbar-vertical-end"
        },
        _NAVLIST_BOTTOM_EDGE_STYLE_CLASS: {
            navlist: "oj-navigationlist-horizontal-bottom",
            tabbar: "oj-tabbar-horizontal-bottom"
        },
        _NAVLIST_HAS_ICONS: {
            navlist: "oj-navigationlist-has-icons",
            tabbar: "oj-tabbar-has-icons"
        },
        _NAVLIST_ITEM_HAS_NO_ICON: {
            navlist: "oj-navigationlist-item-no-icon",
            tabbar: "oj-tabbar-item-no-icon"
        },
        _NAVLIST_ITEM_TITLE: {
            navlist: "oj-navigationlist-item-title",
            tabbar: "oj-tabbar-item-title"
        },
        _NAVLIST_STYLE_CLASS: {
            navlist: "oj-navigationlist",
            tabbar: "oj-tabbar"
        },
        _NAVLIST_TOUCH_STYLE_CLASS: {
            navlist: "oj-navigationlist-touch",
            tabbar: "oj-tabbar-touch"
        },
        _NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS: {
            navlist: "oj-navigationlist-listview-container",
            tabbar: "oj-tabbar-listview-container"
        },
        _IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION: "IsTitleAttrDueToTruncation",
        _APPLICATION_LEVEL_NAV_STYLE_CLASS: "oj-navigationlist-app-level",
        _PAGE_LEVEL_NAV_STYLE_CLASS: "oj-navigationlist-page-level",
        _NAVLIST_ITEM_ICON_HAS_TITLE: "navigationListItemIconHastitle",
        _NAVLIST_NO_FOLLOW_LINK_CLASS: {
            navlist: "oj-navigationlist-nofollow-link",
            tabbar: "oj-tabbar-nofollow-link"
        },
        _CONTAINER_STYLE_CLASS: {
            navlist: "oj-navigationlist-listview",
            tabbar: "oj-tabbar-listview"
        },
        _ELEMENT_STYLE_CLASS: {
            navlist: "oj-navigationlist-element",
            tabbar: "oj-tabbar-element"
        },
        _ELEMENT_EMPTY_TEXT_STYLE_CLASS: {
            navlist: "oj-navigationlist-empty-text",
            tabbar: "oj-tabbar-empty-text"
        },
        _ELEMENT_NO_DATA_MSG_STYLE_CLASS: {
            navlist: "oj-navigationlist-no-data-message",
            tabbar: "oj-tabbar-no-data-message"
        },
        _FOCUSED_ELEMENT_STYLE_CLASS: {
            navlist: "oj-navigationlist-focused-element",
            tabbar: "oj-tabbar-focused-element"
        },
        _ITEM_ELEMENT_STYLE_CLASS: {
            navlist: "oj-navigationlist-item-element",
            tabbar: "oj-tabbar-item-element"
        },
        _ITEM_STYLE_CLASS: {
            navlist: "oj-navigationlist-item",
            tabbar: "oj-tabbar-item"
        },
        _OPTION_DEFAULT_STYLE_CLASS: {
            navlist: "oj-navigationlist-option-defaults",
            tabbar: "oj-tabbar-option-defaults"
        },
        _LOADING_STATUS_ICON_STYLE_CLASS: {
            navlist: "oj-navigationlist-loading-icon",
            tabbar: "oj-tabbar-loading-icon"
        },
        _STATUS_MSG_STYLE_CLASS: {
            navlist: "oj-navigationlist-status-message",
            tabbar: "oj-tabbar-status-message"
        },
        _STATUS_STYLE_CLASS: {
            navlist: "oj-navigationlist-status",
            tabbar: "oj-tabbar-status"
        },
        getItemLabel: function(t) {
            var e = this.getItemContentElement(t);
            return e.is("a") ? s.trim(e.text()) : s.trim(e.find("." + this.getItemTitleStyleClass()).text())
        },
        getItemContentElement: function(t) {
            var e = t.children("." + this.getItemContentStyleClass());
            return 0 === e.length && 0 === (e = t.children("." + this.getGroupItemStyleClass()).children("." + this.getItemContentStyleClass())).length && (e = t.children("." + this.getGroupItemStyleClass()).children(":not(." + this.getExpandIconStyleClass() + "):not(." + this.getCollapseIconStyleClass() + ")")), e
        },
        isRtl: function() {
            return "rtl" === this.ojContext._GetReadingDirection()
        },
        _initNavigationMode: function(t) {
            t[0].tagName.toLowerCase() === this.TAG_NAME_TAB_BAR ? this._navigationMode = "tabbar" : this._navigationMode = "navlist"
        },
        _getNavigationMode: function() {
            return this._navigationMode
        },
        renderComplete: function() {
            this.m_listHandler.BeforeRenderComplete(), _.superclass.renderComplete.apply(this, arguments)
        },
        itemInsertComplete: function(t, e) {
            this.m_listHandler.ItemInsertComplete(t, e), _.superclass.itemInsertComplete.apply(this, arguments)
        },
        itemRemoveComplete: function(t, e) {
            return this.m_listHandler.ItemRemoveComplete(t), _.superclass.itemRemoveComplete.apply(this, arguments)
        },
        _restoreContent: function(t) {
            var e = t.children();
            t.removeAttr("style").removeClass(this.getHasIconsStyleClass()).removeAttr("aria-hidden");
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                if ((n = s(n)).hasClass(this.getDividerStyleClass())) n.remove();
                else {
                    var o = this.getItemContentElement(n);
                    o.removeClass(this.getItemContentStyleClass()).removeClass(this.getHasNoIconStyleClass()).removeAttr("aria-haspopup");
                    var a = o.children("." + this.getItemIconStyleClass());
                    a && a.length > 0 && (a.removeAttr("role"), a.removeAttr("aria-label"), this._removeToolTipOnIcon(a)), n.removeClass("oj-default").removeAttr("role").removeAttr("aria-disabled").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-pressed");
                    var l = this.getFocusItem(n);
                    l.removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-pressed"), o.children("." + this.getItemLabelStyleClass()).contents().unwrap(), n.find("." + this.getNavListRemoveIcon()).remove(), l.data(this._IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION) && l.removeAttr("title");
                    var r = n.children("ul");
                    r.length > 0 ? (this.m_listHandler.RestoreItem(n, o, r), this._restoreContent(r)) : this.m_listHandler.RestoreItem(n, o)
                }
            }
        },
        GetDnDContext: function() {
            if (void 0 !== o.NavigationListDndContext && this.ojContext.element[0].tagName.toLowerCase() === this.TAG_NAME_TAB_BAR) return new o.NavigationListDndContext(this)
        },
        IsNodeEditableOrClickable: function(t) {
            return !(t.hasClass(this.getItemContentStyleClass()) || t.hasClass(this.getExpandIconStyleClass()) || t.hasClass(this.getCollapseIconStyleClass())) && _.superclass.IsNodeEditableOrClickable.apply(this, arguments)
        },
        IsElementEditableOrClickable: function(t) {
            return t.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && !t.hasClass(this.getItemContentStyleClass()) || t.hasClass("oj-component")
        },
        _focusable: function(t) {
            return s(t.data).is("li") ? !s(t.data).hasClass("oj-disabled") : !s(t.parentElement).hasClass("oj-disabled")
        },
        _prepareListViewOptions: function(t) {
            var e = s.extend({}, t);
            return e.drillMode = "none" !== t.drillMode ? "collapsible" : "none", e.selection = null !== t.selection ? [t.selection] : [], e.selectionMode = "single", e.item = s.extend({
                focusable: this._focusable
            }, t.item), e.element = this._list, e
        },
        updateListViewOption: function(t, e) {
            switch (t) {
                case this.OPTION_DRILL_MODE:
                    this.options[this.OPTION_DRILL_MODE] = "none" !== e ? "collapsible" : "none";
                    break;
                case this.OPTION_SELECTION:
                    this.options[this.OPTION_SELECTION] = null !== e ? [e] : [];
                    break;
                case this.OPTION_ITEM:
                    this.options[this.OPTION_ITEM] = s.extend({
                        focusable: this._focusable
                    }, e);
                    break;
                default:
                    this.options[t] = e
            }
        },
        getRootLabel: function() {
            return this.ojContext.options.rootLabel ? this.ojContext.options.rootLabel : this.ojContext.getTranslatedString("defaultRootLabel")
        },
        SetAriaProperties: function() {
            "tabbar" === this._getNavigationMode() && this.ojContext.element.attr("aria-multiselectable", !1)
        },
        HandleFocus: function(t) {
            return this.m_listHandler.HandleFocus(t)
        },
        HandleBlur: function(t) {
            return this.m_listHandler.HandleBlur(t)
        },
        SetRootElementTabIndex: function() {
            this.ojContext.element.attr("tabIndex", 0)
        },
        RemoveRootElementTabIndex: function() {
            this.ojContext.element.removeAttr("tabIndex")
        },
        UnsetAriaProperties: function() {
            this.ojContext.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable")
        },
        isLoadMoreOnScroll: function() {
            return !1
        },
        ShouldUseGridRole: function() {
            return !1
        },
        init: function(t) {
            var e = this,
                i = t.ojContext.element;
            this._initNavigationMode(i), i.addClass(this.getNavListStyleClass()), n.isTouchSupported() && i.addClass(this.getNavListTouchStyleClass()), this._list = i.children("ul:first"), 0 === this._list.length && (this._list = s(document.createElement("ul")), i.append(this._list));
            var o = s(document.createElement("div"));
            o.addClass(this.getNavListContainerStyleClass()), o.attr("role", "presentation"), this._list.wrap(o);
            var a = this._prepareListViewOptions(t);
            _.superclass.init.call(this, a), this.getListContainer().attr("role", "presentation"), this.element.removeClass("oj-component-initnode"), this.ojContext._on(this.ojContext.element, {
                click: function(t) {
                    e.m_listHandler.HandleClick(t)
                },
                keydown: function(t) {
                    e.m_listHandler.HandleKeydown(t)
                },
                mouseup: function(t) {
                    e._clearActiveState(t)
                },
                mouseover: function(t) {
                    if (s(t.target).closest("a." + e.getItemContentStyleClass()).length > 0) {
                        var i = s(t.target).closest("a." + e.getItemContentStyleClass()),
                            n = i.find("." + e.getItemLabelStyleClass());
                        n[0].offsetWidth < n[0].scrollWidth && !i.attr("title") && (i.attr("title", n.text().trim()), i.data(e._IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION, "true"))
                    }
                },
                mouseout: function(t) {
                    if (s(t.target).closest("a." + e.getItemContentStyleClass()).length > 0) {
                        var i = s(t.target).closest("a." + e.getItemContentStyleClass());
                        i.data(e._IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION) && (i.removeData(e._IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION), i.removeAttr("title")), e._clearActiveState(t)
                    }
                }
            })
        },
        _initListHandler: function() {
            var e = this.ojContext.options.drillMode,
                i = this.ojContext.options.edge;
            e === this.OPTION_DRILL_MODE_SLIDING ? this.m_listHandler = new t.SlidingNavListHandler(this, this.ojContext.element, this.ojContext) : e === this.OPTION_DRILL_MODE_COLLAPSIBLE ? this.m_listHandler = new t.CollapsibleNavListHandler(this, this.ojContext.element, this.ojContext) : e !== this.OPTION_DRILL_MODE_NONE || i !== this.OPTION_EDGE_TOP && i !== this.OPTION_EDGE_BOTTOM ? this.m_listHandler = new t.DefaultNavListHandler(this, this.ojContext.element, this.ojContext) : this.m_listHandler = new t.HorizontalNavListHandler(this, this.ojContext.element, this.ojContext), this.m_listHandler.Init(this.options);
            var s = this.ojContext.options.navigationLevel;
            this._setNavigationLevel(s)
        },
        _setNavigationLevel: function(t) {
            "none" === this.ojContext.options.drillMode && ("application" === t || "oj-navigation-list" === this.ojContext.element[0].tagName.toLowerCase() ? (this.ojContext.element.addClass(this._APPLICATION_LEVEL_NAV_STYLE_CLASS), this.ojContext.element.removeClass(this._PAGE_LEVEL_NAV_STYLE_CLASS)) : "page" === t && (this.ojContext.element.addClass(this._PAGE_LEVEL_NAV_STYLE_CLASS), this.ojContext.element.removeClass(this._APPLICATION_LEVEL_NAV_STYLE_CLASS)))
        },
        _clearActiveState: function(t) {
            var e = this.FindItem(s(t.target));
            null != e && this.HighlightUnhighlightElem(e, "oj-active", !1)
        },
        afterCreate: function() {
            this._initListHandler(), _.superclass.afterCreate.apply(this, arguments)
        },
        getAnimationEffect: function(t) {
            return this.m_listHandler.GetAnimationEffect(t)
        },
        notifyAttached: function() {
            _.superclass.notifyAttached.apply(this, arguments), this.m_listHandler.NotifyAttached()
        },
        ShouldRegisterResizeListener: function() {
            return !0
        },
        HandleResize: function(t, e) {
            var i = this;
            _.superclass.HandleResize.apply(this, arguments), t > 0 && e > 0 && null != this.m_listHandler && i.m_listHandler.HandleResize(t, e)
        },
        BeforeInsertItem: function() {
            this.m_listHandler.BeforeInsertItem()
        },
        HandleMouseDownOrTouchStart: function(t) {
            _.superclass.HandleMouseDownOrTouchStart.apply(this, arguments);
            var e = this.FindItem(s(t.target));
            e && !e.hasClass("oj-disabled") && this.HighlightUnhighlightElem(e, "oj-active", !0)
        },
        HandleTouchEndOrCancel: function(t) {
            this._clearActiveState(t), _.superclass.HandleTouchEndOrCancel.apply(this, arguments)
        },
        getItemContentStyleClass: function() {
            return this.ITEM_CONTENT_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListExpandedStyleClass: function() {
            return this.NAVLIST_EXPANDED_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListCollapsibleStyleClass: function() {
            return this.NAVLIST_COLLAPSIBLE_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListVerticalStyleClass: function() {
            return this.NAVLIST_VERTICAL_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListItemsDividerStyleClass: function() {
            return this.NAVLIST_DIVIDERS_STYLE_CLASS[this._getNavigationMode()]
        },
        getLastItemStyleClass: function() {
            return this.LAST_ITEM_STYLE_CLASS[this._getNavigationMode()]
        },
        getItemBadgeStyleClass: function() {
            return this._ITEM_BADGE_STYLE_CLASS[this._getNavigationMode()]
        },
        getDividerStyleClass: function() {
            return this.DIVIDER_STYLE_CLASS[this._getNavigationMode()]
        },
        getOverflowItemStyleClass: function() {
            return this.NAVLIST_OVERFLOW_MENU_ITEM[this._getNavigationMode()]
        },
        getOverflowMenuStyleClass: function() {
            return this.NAVLIST_OVERFLOW_MENU[this._getNavigationMode()]
        },
        getOverflowItemIconStyleClass: function() {
            return this.NAVLIST_OVERFLOW_ITEM_ICON[this._getNavigationMode()]
        },
        getCategoryDividerStyleClass: function() {
            return this._CATEGORY_DIVIDER_STYLE_CLASS[this._getNavigationMode()]
        },
        getItemLabelStyleClass: function() {
            return this._ITEM_LABEL_STYLE_CLASS[this._getNavigationMode()]
        },
        getIconOnlyStyleClass: function() {
            return this._ICON_ONLY_STYLE_CLASS[this._getNavigationMode()]
        },
        getStackedIconStyleClass: function() {
            return this._STACK_ICON_STYLE_CLASS[this._getNavigationMode()]
        },
        getItemIconStyleClass: function() {
            return this._ITEM_ICON_STYLE_CLASS[this._getNavigationMode()]
        },
        getHorizontalNavListStyleClass: function() {
            return this._HORIZONTAL_NAVLIST_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListEndEdgeStyleClass: function() {
            return this._NAVLIST_END_EDGE_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListBottomEdgeStyleClass: function() {
            return this._NAVLIST_BOTTOM_EDGE_STYLE_CLASS[this._getNavigationMode()]
        },
        getHasIconsStyleClass: function() {
            return this._NAVLIST_HAS_ICONS[this._getNavigationMode()]
        },
        getHasNoIconStyleClass: function() {
            return this._NAVLIST_ITEM_HAS_NO_ICON[this._getNavigationMode()]
        },
        getItemTitleStyleClass: function() {
            return this._NAVLIST_ITEM_TITLE[this._getNavigationMode()]
        },
        getNavListStyleClass: function() {
            return this._NAVLIST_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListTouchStyleClass: function() {
            return this._NAVLIST_TOUCH_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListContainerStyleClass: function() {
            return this._NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS[this._getNavigationMode()]
        },
        getNoFollowLinkStyleClass: function() {
            return this._NAVLIST_NO_FOLLOW_LINK_CLASS[this._getNavigationMode()]
        },
        getCondenseStyleClass: function() {
            return this.CONDENSE_STYLE_CLASS
        },
        getItemSubIdKey: function() {
            return this.isTabBar() ? this.NAVLIST_ITEM_SUBID_KEY.tabbar : this.NAVLIST_ITEM_SUBID_KEY.navlist
        },
        GetContainerStyleClass: function() {
            return this._CONTAINER_STYLE_CLASS[this._getNavigationMode()]
        },
        GetStyleClass: function() {
            return this._ELEMENT_STYLE_CLASS[this._getNavigationMode()]
        },
        getEmptyTextMarkerClass: function() {
            return this._ELEMENT_EMPTY_TEXT_STYLE_CLASS[this._getNavigationMode()]
        },
        getEmptyTextStyleClass: function() {
            return this._ELEMENT_NO_DATA_MSG_STYLE_CLASS[this._getNavigationMode()]
        },
        getNavListRemoveIcon: function() {
            return "oj-tabbar-remove-icon"
        },
        getNavListRemoveCommand: function() {
            return "oj-tabbar-remove"
        },
        getRemovableStyleClass: function() {
            return "oj-removable"
        },
        getItemStyleClass: function() {
            return this._ITEM_STYLE_CLASS[this._getNavigationMode()]
        },
        getItemLayoutStyleClass: function() {
            return this.getItemStyleClass()
        },
        getFocusedElementStyleClass: function() {
            return this._FOCUSED_ELEMENT_STYLE_CLASS[this._getNavigationMode()]
        },
        getItemElementStyleClass: function() {
            return this._ITEM_ELEMENT_STYLE_CLASS[this._getNavigationMode()]
        },
        getCollapseIconStyleClass: function() {
            return "oj-navigationlist-collapse-icon"
        },
        getExpandIconStyleClass: function() {
            return "oj-navigationlist-expand-icon"
        },
        getDepthStyleClass: function(t) {
            return "oj-navigationlist-depth-" + t
        },
        getGroupItemStyleClass: function() {
            return "oj-navigationlist-group-item"
        },
        getGroupStyleClass: function() {
            return "oj-navigationlist-group"
        },
        getGroupExpandStyleClass: function() {
            return "oj-navigationlist-collapsible-transition"
        },
        getGroupCollapseStyleClass: function() {
            return this.getGroupExpandStyleClass()
        },
        getStyleValues: function() {
            const e = {};
            return Object.entries(_._CSS_Vars[this._getNavigationMode()]).forEach(([s, n]) => {
                "animation" === s ? e.animation = t._ojListView.getComplexCSSVariable(n) : e[s] = i.getCachedCSSVarValues([n])[0]
            }), e
        },
        getLoadingStatusIconStyleClass: function() {
            return this._LOADING_STATUS_ICON_STYLE_CLASS[this._getNavigationMode()]
        },
        getStatusMessageStyleClass: function() {
            return this._STATUS_MSG_STYLE_CLASS[this._getNavigationMode()]
        },
        getStatusStyleClass: function() {
            return this._STATUS_STYLE_CLASS[this._getNavigationMode()]
        },
        AnimateExpand: function(t, e, i) {
            return this.m_listHandler.Expand(t, e, i)
        },
        AnimateCollapse: function(t, e, i, s) {
            return this.m_listHandler.Collapse(t, e, i, s)
        },
        HandleArrowKeys: function(t, e, i) {
            return !i.altKey && this.m_listHandler.HandleArrowKeys(t, e, i)
        },
        IsArrowKey: function(t) {
            return this.m_listHandler.IsArrowKey(t)
        },
        GetState: function(t) {
            return this.m_listHandler.GetState(t)
        },
        SetState: function(t, e) {
            this.m_listHandler.SetState(t, e)
        },
        HandleMouseClick: function(t) {
            var e = s(t.target),
                i = e[0].parentNode,
                n = this.FindItem(e);
            if (null != n && 0 !== n.length)
                if (e.hasClass(this.getNavListRemoveIcon()) && this.isTabBar()) this._handleRemove(t, n);
                else if (this.SkipFocus(n)) t.preventDefault();
            else if (i.classList.contains("oj-animate-pointerUp") && (e = s(i)), !this.IsNodeEditableOrClickable(e)) {
                var o = this.getItemContentElement(n),
                    a = o.attr("href");
                a && "#" !== a && 0 === t.button && (t.shiftKey || t.ctrlKey) || (_.superclass.HandleMouseClick.apply(this, arguments), t.preventDefault())
            }
        },
        HandleKeyDown: function(t) {
            if (this.m_active) {
                var e, i = t.keyCode,
                    n = this.m_active.elem,
                    o = this.m_active.key;
                if (i === s.ui.keyCode.HOME || i === s.ui.keyCode.END) e = i === s.ui.keyCode.HOME ? this.element.find("." + this.getItemContentStyleClass() + ":visible").first().closest("." + this.getItemElementStyleClass()) : this.element.find("." + this.getItemContentStyleClass() + ":visible").last().closest("." + this.getItemElementStyleClass()), this.SetCurrentItem(e, t), t.preventDefault();
                else if (i === s.ui.keyCode.DELETE && this.isTabBar()) this._handleRemove(t, n);
                else {
                    var a = this.HandleSelectionOrActiveKeyDown(t),
                        l = this.m_listHandler.HandleExpandAndCollapseKeys(t, i, n, o);
                    (a = a || l || null != this.m_dndContext && this.m_dndContext.HandleKeyDown(t)) && t.preventDefault()
                }
            }
        },
        AvoidFocusHighLight: function(t) {
            this._avoidFocusHighLight = t
        },
        RecentPointerCallback: function() {
            var t = this;
            return function() {
                return !!t._avoidFocusHighLight
            }
        },
        ShouldApplyHighlight: function() {
            return !0
        },
        ToggleSelection: function(t, e, i) {
            var s = this.m_active.elem;
            if (this.IsSelectable(s[0]) && !this._isSelected(s)) {
                var n = this._fireBeforeSelectEvent(t, s);
                n && (_.superclass.ToggleSelection.apply(this, arguments), this._initiateNavigation(s))
            }
        },
        HighlightUnhighlightElem: function(t, e, i) {
            var o = s(t);
            "oj-selected" === e && this.m_listHandler.UpdateAriaPropertiesOnSelectedItem(this.getFocusItem(o), i);
            var a = o.children("." + this.getGroupItemStyleClass());
            a.length > 0 && (o = s(a[0])), "oj-focus" === e ? i ? this._focusInHandler(o) : this._focusOutHandler(o) : i ? o.addClass(e) : o.removeClass(e), o.hasClass("oj-selected") || o.hasClass("oj-hover") || o.hasClass("oj-active") || o.hasClass("oj-disabled") ? (o.hasClass(this.getRemovableStyleClass()) && this.isTabBar() && o.find("." + this.getNavListRemoveIcon()).css("visibility", "visible"), o.removeClass("oj-default")) : (this.isTabBar() && !n.isTouchSupported() && o.find("." + this.getNavListRemoveIcon()).css("visibility", "hidden"), o.addClass("oj-default"))
        },
        IsSelectable: function(t) {
            return !s(t).hasClass("oj-disabled") && this.m_listHandler.IsSelectable(s(t))
        },
        Trigger: function(t, e, i) {
            return "ready" === t || this.ojContext._trigger(t, e, i)
        },
        SetOption: function(t, e, i) {
            if (this.m_listHandler.IsOptionUpdateAllowed(t, e, i)) {
                var s = null;
                if ("selection" === t) {
                    var n = i._context,
                        o = n && n.extraData && n.extraData.items;
                    o && (this.ojContext._IsCustomElement() ? 0 === o.length ? n.extraData.item = null : n.extraData.item = o[0] : n.extraData.item = o, n.extraData.items = void 0), e && e.length > 0 && (s = e[0]), this._fireDeselectEvent(n.originalEvent, o, e)
                } else s = e;
                this.ojContext.option(t, s, i), this.options[t] = e, this.m_listHandler.OptionUpdated(t, s, i)
            }
        },
        ShouldRefresh: function(t) {
            return null != t.data || null != t.drillMode || null != t.item || null != t.display || null != t.layout || null != t.edge
        },
        setOptions: function(t, e) {
            var i, s = {
                skipOptions: []
            };
            return this.m_listHandler.SetOptions(t), void 0 !== t.navigationLevel && this._setNavigationLevel(t.navigationLevel), void 0 !== t.selection && (i = t.selection), s.needRefresh = _.superclass.setOptions.call(this, t, e), void 0 !== i && void 0 === t.selection && s.skipOptions.push("selection"), void 0 !== i && (t.selection = i), s
        },
        compareValues: function(e, i) {
            return e === i || t.Object.compareValues(e, i)
        },
        HandleSelectionOption: function(t) {
            if (void 0 !== t.selection) {
                var e = t.selection;
                if (e) {
                    var i = this.GetOption("selection");
                    if (i && 0 !== i.length && this.compareValues(i[0], e)) delete t.selection;
                    else {
                        var n = this.FindElementByKey(e);
                        if (!n || this.IsSelectable(n)) this._fireBeforeSelectEvent(null, s(n), e) ? (this._fireDeselectEvent(null, n, e), t.selection = [e], this.m_listHandler.HandleSelectionChange(n), n && this._initiateNavigation(s(n))) : delete t.selection;
                        else delete t.selection
                    }
                } else t.selection = []
            }
            _.superclass.HandleSelectionOption.call(this, t)
        },
        GetOption: function(t) {
            var e = this.ojContext.option(t);
            return "selection" === t ? null != e ? [e] : [] : ("item" !== t || e.focusable || (e.focusable = this._focusable), null === e ? this.options[t] : e)
        },
        getWidgetConstructor: function() {
            return e.__GetWidgetConstructor(this.ojContext.element)
        },
        SelectAndFocus: function(t, e) {
            t.hasClass("oj-disabled") || this.IsSelectable(t[0]) && (!this._isSelected(t) && this._fireBeforeSelectEvent(e, t) ? (_.superclass.SelectAndFocus.apply(this, arguments), this._initiateNavigation(t)) : this.HandleClickActive(t, e))
        },
        isTabBar: function() {
            return this.ojContext.element[0].tagName.toLowerCase() === this.TAG_NAME_TAB_BAR
        },
        _fireBeforeDeselectEvent: function(t, e, i) {
            i || (i = this.GetKey(e[0]));
            var s = this.GetOption("selection"),
                n = this.FindElementByKey(s);
            return this.Trigger("beforeDeselect", t, {
                toItem: e,
                toKey: i,
                fromItem: n,
                fromKey: s
            })
        },
        _fireBeforeSelectEvent: function(t, e, i) {
            var s = !0;
            return i || (i = this.GetKey(e[0])), this.isTabBar() && (s = this._fireBeforeDeselectEvent(t, e, i)), s && this.Trigger("beforeSelect", t, {
                item: e,
                key: i
            })
        },
        _fireRemoveEvent: function(t, e) {
            var i = this.GetKey(e[0]);
            return this.Trigger("beforeRemove", t, {
                item: e,
                key: i
            }) && this.Trigger("remove", t, {
                item: e,
                key: i
            })
        },
        _fireDeselectEvent: function(t, e, i) {
            var s = this.GetOption("selection"),
                n = this.FindElementByKey(s);
            this.Trigger("deselect", t, {
                toItem: e,
                toKey: i,
                fromItem: n,
                fromKey: s
            })
        },
        _initiateNavigation: function(t) {
            if (this.ojContext.element.hasClass(this.getNoFollowLinkStyleClass())) return !1;
            var e = this.getItemContentElement(t),
                i = e.attr("href"),
                s = e.attr("target");
            return !(!i || "#" === i) && (s && "_self" !== s ? window.open(i, s) : window.location.href = i, !0)
        },
        _isSelected: function(t) {
            var e = this.GetOption("selection"),
                i = this.GetKey(t[0]);
            return !(!e || 1 !== e.length || !this.compareValues(e[0], i))
        },
        _setToolTipOnIcon: function(t, e) {
            t.attr("title") || t.attr("title", e)
        },
        _removeToolTipOnIcon: function(t) {
            t.data(this._NAVLIST_ITEM_ICON_HAS_TITLE) ? t.removeData(this._NAVLIST_ITEM_ICON_HAS_TITLE) : t.removeAttr("title")
        },
        GetRootElement: function() {
            return this.ojContext.element
        },
        getSingleFocusableElement: function(t) {
            var e = this,
                i = "a, input, select, textarea, button",
                n = t.children(i).filter(function() {
                    return !(s(this).hasClass(e.getNavListRemoveIcon()) || s(this).hasClass(e.getExpandIconStyleClass()))
                });
            return 1 === n.length && 0 === n.first().find(i).length ? n.first() : t
        },
        PrepareContextMenu: function(t) {
            var e = this.ojContext._GetContextMenu();
            if (null != this.m_dndContext && e && this.m_dndContext.prepareContextMenu(e), t.hasClass(this.getRemovableStyleClass()) && e) {
                this.m_contextMenu !== e && (this.m_contextMenu = e, e.addEventListener("ojBeforeOpen", this._handleContextMenuBeforeOpen.bind(this)), e.addEventListener("ojAction", this._handleContextMenuSelect.bind(this)));
                var i = s(e).find("[data-oj-command=" + this.getNavListRemoveCommand() + "]"),
                    n = this.ojContext.getTranslatedString("labelRemove");
                this.ojContext._IsCustomElement() ? i.empty().append(document.createTextNode(n)) : i.empty().append(s('<a href="#"></a>').text(n)), e.refresh()
            }
        },
        _handleContextMenuSelect: function(t) {
            s(t.target).attr("data-oj-command") === this.getNavListRemoveCommand() && this._handleRemove(t, this.m_contextMenuItem)
        },
        _handleContextMenuBeforeOpen: function(t) {
            this.m_contextMenuItem = t.detail.openOptions.launcher
        },
        _handleRemove: function(t, e) {
            e.hasClass(this.getRemovableStyleClass()) && this._fireRemoveEvent(t, e)
        },
        _wrapInner: function(t, e) {
            for (var i = t.childNodes; i.length > 0;) e.appendChild(i[0]);
            t.appendChild(e)
        },
        itemRenderComplete: function(t, e) {
            var i = s(t),
                o = this;
            if (i.hasClass(this.getCategoryDividerStyleClass())) return i.removeClass(this.getItemElementStyleClass()), i.removeClass(this.getFocusedElementStyleClass()), i.removeClass(this.getItemStyleClass()), i.removeAttr("aria-selected"), i.children().remove(), void i.attr("role", "separator");
            var a, l = this.getGroupItemStyleClass(),
                r = this.getCollapseIconStyleClass(),
                h = this.getExpandIconStyleClass(),
                d = this.getItemIconStyleClass(),
                u = this.getItemBadgeStyleClass(),
                c = i.children("." + l);
            if (c.length > 0) {
                c.addClass(this.getItemStyleClass()), a = c.children(":not(." + h + "):not(." + r + ")");
                var m = c.children("." + h);
                0 === m.length && (m = c.children("." + r)), m.attr("role", "presentation"), m.attr("tabindex", "-1"), m.removeAttr("aria-labelledby"), i.hasClass("oj-disabled") && c.addClass("oj-disabled")
            } else a = i.children().first();
            if (a.length > 0) {
                a.addClass(this.getItemContentStyleClass());
                var g = this.getItemLabelStyleClass(),
                    p = a[0].querySelector("." + g),
                    v = a.find("." + d);
                if (null == p) {
                    (p = document.createElement("span")).classList.add(g), this._wrapInner(a[0], p);
                    var C = a.find("." + u);
                    C.length > 0 && C.insertAfter(p), v.length > 0 && v.insertBefore(p)
                }
                if (v.length > 0) {
                    if (v.attr("title") && v.data(this._NAVLIST_ITEM_ICON_HAS_TITLE, v.attr("title")), "icons" === this.ojContext.options.display) {
                        this.ojContext.element.addClass(this.getIconOnlyStyleClass());
                        var f = this.getItemLabel(i);
                        v.attr("aria-label", f), v.attr("role", "img"), this._setToolTipOnIcon(v, f)
                    }
                    if ("stacked" === this.ojContext.options.display) {
                        this.ojContext.element.hasClass(this.getStackedIconStyleClass()) || (this.ojContext.element.addClass(this.getStackedIconStyleClass()), this.isStackedIconClassAdded = !0);
                        var S = this.getItemLabel(i);
                        v.attr("aria-label", S), v.attr("role", "img"), this._setToolTipOnIcon(v, S)
                    }
                    this.element.closest("ul").addClass(o.getHasIconsStyleClass())
                } else a.addClass(this.getHasNoIconStyleClass())
            }
            if (i.hasClass("oj-disabled") ? this.getFocusItem(i).attr("aria-disabled", "true") : c.length > 0 ? c.addClass("oj-default") : i.addClass("oj-default"), i.hasClass(this.getRemovableStyleClass()) && this.isTabBar()) {
                var I = s("<a>");
                I.addClass(this.getNavListRemoveIcon()).addClass("oj-clickable-icon-nocontext oj-component-icon").attr("aria-label", this.ojContext.getTranslatedString("removeCueText")).attr("role", "presentation").attr("aria-hidden", "true"), n.isTouchSupported() || i.hasClass("oj-disabled") ? I.css("visibility", "visible") : I.css("visibility", "hidden"), i.append(I), a.attr("aria-describedby", I.uniqueId().attr("id"))
            }
            this.m_listHandler.ModifyListItem(i, a), _.superclass.itemRenderComplete.apply(this, arguments)
        },
        DestroyContentHandler: function(t) {
            var e = this.GetOption("data");
            null === e && this._restoreContent(this.element), _.superclass.DestroyContentHandler.apply(this, arguments)
        },
        getNodeBySubId: function(t) {
            if (null == t) return this.ojContext.element ? this.ojContext.element[0] : null;
            var e = this.m_listHandler.GetNodeBySubId(t);
            if (!e && t.subId === this.getItemSubIdKey()) {
                var i = t.key;
                e = this.FindElementByKey(i)
            }
            return e
        },
        getSubIdByNode: function(t) {
            var e = null;
            if (null != t && !(e = this.m_listHandler.GetSubIdByNode(t))) {
                var i = this.FindItem(t);
                if (null != i && i.length > 0) {
                    var s = this.GetKey(i[0]);
                    null != s && (e = {
                        subId: this.getItemSubIdKey(),
                        key: s
                    })
                }
            }
            return e
        },
        getContextByNode: function(t) {
            var e = _.superclass.getContextByNode.call(this, t);
            return e && "oj-listview-item" === e.subId ? (e.subId = this.getItemSubIdKey(), e) : null
        },
        refresh: function() {
            this._resetNavlist(), this._initListHandler(), _.superclass.refresh.apply(this, arguments)
        },
        _resetNavlist: function() {
            this.ojContext.element.removeClass(this.getIconOnlyStyleClass()), this.isStackedIconClassAdded && this.ojContext.element.removeClass(this.getStackedIconStyleClass()), this.ojContext.element.removeClass(this.getCondenseStyleClass()), this.ojContext.element.removeClass(this._APPLICATION_LEVEL_NAV_STYLE_CLASS), this.ojContext.element.removeClass(this._PAGE_LEVEL_NAV_STYLE_CLASS), this._restoreContent(this.element), this.m_listHandler.Destroy()
        },
        destroy: function() {
            this._resetNavlist(), _.superclass.destroy.apply(this, arguments), this._list.unwrap(), this._list.is(":empty") && this._list.remove(), this.ojContext.element.removeClass(this.getNavListStyleClass() + " " + this.getNavListTouchStyleClass()), this.ojContext._off(this.element, "click"), this.ojContext._off(this.element, "focus"), this.ojContext._off(this.element, "blur"), this.ojContext._off(this.element, "mouseover"), this.ojContext._off(this.element, "mousein"), this.ojContext._off(this.element, "mouseout"), this.ojContext._off(this.element, "keydown")
        }
    });
    _._CSS_Vars = {
        navlist: {
            animation: {
                addHorizontalItem: "--oj-private-navigation-list-global-horizontal-add-animation-default",
                removeHorizontalItem: "--oj-private-navigation-list-global-horizontal-remove-animation-default",
                add: "--oj-private-navigation-list-global-add-animation-default",
                remove: "--oj-private-navigation-list-global-remove-animation-default",
                update: "--oj-private-navigation-list-global-update-animation-default",
                expand: "--oj-private-navigation-list-global-expand-animation-default",
                collapse: "--oj-private-navigation-list-global-collapse-animation-default",
                sliderExpand: "--oj-private-navigation-list-global-slider-expand-animation-default",
                sliderCollapse: "--oj-private-navigation-list-global-slider-collapse-animation-default",
                pointerUp: "--oj-private-navigation-list-global-pointer-up-animation-default"
            },
            hierarchyMenuDisplayThresholdLevel: "--oj-private-navigation-list-global-hierarchy-menu-threshold-default",
            showIndicatorDelay: "--oj-private-core-global-loading-indicator-delay-duration"
        },
        tabbar: {
            animation: {
                addHorizontalItem: "--oj-private-tab-bar-global-horizontal-add-animation-default",
                removeHorizontalItem: "--oj-private-tab-bar-global-horizontal-remove-animation-default",
                add: "--oj-private-tab-bar-global-add-animation-default",
                remove: "--oj-private-tab-bar-global-remove-animation-default",
                update: "--oj-private-tab-bar-global-update-animation-default",
                pointerUp: "--oj-private-tab-bar-global-pointerUp-animation-default"
            },
            showIndicatorDelay: "--oj-private-core-global-loading-indicator-delay-duration"
        }
    }, t.__registerWidget("oj.ojNavigationList", s.oj.baseComponent, {
        widgetEventPrefix: "oj",
        options: {
            as: "",
            currentItem: null,
            drillMode: "none",
            reorderable: "disabled",
            truncation: "none",
            edge: "start",
            hierarchyMenuDisplayThresholdLevel: 0,
            rootLabel: null,
            selection: null,
            expanded: new t._ojListViewExpandedKeySet,
            data: null,
            display: "all",
            navigationLevel: "page",
            overflow: "hidden",
            item: {
                renderer: null,
                selectable: !0
            },
            animateStart: null,
            animateEnd: null,
            beforeSelect: null,
            beforeCollapse: null,
            beforeCurrentItem: null,
            beforeDeselect: null,
            collapse: null,
            deselect: null,
            beforeExpand: null,
            expand: null,
            reorder: null
        },
        _ComponentCreate: function() {
            this._super(), this._setup()
        },
        _AfterCreate: function() {
            this._super();
            var t = this;
            this.navlist._FixRendererContext = function(e) {
                return t._FixRendererContext(e)
            }, this.navlist._WrapCustomElementRenderer = function(e) {
                return t._WrapCustomElementRenderer(e)
            }, this.navlist.afterCreate()
        },
        _NotifyContextMenuGesture: function(t, e, i) {
            this.navlist.notifyContextMenuGesture(t, e, i)
        },
        _setup: function() {
            this.navlist = new _;
            for (var t = Object.keys(this.options), e = 0; e < t.length; e++) {
                var i = t[e];
                this._validateOptionValues(i, this.options[i])
            }
            this._validateOptionsForIconsOnlyAndHorizontalList(this.options[this.navlist.OPTION_DRILL_MODE], this.options[this.navlist.OPTION_DISPLAY], this.options[this.navlist.OPTION_EDGE]);
            var n = {
                ojContext: this
            };
            n = s.extend(this.options, n), this.navlist.init(n)
        },
        getNodeBySubId: function(t) {
            return this.navlist.getNodeBySubId(t)
        },
        getSubIdByNode: function(t) {
            return this.navlist.getSubIdByNode(t)
        },
        getContextByNode: function(t) {
            return this.navlist.getContextByNode(t)
        },
        expand: function(t, e, i) {
            this.navlist.expandKey(t, e, !0, !0, i)
        },
        collapse: function(t, e, i) {
            this.navlist.collapseKey(t, e, !0, i)
        },
        getExpanded: function() {
            return this.navlist.getExpanded()
        },
        _validateOptionsForIconsOnlyAndHorizontalList: function(t, e, i) {
            if (t !== this.navlist.OPTION_DRILL_MODE_NONE) {
                if (e === this.navlist.OPTION_DISPLAY_ICONS) throw new Error("Icon only navigation list should have drillMode set to 'none'.");
                if (e === this.navlist.OPTION_DISPLAY_STACKED) throw new Error("Stack only navigation list should have drillMode set to 'none'.");
                if (i === this.navlist.OPTION_EDGE_TOP) throw new Error("Horizontal navigation list should have drillMode set to 'none'.")
            }
        },
        _validateOptionValues: function(t, e) {
            var i = !0;
            if (t === this.navlist.OPTION_DRILL_MODE ? i = e === this.navlist.OPTION_DRILL_MODE_NONE || e === this.navlist.OPTION_DRILL_MODE_COLLAPSIBLE || e === this.navlist.OPTION_DRILL_MODE_SLIDING : t === this.navlist.OPTION_DISPLAY ? i = e === this.navlist.OPTION_DISPLAY_ALL || e === this.navlist.OPTION_DISPLAY_ICONS || e === this.navlist.OPTION_DISPLAY_STACKED : t === this.navlist.OPTION_EDGE && (i = this.element[0].tagName.toLowerCase() === this.navlist.TAG_NAME_TAB_BAR ? e === this.navlist.OPTION_EDGE_TOP || e === this.navlist.OPTION_EDGE_START || e === this.navlist.OPTION_EDGE_END || e === this.navlist.OPTION_EDGE_BOTTOM : e === this.navlist.OPTION_EDGE_TOP || e === this.navlist.OPTION_EDGE_BOTTOM || e === this.navlist.OPTION_EDGE_START), !i) throw new Error("Invalid value: " + e + " for key: " + t)
        },
        _setOption: function(t, e) {
            var i, n;
            switch (this._validateOptionValues(t, e), t) {
                case this.navlist.OPTION_DRILL_MODE:
                    this._validateOptionsForIconsOnlyAndHorizontalList(e, this.options[this.navlist.OPTION_DISPLAY], this.options[this.navlist.OPTION_EDGE]);
                    break;
                case this.navlist.OPTION_DISPLAY:
                    this._validateOptionsForIconsOnlyAndHorizontalList(this.options[this.navlist.OPTION_DRILL_MODE], e, this.options[this.navlist.OPTION_EDGE]);
                    break;
                case this.navlist.OPTION_EDGE:
                    this._validateOptionsForIconsOnlyAndHorizontalList(this.options[this.navlist.OPTION_DRILL_MODE], this.options[this.navlist.OPTION_DISPLAY], e);
                    break;
                case this.navlist.OPTION_SELECTION:
                case this.navlist.OPTION_CURRENT_ITEM:
                    this.navlist.isAvailable() && (n = this.navlist.getItems([e])[0], i = {
                        _context: {
                            extraData: {
                                item: this._IsCustomElement() ? n : s(n)
                            }
                        }
                    })
            }
            return this.navlist.updateListViewOption(t, e), i ? this._super(t, e, i) : this._super(t, e)
        },
        _setOptions: function(t, e) {
            if (!this.navlist.isAvailable()) return this._super(t, e), this;
            for (var i = this.navlist.setOptions(t, e), s = {}, n = Object.keys(t), o = 0; o < n.length; o++) {
                var a = n[o];
                i.skipOptions.indexOf(a) < 0 && (s[a] = t[a])
            }
            return this._super(s, e), i.needRefresh && this.navlist.refresh(), this
        },
        _NotifyAttached: function() {
            this.navlist.notifyAttached()
        },
        _NotifyDetached: function() {
            this.navlist.notifyDetached()
        },
        _NotifyShown: function() {
            this.navlist.notifyShown()
        },
        _VerifyConnectedForSetup: function() {
            return !0
        },
        refresh: function() {
            this._super(), this.navlist.refresh()
        },
        whenReady: function() {
            return this.navlist.whenReady()
        },
        _SetupResources: function() {
            this._super(), this.navlist.setupResources()
        },
        _ReleaseResources: function() {
            this._super(), this.navlist.releaseResources()
        },
        _destroy: function() {
            this.navlist.destroy(), this._super()
        },
        _CompareOptionValues: function(e, i, s) {
            switch (e) {
                case "currentItem":
                case "selection":
                    return t.Object.compareValues(i, s);
                default:
                    return this._super(e, i, s)
            }
        }
    }), e.setDefaultOptions({
        ojNavigationList: {
            hierarchyMenuDisplayThresholdLevel: e.createDynamicPropertyGetter(function() {
                const t = _._CSS_Vars.navlist.hierarchyMenuDisplayThresholdLevel;
                return +i.getCachedCSSVarValues([t])[0]
            })
        }
    });
    const u = function(t, e, i) {
        this.m_widget = t, this.m_root = e, this.m_component = i, this.m_widget.GetOption(this.m_widget.OPTION_EDGE) === this.m_widget.OPTION_EDGE_END && this.m_root.addClass(this.m_widget.getNavListEndEdgeStyleClass())
    };
    oj._registerLegacyNamespaceProp("DefaultNavListHandler", u), u.prototype.Destroy = function() {
        this.m_root.removeClass(this.m_widget.getNavListExpandedStyleClass()).removeClass(this.m_widget.getNavListVerticalStyleClass()).removeClass(this.m_widget.getNavListEndEdgeStyleClass())
    }, u.prototype.Expand = function(t, e, i) {
        return Promise.resolve(null)
    }, u.prototype.Collapse = function(t, e, i, s) {
        return Promise.resolve(null)
    }, u.prototype.HandleExpandAndCollapseKeys = function(t, e, i, s) {
        return !1
    }, u.prototype.ModifyListItem = function(t, e) {
        this.m_widget.isTabBar() && this.m_widget.getSingleFocusableElement(t).attr("role", "tab")
    }, u.prototype.UpdateAriaPropertiesOnSelectedItem = function(t, e) {
        t.attr("aria-selected", e ? "true" : "false")
    }, u.prototype.BeforeRenderComplete = function() {
        var t = this.m_widget.element.attr("role");
        t && "presentation" !== t && (this.m_widget.element.attr("role", "presentation"), this.m_widget.isTabBar() ? this.m_root.attr("role", "tablist") : this.m_root.attr("role", t))
    }, u.prototype.ItemInsertComplete = function(t, e) {}, u.prototype.ItemRemoveComplete = function(t) {}, u.prototype.HandleArrowKeys = function(t, e, i) {
        return _.superclass.HandleArrowKeys.apply(this.m_widget, arguments)
    }, u.prototype.IsArrowKey = function(t) {
        return _.superclass.IsArrowKey.apply(this.m_widget, arguments)
    }, u.prototype.GetState = function(t) {
        return _.superclass.GetState.apply(this.m_widget, arguments)
    }, u.prototype.SetState = function(t, e) {
        _.superclass.SetState.apply(this.m_widget, arguments)
    }, u.prototype.Init = function(t) {
        this.m_root.addClass(this.m_widget.getNavListExpandedStyleClass()).addClass(this.m_widget.getNavListVerticalStyleClass())
    }, u.prototype.IsSelectable = function(t) {
        return _.superclass.IsSelectable.apply(this.m_widget, arguments)
    }, u.prototype.RestoreItem = function(t, e, i) {}, u.prototype.SetOptions = function(t) {}, u.prototype.HandleBlur = function(t) {
        return _.superclass.HandleBlur.apply(this.m_widget, arguments)
    }, u.prototype.HandleFocus = function(t) {
        return _.superclass.HandleFocus.apply(this.m_widget, arguments)
    }, u.prototype.GetNodeBySubId = function(t) {
        return null
    }, u.prototype.GetSubIdByNode = function(t) {
        return null
    }, u.prototype.HandleResize = function(t, e) {}, u.prototype.NotifyAttached = function() {}, u.prototype.GetAnimationEffect = function(t) {
        return _.superclass.getAnimationEffect.apply(this.m_widget, arguments)
    }, u.prototype.IsOptionUpdateAllowed = function(t, e, i) {
        return !0
    }, u.prototype.OptionUpdated = function(t, e, i) {}, u.prototype.BeforeInsertItem = function() {}, u.prototype.HandleClick = function(t) {}, u.prototype.HandleKeydown = function(t) {}, u.prototype.HandleSelectionChange = function(t) {};
    const c = function(t, e, i) {
        c.superclass.constructor.call(this, t, e, i)
    };
    t.Object.createSubclass(c, u, "oj.CollapsibleNavListHandler"), t._registerLegacyNamespaceProp("CollapsibleNavListHandler", c), c.prototype.Destroy = function() {
        this.m_root.removeClass(this.m_widget.getNavListCollapsibleStyleClass()).removeClass(this.m_widget.getNavListVerticalStyleClass())
    }, c.prototype.Init = function(t) {
        this.m_root.addClass(this.m_widget.getNavListCollapsibleStyleClass()).addClass(this.m_widget.getNavListVerticalStyleClass())
    }, c.prototype.Expand = function(t, e, i) {
        return _.superclass.AnimateExpand.apply(this.m_widget, arguments)
    }, c.prototype.Collapse = function(t, e, i, s) {
        return _.superclass.AnimateCollapse.apply(this.m_widget, arguments)
    }, c.prototype.HandleExpandAndCollapseKeys = function(t, e, i, n) {
        var o = i.children("." + this.m_widget.getGroupStyleClass()).length > 0;
        return e === this.m_widget.LEFT_KEY || e === this.m_widget.RIGHT_KEY ? (e === this.m_widget.LEFT_KEY && !this.m_widget.isRtl() || e === this.m_widget.RIGHT_KEY && this.m_widget.isRtl() ? this.m_widget.GetState(i) === this.m_widget.STATE_EXPANDED && this.m_widget.CollapseItem(i, t, !0, n, !0, !0) : this.m_widget.GetState(i) === this.m_widget.STATE_COLLAPSED && this.m_widget.ExpandItem(i, t, !0, n, !0, !0, !0), !0) : !(!o || e !== s.ui.keyCode.ENTER && e !== s.ui.keyCode.SPACE) && (!(i.length <= 0) && (this.m_widget.GetState(i) === this.m_widget.STATE_COLLAPSED ? this.m_widget.ExpandItem(i, null, !0, n, !0, !0, !0) : this.m_widget.GetState(i) === this.m_widget.STATE_EXPANDED && this.m_widget.CollapseItem(i, null, !0, n, !0, !0), !0))
    };
    const m = function(t, e, i) {
        this.m_duringInit = !0, m.superclass.constructor.call(this, t, e, i), this.m_widget.GetOption(this.m_widget.OPTION_EDGE) === this.m_widget.OPTION_EDGE_BOTTOM && this.m_root.addClass(this.m_widget.getNavListBottomEdgeStyleClass())
    };
    t.Object.createSubclass(m, u, "oj.HorizontalNavListHandler"), t._registerLegacyNamespaceProp("HorizontalNavListHandler", m), m.prototype.Destroy = function() {
        this.m_root.removeClass(this.m_widget.getNavListExpandedStyleClass()).removeClass(this.m_widget.getHorizontalNavListStyleClass()).removeClass(this.m_widget.getNavListBottomEdgeStyleClass()), this.m_root.find("." + this.m_widget.getDividerStyleClass()).remove(), this._destroyOverflowMenu(), null != this.m_overflowMenuItem && (this.m_overflowMenuItem.remove(), this.m_overflowMenuItem = null), this.m_overflowMenuItems = [], this.m_duringInit = !0
    }, m.prototype.UpdateAriaPropertiesOnSelectedItem = function(t, e) {
        t.attr("aria-selected", e ? "true" : "false")
    }, m.prototype._isTabBar = function() {
        return this.m_widget.isTabBar()
    }, m.prototype.HandleArrowKeys = function(t, e, i) {
        "ArrowLeft" === t || "Left" === t || t === s.ui.keyCode.LEFT ? t = this.m_widget.isRtl() ? s.ui.keyCode.DOWN : s.ui.keyCode.UP : "ArrowRight" !== t && "Right" !== t && t !== s.ui.keyCode.RIGHT || (t = this.m_widget.isRtl() ? s.ui.keyCode.UP : s.ui.keyCode.DOWN);
        var n = _.superclass.HandleArrowKeys.call(this.m_widget, t, e, i);
        return this.m_widget.m_active.elem[0].scrollIntoView(!1), n
    }, m.prototype.IsArrowKey = function(t) {
        return "ArrowUp" === t || "Up" === t || t === this.m_widget.UP_KEY || "ArrowDown" === t || "Down" === t || t === this.m_widget.DOWN_KEY || "ArrowLeft" === t || "Left" === t || t === this.m_widget.LEFT_KEY || "ArrowRight" === t || "Right" === t || t === this.m_widget.RIGHT_KEY
    }, m.prototype.ModifyListItem = function(t, e) {
        this.m_widget.getSingleFocusableElement(t).attr("role", "tab")
    }, m.prototype.BeforeRenderComplete = function() {
        var t = this;
        this.m_root.attr("role", "tablist"), this.m_widget.element.attr("role", "presentation"), "condense" === this.m_widget.GetOption("layout") && (this.m_root.hasClass(this.m_widget.getCondenseStyleClass()) || this.m_root.addClass(this.m_widget.getCondenseStyleClass()));
        var e = this.m_widget.element.find("." + this.m_widget.getItemElementStyleClass() + ":visible");
        e.each(function(i) {
            var n = s(this);
            i > 0 && t._addSeparator(this, i), i === e.length - 1 ? n.addClass(t.m_widget.getLastItemStyleClass()) : n.removeClass(t.m_widget.getLastItemStyleClass())
        }), this.m_duringInit && (this.m_duringInit = !1, this._handleOverflow())
    }, m.prototype._addSeparator = function(t, e) {
        var i = s(t),
            n = i.prev();
        e > 0 && n.length && !n.is("li." + this.m_widget.getDividerStyleClass()) && i.before('<li role="separator" class="' + this.m_widget.getDividerStyleClass() + '"></li>')
    }, m.prototype.ItemInsertComplete = function(t, e) {
        this._addSeparator(t, e.index), this._handleOverflow()
    }, m.prototype.ItemRemoveComplete = function(t) {
        var e = s(t),
            i = e.prev();
        if (i.length && i.is("li." + this.m_widget.getDividerStyleClass())) i.remove();
        else {
            var n = e.next();
            n.is("li." + this.m_widget.getDividerStyleClass()) && n.remove()
        }
        this._handleOverflow()
    }, m.prototype.IsSelectable = function(t) {
        return !(this.m_overflowMenuItem && this.m_overflowMenuItem[0] === s(t)[0]) && this.m_widget.getFocusItem(s(t))[0].hasAttribute("aria-selected")
    }, m.prototype.Init = function(t) {
        this.m_root.addClass(this.m_widget.getNavListExpandedStyleClass()).addClass(this.m_widget.getHorizontalNavListStyleClass()), this.m_overflowMenuItems = []
    }, m.prototype.HandleClick = function(t) {
        s(t.target).closest("." + this.m_widget.getOverflowItemStyleClass() + " a." + this.m_widget.getItemContentStyleClass()).length > 0 && this._launchOverflowMenu(t)
    }, m.prototype.HandleKeydown = function(t) {
        s(t.target).closest("." + this.m_widget.getOverflowItemStyleClass() + " a." + this.m_widget.getItemContentStyleClass()).length > 0 && t.keyCode === s.ui.keyCode.SPACE && this._launchOverflowMenu(t)
    }, m.prototype.NotifyAttached = function() {
        this._handleOverflow()
    }, m.prototype.HandleResize = function(t, e) {
        this.m_ignoreNextResize ? this.m_ignoreNextResize = !1 : this._handleOverflow()
    }, m.prototype.SetOptions = function(t) {
        var e, i, s = this.m_widget.GetOption("overflow"),
            n = this.m_widget.GetOption("truncation");
        t.overflow && s !== t.overflow && (e = t.overflow), t.truncation && n !== t.truncation && (i = t.truncation), (e || i) && this._handleOverflow(e, i)
    }, m.prototype.HandleSelectionChange = function(t) {
        this.m_overflowMenuItem && ("none" === t.style.display ? this._highlightUnhighlightMoreItem(!0) : this._highlightUnhighlightMoreItem(!1))
    }, m.prototype.GetAnimationEffect = function(t) {
        return "add" === t || "remove" === t ? _.superclass.getAnimationEffect.call(this.m_widget, t + "HorizontalItem") : _.superclass.getAnimationEffect.apply(this.m_widget, arguments)
    }, m.prototype.GetNodeBySubId = function(t) {
        var e = null;
        if (t.subId === this.m_widget.getItemSubIdKey() && this.m_overflowMenuItems.length > 0)
            for (var i = this._getOverflowMenu(), n = t.key, o = i.find(".oj-menu-item"), a = 0; a < o.length; a++)
                if (this.m_widget.compareValues(s(o[a]).data("key"), n)) {
                    e = o[a], this._launchOverflowMenu(null);
                    break
                }
        return e
    }, m.prototype.GetSubIdByNode = function(t) {
        var e = null,
            i = s(t).closest(".oj-menu-item");
        if (null !== this._getOverflowMenu() && i.closest("." + this.m_widget.getOverflowMenuStyleClass())[0] !== this._getOverflowMenu()[0]) return null;
        if (null != i && i.length > 0) {
            var n = i.data("key");
            null != n && (e = {
                subId: this.m_widget.getItemSubIdKey(),
                key: n
            })
        }
        return e
    }, m.prototype.OptionUpdated = function(t, e, i) {
        "selection" === t && this._toggleOverflowBtnSelection(e)
    }, m.prototype.IsOptionUpdateAllowed = function(t, e, i) {
        return "currentItem" !== t || !this.m_overflowMenuItem || this.m_overflowMenuItem.attr("id") !== e
    };
    var g = function(t, e, i, s) {
        this._overflow = e, this._truncation = i, this._items = t, this._navlistHandler = s
    };
    m.prototype._handleOverflow = function(t, e) {
        var i = -1,
            s = this._getItems();
        if (0 !== s.length) {
            t || (t = this.m_widget.GetOption("overflow")), e || (e = this.m_widget.GetOption("truncation"));
            var n = new g(s, t, e, this);
            if (!n.shouldHandleOverflow()) return n.unApplyTruncation(), void this._releaseContainerWidth();
            this.showAllItems(s, t), n.unApplyTruncation(), n.checkForOverflow() && n.applyTruncation() && (i = n.getOverflowThreshold()), this._applyThreshold(i), this._releaseContainerWidth()
        }
    }, m.prototype.BeforeInsertItem = function() {
        this._fixContainerWidth()
    }, m.prototype._fixContainerWidth = function() {
        var t = this.m_widget.getListContainer(),
            e = t[0].getBoundingClientRect().width;
        0 !== e && (this.m_freezedContainerWidth = e, t.css("maxWidth", e))
    }, m.prototype._releaseContainerWidth = function() {
        this.m_widget.getListContainer().css("maxWidth", "none"), this.m_freezedContainerWidth && (this.m_ignoreNextResize = !0, this.m_freezedContainerWidth = null)
    }, m.prototype.showAllItems = function(t, e) {
        var i = this;
        "popup" === e && this._showOrHideItem(this._getOverflowMenuButton(), !0), t.each(function(t, e) {
            i._showOrHideItem(s(e), !0)
        })
    }, m.prototype._getItems = function() {
        return this.m_root.find("." + this.m_widget.getItemElementStyleClass() + ":not(." + this.m_widget.getOverflowItemStyleClass() + ")")
    }, m.prototype._hasSeparators = function() {
        return this.m_root.hasClass(this.m_widget.getNavListItemsDividerStyleClass())
    }, m.prototype._showOrHideItem = function(t, e) {
        var i;
        this._hasSeparators() && (i = t.prev("." + this.m_widget.getDividerStyleClass())), e ? (t.show(), i && i.show()) : (t.hide(), i && i.hide())
    }, m.prototype._applyThreshold = function(t) {
        var e, i, n = this,
            o = this._getItems(),
            a = [];
        if (0 !== o.length) {
            this.m_root.find("." + this.m_widget.getLastItemStyleClass()).removeClass(this.m_widget.getLastItemStyleClass()), -1 === t || t >= o.length ? this.m_overflowMenuItem && this._showOrHideItem(this.m_overflowMenuItem, !1) : (this._addSeparator(this._getOverflowMenuButton(), o.length), this._showOrHideItem(this._getOverflowMenuButton(), !0), i = !0), o.each(function(i, o) {
                var l = s(o);
                if (-1 !== t && t <= i) {
                    l.hasClass("oj-focus") && n.m_widget.ActiveAndFocus(n._getOverflowMenuButton(), null), l.hasClass("oj-selected") && n._highlightUnhighlightMoreItem(!0), n._showOrHideItem(l, !1);
                    var r = {};
                    a.push(r), r.key = n.m_widget.GetKey(o), r.label = n._getItemLabel(l), l.hasClass("oj-disabled") && (r.disabled = !0)
                } else e = l, n._showOrHideItem(l, !0), l.hasClass("oj-selected") && n.m_overflowMenuItem && n._highlightUnhighlightMoreItem(!1), n.m_overflowMenuItem && n.m_overflowMenuItem.hasClass("oj-focus") && n.m_widget.compareValues(n.m_widget.GetKey(o), n.m_widget.GetOption("currentItem")) && n.m_widget.ActiveAndFocus(e, null)
            }), i ? this._getOverflowMenuButton().addClass(this.m_widget.getLastItemStyleClass()) : e.addClass(this.m_widget.getLastItemStyleClass()), this.m_overflowMenuItems = a, this.m_widget.ClearCache();
            var l = this.m_overflowMenu && this.m_overflowMenu.is(":visible");
            this._destroyOverflowMenu(), l && this._launchOverflowMenu(null)
        }
    }, m.prototype._highlightUnhighlightMoreItem = function(t) {
        var e = this._getOverflowMenuButton();
        t ? e.addClass("oj-selected").removeClass("oj-default") : e.removeClass("oj-selected").addClass("oj-default")
    }, m.prototype._destroyOverflowMenu = function() {
        this.m_overflowMenu && (this.m_overflowMenu.ojMenu("destroy"), this.m_overflowMenu.remove(), this.m_overflowMenu = null)
    }, m.prototype._getOverflowMenuButton = function() {
        if (!this.m_overflowMenuItem) {
            var t = s(document.createElement("li")),
                e = s(document.createElement("a")),
                i = s(document.createElement("span")),
                n = s(document.createElement("span")),
                o = this._getItems();
            t.uniqueId().attr("role", "presentation").addClass(this.m_widget.getItemElementStyleClass()).addClass(this.m_widget.getItemStyleClass()).addClass(this.m_widget.getOverflowItemStyleClass()).addClass("oj-default").append(e), e.addClass(this.m_widget.getFocusedElementStyleClass()).addClass(this.m_widget.getItemContentStyleClass()), e.attr("role", "button").attr("aria-haspopup", "true").attr("aria-selected", "false").attr("tabindex", "-1").attr("href", "#").append(n).append(i), l.disableElement(e[0]), this.m_root.find("ul:first").hasClass(this.m_widget.getHasIconsStyleClass()) || e.addClass(this.m_widget.getHasNoIconStyleClass()), i.text(this.m_widget.ojContext.getTranslatedString("overflowItemLabel")).addClass(this.m_widget.getItemLabelStyleClass()), n.addClass(this.m_widget.getItemIconStyleClass()).addClass("oj-fwk-icon").addClass(this.m_widget.getOverflowItemIconStyleClass()), t[0].key = t.attr("id"), this.m_root.find("." + this.m_widget.GetStyleClass()).append(t), this._addSeparator(t, o.length), this.m_overflowMenuItem = t
        }
        return this.m_overflowMenuItem
    }, m.prototype._getOverflowMenu = function() {
        var t = this.m_overflowMenuItems;
        if (0 === t.length) return null;
        if (!this.m_overflowMenu) {
            var e = s(document.createElement("ul"));
            e.addClass(this.m_widget.getOverflowMenuStyleClass()).hide(), this.m_root.append(e);
            for (var i = 0; i < t.length; i++) {
                var n = s(document.createElement("li")),
                    o = s(document.createElement("a"));
                o.attr("href", "#").text(t[i].label), n.data("key", t[i].key), t[i].disabled && n.addClass("oj-disabled"), n.append(o), e.append(n)
            }
            e.ojMenu({
                openOptions: {
                    display: "auto"
                },
                open: this.__handleOverflowMenuOpen.bind(this),
                close: this.__handleOverflowMenuClose.bind(this),
                select: this.__handleOverflowMenuSelection.bind(this)
            }), this.m_overflowMenu = e
        }
        return this.m_overflowMenu
    }, m.prototype._launchOverflowMenu = function(t) {
        this._getOverflowMenu().is(":visible") || (this._highlightUnhighlightMoreItem(!0), this._getOverflowMenu().ojMenu("open", t, {
            launcher: this._getOverflowMenuButton(),
            initialFocus: "firstItem",
            position: {
                my: "end bottom",
                at: "end top",
                collision: "flipfit"
            }
        }))
    }, m.prototype._toggleOverflowBtnSelection = function(t) {
        var e;
        if (this.m_overflowMenuItem && this.m_overflowMenuItems.length > 0) {
            if (t)
                for (var i = 0; i < this.m_overflowMenuItems.length; i++)
                    if (this.m_widget.compareValues(this.m_overflowMenuItems[i].key, t)) {
                        e = !0;
                        break
                    }
            e || this._highlightUnhighlightMoreItem(!1)
        }
    }, m.prototype.__handleOverflowMenuOpen = function(t) {
        this._getOverflowMenuButton().find("." + this.m_widget.getItemContentStyleClass()).attr("tabindex", "0")
    }, m.prototype.__handleOverflowMenuClose = function(t) {
        var e = this.m_widget.ojContext.option("selection");
        this._toggleOverflowBtnSelection(e), this._getOverflowMenuButton().find("." + this.m_widget.getItemContentStyleClass()).focus()
    }, m.prototype.__handleOverflowMenuSelection = function(t, e) {
        var i = e.item.data("key"),
            n = {
                selection: i
            },
            o = this.m_widget.FindElementByKey(i);
        this.m_widget.HandleSelectionOption(n);
        var a = n.selection;
        a && this.m_widget.SetOption("selection", a, {
            _context: {
                originalEvent: t,
                internalSet: !0,
                extraData: {
                    items: s(o)
                }
            },
            changed: !0
        })
    }, m.prototype._getItemLabel = function(t) {
        var e = t.find("." + this.m_widget.getItemTitleStyleClass() + ":first");
        return e.length > 0 ? e.text() : t.find("." + this.m_widget.getItemLabelStyleClass() + ":first").text()
    }, g.prototype._TEXT_WIDTH_KEY = "textWidth", g.prototype._ITEM_WIDTH_KEY = "itemWidth", g.prototype._getOverflowMenuButton = function() {
        return this._navlistHandler._getOverflowMenuButton()
    }, g.prototype._getWidget = function() {
        return this._navlistHandler.m_widget
    }, g.prototype.shouldHandleOverflow = function() {
        return "popup" === this._overflow || "progressive" === this._truncation
    }, g.prototype.unApplyTruncation = function() {
        var t = this;
        this._items.each(function(e, i) {
            s(i).find("." + t._getWidget().getItemLabelStyleClass()).css("max-width", "")
        })
    }, g.prototype.checkForOverflow = function() {
        return !!this.shouldHandleOverflow() && (this._overflowData || (this._overflowData = this._collectOverflowData()), this._isOverflowed(this._overflowData.containerEdgePos, this._overflowData.itemEdgePos, 0))
    }, g.prototype.applyTruncation = function() {
        "progressive" === this._truncation && this._applyLabelMaxWidth(this._overflowData);
        var t = this._items.last()[0].getBoundingClientRect()["ltr" === n.getReadingDirection() ? "right" : "left"];
        return this._isOverflowed(this._overflowData.containerEdgePos, t, 0)
    }, g.prototype.getOverflowThreshold = function() {
        var t = -1;
        return "popup" === this._overflow && (t = this._calculateThreshold(this._overflowData)), t
    }, g.prototype._collectOverflowData = function() {
        var t, e, i = "ltr" === n.getReadingDirection() ? "right" : "left",
            s = this._getWidget().ojContext.element,
            o = this._items.last();
        "progressive" === this._truncation && (this._calculateItemWidths(), t = this._calculateItemNonTextWidth());
        var a = s[0].getBoundingClientRect()[i],
            l = s[0].getBoundingClientRect().width;
        return "popup" === this._overflow && (e = this._getOverflowMenuButton()[0].getBoundingClientRect().width), {
            containerEdgePos: a,
            containerWidth: l,
            overflowItemWidth: e,
            itemEdgePos: o[0].getBoundingClientRect()[i],
            itemNonTextWidth: t
        }
    }, g.prototype._calculateItemWidths = function() {
        var t = this;
        this._items.each(function(e, i) {
            var n = s(i),
                o = n.find("." + t._getWidget().getItemLabelStyleClass())[0].getBoundingClientRect().width;
            n.data(t._TEXT_WIDTH_KEY, o), n.data(t._ITEM_WIDTH_KEY, i.getBoundingClientRect().width)
        })
    }, g.prototype._calculateItemNonTextWidth = function() {
        var t = this._items,
            e = this;
        this._getWidget().GetRootElement().find("." + this._getWidget().getHasIconsStyleClass()).lenght > 0 && (t = t.filter(function(t, i) {
            return s(i).find("." + e._getWidget().getItemIconStyleClass()).length > 0
        }));
        var i = t.filter(function(t, i) {
                return s(i).find("." + e._getWidget().getRemovableStyleClass()).length > 0
            }),
            n = i && i.length > 0 ? i.last() : t.last(),
            o = n.data(e._TEXT_WIDTH_KEY);
        return n.data(e._ITEM_WIDTH_KEY) - o
    }, g.prototype._isOverflowed = function(t, e, i) {
        var s = i || 0;
        return "ltr" === n.getReadingDirection() ? e - t + s > .1 : t - e + s > .1
    }, g.prototype._calculateThreshold = function(t) {
        for (var e = this._items, i = "ltr" === n.getReadingDirection() ? "right" : "left", s = e.length - 1, o = e[s].getBoundingClientRect()[i]; this._isOverflowed(t.containerEdgePos, o, t.overflowItemWidth) && s > 0;) o = e[s -= 1].getBoundingClientRect()[i];
        return s + 1
    }, g.prototype._applyLabelMaxWidth = function(t) {
        var e = this._items,
            i = this,
            n = this._getMinLabelWidth(this._items),
            o = t.containerWidth / e.length - t.itemNonTextWidth;
        o < n && (o = n);
        var a = 0,
            l = 0;
        e.each(function(t, e) {
            var n = s(e).data(i._TEXT_WIDTH_KEY);
            n < o ? a += o - n : l += n
        }), e.each(function(t, e) {
            var n = s(e).data(i._TEXT_WIDTH_KEY),
                r = n;
            n > o && (r = o + a * n / l), s(e).find("." + i._getWidget().getItemLabelStyleClass()).css({
                "max-width": r + "px"
            })
        })
    }, g.prototype._getMinLabelWidth = function(t) {
        var e = window.getComputedStyle(t.first().find("." + this._getWidget().getItemLabelStyleClass())[0], null).getPropertyValue("min-width");
        return e.indexOf("px") > 0 ? parseInt(e.substring(0, e.length - 2), 10) : 0
    };
    const p = "oj-navigationlist-hierarchical-menu",
        v = function(t, e, i) {
            v.superclass.constructor.call(this, t, e, i), this.m_expanded = []
        };
    t.Object.createSubclass(v, c, "oj.SlidingNavListHandler"), t._registerLegacyNamespaceProp("SlidingNavListHandler", v), v.prototype.Destroy = function() {
        this.m_root.removeClass("oj-navigationlist-slider").removeClass(this.m_widget.getNavListVerticalStyleClass()), this._toolbar.remove()
    }, v.prototype._slideAnimation = function(t, e, i, s, n) {
        var o = this,
            a = this.m_widget.getListContainer(),
            l = a.hasClass("oj-focus-ancestor");
        l && e && a.removeClass("oj-focus-ancestor");
        var r = e ? "sliderExpand" : "sliderCollapse";
        this.m_widget.StartAnimation(a.get(0), r, this.m_widget.getAnimationEffect(r)).then(function() {
            o._slideAnimationComplete(t, e, i, s, l), n(null)
        })
    }, v.prototype._slideAnimationComplete = function(t, e, i, s, n) {
        null !== this.m_widget.m_contentHandler && (i && (n && this.m_widget.getListContainer().addClass("oj-focus-ancestor"), s && 0 === s.button && this.m_widget.AvoidFocusHighLight(!0), i.length > 0 && this.m_widget.SetCurrentItem(i, s), this.m_widget.AvoidFocusHighLight(!1)), e ? this.m_widget.AnimateExpandComplete(t.children("." + this.m_widget.getGroupStyleClass())) : this.m_widget.AnimateCollapseComplete(t.children("." + this.m_widget.getGroupStyleClass())))
    }, v.prototype.Expand = function(t, e, i) {
        var n, o = new Promise(function(t) {
                n = t
            }),
            a = s(t).parents(".oj-navigationlist-item-element:first"),
            l = a.children("." + this.m_widget.getGroupStyleClass()),
            r = null,
            h = a.closest("." + this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS);
        return h.length > 0 && (h.removeClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS), a.addClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS), r = l.find("." + this.m_widget.getItemElementStyleClass() + ":eq(0)"), this._updateHMenuOnExpand(a)), e ? this._slideAnimation(a, !0, r, i, n) : (this._slideAnimationComplete(a, !0, r, i, !1), n(null)), a.siblings().attr("aria-hidden", "true"), a.children("." + this.m_widget.getGroupItemStyleClass()).children("." + this.m_widget.getItemContentStyleClass()).attr("aria-hidden", "true"), l.removeAttr("aria-hidden"), t.css("display", ""), a.addClass("oj-skipfocus"), o
    }, v.prototype._updateHMenuOnExpand = function(t) {
        var e = t.parentsUntil(this.m_widget.element, "." + this.m_widget.getItemElementStyleClass());
        e = e.get().reverse(), e = s(e.concat(t)), this.m_expanded = [], this._emptyHviewMenu(), e.each(function(t, e) {
            var i;
            i = 0 === t ? this.m_widget.getRootLabel() : this.m_widget.getItemLabel(this.m_expanded[t - 1]);
            var n = s(e);
            this._addItemToHviewMenu(this.m_widget.GetKey(n[0]), this.m_widget.getItemLabel(n), i), this.m_expanded.push(n)
        }.bind(this))
    }, v.prototype.Collapse = function(t, e, i, s) {
        var n, o = new Promise(function(t) {
                n = t
            }),
            a = t.children("." + this.m_widget.getGroupStyleClass()),
            l = t.parent();
        return t.children("." + this.m_widget.getGroupItemStyleClass()).children("." + this.m_widget.getItemContentStyleClass()).removeAttr("aria-hidden"), a.attr("aria-hidden", "true"), t.siblings().removeAttr("aria-hidden"), t.removeClass("oj-skipfocus"), t.removeClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS), 0 === t.closest("." + this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS).length && (l.closest("." + this.m_widget.getItemElementStyleClass()).addClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS), this.m_widget.element.is(l) && this.m_widget.element.addClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS)), i ? this._slideAnimation(t, !1, a.parent(), s, n) : (this._slideAnimationComplete(t, !1, a.parent(), s, !1), n(null)), this._updateHMenuOnCollapse(e), o
    }, v.prototype._updateHMenuOnCollapse = function(t) {
        var e = -1;
        this.m_expanded.forEach(function(i, s) {
            var n = this.m_widget.GetKey(i[0]);
            t === n && (e = s)
        }.bind(this)), e > -1 && this.m_expanded.splice(e), this._removeItemFromHviewMenu(t)
    }, v.prototype.UpdateAriaPropertiesOnSelectedItem = function(t, e) {
        e ? t.attr("aria-describedby", this._selectedLabelId) : t.removeAttr("aria-describedby")
    }, v.prototype.GetState = function(t) {
        var e = this.m_widget.getFocusItem(t).attr("aria-expanded");
        return "true" === e ? this.m_widget.STATE_EXPANDED : "false" === e ? this.m_widget.STATE_COLLAPSED : this.m_widget.STATE_NONE
    }, v.prototype.SetState = function(t, e) {
        e === this.m_widget.STATE_EXPANDED ? (this.m_widget.getFocusItem(t).attr("aria-expanded", "true"), t.removeClass(this.m_widget.COLLAPSED_STYLE_CLASS).addClass(this.m_widget.EXPANDED_STYLE_CLASS)) : e === this.m_widget.STATE_COLLAPSED && (this.m_widget.getFocusItem(t).attr("aria-expanded", "false"), t.removeClass(this.m_widget.EXPANDED_STYLE_CLASS).addClass(this.m_widget.COLLAPSED_STYLE_CLASS))
    }, v.prototype.ModifyListItem = function(t, e) {
        var i = this.m_widget.getFocusItem(t);
        t.attr("role", "presentation"), i.attr("role", "menuitem"), e.attr("id") || e.uniqueId(), i.removeAttr("aria-selected");
        var s = t.children("." + this.m_widget.getGroupStyleClass());
        s.length > 0 && (i.attr("aria-haspopup", "true"), s.attr("role", "menu"), s.css("display", ""), t.removeAttr("aria-expanded"), i.attr("aria-expanded", "false"))
    }, v.prototype.BeforeRenderComplete = function() {
        this.m_root.attr("role", "menu"), this.m_widget.element.attr("role", "presentation")
    }, v.prototype.Init = function(t) {
        this.m_root.addClass("oj-navigationlist-slider").addClass(this.m_widget.getNavListVerticalStyleClass()), t.element.addClass("oj-navigationlist-current"), this._buildSlidingNavListHeader(t), this._initializeHierarchicalView()
    }, v.prototype.HandleClick = function(t) {
        s(t.target).closest(".oj-navigationlist-previous-link, .oj-navigationlist-previous-button").length > 0 && this.CollapseCurrentList(t)
    }, v.prototype.IsSelectable = function(t) {
        var e, i = this.m_widget.getFocusItem(s(t))[0],
            n = this.m_widget.getCollapseIconStyleClass();
        return (!(e = i.previousElementSibling) || !e.classList.contains(n)) && ("menuitem" === this.m_widget.getFocusItem(s(t))[0].getAttribute("role") && !this.m_widget.getFocusItem(s(t))[0].hasAttribute("aria-selected"))
    }, v.prototype.HandleKeydown = function(t) {
        s(t.target).closest(".oj-navigationlist-previous-link, .oj-navigationlist-previous-button").length > 0 && t.keyCode === s.ui.keyCode.ENTER && this.CollapseCurrentList(t), s(t.target).closest("." + this.m_widget.GetStyleClass()).length > 0 && (t.keyCode !== s.ui.keyCode.ESCAPE || t.isDefaultPrevented() || this.CollapseCurrentList(t))
    }, v.prototype._buildSlidingNavListHeader = function(t) {
        this._toolbar = s(document.createElement("div")), this._toolbar.addClass("oj-navigationlist-toolbar"), this._previousLink = s(document.createElement("a")), this._prevButton = s(document.createElement("a")), this._prevButton.addClass("oj-navigationlist-previous-button"), this._prevButton.css("visibility", "hidden").attr("tabindex", "-1"), this._previousLink.addClass("oj-navigationlist-previous-link").attr("tabindex", "-1"), this._headerLabel = s(document.createElement("label")), this._headerLabel.addClass("oj-navigationlist-current-header").text(this.m_widget.getRootLabel()), this._vSeparator = s(document.createElement("span")), this._vSeparator.attr("role", "separator").attr("aria-orientation", "vertical").addClass("oj-navigationlist-toolbar-separator"), this._hviewBtn = s(document.createElement("button")), this._hviewBtn.addClass("oj-navigationlist-hierarchical-button").attr("tabindex", "-1"), this._hviewMenu = s(document.createElement("ul")), this._hviewMenu.addClass(p).hide();
        var e = s(document.createElement("label"));
        e.uniqueId().addClass("oj-helper-hidden-accessible").attr("aria-hidden", "true"), this._selectedLabelId = e.attr("id"), e.text(this.m_component.getTranslatedString("selectedLabel")), this._previousLink.append(this._headerLabel), this._toolbar.append(this._prevButton), this._toolbar.append(this._previousLink).append(this._vSeparator).append(this._hviewBtn).append(this._hviewMenu).append(e), this.m_root.prepend(this._toolbar), this._showOrHideHierarchyMenu(t.hierarchyMenuDisplayThresholdLevel)
    }, v.prototype.CollapseCurrentList = function(t) {
        var e = this.m_expanded[this.m_expanded.length - 1];
        e && this.m_widget.CollapseItem(e, t, !0, null, !0, !0)
    }, v.prototype._initializeHierarchicalView = function() {
        var t = this,
            e = this._hviewMenu.uniqueId().attr("id");
        this._hviewMenu.ojMenu({
            openOptions: {
                position: {
                    my: "end top",
                    at: "end bottom"
                }
            },
            select: function(e, i) {
                var n = i.item.nextAll(),
                    o = t.m_expanded,
                    a = i.item.data("key");
                for (t.m_widget.signalTaskStart(); o.length > 0;) {
                    var l = o[o.length - 1],
                        r = t.m_widget.GetKey(l[0]);
                    if (t.m_widget.CollapseItem(s(l), e, !0, r, !0, !0), t.m_widget.compareValues(a, r)) break
                }
                n.remove(), i.item.remove(), t._hviewMenu.ojMenu("refresh"), t.m_widget.signalTaskEnd()
            }
        }), this._hviewBtn.ojButton({
            label: this.m_component.getTranslatedString("hierMenuBtnLabel"),
            display: "icons",
            icons: {
                start: "oj-fwk-icon oj-hier-icon"
            },
            menu: "#" + e,
            disabled: !0,
            chroming: "half"
        }), this._prevButton.ojButton({
            label: this.m_component.getTranslatedString("previousIcon"),
            display: "icons",
            icons: {
                start: "oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext"
            },
            chroming: "half"
        })
    }, v.prototype._emptyHviewMenu = function() {
        this._hviewMenu && this._hviewMenu.find("li").remove()
    }, v.prototype._addItemToHviewMenu = function(t, e, i) {
        var n;
        if (this._hviewBtn) {
            var o = this._hviewMenu.find("li").length,
                a = s(document.createElement("li")),
                l = s(document.createElement("a"));
            if (l.attr("href", "#"), a.append(l), o > 0) {
                for (n = 0; n < o; n++) n > 0 && l.append(s(document.createElement("span")).addClass("oj-navigationlist-hvitem-space"));
                l.append(s(document.createElement("span")).addClass("oj-menu-item-icon oj-icon oj-navigationlist-level-indicator"))
            }
            var r = s(document.createElement("span")).addClass("oj-navigationlist-hierarchical-menu-label");
            r.text(i), l.append(r), a.data("key", t), this._hviewMenu.append(a), this._hviewMenu.ojMenu("refresh"), this._showOrHideHierarchyMenu(this.m_widget.GetOption("hierarchyMenuDisplayThresholdLevel")), this._hviewBtn.ojButton("option", "disabled", !1), this._prevButton.css("visibility", "visible"), this.m_widget.getListContainer().hasClass("oj-focus-ancestor") && this._prevButton.attr("tabindex", "0"), this._headerLabel.text(e)
        }
    }, v.prototype.SetOptions = function(t) {
        void 0 !== t.hierarchyMenuDisplayThresholdLevel && (this.m_widget.GetOption("hierarchyMenuDisplayThresholdLevel") !== t.hierarchyMenuDisplayThresholdLevel && this._showOrHideHierarchyMenu(t.hierarchyMenuDisplayThresholdLevel))
    }, v.prototype._showOrHideHierarchyMenu = function(t) {
        var e = this._hviewMenu.find("li").length; - 1 === t || e < t ? (this._vSeparator.css("visibility", "hidden"), this._hviewBtn[0] === document.activeElement && this.m_root.focusin(), this._hviewBtn.css("visibility", "hidden")) : e >= t && (this._vSeparator.css("visibility", "visible"), this._hviewBtn.css("visibility", "visible"))
    }, v.prototype._removeItemFromHviewMenu = function(t) {
        var e, i;
        this._hviewBtn && (this._hviewMenu.find("li").each(function(n, o) {
            var a = s(o);
            a.data("key") === t ? (a.remove(), i = a.children("a").text(), e = !0) : e && a.remove()
        }), this._hviewMenu.ojMenu("refresh"), this._showOrHideHierarchyMenu(this.m_widget.GetOption("hierarchyMenuDisplayThresholdLevel")), 0 === this._hviewMenu.children("li").length ? (this._hviewBtn.ojButton("option", "disabled", !0), this._prevButton.css("visibility", "hidden"), this._prevButton.attr("tabindex", "-1"), this._headerLabel.text(this.m_widget.getRootLabel())) : this._headerLabel.text(i))
    }, v.prototype.RestoreItem = function(t, e, i) {
        e.removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-describedby").removeAttr("aria-hidden")
    }, v.prototype._makeToolbarItemsFocusable = function(t) {
        t ? (this._hviewMenu.find("li").length && this._prevButton.attr("tabindex", "0"), this._hviewBtn.attr("tabindex", "0")) : (this._prevButton.attr("tabindex", "-1"), this._hviewBtn.attr("tabindex", "-1"))
    }, v.prototype.HandleFocus = function(t) {
        s.contains(this._toolbar.get(0), t.target) || this._hviewMenu.get(0) === t.relatedTarget || (this._makeToolbarItemsFocusable(!0), _.superclass.HandleFocus.apply(this.m_widget, arguments))
    }, v.prototype.HandleBlur = function(t) {
        s.contains(this._toolbar.get(0), t.relatedTarget) || this._hviewMenu.get(0) === t.relatedTarget ? this.m_widget.UnhighlightActive() : (null != t.relatedTarget && s.contains(this.m_root.get(0), t.relatedTarget) || this._makeToolbarItemsFocusable(!1), _.superclass.HandleBlur.apply(this.m_widget, arguments))
    }, v.prototype.GetNodeBySubId = function(t) {
        return "oj-navigationlist-previous-link" === t.subId ? this._prevButton ? this._prevButton[0] : null : "oj-navigationlist-hierarchical-button" === t.subId ? this._hviewBtn ? this._hviewBtn[0] : null : t.subId === p && this._hviewMenu ? this._hviewMenu[0] : null
    }, v.prototype.GetSubIdByNode = function(t) {
        return s(t).closest(this._prevButton).length > 0 ? {
            subId: "oj-navigationlist-previous-link"
        } : s(t).closest(this._hviewBtn).length > 0 ? {
            subId: "oj-navigationlist-hierarchical-button"
        } : s(t).closest(this._hviewMenu).length > 0 ? {
            subId: p
        } : null
    }
});
//# sourceMappingURL=ojnavigationlist.js.map