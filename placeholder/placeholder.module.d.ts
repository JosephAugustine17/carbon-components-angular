/*!
 *
 * carbon-angular v0.0.0 | placeholder.module.d.ts
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
import { PlaceholderService } from "./placeholder.service";
export { Placeholder } from "./placeholder.component";
export { PlaceholderService } from "./placeholder.service";
export declare function PLACEHOLDER_SERVICE_PROVIDER_FACTORY(parentService: PlaceholderService): PlaceholderService;
export declare const PLACEHOLDER_SERVICE_PROVIDER: {
    provide: typeof PlaceholderService;
    deps: Optional[][];
    useFactory: typeof PLACEHOLDER_SERVICE_PROVIDER_FACTORY;
};
export declare class PlaceholderModule {
}
