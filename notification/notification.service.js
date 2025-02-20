/*!
 *
 * carbon-angular v0.0.0 | notification.service.js
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


import { ApplicationRef, ComponentFactoryResolver, EventEmitter, Injectable, Injector } from "@angular/core";
import { Notification } from "./notification.component";
import { Toast } from "./toast.component";
/**
 * Provides a way to use the notification component.
 *
 * Notifications are displayed toward the top of the UI and do not interrupt the user’s work.
 *
 * @export
 * @class NotificationService
 */
var NotificationService = /** @class */ (function () {
    /**
     * Constructs NotificationService.
     *
     * @param {Injector} injector
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {ApplicationRef} applicationRef
     */
    function NotificationService(injector, componentFactoryResolver, applicationRef) {
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        /**
         * An array containing `ComponentRef`s to all the notifications this service instance
         * is responsible for.
         *
         */
        this.notificationRefs = new Array();
        this.onClose = new EventEmitter();
    }
    /**
     * Shows the notification based on the `notificationObj`.
     *
     * @param {any} notificationObj Can have `type`, `message`, `target`, `duration` and `smart` members.
     *
     * **Members:**
     *
     * * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     * * `message` is message for notification to display
     * * `target` is css selector defining an element to append notification to. If not provided,
     * `showNotification()` creates a place for the notification in `body`
     * * `duration` is number of ms to close the notification after. If used in combination with `smart`,
     * it's added to the calculated timeout
     * * `smart`, set to `true` if you want to use smart notification.
     *
     * **Example:**
     * ```typescript
     * // Info notification, saying "Sample message." added to the element with id notification-container
     * // uses smart timeout with added duration of 1 second.
     * {
     *	type: "info",
     *	message: "Sample message.",
     *	target: "#notification-container",
     *	duration: 1000,
     *	smart: true
     * }
     * ```
     *
     * @param {any} [notificationComp=Notification] If provided, used to resolve component factory
     */
    NotificationService.prototype.showNotification = function (notificationObj, notificationComp) {
        var _this = this;
        if (notificationComp === void 0) { notificationComp = Notification; }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(notificationComp);
        var notificationRef = componentFactory.create(this.injector);
        notificationRef.instance.notificationObj = notificationObj; // typescript isn't being very smart here, so we type to any
        this.notificationRefs.push(notificationRef);
        this.onClose = notificationRef.instance.close;
        this.applicationRef.attachView(notificationRef.hostView);
        if (notificationObj.target) {
            document.querySelector(notificationObj.target).appendChild(notificationRef.location.nativeElement);
        }
        else {
            var body = document.querySelector("body");
            // get or create a container for alert list
            var notificationClassName = "notification-overlay";
            var notificationList = body.querySelector("." + notificationClassName);
            if (!notificationList) {
                notificationList = document.createElement("div");
                notificationList.className = notificationClassName;
                body.appendChild(notificationList);
            }
            // add the notification to the top of the list
            if (notificationList.firstChild) {
                notificationList.insertBefore(notificationRef.location.nativeElement, notificationList.firstChild);
            }
            else {
                notificationList.appendChild(notificationRef.location.nativeElement);
            }
        }
        if (notificationObj.duration && notificationObj.duration > 0) {
            setTimeout(function () {
                _this.close(notificationRef);
            }, notificationObj.duration);
        }
        if (notificationObj.smart) {
            // let it disappear after calculated timeout
            setTimeout(function () {
                _this.close(notificationRef);
            }, this.getSmartTimeout(notificationObj));
        }
        this.onClose.subscribe(function () {
            _this.close(notificationRef);
        });
        notificationRef.instance.componentRef = notificationRef;
        return notificationRef.instance;
    };
    NotificationService.prototype.showToast = function (notificationObj, notificationComp) {
        if (notificationComp === void 0) { notificationComp = Toast; }
        return this.showNotification(notificationObj, notificationComp);
    };
    /**
     * Programatically closes notification based on `notificationRef`.
     *
     * @param notificationRef `ComponentRef` of a notification or `Notification` component you wish to close
     */
    NotificationService.prototype.close = function (notificationRef) {
        var _this = this;
        if (notificationRef) {
            if (notificationRef instanceof Notification) {
                this.close(notificationRef.componentRef);
            }
            else {
                setTimeout(function () {
                    _this.applicationRef.detachView(notificationRef.hostView);
                    notificationRef.destroy();
                }, 200);
            }
        }
    };
    /**
     * Calculates the amount of time user needs to read the message in the notification.
     *
     * @param {any} notificationObj Same object used to instantiate notification.
     *
     * In addition to `type` and `message` members, use `duration` member to add
     * some extra time (in ms) to timeout if you need to.
     * @returns {number} calculated timeout (in ms) for smart notification
     */
    NotificationService.prototype.getSmartTimeout = function (notificationObj) {
        // calculate timeout
        var timeout = 600; // start with reaction time
        // custom duration
        timeout += notificationObj.duration || 0;
        // message type
        switch (notificationObj.type) {
            case "info":
            case "success":
            default: {
                break;
            }
            case "danger": {
                timeout += 3000;
                break;
            }
            case "warning": {
                timeout += 1500;
                break;
            }
        }
        // message length
        // average reader reads around 200 words per minute, or it takes them ~0.3s per word
        // let's use 1.5 factor for below average speed readers and have 0.45s per word
        var wordCount = notificationObj.message.trim().split(/\s+/).length;
        timeout += wordCount * 450;
        return timeout;
    };
    /**
     * OnDestroy hook.
     *
     * Destroys all living notifications it is responsible for.
     *
     */
    NotificationService.prototype.ngOnDestroy = function () {
        if (this.notificationRefs.length > 0) {
            for (var i = 0; i < this.notificationRefs.length; i++) {
                var notificationRef = this.notificationRefs[i];
                this.applicationRef.detachView(notificationRef.hostView);
                notificationRef.destroy();
            }
            this.notificationRefs.length = 0;
        }
    };
    NotificationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NotificationService.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    return NotificationService;
}());
export { NotificationService };
//# sourceMappingURL=notification.service.js.map