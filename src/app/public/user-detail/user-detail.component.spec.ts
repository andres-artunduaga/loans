import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ENVIRONMENT } from '@core/constants/tokens';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogService } from '@core/services/dialog.service';
import { SharedModule } from '@shared/shared.module';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      providers: [
        DialogService,
        { provide: ENVIRONMENT, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
          },
        },
      ],
      imports: [SharedModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
