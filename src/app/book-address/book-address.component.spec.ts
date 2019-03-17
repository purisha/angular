import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddressComponent } from './book-address.component';

describe('BookAddressComponent', () => {
  let component: BookAddressComponent;
  let fixture: ComponentFixture<BookAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
