/*!
 *
 * carbon-angular v0.0.0 | tab-headers.component.d.ts
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


import { QueryList, AfterContentInit, ElementRef } from "@angular/core";
import { Tab } from "./tab.component";
/**
 * The `TabHeaders` component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 * @export
 * @class TabHeaders
 * @implements {AfterViewInit}
 */
export declare class TabHeaders implements AfterContentInit {
    /**
     * List of `Tab` components.
     */
    tabInput: QueryList<Tab>;
    /**
     * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
     * Duplicate from `n-tabs` to support standalone headers
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
     * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
     */
    headerContainer: any;
    /**
     * ContentChild of all the n-tabs
     */
    tabQuery: QueryList<Tab>;
    /**
     * set to tabQuery if tabInput is empty
     */
    tabs: QueryList<Tab>;
    /**
     * The index of the first visible tab.
     */
    firstVisibleTab: number;
    /**
     * The DOM element containing the `Tab` headings displayed.
     */
    allTabHeaders: QueryList<ElementRef>;
    /**
     * Controls the manual focusing done by tabbing through headings.
     */
    currentSelectedTab: number;
    tabListVisible: boolean;
    /**
     * Controls the keydown events used for tabbing through the headings.
     */
    keyboardInput(event: any): void;
    ngAfterContentInit(): void;
    /**
     * Controls manually focusing tabs.
     */
    onTabFocus(ref: HTMLElement, index: number): void;
    getSelectedTab(): any;
    showTabList(): void;
    /**
     * Selects `Tab` 'tab' and moves it into view on the view DOM if it is not already.
     */
    selectTab(ref: HTMLElement, tab: Tab, tabIndex: number): void;
    /**
     * Determines which `Tab` is initially selected.
     */
    protected setFirstTab(): void;
}
