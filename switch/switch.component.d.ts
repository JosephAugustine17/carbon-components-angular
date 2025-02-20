/*!
 *
 * carbon-angular v0.0.0 | switch.component.d.ts
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


import { Checkbox } from "../checkbox/checkbox.component";
import { ChangeDetectorRef, EventEmitter } from "@angular/core";
/**
 * Deprecated in favour of `ToggleState` (to be removed in v3.0).
 * Defines the set of states for a switch component.
 * @deprecated
 */
export declare enum SwitchState {
    Init = 0,
    Indeterminate = 1,
    Checked = 2,
    Unchecked = 3
}
/**
 * Deprecated in favour of `ToggleChange` (to be removed in v3.0).
 * Used to emit changes performed on switch components.
 * @deprecated
 */
export declare class SwitchChange {
    /**
     * Contains the `Switch` that has been changed.
     * @type {Switch}
     * @memberof SwitchChange
     */
    source: Switch;
    /**
     * The state of the `Switch` encompassed in the `SwitchChange` class.
     * @type {boolean}
     * @memberof SwitchChange
     */
    checked: boolean;
}
/**
 * Deprecated in favour of `Toggle` (to be removed in v3.0).
 * ```html
 * <ibm-switch [(ngModel)]="switchState">Switch</ibm-switch>
 * ```
 * @deprecated
 */
export declare class Switch extends Checkbox {
    protected changeDetectorRef: ChangeDetectorRef;
    /**
     * Variable used for creating unique ids for switch components.
     */
    static switchCount: number;
    /**
     * Size of the switch component.
     */
    size: "sm" | "md";
    /**
     * The unique id allocated to the `Switch`.
     */
    id: string;
    /**
     * Emits event notifying other classes when a change in state occurs on a switch after a
     * click.
     */
    change: EventEmitter<SwitchChange>;
    /**
     * Creates an instance of Switch.
     */
    constructor(changeDetectorRef: ChangeDetectorRef);
    /**
     * Creates instance of `SwitchChange` used to propagate the change event.
     * @memberof To
     */
    emitChangeEvent(): void;
}
