require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistmenu');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxlistmenu', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxlistmenu = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxListMenuComponent = /** @class */ (function () {
        function jqxListMenuComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['alwaysShowNavigationArrows', 'animationType', 'animationDuration', 'autoSeparators', 'backLabel', 'disabled', 'enableScrolling', 'filterCallback', 'height', 'headerAnimationDuration', 'placeHolder', 'readOnly', 'rtl', 'roundedCorners', 'showNavigationArrows', 'showFilter', 'showHeader', 'showBackButton', 'theme', 'width'];
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxListMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate) {
                    this.createComponent();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxListMenuComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.host) {
                    for (var i = 0; i < this.properties.length; i++) {
                        /** @type {?} */
                        var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                        /** @type {?} */
                        var areEqual = false;
                        if (this[attrName] !== undefined) {
                            if (typeof this[attrName] === 'object') {
                                if (this[attrName] instanceof Array) {
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxListMenu(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxListMenu(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxListMenu(this.properties[i])) {
                                this.host.jqxListMenu(this.properties[i], this[attrName]);
                            }
                        }
                    }
                }
            };
        /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
        jqxListMenuComponent.prototype.arraysEqual = /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
            function (attrValue, hostValue) {
                if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
                    return false;
                }
                if (attrValue.length != hostValue.length) {
                    return false;
                }
                for (var i = 0; i < attrValue.length; i++) {
                    if (attrValue[i] !== hostValue[i]) {
                        return false;
                    }
                }
                return true;
            };
        /**
         * @return {?}
         */
        jqxListMenuComponent.prototype.manageAttributes = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var options = {};
                for (var i = 0; i < this.properties.length; i++) {
                    /** @type {?} */
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    if (this[attrName] !== undefined) {
                        options[this.properties[i]] = this[attrName];
                    }
                }
                return options;
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxListMenuComponent.prototype.moveClasses = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                var _a;
                /** @type {?} */
                var classes = parentEl.classList;
                if (classes.length > 0) {
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
                }
                parentEl.className = '';
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxListMenuComponent.prototype.moveStyles = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                /** @type {?} */
                var style = parentEl.style.cssText;
                childEl.style.cssText = style;
                parentEl.style.cssText = '';
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxListMenuComponent.prototype.createComponent = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                if (this.host) {
                    return;
                }
                if (options) {
                    JQXLite.extend(options, this.manageAttributes());
                }
                else {
                    options = this.manageAttributes();
                }
                this.host = JQXLite(this.elementRef.nativeElement.firstChild);
                this.moveClasses(this.elementRef.nativeElement, this.host[0]);
                this.moveStyles(this.elementRef.nativeElement, this.host[0]);
                this.__wireEvents__();
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListMenu', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxListMenuComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxListMenuComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        /**
         * @param {?} options
         * @return {?}
         */
        jqxListMenuComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxListMenu('setOptions', options);
            };
        // jqxListMenuComponent properties
        // jqxListMenuComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.alwaysShowNavigationArrows =
            // jqxListMenuComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('alwaysShowNavigationArrows', arg);
                }
                else {
                    return this.host.jqxListMenu('alwaysShowNavigationArrows');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.animationType = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('animationType', arg);
                }
                else {
                    return this.host.jqxListMenu('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.animationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('animationDuration', arg);
                }
                else {
                    return this.host.jqxListMenu('animationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.autoSeparators = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('autoSeparators', arg);
                }
                else {
                    return this.host.jqxListMenu('autoSeparators');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.backLabel = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('backLabel', arg);
                }
                else {
                    return this.host.jqxListMenu('backLabel');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('disabled', arg);
                }
                else {
                    return this.host.jqxListMenu('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.enableScrolling = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('enableScrolling', arg);
                }
                else {
                    return this.host.jqxListMenu('enableScrolling');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.filterCallback = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('filterCallback', arg);
                }
                else {
                    return this.host.jqxListMenu('filterCallback');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('height', arg);
                }
                else {
                    return this.host.jqxListMenu('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.headerAnimationDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('headerAnimationDuration', arg);
                }
                else {
                    return this.host.jqxListMenu('headerAnimationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.placeHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('placeHolder', arg);
                }
                else {
                    return this.host.jqxListMenu('placeHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.readOnly = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('readOnly', arg);
                }
                else {
                    return this.host.jqxListMenu('readOnly');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('rtl', arg);
                }
                else {
                    return this.host.jqxListMenu('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.roundedCorners = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('roundedCorners', arg);
                }
                else {
                    return this.host.jqxListMenu('roundedCorners');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.showNavigationArrows = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('showNavigationArrows', arg);
                }
                else {
                    return this.host.jqxListMenu('showNavigationArrows');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.showFilter = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('showFilter', arg);
                }
                else {
                    return this.host.jqxListMenu('showFilter');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.showHeader = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('showHeader', arg);
                }
                else {
                    return this.host.jqxListMenu('showHeader');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.showBackButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('showBackButton', arg);
                }
                else {
                    return this.host.jqxListMenu('showBackButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('theme', arg);
                }
                else {
                    return this.host.jqxListMenu('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxListMenuComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxListMenu('width', arg);
                }
                else {
                    return this.host.jqxListMenu('width');
                }
            };
        // jqxListMenuComponent functions
        // jqxListMenuComponent functions
        /**
         * @return {?}
         */
        jqxListMenuComponent.prototype.back =
            // jqxListMenuComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxListMenu('back');
            };
        /**
         * @param {?} Item
         * @return {?}
         */
        jqxListMenuComponent.prototype.changePage = /**
         * @param {?} Item
         * @return {?}
         */
            function (Item) {
                this.host.jqxListMenu('changePage', Item);
            };
        /**
         * @return {?}
         */
        jqxListMenuComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxListMenu('destroy');
            };
        /**
         * @return {?}
         */
        jqxListMenuComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
            };
        jqxListMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxListMenu',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxListMenuComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxListMenuComponent.propDecorators = {
            attrAlwaysShowNavigationArrows: [{ type: core.Input, args: ['alwaysShowNavigationArrows',] }],
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrAnimationDuration: [{ type: core.Input, args: ['animationDuration',] }],
            attrAutoSeparators: [{ type: core.Input, args: ['autoSeparators',] }],
            attrBackLabel: [{ type: core.Input, args: ['backLabel',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEnableScrolling: [{ type: core.Input, args: ['enableScrolling',] }],
            attrFilterCallback: [{ type: core.Input, args: ['filterCallback',] }],
            attrHeaderAnimationDuration: [{ type: core.Input, args: ['headerAnimationDuration',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrReadOnly: [{ type: core.Input, args: ['readOnly',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrRoundedCorners: [{ type: core.Input, args: ['roundedCorners',] }],
            attrShowNavigationArrows: [{ type: core.Input, args: ['showNavigationArrows',] }],
            attrShowFilter: [{ type: core.Input, args: ['showFilter',] }],
            attrShowHeader: [{ type: core.Input, args: ['showHeader',] }],
            attrShowBackButton: [{ type: core.Input, args: ['showBackButton',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }]
        };
        return jqxListMenuComponent;
    }()); //jqxListMenuComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxListMenuModule = /** @class */ (function () {
        function jqxListMenuModule() {
        }
        jqxListMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxListMenuComponent],
                        exports: [jqxListMenuComponent]
                    },] }
        ];
        return jqxListMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxListMenuComponent = jqxListMenuComponent;
    exports.jqxListMenuModule = jqxListMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

