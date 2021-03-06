/// <reference path="../jqwidgets.d.ts" />
import { AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxTreeGridComponent implements OnChanges, AfterViewInit, AfterViewChecked {
    attrAltRows: boolean;
    attrAutoRowHeight: boolean;
    attrAggregatesHeight: number;
    attrAutoShowLoadElement: boolean;
    attrCheckboxes: boolean;
    attrColumnsHeight: number;
    attrColumns: Array<any>;
    attrColumnGroups: Array<any>;
    attrColumnsResize: boolean;
    attrColumnsReorder: boolean;
    attrDisabled: boolean;
    attrEditable: boolean;
    attrEditSettings: jqwidgets.TreeGridEditSettings;
    attrExportSettings: jqwidgets.TreeGridExportSettings;
    attrEnableHover: boolean;
    attrEnableBrowserSelection: boolean;
    attrFilterable: boolean;
    attrFilterHeight: number;
    attrFilterMode: any;
    attrHierarchicalCheckboxes: boolean;
    attrIcons: boolean | Function;
    attrIncrementalSearch: boolean;
    attrLocalization: any;
    attrPagerHeight: number;
    attrPageSize: number;
    attrPageSizeOptions: Array<number | string>;
    attrPageable: boolean;
    attrPagerPosition: any;
    attrPagerMode: any;
    attrPageSizeMode: any;
    attrPagerButtonsCount: number;
    attrPagerRenderer: () => any;
    attrReady: () => void;
    attrRowDetails: boolean;
    attrRowDetailsRenderer: (key: number, dataRow: number) => any;
    attrRenderToolbar: (toolBar?: any) => void;
    attrRenderStatusBar: (statusBar?: any) => void;
    attrRendering: () => void;
    attrRendered: () => void;
    attrRtl: boolean;
    attrSource: any;
    attrSortable: boolean;
    attrShowAggregates: boolean;
    attrShowSubAggregates: boolean;
    attrShowToolbar: boolean;
    attrShowStatusbar: boolean;
    attrStatusBarHeight: number;
    attrScrollBarSize: number;
    attrSelectionMode: any;
    attrShowHeader: boolean;
    attrTheme: string;
    attrToolbarHeight: number;
    attrVirtualModeCreateRecords: (expandedRecord?: any, done?: any) => void;
    attrVirtualModeRecordCreating: (record?: any) => any;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxTreeGrid;
    content: String;
    container: HTMLDivElement;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    altRows(arg?: boolean): any;
    autoRowHeight(arg?: boolean): any;
    aggregatesHeight(arg?: number): any;
    autoShowLoadElement(arg?: boolean): any;
    checkboxes(arg?: boolean): any;
    columnsHeight(arg?: number): any;
    columns(arg?: Array<any>): any;
    columnGroups(arg?: Array<any>): any;
    columnsResize(arg?: boolean): any;
    columnsReorder(arg?: boolean): any;
    disabled(arg?: boolean): any;
    editable(arg?: boolean): any;
    editSettings(arg?: jqwidgets.TreeGridEditSettings): any;
    exportSettings(arg?: jqwidgets.TreeGridExportSettings): any;
    enableHover(arg?: boolean): any;
    enableBrowserSelection(arg?: boolean): any;
    filterable(arg?: boolean): any;
    filterHeight(arg?: number): any;
    filterMode(arg?: string): any;
    height(arg?: number | string): any;
    hierarchicalCheckboxes(arg?: boolean): any;
    icons(arg?: undefined): any;
    incrementalSearch(arg?: boolean): any;
    localization(arg?: any): any;
    pagerHeight(arg?: number): any;
    pageSize(arg?: number): any;
    pageSizeOptions(arg?: Array<number | string>): any;
    pageable(arg?: boolean): any;
    pagerPosition(arg?: string): any;
    pagerMode(arg?: string): any;
    pageSizeMode(arg?: string): any;
    pagerButtonsCount(arg?: number): any;
    pagerRenderer(arg?: () => any): any;
    ready(arg?: () => void): any;
    rowDetails(arg?: boolean): any;
    rowDetailsRenderer(arg?: (key: number, dataRow: number) => any): any;
    renderToolbar(arg?: (toolBar?: any) => void): any;
    renderStatusBar(arg?: (statusBar?: any) => void): any;
    rendering(arg?: () => void): any;
    rendered(arg?: () => void): any;
    rtl(arg?: boolean): any;
    source(arg?: any): any;
    sortable(arg?: boolean): any;
    showAggregates(arg?: boolean): any;
    showSubAggregates(arg?: boolean): any;
    showToolbar(arg?: boolean): any;
    showStatusbar(arg?: boolean): any;
    statusBarHeight(arg?: number): any;
    scrollBarSize(arg?: number): any;
    selectionMode(arg?: string): any;
    showHeader(arg?: boolean): any;
    theme(arg?: string): any;
    toolbarHeight(arg?: number): any;
    width(arg?: string | number): any;
    virtualModeCreateRecords(arg?: (expandedRecord?: any, done?: any) => void): any;
    virtualModeRecordCreating(arg?: (record?: any) => any): any;
    addRow(rowKey: string, rowData: any, rowPosition: string, parent?: string): void;
    addFilter(dataField: string, filerGroup: any): void;
    applyFilters(): void;
    beginUpdate(): void;
    beginRowEdit(rowKey: string): void;
    beginCellEdit(rowKey: string, dataField: string): void;
    clearSelection(): void;
    clearFilters(): void;
    clear(): void;
    checkRow(rowKey: string): void;
    collapseRow(rowKey: string): void;
    collapseAll(): void;
    destroy(): void;
    deleteRow(rowKey: Array<string> | string): void;
    expandRow(rowKey: Array<number | string> | string | number): void;
    expandAll(): void;
    endUpdate(): void;
    ensureRowVisible(rowKey: string): void;
    endRowEdit(rowKey: string, cancelChanges?: boolean): void;
    endCellEdit(rowKey: string, dataField: string, cancelChanges?: boolean): void;
    exportData(exportDataType: any): any;
    focus(): void;
    getColumnProperty(dataField: string, propertyName: string): any;
    goToPage(pageIndex: number): void;
    goToPrevPage(): void;
    goToNextPage(): void;
    getSelection(): Array<any>;
    getKey(row: any): string;
    getRow(rowKey: string): jqwidgets.TreeGridGetRow;
    getRows(): Array<jqwidgets.TreeGridGetRow>;
    getCheckedRows(): Array<jqwidgets.TreeGridGetRow>;
    getView(): Array<jqwidgets.TreeGridGetRow>;
    getCellValue(rowKey: string, dataField: string): any;
    hideColumn(dataField: string): void;
    isBindingCompleted(): boolean;
    lockRow(rowKey: string | number | Array<number | string>): void;
    refresh(): void;
    render(): void;
    removeFilter(dataField: string): void;
    scrollOffset(top?: number, left?: number): jqwidgets.TreeGridScrollOffset;
    setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void;
    showColumn(dataField: string): void;
    selectRow(rowId: string | number | Array<number | string>): void;
    setCellValue(rowId: string, dataField: string, cellValue: any): void;
    sortBy(dataField: number | string, sortOrder?: string): void;
    updating(): boolean;
    updateBoundData(): void;
    unselectRow(rowId: string | number | Array<number | string>): void;
    uncheckRow(rowId: string): void;
    updateRow(rowId: number | string, data: any): void;
    unlockRow(rowId: string | number | Array<number | string>): void;
    onBindingComplete: EventEmitter<{}>;
    onCellBeginEdit: EventEmitter<{}>;
    onCellEndEdit: EventEmitter<{}>;
    onCellValueChanged: EventEmitter<{}>;
    onColumnResized: EventEmitter<{}>;
    onColumnReordered: EventEmitter<{}>;
    onFilter: EventEmitter<{}>;
    onPageChanged: EventEmitter<{}>;
    onPageSizeChanged: EventEmitter<{}>;
    onRowClick: EventEmitter<{}>;
    onRowDoubleClick: EventEmitter<{}>;
    onRowSelect: EventEmitter<{}>;
    onRowUnselect: EventEmitter<{}>;
    onRowBeginEdit: EventEmitter<{}>;
    onRowEndEdit: EventEmitter<{}>;
    onRowExpand: EventEmitter<{}>;
    onRowCollapse: EventEmitter<{}>;
    onRowCheck: EventEmitter<{}>;
    onRowUncheck: EventEmitter<{}>;
    onSort: EventEmitter<{}>;
    __wireEvents__(): void;
}
