import { Injectable } from '@angular/core';
import { ApiService } from '@core/http/api.service';
import { Observable } from 'rxjs';
import { User } from '@core/models/user.model';
import { toCamelCase } from '@core/utils/rx-ops';

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

}
