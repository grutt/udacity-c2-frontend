import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUploadButtonPage } from './feed-upload-button.page';

describe('FeedUploadButtonPage', () => {
  let component: FeedUploadButtonPage;
  let fixture: ComponentFixture<FeedUploadButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedUploadButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedUploadButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
