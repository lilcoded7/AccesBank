! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    "use strict";
    return e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
}));