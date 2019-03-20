import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor() { }

  login(email: string, password: string): boolean {
    // TODO implement
    throw new Error('not implemented');
  }

  logout(): boolean {
    // TODO implement
    throw new Error('not implemented');
  }

  register(user: User, password: string): boolean {
    // TODO implement
    throw new Error('not implemented');
  }
}
