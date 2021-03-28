import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Diary } from './../models/diary.d';

@Injectable()
export class DiaryService {
  constructor(private http: HttpClient) {}

  getDiaries(): Observable<Diary[]> {
    return this.http
      .get<Diary[]>(`http://localhost:3000/diary`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  searchDiaries(content: string = ''): Observable<Diary[]> {
    return this.http
      .get<Diary[]>(`http://localhost:3000/diary`, {
        params: content
          ? {
              content_like: content,
            }
          : {},
      })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  getDiary(entryId: number): Observable<Diary> {
    return this.http
      .get<Diary>(`http://localhost:3000/diary/${entryId}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  postDiary(diary: Diary): Observable<Diary> {
    return this.http
      .post<Diary>(`http://localhost:3000/diary`, diary)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  deleteDiary(id: number): Observable<Diary> {
    return this.http
      .delete<Diary>(`http://localhost:3000/diary/${id}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  shareDiary(entryId, userId) {
    return this.http
      .post(`http://localhost:3000/diary/${entryId}/${userId}`, {})
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
