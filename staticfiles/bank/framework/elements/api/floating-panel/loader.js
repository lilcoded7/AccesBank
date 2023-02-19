define('text!framework/elements/api/floating-panel/floating-panel.html', [], function() {
    return '<div class="floating-panel" type="overlayParent" data-bind="attr:{id: panelId + \'_parent\'}"><div class="oj-panel" data-bind="attr:{id: panelId}"><div id="floating-panel-template" data-oj-context><oj-bind-slot></oj-bind-slot></div></div></div>';
});

define('framework/elements/api/floating-panel/floating-panel', ["ojs/ojcore", "jquery", "ojs/ojanimation"], function(e, n, t) {
    "use strict";

    function o(e) {
        const o = this,
            l = e.properties;
        if (o.panelId = l.panelId, !o.panelId) throw new Error("Panel ID not found");
        const i = n.extend(o.slideInOptions, {
                direction: "top"
            }),
            a = n.extend(o.slideOutOptions, {
                direction: "bottom"
            });
        o.openFloatingPanel = function() {
            n("#" + o.panelId + "_parent").fadeIn(), t.slideIn(document.getElementById(o.panelId), i), o.rippleElement && t.ripple(document.getElementById(o.rippleElement), o.rippleOptions)
        }, o.closeFloatingPanel = function() {
            n("#" + o.panelId + "_parent").fadeOut(), t.slideOut(document.getElementById(o.panelId), a)
        }, o.floatingPanelParentClick = function(e) {
            "overlayParent" === e.target.getAttribute("type") && document.getElementById(o.panelId).dispatchEvent(new CustomEvent("closeFloatingPanel"))
        }
    }
    return o.prototype.bindingsApplied = function() {
        const n = this;
        e.Context.getContext(document.getElementById("floating-panel-template")).getBusyContext().whenReady().then(function() {
            document.getElementById(n.panelId).addEventListener("openFloatingPanel", n.openFloatingPanel), document.getElementById(n.panelId).addEventListener("closeFloatingPanel", n.closeFloatingPanel), document.getElementById(n.panelId + "_parent").addEventListener("click", n.floatingPanelParentClick), window.addEventListener("popstate", n.closeFloatingPanel)
        })
    }, o.prototype.disconnected = function() {
        const e = document.getElementById(this.panelId);
        e && (e.removeEventListener("openFloatingPanel", this.openFloatingPanel), e.removeEventListener("closeFloatingPanel", this.closeFloatingPanel), document.getElementById(this.panelId + "_parent").removeEventListener("click", this.floatingPanelParentClick)), window.removeEventListener("popstate", this.closeFloatingPanel)
    }, o
});

define('text!framework/elements/api/floating-panel/component.json', [], function() {
    return '{\r\n  "name": "floating-panel",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "panelId": {\r\n      "description": "Panel ID",\r\n      "type": "string",\r\n      "translatable": false,\r\n      "required": true\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});


define('text!framework/elements/api/floating-panel/floating-panel.css', [], function() {
    return '.floating-panel-container .floating-panel{display:none;position:fixed;top:0;left:0;height:100%;width:100%;z-index:11;background:rgba(0,0,0,.3)}.floating-panel-container .floating-panel .oj-panel{padding:.3rem .6rem;position:absolute;bottom:.5rem;height:auto;max-height:80vh;overflow-y:auto;width:100%;box-shadow:-.2rem -.2rem .3rem rgba(0,0,0,.3)}.floating-panel-container .floating-panel .oj-panel ul{padding:0;margin:0}.floating-panel-container .floating-panel .oj-panel ul li{border-bottom:.05rem solid var(--base-border-default);display:block;padding:.6rem 0}[dir=rtl] .floating-panel-container .floating-panel .oj-panel ul li .icons{padding-left:.6rem}[dir=ltr] .floating-panel-container .floating-panel .oj-panel ul li .icons{padding-right:.6rem}.floating-panel-container .floating-panel .oj-panel ul li:last-child{border-bottom:0}.floating-panel-container .floating-panel .oj-panel ul li a{color:var(--base-text-primary)}';
});

define('framework/elements/api/floating-panel/loader', ["ojs/ojcomposite", "module", "text!./floating-panel.html", "./floating-panel", "text!./component.json", "text!./floating-panel.css", "base-models/css"], function(e, t, o, n, a, s, l) {
    "use strict";
    e.register("floating-panel", {
        viewModel: n,
        view: l.transformTemplate(o, s, l.getComponentName(t)),
        metadata: JSON.parse(a)
    })
});