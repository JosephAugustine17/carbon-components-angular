/*!
 *
 * carbon-angular v0.0.0 | overflow-menu-pane.component.js
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


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, HostListener, ElementRef } from "@angular/core";
import { Dialog } from "../dialog.component";
import { position } from "../../utils/position";
import { isFocusInLastItem, isFocusInFirstItem } from "./../../common/tab.service";
import { I18n } from "./../../i18n/i18n.module";
import { ExperimentalService } from "./../../experimental.module";
/**
 * Extend the `Dialog` component to create an overflow menu.
 *
 * Not used directly. See overflow-menu.component and overflow-menu.directive for more
 */
var OverflowMenuPane = /** @class */ (function (_super) {
    __extends(OverflowMenuPane, _super);
    function OverflowMenuPane(elementRef, i18n, experimental) {
        var _this = _super.call(this, elementRef) || this;
        _this.elementRef = elementRef;
        _this.i18n = i18n;
        _this.experimental = experimental;
        return _this;
    }
    OverflowMenuPane.prototype.onDialogInit = function () {
        var _this = this;
        this.addGap["bottom"] = function (pos) {
            var offset;
            if (_this.experimental.isExperimental) {
                /*
                * 16 is half the width of the overflow menu trigger element.
                * we also move the element by half of it's own width, since
                * position service will try and center everything
                */
                offset = Math.round(_this.dialog.nativeElement.offsetWidth / 2) - 16;
            }
            else {
                // 60 shifts the menu right to align the arrow.
                offset = 60;
            }
            if (_this.dialogConfig.flip) {
                return position.addOffset(pos, 0, -offset);
            }
            return position.addOffset(pos, 0, offset);
        };
        if (!this.dialogConfig.menuLabel) {
            this.dialogConfig.menuLabel = this.i18n.get().OVERFLOW_MENU.OVERFLOW;
        }
    };
    OverflowMenuPane.prototype.hostkeys = function (event) {
        var listItems = this.listItems();
        switch (event.key) {
            case "Down": // IE specific value
            case "ArrowDown":
                event.preventDefault();
                if (!isFocusInLastItem(event, listItems)) {
                    var index = listItems.findIndex(function (item) { return item === event.target; });
                    listItems[index + 1].focus();
                }
                else {
                    listItems[0].focus();
                }
                break;
            case "Up": // IE specific value
            case "ArrowUp":
                event.preventDefault();
                if (!isFocusInFirstItem(event, listItems)) {
                    var index = listItems.findIndex(function (item) { return item === event.target; });
                    listItems[index - 1].focus();
                }
                else {
                    listItems[listItems.length - 1].focus();
                }
                break;
            case "Home":
                event.preventDefault();
                listItems[0].focus();
                break;
            case "End":
                event.preventDefault();
                listItems[listItems.length - 1].focus();
                break;
            case "Esc": // IE specific value
            case "Escape":
            case "Tab":
                event.stopImmediatePropagation();
                this.doClose();
                break;
            default: break;
        }
    };
    OverflowMenuPane.prototype.afterDialogViewInit = function () {
        var focusElementList = this.listItems();
        focusElementList.forEach(function (button) {
            // Allows user to set tabindex to 0.
            if (button.getAttribute("tabindex") === null) {
                button.tabIndex = -1;
            }
        });
        focusElementList[0].tabIndex = 0;
        focusElementList[0].focus();
    };
    OverflowMenuPane.prototype.listItems = function () {
        var selector = ".bx--overflow-menu-options__option:not([disabled]) .bx--overflow-menu-options__btn";
        return Array.from(this.elementRef.nativeElement.querySelectorAll(selector));
    };
    OverflowMenuPane.decorators = [
        { type: Component, args: [{
                    selector: "ibm-overflow-menu-pane",
                    template: "\n\t\t<ul\n\t\t\t[attr.aria-label]=\"dialogConfig.menuLabel\"\n\t\t\t[ngClass]=\"{'bx--overflow-menu--flip': dialogConfig.flip}\"\n\t\t\trole=\"menu\"\n\t\t\t#dialog\n\t\t\tclass=\"bx--overflow-menu-options bx--overflow-menu-options--open\"\n\t\t\trole=\"menu\"\n\t\t\t(click)=\"doClose()\"\n\t\t\t[attr.aria-label]=\"dialogConfig.menuLabel\">\n\t\t\t<ng-template\n\t\t\t\t[ngTemplateOutlet]=\"dialogConfig.content\"\n\t\t\t\t[ngTemplateOutletContext]=\"{overflowMenu: this}\">\n\t\t\t</ng-template>\n\t\t</ul>\n\t"
                },] },
    ];
    /** @nocollapse */
    OverflowMenuPane.ctorParameters = function () { return [
        { type: ElementRef },
        { type: I18n },
        { type: ExperimentalService }
    ]; };
    OverflowMenuPane.propDecorators = {
        hostkeys: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return OverflowMenuPane;
}(Dialog));
export { OverflowMenuPane };
//# sourceMappingURL=overflow-menu-pane.component.js.map