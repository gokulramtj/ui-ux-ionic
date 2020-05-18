import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { IonicModule } from '@ionic/angular';
import { HomeContentComponent } from './home-content/home-content.component';


const Components = [
  FormComponent,
  HomeContentComponent
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
