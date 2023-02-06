define('text!framework/elements/api/virtual-keyboard/virtual-keyboard.html', [], function() {
    return '<div class="oj-flex-item oj-sm-12"><oj-label :for="[[$unique]]"><span data-bind="text:$properties.inputLabel"></span></oj-label></div><div class="oj-flex-item oj-sm-12"><!-- ko if: $properties.password --><oj-input-password :id="[[$unique]]" value="{{$properties.value}}" required validators="[[$properties.validators]]" :title="[[$properties.inputTitle]]"></oj-input-password><!-- /ko --><!-- ko ifnot: $properties.password --><oj-input-text :id="[[$unique]]" value="{{$properties.value}}" required :title="[[$properties.inputTitle]]"></oj-input-text><!-- /ko --><!-- ko if: showVirtualKeypad --> <a href="#" class="trigger" data-bind="click:openVirtualKeyPad, attr : {id : \'button\' + id, \'aria-label\' : resource.openKeyboard}"><span class="icon-keyboard"></span></a><oj-popup class="hide" :id="[[\'popup\' + id]]" position.my.horizontal="left" position.my.vertical="top" position.at.horizontal="start" position.at.vertical="bottom" on-oj-close="[[closeHandler]]"><div class="virtual-keyboard-container"><!-- ko if: showVirtualKeys --><div class="keyboard-container"><ul class="keyboard" :id="[[\'keyboard\' + id]]"><li class="symbol"><span class="off">`</span><span class="on">~</span></li><li class="symbol"><span class="off" data-bind="text: numbers[1]"></span><span class="on">!</span></li><li class="symbol"><span class="off" data-bind="text: numbers[2]"></span><span class="on">@</span></li><li class="symbol"><span class="off" data-bind="text: numbers[3]"></span><span class="on">#</span></li><li class="symbol"><span class="off" data-bind="text: numbers[4]"></span><span class="on">$</span></li><li class="symbol"><span class="off" data-bind="text: numbers[5]"></span><span class="on">%</span></li><li class="symbol"><span class="off" data-bind="text: numbers[6]"></span><span class="on">^</span></li><li class="symbol"><span class="off" data-bind="text: numbers[7]"></span><span class="on">&amp;</span></li><li class="symbol"><span class="off" data-bind="text: numbers[8]"></span><span class="on">*</span></li><li class="symbol"><span class="off" data-bind="text: numbers[9]"></span><span class="on">(</span></li><li class="symbol"><span class="off" data-bind="text: numbers[0]"></span><span class="on">)</span></li><li class="symbol"><span class="off">-</span><span class="on">_</span></li><li class="symbol"><span class="off">=</span><span class="on">+</span></li><li class="delete lastitem" data-bind="text : resource.delete"></li><li class="tab" data-bind="text : resource.tab"></li><!-- ko foreach: firstRowAlphabets --><li class="letter" data-bind="text: $data"></li><!-- /ko --><li class="symbol"><span class="off">[</span><span class="on">{</span></li><li class="symbol"><span class="off">]</span><span class="on">}</span></li><li class="symbol lastitem"><span class="off">\\</span><span class="on">|</span></li><li class="capslock" data-bind="text : resource.capsLock"></li><!-- ko foreach: secondRowAlphabets --><li class="letter" data-bind="text: $data"></li><!-- /ko --><li class="symbol"><span class="off">;</span><span class="on">:</span></li><li class="symbol"><span class="off">\'</span><span class="on">&quot;</span></li><li class="left-shift" data-bind="text : resource.shift"></li><!-- ko foreach: thirdRowAlphabets --><li class="letter" data-bind="text: $data"></li><!-- /ko --><li class="symbol"><span class="off">,</span><span class="on">&lt;</span></li><li class="symbol"><span class="off">.</span><span class="on">&gt;</span></li><li class="symbol"><span class="off">/</span><span class="on">?</span></li><li class="right-shift lastitem" data-bind="text : resource.shift"></li><li class="space lastitem" data-bind="text : resource.space"></li></ul></div><!-- /ko --></div></oj-popup><!-- /ko --></div>';
});

define('resources/nls/virtual-keypad', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                openKeyboard: "Open Virtual Keypad",
                delete: "Delete",
                tab: "Tab",
                capsLock: "Caps Lock",
                return: "Return",
                shift: "Shift",
                space: "Space"
            },
            ar: !0,
            es: !0,
            pt: !0,
            fr: !0,
            zh_CN: !0,
            cs: !0,
            sv: !0,
            en: !1,
            "en-us": !1,
            el: !0
        }
    }
});

