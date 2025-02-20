/*!
 *
 * carbon-angular v0.0.0 | overflow-menu-option.component.js
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


import { HostBinding, Component, Input, ElementRef, Output, EventEmitter } from "@angular/core";
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
var OverflowMenuOption = /** @class */ (function () {
    function OverflowMenuOption(elementRef) {
        this.elementRef = elementRef;
        this.optionClass = "bx--overflow-menu-options__option";
        this.role = "presentation";
        /**
         * toggles between `normal` and `danger` states
         */
        this.type = "normal";
        /**
         * disable/enable interactions
         */
        this.disabled = false;
        this.selected = new EventEmitter();
        this.tabIndex = -1;
        // note: title must be a real attribute (i.e. not a getter) as of Angular@6 due to
        // change after checked errors
        this.title = null;
    }
    Object.defineProperty(OverflowMenuOption.prototype, "isDanger", {
        get: function () {
            return this.type === "danger";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverflowMenuOption.prototype, "isDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    OverflowMenuOption.prototype.onClick = function (event) {
        this.selected.emit();
    };
    OverflowMenuOption.prototype.ngAfterViewInit = function () {
        var button = this.elementRef.nativeElement.querySelector("button, a");
        if (button.scrollWidth > button.offsetWidth) {
            this.title = button.textContent;
        }
    };
    OverflowMenuOption.decorators = [
        { type: Component, args: [{
                    selector: "ibm-overflow-menu-option",
                    template: "\n\t\t<button\n\t\t\t*ngIf=\"!href\"\n\t\t\tclass=\"bx--overflow-menu-options__btn\"\n\t\t\trole=\"menuitem\"\n\t\t\t[tabindex]=\"tabIndex\"\n\t\t\t(focus)=\"tabIndex = 0\"\n\t\t\t(blur)=\"tabIndex = -1\"\n\t\t\t(click)=\"onClick($event)\"\n\t\t\t[disabled]=\"disabled\"\n\t\t\t[attr.title]=\"title\">\n\t\t\t<ng-container *ngTemplateOutlet=\"tempOutlet\"></ng-container>\n\t\t</button>\n\n\t\t<a\n\t\t\t*ngIf=\"href\"\n\t\t\tclass=\"bx--overflow-menu-options__btn\"\n\t\t\trole=\"menuitem\"\n\t\t\t[tabindex]=\"tabIndex\"\n\t\t\t(focus)=\"tabIndex = 0\"\n\t\t\t(blur)=\"tabIndex = -1\"\n\t\t\t(click)=\"onClick($event)\"\n\t\t\t[attr.disabled]=\"disabled\"\n\t\t\t[href]=\"href\"\n\t\t\t[attr.title]=\"title\">\n\t\t\t<ng-container *ngTemplateOutlet=\"tempOutlet\"></ng-container>\n\t\t</a>\n\n\t\t<ng-template #tempOutlet>\n\t\t\t<ng-content></ng-content>\n\t\t</ng-template>\n\t"
                },] },
    ];
    /** @nocollapse */
    OverflowMenuOption.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OverflowMenuOption.propDecorators = {
        optionClass: [{ type: HostBinding, args: ["class",] }],
        role: [{ type: HostBinding, args: ["attr.role",] }],
        isDanger: [{ type: HostBinding, args: ["class.bx--overflow-menu-options__option--danger",] }],
        isDisabled: [{ type: HostBinding, args: ["class.bx--overflow-menu-options__option--disabled",] }],
        type: [{ type: Input }],
        disabled: [{ type: Input }],
        href: [{ type: Input }],
        selected: [{ type: Output }]
    };
    return OverflowMenuOption;
}());
export { OverflowMenuOption };
//# sourceMappingURL=overflow-menu-option.component.js.map