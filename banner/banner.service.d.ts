/*!
 *
 * carbon-angular v0.0.0 | banner.service.d.ts
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


import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { BannerContent, NotificationContent, ToastContent } from "./banner-content.interface";
import { Banner } from "./banner.module";
import { Toast } from "./toast.component";
/**
 * Deprecated in favour of `NotificationService` (to be removed in v3.0).
 * Provides a way to use the banner component.
 *
 * Banners are displayed toward the top of the UI and do not interrupt the user’s work.
 *
 * @export
 * @class BannerService
 * @deprecated
 */
export declare class BannerService implements OnDestroy {
    protected injector: Injector;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected applicationRef: ApplicationRef;
    /**
     * An array containing `ComponentRef`s to all the banners this service instance
     * is responsible for.
     *
     * @memberof BannerService
     */
    bannerRefs: ComponentRef<any>[];
    onClose: EventEmitter<any>;
    /**
     * Constructs BannerService.
     *
     * @param {Injector} injector
     * @param {ComponentFactoryResolver} componentFactoryResolver
     * @param {ApplicationRef} applicationRef
     * @memberof BannerService
     */
    constructor(injector: Injector, componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef);
    /**
     * Shows the banner based on the `bannerObj`.
     *
     * @param {any} bannerObj Can have `type`, `message`, `target`, `duration` and `smart` members.
     *
     * **Members:**
     *
     * * `type` can be one of `"info"`, `"warning"`, `"danger"`, `"success"`
     * * `message` is message for banner to display
     * * `target` is css selector defining an element to append banner to. If not provided,
     * `showBanner()` creates a place for the banner in `body`
     * * `duration` is number of ms to close the banner after. If used in combination with `smart`,
     * it's added to the calculated timeout
     * * `smart`, set to `true` if you want to use smart banner.
     *
     * **Example:**
     * ```typescript
     * // Info banner, saying "Sample message." added to the element with id banner-container
     * // uses smart timeout with added duration of 1 second.
     * {
     *	type: "info",
     *	message: "Sample message.",
     *	target: "#banner-container",
     *	duration: 1000,
     *	smart: true
     * }
     * ```
     *
     * @param {any} [bannerComp=Banner] If provided, used to resolve component factory
     * @memberof BannerService
     */
    showBanner(bannerObj: BannerContent | NotificationContent | ToastContent, bannerComp?: typeof Banner): Banner;
    showToast(bannerObj: BannerContent | NotificationContent | ToastContent, bannerComp?: typeof Toast): Banner;
    /**
     * Programatically closes banner based on `bannerRef`.
     *
     * @param bannerRef `ComponentRef` of a banner or `Banner` component you wish to close
     * @memberof BannerService
     */
    close(bannerRef: any): void;
    /**
     * Calculates the amount of time user needs to read the message in the banner.
     *
     * @param {any} bannerObj Same object used to instantiate banner.
     *
     * In addition to `type` and `message` members, use `duration` member to add
     * some extra time (in ms) to timeout if you need to.
     * @returns {number} calculated timeout (in ms) for smart banner
     * @memberof BannerService
     */
    getSmartTimeout(bannerObj: any): number;
    /**
     * OnDestroy hook.
     *
     * Destroys all living banners it is responsible for.
     *
     * @memberof BannerService
     */
    ngOnDestroy(): void;
}
