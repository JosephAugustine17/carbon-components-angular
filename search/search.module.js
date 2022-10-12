/*!
 *
 * carbon-angular v0.0.0 | search.module.js
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


// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
// imports
import { I18nModule } from "../i18n/i18n.module";
import { Search } from "./search.component";
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Search
                    ],
                    exports: [
                        Search
                    ],
                    imports: [
                        FormsModule,
                        CommonModule,
                        I18nModule
                    ]
                },] },
    ];
    return SearchModule;
}());
export { SearchModule };
export { Search };
//# sourceMappingURL=search.module.js.map