/*!
 *
 * carbon-angular v0.0.0 | selection-tile.component.js
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


import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
var SelectionTile = /** @class */ (function () {
    function SelectionTile(i18n) {
        this.i18n = i18n;
        /**
         * The unique id for the input.
         */
        this.id = "tile-" + SelectionTile.tileCount;
        /**
         * Internal event used to notify the containing `TileGroup` of changes.
         */
        this.change = new EventEmitter();
        SelectionTile.tileCount++;
    }
    Object.defineProperty(SelectionTile.prototype, "selected", {
        get: function () {
            if (!this.input) {
                return;
            }
            return this.input.nativeElement.checked;
        },
        /**
         * Updating the state of the input to match the state of the parameter passed in.
         * Set to `true` if this tile should be selected.
         */
        set: function (value) {
            if (!this.input) {
                return;
            }
            this.input.nativeElement.checked = value ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    SelectionTile.prototype.onChange = function (event) {
        this.change.emit(event);
    };
    SelectionTile.tileCount = 0;
    SelectionTile.decorators = [
        { type: Component, args: [{
                    selector: "ibm-selection-tile",
                    template: "\n\t\t<label\n\t\t\tclass=\"bx--tile bx--tile--selectable\"\n\t\t\ttabindex=\"0\"\n\t\t\t[for]=\"id\"\n\t\t\t[ngClass]=\"{'bx--tile--is-selected' : selected}\"\n\t\t\t[attr.aria-label]=\"i18n.get('TILES.TILE') | async\">\n\t\t\t<input\n\t\t\t\t#input\n\t\t\t\ttabindex=\"-1\"\n\t\t\t\tclass=\"bx--tile-input\"\n\t\t\t\t[id]=\"id\"\n\t\t\t\t[type]=\"(multiple ? 'checkbox': 'radio')\"\n\t\t\t\t[value]=\"value\"\n\t\t\t\t[name]=\"name\"\n\t\t\t\t(change)=\"onChange($event)\"/>\n\t\t\t<div class=\"bx--tile__checkmark\">\n\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n\t\t\t\t\t<path d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.646-10.854L6.75 10.043 4.354 7.646l-.708.708 3.104 3.103 5.604-5.603-.708-.708z\"\n\t\t\t\t\t\tfill-rule=\"evenodd\"/>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<div class=\"bx--tile-content\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</label>\n\t"
                },] },
    ];
    /** @nocollapse */
    SelectionTile.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    SelectionTile.propDecorators = {
        id: [{ type: Input }],
        selected: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        input: [{ type: ViewChild, args: ["input",] }]
    };
    return SelectionTile;
}());
export { SelectionTile };
//# sourceMappingURL=selection-tile.component.js.map