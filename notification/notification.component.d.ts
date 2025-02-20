/*!
 *
 * carbon-angular v0.0.0 | notification.component.d.ts
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


import { EventEmitter, ComponentRef } from "@angular/core";
import { NotificationContent } from "./notification-content.interface";
import { I18n } from "./../i18n/i18n.module";
import { NotificationDisplayService } from "./notification-display.service";
/**
 * Notification messages are displayed toward the top of the UI and do not interrupt user’s work.
 */
export declare class Notification {
    protected notificationDisplayService: NotificationDisplayService;
    protected i18n: I18n;
    /**
     * Can have `type`, `title`, and `message` members.
     *
     * `type` can be one of `"info"`, `"warning"`, `"error"`, `"success"`
     *
     * `message` is the message to display
     */
    notificationObj: NotificationContent;
    /**
     * Emits on close.
     */
    close: EventEmitter<any>;
    componentRef: ComponentRef<Notification>;
    notification: any;
    notificationID: string;
    notificationClass: boolean;
    role: string;
    readonly isError: boolean;
    readonly isInfo: boolean;
    readonly isSuccess: boolean;
    readonly isWarning: boolean;
    protected defaultNotificationObj: {
        title: string;
        message: string;
        type: string;
        closeLabel: any;
    };
    protected _notificationObj: NotificationContent;
    constructor(notificationDisplayService: NotificationDisplayService, i18n: I18n);
    /**
     * Emits close event.
     */
    onClose(): void;
    destroy(): void;
}
