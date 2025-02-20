/*!
 *
 * carbon-angular v0.0.0 | dropdown.component.d.ts
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


import { EventEmitter, ElementRef, OnInit, AfterContentInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AbstractDropdownView } from "./abstract-dropdown-view.class";
import { I18n } from "./../i18n/i18n.module";
import { DropdownService } from "./dropdown.service";
/**
 * Drop-down lists enable users to select one or more items from a list.
 *
 */
export declare class Dropdown implements OnInit, AfterContentInit, OnDestroy {
    protected elementRef: ElementRef;
    protected i18n: I18n;
    protected dropdownService: DropdownService;
    /**
     * Value displayed if no item is selected.
     */
    placeholder: string;
    /**
     * The selected value from the `Dropdown`.
     */
    displayValue: string;
    /**
     * Size to render the dropdown field.
     */
    size: "sm" | "md" | "lg";
    /**
     * Defines whether or not the `Dropdown` supports selecting multiple items as opposed to single
     * item selection.
     */
    type: "single" | "multi";
    /**
     * `light` or `dark` dropdown theme
     */
    theme: "light" | "dark";
    /**
     * Set to `true` to disable the dropdown.
     */
    disabled: boolean;
    /**
     * Set to `true` for a loading dropdown.
     */
    skeleton: boolean;
    /**
     * Set to `true` for an inline dropdown.
     */
    inline: boolean;
    /**
     * Set to `true` for a dropdown without arrow key activation.
     */
    disableArrowKeys: boolean;
    /**
     * Deprecated. Dropdown now defaults to appending inline
     * Set to `true` if the `Dropdown` is to be appended to the DOM body.
     */
    appendToBody: any;
    /**
     * set to `true` to place the dropdown view inline with the component
     */
    appendInline: boolean;
    /**
     * Query string for the element that contains the `Dropdown`.
     * Used to trigger closing the dropdown if it scrolls outside of the viewport of the `scrollableContainer`.
     */
    scrollableContainer: string;
    /**
     * Specifies the property to be used as the return value to `ngModel`
     */
    value: string;
    /**
     * Accessible label for the button that opens the dropdown list.
     * Defaults to the `DROPDOWN.OPEN` value from the i18n service.
     */
    menuButtonLabel: any;
    /**
     * Provides the label for the "# selected" text.
     * Defaults to the `DROPDOWN.SELECTED` value from the i18n service.
     */
    selectedLabel: any;
    /**
     * Emits selection events.
     */
    selected: EventEmitter<Object>;
    /**
     * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
     */
    onClose: EventEmitter<any>;
    /**
     * Emits event notifying to other classes that the `Dropdown` has been closed (collapsed).
     */
    close: EventEmitter<any>;
    /**
     * Maintains a reference to the `AbstractDropdownView` object within the content DOM.
     */
    view: AbstractDropdownView;
    /**
     * Maintains a reference to the view DOM element of the `Dropdown` button.
     */
    dropdownButton: any;
    /**
     * ViewChid of the dropdown view.
     */
    dropdownMenu: any;
    /**
     * Set to `true` if the dropdown is closed (not expanded).
     */
    menuIsClosed: boolean;
    /**
     * controls wether the `drop-up` class is applied
     */
    dropUp: boolean;
    noop: any;
    outsideClick: any;
    outsideKey: any;
    keyboardNav: any;
    /**
     *  Maintians an Event Observable Subscription for tracking scrolling within the open `Dropdown` list.
     */
    scroll: Subscription;
    protected onTouchedCallback: () => void;
    /**
     * Creates an instance of Dropdown.
     */
    constructor(elementRef: ElementRef, i18n: I18n, dropdownService: DropdownService);
    /**
     * Updates the `type` property in the `@ContentChild`.
     * The `type` property specifies whether the `Dropdown` allows single selection or multi selection.
     */
    ngOnInit(): void;
    /**
     * Initializes classes and subscribes to events for single or multi selection.
     */
    ngAfterContentInit(): void;
    /**
     * Removing the `Dropdown` from the body if it is appended to the body.
     */
    ngOnDestroy(): void;
    /**
     * Propagates the injected `value`.
     */
    writeValue(value: any): void;
    onBlur(): void;
    registerOnChange(fn: any): void;
    /**
     * Registering the function injected to control the touch use of the `Dropdown`.
     */
    registerOnTouched(fn: any): void;
    propagateChange: (_: any) => void;
    /**
     * Adds keyboard functionality for navigation, selection and closing of the `Dropdown`.
     */
    onKeyDown(event: KeyboardEvent): void;
    closedDropdownNavigation(event: any): void;
    /**
     * Returns the display value if there is a selection and displayValue is set,
     * if there is just a selection the ListItem content property will be returned,
     * otherwise the placeholder will be returned.
     */
    getDisplayValue(): Observable<string>;
    /**
     * Returns `true` if there is a value selected.
     */
    valueSelected(): boolean;
    _noop(): void;
    /**
     * Handles clicks outside of the `Dropdown`.
     */
    _outsideClick(event: any): void;
    _outsideKey(event: any): void;
    /**
     * Handles keyboard events so users are controlling the `Dropdown` instead of unintentionally controlling outside elements.
     */
    _keyboardNav(event: KeyboardEvent): void;
    /**
     * Creates the `Dropdown` list appending it to the dropdown parent object instead of the body.
     */
    _appendToDropdown(): void;
    /**
     * Creates the `Dropdown` list as an element that is appended to the DOM body.
     */
    _appendToBody(): void;
    /**
     * Expands the dropdown menu in the view.
     */
    openMenu(): void;
    /**
     * Collapsing the dropdown menu and removing unnecessary `EventListeners`.
     */
    closeMenu(): void;
    /**
     * Add scroll event listener if scrollableContainer is provided
     */
    addScrollEventListener(): void;
    /**
     * Removes any `EventListeners` responsible for scroll functionality.
     */
    removeScrollEventListener(): void;
    /**
     * Controls toggling menu states between open/expanded and closed/collapsed.
     */
    toggleMenu(): void;
    /**
     * Returns `true` if the `elem` is visible within the `container`.
     */
    isVisibleInContainer(elem: HTMLElement, container: HTMLElement): boolean;
    clearSelected(): void;
}
