/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojinputtext", "ojs/ojjquery-hammer", "ojs/ojpagingmodel", "ojs/ojcore-base", "jquery", "ojs/ojdomutils", "ojs/ojcontext", "hammerjs", "ojs/ojlogger", "ojs/ojconverter-number", "ojs/ojvalidator-numberrange"], function(t, e, _, n, a, i, s, o, r, S, l) {
    "use strict";
    var g;
    n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l, (g = {
        properties: {
            data: {
                type: "object"
            },
            loadMoreOptions: {
                type: "object",
                properties: {
                    maxCount: {
                        type: "number",
                        value: 500
                    }
                }
            },
            mode: {
                type: "string",
                enumValues: ["loadMore", "page"],
                value: "page"
            },
            overflow: {
                type: "string",
                enumValues: ["fit", "none"],
                value: "fit"
            },
            pageOptions: {
                type: "object",
                properties: {
                    layout: {
                        type: "Array<string>",
                        enumValues: ["all", "auto", "input", "nav", "pages", "rangeText"],
                        value: ["auto"]
                    },
                    maxPageLinks: {
                        type: "number",
                        value: 6
                    },
                    orientation: {
                        type: "string",
                        enumValues: ["horizontal", "vertical"],
                        value: "horizontal"
                    },
                    type: {
                        type: "string",
                        enumValues: ["dots", "numbers"],
                        value: "numbers"
                    }
                }
            },
            pageSize: {
                type: "number",
                value: 25
            },
            translations: {
                type: "object",
                value: {},
                properties: {
                    fullMsgItem: {
                        type: "string"
                    },
                    fullMsgItemApprox: {
                        type: "string"
                    },
                    fullMsgItemAtLeast: {
                        type: "string"
                    },
                    fullMsgItemRange: {
                        type: "string"
                    },
                    fullMsgItemRangeApprox: {
                        type: "string"
                    },
                    fullMsgItemRangeAtLeast: {
                        type: "string"
                    },
                    labelAccNavFirstPage: {
                        type: "string"
                    },
                    labelAccNavLastPage: {
                        type: "string"
                    },
                    labelAccNavNextPage: {
                        type: "string"
                    },
                    labelAccNavPage: {
                        type: "string"
                    },
                    labelAccNavPreviousPage: {
                        type: "string"
                    },
                    labelAccPageNumber: {
                        type: "string"
                    },
                    labelAccPaging: {
                        type: "string"
                    },
                    labelLoadMore: {
                        type: "string"
                    },
                    labelLoadMoreMaxRows: {
                        type: "string"
                    },
                    labelNavInputPage: {
                        type: "string"
                    },
                    labelNavInputPageMax: {
                        type: "string"
                    },
                    maxPageLinksInvalid: {
                        type: "string"
                    },
                    msgItemNoTotal: {
                        type: "string"
                    },
                    msgItemRangeCurrent: {
                        type: "string"
                    },
                    msgItemRangeCurrentSingle: {
                        type: "string"
                    },
                    msgItemRangeItems: {
                        type: "string"
                    },
                    msgItemRangeNoTotal: {
                        type: "string"
                    },
                    msgItemRangeOf: {
                        type: "string"
                    },
                    msgItemRangeOfApprox: {
                        type: "string"
                    },
                    msgItemRangeOfAtLeast: {
                        type: "string"
                    },
                    pageInvalid: {
                        type: "string"
                    },
                    tipNavFirstPage: {
                        type: "string"
                    },
                    tipNavInputPage: {
                        type: "string"
                    },
                    tipNavLastPage: {
                        type: "string"
                    },
                    tipNavNextPage: {
                        type: "string"
                    },
                    tipNavPageLink: {
                        type: "string"
                    },
                    tipNavPreviousPage: {
                        type: "string"
                    }
                }
            }
        },
        methods: {
            firstPage: {},
            getProperty: {},
            lastPage: {},
            loadNext: {},
            nextPage: {},
            page: {},
            previousPage: {},
            refresh: {},
            setProperties: {},
            setProperty: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        extension: {}
    }).extension._WIDGET_NAME = "ojPagingControl", n.CustomElementBridge.register("oj-paging-control", {
        metadata: g
    }), n.__registerWidget("oj.ojPagingControl", a.oj.baseComponent, {
        version: "1.0.0",
        defaultElement: "<div>",
        widgetEventPrefix: "oj",
        options: {
            data: null,
            overflow: "fit",
            pageSize: 25,
            pageOptions: {
                layout: ["auto"],
                type: "numbers",
                maxPageLinks: 6,
                orientation: "horizontal"
            },
            loadMoreOptions: {
                maxCount: 500
            },
            mode: "page",
            ready: null
        },
        _BUNDLE_KEY: {
            _LABEL_ACC_PAGING: "labelAccPaging",
            _LABEL_ACC_PAGE_NUMBER: "labelAccPageNumber",
            _LABEL_ACC_NAV_FIRST_PAGE: "labelAccNavFirstPage",
            _LABEL_ACC_NAV_LAST_PAGE: "labelAccNavLastPage",
            _LABEL_ACC_NAV_NEXT_PAGE: "labelAccNavNextPage",
            _LABEL_ACC_NAV_PREVIOUS_PAGE: "labelAccNavPreviousPage",
            _LABEL_ACC_NAV_PAGE: "labelAccNavPage",
            _LABEL_LOAD_MORE: "labelLoadMore",
            _LABEL_LOAD_MORE_MAX_ROWS: "labelLoadMoreMaxRows",
            _LABEL_NAV_INPUT_PAGE: "labelNavInputPage",
            _LABEL_NAV_INPUT_PAGE_MAX: "labelNavInputPageMax",
            _LABEL_NAV_INPUT_PAGE_SUMMARY: "labelNavInputPageSummary",
            _MSG_ITEM_RANGE_CURRENT: "msgItemRangeCurrent",
            _MSG_ITEM_RANGE_CURRENT_SINGLE: "msgItemRangeCurrentSingle",
            _MSG_ITEM_RANGE_ITEMS: "msgItemRangeItems",
            _MSG_ITEM_RANGE_ATLEAST: "msgItemRangeOfAtLeast",
            _MSG_ITEM_RANGE_APPROX: "msgItemRangeOfApprox",
            _MSG_ITEM_RANGE_OF: "msgItemRangeOf",
            _MSG_ITEM_RANGE_NO_TOTAL: "msgItemRangeNoTotal",
            _FULL_MSG_ITEM_RANGE_ATLEAST: "fullMsgItemRangeAtLeast",
            _FULL_MSG_ITEM_RANGE_APPROX: "fullMsgItemRangeApprox",
            _FULL_MSG_ITEM_RANGE: "fullMsgItemRange",
            _MSG_ITEM_NO_TOTAL: "msgItemNoTotal",
            _FULL_MSG_ITEM_ATLEAST: "fullMsgItemAtLeast",
            _FULL_MSG_ITEM_APPROX: "fullMsgItemApprox",
            _FULL_MSG_ITEM: "fullMsgItem",
            _TIP_NAV_INPUT_PAGE: "tipNavInputPage",
            _TIP_NAV_PAGE_LINK: "tipNavPageLink",
            _TIP_NAV_NEXT_PAGE: "tipNavNextPage",
            _TIP_NAV_PREVIOUS_PAGE: "tipNavPreviousPage",
            _TIP_NAV_FIRST_PAGE: "tipNavFirstPage",
            _TIP_NAV_LAST_PAGE: "tipNavLastPage",
            _ERR_PAGE_INVALID_SUMMARY: "pageInvalid.summary",
            _ERR_PAGE_INVALID_DETAIL: "pageInvalid.detail",
            _ERR_DATA_INVALID_TYPE_SUMMARY: "dataInvalidType.summary",
            _ERR_DATA_INVALID_TYPE_DETAIL: "dataInvalidType.detail",
            _ERR_MAXPAGELINKS_INVALID_SUMMARY: "maxPageLinksInvalid.summary",
            _ERR_MAXPAGELINKS_INVALID_DETAIL: "maxPageLinksInvalid.detail"
        },
        _MARKER_STYLE_CLASSES: {
            _WIDGET: "oj-component",
            _ACTIVE: "oj-active",
            _CLICKABLE_ICON: "oj-clickable-icon-nocontext",
            _DISABLED: "oj-disabled",
            _ENABLED: "oj-enabled",
            _FOCUS: "oj-focus",
            _FOCUS_HIGHLIGHT: "oj-focus-highlight",
            _HOVER: "oj-hover",
            _SELECTED: "oj-selected"
        },
        _CSS_CLASSES: {
            _PAGING_CONTROL_CLASS: "oj-pagingcontrol",
            _PAGING_CONTROL_ACC_LABEL_CLASS: "oj-pagingcontrol-acc-label",
            _PAGING_CONTROL_ACC_PAGE_LABEL_CLASS: "oj-pagingcontrol-acc-page-label",
            _PAGING_CONTROL_CONTENT_CLASS: "oj-pagingcontrol-content",
            _PAGING_CONTROL_LOAD_MORE_CLASS: "oj-pagingcontrol-loadmore",
            _PAGING_CONTROL_LOAD_MORE_LINK_CLASS: "oj-pagingcontrol-loadmore-link",
            _PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS: "oj-pagingcontrol-loadmore-max-rows",
            _PAGING_CONTROL_LOAD_MORE_RANGE_CLASS: "oj-pagingcontrol-loadmore-range",
            _PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS: "oj-pagingcontrol-loadmore-range-current",
            _PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS: "oj-pagingcontrol-loadmore-range-max",
            _PAGING_CONTROL_NAV_CLASS: "oj-pagingcontrol-nav",
            _PAGING_CONTROL_NAV_CLASS_STANDARD: "oj-pagingcontrol-nav-standard",
            _PAGING_CONTROL_NAV_DOTS_VERTICAL_CLASS: "oj-pagingcontrol-nav-dots-vertical",
            _PAGING_CONTROL_NAV_ARROW_CLASS: "oj-pagingcontrol-nav-arrow",
            _PAGING_CONTROL_NAV_ARROW_SECTION_CLASS: "oj-pagingcontrol-nav-arrow-section",
            _PAGING_CONTROL_NAV_PAGE_CLASS: "oj-pagingcontrol-nav-page",
            _PAGING_CONTROL_NAV_PAGE_ELLIPSIS_CLASS: "oj-pagingcontrol-nav-page-ellipsis",
            _PAGING_CONTROL_NAV_DOT_CLASS: "oj-pagingcontrol-nav-dot",
            _PAGING_CONTROL_NAV_DOT_BULLET_CLASS: "oj-pagingcontrol-nav-dot-bullet",
            _PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS: "oj-pagingcontrol-nav-page-acc-label",
            _PAGING_CONTROL_NAV_LABEL_CLASS: "oj-pagingcontrol-nav-label",
            _PAGING_CONTROL_NAV_INPUT_SECTION_CLASS: "oj-pagingcontrol-nav-input-section",
            _PAGING_CONTROL_NAV_INPUT_CLASS: "oj-pagingcontrol-nav-input",
            _PAGING_CONTROL_NAV_INPUT_MAX_CLASS: "oj-pagingcontrol-nav-input-max",
            _PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS: "oj-pagingcontrol-nav-input-summary",
            _PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS: "oj-pagingcontrol-nav-input-summary-current",
            _PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS: "oj-pagingcontrol-nav-input-summary-max",
            _PAGING_CONTROL_NAV_PAGES_SECTION_CLASS: "oj-pagingcontrol-nav-pages-section",
            _PAGING_CONTROL_NAV_PAGES_LINKS_CLASS: "oj-pagingcontrol-nav-pages-links",
            _PAGING_CONTROL_NAV_FIRST_CLASS: "oj-pagingcontrol-nav-first",
            _PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS: "oj-pagingcontrol-nav-first-acc-label",
            _PAGING_CONTROL_NAV_PREVIOUS_CLASS: "oj-pagingcontrol-nav-previous",
            _PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS: "oj-pagingcontrol-nav-previous-acc-label",
            _PAGING_CONTROL_NAV_NEXT_CLASS: "oj-pagingcontrol-nav-next",
            _PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS: "oj-pagingcontrol-nav-next-acc-label",
            _PAGING_CONTROL_NAV_LAST_CLASS: "oj-pagingcontrol-nav-last",
            _PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS: "oj-pagingcontrol-nav-last-acc-label",
            _PAGING_CONTROL_NAV_FIRST_ICON_CLASS: "oj-pagingcontrol-nav-first-icon",
            _PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS: "oj-pagingcontrol-nav-previous-icon",
            _PAGING_CONTROL_NAV_NEXT_ICON_CLASS: "oj-pagingcontrol-nav-next-icon",
            _PAGING_CONTROL_NAV_LAST_ICON_CLASS: "oj-pagingcontrol-nav-last-icon",
            _PAGING_CONTROL_NAV_FIRST_VERTICAL_ICON_CLASS: "oj-pagingcontrol-nav-first-vertical-icon",
            _PAGING_CONTROL_NAV_PREVIOUS_VERTICAL_ICON_CLASS: "oj-pagingcontrol-nav-previous-vertical-icon",
            _PAGING_CONTROL_NAV_NEXT_VERTICAL_ICON_CLASS: "oj-pagingcontrol-nav-next-vertical-icon",
            _PAGING_CONTROL_NAV_LAST_VERTICAL_ICON_CLASS: "oj-pagingcontrol-nav-last-vertical-icon",
            _WIDGET_ICON_CLASS: "oj-component-icon",
            _HIDDEN_CONTENT_ACC_CLASS: "oj-helper-hidden-accessible"
        },
        _DATA_ATTR_PAGE_NUM: "data-oj-pagenum",
        _OPTION_ENABLED: "enabled",
        _OPTION_DISABLED: "disabled",
        _TAB_INDEX: "tabindex",
        _MODE: {
            _LOAD_MORE: "loadMore",
            _PAGE: "page"
        },
        _PAGE_OPTION_LAYOUT: {
            _AUTO: "auto",
            _ALL: "all",
            _INPUT: "input",
            _RANGE_TEXT: "rangeText",
            _PAGES: "pages",
            _NAV: "nav"
        },
        _PAGING_TABLE_DATA_SOURCE_EVENT_TYPE: {
            _ADD: "add",
            _REMOVE: "remove",
            _RESET: "reset",
            _REFRESH: "refresh",
            _SYNC: "sync",
            _SORT: "sort"
        },
        _PAGE_OPTION_DEFAULT_MAX_PAGE_LINKS: 6,
        _TYPE: {
            _NUMBERS: "numbers",
            _DOTS: "dots"
        },
        firstPage: function() {
            return null != this._getData() ? this._invokeUserDataPageFetch(0) : this._getRejectPromise()
        },
        previousPage: function() {
            if (null != this._getData()) {
                var t = this._getCurrentPage();
                if (t > 0) return this._invokeUserDataPageFetch(t - 1)
            }
            return this._getRejectPromise()
        },
        nextPage: function() {
            if (null != this._getData()) {
                var t = this._getCurrentPage();
                if (this._isTotalSizeConfidenceActual() && t + 1 <= this._getTotalPages() - 1 || this._getTotalPages() < 0 || !this._isTotalSizeConfidenceActual()) return this._invokeUserDataPageFetch(t + 1)
            }
            return this._getRejectPromise()
        },
        lastPage: function() {
            return null != this._getData() && this._getTotalPages() > 0 ? this._invokeUserDataPageFetch(this._getTotalPages() - 1) : this._getRejectPromise()
        },
        page: function(t) {
            return null != this._getData() && (this._isTotalSizeConfidenceActual() && t <= this._getTotalPages() - 1 || this._getTotalPages() < 0 || !this._isTotalSizeConfidenceActual()) ? this._invokeUserDataPageFetch(t) : this._getRejectPromise()
        },
        loadNext: function() {
            return null != this._getData() ? this._invokeDataFetchNext() : this._getRejectPromise()
        },
        refresh: function() {
            this._super(), this._refresh()
        },
        getNodeBySubId: function(t) {
            if (null == t) return this.element ? this.element[0] : null;
            var e = t.subId,
                _ = null;
            if ("oj-pagingcontrol-nav-input" === e)
                if (this._IsCustomElement()) {
                    var n = this._getPagingControlNavInput();
                    _ = n ? n[0] : void 0
                } else _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS)[0];
            else if ("oj-pagingcontrol-nav-input-max" === e) _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS)[0];
            else if ("oj-pagingcontrol-nav-input-summary" === e) _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS)[0];
            else if ("oj-pagingcontrol-nav-input-summary-current" === e) _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS)[0];
            else if ("oj-pagingcontrol-nav-input-summary-max" === e) _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS)[0];
            else if ("oj-pagingcontrol-nav-first" === e) _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS)[0];
            else if ("oj-pagingcontrol-nav-next" === e) _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS)[0];
            else if ("oj-pagingcontrol-nav-previous" === e) _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS)[0];
            else if ("oj-pagingcontrol-nav-last" === e) _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS)[0];
            else if ("oj-pagingcontrol-nav-page" === e) {
                var a = t.index;
                _ = this._getPagingControlContainer().find("[" + this._DATA_ATTR_PAGE_NUM + "=" + a + "]")[0]
            } else "oj-pagingcontrol-load-more-link" === e ? _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_LINK_CLASS)[0] : "oj-pagingcontrol-load-more-range" === e ? _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CLASS)[0] : "oj-pagingcontrol-load-more-range-current" === e ? _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS)[0] : "oj-pagingcontrol-load-more-range-max" === e ? _ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS)[0] : "oj-pagingcontrol-load-more-max-rows" === e && (_ = this._getPagingControlContainer().find("." + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS)[0]);
            return void 0 === _ && (_ = null), _
        },
        getSubIdByNode: function(t) {
            return a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS) || t && "OJ-INPUT-TEXT" === t.tagName ? {
                subId: "oj-pagingcontrol-nav-input"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS) ? {
                subId: "oj-pagingcontrol-nav-input-max"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS) ? {
                subId: "oj-pagingcontrol-nav-input-summary"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS) ? {
                subId: "oj-pagingcontrol-nav-input-summary-current"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS) ? {
                subId: "oj-pagingcontrol-nav-input-summary-max"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS) ? {
                subId: "oj-pagingcontrol-nav-first"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS) ? {
                subId: "oj-pagingcontrol-nav-next"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS) ? {
                subId: "oj-pagingcontrol-nav-previous"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS) ? {
                subId: "oj-pagingcontrol-nav-last"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_CLASS) ? {
                subId: "oj-pagingcontrol-nav-page",
                index: a(t).attr(this._DATA_ATTR_PAGE_NUM)
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_LINK_CLASS) ? {
                subId: "oj-pagingcontrol-load-more-link"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CLASS) ? {
                subId: "oj-pagingcontrol-load-more-range"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS) ? {
                subId: "oj-pagingcontrol-load-more-range-current"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS) ? {
                subId: "oj-pagingcontrol-load-more-range-max"
            } : a(t).hasClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS) ? {
                subId: "oj-pagingcontrol-load-more-max-rows"
            } : null
        },
        _ComponentCreate: function() {
            this._super(), this._draw(), this._on(this._events)
        },
        _AfterCreate: function() {
            this._super(), this._isInitFetch = !0
        },
        _SetupResources: function() {
            this._super(), this._registerSwipeHandler(), this._registerResizeListener(this._getPagingControlContainer()), this._registerDataSourceEventListeners(), this._isInitFetch ? (this._setInitialPage(), this._isInitFetch = !1) : this._refresh(), this._componentDestroyed = !1
        },
        _ReleaseResources: function() {
            if (this._super(), this._unregisterDataSourceEventListeners(), this._unregisterResizeListener(), this._unregisterSwipeHandler(), this._busyStateResolvers) {
                for (var t = this._busyStateResolvers.pop(); t;) t(), t = this._busyStateResolvers.pop();
                this._busyStateResolvers = null
            }
            this._componentDestroyed = !0
        },
        _addComponentBusyState: function(t) {
            var e = s.getContext(this.element[0]).getBusyContext(),
                _ = {
                    description: "The component identified by '" + this.element.attr("id") + "' " + t
                },
                n = e.addBusyState(_);
            return this._busyStateResolvers || (this._busyStateResolvers = []), this._busyStateResolvers.push(n), n
        },
        _removeComponentBusyState: function(t) {
            if (this._busyStateResolvers) {
                var e = this._busyStateResolvers.indexOf(t);
                e >= 0 && (this._busyStateResolvers.splice(e, 1), t())
            }
        },
        _destroy: function() {
            if (this._unregisterDataSourceEventListeners(), this._unregisterSwipeHandler(), this._busyStateResolvers) {
                for (var t = this._busyStateResolvers.pop(); t;) t(), t = this._busyStateResolvers.pop();
                this._busyStateResolvers = null
            }
            this._componentDestroyed = !0
        },
        _draw: function() {
            var t = this.options;
            this.element.addClass(this._CSS_CLASSES._PAGING_CONTROL_CLASS), this.element.addClass(this._MARKER_STYLE_CLASSES._WIDGET), this._createAccPageLabel(), this._createPagingControlAccLabel(), this._createPagingControlContent(), this._mode = t.mode, t.mode === this._MODE._LOAD_MORE ? (this._createPagingControlLoadMore(), this._createPagingControlLoadMoreLink(), this._createPagingControlLoadMoreRange()) : this._createPagingControlNav()
        },
        _events: {
            "mouseup .oj-pagingcontrol-loadmore-link": function(t) {
                this.loadNext(), a(t.target).data("_mouseup", !0), t.preventDefault()
            },
            "click .oj-pagingcontrol-loadmore-link": function(t) {
                a(t.target).data("_mouseup") ? a(t.target).data("_mouseup", !1) : this.loadNext(), t.preventDefault()
            },
            "click .oj-pagingcontrol-nav-dot": function(t) {
                this._invokeLoadPageDataFromEvent(t)
            },
            "click .oj-pagingcontrol-nav-page": function(t) {
                this._invokeLoadPageDataFromEvent(t)
            },
            "click .oj-pagingcontrol-nav-first": function(t) {
                a(t.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED) || this.firstPage(), t.preventDefault()
            },
            "click .oj-pagingcontrol-nav-previous": function(t) {
                a(t.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED) || this.previousPage(), t.preventDefault()
            },
            "click .oj-pagingcontrol-nav-next": function(t) {
                a(t.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED) || this.nextPage(), t.preventDefault()
            },
            "click .oj-pagingcontrol-nav-last": function(t) {
                a(t.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED) || this.lastPage(), t.preventDefault()
            },
            "keypress .oj-pagingcontrol-nav-input": function(t) {
                13 === t.which && t.preventDefault()
            },
            "mousedown .oj-pagingcontrol-nav-first": function(t) {
                this._setActive(t)
            },
            "mousedown .oj-pagingcontrol-nav-previous": function(t) {
                this._setActive(t)
            },
            "mousedown .oj-pagingcontrol-nav-next": function(t) {
                this._setActive(t)
            },
            "mousedown .oj-pagingcontrol-nav-last": function(t) {
                this._setActive(t)
            },
            "mouseup .oj-pagingcontrol-nav-first": function(t) {
                this._removeActive(t)
            },
            "mouseup .oj-pagingcontrol-nav-previous": function(t) {
                this._removeActive(t)
            },
            "mouseup .oj-pagingcontrol-nav-next": function(t) {
                this._removeActive(t)
            },
            "mouseup .oj-pagingcontrol-nav-last": function(t) {
                this._removeActive(t)
            },
            "mouseleave .oj-pagingcontrol-nav-first": function(t) {
                this._removeActive(t)
            },
            "mouseleave .oj-pagingcontrol-nav-previous": function(t) {
                this._removeActive(t)
            },
            "mouseleave .oj-pagingcontrol-nav-next": function(t) {
                this._removeActive(t)
            },
            "mouseleave .oj-pagingcontrol-nav-last": function(t) {
                this._removeActive(t)
            }
        },
        _refresh: function() {
            this._data !== this.options.data && (this._clearCachedDataMetadata(), this._setInitialPage());
            var t = 0,
                e = 0;
            null != this._data && (e = this._data.getStartItemIndex()), null != this._data && 0 !== this._data.totalSize() && this._data.getEndItemIndex() >= 0 && (t = this._data.getEndItemIndex() - e + 1), this._mode = this.options.mode, this.options.mode === this._MODE._LOAD_MORE ? this._refreshPagingControlLoadMore(t, e) : this._refreshPagingControlNav(t, e)
        },
        _setOption: function(t, e) {
            if (this._superApply(arguments), this._invokeDataPage(0, !0), this.options.mode !== this._MODE._LOAD_MORE && "pageOptions" === t) {
                var _ = this._getPagingControlContent();
                null != _ && (this._unregisterChildStateListeners(_), this._unregisterSwipeHandler(), _.empty()), this._clearCachedDomPagingControlNav(), this._createPagingControlNav(), this._registerSwipeHandler()
            }
            this._queueRefresh()
        },
        _clearCachedDataMetadata: function() {
            null != this._data && this._unregisterDataSourceEventListeners(), this._data = null
        },
        _clearCachedDomLoadMore: function() {
            this._cachedDomPagingControlLoadMore = null, this._cachedDomPagingControlLoadMoreLink = null, this._cachedDomPagingControlLoadMoreRange = null
        },
        _clearCachedDomPagingControlNav: function() {
            this._cachedDomPagingControlNav = null, this._cachedDomPagingControlNavInput = null, this._cachedDomPagingControlNavInputSummary = null
        },
        _invokeLoadPageDataFromEvent: function(t) {
            if (!a(t.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED)) {
                var e = a(t.currentTarget).attr("data-oj-pagenum");
                this.page(e)
            }
            t.preventDefault()
        },
        _setActive: function(t) {
            a(t.currentTarget).hasClass(this._MARKER_STYLE_CLASSES._DISABLED) || a(t.target).addClass(this._MARKER_STYLE_CLASSES._ACTIVE), t.preventDefault()
        },
        _removeActive: function(t) {
            a(t.target).removeClass(this._MARKER_STYLE_CLASSES._ACTIVE), t.preventDefault()
        },
        _createNavArrow: function(t, e, _, n, i, s) {
            var o = a(document.createElement("a"));
            o.attr("role", "button"), o.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_CLASS), o.addClass(t), o.addClass(e), o.addClass(this._CSS_CLASSES._WIDGET_ICON_CLASS), o.addClass(this._MARKER_STYLE_CLASSES._CLICKABLE_ICON), o.addClass(this._MARKER_STYLE_CLASSES._DISABLED), o.attr("aria-disabled", "true");
            var r = this.getTranslatedString(_);
            this._AddHoverable(o), this._focusable({
                element: o,
                applyHighlight: !0
            }), o.attr("title", r), o.attr(this._TAB_INDEX, "0"), o.attr("href", "#"), o[0].oncontextmenu = function() {
                return !1
            };
            var S = this.getTranslatedString(n);
            o.attr("aria-label", S);
            var l = this._createAccLabelSpan(S, i);
            return o.append(l), s && o.css("display", "block"), o
        },
        _disableNavArrow: function(t, e) {
            e ? (t.addClass(this._MARKER_STYLE_CLASSES._DISABLED), t.removeClass(this._MARKER_STYLE_CLASSES._ENABLED), t.removeClass(this._MARKER_STYLE_CLASSES._FOCUS_HIGHLIGHT), t.removeClass(this._MARKER_STYLE_CLASSES._FOCUS), t.attr("aria-disabled", "true"), t.attr("tabindex", "-1")) : (t.addClass(this._MARKER_STYLE_CLASSES._ENABLED), t.removeClass(this._MARKER_STYLE_CLASSES._DISABLED), t.removeAttr("aria-disabled"), t.attr(this._TAB_INDEX, "0"))
        },
        _getCurrentPage: function() {
            var t = this._getData(),
                e = 0;
            return null != t && (e = t.getPage()), e
        },
        _getData: function() {
            return this._data || null == this.options.data || (this._data = this.options.data, this._dataMetadata = this.options.data, this._registerDataSourceEventListeners()), this._data
        },
        _getItemRange: function(t, e) {
            var _ = e >= 0 ? e : 0,
                n = a(document.createElement("span")),
                i = a(document.createElement("span"));
            this.options.mode === this._MODE._LOAD_MORE ? i.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CURRENT_CLASS) : i.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CURRENT_CLASS), n.append(i);
            var s, o, r = this._getData();
            if (null !== this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_NO_TOTAL, {
                    pageTo: o,
                    pageFrom: 0
                })) {
                if (null != r && null != r.totalSize() && null != t) {
                    _ = (o = parseInt(e, 10) + parseInt(t, 10)) > 0 ? _ + 1 : 0;
                    var S = !0;
                    if (-1 !== r.totalSize()) {
                        if (_ === (o = o > r.totalSize() ? r.totalSize() : o)) S = !1;
                        else if (_ > o) return n;
                        var l;
                        S ? (l = "atLeast" === r.totalSizeConfidence() ? this._BUNDLE_KEY._FULL_MSG_ITEM_RANGE_ATLEAST : "estimate" === r.totalSizeConfidence() ? this._BUNDLE_KEY._FULL_MSG_ITEM_RANGE_APPROX : this._BUNDLE_KEY._FULL_MSG_ITEM_RANGE, s = this.getTranslatedString(l, {
                            pageFrom: _,
                            pageTo: o,
                            pageMax: r.totalSize()
                        })) : (l = "atLeast" === r.totalSizeConfidence() ? this._BUNDLE_KEY._FULL_MSG_ITEM_ATLEAST : "estimate" === r.totalSizeConfidence() ? this._BUNDLE_KEY._FULL_MSG_ITEM_APPROX : this._BUNDLE_KEY._FULL_MSG_ITEM, s = this.getTranslatedString(l, {
                            pageTo: o,
                            pageMax: r.totalSize()
                        }))
                    } else s = 0 === t ? this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_NO_TOTAL, {
                        pageTo: 0
                    }) : this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_NO_TOTAL, {
                        pageFrom: _,
                        pageTo: o
                    })
                }
            } else if (null != r && null != r.totalSize() && null != t) {
                var g, A;
                if (_ = (o = parseInt(e, 10) + parseInt(t, 10)) > 0 ? _ + 1 : 0, -1 !== r.totalSize()) {
                    if (_ === (o = o > r.totalSize() ? r.totalSize() : o)) s = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_CURRENT_SINGLE, {
                        pageFrom: _
                    });
                    else {
                        if (_ > o) return n;
                        s = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_CURRENT, {
                            pageFrom: _,
                            pageTo: o
                        })
                    }
                    var C = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_OF),
                        h = null;
                    "atLeast" === r.totalSizeConfidence() ? h = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_ATLEAST) : "estimate" === r.totalSizeConfidence() && (h = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_APPROX));
                    var L = a(document.createElement("span"));
                    null == h ? L.text(" " + C + " ") : L.text(" " + h + " "), n.append(L);
                    var u = a(document.createElement("span"));
                    this.options.mode === this._MODE._LOAD_MORE ? u.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_MAX_CLASS) : u.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_MAX_CLASS), u.text(r.totalSize()), n.append(u), g = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_ITEMS), (A = a(document.createElement("span"))).text(" " + g), n.append(A)
                } else s = 0 === t ? this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_CURRENT_SINGLE, {
                    pageFrom: 0
                }) : this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_CURRENT, {
                    pageFrom: _,
                    pageTo: o
                }), g = this.getTranslatedString(this._BUNDLE_KEY._MSG_ITEM_RANGE_ITEMS), (A = a(document.createElement("span"))).text(" " + g), n.append(A)
            }
            return i.text(s), n
        },
        _getMaxPageLinks: function() {
            var t = this.options.pageOptions.maxPageLinks;
            return this.options.pageOptions.type === this._TYPE._DOTS ? t = Number.MAX_VALUE : t || (t = this._PAGE_OPTION_DEFAULT_MAX_PAGE_LINKS), t
        },
        _getMaxPageVal: function(t) {
            var e = 0;
            if (this._getTotalPages() > 0 && this._isTotalSizeConfidenceActual()) e = this._getTotalPages();
            else if (t > 0) {
                var _ = this._getData();
                e = null == _ || "atLeast" !== _.totalSizeConfidence() && "estimate" !== _.totalSizeConfidence() ? this._getCurrentPage() + 2 : this._getTotalPages() + 1
            } else e = this._getCurrentPage() + 1;
            return e
        },
        _getRejectPromise: function() {
            return Promise.reject()
        },
        _getTotalPages: function() {
            var t = this._getData(),
                e = 0;
            return null != t && (e = t.getPageCount()), e = e >= -1 ? e : 0
        },
        _handleDataFetchEnd: function(t) {
            this._handleFocusAfterFetch(), this._queueRefresh()
        },
        _handleFocusAfterFetch: function() {
            var t = a(document.activeElement),
                e = this;
            if (t.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_CLASS)) {
                var _ = parseInt(t.attr("data-oj-pagenum"), 10);
                setTimeout(function() {
                    if (_ >= 0) {
                        var t = _ + 1,
                            n = _ - 1,
                            a = e._getPagingControlContent().find("a[data-oj-pagenum=" + t + "]");
                        if (null != a && a.length > 0) a.focus();
                        else {
                            var i = e._getPagingControlContent().find("a[data-oj-pagenum=" + n + "]");
                            null != i && i.length > 0 && i.focus()
                        }
                    }
                    _ = null, e = null
                }, 100)
            } else t.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS) ? setTimeout(function() {
                e._getPagingControlContent().find("." + e._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS).focus(), e = null
            }, 100) : t.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS) ? setTimeout(function() {
                var t = e._getPagingControlContent().find("." + e._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS);
                t.hasClass(e._MARKER_STYLE_CLASSES._DISABLED) ? e._getPagingControlContent().find("." + e._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS).focus() : t.focus(), e = null
            }, 100) : t.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS) ? setTimeout(function() {
                var t = e._getPagingControlContent().find("." + e._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS);
                t.hasClass(e._MARKER_STYLE_CLASSES._DISABLED) ? e._getPagingControlContent().find("." + e._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS).focus() : t.focus(), e = null
            }, 100) : t.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS) ? setTimeout(function() {
                e._getPagingControlContent().find("." + e._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS).focus(), e = null
            }, 100) : t.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS) ? setTimeout(function() {
                e._getPagingControlContent().find("." + e._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS).focus(), e = null
            }, 100) : t.hasClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_DOT_CLASS) && setTimeout(function() {
                var t, _ = e._getPagingControlContent().find("." + e._CSS_CLASSES._PAGING_CONTROL_NAV_DOT_CLASS);
                _.each(function(e, _) {
                    "div" === _.localName && (t = e)
                }), null != t && (t === _.length - 1 ? _[Math.max(t - 1, 0)] : _[t + 1]).focus(), e = null
            }, 100)
        },
        _handleDataPage: function(t) {
            var e = null != t.detail ? t.detail : t;
            e.page !== e.previousPage && (this._handleFocusAfterFetch(), this._queueRefresh())
        },
        _handleDataReset: function(t) {
            this._invokeDataPage(0, !1)
        },
        _handleDataRefresh: function(t) {
            this._currentStartIndex = 0, this._queueRefresh()
        },
        _handleDataSort: function(t) {
            this.options.mode === this._MODE._LOAD_MORE && this._handleDataReset(t)
        },
        _handleDataRowAdd: function(t) {
            if (this._isOperationOnCurrentPage(t)) return this.options.mode === this._MODE._PAGE ? void this._invokeDataPage(this._getCurrentPage(), !0) : void this._invokeDataFetchCurrent();
            this._queueRefresh()
        },
        _handleDataRowRemove: function(t) {
            if (this.options.mode === this._MODE._PAGE) {
                if (this._getTotalPages() > 0 && this._getCurrentPage() > this._getTotalPages() - 1) return void this._invokeDataPage(this._getTotalPages() - 1, !0);
                if (this._isOperationOnCurrentPage(t)) return void this._invokeDataPage(this._getCurrentPage(), !0)
            } else if (this._isOperationOnCurrentPage(t)) return void this._invokeDataFetchCurrent();
            this._queueRefresh()
        },
        _handlePageChange: function(t, e) {
            var _ = this._IsCustomElement();
            if (_ || "value" === e.option) {
                var n = _ ? t.detail.value : e.value;
                n !== this._getCurrentPage() + 1 && !isNaN(n) && n > 0 && (n = Math.round(n), this.page(n - 1))
            }
        },
        _invokeUserDataPageFetch: function(t) {
            return this._userDataPageFetching ? Promise.reject("Another user page fetch is ongoing") : (this._userDataPageFetching = !0, this._invokeDataPage(t, !1))
        },
        _invokeDataPage: function(t, e) {
            try {
                t = parseInt(t, 10)
            } catch (t) {
                return this._userDataPageFetching = !1, Promise.reject(t)
            }
            this._currentStartIndex = 0;
            var _ = this;
            return setTimeout(function() {
                _._resetPagingControlNavInput()
            }, 0), e ? (this._stopFetchAction = !1, this._queuePageFetch(t), Promise.resolve()) : this._invokeDataSetPage(t)
        },
        _invokeDataSetPage: function(t) {
            var e = this._getData(),
                _ = this;
            return new Promise(function(n, a) {
                if (null != e) {
                    var i = _._addComponentBusyState("is setting page.");
                    e.setPage(t, {
                        pageSize: _.options.pageSize
                    }).then(function() {
                        _._getPagingControlAccPageLabel().childNodes[0].nodeValue = _.getTranslatedString(_._BUNDLE_KEY._LABEL_ACC_PAGE_NUMBER, {
                            pageNum: t + 1
                        }), _._removeComponentBusyState(i), _._userDataPageFetching = !1, _ = null, i = null, n(null)
                    }, function(t) {
                        _._removeComponentBusyState(i), _._userDataPageFetching = !1, _ = null, i = null, a(t)
                    }), e = null
                } else _._userDataPageFetching = !1, _ = null, n(null)
            })
        },
        _invokeDataFetchNext: function() {
            var t = this.options.pageSize;
            return this._currentStartIndex ? this._currentStartIndex += t : this._currentStartIndex = t, this._invokeDataFetch({
                startIndex: this._currentStartIndex,
                pageSize: t
            })
        },
        _invokeDataFetch: function(t) {
            var e = this._getData();
            if (!this._isTotalSizeConfidenceActual() || e.totalSize() > this._currentStartIndex && this._isTotalSizeConfidenceActual()) {
                var _ = this;
                return null != e && n.DataProviderFeatureChecker.isDataProvider(e) ? new Promise(function(n, a) {
                    var i = _._addComponentBusyState("is setting page."),
                        s = t.pageSize + t.startIndex;
                    e.setPage(0, {
                        pageSize: s
                    }).then(function() {
                        _._removeComponentBusyState(i), _ = null, i = null, n(null)
                    }, function(t) {
                        _._removeComponentBusyState(i), _ = null, i = null, a(t)
                    }), e = null
                }) : new Promise(function(n, a) {
                    var i = _._addComponentBusyState("is fetching data.");
                    e.fetch(t).then(function(t) {
                        _._removeComponentBusyState(i), _ = null, i = null, n(t)
                    }, function(t) {
                        _._removeComponentBusyState(i), _ = null, i = null, a(t)
                    }), e = null
                })
            }
            return Promise.resolve()
        },
        _invokeDataFetchCurrent: function() {
            var t = this.options.pageSize;
            return this._invokeDataFetch({
                startIndex: 0,
                pageSize: this._currentStartIndex + t
            })
        },
        _isOperationOnCurrentPage: function(t) {
            if (null == t) return !1;
            var e = this._getData(),
                _ = e.getStartItemIndex();
            this.options.mode === this._MODE._LOAD_MORE && (_ = 0);
            var n, a = e.getEndItemIndex();
            if (null != t.index) {
                if ((n = t.index) >= _ && n <= a) return !0
            } else if (null != t.indexes) {
                var i;
                for (i = 0; i < t.indexes.length; i++)
                    if ((n = t.indexes[i]) >= _ && n <= a) return !0
            }
            return !1
        },
        _isTotalSizeConfidenceActual: function() {
            var t = this._getData();
            return null != t && "actual" === t.totalSizeConfidence()
        },
        _queuePageFetch: function(t) {
            var e = this;
            this._pendingPageFetch || (this._pageFetchCount = 0, this._pendingPageFetch = Promise.resolve()), this._pageFetchCount += 1, this._pageFetchLatestPage = t, this._pendingPageFetch = this._pendingPageFetch.then(function() {
                e._pageFetchCount -= 1, e._stopFetchAction ? e._stopFetchAction = !1 : 0 !== e._pageFetchCount || e._componentDestroyed || (e._pendingPageFetch = null, e._invokeDataSetPage(e._pageFetchLatestPage).catch(t => e._queueFetchError(t)))
            }, t => e._queueFetchError(t))
        },
        _queueFetchError: function(t) {
            this._pageFetchCount -= 1, this._pageFetchCount <= 0 && (this._pendingPageFetch = null, r.error(t), this._setComponentReady())
        },
        _queueRefresh: function() {
            var t = this;
            this._pendingRefreshes || (this._refreshCount = 0, this._pendingRefreshes = Promise.resolve(), this._setComponentNotReady()), this._refreshCount += 1, this._pendingRefreshes = this._pendingRefreshes.then(function() {
                t._refreshCount -= 1, 0 === t._refreshCount && (t._pendingRefreshes = null, t._componentDestroyed || (t._refresh(), t._trigger("ready")), t._setComponentReady(), t = null)
            }, function(e) {
                t._refreshCount -= 1, 0 === t._refreshCount && (t._pendingRefreshes = null, r.error(e), t._setComponentReady(), t = null)
            })
        },
        _refreshPagingControlLoadMore: function(t, e) {
            var _ = this._getData(),
                n = this._getPagingControlLoadMore(),
                a = e + t,
                i = !(null != _ && (a === _.totalSize() && this._isTotalSizeConfidenceActual() || 0 === _.totalSize()));
            if (!n || i) {
                var s = this._getPagingControlContent();
                null != s && s.empty(), this._clearCachedDomLoadMore(), n = this._createPagingControlLoadMore(), a = -1, null != t && (a = e + t), t > 0 && (a < 0 || a < this.options.loadMoreOptions.maxCount ? (this._createPagingControlLoadMoreLink(), this._createPagingControlLoadMoreRange(t, e)) : this._createPagingControlLoadMoreMaxRows())
            }
            i || n.css("display", "none")
        },
        _refreshPagingControlNav: function(t, e) {
            var _ = this.options.overflow;
            if (this._refreshPagingControlNavMaxPageVal(t, e), this._refreshPagingControlNavLabel(), this._refreshPagingControlNavInput(), this._refreshPagingControlNavSummaryLabel(t, e), this._refreshPagingControlNavPages(t, e), this._refreshPagingControlNavArrows(t, e), "fit" === _) {
                var n = this.element.width(),
                    a = this._getPagingControlNavArrowSection(),
                    i = this._getPagingControlNavInputSection(),
                    s = this._getPagingControlNavPageLinks(),
                    o = this._getPagingControlNavInputSummary(),
                    r = null != a ? a[0].offsetWidth : 0,
                    S = null != i ? i[0].offsetWidth : 0,
                    l = null != s ? s.width() : 0,
                    g = null != o ? o.width() : 0,
                    A = r + S + g;
                A > n ? (null != s && s.css("display", "none"), A - l > n && null != o && o.css("display", "none"), A - l - g > n && null != a && a.css("display", "none")) : A > 0 && (null != s && s.css("display", ""), null != o && o.css("display", ""), null != a && a.css("display", ""))
            }
        },
        _refreshPagingControlNavArrows: function(t, e) {
            var _ = this.options.pageSize,
                n = this._getPagingControlNavArrowSection(),
                i = n.children("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS);
            if (i && i.length > 0) {
                i = a(i[0]);
                var s = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_FIRST_PAGE);
                i.attr("title", s), this._disableNavArrow(i, 0 === this._getCurrentPage())
            }
            var o = n.children("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS);
            if (o && o.length > 0) {
                o = a(o[0]);
                var r = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_PREVIOUS_PAGE);
                o.attr("title", r), this._disableNavArrow(o, 0 === this._getCurrentPage())
            }
            var S = n.children("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS);
            if (S && S.length > 0) {
                S = a(S[0]);
                var l = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_LAST_PAGE);
                S.attr("title", l), this._disableNavArrow(S, this._getCurrentPage() === this._getTotalPages() - 1 || this._getTotalPages() <= 0 || !this._isTotalSizeConfidenceActual())
            }
            var g = n.children("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS);
            if (g && g.length > 0) {
                g = a(g[0]);
                var A = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_NEXT_PAGE);
                g.attr("title", A), this._disableNavArrow(g, this._getCurrentPage() === this._getTotalPages() - 1 && this._isTotalSizeConfidenceActual() || 0 === this._getTotalPages() || this._getTotalPages() < 0 && 0 === t || this._getTotalPages() < 0 && t < _)
            }
        },
        _refreshPagingControlNavPages: function(t, e) {
            var _ = this._getPagingControlNav().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_SECTION_CLASS);
            null != _ && _.length > 0 && (_ = a(_.get(0)), this._unregisterChildStateListeners(_), _.empty(), this._createPagingControlNavPages(_, this._getMaxPageLinks(), t, e))
        },
        _refreshPagingControlNavLabel: function() {
            var t = this._getPagingControlNavInputSection();
            if (null != t) {
                var e = t.children("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_LABEL_CLASS);
                if (null != e && e.length > 0) {
                    e = a(e[0]);
                    var _ = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE);
                    e.text(_)
                }
            }
        },
        _refreshPagingControlNavInput: function() {
            var t = this._getPagingControlNavInput();
            if (null != t) {
                var e = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_INPUT_PAGE);
                t.attr("title", e), this._IsCustomElement() ? t.get(0).setAttribute("help.instruction", e) : t.ojInputText("option", "title", e)
            }
        },
        _refreshPagingControlNavSummaryLabel: function(t, e) {
            var _ = this._getPagingControlNav().children("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS);
            if (null != _ && _.length > 0) {
                var n = this._getItemRange(t, e);
                (_ = a(_.get(0))).empty(), n.text().length > 0 && (_.append("("), _.append(n), _.append(")"))
            }
        },
        _setReadOnlyPageInput: function(t) {
            this._IsCustomElement() ? t[0].readonly = !0 : t.ojInputText("option", "readOnly", !0);
            var e = t[0].getElementsByClassName("oj-text-field-readonly");
            e.length > 0 && e[0].setAttribute("aria-labelledby", t[0].id + "|label")
        },
        _refreshPagingControlNavMaxPageVal: function(t) {
            var e, _, n = this._getMaxPageVal(t),
                i = this._getPagingControlNav().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS);
            if (null != i && i.length > 0) i = a(i.get(0)), this._getTotalPages() > 0 && this._isTotalSizeConfidenceActual() ? (e = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE_MAX, {
                pageMax: n
            }), i.text(e)) : i.empty();
            else {
                var s = this._getPagingControlNavInputSection();
                null != s && this._getTotalPages() > 0 && this._isTotalSizeConfidenceActual() && n >= this._getCurrentPage() + 1 && ((i = a(document.createElement("span"))).addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS), i.addClass("oj-label-inline"), s.append(i), e = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE_MAX, {
                    pageMax: n
                }), i.text(e))
            }
            var o = this._IsCustomElement();
            if (null != (_ = o ? this._getPagingControlNavInput() : this._getPagingControlNav().find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS)) && _.length > 0) {
                var r;
                _ = a(_.get(0));
                var S = [new l({
                    min: 1,
                    max: n
                })];
                o ? ((_ = this._getPagingControlNavInput())[0].validators = S, null != (r = _.messagesShown) && 0 !== r.length || this._resetPagingControlNavInput(), 1 === n ? this._setReadOnlyPageInput(_) : _[0].readonly = !1) : (_.ojInputText(), _.ojInputText("option", "validators", S), null != (r = _.ojInputText("option", "messagesShown")) && 0 !== r.length || this._resetPagingControlNavInput(), 1 === n ? this._setReadOnlyPageInput(_) : _.ojInputText("option", "readOnly", !1))
            }
        },
        _registerDataSourceEventListeners: function() {
            var t = this._getData();
            if (null != t && n.DataProviderFeatureChecker.isDataProvider(t)) this._unregisterDataSourceEventListeners(), this._dataSourceEventHandlers = [], this._dataSourceEventHandlers.push({
                eventType: n.PagingModel.EventType.PAGE,
                eventHandler: this._handleDataPage.bind(this)
            }), this._dataSourceEventHandlers.push({
                eventType: n.PagingModel.EventType.PAGECOUNT,
                eventHandler: this._handleDataRefresh.bind(this)
            }), this._dataSourceEventHandlers.push({
                eventType: "totalsize",
                eventHandler: this._handleDataRefresh.bind(this)
            }), this._dataSourceEventHandlers.forEach(function(e) {
                t.addEventListener(e.eventType, e.eventHandler)
            });
            else if (null != t) {
                this._unregisterDataSourceEventListeners(), this._dataSourceEventHandlers = [], this._dataSourceEventHandlers.push({
                    eventType: n.PagingModel.EventType.PAGE,
                    eventHandler: this._handleDataPage.bind(this)
                }), this._dataSourceEventHandlers.push({
                    eventType: n.PagingModel.EventType.PAGECOUNT,
                    eventHandler: this._handleDataRefresh.bind(this)
                }), this._dataSourceEventHandlers.push({
                    eventType: this._PAGING_TABLE_DATA_SOURCE_EVENT_TYPE._ADD,
                    eventHandler: this._handleDataRowAdd.bind(this)
                }), this._dataSourceEventHandlers.push({
                    eventType: this._PAGING_TABLE_DATA_SOURCE_EVENT_TYPE._REMOVE,
                    eventHandler: this._handleDataRowRemove.bind(this)
                }), this._dataSourceEventHandlers.push({
                    eventType: this._PAGING_TABLE_DATA_SOURCE_EVENT_TYPE._RESET,
                    eventHandler: this._handleDataReset.bind(this)
                }), this._dataSourceEventHandlers.push({
                    eventType: this._PAGING_TABLE_DATA_SOURCE_EVENT_TYPE._REFRESH,
                    eventHandler: this._handleDataRefresh.bind(this)
                }), this._dataSourceEventHandlers.push({
                    eventType: this._PAGING_TABLE_DATA_SOURCE_EVENT_TYPE._SYNC,
                    eventHandler: this._handleDataFetchEnd.bind(this)
                }), this._dataSourceEventHandlers.push({
                    eventType: this._PAGING_TABLE_DATA_SOURCE_EVENT_TYPE._SORT,
                    eventHandler: this._handleDataSort.bind(this)
                });
                for (var e = 0; e < this._dataSourceEventHandlers.length; e++) {
                    var _ = t.on(this._dataSourceEventHandlers[e].eventType, this._dataSourceEventHandlers[e].eventHandler);
                    _ && (this._dataSourceEventHandlers[e].eventHandler = _)
                }
            }
        },
        _registerResizeListener: function(t) {
            if (!this._resizeListener) {
                var e = this;
                this._resizeListener = function(t, _) {
                    e._queueRefresh()
                }
            }
            this._resizeListenerElement || (i.addResizeListener(t[0], this._resizeListener, 50), this._resizeListenerElement = t)
        },
        _registerSwipeHandler: function() {
            if (i.isTouchSupported() && this.options.mode === this._MODE._PAGE) {
                var t = this._getPagingControlNav();
                if (null != t) {
                    var e, _ = this;
                    if ("vertical" === this.options.pageOptions.orientation ? (e = o.DIRECTION_VERTICAL, this._hammerNextPageDir = "swipeup", this._hammerPrevPageDir = "swipedown") : (e = o.DIRECTION_HORIZONTAL, this._hammerNextPageDir = "swipeleft", this._hammerPrevPageDir = "swiperight"), null == this._hammerManager) {
                        var n = {
                            recognizers: [
                                [o.Swipe, {
                                    direction: e
                                }]
                            ]
                        };
                        this._hammerManager = new o.Manager(t[0], n)
                    }
                    t.on(this._hammerNextPageDir, function(t) {
                        t.preventDefault(), _.nextPage()
                    }), t.on(this._hammerPrevPageDir, function(t) {
                        t.preventDefault(), _.previousPage()
                    })
                }
            }
        },
        _resetPagingControlNavInput: function() {
            var t = this._getPagingControlNavInput(),
                e = this._IsCustomElement();
            if (null != t && (!e && t.hasClass("oj-component-initnode") || e)) try {
                e ? t.get(0).value = this._getCurrentPage() + 1 : t.ojInputText("option", "value", this._getCurrentPage() + 1)
            } catch (t) {}
        },
        _setComponentNotReady: function() {
            this._readyResolveFunc || (this._readyResolveFunc = this._addComponentBusyState("is being loaded."))
        },
        _setComponentReady: function() {
            this._readyResolveFunc && (this._removeComponentBusyState(this._readyResolveFunc), this._readyResolveFunc = null)
        },
        _setInitialPage: function() {
            var t = this._getCurrentPage();
            t > 0 ? this._invokeDataPage(t, !0) : this._invokeDataPage(0, !0)
        },
        _unregisterDataSourceEventListeners: function() {
            var t, e = this._getData();
            if (null != e && n.DataProviderFeatureChecker.isDataProvider(e) && null != this._dataSourceEventHandlers)
                for (t = 0; t < this._dataSourceEventHandlers.length; t++) "pageCount" === this._dataSourceEventHandlers[t].eventType ? e.removeEventListener("pagecount", this._dataSourceEventHandlers[t].eventHandler) : e.removeEventListener(this._dataSourceEventHandlers[t].eventType, this._dataSourceEventHandlers[t].eventHandler);
            else if (null != this._dataSourceEventHandlers && null != e)
                for (t = 0; t < this._dataSourceEventHandlers.length; t++) e.off(this._dataSourceEventHandlers[t].eventType, this._dataSourceEventHandlers[t].eventHandler)
        },
        _unregisterChildStateListeners: function(t) {
            var e = this;
            t.find("*").each(function() {
                e._UnregisterChildNode(this)
            }), e = null
        },
        _unregisterResizeListener: function() {
            null != this._resizeListenerElement && (i.removeResizeListener(this._resizeListenerElement, this._resizeListener), this._resizeListenerElement = null)
        },
        _unregisterSwipeHandler: function() {
            if (i.isTouchSupported()) {
                var t = this._getPagingControlNav();
                null != t && (null != this._hammerNextPageDir && (t.off(this._hammerNextPageDir), this._hammerNextPageDir = null), null != this._hammerPrevPageDir && (t.off(this._hammerPrevPageDir), this._hammerPrevPageDir = null), null != this._hammerManager && (this._hammerManager.destroy(), this._hammerManager = null))
            }
        },
        _createAccLabelSpan: function(t, e) {
            var _ = a(document.createElement("span"));
            return _.addClass(e), _.addClass(this._CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS), _.text(t), _
        },
        _createAccPageLabel: function() {
            var t = this._getPagingControlContainer(),
                e = document.createElement("span"),
                _ = document.createTextNode(this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_PAGE_NUMBER, {
                    pageNum: this._getCurrentPage()
                }));
            e.appendChild(_), e.setAttribute("id", this.element.attr("id") + "_acc_page_label"), e.setAttribute("class", this._CSS_CLASSES._PAGING_CONTROL_ACC_PAGE_LABEL_CLASS), e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "status"), e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.position = "absolute", e.style.whiteSpace = "nowrap", e.style.clip = "rect(1px, 1px, 1px, 1px)", t.append(e)
        },
        _createPagingControlAccLabel: function() {
            var t = this._getPagingControlContainer(),
                e = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_PAGING);
            e = this.element.attr("id") + e;
            var _ = this._createAccLabelSpan(e, this._CSS_CLASSES._PAGING_CONTROL_ACC_LABEL_CLASS),
                n = this.element.attr("id") + "_oj_pgCtrl_acc_label";
            return _.attr("id", n), t.append(_), _
        },
        _createPagingControlAccNavPageLabel: function() {
            var t = this.getTranslatedString(this._BUNDLE_KEY._LABEL_ACC_NAV_PAGE);
            return this._createAccLabelSpan(t, this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS)
        },
        _createPagingControlContent: function() {
            var t = this._getPagingControlContainer(),
                e = a(document.createElement("div"));
            e.addClass(this._CSS_CLASSES._PAGING_CONTROL_CONTENT_CLASS);
            var _ = this._getPagingControlAccLabel().attr("id");
            return e.attr("role", "region"), e.attr("aria-labelledby", _), t.append(e), e
        },
        _createPagingControlLoadMore: function() {
            var t = this._getPagingControlContent(),
                e = a(document.createElement("div"));
            return e.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_CLASS), t.append(e), e
        },
        _createPagingControlLoadMoreLink: function() {
            var t = this._getPagingControlLoadMore(),
                e = a(document.createElement("a"));
            e.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_LINK_CLASS);
            var _ = this.getTranslatedString(this._BUNDLE_KEY._LABEL_LOAD_MORE);
            return e.text(_), e.attr(this._TAB_INDEX, "0"), e.attr("href", "#"), t.append(e), e
        },
        _createPagingControlLoadMoreMaxRows: function() {
            var t = this._getPagingControlLoadMore(),
                e = a(document.createElement("span"));
            e.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_MAX_ROWS_CLASS);
            var _ = this.getTranslatedString(this._BUNDLE_KEY._LABEL_LOAD_MORE_MAX_ROWS, {
                maxRows: this.options.loadMoreOptions.maxCount
            });
            return e.text(_), t.append(e), e
        },
        _createPagingControlLoadMoreRange: function(t, e) {
            var _ = this._getPagingControlLoadMore(),
                n = a(document.createElement("span"));
            n.addClass(this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_RANGE_CLASS);
            var i = this._getItemRange(t, e);
            return n.append(i), _.append(n), n
        },
        _createPagingControlNav: function(t, e) {
            var _ = this.options,
                n = this._IsCustomElement(),
                i = "vertical" === this.options.pageOptions.orientation,
                s = "dots" === this.options.pageOptions.type,
                o = _.pageOptions.layout;
            null == o && (o = [this._PAGE_OPTION_LAYOUT._AUTO]);
            var r = this._getPagingControlContent(),
                g = a(document.createElement("div"));
            if (g.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_CLASS), s && i ? g.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_DOTS_VERTICAL_CLASS) : g.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_CLASS_STANDARD), r.append(g), -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._AUTO, o) && !s || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._ALL, o) || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._INPUT, o)) {
                var A = a(document.createElement("div"));
                A.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SECTION_CLASS), g.append(A);
                var C = a(document.createElement("label"));
                C.attr("for", this.element.attr("id") + "_nav_input|input"), C.attr("id", this.element.attr("id") + "_nav_input|label"), C.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_LABEL_CLASS), C.addClass("oj-label-inline");
                var h, L = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE);
                C.text(L), A.append(C);
                var u = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_INPUT_PAGE);
                n ? ((h = document.createElement("oj-input-text")).setAttribute("data-oj-binding-provider", "none"), h.setAttribute("id", this.element.attr("id") + "_nav_input"), h.setAttribute("help.instruction", u), h.setAttribute(this._TAB_INDEX, "0"), h.classList.add(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS), h.value = this._getCurrentPage() + 1) : ((h = a(document.createElement("input"))).addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS), h.attr("id", this.element.attr("id") + "_nav_input"), h.attr("title", u), h.attr(this._TAB_INDEX, "0"), h.val(this._getCurrentPage() + 1)), A.append(h);
                var N = this._getMaxPageVal(t);
                if (this._getTotalPages() > 0 && this._isTotalSizeConfidenceActual()) {
                    var E = a(document.createElement("span"));
                    E.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_MAX_CLASS), E.addClass("oj-label-inline");
                    var d = this.getTranslatedString(this._BUNDLE_KEY._LABEL_NAV_INPUT_PAGE_MAX, {
                        pageMax: N
                    });
                    E.text(d), A.append(E)
                }
                var c = {
                        messages: ["notewindow"],
                        converterHint: ["notewindow"],
                        validatorHint: ["notewindow"]
                    },
                    P = [new l({
                        min: 1,
                        max: N
                    })];
                n ? (h.setAttribute("display-options", JSON.stringify(c)), h.setAttribute("user-assistance-density", "compact"), h.style.width = "auto", h.style.minWidth = 0, h.converter = new S.IntlNumberConverter({
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                    style: "decimal",
                    useGrouping: !1
                }), h.validators = P, h.addEventListener("valueChanged", this._handlePageChange.bind(this))) : (h.ojInputText({
                    displayOptions: c,
                    userAssistanceDensity: "compact",
                    converter: new S.IntlNumberConverter,
                    validators: P
                }).attr("data-oj-internal", ""), h[0].style.width = "auto", h[0].style.minWidth = 0, h.on({
                    ojoptionchange: this._handlePageChange.bind(this)
                }))
            }
            if (-1 !== a.inArray(this._PAGE_OPTION_LAYOUT._AUTO, o) && !s || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._ALL, o) || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._RANGE_TEXT, o)) {
                var p = a(document.createElement("span"));
                p.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS), p.addClass("oj-label-inline");
                var T = this._getItemRange(t, e);
                T.text().length > 0 && (p.append("("), p.append(T), p.append(")")), g.append(p)
            }
            var v = a(document.createElement("div"));
            if (v.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_SECTION_CLASS), g.append(v), -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._AUTO, o) && !s || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._ALL, o) || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._NAV, o)) {
                var O = this._createNavArrow(this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_CLASS, i ? this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_VERTICAL_ICON_CLASS : this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_ICON_CLASS, this._BUNDLE_KEY._TIP_NAV_FIRST_PAGE, this._BUNDLE_KEY._LABEL_ACC_NAV_FIRST_PAGE, this._CSS_CLASSES._PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS, i);
                v.append(O);
                var I = this._createNavArrow(this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_CLASS, i ? this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_VERTICAL_ICON_CLASS : this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS, this._BUNDLE_KEY._TIP_NAV_PREVIOUS_PAGE, this._BUNDLE_KEY._LABEL_ACC_NAV_PREVIOUS_PAGE, this._CSS_CLASSES._PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS, i);
                v.append(I)
            }
            if (-1 !== a.inArray(this._PAGE_OPTION_LAYOUT._AUTO, o) || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._ALL, o) || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._PAGES, o)) {
                var R = a(document.createElement("div"));
                R.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_SECTION_CLASS), v.append(R), this._createPagingControlNavPages(R, this._getMaxPageLinks(), t, e)
            }
            if (-1 !== a.inArray(this._PAGE_OPTION_LAYOUT._AUTO, o) && !s || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._ALL, o) || -1 !== a.inArray(this._PAGE_OPTION_LAYOUT._NAV, o)) {
                var G = this._createNavArrow(this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_CLASS, i ? this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_VERTICAL_ICON_CLASS : this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_ICON_CLASS, this._BUNDLE_KEY._TIP_NAV_NEXT_PAGE, this._BUNDLE_KEY._LABEL_ACC_NAV_NEXT_PAGE, this._CSS_CLASSES._PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS, i);
                v.append(G);
                var m = this._createNavArrow(this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_CLASS, i ? this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_VERTICAL_ICON_CLASS : this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_ICON_CLASS, this._BUNDLE_KEY._TIP_NAV_LAST_PAGE, this._BUNDLE_KEY._LABEL_ACC_NAV_LAST_PAGE, this._CSS_CLASSES._PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS, i);
                v.append(m)
            }
            return g
        },
        _createPagingControlNavPages: function(t, e, _, n) {
            if (e < 5) {
                var i = this.getTranslatedString(this._BUNDLE_KEY._ERR_MAXPAGELINKS_INVALID_SUMMARY),
                    s = this.getTranslatedString(this._BUNDLE_KEY._ERR_MAXPAGELINKS_INVALID_DETAIL);
                throw this._stopFetchAction = !0, new Error(i + "\n" + s)
            }
            var o = a(document.createElement("div"));
            o.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_LINKS_CLASS), t.append(o);
            var r = this._getTotalPages(),
                S = this._getCurrentPage(),
                l = this.options.pageSize,
                g = e,
                A = [],
                C = this._getData();
            if (S >= 0) {
                var h;
                if (this._isTotalSizeConfidenceActual() && r <= g)
                    for (A[0] = 0, h = 1; h < r; h++) A[h] = h;
                else {
                    A.push(0), 0 !== S && A.push(S), S !== r - 1 && this._isTotalSizeConfidenceActual() && A.push(r - 1), g -= A.length;
                    var L = S - 1,
                        u = 1;
                    for (!this._isTotalSizeConfidenceActual() || S !== r - 1 && S !== r - 2 || (u = 0); g > u && L >= 1;) A.push(L), L -= 1, g -= 1;
                    var N = S + 1;
                    for (-1 === r ? g = _ > 0 && _ >= l ? 1 : 0 : null != C && ("atLeast" === C.totalSizeConfidence() ? g = r <= N ? 1 : Math.min(g, r - N) : "unknown" === C.totalSizeConfidence() && (g = 0)); g > 0 && (N <= r || -1 === r);) A.push(N), N += 1, g -= 1
                }
                for (A.sort(function(t, e) {
                        return t - e
                    }), h = 0; h < A.length; h++) {
                    var E = A[h];
                    this._createPagingControlNavPage(o, E), h !== A.length - 1 && E !== A[h + 1] - 1 && this._createPagingControlNavPage(o, -1)
                }!this._isTotalSizeConfidenceActual() && _ >= l && this._createPagingControlNavPage(o, -1)
            }
            return o
        },
        _createPagingControlNavPage: function(t, e) {
            var _ = this._getCurrentPage(),
                n = null,
                i = "rtl" === this._GetReadingDirection(),
                s = "vertical" === this.options.pageOptions.orientation,
                o = "dots" === this.options.pageOptions.type;
            if (-1 === e)(n = a(document.createElement("span"))).addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_ELLIPSIS_CLASS), n.text("..."), t.append(n);
            else {
                _ === e ? ((n = a(document.createElement("div"))).addClass(this._MARKER_STYLE_CLASSES._SELECTED), n.addClass(this._MARKER_STYLE_CLASSES._ACTIVE), n.addClass(this._MARKER_STYLE_CLASSES._DISABLED), n.removeClass(this._MARKER_STYLE_CLASSES._ENABLED)) : ((n = a(document.createElement("a"))).removeClass(this._MARKER_STYLE_CLASSES._SELECTED), n.removeClass(this._MARKER_STYLE_CLASSES._ACTIVE), n.removeClass(this._MARKER_STYLE_CLASSES._DISABLED), n.addClass(this._MARKER_STYLE_CLASSES._ENABLED), n.attr(this._TAB_INDEX, "0"), n.attr("href", "#")), n.attr("data-oj-pagenum", e), o ? n.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_DOT_CLASS) : n.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGE_CLASS);
                var r = this.getTranslatedString(this._BUNDLE_KEY._TIP_NAV_PAGE_LINK, {
                    pageNum: (e + 1).toString()
                });
                this._AddHoverable(n), this._focusable({
                    element: n,
                    applyHighlight: !0
                }), n.attr("title", r), n[0].oncontextmenu = function() {
                    return !1
                };
                var S = this._createPagingControlAccNavPageLabel();
                n.append(S);
                var l = a(document.createElement("span"));
                if (l.append((e + 1).toString()), o) {
                    l.addClass(this._CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
                    var g = a(document.createElement("span"));
                    g.addClass(this._CSS_CLASSES._PAGING_CONTROL_NAV_DOT_BULLET_CLASS), this._AddHoverable(g), _ === e && (g.addClass(this._MARKER_STYLE_CLASSES._SELECTED), g.addClass(this._MARKER_STYLE_CLASSES._ACTIVE)), n.append(g)
                } else this._AddHoverable(n);
                var A = i ? "rtl" : "ltr";
                l.attr("dir", A), n.append(l), s && n.css("display", "block"), t.append(n)
            }
            return n
        },
        _getPagingControlAccPageLabel: function() {
            var t = null;
            return this._getPagingControlContainer() && (t = this.element[0].querySelector("." + this._CSS_CLASSES._PAGING_CONTROL_ACC_PAGE_LABEL_CLASS)), t
        },
        _getPagingControlAccLabel: function() {
            var t = this._getPagingControlContainer(),
                e = null;
            return t && (e = t.find("." + this._CSS_CLASSES._PAGING_CONTROL_ACC_LABEL_CLASS)) && e.length > 0 && (e = a(e.get(0))), e
        },
        _getPagingControlContainer: function() {
            return a(this.element)
        },
        _getPagingControlContent: function() {
            if (!this._cachedDomPagingControlContent) {
                var t = this._getPagingControlContainer(),
                    e = null;
                t && (e = t.find("." + this._CSS_CLASSES._PAGING_CONTROL_CONTENT_CLASS)) && e.length > 0 && (this._cachedDomPagingControlContent = a(e.get(0)))
            }
            return this._cachedDomPagingControlContent
        },
        _getPagingControlLoadMore: function() {
            if (!this._cachedDomPagingControlLoadMore) {
                var t = this._getPagingControlContent(),
                    e = null;
                t && (e = t.children("." + this._CSS_CLASSES._PAGING_CONTROL_LOAD_MORE_CLASS)) && e.length > 0 && (this._cachedDomPagingControlLoadMore = a(e.get(0)))
            }
            return this._cachedDomPagingControlLoadMore
        },
        _getPagingControlNav: function() {
            if (!this._cachedDomPagingControlNav) {
                var t = this._getPagingControlContent(),
                    e = null;
                t && (e = t.children("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_CLASS)) && e.length > 0 && (this._cachedDomPagingControlNav = a(e.get(0)))
            }
            return this._cachedDomPagingControlNav
        },
        _getPagingControlNavInput: function() {
            var t = this._IsCustomElement();
            if (!this._cachedDomPagingControlNavInput) {
                var e = this._getPagingControlNav(),
                    _ = null;
                e && (t ? (_ = e[0].getElementsByTagName("oj-input-text")) && _.length > 0 && (this._cachedDomPagingControlNavInput = a(_[0])) : (_ = e.find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_CLASS)) && _.length > 0 && (this._cachedDomPagingControlNavInput = a(_.get(0))))
            }
            return this._cachedDomPagingControlNavInput
        },
        _getPagingControlNavInputSummary: function() {
            if (!this._cachedDomPagingControlNavInputSummary) {
                var t = this._getPagingControlNav(),
                    e = null;
                t && (e = t.find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS)) && e.length > 0 && (this._cachedDomPagingControlNavInputSummary = a(e.get(0)))
            }
            return this._cachedDomPagingControlNavInputSummary
        },
        _getPagingControlNavPageLinks: function() {
            var t = this._getPagingControlNav(),
                e = null;
            return t && (e = t.find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_PAGES_LINKS_CLASS)) && e.length > 0 && (e = a(e.get(0))), e
        },
        _getPagingControlNavArrowSection: function() {
            var t = this._getPagingControlNav(),
                e = null;
            if (t) {
                if (!((e = t.find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_ARROW_SECTION_CLASS)) && e.length > 0)) return null;
                e = a(e.get(0))
            }
            return e
        },
        _getPagingControlNavInputSection: function() {
            var t = this._getPagingControlNav(),
                e = null;
            if (t) {
                if (!((e = t.find("." + this._CSS_CLASSES._PAGING_CONTROL_NAV_INPUT_SECTION_CLASS)) && e.length > 0)) return null;
                e = a(e.get(0))
            }
            return e
        }
    })
});
//# sourceMappingURL=ojpagingcontrol.js.map