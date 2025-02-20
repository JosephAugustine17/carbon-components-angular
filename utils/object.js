/*!
 *
 * carbon-angular v0.0.0 | object.js
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


// custom deep object merge
export var merge = function (target) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
        var object = objects_1[_a];
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                // since we're dealing just with JSON this simple check should be enough
                if (object[key] instanceof Object) {
                    if (!target[key]) {
                        target[key] = {};
                    }
                    // recursivly merge into the target
                    // most translations only run 3 or 4 levels deep, so no stack explosions
                    target[key] = merge(target[key], object[key]);
                }
                else {
                    target[key] = object[key];
                }
            }
        }
    }
    return target;
};
//# sourceMappingURL=object.js.map