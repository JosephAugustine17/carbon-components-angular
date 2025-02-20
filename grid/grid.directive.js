/*!
 *
 * carbon-angular v0.0.0 | grid.directive.js
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


import { Directive, HostBinding, Input } from "@angular/core";
var GridDirective = /** @class */ (function () {
    function GridDirective() {
        this.baseClass = true;
    }
    GridDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmGrid]"
                },] },
    ];
    GridDirective.propDecorators = {
        baseClass: [{ type: HostBinding, args: ["class.bx--grid",] }]
    };
    return GridDirective;
}());
export { GridDirective };
var RowDirective = /** @class */ (function () {
    function RowDirective() {
        this.baseClass = true;
    }
    RowDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmRow]"
                },] },
    ];
    RowDirective.propDecorators = {
        baseClass: [{ type: HostBinding, args: ["class.bx--row",] }]
    };
    return RowDirective;
}());
export { RowDirective };
var ColumnDirective = /** @class */ (function () {
    function ColumnDirective() {
        this.class = "";
        this.columnNumbers = {};
        this.offsets = {};
        this._columnClasses = [];
    }
    Object.defineProperty(ColumnDirective.prototype, "columnClasses", {
        get: function () {
            return this._columnClasses.join(" ");
        },
        enumerable: true,
        configurable: true
    });
    ColumnDirective.prototype.set = function (classes) {
        this._columnClasses = classes.split(" ");
    };
    ColumnDirective.prototype.ngOnInit = function () {
        var _this = this;
        try {
            Object.keys(this.columnNumbers).forEach(function (key) {
                if (_this.columnNumbers[key] === "nobreak") {
                    _this._columnClasses.push("bx--col-" + key);
                }
                else {
                    _this._columnClasses.push("bx--col-" + key + "-" + _this.columnNumbers[key]);
                }
            });
            Object.keys(this.offsets).forEach(function (key) {
                _this._columnClasses.push("bx--offset-" + key + "-" + _this.offsets[key]);
            });
        }
        catch (err) {
            console.error("Malformed `offsets` or `columnNumbers`: " + err);
        }
        if (this.class !== "") {
            this._columnClasses.push(this.class);
        }
    };
    ColumnDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ibmCol]"
                },] },
    ];
    ColumnDirective.propDecorators = {
        class: [{ type: Input }],
        columnNumbers: [{ type: Input }],
        offsets: [{ type: Input }],
        columnClasses: [{ type: HostBinding, args: ["class",] }]
    };
    return ColumnDirective;
}());
export { ColumnDirective };
//# sourceMappingURL=grid.directive.js.map