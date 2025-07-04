import { Action, createReducer, on } from "@ngrx/store";
import {UserState} from "./user.state";
import {getGetUserSuccess} from "./user.actions";
import {UserStateInterface} from "./user.interface";

const _userReducer = createReducer(
  UserState,
  on(getGetUserSuccess, (state, action) => ({
    ...state,
    user: action.user,
  })),
);

export function userReducer(state: UserStateInterface | undefined, action: Action) {
  return _userReducer(state, action);
}
