import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxRatingComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxrating';

@NgModule({
    declarations: [AppComponent, jqxRatingComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        