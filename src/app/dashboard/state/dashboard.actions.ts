import { createAction, props } from "@ngrx/store";
import {User} from "../../commons/models";

export const GET_USER_START = "[USER STATE] Get user start";
export const GET_USER_SUCCESS = "[USER STATE] Get user success";
export const GET_USER_FAILURE = "[USER STATE] Get user failure";

export const getGetUserStart = createAction(GET_USER_START, props<{ id: string }>());
export const getGetUserSuccess = createAction(GET_USER_SUCCESS, props<{ user: User }>());
export const getGetUserFailure = createAction(GET_USER_FAILURE);
