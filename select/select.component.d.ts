/*!
 *
 * carbon-angular v0.0.0 | select.component.d.ts
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


import { ElementRef, EventEmitter } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
/**
 * `ibm-select` provides a styled `select` component.
 *
 * Example:
 *
 * ```
 * <ibm-select [(ngModel)]="model">
 * 	<option value="default" disabled selected hidden>Choose an option</option>
 * 	<option value="option1">Option 1</option>
 *	<option value="option2">Option 2</option>
 * 	<option value="option3">Option 3</option>
 * </ibm-select>
 *	```

 */
export declare class Select implements ControlValueAccessor {
    /**
     * Tracks the total number of selects instantiated. Used to generate unique IDs
     */
    static selectCount: number;
    /**
     * `inline` or `default` select displays
     */
    display: "inline" | "default";
    /**
     * Label for the select. Appears above the input.
     */
    label: string;
    /**
     * Optional helper text that appears under he label.
     */
    helperText: string;
    /**
     * Sets the invalid text.
     */
    invalidText: string;
    /**
     * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
     */
    id: string;
    /**
     * Set to true to disable component.
     */
    disabled: boolean;
    /**
     * Set to true for a loading select.
     */
    skeleton: boolean;
    /**
     * Set to `true` for an invalid select component.
     */
    invalid: boolean;
    /**
     * `light` or `dark` select theme
     */
    theme: "light" | "dark";
    /**
     * emits the selected options `value`
     */
    selected: EventEmitter<{}>;
    select: ElementRef;
    value: any;
    /**
     * Receives a value from the model.
     */
    writeValue(obj: any): void;
    /**
     * Registers a listener that notifies the model when the control updates
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a listener that notifies the model when the control is blurred
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the disabled state through the model
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * Handles the change event from the `select`.
     * Sends events to the change handler and emits a `selected` event.
     */
    onChange(event: any): void;
    /**
     * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
     */
    protected onChangeHandler: (_: any) => void;
    protected onTouchedHandler: () => void;
    /**
     * Listens for the host blurring, and notifies the model
     */
    protected blur(): void;
}
