import { Observable } from 'rxjs';
import { Diary } from './../../../models/diary.d';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiaryService } from './../../../services/diary.service';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.scss'],
})
export class DiaryListComponent {
  @Input() diaries: Diary;
  @Output() onSelectDiary = new EventEmitter<Diary>();
  @Output() onDeleteDiary = new EventEmitter<Diary>();

  onSelect(diary: Diary) {
    this.onSelectDiary.emit(diary);
  }

  onDelete(diary: Diary) {
    this.onDeleteDiary.emit(diary);
  }
}
