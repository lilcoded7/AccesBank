define('text!extensions/framework/elements/core/offline-notification/offline-notification.html', [], function() {
    return '<div role="log" aria-live="polite"><!-- ko if: isOffline --><div class="offline-notification"><div class="offline-notification-message" data-bind="text: locale.offlineMessage"></div><a class="offline-notification__message" href="#" data-bind="attr:{\'title\': locale.dismissTitle,\'alt\': locale.dismiss},\n                            text: locale.dismiss,\n                            click: dismiss.bind($data, $properties.baseModel.format(locale.lastActivity, {lat: $properties.formatter.formatDate($properties.baseModel.lastUpdatedTime().toISOString(), \'timeFormat\')}))"></a></div><!-- /ko --></div>';
});

define('resources/nls/offline-notification', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                offlineMessage: "Oops! You currently seem to be offline",
                lastActivity: "Last updated at {lat}",
                dismiss: "Dismiss",
                dismissTitle: "Click to dismiss the notification"
            },
            ar: !0,
            fr: !0,
            zh_CN: !0,
            cs: !1,
            sv: !1,
            en: !1,
            "en-us": !1,
            el: !1,
            es: !0
        }
    }
});

define('extensions/framework/elements/core/offline-notification/offline-notification', ["knockout", "jquery", "ojL10n!resources/nls/offline-notification"], function(e, i, n) {
    "use strict";
    return function(o) {
        const t = this;
        t.locale = n, t.isOffline = e.observable(!1);
        let f = null;
        o.properties.baseModel.addEvent("client-is-offline", {
            element: window,
            eventName: "offline",
            eventHandler: function() {
                t.isOffline(!0), e.tasks.runEarly(), i("div.offline-notification").removeClass("flip-down slide-and-resize"), i("div.offline-notification").addClass("flip-down"), f = setTimeout(function() {
                    document.querySelector(".offline-notification__message").click()
                }, 5e3)
            }
        }), o.properties.baseModel.addEvent("client-is-online", {
            element: window,
            eventName: "online",
            eventHandler: function() {
                clearTimeout(f), i("div.offline-notification").fadeOut("slow", function() {
                    t.isOffline(!1)
                })
            }
        }), t.dismiss = function(e) {
            clearTimeout(f), i("div.offline-notification a").remove(), i("div.offline-notification").addClass("slide-and-resize"), i("div.offline-notification div").html(e)
        }
    }
});

define('text!extensions/framework/elements/core/offline-notification/component.json', [], function() {
    return '{\r\n  "name": "offline-notification",\r\n  "version": "1.0.0",\r\n  "jetVersion": "^8.1.0",\r\n  "displayName": "Framework Composite Component",\r\n  "description": "Framework Composite Component",\r\n  "properties": {\r\n    "baseModel": {\r\n      "type": "object"\r\n    },\r\n    "formatter": {\r\n      "type": "object"\r\n    }\r\n  },\r\n  "methods": {\r\n\r\n  }, \r\n  "events": {\r\n\r\n  }, \r\n  "slots": {\r\n\r\n  }\r\n}';
});


define('text!extensions/framework/elements/core/offline-notification/offline-notification.css', [], function() {
    return '.offline-notification-container .offline-notification{display:flex;align-items:center;color:var(--base-color-secondary-text);justify-content:center;height:1.9rem;text-align:center;font-size:var(--base-font-size-default);font-weight:var(--base-font-weight-light);position:fixed;bottom:0;z-index:101}[dir=rtl] .offline-notification-container .offline-notification{right:0}[dir=ltr] .offline-notification-container .offline-notification{left:0}[dir=rtl] .offline-notification-container .offline-notification-message{padding-left:calc(var(--form-line-height) - .4rem)}[dir=ltr] .offline-notification-container .offline-notification-message{padding-right:calc(var(--form-line-height) - .4rem)}.offline-notification-container .offline-notification__messagea:link{color:var(--base-text-primary);text-decoration:underline}';
});

define('extensions/framework/elements/core/offline-notification/loader', ["ojs/ojcomposite", "module", "text!./offline-notification.html", "./offline-notification", "text!./component.json", "text!./offline-notification.css", "base-models/css"], function(e, t, o, i, n, f, s) {
    "use strict";
    e.register("offline-notification", {
        viewModel: i,
        view: s.transformTemplate(o, f, s.getComponentName(t)),
        metadata: JSON.parse(n)
    })
});