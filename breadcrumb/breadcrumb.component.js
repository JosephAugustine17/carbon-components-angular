/*!
 *
 * carbon-angular v0.0.0 | breadcrumb.component.js
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


import { Component, Input, ContentChildren, QueryList } from "@angular/core";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
var MINIMUM_OVERFLOW_THRESHOLD = 4;
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
        this.noTrailingSlash = false;
        this._skeleton = false;
    }
    Object.defineProperty(Breadcrumb.prototype, "skeleton", {
        get: function () {
            return this._skeleton;
        },
        set: function (value) {
            this._skeleton = value;
            this.updateChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb.prototype, "threshold", {
        get: function () {
            return this._threshold;
        },
        set: function (threshold) {
            this._threshold = threshold;
            if (isNaN(threshold) || threshold < MINIMUM_OVERFLOW_THRESHOLD) {
                this._threshold = MINIMUM_OVERFLOW_THRESHOLD;
            }
        },
        enumerable: true,
        configurable: true
    });
    Breadcrumb.prototype.ngAfterContentInit = function () {
        this.updateChildren();
    };
    Object.defineProperty(Breadcrumb.prototype, "shouldShowContent", {
        get: function () {
            return !this.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb.prototype, "shouldShowOverflow", {
        get: function () {
            if (!this.items) {
                return false;
            }
            return this.items.length > this.threshold;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb.prototype, "first", {
        get: function () {
            return this.shouldShowOverflow ? this.items[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb.prototype, "overflowItems", {
        get: function () {
            return this.shouldShowOverflow ? this.items.slice(1, this.items.length - 2) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb.prototype, "secondLast", {
        get: function () {
            return this.shouldShowOverflow ? this.items[this.items.length - 2] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb.prototype, "last", {
        get: function () {
            return this.shouldShowOverflow ? this.items[this.items.length - 1] : null;
        },
        enumerable: true,
        configurable: true
    });
    Breadcrumb.prototype.updateChildren = function () {
        var _this = this;
        if (this.children) {
            this.children.toArray().forEach(function (child) { return child.skeleton = _this.skeleton; });
        }
    };
    Breadcrumb.decorators = [
        { type: Component, args: [{
                    selector: "ibm-breadcrumb",
                    template: "\n\t<nav #nav class=\"bx--breadcrumb\"\n\t\t[ngClass]=\"{\n\t\t\t'bx--skeleton' : skeleton,\n\t\t\t'bx--breadcrumb--no-trailing-slash' : noTrailingSlash\n\t\t}\"\n\t\t[attr.aria-label]=\"ariaLabel\">\n\t\t<ng-template [ngIf]=\"shouldShowContent\">\n\t\t\t<ng-content></ng-content>\n\t\t</ng-template>\n\t\t<ng-template [ngIf]=\"!shouldShowOverflow\">\n\t\t\t<ibm-breadcrumb-item\n\t\t\t\t*ngFor=\"let item of items\"\n\t\t\t\t[href]=\"item.href\">\n\t\t\t\t{{item.content}}\n\t\t\t</ibm-breadcrumb-item>\n\t\t</ng-template>\n\t\t<ng-template [ngIf]=\"shouldShowOverflow\">\n\t\t\t<ibm-breadcrumb-item [href]=\"first?.href\">\n\t\t\t\t{{first?.content}}\n\t\t\t</ibm-breadcrumb-item>\n\t\t\t<ibm-breadcrumb-item>\n\t\t\t\t<ibm-overflow-menu>\n\t\t\t\t\t<li class=\"bx--overflow-menu-options__option\"\n\t\t\t\t\t\t*ngFor=\"let item of overflowItems\">\n\t\t\t\t\t\t<a class=\"bx--overflow-menu-options__btn\"\n\t\t\t\t\t\t\thref=\"{{item?.href}}\"\n\t\t\t\t\t\t\tstyle=\"text-decoration: none;\">\n\t\t\t\t\t\t\t{{item?.content}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ibm-overflow-menu>\n\t\t\t</ibm-breadcrumb-item>\n\t\t\t<ibm-breadcrumb-item [href]=\"secondLast?.href\">\n\t\t\t\t{{secondLast?.content}}\n\t\t\t</ibm-breadcrumb-item>\n\t\t\t<ibm-breadcrumb-item [href]=\"last?.href\">\n\t\t\t\t{{last?.content}}\n\t\t\t</ibm-breadcrumb-item>\n\t\t</ng-template>\n\t</nav>"
                },] },
    ];
    Breadcrumb.propDecorators = {
        children: [{ type: ContentChildren, args: [BreadcrumbItemComponent,] }],
        items: [{ type: Input }],
        noTrailingSlash: [{ type: Input }],
        ariaLabel: [{ type: Input }],
        skeleton: [{ type: Input }],
        threshold: [{ type: Input }]
    };
    return Breadcrumb;
}());
export { Breadcrumb };
//# sourceMappingURL=breadcrumb.component.js.map