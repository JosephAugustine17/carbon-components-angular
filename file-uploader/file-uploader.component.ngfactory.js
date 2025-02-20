/*!
 *
 * carbon-angular v0.0.0 | file-uploader.component.ngfactory.js
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
import * as i1 from "./file.component.ngfactory";
import * as i2 from "./file.component";
import * as i3 from "../i18n/i18n.service";
import * as i4 from "../button/button.directive";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "./file-uploader.component";
var styles_FileUploader = [];
var RenderType_FileUploader = i0.ɵcrt({ encapsulation: 2, styles: styles_FileUploader, data: {} });
export { RenderType_FileUploader as RenderType_FileUploader };
function View_FileUploader_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ibm-file", [], [[2, "bx--file__selected-file", null]], [[null, "remove"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("remove" === en)) {
        var pd_0 = (_co.removeFile(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_File_0, i1.RenderType_File)), i0.ɵdid(1, 49152, null, 0, i2.File, [i3.I18n], { fileItem: [0, "fileItem"] }, { remove: "remove" })], function (_ck, _v) { var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).selectedFile; _ck(_v, 0, 0, currVal_0); }); }
function View_FileUploader_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "strong", [["class", "bx--label"]], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "p", [["class", "bx--label-description"]], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""])), (_l()(), i0.ɵeld(5, 0, null, null, 7, "div", [["class", "bx--file"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 2, "button", [["ibmButton", "secondary"]], [[1, "for", 0], [2, "bx--btn", null], [2, "bx--btn--primary", null], [2, "bx--btn--secondary", null], [2, "bx--btn--tertiary", null], [2, "bx--btn--ghost", null], [2, "bx--btn--danger", null], [2, "bx--btn--danger--primary", null], [2, "bx--skeleton", null], [2, "bx--btn--sm", null], [2, "bx--toolbar-action", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 9).click() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(7, 81920, null, 0, i4.Button, [], { ibmButton: [0, "ibmButton"] }, null), (_l()(), i0.ɵted(8, null, [" ", " "])), (_l()(), i0.ɵeld(9, 0, [[1, 0], ["fileInput", 1]], null, 0, "input", [["class", "bx--file-input"], ["type", "file"]], [[8, "accept", 0], [8, "id", 0], [8, "multiple", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onFilesAdded() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(10, 0, null, null, 2, "div", [["class", "bx--file-container"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUploader_2)), i0.ɵdid(12, 278528, null, 0, i5.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_13 = "secondary"; _ck(_v, 7, 0, currVal_13); var currVal_18 = _co.files; _ck(_v, 12, 0, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.description; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.fileUploaderId; var currVal_3 = i0.ɵnov(_v, 7).baseClass; var currVal_4 = i0.ɵnov(_v, 7).primary; var currVal_5 = i0.ɵnov(_v, 7).secondary; var currVal_6 = i0.ɵnov(_v, 7).tertiary; var currVal_7 = i0.ɵnov(_v, 7).ghost; var currVal_8 = i0.ɵnov(_v, 7).danger; var currVal_9 = i0.ɵnov(_v, 7).dangerPrimary; var currVal_10 = i0.ɵnov(_v, 7).skeleton; var currVal_11 = i0.ɵnov(_v, 7).smallSize; var currVal_12 = i0.ɵnov(_v, 7).toolbarAction; _ck(_v, 6, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]); var currVal_14 = _co.buttonText; _ck(_v, 8, 0, currVal_14); var currVal_15 = _co.accept; var currVal_16 = _co.fileUploaderId; var currVal_17 = _co.multiple; _ck(_v, 9, 0, currVal_15, currVal_16, currVal_17); }); }
function View_FileUploader_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "bx--skeleton__text"], ["style", "width: 100px"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "div", [["class", "bx--skeleton__text"], ["style", "width: 225px"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 1, "button", [["ibmButton", ""], ["skeleton", "true"]], [[2, "bx--btn", null], [2, "bx--btn--primary", null], [2, "bx--btn--secondary", null], [2, "bx--btn--tertiary", null], [2, "bx--btn--ghost", null], [2, "bx--btn--danger", null], [2, "bx--btn--danger--primary", null], [2, "bx--skeleton", null], [2, "bx--btn--sm", null], [2, "bx--toolbar-action", null]], null, null, null, null)), i0.ɵdid(3, 81920, null, 0, i4.Button, [], { ibmButton: [0, "ibmButton"], skeleton: [1, "skeleton"] }, null)], function (_ck, _v) { var currVal_10 = ""; var currVal_11 = "true"; _ck(_v, 3, 0, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 3).baseClass; var currVal_1 = i0.ɵnov(_v, 3).primary; var currVal_2 = i0.ɵnov(_v, 3).secondary; var currVal_3 = i0.ɵnov(_v, 3).tertiary; var currVal_4 = i0.ɵnov(_v, 3).ghost; var currVal_5 = i0.ɵnov(_v, 3).danger; var currVal_6 = i0.ɵnov(_v, 3).dangerPrimary; var currVal_7 = i0.ɵnov(_v, 3).skeleton; var currVal_8 = i0.ɵnov(_v, 3).smallSize; var currVal_9 = i0.ɵnov(_v, 3).toolbarAction; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
export function View_FileUploader_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { fileInput: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUploader_1)), i0.ɵdid(2, 16384, null, 0, i5.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵand(0, [["skeletonTemplate", 2]], null, 0, null, View_FileUploader_3))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.skeleton; var currVal_1 = i0.ɵnov(_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
export function View_FileUploader_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ibm-file-uploader", [], null, null, null, View_FileUploader_0, RenderType_FileUploader)), i0.ɵprd(5120, null, i6.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i7.FileUploader]), i0.ɵdid(2, 114688, null, 0, i7.FileUploader, [i3.I18n], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var FileUploaderNgFactory = i0.ɵccf("ibm-file-uploader", i7.FileUploader, View_FileUploader_Host_0, { buttonText: "buttonText", title: "title", description: "description", accept: "accept", multiple: "multiple", skeleton: "skeleton", fileUploaderId: "fileUploaderId", files: "files" }, { filesChange: "filesChange" }, []);
export { FileUploaderNgFactory as FileUploaderNgFactory };
//# sourceMappingURL=file-uploader.component.ngfactory.js.map