/*!
 *
 * carbon-angular v0.0.0 | tab.service.d.ts
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


export declare let tabbableSelector: string;
export declare let tabbableSelectorIgnoreTabIndex: string;
export declare function getFocusElementList(element: any, selector?: string): any;
export declare function isFocusInFirstItem(event: any, list: any): boolean;
export declare function isFocusInLastItem(event: any, list: any): boolean;
export declare function isElementFocused(event: any, element: any): boolean;
export declare function focusFirstFocusableElement(list: any): boolean;
export declare function focusLastFocusableElement(list: any): boolean;
export declare function isVisible(element: any): boolean;
export declare function cycleTabs(event: any, element: any): void;
