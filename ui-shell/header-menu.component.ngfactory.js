/*!
 *
 * carbon-angular v0.0.0 | header-menu.component.ngfactory.js
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


/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./header-menu.component";
var styles_HeaderMenu = [];
var RenderType_HeaderMenu = i0.ɵcrt({ encapsulation: 2, styles: styles_HeaderMenu, data: {} });
export { RenderType_HeaderMenu as RenderType_HeaderMenu };
export function View_HeaderMenu_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "li", [["class", "bx--header__submenu"], ["style", "height: 100%"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "a", [["aria-haspopup", "true"], ["class", "bx--header__menu-item bx--header__menu-title"], ["href", "javascript:void(0)"], ["role", "menuitem"], ["tabindex", "0"]], [[1, "aria-expanded", 0]], null, null, null, null)), (_l()(), i0.ɵted(2, null, [" ", " "])), (_l()(), i0.ɵeld(3, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["class", "bx--header__menu-arrow"], ["height", "7"], ["width", "12"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 0, ":svg:path", [["d", "M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 1, "ul", [["class", "bx--header__menu"], ["role", "menu"]], [[1, "aria-label", 0]], null, null, null, null)), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.expanded; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.title; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.title; _ck(_v, 5, 0, currVal_2); }); }
export function View_HeaderMenu_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-header-menu", [], null, [[null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; if (("mouseover" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onMouseOver() !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onMouseOut() !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_HeaderMenu_0, RenderType_HeaderMenu)), i0.ɵdid(1, 49152, null, 0, i1.HeaderMenu, [], null, null)], null, null); }
var HeaderMenuNgFactory = i0.ɵccf("ibm-header-menu", i1.HeaderMenu, View_HeaderMenu_Host_0, { title: "title" }, {}, ["*"]);
export { HeaderMenuNgFactory as HeaderMenuNgFactory };
//# sourceMappingURL=header-menu.component.ngfactory.js.map