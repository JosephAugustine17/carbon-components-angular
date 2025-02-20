/*!
 *
 * carbon-angular v0.0.0 | header-menu.component.js
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


import { Component, Input, HostListener } from "@angular/core";
var HeaderMenu = /** @class */ (function () {
    function HeaderMenu() {
        this.expanded = false;
    }
    HeaderMenu.prototype.onMouseOver = function () {
        this.expanded = true;
    };
    HeaderMenu.prototype.onMouseOut = function () {
        this.expanded = false;
    };
    HeaderMenu.decorators = [
        { type: Component, args: [{
                    selector: "ibm-header-menu",
                    template: "\n\t\t<li\n\t\t\tclass=\"bx--header__submenu\"\n\t\t\tstyle=\"height: 100%\">\n\t\t\t<a\n\t\t\t\tclass=\"bx--header__menu-item bx--header__menu-title\"\n\t\t\t\thref=\"javascript:void(0)\"\n\t\t\t\trole=\"menuitem\"\n\t\t\t\ttabindex=\"0\"\n\t\t\t\taria-haspopup=\"true\"\n\t\t\t\t[attr.aria-expanded]=\"expanded\">\n\t\t\t\t{{title}}\n\t\t\t\t<svg class=\"bx--header__menu-arrow\" width=\"12\" height=\"7\" aria-hidden=\"true\">\n\t\t\t\t\t<path d=\"M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z\" />\n\t\t\t\t</svg>\n\t\t\t</a>\n\t\t\t<ul class=\"bx--header__menu\" role=\"menu\" [attr.aria-label]=\"title\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</ul>\n\t\t</li>\n\t"
                },] },
    ];
    HeaderMenu.propDecorators = {
        title: [{ type: Input }],
        onMouseOver: [{ type: HostListener, args: ["mouseover",] }],
        onMouseOut: [{ type: HostListener, args: ["mouseout",] }]
    };
    return HeaderMenu;
}());
export { HeaderMenu };
//# sourceMappingURL=header-menu.component.js.map