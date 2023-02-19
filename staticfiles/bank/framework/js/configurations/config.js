define(["build.fingerprint"], function(e) {
    "use strict";
    return function e(t) {
        return Object.getOwnPropertyNames(t).forEach(function(a) {
            const i = t[a];
            t[a] = i && "object" == typeof i ? e(i) : i
        }), Object.freeze(t)
    }({
        i18n: {
            rtlLocales: ["ar", "he", "ku", "fa", "ur", "dv", "ha", "ps", "yi"]
        },
        sharding: {
            imageResourcePath: "./images",
            apiBaseURL: "",
            webHelpContentURL: ""
        },
        serviceWorker: {
            enabled: !0
        },
        authentication: {
            type: "OBDXAuthenticator",
            providerURL: "",
            pages: {
                securePage: "/",
                publicPage: "index.html"
            }
        },
        thirdPartyAPIs: {
            facebook: {
                url: "",
                sdkURL: "",
                apiKey: ""
            },
            linkedin: {
                sdkURL: "",
                apiKey: ""
            },
            googleMap: {
                url: "https://maps.googleapis.com/maps/api/",
                sdkURL: "",
                apiKey: "AIzaSyDAsiH9JAm1Qfv3BxVvSHYGS7ywOBYe2XI"
            },
            oda: {
                uri: "idcs-oda-d501204fbc4d496dac7b74d15a590dce-t0.data.digitalassistant.oci.oc-test.com",
                channelId: "18ee2907-027f-4f76-b1b1-c1a59ace180d",
                userId: "abc",
                secret: "p85Odqq12k6Mhbnu4J9Bws20VqS2aLCS"
            }
        },
        oracleJet: {
            hostedAt: "local",
            baseUrl: "framework/js/libs/oraclejet",
            version: "12.1.0"
        },
        apiCatalogue: {
            base: {
                contextRoot: "digx",
                defaultVersion: "v1"
            },
            extended: {
                contextRoot: "digx/ext",
                defaultVersion: "v1"
            },
            social: {
                contextRoot: "digx-social",
                defaultVersion: "v1"
            },
            "digx-auth": {
                contextRoot: "digx-auth/ext",
                defaultVersion: "v1"
            },
            "digx-auth-extended": {
                contextRoot: "digx-auth",
                defaultVersion: "v1"
            }
        },
        system: {
            componentAccessControlEnabled: !1,
            requestThrottleSeconds: 5,
            defaultEntity: "OBDX_BU",
            sslEnabled: !1,
            loggingLevel: "LEVEL_ERROR",
            buildTimestamp: e.timeStamp,
            mandatorySignRequired: !1
        },
        analytics: {
            thirdPartyAnalytics: {
                enabled: !1,
                analyticsProvider: ""
            },
            obdxAnalytics: {
                enabled: !1,
                eventsThreshold: 5,
                inactivityTimeout: 6e5
            }
        },
        development: {
            enabled: !1,
            checkAccessibility: !1,
            axeUrl: "https://cdnjs.cloudflare.com/ajax/libs/axe-core/3.3.2/axe.min.js"
        }
    })
});