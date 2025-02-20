/*!
 *
 * carbon-angular v0.0.0 | ellipsis-tooltip.directive.js
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


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Directive } from "@angular/core";
import { TooltipDirective } from "./tooltip.directive";
import { DialogService } from "./../dialog.service";
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
var EllipsisTooltip = /** @class */ (function (_super) {
    __extends(EllipsisTooltip, _super);
    function EllipsisTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Toggles tooltip in view if text is truncated.
     * @returns null
     * @memberof EllipsisTooltip
     */
    EllipsisTooltip.prototype.toggle = function () {
        if (this.elementRef.nativeElement.scrollWidth <= this.elementRef.nativeElement.offsetWidth) {
            return;
        }
        this.dialogConfig.content = this.elementRef.nativeElement.innerText;
        _super.prototype.toggle.call(this);
    };
    EllipsisTooltip.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmEllipsisTooltip]",
                    providers: [
                        DialogService
                    ]
                },] },
    ];
    return EllipsisTooltip;
}(TooltipDirective));
export { EllipsisTooltip };
//# sourceMappingURL=ellipsis-tooltip.directive.js.map