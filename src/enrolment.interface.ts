export interface IEnrolment {
  [key: string]: string | number | boolean | undefined;
  gigTitle: string;
  price: number;
  description: string;
  deliveryInDays: number;
  oldDeliveryDate: string;
  newDeliveryDate: string;
  accepted: boolean;
  cancelled: boolean;
  reason?: string; // this is the reason for extending the delivery date
}

export interface IExtendedEnrolment {
  originalDate: string;
  newDate: string;
  days: number;
  reason: string;
  deliveryDateUpdate?: string;
}

export interface IDeliveredWork {
  message: string;
  file: string;
  fileType: string;
  fileSize: number;
  fileName: string;
}

export interface IEnrolmentEvents {
  placeOrder: string;
  requirements: string;
  orderStarted: string;
  deliveryDateUpdate?: string;
  enrolmentSucessful?: string;
  studentReview?: string;
  instructorReview?: string;
}

export interface ICourseReview {
  rating: number;
  review: string;
  date?: string;
}

export interface IEnrolmentMessage {
  sellerId?: string;
  buyerId?: string;
  ongoingTasks?: number;
  completedTasks?: number;
  totalPoints?: number;
  enrolledCourses?: string;
  recentDelivery?: string;
  type?: string;
  receiverEmail?: string;
  username?: string;
  template?: string;
  sender?: string;
  offerLink?: string;
  amount?: string;
  studentUsername?: string;
  instructorUsername?: string;
  title?: string;
  description?: string;
  durationDays?: string;
  orderId?: string;
  invoiceId?: string;
  orderDue?: string;
  requirements?: string;
  enrolmentUrl?: string;
  originalDate?: string;
  newDate?: string;
  reason?: string;
  subject?: string;
  header?: string;
  total?: string;
  message?: string;
  serviceFee?: string;
}

export interface IEnrolmentDocument {
  offer: IEnrolment;
  courseId: string;
  instructorId: string;
  instructorUsername: string;
  instructorImage: string;
  instructorEmail: string;
  courseCoverImage: string;
  courseMainTitle: string;
  courseBasicTitle: string;
  courseBasicDescription: string;
  studentId: string;
  studentUsername: string;
  studentEmail: string;
  studentImage: string;
  status: string;
  orderId: string;
  invoiceId: string;
  quantity: number;
  price: number;
  requestExtension?: IExtendedEnrolment;
  serviceFee?: number;
  requirements?: string;
  approved?: boolean;
  cancelled?: boolean;
  delivered?: boolean;
  approvedAt?: string;
  deliveredWork?: IDeliveredWork[];
  dateOrdered?: string;
  events: IEnrolmentEvents;
  studentReview?: ICourseReview;
  instructorReview?: ICourseReview;
  paymentIntent?: string;
}

export interface IEnrolmentNotifcation {
  _id?: string;
  userTo: string;
  senderUsername: string;
  senderPicture: string;
  receiverUsername: string;
  receiverPicture: string;
  isRead?: boolean;
  orderId: string;
  type?: string;
  message: string;
  rating?: number;
  createdAt: Date;
}
