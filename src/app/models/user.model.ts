export interface IUserName {
  first: string;
  last: string;
}

export interface IUser {
  id: number;
  fakeToken: string;
  name: IUserName;
  login: string;
  password: string;
}

export class User implements IUser {
  public id: number;
  public name: IUserName;
  public fakeToken: string;
  public login: string;
  public password: string;

  constructor(user: IUser) {
    this.id = user.id || null;
    this.fakeToken = user.fakeToken || null;
    this.name.first = user.name.first || null;
    this.name.last = user.name.last || null;
    this.login = user.login || null;
    this.password = user.password || null;
  }
}
