/*!
 *
 * carbon-angular v0.0.0 | dropdown-list.component.ngfactory.js
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
import * as i2 from "../abstract-dropdown-view.class";
import * as i3 from "./dropdown-list.component";
import * as i4 from "../../i18n/i18n.service";
var styles_DropdownList = [];
var RenderType_DropdownList = i0.ɵcrt({ encapsulation: 2, styles: styles_DropdownList, data: {} });
export { RenderType_DropdownList as RenderType_DropdownList };
function View_DropdownList_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "bx--form-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "input", [["class", "bx--checkbox"], ["tabindex", "-1"], ["type", "checkbox"]], [[8, "checked", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.doClick($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "label", [["class", "bx--checkbox-label"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.selected; var currVal_1 = _v.parent.context.$implicit.disabled; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _v.parent.context.$implicit.content; _ck(_v, 4, 0, currVal_2); }); }
function View_DropdownList_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.content; _ck(_v, 1, 0, currVal_0); }); }
function View_DropdownList_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_DropdownList_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 2, null, View_DropdownList_5)), i0.ɵdid(1, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(2, { $implicit: 0 }), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _v.parent.context.$implicit); var currVal_1 = _co.listTpl; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_DropdownList_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[3, 0], ["listItem", 1]], null, 8, "li", [["class", "bx--list-box__menu-item"], ["role", "option"], ["tabindex", "-1"]], null, [[null, "click"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.doClick($event, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_co.doKeyDown($event, _v.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_co.onItemFocus(_v.context.index) !== false);
        ad = (pd_2 && ad);
    } if (("blur" === en)) {
        var pd_3 = (_co.onItemBlur(_v.context.index) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { selected: 0, disabled: 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DropdownList_2)), i0.ɵdid(4, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DropdownList_3)), i0.ɵdid(6, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DropdownList_4)), i0.ɵdid(8, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "bx--list-box__menu-item"; var currVal_1 = _ck(_v, 2, 0, _v.context.$implicit.selected, _v.context.$implicit.disabled); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (!_co.listTpl && (_co.type === "multi")); _ck(_v, 4, 0, currVal_2); var currVal_3 = (!_co.listTpl && (_co.type === "single")); _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.listTpl; _ck(_v, 8, 0, currVal_4); }, null); }
export function View_DropdownList_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { list: 0 }), i0.ɵqud(402653184, 2, { clearSelected: 0 }), i0.ɵqud(671088640, 3, { listElementList: 1 }), (_l()(), i0.ɵeld(3, 0, [[1, 0], ["list", 1]], null, 2, "ul", [["class", "bx--list-box__menu"], ["role", "listbox"]], [[1, "aria-label", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DropdownList_1)), i0.ɵdid(5, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.displayItems; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ariaLabel; _ck(_v, 3, 0, currVal_0); }); }
export function View_DropdownList_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-dropdown-list", [], null, null, null, View_DropdownList_0, RenderType_DropdownList)), i0.ɵprd(6144, null, i2.AbstractDropdownView, null, [i3.DropdownList]), i0.ɵdid(2, 4374528, null, 0, i3.DropdownList, [i0.ElementRef, i4.I18n], null, null)], null, null); }
var DropdownListNgFactory = i0.ɵccf("ibm-dropdown-list", i3.DropdownList, View_DropdownList_Host_0, { ariaLabel: "ariaLabel", items: "items", listTpl: "listTpl", type: "type" }, { select: "select", blurIntent: "blurIntent" }, []);
export { DropdownListNgFactory as DropdownListNgFactory };
//# sourceMappingURL=dropdown-list.component.ngfactory.js.map