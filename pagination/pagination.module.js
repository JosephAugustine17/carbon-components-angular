/*!
 *
 * carbon-angular v0.0.0 | pagination.module.js
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
import { FormsModule } from "@angular/forms";
import { Pagination } from "./pagination.component";
import { I18nModule } from "./../i18n/i18n.module";
import { ExperimentalModule } from "./../experimental.module";
export { PaginationModel } from "./pagination-model.class";
export { Pagination } from "./pagination.component";
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Pagination
                    ],
                    exports: [
                        Pagination
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        I18nModule,
                        ExperimentalModule
                    ]
                },] },
    ];
    return PaginationModule;
}());
export { PaginationModule };
//# sourceMappingURL=pagination.module.js.map