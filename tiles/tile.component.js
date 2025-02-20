/*!
 *
 * carbon-angular v0.0.0 | tile.component.js
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


import { Component, HostBinding } from "@angular/core";
/**
 * Build application's tiles using this component.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-tile>
 * 		tile content
 * </ibm-tile>
 * ```
 *
 * @export
 * @class Tile
 * @implements {OnInit}
 */
var Tile = /** @class */ (function () {
    function Tile() {
        this.tileClass = true;
    }
    Tile.decorators = [
        { type: Component, args: [{
                    selector: "ibm-tile",
                    template: "<ng-content></ng-content>"
                },] },
    ];
    Tile.propDecorators = {
        tileClass: [{ type: HostBinding, args: ["class.bx--tile",] }]
    };
    return Tile;
}());
export { Tile };
//# sourceMappingURL=tile.component.js.map