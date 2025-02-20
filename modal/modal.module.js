/*!
 *
 * carbon-angular v0.0.0 | modal.module.js
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


// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StaticIconModule } from "./../icon/static-icon.module";
// imports
import { ModalPlaceholder } from "./modal-placeholder.component";
import { ModalService } from "./modal.service";
import { Modal } from "./modal.component";
import { ModalFooter } from "./modal-footer.component";
import { Overlay } from "./overlay.component";
import { ModalHeader } from "./modal-header.component";
import { AlertModal } from "./alert-modal.component";
import { ButtonModule } from "../forms/forms.module";
import { I18nModule } from "./../i18n/i18n.module";
import { PlaceholderModule } from "./../placeholder/placeholder.module";
import { ExperimentalModule } from "./../experimental.module";
// exports
export { default as Modal } from "./modal.decorator";
export { ModalService } from "./modal.service";
export * from "./alert-modal.interface";
export * from "./base-modal.class";
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AlertModal,
                        ModalPlaceholder,
                        Modal,
                        ModalHeader,
                        ModalFooter,
                        Overlay
                    ],
                    exports: [
                        AlertModal,
                        ModalPlaceholder,
                        Modal,
                        ModalHeader,
                        ModalFooter
                    ],
                    entryComponents: [
                        AlertModal,
                        Modal,
                        ModalFooter,
                        ModalHeader
                    ],
                    providers: [ModalService],
                    imports: [
                        CommonModule,
                        ButtonModule,
                        StaticIconModule,
                        I18nModule,
                        PlaceholderModule,
                        ExperimentalModule
                    ]
                },] },
    ];
    return ModalModule;
}());
export { ModalModule };
//# sourceMappingURL=modal.module.js.map