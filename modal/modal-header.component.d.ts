/*!
 *
 * carbon-angular v0.0.0 | modal-header.component.d.ts
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


import { EventEmitter } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
import { ExperimentalService } from "./../experimental.service";
/**
 * ***Inputs***
 * ```html
 * <ibm-modal-header>Header text</ibm-modal-header>
 * ```
 *
 * ***Outputs***
 * ```html
 * <ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * ```
 *
 * @export
 * @class ModalHeader
 */
export declare class ModalHeader {
    protected i18n: I18n;
    protected experimental: ExperimentalService;
    /**
     * Sets the style on the modal heading based on its category.
     * @type {"default" | "warning" | "error"}
     */
    theme: string;
    /**
     * Accessible label for the header close button.
     * Defaults to the `MODAL.CLOSE` value from the i18n service.
     */
    closeLabel: any;
    /**
     * To emit the event of clicking on the close icon within the modal.
     */
    closeSelect: EventEmitter<{}>;
    readonly isExperimental: boolean;
    constructor(i18n: I18n, experimental: ExperimentalService);
    /**
     * Handles click for the close icon button within the `Modal`.
     */
    onClose(): void;
}
