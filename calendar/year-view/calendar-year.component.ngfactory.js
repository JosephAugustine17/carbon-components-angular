/*!
 *
 * carbon-angular v0.0.0 | calendar-year.component.ngfactory.js
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
import * as i2 from "../calendar-header.component.ngfactory";
import * as i3 from "../calendar-header.component";
import * as i4 from "./calendar-year.component";
var styles_CalendarYear = [];
var RenderType_CalendarYear = i0.ɵcrt({ encapsulation: 2, styles: styles_CalendarYear, data: {} });
export { RenderType_CalendarYear as RenderType_CalendarYear };
function View_CalendarYear_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "td", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectYear(((_v.parent.context.$implicit * 2) + _v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(2, { "today": 0, "selected": 1, "range": 2, "disabled": 3 }), (_l()(), i0.ɵeld(3, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _co.isCurrentYear(((_v.parent.context.$implicit * 2) + _v.context.$implicit)), _co.isSelected(((_v.parent.context.$implicit * 2) + _v.context.$implicit)), _co.inRange(((_v.parent.context.$implicit * 2) + _v.context.$implicit)), _co.isDisabled(((_v.parent.context.$implicit * 2) + _v.context.$implicit))); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.currentView.getFullYear() - ((_v.parent.context.$implicit * 2) + _v.context.$implicit)); _ck(_v, 5, 0, currVal_1); }); }
function View_CalendarYear_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "tr", [["class", "grid_row--months"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarYear_2)), i0.ɵdid(2, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.range((0 - 1), 1, (0 - 1)); _ck(_v, 2, 0, currVal_0); }, null); }
export function View_CalendarYear_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "div", [["class", "calendar-view"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "ibm-calendar-header", [["header", "yearOnlyRange"]], null, null, null, i2.View_CalendarHeader_0, i2.RenderType_CalendarHeader)), i0.ɵdid(2, 49152, null, 0, i3.CalendarHeader, [], { currentView: [0, "currentView"], header: [1, "header"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 3, "table", [["class", "calendar_grid"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_CalendarYear_1)), i0.ɵdid(6, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentView; var currVal_1 = "yearOnlyRange"; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.range((0 - 1), 2, (0 - 1)); _ck(_v, 6, 0, currVal_2); }, null); }
export function View_CalendarYear_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-calendar-year-view", [], null, null, null, View_CalendarYear_0, RenderType_CalendarYear)), i0.ɵdid(1, 114688, null, 0, i4.CalendarYear, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CalendarYearNgFactory = i0.ɵccf("ibm-calendar-year-view", i4.CalendarYear, View_CalendarYear_Host_0, { model: "model" }, {}, []);
export { CalendarYearNgFactory as CalendarYearNgFactory };
//# sourceMappingURL=calendar-year.component.ngfactory.js.map