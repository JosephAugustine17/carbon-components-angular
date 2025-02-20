/*!
 *
 * carbon-angular v0.0.0 | modal.service.js
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


import { ComponentFactoryResolver, Injector } from "@angular/core";
import { Injectable } from "@angular/core";
import { AlertModal } from "./alert-modal.component";
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
var ModalService = /** @class */ (function () {
    /**
     * Creates an instance of `ModalService`.
     * @param {ComponentFactoryResolver} resolver
     * @memberof ModalService
     */
    function ModalService(resolver, placeholderService) {
        this.resolver = resolver;
        this.placeholderService = placeholderService;
    }
    /**
     * Creates and renders the modal component that is passed in.
     * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
     * @template T
     * @param {{component: any, inputs?: any}} data
     * @returns {ComponentRef<any>}
     * @memberof ModalService
     */
    ModalService.prototype.create = function (data) {
        var _this = this;
        var defaults = { inputs: {} };
        data = Object.assign({}, defaults, data);
        var inputProviders = Object.keys(data.inputs).map(function (inputName) { return ({ provide: inputName, useValue: data.inputs[inputName] }); });
        var injector = Injector.create(inputProviders);
        var factory = this.resolver.resolveComponentFactory(data.component);
        var focusedElement = document.activeElement;
        var component = this.placeholderService.createComponent(factory, injector);
        component["previouslyFocusedElement"] = focusedElement; // used to return focus to previously focused element
        component.instance.close.subscribe(function (_) {
            _this.placeholderService.destroyComponent(component);
            // filter out our component
            ModalService.modalList = ModalService.modalList.filter(function (c) { return c === component; });
        });
        component.onDestroy(function () {
            focusedElement.focus();
        });
        ModalService.modalList.push(component);
        return component;
    };
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
    ModalService.prototype.show = function (data) {
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            if (["modalType", "modalLabel", "modalTitle", "modalContent"].includes(key)) {
                try {
                    throw new Error(key + " is deprecated, use " + key.replace("modal", "").toLowerCase() + " instead");
                }
                catch (error) {
                    console.warn(error);
                }
            }
        }
        return this.create({
            component: AlertModal,
            inputs: {
                modalType: data.type || data.modalType,
                modalLabel: data.label || data.modalLabel,
                modalTitle: data.title || data.modalTitle,
                modalContent: data.content || data.modalContent,
                buttons: data.buttons || []
            }
        });
    };
    /**
     * Destroys the modal on the supplied index.
     * When called without parameters it destroys the most recently created/top most modal.
     *
     * @param {any} [index=-1]
     * @returns
     * @memberof ModalService
     */
    ModalService.prototype.destroy = function (index) {
        if (index === void 0) { index = -1; }
        // return if nothing to destroy because it's already destroyed
        if (index >= ModalService.modalList.length || ModalService.modalList.length === 0) {
            return;
        }
        // on negative index destroy the last on the list (top modal)
        if (index < 0) {
            index = ModalService.modalList.length - 1;
        }
        this.placeholderService.destroyComponent(ModalService.modalList[index]);
        ModalService.modalList.splice(index, 1);
    };
    // track all our open modals
    ModalService.modalList = [];
    ModalService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: PlaceholderService }
    ]; };
    return ModalService;
}());
export { ModalService };
//# sourceMappingURL=modal.service.js.map