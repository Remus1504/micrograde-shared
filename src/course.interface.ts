import { ObjectId } from 'mongoose';
import { IRatingCategories, IReviewDocument } from './review.interface';
import { InstructorDocument } from './instructor.interface';

export type courseType = string | string[] | number | unknown | undefined;

export interface ICreateCourse extends Record<string, courseType> {
  // [key: string]: string | string[] | number | undefined;
  sellerId?: string;
  profilePicture?: string;
  title: string;
  categories: string;
  description: string;
  subCategories: string[];
  tags: string[];
  price: number;
  coverImage: string;
  expectedDelivery: string;
  basicTitle: string;
  basicDescription: string;
}

export interface InstructorCourse {
  _id?: string | ObjectId;
  // this "id" property is used because elastcisearch does not accept a key with an underscore "_id"
  // elasticsearch has _id as a reserved field name
  id?: string | ObjectId;
  sellerId?: string | ObjectId;
  title: string;
  username?: string;
  profilePicture?: string;
  email?: string;
  description: string;
  active?: boolean;
  categories: string;
  subCategories: string[];
  tags: string[];
  ratingsCount?: number; // make sure to add this to elasticsearch as a double
  ratingSum?: number; // make sure to add this to elasticsearch as a double
  ratingCategories?: IRatingCategories;
  expectedDelivery: string;
  basicTitle: string;
  basicDescription: string;
  price: number;
  coverImage: string;
  createdAt?: Date | string;
  sortId?: number;
  // this is added here because we will use the json format of the document
  // at some point instead of the Mongoose document
  // the json object which will contain the virtual field "id" without the field "_id" will be added to elasticsearch
  // because "_id" is a reserved field name in elasticsearch.
  toJSON?: () => unknown;
}

export interface ICourseContext {
  gig: InstructorCourse;
  seller: InstructorDocument;
  isSuccess?: boolean;
  isLoading?: boolean;
}

export interface ICourseProps {
  type?: string;
  gig?: InstructorCourse;
}

export interface ICourseCardItems {
  gig: InstructorCourse;
  linkTarget: boolean;
  showEditIcon: boolean;
}

export interface ISelectedBudget {
  minPrice: string;
  maxPrice: string;
}

export interface ICourseViewReviewsProps {
  showRatings: boolean;
  reviews?: IReviewDocument[];
}

export interface ICourseInfo {
  total: number | string;
  title: string;
  bgColor: string;
}

export interface ICourseTopProps {
  gigs: InstructorCourse[];
  title?: string;
  subTitle?: string;
  category?: string;
  width: string;
  type: string;
}
