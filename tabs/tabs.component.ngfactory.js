/*!
 *
 * carbon-angular v0.0.0 | tabs.component.ngfactory.js
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
import * as i1 from "./tab-headers.component.ngfactory";
import * as i2 from "./tab-headers.component";
import * as i3 from "@angular/common";
import * as i4 from "./tabs.component";
var styles_Tabs = [];
var RenderType_Tabs = i0.ɵcrt({ encapsulation: 2, styles: styles_Tabs, data: {} });
export { RenderType_Tabs as RenderType_Tabs };
function View_Tabs_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-tab-headers", [], null, [[null, "keydown"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).keyboardInput($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_TabHeaders_0, i1.RenderType_TabHeaders)), i0.ɵdid(1, 1097728, null, 1, i2.TabHeaders, [], { tabInput: [0, "tabInput"], cacheActive: [1, "cacheActive"], followFocus: [2, "followFocus"], skeleton: [3, "skeleton"] }, null), i0.ɵqud(603979776, 1, { tabQuery: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tabs; var currVal_1 = _co.cacheActive; var currVal_2 = _co.followFocus; var currVal_3 = _co.skeleton; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_Tabs_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-tab-headers", [], null, [[null, "keydown"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).keyboardInput($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_TabHeaders_0, i1.RenderType_TabHeaders)), i0.ɵdid(1, 1097728, null, 1, i2.TabHeaders, [], { tabInput: [0, "tabInput"], cacheActive: [1, "cacheActive"], skeleton: [2, "skeleton"] }, null), i0.ɵqud(603979776, 2, { tabQuery: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tabs; var currVal_1 = _co.cacheActive; var currVal_2 = _co.skeleton; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
export function View_Tabs_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tabs_1)), i0.ɵdid(1, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Tabs_2)), i0.ɵdid(4, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.hasTabHeaders() && (_co.position === "top")); _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.hasTabHeaders() && (_co.position === "bottom")); _ck(_v, 4, 0, currVal_1); }, null); }
export function View_Tabs_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "ibm-tabs", [], null, null, null, View_Tabs_0, RenderType_Tabs)), i0.ɵdid(1, 1097728, null, 2, i4.Tabs, [], null, null), i0.ɵqud(603979776, 1, { tabs: 1 }), i0.ɵqud(335544320, 2, { tabHeaders: 0 })], null, null); }
var TabsNgFactory = i0.ɵccf("ibm-tabs", i4.Tabs, View_Tabs_Host_0, { position: "position", cacheActive: "cacheActive", followFocus: "followFocus", skeleton: "skeleton", isNavigation: "isNavigation" }, {}, ["*"]);
export { TabsNgFactory as TabsNgFactory };
//# sourceMappingURL=tabs.component.ngfactory.js.map