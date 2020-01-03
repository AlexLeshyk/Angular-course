export interface IUserEntityItem {
  id?: number;
  first?: string;
  last?: string;
  login: string;
  password: string;
}

export class UserEntity implements IUserEntityItem {
  constructor(
    public login: string,
    public password: string,
    public first?: string,
    public last?: string
  ) {
  }
}