define('framework/elements/api/virtual-keyboard/virtual-keyboard', ["jquery", "knockout", "ojL10n!resources/nls/virtual-keypad", "ojs/ojpopup", "ojs/ojvalidationgroup", "ojs/ojinputtext"], function(e, s, t) {
    "use strict";
    return function(o) {
        const r = this;

        function l(e) {
            let s, t, o = e.length;
            for (; 0 !== o;) t = Math.floor(Math.random() * o), s = e[o -= 1], e[o] = e[t], e[t] = s;
            return e
        }

        function a(e) {
            const s = [];
            if ("num" === e)
                for (let e = 0; e < 10; e++) s.push(e);
            else
                for (let e = 0; e < 26; e++) s.push(String.fromCharCode(97 + e));
            return s
        }

        function u() {
            r.numbers = l(a("num"));
            const e = l(a());
            r.firstRowAlphabets = e.splice(0, 10), r.secondRowAlphabets = e.splice(0, 9), r.thirdRowAlphabets = e, r.showVirtualKeypad = !o.properties.baseModel.isTouchDevice() && o.properties.baseModel.large(), r.showVirtualKeys(!0)
        }
        r.id = Math.random().toString(36).substring(7), r.resource = t, r.showVirtualKeys = s.observable(!1), u();
        let i = !1,
            n = !1;
        e(document).on("click", o.properties.baseModel.format("#keyboard{id} li", {
            id: r.id
        }), function() {
            const t = e(this);
            let l = t.html();
            return t.hasClass("left-shift") || t.hasClass("right-shift") ? (e(".letter").toggleClass("uppercase"), e(".symbol span").toggle(), i = !0 !== i, n = !1, !1) : t.hasClass("capslock") ? (e(".letter").toggleClass("uppercase"), n = !0, !1) : t.hasClass("delete") ? (o.properties.value = o.properties.value ? o.properties.value.substr(0, o.properties.value.length - 1) : null, !1) : (t.hasClass("symbol") && (l = e("span:visible", t).html()), t.hasClass("space") && (l = " "), t.hasClass("tab") && (l = "\t"), t.hasClass("return") && (l = "\n"), t.hasClass("uppercase") && (l = l.toUpperCase()), !0 === i && (e(".symbol span").toggle(), !1 === n && e(".letter").toggleClass("uppercase"), i = !1), o.properties.value = (o.properties.value || "") + l, r.showVirtualKeys(!1), s.tasks.runEarly(), void u())
        }), r.openVirtualKeyPad = function() {
            r.showVirtualKeys(!1), s.tasks.runEarly(), u(), o.properties.value = "", document.getElementById(o.unique).setAttribute("disabled", !0), document.querySelector("#popup" + r.id).open("#" + o.unique)
        }, r.closeHandler = function() {
            r.showVirtualKeys(!1), s.tasks.runEarly(), u(), o.properties.validators && document.getElementById(o.unique).validate(), document.getElementById(o.unique).setAttribute("disabled", !1)
        }
    }
});

define('text!framework/elements/api/virtual-keyboard/component.json', [], function() {
    return '{\r\n    "name": "virtual-keyboard",\r\n    "version": "1.0.0",\r\n    "jetVersion": "^8.1.0",\r\n    "displayName": "Framework Composite Component",\r\n    "description": "Framework Composite Component",\r\n    "properties": {\r\n        "value": {\r\n            "description": "Value to Edit",\r\n            "type": "string",\r\n            "writeback": true,\r\n            "required": true\r\n        },\r\n        "baseModel": {\r\n            "description": "baseModel context",\r\n            "type": "object",\r\n            "required": true\r\n        },\r\n        "inputLabel": {\r\n            "description": "label",\r\n            "type": "string",\r\n            "required": true,\r\n            "translatable": true\r\n        },\r\n        "validators":{\r\n            "description": "input feild validator",\r\n            "type": "array"\r\n        },\r\n        "inputTitle": {\r\n            "description": "title",\r\n            "type": "string"\r\n        },\r\n        "password":{\r\n            "description": "attribute to differentiate if virtual keyboard required for password field or any other inpt text field",\r\n            "type": "boolean"\r\n        },\r\n        "maxLength":{\r\n            "description": "maximum allowed input characters",\r\n            "type": "number"\r\n        },\r\n        "onNullCheck":{\r\n            "description": "null checker",\r\n            "type": "function"\r\n        }\r\n    },\r\n    "methods": {},\r\n    "events": {},\r\n    "slots": {}\r\n}';
});


define('text!framework/elements/api/virtual-keyboard/virtual-keyboard.css', [], function() {
    return '.virtual-keyboard-container .trigger{position:absolute;font-size:2rem;height:.5rem;color:var(--link-base)}.virtual-keyboard-container .keyboard{width:688px;margin:0;padding:0;list-style:none}.virtual-keyboard-container .keyboard li{float:left;margin:0 5px 5px 0;width:40px;height:40px;line-height:40px;text-align:center;background:#fff;border:1px solid #e7e7e7;-moz-border-radius:5px;-webkit-border-radius:5px}[dir=rtl] .virtual-keyboard-container .keyboard li{float:right;margin:0 0 5px 5px}.virtual-keyboard-container .keyboard li:hover{position:relative;top:1px;left:1px;border-color:#cecece;cursor:pointer}.virtual-keyboard-container .keyboard .delete,.virtual-keyboard-container .keyboard .tab{width:70px}.virtual-keyboard-container .keyboard .capslock,.virtual-keyboard-container .keyboard .left-shift,.virtual-keyboard-container .keyboard .tab{clear:left}.virtual-keyboard-container .keyboard .capslock{width:110px}.virtual-keyboard-container .keyboard .return{width:77px}.virtual-keyboard-container .keyboard .left-shift{width:95px}.virtual-keyboard-container .keyboard .right-shift{width:109px}.virtual-keyboard-container .keyboard .lastitem{margin-right:0}.virtual-keyboard-container .keyboard .uppercase{text-transform:uppercase}.virtual-keyboard-container .keyboard .space{clear:left;width:681px}.virtual-keyboard-container .keyboard .on{display:none}';
});

define('framework/elements/api/virtual-keyboard/loader', ["ojs/ojcomposite", "module", "text!./virtual-keyboard.html", "./virtual-keyboard", "text!./component.json", "text!./virtual-keyboard.css", "base-models/css"], function(e, t, o, a, r, s, i) {
    "use strict";
    e.register("virtual-keyboard", {
        viewModel: a,
        view: i.transformTemplate(o, s, i.getComponentName(t)),
        metadata: JSON.parse(r)
    })
});