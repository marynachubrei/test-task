import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../shared/commons/models";
import {UserStateInterface} from "../../shared/states/user-state/user.interface";
import { Store } from "@ngrx/store";
import {getGetUserStart} from "../../shared/states/user-state/user.actions";
import {getUser} from "../../shared/states/user-state/user.selectors";
import {AppState} from "../../shared/states/app.state";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$!: Observable<User| null>;

  constructor(private  store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.store.dispatch(getGetUserStart({id:'id'}));
    this.user$ = this.store.select(getUser).pipe(tap(i=>console.log(i)));
  }
}
