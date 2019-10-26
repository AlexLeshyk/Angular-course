export interface IUserEntityItem {
  id: number;
  firstName: string;
  lastName: string;
}

export class UserEntity implements IUserEntityItem {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
  ) {
  }
}
