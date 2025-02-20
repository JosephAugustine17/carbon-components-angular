/*!
 *
 * carbon-angular v0.0.0 | radio-group.component.js
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


import { ContentChildren, Component, EventEmitter, forwardRef, Input, Output, QueryList, HostBinding } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Radio } from "./radio.component";
/**
 * Used to emit changes performed on a `Radio`.
 * @export
 * @class RadioChange
 */
var RadioChange = /** @class */ (function () {
    function RadioChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return RadioChange;
}());
export { RadioChange };
/**
 * class: RadioGroup
 *
 * selector: `ibm-radio-group`
 *
 * source: `src/forms/radio.component.ts`
 *
 *
 * Ex:
 * ```html
 * <ibm-radio-group [(ngModel)]="radio">
 * 	<ibm-radio *ngFor="let one of manyRadios" [value]="one">
 *		Radio {{one}}
 * 	</ibm-radio>
 * </ibm-radio-group>
 *
 * Radio selected: {{radio}}
 * ```
 *
 * ```typescript
 * manyRadios = ["one", "two", "three", "four", "five", "six"];
 * ```
 *
 * Also see: [`Radio`](#ibm-radio)
 *
 */
var RadioGroup = /** @class */ (function () {
    function RadioGroup() {
        /**
         * Emits event notifying other classes of a change using a `RadioChange` class.
         */
        this.change = new EventEmitter();
        /**
         * Set to true to disable the whole radio group
         */
        this.disabled = false;
        /**
         * Binds 'bx--form-item' value to the class for `RadioGroup`.
         */
        this.radioButtonGroupClass = true;
        /**
         * To track whether the `RadioGroup` has been initialized.
         */
        this.isInitialized = false;
        /**
         * Reflects whether or not the input is disabled and cannot be selected.
         */
        this._disabled = false;
        /**
         * Reflects whether or not the dropdown is loading.
         */
        this._skeleton = false;
        /**
         * The value of the selected option within the `RadioGroup`.
         */
        this._value = null;
        /**
         * The `Radio` within the `RadioGroup` that is selected.
         */
        this._selected = null;
        /**
         * The name attribute associated with the `RadioGroup`.
         */
        this._name = "radio-group-" + RadioGroup.radioGroupCount++;
        /**
         * Needed to properly implement ControlValueAccessor.
         */
        this.onTouched = function () { };
        /**
         * Method set in registerOnChange to propagate changes back to the form.
         */
        this.propagateChange = function (_) { };
    }
    Object.defineProperty(RadioGroup.prototype, "selected", {
        /**
         * Returns the `Radio` that is selected within the `RadioGroup`.
         */
        get: function () {
            return this._selected;
        },
        /**
         * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
         */
        set: function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this.checkSelectedRadio();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "value", {
        /**
         * Returns the value/state of the selected `Radio` within the `RadioGroup`.
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value/state of the selected `Radio` within the `RadioGroup` to the passed in value.
         */
        set: function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
                this.updateSelectedRadioFromValue();
                this.checkSelectedRadio();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "name", {
        /**
         * Returns the associated name of the `RadioGroup`.
         */
        get: function () {
            return this._name;
        },
        /**
         * Replaces the name associated with the `RadioGroup` with the provided parameter.
         */
        set: function (name) {
            this._name = name;
            this.updateRadioNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "skeleton", {
        /**
         * Returns the skeleton value in the `RadioGroup` if there is one.
         */
        get: function () {
            return this._skeleton;
        },
        /**
         * Sets the skeleton value for all `Radio` to the skeleton value of `RadioGroup`.
         */
        set: function (value) {
            this._skeleton = value;
            this.updateChildren();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the selected `Radio` to be checked (selected).
     */
    RadioGroup.prototype.checkSelectedRadio = function () {
        if (this.selected && !this._selected.checked) {
            this.selected.checked = true;
        }
    };
    /**
     * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
     */
    RadioGroup.prototype.updateSelectedRadioFromValue = function () {
        var _this = this;
        var alreadySelected = this._selected != null && this._selected.value === this._value;
        if (this.radios && !alreadySelected) {
            this._selected = null;
            this.radios.forEach(function (radio) {
                if (radio.checked) {
                    _this._selected = radio;
                }
            });
        }
    };
    /**
     * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
     */
    RadioGroup.prototype.emitChangeEvent = function (event) {
        this.change.emit(event);
        this.propagateChange(event.value);
        this.onTouched();
    };
    /**
     * Synchronizes the names of the radio items with the name of the `RadioGroup`.
     */
    RadioGroup.prototype.updateRadioNames = function () {
        var _this = this;
        if (this.radios) {
            setTimeout(function () {
                _this.radios.forEach(function (radio) { return radio.name = _this.name; });
            });
        }
    };
    /**
     * Updates the value of the `RadioGroup` using the provided parameter.
     */
    RadioGroup.prototype.writeValue = function (value) {
        this.value = value;
    };
    RadioGroup.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.radios.changes.subscribe(function () {
            _this.updateRadioNames();
            _this.updateRadioChangeHandler();
        });
        this.updateChildren();
        this.updateRadioChangeHandler();
    };
    RadioGroup.prototype.ngAfterViewInit = function () {
        this.updateRadioNames();
    };
    /**
     * Used to set method to propagate changes back to the form.
     */
    RadioGroup.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    RadioGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioGroup.prototype.updateChildren = function () {
        var _this = this;
        if (this.radios) {
            this.radios.forEach(function (child) { return child.skeleton = _this.skeleton; });
        }
    };
    RadioGroup.prototype.updateRadioChangeHandler = function () {
        var _this = this;
        this.radios.forEach(function (radio) {
            radio.registerRadioChangeHandler(function (event) {
                // update selected and value from the event
                _this._selected = event.source;
                _this._value = event.value;
                // bubble the event
                _this.emitChangeEvent(event);
            });
        });
    };
    /**
     * Used for creating the `RadioGroup` 'name' property dynamically.
     */
    RadioGroup.radioGroupCount = 0;
    RadioGroup.decorators = [
        { type: Component, args: [{
                    selector: "ibm-radio-group",
                    template: "\n\t\t<div class=\"bx--radio-button-group\" role=\"radiogroup\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: RadioGroup,
                            multi: true
                        }
                    ]
                },] },
    ];
    RadioGroup.propDecorators = {
        change: [{ type: Output }],
        radios: [{ type: ContentChildren, args: [forwardRef(function () { return Radio; }),] }],
        selected: [{ type: Input }],
        value: [{ type: Input }],
        name: [{ type: Input }],
        disabled: [{ type: Input }],
        skeleton: [{ type: Input }],
        radioButtonGroupClass: [{ type: HostBinding, args: ["class.bx--form-item",] }]
    };
    return RadioGroup;
}());
export { RadioGroup };
//# sourceMappingURL=radio-group.component.js.map