define("framework/js/configurations/path-config", ["framework/js/configurations/config"], function(e) {
        "use strict";

        function t(t) {
            return (t.indexOf(".css") > -1 ? "css!" : "") + e.oracleJet.baseUrl + "/" + e.oracleJet.version + "/" + t
        }

        function n(e) {
            const t = e.indexOf(".css") > -1;
            return (t ? "css!" : "") + "framework/js/libs/oraclejet/12.1.0/" + (t ? "css" : "js") + "/libs/" + e
        }

        function o() {
            const e = navigator.userAgent;
            return -1 !== e.indexOf("MSIE") || !!e.match(/Trident.*rv:11./)
        }
        const r = {
            local: {
                paths: {
                    ojs: n("oj/v" + e.oracleJet.version + "/min" + (o() ? "_es5" : "")),
                    ojtranslations: n("oj/v" + e.oracleJet.version + "/resources"),
                    jquery: n("jquery/jquery-3.6.0.min"),
                    knockout: n("knockout/knockout-3.5.1"),
                    text: n("require/text"),
                    "jqueryui-amd": n("jquery/jqueryui-amd-1.13.0.min"),
                    customElements: n("webcomponents/custom-elements.min"),
                    promise: n("es6-promise/es6-promise.min"),
                    hammerjs: n("hammer/hammer-2.0.8.min"),
                    ojdnd: n("dnd-polyfill/dnd-polyfill-1.0.2.min"),
                    css: n("require-css/css.min"),
                    fetch: n("persist/min/impl/fetch"),
                    ojL10n: n("oj/v" + e.oracleJet.version + "/ojL10n"),
                    touchr: n("touchr/touchr"),
                    signals: n("js-signals/signals"),
                    alta: n("oj/v" + e.oracleJet.version + "/alta/oj-alta-notag-min.css"),
                    preact: n("preact/dist/preact.umd"),
                    "preact/hooks": n("preact/hooks/dist/hooks.umd"),
                    "preact/compat": n("preact/compat/dist/compat.umd")
                }
            },
            cdn: {
                paths: {
                    ojs: t("default/js/min" + (o() ? "_es5" : "")),
                    ojtranslations: t("default/js/resources"),
                    "jqueryui-amd": t("3rdparty/jquery/jqueryui-amd-1.13.0.min"),
                    fetch: t("3rdparty/persist/min/impl/fetch"),
                    knockout: t("3rdparty/knockout/knockout-3.5.1"),
                    alta: t("default/css/alta/oj-alta-notag-min.css"),
                    corejs: t("3rdparty/corejs/shim.min"),
                    ojcss: t("default/js/min/ojcss"),
                    "css-builder": t("3rdparty/require-css/css-builder"),
                    normalize: t("3rdparty/require-css/normalize"),
                    "regenerator-runtime": t("3rdparty/regenerator-runtime/runtime"),
                    proj4: t("3rdparty/proj4js/dist/proj4"),
                    persist: t("3rdparty/persist/min")
                },
                bundles: {
                    "ojs/oj3rdpartybundle": ["knockout", "jquery", "jqueryui-amd/version", "jqueryui-amd/widget", "jqueryui-amd/unique-id", "jqueryui-amd/keycode", "jqueryui-amd/focusable", "jqueryui-amd/tabbable", "jqueryui-amd/ie", "jqueryui-amd/widgets/draggable", "jqueryui-amd/widgets/mouse", "jqueryui-amd/widgets/sortable", "jqueryui-amd/data", "jqueryui-amd/plugin", "jqueryui-amd/safe-active-element", "jqueryui-amd/safe-blur", "jqueryui-amd/scroll-parent", "jqueryui-amd/widgets/draggable", "jqueryui-amd/position", "signals", "text", "hammerjs", "ojdnd", "preact", "preact/hooks", "preact/compat", "css", "touchr"],
                    "ojs/ojcorebundle": ["ojL10n", "ojtranslations/nls/ojtranslations", "ojs/ojlogger", "ojs/ojcore-base", "ojs/ojcontext", "ojs/ojconfig", "ojs/ojresponsiveutils", "ojs/ojthemeutils", "ojs/ojtimerutils", "ojs/ojtranslation", "ojs/ojcore", "ojs/ojmessaging", "ojs/ojmetadatautils", "ojs/ojdefaultsutils", "ojs/ojcustomelement-utils", "ojs/ojcustomelement", "ojs/ojdomutils", "ojs/ojfocusutils", "ojs/ojgestureutils", "ojs/ojcomponentcore", "ojs/ojkoshared", "ojs/ojhtmlutils", "ojs/ojtemplateengine", "ojs/ojcomposite-knockout", "ojs/ojcomposite", "ojs/ojbindingprovider", "ojs/ojknockouttemplateutils", "ojs/ojresponsiveknockoututils", "ojs/ojkeysetimpl", "ojs/ojknockout", "ojs/ojknockout-validation", "ojs/ojrouter", "ojs/ojmodule", "ojs/ojmodule-element", "ojs/ojmodule-element-utils", "ojs/ojanimation", "ojs/ojmoduleanimations", "ojs/ojdefer", "ojs/ojdatasource-common", "ojs/ojarraytabledatasource", "ojs/ojeventtarget", "ojs/ojdataprovider", "ojs/ojdataprovideradapter-base", "ojs/ojdataprovideradapter", "ojs/ojset", "ojs/ojmap", "ojs/ojarraydataprovider", "ojs/ojlistdataproviderview", "ojs/ojcss", "ojs/ojbootstrap", "ojs/ojvcomponent", "ojs/ojpreact-patch", "ojs/ojvcomponent-binding", "ojs/ojvcomponent-remounter", "ojs/ojvcomponent-template", "ojs/ojdataproviderhandler", "ojs/ojexpressionutils", "ojs/ojkeyset", "ojs/ojtreedataproviderview", "ojs/ojexpparser", "ojs/ojcspexpressionevaluator", "ojs/ojtreedataprovideradapter", "ojs/ojcorerouter", "ojs/ojurlparamadapter", "ojs/ojurlpathadapter", "ojs/ojmodulerouter-adapter", "ojs/ojknockoutrouteradapter", "ojs/ojobservable", "ojs/ojbinddom", "ojs/ojdeferreddataprovider", "ojs/ojtracer"],
                    "ojs/ojcommoncomponentsbundle": ["ojs/ojoption", "ojs/ojchildmutationobserver", "ojs/ojjquery-hammer", "ojs/ojpopupcore", "ojs/ojpopup", "ojs/ojlabel", "ojs/ojlabelledbyutils", "ojs/ojbutton", "ojs/ojmenu", "ojs/ojtoolbar", "ojs/ojdialog", "ojs/ojoffcanvas", "ojs/ojdomscroller", "ojs/ojdatacollection-common", "ojs/ojdataproviderscroller", "ojs/ojlistview", "ojs/ojlistitemlayout", "ojs/ojnavigationlist", "ojs/ojavatar", "ojs/ojswitcher", "ojs/ojmessage", "ojs/ojmessages", "ojs/ojconveyorbelt", "ojs/ojcollapsible", "ojs/ojaccordion", "ojs/ojprogress", "ojs/ojprogressbar", "ojs/ojprogress-bar", "ojs/ojprogress-circle", "ojs/ojprogresslist", "ojs/ojfilmstrip", "ojs/ojtouchproxy", "ojs/ojselector", "ojs/ojtreeview", "ojs/ojinputsearch", "ojs/ojhighlighttext", "ojs/ojactioncard", "ojs/ojmessagebanner"],
                    "ojs/ojformbundle": ["ojtranslations/nls/localeElements", "ojs/ojlocaledata", "ojs/ojconverterutils", "ojs/ojvalidator", "ojs/ojvalidation-error", "ojs/ojvalidator-required", "ojs/ojeditablevalue", "ojs/ojconverter", "ojs/ojvalidator-async", "ojs/ojconverterutils-i18n", "ojs/ojconverter-number", "ojs/ojvalidator-numberrange", "ojs/ojinputnumber", "ojs/ojvalidator-regexp", "ojs/ojfilter", "ojs/ojfilter-length", "ojs/ojinputtext", "ojs/ojoptgroup", "ojs/ojlabelvalue", "ojs/ojformlayout", "ojs/ojradiocheckbox", "ojs/ojcheckboxset", "ojs/ojradioset", "ojs/ojconverter-color", "ojs/ojvalidator-length", "ojs/ojvalidationfactory-base", "ojs/ojvalidation-base", "ojs/ojvalidationfactory-number", "ojs/ojvalidation-number", "ojs/ojvalidationgroup", "ojs/ojasyncvalidator-adapter", "ojs/ojasyncvalidator-length", "ojs/ojasyncvalidator-numberrange", "ojs/ojasyncvalidator-regexp", "ojs/ojasyncvalidator-required", "ojs/ojslider", "ojs/ojswitch", "ojs/ojcolor", "ojs/ojfilepicker", "ojs/ojselectbase", "ojs/ojselectsingle"],
                    "ojs/ojdatetimebundle": ["ojs/ojcalendarutils", "ojs/ojconverter-datetime", "ojs/ojconverter-nativedatetime", "ojs/ojvalidator-datetimerange", "ojs/ojvalidator-daterestriction", "ojs/ojdatetimepicker", "ojs/ojvalidationfactory-datetime", "ojs/ojvalidation-datetime", "ojs/ojasyncvalidator-daterestriction", "ojs/ojasyncvalidator-datetimerange"],
                    "ojs/ojdvtbasebundle": ["ojs/ojdvt-toolkit", "ojs/ojattributegrouphandler", "ojs/ojdvt-base"],
                    "ojs/ojchartbundle": ["ojs/ojdvt-axis", "ojs/ojchart-toolkit", "ojs/ojlegend-toolkit", "ojs/ojdvt-overview", "ojs/ojgauge-toolkit", "ojs/ojchart", "ojs/ojlegend", "ojs/ojgauge"],
                    "ojs/ojtimezonebundle": ["ojs/ojtimezonedata", "ojtranslations/nls/timezoneData"],
                    "persist/offline-persistence-toolkit-core-1.5.7": ["persist/persistenceUtils", "persist/impl/logger", "persist/impl/PersistenceXMLHttpRequest", "persist/persistenceStoreManager", "persist/impl/defaultCacheHandler", "persist/impl/PersistenceSyncManager", "persist/impl/OfflineCache", "persist/impl/offlineCacheManager", "persist/impl/fetch", "persist/persistenceManager", "persist/impl/PersistenceStoreMetadata"],
                    "persist/offline-persistence-toolkit-pouchdbstore-1.5.7": ["persist/PersistenceStore", "persist/impl/storageUtils", "persist/pouchdb-browser-7.2.2", "persist/impl/pouchDBPersistenceStore", "persist/pouchDBPersistenceStoreFactory", "persist/configurablePouchDBStoreFactory", "persist/persistenceStoreFactory"],
                    "persist/offline-persistence-toolkit-arraystore-1.5.7": ["persist/PersistenceStore", "persist/impl/storageUtils", "persist/impl/keyValuePersistenceStore", "persist/impl/arrayPersistenceStore", "persist/arrayPersistenceStoreFactory", "persist/persistenceStoreFactory"],
                    "persist/offline-persistence-toolkit-localstore-1.5.7": ["persist/PersistenceStore", "persist/impl/storageUtils", "persist/impl/keyValuePersistenceStore", "persist/impl/localPersistenceStore", "persist/localPersistenceStoreFactory", "persist/persistenceStoreFactory"],
                    "persist/offline-persistence-toolkit-filesystemstore-1.5.7": ["persist/impl/storageUtils", "persist/impl/keyValuePersistenceStore", "persist/impl/fileSystemPersistenceStore", "persist/fileSystemPersistenceStoreFactory"],
                    "persist/offline-persistence-toolkit-responseproxy-1.5.7": ["persist/fetchStrategies", "persist/cacheStrategies", "persist/defaultResponseProxy", "persist/simpleJsonShredding", "persist/oracleRestJsonShredding", "persist/simpleBinaryDataShredding", "persist/queryHandlers"]
                }
            }
        };
        return require.config(r[e.oracleJet.hostedAt]), {
            jetLocation: e.oracleJet.hostedAt,
            altaPath: r[e.oracleJet.hostedAt].paths.alta
        }
    }),
    function() {
        "use strict";
        document.querySelector("body").classList.add("page-is-changing"), require.config({
            baseUrl: document.currentScript && document.currentScript.dataset.baseUrl ? document.currentScript.dataset.baseUrl : "./",
            waitSeconds: 0,
            paths: {
                "knockout-helper": "framework/js/plugins/amd-helper",
                baseService: "framework/js/base-models/service-base",
                composite: "framework/elements",
                baseLogger: "framework/js/base-models/logging-base",
                paperAccordion: "framework/js/plugins/paper-accordion",
                baseModel: "framework/js/base-models/ko/base-model",
                "base-model": "framework/js/base-models/base-model",
                "base-models": "framework/js/base-models",
                worker: "framework/js/base-models/web-worker",
                thirdPartyLibs: "framework/js/libs",
                platform: "framework/js/base-models/platform",
                webAnalytics: "framework/js/base-models/third-party-data-aggregation",
                "jquery-private": "framework/js/plugins/jquery-private",
                load: "framework/js/plugins/load",
                "knockout-mapping": "framework/js/libs/knockout.mapping-latest"
            },
            map: {
                "*": {
                    jquery: "jquery-private"
                },
                "jquery-private": {
                    jquery: "jquery"
                }
            },
            shim: {
                paperAccordion: {
                    exports: "paperAccordion",
                    deps: ["jquery"]
                }
            },
            config: {
                text: {
                    useXhr: function() {
                        return !0
                    }
                }
            },
            locale: sessionStorage.getItem("user-locale") || document.getElementsByTagName("html")[0].getAttribute("lang") || "en"
        }), require(["framework/js/configurations/path-config"], function(e) {
            require(["fetch"], function() {
                var t;
                t = e, require(["platform", "ojs/ojcore", "jquery"], function(e) {
                    e.getInstance("device").then(function() {
                        require(["framework/js/view-model/generic-view-model"])
                    }), require(["webAnalytics", "css!framework/css/obdx-font", t.altaPath], function(e) {
                        e.getInstance()
                    })
                })
            })
        })
    }(), define("require-config", function() {}), define("framework/js/constants/constants", [], function() {
        "use strict";
        const e = {
            userSegment: null,
            currentServerDate: new Date(0),
            timezoneOffset: 0,
            currentEntity: null,
            jsonContext: null,
            bankConfig: null,
            localization: null,
            applicationType: null
        };
        return Object.seal(e)
    }), define("load", ["framework/js/configurations/config", "text"], function(e, t) {
        "use strict";
        const n = {},
            o = function(e, t) {
                return e.split("?")[0].match(new RegExp("\\" + t + "$"))
            },
            r = function(e) {
                return o(e, ".json")
            };
        return {
            load: function(s, a, i, c) {
                var l;
                c.load && !1 === c.load.inline ? i() : 0 !== s.indexOf("empty:") ? (s = c.baseUrl + s + (!c || c.isBuild || e.development.enabled ? "" : "?bust=" + e.system.buildTimestamp), t.get(s, function(e) {
                    let t;
                    if (c.isBuild) n[s] = e, i(e);
                    else {
                        try {
                            t = function(e, t) {
                                return r(s) ? JSON.parse(t) : t
                            }(0, e)
                        } catch (e) {
                            i.error(e)
                        }
                        i(t)
                    }
                }, i.error, {
                    accept: r(s) ? "application/json" : (l = s, o(l, ".css") ? "text/css" : "text/html")
                })) : i()
            },
            write: function(e, o, s) {
                const a = requirejsVars.requirejs.toUrl(o),
                    i = n[a];
                if (i) {
                    let n;
                    s('define("' + e + "!" + o + '", function(){ return ' + (n = r(a) ? i.replace(/\s/g, "") : "'" + t.jsEscape(i) + "'") + ";});\n")
                }
            }
        }
    }), define("load!extensions/override/path-config.json", function() {
        return {}
    }), define("text!extensions/override/path-mapping.json", [], function() {
        return '{\r\n    "components": {\r\n       \r\n    },\r\n    "partials": {\r\n        \r\n    },\r\n    "flows": {\r\n       \r\n    }\r\n}'
    }), define("extensions/override/extensions", ["load!./path-config.json", "text!extensions/extension.json", "text!extensions/override/path-mapping.json"], function(e, t, n) {
        "use strict";
        const o = JSON.parse(t),
            r = JSON.parse(n);
        return {
            evaluateSegment: function(e, t) {
                return null
            },
            evaluateContext: function(e, t) {
                return null
            },
            init: function() {
                const t = {};
                if (o.framework && o.framework.length && o.framework.forEach(e => {
                        t["framework/elements/" + e + "/loader"] = "extensions/framework/elements/" + e + "/loader"
                    }), Object.keys(e).length || Object.keys(t)) {
                    const n = Object.assign({}, e, t);
                    require.config({
                        map: {
                            "*": n
                        }
                    })
                }
                return null
            },
            getCurrencyFormattingOptions: function(e) {
                return null
            },
            getCurrencyFractionalDigit: function(e) {
                return null
            },
            getMappedComponentPath: function(e, t) {
                let n = -1 !== o[e].indexOf(r[e][t]);
                if ("flows" !== e || n || (n = -1 !== o.components.indexOf(r.flows[t])), r[e][t] && n) {
                    const n = r[e][t].split("/");
                    return {
                        component: n[n.length - 1],
                        module: n.slice(0, n.length - 1).join("/")
                    }
                }
                return null
            }
        }
    }), define("knockout-helper", ["knockout", "framework/js/constants/constants", "framework/js/configurations/config", "text!extensions/extension.json", "extensions/override/extensions"], function(e, t, n, o, r) {
        "use strict";
        const s = window.require,
            a = JSON.parse(o);
        ! function(e, o) {
            const s = new e.nativeTemplateEngine,
                i = {};
            s.loader = function(e, s) {
                const i = r.getMappedComponentPath("partials", e),
                    c = a.partials.indexOf(e) > -1 || i ? "extensions/partials" : t.localization && t.localization.data && t.localization.data.partials.indexOf(e) > -1 ? "lzn/" + t.localization.name + "/partials" : "./partials";
                var l;
                o(["text!" + (l = c, l && l.replace(/\/?$/, "/")) + (i ? i.module + "/" + i.component : e) + ".html" + (n.development.enabled ? "" : "?bust=" + n.system.buildTimestamp)], s)
            }, e.templateSources.requireTemplate = function(t) {
                this.key = t, this.template = e.observable(" "), this.requested = !1, this.retrieved = !1
            }, e.templateSources.requireTemplate.prototype.text = function() {
                if (!this.requested && this.key && (s.loader(this.key, function(e) {
                        this.retrieved = !0, this.template(e)
                    }.bind(this)), this.requested = !0), this.key || this.template(""), 0 === arguments.length) return this.template()
            }, s.createRootTemplate = function(t, n) {
                let o;
                return "string" == typeof t ? (o = (n || document).getElementById(t)) && "script" === o.tagName.toLowerCase() ? new e.templateSources.domElement(o) : (i[t] || (i[t] = new e.templateSources.requireTemplate(t)), i[t]) : !t || 1 !== t.nodeType && 8 !== t.nodeType ? void 0 : new e.templateSources.anonymousTemplate(t)
            }, s.renderTemplate = function(t, n, o, r) {
                let a, i = o && o.afterRender;
                const c = o && o.templateProperty && n.$module && n.$module[o.templateProperty];
                return i && (i = o.afterRender = o.afterRender.original || o.afterRender), a = !c || "function" != typeof c && "string" != typeof c ? s.createRootTemplate(t, r) : {
                    text: function() {
                        return "function" == typeof c ? c.call(n.$module) : c
                    }
                }, "function" == typeof i && a instanceof e.templateSources.requireTemplate && !a.retrieved && (o.afterRender = function() {
                    a.retrieved && i.apply(this, arguments)
                }, o.afterRender.original = i), s.renderTemplateSource(a, n, o, r)
            }, e.amdTemplateEngine = s, e.setTemplateEngine(s)
        }(e, s)
    }), define("base-models/utils/background-tasks", [], function() {
        "use strict";
        return new function() {
            let e = null;
            const t = [],
                n = window.requestIdleCallback || function(e) {
                    const t = Date.now();
                    return setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                o = function(r) {
                    for (;
                        (r.timeRemaining() > 0 || r.didTimeout) && t.length;) {
                        const e = t.shift();
                        e.handler(e.data)
                    }
                    e = t.length ? n(o, {
                        timeout: 1e3
                    }) : 0
                };
            return function(r, s) {
                t.push({
                    handler: r,
                    data: s
                }), e || (e = n(o, {
                    timeout: 1e3
                }))
            }
        }
    }), define("base-models/utils/prefetch", ["base-models/utils/background-tasks"], function(e) {
        "use strict";
        const t = window.performance,
            n = Object.freeze({
                FAST: 0,
                AVERAGE: 1,
                SLOW: 2
            }),
            o = {
                "slow-2g": n.SLOW,
                "2g": n.SLOW,
                "3g": n.AVERAGE,
                "4g": n.FAST
            },
            r = [],
            s = window.NetworkInformation && navigator.connection instanceof NetworkInformation && navigator.connection.effectiveType;

        function a(e, t) {
            return t = t || function(e) {
                return e
            }, e.reduce(function(e, n, o) {
                return e + (t(n) - e) / (o + 1)
            }, 0)
        }

        function i(t) {
            return new Promise(function(n) {
                e(function() {
                    require(t, function() {
                        n()
                    })
                })
            })
        }
        return function(e) {
            switch (function() {
                return s ? o[s] : (r.push((e = a(t.getEntriesByType("resource"), function(e) {
                    return e.responseEnd - e.startTime
                })) < 100 ? n.FAST : e < 300 && e >= 100 ? n.AVERAGE : e >= 300 ? n.SLOW : void 0), t.clearResourceTimings(), Math.ceil(a(r)));
                var e
            }() || n.FAST) {
                case n.FAST:
                    return i(e);
                case n.AVERAGE:
                    return i(e.slice(0, e.length / 3)).then(function() {
                        return i(e.slice(e.length / 3, 2 * e.length / 3))
                    }).then(function() {
                        return i(e.slice(2 * e.length / 3))
                    });
                case n.SLOW:
                    return e.reduce(function(e, t) {
                        return e.then(function() {
                            return i([t])
                        })
                    }, Promise.resolve())
            }
        }
    }), define("base-model", ["jquery", "framework/js/constants/constants", "base-models/utils/background-tasks", "base-models/utils/prefetch", "framework/js/configurations/config"], function(e, t, n, o, r) {
        "use strict";
        return function() {
            const s = this;
            s.enqueueTask = n, s.preFetch = o;
            const a = document.createElement("textarea"),
                i = new Map;
            let c;

            function l(e, t) {
                let n = e;
                for (let e = 0, o = t.split("."); e < o.length; e++) n = n[o[e]];
                return n
            }
            s.traverseAndApply = function(e, t) {
                let n;
                for (n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n))
                        if ("object" == typeof e[n]) s.traverseAndApply(e[n], t);
                        else if ("" !== e[n] && "break" === t(e[n])) break
            }, s.incrementIdCount = function() {
                const e = window.crypto || window.msCrypto,
                    t = new Uint8Array(20);
                return c = "obdx" + Array.prototype.slice.call(e.getRandomValues(t)).map(function(e) {
                    return e.toString(32)
                }).join("")
            }, s.currentIdCount = function() {
                return c || s.incrementIdCount(), c
            }, s.cordovaDevice = function() {
                if (window.cordova && window.device) return window.device.platform.toUpperCase()
            }, s.getDeviceSize = function() {
                const e = window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth;
                return e > 1279 ? "xl" : e > 1023 ? "large" : e > 767 ? "medium" : "small"
            }, s.getDescriptionFromCode = function(e, t, n, o) {
                let r = "";
                const s = n || "code",
                    a = o || "description";
                let i;
                if (e)
                    for (i = 0; i < e.length; i++)
                        if (e[i][s] === t) {
                            r = e[i][a];
                            break
                        }
                return r
            }, s.switchPage = function(e, t, n, o) {
                n = n || !0;
                const a = (t = t || !1) ? r.authentication.pages.securePage : r.authentication.pages.publicPage;
                window.onbeforeunload = null;
                const i = encodeURIComponent(JSON.stringify(o) || "");
                return i && (e.OBDX_ARGS = i), window.location[n ? "assign" : "replace"](s.QueryParams.add(a, e)), !1
            }, s.isEmpty = function(e) {
                return null == e || 0 === e.length
            }, s.displayInteraction = function(t, n, o) {
                e(n)[t](o)
            }, s.modalInteraction = function(t, n, o) {
                e(t).trigger(n, o)
            }, s.format = function(e, t, n) {
                if (!e) throw new ReferenceError("Please specify a valid message");
                if (t) {
                    const o = "string" == typeof t ? JSON.parse(t) : t,
                        r = Object.keys(o);
                    for (let t = 0; t < r.length; t++) {
                        const a = s.isEmpty(o[r[t]]) ? "" : o[r[t]];
                        e = e.replace("{" + r[t] + "}", n ? encodeURIComponent(a) : a)
                    }
                }
                return e
            }, s.getConstantsProp = function(e) {
                return l(t, e)
            }, s.sortLib = function(e, t, n) {
                if (!e || !t) throw new Error("Specify the data source and atleast one property to sort it by");
                if (!Array.isArray(e)) throw new Error("Specify the data source as an array");

                function o(e, t) {
                    const n = l(e, t);
                    return n || 0 === n ? "string" == typeof n && n.match(/^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i) ? new Date(n) : "string" == typeof n ? n.toLowerCase() : "boolean" == typeof n ? n.toString() : n : Number.NEGATIVE_INFINITY
                }
                return Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]),
                    function(t, n) {
                        return e.sort(function(e, r) {
                            for (let s = 0; s < n.length; s++) {
                                const a = n[s],
                                    i = o(e, a),
                                    c = o(r, a);
                                if (i < c || c === Number.NEGATIVE_INFINITY) return t[s] ? "asc" === t[s] ? -1 : 1 : -1;
                                if (i > c || i === Number.NEGATIVE_INFINITY) return t[s] ? "asc" === t[s] ? 1 : -1 : 1
                            }
                            return 0
                        })
                    }(n, t)
            }, s.groupBy = function(e, t, n) {
                let o, r;
                return Object.keys((o = e.reduce(function(e, o) {
                    const s = l(o, t[0]);
                    return n && ((r = r || [])[s] = n(o)), (e[s] = e[s] || []).push(o), e
                }, {}), t = JSON.parse(JSON.stringify(t)), t.shift(), o)).map(function(e) {
                    return {
                        label: n ? r[e][t.length ? t.length - 1 : r[e].length - 1] : e,
                        children: t[0] ? s.groupBy(o[e], t, n) : o[e]
                    }
                })
            }, s.getVisibleText = function(e, t) {
                return e ? e.length <= t ? e : e.substring(0, t - 2) + ".." : ""
            }, s.characterEncoding = function(e) {
                if ("object" == typeof e) {
                    let t;
                    for (t in e) e[t] && ("object" == typeof e[t] ? s.characterEncoding(e[t]) : "string" == typeof e[t] && "" !== e[t] && (a.innerHTML = e[t], e[t] = a.textContent))
                } else "string" == typeof e && "" !== e && (a.innerHTML = e, e = a.textContent);
                return e
            }, s.clearStorage = function() {
                const e = sessionStorage.getItem("user-locale");
                localStorage.clear(), sessionStorage.clear(), e && sessionStorage.setItem("user-locale", e)
            }, s.debounce = function(e, t, n) {
                let o;
                return function() {
                    const r = this,
                        s = arguments,
                        a = n && !o;
                    clearTimeout(o), o = setTimeout(function() {
                        o = null, n || e.apply(r, s)
                    }, t), a && e.apply(r, s)
                }
            }, s.throttle = function(e, t) {
                let n, o, r, a;
                const i = s.debounce(function() {
                    r = o = !1
                }, t);
                return function() {
                    const s = this,
                        c = arguments;
                    return n || (n = setTimeout(function() {
                        n = null, r && e.apply(s, c), i()
                    }, t)), o ? r = !0 : a = e.apply(s, c), i(), o = !0, a
                }
            }, s.QueryParams = {
                __resolveQuery: function(e, t) {
                    return Array.isArray(e[t]) ? e[t].reduce(function(e, n, o, r) {
                        return e + (0 === o ? "" : t + "=") + encodeURIComponent(n) + (o === r.length - 1 ? "" : "&")
                    }, "") : encodeURIComponent(e[t])
                },
                add: function(t, n) {
                    if (!n) return t;
                    const o = document.createElement("a");
                    o.href = t;
                    const r = o.search ? s.QueryParams.get(null, o.search) : {};
                    e.extend(r, n);
                    const a = Object.keys(r).reduce(function(e, t, n, o) {
                        return e + t + "=" + s.QueryParams.__resolveQuery(r, t) + (n === o.length - 1 ? "" : "&")
                    }, "");
                    return o.search = a, t.split("?")[0] + o.search
                },
                get: function(e, t) {
                    t = t || window.location.search;
                    const n = Object.create(null);
                    if ("string" != typeof t || !t.length) return null;
                    if (!(t = t.match(/\?[^\?]*$/))) return null;
                    if (!(t = (t = t[0]).trim().replace(/^(\?|#|&)/, ""))) return null;
                    t.split("&").forEach(function(e) {
                        const t = e.replace(/\+/g, " ").split("="),
                            o = t.shift();
                        let r = t.length > 0 ? t.join("=") : void 0;
                        r = void 0 === r ? null : decodeURIComponent(r), void 0 !== n[decodeURIComponent(o)] ? n[decodeURIComponent(o)] = [].concat(n[decodeURIComponent(o)], r) : n[decodeURIComponent(o)] = r
                    });
                    const o = Object.keys(n).sort().reduce(function(e, t) {
                        const o = n[t];
                        return e[t] = o, e
                    }, Object.create(null));
                    return e ? o[e] : o
                },
                remove: function(e, t) {
                    const n = document.createElement("a");
                    n.href = e;
                    const o = s.QueryParams.get(null, n.search);
                    return t ? (Array.isArray(t) || (t = [t]), t.forEach(function(e) {
                        delete o[e]
                    }), s.QueryParams.add(n.pathname, o)) : e.replace(/\?[^\?]*$/, "")
                }
            }, s.dispatchCustomEvent = function(e, t, n) {
                if ((e instanceof HTMLElement || e === window || e === document) && "string" == typeof t) return e.dispatchEvent(new CustomEvent(t, {
                    detail: n
                }))
            }, s.addEvent = function(e, t) {
                i.has(e) || t.element !== window && t.element !== document || (i.set(e, t), t.element.addEventListener(t.eventName, t.eventHandler))
            }, s.processAllEvents = function(e) {
                i.forEach(function(t) {
                    t.element[e](t.eventName, t.eventHandler)
                })
            }, s.removeEvent = function(e) {
                if (i.has(e)) {
                    const t = i.get(e);
                    t.element.removeEventListener(t.eventName, t.eventHandler), i.delete(e)
                }
            }, s.removeAllEvent = function() {
                i.forEach(function(e) {
                    e.element.removeEventListener(e.eventName, e.eventHandler)
                }), i.clear()
            }, s.isTouchDevice = function() {
                if (window.ontouchstart || navigator.maxTouchPoints > 0 && !this.large() || navigator.msMaxTouchPoints > 0 && !this.large) return !0;
                if (window.DocumentTouch && document instanceof window.DocumentTouch) return !0;
                const e = ["", "-webkit-", "-moz-", "-o-", "-ms-"].map(function(e) {
                    return "(".concat(e, "touch-enabled)")
                });
                return window.matchMedia(e.join(",")).matches
            }, s.addEvent("focus-primary-button", {
                element: document,
                eventName: "keydown",
                eventHandler: function(t) {
                    66 === t.keyCode && t.altKey && (t.preventDefault(), e("div .button-container .action-button-primary").focus())
                }
            }), s.addEvent("click-secondary-button", {
                element: document,
                eventName: "keyup",
                eventHandler: function(t) {
                    88 === t.keyCode && t.altKey && e(".action-button-secondary").length && (t.preventDefault(), e(".action-button-secondary")[0].click())
                }
            }), s.injectProps = function(e, t, n) {
                "object" == typeof e && Object.defineProperty(e, t, {
                    value: function(e) {
                        return "function" == typeof n ? n(e) : n
                    }
                })
            }, history.scrollRestoration && (history.scrollRestoration = "manual")
        }
    }), define("resources/nls/data-types", [], function() {
        "use strict";
        return new function() {
            return {
                root: {
                    ALPHANUMERIC: "[a-zA-Z0-9]*",
                    ALPHANUMERIC_WITH_SPACE: "[a-zA-Z0-9 ]*",
                    NUMBERS: "[0-9]*",
                    DECIMALS: "^[0-9]*.?[0-9]+$",
                    ALPHABETS: "[a-zA-Z]*",
                    ALPHABETS_WITH_SPACE: "[a-zA-Z ]*",
                    ALPHABETS_WITH_SOME_SPECIAL: "[a-zA-Z-']*",
                    LOWER_ALPHABETS: "[a-z]*",
                    UPPER_ALPHABETS: "[A-Z]*",
                    LOWER_ALPHABETS_WITH_SPACE: "[a-z ]*",
                    UPPER_ALPHABETS_WITH_SPACE: "[A-Z ]*",
                    ALPHANUMERIC_WITH_SPECIAL: "[a-zA-Z0-9 %&:,)(._'-//;@]*",
                    ALPHANUMERIC_WITH_HYPHEN: "[a-zA-Z0-9-]*",
                    ALPHANUMERIC_WITH_SOME_SPECIAL: "[a-zA-Z0-9 &:$,._?]*",
                    SWIFT: "[a-zA-Z0-9- +:,)(.'?/]*",
                    SWIFT_X: "[A-Za-z0-9/\\-?:().,'+\\s\r\n]*",
                    SWIFT_Y: "[A-Za-z0-9/\\-?:().,'+\\s=!\"%&*<>;]*",
                    SWIFT_Z: "[A-Za-z0-9/\\-?:().,'+\\s_=!\"%&*<>;@#{\r\n]*",
                    ALPHANUMERIC_WITH_ALL_SPECIAL: "[a-zA-Z0-9- =&#*+:,)@(.!$_|'`?[\\]/]*",
                    SPACE_WITH_ALL_SPECIAL: "[!\"#$'()*+.\\/:;<=>?@[\\]^_`{|}~\\\\-]*",
                    FREE_TEXT: ".*",
                    CUSTOM_TEXT: "[a-zA-Z0-9]*",
                    ALPHANUM_WITH_SPACE: "^[a-zA-Z0-9 ]*$",
                    PHONENO: "[0-9+]*"
                },
                ar: !0,
                fr: !0,
                cs: !1,
                sv: !1,
                en: !1,
                "en-us": !1,
                el: !1
            }
        }
    }), define("resources/nls/obdx-locale", [], function() {
        "use strict";
        return new function() {
            return {
                root: {
                    messages: {
                        ACCOUNT: "Please enter valid account number",
                        NAME: "Please enter valid name",
                        TENURE_MONTHS: "Please enter valid months",
                        TENURE_YEARS: "Please enter valid years",
                        TENURE_DAYS: "Please enter valid days",
                        REFERENCE_NUMBER: "Please enter valid reference number",
                        CITY: "Please enter valid city name",
                        IBAN: "Please enter valid account number",
                        DEBTOR_IBAN: "Please enter valid iban number",
                        COMMENTS: "Invalid comments",
                        PARTY_ID: "Please enter valid party ID",
                        MESSAGE: "Invalid Message",
                        PIN: "Invalid Pin",
                        CVV: "Invalid CVV number",
                        ONLY_NUMERIC: "Please enter only numeric values",
                        ONLY_SPECIAL: "Please enter only special characters. Allowed characters are ! \" # $$ & % ' ( ) * + - . / : ; < = > ? @ $] $[ ^ _ ` | $} ${ ~",
                        BANK_CODE: "Invalid bank code",
                        BANK_NAME: "Invalid bank Name",
                        CHEQUE_NUMBER: "Invalid cheque number",
                        EMAIL: "Invalid email",
                        MOBILE_NO: "Invalid mobile number",
                        IFSC_CODE: "Invalid ifsc code",
                        ADDRESS: "Invalid Address",
                        POSTAL_CODE: "Invalid postal code",
                        OTP: "Invalid OTP",
                        CARD_NUMBER: "Invalid Card Number",
                        APPLICATION_CODE: "Only Alphanumeric values with special characters as & - # * +' , ( ) [ ] $ : . /  ` ! $ _ [ ] | ? and length 1-20 are allowed.",
                        APPLICATION_NAME: "Only Alphanumeric values with special characters as & - # * +' , ( ) [ ] $ : . /  ` ! $ _ [ ] | ? and length 1-40 are allowed.",
                        APPLICATION_DESCRIPTION: "Only Alphanumeric values with special characters as & - # * +' , ( ) [ ] $ : . /  ` ! $ _ [ ] | ? and length 1-100 are allowed.",
                        USER_ID: "Only Alphanumeric values with special characters as @ . _ and length 6-80 are allowed.",
                        BILLER_NAME: "Please enter a valid name",
                        SSN: "Invalid SSN",
                        PHONE_NO: "Invalid phone number",
                        IP_ADDRESS: "Invalid IP Address",
                        URL: "Invalid URL",
                        PORT: "Invalid port number",
                        BRANCH: "Invalid Branch Code",
                        VEHICLE_MODEL: "Enter valid vehicle model",
                        REGISTRATION_NO: "Enter valid registration number",
                        YEAR: "Enter a valid year",
                        OIN_NUMBER: "Invalid oin number",
                        PAYMENT_DETAILS: "Invalid payment details",
                        ATTRIBUTE_MASK: "Please enter valid attribute mask",
                        LATITUDE: "Please enter valid latitude",
                        LONGITUDE: "Please enter valid longitude",
                        PERCENTAGE: "Invalid Percentage"
                    }
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
                el: !1
            }
        }
    }), define("base-models/validations/obdx-locale", ["ojL10n!resources/nls/data-types", "ojL10n!resources/nls/obdx-locale"], function(e, t) {
        "use strict";
        return {
            ACCOUNT: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.ACCOUNT
                }
            }, {
                type: "length",
                options: {
                    min: 5,
                    max: 34
                }
            }],
            NAME: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_ALL_SPECIAL,
                    messageDetail: t.messages.NAME
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 80
                }
            }],
            TENURE_MONTHS: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.TENURE_MONTHS
                }
            }, {
                type: "numberRange",
                options: {
                    min: 0,
                    max: 120
                }
            }],
            TENURE_YEARS: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.TENURE_YEARS
                }
            }, {
                type: "numberRange",
                options: {
                    min: 0,
                    max: 30
                }
            }],
            TENURE_DAYS: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.TENURE_DAYS
                }
            }, {
                type: "numberRange",
                options: {
                    min: 0,
                    max: 500
                }
            }],
            SEARCH_USER_NAME: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_ALL_SPECIAL,
                    messageDetail: t.messages.NAME
                }
            }, {
                type: "length",
                options: {
                    min: 4,
                    max: 256
                }
            }],
            AMOUNT: [{
                type: "numberRange",
                options: {
                    min: 0,
                    max: 9999999999999.99
                }
            }],
            REFERENCE_NUMBER: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.REFERENCE_NUMBER
                }
            }],
            CITY: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_SPECIAL,
                    messageDetail: t.messages.CITY
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 40
                }
            }],
            IBAN: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.IBAN
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 34
                }
            }],
            DEBTOR_IBAN: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.DEBTOR_IBAN
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 20
                }
            }],
            COMMENTS: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_SOME_SPECIAL,
                    messageDetail: t.messages.COMMENTS
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 80
                }
            }],
            PARTY_ID: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.PARTY_ID
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 20
                }
            }],
            MESSAGE: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_SPACE,
                    messageDetail: t.messages.MESSAGE
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 2e3
                }
            }],
            PIN: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.PIN
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 4
                }
            }],
            CVV: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.CVV
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 3
                }
            }],
            ONLY_NUMERIC: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.ONLY_NUMERIC
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 3
                }
            }],
            ONLY_SPECIAL: [{
                type: "regExp",
                options: {
                    pattern: e.SPACE_WITH_ALL_SPECIAL,
                    messageDetail: t.messages.ONLY_SPECIAL
                }
            }],
            BANK_CODE: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.BANK_CODE
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 20
                }
            }],
            BANK_NAME: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_SPACE,
                    messageDetail: t.messages.BANK_NAME
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 60
                }
            }],
            CHEQUE_NUMBER: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.CHEQUE_NUMBER
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 6
                }
            }],
            EMAIL: [{
                type: "regExp",
                options: {
                    pattern: '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(".+"))@(([^<>()[\\]\\.,;:\\s@"]+\\.)+[^<>()[\\]\\.,;:\\s@"]{2,})$',
                    messageDetail: t.messages.EMAIL
                }
            }, {
                type: "length",
                options: {
                    min: 3,
                    max: 254
                }
            }],
            MOBILE_NO: [{
                type: "regExp",
                options: {
                    pattern: "^(\\+\\d{1,3}[- ]?)?\\d{1,13}$",
                    messageDetail: t.messages.MOBILE_NO
                }
            }],
            IFSC_CODE: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.IFSC_CODE
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 11
                }
            }],
            ADDRESS: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_SPECIAL,
                    messageDetail: t.messages.ADDRESS
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 70
                }
            }],
            POSTAL_CODE: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.POSTAL_CODE
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 20
                }
            }],
            OTP: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.OTP
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 10
                }
            }],
            CARD_NUMBER: [{
                type: "regExp",
                options: {
                    pattern: "[0-9 ]{1,24}",
                    messageDetail: t.messages.CARD_NUMBER
                }
            }],
            APPLICATION_CODE: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_ALL_SPECIAL,
                    messageDetail: t.messages.APPLICATION_CODE
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 20
                }
            }],
            APPLICATION_NAME: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_ALL_SPECIAL,
                    messageDetail: t.messages.APPLICATION_NAME
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 40
                }
            }],
            APPLICATION_DESCRIPTION: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC_WITH_ALL_SPECIAL,
                    messageDetail: t.messages.APPLICATION_DESCRIPTION
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 100
                }
            }],
            USER_ID: [{
                type: "regExp",
                options: {
                    pattern: "[a-zA-Z0-9.@_]{6,80}",
                    messageDetail: t.messages.USER_ID
                }
            }],
            BILLER_NAME: [{
                type: "regExp",
                options: {
                    pattern: "[a-zA-Z0-9_. ]{2,35}",
                    messageDetail: t.messages.BILLER_NAME
                }
            }],
            SSN: [{
                type: "regExp",
                options: {
                    pattern: "[0-9-]{11}",
                    messageDetail: t.messages.SSN
                }
            }],
            PERCENTAGE: [{
                type: "numberRange",
                options: {
                    min: 0,
                    max: 100
                }
            }, {
                type: "regExp",
                options: {
                    pattern: e.DECIMALS,
                    messageDetail: t.messages.PERCENTAGE
                }
            }],
            PHONE_NO: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.PHONE_NO
                }
            }],
            IP_ADDRESS: [{
                type: "regExp",
                options: {
                    pattern: "^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])$",
                    messageDetail: t.messages.IP_ADDRESS
                }
            }],
            URL: [{
                type: "regExp",
                options: {
                    pattern: "((https|http)://)?(www\\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=]*)",
                    messageDetail: t.messages.URL
                }
            }],
            PORT: [{
                type: "regExp",
                options: {
                    pattern: "^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$",
                    messageDetail: t.messages.PORT
                }
            }],
            BRANCH: [{
                type: "regExp",
                options: {
                    pattern: e.ALPHANUMERIC,
                    messageDetail: t.messages.BRANCH
                }
            }, {
                type: "length",
                options: {
                    min: 3,
                    max: 6
                }
            }],
            VEHICLE_MODEL: [{
                type: "regExp",
                options: {
                    pattern: "[a-zA-Z0-9 ]{1,35}",
                    messageDetail: t.messages.VEHICLE_MODEL
                }
            }],
            REGISTRATION_NO: [{
                type: "regExp",
                options: {
                    pattern: "[a-zA-Z0-9 ]{1,35}",
                    messageDetail: t.messages.REGISTRATION_NO
                }
            }],
            YEAR: [{
                type: "regExp",
                options: {
                    pattern: e.NUMBERS,
                    messageDetail: t.messages.YEAR
                }
            }, {
                type: "length",
                options: {
                    min: 4,
                    max: 4
                }
            }],
            OIN_NUMBER: [{
                type: "regExp",
                options: {
                    pattern: "[a-zA-Z0-9]{1,35}",
                    messageDetail: t.messages.OIN_NUMBER
                }
            }],
            PAYMENT_DETAILS: [{
                type: "regExp",
                options: {
                    pattern: e.SWIFT,
                    messageDetail: t.messages.PAYMENT_DETAILS
                }
            }, {
                type: "length",
                options: {
                    min: 1,
                    max: 35
                }
            }],
            ATTRIBUTE_MASK: [{
                type: "regExp",
                options: {
                    pattern: "[D+d+X+x+]*$",
                    messageDetail: t.messages.ATTRIBUTE_MASK
                }
            }],
            LATITUDE: [{
                type: "numberRange",
                options: {
                    min: -90,
                    max: 90
                }
            }],
            LONGITUDE: [{
                type: "numberRange",
                options: {
                    min: -180,
                    max: 180
                }
            }]
        }
    }), define("extensions/override/obdx-locale", function() {}), define("extensions/resources/nls/data-types", [], function() {
        "use strict";
        return new function() {
            return {
                root: {},
                ar: !1,
                fr: !1,
                cs: !1,
                sv: !1,
                en: !1,
                "en-us": !1,
                el: !1
            }
        }
    }), define("base-models/validations/validations", ["base-models/validations/obdx-locale", "extensions/override/obdx-locale", "framework/js/constants/constants", "ojL10n!resources/nls/data-types", "ojL10n!extensions/resources/nls/data-types", "ojs/ojvalidator-regexp", "ojs/ojvalidator-numberrange", "ojs/ojvalidator-length"], function(e, t, n, o, r, s, a, i) {
        "use strict";
        return function() {
            const c = function(e) {
                    return r && r[e] ? r[e] : n.localization && n.localization.data.dataType && n.localization.data.dataType[e] ? n.localization.data.dataType[e] : o[e]
                },
                l = function(e, t) {
                    const n = [],
                        o = [];
                    return e.forEach(function(e) {
                        n.push(e), o.push(e.type)
                    }), t && t.forEach(function(e) {
                        -1 === o.indexOf(e.type) && n.push(e)
                    }), n
                },
                u = function(o) {
                    return t && t[o] ? l(t[o], e[o]) : n.localization && n.localization.data.validations && n.localization.data.validations[o] ? l(n.localization.data.validations[o], e[o]) : e[o]
                },
                d = function(e) {
                    if (void 0 !== e) {
                        const t = [];
                        return e.forEach(function(e) {
                            0 !== Object.keys(e).length && ("regExp" === e.type ? t.push(new s({
                                pattern: e.options.pattern,
                                messageDetail: e.options.messageDetail
                            })) : "length" === e.type ? t.push(new i({
                                min: e.options.min,
                                max: e.options.max
                            })) : "numberRange" === e.type && t.push(new a({
                                min: e.options.min,
                                max: e.options.max
                            })))
                        }), t
                    }
                };
            this.getValidator = function(e, t, n) {
                if (n) return d([{
                    type: "regExp",
                    options: {
                        pattern: c(e),
                        messageDetail: t
                    }
                }, n]);
                if (t) {
                    const n = JSON.parse(JSON.stringify(u(e)));
                    return n[0].options.messageDetail = t, d(n)
                }
                return d(u(e))
            }, this.showComponentValidationErrors = function(e) {
                return !e || "valid" === e.valid || (e.showMessages(), e.focusOn("@firstInvalidShown"), !1)
            }
        }
    }), define("base-models/validations/validation-factory", ["ojs/ojcore"], function(e) {
        "use strict";
        let t, n, o, r, s, a;

        function i(e, t, n) {
            Promise.all(e).then(function() {
                t()
            }, function(e) {
                n(e)
            })
        }
        const c = function(e) {
                return new n({
                    min: e.minLength,
                    max: e.maxLength
                })
            },
            l = function(e) {
                return new o({
                    min: e.minLength,
                    max: e.maxLength
                })
            };
        return function(e, u, d) {
            return e.then(function(e) {
                e.fields.find(function(e) {
                    return e.idfield === u
                }).mandatory && void 0 !== d && document.querySelector(d).setAttribute("required", "required")
            }), {
                validate: function(p) {
                    return new Promise(function(m, f) {
                        Promise.all([e, new Promise(function(e) {
                            require(["baseModel", "ojs/ojvalidation-base", "ojs/ojasyncvalidator-numberrange", "ojs/ojasyncvalidator-length", "ojs/ojasyncvalidator-regexp", "ojs/ojasyncvalidator-datetimerange"], function(i, c, l, u, d, p) {
                                a = i.getInstance(), t = c, n = l, o = u, r = d, s = p, e()
                            })
                        })]).then(function(e) {
                            const t = e[0].fields.find(function(e) {
                                    return e.idfield === u
                                }),
                                n = [],
                                o = [];
                            switch (t.fieldType) {
                                case "TEXT":
                                    n.push(l(t)), n.push(function(e) {
                                        return new r({
                                            pattern: e.pattern,
                                            messageDetail: e.errorCode
                                        })
                                    }(t)), n.forEach(function(e) {
                                        o.push(e.validate(p))
                                    }), i(o, m, f);
                                    break;
                                case "NUMBER":
                                    n.push(c(t)), n.forEach(function(e) {
                                        o.push(e.validate(p))
                                    }), i(o, m, f);
                                    break;
                                case "DATE":
                                    {
                                        const e = function(e, t) {
                                            const n = a.getDate("ISO_DATE");
                                            new s({
                                                min: e.minLength ? new Date(n).setDate(n.getDate() + e.minLength) : null,
                                                max: e.maxLength ? new Date(n).setDate(n.getDate() + e.maxLength) : null,
                                                messageDetail: e.lengthErrorCode,
                                                converter: document.querySelector(t).converter
                                            })
                                        }(t, d);e && n.push(e),
                                        0 !== n.length && n.forEach(function(e) {
                                            o.push(e.validate(p))
                                        }),
                                        i(o, m, f);
                                        break
                                    }
                                case "OTHER":
                                    n.push(l(t)), n.forEach(function(e) {
                                        o.push(e.validate(p))
                                    }), i(o, m, f)
                            }
                        })
                    })
                }
            }
        }
    }), define("base-models/platform-resolver", ["framework/js/configurations/config"], function(e) {
        "use strict";
        return {
            authentication: function() {
                return -1 !== window.navigator.userAgent.indexOf("obdx-mobile") ? "base-models/device/mobile" : "base-models/authentication/" + e.authentication.type
            },
            device: function() {
                return -1 !== window.navigator.userAgent.indexOf("obdx-mobile") ? "base-models/device/mobile" : "base-models/device/default"
            },
            thirdPartyAnalytics: function() {
                return e.analytics.thirdPartyAnalytics.enabled ? "third-party-data-aggregation/" + e.analytics.thirdPartyAnalytics.analyticsProvider : null
            }
        }
    }), define("platform", ["base-models/platform-resolver"], function(e) {
        "use strict";
        const t = {},
            n = function(t, n, o) {
                const r = this,
                    s = {};
                e[t] || o("Platform{" + t + "}not found"), r.callBehaviour = function() {
                    if (s[arguments[0]]) {
                        const e = [].slice.call(arguments).splice(1);
                        return s[arguments[0]].apply(this, e)
                    }
                    return null
                };
                const a = e[t]();
                a ? require([a], function(e) {
                    Object.assign(s, e), s.init(r.callBehaviour, n)
                }) : o("Platform{" + t + "}not found or Disabled")
            };
        return {
            getInstance: function(e) {
                return t[e] ? t[e] : t[e] = function(e) {
                    return new Promise(function(t, o) {
                        new n(e, t, o)
                    })
                }(e)
            }
        }
    }), define("base-models/ko/help", ["knockout", "jquery", "platform", "framework/js/configurations/config"], function(e, t, n, o) {
        "use strict";
        return function(r) {
            const s = this;
            let a = {};
            e.utils.extend(s, r), s.webhelpID = e.observable(""), s.showWebHelp = function() {
                if (window.onhelp) window.onhelp = function() {
                    return s.openWebHelpWindow(), !1
                };
                else {
                    let e;
                    document.onkeydown = function(t) {
                        if (e = 112 === t.keyCode) return s.openWebHelpWindow(), !1
                    }, document.onkeypress = function() {
                        if (e) return !1
                    }
                }
            }, s.resolveBrowser = function(e, t) {
                n.getInstance("device").then(function(n) {
                    if (n("getServerType")) return "IOS" === s.cordovaDevice() ? window.cordova.InAppBrowser.open(e, t) : window.open(e);
                    const o = window.open("");
                    return window.oldOpen = window.open, window.open = function(e) {
                        o.location = e, window.open = window.oldOpen, o.focus()
                    }, window.open(e)
                })
            };
            const i = function(e, t) {
                e += a[t], s.resolveBrowser(e, "_blank")
            };
            s.openWebHelpWindow = function() {
                const e = o.sharding.webHelpContentURL + "webhelp/Content/obdx/";
                s.webhelpID() ? i(e, s.webhelpID()) : t.getJSON("../json/webhelpMappings.json", function(t) {
                    a = t, i(e, s.webhelpID())
                }).fail(function() {
                    s.resolveBrowser(e + "obdxintroduction.htm", "_blank")
                })
            }, s.setwebhelpID = function(e) {
                this.webhelpID(e)
            }, s.showWebHelp()
        }
    }), define("resources/nls/generic", [], function() {
        "use strict";
        let e;
        return e || (e = new function() {
            return {
                root: {
                    error: "Oops! Something went wrong. The page will now reload.",
                    noDashboardError: "No dashboard found, please contact Bank Administrator",
                    common: {
                        cancel: "Cancel",
                        submit: "Submit",
                        login: "Login",
                        search: "Search",
                        ok: "Ok",
                        reset: "Reset",
                        review: "Review",
                        confirm: "Confirm",
                        done: "Done",
                        edit: "Edit",
                        create: "Create",
                        save: "Save",
                        apply: "Apply",
                        add: "Add",
                        name: "{firstName} {lastName}",
                        userName: "{firstName} {lastName} ({userName})",
                        clear: "Clear",
                        lookUp: "Click to lookup",
                        lookUpAlt: "Look Up",
                        closeDialog: "Close Dialog",
                        closeDialogTitle: "Click to Close Dialog",
                        select: "Select",
                        delete: "Delete",
                        yes: "Yes",
                        no: "No",
                        back: "Back",
                        proceed: "Proceed",
                        next: "Next",
                        verify: "Verify",
                        clickHere: "Click here for {action}",
                        ERROR: "Error",
                        INFO: "Information",
                        SUCCESS: "Success",
                        NOTIFICATION: "Notification",
                        backToDashboard: "Back to Dashboard",
                        amount: "Amount",
                        date: "Date",
                        fileInput: {
                            chooseFile: "Choose file...",
                            upload: "Upload"
                        },
                        tenure: {
                            singular: {
                                year: "{count} year",
                                day: "{count} day",
                                month: "{count} month"
                            },
                            plural: {
                                year: "{count} years",
                                day: "{count} days",
                                month: "{count} months"
                            }
                        }
                    }
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
        }), e
    }), define("baseLogger", ["ojs/ojcore", "framework/js/configurations/config"], function(e, t) {
        "use strict";
        return new function() {
            return e.Logger.option("level", e.Logger[t.system.loggingLevel] || e.Logger.LEVEL_ERROR), {
                info: e.Logger.info,
                error: e.Logger.error,
                warn: e.Logger.warn
            }
        }
    }), define("base-models/ko/custom-bindings", ["knockout", "jquery", "framework/js/configurations/config", "platform", "baseLogger"], function(e, t, n, o, r) {
        "use strict";
        return new function() {
            const s = window.IntersectionObserver ? new IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                        if (e.intersectionRatio > 0) {
                            const t = e.target;
                            s.unobserve(t), u(t)
                        }
                    })
                }) : null,
                a = Object.hasOwnProperty.call(HTMLImageElement.prototype, "loading");
            let i;

            function c(e) {
                return "IMG" === e.nodeName || "VIDEO" === e.nodeName || "OJ-AVATAR" === e.nodeName ? "src" : "OBJECT" === e.nodeName ? (e.setAttribute("type", "image/svg+xml"), "data") : void 0
            }

            function l(e) {
                const t = e.getAttribute("lazySrc");
                e.removeAttribute("lazySrc"), require(["baseService"], function(n) {
                    return n.getInstance().fetchImage({
                        url: "brands/{brandID}/image?name={resourcePath}&type=I",
                        element: e,
                        sourceAttribute: c(e)
                    }, {
                        brandID: i.assetDTO.brandId,
                        resourcePath: t
                    })
                })
            }

            function u(e) {
                e.getAttribute("isBranded") ? l(e) : (e.setAttribute(c(e), e.getAttribute("lazySrc")), e.removeAttribute("lazySrc"))
            }
            e.bindingHandlers.component.preprocess = function(e) {
                const t = e.match(/\{\s*?['"]?name['"]?\s*?\:\s*?['"]?([^'",]*)['"]?,?/)[1];
                return -1 === ["dashboard", "confirm-dialog"].indexOf(t) ? e.replace(/(params\s*?:\s*?\{)/, "$1baseModel: $baseModel, dashboard: $dashboard, ") : e
            }, e.bindingHandlers.loadImage = {
                init: function(u, d, p, m, f) {
                    const g = e.utils.unwrapObservable(d());
                    g ? o.getInstance("device").then(function(o) {
                        const d = o("getImageBaseURL"),
                            p = !!g.isExternal;
                        u.classList.contains("no-placeholder") || u.setAttribute("src", n.sharding.imageResourcePath + "/placeholder.svg"), u.hasAttribute("placeholder-img") && u.setAttribute("src", n.sharding.imageResourcePath + "/" + u.getAttribute("placeholder-img")), e.contextFor(document.body).$data.userInfoPromise.then(function() {
                            e.contextFor(document.body).$data.fetchCurrentBrand.then(function(n) {
                                i = n,
                                    function(n, o, i, u, d, p) {
                                        if (p && n.setAttribute("isBranded", "isBranded"), a || n.setAttribute("lazySrc", d || p ? i : u + "/" + i), a) n.setAttribute("loading", "lazy"), d ? n.setAttribute("src", i) : p ? (n.setAttribute("lazySrc", i), l(n)) : n.setAttribute("src", u + "/" + i);
                                        else if (s) s.observe(n);
                                        else {
                                            const e = t(window).height() + t(window).scrollTop(),
                                                o = t(window).scrollTop();
                                            if (e > t(n).offset().top && o <= t(n).offset().top + t(n).height())
                                                if (p) l(n);
                                                else {
                                                    const e = d ? i : u + "/" + i;
                                                    n.setAttribute(c(n), e), n.removeAttribute("lazySrc")
                                                }
                                        }
                                        let m = "";
                                        e.utils.arrayForEach(n.getAttribute("data-bind").split(","), function(e) {
                                            !e.indexOf("loadImage") > -1 && (m += e + ",")
                                        }), n.setAttribute("data-bind", m.slice(0, -1)), o.$data && o.$data.errorImage && n.setAttribute("onerror", "this.onerror=null;this.src='" + u + o.$data.errorImage + "';");
                                        const f = e.expressionRewriting.parseObjectLiteral(n.getAttribute("data-bind")),
                                            g = f.filter(function(e) {
                                                return "click" === e.key
                                            });
                                        if (g[0]) {
                                            const o = f.filter(function(e) {
                                                return "attr" === e.key
                                            });
                                            if (!o.length || !o[0].value.match("alt") || !o[0].value.match("title")) return r.info("Clickable images need both title attribute and alt attribute. Image name:", i), n.parentElement.removeChild(n), !1;
                                            let s = "";
                                            e.utils.arrayForEach(f, function(e) {
                                                "click" !== e.key && (s += e.key + ":" + e.value + ",")
                                            }), n.setAttribute("data-bind", s.slice(0, -1));
                                            const a = document.createElement("a");
                                            a.setAttribute("data-bind", "click:" + g[0].value), n.getAttribute("id") && (a.setAttribute("id", n.getAttribute("id")), n.removeAttribute("id")), a.setAttribute("href", "#"), n.setAttribute("height", "100%"), n.setAttribute("width", "100%"), t(n).wrap(a)
                                        } else if (f.filter(function(e) {
                                                return "alt" === e.key
                                            })) n.setAttribute("alt", "");
                                        else {
                                            const e = f.filter(function(e) {
                                                return "attr" === e.key
                                            });
                                            e.length && e[0].value.match("alt") || n.setAttribute("alt", "")
                                        }
                                    }(u, f, g.url || g, d, p, n.assetDTO && -1 !== n.imageResources.indexOf(g) && !p)
                            })
                        })
                    }) : u.setAttribute("src", "")
                }
            }, e.bindingHandlers.fadeVisible = {
                update: function(n, o) {
                    const r = o();
                    e.unwrap(r) ? t(n).fadeIn() : t(n).fadeOut()
                }
            }, e.bindingHandlers.htmlBound = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(t, n, o, r, s) {
                    e.utils.setHtml(t, n()), e.applyBindingsToDescendants(s, t)
                }
            }, e.extenders.loaded = function(t, n) {
                function o(e) {
                    n instanceof Promise || t.loaded(!!e)
                }
                return t.loaded = e.observable(), o(t()), t.subscribe(o), t
            }, a || s || document.addEventListener("scroll", function() {
                const e = t(window).scrollTop(),
                    n = t(window).height() + e;
                Array.prototype.filter.call(document.querySelectorAll("img"), function(o) {
                    const r = t(o).offset().top;
                    return o.getAttribute("lazySrc") && n > r && e < r + t(o).height()
                }).forEach(u)
            })
        }
    }), define("baseModel", ["ojs/ojcore", "knockout", "jquery", "base-model", "base-models/validations/validations", "base-models/validations/validation-factory", "base-models/ko/help", "ojL10n!resources/nls/generic", "framework/js/constants/constants", "framework/js/configurations/config", "text!extensions/extension.json", "extensions/override/extensions", "baseLogger", "base-models/ko/custom-bindings", "knockout-helper", "ojs/ojknockout"], function(e, t, n, o, r, s, a, i, c, l, u, d, p) {
        "use strict";
        const m = function() {
            const m = this;
            t.utils.extend(m, new o), t.utils.extend(m, new a(m)), t.utils.extend(m, new r);
            const f = JSON.parse(u);
            m.large = t.observable(), m.medium = t.observable(), m.small = t.observable(), m.xl = t.observable(), m.isDashboardBuilderContext = t.observable(!1), require(["knockout-mapping"], function(e) {
                    t.mapping = e
                }),
                function(t) {
                    e.Config.setLocale(t, function() {
                        const e = -1 === l.i18n.rtlLocales.indexOf(t) ? "ltr" : "rtl";
                        document.getElementsByTagName("html")[0].setAttribute("dir", e), document.getElementsByTagName("html")[0].setAttribute("lang", t)
                    })
                }(sessionStorage.getItem("user-locale") || document.getElementsByTagName("html")[0].getAttribute("lang") || "en");
            const g = {
                xl: "screen and (min-width: 1281px)",
                large: "screen and (min-width: 1024px)",
                medium: "screen and (max-width: 1023px) and (min-width: 768px)",
                small: "screen and (max-width: 767px)"
            };

            function h(e) {
                return Object.keys(g).forEach(function(t) {
                    g[t].replace(/\s/g, "") === e.media.replace(/\s/g, "") && m[t](e.matches)
                }), e
            }

            function y(e) {
                return e < 10 ? "0" + e : e
            }
            Object.keys(g).forEach(function(e) {
                h(window.matchMedia(g[e])).addListener(h)
            });
            const j = new Set,
                b = new Set;
            m.setAuthorisedComponentList = function(e) {
                j.size || e.authorizedUIComponents.forEach(function(e) {
                    j.add(e)
                }), b.size || e.defaultDashboards.forEach(function(e) {
                    b.add(e)
                })
            }, m.clearAuthorisedComponentList = function() {
                j.clear(), b.clear()
            }, m.getAuthorisedComponentList = function(e) {
                return "DASHBOARD" === e ? b : j
            }, m.filterAuthorisedComponents = function(e, t, n) {
                return l.system.componentAccessControlEnabled ? e.filter(function(e) {
                    return j.has(e[t]) || n && n(e)
                }) : e
            }, m.lastUpdatedTime = t.observable();
            const E = {
                    loadComponent: function(e, n, o) {
                        const r = n.module + "/" + e,
                            s = d.getMappedComponentPath("components", r);
                        "core" !== n.module && f.components.indexOf(r) > -1 || s ? (n.basePath = "extensions/components", s && (n.module = s.module)) : c.localization && "components" === n.basePath && c.localization.data.components.indexOf(r) > -1 && (n.basePath = "lzn/" + c.localization.name + "/components");
                        let a = n.basePath + "/" + n.module + "/";
                        n.config ? (a += e.replace(/^review-/, "") + "/loader", require([a], function(r) {
                            const s = r(n.config);
                            t.components.defaultLoader.loadComponent(e, {
                                viewModel: s.viewModel,
                                template: s.template
                            }, o)
                        })) : (a += (s ? s.component : e) + "/loader", t.components.defaultLoader.loadComponent(e, {
                            require: n.compLoader ? n.compLoader(e, n, a) : a
                        }, o))
                    }
                },
                v = {
                    loadComponent: function(e, n, o) {
                        if (!l.system.componentAccessControlEnabled || j.has(e) || "framework/elements" === n.basePath || n.module.match("widgets")) o(null);
                        else {
                            const n = "framework/elements/core/access-denied/loader";
                            t.components.defaultLoader.loadComponent(e, {
                                require: n
                            }, o)
                        }
                    }
                };
            t.components.loaders.unshift(v, E), t.options.deferUpdates = !0, m.registerComponent = function(e, n, o, r) {
                t.components.isRegistered(e) || t.components.register(e, {
                    basePath: "components",
                    module: n,
                    compLoader: o,
                    config: r
                })
            }, m.registerTransaction = function(e, t, n, o) {
                m.registerComponent(e, t, o, Object.assign({}, n, {
                    type: "init"
                })), m.registerComponent("review-" + e, t, o, Object.assign({}, n, {
                    type: "review"
                }))
            }, m.registerElement = function(e, n) {
                Array.isArray(e) || (e = [e]), e.forEach(function(e) {
                    t.components.isRegistered(e) || t.components.register(e, {
                        basePath: "framework/elements",
                        module: n || "api"
                    })
                })
            }, m.wrappedComponent = function(e, t, n) {
                return m.registerComponent(e, t), n = n || {}, {
                    viewModel: function(e) {
                        (e = e || {}).rootModel = e.rootModel || {}, Object.assign(this, e.rootModel), this.params = this.params || {}, Object.assign(this.params, n)
                    },
                    template: "<" + e + " params='baseModel : $baseModel, dashboard : $dashboard, rootModel: $data'></" + e + ">"
                }
            }, m.removeTempAttributes = function(e) {
                return JSON.stringify(t.toJS(e), function(e, t) {
                    if ("temp_" !== e.substring(0, 5)) return t
                })
            }, m.messages = t.observableArray();
            const A = [];
            m.closeMessageHandler = function(e) {
                if (m.messages.remove(function(t) {
                        return t.id === e.detail.message.id
                    }), A.length) {
                    const e = A[A.findIndex(function(e) {
                        return "resolved" !== e.state()
                    })];
                    e && e.resolve()
                }
                e.detail.message.onClose && e.detail.message.onClose()
            }, m.closeNotificationMessages = function(t) {
                const o = document.getElementById("message-box");
                if (o) {
                    const r = e.Context.getContext(o).getBusyContext(),
                        s = o.querySelectorAll("oj-message");
                    return A.length = 0, Array.from(s).forEach(function(e) {
                        e.getProperty("message.severity") !== t && t || A.push(n.Deferred())
                    }), r.whenReady().then(function() {
                        o.closeAll(function(e) {
                            return !t || e.severity === t
                        })
                    }), Promise.all(A)
                }
                return Promise.resolve()
            };
            const w = function(e) {
                for (let t = 0; t < e.length; t++) "DIGX_UM_042" !== (e[t].code || e[t].errorCode) && (!e[t].detail && !e[t].errorMessage || m.messages().filter(function(n) {
                    return n.summary === e[t].code || n.summary === e[t].errorCode
                }).length || m.messages.push({
                    detail: m.characterEncoding({
                        message: e[t].detail || e[t].errorMessage
                    }).message,
                    severity: (e[t].type || "ERROR").toLowerCase(),
                    summary: e[t].code || e[t].errorCode,
                    id: Math.ceil(9999999999 * Math.random() + 1)
                })), w(e[t].relatedMessage || [])
            };
            m.showMessages = function(e, t, n, o) {
                let r = 0;
                if (t && t.length > 0)
                    for (r = 0; r < t.length; r++) m.messages.push({
                        detail: m.characterEncoding({
                            message: t[r]
                        }).message,
                        severity: n.toLowerCase(),
                        onClose: o,
                        id: Math.ceil(9999999999 * Math.random() + 1)
                    });
                else e && e.responseJSON && (e.responseJSON.message && (e.responseJSON.message.validationError ? w(e.responseJSON.message.validationError) : w([e.responseJSON.message])), e.responseJSON.status && e.responseJSON.status.message && w([e.responseJSON.status.message]))
            }, m.authViewModel = null, m.onTFAScreen = t.observable(!1), m.showAuthScreen = function(e, n, o, r, s) {
                m.authViewModel = {
                    serverResponse: e,
                    currentContext: n,
                    fireRequest: o,
                    originalSuccess: r,
                    originalError: s,
                    closeNotificationMessages: m.closeNotificationMessages
                }, m.registerElement("generic-authentication", "2fa"), t.contextFor(document.body).$data.isDashboardSet(!0), m.onTFAScreen(!1), t.tasks.runEarly(), m.onTFAScreen(!0)
            }, m.getDate = function(e, t) {
                const n = new Date(t || c.currentServerDate.getTime());
                switch (c.timezoneOffset && n.setMinutes(n.getMinutes() + n.getTimezoneOffset() + -1 * c.timezoneOffset), e) {
                    case "DATE_TIME":
                        return n;
                    case "ISO_DATE":
                        return function(e) {
                            return e.getUTCFullYear() + "-" + y(e.getUTCMonth() + 1) + "-" + y(e.getUTCDate())
                        }(n);
                    default:
                        return new Date(n.toDateString())
                }
            }, m.getLocale = function() {
                return e.Config.getLocale()
            }, m.getTaxonomyValidator = s, require.onError = function(e) {
                p.error(e), "timeout" !== e.requireType && "scripterror" !== e.requireType || m.showMessages(null, [i.error], "ERROR")
            }
        };
        let f;
        return {
            getInstance: function() {
                return f || (f = new m), f
            }
        }
    }), define("base-models/css", ["baseModel", "jquery", "framework/js/configurations/config", "platform"], function(e, t, n, o) {
        "use strict";
        const r = e.getInstance();
        let s = !1;
        return "true" === r.QueryParams.get("testColorContrast") && (s = !0), new function() {
            const e = this,
                r = {};
            let a, i;

            function c(e) {
                const t = document.createElement("link");
                t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("isBrandScoped", !0), t.setAttribute("media", "print"), t.setAttribute("href", e.replace(/^"(.*)"$/, "$1")), document.head.appendChild(t), document.querySelector("link[isBrandScoped='true']").onload = function() {
                    "all" !== this.media && (this.media = "all")
                }
            }

            function l(e) {
                const t = JSON.parse(atob(e));
                let n = ":root{";
                return Object.keys(t).forEach(function(e) {
                    n += e + ":" + t[e] + ("number" == typeof t[e] ? "rem" : "") + ";"
                }), n += "}"
            }

            function u(e, t) {
                return t = t || r, e && (e = e.replaceAll(/[\n\r\t]/g, "")).match(/\:root\s*{(.*?)}/) && e.match(/\:root\s*{(.*?)}/)[1].split(";").forEach(function(e) {
                    const n = e.match(/(^.*?):(.*)$/);
                    n && (t[n[1].trim()] = n[2].trim())
                }), t
            }

            function d(t) {
                const n = new RegExp("{images}", "g");
                return t = t.replace(n, i("getImageBaseURL")), e.isCSSCustomPropAvailable() ? t : (o = t, Object.keys(u()).forEach(function(e) {
                    const t = new RegExp("var\\(" + e + "\\)", "g");
                    o = o.replace(t, u()[e])
                }), o);
                var o
            }

            function p(e) {
                return e.replaceAll("linear-gradient\\s*?\\(to\\s*?.*?,(.*?),.*?\\);", "$1;")
            }
            o.getInstance("device").then(function(e) {
                i = e
            }), e.isCSSCustomPropAvailable = function() {
                return window.CSS && window.CSS.supports && window.CSS.supports("--fake-var", 0)
            }, e.getCurrentTokens = function() {
                return new Promise(function(t) {
                    if (!e.isCSSCustomPropAvailable()) return t(JSON.parse(JSON.stringify(r)));
                    require(["text!" + a + ".css"], function(e) {
                        const n = {};
                        return u(e, n), t(n)
                    })
                })
            }, e.getComponentName = function(e) {
                return e.id.split("/")[e.id.split("/").length - 2]
            }, e.transformTemplate = function(e, t, n) {
                if (n) {
                    if (!document.querySelector("style#obdx-component-style-" + n)) {
                        const e = document.createElement("style");
                        s && (t = p(t)), t = d(t), e.textContent = t, e.id = "obdx-component-style-" + n, document.querySelector("head").appendChild(e)
                    }
                    return "<obdxcomponent class='" + n + "-container'>" + e + "</obdxcomponent>"
                }
            }, e.loadCSS = function(o) {
                return new Promise(function(r) {
                    t("[isBrandScoped=true]").remove(), a = "framework/css/main" + (n.development.enabled ? "" : "." + n.system.buildTimestamp), require(["text!" + a + ".css"], function(t) {
                        o.then(function(n) {
                            if (s && (t = p(t)), !e.isCSSCustomPropAvailable()) {
                                if (u(t), n && n.assetDTO) {
                                    const e = l(n.assetDTO.asset);
                                    e && u(e)
                                }
                                c(u()["--base-font-url"]), t = d(t)
                            }
                            const o = document.createElement("style");
                            o.textContent = t, o.setAttribute("isBrandScoped", !0), document.head.appendChild(o), e.isCSSCustomPropAvailable() && (function(e) {
                                if (e && e.assetDTO) {
                                    const t = document.createElement("style"),
                                        n = l(e.assetDTO.asset);
                                    t.textContent = n, t.setAttribute("isBrandScoped", !0), document.head.appendChild(t)
                                }
                            }(n), c(getComputedStyle(document.querySelector(":root")).getPropertyValue("--base-font-url"))), r()
                        })
                    })
                })
            }
        }
    }), define("baseService", ["jquery", "baseModel", "framework/js/constants/constants", "framework/js/configurations/config", "platform", "base-models/css"], function(e, t, n, o, r, s) {
        "use strict";
        const a = function() {
            const a = this,
                i = {},
                c = new Map,
                l = {},
                u = {
                    helpDeskSessionKey: "",
                    nonceKeys: []
                };
            let d = !1;
            const p = [],
                m = t.getInstance();
            a.nonceEnabled = !0;
            let f, g, h = !0;
            const y = [];
            let j = !1,
                b = 0;
            const E = function(e) {
                    return e.split("?").length > 1 ? e.split("?")[0] + "?" + e.split("?").pop().replace(/(&?)\w+=(?:&|undefined(&)?|null(&)?|$)/g, "$1").replace(/&$/, "") : e
                },
                v = function(e) {
                    return m.QueryParams.add(e, {
                        locale: m.getLocale()
                    }, !0)
                },
                A = function(e) {
                    const t = f("getServerURL"),
                        n = o.apiCatalogue[e.apiType].contextRoot;
                    return "batch" === e.url ? t + "/" + n + "/" + e.url : t + "/" + n + "/" + e.version + "/" + e.url
                },
                w = function(t) {
                    const n = p.indexOf(t);
                    n > -1 && p.splice(n, 1), 0 === p.length && (setTimeout(function() {
                        0 === p.length && e(".se-pre-con").fadeOut("slow")
                    }, 100), m.lastUpdatedTime(new Date))
                },
                S = function(t, r) {
                    let c;
                    this && "GET" !== this.type && delete i[this.type + this.url], h = !0;
                    let p = JSON.parse(t.getResponseHeader("x-nonce"));
                    if (p && p.nonce ? (u.nonceKeys = u.nonceKeys.concat(JSON.parse(t.getResponseHeader("x-nonce")).nonce), a.nonceEnabled = !0) : a.nonceEnabled = !1, this && this.url && "GET" === this.type && (c = t.getResponseHeader("ETag")) && (l[this.url] = c), n.currentServerDate.setTime(new Date(t.getResponseHeader("Date")).getTime()), "Y" === t.getResponseHeader("PASSWORD_ENABLED") && e("#passwordDialog").trigger("openModal"), 419 === t.status) g("resetAuthStates"), e("#sessionExpired").trigger("openModal");
                    else if (420 === t.status) d = !0;
                    else if (403 === t.status) {
                        const e = {
                            url: "me",
                            type: "GET",
                            apiType: "base"
                        };
                        e.version = o.apiCatalogue.base.defaultVersion, e.contentType = "application/json", e.complete = function(e) {
                            401 === e.status && location.reload(), w(e)
                        }, A(e) !== this.url && R(e, {})
                    }
                    if (t.getResponseHeader("BATCH_ID")) {
                        for (let e = 0; e < t.responseJSON.batchDetailResponseDTOList.length; e++)(p = JSON.parse(t.responseJSON.batchDetailResponseDTOList[e].header["x-nonce"] || "{}")) && p.nonce && u.nonceKeys.push(p.nonce[0]), t.responseJSON.batchDetailResponseDTOList[e].status >= 400 && (h = !1);
                        h || m.showMessages(t)
                    } else this.showMessage && m.showMessages(t), "timeout" === r && this.timeoutMessage && m.showMessages(null, [this.timeoutMessage], "ERROR");
                    if (w(t), 417 === t.status) return m.showMessages(t), this.url = function(e) {
                        const t = f("getServerURL"),
                            n = o.apiCatalogue[e.apiType].contextRoot;
                        return e.url.replace(t + "/" + n, "").replace("/" + e.version + "/", "")
                    }(this), m.showAuthScreen(t, this, "batch" === this.requestType ? P : "upload" === this.requestType ? a.uploadFile : R, this.success, this.error), "me" === this.url.substr(0, this.url.indexOf("?")) && s.loadCSS(Promise.resolve()), !1
                },
                C = function() {
                    if (a.nonceEnabled && ++b, a.nonceEnabled && u.nonceKeys.length - b < 3 && (!j || b >= 15)) {
                        j = !0, b = 0;
                        const t = {},
                            n = e.Deferred();
                        t.type = "POST", t.apiType = "base", t.version = o.apiCatalogue[t.apiType].defaultVersion, t.contentType = "application/json", t.showMessage = !0, t.headers = {
                            "x-noncecount": 15
                        }, t.complete = function(e) {
                            S.apply(this, [e]), n.resolve(), j = !1
                        }, t.beforeSend = function(e) {
                            p.push(e)
                        }, e("body").removeClass("loaded"), y.push(n), t.url = "session/nonce", f("addHeader", t.headers), g("addAuthHeaders", t.headers), t.url = A(t), t.url = v(t.url), t.url = E(t.url), e.ajax(t)
                    }
                },
                T = {
                    type: "GET",
                    url: "",
                    version: o.apiCatalogue.base.defaultVersion,
                    async: !0,
                    contentType: "application/json",
                    throttle: !0,
                    dataType: "json",
                    showMessage: !0,
                    apiType: "base",
                    headers: {},
                    beforeSend: function(t) {
                        if (d && t.abort(), function(e, t) {
                                Object.keys(t).forEach(function(n) {
                                    t[n] && e.setRequestHeader(n, t[n])
                                })
                            }(t, {
                                "X-Helpdesk-Key": u.helpDeskSessionKey,
                                "X-Target-Unit": Object.prototype.hasOwnProperty.call(this.headers, "X-Target-Unit") ? this.headers["X-Target-Unit"] : n.currentEntity,
                                "If-Match": l[this.url],
                                "x-nonce": u.nonceKeys.pop()
                            }), p.push(t), e(".se-pre-con").show(), "GET" !== this.type && !(this.headers.boundary && this.headers.boundary.indexOf("--OBDXbatch") > -1)) {
                            if (i[this.type + this.url]) {
                                const e = p.indexOf(t);
                                return t.abort(), e > -1 && p.splice(e, 1), !1
                            }
                            i[this.type + this.url] = this.type + this.url
                        }
                        return !0
                    },
                    complete: S
                },
                I = m.format,
                O = function() {
                    y.forEach(function(e, t, n) {
                        "resolved" === e.state() && n.splice(t, 1)
                    })
                },
                R = function(t, n) {
                    return t.nonceRequired && (a.nonceEnabled = !0), new Promise(function(o, s) {
                        r.getInstance("device").then(function(a) {
                            f = a, r.getInstance("authentication").then(function(r) {
                                g = r, C(), Promise.all(y).then(function() {
                                    O();
                                    const r = e.extend(!0, {}, T, t);
                                    "external" !== r.apiType && (r.url = A(r)), n && (r.url = I(r.url, n, !0)), r.promiseResolve = o, r.url = v(r.url), r.url = E(r.url), f("addHeader", r.headers), g("addAuthHeaders", r.headers), e.ajax(r).done(function(e, t, n) {
                                        m.injectProps(e, "getResponseStatus", n.status), m.injectProps(e, "getResponseHeader", n.getResponseHeader), o(e)
                                    }).fail(function(e) {
                                        417 !== e.status && s(e)
                                    })
                                })
                            })
                        })
                    })
                },
                P = function(t) {
                    const n = t.data.match(/x-nonce:\s(.*?)\r\n/g),
                        o = e.extend(!0, {}, T, t);
                    if (o.url = "batch", o.url = A(o), o.url = v(o.url), f("addHeader", o.headers), g("addAuthHeaders", o.headers), o.async) return new Promise(function(t, r) {
                        n.forEach(function() {
                            C()
                        }), Promise.all(y).then(function() {
                            O(), o.promiseResolve = t, n.forEach(function(e) {
                                o.data = o.data.replace(e, "x-nonce: " + u.nonceKeys.pop() + "\r\n")
                            }), e.ajax(o).done(function(e, n, o) {
                                m.injectProps(e, "getResponseStatus", o.status), m.injectProps(e, "getResponseHeader", o.getResponseHeader), t(e)
                            }).fail(function(e) {
                                417 !== e.status && r(e)
                            })
                        })
                    });
                    e.ajax(o)
                };
            a.downloadFile = function(t, o) {
                e(".se-pre-con").show(), (t = e.extend(!0, {}, T, t)).url = A(t), o && (t.url = I(t.url, o, !0)), t.url = v(t.url), t.url = E(t.url), C(), f("addHeader", t.headers), g("addAuthHeaders", t.headers), f("downloadFile", t, u.nonceKeys.pop(), n.currentEntity, S)
            }, a.add = function(e, t) {
                e.type = "POST";
                const n = e.success;
                return e.success = function(e, t, o) {
                    e = m.characterEncoding(e), n && n(e, t, o)
                }, R(e, t)
            }, a.fetchImage = function(t, o) {
                n.applicationType && Object.assign(t, {
                    apiType: n.applicationType
                });
                const r = new Headers,
                    s = e.extend(!0, {}, T, t);
                return "external" !== s.apiType && (s.url = A(s)), o && (s.url = I(s.url, o, !0)), s.url = v(s.url), s.url = E(s.url), C(), Promise.all(y).then(function() {
                    r.append("X-Target-Unit", n.currentEntity), r.append("x-nonce", u.nonceKeys.pop());
                    const e = new Request(s.url, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: r
                    });
                    return fetch(e).then(function(e) {
                        const t = e.headers.get("x-nonce");
                        return t && u.nonceKeys.push(JSON.parse(t).nonce[0]), e.blob()
                    }).then(function(e) {
                        const t = window.URL.createObjectURL(e);
                        return s.element && s.sourceAttribute && s.element.setAttribute(s.sourceAttribute, t), t
                    })
                })
            }, a.batch = function(e, t, o) {
                const r = "--OBDXbatch" + Math.round(Math.pow(36, 11) - Math.random() * Math.pow(36, 10)).toString(36).slice(1);
                e.type = "POST", e.contentType = "multipart/mixed; boundary=" + r, e.headers = Object.assign({
                    boundary: r,
                    "X-BATCH_TYPE": t ? t.type : null,
                    "X-Target-Unit": n.currentEntity
                }, e.headers), e.requestType = "batch", e.data = function(e, t) {
                    let n = "";
                    const o = "{key}: {value}\r\n";
                    for (let r = 0; r < e.batchDetailRequestList.length; r++) n += m.format("--{boundary}\r\n", {
                        boundary: t
                    }), n += m.format(o, {
                        key: "x-nonce",
                        value: "nonce"
                    }), Object.keys(e.batchDetailRequestList[r].headers).forEach(function(t) {
                        null !== e.batchDetailRequestList[r].headers[t] && (n += m.format(o, {
                            key: t,
                            value: e.batchDetailRequestList[r].headers[t]
                        }))
                    }), n += m.format("\r\n{methodType} {url} HTTP/{majorminorversion}\r\n", {
                        methodType: e.batchDetailRequestList[r].methodType,
                        url: I(e.batchDetailRequestList[r].uri.value, e.batchDetailRequestList[r].uri.params, !0),
                        majorminorversion: "1.1"
                    }), e.batchDetailRequestList[r].payload && e.batchDetailRequestList[r].payload.trim() && (n += m.format("\r\n{payload}\r\n", {
                        payload: e.batchDetailRequestList[r].payload.trim()
                    }));
                    return n += m.format("--{boundary}--\r\n", {
                        boundary: t
                    })
                }(o, r);
                const s = e.success;
                return e.success = function(e, t, n) {
                    for (let t = 0; t < e.batchDetailResponseDTOList.length; t++) e.batchDetailResponseDTOList[t].responseObj = m.characterEncoding(JSON.parse(e.batchDetailResponseDTOList[t].responseText));
                    s && s(e, t, n)
                }, P(e, t)
            }, a.update = function(e, t) {
                return e.type = "PUT", R(e, t)
            }, a.patch = function(e, t) {
                return e.type = "PATCH", R(e, t)
            }, a.remove = function(e, t) {
                return e.type = "DELETE", e.dataFilter = function(e) {
                    return e || "{}"
                }, R(e, t)
            }, a.fetch = function(e, t) {
                e.type = "GET";
                const n = e.success;
                return e.success = null,
                    function(e, t) {
                        if (!1 === e.throttle) return R(e, t);
                        let n = e.url;
                        return "external" !== e.apiType && (n = e.version + "~" + n + "~" + (e.headers ? e.headers["X-Target-Unit"] : "")), t && (n = I(n, t, !0)), c.has(n) || c.set(n, {
                            promise: R(e, t).then(function(e) {
                                return setTimeout(function() {
                                    c.delete(n)
                                }, 1e3 * o.system.requestThrottleSeconds), e
                            }).catch(function(e) {
                                return setTimeout(function() {
                                    c.delete(n)
                                }, 1e3 * o.system.requestThrottleSeconds), e
                            })
                        }), !e.validationError && c.has(n) ? c.get(n).promise : new Promise(function(t, o) {
                            c.get(n).promise.then(function(n) {
                                if ("function" == typeof e.validationError) {
                                    const t = e.validationError(n);
                                    t && o(new Error(t))
                                }
                                t(n)
                            }).catch(function() {
                                o(new Error(e.validationError))
                            })
                        })
                    }(e, t).then(function(e) {
                        const t = m.characterEncoding(JSON.parse(JSON.stringify(e)));
                        return t.getResponseHeader = e.getResponseHeader, t.getResponseStatus = e.getResponseStatus, n && n(t), t
                    })
            }, a.fetchWidget = function(e, t, n) {
                return m.isDashboardBuilderContext() ? (e.url = e.mockedUrl, new Promise(function(t) {
                    require(["load!" + e.url], function(n) {
                        t(n), e.success && e.success(n)
                    })
                })) : "batch" === e.url ? a.batch(e, t, n) : a.fetch(e, t)
            }, a.invalidateSession = function() {
                O(), u.nonceKeys.length = 0, c.clear(), p.forEach(function(e) {
                    e.abort()
                }), a.nonceEnabled = !0, p.length = 0
            }, a.properties = function(e, t) {
                return e ? void 0 === t ? u[e] : u[e] = t : new Error("NO PROPERTY NAME SPECIFIED")
            }, a.uploadFile = function(t, n) {
                t.type = t.type || "POST";
                const o = new XMLHttpRequest,
                    r = e.extend(!0, {}, T, t);
                let s;
                r.url = A(r), n && (r.url = I(r.url, n, !0)), r.url = v(r.url), r.url = E(r.url), r.requestType = "upload", o.open(r.type, r.url, !0), o.responseType = "json", f("addHeader", r.headers), g("addAuthHeaders", r.headers);
                const a = r.beforeSend(o);
                return r.headers && Object.keys(r.headers).forEach(function(e) {
                    "X-Target-Unit" !== e && o.setRequestHeader([e], r.headers[e])
                }), o.send(r.formData), a || o.abort(), new Promise(function(e, t) {
                    r.promiseResolve = e, o.onreadystatechange = function() {
                        4 === this.readyState && (s = "string" == typeof this.response ? JSON.parse(this.response) : this.response, [200, 201, 202].includes(this.status) ? (m.injectProps(s, "getResponseStatus", this.status), e(s)) : 417 !== this.status && t(s), r.success && [200, 201, 202].includes(this.status) ? r.success(s, this.status, this) : r.error && 417 !== this.status && r.error(s, this.status, this), this.responseJSON = s, S.apply(r, [o]))
                    }
                })
            }
        };
        let i;
        return {
            getInstance: function(e) {
                return i || (i = function(e) {
                    const t = new a,
                        n = {
                            add: t.add,
                            patch: t.patch,
                            fetch: t.fetch,
                            update: t.update,
                            remove: t.remove,
                            batch: t.batch,
                            fetchWidget: t.fetchWidget,
                            downloadFile: t.downloadFile,
                            uploadFile: t.uploadFile,
                            fetchImage: t.fetchImage,
                            invalidateSession: t.invalidateSession,
                            props: t.properties
                        };
                    return Object.assign(t, e), n
                }(e)), i
            }
        }
    }), define("framework/js/view-model/model", ["baseService", "baseLogger", "baseModel"], function(e, t, n) {
        "use strict";
        const o = function() {
            return {
                userData: {},
                currentModule: {},
                menuNavigationAvailable: !0,
                config: {},
                authorizedUIComponents: null,
                dashboard: {
                    resolutionLevel: null,
                    list: null
                }
            }
        };
        let r, s, a;

        function i(e) {
            return e.map(function(e) {
                return e.moduleName = e.dashboardClassValue, e
            })
        }

        function c(e) {
            var n, o;
            Promise.all([s.fetch({
                url: "me/components",
                showMessage: !1
            }).then(function(e) {
                r.authorizedUIComponents = e
            }), new Promise(function(e) {
                s.fetch({
                    url: "bankConfiguration",
                    showMessage: !1
                }).then(function(n) {
                    r.config.bankConfig = n.bankConfigurationDTO, require(["load!lzn/" + n.bankConfigurationDTO.region.toLowerCase() + "/manifest.json"], function(t) {
                        r.config.localization = {
                            name: n.bankConfigurationDTO.region.toLowerCase(),
                            data: t
                        }, e()
                    }, function() {
                        t.info("Localization is not available"), e()
                    })
                }).catch(function() {
                    e()
                })
            }), (n = r.userData.firstLoginFlowDone, o = r.userData.dashboardResponse, !1 === n || o && o.dashboardDTOs && o.dashboardDTOs.length ? (r.dashboard.resolutionLevel = o.resolutionLevel, r.dashboard.list = i(o.dashboardDTOs)) : s.fetch({
                url: "dashboards/default"
            }).then(function(e) {
                r.dashboard.list = i(e.dashboardDTOs)
            }))]).then(function() {
                e(r)
            })
        }

        function l(e, t) {
            s.fetch({
                url: "me",
                showMessage: !1,
                showInModalWindow: !0,
                throttle: !1
            }).then(function(n) {
                e(n.userProfile.homeEntity),
                    function(e, t) {
                        r.userData = e, r.menuNavigationAvailable = a.QueryParams.get("menuNavigationAvailable") || e.firstLoginFlowDone && e.menuSupported, r.config.timezoneOffset = e.userProfile.timeZoneDTO.offset, e.firstLoginFlowDone || (r.currentModule = {
                            homeComponent: "configuration-base",
                            moduleName: "user-login-configuration"
                        }), -1 !== e.userProfile.roles.indexOf("AuthAdmin") ? function(e) {
                            s.fetch({
                                url: "configurations/base/dayoneconfig/properties/SYSTEM_CONFIGURATION"
                            }).then(function(t) {
                                "false" === t.configResponseList[0].propertyValue && (r.currentModule = {
                                    homeComponent: "system-configuration-home",
                                    moduleName: "system-configuration"
                                }), c(e)
                            })
                        }(t) : c(t)
                    }(n, t)
            }, function(n) {
                e(null),
                    function(e, t) {
                        if (r.userData = {
                                userProfile: 400 === e.status ? {
                                    roles: []
                                } : null
                            }, r.config = {
                                entity: null,
                                timezone: null
                            }, e && 401 !== e.status) return r.userData.jqXHR = e, s.invalidateSession(), t(r);
                        c(t)
                    }(n, t)
            })
        }
        return {
            init: function() {
                s = e.getInstance(), a = n.getInstance()
            },
            perform: function(e) {
                return r = new o, new Promise(function(t) {
                    return l(e, t)
                })
            },
            fetchCurrentBrand: function() {
                return new Promise(function(e) {
                    return function(e) {
                        s.fetch({
                            url: "brands/current",
                            showMessage: !1
                        }).then(function(t) {
                            e(t)
                        }, function() {
                            e()
                        })
                    }(e)
                })
            },
            reset: function() {
                s.invalidateSession()
            }
        }
    }), define("resources/nls/formats", [], function() {
        "use strict";
        return new function() {
            return {
                root: {
                    dateFormat: "dd MMM yyyy",
                    dateMonthFormat: "dd MMM",
                    dateTimeStampFormat: "dd MMM yyyy hh:mm:ss a",
                    dateTimehhmmFormat: "dd MMM yyyy hh:mm a",
                    timeFormat: "h:mm a",
                    monthYearFormat: "MMM yyyy",
                    dateTimeFormat: "dd MMM hh:mm a",
                    timeStampFormat: "hh:mm:ss"
                },
                ar: !1,
                es: !0,
                pt: !1,
                fr: !0,
                cs: !0,
                sv: !0,
                en: !1,
                "en-us": !1,
                el: !0
            }
        }
    }), define("extensions/resources/nls/formats", [], function() {
        "use strict";
        return new function() {
            return {
                root: {},
                ar: !1,
                fr: !1,
                cs: !1,
                sv: !1,
                en: !1,
                "en-us": !1,
                el: !1
            }
        }
    }), define("framework/js/base-models/ko/formatters", ["ojs/ojcore", "knockout", "ojL10n!resources/nls/formats", "framework/js/constants/constants", "extensions/override/extensions", "ojL10n!extensions/resources/nls/formats", "ojs/ojvalidation"], function(e, t, n, o, r, s) {
        "use strict";
        return function() {
            const a = function(e) {
                return s && s[e] ? s[e] : o.localization && o.localization.data.format && o.localization.data.format[e] ? o.localization.data.format[e] : n[e]
            };
            this.formatNumber = function(t, n, o, r) {
                const s = {
                    style: n,
                    maximumFractionDigits: o = o || 2,
                    minimumFractionDigits: r = r || 2
                };
                return e.Validation.converterFactory("number").createConverter(s).format(t)
            }, this.formatDate = function(n, r) {
                const s = t.utils.unwrapObservable(n);
                let i = null;
                if (!s || "" === s) return "";
                s.length > 19 && o.timezoneOffset && (i = new Date(s)).setMinutes(i.getMinutes() + i.getTimezoneOffset() + -1 * o.timezoneOffset);
                const c = a(r = r || "dateFormat");
                return e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({
                    pattern: c
                }).format(i ? e.IntlConverterUtils.dateToLocalIso(i) : s)
            }, this.compareISODates = function(t, n) {
                return e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter().compareISODates(t, n || (new Date).toISOString())
            }, this.dateConverter = e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({
                pattern: a("dateFormat")
            }), this.timeConverter = e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({
                hour: "2-digit",
                hour12: !1,
                minute: "2-digit"
            }), this.dateTimeConverter = e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({
                pattern: a("dateTimehhmmFormat")
            }), this.formatCurrency = function(t, n, o, s) {
                const a = {
                    style: "currency",
                    currency: n,
                    currencyDisplay: "code",
                    maximumFractionDigits: o,
                    minimumFractionDigits: s,
                    useGrouping: !0
                };
                return e.Validation.converterFactory("number").createConverter(r.getCurrencyFormattingOptions(n) || a).format(t)
            }
        }
    }), define("framework/js/view-model/generic-view-model", ["knockout", "jquery", "./model", "framework/js/constants/constants", "baseModel", "baseLogger", "extensions/override/extensions", "framework/js/base-models/ko/formatters", "base-models/css", "framework/js/configurations/config", "ojL10n!resources/nls/generic", "knockout-mapping"], function(e, t, n, o, r, s, a, i, c, l, u, d) {
        "use strict";
        const p = r.getInstance();
        let m;
        e.mapping = d, window.console.log = console.log = s.info;
        const f = document.querySelector("body").getAttribute("service-worker"),
            g = /^(((?!chrome|android).)*safari)|Edge\//i.test(navigator.userAgent);
        l.serviceWorker.enabled && f && navigator.serviceWorker && !g && (m = navigator.serviceWorker.register(f));
        let h, y, j = "default" === p.QueryParams.get("module") ? "" : p.QueryParams.get("module");
        const b = p.QueryParams.get("context"),
            E = ["authadmin", "adminchecker", "adminmaker", "OpAdminChecker", "OpAdminMaker", "corporateadminchecker", "corporateadminmaker", "viewer", "checker", "maker", "customer"],
            v = e.observable(),
            A = {
                CORPADMIN: ["corporateadminchecker", "corporateadminmaker"],
                CORP: ["viewer", "checker", "maker"],
                ADMIN: ["authadmin"],
                BANKADMIN: ["AdminChecker", "AdminMaker"],
                OPSADMIN: ["OpAdminChecker", "OpAdminMaker"]
            },
            w = JSON.parse(decodeURIComponent(p.QueryParams.get("OBDX_ARGS") || "") || p.QueryParams.get("OBDX_ARGS", p.QueryParams.get("redirect_url") ? decodeURIComponent(p.QueryParams.get("redirect_url")) : null) || "{}"),
            S = new i;
        t.extend(p, S);
        const C = p.QueryParams.get("applicationType");
        o.applicationType = C, a.init();
        const T = {
                getBaseModel: function() {
                    return p
                },
                getFormatter: function() {
                    return S
                },
                queryMap: p.QueryParams.get(),
                menuNavigationAvailable: !0
            },
            I = e.observable(c.isCSSCustomPropAvailable());
        if (p.isEmpty(p.QueryParams.get("menuNavigationAvailable")) || (T.menuNavigationAvailable = "true" === p.QueryParams.get("menuNavigationAvailable")), p.isEmpty(p.QueryParams.get("determinantValue")) || x(p.QueryParams.get("determinantValue")), !p.cordovaDevice() && l.system.sslEnabled && "https:" !== window.location.protocol) throw "Please use secure HTTPS connection";

        function O(e) {
            return "CORPADMIN" === e ? "corp-admin" : "RETAIL" === e ? "retail" : "CORP" === e ? "corporate" : "ADMIN" === e ? "admin" : "BANKADMIN" === e ? "bankadmin" : "OPSADMIN" === e ? "opsadmin" : "index"
        }

        function R(e) {
            return A.CORPADMIN.indexOf(e) > -1 ? "CORPADMIN" : A.CORP.indexOf(e) > -1 ? "CORP" : A.ADMIN.indexOf(e) > -1 ? "ADMIN" : A.BANKADMIN.indexOf(e) > -1 ? "BANKADMIN" : A.OPSADMIN.indexOf(e) > -1 ? "OPSADMIN" : null
        }

        function P(e) {
            const t = e.map(function(e) {
                    return e.toLowerCase()
                }),
                n = a.evaluateSegment(e);
            return y = E.filter(function(e) {
                return -1 !== t.indexOf(e)
            }), b ? "ANON" : n || (t.indexOf("corporateadminchecker") > -1 || t.indexOf("corporateadminmaker") > -1 ? "CORPADMIN" : t.indexOf("retailuser") > -1 ? "RETAIL" : t.indexOf("corporateuser") > -1 ? "CORP" : t.indexOf("administrator") > -1 ? "ADMIN" : t.indexOf("bankadministrator") > -1 ? "BANKADMIN" : t.indexOf("opsadministrator") > -1 ? "OPSADMIN" : "ANON")
        }

        function N(e, n) {
            o.userSegment = a.evaluateSegment(n, e) || e || P(n) || o.userSegment;
            const r = t("body").hasClass("page-is-changing");
            t("body").attr("class", o.userSegment), r && t("body").addClass("page-is-changing"), o.jsonContext = a.evaluateContext(o.userSegment, n)
        }

        function x(e) {
            o.currentEntity = o.currentEntity || e || l.system.defaultEntity
        }

        function D() {
            return h.perform(x).then(function(e) {
                var t, n;
                return e.userData.jqXHR && 400 === e.userData.jqXHR.status && p.showMessages(e.userData.jqXHR), e.config.segment = P(e.userData.userProfile ? e.userData.userProfile.roles : []), e.userData.userProfile && e.userData.dashboardResponse && "CUSTOM" === e.userData.dashboardResponse.resolutionLevel && "CORPADMIN" === e.config.segment && (N("CORP", e.userData.userProfile.roles), e.config.segment = "CORP"), N((t = e.config).segment), o.timezoneOffset = t.timezoneOffset || o.timezoneOffset, o.bankConfig = t.bankConfig, o.localization = t.localization, e.authorizedUIComponents && p.setAuthorisedComponentList(e.authorizedUIComponents), e.userData.userProfile && T.menuNavigationAvailable && (T.menuNavigationAvailable = e.userData.firstLoginFlowDone && e.userData.menuSupported), e.currentModule.homeComponent || (T.queryMap && T.queryMap.homeComponent ? e.currentModule = {
                    homeComponent: T.queryMap.homeComponent,
                    moduleName: T.queryMap.homeModule
                } : e.currentModule = {
                    dashboard: j
                }), {
                    currentModule: e.currentModule,
                    userData: e.userData,
                    dashboards: (n = e.dashboard, C || n && n.list && n.list.length ? "APPLICATION_ROLE" === n.resolutionLevel ? n.list.sort(function(e, t) {
                        return e.dashboardClass === t.dashboardClass && e.dashboardClass === n.resolutionLevel ? y.indexOf(e.dashboardClassValue) - y.indexOf(t.dashboardClassValue) : "APPLICATION_ROLE" === e.dashboardClass ? -1 : "APPLICATION_ROLE" === t.dashboardClass ? 1 : 0
                    }) : n.list : (p.showMessages(null, [u.noDashboardError], "ERROR"), [])),
                    appData: {
                        segment: o.userSegment,
                        localCurrency: e.config.bankConfig ? e.config.bankConfig.localCurrency : null,
                        region: e.config.localization ? e.config.localization.name : null
                    }
                }
            })
        }

        function k(n) {
            T.isUserDataSet(!1), I(!1), t(window).off(), e.tasks.runEarly(), T.userInfoPromise = new Promise(function(e) {
                n.userProfile, D(), v(null), I(!0)
            })
        }

        function L(n, r) {
            t(window).off(), t("body").addClass("page-is-changing"), I(!1), T.isUserDataSet(!1), e.tasks.runEarly(), o.currentEntity = n, p.clearAuthorisedComponentList(), window.dispatchEvent(new CustomEvent("resetLayout")), p.removeAllEvent(), h.reset(), r && (j = null), T.menuNavigationAvailable = !0, T.userInfoPromise = D(), T.userInfoPromise.then(function() {
                T.fetchCurrentBrand = h.fetchCurrentBrand(), c.loadCSS(T.fetchCurrentBrand).then(function() {
                    I(!0), window.dispatchEvent(new CustomEvent("menuChanged"))
                })
            })
        }

        function M(e) {
            require(["framework/elements/core/dashboard/loader"], function() {
                e()
            })
        }(C ? new Promise(function(e) {
            require(["framework/js/view-model/" + C + "-model"], function(t) {
                e(t)
            })
        }) : Promise.resolve(n)).then(function(t) {
            (h = t).init(), p.registerElement("message-box", "core");
            const n = D();
            n.then(function() {
                T.fetchCurrentBrand = h.fetchCurrentBrand(), c.loadCSS(T.fetchCurrentBrand).then(function() {
                    M(function() {
                        I(!0), window.dispatchEvent(new CustomEvent("menuChanged"))
                    })
                })
            }), e.utils.extend(T, {
                userInfoPromise: n,
                serviceWorkerRegistrationPromise: m,
                isUserDataSet: e.observable(!1),
                applicationArguments: w,
                changeUser: k,
                computeContext: O,
                resetLayout: L,
                changeSegment: N,
                isDashboardSet: I,
                getRoleBasedSegment: R,
                currentRole: v,
                fetchCurrentBrand: h.fetchCurrentBrand() || null
            });
            const o = function() {
                e.applyBindings(Object.seal(T))
            };
            I() ? M(o) : o()
        })
    }), define("framework/js/base-models/device/default", ["framework/js/configurations/config"], function(e) {
        "use strict";
        return {
            init: function(e, t) {
                t(e)
            },
            downloadFile: function(e, t, n, o) {
                const r = new XMLHttpRequest;
                let s;
                r.open(e.type || "GET", e.url, !0), r.setRequestHeader("x-nonce", t), r.setRequestHeader("X-Target-Unit", n), r.setRequestHeader("Content-type", "application/json"), e.headers && Object.keys(e.headers).forEach(function(t) {
                    r.setRequestHeader([t], e.headers[t])
                }), void 0 === document.createElement("a").download && (s = window.open("", "_blank")), r.onreadystatechange = function() {
                    if (4 === r.readyState) {
                        if (200 === r.status) {
                            let t = "";
                            const n = r.getResponseHeader("Content-Disposition");
                            if (n && -1 !== n.indexOf("attachment")) {
                                const e = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(n);
                                e && e[1] && (t = (t = window.decodeURI(e[1].substr(e[1].lastIndexOf("'") + 1, e[1].length))).replace(/['"]/g, ""))
                            }
                            const a = r.response;
                            if (void 0 !== window.navigator.msSaveBlob) window.navigator.msSaveBlob(a, t);
                            else {
                                const e = new Blob([a], {
                                        type: "application/octet-stream"
                                    }),
                                    n = window.URL || window.webkitURL,
                                    o = n.createObjectURL(e);
                                if (t) {
                                    const e = document.createElement("a");
                                    void 0 === e.download ? (s.location = o, s.onunload = function() {
                                        n.revokeObjectURL(o)
                                    }) : (e.href = o, e.download = t, document.body.appendChild(e), e.click(), setTimeout(function() {
                                        n.revokeObjectURL(o), document.body.removeChild(e)
                                    }, 100))
                                } else s.location = o, s.onunload = function() {
                                    n.revokeObjectURL(o)
                                }
                            }
                            o.apply(e, [r])
                        } else if ("" !== r.responseText) {
                            const t = r;
                            t.responseJSON = JSON.parse(r.responseText), o.apply(e, [t])
                        }
                    } else 2 === r.readyState && (200 === r.status ? r.responseType = "blob" : r.responseType = "text")
                }, r.send(e.data)
            },
            getServerURL: function() {
                return e.sharding.apiBaseURL
            },
            getImageBaseURL: function() {
                return e.sharding.imageResourcePath
            }
        }
    }), define("jquery-private", ["jquery"], function(e) {
        "use strict";
        return e.noConflict(!0)
    });