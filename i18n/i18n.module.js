/*!
 *
 * carbon-angular v0.0.0 | i18n.module.js
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


import { NgModule, SkipSelf, Optional } from "@angular/core";
import { I18n } from "./i18n.service";
import { ReplacePipe } from "./replace.pipe";
export { I18n, replace } from "./i18n.service";
export { ReplacePipe } from "./replace.pipe";
// either provides a new instance of ModalPlaceholderService, or returns the parent
export function I18N_SERVICE_PROVIDER_FACTORY(parentService) {
    return parentService || new I18n();
}
// placholder service *must* be a singleton to ensure the placeholder viewref is accessible globally
export var I18N_SERVICE_PROVIDER = {
    provide: I18n,
    deps: [[new Optional(), new SkipSelf(), I18n]],
    useFactory: I18N_SERVICE_PROVIDER_FACTORY
};
var I18nModule = /** @class */ (function () {
    function I18nModule() {
    }
    I18nModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ReplacePipe],
                    exports: [ReplacePipe],
                    providers: [
                        I18n,
                        I18N_SERVICE_PROVIDER
                    ]
                },] },
    ];
    return I18nModule;
}());
export { I18nModule };
//# sourceMappingURL=i18n.module.js.map