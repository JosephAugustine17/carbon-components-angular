/*!
 *
 * carbon-angular v0.0.0 | toggle.component.js
 *
 * Copyright 2014, 2019 IBM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Checkbox } from "../checkbox/checkbox.component";
import { ChangeDetectorRef, Component, Input, Output, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { I18n } from "../i18n/i18n.module";
/**
 * Defines the set of states for a toggle component.
 * @export
 * @enum {number}
 */
export var ToggleState;
(function (ToggleState) {
    ToggleState[ToggleState["Init"] = 0] = "Init";
    ToggleState[ToggleState["Indeterminate"] = 1] = "Indeterminate";
    ToggleState[ToggleState["Checked"] = 2] = "Checked";
    ToggleState[ToggleState["Unchecked"] = 3] = "Unchecked";
})(ToggleState || (ToggleState = {}));
/**
 * Used to emit changes performed on toggle components.
 * @export
 * @class ToggleChange
 */
var ToggleChange = /** @class */ (function () {
    function ToggleChange() {
    }
    return ToggleChange;
}());
export { ToggleChange };
/**
 * ```html
 * <ibm-toggle [(ngModel)]="toggleState">Toggle</ibm-toggle>
 * ```
 * @export
 * @class Toggle
 * @extends {Checkbox}
 * @implements {OnInit}
 */
var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
    /**
     * Creates an instance of Toggle.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof Toggle
     */
    function Toggle(changeDetectorRef, i18n) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.i18n = i18n;
        /**
         * Size of the toggle component.
         * @type {("sm" | "md" | "default")}
         * @memberof Toggle
         */
        _this.size = "md";
        /**
         * Set to `true` for a loading toggle.
         * @type {(boolean)}
         * @memberof Toggle
         */
        _this.skeleton = false;
        /**
         * The unique id allocated to the `Toggle`.
         * @type {string}
         * @memberof Toggle
         */
        _this.id = "toggle-" + Toggle.toggleCount;
        /**
         * Emits event notifying other classes when a change in state occurs on a toggle after a
         * click.
         */
        _this.change = new EventEmitter();
        _this._offText = _this.i18n.get("TOGGLE.OFF");
        _this._onText = _this.i18n.get("TOGGLE.ON");
        Toggle.toggleCount++;
        return _this;
    }
    Object.defineProperty(Toggle.prototype, "offText", {
        get: function () {
            return this._offText;
        },
        /**
         * Text that is set on the left side of the toggle.
         * @type {(string)}
         * @memberof Toggle
         */
        set: function (value) {
            this._offText.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toggle.prototype, "onText", {
        get: function () {
            return this._onText;
        },
        /**
         * Text that is set on the right side of the toggle.
         * @type {(string)}
         * @memberof Toggle
         */
        set: function (value) {
            this._onText.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates instance of `ToggleChange` used to propagate the change event.
     * @memberof To
     */
    Toggle.prototype.emitChangeEvent = function () {
        var event = new ToggleChange();
        event.source = this;
        event.checked = this.checked;
        this.propagateChange(this.checked);
        this.change.emit(event);
    };
    /**
     * Variable used for creating unique ids for toggle components.
     * @type {number}
     * @static
     * @memberof Toggle
     */
    Toggle.toggleCount = 0;
    Toggle.decorators = [
        { type: Component, args: [{
                    selector: "ibm-toggle",
                    template: "\n\t\t<input\n\t\t\tclass=\"bx--toggle\"\n\t\t\ttype=\"checkbox\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--toggle--small': size === 'sm',\n\t\t\t\t'bx--skeleton': skeleton\n\t\t\t}\"\n\t\t\t[id]=\"id\"\n\t\t\t[value]=\"value\"\n\t\t\t[name]=\"name\"\n\t\t\t[required]=\"required\"\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[attr.aria-checked]=\"checked\"\n\t\t\t(change)=\"onChange($event)\"\n\t\t\t(click)=\"onClick($event)\">\n\t\t<label\n\t\t\t*ngIf=\"size === 'md'\"\n\t\t\tclass=\"bx--toggle__label\"\n\t\t\t[for]=\"id\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--skeleton': skeleton\n\t\t\t}\">\n\t\t\t<span class=\"bx--toggle__text--left\">{{(!skeleton ? offText : null) | async }}</span>\n\t\t\t<span class=\"bx--toggle__appearance\"></span>\n\t\t\t<span class=\"bx--toggle__text--right\">{{(!skeleton ? onText : null) | async}}</span>\n\t\t</label>\n\n\t\t<label\n\t\t\t*ngIf=\"size === 'sm'\"\n\t\t\tclass=\"bx--toggle__label\"\n\t\t\t[for]=\"id\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--skeleton': skeleton\n\t\t\t}\">\n\t\t\t<span class=\"bx--toggle__appearance\">\n\t\t\t\t<svg class=\"bx--toggle__check\" width=\"6px\" height=\"5px\" viewBox=\"0 0 6 5\">\n\t\t\t\t\t<path d=\"M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z\"/>\n\t\t\t\t</svg>\n\t\t\t</span>\n\t\t</label>\n\t",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: Toggle,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    Toggle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: I18n }
    ]; };
    Toggle.propDecorators = {
        offText: [{ type: Input }],
        onText: [{ type: Input }],
        size: [{ type: Input }],
        skeleton: [{ type: Input }],
        change: [{ type: Output }]
    };
    return Toggle;
}(Checkbox));
export { Toggle };
//# sourceMappingURL=toggle.component.js.map