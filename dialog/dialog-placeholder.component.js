/*!
 *
 * carbon-angular v0.0.0 | dialog-placeholder.component.js
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
import { PlaceholderService } from "./../placeholder/placeholder.module";
/**
 * Deprecated as of v2.0, will be removed with v3.0
 * Using a dialog (popover, tooltip, etc) with appendToBody="true" in your application
 * requires *this* component (`n-dialog-placeholder`).
 * It would generally be placed near the end of your app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```html
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * A more complete example for `Popover` is given as follows:
 *
 * ```html
 * <button [ibmPopover]="Hello" appendToBody="true"></button>
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * @deprecated
 */
var DialogPlaceholder = /** @class */ (function () {
    /**
     * Creates an instance of `DialogPlaceholder`.
     */
    function DialogPlaceholder(placeholderService) {
        this.placeholderService = placeholderService;
    }
    /**
     * Initializes the component using `PlaceholderService`.
     */
    DialogPlaceholder.prototype.ngOnInit = function () {
        console.warn("`ibm-dialog-placeholder` has been deprecated in favour of `ibm-placeholder`");
        this.placeholderService.registerViewContainerRef(this.viewContainerRef);
    };
    DialogPlaceholder.decorators = [
        { type: Component, args: [{
                    selector: "ibm-dialog-placeholder",
                    template: "<div #dialogPlaceholder></div>"
                },] },
    ];
    /** @nocollapse */
    DialogPlaceholder.ctorParameters = function () { return [
        { type: PlaceholderService }
    ]; };
    DialogPlaceholder.propDecorators = {
        viewContainerRef: [{ type: ViewChild, args: ["dialogPlaceholder", { read: ViewContainerRef },] }]
    };
    return DialogPlaceholder;
}());
export { DialogPlaceholder };
//# sourceMappingURL=dialog-placeholder.component.js.map