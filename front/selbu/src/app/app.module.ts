import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BuildingsDetailComponent } from './buildings-detail/buildings-detail.component';
import { KakaoMapComponent } from './kakao-map/kakao-map.component';
import { BuildingsUpdateComponent } from './buildings-update/buildings-update.component';
import { BuildingsDeleteComponent } from './buildings-delete/buildings-delete.component';
import { BuildingsPostComponent } from './buildings-post/buildings-post.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    BuildingsDetailComponent,
    KakaoMapComponent,
    BuildingsUpdateComponent,
    BuildingsDeleteComponent,
    BuildingsPostComponent,
    SearchComponent,
    NavbarComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
