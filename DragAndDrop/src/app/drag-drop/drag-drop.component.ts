import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
items= ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

onDrop(event: CdkDragDrop<string[], string[], any>): void {
  if (event.previousIndex !== undefined && event.currentIndex !== undefined) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
}
