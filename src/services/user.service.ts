import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  list() : Promise<any>{
    return firstValueFrom(this.http.get('https://jsonplaceholder.typicode.com/users'));
  }
}
