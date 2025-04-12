/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SettingApiKeyFormComponent } from './setting-api-key-form-new.component';

describe('SettingApiKeyFormComponent', () => {
    let component: SettingApiKeyFormComponent;
    let fixture: ComponentFixture<SettingApiKeyFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SettingApiKeyFormComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingApiKeyFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
