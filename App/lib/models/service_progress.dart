class ServiceProgress {
  final int serviceId;
  final int studentId;
  final String name;
  final String institutionalEmail;
  final String type;
  final int totalHours;
  final int serviceProgress;
  final int quantityToComplete;

  ServiceProgress({
    required this.serviceId,
    required this.studentId,
    required this.name,
    required this.institutionalEmail,
    required this.type,
    required this.totalHours,
    required this.serviceProgress,
    required this.quantityToComplete,
  });

  factory ServiceProgress.fromJson(Map<String, dynamic> json) {
    return ServiceProgress(
      serviceId: json['serviceId'] as int,
      studentId: json['studentId'] as int,
      name: json['name'] as String,
      institutionalEmail: json['institutionalEmail'] as String,
      type: json['type'] as String,
      totalHours: json['totalHours'] as int,
      serviceProgress: json['serviceProgress'] as int,
      quantityToComplete: json['quantityToComplete'] as int,
    );
  }
}