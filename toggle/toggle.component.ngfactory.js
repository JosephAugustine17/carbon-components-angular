/*!
 *
 * carbon-angular v0.0.0 | toggle.component.ngfactory.js
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
import * as i3 from "./toggle.component";
import * as i4 from "../i18n/i18n.service";
var styles_Toggle = [];
var RenderType_Toggle = i0.ɵcrt({ encapsulation: 2, styles: styles_Toggle, data: {} });
export { RenderType_Toggle as RenderType_Toggle };
function View_Toggle_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, "label", [["class", "bx--toggle__label"]], [[8, "htmlFor", 0]], null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--skeleton": 0 }), (_l()(), i0.ɵeld(3, 0, null, null, 2, "span", [["class", "bx--toggle__text--left"]], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵeld(6, 0, null, null, 0, "span", [["class", "bx--toggle__appearance"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 2, "span", [["class", "bx--toggle__text--right"]], null, null, null, null, null)), (_l()(), i0.ɵted(8, null, ["", ""])), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_1 = "bx--toggle__label"; var currVal_2 = _ck(_v, 2, 0, _co.skeleton); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 0, 0, currVal_0); var currVal_3 = i0.ɵunv(_v, 4, 0, i0.ɵnov(_v, 5).transform((!_co.skeleton ? _co.offText : null))); _ck(_v, 4, 0, currVal_3); var currVal_4 = i0.ɵunv(_v, 8, 0, i0.ɵnov(_v, 9).transform((!_co.skeleton ? _co.onText : null))); _ck(_v, 8, 0, currVal_4); }); }
function View_Toggle_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "label", [["class", "bx--toggle__label"]], [[8, "htmlFor", 0]], null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "bx--skeleton": 0 }), (_l()(), i0.ɵeld(3, 0, null, null, 2, "span", [["class", "bx--toggle__appearance"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, ":svg:svg", [["class", "bx--toggle__check"], ["height", "5px"], ["viewBox", "0 0 6 5"], ["width", "6px"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 0, ":svg:path", [["d", "M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "bx--toggle__label"; var currVal_2 = _ck(_v, 2, 0, _co.skeleton); _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; _ck(_v, 0, 0, currVal_0); }); }
export function View_Toggle_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { inputCheckbox: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 2, "input", [["class", "bx--toggle"], ["type", "checkbox"]], [[8, "id", 0], [8, "value", 0], [8, "name", 0], [8, "required", 0], [8, "checked", 0], [8, "disabled", 0], [1, "aria-checked", 0]], [[null, "change"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onChange($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "bx--toggle--small": 0, "bx--skeleton": 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Toggle_1)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Toggle_2)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = "bx--toggle"; var currVal_8 = _ck(_v, 3, 0, (_co.size === "sm"), _co.skeleton); _ck(_v, 2, 0, currVal_7, currVal_8); var currVal_9 = (_co.size === "md"); _ck(_v, 5, 0, currVal_9); var currVal_10 = (_co.size === "sm"); _ck(_v, 7, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; var currVal_1 = _co.value; var currVal_2 = _co.name; var currVal_3 = _co.required; var currVal_4 = _co.checked; var currVal_5 = _co.disabled; var currVal_6 = _co.checked; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
export function View_Toggle_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-toggle", [], [[2, "bx--checkbox-wrapper", null], [2, "bx--form-item", null]], null, null, View_Toggle_0, RenderType_Toggle)), i0.ɵprd(5120, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.Toggle]), i0.ɵdid(2, 4243456, null, 0, i3.Toggle, [i0.ChangeDetectorRef, i4.I18n], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).checkboxWrapperClass; var currVal_1 = i0.ɵnov(_v, 2).formItemClass; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
var ToggleNgFactory = i0.ɵccf("ibm-toggle", i3.Toggle, View_Toggle_Host_0, { size: "size", nested: "nested", inline: "inline", disabled: "disabled", skeleton: "skeleton", name: "name", id: "id", required: "required", value: "value", ariaLabel: "aria-label", ariaLabelledby: "aria-labelledby", indeterminate: "indeterminate", checked: "checked", offText: "offText", onText: "onText" }, { change: "change", indeterminateChange: "indeterminateChange" }, []);
export { ToggleNgFactory as ToggleNgFactory };
//# sourceMappingURL=toggle.component.ngfactory.js.map