import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../../models/user.d';
import { DiaryService } from './../../../services/diary.service';

@Component({
  selector: 'app-diary-share',
  templateUrl: './diary-share.component.html',
  styleUrls: ['./diary-share.component.scss'],
})
export class DiaryShareComponent {
  @Input() entryId: number;
  users: User[] = [
    {
      id: 1,
      name: 'Mike',
    },
    {
      id: 2,
      name: 'Mae',
    },
    {
      id: 3,
      name: 'Mark',
    },
  ];
  selectedValue: number = null;

  constructor(private diaryService: DiaryService) {}

  onShareEntry() {
    this.diaryService
      .shareDiary(this.entryId, this.selectedValue)
      .subscribe(() => {
        this.selectedValue = null;
      });
  }
}
