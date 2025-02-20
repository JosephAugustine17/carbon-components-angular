/*!
 *
 * carbon-angular v0.0.0 | structured-list.component.d.ts
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


import { QueryList, AfterContentInit, EventEmitter } from "@angular/core";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { ControlValueAccessor } from "@angular/forms";
/**
 * Structured Lists represent related tabular data. For larger datasets consider a full `Table`.
 *
 * See (structured-list/usage)[https://www.carbondesignsystem.com/components/structured-list/usage] for usage guidance.
 *
 * A basic structued list looks something like:
 * ```html
 *	<ibm-structured-list>
 *		<ibm-list-header>
 *			<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 *			<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 *			<ibm-list-column>Column 3</ibm-list-column>
 *		</ibm-list-header>
 *		<ibm-list-row>
 *			<ibm-list-column>Row 1</ibm-list-column>
 *			<ibm-list-column nowrap="true">Row One</ibm-list-column>
 *			<ibm-list-column>
 *				Lorem ipsum dolor sit amet,
 *				consectetur adipiscing elit. Nunc dui magna,
 *				finibus id tortor sed, aliquet bibendum augue.
 *				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *				Pellentesque vulputate nisl a porttitor interdum.
 *			</ibm-list-column>
 *		</ibm-list-row>
 *		<ibm-list-row>
 *			<ibm-list-column>Row 2</ibm-list-column>
 *			<ibm-list-column nowrap="true">Row Two</ibm-list-column>
 *			<ibm-list-column>
 *				Lorem ipsum dolor sit amet,
 *				consectetur adipiscing elit. Nunc dui magna,
 *				finibus id tortor sed, aliquet bibendum augue.
 *				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 *				Pellentesque vulputate nisl a porttitor interdum.
 *			</ibm-list-column>
 *		</ibm-list-row>
 *	</ibm-structured-list>
 * ```
 */
export declare class StructuredList implements AfterContentInit, ControlValueAccessor {
    /**
     * A counter to provide unique default values.
     */
    static listCount: number;
    /**
     * Set to `true` to enable radio like selection of the rows.
     */
    selection: boolean;
    /**
     * Set to `true` to apply a border and white background.
     */
    border: boolean;
    /**
     * Set to `true` to apply a condensed style to the headers and rows.
     */
    condensed: boolean;
    /**
     * Set to `true` to apply `white-space: nowrap` on _all_ conent.
     */
    nowrap: boolean;
    /**
     * Used when `selection = true` as the row radio group `name`
     */
    name: string;
    /**
     * Sets the skeleton value for all `ListHeader` to the skeleton value of `StructuredList`.
     */
    /**
    * Returns the skeleton value in the `StructuredList` if there is one.
    */
    skeleton: any;
    /**
     * Emits an event when the row selection changes.
     *
     * Emits an object that looks like:
     * ```javascript
     * {
     * 	value: "something",
     * 	selected: true,
     * 	name: "structured-list-1"
     * }
     * ```
     */
    selected: EventEmitter<{
        value: string;
        selected: boolean;
        name: string;
    }>;
    rows: QueryList<ListRow>;
    headers: QueryList<ListHeader>;
    protected _skeleton: boolean;
    onChange: (_: any) => void;
    onTouched: () => void;
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    protected updateChildren(): void;
}
