import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { HttpClientModule } from '@angular/common/http';
import { DrawingService } from './services/drawing.service';
import { SelectcategoryComponent } from './selectcategory/selectcategory.component';
import { CategoryService } from './services/category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrawingComponent } from './drawing/drawing.component';
import { MenuComponent } from './menu/menu.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { TabdrawingsComponent } from './tabdrawings/tabdrawings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawingsComponent,
    SelectcategoryComponent,
    DrawingComponent,
    MenuComponent,
    TabdrawingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DrawingService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
