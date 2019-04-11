/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class jqxMaskedInputComponent implements ControlValueAccessor, OnChanges {
    attrDisabled: boolean;
    attrMask: string;
    attrPromptChar: number | string;
    attrReadOnly: boolean;
    attrRtl: boolean;
    attrTheme: string;
    attrTextAlign: any;
    attrValue: number | string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxMaskedInput;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setOptions(options: any): void;
    disabled(arg?: boolean): any;
    height(arg?: string | number): any;
    mask(arg?: string): any;
    promptChar(arg?: number | string): any;
    readOnly(arg?: boolean): any;
    rtl(arg?: boolean): any;
    theme(arg?: string): any;
    textAlign(arg?: string): any;
    value(arg?: number | string): any;
    width(arg?: string | number): any;
    clear(): void;
    destroy(): void;
    focus(): void;
    val(value?: number | string): any;
    onChange: EventEmitter<{}>;
    onValueChanged: EventEmitter<{}>;
    __wireEvents__(): void;
}
