interface CoursePageItem {
  id: number;
  title: string;
  description: string;
  createDate?: object;
  duration: number
}

export class CoursePage implements CoursePageItem {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public duration: number
  ) {
  }
}
