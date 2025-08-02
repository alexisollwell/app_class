class Activity {
  final int? studentId;
  final String description;
  final String postingDate;
  final int hours;

  Activity({
    this.studentId,
    required this.description,
    required this.postingDate,
    required this.hours,
  });

  Map<String, dynamic> toJson() => {
        if (studentId != null) 'studentId': studentId,
        'description': description,
        'postingDate': postingDate,
        'hours': hours,
      };
}