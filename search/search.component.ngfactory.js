/*!
 *
 * carbon-angular v0.0.0 | search.component.ngfactory.js
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
import * as i3 from "./search.component";
import * as i4 from "../i18n/i18n.service";
var styles_Search = [];
var RenderType_Search = i0.ɵcrt({ encapsulation: 2, styles: styles_Search, data: {} });
export { RenderType_Search as RenderType_Search };
function View_Search_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "bx--search-input"]], null, null, null, null, null))], null, null); }
function View_Search_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[1, 0], ["input", 1]], null, 0, "input", [["class", "bx--search-input"], ["role", "search"], ["type", "text"]], [[8, "id", 0], [8, "value", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "required", 0]], [[null, "input"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.onSearch($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; var currVal_1 = _co.value; var currVal_2 = _co.placeholder; var currVal_3 = _co.disabled; var currVal_4 = _co.required; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_Search_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_Search_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "button", [["class", "bx--toolbar-search__btn"], ["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSearch($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵpid(131072, i1.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Search_5)), i0.ɵdid(3, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_1 = i0.ɵnov(_v.parent, 4); _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 0, 0, i0.ɵnov(_v, 1).transform(_co.i18n.get("SEARCH.TOOLBAR_SEARCH"))); _ck(_v, 0, 0, currVal_0); }); }
function View_Search_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["class", "bx--search-magnifier"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, ":svg:path", [["d", "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.563 4.557-.707.708-4.563-4.558a6.5 6.5 0 1 1 .707-.707z"], ["fill-rule", "nonzero"]], null, null, null, null, null))], null, null); }
function View_Search_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_Search_3)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Search_4)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵand(0, [["svg", 2]], null, 0, null, View_Search_6))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.toolbar || _co.active); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.toolbar; var currVal_2 = i0.ɵnov(_v, 4); _ck(_v, 3, 0, currVal_1, currVal_2); }, null); }
export function View_Search_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { inputRef: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 12, "div", [["class", "bx--search"], ["role", "search"]], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "bx--search--sm": 0, "bx--search--lg": 1, "bx--search--light": 2, "bx--skeleton": 3, "bx--toolbar-search": 4, "bx--toolbar-search--active": 5 }), (_l()(), i0.ɵeld(4, 0, null, null, 1, "label", [["class", "bx--label"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), i0.ɵted(5, null, ["", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Search_1)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵand(0, [["enableInput", 2]], null, 0, null, View_Search_2)), (_l()(), i0.ɵeld(9, 0, null, null, 4, "button", [["class", "bx--search-close"]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clearSearch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(10, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(11, { "bx--search-close--hidden": 0 }), (_l()(), i0.ɵeld(12, 0, null, null, 1, ":svg:svg", [["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 0, ":svg:path", [["d", "M8 6.586L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414\n\t\t\t\t\t\t\t8l2.122-2.121-1.415-1.415L8 6.586zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"], ["fill-rule", "evenodd"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "bx--search"; var currVal_1 = _ck(_v, 3, 0, (_co.size === "sm"), (_co.size === "lg"), (_co.theme === "light"), _co.skeleton, _co.toolbar, (_co.toolbar && _co.active)); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = _co.skeleton; var currVal_5 = i0.ɵnov(_v, 8); _ck(_v, 7, 0, currVal_4, currVal_5); var currVal_8 = "bx--search-close"; var currVal_9 = _ck(_v, 11, 0, (!_co.value || (_co.value.length === 0))); _ck(_v, 10, 0, currVal_8, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.id; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.label; _ck(_v, 5, 0, currVal_3); var currVal_6 = _co.clearButtonTitle; var currVal_7 = _co.clearButtonTitle; _ck(_v, 9, 0, currVal_6, currVal_7); }); }
export function View_Search_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-search", [], [[2, "bx--form-item", null]], [[null, "keydown"], [null, "focusout"]], function (_v, en, $event) { var ad = true; if (("keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).keyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focusout" === en)) {
        var pd_1 = (i0.ɵnov(_v, 2).focusOut($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_Search_0, RenderType_Search)), i0.ɵprd(5120, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.Search]), i0.ɵdid(2, 49152, null, 0, i3.Search, [i0.ElementRef, i4.I18n], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).containerClass; _ck(_v, 0, 0, currVal_0); }); }
var SearchNgFactory = i0.ɵccf("ibm-search", i3.Search, View_Search_Host_0, { theme: "theme", size: "size", disabled: "disabled", toolbar: "toolbar", skeleton: "skeleton", active: "active", name: "name", id: "id", required: "required", value: "value", label: "label", placeholder: "placeholder", clearButtonTitle: "clearButtonTitle" }, { change: "change" }, []);
export { SearchNgFactory as SearchNgFactory };
//# sourceMappingURL=search.component.ngfactory.js.map