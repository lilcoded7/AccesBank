/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojvcomponent", "preact", "ojs/ojtranslation"], function(e, r, t, a) {
    "use strict";
    var s = function(e, r, t, a) {
        var s, l = arguments.length,
            n = l < 3 ? r : null === a ? a = Object.getOwnPropertyDescriptor(r, t) : a;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, r, t, a);
        else
            for (var o = e.length - 1; o >= 0; o--)(s = e[o]) && (n = (l < 3 ? s(n) : l > 3 ? s(r, t, n) : s(r, t)) || n);
        return l > 3 && n && Object.defineProperty(r, t, n), n
    };
    e.ProgressCircle = class extends t.Component {
        render(e) {
            return -1 === e.value ? this._renderIndeterminateCircle(e) : this._renderDeterminateCircle(e)
        }
        _renderIndeterminateCircle(e) {
            return t.h(r.Root, {
                class: "oj-progress-circle oj-progress-circle-" + e.size,
                role: "progressbar",
                "aria-valuetext": a.getTranslatedString("oj-ojProgressbar.ariaIndeterminateProgressText")
            }, t.h("div", {
                class: "oj-progress-circle-indeterminate"
            }, t.h("div", {
                class: "oj-progress-circle-indeterminate-inner"
            })))
        }
        _renderDeterminateCircle(e) {
            let a = e.max,
                s = e.value;
            a < 0 && (a = 0), s < 0 && -1 !== s && (s = 0);
            const l = 0 === a ? 0 : s > a ? 1 : s / a,
                n = this._getClipPath(l);
            return t.h(r.Root, {
                class: "oj-progress-circle oj-progress-circle-" + e.size,
                role: "progressbar",
                "aria-valuemin": "0",
                "aria-valuemax": a,
                "aria-valuenow": s
            }, t.h("div", {
                class: "oj-progress-circle-tracker"
            }), t.h("div", {
                class: "oj-progress-circle-value",
                style: {
                    clipPath: n
                }
            }))
        }
        _getClipPath(e) {
            let r;
            return e < .125 ? (r = this._calculateTangent(e) + 50, `polygon(50% 0, ${r}% 0, 50% 50%)`) : e < .375 ? (r = e < .25 ? 50 - this._calculateTangent(.25 - e) : this._calculateTangent(e - .25) + 50, `polygon(50% 0, 100% 0, 100% ${r}%, 50% 50%)`) : e < .625 ? (r = e < .5 ? 50 + this._calculateTangent(.5 - e) : 50 - this._calculateTangent(e - .5), `polygon(50% 0, 100% 0, 100% 100%, ${r}% 100%, 50% 50%)`) : e < .875 ? (r = e < .75 ? 50 + this._calculateTangent(.75 - e) : 50 - this._calculateTangent(e - .75), `polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% ${r}%, 50% 50%)`) : (r = 50 - this._calculateTangent(1 - e), `polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% 0%, ${r}% 0%, 50% 50%)`)
        }
        _calculateTangent(e) {
            return 50 * Math.tan(2 * e * Math.PI)
        }
    }, e.ProgressCircle.defaultProps = {
        max: 100,
        value: 0,
        size: "md"
    }, e.ProgressCircle.metadata = {
        properties: {
            max: {
                type: "number"
            },
            value: {
                type: "number"
            },
            size: {
                type: "string",
                enumValues: ["sm", "md", "lg"]
            }
        }
    }, e.ProgressCircle = s([r.customElement("oj-progress-circle")], e.ProgressCircle), Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojprogress-circle.js.map