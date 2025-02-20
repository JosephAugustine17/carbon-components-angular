/*!
 *
 * carbon-angular v0.0.0 | modal.service.d.ts
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


import { ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { AlertModalData } from "./alert-modal.interface";
import { PlaceholderService } from "./../placeholder/placeholder.module";
/**
 * Modal service handles instantiating and destroying modal instances.
 * Uses ModalPlaceholderService to track open instances, and for it's placeholder view reference.
 *
 * ```typescript
 * export class ModalService {
 * 	registerViewContainerRef(vcRef: ViewContainerRef): void {}
 * 	create<T>(data: {component: any, inputs?: any}): void {}
 * 	destroy(index: number = -1): void {}
 * }
 * ```
 * @export
 * @class ModalService
 */
export declare class ModalService {
    resolver: ComponentFactoryResolver;
    placeholderService: PlaceholderService;
    protected static modalList: Array<ComponentRef<any>>;
    /**
     * Creates an instance of `ModalService`.
     * @param {ComponentFactoryResolver} resolver
     * @memberof ModalService
     */
    constructor(resolver: ComponentFactoryResolver, placeholderService: PlaceholderService);
    /**
     * Creates and renders the modal component that is passed in.
     * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
     * @template T
     * @param {{component: any, inputs?: any}} data
     * @returns {ComponentRef<any>}
     * @memberof ModalService
     */
    create<T>(data: {
        component: any;
        inputs?: any;
    }): ComponentRef<any>;
    /**
     * Creates and renders a new alert modal component.
     * @param data You can pass in:
     * `modalType` - "default" | "danger" = "default",
     * `modalLabel` - a label shown over the title,
     * `modalTitle` - modal's title,
     * `modalContent` - modal's content, could include HTML tags.
     * `buttons` is an array of objects
     * ```
     * {
     * 		text: "Button text",
     * 		type: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" = "primary",
     * 		click: clickFunction,
     * }
     * ```
     * @returns {ComponentRef<any>}
     * @memberof ModalService
     */
    show(data: AlertModalData): ComponentRef<any>;
    /**
     * Destroys the modal on the supplied index.
     * When called without parameters it destroys the most recently created/top most modal.
     *
     * @param {any} [index=-1]
     * @returns
     * @memberof ModalService
     */
    destroy(index?: number): void;
}
