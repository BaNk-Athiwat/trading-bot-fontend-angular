/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SettingApiKeyExchangeComponent } from './setting-api-key-exchange.component';

describe('SettingApiKeyExchangeComponent', () => {
  let component: SettingApiKeyExchangeComponent;
  let fixture: ComponentFixture<SettingApiKeyExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingApiKeyExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingApiKeyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
