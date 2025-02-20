/*!
 *
 * carbon-angular v0.0.0 | utils.d.ts
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


export * from "./../utils/window-tools";
/**
 * Does what python's `range` function does, with a slightly different
 * signature because of Typescript limitations.
 *
 * Useful for numbered loops in angular templates, since we can do
 * a normal for loop.
 *
 * @export
 * @param {number} stop Generate numbers up to, but not including this number
 * @param {number} [start=0] Starting number of the sequence
 * @param {number} [step=1] Difference between each number in the sequence
 * @returns and array with resulting numbers
 */
export declare function range(stop: number, start?: number, step?: number): number[];
