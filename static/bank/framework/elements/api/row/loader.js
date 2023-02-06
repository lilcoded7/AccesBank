define('text!framework/elements/api/row/row.html', [], function() {
    return '<div class="oj-flex oj-flex-items-pad row"><div class="oj-flex-item oj-sm-12 row__label label-container" data-bind="css:{\'oj-md-4 oj-lg-3\':($properties.dashboard.appData.segment ===\'ADMIN\' || $properties.dashboard.appData.segment ===\'CORPADMIN\')}"><span class="label-container__label" data-bind="text : $properties.label"></span></div><!-- ko if: !Array.isArray(ko.utils.unwrapObservable($properties.value))--><div class="oj-flex-item oj-sm-12 row__value" data-bind="attr: {\'data-id\' : dataId}, text : $properties.value"></div><!-- /ko --><!-- ko if: Array.isArray(ko.utils.unwrapObservable($properties.value))--><div class="oj-flex-item oj-sm-12" data-bind="attr: {\'data-id\' : dataId}"><div class="oj-flex oj-flex-items-pad"><!-- ko foreach: $properties.value --><!-- ko if: ko.utils.unwrapObservable($data) --><div class="oj-flex-item oj-sm-12 row__value multiple" data-bind="css:$parent.dataClass, text : $data"></div><!-- /ko --><!-- /ko --></div></div><!-- /ko --></div>';
});

define('framework/elements/api/row/row', ["jquery", "framework/js/constants/constants"], function(t, a) {
    "use strict";

    function s(s) {
        const e = this;
        e.dataClass = s.properties.dataClass, e.dataId = s.properties.dataId || s.properties.baseModel.incrementIdCount(), e.computeStyles = function() {
            t("div[data-id=" + e.dataId + "]").addClass(e.dataClass), "ADMIN" !== a.userSegment && "CORPADMIN" !== a.userSegment || t("div[data-id=" + e.dataId + "]").addClass("oj-md-8 oj-lg-9")
        }
    }
    return s.prototype.bindingsApplied = function() {
        this.computeStyles()
    }, s
});

define('text!framework/elements/api/row/component.json', [], function() {
    return '{\r\n    "name": "obdx-row",\r\n    "version": "1.0.0",\r\n    "jetVersion": "^8.1.0",\r\n    "displayName": "Framework Composite Component",\r\n    "description": "Framework Composite Component",\r\n    "properties": {\r\n        "baseModel": {\r\n            "description": "BaseModel Object",\r\n            "type": "object",\r\n            "required": true\r\n        },\r\n        "dashboard": {\r\n            "description": "Dashboard Object",\r\n            "type": "object",\r\n            "required": true\r\n        },\r\n        "label": {\r\n            "description": "Label",\r\n            "type": "string",\r\n            "required": true\r\n        },\r\n        "value": {\r\n            "description": "Value",\r\n            "type": "Array|string|number",\r\n            "required": true\r\n        },\r\n        "dataClass": {\r\n            "description": "Class",\r\n            "type": "string",\r\n            "translatable": false\r\n        },\r\n        "dataId": {\r\n            "description": "Class",\r\n            "type": "string",\r\n            "translatable": false\r\n        }\r\n    },\r\n    "methods": {},\r\n    "events": {},\r\n    "slots": {}\r\n}';
});


define('text!framework/elements/api/row/row.css', [], function() {
    return '.row-container .row .label-container__label{line-height:21px;display:block;color:var(--base-text-secondary);font-size:var(--base-font-size-medium);font-weight:var(--base-font-weight-light)}.ADMIN .row-container .row .label-container__label,.ANON .row-container .row .label-container__label{line-height:var(--form-line-height)}.row-container .row .row__value{line-height:21px;padding-bottom:.5rem;min-height:calc(var(--form-line-height) + .5rem)}.row-container .row .row__value.multiple{line-height:calc(var(--form-line-height)*.6)}.row-container .row .row__value.multiple:not(:first-child){margin-top:-.5rem}.row-container .row .row__value.multiple:last-child{padding-bottom:.5rem}';
});

define('framework/elements/api/row/loader', ["ojs/ojcomposite", "module", "text!./row.html", "./row", "text!./component.json", "text!./row.css", "base-models/css"], function(e, o, t, s, m, r, n) {
    "use strict";
    e.register("obdx-row", {
        view: n.transformTemplate(t, r, n.getComponentName(o)),
        viewModel: s,
        metadata: JSON.parse(m)
    })
});