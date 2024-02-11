import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { MaterialModule } from '../shared/material-ui/material/material.module';
import { TopBarComponent } from './top-bar/top-bar.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ItemsComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule
  ]
})
export class ComponentsModule { }
