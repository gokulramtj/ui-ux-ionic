import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { IonicModule } from '@ionic/angular';


const Components = [
  FormComponent
]

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    Components
  ]
})
export class ComponentsModule { }
