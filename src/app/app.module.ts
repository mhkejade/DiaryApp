import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { DiaryFormComponent } from './components/diary/diary-form/diary-form.component';
import { DiaryListComponent } from './components/diary/diary-list/diary-list.component';
import { DiaryItemComponent } from './components/diary/diary-item/diary-item.component';
import { DiaryShareComponent } from './components/diary/diary-share/diary-share.component';

import { DiaryService } from './services/diary.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DiaryFormComponent,
    DiaryListComponent,
    DiaryItemComponent,
    DiaryShareComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzSpaceModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzListModule,
    NzLayoutModule,
    NzMenuModule,
    NzDividerModule,
    NzSelectModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, DiaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
