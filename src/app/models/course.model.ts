export interface ICourse {
  id?: string;
  title?: string;
  creationDate?: Date;
  duration?: number;
  description?: string;
}

export class Course implements ICourse {
  public id: string;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;

  constructor(course?: ICourse) {
    course = course ? course : {};
    this.id = course.id || null;
    this.title = course.title || null;
    this.creationDate = course.creationDate || null;
    this.duration = course.duration || null;
    this.description = course.description || null;
  }
}
