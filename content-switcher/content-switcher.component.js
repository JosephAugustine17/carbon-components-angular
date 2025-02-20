/*!
 *
 * carbon-angular v0.0.0 | content-switcher.component.js
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


import { Component, Input, ContentChildren, QueryList, Output, EventEmitter, HostListener, ElementRef } from "@angular/core";
import { ContentSwitcherOption } from "./content-switcher-option.directive";
import { isFocusInLastItem, isFocusInFirstItem } from "./../common/tab.service";
/**
 * The content switcher can be used for toggling between distinct options.
 * Similar to tabs, but without an associated content panel
 *
 * ```html
 * <ibm-content-switcher (selected)="selected($event)">
 *		<button ibmContentOption>First section</button>
 *		<button ibmContentOption>Second section</button>
 *		<button ibmContentOption>Third section</button>
 *	</ibm-content-switcher>
 *	```
 */
var ContentSwitcher = /** @class */ (function () {
    function ContentSwitcher(elementRef) {
        this.elementRef = elementRef;
        /**
         * aria-label for the content switcher. Should be set to something descriptive
         */
        this.label = "content switcher";
        /**
         * Emits the activated `ContentSwitcherOption`
         */
        this.selected = new EventEmitter();
    }
    ContentSwitcher.prototype.ngAfterViewInit = function () {
        var _this = this;
        var firstActive = this.options.find(function (option) { return option.active; });
        // delay setting active until the DOM has settled
        if (!firstActive) {
            setTimeout(function () { return _this.options.first.active = true; });
        }
        // subscribe to each item, emit when one is selected, and reset the active states
        this.options.forEach(function (option) {
            option.selected.subscribe(function (_) {
                var active = option;
                _this.options.forEach(function (option) {
                    if (option !== active) {
                        option.active = false;
                    }
                });
                _this.selected.emit(active);
            });
        });
    };
    ContentSwitcher.prototype.hostkeys = function (event) {
        var buttonList = Array.from(this.elementRef.nativeElement.querySelectorAll("[ibmContentOption]"));
        switch (event.key) {
            case "Right": // IE specific value
            case "ArrowRight":
                event.preventDefault();
                if (!isFocusInLastItem(event, buttonList)) {
                    var index = buttonList.findIndex(function (item) { return item === event.target; });
                    buttonList[index + 1].focus();
                }
                else {
                    buttonList[0].focus();
                }
                break;
            case "Left": // IE specific value
            case "ArrowLeft":
                event.preventDefault();
                if (!isFocusInFirstItem(event, buttonList)) {
                    var index = buttonList.findIndex(function (item) { return item === event.target; });
                    buttonList[index - 1].focus();
                }
                else {
                    buttonList[buttonList.length - 1].focus();
                }
                break;
            case "Home":
                event.preventDefault();
                buttonList[0].focus();
                break;
            case "End":
                event.preventDefault();
                buttonList[buttonList.length - 1].focus();
                break;
        }
    };
    ContentSwitcher.decorators = [
        { type: Component, args: [{
                    selector: "ibm-content-switcher",
                    template: "\n\t\t<div\n\t\t\t[attr.aria-label]=\"label\"\n\t\t\tclass=\"bx--content-switcher\"\n\t\t\trole=\"tablist\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
                },] },
    ];
    /** @nocollapse */
    ContentSwitcher.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ContentSwitcher.propDecorators = {
        label: [{ type: Input }],
        selected: [{ type: Output }],
        options: [{ type: ContentChildren, args: [ContentSwitcherOption,] }],
        hostkeys: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return ContentSwitcher;
}());
export { ContentSwitcher };
//# sourceMappingURL=content-switcher.component.js.map