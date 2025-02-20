/*!
 *
 * carbon-angular v0.0.0 | modal.component.js
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


import { ModalService } from "./modal.service";
import { Component, EventEmitter, HostListener, Input, Output, ElementRef, ViewChild } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { cycleTabs, getFocusElementList } from "./../common/tab.service";
/**
 * Component to create modals for presenting content.
 *
 * Using a modal in your application requires `ibm-modal-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
 * ```html
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * A more complete example for `Modal` is given as follows:
 *
 * Example modal definition:
 *
 * ```typescript
 * \@Modal()
 * \@Component({
 * 	selector: "app-sample-modal",
 * 	template: `
 *		<ibm-modal size="xl">
 * 			<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * 			<section class="modal-body">
 * 			<h1>Sample modal works.</h1>
 * 			<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="right" appendInline="true">
 * 				<ibm-icon icon="info" size="sm"></ibm-icon>
 * 			</button>
 * 			{{modalText}}
 * 			</section>
 * 			<ibm-modal-footer><button ibmButton="primary" (click)="closeModal()">Close</button></ibm-modal-footer>
 * 		</ibm-modal>`,
 * 	styles: [``]
 * })
 * export class SampleModal extends BaseModal {
 * 	modalText: string;
 * 	constructor(protected injector: Injector) {
 * 		super();
 * 		this.modalText = this.injector.get("modalText");
 * 	}
 * }
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button ibmButton="primary" (click)="openModal('drill')">Drill-down modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.create({component: SampleModal, inputs: {modalText: "Hello universe."}});
 * 	}
 * }
 * ```
 *
 */
var Modal = /** @class */ (function () {
    /**
     * Creates an instance of `Modal`.
     */
    function Modal(modalService) {
        this.modalService = modalService;
        /**
         * Size of the modal to display.
         */
        this.size = "md";
        /**
         * Classification of the modal.
         */
        this.theme = "default";
        /**
         * Label for the modal.
         */
        this.modalLabel = "default";
        /**
         * Emits event when click occurs within `n-overlay` element. This is to track click events occuring outside bounds of the `Modal` object.
         */
        this.overlaySelected = new EventEmitter();
        /**
         * To emit the closing event of the modal window.
         */
        this.close = new EventEmitter();
        /**
         * Controls the transitions of the `Modal` component.
         */
        this.modalState = "out";
        /**
         * An element should have 'data-modal-primary-focus' as an attribute to receive initial focus within the `Modal` component.
         */
        this.selectorPrimaryFocus = "[modal-primary-focus]";
    }
    /**
     * Set modalState on the modal component when it is initialized.
     */
    Modal.prototype.ngOnInit = function () {
        this.modalState = "in";
    };
    /**
     * Set document focus to be on the modal component after it is initialized.
     */
    Modal.prototype.ngAfterViewInit = function () {
        var primaryFocusElement = this.modal.nativeElement.querySelector(this.selectorPrimaryFocus);
        if (primaryFocusElement && primaryFocusElement.focus) {
            primaryFocusElement.focus();
            return;
        }
        if (getFocusElementList(this.modal.nativeElement).length > 0) {
            getFocusElementList(this.modal.nativeElement)[0].focus();
        }
        else {
            this.modal.nativeElement.focus();
        }
    };
    /**
     * Emit the close event when the modal component is destroyed.
     */
    Modal.prototype.ngOnDestroy = function () {
        this.modalState = "out";
    };
    /**
     * Handle keyboard events to close modal and tab through the content within the modal.
     */
    Modal.prototype.handleKeyboardEvent = function (event) {
        switch (event.key) {
            case "Escape": {
                event.stopImmediatePropagation(); // prevents events being fired for multiple modals if more than 2 open
                this.modalService.destroy(); // destroy top (latest) modal
                break;
            }
            case "Tab": {
                cycleTabs(event, this.modal.nativeElement);
                break;
            }
        }
    };
    Modal.decorators = [
        { type: Component, args: [{
                    selector: "ibm-modal",
                    template: "\n\t\t<ibm-overlay [theme]=\"theme\" (overlaySelect)=\"overlaySelected.emit()\">\n\t\t\t<div\n\t\t\t\tclass=\"bx--modal-container\"\n\t\t\t\t[@modalState]=\"modalState\"\n\t\t\t\trole=\"dialog\"\n\t\t\t\taria-modal=\"true\"\n\t\t\t\ttabindex=\"0\"\n\t\t\t\tstyle=\"z-index:1;\"\n\t\t\t\t[attr.aria-label]=\"modalLabel\"\n\t\t\t\t#modal>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</ibm-overlay>\n\t",
                    animations: [
                        trigger("modalState", [
                            state("void", style({ transform: "translate(0, 5%)", opacity: 0 })),
                            transition(":enter", [
                                animate("200ms ease-in")
                            ]),
                            transition(":leave", [
                                animate(200, style({ transform: "translate(0, 5%)", opacity: 0 }))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    Modal.propDecorators = {
        size: [{ type: Input }],
        theme: [{ type: Input }],
        modalLabel: [{ type: Input }],
        overlaySelected: [{ type: Output }],
        close: [{ type: Output }],
        modal: [{ type: ViewChild, args: ["modal",] }],
        handleKeyboardEvent: [{ type: HostListener, args: ["keydown", ["$event"],] }]
    };
    return Modal;
}());
export { Modal };
//# sourceMappingURL=modal.component.js.map