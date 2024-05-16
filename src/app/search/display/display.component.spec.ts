import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { ApiService } from '../../api.service';
import { of } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async () => {
    const apiServiceMock = jasmine.createSpyObj<ApiService>(['getBoosters']);

    apiServiceMock.getBoosters.and.callFake(function () {
      return of({
      });
    });


    await TestBed.configureTestingModule({
      imports: [NgxPaginationModule],
      declarations: [DisplayComponent],
      providers: [
        {
          provide: ApiService,
          useValue: apiServiceMock
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
