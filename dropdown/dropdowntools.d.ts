/*!
 *
 * carbon-angular v0.0.0 | dropdowntools.d.ts
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


import { Observable } from "rxjs";
/**
 * returns an observable bound to keydown events that
 * filters to a single element where the first letter of
 * it's textContent matches the key pressed
 *
 * @param {HTMLElement} target element to watch
 * @param {Array<HTMLElement>} elements elements to search
 */
export declare function watchFocusJump(target: HTMLElement, elements: any): Observable<HTMLElement>;
/** bundle of functions to aid in manipulating tree structures */
export declare const treetools: {
    /** finds an item in a set of items and returns the item and path to the item as an array */
    find: (items: any, itemToFind: any, path?: any[]) => {
        found: any;
        path: any[];
    };
};
