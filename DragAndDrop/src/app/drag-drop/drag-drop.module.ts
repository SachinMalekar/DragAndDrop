import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent} from './drag-drop.component' ;
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DragDropComponent],
  imports: [
    CommonModule
  ],
  exports:[DragDropComponent]
})
export class DragDrop1Module { }
