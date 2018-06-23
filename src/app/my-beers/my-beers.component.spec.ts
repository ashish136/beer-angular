import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBeersComponent } from './my-beers.component';

describe('MyBeersComponent', () => {
  let component: MyBeersComponent;
  let fixture: ComponentFixture<MyBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
