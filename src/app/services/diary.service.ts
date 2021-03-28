import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Diary } from './../models/diary.d';

const currentuserId = 1; //hard coded as by default userids are taken from tokens

@Injectable()
export class DiaryService {
  constructor(private http: HttpClient) {}

  getDiaries(): Observable<Diary[]> {
    return this.http
      .get<Diary[]>(`http://localhost:7001/api/diary/list/${currentuserId}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  searchDiaries(content: string = ''): Observable<Diary[]> {
    return this.http
      .get<Diary[]>(`http://localhost:7001/api/diary/search/${currentuserId}/${content}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  getDiary(entryId: number): Observable<Diary> {
    return this.http
      .get<Diary>(`http://localhost:7001/api/diary/${entryId}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  postDiary(diary: Diary): Observable<Diary> {
    return this.http
      .post<Diary>(`http://localhost:7001/api/diary/add-entry`, {...diary, 
        userId : currentuserId
      })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  deleteDiary(id: number): Observable<Diary> {
    return this.http
      .delete<Diary>(`http://localhost:7001/api/diary/delete-entry/${id}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  shareDiary(entryId, userId) {
    return this.http
      .post(`http://localhost:7001/api/diary/share-entry/${entryId}/${userId}`, {})
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
