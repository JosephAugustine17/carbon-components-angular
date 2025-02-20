/*!
 *
 * carbon-angular v0.0.0 | table-header-item.class.d.ts
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


import { TableItem } from "./table-item.class";
import { TemplateRef } from "@angular/core";
export declare class TableHeaderItem {
    /**
     * Defines if column under this TableHeaderItem should be displayed.
     *
     * @memberof TableHeaderItem
     */
    visible: boolean;
    /**
     * Disables sorting by default.
     *
     * @memberof TableHeaderItem
     */
    sorted: boolean;
    /**
     * Enables sorting on click by default.
     * If false then this column won't show a sorting arrow at all.
     *
     * @memberof TableHeaderItem
     */
    sortable: boolean;
    /**
     * Number of applied filters.
     *
     * `filter()` should set it to appropriate number.
     *
     * @memberof TableHeaderItem
     */
    filterCount: number;
    /**
     * Attach a class to the column, both the header and column cells.
     *
     * @memberof TableHeaderItem
     */
    className: string;
    /**
     * Style for the column, applied to every element in the column.
     *
     * ngStyle-like format
     *
     * @memberof TableHeaderItem
     */
    style: {};
    /**
     * If true, sort is set to ascending, if false descending will be true.
     *
     * @memberof TableHeaderItem
     */
    ascending: any;
    /**
     * If true, sort is set to descending, if false ascending will be true.
     *
     * @memberof TableHeaderItem
     */
    descending: any;
    /**
     * Data for the header item.
     *
     * @type {*}
     * @memberof TableHeaderItem
     */
    data: any;
    /**
     * Data for the header item for general usage in the controller.
     * For example, which `field` is this column related to.
     *
     * @type {*}
     * @memberof TableHeaderItem
     */
    metadata: any;
    /**
     * Used to display data in a desired way.
     *
     * If not provided, displays data as a simple string.
     *
     * Usage:
     *
     * In a component where you're using the table create a template like:
     *
     * ```html
     * <ng-template #customHeaderTemplate let-data="data">
     * 		<i><a [routerLink]="data.link">{{data.name}}</a></i>
     * </ng-template>
     * ```
     * where we assume your data contains `link` and `name`. `let-data="data"` is
     * necessary for you to be able to access item's data in the template.
     *
     * Create `ViewChild` property with:
     *
     * ```typescript
     * (at)ViewChild("customHeaderTemplate")
     * protected customHeaderTemplate: TemplateRef<any>;
     * ```
     *
     * Set the template to the header item, for example:
     *
     * ```typescript
     * this.model.header = [
     * 		new TableHeaderItem({data: {name: "Custom header", link: "/table"}, template: this.customHeaderTemplate})
     * ];
     * ```
     * @type {TemplateRef<any>}
     * @memberof TableHeaderItem
     */
    template: TemplateRef<any>;
    /**
     * Used as a template for popover filter.
     *
     * `let-popover="popover"` will give you access to popover component and allow you to
     * manipulate it if needed.
     *
     * `let-filter="filter"` will give you access to the "filter". The main takeaway is
     * store the data you need to `filter.data`. You will be able to access it as
     * `this.filterData.data` from your `filter()` function when you extend `TableHeaderItem`
     *
     * Example:
     * ```html
     * <ng-template #filter let-popover="popover">
     * 	<ibm-label class="first-label">
     * 		Value
     * 		<input type="text" [(ngModel)]="filter1" class="input-field">
     * 	</ibm-label>
     * </ng-template>
     *
     * <ng-template #filterFooter let-popover="popover" let-filter="data">
     * 	<button class="btn--primary" (click)="filter.data = filter1; popover.onClose()">Apply</button>
     * 	<button class="btn--secondary" (click)="popover.onClose()">Cancel</button>
     * </ng-template>
     * ```
     *
     * Set the template with, for example:
     * ```typescript
     * new FilterableHeaderItem({
     * 	filterTemplate: this.filter,
     *	filterFooter: this.filterFooter
     * })
     * ```
     *
     * ```typescript
     * class FilterableHeaderItem extends TableHeaderItem {
     * 	// custom filter function
     * 	filter(item: TableItem): boolean {
     * 		if (typeof item.data === "string" && item.data.indexOf(this.filterData.data) >= 0) {
     * 			this.filterCount = 1;
     * 			return false;
     * 		}
     * 		this.filterCount = 0;
     * 		return true;
     * 	}
     * }
     * ```
     *
     * @type {TemplateRef<any>}
     * @memberof TableHeaderItem
     */
    filterTemplate: TemplateRef<any>;
    /**
     * Used along with `filterTemplate` to construct the filter popover
     *
     * @type {TemplateRef<any>}
     * @memberof TableHeaderItem
     */
    filterFooter: TemplateRef<any>;
    /**
     * This is where you store your data when applying filter.
     *
     * It is the actual object you have access to with `let-filter="data"` in your template.
     *
     * Make sure to store data in `filter.data` in your template, and you will have it
     * available in `filterData.data` in your extension of `TableHeaderItem`.
     *
     * Because angular and object references.
     *
     * @type {*}
     * @memberof TableHeaderItem
     */
    filterData: any;
    /**
     * used in `ascending`
     *
     * @protected
     * @memberof TableHeaderItem
     */
    protected _ascending: boolean;
    /**
     * Creates an instance of TableHeaderItem.
     * @param {*} [rawData]
     * @memberof TableHeaderItem
     */
    constructor(rawData?: any);
    /**
     * Used for sorting rows of the table.
     *
     * Override to enable different sorting.
     *
     * @param {TableItem} one
     * @param {TableItem} two
     * @returns {number}
     * < 0 if `one` should go before `two`
     * > 0 if `one` shoulg go after `two`
     * 0 if it doesn't matter (they are the same)
     * @memberof TableHeaderItem
     */
    compare(one: TableItem, two: TableItem): number;
    /**
     * Used to filter rows in the table.
     *
     * Override to make a custom filter.
     *
     * Even though there is just one filter function, there can be multiple filters.
     * When implementing filter, set `filterCount` before returning.
     *
     * @param {TableItem} item
     * @returns {boolean}
     * `true` to hide the row
     * `false` to show the row
     * @memberof TableHeaderItem
     */
    filter(item: TableItem): boolean;
}
