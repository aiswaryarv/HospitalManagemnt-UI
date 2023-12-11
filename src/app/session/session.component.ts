import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Services } from '../shared.service';
import '@angular/localize/init';
import { RowClassArgs } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-session',
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            #my-grid tr.gold {
                background-color: #ffba80;
            }

            #my-grid tr.green {
                background-color: #b2f699;
            }
        `,
    ],
    template: `
        <kendo-grid id="my-grid" [data]="gridData" [rowClass]="rowCallback">
            <kendo-grid-column field="ProductName" title="Product Name"> </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Unit Price"> </kendo-grid-column>
        </kendo-grid>
    `,
})
export class SessionComponent implements OnInit {
    model: any = {
        id: 0
    }
    public gridData: any[] = [
        { ProductName: 'Product 1',  UnitPrice: 50 },
        { ProductName: 'Product 2',  UnitPrice: 75 },
        { ProductName: 'Product 3',  UnitPrice: 0 },
        // Add more data as needed
      ];
    ngOnInit(): void {

    }
    public getBackgroundColor(price: number): string {
        // Your logic to determine the background color based on the price
        // For example, setting a background color based on a price range
        if (price < 50) {
          return 'lightgreen';
        } else if (price >= 50 && price < 100) {
          return 'lightgreen';
        } else {
          return 'lightcoral';
        }
      }
      public rowCallback = (context: RowClassArgs) => {
        debugger
        if (context.dataItem.UnitPrice <= 0) {
            return { gold: true };
        } else {
            return { green: true };
        }
    };
}