export interface ICourse {
  id?: string;
  title?: string;
  creationDate?: Date | string;
  duration?: number;
  description?: string;
}

export class Course implements ICourse {
  public id: string;
  public title: string;
  public creationDate: Date | string;
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

export const CoursesFakeData = [
  {
    id: '1',
    title: 'Video course 1',
    creationDate: '2020-10-20T03:24:00',
    duration: 120,
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
    creationDate: '2020-09-10T03:24:00',
    duration: 106,
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
    duration: 110,
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
