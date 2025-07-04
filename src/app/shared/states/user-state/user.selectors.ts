import { createFeatureSelector, createSelector } from "@ngrx/store";
import {UserStateInterface} from "./user.interface";

export const USER_STATE_NAME = "user-state";
export const getUserState = createFeatureSelector<UserStateInterface>(USER_STATE_NAME);

export const getUser = createSelector(getUserState, (state)=>state?.user)
