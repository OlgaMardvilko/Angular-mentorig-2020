export interface IAuthor {
  id?: number;
  name: string;
}

export interface ICourse {
  id?: number;
  name?: string;
  date?: Date | string;
  length?: number;
  duration?: number;
  isTopRated?: boolean;
  description?: string;
  authors: IAuthor[];
}

export interface ICoursesParams {
  start: number;
  count: number;
  textFragment: string;
}


export class Course implements ICourse {
  public id: number;
  public name: string;
  public date: Date | string;
  public length: number;
  public duration: number;
  public isTopRated: boolean;
  public description: string;
  public authors: IAuthor[];

  constructor(course?: ICourse) {
    course = course ? course : null;
    this.id = course.id || null;
    this.name = course.name || null;
    this.length = course.length || null;
    this.date = course.date || null;
    this.duration = course.duration || null;
    this.isTopRated = course.isTopRated || null;
    this.description = course.description || null;
  }
}

export const CoursesFakeData = [
  {
    id: '1',
    title: 'Video course 1',
    creationDate: '2020-11-15T03:24:00',
    duration: 124,
    topRated: true,
    description: `Some course descriptions. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nunc eu odio nunc. Mauris neque neque, dignissim ac accumsan quis, sodales nec metus.
                 Donec diam est, dignissim eu ante at, luctus mollis augue. Maecenas condimentum mollis
                 turpis, non congue velit ornare at. Nunc eu metus faucibus, ullamcorper massa laoreet,
                 iaculis justo. Donec fringilla eu arcu vel bibendum. Duis ut nulla congue eros pharetra
                 convallis at non neque. Etiam eget pharetra lectus. Aliquam ullamcorper velit nibh, vel
                 egestas ante semper sed. Sed suscipit vehicula efficitur. Vivamus luctus mauris nisl, et
                 gravida mauris porttitor non. Sed ut justo egestas, imperdiet risus vitae, porttitor nunc.`
  },
  {
    id: '2',
    title: 'Video course 2',
    creationDate: '2020-12-10T03:24:00',
    duration: 106,
    topRated: true,
    description: `Some course descriptions. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nunc eu odio nunc. Mauris neque neque, dignissim ac accumsan quis, sodales nec metus.
                 Donec diam est, dignissim eu ante at, luctus mollis augue. Maecenas condimentum mollis
                 turpis, non congue velit ornare at. Nunc eu metus faucibus, ullamcorper massa laoreet,
                 iaculis justo. Donec fringilla eu arcu vel bibendum. Duis ut nulla congue eros pharetra
                 convallis at non neque. Etiam eget pharetra lectus. Aliquam ullamcorper velit nibh, vel
                 egestas ante semper sed. Sed suscipit vehicula efficitur. Vivamus luctus mauris nisl, et
                 gravida mauris porttitor non. Sed ut justo egestas, imperdiet risus vitae, porttitor nunc.`
  },
  {
    id: '3',
    title: 'Video course 3',
    creationDate: '2020-08-17T03:24:00',
    duration: 45,
    description: `Some course descriptions. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nunc eu odio nunc. Mauris neque neque, dignissim ac accumsan quis, sodales nec metus.
                 Donec diam est, dignissim eu ante at, luctus mollis augue. Maecenas condimentum mollis
                 turpis, non congue velit ornare at. Nunc eu metus faucibus, ullamcorper massa laoreet,
                 iaculis justo. Donec fringilla eu arcu vel bibendum. Duis ut nulla congue eros pharetra
                 convallis at non neque. Etiam eget pharetra lectus. Aliquam ullamcorper velit nibh, vel
                 egestas ante semper sed. Sed suscipit vehicula efficitur. Vivamus luctus mauris nisl, et
                 gravida mauris porttitor non. Sed ut justo egestas, imperdiet risus vitae, porttitor nunc.`
  },
];
