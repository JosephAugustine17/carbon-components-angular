/*!
 *
 * carbon-angular v0.0.0 | overflow-menu-option.component.d.ts
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


import { ElementRef, EventEmitter, AfterViewInit } from "@angular/core";
/**
 * `OverflowMenuOption` represents a single option in an overflow menu
 *
 * Presently it has three possible states - normal, disabled, and danger:
 * ```
 * <ibm-overflow-menu-option>Simple option</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option disabled="true">Disabled</ibm-overflow-menu-option>
 * <ibm-overflow-menu-option type="danger">Danger option</ibm-overflow-menu-option>
 * ```
 *
 * For content that expands beyond the overflow menu `OverflowMenuOption` automatically adds a title attribute.
 */
export declare class OverflowMenuOption implements AfterViewInit {
    protected elementRef: ElementRef;
    optionClass: string;
    role: string;
    readonly isDanger: Boolean;
    readonly isDisabled: Boolean;
    /**
     * toggles between `normal` and `danger` states
     */
    type: "normal" | "danger";
    /**
     * disable/enable interactions
     */
    disabled: boolean;
    href: string;
    selected: EventEmitter<any>;
    tabIndex: number;
    title: any;
    constructor(elementRef: ElementRef);
    onClick(event: any): void;
    ngAfterViewInit(): void;
}
