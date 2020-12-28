import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFormStoreComponent } from './get-form-store.component';

describe('GetFormStoreComponent', () => {
  let component: GetFormStoreComponent;
  let fixture: ComponentFixture<GetFormStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFormStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFormStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
