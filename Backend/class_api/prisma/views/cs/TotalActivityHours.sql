SELECT
  MAX(service_id) AS service_id,
  SUM(hours) AS totalHours
FROM
  cs.ServiceActivities
GROUP BY
  service_id,
  serviceActivitieId;