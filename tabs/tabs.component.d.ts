/*!
 *
 * carbon-angular v0.0.0 | tabs.component.d.ts
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


import { QueryList, AfterContentInit } from "@angular/core";
import { Tab } from "./tab.component";
/**
 * Build out your application's tabs using this component.
 * This is the parent of the `Tab` and `TabHeader` components.
 *
 * `Tabs` expects a set of `n-tab` elements
 *
 * ```html
 * <ibm-tabs>
 * 	<ibm-tab heading='tab1'>
 * 		tab 1 content
 * 	</ibm-tab>
 * 	<ibm-tab heading='tab1'>
 * 		tab 2 content
 * 	</ibm-tab>
 * 	<!-- ... -->
 * 	<ibm-tab heading='tab1'>
 * 		tab n content
 * 	</ibm-tab>
 * </ibm-tabs>
 * ```
 *
 * @export
 * @class Tabs
 * @implements {AfterContentInit}
 */
export declare class Tabs implements AfterContentInit {
    /**
     * Takes either the string value 'top' or 'bottom' to place TabHeader
     * relative to the `TabPanel`s.
     */
    position: "top" | "bottom";
    /**
     * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
     */
    cacheActive: boolean;
    /**
     * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
     */
    followFocus: boolean;
    /**
     * Set to `true` to put tabs in a loading state.
     */
    skeleton: boolean;
    /**
     * Set to `true` to have the tabIndex of the all tabpanels be -1.
     */
    isNavigation: boolean;
    /**
     * Maintains a `QueryList` of the `Tab` elements and updates if `Tab`s are added or removed.
     */
    tabs: QueryList<Tab>;
    /**
     * Content child of the projected header component
     */
    tabHeaders: any;
    /**
     * After content is initialized update `Tab`s to cache (if turned on) and set the initial
     * selected Tab item.
     */
    ngAfterContentInit(): void;
    /**
     * true if the n-tab's are passed directly to the component as children
     */
    hasTabHeaders(): boolean;
}
