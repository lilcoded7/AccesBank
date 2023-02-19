define('text!framework/elements/api/nav-bar/nav-bar.html', [], function() {
    return '<!-- ko if:$properties.navBarDescription --><div class="nav-bar" :class="[[{\'inherit-height\' :$properties.orientation ===\'vertical\'}]]"><oj-conveyor-belt class="full-width" :class="[[{\'inherit-height\' :$properties.orientation ===\'vertical\'}]]" orientation="[[$properties.orientation? $properties.orientation : \'horizontal\']]"><oj-navigation-list :data-id="[[navBarId]]" selection="{{$properties.defaultOption}}" display="[[$properties.baseModel.small() && iconAvailable? \'icons\' : \'all\']]" data="[[dataSource]]" :edge="[[$properties.orientation ? $properties.orientation === \'vertical\'? \'start\' : \'top\' : \'top\']]" :aria-label="[[$properties.navBarDescription]]" on-oj-before-select="[[$properties.onBeforeSelect]]"><template slot="itemTemplate"><oj-bind-template-slot name="itemTemplate" data="[[$current.data]]"><template data-oj-as="item"><li class="nav-bar-list__item nav-bar-item" data-bind="attr:{id:item.id},css:{\'oj-disabled\':item.disabled}"><a class="nav-bar-item__link nav-bar-item-link" href="#" data-bind="attr:{\'alt\':item.label ,\'title\': $properties.baseModel.format($data.locale.common.clickHere, {\'action\': item.label}) }"><!-- ko if:item.icon --> <span class="oj-navigationlist-item-icon" data-bind="css:item.icon"></span><!-- /ko --><!-- ko if:item.image --> <img class="oj-navigationlist-item-icon" data-bind="loadImage:item.image"/><!-- /ko --><!-- ko if:item.imageSrc --> <img class="oj-navigationlist-item-icon" data-bind="attr : {src : item.imageSrc},css:item.imageStyle"/><!-- /ko --><div><span class="nav-bar-item-link__text" data-bind="text:item.label"></span><!-- ko if:!isNaN(ko.utils.unwrapObservable(item.count)) --> <span class="tags nav-bar-item-link__count" data-bind="text:item.count"></span><!-- /ko --></div></a></li></template></oj-bind-template-slot></template></oj-navigation-list></oj-conveyor-belt></div><!-- /ko -->';
});


define('framework/elements/api/nav-bar/nav-bar', ["ojs/ojcore", "knockout", "jquery", "ojL10n!resources/nls/generic", "ojs/ojnavigationlist", "ojs/ojconveyorbelt", "ojs/ojarraytabledatasource"], function(e, t, o, n) {
    "use strict";

    function a(a) {
        const i = this;
        i.oj = e, i.navigationLevel = t.observable("page"), i.locale = n, i.menuOptions = null, i.iconAvailable = a.properties.iconAvailable, i.navBarId = a.unique + "-navigation-list", i.dataSource = new e.ArrayTableDataSource(a.properties.menuOptions, {
            idAttribute: "id"
        }), i.styleClass = function() {
            const e = o("oj-navigation-list[data-id='" + i.navBarId + "']");
            switch (e.addClass(a.properties.fullWidth ? "" : "oj-sm-condense"), a.properties.menuFloat) {
                case "center":
                    e.addClass("center");
                    break;
                case "left":
                    e.addClass("pull-left");
                    break;
                case "right":
                    e.addClass("pull-right")
            }
        }, a.properties.scrollIntoView && e.Context.getContext(document.querySelector("oj-navigation-list[data-id='" + i.navBarId + "']")).getBusyContext().whenReady().then(function() {
            setTimeout(function() {
                document.querySelector("#" + t.utils.unwrapObservable(a.properties.defaultOption)).scrollIntoView(!1)
            }, 500)
        })
    }
    return a.prototype.bindingsApplied = function() {
        this.styleClass()
    }, a
});

define('text!framework/elements/api/nav-bar/component.json', [], function() {
    return '{\r\n  "name": "nav-bar",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "scrollIntoView": {\r\n      "description": "A boolean value",\r\n      "type": "boolean"\r\n    },\r\n    "menuOptions": {\r\n      "description": "An Array",\r\n      "type": "Array",\r\n      "required": true\r\n    },\r\n    "navBarDescription": {\r\n      "description": "Navigation bar Description String",\r\n      "type": "string",\r\n      "required": true\r\n    },\r\n    "menuFloat": {\r\n      "description": "Makes menu float in left|right|center",\r\n      "type": "string",\r\n      "required": true,\r\n      "translatable": false\r\n    },\r\n    "fullWidth": {\r\n      "description": "A boolean value to enable or disable fullWidth",\r\n      "type": "boolean"\r\n    },\r\n    "defaultOption": {\r\n      "type": "function",\r\n      "writeback": true,\r\n      "required": true\r\n    },\r\n    "onBeforeSelect": {\r\n      "type": "function"\r\n    },\r\n    "baseModel": {\r\n      "description": "BaseModel Object",\r\n      "type": "Object",\r\n      "required": true\r\n    },\r\n    "orientation": {\r\n      "description": "horizontal by default",\r\n      "type": "string",\r\n      "translatable": false\r\n    }\r\n  },\r\n  "methods": {},\r\n  "events": {},\r\n  "slots": {\r\n    "itemTemplate": {\r\n      "description": "Custom Template for Navigation-List Items"\r\n    }\r\n  }\r\n}';
});


