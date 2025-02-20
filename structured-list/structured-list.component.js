/*!
 *
 * carbon-angular v0.0.0 | structured-list.component.js
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


import { Component, Input, ContentChildren, QueryList, Output, EventEmitter } from "@angular/core";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/**
 * Structured Lists represent related tabular data. For larger datasets consider a full `Table`.
 *
 * See (structured-list/usage)[https://www.carbondesignsystem.com/components/structured-list/usage] for usage guidance.
 *
 * A basic structued list looks something like:
 * ```html
 *	<ibm-structured-list>
 *		<ibm-list-header>
 *			<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 *			<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 *			<ibm-list-column>Column 3</ibm-list-column>
 *		</ibm-list-header>
 *		<ibm-list-row>
 *			<ibm-list-column>Row 1</ibm-list-column>
 *			<ibm-list-column nowrap="true">Row One</ibm-list-column>
 *			<ibm-list-column>
 *				Lorem ipsum dolor sit amet,
 *				consectetur adipiscing elit. Nunc dui magna,
 *				finibus id tortor sed, aliquet bibendum augue.
 *				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *				Pellentesque vulputate nisl a porttitor interdum.
 *			</ibm-list-column>
 *		</ibm-list-row>
 *		<ibm-list-row>
 *			<ibm-list-column>Row 2</ibm-list-column>
 *			<ibm-list-column nowrap="true">Row Two</ibm-list-column>
 *			<ibm-list-column>
 *				Lorem ipsum dolor sit amet,
 *				consectetur adipiscing elit. Nunc dui magna,
 *				finibus id tortor sed, aliquet bibendum augue.
 *				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *				Pellentesque vulputate nisl a porttitor interdum.
 *			</ibm-list-column>
 *		</ibm-list-row>
 *	</ibm-structured-list>
 * ```
 */
var StructuredList = /** @class */ (function () {
    function StructuredList() {
        /**
         * Set to `true` to enable radio like selection of the rows.
         */
        this.selection = false;
        /**
         * Set to `true` to apply a border and white background.
         */
        this.border = false;
        /**
         * Set to `true` to apply a condensed style to the headers and rows.
         */
        this.condensed = false;
        /**
         * Set to `true` to apply `white-space: nowrap` on _all_ conent.
         */
        this.nowrap = false;
        /**
         * Used when `selection = true` as the row radio group `name`
         */
        this.name = "structured-list-" + StructuredList.listCount++;
        /**
         * Emits an event when the row selection changes.
         *
         * Emits an object that looks like:
         * ```javascript
         * {
         * 	value: "something",
         * 	selected: true,
         * 	name: "structured-list-1"
         * }
         * ```
         */
        this.selected = new EventEmitter();
        this._skeleton = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(StructuredList.prototype, "skeleton", {
        /**
         * Returns the skeleton value in the `StructuredList` if there is one.
         */
        get: function () {
            return this._skeleton;
        },
        /**
         * Sets the skeleton value for all `ListHeader` to the skeleton value of `StructuredList`.
         */
        set: function (value) {
            this._skeleton = value;
            this.updateChildren();
        },
        enumerable: true,
        configurable: true
    });
    StructuredList.prototype.ngAfterContentInit = function () {
        var _this = this;
        var setSelection = function (rowOrHeader) {
            rowOrHeader.selection = _this.selection;
        };
        this.headers.forEach(setSelection);
        this.rows.forEach(function (row) {
            setSelection(row);
            row.name = _this.name;
            row.change.subscribe(function () {
                _this.selected.emit({
                    value: row.value,
                    selected: row.selected,
                    name: _this.name
                });
                _this.onChange(row.value);
            });
        });
        this.updateChildren();
    };
    StructuredList.prototype.writeValue = function (value) {
        if (!this.rows) {
            return;
        }
        this.rows.forEach(function (row) {
            if (row.value === value) {
                row.selected = true;
            }
            else {
                row.selected = false;
            }
        });
    };
    StructuredList.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    StructuredList.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    StructuredList.prototype.updateChildren = function () {
        var _this = this;
        if (this.headers) {
            this.headers.toArray().forEach(function (child) { return child.skeleton = _this.skeleton; });
        }
    };
    /**
     * A counter to provide unique default values.
     */
    StructuredList.listCount = 0;
    StructuredList.decorators = [
        { type: Component, args: [{
                    selector: "ibm-structured-list",
                    template: "\n\t\t<section\n\t\t\tclass=\"bx--structured-list\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--structured-list--border': border,\n\t\t\t\t'bx--structured-list--selection': selection,\n\t\t\t\t'bx--structured-list--condensed': condensed,\n\t\t\t\t'bx--structured-list-content--nowrap': nowrap,\n\t\t\t\t'bx--skeleton': skeleton\n\t\t\t}\">\n\t\t\t<ng-content select=\"ibm-list-header\"></ng-content>\n\t\t\t<div class=\"bx--structured-list-tbody\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</section>\n\t",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: StructuredList,
                            multi: true
                        }
                    ]
                },] },
    ];
    StructuredList.propDecorators = {
        selection: [{ type: Input }],
        border: [{ type: Input }],
        condensed: [{ type: Input }],
        nowrap: [{ type: Input }],
        name: [{ type: Input }],
        skeleton: [{ type: Input }],
        selected: [{ type: Output }],
        rows: [{ type: ContentChildren, args: [ListRow,] }],
        headers: [{ type: ContentChildren, args: [ListHeader,] }]
    };
    return StructuredList;
}());
export { StructuredList };
//# sourceMappingURL=structured-list.component.js.map