/*!
 *
 * carbon-angular v0.0.0 | dialog.component.d.ts
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


import { EventEmitter, ElementRef, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AbsolutePosition } from "./../utils/position";
import { DialogConfig } from "./dialog-config.interface";
/**
 * Implements a `Dialog` that can be positioned anywhere on the page.
 * Used to implement a popover or tooltip.
 *
 * @export
 * @class Dialog
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 */
export declare class Dialog implements OnInit, AfterViewInit, OnDestroy {
    protected elementRef: ElementRef;
    /**
     * One static event observable to handle window resizing.
     * @protected
     * @static
     * @type {Observable<any>}
     * @memberof Dialog
     */
    protected static resizeObservable: Observable<any>;
    /**
     * Emits event that handles the closing of a `Dialog` object.
     * @type {EventEmitter<any>}
     * @memberof Dialog
     */
    close: EventEmitter<any>;
    /**
     * Receives `DialogConfig` interface object with properties of `Dialog`
     * explictly defined.
     * @type {DialogConfig}
     * @memberof Dialog
     */
    dialogConfig: DialogConfig;
    /**
     * Maintains a reference to the view DOM element of the `Dialog`.
     * @type {ElementRef}
     * @memberof Dialog
     */
    dialog: ElementRef;
    /**
     * Stores the data received from `dialogConfig`.
     * @memberof Dialog
     */
    data: {};
    /**
     * The placement of the `Dialog` is recieved from the `Position` service.
     * @type {Placement}
     * @memberof Dialog
     */
    placement: string;
    /**
     * `Subscription` used to update placement in the event of a window resize.
     * @protected
     * @type {Subscription}
     * @memberof Dialog
     */
    protected resizeSubscription: Subscription;
    /**
     * Subscription to all the scrollable parents `scroll` event
     */
    protected scrollSubscription: Subscription;
    /**
     * Handles offsetting the `Dialog` item based on the defined position
     * to not obscure the content beneath.
     * @protected
     * @memberof Dialog
     */
    protected addGap: {
        "left": (pos: any) => AbsolutePosition;
        "right": (pos: any) => AbsolutePosition;
        "top": (pos: any) => AbsolutePosition;
        "bottom": (pos: any) => AbsolutePosition;
        "left-bottom": (pos: any) => AbsolutePosition;
        "right-bottom": (pos: any) => AbsolutePosition;
    };
    /**
     * Creates an instance of `Dialog`.
     * @param {ElementRef} elementRef
     * @memberof Dialog
     */
    constructor(elementRef: ElementRef);
    /**
     * Initilize the `Dialog`, set the placement and gap, and add a `Subscription` to resize events.
     * @memberof Dialog
     */
    ngOnInit(): void;
    /**
     * After the DOM is ready, focus is set and dialog is placed
     * in respect to the parent element.
     * @memberof Dialog
     */
    ngAfterViewInit(): void;
    /**
     * Empty method to be overridden by consuming classes to run any additional initialization code.
     */
    onDialogInit(): void;
    /**
     * Empty method to be overridden by consuming classes to run any additional initialization code after the view is available.
     * NOTE: this does _not_ guarantee the dialog will be positioned, simply that it will exist in the DOM
     */
    afterDialogViewInit(): void;
    /**
     * Uses the position service to position the `Dialog` in screen space
     */
    placeDialog(): void;
    /**
     * Sets up a KeyboardEvent to close `Dialog` with Escape key.
     * @param {KeyboardEvent} event
     */
    escapeClose(event: KeyboardEvent): void;
    /**
     * Sets up a event Listener to close `Dialog` if click event occurs outside
     * `Dialog` object.
     * @param {any} event
     * @memberof Dialog
     */
    clickClose(event: any): void;
    /**
     * Closes `Dialog` object by emitting the close event upwards to parents.
     * @memberof Dialog
     */
    doClose(): void;
    /**
     * At destruction of component, `Dialog` unsubscribes from handling window resizing changes.
     * @memberof Dialog
     */
    ngOnDestroy(): void;
}
