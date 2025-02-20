/*!
 *
 * carbon-angular v0.0.0 | i18n.module.d.ts
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


import { Optional } from "@angular/core";
import { I18n } from "./i18n.service";
export { I18n, replace } from "./i18n.service";
export { ReplacePipe } from "./replace.pipe";
export declare function I18N_SERVICE_PROVIDER_FACTORY(parentService: I18n): I18n;
export declare const I18N_SERVICE_PROVIDER: {
    provide: typeof I18n;
    deps: Optional[][];
    useFactory: typeof I18N_SERVICE_PROVIDER_FACTORY;
};
export declare class I18nModule {
}
