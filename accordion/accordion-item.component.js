/*!
 *
 * carbon-angular v0.0.0 | accordion-item.component.js
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


import { Component, Input, HostBinding, Output, EventEmitter } from "@angular/core";
var AccordionItem = /** @class */ (function () {
    function AccordionItem() {
        this.title = "Title " + AccordionItem.accordionItemCount;
        this.id = "accordion-item-" + AccordionItem.accordionItemCount;
        this.skeleton = false;
        this.selected = new EventEmitter();
        this.itemClass = true;
        this.expanded = false;
        this.itemType = "list-item";
        this.role = "heading";
        this.ariaLevel = 3;
        AccordionItem.accordionItemCount++;
    }
    AccordionItem.prototype.toggleExpanded = function () {
        if (!this.skeleton) {
            this.expanded = !this.expanded;
            this.selected.emit({ id: this.id, expanded: this.expanded });
        }
    };
    AccordionItem.accordionItemCount = 0;
    AccordionItem.decorators = [
        { type: Component, args: [{
                    selector: "ibm-accordion-item",
                    template: "\n\t\t<button\n\t\t\t[attr.aria-expanded]=\"expanded\"\n\t\t\t[attr.aria-controls]=\"id\"\n\t\t\t(click)=\"toggleExpanded()\"\n\t\t\tclass=\"bx--accordion__heading\">\n\t\t\t<svg\n\t\t\t\tclass=\"bx--accordion__arrow\"\n\t\t\t\twidth=\"7\"\n\t\t\t\theight=\"12\"\n\t\t\t\tviewBox=\"0 0 7 12\">\n          \t\t<path fill-rule=\"nonzero\" d=\"M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z\"/>\n\t\t\t</svg>\n\t\t\t<p\n\t\t\t\tclass=\"bx--accordion__title\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t'bx--skeleton__text': skeleton\n\t\t\t\t}\">\n\t\t\t\t{{!skeleton ? title : null}}\n\t\t\t</p>\n\t\t</button>\n\t\t<div [id]=\"id\" class=\"bx--accordion__content\">\n\t\t\t<ng-content *ngIf=\"!skeleton; else skeletonTemplate\"></ng-content>\n\t\t\t<ng-template #skeletonTemplate>\n\t\t\t\t<p class=\"bx--skeleton__text\" style=\"width: 90%\"></p>\n\t\t\t\t<p class=\"bx--skeleton__text\" style=\"width: 80%\"></p>\n\t\t\t\t<p class=\"bx--skeleton__text\" style=\"width: 95%\"></p>\n\t\t\t</ng-template>\n\t\t</div>\n\t"
                },] },
    ];
    /** @nocollapse */
    AccordionItem.ctorParameters = function () { return []; };
    AccordionItem.propDecorators = {
        title: [{ type: Input }],
        id: [{ type: Input }],
        skeleton: [{ type: Input }],
        selected: [{ type: Output }],
        itemClass: [{ type: HostBinding, args: ["class.bx--accordion__item",] }],
        expanded: [{ type: HostBinding, args: ["class.bx--accordion__item--active",] }, { type: Input }],
        itemType: [{ type: HostBinding, args: ["style.display",] }],
        role: [{ type: HostBinding, args: ["attr.role",] }],
        ariaLevel: [{ type: HostBinding, args: ["attr.aria-level",] }, { type: Input }]
    };
    return AccordionItem;
}());
export { AccordionItem };
//# sourceMappingURL=accordion-item.component.js.map