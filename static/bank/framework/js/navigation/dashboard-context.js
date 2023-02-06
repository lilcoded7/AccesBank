define(["knockout", "jquery", "ojs/ojcontext"], function(e, o, t) {
    "use strict";
    let n = {
        componentName: e.observable(),
        params: e.observable()
    };
    return {
        getDashboardContext: function() {
            return {
                helpComponent: n
            }
        }
    }
});