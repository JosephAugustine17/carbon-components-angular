/*!
 *
 * carbon-angular v0.0.0 | tile-group.component.d.ts
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


import { AfterContentInit, EventEmitter, QueryList } from "@angular/core";
import { SelectionTile } from "./selection-tile.component";
import { TileSelection } from "./tile-selection.interface";
export declare class TileGroup implements AfterContentInit {
    static tileGroupCount: number;
    /**
     * The tile group `name`
     */
    name: string;
    /**
     * Set to `true` to support multiple tile selection
     */
    multiple: boolean;
    /**
     * Emits an event when the tile selection changes.
     *
     * Emits an object that looks like:
     * ```javascript
     * {
     * 	value: "something",
     * 	selected: true,
     * 	name: "tile-group-1"
     * }
     * ```
     */
    selected: EventEmitter<TileSelection>;
    tileGroupClass: boolean;
    selectionTiles: QueryList<SelectionTile>;
    constructor();
    onChange: (_: any) => void;
    onTouched: () => void;
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
