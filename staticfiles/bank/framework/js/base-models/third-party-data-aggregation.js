define(["framework/js/configurations/config"], function(n) {
    "use strict";
    let t;

    function i(t) {
        const i = this,
            a = {};
        i.callBehaviour = function() {
            if (a[arguments[0]]) {
                const n = [].slice.call(arguments).splice(1);
                return a[arguments[0]].apply(this, n)
            }
            return null
        }, n.analytics.thirdPartyAnalytics.enabled ? require(["third-party-data-aggregation/" + n.analytics.thirdPartyAnalytics.analyticsProvider], function(n) {
            Object.assign(a, n), t(i.callBehaviour)
        }, function() {
            t(i.callBehaviour)
        }) : t(i.callBehaviour)
    }
    return {
        getInstance: function() {
            return t || (t = new Promise(function(n) {
                new i(n)
            }))
        }
    }
});