import { Observable } from 'rxjs';
import { DiaryService } from './services/diary.service';
import { Diary } from './models/diary.d';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedDiaryId: number | null = null;
  searchQuery: string = '';
  $diaries: Observable<Diary[]>;
  selectedDiary: Diary;

  constructor(private diaryService: DiaryService) {}

  ngOnInit() {
    this.$diaries =  this.diaryService.getDiaries();
    // this.diaryService.getDiaries().subscribe(
    //   (data) => {
    //     debugger
    //   }
    // ) ;
  }

  onCreateNewEntry() {
    this.selectedDiaryId = 0;
  }

  onSelectDiary(diary: Diary) {
    this.selectedDiaryId = diary.entryId;
    this.selectedDiary = diary;//this.diaryService.getDiary(this.selectedDiaryId);
  }

  onDeleteDiary(diary: Diary) {
    this.diaryService.deleteDiary(diary.entryId).subscribe(() => {
      this.$diaries = this.diaryService.getDiaries();
    });
  }

  onSearchDiary() {
    this.$diaries = this.diaryService.searchDiaries(this.searchQuery);
  }
}
