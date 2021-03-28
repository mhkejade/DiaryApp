import { Diary } from './../../../models/diary.d';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diary-item',
  templateUrl: './diary-item.component.html',
  styleUrls: ['./diary-item.component.scss'],
})
export class DiaryItemComponent {
  @Input() diary: Diary;
  @Input() isSummary?: boolean;
  @Output() onSelectItem = new EventEmitter<Diary>();
  @Output() onDeleteItem = new EventEmitter<Diary>();

  onSelect(diary: Diary) {
    this.onSelectItem.emit(diary);
  }

  onDelete($event) {
    $event.stopPropagation();
    this.onDeleteItem.emit(this.diary);
  }
}
