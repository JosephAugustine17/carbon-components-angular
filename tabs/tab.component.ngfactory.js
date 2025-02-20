/*!
 *
 * carbon-angular v0.0.0 | tab.component.ngfactory.js
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
import * as i2 from "./tab.component";
var styles_Tab = [];
var RenderType_Tab = i0.ɵcrt({ encapsulation: 2, styles: styles_Tab, data: {} });
export { RenderType_Tab as RenderType_Tab };
function View_Tab_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["role", "tabpanel"]], [[8, "tabIndex", 0], [1, "aria-labelledby", 0]], null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(2, { "display": 0 }), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, (_co.active ? null : "none")); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tabIndex; var currVal_1 = (_co.id + "-header"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
export function View_Tab_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tab_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shouldRender(); _ck(_v, 1, 0, currVal_0); }, null); }
export function View_Tab_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-tab", [], [[1, "id", 0]], null, null, View_Tab_0, RenderType_Tab)), i0.ɵdid(1, 114688, null, 0, i2.Tab, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).attrClass; _ck(_v, 0, 0, currVal_0); }); }
var TabNgFactory = i0.ɵccf("ibm-tab", i2.Tab, View_Tab_Host_0, { heading: "heading", context: "context", active: "active", disabled: "disabled", tabIndex: "tabIndex", id: "id", cacheActive: "cacheActive" }, { selected: "selected" }, ["*"]);
export { TabNgFactory as TabNgFactory };
//# sourceMappingURL=tab.component.ngfactory.js.map