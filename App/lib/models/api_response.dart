class ApiResponse<T> {
  final bool success;
  final T? data;
  final String? error;
  final String? errorType;
  final String? stackTrace;
  final String? additionalInfo;
  final int statusCode;

  ApiResponse({
    required this.success,
    this.data,
    this.error,
    this.errorType,
    this.stackTrace,
    this.additionalInfo,
    required this.statusCode,
  });

  factory ApiResponse.fromJson(
    Map<String, dynamic> json,
    T Function(dynamic)? fromData,
  ) {
    return ApiResponse<T>(
      success: json['success'] as bool,
      data: fromData != null && json['data'] != null ? fromData(json['data']) : null,
      error: json['error'] as String?,
      errorType: json['errorType'] as String?,
      stackTrace: json['stackTrace'] as String?,
      additionalInfo: json['additionalInfo'] as String?,
      statusCode: json['statusCode'] as int,
    );
  }
}