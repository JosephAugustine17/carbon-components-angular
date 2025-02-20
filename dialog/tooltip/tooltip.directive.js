/*!
 *
 * carbon-angular v0.0.0 | tooltip.directive.js
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
import { Directive, Input, ElementRef, ViewContainerRef, HostBinding } from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { Tooltip } from "./tooltip.component";
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
var TooltipDirective = /** @class */ (function (_super) {
    __extends(TooltipDirective, _super);
    /**
     * Creates an instance of `TooltipDirective`.
     */
    function TooltipDirective(elementRef, viewContainerRef, dialogService) {
        var _this = _super.call(this, elementRef, viewContainerRef, dialogService) || this;
        _this.elementRef = elementRef;
        _this.viewContainerRef = viewContainerRef;
        _this.dialogService = dialogService;
        /**
         * Set tooltip type to reflect 'warning' or 'error' styles.
         */
        // tslint:disable-next-line:no-input-rename
        _this.tooltipType = "";
        _this.tabIndex = 0;
        _this.className = true;
        dialogService.create(Tooltip);
        return _this;
    }
    Object.defineProperty(TooltipDirective.prototype, "descriptorId", {
        get: function () {
            return this.expanded ? this.dialogConfig.compID : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Extends the `Dialog` component's data structure with tooltip properties.
     */
    TooltipDirective.prototype.onDialogInit = function () {
        this.dialogConfig.content = this.ibmTooltip;
        this.dialogConfig.type = this.tooltipType;
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmTooltip]",
                    exportAs: "ibmTooltip",
                    providers: [
                        DialogService
                    ]
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: DialogService }
    ]; };
    TooltipDirective.propDecorators = {
        ibmTooltip: [{ type: Input }],
        tooltipType: [{ type: Input, args: ["tooltip-type",] }],
        tabIndex: [{ type: HostBinding, args: ["tabindex",] }],
        className: [{ type: HostBinding, args: ["class.bx--tooltip__trigger",] }],
        descriptorId: [{ type: HostBinding, args: ["attr.aria-describedby",] }]
    };
    return TooltipDirective;
}(DialogDirective));
export { TooltipDirective };
//# sourceMappingURL=tooltip.directive.js.map