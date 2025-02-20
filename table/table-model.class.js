/*!
 *
 * carbon-angular v0.0.0 | table-model.class.js
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


import { EventEmitter } from "@angular/core";
import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";
var TableModel = /** @class */ (function () {
    function TableModel() {
        this.dataChange = new EventEmitter();
        this.rowsSelectedChange = new EventEmitter();
        this.rowsExpandedChange = new EventEmitter();
        /**
         * Set to true when there is no more data to load in the table
         *
         * @type {boolean}
         * @memberof TableModel
         */
        this.isEnd = false;
        /**
         * Set to true when lazy loading to show loading indicator
         *
         * @type {boolean}
         * @memberof TableModel
         */
        this.isLoading = false;
        /**
         * Used in `data`
         *
         * @protected
         * @type {Array<Array<TableItem>>}
         * @memberof TableModel
         */
        this._data = [[]];
    }
    Object.defineProperty(TableModel.prototype, "data", {
        /**
         * Gets the full data.
         *
         * You can use it to alter individual `TableItem`s but if you need to change
         * table structure, use `addRow()` and/or `addColumn()`
         *
         * @readonly
         * @memberof TableModel
         */
        get: function () {
            return this._data;
        },
        /**
         * Sets data of the table.
         *
         * Make sure all rows are the same length to keep the column count accurate.
         *
         * @memberof TableModel
         */
        set: function (newData) {
            if (!newData || (Array.isArray(newData) && newData.length === 0)) {
                newData = [[]];
            }
            this._data = newData;
            // init rowsSelected
            this.rowsSelected = new Array(this._data.length);
            this.rowsExpanded = new Array(this._data.length);
            // init rowsContext
            this.rowsContext = new Array(this._data.length);
            // only create a fresh header if necessary (header doesn't exist or differs in length)
            if (this.header == null || (this.header.length !== this._data[0].length && this._data[0].length > 0)) {
                var header = new Array();
                for (var i = 0; i < this._data[0].length; i++) {
                    header.push(new TableHeaderItem());
                }
                this.header = header;
            }
            this.dataChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableModel.prototype, "totalDataLength", {
        /**
         * Total length of data that table has access to, or the amount manually set
         *
         * @memberof TableModel
         */
        get: function () {
            // if manually set data length
            if (this._totalDataLength && this._totalDataLength >= 0) {
                return this._totalDataLength;
            }
            // if empty dataset
            if (this.data && this.data.length === 1 && this.data[0].length === 0) {
                return 0;
            }
            return this.data.length;
        },
        /**
         * Manually set data length in case the data in the table doesn't
         * correctly reflect all the data that table is to disply.
         *
         * Example: if you have multiple pages of data that table will display
         * but you're loading one at a time.
         *
         * Set to `null` to reset to default behaviour.
         *
         * @memberof TableModel
         */
        set: function (length) {
            this._totalDataLength = length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns how many rows is currently selected
     *
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.selectedRowsCount = function () {
        var count = 0;
        if (this.rowsSelected) {
            this.rowsSelected.forEach(function (rowSelected) {
                if (rowSelected) {
                    count++;
                }
            });
        }
        return count;
    };
    /**
     * Returns how many rows is currently expanded
     *
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.expandedRowsCount = function () {
        var count = 0;
        if (this.rowsExpanded) {
            this.rowsExpanded.forEach(function (rowExpanded) {
                if (rowExpanded) {
                    count++;
                }
            });
        }
        return count;
    };
    /**
     * Returns `index`th row of the table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @returns {Array<TableItem>}
     * @memberof TableModel
     */
    TableModel.prototype.row = function (index) {
        return this.data[this.realRowIndex(index)];
    };
    /**
     * Adds a row to the `index`th row or appends to table if index not provided.
     *
     * If row is shorter than other rows or not provided, it will be padded with
     * empty `TableItem` elements.
     *
     * If row is longer than other rows, others will be extended to match so no data is lost.
     *
     * If called on an empty table with no parameters, it creates a 1x1 table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {Array<TableItem>} row
     * @param {number} [index]
     * @memberof TableModel
     */
    TableModel.prototype.addRow = function (row, index) {
        // if table empty create table with row
        if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
            var newData = new Array();
            newData.push(row ? row : [new TableItem()]); // row or one empty one column row
            this.data = newData;
            return;
        }
        var realRow = row;
        var columnCount = this.data[0].length;
        if (row == null) {
            realRow = new Array();
            for (var i = 0; i < columnCount; i++) {
                realRow.push(new TableItem());
            }
        }
        if (realRow.length < columnCount) {
            // extend the length of realRow
            var difference = columnCount - realRow.length;
            for (var i = 0; i < difference; i++) {
                realRow.push(new TableItem());
            }
        }
        else if (realRow.length > columnCount) {
            // extend the length of header
            var difference = realRow.length - this.header.length;
            for (var j = 0; j < difference; j++) {
                this.header.push(new TableHeaderItem());
            }
            // extend the length of every other row
            for (var i = 0; i < this.data.length; i++) {
                var currentRow = this.data[i];
                difference = realRow.length - currentRow.length;
                for (var j = 0; j < difference; j++) {
                    currentRow.push(new TableItem());
                }
            }
        }
        if (index == null) {
            this.data.push(realRow);
            // update rowsSelected property for length
            this.rowsSelected.push(false);
            // update rowsExpanded property for length
            this.rowsExpanded.push(false);
            // update rowsContext property for length
            this.rowsContext.push(undefined);
        }
        else {
            var ri = this.realRowIndex(index);
            this.data.splice(ri, 0, realRow);
            // update rowsSelected property for length
            this.rowsSelected.splice(ri, 0, false);
            // update rowsExpanded property for length
            this.rowsExpanded.splice(ri, 0, false);
            // update rowsContext property for length
            this.rowsContext.splice(ri, 0, undefined);
        }
        this.dataChange.emit();
    };
    /**
     * Deletes `index`th row.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @memberof TableModel
     */
    TableModel.prototype.deleteRow = function (index) {
        var rri = this.realRowIndex(index);
        this.data.splice(rri, 1);
        this.rowsSelected.splice(rri, 1);
        this.rowsExpanded.splice(rri, 1);
        this.rowsContext.splice(rri, 1);
        this.dataChange.emit();
    };
    TableModel.prototype.hasExpandableRows = function () {
        return this.data.some(function (data) { return data.some(function (d) { return d.expandedData; }); }); // checking for some in 2D array
    };
    TableModel.prototype.isRowExpandable = function (index) {
        return this.data[index].some(function (d) { return d.expandedData; });
    };
    /**
     * Returns `index`th column of the table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @returns {Array<TableItem>}
     * @memberof TableModel
     */
    TableModel.prototype.column = function (index) {
        var column = new Array();
        var ri = this.realColumnIndex(index);
        var rc = this.data.length;
        for (var i = 0; i < rc; i++) {
            var row = this.data[i];
            column.push(row[ri]);
        }
        return column;
    };
    /**
     * Adds a column to the `index`th column or appends to table if index not provided.
     *
     * If column is shorter than other columns or not provided, it will be padded with
     * empty `TableItem` elements.
     *
     * If column is longer than other columns, others will be extended to match so no data is lost.
     *
     * If called on an empty table with no parameters, it creates a 1x1 table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {Array<TableItem>} column
     * @param {number} [index]
     * @memberof TableModel
     */
    TableModel.prototype.addColumn = function (column, index) {
        // if table empty create table with row
        if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
            var newData = new Array();
            if (column == null) {
                newData.push([new TableItem()]);
            }
            else {
                for (var i = 0; i < column.length; i++) {
                    var item = column[i];
                    newData.push([item]);
                }
            }
            this.data = newData;
            return;
        }
        var rc = this.data.length; // row count
        var ci = this.realColumnIndex(index);
        // append missing rows
        for (var i = 0; column != null && i < column.length - rc; i++) {
            this.addRow();
        }
        rc = this.data.length;
        if (index == null) {
            // append to end
            for (var i = 0; i < rc; i++) {
                var row = this.data[i];
                row.push(column == null || column[i] == null ? new TableItem() : column[i]);
            }
            // update header if not already set by user
            if (this.header.length < this.data[0].length) {
                this.header.push(new TableHeaderItem());
            }
        }
        else {
            if (index >= this.data[0].length) {
                // if trying to append
                ci++;
            }
            // insert
            for (var i = 0; i < rc; i++) {
                var row = this.data[i];
                row.splice(ci, 0, column == null || column[i] == null ? new TableItem() : column[i]);
            }
            // update header if not already set by user
            if (this.header.length < this.data[0].length) {
                this.header.splice(ci, 0, new TableHeaderItem());
            }
        }
        this.dataChange.emit();
    };
    /**
     * Deletes `index`th column.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @memberof TableModel
     */
    TableModel.prototype.deleteColumn = function (index) {
        var rci = this.realColumnIndex(index);
        var rowCount = this.data.length;
        for (var i = 0; i < rowCount; i++) {
            this.data[i].splice(rci, 1);
        }
        // update header if not already set by user
        if (this.header.length > this.data[0].length) {
            this.header.splice(rci, 1);
        }
        this.dataChange.emit();
    };
    TableModel.prototype.moveColumn = function (indexFrom, indexTo) {
        var headerFrom = this.header[indexFrom];
        this.addColumn(this.column(indexFrom), indexTo);
        this.deleteColumn(indexFrom + (indexTo < indexFrom ? 1 : 0));
        this.header[indexTo + (indexTo > indexFrom ? -1 : 0)] = headerFrom;
    };
    /**
     * Sorts the data currently present in the model based on `compare()`
     *
     * Direction is set by `ascending` and `descending` properties of `TableHeaderItem`
     * in `index`th column.
     *
     * @param {number} index The column based on which it's sorting
     * @memberof TableModel
     */
    TableModel.prototype.sort = function (index) {
        var _this = this;
        this.pushRowStateToModelData();
        this.data.sort(function (a, b) { return (_this.header[index].descending ? -1 : 1) * _this.header[index].compare(a[index], b[index]); });
        this.popRowStateFromModelData();
        this.header.forEach(function (column) { return column.sorted = false; });
        this.header[index].sorted = true;
    };
    /**
     * Appends `rowsSelected` and `rowsExpanded` info to model data.
     *
     * When sorting rows, do this first so information about row selection
     * gets sorted with the other row info.
     *
     * Call `popRowSelectionFromModelData()` after sorting to make everything
     * right with the world again.
     *
     * @memberof TableModel
     */
    TableModel.prototype.pushRowStateToModelData = function () {
        for (var i = 0; i < this.data.length; i++) {
            var rowSelectedMark = new TableItem();
            rowSelectedMark.data = this.rowsSelected[i];
            this.data[i].push(rowSelectedMark);
            var rowExpandedMark = new TableItem();
            rowExpandedMark.data = this.rowsExpanded[i];
            this.data[i].push(rowExpandedMark);
            var rowContext = new TableItem();
            rowContext.data = this.rowsContext[i];
            this.data[i].push(rowContext);
        }
    };
    /**
     * Restores `rowsSelected` from data pushed by `pushRowSelectionToModelData()`
     *
     * Call after sorting data (if you previously pushed to maintain selection order)
     * to make everything right with the world again.
     *
     * @memberof TableModel
     */
    TableModel.prototype.popRowStateFromModelData = function () {
        for (var i = 0; i < this.data.length; i++) {
            this.rowsContext[i] = this.data[i].pop().data;
            this.rowsExpanded[i] = !!this.data[i].pop().data;
            this.rowsSelected[i] = !!this.data[i].pop().data;
        }
    };
    /**
     * Checks if row is filtered out.
     *
     * @param {number} index
     * @returns {boolean} true if any of the filters in header filters out the `index`th row
     * @memberof TableModel
     */
    TableModel.prototype.isRowFiltered = function (index) {
        var _this = this;
        var ind = this.realRowIndex(index);
        return this.header.some(function (item, i) { return item.filter(_this.row(ind)[i]); });
    };
    /**
     * Select/deselect `index`th row based on value
     *
     * @param index
     * @param value
     */
    TableModel.prototype.selectRow = function (index, value) {
        if (value === void 0) { value = true; }
        this.rowsSelected[index] = value;
        this.rowsSelectedChange.emit(index);
    };
    /**
     * Expands/Collapses `index`th row based on value
     *
     * @param index
     * @param value
     */
    TableModel.prototype.expandRow = function (index, value) {
        if (value === void 0) { value = true; }
        this.rowsExpanded[index] = value;
        this.rowsExpandedChange.emit(index);
    };
    /**
     * Gets the true index of a row based on it's relative position.
     * Like in Python, positive numbers start from the top and
     * negative numbers start from the bottom.
     *
     * @protected
     * @param {number} index
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.realRowIndex = function (index) {
        return this.realIndex(index, this.data.length);
    };
    /**
     * Gets the true index of a column based on it's relative position.
     * Like in Python, positive numbers start from the top and
     * negative numbers start from the bottom.
     *
     * @protected
     * @param {number} index
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.realColumnIndex = function (index) {
        return this.realIndex(index, this.data[0].length);
    };
    /**
     * Generic function to calculate the real index of something.
     * Used by `realRowIndex()` and `realColumnIndex()`
     *
     * @protected
     * @param {number} index
     * @param {number} length
     * @returns {number}
     * @memberof TableModel
     */
    TableModel.prototype.realIndex = function (index, length) {
        if (index == null) {
            return length - 1;
        }
        else if (index >= 0) {
            return index >= length ? length - 1 : index;
        }
        else {
            return -index >= length ? 0 : length + index;
        }
    };
    return TableModel;
}());
export { TableModel };
//# sourceMappingURL=table-model.class.js.map