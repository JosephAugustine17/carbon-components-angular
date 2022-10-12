/*!
 *
 * carbon-angular v0.0.0 | file.component.d.ts
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


import { EventEmitter } from "@angular/core";
import { I18n } from "../i18n/i18n.module";
import { FileItem } from "./file-item.interface";
export declare class File {
    protected i18n: I18n;
    /**
     * Accessible translations for the close and complete icons
     */
    translations: any;
    /**
     * A single `FileItem` from the set of `FileItem`s
     */
    fileItem: FileItem;
    remove: EventEmitter<{}>;
    selectedFile: boolean;
    constructor(i18n: I18n);
}