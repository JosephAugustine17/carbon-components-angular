/*!
 *
 * carbon-angular v0.0.0 | sidenav-header.component.js
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


import { Component, Input } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
var SideNavHeader = /** @class */ (function () {
    function SideNavHeader(i18n) {
        this.i18n = i18n;
        this.switcherId = "sidenav-switcher";
    }
    SideNavHeader.decorators = [
        { type: Component, args: [{
                    selector: "ibm-sidenav-header",
                    template: "\n\t\t<header class=\"bx--side-nav__header\">\n\t\t\t<div class=\"bx--side-nav__icon\">\n\t\t\t\t<ng-content select=\"[icon]\"></ng-content>\n\t\t\t</div>\n\t\t\t<div class=\"bx--side-nav__details\">\n\t\t\t\t<h2 class=\"bx--side-nav__title\" [title]=\"title\">{{title}}</h2>\n\t\t\t\t<div class=\"bx--side-nav__switcher\">\n\t\t\t\t\t<label class=\"bx--assistive-text\" [for]=\"switcherId\">\n\t\t\t\t\t\t{{i18n.get('UI_SHELL.SIDE_NAV.SWITCHER') | async}}\n\t\t\t\t\t</label>\n\t\t\t\t\t<select [id]=\"switcherId\" class=\"bx--side-nav__select\">\n\t\t\t\t\t\t<option class=\"bx--side-nav__option\" disabled=\"\" value=\"\" selected=\"\" hidden=\"\">\n\t\t\t\t\t\t\t{{i18n.get('UI_SHELL.SIDE_NAV.SWITCHER') | async}}\n\t\t\t\t\t\t</option>\n\t\t\t\t\t\t<option\n\t\t\t\t\t\t\t*ngFor=\"let option of options\"\n\t\t\t\t\t\t\tclass=\"bx--side-nav__option\"\n\t\t\t\t\t\t\t[value]=\"(option.value ? option.value : option.content)\">\n\t\t\t\t\t\t\t{{option.content}}\n\t\t\t\t\t\t</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<div class=\"bx--side-nav__switcher-chevron\">\n\t\t\t\t\t\t<svg\n\t\t\t\t\t\t\tfocusable=\"false\"\n\t\t\t\t\t\t\tpreserveAspectRatio=\"xMidYMid meet\"\n\t\t\t\t\t\t\tstyle=\"will-change: transform;\"\n\t\t\t\t\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\t\t\t\t\twidth=\"20\"\n\t\t\t\t\t\t\theight=\"20\"\n\t\t\t\t\t\t\tviewBox=\"0 0 32 32\"\n\t\t\t\t\t\t\taria-hidden=\"true\">\n\t\t\t\t\t\t\t<path d=\"M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z\"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t"
                },] },
    ];
    /** @nocollapse */
    SideNavHeader.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    SideNavHeader.propDecorators = {
        title: [{ type: Input }],
        options: [{ type: Input }]
    };
    return SideNavHeader;
}());
export { SideNavHeader };
//# sourceMappingURL=sidenav-header.component.js.map