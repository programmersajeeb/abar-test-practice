import { NextFunction, Request, Response } from 'express';
import { academicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IacademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../consts/pagination';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const academicSemesterData = req.body;
    const result = await academicSemesterService.createService(
      academicSemesterData,
    );

    sendResponse<IacademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is created',
      data: result,
    });
    next();
  },
);

const getallSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationFields);

    const result = await academicSemesterService.getallSemesters(
      paginationOptions,
    );

    sendResponse<IacademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrive successfully',
      meta: result.meta,
      data: result.data,
    });

    next();
  },
);

export const academicSemesterController = {
  createSemester,
  getallSemesters,
};
