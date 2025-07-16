SELECT
  sv.serviceId,
  s.studentId,
  s.name,
  s.institutionalEmail,
  st.type,
  tah.totalHours,
  tah.totalHours / st.quantityToComplete * 100 AS serviceProgress
FROM
  cs.Student AS s
  JOIN cs.Service AS sv ON sv.student_id = s.studentId
  JOIN cs.ServiceType AS st ON st.serviceTypeId = sv.serviceType_id
  JOIN cs.TotalActivityHours AS tah ON tah.service_id = sv.serviceId;