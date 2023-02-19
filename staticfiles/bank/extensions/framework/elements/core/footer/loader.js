define('text!extensions/framework/elements/core/footer/footer.html', [], function() {
    return '<!-- ko if: !corpLogin() --><div class="footer"><div class="oj-flex oj-flex-items-pad footer__container footer-container" data-bind="template: {name:\'footer\'}"></div></div><!-- /ko --><!-- ko if: corpLogin() --><div class="footer-corp"><div class="oj-flex oj-flex-items-pad footer__container footer-container" data-bind="template: {name:\'footer\'}"></div></div><!-- /ko -->';
});

define('resources/nls/footer', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                copyright: "Copyright (c) Ecobank 2021. All rights reserved ",
                securityInfo: "Security Information",
                security: "Security",
                info: "Information",
                tnc: "Terms and Conditions"
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

define('extensions/framework/elements/core/footer/footer', ["ojL10n!resources/nls/footer", "knockout"], function(o, n) {
    "use strict";
    return function() {
        const e = this;
        e.resourceBundle = o;
        let r = window.location.search;
        e.corpLogin = n.observable(!1), r.match(/logincorporate/g) ? e.corpLogin(!0) : e.corpLogin(!1)
    }
});

define('text!extensions/framework/elements/core/footer/component.json', [], function() {
    return '{\r\n  "name": "obdx-footer",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {},\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {}\r\n}';
});

define('extensions/framework/elements/core/footer/loader', ["ojs/ojcomposite", "text!./footer.html", "./footer", "text!./component.json"], function(e, o, t, i) {
    "use strict";
    e.register("obdx-footer", {
        view: o,
        viewModel: t,
        metadata: JSON.parse(i)
    })
});