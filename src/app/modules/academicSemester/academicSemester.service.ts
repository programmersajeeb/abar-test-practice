import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import {
  academicSemesterCodeMapper,
  semesterSearchableField,
} from './academicSemester.constant';
import {
  IAcademicSemesterFilters,
  IacademicSemester,
} from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelper } from '../../../helpers/paginationHelpers';
import { SortOrder } from 'mongoose';

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
  filters: IAcademicSemesterFilters,
): Promise<IGenericResponse<IacademicSemester[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const andCondition = [];

  // search by searchTerm
  if (searchTerm) {
    andCondition.push({
      $or: semesterSearchableField.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // search by filter
  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([fields, value]) => ({
        [fields]: value,
      })),
    });
  }

  // const andCondition = [
  //   {
  //     $or:[
  //       {
  //         title: {
  //           $regex: searchTearm,
  //           $options: 'i'
  //         }
  //       }, {
  //         code: {
  //           $regex: searchTearm,
  //           $options: 'i'
  //         }
  //       }, {
  //         year: {
  //           $regex: searchTearm,
  //           $options: 'i'
  //         }
  //       }
  //     ]
  //   }
  // ]

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);

  const sortCondition: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const result = await AcademicSemester.find({ $and: andCondition })
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);
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
