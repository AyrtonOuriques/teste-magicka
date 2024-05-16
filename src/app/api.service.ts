import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {

    private apiUrl = 'https://api.magicthegathering.io/v1/';
    
    constructor(private http: HttpClient) { }

    getCards(setName: string | undefined, cardBlock: string): Observable<any> {
        console.log(this.apiUrl + 'sets?name=' + setName + "|" + cardBlock)
        return this.http.get<any>(this.apiUrl + 'sets?name=' + setName + "|" + cardBlock);
    }

    
    getBoosters(code: string): Observable<any> {
        console.log(this.apiUrl + 'sets/' + code + "/booster")
        return this.http.get<any>(this.apiUrl + 'sets/' + code + "/booster");
    }
}