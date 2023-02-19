define('text!framework/elements/api/modal-window/modal-window.html', [], function() {
    return '<div data-bind="attr:{id:$properties.dialogId}, css: display" class="modal-window"><div class="modal-window-viewport"><div tabindex="-1" role="alert" class="modal-window__container modal-container" data-bind="css: display"><!-- ko if: $properties.hideHeader --> <a href="#" class="close-alternate" data-bind="attr:{\'aria-label\':modalWindowNls.common.closeDialog, \'alt\':modalWindowNls.common.closeDialog ,\'title\':modalWindowNls.common.closeDialogTitle },click:closeDialog"><span class="icons icon-cross"></span> </a><!-- /ko --><!-- ko ifnot: $properties.hideHeader --><div class="modal-container__header modal-header"><a class="modal-header__close" href="#" data-bind="attr:{\'aria-label\':modalWindowNls.common.closeDialog, \'alt\':modalWindowNls.common.closeDialog ,\'title\':modalWindowNls.common.closeDialogTitle },click:closeDialog"><span class="icons icon-cross"></span></a></div><div class="modal-container__header modal-header"><span class="modal-header__text" data-bind="text:$properties.header"></span></div><!-- /ko --><div class="se-pre-con modal-window-container__progress"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div><div class="modal-container__body modal-body"><div :class="[[\'modal-body-content \'  + display]]"><oj-bind-slot></oj-bind-slot></div></div></div></div></div>';
});


define('framework/elements/api/modal-window/modal-window', ["jquery", "ojL10n!resources/nls/generic", "baseLogger"], function(e, o, t) {
    "use strict";

    function d(d) {
        if (!d.properties.dialogId) throw new Error("valid dialog-id should be passed to modal-window");
        if (!Object.keys(d.slotCounts).length) throw new Error("modal-window shouldn't be empty");
        if (!d.properties.hideHeader && !d.properties.header) throw new Error("valid header should be passed to modal-window");
        const n = this;
        n.focusedElementBeforeModal = null, n.modalWindowNls = o, n.display = d.properties.display || (d.properties.hideHeader ? "close-header" : "normal");
        let i = !1;
        n.closeDialog = function() {
            if (!i) return;
            document.getElementById("rightPanelBody") || (e("body").removeClass("overflow-hidden"), -1 !== navigator.userAgent.indexOf("Safari") && (document.body.style.position = "relative")), e("#" + d.properties.dialogId).hide(), n.focusedElementBeforeModal && n.focusedElementBeforeModal.focus(), d.properties.closeHandler && (i = !1, d.properties.closeHandler())
        }, n.attachEventHandler = function() {
            e("#" + d.properties.dialogId).on("openModal", function(o, r) {
                const l = e("#" + d.properties.dialogId)[0];
                e("body").addClass("overflow-hidden"), l.setAttribute("style", "display:flex;"), -1 !== navigator.userAgent.indexOf("Safari") && (document.body.style.position = "fixed", document.body.style.width = "100%"), i = !0, n.focusedElementBeforeModal = document.activeElement;
                r && ((r = l.querySelector(r)) || t.info("INVALID SELECTOR. FOCUSSING THE FIRST FOCUSABLE ELEMENT")), (r || l.querySelector('div[role="alert"]')).focus(), l.addEventListener("keydown", function(e) {
                    let o = l.querySelectorAll(this.focusableElementsString);
                    const t = (o = Array.prototype.slice.call(o))[0],
                        d = o[o.length - 1];
                    9 === e.keyCode && (e.shiftKey ? document.activeElement === t && (e.preventDefault(), d.focus()) : document.activeElement === d && (e.preventDefault(), t.focus())), 27 === e.keyCode && n.closeDialog()
                }.bind({
                    focusableElementsString: 'input:not([disabled]), a[href], area[href], select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"], [contenteditable]'
                }))
            }), e("#" + d.properties.dialogId).on("closeModal", n.closeDialog), d.properties.modalWindowReady && d.properties.modalWindowReady()
        }
    }
    return d.prototype.bindingsApplied = function() {
        this.attachEventHandler()
    }, d.prototype.disconnected = function() {
        this.closeDialog()
    }, d
});

