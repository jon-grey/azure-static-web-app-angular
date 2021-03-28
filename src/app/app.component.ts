import { AppService } from './app.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}. Payload from api/date: "{{payload}}". </div>`,
})
export class AppComponent implements OnInit, OnDestroy {
  value = 'World';

  constructor(private appService: AppService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  payload: any = {};
  counter = 0;

  ngOnInit() {
    this.getTasks();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getTasks() {
    this.appService.getDate()
      .pipe(takeUntil(this.destroy$))
      .subscribe(payload => this.payload = JSON.stringify(payload));
  }



}
