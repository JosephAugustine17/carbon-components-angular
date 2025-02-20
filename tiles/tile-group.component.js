/*!
 *
 * carbon-angular v0.0.0 | tile-group.component.js
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


import { Component, Input, Output, EventEmitter, HostBinding, ContentChildren, QueryList } from "@angular/core";
import { SelectionTile } from "./selection-tile.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
var TileGroup = /** @class */ (function () {
    function TileGroup() {
        /**
         * The tile group `name`
         */
        this.name = "tile-group-" + TileGroup.tileGroupCount;
        /**
         * Set to `true` to support multiple tile selection
         */
        this.multiple = false;
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
        this.selected = new EventEmitter();
        this.tileGroupClass = true;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        TileGroup.tileGroupCount++;
    }
    TileGroup.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.selectionTiles.forEach(function (tile) {
            tile.name = _this.name;
            tile.change.subscribe(function () {
                _this.selected.emit({
                    value: tile.value,
                    selected: tile.selected,
                    name: _this.name
                });
                _this.onChange(tile.value);
            });
            tile.multiple = _this.multiple;
        });
    };
    TileGroup.prototype.writeValue = function (value) {
        if (!this.selectionTiles) {
            return;
        }
        this.selectionTiles.forEach(function (tile) {
            if (tile.value === value) {
                tile.selected = true;
            }
            else {
                tile.selected = false;
            }
        });
    };
    TileGroup.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TileGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TileGroup.tileGroupCount = 0;
    TileGroup.decorators = [
        { type: Component, args: [{
                    selector: "ibm-tile-group",
                    template: "<ng-content select=\"ibm-selection-tile\"></ng-content>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: TileGroup,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    TileGroup.ctorParameters = function () { return []; };
    TileGroup.propDecorators = {
        name: [{ type: Input }],
        multiple: [{ type: Input }],
        selected: [{ type: Output }],
        tileGroupClass: [{ type: HostBinding, args: ["class.bx--tile-group",] }],
        selectionTiles: [{ type: ContentChildren, args: [SelectionTile,] }]
    };
    return TileGroup;
}());
export { TileGroup };
//# sourceMappingURL=tile-group.component.js.map