/*!
 *
 * carbon-angular v0.0.0 | checkbox.component.js
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


import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostBinding } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/**
 * Defines the set of states for a checkbox component.
 * @export
 * @enum {number}
 */
export var CheckboxState;
(function (CheckboxState) {
    CheckboxState[CheckboxState["Init"] = 0] = "Init";
    CheckboxState[CheckboxState["Indeterminate"] = 1] = "Indeterminate";
    CheckboxState[CheckboxState["Checked"] = 2] = "Checked";
    CheckboxState[CheckboxState["Unchecked"] = 3] = "Unchecked";
})(CheckboxState || (CheckboxState = {}));
/**
 * Used to emit changes performed on checkbox components.
 * @export
 * @class CheckboxChange
 */
var CheckboxChange = /** @class */ (function () {
    function CheckboxChange() {
    }
    return CheckboxChange;
}());
export { CheckboxChange };
/**
 * @export
 * @class Checkbox
 * @implements {ControlValueAccessor}
 * @implements {AfterViewInit}
 */
var Checkbox = /** @class */ (function () {
    /**
     * Creates an instance of `Checkbox`.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof Checkbox
     */
    function Checkbox(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Size of the checkbox.
         */
        this.size = "md";
        /**
         * Set to `true` for checkbox to be rendered without any classes on the host element.
         */
        this.inline = false;
        /**
         * Set to `true` for a disabled checkbox.
         */
        this.disabled = false;
        /**
         * Set to `true` for a loading checkbox.
         */
        this.skeleton = false;
        /**
         * The unique id for the checkbox component.
         */
        this.id = "checkbox-" + Checkbox.checkboxCount;
        /**
         * Used to set the `aria-label` attribute on the input element.
         */
        // tslint:disable-next-line:no-input-rename
        this.ariaLabel = "";
        /**
         * Emits event notifying other classes when a change in state occurs on a checkbox after a
         * click.
         */
        this.change = new EventEmitter();
        /**
         * Emits event notifying other classes when a change in state occurs specifically
         * on an indeterminate checkbox.
         */
        this.indeterminateChange = new EventEmitter();
        /**
         * Set to `true` if the input checkbox is selected (or checked).
         */
        this._checked = false;
        /**
         * Set to `true` if the input checkbox is in state indeterminate.
         */
        this._indeterminate = false;
        this.currentCheckboxState = CheckboxState.Init;
        /**
         * Called when checkbox is blurred. Needed to properly implement `ControlValueAccessor`.
         * @memberof Checkbox
         */
        this.onTouched = function () { };
        /**
         * Method set in `registerOnChange` to propagate changes back to the form.
         * @memberof Checkbox
         */
        this.propagateChange = function (_) { };
        Checkbox.checkboxCount++;
    }
    Object.defineProperty(Checkbox.prototype, "indeterminate", {
        /**
         * Reflects whether the checkbox state is indeterminate.
         * @readonly
         */
        get: function () {
            return this._indeterminate;
        },
        /**
         * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
         */
        set: function (indeterminate) {
            var changed = this._indeterminate !== indeterminate;
            this._indeterminate = indeterminate;
            if (changed) {
                this.transitionCheckboxState(CheckboxState.Indeterminate);
            }
            else {
                this.transitionCheckboxState(this.checked ? CheckboxState.Checked : CheckboxState.Unchecked);
            }
            this.indeterminateChange.emit(this._indeterminate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox.prototype, "checked", {
        /**
         * Returns value `true` if state is selected for the checkbox.
         * @readonly
         */
        get: function () {
            return this._checked;
        },
        /**
         * Updating the state of a checkbox to match the state of the parameter passed in.
         */
        set: function (checked) {
            var _this = this;
            if (checked !== this.checked) {
                if (this._indeterminate) {
                    Promise.resolve().then(function () {
                        _this._indeterminate = false;
                        _this.indeterminateChange.emit(_this._indeterminate);
                    });
                }
                this._checked = checked;
                this.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox.prototype, "checkboxWrapperClass", {
        get: function () {
            return !this.inline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox.prototype, "formItemClass", {
        get: function () {
            return !this.inline;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle the selected state of the checkbox.
     * @memberof Checkbox
     */
    Checkbox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    // this is the initial value set to the component
    Checkbox.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {any} fn
     * @memberof Checkbox
     */
    Checkbox.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    Checkbox.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Executes on the event of a change within `Checkbox` to block propagation.
     * @param {any} event
     * @memberof Checkbox
     */
    Checkbox.prototype.onChange = function (event) {
        event.stopPropagation();
    };
    /**
     * Handles click events on the `Checkbox` and emits changes to other classes.
     * @param {any} event
     * @memberof Checkbox
     */
    Checkbox.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.toggle();
            this.transitionCheckboxState(this._checked ? CheckboxState.Checked : CheckboxState.Unchecked);
            this.emitChangeEvent();
        }
    };
    /**
     * Handles changes between checkbox states.
     * @param {CheckboxState} newState
     * @returns {null}
     * @memberof Checkbox
     */
    Checkbox.prototype.transitionCheckboxState = function (newState) {
        var oldState = this.currentCheckboxState;
        // Indeterminate has to be set always if it's transitioned to
        // checked has to be set before indeterminate or it overrides
        // indeterminate's dash
        if (newState === CheckboxState.Indeterminate) {
            this.checked = false;
            this.inputCheckbox.nativeElement.indeterminate = true;
        }
        if (oldState === newState) {
            return;
        }
        this.currentCheckboxState = newState;
    };
    /**
     * Creates instance of `CheckboxChange` used to propagate the change event.
     * @memberof Checkbox
     */
    Checkbox.prototype.emitChangeEvent = function () {
        var event = new CheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this.propagateChange(this.checked);
        this.change.emit(event);
    };
    /**
     * Updates the checkbox if it is in the indeterminate state.
     * @memberof Checkbox
     */
    Checkbox.prototype.ngAfterViewInit = function () {
        if (this.indeterminate) {
            this.inputCheckbox.nativeElement.indeterminate = true;
            this.checked = false;
        }
    };
    /**
     * Variable used for creating unique ids for checkbox components.
     */
    Checkbox.checkboxCount = 0;
    Checkbox.decorators = [
        { type: Component, args: [{
                    selector: "ibm-checkbox",
                    template: "\n\t\t<input\n\t\t\t#inputCheckbox\n\t\t\tclass=\"bx--checkbox\"\n\t\t\ttype=\"checkbox\"\n\t\t\t[id]=\"id\"\n\t\t\t[value]=\"value\"\n\t\t\t[name]=\"name\"\n\t\t\t[required]=\"required\"\n\t\t\t[checked]=\"checked\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[indeterminate]=\"indeterminate\"\n\t\t\t[attr.aria-label]=\"ariaLabel\"\n\t\t\t[attr.aria-labelledby]=\"ariaLabelledby\"\n\t\t\t[attr.aria-checked]=\"(indeterminate ? 'mixed' : checked)\"\n\t\t\t(change)=\"onChange($event)\"\n\t\t\t(click)=\"onClick($event)\">\n\t\t<label\n\t\t\t[for]=\"id\"\n\t\t\tclass=\"bx--checkbox-label\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--skeleton' : skeleton\n\t\t\t}\">\n\t\t\t<ng-content></ng-content>\n\t\t</label>\n\t",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: Checkbox,
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    Checkbox.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    Checkbox.propDecorators = {
        size: [{ type: Input }],
        nested: [{ type: Input }],
        inline: [{ type: Input }],
        disabled: [{ type: Input }],
        skeleton: [{ type: Input }],
        name: [{ type: Input }],
        id: [{ type: Input }],
        required: [{ type: Input }],
        value: [{ type: Input }],
        ariaLabel: [{ type: Input, args: ["aria-label",] }],
        ariaLabelledby: [{ type: Input, args: ["aria-labelledby",] }],
        indeterminate: [{ type: Input }],
        checked: [{ type: Input }],
        checkboxWrapperClass: [{ type: HostBinding, args: ["class.bx--checkbox-wrapper",] }],
        formItemClass: [{ type: HostBinding, args: ["class.bx--form-item",] }],
        change: [{ type: Output }],
        indeterminateChange: [{ type: Output }],
        inputCheckbox: [{ type: ViewChild, args: ["inputCheckbox",] }]
    };
    return Checkbox;
}());
export { Checkbox };
//# sourceMappingURL=checkbox.component.js.map