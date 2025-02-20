/*!
 *
 * carbon-angular v0.0.0 | list.directive.d.ts
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


import { ElementRef } from "@angular/core";
/**
 * Applies either ordered or unordered styling to the list container it is applied to.
 *
 * For `ul`s it will apply unordered list styles, and for `ol`s it will apply ordered list styles.
 *
 * If a `ul` or `ol` is nested within a `li` the directive will apply nested list styling.
 */
export declare class List {
    protected elementRef: ElementRef;
    readonly ordered: boolean;
    readonly unordered: boolean;
    readonly nested: boolean;
    constructor(elementRef: ElementRef);
}
