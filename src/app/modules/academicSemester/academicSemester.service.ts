import { IacademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createService = async (
  payload: IacademicSemester,
): Promise<IacademicSemester> => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const academicSemesterService = {
  createService,
};
