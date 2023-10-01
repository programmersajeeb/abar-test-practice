import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { academicSemesterCodeMapper } from './academicSemester.constant';
import { IacademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';

const createService = async (
  payload: IacademicSemester,
): Promise<IacademicSemester> => {
  if (academicSemesterCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'You send wrong code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getallSemesters = async (
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IacademicSemester[]>> => {
  const { page = 1, limit = 10 } = paginationOptions;
  const skip = (page - 1) * limit;

  const result = await AcademicSemester.find().sort().skip(skip).limit(limit);
  const total = await AcademicSemester.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const academicSemesterService = {
  createService,
  getallSemesters,
};
