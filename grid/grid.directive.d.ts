/*!
 *
 * carbon-angular v0.0.0 | grid.directive.d.ts
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


import { OnInit } from "@angular/core";
export declare class GridDirective {
    baseClass: boolean;
}
export declare class RowDirective {
    baseClass: boolean;
}
export declare class ColumnDirective implements OnInit {
    class: string;
    columnNumbers: {};
    offsets: {};
    protected _columnClasses: string[];
    readonly columnClasses: string;
    set(classes: string): void;
    ngOnInit(): void;
}
