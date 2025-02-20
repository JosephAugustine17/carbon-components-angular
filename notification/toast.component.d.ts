/*!
 *
 * carbon-angular v0.0.0 | toast.component.d.ts
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


import { OnInit } from "@angular/core";
import { ToastContent } from "./notification-content.interface";
import { Notification } from "./notification.component";
import { ExperimentalService } from "./../experimental.module";
import { NotificationDisplayService } from "./notification-display.service";
import { I18n } from "./../i18n/i18n.module";
/**
 * Toast messages are displayed toward the top of the UI and do not interrupt user’s work.
 */
export declare class Toast extends Notification implements OnInit {
    protected notificationDisplayService: NotificationDisplayService;
    protected i18n: I18n;
    protected experimental: ExperimentalService;
    /**
     * Can have `type`, `title`, `subtitle`, and `caption` members.
     *
     * `type` can be one of `"error"`, `"info"`, `"warning"`, or `"success"`
     */
    notificationObj: ToastContent;
    toastID: string;
    toastClass: boolean;
    role: string;
    readonly isError: boolean;
    readonly isInfo: boolean;
    readonly isSuccess: boolean;
    readonly isWarning: boolean;
    readonly isExperimental: boolean;
    constructor(notificationDisplayService: NotificationDisplayService, i18n: I18n, experimental: ExperimentalService);
    ngOnInit(): void;
}
