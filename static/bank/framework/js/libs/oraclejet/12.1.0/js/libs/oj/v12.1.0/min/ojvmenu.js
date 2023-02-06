/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports", "ojs/ojmenu", "preact"], function(e, t, n) {
    "use strict";
    class o extends n.Component {
        constructor(e) {
            super(e), this._rootRef = null
        }
        render(e) {
            return n.h("div", {
                style: {
                    display: "none"
                },
                ref: e => this._rootRef = e
            }, e.children)
        }
        componentDidMount() {
            this._menuElement || (this._menuElement = this._getMenu(), null !== this._menuElement && this._openMenu())
        }
        _getMenu() {
            return this._rootRef.childNodes[0]
        }
        _openMenu() {
            const e = this._getOpenOptions();
            this._menuElement.__openingContextMenu = !0;
            try {
                this._menuElement.open(this.props.eventObj.event, e), this._addCloseListener()
            } catch (e) {
                throw e
            } finally {
                this._menuElement.__openingContextMenu = !1
            }
        }
        _addCloseListener() {
            this.props.onCloseCallback && this._menuElement.addEventListener("ojClose", this.props.onCloseCallback)
        }
        _getOpenOptions() {
            const e = this.props.eventObj.eventType || "keyboard";
            return {
                launcher: this.props.launcherElement,
                position: Object.assign(Object.assign({}, o._MENU_POSITION[e]), { of: "keyboard" === e ? this.props.launcherElement : this.props.eventObj.event
                }),
                initialFocus: "menu"
            }
        }
        componentWillUnmount() {
            this._removeCloseListener()
        }
        _removeCloseListener() {
            this._menuElement && this.props.onCloseCallback && this._menuElement.removeEventListener("ojClose", this.props.onCloseCallback)
        }
    }
    o._MENU_POSITION = {
        mouse: {
            my: "start top",
            at: "start bottom",
            collision: "flipfit"
        },
        touch: {
            my: "start>40 center",
            at: "start bottom",
            collision: "flipfit"
        },
        keyboard: {
            my: "start top",
            at: "start bottom",
            collision: "flipfit"
        }
    }, e.VMenu = o, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=ojvmenu.js.map