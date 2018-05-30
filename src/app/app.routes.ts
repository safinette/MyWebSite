import { DrawingsComponent } from './drawings/drawings.component';
import { SelectcategoryComponent } from './selectcategory/selectcategory.component';
import { Routes } from '@angular/router';
import { TabdrawingsComponent } from './tabdrawings/tabdrawings.component';
import { HomeComponent } from './home/home.component';
import { DetailsdrawingComponent } from './detailsdrawing/detailsdrawing.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { PagesComponent } from './pages/pages.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'drawings', component: DrawingsComponent },
    { path: 'somedrawings', component: SelectcategoryComponent},
    { path: '' , component: LoginComponent},
    { path: 'pagination' , component: PageComponent},
    { path: 'pages' , component: PagesComponent},
    { path: 'list',
        children: [
            { path: '', component: TabdrawingsComponent },
            { path: ':drawingId', component: DetailsdrawingComponent}
        ]
    }
];
