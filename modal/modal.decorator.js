/*!
 *
 * carbon-angular v0.0.0 | modal.decorator.js
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
 * # Deprecated - extend `BaseModal` instead
 *
 * Decorator used to apply metadata on `Modal` class.
 *
 * class: ModalContainer
 *
 * decorator: @Modal
 * @deprecated
 */
var ModalContainer = /** @class */ (function () {
    function ModalContainer() {
        this.close = new EventEmitter();
    }
    ModalContainer.prototype.closeModal = function () {
        this.close.emit();
    };
    ModalContainer.propDecorators = {
        close: [{ type: Output }]
    };
    return ModalContainer;
}());
/**
 * Applying the decorator metadata to the target class (`Modal`).
 * @export
 * @returns {Object}
 */
export default function Modal() {
    return function (target) {
        Object.assign(target.prototype, ModalContainer.prototype);
    };
}
//# sourceMappingURL=modal.decorator.js.map