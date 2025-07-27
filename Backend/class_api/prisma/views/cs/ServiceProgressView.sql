SELECT
  sv.serviceId,
  s.studentId,
  s.name,
  s.institutionalEmail,
  st.type,
  tah.totalHours,
  CASE
    WHEN st.quantityToComplete = 0 THEN 0
    ELSE CASE
      WHEN (
        CAST(tah.totalHours AS FLOAT) / st.quantityToComplete
      ) * 100 > 100 THEN 100
      ELSE (
        CAST(tah.totalHours AS FLOAT) / st.quantityToComplete
      ) * 100
    END
  END AS serviceProgress,
  st.quantityToComplete
FROM
  cs.Student AS s
  JOIN cs.Service AS sv ON sv.student_id = s.studentId
  JOIN cs.ServiceType AS st ON st.serviceTypeId = sv.serviceType_id
  JOIN cs.TotalActivityHours AS tah ON tah.service_id = sv.serviceId;