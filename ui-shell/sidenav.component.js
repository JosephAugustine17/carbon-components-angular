/*!
 *
 * carbon-angular v0.0.0 | sidenav.component.js
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


import { Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
var SideNav = /** @class */ (function () {
    function SideNav(i18n) {
        this.i18n = i18n;
        this.role = "complementary";
        this.hostClass = true;
        this.expanded = false;
    }
    SideNav.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    SideNav.decorators = [
        { type: Component, args: [{
                    selector: "ibm-sidenav",
                    template: "\n\t\t<nav\n\t\t\tclass=\"bx--side-nav__navigation\"\n\t\t\trole=\"navigation\"\n\t\t\t[attr.aria-label]=\"i18n.get('UI_SHELL.SIDE_NAV.LABEL')\">\n\t\t\t<ng-content select=\"ibm-sidenav-header\"></ng-content>\n\t\t\t<ul class=\"bx--side-nav__items\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</ul>\n\t\t\t<footer class=\"bx--side-nav__footer\">\n\t\t\t\t<button\n\t\t\t\t\tclass=\"bx--side-nav__toggle\"\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t[title]=\"(expanded ? i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_CLOSE') : i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_OPEN')) | async\"\n\t\t\t\t\t(click)=\"toggle()\">\n\t\t\t\t\t<div class=\"bx--side-nav__icon\">\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\t*ngIf=\"expanded\"\n\t\t\t\t\t\t\tfocusable=\"false\"\n\t\t\t\t\t\t\tpreserveAspectRatio=\"xMidYMid meet\"\n\t\t\t\t\t\t\tstyle=\"will-change: transform;\"\n\t\t\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\t\t\t\t\twidth=\"20\"\n\t\t\t\t\t\t\theight=\"20\"\n\t\t\t\t\t\t\tviewBox=\"0 0 32 32\"\n\t\t\t\t\t\t\taria-hidden=\"true\">\n\t\t\t\t\t\t\t<path d=\"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z\"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\t*ngIf=\"!expanded\"\n\t\t\t\t\t\t\tfocusable=\"false\"\n\t\t\t\t\t\t\tpreserveAspectRatio=\"xMidYMid meet\"\n\t\t\t\t\t\t\tstyle=\"will-change: transform;\"\n\t\t\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\t\t\t\t\twidth=\"20\"\n\t\t\t\t\t\t\theight=\"20\"\n\t\t\t\t\t\t\tviewBox=\"0 0 32 32\"\n\t\t\t\t\t\t\taria-hidden=\"true\">\n\t\t\t\t\t\t\t<path d=\"M22 16L12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z\"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"bx--assistive-text\">\n\t\t\t\t\t\t{{(expanded ? i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_CLOSE') : i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_OPEN')) | async}}\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t</footer>\n\t\t</nav>\n\t",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    SideNav.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    SideNav.propDecorators = {
        role: [{ type: HostBinding, args: ["attr.role",] }],
        hostClass: [{ type: HostBinding, args: ["class.bx--side-nav",] }],
        expanded: [{ type: HostBinding, args: ["class.bx--side-nav--expanded",] }, { type: Input }]
    };
    return SideNav;
}());
export { SideNav };
//# sourceMappingURL=sidenav.component.js.map