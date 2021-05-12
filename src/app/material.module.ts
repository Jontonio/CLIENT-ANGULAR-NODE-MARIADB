import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


const myModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, ...myModules ],
  exports:[ ...myModules]
})

export class MaterialModule { }
