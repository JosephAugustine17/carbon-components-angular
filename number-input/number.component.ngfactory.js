/*!
 *
 * carbon-angular v0.0.0 | number.component.ngfactory.js
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
import * as i2 from "@angular/forms";
import * as i3 from "./number.component";
var styles_Number = [];
var RenderType_Number = i0.ɵcrt({ encapsulation: 2, styles: styles_Number, data: {} });
export { RenderType_Number as RenderType_Number };
function View_Number_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "label", [["class", "bx--label bx--skeleton"]], null, null, null, null, null))], null, null); }
function View_Number_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "label", [["class", "bx--label"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.label; _ck(_v, 1, 0, currVal_1); }); }
function View_Number_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [["class", "bx--number__controls"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "button", [["class", "bx--number__control-btn up-icon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onIncrement() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 1, ":svg:svg", [["height", "5"], ["viewBox", "0 0 10 5"], ["width", "10"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 0, ":svg:path", [["d", "M0 5L5 .002 10 5z"], ["fill-rule", "evenodd"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 2, "button", [["class", "bx--number__control-btn down-icon"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDecrement() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 1, ":svg:svg", [["height", "5"], ["viewBox", "0 0 10 5"], ["width", "10"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 0, ":svg:path", [["d", "M0 0l5 4.998L10 0z"], ["fill-rule", "evenodd"]], null, null, null, null, null))], null, null); }
function View_Number_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "bx--form-requirement"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.invalidText; _ck(_v, 1, 0, currVal_0); }); }
function View_Number_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "bx--form__helper-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.helperText; _ck(_v, 1, 0, currVal_0); }); }
export function View_Number_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Number_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 11, "div", [["class", "bx--number"], ["data-numberinput", ""]], [[1, "data-invalid", 0]], null, null, null, null)), i0.ɵdid(3, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(4, { "bx--number--light": 0, "bx--number--nolabel": 1, "bx--number--helpertext": 2, "bx--skeleton": 3 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Number_2)), i0.ɵdid(6, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(7, 0, null, null, 0, "input", [["type", "number"]], [[8, "id", 0], [8, "value", 0], [8, "min", 0], [8, "max", 0], [8, "disabled", 0], [8, "required", 0]], [[null, "input"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.onNumberInputChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Number_3)), i0.ɵdid(9, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Number_4)), i0.ɵdid(11, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Number_5)), i0.ɵdid(13, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.skeleton && _co.label); _ck(_v, 1, 0, currVal_0); var currVal_2 = "bx--number"; var currVal_3 = _ck(_v, 4, 0, (_co.theme === "light"), !_co.label, _co.helperText, _co.skeleton); _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = (!_co.skeleton && _co.label); _ck(_v, 6, 0, currVal_4); var currVal_11 = !_co.skeleton; _ck(_v, 9, 0, currVal_11); var currVal_12 = _co.invalid; _ck(_v, 11, 0, currVal_12); var currVal_13 = _co.helperText; _ck(_v, 13, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.invalid ? "" : null); _ck(_v, 2, 0, currVal_1); var currVal_5 = _co.id; var currVal_6 = _co.value; var currVal_7 = _co.min; var currVal_8 = _co.max; var currVal_9 = _co.disabled; var currVal_10 = _co.required; _ck(_v, 7, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); }); }
export function View_Number_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-number", [], [[2, "bx--form-item", null]], null, null, View_Number_0, RenderType_Number)), i0.ɵprd(5120, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.Number]), i0.ɵdid(2, 49152, null, 0, i3.Number, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).containerClass; _ck(_v, 0, 0, currVal_0); }); }
var NumberNgFactory = i0.ɵccf("ibm-number", i3.Number, View_Number_Host_0, { theme: "theme", disabled: "disabled", skeleton: "skeleton", invalid: "invalid", id: "id", required: "required", value: "value", min: "min", max: "max", label: "label", helperText: "helperText", invalidText: "invalidText" }, { change: "change" }, []);
export { NumberNgFactory as NumberNgFactory };
//# sourceMappingURL=number.component.ngfactory.js.map