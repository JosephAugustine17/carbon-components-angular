/*!
 *
 * carbon-angular v0.0.0 | accordion.component.js
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


import { Component, Input, ContentChildren, QueryList } from "@angular/core";
import { AccordionItem } from "./accordion-item.component";
var Accordion = /** @class */ (function () {
    function Accordion() {
        this._skeleton = false;
    }
    Object.defineProperty(Accordion.prototype, "skeleton", {
        get: function () {
            return this._skeleton;
        },
        set: function (value) {
            this._skeleton = value;
            this.updateChildren();
        },
        enumerable: true,
        configurable: true
    });
    Accordion.prototype.ngAfterContentInit = function () {
        this.updateChildren();
    };
    Accordion.prototype.updateChildren = function () {
        var _this = this;
        if (this.children) {
            this.children.toArray().forEach(function (child) { return child.skeleton = _this.skeleton; });
        }
    };
    Accordion.decorators = [
        { type: Component, args: [{
                    selector: "ibm-accordion",
                    template: "\n\t\t<ul class=\"bx--accordion\">\n\t\t\t<ng-content></ng-content>\n\t\t</ul>\n\t"
                },] },
    ];
    Accordion.propDecorators = {
        children: [{ type: ContentChildren, args: [AccordionItem,] }],
        skeleton: [{ type: Input }]
    };
    return Accordion;
}());
export { Accordion };
//# sourceMappingURL=accordion.component.js.map