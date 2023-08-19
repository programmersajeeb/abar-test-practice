import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { academicSemesterCodeMapper } from './academicSemester.constant';
import { IacademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createService = async (
  payload: IacademicSemester,
): Promise<IacademicSemester> => {
  if (academicSemesterCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'You send wrong code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

export const academicSemesterService = {
  createService,
};
