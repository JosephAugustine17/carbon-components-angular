/*!
 *
 * carbon-angular v0.0.0 | list-header.component.d.ts
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
import { ListColumn } from "./list-column.component";
/**
 * `ListHeader` provides a container for the `ListColumn`s that make up the header of a structured list.
 *
 * Example:
 * ```html
 * 	<ibm-list-header>
 *		<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 *		<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 *		<ibm-list-column>Column 3</ibm-list-column>
 *	</ibm-list-header>
 * ```
 */
export declare class ListHeader implements AfterContentInit {
    wrapper: boolean;
    skeleton: any;
    columns: QueryList<ListColumn>;
    /**
     * Set by the containing `StructuredList`. Adds a dummy header for the selection column when set to true.
     */
    selection: boolean;
    protected _skeleton: boolean;
    ngAfterContentInit(): void;
    protected updateChildren(): void;
}
