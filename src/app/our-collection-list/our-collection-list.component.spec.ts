import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCollectionListComponent } from './our-collection-list.component';

describe('OurCollectionListComponent', () => {
  let component: OurCollectionListComponent;
  let fixture: ComponentFixture<OurCollectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCollectionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurCollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
