/*!
 *
 * carbon-angular v0.0.0 | alert-modal.component.js
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
import { Component, Inject } from "@angular/core";
import { BaseModal } from "./base-modal.class";
/**
 * Component to create standard modals for presenting content or asking for user's input.
 * It can show as a passive modal showing only text or show as a transactional modal with
 * multiple buttons for different actions for the user to choose from.
 *
 * Using a modal in your application requires `ibm-modal-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
 * ```html
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button class="btn--primary" (click)="openModal()">Open modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.show({
 *			modalType: "default",
 *			modalLabel: "optional header text",
 *			modalTitle: "Modal modalTitle",
 *			text: "Modal text",
 *			buttons: [{
 *				text: "Button text",
 *				type: "primary",
 *				click: clickFunction
 *			}]
 *		});
 * 	}
 * }
 * ```
 *
 * @export
 * @class AlertModal
 */
var AlertModal = /** @class */ (function (_super) {
    __extends(AlertModal, _super);
    /**
     * Creates an instance of `AlertModal`.
     * @param {ModalService} modalService
     * @memberof AlertModal
     */
    function AlertModal(modalType, modalLabel, modalTitle, modalContent, buttons) {
        if (modalType === void 0) { modalType = "default"; }
        if (buttons === void 0) { buttons = []; }
        var _this = _super.call(this) || this;
        _this.modalType = modalType;
        _this.modalLabel = modalLabel;
        _this.modalTitle = modalTitle;
        _this.modalContent = modalContent;
        _this.buttons = buttons;
        for (var i = 0; i < _this.buttons.length; i++) {
            var button = _this.buttons[i];
            if (!button.id) {
                button.id = "alert-modal-button-" + i;
            }
            if (!button.type) {
                button.type = "secondary";
            }
        }
        return _this;
    }
    AlertModal.prototype.buttonClicked = function (buttonIndex) {
        var button = this.buttons[buttonIndex];
        if (button.click) {
            button.click();
        }
        this.closeModal();
    };
    AlertModal.decorators = [
        { type: Component, args: [{
                    selector: "ibm-alert-modal",
                    template: "\n\t\t<ibm-modal [theme]=\"modalType\" [modalLabel]=\"modalTitle\">\n\t\t\t<ibm-modal-header (closeSelect)=\"closeModal()\">\n\t\t\t\t<p class=\"bx--modal-header__label bx--type-delta\">{{modalLabel}}</p>\n      \t\t\t<p class=\"bx--modal-header__heading bx--type-beta\">{{modalTitle}}</p>\n\t\t\t</ibm-modal-header>\n\t\t\t<div class=\"bx--modal-content\">\n\t\t\t\t<p [innerHTML]=\"modalContent\"></p>\n\t\t\t</div>\n\t\t\t<ibm-modal-footer *ngIf=\"buttons.length > 0\">\n\t\t\t\t<ng-container *ngFor=\"let button of buttons; let i = index\">\n\t\t\t\t\t<button\n\t\t\t\t\t\tibmButton=\"{{button.type}}\"\n\t\t\t\t\t\t(click)=\"buttonClicked(i)\"\n\t\t\t\t\t\t[id]=\"button.id\"\n\t\t\t\t\t\t[attr.modal-primary-focus]=\"(button.type.indexOf('primary') !== -1 ? '' : null)\">\n\t\t\t\t\t\t{{button.text}}\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t</ibm-modal-footer>\n\t\t</ibm-modal>\n\t"
                },] },
    ];
    /** @nocollapse */
    AlertModal.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ["modalType",] }] },
        { type: String, decorators: [{ type: Inject, args: ["modalLabel",] }] },
        { type: String, decorators: [{ type: Inject, args: ["modalTitle",] }] },
        { type: String, decorators: [{ type: Inject, args: ["modalContent",] }] },
        { type: undefined, decorators: [{ type: Inject, args: ["buttons",] }] }
    ]; };
    return AlertModal;
}(BaseModal));
export { AlertModal };
//# sourceMappingURL=alert-modal.component.js.map