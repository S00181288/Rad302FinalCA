import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFeatuerComponent } from './search-feature.component';

describe('SearchFeatuerComponent', () => {
  let component: SearchFeatuerComponent;
  let fixture: ComponentFixture<SearchFeatuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFeatuerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFeatuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
