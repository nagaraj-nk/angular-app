import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    SearchPageComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
