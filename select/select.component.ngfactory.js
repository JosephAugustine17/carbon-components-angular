/*!
 *
 * carbon-angular v0.0.0 | select.component.ngfactory.js
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
import * as i3 from "./select.component";
var styles_Select = ["[data-invalid][_ngcontent-%COMP%]    ~ .bx--select__arrow[_ngcontent-%COMP%] {\n\t\t\tbottom: 2.25rem;\n\t\t}"];
var RenderType_Select = i0.ɵcrt({ encapsulation: 0, styles: styles_Select, data: {} });
export { RenderType_Select as RenderType_Select };
function View_Select_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "label", [["class", "bx--label bx--skeleton"]], [[1, "for", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 0, 0, currVal_0); }); }
function View_Select_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "label", [["class", "bx--label"]], [[1, "for", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.label; _ck(_v, 1, 0, currVal_1); }); }
function View_Select_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["class", "bx--select__arrow"], ["height", "5"], ["viewBox", "0 0 10 5"], ["width", "10"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, ":svg:path", [["d", "M0 0l5 4.998L10 0z"], ["fill-rule", "evenodd"]], null, null, null, null, null))], null, null); }
function View_Select_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "bx--form__helper-text"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.helperText; _ck(_v, 1, 0, currVal_0); }); }
function View_Select_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "bx--form-requirement"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.invalidText; _ck(_v, 1, 0, currVal_0); }); }
export function View_Select_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { select: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 15, "div", [["class", "bx--form-item"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Select_1)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(4, 0, null, null, 12, "div", [["class", "bx--select"], ["style", "width: 100%"]], null, null, null, null, null)), i0.ɵdid(5, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(6, { "bx--select--inline": 0, "bx--select--light": 1, "bx--skeleton": 2 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Select_2)), i0.ɵdid(8, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(9, 0, [[1, 0], ["select", 1]], null, 1, "select", [["class", "bx--select-input"]], [[1, "id", 0], [1, "data-invalid", 0], [8, "disabled", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Select_3)), i0.ɵdid(12, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Select_4)), i0.ɵdid(14, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Select_5)), i0.ɵdid(16, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.skeleton; _ck(_v, 3, 0, currVal_0); var currVal_1 = "bx--select"; var currVal_2 = _ck(_v, 6, 0, (_co.display === "inline"), (_co.theme === "light"), _co.skeleton); _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_3 = !_co.skeleton; _ck(_v, 8, 0, currVal_3); var currVal_7 = !_co.skeleton; _ck(_v, 12, 0, currVal_7); var currVal_8 = _co.helperText; _ck(_v, 14, 0, currVal_8); var currVal_9 = _co.invalid; _ck(_v, 16, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.id; var currVal_5 = (_co.invalid ? "" : null); var currVal_6 = _co.disabled; _ck(_v, 9, 0, currVal_4, currVal_5, currVal_6); }); }
export function View_Select_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-select", [], null, [[null, "blur"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).blur() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_Select_0, RenderType_Select)), i0.ɵprd(5120, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.Select]), i0.ɵdid(2, 49152, null, 0, i3.Select, [], null, null)], null, null); }
var SelectNgFactory = i0.ɵccf("ibm-select", i3.Select, View_Select_Host_0, { display: "display", label: "label", helperText: "helperText", invalidText: "invalidText", id: "id", disabled: "disabled", skeleton: "skeleton", invalid: "invalid", theme: "theme" }, { selected: "selected" }, ["*"]);
export { SelectNgFactory as SelectNgFactory };
//# sourceMappingURL=select.component.ngfactory.js.map