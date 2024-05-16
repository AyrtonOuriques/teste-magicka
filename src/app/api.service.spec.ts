import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let Http: HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    });
    service = TestBed.inject(ApiService);
    Http = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get sets', () => {
    service.getSets('','Amonkhet').subscribe(data => {
        expect(data).toBeTruthy();
        console.log('sucess');
      });

    const req = Http.expectOne('https://api.magicthegathering.io/v1/sets?name=|Amonkhet')
    expect(req.request.method).toBe('GET');
  });
  it('should get boosters', () => {
    service.getBoosters('2XM').subscribe(data => {
        expect(data).toBeTruthy();
        console.log('sucess');
      });

    const req = Http.expectOne('https://api.magicthegathering.io/v1/sets/2XM/booster')
    expect(req.request.method).toBe('GET');
  });
});
