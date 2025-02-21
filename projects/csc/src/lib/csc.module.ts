import { NgModule } from '@angular/core';
import { CscComponent } from './csc.component';
import { WorkflowModule } from './workflow/workflow.module';



@NgModule({
  declarations: [
    CscComponent
  ],
  imports: [
    WorkflowModule
  ],
  exports: [
    CscComponent
  ]
})
export class CscModule { }
