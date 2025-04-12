/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SettingApiKeyFormUpdateComponent } from './setting-api-key-form-update.component';

describe('SettingApiKeyFormUpdateComponent', () => {
  let component: SettingApiKeyFormUpdateComponent;
  let fixture: ComponentFixture<SettingApiKeyFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingApiKeyFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingApiKeyFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
