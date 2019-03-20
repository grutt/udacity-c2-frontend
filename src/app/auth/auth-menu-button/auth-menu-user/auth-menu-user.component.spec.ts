import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMenuUserPage } from './auth-menu-user.page';

describe('AuthMenuUserPage', () => {
  let component: AuthMenuUserPage;
  let fixture: ComponentFixture<AuthMenuUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMenuUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMenuUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
