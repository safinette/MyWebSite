import { DrawingsComponent } from './drawings/drawings.component';
import { SelectcategoryComponent } from './selectcategory/selectcategory.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'drawings', component: DrawingsComponent },
    { path: 'somedrawings', component: SelectcategoryComponent}
];
