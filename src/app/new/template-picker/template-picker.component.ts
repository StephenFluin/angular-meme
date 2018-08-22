import { Component, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Template, TemplateService } from '../../template.service';


@Component({
  selector: 'app-template-picker',
  templateUrl: './template-picker.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TemplatePickerComponent),
    multi: true
  }]
})
export class TemplatePickerComponent implements ControlValueAccessor  {
    selectedTemplate: Template;

    onChanged = (t: Template) => {};
    onTouched = () => {};

    constructor(public ts: TemplateService) {
    }

    writeValue(t: Template): void {
        this.selectedTemplate = t;
        this.onChanged(t);
    }
    registerOnChange(fn: (t: Template) => void): void {
        this.onChanged = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }




}
