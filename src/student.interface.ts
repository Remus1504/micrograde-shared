import { ObjectId } from 'mongoose';

export interface studentDocument {
  _id?: string | ObjectId;
  username?: string;
  email?: string;
  profilePicture?: string;
  country: string;
  isInstructor?: boolean;
  enrolledCourses: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IReduxBuyer {
  type?: string;
  payload: studentDocument;
}
