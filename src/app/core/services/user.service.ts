import { Injectable } from '@angular/core';
import { ApiService } from '@core/http/api.service';
import { Observable } from 'rxjs';
import { User } from '@core/models/user.model';
import { toCamelCase, toSnakeCase } from '@core/utils/object-transformers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serviceEndpoint = '/users';

  constructor(private api: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.api.get<User[]>(`${this.serviceEndpoint}/users`).pipe(map(data => toCamelCase(data)));
  }

  saveUser(user: User) {
    return this.api.post<User>(`${this.serviceEndpoint}/users`, toSnakeCase(user) ).pipe(map(data => toCamelCase(data)));
  }

}
