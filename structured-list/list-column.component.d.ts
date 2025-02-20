/*!
 *
 * carbon-angular v0.0.0 | list-column.component.d.ts
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


/**
 * `ListColumn` represents a single column in a `StructuredList`.
 *
 * `ListColumn`s can be used in a `ListHeader` to specify the column headers, or in `ListRow`s to specify the column data.
 *
 * Example:
 * ```html
 * <ibm-list-column nowrap="true">Column 1</ibm-list-column>
 * ```
 */
export declare class ListColumn {
    skeleton: boolean;
    isHeaderColumn: boolean;
    isBodyColumn: boolean;
    /**
     * Applies `white-space: nowrap` to the content of this `ListColumn`
     */
    nowrap: boolean;
}
