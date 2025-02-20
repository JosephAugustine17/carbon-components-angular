/*!
 *
 * carbon-angular v0.0.0 | tooltip.directive.d.ts
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


import { TemplateRef, ElementRef, ViewContainerRef } from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { DialogService } from "./../dialog.service";
/**
 * Directive for extending `Dialog` to create tooltips.
 *
 * class: TooltipDirective (extends PopoverDirective)
 *
 *
 * selector: `nTooltip`
 *
 *
 * ```html
 * <button nTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip Right</button>
 * <button nTooltip="I am a tooltip" type="warning">Tooltip Top warning on click</button>
 * ```
 *
 * @export
 * @class TooltipDirective
 * @extends {DialogDirective}
 */
export declare class TooltipDirective extends DialogDirective {
    protected elementRef: ElementRef;
    protected viewContainerRef: ViewContainerRef;
    protected dialogService: DialogService;
    /**
     * The string or template content to be exposed by the tooltip.
     */
    ibmTooltip: string | TemplateRef<any>;
    /**
     * Set tooltip type to reflect 'warning' or 'error' styles.
     */
    tooltipType: "warning" | "error" | "";
    tabIndex: number;
    className: boolean;
    readonly descriptorId: string;
    /**
     * Creates an instance of `TooltipDirective`.
     */
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, dialogService: DialogService);
    /**
     * Extends the `Dialog` component's data structure with tooltip properties.
     */
    onDialogInit(): void;
}
