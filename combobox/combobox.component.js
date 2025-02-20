/*!
 *
 * carbon-angular v0.0.0 | combobox.component.js
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


import { Component, ContentChild, Input, Output, HostListener, ElementRef, ViewChild, EventEmitter, HostBinding } from "@angular/core";
import { AbstractDropdownView } from "./../dropdown/abstract-dropdown-view.class";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { filter } from "rxjs/operators";
/**
 * ComboBoxes are similar to dropdowns, except a combobox provides an input field for users to search items and (optionally) add their own.
 * Multi-select comboboxes also provide "pills" of selected items.
 *
 * @export
 * @class ComboBox
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 * @implements {AfterContentInit}
 */
var ComboBox = /** @class */ (function () {
    /**
     * Creates an instance of ComboBox.
     */
    function ComboBox(elementRef) {
        this.elementRef = elementRef;
        /**
         * List of items to fill the content with.
         *
         * **Example:**
         * ```javascript
         * items = [
         *		{
         *			content: "Abacus",
         *			selected: false
         *		},
         *		{
         *			content: "Byte",
         *			selected: false,
         *		},
         *		{
         *			content: "Computer",
         *			selected: false
         *		},
         *		{
         *			content: "Digital",
         *			selected: false
         *		}
         * ];
         * ```
         *
         */
        this.items = [];
        /**
         * Text to show when nothing is selected.
         */
        this.placeholder = "Filter...";
        /**
         * Combo box type (supporting single or multi selection of items).
         */
        this.type = "single";
        /**
         * Combo box render size.
         */
        this.size = "md";
        /**
         * Set to `true` to disable combobox.
         */
        this.disabled = false;
        /**
         * Emits a ListItem
         *
         * Example:
         * ```javascript
         * {
         * 		content: "one",
         * 		selected: true
         * }
         * ```
         */
        this.selected = new EventEmitter();
        /**
         * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
         *
         * Emits an event that includes the current item list, the suggested index for the new item, and a simple ListItem
         *
         * Example:
         * ```javascript
         *	{
         *		items: [{content: "one", selected: true}, {content: "two", selected: true}],
         *		index: 1,
         *		value: {
         *			content: "some user string",
         *			selected: false
         *		}
         *	}
         * ```
         *
         * @param ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
         *
         * Example:
         * ```javascript
         * {
         *	after: 1,
         *	value: "some user string"
         * }
         * ```
         */
        this.submit = new EventEmitter();
        /** emits an empty event when the menu is closed */
        this.close = new EventEmitter();
        this.class = "bx--combo-box bx--list-box";
        this.role = "combobox";
        this.display = "block";
        this.open = false;
        /** Selected items for multi-select combo-boxes. */
        this.pills = [];
        /** used to update the displayValue of `n-pill-input` */
        this.selectedValue = "";
        this.noop = this._noop.bind(this);
        this.onTouchedCallback = this._noop;
        this.propagateChangeCallback = this._noop;
    }
    /**
     * Lifecycle hook.
     * Updates pills if necessary.
     *
     */
    ComboBox.prototype.ngOnChanges = function (changes) {
        if (changes.items) {
            this.view.items = changes.items.currentValue;
            this.updateSelected();
        }
    };
    ComboBox.prototype.ngOnInit = function () {
        if (this.type === "multi") {
            this.class = "bx--multi-select bx--combo-box bx--list-box";
        }
    };
    /**
     * Sets initial state that depends on child components
     * Subscribes to select events and handles focus/filtering/initial list updates
     */
    ComboBox.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.view) {
            this.view.type = this.type;
            this.view.select.subscribe(function (event) {
                if (_this.type === "multi") {
                    _this.updatePills();
                    _this.propagateChangeCallback(_this.view.getSelected());
                }
                else {
                    if (event.item && event.item.selected) {
                        _this.selectedValue = event.item.content;
                        _this.propagateChangeCallback(event.item);
                    }
                    else {
                        _this.selectedValue = "";
                        _this.propagateChangeCallback(null);
                    }
                    // not guarding these since the nativeElement has to be loaded
                    // for select to even fire
                    _this.elementRef.nativeElement.querySelector("input").focus();
                    _this.closeDropdown();
                }
                _this.selected.emit(event);
                _this.view.filterBy("");
            });
            this.view.items = this.items;
            // update the rest of combobox with any pre-selected items
            // setTimeout just defers the call to the next check cycle
            setTimeout(function () {
                _this.updateSelected();
            });
            this.view.blurIntent.pipe(filter(function (v) { return v === "top"; })).subscribe(function () {
                _this.elementRef.nativeElement.querySelector(".bx--text-input").focus();
            });
        }
    };
    /**
     * Binds event handlers against the rendered view
     */
    ComboBox.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.addEventListener("click", function (ev) {
            if (!_this.elementRef.nativeElement.contains(ev.target)) {
                if (_this.open) {
                    _this.closeDropdown();
                }
            }
        });
    };
    /**
     * Handles `Escape` key closing the dropdown, and arrow up/down focus to/from the dropdown list.
     */
    ComboBox.prototype.hostkeys = function (ev) {
        var _this = this;
        if (ev.key === "Escape") {
            this.closeDropdown();
        }
        else if ((ev.key === "ArrowDown" || ev.key === "Down") // `"Down"` is IE specific value
            && (!this.dropdownMenu || !this.dropdownMenu.nativeElement.contains(ev.target))) {
            ev.stopPropagation();
            this.openDropdown();
            setTimeout(function () { return _this.view.getCurrentElement().focus(); }, 0);
        }
    };
    /*
     * no-op method for null event listeners, and other no op calls
     */
    ComboBox.prototype._noop = function () { };
    /*
     * propagates the value provided from ngModel
     */
    ComboBox.prototype.writeValue = function (value) {
        if (value) {
            if (this.type === "single") {
                this.view.propagateSelected([value]);
            }
            else {
                this.view.propagateSelected(value);
            }
        }
    };
    ComboBox.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    ComboBox.prototype.registerOnChange = function (fn) {
        this.propagateChangeCallback = fn;
    };
    ComboBox.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * Called by `n-pill-input` when the selected pills have changed.
     */
    ComboBox.prototype.updatePills = function () {
        this.pills = this.view.getSelected() || [];
        this.propagateChangeCallback(this.view.getSelected());
    };
    ComboBox.prototype.clearSelected = function () {
        this.items = this.items.map(function (item) {
            if (!item.disabled) {
                item.selected = false;
            }
            return item;
        });
        this.view.items = this.items;
        this.updatePills();
        // clearSelected can only fire on type=multi
        // so we just emit getSelected() (just in case there's any disabled but selected items)
        this.selected.emit(this.view.getSelected());
    };
    /**
     * Closes the dropdown and emits the close event.
     */
    ComboBox.prototype.closeDropdown = function () {
        this.open = false;
        this.close.emit();
    };
    /**
     * Opens the dropdown.
     */
    ComboBox.prototype.openDropdown = function () {
        this.open = true;
    };
    /**
     * Toggles the dropdown.
     */
    ComboBox.prototype.toggleDropdown = function () {
        if (this.open) {
            this.closeDropdown();
        }
        else {
            this.openDropdown();
        }
    };
    /**
     * Sets the list group filter, and manages single select item selection.
     */
    ComboBox.prototype.onSearch = function (searchString) {
        this.view.filterBy(searchString);
        if (searchString !== "") {
            this.openDropdown();
        }
        else {
            this.selectedValue = "";
        }
        if (this.type === "single") {
            // deselect if the input doesn't match the content
            // of any given item
            var matches = this.view.getListItems().some(function (item) { return item.content.toLowerCase().includes(searchString.toLowerCase()); });
            if (!matches) {
                var selected = this.view.getSelected();
                if (selected) {
                    selected[0].selected = false;
                    // notify that the selection has changed
                    this.view.select.emit({ item: selected[0] });
                    this.propagateChangeCallback(null);
                }
                else {
                    this.view.filterBy("");
                }
            }
        }
    };
    /**
     * Bubbles from `n-pill-input` when the user types a value and presses enter. Intended to be used to add items to the list.
     *
     * @param {any} ev event from `n-pill-input`, includes the typed value and the index of the pill the user typed after
     *
     * Example:
     * ```javascript
     *	{
     *	after: 1,
     *	value: "some user string"
     *	}
     * ```
     */
    ComboBox.prototype.onSubmit = function (ev) {
        var index = 0;
        if (ev.after) {
            index = this.view.getListItems().indexOf(ev.after) + 1;
        }
        this.submit.emit({
            items: this.view.getListItems(),
            index: index,
            value: {
                content: ev.value,
                selected: false
            }
        });
    };
    ComboBox.prototype.updateSelected = function () {
        var selected = this.view.getSelected();
        if (selected) {
            if (this.type === "multi") {
                this.updatePills();
            }
            else {
                this.selectedValue = selected[0].content;
                this.propagateChangeCallback(selected[0]);
            }
        }
    };
    ComboBox.decorators = [
        { type: Component, args: [{
                    selector: "ibm-combo-box",
                    template: "\n\t\t<div\n\t\t\t[attr.aria-expanded]=\"open\"\n\t\t\trole=\"button\"\n\t\t\tclass=\"bx--list-box__field\"\n\t\t\ttabindex=\"0\"\n\t\t\ttype=\"button\"\n\t\t\taria-label=\"close menu\"\n\t\t\taria-haspopup=\"true\"\n\t\t\t(click)=\"toggleDropdown()\">\n\t\t\t<div\n\t\t\t\t*ngIf=\"type === 'multi' && pills.length > 0\"\n\t\t\t\t(click)=\"clearSelected()\"\n\t\t\t\trole=\"button\"\n\t\t\t\tclass=\"bx--list-box__selection bx--list-box__selection--multi\"\n\t\t\t\ttabindex=\"0\"\n\t\t\t\ttitle=\"Clear all selected items\">\n\t\t\t\t{{ pills.length }}\n\t\t\t\t<svg\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\theight=\"10\"\n\t\t\t\t\trole=\"img\"\n\t\t\t\t\tviewBox=\"0 0 10 10\"\n\t\t\t\t\twidth=\"10\"\n\t\t\t\t\tfocusable=\"false\"\n\t\t\t\t\taria-label=\"Clear all selected items\">\n\t\t\t\t\t<title>Clear all selected items</title>\n\t\t\t\t\t<path d=\"M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z\"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<input\n\t\t\t\t[disabled]=\"disabled\"\n\t\t\t\t(keyup)=\"onSearch($event.target.value)\"\n\t\t\t\t[value]=\"selectedValue\"\n\t\t\t\tclass=\"bx--text-input\"\n\t\t\t\taria-label=\"ListBox input field\"\n\t\t\t\tautocomplete=\"off\"\n\t\t\t\t[placeholder]=\"placeholder\"/>\n\t\t\t<div\n\t\t\t\t[ngClass]=\"{'bx--list-box__menu-icon--open': open}\"\n\t\t\t\tclass=\"bx--list-box__menu-icon\">\n\t\t\t\t<svg\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\theight=\"5\"\n\t\t\t\t\trole=\"img\"\n\t\t\t\t\tviewBox=\"0 0 10 5\"\n\t\t\t\t\twidth=\"10\"\n\t\t\t\t\taria-label=\"Close menu\">\n\t\t\t\t\t<title>Close menu</title>\n\t\t\t\t\t<path d=\"M0 0l5 4.998L10 0z\"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</div>\n\t\t<div\n\t\t\t#dropdownMenu\n\t\t\t*ngIf=\"open\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: ComboBox,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    ComboBox.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ComboBox.propDecorators = {
        items: [{ type: Input }],
        placeholder: [{ type: Input }],
        type: [{ type: Input }],
        size: [{ type: Input }],
        disabled: [{ type: HostBinding, args: ["attr.aria-disabled",] }, { type: Input }],
        selected: [{ type: Output }],
        submit: [{ type: Output }],
        close: [{ type: Output }],
        view: [{ type: ContentChild, args: [AbstractDropdownView,] }],
        dropdownMenu: [{ type: ViewChild, args: ["dropdownMenu",] }],
        class: [{ type: HostBinding, args: ["class",] }],
        role: [{ type: HostBinding, args: ["attr.role",] }],
        display: [{ type: HostBinding, args: ["style.display",] }],
        hostkeys: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return ComboBox;
}());
export { ComboBox };
//# sourceMappingURL=combobox.component.js.map