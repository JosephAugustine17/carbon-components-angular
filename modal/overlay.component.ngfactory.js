/*!
 *
 * carbon-angular v0.0.0 | overlay.component.ngfactory.js
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
import * as i2 from "./overlay.component";
var styles_Overlay = [];
var RenderType_Overlay = i0.ɵcrt({ encapsulation: 2, styles: styles_Overlay, data: {} });
export { RenderType_Overlay as RenderType_Overlay };
export function View_Overlay_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { overlay: 0 }), (_l()(), i0.ɵeld(1, 0, [[1, 0], ["overlay", 1]], null, 3, "section", [["class", "bx--modal bx--modal-tall is-visible"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.overlayClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "bx--modal--danger": 0 }), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "bx--modal bx--modal-tall is-visible"; var currVal_1 = _ck(_v, 3, 0, (_co.theme === "danger")); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
export function View_Overlay_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-overlay", [], null, null, null, View_Overlay_0, RenderType_Overlay)), i0.ɵdid(1, 49152, null, 0, i2.Overlay, [], null, null)], null, null); }
var OverlayNgFactory = i0.ɵccf("ibm-overlay", i2.Overlay, View_Overlay_Host_0, { theme: "theme" }, { overlaySelect: "overlaySelect" }, ["*"]);
export { OverlayNgFactory as OverlayNgFactory };
//# sourceMappingURL=overlay.component.ngfactory.js.map