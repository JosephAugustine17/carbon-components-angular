/*!
 *
 * carbon-angular v0.0.0 | base-modal.class.js
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


import { Output, EventEmitter } from "@angular/core";
/**
 * Extend `BaseModal` in your custom modal implementations to ensure consistent close behaviour.
 *
 * `ModalService` depends on the `close` event to correctly clean up the component.
 */
var BaseModal = /** @class */ (function () {
    function BaseModal() {
        this.close = new EventEmitter();
    }
    BaseModal.prototype.closeModal = function () {
        this.close.emit();
    };
    BaseModal.propDecorators = {
        close: [{ type: Output }]
    };
    return BaseModal;
}());
export { BaseModal };
//# sourceMappingURL=base-modal.class.js.map