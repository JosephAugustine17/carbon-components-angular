/*!
 *
 * carbon-angular v0.0.0 | inline-loading.component.d.ts
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
export declare class InlineLoading {
    /**
     * Specify the text description for the loading state.
     */
    loadingText: any;
    /**
     * Specify the text description for the success state.
     */
    successText: any;
    /**
     * Provide a delay for the `setTimeout` for success.
     */
    successDelay: number;
    /**
     * set to `false` to stop the loading animation
     */
    isActive: boolean;
    /**
     * Returns value `true` if the component is in the success state.
     */
    /**
    * Set the component's state to match the parameter and emits onSuccess if it exits.
    */
    success: boolean;
    /**
     * Emits event after the success state is active
     *
     * @type {EventEmitter<any>}
     */
    onSuccess: EventEmitter<any>;
    loadingClass: boolean;
    /**
     * Set to `true` if the action is completed successfully.
     */
    protected _success: boolean;
}
