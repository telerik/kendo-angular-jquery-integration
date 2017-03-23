import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'test-date-picker',
    template: `
        <h1 #h1Element>
          {{ title | date }}
        </h1>
        <p>Change the date via the Kendo UI for jQuery DatePicker</p>
        <input #datePicker />
    `
})
export class TestDatePickerComponent implements AfterViewInit, OnDestroy {
    @ViewChild('h1Element') el: ElementRef;
    @ViewChild('datePicker') datePickerEl: ElementRef;

    title: any = new Date();

    constructor(private hostEl: ElementRef) {}

    ngAfterViewInit() {
        kendo.jQuery(this.el.nativeElement).css('color', 'red');

        kendo.jQuery(this.datePickerEl.nativeElement).kendoDatePicker({
            change: (e) => {
                this.title = e.sender.value();
            }
        });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }
}
