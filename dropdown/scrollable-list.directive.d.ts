/*!
 *
 * carbon-angular v0.0.0 | scrollable-list.directive.d.ts
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


import { ElementRef, OnChanges, SimpleChanges, AfterViewInit } from "@angular/core";
export declare class ScrollableList implements OnChanges, AfterViewInit {
    protected elementRef: ElementRef;
    /**
     * Optional target list to scroll
     */
    nScrollableList: string;
    /**
     * Enables or disables scrolling for the whole directive
     */
    scrollEnabled: boolean;
    /**
     * Sets the target used for hover scrolling up
     */
    scrollUpTarget: HTMLElement;
    /**
     * Sets the target used for hover scrolling down
     */
    scrollDownTarget: HTMLElement;
    /**
     * How many lines to scroll by each time `wheel` fires
     * Defaults to 10 - based on testing this isn't too fast or slow on any platform
     */
    scrollBy: number;
    protected hoverScrollInterval: any;
    protected lastTouch: any;
    protected canScrollUp: boolean;
    protected canScrollDown: boolean;
    protected list: any;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    updateScrollHeight(): void;
    protected checkScrollArrows(): void;
    protected onWheel(event: any): void;
    protected onTouchStart(event: any): void;
    protected onTouchMove(event: any): void;
    protected hoverScrollBy(hovering: any, amount: any): void;
    protected onHoverUp(hovering: any): void;
    protected onHoverDown(hovering: any): void;
    protected onKeyDown(event: any): void;
}
