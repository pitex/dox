import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
];

export const routingModule = RouterModule.forRoot(routes);