SELECT
  sa.serviceActivitieId,
  sa.service_id,
  s.student_id,
  sa.description,
  sa.postingDate,
  sa.hours
FROM
  cs.ServiceActivities AS sa
  LEFT JOIN cs.Service AS s ON s.serviceId = sa.service_id
  LEFT JOIN cs.Student AS st ON s.student_id = st.studentId;