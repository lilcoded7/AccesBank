/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojselectbase", "ojs/ojcore-base", "ojs/ojkeyset", "jquery", "ojs/ojcomponentcore", "ojs/ojthemeutils", "ojs/ojlogger", "ojs/ojcustomelement-utils"], function(e, t, i, l, a, n, s, o) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
    var r = {
        properties: {
            data: {
                type: "object"
            },
            describedBy: {
                type: "string"
            },
            disabled: {
                type: "boolean",
                value: !1
            },
            displayOptions: {
                type: "object",
                properties: {
                    helpInstruction: {
                        type: "Array<string>|string",
                        value: ["notewindow"]
                    },
                    messages: {
                        type: "Array<string>|string"
                    }
                }
            },
            help: {
                type: "object",
                properties: {
                    instruction: {
                        type: "string",
                        value: ""
                    }
                }
            },
            helpHints: {
                type: "object",
                properties: {
                    definition: {
                        type: "string",
                        value: ""
                    },
                    source: {
                        type: "string",
                        value: ""
                    }
                }
            },
            itemText: {
                type: "string|function",
                value: "label"
            },
            labelEdge: {
                type: "string",
                enumValues: ["inside", "none", "provided"]
            },
            labelHint: {
                type: "string",
                value: ""
            },
            labelledBy: {
                type: "string"
            },
            messagesCustom: {
                type: "Array<Object>",
                writeback: !0,
                value: []
            },
            placeholder: {
                type: "string",
                value: ""
            },
            readonly: {
                type: "boolean",
                value: !1
            },
            required: {
                type: "boolean",
                value: !1
            },
            translations: {
                type: "object",
                value: {},
                properties: {
                    cancel: {
                        type: "string"
                    },
                    labelAccClearValue: {
                        type: "string"
                    },
                    labelAccOpenDropdown: {
                        type: "string"
                    },
                    multipleMatchesFound: {
                        type: "string"
                    },
                    nOrMoreMatchesFound: {
                        type: "string"
                    },
                    noMatchesFound: {
                        type: "string"
                    },
                    noResultsLine1: {
                        type: "string"
                    },
                    noResultsLine2: {
                        type: "string"
                    },
                    oneMatchFound: {
                        type: "string"
                    },
                    required: {
                        type: "object",
                        properties: {
                            hint: {
                                type: "string"
                            },
                            messageDetail: {
                                type: "string"
                            },
                            messageSummary: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            userAssistanceDensity: {
                type: "string",
                enumValues: ["compact", "efficient", "reflow"],
                value: "reflow"
            },
            valid: {
                type: "string",
                writeback: !0,
                enumValues: ["invalidHidden", "invalidShown", "pending", "valid"],
                readOnly: !0
            },
            value: {
                type: "any",
                writeback: !0
            },
            valueItem: {
                type: "object",
                writeback: !0,
                value: {
                    key: null,
                    data: null,
                    metadata: null
                }
            },
            virtualKeyboard: {
                type: "string",
                enumValues: ["email", "number", "search", "tel", "text", "url"],
                value: "search"
            }
        },
        methods: {
            getProperty: {},
            refresh: {},
            reset: {},
            setProperties: {},
            setProperty: {},
            showMessages: {},
            validate: {},
            getNodeBySubId: {},
            getSubIdByNode: {}
        },
        events: {
            ojAnimateEnd: {},
            ojAnimateStart: {},
            ojValueAction: {}
        },
        extension: {}
    };
    r.extension._WIDGET_NAME = "ojSelectSingle", r.extension._INNER_ELEM = "input", r.extension._GLOBAL_TRANSFER_ATTRS = ["tabindex"], r.extension._ALIASED_PROPS = {
        readonly: "readOnly"
    }, oj.CustomElementBridge.register("oj-select-single", {
        metadata: oj.CollectionUtils.mergeDeep(r, {
            properties: {
                readonly: {
                    binding: {
                        consume: {
                            name: "readonly"
                        }
                    }
                },
                userAssistanceDensity: {
                    binding: {
                        consume: {
                            name: "userAssistanceDensity"
                        }
                    }
                },
                labelEdge: {
                    binding: {
                        consume: {
                            name: "labelEdge"
                        }
                    }
                }
            }
        })
    });
    const u = function() {};
    t.Object.createSubclass(u, e.LovDropdown, "LovDropdownSingle"), u.prototype.init = function(e) {
        u.superclass.init.call(this, e)
    }, u.prototype._createKeySetImpl = function(e) {
        return null == e ? new i.KeySetImpl([]) : new i.KeySetImpl([e])
    }, u.prototype._ConfigureResultsInitial = function(e, t) {
        if (!this._isValueForPlaceholderFunc(e)) {
            this._SetCollectionCurrentRow({
                rowKey: e
            });
            var i = this._createKeySetImpl(e);
            return this._SetCollectionSelectedKeySet(i), t.whenReady()
        }
        return this._fullScreenPopup ? t.whenReady() : this._FetchFirstResultForKeyboardFocus()
    }, u.prototype._ConfigureResultsNoSearchText = function(e, t) {
        this._SetCollectionCurrentRow({
            rowKey: null
        });
        var i = this._createKeySetImpl(e);
        return this._SetCollectionSelectedKeySet(i), this._fullScreenPopup ? t.whenReady() : this._FetchFirstResultForKeyboardFocus()
    }, u.prototype._ConfigureResultsWithSearchText = function(e, t) {
        return this._FetchFirstResult().then(function(i) {
            if (null == i) return this._SetCurrentFirstItem(null), this._ClearSelection(), t.whenReady();
            var l = i.key;
            this._SetCurrentFirstItem(i), this._SetCollectionCurrentRow({
                rowKey: l
            });
            var a = this._createKeySetImpl(e);
            return this._SetCollectionSelectedKeySet(a), t.whenReady()
        }.bind(this))
    }, u.prototype._HandleCollectionSelectedItemChanged = function(e, t) {
        if (!this._duringListViewInitialization && !this._handlingCollectionFocusinOnce) {
            var i = this._isValueItemForPlaceholderFunc(e) ? null : e;
            this._collectionContext.selectedItem = i, this._handleSelection(i, t)
        }
    }, u.prototype._GetDefaultCollectionRendererSelectionMode = function() {
        return "single"
    }, t.__registerWidget("oj.ojSelectSingle", l.oj.ojSelectBase, {
        options: {
            valueItem: {
                key: null,
                data: null,
                metadata: null
            }
        },
        _ComponentCreate: function() {
            this._super();
            var e = this.options.valueItem;
            if (!this._IsValueItemForPlaceholder(e) && null == e.data) throw new Error("Select Single: value-item contains key but no data");
            this._cssOptionDefaults = n.parseJSONFromFontFamily("oj-searchselect-option-defaults") || {}, this._defaultValueForPlaceholder = null, this._defaultValueItemForPlaceholder = {
                key: null,
                data: null,
                metadata: null
            }, this._SetupSelectResources()
        },
        _AfterCreate: function() {
            this._super();
            var e = this._getRootElement();
            this._focusable({
                element: e,
                applyHighlight: !1,
                afterToggle: this._HandleAfterFocusToggle.bind(this, e)
            }), "none" === this.options.labelEdge && this._updateLabel()
        },
        _GetTranslationsSectionName: function() {
            return "oj-ojSelectSingle"
        },
        _SetupSelectResources: function(e) {
            this._resolveValueItemLater = !1, this._super(e)
        },
        _ReleaseSelectResources: function(e) {
            this._super(e)
        },
        _fetchDataAndSelect: function(e, t, i) {
            if (null != e.data) this._handleSelection(e, t, i);
            else {
                var l = [e.key],
                    a = function() {
                        this._handleSelection(this._defaultValueItemForPlaceholder, null, i)
                    }.bind(this),
                    n = function(l) {
                        if (l.data.length > 0) {
                            var n = {};
                            n.key = e.key, n.data = l.data[0], n.metadata = l.metadata[0], this._handleSelection(n, t, i)
                        } else a()
                    }.bind(this);
                this._FetchByKeysFromDataProvider(l).then(n, a)
            }
        },
        _HandleClearValueIconClick: function() {
            this._handleSelection(this._GetDefaultValueItemForPlaceholder())
        },
        _handleSelection: function(e, t, i) {
            var l = this._StartMakingInternalValueChange(),
                a = this._IsValueItemForPlaceholder(e) ? this._defaultValueItemForPlaceholder : e,
                n = function() {
                    if (!this._bReleasedResources) {
                        if (!t || "blur" !== t.type) {
                            var e = this._lovMainField.getInputElem();
                            this._fullScreenPopup ? e.focus() : (this._IsValueItemForPlaceholder(a) && (e.value = ""), this._SetFilterFieldText(e.value), i || this._ShowFilterField())
                        }
                        this._CloseDropdown()
                    }
                    l()
                }.bind(this),
                s = function() {
                    this._messagingStrategyQueueActionPromise ? this._messagingStrategyQueueActionPromise.then(n, n) : n()
                }.bind(this);
            this._handleUserSelectedValueItem(a, t, void 0).then(s, s)
        },
        _handleUserSelectedValueItem: function(e, t, i) {
            var l = this.options.value,
                a = this._abstractLovBase;
            this._cachedFetchByKeys && (this._valueHasChanged = !0, this._setUiLoadingState("stop")), this._resolveValueItemLater = !0;
            var n = null;
            this._IsValueItemForPlaceholder(e) || (n = e.key), a.setValue(n), this._userSelectedValueItem = e;
            var s = this._SetValue(n, t, {
                    doValueChangeCheck: !1,
                    _context: i
                }),
                o = function(t) {
                    this._userSelectedValueItem = null, t && this._fireValueActionEvent(e, l), this._resolveFetchDataAndSelectPromise && (this._resolveFetchDataAndSelectPromise(), this._resolveFetchDataAndSelectPromise = null)
                }.bind(this);
            if (s instanceof Promise) return s.then(o, function() {
                o(!1)
            });
            var r = function() {
                o(s)
            };
            return Promise.resolve().then(r, r)
        },
        _SetDisplayValue: function(e) {
            this._deferSettingValue || (this._bSuperRefreshing ? this._deferredSetDisplayValue = function() {
                this._deferredSetDisplayValue = null, this._SetDisplayValue(e)
            }.bind(this) : (this._applyValueItem(this.options.valueItem) || this._initSelectedValue(), this._resolveValueItemLater = !1))
        },
        _ValidateHelper: function() {
            this._isInValidate = !0;
            var e = l(this._lovMainField.getInputElem()).val(),
                t = this._SetValue(e, null, this._VALIDATE_METHOD_OPTIONS);
            return t = t instanceof Promise ? t.then(function(e) {
                return Promise.resolve(e ? "valid" : "invalid")
            }) : Promise.resolve(t ? "valid" : "invalid"), this._isInValidate = !1, t
        },
        _SetValue: function(e, t, i) {
            e === this._GetDisplayValue() && void 0 === (e = this._isInValidate && "" === e && !this.isValid() ? null : this.options.value) && (e = null);
            var l = this._StartMakingInternalValueChange(),
                a = this._super(e, t, i);
            return l(), a
        },
        _GetDefaultStyleClass: function() {
            return "oj-searchselect"
        },
        _GetStyleClassComponentName: function() {
            return "selectsingle"
        },
        _mergeValueAndValueItem: function(e, i) {
            var l = !1;
            return this._IsValueForPlaceholder(e) ? i && !this._deferSettingValue && this._SyncValueWithValueItem(i, e, {
                doNotClearMessages: !0
            }) : i && (l = !t.Object.compareValues(e, i.key)), l
        },
        _SyncValueWithValueItem: function(e, i, l) {
            var a, n = this._abstractLovBase;
            if (a = this._IsValueItemForPlaceholder(e) ? this._IsValueForPlaceholder(i) ? i : this._defaultValueForPlaceholder : e ? e.key : null, !t.Object.compareValues(a, i)) {
                var s = this._StartMakingInternalValueChange(),
                    o = {
                        internalSet: !0,
                        writeback: !0
                    };
                l && Object.assign(o, l);
                var r = {
                    doValueChangeCheck: !1,
                    _context: o
                };
                this.option("value", a, r), n.setValue(a), this._AfterSetOptionValue("value", r), s()
            }
        },
        _initSelectedValue: function(e) {
            if (!this._applyValueItem(e)) {
                var t = this._IsValueItemForPlaceholder(e) ? this.options.value : e.key;
                !this._IsValueForPlaceholder(t) && this._deferSettingValue || this._initSelectionHelper(t, this._updateSelectedOption.bind(this), e)
            }
        },
        _applyValueItem: function(e) {
            return !this._resolveValueItemLater && !this._IsValueItemForPlaceholder(e) && (this._updateInputElemValue(e), !0)
        },
        _updateSelectedOption: function(e) {
            this._updateInputElemValue(e), this._SetValueItem(e)
        },
        _SetValueItem: function(t) {
            this._valueItemSetInternally = !0;
            var i = t;
            t && !this._IsValueItemForPlaceholder(t) && (i = e.LovUtils.createValueItem(t.key, t.data, t.metadata));
            var l = this._StartMakingInternalValueChange();
            this.option(this._GetValueItemPropertyName(), i, {
                _context: {
                    internalSet: !0,
                    changed: !0,
                    writeback: !0
                }
            }), l()
        },
        _UpdateValueItem: function(e) {
            this._initSelectionHelper(e, function(e) {
                this._SetValueItem(e), this._updateSelectedOption(e)
            }.bind(this))
        },
        _updateInputElemValue: function(e) {
            var t = l(this._lovMainField.getInputElem()),
                i = null;
            if (e && e.data) {
                var a = this._ItemTextRenderer(e),
                    n = t.val();
                void 0 !== a && n !== a && (i = a)
            } else i = "";
            if (null !== i) {
                if (t.val(i), this.options.readOnly) {
                    let e = this._getReadonlyDiv();
                    e && (e.textContent = i)
                }(!this._fullScreenPopup && "hidden" !== this._filterInputText.style.visibility || this._fullScreenPopup && this._abstractLovBase.isDropdownOpen()) && !this._userHasTypedFilterText && this._SetFilterFieldText(i)
            }
        },
        _UpdateItemText: function() {
            this._super();
            var e = this.options.valueItem;
            this._updateInputElemValue(e)
        },
        _initSelectionHelper: function(e, i, l) {
            if (this._IsValueForPlaceholder(e)) {
                var a = l && t.Object.compareValues(l, this._defaultValueItemForPlaceholder) ? l : this._defaultValueItemForPlaceholder;
                i(a)
            } else if (this._abstractLovBase.hasData())
                if (this._userSelectedValueItem) {
                    var n = this._userSelectedValueItem;
                    this._initSelectionFetchByKey({
                        data: [n.data],
                        metadata: [n.metadata]
                    }, e, i)
                } else this.options.data ? (this._loadingAwaitingData && (this._loadingAwaitingData = !1, this._setUiLoadingState("stop")), this._FetchByKeysFromDataProvider([e]).then(function(t) {
                    this._bReleasedResources || this._initSelectionFetchByKey(t, e, i)
                }.bind(this), function() {
                    this._bReleasedResources || this._initSelectionFetchByKey(null, e, i)
                }.bind(this))) : this._loadingAwaitingData || (this._loadingAwaitingData = !0, this._setUiLoadingState("start"))
        },
        _initSelectionFetchByKey: function(i, l, a) {
            if (t.Object.compareValues(l, this.options.value) && !this._valueHasChanged) {
                var n = null,
                    o = null;
                i && i.data && i.data.length > 0 ? (n = i.data[0], o = i.metadata[0]) : s.warn("SelectSingle: could not fetch data for selected value: " + l), a(e.LovUtils.createValueItem(l, n, o)), this._valueHasChanged = void 0
            }
        },
        _fireValueActionEvent: function(e, t) {
            var i = {
                    value: e.key,
                    itemContext: e,
                    previousValue: t
                },
                l = new CustomEvent("ojValueAction", {
                    detail: i
                }),
                a = this.OuterWrapper,
                n = this._StartMakingInternalValueChange();
            a.dispatchEvent(l), n()
        },
        _selectItemByValue: function(e, t) {
            const i = new Promise(function(e) {
                this._resolveFetchDataAndSelectPromise = e
            }.bind(this));
            if (null != e) {
                const i = {
                    key: e
                };
                this._fetchDataAndSelect(i, t)
            } else this._handleSelection(this._defaultValueItemForPlaceholder);
            return i
        },
        _HandleDataProviderEvent: function(e) {
            if (!e.filterCriterionChanged) {
                var i = this.options.value;
                if ("mutate" === e.type)
                    if (null != e.detail.remove) e.detail.remove.keys.forEach(function(e) {
                        t.Object.compareValues(e, i) && (i = this._defaultValueForPlaceholder, s.warn("Select: selected value removed from data provider"))
                    }.bind(this));
                var l = this._StartMakingInternalValueChange();
                this._setOption("value", i), l(), this._abstractLovBase.handleDataProviderEvent(e)
            }
        },
        _HandleContainerKeyDownEnter: function(e) {
            if (this._userHasTypedFilterText = !1, !this._fullScreenPopup && this._IsFilterInputTextCleared()) this._handleSelection(this._defaultValueItemForPlaceholder);
            else if (!this._fullScreenPopup && this._abstractLovBase.isDropdownOpen()) {
                var t = this._lovDropdown.getValueItemForSelection();
                null != t && this._fetchDataAndSelect(t, e)
            }
        },
        _HandleContainerKeyDownTab: function(e) {
            if (this._userHasTypedFilterText = !1, !this._fullScreenPopup) {
                if (e.shiftKey) {
                    var t = this._filterInputText,
                        i = t.parentNode;
                    o.CustomElementUtils.allowSlotRelocation(!0);
                    try {
                        for (; i.firstChild !== t;) i.appendChild(i.firstChild)
                    } finally {
                        o.CustomElementUtils.allowSlotRelocation(!1)
                    }
                }
                if (this._IsFilterInputTextCleared()) this._IsValueForPlaceholder(this.options.value) && this._IsValueItemForPlaceholder(this.options.valueItem) || this._handleSelection(this._defaultValueItemForPlaceholder, null, !0);
                else if (this._abstractLovBase.isDropdownOpen()) {
                    var l = this._lovDropdown.getValueItemForSelection();
                    null != l && this._fetchDataAndSelect(l, e, !0)
                }
            }
            this._CloseDropdown()
        },
        _HandleLovDropdownEventTabOut: function(e) {
            if (this._userHasTypedFilterText = !1, this._filterInputText.focus(), !this._fullScreenPopup) {
                let t = this._lovDropdown.getValueItemForSelection();
                null != t && this._fetchDataAndSelect(t, e, !0)
            }
        },
        _HandleLovDropdownEventSelection: function(e) {
            var t = e.detail;
            this._userHasTypedFilterText = !1, this._handleSelection(t.valueItem, t.event)
        },
        _GetDefaultValueItemForPlaceholder: function() {
            return this._defaultValueItemForPlaceholder
        },
        _IsValueItemForPlaceholder: function(e) {
            return null == e || this._IsValueForPlaceholder(e.key)
        },
        _IsValueForPlaceholder: function(e) {
            return null == e
        },
        _IsShowValueInFilterField: function() {
            return !0
        },
        _SetupInitialValue: function() {
            var e = this.options;
            this._abstractLovBase.hasData() && this._initSelectedValue(e.valueItem), this._resolveValueItemLater = this._mergeValueAndValueItem(e.value, e.valueItem)
        },
        _GetValueItemPropertyName: function() {
            return "valueItem"
        },
        _CreateLovDropdown: function() {
            return new u
        }
    }), a.setDefaultOptions({
        ojSelectSingle: {
            displayOptions: {
                converterHint: ["none"]
            }
        }
    })
});
//# sourceMappingURL=ojselectsingle.js.map