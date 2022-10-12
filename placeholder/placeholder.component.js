/*!
 *
 * carbon-angular v0.0.0 | placeholder.component.js
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


import { Component, ViewContainerRef, ViewChild } from "@angular/core";
import { PlaceholderService } from "./placeholder.service";
/**
 * Using a modal, dialog (Tooltip, OverflowMenu), or any other component that draws out of the normal page flow
 * in your application *requires* this component (`ibm-placeholder`).
 * It would generally be placed near the end of your root app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```
 * <ibm-placeholder></ibm-placeholder>
 * ```
 */
var Placeholder = /** @class */ (function () {
    /**
     * Creates an instance of `Placeholder`.
     */
    function Placeholder(placeholderService) {
        this.placeholderService = placeholderService;
    }
    /**
     * Registers the components view with `PlaceholderService`
     */
    Placeholder.prototype.ngOnInit = function () {
        this.placeholderService.registerViewContainerRef(this.viewContainerRef);
    };
    Placeholder.decorators = [
        { type: Component, args: [{
                    selector: "ibm-placeholder",
                    template: "<div #placeholder></div>"
                },] },
    ];
    /** @nocollapse */
    Placeholder.ctorParameters = function () { return [
        { type: PlaceholderService }
    ]; };
    Placeholder.propDecorators = {
        viewContainerRef: [{ type: ViewChild, args: ["placeholder", { read: ViewContainerRef },] }]
    };
    return Placeholder;
}());
export { Placeholder };
//# sourceMappingURL=placeholder.component.js.map