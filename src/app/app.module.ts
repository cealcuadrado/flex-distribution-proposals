import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OptionOneComponent } from './layout/option-one/option-one.component';
import { OptionTwoComponent } from './layout/option-two/option-two.component';
import { OptionThreeComponent } from './layout/option-three/option-three.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OptionOneComponent,
    OptionTwoComponent,
    OptionThreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPrettyCheckboxModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
