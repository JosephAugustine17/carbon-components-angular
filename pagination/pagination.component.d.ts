/*!
 *
 * carbon-angular v0.0.0 | pagination.component.d.ts
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


import { PaginationModel } from "./pagination.module";
import { EventEmitter } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
import { ExperimentalService } from "./../experimental.module";
/**
 * Use pagination when you have multiple pages of data to handle.
 *
 * ```html
 * <ibm-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-pagination>
 * ```
 *
 * In your `selectPage()` method set the `model.currentPage` to selected page, _after_
 * you load the page.
 *
 * ```typescript
 * selectPage(page) {
 * 	// ... your code to load the page goes here
 *
 * 	this.model.currentPage = page;
 *
 * 	// ... anything you want to do after page selection changes goes here
 * }
 * ```
 *
 * @export
 * @class Pagination
 */
export declare class Pagination {
    protected i18n: I18n;
    protected experimental: ExperimentalService;
    static paginationCounter: number;
    /**
     * Set to `true` for a loading pagination component.
     */
    skeleton: boolean;
    /**
     * `PaginationModel` with the information about pages you're controlling.
     *
     * @type {Model}
     */
    model: PaginationModel;
    /**
     * Expects an object that contains some or all of:
     * ```
     * {
     *		"ITEMS_PER_PAGE": "Items per page:",
     *		"OPEN_LIST_OF_OPTIONS": "Open list of options",
     *		"BACKWARD": "Backward",
     *		"FORWARD": "Forward",
     *		"TOTAL_ITEMS": "{{start}}-{{end}} of {{total}} items",
     *		"TOTAL_PAGES": "{{current}} of {{last}} pages",
     *		"OF_LAST_PAGES": "of {{last}} pages"
     * }
     * ```
     */
    translations: any;
    /**
     * Emits the new page number.
     *
     * You should tie into this and update `model.currentPage` once the fresh
     * data is finally loaded.
     */
    selectPage: EventEmitter<number>;
    itemsPerPage: number;
    currentPage: number;
    /**
     * The last page number to display in the pagination view.
     */
    readonly lastPage: number;
    readonly startItemIndex: number;
    readonly endItemIndex: number;
    /**
     * The previous page number to navigate to, from the current page.
     */
    readonly previousPage: number;
    /**
     * The next page number to navigate to, from the current page.
     */
    readonly nextPage: number;
    readonly isExperimental: boolean;
    itemsPerPageSelectId: string;
    currentPageSelectId: string;
    itemsPerPageText: any;
    optionsListText: any;
    backwardText: any;
    forwardText: any;
    totalItemsText: any;
    totalPagesText: any;
    ofLastPagesText: any;
    constructor(i18n: I18n, experimental: ExperimentalService);
    /**
     * Generates a list of numbers. (Python function)
     * Used to display the correct pagination controls.
     * @returns {array}
     */
    range(stop: number, start?: number, step?: number): number[];
}
