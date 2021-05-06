import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationsComponentComponent } from './nominations-component.component';

describe('NominationsComponentComponent', () => {
  let component: NominationsComponentComponent;
  let fixture: ComponentFixture<NominationsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominationsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
