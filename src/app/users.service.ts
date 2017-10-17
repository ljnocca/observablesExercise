import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UsersService {

  userActivated = new Subject(); // an observable and observer at the same time

  constructor() { }

}
