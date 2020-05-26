import { Injectable } from '@angular/core';

import { User } from '@core/models/user.model';
import { ApiService } from '@core/services/api.service';
import { toCamelCase } from '@core/utils/rx-ops';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serviceEndpoint = 'users';

  constructor(private api: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.api.get<User[]>(`${this.serviceEndpoint}`).pipe(toCamelCase());
  }

  saveUser(user: User):Observable<User>{
    return this.api.post<User>(`${this.serviceEndpoint}`, user ).pipe(toCamelCase());
  }

  getUserCredits(userId:number): Observable<User> {
    return this.api.get<User>(`${this.serviceEndpoint}/${userId}?_embed=credits`).pipe(toCamelCase());
  }

}
