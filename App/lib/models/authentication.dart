import 'payload.dart';

class Authentication {
  final String token;
  final Payload payload;

  Authentication({required this.token, required this.payload});

  factory Authentication.fromJson(Map<String, dynamic> json) {
    return Authentication(
      token: json['token'] as String,
      payload: Payload.fromJson(json['payload']),
    );
  }
}