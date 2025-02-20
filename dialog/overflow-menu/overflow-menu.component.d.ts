/*!
 *
 * carbon-angular v0.0.0 | overflow-menu.component.d.ts
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


import { ElementRef } from "@angular/core";
import { I18n } from "./../../i18n/i18n.module";
import { OverflowMenuDirective } from "./overflow-menu.directive";
/**
 * The OverFlow menu component encapsulates the OverFlowMenu directive, and the menu iconography into one convienent component
 *
 * html:
 * ```
 * <ibm-overflow-menu>
 *	<ibm-overflow-menu-option>Option 1</ibm-overflow-menu-option>
 *	<ibm-overflow-menu-option>Option 2</ibm-overflow-menu-option>
 * </ibm-overflow-menu>
 * ```
 */
export declare class OverflowMenu {
    protected elementRef: ElementRef;
    protected i18n: I18n;
    buttonLabel: any;
    flip: boolean;
    overflowMenuDirective: OverflowMenuDirective;
    open: boolean;
    constructor(elementRef: ElementRef, i18n: I18n);
}
