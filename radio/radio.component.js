/*!
 *
 * carbon-angular v0.0.0 | radio.component.js
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


import { Component, Input, HostBinding, Output, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { RadioChange } from "./radio-group.component";
/**
 * class: Radio (extends Checkbox)
 *
 * selector: `n-radio`
 *
 * source: `src/forms/radio.component.ts`
 *
 * ```html
 * <ibm-radio [(ngModel)]="radioState">Radio</ibm-radio>
 * ```
 *
 * Also see: [`RadioGroup`](#ibm-radio-group)
 *
 * @export
 * @class Radio
 * @extends {Checkbox}
 * @implements {OnInit}
 */
var Radio = /** @class */ (function () {
    function Radio() {
        this.checked = false;
        this.name = "";
        this.disabled = false;
        /**
         * Sets the HTML required attribute
         */
        this.required = false;
        /**
         * The value of the `Radio`.
         */
        this.value = "";
        /**
         * Set to `true` for a loading table.
         */
        this.skeleton = false;
        /**
         * The id for the `Radio`.
         */
        this.id = "radio-" + Radio.radioCount++;
        /**
         * emits when the state of the radio changes
         */
        this.change = new EventEmitter();
        /**
         * Binds 'radio' value to the role attribute for `Radio`.
         */
        this.role = "radio";
        this._labelledby = "";
        /**
         * Handler provided by the `RadioGroup` to bubble events up
         */
        this.radioChangeHandler = function (event) { };
    }
    Object.defineProperty(Radio.prototype, "ariaLabelledby", {
        get: function () {
            if (this._labelledby) {
                return this._labelledby;
            }
            return "label-" + this.id;
        },
        set: function (value) {
            this._labelledby = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
     * Emits the changes of both the `RadioGroup` and `Radio`.
     */
    Radio.prototype.onChange = function (event) {
        event.stopPropagation();
        this.checked = event.target.checked;
        var radioEvent = new RadioChange(this, this.value);
        this.change.emit(radioEvent);
        this.radioChangeHandler(radioEvent);
    };
    /**
     * Method called by `RadioGroup` with a callback function to bubble `RadioChange` events
     * @param fn callback that expects a `RadioChange` as an argument
     */
    Radio.prototype.registerRadioChangeHandler = function (fn) {
        this.radioChangeHandler = fn;
    };
    /**
     * Used to dynamically create unique ids for the `Radio`.
     */
    Radio.radioCount = 0;
    Radio.decorators = [
        { type: Component, args: [{
                    selector: "ibm-radio",
                    template: "\n\t\t<input\n\t\t\t*ngIf=\"!skeleton\"\n\t\t\tclass=\"bx--radio-button\"\n\t\t\ttype=\"radio\"\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[name]=\"name\"\n\t\t\t[id]=\"id\"\n\t\t\t[required]=\"required\"\n\t\t\t[value]=\"value\"\n\t\t\t[attr.aria-labelledby]=\"ariaLabelledby\"\n\t\t\t(change)=\"onChange($event)\">\n\t\t<div *ngIf=\"skeleton\" class=\"bx--radio-button bx--skeleton\"></div>\n\t\t<label\n\t\t\tclass=\"bx--radio-button__label\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--skeleton': skeleton\n\t\t\t}\"\n\t\t\t[for]=\"id\"\n\t\t\tid=\"label-{{id}}\">\n\t\t\t<span class=\"bx--radio-button__appearance\"></span>\n\t\t\t<ng-content></ng-content>\n\t\t</label>\n\t",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: Radio,
                            multi: true
                        }
                    ]
                },] },
    ];
    Radio.propDecorators = {
        checked: [{ type: Input }],
        name: [{ type: Input }],
        disabled: [{ type: Input }],
        ariaLabelledby: [{ type: Input }],
        required: [{ type: Input }],
        value: [{ type: Input }],
        skeleton: [{ type: Input }],
        id: [{ type: Input }],
        change: [{ type: Output }],
        role: [{ type: HostBinding, args: ["attr.role",] }]
    };
    return Radio;
}());
export { Radio };
//# sourceMappingURL=radio.component.js.map