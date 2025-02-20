/*!
 *
 * carbon-angular v0.0.0 | dropdown-list.component.js
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


import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
import { AbstractDropdownView } from "./../abstract-dropdown-view.class";
import { watchFocusJump } from "./../dropdowntools";
import { isObservable } from "rxjs";
/**
 * ```html
 * <ibm-dropdown-list [items]="listItems"></ibm-dropdown-list>
 * ```
 * ```typescript
 * listItems = [
 * 	{
 * 		content: "item one",
 * 		selected: false
 * 	},
 * 	{
 * 		content: "item two",
 * 		selected: false,
 * 	},
 * 	{
 * 		content: "item three",
 * 		selected: false
 * 	},
 * 	{
 * 		content: "item four",
 * 		selected: false
 * 	}
 * ];
 * ```
 */
var DropdownList = /** @class */ (function () {
    /**
     * Creates an instance of `DropdownList`.
     */
    function DropdownList(elementRef, i18n) {
        this.elementRef = elementRef;
        this.i18n = i18n;
        this.ariaLabel = this.i18n.get().DROPDOWN_LIST.LABEL;
        /**
         * Template to bind to items in the `DropdownList` (optional).
         */
        this.listTpl = null;
        /**
         * Event to emit selection of a list item within the `DropdownList`.
         */
        this.select = new EventEmitter();
        /**
         * Event to suggest a blur on the view.
         * Emits _after_ the first/last item has been focused.
         * ex.
         * ArrowUp -> focus first item
         * ArrowUp -> emit event
         *
         * When this event fires focus should be placed on some element outside of the list - blurring the list as a result
         */
        this.blurIntent = new EventEmitter();
        /**
         * Defines whether or not the `DropdownList` supports selecting multiple items as opposed to single
         * item selection.
         */
        this.type = "single";
        /**
         * Defines the rendering size of the `DropdownList` input component.
         */
        this.size = "md";
        /**
         * Holds the list of items that will be displayed in the `DropdownList`.
         * It differs from the the complete set of items when filtering is used (but
         * it is always a subset of the total items in `DropdownList`).
         */
        this.displayItems = [];
        /**
         * Maintains the index for the selected item within the `DropdownList`.
         */
        this.index = -1;
        /**
         * Useful representation of the items, should be accessed via `getListItems`.
         */
        this._items = [];
    }
    Object.defineProperty(DropdownList.prototype, "items", {
        get: function () {
            return this._originalItems;
        },
        /**
         * The list items belonging to the `DropdownList`.
         */
        set: function (value) {
            var _this = this;
            if (isObservable(value)) {
                if (this._itemsSubscription) {
                    this._itemsSubscription.unsubscribe();
                }
                this._itemsSubscription = value.subscribe(function (v) { return _this.updateList(v); });
            }
            else {
                this.updateList(value);
            }
            this._originalItems = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves array of list items and index of the selected item after view has rendered.
     * Additionally, any Observables for the `DropdownList` are initialized.
     */
    DropdownList.prototype.ngAfterViewInit = function () {
        this.index = this.getListItems().findIndex(function (item) { return item.selected; });
        this.setupFocusObservable();
    };
    /**
     * Removes any Observables on destruction of the component.
     */
    DropdownList.prototype.ngOnDestroy = function () {
        if (this.focusJump) {
            this.focusJump.unsubscribe();
        }
    };
    /**
     * Updates the displayed list of items and then retrieves the most current properties for the `DropdownList` from the DOM.
     */
    DropdownList.prototype.updateList = function (items) {
        var _this = this;
        this._items = items.map(function (item) { return Object.assign({}, item); });
        this.displayItems = this._items;
        this.index = this._items.findIndex(function (item) { return item.selected; });
        this.setupFocusObservable();
        setTimeout(function () {
            if (!_this.getSelected()) {
                return;
            }
            if (_this.type === "single") {
                _this.select.emit({ item: _this._items.find(function (item) { return item.selected; }) });
            }
            else {
                _this.select.emit(_this.getSelected() || []);
            }
        });
    };
    /**
     * Filters the items being displayed in the DOM list.
     */
    DropdownList.prototype.filterBy = function (query) {
        if (query === void 0) { query = ""; }
        if (query) {
            this.displayItems = this.getListItems().filter(function (item) { return item.content.toLowerCase().includes(query.toLowerCase()); });
        }
        else {
            this.displayItems = this.getListItems();
        }
        // reset the index since the list has changed visually
        this.index = 0;
    };
    /**
     * Initializes (or re-initializes) the Observable that handles switching focus to an element based on
     * key input matching the first letter of the item in the list.
     */
    DropdownList.prototype.setupFocusObservable = function () {
        if (this.focusJump) {
            this.focusJump.unsubscribe();
        }
        var elList = Array.from(this.list.nativeElement.querySelectorAll("li"));
        this.focusJump = watchFocusJump(this.list.nativeElement, elList)
            .subscribe(function (el) {
            el.focus();
        });
    };
    /**
     * Returns the `ListItem` that is subsequent to the selected item in the `DropdownList`.
     */
    DropdownList.prototype.getNextItem = function () {
        if (this.index < this.displayItems.length - 1) {
            this.index++;
        }
        return this.displayItems[this.index];
    };
    /**
     * Returns `true` if the selected item is not the last item in the `DropdownList`.
     * TODO: standardize
     */
    DropdownList.prototype.hasNextElement = function () {
        if (this.index < this.displayItems.length - 1) {
            return true;
        }
        return false;
    };
    /**
     * Returns the `HTMLElement` for the item that is subsequent to the selected item.
     */
    DropdownList.prototype.getNextElement = function () {
        if (this.index < this.displayItems.length - 1) {
            this.index++;
        }
        var elem = this.listElementList.toArray()[this.index].nativeElement;
        var item = this.displayItems[this.index];
        if (item.disabled) {
            return this.getNextElement();
        }
        return elem;
    };
    /**
     * Returns the `ListItem` that precedes the selected item within `DropdownList`.
     */
    DropdownList.prototype.getPrevItem = function () {
        if (this.index > 0) {
            this.index--;
        }
        return this.displayItems[this.index];
    };
    /**
     * Returns `true` if the selected item is not the first in the list.
     * TODO: standardize
     */
    DropdownList.prototype.hasPrevElement = function () {
        if (this.index > 0) {
            return true;
        }
        return false;
    };
    /**
     * Returns the `HTMLElement` for the item that precedes the selected item.
     */
    DropdownList.prototype.getPrevElement = function () {
        if (this.index > 0) {
            this.index--;
        }
        var elem = this.listElementList.toArray()[this.index].nativeElement;
        var item = this.displayItems[this.index];
        if (item.disabled) {
            return this.getPrevElement();
        }
        return elem;
    };
    /**
     * Returns the `ListItem` that is selected within `DropdownList`.
     */
    DropdownList.prototype.getCurrentItem = function () {
        if (this.index < 0) {
            return this.displayItems[0];
        }
        return this.displayItems[this.index];
    };
    /**
     * Returns the `HTMLElement` for the item that is selected within the `DropdownList`.
     */
    DropdownList.prototype.getCurrentElement = function () {
        if (this.index < 0) {
            return this.listElementList.first.nativeElement;
        }
        return this.listElementList.toArray()[this.index].nativeElement;
    };
    /**
     * Returns the items as an Array
     */
    DropdownList.prototype.getListItems = function () {
        return this._items;
    };
    /**
     * Returns a list containing the selected item(s) in the `DropdownList`.
     */
    DropdownList.prototype.getSelected = function () {
        var selected = this.getListItems().filter(function (item) { return item.selected; });
        if (selected.length === 0) {
            return null;
        }
        return selected;
    };
    /**
     * Transforms array input list of items to the correct state by updating the selected item(s).
     */
    DropdownList.prototype.propagateSelected = function (value) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var newItem = value_1[_i];
            // copy the item
            var tempNewItem = Object.assign({}, newItem);
            // deleted selected because it's what we _want_ to change
            delete tempNewItem.selected;
            // stringify for compare
            tempNewItem = JSON.stringify(tempNewItem);
            for (var _a = 0, _b = this.getListItems(); _a < _b.length; _a++) {
                var oldItem = _b[_a];
                var tempOldItem = Object.assign({}, oldItem);
                delete tempOldItem.selected;
                tempOldItem = JSON.stringify(tempOldItem);
                // do the compare
                if (tempOldItem.includes(tempNewItem)) {
                    // oldItem = Object.assign(oldItem, newItem);
                    oldItem.selected = newItem.selected;
                }
                else {
                    oldItem.selected = false;
                }
            }
        }
    };
    /**
     * Initializes focus in the list, effectively a wrapper for `getCurrentElement().focus()`
     */
    DropdownList.prototype.initFocus = function () {
        // ensure we start at this first item if nothing is already selected
        if (this.index < 0) {
            this.index = 0;
        }
        this.getCurrentElement().focus();
    };
    /**
     * Manages the keyboard accessibility for navigation and selection within a `DropdownList`.
     */
    DropdownList.prototype.doKeyDown = function (event, item) {
        // "Spacebar", "Down", and "Up" are IE specific values
        if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
            event.preventDefault();
            if (event.key === "Enter") {
                this.doClick(event, item);
            }
        }
        else if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Down" || event.key === "Up") {
            event.preventDefault();
            if (event.key === "ArrowDown" || event.key === "Down") {
                if (this.hasNextElement()) {
                    this.getNextElement().focus();
                }
                else {
                    this.blurIntent.emit("bottom");
                }
            }
            else if (event.key === "ArrowUp" || event.key === "Up") {
                if (this.hasPrevElement()) {
                    this.getPrevElement().focus();
                }
                else {
                    this.blurIntent.emit("top");
                }
            }
        }
    };
    /**
     * Emits the selected item or items after a mouse click event has occurred.
     */
    DropdownList.prototype.doClick = function (event, item) {
        if (!item.disabled) {
            if (this.type === "single") {
                item.selected = true;
                // reset the selection
                for (var _i = 0, _a = this.getListItems(); _i < _a.length; _i++) {
                    var otherItem = _a[_i];
                    if (item !== otherItem) {
                        otherItem.selected = false;
                    }
                }
                this.select.emit({ item: item });
            }
            else {
                item.selected = !item.selected;
                // emit an array of selected items
                this.select.emit(this.getSelected());
            }
            this.index = this.getListItems().indexOf(item);
        }
    };
    DropdownList.prototype.onItemFocus = function (index) {
        var element = this.listElementList.toArray()[index].nativeElement;
        element.classList.add("bx--list-box__menu-item--highlighted");
        element.tabIndex = 0;
    };
    DropdownList.prototype.onItemBlur = function (index) {
        var element = this.listElementList.toArray()[index].nativeElement;
        element.classList.remove("bx--list-box__menu-item--highlighted");
        element.tabIndex = -1;
    };
    DropdownList.prototype.resetSelected = function () {
        var clearedItems = this.getListItems().map(function (item) { return Object.assign({}, item, { selected: false }); });
        this.updateList(clearedItems);
    };
    DropdownList.decorators = [
        { type: Component, args: [{
                    selector: "ibm-dropdown-list",
                    template: "\n\t\t<ul\n\t\t\t#list\n\t\t\trole=\"listbox\"\n\t\t\tclass=\"bx--list-box__menu\"\n\t\t\t[attr.aria-label]=\"ariaLabel\">\n\t\t\t<li\n\t\t\t\t#listItem\n\t\t\t\ttabindex=\"-1\"\n\t\t\t\trole=\"option\"\n\t\t\t\t*ngFor=\"let item of displayItems; let i = index\"\n\t\t\t\t(click)=\"doClick($event, item)\"\n\t\t\t\t(keydown)=\"doKeyDown($event, item)\"\n\t\t\t\t(focus)=\"onItemFocus(i)\"\n\t\t\t\t(blur)=\"onItemBlur(i)\"\n\t\t\t\tclass=\"bx--list-box__menu-item\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\tselected: item.selected,\n\t\t\t\t\tdisabled: item.disabled\n\t\t\t\t}\">\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"!listTpl && type === 'multi'\"\n\t\t\t\t\tclass=\"bx--form-item\">\n\t\t\t\t\t<input\n\t\t\t\t\t\tclass=\"bx--checkbox\"\n\t\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t\t[checked]=\"item.selected\"\n\t\t\t\t\t\t[disabled]=\"item.disabled\"\n\t\t\t\t\t\t(click)=\"doClick($event, item)\"\n\t\t\t\t\t\ttabindex=\"-1\">\n\t\t\t\t\t\t<label class=\"bx--checkbox-label\">\n\t\t\t\t\t\t\t<span>{{item.content}}</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<ng-container *ngIf=\"!listTpl && type === 'single'\">{{item.content}}</ng-container>\n\t\t\t\t<ng-template\n\t\t\t\t\t*ngIf=\"listTpl\"\n\t\t\t\t\t[ngTemplateOutletContext]=\"{$implicit: item}\"\n\t\t\t\t\t[ngTemplateOutlet]=\"listTpl\">\n\t\t\t\t</ng-template>\n\t\t\t</li>\n\t\t</ul>",
                    providers: [
                        {
                            provide: AbstractDropdownView,
                            useExisting: DropdownList
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    DropdownList.ctorParameters = function () { return [
        { type: ElementRef },
        { type: I18n }
    ]; };
    DropdownList.propDecorators = {
        ariaLabel: [{ type: Input }],
        items: [{ type: Input }],
        listTpl: [{ type: Input }],
        select: [{ type: Output }],
        blurIntent: [{ type: Output }],
        list: [{ type: ViewChild, args: ["list",] }],
        clearSelected: [{ type: ViewChild, args: ["clearSelected",] }],
        type: [{ type: Input }],
        listElementList: [{ type: ViewChildren, args: ["listItem",] }]
    };
    return DropdownList;
}());
export { DropdownList };
//# sourceMappingURL=dropdown-list.component.js.map