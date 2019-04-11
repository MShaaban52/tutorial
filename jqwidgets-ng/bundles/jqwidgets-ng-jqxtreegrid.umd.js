require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require(('../../jqwidgets/jqxdata.export');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxcheckbox');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxcombobox');
require('../../jqwidgets/jqxnumberinput');
require('../../jqwidgets/jqxdropdownlist');
require('../../jqwidgets/jqxdatatable');
require('../../jqwidgets/jqxtreegrid');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtreegrid', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtreegrid = {}),global.ng.core));
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
    var jqxTreeGridComponent = /** @class */ (function () {
        function jqxTreeGridComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'checkboxes', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'height', 'hierarchicalCheckboxes', 'icons', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pageSizeMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'rowDetailsRenderer', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showSubAggregates', 'showToolbar', 'showStatusbar', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'showHeader', 'theme', 'toolbarHeight', 'width', 'virtualModeCreateRecords', 'virtualModeRecordCreating'];
            // jqxTreeGridComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onCellBeginEdit = new core.EventEmitter();
            this.onCellEndEdit = new core.EventEmitter();
            this.onCellValueChanged = new core.EventEmitter();
            this.onColumnResized = new core.EventEmitter();
            this.onColumnReordered = new core.EventEmitter();
            this.onFilter = new core.EventEmitter();
            this.onPageChanged = new core.EventEmitter();
            this.onPageSizeChanged = new core.EventEmitter();
            this.onRowClick = new core.EventEmitter();
            this.onRowDoubleClick = new core.EventEmitter();
            this.onRowSelect = new core.EventEmitter();
            this.onRowUnselect = new core.EventEmitter();
            this.onRowBeginEdit = new core.EventEmitter();
            this.onRowEndEdit = new core.EventEmitter();
            this.onRowExpand = new core.EventEmitter();
            this.onRowCollapse = new core.EventEmitter();
            this.onRowCheck = new core.EventEmitter();
            this.onRowUncheck = new core.EventEmitter();
            this.onSort = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var children = JQXLite(this.elementRef.nativeElement.children).find('tr');
                /** @type {?} */
                var html = '';
                /** @type {?} */
                var options = {};
                if (children.length > 0) {
                    this.container = document.createElement('div');
                    html = this.elementRef.nativeElement.innerHTML;
                    this.container.appendChild(this.elementRef.nativeElement.firstChild);
                    this.elementRef.nativeElement.innerHTML = html;
                    this.content = html;
                    /** @type {?} */
                    var result = JQXLite.jqx.parseSourceTag(this.container);
                    if (this['attrColumns'] !== undefined) {
                        options['source'] = result.source;
                    }
                    else {
                        options['source'] = result.source;
                        options['columns'] = result.columns;
                    }
                }
                if (this.autoCreate) {
                    this.createComponent(options);
                }
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (this.container) {
                    if (this.content !== this.container.innerHTML) {
                        this.content = this.container.innerHTML;
                        /** @type {?} */
                        var result = JQXLite.jqx.parseSourceTag(this.container);
                        /** @type {?} */
                        var columns = this.host.jqxGrid('columns');
                        if (columns.length === 0) {
                            this.host.jqxGrid({ source: result.source, columns: result.columns });
                        }
                        else {
                            this.host.jqxGrid({ source: result.source });
                        }
                    }
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxTreeGridComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeGrid(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxTreeGrid(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxTreeGrid(this.properties[i])) {
                                this.host.jqxTreeGrid(this.properties[i], this[attrName]);
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
        jqxTreeGridComponent.prototype.arraysEqual = /**
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
        jqxTreeGridComponent.prototype.manageAttributes = /**
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
        jqxTreeGridComponent.prototype.moveClasses = /**
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
        jqxTreeGridComponent.prototype.moveStyles = /**
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
        jqxTreeGridComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeGrid', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxTreeGridComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.__updateRect__ = /**
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
        jqxTreeGridComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxTreeGrid('setOptions', options);
            };
        // jqxTreeGridComponent properties
        // jqxTreeGridComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.altRows =
            // jqxTreeGridComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('altRows', arg);
                }
                else {
                    return this.host.jqxTreeGrid('altRows');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.autoRowHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('autoRowHeight', arg);
                }
                else {
                    return this.host.jqxTreeGrid('autoRowHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.aggregatesHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('aggregatesHeight', arg);
                }
                else {
                    return this.host.jqxTreeGrid('aggregatesHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.autoShowLoadElement = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('autoShowLoadElement', arg);
                }
                else {
                    return this.host.jqxTreeGrid('autoShowLoadElement');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.checkboxes = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('checkboxes', arg);
                }
                else {
                    return this.host.jqxTreeGrid('checkboxes');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.columnsHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('columnsHeight', arg);
                }
                else {
                    return this.host.jqxTreeGrid('columnsHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.columns = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('columns', arg);
                }
                else {
                    return this.host.jqxTreeGrid('columns');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.columnGroups = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('columnGroups', arg);
                }
                else {
                    return this.host.jqxTreeGrid('columnGroups');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.columnsResize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('columnsResize', arg);
                }
                else {
                    return this.host.jqxTreeGrid('columnsResize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.columnsReorder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('columnsReorder', arg);
                }
                else {
                    return this.host.jqxTreeGrid('columnsReorder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('disabled', arg);
                }
                else {
                    return this.host.jqxTreeGrid('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.editable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('editable', arg);
                }
                else {
                    return this.host.jqxTreeGrid('editable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.editSettings = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('editSettings', arg);
                }
                else {
                    return this.host.jqxTreeGrid('editSettings');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.exportSettings = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('exportSettings', arg);
                }
                else {
                    return this.host.jqxTreeGrid('exportSettings');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.enableHover = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('enableHover', arg);
                }
                else {
                    return this.host.jqxTreeGrid('enableHover');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.enableBrowserSelection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('enableBrowserSelection', arg);
                }
                else {
                    return this.host.jqxTreeGrid('enableBrowserSelection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.filterable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('filterable', arg);
                }
                else {
                    return this.host.jqxTreeGrid('filterable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.filterHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('filterHeight', arg);
                }
                else {
                    return this.host.jqxTreeGrid('filterHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.filterMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('filterMode', arg);
                }
                else {
                    return this.host.jqxTreeGrid('filterMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('height', arg);
                }
                else {
                    return this.host.jqxTreeGrid('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.hierarchicalCheckboxes = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('hierarchicalCheckboxes', arg);
                }
                else {
                    return this.host.jqxTreeGrid('hierarchicalCheckboxes');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.icons = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('icons', arg);
                }
                else {
                    return this.host.jqxTreeGrid('icons');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.incrementalSearch = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('incrementalSearch', arg);
                }
                else {
                    return this.host.jqxTreeGrid('incrementalSearch');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.localization = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('localization', arg);
                }
                else {
                    return this.host.jqxTreeGrid('localization');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pagerHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pagerHeight', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pagerHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pageSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pageSize', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pageSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pageSizeOptions = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pageSizeOptions', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pageSizeOptions');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pageable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pageable', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pageable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pagerPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pagerPosition', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pagerPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pagerMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pagerMode', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pagerMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pageSizeMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pageSizeMode', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pageSizeMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pagerButtonsCount = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pagerButtonsCount', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pagerButtonsCount');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.pagerRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('pagerRenderer', arg);
                }
                else {
                    return this.host.jqxTreeGrid('pagerRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.ready = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('ready', arg);
                }
                else {
                    return this.host.jqxTreeGrid('ready');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.rowDetails = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('rowDetails', arg);
                }
                else {
                    return this.host.jqxTreeGrid('rowDetails');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.rowDetailsRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('rowDetailsRenderer', arg);
                }
                else {
                    return this.host.jqxTreeGrid('rowDetailsRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.renderToolbar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('renderToolbar', arg);
                }
                else {
                    return this.host.jqxTreeGrid('renderToolbar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.renderStatusBar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('renderStatusBar', arg);
                }
                else {
                    return this.host.jqxTreeGrid('renderStatusBar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.rendering = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('rendering', arg);
                }
                else {
                    return this.host.jqxTreeGrid('rendering');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.rendered = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('rendered', arg);
                }
                else {
                    return this.host.jqxTreeGrid('rendered');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('rtl', arg);
                }
                else {
                    return this.host.jqxTreeGrid('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('source', arg);
                }
                else {
                    return this.host.jqxTreeGrid('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.sortable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('sortable', arg);
                }
                else {
                    return this.host.jqxTreeGrid('sortable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.showAggregates = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('showAggregates', arg);
                }
                else {
                    return this.host.jqxTreeGrid('showAggregates');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.showSubAggregates = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('showSubAggregates', arg);
                }
                else {
                    return this.host.jqxTreeGrid('showSubAggregates');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.showToolbar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('showToolbar', arg);
                }
                else {
                    return this.host.jqxTreeGrid('showToolbar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.showStatusbar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('showStatusbar', arg);
                }
                else {
                    return this.host.jqxTreeGrid('showStatusbar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.statusBarHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('statusBarHeight', arg);
                }
                else {
                    return this.host.jqxTreeGrid('statusBarHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.scrollBarSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('scrollBarSize', arg);
                }
                else {
                    return this.host.jqxTreeGrid('scrollBarSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.selectionMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('selectionMode', arg);
                }
                else {
                    return this.host.jqxTreeGrid('selectionMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.showHeader = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('showHeader', arg);
                }
                else {
                    return this.host.jqxTreeGrid('showHeader');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('theme', arg);
                }
                else {
                    return this.host.jqxTreeGrid('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.toolbarHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('toolbarHeight', arg);
                }
                else {
                    return this.host.jqxTreeGrid('toolbarHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('width', arg);
                }
                else {
                    return this.host.jqxTreeGrid('width');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.virtualModeCreateRecords = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('virtualModeCreateRecords', arg);
                }
                else {
                    return this.host.jqxTreeGrid('virtualModeCreateRecords');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTreeGridComponent.prototype.virtualModeRecordCreating = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxTreeGrid('virtualModeRecordCreating', arg);
                }
                else {
                    return this.host.jqxTreeGrid('virtualModeRecordCreating');
                }
            };
        // jqxTreeGridComponent functions
        // jqxTreeGridComponent functions
        /**
         * @param {?} rowKey
         * @param {?} rowData
         * @param {?} rowPosition
         * @param {?=} parent
         * @return {?}
         */
        jqxTreeGridComponent.prototype.addRow =
            // jqxTreeGridComponent functions
            /**
             * @param {?} rowKey
             * @param {?} rowData
             * @param {?} rowPosition
             * @param {?=} parent
             * @return {?}
             */
            function (rowKey, rowData, rowPosition, parent) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);
            };
        /**
         * @param {?} dataField
         * @param {?} filerGroup
         * @return {?}
         */
        jqxTreeGridComponent.prototype.addFilter = /**
         * @param {?} dataField
         * @param {?} filerGroup
         * @return {?}
         */
            function (dataField, filerGroup) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('addFilter', dataField, filerGroup);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.applyFilters = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('applyFilters');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.beginUpdate = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('beginUpdate');
            };
        /**
         * @param {?} rowKey
         * @return {?}
         */
        jqxTreeGridComponent.prototype.beginRowEdit = /**
         * @param {?} rowKey
         * @return {?}
         */
            function (rowKey) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('beginRowEdit', rowKey);
            };
        /**
         * @param {?} rowKey
         * @param {?} dataField
         * @return {?}
         */
        jqxTreeGridComponent.prototype.beginCellEdit = /**
         * @param {?} rowKey
         * @param {?} dataField
         * @return {?}
         */
            function (rowKey, dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('beginCellEdit', rowKey, dataField);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.clearSelection = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('clearSelection');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.clearFilters = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('clearFilters');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.clear = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('clear');
            };
        /**
         * @param {?} rowKey
         * @return {?}
         */
        jqxTreeGridComponent.prototype.checkRow = /**
         * @param {?} rowKey
         * @return {?}
         */
            function (rowKey) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('checkRow', rowKey);
            };
        /**
         * @param {?} rowKey
         * @return {?}
         */
        jqxTreeGridComponent.prototype.collapseRow = /**
         * @param {?} rowKey
         * @return {?}
         */
            function (rowKey) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('collapseRow', rowKey);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.collapseAll = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('collapseAll');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('destroy');
            };
        /**
         * @param {?} rowKey
         * @return {?}
         */
        jqxTreeGridComponent.prototype.deleteRow = /**
         * @param {?} rowKey
         * @return {?}
         */
            function (rowKey) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('deleteRow', rowKey);
            };
        /**
         * @param {?} rowKey
         * @return {?}
         */
        jqxTreeGridComponent.prototype.expandRow = /**
         * @param {?} rowKey
         * @return {?}
         */
            function (rowKey) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('expandRow', rowKey);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.expandAll = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('expandAll');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.endUpdate = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('endUpdate');
            };
        /**
         * @param {?} rowKey
         * @return {?}
         */
        jqxTreeGridComponent.prototype.ensureRowVisible = /**
         * @param {?} rowKey
         * @return {?}
         */
            function (rowKey) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('ensureRowVisible', rowKey);
            };
        /**
         * @param {?} rowKey
         * @param {?=} cancelChanges
         * @return {?}
         */
        jqxTreeGridComponent.prototype.endRowEdit = /**
         * @param {?} rowKey
         * @param {?=} cancelChanges
         * @return {?}
         */
            function (rowKey, cancelChanges) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('endRowEdit', rowKey, cancelChanges);
            };
        /**
         * @param {?} rowKey
         * @param {?} dataField
         * @param {?=} cancelChanges
         * @return {?}
         */
        jqxTreeGridComponent.prototype.endCellEdit = /**
         * @param {?} rowKey
         * @param {?} dataField
         * @param {?=} cancelChanges
         * @return {?}
         */
            function (rowKey, dataField, cancelChanges) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);
            };
        /**
         * @param {?} exportDataType
         * @return {?}
         */
        jqxTreeGridComponent.prototype.exportData = /**
         * @param {?} exportDataType
         * @return {?}
         */
            function (exportDataType) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('exportData', exportDataType);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('focus');
            };
        /**
         * @param {?} dataField
         * @param {?} propertyName
         * @return {?}
         */
        jqxTreeGridComponent.prototype.getColumnProperty = /**
         * @param {?} dataField
         * @param {?} propertyName
         * @return {?}
         */
            function (dataField, propertyName) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('getColumnProperty', dataField, propertyName);
            };
        /**
         * @param {?} pageIndex
         * @return {?}
         */
        jqxTreeGridComponent.prototype.goToPage = /**
         * @param {?} pageIndex
         * @return {?}
         */
            function (pageIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('goToPage', pageIndex);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.goToPrevPage = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('goToPrevPage');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.goToNextPage = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('goToNextPage');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.getSelection = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('getSelection');
            };
        /**
         * @param {?} row
         * @return {?}
         */
        jqxTreeGridComponent.prototype.getKey = /**
         * @param {?} row
         * @return {?}
         */
            function (row) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('getKey', row);
            };
        /**
         * @param {?} rowKey
         * @return {?}
         */
        jqxTreeGridComponent.prototype.getRow = /**
         * @param {?} rowKey
         * @return {?}
         */
            function (rowKey) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('getRow', rowKey);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.getRows = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('getRows');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.getCheckedRows = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('getCheckedRows');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.getView = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('getView');
            };
        /**
         * @param {?} rowKey
         * @param {?} dataField
         * @return {?}
         */
        jqxTreeGridComponent.prototype.getCellValue = /**
         * @param {?} rowKey
         * @param {?} dataField
         * @return {?}
         */
            function (rowKey, dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('getCellValue', rowKey, dataField);
            };
        /**
         * @param {?} dataField
         * @return {?}
         */
        jqxTreeGridComponent.prototype.hideColumn = /**
         * @param {?} dataField
         * @return {?}
         */
            function (dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('hideColumn', dataField);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.isBindingCompleted = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('isBindingCompleted');
            };
        /**
         * @param {?} rowKey
         * @return {?}
         */
        jqxTreeGridComponent.prototype.lockRow = /**
         * @param {?} rowKey
         * @return {?}
         */
            function (rowKey) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('lockRow', rowKey);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('refresh');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('render');
            };
        /**
         * @param {?} dataField
         * @return {?}
         */
        jqxTreeGridComponent.prototype.removeFilter = /**
         * @param {?} dataField
         * @return {?}
         */
            function (dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('removeFilter', dataField);
            };
        /**
         * @param {?=} top
         * @param {?=} left
         * @return {?}
         */
        jqxTreeGridComponent.prototype.scrollOffset = /**
         * @param {?=} top
         * @param {?=} left
         * @return {?}
         */
            function (top, left) {
                if (top !== undefined || left !== undefined) {
                    this.host.jqxTreeGrid('scrollOffset', top, left);
                }
                else {
                    return this.host.jqxTreeGrid('scrollOffset');
                }
            };
        /**
         * @param {?} dataField
         * @param {?} propertyName
         * @param {?} propertyValue
         * @return {?}
         */
        jqxTreeGridComponent.prototype.setColumnProperty = /**
         * @param {?} dataField
         * @param {?} propertyName
         * @param {?} propertyValue
         * @return {?}
         */
            function (dataField, propertyName, propertyValue) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);
            };
        /**
         * @param {?} dataField
         * @return {?}
         */
        jqxTreeGridComponent.prototype.showColumn = /**
         * @param {?} dataField
         * @return {?}
         */
            function (dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('showColumn', dataField);
            };
        /**
         * @param {?} rowId
         * @return {?}
         */
        jqxTreeGridComponent.prototype.selectRow = /**
         * @param {?} rowId
         * @return {?}
         */
            function (rowId) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('selectRow', rowId);
            };
        /**
         * @param {?} rowId
         * @param {?} dataField
         * @param {?} cellValue
         * @return {?}
         */
        jqxTreeGridComponent.prototype.setCellValue = /**
         * @param {?} rowId
         * @param {?} dataField
         * @param {?} cellValue
         * @return {?}
         */
            function (rowId, dataField, cellValue) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('setCellValue', rowId, dataField, cellValue);
            };
        /**
         * @param {?} dataField
         * @param {?=} sortOrder
         * @return {?}
         */
        jqxTreeGridComponent.prototype.sortBy = /**
         * @param {?} dataField
         * @param {?=} sortOrder
         * @return {?}
         */
            function (dataField, sortOrder) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('sortBy', dataField, sortOrder);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.updating = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxTreeGrid('updating');
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.updateBoundData = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('updateBoundData');
            };
        /**
         * @param {?} rowId
         * @return {?}
         */
        jqxTreeGridComponent.prototype.unselectRow = /**
         * @param {?} rowId
         * @return {?}
         */
            function (rowId) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('unselectRow', rowId);
            };
        /**
         * @param {?} rowId
         * @return {?}
         */
        jqxTreeGridComponent.prototype.uncheckRow = /**
         * @param {?} rowId
         * @return {?}
         */
            function (rowId) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('uncheckRow', rowId);
            };
        /**
         * @param {?} rowId
         * @param {?} data
         * @return {?}
         */
        jqxTreeGridComponent.prototype.updateRow = /**
         * @param {?} rowId
         * @param {?} data
         * @return {?}
         */
            function (rowId, data) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('updateRow', rowId, data);
            };
        /**
         * @param {?} rowId
         * @return {?}
         */
        jqxTreeGridComponent.prototype.unlockRow = /**
         * @param {?} rowId
         * @return {?}
         */
            function (rowId) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxTreeGrid('unlockRow', rowId);
            };
        /**
         * @return {?}
         */
        jqxTreeGridComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
                this.host.on('cellBeginEdit', function (eventData) { _this.onCellBeginEdit.emit(eventData); });
                this.host.on('cellEndEdit', function (eventData) { _this.onCellEndEdit.emit(eventData); });
                this.host.on('cellValueChanged', function (eventData) { _this.onCellValueChanged.emit(eventData); });
                this.host.on('columnResized', function (eventData) { _this.onColumnResized.emit(eventData); });
                this.host.on('columnReordered', function (eventData) { _this.onColumnReordered.emit(eventData); });
                this.host.on('filter', function (eventData) { _this.onFilter.emit(eventData); });
                this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
                this.host.on('pageSizeChanged', function (eventData) { _this.onPageSizeChanged.emit(eventData); });
                this.host.on('rowClick', function (eventData) { _this.onRowClick.emit(eventData); });
                this.host.on('rowDoubleClick', function (eventData) { _this.onRowDoubleClick.emit(eventData); });
                this.host.on('rowSelect', function (eventData) { _this.onRowSelect.emit(eventData); });
                this.host.on('rowUnselect', function (eventData) { _this.onRowUnselect.emit(eventData); });
                this.host.on('rowBeginEdit', function (eventData) { _this.onRowBeginEdit.emit(eventData); });
                this.host.on('rowEndEdit', function (eventData) { _this.onRowEndEdit.emit(eventData); });
                this.host.on('rowExpand', function (eventData) { _this.onRowExpand.emit(eventData); });
                this.host.on('rowCollapse', function (eventData) { _this.onRowCollapse.emit(eventData); });
                this.host.on('rowCheck', function (eventData) { _this.onRowCheck.emit(eventData); });
                this.host.on('rowUncheck', function (eventData) { _this.onRowUncheck.emit(eventData); });
                this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
            };
        jqxTreeGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxTreeGrid',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxTreeGridComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxTreeGridComponent.propDecorators = {
            attrAltRows: [{ type: core.Input, args: ['altRows',] }],
            attrAutoRowHeight: [{ type: core.Input, args: ['autoRowHeight',] }],
            attrAggregatesHeight: [{ type: core.Input, args: ['aggregatesHeight',] }],
            attrAutoShowLoadElement: [{ type: core.Input, args: ['autoShowLoadElement',] }],
            attrCheckboxes: [{ type: core.Input, args: ['checkboxes',] }],
            attrColumnsHeight: [{ type: core.Input, args: ['columnsHeight',] }],
            attrColumns: [{ type: core.Input, args: ['columns',] }],
            attrColumnGroups: [{ type: core.Input, args: ['columnGroups',] }],
            attrColumnsResize: [{ type: core.Input, args: ['columnsResize',] }],
            attrColumnsReorder: [{ type: core.Input, args: ['columnsReorder',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEditable: [{ type: core.Input, args: ['editable',] }],
            attrEditSettings: [{ type: core.Input, args: ['editSettings',] }],
            attrExportSettings: [{ type: core.Input, args: ['exportSettings',] }],
            attrEnableHover: [{ type: core.Input, args: ['enableHover',] }],
            attrEnableBrowserSelection: [{ type: core.Input, args: ['enableBrowserSelection',] }],
            attrFilterable: [{ type: core.Input, args: ['filterable',] }],
            attrFilterHeight: [{ type: core.Input, args: ['filterHeight',] }],
            attrFilterMode: [{ type: core.Input, args: ['filterMode',] }],
            attrHierarchicalCheckboxes: [{ type: core.Input, args: ['hierarchicalCheckboxes',] }],
            attrIcons: [{ type: core.Input, args: ['icons',] }],
            attrIncrementalSearch: [{ type: core.Input, args: ['incrementalSearch',] }],
            attrLocalization: [{ type: core.Input, args: ['localization',] }],
            attrPagerHeight: [{ type: core.Input, args: ['pagerHeight',] }],
            attrPageSize: [{ type: core.Input, args: ['pageSize',] }],
            attrPageSizeOptions: [{ type: core.Input, args: ['pageSizeOptions',] }],
            attrPageable: [{ type: core.Input, args: ['pageable',] }],
            attrPagerPosition: [{ type: core.Input, args: ['pagerPosition',] }],
            attrPagerMode: [{ type: core.Input, args: ['pagerMode',] }],
            attrPageSizeMode: [{ type: core.Input, args: ['pageSizeMode',] }],
            attrPagerButtonsCount: [{ type: core.Input, args: ['pagerButtonsCount',] }],
            attrPagerRenderer: [{ type: core.Input, args: ['pagerRenderer',] }],
            attrReady: [{ type: core.Input, args: ['ready',] }],
            attrRowDetails: [{ type: core.Input, args: ['rowDetails',] }],
            attrRowDetailsRenderer: [{ type: core.Input, args: ['rowDetailsRenderer',] }],
            attrRenderToolbar: [{ type: core.Input, args: ['renderToolbar',] }],
            attrRenderStatusBar: [{ type: core.Input, args: ['renderStatusBar',] }],
            attrRendering: [{ type: core.Input, args: ['rendering',] }],
            attrRendered: [{ type: core.Input, args: ['rendered',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrSortable: [{ type: core.Input, args: ['sortable',] }],
            attrShowAggregates: [{ type: core.Input, args: ['showAggregates',] }],
            attrShowSubAggregates: [{ type: core.Input, args: ['showSubAggregates',] }],
            attrShowToolbar: [{ type: core.Input, args: ['showToolbar',] }],
            attrShowStatusbar: [{ type: core.Input, args: ['showStatusbar',] }],
            attrStatusBarHeight: [{ type: core.Input, args: ['statusBarHeight',] }],
            attrScrollBarSize: [{ type: core.Input, args: ['scrollBarSize',] }],
            attrSelectionMode: [{ type: core.Input, args: ['selectionMode',] }],
            attrShowHeader: [{ type: core.Input, args: ['showHeader',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrToolbarHeight: [{ type: core.Input, args: ['toolbarHeight',] }],
            attrVirtualModeCreateRecords: [{ type: core.Input, args: ['virtualModeCreateRecords',] }],
            attrVirtualModeRecordCreating: [{ type: core.Input, args: ['virtualModeRecordCreating',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onBindingComplete: [{ type: core.Output }],
            onCellBeginEdit: [{ type: core.Output }],
            onCellEndEdit: [{ type: core.Output }],
            onCellValueChanged: [{ type: core.Output }],
            onColumnResized: [{ type: core.Output }],
            onColumnReordered: [{ type: core.Output }],
            onFilter: [{ type: core.Output }],
            onPageChanged: [{ type: core.Output }],
            onPageSizeChanged: [{ type: core.Output }],
            onRowClick: [{ type: core.Output }],
            onRowDoubleClick: [{ type: core.Output }],
            onRowSelect: [{ type: core.Output }],
            onRowUnselect: [{ type: core.Output }],
            onRowBeginEdit: [{ type: core.Output }],
            onRowEndEdit: [{ type: core.Output }],
            onRowExpand: [{ type: core.Output }],
            onRowCollapse: [{ type: core.Output }],
            onRowCheck: [{ type: core.Output }],
            onRowUncheck: [{ type: core.Output }],
            onSort: [{ type: core.Output }]
        };
        return jqxTreeGridComponent;
    }()); //jqxTreeGridComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxTreeGridModule = /** @class */ (function () {
        function jqxTreeGridModule() {
        }
        jqxTreeGridModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxTreeGridComponent],
                        exports: [jqxTreeGridComponent]
                    },] }
        ];
        return jqxTreeGridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxTreeGridComponent = jqxTreeGridComponent;
    exports.jqxTreeGridModule = jqxTreeGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

