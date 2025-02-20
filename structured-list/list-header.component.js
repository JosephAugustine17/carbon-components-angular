/*!
 *
 * carbon-angular v0.0.0 | list-header.component.js
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


import { Component, HostBinding, ContentChildren, QueryList, Input } from "@angular/core";
import { ListColumn } from "./list-column.component";
/**
 * `ListHeader` provides a container for the `ListColumn`s that make up the header of a structured list.
 *
 * Example:
 * ```html
 * 	<ibm-list-header>
 *		<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 *		<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 *		<ibm-list-column>Column 3</ibm-list-column>
 *	</ibm-list-header>
 * ```
 */
var ListHeader = /** @class */ (function () {
    function ListHeader() {
        this.wrapper = true;
        /**
         * Set by the containing `StructuredList`. Adds a dummy header for the selection column when set to true.
         */
        this.selection = false;
        this._skeleton = false;
    }
    Object.defineProperty(ListHeader.prototype, "skeleton", {
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
    ListHeader.prototype.ngAfterContentInit = function () {
        this.columns.forEach(function (column) {
            column.isBodyColumn = false;
            column.isHeaderColumn = true;
        });
        this.updateChildren();
    };
    ListHeader.prototype.updateChildren = function () {
        var _this = this;
        if (this.columns) {
            this.columns.toArray().forEach(function (child) { return child.skeleton = _this.skeleton; });
        }
    };
    ListHeader.decorators = [
        { type: Component, args: [{
                    selector: "ibm-list-header",
                    template: "\n\t\t<div class=\"bx--structured-list-row bx--structured-list-row--header-row\">\n\t\t\t<div *ngIf=\"selection\" class=\"bx--structured-list-th\"></div>\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
                },] },
    ];
    ListHeader.propDecorators = {
        wrapper: [{ type: HostBinding, args: ["class.bx--structured-list-thead",] }],
        skeleton: [{ type: Input }],
        columns: [{ type: ContentChildren, args: [ListColumn,] }]
    };
    return ListHeader;
}());
export { ListHeader };
//# sourceMappingURL=list-header.component.js.map