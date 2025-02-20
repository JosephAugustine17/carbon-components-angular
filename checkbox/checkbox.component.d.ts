/*!
 *
 * carbon-angular v0.0.0 | checkbox.component.d.ts
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


import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
/**
 * Defines the set of states for a checkbox component.
 * @export
 * @enum {number}
 */
export declare enum CheckboxState {
    Init = 0,
    Indeterminate = 1,
    Checked = 2,
    Unchecked = 3
}
/**
 * Used to emit changes performed on checkbox components.
 * @export
 * @class CheckboxChange
 */
export declare class CheckboxChange {
    /**
     * Contains the `Checkbox` that has been changed.
     * @type {Checkbox}
     * @memberof CheckboxChange
     */
    source: Checkbox;
    /**
     * The state of the `Checkbox` encompassed in the `CheckboxChange` class.
     * @type {boolean}
     * @memberof CheckboxChange
     */
    checked: boolean;
}
/**
 * @export
 * @class Checkbox
 * @implements {ControlValueAccessor}
 * @implements {AfterViewInit}
 */
export declare class Checkbox implements ControlValueAccessor, AfterViewInit {
    protected changeDetectorRef: ChangeDetectorRef;
    /**
     * Variable used for creating unique ids for checkbox components.
     */
    static checkboxCount: number;
    /**
     * Size of the checkbox.
     */
    size: "sm" | "md";
    /**
     * Set to `true` for checkbox to be rendered with nested styles.
     */
    nested: boolean;
    /**
     * Set to `true` for checkbox to be rendered without any classes on the host element.
     */
    inline: boolean;
    /**
     * Set to `true` for a disabled checkbox.
     */
    disabled: boolean;
    /**
     * Set to `true` for a loading checkbox.
     */
    skeleton: boolean;
    /**
     * Sets the name attribute on the `input` element.
     */
    name: string;
    /**
     * The unique id for the checkbox component.
     */
    id: string;
    /**
     * Reflects the required attribute of the `input` element.
     */
    required: boolean;
    /**
     * Sets the value attribute on the `input` element.
     */
    value: string;
    /**
     * Used to set the `aria-label` attribute on the input element.
     */
    ariaLabel: string;
    /**
     * Used to set the `aria-labelledby` attribute on the input element.
     */
    ariaLabelledby: string;
    /**
     * Reflects whether the checkbox state is indeterminate.
     * @readonly
     */
    /**
    * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
    */
    indeterminate: boolean;
    /**
     * Returns value `true` if state is selected for the checkbox.
     * @readonly
     */
    /**
    * Updating the state of a checkbox to match the state of the parameter passed in.
    */
    checked: boolean;
    readonly checkboxWrapperClass: boolean;
    readonly formItemClass: boolean;
    /**
     * Emits event notifying other classes when a change in state occurs on a checkbox after a
     * click.
     */
    change: EventEmitter<CheckboxChange>;
    /**
     * Emits event notifying other classes when a change in state occurs specifically
     * on an indeterminate checkbox.
     */
    indeterminateChange: EventEmitter<boolean>;
    /**
     * Set to `true` if the input checkbox is selected (or checked).
     */
    _checked: boolean;
    /**
     * Set to `true` if the input checkbox is in state indeterminate.
     */
    _indeterminate: boolean;
    currentCheckboxState: CheckboxState;
    /**
     * Maintains a reference to the view DOM element of the `Checkbox`.
     */
    inputCheckbox: ElementRef;
    /**
     * Creates an instance of `Checkbox`.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof Checkbox
     */
    constructor(changeDetectorRef: ChangeDetectorRef);
    /**
     * Toggle the selected state of the checkbox.
     * @memberof Checkbox
     */
    toggle(): void;
    writeValue(value: any): void;
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {any} fn
     * @memberof Checkbox
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    registerOnTouched(fn: any): void;
    /**
     * Executes on the event of a change within `Checkbox` to block propagation.
     * @param {any} event
     * @memberof Checkbox
     */
    onChange(event: any): void;
    /**
     * Handles click events on the `Checkbox` and emits changes to other classes.
     * @param {any} event
     * @memberof Checkbox
     */
    onClick(event: any): void;
    /**
     * Called when checkbox is blurred. Needed to properly implement `ControlValueAccessor`.
     * @memberof Checkbox
     */
    onTouched: () => any;
    /**
     * Handles changes between checkbox states.
     * @param {CheckboxState} newState
     * @returns {null}
     * @memberof Checkbox
     */
    transitionCheckboxState(newState: CheckboxState): void;
    /**
     * Creates instance of `CheckboxChange` used to propagate the change event.
     * @memberof Checkbox
     */
    emitChangeEvent(): void;
    /**
     * Updates the checkbox if it is in the indeterminate state.
     * @memberof Checkbox
     */
    ngAfterViewInit(): void;
    /**
     * Method set in `registerOnChange` to propagate changes back to the form.
     * @memberof Checkbox
     */
    propagateChange: (_: any) => void;
}
