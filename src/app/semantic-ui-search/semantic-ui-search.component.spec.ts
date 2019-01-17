import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SemanticUiSearchComponent} from './semantic-ui-search.component';

describe('SemanticUiSearchComponent', () => {
  let component: SemanticUiSearchComponent;
  let fixture: ComponentFixture<SemanticUiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SemanticUiSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticUiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
