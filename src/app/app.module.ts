import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotosComponent } from './components/photos/photos.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CacheInterceptor } from './interceptors/cache-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideLayoutComponent } from './components/layout/side-layout/side-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'app-about',
        pathMatch: 'full'

      },
      {
        path: 'app-about',
        component: AboutComponent
      }
    ],
  },
  {
    path: '',
    component: SideLayoutComponent,
    children: [
      {
        path: 'app-photos',
        component: PhotosComponent
      }
    ],
  }
]
    
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    PhotosComponent,
    SidebarComponent,
    AboutComponent,
    SideLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
