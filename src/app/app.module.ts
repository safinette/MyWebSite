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
import { DetailsdrawingComponent } from './detailsdrawing/detailsdrawing.component';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawingsComponent,
    SelectcategoryComponent,
    DrawingComponent,
    MenuComponent,
    TabdrawingsComponent,
    HomeComponent,
    DetailsdrawingComponent,
    LoginComponent,
    PageComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DrawingService, CategoryService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
