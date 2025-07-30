export type ReporteActividades = {
  header: {
    title: string;
    titleInfo: string;
  };
  activityInfoHeader: {
    socialService: string;
    profesionalPractices: string;
    xMark: string;
    city: string;
    preposition: string;
  };
  middleStudentInfo: {
    entityName: string;
    supervisorName: string;
    studentName: string;
    phoneNumber: string;
    email: string;
    career: string;
  };
  tableText: {
    programInfo: string;
    date: string;
    N: string;
    activities: string;
    hours: string;
    totalHours: string;
  };
  signature: {
    institutionSignature: string;
    studentSignature: string;
    cesunSignature: string;
  };
};
