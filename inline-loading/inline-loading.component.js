/*!
 *
 * carbon-angular v0.0.0 | inline-loading.component.js
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


import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
var InlineLoading = /** @class */ (function () {
    function InlineLoading() {
        /**
         * Provide a delay for the `setTimeout` for success.
         */
        this.successDelay = 1500;
        /**
         * set to `false` to stop the loading animation
         */
        this.isActive = true;
        /**
         * Emits event after the success state is active
         *
         * @type {EventEmitter<any>}
         */
        this.onSuccess = new EventEmitter();
        this.loadingClass = true;
        /**
         * Set to `true` if the action is completed successfully.
         */
        this._success = false;
    }
    Object.defineProperty(InlineLoading.prototype, "success", {
        /**
         * Returns value `true` if the component is in the success state.
         */
        get: function () {
            return this._success;
        },
        /**
         * Set the component's state to match the parameter and emits onSuccess if it exits.
         */
        set: function (success) {
            var _this = this;
            this._success = success;
            if (this._success) {
                setTimeout(function () {
                    _this.onSuccess.emit();
                }, this.successDelay);
            }
        },
        enumerable: true,
        configurable: true
    });
    InlineLoading.decorators = [
        { type: Component, args: [{
                    selector: "ibm-inline-loading",
                    template: "\n\t\t<div class=\"bx--inline-loading__animation\">\n\t\t\t<div\n\t\t\t\t*ngIf=\"success === false\"\n\t\t\t\tclass=\"bx--loading bx--loading--small\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'bx--loading--stop': !isActive\n\t\t\t\t}\">\n\t\t\t\t<svg class=\"bx--loading__svg\" viewBox=\"-75 -75 150 150\">\n\t\t\t\t\t<circle cx=\"0\" cy=\"0\" r=\"37.5\"></circle>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<svg\n\t\t\t\t*ngIf=\"success === true\"\n\t\t\t\tclass=\"bx--inline-loading__checkmark-container bx--inline-loading__svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 10\">\n\t\t\t\t<polyline class=\"bx--inline-loading__checkmark\" points=\"0.74 3.4 3.67 6.34 9.24 0.74\"></polyline>\n\t\t\t</svg>\n\t\t</div>\n\t\t<p *ngIf=\"success === false\" class=\"bx--inline-loading__text\">{{loadingText}}</p>\n\t\t<p *ngIf=\"success === true\" class=\"bx--inline-loading__text\">{{successText}}</p>\n\t"
                },] },
    ];
    InlineLoading.propDecorators = {
        loadingText: [{ type: Input }],
        successText: [{ type: Input }],
        successDelay: [{ type: Input }],
        isActive: [{ type: Input }],
        success: [{ type: Input }],
        onSuccess: [{ type: Output }],
        loadingClass: [{ type: HostBinding, args: ["class.bx--inline-loading",] }]
    };
    return InlineLoading;
}());
export { InlineLoading };
//# sourceMappingURL=inline-loading.component.js.map