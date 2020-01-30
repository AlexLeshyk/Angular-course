interface ICourseItem {
  id: number;
  name: string;
  description: string;
  createDate?: object;
  length: number
  isTopRated: boolean
}

export class CourseItem implements ICourseItem {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public length: number,
    public date: any,
    public isTopRated: boolean
  ) {
  }
}
