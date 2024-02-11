import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


const MATERIAL_MODULE = [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULE
  ],
  exports: [
    MATERIAL_MODULE
  ]
})
export class MaterialModule { }
