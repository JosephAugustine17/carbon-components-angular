/*!
 *
 * carbon-angular v0.0.0 | tabs.component.js
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


import { Component, Input, ContentChildren, QueryList, ContentChild } from "@angular/core";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";
/**
 * Build out your application's tabs using this component.
 * This is the parent of the `Tab` and `TabHeader` components.
 *
 * `Tabs` expects a set of `n-tab` elements
 *
 * ```html
 * <ibm-tabs>
 * 	<ibm-tab heading='tab1'>
 * 		tab 1 content
 * 	</ibm-tab>
 * 	<ibm-tab heading='tab1'>
 * 		tab 2 content
 * 	</ibm-tab>
 * 	<!-- ... -->
 * 	<ibm-tab heading='tab1'>
 * 		tab n content
 * 	</ibm-tab>
 * </ibm-tabs>
 * ```
 *
 * @export
 * @class Tabs
 * @implements {AfterContentInit}
 */
var Tabs = /** @class */ (function () {
    function Tabs() {
        /**
         * Takes either the string value 'top' or 'bottom' to place TabHeader
         * relative to the `TabPanel`s.
         */
        this.position = "top";
        /**
         * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
         */
        this.cacheActive = false;
        /**
         * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
         */
        this.followFocus = true;
        /**
         * Set to `true` to put tabs in a loading state.
         */
        this.skeleton = false;
        /**
         * Set to `true` to have the tabIndex of the all tabpanels be -1.
         */
        this.isNavigation = false;
    }
    /**
     * After content is initialized update `Tab`s to cache (if turned on) and set the initial
     * selected Tab item.
     */
    Tabs.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.tabHeaders) {
            this.tabHeaders.cacheActive = this.cacheActive;
        }
        this.tabs.forEach(function (tab) {
            tab.tabIndex = _this.isNavigation ? -1 : 0;
        });
    };
    /**
     * true if the n-tab's are passed directly to the component as children
     */
    Tabs.prototype.hasTabHeaders = function () {
        return this.tabs.length > 0;
    };
    Tabs.decorators = [
        { type: Component, args: [{
                    selector: "ibm-tabs",
                    template: "\n\t\t\t<ibm-tab-headers\n\t\t\t\t*ngIf=\"hasTabHeaders() && position === 'top'\"\n\t\t\t\t[skeleton]=\"skeleton\"\n\t\t\t\t[tabs]=\"tabs\"\n\t\t\t\t[followFocus]=\"followFocus\"\n\t\t\t\t[cacheActive]=\"cacheActive\">\n\t\t\t</ibm-tab-headers>\n\t\t\t<ng-content></ng-content>\n\t\t\t<ibm-tab-headers\n\t\t\t\t*ngIf=\"hasTabHeaders() && position === 'bottom'\"\n\t\t\t\t[skeleton]=\"skeleton\"\n\t\t\t\t[tabs]=\"tabs\"\n\t\t\t\t[cacheActive]=\"cacheActive\">\n\t\t\t</ibm-tab-headers>\n\t "
                },] },
    ];
    Tabs.propDecorators = {
        position: [{ type: Input }],
        cacheActive: [{ type: Input }],
        followFocus: [{ type: Input }],
        skeleton: [{ type: Input }],
        isNavigation: [{ type: Input }],
        tabs: [{ type: ContentChildren, args: [Tab, { descendants: false },] }],
        tabHeaders: [{ type: ContentChild, args: [TabHeaders,] }]
    };
    return Tabs;
}());
export { Tabs };
//# sourceMappingURL=tabs.component.js.map