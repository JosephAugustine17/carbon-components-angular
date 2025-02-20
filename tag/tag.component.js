/*!
 *
 * carbon-angular v0.0.0 | tag.component.js
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
/**
 * Component that represents a tag for labelling/categorizing using keywords
 */
var Tag = /** @class */ (function () {
    function Tag() {
        /**
         * type of the tag determines the styling
         *
         * Reference `TagType` for v9 applications, and `TagTypeExperimental` for v10/v9 experimental mode applications
         */
        this.type = "ibm";
        this.class = "";
    }
    Object.defineProperty(Tag.prototype, "attrClass", {
        get: function () {
            return "bx--tag bx--tag--" + this.type + " " + this.class;
        },
        enumerable: true,
        configurable: true
    });
    Tag.decorators = [
        { type: Component, args: [{
                    selector: "ibm-tag",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    Tag.propDecorators = {
        type: [{ type: Input }],
        class: [{ type: Input }],
        attrClass: [{ type: HostBinding, args: ["attr.class",] }]
    };
    return Tag;
}());
export { Tag };
//# sourceMappingURL=tag.component.js.map