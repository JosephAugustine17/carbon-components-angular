/*!
 *
 * carbon-angular v0.0.0 | tab.component.js
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


import { Component, Input, Output, EventEmitter, TemplateRef, HostBinding } from "@angular/core";
var nextId = 0;
/**
* The `Tab` component is a child of the `Tabs` component.
* It represents one `Tab` item and its content within a panel of other `Tab` items.
*
*
* `Tab` takes a string or `TemplateRef` for the header, and any content for the body of the tab.
* Disabled states should be handled by the application (ie. switch to the tab, but display some
* indication as to _why_ the tab is disabled).
*
* When the tab is selected the `select` output will be triggered.
* The `select` output will also be triggered for the active tab when the tabs are loaded or updated.
*
*
* Tab with string header:
*
* ```html
* <ibm-tab heading='tab1'>
* 	tab 1 content
* </ibm-tab>
* ```
*
* Tab with custom header:
*
* ```html
* <ng-template #tabHeading>
* 	<ibm-icon
* 		icon="facebook"
* 		size="sm"
* 		style="margin-right: 7px;">
* 	</ibm-icon>
* 	Hello Tab 1
* </ng-template>
* <ibm-tabs>
* 	<ibm-tab [heading]="tabHeading">
* 		Tab 1 content <ibm-icon icon="alert" size="lg"></ibm-icon>
* 	</ibm-tab>
* 	<ibm-tab heading='Tab2'>
* 		Tab 2 content
* 	</ibm-tab>
* 	<ibm-tab heading='Tab3'>
* 		Tab 3 content
* 	</ibm-tab>
* </ibm-tabs>
* ```
*
*
* @export
* @class Tab
* @implements {OnInit}
*/
var Tab = /** @class */ (function () {
    function Tab() {
        /**
         * Boolean value reflects if the `Tab` is using a custom template for the heading.
         * Default value is false.
         */
        this.headingIsTemplate = false;
        /**
         * Indicates whether the `Tab` is active/selected.
         * Determines whether it's `TabPanel` is rendered.
         */
        this.active = false;
        /**
         * Indicates whether or not the `Tab` item is disabled.
         */
        this.disabled = false;
        this.tabIndex = 0;
        // do we need id's?
        /**
         * Sets the id of the `Tab`. Will be uniquely generated if not provided.
         */
        this.id = "n-tab-" + nextId++;
        /**
         * Set to true to have Tab items cached and not reloaded on tab switching.
         */
        this.cacheActive = false;
        /**
         * Value 'selected' to be emitted after a new `Tab` is selected.
         * @type {EventEmitter<void>}
         */
        this.selected = new EventEmitter();
        /**
         * Used to set the id property on the element.
         */
        this.attrClass = this.id;
    }
    /**
     * Checks for custom heading template on initialization and updates the value
     * of the boolean 'headingIsTemplate'.
     */
    Tab.prototype.ngOnInit = function () {
        if (this.heading instanceof TemplateRef) {
            this.headingIsTemplate = true;
        }
    };
    /**
     * Emit the status of the `Tab`, specifically 'select' and 'selected' properties.
     */
    Tab.prototype.doSelect = function () {
        this.selected.emit();
    };
    /**
    * Returns value indicating whether this `Tab` should be rendered in a `TabPanel`.
    * @returns boolean
    */
    Tab.prototype.shouldRender = function () {
        return this.active || this.cacheActive;
    };
    Tab.decorators = [
        { type: Component, args: [{
                    selector: "ibm-tab",
                    template: "\n\t\t<div\n\t\t\t[tabindex]=\"tabIndex\"\n\t\t\trole=\"tabpanel\"\n\t\t\t*ngIf=\"shouldRender()\"\n\t\t\t[ngStyle]=\"{'display': active ? null : 'none'}\"\n\t\t\t[attr.aria-labelledby]=\"id + '-header'\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t "
                },] },
    ];
    Tab.propDecorators = {
        heading: [{ type: Input }],
        context: [{ type: Input }],
        active: [{ type: Input }],
        disabled: [{ type: Input }],
        tabIndex: [{ type: Input }],
        id: [{ type: Input }],
        cacheActive: [{ type: Input }],
        selected: [{ type: Output }],
        attrClass: [{ type: HostBinding, args: ["attr.id",] }]
    };
    return Tab;
}());
export { Tab };
//# sourceMappingURL=tab.component.js.map