/*!
 *
 * carbon-angular v0.0.0 | loading.component.js
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


import { Component, Input, HostBinding } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
var Loading = /** @class */ (function () {
    function Loading(i18n) {
        this.i18n = i18n;
        /**
         * Accessible title for the loading circle.
         * Defaults to the `LOADING.TITLE` value from the i18n service.
         */
        this.title = this.i18n.get().LOADING.TITLE;
        /**
         * set to `false` to stop the loading animation
         * @type {boolean}
         */
        this.isActive = true;
        /**
         * Specify the size of the button
         * @type {("normal" | "sm")}
         */
        this.size = "normal";
        /**
         * Set to `true` to make loader with an overlay.
         * @type {boolean}
         */
        this.overlay = false;
    }
    Loading.decorators = [
        { type: Component, args: [{
                    selector: "ibm-loading",
                    template: "\n\t\t<div\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--loading--small': size === 'sm',\n\t\t\t\t'bx--loading--stop': !isActive && !overlay,\n\t\t\t\t'bx--loading-overlay--stop': !isActive && overlay\n\t\t\t}\"\n\t\t\tclass=\"bx--loading\">\n\t\t\t<svg class=\"bx--loading__svg\" viewBox=\"-75 -75 150 150\">\n\t\t\t\t<title>{{title}}</title>\n\t\t\t\t<circle class=\"bx--loading__stroke\" cx=\"0\" cy=\"0\" r=\"37.5\" />\n\t\t\t</svg>\n\t\t</div>\n\t"
                },] },
    ];
    /** @nocollapse */
    Loading.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    Loading.propDecorators = {
        title: [{ type: Input }],
        isActive: [{ type: Input }],
        size: [{ type: Input }],
        overlay: [{ type: Input }, { type: HostBinding, args: ["class.bx--loading-overlay",] }]
    };
    return Loading;
}());
export { Loading };
//# sourceMappingURL=loading.component.js.map