import * as jqxcore from '../../jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxDateTimeInputComponent } from './angular_jqxdatetimeinput';
var jqxDateTimeInputModule = /** @class */ (function () {
    function jqxDateTimeInputModule() {
    }
    jqxDateTimeInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxDateTimeInputComponent],
                    exports: [jqxDateTimeInputComponent]
                },] }
    ];
    return jqxDateTimeInputModule;
}());
export { jqxDateTimeInputModule };
