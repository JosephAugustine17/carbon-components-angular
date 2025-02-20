/*!
 *
 * carbon-angular v0.0.0 | tabs.module.js
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
import { StaticIconModule } from "./../icon/static-icon.module";
import { Tabs } from "./tabs.component";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";
export { Tabs } from "./tabs.component";
export { Tab } from "./tab.component";
export { TabHeaders } from "./tab-headers.component";
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Tabs,
                        Tab,
                        TabHeaders
                    ],
                    exports: [
                        Tabs,
                        Tab,
                        TabHeaders
                    ],
                    imports: [
                        CommonModule,
                        StaticIconModule
                    ]
                },] },
    ];
    return TabsModule;
}());
export { TabsModule };
//# sourceMappingURL=tabs.module.js.map