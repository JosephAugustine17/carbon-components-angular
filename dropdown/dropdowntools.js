/*!
 *
 * carbon-angular v0.0.0 | dropdowntools.js
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


import { fromEvent } from "rxjs";
import { debounceTime, map, filter } from "rxjs/operators";
/**
 * returns an observable bound to keydown events that
 * filters to a single element where the first letter of
 * it's textContent matches the key pressed
 *
 * @param {HTMLElement} target element to watch
 * @param {Array<HTMLElement>} elements elements to search
 */
export function watchFocusJump(target, elements) {
    return fromEvent(target, "keydown")
        .pipe(debounceTime(150), map(function (ev) {
        var el = elements.find(function (itemEl) {
            return itemEl.textContent.trim().toLowerCase().startsWith(ev.key);
        });
        if (el) {
            return el;
        }
    }), filter(function (el) { return !!el; }));
}
/** bundle of functions to aid in manipulating tree structures */
export var treetools = {
    /** finds an item in a set of items and returns the item and path to the item as an array */
    find: function (items, itemToFind, path) {
        if (path === void 0) { path = []; }
        var found;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var i = items_1[_i];
            if (i === itemToFind) {
                path.push(i);
                found = i;
            }
            if (i.items && !found) {
                path.push(i);
                found = this.find(i.items, itemToFind, path).found;
                if (!found) {
                    path = [];
                }
            }
        }
        return { found: found, path: path };
    }
};
//# sourceMappingURL=dropdowntools.js.map