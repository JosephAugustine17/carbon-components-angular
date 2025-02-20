/*!
 *
 * carbon-angular v0.0.0 | code-snippet.component.js
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


import { Component, Input, HostBinding, ViewChild, HostListener } from "@angular/core";
import { I18n } from "../i18n/i18n.module";
export var SnippetType;
(function (SnippetType) {
    SnippetType["single"] = "single";
    SnippetType["multi"] = "multi";
    SnippetType["inline"] = "inline";
})(SnippetType || (SnippetType = {}));
/**
 * ```html
 * <ibm-code-snippet>Code</ibm-code-snippet>
 * ```
 * @export
 * @class CodeSnippet
 */
var CodeSnippet = /** @class */ (function () {
    /**
     * Creates an instance of CodeSnippet.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @param {ElementRef} elementRef
     * @param {Renderer2} renderer
     * @memberof CodeSnippet
     */
    function CodeSnippet(i18n) {
        this.i18n = i18n;
        /**
         * It can be `"single"`, `"multi"` or `"inline"`
         *
         * @type {SnippetType}
         * @memberof CodeSnippet
         */
        this.display = SnippetType.single;
        this.translations = this.i18n.get().CODE_SNIPPET;
        /**
         * Set to `"light"` to apply the light style on the code snippet.
         * @type {"light" | "dark"}
         * @memberof CodeSnippet
         */
        this.theme = "dark";
        /**
         * Text displayed in the tooltip when user clicks button to copy code.
         *
         * @memberof CodeSnippet
         */
        this.feedbackText = this.translations.COPIED;
        /**
         * Time in miliseconds to keep the feedback tooltip displayed.
         *
         * @memberof CodeSnippet
         */
        this.feedbackTimeout = 2000;
        this.expanded = false;
        this.skeleton = false;
        this.snippetClass = true;
        this.showFeedback = false;
        CodeSnippet.codeSnippetCount++;
    }
    Object.defineProperty(CodeSnippet.prototype, "snippetSingleClass", {
        get: function () {
            return this.display === SnippetType.single;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "snippetMultiClass", {
        get: function () {
            return this.display === SnippetType.multi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "snippetInlineClass", {
        get: function () {
            return this.display === SnippetType.inline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "snippetInlineLightClass", {
        get: function () {
            return this.display === SnippetType.inline && this.theme === "light";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "btnCopyClass", {
        get: function () {
            return this.display === SnippetType.inline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "displayStyle", {
        get: function () {
            return this.display !== SnippetType.inline ? "block" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "attrType", {
        get: function () {
            return this.display === SnippetType.inline ? "button" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CodeSnippet.prototype, "shouldShowExpandButton", {
        get: function () {
            return this.code ? this.code.nativeElement.getBoundingClientRect().height > 255 : false;
        },
        enumerable: true,
        configurable: true
    });
    CodeSnippet.prototype.toggleSnippetExpansion = function () {
        this.expanded = !this.expanded;
    };
    /**
     * Copies the code from the `<code>` block to clipboard.
     *
     * @memberof CodeSnippet
     */
    CodeSnippet.prototype.copyCode = function () {
        // create invisible, uneditable textarea with our code in it
        var textarea = document.createElement("textarea");
        textarea.value = this.code.nativeElement.innerText || this.code.nativeElement.textContent;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.right = "-99999px";
        document.body.appendChild(textarea);
        // save user selection
        var selected = document.getSelection().rangeCount ? document.getSelection().getRangeAt(0) : null;
        // copy to clipboard
        textarea.select();
        document.execCommand("copy");
        // remove textarea
        document.body.removeChild(textarea);
        // restore user selection
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    };
    CodeSnippet.prototype.onCopyButtonClicked = function () {
        var _this = this;
        this.copyCode();
        this.showFeedback = true;
        setTimeout(function () {
            _this.showFeedback = false;
        }, this.feedbackTimeout);
    };
    /**
     * Inline code snippet acts as button and makes the whole component clickable.
     *
     * This handles clicks in that case.
     *
     * @returns
     * @memberof CodeSnippet
     */
    CodeSnippet.prototype.hostClick = function () {
        if (this.display !== SnippetType.inline) {
            return;
        }
        this.onCopyButtonClicked();
    };
    /**
     * Variable used for creating unique ids for code-snippet components.
     * @type {number}
     * @static
     * @memberof CodeSnippet
     */
    CodeSnippet.codeSnippetCount = 0;
    CodeSnippet.decorators = [
        { type: Component, args: [{
                    selector: "ibm-code-snippet",
                    template: "\n\t\t<ng-container *ngIf=\"display === 'inline'; else notInline\">\n\t\t\t<ng-container *ngTemplateOutlet=\"codeTemplate\"></ng-container>\n\t\t\t<ng-container *ngTemplateOutlet=\"feedbackTemplate\"></ng-container>\n\t\t</ng-container>\n\n\t\t<ng-template #notInline>\n\t\t\t<div class=\"bx--snippet-container\" [attr.aria-label]=\"translations.CODE_SNIPPET_TEXT\">\n\t\t\t\t<ng-container *ngIf=\"skeleton\">\n\t\t\t\t\t<span *ngIf=\"display === 'single'; else multiSkeleton\"></span>\n\t\t\t\t\t<ng-template #multiSkeleton>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ng-container>\n\t\t\t\t<pre *ngIf=\"!skeleton\"><ng-container *ngTemplateOutlet=\"codeTemplate\"></ng-container></pre>\n\t\t\t</div>\n\t\t\t<button\n\t\t\t\t*ngIf=\"!skeleton\"\n\t\t\t\tclass=\"bx--snippet-button\"\n\t\t\t\t[attr.aria-label]=\"translations.COPY_CODE\"\n\t\t\t\t(click)=\"onCopyButtonClicked()\"\n\t\t\t\ttabindex=\"0\">\n\t\t\t\t<svg class=\"bx--snippet__icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n\t\t\t\t\t<path d=\"M1 10H0V2C0 .9.9 0 2 0h8v1H2c-.6 0-1 .5-1 1v8z\" />\n\t\t\t\t\t<path d=\"M11 4.2V8h3.8L11 4.2zM15 9h-4c-.6 0-1-.4-1-1V4H4.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h10c.3 0\n\t\t\t\t\t\t.5-.2.5-.5V9zm-4-6c.1 0 .3.1.4.1l4.5 4.5c0 .1.1.3.1.4v6.5c0 .8-.7 1.5-1.5 1.5h-10c-.8\n\t\t\t\t\t\t0-1.5-.7-1.5-1.5v-10C3 3.7 3.7 3 4.5 3H11z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<ng-container *ngTemplateOutlet=\"feedbackTemplate\"></ng-container>\n\t\t\t</button>\n\t\t\t<button\n\t\t\t\t*ngIf=\"display === 'multi' && shouldShowExpandButton\"\n\t\t\t\tclass=\"bx--btn bx--btn--ghost bx--btn--sm bx--snippet-btn--expand\"\n\t\t\t\t(click)=\"toggleSnippetExpansion()\"\n\t\t\t\ttype=\"button\">\n\t\t\t\t<span class=\"bx--snippet-btn--text\">{{expanded ? translations.SHOW_LESS : translations.SHOW_MORE}}</span>\n\t\t\t\t<svg\n\t\t\t\t\tclass=\"bx--icon-chevron--down\"\n\t\t\t\t\twidth=\"12\" height=\"7\"\n\t\t\t\t\tviewBox=\"0 0 12 7\"\n\t\t\t\t\t[attr.aria-label]=\"translations.SHOW_MORE_ICON\">\n\t\t\t\t\t<title>{{translations.SHOW_MORE_ICON}}</title>\n\t\t\t\t\t<path fill-rule=\"nonzero\" d=\"M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z\" />\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t</ng-template>\n\n\t\t<ng-template #codeTemplate>\n\t\t\t<code #code><ng-content></ng-content></code>\n\t\t</ng-template>\n\n\t\t<ng-template #feedbackTemplate>\n\t\t\t<div\n\t\t\tclass=\"bx--btn--copy__feedback\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'bx--btn--copy__feedback--displayed': showFeedback\n\t\t\t}\"\n\t\t\t[attr.data-feedback]=\"feedbackText\">\n\t\t\t</div>\n\t\t</ng-template>\n\t"
                },] },
    ];
    /** @nocollapse */
    CodeSnippet.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    CodeSnippet.propDecorators = {
        display: [{ type: Input }],
        translations: [{ type: Input }],
        theme: [{ type: Input }],
        feedbackText: [{ type: Input }],
        feedbackTimeout: [{ type: Input }],
        expanded: [{ type: HostBinding, args: ["class.bx--snippet--expand",] }, { type: Input }],
        skeleton: [{ type: HostBinding, args: ["class.bx--skeleton",] }, { type: Input }],
        snippetClass: [{ type: HostBinding, args: ["class.bx--snippet",] }],
        snippetSingleClass: [{ type: HostBinding, args: ["class.bx--snippet--single",] }],
        snippetMultiClass: [{ type: HostBinding, args: ["class.bx--snippet--multi",] }],
        snippetInlineClass: [{ type: HostBinding, args: ["class.bx--snippet--inline",] }],
        snippetInlineLightClass: [{ type: HostBinding, args: ["class.bx--snippet--light",] }],
        btnCopyClass: [{ type: HostBinding, args: ["class.bx--btn--copy",] }],
        displayStyle: [{ type: HostBinding, args: ["style.display",] }],
        attrType: [{ type: HostBinding, args: ["attr.type",] }],
        code: [{ type: ViewChild, args: ["code",] }],
        hostClick: [{ type: HostListener, args: ["click",] }]
    };
    return CodeSnippet;
}());
export { CodeSnippet };
//# sourceMappingURL=code-snippet.component.js.map