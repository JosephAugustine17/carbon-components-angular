/*!
 *
 * carbon-angular v0.0.0 | dialog.directive.js
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


import { Directive, Input, Output, EventEmitter, ElementRef, ViewContainerRef, HostListener, HostBinding } from "@angular/core";
import { fromEvent } from "rxjs";
import { DialogService } from "./dialog.service";
/**
 * A generic directive that can be inherited from to create dialogs (for example, a tooltip or popover)
 *
 * This class contains the relevant initialization code, specific templates, options, and additional inputs
 * should be specified in the derived class.
 *
 * NOTE: All child classes should add `DialogService` as a provider, otherwise they will lose context that
 * the service relies on.
 */
var DialogDirective = /** @class */ (function () {
    /**
     * Creates an instance of DialogDirective.
     * @param {ElementRef} elementRef
     * @param {ViewContainerRef} viewContainerRef
     * @param {DialogService} dialogService
     */
    function DialogDirective(elementRef, viewContainerRef, dialogService) {
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.dialogService = dialogService;
        /**
         * Title for the dialog
         * @type {string}
         */
        this.title = "";
        /**
         * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap)
         * @type {("click" | "hover" | "mouseenter")}
         */
        this.trigger = "click";
        /**
         * Placement of the dialog, usually relative to the element the directive is on.
         */
        this.placement = "left";
        /**
         * Spacing between the dialog and it's triggering element
         * @type {number}
         */
        this.gap = 0;
        /**
         * Set to `true` to open the dialog next to the triggering component
         */
        this.appendInline = false;
        /**
         * Optional data for templates
         */
        this.data = {};
        /**
         * Emits an event when the dialog is closed
         */
        this.onClose = new EventEmitter();
        /**
         * Emits an event when the dialog is opened
         */
        this.onOpen = new EventEmitter();
        this.role = "button";
        this.expanded = false;
        this.hasPopup = true;
    }
    Object.defineProperty(DialogDirective.prototype, "appendToBody", {
        get: function () {
            return !this.appendInline;
        },
        /**
         * Deprecated. Defaults to true. Use appendInline to keep dialogs within page flow
         * Value `true` appends Dialog to the body (to break out of containers)
         */
        set: function (v) {
            console.log("`appendToBody` has been deprecated. Dialogs now append to the body by default.");
            console.log("Ensure you have an `ibm-placeholder` in your app.");
            console.log("Use `appendInline` if you need to position your dialogs within the normal page flow.");
            this.appendInline = !v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogDirective.prototype, "ariaOwns", {
        get: function () {
            return this.expanded ? this.dialogConfig.compID : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Overrides 'touchstart' event to trigger a toggle on the Dialog.
     * @param {any} evt
     */
    DialogDirective.prototype.onTouchStart = function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        this.toggle();
    };
    DialogDirective.prototype.ngOnChanges = function () {
        // set the config object (this can [and should!] be added to in child classes depending on what they need)
        this.dialogConfig = {
            title: this.title,
            content: this.ibmDialog,
            placement: this.placement,
            parentRef: this.elementRef,
            gap: this.gap,
            trigger: this.trigger,
            appendInline: this.appendInline,
            wrapperClass: this.wrapperClass,
            data: this.data
        };
    };
    /**
     * Sets the config object and binds events for hovering or clicking before
     * running code from child class.
     */
    DialogDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix for safari hijacking clicks
        this.dialogService.singletonClickListen();
        fromEvent(this.elementRef.nativeElement, "keydown").subscribe(function (event) {
            // "Esc" is an IE specific value
            if (event.target === _this.dialogConfig.parentRef.nativeElement && (event.key === "Tab" || event.key === "Tab" && event.shiftKey) ||
                event.key === "Escape" || event.key === "Esc") {
                _this.close();
            }
        });
        // bind events for hovering or clicking the host
        if (this.trigger === "hover" || this.trigger === "mouseenter") {
            fromEvent(this.elementRef.nativeElement, "mouseenter").subscribe(function () { return _this.toggle(); });
            fromEvent(this.elementRef.nativeElement, "mouseout").subscribe(function () { return _this.close(); });
            fromEvent(this.elementRef.nativeElement, "focus").subscribe(function () { return _this.open(); });
            fromEvent(this.elementRef.nativeElement, "blur").subscribe(function () { return _this.close(); });
        }
        else {
            fromEvent(this.elementRef.nativeElement, "click").subscribe(function () { return _this.toggle(); });
            fromEvent(this.elementRef.nativeElement, "keydown").subscribe(function (event) {
                // "Spacebar" is an IE specific value
                if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
                    _this.open();
                }
            });
        }
        // call onClose when the dialog is closed
        // - Enforce accessibility by updating an aria attr for nativeElement.
        this.dialogService.isClosed.subscribe(function (value) {
            if (value) {
                _this.onClose.emit();
                _this.expanded = false;
            }
        });
        DialogDirective.dialogCounter++;
        this.dialogConfig.compID = "dialog-" + DialogDirective.dialogCounter;
        // run any code a child class may need
        this.onDialogInit();
    };
    /**
     * When the host dies, kill the popover.
     * - Useful for use in a modal or similar.
     */
    DialogDirective.prototype.ngOnDestroy = function () {
        this.close();
    };
    /**
     * Helper method to call dialogService 'open'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    DialogDirective.prototype.open = function () {
        this.dialogService.open(this.viewContainerRef, this.dialogConfig);
        this.expanded = true;
        this.onOpen.emit();
    };
    /**
     * Helper method to call dialogService 'toggle'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    DialogDirective.prototype.toggle = function () {
        this.dialogService.toggle(this.viewContainerRef, this.dialogConfig);
        this.expanded = this.dialogService.isOpen;
        if (this.expanded) {
            this.onOpen.emit();
        }
    };
    /**
     * Helper method to call dialogService 'close'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    DialogDirective.prototype.close = function () {
        this.dialogService.close(this.viewContainerRef);
        this.expanded = false;
    };
    /**
     * Empty method for child classes to override and specify additional init steps.
     * Run after DialogDirective completes it's ngOnInit.
     * @protected
     */
    DialogDirective.prototype.onDialogInit = function () { };
    DialogDirective.dialogCounter = 0;
    DialogDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmDialog]",
                    exportAs: "ibmDialog",
                    providers: [
                        DialogService
                    ]
                },] },
    ];
    /** @nocollapse */
    DialogDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: DialogService }
    ]; };
    DialogDirective.propDecorators = {
        title: [{ type: Input }],
        ibmDialog: [{ type: Input }],
        trigger: [{ type: Input }],
        placement: [{ type: Input }],
        wrapperClass: [{ type: Input }],
        gap: [{ type: Input }],
        appendToBody: [{ type: Input }],
        appendInline: [{ type: Input }],
        data: [{ type: Input }],
        onClose: [{ type: Output }],
        onOpen: [{ type: Output }],
        role: [{ type: HostBinding, args: ["attr.role",] }],
        expanded: [{ type: HostBinding, args: ["attr.aria-expanded",] }],
        hasPopup: [{ type: HostBinding, args: ["attr.aria-haspopup",] }],
        ariaOwns: [{ type: HostBinding, args: ["attr.aria-owns",] }],
        onTouchStart: [{ type: HostListener, args: ["touchstart", ["$event"],] }]
    };
    return DialogDirective;
}());
export { DialogDirective };
//# sourceMappingURL=dialog.directive.js.map