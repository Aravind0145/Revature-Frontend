import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadphotoComponent } from './uploadphoto.component';

describe('UploadphotoComponent', () => {
  let component: UploadphotoComponent;
  let fixture: ComponentFixture<UploadphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadphotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
