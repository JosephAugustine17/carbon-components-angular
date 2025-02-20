/*!
 *
 * carbon-angular v0.0.0 | header-navigation.component.js
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


import { Component, HostBinding } from "@angular/core";
var HeaderNavigation = /** @class */ (function () {
    function HeaderNavigation() {
        this.height = 100;
    }
    HeaderNavigation.decorators = [
        { type: Component, args: [{
                    selector: "ibm-header-navigation",
                    template: "\n\t\t<nav class=\"bx--header__nav\">\n\t\t\t<ul class=\"bx--header__menu-bar\" role=\"menubar\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</ul>\n\t\t</nav>\n\t"
                },] },
    ];
    HeaderNavigation.propDecorators = {
        height: [{ type: HostBinding, args: ["style.height.%",] }]
    };
    return HeaderNavigation;
}());
export { HeaderNavigation };
//# sourceMappingURL=header-navigation.component.js.map