/*!
 *
 * carbon-angular v0.0.0 | expandable-tile.component.d.ts
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


import { ElementRef, AfterContentInit } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
export declare class ExpandableTile implements AfterContentInit {
    protected i18n: I18n;
    protected elementRef: ElementRef;
    expanded: boolean;
    /**
     * Expects an object that contains some or all of:
     * ```
     * {
     *		"EXPAND": "Expand",
     *		"COLLAPSE": "Collapse",
     * }
     * ```
     */
    translations: any;
    tileMaxHeight: number;
    element: any;
    expand: any;
    collapse: any;
    constructor(i18n: I18n, elementRef: ElementRef);
    ngAfterContentInit(): void;
    readonly expandedHeight: number;
    updateMaxHeight(): void;
    onClick(): void;
}
