export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export class User implements IUser {
  public id: string;
  public firstName: string;
  public lastName: string;

  constructor(user: IUser) {
    this.id = user.id || null;
    this.firstName = user.firstName || null;
    this.lastName = user.lastName || null;
  }
}
