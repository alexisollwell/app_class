export type serviceProgressView = {
  serviceId: number;
  studentId: number;
  name: string | null;
  careerInCourse: string | null;
  institutionName: string | null;
  supervisorName: string | null;
  phoneNumber: string | null;
  institutionalEmail: string | null;
  type: string | null;
  totalHours: number | null;
  serviceProgress: number | null;
  quantityToComplete: number | null;
}