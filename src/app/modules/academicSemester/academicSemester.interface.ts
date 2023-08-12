import { Model } from 'mongoose';

export type IacademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IacademicSemesterTitles = 'Authumn' | 'Summer' | 'Fall';
export type IacademicSemesterCodes = '01' | '02' | '03';

export type IacademicSemester = {
  title: IacademicSemesterTitles;
  year: number;
  code: IacademicSemesterCodes;
  startMonth: IacademicSemesterMonths;
  endMonth: IacademicSemesterMonths;
};

export type academicSemesterModel = Model<IacademicSemester>;
