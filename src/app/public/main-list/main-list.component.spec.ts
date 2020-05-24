import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListComponent } from './main-list.component';
import { DialogService } from '@core/services/dialog.service';
import { SharedModule } from '@shared/shared.module';

describe('MainListComponent', () => {
  let component: MainListComponent;
  let fixture: ComponentFixture<MainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListComponent ],
      providers: [DialogService],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
