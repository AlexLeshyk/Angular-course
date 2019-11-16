interface ICourseItem {
  id: number;
  title: string;
  description: string;
  createDate?: object;
  duration: number
  topRated: boolean
}

export class CourseItem implements ICourseItem {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public duration: number,
    public dateObj: any,
    public topRated: boolean
  ) {
  }
}
