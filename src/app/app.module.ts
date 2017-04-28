import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import * as AppComponents from './components';
import * as AppPages from './pages';

export function toArray(obj) {
    return Object.keys(obj).map((k) => obj[k]);
}

@NgModule({
  declarations: [
    AppComponents.Buttons,
    AppComponents.Forms,
    AppComponents.SiteFooter,
    AppComponents.SiteHeader,
    AppComponents.categoriesBar,
    AppComponents.filtersBar,
    AppComponents.progressBar,
    AppComponents.productCard,
    AppComponents.checkout,
    AppComponents.sideCart,
    AppPages.IndexPage,
    AppPages.ProductPage,
    AppPages.CheckoutMain,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'index', component: AppPages.IndexPage },
      { path: 'product', component: AppPages.ProductPage },
      { path: 'checkout', component: AppPages.CheckoutMain },
      // { path: 'content', component: ContentDetailComponent },
      { path: '', redirectTo: 'index', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
