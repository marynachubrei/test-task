export interface QueryParams {
  [key: string]: string | number | string[] | number[] | boolean;
}

export interface User {
  firstName:string,
  lastName:string,
  profileImg: string,
  openedTasks: number
}
