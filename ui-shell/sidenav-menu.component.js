/*!
 *
 * carbon-angular v0.0.0 | sidenav-menu.component.js
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


import { Component, ContentChildren, Input, QueryList } from "@angular/core";
import { SideNavItem } from "./ui-shell.module";
var SideNavMenu = /** @class */ (function () {
    function SideNavMenu() {
        this.expanded = false;
    }
    SideNavMenu.prototype.ngAfterContentInit = function () {
        this.sidenavItems.forEach(function (item) {
            item.isSubMenu = true;
        });
    };
    SideNavMenu.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    SideNavMenu.decorators = [
        { type: Component, args: [{
                    selector: "ibm-sidenav-menu",
                    template: "\n\t\t<li class=\"bx--side-nav__item\">\n\t\t\t<button\n\t\t\t\t(click)=\"toggle()\"\n\t\t\t\tclass=\"bx--side-nav__submenu\"\n\t\t\t\taria-haspopup=\"true\"\n\t\t\t\t[attr.aria-expanded]=\"expanded\"\n\t\t\t\ttype=\"button\">\n\t\t\t\t<div class=\"bx--side-nav__icon\">\n\t\t\t\t\t<ng-content select=\"[icon]\"></ng-content>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"bx--side-nav__submenu-title\">{{title}}</span>\n\t\t\t\t<div class=\"bx--side-nav__icon bx--side-nav__icon--small bx--side-nav__submenu-chevron\">\n\t\t\t\t\t<svg\n\t\t\t\t\t\tfocusable=\"false\"\n\t\t\t\t\t\tpreserveAspectRatio=\"xMidYMid meet\"\n\t\t\t\t\t\tstyle=\"will-change: transform;\"\n\t\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\t\t\t\twidth=\"20\"\n\t\t\t\t\t\theight=\"20\"\n\t\t\t\t\t\tviewBox=\"0 0 32 32\"\n\t\t\t\t\t\taria-hidden=\"true\">\n\t\t\t\t\t\t<path d=\"M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z\"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t\t<ul class=\"bx--side-nav__menu\" role=\"menu\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</ul>\n\t\t</li>\n\t"
                },] },
    ];
    SideNavMenu.propDecorators = {
        title: [{ type: Input }],
        sidenavItems: [{ type: ContentChildren, args: [SideNavItem,] }],
        expanded: [{ type: Input }]
    };
    return SideNavMenu;
}());
export { SideNavMenu };
//# sourceMappingURL=sidenav-menu.component.js.map