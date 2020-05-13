import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';


const Components = [
  FormComponent
]

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Components
  ]
})
export class ComponentsModule { }
