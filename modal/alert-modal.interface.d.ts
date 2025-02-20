/*!
 *
 * carbon-angular v0.0.0 | alert-modal.interface.d.ts
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


export declare enum AlertModalType {
    default = "default",
    danger = "danger"
}
export interface AlertModalData {
    /**
     * Use of `modalType` is deprecated, use `type` instead
     */
    modalType?: string;
    /**
     * type of the modal
     */
    type?: AlertModalType;
    /**
     * Use of `modalLabel` is deprecated, use `label` instead
     */
    modalLabel?: string;
    /**
     * Additional label shown over the modal
     */
    label?: string;
    /**
     * Use of `modalTitle` is deprecated, use `title` instead
     */
    modalTitle?: string;
    /**
     * Primary title for the modal
     */
    title?: string;
    /**
     * Use of `modalContent` is deprecated, use `content` instead
     */
    modalContent?: string;
    /**
     * Content for the modal body, could include HTML tags
     */
    content?: string;
    /**
     * Array of `ModalButton`s
     */
    buttons?: Array<ModalButton>;
}
export declare enum ModalButtonType {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    ghost = "ghost",
    danger = "danger",
    danger_primary = "danger--primary"
}
export interface ModalButton {
    /**
     * Display value of the button
     */
    text: string;
    /**
     * Optional unique ID for the button
     */
    id?: string;
    /**
     * Button type
     */
    type?: ModalButtonType;
    /**
     * Callback for the button `click` event
     */
    click?: Function;
}
