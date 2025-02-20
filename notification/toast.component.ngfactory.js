/*!
 *
 * carbon-angular v0.0.0 | toast.component.ngfactory.js
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
import * as i2 from "./toast.component";
import * as i3 from "./notification-display.service";
import * as i4 from "../i18n/i18n.service";
import * as i5 from "../experimental.service";
var styles_Toast = [];
var RenderType_Toast = i0.ɵcrt({ encapsulation: 2, styles: styles_Toast, data: {} });
export { RenderType_Toast as RenderType_Toast };
function View_Toast_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["class", "bx--inline-notification__icon"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, ":svg:path", [["d", "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM3.293 4.707l8 8 1.414-1.414-8-8-1.414 1.414z"], ["fill-rule", "evenodd"]], null, null, null, null, null))], null, null); }
function View_Toast_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["class", "bx--inline-notification__icon"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, ":svg:path", [["d", "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.293-11.332L6.75 9.21 4.707 7.168 3.293 8.582 6.75 12.04l5.957-5.957-1.414-1.414z"]], null, null, null, null, null))], null, null); }
function View_Toast_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, ":svg:svg", [["class", "bx--inline-notification__icon"], ["height", "16"], ["viewBox", "0 0 16 16"], ["width", "16"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, ":svg:path", [["d", "M.75 16a.75.75 0 0 1-.67-1.085L7.33.415a.75.75 0 0 1 1.34 0l7.25 14.5A.75.75 0 0 1 15.25 16H.75zm6.5-10v5h1.5V6h-1.5zM8\n\t\t\t\t\t13.5A.75.75 0 1 0 8 12a.75.75 0 0 0 0 1.5z"]], null, null, null, null, null))], null, null); }
function View_Toast_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Toast_2)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Toast_3)), i0.ɵdid(4, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Toast_4)), i0.ɵdid(6, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.notificationObj.type === "error"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.notificationObj.type === "success"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.notificationObj.type === "warning"); _ck(_v, 6, 0, currVal_2); }, null); }
export function View_Toast_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { notification: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Toast_1)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 3, "div", [["class", "bx--toast-notification__details"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 0, "h3", [["class", "bx--toast-notification__title"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 0, "p", [["class", "bx--toast-notification__subtitle"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 0, "p", [["class", "bx--toast-notification__caption"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 2, "button", [["class", "bx--toast-notification__close-button"], ["type", "button"]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClose() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, ":svg:svg", [["class", "bx--toast-notification-icon"], ["height", "10"], ["viewBox", "0 0 10 10"], ["width", "10"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 0, ":svg:path", [["d", "M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z"], ["fill-rule", "nonzero"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isExperimental; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.notificationObj.title; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.notificationObj.subtitle; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.notificationObj.caption; _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.notificationObj.closeLabel; _ck(_v, 7, 0, currVal_4); }); }
export function View_Toast_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-toast", [], [[1, "id", 0], [2, "bx--inline-notification", null], [1, "role", 0], [2, "bx--inline-notification--error", null], [2, "bx--toast-notification--error", null], [2, "bx--inline-notification--info", null], [2, "bx--toast-notification--info", null], [2, "bx--inline-notification--success", null], [2, "bx--toast-notification--success", null], [2, "bx--inline-notification--warning", null], [2, "bx--toast-notification--warning", null], [2, "bx--toast-notification", null]], null, null, View_Toast_0, RenderType_Toast)), i0.ɵdid(1, 114688, null, 0, i2.Toast, [i3.NotificationDisplayService, i4.I18n, i5.ExperimentalService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).toastID; var currVal_1 = i0.ɵnov(_v, 1).notificationClass; var currVal_2 = i0.ɵnov(_v, 1).role; var currVal_3 = i0.ɵnov(_v, 1).isError; var currVal_4 = i0.ɵnov(_v, 1).isError; var currVal_5 = i0.ɵnov(_v, 1).isInfo; var currVal_6 = i0.ɵnov(_v, 1).isInfo; var currVal_7 = i0.ɵnov(_v, 1).isSuccess; var currVal_8 = i0.ɵnov(_v, 1).isSuccess; var currVal_9 = i0.ɵnov(_v, 1).isWarning; var currVal_10 = i0.ɵnov(_v, 1).isWarning; var currVal_11 = i0.ɵnov(_v, 1).toastClass; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]); }); }
var ToastNgFactory = i0.ɵccf("ibm-toast", i2.Toast, View_Toast_Host_0, { notificationObj: "notificationObj" }, { close: "close" }, []);
export { ToastNgFactory as ToastNgFactory };
//# sourceMappingURL=toast.component.ngfactory.js.map