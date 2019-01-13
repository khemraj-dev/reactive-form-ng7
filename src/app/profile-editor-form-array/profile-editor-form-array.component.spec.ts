import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorFormArrayComponent } from './profile-editor-form-array.component';

describe('ProfileEditorFormArrayComponent', () => {
  let component: ProfileEditorFormArrayComponent;
  let fixture: ComponentFixture<ProfileEditorFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
