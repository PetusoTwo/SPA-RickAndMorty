import { RouterLink ,Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HerosComponent } from './Components/heros/heros.component';
import { HeroComponent } from './Components/hero/hero.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'personajes', component: HerosComponent},
    { path: 'personaje/:id', component: HeroComponent },
    { path: 'buscar/:termino', component: BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
