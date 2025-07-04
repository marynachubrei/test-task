import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../commons/models";
import {UserConstants} from "../commons/constants/user-constants";

@Injectable({
  providedIn: "root",
})

export class UserService {
  constructor(
    //@Inject("baseApiUrl") private baseUrl: string,
    http: HttpClient,
   // private manageLocalstorageService: ManageLocalstorageService,
  ) {
    // super(http);
    // this.setBaseApiUrl(this.baseUrl);
  }

  getUser(id: string): Observable<User>{
    return of(UserConstants.USER)
  }
}
