/*!
 *
 * carbon-angular v0.0.0 | link.directive.d.ts
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


/**
 * A convinence directive for applying styling to a link.
 *
 * Example:
 *
 * ```hmtl
 * <a href="#" ibmLink>A link</a>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/link/code) for more detail.
 */
export declare class Link {
    baseClass: boolean;
    /**
     * Automatically set to `-1` when link is disabled.
     * @memberof Link
     */
    tabindex: any;
    /**
     * Set to true to disable link.
     * @memberof Link
     */
    disabled: boolean;
    private _disabled;
}
