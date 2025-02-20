/*!
 *
 * carbon-angular v0.0.0 | header-action.component.js
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


import { Component, Input } from "@angular/core";
var HeaderAction = /** @class */ (function () {
    function HeaderAction() {
    }
    HeaderAction.decorators = [
        { type: Component, args: [{
                    selector: "ibm-header-action",
                    template: "\n\t\t<button\n\t\t\tclass=\"bx--header__action\"\n\t\t\t[attr.aria-label]=\"title\"\n\t\t\t[title]=\"title\">\n\t\t\t<ng-content></ng-content>\n\t\t</button>\n\t"
                },] },
    ];
    HeaderAction.propDecorators = {
        title: [{ type: Input }]
    };
    return HeaderAction;
}());
export { HeaderAction };
//# sourceMappingURL=header-action.component.js.map