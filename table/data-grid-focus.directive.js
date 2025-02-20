/*!
 *
 * carbon-angular v0.0.0 | data-grid-focus.directive.js
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


import { Directive, Input, ElementRef, HostListener, Output, EventEmitter } from "@angular/core";
import { Table } from "./table.component";
import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "../common/tab.service";
var DataGridFocus = /** @class */ (function () {
    function DataGridFocus(elementRef) {
        this.elementRef = elementRef;
        this.columnIndexChange = new EventEmitter();
    }
    Object.defineProperty(DataGridFocus.prototype, "columnIndex", {
        get: function () {
            return this._columnIndex;
        },
        set: function (value) {
            var shouldEmit = value !== this._columnIndex;
            this._columnIndex = value;
            if (shouldEmit) {
                this.columnIndexChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DataGridFocus.prototype.focus = function (element) {
        var focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
        if (element.firstElementChild && element.firstElementChild.classList.contains("bx--table-sort-v2")) {
            focusElementList[1].focus();
        }
        else if (focusElementList.length > 0) {
            focusElementList[0].focus();
        }
        else {
            element.focus();
        }
    };
    DataGridFocus.prototype.keyDown = function (event) {
        if (!this.ibmDataGridFocus) {
            return;
        }
        var element = this.elementRef.nativeElement;
        var rows = element.closest("table").rows;
        var closestTr = element.closest("tr");
        var rowIndex = Array.from(rows).indexOf(closestTr);
        var headerRow = rows[0].querySelectorAll("th");
        switch (event.key) {
            case "Right": // IE specific value
            case "ArrowRight":
                var firstBodyRow = rows[1].querySelectorAll("td");
                event.preventDefault();
                if (element.nextElementSibling && Array.from(headerRow).indexOf(element.nextElementSibling) < firstBodyRow.length) {
                    this.columnIndex++;
                    var nextSibling = element.nextElementSibling;
                    Table.setTabIndex(element, -1);
                    Table.setTabIndex(nextSibling, 0);
                    this.focus(nextSibling);
                }
                break;
            case "Left": // IE specific value
            case "ArrowLeft":
                event.preventDefault();
                if (element.previousElementSibling) {
                    this.columnIndex--;
                    var previousSibling = element.previousElementSibling;
                    Table.setTabIndex(element, -1);
                    Table.setTabIndex(previousSibling, 0);
                    this.focus(previousSibling);
                }
                break;
            case "Down": // IE specific value
            case "ArrowDown":
                event.preventDefault();
                if (rowIndex < rows.length - 1) {
                    rowIndex++;
                    var row_1 = rows[rowIndex].querySelectorAll("td");
                    Table.setTabIndex(element, -1);
                    if (rows[rowIndex].classList.contains("bx--expandable-row-v2") && !rows[rowIndex].classList.contains("bx--parent-row-v2")) {
                        Table.setTabIndex(row_1[0], 0);
                        this.focus(row_1[0]);
                    }
                    else {
                        if (this.columnIndex > row_1.length - 1) {
                            this.columnIndex = row_1.length - 1;
                        }
                        Table.setTabIndex(row_1[this.columnIndex], 0);
                        this.focus(row_1[this.columnIndex]);
                    }
                }
                break;
            case "Up": // IE specific value
            case "ArrowUp":
                event.preventDefault();
                if ((rowIndex === 1 && Array.from(headerRow).every(function (th) { return getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length === 0; })) ||
                    rowIndex === 0) {
                    return;
                }
                Table.setTabIndex(element, -1);
                rowIndex--;
                var row = rows[rowIndex].querySelectorAll("td, th");
                if (rows[rowIndex].classList.contains("bx--expandable-row-v2") && !rows[rowIndex].classList.contains("bx--parent-row-v2")) {
                    Table.setTabIndex(row[0], 0);
                    this.focus(row[0]);
                }
                else {
                    if (this.columnIndex > row.length - 1) {
                        this.columnIndex = row.length - 1;
                    }
                    Table.setTabIndex(row[this.columnIndex], 0);
                    this.focus(row[this.columnIndex]);
                }
                break;
            case "Home":
                event.preventDefault();
                this.columnIndex = 0;
                Table.setTabIndex(element, -1);
                if (event.ctrlKey) {
                    if (Array.from(headerRow).some(function (th) { return getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0; })) {
                        Table.setTabIndex(headerRow[0], 0);
                        this.focus(headerRow[0]);
                    }
                    else {
                        var firstBodyCell = rows[1].querySelectorAll("td")[0];
                        Table.setTabIndex(firstBodyCell, 0);
                        this.focus(firstBodyCell);
                    }
                }
                else {
                    var firstRowCell = rows[rowIndex].querySelectorAll("th, td")[0];
                    Table.setTabIndex(firstRowCell, 0);
                    this.focus(firstRowCell);
                }
                break;
            case "End":
                event.preventDefault();
                var lastRow = rows[rows.length - 1].querySelectorAll("td");
                Table.setTabIndex(element, -1);
                if (event.ctrlKey) {
                    this.columnIndex = lastRow.length - 1;
                    Table.setTabIndex(lastRow[this.columnIndex], 0);
                    this.focus(lastRow[this.columnIndex]);
                }
                else {
                    var currentRow = rows[rowIndex].querySelectorAll("th, td");
                    this.columnIndex = currentRow.length - 1;
                    Table.setTabIndex(currentRow[this.columnIndex], 0);
                    this.focus(currentRow[this.columnIndex]);
                }
                break;
        }
    };
    DataGridFocus.prototype.onClick = function () {
        if (!this.ibmDataGridFocus) {
            return;
        }
        var focusElementList = getFocusElementList(this.elementRef.nativeElement.closest("table"), tabbableSelectorIgnoreTabIndex);
        focusElementList.forEach(function (element) { return Table.setTabIndex(element, -1); });
        Table.setTabIndex(this.elementRef.nativeElement, 0);
        this.focus(this.elementRef.nativeElement);
    };
    DataGridFocus.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmDataGridFocus]"
                },] },
    ];
    /** @nocollapse */
    DataGridFocus.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DataGridFocus.propDecorators = {
        ibmDataGridFocus: [{ type: Input }],
        columnIndex: [{ type: Input }],
        columnIndexChange: [{ type: Output }],
        keyDown: [{ type: HostListener, args: ["keydown", ["$event"],] }],
        onClick: [{ type: HostListener, args: ["click", ["$event"],] }]
    };
    return DataGridFocus;
}());
export { DataGridFocus };
//# sourceMappingURL=data-grid-focus.directive.js.map