import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsDeleteComponent } from './buildings-delete/buildings-delete.component';
import { BuildingsDetailComponent } from './buildings-detail/buildings-detail.component';
import { BuildingsPostComponent } from './buildings-post/buildings-post.component';
import { BuildingsUpdateComponent } from './buildings-update/buildings-update.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { KakaoMapComponent } from './kakao-map/kakao-map.component';


const routes: Routes = [
  { path: '', redirectTo: '/buildings/:pageNumber', pathMatch: 'full' },
  { path: 'detail/:id', component: BuildingsDetailComponent },
  { path: 'update/:id', component: BuildingsUpdateComponent },
  { path: 'delete/:id', component: BuildingsDeleteComponent},
  { path: 'post', component: BuildingsPostComponent},
  { path: 'buildings/:pageNumber', component: BuildingsComponent},
  { path: 'map/:id', component: KakaoMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
