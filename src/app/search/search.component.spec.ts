import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    const apiServiceMock = jasmine.createSpyObj<ApiService>(['getSets']);

    apiServiceMock.getSets.and.callFake(function () {
      return of({
      });
    });

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent],
      providers: [
        {
          provide: ApiService,
          useValue: apiServiceMock
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
