class Payload {
  final String email;
  final int exp;

  Payload({required this.email, required this.exp});

  factory Payload.fromJson(Map<String, dynamic> json) {
    return Payload(
      email: json['email'] as String,
      exp: json['exp'] as int,
    );
  }
}