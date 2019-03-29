import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as fromActions from '../actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  @Effect()
  loadUsers$ = this
                .actions$
                .pipe(
                  ofType(fromActions.LOAD_USERS),
                  switchMap(() => {
                    return this.userService.getUsers()
                                .pipe(
                                  map(users => new fromActions.LoadUsersSuccess(users)),
                                  catchError(error => of(new fromActions.LoadUsersFail(error)))
                                );
                  })
                );
}
