/*!
 *
 * carbon-angular v0.0.0 | structured-list.module.js
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


import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StructuredList } from "./structured-list.component";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ListColumn } from "./list-column.component";
var StructuredListModule = /** @class */ (function () {
    function StructuredListModule() {
    }
    StructuredListModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        StructuredList,
                        ListRow,
                        ListHeader,
                        ListColumn
                    ],
                    exports: [
                        StructuredList,
                        ListRow,
                        ListHeader,
                        ListColumn
                    ],
                    imports: [CommonModule]
                },] },
    ];
    return StructuredListModule;
}());
export { StructuredListModule, StructuredList, ListRow, ListHeader, ListColumn };
//# sourceMappingURL=structured-list.module.js.map