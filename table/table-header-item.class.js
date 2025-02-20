/*!
 *
 * carbon-angular v0.0.0 | table-header-item.class.js
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


var TableHeaderItem = /** @class */ (function () {
    /**
     * Creates an instance of TableHeaderItem.
     * @param {*} [rawData]
     * @memberof TableHeaderItem
     */
    function TableHeaderItem(rawData) {
        /**
         * Defines if column under this TableHeaderItem should be displayed.
         *
         * @memberof TableHeaderItem
         */
        this.visible = true;
        /**
         * Disables sorting by default.
         *
         * @memberof TableHeaderItem
         */
        this.sorted = false;
        /**
         * Enables sorting on click by default.
         * If false then this column won't show a sorting arrow at all.
         *
         * @memberof TableHeaderItem
         */
        this.sortable = true;
        /**
         * Number of applied filters.
         *
         * `filter()` should set it to appropriate number.
         *
         * @memberof TableHeaderItem
         */
        this.filterCount = 0;
        /**
         * Style for the column, applied to every element in the column.
         *
         * ngStyle-like format
         *
         * @memberof TableHeaderItem
         */
        this.style = {};
        /**
         * used in `ascending`
         *
         * @protected
         * @memberof TableHeaderItem
         */
        this._ascending = true;
        // defaults so we dont leave things empty
        var defaults = {
            data: "",
            visible: this.visible,
            style: this.style,
            filterCount: this.filterCount,
            filterData: { data: "" }
        };
        // fill our object with provided props, and fallback to defaults
        var data = Object.assign({}, defaults, rawData);
        for (var _i = 0, _a = Object.getOwnPropertyNames(data); _i < _a.length; _i++) {
            var property = _a[_i];
            if (data.hasOwnProperty(property)) {
                this[property] = data[property];
            }
        }
    }
    Object.defineProperty(TableHeaderItem.prototype, "ascending", {
        get: function () {
            return this._ascending;
        },
        /**
         * If true, sort is set to ascending, if false descending will be true.
         *
         * @memberof TableHeaderItem
         */
        set: function (asc) {
            this._ascending = asc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeaderItem.prototype, "descending", {
        get: function () {
            return !this._ascending;
        },
        /**
         * If true, sort is set to descending, if false ascending will be true.
         *
         * @memberof TableHeaderItem
         */
        set: function (desc) {
            this._ascending = !desc;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Used for sorting rows of the table.
     *
     * Override to enable different sorting.
     *
     * @param {TableItem} one
     * @param {TableItem} two
     * @returns {number}
     * < 0 if `one` should go before `two`
     * > 0 if `one` shoulg go after `two`
     * 0 if it doesn't matter (they are the same)
     * @memberof TableHeaderItem
     */
    TableHeaderItem.prototype.compare = function (one, two) {
        if (one.data < two.data) {
            return -1;
        }
        else if (one.data > two.data) {
            return 1;
        }
        else {
            return 0;
        }
    };
    /**
     * Used to filter rows in the table.
     *
     * Override to make a custom filter.
     *
     * Even though there is just one filter function, there can be multiple filters.
     * When implementing filter, set `filterCount` before returning.
     *
     * @param {TableItem} item
     * @returns {boolean}
     * `true` to hide the row
     * `false` to show the row
     * @memberof TableHeaderItem
     */
    TableHeaderItem.prototype.filter = function (item) {
        this.filterCount = 0;
        return false;
    };
    return TableHeaderItem;
}());
export { TableHeaderItem };
//# sourceMappingURL=table-header-item.class.js.map