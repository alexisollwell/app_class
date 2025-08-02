class Service {
  final int? studentId;
  final int? serviceTypeId;
  final String serviceStartDate;
  final int? serviceStatusId;
  final String supervisorName;
  final String supervisorContactNumber;
  final String programObjective;
  final String supervisorPosition;
  final int? receivingUnitId;

  Service({
    this.studentId,
    this.serviceTypeId,
    required this.serviceStartDate,
    this.serviceStatusId,
    required this.supervisorName,
    required this.supervisorContactNumber,
    required this.programObjective,
    required this.supervisorPosition,
    this.receivingUnitId,
  });

  Map<String, dynamic> toJson() => {
        if (studentId != null) 'student_id': studentId,
        if (serviceTypeId != null) 'serviceType_id': serviceTypeId,
        'serviceStartDate': serviceStartDate,
        if (serviceStatusId != null) 'service_status_id': serviceStatusId,
        'supervisorName': supervisorName,
        'supervisorContactNumber': supervisorContactNumber,
        'programObjective': programObjective,
        'supervisorPosition': supervisorPosition,
        if (receivingUnitId != null) 'receivingUnit_id': receivingUnitId,
      };
}