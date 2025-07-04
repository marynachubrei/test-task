import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HTTP_Methods} from "../commons/enums";
import {QueryParams} from "../commons/models";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  private baseApiUrl = "";
  private userToken = new BehaviorSubject<string>("");
  protected readonly httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
    }),
  };

  protected constructor(protected http: HttpClient) {}

  public getBaseApiUrl(): string {
    return this.baseApiUrl;
  }

  protected setBaseApiUrl(baseApiUrl: string): void {
    this.baseApiUrl = baseApiUrl;
  }

  protected initializeUserToken(token: BehaviorSubject<string>): void {
    this.userToken = token;
  }

  protected setUserToken(token: string): void {
    this.userToken.next(token);
  }

  /**
   * this method will patch or post to any route
   * you choose
   */
  protected postPut<returnType>(
    route: string,
    data: any,
    id: string | number | null,
    method: HTTP_Methods.post | HTTP_Methods.put = HTTP_Methods.post,
    qp: QueryParams = {},
    apiUrl = this.baseApiUrl,
  ): Observable<returnType> {
    const builtQuery = this.buildQuery(qp);
    return this.http[method](`${apiUrl}/${route}${id ? "/" + id : ""}${builtQuery}`, data) as Observable<returnType>;
  }

  private buildQuery(qp: QueryParams): string {
    if (qp === null || qp === undefined) {
      return "";
    }
    const qpAsStr = this.mapQueryParamsToUrl(qp).filter((qp) => qp);
    return qpAsStr.length === 0 ? "" : `?${qpAsStr.join("&")}`;
  }

  /**
   * e.g :
   * const z = {userId: 1, name: 'rowad'} then
   * this method will return ["userId=1", "name=rowad"]
   * if isArrayInQuery - we need to send parameter as it is ex: key=[1,2,3]
   */
  mapQueryParamsToUrl(qp: QueryParams): Array<string> {
    return Object.keys(qp).map((key: string) => {
      if (qp[key]) {
        if (Array.isArray(qp[key])) {
          return this.generateParams({ key, values: qp[key] as string[] | number[] });
        } else {
          return `${key}=${qp[key]}`;
        }
      }
      return "";
    });
  }

  /**
   * if parameter is array we need to generate query string from array of values
   * @param filterData
   * @private
   */
  generateParams(filterData: { key: string; values: string[] | number[] }): string {
    return filterData.values
      .map((value) => {
        return `${filterData.key}=${value}`;
      })
      .join("&");
  }
}
