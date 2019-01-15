import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FiledetailComponent} from './filedetail.component';

describe('FiledetailComponent', () => {
  let component: FiledetailComponent;
  let fixture: ComponentFixture<FiledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiledetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
