define('text!framework/elements/api/page-section/page-section.html', [], function() {
    return '<div class="oj-form-layout page-section"><div class="oj-form oj-sm-odd-cols-12 oj-md-labels-inline page-section__container page-section-container"><!-- ko if : $properties.heading && $properties.heading != "" --><div class="oj-flex page-section-container__header page-section-header"><div class="oj-flex-item page-section-header__container page-section-heading"><h3 class="page-section-heading__text" data-bind="attr:{\'id\' : $unique + \'_page-section-header\'}"><span data-bind="text: $properties.heading"></span><oj-bind-slot name="headerTemplate"></oj-bind-slot></h3></div></div><!-- /ko --><div class="oj-flex page-section-container__body page-section-content"><div data-bind="attr:{\'aria-labelledby\': $properties.heading ? $unique + \'_page-section-header\' : null }" class="oj-flex-item page-section-content__data"><oj-bind-slot></oj-bind-slot></div></div></div></div>';
});


define('text!framework/elements/api/page-section/component.json', [], function() {
    return '{\r\n  "name": "page-section",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "heading": {\r\n      "description": "Optional heading string for the Page-section",\r\n      "type": "string"\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {\r\n    "headerTemplate": {\r\n      "description": "Header Template Slot"\r\n    }\r\n  }\r\n}';
});


define('text!framework/elements/api/page-section/page-section.css', [], function() {
    return '.page-section-container .page-sectionheading{overflow:hidden;display:inline-block}.page-section-container .page-section-heading{margin:0 auto!important}.page-section-container .page-section-heading__text{width:100%;margin:0 0 1rem;text-align:left;color:var(--form-header-foreground-color);padding:.6rem;border-bottom:.05rem solid var(--base-border-default);font-size:var(--form-header-font-size);font-weight:var(--form-header-font-weight)}[dir=rtl] .page-section-container .page-section-heading__text{text-align:right}.page-section-container .page-section-container__body h2,.page-section-container .page-section-container__body h3{display:none}.page-section-container .page-section-content{margin-bottom:.6rem}.page-section-container .page-section-content__data{margin:0 auto .6rem!important}.page-section-container .page-section-content__data>.oj-flex{padding-bottom:.5rem}@media only screen and (max-width:767px){.page-section-container .page-section-content__data{margin:0 auto!important}}';
});

define('framework/elements/api/page-section/loader', ["ojs/ojcomposite", "module", "text!./page-section.html", "text!./component.json", "text!./page-section.css", "base-models/css", "ojs/ojformlayout"], function(e, t, o, s, a, n) {
    "use strict";
    e.register("page-section", {
        view: n.transformTemplate(o, a, n.getComponentName(t)),
        metadata: JSON.parse(s)
    })
});