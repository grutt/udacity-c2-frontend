import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegisterPage } from './auth-register.page';

describe('AuthRegisterPage', () => {
  let component: AuthRegisterPage;
  let fixture: ComponentFixture<AuthRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
