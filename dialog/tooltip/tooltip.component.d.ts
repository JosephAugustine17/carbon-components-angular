/*!
 *
 * carbon-angular v0.0.0 | tooltip.component.d.ts
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


import { Dialog } from "./../dialog.component";
/**
 * Extend the `Dialog` component to create a tooltip for exposing content.
 */
export declare class Tooltip extends Dialog {
    style: string;
    /**
     * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
     */
    hasContentTemplate: boolean;
    /**
     * Sets the role of the tooltip. If there's no focusable content we leave it as a `tooltip`,
     * if there _is_ focusable content we switch to the interactive `dialog` role.
     */
    role: string;
    /**
     * Check whether there is a template for the `Tooltip` content.
     */
    onDialogInit(): void;
    afterDialogViewInit(): void;
}
