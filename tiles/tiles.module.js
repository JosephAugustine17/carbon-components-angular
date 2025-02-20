/*!
 *
 * carbon-angular v0.0.0 | tiles.module.js
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


import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Tile } from "./tile.component";
import { ClickableTile } from "./clickable-tile.component";
import { ExpandableTile } from "./expandable-tile.component";
import { SelectionTile } from "./selection-tile.component";
import { TileGroup } from "./tile-group.component";
import { I18nModule } from "./../i18n/i18n.module";
export { Tile } from "./tile.component";
export { ClickableTile } from "./clickable-tile.component";
export { ExpandableTile } from "./expandable-tile.component";
export { SelectionTile } from "./selection-tile.component";
export { TileGroup } from "./tile-group.component";
var TilesModule = /** @class */ (function () {
    function TilesModule() {
    }
    TilesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Tile,
                        ClickableTile,
                        ExpandableTile,
                        SelectionTile,
                        TileGroup
                    ],
                    exports: [
                        Tile,
                        ClickableTile,
                        ExpandableTile,
                        SelectionTile,
                        TileGroup
                    ],
                    imports: [
                        CommonModule,
                        I18nModule
                    ]
                },] },
    ];
    return TilesModule;
}());
export { TilesModule };
//# sourceMappingURL=tiles.module.js.map