/*!
 *
 * carbon-angular v0.0.0 | text-area.directive.js
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


import { Directive, HostBinding, Input } from "@angular/core";
/**
 * A directive for applying styling to a textarea element.
 *
 * Example:
 *
 * ```html
 * <textarea ibmTextArea></textarea>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
var TextArea = /** @class */ (function () {
    function TextArea() {
        /**
         * `light` or `dark` input theme
         */
        this.theme = "dark";
        this.baseClass = true;
        this.skeleton = false;
    }
    Object.defineProperty(TextArea.prototype, "isLightTheme", {
        get: function () {
            return this.theme === "light";
        },
        enumerable: true,
        configurable: true
    });
    TextArea.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmTextArea]"
                },] },
    ];
    TextArea.propDecorators = {
        theme: [{ type: Input }],
        baseClass: [{ type: HostBinding, args: ["class.bx--text-area",] }],
        skeleton: [{ type: HostBinding, args: ["class.bx--skeleton",] }, { type: Input }],
        isLightTheme: [{ type: HostBinding, args: ["class.bx--text-area--light",] }]
    };
    return TextArea;
}());
export { TextArea };
//# sourceMappingURL=text-area.directive.js.map