/*!
 *
 * carbon-angular v0.0.0 | radio-group.component.d.ts
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


import { AfterContentInit, EventEmitter, QueryList, AfterViewInit } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { Radio } from "./radio.component";
/**
 * Used to emit changes performed on a `Radio`.
 * @export
 * @class RadioChange
 */
export declare class RadioChange {
    /**
     * Contains the `Radio` that has been changed.
     */
    source: Radio | null;
    /**
     * The value of the `Radio` encompassed in the `RadioChange` class.
     */
    value: string;
    constructor(source: Radio, value: string);
}
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
export declare class RadioGroup implements AfterContentInit, AfterViewInit, ControlValueAccessor {
    /**
     * Used for creating the `RadioGroup` 'name' property dynamically.
     */
    static radioGroupCount: number;
    /**
     * Emits event notifying other classes of a change using a `RadioChange` class.
     */
    change: EventEmitter<RadioChange>;
    /**
     * The `Radio` input items in the `RadioGroup`.
     */
    radios: QueryList<Radio>;
    /**
     * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
     */
    /**
    * Returns the `Radio` that is selected within the `RadioGroup`.
    */
    selected: Radio | null;
    /**
     * Sets the value/state of the selected `Radio` within the `RadioGroup` to the passed in value.
     */
    /**
    * Returns the value/state of the selected `Radio` within the `RadioGroup`.
    */
    value: any;
    /**
     * Replaces the name associated with the `RadioGroup` with the provided parameter.
     */
    /**
    * Returns the associated name of the `RadioGroup`.
    */
    name: string;
    /**
     * Set to true to disable the whole radio group
     */
    disabled: boolean;
    /**
     * Returns the skeleton value in the `RadioGroup` if there is one.
     */
    /**
    * Sets the skeleton value for all `Radio` to the skeleton value of `RadioGroup`.
    */
    skeleton: any;
    /**
     * Binds 'bx--form-item' value to the class for `RadioGroup`.
     */
    radioButtonGroupClass: boolean;
    /**
     * To track whether the `RadioGroup` has been initialized.
     */
    protected isInitialized: boolean;
    /**
     * Reflects whether or not the input is disabled and cannot be selected.
     */
    protected _disabled: boolean;
    /**
     * Reflects whether or not the dropdown is loading.
     */
    protected _skeleton: boolean;
    /**
     * The value of the selected option within the `RadioGroup`.
     */
    protected _value: any;
    /**
     * The `Radio` within the `RadioGroup` that is selected.
     */
    protected _selected: Radio;
    /**
     * The name attribute associated with the `RadioGroup`.
     */
    protected _name: string;
    /**
     * Updates the selected `Radio` to be checked (selected).
     */
    checkSelectedRadio(): void;
    /**
     * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
     */
    updateSelectedRadioFromValue(): void;
    /**
     * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
     */
    emitChangeEvent(event: RadioChange): void;
    /**
     * Synchronizes the names of the radio items with the name of the `RadioGroup`.
     */
    updateRadioNames(): void;
    /**
     * Updates the value of the `RadioGroup` using the provided parameter.
     */
    writeValue(value: any): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    /**
     * Used to set method to propagate changes back to the form.
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    registerOnTouched(fn: any): void;
    /**
     * Needed to properly implement ControlValueAccessor.
     */
    onTouched: () => any;
    /**
     * Method set in registerOnChange to propagate changes back to the form.
     */
    propagateChange: (_: any) => void;
    protected updateChildren(): void;
    protected updateRadioChangeHandler(): void;
}