define('text!framework/elements/api/nav-bar/nav-bar.css', [], function() {
    return '.nav-bar-container .nav-bar{width:auto;float:none;background:var(--base-background-primary);border-bottom:.055rem solid var(--base-border-default)}.nav-bar-container .nav-bar-list{justify-content:flex-start;width:100%;align-items:center;margin:0;border-bottom:.055rem solid var(--base-border-default)}.nav-bar-container .nav-bar-item{text-align:center;margin:0;height:auto;padding:0 .6rem}.nav-bar-container .nav-bar-item:last-child a{border:0}.nav-bar-container .nav-bar-item-link__text{font-size:var(--nav-default-font-size);font-weight:var(--nav-default-font-weight);display:inline-block}.nav-bar-container .nav-bar-item-link__icon{display:inline-block;position:relative;top:.2rem;color:var(--nav-default-foreground-color)!important;font-size:var(--nav-default-font-size);font-weight:var(--nav-default-font-weight)}[dir=rtl] .nav-bar-container .nav-bar-item-link__icon{padding-left:.6rem}[dir=ltr] .nav-bar-container .nav-bar-item-link__icon{padding-right:.6rem}.nav-bar-container .nav-bar-item-link__count{background:var(--nav-hover-border-color);color:#fff}.nav-bar-container .nav-bar-item.oj-navigationlist-item.oj-navigationlist-item-element.oj-default{border-bottom:transparent}.nav-bar-container .nav-bar-item.oj-navigationlist-item.oj-navigationlist-item-element.oj-default a .oj-navigationlist-item-label{color:var(--nav-default-foreground-color)!important;font-size:var(--nav-default-font-size);font-weight:var(--nav-default-font-weight)}.nav-bar-container .nav-bar-item.oj-navigationlist-item.oj-navigationlist-item-element.oj-hover:not(.oj-selected){border-bottom:var(--nav-hover-border-width) solid var(--nav-hover-border-color);border-radius:var(--nav-hover-border-radius);background:linear-gradient(to var(--nav-hover-gradient-direction),var(--nav-hover-gradient-start-color),var(--nav-hover-gradient-end-color))}.nav-bar-container .nav-bar-item.oj-navigationlist-item.oj-navigationlist-item-element.oj-hover:not(.oj-selected) a .oj-navigationlist-item-label{color:var(--nav-hover-foreground-color)!important;font-size:var(--nav-hover-font-size);font-weight:var(--nav-hover-font-weight)}.nav-bar-container .nav-bar-item.oj-navigationlist-item.oj-navigationlist-item-element.oj-hover:not(.oj-selected) a .nav-bar-item-link__icon{color:var(--nav-hover-foreground-color)!important}.nav-bar-container .nav-bar-item.oj-navigationlist-item.oj-navigationlist-item-element.oj-selected{border-bottom:var(--nav-selected-border-width) solid var(--nav-selected-border-color);border-radius:var(--nav-selected-border-radius);background:linear-gradient(to var(--nav-selected-background-gradient-direction),var(--nav-selected-background-gradient-start-color),var(--nav-selected-background-gradient-end-color))}.nav-bar-container .nav-bar-item.oj-navigationlist-item.oj-navigationlist-item-element.oj-selected a .oj-navigationlist-item-label{color:var(--nav-selected-foreground-color)!important;font-size:var(--nav-selected-font-size);font-weight:var(--nav-selected-font-weight)}.nav-bar-container .nav-bar-item.oj-navigationlist-item.oj-navigationlist-item-element.oj-selected .oj-navigationlist-item-icon{color:var(--nav-selected-border-color)}.nav-bar-container .nav-bar .oj-navigationlist-icon-only .oj-navigationlist-item-label{display:block}.nav-bar-container .nav-bar .oj-navigationlist-vertical{width:100%}.nav-bar-container .nav-bar .oj-navigationlist-vertical:not(.oj-navigationlist-icon-only) .oj-navigationlist-item{text-align:left;border-bottom:.05rem solid var(--base-border-default)}[dir=rtl] .nav-bar-container .nav-bar .oj-navigationlist-vertical:not(.oj-navigationlist-icon-only) .oj-navigationlist-item{text-align:right}.nav-bar-container .nav-bar .oj-navigationlist-vertical:not(.oj-navigationlist-icon-only) .oj-navigationlist-item.oj-hover:not(.oj-selected){border-left-color:var(--base-color-primary);border-bottom:transparent}.nav-bar-container .nav-bar .oj-navigationlist-vertical:not(.oj-navigationlist-icon-only) .oj-navigationlist-item.oj-selected{border-left-color:var(--nav-selected-border-color);background-color:var(--nav-selected-background)}.nav-bar-container .nav-bar .oj-navigationlist-vertical:not(.oj-navigationlist-icon-only) .oj-navigationlist-item.oj-selected .oj-navigationlist-item-icon{color:var(--nav-selected-border-color)}.nav-bar-container .nav-bar .oj-conveyorbelt-vertical .oj-conveyorbelt-overflow-container,.nav-bar-container .nav-bar .oj-conveyorbelt-vertical .oj-conveyorbelt-overflow-container .oj-conveyorbelt-content-container{width:100%}.nav-bar-container .inherit-height{height:inherit}@media only screen and (max-width:767px){.nav-bar-container .nav-bar-item{min-width:inherit}.nav-bar-container .nav-bar-item-link__text{display:block;text-align:center}.nav-bar-container .nav-bar-item-link__icon{display:block;text-align:center;font-size:var(--nav-default-font-size);border:none;width:100%}}';
});

define('framework/elements/api/nav-bar/loader', ["ojs/ojcomposite", "module", "text!./nav-bar.html", "./nav-bar", "text!./component.json", "text!./nav-bar.css", "base-models/css"], function(e, t, a, o, s, n, m) {
    "use strict";
    e.register("nav-bar", {
        viewModel: o,
        view: m.transformTemplate(a, n, m.getComponentName(t)),
        metadata: JSON.parse(s)
    })
});