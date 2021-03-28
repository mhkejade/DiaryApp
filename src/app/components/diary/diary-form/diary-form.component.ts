import { DiaryService } from './../../../services/diary.service';
import { Diary } from './../../../models/diary.d';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.scss'],
})
export class DiaryFormComponent {
  @Output() reloadList = new EventEmitter();
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', [Validators.required]),
  });

  constructor(private diaryService: DiaryService) {}

  onSubmit() {
    const {
      value: { title, content },
    } = this.form;
    const diary: Diary = {
      entryId: 0,
      title,
      content,
    };
    this.diaryService.postDiary(diary).subscribe(() => {
      this.form.reset();
      this.reloadList.emit();
    });
  }
}
