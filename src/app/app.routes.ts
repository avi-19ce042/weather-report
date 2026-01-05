import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CityForcastComponent } from './pages/city-forcast/city-forcast.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'city-forcast/:city', loadComponent: () =>
      import('./pages/city-forcast/city-forcast.component')
        .then(m => m.CityForcastComponent)
    }
];
