/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojeditablevalue", "ojs/ojoptgroup", "ojs/ojoption", "ojs/ojhighlighttext", "ojs/ojprogress-circle", "ojs/ojcore-base", "jquery", "ojs/ojdomutils", "ojs/ojset", "ojs/ojtimerutils", "ojs/ojthemeutils", "ojs/ojcontext", "ojs/ojlistdataproviderview", "ojs/ojtreedataproviderview", "ojs/ojtranslation", "ojs/ojlogger", "ojs/ojcustomelement-utils", "ojs/ojcomponentcore"], function(e, t, i, s, o, n, a, r, l, h, c, u, d, p, f, m, v, _) {
    "use strict";
    n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a, l = l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l, u = u && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u, d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d, p = p && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
    var g = {
        properties: {
            asyncValidators: {
                type: "Array<Object>",
                value: []
            },
            converter: {
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
                    converterHint: {
                        type: "Array<string>|string"
                    },
                    helpInstruction: {
                        type: "Array<string>|string",
                        value: ["notewindow"]
                    },
                    messages: {
                        type: "Array<string>|string"
                    },
                    validatorHint: {
                        type: "Array<string>|string"
                    }
                }
            },
            filterOnOpen: {
                type: "string",
                enumValues: ["none", "rawValue"],
                value: "none"
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
            maximumResultCount: {
                type: "number",
                value: 15
            },
            messagesCustom: {
                type: "Array<Object>",
                writeback: !0,
                value: []
            },
            minLength: {
                type: "number",
                value: 0
            },
            optionRenderer: {
                type: "function"
            },
            options: {
                type: "Array<Object>|object"
            },
            optionsKeys: {
                type: "object",
                properties: {
                    childKeys: {
                        type: "object",
                        properties: {
                            childKeys: {
                                type: "object",
                                properties: {
                                    childKeys: {
                                        type: "object"
                                    },
                                    children: {
                                        type: "string"
                                    },
                                    label: {
                                        type: "string"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                }
                            },
                            children: {
                                type: "string"
                            },
                            label: {
                                type: "string"
                            },
                            value: {
                                type: "string"
                            }
                        }
                    },
                    children: {
                        type: "string"
                    },
                    label: {
                        type: "string"
                    },
                    value: {
                        type: "string"
                    }
                }
            },
            pickerAttributes: {
                type: "object",
                properties: {
                    class: {
                        type: "string"
                    },
                    style: {
                        type: "string"
                    }
                }
            },
            placeholder: {
                type: "string"
            },
            rawValue: {
                type: "string",
                writeback: !0,
                readOnly: !0
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
                    filterFurther: {
                        type: "string"
                    },
                    moreMatchesFound: {
                        type: "string"
                    },
                    noMatchesFound: {
                        type: "string"
                    },
                    oneMatchesFound: {
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
            validators: {
                type: "Array",
                value: []
            },
            value: {
                type: "any",
                writeback: !0
            },
            valueOption: {
                type: "object",
                writeback: !0,
                properties: {
                    label: {
                        type: "string"
                    },
                    value: {
                        type: "any"
                    }
                }
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
            ojValueUpdated: {}
        },
        extension: {}
    };
    ! function() {
        var e = {
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
        };
        g.extension._WIDGET_NAME = "ojCombobox", g.extension._INNER_ELEM = "input", g.extension._GLOBAL_TRANSFER_ATTRS = ["aria-controls", "aria-label", "tabindex"], g.extension._ALIASED_PROPS = {
            readonly: "readOnly"
        }, g.extension._TRACK_CHILDREN = "immediate", oj.CustomElementBridge.register("oj-combobox-one", {
            metadata: oj.CollectionUtils.mergeDeep(g, e)
        });
        var t = {
            properties: {
                asyncValidators: {
                    type: "Array<Object>",
                    value: []
                },
                converter: {
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
                        converterHint: {
                            type: "Array<string>|string"
                        },
                        helpInstruction: {
                            type: "Array<string>|string",
                            value: ["notewindow"]
                        },
                        messages: {
                            type: "Array<string>|string"
                        },
                        validatorHint: {
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
                maximumResultCount: {
                    type: "number",
                    value: 15
                },
                messagesCustom: {
                    type: "Array<Object>",
                    writeback: !0,
                    value: []
                },
                minLength: {
                    type: "number",
                    value: 0
                },
                optionRenderer: {
                    type: "function"
                },
                options: {
                    type: "Array<Object>|object"
                },
                optionsKeys: {
                    type: "object",
                    properties: {
                        childKeys: {
                            type: "object",
                            properties: {
                                childKeys: {
                                    type: "object",
                                    properties: {
                                        childKeys: {
                                            type: "object"
                                        },
                                        children: {
                                            type: "string"
                                        },
                                        label: {
                                            type: "string"
                                        },
                                        value: {
                                            type: "string"
                                        }
                                    }
                                },
                                children: {
                                    type: "string"
                                },
                                label: {
                                    type: "string"
                                },
                                value: {
                                    type: "string"
                                }
                            }
                        },
                        children: {
                            type: "string"
                        },
                        label: {
                            type: "string"
                        },
                        value: {
                            type: "string"
                        }
                    }
                },
                pickerAttributes: {
                    type: "object",
                    properties: {
                        class: {
                            type: "string"
                        },
                        style: {
                            type: "string"
                        }
                    }
                },
                placeholder: {
                    type: "string"
                },
                rawValue: {
                    type: "Array<string>",
                    writeback: !0,
                    readOnly: !0
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
                        filterFurther: {
                            type: "string"
                        },
                        moreMatchesFound: {
                            type: "string"
                        },
                        noMatchesFound: {
                            type: "string"
                        },
                        noMoreResults: {
                            type: "string"
                        },
                        oneMatchesFound: {
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
                validators: {
                    type: "Array",
                    value: []
                },
                value: {
                    type: "Array<any>",
                    writeback: !0
                },
                valueOptions: {
                    type: "Array<Object>",
                    writeback: !0
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
                ojAnimateStart: {}
            },
            extension: {}
        };
        t.extension._WIDGET_NAME = "ojCombobox", t.extension._INNER_ELEM = "input", t.extension._GLOBAL_TRANSFER_ATTRS = ["aria-controls", "aria-label", "tabindex"], t.extension._ALIASED_PROPS = {
            readonly: "readOnly"
        }, t.extension._TRACK_CHILDREN = "immediate", oj.CustomElementBridge.register("oj-combobox-many", {
            metadata: oj.CollectionUtils.mergeDeep(t, e)
        });
        var i = {
            properties: {
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
                        converterHint: {
                            type: "Array<string>|string"
                        },
                        helpInstruction: {
                            type: "Array<string>|string",
                            value: ["notewindow"]
                        },
                        messages: {
                            type: "Array<string>|string"
                        },
                        validatorHint: {
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
                maximumResultCount: {
                    type: "number",
                    value: 15
                },
                messagesCustom: {
                    type: "Array<Object>",
                    writeback: !0,
                    value: []
                },
                minimumResultsForSearch: {
                    type: "number",
                    value: 15
                },
                optionRenderer: {
                    type: "function"
                },
                options: {
                    type: "Array<Object>|object"
                },
                optionsKeys: {
                    type: "object",
                    properties: {
                        childKeys: {
                            type: "object",
                            properties: {
                                childKeys: {
                                    type: "object"
                                },
                                children: {
                                    type: "string"
                                },
                                label: {
                                    type: "string"
                                },
                                value: {
                                    type: "string"
                                }
                            }
                        },
                        children: {
                            type: "string"
                        },
                        label: {
                            type: "string"
                        },
                        value: {
                            type: "string"
                        }
                    }
                },
                pickerAttributes: {
                    type: "object",
                    properties: {
                        class: {
                            type: "string"
                        },
                        style: {
                            type: "string"
                        }
                    }
                },
                placeholder: {
                    type: "string"
                },
                readonly: {
                    type: "boolean",
                    value: !1
                },
                renderMode: {
                    type: "string",
                    enumValues: ["jet", "native"]
                },
                required: {
                    type: "boolean",
                    value: !1
                },
                translations: {
                    type: "object",
                    value: {},
                    properties: {
                        filterFurther: {
                            type: "string"
                        },
                        moreMatchesFound: {
                            type: "string"
                        },
                        noMatchesFound: {
                            type: "string"
                        },
                        oneMatchesFound: {
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
                        },
                        searchField: {
                            type: "string"
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
                valueOption: {
                    type: "object",
                    writeback: !0,
                    properties: {
                        label: {
                            type: "string"
                        },
                        value: {
                            type: "any"
                        }
                    }
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
                ojAnimateStart: {}
            },
            extension: {}
        };
        i.extension._WIDGET_NAME = "ojSelect", i.extension._INNER_ELEM = "select", i.extension._GLOBAL_TRANSFER_ATTRS = ["aria-controls", "aria-label", "tabindex"], i.extension._ALIASED_PROPS = {
            readonly: "readOnly"
        }, i.extension._TRACK_CHILDREN = "immediate", oj.CustomElementBridge.register("oj-select-one", {
            metadata: oj.CollectionUtils.mergeDeep(i, e)
        });
        var s = {
            properties: {
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
                        converterHint: {
                            type: "Array<string>|string"
                        },
                        helpInstruction: {
                            type: "Array<string>|string",
                            value: ["notewindow"]
                        },
                        messages: {
                            type: "Array<string>|string"
                        },
                        validatorHint: {
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
                maximumResultCount: {
                    type: "number",
                    value: 15
                },
                messagesCustom: {
                    type: "Array<Object>",
                    writeback: !0,
                    value: []
                },
                minimumResultsForSearch: {
                    type: "number",
                    value: 15
                },
                optionRenderer: {
                    type: "function"
                },
                options: {
                    type: "Array<Object>|object"
                },
                optionsKeys: {
                    type: "object",
                    properties: {
                        childKeys: {
                            type: "object",
                            properties: {
                                childKeys: {
                                    type: "object"
                                },
                                children: {
                                    type: "string"
                                },
                                label: {
                                    type: "string"
                                },
                                value: {
                                    type: "string"
                                }
                            }
                        },
                        children: {
                            type: "string"
                        },
                        label: {
                            type: "string"
                        },
                        value: {
                            type: "string"
                        }
                    }
                },
                pickerAttributes: {
                    type: "object",
                    properties: {
                        class: {
                            type: "string"
                        },
                        style: {
                            type: "string"
                        }
                    }
                },
                placeholder: {
                    type: "string"
                },
                readonly: {
                    type: "boolean",
                    value: !1
                },
                renderMode: {
                    type: "string",
                    enumValues: ["jet", "native"]
                },
                required: {
                    type: "boolean",
                    value: !1
                },
                translations: {
                    type: "object",
                    value: {},
                    properties: {
                        filterFurther: {
                            type: "string"
                        },
                        moreMatchesFound: {
                            type: "string"
                        },
                        noMatchesFound: {
                            type: "string"
                        },
                        noMoreResults: {
                            type: "string"
                        },
                        oneMatchesFound: {
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
                        },
                        searchField: {
                            type: "string"
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
                    type: "Array<any>",
                    writeback: !0
                },
                valueOptions: {
                    type: "Array<Object>",
                    writeback: !0
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
                ojAnimateStart: {}
            },
            extension: {}
        };
        s.extension._WIDGET_NAME = "ojSelect", s.extension._INNER_ELEM = "select", s.extension._GLOBAL_TRANSFER_ATTRS = ["aria-controls", "aria-label", "tabindex"], s.extension._ALIASED_PROPS = {
            readonly: "readOnly"
        }, s.extension._TRACK_CHILDREN = "immediate", oj.CustomElementBridge.register("oj-select-many", {
            metadata: oj.CollectionUtils.mergeDeep(s, e)
        })
    }();
    const b = {
        GENERATED_OPTIONS_SELECTOR: "oj-select-options-generated",
        THEME: {
            REDWOOD: "redwood"
        },
        KEY: {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            CODE: {
                KEY_V: "KeyV"
            },
            isControl: function(e) {
                switch (e.which || e.keyCode) {
                    case b.KEY.SHIFT:
                    case b.KEY.CTRL:
                    case b.KEY.ALT:
                        return !0;
                    default:
                        return !!e.metaKey
                }
            },
            isFunctionKey: function(e) {
                var t = e.which || e.keyCode || e;
                return t >= 112 && t <= 123
            },
            isPasteAction: function(e) {
                let t = n.AgentUtils.getAgentInfo().os;
                return e.code === b.KEY.CODE.KEY_V && (t === n.AgentUtils.OS.MAC && e.metaKey || t !== n.AgentUtils.OS.MAC && e.ctrlKey)
            }
        },
        STYLE_CLASS: {
            HIDDEN: "oj-helper-hidden"
        },
        DEFAULT_FETCH_SIZE: 15,
        DEFAULT_FETCH_ALL_SIZE: -1,
        FILTERING_FETCH_SIZE_MIN: 100,
        FILTERING_FETCH_SIZE_MAX: 500,
        FILTERING_FETCH_SIZE_MRC_TIMES: 7,
        DEFAULT_QUERY_DELAY: 70,
        DEFAULT_LOADING_INDICATOR_DELAY: 250,
        ValueChangeTriggerTypes: {
            ENTER_PRESSED: "enter_pressed",
            OPTION_SELECTED: "option_selected",
            BLUR: "blur",
            SEARCH_ICON_CLICKED: "search_icon_clicked"
        },
        lastMousePosition: {
            x: 0,
            y: 0
        },
        nextUid: (y = 1, function() {
            var e = y;
            return y += 1, e
        }),
        scrollBarDimensions: null,
        isLegacyTheme: function() {
            return c.parseJSONFromFontFamily("oj-theme-json").behavior !== b.THEME.REDWOOD
        },
        each2: function(e, t) {
            for (var i = a.isFunction(e[0]) ? a(e[0]()) : a(e[0]), s = -1, o = e.length; ++s < o && (i.context = i[0] = a.isFunction(e[0]) ? e[s]() : e[s]) && !1 !== t.call(i[0], s, i););
            return e
        },
        measureScrollbar: function() {
            var e = a("<div class='oj-listbox-measure-scrollbar'></div>");
            e.appendTo("body");
            var t = {
                width: e.width() - e[0].clientWidth,
                height: e.height() - e[0].clientHeight
            };
            return e.remove(), t
        },
        splitVal: function(e, t) {
            var i, s, o;
            if (null === e || e.length < 1) return [];
            for (s = 0, o = (i = e.split(t)).length; s < o; s++) i[s] = a.trim(i[s]);
            return i
        },
        getSideBorderPadding: function(e) {
            return e.outerWidth(!1) - e.width()
        },
        installKeyUpChangeEvent: function(e) {
            var t = "keyup-change-value";
            e.on("keydown", function() {
                void 0 === a.data(e, t) && a.data(e, t, e.val())
            }), e.on("keyup", function(i) {
                if ((i.which || i.keyCode) !== b.KEY.ENTER) {
                    var s = a.data(e, t);
                    void 0 !== s && e.val() !== s && (a.removeData(e, t), e.trigger("keyup-change"))
                } else i.preventDefault()
            })
        },
        getSearchText: function(e) {
            var t, i = e.which || e.keyCode;
            return e && "keydown" === e.type && (32 === i || i > 47 && i < 58 || i > 64 && i < 91 || i > 95 && i < 112 || i > 185 && i < 193 || i > 218 && i < 223) && (null != e.key ? t = e.key : (i >= 96 && i <= 105 && (i -= 48), t = String.fromCharCode(i), e.shiftKey || (t = t.toLowerCase())), e.preventDefault()), t
        },
        escapeRegExp: function(e) {
            return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        },
        installFilteredMouseMove: function(e) {
            e.on("mousemove", function(e) {
                var t = b.lastMousePosition;
                void 0 !== t && t.x === e.pageX && t.y === e.pageY || (a(e.target).trigger("mousemove-filtered", e), b.lastMousePosition.x = e.pageX, b.lastMousePosition.y = e.pageY)
            })
        },
        thunk: function(e) {
            var t, i = !1;
            return function() {
                return !1 === i && (t = e(), i = !0), t
            }
        },
        _focus: function(e, t) {
            if (null != e._focusTimer && (e._focusTimer.clear(), delete e._focusTimer), t[0] !== document.activeElement) {
                var i = b._addBusyState(e.container, "setting focus"),
                    s = h.getTimer(40);
                s.getPromise().then(function(e) {
                    if (e) {
                        var s, o = t[0],
                            n = t.val().length;
                        t.focus(), t.is(":visible") && o === document.activeElement && (o.setSelectionRange ? o.setSelectionRange(n, n) : o.createTextRange && ((s = o.createTextRange()).collapse(!1), s.select())), i()
                    } else i()
                }), e._focusTimer = s
            }
        },
        getCursorInfo: function(e) {
            var t = a(e)[0],
                i = 0,
                s = 0;
            if ("selectionStart" in t) i = t.selectionStart, s = t.selectionEnd - i;
            else if ("selection" in document) {
                t.focus();
                var o = document.selection.createRange();
                s = document.selection.createRange().text.length, o.moveStart("character", -t.value.length), i = o.text.length - s
            }
            return {
                offset: i,
                length: s
            }
        },
        killEvent: function(e) {
            e.preventDefault()
        },
        killEventWithExceptions: function(e, t) {
            const i = a(t.target);
            e.some(e => i.is(e)) || b.killEvent(t)
        },
        local: function(e, t) {
            var i, s, o = e,
                n = function(e) {
                    return "" + e.label
                };
            a.isArray(o) && (o = {
                results: s = o
            }), !1 === a.isFunction(o) && (s = o, o = function() {
                return s
            });
            var r = o();
            return r && r.text && (n = r.text, a.isFunction(n) || (i = r.text, n = function(e) {
                    return e[i]
                })),
                function(e) {
                    var i = e.term,
                        s = {
                            results: []
                        };
                    "" !== i || t ? (o() && b.each2(a(o().results), function(i, o) {
                        b._processData(e, o, s.results, t, !0, n)
                    }), e.callback(s)) : e.callback(o())
                }
        },
        createOptionTag: function(e, t, i, s) {
            var o = a("<option>");
            return o.addClass("oj-listbox-result oj-listbox-result-selectable oj-listbox-results-depth-" + e), o.attr("role", "option"), o.attr("id", "oj-listbox-result-label-" + b.nextUid()), o.text(s(i)), o.attr("value", t), o
        },
        createOptgroupTag: function(e, t, i) {
            var s = a("<optgroup>");
            return s.addClass("oj-listbox-results-sub"), s.attr("label", i(t)), e.addClass("oj-listbox-result-with-children"), s
        },
        listPopulateResults: function(e, t, i) {
            var s = function(e, t, o) {
                var n, r, l, h;
                t.each(function() {
                    (r = a(this)).is("li") && (r.children("ul").length > 0 ? (l = r.contents().filter(function() {
                        return 1 !== this.nodeType || "ul" !== this.tagName.toLowerCase()
                    }).text(), n = b.createOptgroupTag(e, l, i), h = r.children("ul"), s(n, h.children(), o + 1)) : n = b.createOptionTag(o, r.attr("oj-data-value"), r.text(), i), n.appendTo(e))
                })
            };
            s(e, t, 0)
        },
        ojOptionPopulateResults: function(e, t, i) {
            var s = function(e, t, o) {
                var n, r, l;
                t.each(function() {
                    (r = a(this)).is("oj-option") ? (l = r.text() || r.attr("label"), n = b.createOptionTag(o, r.prop("value"), l, i)) : r.is("oj-optgroup") ? (l = r.text() || r.attr("label"), n = b.createOptgroupTag(e, l, i), s(n, r.children(), o + 1)) : r.is("option") && (n = r), n.appendTo(e)
                })
            };
            s(e, t, 0)
        },
        lookupOptionKeys: function(e, t, i) {
            return e[t[i] || i]
        },
        arrayPopulateResults: function(e, t, i, s) {
            var o = function(e, t, s, n) {
                for (var a, r, l, h, c, u = 0, d = t.length; u < d; u++) a = t[u], l = b.lookupOptionKeys(a, n, "children"), h = b.lookupOptionKeys(a, n, "label"), l && l.length > 0 ? (r = b.createOptgroupTag(e, h, i), o(r, l, s + 1, n.childKeys || {})) : (c = b.lookupOptionKeys(a, n, "value"), r = b.createOptionTag(s, c, h, i)), r.appendTo(e)
            };
            o(e, t, 0, s || {})
        },
        cleanupResults: function(e) {
            e.children().not("oj-option, oj-optgroup").remove(), e.removeClass("oj-listbox-result-with-children")
        },
        _addBusyState: function(e, t) {
            var i = {
                description: "The component identified by '" + e.attr("id") + "' " + t
            };
            return u.getContext(e[0]).getBusyContext().addBusyState(i)
        },
        _clearBusyState: function(e) {
            e && e()
        },
        isDataProvider: function(e) {
            return !(!e || !n.DataProviderFeatureChecker) && n.DataProviderFeatureChecker.isDataProvider(e)
        },
        isTreeDataProvider: function(e) {
            return !(!e || !n.DataProviderFeatureChecker) && n.DataProviderFeatureChecker.isTreeDataProvider(e)
        },
        getDataProvider: function(e) {
            if (e) {
                var t = e._dataProvider || e.options;
                if (b.isDataProvider(t)) return t
            }
            return null
        },
        getDataProviderKeySet: function(e, t) {
            let i = b.getDataProvider(e.options);
            return null != i && "function" == typeof i.createOptimizedKeySet ? i.createOptimizedKeySet(t) : new l(t)
        },
        clearDataProviderWrapper: function(e) {
            e.options._dataProvider = null
        },
        _findOption: function(e, t) {
            if (n.Object.compareValues(t, e.value)) return e;
            if (e.children)
                for (var i, s = e.children, o = 0; o < s.length; o++)
                    if (i = b._findOption(s[o], t)) return i;
            return null
        },
        findOption: function(e, t) {
            if (Array.isArray(e)) {
                for (var i = 0, s = e.length; i < s; i++) {
                    var o = b._findOption(e[i], t);
                    if (o) return o
                }
                return null
            }
            return b._findOption(e, t)
        },
        findOptions: function(e, t) {
            for (var i = [], s = 0; s < t.length; s++) {
                var o = b.findOption(e, t[s]);
                o && i.push(o)
            }
            return i
        },
        findOptionFromResult: function(e, t, i) {
            var s, o = b.getLastQueryResult(e);
            if (o && (s = b.findOption(o, t)), e.ojContext.multiple && !s && (s = b.getSelectedOptionData(e, t)), s) {
                var n = {
                    value: t,
                    label: s.label
                };
                return s.data && s.metadata && (n.data = s.data, n.metadata = s.metadata), n
            }
            return i
        },
        mergeValueAndValueOptions: function(e, t) {
            var i = e.options.value,
                s = !1;
            if (e.multiple) {
                var o, n = e.options.valueOptions;
                if (i && i.length > 0) n && n.length && (o = b.findOptions(n, i)), o && o.length === n.length || (s = !0);
                else n && b.syncValueWithValueOptions(e, n, i, null, t)
            } else {
                var a, r = e.options.valueOption;
                if (null != i) r && (a = b.findOption(r, i)), a || (s = !0);
                else r && b.syncValueWithValueOption(e, r, i, null, t)
            }
            return s
        },
        syncValueWithValueOption: function(e, t, i, s, o) {
            var r, l = !0,
                h = e._IsCustomElement();
            if (b.isValueOptionsForPlaceholder(!1, t) ? b.isValueForPlaceholder(!1, i) ? (r = i, l = !1) : r = null : r = h ? t ? t.value : null : t ? [t.value] : null, n.Object.compareValues(r, i)) {
                if (!0 === s) {
                    var c = e.element[0];
                    a(c.options[c.selectedIndex]).text(b.getLabel(t))
                } else if (!1 === s) {
                    var u = e.select || e.combobox;
                    u && l && u._updateSelection(t)
                }
            } else b._forceSetValue(e, r, o)
        },
        syncValueWithValueOptions: function(e, t, i, s, o) {
            var r, l = !0;
            if (b.isValueOptionsForPlaceholder(!0, t)) b.isValueForPlaceholder(!0, i) ? (r = i, l = !1) : r = b.getValueForPlaceholder(!0), n.Object.compareValues(r, i) || b._forceSetValue(e, r, o);
            else if (t) {
                r = [];
                for (var h = 0; h < t.length; h++) r.push(t[h].value);
                if (n.Object.compareValues(r, i)) {
                    if (!0 === s) {
                        var c = 0;
                        e.element.find("option").each(function() {
                            if (this.selected) {
                                var e = b.getLabel(t[c]);
                                this.text != e && a(this).text(e), c += 1
                            }
                        })
                    } else if (!1 === s) {
                        var u = e.select || e.combobox;
                        u && l && u._updateSelection(t)
                    }
                } else b._forceSetValue(e, r, o)
            }
        },
        _forceSetValue: function(e, t, i) {
            var s = e,
                o = i || {},
                n = {
                    doNotClearMessages: o.doNotClearMessages,
                    doValueChangeCheck: !1,
                    _context: {
                        doNotClearMessages: o.doNotClearMessages,
                        internalSet: !0,
                        writeback: !0
                    }
                };
            s.forceCanSetValue = !0;
            try {
                s._SetValue(t, null, n)
            } finally {
                delete s.forceCanSetValue
            }
        },
        isPlaceholderSpecified: function(e) {
            return "string" == typeof e.placeholder
        },
        getFixupValueOptionsForPlaceholder: function(e) {
            return e ? [] : {
                value: null,
                label: null
            }
        },
        isValueOptionsForPlaceholder: function(e, t) {
            return null == t || !e && null == t.value || n.Object.compareValues(t, b.getFixupValueOptionsForPlaceholder(e))
        },
        getValueOptionsForPlaceholder: function(e, t) {
            var i = e.multiple;
            return e._IsCustomElement() && b.isPlaceholderSpecified(e.options) && b.isValueOptionsForPlaceholder(i, t) && (t = b.getFixupValueOptionsForPlaceholder(i)), t
        },
        getValueForPlaceholder: function(e) {
            return e ? [] : ""
        },
        isValueForPlaceholder: function(e, t) {
            return null == t || n.Object.compareValues(t, b.getValueForPlaceholder(e))
        },
        setValueOptions: function(e, t) {
            var i, s = {
                    internalSet: !0,
                    changed: !0,
                    writeback: !0
                },
                o = b.getOpts(e),
                n = !!o && b.isDataProvider(o.options);
            if (e.multiple) {
                var a = [],
                    r = [];
                if (t && t.length) {
                    i = [];
                    for (var l = 0; l < t.length; l++) i.push({
                        value: t[l].value,
                        label: t[l].label
                    }), n && (a.push(t[l].data), r.push(t[l].metadata))
                } else i = t;
                s = b.getContextWithExtraData(s, o, a, r), e.option("valueOptions", i, {
                    _context: s
                }), null != e.select && (e.isValueOptionsSetInternally = !0), o && (o.valueOptions = i)
            } else {
                var h = t;
                Array.isArray(t) && (h = t[0]), h && (s = b.getContextWithExtraData(s, o, h.data, h.metadata)), i = h && !b.isValueOptionsForPlaceholder(e.multiple, h) ? {
                    value: h.value,
                    label: h.label
                } : h, e.option("valueOption", i, {
                    _context: s
                }), null != e.select && (e.isValueOptionsSetInternally = !0), o && (o.valueOption = i)
            }
        },
        updateValueOptions: function(e) {
            if (e) {
                var t = e.datalist ? e.datalist : e.opts.element;
                e.opts.initSelection.call(null, t, function(t) {
                    var i = e.ojContext.multiple,
                        s = t;
                    if (null == s && "oj-combobox" === e._classNm) {
                        var o = e.ojContext.options.value;
                        if (i) {
                            s = [];
                            for (var n = 0; n < o.length; n++) s.push(e.opts.manageNewEntry(o[n]))
                        } else s = e.opts.manageNewEntry(o)
                    }
                    s && (e.setValOpts(s), i ? e._updateSelection(s) : e._updateSelectedOption(s), e._SyncRawValue())
                })
            }
        },
        applyValueOptions: function(e, t) {
            if (e && !e.ojContext._resolveValueOptionsLater && ("oj-combobox" === e._classNm || "oj-select" === e._classNm)) {
                var i = e.ojContext.multiple,
                    s = i ? t.valueOptions : t.valueOption;
                if (b.isValueOptionsForPlaceholder(i, s)) return !1;
                if (s) return e._updateSelection(s), !0
            }
            return !1
        },
        isValueChanged: function(e) {
            return e._valueHasChanged
        },
        setValueChanged: function(e, t) {
            e._valueHasChanged = t
        },
        hasInvalidComponentMessages: function(e) {
            return !e.isValid() && e._hasInvalidComponentMessagesShowing()
        },
        wrapDataProviderIfNeeded: function(e, t) {
            var i = e.options,
                s = i.options;
            if (b.isDataProvider(s)) {
                var o, n = i.optionsKeys || {},
                    a = b.isTreeDataProvider(s);
                if (a && !(s instanceof p) || !a && !(s instanceof d)) {
                    var r = function(e) {
                        for (var t = e.data, i = {
                                data: {}
                            }, s = Object.keys(t), o = 0; o < s.length; o++) {
                            var a = s[o],
                                r = t[a];
                            i.data[a] = r
                        }
                        return null != n.label ? i.data.label = String(t[n.label]) : null != t.label && (i.data.label = String(t.label)), null != n.value && (i.data.value = t[n.value]), i.metadata = {
                            key: t[n.value || "value"]
                        }, i
                    };
                    o = a ? new p(s, {
                        dataMapping: {
                            mapFields: r
                        }
                    }) : new d(s, {
                        dataMapping: {
                            mapFields: r
                        }
                    })
                }
                o && (i._dataProvider = o, t && (t._dataProvider = o))
            }
        },
        getLabel: function(e) {
            if (null != e) return null != e.label ? e.label : String(e.value)
        },
        _handleDataProviderEvents: function(e, t) {
            var i = b._addBusyState(e.widget(), "updating value on dataprovider mutation event");
            Promise.resolve().then(function() {
                return e._GetThrottlePromise()
            }).then(function() {
                return e._getValueUpdatePromise()
            }).then(function() {
                "mutate" === t.type && b._handleDataProviderMutationEvent(e, t), e._setOption("options", e.options.options), i()
            })
        },
        _handleDataProviderMutationEvent: function(e, t) {
            if (null != t.detail.remove) {
                for (var i = t.detail.remove.data, s = !1, o = [].concat(e.options.value), n = 0; n < i.length; n++) {
                    var a = o.indexOf(i[n].value);
                    a >= 0 && (o.splice(a, 1), s = !0)
                }
                s && e._setOption("value", o)
            }
        },
        addDataProviderEventListeners: function(e) {
            var t = b.getDataProvider(e.options);
            if (t) {
                b.removeDataProviderEventListeners(e);
                var i = b._handleDataProviderEvents.bind(null, e);
                e._saveDataProviderEH = i, t.addEventListener("mutate", i), t.addEventListener("refresh", i)
            }
        },
        removeDataProviderEventListeners: function(e) {
            var t = b.getDataProvider(e.options),
                i = e._saveDataProviderEH;
            null != t && i && (t.removeEventListener("mutate", i), t.removeEventListener("refresh", i), e._saveDataProviderEH = void 0)
        },
        createLoadingIndicatorElement: function() {
            let e;
            return b.isLegacyTheme() ? (e = document.createElement("div"), e.setAttribute("role", "presentation"), e.setAttribute("class", "oj-icon oj-listbox-loading-icon")) : (e = document.createElement("oj-progress-circle"), e.setAttribute("class", "oj-listbox-loading-progress-circle"), e.setAttribute("data-oj-internal", ""), e.setAttribute("data-oj-binding-provider", "none"), e.setAttribute("value", -1), e.setAttribute("size", "sm")), e
        },
        updateDropdownLoadingState: function(e, t) {
            const i = e;
            if (t) {
                i._dropdownLoadingIndicatorCount += 1, i._dropdownLoadingIndicatorTimer && (i._dropdownLoadingIndicatorTimer.clear(), delete i._dropdownLoadingIndicatorTimer);
                const e = h.getTimer(i._loadingIndicatorDelay);
                e.getPromise().then(function(e) {
                    e && b.addDropdownProgressCircle(i)
                }), i._dropdownLoadingIndicatorTimer = e
            } else i._dropdownLoadingIndicatorCount > 0 && (i._dropdownLoadingIndicatorCount -= 1), 0 === i._dropdownLoadingIndicatorCount && (i._dropdownLoadingIndicatorTimer && (i._dropdownLoadingIndicatorTimer.clear(), delete i._dropdownLoadingIndicatorTimer), b.removeDropdownProgressCircle(i))
        },
        addDropdownProgressCircle: function(e) {
            const t = e;
            if (t._hasDropdownLoadingIndicator) return;
            const i = t.dropdown.find(".oj-listbox-loader-wrapper");
            let s = t._dropdownProgressCircleElement;
            s || (s = b.createLoadingIndicatorElement(), t._dropdownProgressCircleElement = s), i.append(s), t.results.addClass("oj-loading"), t._hasDropdownLoadingIndicator = !0, t._triggerInternalLoadingStateChange("dropdownData", !0)
        },
        removeDropdownProgressCircle: function(e) {
            const t = e;
            t.results.removeClass("oj-loading"), t._hasDropdownLoadingIndicator && (t._dropdownProgressCircleElement && a(t._dropdownProgressCircleElement).detach(), t._hasDropdownLoadingIndicator = !1, t._triggerInternalLoadingStateChange("dropdownData", !1))
        },
        updateLoadingState: function(e, t) {
            if (!e) return;
            const i = e;
            if (t) {
                i._loadingIndicatorTimer && (i._loadingIndicatorTimer.clear(), delete i._loadingIndicatorTimer);
                const e = h.getTimer(i._loadingIndicatorDelay);
                e.getPromise().then(function(e) {
                    e && b.addLoadingIndicator(i)
                }), i._loadingIndicatorTimer = e
            } else i._loadingIndicatorTimer && (i._loadingIndicatorTimer.clear(), delete i._loadingIndicatorTimer), b.removeLoadingIndicator(i)
        },
        addLoadingIndicator: function(e) {
            const t = e,
                i = t.ojContext;
            t._loadingIndicatorCount += 1, t._hasLoadingIndicator || (i._SetLoading(), t._hasLoadingIndicator = !0, t._triggerInternalLoadingStateChange("textFieldLabel", !0))
        },
        removeLoadingIndicator: function(e) {
            const t = e,
                i = t.ojContext;
            t._loadingIndicatorCount > 0 && (t._loadingIndicatorCount -= 1), 0 === t._loadingIndicatorCount && t._hasLoadingIndicator && (i._ClearLoading(), t._hasLoadingIndicator = !1, t._triggerInternalLoadingStateChange("textFieldLabel", !1))
        },
        addDropdownMessage: function(e, t, i) {
            if (e._saveDropdownMessage) return;
            var s = a(document.createElement("div"));
            s.addClass("oj-listbox-filter-message-box");
            var o = a(document.createElement("div"));
            o.addClass("oj-listbox-filter-message-text"), o.attr("role", "region");
            var n = a(document.createElement("div"));
            n.addClass("oj-listbox-filter-message-separator"), s.append(o), s.append(n), e.prepend(s), o.text(i), e._saveDropdownMessage = s;
            b.getWidget(t)._updateMatchesCount(i, !0)
        },
        removeDropdownMessage: function(e) {
            e._saveDropdownMessage && (e._saveDropdownMessage.remove(), e._saveDropdownMessage = void 0)
        },
        createItemResult: function(e, t) {
            return {
                label: e.label,
                value: e.value,
                disabled: e.disabled,
                children: e.children,
                data: e,
                metadata: t
            }
        },
        fetchFlatData: function(e, t, i, s, o, n) {
            var a = [],
                r = t.fetchFirst(i)[Symbol.asyncIterator](),
                l = n > 0;
            return r.next().then(function t(h) {
                if (h) {
                    var c = h.value.data,
                        u = h.value.metadata;
                    if (c)
                        for (var d, p, f = 0; f < c.length && (!l || a.length < n); f++) d = c[f], p = u[f], !i.filterCriterion && s && s.matcher && !s.matcher(s.term, b.getLabel(d), d) || a.push(b.createItemResult(d, p));
                    if (o && b.removeDropdownMessage(o), o && !h.done && l && a.length >= n) b.addDropdownMessage(o, e, e.getTranslatedString("filterFurther")), e._hasMore = !0;
                    else {
                        if (!h.done && (!l || a.length < n)) return r.next().then(t);
                        e._hasMore = !1
                    }
                }
                return Promise.resolve(a)
            })
        },
        fetchTreeData: function(e, t, i, s, o, n) {
            var a = n > 0,
                r = i.size;
            return e._hasMore = !1, o && b.removeDropdownMessage(o),
                function t(o) {
                    i.size = r;
                    var n = [],
                        l = o.fetchFirst(i)[Symbol.asyncIterator]();
                    return l.next().then(function h(c) {
                        var u = c.value.data,
                            d = c.value.metadata;
                        return function i(s) {
                            if (s < u.length) {
                                if (r > 0 || !a) {
                                    var l = u[s],
                                        h = d[s],
                                        c = o.getChildDataProvider(l.value);
                                    return c ? t(c).then(function(e) {
                                        return p(l, h, e), i(s + 1)
                                    }) : (p(l, h, []), i(s + 1))
                                }
                                e._hasMore = !0
                            }
                            return Promise.resolve(n)
                        }(0).then(function() {
                            if (a) {
                                if (c.done || r <= 0) return c.done || (e._hasMore = !0), Promise.resolve(n)
                            } else if (c.done) return Promise.resolve(n);
                            return l.next().then(h)
                        });

                        function p(e, t, l) {
                            var h = !s || !s.matcher || i.filterCriterion || s.matcher(s.term, b.getLabel(e), e),
                                c = null == o.getChildDataProvider(e.value);
                            if (c || (h = !1), h && 0 === l.length && a && (r -= 1), h || l.length > 0) {
                                var u = b.createItemResult(e, t);
                                e.disabled && (u.disabled = !0), c && !u.disabled || (u._jetUnSelectable = !0), l.length > 0 && (u.children = l), n.push(u)
                            }
                        }
                    })
                }(t).then(function(t) {
                    return e._hasMore && o && b.addDropdownMessage(o, e, e.getTranslatedString("filterFurther")), t
                })
        },
        fetchFilteredData: function(e, t, i, s, o) {
            var a = b.getDataProvider(e.options),
                r = {
                    size: t
                },
                l = a.getCapability("filter"),
                h = n.AttributeFilterOperator.AttributeOperator.$co,
                c = n.AttributeFilterOperator.AttributeOperator.$regex,
                u = !1,
                d = !1;
            if (l) {
                var p = l.operators;
                p && p.length > 0 && (p.indexOf(h) >= 0 || p.indexOf(c) >= 0) && (u = !0, p.indexOf(c) >= 0 && (d = !0))
            }
            var f = b.isTreeDataProvider(a);
            if (s && s.term)
                if (u) {
                    var m, v = e.options.optionsKeys;
                    if (m = v && v.label ? v.label : "label", d) {
                        var _ = b.escapeRegExp(s.term);
                        r.filterCriterion = {
                            op: c,
                            attribute: m,
                            value: new RegExp(_, "i")
                        }
                    } else r.filterCriterion = {
                        op: h,
                        attribute: m,
                        value: s.term
                    }
                } else if (!f)
                if (i > 0) {
                    var g = i * b.FILTERING_FETCH_SIZE_MRC_TIMES;
                    (g > b.FILTERING_FETCH_SIZE_MAX || g < b.FILTERING_FETCH_SIZE_MIN) && (g = b.FILTERING_FETCH_SIZE_MAX), r.size = g
                } else r.size = i;
            return f ? b.fetchTreeData(e, a, r, s, o, i) : b.fetchFlatData(e, a, r, s, o, i)
        },
        rejectedError: {},
        fetchFromDataProvider: function(e, t, i, s) {
            var o = e.ojContext;
            o._fetchResolveFunc || (o._fetchResolveFunc = b._addBusyState(e.container, "fetching data")), o._saveRejectFunc && o._saveRejectFunc(b.rejectedError);
            var n = new Promise(function(e, t) {
                o._saveRejectFunc = t
            });
            t.fetchType = null;
            var a = b._getMaxItems(t),
                r = s || t.fetchSize || a,
                l = b.fetchFilteredData(o, r, a, i, e.dropdown).then(function(e) {
                    return o._resultCount = e ? e.length : 0, e
                });
            Promise.race([n, l]).then(function(t) {
                o._saveRejectFunc = null, o._resolveSearchBoxLater && e._showSearchBox(""), i.callback({
                    results: t
                }), o._fetchResolveFunc && (o._fetchResolveFunc(), o._fetchResolveFunc = null)
            }, function(e) {
                e !== b.rejectedError && o._fetchResolveFunc ? (i.callback(), o._fetchResolveFunc(), o._fetchResolveFunc = null) : e === b.rejectedError && i.cleanup()
            })
        },
        fetchFirstBlockFromDataProvider: function(e, t, i) {
            var s = b.getDataProvider(t),
                o = b._addBusyState(e, "fetching selected data"),
                n = b._getMaxItems(t),
                a = {
                    size: i || n
                };
            return b.isTreeDataProvider(s) ? b.fetchTreeData({}, s, a, null, null, n).then(function(e) {
                if (1 === i && e && e.length > 0) {
                    for (var t = e[0]; t.children;) t = t.children[0];
                    e = [t]
                }
                return b._clearBusyState(o), e
            }, function() {
                return b._clearBusyState(o), null
            }) : s.fetchFirst(a)[Symbol.asyncIterator]().next().then(function(e) {
                return b._clearBusyState(o), e.value.data
            }, function() {
                return b._clearBusyState(o), null
            })
        },
        duringFetchByKey: function(e) {
            return e._fetchByKeys
        },
        fetchByKeyFromDataProvider: function(e, t, i) {
            var s = b.getDataProvider(t);
            const o = e instanceof a ? null : e,
                r = null != o ? o.container : e,
                l = b._addBusyState(r, "fetching selected data");
            var h;
            r._fetchByKeys && r._fetchByKeys.promise && n.Object.compareValues(i.value, r._fetchByKeys.key) ? h = r._fetchByKeys.promise : (h = s.fetchByKeys({
                keys: new Set(i.value)
            }), r._fetchByKeys = {
                key: i.value,
                promise: h
            }), h.then(function(e) {
                r._fetchByKeys = void 0;
                var t = [];
                e.results.forEach(function(e) {
                    t.push(b.createItemResult(e.data, e.metadata))
                }), i.callback({
                    results: t
                }), b._clearBusyState(l)
            }, function() {
                r._fetchByKeys = void 0, i.callback(), b._clearBusyState(l)
            })
        },
        validateFromDataProvider: function(e, t, i) {
            return new Promise(function(s, o) {
                b.fetchByKeyFromDataProvider(e, t, {
                    value: Array.isArray(i) ? i : [i],
                    callback: function(e) {
                        var t = null;
                        if (e && e.results.length) {
                            (t = {}).value = [], t.valueOptions = [];
                            for (var i = 0; i < e.results.length; i++) t.valueOptions.push(e.results[i]), t.value.push(e.results[i].value)
                        }
                        s(t)
                    }
                })
            })
        },
        isReadonly: function(e) {
            return e._IsCustomElement() && (e.options.readOnly || "loading" === e.options.loading)
        },
        _getMaxItems: function(e) {
            var t;
            return void 0 !== e.maximumResultCount && null !== e.maximumResultCount ? (t = e.maximumResultCount) < 1 && (t = b.DEFAULT_FETCH_ALL_SIZE) : t = b.DEFAULT_FETCH_SIZE, t
        },
        remote: function(e, t) {
            return function(i) {
                var s = {
                    component: this.ojContext
                };
                i.value ? s.value = i.value : s.term = i.term || "", e(s).then(function(e) {
                    var s = {
                        results: []
                    };
                    e && b.each2(a(e), function(e, o) {
                        b._processData(i, o, s.results, t, !1)
                    }), i.callback(s)
                })
            }
        },
        _processData: function(e, t, i, s, o, n) {
            var r, l = t[0];
            if (!l.label && s && s.label && (l.label = l[s.label]), !l.value && s && s.value && (l.value = l[s.value]), !l.children && s && s.children && (l.children = l[s.children], delete l[s.children]), l.children) {
                r = {};
                for (var h = Object.keys(l), c = 0; c < h.length; c++) {
                    var u = h[c];
                    r[u] = l[u]
                }
                r.children = [], b.each2(a(l.children), function(t, i) {
                    b._processData(e, i, r.children, s && s.childKeys ? s.childKeys : null, o, n)
                }), (!o || r.children.length && b._hasLeafNode(r)) && i.push(r)
            } else o && !e.matcher(e.term, n(l), l) || i.push(l)
        },
        _hasLeafNode: function(e) {
            if (null == e.children) return !0;
            for (let t = 0; t < e.children.length; t++) {
                const i = e.children[t];
                if (b._hasLeafNode(i)) return !0
            }
            return !1
        },
        checkFormatter: function(e, t) {
            if ("function" == typeof e) return !0;
            if (!e) return !1;
            throw new Error(t + " must be a function or a false value")
        },
        clazz: function(e, t) {
            var i = function() {};
            return n.Object.createSubclass(i, e, ""), i.prototype = a.extend(i.prototype, t), i
        },
        LAST_QUERY_RESULT: "last-query-result",
        getLastQueryResult: function(e) {
            return a.data(e.container, e._classNm + "-" + b.LAST_QUERY_RESULT)
        },
        saveLastQueryResult: function(e, t) {
            a.data(e.container, e._classNm + "-" + b.LAST_QUERY_RESULT, t)
        },
        getSelectedOptionData: function(e, t) {
            if (e.ojContext.multiple && e.selection)
                for (var i, s, o = e.selection.find("." + e._classNm + "-selected-choice"), r = 0; r < o.length; r++)
                    if (i = o.get(r), s = a(i).data(e._elemNm), n.Object.compareValues(t, s.value)) return s
        },
        getContextWithExtraData: function(e, t, i, s) {
            return !(!!t && b.isDataProvider(t.options)) || null == i || Array.isArray(i) && 0 === i.length ? e : a.extend(e || {}, {
                extraData: {
                    data: i,
                    metadata: s
                }
            })
        },
        getOpts: function(e) {
            var t;
            return e && (e.combobox && e.combobox.opts ? t = e.combobox.opts : e.select && e.select.opts && (t = e.select.opts)), t
        },
        getNormalizedValueArray: function(e) {
            return Array.isArray(e) ? e : null == e ? [] : [e]
        },
        getWidget: function(e) {
            return null != e.select ? e.select : null != e.combobox ? e.combobox : e.inputSearch
        },
        createProxyDropdownElement: function(e) {
            const t = document.createElement("div");
            t.style.visibility = "hidden", t.style.position = "absolute", t.style.overflow = "hidden";
            const i = document.createElement("div");
            i.setAttribute("data-oj-containerid", e), i.setAttribute("data-oj-context", ""), i.setAttribute("class", "oj-listbox-drop"), t.appendChild(i);
            const s = document.createElement("ul");
            return s.setAttribute("class", "oj-listbox-results"), i.appendChild(s), a(t)
        }
    };
    var y, j = {
        closeOnSelect: !0,
        openOnEnter: !0,
        formatNoMatches: function(e) {
            return e.getTranslatedString("noMatchesFound")
        },
        formatNoMoreResults: function(e) {
            return e.getTranslatedString("noMoreResults")
        },
        formatMoreMatches: function(e, t) {
            return 1 === t ? e.getTranslatedString("oneMatchesFound") : e.getTranslatedString("moreMatchesFound", {
                num: "" + t
            })
        },
        id: function(e) {
            return e.id
        },
        sanitizeData: function(e, t) {
            return e
        },
        parseData: function(e) {
            return e
        },
        matcher: function(e, t) {
            return ("" + t).toUpperCase().indexOf(("" + e).toUpperCase()) >= 0
        },
        separator: ","
    };
    const x = b.clazz(Object, {
            _bind: function(e) {
                var t = this;
                return function() {
                    return e.apply(t, arguments)
                }
            },
            _customOptionRenderer: function(e) {
                var t, i = this;
                e.each(function() {
                    (t = a(this)).is("oj-option") ? t.wrap("<li></li>") : t.is("oj-optgroup") && (t.wrap("<li></li>"), i._customOptionRenderer(t.children()), t.children().wrapAll("<ul class='oj-listbox-result-sub' role='group'></ul>"))
                })
            },
            _init: function(e) {
                var t, i, s = this._classNm,
                    o = this._elemNm;
                this.ojContext = e.ojContext;
                var r = this._prepareOpts(e);
                this.opts = r, this.id = r.id, this.parseData = r.parseData, this.sanitizeData = r.sanitizeData, this.headerInitialized = !1, this.isOjOption = this.ojContext._IsCustomElement() && !r.options && r.element.find("oj-option").length > 0, this._loadingIndicatorCount = 0, this._hasLoadingIndicator = !1, this._dropdownLoadingIndicatorCount = 0, this._hasDropdownLoadingIndicator = !1, this._isAndroidDevice = n.AgentUtils.getAgentInfo().os === n.AgentUtils.OS.ANDROID;
                const l = this.ojContext.cssOptionDefaults;
                let h = Number.parseInt(l.loadingIndicatorDelay, 10);
                Number.isNaN(h) && (h = b.DEFAULT_LOADING_INDICATOR_DELAY), this._loadingIndicatorDelay = h;
                var d = c.getCachedCSSVarValues(["--oj-private-core-global-dropdown-offset"])[0] || "0";
                this._dropdownVerticalOffset = parseInt(d, 10), void 0 !== r.element.data(o) && null !== r.element.data(o) && r.element.data(o)._destroy(), this._prepareContainer(), this.body = b.thunk(function() {
                    return r.element.closest("body")
                }), this.dropdown = this.container.find(".oj-listbox-drop"), this.dropdown.data("ojlistbox", this), this._setPickerAttributes(r.pickerAttributes);
                var p = this.containerId;
                this.dropdown.attr("data-oj-containerid", p), this._dropdownPositioningProxyContainer = b.createProxyDropdownElement(p), t = this.container.find(".oj-listbox-results"), this.results = t, this.results.on("click", b.killEvent), this._resultsBusyContext = u.getContext(this.results[0]).getBusyContext();
                var f = this._getTransferredAttribute("aria-label");
                if (null != f && this.results.attr("aria-label", f), this._defaultResultsMaxHeight = Number.parseInt(this.results.css("max-height"), 10), r.list && a("#" + r.list).is("ul")) {
                    var m = a("#" + r.list);
                    this.dropdownListParent = m.parent(), m.addClass("oj-listbox-results").attr("role", "listbox"), this.results.replaceWith(m), t = this.container.find(".oj-listbox-results"), this.results = t, this.results.css("display", "")
                }
                if (this.isOjOption) {
                    var v = r.element.children();
                    this._customOptionRenderer(v), this.results.append(r.element.children()), this.datalist = this.results
                }
                i = "oj-select" === s ? this.container.find("input.oj-listbox-input") : this.container.find("input." + s + "-input"), this.search = i, this.queryCount = 0, this.resultsPage = 0, this.context = null, this._ariaDescribedByAdded = [], this._idsFromDropdown = b.getDataProviderKeySet(r.ojContext), this._initContainer(), this.container.on("click", ".oj-text-field-container", b.killEvent), b.installFilteredMouseMove(this.results), this.elementTabIndex && ("oj-select" === s ? this.selection.attr("tabindex", this.elementTabIndex) : this.search.attr("tabindex", this.elementTabIndex)), this._boundHighlightUnderEvent = this._bind(this._highlightUnderEvent), this.ojContext._IsCustomElement() ? (this._delegatedDropdownTouchStartListener = function(e) {
                    const t = e.currentTarget,
                        i = e.target.closest(".oj-listbox-results");
                    i && t.contains(i) && this._boundHighlightUnderEvent(a.Event(e, {
                        currentTarget: i
                    }))
                }.bind(this), this.dropdown.on("mousemove-filtered touchmove touchend", ".oj-listbox-results", this._boundHighlightUnderEvent), this.dropdown[0].addEventListener("touchstart", this._delegatedDropdownTouchStartListener, {
                    passive: !0
                })) : this.dropdown.on("mousemove-filtered touchstart touchmove touchend", ".oj-listbox-results", this._boundHighlightUnderEvent), a(this.container).on("change", "." + s + "-input", function(e) {
                    e.stopPropagation()
                }), a(this.dropdown).on("change", "." + s + "-input", function(e) {
                    e.stopPropagation()
                });
                var _ = this;
                if (b.installKeyUpChangeEvent(i), i.on("keyup-change input paste", this._bind(this._updateResults)), i.on("focus", function() {
                        i.addClass(s + "-focused"), "oj-select" !== s && _.container.addClass("oj-focus"), _.isSearchFocused = !0
                    }), i.on("blur", function() {
                        i.removeClass(s + "-focused"), "oj-select" !== s && _.container.removeClass("oj-focus"), _.isSearchFocused = !1
                    }), this.dropdown.on("mouseup", ".oj-listbox-results", this._bind(function(e) {
                        a(e.target).closest(".oj-listbox-result-selectable").length > 0 && (this._highlightUnderEvent(e), this._selectHighlighted(null, e, !1))
                    })), this.dropdown.on("click mouseup mousedown", function(e) {
                        e.stopPropagation()
                    }), a.isFunction(this.opts.initSelection)) {
                    this.opts.fetchType = "init";
                    var g = this.getValOpts();
                    (!this.ojContext.multiple || g && 0 !== g.length) && (this.ojContext.multiple || g) || (g = null), this._initSelection(g)
                }
                var y = r.element.prop("readonly");
                void 0 === y && (y = !1), this._readonly(y);
                var j = r.element.prop("disabled");
                if (void 0 === j && (j = !1), this._enable(!j), y) {
                    let e = this.container.find(".oj-combobox-input");
                    this.ojContext._createOrUpdateReadonlyDiv(e[0])
                }
                b.scrollBarDimensions = b.scrollBarDimensions || b.measureScrollbar(), this.autofocus = r.element.prop("autofocus"), r.element.prop("autofocus", !1), this.autofocus && this._focus(), b.addDataProviderEventListeners(r.ojContext), this.applyReadonlyState()
            },
            _CreateContentElements: function() {
                return null
            },
            _ConfigureSlots: function() {},
            _RestoreSlots: function() {},
            _createContainerForWidget: function() {
                var e = a(document.createElement("div")),
                    t = this._CreateContentElements();
                return e.attr("class", this._COMPONENT_CLASSLIST), e.append(t), e
            },
            _prepareContainer: function() {
                var e, t, i, s, o;
                (e = this.ojContext._IsCustomElement() ? this._prepareContainerForCustomElement() : this._prepareContainerForWidget()).find(".oj-listbox-drop").css("display", "none"), i = "#" + (t = this._getOrCreateContainerId(e)).replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), o = this.opts.element.attr("tabindex"), s = this._elemNm, this.opts.element.data(s, this).attr("tabindex", "-1"), e.data(s, this), this.container = e, this.containerId = t, this.containerSelector = i, this.elementTabIndex = o, this._ConfigureSlots()
            },
            _prepareContainerForCustomElement: function() {
                var e, t = this.ojContext.OuterWrapper,
                    i = this._CreateContentElements(),
                    s = this._COMPONENT_CLASSLIST;
                return (e = a(t)).addClass(s), e.prepend(i), e
            },
            _prepareContainerForWidget: function() {
                var e, t = this.opts.element,
                    i = this._createContainerForWidget();
                return t.before(i), i.append(t), (e = this._getAttribute("style")) && i.attr("style", e), i
            },
            _getOrCreateContainerId: function(e) {
                var t;
                if (this.ojContext._IsCustomElement())(t = this._getAttribute("id")) || (t = this._classNm + "-" + b.nextUid(), e.attr("id", t));
                else {
                    var i = this.opts.rootAttributes;
                    t = i && i.id ? i.id : "ojChoiceId_" + (this._getAttribute("id") || this._classNm + b.nextUid()), e.attr("id", t)
                }
                return t
            },
            applyReadonlyState: function() {
                var t = this.ojContext._GetContentElement();
                if (b.isReadonly(this.ojContext)) {
                    if (this.container.addClass("oj-read-only"), "oj-combobox" === this._classNm)
                        if (this.ojContext.multiple) {
                            if (t = null, this.search.removeAttr("tabindex"), this.selection.attr("tabindex", this.elementTabIndex || "0"), this.ojContext.options.labelledBy) {
                                var i = this.uuid + "_Label",
                                    s = e.EditableValueUtils._getOjLabelAriaLabelledBy(this.ojContext.options.labelledBy, i);
                                s && this.selection.attr("aria-labelledby", s)
                            }
                            this.selection.attr("aria-readonly", !0)
                        } else t.attr("readonly", !0), this.ojContext._createOrUpdateReadonlyDiv(t[0]);
                    else "oj-select" === this._classNm && t.attr("aria-readonly", "true");
                    t && (t.removeAttr("role"), t.removeAttr("aria-expanded"))
                } else this.container.removeClass("oj-read-only"), "oj-combobox" === this._classNm ? this.ojContext.multiple ? (t = null, null != this.elementTabIndex && this.search.attr("tabindex", this.elementTabIndex), this.selection.removeAttr("tabindex"), this.selection.removeAttr("aria-labelledby"), this.selection.removeAttr("aria-readonly")) : t.removeAttr("readonly", !0) : "oj-select" === this._classNm && t.removeAttr("aria-readonly"), t && (t.attr("role", "combobox"), t.attr("aria-expanded", "false"));
                this._enableInterface()
            },
            updateAriaLabelIfNeeded: function() {
                if (this.ojContext._IsCustomElement()) {
                    var e = this._contentElement.attr("aria-label");
                    e ? this.results.attr("aria-label", e) : this.results.removeAttr("aria-label")
                }
            },
            updateAriaLabelledByIfNeeded: function(e) {
                e ? this.results.attr("aria-labelledby", e) : this.results.removeAttr("aria-labelledby")
            },
            _clickAwayHandler: function(e) {
                var t = this.dropdown;
                a(e.target).closest(t).length || a(e.target).closest("#" + a.escapeSelector(t.attr("data-oj-containerid"))).length || t.length > 0 && this.close(e)
            },
            _surrogateRemoveHandler: function() {
                this.dropdown && this.dropdown.remove()
            },
            _destroy: function() {
                var e = this._closeDelayTimer;
                isNaN(e) || (delete this._closeDelayTimer, window.clearTimeout(e));
                var t = this.opts.element,
                    i = t.data(this._elemNm);
                this.close(), this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.opts.list && this.results ? (this._cleanupList(this.results), this.dropdownListParent && this.dropdownListParent.append(this.results)) : this.isOjOption && this.results && (this._unwrapOjOptions(this.results), this.opts.element.append(this.results.children())), void 0 !== i && (this.ojContext._IsCustomElement() ? this._cleanUpContainerForCustomElement() : this._cleanUpContainerForWidget(), t.removeAttr("aria-hidden").removeData(this._elemNm).off("." + this._classNm).prop("autofocus", this.autofocus || !1), this.elementTabIndex ? t.attr({
                    tabindex: this.elementTabIndex
                }) : t.removeAttr("tabindex"), t.show()), this._clearActiveTimers()
            },
            _cleanUpContainerForWidget: function() {
                var e = this.opts.element,
                    t = e.data(this._elemNm);
                t.container.after(e), t.container.remove(), t.dropdown.remove()
            },
            _cleanUpContainerForCustomElement: function() {
                var e = this.opts.element,
                    t = e.data(this._elemNm);
                t.dropdown[0].removeEventListener("touchstart", this._delegatedDropdownTouchStartListener, {
                    passive: !0
                }), delete this._delegatedDropdownTouchStartListener, t.container.empty(), t.container.off("click"), t.container.append(e), this._RestoreSlots()
            },
            _unwrapOjOptions: function(e) {
                var t, i = e.children(),
                    s = this;
                i.each(function() {
                    (t = a(this)).is("li") && (t.hasClass("oj-listbox-result-with-children") || t.children("oj-optgroup").length > 0 ? (t.hasClass("oj-listbox-result-with-children") && t.children(".oj-listbox-result-label").remove(), s._unwrapOjOptions(t.find("oj-optgroup").children()), t.find("oj-optgroup").children().children().unwrap(), t.find("oj-optgroup").unwrap()) : t.hasClass("oj-listbox-result") ? t.find("oj-option").unwrap().unwrap() : t.find("oj-option").unwrap())
                })
            },
            _cleanupList: function(e) {
                if (e && e.is("ul")) {
                    e.removeClass("oj-listbox-results oj-listbox-result-sub"), e.removeAttr("role");
                    for (var t = e.children().length - 1; t >= 0; t--) this._cleanupList(a(e.children()[t]))
                } else if (e.is("li")) {
                    (e.hasClass("oj-listbox-placeholder") || e.hasClass("oj-listbox-no-results")) && e.remove(), e.attr("class") && e.attr("class", e.attr("class").replace(/oj-listbox-\S+/g, ""));
                    var i = e.children(".oj-listbox-result-label");
                    i && i.contents().unwrap(), "none" === e.css("display") && e.css("display", ""), this._cleanupList(e.children("ul"))
                }
            },
            _optionToData: function(e) {
                if (e.is("option") || e.is("oj-option")) return {
                    value: e.prop("value") || e.attr("value"),
                    label: e.text().trim() || e.attr("label"),
                    element: e.get(),
                    css: e.attr("class"),
                    disabled: e.prop("disabled"),
                    locked: "locked" === e.attr("locked") || !0 === e.data("locked")
                };
                if (e.is("optgroup") || e.is("oj-optgroup")) return {
                    label: e.prop("label") || e.attr("label"),
                    disabled: e.prop("disabled"),
                    children: [],
                    element: e.get(),
                    css: e.attr("class")
                };
                if (e.is("li")) {
                    var t, i, s, o = null,
                        n = e.children();
                    if (n && n.length > 0 && n.is("ul")) t = e.attr("oj-data-label") ? e.attr("oj-data-label") : e.clone().children().remove().end().text().trim(), i = e.attr("oj-data-value"), o = [];
                    else if (n && n.length > 0 && n.is("oj-optgroup")) t = n.prop("label"), s = n.prop("disabled"), o = [];
                    else {
                        var a = e.find("oj-option");
                        t = e.attr("oj-data-label") ? e.attr("oj-data-label") : e.text().trim(), i = a.length > 0 ? a.prop("value") : e.attr("oj-data-value"), s = a.length > 0 ? a.prop("disabled") : void 0
                    }
                    return {
                        value: i,
                        label: t,
                        disabled: s,
                        element: e.get(),
                        css: e.attr("class"),
                        children: o
                    }
                }
            },
            _prepareOpts: function(e) {
                var t, i, s = e,
                    o = this;
                s.options && Array.isArray(s.options) && s.optionsKeys && (s.options = a.extend(!0, [], s.options));
                var r = (t = s.element).get(0).tagName.toLowerCase();
                if (s.ojContext._IsCustomElement() ? !s.options && s.element.children().length > 0 && (i = a(t), this.datalist = i) : "input" === r && t.attr("list") ? (i = a("#" + t.attr("list")), this.datalist = i) : "select" === r && t.children().length > 0 ? (i = t, this.datalist = i) : s.list && (i = a("#" + s.list), this.datalist = i), (s = a.extend({}, {
                        populateResults: function(e, t, i, n) {
                            var l, h = this.opts.id,
                                c = b.isTreeDataProvider(b.getDataProvider(this.opts)),
                                u = this.opts.optionRenderer;
                            if ("function" != typeof u && (u = null), this.opts.ojContext._IsCustomElement() && u) {
                                var d = u;
                                u = function(e) {
                                    var t = d(e);
                                    return !t || "OJ-OPTION" !== t.tagName && "OJ-OPTGROUP" !== t.tagName ? t && t.insert ? t.insert : null : (t.hasAttribute("data-oj-binding-provider") || t.setAttribute("data-oj-binding-provider", "none"), t)
                                }
                            }(l = function(e, t, n, d, p) {
                                var f, m, v, _, g, y, j, x, C = function(e, t) {
                                        if (t.children && t.children.length > 0) {
                                            var i = t.element && a(t.element[0]).is("li") && a(t.element[0]).children("ul"),
                                                s = i ? a(t.element[0]).children("ul") : a("<ul></ul>");
                                            s.hasClass("oj-listbox-result-sub") || s.addClass("oj-listbox-result-sub"), s.attr("role", "group"), l(t, t.children, s, d + 1, !1), i || e.append(s)
                                        }
                                    },
                                    O = function(e, t) {
                                        e.length && t && t.length && e.each(function() {
                                            ! function e(t, i) {
                                                var s = a(t).is("OJ-HIGHLIGHT-TEXT"),
                                                    o = 3 === t.nodeType;
                                                if (s) t.setAttribute("match-text", i);
                                                else if (o) {
                                                    var n = t.data;
                                                    if ("" !== n.trim()) {
                                                        var r = document.createElement("oj-highlight-text");
                                                        r.setAttribute("text", n), r.setAttribute("match-text", i), r.setAttribute("data-oj-internal", ""), r.setAttribute("data-oj-binding-provider", "none"), t.parentNode.replaceChild(r, t)
                                                    }
                                                } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName))
                                                    for (var l = 0; l < t.childNodes.length; l++) e(t.childNodes[l], i)
                                            }(this, t.toUpperCase())
                                        })
                                    },
                                    S = function(e) {
                                        if (s.highlightTermInOptions(i)) {
                                            var t = e.find(".oj-listbox-highlighter-section");
                                            t.length || (t = e), O(t, i.term)
                                        }
                                    },
                                    E = function(t, i) {
                                        var o;
                                        if (u) {
                                            var n = b.isDataProvider(s.options) ? i.data : i,
                                                a = {
                                                    index: f,
                                                    depth: d,
                                                    leaf: !i.children,
                                                    parent: e,
                                                    data: n,
                                                    component: s.ojContext,
                                                    parentElement: t.get(0)
                                                };
                                            s.ojContext._FixRendererContext && (a = s.ojContext._FixRendererContext(a));
                                            var r = u.call(s.ojContext, a);
                                            null !== r && (null === r.parentNode || r.parentNode instanceof DocumentFragment) && (t.get(0).appendChild(r), o = r)
                                        } else void 0 !== (x = b.getLabel(i)) && (t.text(x), t.attr("aria-label", x));
                                        return S(t), o
                                    },
                                    V = o._getPlaceholder();
                                for (p && null !== V && !i.term && n.find(".oj-listbox-placeholder").length <= 0 && ("select" !== r || !o.ojContext._IsRequired()) && (v = {
                                        value: "",
                                        label: V
                                    }, (y = a("<li></li>")).addClass("oj-listbox-placeholder oj-listbox-results-depth-0 oj-listbox-result oj-listbox-result-selectable"), y.attr("role", "presentation"), (j = a(document.createElement("div"))).addClass("oj-listbox-result-label"), j.attr("id", "oj-listbox-result-label-" + b.nextUid()), j.attr("role", "option"), void 0 !== (x = b.getLabel(v)) && j.text(x), j.attr("aria-label", x), y.append(j), y.data(o._elemNm, v), n.prepend(y)), f = 0, m = t.length; f < m; f++) {
                                    g = !0 === (v = t[f]).disabled, _ = c ? !v._jetUnSelectable : !g && null != h(v) && null == v.children;
                                    var I = v.element && a(v.element[0]).is("li");
                                    if ((y = a(I ? v.element[0] : "<li></li>")).hasClass("oj-listbox-result")) v.children && v.children.length > 0 && C(y, v), S(a(v.element[0]).children("div")), a(v.element[0]).css("display", "");
                                    else {
                                        y.addClass("oj-listbox-results-depth-" + d), y.addClass("oj-listbox-result"), y.addClass(_ ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable"), g && y.addClass("oj-disabled"), v.children && y.addClass("oj-listbox-result-with-children"), y.attr("role", "presentation");
                                        var w = "oj-listbox-result-label-" + b.nextUid();
                                        if ((j = a(document.createElement("div"))).addClass("oj-listbox-result-label"), j.attr("id", w), j.attr("role", "option"), g && j.attr("aria-disabled", "true"), e && e.ariaLabelledById ? v.ariaLabelledById = e.ariaLabelledById + " " + w : v.ariaLabelledById = w, !I) {
                                            var A = E(j, v);
                                            if (y.append(j), A && ("OJ-OPTION" === A.tagName || "OJ-OPTGROUP" === A.tagName) && (A.getAttribute("disabled") && (y.removeClass("oj-listbox-result-selectable"), y.addClass("oj-listbox-result-unselectable oj-disabled"), j.attr("aria-disabled", "true")), "OJ-OPTGROUP" === A.tagName && A.hasAttribute("label"))) {
                                                var P = A.getAttribute("label"),
                                                    D = document.createTextNode(P);
                                                A.insertBefore(D, A.firstChild)
                                            }
                                        }
                                        if (v.children && v.children.length > 0 && C(y, v), y.data(o._elemNm, v), I) {
                                            var T = a(v.element[0]);
                                            if (T.children("oj-optgroup").length > 0) {
                                                var N = T.children("oj-optgroup").prop("label") + "";
                                                T.prepend(j.text(N))
                                            } else T.children("oj-option").length > 0 ? T.contents().wrapAll(j) : T.contents().filter(function() {
                                                return "UL" !== this.tagName
                                            }).wrapAll(j);
                                            S(T.children("div")), T.css("display", "")
                                        } else n.append(y)
                                    }
                                }
                            })(null, t, e, 0, n)
                        },
                        highlightTermInOptions: function(e) {
                            return !(!0 === e.initial)
                        }
                    }, j, s)).id = function(e) {
                        return e.value
                    }, s.sanitizeData = function(e, t) {
                        var i = n.CollectionUtils.copyInto({}, e);
                        return t && e.unparsedValue && (i.value = e.unparsedValue), delete i.unparsedValue, i
                    }, s.parseData = function(e) {
                        var t, i, s = this.ojContext.multiple,
                            o = (e || {}).value,
                            n = {};
                        if (b.isValueForPlaceholder(!1, o)) return e;
                        s && (o = [o]);
                        try {
                            t = this.ojContext._parseValue(o), i = this.ojContext._formatValue(t), n.value = Array.isArray(t) ? t[0] : t, n.label = Array.isArray(i) ? i[0] : i
                        } catch (t) {
                            return e
                        }
                        return n
                    }, "select" !== r && null !== s.manageNewEntry && (s.manageNewEntry = function(e, t) {
                        const i = {};
                        let o = i;
                        return null == e ? (i.label = "", i.value = "") : "string" == typeof e ? (i.label = e.trim(), i.value = i.label) : (i.label = String(e), i.value = e), null != s.parseData && (o = s.parseData(i), !0 === t && (o.unparsedValue = i.value)), o
                    }), this.datalist) s.query = this._bind(function(e) {
                    var t, i, s = {
                            results: [],
                            more: !1
                        },
                        n = e.term;
                    i = function(t, s) {
                        var a, r, l = t.children() && t.children().length > 0 && (t.children().is("ul") || t.children().is("oj-optgroup"));
                        t.is("option") || t.is("oj-option") || t.is("li") && !l ? e.matcher(n, t.text() || t.attr("label"), t) && s.push(o._optionToData(t)) : (t.is("optgroup") || t.is("oj-optgroup") || t.is("li") && l) && (a = o._optionToData(t), t.is("optgroup") || t.is("oj-optgroup") ? r = t.children() : t.children("oj-optgroup") ? r = t.children().children("ul").children() : t.children("ul").children(), b.each2(r, function(e, t) {
                            i(t, a.children)
                        }), a.children.length > 0 && s.push(a))
                    }, t = this.datalist.children(), void 0 !== this._getPlaceholder() && t.length > 0 && "" === t.first().attr("value") && (t = t.slice(1)), b.each2(t, function(e, t) {
                        i(t, s.results)
                    }), e.callback(s)
                });
                else if ("options" in s) {
                    var l = s.options;
                    b.getDataProvider(s) ? s.query = function(e) {
                        e.value ? b.fetchByKeyFromDataProvider(o, s, e) : b.fetchFromDataProvider(o, s, e)
                    } : a.isFunction(l) ? s.query = b.remote(l, s.optionsKeys ? s.optionsKeys : null) : s.query = b.local(l, s.optionsKeys ? s.optionsKeys : null)
                }
                return s
            },
            _createHeader: function() {
                var e = this.opts.element.find(".oj-listbox-header");
                if (e.length) {
                    this.header = a("<li>", {
                        class: "oj-listbox-result-header oj-listbox-result-unselectable",
                        role: "presentation"
                    }), this.header.append(e.children()), this._initializeHeaderItems();
                    var t = a("<ul>", {
                        class: "oj-listbox-results-with-header",
                        role: "listbox"
                    });
                    t.append(this.header), t.appendTo(this.results.parent());
                    var i = a("<li>", {
                        role: "presentation"
                    });
                    t.append(i), this.results.attr("role", "presentation"), this.results.appendTo(i)
                }
                this.headerInitialized = !0
            },
            _initializeHeaderItems: function() {
                this.headerItems = this.header.find("li[role='option'], li:not([role])"), this.headerItems.uniqueId(), this.header.find("ul").attr("role", "presentation"), this.header.find("li:not([role])").attr("role", "option");
                this.header.find("a, input, select, textarea, button, object, .oj-component-initnode").each(function() {
                    a(this).attr("tabIndex", -1)
                })
            },
            _isHeaderItem: function(e) {
                var t = !1;
                return this.headerItems.each(function() {
                    return a(this).attr("id") !== e || (t = !0, !1)
                }), t
            },
            _getNextHeaderItem: function(e) {
                if (!this.headerItems) return null;
                if (!e) return this.headerItems.first();
                var t = !1,
                    i = null;
                return this.headerItems.each(function() {
                    return t ? (i = a(this), !1) : (t = a(this).attr("id") === e, !0)
                }), i
            },
            _getPreviousHeaderItem: function(e) {
                if (!this.headerItems) return null;
                var t = null;
                return this.headerItems.each(function() {
                    return a(this).attr("id") !== e && (t = a(this), !0)
                }), t
            },
            _setFocusOnHeaderItem: function(e) {
                var t = e.find(".oj-component .oj-enabled").first();
                if (0 === t.length) {
                    0 === (t = e.find("a, input, select, textarea, button, object, .oj-component-initnode").first()).length && (t = e.children().first())
                }
                t && t.addClass("oj-focus oj-focus-highlight oj-focus-only")
            },
            _removeHighlightFromHeaderItems: function() {
                this.headerItems && this.headerItems.find(".oj-focus").removeClass("oj-focus oj-focus-highlight oj-focus-only")
            },
            _triggerSelect: function(e) {
                var t = a.Event(this._elemNm + "-selecting", {
                    val: this.id(e),
                    object: e
                });
                return this.opts.element.trigger(t), !t.isDefaultPrevented()
            },
            _triggerInternalLoadingStateChange: function(e, t) {
                const i = {
                        content: e,
                        isLoading: t
                    },
                    s = a.Event(this._elemNm + "-internal-loading-state-changed", {
                        detail: i
                    });
                this.opts.element.trigger(s)
            },
            _isInterfaceEnabled: function() {
                return !0 === this.enabledInterface
            },
            _enableInterface: function() {
                var e = this._enabled && !(b.isReadonly(this.ojContext) || this._readonly);
                return e !== this.enabledInterface && (b.isReadonly(this.ojContext) || this.container.toggleClass("oj-disabled", !e), this.close(), this.enabledInterface = e, !0)
            },
            _enable: function(e) {
                var t = e;
                void 0 === t && (t = !0), this._enabled !== t && (this._enabled = t, this.opts.element.prop("disabled", !(t || b.isReadonly(this.ojContext))), this.container.toggleClass("oj-enabled", t), this._enableInterface())
            },
            _disable: function() {
                this._enable(!1)
            },
            _readonly: function(e) {
                var t = e;
                return void 0 === t && (t = !1), this._readonly !== t && (this._readonly = t, this.opts.element.prop("readonly", t), this._enableInterface(), !0)
            },
            _opened: function() {
                return this.container.hasClass("oj-listbox-dropdown-open")
            },
            _getDropdownPositionElement: function() {
                return this.container[0].querySelector(".oj-text-field-container")
            },
            _usingHandler: function(e, t) {
                if (n.PositionUtils.isAligningPositionClipped(t)) {
                    var i = b._addBusyState(this.container, "closing popup");
                    return void(this._closeDelayTimer = window.setTimeout(function() {
                        this.close(), i()
                    }.bind(this), 1))
                }
                const s = this.container,
                    o = this.dropdown,
                    a = this.results,
                    r = n.PositionUtils.calcAvailablePopupSize(e, t),
                    l = a.outerHeight(),
                    h = o.outerHeight(!0) - l,
                    c = r.height - h - this._dropdownVerticalOffset,
                    u = Math.min(this._defaultResultsMaxHeight, c);
                a.css("max-height", u);
                const d = this._getDropdownPosition(!0);
                o.position(d), "bottom" === t.vertical ? (s.addClass("oj-listbox-drop-above"), o.addClass("oj-listbox-drop-above")) : (s.removeClass("oj-listbox-drop-above"), o.removeClass("oj-listbox-drop-above"))
            },
            _getDropdownPosition: function(e) {
                var t = {
                    my: "start top",
                    at: "start bottom",
                    of: this._getDropdownPositionElement(),
                    collision: "flip",
                    offset: {
                        x: 0,
                        y: this._dropdownVerticalOffset
                    }
                };
                e || (t.using = this._usingHandler.bind(this));
                var i = "rtl" === r.getReadingDirection(),
                    s = n.PositionUtils.normalizeHorizontalAlignment(t, i);
                return s = n.PositionUtils.coerceToJet(s), (s = n.PositionUtils.coerceToJqUi(s)).of = t.of, s
            },
            _positionDropdown: function() {
                var e = this.dropdown,
                    t = this._getDropdownPosition(),
                    i = this.container;
                e.css("width", i.outerWidth());
                const s = this._dropdownPositioningProxyContainer,
                    o = s.children(),
                    n = o.find(".oj-listbox-results");
                s.appendTo(this.body()), o.css({
                    width: e.outerWidth()
                }), n.css({
                    height: n.css("max-height")
                }), o.position(t), s.detach()
            },
            _shouldOpen: function(e) {
                if (this._opened()) return !1;
                if (!1 === this._enabled || b.isReadonly(this.ojContext) || !0 === this._readonly) return !1;
                var t = {
                    component: this.opts.element
                };
                return this.ojContext._trigger("beforeExpand", e, t)
            },
            _clearDropdownAlignmentPreference: function() {
                this.container.removeClass("oj-listbox-drop-above"), this.dropdown.removeClass("oj-listbox-drop-above"), this.results.css("max-height", "")
            },
            open: function(e, t, i) {
                return !!this._shouldOpen(e) && (this._opening(e, t, i), !0)
            },
            _opening: function() {
                this.headerInitialized || this._createHeader(), this.container.addClass("oj-listbox-dropdown-open"), this._showDropDown()
            },
            _showDropDown: function() {
                if (!this._opened()) return;
                if ("true" === this._getActiveContainer().attr("aria-expanded")) return;
                this._clearDropdownAlignmentPreference();
                if (n.ZOrderUtils.getStatus(this.dropdown) === n.ZOrderUtils.STATUS.OPEN) n.PopupService.getInstance().triggerOnDescendents(this.dropdown, n.PopupService.EVENT.POPUP_REFRESH);
                else {
                    this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), this.dropdown.appendTo(this.body()), this.header && (this.dropdown.find(".oj-listbox-results-with-header").prepend(this.header), this.header.show());
                    var e = {};
                    e[n.PopupService.EVENT.POPUP_CLOSE] = a.proxy(this.close, this), e[n.PopupService.EVENT.POPUP_REMOVE] = a.proxy(this._surrogateRemoveHandler, this), e[n.PopupService.EVENT.POPUP_AUTODISMISS] = a.proxy(this._clickAwayHandler, this), e[n.PopupService.EVENT.POPUP_REFRESH] = a.proxy(this._positionDropdown, this);
                    var t = {};
                    t[n.PopupService.OPTION.POPUP] = this.dropdown, t[n.PopupService.OPTION.LAUNCHER] = this.opts.element, t[n.PopupService.OPTION.EVENTS] = e, t[n.PopupService.OPTION.POSITION] = this._getDropdownPosition(), t[n.PopupService.OPTION.LAYER_SELECTORS] = "oj-listbox-drop-layer", t[n.PopupService.OPTION.CUSTOM_ELEMENT] = this.ojContext._IsCustomElement(), n.PopupService.getInstance().open(t), a("#oj-listbox-drop").removeAttr("id"), this.dropdown.attr("id", "oj-listbox-drop");
                    var i = this.containerId;
                    this.dropdown.attr("data-oj-containerid", i)
                }
                this._positionDropdown(), this._getActiveContainer().attr("aria-expanded", !0)
            },
            close: function(e, t) {
                if (this.shouldReopenOnNewData = !0 === t, this._opened()) {
                    this.container.removeClass("oj-listbox-dropdown-open");
                    var i = this._getActiveContainer().attr("aria-expanded");
                    if (delete this.ojContext._resolveSearchBoxLater, i && "false" !== i) {
                        var s = this.containerId,
                            o = "scroll." + s,
                            r = "resize." + s,
                            l = "orientationchange." + s;
                        this.container.parents().add(window).each(function() {
                            a(this).off(o).off(r).off(l)
                        }), this._clearDropdownAlignmentPreference();
                        var h = {};
                        h[n.PopupService.OPTION.POPUP] = this.dropdown, n.PopupService.getInstance().close(h), this.header && (this.header.hide(), this.header.appendTo(this.container)), this.dropdown.removeAttr("data-oj-containerid"), this.dropdown.removeAttr("id"), this.opts.list || this.isOjOption ? this._removeHighlight() : (this.dropdown.detach(), this.results.empty()), this.dropdown.appendTo(this.container), this._getActiveContainer().attr("aria-expanded", !1), this._updateMatchesCount("", !0), "ojcombobox" === this._elemNm && this._getActiveContainer().removeAttr("aria-activedescendant"), a.removeData(this.container, this._classNm + "-last-term"), delete this.ojContext._resultCount
                    }
                }
            },
            _setPickerAttributes: function(t) {
                e.EditableValueUtils.setPickerAttributes(this.dropdown, t)
            },
            _clearSearch: function() {},
            _ensureHighlightVisible: function() {
                var e, t, i, s, o, n, r = this.results,
                    l = this._highlight();
                l < 0 || (e = this._findHighlightableChoices(), i = (t = a(e[l])).offset().top + t.outerHeight(!0), l === e.length - 1 && (n = r.find("li.oj-listbox-more-results")).length > 0 && (i = n.offset().top + n.outerHeight(!0)), i > (s = r.offset().top + r.outerHeight(!0)) && r.scrollTop(r.scrollTop() + (i - s)), (o = t.offset().top - r.offset().top) < 0 && "none" !== t.css("display") && r.scrollTop(r.scrollTop() + o))
            },
            _findHighlightableChoices: function() {
                return this.results.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-selected)").filter(function() {
                    return "none" !== a(this).css("display")
                })
            },
            _moveHighlight: function(e) {
                var t = this._findHighlightableChoices(),
                    i = this._highlight();
                if (this.header && (i <= 0 || i === t.length - 1)) {
                    var s = this._getActiveContainer().attr("aria-activedescendant"),
                        o = this._isHeaderItem(s);
                    o || (s = null);
                    var n = null;
                    if (e > 0 && (i < 0 || i === t.length - 1) ? n = this._getNextHeaderItem(s) : e < 0 && (o && i < 0 || 0 === i) && (n = this._getPreviousHeaderItem(s)), n) return this._removeHighlight(), this._setFocusOnHeaderItem(n), void this._getActiveContainer().attr("aria-activedescendant", n.attr("id"));
                    o && e < 0 && (i = 0)
                }
                for (; i >= -1 && i < t.length;) {
                    (i += e) === t.length ? i = 0 : -1 === i && (i = t.length - 1);
                    var r = a(t[i]);
                    if (r.hasClass("oj-listbox-result-selectable") && !r.hasClass("oj-disabled") && !r.hasClass("oj-selected")) {
                        this._highlight(i, !0);
                        break
                    }
                }
            },
            _highlight: function(e, t, i) {
                let s = e;
                const o = this._findHighlightableChoices();
                let n, r;
                if (0 === arguments.length) {
                    var l = o.filter(".oj-hover");
                    return l.length || (l = o.children(".oj-hover").closest(".oj-listbox-result")), this._updateMatchesCount(l.text()), o.get().indexOf(l[0])
                }
                return s >= o.length && (s = o.length - 1), s < 0 && (s = 0), this._removeHighlight(), n = a(o[s]), r = n, n.hasClass("oj-listbox-result-with-children") && (r = n.children(".oj-listbox-result-label")), r.addClass("oj-hover"), t && (r.addClass("oj-listbox-result-keyboard-focus"), i || r.addClass("oj-focus-highlight")), this._updateMatchesCount(r.text()), this._getActiveContainer().attr("aria-activedescendant", n.find(".oj-listbox-result-label").attr("id")), this._ensureHighlightVisible(), 0
            },
            _removeHighlight: function() {
                this.results.find(".oj-hover").removeClass("oj-hover oj-listbox-result-keyboard-focus oj-focus-highlight"), this._removeHighlightFromHeaderItems(), "ojcombobox" === this._elemNm && this._getActiveContainer().removeAttr("aria-activedescendant")
            },
            _highlightUnderEvent: function(e) {
                var t = a(e.target).closest(".oj-listbox-result-selectable");
                if (t.length > 0 && !t.is(".oj-hover")) {
                    var i = this._findHighlightableChoices();
                    this._highlight(i.index(t))
                } else 0 === t.length && this._removeHighlight()
            },
            _updateMatchesCount: function(e, t) {
                if (!this.dropdown.find(".oj-listbox-filter-message-text").length || !0 === t) {
                    var i = this.container.find(".oj-listbox-liveregion");
                    i.length && i.text(e)
                }
            },
            _updateResults: function(e, t) {
                var i = this.search,
                    s = this,
                    o = i.val(),
                    n = a.data(this.container, this._classNm + "-last-term");
                if ((!0 === e || !n || o !== n || !0 === this.opts.multiple || t) && (n || o || !e || "input" !== e.type)) {
                    a.data(this.container, this._classNm + "-last-term", o);
                    var r = this.opts.minLength || 0;
                    o.length >= r ? (this._queryTimer && this._queryTimer.clear(), e && !0 !== e ? (this._queryResolveBusyState = b._addBusyState(this.container, "query results"), this._queryTimer = h.getTimer(b.DEFAULT_QUERY_DELAY), this._queryTimer.getPromise().then(function(t) {
                        t && s._queryResults(e)
                    }).then(this._queryResolveBusyState)) : this._queryResults(e)) : this.close()
                }
            },
            _queryResults: function(e) {
                var t, i, s = this.search,
                    o = this.results,
                    n = this.opts,
                    a = this,
                    r = s.val();

                function l() {
                    if (a._resultsBusyContext.isReady()) a._resultsBusyContextPromise = null, a._positionDropdown();
                    else {
                        const e = a._resultsBusyContext.whenReady();
                        a._resultsBusyContextPromise = e;
                        const t = function() {
                            a._resultsBusyContextPromise === e && (a._resultsBusyContextPromise = null, a._positionDropdown())
                        };
                        e.then(t, t).catch(t)
                    }
                    if (a.header && a.headerItems.length) {
                        var e = a._findHighlightableChoices(),
                            t = a.headerItems.length + e.length;
                        if (a.headerItems.attr("aria-setsize", t), e.length) {
                            var i = e.children("[role='option']");
                            i.attr("aria-setsize", t), i.first().attr("aria-posinset", a.headerItems.length + 1)
                        }
                    }
                }(n.minLength || 0) > r.length ? this.close() : (this.open(null, !0), b.updateDropdownLoadingState(this, !0), this.queryCount += 1, i = this.queryCount, this._removeHighlight(), r = null != (t = this.search.val()) && (!0 !== e || n.inputSearch || "rawValue" === n.filterOnOpen || n.minLength > 0) ? t : "", this.resultsPage = 1, n.query({
                    element: n.element,
                    term: r,
                    page: this.resultsPage,
                    context: null,
                    matcher: n.matcher,
                    callback: this._bind(function(t) {
                        if (b.updateDropdownLoadingState(this, !1), i !== this.queryCount) return;
                        if (!this._opened()) return;
                        n.ojContext._hasMore || b.removeDropdownMessage(a.dropdown), this.results.removeClass(b.STYLE_CLASS.HIDDEN), this.context = t && void 0 !== t.context ? t.context : null;
                        const r = !t || t.results && 0 === t.results.length,
                            h = this._isDataSelected(t) && this.ojContext.isValid(),
                            c = b.checkFormatter(n.formatNoMatches, "formatNoMatches"),
                            u = b.checkFormatter(n.formatNoMoreResults, "formatNoMoreResults");
                        if (r && c || h && u) {
                            let e;
                            if (e = h ? n.formatNoMoreResults(a.ojContext) : n.formatNoMatches(a.ojContext), "oj-select" === this._classNm || this.header) {
                                if (this._showDropDown(), this._preprocessResults(o), b.addDropdownMessage(a.dropdown, a.ojContext, e), this.results.addClass(b.STYLE_CLASS.HIDDEN), !this._hasSearchBox()) {
                                    var d = a.dropdown.find(".oj-listbox-filter-message-separator");
                                    d.length && d.css("display", "none")
                                }
                                l()
                            } else this.close(null, !0);
                            this._updateMatchesCount(e)
                        } else b.saveLastQueryResult(this, t.results), this._showDropDown(), this._preprocessResults(o), a.opts.populateResults.call(this, o, t.results, {
                            term: s.val(),
                            page: this.resultsPage,
                            context: null,
                            initial: e
                        }, this._showPlaceholder()), this._postprocessResults(t, e), l(), this._updateMatchesCount(n.formatMoreMatches(a.ojContext, this._findHighlightableChoices().length))
                    }),
                    cleanup: this._bind(function() {
                        b.updateDropdownLoadingState(this, !1)
                    })
                }))
            },
            _preprocessResults: function(e) {
                if (this.opts.list || this.isOjOption) {
                    var t = e.children();
                    this._hideResultList(t)
                } else e.empty()
            },
            _processAriaLabelForHierarchy: function() {
                var e = this.results.find(".oj-listbox-result-with-children");
                if (0 !== e.length) {
                    var t = this,
                        i = function(e) {
                            var i = e.find(".oj-listbox-result-label"),
                                s = e.data(t._elemNm).ariaLabelledById;
                            s && i && i.attr("aria-labelledby", s)
                        };
                    b.each2(e, function(e, t) {
                        var s = t.find(".oj-listbox-result-selectable:visible");
                        s && s.length > 0 && (i(a(s[0])), s.length > 1 && i(a(s[s.length - 1])))
                    })
                }
            },
            _normalizeHighlighterLabel: function(e) {
                var t;
                if ((t = e.children("div").children("oj-option").length > 0 ? e.children("div").children("oj-option").find("oj-highlight-text") : e.children("div").children("oj-highlight-text")).length > 0)
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i],
                            o = s.getAttribute("text") || "",
                            n = document.createTextNode(o);
                        s.parentElement.replaceChild(n, s)
                    }
            },
            _hideResultList: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var i, s = a(e[t]);
                    s.is("LI") && ((s.hasClass("oj-listbox-no-results") || s.hasClass("oj-listbox-placeholder")) && s.remove(), s.css("display", "none"), s.hasClass("oj-selected") && s.removeClass("oj-selected"), this._normalizeHighlighterLabel(s)), (i = s.children("oj-optgroup") ? s.children("oj-optgroup").children("ul") : s.children("ul")) && i.children() && this._hideResultList(i.children())
                }
            },
            _cancel: function(e) {
                this.close(e)
            },
            _focusSearch: function() {
                b._focus(this, this.search)
            },
            _selectHighlighted: function(e, t, i) {
                var s = e;
                if (this.header) {
                    var o = this._getActiveContainer().attr("aria-activedescendant");
                    if (this._isHeaderItem(o)) {
                        var n = a("#" + o),
                            r = n.find("a, input, select, textarea, button, object").first();
                        return 0 === r.length && (r = n.children()), r.length && r[0].click(), void this.close(t)
                    }
                }
                var l = this._highlight(),
                    h = this._getHighlightedForSelection(i);
                if (h) {
                    this._highlight(l);
                    var c = this.getVal();
                    (s = s || {}).trigger = b.ValueChangeTriggerTypes.OPTION_SELECTED;
                    var u = this._onSelect(h, s, t);
                    u instanceof Promise ? u.then(this._bind(function(e) {
                        e && (this._triggerUpdateEvent(h, s, t), this._triggerValueUpdatedEvent(h, c))
                    })) : !1 !== u && (this._triggerUpdateEvent(h, s, t), this._triggerValueUpdatedEvent(h, c)), t && "keydown" === t.type && (this.enterKeyEventHandled = !0)
                }
            },
            _getHighlightedForSelection: function(e) {
                let t;
                return t = "oj-select" !== this._classNm && e ? this.results.find(".oj-hover.oj-listbox-result-keyboard-focus") : this.results.find(".oj-hover"), t.closest(".oj-listbox-result").data(this._elemNm)
            },
            _getPlaceholder: function() {
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder
            },
            _setPlaceholder: function() {
                var e = this._getPlaceholder();
                if (this.ojContext.multiple && "oj-select" === this._classNm) {
                    var t = this.selection.find(".oj-select-default");
                    t.length > 0 ? t.text(e) : this._clearSearch()
                } else e ? this.search.attr("placeholder", e) : this.search.removeAttr("placeholder")
            },
            _initContainerWidth: function() {
                var e = function() {
                    var e, t, i, s, o;
                    if (null != (e = this._getAttribute("style")))
                        for (s = 0, o = (t = e.split(";")).length; s < o; s++)
                            if (null !== (i = t[s].replace(/\s/g, "").match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)) && i.length >= 1) return i[1];
                    return null
                }.call(this);
                null !== e && this.container.css("width", e)
            },
            valHasChanged: function() {
                var e = this.container;
                b.duringFetchByKey(e) && (b.setValueChanged(this.ojContext, !0), this.ojContext.multiple || b.updateLoadingState(this, !1))
            },
            getVal: function() {
                return this.ojContext.option("value")
            },
            getRawValue: function() {
                return this.ojContext.option("rawValue")
            },
            setVal: function(e, t, i) {
                this.valHasChanged();
                var s = {
                    doValueChangeCheck: !1
                };
                i && (s._context = i);
                var o = this.ojContext.multiple;
                if (!this._skipSetValueOptions)
                    if (b.isValueForPlaceholder(o, e) && null !== this._getPlaceholder()) this.setValOpts(b.getFixupValueOptionsForPlaceholder(o));
                    else {
                        var a, r = b.getLastQueryResult(this);
                        r && (a = o ? b.findOptions(r, e) : b.findOption(r, e)), a ? this.setValOpts(a) : "oj-combobox" === this._classNm ? this.ojContext._resolveValueOptionsLater = null != b.findOption(this.getValOpts(), e) : this.ojContext._resolveValueOptionsLater = !0
                    }
                var l = this.getVal(),
                    h = null;
                return Array.isArray(e) || this.ojContext._IsCustomElement() ? !n.Object.compareValues(l, e) || b.hasInvalidComponentMessages(this.ojContext) ? h = this.ojContext._SetValue(e, t, s) : "oj-combobox" !== this._classNm || o || this.ojContext._SetDisplayValue(e) : !n.Object.compareValues(l, [e]) || b.hasInvalidComponentMessages(this.ojContext) ? h = this.ojContext._SetValue([e], t, s) : "oj-combobox" !== this._classNm || o || this.ojContext._SetDisplayValue([e]), h
            },
            getValOpts: function() {
                var e = this.ojContext;
                return e.multiple ? e.option("valueOptions") : e.option("valueOption")
            },
            setValOpts: function(e) {
                var t = this.ojContext,
                    i = t.multiple,
                    s = b.getFixupValueOptionsForPlaceholder(i),
                    o = i ? t.options.valueOptions : t.options.valueOption;
                b.isValueOptionsForPlaceholder(i, e) && b.isValueOptionsForPlaceholder(i, o) && b.isPlaceholderSpecified(t.options) ? i ? t.options.valueOptions = s : t.options.valueOption = s : n.Object.compareValues(e, this.getValOpts()) || b.setValueOptions(t, e), i ? this.opts.valueOptions = e : this.opts.valueOption = e
            },
            _triggerUpdateEvent: function(e, t, i) {},
            _triggerValueUpdatedEvent: function(e, t) {},
            _showPlaceholder: function() {
                return !1
            },
            _getActiveContainer: function() {
                return this.search
            },
            _getAttribute: function(e) {
                return this.opts.ojContext._IsCustomElement() ? this.opts.ojContext.OuterWrapper.getAttribute(e) : this.opts.element.attr(e)
            },
            _getTransferredAttribute: function(e) {
                return this.opts.element.attr(e)
            },
            _showSearchBox: function(e) {
                var t = !1,
                    i = this.dropdown.find(".oj-listbox-search");
                if (i && (this._hasSearchBox() ? (this.dropdown.find(".oj-listbox-search-wrapper").removeClass("oj-helper-hidden-accessible"), a(i).removeAttr("aria-hidden"), this.search.val(e), t = !0) : (this.dropdown.find(".oj-listbox-search-wrapper").addClass("oj-helper-hidden-accessible"), a(i).attr("aria-hidden", "true"))), b._focus(this, t ? this.search : this.selection), t) {
                    var s = this;
                    i.find(".oj-listbox-spyglass-box").on("mouseup click", function(e) {
                        s.search.focus(), e.preventDefault()
                    })
                }
            },
            _hasSearchBox: function() {
                if (this._userTyping) return !0;
                var e, t = this.opts.minimumResultsForSearch;
                if (this.opts.list) e = a("#" + this.opts.list).find("li").length;
                else if (b.isDataProvider(this.opts.options)) {
                    if (void 0 === this.ojContext._resultCount) return this.ojContext._resolveSearchBoxLater = !0, !1;
                    e = this.ojContext._resultCount, delete this.ojContext._resolveSearchBoxLater
                } else this.datalist ? e = this.ojContext._IsCustomElement() ? this.datalist.children().find("oj-option").length : this.datalist[0].length : this.opts.options && (e = this.opts.options.length);
                return e > t
            },
            _hasHiddenSearchBox: function() {
                return "true" === this.dropdown.find(".oj-listbox-search").attr("aria-hidden")
            },
            _isDataSelected: function(e) {
                return !1
            },
            _findItem: function(e, t) {
                for (var i = 0; i < e.length; i++)
                    if (a(e[i]).data(this._elemNm).value === t) return e[i];
                return null
            },
            _UpdateValueOptionsWithConverter: function() {},
            _SyncRawValue: function(e, t) {},
            _ShouldToggleDropdown: function(e) {
                return this._isInterfaceEnabled() && 0 === e.button
            },
            _ShouldCreateNewEntry: function(e) {
                if (!this.opts.manageNewEntry) return !1;
                const t = e ? ".oj-hover.oj-listbox-result-keyboard-focus" : ".oj-hover",
                    i = this.results.find(t);
                return this.search.val() && 0 === i.length
            },
            _selectItemByValue: function(e) {
                const t = this.ojContext.options,
                    i = {
                        trigger: b.ValueChangeTriggerTypes.ENTER_PRESSED
                    },
                    s = b.getNormalizedValueArray(e);
                return t.options ? (this._idsFromDropdown.clear(), b.isDataProvider(t.options) ? this._selectItemFromDataProvider(s, i) : this._selectItemFromArray(s, i)) : this.isOjOption ? (this._idsFromDropdown.clear(), this._selectItemFromOjOptions(s, i)) : Promise.reject("Unsupported options")
            },
            _selectItemFromDataProvider: function(e, t) {
                const i = b.getDataProvider(this.opts);
                let s = new Set(e);
                return i.fetchByKeys({
                    keys: s
                }).then(this._bind(function(i) {
                    const s = i.results;
                    let o = [];
                    return e.forEach(this._bind(function(e) {
                        let t;
                        if (s.has(e)) {
                            const i = s.get(e),
                                o = i.data,
                                n = i.metadata;
                            t = b.createItemResult(o, n), this._idsFromDropdown.add(e)
                        } else t = this._getItemForCustomInput(e);
                        null != t && o.push(t)
                    })), this._InvokeSelection(o, t)
                }))
            },
            _selectItemFromArray: function(e, t) {
                const i = this.ojContext.options.options,
                    s = this.ojContext.options.optionsKeys || {};
                let o = new Map,
                    n = [];
                if (!Array.isArray(i)) return Promise.reject("Unsupported options");
                for (let t = 0; t < i.length; t++) {
                    const n = i[t],
                        a = b.lookupOptionKeys(n, s, "value");
                    if (e.includes(a) && (o.set(a, n), e.length === o.size)) break
                }
                return e.forEach(this._bind(function(e) {
                    let t;
                    o.has(e) ? (t = o.get(e), this._idsFromDropdown.add(e)) : t = this._getItemForCustomInput(e), null != t && (null != s.value && (t.value = t[s.value]), null != s.label && (t.label = t[s.label]), n.push(t))
                })), this._InvokeSelection(n, t)
            },
            _selectItemFromOjOptions: function(e, t) {
                const i = this.datalist.find("oj-option");
                let s = new Map,
                    o = [];
                return b.each2(i, this._bind(function(t, i) {
                    const o = this._optionToData(i);
                    o && e.includes(this.id(o)) && s.set(this.id(o), o)
                })), e.forEach(this._bind(function(e) {
                    let t;
                    s.has(e) ? (t = s.get(e), this._idsFromDropdown.add(e)) : t = this._getItemForCustomInput(e), null != t && o.push(t)
                })), this._InvokeSelection(o, t)
            },
            _getItemForCustomInput: function(e) {
                if (this.opts.manageNewEntry) {
                    this.shouldApplyConverter = !0;
                    const t = this.opts.manageNewEntry(e, !0);
                    return delete this.shouldApplyConverter, t
                }
                return null
            },
            _InvokeSelection: function(e, t) {},
            _clearActiveTimers: function() {
                this._focusTimer && (this._focusTimer.clear(), delete this._focusTimer), this._loadingIndicatorTimer && (this._loadingIndicatorTimer.clear(), delete this._loadingIndicatorTimer), this._dropdownLoadingIndicatorTimer && (this._dropdownLoadingIndicatorTimer.clear(), delete this._dropdownLoadingIndicatorTimer), this._queryTimer && (this._queryTimer.clear(), delete this._queryTimer)
            }
        }),
        C = b.clazz(x, {
            applyReadonlyState: function() {
                C.superclass.applyReadonlyState.apply(this, arguments), b.applyValueOptions(this, this.opts)
            },
            _prepareOpts: function() {
                var e = C.superclass._prepareOpts.apply(this, arguments),
                    t = this,
                    i = e.element.get(0).tagName.toLowerCase();
                if ("input" === i && e.element.attr("list") || "select" === i && e.element.children().length > 0 || e.ojContext._IsCustomElement() && !e.options || e.list) {
                    var s = e.list ? "li" : "option";
                    e.ojContext._IsCustomElement() && (s = "oj-option"), e.initSelection = function(o, a) {
                        var r, l = [];
                        if (t._idsFromDropdown.clear(), t.getVal())
                            for (var h = t.getVal(), c = 0; c < h.length; c++) {
                                var u = h[c];
                                if ((r = o.find(s).filter(function() {
                                        var e;
                                        return "li" === s ? e = this.getAttribute("oj-data-value") : "option" !== s && "oj-option" !== s || (e = this.value), n.Object.compareValues(e, u)
                                    })) && r.length) {
                                    let i = t._optionToData(r);
                                    l.push(i), t._idsFromDropdown.add(e.id(i))
                                } else "ojcombobox" === t._elemNm && l.push(e.parseData({
                                    value: u,
                                    label: u
                                }))
                            } else "select" !== i && (r = o.find(s).filter(function() {
                                return "option" === s ? this.selected : "li" === s ? !0 === this.getAttribute("oj-data-selected") : "oj-option" === s && !0 === this.getAttribute("selected")
                            }), b.each2(r, function(i, s) {
                                let o = t._optionToData(s);
                                l.push(o), t._idsFromDropdown.add(e.id(o))
                            }));
                        a(l)
                    }
                } else "options" in e && (b.isDataProvider(e.options) || a.isFunction(e.options) ? e.initSelection = function(i, s) {
                    var o = function(t, i) {
                            for (var s = [], n = 0, r = t.length; n < r; n++) {
                                var l = t[n];
                                if (i.indexOf(e.id(l)) >= 0 && s.push(l), l.children) {
                                    var h = o(l.children, i);
                                    h && h.length && a.merge(s, h)
                                }
                            }
                            return s
                        },
                        r = t.getVal(),
                        l = [];
                    t._idsFromDropdown.clear();
                    var h = b.getLastQueryResult(t);
                    h && (l = o(h, r));
                    var c = function() {
                        for (var i = [], o = 0; o < r.length; o++) {
                            for (var a = r[o], h = !1, c = 0; c < l.length; c++) {
                                var u = l[c];
                                if (n.Object.compareValues(a, e.id(u))) {
                                    i.push(u), t._idsFromDropdown.add(e.id(u)), l.splice(c, 1), h = !0;
                                    break
                                }
                            }
                            if (!h) {
                                var d = t.currentItem;
                                if (d && d.length)
                                    for (var p = 0; p < d.length; p++)
                                        if (n.Object.compareValues(a, e.id(d[p]))) {
                                            i.push(d[p]), h = !0;
                                            break
                                        }
                                h || "ojcombobox" !== t._elemNm || i.push(e.parseData({
                                    value: a,
                                    label: a
                                }))
                            }
                        }
                        s(i)
                    };
                    t.valueChangeTrigger ? c() : (b.updateLoadingState(t, !0), e.query({
                        value: r,
                        callback: function(i) {
                            if (b.updateLoadingState(t, !1), i && i.results) {
                                var s = o(i.results, r);
                                if (s && s.length) {
                                    var h = s;
                                    if (b.isDataProvider(e.options)) {
                                        h = [];
                                        var u = t.getVal();
                                        if (n.Object.compareValues(r, u) && !b.isValueChanged(t.ojContext)) h = s;
                                        else {
                                            var d, p, f = t.getValOpts();
                                            u.forEach(function(e) {
                                                for (p = !1, d = 0; d < f.length; d++)
                                                    if (n.Object.compareValues(f[d].value, e)) {
                                                        p = !0, h.push(f[d]);
                                                        break
                                                    }
                                                if (!p)
                                                    for (d = 0; d < s.length; d++)
                                                        if (n.Object.compareValues(s[d].value, e)) {
                                                            h.push({
                                                                value: s[d].value,
                                                                label: s[d].label
                                                            });
                                                            break
                                                        }
                                            }), r = u, b.setValueOptions(t.ojContext, h)
                                        }
                                    }
                                    a.merge(l, h)
                                }
                            }
                            b.setValueChanged(t.ojContext, void 0), c()
                        },
                        cleanup: a.noop
                    }))
                } : e.initSelection = function(i, s) {
                    var o = t.getVal();
                    if (o && 0 !== o.length) {
                        var r = [];
                        t._idsFromDropdown.clear(), e.query({
                            matcher: function(t, i, s) {
                                var l = a.grep(o, function(t) {
                                    return n.Object.compareValues(t, e.id(s))
                                }).length;
                                return l && r.push(s), l
                            },
                            callback: a.isFunction(s) ? function() {
                                for (var i = [], a = 0; a < o.length; a++) {
                                    for (var l = o[a], h = !1, c = 0; c < r.length; c++) {
                                        var u = r[c];
                                        if (n.Object.compareValues(l, e.id(u))) {
                                            i.push(u), t._idsFromDropdown.add(e.id(u)), r.splice(c, 1), h = !0;
                                            break
                                        }
                                    }
                                    h || "ojcombobox" !== t._elemNm || i.push(e.parseData({
                                        value: l,
                                        label: l
                                    }))
                                }
                                s(i)
                            } : a.noop,
                            cleanup: a.noop
                        })
                    }
                });
                return e
            },
            _selectChoice: function(e) {
                var t = this.container.find("." + this._classNm + "-selected-choice.oj-focus"),
                    i = t && t.length > 0,
                    s = e && e.length > 0;
                (!i && s || i && !s || i && s && e[0] !== t[0]) && (i && (this.opts.element.trigger("choice-deselected", t), t.removeClass("oj-focus")), s && (this.close(), e.addClass("oj-focus"), this.container.find("." + this._classNm + "-description").text(e.attr("valueText") + ". Press back space to delete.").attr("aria-live", "assertive"), this.opts.element.trigger("choice-selected", e)))
            },
            _destroy: function() {
                a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.container.off("mousedown"), C.superclass._destroy.apply(this, arguments)
            },
            _initContainer: function() {
                var e, t = "." + this._classNm + "-accessible-container",
                    i = b.nextUid(),
                    s = this._getTransferredAttribute("aria-label"),
                    o = this._getTransferredAttribute("aria-controls");
                this.searchContainer = this.container.find("." + this._classNm + "-search-field");
                var n = this.container.find(t);
                this.selection = n;
                var r = this;
                this.selection.on("click", "." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)", function() {
                    "ojcombobox" === r._elemNm && r.search[0].focus(), r._selectChoice(a(this))
                }), "ojselect" === this._elemNm && this.selection.on("blur", function() {
                    r._selectChoice(null)
                }), this._contentElement = "ojcombobox" === this._elemNm ? this.search : this.selection, n.find("." + this._classNm + "-input").attr("id", this._classNm + "-input-" + i), this.results.attr("id") || this.results.attr("id", "oj-listbox-results-" + i), this._contentElement.attr("aria-owns", this.results.attr("id")), this.ojContext._IsCustomElement() || ((e = a("label[for='" + this._getAttribute("id") + "']")).attr("id") || e.attr("id", this._classNm + "-label-" + i), this._contentElement.attr("aria-labelledby", e.attr("id")), this.opts.element.attr("aria-labelledby", e.attr("id")), this.search.attr("id") && e.attr("for", this.search.attr("id"))), s && this._contentElement.attr("aria-label", s), o && this._contentElement.attr("aria-controls", o), this.elementTabIndex && this._contentElement.attr("tabindex", this.elementTabIndex), this.keydowns = 0, "ojselect" === this._elemNm && (this.selection.on("keydown", this._bind(this._containerKeydownHandler)), this.selection.on("keyup", this._bind(function() {
                    this.keydowns = 0
                }))), this.search.on("keydown", this._bind(this._containerKeydownHandler)), this.search.on("keyup", this._bind(function() {
                    this.keydowns = 0
                })), this.search.on("compositionstart", this._bind(function() {
                    this.ojContext._isComposing = !0
                })), this.search.on("compositionend", this._bind(function(e) {
                    this.ojContext._isComposing = !1, this._onSearchInputHandler(e)
                })), this.search.on("input", this._bind(function(e) {
                    this.ojContext._isComposing && !this._isAndroidDevice || this._onSearchInputHandler(e)
                })), this.search.on("blur keyup", this._bind(function(e) {
                    if ("keyup" !== e.type || 10 === e.keyCode || 13 === e.keyCode) {
                        if (this._ShouldCreateNewEntry("keyup" === e.type)) {
                            this.shouldApplyConverter = !0;
                            var t = this.opts.manageNewEntry(this.search.val(), !0),
                                i = {
                                    trigger: "blur" === e.type ? b.ValueChangeTriggerTypes.BLUR : b.ValueChangeTriggerTypes.ENTER_PRESSED
                                },
                                s = this._onSelect(t, i, e);
                            s instanceof Promise ? s.then(this._bind(function() {
                                delete this.shouldApplyConverter, this._clearSearchOnBlur()
                            })) : (delete this.shouldApplyConverter, this._clearSearchOnBlur())
                        }
                        this._selectChoice(null), "blur" === e.type && (this.isSearchFocused = !1, this.search.removeClass(this._classNm + "-focused"), this.container.removeClass("oj-focus")), e.stopImmediatePropagation()
                    }
                })), this.container.on("mousedown", ".oj-text-field-container", this._bind(this._mouseDownHandler)), this._initContainerWidth(), this.opts.element.hide().attr("aria-hidden", !0), this._clearSearch()
            },
            _mouseDownHandler: function(e) {
                this._ShouldToggleDropdown(e) && (this.selection.removeClass("oj-focus-highlight"), this.container.removeClass("oj-focus-highlight"), a(e.target).closest("." + this._classNm + "-selected-choice").length > 0 || (this._selectChoice(null), this._opened() ? (this.close(e), "ojcombobox" === this._elemNm && this._focusSearch()) : (this.open(e), ("ojcombobox" === this._elemNm || this._hasSearchBox()) && this._focusSearch())))
            },
            _onSearchInputHandler: function(e) {
                this._SyncRawValue(e, !0)
            },
            _containerKeydownHandler: function(e) {
                if (!this._isInterfaceEnabled()) return;
                this.keydowns += 1;
                var t = this.selection.find("." + this._classNm + "-selected-choice.oj-focus"),
                    i = t.prev("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)"),
                    s = t.next("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)"),
                    o = "ojselect" !== this._elemNm || this._userTyping ? b.getCursorInfo(this.search) : b.getCursorInfo(this.selection);
                const n = e.which || e.keyCode;
                if (t.length && (n === b.KEY.LEFT || n === b.KEY.RIGHT || n === b.KEY.BACKSPACE || n === b.KEY.DELETE || n === b.KEY.ENTER)) {
                    var a = t;
                    return n === b.KEY.LEFT && i.length ? a = i : n === b.KEY.RIGHT ? a = s.length ? s : null : n === b.KEY.BACKSPACE ? (this._unselect(t.first(), e), this._resetSearchWidth(), a = i.length ? i : s) : n === b.KEY.DELETE ? (this._unselect(t.first(), e), this._resetSearchWidth(), a = s.length ? s : null) : n === b.KEY.ENTER && (a = null), this._selectChoice(a), e.preventDefault(), void(a && a.length || this.open(e))
                }
                if (this._isBackNavAllowed() && 0 === o.offset && !o.length && (n === b.KEY.BACKSPACE && 1 === this.keydowns || n === b.KEY.LEFT)) return this._selectChoice(this.selection.find("." + this._classNm + "-selected-choice:not(." + this._classNm + "-locked)").last()), void e.preventDefault();
                if (this._selectChoice(null), !b.KEY.isControl(e) && !b.KEY.isFunctionKey(e)) {
                    switch (n) {
                        case b.KEY.UP:
                        case b.KEY.DOWN:
                            return this._opened() ? this._moveHighlight(n === b.KEY.UP ? -1 : 1) : this.open(e), void e.preventDefault();
                        case b.KEY.PAGE_UP:
                        case b.KEY.PAGE_DOWN:
                            return void e.preventDefault();
                        case b.KEY.ENTER:
                            return this._opened() && (this._selectHighlighted(null, e, !0), e.stopPropagation()), void e.preventDefault();
                        case b.KEY.TAB:
                            return void this.close(e);
                        case b.KEY.ESC:
                            return this._cancel(e), void e.preventDefault()
                    }
                    this._userTyping = !0
                }
            },
            _isBackNavAllowed: function() {
                return "ojselect" !== this._elemNm || document.activeElement !== this.search[0]
            },
            _enableInterface: function() {
                C.superclass._enableInterface.apply(this, arguments) && this.search.prop("disabled", !(this._isInterfaceEnabled() || b.isReadonly(this.ojContext)))
            },
            _initSelection: function(e) {
                var t = this.getVal();
                if (null !== t && 0 !== t.length || "oj-select" !== this._classNm && "" !== this.opts.element.text().trim() || (this._updateSelection(e || []), this.close(), this._clearSearch()), this.datalist || null !== this.getVal() && this.getVal().length) {
                    var i, s = this;
                    i = this.datalist ? this.datalist : this.opts.element, b.applyValueOptions(this, this.opts) || this.opts.initSelection.call(null, i, function(e) {
                        null != e && 0 !== e.length && (s._updateSelection(e), s.close(), s._clearSearch())
                    })
                }
            },
            _focus: function() {
                this.close(), this.search.focus()
            },
            _updateSelection: function(e) {
                var t, i = [],
                    s = [],
                    o = this;
                a(e).each(function() {
                    i.indexOf(o.id(this)) < 0 && (i.push(o.id(this)), s.push(this))
                }), s && s.length > 0 && ("oj-combobox" === this._classNm || "oj-select" === this._classNm) && ("init" !== this.opts.fetchType && this._skipSetValueOptions ? b.isDataProvider(this.opts.options) && (s = b.findOptions(this.opts.valueOptions, i)) : this.setValOpts(s)), this.selection.find("." + this._classNm + "-selected-choice").remove(), this.selection.find(".oj-select-default").remove(), this._updateAriaDescribedBy(null, !0), t = s.length - 1, a(s).each(function(e, i) {
                    var s = e === t;
                    o._addSelectedChoice(i, s)
                }), this.currentItem = s, this.currentValue = i, o._postprocessResults()
            },
            _updateAriaDescribedBy: function(e, t) {
                var i = this._contentElement,
                    s = this.selection,
                    o = i.attr("aria-describedby") || "",
                    n = !1,
                    a = o;
                t && (this._ariaDescribedByAdded.forEach(function(e) {
                    a = a.replace(e, ""), n = !0
                }), a = a.trim().replace(/\s\s+/g, " "), this._ariaDescribedByAdded = []), e && (a = (a + " " + e).trim(), this._ariaDescribedByAdded.push(e), n = !0), n && (i.attr("aria-describedby", a), "oj-combobox" === this._classNm && s.attr("aria-describedby", a))
            },
            _onSelect: function(e, t, i) {
                if (!this._triggerSelect(e)) return !1;
                var s;
                t && t.trigger && (s = {
                    optionMetadata: {
                        trigger: t.trigger
                    }
                });
                var o = this.getVal() ? this.getVal().slice(0) : [],
                    n = this.getValOpts() ? this.getValOpts().slice(0) : [],
                    a = n.slice(0),
                    r = "oj-combobox" === this._classNm || "oj-select" === this._classNm;
                this.ojContext.isValid() || (o = this.currentValue.slice(0), a = this.currentItem.slice(0), this.forceApplyConverter = !0);
                var l, h, c, u, d, p, f = [],
                    m = [],
                    v = b.getOpts(this.ojContext),
                    _ = !!v && b.isDataProvider(v.options),
                    g = null,
                    y = null,
                    j = this.hasUncommittedValue;
                if (_)
                    for (var x = 0; x < a.length; x++) d = a[x], c = this.id(d), a[x] = b.findOptionFromResult(this, c, d), f.push(a[x].data), m.push(a[x].metadata);
                if (h = this.sanitizeData(e, !0), l = this.sanitizeData(e), c = this.id(h), u = this.id(l), b.getDataProviderKeySet(this.ojContext, o).has(u) || "" === c || (o.push(c), r && (p = b.findOptionFromResult(this, u, l), a.push(p), this.shouldApplyConverter && l === p || this._idsFromDropdown.add(u), _ && (f.push(p.data), m.push(p.metadata)))), r && (this._skipSetValueOptions = !0, this.setValOpts(a)), s = b.getContextWithExtraData(s, v, f, m), this.hasUncommittedValue = !1, (g = this.setVal(o, i, s)) instanceof Promise) y = g.then(this._bind(function(t) {
                    return this._afterOnSelectSetVal(t, e, n, j), t
                }));
                else {
                    var C = !1 !== g;
                    this._afterOnSelectSetVal(C, e, n, j), y = g
                }
                return this.opts.closeOnSelect && this.close(i), t && t.trigger === b.ValueChangeTriggerTypes.BLUR || "ojcombobox" !== this._elemNm || this._focusSearch(), y
            },
            _afterOnSelectSetVal: function(e, t, i, s) {
                var o = "oj-combobox" === this._classNm || "oj-select" === this._classNm;
                !1 === e && (this.hasUncommittedValue = s, o && this.setValOpts(i)), this._skipSetValueOptions = !1, delete this.forceApplyConverter, !this.select && this.opts.closeOnSelect || this._postprocessResults(t, !1, !0 === this.opts.closeOnSelect), this.opts.closeOnSelect && this.ojContext.isValid() && this._resetSearchWidth()
            },
            _cancel: function(e) {
                this.close(e), "ojcombobox" === this._elemNm && this._focusSearch()
            },
            _createChoice: function(e, t, i) {
                var s;
                if (e)
                    if (t) {
                        if (s = a("<li class='" + this._classNm + "-selected-choice'>    <div></div></li>"), !i) {
                            var o = f.getTranslatedString("oj-converter.plural-separator"),
                                n = a("<span class='" + this._classNm + "-selected-choice-separator'></span>");
                            n.text(o), s.append(n)
                        }
                    } else s = a("<li class='" + this._classNm + "-selected-choice'>    <div></div>    <span role='button' aria-label='remove' class='" + this._classNm + "-clear-entry       oj-component-icon oj-default oj-clickable-icon-nocontext " + this._classNm + "-clear-entry-icon' tabindex='-1'>    </span></li>");
                else s = a("<li class='" + this._classNm + "-selected-choice " + this._classNm + "-locked'><div></div></li>");
                return s
            },
            _addSelectedChoice: function(e, t) {
                var i, s = !e.locked,
                    o = this.ojContext.options.readOnly,
                    n = this._createChoice(s, o, t);
                if (void 0 !== (i = b.getLabel(e))) {
                    var r = this._classNm + "-selected-choice-label-" + b.nextUid();
                    n.find("div").addClass(this._classNm + "-selected-choice-label").text(i).attr("id", r), n.find("." + this._classNm + "-clear-entry").attr("aria-label", i + " remove"), n.attr("valueText", i), n.attr("aria-labelledby", r), this._updateAriaDescribedBy(r, !1)
                }
                s && !o && n.find("." + this._classNm + "-clear-entry").on("mousedown", b.killEvent).on("click dblclick", this._bind(function(e) {
                    if (this._isInterfaceEnabled()) {
                        var t = b._addBusyState(this.container, "unselecting " + i);
                        a(e.target).closest("." + this._classNm + "-selected-choice").fadeOut("fast", this._bind(function() {
                            this._unselect(a(e.target), e), this.selection.find("." + this._classNm + "-selected-choice.oj-focus").removeClass("oj-focus"), this.close(e), "ojcombobox" === this._elemNm && this._focusSearch(), t()
                        })).dequeue(), b.killEvent(e), e.stopPropagation()
                    }
                })), n.data(this._elemNm, e), "ojcombobox" === this._elemNm ? n.insertBefore(this.searchContainer) : this.selection.find(".oj-select-choices").append(n)
            },
            _syncValueOptions: function(e, t, i) {
                var s, o = [],
                    a = [],
                    r = [],
                    l = b.getOpts(this.ojContext),
                    h = !!l && b.isDataProvider(l.options);
                if (t && i) {
                    for (var c = 0; c < t.length; c++)
                        for (var u = 0; u < i.length; u++) {
                            var d = i[u];
                            n.Object.compareValues(d.value, t[c]) && (h && (s = this.id(d), d = b.findOptionFromResult(this, s, d), a.push(d.data), r.push(d.metadata)), o.push(d))
                        }
                    b.setValueOptions(e, o), this.currentItem = o
                }
                return b.getContextWithExtraData(null, l, a, r)
            },
            _unselect: function(e, t) {
                var i = (this.getVal() || []).slice(0),
                    s = (this.getValOpts() || []).slice(0),
                    o = e.closest("." + this._classNm + "-selected-choice");
                if (0 === o.length) throw new Error("Invalid argument: " + o + ". Must be ." + this._classNm + "-selected-choice");
                var n = o.data(this._elemNm);
                if (n) {
                    var a, r, l;
                    this.ojContext.isValid() ? a = (this.getValOpts() || []).slice(0) : (i = this.currentValue.slice(0), a = this.currentItem.slice(0), this.forceApplyConverter = !0);
                    var h = i.indexOf(this.id(n)); - 1 !== h && (i.splice(h, 1), this._idsFromDropdown.delete(this.id(n)), r = this._syncValueOptions(this.ojContext, i, a), this._skipSetValueOptions = !0, (l = this.setVal(i, t, r)) instanceof Promise ? l.then(this._bind(function(e) {
                        this._afterUnselectSetValue(e, o, s)
                    })) : this._afterUnselectSetValue(l, o, s))
                }
            },
            _afterUnselectSetValue: function(e, t, i) {
                ("oj-combobox" === this._classNm || "oj-select" === this._classNm) && !1 === e && this.setValOpts(i), this._skipSetValueOptions = !1, delete this.forceApplyConverter, !1 !== e && this.select && this._postprocessResults(), t.remove()
            },
            _postprocessResults: function(e, t, i) {
                if (this.ojContext.isValid()) {
                    var s = this.getVal(),
                        o = this.results.find(".oj-listbox-result"),
                        n = this.results.find(".oj-listbox-result-with-children"),
                        a = this;
                    b.each2(o, function(e, t) {
                        var i = a.id(t.data(a._elemNm));
                        s && s.indexOf(i) >= 0 && (t.addClass("oj-selected"), t.find(".oj-listbox-result-selectable").addClass("oj-selected"))
                    }), b.each2(n, function(e, t) {
                        t.is(".oj-listbox-result-selectable") || 0 !== t.find(".oj-listbox-result-selectable:not(.oj-selected)").length || t.addClass("oj-selected")
                    }), this._processAriaLabelForHierarchy(), !o.filter(".oj-listbox-result:not(.oj-selected)").length > 0 && "oj-select" !== this._classNm && this.close(null, !0)
                }
            },
            _isDataSelected: function(e) {
                var t = this.getVal();
                if (!t || 0 === t.length) return !1;
                for (var i = e.results, s = 0; s < i.length; s++)
                    if (-1 === t.indexOf(this.id(i[s]))) return !1;
                return !0
            },
            _resetSearchWidth: function() {},
            setVal: function(e, t, i) {
                var s = [],
                    o = e;
                this.valHasChanged(), "string" == typeof e && (o = b.splitVal(e, this.opts.separator));
                for (var a = 0; a < o.length; a++) s.indexOf(o[a]) < 0 && s.push(o[a]);
                var r = {
                    doValueChangeCheck: !1
                };
                if (i && (r._context = i), !this._skipSetValueOptions) {
                    var l, h = b.getLastQueryResult(this);
                    h && (l = b.findOptions(h, o)), l && l.length && b.setValueOptions(this.ojContext, l)
                }
                var c = this.getVal(),
                    u = null;
                return n.Object.compareValues(c, s) && !b.hasInvalidComponentMessages(this.ojContext) || (u = this.ojContext._SetValue(s, t, r)), u instanceof Promise ? u.then(this._bind(function(e) {
                    this._afterSetValue(s)
                })) : (this._afterSetValue(s), u)
            },
            _afterSetValue: function(e) {
                (this.ojContext.isValid() || 0 === e.length) && (this.currentValue = e), this.search.attr("aria-activedescendant", this.opts.element.attr("id"))
            },
            _getSelectionData: function() {
                var e = null,
                    t = this,
                    i = null,
                    s = this.container.find("." + this._classNm + "-selected-choice");
                return s && (e = [], s.each(function() {
                    null != (i = a(this).data(t._elemNm)) && e.push(i)
                })), e
            },
            _clearSearchOnBlur: function() {
                !this._opened() && "oj-select" !== this._classNm && this.ojContext.isValid() && this._clearSearch()
            },
            _GetContentWrapper: function() {
                return this.container[0].querySelector(".oj-text-field-container")
            },
            _InvokeSelection: function(e, t) {
                const i = b.getOpts(this.ojContext),
                    s = !!i && b.isDataProvider(i.options),
                    o = [],
                    n = [],
                    a = [],
                    r = [];
                e.forEach(function(e) {
                    o.push(this.id(e)), n.push({
                        label: e.label,
                        value: this.id(e)
                    }), s && (a.push(e.data), r.push(e.metadata))
                }.bind(this));
                let l = {
                    optionMetadata: {
                        trigger: t.trigger
                    }
                };
                l = b.getContextWithExtraData(l, i, a, r), this.setValOpts(n), this._skipSetValueOptions = !0;
                const h = this.setVal(o, null, l);
                return h instanceof Promise ? h.then(this._bind(function() {
                    this._skipSetValueOptions = !1
                })) : (this._skipSetValueOptions = !1, Promise.resolve(h))
            }
        }),
        O = b.clazz(C, {
            _elemNm: "ojcombobox",
            _classNm: "oj-combobox",
            _COMPONENT_CLASSLIST: "oj-combobox oj-combobox-multi oj-component",
            _CreateContentElements: function() {
                return a(["<div class='oj-text-field-container' role='presentation'> ", "<ul class='oj-combobox-choices oj-combobox-accessible-container'>", "  <li class='oj-combobox-search-field'><span class='oj-helper-hidden'>&nbsp;</span>", "    <input type='text' role='combobox' aria-expanded='false' aria-autocomplete='list'", "           autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='oj-combobox-input'>", "  </li>", "</ul>", "</div>", "<div class='oj-combobox-description oj-helper-hidden-accessible'></div>", "<div class='oj-listbox-drop oj-listbox-drop-multi'>", "   <div class='oj-listbox-loader-wrapper'></div>", "   <ul class='oj-listbox-results' role='listbox' data-oj-context>", "   </ul>", "</div>", "<div class='oj-helper-hidden-accessible oj-listbox-liveregion' aria-live='polite'></div>"].join(""))
            },
            _opening: function(e, t) {
                this._resizeSearch(), O.superclass._opening.apply(this, arguments), this._focusSearch(), t || this._updateResults(!0), this.search.focus()
            },
            _setPlaceholder: function() {
                const e = this.ojContext.isValid(),
                    t = b.isValueForPlaceholder(!0, this.getVal()) && b.isValueOptionsForPlaceholder(!0, this.getValOpts()),
                    i = b.isValueForPlaceholder(!0, this.currentValue) && b.isValueOptionsForPlaceholder(!0, this.currentItem);
                (e && t || !e && i) && (O.superclass._setPlaceholder.apply(this, arguments), this._resizeSearch())
            },
            _clearSearch: function() {
                var e = this._getPlaceholder(),
                    t = this._getMaxSearchWidth();
                null != e && b.isValueForPlaceholder(!0, this.getVal()) && b.isValueOptionsForPlaceholder(!0, this.getValOpts()) ? (this.search.attr("placeholder", e), this.search.val("").width(t > 0 ? t : this.container.css("width")), this.searchContainer.width("100%")) : (this.search.attr("placeholder", ""), this.search.val("").width(10), this.searchContainer.width("auto"))
            },
            _resetSearchWidth: function() {
                this.search.width(10)
            },
            _getMaxSearchWidth: function() {
                return this.selection.width() - b.getSideBorderPadding(this.search)
            },
            _textWidth: function(e) {
                var t = document.createElement("span"),
                    i = document.createTextNode(e);
                t.style.display = "none", t.appendChild(i), a("body").append(t);
                var s = a("body").find("span:last").width();
                return a("body").find("span:last").remove(), s
            },
            _resizeSearch: function() {
                var e, t, i, s, o = b.getSideBorderPadding(this.search);
                e = this._textWidth(this.search.val()) + 10, t = this.search.offset().left, (s = (i = this.selection.width()) - (t - this.selection.offset().left) - o) < e && (s = i - o), s < 40 && (s = i - o), s <= 0 && (s = e), this.search.width(Math.floor(s))
            },
            _UpdateValueOptionsWithConverter: function() {
                if (!this._skipSetValueOptions) {
                    var e = (this.getValOpts() || []).slice(),
                        t = [];
                    if (0 !== e.length) {
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            this._idsFromDropdown.has(this.id(s)) ? t.push(s) : t.push(this.parseData(s))
                        }
                        this.setValOpts(t)
                    }
                }
            },
            _SyncRawValue: function(e, t) {
                let i = (this.getValOpts() || []).slice(0),
                    s = this.search.val(),
                    o = i.map(function(e) {
                        return e.label
                    });
                null != s && "" !== s && o.push(s), !0 === t && (this.hasUncommittedValue = !0), this.ojContext._SetRawValue(o, e)
            }
        }),
        S = b.clazz(x, {
            _enableInterface: function() {
                S.superclass._enableInterface.apply(this, arguments) && this.search.prop("disabled", !(this._isInterfaceEnabled() || b.isReadonly(this.ojContext)))
            },
            _focus: function() {
                this.close()
            },
            _destroy: function() {
                a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), S.superclass._destroy.apply(this, arguments)
            },
            _clear: function(e) {
                if (this.selection.data(this._elemNm)) {
                    e || m.warn("Event should not be null when user modified the value in UI");
                    var t = this.ojContext._IsCustomElement() ? "" : [];
                    "oj-select" === this._classNm && this.ojContext._IsRequired() || this.setVal(t, e), this.search.val(""), this.selection.removeData(this._elemNm)
                }
                this._setPlaceholder()
            },
            _initSelection: function() {
                if (!b.applyValueOptions(this, this.opts)) {
                    var e = this.datalist ? this.datalist : this.opts.element;
                    this.opts.initSelection.call(null, e, this._bind(this._updateSelectedOption))
                }
            },
            _containerKeydownHandler: function(e) {
                if (!this._isInterfaceEnabled()) return;
                const t = e.which || e.keyCode;
                if (t !== b.KEY.PAGE_UP && t !== b.KEY.PAGE_DOWN) {
                    switch (t) {
                        case b.KEY.UP:
                        case b.KEY.DOWN:
                            return this._opened() ? this._moveHighlight(t === b.KEY.UP ? -1 : 1) : this.open(e), void e.preventDefault();
                        case b.KEY.ENTER:
                            return this._opened() && e.stopPropagation(), this._selectHighlighted(null, e, !0), e.preventDefault(), void(this._opened() || (this._userTyping = !1));
                        case b.KEY.TAB:
                            return this.close(e), void(this._userTyping = !1);
                        case b.KEY.ESC:
                            return this._opened() && e.preventDefault(), this._cancel(e), void(this._userTyping = !1)
                    }
                    this._userTyping = !0
                } else e.preventDefault()
            },
            _containerKeyupHandler: function(e) {
                this._isInterfaceEnabled() && (this._opened() || this.open(e))
            },
            _initContainer: function() {
                var e = this.container,
                    t = this.opts.rootAttributes,
                    i = t && t.id ? t.id : this._getAttribute("id") || b.nextUid(),
                    s = this._getTransferredAttribute("aria-label"),
                    o = this._getTransferredAttribute("aria-controls"),
                    n = e.find("." + this._classNm + "-choice");
                this.selection = n, this._contentElement = "ojcombobox" === this._elemNm ? this.search : this.selection, n.attr("id", this._classNm + "-choice-" + i), n.find("." + this._classNm + "-input").attr("id", this._classNm + "-input-" + i), this.results.attr("id") || this.results.attr("id", "oj-listbox-results-" + i);
                var r = e.find(".oj-listbox-liveregion");
                if (r.length && r.attr("id", "oj-listbox-live-" + i), "oj-select" !== this._classNm && this.search.attr("aria-owns", this.results.attr("id")), !this.ojContext._IsCustomElement()) {
                    var l = a("label[for='" + this._getAttribute("id") + "']");
                    l.attr("id") || l.attr("id", this._classNm + "-label-" + i), this.search.attr("aria-labelledby", l.attr("id")), this.opts.element.attr("aria-labelledby", l.attr("id")), this.search.attr("id") && l.attr("for", this.search.attr("id"))
                }
                s && this._contentElement.attr("aria-label", s), o && this._contentElement.attr("aria-controls", o), n.on("keydown", this._bind(this._containerKeydownHandler)), n.on("mousedown", this._bind(function(e) {
                    if (this._ShouldToggleDropdown(e)) {
                        this.opts.element.prop("disabled") && b.killEvent(e), n.removeClass("oj-focus-highlight"), this.container.removeClass("oj-focus-highlight"), this._opened() ? this.close(e) : this._isInterfaceEnabled() && this.open(e);
                        var t = this.search.parent().attr("aria-hidden");
                        t && "true" === t ? this.selection.focus() : this.search.focus(), a(e.target).hasClass("oj-combobox-open-icon") && b.killEvent(e), this.container.addClass("oj-active")
                    }
                })), n.on("mouseup", this._bind(function() {
                    this.container.removeClass("oj-active")
                })), n.on("focus", this._bind(function(e) {
                    b.killEvent(e)
                })), this.search.on("compositionstart", this._bind(function() {
                    this.ojContext._isComposing = !0
                })), this.search.on("compositionend", this._bind(function(e) {
                    this.ojContext._isComposing = !1, this._onSearchInputHandler(e)
                })), this.search.on("input", this._bind(function(e) {
                    this.ojContext._isComposing && !this._isAndroidDevice || this._onSearchInputHandler(e)
                })), this.search.on("focus", this._bind(function() {
                    this._previousDisplayValue = this.search.val()
                })), this.search.on("blur keyup", this._bind(function(e) {
                    if ("keyup" !== e.type || 10 === e.keyCode || 13 === e.keyCode) {
                        if (this._ShouldCreateNewEntry("keyup" === e.type) && ("keyup" !== e.type || !this.enterKeyEventHandled)) {
                            var t = this.search.val();
                            this.shouldApplyConverter = !0;
                            var i = this.opts.manageNewEntry(t, !0),
                                s = {
                                    trigger: "blur" === e.type ? b.ValueChangeTriggerTypes.BLUR : b.ValueChangeTriggerTypes.ENTER_PRESSED
                                },
                                o = this.selection.data(this._elemNm),
                                n = this.getVal(),
                                a = null;
                            if (!o && "" !== t || o && o.label !== t || !this.ojContext.isValid() && t !== this._previousDisplayValue) {
                                var r = this._onSelect(i, s, e);
                                a = r, "blur" !== e.type && (r instanceof Promise ? r.then(this._bind(function(t) {
                                    t && (this._triggerUpdateEvent(i, s, e), this._triggerValueUpdatedEvent(i, n))
                                })) : !1 !== r && (this._triggerUpdateEvent(i, s, e), this._triggerValueUpdatedEvent(i, n)))
                            } else "keyup" === e.type && (o && o.label === t && (i = o), this.close(e), this._triggerUpdateEvent(i, s, e), this._triggerValueUpdatedEvent(i, n));
                            a instanceof Promise ? a.then(this._bind(function() {
                                delete this.shouldApplyConverter
                            })) : delete this.shouldApplyConverter
                        }
                        "blur" === e.type && (this.search.removeClass(this._classNm + "-focused"), this.container.removeClass("oj-focus")), this.enterKeyEventHandled = !1
                    }
                })), this._initContainerWidth(), this.opts.element.hide().attr("aria-hidden", !0), this._setPlaceholder()
            },
            _onSearchInputHandler: function(e) {
                this._SyncRawValue(e, !0)
            },
            _prepareOpts: function() {
                var e = S.superclass._prepareOpts.apply(this, arguments),
                    t = this,
                    i = e.element.get(0).tagName.toLowerCase();
                if ("input" === i && e.element.attr("list") || "select" === i && e.element.children().length > 0 || e.ojContext._IsCustomElement() && !e.options || e.list) {
                    var s = e.list ? "li" : "option";
                    e.ojContext._IsCustomElement() && (s = "oj-option"), e.initSelection = function(o, r) {
                        var l, h = t.getVal();
                        t._idsFromDropdown.clear(), Array.isArray(h) && !e.ojContext._IsCustomElement() && (h = h[0]), null != h && (l = t._optionToData(o.find(s).filter(function() {
                            var e;
                            return "li" === s ? e = this.getAttribute("oj-data-value") : "option" !== s && "oj-option" !== s || (e = this.value), n.Object.compareValues(e, h)
                        })), "select" === i && void 0 === l && (h = null)), null == h && (l = t._optionToData(o.find(s).filter(function() {
                            return "li" === s ? !0 === this.getAttribute("oj-data-selected") : "option" === s && this.selected
                        })), "oj-select" === t._classNm && void 0 === l && e.ojContext._IsCustomElement() && (l = t._optionToData(a(o.find(s)[0])), m.info("Select identified by " + t.container.attr("id") + " defaults to first option because the value is not set."))), null != l && t._idsFromDropdown.add(e.id(l)), r(l)
                    }, e.validate = function(e, i) {
                        var o;
                        return null != i && (o = t._optionToData(e.find(s).filter(function() {
                            var e;
                            return "li" === s ? e = this.getAttribute("oj-data-value") : "option" !== s && "oj-option" !== s || (e = this.value), n.Object.compareValues(e, i)
                        }))), !!o
                    }
                } else("options" in e || this.getVal() && this.getVal().length > 0) && (b.isDataProvider(e.options) || a.isFunction(e.options) ? e.initSelection = function(s, o) {
                    var r = function(t, i) {
                            for (var s = 0, o = t.length; s < o; s++) {
                                var a = t[s];
                                if (n.Object.compareValues(i, e.id(a))) return a;
                                if (a.children) {
                                    var l = r(a.children, i);
                                    if (l) return l
                                }
                            }
                            return null
                        },
                        l = t._getValueItem(),
                        h = null;
                    if (t._idsFromDropdown.clear(), null != l) {
                        var c = b.getLastQueryResult(t);
                        if (c && (h = r(c, l)), !h) {
                            var u = t.currentItem;
                            u && u.length && n.Object.compareValues(l, e.id(u[0])) && (h = u[0], m.info("Select identified by " + t.container.attr("id") + " defaults to first option due to invalid value."))
                        }
                        if (h || t.valueChangeTrigger) null != h && t._idsFromDropdown.add(e.id(h)), o(h);
                        else {
                            b.updateLoadingState(t, !0);
                            const i = function() {
                                b.updateLoadingState(t, !1)
                            };
                            e.query({
                                value: [l],
                                callback: "function" != typeof o ? i : function(s) {
                                    i(), (!b.isDataProvider(e.options) || n.Object.compareValues(l, t.getVal()) && !b.isValueChanged(t.ojContext)) && (s && s.results && null != (h = r(s.results, l)) && t._idsFromDropdown.add(e.id(h)), o(h), b.setValueChanged(t.ojContext, void 0))
                                },
                                cleanup: a.noop
                            })
                        }
                    } else "select" !== i || t.ojContext._HasPlaceholderSet() ? o(h) : b.fetchFirstBlockFromDataProvider(t.container, e, 1).then(function(e) {
                        var i = null != t._getValueItem();
                        e && e.length > 0 && !i && (o(e[0]), m.info("Select identified by " + t.container.attr("id") + " defaults to first option because the value is not set."))
                    })
                } : (e.initSelection = function(s, o) {
                    var r = t._getValueItem(),
                        l = "select" === i && t.ojContext._HasPlaceholderSet() && !t.ojContext._IsRequired(),
                        h = l ? t._getPlaceholder() : null,
                        c = null;
                    t._idsFromDropdown.clear(), e.query({
                        matcher: function(t, i, s) {
                            var o = n.Object.compareValues(r, e.id(s));
                            return o && (c = s), null == h && (h = s), o
                        },
                        callback: a.isFunction(o) ? function() {
                            null != c && t._idsFromDropdown.add(e.id(c)), c || "select" !== i || t.ojContext._isOptionDataPending() || (c = h, m.info("Select identified by " + t.container.attr("id") + " defaults to " + (l ? "placeholder" : "first option") + " due to invalid value.")), o(c)
                        } : a.noop,
                        cleanup: a.noop
                    })
                }, e.validate = function(t, i) {
                    var s = i,
                        o = null;
                    return e.query({
                        matcher: function(t, i, a) {
                            var r = n.Object.compareValues(s, e.id(a));
                            return r && (o = a), r
                        },
                        callback: a.noop,
                        cleanup: a.noop
                    }), !!o
                }));
                return e
            },
            _postprocessResults: function(e, t, i) {
                var s, o = -1,
                    a = this;
                s = this._findHighlightableChoices(), b.each2(s, function(e, t) {
                    var i = a._getValueItem();
                    return null == i || !n.Object.compareValues(i, a.id(t.data(a._elemNm))) || (o = e, !1)
                }), !1 !== i && !0 === t && o >= 0 && this._highlight(o, !0, !0), this._processAriaLabelForHierarchy()
            },
            _onSelect: function(e, t, i) {
                if (!this._triggerSelect(e)) return !1;
                var s, o, n = b.getOpts(this.ojContext);
                t && t.trigger && (s = {
                    optionMetadata: {
                        trigger: t.trigger
                    }
                }), s = b.getContextWithExtraData(s, n, e.data, e.metadata), this.close(i);
                var a, r = this.sanitizeData(e, !0),
                    l = this.sanitizeData(e),
                    h = this.getValOpts(),
                    c = l,
                    u = this.hasUncommittedValue,
                    d = null,
                    p = null,
                    f = this.id(r),
                    m = this.id(l);
                if (this._idsFromDropdown.clear(), 0 === f.length ? (o = this.ojContext._IsCustomElement() ? b.getValueForPlaceholder(!1) : [], c = b.getFixupValueOptionsForPlaceholder(!1), a = b.findOptionFromResult(this, o, c)) : (o = f, a = b.findOptionFromResult(this, m, c), this.shouldApplyConverter && c === a || this._idsFromDropdown.add(m)), "oj-combobox" !== this._classNm && "oj-select" !== this._classNm || (this._skipSetValueOptions = !0, this.setValOpts(a)), this.hasUncommittedValue = !1, (d = this.setVal(o, i, s)) instanceof Promise) p = d.then(this._bind(function(e) {
                    return this._afterOnSelectSetVal(e, h, u), e
                }));
                else {
                    var v = !1 !== d;
                    this._afterOnSelectSetVal(v, h, u), p = d
                }
                return t && t.trigger === b.ValueChangeTriggerTypes.BLUR || "ojcombobox" !== this._elemNm || this._focusSearch(), p
            },
            _afterOnSelectSetVal: function(e, t, i) {
                var s = "oj-combobox" === this._classNm || "oj-select" === this._classNm;
                !1 === e && (this.hasUncommittedValue = i, s && this.setValOpts(t)), this._skipSetValueOptions = !1, delete this.shouldApplyConverter
            },
            _clearSearch: function() {
                this.search.val("")
            },
            _getValueItem: function() {
                var e = null,
                    t = this.getVal();
                return null != t && (e = !this.ojContext._IsCustomElement() && t.length ? t[0] : t), e
            },
            _getSelectionData: function() {
                return this.selection.data(this._elemNm)
            },
            _GetContentWrapper: function() {
                return this.container[0].querySelector(".oj-text-field-middle")
            },
            _ShouldCreateNewEntry: function(e) {
                if (!this.opts.manageNewEntry) return !1;
                const t = e ? ".oj-hover.oj-listbox-result-keyboard-focus" : ".oj-hover",
                    i = this.results.find(t);
                return void 0 !== this.search.val() && 0 === i.length
            },
            _ShouldToggleDropdown: function(e) {
                const t = S.superclass._ShouldToggleDropdown.apply(this, arguments),
                    i = "end" === e.target.getAttribute("slot") || a(this._endSlot).find(e.target).length > 0;
                return t && !i
            },
            _InvokeSelection: function(e, t) {
                if (!e.length) return Promise.resolve(!1);
                const i = e[0];
                return new Promise(this._bind(function(e, s) {
                    const o = this._onSelect(i, t, null);
                    o instanceof Promise ? o.then(e, s).catch(s) : e(o)
                }))
            }
        }),
        E = b.clazz(S, {
            _elemNm: "ojcombobox",
            _classNm: "oj-combobox",
            _COMPONENT_CLASSLIST: "oj-combobox oj-component",
            _CreateContentElements: function() {
                return a(["<div class='oj-text-field-container oj-text-field-has-end-slot' role='presentation'>", "  <div class='oj-combobox-choice oj-combobox-accessible-container' tabindex='-1' role='presentation'>", "   <div class='oj-text-field-middle'>", "     <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'", "       spellcheck='false' class='oj-combobox-input' role='combobox' aria-expanded='false' aria-autocomplete='list' />", "   </div>", "   <abbr class='oj-combobox-clear-entry' role='presentation'></abbr>", "   <span class='oj-combobox-divider' role='presentation'></span>", "   <span class='oj-text-field-end'>", "     <a class='oj-combobox-arrow oj-combobox-icon oj-component-icon oj-clickable-icon-nocontext oj-combobox-open-icon'", "       role='presentation' aria-label='expand'></a>", "   </span>", "  </div>", "</div>", "<div class='oj-listbox-drop' role='presentation'>", "   <div class='oj-listbox-loader-wrapper'></div>", "   <ul class='oj-listbox-results' role='listbox' data-oj-context>", "   </ul>", "</div>", "<div class='oj-helper-hidden-accessible oj-listbox-liveregion' aria-live='polite'></div>"].join(""))
            },
            _ConfigureSlots: function() {
                if (null != this.container && this.ojContext._IsCustomElement()) {
                    var e = this.container,
                        t = v.CustomElementUtils.getSlotMap(e[0]).end;
                    t && (e.find(".oj-combobox-divider").remove(), e.find(".oj-combobox-arrow").remove(), e.find(".oj-combobox-choice").append(t), this._endSlot = t)
                }
            },
            _RestoreSlots: function() {
                var e = this._endSlot;
                null != e && null != this.container && this.ojContext._IsCustomElement() && this.container.append(e), this._endSlot = null
            },
            _triggerValueUpdatedEvent: function(e, t) {
                if (this.ojContext._IsCustomElement()) {
                    var i = this.id(e);
                    if (null == i && (i = e.label ? e.label : ""), this.ojContext.isValid()) {
                        var s = {},
                            o = this.ojContext.OuterWrapper;
                        s.value = i, s.previousValue = t;
                        var n = new CustomEvent("ojValueUpdated", {
                            detail: s
                        });
                        o.dispatchEvent(n)
                    }
                }
            },
            _enable: function(e) {
                E.superclass._enable.apply(this, arguments), this._enabled ? this.container.find(".oj-combobox-arrow").removeClass("oj-disabled") : this.container.find(".oj-combobox-arrow").addClass("oj-disabled")
            },
            _opening: function(e, t) {
                E.superclass._opening.apply(this, arguments), this._focusSearch(), t || this._updateResults(!0)
            },
            _containerKeydownHandler: function(e) {
                "end" === e.target.getAttribute("slot") || a(this._endSlot).find(e.target).length > 0 || b.KEY.isControl(e) || b.KEY.isFunctionKey(e) || E.superclass._containerKeydownHandler.apply(this, arguments)
            },
            _updateSelection: function(e) {
                var t, i, s = [];
                if (this.selection.data(this._elemNm, e), null !== e && 0 !== e.length ? (void 0 !== (t = b.getLabel(e)) && this.search.val() !== t && this.search.val(t), this.search.removeClass(this._classNm + "-default"), s.push(e), i = t) : (this.search.val(""), this._setPlaceholder(), i = ""), this.ojContext.options.readOnly) {
                    let e = this.ojContext._getReadonlyDiv();
                    e && (e.textContent = i)
                }
                this.currentItem = s
            },
            _updateSelectedOption: function(e) {
                if (null != e) this._updateSelection(e), this.setValOpts(e);
                else {
                    var t, i, s = this.getVal();
                    null == s ? t = null : Array.isArray(s) ? s.length ? t = {
                        label: s = s[0],
                        value: s
                    } : (s = null, t = null) : t = {
                        label: s,
                        value: s
                    }, i = this.parseData(t), this._updateSelection(i), b.isValueForPlaceholder(!1, s) ? this.setValOpts(e) : this.setValOpts(i)
                }
            },
            _UpdateValueOptionsWithConverter: function() {
                if (!this._skipSetValueOptions) {
                    var e = this.getValOpts();
                    null == e || this._idsFromDropdown.has(this.id(e)) || this.setValOpts(this.parseData(e))
                }
            },
            _SyncRawValue: function(e, t) {
                !0 === t && (this.hasUncommittedValue = !0), this.ojContext._SetRawValue(this.search.val(), e)
            }
        });
    n.__registerWidget("oj.ojCombobox", a.oj.editableValue, {
        defaultElement: "<input>",
        widgetEventPrefix: "oj",
        options: {
            asyncValidators: [],
            converter: null,
            filterOnOpen: "none",
            labelledBy: null,
            placeholder: null,
            options: null,
            optionsKeys: {},
            pickerAttributes: null,
            optionRenderer: null,
            minLength: 0,
            maximumResultCount: 15,
            rawValue: null,
            required: !1,
            readOnly: !1,
            validators: [],
            valueOption: null,
            valueOptions: null,
            valueUpdated: null
        },
        widget: function() {
            return this.combobox.container
        },
        _ComponentCreate: function() {
            this._super(), b.wrapDataProviderIfNeeded(this, null), this._setup()
        },
        _AfterCreate: function() {
            if (this._super(), this._IsCustomElement()) {
                const t = this._GetContentElement()[0],
                    i = this.OuterWrapper.id,
                    s = this.options.labelledBy;
                this._initInputIdLabelForConnection(t, i, s), s && this._labelledByUpdatedForInputComp(s, t.id);
                var e = this._getRootElement();
                this._focusable({
                    element: e,
                    applyHighlight: !1,
                    afterToggle: this._handleAfterFocusToggle.bind(this, e)
                }), this.combobox && "none" === this.options.labelEdge && this.combobox.updateAriaLabelIfNeeded()
            }
        },
        _handleAfterFocusToggle: function(e, t) {
            "focusout" === t && (this._getDropdown() && e.classList.add("oj-focus"))
        },
        _InitOptions: function(t, i) {
            if (this._super(t, i), e.EditableValueUtils.initializeOptionsFromDom([{
                    attribute: "disabled",
                    validateOption: !0
                }, {
                    attribute: "placeholder"
                }, {
                    attribute: "required",
                    coerceDomValue: !0,
                    validateOption: !0
                }, {
                    attribute: "title"
                }], i, this), this.multiple = this._IsCustomElement() ? "OJ-COMBOBOX-MANY" === this.OuterWrapper.nodeName : this.options.multiple, void 0 === this.options.value) this._IsCustomElement() || (this.options.value = void 0 !== this.element.attr("value") ? b.splitVal(this.element.val(), ",") : null);
            else {
                var s = this.options.value;
                Array.isArray(s) ? this._IsCustomElement() || (s = s.slice(0)) : "string" == typeof s && (!0 === this.multiple ? s = b.splitVal(s, ",") : this._IsCustomElement() || (s = [s])), this.options.value = s
            }
        },
        _IsRequired: function() {
            return this.options.required
        },
        _labelledByUpdatedForInputComp: function(t, i) {
            e.EditableValueUtils._labelledByUpdatedForInputComp.apply(this, arguments);
            const s = e.EditableValueUtils._getOjLabelAriaLabelledBy(t, this.uuid + "_Label");
            this.combobox.updateAriaLabelledByIfNeeded(s)
        },
        _initInputIdLabelForConnection: e.EditableValueUtils._initInputIdLabelForConnection,
        _linkLabelForInputComp: e.EditableValueUtils._linkLabelForInputComp,
        _createOrUpdateReadonlyDiv: e.EditableValueUtils._createOrUpdateReadonlyDiv,
        _AfterSetOptionRequired: e.EditableValueUtils._AfterSetOptionRequired,
        _AfterSetOptionValidators: e.EditableValueUtils._AfterSetOptionValidators,
        _AfterSetOptionAsyncValidators: e.EditableValueUtils._AfterSetOptionAsyncValidators,
        _AfterSetOptionConverter: e.EditableValueUtils._AfterSetOptionConverter,
        _ResetConverter: e.EditableValueUtils._ResetConverter,
        _GetConverter: e.EditableValueUtils._GetConverter,
        _GetNormalizedValidatorsFromOption: e.EditableValueUtils._GetNormalizedValidatorsFromOption,
        _GetNormalizedAsyncValidatorsFromOption: e.EditableValueUtils._GetNormalizedAsyncValidatorsFromOption,
        _setup: function() {
            var e = {},
                t = this.multiple;
            e.element = this.element, e.ojContext = this, b.isValueForPlaceholder(t, this.options.value) && (t ? this.options.valueOptions = b.getValueOptionsForPlaceholder(this, this.options.valueOptions) : this.options.valueOption = b.getValueOptionsForPlaceholder(this, this.options.valueOption)), e = a.extend(this.options, e), this.cssOptionDefaults = c.parseJSONFromFontFamily("oj-combobox-option-defaults") || {}, this.combobox = t ? new O : new E, this.combobox._init(e), this._refreshRequired(this.options.required);
            this._resolveValueOptionsLater = b.mergeValueAndValueOptions(this, {
                doNotClearMessages: !0
            })
        },
        _refreshRequired: e.EditableValueUtils._refreshRequired,
        _AriaRequiredUnsupported: function() {
            return !1
        },
        _destroy: function() {
            this.combobox._destroy(), this._super()
        },
        _IsTextFieldComponent: function() {
            return !0
        },
        _GetContentWrapper: function() {
            if (this._IsCustomElement()) return this.combobox._GetContentWrapper()
        },
        refresh: function() {
            this._super(), this.combobox._destroy(), this._setup(), this._SetRootAttributes(), this._initComponentMessaging()
        },
        _setOptions: function(e, t) {
            var i;
            this._processSetOptions || (this._processSetOptions = []), this._processSetOptions.push({}), this._super(e, t), (i = this._processSetOptions.pop()).messagesCustom && i.messagesCustom()
        },
        _setOption: function(e, t, i) {
            var s = t,
                o = this.multiple,
                n = this._super,
                a = (this._processSetOptions || []).slice(-1)[0];
            if ("value" === e && (Array.isArray(s) ? this._IsCustomElement() || (s = s.slice(0)) : "string" == typeof s && (!0 === o ? s = b.splitVal(s, ",") : this._IsCustomElement() || (s = [s])), i && i._context && i._context.optionMetadata ? this.combobox.valueChangeTrigger = i._context.optionMetadata.trigger : this.combobox.valueChangeTrigger = null, "string" == typeof this.options.placeholder && (null == s || s && 0 === s.length || this._IsCustomElement() && b.isValueForPlaceholder(o, s)))) return b.setValueOptions(this, b.getFixupValueOptionsForPlaceholder(o)), void this._super(e, s, i);
            if ("options" === e) b.removeDataProviderEventListeners(this), b.clearDataProviderWrapper(this);
            else if ("optionsKeys" === e) b.clearDataProviderWrapper(this);
            else if ("valueOption" === e && !0 !== o) s = b.getValueOptionsForPlaceholder(this, s), this.combobox.opts.valueOption = s;
            else if ("valueOptions" === e && !0 === o) s = b.getValueOptionsForPlaceholder(this, s), this.combobox.opts.valueOptions = s;
            else if ("messagesCustom" === e && null != a) return void(a.messagesCustom = n.bind(this, e, s, i));
            if (this._super(e, s, i), "valueOption" === e && !0 !== o) b.syncValueWithValueOption(this, s, this.options.value, !1);
            else if ("valueOptions" === e && !0 === o) b.syncValueWithValueOptions(this, s, this.options.value, !1);
            else if ("value" === e) b.updateValueOptions(this.combobox);
            else if ("options" === e) b.isDataProvider(s) && (b.wrapDataProviderIfNeeded(this, this.combobox ? this.combobox.opts : null), b.addDataProviderEventListeners(this)), this.combobox.opts.options = s, this.combobox.opts = this.combobox._prepareOpts(this.combobox.opts), (this.combobox.isSearchFocused && this.combobox.shouldReopenOnNewData || this.combobox._opened()) && this.combobox._updateResults(!1, !0);
            else if ("optionsKeys" === e) b.wrapDataProviderIfNeeded(this, this.combobox ? this.combobox.opts : null);
            else if ("disabled" === e) s ? this.combobox._disable() : this.combobox._enable();
            else if ("readOnly" === e) this.combobox.applyReadonlyState();
            else if ("labelledBy" === e) {
                if (this.options.labelledBy) {
                    var r = this._GetContentElement()[0].id;
                    this._labelledByUpdatedForInputComp(this.options.labelledBy, r)
                }
            } else "maximumResultCount" === e && (this.combobox.opts.maximumResultCount = s)
        },
        _AfterSetOption: function(e, t, i) {
            switch (this._superApply(arguments), e) {
                case "required":
                    this._AfterSetOptionRequired(e);
                    break;
                case "validators":
                    this._AfterSetOptionValidators(e);
                    break;
                case "converter":
                    this.isValid() || (this._handleConverterChangeWithInvalidValue = !0), this._handleConverterChange = !0, this._AfterSetOptionConverter(e);
                    break;
                case "asyncValidators":
                    this._AfterSetOptionAsyncValidators(e);
                    break;
                case "labelHint":
                case "labelEdge":
                    this.combobox && this.combobox.updateAriaLabelIfNeeded()
            }
        },
        _GetReadonlyFocusElement: function() {
            return this.multiple ? this.widget()[0].querySelector(".oj-combobox-accessible-container") : this._super()
        },
        _NotifyDetached: function() {
            this._superApply(arguments), this.combobox.close()
        },
        _NotifyHidden: function() {
            this._superApply(arguments), this.combobox.close()
        },
        _VerifyConnectedForSetup: function() {
            return !0
        },
        _SetDisplayValue: function(e) {
            this._handleConverterChange && this.combobox._UpdateValueOptionsWithConverter(), b.applyValueOptions(this.combobox, this.options) ? this.multiple && this.combobox._clearSearch() : this.combobox._initSelection(), this._resolveValueOptionsLater = !1, this._handleConverterChange = !1
        },
        _GetDisplayValue: function() {
            var e = null,
                t = this.combobox._getSelectionData();
            if (null != t)
                if (this.multiple)
                    if (e = [], Array.isArray(t))
                        for (var i = 0; i < t.length; i++) e.push(b.getLabel(t[i]));
                    else e.push(b.getLabel(t));
            else e = Array.isArray(t) && t.length > 0 ? b.getLabel(t[0]) : b.getLabel(t);
            else e = this._super();
            return e
        },
        _SetPlaceholder: function(e) {
            this.combobox && (this.combobox.opts.placeholder = e, this.combobox._setPlaceholder && this.combobox._setPlaceholder())
        },
        _parseValue: function(e, t, i) {
            var s, o = e;
            if (!this.combobox.shouldApplyConverter && !this.combobox.forceApplyConverter && !this._handleConverterChangeWithInvalidValue) return e;
            if ("string" == typeof o && (!0 === this.multiple ? o = b.splitVal(o, ",") : this._IsCustomElement() || (o = [o])), Array.isArray(o)) {
                if (this.combobox.forceApplyConverter || this._handleConverterChangeWithInvalidValue) {
                    delete this._handleConverterChangeWithInvalidValue, s = [];
                    for (let e = 0; e < o.length; e++) {
                        let n = o[e];
                        if (this.combobox._idsFromDropdown.has(n)) s.push(n);
                        else {
                            let e = this._super(n, t, i);
                            s.push(e)
                        }
                    }
                } else if ((s = o.slice()).length > 0) {
                    let e = s.slice(-1)[0],
                        o = this._super(e, t, i);
                    s.splice(-1, 1, o)
                }
            } else delete this._handleConverterChangeWithInvalidValue, s = this._super(o, t, i);
            return s
        },
        _formatValue: function(e) {
            var t;
            if (Array.isArray(e)) {
                t = [];
                for (var i = 0; i < e.length; i++) {
                    var s = this._super(e[i]);
                    t.push(s)
                }
            } else t = this._super(e);
            return t
        },
        _NotifyContextMenuGesture: function(e, t, i) {
            var s = this._GetMessagingLauncherElement();
            this._OpenContextMenu(t, i, {
                launcher: s
            })
        },
        _GetContentElement: function() {
            return this.combobox.search
        },
        _GetAriaLabelElement: function() {
            return this._GetContentElement()[0]
        },
        _GetDefaultStyleClass: function() {
            return "oj-combobox"
        },
        _SetLoading: function() {
            this._super(), this.combobox.applyReadonlyState()
        },
        _ClearLoading: function() {
            this._super(), this.combobox.applyReadonlyState()
        },
        validate: function() {
            var e, t, i = this._getDisplayValueForSetValue(),
                s = this.combobox,
                o = i;
            if (s.hasUncommittedValue) {
                var n = null;
                if (this.multiple) {
                    var a = i[i.length - 1],
                        r = (s.getVal() || []).slice(0),
                        l = this._getValueOptionCandidateFromRawValue(a),
                        h = s.id(l),
                        c = (s.getValOpts() || []).slice(0);
                    n = c.slice(0), -1 === r.indexOf(h) && (n.push(l), r.push(h), e = c), o = r
                } else n = this._getValueOptionCandidateFromRawValue(i), o = s.id(n);
                s._skipSetValueOptions = !0, s.shouldApplyConverter = !0, s.setValOpts(n), s.hasUncommittedValue = !1
            }
            return t = this._SetValue(o, null, this._VALIDATE_METHOD_OPTIONS), this._IsCustomElement() && (t instanceof Promise ? t = t.then(function(t) {
                return s._skipSetValueOptions = !1, delete s.shouldApplyConverter, !t && e && (s.setValOpts(e), s.hasUncommittedValue = !0), Promise.resolve(t ? "valid" : "invalid")
            }) : (s._skipSetValueOptions = !1, delete s.shouldApplyConverter, !t && e && (s.setValOpts(e), s.hasUncommittedValue = !0), t = Promise.resolve(t ? "valid" : "invalid"))), t
        },
        _SetValue: function(e, t, i) {
            var s = this._super(e, t, i);
            (!s || s instanceof Promise) && ((this._IsCustomElement() ? b.isValueForPlaceholder(this.multiple, e) : null == e || "" === e || n.Object.compareValues(e, [])) || i === this._VALIDATE_METHOD_OPTIONS || this._SetDisplayValue(e));
            return s
        },
        _CanSetValue: function() {
            return !!this.forceCanSetValue || this._super()
        },
        _getValueOptionCandidateFromRawValue: function(e) {
            var t = this.combobox.opts.manageNewEntry(e);
            return b.findOptionFromResult(this.combobox, e, t)
        },
        _getDisplayValueForSetValue: function() {
            var e = null,
                t = null,
                i = this.combobox.hasUncommittedValue;
            if (!0 !== this.multiple) {
                if (i) e = this.combobox.getRawValue();
                else {
                    const t = this.combobox.currentItem || [];
                    e = null, t.length > 0 && null != t[0] && (e = t[0].value)
                }
                t = this._IsCustomElement() ? e : null == e || "" === e ? [] : [e]
            } else {
                var s = this.combobox.currentValue ? this.combobox.currentValue.slice(0) : [];
                null == (e = this.combobox.search.val()) || "" === e || s.push(e), t = s
            }
            return t
        },
        _getValueUpdatePromise: function() {
            return Promise.resolve()
        },
        _getDropdown: function() {
            if (this.combobox && this.combobox._opened())
                for (var e = a(".oj-listbox-drop"), t = 0; t < e.length; t++)
                    if ("oj-listbox-drop" === a(e[t]).attr("id") && a(e[t]).attr("data-oj-containerid") === this.combobox.containerId) return a(e[t]);
            return null
        },
        _findItem: function(e, t) {
            for (var i = 0; i < e.length; i++)
                if (a(e[i]).data("ojcombobox").value === t) return e[i];
            return null
        },
        getNodeBySubId: function(e) {
            var t, i = null;
            if (null == e) return this.combobox.container ? this.combobox.container[0] : null;
            if (!(i = this._super(e))) {
                "oj-combobox-drop" === (t = e.subId) && (t = "oj-listbox-drop"), "oj-combobox-results" === t && (t = "oj-listbox-results"), "oj-combobox-selection" === t && (t = "oj-combobox-selected-choice");
                var s = this._getDropdown();
                switch (t) {
                    case "oj-combobox-input":
                    case "oj-combobox-arrow":
                        i = this.widget().find("." + t)[0];
                        break;
                    case "oj-listitem":
                        if (s) {
                            var o = s.find(".oj-listbox-result");
                            i = this._findItem(o, e.value)
                        }
                        break;
                    case "oj-combobox-remove":
                        var n = this.widget().find(".oj-combobox-selected-choice"),
                            r = this._findItem(n, e.value);
                        i = r ? a(r).find(".oj-combobox-clear-entry-icon")[0] : null;
                        break;
                    case "oj-listbox-drop":
                        s && (i = s[0]);
                        break;
                    case "oj-listbox-results":
                        s && (i = s.find("." + t)[0]);
                        break;
                    case "oj-combobox-selected-choice":
                        i = this.widget().find("." + t).toArray()
                }
            }
            return i || null
        },
        getSubIdByNode: function(e) {
            var t = null;
            if (null != e) {
                var i = a(e);
                t = i.hasClass("oj-combobox-input") ? {
                    subId: "oj-combobox-input"
                } : i.hasClass("oj-combobox-arrow") ? {
                    subId: "oj-combobox-arrow"
                } : i.hasClass("oj-listbox-result") ? {
                    subId: "oj-listitem",
                    value: i.data("ojcombobox").value
                } : i.hasClass("oj-combobox-clear-entry-icon") ? {
                    subId: "oj-combobox-remove",
                    value: i.closest(".oj-combobox-selected-choice").data("ojcombobox").value
                } : this._super(e)
            }
            return t
        }
    });
    const V = b.clazz(E, {
        _elemNm: "ojinputsearch",
        _classNm: "oj-inputsearch",
        _COMPONENT_CLASSLIST: "oj-inputsearch oj-component",
        _getDropdownPositionElement: function() {
            return this.container.children().first()
        },
        _CreateContentElements: function() {
            var e = a(["<div class='oj-inputsearch-choice' tabindex='-1' role='presentation'>", "   <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'", "       spellcheck='false' class='oj-inputsearch-input' role='combobox' aria-expanded='false' aria-autocomplete='list' />", "   <a class='oj-inputsearch-search-button oj-inputsearch-search-icon oj-component-icon oj-clickable-icon-nocontext'", "       role='button' aria-label='search'></a>", "</div>", "<div class='oj-listbox-drop' role='presentation'>", "   <ul class='oj-listbox-results' role='listbox' data-oj-context>", "   </ul>", "</div>", "<div role='region' class='oj-helper-hidden-accessible oj-listbox-liveregion' aria-live='polite'></div>"].join("")),
                t = e.find(".oj-inputsearch-search-button");
            return this._attachSearchIconClickHandler(t), e
        },
        _attachSearchIconClickHandler: function(e) {
            var t = this;
            e.on("click", function(e) {
                if (t._isInterfaceEnabled()) {
                    if (t.opts.manageNewEntry) {
                        var i = t.search.val(),
                            s = t.opts.manageNewEntry(i),
                            o = {
                                trigger: b.ValueChangeTriggerTypes.SEARCH_ICON_CLICKED
                            },
                            n = t.selection.data(t._elemNm);
                        !n && "" !== i || n && n.label !== i || !t.ojContext.isValid() && i !== t._previousDisplayValue ? (t._onSelect(s, o, e), t._triggerUpdateEvent(s, o, e)) : (n && n.label === i && (s = n), t._triggerUpdateEvent(s, o, e))
                    }
                    return !1
                }
            }).on("mousedown", function(e) {
                return e.stopPropagation(), !1
            })
        },
        _enable: function(e) {
            V.superclass._enable.apply(this, arguments), this._enabled ? this.container.find(".oj-inputsearch-search-button").removeClass("oj-disabled") : this.container.find(".oj-inputsearch-search-button").addClass("oj-disabled")
        },
        _triggerUpdateEvent: function(e, t, i) {
            var s;
            t && (s = t.trigger);
            var o = {
                    _context: {
                        optionMetadata: {
                            trigger: s
                        }
                    }
                },
                n = this.id(e);
            if (n && 0 !== n.length || (n = e.label ? e.label : []), void 0 !== this.ojContext._AsyncValidate(n, i, o) && this.ojContext.isValid()) {
                "string" == typeof n && (n = [n]);
                var a = {
                    value: n,
                    optionMetadata: {
                        trigger: s
                    }
                };
                this.ojContext._trigger("update", i, a)
            }
        },
        _prepareOpts: function(e) {
            var t = V.superclass._prepareOpts.apply(this, arguments);
            return t.highlightTermInOptions = function() {
                return !0
            }, t
        }
    });
    n.__registerWidget("oj.ojInputSearch", a.oj.editableValue, {
        defaultElement: "<input>",
        widgetEventPrefix: "oj",
        options: {
            placeholder: void 0,
            required: !1,
            list: void 0,
            options: null,
            optionsKeys: null,
            pickerAttributes: null,
            optionRenderer: null,
            minLength: 0,
            beforeExpand: null,
            rawValue: void 0,
            optionChange: null,
            update: null,
            validators: void 0
        },
        widget: function() {
            return this.inputSearch.container
        },
        _ComponentCreate: function() {
            this._super(), this._setup()
        },
        _InitOptions: function(t, i) {
            if (this._super(t, i), e.EditableValueUtils.initializeOptionsFromDom([{
                    attribute: "disabled",
                    validateOption: !0
                }, {
                    attribute: "placeholder"
                }, {
                    attribute: "required",
                    coerceDomValue: !0,
                    validateOption: !0
                }, {
                    attribute: "title"
                }], i, this), void 0 === this.options.value) this.options.value = void 0 !== this.element.attr("value") ? b.splitVal(this.element.val(), ",") : null;
            else {
                var s = this.options.value;
                Array.isArray(s) ? s = s.slice(0) : "string" == typeof s && (s = [s]), this.options.value = s
            }
        },
        _AfterSetOption: function(e, t, i) {
            switch (this._superApply(arguments), e) {
                case "required":
                    this._AfterSetOptionRequired(e);
                    break;
                case "validators":
                    this._AfterSetOptionValidators(e)
            }
        },
        _IsRequired: function() {
            return this.options.required
        },
        _AfterSetOptionRequired: e.EditableValueUtils._AfterSetOptionRequired,
        _AfterSetOptionValidators: e.EditableValueUtils._AfterSetOptionValidators,
        _refreshRequired: e.EditableValueUtils._refreshRequired,
        _GetNormalizedValidatorsFromOption: e.EditableValueUtils._GetNormalizedValidatorsFromOption,
        _AriaRequiredUnsupported: function() {
            return !1
        },
        _setup: function() {
            var e = {};
            e.element = this.element, e.ojContext = this, e.inputSearch = !0, e = a.extend(this.options, e), this.cssOptionDefaults = {}, this.inputSearch = new V, this.inputSearch._init(e), this._refreshRequired(this.options.required)
        },
        _destroy: function() {
            this.inputSearch._destroy(), this._super()
        },
        refresh: function() {
            this._super(), this.inputSearch._destroy(), this._setup(), this._SetRootAttributes()
        },
        _setOption: function(e, t, i) {
            var s = t;
            "value" === e && (null != s && (Array.isArray(s) ? s = s.slice(0) : "string" == typeof s ? s = [s] : m.error("ojInputSearch value has to be an array of string or a string.")), i && i._context && i._context.optionMetadata ? this.inputSearch.valueChangeTrigger = i._context.optionMetadata.trigger : this.inputSearch.valueChangeTrigger = null), this._super(e, s, i), "options" === e && (this.inputSearch.opts.options = s, this.inputSearch.opts = this.inputSearch._prepareOpts(this.inputSearch.opts)), "disabled" === e && (s ? this.inputSearch._disable() : this.inputSearch._enable())
        },
        _NotifyDetached: function() {
            this._superApply(arguments), this.inputSearch.close()
        },
        _NotifyHidden: function() {
            this._superApply(arguments), this.inputSearch.close()
        },
        _SetDisplayValue: function(e) {
            this.inputSearch._initSelection()
        },
        _SetPlaceholder: function(e) {
            this.inputSearch && (this.inputSearch.opts.placeholder = e, this.inputSearch._setPlaceholder && this.inputSearch._setPlaceholder())
        },
        validate: function() {
            var e = this.inputSearch.search.val(),
                t = null,
                i = [];
            return this.isValid() && (i = this.inputSearch.getVal()), t = null == e || "" === e ? i : [e], this._SetValue(t, null, this._VALIDATE_METHOD_OPTIONS)
        },
        _parseValue: function(e) {
            var t, i = [];
            if (null == e) return i;
            if (Array.isArray(e))
                for (var s = 0; s < e.length; s++) t = this._super(e[s]), i.push(t.toString());
            else "string" == typeof e ? (t = this._super(e), i.push(t.toString())) : m.error("ojInputSearch value has to be an array of string or a string.");
            return i
        },
        _GetContentElement: function() {
            return this.inputSearch.search
        },
        _GetDefaultStyleClass: function() {
            return "oj-inputsearch"
        },
        _getValueUpdatePromise: function() {
            return Promise.resolve()
        },
        _getDropdown: function() {
            if (this.inputSearch && this.inputSearch._opened())
                for (var e = a(".oj-listbox-drop"), t = 0; t < e.length; t++)
                    if ("oj-listbox-drop" === a(e[t]).attr("id") && a(e[t]).attr("data-oj-containerid") === this.inputSearch.containerId) return a(e[t]);
            return null
        },
        expand: function() {
            this.inputSearch.open()
        },
        collapse: function() {
            this.inputSearch.close()
        },
        getNodeBySubId: function(e) {
            var t, i = null;
            if (null === e) return this.inputSearch.container ? this.inputSearch.container[0] : null;
            if (!(i = this._super(e))) switch ("oj-inputsearch-search" === (t = e.subId) && (t = "oj-inputsearch-search-button"), t) {
                case "oj-inputsearch-input":
                case "oj-inputsearch-search-button":
                    i = this.widget().find("." + t)[0];
                    break;
                case "oj-listitem":
                    var s = this._getDropdown();
                    if (s) {
                        var o = s.find(".oj-listbox-result");
                        i = this.inputSearch._findItem(o, e.value)
                    }
            }
            return i || null
        },
        getSubIdByNode: function(e) {
            var t = null;
            if (null != e) {
                var i = a(e);
                t = i.hasClass("oj-inputsearch-input") ? {
                    subId: "oj-inputsearch-input"
                } : i.hasClass("oj-inputsearch-search-button") ? {
                    subId: "oj-inputsearch-search"
                } : i.hasClass("oj-listbox-result") ? {
                    subId: "oj-listitem",
                    value: i.data("ojinputsearch").value
                } : this._super(e)
            }
            return t
        }
    });
    const I = b.clazz(C, {
            _elemNm: "ojselect",
            _classNm: "oj-select",
            _userTyping: !1,
            _COMPONENT_CLASSLIST: "oj-select oj-select-multi oj-component",
            _CreateContentElements: function() {
                return a(["<div class='oj-text-field-container' role='presentation'>", "  <div class='oj-select-accessible-container' tabindex='0' role='combobox'", "       aria-autocomplete='none' aria-expanded='false'>", "    <ul class='oj-select-choices'>", "    </ul>", "  </div>", "</div>", "<div class='oj-select-description oj-helper-hidden-accessible'></div>", "<div class='oj-listbox-drop' role='dialog'>", "  <div class='oj-listbox-search-wrapper'>", "    <div class='oj-text-field'>", "      <div class='oj-text-field-container oj-text-field-has-end-slot'>", "        <div class='oj-listbox-search oj-text-field-middle'>", "          <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'", "                 spellcheck='false' class='oj-listbox-input oj-text-field-input' title='Search field' ", "                 role='combobox' aria-expanded='false' aria-autocomplete='list' />", "        </div>", "        <span class='oj-listbox-spyglass-box oj-text-field-end'>", "          <span class='oj-component-icon oj-clickable-icon-nocontext oj-fwk-icon-magnifier oj-listbox-search-icon' role='presentation'></span>", "        </span>", "      </div>", "    </div>", "  </div>", "  <div class='oj-listbox-loader-wrapper'></div>", "   <ul class='oj-listbox-results' role='listbox' data-oj-context>", "   </ul>", "</div>", "<div class='oj-helper-hidden-accessible oj-listbox-liveregion' aria-live='polite'></div>"].join(""))
            },
            _initContainer: function() {
                I.superclass._initContainer.apply(this, arguments), this.dropdown.on("mousedown", b.killEventWithExceptions.bind(null, [".oj-listbox-input"]))
            },
            _enable: function(e) {
                if (I.superclass._enable.apply(this, arguments), this._enabled) {
                    var t = this.elementTabIndex ? this.elementTabIndex : "0";
                    this.selection.attr("tabindex", t)
                } else this.selection.removeAttr("tabindex")
            },
            _containerKeydownHandler: function(e) {
                if (b.KEY.isPasteAction(e) && (this._userTyping = !0, this._opened() || this.open(e, !1, !0), this._hasHiddenSearchBox() && this._showSearchBox(""), !r.isAncestorOrSelf(this.search.get(0), e.currentTarget))) return this.search.focus(), void this.search.trigger(e);
                if (I.superclass._containerKeydownHandler.apply(this, arguments), this._userTyping) {
                    if (!this._opened()) return void this.open(e);
                    if (this._hasHiddenSearchBox()) {
                        var t = b.getSearchText(e);
                        t && (this._showSearchBox(t), this._updateResults())
                    }
                }
            },
            _opening: function(e, t, i) {
                I.superclass._opening.apply(this, arguments);
                var s = null;
                i || (s = b.getSearchText(e), this._showSearchBox(s)), t || (s ? this._updateResults() : this._updateResults(!0))
            },
            _showDropDown: function() {
                var e = "true" !== this.selection.attr("aria-expanded");
                I.superclass._showDropDown.apply(this, arguments), e && (this.selection.attr("aria-expanded", !0).attr("aria-haspopup", "dialog").attr("aria-owns", this.results.attr("id")), this.search.attr("aria-expanded", !0).attr("aria-controls", this.results.attr("id")))
            },
            close: function(e) {
                !0 === this._userTyping && (this._userTyping = !1);
                var t = e ? e.originalEvent : null,
                    i = t instanceof MouseEvent || t instanceof FocusEvent,
                    s = e && (!i || e.target === this.selection || e.target === this.search || this.dropdown.has(e.target).length > 0);
                I.superclass.close.apply(this, arguments), this.selection.attr("aria-expanded", !1).removeAttr("aria-haspopup").removeAttr("aria-owns"), this.search.attr("aria-expanded", !1).removeAttr("aria-controls"), this.ojContext.hasAfterToggleHandlerAddedFocusClass && !s && (this.ojContext._getRootElement().classList.remove("oj-focus"), this.ojContext.hasAfterToggleHandlerAddedFocusClass = !1), s && b._focus(this, this.selection), this.search.val("")
            },
            _getActiveContainer: function() {
                return this.search.attr("aria-expanded") && this._hasSearchBox() ? this.search : this.selection
            },
            _clearSearch: function() {
                var e = this._getPlaceholder();
                if (null != e && b.isValueForPlaceholder(!0, this.getVal()) && b.isValueOptionsForPlaceholder(!0, this.getValOpts())) {
                    var t = a("<li></li>");
                    t.addClass("oj-select-default"), t.text(e), this.selection.find(".oj-select-choices").append(t)
                }
            }
        }),
        w = b.clazz(S, {
            _elemNm: "ojselect",
            _classNm: "oj-select",
            _userTyping: !1,
            _COMPONENT_CLASSLIST: "oj-select oj-component",
            _CreateContentElements: function() {
                return a(["<div class='oj-text-field-container' role='presentation'>", "  <div class='oj-select-choice oj-select-accessible-container' tabindex='0' role='combobox' ", "     aria-autocomplete='none' aria-expanded='false'>", "   <div class='oj-text-field-middle'>", "      <span class='oj-select-chosen'></span>", "   </div>", "   <abbr class='oj-select-search-choice-close' role='presentation'></abbr>", "   <span class='oj-text-field-end'>", "     <a class='oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon' role='presentation'>", "     </a>", "   </span>", "  </div>", "</div>", "<div class='oj-listbox-drop' role='dialog'>", "  <div class='oj-listbox-search-wrapper'>", "    <div class='oj-text-field'>", "      <div class='oj-text-field-container oj-text-field-has-end-slot'>", "        <div class='oj-listbox-search oj-text-field-middle'>", "          <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off'", "                 spellcheck='false' class='oj-listbox-input oj-text-field-input' title='Search field' ", "                 role='combobox' aria-expanded='false' aria-autocomplete='list' />", "        </div>", "        <span class='oj-listbox-spyglass-box oj-text-field-end'>", "          <span class='oj-component-icon oj-clickable-icon-nocontext oj-fwk-icon-magnifier oj-listbox-search-icon' role='presentation'></span>", "        </span>", "      </div>", "    </div>", "  </div>", "  <div class='oj-listbox-loader-wrapper'></div>", "   <ul class='oj-listbox-results' role='listbox' data-oj-context>", "   </ul>", "</div>", "<div class='oj-helper-hidden-accessible oj-listbox-liveregion' aria-live='polite'></div>"].join(""))
            },
            _enable: function(e) {
                if (w.superclass._enable.apply(this, arguments), this._enabled) {
                    var t = this.elementTabIndex ? this.elementTabIndex : "0";
                    this.selection.attr("tabindex", t), this.container.find(".oj-select-arrow").removeClass("oj-disabled")
                } else this.selection.removeAttr("tabindex"), this.container.find(".oj-select-arrow").addClass("oj-disabled")
            },
            close: function(e) {
                if (this._opened()) {
                    var t = e ? e.originalEvent : null,
                        i = t instanceof MouseEvent || t instanceof FocusEvent,
                        s = e && (!i || e.target === this.selection || e.target === this.search || this.dropdown.has(e.target).length > 0);
                    w.superclass.close.apply(this, arguments), this.selection.attr("aria-expanded", !1).removeAttr("aria-haspopup").removeAttr("aria-owns"), this.search.attr("aria-expanded", !1).removeAttr("aria-controls"), this._testClear(e) || this._clearSearch(), this.ojContext.hasAfterToggleHandlerAddedFocusClass && !s && (this.ojContext._getRootElement().classList.remove("oj-focus"), this.ojContext.hasAfterToggleHandlerAddedFocusClass = !1), s && b._focus(this, this.selection), this.container.find(".oj-listbox-spyglass-box").off("mouseup click")
                }
            },
            _opening: function(e, t, i) {
                w.superclass._opening.apply(this, arguments);
                var s = null;
                i || (s = b.getSearchText(e), this._showSearchBox(s)), t || (s ? this._updateResults() : this._updateResults(!0))
            },
            _showDropDown: function() {
                if (this._opened()) {
                    var e = "true" !== this.selection.attr("aria-expanded");
                    w.superclass._showDropDown.apply(this, arguments), e && (this.selection.attr("aria-expanded", !0).attr("aria-haspopup", "dialog").attr("aria-owns", this.results.attr("id")), this.search.attr("aria-expanded", !0).attr("aria-controls", this.results.attr("id") + " " + this.container.find(".oj-listbox-liveregion").attr("id")))
                }
            },
            _initContainer: function() {
                var e = this.containerId + "_selected";
                this.text = this.container.find(".oj-select-chosen").attr("id", e), w.superclass._initContainer.apply(this, arguments), this.selection.attr({
                    "aria-labelledby": this.search.attr("aria-labelledby"),
                    "aria-describedby": e
                }), this.search.on("keydown", this._bind(this._containerKeydownHandler)), this.search.on("keyup-change input", this._bind(this._containerKeyupHandler)), this.search.attr("title", this.ojContext.getTranslatedString("searchField"));
                var t = this;
                this.selection.on("blur", function(e) {
                    t._testClear(e)
                }), this.dropdown.on("mousedown", b.killEventWithExceptions.bind(null, [".oj-listbox-input"]))
            },
            _initSelection: function() {
                this._isPlaceholderOptionSelected() ? (this._updateSelection(null), this.close(), this._setPlaceholder()) : w.superclass._initSelection.apply(this, arguments)
            },
            _updateSelectedOption: function(e) {
                if (null != e) {
                    var t, i = this.getVal();
                    Array.isArray(i) && !this.ojContext._IsCustomElement() && (i = i[0]), void 0 === (t = this.opts.id(e)) && (t = null), n.Object.compareValues(i, t) || this.ojContext._setInitialSelectedValue(t), this.setValOpts(e), this._updateSelection(e), this.close()
                } else this.setValOpts(null)
            },
            _updateSelection: function(e) {
                this.selection.data(this._elemNm, e), null !== e && this.text.text("string" == typeof e ? e : b.getLabel(e)), e && "" !== e.id && this.text.removeClass(this._classNm + "-default")
            },
            _getActiveContainer: function() {
                return this.search.attr("aria-expanded") && this._hasSearchBox() ? this.search : this.selection
            },
            _isPlaceholderOptionSelected: function() {
                if (null === this._getPlaceholder()) return !1;
                var e = this.getVal();
                return e = Array.isArray(e) ? e[0] : e, b.isValueForPlaceholder(!1, e)
            },
            _getPlaceholder: function() {
                return this.opts.placeholder
            },
            _showPlaceholder: function() {
                return this.opts.placeholder = this.ojContext.options.placeholder, !0
            },
            _setPlaceholder: function() {
                var e = this._getPlaceholder();
                this._isPlaceholderOptionSelected() && void 0 !== e && this.text.text(e).addClass(this._classNm + "-default")
            },
            setVal: function(e, t, i) {
                var s = w.superclass.setVal.call(this, e, t, i);
                return s instanceof Promise ? s.then(this._bind(function(t) {
                    !1 !== t && this.selection.data("selectVal", e)
                })) : (!1 !== s && this.selection.data("selectVal", e), s)
            },
            _containerKeydownHandler: function(e) {
                const t = e.which || e.keyCode;
                if (b.KEY.isPasteAction(e) && (this._userTyping = !0, this._opened() || this.open(e, !0, !0), this._hasHiddenSearchBox() && this._showSearchBox(""), !r.isAncestorOrSelf(this.search.get(0), e.currentTarget))) return this.search.focus(), void this.search.trigger(e);
                if (!(b.KEY.isControl(e) && t !== b.KEY.SHIFT || t === b.KEY.SHIFT || b.KEY.isFunctionKey(e))) {
                    switch (t) {
                        case b.KEY.TAB:
                            return this.close(e), this.selection.focus(), void this._testClear(e);
                        case b.KEY.ENTER:
                            if (e.target === this.selection[0] && !this._opened()) return this.open(e), void e.preventDefault()
                    }
                    if (w.superclass._containerKeydownHandler.apply(this, arguments), this._userTyping && (this.open(e), this._opened())) {
                        var i = this.dropdown.find(".oj-listbox-search");
                        if ("true" === a(i).attr("aria-hidden")) {
                            var s = b.getSearchText(e);
                            s && (this._showSearchBox(s), this._updateResults())
                        }
                    }
                }
            },
            _testClear: function(e) {
                return "" === this.text.text() && (!(this.datalist && this.selection.data(this._elemNm) && this.selection.data(this._elemNm).value || !b.isValueForPlaceholder(!1, this.ojContext.options.value)) && (this._clear(e), !0))
            }
        });
    n.__registerWidget("oj.ojSelect", a.oj.editableValue, {
        defaultElement: "<select>",
        widgetEventPrefix: "oj",
        options: {
            labelledBy: null,
            maximumResultCount: 15,
            minimumResultsForSearch: 15,
            placeholder: null,
            optionRenderer: null,
            options: null,
            optionsKeys: {},
            pickerAttributes: null,
            required: !1,
            readOnly: !1,
            renderMode: "jet",
            valueOption: null,
            valueOptions: null
        },
        widget: function() {
            return this.select ? this.select.container : this.element.parent().parent()
        },
        _ComponentCreate: function() {
            this._super(), b.wrapDataProviderIfNeeded(this, null), this._setup()
        },
        _AfterCreate: function() {
            if (this._super(), this._IsCustomElement()) {
                this.options.labelledBy && this._labelledByUpdatedForSelectComp();
                var e = this._getRootElement();
                this._focusable({
                    element: e,
                    applyHighlight: !0,
                    afterToggle: this._handleAfterFocusToggle.bind(this, e)
                }), this.select && "none" === this.options.labelEdge && this.select.updateAriaLabelIfNeeded()
            }
        },
        _handleAfterFocusToggle: function(e, t) {
            (this.hasAfterToggleHandlerAddedFocusClass = !1, "focusout" === t) && (this._getDropdown() && (e.classList.add("oj-focus"), this.hasAfterToggleHandlerAddedFocusClass = !0))
        },
        _AfterSetOption: function(e, t, i) {
            switch (this._superApply(arguments), e) {
                case "required":
                    this._AfterSetOptionRequired(e);
                    break;
                case "labelHint":
                case "labelEdge":
                    this.select && this.select.updateAriaLabelIfNeeded()
            }
        },
        _IsRequired: function() {
            return this.options.required
        },
        _labelledByUpdatedForSelectComp: function() {
            const t = this.options.labelledBy,
                i = this.options.translations.required;
            if (!t) return;
            const s = e.EditableValueUtils._getOjLabelAriaLabelledBy(t, this.uuid + "_Label");
            !s || this.multiple && b.isReadonly(this) || this._GetContentElement().attr("aria-labelledby", s), this._IsRequired() && i && (this._implicitReqValidator = null, this._getImplicitRequiredValidator()), this.select && this.select.updateAriaLabelledByIfNeeded(s)
        },
        _AfterSetOptionRequired: e.EditableValueUtils._AfterSetOptionRequired,
        _nativeSetDisabled: function(e) {
            e ? (this.element.attr("disabled", ""), this.element.parent().parent().addClass("oj-disabled").removeClass("oj-enabled")) : (this.element.removeAttr("disabled"), this.element.parent().parent().removeClass("oj-disabled").addClass("oj-enabled"))
        },
        _nativeChangeHandler: function(e) {
            var t = [],
                i = [],
                s = !this._IsRequired() && this._HasPlaceholderSet();
            a(e.target).find("option").each(function() {
                this.selected && (this.value || s && "" === this.value) && (t.push(this.value), i.push({
                    value: this.value,
                    label: this.text
                }))
            }), b.duringFetchByKey(this.element) && b.setValueChanged(this, !0), this._IsCustomElement() && !0 !== this.multiple ? (this._SetValue(t[0], e, {
                doValueChangeCheck: !1,
                _context: {
                    internalSet: !0
                }
            }), b.setValueOptions(this, i[0])) : (this._SetValue(t, e, {
                doValueChangeCheck: !1,
                _context: {
                    internalSet: !0
                }
            }), b.setValueOptions(this, i))
        },
        _nativeQueryCallback: function(e) {
            if (e) {
                var t = this.element;
                b.arrayPopulateResults(t, e, this._formatValue.bind(this), b.isDataProvider(this.options.options) ? null : this.options.optionsKeys), t.addClass(b.GENERATED_OPTIONS_SELECTOR)
            }
        },
        _nativeSetSelected: function(e) {
            var t = null;
            if (e) t = e;
            else if (this._HasPlaceholderSet() && (this.options.required && (t = this._nativeFindFirstEnabledOptionValue()), this._SetPlaceholder(this.options.placeholder)), null === t) {
                var i = this._nativeFindFirstEnabledOption();
                t = this._nativeFindFirstEnabledOptionValue(i), b.setValueOptions(this, {
                    value: t,
                    label: i.text()
                })
            }
            this._setInitialSelectedValue(t)
        },
        _nativeFetchFromDataProvider: function() {
            var e = this;
            b.fetchFirstBlockFromDataProvider(this.element, e.options).then(function(t) {
                if (e._nativeQueryCallback(t), t.length) {
                    var i = e.options.value;
                    i ? b.validateFromDataProvider(e.element, e.options, i).then(function(t) {
                        var i, s;
                        if (b.isValueChanged(e) && !1 === e.multiple) b.setValueChanged(e, void 0);
                        else if (b.isValueChanged(e) && e.multiple && (s = e.options.valueOptions, i = e.options.value, b.setValueChanged(e, void 0)), t) {
                            var o = t.valueOptions;
                            Array.isArray(o) && o.length && b.setValueOptions(e, s ? o.concat(s) : o);
                            var n = t.value;
                            if (Array.isArray(n) && n.length) {
                                i = i ? n.concat(i) : n;
                                var a = e.multiple ? i : n[0];
                                e._nativeSetSelected(a), e.multiple && 1 !== a.length || (e.element[0].value = a)
                            }
                        }
                    }) : e._nativeSetSelected()
                }
            })
        },
        _nativeSetup: function() {
            var e = this.element;
            if (this._IsCustomElement() ? a(this.OuterWrapper).addClass("oj-select-native oj-component oj-select oj-form-control") : e.wrap("<div>").parent().addClass("oj-select-native oj-component oj-select oj-form-control"), e.addClass("oj-select-select oj-component-initnode"), e.wrap('<div class="oj-text-field-container" role="presentation">'), this.multiple ? (e[0].multiple || (e[0].multiple = !0), e.parent().prepend("<a class='oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-multiple-open-icon' role='presentation'></a>")) : e.parent().prepend("<a class='oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon' role='presentation'></a>"), this._nativeSetDisabled(this.options.disabled), this.options.list) b.listPopulateResults(e, a("#" + this.options.list).children(), this._formatValue.bind(this)), e.addClass(b.GENERATED_OPTIONS_SELECTOR);
            else if (this.options.options) b.getDataProvider(this.options) ? this._nativeFetchFromDataProvider() : this._nativeQueryCallback(this.options.options);
            else if (this._IsCustomElement()) {
                var t = e.children();
                1 === t.length && t.hasClass("oj-listbox-placeholder") || (b.ojOptionPopulateResults(e, t, this._formatValue.bind(this)), e.addClass(b.GENERATED_OPTIONS_SELECTOR))
            }
            this._focusable({
                element: e,
                applyHighlight: !0
            }), this.options.value || this._HasPlaceholderSet() || b.getDataProvider(this.options) || this._setInitialSelectedValue(this._nativeFindFirstEnabledOptionValue()), e.change(this._nativeChangeHandler.bind(this)), b.addDataProviderEventListeners(this), "top" === this._ResolveLabelEdgeStrategyType() && this._initComponentMessaging()
        },
        _ResolveLabelEdgeStrategyType: function() {
            var e = this._superApply(arguments);
            return this._IsCustomElement() && this._isNative() && "inside" === e && (e = "top"), e
        },
        _jetSetup: function() {
            var e = {};
            e.element = this.element, e.ojContext = this, e = a.extend(this.options, e), this.cssOptionDefaults = c.parseJSONFromFontFamily("oj-select-option-defaults") || {}, this.select = this.multiple ? new I : new w, this.select._init(e), this.select.container.addClass("oj-select-jet oj-form-control"), this._focusable({
                element: this.select.selection,
                applyHighlight: !0
            })
        },
        _setInitialSelectedValue: function(e) {
            var t;
            t = this._IsCustomElement() || Array.isArray(e) ? e : [e], this._SetValue(t, null, {
                doValueChangeCheck: !1,
                _context: {
                    internalSet: !0,
                    writeback: !0
                },
                changed: !0
            })
        },
        _setup: function() {
            b.isValueForPlaceholder(this.multiple, this.options.value) && (this.multiple ? this.options.valueOptions = b.getValueOptionsForPlaceholder(this, this.options.valueOptions) : this.options.valueOption = b.getValueOptionsForPlaceholder(this, this.options.valueOption));
            this._resolveValueOptionsLater = b.mergeValueAndValueOptions(this, {
                doNotClearMessages: !0
            }), this._isNative() ? this._nativeSetup() : this._jetSetup(), this._refreshRequired(this.options.required)
        },
        _IsTextFieldComponent: function() {
            return !0
        },
        _GetContentWrapper: function() {
            if (this._IsCustomElement()) return this.select._GetContentWrapper()
        },
        refresh: function() {
            this._super(), this._cleanup(), this._setup(), this._isNative() && this.options.value && this.element.val(this.options.value), this._SetRootAttributes(), this._initComponentMessaging()
        },
        _refreshRequired: e.EditableValueUtils._refreshRequired,
        _AriaRequiredUnsupported: function() {
            return !1
        },
        _destroy: function() {
            this._cleanup(), this._super()
        },
        _NotifyDetached: function() {
            this._superApply(arguments), this.select && this.select.close()
        },
        _NotifyHidden: function() {
            this._superApply(arguments), this.select && this.select.close()
        },
        _VerifyConnectedForSetup: function() {
            return !0
        },
        _SetPlaceholder: function(e) {
            if (this._isNative() && null != e) {
                var t = a(this.element.children("option:first-child"));
                t && "" === t.attr("value") ? (t.text(this.options.placeholder), t.attr("value", "")) : ((t = b.createOptionTag(0, "", e, this._formatValue.bind(this))).addClass("oj-listbox-placeholder"), this._hidePlaceholder(t, this._IsRequired()), t.prependTo(this.element))
            } else if (this.select) {
                var i = e,
                    s = this.options.placeholder,
                    o = this.multiple;
                "inside" === this.options.labelEdge && (i = e || !o && null == s ? e : ""), this.select.opts.placeholder = i, this.select._setPlaceholder()
            }
        },
        _HasPlaceholderSet: function() {
            return b.isPlaceholderSpecified(this.options)
        },
        _ClearPlaceholder: function() {
            this._SetPlaceholderOption(null), this._SetPlaceholder(null)
        },
        _InitOptions: function(t, i) {
            if (this._super(t, i), e.EditableValueUtils.initializeOptionsFromDom([{
                    attribute: "disabled",
                    validateOption: !0
                }, {
                    attribute: "placeholder"
                }, {
                    attribute: "required",
                    coerceDomValue: !0,
                    validateOption: !0
                }, {
                    attribute: "title"
                }], i, this), this.multiple = this._IsCustomElement() ? "OJ-SELECT-MANY" === this.OuterWrapper.nodeName : this.options.multiple, void 0 === this.options.value) this._IsCustomElement() ? this.options.value = null : this.options.value = void 0 !== this.element.attr("value") ? b.splitVal(this.element.val(), ",") : null;
            else {
                var s = this.options.value;
                Array.isArray(s) && (this._IsCustomElement() || (s = s.slice(0))), this.options.value = s
            }
        },
        _SetDisplayValue: function(e) {
            if (this.select) b.applyValueOptions(this.select, this.options) || this.select._initSelection(), this._resolveValueOptionsLater = !1;
            else {
                var t;
                if (this._setPlaceholderStyle(e) && (this.element[0].selectedIndex = 0), null == e) this._resolveValueOptionsLater && b.setValueOptions(this, b.getFixupValueOptionsForPlaceholder(this.multiple));
                else {
                    var i, s = !1,
                        o = e;
                    if (this.multiple || (Array.isArray(e) && (o = e[0]), null === (i = this._nativeFindLabel(o)) && (m.warn("JET select: selected value not found"), this.element[0].options && this.element[0].options.length > 0 ? (this.element[0].selectedIndex = 0, o = this.element[0].value, i = this.element[0].text, s = !0) : i = String(e))), s || this.element.val(e), e = o, this._resolveValueOptionsLater) {
                        if (this.multiple) {
                            var n = 0;
                            t = [], this.element.find("option").each(function() {
                                this.selected && (t.push({
                                    value: e[n],
                                    label: this.text
                                }), n += 1)
                            })
                        } else t = {
                            value: e,
                            label: i
                        };
                        b.setValueOptions(this, t)
                    }
                }
                this._resolveValueOptionsLater = !1
            }
        },
        _GetDisplayValue: function() {
            var e = null;
            if (this.select) {
                var t = this.select._getSelectionData();
                if (null != t)
                    if (this.multiple)
                        if (e = [], Array.isArray(t))
                            for (var i = 0; i < t.length; i++) e.push(b.getLabel(t[i]));
                        else e.push(b.getLabel(t));
                else e = Array.isArray(t) && t.length > 0 ? b.getLabel(t[0]) : b.getLabel(t);
                else e = this._super()
            } else e = this._super();
            return e
        },
        validate: function() {
            var e, t = null;
            if (this.select)
                if (!0 === this.multiple) {
                    var i = this.select.search.val(),
                        s = this.select.getVal() ? this.select.getVal() : [];
                    null == i || "" === i || s.push(i), t = s
                } else t = this.select.getVal();
            else this._isNative() && (t = this.options.value);
            return e = this._SetValue(t, null, this._VALIDATE_METHOD_OPTIONS), this._IsCustomElement() && (e = Promise.resolve(e ? "valid" : "invalid")), e
        },
        _CanSetValue: function() {
            return !!this.forceCanSetValue || this._super()
        },
        _nativeFindFirstEnabledOption: function() {
            var e = this.element.find("option:not(:disabled)");
            return e.length > 0 ? a(e[0]) : null
        },
        _nativeFindFirstEnabledOptionValue: function(e) {
            return e || (e = this._nativeFindFirstEnabledOption()), e ? this._IsCustomElement() ? e.attr("value") : [e.attr("value")] : null
        },
        _nativeSetOptions: function(e) {
            var t = this.options.value,
                i = this.element;
            if (i.hasClass(b.GENERATED_OPTIONS_SELECTOR)) b.cleanupResults(i);
            else {
                var s = i.children();
                s.length > 0 && s.remove()
            }
            if (b.isDataProvider(e)) this._nativeFetchFromDataProvider();
            else {
                b.arrayPopulateResults(i, e, this._formatValue.bind(this), this.options.optionsKeys);
                var o = null;
                this._HasPlaceholderSet() && (this.options.required && (o = this._nativeFindFirstEnabledOptionValue()), this._SetPlaceholder()), null === o && (o = this._nativeFindFirstEnabledOptionValue()), this.options.value = o, this.option("value", t)
            }
            i.addClass(b.GENERATED_OPTIONS_SELECTOR)
        },
        _removePlaceholderInMultiValues: function(e) {
            for (var t, i = [], s = 0; s < e.length; s++) null != (t = e[s]) && (t.length > 0 ? (1 === i.length && "" === i[0] && i.pop(), i.push(t)) : 0 === i.length && i.push(t));
            return i
        },
        _nativeFindLabel: function(e) {
            var t = this.element[0].options;
            if (t && t.length > 0)
                for (var i = 0; i < t.length; i++)
                    if (t[i].value === e) return a(t[i]).text();
            return null
        },
        _setPlaceholderStyle: function(e) {
            var t = this.multiple;
            return (null == e || "" === e) && this._HasPlaceholderSet() || !this._IsCustomElement() && Array.isArray(e) && 1 === e.length && "" === e[0] || this._IsCustomElement() && this._HasPlaceholderSet() && b.isValueForPlaceholder(t, e) ? (this.element.addClass("oj-select-default"), !0) : (this.element.removeClass("oj-select-default"), !1)
        },
        _setOptions: function(e, t) {
            var i, s, o;
            if (this._processSetOptions || (this._processSetOptions = []), this._processSetOptions.push({}), this._super(e, t), (i = this._processSetOptions.pop()).value && (s = i.value()), i.validateValue) {
                var n = function() {
                    var e, t = this._resolveValueOptionsLater;
                    return this.isValueOptionsSetInternally && (this._resolveValueOptionsLater = !0), e = i.validateValue(), this._resolveValueOptionsLater = t, e
                }.bind(this);
                o = s instanceof Promise ? s.then(n) : n()
            }
            if (i.messagesCustom) {
                const e = o || s;
                e instanceof Promise ? e.then(i.messagesCustom) : i.messagesCustom()
            }
        },
        _setOption: function(e, t, i) {
            var s, o, n = t,
                r = this,
                l = this._super,
                h = this.multiple,
                c = !1,
                u = (this._processSetOptions || []).slice(-1)[0];
            if ("value" !== e) {
                if ("placeholder" === e) this.select ? (this.select.opts.placeholder = n, b.isValueForPlaceholder(h, this.options.value) && this.select._setPlaceholder()) : (s = this.options.value) && 0 !== s.length && s[0] || (this.element[0].selectedIndex = 0);
                else if ("maximumResultCount" === e) this.select ? this.select.opts.maximumResultCount = n : c = !0;
                else if ("minimumResultsForSearch" === e) this.select && (this.select.opts.minimumResultsForSearch = n);
                else if ("renderMode" === e) this._cleanup(), c = !0;
                else if ("messagesCustom" === e && null != u) return void(u.messagesCustom = l.bind(this, e, n, i));
                if ("options" === e ? (b.removeDataProviderEventListeners(this), b.clearDataProviderWrapper(this)) : "optionsKeys" === e ? b.clearDataProviderWrapper(this) : "valueOption" === e && !0 !== h ? (n = b.getValueOptionsForPlaceholder(this, n), this.select && (this.select.opts.valueOption = n), this.isValueOptionsSetInternally = !1) : "valueOptions" === e && !0 === h && (n = b.getValueOptionsForPlaceholder(this, n), this.select && (this.select.opts.valueOptions = n), this.isValueOptionsSetInternally = !1), this._super(e, n, i), c && this.refresh(), "disabled" === e) this.select ? n ? this.select._disable() : this.select._enable() : this._nativeSetDisabled(n);
                else if ("readOnly" === e) this.select && this.select.applyReadonlyState(), "native" === this.options.renderMode && this.refresh();
                else if ("valueOption" === e && !0 !== h) b.syncValueWithValueOption(this, n, this.options.value, this._isNative());
                else if ("valueOptions" === e && !0 === h) b.syncValueWithValueOptions(this, n, this.options.value, this._isNative());
                else if ("options" === e)
                    if (b.isDataProvider(n) && (b.wrapDataProviderIfNeeded(this, this.select ? this.select.opts : null), b.addDataProviderEventListeners(this)), this.select)
                        if (s = this.select.getVal(), o = h ? s && 0 !== s.length : this._IsCustomElement() ? null != s : s && null != s[0], b.getDataProvider(this.options) && o) {
                            var d = function() {
                                if (b.applyValueOptions(this.select, this.options)) return this.select.opts.options = n, this.select.opts = r.select._prepareOpts(this.select.opts), Promise.resolve();
                                let e;
                                const t = new Promise(function(t) {
                                    e = t
                                });
                                var i = this.select.container,
                                    s = this.options,
                                    o = this.options.value;
                                return b.validateFromDataProvider(i, s, o).then(function(t) {
                                    var i = t ? t.value : null,
                                        s = Promise.resolve();
                                    if (i) {
                                        var a = t.valueOptions;
                                        Array.isArray(a) && a.length && b.setValueOptions(r, a), Array.isArray(i) && i.length && l.call(r, "value", h ? i : i[0])
                                    } else {
                                        var c = null != r.options.placeholder,
                                            u = function() {
                                                r.select.setValOpts(null), l.call(r, "value", null), h || c || r.select.text.text("")
                                            };
                                        h || c ? u() : s = b.fetchFirstBlockFromDataProvider(r.select.container, r.options, 1).then(function(e) {
                                            var t = o !== r.select.getVal();
                                            e && e.length > 0 && !t ? r.select._updateSelectedOption(e[0]) : t || u()
                                        })
                                    }
                                    r.select.opts.options = n, r.select.opts = r.select._prepareOpts(r.select.opts), s.then(e)
                                }), t
                            }.bind(this);
                            null != u ? u.validateValue = d : d()
                        } else this.select.opts.options = n, this.select.opts = this.select._prepareOpts(this.select.opts), h && !o || (this.select.setValOpts(null), this._super("value", s));
                else this._nativeSetOptions(n);
                else if ("optionsKeys" === e) b.wrapDataProviderIfNeeded(this, this.select ? this.select.opts : null);
                else if ("required" === e && this._isNative()) {
                    var p = a(this.element.find(".oj-listbox-placeholder"));
                    p && "" === p.attr("value") && this._hidePlaceholder(p, n)
                } else "multiple" !== e || this._IsCustomElement() ? "labelledBy" === e && this._labelledByUpdatedForSelectComp() : this.multiple = n
            } else {
                var f = function() {
                    this._valueUpdatePromise = null;
                    var t = function(t) {
                        l.call(this, e, t, i)
                    }.bind(this);
                    if (this._setPlaceholderForValue(n, t)) return Promise.resolve();
                    if (n = this._treatValueForSetValue(n), b.getDataProvider(this.options) && n) {
                        var s, o = new Promise(function(e) {
                                s = e
                            }),
                            a = function(e) {
                                if (e) {
                                    var i = e.valueOptions;
                                    Array.isArray(i) && i.length && b.setValueOptions(this, i);
                                    var o = e.value;
                                    if (Array.isArray(o) && o.length) {
                                        var n = h ? o : o[0];
                                        t(n), this._isNative() && (this.element[0].value = n)
                                    }
                                }
                                s()
                            }.bind(this);
                        return this._validateFromDataProviderAndSetValue(n, a), this._valueUpdatePromise = o, o
                    }
                    return this._validateFromOptionsAndSetValue(n, t), Promise.resolve()
                }.bind(this);
                null != u ? u.value = f : f()
            }
        },
        _isOptionDataPending: function() {
            var e = this.options.options,
                t = this.select.datalist;
            if (t) {
                if (0 === t.children().length) return !0
            } else {
                if (b.isDataProvider(e)) return !0;
                if (!e || 0 === e.length) return !0
            }
            return !1
        },
        _validateFromDataProviderAndSetValue: function(e, t) {
            var i = this._isNative() ? this.element : this.select.container,
                s = this.options;
            this.select && (this.select.opts.options = s.options), b.validateFromDataProvider(i, s, e).then(t)
        },
        _validateFromOptionsAndSetValue: function(e, t) {
            var i = this.multiple;
            if (this._IsCustomElement() && !i) this._isValidValue(e) && (t(e), b.updateValueOptions(this.select));
            else {
                for (var s = [], o = 0; o < e.length; o++) this.select ? this._isValidValue(e[o]) && s.push(e[o]) : this.element.find("option[value='" + e[o] + "']").length > 0 && s.push(e[o]);
                (s.length > 0 || i) && (this._isNative() ? this._nativeSetSelected(s) : (t(s), b.updateValueOptions(this.select)))
            }
        },
        _isValidValue: function(e) {
            var t;
            return this.select && ((t = this.select.datalist) || (t = this.select.opts.element)), !(this.select && this.select.opts.validate) || this.select.opts.validate(t, e) || this._isOptionDataPending()
        },
        _treatValueForSetValue: function(e) {
            var t = this.multiple,
                i = this._IsCustomElement() && !t,
                s = e;
            return Array.isArray(s) || i || (s = [s]), this._isNative() && (i || (s = this._removePlaceholderInMultiValues(s)), this._setPlaceholderStyle(s)), s
        },
        _setPlaceholderForValue: function(e, t) {
            var i = this.multiple;
            return !(!this._HasPlaceholderSet() && !i || !(null != e && 0 === e.length || this._IsCustomElement() && b.isValueForPlaceholder(i, e))) && (b.setValueOptions(this, b.getFixupValueOptionsForPlaceholder(i)), t(e), !0)
        },
        _getValueUpdatePromise: function() {
            return this._valueUpdatePromise instanceof Promise ? this._valueUpdatePromise : Promise.resolve()
        },
        _getDropdown: function() {
            if (this.select && this.select._opened()) {
                var e = this.select.dropdown;
                if (e && e.attr("data-oj-containerid") === this.select.containerId) return e
            }
            return null
        },
        _hidePlaceholder: function(e, t) {
            t ? (e.attr("disabled", ""), e.attr("hidden", "")) : (e.removeAttr("disabled"), e.removeAttr("hidden"))
        },
        _isNative: function() {
            return "native" === this.options.renderMode && !b.isReadonly(this)
        },
        _cleanup: function() {
            this.element.parent().parent().hasClass("oj-select-native") ? (this.element.off("change"), this.element.hasClass(b.GENERATED_OPTIONS_SELECTOR) && b.cleanupResults(this.element), this.element.parent().hasClass("oj-text-field-container") && this.element.unwrap(), this.element.parent().children(".oj-select-arrow").remove(), this._IsCustomElement() || this.element.unwrap(), this.element.removeClass("oj-select-select oj-component-initnode"), this.element.attr({
                "aria-labelledby": ""
            })) : this.select && (this.select._destroy(), this.select = void 0)
        },
        getNodeBySubId: function(e) {
            var t, i = null;
            if (null == e) {
                var s = this.widget();
                return s ? s[0] : null
            }
            if (this._isNative()) return null;
            if (!(i = this._super(e))) {
                var o = this._getDropdown();
                switch (t = e.subId) {
                    case "oj-select-drop":
                        o && (i = o[0]);
                        break;
                    case "oj-select-results":
                        o && (i = o.find(".oj-listbox-results")[0]);
                        break;
                    case "oj-select-search":
                        o && (i = o.find(".oj-listbox-search")[0]);
                        break;
                    case "oj-select-input":
                    case "oj-listbox-input":
                        o && (i = o.find(".oj-listbox-input")[0]);
                        break;
                    case "oj-select-choice":
                    case "oj-select-chosen":
                    case "oj-select-arrow":
                        i = this.widget().find("." + t)[0];
                        break;
                    case "oj-listitem":
                        if (o) {
                            var n = o.find(".oj-listbox-result");
                            i = this.select._findItem(n, e.value)
                        }
                        break;
                    case "oj-select-remove":
                        var r = this.widget().find(".oj-select-selected-choice"),
                            l = this.select._findItem(r, e.value);
                        i = l ? a(l).find(".oj-select-clear-entry-icon")[0] : null;
                        break;
                    case "oj-listbox-result-label":
                        if (o) {
                            var h = a("#" + this.select.results.attr("id")).children(),
                                c = e.index;
                            h.length && c < h.length && (i = h.eq(c).find("." + t)[0])
                        }
                }
            }
            return i || null
        },
        getSubIdByNode: function(e) {
            if (this._isNative()) return this._super(e);
            var t = null;
            if (null != e) {
                var i = a(e);
                t = i.hasClass("oj-listbox-input") ? {
                    subId: "oj-select-input"
                } : i.hasClass("oj-select-arrow") ? {
                    subId: "oj-select-arrow"
                } : i.hasClass("oj-listbox-result") ? {
                    subId: "oj-listitem",
                    value: i.data("ojselect").value
                } : i.hasClass("oj-select-clear-entry-icon") ? {
                    subId: "oj-select-remove",
                    value: i.closest(".oj-select-selected-choice").data("ojselect").value
                } : this._super(e)
            }
            return t
        },
        _GetDefaultStyleClass: function() {
            return "oj-select"
        },
        _GetMessagingLauncherElement: function() {
            return this.select ? this.select.selection : this._super()
        },
        _GetContentElement: function() {
            return this.select ? this.select.selection : this.element
        },
        _GetAriaLabelElement: function() {
            return this._GetContentElement()[0]
        }
    }), _.setDefaultOptions({
        ojSelect: {
            displayOptions: {
                converterHint: ["none"]
            },
            renderMode: _.createDynamicPropertyGetter(function() {
                return (c.parseJSONFromFontFamily("oj-select-option-defaults") || {}).renderMode
            })
        }
    })
});
//# sourceMappingURL=ojselectcombobox.js.map