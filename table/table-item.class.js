/*!
 *
 * carbon-angular v0.0.0 | table-item.class.js
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


var TableItem = /** @class */ (function () {
    /**
     * Creates an instance of TableItem.
     * @param {*} [rawData]
     * @memberof TableItem
     */
    function TableItem(rawData) {
        // defaults so we dont leave things empty
        var defaults = {
            data: ""
        };
        // fill our object with provided props, and fallback to defaults
        var data = Object.assign({}, defaults, rawData);
        this.data = data.data;
        this.expandedData = data.expandedData;
        this.template = data.template;
        this.expandedTemplate = data.expandedTemplate;
    }
    return TableItem;
}());
export { TableItem };
//# sourceMappingURL=table-item.class.js.map