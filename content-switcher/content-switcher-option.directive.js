/*!
 *
 * carbon-angular v0.0.0 | content-switcher-option.directive.js
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


import { Directive, HostBinding, Input, HostListener, Output, EventEmitter } from "@angular/core";
var ContentSwitcherOption = /** @class */ (function () {
    function ContentSwitcherOption() {
        /**
         * Internal name for the option.
         * Should be something that identifies the option to the application.
         * Accessible from the `ContentSwitcher` `selected` emitter
         */
        this.name = "option";
        /**
         * Emits when the option is selected.
         */
        this.selected = new EventEmitter();
        this.switcherClass = "bx--content-switcher-btn";
        this.selectedClass = false;
        this.role = "tab";
        this.ariaSelected = false;
        this.tabindex = "-1";
        this._active = false;
    }
    Object.defineProperty(ContentSwitcherOption.prototype, "active", {
        get: function () {
            return this._active;
        },
        /**
         * Used to activate the option. Only one option may be `active` at a time
         */
        set: function (value) {
            this._active = value;
            this.selectedClass = value;
            this.ariaSelected = value;
            this.tabindex = value ? "0" : "-1";
        },
        enumerable: true,
        configurable: true
    });
    ContentSwitcherOption.prototype.hostClick = function () {
        this.active = true;
        this.selected.emit(true);
    };
    ContentSwitcherOption.prototype.onFocus = function () {
        this.active = true;
    };
    ContentSwitcherOption.prototype.onBlur = function (event) {
        if (event.relatedTarget && event.relatedTarget.classList.contains("bx--content-switcher-btn")) {
            this.active = false;
        }
    };
    ContentSwitcherOption.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmContentOption]"
                },] },
    ];
    ContentSwitcherOption.propDecorators = {
        active: [{ type: Input }],
        name: [{ type: Input }],
        selected: [{ type: Output }],
        switcherClass: [{ type: HostBinding, args: ["class",] }],
        selectedClass: [{ type: HostBinding, args: ["class.bx--content-switcher--selected",] }],
        role: [{ type: HostBinding, args: ["attr.role",] }],
        ariaSelected: [{ type: HostBinding, args: ["attr.aria-selected",] }],
        tabindex: [{ type: HostBinding, args: ["attr.tabIndex",] }],
        hostClick: [{ type: HostListener, args: ["click",] }],
        onFocus: [{ type: HostListener, args: ["focus",] }],
        onBlur: [{ type: HostListener, args: ["blur", ["$event"],] }]
    };
    return ContentSwitcherOption;
}());
export { ContentSwitcherOption };
//# sourceMappingURL=content-switcher-option.directive.js.map