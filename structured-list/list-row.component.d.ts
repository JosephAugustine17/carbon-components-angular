/*!
 *
 * carbon-angular v0.0.0 | list-row.component.d.ts
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


import { QueryList, AfterContentInit, ElementRef, EventEmitter } from "@angular/core";
import { ListColumn } from "./list-column.component";
/**
 * `ListRow` provides a container for the `ListColumn`s that make up the body of a structured list.
 *
 * Example:
 * ```html
 * 	<ibm-list-row>
 *		<ibm-list-column>Row 1</ibm-list-column>
 *		<ibm-list-column nowrap="true">Row One</ibm-list-column>
 *		<ibm-list-column>
 *			Lorem ipsum dolor sit amet,
 *			consectetur adipiscing elit. Nunc dui magna,
 *			finibus id tortor sed, aliquet bibendum augue.
 *			Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *			Pellentesque vulputate nisl a porttitor interdum.
 *		</ibm-list-column>
 *	</ibm-list-row>
 * ```
 */
export declare class ListRow implements AfterContentInit {
    selected: boolean;
    /**
     * Applies an accessible label to the row. Defaults to no label.
     */
    label: any;
    /**
     * The value for the row. Returned via `ngModel` or `selected` event on the containing `StructuredList`.
     */
    value: any;
    /**
     * Internal event used to notify the containing `StructuredList` of changes.
     */
    change: EventEmitter<Event>;
    /**
     * Set by the containing `StructuredList`. Enables or disables row level selection features.
     */
    selection: boolean;
    /**
     * Set by the containing `StructuredList`. When `selection = true`, used for the `name` property on the radio input.
     */
    name: string;
    wrapper: boolean;
    tabindex: string;
    columns: QueryList<ListColumn>;
    input: ElementRef;
    ngAfterContentInit(): void;
    onclick(): boolean;
    onChange(event: any): void;
}