define('text!framework/elements/api/modal-window/component.json', [], function() {
    return '{\r\n  "name": "modal-window",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "dashboard": {\r\n      "description": "Dashboard Object",\r\n      "type": "object",\r\n      "required": true\r\n    },\r\n    "baseModel": {\r\n      "description": "Basemodel Object",\r\n      "type": "object",\r\n      "required": true\r\n    },\r\n    "dialogId": {\r\n      "description": "Dialog Id to be passed",\r\n      "type": "string",\r\n      "required": true,\r\n      "translatable": false\r\n    },\r\n    "header": {\r\n      "description": "Optional header",\r\n      "type": "string",\r\n      "required": true\r\n    },\r\n    "closeHandler": {\r\n      "description": "Close Handler function",\r\n      "type": "function"\r\n    },\r\n    "hideHeader": {\r\n      "description": "Set false to hide header initially",\r\n      "type": "boolean",\r\n      "value": false\r\n    },\r\n    "display": {\r\n      "description": "Optional class name",\r\n      "type": "string",\r\n      "translatable": false\r\n    },\r\n    "modalWindowReady": {\r\n      "description": "Modal Window Ready Function",\r\n      "type": "function"\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});


define('text!framework/elements/api/modal-window/modal-window.css', [], function() {
    return '.modal-window-container .modal-window{position:fixed;display:none;height:100%;width:100%;top:0;bottom:0;background:rgba(0,0,0,.4);z-index:6;opacity:0;transition:opacity .4s ease-in;pointer-events:none;opacity:1;pointer-events:auto;transform:translateY(0)}[dir=rtl] .modal-window-container .modal-window{left:0}[dir=ltr] .modal-window-container .modal-window,[dir=rtl] .modal-window-container .modal-window{right:0}[dir=ltr] .modal-window-container .modal-window{left:0}.modal-window-container .modal-window__container{overflow:hidden;max-width:80%;height:auto;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;box-shadow:.1rem .1rem .6rem 0 rgba(0,0,0,.45);background:var(--base-background-primary);position:absolute;top:50%;transform:translate(-50%,-50%)}[dir=rtl] .modal-window-container .modal-window__container{right:50%;transform:translate(50%,-50%)}[dir=ltr] .modal-window-container .modal-window__container{left:50%}.modal-window-container .modal-window-container__progress{display:none}.modal-window-container .modal-window-container__body{font-size:calc(var(--base-font-size-default) + .1rem);line-height:1.4rem;background:var(--base-background-primary);position:absolute;width:100%}.modal-window-container .modal-window-viewport{height:100vh;width:100%;position:relative}.modal-window-container .modal-window .modal-header{width:100%;background:linear-gradient(to var(--modal-window-header-gradient-direction),var(--modal-window-header-gradient-start-color),var(--modal-window-header-gradient-end-color));height:1.9rem;color:var(--modal-window-header-foreground-color);position:relative}.modal-window-container .modal-window .modal-header__text{padding:.3rem 1.3rem;font-size:var(--modal-window-header-font-size);font-weight:var(--modal-window-header-font-weight);display:inline-block;margin-top:-1rem}.modal-window-container .modal-window .modal-header__close{padding:1rem 1.3rem;font-size:var(--modal-window-header-font-size);color:var(--modal-window-header-foreground-color)!important;cursor:pointer;position:absolute;right:-.3rem;top:-.4rem}.modal-window-container .modal-window .modal-body-content{background:linear-gradient(to var(--modal-window-body-gradient-direction),var(--modal-window-body-gradient-start-color),var(--modal-window-body-gradient-end-color));color:var(--modal-window-body-foreground-color);font-size:var(--modal-window-body-font-size);font-weight:var(--modal-window-body-font-weight);max-height:70vh;overflow-y:auto;padding:.6rem 2.4rem .6rem .6rem}.modal-window-container .modal-window .modal-body-content__message-body{padding:3.1rem .6rem 0}.modal-window-container .modal-window .modal-body-content .form-main-container{padding:0;background:inherit;color:inherit;font-size:inherit;font-weight:inherit}.modal-window-container .modal-window .close-alternate{position:absolute;right:-2.5rem;top:-2.5rem;color:var(--base-color-secondary-text)}.modal-window-container .modal-window .close-alternate span{font-size:2rem}.modal-window-container .modal-window .icon-cross{font-size:10px}.modal-window-container .modal-window .close-header{overflow:visible}@media only screen and (max-width:767px){.modal-window-container .modal-window__container{min-width:80%}.modal-window-container .modal-window__container.full-screen{top:0;bottom:0;max-width:100vw;width:100vw;transform:none}[dir=rtl] .modal-window-container .modal-window__container.full-screen{right:0}[dir=ltr] .modal-window-container .modal-window__container.full-screen,[dir=rtl] .modal-window-container .modal-window__container.full-screen{left:0}[dir=ltr] .modal-window-container .modal-window__container.full-screen{right:0}.modal-window-container .modal-window .modal-header__text{padding:.8rem;font-size:calc(var(--base-font-size-default) + .1rem)}.modal-window-container .modal-window .modal-header__close{padding:.6rem .9rem}.modal-window-container .modal-window .modal-body-content{padding:.6rem}.modal-window-container .modal-window .modal-body-content.full-screen{max-height:calc(100vh - (1.9rem * 2))}.modal-window-container .modal-window .close-alternate span{font-size:1.5rem}}';
});

define('framework/elements/api/modal-window/loader', ["ojs/ojcomposite", "module", "text!./modal-window.html", "./modal-window", "text!./component.json", "text!./modal-window.css", "base-models/css"], function(e, o, t, m, s, d, n) {
    "use strict";
    e.register("modal-window", {
        viewModel: m,
        view: n.transformTemplate(t, d, n.getComponentName(o)),
        metadata: JSON.parse(s)
    })
});