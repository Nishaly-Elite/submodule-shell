import { NgModule } from '@angular/core';
import { CcoComponent } from './cco.component';
import { ProfileModule } from './profile/profile.module';
import { CommonModule } from '@angular/common';
import { CcoRoutingModule } from './cco-routing.module';



@NgModule({
  declarations: [
    CcoComponent
  ],
  imports: [
    CommonModule,
    CcoRoutingModule,
    ProfileModule
  ],
  exports: [
    CcoComponent
  ]
})
export class CcoModule { }
