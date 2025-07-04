import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {UserService} from "../../services/user.service";
import {of} from "rxjs";
import {getGetUserFailure, getGetUserStart, getGetUserSuccess} from "./user.actions";
import {User} from "../../commons/models";
import { catchError, map, mergeMap, take, tap } from "rxjs/operators";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {
  }

  getMeasureAutomations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getGetUserStart),
      mergeMap((action) =>
        this.userService.getUser(action.id).pipe(
          map((user: User) => {
            console.log(user)
            return getGetUserSuccess({ user });
          }),
          catchError(() => {
            return of(
              getGetUserFailure(),
            );
          }),
        ),
      ),
    ),
  );
}
