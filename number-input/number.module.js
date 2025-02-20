/*!
 *
 * carbon-angular v0.0.0 | number.module.js
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
import { Number } from "./number.component";
var NumberModule = /** @class */ (function () {
    function NumberModule() {
    }
    NumberModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Number
                    ],
                    exports: [
                        Number
                    ],
                    imports: [
                        FormsModule,
                        CommonModule
                    ]
                },] },
    ];
    return NumberModule;
}());
export { NumberModule };
export { Number };
//# sourceMappingURL=number.module.js.map