/*!
 *
 * carbon-angular v0.0.0 | abstract-dropdown-view.class.js
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


import { Input, Output, EventEmitter } from "@angular/core";
/**
 * A component that intends to be used within `Dropdown` must provide an implementation that extends this base class.
 * It also must provide the base class in the `@Component` meta-data.
 * ex: `providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => MyDropdownView)}]`
 */
var AbstractDropdownView = /** @class */ (function () {
    function AbstractDropdownView() {
        /**
         * Specifies whether or not the `DropdownList` supports selecting multiple items as opposed to single
         * item selection.
         */
        this.type = "single";
        /**
         * Specifies the render size of the items within the `AbstractDropdownView`.
         */
        this.size = "md";
    }
    Object.defineProperty(AbstractDropdownView.prototype, "items", {
        get: function () { return; },
        /**
         * The items to be displayed in the list within the `AbstractDropDownView`.
         */
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     */
    AbstractDropdownView.prototype.getNextItem = function () { return; };
    /**
     * Returns a boolean if the currently selected item is preceded by another
     */
    AbstractDropdownView.prototype.hasNextElement = function () { return; };
    /**
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     */
    AbstractDropdownView.prototype.getNextElement = function () { return; };
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     */
    AbstractDropdownView.prototype.getPrevItem = function () { return; };
    /**
     * Returns a boolean if the currently selected item is followed by another
     */
    AbstractDropdownView.prototype.hasPrevElement = function () { return; };
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     */
    AbstractDropdownView.prototype.getPrevElement = function () { return; };
    /**
     * Returns the selected leaf level item(s) within the `DropdownList`.
     */
    AbstractDropdownView.prototype.getSelected = function () { return; };
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     */
    AbstractDropdownView.prototype.getCurrentItem = function () { return; };
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     */
    AbstractDropdownView.prototype.getCurrentElement = function () { return; };
    /**
     * Guaranteed to return the current items as an Array.
     */
    AbstractDropdownView.prototype.getListItems = function () { return; };
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     */
    AbstractDropdownView.prototype.propagateSelected = function (value) { };
    /**
     *
     * @param value value to filter the list by
     */
    AbstractDropdownView.prototype.filterBy = function (value) { };
    /**
     * Initializes focus in the list
     * In most cases this just calls `getCurrentElement().focus()`
     */
    AbstractDropdownView.prototype.initFocus = function () { };
    /**
     * Resets all selected items
     */
    AbstractDropdownView.prototype.resetSelected = function () { };
    AbstractDropdownView.propDecorators = {
        items: [{ type: Input }],
        select: [{ type: Output }],
        blurIntent: [{ type: Output }]
    };
    return AbstractDropdownView;
}());
export { AbstractDropdownView };
//# sourceMappingURL=abstract-dropdown-view.class.js.map