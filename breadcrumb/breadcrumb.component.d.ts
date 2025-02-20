/*!
 *
 * carbon-angular v0.0.0 | breadcrumb.component.d.ts
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


import { QueryList, AfterContentInit } from "@angular/core";
import { BreadcrumbItem } from "./breadcrumb-item.interface";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";
export declare class Breadcrumb implements AfterContentInit {
    children: QueryList<BreadcrumbItemComponent>;
    items: Array<BreadcrumbItem>;
    noTrailingSlash: boolean;
    ariaLabel: string;
    protected _threshold: number;
    protected _skeleton: boolean;
    skeleton: any;
    threshold: number;
    ngAfterContentInit(): void;
    readonly shouldShowContent: boolean;
    readonly shouldShowOverflow: boolean;
    readonly first: BreadcrumbItem;
    readonly overflowItems: Array<BreadcrumbItem>;
    readonly secondLast: BreadcrumbItem;
    readonly last: BreadcrumbItem;
    protected updateChildren(): void;
}
