/*!
 *
 * carbon-angular v0.0.0 | list-item.interface.d.ts
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
 * A generic structure that represents an item in a list.
 * A list item may contain additional lists with sub-items to represent a tree.
 *
 * ```typescript
 * export interface ListItem {
 * 	content: string;
 * 	selected: boolean;
 * 	disabled?: boolean;
 * 	items?: ListItem[];
 * }
 * ```
 *
 * `content` and `selected` are the only **required** properties you **must** provide.
 * When using a custom item template (supported by all the Carbon-Angular item views, not required by AbstractDropdownView)
 * the entire ListItem will be passed to the template as `item`.
 *
 * @export
 * @interface ListItem
 */
export interface ListItem {
    /**
     * Content to be displayed in the list.
     * @type {string}
     * @memberof ListItem
     */
    content: string;
    /**
     * Flag for the selected state of the item.
     * @type {boolean}
     * @memberof ListItem
     */
    selected?: boolean;
    /**
     * If the item is in a disabled state.
     * (Note: not all lists have to support disabled states, and not all lists behave the same with disabled items)
     * @type {boolean}
     * @memberof ListItem
     */
    disabled?: boolean;
    /**
     * Optional nested items.
     * @type {ListItem[]}
     * @memberof ListItem
     */
    items?: ListItem[];
    /**
     * Allows for any other custom properties to be included in the ListItem
     */
    [x: string]: any;
}
