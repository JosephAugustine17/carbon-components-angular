/*!
 *
 * carbon-angular v0.0.0 | dropdown.module.js
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
import { StaticIconModule } from "./../icon/static-icon.module";
import { Dropdown } from "./dropdown.component";
import { DropdownList } from "./list/dropdown-list.component";
import { ScrollableList } from "./scrollable-list.directive";
import { I18nModule } from "./../i18n/i18n.module";
import { PlaceholderModule } from "./../placeholder/placeholder.module";
import { DropdownService } from "./dropdown.service";
export { Dropdown } from "./dropdown.component";
export { DropdownList } from "./list/dropdown-list.component";
export { ScrollableList } from "./scrollable-list.directive";
export { AbstractDropdownView } from "./abstract-dropdown-view.class";
export { DropdownService } from "./dropdown.service";
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Dropdown,
                        DropdownList,
                        ScrollableList
                    ],
                    exports: [
                        Dropdown,
                        DropdownList,
                        ScrollableList
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        StaticIconModule,
                        I18nModule,
                        PlaceholderModule
                    ],
                    providers: [DropdownService]
                },] },
    ];
    return DropdownModule;
}());
export { DropdownModule };
//# sourceMappingURL=dropdown.module.js.map