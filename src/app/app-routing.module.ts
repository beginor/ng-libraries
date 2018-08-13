import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {
    AnimationsComponent
} from './components/animations/animations.component';
import { SceneComponent } from './components/scene/scene.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'animations', component: AnimationsComponent },
    { path: 'scene', component: SceneComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
