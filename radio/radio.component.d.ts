/*!
 *
 * carbon-angular v0.0.0 | radio.component.d.ts
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


import { EventEmitter } from "@angular/core";
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
export declare class Radio {
    /**
     * Used to dynamically create unique ids for the `Radio`.
     */
    static radioCount: number;
    checked: boolean;
    name: string;
    disabled: boolean;
    ariaLabelledby: string;
    /**
     * Sets the HTML required attribute
     */
    required: boolean;
    /**
     * The value of the `Radio`.
     */
    value: string;
    /**
     * Set to `true` for a loading table.
     */
    skeleton: boolean;
    /**
     * The id for the `Radio`.
     */
    id: string;
    /**
     * emits when the state of the radio changes
     */
    change: EventEmitter<RadioChange>;
    /**
     * Binds 'radio' value to the role attribute for `Radio`.
     */
    role: string;
    protected _labelledby: string;
    /**
     * Handler provided by the `RadioGroup` to bubble events up
     */
    radioChangeHandler: (event: RadioChange) => void;
    /**
     * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
     * Emits the changes of both the `RadioGroup` and `Radio`.
     */
    onChange(event: Event): void;
    /**
     * Method called by `RadioGroup` with a callback function to bubble `RadioChange` events
     * @param fn callback that expects a `RadioChange` as an argument
     */
    registerRadioChangeHandler(fn: (event: RadioChange) => void): void;
}
