/*!
 *
 * carbon-angular v0.0.0 | ellipsis-tooltip.directive.d.ts
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


import { TooltipDirective } from "./tooltip.directive";
/**
 * A directive that creates a tooltip `Dialog` for exposing truncated text.
 *
 * class: EllipsisTooltip (extends PopoverDirective)
 *
 * selector: `nEllipsisTooltip`
 *
 * ```html
 * <div class="ellipsis" nEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long</div>
 * ```
 *
 * @export
 * @class EllipsisTooltip
 * @extends {TooltipDirective}
 */
export declare class EllipsisTooltip extends TooltipDirective {
    /**
     * Toggles tooltip in view if text is truncated.
     * @returns null
     * @memberof EllipsisTooltip
     */
    toggle(): void;
}
