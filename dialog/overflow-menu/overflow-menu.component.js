/*!
 *
 * carbon-angular v0.0.0 | overflow-menu.component.js
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


import { Component, ElementRef, Input, ViewEncapsulation, ContentChild } from "@angular/core";
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
var OverflowMenu = /** @class */ (function () {
    function OverflowMenu(elementRef, i18n) {
        this.elementRef = elementRef;
        this.i18n = i18n;
        this.buttonLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
        this.flip = false;
        this.open = false;
    }
    OverflowMenu.decorators = [
        { type: Component, args: [{
                    selector: "ibm-overflow-menu",
                    template: "\n\t\t<div\n\t\t\t[ibmOverflowMenu]=\"options\"\n\t\t\t[ngClass]=\"{'bx--overflow-menu--open': open}\"\n\t\t\t[attr.aria-label]=\"buttonLabel\"\n\t\t\t[flip]=\"flip\"\n\t\t\t(onOpen)=\"open = true\"\n\t\t\t(onClose)=\"open = false\"\n\t\t\trole=\"button\"\n\t\t\taria-haspopup=\"true\"\n\t\t\tclass=\"bx--overflow-menu\"\n\t\t\tplacement=\"bottom\"\n\t\t\ttabindex=\"0\">\n\t\t\t<svg focusable=\"false\" class=\"bx--overflow-menu__icon\" width=\"3\" height=\"15\" viewBox=\"0 0 3 15\">\n\t\t\t\t<g fill-rule=\"evenodd\">\n\t\t\t\t\t<circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\" />\n\t\t\t\t\t<circle cx=\"1.5\" cy=\"7.5\" r=\"1.5\" />\n\t\t\t\t\t<circle cx=\"1.5\" cy=\"13.5\" r=\"1.5\" />\n\t\t\t\t</g>\n\t\t\t</svg>\n\t\t</div>\n\t\t<ng-template #options>\n\t\t\t<ng-content></ng-content>\n\t\t</ng-template>\n\t",
                    styles: ["\n\t\t.bx--overflow-menu--open {\n\t\t\topacity: 1\n\t\t}\n\n\t\t/*\n\t\tRotate the overflow menu container as well as the icon, since\n\t\twe calculate our menu position based on the container, not the icon.\n\t\t*/\n\t\t.bx--data-table-v2 .bx--overflow-menu {\n\t\t\ttransform: rotate(90deg);\n\t\t}\n\n\t\t.bx--data-table-v2 .bx--overflow-menu__icon {\n\t\t\ttransform: rotate(180deg);\n\t\t}\n\t"],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    OverflowMenu.ctorParameters = function () { return [
        { type: ElementRef },
        { type: I18n }
    ]; };
    OverflowMenu.propDecorators = {
        buttonLabel: [{ type: Input }],
        flip: [{ type: Input }],
        overflowMenuDirective: [{ type: ContentChild, args: [OverflowMenuDirective,] }]
    };
    return OverflowMenu;
}());
export { OverflowMenu };
//# sourceMappingURL=overflow-menu.component.js.map