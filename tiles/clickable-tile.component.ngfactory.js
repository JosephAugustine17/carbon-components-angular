/*!
 *
 * carbon-angular v0.0.0 | clickable-tile.component.ngfactory.js
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
import * as i2 from "./clickable-tile.component";
var styles_ClickableTile = [];
var RenderType_ClickableTile = i0.ɵcrt({ encapsulation: 2, styles: styles_ClickableTile, data: {} });
export { RenderType_ClickableTile as RenderType_ClickableTile };
export function View_ClickableTile_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "a", [["class", "bx--tile bx--tile--clickable"], ["tabindex", "0"]], [[8, "href", 4], [8, "target", 0], [1, "aria-disabled", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_co.onKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--tile--is-clicked": 0 }), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_3 = "bx--tile bx--tile--clickable"; var currVal_4 = _ck(_v, 2, 0, _co.clicked); _ck(_v, 1, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.href; var currVal_1 = _co.target; var currVal_2 = _co.disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
export function View_ClickableTile_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-clickable-tile", [], null, null, null, View_ClickableTile_0, RenderType_ClickableTile)), i0.ɵdid(1, 49152, null, 0, i2.ClickableTile, [], null, null)], null, null); }
var ClickableTileNgFactory = i0.ɵccf("ibm-clickable-tile", i2.ClickableTile, View_ClickableTile_Host_0, { href: "href", target: "target", disabled: "disabled" }, {}, ["*"]);
export { ClickableTileNgFactory as ClickableTileNgFactory };
//# sourceMappingURL=clickable-tile.component.ngfactory.js.map