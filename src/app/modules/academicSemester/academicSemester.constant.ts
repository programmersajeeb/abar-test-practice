import {
  IacademicSemesterCodes,
  IacademicSemesterMonths,
  IacademicSemesterTitles,
} from './academicSemester.interface';

export const academicSemesterTitles: IacademicSemesterTitles[] = [
  'Authumn',
  'Summer',
  'Fall',
];

export const academicSemesterCodes: IacademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterMonths: IacademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterCodeMapper: {
  [key: string]: string;
} = {
  Authumn: '01',
  Summer: '02',
  Fall: '03',
};
