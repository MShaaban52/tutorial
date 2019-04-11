import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import * as jqxribbon from '../../jqwidgets/jqxribbon';
import * as jqxlayout from '../../jqwidgets/jqxlayout';
import * as jqxmenu from '../../jqwidgets/jqxmenu';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxdockinglayout from '../../jqwidgets/jqxdockinglayout';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxDockingLayoutComponent = /** @class */ (function () {
    function jqxDockingLayoutComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
        // jqxDockingLayoutComponent events
        this.onDock = new EventEmitter();
        this.onFloatGroupClosed = new EventEmitter();
        this.onFloat = new EventEmitter();
        this.onPin = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onUnpin = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.ngOnInit = /**
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
    jqxDockingLayoutComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
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
    jqxDockingLayoutComponent.prototype.arraysEqual = /**
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
    jqxDockingLayoutComponent.prototype.manageAttributes = /**
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
    jqxDockingLayoutComponent.prototype.moveClasses = /**
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
    jqxDockingLayoutComponent.prototype.moveStyles = /**
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
    jqxDockingLayoutComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.__updateRect__ = /**
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
    jqxDockingLayoutComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxDockingLayout('setOptions', options);
    };
    // jqxDockingLayoutComponent properties
    // jqxDockingLayoutComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.contextMenu = 
    // jqxDockingLayoutComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('contextMenu', arg);
        }
        else {
            return this.host.jqxDockingLayout('contextMenu');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('height', arg);
        }
        else {
            return this.host.jqxDockingLayout('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.layout = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('layout', arg);
        }
        else {
            return this.host.jqxDockingLayout('layout');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.minGroupHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupHeight', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.minGroupWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupWidth', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.resizable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('resizable', arg);
        }
        else {
            return this.host.jqxDockingLayout('resizable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('rtl', arg);
        }
        else {
            return this.host.jqxDockingLayout('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('theme', arg);
        }
        else {
            return this.host.jqxDockingLayout('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('width', arg);
        }
        else {
            return this.host.jqxDockingLayout('width');
        }
    };
    // jqxDockingLayoutComponent functions
    // jqxDockingLayoutComponent functions
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} position
     * @param {?} panelType
     * @param {?} title
     * @param {?} content
     * @param {?} initContent
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.addFloatGroup = 
    // jqxDockingLayoutComponent functions
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} position
     * @param {?} panelType
     * @param {?} title
     * @param {?} content
     * @param {?} initContent
     * @return {?}
     */
    function (width, height, position, panelType, title, content, initContent) {
        this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxDockingLayout('destroy');
    };
    /**
     * @param {?} layout
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.loadLayout = /**
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        this.host.jqxDockingLayout('loadLayout', layout);
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxDockingLayout('refresh');
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxDockingLayout('render');
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.saveLayout = /**
     * @return {?}
     */
    function () {
        return this.host.jqxDockingLayout('saveLayout');
    };
    /**
     * @return {?}
     */
    jqxDockingLayoutComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('dock', function (eventData) { _this.onDock.emit(eventData); });
        this.host.on('floatGroupClosed', function (eventData) { _this.onFloatGroupClosed.emit(eventData); });
        this.host.on('float', function (eventData) { _this.onFloat.emit(eventData); });
        this.host.on('pin', function (eventData) { _this.onPin.emit(eventData); });
        this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
        this.host.on('unpin', function (eventData) { _this.onUnpin.emit(eventData); });
    };
    jqxDockingLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxDockingLayout',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxDockingLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxDockingLayoutComponent.propDecorators = {
        attrContextMenu: [{ type: Input, args: ['contextMenu',] }],
        attrLayout: [{ type: Input, args: ['layout',] }],
        attrMinGroupHeight: [{ type: Input, args: ['minGroupHeight',] }],
        attrMinGroupWidth: [{ type: Input, args: ['minGroupWidth',] }],
        attrResizable: [{ type: Input, args: ['resizable',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onDock: [{ type: Output }],
        onFloatGroupClosed: [{ type: Output }],
        onFloat: [{ type: Output }],
        onPin: [{ type: Output }],
        onResize: [{ type: Output }],
        onUnpin: [{ type: Output }]
    };
    return jqxDockingLayoutComponent;
}()); //jqxDockingLayoutComponent
export { jqxDockingLayoutComponent };
if (false) {
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrContextMenu;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrLayout;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrMinGroupHeight;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrMinGroupWidth;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrResizable;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.properties;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.host;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.elementRef;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onDock;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onFloatGroupClosed;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onFloat;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onPin;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onResize;
    /** @type {?} */
    jqxDockingLayoutComponent.prototype.onUnpin;
    /* Skipping unhandled member: ;*/
}
