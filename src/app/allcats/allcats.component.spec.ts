import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcatsComponent } from './allcats.component';

describe('AllcatsComponent', () => {
  let component: AllcatsComponent;
  let fixture: ComponentFixture<AllcatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
