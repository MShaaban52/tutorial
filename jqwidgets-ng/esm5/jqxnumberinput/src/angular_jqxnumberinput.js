import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxnumberinput from '../../jqwidgets/jqxnumberinput';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxNumberInputComponent; }),
    multi: true
};
var jqxNumberInputComponent = /** @class */ (function () {
    function jqxNumberInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxNumberInputComponent events
        this.onChange = new EventEmitter();
        this.onTextchanged = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxNumberInputComponent.prototype.ngOnInit = /**
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
    jqxNumberInputComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
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
    jqxNumberInputComponent.prototype.arraysEqual = /**
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
    jqxNumberInputComponent.prototype.manageAttributes = /**
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
    jqxNumberInputComponent.prototype.moveClasses = /**
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
    jqxNumberInputComponent.prototype.moveStyles = /**
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
    jqxNumberInputComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxNumberInputComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxNumberInputComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    jqxNumberInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.widgetObject) {
            this.host.jqxNumberInput('val', value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxNumberInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxNumberInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxNumberInputComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxNumberInput('setOptions', options);
    };
    // jqxNumberInputComponent properties
    // jqxNumberInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.allowNull = 
    // jqxNumberInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('allowNull', arg);
        }
        else {
            return this.host.jqxNumberInput('allowNull');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.decimal = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimal', arg);
        }
        else {
            return this.host.jqxNumberInput('decimal');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('disabled', arg);
        }
        else {
            return this.host.jqxNumberInput('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.decimalDigits = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalDigits', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalDigits');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.decimalSeparator = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalSeparator');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.digits = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('digits', arg);
        }
        else {
            return this.host.jqxNumberInput('digits');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.groupSeparator = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSeparator');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.groupSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSize', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('height', arg);
        }
        else {
            return this.host.jqxNumberInput('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.inputMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('inputMode', arg);
        }
        else {
            return this.host.jqxNumberInput('inputMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('min', arg);
        }
        else {
            return this.host.jqxNumberInput('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('max', arg);
        }
        else {
            return this.host.jqxNumberInput('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.negativeSymbol = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('negativeSymbol', arg);
        }
        else {
            return this.host.jqxNumberInput('negativeSymbol');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.placeHolder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('placeHolder', arg);
        }
        else {
            return this.host.jqxNumberInput('placeHolder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.promptChar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('promptChar', arg);
        }
        else {
            return this.host.jqxNumberInput('promptChar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('rtl', arg);
        }
        else {
            return this.host.jqxNumberInput('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.readOnly = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('readOnly', arg);
        }
        else {
            return this.host.jqxNumberInput('readOnly');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.spinMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinMode', arg);
        }
        else {
            return this.host.jqxNumberInput('spinMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.spinButtons = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtons', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtons');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.spinButtonsWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsWidth', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.spinButtonsStep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsStep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.symbol = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbol', arg);
        }
        else {
            return this.host.jqxNumberInput('symbol');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.symbolPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbolPosition', arg);
        }
        else {
            return this.host.jqxNumberInput('symbolPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.textAlign = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('textAlign', arg);
        }
        else {
            return this.host.jqxNumberInput('textAlign');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('template', arg);
        }
        else {
            return this.host.jqxNumberInput('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('theme', arg);
        }
        else {
            return this.host.jqxNumberInput('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('value', arg);
        }
        else {
            return this.host.jqxNumberInput('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxNumberInputComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('width', arg);
        }
        else {
            return this.host.jqxNumberInput('width');
        }
    };
    // jqxNumberInputComponent functions
    // jqxNumberInputComponent functions
    /**
     * @return {?}
     */
    jqxNumberInputComponent.prototype.clear = 
    // jqxNumberInputComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxNumberInput('clear');
    };
    /**
     * @return {?}
     */
    jqxNumberInputComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxNumberInput('destroy');
    };
    /**
     * @return {?}
     */
    jqxNumberInputComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxNumberInput('focus');
    };
    /**
     * @return {?}
     */
    jqxNumberInputComponent.prototype.getDecimal = /**
     * @return {?}
     */
    function () {
        return this.host.jqxNumberInput('getDecimal');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxNumberInputComponent.prototype.setDecimal = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxNumberInput('setDecimal', index);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxNumberInputComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxNumberInput('val', value);
        }
        else {
            return this.host.jqxNumberInput('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxNumberInputComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
        this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
    };
    jqxNumberInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxNumberInput',
                    template: '<input>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxNumberInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxNumberInputComponent.propDecorators = {
        attrAllowNull: [{ type: Input, args: ['allowNull',] }],
        attrDecimal: [{ type: Input, args: ['decimal',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDecimalDigits: [{ type: Input, args: ['decimalDigits',] }],
        attrDecimalSeparator: [{ type: Input, args: ['decimalSeparator',] }],
        attrDigits: [{ type: Input, args: ['digits',] }],
        attrGroupSeparator: [{ type: Input, args: ['groupSeparator',] }],
        attrGroupSize: [{ type: Input, args: ['groupSize',] }],
        attrInputMode: [{ type: Input, args: ['inputMode',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrNegativeSymbol: [{ type: Input, args: ['negativeSymbol',] }],
        attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
        attrPromptChar: [{ type: Input, args: ['promptChar',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrReadOnly: [{ type: Input, args: ['readOnly',] }],
        attrSpinMode: [{ type: Input, args: ['spinMode',] }],
        attrSpinButtons: [{ type: Input, args: ['spinButtons',] }],
        attrSpinButtonsWidth: [{ type: Input, args: ['spinButtonsWidth',] }],
        attrSpinButtonsStep: [{ type: Input, args: ['spinButtonsStep',] }],
        attrSymbol: [{ type: Input, args: ['symbol',] }],
        attrSymbolPosition: [{ type: Input, args: ['symbolPosition',] }],
        attrTextAlign: [{ type: Input, args: ['textAlign',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }],
        onTextchanged: [{ type: Output }],
        onValueChanged: [{ type: Output }]
    };
    return jqxNumberInputComponent;
}()); //jqxNumberInputComponent
export { jqxNumberInputComponent };
if (false) {
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrAllowNull;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDecimal;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDecimalDigits;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDecimalSeparator;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDigits;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrGroupSeparator;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrGroupSize;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrInputMode;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrMin;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrMax;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrNegativeSymbol;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrPromptChar;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrReadOnly;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSpinMode;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSpinButtons;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSpinButtonsWidth;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSpinButtonsStep;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSymbol;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSymbolPosition;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrTextAlign;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxNumberInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxNumberInputComponent.prototype.properties;
    /** @type {?} */
    jqxNumberInputComponent.prototype.host;
    /** @type {?} */
    jqxNumberInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxNumberInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxNumberInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxNumberInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxNumberInputComponent.prototype.onChange;
    /** @type {?} */
    jqxNumberInputComponent.prototype.onTextchanged;
    /** @type {?} */
    jqxNumberInputComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
