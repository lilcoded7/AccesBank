/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["touchr", "ojdnd", "ojs/ojeditablevalue", "ojs/ojinputnumber", "ojs/ojmenu", "ojs/ojpopup", "ojs/ojdialog", "ojs/ojbutton", "ojs/ojdatasource-common", "ojs/ojdataprovideradapter", "ojs/ojlistdataproviderview", "ojs/ojselector", "ojs/ojcore-base", "jquery", "ojs/ojdomutils", "ojs/ojlogger", "ojs/ojcontext", "ojs/ojconfig", "ojs/ojtranslation", "ojs/ojthemeutils", "ojs/ojcomponentcore", "ojs/ojdatacollection-common", "ojs/ojanimation", "ojs/ojdomscroller", "ojs/ojcustomelement-utils", "ojs/ojkeyset", "ojs/ojvalidator-regexp", "ojs/ojkeyboardfocus-utils"], function(e, t, o, i, l, n, s, a, r, _, h, d, u, c, S, E, C, T, p, g, f, A, m, b, L, R, y, v) {
    "use strict";
    var O;
    h = h && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h, u = u && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u, c = c && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c, C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C, b = b && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b, y = y && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y, (O = {
        properties: {
            accessibility: {
                type: "object",
                properties: {
                    rowHeader: {
                        type: "string|Array<string>"
                    }
                }
            },
            addRowDisplay: {
                type: "string",
                enumValues: ["hidden", "top"],
                value: "top"
            },
            as: {
                type: "string",
                value: ""
            },
            columns: {
                type: "Array<Object>",
                writeback: !0
            },
            columnsDefault: {
                type: "object",
                properties: {
                    className: {
                        type: "string"
                    },
                    field: {
                        type: "string"
                    },
                    footerClassName: {
                        type: "string"
                    },
                    footerRenderer: {
                        type: "function"
                    },
                    footerStyle: {
                        type: "string"
                    },
                    footerTemplate: {
                        type: "string"
                    },
                    headerClassName: {
                        type: "string"
                    },
                    headerRenderer: {
                        type: "function"
                    },
                    headerStyle: {
                        type: "string"
                    },
                    headerTemplate: {
                        type: "string"
                    },
                    headerText: {
                        type: "string"
                    },
                    maxWidth: {
                        type: "string|number"
                    },
                    minWidth: {
                        type: "string|number",
                        value: "auto"
                    },
                    renderer: {
                        type: "function"
                    },
                    resizable: {
                        type: "string",
                        enumValues: ["disabled", "enabled"],
                        value: "disabled"
                    },
                    showRequired: {
                        type: "boolean",
                        value: !1
                    },
                    sortProperty: {
                        type: "string"
                    },
                    sortable: {
                        type: "string",
                        enumValues: ["auto", "disabled", "enabled"],
                        value: "auto"
                    },
                    style: {
                        type: "string"
                    },
                    template: {
                        type: "string"
                    },
                    weight: {
                        type: "number",
                        value: 1
                    },
                    width: {
                        type: "string|number"
                    }
                }
            },
            currentRow: {
                type: "object",
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
                enumValues: ["grid", "list"],
                value: "list"
            },
            dnd: {
                type: "object",
                properties: {
                    drag: {
                        type: "object",
                        properties: {
                            rows: {
                                type: "object",
                                properties: {
                                    dataTypes: {
                                        type: "string|Array<string>"
                                    },
                                    drag: {
                                        type: "function"
                                    },
                                    dragEnd: {
                                        type: "function"
                                    },
                                    dragStart: {
                                        type: "function"
                                    }
                                }
                            }
                        }
                    },
                    drop: {
                        type: "object",
                        properties: {
                            columns: {
                                type: "object",
                                properties: {
                                    dataTypes: {
                                        type: "string|Array<string>"
                                    },
                                    dragEnter: {
                                        type: "function"
                                    },
                                    dragLeave: {
                                        type: "function"
                                    },
                                    dragOver: {
                                        type: "function"
                                    },
                                    drop: {
                                        type: "function"
                                    }
                                }
                            },
                            rows: {
                                type: "object",
                                properties: {
                                    dataTypes: {
                                        type: "string|Array<string>"
                                    },
                                    dragEnter: {
                                        type: "function"
                                    },
                                    dragLeave: {
                                        type: "function"
                                    },
                                    dragOver: {
                                        type: "function"
                                    },
                                    drop: {
                                        type: "function"
                                    }
                                }
                            }
                        }
                    },
                    reorder: {
                        type: "object",
                        properties: {
                            columns: {
                                type: "string",
                                enumValues: ["disabled", "enabled"],
                                value: "disabled"
                            }
                        }
                    }
                }
            },
            editMode: {
                type: "string",
                enumValues: ["none", "rowEdit"],
                value: "none"
            },
            editRow: {
                type: "object",
                writeback: !0,
                value: {
                    rowKey: null,
                    rowIndex: -1
                }
            },
            firstSelectedRow: {
                type: "object",
                writeback: !0,
                readOnly: !0,
                value: {
                    key: null,
                    data: null
                },
                properties: {
                    data: {
                        type: "any"
                    },
                    key: {
                        type: "any"
                    }
                }
            },
            horizontalGridVisible: {
                type: "string",
                enumValues: ["auto", "disabled", "enabled"],
                value: "auto"
            },
            layout: {
                type: "string",
                enumValues: ["contents", "fixed"],
                value: "contents"
            },
            rowRenderer: {
                type: "function"
            },
            scrollPolicy: {
                type: "string",
                enumValues: ["auto", "loadAll", "loadMoreOnScroll"],
                value: "auto"
            },
            scrollPolicyOptions: {
                type: "object",
                properties: {
                    fetchSize: {
                        type: "number",
                        value: 25
                    },
                    maxCount: {
                        type: "number",
                        value: 500
                    },
                    scroller: {
                        type: "string"
                    },
                    scrollerOffsetBottom: {
                        type: "number"
                    },
                    scrollerOffsetEnd: {
                        type: "number"
                    },
                    scrollerOffsetStart: {
                        type: "number"
                    },
                    scrollerOffsetTop: {
                        type: "number"
                    }
                }
            },
            scrollPosition: {
                type: "object",
                writeback: !0,
                value: {
                    x: 0,
                    y: 0
                },
                properties: {
                    columnIndex: {
                        type: "number"
                    },
                    columnKey: {
                        type: "any"
                    },
                    offsetX: {
                        type: "number"
                    },
                    offsetY: {
                        type: "number"
                    },
                    rowIndex: {
                        type: "number"
                    },
                    rowKey: {
                        type: "any"
                    },
                    x: {
                        type: "number"
                    },
                    y: {
                        type: "number"
                    }
                }
            },
            scrollToKey: {
                type: "string",
                enumValues: ["always", "auto", "capability", "never"],
                value: "auto"
            },
            selectAllControl: {
                type: "string",
                enumValues: ["hidden", "visible"],
                value: "visible"
            },
            selected: {
                type: "object",
                writeback: !0,
                properties: {
                    column: {
                        type: "KeySet",
                        writeback: !0
                    },
                    row: {
                        type: "KeySet",
                        writeback: !0
                    }
                }
            },
            selection: {
                type: "Array<Object>",
                writeback: !0,
                value: []
            },
            selectionMode: {
                type: "Object<string, string>",
                properties: {
                    column: {
                        type: "string",
                        enumValues: ["multiple", "none", "single"]
                    },
                    row: {
                        type: "string",
                        enumValues: ["multiple", "none", "single"]
                    }
                }
            },
            selectionRequired: {
                type: "boolean",
                value: !1
            },
            translations: {
                type: "object",
                value: {},
                properties: {
                    accessibleColumnContext: {
                        type: "string"
                    },
                    accessibleColumnFooterContext: {
                        type: "string"
                    },
                    accessibleColumnHeaderContext: {
                        type: "string"
                    },
                    accessibleContainsControls: {
                        type: "string"
                    },
                    accessibleRowContext: {
                        type: "string"
                    },
                    accessibleSortAscending: {
                        type: "string"
                    },
                    accessibleSortDescending: {
                        type: "string"
                    },
                    accessibleSortable: {
                        type: "string"
                    },
                    accessibleStateSelected: {
                        type: "string"
                    },
                    accessibleSummaryEstimate: {
                        type: "string"
                    },
                    accessibleSummaryExact: {
                        type: "string"
                    },
                    labelAccSelectionAffordanceBottom: {
                        type: "string"
                    },
                    labelAccSelectionAffordanceTop: {
                        type: "string"
                    },
                    labelColumnWidth: {
                        type: "string"
                    },
                    labelDisableNonContiguousSelection: {
                        type: "string"
                    },
                    labelEditRow: {
                        type: "string"
                    },
                    labelEnableNonContiguousSelection: {
                        type: "string"
                    },
                    labelResize: {
                        type: "string"
                    },
                    labelResizeColumn: {
                        type: "string"
                    },
                    labelResizeColumnDialog: {
                        type: "string"
                    },
                    labelResizeDialogApply: {
                        type: "string"
                    },
                    labelResizePopupCancel: {
                        type: "string"
                    },
                    labelResizePopupSpinner: {
                        type: "string"
                    },
                    labelResizePopupSubmit: {
                        type: "string"
                    },
                    labelSelectAllRows: {
                        type: "string"
                    },
                    labelSelectAndEditRow: {
                        type: "string"
                    },
                    labelSelectColum: {
                        type: "string"
                    },
                    labelSelectRow: {
                        type: "string"
                    },
                    labelSort: {
                        type: "string"
                    },
                    labelSortAsc: {
                        type: "string"
                    },
                    labelSortDsc: {
                        type: "string"
                    },
                    msgColumnResizeWidthValidation: {
                        type: "string"
                    },
                    msgFetchingData: {
                        type: "string"
                    },
                    msgInitializing: {
                        type: "string"
                    },
                    msgNoData: {
                        type: "string"
                    },
                    msgScrollPolicyMaxCountDetail: {
                        type: "string"
                    },
                    msgScrollPolicyMaxCountSummary: {
                        type: "string"
                    },
                    msgStatusSortAscending: {
                        type: "string"
                    },
                    msgStatusSortDescending: {
                        type: "string"
                    },
                    tooltipRequired: {
                        type: "string"
                    }
                }
            },
            verticalGridVisible: {
                type: "string",
                enumValues: ["auto", "disabled", "enabled"],
                value: "auto"
            }
        },
        methods: {
            getContextByNode: {},
            getDataForVisibleRow: {},
            getProperty: {},
            refresh: {},
            refreshRow: {},
            setProperties: {},
            setProperty: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        events: {
            ojAnimateEnd: {},
            ojAnimateStart: {},
            ojBeforeCurrentRow: {},
            ojBeforeRowAddEnd: {},
            ojBeforeRowEdit: {},
            ojBeforeRowEditEnd: {},
            ojRowAction: {},
            ojSort: {}
        },
        extension: {}
    }).extension._WIDGET_NAME = "ojTable", O.extension._INNER_ELEM = "table", u.CustomElementBridge.register("oj-table", {
        metadata: O
    });
    const D = function() {};
    D._BUNDLE_KEY = {
        _MSG_FETCHING_DATA: "msgFetchingData",
        _MSG_NO_DATA: "msgNoData",
        _MSG_INITIALIZING: "msgInitializing",
        _MSG_STATUS_SORT_ASC: "msgStatusSortAscending",
        _MSG_STATUS_SORT_DSC: "msgStatusSortDescending",
        _LABEL_SELECT_COLUMN: "labelSelectColumn",
        _LABEL_SELECT_ALL_ROWS: "labelSelectAllRows",
        _LABEL_SELECT_ROW: "labelSelectRow",
        _LABEL_EDIT_ROW: "labelEditRow",
        _LABEL_SELECT_AND_EDIT_ROW: "labelSelectAndEditRow"
    }, D._LOGGER_MSG = {
        _ERR_PRECURRENTROW_ERROR_SUMMARY: "Did not change current row due to error.",
        _ERR_PRECURRENTROW_ERROR_DETAIL: "Error detail: {error}.",
        _ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY: "Did not change current row due to unavailable row index.",
        _ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL: "Unavailable row index: {rowIdx}.",
        _ERR_REFRESHROW_INVALID_INDEX_SUMMARY: "Invalid row index value.",
        _ERR_REFRESHROW_INVALID_INDEX_DETAIL: "Row index: {rowIdx}.",
        _ERR_DATA_INVALID_TYPE_SUMMARY: "Invalid data type.",
        _ERR_DATA_INVALID_TYPE_DETAIL: "Please specify the appropriate data type.",
        _ERR_ELEMENT_INVALID_TYPE_SUMMARY: "Invalid element type.",
        _ERR_ELEMENT_INVALID_TYPE_DETAIL: "Only a <table> element can be specified for ojTable."
    }, D._UPDATE = {
        _ADD_ROW_DISPLAY: "addRowDisplay",
        _ATTACHED: "attached",
        _DATA_REFRESH: "dataRefresh",
        _DATA_SORT: "dataSort",
        _RESIZE: "resize",
        _REFRESH: "refresh",
        _COL_REORDER: "colReorder",
        _COL_RESIZE: "colResize",
        _ROW_REFRESH: "rowRefresh",
        _ROWS_ADDED: "rowsAdded",
        _ROWS_REMOVED: "rowsRemoved",
        _SHOWN: "shown"
    }, D._SUB_ID = {
        _TABLE_CELL: "oj-table-cell",
        _TABLE_HEADER: "oj-table-header",
        _TABLE_FOOTER: "oj-table-footer",
        _TABLE_SORT_ASCENDING: "oj-table-sort-ascending",
        _TABLE_SORT_DESCENDING: "oj-table-sort-descending"
    }, D._POSITION = {
        _START_TOP: "start top",
        _START_BOTTOM: "start bottom"
    }, D._FIELD_ID = "id", D._CONST_ATTRIBUTE = "attribute", D._CONST_DATA = "data", D._CONST_METADATA = "metadata", D._CONST_INDEXES = "indexes", D._CONST_INDEX = "index", D._CONST_KEY = "key", D._CONST_KEYS = "keys", D._CONST_AFTERKEYS = "afterKeys", D._CONST_ADDBEFOREKEYS = "addBeforeKeys", D._CONST_CLIENTID = "clientId", D._CONST_STARTINDEX = "startIndex", D._CONST_ENDINDEX = "endIndex", D._CONST_PAGESIZE = "size", D._CONST_OFFSET = "offset", D._CONST_SILENT = "silent", D._CONST_COLUMN = "column", D._CONST_ROW = "row", D._CONST_VALUE = "value", D._CONST_SORTCRITERIA = "sortCriteria", D._COLUMN_HEADER_ID = "_headerColumn", D._COLUMN_HEADER_TEXT_ID = "_headerColumnText", D._COLUMN_HEADER_ASC_ID = "_headerColumnAsc", D._COLUMN_HEADER_DSC_ID = "_headerColumnDsc", D._COLUMN_HEADER_ID_PREFIX = "_hdrCol", D._COLUMN_HEADER_ROW_SELECT_ID = "_hdrColRowSel", D._FOCUS_CALLED = "_focusedCalled", D._ROW_TEMPLATE = "rowTemplate", D._CELL_TEMPLATE = "template", D._HEADER_TEMPLATE = "headerTemplate", D._FOOTER_TEMPLATE = "footerTemplate", D._OPTION_AUTO = "auto", D._OPTION_ENABLED = "enabled", D._OPTION_DISABLED = "disabled", D._OPTION_DISPLAY = {
        _LIST: "list",
        _GRID: "grid"
    }, D._OPTION_EDIT_MODE = {
        _NONE: "none",
        _ROW_EDIT: "rowEdit"
    }, D._OPTION_FROZEN_EDGE = {
        _END: "end",
        _START: "start"
    }, D._OPTION_SELECTION_MODES = {
        _SINGLE: "single",
        _MULTIPLE: "multiple",
        _NONE: "none"
    }, D._OPTION_SCROLL_POLICY = {
        _AUTO: "auto",
        _LOADMORE_ON_SCROLL: "loadMoreOnScroll",
        _LOAD_ALL: "loadAll"
    }, D._COLUMN_SORT_ORDER = {
        _ASCENDING: "ascending",
        _DESCENDING: "descending"
    }, D._DND_REORDER_TABLE_ID_DATA_KEY = "oj-table-dnd-reorder-table-id", D._CURRENT_ROW_STATUS = {
        _UPDATED: "updated",
        _IGNORED: "ignored",
        _VETOED: "vetoed",
        _ERROR: "error"
    }, D._ROW_ITEM_EXPANDO = "oj-table-oj-row-item", D._DATA_OJ_COMMAND = "data-oj-command", D._DATA_OJ_BINDING_PROVIDER = "data-oj-binding-provider", D._BATCH_PROCESS_SIZE_WHEN_IDLE = 5, D.RESIZE_OFFSET = 10, D.SIZING_ERROR_MARGIN = .05, D._CSS_Vars = {
        enableSticky: "--oj-private-table-global-sticky-default",
        enableSelector: "--oj-private-table-global-enable-selector-default",
        showIndicatorDelay: "--oj-private-core-global-loading-indicator-delay-duration",
        loadIndicator: "--oj-private-table-global-load-indicator-default",
        horizontalGridVisible: "--oj-private-table-global-display-list-horizontal-grid-visible-default",
        addAnimation: "--oj-private-table-global-add-animation",
        removeAnimation: "--oj-private-table-global-remove-animation",
        updateAnimation: "--oj-private-table-global-update-animation"
    }, D.prototype._isStickyLayoutEnabled = function() {
        return "true" === this._getDefaultOptions().enableSticky
    }, D.prototype._isFixedLayoutEnabled = function() {
        return "fixed" === this.options.layout
    }, D.prototype._isTableStretchEnabled = function() {
        return this._getTableContainer().classList.contains(D.CSS_CLASSES._TABLE_STRETCH_CLASS)
    }, D.prototype._isExternalScrollEnabled = function() {
        if (this._isStickyLayoutEnabled()) {
            var e = this.options.scrollPolicyOptions;
            if (null != e) return null != e.scroller
        }
        return !1
    }, D.prototype._isNodeEditable = function(e) {
        return this._isNodeType(e, /^INPUT|TEXTAREA/)
    }, D.prototype._isNodeClickable = function(e) {
        return this._isNodeType(e, /SELECT|OPTION|BUTTON|^A\b/)
    }, D.prototype._isNodeDraggable = function(e) {
        return null != this._getFirstAncestor(e, "[draggable='true']", !0)
    }, D.prototype._isNodeType = function(e, t) {
        for (var o = this._getTable(); null != e && e !== o;) {
            var i = e.nodeName;
            if (i === D.DOM_ELEMENT._TD || i === D.DOM_ELEMENT._TH) break;
            if (3 !== e.nodeType)
                if (i.match(t))
                    if (-1 !== e.getAttribute(D.DOM_ATTR._TABINDEX)) return !0;
            e = e.parentNode
        }
        return !1
    }, D.prototype._handleDataFetchStart = function() {
        this._setDataWaitingState()
    }, D.prototype._setDataWaitingState = function(e) {
        !1 !== e && (this._isExternalScrollEnabled() || this._clearScrollBuffer(), this._showStatusMessage(), this._hideNoDataMessage()), this._dataFetching = !0, this._dataResolveFunc || (this._dataResolveFunc = this._addComponentBusyState("is waiting for data."))
    }, D.prototype._checkViewportRejected = function() {
        this._animateOnFetch = !1, this._clearDataWaitingState()
    }, D.prototype._clearDataWaitingState = function() {
        this._pendingFetchStale ? (this._pendingFetchStale = !1, this._queueTask(function() {
            return this._getLayoutManager().notifyTableUpdate(D._UPDATE._DATA_REFRESH), this._beforeDataRefresh(), this._invokeDataFetchRows()
        }.bind(this))) : (this._hideStatusMessage(), this._dataFetching = !1, this._pendingFetchStale = !1, this._dataResolveFunc && (this._dataResolveFunc(), this._dataResolveFunc = null))
    }, D.prototype._setComponentNotReady = function() {
        this._readyResolveFunc || (this._readyResolveFunc = this._addComponentBusyState("is being loaded."))
    }, D.prototype._setComponentReady = function() {
        this._readyResolveFunc && (this._readyResolveFunc(), this._readyResolveFunc = null)
    }, D.prototype._addComponentBusyState = function(e) {
        var t = C.getContext(this.element[0]).getBusyContext(),
            o = {
                description: "The component identified by '" + this._getTableId() + "' " + e
            };
        return t.addBusyState(o)
    }, D.prototype._createComponentBusyState = function(e) {
        var t = this._addComponentBusyState(e);
        return null == this._busyStateStack && (this._busyStateStack = []), this._busyStateStack.push(t), t
    }, D.prototype._clearComponentBusyState = function(e) {
        if (this._busyStateStack) {
            var t = this._busyStateStack.indexOf(e); - 1 !== t && (e(), this._busyStateStack.splice(t, 1))
        }
    }, D.prototype._clearBusyStateStack = function() {
        if (this._busyStateStack) {
            for (var e = 0; e < this._busyStateStack.length; e++) this._busyStateStack[e]();
            this._busyStateStack = null
        }
    }, D.prototype._setFocusoutBusyState = function() {
        this._focusoutResolveFunc || (this._focusoutResolveFunc = this._addComponentBusyState("is handling focusout."))
    }, D.prototype._clearFocusoutBusyState = function() {
        this._focusoutResolveFunc && (this._focusoutResolveFunc(), this._focusoutResolveFunc = null)
    }, D.prototype._setIdleRenderBusyState = function() {
        this._idleRenderResolveFunc || (this._idleRenderResolveFunc = this._addComponentBusyState("is waiting for idle rendering."))
    }, D.prototype._clearIdleRenderBusyState = function() {
        this._idleRenderResolveFunc && (this._idleRenderResolveFunc(), this._idleRenderResolveFunc = null)
    }, D.prototype._setScrollPosBusyState = function() {
        this._scrollPosResolveFunc || (this._scrollPosResolveFunc = this._addComponentBusyState("is handling scroll position."))
    }, D.prototype._clearScrollPosBusyState = function() {
        this._scrollPosResolveFunc && (this._scrollPosResolveFunc(), this._scrollPosResolveFunc = null)
    }, D.prototype._clearAllComponentBusyStates = function() {
        this._clearBusyStateStack(), this._pendingFetchStale = !1, this._clearDataWaitingState(), this._clearFocusoutBusyState(), this._clearIdleRenderBusyState(), this._clearScrollPosBusyState(), this._setComponentReady()
    }, D.prototype._cleanComponent = function(e) {
        this._animateOnFetch = null, this._isEditPending = null, this._active = null, this._isTableTab = null, this._clearAllComponentTimeouts(), this._clearAllComponentBusyStates(), this._clearOpenPopupListeners(), this._clearIdleCallback(), this._unregisterDomScroller(), this._clearLayoutManager(), e ? (c(this._getTableBody()).removeAttr(f._OJ_CONTAINER_ATTR), c(this._getTableBody()).removeAttr(C._OJ_CONTEXT_ATTRIBUTE), this.element.children().remove("." + D.CSS_CLASSES._TABLE_HEADER_CLASS), this.element.children().remove("." + D.CSS_CLASSES._TABLE_BODY_CLASS), this.element.children().remove("." + D.CSS_CLASSES._TABLE_FOOTER_CLASS), this.element.children().remove("." + D.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS), this.element.children().remove("." + D.CSS_CLASSES._TABLE_BODY_MESSAGE_ROW_CLASS), S.unwrap(this.element, c(this._getTableContainer())), this.element[0].classList.remove(D.CSS_CLASSES._TABLE_CLASS), this._data instanceof u.TableDataSourceAdapter && this._data.destroy(), (this._hasHeaderTemplate || this._hasCellTemplate || this._hasFooterTemplate || this._hasRowTemplate || this._hasAddRowTemplate) && this._cleanTemplateNodes(this.element[0]), this._componentDestroyed = !0) : (this._unregisterDataSourceEventListeners(), this._unregisterResizeListener())
    }, D.prototype._clearAllComponentTimeouts = function() {
        this._clearFocusoutTimeout(), this._clearShowStatusTimeout(), this._clearTableBodyHideTimeout(), this._clearTableFooterHideTimeout()
    }, D.prototype._clearFocusoutTimeout = function() {
        this._focusoutTimeout && (clearTimeout(this._focusoutTimeout), this._focusoutTimeout = null)
    }, D.prototype._clearShowStatusTimeout = function() {
        this._showStatusTimeout && (clearTimeout(this._showStatusTimeout), this._showStatusTimeout = null)
    }, D.prototype._initializeTableBodyHide = function(e) {
        this._clearTableBodyHideTimeout(), this._bodyVisibilityTimeout = setTimeout(function() {
            e.style[D.CSS_PROP._VISIBILITY] = D.CSS_VAL._HIDDEN, this._bodyVisibilityTimeout = null
        }.bind(this), 0)
    }, D.prototype._clearTableBodyHideTimeout = function() {
        null != this._bodyVisibilityTimeout && (clearTimeout(this._bodyVisibilityTimeout), this._bodyVisibilityTimeout = null)
    }, D.prototype._initializeTableFooterHide = function(e) {
        this._clearTableFooterHideTimeout(), this._footerVisibilityTimeout = setTimeout(function() {
            e.style[D.CSS_PROP._VISIBILITY] = D.CSS_VAL._HIDDEN, this._footerVisibilityTimeout = null
        }.bind(this), 0)
    }, D.prototype._clearTableFooterHideTimeout = function() {
        null != this._footerVisibilityTimeout && (clearTimeout(this._footerVisibilityTimeout), this._footerVisibilityTimeout = null)
    }, D.prototype._setFinalTask = function(e) {
        this._finalTask = e ? e.bind(this) : void 0
    }, D.prototype._hasPendingTasks = function() {
        return this._taskCount > 0
    }, D.prototype._hasAdditionalPendingTasks = function() {
        return this._taskCount > 1
    }, D.prototype._queueTask = function(e) {
        return this._pendingTasks || (this._taskCount = 0, this._pendingTasks = Promise.resolve(), this._setComponentNotReady()), this._taskCount += 1, this._pendingTasks = this._pendingTasks.then(function() {
            if (!this._componentDestroyed) return e.bind(this)()
        }.bind(this)).then(function(e) {
            if (this._taskCount -= 1, 0 === this._taskCount) {
                this._pendingTasks = null;
                try {
                    this._componentDestroyed || (this._finalTask && this._finalTask(), this._trigger("ready"))
                } catch (e) {
                    E.error(e)
                }
                this._setComponentReady()
            }
            return e
        }.bind(this), function(e) {
            return this._taskCount -= 1, 0 === this._taskCount && (this._pendingTasks = null, E.error(e), this._setComponentReady()), Promise.reject(e)
        }.bind(this)), this._pendingTasks
    }, D.prototype._draw = function() {
        if (this._setFinalTask(function() {
                this._syncTableSizing(), this._initialSelectionStateValidated ? this._syncSelectionState() : this._validateInitialSelectionState(), this._resetAriaLabel && this._updateAccStatusInfo(), this._resetAriaLabel = !1
            }.bind(this)), !this.element.is("table")) {
            var e = D._LOGGER_MSG._ERR_ELEMENT_INVALID_TYPE_SUMMARY,
                t = D._LOGGER_MSG._ERR_ELEMENT_INVALID_TYPE_DETAIL;
            throw new RangeError(e + "\n" + t)
        }
        this.element[0].classList.add(D.CSS_CLASSES._TABLE_ELEMENT_CLASS), this.element[0].setAttribute(D.DOM_ATTR._ROLE, "application"), this._createInitialTable(this._isTableHeaderless(), this._isTableFooterless()), this._styleInitialTable(), this._queueTask(function() {
            this._getLayoutManager().notifyTableUpdate(D._UPDATE._REFRESH), this._refreshTableHeader(), this._refreshTableFooter(), this._refreshTableBody(), this._processSlottedChildren()
        }.bind(this)), this.options.disabled && this.disable()
    }, D.prototype._refresh = function() {
        var e = !1;
        this._active = null, this._dataOption !== this.options[D._CONST_DATA] && (this._clearCachedDataMetadata(), null == this._data && (e = !0));
        var t = this._GetContextMenu();
        return null != t && t !== this._getContextMenuElement() && this._createContextMenuContainer(), this._clearLayoutManager(), this._clearCachedDom(), this._refreshContextMenu(), this._refreshTableStatusMessage(), this._clearIdleCallback(), e ? this._initFetch() : this._queueTask(function() {
            return this._getLayoutManager().notifyTableUpdate(D._UPDATE._REFRESH), this._invokeDataFetchRows()
        }.bind(this))
    }, D.prototype._refreshAll = function(e, t) {
        var o = [];
        if ((this._isColumnMetadataUpdated() || !this._isTableHeaderColumnsRendered() && !this._isTableHeaderless()) && (this._clearCachedMetadata(), o.push(this._refreshTableHeader()), null != this._sortColumn)) {
            for (var i = !1, l = this._getColumnDefs(), n = l.length, s = 0; s < n; s++) {
                var a = l[s];
                if (u.Object.compareValues(a, this._sortColumn)) {
                    i = !0;
                    break
                }
            }
            i || this._initFetch(null, !0)
        }
        return o.push(this._refreshTableFooter()), o.push(this._refreshTableBody(e, t)), Promise.all(o)
    }, D.prototype._refreshTableHeader = function() {
        var e, t = this,
            o = this._getColumnDefs(),
            i = o.length,
            l = this._getTableColGroup();
        if (null != l) {
            if (c(l).empty(), this._isDefaultSelectorEnabled()) {
                var n = this._createTableSelectorCol();
                l.appendChild(n)
            }
            for (e = 0; e < i; e++) {
                var s = this._createTableCol();
                l.appendChild(s)
            }
        }
        var a = this._getTableBodyLegacyWidthBuffer();
        if (null != a)
            for (c(a).empty(), e = 0; e < i; e++) {
                var r = this._createTableBodyCell();
                r.classList.add(D.CSS_CLASSES._TABLE_LEGACY_WIDTH_BUFFER_CELL_CLASS), a.appendChild(r)
            }
        var _ = this._getTableHeader();
        if (!_) {
            if (this._isTableHeaderless()) return Promise.resolve();
            _ = this._createTableHeader(), this._styleTableHeader(_)
        }
        var h = this._getTableHeaderRow();
        for (this._unregisterChildStateListeners(h), this._hasHeaderTemplate && (this._cleanTemplateNodes(h), this._hasHeaderTemplate = !1), c(h).empty(), e = 0; e < i; e++) {
            var d = o[e],
                u = this._getColumnRenderer(e, "header"),
                S = this._createTableHeaderColumn(e);
            if (u) {
                var E = this._getRendererContextObject(S, {}),
                    C = {
                        headerContext: E,
                        columnIndex: e,
                        data: d.headerText,
                        componentElement: E.componentElement,
                        parentElement: E.parentElement
                    };
                d.sortable === D._OPTION_ENABLED ? C.columnHeaderSortableIconRenderer = function(e, o) {
                    t._columnHeaderSortableIconRenderer(this, o)
                } : C.columnHeaderDefaultRenderer = function(e, o) {
                    t._columnHeaderDefaultRenderer(this, o)
                };
                var T = u(C);
                null != T ? (c(S).empty(), c(S).append(T)) : (S = c(h).children()[e], this._setTableHeaderColumnAttributes(e, S), this._styleTableHeaderColumn(e, S, !1))
            } else {
                var p = this._getSlotTemplate(d[D._HEADER_TEMPLATE]);
                if (null == p && this._isDefaultHeaderTemplateSlotValid() && (p = this._getSlotTemplate("headerTemplate")), p) {
                    var g = this._getRootElement(),
                        f = this._getTemplateEngine();
                    if (null != f) {
                        S && c(S).empty();
                        var A = this._getHeaderSlotTemplateContextObject(d.headerText, e),
                            m = f.execute(g, p, A, this.options.as, S);
                        m instanceof Array || (m = [m]), m.map(function(e) {
                            S.appendChild(e)
                        }), this._hasHeaderTemplate = !0
                    }
                }
            }
        }
        if (this._isDefaultSelectorEnabled()) {
            var b = this._createTableHeaderSelectorColumn();
            h.insertBefore(b, h.firstChild)
        }
        return this._renderedTableHeaderColumns = !0, this._finalizeNonBodyRowRendering([h])
    }, D.prototype._refreshTableFooter = function() {
        var e = this._getColumnDefs(),
            t = this._getTableFooter();
        if (!t) {
            if (this._isTableFooterless()) return Promise.resolve();
            t = this._createTableFooter(), this._styleTableFooter(t)
        }
        this._initializeTableFooterHide(t);
        var o = this._getTableFooterRow();
        if (this._hasFooterTemplate && (this._cleanTemplateNodes(o), this._hasFooterTemplate = !1), c(o).empty(), e.length > 0) {
            for (var i = this._isDefaultFooterTemplateSlotValid(), l = e.length, n = 0; n < l; n++) {
                var s = e[n],
                    a = this._getColumnRenderer(n, "footer"),
                    r = this._createTableFooterCell();
                if (this._styleTableFooterCell(n, r), this._insertTableFooterCell(n, r), a) {
                    var _ = this._getRendererContextObject(r, {}),
                        h = a({
                            footerContext: _,
                            columnIndex: n,
                            componentElement: _.componentElement,
                            parentElement: _.parentElement
                        });
                    null != h ? (c(r).empty(), c(r).append(h)) : (r = c(o).children()[n], this._setTableFooterColumnAttributes(n, r), this._styleTableFooterCell(n, r))
                } else {
                    var d = this._getSlotTemplate(s[D._FOOTER_TEMPLATE]);
                    if (null == d && i && (d = this._getSlotTemplate("footerTemplate")), d) {
                        var u = this._getRootElement(),
                            S = this._getTemplateEngine();
                        if (null != S) {
                            var E = this._getFooterSlotTemplateContextObject(n),
                                C = S.execute(u, d, E, this.options.as, r);
                            C instanceof Array || (C = [C]), C.map(function(e) {
                                r.appendChild(e)
                            }), this._hasFooterTemplate = !0
                        }
                    }
                }
            }
            if (this._isDefaultSelectorEnabled()) {
                var T = this._createTableFooterSelectorCell();
                o.insertBefore(T, o.firstChild)
            }
        }
        return this._finalizeNonBodyRowRendering([o])
    }, D.prototype._refreshTableBody = function(e, t, o) {
        var i = this._getTableBody();
        if (null == i) return Promise.resolve();
        var l, n = this._getRowIdxRowArray(e, t),
            s = c.contains(i, document.activeElement),
            a = !1;
        if (this._scrollLeft = void 0 === this._scrollLeft ? 0 : this._scrollLeft, this._scrollTop = void 0 === this._scrollTop ? 0 : this._scrollTop, 0 === t) s && (a = !0), this._removeAllTableBodyRows();
        else {
            var r = this._getTableBodyRows().length;
            if (r > 0)
                for (l = r - 1; l >= t; l--) {
                    if (s) {
                        var _ = this._getTableBodyRow(l);
                        null != _ && c.contains(_, document.activeElement) && (a = !0, s = !1)
                    }
                    this._removeTableBodyRow(l)
                }
        }
        a && this._getTable().focus(), this._clearCachedDomRowData(), this._hideNoDataMessage();
        const h = document.createDocumentFragment();
        if (!this._isAddNewRowEnabled() || null != t && 0 !== t || null != this._getPlaceHolderRow() || this._refreshAddNewRowPlaceholder(h, !0), 0 === n.length && 0 === this._getTableBodyRows().length) return this._appendElementToTableBody(h, i), this._showNoDataMessage(), this._finalizeNonBodyRowRendering([i]);
        if (t > 0 && this._isLoadMoreOnScroll() && !this._isLastRowInViewport() && !this._fetchBySyncScroll) return new Promise(function(o, l) {
            this._setIdleRenderBusyState(), this._renderRowsWhenIdle(n.slice(0), i, t, o, l, e.isMouseWheel)
        }.bind(this));
        var d = this._getLayoutManager(),
            u = n.length;
        if (this._animateOnFetch && this._IsCustomElement()) {
            this._animateOnFetch = !1;
            var S = [],
                E = [];
            for (l = 0; l < u; l++) E.push(n[l].rowIdx), S.push(this._addSingleTableBodyRow(n[l].rowIdx, n[l].row, h, t));
            return d.handleAfterRowsProcessed(h), this._appendElementToTableBody(h, i), this._animateVisibleRows(S, E, "add").then(function() {
                return this._afterRowsRendered(i)
            }.bind(this))
        }
        for (this._animateOnFetch = !1, o || this._initializeTableBodyHide(i), l = 0; l < u; l++) this._renderRow(n[l], h, t);
        return d.handleAfterRowsProcessed(h), this._appendElementToTableBody(h, i), this._afterRowsRendered(i)
    }, D.prototype._isDefaultSelectorEnabled = function() {
        return "true" === this._getDefaultOptions().enableSelector && this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE
    }, D.prototype._refreshTableBodyRow = function(e, t, o, i, l, n) {
        var s = this._getRowRenderer();
        (isNaN(e) || e < 0) && E.error("Error: Invalid rowIdx value: " + e);
        var a = this._hashCode(t[D._CONST_KEY]);
        if (null == o) {
            if (!(o = this._getTableBodyRow(e))) return null;
            (this._hasCellTemplate || this._hasRowTemplate) && this._cleanTemplateNodes(o), c(o).empty()
        }
        this._hideNoDataMessage();
        var r = this._getCurrentRow();
        r = r || {};
        var _ = this._getRendererContextObject(o, {
                row: t,
                isCurrentRow: r.rowIndex === e
            }),
            h = {
                rowContext: _,
                row: t[D._CONST_DATA],
                componentElement: _.componentElement,
                parentElement: _.parentElement,
                data: t[D._CONST_DATA]
            },
            d = this._getColumnDefs();
        if (null != s || this._isDefaultRowTemplateSlotValid() && null !== this._getSlotTemplate("rowTemplate")) {
            if (null != s) {
                var u = s(h);
                null != u ? o.appendChild(u) : null == i ? o = this._getRawTableBodyRow(e) : (l = null == l ? 0 : l, o = i.children ? i.children[e - l] : c(i).children()[e - l])
            } else {
                var S = this._getSlotTemplate("rowTemplate"),
                    C = this._getRootElement(),
                    T = this._getTemplateEngine();
                if (null != T) {
                    var p = this._getRowSlotTemplateContextObject(h),
                        g = this._getTableBody(),
                        f = T.execute(C, S, p, this.options.as, g);
                    for (let e = 0; e < f.length; e++) {
                        if ("TR" === f[e].tagName) {
                            o.parentNode.replaceChild(f[e], o);
                            break
                        }
                        o.appendChild(f[e])
                    }
                    null == i ? o = this._getRawTableBodyRow(e) : (l = null == l ? 0 : l, o = i.children ? i.children[e - l] : c(i).children()[e - l]), this._hasRowTemplate = !0
                }
            }
            this._clearCachedDomRowData(), this._setTableBodyRowAttributes(t, o), this._styleTableBodyRow(o, !1);
            var A, m = this._getTableElementsByTagName(o, D.DOM_ELEMENT._TD),
                b = m.length;
            for (let o = 0; o < b; o++) A = m[o], this._setTableBodyCellAttributes(e, t[D._CONST_KEY], a, o, A), this._styleTableBodyCell(o, A, !1);
            if (null != this._columnsDestMap)
                for (let e = 0; e < this._columnsDestMap.length; e++) {
                    var L = m[this._columnsDestMap[e]];
                    L.parentNode.appendChild(L)
                }
            d.length > 0 && this._isDefaultSelectorEnabled() && this._createTableBodyDefaultSelector(t.key, o)
        } else d.length > 0 && this._isDefaultSelectorEnabled() && this._createTableBodyDefaultSelector(t.key, o), this._tableBodyRowDefaultRenderer(e, t, h);
        return this._getLayoutManager().handleRowRefresh(e, o, n), o[D._ROW_ITEM_EXPANDO] = t, o
    }, D.prototype._refreshAddNewRowPlaceholder = function(e, t) {
        let o = this._getPlaceHolderRow();
        if (!this._isAddNewRowEnabled()) {
            if (null != o) {
                if (this._hasActiveAddRow())
                    if (this._isTableHeaderless()) this._getTableBodyRows().length > 0 ? this._setActiveRow(0, null, !0) : this._setActiveNoData();
                    else {
                        var i = this._getFirstVisibleColumnIndex(0, !0);
                        this._setActiveHeader(i)
                    }
                this._cleanTemplateNodes(o), c(o).remove(), this._hasAddRowTemplate = !1, this._setTableActionableMode(!1)
            }
            return Promise.resolve(!1)
        }
        const l = this._getTemplateEngine(),
            n = this._getSlotTemplate("addRowTemplate"),
            s = this._getSlotTemplate("addRowCellTemplate");
        if (null !== l) {
            let i, u = function(e) {
                this._handleAddRow(e, null)
            }.bind(this);
            const S = this._getRootElement(),
                E = this._getTableBody();
            var a;
            if (null != o && (this._cleanTemplateNodes(o), c(o).empty()), null == o && (o = this._createTableBodyRow()), null != e ? e.appendChild(o) : E.insertBefore(o, E.firstChild), null != n && this._isDefaultAddRowTemplateSlotValid()) {
                i = this._getRowSlotTemplateContextObject({}, !0), i.submitAddRow = u;
                const t = l.execute(S, n, i, this.options.as, E);
                for (let e = 0; e < t.length; e++) {
                    if ("TR" === t[e].tagName) {
                        o.parentNode.replaceChild(t[e], o);
                        break
                    }
                    o.appendChild(t[e])
                }
                o = null == e ? this._getRawTableBodyRow(-1) : e.children ? e.children[0] : c(e).children()[0]
            } else if (null !== s && this._isDefaultAddRowCellTemplateSlotValid())
                for (var r = this._getColumnDefs().length, _ = 0; _ < r; _++) {
                    a = this._createTableBodyCell(), o.appendChild(a), i = this._getCellSlotTemplateContextObject({
                        columnIndex: _
                    }, !0), i.submitAddRow = u;
                    var h = l.execute(S, s, i, this.options.as, E);
                    h instanceof Array || (h = [h]);
                    for (let e = 0; e < h.length; e++) a.appendChild(h[e])
                }
            o.classList.add(D.CSS_CLASSES._TABLE_ADD_ROW_PLACEHOLDER_CLASS);
            var d = this._getPlaceHolderRowCells(o);
            for (let e = 0; e < d.length; e++) a = d[e], this._styleTableAddRowCell(e, a);
            return this._hasAddRowTemplate = !0, this._isDefaultSelectorEnabled() && (a = document.createElement(D.DOM_ELEMENT._TD), o.insertBefore(a, o.firstChild), a.classList.add(D.CSS_CLASSES._TABLE_FROZEN_START)), t || this._getLayoutManager()._updateAddRowTop(), this._finalizeNonBodyRowRendering([o])
        }
        return Promise.resolve(!1)
    }, D.prototype._finalizeBodyRowRendering = function(e) {
        var t = this._getTableBody();
        return this._waitForAllElementsToResolve([t]).then(function() {
            var t = this._hasEditableRow() ? this._getEditableRowKey() : null;
            return e.forEach(function(e) {
                var o = this._getRowKey(e);
                null != t && u.KeyUtils.equals(o, t) || A.disableAllFocusableElements(e, null, null, !0)
            }.bind(this)), Promise.resolve(!0)
        }.bind(this))
    }, D.prototype._finalizeNonBodyRowRendering = function(e) {
        return this._waitForAllElementsToResolve(e).then(function() {
            return e.forEach(function(e) {
                A.disableAllFocusableElements(e, null, null, !0)
            }), Promise.resolve(!0)
        })
    }, D.prototype._waitForAllElementsToResolve = function(e) {
        var t = [];
        return e.forEach(function(e) {
            e && t.push(C.getContext(e).getBusyContext().whenReady())
        }), Promise.all(t)
    }, D.prototype._refreshRow = function(e, t, o) {
        var i = this._getData();
        if (!o) {
            if (!i) return Promise.resolve(!1);
            var l = this._getTableBodyRows();
            if (isNaN(e) || e < 0 || e >= l.length || 0 === l.length) {
                var n = D._LOGGER_MSG._ERR_REFRESHROW_INVALID_INDEX_SUMMARY,
                    s = p.applyParameters(D._LOGGER_MSG._ERR_REFRESHROW_INVALID_INDEX_DETAIL, {
                        rowIdx: e.toString()
                    });
                throw new RangeError(n + "\n" + s)
            }
        }
        var a = this._getRowKeyForRowIdx(e);
        return this._getLayoutManager().notifyTableUpdate(D._UPDATE._ROW_REFRESH), i.fetchByKeys({
            keys: new Set([a])
        }).then(function(o) {
            if (null == o || null == o.results || 0 === o.results.size) return Promise.resolve(!1);
            var i = this._getTableBodyRow(e);
            t = t && c.contains(i, document.activeElement);
            var l = o.results.get(a);
            return this._refreshTableBodyRow(e, {
                data: l.data,
                metadata: l.metadata,
                index: e,
                key: a
            }, null, null, null, !0), t && this._getTable().focus(), (i = this._getTableBodyRow(e)) ? this._finalizeBodyRowRendering([i]) : Promise.resolve(!0)
        }.bind(this))
    }, D.prototype._refreshTableStatusMessage = function() {
        var e = this._getTableStatusMessage();
        null != e && c(e).remove(), this._createTableStatusMessage()
    }, D.prototype._showStatusMessage = function() {
        if (!this._showStatusTimeout) {
            var e = this._getTableTempSkeletonRow();
            if (!this._statusMessageShown && !e) {
                if (this._isSkeletonSupport()) {
                    var t = this._getData();
                    if (t instanceof u.TableDataSourceAdapter) {
                        var o = t._startIndex;
                        if (null != o && o > 0) return
                    }
                    this._isExternalScrollEnabled() && this._bufferScrollerForLastRow(), this._removeAllTableBodyRows()
                }
                this._showStatusTimeout = setTimeout(function() {
                    this._refreshTableStatusPosition(!0), this._showStatusTimeout = null
                }.bind(this), this._getShowStatusDelay())
            }
        }
    }, D.prototype._showProgressiveLoading = function() {
        if (this._isSkeletonSupport()) {
            var e = this._getTableBodyRows(),
                t = this._getTableTempSkeletonRow();
            if (null != e && e.length > 0 && !t) {
                (t = this._createTableBodyRow()).classList.add(D.CSS_CLASSES._TABLE_FETCH_SKELETON_ROW_CLASS);
                var o = this._createTableBodyCell(),
                    i = this._getColumnDefs().length;
                o.colSpan = this._isDefaultSelectorEnabled() ? i + 1 : i, o.classList.add(D.CSS_CLASSES._TABLE_SKELETON_CELL_CLASS);
                for (var l = 0; l < 3; l++) o.appendChild(this._createSkeletonRow());
                t.appendChild(o), this._appendElementToTableBody(t, this._getTableBody()), this._skeletonHWMSFadeInEndListener = function() {
                    t.classList.remove("oj-animation-skeleton-fade-in"), t.querySelectorAll(".oj-table-skeleton").forEach(function(e) {
                        e.classList.add("oj-animation-skeleton")
                    }), t.removeEventListener("animationend", this._skeletonHWMSFadeInEndListener)
                }.bind(this), t.addEventListener("animationend", this._skeletonHWMSFadeInEndListener), t.classList.add("oj-animation-skeleton-fade-in")
            }
        }
    }, D.prototype._insertSkeletonRow = function(e) {
        if (this._isSkeletonSupport()) {
            var t, o = this._getTableBodyRows();
            if (-1 === e && this._isAddNewRowEnabled()) t = this._getPlaceHolderRow();
            else {
                if (!(null != o && o.length > 0)) return;
                t = this._getTableBodyRow(e)
            }
            for (var i = t.children, l = 0; l < i.length; l++) i[l].classList.add(D.CSS_CLASSES._TABLE_HIDDEN_CELL_CLASS);
            var n = this._createTableBodyCell(),
                s = this._getColumnDefs().length;
            n.colSpan = this._isDefaultSelectorEnabled() ? s + 1 : s, n.classList.add(D.CSS_CLASSES._TABLE_SKELETON_CELL_CLASS), -1 === e && (n.style[D.CSS_PROP._TOP] = i[0].style.top);
            var a = this._createSkeletonRow();
            n.appendChild(a), t.insertBefore(n, t.firstChild), this._skeletonHWMSFadeInEndListener = function() {
                a.classList.remove("oj-animation-skeleton-fade-in"), a.querySelectorAll(".oj-table-skeleton").forEach(function(e) {
                    e.classList.add("oj-animation-skeleton")
                }), a.removeEventListener("animationend", this._skeletonHWMSFadeInEndListener)
            }.bind(this), a.addEventListener("animationend", this._skeletonHWMSFadeInEndListener), a.classList.add("oj-animation-skeleton-fade-in")
        }
    }, D.prototype._removeSkeletonRow = function(e) {
        if (this._isSkeletonSupport()) {
            var t, o = this._getTableBodyRows();
            if (-1 === e && this._isAddNewRowEnabled()) t = this._getPlaceHolderRow();
            else {
                if (!(null != o && o.length > 0)) return;
                t = this._getTableBodyRow(e)
            }
            var i = t.children[0],
                l = i.children[0];
            l.classList.remove("oj-animation-skeleton-fade-in"), l.removeEventListener("animationend", this._skeletonHWMSFadeInEndListener), t.removeChild(i);
            for (var n = t.children, s = 0; s < n.length; s++) n[s].classList.remove(D.CSS_CLASSES._TABLE_HIDDEN_CELL_CLASS)
        }
    }, D.prototype._hideStatusMessage = function() {
        this._clearShowStatusTimeout();
        var e = this._getTableTempSkeletonRow();
        if (this._statusMessageShown || e) {
            var t = this._getTableStatusMessage();
            if (t.style[D.CSS_PROP._DISPLAY] = D.CSS_VAL._NONE, this._isSkeletonSupport())
                if (e) this._getTableBody().removeChild(e);
                else
                    for (var o = t.childNodes, i = o.length; i > 0; i--) t.removeChild(o[i - 1]);
            this._statusMessageShown = !1
        }
    }, D.prototype._isStatusMessageShown = function() {
        return this._statusMessageShown
    }, D.prototype._getDefaultOptions = function() {
        if (null == this._defaultOptions) {
            this._defaultOptions = {};
            const e = Object.keys(D._CSS_Vars),
                t = e.map(e => D._CSS_Vars[e]),
                o = g.getCachedCSSVarValues(t);
            e.forEach((e, t) => {
                this._defaultOptions[e] = o[t]
            })
        }
        return this._defaultOptions
    }, D.prototype._getShowStatusDelay = function() {
        return S.getCSSTimeUnitAsMillis(this._getDefaultOptions().showIndicatorDelay)
    }, D.prototype._isSkeletonSupport = function() {
        return "skeleton" === this._getDefaultOptions().loadIndicator
    }, D.prototype._showNoDataMessage = function() {
        if (!this._noDataMessageShown) {
            var e = this._getTableBodyMessageRow(),
                t = this._getData(),
                o = this._getSlotTemplate("noData");
            if (this._isDefaultTemplateSlotValid("noData") && null !== o) {
                var i = this._getTable(),
                    l = this._getTableBody();
                i.classList.add(D.CSS_CLASSES._TABLE_NO_DATA_CONTAINER_CLASS);
                var n = document.createElement(D.DOM_ELEMENT._TR);
                n.id = this.createSubId("noData"), n.classList.add(D.CSS_CLASSES._TABLE_NO_DATA_ROW_CLASS), this._appendElementToTableBody(n, l);
                var s = document.createElement(D.DOM_ELEMENT._TD),
                    a = this._getColumnDefs().length;
                this._isDefaultSelectorEnabled() && (a += 1), s.setAttribute(D.DOM_ATTR._COLSPAN, a), n.appendChild(s);
                var r = this._getTemplateEngine();
                if (null != r) r.execute(this._getRootElement(), o, {}, null, l).forEach(function(e) {
                    s.appendChild(e)
                })
            } else {
                var _ = null;
                _ = null != this.options.emptyText ? this.options.emptyText : this.getTranslatedString(D._BUNDLE_KEY._MSG_NO_DATA);
                var h = null != t ? _ : this.getTranslatedString(D._BUNDLE_KEY._MSG_INITIALIZING);
                null == e ? this._createTableBodyMessageRow(this._getColumnDefs().length, h) : this._setTableBodyMessage(h)
            }
            this._noDataMessageShown = !0
        }
    }, D.prototype._hideNoDataMessage = function() {
        if (this._noDataMessageShown) {
            var e = this._getTableBodyMessageRow();
            if (null != e) c(e).remove();
            else {
                var t = this._getTable();
                if (t.classList.contains(D.CSS_CLASSES._TABLE_NO_DATA_CONTAINER_CLASS)) {
                    t.classList.remove(D.CSS_CLASSES._TABLE_NO_DATA_CONTAINER_CLASS);
                    var o = this._getTableNoDataRow();
                    null != o && (this._cleanTemplateNodes(o), c(o).remove())
                }
            }
            this._noDataMessageShown = !1
        }
    }, D.prototype._handleContextMenuResizePopup = function() {
        let e, t;
        if ("redwood" === g.parseJSONFromFontFamily("oj-theme-json").behavior) {
            let o = document.getElementById(this._getTableId() + "_resize_column_width_input"),
                i = this._getContextMenuResizeDialog();
            e = parseInt(i.getAttribute("data-oj-columnIdx"), 10), this._IsCustomElement() ? (t = o.value, i.close()) : (t = c(o).ojInputNumber("option", "value"), c(i).ojDialog("close"))
        } else {
            let o = document.getElementById(this._getTableId() + "_resize_popup_spinner"),
                i = this._getContextMenuResizePopup();
            e = parseInt(i.getAttribute("data-oj-columnIdx"), 10), this._IsCustomElement() ? (t = o.value, i.close()) : (t = c(o).ojInputNumber("option", "value"), c(i).ojPopup("close"))
        }
        for (var o = [], i = this.options.columns.length, l = 0; l < i; l++) o[l] = c.extend({}, {}, this.options.columns[l]);
        var n = this._getLayoutManager().getMinimumForcedOffsetWidth(e);
        o[e].width = Math.max(t, n), this.option("columns", o, {
            _context: {
                writeback: !0,
                internalSet: !0
            }
        }), this._clearCachedMetadata(), this._queueTask(function() {
            this._getLayoutManager().notifyTableUpdate(D._UPDATE._COL_RESIZE), setTimeout(function() {
                this._getTable().focus()
            }.bind(this), 0)
        }.bind(this))
    }, D.prototype._handleContextMenuSelect = function(e, t) {
        var o, i = (o = t ? t.item : c(e.target)).attr(D._DATA_OJ_COMMAND),
            l = this._getFirstAncestor(this._contextMenuEvent.target, "." + D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS, !0);
        l = null == l ? this._contextMenuEventHeaderColumn : l;
        var n = this._getFirstAncestor(this._contextMenuEvent.target, "." + D.CSS_CLASSES._TABLE_DATA_CELL_CLASS, !0),
            s = null;
        if (null != l && (s = this._getElementColumnIdx(l)), null != n && (s = this._getElementColumnIdx(n)), null !== s)
            if ("oj-table-sortAsc" === i) this._handleSortTableHeaderColumn(s, !0, e);
            else if ("oj-table-sortDsc" === i) this._handleSortTableHeaderColumn(s, !1, e);
        else if ("oj-table-enableNonContiguousSelection" === i) this._nonContiguousSelection = !0, this._removeTableBodyRowTouchSelectionAffordance(), o.attr(D._DATA_OJ_COMMAND, "oj-table-disableNonContiguousSelection"), o.children().first().text(this.getTranslatedString("labelDisableNonContiguousSelection"));
        else if ("oj-table-disableNonContiguousSelection" === i) this._nonContiguousSelection = !1, o.attr(D._DATA_OJ_COMMAND, "oj-table-enableNonContiguousSelection"), o.children().first().text(this.getTranslatedString("labelEnableNonContiguousSelection"));
        else if ("oj-table-resize" === i) {
            var a = l || n,
                r = this._getLayoutManager().getColumnWidthProperty(a),
                _ = this._getTable();
            null != l ? _ = l : null != n && (_ = n);
            if ("redwood" === g.parseJSONFromFontFamily("oj-theme-json").behavior) {
                let e = this._getContextMenuResizeDialog();
                e.setAttribute("data-oj-columnIdx", s);
                let t = document.getElementById(this._getTableId() + "_resize_column_width_input");
                this._IsCustomElement() ? (t.value = Math.round(r), e.open(_)) : (c(t).ojInputNumber("option", "value", Math.round(r)), c(e).ojDialog("open", _))
            } else {
                let e = this._getContextMenuResizePopup();
                e.setAttribute("data-oj-columnIdx", s);
                let t = document.getElementById(this._getTableId() + "_resize_popup_spinner");
                this._IsCustomElement() ? (t.value = Math.round(r), e.open(_)) : (c(t).ojInputNumber("option", "value", Math.round(r)), c(e).ojPopup("open", _))
            }
        }
    }, D.prototype._registerResizeListener = function() {
        var e = this._getTableContainer();
        this._resizeListener || (this._resizeListener = function() {
            var e = this._getLayoutManager(),
                t = window.getComputedStyle(this._getTableContainer());
            e.isSizingRefreshRequired(e.getExactOffsetWidth(t), e.getExactOffsetHeight(t)) && (e.notifyTableUpdate(D._UPDATE._RESIZE), this._hasPendingTasks() || this._syncTableSizing(!0))
        }.bind(this)), this._isResizeListenerAdded || (S.addResizeListener(e, this._resizeListener, 50), this._isResizeListenerAdded = !0)
    }, D.prototype._unregisterResizeListener = function() {
        var e = this._getTableContainer();
        S.removeResizeListener(e, this._resizeListener), this._isResizeListenerAdded = !1
    }, D.prototype._unregisterChildStateListeners = function(e) {
        for (var t = e.querySelectorAll("*"), o = 0; o < t.length; o++) this._UnregisterChildNode(t[o])
    }, D.prototype._isLoadMoreOnScroll = function() {
        return this.options.scrollPolicy === D._OPTION_SCROLL_POLICY._AUTO ? !(this._data instanceof u.TableDataSourceAdapter) : this.options.scrollPolicy !== D._OPTION_SCROLL_POLICY._LOAD_ALL
    }, D.prototype._isTableHeaderless = function() {
        for (var e = this._getColumnDefs(), t = e.length, o = 0; o < t; o++) {
            var i = this._getSlotTemplate(e[o][D._HEADER_TEMPLATE]);
            if (null != e[o].headerText || null != e[o].headerStyle || null != e[o].sortable && e[o].sortable !== D._OPTION_DISABLED || null != e[o].sortProperty || null != e[o].headerRenderer || null != i) return !1
        }
        if (this._isDefaultHeaderTemplateSlotValid() && null != this._getSlotTemplate("headerTemplate")) return !1;
        return !0
    }, D.prototype._isTableFooterless = function() {
        for (var e = this._getColumnDefs(), t = e.length, o = 0; o < t; o++) {
            var i = this._getColumnRenderer(o, "footer"),
                l = this._getSlotTemplate(e[o][D._FOOTER_TEMPLATE]);
            if (null != i) return !1;
            if (null != l) return !1
        }
        if (this._isDefaultFooterTemplateSlotValid() && null != this._getSlotTemplate("footerTemplate")) return !1;
        return !0
    }, D.prototype._isTableHeaderColumnsRendered = function() {
        return !0 === this._renderedTableHeaderColumns
    }, D.prototype._isTableRefreshNeeded = function(e, t, o) {
        var i, l = this.options;
        return "contextMenu" === e && t === "#" + this._getTableId() + "_contextmenu" || "columns" === e && !this._isColumnMetadataUpdated(t) || "scrollToKey" === e || "addRowDisplay" === e || "scrollPosition" === e || "selection" === e || "selected" === e || "currentRow" === e || "editRow" === e || "scrollPolicyOptions" === e && this._isStickyLayoutEnabled() && null != o && ("scrollerOffsetTop" === o.subkey || "scrollerOffsetBottom" === o.subkey || "scrollerOffsetStart" === o.subkey || "scrollerOffsetEnd" === o.subkey) || u.Object.compareValues(t, l[e]) ? i = !1 : ("verticalGridVisible" !== e && "display" !== e || (this._renderedTableHeaderColumns = !1), i = !0), i
    }, D.prototype._isTableSortable = function() {
        for (var e = this._getColumnDefs(), t = e.length, o = 0; o < t; o++)
            if (e[o].sortable === D._OPTION_ENABLED) return !0;
        return !1
    }, D.prototype._isTableColumnsResizable = function() {
        for (var e = this._getColumnDefs(), t = e.length, o = 0; o < t; o++)
            if (e[o].resizable === D._OPTION_ENABLED) return !0;
        return !1
    }, D.prototype._isTouchDevice = function() {
        return null == this._isTouch && (this._isTouch = A.isMobileTouchDevice()), this._isTouch
    }, D.prototype._processSlottedChildren = function() {
        var e = this._getTableBottomSlot();
        null != e && c(e).remove();
        for (var t = L.CustomElementUtils.getSlotMap(this._getRootElement()), o = Object.keys(t), i = 0; i < o.length; i++) {
            var l = o[i];
            if ("bottom" === l) {
                var n = t[l];
                if (null != n) {
                    e = this._createTableBottomSlot();
                    for (var s = 0; s < n.length; s++) e.appendChild(n[s])
                }
            }
        }
    }, D.prototype._handleSortTableHeaderColumn = function(e, t, o) {
        this._clearSortedHeaderColumn(e);
        var i = this._getColumnDefs()[e],
            l = null == i.sortProperty ? i.field : i.sortProperty;
        this._invokeDataSort(l, t, o), this._sortColumn = i, this._refreshSortTableHeaderColumn(l, t)
    }, D.prototype._processFetchSort = function(e) {
        try {
            var t = e.fetchParameters,
                o = this._getColumnDefs(),
                i = t[D._CONST_SORTCRITERIA];
            if (null != i && i.length > 0) {
                var l = i[0].attribute,
                    n = i[0].direction === D._COLUMN_SORT_ORDER._ASCENDING;
                this._refreshSortTableHeaderColumn(l, n), this._setCurrentRow(this.options.currentRow);
                for (var s = null, a = o.length, r = 0; r < a; r++) {
                    var _ = o[r];
                    if (l === (null == _.sortProperty ? _.field : _.sortProperty)) {
                        s = r;
                        break
                    }
                }
                null != s && setTimeout(function() {
                    this._scrollColumnIntoViewport(s)
                }.bind(this), 0)
            } else this._clearSortedHeaderColumn()
        } catch (e) {
            E.error(e)
        }
    }, D.prototype._handleMouseEnterColumnHeader = function(e) {
        if (e) {
            this._isColumnSelectionEnabled() && e.classList.add(D.MARKER_STYLE_CLASSES._HOVER);
            var t = this._getElementColumnIdx(e);
            (e.classList.contains(D.CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS) || e.classList.contains(D.CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS) || e.classList.contains(D.CSS_CLASSES._COLUMN_HEADER_DEFAULT_SORT_ICON_CLASS)) && e.classList.add(D.MARKER_STYLE_CLASSES._HOVER), this._showTableHeaderColumnSortIcon(t)
        }
    }, D.prototype._handleMouseLeaveColumnHeader = function(e) {
        if (e) {
            e.classList.remove(D.MARKER_STYLE_CLASSES._HOVER);
            var t = this._getElementColumnIdx(e);
            this._hideTableHeaderColumnSortIcon(t)
        }
    }, D.prototype._showTableHeaderColumnSortIcon = function(e) {
        if (this._getColumnDefs()[e].sortable === D._OPTION_ENABLED) {
            var t = this._getTableHeaderColumn(e);
            if (!t) return;
            if (null == c(t).data("sorted")) {
                var o = this._getSortIconContainer(t),
                    i = this._getSortIcon(t);
                null != o && null != i && (i.classList.remove(D.MARKER_STYLE_CLASSES._DISABLED), i.classList.add(D.MARKER_STYLE_CLASSES._ENABLED), i.classList.add(D.MARKER_STYLE_CLASSES._DEFAULT))
            }
        }
    }, D.prototype._hideTableHeaderColumnSortIcon = function(e) {
        if (this._getColumnDefs()[e].sortable === D._OPTION_ENABLED) {
            var t = this._getTableHeaderColumn(e);
            if (null == c(t).data("sorted")) {
                var o = this._getSortIconContainer(t),
                    i = this._getSortIcon(t);
                null != o && null != i && (o.setAttribute(D.DOM_ATTR._TITLE, this.getTranslatedString("labelSortAsc")), i.classList.remove(D.CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS), i.classList.remove(D.CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS), i.classList.add(D.CSS_CLASSES._COLUMN_HEADER_DEFAULT_SORT_ICON_CLASS), i.classList.add(D.MARKER_STYLE_CLASSES._DISABLED), i.classList.remove(D.MARKER_STYLE_CLASSES._ENABLED), i.classList.remove(D.MARKER_STYLE_CLASSES._DEFAULT))
            }
        }
    }, D.prototype._refreshSortTableHeaderColumn = function(e, t) {
        for (var o, i = this._getColumnDefs(), l = null, n = i.length, s = 0; s < n; s++) {
            var a = i[s];
            if (e === (null == a.sortProperty ? a.field : a.sortProperty)) {
                l = s;
                break
            }
        }
        if (null != l) {
            this._clearSortedHeaderColumn(l);
            var r = this._getTableHeaderColumn(l);
            if (null != r) {
                var _ = c(r).data("sorted"),
                    h = this._getSortIconContainer(r);
                null != (o = this._getSortIcon(r)) && (o.classList.add(D.MARKER_STYLE_CLASSES._DEFAULT), o.classList.remove(D.MARKER_STYLE_CLASSES._DISABLED)), t && _ !== D._COLUMN_SORT_ORDER._ASCENDING ? (c(r).data("sorted", D._COLUMN_SORT_ORDER._ASCENDING), null != o && (h.setAttribute(D.DOM_ATTR._TITLE, this.getTranslatedString("labelSortDsc")), o.classList.remove(D.CSS_CLASSES._COLUMN_HEADER_DEFAULT_SORT_ICON_CLASS), o.classList.remove(D.CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS), o.classList.add(D.CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS))) : t || _ === D._COLUMN_SORT_ORDER._DESCENDING || (c(r).data("sorted", D._COLUMN_SORT_ORDER._DESCENDING), null != o && (h.setAttribute(D.DOM_ATTR._TITLE, this.getTranslatedString("labelSortAsc")), o.classList.remove(D.CSS_CLASSES._COLUMN_HEADER_DEFAULT_SORT_ICON_CLASS), o.classList.remove(D.CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS), o.classList.add(D.CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS)))
            }
        }
    }, D.prototype._getSortedTableHeaderColumnIdx = function() {
        for (var e = this._getTableHeaderColumns(), t = e ? e.length : 0, o = 0; o < t; o++) {
            if (null != c(e[o]).data("sorted")) return o
        }
        return null
    }, D.prototype._clearSortedHeaderColumn = function(e) {
        var t = this._getSortedTableHeaderColumnIdx();
        if (null != t) {
            var o = this._getTableHeaderColumn(t);
            if (c(o).data("sorted", null), null == e || t !== e) this._hideTableHeaderColumnSortIcon(t);
            else {
                var i = this._getSortIcon(o);
                null != i && i.classList.remove(D.MARKER_STYLE_CLASSES._SELECTED)
            }
        }
    }, D.prototype._getColumnDefs = function() {
        return this._columnDefArray || (this._columnDefArray = this._getColumnMetadata()), this._columnDefArray
    }, D.prototype._getColumnMetadata = function(e) {
        var t, o = null != e ? e : this.options.columns,
            i = this.options.columnsDefault;
        if ((0 === o.length || 1 === o.length && null == o[0].id && null == o[0].headerText && null == o[0].field) && null == i.headerText && null == i.field) return [];
        var l = [],
            n = o.length;
        for (t = 0; t < n; t++) l[t] = c.extend({}, i, o[t]);
        var s = [],
            a = l.length;
        for (t = 0; t < a; t++) s.push(l[t]);
        var r = this._getData(),
            _ = !1;
        for (null != r && null != r.getCapability("sort") && (_ = !0), t = 0; t < a; t++) null == s[t][D._FIELD_ID] && (s[t][D._FIELD_ID] = D._COLUMN_HEADER_ID_PREFIX + t), !_ || null != s[t].sortable && s[t].sortable !== D._OPTION_AUTO || (s[t].sortable = D._OPTION_ENABLED);
        return s
    }, D.prototype._getColumnRenderer = function(e, t) {
        var o = this._getColumnDefs()[e],
            i = null;
        return "cell" === t ? i = o.renderer : "footer" === t ? i = o.footerRenderer : "header" === t && (i = o.headerRenderer), this._WrapCustomElementRenderer(i)
    }, D.prototype._getRowRenderer = function() {
        return this._WrapCustomElementRenderer(this.options.rowRenderer)
    }, D.prototype._isLastRowInViewport = function() {
        var e = this._getTableBodyRows(),
            t = e[e.length - 1];
        return this._getLayoutManager().getVerticalOverflowDiff(t).bottom - t.offsetHeight <= 0
    }, D.prototype._registerDomScroller = function() {
        this._unregisterDomScroller();
        var e = this._getLayoutManager();
        this._domScrollerSuccessFunc = function(t) {
            if (this._clearDataWaitingState(), null != t) {
                this._noMoreData = !1, t.maxCountLimit && (this._noMoreData = !0, this._handleScrollerMaxRowCount());
                var o = t[D._CONST_VALUE];
                if (null != o) {
                    var i, l = o[D._CONST_DATA],
                        n = o.metadata.map(function(e) {
                            return e[D._CONST_KEY]
                        }),
                        s = o[D._CONST_METADATA];
                    for (i = n.length - 1; i >= 0; i--) null !== this._getRowIdxForRowKey(n[i]) && (l.splice(i, 1), n.splice(i, 1), s.splice(i, 1));
                    if (l.length > 0) return void this._queueTask(function() {
                        e.notifyTableUpdate(D._UPDATE._ROWS_ADDED);
                        var o = this._getTableBodyRows().length,
                            a = [];
                        for (i = 0; i < l.length; i++) a[i] = o + i;
                        return this._refreshTableBody({
                            isMouseWheel: t.isMouseWheel,
                            data: l,
                            keys: n,
                            metadata: s,
                            indexes: a
                        }, o, !0).then(function() {
                            e.clearCachedDimensions(), t.done ? (this._noMoreData = !0, this._syncScrollPosition()) : this._syncScrollPosition(null, null != this._scrollPosition)
                        }.bind(this))
                    }.bind(this))
                }
                t.done ? (this._noMoreData = !0, this._clearScrollBuffer(), this._syncScrollPosition()) : (this._clearScrollBuffer(), this._syncScrollPosition(null, null != this._scrollPosition))
            } else this._clearScrollBuffer(), this._syncScrollPosition()
        }.bind(this);
        var t = this._getTableBodyRows().length;
        this._requiresDomScrollerRefresh = !1, this._domScroller = new b(e.getScroller(), this._getData(), {
            asyncIterator: this._dataProviderAsyncIterator,
            contentElement: e.getContentElement(),
            fetchSize: this.options.scrollPolicyOptions.fetchSize,
            maxCount: this.options.scrollPolicyOptions.maxCount,
            initialRowCount: t,
            success: this._domScrollerSuccessFunc.bind(this),
            request: this._handleDataFetchStart.bind(this),
            localKeyValidator: function(e) {
                return null !== this._findRowElementByKey(e)
            }.bind(this),
            beforeFetch: function(e) {
                return null == this._idleCallback && (this._fetchBySyncScroll = Math.abs(this._scrollY - e) <= 1, this._setDataWaitingState(!1), this._showProgressiveLoading(), !0)
            }.bind(this),
            beforeScroll: this._clearScrollPosBusyState.bind(this),
            fetchTrigger: 4
        })
    }, D.prototype._unregisterDomScroller = function() {
        null != this._domScroller && (this._domScroller.destroy(), this._domScroller = null)
    }, D.prototype._updateHeaderTop = function(e) {
        if (this._isDefaultSelectorEnabled()) {
            var t = this._getTableSelectorColumn();
            null != t && (t.style[D.CSS_PROP._TOP] = e + "px")
        }
        var o = this._getTableHeaderColumns();
        if (null != o)
            for (var i = 0; i < o.length; i++) o[i].style[D.CSS_PROP._TOP] = e + "px"
    }, D.prototype._updateFooterBottom = function(e) {
        if (this._isDefaultSelectorEnabled()) {
            var t = this._getTableFooterSelectorCell();
            null != t && (t.style[D.CSS_PROP._BOTTOM] = e + "px")
        }
        var o = this._getTableFooterCells();
        if (null != o)
            for (var i = 0; i < o.length; i++) o[i].style[D.CSS_PROP._BOTTOM] = e + "px"
    }, D.prototype._handleScrollerMaxRowCount = function() {
        var e = this.getTranslatedString("msgScrollPolicyMaxCountSummary"),
            t = this.getTranslatedString("msgScrollPolicyMaxCountDetail");
        E.info(e + "\n" + t)
    }, D.prototype._clearIdleCallback = function() {
        null != this._idleCallback && (A.isRequestIdleCallbackSupported() ? (window.cancelIdleCallback(this._idleCallback), window.cancelAnimationFrame(this._idleCallback)) : window.cancelAnimationFrame(this._idleCallback), this._idleCallback = null)
    }, D.prototype._requestIdleCallback = function(e, t) {
        if (A.isRequestIdleCallbackSupported()) {
            var o, i = window.setTimeout(function() {
                this._idleCallback = window.requestAnimationFrame(function() {
                    t()
                }), i = null
            }, 250);
            e && u.AgentUtils.getAgentInfo().engine === u.AgentUtils.ENGINE.BLINK && (o = {
                timeout: 100
            }), this._idleCallback = window.requestIdleCallback(function(e) {
                null != i && (window.clearTimeout(i), t(e))
            }, o)
        } else this._idleCallback = window.requestAnimationFrame(function() {
            t()
        })
    }, D.prototype._renderRowsWhenIdle = function(e, t, o, i, l, n) {
        if (0 === e.length) return this._idleCallback = null, void this._afterRowsRendered(t).then(function(e) {
            i(e)
        }, function(e) {
            l(e)
        });
        var s, a = this,
            r = 0;

        function _() {
            window.requestAnimationFrame(function() {
                a._getLayoutManager().handleAfterRowsProcessed(s), a._appendElementToTableBody(s, t), a._renderRowsWhenIdle(e, t, o + r, i, l, n), n && u.AgentUtils.getAgentInfo().browser === u.AgentUtils.BROWSER.FIREFOX && t.scrollTop !== a._scrollTop && (t.scrollTop = a._scrollTop)
            })
        }
        this._requestIdleCallback(n, function(i) {
            void 0 === i ? function() {
                s = document.createDocumentFragment();
                for (var i = 0; i < D._BATCH_PROCESS_SIZE_WHEN_IDLE && 0 !== e.length; i++) 0 !== r || a._getLayoutManager().isTableWidthConstrained() || (t.style[D.CSS_PROP._OVERFLOW_X] = "hidden"), a._renderRow(e.shift(), s, o), r += 1;
                _()
            }() : function(i) {
                var l = i.timeRemaining(),
                    n = 0;
                for (s = document.createDocumentFragment();
                    (l > n || i.didTimeout) && 0 !== e.length;) 0 !== r || a._getLayoutManager().isTableWidthConstrained() || (t.style[D.CSS_PROP._OVERFLOW_X] = "hidden"), a._renderRow(e.shift(), s, o), r += 1, n = l - i.timeRemaining(), l = i.timeRemaining();
                _()
            }(i)
        })
    }, D.prototype._renderRow = function(e, t, o) {
        var i = e.row,
            l = e.rowIdx;
        if (null != i) {
            var n = this._createTableBodyRow();
            n[D._ROW_ITEM_EXPANDO] = i, this._styleTableBodyRow(n, !0), this._insertTableBodyRow(l, n, i, t), this._refreshTableBodyRow(l, i, n, t, o)
        }
    }, D.prototype._afterRowsRendered = function(e) {
        this._clearCachedDomRowData(), this._clearIdleRenderBusyState(), this._hasRowOrCellRendererOrTemplate() && f.subtreeAttached(e);
        var t = this._getTableBodyRows();
        return t.length > 0 ? this._finalizeBodyRowRendering(t) : Promise.resolve(!0)
    }, D.prototype._getRowIdxsForElementsWithStyleClass = function(e) {
        var t = this._tableQuerySelectorAll(this._getTable(), e),
            o = [];
        if (t && t.length > 0)
            for (var i = t.length, l = 0; l < i; l++) {
                for (var n = this._getElementRowIdx(t[l]), s = !1, a = o.length, r = 0; r < a; r++) o[r] === n && (s = !0);
                s || o.push(n)
            }
        return o
    }, D.prototype._getColumnIdxsForElementsWithStyleClass = function(e) {
        var t = this._tableQuerySelectorAll(this._getTable(), e),
            o = [];
        if (t && t.length > 0)
            for (var i = t.length, l = 0; l < i; l++) {
                var n = this._getElementColumnIdx(t[l]),
                    s = !1;
                null === n && (t[l].classList.contains(D.CSS_CLASSES._COLUMN_HEADER_SELECTOR_CELL_CLASS) || t[l].classList.contains(D.CSS_CLASSES._TABLE_FOOTER_SELECTOR_CELL_CLASS)) && (n = -1);
                for (var a = o.length, r = 0; r < a; r++) o[r] === n && (s = !0);
                s || o.push(n)
            }
        return o
    }, D.prototype._syncTableSizing = function(e) {
        var t = this._getLayoutManager();
        t.isTableLayoutRefreshRequired() && (e || t.isSizingRefreshRequired()) && t.refreshTableDimensions();
        var o = this._updateScrollBufferHeight();
        this._isLoadMoreOnScroll() && !this._dataFetching && this._domScroller ? (this._setDataWaitingState(!1), this._domScroller.checkViewport(o > 0 || this._noDataMessageShown).then(this._domScrollerSuccessFunc, this._checkViewportRejected.bind(this))) : (this._clearScrollBuffer(), this._syncScrollPosition())
    }, D.prototype._updateScrollBufferHeight = function() {
        var e = 0,
            t = this._getLayoutManager(),
            o = this._getTableBodyScrollBuffer();
        if (null != o && (e = o.offsetHeight) > 0) {
            var i = t.getVerticalOverflowDiff(o).bottom,
                l = Math.min(Math.max(0, e - i), e);
            l !== e && (e = l, o.style[D.CSS_PROP._HEIGHT] = e + D.CSS_VAL._PX)
        }
        return e
    }, D.prototype._clearScrollBuffer = function() {
        var e = this._getTableBodyScrollBuffer();
        null != e && (this._getTableBody().removeChild(e), this._clearDomCache(D.CSS_CLASSES._TABLE_BUFFER_ROW_CLASS))
    }, D.prototype._addSingleTableBodyRow = function(e, t, o, i) {
        var l = this._createTableBodyRow();
        return l[D._ROW_ITEM_EXPANDO] = t, this._styleTableBodyRow(l, !0), this._insertTableBodyRow(e, l, t, o), l = this._refreshTableBodyRow(e, t, l, o, i), c(l).data("rowKey", t.metadata.key), o || f.subtreeAttached(l), l
    }, D.prototype._animateVisibleRows = function(e, t, o) {
        if (o = null == this._animationActionOverride ? o : this._animationActionOverride, !this._hasAdditionalPendingTasks()) {
            this._animationActionOverride = null;
            var i, l = this._getVisibleRowIdxs(),
                n = [];
            for (i = 0; i < t.length; i++) - 1 === l.indexOf(t[i]) && n.push(t[i]);
            for (n.sort(function(e, t) {
                    return e - t
                }), i = n.length - 1; i >= 0; i--) e.splice(n[i], 1);
            return this._unregisterResizeListener(), this._animateTableBodyRows(e, o).then(function() {
                this._registerResizeListener()
            }.bind(this))
        }
        return this._animationActionOverride = "update", Promise.resolve()
    }, D.prototype._cleanTemplateNodes = function(e) {
        var t = this._getTemplateEngine();
        null != t && t.clean(e)
    }, D.prototype._clearCachedMetadata = function() {
        this._columnDefArray = null, this._setTableActionableMode(!1)
    }, D.prototype._getSlotTemplate = function(e) {
        if (this._IsCustomElement() && e) {
            var t = L.CustomElementUtils.getSlotMap(this._getRootElement())[e];
            if (t && t.length > 0 && "template" === t[0].tagName.toLowerCase()) return t[0]
        }
        return null
    }, D.prototype._isDefaultCellTemplateSlotValid = function() {
        return this._isDefaultTemplateSlotValid("cellTemplate")
    }, D.prototype._isDefaultRowTemplateSlotValid = function() {
        return this._isDefaultTemplateSlotValid("rowTemplate")
    }, D.prototype._isDefaultHeaderTemplateSlotValid = function() {
        return this._isDefaultTemplateSlotValid("headerTemplate")
    }, D.prototype._isDefaultFooterTemplateSlotValid = function() {
        return this._isDefaultTemplateSlotValid("footerTemplate")
    }, D.prototype._isDefaultAddRowTemplateSlotValid = function() {
        return this._isDefaultTemplateSlotValid("addRowTemplate")
    }, D.prototype._isDefaultAddRowCellTemplateSlotValid = function() {
        return this._isDefaultTemplateSlotValid("addRowCellTemplate")
    }, D.prototype._isDefaultTemplateSlotValid = function(e) {
        for (var t = this._getColumnDefs(), o = t.length, i = 0; i < o; i++) {
            var l = t[i][D._CELL_TEMPLATE],
                n = t[i][D._HEADER_TEMPLATE],
                s = t[i][D._FOOTER_TEMPLATE];
            if (e === l || e === n || e === s) return !1
        }
        return !0
    }, D.prototype._getTemplateEngine = function() {
        return this._templateEngine
    }, D.prototype._getVisibleRowIdxs = function() {
        var e = [],
            t = this._getTableBody(),
            o = this._getTableBodyRows();
        if (o.length > 0 && t.offsetHeight > 0) {
            var i = c(window).height(),
                l = t.getBoundingClientRect();
            if (l.top > i) return e;
            var n = l.left >= 0 ? l.left + 1 : l.right - 1,
                s = l.top >= 0 ? l.top : 0,
                a = document.elementFromPoint(n, s),
                r = null;
            null != a && (r = this._getElementRowIdx(a));
            var _, h, d = null != r ? r : 0;
            if (l.bottom > i) null != (h = document.elementFromPoint(n, i - 1)) && (_ = this._getElementRowIdx(h));
            else {
                var u = parseInt(window.getComputedStyle(t).borderBottomWidth, 10) || 0,
                    S = l.bottom >= 0 ? l.bottom - u - 1 : 0;
                null != (h = document.elementFromPoint(n, S)) && (_ = this._getElementRowIdx(h))
            }
            null == _ && (_ = o.length - 1);
            for (var E = d; E <= _; E++) e.push(E)
        }
        return e
    }, D.prototype._hasRowOrCellRendererOrTemplate = function(e) {
        if (null != this._getRowRenderer()) return !0;
        var t = null,
            o = null,
            i = this._getColumnDefs();
        if (null != e) t = this._getColumnRenderer(e, "cell"), o = this._getSlotTemplate(i[e][D._CELL_TEMPLATE]);
        else
            for (var l = i.length, n = 0; n < l && null == (t = this._getColumnRenderer(n, "cell")) && null == (o = this._getSlotTemplate(i[n][D._CELL_TEMPLATE])); n++);
        if (null != t || null != o) return !0;
        if (this._isDefaultRowTemplateSlotValid() && null != this._getSlotTemplate("rowTemplate")) return !0;
        if (this._isDefaultCellTemplateSlotValid() && null != this._getSlotTemplate("cellTemplate")) return !0;
        return !1
    }, D.prototype._initFetch = function(e, t) {
        var o = e || {},
            i = this._getData(),
            l = this._getLayoutManager();
        return null == i || !u.DataProviderFeatureChecker.isDataProvider(i) || this._isPagingModelDataProvider() && !t ? null == i ? this._queueTask(function() {
            return l.notifyTableUpdate(t ? D._UPDATE._DATA_SORT : D._UPDATE._REFRESH), Promise.resolve()
        }) : void 0 : this._queueTask(function() {
            return l.notifyTableUpdate(t ? D._UPDATE._DATA_SORT : D._UPDATE._REFRESH), this._isExternalScrollEnabled() || (this._scrollTop = 0, l.getScroller().scrollTop = 0), i instanceof u.TableDataSourceAdapter && (o.fetchType = "init", this._isLoadMoreOnScroll() && (o[D._CONST_OFFSET] = 0)), this._invokeDataFetchRows(o)
        }.bind(this))
    }, D.prototype._initTemplateEngine = function() {
        this._queueTask(function() {
            var e;
            try {
                e = T.__getTemplateEngine().then(function(e) {
                    this._templateEngine = e
                }.bind(this), function(e) {
                    E.warn(e)
                })
            } catch (t) {
                E.warn(t), e = Promise.resolve(null)
            }
            return e
        }.bind(this))
    }, D.prototype._initializeFetchFirstOptions = function(e) {
        var t = e || {};
        return this._clientId = this._clientId || Symbol(), t[D._CONST_CLIENTID] = this._clientId, !t[D._CONST_PAGESIZE] && this._isLoadMoreOnScroll() ? t[D._CONST_PAGESIZE] = this.options.scrollPolicyOptions.fetchSize : t[D._CONST_PAGESIZE] = -1, t[D._CONST_SILENT] = !0, t
    }, D.prototype._containsKey = function(e, t) {
        for (var o = 0; o < t.length; o++)
            if (u.KeyUtils.equals(t[o].key, e)) return !0;
        return !1
    }, D.prototype._invokeDataFetchRows = function(e) {
        var t = this._initializeFetchFirstOptions(e),
            o = this._getData();
        return null != o ? new Promise(function(e) {
            this._animateOnFetch = !1, this._noMoreData = !1, this._setDataWaitingState(), this._hasRefreshInQueue = !1, this._dataProviderAsyncIterator = o.fetchFirst(t)[Symbol.asyncIterator]();
            var i = function(e, t, l) {
                    var n = l;
                    return (null == l || this._containsKey(l, t)) && (n = null), e.done || null == n && (this._isLoadMoreOnScroll() || "function" == typeof o.getPageCount) ? e : this._dataProviderAsyncIterator.next().then(function(t) {
                        return e.done = t.done, e.value.data = e.value.data.concat(t.value.data), e.value.metadata = e.value.metadata.concat(t.value.metadata), i(e, t.value.metadata, n)
                    })
                }.bind(this),
                l = this._getScrollToKey(),
                n = this._dataProviderAsyncIterator.next();
            Promise.all([n, l]).then(function(e) {
                var t = e[0],
                    o = e[1];
                return i(t, t[D._CONST_VALUE].metadata, o)
            }).then(function(t) {
                var i = t[D._CONST_VALUE],
                    l = i[D._CONST_DATA],
                    n = i.metadata.map(function(e) {
                        return e[D._CONST_KEY]
                    }),
                    s = 0;
                o instanceof u.TableDataSourceAdapter && (s = o[D._CONST_OFFSET]);
                var a = 0;
                this._isPagingModelDataProvider() && (a = o.getStartItemIndex());
                for (var r = [], _ = l.length, h = 0; h < _; h++) r[h] = s + a + h;
                var d = i[D._CONST_METADATA];
                this._unregisterDomScroller(), t.maxCountLimit ? (this._noMoreData = !0, this._handleScrollerMaxRowCount()) : t.done && (this._noMoreData = !0), this._refreshAll({
                    data: l,
                    metadata: d,
                    keys: n,
                    indexes: r
                }, s).then(function() {
                    this._clearDataWaitingState(), this._processFetchSort(i), this._isLoadMoreOnScroll() && this._registerDomScroller(), e(t)
                }.bind(this))
            }.bind(this), function() {
                this._clearDataWaitingState();
                var t = this._getTableBody();
                0 === this._getTableBodyRows().length && (this._showNoDataMessage(), this._finalizeNonBodyRowRendering([t]).then(function() {
                    e(null)
                })), e(null)
            }.bind(this))
        }.bind(this)) : Promise.resolve(null)
    }, D.prototype._invokeDataSort = function(e, t, o) {
        if (this._resetAriaLabel = !0, this._getData()) {
            var i = [],
                l = {};
            l[D._CONST_ATTRIBUTE] = e, l.direction = t ? D._COLUMN_SORT_ORDER._ASCENDING : D._COLUMN_SORT_ORDER._DESCENDING, i.push(l), this._trigger("sort", o, {
                header: i[0][D._CONST_ATTRIBUTE],
                direction: i[0].direction
            }), this._beforeDataRefresh(), this._showStatusMessage(), this._initFetch({
                sortCriteria: i
            }, !0)
        }
    }, D.prototype._isColumnMetadataUpdated = function(e) {
        if (null != this._columnDefArray) {
            var t = this._getColumnMetadata(e);
            if (this._columnDefArray.length !== t.length) return !0;
            for (var o = t.length, i = 0; i < o; i++)
                for (var l = Object.keys(t[i]), n = 0; n < l.length; n++) {
                    var s = l[n];
                    if (t[i][s] !== this._columnDefArray[i][s] && ("id" !== s || null == t[i][s] || 0 !== t[i][s].indexOf(D._COLUMN_HEADER_ID_PREFIX) || null == this._columnDefArray[i][s] || 0 !== this._columnDefArray[i][s].indexOf(D._COLUMN_HEADER_ID_PREFIX))) return !0
                }
            return !1
        }
        return !0
    }, D.prototype._getColumnKeys = function() {
        for (var e = [], t = this._getColumnDefs(), o = 0; o < t.length; o++) e.push(t[o][D._FIELD_ID]);
        return e
    }, D.prototype._getLocalRowKeys = function() {
        for (var e = [], t = this._getTableBodyRows(), o = 0; o < t.length; o++) e.push(c(t[o]).data("rowKey"));
        return e
    }, D.prototype._hasMoreToFetch = function() {
        return !!this._isLoadMoreOnScroll() && !this._noMoreData
    }, D.prototype._clearCachedDataMetadata = function() {
        null != this._data && this._unregisterDataSourceEventListeners(), this._data = null
    }, D.prototype._getColumnIdxForColumnKey = function(e) {
        for (var t = this._getColumnDefs(), o = t.length, i = 0; i < o; i++) {
            var l = t[i];
            if (u.KeyUtils.equals(l.id, e)) return i
        }
        return null
    }, D.prototype._getColumnKeyForColumnIdx = function(e) {
        var t = this._getColumnDefs();
        return e < t.length ? t[e][D._FIELD_ID] : null
    }, D.prototype._getRowIdxRowArray = function(e, t) {
        var o = [];
        if (null != e)
            for (var i = e[D._CONST_INDEXES].length, l = 0; l < i; l++) o.push({
                row: {
                    data: e[D._CONST_DATA][l],
                    metadata: e[D._CONST_METADATA] ? e[D._CONST_METADATA][l] : null,
                    key: e[D._CONST_KEYS][l],
                    index: e[D._CONST_INDEXES][l]
                },
                rowIdx: t + l
            });
        return o
    }, D.prototype._getRowIdxForRowKey = function(e) {
        var t = this._getTableBodyRows();
        if (t.length > 0)
            for (var o = t.length, i = 0; i < o; i++)
                if (u.KeyUtils.equals(c(t[i]).data("rowKey"), e)) return i;
        return null
    }, D.prototype._getDataSourceRowIndexForRowKey = function(e) {
        var t = this._getTableBodyRows();
        if (t.length > 0)
            for (var o = t.length, i = 0; i < o; i++)
                if (u.KeyUtils.equals(c(t[i]).data("rowKey"), e)) {
                    var l = this._getData(),
                        n = 0;
                    return this._isPagingModelDataProvider() && (n = l.getStartItemIndex()), i + n
                }
        return null
    }, D.prototype._getRowKeyForDataSourceRowIndex = function(e) {
        var t = this._getTableBodyRows();
        if (t.length > 0) {
            var o = this._getData(),
                i = 0;
            this._isPagingModelDataProvider() && (i = o.getStartItemIndex());
            for (var l = t.length, n = 0; n < l; n++)
                if (i + n === e) return c(t[n]).data("rowKey")
        }
        return null
    }, D.prototype._getRowKeyForRowIdx = function(e) {
        var t = this._getTableBodyRow(e);
        return null != t ? c(t).data("rowKey") : null
    }, D.prototype._getRowKey = function(e, t) {
        return null == e && (e = this._getTableBodyRow(t)), null != e ? c(e).data("rowKey") : null
    }, D.prototype._isPagingModelDataProvider = function() {
        var e = this._getData();
        return null != e.getStartItemIndex && null !== e.getStartItemIndex() && e.getStartItemIndex() >= 0
    }, D.prototype._animateTableBodyRow = function(e, t) {
        return this._isAnimationDisabled(t) ? Promise.resolve(!1) : new Promise(function(o) {
            this._startAnimation(e, t).then(function() {
                o(!0)
            })
        }.bind(this))
    }, D.prototype._animateTableBodyRows = function(e, t) {
        if (this._isAnimationDisabled(t)) return Promise.resolve(!1);
        for (var o = [], i = 0; i < e.length; i++) {
            var l = e[i];
            o.push(function(e) {
                return this._animateTableBodyRow(e, t)
            }.bind(this)(l))
        }
        return o.length > 0 ? Promise.all(o) : Promise.resolve(!1)
    }, D.prototype._getAnimationEffect = function(e) {
        return null == this.defaultAnimations && (this.defaultAnimations = {}), null == this.defaultAnimations[e] && (this.defaultAnimations[e] = JSON.parse(this._getDefaultOptions()[e + "Animation"])), this.defaultAnimations[e]
    }, D.prototype._isAnimationDisabled = function(e) {
        var t = this._getAnimationEffect(e);
        return null == t || 0 === t.length
    }, D.prototype._startAnimation = function(e, t, o) {
        return null == o && (o = this._getAnimationEffect(t)), m.startAnimation(e, t, o, this)
    }, D.prototype._isAddNewRowEnabled = function() {
        return this._isStickyLayoutEnabled() && "top" === this.options.addRowDisplay && (null != this._getSlotTemplate("addRowTemplate") && this._isDefaultAddRowTemplateSlotValid() || null != this._getSlotTemplate("addRowCellTemplate") && this._isDefaultAddRowCellTemplateSlotValid())
    }, D.prototype._refreshAddRowDisplay = function() {
        return this._refreshAddNewRowPlaceholder().then(function(e) {
            this._getLayoutManager().notifyTableUpdate(D._UPDATE._ADD_ROW_DISPLAY), e && (this._setActiveAddRow(), this._setTableActionableMode(!0))
        }.bind(this))
    };
    const I = function(e) {
        this.component = e, this.Init()
    };
    u._registerLegacyNamespaceProp("TableDndContext", I), u.Object.createSubclass(I, u.Object, "oj.TableDndContext"), I._CSS_CLASSES = {
        _DRAG_SOURCE: "oj-table-drag-source",
        _DRAG_SOURCE_OPAQUE: "oj-table-drag-source-opaque",
        _DROP_TARGET_EMPTY: "oj-table-drop-target-empty"
    }, I.prototype.Init = function() {
        I.superclass.Init.call(this)
    }, I.prototype._addDragMarkerClass = function(e) {
        this.component._getTableHeaderColumn(e).classList.add(I._CSS_CLASSES._DRAG_SOURCE_OPAQUE), this.component._setTableColumnCellsClass(e, !0, I._CSS_CLASSES._DRAG_SOURCE_OPAQUE)
    }, I.prototype._removeDragMarkerClass = function() {
        var e = this.component._getTableElementsByClassName(this.component._getTableHeader(), I._CSS_CLASSES._DRAG_SOURCE_OPAQUE);
        if (null != e && e.length > 0)
            for (var t = e.length, o = 0; o < t; o++) e[o].classList.remove(I._CSS_CLASSES._DRAG_SOURCE_OPAQUE);
        this.component._setTableColumnCellsClass(null, !1, I._CSS_CLASSES._DRAG_SOURCE_OPAQUE)
    }, I.prototype._cloneTableContainer = function(e) {
        var t = this.component._getTableElementsByTagName(e, D.DOM_ELEMENT._THEAD)[0],
            o = this.component._getTableElementsByTagName(e, D.DOM_ELEMENT._TBODY)[0],
            i = c(o).scrollLeft(),
            l = e.cloneNode(),
            n = this.component._getTableElementsByTagName(e, D.DOM_ELEMENT._TABLE)[0].cloneNode(),
            s = o.cloneNode(),
            a = this.component._rowsDragged[0].offsetTop;
        return this.component._rowsDragged.forEach(function(e) {
            var t = e.querySelectorAll("td"),
                o = e.cloneNode(!0);
            if (this.component._isDefaultSelectorEnabled()) {
                var i = this.component._getTableElementsByClassName(o, D.CSS_CLASSES._TABLE_DATA_ROW_SELECTOR_CLASS)[0];
                i.selectedKeys = this.component.options.selected.row, i.rowKey = this.component._getRowKey(e)
            }
            var l = o.querySelectorAll("td");
            o.style.position = "absolute", o.style.top = e.offsetTop - a + D.CSS_VAL._PX, o.style.width = e.offsetWidth + D.CSS_VAL._PX, o.classList.add("oj-table-body-row-drag-image"), o.classList.remove("oj-selected"), o.classList.remove("oj-focus"), o.classList.remove("oj-focus-highlight"), l.forEach(function(e, o) {
                e.style.width = t[o].offsetWidth + D.CSS_VAL._PX, e.classList.remove("oj-selected"), e.classList.remove("oj-hover")
            }), s.appendChild(o)
        }.bind(this)), n.appendChild(s), l.appendChild(n), l.classList.add("oj-table-container-drag-image"), this.component._isTableHeaderless() ? l.style[D.CSS_PROP._HEIGHT] = o.scrollHeight + D.CSS_VAL._PX : l.style[D.CSS_PROP._HEIGHT] = o.scrollHeight + t.offsetHeight + D.CSS_VAL._PX, s.style[D.CSS_PROP._OVERFLOW] = D.CSS_VAL._HIDDEN, s.style[D.CSS_PROP._OVERFLOW_X] = D.CSS_VAL._HIDDEN, s.style[D.CSS_PROP._OVERFLOW_Y] = D.CSS_VAL._HIDDEN, s.style[D.CSS_PROP._BACKGROUND_COLOR] = D.CSS_VAL._TRANSPARENT, s.style[D.CSS_PROP._BORDER_COLOR] = D.CSS_VAL._TRANSPARENT, s.style[D.CSS_PROP._WIDTH] = c(o).width() + D.CSS_VAL._PX, s.style[D.CSS_PROP._HEIGHT] = o.scrollHeight + D.CSS_VAL._PX, n.style[D.CSS_PROP._WIDTH] = c(o).width() + D.CSS_VAL._PX, document.body.appendChild(l), c(s).scrollLeft(1 * i), l
    }, I.prototype._destroyDragImage = function() {
        this._dragImage && (c(this._dragImage).remove(), this._dragImage = null)
    }, I.prototype._getEventColumnIndex = function(e) {
        return this.component._getElementColumnIdx(e.currentTarget)
    }, I.prototype._getOverRowIndex = function(e) {
        var t, o = this.component._getFirstAncestor(e.target, D.DOM_ELEMENT._TR, !0),
            i = this.component._getFirstAncestor(e.target, "." + D.CSS_CLASSES._TABLE_DATA_CELL_CLASS + ", ." + D.CSS_CLASSES._TABLE_SELECTOR_CELL, !0);
        if (null != i) {
            var l = this.component._getFirstAncestor(i, "." + D.CSS_CLASSES._TABLE_DATA_ROW_CLASS, !0);
            if (null != l) {
                t = this.component._getTableBodyRows().indexOf(l);
                var n = e.target.getBoundingClientRect();
                e.offsetY > n.height / 2 && (t += 1)
            }
        } else if (c(o).hasClass(D.CSS_CLASSES._TABLE_DATA_ROW_DRAG_INDICATOR_CLASS)) t = this._dropRowIndex;
        else {
            if (0 === (t = this.component._getTableBodyRows().length)) {
                this.component._getTableBody().classList.add(I._CSS_CLASSES._DROP_TARGET_EMPTY)
            }
        }
        return t
    }, I.prototype.handleColumnDragStart = function(e) {
        if (this._isColumnReorderEnabled()) return this._dragStartColumnIdxs = this.component._getSelectedHeaderColumnIdxs(), this._setReorderColumnsDataTransfer(e, this._dragStartColumnIdxs), setTimeout(function() {
            window.getSelection().removeAllRanges()
        }, 0), this._dragStartColumnIdxs.forEach(function(e) {
            this._addDragMarkerClass(e)
        }.bind(this)), !0
    }, I.prototype.handleColumnDragEnd = function(e) {
        this._isColumnReorderEnabled() && (this._dragStartColumnIdxs = null, this.component._removeDragOverIndicatorColumn(), this._destroyDragImage(), this._removeDragMarkerClass())
    }, I.prototype.handleColumnDragEnter = function(e) {
        if (!this._isColumnReordering()) {
            var t = this._getEventColumnIndex(e);
            return this._invokeDropCallback("columns", "dragEnter", e, {
                columnIndex: t
            })
        }
    }, I.prototype.handleColumnReorderDragOver = function(e) {
        var t = this._getEventColumnIndex(e);
        null != this._dragStartColumnIdxs && this._dragStartColumnIdxs.length > 0 && -1 === this._dragStartColumnIdxs.indexOf(t) && (this._currentDropColumnBefore = this._isDragOverBeforeColumn(e), this._currentDropColumnBefore && this._dragStartColumnIdxs.indexOf(t - 1) > -1 || !this._currentDropColumnBefore && this._dragStartColumnIdxs.indexOf(t + 1) > -1 || this.component._displayDragOverIndicatorColumn(t, this._currentDropColumnBefore), e.preventDefault())
    }, I.prototype.handleColumnDragOver = function(e) {
        if (this._isColumnReordering()) return this.handleColumnReorderDragOver(e);
        var t = this._getEventColumnIndex(e);
        this._currentDropColumnBefore = this._isDragOverBeforeColumn(e);
        var o = this._invokeDropCallback("columns", "dragOver", e, {
            columnIndex: t
        });
        return (!1 === o || e.isDefaultPrevented()) && this.component._displayDragOverIndicatorColumn(t, this._isDragOverBeforeColumn(e)), o
    }, I.prototype.handleColumnDragLeave = function(e) {
        if (!this._isColumnReordering()) {
            this.component._removeDragOverIndicatorColumn();
            var t = this._getEventColumnIndex(e);
            return this._invokeDndCallback("drop", "columns", "dragLeave", e, {
                columnIndex: t
            })
        }
    }, I.prototype.handleColumnReorderDrop = function(e) {
        this.component._removeDragOverIndicatorColumn();
        var t = this._getEventColumnIndex(e);
        this._currentDropColumnBefore || (t += 1), -1 === this._dragStartColumnIdxs.indexOf(t) && (this.component._columnsDestMap = this.component._moveTableHeaderColumn(this._dragStartColumnIdxs, t, e)), e.preventDefault()
    }, I.prototype.handleColumnDrop = function(e) {
        if (this._isColumnReordering()) return this.handleColumnReorderDrop(e);
        this.component._removeDragOverIndicatorColumn();
        var t = this._getEventColumnIndex(e);
        return this._currentDropColumnBefore || (t += 1), this._invokeDropCallback("columns", "drop", e, {
            columnIndex: t
        })
    }, I.prototype.handleRowDragStart = function(e) {
        var t = this.component.options.dnd.drag;
        if (t && t.rows) {
            var o = this._setDragRowsDataTransfer(e, t.rows.dataTypes, this.component._getSelectedRowIdxs());
            return !!o && this._invokeDndCallback("drag", "rows", "dragStart", e, o)
        }
    }, I.prototype.handleRowDrag = function(e) {
        return this._invokeDndCallback("drag", "rows", "drag", e)
    }, I.prototype.handleRowDragEnd = function(e) {
        return this._destroyDragImage(), this.component._rowsDragged && this.component._rowsDragged.length > 0 && this.component._rowsDragged.forEach(function(e) {
            e.classList.remove(I._CSS_CLASSES._DRAG_SOURCE_OPAQUE), e.classList.remove("oj-table-row-drag-source-hide"), e.classList.add("oj-selected"), this.component._updateRowStateCellsClass(null, e, {
                selected: !0
            })
        }.bind(this)), this.component._removeDragOverIndicatorRow(), this._invokeDndCallback("drag", "rows", "dragEnd", e)
    }, I.prototype.handleRowDragEnter = function(e) {
        var t = this._getOverRowIndex(e);
        return this._invokeDropCallback("rows", "dragEnter", e, {
            rowIndex: t
        })
    }, I.prototype.handleRowDragOver = function(e) {
        var t = this._getOverRowIndex(e),
            o = this._invokeDropCallback("rows", "dragOver", e, {
                rowIndex: t
            });
        return (!1 === o || e.isDefaultPrevented()) && this._updateDragRowsState(e, t), o
    }, I.prototype.handleRowDragLeave = function(e) {
        var t = this._invokeDndCallback("drop", "rows", "dragLeave", e, {
            rowIndex: this._dropRowIndex
        });
        this._isDndEventInElement(e, e.currentTarget) || (this.component._getTableBody().classList.remove(I._CSS_CLASSES._DROP_TARGET_EMPTY), this.component._removeDragOverIndicatorRow(), this._dropRowIndex = null);
        return t
    }, I.prototype.handleRowDrop = function(e) {
        var t = this._dropRowIndex;
        return this._destroyDragImage(), this.component._getTableBody().classList.remove(I._CSS_CLASSES._DROP_TARGET_EMPTY), this.component._removeDragOverIndicatorRow(), this._dropRowIndex = null, this._invokeDropCallback("rows", "drop", e, {
            rowIndex: t
        })
    }, I.prototype._invokeDndCallback = function(e, t, o, i, l) {
        var n, s = this.component.options.dnd[e];
        if (s && s[t]) {
            var a = s[t][o];
            if (a && "function" == typeof a) try {
                this.component._IsCustomElement() ? a(i.originalEvent, l) : (i.dataTransfer = i.originalEvent.dataTransfer, n = a(i, l))
            } catch (e) {
                E.error("Error: " + e)
            }
        }
        return n
    }, I.prototype._invokeDropCallback = function(e, t, o, i) {
        var l = this._invokeDndCallback("drop", e, t, o, i);
        return void 0 === l && this._matchDragDataType(o, e) && o.preventDefault(), l
    }, I.prototype._isColumnReorderEnabled = function() {
        var e = this.component.options.dnd;
        return e && e.reorder && e.reorder.columns === D._OPTION_ENABLED
    }, I.prototype._isColumnReordering = function() {
        return null != this._dragStartColumnIdxs
    }, I.prototype._isDndEventInElement = function(e, t) {
        var o = t.getBoundingClientRect(),
            i = e.originalEvent;
        return i.clientX >= Math.ceil(o.left) && i.clientX < Math.floor(o.right) && i.clientY >= Math.ceil(o.top) && i.clientY < Math.floor(o.bottom)
    }, I.prototype._isDragOverBeforeColumn = function(e) {
        var t = e.currentTarget.getBoundingClientRect();
        if (null != e.originalEvent.clientX) {
            var o = t.right - e.originalEvent.clientX < (t.right - t.left) / 2;
            return "rtl" === S.getReadingDirection() ? o : !o
        }
        return !1
    }, I.prototype._matchDragDataType = function(e, t) {
        var o = e.originalEvent.dataTransfer.types,
            i = this.component.options.dnd.drop;
        if (i && i[t] && i[t].dataTypes)
            for (var l = i[t].dataTypes, n = "string" == typeof l ? [l] : l, s = 0; s < o.length; s++)
                if (n.indexOf(o[s]) >= 0) return !0;
        return !1
    }, I.prototype.setElementDraggable = function(e, t) {
        t ? (e.setAttribute(D.DOM_ATTR._DRAGGABLE, !0), e.classList.add(D.MARKER_STYLE_CLASSES._DRAGGABLE)) : (e.removeAttribute(D.DOM_ATTR._DRAGGABLE), e.classList.remove(D.MARKER_STYLE_CLASSES._DRAGGABLE))
    }, I.prototype._setDragRowsData = function(e, t, o) {
        if (t) {
            var i = e.dataTransfer,
                l = JSON.stringify(o);
            if ("string" == typeof t) i.setData(t, l);
            else
                for (var n = 0; n < t.length; n++) i.setData(t[n], l)
        }
    }, I.prototype._setDragRowsDataTransfer = function(e, t, o) {
        var i = [];
        this.component._rowsDragged = [];
        for (var l = 0; l < o.length; l++) {
            var n = this.component.getDataForVisibleRow(o[l]);
            let e = this.component._getTableBodyRow(o[l]);
            n && e && (i.push(n), this.component._rowsDragged.push(e))
        }
        return i.length ? (this._setDragRowsData(e.originalEvent, t, i), this._destroyDragImage(), this._dragImage = this._setDragRowsImage(e.originalEvent, this.component._getTableContainer()), {
            rows: i
        }) : null
    }, I.prototype._setDragRowsImage = function(e, t) {
        var o = this._cloneTableContainer(t),
            i = this.component._getTableElementsByTagName(t, D.DOM_ELEMENT._TBODY)[0],
            l = Math.max(0, e.offsetX),
            n = Math.max(0, e.offsetY);
        return i.classList.add(I._CSS_CLASSES._DRAG_SOURCE), this.component._rowsDragged.forEach(function(e) {
            e.classList.add(I._CSS_CLASSES._DRAG_SOURCE_OPAQUE)
        }), e.dataTransfer.setDragImage(o, l, n), o
    }, I.prototype._setReorderColumnsDataTransfer = function(e, t) {
        var o = e.originalEvent.dataTransfer,
            i = this.component._hashCode(this.component._getTableUID());
        o.setData("Text", D._DND_REORDER_TABLE_ID_DATA_KEY + ":" + i + ":" + t.join("-")), this._dragImage = this.component._createTableHeaderColumnDragImage(t);
        try {
            o.setDragImage(this._dragImage, 0, 0)
        } catch (e) {}
    }, I.prototype._updateDragRowsState = function(e, t) {
        if (this._dropRowIndex !== t) {
            var o = this.component._getFirstAncestor(e.target, D.DOM_ELEMENT._TR, !0);
            this._dropRowIndex = t;
            let i = e.currentTarget.classList.contains(I._CSS_CLASSES._DRAG_SOURCE) || e.currentTarget.classList.contains(I._CSS_CLASSES._DROP_TARGET_EMPTY) ? "space" : "line";
            this.component._displayDragOverIndicatorRow(this._dropRowIndex, o, i, e.currentTarget.classList.contains(I._CSS_CLASSES._DRAG_SOURCE))
        }
    };
    const w = function(e) {
        this._table = e, this._tableUpdates = new Set
    };
    u.Object.createSubclass(w, u.Object, "TableLayoutManager"), w.prototype.getScroller = function() {}, w.prototype.getContentElement = function() {}, w.prototype.unregisterListeners = function() {
        this.unregisterScrollListeners()
    }, w.prototype._getSizingState = function() {
        return null == this._sizingState && (this._sizingState = {
            outerWidth: null,
            outerHeight: null,
            hasHorizontalOverflow: !1,
            hasVerticalOverflow: !1
        }), this._sizingState
    }, w.prototype.notifyTableUpdate = function(e) {
        this._tableUpdates.add(e)
    }, w.prototype._getTableUpdates = function() {
        return this._tableUpdates
    }, w.prototype._clearTableUpdates = function() {
        this._tableUpdates.clear()
    }, w.prototype.isTableLayoutRefreshRequired = function() {
        return this._tableUpdates.size > 0
    }, w.prototype.isSizingRefreshRequired = function(e, t) {
        if (null != e && null != t) {
            var o = this._getSizingState();
            return e > 0 && t > 0 && (e !== o.outerWidth || t !== o.outerHeight)
        }
        var i = this._table._getTableContainer();
        return i.offsetWidth > 0 && i.offsetHeight > 0
    }, w.prototype._enableTableVisibility = function() {
        this._table._clearTableBodyHideTimeout(), this._table._clearTableFooterHideTimeout();
        var e = this._table._getTableBody();
        e && (e.style[D.CSS_PROP._VISIBILITY] = "");
        var t = this._table._getTableFooter();
        t && (t.style[D.CSS_PROP._VISIBILITY] = "")
    }, w.prototype.refreshTableDimensions = function() {}, w.prototype._restoreCachedScrollPos = function() {
        var e = null != this._table._scrollTop && this._table._scrollTop > 0 ? this._table._scrollTop : null,
            t = null != this._table._scrollLeft && this._table._scrollLeft > 0 ? this._table._scrollLeft : null;
        if (null != e) {
            var o = this.getScroller().scrollHeight - this.getScroller().clientHeight,
                i = e > o ? o : e;
            this._table._isLoadMoreOnScroll() && o === i && (i -= 1), this.getScroller().scrollTop = i
        }
        null != t && this._restoreScrollLeft(t)
    }, w.prototype._finalizeTableDimensions = function() {
        this._restoreCachedScrollPos();
        var e = this._getSizingState(),
            t = window.getComputedStyle(this._table._getTableContainer());
        e.outerWidth = this.getExactOffsetWidth(t), e.outerHeight = this.getExactOffsetHeight(t), this._clearTableUpdates(), this._enableTableVisibility(), this.registerScrollListeners()
    }, w.prototype.handleAfterRowsProcessed = function() {}, w.prototype._handleScrollerScrollLeft = function(e) {
        this._table._scrollLeft = e
    }, w.prototype._handleScrollerScrollTop = function(e) {
        this._table._domScroller || this._table._clearScrollPosBusyState(), e < 0 && (e = 0), this._table._scrollTop = e, this._table._scrollY = this._table._skipScrollUpdate ? e : null, this._table._moveTableBodyRowTouchSelectionAffordanceTop(), this._table._moveTableBodyRowTouchSelectionAffordanceBottom(), this._table._updateScrollBufferHeight()
    }, w.prototype.registerScrollListeners = function() {
        var e = this.getScroller();
        null != e && (null == this._scrollEventListener && (this._scrollEventListener = function(e) {
            var t = this._table._getElementScrollLeft(e.target),
                o = e.target.scrollTop;
            t === this._table._scrollLeft && o === this._table._scrollTop || (this._handleScrollerScrollLeft(t), this._handleScrollerScrollTop(o), this._table._isScrollPositionAdjusted() || (this._table._skipScrollUpdate || this._ticking || (window.requestAnimationFrame(function() {
                this._table._isScrollPositionAdjusted() || this._table._skipScrollUpdate || this._table.option("scrollPosition", this._table._getCurrentScrollPosition(), {
                    _context: {
                        originalEvent: e,
                        internalSet: !0
                    }
                }), this._ticking = !1
            }.bind(this)), this._ticking = !0), this._table._skipScrollUpdate = !1))
        }.bind(this)), e.removeEventListener("scroll", this._scrollEventListener), e.addEventListener("scroll", this._scrollEventListener, !1))
    }, w.prototype.updateCurrentScrollState = function() {
        var e = this.getScroller(),
            t = this._table._getElementScrollLeft(e),
            o = e.scrollTop;
        t === this._table._scrollLeft && o === this._table._scrollTop || (this._handleScrollerScrollLeft(t), this._handleScrollerScrollTop(o), this._table.option("scrollPosition", this._table._getCurrentScrollPosition(), {
            _context: {
                internalSet: !0
            }
        }))
    }, w.prototype.unregisterScrollListeners = function() {
        var e = this.getScroller();
        null != e && null != this._scrollEventListener && e.removeEventListener("scroll", this._scrollEventListener)
    }, w.prototype._restoreScrollLeft = function(e) {
        S.setScrollLeft(this.getScroller(), e)
    }, w.prototype.getColumnWidthProperty = function(e) {
        var t = window.getComputedStyle(e),
            o = this._getBoxStyle(t);
        return this._table._isIE() ? parseFloat(t.width) + o.paddingWidth : parseFloat(t.width) + (o.boxSizing === D.CSS_VAL._BORDER_BOX ? -o.borderWidth : o.paddingWidth)
    }, w.prototype.getWidthPropertyFromOffsetWidth = function(e, t) {
        var o = window.getComputedStyle(t);
        return e - this._getBoxStyle(o).borderWidth
    }, w.prototype.isTableWidthConstrained = function() {
        return this._getSizingState().hasHorizontalOverflow
    }, w.prototype.isTableHeightConstrained = function() {
        return this._getSizingState().hasVerticalOverflow
    }, w.prototype.getScrollBarHeight = function() {
        return this.isTableWidthConstrained() ? this._getDefaultScrollBarSize() : 0
    }, w.prototype.getScrollBarWidth = function() {
        return this.isTableHeightConstrained() && !this._isVerticalScrollBarHidden() ? this._getDefaultScrollBarSize() : 0
    }, w.prototype._getBoxStyle = function(e, t) {
        return t ? {
            boxSizing: e[D.CSS_PROP._BOX_SIZING],
            borderWidth: (parseFloat(e[D.CSS_PROP._BORDER_TOP_WIDTH]) || 0) + (parseFloat(e[D.CSS_PROP._BORDER_BOTTOM_WIDTH]) || 0),
            paddingWidth: (parseFloat(e[D.CSS_PROP._PADDING_TOP]) || 0) + (parseFloat(e[D.CSS_PROP._PADDING_BOTTOM]) || 0)
        } : {
            boxSizing: e[D.CSS_PROP._BOX_SIZING],
            borderWidth: (parseFloat(e[D.CSS_PROP._BORDER_RIGHT_WIDTH]) || 0) + (parseFloat(e[D.CSS_PROP._BORDER_LEFT_WIDTH]) || 0),
            paddingWidth: (parseFloat(e[D.CSS_PROP._PADDING_RIGHT]) || 0) + (parseFloat(e[D.CSS_PROP._PADDING_LEFT]) || 0)
        }
    }, w.prototype._applyColumnHeaderHeight = function(e, t) {
        var o = this._table._getTableElementsByClassName(e, D.CSS_CLASSES._COLUMN_HEADER_CLASS);
        o.length > 0 && (o[0].style[D.CSS_PROP._MIN_HEIGHT] = t + D.CSS_VAL._PX)
    }, w.prototype._applyForcedColumnWidth = function(e, t) {
        var o = e;
        "" !== t && (t += D.CSS_VAL._PX), o.style[D.CSS_PROP._MIN_WIDTH] = t, o.style[D.CSS_PROP._WIDTH] = t, o.style[D.CSS_PROP._MAX_WIDTH] = t
    }, w.prototype._getForcedColumnWidth = function(e, t, o) {
        var i = this._getBoxStyle(t);
        return null != o ? o + (i.boxSizing === D.CSS_VAL._BORDER_BOX ? i.borderWidth : -i.paddingWidth) : this._table._isIE() && i.boxSizing === D.CSS_VAL._BORDER_BOX ? parseFloat(t.width) + i.paddingWidth + i.borderWidth : parseFloat(t.width)
    }, w.prototype.getMinimumForcedOffsetWidth = function(e) {
        var t = 0,
            o = this._table._getTableHeaderColumn(e);
        if (null != o) {
            var i = this._getBoxStyle(window.getComputedStyle(o)),
                l = i.paddingWidth + i.borderWidth;
            t < l && (t = l)
        }
        var n = this._table._getTableBodyCell(0, e, null);
        if (null != n) {
            var s, a = 0;
            if (this._table._hasRowOrCellRendererOrTemplate(e)) {
                for (var r = this._table._getTableBodyRows(), _ = 0; _ < r.length; _++)
                    if (null != (n = this._table._getTableBodyCell(_, e, null))) {
                        var h = (s = this._getBoxStyle(window.getComputedStyle(n))).paddingWidth + s.borderWidth;
                        a < h && (a = h)
                    }
            } else a = (s = this._getBoxStyle(window.getComputedStyle(n))).paddingWidth + s.borderWidth;
            t < a && (t = a)
        }
        var d = this._table._getTableFooterCell(e);
        if (null != d) {
            var u = this._getBoxStyle(window.getComputedStyle(d)),
                c = u.paddingWidth + u.borderWidth;
            t < c && (t = c)
        }
        return t
    }, w.prototype._isVerticalScrollBarHidden = function() {
        return !this._table._isTouchDevice() && this._table._getTableContainer().classList.contains(D.MARKER_STYLE_CLASSES._HIDE_VERTICAL_SCROLLBAR)
    }, w.prototype._getDefaultScrollBarSize = function() {
        return null == this._defaultScrollBarSize && (this._defaultScrollBarSize = A.getDefaultScrollBarWidth(this.getScroller())), this._defaultScrollBarSize
    }, w.prototype.clearCachedDimensions = function() {
        this._clientWidth = null, this._clientHeight = null, this._scrollWidth = null, this._scrollHeight = null
    }, w.prototype._clearColumnSizingCache = function() {
        this._table._columnOffsets = null
    }, w.prototype.getColumnScrollLeft = function() {}, w.prototype.getRowScrollTop = function() {}, w.prototype.getScrollWidth = function() {
        return null == this._scrollWidth && (this._scrollWidth = this.getScroller().scrollWidth), this._scrollWidth
    }, w.prototype.getScrollHeight = function() {
        return null == this._scrollHeight && (this._scrollHeight = this.getScroller().scrollHeight), this._scrollHeight
    }, w.prototype.getClientWidth = function() {
        return null == this._clientWidth && (this._clientWidth = this.getScroller().clientWidth), this._clientWidth
    }, w.prototype.getClientHeight = function() {
        return null == this._clientHeight && (this._clientHeight = this.getScroller().clientHeight), this._clientHeight
    }, w.prototype._removeTableDimensionsStyling = function() {
        this.unregisterScrollListeners();
        var e = this._table._getTable(),
            t = this._table._getTableHeader(),
            o = this._table._getTableHeaderRow(),
            i = this._table._getTableFooter(),
            l = this._table._getTableFooterRow(),
            n = this._table._getTableBody(),
            s = this._table._getTableBottomSlot(),
            a = this._table._getTableContainer();
        if (a.classList.remove(D.CSS_CLASSES._TABLE_SCROLL_VERTICAL_CLASS), a.classList.remove(D.CSS_CLASSES._TABLE_SCROLL_HORIZONTAL_CLASS), e.removeAttribute(D.DOM_ATTR._STYLE), null != n && n.removeAttribute(D.DOM_ATTR._STYLE), null != t) {
            t.removeAttribute(D.DOM_ATTR._STYLE), o.removeAttribute(D.DOM_ATTR._STYLE);
            for (var r = this._table._getTableElementsByClassName(o, D.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS), _ = r.length, h = 0; h < _; h++) r[h].style[D.CSS_PROP._WIDTH] = ""
        }
        null != i && (i.removeAttribute(D.DOM_ATTR._STYLE), l.removeAttribute(D.DOM_ATTR._STYLE)), null != s && s.removeAttribute(D.DOM_ATTR._STYLE), this._removeHeaderColumnAndCellColumnWidths()
    }, w.prototype._getBottomSlotHeight = function() {
        var e = this._table._getTableBottomSlot();
        if (null != e && e.clientHeight > 0 && e.style[D.CSS_PROP._DISPLAY] !== D.CSS_VAL._NONE) {
            var t = window.getComputedStyle(e);
            return this.getExactOffsetHeight(t)
        }
        return 0
    }, w.prototype._getTableContainerScrollableState = function(e) {
        var t = window.getComputedStyle(this._table._getTableContainer()),
            o = this.getExactClientHeight(t),
            i = this.getExactClientWidth(t),
            l = window.getComputedStyle(this._table._getTable()),
            n = this.getExactOffsetHeight(l),
            s = this.getExactOffsetWidth(l),
            a = [];
        if (o > 0) {
            var r = n + e;
            a[0] = r - o > D.SIZING_ERROR_MARGIN ? 1 : o - r > D.SIZING_ERROR_MARGIN ? -1 : 0
        } else a[0] = 0;
        return a[1] = i > 0 ? s - i > D.SIZING_ERROR_MARGIN ? 1 : i - s > D.SIZING_ERROR_MARGIN ? -1 : 0 : 0, a
    }, w.prototype._setForcedColumnWidths = function() {
        var e, t, o, i = this._table._getColumnDefs(),
            l = i.length,
            n = this._table._getTableBodyRows();
        this._forcedWidthColumns = [];
        for (var s = 0; s < l; s++) {
            var a = this._getPixelStyleEquivalent(i[s].width);
            if (null != a) {
                var r = null,
                    _ = null;
                if (null != (e = this._table._getTableHeaderColumn(s))) {
                    var h = this._getForcedColumnWidth(e, window.getComputedStyle(e), a);
                    this._applyForcedColumnWidth(e, h), this._forcedWidthColumns[s] = h
                } else this._forcedWidthColumns[s] = !0;
                var d = this._table._getTableBodyLegacyWidthBuffer();
                if (null != d) {
                    var u = d.childNodes[s],
                        c = this._getForcedColumnWidth(u, window.getComputedStyle(u), a);
                    this._applyForcedColumnWidth(u, c)
                }
                if (null != (t = 0 === this._table._editableRowIdx && n.length > 1 ? this._table._getTableBodyCell(1, s, null) : this._table._getTableBodyCell(0, s, null))) {
                    this._table._hasRowOrCellRendererOrTemplate(s) || (r = window.getComputedStyle(t), _ = this._getForcedColumnWidth(t, r, a));
                    for (var S = 0; S < n.length; S++)
                        if (null != (t = this._table._getTableBodyCell(S, s, null)))
                            if (null == r) {
                                var E = window.getComputedStyle(t),
                                    C = this._getForcedColumnWidth(t, E, a);
                                this._applyForcedColumnWidth(t, C)
                            } else this._applyForcedColumnWidth(t, _)
                }
                null != (o = this._table._getTableFooterCell(s)) && this._applyForcedColumnWidth(o, this._getForcedColumnWidth(o, window.getComputedStyle(o), a))
            } else this._forcedWidthColumns[s] = !1
        }
    }, w.prototype._verifyMinAndMaxWidths = function() {
        for (var e = this._table._getColumnDefs(), t = e.length, o = this._table._getTableBodyRows().length, i = !0; i;) {
            i = !1;
            for (var l = 0; l < t; l++)
                if (!1 === this._forcedWidthColumns[l]) {
                    if (this._applyColMinMax(e, l, o, !0)) {
                        i = !0;
                        break
                    }
                    if (this._applyColMinMax(e, l, o, !1)) {
                        i = !0;
                        break
                    }
                }
        }
    }, w.prototype._applyColMinMax = function(e, t, o, i) {
        var l, n, s, a = 0,
            r = !1,
            _ = null,
            h = null,
            d = i ? this._getPixelStyleEquivalent(e[t].minWidth) : this._getPixelStyleEquivalent(e[t].maxWidth);
        if (null != d && (l = this._table._getTableHeaderColumn(t), n = 0 === this._table._editableRowIdx && o > 1 ? this._table._getTableBodyCell(1, t, null) : this._table._getTableBodyCell(0, t, null), s = this._table._getTableFooterCell(t), null != l ? a = l.offsetWidth : null != n ? a = n.offsetWidth : null != s && (a = s.offsetWidth), a > 0 && (i ? a < d : a > d))) {
            if (r = !0, this._forcedWidthColumns[t] = d, null != l) {
                var u = this._getForcedColumnWidth(l, window.getComputedStyle(l), d);
                this._applyForcedColumnWidth(l, u)
            }
            var c = this._table._getTableBodyLegacyWidthBuffer();
            if (null != c) {
                var S = c.childNodes[t],
                    E = this._getForcedColumnWidth(S, window.getComputedStyle(S), d);
                this._applyForcedColumnWidth(S, E)
            }
            this._table._hasRowOrCellRendererOrTemplate(t) || (_ = window.getComputedStyle(n), h = this._getForcedColumnWidth(n, _, d));
            for (var C = 0; C < o; C++)
                if (null != (n = this._table._getTableBodyCell(C, t, null)))
                    if (null == _) {
                        var T = window.getComputedStyle(n),
                            p = this._getForcedColumnWidth(n, T, d);
                        this._applyForcedColumnWidth(n, p)
                    } else this._applyForcedColumnWidth(n, h);
            null != s && this._applyForcedColumnWidth(s, this._getForcedColumnWidth(s, window.getComputedStyle(s), d))
        }
        return r
    }, w.prototype._getPixelStyleEquivalent = function(e) {
        return "string" == typeof e ? "" === e ? null : "auto" === e ? this._getMinWidthAutoEquivalent() : null != e.match(/\D/g) && -1 === e.indexOf("px") ? (this._table._tableWidthContainer.style.width = e, this._table._tableWidthContainer.offsetWidth) : parseFloat(e) : e
    }, w.prototype._getMinWidthAutoEquivalent = function() {
        return null
    }, w.prototype.handleMouseEnterHeaderCell = function(e) {}, w.prototype.handleMouseDownHeaderCell = function(e) {
        if (1 === e.which) {
            if (!this._handleHeaderColumnResizeStart(e, !0)) {
                var t = this._table._getElementColumnIdx(this._table._getEventTargetElement(e));
                e[D._KEYBOARD_CODES._MODIFIER_SHIFT] || (this._table._setActiveHeader(t, e, !0), c(e.target).data(D._FOCUS_CALLED, !0))
            }
            this._table._isFF() && S.isMetaKeyPressed(e) && e.preventDefault()
        }
    }, w.prototype.handleMouseMoveHeader = function(e) {}, w.prototype.handleMouseMoveHeaderCell = function(e) {}, w.prototype.handleMouseUp = function(e) {}, w.prototype.handleMouseLeaveTable = function() {}, w.prototype.handleTouchStartHeaderCell = function(e) {
        1 === e.originalEvent.touches.length && this._table._isTableColumnsResizable() && this._handleHeaderColumnResizeStart(e) && e.preventDefault()
    }, w.prototype.handleTouchMoveHeader = function(e) {}, w.prototype.handleTouchEnd = function(e) {}, w.prototype.handleTouchCancel = function() {}, w.prototype.handleKeyDownEsc = function() {}, w.prototype.handleFocusout = function() {}, w.prototype.handleRowRefresh = function(e, t, o) {
        this._table._hasEditableRow() && this._table._getEditableRowIdx() === e ? t.classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_EDIT_CLASS) : t.classList.remove(D.CSS_CLASSES._TABLE_DATA_ROW_EDIT_CLASS)
    }, w.prototype._handleHeaderColumnResizeStart = function(e, t) {}, w.prototype.displayDragOverIndicatorColumn = function(e, t) {}, w.prototype.removeDragOverIndicatorColumn = function() {}, w.prototype._getPageX = function(e) {
        return void 0 !== e.pageX ? e.pageX : void 0 !== e.changedTouches ? e.changedTouches[0].pageX : 0
    }, w.prototype.getExactClientHeight = function(e) {
        var t = this._getBoxStyle(e, !0),
            o = parseFloat(e[D.CSS_PROP._HEIGHT]) - t.borderWidth - t.paddingWidth;
        return Math.round(1e3 * (o + Number.EPSILON)) / 1e3
    }, w.prototype.getExactClientWidth = function(e) {
        var t = this._getBoxStyle(e),
            o = parseFloat(e[D.CSS_PROP._WIDTH]) - t.borderWidth - t.paddingWidth;
        return Math.round(1e3 * (o + Number.EPSILON)) / 1e3
    }, w.prototype.getExactOffsetHeight = function(e) {
        var t = parseFloat(e[D.CSS_PROP._HEIGHT]);
        return Math.round(1e3 * (t + Number.EPSILON)) / 1e3
    }, w.prototype.getExactOffsetWidth = function(e) {
        var t = parseFloat(e[D.CSS_PROP._WIDTH]);
        return Math.round(1e3 * (t + Number.EPSILON)) / 1e3
    };
    const N = function(e) {
        N.superclass.constructor.call(this, e)
    };
    u.Object.createSubclass(N, w, "TableLegacyLayoutManager"), N.prototype.handleAfterRowsProcessed = function(e) {
        this._freezeColumnWidths(e)
    }, N.prototype._handleScrollerScrollLeft = function(e) {
        N.superclass._handleScrollerScrollLeft.call(this, e);
        var t = this._table._getTableHeaderRow();
        t && S.setScrollLeft(t.parentNode, e);
        var o = this._table._getTableFooterRow();
        o && S.setScrollLeft(o.parentNode, e)
    }, N.prototype.registerScrollListeners = function() {
        N.superclass.registerScrollListeners.call(this);
        var e = this._table._getTableHeaderRow();
        if (null != e) {
            var t = e.parentNode;
            null == this._headerScrollEventListener && (this._headerScrollEventListener = function(e) {
                var t = this._table._getElementScrollLeft(e.target);
                this._table._scrollLeft !== t && this._table._setScrollX(t)
            }.bind(this)), t.removeEventListener("scroll", this._headerScrollEventListener), t.addEventListener("scroll", this._headerScrollEventListener, !1)
        }
        var o = this._table._getTableFooterRow();
        if (null != o) {
            var i = o.parentNode;
            null == this._footerScrollEventListener && (this._footerScrollEventListener = function(e) {
                var t = this._table._getElementScrollLeft(e.target);
                this._table._scrollLeft !== t && this._table._setScrollX(t)
            }.bind(this)), i.removeEventListener("scroll", this._footerScrollEventListener), i.addEventListener("scroll", this._footerScrollEventListener, !1)
        }
    }, N.prototype.unregisterScrollListeners = function() {
        N.superclass.unregisterScrollListeners.call(this);
        var e = this._table._getTableHeaderRow();
        null != e && null != this._headerScrollEventListener && e.parentNode.removeEventListener("scroll", this._headerScrollEventListener);
        var t = this._table._getTableFooterRow();
        null != t && null != this._footerScrollEventListener && t.parentNode.removeEventListener("scroll", this._footerScrollEventListener)
    }, N.prototype._restoreScrollLeft = function(e) {
        S.setScrollLeft(this.getScroller(), e);
        var t = this._table._getTableHeaderRow();
        t && S.setScrollLeft(t.parentNode, e);
        var o = this._table._getTableFooterRow();
        o && S.setScrollLeft(o.parentNode, e)
    }, N.prototype.getScroller = function() {
        return this._table._getTableBody()
    }, N.prototype.getContentElement = function() {
        return null
    }, N.prototype.getColumnScrollLeft = function(e) {
        if (0 === e) return 0;
        var t = this.getScroller(),
            o = "rtl" === this._table._GetReadingDirection(),
            i = this._table._getTableHeaderColumn(e);
        return null != i ? o ? t.clientWidth - i.offsetLeft - i.offsetWidth : i.offsetLeft : void 0
    }, N.prototype.getRowScrollTop = function(e) {
        return e.offsetTop
    }, N.prototype.getVerticalOverflowDiff = function(e) {
        var t = this.getScroller(),
            o = e.getBoundingClientRect(),
            i = t.getBoundingClientRect(),
            l = {};
        return l.top = i.top - o.top + t.clientTop, l.bottom = o.bottom - i.bottom + (t.offsetHeight - t.clientHeight - t.clientTop), l
    }, N.prototype.getHorizontalOverflowDiff = function(e) {
        var t = "rtl" === this._table._GetReadingDirection(),
            o = this.getScroller(),
            i = this.getScrollBarWidth(),
            l = e.getBoundingClientRect(),
            n = o.getBoundingClientRect(),
            s = {};
        return t ? (s.left = n.left - l.left + i, s.right = l.right - n.right) : (s.left = n.left - l.left, s.right = l.right - n.right + i), s
    }, N.prototype._freezeColumnWidths = function(e) {
        var t = this._table._getColumnDefs().length;
        this._frozenWidthRows || (this._frozenWidthRows = []);
        for (var o = [], i = this._table._getTableBodyLegacyWidthBuffer(), l = 0; l < t; l++) {
            var n = i.childNodes[l];
            if (null != n) {
                var s = parseFloat(n.style[D.CSS_PROP._MIN_WIDTH]);
                isNaN(s) ? o.push(null) : o.push(s)
            } else o.push(null)
        }
        for (var a = e.childNodes, r = 0; r < a.length; r++)
            if ("TR" === a[r].nodeName) {
                for (var _ = a[r], h = this._table._getTableBodyCells(null, _), d = 0; d < h.length; d++) {
                    var u = o[d];
                    isNaN(u) || this._applyForcedColumnWidth(h[d], u)
                }
                this._frozenWidthRows.push(_)
            }
    }, N.prototype._unfreezeColumnWidths = function() {
        if (this._frozenWidthRows)
            for (var e = 0; e < this._frozenWidthRows.length; e++)
                for (var t = this._table._getTableBodyCells(null, this._frozenWidthRows[e]), o = 0; o < t.length; o++) {
                    var i = t[o];
                    this._applyForcedColumnWidth(i, ""), this._table._styleTableBodyCell(o, i)
                }
        this._frozenWidthRows = []
    }, N.prototype._setColumnWidths = function(e) {
        var t, o, i, l, n = [],
            s = [],
            a = [],
            r = [],
            _ = this._table._getColumnDefs().length,
            h = this._table._getTableBodyLegacyWidthBuffer();
        for (t = 0; t < _; t++)
            if (!1 !== this._forcedWidthColumns[t]) n[t] = null, a[t] = null, r[t] = null;
            else {
                if (null != (o = this._table._getTableHeaderColumn(t))) {
                    n[t] = this._getForcedColumnWidth(o, window.getComputedStyle(o));
                    var d = this._table._getTableElementsByClassName(o, D.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS);
                    d.length > 0 && (s[t] = d[0].clientHeight)
                }
                null != (i = h.childNodes[t]) && (a[t] = this._getForcedColumnWidth(i, window.getComputedStyle(i))), null != (l = this._table._getTableFooterCell(t)) && (r[t] = this._getForcedColumnWidth(l, window.getComputedStyle(l)))
            }
        for (t = 0; t < _; t++) o = this._table._getTableHeaderColumn(t), l = this._table._getTableFooterCell(t), !1 !== this._forcedWidthColumns[t] ? t === _ - 1 && !this.isTableWidthConstrained() && e > 0 ? (null != o && (this._applyForcedColumnWidth(o, this._forcedWidthColumns[t] + e), this._applyColumnHeaderHeight(o, s[t])), null != l && this._applyForcedColumnWidth(l, this._forcedWidthColumns[t] + e)) : this._applyColumnHeaderHeight(o, s[t]) : (t === _ - 1 && !this.isTableWidthConstrained() && e > 0 ? (null != o && (this._applyForcedColumnWidth(o, n[t] + e), this._applyColumnHeaderHeight(o, s[t])), null != l && this._applyForcedColumnWidth(l, r[t] + e)) : (null != o && (this._applyForcedColumnWidth(o, n[t]), this._applyColumnHeaderHeight(o, s[t])), null != l && this._applyForcedColumnWidth(l, r[t])), null != (i = h.childNodes[t]) && this._applyForcedColumnWidth(i, a[t]))
    }, N.prototype._isTableColumnsWidthSet = function() {
        for (var e = this._table._getColumnDefs().length, t = 0; t < e; t++)
            if (!1 !== this._forcedWidthColumns[t]) return !0;
        return !1
    }, N.prototype._isAllTableColumnsWidthSet = function() {
        for (var e = this._table._getColumnDefs().length, t = 0; t < e; t++)
            if (!1 === this._forcedWidthColumns[t]) return !1;
        return !0
    }, N.prototype.refreshTableDimensions = function() {
        var e = this._getSizingState(),
            t = this._getTableUpdates();
        if (!t.has(D._UPDATE._DATA_REFRESH) && !t.has(D._UPDATE._DATA_SORT) && !t.has(D._UPDATE._ATTACHED) && !t.has(D._UPDATE._SHOWN) && !t.has(D._UPDATE._RESIZE) && !t.has(D._UPDATE._REFRESH) && !t.has(D._UPDATE._COL_RESIZE) && !t.has(D._UPDATE._COL_REORDER) && !t.has(D._UPDATE._ROW_REFRESH) && (!t.has(D._UPDATE._ROWS_ADDED) || e.hasVerticalOverflow) && (!t.has(D._UPDATE._ROWS_REMOVED) || !e.hasVerticalOverflow)) return this._clearTableUpdates(), void this._enableTableVisibility();
        this._clearColumnSizingCache();
        var o = this._table._getTable(),
            i = this._table._getTableContainer(),
            l = this._table._getTableHeader(),
            n = this._table._getTableBody(),
            s = this._table._getTableFooter(),
            a = this._table._getTableBottomSlot();
        this.clearCachedDimensions(), this._removeTableDimensionsStyling(), this._table._styleTableContainer(i), this._setForcedColumnWidths(), this._verifyMinAndMaxWidths();
        var r = this._getBottomSlotHeight(),
            _ = this._getTableContainerScrollableState(r);
        if (e.hasVerticalOverflow = 1 === _[0], e.hasHorizontalOverflow = 1 === _[1], null != n) {
            var h = n.offsetHeight - n.clientHeight;
            if (e.hasVerticalOverflow || e.hasHorizontalOverflow) {
                var d = i.clientWidth,
                    u = i.clientHeight,
                    c = this._getDefaultScrollBarSize();
                if (c > 0)
                    if (e.hasHorizontalOverflow || this._isVerticalScrollBarHidden()) {
                        if (!e.hasVerticalOverflow) {
                            var S = this._table._getTableLegacySizer();
                            S.style[D.CSS_PROP._HEIGHT] = c + D.CSS_VAL._PX, i.clientHeight < u + c ? (u = i.clientHeight, o.style[D.CSS_PROP._HEIGHT] = u - c - r + D.CSS_VAL._PX, u - c < o.clientHeight + r && (e.hasVerticalOverflow = !0)) : u = i.clientHeight, S.style[D.CSS_PROP._HEIGHT] = ""
                        }
                    } else o.style[D.CSS_PROP._WIDTH] = d + c + D.CSS_VAL._PX, i.clientWidth < d + c ? (d = i.clientWidth, o.style[D.CSS_PROP._WIDTH] = d - c + D.CSS_VAL._PX, d - c < o.clientWidth && (e.hasHorizontalOverflow = !0)) : (d = i.clientWidth, o.style[D.CSS_PROP._WIDTH] = "");
                e.hasVerticalOverflow && this._isVerticalScrollBarHidden() && (n.style[D.CSS_PROP._OVERFLOW_Y] = "hidden");
                var E = this.getScrollBarWidth();
                this._setColumnWidths(E), e.hasVerticalOverflow && i.classList.add(D.CSS_CLASSES._TABLE_SCROLL_VERTICAL_CLASS), e.hasHorizontalOverflow && i.classList.add(D.CSS_CLASSES._TABLE_SCROLL_HORIZONTAL_CLASS), i.classList.add(D.CSS_CLASSES._TABLE_LEGACY_SCROLL_CLASS);
                var C = 0,
                    T = this._table._getTableElementsByTagName(o, "caption");
                if (T.length > 0 && (C = (T = T[0]).offsetHeight, T.style[D.CSS_PROP._DISPLAY] = D.CSS_VAL._INLINE, null != l)) {
                    var p = window.getComputedStyle(i);
                    l.style[D.CSS_PROP._BORDER_TOP] = p[D.CSS_PROP._BORDER_TOP]
                }
                n.style[D.CSS_PROP._WIDTH] = d + D.CSS_VAL._PX;
                var g = 0;
                null != s && (g = s.offsetHeight, n.style[D.CSS_PROP._TOP] = -1 * g + D.CSS_VAL._PX);
                var f, A = u - (null != l ? l.offsetHeight : 0) - g - C - r - h;
                if (A > 0 && (n.style[D.CSS_PROP._HEIGHT] = A + D.CSS_VAL._PX, n.style[D.CSS_PROP._MIN_HEIGHT] = A + D.CSS_VAL._PX), e.hasHorizontalOverflow) {
                    if (0 === this._table._getTableBodyRows().length) {
                        var m = this._table._getTableBodyMessageCell();
                        if (m) {
                            var b = m.offsetWidth;
                            null != l && (b = Math.max(b, l.offsetWidth)), null != s && (b = Math.max(b, s.offsetWidth)), this._applyForcedColumnWidth(m, b)
                        }
                    }
                    f = d - E + D.CSS_VAL._PX
                } else f = d + D.CSS_VAL._PX;
                null != l && (l.style[D.CSS_PROP._WIDTH] = f), null != s && (s.style[D.CSS_PROP._TOP] = A + D.CSS_VAL._PX, s.style[D.CSS_PROP._WIDTH] = f)
            } else this._isTableColumnsWidthSet() && this._setColumnWidths(0), r > 0 && -1 === _[0] && (a.style[D.CSS_PROP._BOTTOM] = 0, a.style[D.CSS_PROP._POSITION] = D.CSS_VAL._ABSOLUTE);
            this._table._isStatusMessageShown() && this._table._refreshTableStatusPosition(), this._table._refreshTouchAffordanceGlassPanePosition(), this._finalizeTableDimensions()
        }
    }, N.prototype._removeTableDimensionsStyling = function() {
        N.superclass._removeTableDimensionsStyling.call(this), this._table._getTableContainer().classList.remove(D.CSS_CLASSES._TABLE_LEGACY_SCROLL_CLASS)
    }, N.prototype._removeHeaderColumnAndCellColumnWidths = function() {
        var e, t = this._table._getColumnDefs().length;
        for (e = 0; e < t; e++) {
            var o = this._table._getTableHeaderColumn(e);
            null != o && (this._applyForcedColumnWidth(o, ""), this._table._styleTableHeaderColumn(e, o))
        }
        this._unfreezeColumnWidths();
        var i = this._table._getTableBodyRows();
        if (i.length > 0)
            for (e = 0; e < t; e++) {
                var l;
                if (null != this._forcedWidthColumns && !1 !== this._forcedWidthColumns[e])
                    for (var n = 0; n < i.length; n++) null !== (l = this._table._getTableBodyCell(n, e, null)) && (this._applyForcedColumnWidth(l, ""), this._table._styleTableBodyCell(e, l));
                else null != (l = this._table._getTableBodyLegacyWidthBuffer().childNodes[e]) && this._applyForcedColumnWidth(l, "")
            }
        for (e = 0; e < t; e++) {
            var s = this._table._getTableFooterCell(e);
            null != s && (this._applyForcedColumnWidth(s, ""), this._table._styleTableFooterCell(e, s))
        }
        var a = this._table._getTableBodyMessageCell();
        a && this._applyForcedColumnWidth(a, "")
    }, N.prototype.handleMouseEnterHeaderCell = function(e) {
        this._setResizeCursor(e)
    }, N.prototype.handleMouseMoveHeader = function(e) {
        this._setResizeCursor(e)
    }, N.prototype.handleMouseMoveHeaderCell = function(e) {
        this._setResizeCursor(e) && this._table._handleMouseLeaveColumnHeader(this._table._getEventTargetElement(e))
    }, N.prototype.handleMouseUp = function(e) {
        this._handleHeaderColumnResizeEnd(e)
    }, N.prototype.handleMouseLeaveTable = function() {
        this._clearTableHeaderColumnsResize()
    }, N.prototype.handleTouchMoveHeader = function(e) {
        this._table._isTableColumnsResizable() && this._setResizeCursor(e)
    }, N.prototype.handleTouchEnd = function(e) {
        this._handleHeaderColumnResizeEnd(e) && e.preventDefault()
    }, N.prototype.handleTouchCancel = function() {
        this._clearTableHeaderColumnsResize()
    }, N.prototype.handleKeyDownEsc = function() {
        this._clearTableHeaderColumnsResize()
    }, N.prototype.handleFocusout = function() {
        this._clearTableHeaderColumnsResize()
    }, N.prototype._setResizeCursor = function(e) {
        var t = this._table._getEventTargetElement(e),
            o = this._table._getElementColumnIdx(t);
        if (null == o) return !1;
        if (this._table._getColumnDefs()[o].resizable === D._OPTION_DISABLED && this._resizeStartColumnIdx !== o - 1 && this._resizeStartColumnIdx !== o + 1) return !1;
        if (null == this._resizeStartColumnIdx) return null !== this._isHeaderColumnResizeStart(e) ? (t.style.cursor = D.CSS_VAL._COL_RESIZE, !0) : (t.style.cursor = "", !1);
        if (!this._table._getTableHeaderColumns()) return !1;
        if (o === this._resizeStartColumnIdx || this._resizeColumnStart && o === this._resizeStartColumnIdx - 1 || !this._resizeColumnStart && o === this._resizeStartColumnIdx + 1) {
            var i = this._getTableHeaderColumnResizeIndicator();
            if (null != i) {
                var l = this.getScroller().getBoundingClientRect();
                return i.style.left = e.originalEvent.clientX - l.left + "px", !0
            }
        }
        return !1
    }, N.prototype._handleHeaderColumnResizeStart = function(e, t) {
        var o = this._table._getEventTargetElement(e),
            i = this._table._getElementColumnIdx(o);
        if (null != i) {
            var l = this._table._getColumnDefs()[i];
            if (this._resizeColumnStart = this._isHeaderColumnResizeStart(e), l.resizable === D._OPTION_ENABLED && null !== this._resizeColumnStart) return this._resizeStartColumnIdx = i, this._resizeStartPageX = this._getPageX(e), this._setTableHeaderColumnsResizeStyling(), this._setTableHeaderColumnResizeIndicator(i), e.preventDefault(), !0
        }
        return this._resizeStartColumnIdx = null, this._resizeStartPageX = null, !1
    }, N.prototype._handleHeaderColumnResizeEnd = function(e) {
        var t = this._table.options.columns.length,
            o = this._table._getEventTargetElement(e),
            i = this._table._getElementColumnIdx(o);
        if (null !== i && i === this._resizeStartColumnIdx || this._resizeColumnStart && i === this._resizeStartColumnIdx - 1 || !this._resizeColumnStart && i === this._resizeStartColumnIdx + 1) {
            var l = this._table._getTableHeaderColumn(this._resizeStartColumnIdx);
            if (null != l) {
                var n, s = l.getBoundingClientRect().width;
                if (this._resizeStartColumnIdx === t - 1 && this.isTableHeightConstrained() && (s -= this.getScrollBarWidth()), n = "rtl" === this._table._GetReadingDirection() && this._resizeColumnStart || "ltr" === this._table._GetReadingDirection() && !this._resizeColumnStart ? this._getPageX(e) - this._resizeStartPageX : this._resizeStartPageX - this._getPageX(e), Math.abs(n) > 2) {
                    var a = s + n,
                        r = this.getMinimumForcedOffsetWidth(this._resizeStartColumnIdx);
                    r > a && (n += r - a, a = r);
                    for (var _ = [], h = 0; h < t; h++) _[h] = c.extend({}, {}, this._table.options.columns[h]);
                    var d = this._resizeColumnStart ? this._resizeStartColumnIdx - 1 : this._resizeStartColumnIdx + 1;
                    d === t - 1 && this.isTableHeightConstrained() && (n += this.getScrollBarWidth());
                    var u = this._table._getTableHeaderColumn(d);
                    if (u) {
                        var S = u.getBoundingClientRect().width - n;
                        (r = this.getMinimumForcedOffsetWidth(d)) > S && (a += S - r, S = r), _[d].width = this.getWidthPropertyFromOffsetWidth(S, u)
                    }
                    return _[this._resizeStartColumnIdx].width = this.getWidthPropertyFromOffsetWidth(a, l), this._table.option("columns", _, {
                        _context: {
                            writeback: !0,
                            internalSet: !0
                        }
                    }), this._table._clearCachedMetadata(), this._table._queueTask(function() {
                        this.notifyTableUpdate(D._UPDATE._COL_RESIZE), setTimeout(function() {
                            this._clearTableHeaderColumnsResize()
                        }.bind(this), 0)
                    }.bind(this)), !0
                }
            }
        }
        return this._clearTableHeaderColumnsResize(), !1
    }, N.prototype._clearTableHeaderColumnsResize = function() {
        this._resizeStartColumnIdx = null, this._resizeColumnStart = null, this._resizeStartPageX = null, this._clearTableHeaderColumnsResizeStyling(), this._removeTableHeaderColumnResizeIndicator()
    }, N.prototype._isHeaderColumnResizeStart = function(e) {
        var t = null,
            o = this._table.options.columns.length,
            i = this._table._getElementColumnIdx(e.target),
            l = this._table._getTableHeaderColumn(i);
        if (null !== l) {
            var n = this._table._GetReadingDirection(),
                s = l.getBoundingClientRect(),
                a = Math.abs(e.originalEvent.clientX - s.left),
                r = Math.abs(e.originalEvent.clientX - s.right);
            a <= D.RESIZE_OFFSET ? "rtl" === n && i !== o - 1 ? t = !1 : "ltr" === n && 0 !== i && (t = !0) : r <= D.RESIZE_OFFSET && ("ltr" === n && i !== o - 1 ? t = !1 : "rtl" === n && 0 !== i && (t = !0))
        }
        return t
    }, N.prototype._setTableHeaderColumnResizeIndicator = function(e) {
        var t = this._getTableHeaderColumnResizeIndicator();
        null == t && (t = this._createTableHeaderColumnResizeIndicator());
        var o = this._table._getTable().getBoundingClientRect(),
            i = this.getScroller().getBoundingClientRect(),
            l = this._table._getTableHeaderColumn(e).getBoundingClientRect();
        t.style.height = o.height + "px", this._resizeColumnStart ? ("rtl" === this._table._GetReadingDirection() ? t.style.left = l.left + l.width - i.left + "px" : t.style.left = l.left - i.left + "px", t.style.borderLeftWidth = "2px", t.style.borderRightWidth = "0") : ("rtl" === this._table._GetReadingDirection() ? t.style.left = l.left - i.left + "px" : t.style.left = l.left + l.width - i.left + "px", t.style.borderRightWidth = "2px", t.style.borderLeftWidth = "0")
    }, N.prototype._setTableHeaderColumnsResizeStyling = function() {
        this._table._getTable().classList.add(D.CSS_CLASSES._COLUMN_HEADER_RESIZING_CLASS)
    }, N.prototype._clearTableHeaderColumnsResizeStyling = function() {
        var e = this._table._getTableHeaderColumns();
        if (e)
            for (var t = 0; t < e.length; t++) e[t].style.cursor = "";
        this._table._getTable().classList.remove(D.CSS_CLASSES._COLUMN_HEADER_RESIZING_CLASS)
    }, N.prototype._createTableHeaderColumnResizeIndicator = function() {
        var e = this._getTableHeaderColumnResizeIndicator();
        if (!e) {
            var t = this._table._getTableContainer();
            e = document.createElement(D.DOM_ELEMENT._DIV), t.appendChild(e), e.classList.add(D.CSS_CLASSES._COLUMN_HEADER_RESIZE_INDICATOR_CLASS), this._table._cacheDomElement(D.CSS_CLASSES._COLUMN_HEADER_RESIZE_INDICATOR_CLASS, e)
        }
        return e
    }, N.prototype._getTableHeaderColumnResizeIndicator = function() {
        return this._table._getTableElementByClassName(D.CSS_CLASSES._COLUMN_HEADER_RESIZE_INDICATOR_CLASS, !0)
    }, N.prototype._removeTableHeaderColumnResizeIndicator = function() {
        var e = this._getTableHeaderColumnResizeIndicator();
        e && (c(e).remove(), this._table._clearDomCache(D.CSS_CLASSES._COLUMN_HEADER_RESIZE_INDICATOR_CLASS))
    }, N.prototype.displayDragOverIndicatorColumn = function(e, t) {
        this._table._removeDragOverIndicatorColumn();
        var o = this._table._getTableHeaderRow(),
            i = this._table._getTableHeaderColumn(e),
            l = t ? D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS : D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS;
        null != i ? i.classList.add(l) : 0 === this._table._getColumnDefs().length && o.classList.add(l)
    }, N.prototype.removeDragOverIndicatorColumn = function() {
        for (var e = this._table._tableQuerySelectorAll(this._table._getTable(), "." + D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS + ",." + D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS), t = e.length, o = 0; o < t; o++) e[o].classList.remove(D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS), e[o].classList.remove(D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS)
    };
    const B = function(e) {
        B.superclass.constructor.call(this, e)
    };
    u.Object.createSubclass(B, w, "TableStickyLayoutManager"), B.prototype.unregisterListeners = function() {
        B.superclass.unregisterListeners.call(this), this._clearMouseResizeListeners()
    }, B.prototype.getScroller = function() {
        if (null == this._scroller) {
            var e, t = this._table.options.scrollPolicyOptions;
            null != t && null != (e = t.scroller) && ("string" == typeof e && null == (e = document.querySelector(e)) && E.error("the css selector string specified in scroller attribute does not resolve to any element"), null == e || e.contains(this._table._getRootElement()) || (E.error("the specified scroller must be an ancestor of the component"), e = null)), this._scroller = null != e ? e : this._table._getTableScroller()
        }
        return this._scroller
    }, B.prototype._isHTMLScroller = function() {
        return null != this._table.options.scrollPolicyOptions && "html" === this._table.options.scrollPolicyOptions.scroller
    }, B.prototype.getContentElement = function() {
        return this.getScroller() !== this._table._getTableScroller() ? this._table._getTable() : null
    }, B.prototype.getColumnScrollLeft = function(e) {
        if (0 === e) return 0;
        var t, o, i = 0;
        this._table._isDefaultSelectorEnabled() && (i += this._selectorColWidth);
        var l = this._getFrozenStartColumnIndexes();
        for (t = 0; t < l.length && (o = l[t]) < e; t++) i += this._appliedColumnWidths[o];
        var n = this.getScroller(),
            s = "rtl" === this._table._GetReadingDirection(),
            a = this._table._getTableHeaderColumn(e);
        return null != a ? s ? n.clientWidth - i - a.offsetLeft - a.offsetWidth : a.offsetLeft - i : void 0
    }, B.prototype.getRowScrollTop = function(e) {
        var t = e.offsetTop;
        if (!this._table._isTableHeaderless()) {
            var o = this._table._getTableHeader();
            null != o && (t -= o.offsetHeight)
        }
        if (this._table._isAddNewRowEnabled()) {
            var i = this._table._getPlaceHolderRow();
            null != i && (t -= i.offsetHeight)
        }
        return t
    }, B.prototype._handleScrollerScrollLeft = function(e) {
        B.superclass._handleScrollerScrollLeft.call(this, e), this._updateFrozenEdges(e, !1), null != this._dragIndicatorColumnIndex && this.displayDragOverIndicatorColumn()
    }, B.prototype.getVerticalOverflowDiff = function(e) {
        var t, o, i, l, n = e.getBoundingClientRect();
        this._table._isExternalScrollEnabled() ? (i = null == this._table.options.scrollPolicyOptions.scrollerOffsetTop ? 0 : this._table.options.scrollPolicyOptions.scrollerOffsetTop, l = null == this._table.options.scrollPolicyOptions.scrollerOffsetBottom ? 0 : this._table.options.scrollPolicyOptions.scrollerOffsetBottom) : (i = 0, l = 0);
        var s = this._table._getTableHeader();
        null != s && (i += s.offsetHeight);
        var a = this._table._getPlaceHolderRow();
        null != a && (i += a.offsetHeight);
        var r = this._table._getTableFooter();
        if (null != r && (l += r.offsetHeight), this._isHTMLScroller()) t = 0, o = this.getScroller().clientHeight;
        else {
            var _ = this.getScrollBarHeight(),
                h = this.getScroller().getBoundingClientRect();
            t = h.top, o = h.bottom - _
        }
        return {
            top: t + i - n.top,
            bottom: n.bottom - o + l
        }
    }, B.prototype.getHorizontalOverflowDiff = function(e, t) {
        var o, i, l, n, s = "rtl" === this._table._GetReadingDirection(),
            a = this.getScroller(),
            r = this.getScrollBarWidth(),
            _ = e.getBoundingClientRect(),
            h = a.getBoundingClientRect();
        this._table._isExternalScrollEnabled() ? (l = null == this._table.options.scrollPolicyOptions.scrollerOffsetStart ? 0 : this._table.options.scrollPolicyOptions.scrollerOffsetStart, n = null == this._table.options.scrollPolicyOptions.scrollerOffsetEnd ? 0 : this._table.options.scrollPolicyOptions.scrollerOffsetEnd) : (l = 0, n = 0), this._table._isDefaultSelectorEnabled() && (l += this._selectorColWidth);
        var d = this._getFrozenStartColumnIndexes();
        for (o = 0; o < d.length && (i = d[o]) < t; o++) l += this._appliedColumnWidths[i];
        var u = this._getFrozenEndColumnIndexes();
        for (o = u.length - 1; o > -1 && (i = u[o]) > t; o--) n += this._appliedColumnWidths[i];
        var c = {};
        return s ? (c.left = h.left + n - _.left + r, c.right = _.right - h.right + l) : (c.left = h.left + l - _.left, c.right = _.right - h.right + n + r), c
    }, B.prototype._clearAllCache = function() {
        this._clearColumnSizingCache()
    }, B.prototype._clearColumnSizingCache = function() {
        B.superclass._clearColumnSizingCache.call(this), this._appliedColumnWidths = null, this._columnInitWidths = null, this._selectorColWidth = null
    }, B.prototype.refreshTableDimensions = function() {
        var e = this._table._getTableContainer(),
            t = this._getSizingState(),
            o = this._getTableUpdates();
        if (o.has(D._UPDATE._REFRESH)) this._clearAllCache();
        else {
            if (!(o.has(D._UPDATE._DATA_REFRESH) || o.has(D._UPDATE._ATTACHED) || o.has(D._UPDATE._SHOWN) || o.has(D._UPDATE._RESIZE) || o.has(D._UPDATE._COL_RESIZE) || o.has(D._UPDATE._COL_REORDER) || o.has(D._UPDATE._ROWS_ADDED) && !t.hasVerticalOverflow || o.has(D._UPDATE._ROWS_REMOVED) && t.hasVerticalOverflow)) return (o.has(D._UPDATE._ROW_REFRESH) || o.has(D._UPDATE._ROWS_REMOVED) || o.has(D._UPDATE._ADD_ROW_DISPLAY)) && (this.unregisterScrollListeners(), this.clearCachedDimensions(), this._setupTableHeight(this._getBottomSlotHeight()), this._table._styleTableContainer(e), this._restoreCachedScrollPos(), this.registerScrollListeners()), (o.has(D._UPDATE._ROWS_ADDED) || o.has(D._UPDATE._DATA_SORT) || o.has(D._UPDATE._ADD_ROW_DISPLAY)) && (this._initializeFrozenColumns(), this._table._styleTableContainer(e)), this._clearTableUpdates(), void this._enableTableVisibility();
            this._clearColumnSizingCache()
        }
        var i, l = this._getBottomSlotHeight(),
            n = this._table._getTable();
        this.clearCachedDimensions(), this._removeTableDimensionsStyling(), u.AgentUtils.getAgentInfo().browser === u.AgentUtils.BROWSER.SAFARI && (n.classList.remove(D.CSS_CLASSES._TABLE_ELEMENT_CLASS), i = n.offsetWidth, n.classList.add(D.CSS_CLASSES._TABLE_ELEMENT_CLASS)), this._table._styleTableContainer(e), this._initializeColumnLayouts(), this._setupTableHeight(l), (i = this._determineColumnWidths()) > 0 && (n.style[D.CSS_PROP._WIDTH] = i + D.CSS_VAL._PX, n.style["table-layout"] = "fixed"), this._initializeFrozenColumns(), this._updateAddRowTop();
        var s = this._getTableContainerScrollableState(l);
        1 === s[0] ? (t.hasVerticalOverflow = !0, e.classList.add(D.CSS_CLASSES._TABLE_SCROLL_VERTICAL_CLASS)) : t.hasVerticalOverflow = !1, 1 === s[1] ? (t.hasHorizontalOverflow = !0, e.classList.add(D.CSS_CLASSES._TABLE_SCROLL_HORIZONTAL_CLASS)) : t.hasHorizontalOverflow = !1, this._table._isStatusMessageShown() && this._table._refreshTableStatusPosition(), this._finalizeTableDimensions()
    }, B.prototype._updateAddRowTop = function() {
        var e = this._table._getPlaceHolderRowCells(),
            t = e.length;
        if (t > 0)
            for (var o = this._table._getTableHeaderRow(), i = null == this._table.options.scrollPolicyOptions.scrollerOffsetTop ? 0 : this._table.options.scrollPolicyOptions.scrollerOffsetTop, l = null != o ? o.offsetHeight + i : i, n = 0; n < t; n++) e[n].style[D.CSS_PROP._TOP] = l + "px"
    }, B.prototype._initializeColumnLayouts = function() {
        this._setForcedColumnWidths(), this._verifyMinAndMaxWidths()
    }, B.prototype._setupTableHeight = function(e) {
        var t = this._table._getTableScroller();
        t.removeAttribute(D.DOM_ATTR._STYLE);
        var o = window.getComputedStyle(this._table._getTableContainer()),
            i = this.getExactClientHeight(o) - e,
            l = window.getComputedStyle(t),
            n = this.getExactOffsetHeight(l);
        Math.abs(n - i) > D.SIZING_ERROR_MARGIN && (t.style[D.CSS_PROP._HEIGHT] = i + D.CSS_VAL._PX);
        var s = this._table._getTableBottomSlot();
        null != s && (this._table._isTableStretchEnabled() ? (s.style[D.CSS_PROP._BOTTOM] = 0, s.style[D.CSS_PROP._POSITION] = D.CSS_VAL._ABSOLUTE) : (s.style[D.CSS_PROP._BOTTOM] = "", s.style[D.CSS_PROP._POSITION] = ""))
    }, B.prototype._removeHeaderColumnAndCellColumnWidths = function() {
        for (var e = this._table._getColumnDefs().length, t = 0; t < e; t++) {
            var o = this._table._getTableCol(t);
            o.style[D.CSS_PROP._WIDTH] = "", o.style[D.CSS_PROP._DISPLAY] = ""
        }
        this._appliedColumnWidths = null
    }, B.prototype._determineColumnWidths = function() {
        this._savePreferredColWidths();
        var e = this._setAllColumnWidths();
        return this._clearForcedColumnWidths(), e
    }, B.prototype._setAllColumnWidths = function() {
        var e = this._table._getColumnDefs().length,
            t = null != this._selectorColWidth ? this._selectorColWidth : 0;
        this._appliedColumnWidths = [];
        for (var o = 0; o < e; o++) {
            var i = this._table._getTableCol(o),
                l = this._columnInitWidths[o];
            i.style[D.CSS_PROP._WIDTH] = l + D.CSS_VAL._PX, 0 === l && (i.style[D.CSS_PROP._DISPLAY] = D.CSS_VAL._NONE), this._appliedColumnWidths[o] = l, t += l
        }
        return t
    }, B.prototype._clearForcedColumnWidths = function() {
        for (var e = this._table._getTableBodyRows(), t = 0; t < this._forcedWidthColumns.length; t++)
            if (!1 !== this._forcedWidthColumns[t]) {
                var o = this._table._getTableHeaderColumn(t);
                null != o && this._applyForcedColumnWidth(o, "");
                for (var i = 0; i < e.length; i++) {
                    var l = this._table._getTableBodyCell(i, t, null);
                    null != l && this._applyForcedColumnWidth(l, "")
                }
                var n = this._table._getTableFooterCell(t);
                null != n && this._applyForcedColumnWidth(n, "")
            }
    }, B.prototype._savePreferredColWidths = function() {
        if (null == this._selectorColWidth && this._table._isDefaultSelectorEnabled()) {
            var e = this._table._getTableSelectorColumn();
            if (null != e) this._selectorColWidth = e.getBoundingClientRect().width;
            else {
                var t = this._table._getTableBodyRow(0),
                    o = this._table._getTableBodySelectorCell(t);
                null != o && (this._selectorColWidth = o.getBoundingClientRect().width)
            }
        }
        if (null == this._columnInitWidths) {
            this._columnInitWidths = [];
            for (var i = this._table._getColumnDefs().length, l = 0; l < i; l++) {
                var n = this._table._getTableHeaderColumn(l);
                if (null != n) this._columnInitWidths[l] = n.getBoundingClientRect().width;
                else {
                    var s = this._table._getTableBodyCell(0, l, null);
                    null != s && (this._columnInitWidths[l] = s.getBoundingClientRect().width)
                }
            }
        }
    }, B.prototype._initializeFrozenColumns = function(e) {
        var t, o, i, l;
        this._table._isExternalScrollEnabled() ? (i = null == this._table.options.scrollPolicyOptions.scrollerOffsetStart ? 0 : this._table.options.scrollPolicyOptions.scrollerOffsetStart, l = null == this._table.options.scrollPolicyOptions.scrollerOffsetEnd ? 0 : this._table.options.scrollPolicyOptions.scrollerOffsetEnd) : (i = 0, l = 0);
        var n = !1;
        this._table._isDefaultSelectorEnabled() && (this._applyFrozenOffset(-1, i, !0, e), i += this._selectorColWidth, n = !0);
        var s = this._getFrozenStartColumnIndexes();
        if (s.length > 0)
            for (n = !0, t = 0; t < s.length; t++) o = s[t], this._applyFrozenOffset(o, i, !0, e), i += this._appliedColumnWidths[o];
        var a = this._getFrozenEndColumnIndexes();
        if (a.length > 0)
            for (n = !0, t = a.length - 1; t > -1; t--) o = a[t], this._applyFrozenOffset(o, l, !1, e), l += this._appliedColumnWidths[o];
        n && this._updateFrozenEdges(this._scrollLeft, !0, e)
    }, B.prototype._getFrozenStartColumnIndexes = function() {
        for (var e = [], t = this._table._getColumnDefs(), o = 0; o < t.length; o++) t[o].frozenEdge === D._OPTION_FROZEN_EDGE._START && e.push(o);
        return e
    }, B.prototype._getFrozenEndColumnIndexes = function() {
        for (var e = [], t = this._table._getColumnDefs(), o = 0; o < t.length; o++) t[o].frozenEdge === D._OPTION_FROZEN_EDGE._END && e.push(o);
        return e
    }, B.prototype._applyFrozenOffset = function(e, t, o, i) {
        var l, n, s = "rtl" === this._table._GetReadingDirection();
        n = o && !s || !o && s ? D.CSS_PROP._LEFT : D.CSS_PROP._RIGHT;
        var a = t + D.CSS_VAL._PX;
        if (null == i) {
            var r = this._table._getTableBodyRows(),
                _ = this._table._getPlaceHolderRow();
            if (-1 === e) {
                var h = this._table._getTableSelectorColumn();
                if (null != h && (h.style[n] = a), null != _) {
                    var d = this._table._getPlaceHolderRowCells(_)[0];
                    null != d && (d.style[n] = a)
                }
                for (l = 0; l < r.length; l++) {
                    var u = this._table._getTableBodyRow(l),
                        c = this._table._getTableBodySelectorCell(u);
                    null != c && (c.style[n] = a)
                }
                var S = this._table._getTableFooterSelectorCell();
                null != S && (S.style[n] = a)
            } else {
                var E = this._table._getTableHeaderColumn(e);
                if (null != E && (E.style[n] = a), null != _) {
                    var C = this._table._getPlaceHolderRowCell(e);
                    null != C && (C.style[n] = a)
                }
                for (l = 0; l < r.length; l++) {
                    var T = this._table._getTableBodyCell(l, e);
                    null != T && (T.style[n] = a)
                }
                var p = this._table._getTableFooterCell(e);
                null != p && (p.style[n] = a)
            }
        } else if (-1 === e) {
            var g = this._table._getTableBodySelectorCell(i);
            null != g && (g.style[n] = a)
        } else {
            var f = this._table._getTableBodyCell(null, e, i);
            null != f && (f.style[n] = a)
        }
    }, B.prototype._updateFrozenEdges = function(e, t, o) {
        var i, l, n, s, a = this._table._getCurrentHorizontalScrollPosition(e);
        if (0 === a.x) n = null;
        else {
            var r = a.columnIndex;
            n = this._table._isDefaultSelectorEnabled() ? -1 : null;
            var _ = this._getFrozenStartColumnIndexes();
            for (i = 0; i < _.length && (l = _[i]) < r; i++) n = l
        }
        this._updateFrozenEdge(n, !0, t, o);
        var h = this.getScroller(),
            d = h.scrollWidth - h.clientWidth - a.x;
        if (d < 1) s = null;
        else {
            var u = 0,
                c = this._getFrozenEndColumnIndexes();
            for (i = this._appliedColumnWidths.length - 1; i > -1; i--)
                if (-1 !== c.indexOf(i)) s = i;
                else if ((u += this._appliedColumnWidths[i]) > d) break
        }
        this._updateFrozenEdge(s, !1, t, o)
    }, B.prototype._updateFrozenEdge = function(e, t, o, i) {
        var l = !1;
        t ? this._frozenStartIndex !== e && (null != this._frozenStartIndex && this._applyFrozenEdge(this._frozenStartIndex, !1, i), null != e && (this._applyFrozenEdge(e, !0, i), l = !0), this._frozenStartIndex = e) : this._frozenEndIndex !== e && (null != this._frozenEndIndex && this._applyFrozenEdge(this._frozenEndIndex, !1, i), null != e && (this._applyFrozenEdge(e, !0, i), l = !0), this._frozenEndIndex = e), o && !l && this._applyFrozenEdge(e, !0, i)
    }, B.prototype._applyFrozenEdge = function(e, t, o) {
        var i, l = t ? "add" : "remove";
        if (null == o) {
            var n = this._table._getTableBodyRows(),
                s = this._table._getPlaceHolderRow();
            if (-1 === e) {
                var a = this._table._getTableSelectorColumn();
                if (null != a && a.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE), null != s) {
                    var r = this._table._getPlaceHolderRowCells(s)[0];
                    null != r && r.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE)
                }
                for (i = 0; i < n.length; i++) {
                    var _ = this._table._getTableBodyRow(i),
                        h = this._table._getTableBodySelectorCell(_);
                    null != h && h.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE)
                }
                var d = this._table._getTableFooterSelectorCell();
                null != d && d.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE)
            } else {
                var u = this._table._getTableHeaderColumn(e);
                if (null != u && u.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE), null != s) {
                    var c = this._table._getPlaceHolderRowCell(e);
                    null != c && c.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE)
                }
                for (i = 0; i < n.length; i++) {
                    var S = this._table._getTableBodyCell(i, e);
                    null != S && S.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE)
                }
                var E = this._table._getTableFooterCell(e);
                null != E && E.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE)
            }
        } else if (-1 === e) {
            var C = this._table._getTableBodySelectorCell(o);
            null != C && C.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE)
        } else {
            var T = this._table._getTableBodyCell(null, e, o);
            null != T && T.classList[l](D.CSS_CLASSES._TABLE_FROZEN_EDGE)
        }
    }, B.prototype.handleMouseMoveHeaderCell = function(e) {
        this._isColumnResizing || this._setResizeCursor(e)
    }, B.prototype._setResizeCursor = function(e) {
        var t = this._table._getEventTargetElement(e),
            o = this._table._getElementColumnIdx(t);
        if (null != o) {
            if (this._table._getColumnDefs()[o].resizable === D._OPTION_DISABLED) return this._cursor = null, void(t.style.cursor = "");
            var i = !1,
                l = this._table._getTableHeaderColumn(o);
            if (null !== l) {
                var n = this._table._GetReadingDirection(),
                    s = this._table.options.columns.length,
                    a = l.getBoundingClientRect(),
                    r = Math.abs(e.originalEvent.clientX - a.left),
                    _ = Math.abs(e.originalEvent.clientX - a.right);
                r <= D.RESIZE_OFFSET ? "rtl" === n && o !== s - 1 ? (i = !0, this._resizeStartIndex = o, this._resizeEndIndex = o + 1) : "ltr" === n && 0 !== o && (i = !0, this._resizeStartIndex = o - 1, this._resizeEndIndex = o) : _ <= D.RESIZE_OFFSET && ("ltr" === n && o !== s - 1 ? (i = !0, this._resizeStartIndex = o, this._resizeEndIndex = o + 1) : "rtl" === n && 0 !== o && (i = !0, this._resizeStartIndex = o - 1, this._resizeEndIndex = o))
            }
            i ? (this._cursor = "col-resize", t.style.cursor = D.CSS_VAL._COL_RESIZE) : (this._cursor = null, t.style.cursor = "")
        }
    }, B.prototype._handleHeaderColumnResizeStart = function(e, t) {
        return (!t || null == this._resizeStartIndex && null == this._resizeEndIndex) && this._setResizeCursor(e), "col-resize" === this._cursor ? (this._isColumnResizing = !0, this._resizeStartPageX = this._getPageX(e), this._minimumStartColWidth = this.getMinimumForcedOffsetWidth(this._resizeStartIndex), this._minimumEndColWidth = this.getMinimumForcedOffsetWidth(this._resizeEndIndex), this._setResizeIndicator(), e.preventDefault(), t && this._setupMouseResizeListeners(), this._table._queueTask(function() {
            return this._isColumnResizing ? new Promise(function(e) {
                this._finishResize = e
            }.bind(this)) : Promise.resolve()
        }.bind(this)), !0) : (this._resizeStartPageX = null, !1)
    }, B.prototype._setupMouseResizeListeners = function() {
        this._clearMouseResizeListeners(), this._docMouseMoveListener = this._handleResizeMouseMove.bind(this), this._docMouseUpListener = this._handleResizeMouseUp.bind(this), document.addEventListener("mousemove", this._docMouseMoveListener, !1), document.addEventListener("mouseup", this._docMouseUpListener, !1)
    }, B.prototype._clearMouseResizeListeners = function() {
        null != this._docMouseMoveListener && (document.removeEventListener("mousemove", this._docMouseMoveListener, !1), this._docMouseMoveListener = null), null != this._docMouseUpListener && (document.removeEventListener("mouseup", this._docMouseUpListener, !1), this._docMouseUpListener = null)
    }, B.prototype._handleResizeMouseMove = function(e) {
        e && 0 === e.buttons ? this._handleResizeMouseUp(e) : this._updateResizeColumnWidths(e)
    }, B.prototype._handleResizeMouseUp = function(e) {
        this._removeResizeIndicator(), this._updateResizeColumnWidths(e, !0), this._cleanupColumnResizing()
    }, B.prototype._cleanupColumnResizing = function() {
        this._clearMouseResizeListeners(), this._resizeStartIndex = null, this._resizeEndIndex = null, this._isColumnResizing = null, this._resizeStartPageX = null, this._minimumStartColWidth = null, this._minimumEndColWidth = null, null != this._finishResize && (this._finishResize(), this._finishResize = null)
    }, B.prototype.handleTouchMoveHeader = function(e) {
        this._isColumnResizing && this._updateResizeColumnWidths(e)
    }, B.prototype.handleTouchEnd = function(e) {
        this._isColumnResizing && (e.preventDefault(), this._removeResizeIndicator(), this._updateResizeColumnWidths(e, !0), this._cleanupColumnResizing())
    }, B.prototype._updateResizeColumnWidths = function(e, t) {
        var o, i, l, n = this._table._GetReadingDirection(),
            s = this._appliedColumnWidths[this._resizeStartIndex],
            a = this._appliedColumnWidths[this._resizeEndIndex],
            r = this._getPageX(e) - this._resizeStartPageX;
        "ltr" === n ? (o = s + r, i = a - r) : (o = s - r, i = a + r), this._minimumStartColWidth > o ? (l = this._minimumStartColWidth - o, o = this._minimumStartColWidth, i -= l) : this._minimumEndColWidth > i && (l = this._minimumEndColWidth - i, i = this._minimumEndColWidth, o -= l);
        var _ = this._table._getTableCol(this._resizeStartIndex),
            h = this._table._getTableCol(this._resizeEndIndex);
        if (_.style[D.CSS_PROP._WIDTH] = o + D.CSS_VAL._PX, h.style[D.CSS_PROP._WIDTH] = i + D.CSS_VAL._PX, this._updateAddRowTop(), t) {
            for (var d = this._table.options.columns.length, u = [], c = 0; c < d; c++) u[c] = Object.assign({}, {}, this._table.options.columns[c]);
            var S = this._table._getTableHeaderColumn(this._resizeStartIndex);
            u[this._resizeStartIndex].width = this.getWidthPropertyFromOffsetWidth(o, S);
            var E = this._table._getTableHeaderColumn(this._resizeEndIndex);
            u[this._resizeEndIndex].width = this.getWidthPropertyFromOffsetWidth(i, E), this._table.option("columns", u, {
                _context: {
                    writeback: !0,
                    internalSet: !0
                }
            }), this._table._clearCachedMetadata(), this.notifyTableUpdate(D._UPDATE._COL_RESIZE), null != this._finishResize && (this._finishResize(), this._finishResize = null)
        }
    }, B.prototype._setResizeIndicator = function() {
        var e = this._table._getVisibleRowIdxs(),
            t = this._table._getTableHeaderColumn(this._resizeStartIndex);
        null != t && t.classList.add(D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS), e.forEach(function(e) {
            var t = this._table._getTableBodyCell(e, this._resizeStartIndex);
            null != t && t.classList.add(D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS)
        }.bind(this))
    }, B.prototype._removeResizeIndicator = function() {
        var e = this._table._getTableContainer();
        this._table._getTableElementsByClassName(e, D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS).forEach(function(e) {
            e.classList.remove(D.CSS_CLASSES._COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS)
        })
    }, B.prototype.handleRowRefresh = function(e, t, o) {
        B.superclass.handleRowRefresh.call(this, e, t), o && this._initializeFrozenColumns(t)
    }, B.prototype.displayDragOverIndicatorColumn = function(e, t) {
        if (null == e || this._dragIndicatorColumnIndex !== e || this._dragIndicatorIsStart !== t) {
            this._dragIndicatorColumnIndex = null != e ? e : this._dragIndicatorColumnIndex, this._dragIndicatorIsStart = null != t ? t : this._dragIndicatorIsStart;
            var o = this._getTableColumnDropIndicator();
            null == o && (o = this._createTableColumnDropIndicator());
            var i = this.getScroller().getBoundingClientRect(),
                l = this._table._getTableHeaderColumn(this._dragIndicatorColumnIndex).getBoundingClientRect();
            this._dragIndicatorIsStart ? "rtl" === this._table._GetReadingDirection() ? o.style.left = l.left + l.width - i.left + "px" : o.style.left = l.left - i.left + "px" : "rtl" === this._table._GetReadingDirection() ? o.style.left = l.left - i.left + "px" : o.style.left = l.left + l.width - i.left + "px", o.style.height = i.height + "px"
        }
    }, B.prototype.removeDragOverIndicatorColumn = function() {
        var e = this._getTableColumnDropIndicator();
        e && (c(e).remove(), this._table._clearDomCache(D.CSS_CLASSES._COLUMN_DROP_INDICATOR_CLASS)), this._dragIndicatorColumnIndex = null, this._dragIndicatorIsStart = null
    }, B.prototype._createTableColumnDropIndicator = function() {
        var e = this._getTableColumnDropIndicator();
        if (!e) {
            var t = this._table._getTableContainer();
            (e = document.createElement(D.DOM_ELEMENT._DIV)).classList.add(D.CSS_CLASSES._COLUMN_DROP_INDICATOR_CLASS), t.appendChild(e), this._table._cacheDomElement(D.CSS_CLASSES._COLUMN_DROP_INDICATOR_CLASS, e)
        }
        return e
    }, B.prototype._getTableColumnDropIndicator = function() {
        return this._table._getTableElementByClassName(D.CSS_CLASSES._COLUMN_DROP_INDICATOR_CLASS, !0)
    };
    const M = function(e) {
        M.superclass.constructor.call(this, e)
    };
    u.Object.createSubclass(M, B, "TableFixedLayoutManager"), M.prototype._clearAllCache = function() {
        M.superclass._clearAllCache.call(this), this._columnWeights = null, this._columnMinWidths = null, this._columnMaxWidths = null
    }, M.prototype._initializeColumnLayouts = function() {
        var e, t = !1;
        if (this._table._isDefaultSelectorEnabled()) {
            if (null == this._selectorColWidth) {
                t = !0;
                var o = this._table._getTableSelectorColumn();
                if (null != o) this._selectorColWidth = o.offsetWidth;
                else {
                    var i = this._table._getTableBodyRow(0),
                        l = this._table._getTableBodySelectorCell(i);
                    null != l && (this._selectorColWidth = l.offsetWidth)
                }
            }
        } else null != this._selectorColWidth && (t = !0, this._selectorColWidth = null);
        var n = this._table._getColumnDefs(),
            s = n.length;
        if (null == this._columnWeights)
            for (t = !0, this._columnWeights = [], e = 0; e < s; e++) {
                var a = parseFloat(n[e].weight);
                a <= 1 && (a = 1), this._columnWeights[e] = a
            }
        if (null == this._columnMinWidths)
            for (t = !0, this._columnMinWidths = [], e = 0; e < s; e++) {
                var r = this._getPixelStyleEquivalent(n[e].minWidth);
                this._columnMinWidths[e] = null == r || r <= 0 ? 1 : r
            }
        if (null == this._columnMaxWidths)
            for (t = !0, this._columnMaxWidths = [], e = 0; e < s; e++) {
                var _ = this._getPixelStyleEquivalent(n[e].maxWidth);
                this._columnMaxWidths[e] = null != _ && _ <= 0 ? null : _
            }
        if (null == this._columnInitWidths)
            for (t = !0, this._resetTableElementStyling(), this._columnInitWidths = [], e = 0; e < s; e++) {
                var h = this._table._getTableHeaderColumn(e);
                if (null != h) this._columnInitWidths[e] = h.offsetWidth;
                else {
                    var d = this._table._getTableBodyCell(0, e, null);
                    null != d && (this._columnInitWidths[e] = d.offsetWidth)
                }
            } else t && this._resetTableElementStyling();
        return t
    }, M.prototype._resetTableElementStyling = function() {
        this._table._getTable().style = "", this._removeHeaderColumnAndCellColumnWidths()
    }, M.prototype._removeTableDimensionsStyling = function() {
        this.unregisterScrollListeners()
    }, M.prototype._determineColumnWidths = function() {
        var e = this._table._getTableScroller().clientWidth;
        return this._setAllColumnWidths(e)
    }, M.prototype._setAllColumnWidths = function(e) {
        var t, o = this._table._getColumnDefs(),
            i = o.length,
            l = null != this._selectorColWidth ? this._selectorColWidth : 0,
            n = l,
            s = 0,
            a = [];
        this._appliedColumnWidths = [];
        var r = [];
        for (t = 0; t < i; t++) {
            var _ = this._getPixelStyleEquivalent(o[t].width);
            null != _ ? (r[t] = _, n += _) : (this._columnInitWidths[t] > 0 ? (_ = this._columnMinWidths[t], s += this._columnWeights[t]) : _ = 0, r[t] = !1), a[t] = _, l += _
        }
        if (n < e)
            for (var h = !0; h;) {
                var d = s;
                h = !1;
                var u = e - n;
                for (t = 0; t < i; t++) {
                    if (!1 === r[t])
                        if (a[t] > 0) {
                            var c = this._columnWeights[t],
                                S = Math.floor(c / d * u),
                                E = this._columnMinWidths[t],
                                C = this._columnMaxWidths[t];
                            if (null != E && S < E) {
                                r[t] = E, n += E, s -= c, a[t] = E, h = !0;
                                break
                            }
                            if (null != C && S > C) {
                                r[t] = C, n += C, s -= c, a[t] = C, h = !0;
                                break
                            }
                            a[t] = S, d -= c, u -= S
                        }
                }
                l = e
            }
        for (t = 0; t < i; t++) {
            var T = this._table._getTableCol(t),
                p = a[t];
            T.style[D.CSS_PROP._WIDTH] = p + D.CSS_VAL._PX, 0 === p && (T.style[D.CSS_PROP._DISPLAY] = D.CSS_VAL._NONE), this._appliedColumnWidths[t] = p
        }
        return l
    }, M.prototype._getMinWidthAutoEquivalent = function() {
        return 100
    }, D.prototype._createContextInfo = function() {
        var e = document.createElement(D.DOM_ELEMENT._DIV);
        e.id = this.createSubId("context"), e.classList.add(D.CSS_CLASSES._TABLE_ACC_CONTEXT_INFO_CLASS), e.classList.add(D.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS);
        var t = document.createElement(D.DOM_ELEMENT._DIV);
        t.id = this.createSubId("tableContext"), t.classList.add(D.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS), e.appendChild(t);
        var o = document.createElement(D.DOM_ELEMENT._DIV);
        o.id = this.createSubId("rowContext"), o.classList.add(D.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS), e.appendChild(o);
        var i = document.createElement(D.DOM_ELEMENT._DIV);
        return i.id = this.createSubId("columnContext"), i.classList.add(D.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS), e.appendChild(i), this._getTableContainer().appendChild(e), this._tableContextInfo = t, this._rowContextInfo = o, this._columnContextInfo = i, e
    }, D.prototype._createStateInfo = function() {
        var e = document.createElement(D.DOM_ELEMENT._DIV);
        return e.id = this.createSubId("state"), e.classList.add(D.CSS_CLASSES._TABLE_ACC_STATE_INFO_CLASS), e.classList.add(D.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS), this._getTableContainer().appendChild(e), this._stateInfo = e, e
    }, D.prototype._createRowStateInfo = function() {
        var e = document.createElement(D.DOM_ELEMENT._DIV);
        return e.id = this.createSubId("rowState"), e.classList.add(D.CSS_CLASSES._TABLE_ACC_ROW_STATE_INFO_CLASS), e.classList.add(D.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS), this._getTableContainer().appendChild(e), this._rowStateInfo = e, e
    }, D.prototype._createTableStatusAccNotification = function() {
        var e = this._getTableContainer(),
            t = document.createElement(D.DOM_ELEMENT._DIV);
        return t.setAttribute(D.DOM_ATTR._ROLE, "status"), t.classList.add(D.CSS_CLASSES._TABLE_STATUS_ACC_NOTIFICATION_CLASS), t.classList.add(D.CSS_CLASSES._HIDDEN_CONTENT_ACC_CLASS), e.appendChild(t), this._cacheDomElement(D.CSS_CLASSES._TABLE_STATUS_ACC_NOTIFICATION_CLASS, t), this._accStatus = t, t
    }, D.prototype._updateAccStatusInfo = function(e) {
        var t, o, i = "",
            l = "";
        if (null != this._active) {
            if (!1 !== this._accFirstFocus) {
                var n = this._getColumnDefs().length;
                this._isDefaultSelectorEnabled() && (n += 1);
                var s, a = this._getTableBodyRows().length;
                s = 0 === a ? "accessibleSummaryExact" : "accessibleSummaryEstimate", this._tableContextInfo.textContent = this.getTranslatedString(s, {
                    colnum: n,
                    rownum: a
                }), i += this._tableContextInfo.id + " " + this._getTableContainer().id + " "
            }
            var r = this._getActiveType(),
                _ = this._active.index;
            if (r === D.ACTIVE_ELEMENT_TYPES._HEADER) {
                if (this._accRowIndex = null, this._accColumnIndex = null, this._columnContextInfo.textContent = this.getTranslatedString("accessibleColumnHeaderContext", {
                        index: this._isDefaultSelectorEnabled() ? _ + 2 : _ + 1
                    }), i += this._columnContextInfo.id + " ", -1 === _) o = this._getTableSelectorColumn();
                else {
                    o = this._getTableHeaderColumn(_);
                    var h = this._getSelectedHeaderColumnIdxs();
                    for (t = 0; t < h.length; t++)
                        if (h[t] === _) {
                            l += this.getTranslatedString("accessibleStateSelected") + " ";
                            break
                        }
                    var d = this._getColumnDefs()[_],
                        u = c(o).data("sorted");
                    null != u ? u === D._COLUMN_SORT_ORDER._ASCENDING ? l += this.getTranslatedString("accessibleSortAscending", {
                        id: ""
                    }) + " " : l += this.getTranslatedString("accessibleSortDescending", {
                        id: ""
                    }) + " " : d.sortable === D._OPTION_ENABLED && (l += this.getTranslatedString("accessibleSortable", {
                        id: ""
                    }) + " ")
                }
                A.getActionableElementsInNode(o).length > 0 && (l += this.getTranslatedString("accessibleContainsControls")), i += o.id + " "
            } else if (r === D.ACTIVE_ELEMENT_TYPES._FOOTER) {
                var S;
                if (this._accRowIndex = null, this._accColumnIndex = null, this._columnContextInfo.textContent = this.getTranslatedString("accessibleColumnFooterContext", {
                        index: this._isDefaultSelectorEnabled() ? _ + 2 : _ + 1
                    }), i += this._columnContextInfo.id + " ", -1 === _) S = this._getTableFooterSelectorCell();
                else {
                    S = this._getTableFooterCell(_);
                    var E = this._getSelectedFooterColumnIdxs();
                    for (t = 0; t < E.length; t++)
                        if (E[t] === _) {
                            l += this.getTranslatedString("accessibleStateSelected") + " ";
                            break
                        }
                }
                A.getActionableElementsInNode(S).length > 0 && (l += this.getTranslatedString("accessibleContainsControls")), null != (o = this._getTableHeaderColumn(_)) && (i += o.id + " "), i += S.id + " "
            } else if (r === D.ACTIVE_ELEMENT_TYPES._DATA_ROW) {
                var C = null != e ? e : this._accColumnIndex;
                null == C && (C = 0);
                var T = this._getTableBodyRow(_);
                if (_ !== this._accRowIndex || !1 !== this._accFirstFocus) {
                    this._rowContextInfo.textContent = this.getTranslatedString("accessibleRowContext", {
                        index: _ + 1
                    });
                    var p = "",
                        g = this._getSelectedRowIdxs();
                    for (t = 0; t < g.length; t++)
                        if (g[t] === _) {
                            p += this.getTranslatedString("accessibleStateSelected") + " ";
                            break
                        }
                    A.getActionableElementsInNode(T).length > 0 && (p += this.getTranslatedString("accessibleContainsControls") + " "), this._rowStateInfo.textContent = p, i += this._rowContextInfo.id + " " + this._getRowHeaderIds(_) + " " + this._rowStateInfo.id + " "
                }
                C === this._accColumnIndex && !1 === this._accFirstFocus || (this._columnContextInfo.textContent = this.getTranslatedString("accessibleColumnContext", {
                    index: this._isDefaultSelectorEnabled() ? C + 2 : C + 1
                }), i += this._columnContextInfo.id + " ");
                var f = this._getTableElementsByClassName(T, D.CSS_CLASSES._TABLE_DATA_CELL_CLASS);
                if (-1 === C) {
                    var m = this._getTableBodySelectorCell(T);
                    null != m && (i += m.id + " ")
                } else null != (o = this._getTableHeaderColumn(C)) && (i += o.id + " " + f[C].id + " ");
                this._accRowIndex = _, this._accColumnIndex = C
            } else if (r === D.ACTIVE_ELEMENT_TYPES._NO_DATA) {
                this._accRowIndex = null, this._accColumnIndex = null, i += this._getNoDataId() + " ";
                var b = this._getActiveElement();
                A.getActionableElementsInNode(b).length > 0 && (l += this.getTranslatedString("accessibleContainsControls"))
            }
            this._stateInfo.textContent = l, i += this._stateInfo.id, this._applyAccStatusLabel(i)
        }
    }, D.prototype._clearAccStatusInfo = function() {
        this._accStatus.setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, ""), this._getTable().setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, "")
    }, D.prototype._applyAccStatusLabel = function(e) {
        !1 !== this._accFirstFocus ? this._accFirstFocus = !1 : this._accActionFocus ? this._accActionFocus = !1 : this._accStatus.setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, e), this._getTable().setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, e)
    }, D.prototype._getRowHeaderIds = function(e) {
        var t, o = "",
            i = this.options.accessibility;
        if (null != i && null != i.rowHeader) {
            var l = i.rowHeader;
            Array.isArray(l) || (l = [l]);
            for (var n = this._getColumnDefs(), s = 0; s < l.length; s++)
                for (var a = l[s], r = 0; r < n.length; r++)
                    if (a === n[r].id) {
                        null != (t = this._getTableBodyCell(e, r)) && (o += t.id + " ");
                        break
                    }
        } else null != (t = this._getTableBodyCell(e, 0)) && (o += t.id + " ");
        return o
    }, D.prototype._getNoDataId = function() {
        var e = this._getTableBodyMessageRow();
        if (null != e) return e.id;
        var t = this._getTableNoDataRow();
        return null != t ? t.id : ""
    }, D.prototype._cleanAccStatus = function() {
        this._accFirstFocus = !0, this._accActionFocus = !1, this._accStatus.removeAttribute(D.DOM_ATTR._ARIA_LABELLEDBY), this._getTable().removeAttribute(D.DOM_ATTR._ARIA_LABELLEDBY)
    }, D.prototype._getData = function() {
        if (!this._data && null != this.options.data) {
            var e = this.options.data;
            if (u.TableDataSource && e instanceof u.TableDataSource || this._isPagingModelTableDataSource()) this._data = new u.TableDataSourceAdapter(e);
            else {
                if (!u.DataProviderFeatureChecker.isDataProvider(e)) {
                    var t = D._LOGGER_MSG._ERR_DATA_INVALID_TYPE_SUMMARY,
                        o = D._LOGGER_MSG._ERR_DATA_INVALID_TYPE_DETAIL;
                    throw new Error(t + "\n" + o)
                }
                e instanceof h || u.DataProviderFeatureChecker.isTreeDataProvider(e) ? this._data = e : this._data = new h(e)
            }
            this._dataOption = this.options.data, this._registerDataSourceEventListeners()
        }
        return this._data
    }, D.prototype._isPagingModelTableDataSource = function() {
        return !!(u.PagingTableDataSource && this.options.data instanceof u.PagingTableDataSource)
    }, D.prototype._registerDataSourceEventListeners = function() {
        var e = this._getData();
        if (null != e) {
            this._unregisterDataSourceEventListeners(), this._dataProviderEventHandlers = [], this._dataProviderEventHandlers.push({
                eventType: "mutate",
                eventHandler: this._handleDataRowMutate.bind(this)
            }), this._dataProviderEventHandlers.push({
                eventType: "refresh",
                eventHandler: this._handleDataRefresh.bind(this)
            });
            for (var t = this._dataProviderEventHandlers.length, o = 0; o < t; o++) {
                var i = e.addEventListener(this._dataProviderEventHandlers[o].eventType, this._dataProviderEventHandlers[o].eventHandler);
                i && (this._dataProviderEventHandlers[o].eventHandler = i)
            }
        }
    }, D.prototype._unregisterDataSourceEventListeners = function() {
        var e = this._getData();
        if (null != this._dataProviderEventHandlers && null != e)
            for (var t = this._dataProviderEventHandlers.length, o = 0; o < t; o++) e.removeEventListener(this._dataProviderEventHandlers[o].eventType, this._dataProviderEventHandlers[o].eventHandler)
    }, D.prototype._handleDataRefresh = function(e) {
        try {
            if (this._hasRefreshInQueue) return;
            if (this._dataFetching) return void(this._pendingFetchStale = !0);
            e.detail && void 0 !== e.detail.disregardAfterKey ? this._queueTask(function() {
                this._getLayoutManager().notifyTableUpdate(D._UPDATE._ROWS_REMOVED), this._resetActiveRow(), this._removeRowsAfterLastValidRow(e.detail.disregardAfterKey), this._hasMoreToFetch() || this._registerDomScroller(), this._animateOnFetch = !0
            }.bind(this)) : (this._hasRefreshInQueue = !0, this._queueTask(function() {
                return this._getLayoutManager().notifyTableUpdate(D._UPDATE._DATA_REFRESH), this._resetActiveRow(), this._beforeDataRefresh(), this._invokeDataFetchRows()
            }.bind(this)))
        } catch (e) {
            E.error(e)
        }
    }, D.prototype._beforeDataRefresh = function() {
        this._clearIdleCallback(), this._adjustScrollPositionOnFetch(), this._invalidateRangeSelection(), null != this._lastSelectedRowIdxArray && (this._lastSelectedRowIdxArray = []), this._initialSelectionStateValidated = !1
    }, D.prototype._removeRowsAfterLastValidRow = function(e) {
        this._getCurrentScrollPosition().y > 0 && this._bufferScrollerForLastRow(e);
        var t = this._getRowIdxForRowKey(e);
        if (t >= 0)
            for (var o = this._getTableBodyRows().length - 1; o > t; o--) this._removeTableBodyRow(o)
    }, D.prototype._bufferScrollerForLastRow = function(e) {
        var t = this._getLayoutManager();
        if (null != e) {
            var o = this._getRowIdxForRowKey(e);
            if (null != o) {
                var i = this._getTableBodyRow(o),
                    l = t.getVerticalOverflowDiff(i).bottom;
                l < 0 && (this._createTableBodyScrollBuffer().style[D.CSS_PROP._HEIGHT] = Math.abs(l) + 1 + D.CSS_VAL._PX)
            }
        } else this._createTableBodyScrollBuffer().style[D.CSS_PROP._HEIGHT] = this._getTableBody().offsetHeight + D.CSS_VAL._PX
    }, D.prototype._handleDataRowMutate = function(e) {
        this._dataFetching ? this._pendingFetchStale = !0 : (null != e.detail.remove && this._handleDataRowRemove(e.detail.remove, e.detail.add), null != e.detail.add && this._handleDataRowAdd(e.detail.add), null != e.detail.update && this._handleDataRowChange(e.detail.update))
    }, D.prototype._handleDataRowRemove = function(e, t) {
        try {
            this._executeTableBodyRowsRemove(e, t)
        } catch (e) {
            E.error(e)
        } finally {
            this._clearDataWaitingState()
        }
    }, D.prototype._executeTableBodyRowsRemove = function(e, t) {
        var o = this,
            i = e[D._CONST_KEYS];
        i && i.size > 0 && this._queueTask(function() {
            var i = o._getRowsFromEventDetailRemove(e);
            if (0 !== i.length) {
                o._getLayoutManager().notifyTableUpdate(D._UPDATE._ROWS_REMOVED), i.sort(function(e, t) {
                    return t.rowIdx - e.rowIdx
                });
                var l, n, s, a = [],
                    r = [],
                    _ = [],
                    h = [],
                    d = i.length,
                    u = !1,
                    S = o._getTableBodyRows();
                if (S.length > 0) {
                    for (s = 0; s < S.length; s++) a.push(s);
                    for (s = 0; s < d; s++) {
                        n = i[s].rowIdx, r.push(n), _.push(i[s].row.key);
                        for (var E = 0; E < a.length; E++)
                            if (a[E] === n) {
                                l = o._getTableBodyRow(n), h.push(l), a.splice(E, 1);
                                break
                            }
                    }
                    0 === a.length && (u = !0)
                }
                var C = o._getTableBody(),
                    T = c.contains(C, document.activeElement),
                    p = !1;
                if (u) T && (p = !0), o._clearSelectionState();
                else
                    for (s = 0; s < d; s++)
                        if (n = i[s].rowIdx, l = o._getTableBodyRow(n), T && null != l && c.contains(l, document.activeElement)) {
                            p = !0;
                            break
                        } if (o._hasEditableRow()) {
                    var g = o._getEditableRowKey();
                    A.containsKey([...e[D._CONST_KEYS]], g) && o._setTableEditable(!1, !0)
                }
                return u ? (o._removeAllTableBodyRows(), b()) : new Promise(function(e) {
                    return o._IsCustomElement() ? o._animateVisibleRows(h, r, "remove").then(function() {
                        return f(), b().then(function() {
                            e(!0)
                        })
                    }) : (f(), b().then(function() {
                        e(!0)
                    }))
                })
            }

            function f() {
                var e, t;
                if (o._getCurrentScrollPosition().y > 0) {
                    var l = 0,
                        n = [];
                    for (e = 0; e < d; e++) {
                        t = i[e].rowIdx;
                        var s = o._getTableBodyRow(t);
                        null != s && (l += s.offsetHeight, n.push(s))
                    }
                    o._createTableBodyScrollBuffer().style[D.CSS_PROP._HEIGHT] = l + D.CSS_VAL._PX;
                    for (var a = 0; a < n.length; a++) o._removeTableBodyRow(null, n[a])
                } else
                    for (e = 0; e < d; e++) t = i[e].rowIdx, o._removeTableBodyRow(t)
            }

            function m() {
                o._syncActiveElement(), p && o._getTable().focus()
            }

            function b() {
                return !0 !== e.transient && o._updateSelectionStateFromEventDetailRemove(e, t), o._refreshTableFooter(), 0 === (S = o._getTableBodyRows()).length ? (o._showNoDataMessage(), o._finalizeNonBodyRowRendering([C]).then(function() {
                    m()
                })) : Promise.resolve().then(function() {
                    m()
                })
            }
            o._updateSelectionStateFromEventDetailRemove(e, t)
        })
    }, D.prototype._getRowsFromEventDetailRemove = function(e) {
        var t = [];
        return e[D._CONST_KEYS].forEach(function(e) {
            var o = this._getRowIdxForRowKey(e);
            if (void 0 !== o) {
                var i = {
                    key: e,
                    index: o
                };
                t.push({
                    row: i,
                    rowIdx: o
                })
            }
        }.bind(this)), t
    }, D.prototype._handleDataRowAdd = function(e) {
        try {
            this._executeTableBodyRowsAdd(e)
        } catch (e) {
            E.error(e)
        } finally {
            this._clearDataWaitingState()
        }
    }, D.prototype._executeTableBodyRowsAdd = function(e) {
        var t = e[D._CONST_KEYS];
        t && t.size > 0 && this._queueTask(function() {
            var t = this._getRowsFromEventDetailAdd(e);
            if (0 !== t.length) {
                var o = this._getLayoutManager();
                o.notifyTableUpdate(D._UPDATE._ROWS_ADDED);
                var i, l, n, s, a = !1,
                    r = [],
                    _ = [],
                    h = this._getTableBody();
                if (t.length > 1) {
                    l = t.length;
                    var d = !0;
                    for (i = 0; i < l; i++) 0 !== i && t[i - 1].rowIdx !== t[i].rowIdx - 1 && (d = !1), _.push(t[i].rowIdx);
                    if (d) {
                        for (n = document.createDocumentFragment(), l = t.length, i = 0; i < l; i++) r.push(this._addSingleTableBodyRow(t[i].rowIdx, t[i].row, n, t[0].rowIdx));
                        o.handleAfterRowsProcessed(n), null != (s = this._getTableBodyRow(t[0].rowIdx)) ? h.insertBefore(n, s) : this._appendElementToTableBody(n, h), a = !0
                    }
                }
                if (!a)
                    for (l = t.length, i = 0; i < l; i++) {
                        var u = t[i].rowIdx;
                        n = document.createDocumentFragment(), r.push(this._addSingleTableBodyRow(u, t[i].row, n, u)), o.handleAfterRowsProcessed(n), null != (s = this._getTableBodyRow(u)) ? h.insertBefore(n, s) : this._appendElementToTableBody(n, h)
                    }
                if (this._clearCachedDomRowData(), this._refreshTableFooter(), 0 === this._scrollTop && (1 === t.length && 0 === t[0].rowIdx || -1 !== _.indexOf(0))) delete(null == this.options.scrollPosition ? {} : this.options.scrollPosition).rowKey;
                return this._requiresDomScrollerRefresh && this._registerDomScroller(), this._IsCustomElement() ? this._animateVisibleRows(r, _, "add").then(function() {
                    return this._syncActiveElement(), this._afterRowsRendered(h)
                }.bind(this)) : (this._syncActiveElement(), this._afterRowsRendered(h))
            }
            this._requiresDomScrollerRefresh && this._registerDomScroller()
        }.bind(this))
    }, D.prototype._getRowsFromEventDetailAdd = function(e) {
        var t = [],
            o = this._getData(),
            i = !this._isLoadMoreOnScroll() || A.isIterateAfterDoneNotAllowed(o),
            l = this._getLocalRowKeys(),
            n = l.length;
        if (!i && 0 === n) return this._notifyAddOutOfViewport(), t;
        var s = A.getAddEventKeysResult(l, e, i),
            a = e[D._CONST_DATA],
            r = e[D._CONST_METADATA],
            _ = [];
        e[D._CONST_KEYS].forEach(function(e) {
            _.push(e)
        }), a instanceof Array || (a = [a]);
        var h = a.length;
        r instanceof Array || (r = [r]);
        var d, c = 0;
        this._isPagingModelDataProvider() && (c = o.getStartItemIndex()), o instanceof u.TableDataSourceAdapter && (u.FlattenedTreeTableDataSource && o.tableDataSource instanceof u.FlattenedTreeTableDataSource ? d = o.tableDataSource : this._isPagingModelTableDataSource() && u.FlattenedTreeTableDataSource && o.tableDataSource.dataSource instanceof u.FlattenedTreeTableDataSource && (d = o.tableDataSource.dataSource)), i || n + h === s.length || this._notifyAddOutOfViewport();
        for (var S = 0; S < h; S++) {
            var E = _[S],
                C = s.indexOf(E);
            if (-1 !== C && -1 === l.indexOf(E)) {
                var T;
                T = d && d._getMetadata ? d._getMetadata(C) : r[S];
                var p = {
                    data: a[S],
                    metadata: T,
                    key: E,
                    index: C + c
                };
                t.push({
                    row: p,
                    rowIdx: C
                })
            }
        }
        return t
    }, D.prototype._notifyAddOutOfViewport = function() {
        this._noMoreData && (this._animateOnFetch = !0, this._requiresDomScrollerRefresh = !0), this._noMoreData = !1
    }, D.prototype._handleDataRowChange = function(e) {
        try {
            this._executeTableBodyRowsChange(e)
        } catch (e) {
            E.error(e)
        } finally {
            this._clearDataWaitingState()
        }
    }, D.prototype._executeTableBodyRowsChange = function(e) {
        this._queueTask(function() {
            this._updateSelectionStateFromEventDetailChange(e);
            var t = this._getRowsFromEventDetailChange(e);
            if (0 !== t.length) {
                this._getLayoutManager().notifyTableUpdate(D._UPDATE._ROW_REFRESH);
                for (var o = t.length, i = [], l = [], n = !1, s = 0; s < o; s++) {
                    var a = t[s],
                        r = this._getTableBodyRow(a.rowIdx);
                    null != r && r !== document.activeElement && r.contains(document.activeElement) && (n = !0), r && (r[D._ROW_ITEM_EXPANDO] = t[s].row);
                    var _ = this._refreshTableBodyRow(a.rowIdx, a.row, null, null, null, !0);
                    _ && (i.push(_), l.push(a.rowIdx))
                }
                return n && this._getTable().focus(), this._refreshTableFooter(), this._IsCustomElement() ? this._animateVisibleRows(i, l, "update").then(function() {
                    return this._finalizeBodyRowRendering(i)
                }.bind(this)) : this._finalizeBodyRowRendering(i)
            }
        }.bind(this))
    }, D.prototype._getRowsFromEventDetailChange = function(e) {
        var t = e[D._CONST_DATA],
            o = e[D._CONST_METADATA],
            i = [];
        e[D._CONST_KEYS].forEach(function(e) {
            i.push(e)
        }), t instanceof Array || (t = [t]), o instanceof Array || (o = [o]);
        for (var l = [], n = t.length, s = 0; s < n; s++) {
            var a = this._getRowIdxForRowKey(i[s]);
            if (void 0 !== a) {
                var r = {
                    data: t[s],
                    key: i[s],
                    index: a,
                    metadata: o[s]
                };
                l.push({
                    row: r,
                    rowIdx: a
                })
            }
        }
        return l
    }, D.prototype._clearCachedDom = function() {
        this._clearCachedDomRowData(), this._clearDomCache()
    }, D.prototype._clearCachedDomRowData = function() {
        this._cachedDomTableBodyRows = null
    }, D.prototype._createContextMenuContainer = function() {
        var e = this._GetContextMenu(),
            t = !(this._isStickyLayoutEnabled() || !this._isTouchDevice()) && this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE;
        return !e && (this._isTableSortable() || t || this._isTableColumnsResizable()) && (this._IsCustomElement() ? (e = document.createElement("oj-menu")).setAttribute(D._DATA_OJ_BINDING_PROVIDER, "none") : (e = document.createElement(D.DOM_ELEMENT._UL), c(e).ojMenu()), e.style[D.CSS_PROP._DISPLAY] = D.CSS_VAL._NONE, e.setAttribute(D.DOM_ATTR._ID, this._getTableId() + "_contextmenu"), this._getTableContainer().appendChild(e), this.option("contextMenu", "#" + e.getAttribute(D.DOM_ATTR._ID), {
            _context: {
                internalSet: !0
            }
        }), this._defaultContextMenu = e), e
    }, D.prototype._populateContextMenuItems = function(e, t) {
        var o = !!this._isTouchDevice() && this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE;
        if (!this._menuContainer)
            if (this._GetDefaultContextMenu()) {
                if ("redwood" === g.parseJSONFromFontFamily("oj-theme-json").behavior) {
                    if (this._isTableColumnsResizable()) {
                        let t = this._createContextMenuItem("resize", this._IsCustomElement());
                        if (e.appendChild(t), this._isTableSortable()) {
                            let t = document.createElement(this._IsCustomElement() ? "oj-option" : "li");
                            e.appendChild(t)
                        }
                    }
                    if (this._isTableSortable()) {
                        let t = this._createContextMenuItem("sortAsc", this._IsCustomElement());
                        e.appendChild(t);
                        let o = this._createContextMenuItem("sortDsc", this._IsCustomElement());
                        e.appendChild(o)
                    }
                } else {
                    if (this._isTableSortable()) {
                        let t = this._createContextMenuItem("sort", this._IsCustomElement());
                        e.appendChild(t)
                    }
                    if (o) {
                        let t = this._createContextMenuItem("enableNonContiguousSelection", this._IsCustomElement());
                        e.appendChild(t)
                    }
                    if (this._isTableColumnsResizable()) {
                        let t = this._createContextMenuItem("resize", this._IsCustomElement());
                        e.appendChild(t)
                    }
                }
                this._menuContainer = e, this._IsCustomElement() ? (e.refresh(), e.addEventListener("ojAction", t)) : (c(e).ojMenu("refresh"), c(e).on("ojselect", t))
            } else {
                var i = e.querySelectorAll("[data-oj-command]");
                if (i.length > 0) {
                    var l, n, s;
                    for (n = 0; n < i.length; n++) "OJ-OPTION" !== i[n].tagName && 0 !== i[n].getElementsByTagName(D.DOM_ELEMENT._A).length || (l = i[n].getAttribute(D._DATA_OJ_COMMAND).split("-"), s = this._createContextMenuItem(l[l.length - 1], this._IsCustomElement()), "OJ-OPTION" === i[n].tagName ? i[n].innerHTML = s.innerHTML : c(i[n]).replaceWith(s));
                    this._menuContainer = e, c(e).data("oj-ojMenu") && (this._IsCustomElement() ? e.refresh() : c(e).ojMenu("refresh")), this._IsCustomElement() ? e.addEventListener("ojAction", t) : c(e).on("ojselect", t)
                }
            }
        return e
    }, D.prototype._createContextMenuItem = function(e, t) {
        if ("sort" === e) {
            var o, i = this._createContextMenuListItem(e, t);
            return o = this._IsCustomElement() ? document.createElement("oj-menu") : document.createElement(D.DOM_ELEMENT._UL), i.appendChild(o), o.appendChild(this._createContextMenuListItem("sortAsc", t)), o.appendChild(this._createContextMenuListItem("sortDsc", t)), i
        }
        if ("sortAsc" === e) return this._createContextMenuListItem(e, t);
        if ("sortDsc" === e) return this._createContextMenuListItem(e, t);
        if ("enableNonContiguousSelection" === e) return this._createContextMenuListItem(e, t);
        if ("disableNonContiguousSelection" === e) return this._createContextMenuListItem(e, t);
        if ("resize" === e) {
            return "redwood" === g.parseJSONFromFontFamily("oj-theme-json").behavior ? this._createContextMenuResizeDialog(0) : this._createContextMenuResizePopup(0), this._createContextMenuListItem(e, t)
        }
        return null
    }, D.prototype._createContextMenuListItem = function(e, t) {
        var o = document.createElement(t ? "oj-option" : "li");
        return o.setAttribute(D._DATA_OJ_COMMAND, "oj-table-" + e), o.appendChild(this._createContextMenuLabel(e, t)), o
    }, D.prototype._createContextMenuLabel = function(e, t) {
        var o = null;
        "sort" === e ? o = this.getTranslatedString("labelSort") : "sortAsc" === e ? o = this.getTranslatedString("labelSortAsc") : "sortDsc" === e ? o = this.getTranslatedString("labelSortDsc") : "enableNonContiguousSelection" === e ? o = this.getTranslatedString("labelEnableNonContiguousSelection") : "disableNonContiguousSelection" === e ? o = this.getTranslatedString("labelDisableNonContiguousSelection") : "resize" === e && (o = this.getTranslatedString("labelResizeColumn"));
        var i = document.createTextNode(o);
        if (t) return i;
        var l = document.createElement(D.DOM_ELEMENT._A);
        return l.setAttribute(D.DOM_ATTR._HREF, "#"), l.appendChild(i), l
    }, D.prototype._createContextMenuResizePopup = function(e) {
        e = Math.round(e);
        var t, o, i, l, n, s, a, r, _, h = this._getTableContainer(),
            d = this._getContextMenuResizePopup(),
            u = this._getTableId(),
            S = this.getTranslatedString("labelResizePopupSpinner");

        function E() {
            d.setAttribute("id", u + "_resize_popup"), d.setAttribute(D._DATA_OJ_BINDING_PROVIDER, "none"), h.appendChild(d), i = document.createElement(D.DOM_ELEMENT._DIV), l = document.createElement(D.DOM_ELEMENT._DIV), (n = document.createElement(D.DOM_ELEMENT._DIV)).classList.add(D.CSS_CLASSES._TEXT_ALIGN_END), d.appendChild(i), d.appendChild(l), d.appendChild(n), (r = document.createElement("h6")).textContent = S, i.appendChild(r)
        }
        return this._IsCustomElement() ? null == d ? (d = document.createElement("oj-popup"), E(), (t = document.createElement("oj-input-number")).setAttribute("id", u + "_resize_popup_spinner"), (s = document.createElement("oj-button")).setAttribute("id", u + "_resize_popup_popupcancel"), s.style.margin = "5px", s.textContent = this.getTranslatedString("labelResizePopupCancel"), (a = document.createElement("oj-button")).setAttribute("id", u + "_resize_popup_popupsubmit"), a.style.margin = "5px", a.textContent = this.getTranslatedString("labelResizePopupSubmit"), l.appendChild(t), n.appendChild(a), n.appendChild(s), o = function() {
            a.disabled = !1, t.value = 0, d.close()
        }, s.addEventListener("click", o), a.addEventListener("click", this._handleContextMenuResizePopup.bind(this)), t.min = 10, t.step = 1, t.value = e, t.displayOptions = {
            messages: ["notewindow"]
        }, t.userAssistanceDensity = "compact", t.validators = [new y({
            pattern: "^[1-9][0-9]*$",
            messageDetail: this.getTranslatedString("msgColumnResizeWidthValidation")
        })], t.addEventListener("validChanged", function(e) {
            "valid" === e.detail.value ? a.disabled = !1 : a.disabled = !0
        }), _ = {
            my: D._POSITION._START_TOP,
            at: D._POSITION._START_BOTTOM,
            collision: "flipfit"
        }, d.setAttribute("position", JSON.stringify(_)), d.setAttribute("modality", "modal"), this._cacheDomElement(u + "_resize_popup", d)) : (t = document.getElementById(u + "_resize_popup_spinner")).value = e : null == d ? (d = document.createElement(D.DOM_ELEMENT._DIV), E(), (t = document.createElement(D.DOM_ELEMENT._INPUT)).setAttribute("id", u + "_resize_popup_spinner"), (s = document.createElement(D.DOM_ELEMENT._BUTTON)).setAttribute("id", u + "_resize_popup_popupcancel"), s.style.margin = "5px", (a = document.createElement(D.DOM_ELEMENT._BUTTON)).setAttribute("id", u + "_resize_popup_popupsubmit"), a.style.margin = "5px", l.appendChild(t), n.appendChild(a), n.appendChild(s), c(a).ojButton({
            component: "ojButton",
            label: this.getTranslatedString("labelResizePopupSubmit")
        }), c(s).ojButton({
            component: "ojButton",
            label: this.getTranslatedString("labelResizePopupCancel")
        }), o = function() {
            c(a).ojButton({
                disabled: !1
            }), c(t).ojInputNumber({
                value: 0
            }), c(d).ojPopup("close")
        }, c(a).on("click", this._handleContextMenuResizePopup.bind(this)), c(s).on("click", o), c(t).ojInputNumber({
            component: "ojInputNumber",
            min: 10,
            step: 1,
            value: e,
            displayOptions: {
                messages: ["notewindow"]
            },
            userAssistanceDensity: "compact",
            validators: [new y({
                pattern: "^[1-9][0-9]*$",
                messageDetail: this.getTranslatedString("msgColumnResizeWidthValidation")
            })]
        }), c(d).ojPopup({
            modality: "modal",
            position: {
                my: D._POSITION._START_TOP,
                at: D._POSITION._START_BOTTOM,
                collision: "flipfit"
            }
        }), c(t).on("change", function() {
            c(a).ojButton({
                disabled: !c(t).ojInputNumber("validate")
            })
        }), this._cacheDomElement(u + "_resize_popup", d)) : (t = document.getElementById(u + "_resize_popup_spinner"), c(t).ojInputNumber("option", "value", e)), d
    }, D.prototype._createContextMenuResizeDialog = function(e) {
        e = Math.round(e);
        let t = this._getTableContainer(),
            o = this._getContextMenuResizeDialog(),
            i = this._getTableId();
        if (this._IsCustomElement())
            if (null == o) {
                o = document.createElement("oj-dialog"), o.setAttribute("id", i + "_resize_dialog"), o.setAttribute(D._DATA_OJ_BINDING_PROVIDER, "none"), o.setAttribute("dialog-title", this.getTranslatedString("labelResizeColumnDialog")), t.appendChild(o);
                let l = document.createElement("div");
                l.setAttribute("slot", "body");
                let n = document.createElement("oj-input-number");
                n.setAttribute("id", i + "_resize_column_width_input"), n.labelHint = this.getTranslatedString("labelColumnWidth"), n.min = 10, n.step = 1, n.value = e, n.displayOptions = {
                    messages: ["notewindow"]
                }, n.userAssistanceDensity = "compact", n.validators = [new y({
                    pattern: "^[1-9][0-9]*$",
                    messageDetail: this.getTranslatedString("msgColumnResizeWidthValidation")
                })], l.appendChild(n);
                let s = document.createElement("div");
                s.setAttribute("slot", "footer");
                let a = document.createElement("oj-button");
                a.setAttribute("id", i + "_resize_dialog_dialogcancel"), a.textContent = this.getTranslatedString("labelResizePopupCancel");
                let r = document.createElement("oj-button");
                r.setAttribute("id", i + "_resize_dialog_dialogapply"), r.chroming = "callToAction", r.textContent = this.getTranslatedString("labelResizeDialogApply"), s.appendChild(a), s.appendChild(r), "phone" === T.getDeviceRenderMode() && (o.classList.add("oj-table-resize-dialog-mobile"), r.classList.add("oj-button-sm", "oj-sm-6", "oj-sm-margin-2x-horizontal"), a.classList.add("oj-button-sm", "oj-sm-6", "oj-sm-margin-2x-horizontal"), s.classList.add("oj-sm-justify-content-center")), n.addEventListener("validChanged", function(e) {
                    "valid" === e.detail.value ? r.disabled = !1 : r.disabled = !0
                }), o.appendChild(l), o.appendChild(s);
                let _ = function() {
                    r.disabled = !1, n.value = 0, o.close()
                };
                a.addEventListener("click", _), r.addEventListener("click", this._handleContextMenuResizePopup.bind(this)), o.setAttribute("modality", "modal"), this._cacheDomElement(i + "_resize_dialog", o)
            } else {
                document.getElementById(i + "_resize_column_width_input").value = e
            }
        else if (null == o) {
            o = document.createElement(D.DOM_ELEMENT._DIV), o.setAttribute("id", i + "_resize_dialog"), o.setAttribute(D._DATA_OJ_BINDING_PROVIDER, "none"), "phone" === T.getDeviceRenderMode() && o.classList.add("oj-table-resize-dialog-mobile"), t.appendChild(o);
            let l = document.createElement("div");
            l.setAttribute("slot", "body"), o.appendChild(l);
            let n = document.createElement(D.DOM_ELEMENT._INPUT);
            n.setAttribute("id", i + "_resize_column_width_input");
            let s = document.createElement(D.DOM_ELEMENT._BUTTON);
            s.setAttribute("id", i + "_resize_dialog_dialogcancel");
            let a = document.createElement(D.DOM_ELEMENT._BUTTON);
            a.setAttribute("id", i + "_resize_dialog_dialogapply");
            let r = document.createElement("div");
            r.setAttribute("slot", "footer"), o.appendChild(r), l.appendChild(n), r.appendChild(a), r.appendChild(s), c(a).ojButton({
                component: "ojButton",
                chroming: "callToAction",
                label: this.getTranslatedString("labelResizeDialogApply")
            }), c(s).ojButton({
                component: "ojButton",
                label: this.getTranslatedString("labelResizePopupCancel")
            });
            let _ = function() {
                c(a).ojButton({
                    disabled: !1
                }), c(n).ojInputNumber({
                    value: 0
                }), c(o).ojDialog("close")
            };
            c(a).on("click", this._handleContextMenuResizePopup.bind(this)), c(s).on("click", _), c(n).ojInputNumber({
                component: "ojInputNumber",
                labelHint: this.getTranslatedString("labelColumnWidth"),
                min: 10,
                step: 1,
                value: e,
                displayOptions: {
                    messages: ["notewindow"]
                },
                userAssistanceDensity: "compact",
                validators: [new y({
                    pattern: "^[1-9][0-9]*$",
                    messageDetail: this.getTranslatedString("msgColumnResizeWidthValidation")
                })]
            }), c(o).ojDialog({
                dialogTitle: this.getTranslatedString("labelResizeColumnDialog"),
                modality: "modal"
            }), "phone" === T.getDeviceRenderMode() && (o.classList.add("oj-table-resize-dialog-mobile"), a.classList.add("oj-button-sm", "oj-sm-6", "oj-sm-margin-2x-horizontal"), s.classList.add("oj-button-sm", "oj-sm-6", "oj-sm-margin-2x-horizontal"), r.classList.add("oj-sm-justify-content-center")), c(n).on("change", function() {
                c(a).ojButton({
                    disabled: !c(n).ojInputNumber("validate")
                })
            }), this._cacheDomElement(i + "_resize_dialog", o)
        } else {
            let t = document.getElementById(i + "_resize_column_width_input");
            c(t).ojInputNumber("option", "value", e)
        }
        return o
    }, D.prototype._createInitialTable = function(e, t) {
        var o = this._getTable();
        return this._createTableContainer(), this._isStickyLayoutEnabled() && (this._createTableScroller(), this._createTableColGroup()), e || this._createTableHeader(), t || this._createTableFooter(), this._createTableBody(), this._isStickyLayoutEnabled() || (this._createTableBodyLegacyWidthBuffer(), this._createTableLegacySizer()), this._createTableStatusMessage(), this._createTableStatusAccNotification(), this._createContextInfo(), this._createStateInfo(), this._createRowStateInfo(), this._createTableWidthContainer(), o
    }, D.prototype._createTableBody = function() {
        var e = this._getTable(),
            t = document.createElement(D.DOM_ELEMENT._TBODY);
        return t.style[D.CSS_PROP._VISIBILITY] = D.CSS_VAL._HIDDEN, e.appendChild(t), this._cacheDomElement(D.CSS_CLASSES._TABLE_BODY_CLASS, t), t
    }, D.prototype._createTableBodyScrollBuffer = function() {
        var e = this._getTableBodyScrollBuffer();
        return null == e && ((e = this._createTableBodyRow()).classList.add(D.CSS_CLASSES._TABLE_BUFFER_ROW_CLASS), this._getTableBody().appendChild(e), this._clearDomCache(D.CSS_CLASSES._TABLE_BUFFER_ROW_CLASS)), e
    }, D.prototype._createTableBodyLegacyWidthBuffer = function() {
        var e = this._createTableBodyRow();
        return e.classList.add(D.CSS_CLASSES._TABLE_LEGACY_WIDTH_BUFFER_ROW_CLASS), this._getTableBody().appendChild(e), e
    }, D.prototype._createTableLegacySizer = function() {
        var e = document.createElement(D.DOM_ELEMENT._DIV);
        return e.classList.add(D.CSS_CLASSES._TABLE_LEGACY_SIZER_CLASS), this._getTableContainer().appendChild(e), this._cacheDomElement(D.CSS_CLASSES._TABLE_LEGACY_SIZER_CLASS, e), e
    }, D.prototype._appendElementToTableBody = function(e, t) {
        var o = this._getTableBodyScrollBuffer();
        null != o ? t.insertBefore(e, o) : t.appendChild(e)
    }, D.prototype._createTableBodyCell = function() {
        return document.createElement(D.DOM_ELEMENT._TD)
    }, D.prototype._createTableBodyDefaultSelector = function(e, t) {
        var o = null;
        (o = document.createElement(D.DOM_ELEMENT._TD)).classList.add(D.CSS_CLASSES._TABLE_SELECTOR_CELL), this._isStickyLayoutEnabled() && o.classList.add(D.CSS_CLASSES._TABLE_FROZEN_START), this._isVerticalGridEnabled() && o.classList.add(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS), o.setAttribute(D.DOM_ATTR._ID, this._getTableId() + ":select:" + e);
        var i = document.createElement("oj-selector");
        return i.id = this._getTableId() + "_table_selector_" + e, this.options.selected.row.has(e) ? i.selectedKeys = new R.KeySetImpl([e]) : i.selectedKeys = new R.KeySetImpl, i.setAttribute(D._DATA_OJ_BINDING_PROVIDER, "none"), i.classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_SELECTOR_CLASS), i.setAttribute("selection-mode", "multiple"), i.rowKey = e, i.setAttribute("aria-label", this.getTranslatedString(D._BUNDLE_KEY._LABEL_SELECT_ROW)), i.addEventListener("selectedKeysChanged", this._selectedKeysChangedListener.bind(this)), o.appendChild(i), t.insertBefore(o, t.firstChild), o
    }, D.prototype._createTableHeaderSelectorColumn = function() {
        var e = document.createElement(D.DOM_ELEMENT._TH);
        if (e.classList.add(D.CSS_CLASSES._COLUMN_HEADER_SELECTOR_CELL_CLASS), this._isStickyLayoutEnabled() && e.classList.add(D.CSS_CLASSES._TABLE_FROZEN_START), this._isVerticalGridEnabled() && e.classList.add(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS), e.setAttribute(D.DOM_ATTR._ID, this._getTableId() + ":selectAll"), this._isSelectAllControlVisible()) {
            var t = document.createElement("oj-selector");
            t.selectedKeys = this.options.selected.row, t.setAttribute(D._DATA_OJ_BINDING_PROVIDER, "none"), t.classList.add(D.CSS_CLASSES._TABLE_HEADER_SELECTOR_CLASS), t.setAttribute("selection-mode", "all"), t.setAttribute("aria-label", this.getTranslatedString(D._BUNDLE_KEY._LABEL_SELECT_ALL_ROWS)), t.addEventListener("selectedKeysChanged", this._selectedKeysChangedListener.bind(this)), e.appendChild(t)
        }
        return e
    }, D.prototype._createTableFooterSelectorCell = function() {
        var e = this._createTableFooterCell();
        return e.classList.add(D.CSS_CLASSES._TABLE_FOOTER_SELECTOR_CELL_CLASS), this._isStickyLayoutEnabled() && e.classList.add(D.CSS_CLASSES._TABLE_FROZEN_START), this._isVerticalGridEnabled() && e.classList.add(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS), e.setAttribute(D.DOM_ATTR._ID, this._getTableId() + ":footerSelector"), e
    }, D.prototype._createTableBodyMessageCell = function(e, t, o) {
        var i = document.createElement(D.DOM_ELEMENT._TD);
        return this._isDefaultSelectorEnabled() && (t += 1), i.setAttribute(D.DOM_ATTR._COLSPAN, t), i.classList.add(D.CSS_CLASSES._TABLE_BODY_MESSAGE_CLASS), i.appendChild(document.createTextNode(o)), e.appendChild(i), i
    }, D.prototype._createTableBodyMessageRow = function(e, t) {
        var o = this._getTableBody(),
            i = document.createElement(D.DOM_ELEMENT._TR);
        return i.id = this.createSubId("messageRow"), i.classList.add(D.CSS_CLASSES._TABLE_BODY_MESSAGE_ROW_CLASS), this._createTableBodyMessageCell(i, e, t), this._appendElementToTableBody(i, o), i
    }, D.prototype._createTableBodyRow = function() {
        var e = document.createElement(D.DOM_ELEMENT._TR);
        return e._ojReportBusy = this._getTableBody(), e
    }, D.prototype._getTouchAffordanceGlassPane = function() {
        var e = this._getTableContainer(),
            t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_TOUCH_AFFORDANCE_GLASS_PANE_CLASS);
        return t.length > 0 ? t[0] : null
    }, D.prototype._createTouchAffordanceGlassPane = function() {
        var e = this._getTouchAffordanceGlassPane();
        if (!e) {
            var t = this._getTableContainer();
            (e = document.createElement(D.DOM_ELEMENT._DIV)).classList.add(D.CSS_CLASSES._TABLE_TOUCH_AFFORDANCE_GLASS_PANE_CLASS), t.appendChild(e), this._refreshTouchAffordanceGlassPanePosition()
        }
        return e
    }, D.prototype._createTableBodyRowTouchSelectionAffordance = function(e) {
        var t = this._createTouchAffordanceGlassPane(),
            o = this._getTableBodyRowTouchSelectionAffordanceTop();
        if (!o) {
            (o = document.createElement(D.DOM_ELEMENT._DIV)).classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOP_CLASS), o.classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOUCH_AREA_CLASS);
            var i = document.createElement(D.DOM_ELEMENT._DIV);
            i.classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOP_ICON_CLASS), i.setAttribute(D.DOM_ATTR._ROLE, "button"), i.setAttribute(D.DOM_ATTR._ARIA_LABEL, this.getTranslatedString("labelAccSelectionAffordanceTop")), o.appendChild(i), t.appendChild(o)
        }
        var l = this._getTableBodyRowTouchSelectionAffordanceBottom();
        if (!l) {
            (l = document.createElement(D.DOM_ELEMENT._DIV)).classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_BOTTOM_CLASS), l.classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOUCH_AREA_CLASS);
            var n = document.createElement(D.DOM_ELEMENT._DIV);
            n.classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_BOTTOM_ICON_CLASS), n.setAttribute(D.DOM_ATTR._ROLE, "button"), n.setAttribute(D.DOM_ATTR._ARIA_LABEL, this.getTranslatedString("labelAccSelectionAffordanceBottom")), l.appendChild(n), t.appendChild(l)
        }
        this._moveTableBodyRowTouchSelectionAffordanceTop(e), this._moveTableBodyRowTouchSelectionAffordanceBottom(e)
    }, D.prototype._createTableBottomSlot = function() {
        var e = this._getTableContainer(),
            t = document.createElement(D.DOM_ELEMENT._DIV);
        return t.classList.add(D.CSS_CLASSES._TABLE_BOTTOM_SLOT_CLASS), e.appendChild(t), this._cacheDomElement(D.CSS_CLASSES._TABLE_BOTTOM_SLOT_CLASS, t), t
    }, D.prototype._createTableContainer = function() {
        var e = this.OuterWrapper;
        return e || (e = document.createElement(D.DOM_ELEMENT._DIV), this.element[0].parentNode.replaceChild(e, this.element[0]), e.insertBefore(this.element[0], e.firstChild)), this._cacheDomElement(D.CSS_CLASSES._TABLE_CONTAINER_CLASS, e), e.classList.add(D.CSS_CLASSES._TABLE_CLASS), e.classList.add(D.CSS_CLASSES._TABLE_CONTAINER_CLASS), e.classList.add(D.MARKER_STYLE_CLASSES._WIDGET), e
    }, D.prototype._createTableScroller = function() {
        var e = document.createElement(D.DOM_ELEMENT._DIV);
        return e.classList.add(D.CSS_CLASSES._TABLE_SCROLLER_CLASS), e.setAttribute(D.DOM_ATTR._TABINDEX, "-1"), this.element[0].parentNode.replaceChild(e, this.element[0]), e.insertBefore(this.element[0], e.firstChild), e
    }, D.prototype._createTableColGroup = function() {
        var e = document.createElement(D.DOM_ELEMENT._COLGROUP);
        e.classList.add(D.CSS_CLASSES._TABLE_COLGROUP_CLASS), this._cacheDomElement(D.CSS_CLASSES._TABLE_COLGROUP_CLASS, e);
        var t = this._getTableHeader();
        if (null != t) return t.parentNode.insertBefore(e, t), e;
        var o = this._getTableBody();
        if (null != o) return o.parentNode.insertBefore(e, o), e;
        var i = this._getTableFooter();
        return null != i ? (i.parentNode.insertBefore(e, i), e) : (this._getTable().appendChild(e), e)
    }, D.prototype._createTableFooter = function() {
        var e = this._getTable(),
            t = document.createElement(D.DOM_ELEMENT._TFOOT);
        t.style[D.CSS_PROP._VISIBILITY] = D.CSS_VAL._HIDDEN;
        var o = document.createElement(D.DOM_ELEMENT._TR);
        t.appendChild(o);
        var i = this._getTableHeader();
        if (null != i) i.parentNode.insertBefore(t, i.nextSibling);
        else {
            var l = this._getTableBody();
            null != l ? l.parentNode.insertBefore(t, l) : e.appendChild(t)
        }
        return this._cacheDomElement(D.CSS_CLASSES._TABLE_FOOTER_CLASS, t), t
    }, D.prototype._createTableFooterCell = function() {
        return document.createElement(D.DOM_ELEMENT._TD)
    }, D.prototype._createTableHeader = function() {
        var e = this._getTable(),
            t = document.createElement(D.DOM_ELEMENT._THEAD),
            o = document.createElement(D.DOM_ELEMENT._TR);
        t.appendChild(o);
        var i = this._getTableFooter();
        if (null != i) i.parentNode.insertBefore(t, i);
        else {
            var l = this._getTableBody();
            null != l ? l.parentNode.insertBefore(t, l) : e.appendChild(t)
        }
        return this._cacheDomElement(D.CSS_CLASSES._TABLE_HEADER_ROW_CLASS, o), this._cacheDomElement(D.CSS_CLASSES._TABLE_HEADER_CLASS, t), t
    }, D.prototype._createTableHeaderColumn = function(e) {
        var t = this._getColumnDefs()[e],
            o = document.createElement(D.DOM_ELEMENT._TH);
        this._styleTableHeaderColumn(e, o, !0), o.setAttribute("abbr", t.headerText), o.setAttribute(D.DOM_ATTR._TITLE, t.headerText), this._insertTableHeaderColumn(e, o);
        var i = {
            columnIndex: e,
            headerContext: {
                component: this,
                parentElement: o
            }
        };
        return t.resizable === D._OPTION_ENABLED && o.setAttribute("data-oj-resizable", D._OPTION_ENABLED), t.sortable === D._OPTION_ENABLED ? (o.setAttribute("data-oj-sortable", D._OPTION_ENABLED), this._columnHeaderSortableIconRenderer(i)) : this._columnHeaderDefaultRenderer(i), o
    }, D.prototype._createTableSelectorCol = function() {
        var e = document.createElement(D.DOM_ELEMENT._COL);
        return e.classList.add(D.CSS_CLASSES._TABLE_COL_SELECTOR_CLASS), e
    }, D.prototype._createTableCol = function() {
        var e = document.createElement(D.DOM_ELEMENT._COL);
        return e.classList.add(D.CSS_CLASSES._TABLE_COL_CLASS), e
    }, D.prototype._createTableHeaderColumnDragImage = function(e) {
        var t;
        if (1 === e.length) {
            (t = this._getTableHeaderColumn(e[0]).cloneNode(!0)).classList.remove(D.MARKER_STYLE_CLASSES._FOCUS), t.classList.remove(D.MARKER_STYLE_CLASSES._FOCUS_HIGHLIGHT), t.classList.remove(D.MARKER_STYLE_CLASSES._HOVER)
        } else {
            (t = document.createElement("th")).classList.add("oj-table-column-header-cell");
            var o = document.createElement(D.DOM_ELEMENT._DIV);
            o.classList.add(D.CSS_CLASSES._COLUMN_HEADER_CLASS), t.appendChild(o);
            var i = document.createElement(D.DOM_ELEMENT._DIV);
            i.classList.add(D.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS), i.textContent = e.length + " Items", o.appendChild(i)
        }
        return t.classList.add(D.CSS_CLASSES._COLUMN_HEADER_DRAG_IMAGE), t.style[D.CSS_PROP._POSITION] = D.CSS_VAL._ABSOLUTE, t.style[D.CSS_PROP._TOP] = "0", t.style[D.CSS_PROP._LEFT] = "-999em", t.style[D.CSS_PROP._ZINDEX] = "-999", document.body.appendChild(t), t
    }, D.prototype.createSubId = function(e) {
        return [this._getRootElement().id, e].join(":")
    }, D.prototype._createTableStatusMessage = function() {
        var e = this._getTableContainer(),
            t = document.createElement(D.DOM_ELEMENT._DIV);
        if (t.classList.add(D.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS), t.style[D.CSS_PROP._DISPLAY] = D.CSS_VAL._NONE, !this._isSkeletonSupport()) {
            var o = document.createElement(D.DOM_ELEMENT._DIV);
            o.classList.add(D.CSS_CLASSES._ICON_CLASS), o.classList.add(D.CSS_CLASSES._TABLE_LOADING_ICON_CLASS), o.setAttribute("aria-label", this.getTranslatedString(D._BUNDLE_KEY._MSG_FETCHING_DATA)), t.appendChild(o)
        }
        return e.appendChild(t), this._cacheDomElement(D.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS, t), t
    }, D.prototype._createTableWidthContainer = function() {
        var e = this._getTableContainer(),
            t = document.createElement(D.DOM_ELEMENT._DIV);
        return t.classList.add(D.CSS_CLASSES._TABLE_WIDTH_CONTAINER_CLASS), e.appendChild(t), this._tableWidthContainer = t, t
    }, D.prototype._displayDragOverIndicatorColumn = function(e, t) {
        this._getLayoutManager().displayDragOverIndicatorColumn(e, t)
    }, D.prototype._displayDragOverIndicatorRow = function(e, t, o, i) {
        this._removeDragOverIndicatorRow();
        var l = document.createElement(D.DOM_ELEMENT._TR);
        l.classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_DRAG_INDICATOR_CLASS), "line" === o ? l.classList.add("oj-table-body-row-drop-target") : null != t && (c(l).height(parseInt(c(t).height(), 10)), i && this._rowsDragged.forEach(function(e) {
            e.classList.add("oj-table-row-drag-source-hide"), e.classList.remove("oj-selected"), this._updateRowStateCellsClass(null, e, {
                selected: !1
            })
        }.bind(this)));
        var n = document.createElement(D.DOM_ELEMENT._TD),
            s = this._getColumnDefs().length;
        this._isDefaultSelectorEnabled() && (s += 1), n.setAttribute(D.DOM_ATTR._COLSPAN, s), l.appendChild(n);
        var a = this._getTableBodyRow(e);
        null != a ? a.parentNode.insertBefore(l, a) : (0 === this._getTableBodyRows().length && this._hideNoDataMessage(), this._getTableBody().appendChild(l))
    }, D.prototype._getContextMenuElement = function() {
        return this._menuContainer
    }, D.prototype._getContextMenuResizePopup = function() {
        var e = this._getTableId() + "_resize_popup";
        if (!this._isCachedDomElement(e)) {
            var t = document.getElementById(e);
            this._cacheDomElement(e, t)
        }
        return this._getCachedDomElement(e)
    }, D.prototype._getContextMenuResizeDialog = function() {
        let e = this._getTableId() + "_resize_dialog";
        if (!this._isCachedDomElement(e)) {
            let t = document.getElementById(e);
            this._cacheDomElement(e, t)
        }
        return this._getCachedDomElement(e)
    }, D.prototype._getElementColumnIdx = function(e) {
        var t = this._getFirstAncestor(e, "." + D.CSS_CLASSES._TABLE_DATA_CELL_CLASS, !0);
        if (null != t) return c(t.parentNode).children("." + D.CSS_CLASSES._TABLE_DATA_CELL_CLASS).index(t);
        var o = this._getFirstAncestor(e, "." + D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS, !0);
        if (null != o) return c(o.parentNode).children("." + D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS).index(o);
        var i = this._getFirstAncestor(e, "." + D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS, !0);
        return null != i ? c(i.parentNode).children("." + D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS).index(i) : null
    }, D.prototype._getElementRowIdx = function(e) {
        var t = this._getFirstAncestor(e, "." + D.CSS_CLASSES._TABLE_DATA_ROW_CLASS, !0);
        if (null != t) {
            var o = this._getTableBodyRows(),
                i = c(o).index(t);
            return i > -1 ? i : null
        }
        return null
    }, D.prototype._getFirstAncestor = function(e, t, o) {
        var i;
        if (null == e) return null;
        if (this._isIE() && !Element.prototype.matches ? e.msMatchesSelector(t) : e.matches(t)) return o && !this._isTableOwned(e) ? this._getFirstAncestor(e.parentNode, t, o) : e;
        if (i = c(e).parents(t), o) {
            for (var l = 0; l < i.length; l++)
                if (this._isTableOwned(i[l])) return i[l];
            return null
        }
        return i.length > 0 ? i[0] : null
    }, D.prototype._getElementScrollLeft = function(e) {
        return Math.abs(e.scrollLeft)
    }, D.prototype._getTable = function() {
        return this.element[0]
    }, D.prototype._getTableBody = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_BODY_CLASS, !0)
    }, D.prototype._getTableBodyScrollBuffer = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_BUFFER_ROW_CLASS)
    }, D.prototype._getTableBodyLegacyWidthBuffer = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_LEGACY_WIDTH_BUFFER_ROW_CLASS)
    }, D.prototype._getTableLegacySizer = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_LEGACY_SIZER_CLASS)
    }, D.prototype._getTableBodyCell = function(e, t, o) {
        var i = this._getTableBodyCells(e, o);
        return i.length > t ? i[t] : null
    }, D.prototype._getTableBodyLogicalCells = function(e, t) {
        var o = this._getTableBodyCells(e, t);
        return this._getColspanLogicalElements(o)
    }, D.prototype._getTableBodyCells = function(e, t) {
        return t || (t = this._getTableBodyRow(e)) ? this._getTableElementsByClassName(t, D.CSS_CLASSES._TABLE_DATA_CELL_CLASS) : []
    }, D.prototype._getTableBodyMessageCell = function() {
        var e = this._getTableBody();
        if (e) {
            var t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_BODY_MESSAGE_CLASS);
            if (t.length > 0) return t[0]
        }
        return null
    }, D.prototype._getTableBodyMessageRow = function() {
        var e = this._getTableBody();
        if (e) {
            var t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_BODY_MESSAGE_ROW_CLASS);
            if (t.length > 0) return t[0]
        }
        return null
    }, D.prototype._getTableNoDataRow = function() {
        var e = this._getTableBody();
        if (e) {
            var t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_NO_DATA_ROW_CLASS);
            if (t.length > 0) return t[0]
        }
        return null
    }, D.prototype._getRawTableBodyRow = function(e) {
        var t = this._getTableBody();
        let o = this._isAddNewRowEnabled() ? e + 1 : e;
        return this._isStickyLayoutEnabled() || (o += 1), t.children[o]
    }, D.prototype._getTableBodyRow = function(e) {
        var t = this._getTableBodyRows();
        return null != e && t.length > e ? t[e] : null
    }, D.prototype._getTableBodyRows = function() {
        if (!this._cachedDomTableBodyRows) {
            var e = this._getTableBody();
            this._cachedDomTableBodyRows = null != e ? this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_DATA_ROW_CLASS) : []
        }
        return this._cachedDomTableBodyRows
    }, D.prototype._getTableTempSkeletonRow = function() {
        var e = this._getTableBody();
        return null != e ? this._getChildElementByClassName(e, D.CSS_CLASSES._TABLE_FETCH_SKELETON_ROW_CLASS) : null
    }, D.prototype._getTableBodyRowTouchSelectionAffordanceTop = function() {
        var e = this._getTableContainer(),
            t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOP_CLASS);
        return t.length > 0 ? t[0] : null
    }, D.prototype._getTableBodyRowTouchSelectionAffordanceBottom = function() {
        var e = this._getTableContainer(),
            t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_BOTTOM_CLASS);
        return t.length > 0 ? t[0] : null
    }, D.prototype._getTableBottomSlot = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_BOTTOM_SLOT_CLASS, !0)
    }, D.prototype._getTableContainer = function() {
        if (!this._isCachedDomElement(D.CSS_CLASSES._TABLE_CONTAINER_CLASS)) {
            var e = this.element[0].parentNode;
            e.classList.contains(D.CSS_CLASSES._TABLE_SCROLLER_CLASS) ? this._cacheDomElement(D.CSS_CLASSES._TABLE_CONTAINER_CLASS, e.parentNode) : this._cacheDomElement(D.CSS_CLASSES._TABLE_CONTAINER_CLASS, e)
        }
        return this._getCachedDomElement(D.CSS_CLASSES._TABLE_CONTAINER_CLASS)
    }, D.prototype._getTableScroller = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_SCROLLER_CLASS, !0)
    }, D.prototype._getTableFooter = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_FOOTER_CLASS, !0)
    }, D.prototype._getTableFooterCell = function(e) {
        var t = this._getTableFooterCells();
        return null != t && t.length > e ? t[e] : null
    }, D.prototype._getTableFooterCells = function() {
        var e = this._getTableFooterRow(),
            t = null != e ? this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS) : null;
        return null != t && t.length > 0 ? t : null
    }, D.prototype._getTableFooterLogicalCells = function() {
        var e = this._getTableFooterCells();
        return e ? this._getColspanLogicalElements(e) : null
    }, D.prototype._getTableFooterRow = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_FOOTER_ROW_CLASS)
    }, D.prototype._getTableHeader = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_HEADER_CLASS, !0)
    }, D.prototype._getTableHeaderColumn = function(e) {
        var t = this._getTableHeaderColumns();
        return t && t.length > e && e >= 0 ? t[e] : null
    }, D.prototype._getTableCol = function(e) {
        var t = this._getTableColGroup();
        if (null != t) {
            var o = this._getTableElementsByClassName(t, D.CSS_CLASSES._TABLE_COL_CLASS);
            if (o.length > 0) return o[e]
        }
        return null
    }, D.prototype._getTableHeaderColumns = function() {
        var e = this._getTableHeaderRow();
        if (null != e) {
            var t = this._getTableElementsByClassName(e, D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS);
            if (t.length > 0) return t
        }
        return null
    }, D.prototype._getTableHeaderLogicalColumns = function() {
        var e = this._getTableHeaderColumns();
        return e ? this._getColspanLogicalElements(e) : null
    }, D.prototype._getTableHeaderRow = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_HEADER_ROW_CLASS)
    }, D.prototype._getPlaceHolderRow = function() {
        return this._getTable().getElementsByClassName(D.CSS_CLASSES._TABLE_ADD_ROW_PLACEHOLDER_CLASS)[0]
    }, D.prototype._getPlaceHolderRowCells = function(e) {
        var t = null != e ? e : this._getPlaceHolderRow();
        return null != t ? this._getTableElementsByTagName(t, D.DOM_ELEMENT._TD) : []
    }, D.prototype._getPlaceHolderRowCell = function(e) {
        var t = this._isDefaultSelectorEnabled() ? e + 1 : e,
            o = this._getPlaceHolderRowCells();
        return o.length > t && t >= 0 ? o[t] : null
    }, D.prototype._getTableColGroup = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_COLGROUP_CLASS)
    }, D.prototype._getTableId = function() {
        if (!this._tableId) {
            var e = this._IsCustomElement() ? this._getTableContainer() : this._getTable();
            this._tableId = e.getAttribute(D.DOM_ATTR._ID)
        }
        return this._tableId
    }, D.prototype._getTableStatusMessage = function() {
        return this._getTableElementByClassName(D.CSS_CLASSES._TABLE_STATUS_MESSAGE_CLASS, !0)
    }, D.prototype._getTableUID = function() {
        if (!this._tableUID) {
            var e = this._getTableId();
            null == e && (e = (1e32 * Math.random()).toString(36)), this._tableUID = e
        }
        return this._tableUID
    }, D.prototype._hashCode = function(e) {
        if (null == e) return 0;
        "string" !== c.type(e) && (e = e.toString());
        var t = 0;
        if (0 === e.length) return t;
        for (var o = e.length, i = 0; i < o; i++) {
            t = (t << 5) - t + e.charCodeAt(i), t &= t
        }
        return t
    }, D.prototype._insertTableBodyCell = function(e, t, o, i, l, n, s) {
        if (this._setTableBodyCellAttributes(e, t, o, i, l), s) return n.appendChild(l), l;
        if (0 === i) n.insertBefore(l, n.firstChild);
        else {
            var a = this._getTableElementsByClassName(n, D.CSS_CLASSES._TABLE_DATA_CELL_CLASS);
            if (a.length >= i) {
                var r = a[i - 1];
                r.parentNode.insertBefore(l, r.nextSibling)
            } else n.appendChild(l)
        }
        return l
    }, D.prototype._insertTableBodyRow = function(e, t, o, i) {
        if (this._setTableBodyRowAttributes(o, t), null == i) {
            var l = this._getTableBody(),
                n = this._getTableBodyRow(e);
            null != n ? l.insertBefore(t, n) : this._appendElementToTableBody(t, l)
        } else i.appendChild(t);
        this._clearCachedDomRowData()
    }, D.prototype._insertTableFooterCell = function(e, t) {
        var o = this._getTableFooterRow(),
            i = this._getTableElementsByClassName(o, D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS);
        if (this._setTableFooterColumnAttributes(e, t), 0 === e) o.insertBefore(t, o.firstChild);
        else if (o.length >= e) {
            var l = i[e - 1];
            l.parentNode.insertBefore(t, l.nextSibling)
        } else o.appendChild(t);
        return t
    }, D.prototype._insertTableHeaderColumn = function(e, t) {
        var o = this._getTableHeaderRow(),
            i = this._getTableHeaderColumns();
        this._setTableHeaderColumnAttributes(e, t);
        var l = this._getTableHeaderColumn(e);
        if (l) c(l).replaceWith(c(t));
        else if (0 !== e && i && i.length >= e) {
            var n = i[e - 1];
            n.parentNode.insertBefore(t, n.nextSibling)
        } else o.appendChild(t)
    }, D.prototype._moveTableBodyRowTouchSelectionAffordanceTop = function(e) {
        var t = this._getTableBodyRowTouchSelectionAffordanceTop();
        if (null != t) {
            null != e ? (c(t).data("rowIdx", e), c(t.children[0]).data("rowIdx", e)) : e = c(t).data("rowIdx");
            var o = this._getLayoutManager().getScroller(),
                i = this._getTableBodyRow(e).getBoundingClientRect(),
                l = this._getTouchAffordanceGlassPane().getBoundingClientRect();
            t.style[D.CSS_PROP._TOP] = i.top - l.top - t.clientHeight / 2 + D.CSS_VAL._PX, t.style[D.CSS_PROP._LEFT] = o.clientWidth / 2 + D.CSS_VAL._PX
        }
    }, D.prototype._moveTableBodyRowTouchSelectionAffordanceBottom = function(e) {
        var t = this._getTableBodyRowTouchSelectionAffordanceBottom();
        if (null != t) {
            null != e ? (c(t).data("rowIdx", e), c(t.children[0]).data("rowIdx", e)) : e = c(t).data("rowIdx");
            var o = this._getLayoutManager().getScroller(),
                i = this._getTableBodyRow(e).getBoundingClientRect(),
                l = this._getTouchAffordanceGlassPane().getBoundingClientRect();
            t.style[D.CSS_PROP._TOP] = i.top - l.top + i.height - t.clientHeight / 2 + D.CSS_VAL._PX, t.style[D.CSS_PROP._LEFT] = o.clientWidth / 2 + D.CSS_VAL._PX
        }
    }, D.prototype._moveTableHeaderColumn = function(e, t, o) {
        var i = [],
            l = [],
            n = [],
            s = [],
            a = null,
            r = null,
            _ = null,
            h = null,
            d = null,
            u = !1;
        t === this._getColumnDefs().length && (t -= 1, u = !0), a = this._getTableHeaderColumn(t);
        for (let t = 0; t < e.length; t++) {
            let o = e[t];
            i[t] = this._getTableHeaderColumn(o), l[t] = this._getTableFooterCell(o), this._isAddNewRowEnabled() && (s[t] = this._getPlaceHolderRowCell(o))
        }
        for (let o = 0; o < e.length; o++) null != i[o] && (d = i[o].getAttribute(D.DOM_ATTR._COLSPAN), null == a || null != d && 1 !== d || (u ? (a.parentNode.insertBefore(i[o], a.nextSibling), a = i[o]) : a.parentNode.insertBefore(i[o], a))), null != l[o] && (d = l[o].getAttribute(D.DOM_ATTR._COLSPAN), null == (r = this._getTableFooterCell(t)) || null != d && 1 !== d || (u ? r.parentNode.insertBefore(l[o], r.nextSibling) : r.parentNode.insertBefore(l[o], r))), null != s[o] && (d = s[o].getAttribute(D.DOM_ATTR._COLSPAN), null == (h = this._getPlaceHolderRowCell(t)) || null != d && 1 !== d || (u ? h.parentNode.insertBefore(s[o], h.nextSibling) : h.parentNode.insertBefore(s[o], h)));
        var S = this._getTableBodyRows();
        for (let o = 0; o < S.length; o++) {
            for (let t = 0; t < e.length; t++) n[t] = this._getTableBodyCell(o, e[t], null);
            _ = this._getTableBodyCell(o, t, null);
            for (let t = 0; t < e.length; t++) null != n[t] && (d = n[t].getAttribute(D.DOM_ATTR._COLSPAN), null == _ || null != d && 1 !== d || (u ? (_.parentNode.insertBefore(n[t], _.nextSibling), _ = n[t]) : _.parentNode.insertBefore(n[t], _)))
        }
        var E = [],
            C = this.options.columns.length;
        for (let e = 0; e < C; e++) E[e] = c.extend({}, {}, this.options.columns[e]);
        var T = u ? t : t - 1,
            p = [],
            g = [],
            f = [],
            A = e.reverse();
        if (!this._columnsDestMap) {
            this._columnsDestMap = [];
            for (let e = 0; e < E.length; e++) this._columnsDestMap[e] = e
        }
        return A.forEach(function(e) {
            e <= T && (T -= 1), p.unshift(E.splice(e, 1)[0]), g.unshift(this._columnDefArray.splice(e, 1)[0]), f.unshift(this._columnsDestMap.splice(e, 1)[0])
        }.bind(this)), E.splice(T + 1, 0, ...p), this._columnDefArray.splice(T + 1, 0, ...g), this._columnsDestMap.splice(T + 1, 0, ...f), this.option("columns", E, {
            _context: {
                writeback: !0,
                originalEvent: o,
                internalSet: !0
            }
        }), this._queueTask(function() {
            this._getLayoutManager().notifyTableUpdate(D._UPDATE._COL_REORDER)
        }.bind(this)), this._columnsDestMap
    }, D.prototype._refreshContextMenu = function() {
        var e = this._menuContainer;
        if (e)
            for (var t = e.querySelectorAll("[data-oj-command]"), o = 0; o < t.length; o++) {
                var i = c(t[o]).children(D.DOM_ELEMENT._A);
                if (0 === i.length && "OJ-OPTION" === t[o].tagName && (i = c(t[o])), i.length > 0) {
                    var l, n = t[o].getAttribute(D._DATA_OJ_COMMAND).split("-");
                    "sort" === (n = n[n.length - 1]) ? l = this.getTranslatedString("labelSort"): "sortAsc" === n ? l = this.getTranslatedString("labelSortAsc") : "sortDsc" === n ? l = this.getTranslatedString("labelSortDsc") : "resize" === n && (l = this.getTranslatedString("labelResizeColumn")), i.contents().filter(function() {
                        return 3 === this.nodeType
                    })[0].nodeValue = l
                }
            }
    }, D.prototype._removeDragOverIndicatorColumn = function() {
        this._getLayoutManager().removeDragOverIndicatorColumn()
    }, D.prototype._removeDragOverIndicatorRow = function() {
        var e, t = this._getTableBody(),
            o = this._getTableElementsByClassName(t, D.CSS_CLASSES._TABLE_DATA_ROW_DRAG_INDICATOR_CLASS),
            i = o.length;
        for (e = 0; e < i; e++) c(o[e]).remove();
        0 === this._getTableBodyRows().length && this._showNoDataMessage()
    }, D.prototype._removeTableBodyRow = function(e, t) {
        var o;
        null != (o = null != t ? t : this._getTableBodyRow(e)) && (f.subtreeDetached(o), (this._hasCellTemplate || this._hasRowTemplate) && this._cleanTemplateNodes(o), c(o).remove(), this._clearCachedDomRowData())
    }, D.prototype._removeAllTableBodyRows = function() {
        var e = this._getTableBodyRows();
        if (e.length > 0) {
            var t = this._getTableBody();
            if (null != t) {
                f.subtreeDetached(t);
                for (var o = 0; o < e.length; o++)(this._hasCellTemplate || this._hasRowTemplate) && this._cleanTemplateNodes(e[o]), c(e[o]).remove();
                (this._hasCellTemplate || this._hasRowTemplate) && (this._hasCellTemplate = !1, this._hasRowTemplate = !1, this._registerDomEventListeners())
            }
            this._clearCachedDomRowData()
        }
    }, D.prototype._removeTableBodyRowTouchSelectionAffordance = function() {
        for (var e = this._getTableContainer(), t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOUCH_AREA_CLASS), o = 0; o < t.length; o++) c(t[o]).remove()
    }, D.prototype._setTableBodyCellAttributes = function(e, t, o, i, l) {
        var n = l.getAttribute(D.DOM_ATTR._ID);
        if (!(null != n && n.length > 0) && null != this._getColumnDefs()[i]) {
            var s = null != t ? t.toString() : e.toString(),
                a = null == o ? this._hashCode(s) : o;
            n = this._getTableId() + ":" + a + "_" + i, l.setAttribute(D.DOM_ATTR._ID, n)
        }
    }, D.prototype._setTableBodyRowAttributes = function(e, t) {
        c(t).data("rowKey", e.key), c(t).data("rowData", e.data), c(t).data("rowMetadata", e.metadata)
    }, D.prototype._setTableHeaderColumnAttributes = function(e, t) {
        var o = this._getColumnDefs()[e];
        t.getAttribute(D.DOM_ATTR._ID) || t.setAttribute(D.DOM_ATTR._ID, this._getTableId() + ":" + o.id)
    }, D.prototype._setTableFooterColumnAttributes = function(e, t) {
        var o = this._getColumnDefs()[e];
        t.getAttribute(D.DOM_ATTR._ID) || t.setAttribute(D.DOM_ATTR._ID, this._getTableId() + ":" + o.id + ":ftr")
    }, D.prototype._setTableColumnCellsClass = function(e, t, o) {
        var i, l = this._getTableBodyRows();
        if (l.length > 0)
            if (null === e) {
                var n = null,
                    s = this._getTableBody();
                if (null != (n = t ? this._getTableElementsByTagName(s, D.DOM_ELEMENT._TD) : this._getTableElementsByClassName(s, o)) && n.length > 0) {
                    var a = n.length;
                    for (i = 0; i < a; i++) t ? n[i].classList.add(o) : n[i].classList.remove(o)
                }
            } else {
                var r = l.length;
                for (i = 0; i < r; i++) {
                    var _ = this._getTableBodyCell(i, e, null);
                    t ? _.classList.add(o) : _.classList.remove(o)
                }
            }
    }, D.prototype._setTableBodyMessage = function(e) {
        var t = this._getTableBodyMessageCell();
        c(t).empty(), t.appendChild(document.createTextNode(e))
    }, D.prototype._styleInitialTable = function() {
        var e = this._getTable(),
            t = this._getTableElementsByTagName(e, D.DOM_ELEMENT._THEAD);
        t = t.length > 0 ? t[0] : null;
        var o = this._getTableElementsByTagName(e, D.DOM_ELEMENT._TFOOT);
        o = o.length > 0 ? o[0] : null;
        var i = this._getTableElementsByTagName(e, D.DOM_ELEMENT._TBODY);
        if (i = i.length > 0 ? i[0] : null, -1 !== parseInt(this._getRootElement().getAttribute(D.DOM_ATTR._TABINDEX), 10)) e.setAttribute(D.DOM_ATTR._TABINDEX, "0"), this._focusable({
            element: e,
            applyHighlight: !0,
            setupHandlers: this._focusSetupHandlers.bind(this)
        });
        else {
            e.setAttribute(D.DOM_ATTR._TABINDEX, "-1");
            var l = function() {};
            this._focusSetupHandlers(l, l)
        }
        e.setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, this._getTableContainer().id), this._styleTableHeader(t), this._styleTableFooter(o), this._styleTableBody(i), this._styleTableContainer(this._getTableContainer())
    }, D.prototype._styleTableBody = function(e) {
        e.classList.add(D.CSS_CLASSES._TABLE_BODY_CLASS), e.setAttribute(f._OJ_CONTAINER_ATTR, this.widgetName), e.setAttribute(C._OJ_CONTEXT_ATTRIBUTE, "")
    }, D.prototype._styleTableBodyCell = function(e, t, o) {
        var i = this._getColumnDefs()[e];
        !o && t.classList.contains(D.CSS_CLASSES._TABLE_DATA_CELL_CLASS) || (t.classList.add(D.CSS_CLASSES._TABLE_DATA_CELL_CLASS), t.classList.add(D.CSS_CLASSES._TABLE_DATE_CELL_FORM_CONTROL_CLASS));
        var l = t.getAttribute(D.DOM_ATTR._STYLE) || {};
        if (null == i || null == i.style || !o && l === i.style || A.applyMergedInlineStyles(t, l, i.style), null == i || null == i.className || !o && c(t).hasClass(i.className) || c(t).addClass(i.className), !this._isVerticalGridEnabled() || !o && t.classList.contains(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS) || t.classList.add(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS), this._isStickyLayoutEnabled()) {
            var n = null != i ? i.frozenEdge : null;
            n === D._OPTION_FROZEN_EDGE._START ? (t.classList.add(D.CSS_CLASSES._TABLE_FROZEN_START), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_END)) : n === D._OPTION_FROZEN_EDGE._END ? (t.classList.add(D.CSS_CLASSES._TABLE_FROZEN_END), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_START)) : (t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_END), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_START))
        }
    }, D.prototype._styleTableAddRowCell = function(e, t) {
        var o = this._getColumnDefs()[e],
            i = null != o ? o.frozenEdge : null;
        i === D._OPTION_FROZEN_EDGE._START ? (t.classList.add(D.CSS_CLASSES._TABLE_FROZEN_START), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_END)) : i === D._OPTION_FROZEN_EDGE._END ? (t.classList.add(D.CSS_CLASSES._TABLE_FROZEN_END), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_START)) : (t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_END), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_START))
    }, D.prototype._styleTableBodyRow = function(e, t) {
        !t && e.classList.contains(D.CSS_CLASSES._TABLE_DATA_ROW_CLASS) || e.classList.add(D.CSS_CLASSES._TABLE_DATA_ROW_CLASS)
    }, D.prototype._styleTableContainer = function(e) {
        this.options.display === D._OPTION_DISPLAY._GRID ? e.classList.add(D.CSS_CLASSES._TABLE_COMPACT_CLASS) : e.classList.remove(D.CSS_CLASSES._TABLE_COMPACT_CLASS);
        var t = this.options.editMode;
        if (null != t && t !== D._OPTION_EDIT_MODE._NONE ? e.classList.add(D.CSS_CLASSES._TABLE_EDIT_CLASS) : e.classList.remove(D.CSS_CLASSES._TABLE_EDIT_CLASS), this._isHorizontalGridEnabled() ? e.classList.add(D.CSS_CLASSES._TABLE_HGRID_CLASS) : e.classList.remove(D.CSS_CLASSES._TABLE_HGRID_CLASS), this._isStickyLayoutEnabled() ? e.classList.add(D.CSS_CLASSES._TABLE_STICKY_CLASS) : e.classList.remove(D.CSS_CLASSES._TABLE_STICKY_CLASS), this._isAddNewRowEnabled() ? e.classList.add(D.CSS_CLASSES._TABLE_ADD_ROW_CLASS) : e.classList.remove(D.CSS_CLASSES._TABLE_ADD_ROW_CLASS), this._isExternalScrollEnabled()) {
            if (e.classList.add(D.CSS_CLASSES._TABLE_EXTERNAL_SCROLL_CLASS), !this._isTableHeaderless()) {
                var o = "0";
                null != this.options.scrollPolicyOptions.scrollerOffsetTop && (o = this.options.scrollPolicyOptions.scrollerOffsetTop), this._updateHeaderTop(o)
            }
            if (!this._isTableFooterless()) {
                var i = "0";
                null != this.options.scrollPolicyOptions.scrollerOffsetBottom && (i = this.options.scrollPolicyOptions.scrollerOffsetBottom), this._updateFooterBottom(i)
            }
        } else this._isStickyLayoutEnabled() && (e.classList.remove(D.CSS_CLASSES._TABLE_EXTERNAL_SCROLL_CLASS), this._isTableHeaderless() || this._updateHeaderTop(""), this._isTableFooterless() || this._updateFooterBottom(""));
        this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE ? e.classList.add(D.CSS_CLASSES._TABLE_MULTI_ROW_SELECT_CLASS) : e.classList.remove(D.CSS_CLASSES._TABLE_MULTI_ROW_SELECT_CLASS)
    }, D.prototype._styleTableFooter = function(e) {
        if (e) {
            e.classList.add(D.CSS_CLASSES._TABLE_FOOTER_CLASS);
            var t = this._getTableElementsByTagName(e, D.DOM_ELEMENT._TR)[0];
            t.classList.add(D.CSS_CLASSES._TABLE_FOOTER_ROW_CLASS), t.setAttribute(C._OJ_CONTEXT_ATTRIBUTE, "")
        }
    }, D.prototype._styleTableFooterCell = function(e, t) {
        var o = this._getColumnDefs()[e],
            i = t.getAttribute(D.DOM_ATTR._STYLE) || {};
        null != o.footerStyle && i !== o.footerStyle && A.applyMergedInlineStyles(t, i, o.footerStyle), t.classList.contains(D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS) || t.classList.add(D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS), this._isVerticalGridEnabled() && !t.classList.contains(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS) && t.classList.add(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS), o.footerClassName && c(t).addClass(o.footerClassName), this._isStickyLayoutEnabled() && (o.frozenEdge === D._OPTION_FROZEN_EDGE._START ? (t.classList.add(D.CSS_CLASSES._TABLE_FROZEN_START), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_END)) : o.frozenEdge === D._OPTION_FROZEN_EDGE._END ? (t.classList.add(D.CSS_CLASSES._TABLE_FROZEN_END), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_START)) : (t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_END), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_START)))
    }, D.prototype._styleTableHeader = function(e) {
        if (e) {
            e.classList.add(D.CSS_CLASSES._TABLE_HEADER_CLASS), e.style[D.CSS_PROP._DISPLAY] = "table-header-group";
            var t = this._getTableElementsByTagName(e, D.DOM_ELEMENT._TR)[0];
            t.classList.add(D.CSS_CLASSES._TABLE_HEADER_ROW_CLASS), t.style[D.CSS_PROP._POSITION] = D.CSS_VAL._RELATIVE, t.setAttribute(C._OJ_CONTEXT_ATTRIBUTE, "")
        }
    }, D.prototype._styleTableHeaderColumn = function(e, t, o) {
        var i = this._getColumnDefs()[e];
        !o && t.classList.contains(D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS) || t.classList.add(D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS), i.sortable === D._OPTION_ENABLED && t.classList.add(D.CSS_CLASSES._TABLE_SORT_CLASS), !0 === i.showRequired && this._isStickyLayoutEnabled() && t.classList.add(D.CSS_CLASSES._TABLE_SHOW_REQUIRED_CLASS), this._isVerticalGridEnabled() && (!o && t.classList.contains(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS) || t.classList.add(D.CSS_CLASSES._TABLE_VGRID_LINES_CLASS));
        var l = t.getAttribute(D.DOM_ATTR._STYLE) || {};
        null == i.headerStyle || !o && l === i.headerStyle || A.applyMergedInlineStyles(t, l, i.headerStyle), null == i.headerClassName || !o && c(t).hasClass(i.headerClassName) || c(t).addClass(i.headerClassName), this._isStickyLayoutEnabled() && (i.frozenEdge === D._OPTION_FROZEN_EDGE._START ? (t.classList.add(D.CSS_CLASSES._TABLE_FROZEN_START), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_END)) : i.frozenEdge === D._OPTION_FROZEN_EDGE._END ? (t.classList.add(D.CSS_CLASSES._TABLE_FROZEN_END), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_START)) : (t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_END), t.classList.remove(D.CSS_CLASSES._TABLE_FROZEN_START)))
    }, D.prototype._getColspanLogicalElements = function(e) {
        for (var t = 0, o = [], i = e.length, l = 0; l < i; l++) {
            var n = e[l].getAttribute(D.DOM_ATTR._COLSPAN);
            if (null != n) {
                n = parseInt(n, 10);
                for (var s = 0; s < n; s++) o[t + s] = e[l];
                t += n
            } else o[t] = e[l], t += 1
        }
        return o
    }, D.prototype._isHorizontalGridEnabled = function() {
        if (this.options.horizontalGridVisible === D._OPTION_ENABLED) return !0;
        if (this.options.horizontalGridVisible === D._OPTION_AUTO) {
            if (this.options.display === D._OPTION_DISPLAY._GRID) return !0;
            if ("enabled" === this._getDefaultOptions().horizontalGridVisible) return !0
        }
        return !1
    }, D.prototype._isSelectAllControlVisible = function() {
        return !(!this._isDefaultSelectorEnabled() || "hidden" === this.options.selectAllControl)
    }, D.prototype._isVerticalGridEnabled = function() {
        return this.options.verticalGridVisible === D._OPTION_ENABLED || this.options.verticalGridVisible === D._OPTION_AUTO && this.options.display === D._OPTION_DISPLAY._GRID
    }, D.prototype._isFF = function() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    }, D.prototype._isIE = function() {
        if (void 0 === this._browserIsIE) {
            var e = navigator.userAgent;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var t = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e);
                null != t && (this._browserIsIE = parseFloat(t[1]))
            } else e.indexOf("Trident") >= 0 ? this._browserIsIE = 11 : this._browserIsIE = null
        }
        return this._browserIsIE
    }, D.prototype._isWebkit = function() {
        if (void 0 === this._browserIsWebkit) {
            var e = navigator.userAgent.toLowerCase();
            this._browserIsWebkit = /webkit/.test(e) && !/edge/.test(e)
        }
        return this._browserIsWebkit
    }, D.prototype._refreshTouchAffordanceGlassPanePosition = function() {
        var e = this._getTouchAffordanceGlassPane();
        if (e) {
            var t = this._getLayoutManager().getScroller().getBoundingClientRect(),
                o = this._getTableContainer().getBoundingClientRect();
            e.style[D.CSS_PROP._TOP] = t.top - o.top + D.CSS_VAL._PX, e.style[D.CSS_PROP._BOTTOM] = t.bottom - o.bottom + D.CSS_VAL._PX, this._moveTableBodyRowTouchSelectionAffordanceTop(), this._moveTableBodyRowTouchSelectionAffordanceBottom()
        }
    }, D.prototype._refreshTableStatusPosition = function(e) {
        var t = this._getTableContainer(),
            o = t.clientHeight,
            i = this._getTableStatusMessage(),
            l = 0,
            n = o,
            s = this._getTableHeader();
        if (null != s) {
            var a = s.offsetHeight;
            l = a, n -= a
        }
        var r = this._getTableFooter();
        null != r && (n -= r.offsetHeight);
        var _ = this._getTableBottomSlot();
        if (null != _ && (n -= _.offsetHeight), this._isSkeletonSupport()) {
            var h = 0,
                d = this._getDefaultSkeletonDimension();
            d.width > 0 && d.height > 0 && (h = Math.max(1, Math.ceil(n / d.height)));
            for (var u = 0; u < h; u++) i.appendChild(this._createSkeletonRow());
            this._skeletonFadeInEndListener = function() {
                i.classList.remove("oj-animation-skeleton-fade-in"), i.querySelectorAll(".oj-table-skeleton").forEach(function(e) {
                    e.classList.add("oj-animation-skeleton")
                }), i.removeEventListener("animationend", this._skeletonFadeInEndListener)
            }.bind(this), i.addEventListener("animationend", this._skeletonFadeInEndListener), i.classList.add("oj-animation-skeleton-fade-in")
        } else n <= 40 && (l = 0, n = o);
        if (i.style[D.CSS_PROP._TOP] = l + D.CSS_VAL._PX, i.style[D.CSS_PROP._HEIGHT] = n + D.CSS_VAL._PX, i.style[D.CSS_PROP._WIDTH] = t.clientWidth + D.CSS_VAL._PX, e && (i.style[D.CSS_PROP._DISPLAY] = D.CSS_VAL._INLINE, this._statusMessageShown = !0), !this._isSkeletonSupport()) {
            var c = i.children[0];
            c.style[D.CSS_PROP._TOP] = (n - c.offsetHeight) / 2 + D.CSS_VAL._PX
        }
    }, D.prototype._createSkeletonRow = function() {
        var e = document.createElement("div");
        e.className = D.CSS_CLASSES._TABLE_SKELETON_CONTAINER_CLASS;
        var t = document.createElement("div");
        return t.className = D.CSS_CLASSES._TABLE_SKELETON_CLASS, e.appendChild(t), e
    }, D.prototype._getDefaultSkeletonDimension = function() {
        if (null == this._defaultSkeletonDim) {
            var e = this._getTableContainer(),
                t = this._createSkeletonRow();
            t.style.visibility = "hidden", t.style.display = "block", e.appendChild(t);
            var o = {
                width: t.offsetWidth,
                height: t.offsetHeight
            };
            return e.removeChild(t), o.height > 0 && o.width > 0 && (this._defaultSkeletonDim = o), o
        }
        return this._defaultSkeletonDim
    }, D.prototype._cacheDomElement = function(e, t) {
        this._domCache || (this._domCache = {}), this._domCache[e] = t
    }, D.prototype._clearDomCache = function(e) {
        e && this._domCache ? delete this._domCache[e] : this._domCache = {}
    }, D.prototype._getCachedDomElement = function(e) {
        return this._domCache ? this._domCache[e] : null
    }, D.prototype._isCachedDomElement = function(e) {
        return this._domCache || (this._domCache = {}), -1 !== Object.keys(this._domCache).indexOf(e)
    }, D.prototype._getTableElementByClassName = function(e, t) {
        if (!this._isCachedDomElement(e)) {
            var o = this._getTableContainer();
            if (o)
                if (this._cacheDomElement(e, null), t) {
                    if (this._cacheDomElement(e, this._getChildElementByClassName(o, e)), null == this._getCachedDomElement(e)) {
                        var i = this._getTable();
                        this._cacheDomElement(e, this._getChildElementByClassName(i, e))
                    }
                } else {
                    var l = this._getTableElementsByClassName(o, e);
                    l.length > 0 && this._cacheDomElement(e, l[0])
                }
        }
        return this._getCachedDomElement(e)
    }, D.prototype._getChildElementByClassName = function(e, t) {
        if (null != e.childNodes && e.childNodes.length > 0)
            for (var o = 0; o < e.childNodes.length; o++)
                if (null != e.childNodes[o].classList && e.childNodes[o].classList.contains(t)) return e.childNodes[o];
        return null
    }, D.prototype._getTableElementsByClassName = function(e, t, o) {
        var i = e.getElementsByClassName(t);
        return this._filterTableOwnedElements(i, o ? e : null)
    }, D.prototype._getTableElementsByTagName = function(e, t, o) {
        var i = e.getElementsByTagName(t);
        return this._filterTableOwnedElements(i, o ? e : null)
    }, D.prototype._tableQuerySelectorAll = function(e, t, o) {
        var i = e.querySelectorAll(t);
        return this._filterTableOwnedElements(i, o ? e : null)
    }, D.prototype._filterTableOwnedElements = function(e, t) {
        var o, i;
        if (t) {
            o = t;
            for (var l = t.getElementsByTagName(D.DOM_ELEMENT._TABLE), n = 0; n < l.length; n++)
                if (l[n].parentNode === t || l[n].parentNode.parentNode === t) {
                    i = l[n];
                    break
                }
        } else o = this._getTableContainer(), i = this._getTable();
        return Array.prototype.filter.call(e, function(e) {
            return this._isTableOwned(e, o, i)
        }.bind(this))
    }, D.prototype._isTableOwned = function(e, t, o) {
        var i = t || this._getTableContainer(),
            l = t ? o : this._getTable();
        if (i) {
            if (l) {
                var n = this._getFirstAncestor(e, l.tagName);
                if (n === l) return !0;
                if (n) return !1
            }
            var s = this._getFirstAncestor(e, "." + D.CSS_CLASSES._TABLE_CONTAINER_CLASS);
            if (s === i) return !0;
            if (s) return !1;
            if (!i.contains(e)) return !0
        }
        return !1
    }, D.prototype._focusSetupHandlers = function(e, t) {
        this._setFocusInHandler(e), this._setFocusOutHandler(t)
    }, D.prototype._getSortIconContainer = function(e) {
        return this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_SORT_ICON_CONTAINER_CLASS)[0]
    }, D.prototype._getSortIcon = function(e) {
        var t = this._getSortIconContainer(e);
        return null != t ? t.firstChild : null
    }, D.prototype._getTableBodySelectorCell = function(e) {
        if (null != e) {
            var t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_SELECTOR_CELL);
            if (t.length > 0) return t[0]
        }
        return null
    }, D.prototype._getTableSelectorColumn = function() {
        var e = this._getTableHeaderRow();
        if (null != e) {
            var t = this._getTableElementsByClassName(e, D.CSS_CLASSES._COLUMN_HEADER_SELECTOR_CELL_CLASS);
            if (t.length > 0) return t[0]
        }
        return null
    }, D.prototype._getTableFooterSelectorCell = function() {
        var e = this._getTableFooterRow();
        if (null != e) {
            var t = this._getTableElementsByClassName(e, D.CSS_CLASSES._TABLE_FOOTER_SELECTOR_CELL_CLASS);
            if (t.length > 0) return t[0]
        }
        return null
    }, D.CSS_CLASSES = {
        _OPTION_DEFAULTS_CLASS: "oj-table-option-defaults",
        _TABLE_CONTAINER_CLASS: "oj-table-container",
        _TABLE_SCROLLER_CLASS: "oj-table-scroller",
        _TABLE_EXTERNAL_SCROLL_CLASS: "oj-table-external-scroll",
        _TABLE_CLASS: "oj-table",
        _TABLE_STICKY_CLASS: "oj-table-sticky",
        _TABLE_STRETCH_CLASS: "oj-table-stretch",
        _TABLE_COMPACT_CLASS: "oj-table-grid-display",
        _TABLE_HGRID_CLASS: "oj-table-horizontal-grid",
        _TABLE_EDIT_CLASS: "oj-table-editable",
        _TABLE_MULTI_ROW_SELECT_CLASS: "oj-table-multiple-row-selection",
        _TABLE_SCROLL_VERTICAL_CLASS: "oj-table-scroll-vertical",
        _TABLE_SCROLL_HORIZONTAL_CLASS: "oj-table-scroll-horizontal",
        _TABLE_SORT_CLASS: "oj-table-sort",
        _TABLE_SHOW_REQUIRED_CLASS: "oj-table-show-required",
        _TABLE_ELEMENT_CLASS: "oj-table-element",
        _TABLE_FOOTER_CLASS: "oj-table-footer",
        _TABLE_FOOTER_ROW_CLASS: "oj-table-footer-row",
        _TABLE_HEADER_CLASS: "oj-table-header",
        _TABLE_HEADER_ROW_CLASS: "oj-table-header-row",
        _TABLE_HEADER_SELECTOR_CLASS: "oj-table-header-selector",
        _TABLE_COLGROUP_CLASS: "oj-table-colgroup",
        _TABLE_COL_SELECTOR_CLASS: "oj-table-col-selector",
        _TABLE_COL_CLASS: "oj-table-col",
        _TABLE_BOTTOM_SLOT_CLASS: "oj-table-slot-bottom",
        _TABLE_SORT_ICON_CONTAINER_CLASS: "oj-table-sort-icon-container",
        _COLUMN_HEADER_CELL_CLASS: "oj-table-column-header-cell",
        _COLUMN_HEADER_SELECTOR_CELL_CLASS: "oj-table-column-header-selector-cell",
        _COLUMN_HEADER_DROP_EMPTY_CELL_CLASS: "oj-table-column-header-drop-empty-cell",
        _COLUMN_HEADER_CLASS: "oj-table-column-header",
        _COLUMN_HEADER_TEXT_CLASS: "oj-table-column-header-text",
        _COLUMN_HEADER_ASC_ICON_CLASS: "oj-table-column-header-asc-icon",
        _COLUMN_HEADER_DSC_ICON_CLASS: "oj-table-column-header-dsc-icon",
        _COLUMN_HEADER_SHOW_REQUIRED_ICON_CLASS: "oj-table-column-header-show-required-icon",
        _COLUMN_HEADER_DEFAULT_SORT_ICON_CLASS: "oj-table-column-header-default-sort-icon",
        _COLUMN_HEADER_DRAG_INDICATOR_BEFORE_CLASS: "oj-table-column-header-drag-indicator-before",
        _COLUMN_HEADER_DRAG_INDICATOR_AFTER_CLASS: "oj-table-column-header-drag-indicator-after",
        _COLUMN_HEADER_DRAG_IMAGE: "oj-table-column-header-cell-drag-image",
        _COLUMN_HEADER_RESIZING_CLASS: "oj-table-column-header-resizing",
        _COLUMN_HEADER_RESIZE_INDICATOR_CLASS: "oj-table-column-header-resize-indicator",
        _COLUMN_RESIZE_INDICATOR_CLASS: "oj-table-column-resize-indicator",
        _COLUMN_DROP_INDICATOR_CLASS: "oj-table-column-drop-indicator",
        _TABLE_BODY_CLASS: "oj-table-body",
        _TABLE_BUFFER_ROW_CLASS: "oj-table-body-scroll-buffer",
        _TABLE_LEGACY_WIDTH_BUFFER_ROW_CLASS: "oj-table-legacy-width-buffer",
        _TABLE_LEGACY_WIDTH_BUFFER_CELL_CLASS: "oj-table-legacy-width-buffer-cell",
        _TABLE_DATA_ROW_CLASS: "oj-table-body-row",
        _TABLE_DATA_ROW_DRAG_INDICATOR_CLASS: "oj-table-body-row-drag-indicator",
        _TABLE_TOUCH_AFFORDANCE_GLASS_PANE_CLASS: "oj-table-touch-affordance-glass-pane",
        _TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOP_CLASS: "oj-table-body-row-touch-selection-affordance-top",
        _TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_BOTTOM_CLASS: "oj-table-body-row-touch-selection-affordance-bottom",
        _TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOP_ICON_CLASS: "oj-table-body-row-touch-selection-affordance-top-icon",
        _TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_BOTTOM_ICON_CLASS: "oj-table-body-row-touch-selection-affordance-bottom-icon",
        _TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOUCH_AREA_CLASS: "oj-table-body-row-touch-selection-affordance-touch-area",
        _TABLE_DATA_ROW_EDIT_CLASS: "oj-table-body-row-edit",
        _TABLE_DATA_ROW_SELECTOR_CLASS: "oj-table-body-row-selector",
        _TABLE_SELECTOR_CELL: "oj-table-selector-cell",
        _TABLE_DATA_CURRENT_ROW_CLASS: "oj-table-body-current-row",
        _TABLE_ACTIVE_ELEMENT_CLASS: "oj-table-active-element",
        _TABLE_DATA_CELL_CLASS: "oj-table-data-cell",
        _TABLE_DATA_CELL_EDIT_CLASS: "oj-table-data-cell-edit",
        _TABLE_DATE_CELL_FORM_CONTROL_CLASS: "oj-form-control-inherit",
        _TABLE_VGRID_LINES_CLASS: "oj-table-vgrid-lines",
        _TABLE_FOOTER_CELL_CLASS: "oj-table-footer-cell",
        _TABLE_FOOTER_SELECTOR_CELL_CLASS: "oj-table-footer-selector-cell",
        _TABLE_FOOTER_DROP_EMPTY_CELL_CLASS: "oj-table-footer-drop-empty-cell",
        _TABLE_STATUS_ACC_NOTIFICATION_CLASS: "oj-table-status-acc-notification",
        _TABLE_STATUS_MESSAGE_CLASS: "oj-table-status-message",
        _TABLE_STATUS_MESSAGE_TEXT_CLASS: "oj-table-status-message-text",
        _TABLE_ACC_CONTEXT_INFO_CLASS: "oj-table-acc-context-info",
        _TABLE_ACC_STATE_INFO_CLASS: "oj-table-acc-state-info",
        _TABLE_ACC_ROW_STATE_INFO_CLASS: "oj-table-acc-row-state-info",
        _TABLE_WIDTH_CONTAINER_CLASS: "oj-table-width-container",
        _TABLE_LOADING_ICON_CLASS: "oj-table-loading-icon",
        _TABLE_BODY_MESSAGE_CLASS: "oj-table-body-message",
        _TABLE_BODY_MESSAGE_ROW_CLASS: "oj-table-body-message-row",
        _TABLE_NO_DATA_CONTAINER_CLASS: "oj-table-no-data-container",
        _TABLE_NO_DATA_ROW_CLASS: "oj-table-no-data-row",
        _TABLE_FETCH_SKELETON_ROW_CLASS: "oj-table-fetch-skeleton-row",
        _TABLE_SKELETON_CELL_CLASS: "oj-table-skeleton-cell",
        _TABLE_SKELETON_CONTAINER_CLASS: "oj-table-skeleton-container",
        _TABLE_SKELETON_CLASS: "oj-table-skeleton",
        _TABLE_ADD_ROW_CLASS: "oj-table-add-row",
        _TABLE_ADD_ROW_PLACEHOLDER_CLASS: "oj-table-add-row-placeholder",
        _TABLE_HIDDEN_CELL_CLASS: "oj-table-hidden-cell",
        _ICON_CLASS: "oj-icon",
        _WIDGET_ICON_CLASS: "oj-component-icon",
        _HIDDEN_CONTENT_ACC_CLASS: "oj-helper-hidden-accessible",
        _TEXT_ALIGN_END: "oj-helper-text-align-end",
        _TABLE_FROZEN_START: "oj-table-frozen-start",
        _TABLE_FROZEN_END: "oj-table-frozen-end",
        _TABLE_FROZEN_EDGE: "oj-table-frozen-edge",
        _TABLE_LEGACY_SIZER_CLASS: "oj-table-legacy-sizer",
        _TABLE_LEGACY_SCROLL_CLASS: "oj-table-legacy-scroll"
    }, D.CSS_PROP = {
        _DISPLAY: "display",
        _VISIBILITY: "visibility",
        _POSITION: "position",
        _HEIGHT: "height",
        _WIDTH: "width",
        _TOP: "top",
        _BOTTOM: "bottom",
        _LEFT: "left",
        _RIGHT: "right",
        _PADDING_TOP: "padding-top",
        _PADDING_BOTTOM: "padding-bottom",
        _PADDING_LEFT: "padding-left",
        _PADDING_RIGHT: "padding-right",
        _OVERFLOW: "overflow",
        _OVERFLOW_X: "overflow-x",
        _OVERFLOW_Y: "overflow-y",
        _MIN_WIDTH: "min-width",
        _MAX_WIDTH: "max-width",
        _MIN_HEIGHT: "min-height",
        _FLOAT: "float",
        _BORDER_TOP: "border-top",
        _BORDER_TOP_WIDTH: "border-top-width",
        _BORDER_BOTTOM_WIDTH: "border-bottom-width",
        _BORDER_LEFT_WIDTH: "border-left-width",
        _BORDER_RIGHT_WIDTH: "border-right-width",
        _BORDER_COLOR: "border-color",
        _MARGIN_BOTTOM: "margin-bottom",
        _VERTICAL_ALIGN: "vertical-align",
        _CURSOR: "cursor",
        _ZINDEX: "z-index",
        _BACKGROUND_COLOR: "background-color",
        _BOX_SIZING: "box-sizing"
    }, D.CSS_VAL = {
        _NONE: "none",
        _BLOCK: "block",
        _INLINE_BLOCK: "inline-block",
        _RELATIVE: "relative",
        _ABSOLUTE: "absolute",
        _INLINE: "inline",
        _AUTO: "auto",
        _HIDDEN: "hidden",
        _SCROLL: "scroll",
        _VISIBLE: "visible",
        _LEFT: "left",
        _PX: "px",
        _MIDDLE: "middle",
        _MOVE: "move",
        _FIXED: "fixed",
        _TRANSPARENT: "transparent",
        _BORDER_BOX: "border-box",
        _COL_RESIZE: "col-resize"
    }, D.DOM_ATTR = {
        _STYLE: "style",
        _TABINDEX: "tabindex",
        _TYPE: "type",
        _ID: "id",
        _TITLE: "title",
        _HREF: "href",
        _COLSPAN: "colspan",
        _DRAGGABLE: "draggable",
        _ROLE: "role",
        _ARIA_LABEL: "aria-label",
        _ARIA_LABELLEDBY: "aria-labelledby",
        _ARIA_HIDDEN: "aria-hidden"
    }, D.DOM_ELEMENT = {
        _DIV: "div",
        _A: "a",
        _TR: "tr",
        _TD: "td",
        _TH: "th",
        _TABLE: "table",
        _TBODY: "tbody",
        _THEAD: "thead",
        _TFOOT: "tfoot",
        _INPUT: "input",
        _UL: "ul",
        _SPAN: "span",
        _BUTTON: "button",
        _LABEL: "label",
        _COLGROUP: "colgroup",
        _COL: "col"
    }, D.MARKER_STYLE_CLASSES = {
        _WIDGET: "oj-component",
        _ACTIVE: "oj-active",
        _CLICKABLE_ICON: "oj-clickable-icon-nocontext",
        _DISABLED: "oj-disabled",
        _ENABLED: "oj-enabled",
        _FOCUS: "oj-focus",
        _FOCUS_HIGHLIGHT: "oj-focus-highlight",
        _HOVER: "oj-hover",
        _SELECTED: "oj-selected",
        _DEFAULT: "oj-default",
        _WARNING: "oj-warning",
        _DRAGGABLE: "oj-draggable",
        _DRAG: "oj-drag",
        _HIDE_VERTICAL_SCROLLBAR: "oj-table-hide-vertical-scrollbar"
    }, D.DEFAULT_ROW_HEIGHT_GUESS = 50, D.prototype._clearOpenPopupListeners = function() {
        null != this._openPopup && (this._openPopup.removeEventListener("focusin", this._handlePopupFocusinListener), this._openPopup.removeEventListener("focusout", this._handlePopupFocusoutListener), this._openPopup = null), this._handlePopupFocusinListener = null, this._handlePopupFocusoutListener = null
    }, D.prototype._handlePopupFocusout = function(e) {
        this._handleFocusout(e, !0)
    }, D.prototype._handlePopupFocusin = function(e) {
        this._handleFocusin(e, !0)
    }, D.prototype._handleFocusout = function(e, t) {
        this._clearFocusoutTimeout();
        var o = this._getTable();
        if (!t) {
            this._clearOpenPopupListeners();
            var i = v.getLogicalChildPopup(o);
            if (null != i) return this._openPopup = i, this._handlePopupFocusinListener = this._handlePopupFocusin.bind(this), this._handlePopupFocusoutListener = this._handlePopupFocusout.bind(this), i.addEventListener("focusin", this._handlePopupFocusinListener), void i.addEventListener("focusout", this._handlePopupFocusoutListener)
        }
        this._setFocusoutBusyState(), this._focusoutTimeout = setTimeout(function() {
            this._isTableTab = null, this._tempFFFocus = null, this._clearOpenPopupListeners(), this._focusOutHandler(c(o)), this._focusOutHandler(c(this._getTableContainer())), this._clearKeyboardKeys(), this._unhighlightActive(), this._getLayoutManager().handleFocusout(), this._setTableEditable(!1, !1, 0, !0, e, !0), this._cleanAccStatus(), this._focusEditCell && (this._focusEditCell.classList.remove(D.CSS_CLASSES._TABLE_DATA_CELL_EDIT_CLASS), this._focusEditCell = null), this._setTableActionableMode(!1, !0), this._clearFocusoutBusyState()
        }.bind(this), 100)
    }, D.prototype._handleFocusin = function(e, t) {
        if (this._clearFocusoutTimeout(), this._clearFocusoutBusyState(), !t) {
            this._clearOpenPopupListeners();
            var o = this._getTable(),
                i = this._getTableBody(),
                l = this._getTableContainer();
            if (this._focusInHandler(c(o)), this._focusInHandler(c(l)), e.target === i && !this._tempFFFocus && this._isFF()) setTimeout(function() {
                o.focus()
            }, 0);
            else if (c(o).has(e.target).length > 0) {
                var n = this._getActiveRowIndex(),
                    s = this._getActiveHeaderIndex(),
                    a = this._getPlaceHolderRow();
                if (null != a && c(a).has(e.target).length > 0) this._setActiveAddRow(), v.isActionableElement(e.target) && this._setTableActionableMode(!0, !0);
                else if (this._isTableEditMode())
                    if (this._isNodeEditable(e.target) || this._isNodeClickable(e.target) || this._isTableActionableMode() || this._hasEditableRow() || this._tempFFFocus || null != n || null != s) {
                        if (this._isTableTab && null != n)
                            for (var r = this._getTableBodyCells(n), _ = 0; _ < r.length; _++) {
                                var h = r[_];
                                if (c(h).has(e.target).length > 0) {
                                    this._scrollColumnIntoViewport(_);
                                    break
                                }
                            }
                    } else setTimeout(function() {
                        o.focus()
                    }, 0);
                else if (v.isActionableElement(e.target)) {
                    this._accActionFocus = !0;
                    var d = this._getActiveObjectFromActionableChild(e.target);
                    null != d && (d.type === D.ACTIVE_ELEMENT_TYPES._DATA_ROW ? this._setActiveRow(d.index, e, !0, !0) : d.type === D.ACTIVE_ELEMENT_TYPES._HEADER ? this._setActiveHeader(d.index, e, !0) : d.type === D.ACTIVE_ELEMENT_TYPES._FOOTER ? this._setActiveFooter(d.index, e, !0) : d.type === D.ACTIVE_ELEMENT_TYPES._NO_DATA ? this._setActiveNoData() : d.type === D.ACTIVE_ELEMENT_TYPES._ADD_ROW && this._setActiveAddRow(), this._setTableActionableMode(!0, !0))
                }
            } else this._setTableActionableMode(!1, !0)
        }
        this._isTableTab = null
    }, D.prototype._events = {
        focusout: function(e) {
            this._handleFocusout(e)
        },
        focus: function(e) {
            this._syncActiveElement(e, !0)
        },
        focusin: function(e) {
            this._handleFocusin(e)
        },
        "focus .oj-table-data-cell": function(e) {
            var t = this._getEventTargetElement(e);
            this._getElementRowIdx(t) === this._getEditableRowIdx() && (this._focusEditCell && this._focusEditCell !== t && this._focusEditCell.classList.contains(D.CSS_CLASSES._TABLE_DATA_CELL_EDIT_CLASS) && this._focusEditCell.classList.remove(D.CSS_CLASSES._TABLE_DATA_CELL_EDIT_CLASS), t.classList.add(D.CSS_CLASSES._TABLE_DATA_CELL_EDIT_CLASS), this._focusEditCell = t)
        },
        keydown: function(e) {
            var t = e.key || e.keyCode;
            this._addKeyboardKey(t);
            var o = this._getKeyboardKeys()[0];
            if (!this._isEditPending && (A.isEscapeKeyEvent(o) || A.isEnterKeyEvent(o) || A.isF2KeyEvent(o) || A.isTabKeyEvent(o) || !(this._isNodeEditable(e.target) || null != this._getTableFooter() && c(this._getTableFooter()).has(e.target).length > 0)) && (1 === this._getKeyboardKeys().length || 2 === this._getKeyboardKeys().length && e[D._KEYBOARD_CODES._MODIFIER_SHIFT])) {
                (this._isKeyPressMatch(A.isArrowUpKeyEvent) || this._isKeyPressMatch(A.isArrowDownKeyEvent) || this._isKeyPressMatch(A.isArrowLeftKeyEvent) || this._isKeyPressMatch(A.isArrowRightKeyEvent) || this._isKeyPressMatch(A.isHomeKeyEvent) || this._isKeyPressMatch(A.isEndKeyEvent)) && (e.preventDefault(), e.stopPropagation());
                var i = e[D._KEYBOARD_CODES._MODIFIER_SHIFT];
                this._isKeyPressMatch(A.isArrowUpKeyEvent) || this._isKeyPressMatch(A.isArrowDownKeyEvent) ? this._handleKeydownUpDown(e, i && this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE) : this._isKeyPressMatch(A.isArrowLeftKeyEvent) || this._isKeyPressMatch(A.isArrowRightKeyEvent) ? this._handleKeydownLeftRight(e, i && this._getColumnSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE) : this._isKeyPressMatch(A.isTabKeyEvent) ? this._handleKeydownTab(e) : A.isF2KeyEvent(o) ? this._handleKeydownF2(e) : A.isSpaceBarKeyEvent(o) ? this._handleKeydownSpacebar(e) : A.isEnterKeyEvent(o) ? this._handleKeydownEnter(e) : A.isHomeKeyEvent(o) ? this._handleKeydownHome(e) : A.isEndKeyEvent(o) ? this._handleKeydownEnd(e) : A.isEscapeKeyEvent(o) && this._handleKeydownEsc(e)
            }
        },
        keyup: function(e) {
            if (1 === this._getKeyboardKeys().length) {
                var t = this._getKeyboardKeys()[0];
                if (this._isNodeEditable(e.target) || null != this._getTableFooter() && c(this._getTableFooter()).has(e.target).length > 0) return void this._removeKeyboardKey(t);
                this._removeKeyboardKey(t)
            }
            var o = e.key || e.keyCode;
            this._removeKeyboardKey(o)
        },
        "mouseleave .oj-table-element": function() {
            this._getLayoutManager().handleMouseLeaveTable()
        },
        "mousedown .oj-table-body": function(e) {
            var t = e[D._KEYBOARD_CODES._MODIFIER_SHIFT];
            if (!(A.isEventClickthroughDisabled(e, this._getTable()) || A.isFromDefaultSelector(e) && !t || this._isEditPending) && 1 === e.which && (this._mouseDownRowIdx = this._getElementRowIdx(e.target), null != this._mouseDownRowIdx)) {
                var o = this._getTableBodyRow(this._mouseDownRowIdx);
                null != o && o.draggable && (this._mouseDownRowIdx = null)
            }
        },
        mouseup: function() {
            this._mouseDownRowIdx = null
        },
        "mouseenter .oj-table-body-row": function(e) {
            if (this._isRowSelectionEnabled()) {
                e.originalEvent && 0 === e.originalEvent.buttons && (this._mouseDownRowIdx = null);
                var t = this._getEventTargetElement(e),
                    o = this._getElementRowIdx(t);
                this._isTableOwned(t) && null == this._getTableDndContext()._dragImage ? (t.classList.add(D.MARKER_STYLE_CLASSES._HOVER), this._updateRowStateCellsClass(o, null, {
                    hover: !0
                }), this._handleMouseEnterSelection(e.target)) : (this._updateRowStateCellsClass(o, null, {
                    hover: !1
                }), e.stopPropagation())
            }
        },
        "mouseleave .oj-table-body-row": function(e) {
            var t = this._getEventTargetElement(e),
                o = this._getElementRowIdx(t);
            this._isTableOwned(t) ? (t.classList.remove(D.MARKER_STYLE_CLASSES._HOVER), this._updateRowStateCellsClass(o, null, {
                hover: !1
            })) : (this._updateRowStateCellsClass(o, null, {
                hover: !0
            }), e.stopPropagation())
        },
        "mousedown .oj-table-column-header-cell": function(e) {
            A.isEventClickthroughDisabled(e, this._getTable()) || this._isEditPending || (this._lastSelectedHeaderIdx = null, this._getLayoutManager().handleMouseDownHeaderCell(e))
        },
        "mousedown .oj-table-footer-cell": function(e) {
            if (!A.isEventClickthroughDisabled(e, this._getTable()) && !this._isEditPending && 1 === e.which) {
                var t = this._getElementColumnIdx(this._getEventTargetElement(e));
                e[D._KEYBOARD_CODES._MODIFIER_SHIFT] || (this._setActiveFooter(t, e, !0), c(e.target).data(D._FOCUS_CALLED, !0)), this._isFF() && S.isMetaKeyPressed(e) && e.preventDefault()
            }
        },
        "mouseenter .oj-table-column-header-cell": function(e) {
            this._getLayoutManager().handleMouseEnterHeaderCell(e);
            var t = this._getEventTargetElement(e);
            this._handleMouseEnterColumnHeader(t)
        },
        "mousemove .oj-table-header": function(e) {
            this._getLayoutManager().handleMouseMoveHeader(e)
        },
        "mousemove .oj-table-column-header-cell": function(e) {
            this._getLayoutManager().handleMouseMoveHeaderCell(e);
            var t = this._getEventTargetElement(e);
            this._handleMouseEnterColumnHeader(t)
        },
        "mouseleave .oj-table-column-header-cell": function(e) {
            var t = this._getEventTargetElement(e);
            this._handleMouseLeaveColumnHeader(t)
        },
        "mouseup .oj-table-column-header-cell": function(e) {
            this._getLayoutManager().handleMouseUp(e)
        },
        "mousedown .oj-table-data-cell": function(e) {
            if (!A.isEventClickthroughDisabled(e, this._getTable()) && !this._isEditPending) {
                this._lastSelectedRowIdx = null;
                var t = this._getEventTargetElement(e),
                    o = this._getElementRowIdx(t);
                e[D._KEYBOARD_CODES._MODIFIER_SHIFT] || (this._setActiveRow(o, e, !0), c(e.target).data(D._FOCUS_CALLED, !0)), this._isFF() && S.isMetaKeyPressed(e) && e.preventDefault()
            }
        },
        "mouseup .oj-table-data-cell": function(e) {
            this._getLayoutManager().handleMouseUp(e)
        },
        "click .oj-table-sort-icon-container": function(e) {
            if (!this._isEditPending) {
                var t = this._getElementColumnIdx(e.target),
                    o = this._getTableHeaderColumn(t);
                if (o) c(o).data("sorted") === D._COLUMN_SORT_ORDER._ASCENDING ? this._handleSortTableHeaderColumn(t, !1, e) : this._handleSortTableHeaderColumn(t, !0, e), e.preventDefault(), e.stopPropagation()
            }
        },
        "click .oj-table-body-row": function(e) {
            if (!A.isEventClickthroughDisabled(e, this._getTable()) && !this._isEditPending) {
                var t = this._getEventTargetElement(e),
                    o = this._getElementRowIdx(t),
                    i = c(e.target).data(D._FOCUS_CALLED),
                    l = e[D._KEYBOARD_CODES._MODIFIER_SHIFT];
                if (!(i || l && null != this._getActiveRowIndex())) {
                    var n = this._setActiveRow(o, e, !0);
                    if (c(e.target).data(D._FOCUS_CALLED, !1), !n) return
                }
                if (this._fireActionEvent(o, e), !A.isFromDefaultSelector(e) || l)
                    if (l) {
                        var s = this._getActiveRowIndex();
                        if (null != s && (window.getSelection().removeAllRanges(), this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE)) return void this._selectRange(s, o, !0);
                        this._handleSelectionGesture(o, !0, !1)
                    } else if (S.isMetaKeyPressed(e)) this._handleSelectionGesture(o, !0, !0), this._lastSelectedRowIdxArray && this._lastSelectedRowIdxArray.indexOf(o) > -1 && (this._selectionAnchorIdx = o);
                else if (0 === this._getKeyboardKeys().length) {
                    var a = this._isTouchDevice();
                    this._handleSelectionGesture(o, !0, a && (this._isStickyLayoutEnabled() || this._nonContiguousSelection)), this._lastSelectedRowIdxArray && this._lastSelectedRowIdxArray.indexOf(o) > -1 && (this._selectionAnchorIdx = o);
                    var r = this._getRowSelection(o);
                    !this._isStickyLayoutEnabled() && a && r && !this._nonContiguousSelection && this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE && this._createTableBodyRowTouchSelectionAffordance(o)
                }
            }
        },
        "dblclick .oj-table-data-cell": function(e) {
            if (!A.isEventClickthroughDisabled(e, this._getTable()) && !this._isEditPending) {
                var t = this._getElementColumnIdx(e.target);
                this._setTableEditable(!0, !1, t, !0, e)
            }
        },
        "contextmenu .oj-table-data-cell": function(e) {
            if (!A.isEventClickthroughDisabled(e, this._getTable()) && !this._isEditPending) {
                var t = this._getElementRowIdx(this._getEventTargetElement(e));
                this._setActiveRow(t, e, !0)
            }
        },
        "click .oj-table-column-header-cell": function(e) {
            if (!A.isEventClickthroughDisabled(e, this._getTable()) && !this._isEditPending) {
                var t = this._getEventTargetElement(e);
                if (t.style.cursor !== D.CSS_VAL._COL_RESIZE) {
                    var o = this._getElementColumnIdx(t),
                        i = c(e.target).data(D._FOCUS_CALLED),
                        l = e[D._KEYBOARD_CODES._MODIFIER_SHIFT];
                    if (i || l && null != this._getActiveHeaderIndex() || (this._setActiveHeader(o, e), c(e.target).data(D._FOCUS_CALLED, !1)), l) {
                        var n = this._getActiveHeaderIndex();
                        null != n && this._getColumnSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE ? this._selectRange(n, o, !1) : this._handleSelectionGesture(o, !1, !0)
                    } else S.isMetaKeyPressed(e) ? this._handleSelectionGesture(o, !1, !0) : 0 === this._getKeyboardKeys().length && this._handleSelectionGesture(o, !1, this._isTouchDevice())
                }
            }
        },
        "click .oj-table-footer-cell": function(e) {
            if (!A.isEventClickthroughDisabled(e, this._getTable()) && !this._isEditPending) {
                var t = this._getEventTargetElement(e);
                if (t.style.cursor !== D.CSS_VAL._COL_RESIZE) {
                    var o = this._getElementColumnIdx(t),
                        i = c(e.target).data(D._FOCUS_CALLED),
                        l = e[D._KEYBOARD_CODES._MODIFIER_SHIFT];
                    if (i || l && null != this._getActiveFooterIndex() || (this._setActiveFooter(o, e), c(e.target).data(D._FOCUS_CALLED, !1)), l) {
                        var n = this._getActiveFooterIndex();
                        null != n && this._getColumnSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE ? this._selectRange(n, o, !1) : this._handleSelectionGesture(o, !1, !0)
                    } else S.isMetaKeyPressed(e) ? this._handleSelectionGesture(o, !1, !0) : 0 === this._getKeyboardKeys().length && this._handleSelectionGesture(o, !1, !1)
                }
            }
        },
        "dragstart .oj-table-column-header-cell": function(e) {
            if (!this._isEditPending) return this._getEventTargetElement(e).style.cursor !== D.CSS_VAL._COL_RESIZE ? this._getTableDndContext().handleColumnDragStart(e) : void 0
        },
        "dragenter .oj-table-column-header-cell": function(e) {
            return this._getTableDndContext().handleColumnDragEnter(e)
        },
        "dragover .oj-table-column-header-cell": function(e) {
            return this._getTableDndContext().handleColumnDragOver(e)
        },
        "dragleave .oj-table-column-header-cell": function(e) {
            return this._getTableDndContext().handleColumnDragLeave(e)
        },
        "drop .oj-table-column-header-cell": function(e) {
            return this._getTableDndContext().handleColumnDrop(e)
        },
        "dragend .oj-table-column-header-cell": function(e) {
            return this._getTableDndContext().handleColumnDragEnd(e)
        },
        "dragstart .oj-table-body-row": function(e) {
            if (!this._isEditPending) return this._getTableDndContext().handleRowDragStart(e)
        },
        "drag .oj-table-body-row": function(e) {
            return this._getTableDndContext().handleRowDrag(e)
        },
        "dragend .oj-table-body-row": function(e) {
            return this._getTableDndContext().handleRowDragEnd(e)
        },
        "dragenter .oj-table-body": function(e) {
            return this._getTableDndContext().handleRowDragEnter(e)
        },
        "dragover .oj-table-body": function(e) {
            return this._getTableDndContext().handleRowDragOver(e)
        },
        "dragleave .oj-table-body": function(e) {
            return this._getTableDndContext().handleRowDragLeave(e)
        },
        "drop .oj-table-body": function(e) {
            return this._getTableDndContext().handleRowDrop(e)
        }
    }, D.prototype._fireActionEvent = function(e, t) {
        if (!this._isTableActionableMode()) {
            var o = this._getTableBodyRow(e);
            null != o && this._trigger("rowAction", t, {
                context: {
                    key: c(o).data("rowKey"),
                    data: c(o).data("rowData"),
                    metadata: c(o).data("rowMetadata")
                }
            })
        }
    }, D.prototype._getEventTargetElement = function(e) {
        return 0 === e.type.indexOf("touch") ? this._getTouchEventTargetElement(e) : e.currentTarget
    }, D.prototype._getTouchEventTargetElement = function(e) {
        var t = e.originalEvent.changedTouches[0];
        return document.elementFromPoint(t.clientX, t.clientY)
    }, D.prototype._registerCustomEvents = function() {
        var e = c.event.special;
        e.ojtablebeforecurrentrow = {
            handle: function(e) {
                var t = e.handleObj;
                return t.handler.apply(this, [e, arguments[1]])
            }
        }, e.ojtablesort = {
            handle: function(e) {
                var t = e.handleObj;
                return t.handler.apply(this, [e, arguments[1]])
            }
        }
    }, D.prototype._touchEventDoubleTapFunction = function(e, t) {
        var o = c(e.target);
        null != this._lastTapTime && (new Date).getTime() - this._lastTapTime < 250 && this._lastTapTarget[0] === o[0] ? (this._lastTapTime = null, this._lastTapTarget = null, t()) : (this._lastTapTarget = o, this._lastTapTime = (new Date).getTime())
    }, D.prototype._registerTouchEvents = function() {
        const e = {
                "touchstart .oj-table-body-row-touch-selection-affordance-touch-area": function(e) {
                    1 === e.originalEvent.touches.length && this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE && (e.target.classList.contains(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOP_CLASS) || e.target.classList.contains(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_TOP_ICON_CLASS) ? (e.preventDefault(), this._mouseDownRowIdx = c(this._getTableBodyRowTouchSelectionAffordanceBottom()).data("rowIdx")) : (e.target.classList.contains(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_BOTTOM_CLASS) || e.target.classList.contains(D.CSS_CLASSES._TABLE_DATA_ROW_TOUCH_SELECTION_AFFORDANCE_BOTTOM_ICON_CLASS)) && (e.preventDefault(), this._mouseDownRowIdx = c(this._getTableBodyRowTouchSelectionAffordanceTop()).data("rowIdx")))
                },
                "touchstart .oj-table-column-header-cell": function(e) {
                    this._getLayoutManager().handleTouchStartHeaderCell(e)
                },
                "touchmove .oj-table-header": function(e) {
                    this._getLayoutManager().handleTouchMoveHeader(e)
                },
                "touchmove .oj-table-body-row-touch-selection-affordance-touch-area": function(e) {
                    if (null != this._mouseDownRowIdx) {
                        e.preventDefault();
                        var t = this._getEventTargetElement(e);
                        this._handleMouseEnterSelection(t, !0)
                    }
                }
            },
            t = this._getTableContainer();
        if (this._on(c(t), {
                touchend: function(e) {
                    if (null != this._mouseDownRowIdx) {
                        var t = this._getEventTargetElement(e);
                        this._handleMouseEnterSelection(t, !0)
                    }
                    this._mouseDownRowIdx = null, this._getLayoutManager().handleTouchEnd(e)
                },
                "touchend .oj-table-body": function(e) {
                    this._touchEventDoubleTapFunction(e, function(e) {
                        return function() {
                            var t = this._getEventTargetElement(e),
                                o = this._getElementColumnIdx(t);
                            this._setTableEditable(!0, !1, o, !0, e), e.preventDefault()
                        }.bind(this)
                    }.bind(this)(e))
                },
                touchcancel: function() {
                    this._mouseDownRowIdx = null, this._getLayoutManager().handleTouchCancel()
                }
            }), this._IsCustomElement()) {
            const o = function(e, t) {
                    return function(o) {
                        const i = o.currentTarget,
                            l = o.target.closest(e);
                        l && i.contains(l) && t(c.Event(o, {
                            currentTarget: l
                        }))
                    }
                },
                i = "touchstart",
                l = "touchmove",
                n = ".oj-table-body-row-touch-selection-affordance-touch-area",
                s = ".oj-table-column-header-cell",
                a = ".oj-table-header";
            this._delegatedTouchStartTableBodyListener = o(n, e[`${i} ${n}`].bind(this)), this._delegatedTouchStartCellHeaderListener = o(s, e[`${i} ${s}`].bind(this)), this._delegatedTouchMoveTableHeaderListener = o(a, e[`${l} ${a}`].bind(this)), this._delegatedTouchMoveTableBodyListener = o(n, e[`${l} ${n}`].bind(this)), t.addEventListener(i, this._delegatedTouchStartTableBodyListener, {
                passive: !1
            }), t.addEventListener(i, this._delegatedTouchStartCellHeaderListener, {
                passive: !1
            }), t.addEventListener(l, this._delegatedTouchMoveTableHeaderListener, {
                passive: !0
            }), t.addEventListener(l, this._delegatedTouchMoveTableBodyListener, {
                passive: !1
            })
        } else this._on(c(t), e)
    }, D.ACTIVE_ELEMENT_TYPES = {
        _HEADER: "header",
        _FOOTER: "footer",
        _DATA_ROW: "dataRow",
        _NO_DATA: "noData",
        _ADD_ROW: "addRow"
    }, D.prototype._createActiveObject = function(e) {
        var t;
        return e.classList.contains(D.CSS_CLASSES._TABLE_DATA_ROW_CLASS) ? (t = this._getElementRowIdx(e), {
            type: D.ACTIVE_ELEMENT_TYPES._DATA_ROW,
            index: t,
            key: this._getRowKeyForRowIdx(t),
            isActionable: !1
        }) : e.classList.contains(D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS) ? (t = this._getElementColumnIdx(e), {
            type: D.ACTIVE_ELEMENT_TYPES._HEADER,
            index: t,
            key: this._getColumnKeyForColumnIdx(t),
            isActionable: !1
        }) : e.classList.contains(D.CSS_CLASSES._COLUMN_HEADER_SELECTOR_CELL_CLASS) ? {
            type: D.ACTIVE_ELEMENT_TYPES._HEADER,
            index: -1,
            isActionable: !1
        } : e.classList.contains(D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS) ? (t = this._getElementColumnIdx(e), {
            type: D.ACTIVE_ELEMENT_TYPES._FOOTER,
            index: t,
            key: this._getColumnKeyForColumnIdx(t),
            isActionable: !1
        }) : e.classList.contains(D.CSS_CLASSES._TABLE_FOOTER_SELECTOR_CELL_CLASS) ? {
            type: D.ACTIVE_ELEMENT_TYPES._FOOTER,
            index: -1,
            isActionable: !1
        } : e.classList.contains(D.CSS_CLASSES._TABLE_BODY_MESSAGE_ROW_CLASS) || e.classList.contains(D.CSS_CLASSES._TABLE_NO_DATA_ROW_CLASS) ? {
            type: D.ACTIVE_ELEMENT_TYPES._NO_DATA,
            isActionable: !1
        } : e.classList.contains(D.CSS_CLASSES._TABLE_ADD_ROW_PLACEHOLDER_CLASS) ? {
            type: D.ACTIVE_ELEMENT_TYPES._ADD_ROW,
            isActionable: !1
        } : null
    }, D.prototype._getActiveObjectFromActionableChild = function(e) {
        var t = this._createActiveObject(e);
        if (null != t) return t;
        var o = e.parentElement;
        return null != o && c.contains(this._getTable(), o) ? this._getActiveObjectFromActionableChild(o) : null
    }, D.prototype._areActiveObjectsEqual = function(e, t) {
        return null != e && null != t ? e.type === t.type && e.index === t.index && u.KeyUtils.equals(e.key, t.key) : null == e && null == t
    }, D.prototype._getElementFromActiveObject = function(e) {
        if (null != e) {
            if (e.type === D.ACTIVE_ELEMENT_TYPES._DATA_ROW) return this._getTableBodyRow(e.index);
            if (e.type === D.ACTIVE_ELEMENT_TYPES._HEADER) return -1 === e.index ? this._getTableSelectorColumn() : this._getTableHeaderColumn(e.index);
            if (e.type === D.ACTIVE_ELEMENT_TYPES._FOOTER) return -1 === e.index ? this._getTableFooterSelectorCell() : this._getTableFooterCell(e.index);
            if (e.type === D.ACTIVE_ELEMENT_TYPES._NO_DATA) {
                var t = this._getTableBodyMessageRow();
                return null != t ? t : this._getTableNoDataRow()
            }
            if (e.type === D.ACTIVE_ELEMENT_TYPES._ADD_ROW) return this._getPlaceHolderRow()
        }
        return null
    }, D.prototype._getActiveElement = function() {
        return this._getElementFromActiveObject(this._active)
    }, D.prototype._getActiveType = function() {
        return null != this._active ? this._active.type : null
    }, D.prototype._highlightActive = function() {
        if (null != this._active) {
            var e = this._getElementFromActiveObject(this._active);
            e && (e.classList.add(D.CSS_CLASSES._TABLE_ACTIVE_ELEMENT_CLASS), this._hasFocus() && !this._active.isActionable && (this._focusInHandler(c(e)), this._hasActiveHeader() && -1 !== this._active.index && this._showTableHeaderColumnSortIcon(this._active.index)))
        }
    }, D.prototype._unhighlightActive = function() {
        if (null != this._active) {
            var e = this._getElementFromActiveObject(this._active);
            e && (e.classList.remove(D.CSS_CLASSES._TABLE_ACTIVE_ELEMENT_CLASS), this._focusOutHandler(c(e)), this._hasActiveHeader() && -1 !== this._active.index && this._hideTableHeaderColumnSortIcon(this._active.index))
        }
    }, D.prototype._hasFocus = function() {
        return this._getTable().classList.contains(D.MARKER_STYLE_CLASSES._FOCUS)
    }, D.prototype._syncActiveElement = function(e, t) {
        var o = this._hasFocus(),
            i = this._getTableBodyRows().length;
        if (null != this._active) {
            if (this._hasActiveHeader() || this._hasActiveFooter()) {
                if (this._getFirstVisibleColumnIndex(this._active.index, !0) !== this._active.index) {
                    var l = this._getFirstVisibleColumnIndex(0, !0);
                    this._hasActiveHeader() ? this._setActiveHeader(l, e, !o) : this._setActiveFooter(l, e, !o)
                } else o && this._scrollColumnIntoViewport(this._active.index), this._highlightActive(), t && this._updateAccStatusInfo();
                return
            }
            if (this._hasActiveRow()) {
                if (u.KeyUtils.equals(this._active.key, this._getRowKeyForRowIdx(this._active.index))) return o && this._scrollRowIntoViewport(this._active.index), t && this._updateAccStatusInfo(), void this._highlightActive();
                var n = this._getCurrentRow(),
                    s = null != n ? n.rowKey : null;
                if (null != s) {
                    if (i > 0) {
                        var a = this._getRowIdxForRowKey(s);
                        return null != a || (a = Math.min(null != n.rowIndex ? n.rowIndex : 0, i - 1)), void this._setActiveRow(a, e, !0, !o)
                    }
                    this._setActiveNoData()
                }
                return
            }
            if (this._hasActiveNoData()) {
                if (!0 === this._noDataMessageShown) return this._highlightActive(), void(t && this._updateAccStatusInfo())
            } else if (this._hasActiveAddRow() && null != this._getPlaceHolderRow()) return this._highlightActive(), void(t && this._updateAccStatusInfo())
        }
        this._isTableHeaderless() ? null != this._getPlaceHolderRow() ? this._setActiveAddRow() : i > 0 ? this._setActiveRow(0, e, !0, !o) : this._setActiveNoData() : this._setActiveHeader(this._getFirstVisibleColumnIndex(0, !0), e, !o)
    }, D.prototype._getFirstVisibleColumnIndex = function(e, t) {
        var o;
        if (this._isTableHeaderless()) {
            if (this._isTableFooterless()) return null;
            o = this._getTableFooterCell.bind(this)
        } else o = this._getTableHeaderColumn.bind(this);
        var i, l = this._getColumnDefs().length,
            n = e;
        if (t)
            for (; n < l;) {
                if ((i = o(n)) && i.clientWidth > 0) return n;
                n += 1
            } else
                for (; n > -1;) {
                    if ((i = o(n)) && i.clientWidth > 0) return n;
                    n -= 1
                }
        return null
    }, D.prototype._getNextVisibleColumnIndex = function(e, t) {
        var o = t ? e + 1 : e - 1;
        if (-1 === o) return this._isDefaultSelectorEnabled() ? o : e;
        var i = this._getFirstVisibleColumnIndex(o, t);
        return null !== i ? i : e
    }, D.prototype._getCurrentRow = function() {
        return this._getData() ? this._currentRow : null
    }, D.prototype._hasActiveRow = function() {
        return this._getActiveType() === D.ACTIVE_ELEMENT_TYPES._DATA_ROW
    }, D.prototype._getActiveRowIndex = function() {
        return this._hasActiveRow() ? this._active.index : null
    }, D.prototype._hasActiveHeader = function() {
        return this._getActiveType() === D.ACTIVE_ELEMENT_TYPES._HEADER
    }, D.prototype._getActiveHeaderIndex = function() {
        return this._hasActiveHeader() ? this._active.index : null
    }, D.prototype._getActiveHeaderColumn = function() {
        var e = this._getActiveHeaderIndex();
        return null != e ? -1 === e ? this._getTableSelectorColumn() : this._getTableHeaderColumn(e) : null
    }, D.prototype._hasActiveFooter = function() {
        return this._getActiveType() === D.ACTIVE_ELEMENT_TYPES._FOOTER
    }, D.prototype._getActiveFooterIndex = function() {
        return this._hasActiveFooter() ? this._active.index : null
    }, D.prototype._hasActiveAddRow = function() {
        return this._getActiveType() === D.ACTIVE_ELEMENT_TYPES._ADD_ROW
    }, D.prototype._hasActiveNoData = function() {
        return this._getActiveType() === D.ACTIVE_ELEMENT_TYPES._NO_DATA
    }, D.prototype._scrollRowIntoViewport = function(e) {
        var t = this._getLayoutManager(),
            o = this._getTableBodyRow(e),
            i = c(t.getScroller()),
            l = t.getVerticalOverflowDiff(o),
            n = l.top,
            s = n >= 0,
            a = l.bottom,
            r = a >= 0;
        s && r || (r ? (Math.abs(n) > Math.abs(a) ? i.scrollTop(i.scrollTop() + a) : i.scrollTop(i.scrollTop() - n), this._skipScrollUpdate = !1, t.updateCurrentScrollState()) : s && (Math.abs(a) > Math.abs(n) ? i.scrollTop(i.scrollTop() - n) : i.scrollTop(i.scrollTop() + a), this._skipScrollUpdate = !1, t.updateCurrentScrollState()))
    }, D.prototype._scrollColumnIntoViewport = function(e) {
        var t;
        if (t = -1 === e ? this._getTableSelectorColumn() : this._getTableHeaderColumn(e)) {
            var o = this._getLayoutManager(),
                i = o.getScroller(),
                l = c(i),
                n = o.getHorizontalOverflowDiff(t, e),
                s = n.left,
                a = n.right,
                r = s >= 0,
                _ = a >= 0;
            u.AgentUtils.getAgentInfo().browser === u.AgentUtils.BROWSER.EDGE && (s *= -1, a *= -1), r && _ || (r ? (Math.abs(a) > Math.abs(s) ? l.scrollLeft(l.scrollLeft() - s) : l.scrollLeft(l.scrollLeft() + a), this._skipScrollUpdate = !1, o.updateCurrentScrollState()) : _ && (Math.abs(s) > Math.abs(a) ? l.scrollLeft(l.scrollLeft() + a) : l.scrollLeft(l.scrollLeft() - s), this._skipScrollUpdate = !1, o.updateCurrentScrollState()))
        }
    }, D.prototype._setCurrentRow = function(e, t, o) {
        var i, l, n, s, a = this._currentRow,
            r = null == e || null == e.rowKey && null == e.rowIndex;
        if (r) n = -1, s = null != e ? e : null;
        else {
            var _ = this._getData(),
                h = e.rowIndex,
                d = e.rowKey;
            if (null == d && (d = this._getRowKeyForDataSourceRowIndex(h)), s = {
                    rowIndex: h = this._getDataSourceRowIndexForRowKey(d),
                    rowKey: d
                }, -1 !== (n = this._getRowIdxForRowKey(d)) && (!_ || n < -1 || null === n || null === d)) {
                if (i = D._LOGGER_MSG._ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY, l = p.applyParameters(D._LOGGER_MSG._ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL, {
                        rowIdx: n
                    }), this.option("currentRow", this._currentRow, {
                        _context: {
                            writeback: !0,
                            originalEvent: t,
                            internalSet: !0
                        }
                    }), o) throw new Error(i + "\n" + l);
                return E.info(i + "\n" + l), D._CURRENT_ROW_STATUS._IGNORED
            }
        }
        var u = this._getActiveRowIndex(),
            c = !this._compareCurrentRowValues(a, s);
        if (c) {
            var S;
            try {
                S = this._trigger("beforeCurrentRow", t, {
                    currentRow: s,
                    previousCurrentRow: a
                })
            } catch (e) {
                return i = D._LOGGER_MSG._ERR_PRECURRENTROW_ERROR_SUMMARY, l = p.applyParameters(D._LOGGER_MSG._ERR_PRECURRENTROW_ERROR_DETAIL, {
                    error: e.toString()
                }), E.info(i + "\n" + l), this.option("currentRow", this._currentRow, {
                    _context: {
                        writeback: !0,
                        originalEvent: t,
                        internalSet: !0
                    }
                }), D._CURRENT_ROW_STATUS._ERROR
            }
            if (!S) return this.option("currentRow", this._currentRow, {
                _context: {
                    writeback: !0,
                    originalEvent: t,
                    internalSet: !0
                }
            }), D._CURRENT_ROW_STATUS._VETOED;
            if (!(null == a || null == a.rowKey && null == a.rowIndex)) {
                var C = a.rowIndex,
                    T = this._getRowKeyForDataSourceRowIndex(C),
                    g = this._getRowIdxForRowKey(T);
                if (!1 === this._setTableEditable(!1, !1, 0, !0, t)) {
                    this._currentRow = a;
                    var f = document.activeElement,
                        A = this._getElementColumnIdx(f);
                    return this._queueTask(function() {
                        var e = g,
                            o = A;
                        null != e && null != o ? setTimeout(function() {
                            this._setCellFocus(e, o)
                        }.bind(this), 0) : null != e && setTimeout(function() {
                            this._setActiveRow(e, t)
                        }.bind(this), 0)
                    }.bind(this)), this.option("currentRow", this._currentRow, {
                        _context: {
                            writeback: !0,
                            originalEvent: t,
                            internalSet: !0
                        }
                    }), D._CURRENT_ROW_STATUS._IGNORED
                }
                var m = this._getTableBodyRow(g);
                null != m && m.classList.remove(D.CSS_CLASSES._TABLE_DATA_CURRENT_ROW_CLASS)
            }
            if (this._currentRow = s, this.option("currentRow", this._currentRow, {
                    _context: {
                        writeback: !0,
                        originalEvent: t,
                        internalSet: !0
                    }
                }), !r) {
                var b = this._getTableBodyRow(n);
                null != b && b.classList.add(D.CSS_CLASSES._TABLE_DATA_CURRENT_ROW_CLASS)
            }
        }
        return !c && u === n || null != t || this._setActiveRow(n, t, !1, !this._hasFocus()), D._CURRENT_ROW_STATUS._UPDATED
    }, D.prototype._compareCurrentRowValues = function(e, t) {
        if (e === t) return !0;
        if (null != e && null != t) {
            if (e.rowIndex === t.rowIndex && u.KeyUtils.equals(e.rowKey, t.rowKey)) return !0
        } else if (null == e && null == t) return !0;
        return !1
    }, D.prototype._setCellFocus = function(e, t) {
        var o = this._getTableBodyCell(e, t);
        if (o) {
            var i = A.getFocusableElementsInNode(o);
            if (i.length > 0) {
                var l = i[0];
                return l.focus(), "function" == typeof l.select && l.select(), !0
            }
        }
        return !1
    }, D.prototype._setCellInRowFocus = function(e, t, o) {
        if (!this._setCellFocus(e, t))
            for (var i = this._getTableBodyCells(e).length, l = 0; l < i; l++) {
                var n = l;
                if (o || (n = i - l - 1), this._setCellFocus(e, n)) return
            }
    }, D.prototype._setFocusInHandler = function(e) {
        this._focusInHandler = e
    }, D.prototype._setFocusOutHandler = function(e) {
        this._focusOutHandler = e
    }, D.prototype._setActiveRow = function(e, t, o, i) {
        if (-1 === e) return this._clearActiveRow(t, o);
        var l = this._getTableBodyRow(e);
        return null != l && this._setActive(l, t, o, i)
    }, D.prototype._clearActiveRow = function(e, t, o) {
        return !this._hasActiveRow() || this._setActive(null, e, t, o)
    }, D.prototype._resetActiveRow = function() {
        return !this._hasActiveRow() || this._setActive(null)
    }, D.prototype._setActiveHeader = function(e, t, o) {
        if (this._isTableHeaderless() || null == e) return !1;
        var i = -1 === e ? this._getTableSelectorColumn() : this._getTableHeaderColumn(e);
        return this._setActive(i, t, !0, o)
    }, D.prototype._setActiveFooter = function(e, t, o) {
        if (this._isTableFooterless() || null == e) return !1;
        var i = -1 === e ? this._getTableFooterSelectorCell() : this._getTableFooterCell(e);
        return this._setActive(i, t, !0, o)
    }, D.prototype._setActiveAddRow = function() {
        var e = this._getPlaceHolderRow();
        return null != e && this._setActive(e, null, !0)
    }, D.prototype._setActiveNoData = function() {
        var e = this._getTableBodyMessageRow();
        if (null != e) this._setActive(e, null, !0);
        else {
            var t = this._getTableNoDataRow();
            null != t && this._setActive(t, null, !0)
        }
    }, D.prototype._setActive = function(e, t, o, i) {
        if (null != e) {
            var l = this._createActiveObject(e);
            if (!this._areActiveObjectsEqual(l, this._active)) {
                if (l.type === D.ACTIVE_ELEMENT_TYPES._DATA_ROW) {
                    if (o && this._setCurrentRow({
                            rowKey: l.key
                        }, t) !== D._CURRENT_ROW_STATUS._UPDATED) return !1;
                    i || this._scrollRowIntoViewport(l.index)
                } else {
                    if (!this._clearActiveRow(t, o)) return !1;
                    (l.type === D.ACTIVE_ELEMENT_TYPES._HEADER || l.type === D.ACTIVE_ELEMENT_TYPES._FOOTER) && (i || this._scrollColumnIntoViewport(l.index))
                }
                this._setTableActionableMode(!1, !0), this._unhighlightActive(), this._active = l
            }
            i || (l.type === D.ACTIVE_ELEMENT_TYPES._HEADER || l.type === D.ACTIVE_ELEMENT_TYPES._FOOTER ? this._scrollColumnIntoViewport(l.index) : l.type === D.ACTIVE_ELEMENT_TYPES._DATA_ROW && this._scrollRowIntoViewport(l.index)), this._highlightActive(), this._active.isActionable || this._updateAccStatusInfo()
        } else if (null != this._active) {
            if (this._hasActiveRow() && o && this._setCurrentRow(null, t) !== D._CURRENT_ROW_STATUS._UPDATED) return !1;
            this._unhighlightActive(), this._active = null
        }
        return !0
    }, D.prototype._setColumnState = function(e, t) {
        var o = this._getTableHeaderColumn(e),
            i = this._getTableFooterCell(e);
        this._applyColumnState(o, i, e, t)
    }, D.prototype._applyColumnState = function(e, t, o, i) {
        i ? (null != e && e.classList.add(D.MARKER_STYLE_CLASSES._SELECTED), null != t && t.classList.add(D.MARKER_STYLE_CLASSES._SELECTED)) : (null != e && e.classList.remove(D.MARKER_STYLE_CLASSES._SELECTED), null != t && t.classList.remove(D.MARKER_STYLE_CLASSES._SELECTED)), this._updateColumnStateCellsClass(o, i)
    }, D.prototype._updateColumnStateCellsClass = function(e, t) {
        for (var o = this._getSelectedRowIdxs(), i = this._getTableBodyRows(), l = 0; l < i.length; l++) {
            var n = this._getTableBodyCell(l, e);
            if (n)
                if (t) n.classList.add(D.MARKER_STYLE_CLASSES._SELECTED);
                else {
                    for (var s = !1, a = o.length, r = 0; r < a; r++)
                        if (l === o[r]) {
                            s = !0;
                            break
                        }
                    s || n.classList.remove(D.MARKER_STYLE_CLASSES._SELECTED)
                }
        }
        if (null != this._getPlaceHolderRow()) {
            var _ = this._getPlaceHolderRowCell(e);
            null != _ && (t ? _.classList.add(D.MARKER_STYLE_CLASSES._SELECTED) : _.classList.remove(D.MARKER_STYLE_CLASSES._SELECTED))
        }
    }, D.prototype._updateRowStateCellsClass = function(e, t, o) {
        t || (t = this._getTableBodyRow(e));
        var i = this._getTableBodyCells(null, t);
        if (0 !== i.length) {
            if (this._isDefaultSelectorEnabled()) {
                var l = this._getTableBodySelectorCell(t);
                i.unshift(l)
            }
            var n, s = o.selected,
                a = o.hover,
                r = i.length;
            if (null != a)
                for (n = 0; n < r; n++) a ? i[n].classList.add(D.MARKER_STYLE_CLASSES._HOVER) : i[n].classList.remove(D.MARKER_STYLE_CLASSES._HOVER);
            if (null != s)
                for (n = 0; n < r; n++) s ? i[n].classList.add(D.MARKER_STYLE_CLASSES._SELECTED) : i[n].classList.remove(D.MARKER_STYLE_CLASSES._SELECTED)
        }
    }, D.prototype._adjustScrollPositionOnFetch = function() {
        var e = null == this.options.scrollPosition ? {} : this.options.scrollPosition;
        if (!isNaN(e.rowIndex) && void 0 !== e.rowKey) {
            var t = this._getSelectedRowIdxs();
            null != t && t.length > 0 && this._isRowSelectionEnabled() && this._isScrollToKey() ? (!isNaN(this._selectionAnchorIdx) && t.indexOf(this._selectionAnchorIdx) > -1 ? e.rowKey = this._getRowKeyForRowIdx(this._selectionAnchorIdx) : e.rowKey = this._getRowKeyForRowIdx(t[0]), delete e.rowIndex) : (this._isExternalScrollEnabled() || (e.y = 0), delete e.rowIndex, delete e.rowKey), e.x = 0, e.columnKey = null, e.columnIndex = 0, e.offsetX = 0, e.offsetY = 0, this.option("scrollPosition", e, {
                _context: {
                    internalSet: !0
                },
                changed: !1
            })
        }
    }, D.prototype._isScrollPositionAdjusted = function() {
        var e = this.options.scrollPosition;
        return null != e && (void 0 === e.rowIndex && null != e.rowKey)
    }, D.prototype._findRowElementByKey = function(e) {
        for (var t = this._getTableBodyRows(), o = 0; o < t.length; o++)
            if (u.KeyUtils.equals(c(t[o]).data("rowKey"), e)) return t[o];
        return null
    }, D.prototype._isScrollToKey = function() {
        var e = this.options.scrollToKey;
        if ("never" === e) return !1;
        if ("always" === e) return !0;
        var t = this.options.data;
        if (!u.DataProviderFeatureChecker.isDataProvider(t)) return !0;
        if (t.getCapability) {
            var o = t.getCapability("fetchFirst");
            if (o && "immediate" === o.iterationSpeed) return !0
        }
        return !1
    }, D.prototype._getScrollToKey = function() {
        var e = this.options.scrollPosition.rowKey;
        return e ? new Promise(function(t) {
            var o = this._validateKeyForScroll(e, !0);
            null == o ? t(null) : o.then(function(o) {
                t(o ? e : null)
            })
        }.bind(this)) : Promise.resolve(null)
    }, D.prototype._validateKeyForScroll = function(e, t) {
        if (!this._isScrollToKey()) return null;
        if (!t && null != this._findRowElementByKey(e)) return Promise.resolve(!0);
        var o = this._getData();
        return o.containsKeys ? new Promise(function(t) {
            var i = new Set;
            i.add(e), o.containsKeys({
                keys: i
            }).then(function(e) {
                t(e.results.size > 0)
            }, function() {
                t(!1)
            })
        }) : null
    }, D.prototype._syncScrollPosition = function(e, t) {
        if (!this._IsCustomElement() || this._noDataMessageShown || !this._isScrollableX() && !this._isScrollableY()) return !0;
        if (null != this._scrollPosition ? e = this._scrollPosition : null == e && (e = this.options.scrollPosition), !t && null != e.rowKey) {
            var o = this._validateKeyForScroll(e.rowKey, !1);
            if (o) {
                var i = this._createComponentBusyState("is validating scroll position rowKey.");
                o.then(function(t) {
                    t || delete e.rowKey, this._clearComponentBusyState(i), this._syncScrollPosition(e, !0)
                }.bind(this))
            }
            return !1
        }
        var l = this._getScrollCoordinates(e),
            n = this._isScrollableX() ? l.x : 0,
            s = this._isScrollableY() ? l.y : 0;
        if (isNaN(n) && isNaN(s)) return this.option("scrollPosition", this._getCurrentScrollPosition(), {
            _context: {
                originalEvent: null,
                internalSet: !0
            }
        }), this._scrollPosition = null, this._editRowCallback = null, !0;
        var a, r = isNaN(this._scrollTop) ? 0 : this._scrollTop,
            _ = isNaN(this._scrollLeft) ? 0 : this._scrollLeft;
        if (!isNaN(n) && isNaN(s) || !isNaN(n) && s === r && n !== _) this._isScrollableX() ? (this._setScrollX(n), a = this._getCurrentScrollPosition(n)) : a = this._getCurrentScrollPosition(), this.option("scrollPosition", a, {
            _context: {
                originalEvent: null,
                internalSet: !0
            }
        });
        else if (s !== r) {
            if (!this._isScrollableY()) return isNaN(n) || n === _ ? (this.option("scrollPosition", this._getCurrentScrollPosition(), {
                _context: {
                    originalEvent: null,
                    internalSet: !0
                }
            }), !0) : (delete e.y, this._syncScrollPosition(e, t));
            var h = this._setScrollY(s);
            if (isNaN(n) || n === _ || this._setScrollX(n), -1 === s) return this._scrollPosition = e, h;
            this.option("scrollPosition", this._getCurrentScrollPosition(n, s), {
                _context: {
                    originalEvent: null,
                    internalSet: !0
                }
            })
        } else e && (null == e.rowKey || isNaN(e.rowIndex)) && this.option("scrollPosition", this._getCurrentScrollPosition(n, s), {
            _context: {
                originalEvent: null,
                internalSet: !0
            }
        });
        return null != this._scrollPosition && (this._scrollPosition = null), this._editRowCallback && (this._editRowCallback(), this._editRowCallback = null), !0
    }, D.prototype._isScrollableX = function() {
        var e = this._getLayoutManager();
        return Math.abs(e.getScrollWidth() - e.getClientWidth()) > 1
    }, D.prototype._isScrollableY = function() {
        var e = this._getLayoutManager();
        return Math.abs(e.getScrollHeight() - e.getClientHeight()) > 1
    }, D.prototype._setScrollX = function(e) {
        var t = this._getLayoutManager().getScroller();
        this._skipScrollUpdate = !0, S.setScrollLeft(t, e)
    }, D.prototype._setScrollY = function(e) {
        var t = this._getLayoutManager(),
            o = t.getScroller();
        this._skipScrollUpdate = !0;
        var i = o.scrollTop;
        return o.scrollTop = -1 === e ? t.getScrollHeight() - t.getClientHeight() : e, i !== o.scrollTop && (this._setScrollPosBusyState(), !0)
    }, D.prototype._getScrollTopByIndex = function(e) {
        if (0 === e) return 0;
        if (!(this._isLoadMoreOnScroll() && e > this.options.scrollPolicyOptions.maxCount)) {
            var t = this._getTableBodyRows()[e];
            return null != t ? this._getLayoutManager().getRowScrollTop(t) : this._hasMoreToFetch() ? -1 : void 0
        }
    }, D.prototype._getScrollTopByKey = function(e) {
        var t = this._findRowElementByKey(e);
        return null != t ? this._getLayoutManager().getRowScrollTop(t) : this._hasMoreToFetch() ? -1 : void 0
    }, D.prototype._getScrollLeftByIndex = function(e) {
        return this._getLayoutManager().getColumnScrollLeft(e)
    }, D.prototype._getScrollLeftByKey = function(e) {
        var t = this._getColumnIdxForColumnKey(e);
        return this._getScrollLeftByIndex(t)
    }, D.prototype._getScrollCoordinates = function(e) {
        var t, o, i = this._getLayoutManager(),
            l = e.rowKey;
        null != l && (t = this._getScrollTopByKey(l));
        var n = e.columnKey;
        null != n && (o = this._getScrollLeftByKey(n));
        var s = e.rowIndex;
        isNaN(t) && !isNaN(s) && (t = this._getScrollTopByIndex(s));
        var a = e.columnIndex;
        isNaN(o) && !isNaN(a) && (o = this._getScrollLeftByIndex(a));
        var r = e.offsetX;
        !isNaN(o) && !isNaN(r) && o >= 0 && (o += r);
        var _ = e.offsetY;
        return !isNaN(t) && !isNaN(_) && t >= 0 && (t += _), isNaN(o) && !isNaN(e.x) && (o = Math.max(0, e.x)), isNaN(t) && !isNaN(e.y) && (t = e.y > i.getScrollHeight() ? this._hasMoreToFetch() ? -1 : i.getScrollHeight() - i.getClientHeight() : Math.max(0, e.y)), {
            x: o,
            y: t
        }
    }, D.prototype._getCurrentHorizontalScrollPosition = function(e) {
        var t = {
                x: void 0 === e ? this._scrollLeft : e
            },
            o = this.option("scrollPosition"),
            i = Math.abs(o.x - t.x);
        if (i < 1 && null != o.columnKey && !isNaN(o.columnIndex)) return t.columnKey = o.columnKey, t.columnIndex = o.columnIndex, t.offsetX = o.offsetX + i, t;
        var l = this._getColumnLocations();
        if (l && l.length > 0) {
            var n, s = l.length - 1;
            for (n = 0; n < l.length - 1; n++)
                if (t.x >= l[n] && t.x < l[n + 1]) {
                    s = n;
                    break
                }
            t.columnKey = this._getColumnDefs()[s].id, t.columnIndex = s, t.offsetX = t.x - l[s]
        }
        return t
    }, D.prototype._getCurrentVerticalScrollPosition = function(e) {
        var t = {
                y: void 0 === e ? this._scrollTop : e
            },
            o = this._findClosestElementToTop(t);
        return null != o && (t.rowIndex = o.index, t.rowKey = this._getRowKeyForRowIdx(o.index), t.offsetY = o.offset), t
    }, D.prototype._getCurrentScrollPosition = function(e, t) {
        var o = this._getCurrentHorizontalScrollPosition(e),
            i = this._getCurrentVerticalScrollPosition(t);
        return Object.keys(i).forEach(function(e) {
            o[e] = i[e]
        }), o
    }, D.prototype._getColumnLocations = function() {
        if (null == this._columnOffsets) {
            this._columnOffsets = [];
            var e = this._getTableHeaderColumns();
            if (e && e.length > 0) {
                var t = this._getScrollLeftByIndex(0);
                this._columnOffsets.push(0);
                for (var o = 1; o < e.length; o++) this._columnOffsets.push(this._getScrollLeftByIndex(o) - t)
            }
        }
        return this._columnOffsets
    }, D.prototype._findClosestElementToTop = function(e) {
        var t, o = this._getLayoutManager(),
            i = this._getTableBodyRows(),
            l = i.length,
            n = o.getScrollHeight();
        if (0 === l || 0 === n) return null;
        var s = e.y,
            a = this.option("scrollPosition");
        t = Math.abs(a.y - s) < D.DEFAULT_ROW_HEIGHT_GUESS && null != a.rowKey && !isNaN(a.rowIndex) ? a.rowIndex : Math.floor(s / n * l);
        var r = i[t = Math.min(Math.max(t, 0), l - 1)],
            _ = o.getRowScrollTop(r),
            h = s - _,
            d = {
                index: t,
                elem: r,
                offsetTop: _,
                offset: h
            };
        if (Math.abs(h) < 1) return d;
        var u = h > 0;
        for (u ? t += 1 : t -= 1; t >= 0 && t < l;) {
            var c = _;
            if (r = i[t], _ = o.getRowScrollTop(r), (h = Math.abs(s - _)) < 1 || (u ? s <= _ : s >= _)) {
                d = h < 1 || !u ? {
                    index: t,
                    elem: r,
                    offsetTop: _,
                    offset: h
                } : {
                    index: t - 1,
                    elem: i[t - 1],
                    offsetTop: c,
                    offset: s - c
                };
                break
            }
            u ? t += 1 : t -= 1
        }
        return d
    }, D.prototype._registerDomEventListeners = function() {
        this._getLayoutManager().registerScrollListeners()
    }, D.prototype._isTableActionableMode = function() {
        return null != this._active && this._active.isActionable
    }, D.prototype._isTableEditMode = function() {
        return this.options.editMode === D._OPTION_EDIT_MODE._ROW_EDIT
    }, D.prototype._toggleTableActionableMode = function() {
        this._isTableActionableMode() ? this._setTableActionableMode(!1) : this._setTableActionableMode(!0)
    }, D.prototype._setTableActionableMode = function(e, t) {
        var o;
        e && !this._isTableActionableMode() ? (o = this._hasActiveHeader() ? this._getTableHeaderRow() : this._hasActiveFooter() ? this._getTableFooterRow() : this._getActiveElement(), this._clearAccStatusInfo(), this._applyActionableMode(o, t)) : !e && this._isTableActionableMode() && (this._active.isActionable = !1, !t && c.contains(this._getTable(), document.activeElement) && this._getTable().focus(), null != (o = this._hasActiveHeader() ? this._getTableHeaderRow() : this._hasActiveFooter() ? this._getTableFooterRow() : this._getActiveElement()) && A.disableAllFocusableElements(o, null, null, !0))
    }, D.prototype._applyActionableMode = function(e, t) {
        var o = this._getActiveElement();
        if (null != o) {
            A.enableAllFocusableElements(e);
            var i = A.getFocusableElementsInNode(o);
            i.length > 0 && (this._active.isActionable = !0, this._focusOutHandler(c(o)), t || i[0].focus())
        }
    }, D.prototype._getEditableRowIdx = function() {
        if (null != this._getEditableRowKey()) {
            var e = this._getRowIdxForRowKey(this._getEditableRowKey());
            if (null !== e) return e
        }
        return this._editableRowIdx
    }, D.prototype._getEditableRowKey = function() {
        return this._editableRowKey
    }, D.prototype._hasEditableRow = function() {
        return !!this._isTableEditMode() && null !== this._getEditableRowIdx()
    }, D.prototype._setEditRow = function(e) {
        if (this._isTableEditMode()) {
            var t = e.rowKey,
                o = e.rowIndex;
            if (null != t || o > -1) {
                var i = this._setCurrentRow({
                    rowKey: t,
                    rowIndex: o
                });
                if (i === D._CURRENT_ROW_STATUS._UPDATED) this._setTableEditable(!0, !1, 0, !0, null);
                else if (i === D._CURRENT_ROW_STATUS._IGNORED) {
                    var l = this._scrollTop;
                    this._syncScrollPosition({
                        rowKey: t,
                        rowIndex: o
                    }) || (this._editRowCallback = function() {
                        this._scrollTop !== l && this._setEditRow(e)
                    }.bind(this))
                }
            } else this._setTableEditable(!1, !1, 0, !0, null)
        }
    }, D.prototype._setEditableRowIdx = function(e) {
        this._editableRowKey = this._getRowKeyForRowIdx(e), this._editableRowIdx = e
    }, D.prototype._setAdjacentRowEditable = function(e, t, o, i) {
        var l = this._getEditableRowIdx(),
            n = this._setTableEditable(!1, !1, e, o, i);
        n instanceof Promise ? n.then(function() {
            this._queueTask(function() {
                this._handleAdjacentEditEndSuccessful(e, l, o, i)
            }.bind(this))
        }.bind(this), function() {
            this._queueTask(function() {
                this._handleEditEndRejected(t, l, !o)
            }.bind(this))
        }.bind(this)) : !1 === n ? this._handleEditEndRejected(t, l, !o) : this._handleAdjacentEditEndSuccessful(e, l, o, i)
    }, D.prototype._handleAdjacentEditEndSuccessful = function(e, t, o, i) {
        var l = this._getTableBodyRows().length,
            n = o ? t + 1 : t - 1;
        n >= 0 && n < l ? (this._setActiveRow(n, i, !0), this._setTableEditable(!0, !1, e, o, i)) : this._getTable().focus()
    }, D.prototype._handleEditEndRejected = function(e, t, o) {
        this._setCellInRowFocus(t, e, o)
    }, D.prototype._fireEditRowChangeEvent = function(e, t) {
        this._queueTask(function() {
            this.option("editRow", e, {
                _context: {
                    originalEvent: t,
                    internalSet: !0,
                    writeback: !0
                }
            })
        }.bind(this))
    }, D.prototype._setTableEditable = function(e, t, o, i, l, n) {
        if (this._isTableEditMode() && !this._isEditPending) {
            var s = this._getCurrentRow();
            if (null != s) {
                var a, r, _, h, d = s.rowKey,
                    u = this._getRowIdxForRowKey(d),
                    c = [];
                try {
                    if (e && !this._hasEditableRow()) a = this._getTableBodyRow(u), (r = this._getRendererContextObject(a, {
                        row: {
                            key: d,
                            index: s.rowIndex
                        },
                        isCurrentRow: !0
                    })).item = a[D._ROW_ITEM_EXPANDO], (_ = this._trigger("beforeRowEdit", l, {
                        accept: function(e) {
                            c.push(e)
                        },
                        rowContext: r
                    })) && (h = {
                        rowKey: d,
                        rowIndex: u
                    });
                    else {
                        if (e || !this._hasEditableRow()) return;
                        a = this._getTableBodyRow(this._getEditableRowIdx()), d = this._getRowKeyForRowIdx(this._getEditableRowIdx()), (r = this._getRendererContextObject(a, {
                            row: {
                                key: d,
                                index: this._getDataSourceRowIndexForRowKey(d)
                            },
                            isCurrentRow: !0
                        })).item = a[D._ROW_ITEM_EXPANDO], (_ = this._trigger("beforeRowEditEnd", l, {
                            accept: function(e) {
                                c.push(e)
                            },
                            cancelEdit: t,
                            rowContext: r
                        })) && (h = {
                            rowKey: null,
                            rowIndex: -1
                        })
                    }
                } catch (e) {
                    return !1
                }
                if (!_) return !1;
                if (0 !== c.length) return this._isEditPending = !0, this._insertSkeletonRow(u), this._getTable().focus(), this._queueTask(function() {
                    return Promise.all(c).then(function() {
                        this._removeSkeletonRow(u), h && this._fireEditRowChangeEvent(h, l);
                        var t = this._getEditableRowIdx();
                        if (e) return this._setEditableRowIdx(u), this._getTable().setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, ""), this._accStatus.setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, ""), this._refreshRow(u, !0).then(function() {
                            if ((this._setActiveRow(u, l), this._setCellInRowFocus(u, o, i), null != t) && null != this._getTableBodyRow(t)) return this._refreshRow(t, !1).then(function() {
                                this._isEditPending = !1
                            }.bind(this));
                            return this._isEditPending = !1, Promise.resolve()
                        }.bind(this));
                        if ((this._focusEditCell = null, this._setEditableRowIdx(null), n || this._getTable().focus(), null != t) && null != this._getTableBodyRow(t)) return this._refreshRow(t, !1).then(function() {
                            this._isEditPending = !1
                        }.bind(this));
                        return this._isEditPending = !1, Promise.resolve()
                    }.bind(this), function() {
                        return this._removeSkeletonRow(u), this._isEditPending = !1, !1
                    }.bind(this))
                }.bind(this)), Promise.all(c);
                h && this._fireEditRowChangeEvent(h, l);
                var S = this._getEditableRowIdx();
                if (e ? (this._setEditableRowIdx(u), this._getTable().setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, ""), this._accStatus.setAttribute(D.DOM_ATTR._ARIA_LABELLEDBY, ""), this._queueTask(function() {
                        return this._refreshRow(u, !0).then(function() {
                            this._setActiveRow(u, l), this._setCellInRowFocus(u, o, i)
                        }.bind(this))
                    }.bind(this))) : (this._focusEditCell = null, this._setEditableRowIdx(null), n || this._getTable().focus()), null != S) null != this._getTableBodyRow(S) && this._queueTask(function() {
                    return this._refreshRow(S, !1)
                }.bind(this))
            }
        }
    }, D.prototype._handleAddRow = function(e, t) {
        let o = [];
        this._trigger("beforeRowAddEnd", t, {
            accept: function(e) {
                o.push(e)
            },
            cancelAdd: e
        }) && (this._setTableActionableMode(!1), 0 !== o.length ? (this._insertSkeletonRow(-1), this._getTable().focus(), this._queueTask(function() {
            return Promise.all(o).then(function() {
                return this._removeSkeletonRow(-1), this._refreshAddNewRowPlaceholder().then(function() {
                    this._setActiveAddRow(), this._setTableActionableMode(!e)
                }.bind(this))
            }.bind(this), function() {
                this._removeSkeletonRow(-1), this._setActiveAddRow(), this._setTableActionableMode(!0)
            }.bind(this))
        }.bind(this))) : this._refreshAddNewRowPlaceholder().then(function() {
            this._setActiveAddRow(), this._setTableActionableMode(!e)
        }.bind(this)))
    }, D._KEYBOARD_CODES = {
        _MODIFIER_SHIFT: "shiftKey"
    }, D.prototype._getKeyboardKeys = function() {
        return this._keyboardKeys || (this._keyboardKeys = []), this._keyboardKeys.reverse()
    }, D.prototype._addKeyboardKey = function(e) {
        var t, o = !1,
            i = Object.keys(A.KEYBOARD_KEYS);
        for (t = 0; t < i.length; t++) {
            var l = i[t];
            if (A.KEYBOARD_KEYS[l] === e) {
                o = !0;
                break
            }
        }
        if (o) {
            var n = this._getKeyboardKeys(),
                s = !1,
                a = n.length;
            for (t = 0; t < a; t++)
                if (n[t] === e) {
                    s = !0;
                    break
                }
            s || n.push(e)
        }
    }, D.prototype._isKeyPressMatch = function(e) {
        for (var t = this._getKeyboardKeys(), o = 0; o < t.length; o++)
            if (e(t[o])) return !0;
        return !1
    }, D.prototype._removeKeyboardKey = function(e) {
        for (var t = this._getKeyboardKeys(), o = t.length, i = 0; i < o; i++) t[i] === e && t.splice(i, 1)
    }, D.prototype._clearKeyboardKeys = function() {
        this._keyboardKeys = []
    }, D.prototype._handleKeydownLeftRight = function(e, t) {
        if (!this._isTableActionableMode() && !this._hasEditableRow()) {
            var o, i, l = "rtl" === this._GetReadingDirection(),
                n = this._isKeyPressMatch(A.isArrowLeftKeyEvent),
                s = l && n || !l && !n,
                a = this._getActiveHeaderIndex();
            if (null != a) return o = !t || this._isNavigate || null == this._lastSelectedHeaderIdx ? a : this._lastSelectedHeaderIdx, i = this._getNextVisibleColumnIndex(o, s), void(t ? (this._isNavigate = !1, this._selectRange(a, Math.max(0, i), !1), this._scrollColumnIntoViewport(i)) : (this._isNavigate = !0, i !== a && this._setActiveHeader(i, e)));
            var r = this._getActiveFooterIndex();
            if (null != r) return o = !t || this._isNavigate || null == this._lastSelectedFooterIdx ? r : this._lastSelectedFooterIdx, i = this._getNextVisibleColumnIndex(o, s), void(t ? (this._isNavigate = !1, this._selectRange(r, Math.max(0, i), !1), this._scrollColumnIntoViewport(i)) : (this._isNavigate = !0, i !== r && this._setActiveFooter(i, e)));
            this._updateAccStatusInfo(this._getNextVisibleColumnIndex(this._accColumnIndex, s))
        }
    }, D.prototype._handleKeydownUpDown = function(e, t) {
        if (!this._isTableActionableMode() && !this._hasEditableRow()) {
            null == this._active && this._syncActiveElement();
            var o = this._isKeyPressMatch(A.isArrowUpKeyEvent),
                i = this._getFirstVisibleColumnIndex(0, !0);
            if (S.isMetaKeyPressed(e)) o && null == this._getActiveHeaderIndex() ? this._setActiveHeader(i, e) : o || null != this._getActiveFooterIndex() || this._setActiveFooter(i, e);
            else {
                var l = this._getActiveRowIndex();
                if (null == l) o || null == this._getActiveHeaderIndex() ? o && null != this._getActiveFooterIndex() ? this._getTableBodyRows().length > 0 ? this._setActiveRow(this._getTableBodyRows().length - 1, e, !0) : this._setActiveNoData() : this._hasActiveAddRow() ? o ? this._setActiveHeader(i, e) : this._getTableBodyRows().length > 0 ? this._setActiveRow(0, e, !0) : this._setActiveNoData() : this._hasActiveNoData() && (o ? this._isAddNewRowEnabled() ? this._setActiveAddRow() : this._setActiveHeader(i, e) : this._setActiveFooter(i, e)) : this._isAddNewRowEnabled() ? this._setActiveAddRow() : this._getTableBodyRows().length > 0 ? this._setActiveRow(0, e, !0) : this._setActiveNoData();
                else {
                    var n, s, a = this._getTableBodyRows().length;
                    if (n = !t || this._isNavigate || null == this._lastSelectedRowIdx ? l : this._lastSelectedRowIdx, s = o ? n > 0 ? n - 1 : n : n < a - 1 ? n + 1 : n, t) this._isNavigate = !1, this._selectRange(l, s, !0), this._scrollRowIntoViewport(s);
                    else if (this._isNavigate = !0, s !== l) {
                        if (!this._setActiveRow(s, e, !0)) return;
                        this._getTable().focus()
                    } else 0 === s && o ? this._isAddNewRowEnabled() ? this._setActiveAddRow() : this._setActiveHeader(i, e) : s !== a - 1 || o || this._setActiveFooter(i, e)
                }
            }
        }
    }, D.prototype._handleKeydownTab = function(e) {
        this._isTableTab = !0;
        var t, o = this._getActiveRowIndex(),
            i = this._getTableBody(),
            l = document.activeElement;
        if (null != o && this._getEditableRowIdx() === o) {
            var n = this._getTableBodyRow(o),
                s = A.getFocusableElementsInNode(n),
                a = s.length,
                r = c(s).index(l),
                _ = this._getTableHeaderColumns(),
                h = _ ? _.length - 1 : 0;
            r !== a - 1 || e[D._KEYBOARD_CODES._MODIFIER_SHIFT] ? 0 === r && e[D._KEYBOARD_CODES._MODIFIER_SHIFT] && (this._setAdjacentRowEditable(h, 0, !1, e), e.preventDefault(), e.stopPropagation()) : (this._setAdjacentRowEditable(0, h, !0, e), e.preventDefault(), e.stopPropagation())
        } else if (this._isTableActionableMode()) {
            var d, u;
            if (d = this._hasActiveHeader() ? this._getTableHeaderRow() : this._hasActiveFooter() ? this._getTableFooterRow() : this._getActiveElement(), (t = A.getFocusableElementsInNode(d)).length > 1) {
                if (e[D._KEYBOARD_CODES._MODIFIER_SHIFT]) {
                    if (l === t[0]) c(t[t.length - 1]).focus(), e.preventDefault(), e.stopPropagation();
                    else
                        for (u = 0; u < t.length; u++)
                            if (l === t[u]) {
                                t[u - 1].focus(), e.preventDefault(), e.stopPropagation();
                                break
                            }
                } else if (l === t[t.length - 1]) c(t[0]).focus(), e.preventDefault(), e.stopPropagation();
                else
                    for (u = 0; u < t.length; u++)
                        if (l === t[u]) {
                            t[u + 1].focus(), e.preventDefault(), e.stopPropagation();
                            break
                        }
            } else e.preventDefault(), e.stopPropagation()
        } else {
            !this._isFF() || this._isStickyLayoutEnabled() || e[D._KEYBOARD_CODES._MODIFIER_SHIFT] || (this._tempFFFocus = !0, i.focus());
            var S = e.key || e.keyCode;
            this._removeKeyboardKey(S)
        }
    }, D.prototype._handleKeydownEnter = function(e) {
        if (!(this._isTableActionableMode() && !this._hasActiveAddRow() || A.isEventClickthroughDisabled(e, this._getTable()))) {
            var t = this._getActiveHeaderIndex();
            if (null != t) {
                if (-1 !== t && this._getColumnDefs()[t].sortable === D._OPTION_ENABLED) {
                    var o = this._getTableHeaderColumn(t),
                        i = c(o).data("sorted");
                    null == i || i === D._COLUMN_SORT_ORDER._DESCENDING ? this._handleSortTableHeaderColumn(t, !0, e) : this._handleSortTableHeaderColumn(t, !1, e)
                }
            } else if (null == this._getActiveFooterIndex()) {
                var l = this._getCurrentRow(),
                    n = null != (l = l || {}).rowIndex ? l.rowIndex : -1;
                if (n >= 0)
                    if (this._isTableEditMode()) {
                        if (!this._hasEditableRow()) return void this._setTableEditable(!0, !1, 0, !0, e);
                        var s = this._getElementColumnIdx(e.target);
                        e[D._KEYBOARD_CODES._MODIFIER_SHIFT] ? this._setAdjacentRowEditable(s, s, !1, e) : this._setAdjacentRowEditable(s, s, !0, e)
                    } else this._fireActionEvent(n, e), this._setTableActionableMode(!0);
                else this._hasActiveAddRow() && this._isTableActionableMode() && this._handleAddRow(!1, e)
            }
        }
    }, D.prototype._handleKeydownSpacebar = function(e) {
        if (!this._isTableActionableMode() && !this._hasEditableRow()) {
            e.preventDefault(), e.stopPropagation();
            var t = this._getActiveRowIndex();
            if (null == t) {
                var o = this._getActiveHeaderIndex();
                if (null == o) {
                    var i = this._getActiveFooterIndex();
                    null != i && this._handleSelectionGesture(i, !1, !0)
                } else -1 !== o ? this._handleSelectionGesture(o, !1, !0) : this._isSelectAllControlVisible() && this._handleSelectAllGesture()
            } else this._handleSelectionGesture(t, !0, !0)
        }
    }, D.prototype._handleKeydownF2 = function(e) {
        e.preventDefault(), e.stopPropagation(), this._isTableEditMode() ? this._hasEditableRow() ? this._setTableEditable(!1, !1, 0, !0, e) : (this._setTableEditable(!0, !1, 0, !0, e), this._hasEditableRow() || this._toggleTableActionableMode()) : this._toggleTableActionableMode()
    }, D.prototype._handleKeydownEsc = function(e) {
        this._hasEditableRow() ? (e.preventDefault(), e.stopPropagation(), this._setTableEditable(!1, !0, 0, !0, e)) : this._isTableActionableMode() && (e.preventDefault(), e.stopPropagation(), this._setTableActionableMode(!1)), this._getLayoutManager().handleKeyDownEsc()
    }, D.prototype._handleKeydownHome = function(e) {
        if (!this._isTableActionableMode() && !this._hasEditableRow())
            if (null == this._active && this._syncActiveElement(), this._hasActiveHeader() || this._hasActiveFooter()) {
                var t = this._getFirstVisibleColumnIndex(0, !0);
                this._hasActiveHeader() ? this._setActiveHeader(t, e) : this._setActiveFooter(t, e)
            } else this._hasActiveRow() && this._setActiveRow(0, e, !0)
    }, D.prototype._handleKeydownEnd = function(e) {
        if (!this._isTableActionableMode() && !this._hasEditableRow())
            if (null == this._active && this._syncActiveElement(), this._hasActiveHeader() || this._hasActiveFooter()) {
                var t = this._getNextVisibleColumnIndex(this._getColumnDefs().length, !1);
                this._hasActiveHeader() ? this._setActiveHeader(t, e) : this._setActiveFooter(t, e)
            } else if (this._hasActiveRow()) {
            var o = this._getTableBodyRows().length;
            this._setActiveRow(o - 1, e, !0)
        }
    }, D.prototype._columnHeaderDefaultRenderer = function(e, t) {
        var o = e.headerContext.parentElement,
            i = document.createElement(D.DOM_ELEMENT._DIV);
        i.classList.add(D.CSS_CLASSES._COLUMN_HEADER_CLASS), c(o).empty(), o.appendChild(i);
        var l = document.createElement(D.DOM_ELEMENT._DIV);
        l.classList.add(D.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS), i.insertBefore(l, i.firstChild), null != t ? t(c(l)) : this._columnHeaderDefaultTextRenderer(l, e)
    }, D.prototype._columnHeaderSortableIconRenderer = function(e, t) {
        var o = e.headerContext.parentElement,
            i = document.createElement(D.DOM_ELEMENT._DIV);
        i.classList.add(D.CSS_CLASSES._COLUMN_HEADER_CLASS), c(o).empty(), o.appendChild(i);
        var l = document.createElement(D.DOM_ELEMENT._DIV);
        l.classList.add(D.CSS_CLASSES._TABLE_SORT_ICON_CONTAINER_CLASS), l.setAttribute(D.DOM_ATTR._TITLE, this.getTranslatedString("labelSortAsc")), l.setAttribute(D.DOM_ATTR._ARIA_HIDDEN, "true"), this._AddHoverable(c(l)), i.appendChild(l);
        var n = document.createElement(D.DOM_ELEMENT._DIV);
        n.classList.add(D.CSS_CLASSES._WIDGET_ICON_CLASS), n.classList.add(D.CSS_CLASSES._COLUMN_HEADER_DEFAULT_SORT_ICON_CLASS), n.classList.add(D.MARKER_STYLE_CLASSES._DISABLED), n.classList.add(D.MARKER_STYLE_CLASSES._CLICKABLE_ICON), this._AddHoverable(c(n)), l.appendChild(n);
        var s = document.createElement(D.DOM_ELEMENT._DIV);
        s.classList.add(D.CSS_CLASSES._COLUMN_HEADER_TEXT_CLASS), i.insertBefore(s, i.firstChild), null != t ? t(c(s)) : this._columnHeaderDefaultTextRenderer(s, e)
    }, D.prototype._columnHeaderDefaultTextRenderer = function(e, t) {
        var o = t.columnIndex,
            i = this._getColumnDefs()[o],
            l = null == i.headerText ? "" : i.headerText;
        if (e.appendChild(document.createTextNode(l)), !0 === i.showRequired && this._isStickyLayoutEnabled()) {
            var n = e.parentElement,
                s = this._createRequiredIconDomElement();
            n.childNodes.length > 1 ? n.insertBefore(s, n.childNodes[1]) : n.appendChild(s)
        }
    }, D.prototype._createRequiredIconDomElement = function() {
        var e = document.createElement(D.DOM_ELEMENT._SPAN);
        return e.className = D.CSS_CLASSES._COLUMN_HEADER_SHOW_REQUIRED_ICON_CLASS, e.setAttribute(D.DOM_ATTR._ROLE, "img"), e.setAttribute(D.DOM_ATTR._TITLE, this.getTranslatedString("tooltipRequired")), e
    }, D.prototype._tableBodyRowDefaultRenderer = function(e, t, o) {
        var i = o.rowContext.parentElement,
            l = this._hashCode(t.key),
            n = this._getColumnDefs();
        this._setTableBodyRowAttributes(t, i);
        for (var s = n.length, a = 0; a < s; a++) this._tableBodyCellDefaultRenderer(e, a, t, l, o)
    }, D.prototype._tableBodyCellDefaultRenderer = function(e, t, o, i, l) {
        var n = l.rowContext.parentElement,
            s = this._getColumnDefs()[t],
            a = this._createTableBodyCell();
        this._styleTableBodyCell(t, a, !0), this._insertTableBodyCell(e, o.key, i, t, a, n, !0);
        var r = null;
        null != s.field && (r = this._getObjectPath(o.data, s.field));
        var _ = this._getColumnRenderer(t, "cell"),
            h = this._getSlotTemplate(s.template);
        if (null == h && this._isDefaultCellTemplateSlotValid() && (h = this._getSlotTemplate("cellTemplate")), _ || h) {
            var d = this._getRendererContextObject(a, {
                    row: o
                }),
                u = {
                    cellContext: d,
                    columnIndex: t,
                    data: r,
                    row: o.data,
                    componentElement: d.componentElement,
                    parentElement: d.parentElement
                };
            if (_) {
                var S = _(u);
                null != S ? c(a).append(S) : (a = this._isDefaultSelectorEnabled() ? c(n).children()[t + 1] : c(n).children()[t], this._setTableBodyCellAttributes(e, o.key, i, t, a), this._styleTableBodyCell(t, a, !1))
            } else {
                var E = this._getRootElement(),
                    C = this._getTemplateEngine();
                if (null != C) {
                    var T = this._getTableBody(),
                        p = this._getCellSlotTemplateContextObject(u),
                        g = C.execute(E, h, p, this.options.as, T);
                    g instanceof Array || (g = [g]), g.map(function(e) {
                        a.appendChild(e)
                    }), this._hasCellTemplate = !0
                }
            }
        } else {
            var f = null == (r = this._getVal(r)) ? "" : r;
            a.appendChild(document.createTextNode(f))
        }
    }, D.prototype._getRendererContextObject = function(e, t) {
        var o = {
                component: f.__GetWidgetConstructor(this.element, "ojTable")
            },
            i = this.options.data;
        if (this._isPagingModelTableDataSource() && (i = i.getWrappedDataSource()), o.datasource = i, o.parentElement = e, null != t.row) {
            var l = t.row,
                n = l.key;
            if (o.status = this._getRendererStatusObject(l), this._hasEditableRow()) {
                var s = this._getEditableRowKey();
                u.Object.compareValues(n, s) ? o.mode = "edit" : o.mode = "navigation"
            } else o.mode = "navigation";
            this._copyMetadata(o, l)
        }
        return this._FixRendererContext(o)
    }, D.prototype._getRendererStatusObject = function(e) {
        return {
            rowIndex: e.index,
            rowKey: e.key,
            currentRow: c.extend({}, this._getCurrentRow())
        }
    }, D.prototype._getCellSlotTemplateContextObject = function(e, t) {
        var o = this._getSlotTemplateContextObject(),
            i = e.columnIndex;
        if (!t) {
            var l = e.cellContext.status.rowIndex,
                n = e.cellContext.status.rowKey;
            o[D._CONST_DATA] = e.data, o.row = e.row, o[D._CONST_INDEX] = l, o.mode = e.cellContext.mode, o[D._CONST_KEY] = n, o.item = e.parentElement.parentElement[D._ROW_ITEM_EXPANDO]
        }
        o.columnIndex = i, o.columnKey = this._getColumnKeyForColumnIdx(e.columnIndex);
        var s = this.options.data;
        return this._isPagingModelTableDataSource() && (s = s.getWrappedDataSource()), o.datasource = s, o
    }, D.prototype._getRowSlotTemplateContextObject = function(e, t) {
        var o = this._getSlotTemplateContextObject();
        t || (o[D._CONST_DATA] = e.data, o[D._CONST_INDEX] = e.rowContext.status.rowIndex, o[D._CONST_KEY] = e.rowContext.status.rowKey, o.mode = e.rowContext.mode, o.item = e.parentElement[D._ROW_ITEM_EXPANDO], o.rowContext = e.rowContext);
        var i = this.options.data;
        return this._isPagingModelTableDataSource() && (i = i.getWrappedDataSource()), o.datasource = i, o
    }, D.prototype._getHeaderSlotTemplateContextObject = function(e, t) {
        var o = this._getSlotTemplateContextObject();
        return o[D._CONST_DATA] = e, o.columnIndex = t, o.headerText = e, o.columnKey = this._getColumnKeyForColumnIdx(t), o
    }, D.prototype._getFooterSlotTemplateContextObject = function(e) {
        var t = this._getSlotTemplateContextObject();
        return t.columnIndex = e, t.columnKey = this._getColumnKeyForColumnIdx(e), t
    }, D.prototype._getSlotTemplateContextObject = function() {
        return {
            componentElement: this._getRootElement()
        }
    }, D.prototype._copyMetadata = function(e, t) {
        var o = t.metadata;
        if (o)
            for (var i = Object.keys(o), l = 0; l < i.length; l++) {
                var n = i[l];
                e[n] = o[n]
            }
    }, D.prototype._getObjectPath = function(e, t) {
        if (null != e && ("string" == typeof t || t instanceof String) && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") && -1 !== t.indexOf("]"))) {
            var o = e,
                i = !1;
            if (t.split(".").map(function(e) {
                    if (null != o && -1 !== e.indexOf("[") && -1 !== e.indexOf("]")) {
                        var t = e.substr(0, e.indexOf("[")),
                            l = parseInt(e.substr(e.indexOf("[") + 1, e.indexOf("]") - e.indexOf("[") - 1), 10);
                        o = o[t][l], i = !0
                    } else null !== o && void 0 !== o[e] && (o = o[e], i = !0)
                }), i) return o
        } else if (null == e) return null;
        return e[t]
    }, D.prototype._getVal = function(e) {
        return "function" == typeof e ? e() : e
    }, D.prototype._getRowSelectionMode = function() {
        return null == this.options.selectionMode ? null : this.options.selectionMode[D._CONST_ROW]
    }, D.prototype._isRowSelectionEnabled = function() {
        var e = this._getRowSelectionMode();
        return e === D._OPTION_SELECTION_MODES._SINGLE || e === D._OPTION_SELECTION_MODES._MULTIPLE
    }, D.prototype._getColumnSelectionMode = function() {
        return null == this.options.selectionMode ? null : this.options.selectionMode[D._CONST_COLUMN]
    }, D.prototype._isColumnSelectionEnabled = function() {
        var e = this._getColumnSelectionMode();
        return e === D._OPTION_SELECTION_MODES._SINGLE || e === D._OPTION_SELECTION_MODES._MULTIPLE
    }, D.prototype._syncSelectionState = function() {
        var e = this.option("selected"),
            t = this.option("selection");
        this._selectionSet && (e = this._getSelectedEquivalent(t), this._syncRangeSelection()), this._isSelectionRequiredSatisfied(e) ? this._setSelected(e, this._selectionSet) : this._selectFirstRowOrColumn()
    }, D.prototype._updateSelectionStateFromEventDetailRemove = function(e, t) {
        var o = this.option("selected"),
            i = o.row;
        i && (e[D._CONST_KEYS].forEach(function(e) {
            null != t && t[D._CONST_KEYS].has(e) || (i.isAddAll() ? i.has(e) || (i = i.add([e])) : i = i.delete([e]))
        }), o.row !== i && (o = {
            row: i,
            column: o.column
        }, this._isSelectionRequiredSatisfied(o) ? this._setSelected(o) : this._selectFirstRowOrColumn()))
    }, D.prototype._updateSelectionStateFromEventDetailChange = function(e) {
        var t = this.option("firstSelectedRow");
        if (null != t) {
            var o = [];
            e[D._CONST_KEYS].forEach(function(e) {
                o.push(e)
            });
            for (var i = 0; i < o.length; i++) {
                var l = o[i],
                    n = e[D._CONST_DATA][i];
                if (u.KeyUtils.equals(l, t.key) && this.option("firstSelectedRow", {
                        key: l,
                        data: n
                    }, {
                        _context: {
                            writeback: !0,
                            internalSet: !0
                        }
                    }), null != this._validatedSelectedRowKeyData)
                    for (var s = 0; s < this._validatedSelectedRowKeyData.length; s++) {
                        var a = this._validatedSelectedRowKeyData[s];
                        if (u.KeyUtils.equals(l, a.key)) {
                            this._validatedSelectedRowKeyData[s] = n;
                            break
                        }
                    }
            }
        }
    }, D.prototype._validateInitialSelectionState = function(e) {
        var t, o, i = this.option("selection"),
            l = this.option("selected"),
            n = l.row,
            s = l.column;
        if (this._validatedSelectedRowKeyData = null, (this._selectionSet || !e && null != i && 0 !== i.length && n === n.clear() && s === s.clear()) && (l = this._getSelectedEquivalent(i), t = !0), this._isSelectionRequired())
            if ((o = this._validateSelected(l)).isLocal) this._enforceSelectionRequired(l, o.result, t);
            else {
                var a = this._createComponentBusyState("is validating selection-required keys.");
                o.result.then(function(e) {
                    this._enforceSelectionRequired(l, e, t), this._clearComponentBusyState(a)
                }.bind(this))
            }
        else t && this._syncRangeSelection(), this._setSelected(l, t);
        this._initialSelectionStateValidated = !0
    }, D.prototype._isSelectionRequired = function() {
        return "true" === String(this.options.selectionRequired).toLowerCase()
    }, D.prototype._hasSelected = function(e) {
        null == e && (e = this.option("selected"));
        var t = e.row,
            o = e.column;
        return t.isAddAll() || t.values().size > 0 || o.isAddAll() || o.values().size > 0
    }, D.prototype._isSelectionRequiredSatisfied = function(e) {
        return !this._isSelectionRequired() || this._hasSelected(e)
    }, D.prototype._enforceSelectionRequired = function(e, t, o) {
        o ? this._hasSelected(t) ? t.row === e.row && t.column === e.column ? (this._syncRangeSelection(), this._setSelected(t, !0)) : this._setSelected(t) : this._selectFirstRowOrColumn() : this._hasSelected(t) ? this._setSelected(t) : this._selectFirstRowOrColumn()
    }, D.prototype._selectFirstRowOrColumn = function() {
        var e, t;
        if (this._isRowSelectionEnabled() && null != (t = this._getRowKeyForRowIdx(0))) return e = new R.KeySetImpl([t]), void this._setSelected({
            row: e,
            column: new R.KeySetImpl
        });
        this._isColumnSelectionEnabled() && null != (t = this._getColumnKeyForColumnIdx(0)) && (e = new R.KeySetImpl([t]), this._setSelected({
            row: new R.KeySetImpl,
            column: e
        }))
    }, D.prototype._validateSelected = function(e) {
        var t = e.column,
            o = t;
        if (!t.isAddAll()) {
            var i = this._getColumnKeys(),
                l = [];
            t.values().forEach(function(e) {
                -1 === i.indexOf(e) && l.push(e)
            }), l.length > 0 && (o = o.delete(l))
        }
        var n = e.row,
            s = n;
        if (!n.isAddAll()) {
            var a = this._getLocalRowKeys(),
                r = [];
            if (n.values().forEach(function(e) {
                    -1 === a.indexOf(e) && r.push(e)
                }), r.length > 0) {
                var _ = this._fetchValidRowKeyData(r);
                if (_) return {
                    isLocal: !1,
                    result: _.then(function(e) {
                        return this._validatedSelectedRowKeyData = e, e.forEach(function(e) {
                            r.splice(r.indexOf(e.key), 1)
                        }), {
                            row: s = s.delete(r),
                            column: o
                        }
                    }.bind(this))
                };
                s = s.delete(r)
            }
        }
        return {
            isLocal: !0,
            result: {
                row: s,
                column: o
            }
        }
    }, D.prototype._fetchValidRowKeyData = function(e) {
        var t = this._getData();
        if (t && t.getCapability) {
            var o = t.getCapability("fetchByKeys");
            if (o && "lookup" === o.implementation) return new Promise(function(o) {
                t.fetchByKeys({
                    keys: new Set(e),
                    scope: "global"
                }).then(function(e) {
                    var t = [];
                    e.results.forEach(function(e, o) {
                        t.push({
                            key: o,
                            data: e.data
                        })
                    }), o(t)
                }, function() {
                    o([])
                })
            })
        }
        return null
    }, D.prototype._syncRangeSelection = function(e) {
        if (void 0 === e && (e = this.option("selection")), null != e)
            for (var t = e.length, o = 0; o < t; o++) {
                var i, l, n, s, a = e[o];
                null != a.startKey && null != a.startKey[D._CONST_ROW] ? (i = a.startKey[D._CONST_ROW], l = this._getDataSourceRowIndexForRowKey(i), a.startIndex = {}, a.startIndex[D._CONST_ROW] = l) : null != a.startIndex && null != a.startIndex[D._CONST_ROW] && (l = a.startIndex[D._CONST_ROW], null != (i = this._getRowKeyForDataSourceRowIndex(l)) && (a.startKey = {}, a.startKey[D._CONST_ROW] = i)), null != a.endKey && null != a.endKey[D._CONST_ROW] ? (n = a.endKey[D._CONST_ROW], s = this._getDataSourceRowIndexForRowKey(n), a.endIndex = {}, a.endIndex[D._CONST_ROW] = s) : null != a.endIndex && null != a.endIndex[D._CONST_ROW] && (s = a.endIndex[D._CONST_ROW], null != (n = this._getRowKeyForDataSourceRowIndex(s)) && (a.endKey = {}, a.endKey[D._CONST_ROW] = n))
            }
    }, D.prototype._processRowRangeSelection = function(e, t, o) {
        var i, l, n, s, a, r, _ = !0;
        if (null != e.startKey && null != e.startKey[D._CONST_ROW] ? (a = e.startKey[D._CONST_ROW], i = this._getDataSourceRowIndexForRowKey(a), isNaN(i) && (_ = null)) : null != e.startIndex && null != e.startIndex[D._CONST_ROW] && (i = e.startIndex[D._CONST_ROW]), null != e.endKey && null != e.endKey[D._CONST_ROW]) r = e.endKey[D._CONST_ROW], null === (l = this._getDataSourceRowIndexForRowKey(r)) && this._isLoadMoreOnScroll() && (l = this._getDataSourceLastFetchedRowIndex(), _ = null);
        else if (null != e.endIndex && null != e.endIndex[D._CONST_ROW]) {
            l = e.endIndex[D._CONST_ROW];
            var h = this._getDataSourceLastFetchedRowIndex();
            this._isLoadMoreOnScroll() && l > h && (l = h, _ = null)
        }
        if (void 0 === i && void 0 === l) _ = !1;
        else if (null != i && null != l && i <= l) {
            a = this._getRowKeyForDataSourceRowIndex(i), r = this._getRowKeyForDataSourceRowIndex(l), n = this._getRowIdxForRowKey(a), s = this._getRowIdxForRowKey(r);
            for (var d = n; d <= s; d++) {
                var u = this._getRowKeyForRowIdx(d);
                t = t.add([u])
            }
            o = o.clear()
        } else E.warn("Error: Cannot resolve row range in selection - \n start row key: " + a + "\n end row key: " + r + "\n start row index: " + i + "\n end row index: " + l), null != a && null != r && (t = (t = t.add([a])).add([r]), o = o.clear());
        return {
            status: _,
            rowKeySet: t,
            columnKeySet: o
        }
    }, D.prototype._getDataSourceLastFetchedRowIndex = function() {
        var e = this._getTableBodyRows();
        if (e.length > 0) {
            var t = this._getData(),
                o = 0;
            return this._isPagingModelDataProvider() && (o = t.getStartItemIndex()), e.length + o - 1
        }
        return 0
    }, D.prototype._processColumnRangeSelection = function(e, t, o) {
        var i, l, n, s, a = !0;
        if (null != e.startKey && null != e.startKey[D._CONST_COLUMN] ? (i = e.startKey[D._CONST_COLUMN], n = this._getColumnIdxForColumnKey(i)) : null != e.startIndex && null != e.startIndex[D._CONST_COLUMN] && (n = e.startIndex[D._CONST_COLUMN]), null != e.endKey && null != e.endKey[D._CONST_COLUMN] ? (l = e.endKey[D._CONST_COLUMN], s = this._getColumnIdxForColumnKey(l)) : null != e.endIndex && null != e.endIndex[D._CONST_COLUMN] && (s = e.endIndex[D._CONST_COLUMN]), void 0 === n && void 0 === s) a = !1;
        else if (null != n && null != s && !isNaN(n) && !isNaN(s) && n <= s) {
            for (var r = n; r <= s; r++) {
                var _ = this._getColumnKeyForColumnIdx(r);
                o = o.add([_])
            }
            t = t.clear()
        } else E.error("Error: Cannot resolve column range in selection - \n start column key: " + i + "\n end column key: " + l + "\n start column index: " + n + "\n end column index: " + s);
        return {
            status: a,
            rowKeySet: t,
            columnKeySet: o
        }
    }, D.prototype._invalidateRangeSelection = function() {
        var e = this.option("selection");
        if (null != e)
            for (var t = 0; t < e.length; t++) {
                var o, i, l = e[t];
                if (null != l.startKey && (o = l.startKey[D._CONST_ROW]), null != l.endKey && (i = l.endKey[D._CONST_ROW]), o !== i || void 0 === o) {
                    var n = this.option("selected.row"),
                        s = this._getRowSelectionFromKeySet(n);
                    this.option("selection", s, {
                        _context: {
                            writeback: !0,
                            internalSet: !0
                        }
                    });
                    break
                }
            }
    }, D.prototype._setSelected = function(e, t) {
        if (this._selectionSet = t, null != e) {
            var o;
            null == e.row && (e.row = new R.KeySetImpl), null == e.column && (e.column = new R.KeySetImpl);
            var i = this.option("selected");
            if (this._selectionSet ? A.areKeySetsEqual(i.row, e.row) && A.areKeySetsEqual(i.column, e.column) || (o = !0) : i.row === e.row && i.column === e.column || (o = !0), o && (this.option("selected", e, {
                    _context: {
                        writeback: !0,
                        internalSet: !0
                    }
                }), this._isSelectionRequired() && this._validatedSelectedRowKeyData))
                for (var l = this._validatedSelectedRowKeyData.length - 1; l >= 0; l--) {
                    var n = this._validatedSelectedRowKeyData[l];
                    e.row.has(n.key) || this._validatedSelectedRowKeyData.splice(l, 1)
                }
            this._isDefaultSelectorEnabled() && this._updateSelector(e.row), this._applySelected(e);
            var s = null,
                a = this._getRowSelectionFromKeySet(e.row);
            if (null != a && a.length > 0) {
                var r = a[0];
                null != r.startKey && (s = r.startKey[D._CONST_ROW])
            }
            if (this._setFirstSelectedRow(s), !t) {
                var _ = this._getSelectionEquivalent(e);
                this.option("selection", _, {
                    _context: {
                        writeback: !0,
                        internalSet: !0
                    }
                })
            }
        }
    }, D.prototype._setFirstSelectedRow = function(e) {
        var t = this.option("firstSelectedRow");
        if (!u.KeyUtils.equals(e, t.key)) {
            var o = null;
            if (null != e) {
                var i = this.getDataForVisibleRow(this._getRowIdxForRowKey(e));
                if (null != i) o = i[D._CONST_DATA];
                else if (this._validatedSelectedRowKeyData)
                    for (var l = 0; l < this._validatedSelectedRowKeyData.length; l++) {
                        var n = this._validatedSelectedRowKeyData[l];
                        if (u.KeyUtils.equals(e, n.key)) {
                            o = n.data;
                            break
                        }
                    }
            }
            this.option("firstSelectedRow", {
                key: e,
                data: o
            }, {
                _context: {
                    writeback: !0,
                    internalSet: !0
                }
            })
        }
    }, D.prototype._getSelectedEquivalent = function(e) {
        var t;
        if (null != e) {
            for (var o = (t = {
                    row: new R.KeySetImpl,
                    column: new R.KeySetImpl
                }).row, i = t.column, l = e.length, n = 0; n < l; n++) {
                var s = e[n];
                if (null == s.startKey && null == s[D._CONST_STARTINDEX] || null == s.endKey && null == s[D._CONST_ENDINDEX]) E.error("Error: Invalid range object in selection. Both start and end objects must be specified");
                else {
                    var a = this._processRowRangeSelection(s, o, i);
                    o = a.rowKeySet, i = a.columnKeySet, !1 === a.status && (!1 === (a = this._processColumnRangeSelection(s, o, i)).status && E.error("Error: Invalid range object"), o = a.rowKeySet, i = a.columnKeySet)
                }
            }
            t.row === o && t.column === i || (t = {
                row: o,
                column: i
            })
        } else t = {
            row: new R.KeySetImpl,
            column: new R.KeySetImpl
        };
        return t
    }, D.prototype._getSelectionEquivalent = function(e) {
        var t = this._getRowSelectionFromKeySet(e.row);
        return t.length > 0 || t.inverted || (t = this._getColumnSelectionFromKeySet(e.column)).length > 0 || t.inverted ? t : []
    }, D.prototype._getRowSelectionFromKeySet = function(e) {
        var t = [];
        return (e.isAddAll() ? e.deletedValues() : e.values()).forEach(function(e) {
            var o = {
                    startKey: {
                        row: e
                    },
                    endKey: {
                        row: e
                    }
                },
                i = this._getDataSourceRowIndexForRowKey(e);
            !isNaN(i) && i >= 0 && (o.startIndex = {
                row: i
            }, o.endIndex = {
                row: i
            }), t.push(o)
        }, this), t.inverted = e.isAddAll(), t
    }, D.prototype._getColumnSelectionFromKeySet = function(e) {
        var t = [];
        return (e.isAddAll() ? e.deletedValues() : e.values()).forEach(function(e) {
            var o = {
                    startKey: {
                        column: e
                    },
                    endKey: {
                        column: e
                    }
                },
                i = this._getColumnIdxForColumnKey(e);
            i >= 0 && (o.startIndex = {
                column: i
            }, o.endIndex = {
                column: i
            }), t.push(o)
        }, this), t.inverted = e.isAddAll(), t
    }, D.prototype._applySelected = function(e) {
        var t = e.row,
            o = e.column;
        if (this._getSelectedRowIdxs().forEach(function(e) {
                var o = this._getTableBodyRow(e);
                t.has(this._getRowKey(o)) || (this._applyRowSelection(e, o, !1), this._setLastRowSelection(e, !1))
            }, this), this._isRowSelectionEnabled())
            if (t.isAddAll()) {
                var i = this._getTableBodyRows();
                i.forEach(function(e, o) {
                    t.has(this._getRowKey(e)) && this._applyRowSelection(o, e, !0)
                }, this);
                var l = i.length - 1,
                    n = this._getRowKeyForRowIdx(l);
                this._setLastRowSelection(l, t.has(n))
            } else t.values().forEach(function(e) {
                var t = this._getRowIdxForRowKey(e);
                null != t && t >= 0 && (this._applyRowSelection(t, this._getTableBodyRow(t), !0), this._setLastRowSelection(t, !0))
            }, this);
        if (0 === this._getSelectedRowIdxs().length && this._removeTableBodyRowTouchSelectionAffordance(), this._getSelectedHeaderColumnIdxs().forEach(function(e) {
                o.has(this._getColumnKeyForColumnIdx(e)) || this._applyColumnSelection(e, !1)
            }, this), this._isColumnSelectionEnabled())
            if (o.isAddAll()) {
                var s = this._getTableHeaderColumns();
                s.forEach(function(e, t) {
                    o.has(this._getColumnKeyForColumnIdx(t)) && this._applyColumnSelection(t, !0)
                }, this);
                var a = s.length - 1,
                    r = this._getColumnKeyForColumnIdx(a);
                this._setLastHeaderColumnSelection(a, o.has(r))
            } else o.values().forEach(function(e) {
                var t = this._getColumnIdxForColumnKey(e);
                null != t && t >= 0 && this._applyColumnSelection(t, !0)
            }, this)
    }, D.prototype._applyRowSelection = function(e, t, o) {
        if (t.classList.contains(D.MARKER_STYLE_CLASSES._SELECTED) !== o) {
            o ? t.classList.add(D.MARKER_STYLE_CLASSES._SELECTED) : t.classList.remove(D.MARKER_STYLE_CLASSES._SELECTED);
            var i = this.options.dnd.drag;
            i && ("rows" === i || i.rows) && this._getTableDndContext().setElementDraggable(t, o)
        }
        o ? this._updateRowStateCellsClass(e, null, {
            hover: !1,
            selected: !0
        }) : this._updateRowStateCellsClass(e, null, {
            selected: !1
        })
    }, D.prototype._applyColumnSelection = function(e, t) {
        var o = this.options.dnd.reorder;
        if (o && o.columns === D._OPTION_ENABLED) {
            var i = this._getTableHeaderColumn(e);
            this._getTableDndContext().setElementDraggable(i, t)
        }
        this._setColumnState(e, t)
    }, D.prototype._setLastRowSelection = function(e, t) {
        this._lastSelectedRowIdxArray || (this._lastSelectedRowIdxArray = []);
        for (var o = this._lastSelectedRowIdxArray.length, i = 0; i < o; i++)
            if (this._lastSelectedRowIdxArray[i] === e) {
                this._lastSelectedRowIdxArray.splice(i, 1);
                break
            }
        t && this._lastSelectedRowIdxArray.push(e)
    }, D.prototype._setLastHeaderColumnSelection = function(e, t) {
        this._lastSelectedColumnIdxArray || (this._lastSelectedColumnIdxArray = []);
        for (var o = this._lastSelectedColumnIdxArray.length, i = 0; i < o; i++)
            if (this._lastSelectedColumnIdxArray[i] === e) {
                this._lastSelectedColumnIdxArray.splice(i, 1);
                break
            }
        t && this._lastSelectedColumnIdxArray.push(e)
    }, D.prototype._handleSelectionGesture = function(e, t, o) {
        var i = this.option("selected"),
            l = i.row,
            n = i.column;
        if (t) {
            if (n = n.clear(), this._isRowSelectionEnabled()) {
                var s = this._getRowSelectionMode(),
                    a = this._getRowKeyForRowIdx(e);
                l = l.has(a) ? this._isStickyLayoutEnabled() ? o ? l.delete([a]) : new R.KeySetImpl([a]) : !o && this._getSelectedRowIdxs().length > 1 && s === D._OPTION_SELECTION_MODES._MULTIPLE ? new R.KeySetImpl([a]) : l.delete([a]) : o && s === D._OPTION_SELECTION_MODES._MULTIPLE ? l.add([a]) : new R.KeySetImpl([a])
            }
        } else if (this._isColumnSelectionEnabled()) {
            l = l.clear();
            var r = this._getColumnSelectionMode();
            if (e > -1) {
                var _ = this._getColumnKeyForColumnIdx(e);
                n = n.has(_) ? this._isStickyLayoutEnabled() ? o ? n.delete([_]) : new R.KeySetImpl([_]) : !o && this._getSelectedHeaderColumnIdxs().length > 1 && r === D._OPTION_SELECTION_MODES._MULTIPLE ? new R.KeySetImpl([_]) : n.delete([_]) : o && r === D._OPTION_SELECTION_MODES._MULTIPLE ? n.add([_]) : new R.KeySetImpl([_])
            }
        }
        i.row === l && i.column === n || (i = {
            row: l,
            column: n
        }, this._isSelectionRequiredSatisfied(i) && this._setSelected(i))
    }, D.prototype._handleSelectAllGesture = function() {
        var e = this.option("selected"),
            t = e.row,
            o = e.column;
        o = o.clear(), t = t.isAddAll() ? new R.KeySetImpl : new R.AllKeySetImpl, e.row === t && e.column === o || (e = {
            row: t,
            column: o
        }, this._isSelectionRequiredSatisfied(e) && this._setSelected(e))
    }, D.prototype._handleMouseEnterSelection = function(e, t) {
        if (this._isRowSelectionEnabled()) {
            var o = this._getElementRowIdx(e);
            null != this._mouseDownRowIdx && null != o && this._mouseDownRowIdx !== o ? (this._getRowSelectionMode() === D._OPTION_SELECTION_MODES._MULTIPLE && this._selectRange(this._mouseDownRowIdx, o, !0), o < this._mouseDownRowIdx ? this._moveTableBodyRowTouchSelectionAffordanceTop(o) : this._moveTableBodyRowTouchSelectionAffordanceBottom(o)) : null != o && o === this._mouseDownRowIdx && (t ? (this._selectRange(o, o, !0), this._moveTableBodyRowTouchSelectionAffordanceTop(o), this._moveTableBodyRowTouchSelectionAffordanceBottom(o)) : this._clearSelectedRows())
        }
    }, D.prototype._selectRange = function(e, t, o) {
        var i, l = this.option("selected"),
            n = l.row,
            s = l.column;
        if (o) {
            if (s = s.clear(), this._isRowSelectionEnabled()) {
                if (n = n.clear(), e <= t)
                    for (i = e; i <= t; i++) n = n.add([this._getRowKeyForRowIdx(i)]);
                else
                    for (i = e; i >= t; i--) n = n.add([this._getRowKeyForRowIdx(i)]);
                this._lastSelectedRowIdx = t
            }
        } else if (n = n.clear(), this._isColumnSelectionEnabled()) {
            if (s = s.clear(), e <= t)
                for (i = e; i <= t; i++) s = s.add([this._getColumnKeyForColumnIdx(i)]);
            else
                for (i = e; i >= t; i--) s = s.add([this._getColumnKeyForColumnIdx(i)]);
            this._lastSelectedHeaderIdx = t
        }
        l.row === n && l.column === s || (l = {
            row: n,
            column: s
        }, this._isSelectionRequiredSatisfied(l) && this._setSelected(l))
    }, D.prototype._getRowSelection = function(e) {
        return this._getTableBodyRow(e).classList.contains(D.MARKER_STYLE_CLASSES._SELECTED)
    }, D.prototype._getHeaderColumnSelection = function(e) {
        return this._getTableHeaderColumn(e).classList.contains(D.MARKER_STYLE_CLASSES._SELECTED)
    }, D.prototype._getFooterColumnSelection = function(e) {
        return this._getTableFooterCell(e).classList.contains(D.MARKER_STYLE_CLASSES._SELECTED)
    }, D.prototype._getSelectedRowIdxs = function() {
        return this._getRowIdxsForElementsWithStyleClass("." + D.CSS_CLASSES._TABLE_DATA_ROW_CLASS + "." + D.MARKER_STYLE_CLASSES._SELECTED)
    }, D.prototype._getSelectedHeaderColumnIdxs = function() {
        return this._getColumnIdxsForElementsWithStyleClass("." + D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS + "." + D.MARKER_STYLE_CLASSES._SELECTED)
    }, D.prototype._getSelectedFooterColumnIdxs = function() {
        return this._getColumnIdxsForElementsWithStyleClass("." + D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS + "." + D.MARKER_STYLE_CLASSES._SELECTED)
    }, D.prototype._clearSelectedRows = function() {
        this._selectionAnchorIdx = null, this._lastSelectedRowIdx = null;
        var e = this.option("selected.row"),
            t = e.clear();
        if (t !== e) {
            var o = {
                row: t,
                column: this.option("selected.column")
            };
            this._setSelected(o)
        }
    }, D.prototype._clearSelectionState = function() {
        if (this._selectionAnchorIdx = null, this._lastSelectedRowIdx = null, this._lastSelectedHeaderIdx = null, this._hasSelected()) {
            var e = {
                row: new R.KeySetImpl,
                column: new R.KeySetImpl
            };
            this._setSelected(e)
        }
    }, D.prototype._selectedKeysChangedListener = function(e) {
        if ("internal" === e.detail.updatedFrom)
            if (e.detail.value.isAddAll()) this._setSelected({
                row: e.detail.value,
                column: new R.KeySetImpl
            }, !1, !0);
            else {
                let t = this.option("selected").row;
                if (null == e.target.rowKey) return void this._setSelected({
                    row: new R.KeySetImpl,
                    column: new R.KeySetImpl
                }, !1, !0);
                t = t.has(e.target.rowKey) ? t.delete([e.target.rowKey]) : t.add([e.target.rowKey]);
                let o = this._getTable().getElementsByClassName(D.CSS_CLASSES._TABLE_HEADER_SELECTOR_CLASS)[0];
                if (o) {
                    let e = this._getTableBodyRows(),
                        i = t.values ? t.values().size : t.deletedValues().size;
                    0 !== i && e.length !== i ? o.indeterminate = !0 : o.indeterminate = !1
                }
                this._setSelected({
                    row: t,
                    column: new R.KeySetImpl
                }, !1, !0)
            }
    }, D.prototype._updateSelector = function(e) {
        let t = this._getTable(),
            o = t.getElementsByClassName(D.CSS_CLASSES._TABLE_HEADER_SELECTOR_CLASS);
        if (o.length > 0) {
            o[0].selectedKeys = e;
            let t = this._getTableBodyRows(),
                i = e.values ? e.values().size : e.deletedValues().size;
            0 !== i && t.length !== i ? o[0].indeterminate = !0 : o[0].indeterminate = !1
        }
        let i = Array.from(t.getElementsByClassName(D.CSS_CLASSES._TABLE_SELECTOR_CELL + " " + D.MARKER_STYLE_CLASSES._SELECTED));
        if (e.isAddAll()) {
            let o = Array.from(t.getElementsByClassName(D.CSS_CLASSES._TABLE_DATA_ROW_SELECTOR_CLASS));
            for (let t = 0; t < o.length; t++) e.has(o[t].rowKey) ? o[t].selectedKeys = new R.KeySetImpl([o[t].rowKey]) : o[t].selectedKeys = new R.KeySetImpl([])
        } else {
            i.forEach(t => {
                let o = t.firstChild;
                e.has(o.rowKey) ? e.delete([o.rowKey]) : o.selectedKeys = new R.KeySetImpl([])
            });
            let o = Array.from(t.getElementsByClassName(D.CSS_CLASSES._TABLE_DATA_ROW_SELECTOR_CLASS));
            for (let t = 0; t < o.length; t++) e.has(o[t].rowKey) && (o[t].selectedKeys = new R.KeySetImpl([o[t].rowKey]))
        }
    }, D.prototype.version = "1.0.0", D.prototype.defaultElement = "<table>", D.prototype.widgetEventPrefix = "oj", D.prototype.options = {
        accessibility: null,
        addRowDisplay: "top",
        animateStart: null,
        animateEnd: null,
        as: "",
        currentRow: null,
        data: null,
        display: "list",
        dnd: {
            drag: null,
            drop: null,
            reorder: {
                columns: "disabled"
            }
        },
        editMode: "none",
        editRow: {
            rowKey: null,
            rowIndex: -1
        },
        emptyText: null,
        horizontalGridVisible: "auto",
        layout: "contents",
        rowRenderer: null,
        scrollToKey: "auto",
        scrollPolicy: "auto",
        scrollPolicyOptions: {
            fetchSize: 25,
            maxCount: 500,
            scroller: null,
            scrollerOffsetBottom: null,
            scrollerOffsetStart: null,
            scrollerOffsetEnd: null,
            scrollerOffsetTop: null
        },
        scrollPosition: {
            x: 0,
            y: 0
        },
        selectAllControl: "visible",
        firstSelectedRow: {
            key: null,
            data: null
        },
        selection: [],
        selected: {
            row: new R.KeySetImpl,
            column: new R.KeySetImpl
        },
        selectionMode: null,
        selectionRequired: !1,
        verticalGridVisible: "auto",
        columns: [{
            className: null,
            field: null,
            footerClassName: null,
            footerRenderer: null,
            footerStyle: null,
            footerTemplate: null,
            frozenEdge: null,
            headerClassName: null,
            headerRenderer: null,
            headerStyle: null,
            headerTemplate: null,
            headerText: null,
            renderer: null,
            resizable: "disabled",
            id: null,
            sortProperty: null,
            sortable: "auto",
            style: null,
            template: null,
            minWidth: null,
            maxWidth: null,
            weight: null,
            width: null
        }],
        columnsDefault: {
            className: null,
            field: null,
            footerClassName: null,
            footerRenderer: null,
            footerStyle: null,
            footerTemplate: null,
            headerClassName: null,
            headerRenderer: null,
            headerStyle: null,
            headerTemplate: null,
            headerText: null,
            renderer: null,
            resizable: "disabled",
            sortProperty: null,
            sortable: "auto",
            style: null,
            template: null,
            minWidth: "auto",
            maxWidth: null,
            weight: 1,
            width: null
        },
        beforeCurrentRow: null,
        beforeRowEdit: null,
        beforeRowEditEnd: null,
        beforeRowAddEnd: null,
        ready: null,
        rowAction: null,
        sort: null
    }, D.prototype.getContextByNode = function(e) {
        var t = this.getSubIdByNode(e, !0);
        if (t && t.subId === D._SUB_ID._TABLE_CELL) {
            var o = t.rowIndex,
                i = this._getRowKeyForRowIdx(o);
            t.key = i
        }
        return t
    }, D.prototype.getDataForVisibleRow = function(e) {
        var t = this._getTableBodyRow(e);
        return null != t ? {
            key: c(t).data("rowKey"),
            data: c(t).data("rowData"),
            index: e
        } : null
    }, D.prototype.getNodeBySubId = function(e) {
        if (null == e) return this.element ? this.element[0] : null;
        var t, o = e.subId;
        if (o === D._SUB_ID._TABLE_CELL) {
            var i = parseInt(e.rowIndex, 10);
            return t = parseInt(e.columnIndex, 10), this._getTableBodyLogicalCells(i)[t]
        }
        if (o === D._SUB_ID._TABLE_HEADER || o === D._SUB_ID._TABLE_SORT_ASCENDING || o === D._SUB_ID._TABLE_SORT_DESCENDING) {
            t = e.index;
            var l = this._getTableHeaderLogicalColumns()[t];
            if (null != l) {
                if (o === D._SUB_ID._TABLE_HEADER) return l;
                if (o === D._SUB_ID._TABLE_SORT_ASCENDING) {
                    var n = this._getTableElementsByClassName(l, D.CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS);
                    if (n.length > 0) return n[0]
                } else {
                    var s = this._getTableElementsByClassName(l, D.CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS);
                    if (s.length > 0) return s[0]
                }
            }
        } else if (o === D._SUB_ID._TABLE_FOOTER) {
            t = e.index;
            var a = this._getTableFooterLogicalCells()[t];
            if (null != a) return a
        }
        return null
    }, D.prototype.getSubIdByNode = function(e, t) {
        var o = this._getFirstAncestor(e, "." + D.CSS_CLASSES._TABLE_DATA_CELL_CLASS, !0);
        if (null != o) return {
            subId: D._SUB_ID._TABLE_CELL,
            rowIndex: this._getElementRowIdx(o),
            columnIndex: this._getElementColumnIdx(o)
        };
        var i = this._getFirstAncestor(e, "." + D.CSS_CLASSES._COLUMN_HEADER_ASC_ICON_CLASS, !0);
        if (null != i) return {
            subId: t ? D._SUB_ID._TABLE_HEADER : D._SUB_ID._TABLE_SORT_ASCENDING,
            index: this._getElementColumnIdx(i)
        };
        var l = this._getFirstAncestor(e, "." + D.CSS_CLASSES._COLUMN_HEADER_DSC_ICON_CLASS, !0);
        if (null != l) return {
            subId: t ? D._SUB_ID._TABLE_HEADER : D._SUB_ID._TABLE_SORT_DESCENDING,
            index: this._getElementColumnIdx(l)
        };
        var n = this._getFirstAncestor(e, "." + D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS, !0);
        if (null != n) return {
            subId: D._SUB_ID._TABLE_HEADER,
            index: this._getElementColumnIdx(n)
        };
        var s = this._getFirstAncestor(e, "." + D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS, !0);
        return null != s ? {
            subId: D._SUB_ID._TABLE_FOOTER,
            index: this._getElementColumnIdx(s)
        } : null
    }, D.prototype.refresh = function() {
        this._super(), this._refresh()
    }, D.prototype.refreshRow = function(e) {
        if (!this._getData()) return Promise.resolve(!1);
        var t = this._getTableBodyRows();
        if (isNaN(e) || e < 0 || e >= t.length || 0 === t.length) {
            var o = D._LOGGER_MSG._ERR_REFRESHROW_INVALID_INDEX_SUMMARY,
                i = p.applyParameters(D._LOGGER_MSG._ERR_REFRESHROW_INVALID_INDEX_DETAIL, {
                    rowIdx: e.toString()
                });
            throw new RangeError(o + "\n" + i)
        }
        return this._queueTask(function() {
            return this._refreshRow(e, !0, !0)
        }.bind(this))
    }, D.prototype.widget = function() {
        var e = this._getTableContainer();
        return null != e ? c(e) : this.element
    }, D.prototype._ComponentCreate = function() {
        this._super(), this._initTemplateEngine(), this._draw(), this._registerCustomEvents(), this._on(this._events), this._isTouchDevice() && this._registerTouchEvents(), this._registerDomEventListeners(), this._setEditableRowIdx(null), A.disableDefaultBrowserStyling(this.element[0])
    }, D.prototype._AfterCreate = function() {
        this._super(), this._createContextMenuContainer(), this._isInitFetch = !0
    }, D.prototype._SetupResources = function() {
        this._super(), this._registerResizeListener(), this._registerDataSourceEventListeners(), this._isInitFetch ? (this._initFetch(), this._isInitFetch = !1) : this._queueTask(function() {
            return this._getLayoutManager().notifyTableUpdate(D._UPDATE._REFRESH), this._invokeDataFetchRows()
        }.bind(this))
    }, D.prototype._ReleaseResources = function() {
        this._super(), this._cleanComponent()
    }, D.prototype._destroy = function() {
        this._cleanComponent(!0)
    }, D.prototype._NotifyAttached = function() {
        this._super(), this._getLayoutManager().notifyTableUpdate(D._UPDATE._ATTACHED), this._hasPendingTasks() || this._syncTableSizing()
    }, D.prototype._NotifyShown = function() {
        this._super(), this._getLayoutManager().notifyTableUpdate(D._UPDATE._SHOWN), this._hasPendingTasks() || this._syncTableSizing()
    }, D.prototype._VerifyConnectedForSetup = function() {
        return !0
    }, D.prototype._GetDefaultContextMenu = function() {
        return this._defaultContextMenu
    }, D.prototype._NotifyContextMenuGesture = function(e, t, o) {
        var i = {};
        if (this._contextMenuEvent = t.originalEvent, !(this._isNodeEditable(this._contextMenuEvent.target) || this._isNodeClickable(this._contextMenuEvent.target) || "touch" === o && this._isNodeDraggable(this._contextMenuEvent.target))) {
            var l, n = this._getFirstAncestor(this._contextMenuEvent.target, "." + D.CSS_CLASSES._TABLE_DATA_CELL_CLASS, !0);
            if (null != n) {
                var s = this._getElementColumnIdx(n);
                l = this._getTableHeaderColumn(s)
            } else l = this._getFirstAncestor(this._contextMenuEvent.target, "." + D.CSS_CLASSES._COLUMN_HEADER_CELL_CLASS, !0);
            if ("keydown" === this._contextMenuEvent.type) {
                var a = this._getTable();
                if (null == l && (l = this._getActiveHeaderColumn()), this._contextMenuEvent.target === a)
                    if (null != l) i.position = {
                        my: D._POSITION._START_TOP,
                        at: D._POSITION._START_BOTTOM,
                        of: l
                    };
                    else {
                        var r = this._getActiveRowIndex();
                        if (r >= 0) {
                            var _ = this._getTableBodyRow(r);
                            i.position = {
                                my: D._POSITION._START_TOP,
                                at: D._POSITION._START_BOTTOM,
                                of: _
                            }
                        } else i.position = {
                            my: D._POSITION._START_TOP,
                            at: D._POSITION._START_BOTTOM,
                            of: this._contextMenuEvent.target
                        }
                    }
                else i.position = {
                    my: D._POSITION._START_TOP,
                    at: D._POSITION._START_BOTTOM,
                    of: this._contextMenuEvent.target
                }
            } else {
                var h = this._getFirstAncestor(this._contextMenuEvent.target, "." + D.CSS_CLASSES._TABLE_FOOTER_CELL_CLASS, !0);
                if (null == l && null == n && null == h) return
            }
            this._contextMenuEventHeaderColumn = l;
            var d = e.element ? e.element[0] : e;
            this._populateContextMenuItems(d, this._handleContextMenuSelect.bind(this));
            var u = d.querySelectorAll("[data-oj-command=oj-table-sortAsc]");
            u.length > 0 && (u = u[0], l && l.getAttribute("data-oj-sortable") === D._OPTION_ENABLED ? "OJ-OPTION" === u.nodeName ? u.removeAttribute("disabled") : u.classList.remove(D.MARKER_STYLE_CLASSES._DISABLED) : "OJ-OPTION" === u.nodeName ? u.setAttribute("disabled", "true") : u.classList.add(D.MARKER_STYLE_CLASSES._DISABLED));
            var c = d.querySelectorAll("[data-oj-command=oj-table-sortDsc]");
            c.length > 0 && (c = c[0], l && l.getAttribute("data-oj-sortable") === D._OPTION_ENABLED ? "OJ-OPTION" === c.nodeName ? c.removeAttribute("disabled") : c.classList.remove(D.MARKER_STYLE_CLASSES._DISABLED) : "OJ-OPTION" === c.nodeName ? c.setAttribute("disabled", "true") : c.classList.add(D.MARKER_STYLE_CLASSES._DISABLED));
            var S = d.querySelectorAll("[data-oj-command=oj-table-resize]");
            S.length > 0 && (S = S[0], l && l.getAttribute("data-oj-resizable") === D._OPTION_ENABLED ? "OJ-OPTION" === S.nodeName ? S.removeAttribute("disabled") : S.classList.remove(D.MARKER_STYLE_CLASSES._DISABLED) : "OJ-OPTION" === S.nodeName ? S.setAttribute("disabled", "true") : S.classList.add(D.MARKER_STYLE_CLASSES._DISABLED)), this._OpenContextMenu(t, o, i)
        }
    }, D.prototype._setOptions = function(e, t) {
        for (var o = !1, i = !1, l = !1, n = Object.keys(e), s = 0; s < n.length; s++) {
            var a = n[s],
                r = e[a];
            this._isTableRefreshNeeded(a, r, t) && ("columns" === a || "selectionMode" === a && void 0 !== r.row ? l = !0 : "data" === a && (i = !0), o = !0)
        }
        this._superApply(arguments), o && (l && (this._clearCachedMetadata(), this._refreshTableHeader()), i && this._beforeDataRefresh(), this._refresh())
    }, D.prototype._setOption = function(e, t, o) {
        "selection" === e ? (this._selectionSet = !0, this._syncRangeSelection(t), this._superApply(arguments), this._validateInitialSelectionState(!0)) : "selected" === e ? (this._selectionSet = !1, this._superApply(arguments), this._validateInitialSelectionState(!0)) : "currentRow" === e ? (this._queueTask(function() {
            this._setCurrentRow(t, null, !0)
        }.bind(this)).catch(function() {}), this._superApply(arguments)) : "scrollPosition" === e ? (this._queueTask(function() {
            this._syncScrollPosition(t)
        }.bind(this)), this._superApply(arguments)) : "editRow" === e ? this._setEditRow(t) : "scrollPolicyOptions" === e && null != o ? (this._superApply(arguments), this._isStickyLayoutEnabled() && ("scrollerOffsetTop" === o.subkey || "scrollerOffsetBottom" === o.subkey ? this._styleTableContainer(this._getTableContainer()) : "scrollerOffsetStart" !== o.subkey && "scrollerOffsetEnd" !== o.subkey || this._getLayoutManager()._initializeFrozenColumns())) : "addRowDisplay" === e ? (this._queueTask(function() {
            return this._refreshAddRowDisplay()
        }.bind(this)), this._superApply(arguments)) : this._superApply(arguments)
    }, D.prototype._CompareOptionValues = function(e, t, o) {
        switch (e) {
            case "columns":
            case "currentRow":
                return u.Object.compareValues(t, o);
            case "selection":
                return t && void 0 === t.inverted && (t.inverted = !1), o && void 0 === o.inverted && (o.inverted = !1), (!t || !o || t.inverted === o.inverted) && u.Object.compareValues(t, o);
            case "selected":
                return (t.row && o.row && A.areKeySetsEqual(t.row, o.row) || null == t.row && null == o.row) && (t.column && o.column && A.areKeySetsEqual(t.column, o.column) || null == t.column && null == o.column);
            default:
                return this._super(e, t, o)
        }
    }, D.prototype._getTableDndContext = function() {
        return this._tableDndContext || (this._tableDndContext = new I(this)), this._tableDndContext
    }, D.prototype._getLayoutManager = function() {
        return null == this._layoutManager && (this._isStickyLayoutEnabled() ? this._isFixedLayoutEnabled() ? this._layoutManager = new M(this) : this._layoutManager = new B(this) : (this._layoutManager = new N(this), this._isFixedLayoutEnabled() && E.error('The current theme does not support the layout="fixed" attribute setting of the <oj-table>.'))), this._layoutManager
    }, D.prototype._clearLayoutManager = function() {
        null != this._layoutManager && this._layoutManager.unregisterListeners(), this._layoutManager = null
    }, u.__registerWidget("oj.ojTable", c.oj.baseComponent, new D), f.setDefaultOptions({
        ojTable: {
            display: f.createDynamicPropertyGetter(function() {
                return g.getCachedCSSVarValues(["--oj-private-table-global-display-default"])[0]
            })
        }
    })
});
//# sourceMappingURL=ojtable.js.map