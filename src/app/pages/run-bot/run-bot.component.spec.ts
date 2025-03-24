/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RunBotComponent } from './run-bot.component';

describe('RunBotComponent', () => {
  let component: RunBotComponent;
  let fixture: ComponentFixture<RunBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
