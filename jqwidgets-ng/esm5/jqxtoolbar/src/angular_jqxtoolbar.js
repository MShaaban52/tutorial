import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import * as jqxinput from '../../jqwidgets/jqxinput';
import * as jqxtoolbar from '../../jqwidgets/jqxtoolbar';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxToolBarComponent = /** @class */ (function () {
    function jqxToolBarComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'initTools', 'minimizeWidth', 'minWidth', 'maxWidth', 'rtl', 'tools', 'theme', 'width'];
        // jqxToolBarComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxToolBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxToolBarComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToolBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToolBar(this.properties[i])) {
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
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
    jqxToolBarComponent.prototype.arraysEqual = /**
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
    jqxToolBarComponent.prototype.manageAttributes = /**
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
    jqxToolBarComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxToolBarComponent.prototype.moveStyles = /**
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
    jqxToolBarComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxToolBarComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxToolBarComponent.prototype.__updateRect__ = /**
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
    jqxToolBarComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxToolBar('setOptions', options);
    };
    // jqxToolBarComponent properties
    // jqxToolBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.disabled = 
    // jqxToolBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('disabled', arg);
        }
        else {
            return this.host.jqxToolBar('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('height', arg);
        }
        else {
            return this.host.jqxToolBar('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.initTools = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('initTools', arg);
        }
        else {
            return this.host.jqxToolBar('initTools');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.minimizeWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minimizeWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minimizeWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.minWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.maxWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('maxWidth', arg);
        }
        else {
            return this.host.jqxToolBar('maxWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('rtl', arg);
        }
        else {
            return this.host.jqxToolBar('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.tools = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('tools', arg);
        }
        else {
            return this.host.jqxToolBar('tools');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('theme', arg);
        }
        else {
            return this.host.jqxToolBar('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxToolBarComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('width', arg);
        }
        else {
            return this.host.jqxToolBar('width');
        }
    };
    // jqxToolBarComponent functions
    // jqxToolBarComponent functions
    /**
     * @param {?} type
     * @param {?} position
     * @param {?} separator
     * @param {?} menuToolIninitialization
     * @return {?}
     */
    jqxToolBarComponent.prototype.addTool = 
    // jqxToolBarComponent functions
    /**
     * @param {?} type
     * @param {?} position
     * @param {?} separator
     * @param {?} menuToolIninitialization
     * @return {?}
     */
    function (type, position, separator, menuToolIninitialization) {
        this.host.jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
    };
    /**
     * @param {?} index
     * @param {?} disable
     * @return {?}
     */
    jqxToolBarComponent.prototype.disableTool = /**
     * @param {?} index
     * @param {?} disable
     * @return {?}
     */
    function (index, disable) {
        this.host.jqxToolBar('disableTool', index, disable);
    };
    /**
     * @return {?}
     */
    jqxToolBarComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxToolBar('destroy');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxToolBarComponent.prototype.destroyTool = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxToolBar('destroyTool', index);
    };
    /**
     * @return {?}
     */
    jqxToolBarComponent.prototype.getTools = /**
     * @return {?}
     */
    function () {
        return this.host.jqxToolBar('getTools');
    };
    /**
     * @return {?}
     */
    jqxToolBarComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxToolBar('render');
    };
    /**
     * @return {?}
     */
    jqxToolBarComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxToolBar('refresh');
    };
    /**
     * @return {?}
     */
    jqxToolBarComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
    };
    jqxToolBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxToolbar',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxToolBarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxToolBarComponent.propDecorators = {
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrInitTools: [{ type: Input, args: ['initTools',] }],
        attrMinimizeWidth: [{ type: Input, args: ['minimizeWidth',] }],
        attrMinWidth: [{ type: Input, args: ['minWidth',] }],
        attrMaxWidth: [{ type: Input, args: ['maxWidth',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTools: [{ type: Input, args: ['tools',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onClose: [{ type: Output }],
        onOpen: [{ type: Output }]
    };
    return jqxToolBarComponent;
}()); //jqxToolBarComponent
export { jqxToolBarComponent };
if (false) {
    /** @type {?} */
    jqxToolBarComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrInitTools;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrMinimizeWidth;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrMinWidth;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrMaxWidth;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrRtl;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrTools;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrTheme;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrWidth;
    /** @type {?} */
    jqxToolBarComponent.prototype.attrHeight;
    /** @type {?} */
    jqxToolBarComponent.prototype.autoCreate;
    /** @type {?} */
    jqxToolBarComponent.prototype.properties;
    /** @type {?} */
    jqxToolBarComponent.prototype.host;
    /** @type {?} */
    jqxToolBarComponent.prototype.elementRef;
    /** @type {?} */
    jqxToolBarComponent.prototype.widgetObject;
    /** @type {?} */
    jqxToolBarComponent.prototype.onClose;
    /** @type {?} */
    jqxToolBarComponent.prototype.onOpen;
    /* Skipping unhandled member: ;*/
}
