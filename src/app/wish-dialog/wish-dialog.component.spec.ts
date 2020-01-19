import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishDialogComponent } from './wish-dialog.component';

describe('WishDialogComponent', () => {
  let component: WishDialogComponent;
  let fixture: ComponentFixture<WishDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
