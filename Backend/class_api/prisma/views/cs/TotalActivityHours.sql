SELECT
  MAX(service_id) AS service_id,
  Sum(hours) AS totalHours
FROM
  [CollegeService].[cs].[ServiceActivities]
GROUP BY
  service_id,
  serviceActivitieId;