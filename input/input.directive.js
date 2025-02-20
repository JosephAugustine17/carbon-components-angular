/*!
 *
 * carbon-angular v0.0.0 | input.directive.js
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
 * A directive for applying styling to an input element.
 *
 * Example:
 *
 * ```html
 * <input ibmText/>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
var TextInput = /** @class */ (function () {
    function TextInput() {
        /**
         * `light` or `dark` input theme
         */
        this.theme = "dark";
        this.inputClass = true;
        this.skeleton = false;
    }
    Object.defineProperty(TextInput.prototype, "isLightTheme", {
        get: function () {
            return this.theme === "light";
        },
        enumerable: true,
        configurable: true
    });
    TextInput.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmText]"
                },] },
    ];
    TextInput.propDecorators = {
        theme: [{ type: Input }],
        inputClass: [{ type: HostBinding, args: ["class.bx--text-input",] }],
        skeleton: [{ type: HostBinding, args: ["class.bx--skeleton",] }, { type: Input }],
        isLightTheme: [{ type: HostBinding, args: ["class.bx--text-input--light",] }]
    };
    return TextInput;
}());
export { TextInput };
//# sourceMappingURL=input.directive.js.map