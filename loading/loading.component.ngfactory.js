/*!
 *
 * carbon-angular v0.0.0 | loading.component.ngfactory.js
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
import * as i2 from "./loading.component";
import * as i3 from "../i18n/i18n.service";
var styles_Loading = [];
var RenderType_Loading = i0.ɵcrt({ encapsulation: 2, styles: styles_Loading, data: {} });
export { RenderType_Loading as RenderType_Loading };
export function View_Loading_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [["class", "bx--loading"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--loading--small": 0, "bx--loading--stop": 1, "bx--loading-overlay--stop": 2 }), (_l()(), i0.ɵeld(3, 0, null, null, 3, ":svg:svg", [["class", "bx--loading__svg"], ["viewBox", "-75 -75 150 150"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, ":svg:title", [], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, ["", ""])), (_l()(), i0.ɵeld(6, 0, null, null, 0, ":svg:circle", [["class", "bx--loading__stroke"], ["cx", "0"], ["cy", "0"], ["r", "37.5"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "bx--loading"; var currVal_1 = _ck(_v, 2, 0, (_co.size === "sm"), (!_co.isActive && !_co.overlay), (!_co.isActive && _co.overlay)); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.title; _ck(_v, 5, 0, currVal_2); }); }
export function View_Loading_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-loading", [], [[2, "bx--loading-overlay", null]], null, null, View_Loading_0, RenderType_Loading)), i0.ɵdid(1, 49152, null, 0, i2.Loading, [i3.I18n], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).overlay; _ck(_v, 0, 0, currVal_0); }); }
var LoadingNgFactory = i0.ɵccf("ibm-loading", i2.Loading, View_Loading_Host_0, { title: "title", isActive: "isActive", size: "size", overlay: "overlay" }, {}, []);
export { LoadingNgFactory as LoadingNgFactory };
//# sourceMappingURL=loading.component.ngfactory.js.map