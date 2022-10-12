/*!
 *
 * carbon-angular v0.0.0 | sidenav.component.ngfactory.js
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
import * as i1 from "@angular/common";
import * as i2 from "./sidenav.component";
import * as i3 from "../i18n/i18n.service";
var styles_SideNav = [];
var RenderType_SideNav = i0.ɵcrt({ encapsulation: 2, styles: styles_SideNav, data: {} });
export { RenderType_SideNav as RenderType_SideNav };
function View_SideNav_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["focusable", "false"], ["height", "20"], ["preserveAspectRatio", "xMidYMid meet"], ["style", "will-change: transform;"], ["viewBox", "0 0 32 32"], ["width", "20"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, ":svg:path", [["d", "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z"]], null, null, null, null, null))], null, null); }
function View_SideNav_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["focusable", "false"], ["height", "20"], ["preserveAspectRatio", "xMidYMid meet"], ["style", "will-change: transform;"], ["viewBox", "0 0 32 32"], ["width", "20"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, ":svg:path", [["d", "M22 16L12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z"]], null, null, null, null, null))], null, null); }
export function View_SideNav_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 14, "nav", [["class", "bx--side-nav__navigation"], ["role", "navigation"]], [[1, "aria-label", 0]], null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(2, 0, null, null, 1, "ul", [["class", "bx--side-nav__items"]], null, null, null, null, null)), i0.ɵncd(null, 1), (_l()(), i0.ɵeld(4, 0, null, null, 10, "footer", [["class", "bx--side-nav__footer"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 9, "button", [["class", "bx--side-nav__toggle"], ["type", "button"]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(7, 0, null, null, 4, "div", [["class", "bx--side-nav__icon"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SideNav_1)), i0.ɵdid(9, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SideNav_2)), i0.ɵdid(11, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(12, 0, null, null, 2, "span", [["class", "bx--assistive-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(13, null, [" ", " "])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.expanded; _ck(_v, 9, 0, currVal_2); var currVal_3 = !_co.expanded; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i18n.get("UI_SHELL.SIDE_NAV.LABEL"); _ck(_v, 0, 0, currVal_0); var currVal_1 = i0.ɵunv(_v, 5, 0, i0.ɵnov(_v, 6).transform((_co.expanded ? _co.i18n.get("UI_SHELL.SIDE_NAV.TOGGLE_CLOSE") : _co.i18n.get("UI_SHELL.SIDE_NAV.TOGGLE_OPEN")))); _ck(_v, 5, 0, currVal_1); var currVal_4 = i0.ɵunv(_v, 13, 0, i0.ɵnov(_v, 14).transform((_co.expanded ? _co.i18n.get("UI_SHELL.SIDE_NAV.TOGGLE_CLOSE") : _co.i18n.get("UI_SHELL.SIDE_NAV.TOGGLE_OPEN")))); _ck(_v, 13, 0, currVal_4); }); }
export function View_SideNav_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-sidenav", [], [[1, "role", 0], [2, "bx--side-nav", null], [2, "bx--side-nav--expanded", null]], null, null, View_SideNav_0, RenderType_SideNav)), i0.ɵdid(1, 49152, null, 0, i2.SideNav, [i3.I18n], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).role; var currVal_1 = i0.ɵnov(_v, 1).hostClass; var currVal_2 = i0.ɵnov(_v, 1).expanded; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var SideNavNgFactory = i0.ɵccf("ibm-sidenav", i2.SideNav, View_SideNav_Host_0, { expanded: "expanded" }, {}, ["ibm-sidenav-header", "*"]);
export { SideNavNgFactory as SideNavNgFactory };
//# sourceMappingURL=sidenav.component.ngfactory.js.map