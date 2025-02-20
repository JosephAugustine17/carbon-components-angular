/*!
 *
 * carbon-angular v0.0.0 | expandable-tile.component.js
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


import { Component, Input, ElementRef } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
var ExpandableTile = /** @class */ (function () {
    function ExpandableTile(i18n, elementRef) {
        this.i18n = i18n;
        this.elementRef = elementRef;
        this.expanded = false;
        this.tileMaxHeight = 0;
        this.element = this.elementRef.nativeElement;
        this.expand = this.i18n.get("TILES.EXPAND");
        this.collapse = this.i18n.get("TILES.COLLAPSE");
    }
    Object.defineProperty(ExpandableTile.prototype, "translations", {
        /**
         * Expects an object that contains some or all of:
         * ```
         * {
         *		"EXPAND": "Expand",
         *		"COLLAPSE": "Collapse",
         * }
         * ```
         */
        set: function (value) {
            if (value.EXPAND) {
                this.expand.next(value.EXPAND);
            }
            if (value.COLLAPSE) {
                this.collapse.next(value.COLLAPSE);
            }
        },
        enumerable: true,
        configurable: true
    });
    ExpandableTile.prototype.ngAfterContentInit = function () {
        this.updateMaxHeight();
    };
    Object.defineProperty(ExpandableTile.prototype, "expandedHeight", {
        get: function () {
            return this.tileMaxHeight + parseInt(getComputedStyle(this.element.querySelector(".bx--tile")).paddingBottom, 10);
        },
        enumerable: true,
        configurable: true
    });
    ExpandableTile.prototype.updateMaxHeight = function () {
        if (this.expanded) {
            this.tileMaxHeight = this.element.querySelector(".bx--tile-content").getBoundingClientRect().height;
        }
        else {
            this.tileMaxHeight = this.element.querySelector(".bx--tile-content__above-the-fold").getBoundingClientRect().height;
        }
    };
    ExpandableTile.prototype.onClick = function () {
        this.expanded = !this.expanded;
        this.updateMaxHeight();
    };
    ExpandableTile.decorators = [
        { type: Component, args: [{
                    selector: "ibm-expandable-tile",
                    template: "\n\t\t<div\n\t\t\tclass=\"bx--tile bx--tile--expandable\"\n\t\t\t[ngClass]=\"{'bx--tile--is-expanded' : expanded}\"\n\t\t\t[ngStyle]=\"{'max-height': expandedHeight + 'px'}\"\n\t\t\trole=\"button\"\n\t\t\ttabindex=\"0\"\n\t\t\t(click)=\"onClick()\">\n\t\t\t<button [attr.aria-label]=\"(expanded ? collapse : expand) | async\" class=\"bx--tile__chevron\">\n\t\t\t\t<svg *ngIf=\"!expanded\" width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" role=\"img\">\n\t\t\t\t\t<title>{{expand | async}}</title>\n\t\t\t\t\t<path fill-rule=\"nonzero\" d=\"M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<svg *ngIf=\"expanded\" width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" role=\"img\">\n\t\t\t\t\t<title>{{collapse | async}}</title>\n\t\t\t\t\t<path fill-rule=\"nonzero\" d=\"M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z\"/>\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t\t<div class=\"bx--tile-content\">\n\t\t\t\t<ng-content select=\".bx--tile-content__above-the-fold\"></ng-content>\n\t\t\t\t<ng-content select=\".bx--tile-content__below-the-fold\"></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t"
                },] },
    ];
    /** @nocollapse */
    ExpandableTile.ctorParameters = function () { return [
        { type: I18n },
        { type: ElementRef }
    ]; };
    ExpandableTile.propDecorators = {
        expanded: [{ type: Input }],
        translations: [{ type: Input }]
    };
    return ExpandableTile;
}());
export { ExpandableTile };
//# sourceMappingURL=expandable-tile.component.js.map