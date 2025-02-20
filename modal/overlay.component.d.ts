/*!
 *
 * carbon-angular v0.0.0 | overlay.component.d.ts
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


import { EventEmitter, ElementRef } from "@angular/core";
/**
 * Component for the overlay object that acts as a backdrop to the `Modal` component.
 *
 * The main purpose for this component is to be able to handle click events that fall outside
 * the bounds of the `Modal` component.
 */
export declare class Overlay {
    /**
     * Classification of the modal.
     */
    theme: "default" | "danger";
    /**
     * To emit the event where the user selects the overlay behind the `Modal`.
     */
    overlaySelect: EventEmitter<{}>;
    /**
     * Maintains a reference to the view DOM element of the `Overlay`.
     */
    overlay: ElementRef;
    /**
     * Handles the user clicking on the `Overlay` which resides outside the `Modal` object.
     */
    overlayClick(event: any): void;
}
