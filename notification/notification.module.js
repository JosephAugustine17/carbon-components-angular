/*!
 *
 * carbon-angular v0.0.0 | notification.module.js
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
import { Toast } from "./toast.component";
import { Notification } from "./notification.component";
import { NotificationService } from "./notification.service";
import { NotificationDisplayService } from "./notification-display.service";
import { I18nModule } from "./../i18n/i18n.module";
import { ExperimentalModule } from "./../experimental.module";
export { NotificationService } from "./notification.service";
export { NotificationDisplayService } from "./notification-display.service";
export { Notification } from "./notification.component";
export { Toast } from "./toast.component";
var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Notification,
                        Toast
                    ],
                    exports: [
                        Notification,
                        Toast
                    ],
                    entryComponents: [Notification, Toast],
                    imports: [
                        CommonModule,
                        StaticIconModule,
                        I18nModule,
                        ExperimentalModule
                    ],
                    providers: [NotificationService, NotificationDisplayService]
                },] },
    ];
    return NotificationModule;
}());
export { NotificationModule };
//# sourceMappingURL=notification.module.js.map