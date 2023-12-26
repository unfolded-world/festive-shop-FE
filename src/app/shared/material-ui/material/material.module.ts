import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from "@angular/material/icon";


const MATERIAL_MODULE = [
  MatIconModule
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
