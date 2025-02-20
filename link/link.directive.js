/*!
 *
 * carbon-angular v0.0.0 | link.directive.js
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
 * A convinence directive for applying styling to a link.
 *
 * Example:
 *
 * ```hmtl
 * <a href="#" ibmLink>A link</a>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/link/code) for more detail.
 */
var Link = /** @class */ (function () {
    function Link() {
        this.baseClass = true;
    }
    Object.defineProperty(Link.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * Set to true to disable link.
         * @memberof Link
         */
        set: function (disabled) {
            this._disabled = disabled;
            this.tabindex = this.disabled ? -1 : null;
        },
        enumerable: true,
        configurable: true
    });
    Link.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmLink]"
                },] },
    ];
    Link.propDecorators = {
        baseClass: [{ type: HostBinding, args: ["class.bx--link",] }],
        tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
        disabled: [{ type: Input }, { type: HostBinding, args: ["attr.aria-disabled",] }]
    };
    return Link;
}());
export { Link };
//# sourceMappingURL=link.directive.js.map