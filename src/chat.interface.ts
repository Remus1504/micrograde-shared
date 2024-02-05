import mongoose, { ObjectId } from 'mongoose';
import { IEnrolment } from './enrolment.interface';
import { InstructorCourse } from './course.interface';
import { InstructorDocument } from './instructor.interface';

export interface IConversationDocument extends Document {
  _id: mongoose.Types.ObjectId | string;
  conversationId: string;
  senderUsername: string;
  receiverUsername: string;
}

export interface IMessageDocument {
  _id?: string | ObjectId;
  conversationId?: string;
  body?: string;
  url?: string;
  file?: string;
  fileType?: string;
  fileSize?: string;
  fileName?: string;
  courseId?: string;
  instructorId?: string;
  studentId?: string;
  senderUsername?: string;
  senderPicture?: string;
  receiverUsername?: string;
  receiverPicture?: string;
  isRead?: boolean;
  hasOffer?: boolean;
  offer?: IEnrolment;
  hasConversationId?: boolean;
  createdAt?: Date | string;
}

export interface IMessageDetails {
  sender?: string;
  offerLink?: string;
  amount?: string;
  studentUsername?: string;
  instructorUsername?: string;
  title?: string;
  description?: string;
  durationTime?: string;
  template?: string;
}

export interface IChatBoxProps {
  instructor: IChatSellerProps;
  student: IChatBuyerProps;
  courseId: string;
  onClose: () => void;
}

export interface IChatSellerProps {
  _id: string;
  username: string;
  profilePicture: string;
  responseTime: number;
}

export interface IChatBuyerProps {
  _id: string;
  username: string;
  profilePicture: string;
}

export interface IChatMessageProps {
  message: IMessageDocument;
  instructor?: InstructorDocument;
  course?: InstructorCourse;
}
