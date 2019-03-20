import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormPage } from './post-form.page';

describe('PostFormPage', () => {
  let component: PostFormPage;
  let fixture: ComponentFixture<PostFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
