import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as fromActions from '../actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  @Effect()
  loadUser$ = this
                .actions$
                .pipe(
                  ofType(fromActions.LOAD_USER),
                  switchMap((action: fromActions.LoadUser) => {
                    return this.userService.getUser(action.id)
                                .pipe(
                                  map(user => new fromActions.LoadUserSuccess(user)),
                                  catchError(error => of(new fromActions.LoadUserFail(error)))
                                );
                  })
                );
}
