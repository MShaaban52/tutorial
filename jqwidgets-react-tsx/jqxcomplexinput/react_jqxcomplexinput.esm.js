import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxcomplexinput from '../../jqwidgets/jqxcomplexinput';
import { createElement, PureComponent } from 'react';

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var JqxComplexInput = /** @class */ (function (_super) {
    __extends(JqxComplexInput, _super);
    function JqxComplexInput(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        _this._id = 'JqxComplexInput' + _this._jqx.generateID();
        _this._componentSelector = '#' + _this._id;
        _this.state = { lastProps: props };
        return _this;
    }
    JqxComplexInput.getDerivedStateFromProps = function (props, state) {
        if (!Object.is) {
            Object.is = function (x, y) {
                if (x === y) {
                    return x !== 0 || 1 / x === 1 / y;
                }
                else {
                    return x !== x && y !== y;
                }
            };
        }
        var areEqual = Object.is(props, state.lastProps);
        if (!areEqual) {
            var newState = { lastProps: props };
            return newState;
        }
        return null;
    };
    JqxComplexInput.prototype.componentDidMount = function () {
        var widgetOptions = this._manageProps();
        this._jqx(this._componentSelector).jqxComplexInput(widgetOptions);
        this._wireEvents();
    };
    JqxComplexInput.prototype.componentDidUpdate = function () {
        var widgetOptions = this._manageProps();
        this.setOptions(widgetOptions);
    };
    JqxComplexInput.prototype.render = function () {
        return (createElement("div", { id: this._id, className: this.props.className, style: this.props.style },
            createElement("input", { type: "text" }),
            createElement("div", null)));
    };
    JqxComplexInput.prototype.setOptions = function (options) {
        this._jqx(this._componentSelector).jqxComplexInput(options);
    };
    JqxComplexInput.prototype.getOptions = function (option) {
        return this._jqx(this._componentSelector).jqxComplexInput(option);
    };
    JqxComplexInput.prototype.destroy = function () {
        this._jqx(this._componentSelector).jqxComplexInput('destroy');
    };
    JqxComplexInput.prototype.getDecimalNotation = function (part, decimalNotation) {
        return this._jqx(this._componentSelector).jqxComplexInput('getDecimalNotation', part, decimalNotation);
    };
    JqxComplexInput.prototype.getReal = function (complexnumber) {
        return this._jqx(this._componentSelector).jqxComplexInput('getReal', complexnumber);
    };
    JqxComplexInput.prototype.getImaginary = function (complexnumber) {
        return this._jqx(this._componentSelector).jqxComplexInput('getImaginary', complexnumber);
    };
    JqxComplexInput.prototype.renderWidget = function () {
        this._jqx(this._componentSelector).jqxComplexInput('render');
    };
    JqxComplexInput.prototype.refresh = function () {
        this._jqx(this._componentSelector).jqxComplexInput('refresh');
    };
    JqxComplexInput.prototype.val = function (value) {
        return this._jqx(this._componentSelector).jqxComplexInput('val', value);
    };
    JqxComplexInput.prototype._manageProps = function () {
        var widgetProps = ['decimalNotation', 'disabled', 'height', 'placeHolder', 'roundedCorners', 'rtl', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'value', 'width'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxComplexInput.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0) {
                var originalEventName = prop.slice(2);
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    };
    return JqxComplexInput;
}(PureComponent));
var jqx = window.jqx;
var JQXLite = window.JQXLite;

export default JqxComplexInput;
export { jqx, JQXLite };
